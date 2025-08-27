import HeroSection from '@/components/HeroSection'
import Layout from '@/components/Layout'
import USPSection from '@/components/USPSection'
import ServicesGrid from '@/components/ServicesGrid'
import AboutSection from '@/components/AboutSection'
import WorkshopGallery from '@/components/WorkshopGallery'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <USPSection />
      <ServicesGrid />
      <AboutSection />
      <WorkshopGallery />
      <Testimonials />
      <ContactSection />
    </Layout>
  )
}