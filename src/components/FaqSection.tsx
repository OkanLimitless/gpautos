import type { FaqItem } from '@/lib/seo-data'
import { business } from '@/lib/site-data'

/** "a, b en c" — Dutch enumeration. */
function dutchList(items: readonly string[]) {
  if (items.length < 2) return items.join('')
  return `${items.slice(0, -1).join(', ')} en ${items[items.length - 1]}`
}

const BRANDS = dutchList(business.brandsServiced)

const REGIONS: readonly string[] = [
  'Oost Gelre',
  'Achterhoek',
  business.address.locality,
]
const NEARBY = dutchList(
  business.areaServed.filter((place) => !REGIONS.includes(place))
)

/**
 * Home FAQ copy. Every answer is grounded in verified business facts — no prices,
 * openingstijden, doorlooptijden of garanties. Exported so the page can build
 * FAQPage JSON-LD from exactly the same strings the visitor reads.
 */
export const HOME_FAQS: FaqItem[] = [
  {
    question: "Waar zit GP Auto's?",
    answer: `Onze werkplaats staat aan de ${business.address.streetAddress} in ${business.address.locality}, midden in de Achterhoek. Klanten komen daarnaast uit ${NEARBY}.`,
  },
  {
    question: 'Kan ik zonder afspraak langskomen?',
    answer:
      'Nee, wij werken uitsluitend op afspraak. Zo staat er tijd en ruimte in de werkplaats voor uw auto gereserveerd wanneer u komt.',
  },
  {
    question: 'Welke merken onderhouden jullie?',
    answer: `Wij zijn gespecialiseerd in de VAG-groep: ${BRANDS}. Die merken delen techniek en platformen, waardoor de bekende aandachtspunten per model bij ons bekend terrein zijn.`,
  },
  {
    question: 'Ik rijd een ander merk. Kan ik bij jullie terecht?',
    answer:
      'Onze werkplaats is ingericht op de VAG-groep. Rijdt u een ander merk, neem dan contact op met uw kenteken en de klacht, dan laten wij weten of wij u kunnen helpen.',
  },
  {
    question: 'Wat houdt coderen precies in?',
    answer:
      'Met VCDS/VAG-COM passen wij instellingen in de regelapparatuur aan of activeren wij comfortfuncties. Het gaat alleen om functies die technisch bij uw uitvoering passen; wij doen geen vermogenssoftware of tuning.',
  },
  {
    question: 'Er brandt een storingslampje. Wat doen jullie dan?',
    answer:
      'Wij lezen de auto uit en kijken naast de foutcodes ook naar de meetwaarden. Een foutcode is een aanwijzing, geen conclusie: eerst stellen wij de oorzaak vast, daarna pas vervangen wij onderdelen.',
  },
  {
    question:
      'Kan mijn auto hier onderhouden worden volgens het fabrieksschema?',
    answer:
      'Ja. Wij voeren het onderhoud uit dat bij uw model, bouwjaar en kilometerstand hoort. Onderhoud buiten de dealer is in Nederland bij een erkend bedrijf mogelijk; heeft u een specifieke situatie of lopende regeling, leg die dan even aan ons voor.',
  },
  {
    question: 'Hoe maak ik een afspraak?',
    answer: `Via het afspraakformulier op deze site met uw kenteken en telefoonnummer, of telefonisch op ${business.phoneDisplay}. Wij bellen u terug om de afspraak in te plannen.`,
  },
]

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((faq) => (
        <details key={faq.question}>
          <summary>
            {faq.question}
            <span className="faq-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default function FaqSection({
  items = HOME_FAQS,
  title = 'Goed om te weten.',
}: {
  items?: FaqItem[]
  title?: string
}) {
  return (
    <section id="faq" className="section">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow section-label">Veelgestelde vragen</p>
          <h2 className="section-heading">{title}</h2>
          <p className="section-lead">
            Liever even overleggen? We denken graag met u mee.
          </p>
          <a href={`tel:${business.phone}`} className="text-link mt-4">
            Bel ons gerust <span aria-hidden="true">↗</span>
          </a>
        </div>
        <FaqList items={items} />
      </div>
    </section>
  )
}
