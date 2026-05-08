'use client'

import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AppointmentForm from '@/components/AppointmentForm'
import { business } from '@/lib/site-data'

const steps = [
  ['1', 'Kenteken', 'We herkennen sneller waar het om gaat.'],
  ['2', 'Werksoort', 'Kies onderhoud, diagnose, remmen of coderen.'],
  ['3', 'Planning', 'Wij stemmen de afspraak persoonlijk af.'],
]

const trust = [
  'VAG specialist',
  '5.0 Google',
  'Lichtenvoorde',
]

export default function AppointmentPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-950 pt-16 text-white lg:pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/gp-service-diagnose.png"
              alt="Diagnose bij GP Auto's"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[64%_center] opacity-32"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.99)_0%,rgba(3,7,18,0.92)_44%,rgba(3,7,18,0.58)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-950 to-transparent" />
          </div>

          <div className="relative container py-8 sm:py-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <aside className="lg:sticky lg:top-28">
                <div className="inline-flex rounded-lg bg-white px-3 py-2 shadow-xl shadow-black/20">
                  <Image src="/logo.png" alt="GP Auto's" width={96} height={29} className="h-6 w-auto" />
                </div>

                <p className="kicker mt-8">Afspraak maken</p>
                <h1 className="mt-3 max-w-xl text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                  Snel geregeld, zonder gedoe.
                </h1>
                <p className="mt-5 max-w-lg text-base leading-7 text-white/68 sm:text-lg">
                  Vul de belangrijkste gegevens in. Wij controleren de aanvraag en nemen contact op met een passend moment voor uw auto.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-2 border-y border-white/12 py-4 text-sm text-white/70">
                  {trust.map((item) => (
                    <span key={item} className="leading-tight">{item}</span>
                  ))}
                </div>

                <div className="mt-8 hidden space-y-3 lg:block">
                  {steps.map(([number, title, text]) => (
                    <div key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-950">
                        {number}
                      </span>
                      <span>
                        <span className="block font-semibold text-white">{title}</span>
                        <span className="mt-1 block text-sm leading-6 text-white/55">{text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="rounded-[1.35rem] border border-white/10 bg-white p-4 text-gray-950 shadow-2xl shadow-black/35 sm:p-6 lg:p-8">
                <div className="mb-6 flex flex-col gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Aanvraag</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                      Vertel ons wat nodig is.
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                      Voor een echte afspraak vragen we iets meer informatie dan bij het terugbelverzoek.
                    </p>
                  </div>
                  <Link href="/#contact" className="text-sm font-semibold text-red-600 hover:text-red-700">
                    Liever teruggebeld?
                  </Link>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-2 sm:gap-3">
                  {steps.map(([number, title], index) => (
                    <div key={title} className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${index === 0 ? 'bg-red-600 text-white' : 'bg-white text-gray-500'}`}>
                        {number}
                      </span>
                      <span className="mt-2 block text-xs font-semibold text-gray-900">{title}</span>
                    </div>
                  ))}
                </div>

                <AppointmentForm variant="embedded" minDateOffsetDays={1} formId="afspraak-uitgebreid" />
              </div>
            </div>

            <div className="relative mt-8 grid gap-3 text-sm sm:grid-cols-2 lg:hidden">
              <a href={`tel:${business.phone}`} className="rounded-xl border border-white/12 bg-white/5 p-4 text-white/80">
                <span className="block font-semibold text-white">Direct bellen</span>
                <span className="mt-1 block text-white/55">{business.phoneDisplay}</span>
              </a>
              <Link href="/" className="rounded-xl border border-white/12 bg-white/5 p-4 text-white/80">
                <span className="block font-semibold text-white">Terug naar home</span>
                <span className="mt-1 block text-white/55">Bekijk diensten en reviews</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
