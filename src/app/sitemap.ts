import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://poschoice.ng', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ]
}
