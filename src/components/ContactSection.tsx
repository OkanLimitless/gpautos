'use client'

import { useEffect, useRef } from 'react'
import AppointmentForm from './AppointmentForm'
import { business } from '@/lib/site-data'

export default function ContactSection() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    rootRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={rootRef} className="bg-[#f6f4f0] py-8 text-gray-950 sm:py-12 md:py-16">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="order-2 lg:order-1 lg:sticky lg:top-28">
            <div className="reveal">
              <p className="kicker">Afspraak maken</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                Snel contact met de werkplaats.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-gray-600">
                Geen lang formulier nodig om te beginnen. Laat uw kenteken en telefoonnummer achter, dan bellen we terug met een passend moment.
              </p>
            </div>

            <div className="reveal mt-6 grid grid-cols-3 gap-2 text-sm lg:mt-8 lg:grid-cols-1 lg:gap-3">
              {[
                ['1', 'Vul kenteken in'],
                ['2', 'Kies werksoort'],
                ['3', 'Wij plannen mee'],
              ].map(([number, step]) => (
                <div key={step} className="border-t border-gray-200 py-3 lg:flex lg:items-center lg:gap-3 lg:py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">{number}</span>
                  <span className="mt-2 block text-xs font-semibold leading-4 text-gray-800 lg:mt-0 lg:text-sm">{step}</span>
                </div>
              ))}
            </div>

            <div className="reveal mt-8 grid gap-3 text-sm sm:grid-cols-2 lg:block lg:space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-950">Werkplaats</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {business.address.streetAddress}, {business.address.postalCode} {business.address.locality}
                  </p>
                  <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex text-sm font-medium text-red-600 hover:text-red-700">
                    Route openen
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-950">Liever direct bellen?</p>
                  <a href={`tel:${business.phone}`} className="mt-1 block text-sm text-gray-500 transition-colors hover:text-gray-950">
                    {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="afspraak" className="reveal order-1 scroll-mt-24 rounded-[1.25rem] border border-gray-200 bg-white p-4 text-gray-900 shadow-xl shadow-gray-900/8 sm:p-6 lg:order-2 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Terugbelverzoek</p>
            <h3 className="mt-2 text-2xl font-semibold text-gray-950">Binnen een minuut ingevuld</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Kies het soort werk, vul uw kenteken en telefoonnummer in, dan nemen we persoonlijk contact op.
            </p>
            <div className="mt-6">
              <AppointmentForm variant="home" minDateOffsetDays={1} formId={null} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
