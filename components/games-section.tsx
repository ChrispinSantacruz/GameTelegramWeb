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
    mainImage: "/Kokok/Principal.png",
    secondaryImages: [
      {
        url: "/Kokok/Menu.png",
        title: "Game Menu",
        badge: "Menu"
      },
      {
        url: "/Kokok/instrucciones.png", 
        title: "Game Instructions",
        badge: "Instructions"
      },
      {
        url: "/Kokok/GameOver.png",
        title: "Game Over Screen",
        badge: "Game Over"
      },
      {
        url: "/Kokok/Responsive.png",
        title: "Responsive Design",
        badge: "Mobile"
      },
      {
        url: "/Kokok/GameoverBot.png",
        title: "Score Sharing Bot",
        badge: "Bot Feature"
      },
      {
        url: "/Kokok/BotStart.png",
        title: "Welcome Bot",
        badge: "Telegram Bot"
      }
    ],
    playLink: "https://kokokthegame.vercel.app/",
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
      message: "KokoTheRoach is addictive! I can't stop playing, especially the boss battles.",
      rating: 5,
      country: "🇲🇽 Mexico"
    },
    {
      name: "Sarah K.",
      message: "The pixel art graphics are incredible and the gameplay is super smooth. Recommended!",
      rating: 5,
      country: "🇺🇸 USA"
    },
    {
      name: "Carlos R.",
      message: "I love being able to share my score directly on Telegram with my friends.",
      rating: 4,
      country: "🇪🇸 Spain"
    }
  ]

  const gameStats = [
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      value: "45K+",
      label: "Active Players",
      color: "blue"
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      value: "2.5M",
      label: "Games Played",
      color: "yellow"
    },
    {
      icon: <Crown className="h-8 w-8 text-purple-400" />,
      value: "156",
      label: "Records Set",
      color: "purple"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-400" />,
      value: "98%",
      label: "Satisfaction",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 retro-font">OUR FEATURED GAME</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Experience our latest and most exciting game integrated with Telegram
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
                  alt={`${game.title} - Main Screenshot`}
                  width={500}
                  height={300}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover border-2 border-cyan-400/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                  <Badge className="bg-cyan-600/90 text-white border border-cyan-400 text-xs sm:text-sm">Boss Battle Mode</Badge>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <Badge className="bg-red-600/90 text-white border border-red-400 text-xs sm:text-sm">🪳 Featured</Badge>
                </div>
              </div>

              {/* Secondary Images Grid - 2x3 with enhanced zoom effect */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {game.secondaryImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
                    <Image
                      src={image.url}
                      alt={image.title}
                      width={300}
                      height={220}
                      className="w-full h-36 sm:h-40 lg:h-44 object-cover border border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-black/80 backdrop-blur-sm rounded px-2 py-1 border border-cyan-400/50">
                        <p className="text-cyan-400 text-xs sm:text-sm font-bold retro-font text-center">
                          {image.title}
                        </p>
                        <div className="flex justify-center mt-1">
                          <span className="bg-purple-600/90 text-white border border-purple-400 rounded-full px-2 py-0.5 text-xs retro-font">
                            {image.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Zoom indicator */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/80 rounded-full p-1">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
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

                {/* Game Features */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-white font-semibold retro-font text-base sm:text-lg">✨ GAME FEATURES:</h4>
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
                    <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />🪳 PLAY KOKOTHEROACH NOW
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
