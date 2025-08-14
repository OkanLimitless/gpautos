'use client'

import Link from 'next/link'

export default function PhoneCTA({ className = '', theme = 'primary', labelOverride = 'Bel direct', tel = '+31615530641' }: { className?: string, theme?: 'primary' | 'secondary', labelOverride?: string, tel?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = `tel:${tel}`
    e.preventDefault()
    let navigated = false
    const navigate = () => {
      if (navigated) return
      navigated = true
      window.location.href = target
    }

    try {
      if (typeof window !== 'undefined') {
        if ((window as any).dataLayer) {
          ;(window as any).dataLayer.push({ event: 'call_click', source: 'ads_landing' })
        }
        // Safety fallback if conversion callback doesn't fire
        setTimeout(navigate, 600)
        if (typeof (window as any).gtag_report_conversion === 'function') {
          ;(window as any).gtag_report_conversion(target)
          return
        }
      }
    } catch {}

    navigate()
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