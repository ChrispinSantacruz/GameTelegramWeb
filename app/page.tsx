import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import AboutSection from "@/components/about-section"
import TelegramAdvantages from "@/components/telegram-advantages"
import GamesSection from "@/components/games-section"
import CryptoCarousel from "@/components/crypto-carousel"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <HeroBanner />
      <AboutSection />
      <TelegramAdvantages />
      <GamesSection />
      <CryptoCarousel />
      <ContactSection />
      <Footer />
    </div>
  )
}
