import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    host: 'gpautos.nl',
    sitemap: 'https://gpautos.nl/sitemap.xml',
  }
}
