import { Button } from "@/components/ui/button"
import { Gamepad2, Menu } from "lucide-react"

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-cyan-400 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
          <span className="text-lg sm:text-2xl font-bold text-white retro-font tracking-wider">GameTelegram</span>
        </div>
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 retro-font text-sm lg:text-base">
            HOME
          </Button>
          <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 retro-font text-sm lg:text-base">
            GAMES
          </Button>
          <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 retro-font text-sm lg:text-base">
            ABOUT
          </Button>
          <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 retro-font text-sm lg:text-base">
            CONTACT
          </Button>
        </div>
        <Button variant="ghost" className="md:hidden text-cyan-400 p-2">
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </nav>
  )
}
