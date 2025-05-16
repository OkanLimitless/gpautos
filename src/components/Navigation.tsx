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
    <header className="w-full transition-all duration-300">
      {/* Main navigation */}
      <nav className={`px-4 py-4 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="GP Auto's" 
              width={200} 
              height={80} 
              className="h-20 w-auto"
            />
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/#diensten" 
              className="text-text-dark font-medium hover:text-primary transition-colors"
            >
              Diensten
            </Link>
            <Link 
              href="/#about-section" 
              className="text-text-dark font-medium hover:text-primary transition-colors"
            >
              Over Ons
            </Link>
            <Link 
              href="/#contact" 
              className="text-text-dark font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/afspraak" 
              className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition-colors"
            >
              Afspraak Maken
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-dark focus:outline-none"
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
      <div className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${
        isMobileMenuOpen ? 'max-h-screen shadow-lg' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link 
            href="/#diensten" 
            className="text-text-dark font-medium hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Onze Diensten
          </Link>
          <Link 
            href="/#about-section" 
            className="text-text-dark font-medium hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Over Ons
          </Link>
          <Link 
            href="/#contact" 
            className="text-text-dark font-medium hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/afspraak" 
            className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition-colors text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Afspraak Maken
          </Link>
        </div>
      </div>
    </header>
  )
} 