import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const telegramMessage = encodeURIComponent(
    "Hey! I saw your website and I'm interested in developing a video game with you.",
  )
  const telegramLink = `https://t.me/yourgamestudio?text=${telegramMessage}`

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 retro-font">READY TO PARTNER WITH US?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss pricing and create amazing crypto gaming experiences together. Contact us through Telegram to
            start your gaming project.
          </p>
        </div>

        <Card className="bg-black/80 border-2 border-cyan-400 max-w-2xl mx-auto retro-card">
          <CardHeader className="text-center">
            <MessageCircle className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
            <CardTitle className="text-white text-2xl retro-font">GET IN TOUCH</CardTitle>
            <CardDescription className="text-gray-300">
              Click the button below to start a conversation with our team on Telegram
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              asChild
              size="lg"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-black border-2 border-cyan-400 retro-font"
            >
              <Link href={telegramLink} target="_blank">
                <MessageCircle className="h-5 w-5 mr-2" />
                CONTACT US ON TELEGRAM
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
