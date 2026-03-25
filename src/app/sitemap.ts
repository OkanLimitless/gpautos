import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { cities, services } from '@/lib/seo-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gpautos.nl'
    const lastModified = new Date()

    // Core indexable pages
    const corePages = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/afspraak`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/privacyverklaring`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/kennisbank`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ]

    // VAG Specialist pages
    const vagPages = [
        {
            url: `${baseUrl}/audi-specialist`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/volkswagen-specialist`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/seat-specialist`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/skoda-specialist`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // City/Region pages
    const cityPages = cities.map((city) => ({
        url: `${baseUrl}/regio/${city.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: city.slug === 'lichtenvoorde' ? 0.9 : 0.7,
    }))

    // Service pages
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/diensten/${service.slug}`,
        lastModified,
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
