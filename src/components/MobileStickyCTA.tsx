'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { business } from '@/lib/site-data'
import { ArrowUpRight, Phone } from './Icons'

export default function MobileStickyCTA() {
  const path = usePathname()
  if (path === '/afspraak') return null
  return (
    <div className="mobile-cta">
      <a href={`tel:${business.phone}`}>
        <Phone /> Bel direct
      </a>
      <Link href={path === '/ads' ? '#afspraak' : '/afspraak'}>
        Afspraak maken <ArrowUpRight />
      </Link>
    </div>
  )
}
