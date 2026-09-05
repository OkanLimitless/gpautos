import Layout from './Layout'
import { PageHero, CheckList, ServiceCards } from './LandingSections'
import FaqSection from './FaqSection'
import ContactSection from './ContactSection'
import TrustBar from './TrustBar'
import BrandsSection from './BrandsSection'
import { services, vagBrands, type FaqItem } from '@/lib/seo-data'
import { serializeJsonLd } from '@/lib/site-data'

export default function BrandLanding({
  slug,
  models,
  faqs,
  jsonLd,
}: {
  slug: string
  models: string[]
  faqs: FaqItem[]
  jsonLd: unknown
}) {
  const brand = vagBrands.find((b) => b.slug === slug)!
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <PageHero
        eyebrow={`${brand.name} specialist in Lichtenvoorde`}
        title={
          <>
            Uw {brand.name}.<br />
            <span className="text-soft">Ons specialisme.</span>
          </>
        }
        description={`Van periodiek onderhoud tot die ene lastige storing. Bij GP Auto's krijgt uw ${brand.name} de aandacht van een onafhankelijke VAG-specialist. Met duidelijke uitleg en persoonlijk contact.`}
        image={
          slug === 'audi'
            ? '/images/overgp.jpeg'
            : '/images/gp-service-maintenance.png'
        }
        imageAlt={
          slug === 'audi'
            ? 'Een Audi wordt uitgelezen in de werkplaats'
            : 'Onderhoud aan een motor in de werkplaats'
        }
        breadcrumb={`${brand.name} specialist`}
        caption={`VAG-SPECIALIST / ${brand.name.toUpperCase()}`}
      />
      <TrustBar />
      <section className="section detail-section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow section-label">Ons specialisme</p>
            <h2>
              De techniek kennen.
              <br />
              De tijd voor u nemen.
            </h2>
            <p>{brand.description}</p>
          </div>
          <CheckList
            items={[
              `Onderhoud volgens het fabrieksschema van uw ${brand.name}, passend bij model en kilometerstand.`,
              'Merkspecifieke diagnose: verder kijken dan alleen een foutcode.',
              'Comfortfuncties coderen waar de uitvoering en hardware het toelaten.',
              'Eerst een helder advies. Daarna samen bepalen wat er gebeurt.',
            ]}
          />
        </div>
      </section>
      <section className="section model-section">
        <div className="container">
          <p className="eyebrow section-label">Modellen</p>
          <div className="section-intro">
            <h2 className="section-heading">Uw model. Bekende techniek.</h2>
            <p className="section-lead">
              Geef uw kenteken en vraag door. Dan kijken we wat uw auto nodig
              heeft.
            </p>
          </div>
          <div className="model-list" aria-label={`${brand.name} modellen`}>
            {models.map((model) => (
              <span key={model}>{model}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <p className="eyebrow section-label">Diensten</p>
              <h2 className="section-heading">
                Aandacht voor uw {brand.name}.
              </h2>
            </div>
          </div>
          <ServiceCards items={services} />
        </div>
      </section>
      <FaqSection items={faqs} />
      <ContactSection />
      <BrandsSection />
    </Layout>
  )
}
