'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { business } from '@/lib/site-data'

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const els = rootRef.current.querySelectorAll<HTMLElement>('[data-animate]')
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100 + i * 80)
    })
  }, [])

  return (
    <section ref={rootRef} className="relative min-h-[56svh] overflow-hidden bg-gray-950 text-white sm:min-h-[66svh] lg:min-h-[84svh]">
      <div className="absolute inset-0">
        <Image
          src="/images/gp-hero-branded-workshop.png"
          alt="Werkplaats van GP Auto's in Lichtenvoorde"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_center] opacity-78"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(3,7,18,0.88)_42%,rgba(3,7,18,0.24)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(220,38,38,0.12),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-gray-950 to-transparent" />
        <div className="absolute right-6 top-28 hidden rounded-xl border border-white/10 bg-white/90 px-5 py-3 shadow-2xl shadow-black/30 backdrop-blur-sm lg:block">
          <Image
            src="/logo.png"
            alt="GP Auto's"
            width={124}
            height={38}
            className="h-8 w-auto"
          />
        </div>
      </div>

      <div className="relative container flex min-h-[56svh] flex-col justify-end pb-8 pt-24 sm:min-h-[66svh] lg:min-h-[84svh] lg:justify-center lg:pb-20">
        <div className="max-w-3xl">
          <div data-animate className="inline-flex items-center gap-2 border-l-2 border-red-500 pl-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/72 sm:text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            Autogarage in Lichtenvoorde
          </div>

          <h1 data-animate className="mt-4 max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight sm:mt-5 sm:text-6xl lg:text-7xl" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}>
            GP Auto&apos;s
            <span className="mt-2 block text-2xl leading-tight text-white/84 sm:text-4xl lg:text-5xl">
              onderhoud zonder gedoe.
            </span>
          </h1>

          <p data-animate className="mt-4 max-w-xl text-base leading-7 text-white/74 sm:mt-5 sm:text-lg">
            Onderhoud, diagnose, remmen en coderen voor Audi, Volkswagen, SEAT en Skoda. Duidelijk advies, gewoon in de buurt.
          </p>

          <div data-animate className="mt-5 grid gap-3 sm:mt-6 sm:flex">
            <Link href="#contact" className="btn-primary">
              Afspraak maken
            </Link>
            <a href={`tel:${business.phone}`} className="btn-ghost">
              Bel direct
            </a>
          </div>

          <div data-animate className="mt-6 grid max-w-2xl grid-cols-2 gap-x-5 gap-y-3 border-t border-white/15 pt-4 text-sm text-white/68 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-x-7 sm:pt-5">
            <span className="flex items-center gap-2 text-white/82">
              <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              5.0 Google
            </span>
            <span>{business.address.streetAddress}</span>
            <span>{business.phoneDisplay}</span>
            <span>Op afspraak</span>
          </div>
        </div>
      </div>
    </section>
  )
}
