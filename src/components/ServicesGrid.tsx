'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SERVICES = [
  {
    title: 'Diagnose & storingen',
    description: 'Gerichte foutanalyse voor storingslampjes, vermogensverlies en elektronische klachten.',
    slug: 'diagnose-storing',
    image: '/images/gp-service-diagnose.png',
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
    image: '/images/gp-service-maintenance.png',
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
    image: '/images/gp-service-brakes.png',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3.05A9 9 0 0 1 20.95 14.432M14.432 20.95A9 9 0 0 1 3.05 9.568M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: 'Coderen',
    description: 'VAG-COM coderingen voor comfortfuncties, instellingen en opties die technisch bij uw auto passen.',
    slug: 'software-chiptuning',
    image: '/images/gp-service-coding.png',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
  },
]

const BRANDS = [
  {
    name: 'Audi',
    href: '/audi-specialist',
    focus: 'Diagnose van elektronische storingen, onderhoud volgens schema en coderen van comfortfuncties.',
  },
  {
    name: 'Volkswagen',
    href: '/volkswagen-specialist',
    focus: 'Golf, Polo, Passat, Tiguan en Transporter: onderhoud, foutcodes, remmen en VCDS-instellingen.',
  },
  {
    name: 'SEAT',
    href: '/seat-specialist',
    focus: 'Leon, Ibiza en Ateca: duidelijke analyse bij storingen, onderhoud en onderstelklachten.',
  },
  {
    name: 'Skoda',
    href: '/skoda-specialist',
    focus: 'Octavia, Fabia, Superb en Kodiaq: praktisch onderhoud, diagnose en slimme coderingen.',
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
    <section id="diensten" ref={rootRef} className="bg-white py-12 md:py-20">
      <div className="container">
        <div className="grid gap-5 border-b border-gray-200 pb-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="reveal">
            <p className="kicker">Diensten</p>
            <h2 className="section-heading mt-3">Waarvoor kunt u terecht?</h2>
          </div>
          <p className="reveal max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            Van onderhoudsbeurt tot storingslampje. We leggen uit wat nodig is, wat kan wachten en wat verstandig is voor dagelijks gebruik.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Link
              key={service.slug}
              href={`/diensten/${service.slug}`}
              className="reveal group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:bg-gray-50"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600">
                  Meer info
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-[#f6f4f0] p-5 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="kicker">VAG specialist</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-950">Voor Audi, Volkswagen, SEAT en Skoda.</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Merkkennis zonder dealeromweg. Praktisch advies voor auto&apos;s uit de VAG-groep.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
              {BRANDS.map((brand, index) => (
                <Link
                  key={brand.name}
                  href={brand.href}
                  className="reveal group bg-white p-4 transition-colors hover:bg-gray-50"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-gray-950">{brand.name}</p>
                    <svg className="h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-500">{brand.focus}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
