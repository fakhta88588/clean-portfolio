import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ocean Studio - Creative Digital Agency',
  description: 'Ocean Studio delivers modern web design, branding & digital solutions.',
  keywords: 'web design, branding, digital agency, Ocean Studio',
  openGraph: {
    title: 'Ocean Studio',
    description: 'Creative Digital Agency',
    url: 'https://ocean-studio.vercel.app',
    siteName: 'Ocean Studio',
    images: [{ url: '/logo.svg', width: 1200, height: 630, alt: 'Ocean Studio' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Ocean Studio', description: 'Creative Digital Agency', images: '/logo.svg' },
  icons: { icon: '/logo.svg', shortcut: '/logo.svg', apple: '/logo.svg' },
  themeColor: '#0ea5e9',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
