import { MetadataRoute } from 'next'

const INDUSTRY_SLUGS = [
  'restaurant', 'construction', 'healthcare', 'retail',
  'transportation', 'technology', 'franchise', 'real-estate',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gatewaycapitalfunding.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/apply`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    ...INDUSTRY_SLUGS.map(slug => ({
      url: `${base}/industries/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
