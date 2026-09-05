import { Check } from './Icons'

export default function TrustBar() {
  return (
    <div className="trust-bar container" aria-label="Onze werkwijze">
      <span>
        <Check />
        RDW erkend bedrijf
      </span>
      <span>
        <Check />
        Onderhoud volgens fabrieksschema
      </span>
      <span>
        <Check />
        Eerst overleg, dan aan het werk
      </span>
      <span className="trust-appointment">
        Uitsluitend op afspraak <span className="status-dot" />
      </span>
    </div>
  )
}
