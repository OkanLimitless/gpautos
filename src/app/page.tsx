import HeroSlideshow from '@/components/HeroSlideshow'
import Layout from '@/components/Layout'
import USPSection from '@/components/USPSection'
import ServicesGrid from '@/components/ServicesGrid'
import AboutSection from '@/components/AboutSection'
import WorkshopGallery from '@/components/WorkshopGallery'
import SocialProof from '@/components/SocialProof'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HeroSlideshow />
      <SocialProof />
      <USPSection />
      <ServicesGrid />
      <AboutSection />
      <WorkshopGallery />
      <ContactSection />
    </Layout>
  )
}