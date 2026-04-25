import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/lib/cart-context'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'نبل وابتكار للدعاية والإعلان | طباعة وتصميم احترافي',
  description: 'متجر متخصص في خدمات الدعاية والإعلان - طباعة رقمية، لوحات إعلانية، ستيكرات، هدايا دعائية، مطبوعات تجارية في الرياض',
  keywords: 'دعاية، إعلان، طباعة، لوحات، ستيكرات، هدايا دعائية، تصميم',
  creator: 'نبل وابتكار',
  publisher: 'نبل وابتكار للدعاية والإعلان',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
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
  openGraph: {
    title: 'نبل وابتكار للدعاية والإعلان',
    description: 'خدمات دعاية وإعلان احترافية - طباعة وتصميم بأعلى جودة',
    type: 'website',
    locale: 'ar_SA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${cairo.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
