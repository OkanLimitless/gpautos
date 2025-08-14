export default function SocialProof() {
  return (
    <section className="bg-white border-t border-zinc-200">
      <div className="container mx-auto px-4 py-10">
        {/* Rating strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center text-yellow-400" aria-hidden="true">
              <Star />
              <Star />
              <Star />
              <Star />
              <StarHalf />
            </div>
            <div>
              <div className="text-zinc-900 font-semibold leading-tight">Klanttevredenheid 4,9/5</div>
              <div className="text-sm text-zinc-600 leading-tight">Op basis van 120+ beoordelingen</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-600">
            <span className="inline-flex items-center gap-1"><Badge /> Betrouwbare service</span>
            <span className="inline-flex items-center gap-1"><Badge /> Transparante prijzen</span>
            <span className="inline-flex items-center gap-1"><Badge /> Snelle planning</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          <TestimonialCard
            name="Mark"
            meta="Audi A4"
            text="Super service. Snel ingepland en helder overleg. Auto rijdt weer perfect."
          />
          <TestimonialCard
            name="Lisa"
            meta="VW Golf"
            text="Eerlijke prijs en duidelijke uitleg. Binnen enkele dagen geholpen."
          />
          <TestimonialCard
            name="Peter"
            meta="SEAT Leon"
            text="Vakkundig en vriendelijk. Aanrader voor onderhoud en diagnose."
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, meta, text }: { name: string, meta: string, text: string }) {
  return (
    <figure className="bg-zinc-50 border border-zinc-200 rounded-lg p-5 h-full">
      <blockquote className="text-zinc-800">“{text}”</blockquote>
      <figcaption className="mt-4 text-sm text-zinc-600">
        <span className="font-semibold text-zinc-900">{name}</span> • {meta}
      </figcaption>
    </figure>
  )
}

function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M11.48 3.499a.562.562 0 011.04 0l2.03 4.113a.563.563 0 00.424.308l4.541.66c.513.075.718.705.346 1.067l-3.286 3.204a.563.563 0 00-.162.498l.776 4.52a.563.563 0 01-.816.593l-4.06-2.134a.563.563 0 00-.524 0l-4.06 2.134a.563.563 0 01-.816-.593l.776-4.52a.563.563 0 00-.162-.498L3.64 9.647a.563.563 0 01.346-1.067l4.54-.66a.563.563 0 00.425-.308l2.03-4.113z" />
    </svg>
  )
}

function StarHalf() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path d="M11.48 3.499a.562.562 0 011.04 0l2.03 4.113a.563.563 0 00.424.308l4.541.66c.513.075.718.705.346 1.067l-3.286 3.204a.563.563 0 00-.162.498l.776 4.52a.563.563 0 01-.816.593l-4.06-2.134a.563.563 0 00-.524 0l-4.06 2.134a.563.563 0 01-.816-.593l.776-4.52a.563.563 0 00-.162-.498L3.64 9.647a.563.563 0 01.346-1.067l4.54-.66a.563.563 0 00.425-.308l2.03-4.113z" fill="url(#half)" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function Badge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" d="M12 1.5l3.09 6.26 6.91 1.005-5 4.873 1.18 6.887L12 17.77l-6.18 3.755L7 13.638l-5-4.873 6.91-1.005L12 1.5z" clipRule="evenodd" />
    </svg>
  )
}