import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import * as FileInput from '@/components/Form/FileInput'

import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { SettingsTabs } from '@/components/SettingsTabs'
import { countries, timezones } from '@/mock'
import { Input } from '../components/Form/Input'
import { TextArea } from '@/components/Form/Textarea'

const Home = () => (
  <>
    <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

    <SettingsTabs />

    <div className="mt-6 flex flex-col ">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>

          <span className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            form="settings"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </div>

      <form
        id="settings"
        action=""
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>

          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Davi" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Silva" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>

          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>

            <Input.Control
              id="email"
              type="email"
              defaultValue="davi@email.com"
            />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>

          <Input.Root>
            <Input.Control id="role" defaultValue="Software Engineer" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>

          <Select placeholder="Select a country...">
            {countries.map(({ name, value, flag }) => (
              <SelectItem key={value} value={value} text={`${flag}  ${name}`} />
            ))}
          </Select>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="time-zone"
            className="text-sm font-medium text-zinc-700"
          >
            TimeZone
          </label>

          <Select placeholder="Select a timezone...">
            {timezones.map(({ name, value }) => (
              <SelectItem key={value} value={value} text={`⏱️ ${name}`} />
            ))}
          </Select>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction
            </span>
          </label>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal" defaultChecked text="Normal Text" />
                <SelectItem value="md" defaultChecked text="Markdown" />
              </Select>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="rounded-r-md p-2 hover:bg-zinc-50"
                >
                  <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </button>

                <button
                  type="button"
                  className="rounded-r-md p-2 hover:bg-zinc-50"
                >
                  <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </button>

                <button
                  type="button"
                  className="rounded-r-md p-2 hover:bg-zinc-50"
                >
                  <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </button>

                <button
                  type="button"
                  className="rounded-r-md p-2 hover:bg-zinc-50"
                >
                  <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </button>

                <button
                  type="button"
                  className="rounded-r-md p-2 hover:bg-zinc-50"
                >
                  <ListOrdered
                    strokeWidth={3}
                    className="h-4 w-4 text-zinc-500"
                  />
                </button>
              </div>
            </div>

            <TextArea
              id="bio"
              defaultValue="I'm software engineer specializing in frontend development using technologies like React, Next.js , and TypeScript."
              className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="portfolio"
            className="text-sm font-medium text-zinc-700"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets ofr your work.
            </span>
          </label>

          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <button
            type="button"
            className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </>
)

export default Home
