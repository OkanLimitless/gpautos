import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import ServicesGrid from '@/components/ServicesGrid'
import AboutSection from '@/components/AboutSection'
import WorkshopGallery from '@/components/WorkshopGallery'
import ContactSection from '@/components/ContactSection'

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