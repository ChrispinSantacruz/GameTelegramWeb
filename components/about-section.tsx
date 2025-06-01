import Image from "next/image"
import { Code, Palette, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  const developers = [
    {
      name: "SMK",
      role: "Skilled Graphic Designer and 3D Modeler",
      description:
        "SMK is a versatile and creative graphic designer specialized in producing high-quality visual content. His expertise spans image design, custom stickers, dynamic videos and reels, advanced 3D modeling, and intuitive user interfaces for video games.",
      image: "/smk-avatar.jpeg",
      skills: ["Image Design", "Custom Stickers", "Dynamic Videos", "3D Modeling", "UI for Games"],
      tools: ["Adobe Photoshop", "Illustrator", "After Effects", "Figma", "Blender"],
      icon: Palette,
      color: "green",
      social: {
        x: "#",
        telegram: "#",
      },
    },
    {
      name: "ChrisCode",
      role: "Full-Stack Developer",
      description:
        "Experienced developer specialized in frontend, backend, and mobile development. With strong technical skills and experience in various frameworks, he excels in building efficient web and mobile applications.",
      image: "/chriscode-avatar.png",
      frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React"],
      backend: ["Node.js", "Express", "NestJS", "Python"],
      databases: ["MySQL", "PostgreSQL"],
      icon: Code,
      color: "blue",
      social: {
        github: "#",
        x: "#",
        telegram: "#",
      },
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        border: "border-green-400",
        text: "text-green-400",
        bg: "bg-green-500",
        hover: "hover:bg-green-400",
      },
      blue: {
        border: "border-blue-400",
        text: "text-blue-400",
        bg: "bg-blue-500",
        hover: "hover:bg-blue-400",
      },
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.green
  }

  return (
    <section className="py-20 px-4 bg-slate-800/50 relative overflow-hidden">
      {/* Gaming Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Animated platforms */}
        <div className="absolute bottom-20 left-10 w-16 h-4 bg-green-500 rounded platform-bounce"></div>
        <div className="absolute bottom-32 left-32 w-16 h-4 bg-green-500 rounded platform-bounce-delay"></div>
        <div className="absolute bottom-44 right-16 w-16 h-4 bg-green-500 rounded platform-bounce-delay-2"></div>

        {/* Animated coins */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-yellow-400 rounded-full coin-spin"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-yellow-400 rounded-full coin-spin-delay"></div>
        <div className="absolute top-2/3 left-1/5 w-6 h-6 bg-yellow-400 rounded-full coin-spin-delay-2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 retro-font">ABOUT US</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We are pioneers in creating innovative gaming experiences that bridge the gap between traditional gaming and
            the cryptocurrency ecosystem through Telegram integration.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white retro-font">OUR MISSION</h3>
            <p className="text-gray-300 leading-relaxed">
              To revolutionize the gaming industry by creating accessible, engaging games that leverage the power of
              blockchain technology and social platforms like Telegram to build thriving gaming communities.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/mission-image.png"
              alt="SMK and ChrisCode working together in their development setup"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl border-2 border-cyan-400"
            />
          </div>
        </div>

        {/* Developers Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 retro-font text-center">MEET THE DEVS</h3>

          <div className="grid md:grid-cols-2 gap-12">
            {developers.map((dev, index) => {
              const Icon = dev.icon
              const colors = getColorClasses(dev.color)

              return (
                <Card key={index} className={`bg-black/80 border-2 ${colors.border} retro-card`}>
                  <CardHeader className="text-center">
                    <div className="relative mx-auto mb-6">
                      <Image
                        src={dev.image || "/placeholder.svg"}
                        alt={dev.name}
                        width={160}
                        height={160}
                        className={`rounded-full border-4 ${colors.border} shadow-2xl object-cover`}
                        style={{ width: "160px", height: "160px" }}
                      />
                      <div className={`absolute -bottom-2 -right-2 ${colors.bg} rounded-full p-3`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className={`text-white text-2xl retro-font ${colors.text}`}>{dev.name}</CardTitle>
                    <CardDescription className={`${colors.text} text-lg font-semibold retro-font`}>
                      {dev.role}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed text-center">{dev.description}</p>

                    {/* SMK Skills and Tools */}
                    {dev.name === "SMK" && (
                      <>
                        <div>
                          <h4 className="text-white font-semibold mb-3 retro-font">SPECIALTIES:</h4>
                          <div className="flex flex-wrap gap-2">
                            {dev.skills?.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`px-3 py-1 ${colors.bg}/20 ${colors.text} border ${colors.border} rounded-full text-sm retro-font`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3 retro-font">TOOLS:</h4>
                          <div className="flex flex-wrap gap-2">
                            {dev.tools?.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className={`px-3 py-1 bg-gray-700/50 text-gray-300 border border-gray-500 rounded-full text-sm retro-font`}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* ChrisCode Technologies */}
                    {dev.name === "ChrisCode" && (
                      <>
                        <div>
                          <h4 className="text-white font-semibold mb-3 retro-font">FRONTEND:</h4>
                          <div className="flex flex-wrap gap-2">
                            {dev.frontend?.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 ${colors.bg}/20 ${colors.text} border ${colors.border} rounded-full text-sm retro-font`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3 retro-font">BACKEND:</h4>
                          <div className="flex flex-wrap gap-2">
                            {dev.backend?.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 bg-gray-700/50 text-gray-300 border border-gray-500 rounded-full text-sm retro-font`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3 retro-font">DATABASES:</h4>
                          <div className="flex flex-wrap gap-2">
                            {dev.databases?.map((db, dbIndex) => (
                              <span
                                key={dbIndex}
                                className={`px-3 py-1 bg-purple-700/20 text-purple-300 border border-purple-500 rounded-full text-sm retro-font`}
                              >
                                {db}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      {dev.social.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className={`border-2 ${colors.border} ${colors.text} ${colors.hover} hover:text-black`}
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className={`border-2 ${colors.border} ${colors.text} ${colors.hover} hover:text-black`}
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className={`border-2 ${colors.border} ${colors.text} ${colors.hover} hover:text-black`}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
