'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { business } from '@/lib/site-data'
import { ArrowUpRight, Phone } from './Icons'

export default function MobileStickyCTA() {
  const path = usePathname()
  const [hidden, setHidden] = useState(false)

  // On the homepage the hero and the contact form carry their own buttons.
  useEffect(() => {
    if (path !== '/' || !('IntersectionObserver' in window)) {
      setHidden(false)
      return
    }
    const targets = ['hero', 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    const visible = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        }
        setHidden(visible.size > 0)
      },
      { threshold: 0.08 }
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [path])

  if (path === '/afspraak') return null
  return (
    <div className="mobile-cta" data-hidden={hidden} aria-hidden={hidden}>
      <a href={`tel:${business.phone}`}>
        <Phone /> Bel direct
      </a>
      <Link href={path === '/ads' ? '#afspraak' : '/afspraak'}>
        Afspraak maken <ArrowUpRight />
      </Link>
    </div>
  )
}
