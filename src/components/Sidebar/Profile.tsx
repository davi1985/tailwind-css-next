import { LogOut } from 'lucide-react'

export const Profile = () => (
  <div className="flex items-center gap-3">
    <img
      src="https://github.com/davi1985.png"
      alt=""
      className="h-10 w-10 rounded-full"
    />

    <div className="flex flex-1 flex-col truncate">
      <span className="text-sm font-semibold text-zinc-700">Davi Silva</span>
      <span className="truncate text-sm text-zinc-500">
        davisilvaphoto@gmail.com
      </span>
    </div>

    <button type="button" className="ml-auto rounded-r-md p-2 hover:bg-zinc-50">
      <LogOut className="h-5 w-5 text-zinc-500" />
    </button>
  </div>
)
