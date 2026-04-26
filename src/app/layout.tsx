import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['400', '600', '700', '800'] })

const LOGO_PNG = '/file_00000000fb3871f5a0a97b25fe769035.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://gatewaycapitalfunding.com'),
  title: {
    default: 'Gateway Capital | Small Business Loans & Funding Marketplace',
    template: '%s | Gateway Capital',
  },
  description:
    'Gateway Capital matches small businesses with top lenders competing to fund them. One application — SBA loans, term loans, lines of credit, equipment financing, invoice financing, and working capital. Apply in 2 minutes.',
  keywords: [
    'small business loans', 'business funding', 'SBA loans', 'business line of credit',
    'equipment financing', 'invoice financing', 'working capital loans', 'business loan marketplace',
  ],
  authors: [{ name: 'Gateway Capital' }],
  creator: 'Gateway Capital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gatewaycapitalfunding.com',
    siteName: 'Gateway Capital',
    title: 'Gateway Capital | Small Business Loans & Funding Marketplace',
    description: 'One application. Multiple lenders compete for your business. Get funded in as little as 24 hours.',
    images: [{ url: LOGO_PNG, width: 1024, height: 1024, alt: 'Gateway Capital logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Gateway Capital | Business Funding Marketplace',
    description: 'One application. Multiple lenders. Get the best offer for your business.',
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
  description: 'Small business lending marketplace connecting businesses to SBA loans, term loans, lines of credit, equipment financing, invoice financing, and working capital.',
  url: 'https://gatewaycapitalfunding.com',
  logo: `https://gatewaycapitalfunding.com${LOGO_PNG}`,
  areaServed: 'US',
  serviceType: 'Business Lending Marketplace',
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
