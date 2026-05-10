import type { Metadata, Viewport } from 'next'
import { Syne, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucas Maylin | Percussionist, Composer, Researcher',
  description: 'Panamanian musician and researcher exploring folkloric traditions, Afro-Cuban rhythms, and contemporary improvisation.',
  generator: 'v0.app',
  keywords: ['Lucas Maylin', 'percussionist', 'composer', 'arranger', 'jazz', 'Afro-Cuban', 'Panamanian music', 'folkloric music', 'research'],
  authors: [{ name: 'Lucas Maylin' }],
  openGraph: {
    title: 'Lucas Maylin | Percussionist, Composer, Researcher',
    description: 'Panamanian musician and researcher exploring folkloric traditions, Afro-Cuban rhythms, and contemporary improvisation.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a2520',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased grain">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
