import { ComponentProps } from 'react'

export type TextAreaProps = ComponentProps<'textarea'>

export const TextArea = (props: TextAreaProps) => (
  <textarea
    // defaultValue="I'm software engineer specializing in frontend development using technologies like React, Next.js , and TypeScript."
    className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    {...props}
  />
)
