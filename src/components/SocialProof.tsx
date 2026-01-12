'use client'

export default function SocialProof() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Rating Card */}
          <div className="bg-[#1A1A1A] p-8 rounded-2xl flex flex-col justify-center items-center text-center border border-white/5">
            <div className="text-5xl font-bold text-white mb-2">4.9<span className="text-2xl text-white/60">/5 STARS</span></div>
            <div className="flex text-primary mb-4">
              <Star /> <Star /> <Star /> <Star /> <Star />
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <GoogleBadge />
              <span className="font-medium tracking-tight">Google Rating</span>
            </div>
          </div>

          {/* Testimonial Cards */}
          <TestimonialCard
            name="Max"
            meta="Audi S3"
            text="Super service. Snel ingepland en helder overleg. De auto rijdt weer perfect en de communicatie was top."
          />
          <TestimonialCard
            name="Lisa"
            meta="VW Golf"
            text="Eerlijke prijs en een hele duidelijke uitleg. Binnen enkele dagen geholpen met mijn DSG probleem."
          />
          <TestimonialCard
            name="Peter"
            meta="SEAT Leon"
            text="Vakkundig en vriendelijk team. Echt een aanrader voor onderhoud en complexe diagnoses."
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, meta, text }: { name: string, meta: string, text: string }) {
  return (
    <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 flex flex-col">
      <div className="flex text-primary mb-4">
        <Star /> <Star /> <Star /> <Star /> <Star />
      </div>
      <blockquote className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
        &quot;{text}&quot;
      </blockquote>
      <div className="mt-auto">
        <div className="font-bold text-white">{name}</div>
        <div className="text-white/40 text-xs">{meta}</div>
      </div>
    </div>
  )
}

function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M11.48 3.499a.562.562 0 011.04 0l2.03 4.113a.563.563 0 00.424.308l4.541.66c.513.075.718.705.346 1.067l-3.286 3.204a.563.563 0 00-.162.498l.776 4.52a.563.563 0 01-.816.593l-4.06-2.134a.563.563 0 00-.524 0l-4.06 2.134a.563.563 0 01-.816-.593l.776-4.52a.563.563 0 00-.162-.498L3.64 9.647a.563.563 0 01.346-1.067l4.54-.66a.563.563 0 00.425-.308l2.03-4.113z" />
    </svg>
  )
}

function GoogleBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#4285F4" d="M21.35 11.1h-9.17v2.98h5.26c-.23 1.24-1.41 3.64-5.26 3.64-3.17 0-5.77-2.62-5.77-5.85s2.6-5.85 5.77-5.85c1.81 0 3.02.77 3.72 1.44l2.54-2.45C17.11 3.08 15.07 2 12.18 2 6.99 2 2.78 6.2 2.78 11.37s4.21 9.37 9.4 9.37c5.43 0 9.01-3.81 9.01-9.18 0-.62-.07-1.08-.16-1.46h.32z" />
    </svg>
  )
}