import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AppointmentForm from '@/components/AppointmentForm'
import { Phone } from '@/components/Icons'
import { business } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Afspraak maken | GP Auto's Lichtenvoorde",
  description:
    "Vraag onderhoud, diagnose, remmen of coderen aan bij GP Auto's in Lichtenvoorde. Geef uw kenteken en voorkeursdatum door. Wij bevestigen uw afspraak persoonlijk.",
  alternates: { canonical: '/afspraak' },
}

export default function AppointmentPage() {
  return (
    <Layout>
      <section className="booking-section">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Broodkruimel">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Afspraak maken</span>
          </nav>
          <div className="booking-grid">
            <div className="booking-copy">
              <p className="eyebrow">
                <span className="red-square" />
                TIJD VOOR UW AUTO
              </p>
              <h1>
                Goed geregeld.
                <br />
                <span className="text-soft">Begint hier.</span>
              </h1>
              <p className="section-lead">
                Vertel ons wat uw auto nodig heeft en geef een voorkeursdatum
                door. Wij nemen contact op om de werkzaamheden en planning af te
                stemmen.
              </p>
              <div className="booking-image">
                <Image
                  src="/images/gp-service-diagnose.png"
                  alt="Een Audi wordt gecontroleerd met diagnoseapparatuur"
                  fill
                  priority
                  sizes="(min-width: 640px) 40vw, 100vw"
                />
              </div>
              <a href={`tel:${business.phone}`} className="contact-phone">
                <Phone />
                06 155 30 641
              </a>
              <p className="booking-note">
                Liever alleen teruggebeld worden?{' '}
                <Link href="/#contact" className="underline underline-offset-4">
                  Laat uw nummer achter.
                </Link>
              </p>
            </div>
            <div className="booking-card">
              <p className="eyebrow">UW AFSPRAAKAANVRAAG</p>
              <h2>Waar kunnen we u mee helpen?</h2>
              <p>
                Wij bevestigen de afspraak persoonlijk. Tot die tijd is de
                gekozen datum een voorkeur.
              </p>
              <AppointmentForm
                variant="embedded"
                formId="afspraak-uitgebreid"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
