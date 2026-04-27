'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SERVICES = [
  {
    title: 'Diagnose & storingen',
    description: 'Gerichte foutanalyse voor storingslampjes, vermogensverlies en elektronische klachten.',
    slug: 'diagnose-storing',
    image: '/images/diagnose.jpeg',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Onderhoud & service',
    description: 'Periodiek onderhoud en technische controle met duidelijke terugkoppeling.',
    slug: 'onderhoud-service',
    image: '/images/IMG_4210.jpeg',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: 'Remmen & onderstel',
    description: 'Controle en herstel van remmen, schokdempers en wielophanging voor veilig en strak rijgedrag.',
    slug: 'remmen-wielophanging',
    image: '/images/vag.jpeg',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3.05A9 9 0 0 1 20.95 14.432M14.432 20.95A9 9 0 0 1 3.05 9.568M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: 'Software & tuning',
    description: 'Doordachte software-aanpassingen voor VAG-modellen.',
    slug: 'software-chiptuning',
    image: '/images/IMG_4208.jpeg',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
  },
]

export default function ServicesGrid() {
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
    <section id="diensten" ref={rootRef} className="section bg-[var(--bg)]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="kicker">Diensten</p>
          <h2 className="section-heading mt-3">Waar wij op draaien</h2>
          <p className="mt-4 text-gray-500 text-lg">
            Vier disciplines waar GP Auto&apos;s dagelijks op werkt voor VAG-modellen in Lichtenvoorde en de Achterhoek.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Link
              key={service.slug}
              href={`/diensten/${service.slug}`}
              className="reveal group card flex flex-col overflow-hidden p-0"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-red-600 group-hover:gap-3 transition-all">
                  Meer info
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
