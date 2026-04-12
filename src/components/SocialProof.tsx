'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const REVIEWS = [
  {
    name: 'Marco V.',
    text: 'Super service. Snel ingepland en duidelijk over wat wel en niet nodig was. Echt een garage waar je op kan vertrouwen.',
    rating: 5,
  },
  {
    name: 'Linda K.',
    text: 'Fijne communicatie, nette afhandeling en voelbaar specialistische kennis. Eindelijk een eerlijke garage gevonden.',
    rating: 5,
  },
  {
    name: 'Thomas B.',
    text: 'Klacht snel gevonden en goed opgelost. Professioneel en zonder poespas. Aanrader voor iedereen in de Achterhoek.',
    rating: 5,
  },
]

export default function SocialProof() {
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
    <section id="reviews" ref={rootRef} className="section bg-[var(--bg)]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="kicker">Klanten vertellen</p>
          <h2 className="section-heading mt-3">Beoordeeld met een 5.0</h2>
          <p className="mt-4 text-gray-500 text-lg">
            Lees wat klanten uit de Achterhoek over hun ervaring bij GP Auto&apos;s schrijven.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className="reveal card flex flex-col"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>

              {/* Reviewer */}
              <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">via Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a
            href="https://www.google.com/maps/place/GP+Auto's/@51.988019,6.561491,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            Bekijk alle reviews op Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
