import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GP Auto's – Autogarage in Lichtenvoorde",
    short_name: "GP Auto's",
    description:
      'Onderhoud, diagnose, remmen en coderen. VAG-specialist in Lichtenvoorde.',
    id: '/',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    display_override: ['standalone'],
    lang: 'nl-NL',
    categories: ['automotive', 'business'],
    background_color: '#F6F5F1',
    theme_color: '#F6F5F1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
