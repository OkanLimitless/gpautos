import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCityBySlug, getServiceBySlug } from '@/lib/seo-data';
import {
    breadcrumbStructuredData,
    business,
    faqStructuredData,
    graphStructuredData,
    localBusinessStructuredData,
    placeAreaStructuredData,
    serializeJsonLd,
    site,
    webpageStructuredData,
} from '@/lib/site-data';

interface CityPageProps {
    params: { city: string };
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const city = getCityBySlug(params.city);
    if (!city) return {};

    const title = `Autogarage ${city.name} | VAG specialist in de Achterhoek`;
    const description = city.metaDescription;

    return {
        title,
        description,
        keywords: [
            city.name,
            'autogarage',
            'garage',
            'VAG specialist',
            'onderhoud',
            'diagnose',
        ],
        openGraph: {
            title,
            description,
            url: `${site.url}/regio/${city.slug}`,
            siteName: "GP Auto's",
            locale: 'nl_NL',
            type: 'website',
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: `GP Auto's in ${city.name}`,
                },
            ],
        },
        alternates: {
            canonical: `/regio/${city.slug}`,
        },
    };
}

export default function CityPage({ params }: CityPageProps) {
    const city = getCityBySlug(params.city);
    if (!city) notFound();

    const featuredServices = city.featuredServiceSlugs
        .map((slug) => getServiceBySlug(slug))
        .filter((service): service is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(service));

    const nearbyCities = city.nearbyCitySlugs
        .map((slug) => getCityBySlug(slug))
        .filter((nearbyCity): nearbyCity is NonNullable<ReturnType<typeof getCityBySlug>> => Boolean(nearbyCity));

    const pagePath = `/regio/${city.slug}`;
    const pageTitle = `Autogarage ${city.name} | VAG specialist in de Achterhoek`;
    const jsonLd = graphStructuredData([
        webpageStructuredData(pagePath, pageTitle, city.metaDescription),
        localBusinessStructuredData({
            url: `${site.url}${pagePath}`,
            description: city.metaDescription,
            areaServed: [
                placeAreaStructuredData(city.name, 'City'),
                placeAreaStructuredData(city.region, 'AdministrativeArea'),
            ],
        }),
        faqStructuredData(city.faqs),
        breadcrumbStructuredData([
            { name: 'Home', path: '/' },
            { name: city.name, path: pagePath },
        ]),
    ]);

    return (
        <div className="detail-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Broodkruimelnavigatie">
                        <Link href="/">Home</Link><span aria-hidden="true">/</span>
                        <span aria-current="page">{city.name}</span>
                    </nav>
                    <div className="editorial-grid items-end">
                        <div>
                            <h1>Autogarage {city.name}</h1>
                            <p className="page-intro">{city.description}</p>
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <Link href="/afspraak" className="btn-primary">Maak afspraak</Link>
                            <a href={`tel:${business.phone}`} className="btn-secondary">Bel {business.phoneDisplay}</a>
                            <p className="text-sm text-[var(--text-secondary)]">{city.distance} van Lichtenvoorde</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container editorial-grid">
                    <div>
                        <h2>Vanuit {city.name} naar onze werkplaats</h2>
                        <p className="mt-6 max-w-[65ch] text-[var(--text-secondary)]">{city.intro}</p>
                        <p className="mt-4 max-w-[65ch] text-[var(--text-secondary)]">
                            GP Auto&apos;s helpt klanten uit {city.name} en de regio {city.region} vanuit de werkplaats in Lichtenvoorde,
                            met extra focus op Audi, Volkswagen, SEAT en Skoda.
                        </p>
                    </div>
                    <ul className="detail-list">
                        {city.whyChoose.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                </div>
            </section>

            <section className="content-section bg-[var(--bg-alt)]">
                <div className="container">
                    <div className="editorial-grid mb-8">
                        <h2>Populaire diensten voor {city.name}</h2>
                        <div>
                            <p className="text-[var(--text-secondary)]">Veel klanten combineren hun rit met een gerichte afspraak voor onderhoud, diagnose of remwerk.</p>
                            <Link href="/afspraak" className="mt-4 inline-block underline underline-offset-4">Plan direct</Link>
                        </div>
                    </div>
                    {featuredServices.map((service) => (
                        <Link key={service.slug} href={`/diensten/${service.slug}`} className="service-row">
                            <h3>{service.name}</h3>
                            <p>{service.shortDescription}</p>
                            <span>Bekijk dienst</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="content-section">
                <div className="container editorial-grid">
                    <div>
                        <h2>Bereikbaarheid en aanpak</h2>
                        <p className="mt-6 max-w-[65ch] text-[var(--text-secondary)]">{city.routeTip}</p>
                        <dl className="mt-8 border-t border-[var(--border)]">
                            <div className="grid gap-4 border-b border-[var(--border)] py-6 sm:grid-cols-2">
                                <dt className="font-semibold">Werkplaats</dt>
                                <dd>{business.address.streetAddress}, {business.address.postalCode} {business.address.locality}</dd>
                            </div>
                            <div className="grid gap-4 border-b border-[var(--border)] py-6 sm:grid-cols-2">
                                <dt className="font-semibold">Focus</dt>
                                <dd>Onderhoud, diagnose en reparatie voor VAG-modellen</dd>
                            </div>
                        </dl>
                    </div>
                    <aside>
                        <h3>Onze aanpak</h3>
                        <ul className="detail-list mt-6">
                            <li>Lokale werkplaats in Lichtenvoorde met regionale dekking.</li>
                            <li>Gericht op Audi, Volkswagen, SEAT en Skoda.</li>
                            <li>Praktisch advies over wat direct moet en wat nog even kan wachten.</li>
                        </ul>
                    </aside>
                </div>
            </section>

            <section className="content-section bg-[var(--bg-alt)]">
                <div className="container editorial-grid">
                    <h2>Veelgestelde vragen</h2>
                    <div className="border-t border-[var(--border)]">
                        {city.faqs.map((faq) => (
                            <details key={faq.question} className="border-b border-[var(--border)] py-6">
                                <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
                                <p className="mt-4 text-[var(--text-secondary)]">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="editorial-grid mb-8">
                        <h2>Ook interessant in de buurt</h2>
                        <p className="text-[var(--text-secondary)]">Handig als u tussen meerdere plaatsen in de Achterhoek zoekt naar een garage die technisch sterk is.</p>
                    </div>
                    {nearbyCities.map((nearbyCity) => (
                        <Link key={nearbyCity.slug} href={`/regio/${nearbyCity.slug}`} className="service-row">
                            <h3>{nearbyCity.name}</h3>
                            <p>{nearbyCity.description}</p>
                            <span>Bekijk locatie</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
