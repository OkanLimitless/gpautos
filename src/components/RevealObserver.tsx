'use client'

import { useEffect } from 'react'

/** Adds `.in` to every `.rv` element as it scrolls into view. Styles live in landing.css. */
export default function RevealObserver() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.rv'))
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
