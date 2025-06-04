"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gamepad2, Star, Users, Trophy, Image as ImageIcon, Zap, Shield, Target, ChevronDown, ChevronUp, Eye, MessageCircle, TrendingUp, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GamesSection() {
  const [showGallery, setShowGallery] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  const game = {
    id: 1,
    title: "KokoTheRoach",
    description: "🎮 You are a cockroach that shoots bundles of bills to defeat bosses like Trump and Elon.",
    detailedDescription:
      "Take control of Koko, a fearless cockroach armed with bundles of cash! Battle through intense boss fights against iconic figures like Trump (who attacks with bombs) and Elon (who launches rockets). Survive the chaos with special power-ups and climb the leaderboards in this wild, satirical shooter.",
    mainImage: "/placeholder.svg?height=300&width=500",
    secondaryImages: [
      {
        url: "/placeholder.svg?height=200&width=300",
        title: "Batalla contra Trump",
        badge: "Boss Battle"
      },
      {
        url: "/placeholder.svg?height=200&width=300", 
        title: "Combate con Elon",
        badge: "Space Combat"
      },
      {
        url: "/placeholder.svg?height=200&width=300",
        title: "Power-ups Especiales",
        badge: "Power-ups"
      },
      {
        url: "/placeholder.svg?height=200&width=300",
        title: "Modo Supervivencia",
        badge: "Survival"
      },
      {
        url: "/placeholder.svg?height=200&width=300",
        title: "Tabla de Puntuaciones",
        badge: "Leaderboard"
      },
      {
        url: "/placeholder.svg?height=200&width=300",
        title: "Personalizaciones",
        badge: "Customization"
      }
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

  const otherGames = [
    {
      id: 2,
      title: "CryptoRunner",
      description: "🏃‍♂️ Run through blockchain worlds collecting crypto coins while avoiding market crashes!",
      image: "/placeholder.svg?height=200&width=300",
      playLink: "https://t.me/cryptorunnerbot",
      tags: ["Endless Runner", "Crypto", "Arcade"],
      stats: { players: "15K+", rating: 4.7 },
      featured: false
    },
    {
      id: 3,
      title: "TeleDefender",
      description: "🛡️ Defend your Telegram chat from spam bots in this tower defense masterpiece!",
      image: "/placeholder.svg?height=200&width=300",
      playLink: "https://t.me/teledefenderbot",
      tags: ["Tower Defense", "Strategy", "Chat Protection"],
      stats: { players: "12K+", rating: 4.5 },
      featured: false
    },
    {
      id: 4,
      title: "MemeWars",
      description: "😂 Battle with the most viral memes in epic turn-based combat!",
      image: "/placeholder.svg?height=200&width=300",
      playLink: "https://t.me/memewarsbot",
      tags: ["Turn-Based", "Memes", "Social"],
      stats: { players: "8K+", rating: 4.8 },
      featured: true
    }
  ]

  const testimonials = [
    {
      name: "Alex M.",
      message: "¡KokoTheRoach es adictivo! No puedo parar de jugar, especialmente las batallas contra los jefes.",
      rating: 5,
      country: "🇲🇽 México"
    },
    {
      name: "Sarah K.",
      message: "Los gráficos pixel art son increíbles y el gameplay es súper fluido. ¡Recomendado!",
      rating: 5,
      country: "🇺🇸 USA"
    },
    {
      name: "Carlos R.",
      message: "Me encanta poder compartir mi puntuación directamente en Telegram con mis amigos.",
      rating: 4,
      country: "🇪🇸 España"
    }
  ]

  const gameStats = [
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      value: "45K+",
      label: "Jugadores Activos",
      color: "blue"
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      value: "2.5M",
      label: "Partidas Jugadas",
      color: "yellow"
    },
    {
      icon: <Crown className="h-8 w-8 text-purple-400" />,
      value: "156",
      label: "Records Establecidos",
      color: "purple"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-400" />,
      value: "98%",
      label: "Satisfacción",
      color: "green"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-slate-800/30 relative overflow-hidden">
      {/* Pac-Man and Tetris Effects - Hide on mobile for better performance */}
      <div className="hidden md:block absolute inset-0 overflow-hidden opacity-10">
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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 retro-font">NUESTRO JUEGO DESTACADO</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Experimenta nuestro último y más emocionante juego integrado con Telegram
          </p>
        </div>

        <Card className="bg-black/80 border-2 border-cyan-400 hover:bg-slate-800/70 transition-all duration-300 retro-card">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
            {/* Game Images */}
            <div className="space-y-4 order-2 lg:order-1">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={game.mainImage || "/placeholder.svg"}
                  alt={`${game.title} - Screenshot Principal`}
                  width={500}
                  height={300}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover border-2 border-cyan-400/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                  <Badge className="bg-cyan-600/90 text-white border border-cyan-400 text-xs sm:text-sm">Modo Boss Battle</Badge>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <Badge className="bg-red-600/90 text-white border border-red-400 text-xs sm:text-sm">🪳 Destacado</Badge>
                </div>
              </div>

              {/* Secondary Images Grid - 2x3 with increased height */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {game.secondaryImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg group">
                    <Image
                      src={image.url}
                      alt={image.title}
                      width={300}
                      height={220}
                      className="w-full h-36 sm:h-40 lg:h-44 object-cover border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2">
                      <Badge className="bg-purple-600/90 text-white border border-purple-400 text-xs">
                        {image.badge}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm font-bold retro-font text-center px-2">
                        {image.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Game Info */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <CardHeader className="p-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
                  <CardTitle className="text-white text-xl sm:text-2xl lg:text-3xl retro-font flex items-center">🪳 {game.title}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 font-bold retro-font text-sm sm:text-base">{game.stats.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {game.tags.map((tag) => (
                    <Badge key={tag} className="bg-cyan-600/20 text-cyan-300 border border-cyan-400 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {game.description}
                  </CardDescription>
                  <CardDescription className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {game.detailedDescription}
                  </CardDescription>
                </div>

                {/* Game Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="text-center p-2 sm:p-3 bg-slate-700/50 rounded-lg border border-cyan-400/30">
                    <Users className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-400 mx-auto mb-1 sm:mb-2" />
                    <div className="text-cyan-400 font-bold retro-font text-xs sm:text-sm">{game.stats.players}</div>
                    <div className="text-gray-400 text-xs retro-font">JUGADORES</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-slate-700/50 rounded-lg border border-green-400/30">
                    <Trophy className="h-4 w-4 sm:h-6 sm:w-6 text-green-400 mx-auto mb-1 sm:mb-2" />
                    <div className="text-green-400 font-bold retro-font text-xs sm:text-sm">{game.stats.rewards}</div>
                    <div className="text-gray-400 text-xs retro-font">RECOMPENSAS</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-slate-700/50 rounded-lg border border-yellow-400/30">
                    <Star className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-400 mx-auto mb-1 sm:mb-2" />
                    <div className="text-yellow-400 font-bold retro-font text-xs sm:text-sm">{game.stats.rating}/5</div>
                    <div className="text-gray-400 text-xs retro-font">CALIFICACIÓN</div>
                  </div>
                </div>

                {/* Game Features */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-white font-semibold retro-font text-base sm:text-lg">✨ CARACTERÍSTICAS DEL JUEGO:</h4>
                  <div className="space-y-2 sm:space-y-3">
                    {game.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-700/30 rounded-lg border border-cyan-400/20"
                      >
                        <span className="text-lg sm:text-2xl flex-shrink-0">{feature.icon}</span>
                        <span className="text-gray-300 text-xs sm:text-sm lg:text-base">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Play Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 border-2 border-red-400 retro-font text-sm sm:text-base lg:text-lg py-3 sm:py-4"
                >
                  <Link href={game.playLink} target="_blank">
                    <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />🪳 JUGAR KOKOTHEROACH AHORA
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
