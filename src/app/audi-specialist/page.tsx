import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';
import { brandSpecialistStructuredData, business, serializeJsonLd } from '@/lib/site-data';

export const metadata: Metadata = {
    title: "Audi specialist in Lichtenvoorde | GP Auto's",
    description: "Audi onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Van A1 en A3 tot Q5, e-tron en S tronic, op afspraak en met duidelijke uitleg.",
    openGraph: {
        title: "Audi specialist in Lichtenvoorde | GP Auto's",
        description: "Onderhoud, diagnose en reparatie voor Audi in Lichtenvoorde. Van A1 en A3 tot Q5, e-tron en S tronic.",
        url: 'https://gpautos.nl/audi-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: "GP Auto's Audi specialist in Lichtenvoorde",
            },
        ],
    },
    alternates: {
        canonical: '/audi-specialist',
    },
};

export default function AudiSpecialistPage() {
    const relevantServices = services.filter((service) =>
        ['apk', 'onderhoud-service', 'diagnose-storing', 'software-chiptuning', 'remmen-wielophanging'].includes(service.slug)
    );

    const audiModels = ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'e-tron'];

    const faqItems = [
        {
            question: 'Werkt GP Auto\'s ook aan moderne Audi modellen en hybride of elektrische varianten?',
            answer: 'Ja. Wij helpen met regulier onderhoud, diagnose en service voor recente Audi-modellen, inclusief e-tron varianten en modellen met complexe elektronica.',
        },
        {
            question: 'Kan ik terecht voor S tronic, storingen en coderingen?',
            answer: 'Ja. Wij combineren merkgerichte diagnose met onderhoud en VAG-coderingen, zodat u niet onnodig onderdelen laat vervangen.',
        },
        {
            question: 'Helpen jullie klanten uit de hele Achterhoek?',
            answer: 'Ja. Veel Audi-rijders komen uit Lichtenvoorde, Groenlo, Aalten, Winterswijk en de omliggende dorpen naar onze werkplaats.',
        },
    ];

    const jsonLd = brandSpecialistStructuredData(
        '/audi-specialist',
        "Audi specialist in Lichtenvoorde | GP Auto's",
        'Audi onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
        'Audi',
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
                        <span aria-current="page">Audi specialist</span>
                    </nav>
                    <h1>Audi specialist in Lichtenvoorde</h1>
                    <p className="page-intro">Onderhoud, diagnose en reparatie voor uw Audi, op afspraak.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/afspraak" className="btn-primary">Maak afspraak</Link>
                        <a href={`tel:${business.phone}`} className="btn-secondary">Bel direct</a>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container editorial-grid">
                    <div>
                        <h2>Diensten voor uw Audi</h2>
                        <p className="mt-4 text-[var(--text-secondary)]">Van onderhoud en diagnose tot coderen en remmen & onderstel.</p>
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
                        <h2>Waarom Audi-rijders voor GP Auto&apos;s kiezen</h2>
                        <p className="mt-4 text-[var(--text-secondary)]">Persoonlijke service, duidelijke diagnose en onderhoud dat past bij de techniek van uw Audi.</p>
                        <ul className="detail-list mt-6">
                            {['Merkspecifieke diagnose voor moderne Audi elektronica en assistentiesystemen.',
                                        'Onderhoud en reparatie met aandacht voor digitale servicehistorie en fabrieksvoorschriften.',
                                        'Duidelijke uitleg over kosten, planning en wat echt nodig is.',
                                        'Lokale werkplaats in Lichtenvoorde, handig voor klanten uit de hele Achterhoek.',].map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </aside>
                </div>
            </section>
            <section className="content-section bg-[var(--bg-alt)]">
                <div className="container editorial-grid">
                    <div><h2>Audi modellen die wij vaak zien</h2><p className="mt-4 max-w-xl text-[var(--text-secondary)]">Voor Audi onderhoud, diagnose en reparatie aan de Galileïstraat 5 in Lichtenvoorde. Wij helpen u met moderne Audi-techniek, van A1 tot e-tron.</p></div>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg">
                        {audiModels.map((model) => <span key={model}>Audi {model}</span>)}
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
                        <ul className="detail-list mt-6"><li>Diagnose van motorstoringen, elektronische meldingen en rijhulpsystemen.</li>
                                    <li>Onderhoud voor TFSI, TDI, S tronic, quattro en e-tron modellen.</li>
                                    <li>VAG-COM/VCDS coderingen en gerichte technische ondersteuning.</li>
                                    <li>Remmen, onderstel en herstelwerk met transparante prioriteiten.</li></ul>
                    </div>
                </div>
            </section>
            <section className="booking-band">
                <div className="container">
                    <h2>Plan uw Audi-bezoek in Lichtenvoorde</h2>
                    <p className="mt-4 max-w-2xl">Wilt u onderhoud, diagnose of reparatie laten plannen voor uw Audi? Boek direct online of bekijk eerst de relevante dienstpagina’s.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/afspraak" className="btn-primary">Afspraak maken</Link>
                        <Link href="/diensten/onderhoud-service" className="btn-secondary">Onderhoud bekijken</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
