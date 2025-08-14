'use client'

export default function CTAButton({ href, children, className = '' }: { href: string, children: React.ReactNode, className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    let navigated = false
    const navigate = () => {
      if (navigated) return
      navigated = true
      window.location.href = href
    }

    try {
      if (typeof window !== 'undefined') {
        if ((window as any).dataLayer) {
          ;(window as any).dataLayer.push({ event: 'cta_click', href, source: 'ads_landing' })
        }
        // Safety fallback if conversion callback doesn't fire
        setTimeout(navigate, 600)
        if (typeof (window as any).gtag_report_conversion === 'function') {
          ;(window as any).gtag_report_conversion(href)
          return
        }
      }
    } catch {}

    navigate()
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}