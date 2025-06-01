import { Bot, Share2, TrendingUp } from "lucide-react"

export default function HeroBanner() {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden mt-16">
      {/* Gaming Background with Diagonal Split */}
      <div className="absolute inset-0">
        {/* Left side - SMK Gaming Section */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-green-600">
          <div className="absolute inset-0 bg-black/20" />

          {/* Mario-style platforms and elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated platforms */}
            <div className="absolute bottom-32 left-16 w-20 h-6 bg-green-500 rounded platform-bounce"></div>
            <div className="absolute bottom-48 left-40 w-20 h-6 bg-green-500 rounded platform-bounce-delay"></div>
            <div className="absolute bottom-64 left-24 w-20 h-6 bg-green-500 rounded platform-bounce-delay-2"></div>
            <div className="absolute bottom-80 left-56 w-20 h-6 bg-green-500 rounded platform-bounce"></div>

            {/* Animated coins */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full coin-spin"></div>
            <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-yellow-400 rounded-full coin-spin-delay"></div>
            <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-yellow-400 rounded-full coin-spin-delay-2"></div>
            <div className="absolute top-2/3 left-2/5 w-8 h-8 bg-yellow-400 rounded-full coin-spin"></div>

            {/* Pixel clouds */}
            <div className="absolute top-24 left-1/4 pixel-cloud"></div>
            <div className="absolute top-40 left-1/2 pixel-cloud-delay"></div>
            <div className="absolute top-56 left-1/3 pixel-cloud"></div>

            {/* Flappy bird style pipes */}
            <div className="absolute right-24 top-0 w-12 h-40 bg-green-600 pipe-move"></div>
            <div className="absolute right-24 bottom-0 w-12 h-48 bg-green-600 pipe-move"></div>
            <div className="absolute right-40 top-20 w-12 h-32 bg-green-600 pipe-move-delay"></div>

            {/* Question blocks */}
            <div className="absolute top-1/4 left-1/2 w-10 h-10 bg-yellow-600 border-2 border-yellow-400 question-block"></div>
            <div className="absolute top-1/2 left-1/6 w-10 h-10 bg-yellow-600 border-2 border-yellow-400 question-block-delay"></div>
          </div>
        </div>

        {/* Right side - ChrisCode Crypto Section */}
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-800 via-blue-700 to-blue-600">
          <div className="absolute inset-0 bg-black/20" />

          {/* Space Invaders/Galaga style elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated invaders */}
            <div className="absolute top-1/4 right-1/4 invader-move">
              <div className="w-10 h-8 bg-blue-400 pixel-invader"></div>
            </div>
            <div className="absolute top-1/3 right-1/3 invader-move-delay">
              <div className="w-10 h-8 bg-blue-400 pixel-invader"></div>
            </div>
            <div className="absolute top-1/2 right-1/5 invader-move-delay-2">
              <div className="w-10 h-8 bg-blue-400 pixel-invader"></div>
            </div>
            <div className="absolute top-2/3 right-1/3 invader-move">
              <div className="w-10 h-8 bg-blue-400 pixel-invader"></div>
            </div>

            {/* Crypto symbols floating */}
            <div className="absolute top-1/4 right-1/2 text-3xl text-yellow-400 crypto-float">₿</div>
            <div className="absolute top-1/2 right-1/3 text-3xl text-blue-400 crypto-float-delay">Ξ</div>
            <div className="absolute top-2/3 right-1/4 text-3xl text-green-400 crypto-float-delay-2">◎</div>
            <div className="absolute top-1/3 right-2/3 text-3xl text-blue-400 crypto-float">₳</div>

            {/* Tetris-style blocks */}
            <div className="absolute bottom-24 right-16 tetris-block"></div>
            <div className="absolute bottom-40 right-32 tetris-block-delay"></div>
            <div className="absolute bottom-56 right-20 tetris-block"></div>

            {/* Pac-Man dots */}
            <div className="absolute top-3/4 right-1/3 pacman-dots"></div>
            <div className="absolute top-1/5 right-1/2 pacman-dots"></div>

            {/* Laser beams */}
            <div className="absolute top-0 right-1/3 w-2 h-40 bg-blue-400 laser-beam"></div>
            <div className="absolute top-0 right-1/4 w-2 h-32 bg-blue-400 laser-beam-delay"></div>
          </div>
        </div>

        {/* Diagonal Split with Gaming Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-green-600"
            style={{
              clipPath: "polygon(0 0, 70% 0, 30% 100%, 0 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black/20" />

            {/* Gaming animations for left side */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute bottom-32 left-16 w-20 h-6 bg-green-500 rounded platform-bounce"></div>
              <div className="absolute bottom-48 left-40 w-20 h-6 bg-green-500 rounded platform-bounce-delay"></div>
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full coin-spin"></div>
              <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-yellow-400 rounded-full coin-spin-delay"></div>
              <div className="absolute top-24 left-1/4 pixel-cloud"></div>
              <div className="absolute top-1/4 left-1/2 w-10 h-10 bg-yellow-600 border-2 border-yellow-400 question-block"></div>
            </div>
          </div>

          {/* Retro pixel border */}
          <div
            className="absolute inset-0 border-r-4 border-white/70"
            style={{
              clipPath: "polygon(70% 0, 72% 0, 32% 100%, 30% 100%)",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 retro-font">
            <span className="bg-gradient-to-r from-green-400 via-white to-blue-400 bg-clip-text text-transparent glow-text">
              DISCOVER NEXT-GEN GAMING
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed retro-font">
            EXPERIENCE REVOLUTIONARY TELEGRAM-INTEGRATED GAMES
            <br />
            WITH CRYPTOCURRENCY REWARDS AND COMMUNITY BUILDING
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="retro-card bg-black/80 border-2 border-green-400 rounded-lg p-6">
            <Bot className="h-10 w-10 text-green-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2 retro-font text-green-400">AUTO BOTS</h3>
            <p className="text-sm text-gray-300 retro-font">INSTANT GAME ACCESS</p>
          </div>
          <div className="retro-card bg-black/80 border-2 border-blue-400 rounded-lg p-6">
            <Share2 className="h-10 w-10 text-blue-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2 retro-font text-blue-400">SOCIAL SHARE</h3>
            <p className="text-sm text-gray-300 retro-font">SHARE ACHIEVEMENTS</p>
          </div>
          <div className="retro-card bg-black/80 border-2 border-green-400 rounded-lg p-6">
            <TrendingUp className="h-10 w-10 text-green-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2 retro-font text-green-400">CRYPTO REWARDS</h3>
            <p className="text-sm text-gray-300 retro-font">EARN WHILE PLAYING</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="retro-scroll-indicator">
          <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center bg-black/50">
            <div className="w-2 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
