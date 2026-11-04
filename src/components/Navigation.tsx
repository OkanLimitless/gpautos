'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { business } from '@/lib/site-data'

const NAV_LINKS = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'diensten', href: '/#diensten', label: 'Diensten' },
  { id: 'over-ons', href: '/#over-ons', label: 'Over ons' },
  { id: 'contact', href: '/#contact', label: 'Contact' },
] as const

const MOBILE_MENU_ID = 'primary-mobile-menu'
const DESKTOP_BREAKPOINT = 1024

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Hairline border appears once the page has moved.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        closeMobileMenu()
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Body scroll lock + Escape + initial focus while the mobile panel is open.
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const obscured = Array.from(document.querySelectorAll<HTMLElement>('main, footer, [data-mobile-sticky]'))
    const previousInert = obscured.map(element => element.inert)
    obscured.forEach(element => { element.inert = true })
    const previousOverflow = document.body.style.overflow
    document.body.style.overflowY = 'hidden'

    const focusFrame = window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus()
    })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const panel = document.getElementById(MOBILE_MENU_ID)
        const links = panel ? Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')) : []
        const first = toggleButtonRef.current
        const last = links[links.length - 1]
        if (event.shiftKey && (document.activeElement === first || !panel?.contains(document.activeElement) && document.activeElement !== first)) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
      if (event.key !== 'Escape') return
      closeMobileMenu()
      window.requestAnimationFrame(() => {
        toggleButtonRef.current?.focus()
      })
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      obscured.forEach((element, index) => { element.inert = previousInert[index] })
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.cancelAnimationFrame(focusFrame)
    }
  }, [isMobileMenuOpen])

  // Active-section indicator. Only meaningful on the home page, where the
  // section ids exist; elsewhere no link is marked current.
  useEffect(() => {
    if (!isHome) {
      setActiveId(pathname.startsWith('/diensten') ? 'diensten' : null)
      return
    }
    if (typeof IntersectionObserver === 'undefined') return

    const ids = NAV_LINKS.map((link) => link.id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        setActiveId(ids.find((id) => visible.has(id)) ?? null)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome, pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#hoofdinhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-10 focus:inline-flex focus:items-center focus:rounded-full focus:bg-[var(--bg-ink)] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Naar hoofdinhoud
      </a>

      <nav
        aria-label="Hoofdnavigatie"
        className={`bg-[var(--bg)] transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'border-b border-[var(--border)]'
            : 'border-b border-transparent'
        }`}
      >
        <div className="container flex h-16 items-center justify-between md:h-[72px]">
          <Link href="/" className="flex items-center" aria-label="GP Auto's — naar de homepage">
            <Image
              src="/logo.png"
              alt="GP Auto's"
              width={160}
              height={48}
              priority
              className="h-8 w-auto md:h-9"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:transition-transform after:duration-200 after:content-[''] ${
                    isActive
                      ? 'text-[var(--text)] after:scale-x-100 after:bg-[var(--accent)]'
                      : 'text-[var(--text-secondary)] after:scale-x-0 after:bg-[var(--accent)] hover:text-[var(--text)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)]"
            >
              <PhoneIcon className="h-4 w-4 text-[var(--text-muted)]" />
              {business.phoneDisplay}
            </a>
            <Link href="/#contact" className="btn-primary">
              Afspraak maken
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--text)] transition-colors hover:bg-[var(--bg-alt)] lg:hidden"
            aria-controls={MOBILE_MENU_ID}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Sluit menu' : 'Open menu'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 16.5h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        id={MOBILE_MENU_ID}
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-[var(--bg)] transition-opacity duration-200 md:top-[72px] lg:hidden ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="container flex min-h-full flex-col py-6">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <Link
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={link.href}
                  onClick={closeMobileMenu}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={`flex min-h-[56px] items-center border-b border-[var(--border)] text-lg font-medium transition-colors ${
                    activeId === link.id ? 'text-[var(--accent)]' : 'text-[var(--text)]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Link href="/#contact" onClick={closeMobileMenu} className="btn-primary w-full">
              Afspraak maken
            </Link>
            <a href={`tel:${business.phone}`} className="btn-secondary w-full">
              <PhoneIcon className="h-4 w-4" />
              Bel {business.phoneDisplay}
            </a>
          </div>

          <p className="mt-8 text-sm text-[var(--text-secondary)]">
            {business.address.streetAddress}, {business.address.postalCode}{' '}
            {business.address.locality}
          </p>
        </div>
      </div>
    </header>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  )
}
