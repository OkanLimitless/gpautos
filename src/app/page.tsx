import HeroSlideshow from '@/components/HeroSlideshow'
import Layout from '@/components/Layout'
import USPSection from '@/components/USPSection'
import ServicesGrid from '@/components/ServicesGrid'
import AboutSection from '@/components/AboutSection'
import WorkshopGallery from '@/components/WorkshopGallery'
import SocialProof from '@/components/SocialProof'
import ContactSection from '@/components/ContactSection'
import RecentSalesTicker from '@/components/RecentSalesTicker'

export default function Home() {
  return (
    <Layout>
      <HeroSlideshow />
      <RecentSalesTicker />
      <SocialProof />
      <USPSection />
      <ServicesGrid />
      <AboutSection />
      <WorkshopGallery />
      <ContactSection />
    </Layout>
  )
}