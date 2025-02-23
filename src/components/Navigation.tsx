'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

        {/* Main Menu */}
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

        {/* Contact Info */}
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
        <button className="md:hidden text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
} 