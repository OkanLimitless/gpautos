import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from './Icons'

export default function AboutSection() {
  return (
    <section id="over-ons" className="section about-section">
      <div className="container about-grid">
        <div className="about-photo">
          <Image
            src="/images/hero.jpeg"
            alt="Een monteur van GP Auto's aan het werk in een auto"
            fill
            sizes="(min-width: 900px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="photo-label">
            <span className="red-square" />
            GP AUTO&apos;S — LICHTENVOORDE
          </div>
          <div className="about-stamp">
            <span>VAG</span>
            <span>
              ONZE
              <br />
              SPECIALITEIT.
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow section-label">Over ons</p>
          <h2 className="section-heading">
            Liefde voor techniek.
            <br />
            <span className="text-soft">Nuchter in de omgang.</span>
          </h2>
          <p className="section-lead">
            Bij ons draait het om uw auto én om de persoon achter het stuur.
          </p>
          <p>
            Vanuit onze werkplaats in Lichtenvoorde werken we aan Audi,
            Volkswagen, SEAT, Škoda en Cupra. Eén techniekfamilie die we door en
            door willen kennen. Dat merkt u aan onze aandacht voor de details.
          </p>
          <p>
            U krijgt de uitleg zoals we die zelf zouden willen: begrijpelijk,
            eerlijk en persoonlijk. We werken op afspraak, zodat we de tijd voor
            uw auto kunnen nemen.
          </p>
          <div className="about-signoff">
            <span className="signature">GP Auto&apos;s</span>
            <span>
              Uw onafhankelijke
              <br />
              VAG-specialist in de Achterhoek.
            </span>
          </div>
          <Link href="/#contact" className="text-link">
            Maak kennis met onze werkplaats <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
