'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export const FileList = () => {
  const { files, onRemoveFile } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(({ name, size }) => (
        <FileItem
          name={name}
          size={size}
          key={name}
          onRemove={onRemoveFile}
          state="error"
        />
      ))}
    </div>
  )
}
