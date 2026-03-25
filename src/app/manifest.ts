import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "GP Auto's – Premium Autoservice",
        short_name: "GP Auto's",
        description: "Premium onderhoud, reparatie en diagnose. VAG specialist in Lichtenvoorde.",
        id: '/',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        display_override: ['standalone'],
        lang: 'nl-NL',
        categories: ['automotive', 'business'],
        background_color: '#09090b',
        theme_color: '#18181b',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
