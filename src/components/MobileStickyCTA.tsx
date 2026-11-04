'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { business } from '@/lib/site-data'

export default function MobileStickyCTA() {
  const pathname = usePathname()
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    if (pathname === '/afspraak') {
      setIsHidden(true)
      return
    }

    // The home hero carries its own call/appointment buttons.
    const targets = ['hero', 'contact', 'afspraak']
      .map((id) => document.getElementById(id))
      .filter((target): target is HTMLElement => Boolean(target))

    if (targets.length === 0 || !('IntersectionObserver' in window)) {
      setIsHidden(false)
      return
    }

    const visibleTargets = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleTargets.add(entry.target)
          } else {
            visibleTargets.delete(entry.target)
          }
        })
        setIsHidden(visibleTargets.size > 0)
      },
      {
        rootMargin: '0px',
        threshold: 0.08,
      }
    )

    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  return (
    <div
      data-mobile-sticky
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-[opacity,transform,visibility] duration-200 md:hidden ${
        isHidden ? 'invisible translate-y-6 opacity-0' : 'visible translate-y-0 opacity-100'
      }`}
      aria-hidden={isHidden}
    >
      <div className="px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
        <div className="pointer-events-auto mx-auto flex max-w-sm items-stretch gap-1.5 rounded border border-[var(--border)] bg-[var(--bg)] p-1.5 shadow-[var(--shadow-md)]">
          <a
            href={`tel:${business.phone}`}
            className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--bg-alt)]"
          >
            <svg
              className="h-[18px] w-[18px]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Bellen
          </a>
          <Link
            href="/#contact"
            className="flex min-h-[52px] flex-[1.35] items-center justify-center rounded bg-[var(--accent)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Afspraak maken
          </Link>
        </div>
      </div>
    </div>
  )
}
