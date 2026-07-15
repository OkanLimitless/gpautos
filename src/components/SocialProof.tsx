import { business } from '@/lib/site-data'

export default function SocialProof() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-[#f6f4f0] py-12 md:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <p className="kicker">Google-reviews</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              {business.googleRating.toFixed(1)} uit {business.googleReviewCount} openbare beoordelingen.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Bekijk de actuele score, alle klantreacties en de bedrijfsgegevens rechtstreeks op het officiële Google Business Profile van GP Auto&apos;s.
            </p>
            <a
              href={business.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              Bekijk alle Google-reviews
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-gray-300 pt-7 text-center lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <p className="text-3xl font-bold text-gray-950 sm:text-4xl">{business.googleRating.toFixed(1)}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Google-score</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-950 sm:text-4xl">{business.googleReviewCount}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-950 sm:text-4xl">5★</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Waardering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
