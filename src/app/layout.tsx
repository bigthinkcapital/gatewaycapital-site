import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['400', '600', '700', '800'] })

const LOGO_PNG = '/file_00000000fb3871f5a0a97b25fe769035.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://gatewaycapitalfunding.com'),
  title: {
    default: 'Gateway Capital | AI-Powered Business Lender Matching',
    template: '%s | Gateway Capital',
  },
  description:
    'Gateway Capital uses artificial intelligence to match your business with the right lender or broker — fast, accurate, and tailored to your exact profile. SBA loans, term loans, equipment financing, lines of credit and more. Apply in 2 minutes.',
  keywords: [
    'AI business lender matching', 'artificial intelligence business loans',
    'smart business loan matching', 'SBA loans', 'business line of credit',
    'equipment financing', 'invoice financing', 'working capital loans',
    'small business lending', 'business loan marketplace',
  ],
  authors: [{ name: 'Gateway Capital' }],
  creator: 'Gateway Capital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gatewaycapitalfunding.com',
    siteName: 'Gateway Capital',
    title: 'Gateway Capital | AI-Powered Business Lender Matching',
    description: 'Our AI analyzes your profile and connects you to the right lender — fast. Apply in 2 minutes.',
    images: [{ url: LOGO_PNG, width: 1024, height: 1024, alt: 'Gateway Capital — AI Business Lender Matching' }],
  },
  twitter: {
    card: 'summary',
    title: 'Gateway Capital | AI Business Lender Matching',
    description: 'AI finds the right lender for your business. Apply in 2 minutes.',
    images: [LOGO_PNG],
  },
  icons: {
    icon: [
      { url: LOGO_PNG, type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: LOGO_PNG,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Gateway Capital',
  description: 'AI-powered business lender matching. Gateway Capital uses artificial intelligence to connect small businesses with the right lender or broker for their exact funding needs.',
  url: 'https://gatewaycapitalfunding.com',
  logo: `https://gatewaycapitalfunding.com${LOGO_PNG}`,
  areaServed: 'US',
  serviceType: 'AI Business Lender Matching',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
