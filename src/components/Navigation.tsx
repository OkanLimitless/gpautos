'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Main navigation */}
      <nav className={`px-4 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70 shadow-sonic' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="GP Auto's" 
              width={180} 
              height={60} 
              className="h-10 md:h-12 w-auto drop-shadow"
            />
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/#diensten" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Diensten
            </Link>
            <Link 
              href="/#about-section" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Over Ons
            </Link>
            <Link 
              href="/#contact" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/afspraak" 
              className="btn bg-primary hover:bg-red-700 text-white shadow-sonic rounded-md"
            >
              Afspraak Maken
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen bg-black/95 shadow-sonic' : 'max-h-0 bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link 
            href="/#diensten" 
            className="text-white/90 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Onze Diensten
          </Link>
          <Link 
            href="/#about-section" 
            className="text-white/90 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Over Ons
          </Link>
          <Link 
            href="/#contact" 
            className="text-white/90 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/afspraak" 
            className="btn bg-primary hover:bg-red-700 text-white shadow-sonic rounded-md text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Afspraak Maken
          </Link>
        </div>
      </div>
    </header>
  )
} 