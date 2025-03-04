'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Define slide data
const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    title: 'Professionele Autoservice',
    subtitle: 'Uw auto in betrouwbare handen',
    cta: 'Maak een Afspraak',
    ctaLink: '/afspraak'
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    title: 'Onderhoud & Reparatie',
    subtitle: 'Voor alle merken en modellen',
    cta: 'Onze Diensten',
    ctaLink: '/#diensten'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    title: 'Ervaren Monteurs',
    subtitle: 'Met passie voor auto\'s',
    cta: 'Contact Opnemen',
    ctaLink: '/#contact'
  }
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image with overlay */}
          <div className="relative h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fadeIn animation-delay-300">
                {slide.subtitle}
              </p>
              <Link 
                href={slide.ctaLink}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors animate-fadeIn animation-delay-600"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-red-500 w-6' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 