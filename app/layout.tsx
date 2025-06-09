import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GamesTelegram',
  description: 'Play amazing crypto games integrated with Telegram',
  generator: 'GamesTelegram',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23059669"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-1.5-1.5L10 14h4l1.5 1.5L14 17v-3zm0-6V8l1.5-1.5L13 5h-2l-1.5 1.5L11 8v3zm-3-3h3v3H7v-3zm7 0h3v3h-3v-3z"/><circle cx="7" cy="7" r="1.5" fill="%23dc2626"/><circle cx="17" cy="7" r="1.5" fill="%23dc2626"/><circle cx="7" cy="17" r="1.5" fill="%23059669"/><circle cx="17" cy="17" r="1.5" fill="%23059669"/></svg>',
        sizes: '32x32',
        type: 'image/svg+xml',
      }
    ],
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23059669"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-1.5-1.5L10 14h4l1.5 1.5L14 17v-3zm0-6V8l1.5-1.5L13 5h-2l-1.5 1.5L11 8v3zm-3-3h3v3H7v-3zm7 0h3v3h-3v-3z"/><circle cx="7" cy="7" r="1.5" fill="%23dc2626"/><circle cx="17" cy="7" r="1.5" fill="%23dc2626"/><circle cx="7" cy="17" r="1.5" fill="%23059669"/><circle cx="17" cy="17" r="1.5" fill="%23059669"/></svg>',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
