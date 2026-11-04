import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';
import { brandSpecialistStructuredData, business, serializeJsonLd } from '@/lib/site-data';

export const metadata: Metadata = {
    title: "Škoda specialist in Lichtenvoorde | GP Auto's",
    description: "Škoda onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Fabia, Octavia, Superb, Kodiaq, Enyaq en meer.",
    openGraph: {
        title: "Škoda specialist in Lichtenvoorde | GP Auto's",
        description: "Škoda onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Fabia, Octavia, Superb, Kodiaq, Enyaq en meer.",
        url: 'https://gpautos.nl/skoda-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: "GP Auto's Škoda specialist in Lichtenvoorde",
            },
        ],
    },
    alternates: {
        canonical: '/skoda-specialist',
    },
};

export default function SkodaSpecialistPage() {
    const relevantServices = services.filter((service) =>
        ['apk', 'onderhoud-service', 'diagnose-storing', 'remmen-wielophanging', 'software-chiptuning'].includes(service.slug)
    );

    const skodaModels = ['Fabia', 'Scala', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq iV', 'Citigo'];

    const faqItems = [
        {
            question: 'Kunnen jullie Škoda onderhoud doen volgens fabrieksvoorschrift?',
            answer: 'Ja. Wij voeren onderhoud uit met aandacht voor de techniek van Škoda en houden rekening met service-intervallen en digitale historie.',
        },
        {
            question: "Helpen jullie ook bij familieauto's en leasewagens?",
            answer: 'Ja. Veel Škoda-rijders komen met Octavia, Superb, Kodiaq of Fabia voor onderhoud, diagnose en reparatie.',
        },
        {
            question: 'Zijn jullie bereikbaar voor klanten uit de Achterhoek?',
            answer: 'Ja. Onze werkplaats in Lichtenvoorde is goed bereikbaar voor klanten uit Groenlo, Aalten, Winterswijk en de rest van de regio.',
        },
    ];

    const jsonLd = brandSpecialistStructuredData(
        '/skoda-specialist',
        "Škoda specialist in Lichtenvoorde | GP Auto's",
        'Škoda onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
        'Škoda',
        faqItems
    );

    return (
        <div className="detail-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Kruimelpad">
                        <Link href="/">Home</Link><span aria-hidden="true">/</span>
                        <Link href="/#merken">Merken</Link><span aria-hidden="true">/</span>
                        <span aria-current="page">Škoda specialist</span>
                    </nav>
                    <h1>Škoda specialist in Lichtenvoorde</h1>
                    <p className="page-intro">Onderhoud, diagnose en reparatie voor uw Škoda, op afspraak.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/afspraak" className="btn-primary">Maak afspraak</Link>
                        <a href={`tel:${business.phone}`} className="btn-secondary">Bel direct</a>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container editorial-grid">
                    <div>
                        <h2>Diensten voor uw Škoda</h2>
                        <p className="mt-4 text-[var(--text-secondary)]">Voor onderhoud, diagnose, remwerk en coderen.</p>
                        <div className="mt-8">
                            {relevantServices.map((service) => (
                                <Link key={service.slug} href={`/diensten/${service.slug}`} className="service-row">
                                    <h3>{service.name}</h3>
                                    <p>{service.shortDescription}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <aside className="border-t border-[var(--border)] pt-6">
                        <h2>Waarom Škoda-rijders voor GP Auto&apos;s kiezen</h2>
                        <p className="mt-4 text-[var(--text-secondary)]">Praktisch, transparant en geschikt voor gezinnen, zakelijke rijders en leaserijders.</p>
                        <ul className="detail-list mt-6">
                            {['Kennis van de VAG-techniek achter Škoda, zonder dealerprijs.',
                                        'Gericht onderhoud voor gezinnen en zakelijke rijders met veel kilometers.',
                                        'Duidelijke diagnose bij elektronische meldingen, slijtage en periodiek onderhoud.',
                                        'Een vaste werkplaats in Lichtenvoorde voor de hele Achterhoek.',].map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </aside>
                </div>
            </section>
            <section className="content-section bg-[var(--bg-alt)]">
                <div className="container editorial-grid">
                    <div><h2>Škoda modellen die wij vaak zien</h2><p className="mt-4 max-w-xl text-[var(--text-secondary)]">Voor Škoda onderhoud, diagnose en reparatie aan de Galileïstraat 5 in Lichtenvoorde. Van Fabia en Octavia tot Superb, Kodiaq en Enyaq.</p></div>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg">
                        {skodaModels.map((model) => <span key={model}>Škoda {model}</span>)}
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container editorial-grid">
                    <div>
                        <h2>Veelgestelde vragen</h2>
                        <div className="mt-6">
                            {faqItems.map((item) => (
                                <details key={item.question} className="border-b border-[var(--border)] py-5">
                                    <summary className="cursor-pointer font-semibold">{item.question}</summary>
                                    <p className="mt-4 text-[var(--text-secondary)]">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>Waar wij u mee helpen</h2>
                        <ul className="detail-list mt-6"><li>Onderhoud voor Fabia, Octavia, Superb, Kodiaq, Karoq en Enyaq.</li>
                                    <li>Controle en herstel van remmen, verlichting en onderstel.</li>
                                    <li>Diagnose van storingen, remklachten en elektronische meldingen.</li>
                                    <li>Praktische service voor zowel privéauto’s als zakelijke voertuigen.</li></ul>
                    </div>
                </div>
            </section>
            <section className="booking-band">
                <div className="container">
                    <h2>Plan uw Škoda-bezoek in Lichtenvoorde</h2>
                    <p className="mt-4 max-w-2xl">Boek direct een afspraak voor onderhoud of diagnose, of bekijk eerst de meest relevante dienstpagina’s.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/afspraak" className="btn-primary">Afspraak maken</Link>
                        <Link href="/diensten/onderhoud-service" className="btn-secondary">Onderhoud bekijken</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
