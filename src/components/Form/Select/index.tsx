'use client'

import * as PrimitiveSelect from '@radix-ui/react-select'
import { ChevronDownIcon } from 'lucide-react'
import { ReactNode } from 'react'

export type SelectProps = {
  children: ReactNode
  placeholder: string
}

export const Select = ({ placeholder, children }: SelectProps) => (
  <PrimitiveSelect.Root>
    <PrimitiveSelect.Trigger className="flex h-11 w-full items-center  justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
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
        className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
      >
        <PrimitiveSelect.Viewport>{children}</PrimitiveSelect.Viewport>
      </PrimitiveSelect.Content>
    </PrimitiveSelect.Portal>
  </PrimitiveSelect.Root>
)
