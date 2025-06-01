import { Button } from "@/components/ui/button"
import { Gamepad2, Menu } from "lucide-react"

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-cyan-400 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <Gamepad2 className="h-8 w-8 text-cyan-400" />
          <span className="text-2xl font-bold text-white retro-font tracking-wider">GameTelegram</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 retro-font">
            HOME
          </Button>
          <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 retro-font">
            GAMES
          </Button>
          <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 retro-font">
            ABOUT
          </Button>
          <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 retro-font">
            CONTACT
          </Button>
        </div>
        <Button variant="ghost" className="md:hidden text-cyan-400">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  )
}
