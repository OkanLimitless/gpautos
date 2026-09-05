'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandMark from './BrandMark'
import { ArrowUpRight, Phone } from './Icons'
import { business } from '@/lib/site-data'

const links = [
  ['Diensten', '/#diensten'],
  ['Onze aanpak', '/#werkwijze'],
  ['Over ons', '/#over-ons'],
  ['Contact', '/#contact'],
]

export default function Navigation({ minimal = false }: { minimal?: boolean }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const panel = useRef<HTMLDivElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const close = () => {
      setOpen(false)
      toggle.current?.focus()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key !== 'Tab') return
      const nodes = [
        toggle.current,
        ...Array.from(
          panel.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []
        ),
      ].filter(Boolean) as HTMLElement[]
      const first = nodes[0],
        last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="site-header">
      <a href="#hoofdinhoud" className="skip-link">
        Naar hoofdinhoud
      </a>
      <div className="header-inner">
        <BrandMark />
        {!minimal && (
          <nav className="desktop-nav" aria-label="Hoofdnavigatie">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        )}
        <div className="header-actions">
          <a href={`tel:${business.phone}`} className="header-phone">
            <Phone />
            <span>06 155 30 641</span>
          </a>
          <Link
            href={minimal ? '#afspraak' : '/afspraak'}
            className="btn-primary header-book"
          >
            Afspraak maken <ArrowUpRight />
          </Link>
          {!minimal && (
            <button
              ref={toggle}
              className="menu-toggle"
              aria-label={open ? 'Sluit menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              <span className={open ? 'menu-lines is-open' : 'menu-lines'}>
                <i />
                <i />
              </span>
            </button>
          )}
        </div>
      </div>
      {!minimal && (
        <div
          ref={panel}
          id="mobile-navigation"
          className="mobile-nav"
          hidden={!open}
        >
          <nav aria-label="Mobiele navigatie">
            {links.map(([label, href], index) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                <span className="eyebrow">0{index + 1}</span>
                {label}
                <ArrowUpRight />
              </Link>
            ))}
            <Link
              href="/afspraak"
              className="mobile-book"
              onClick={() => setOpen(false)}
            >
              Afspraak maken <ArrowUpRight />
            </Link>
          </nav>
          <p className="eyebrow">LICHTENVOORDE · UITSLUITEND OP AFSPRAAK</p>
          <a href={`tel:${business.phone}`} className="mobile-phone">
            {business.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  )
}
