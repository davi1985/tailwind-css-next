'use client'

import * as PrimitiveSelect from '@radix-ui/react-select'
import { ChevronDownIcon } from 'lucide-react'
import { ReactNode } from 'react'

export type SelectProps = PrimitiveSelect.SelectProps & {
  children: ReactNode
  placeholder: string
}

export const Select = ({ placeholder, children, ...props }: SelectProps) => (
  <PrimitiveSelect.Root {...props}>
    <PrimitiveSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400">
      <PrimitiveSelect.Value placeholder={placeholder} className="text-black" />

      <PrimitiveSelect.Icon>
        <ChevronDownIcon className="h-5 w-5 text-zinc-500" />
      </PrimitiveSelect.Icon>
    </PrimitiveSelect.Trigger>

    <PrimitiveSelect.Portal>
      <PrimitiveSelect.Content
        sideOffset={8}
        side="bottom"
        position="popper"
        className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
      >
        <PrimitiveSelect.Viewport>{children}</PrimitiveSelect.Viewport>
      </PrimitiveSelect.Content>
    </PrimitiveSelect.Portal>
  </PrimitiveSelect.Root>
)
