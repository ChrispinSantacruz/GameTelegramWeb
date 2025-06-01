import { Button } from "@/components/ui/button"
import { Gamepad2, Github, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4 border-t-2 border-cyan-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Gamepad2 className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white retro-font">GameTelegram</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating the future of gaming through innovative Telegram integration and cryptocurrency rewards.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 retro-font">GAMES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Crypto Runner
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Battle Royale
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Puzzle Master
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 retro-font">COMPANY</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-cyan-400 mt-8 pt-8 text-center text-gray-400">
          <p className="retro-font">&copy; 2024 GameTelegram. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
