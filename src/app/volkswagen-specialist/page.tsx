import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';
import { brandSpecialistStructuredData, business, serializeJsonLd } from '@/lib/site-data';

export const metadata: Metadata = {
    title: "Volkswagen specialist in Lichtenvoorde | GP Auto's",
    description: "Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Golf, Polo, Passat, Tiguan, T-Roc, ID.3 en meer.",
    openGraph: {
        title: "Volkswagen specialist in Lichtenvoorde | GP Auto's",
        description: "Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Golf, Polo, Passat, Tiguan, T-Roc, ID.3 en meer.",
        url: 'https://gpautos.nl/volkswagen-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: "GP Auto's Volkswagen specialist in Lichtenvoorde",
            },
        ],
    },
    alternates: {
        canonical: '/volkswagen-specialist',
    },
};

export default function VolkswagenSpecialistPage() {
    const relevantServices = services.filter((service) =>
        ['apk', 'onderhoud-service', 'diagnose-storing', 'remmen-wielophanging', 'software-chiptuning'].includes(service.slug)
    );

    const vwModels = ['Polo', 'Golf', 'T-Cross', 'T-Roc', 'Tiguan', 'Passat', 'Arteon', 'Touran', 'Touareg', 'ID.3', 'ID.4', 'ID.5', 'Caddy', 'Transporter'];

    const faqItems = [
        {
            question: 'Werken jullie aan zowel benzine, diesel als elektrische Volkswagen-modellen?',
            answer: 'Ja. Wij helpen met onderhoud en diagnose voor TSI, TDI, mild-hybrid en elektrische ID-modellen, inclusief de elektronische systemen daaromheen.',
        },
        {
            question: 'Kunnen jullie DSG-, AdBlue- en storingsproblemen onderzoeken?',
            answer: 'Ja. Wij combineren diagnose met praktische reparatie-adviezen, zodat u weet wat er nodig is en wat nog even kan wachten.',
        },
        {
            question: 'Is de werkplaats goed bereikbaar voor klanten uit de Achterhoek?',
            answer: 'Ja. Onze werkplaats in Lichtenvoorde is een logische keuze voor Volkswagen-rijders uit Groenlo, Aalten, Winterswijk en omliggende plaatsen.',
        },
    ];

    const jsonLd = brandSpecialistStructuredData(
        '/volkswagen-specialist',
        "Volkswagen specialist in Lichtenvoorde | GP Auto's",
        'Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
        'Volkswagen',
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
                        <span aria-current="page">Volkswagen specialist</span>
                    </nav>
                    <h1>Volkswagen specialist in Lichtenvoorde</h1>
                    <p className="page-intro">Onderhoud, diagnose en reparatie voor uw Volkswagen, op afspraak.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/afspraak" className="btn-primary">Maak afspraak</Link>
                        <a href={`tel:${business.phone}`} className="btn-secondary">Bel direct</a>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container editorial-grid">
                    <div>
                        <h2>Diensten voor uw Volkswagen</h2>
                        <p className="mt-4 text-[var(--text-secondary)]">Van onderhoud en diagnose tot remwerk en coderen.</p>
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
                        <h2>Waarom Volkswagen-rijders voor GP Auto&apos;s kiezen</h2>
                        <p className="mt-4 text-[var(--text-secondary)]">Handig voor Volkswagen-rijders die een vakman zoeken met duidelijke uitleg en geen onnodige vervanging.</p>
                        <ul className="detail-list mt-6">
                            {['Ervaring met TSI, TDI, DSG, AdBlue en elektrische ID-modellen.',
                                        'Merkgerichte diagnose bij foutmeldingen, slijtage en elektronische klachten.',
                                        'Onderhoud volgens voorschrift met duidelijke uitleg over wat direct nodig is.',
                                        'Lokale garage in Lichtenvoorde voor heel de Achterhoek.',].map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </aside>
                </div>
            </section>
            <section className="content-section bg-[var(--bg-alt)]">
                <div className="container editorial-grid">
                    <div><h2>Volkswagen modellen die wij vaak zien</h2><p className="mt-4 max-w-xl text-[var(--text-secondary)]">Voor Volkswagen onderhoud, diagnose en reparatie aan de Galileïstraat 5 in Lichtenvoorde. Van Golf en Polo tot Tiguan en ID.4.</p></div>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg">
                        {vwModels.map((model) => <span key={model}>Volkswagen {model}</span>)}
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
                        <ul className="detail-list mt-6"><li>Storingen aan motor, transmissie, elektronica en veiligheidssystemen.</li>
                                    <li>Onderhoud voor Golf, Polo, Passat, Tiguan, Transporter en ID-modellen.</li>
                                    <li>Reparatie van remmen, ophanging en verlichting met duidelijke prioriteiten.</li>
                                    <li>Praktische uitleg over de staat van uw auto en vervolgstappen.</li></ul>
                    </div>
                </div>
            </section>
            <section className="booking-band">
                <div className="container">
                    <h2>Plan uw Volkswagen-bezoek in Lichtenvoorde</h2>
                    <p className="mt-4 max-w-2xl">Boek direct een afspraak voor onderhoud, diagnose of remwerk. U kunt ook eerst een specifieke dienst bekijken.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/afspraak" className="btn-primary">Afspraak maken</Link>
                        <Link href="/diensten/remmen-wielophanging" className="btn-secondary">Remwerk bekijken</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
