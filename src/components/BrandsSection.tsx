import Link from 'next/link'
import { vagBrands } from '@/lib/seo-data'

export default function BrandsSection() {
  return (
    <section
      id="merken"
      className="brand-strip container"
      aria-label="Onze specialisaties"
    >
      <p className="eyebrow">
        VIJF MERKEN.
        <br />
        ÉÉN SPECIALISME.
      </p>
      <div className="brand-list">
        {vagBrands.map((b) => (
          <Link
            key={b.slug}
            href={`/${b.slug}-specialist`}
            className={`brand-name brand-${b.slug}`}
            aria-label={`${b.name} specialist`}
          >
            {b.name}
          </Link>
        ))}
        <Link
          href="/afspraak"
          className="brand-name brand-cupra"
          aria-label="Afspraak voor uw Cupra"
        >
          CUPRA
        </Link>
      </div>
    </section>
  )
}
