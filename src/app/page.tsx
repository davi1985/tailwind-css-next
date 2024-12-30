import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import * as FileInput from '@/components/Form/FileInput'

import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { SettingsTabs } from '@/components/SettingsTabs'
import { countries, timezones } from '@/mock'
import { Input } from '../components/Input'
import { TextArea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

const Home = () => (
  <>
    <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
      Settings
    </h1>

    <SettingsTabs />

    <div className="mt-6 flex flex-col">
      <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Personal info
          </h2>

          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>

          <Button variant="primary" type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>

      <form
        id="settings"
        action=""
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Davi" />
            </Input.Root>

            <div className="flex flex-col gap-3 lg:block">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300"
              >
                Last name
              </label>

              <Input.Root>
                <Input.Control id="lastName" defaultValue="Silva" />
              </Input.Root>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
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

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="photo"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="role"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Role
          </label>

          <Input.Root>
            <Input.Control id="role" defaultValue="Software Engineer" />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Country
          </label>

          <Select placeholder="Select a country...">
            {countries.map(({ name, value, flag }) => (
              <SelectItem key={value} value={value} text={`${flag}  ${name}`} />
            ))}
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="time-zone"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            TimeZone
          </label>

          <Select placeholder="Select a timezone...">
            {timezones.map(({ name, value }) => (
              <SelectItem key={value} value={value} text={`⏱️ ${name}`} />
            ))}
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="bio"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction
            </span>
          </label>

          <div className="space-y-3">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal" defaultChecked text="Normal Text" />
                <SelectItem value="md" defaultChecked text="Markdown" />
              </Select>

              <div className="flex items-center gap-1">
                <Button variant="ghost" type="button">
                  <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </Button>

                <Button variant="ghost" type="button">
                  <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </Button>

                <Button type="button" variant="ghost">
                  <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </Button>

                <Button type="button" variant="ghost">
                  <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </Button>

                <Button type="button" variant="ghost">
                  <ListOrdered
                    strokeWidth={3}
                    className="h-4 w-4 text-zinc-500"
                  />
                </Button>
              </div>
            </div>

            <TextArea
              id="bio"
              defaultValue="I'm software engineer specializing in frontend development using technologies like React, Next.js , and TypeScript."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="portfolio"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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
          <Button variant="outline" type="button">
            Cancel
          </Button>

          <Button variant="primary" type="submit" form="settings">
            Save
          </Button>
        </div>
      </form>
    </div>
  </>
)

export default Home
