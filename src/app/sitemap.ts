import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://gatewaycapitalfunding.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://gatewaycapitalfunding.com/apply', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
