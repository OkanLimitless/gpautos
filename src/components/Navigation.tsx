'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="GP Auto's"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Main Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link href="/#diensten" className="text-white hover:text-red-500 transition-colors">
            Diensten
          </Link>
          <Link href="/afspraak" className="text-white hover:text-red-500 transition-colors">
            Afspraak Maken
          </Link>
          <Link href="/#contact" className="text-white hover:text-red-500 transition-colors">
            Contact
          </Link>
        </div>

        {/* Contact Info - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="tel:+31612345678" 
            className="flex items-center text-white hover:text-red-500 transition-colors"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            <span>+31 (0)6 12345678</span>
          </a>
          <a 
            href="mailto:info@gpautos.nl"
            className="flex items-center text-white hover:text-red-500 transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            <span>info@gpautos.nl</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`
        fixed top-20 right-0 w-full h-[calc(100vh-5rem)] bg-black/95 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="container mx-auto px-4 py-8">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6">
            <Link 
              href="/" 
              className="text-white hover:text-red-500 transition-colors text-lg font-medium"
              onClick={handleMobileMenuClick}
            >
              Home
            </Link>
            <Link 
              href="/#diensten" 
              className="text-white hover:text-red-500 transition-colors text-lg font-medium"
              onClick={handleMobileMenuClick}
            >
              Diensten
            </Link>
            <Link 
              href="/afspraak" 
              className="text-white hover:text-red-500 transition-colors text-lg font-medium"
              onClick={handleMobileMenuClick}
            >
              Afspraak Maken
            </Link>
            <Link 
              href="/#contact" 
              className="text-white hover:text-red-500 transition-colors text-lg font-medium"
              onClick={handleMobileMenuClick}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-12 space-y-6">
            <a 
              href="tel:+31612345678" 
              className="flex items-center text-white hover:text-red-500 transition-colors"
              onClick={handleMobileMenuClick}
            >
              <PhoneIcon className="h-5 w-5 mr-3" />
              <span>+31 (0)6 12345678</span>
            </a>
            <a 
              href="mailto:info@gpautos.nl"
              className="flex items-center text-white hover:text-red-500 transition-colors"
              onClick={handleMobileMenuClick}
            >
              <EnvelopeIcon className="h-5 w-5 mr-3" />
              <span>info@gpautos.nl</span>
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="mt-12">
            <Link 
              href="/afspraak"
              className="btn btn-primary w-full justify-center"
              onClick={handleMobileMenuClick}
            >
              Maak Direct een Afspraak
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 