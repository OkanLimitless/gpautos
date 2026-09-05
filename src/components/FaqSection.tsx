import type { FaqItem } from '@/lib/seo-data'
import { business } from '@/lib/site-data'
import { homeFaqs as HOME_FAQS } from '@/lib/home-data'

export { HOME_FAQS }

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
