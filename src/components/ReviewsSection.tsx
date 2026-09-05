import { business } from '@/lib/site-data'
import { ArrowUpRight } from './Icons'

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container reviews-inner">
        <div className="rating-block">
          <span className="rating-number">
            {business.googleRating.toFixed(1).replace('.', ',')}
          </span>
          <div>
            <span className="rating-stars" aria-label="5 van 5 sterren">
              ★★★★★
            </span>
            <span>op Google</span>
          </div>
        </div>
        <div className="review-copy">
          <p className="eyebrow">VERTROUWEN MOET JE VERDIENEN</p>
          <h2>Goed werk spreekt zich rond.</h2>
          <p>Lees de ervaringen van klanten met onze werkplaats.</p>
        </div>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Bekijk de beoordelingen <ArrowUpRight />
          <span className="sr-only"> op Google (nieuw tabblad)</span>
        </a>
      </div>
    </section>
  )
}
