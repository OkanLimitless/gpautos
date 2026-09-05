import Link from 'next/link'
import { ArrowUpRight } from './Icons'

const steps = [
  [
    'U vertelt. Wij luisteren.',
    'Geef uw kenteken door en vertel wat er speelt. We bespreken uw vraag en plannen samen een geschikt moment.',
  ],
  [
    'Eerst inzicht. Dan een plan.',
    'We kijken de auto na en leggen uit wat nodig is. U weet wat we adviseren en waarom, voordat we aan de slag gaan.',
  ],
  [
    'Goed werk. Duidelijke uitleg.',
    'We voeren het afgesproken werk uit en nemen de bevindingen met u door. Zo weet u precies hoe uw auto ervoor staat.',
  ],
]
export default function ProcessSection() {
  return (
    <section id="werkwijze" className="section process-section">
      <div className="container">
        <div className="section-intro">
          <div>
            <p className="eyebrow section-label">Werkwijze</p>
            <h2 className="section-heading">
              Goed geregeld.
              <br />
              <span>Van begin tot eind.</span>
            </h2>
          </div>
          <Link href="/afspraak" className="btn-ghost">
            Laten we kennismaken <ArrowUpRight />
          </Link>
        </div>
        <div className="process-steps">
          {steps.map(([title, text], i) => (
            <div key={title}>
              <span className="process-number">
                0{i + 1}
                <span>/</span>
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
