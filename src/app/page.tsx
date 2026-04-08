import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import ServicesGrid from '@/components/ServicesGrid'
import AboutSection from '@/components/AboutSection'
import WorkshopGallery from '@/components/WorkshopGallery'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: "Autogarage Lichtenvoorde | GP Auto's VAG Specialist",
  description:
    'GP Auto\'s is uw autogarage in Lichtenvoorde voor onderhoud, diagnose en VAG-service. Ook voor klanten uit Groenlo, Aalten, Winterswijk, Eibergen en de rest van de Achterhoek.',
  keywords: [
    'autogarage Lichtenvoorde',
    'garage Lichtenvoorde',
    'onderhoud Lichtenvoorde',
    'diagnose Achterhoek',
    'VAG specialist Lichtenvoorde',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Autogarage Lichtenvoorde | GP Auto's VAG Specialist",
    description:
      'Onderhoud, diagnose en VAG-service in Lichtenvoorde voor Audi, Volkswagen, SEAT en Skoda. Ook bereikbaar voor klanten uit de Achterhoek.',
    url: 'https://gpautos.nl',
    siteName: "GP Auto's",
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <WorkshopGallery />
      <ContactSection />
    </Layout>
  )
}
