'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-[92vh] md:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=3270&auto=format&fit=crop"
          alt="Sleek sports car in studio lighting"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div 
            className="max-w-4xl w-full text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[52px] leading-[1.1] md:text-[72px] md:leading-[1.1] font-bold text-white mb-4 tracking-tight">
              Uw Auto in Betrouwbare Handen
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8">
              Premium onderhoud, reparatie en diagnose. Transparant, vakkundig en met aandacht voor detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/afspraak" 
                  className="btn bg-primary hover:bg-[#c90500] text-white rounded-md shadow-sonic px-7 py-3 text-base md:px-8 md:py-4 md:text-lg"
                >
                  Maak Afspraak
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/#about-section" 
                  className="btn border border-white/30 text-white hover:border-white/60 rounded-md px-6 py-3"
                >
                  Over Ons
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}