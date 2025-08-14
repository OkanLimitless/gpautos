'use client'

import Link from 'next/link'

export default function PhoneCTA({ className = '', theme = 'primary', labelOverride = 'Bel direct', tel = '+31615530641' }: { className?: string, theme?: 'primary' | 'secondary', labelOverride?: string, tel?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      e.preventDefault()
      if (typeof window !== 'undefined') {
        if ((window as any).dataLayer) {
          ;(window as any).dataLayer.push({ event: 'call_click', source: 'ads_landing' })
        }
        if (typeof (window as any).gtag_report_conversion === 'function') {
          ;(window as any).gtag_report_conversion(`tel:${tel}`)
          return
        }
      }
    } catch {}
    // Fallback: navigate to tel link
    window.location.href = `tel:${tel}`
  }

  const themeClass = theme === 'secondary'
    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
    : 'bg-primary hover:bg-red-700 text-white'

  return (
    <Link
      href={`tel:${tel}`}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 ${themeClass} font-semibold px-4 py-2 rounded shadow-sonic whitespace-nowrap ${className}`}
      aria-label={`${labelOverride}: ${tel}`}
    >
      {labelOverride}{labelOverride.toLowerCase().includes('bel') ? '' : `: ${tel}`}
    </Link>
  )
}