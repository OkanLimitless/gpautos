'use client'

import { useState, useEffect, useRef } from 'react'
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
    title: 'APK Keuring',
    subtitle: 'Snel en betrouwbaar',
    cta: 'Maak een Afspraak',
    ctaLink: '/afspraak'
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    title: 'Ervaren Monteurs',
    subtitle: 'Met passie voor auto\'s',
    cta: 'Contact Opnemen',
    ctaLink: '/#contact'
  }
]

// Safari-safe image component
interface SafariSafeImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

function SafariSafeImage({ src, alt, className = '', priority = false }: SafariSafeImageProps) {
  const [isSafari, setIsSafari] = useState(false);
  
  useEffect(() => {
    // Check if browser is Safari
    const isSafariCheck = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariCheck);
  }, []);
  
  // For Safari, use a div with background-image instead of Next.js Image
  if (isSafari) {
    return (
      <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
    );
  }
  
  // For other browsers, use Next.js Image with proper optimization
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={`object-cover ${className}`}
      sizes="100vw"
      quality={priority ? 85 : 60}
    />
  );
}

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  
  // Check if component is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    
    const slideshowElement = document.getElementById('hero-slideshow')
    if (slideshowElement) {
      observer.observe(slideshowElement)
    }
    
    return () => {
      if (slideshowElement) {
        observer.unobserve(slideshowElement)
      }
    }
  }, [])
  
  // Auto-advance slides only when visible
  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isVisible])
  
  // Manual navigation
  const goToSlide = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setCurrentSlide(index)
    
    // Restart interval after manual navigation
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }
  }
  
  return (
    <div id="hero-slideshow" className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Only render current and next slide for better performance */}
      {slides.map((slide, index) => {
        // Only render current slide and next slide (for preloading)
        const nextSlideIndex = (currentSlide + 1) % slides.length
        if (index !== currentSlide && index !== nextSlideIndex) return null
        
        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            {/* Image with overlay */}
            <div className="relative h-full">
              <SafariSafeImage
                src={slide.image}
                alt={slide.title}
                priority={index === currentSlide}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <Link 
                  href={slide.ctaLink}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        )
      })}
      
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