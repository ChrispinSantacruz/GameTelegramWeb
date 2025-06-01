import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gamepad2, Star, Users, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GamesSection() {
  const game = {
    id: 1,
    title: "KokoTheRoach",
    description: "🎮 You are a cockroach that shoots bundles of bills to defeat bosses like Trump and Elon.",
    detailedDescription:
      "Take control of Koko, a fearless cockroach armed with bundles of cash! Battle through intense boss fights against iconic figures like Trump (who attacks with bombs) and Elon (who launches rockets). Survive the chaos with special power-ups and climb the leaderboards in this wild, satirical shooter.",
    gallery: [
      "/placeholder.svg?height=250&width=400",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    playLink: "https://t.me/kokotheroachbot",
    tags: ["Boss Battles", "Satirical", "Mobile & PC"],
    stats: {
      players: "25K+",
      rating: 4.9,
      rewards: "Score-based",
    },
    features: [
      {
        icon: "👤",
        text: "Personalized login with your name",
      },
      {
        icon: "🎯",
        text: "Unique bosses: Trump (bombs) and Elon (rockets)",
      },
      {
        icon: "⚡",
        text: "Special power-ups: shield and sugar",
      },
      {
        icon: "📱",
        text: "Share your score anytime you want",
      },
      {
        icon: "🎮",
        text: "Controls optimized for mobile and PC",
      },
    ],
  }

  return (
    <section className="py-20 px-4 bg-slate-800/30 relative overflow-hidden">
      {/* Pac-Man and Tetris Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Pac-Man dots trail */}
        <div className="absolute top-1/4 left-0 pacman-trail"></div>
        <div className="absolute top-1/2 right-0 pacman-trail-reverse"></div>
        <div className="absolute bottom-1/4 left-0 pacman-trail-delay"></div>

        {/* Tetris blocks */}
        <div className="absolute top-20 right-10 tetris-block"></div>
        <div className="absolute top-32 right-24 tetris-block-delay"></div>
        <div className="absolute bottom-20 left-10 tetris-block"></div>
        <div className="absolute bottom-32 left-24 tetris-block-delay"></div>

        {/* Game power-ups */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-red-500 rounded-full power-up-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-blue-500 rounded-full power-up-pulse-delay"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 retro-font">OUR FEATURED GAME</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our latest and most exciting Telegram-integrated game
          </p>
        </div>

        <Card className="bg-black/80 border-2 border-cyan-400 hover:bg-slate-800/70 transition-all duration-300 retro-card">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Game Gallery */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={game.gallery[0] || "/placeholder.svg"}
                  alt={`${game.title} - Main Screenshot`}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover border-2 border-cyan-400/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-cyan-600/90 text-white border border-cyan-400">Boss Battle Mode</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600/90 text-white border border-red-400">🪳 Featured</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {game.gallery.slice(1).map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${game.title} - Screenshot ${index + 2}`}
                      width={200}
                      height={120}
                      className="w-full h-32 object-cover border border-cyan-400/30 hover:border-cyan-400 transition-colors"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Game Info */}
            <div className="space-y-6">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-white text-3xl retro-font flex items-center">🪳 {game.title}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 font-bold retro-font">{game.stats.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag) => (
                    <Badge key={tag} className="bg-cyan-600/20 text-cyan-300 border border-cyan-400">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-6">
                <div className="space-y-4">
                  <CardDescription className="text-gray-300 text-lg leading-relaxed">
                    {game.description}
                  </CardDescription>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {game.detailedDescription}
                  </CardDescription>
                </div>

                {/* Game Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg border border-cyan-400/30">
                    <Users className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-cyan-400 font-bold retro-font text-sm">{game.stats.players}</div>
                    <div className="text-gray-400 text-xs retro-font">PLAYERS</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg border border-green-400/30">
                    <Trophy className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <div className="text-green-400 font-bold retro-font text-sm">{game.stats.rewards}</div>
                    <div className="text-gray-400 text-xs retro-font">REWARDS</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg border border-yellow-400/30">
                    <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-yellow-400 font-bold retro-font text-sm">{game.stats.rating}/5</div>
                    <div className="text-gray-400 text-xs retro-font">RATING</div>
                  </div>
                </div>

                {/* Game Features */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold retro-font text-lg">✨ GAME FEATURES:</h4>
                  <div className="space-y-3">
                    {game.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg border border-cyan-400/20"
                      >
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="text-gray-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Play Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 border-2 border-red-400 retro-font text-lg"
                >
                  <Link href={game.playLink} target="_blank">
                    <Gamepad2 className="h-5 w-5 mr-2" />🪳 PLAY KOKOTHEROACH NOW
                  </Link>
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
