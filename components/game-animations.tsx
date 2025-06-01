export default function GameAnimations() {
  return (
    <div className="absolute inset-0">
      {/* Left side - SMK Gaming Section */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* SMK Brand */}
        <div className="absolute top-8 left-8 z-20">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 retro-font glow-text">SMK</h2>
          <p className="text-cyan-300 retro-font text-sm">GAMING STUDIO</p>
        </div>

        {/* Mario-style platforms and elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated platforms */}
          <div className="absolute bottom-20 left-10 w-16 h-4 bg-green-500 rounded platform-bounce"></div>
          <div className="absolute bottom-32 left-32 w-16 h-4 bg-green-500 rounded platform-bounce-delay"></div>
          <div className="absolute bottom-44 left-16 w-16 h-4 bg-green-500 rounded platform-bounce-delay-2"></div>

          {/* Animated coins */}
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-yellow-400 rounded-full coin-spin"></div>
          <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-yellow-400 rounded-full coin-spin-delay"></div>
          <div className="absolute top-2/3 left-1/5 w-6 h-6 bg-yellow-400 rounded-full coin-spin-delay-2"></div>

          {/* Pixel clouds */}
          <div className="absolute top-20 left-1/4 pixel-cloud"></div>
          <div className="absolute top-32 left-1/2 pixel-cloud-delay"></div>

          {/* Flappy bird style pipes */}
          <div className="absolute right-20 top-0 w-8 h-32 bg-green-600 pipe-move"></div>
          <div className="absolute right-20 bottom-0 w-8 h-40 bg-green-600 pipe-move"></div>
        </div>
      </div>

      {/* Right side - ChrisCode Crypto Section */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-900 via-purple-800 to-purple-700">
        {/* ChrisCode Brand */}
        <div className="absolute top-8 right-8 z-20 text-right">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-400 retro-font glow-text">ChrisCode</h2>
          <p className="text-purple-300 retro-font text-sm">CRYPTO DEV</p>
        </div>

        {/* Space Invaders/Galaga style elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated invaders */}
          <div className="absolute top-1/4 right-1/4 invader-move">
            <div className="w-8 h-6 bg-purple-400 pixel-invader"></div>
          </div>
          <div className="absolute top-1/3 right-1/3 invader-move-delay">
            <div className="w-8 h-6 bg-purple-400 pixel-invader"></div>
          </div>
          <div className="absolute top-1/2 right-1/5 invader-move-delay-2">
            <div className="w-8 h-6 bg-purple-400 pixel-invader"></div>
          </div>

          {/* Crypto symbols floating */}
          <div className="absolute top-1/3 right-1/2 text-2xl text-yellow-400 crypto-float">₿</div>
          <div className="absolute top-1/2 right-1/3 text-2xl text-blue-400 crypto-float-delay">Ξ</div>
          <div className="absolute top-2/3 right-1/4 text-2xl text-green-400 crypto-float-delay-2">◎</div>

          {/* Tetris-style blocks */}
          <div className="absolute bottom-20 right-10 tetris-block"></div>
          <div className="absolute bottom-32 right-24 tetris-block-delay"></div>

          {/* Pac-Man dots */}
          <div className="absolute top-3/4 right-1/3 pacman-dots"></div>
        </div>
      </div>

      {/* Diagonal Split with Retro Border */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
          style={{
            clipPath: "polygon(0 0, 70% 0, 30% 100%, 0 100%)",
          }}
        >
          {/* SMK Gaming Elements */}
          <div className="absolute top-8 left-8 z-20">
            <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 retro-font glow-text">SMK</h2>
            <p className="text-cyan-300 retro-font text-sm">GAMING STUDIO</p>
          </div>

          {/* Gaming animations for left side */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-20 left-10 w-16 h-4 bg-green-500 rounded platform-bounce"></div>
            <div className="absolute bottom-32 left-32 w-16 h-4 bg-green-500 rounded platform-bounce-delay"></div>
            <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-yellow-400 rounded-full coin-spin"></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-yellow-400 rounded-full coin-spin-delay"></div>
            <div className="absolute top-20 left-1/4 pixel-cloud"></div>
          </div>
        </div>

        {/* Retro pixel border */}
        <div
          className="absolute inset-0 border-r-4 border-cyan-400 retro-border"
          style={{
            clipPath: "polygon(70% 0, 72% 0, 32% 100%, 30% 100%)",
          }}
        />
      </div>
    </div>
  )
}
