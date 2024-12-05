'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>
export type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
  onRemoveFile: (filename: string) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export const Root = (props: RootProps) => {
  const id = useId()

  const [files, setFiles] = useState<File[]>([])

  const onFilesSelected = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  const onRemoveFile = (filename: string) =>
    setFiles((prevState) => prevState.filter((file) => file.name !== filename))

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onRemoveFile }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
