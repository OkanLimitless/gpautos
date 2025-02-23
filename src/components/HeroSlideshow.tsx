'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Professionele Autoservice',
    description: 'Uw auto in de beste handen bij GP Auto\'s in Lichtenvoorde'
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Ervaren Monteurs',
    description: 'Vakkundig onderhoud en reparatie voor alle automerken'
  },
  {
    image: '/images/hero-3.jpg',
    title: 'APK Keuring',
    description: 'Snelle en betrouwbare APK keuring met gratis herkeuring'
  }
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          {/* Background image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <Link 
                  href="/afspraak" 
                  className="btn btn-primary"
                >
                  Maak Direct een Afspraak
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-500 w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
} 