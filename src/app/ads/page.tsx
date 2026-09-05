import type { Metadata } from 'next'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AppointmentForm from '@/components/AppointmentForm'
import ReviewsSection from '@/components/ReviewsSection'
import ProcessSection from '@/components/ProcessSection'
import BrandsSection from '@/components/BrandsSection'
import FaqSection from '@/components/FaqSection'
import { Phone, ArrowUpRight } from '@/components/Icons'
import { business } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Onderhoud of diagnose? Plan uw afspraak | GP Auto's",
  description:
    'VAG-specialist in Lichtenvoorde. Onderhoud, diagnose, remmen en coderen voor Audi, Volkswagen, SEAT, Škoda en Cupra. Vraag een afspraak aan.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/' },
}

export default function AdsLandingPage() {
  return (
    <Layout minimal>
      <section className="ads-hero">
        <div className="container booking-grid">
          <div className="booking-copy">
            <p className="eyebrow">
              <span className="red-square" />
              UW VAG-SPECIALIST IN LICHTENVOORDE
            </p>
            <h1>
              Uw auto in
              <br />
              goede handen.
              <br />
              <span className="text-soft">Wel zo prettig.</span>
            </h1>
            <p className="section-lead">
              Onderhoud, een storing of een vraag over uw auto? We luisteren,
              kijken zorgvuldig en vertellen u wat nodig is. Eerlijk en zonder
              omwegen.
            </p>
            <div className="booking-image">
              <Image
                src="/images/gp-editorial-hero.png"
                alt="Precisiewerk aan een Audi in de werkplaats"
                fill
                priority
                sizes="(min-width: 640px) 43vw, 100vw"
              />
            </div>
            <a href={`tel:${business.phone}`} className="contact-phone">
              <Phone />
              06 155 30 641
            </a>
            <p className="page-fact">
              <span className="status-dot" />
              RDW erkend · Uitsluitend op afspraak
            </p>
          </div>
          <div id="afspraak" className="booking-card">
            <p className="eyebrow">LATEN WE UW AFSPRAAK REGELEN</p>
            <h2>Waar helpen we u mee?</h2>
            <p>
              Uw kenteken en telefoonnummer zijn genoeg. Wij bellen u terug om
              samen een afspraak te plannen.
            </p>
            <AppointmentForm variant="home" formId={null} />
            <a href={`tel:${business.phone}`} className="text-link mt-4">
              Liever zelf even bellen? <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <BrandsSection />
      <ReviewsSection />
      <ProcessSection />
      <FaqSection />
      <section className="section-tight">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow">GALILEÏSTRAAT 5, LICHTENVOORDE</p>
            <h2 className="mt-3 text-3xl">We horen graag van u.</h2>
          </div>
          <a href="#afspraak" className="btn-primary">
            Laat ons u terugbellen <ArrowUpRight />
          </a>
        </div>
      </section>
    </Layout>
  )
}
