import { MetadataRoute } from 'next'
import { cities, services } from '@/lib/seo-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gpautos.nl'

    // Core pages
    const corePages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/afspraak`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/privacyverklaring`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ]

    // VAG Specialist pages
    const vagPages = [
        {
            url: `${baseUrl}/audi-specialist`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/volkswagen-specialist`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/seat-specialist`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/skoda-specialist`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // City/Region pages
    const cityPages = cities.map((city) => ({
        url: `${baseUrl}/regio/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: city.slug === 'lichtenvoorde' ? 0.9 : 0.7,
    }))

    // Service pages
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/diensten/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [...corePages, ...vagPages, ...cityPages, ...servicePages]
}
