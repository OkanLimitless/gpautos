'use client'

import { motion } from 'framer-motion'

export default function SocialProof() {
  return (
    <section className="relative z-20 -mt-24 pb-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-2 lg:p-4 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
            {/* Rating Section */}
            <a
              href="https://share.google/hXaUUDZcESTI2V9tq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-8 py-6 flex flex-col justify-center items-center text-center hover:bg-white/5 transition-colors rounded-xl md:rounded-none md:border-r border-white/10"
            >
              <div className="text-4xl font-bold text-white mb-1">
                5.0<span className="text-xl text-white/50 ml-1">/5 STERREN</span>
              </div>
              <div className="flex text-primary mb-3">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
              <div className="flex items-center gap-2">
                <GoogleBadge />
                <span className="text-xs font-semibold tracking-wider text-white/70 uppercase">Google Beoordeling</span>
              </div>
            </a>

            {/* Testimonials Section */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <TestimonialCard
                name="Max"
                meta="Audi S3"
                text="Super service. Snel ingepland en helder overleg. De auto rijdt weer perfect."
              />
              <TestimonialCard
                name="Lisa"
                meta="VW Golf"
                text="Eerlijke prijs en een hele duidelijke uitleg. Binnen enkele dagen geholpen."
              />
              <TestimonialCard
                name="Peter"
                meta="SEAT Leon"
                text="Vakkundig en vriendelijk team. Echt een aanrader voor onderhoud en diagnoses."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, meta, text }: { name: string, meta: string, text: string }) {
  return (
    <div className="px-6 py-6 flex flex-col justify-center hover:bg-white/5 transition-colors group">
      <div className="flex text-primary mb-3 group-hover:scale-105 transition-transform origin-left">
        <Star /> <Star /> <Star /> <Star /> <Star />
      </div>
      <blockquote className="text-white/70 text-sm leading-relaxed mb-4 italic">
        &quot;{text}&quot;
      </blockquote>
      <div className="mt-auto flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/60">
          {name[0]}
        </div>
        <div>
          <div className="font-bold text-white text-xs leading-tight">{name}</div>
          <div className="text-white/40 text-[10px] uppercase tracking-widest">{meta}</div>
        </div>
      </div>
    </div>
  )
}

function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M11.48 3.499a.562.562 0 011.04 0l2.03 4.113a.563.563 0 00.424.308l4.541.66c.513.075.718.705.346 1.067l-3.286 3.204a.563.563 0 00-.162.498l.776 4.52a.563.563 0 01-.816.593l-4.06-2.134a.563.563 0 00-.524 0l-4.06 2.134a.563.563 0 01-.816-.593l.776-4.52a.563.563 0 00-.162-.498L3.64 9.647a.563.563 0 01.346-1.067l4.54-.66a.563.563 0 00.425-.308l2.03-4.113z" />
    </svg>
  )
}

function GoogleBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}