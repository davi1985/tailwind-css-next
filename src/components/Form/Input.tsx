import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>
type InputControlProps = ComponentProps<'input'>
type InputRootProps = ComponentProps<'div'>

const Prefix = (props: InputPrefixProps) => <div {...props} />

const Control = (props: InputControlProps) => (
  <input
    type="text"
    className="border-zero flex-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
    {...props}
  />
)

const Root = (props: InputRootProps) => (
  <div
    className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    {...props}
  />
)

export const Input = {
  Prefix,
  Control,
  Root,
}
