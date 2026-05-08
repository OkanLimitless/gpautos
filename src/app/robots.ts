import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const publicContentRules = [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    {
      userAgent: [
        'GPTBot',
        'ChatGPT-User',
        'OAI-SearchBot',
        'PerplexityBot',
        'ClaudeBot',
        'Claude-SearchBot',
        'anthropic-ai',
        'Google-Extended',
        'Bingbot',
      ],
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
  ]

  return {
    rules: publicContentRules,
    host: 'gpautos.nl',
    sitemap: 'https://gpautos.nl/sitemap.xml',
  }
}
