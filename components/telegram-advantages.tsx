import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Bot, Share2, TrendingUp } from "lucide-react"

export default function TelegramAdvantages() {
  const advantages = [
    {
      icon: Users,
      title: "COMMUNITY GROWTH",
      description: "Build and expand your gaming community directly through Telegram channels and groups",
      color: "cyan",
    },
    {
      icon: Bot,
      title: "AUTOMATED BOTS",
      description: "Instant game access through automated bots that handle player onboarding and game launches",
      color: "green",
    },
    {
      icon: Share2,
      title: "SOCIAL SHARING",
      description: "Share scores, achievements, and tweets directly from the game to expand your reach",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "VIRAL GROWTH",
      description: "Leverage Telegram's viral nature to achieve exponential community and player growth",
      color: "yellow",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "border-cyan-400 text-cyan-400",
      green: "border-green-400 text-green-400",
      purple: "border-purple-400 text-purple-400",
      yellow: "border-yellow-400 text-yellow-400",
    }
    return colorMap[color as keyof typeof colorMap] || "border-cyan-400 text-cyan-400"
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Space Invaders/Galaga Gaming Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {/* Animated invaders */}
        <div className="absolute top-1/4 right-1/4 invader-move">
          <div className="w-8 h-6 bg-purple-400 pixel-invader"></div>
        </div>
        <div className="absolute top-1/3 left-1/3 invader-move-delay">
          <div className="w-8 h-6 bg-cyan-400 pixel-invader"></div>
        </div>
        <div className="absolute top-1/2 right-1/5 invader-move-delay-2">
          <div className="w-8 h-6 bg-green-400 pixel-invader"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 invader-move">
          <div className="w-8 h-6 bg-yellow-400 pixel-invader"></div>
        </div>

        {/* Laser beams */}
        <div className="absolute top-0 left-1/3 w-1 h-32 bg-cyan-400 laser-beam"></div>
        <div className="absolute top-0 right-1/4 w-1 h-24 bg-purple-400 laser-beam-delay"></div>

        {/* UFO */}
        <div className="absolute top-10 left-10 ufo-move">
          <div className="w-12 h-6 bg-yellow-400 rounded-full"></div>
          <div className="w-8 h-3 bg-gray-400 rounded-full mx-auto -mt-1"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 retro-font">WHY TELEGRAM GAMING?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the unique advantages of having our games integrated with Telegram
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            const colorClasses = getColorClasses(advantage.color)

            return (
              <Card
                key={index}
                className={`bg-black/80 border-2 ${colorClasses} hover:bg-slate-800/70 transition-colors retro-card`}
              >
                <CardHeader className="text-center">
                  <Icon className={`h-12 w-12 ${colorClasses} mx-auto mb-4`} />
                  <CardTitle className={`text-white retro-font ${colorClasses}`}>{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
