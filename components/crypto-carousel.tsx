export default function CryptoCarousel() {
  const cryptoCoins = [
    { name: "Bitcoin", symbol: "BTC", icon: "₿" },
    { name: "Ethereum", symbol: "ETH", icon: "Ξ" },
    { name: "Solana", symbol: "SOL", icon: "◎" },
    { name: "Cardano", symbol: "ADA", icon: "₳" },
    { name: "Polygon", symbol: "MATIC", icon: "⬟" },
    { name: "Binance", symbol: "BNB", icon: "⬢" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 retro-font">SUPPORTED CRYPTOCURRENCIES</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We accept multiple cryptocurrencies for seamless transactions
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...cryptoCoins, ...cryptoCoins].map((coin, index) => (
              <div
                key={`${coin.symbol}-${index}`}
                className="flex-shrink-0 bg-black/80 rounded-lg p-6 border-2 border-yellow-400 hover:border-yellow-300 transition-colors retro-card"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2 text-yellow-400">{coin.icon}</div>
                  <div className="text-white font-semibold retro-font">{coin.name}</div>
                  <div className="text-gray-400 text-sm retro-font">{coin.symbol}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
