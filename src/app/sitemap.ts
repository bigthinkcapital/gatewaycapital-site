import { MetadataRoute } from 'next'

const INDUSTRY_SLUGS = [
  'restaurant', 'construction', 'healthcare', 'retail',
  'transportation', 'technology', 'franchise', 'real-estate',
]

const SERVICE_SLUGS = [
  'sba-loans', 'term-loans', 'lines-of-credit',
  'equipment-financing', 'invoice-financing', 'merchant-cash-advance',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gatewaycapitalfunding.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/apply`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    ...SERVICE_SLUGS.map(slug => ({
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${base}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    ...INDUSTRY_SLUGS.map(slug => ({
      url: `${base}/industries/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
