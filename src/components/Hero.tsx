'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <section ref={rootRef} className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Werkplaats van GP Auto's in Lichtenvoorde"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/95" />
      </div>

      {/* Content */}
      <div className="relative container flex flex-col justify-center min-h-[85vh] md:min-h-[90vh] pt-24 pb-16">
        <div className="max-w-2xl">
          <div data-animate className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90 border border-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            VAG Specialist · Lichtenvoorde
          </div>

          <h1 data-animate className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Vakkundig onderhoud
            <br />
            <span className="text-red-500">en diagnose.</span>
          </h1>

          <p data-animate className="mt-5 max-w-lg text-lg text-white/70 leading-relaxed">
            Specialist in Audi, Volkswagen, SEAT en Skoda. Heldere communicatie, eerlijk advies en technisch werk dat klopt.
          </p>

          <div data-animate className="mt-8 flex flex-wrap gap-3">
            <Link href="/afspraak" className="btn-primary">
              Afspraak maken
            </Link>
            <Link href="/#diensten" className="btn-ghost">
              Onze diensten
            </Link>
          </div>

          {/* Trust bar */}
          <div data-animate className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              5.0 Google Reviews
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span>10+ jaar ervaring</span>
            <span className="h-4 w-px bg-white/20" />
            <span>Lichtenvoorde & Achterhoek</span>
          </div>
        </div>
      </div>
    </section>
  )
}
