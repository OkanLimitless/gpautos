import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';
import { brandSpecialistStructuredData, business, serializeJsonLd } from '@/lib/site-data';

export const metadata: Metadata = {
    title: "SEAT specialist in Lichtenvoorde | GP Auto's",
    description: "SEAT onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Ibiza, Leon, Arona, Ateca, Tarraco en Cupra-modellen.",
    openGraph: {
        title: "SEAT specialist in Lichtenvoorde | GP Auto's",
        description: "SEAT onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Ibiza, Leon, Arona, Ateca, Tarraco en Cupra-modellen.",
        url: 'https://gpautos.nl/seat-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: "GP Auto's SEAT specialist in Lichtenvoorde",
            },
        ],
    },
    alternates: {
        canonical: '/seat-specialist',
    },
};

export default function SeatSpecialistPage() {
    const relevantServices = services.filter((service) =>
        ['apk', 'onderhoud-service', 'diagnose-storing', 'remmen-wielophanging', 'software-chiptuning'].includes(service.slug)
    );

    const seatModels = ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco', 'Mii', 'Alhambra', 'Cupra Formentor', 'Cupra Born'];

    const faqItems = [
        {
            question: 'Werken jullie aan SEAT en Cupra modellen met dezelfde VAG-techniek?',
            answer: 'Ja. SEAT en Cupra delen veel techniek met Volkswagen en Audi, waardoor wij gericht kunnen helpen met onderhoud en diagnose.',
        },
        {
            question: 'Kunnen jullie helpen bij storingen, remmen en sportieve rijproblemen?',
            answer: 'Ja. Veel SEAT-rijders komen voor storingsdiagnose, remmen, ophanging en onderhoud dat past bij een sportieve rijstijl.',
        },
        {
            question: 'Is de werkplaats geschikt voor klanten uit de Achterhoek?',
            answer: 'Ja. Vanuit Lichtenvoorde zijn wij goed bereikbaar voor SEAT-rijders uit Groenlo, Aalten, Winterswijk en omliggende plaatsen.',
        },
    ];

    const jsonLd = brandSpecialistStructuredData(
        '/seat-specialist',
        "SEAT specialist in Lichtenvoorde | GP Auto's",
        'SEAT onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
        'SEAT',
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
                        <span aria-current="page">SEAT specialist</span>
                    </nav>
                    <h1>SEAT specialist in Lichtenvoorde</h1>
                    <p className="page-intro">Onderhoud, diagnose en reparatie voor uw SEAT, op afspraak.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/afspraak" className="btn-primary">Maak afspraak</Link>
                        <a href={`tel:${business.phone}`} className="btn-secondary">Bel direct</a>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container editorial-grid">
                    <div>
                        <h2>Diensten voor uw SEAT</h2>
                        <p className="mt-4 text-[var(--text-secondary)]">Onderhoud, diagnose, remwerk en coderen op een manier die past bij SEAT.</p>
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
                        <h2>Waarom SEAT-rijders voor GP Auto&apos;s kiezen</h2>
                        <p className="mt-4 text-[var(--text-secondary)]">Snel schakelen, duidelijke uitleg en onderhoud dat past bij een dynamische SEAT.</p>
                        <ul className="detail-list mt-6">
                            {['Kennis van de gedeelde techniek van SEAT, Cupra, Volkswagen en Audi.',
                                        'Gerichte hulp bij storingen, slijtage, coderingen en onderhoudsintervallen.',
                                        'Praktische uitleg voor rijders die een sportieve maar betaalbare auto willen behouden.',
                                        'Lokale garage in Lichtenvoorde, handig voor de hele Achterhoek.',].map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </aside>
                </div>
            </section>
            <section className="content-section bg-[var(--bg-alt)]">
                <div className="container editorial-grid">
                    <div><h2>SEAT modellen die wij vaak zien</h2><p className="mt-4 max-w-xl text-[var(--text-secondary)]">Voor SEAT onderhoud, diagnose en reparatie aan de Galileïstraat 5 in Lichtenvoorde. Ook voor Cupra-rijders en sportieve VAG-modellen.</p></div>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg">
                        {seatModels.map((model) => <span key={model}>{model}</span>)}
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
                        <ul className="detail-list mt-6"><li>Onderhoud voor Ibiza, Leon, Arona, Ateca, Tarraco en Cupra-modellen.</li>
                                    <li>Storingsdiagnose voor motor, infotainment, remmen en rijhulpsystemen.</li>
                                    <li>Remmen, wielophanging en afstelling voor comfortabel en sportief rijden.</li>
                                    <li>Softwarewerk en inspectie zonder onnodige dealerdruk.</li></ul>
                    </div>
                </div>
            </section>
            <section className="booking-band">
                <div className="container">
                    <h2>Plan uw SEAT-bezoek in Lichtenvoorde</h2>
                    <p className="mt-4 max-w-2xl">Maak direct een afspraak voor onderhoud of diagnose, of bekijk eerst de bijbehorende servicepagina’s.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/afspraak" className="btn-primary">Afspraak maken</Link>
                        <Link href="/diensten/diagnose-storing" className="btn-secondary">Diagnose bekijken</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
