'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import AppointmentForm from './AppointmentForm'

export default function ContactSection() {
  const rootRef = useRef<HTMLElement | null>(null)
  const mapsHref =
    'https://www.google.com/maps/search/?api=1&query=Galile%C3%AFstraat+5%2C+7131PE+Lichtenvoorde'

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
    <section id="contact" ref={rootRef} className="section bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Info side */}
          <div>
            <div className="reveal">
              <p className="kicker">Contact</p>
              <h2 className="section-heading mt-3">
                Maak een afspraak
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed max-w-lg">
                Plan online of neem direct contact op. We reageren doorgaans binnen 1 werkdag met een plan voor uw auto.
              </p>
            </div>

            {/* Contact details */}
            <div className="reveal mt-10 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Werkplaats</p>
                  <p className="mt-1 text-sm text-gray-500">Galileïstraat 5, 7131 PE Lichtenvoorde</p>
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex text-sm font-medium text-red-600 hover:text-red-700">
                    Route openen →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Bel ons</p>
                  <a href="tel:+31615530641" className="mt-1 block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    +31 6 155 30 641
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">E-mail</p>
                  <a href="mailto:info@gpautos.nl" className="mt-1 block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    info@gpautos.nl
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Openingstijden</p>
                  <p className="mt-1 text-sm text-gray-500">Ma t/m za op afspraak</p>
                  <p className="text-sm text-gray-500">Zondag gesloten</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="reveal rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Afspraak aanvragen</h3>
            <p className="mt-2 text-sm text-gray-500">
              Vul uw gegevens in en we koppelen snel terug met beschikbaarheid.
            </p>
            <div className="mt-6">
              <AppointmentForm variant="home" minDateOffsetDays={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
