'use client'

import { useEffect, useRef } from 'react'

/**
 * Attach to a section root. Any descendant with `.reveal` fades/slides in once
 * it scrolls into view. Elements stay visible when JS or motion is unavailable
 * because the hidden state only applies under `.js-reveal` (see globals.css).
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    root.classList.add('js-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    root.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

/** Staggers `.reveal` children by index. Use sparingly — 60–80ms reads best. */
export function stagger(index: number, step = 70) {
  return { transitionDelay: `${index * step}ms` }
}
