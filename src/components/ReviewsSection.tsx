import { business } from '@/lib/site-data'

const POINTS = [
  { title: 'RDW erkend bedrijf', text: 'Onze werkplaats is erkend en geregistreerd bij de RDW.' },
  { title: 'Specialist in de VAG-groep', text: 'Audi, Volkswagen, SEAT, Škoda en Cupra.' },
  { title: 'Eigen werkplaats', text: `${business.address.streetAddress}, ${business.address.locality}.` },
  { title: 'Uitsluitend op afspraak', text: 'Elke auto wordt vooraf ingepland, zodat er tijd voor uw auto is.' },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="lp-section bg-[var(--bg-alt)]" aria-labelledby="reviews-title">
      <div className="container">
        <div className="grid items-end gap-10 md:grid-cols-[auto_1fr] md:gap-20">
          <p className="score" aria-label="Gemiddelde beoordeling 5,0 op Google">5,0</p>
          <div>
            <h2 id="reviews-title" className="lp-h2">Beoordeeld op Google</h2>
            <p className="lp-lede mt-5">Lees wat klanten over GP Auto&apos;s schrijven op ons Google-profiel.</p>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-7">
              Bekijk de reviews op Google<span className="sr-only"> (opent in een nieuw tabblad)</span>
            </a>
          </div>
        </div>

        <dl className="review-points">
          {POINTS.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
