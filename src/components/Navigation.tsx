'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/#diensten', label: 'Diensten' },
  { href: '/#over-ons', label: 'Over ons' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#contact', label: 'Contact' },
] as const

const MOBILE_MENU_ID = 'primary-mobile-menu'

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null)

  // On home, nav starts transparent over the dark hero; once scrolled it becomes white
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu()
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusFrame = window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus()
    })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      closeMobileMenu()
      window.requestAnimationFrame(() => {
        toggleButtonRef.current?.focus()
      })
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.cancelAnimationFrame(focusFrame)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Hoofdnavigatie"
        className={`transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="GP Auto's"
              width={160}
              height={48}
              className="h-8 w-auto md:h-9"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/afspraak" className="btn-primary px-5 py-2.5 text-sm">
              Afspraak maken
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden ${
              isTransparent
                ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
                : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
            }`}
            aria-controls={MOBILE_MENU_ID}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Sluit menu' : 'Open menu'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          id={MOBILE_MENU_ID}
          aria-hidden={!isMobileMenuOpen}
          className="bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="container py-4 space-y-1">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                href={link.href}
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-3">
              <a
                href="tel:+31615530641"
                className="btn-secondary justify-center min-h-[48px] text-sm"
              >
                Bel direct
              </a>
              <Link
                href="/afspraak"
                onClick={closeMobileMenu}
                className="btn-primary justify-center min-h-[48px] text-sm"
              >
                Afspraak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
