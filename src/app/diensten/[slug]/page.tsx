import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/lib/seo-data';
import {
    breadcrumbStructuredData,
    business,
    faqStructuredData,
    graphStructuredData,
    placeAreaStructuredData,
    postalAddressStructuredData,
    serializeJsonLd,
    site,
    webpageStructuredData,
} from '@/lib/site-data';

interface ServicePageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const service = getServiceBySlug(params.slug);
    if (!service) return {};

    const title = `${service.name} in Lichtenvoorde | GP Auto's VAG specialist`;
    const description = service.metaDescription;

    return {
        title,
        description,
        keywords: [
            service.name,
            'Lichtenvoorde',
            'VAG specialist',
            'garage',
            'onderhoud',
            'reparatie',
        ],
        openGraph: {
            title,
            description,
            url: `${site.url}/diensten/${service.slug}`,
            siteName: "GP Auto's",
            locale: 'nl_NL',
            type: 'website',
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: `${service.name} bij GP Auto's`,
                },
            ],
        },
        alternates: {
            canonical: `/diensten/${service.slug}`,
        },
    };
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = getServiceBySlug(params.slug);
    if (!service) notFound();

    const relatedServices = service.relatedServiceSlugs
        .map((slug) => getServiceBySlug(slug))
        .filter((relatedService): relatedService is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(relatedService));

    const pagePath = `/diensten/${service.slug}`;
    const pageTitle = `${service.name} in Lichtenvoorde | GP Auto's VAG specialist`;
    const jsonLd = graphStructuredData([
        webpageStructuredData(pagePath, pageTitle, service.metaDescription),
        {
            '@type': 'Service',
            '@id': `${site.url}${pagePath}#service`,
            name: service.name,
            description: service.metaDescription,
            serviceType: service.name,
            url: `${site.url}${pagePath}`,
            provider: {
                '@type': 'AutoRepair',
                '@id': `${site.url}/#business`,
                name: "GP Auto's",
                address: postalAddressStructuredData(),
            },
            areaServed: [
                placeAreaStructuredData('Achterhoek, Gelderland'),
                placeAreaStructuredData('Lichtenvoorde', 'City'),
            ],
        },
        faqStructuredData(service.faqs),
        breadcrumbStructuredData([
            { name: 'Home', path: '/' },
            { name: 'Diensten', path: '/#diensten' },
            { name: service.name, path: pagePath },
        ]),
    ]);

    return (
        <div className="detail-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Broodkruimelnavigatie">
                        <Link href="/">Home</Link><span aria-hidden="true">/</span>
                        <Link href="/#diensten">Diensten</Link><span aria-hidden="true">/</span>
                        <span aria-current="page">{service.name}</span>
                    </nav>
                    <div className="editorial-grid items-end">
                        <div>
                            <h1>{service.name}</h1>
                            <p className="page-intro">{service.shortDescription}</p>
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <Link href="/afspraak" className="btn-primary">Afspraak maken</Link>
                            <a href={`tel:${business.phone}`} className="btn-secondary">Bel {business.phoneDisplay}</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container editorial-grid">
                    <div>
                        <h2>Wanneer is dit de juiste service?</h2>
                        <p className="mt-6 max-w-[65ch] text-[var(--text-secondary)]">{service.intro}</p>
                        <ul className="detail-list mt-8">
                            {service.idealFor.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <aside className="border-t border-[var(--border)] pt-6">
                        <h3>In Lichtenvoorde</h3>
                        <p className="mt-4 text-[var(--text-secondary)]">
                            GP Auto&apos;s verzorgt {service.name.toLowerCase()} voor Audi, Volkswagen, SEAT en Skoda.
                            Voor automobilisten uit de Achterhoek die duidelijke diagnose, eerlijk advies en onderhoud op afspraak zoeken.
                        </p>
                    </aside>
                </div>
            </section>

            <section className="content-section bg-[var(--bg-alt)]">
                <div className="container editorial-grid">
                    <div>
                        <h2>Wat we controleren of uitvoeren</h2>
                        <ul className="detail-list mt-8">
                            {service.checklist.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3>Waarom deze aanpak werkt</h3>
                        <p className="mt-4 text-[var(--text-secondary)]">{service.longDescription}</p>
                        <p className="mt-6 border-t border-[var(--border)] pt-6 text-[var(--text-secondary)]">
                            U krijgt een technische uitleg die helpt bij de volgende stap, zonder onnodige vervangadviezen.
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container editorial-grid">
                    <h2>Veelgestelde vragen</h2>
                    <div className="border-t border-[var(--border)]">
                        {service.faqs.map((faq) => (
                            <details key={faq.question} className="border-b border-[var(--border)] py-6">
                                <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
                                <p className="mt-4 text-[var(--text-secondary)]">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section bg-[var(--bg-alt)]">
                <div className="container">
                    <div className="editorial-grid mb-8">
                        <h2>Gerelateerde diensten</h2>
                        <p className="text-[var(--text-secondary)]">Deze diensten combineren vaak logisch met uw afspraak.</p>
                    </div>
                    {relatedServices.map((relatedService) => (
                        <Link key={relatedService.slug} href={`/diensten/${relatedService.slug}`} className="service-row">
                            <h3>{relatedService.name}</h3>
                            <p>{relatedService.shortDescription}</p>
                            <span>Bekijk dienst</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
