'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Define slide data
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop', // Audi Front
    title: 'VAG SPECIALIST',
    subtitle: 'Passie voor techniek, oog voor detail. Uw Audi, VW, SEAT of Skoda in expert handen.',
    cta: 'Maak Afspraak',
    ctaLink: '/afspraak'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2070&auto=format&fit=crop', // Workshop Engine
    title: 'PREMIUM ONDERHOUD',
    subtitle: 'Volgens fabrieksvoorschrift behoudt u uw fabrieksgarantie en rijkwaliteit.',
    cta: 'Bekijk Diensten',
    ctaLink: '/#diensten'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2070&auto=format&fit=crop', // Diagnosis tool
    title: 'MODERNE DIAGNOSE',
    subtitle: 'Accurate storingsanalyse voor complexe technische problemen aan moderne voertuigen.',
    cta: 'Plan Diagnose',
    ctaLink: '/afspraak'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop', // Porsche/VAG wheel
    title: 'KWALITEITSGARANTIE',
    subtitle: 'Wij werken uitsluitend met hoogwaardige onderdelen en de nieuwste apparatuur.',
    cta: 'Over Ons',
    ctaLink: '/#about-section'
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
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase tracking-tighter text-gradient">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-poppins leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href={slide.ctaLink}
                      className="btn btn-primary px-10 py-4 text-lg rounded-lg shadow-sonic-lg transition-all hover:scale-105 active:scale-95"
                    >
                      {slide.cta}
                    </Link>
                    <Link
                      href="/#diensten"
                      className="text-white/60 hover:text-white transition-colors underline underline-offset-8"
                    >
                      Bekijk onze diensten
                    </Link>
                  </div>
                </motion.div>
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
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-primary w-6'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Left/Right navigation arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 focus:outline-none"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
} 