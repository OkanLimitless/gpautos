'use client'

import Link from 'next/link'

export default function PhoneCTA({ className = '' }: { className?: string }) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({ event: 'call_click', source: 'ads_landing' })
    }
  }

  return (
    <Link
      href="tel:+31615530641"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-primary text-white font-semibold px-4 py-2 rounded shadow-sonic ${className}`}
    >
      Bel direct: +31 6 15530641
    </Link>
  )
}