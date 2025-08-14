'use client'

export default function CTAButton({ href, children, className = '' }: { href: string, children: React.ReactNode, className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      e.preventDefault()
      if (typeof window !== 'undefined') {
        if ((window as any).dataLayer) {
          ;(window as any).dataLayer.push({ event: 'cta_click', href, source: 'ads_landing' })
        }
        if (typeof (window as any).gtag_report_conversion === 'function') {
          ;(window as any).gtag_report_conversion(href)
          return
        }
      }
    } catch {}
    window.location.href = href
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}