import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gatewaycapitalfunding.com'),
  title: {
    default: 'Gateway Capital | Small Business Funding Marketplace',
    template: '%s | Gateway Capital',
  },
  description:
    'Gateway Capital connects small businesses to the right funding — fast. Access up to $5M across SBA loans, term loans, lines of credit, equipment financing, and more. Apply in 2 minutes.',
  keywords: [
    'small business loans', 'business funding', 'SBA loans', 'term loans',
    'business line of credit', 'equipment financing', 'invoice financing',
    'merchant cash advance', 'working capital', 'small business lender',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gatewaycapitalfunding.com',
    siteName: 'Gateway Capital',
    title: 'Gateway Capital | Small Business Funding Marketplace',
    description: 'Access up to $5M in business funding. Apply in 2 minutes.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Gateway Capital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gateway Capital | Small Business Funding Marketplace',
    description: 'Access up to $5M in business funding. Apply in 2 minutes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: 'Gateway Capital',
              url: 'https://gatewaycapitalfunding.com',
              description: 'Small business lending marketplace offering SBA loans, term loans, lines of credit, equipment financing and more.',
              areaServed: 'US',
              serviceType: ['Business Loans', 'SBA Loans', 'Equipment Financing', 'Lines of Credit'],
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '3200' },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">{children}</body>
    </html>
  )
}
