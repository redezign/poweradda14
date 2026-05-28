import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PowerAdda – Powering Mobility & Homes | Mumbai',
  description: 'Premium battery replacement, inverter systems, solar & clean energy solutions in Mumbai. Doorstep installation. Car, bike, inverter, solar, wind & lithium battery experts.',
  keywords: 'battery replacement Mumbai, doorstep battery service Mumbai, inverter battery Mumbai, car battery near me, solar energy solutions Mumbai, bike battery Mumbai',
  authors: [{ name: 'PowerAdda' }],
  openGraph: {
    title: 'PowerAdda – Powering Mobility & Homes',
    description: 'Premium energy & mobility solutions in Mumbai. Doorstep battery replacement, solar, inverter & clean energy systems.',
    url: 'https://poweradda.com',
    siteName: 'PowerAdda',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PowerAdda – Powering Mobility & Homes',
    description: 'Premium energy & mobility solutions in Mumbai.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
