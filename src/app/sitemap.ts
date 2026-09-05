import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { cities, services } from '@/lib/seo-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gpautos.nl'

    // Core indexable pages
    const corePages = [
        {
            url: baseUrl,
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/afspraak`,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/privacyverklaring`,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/kennisbank`,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ]

    // VAG Specialist pages
    const vagPages = [
        {
            url: `${baseUrl}/audi-specialist`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/volkswagen-specialist`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/seat-specialist`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/skoda-specialist`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // City/Region pages
    const cityPages = cities.map((city) => ({
        url: `${baseUrl}/regio/${city.slug}`,
        changeFrequency: 'monthly' as const,
        priority: city.slug === 'lichtenvoorde' ? 0.9 : 0.7,
    }))

    // Service pages
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/diensten/${service.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/kennisbank/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...corePages, ...vagPages, ...cityPages, ...servicePages, ...blogPages]
}
