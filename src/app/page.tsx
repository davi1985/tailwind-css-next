import { Mail } from 'lucide-react'

import { SettingsTabs } from '@/components/SettingsTabs'
import { Input } from '../components/Input'

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

      <form id="settings" action="" className="mt-6 flex w-full flex-col gap-5">
        <div className="grid-cols-form grid gap-3">
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

        <div className="grid-cols-form grid gap-3">
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
      </form>
    </div>
  </>
)

export default Home
