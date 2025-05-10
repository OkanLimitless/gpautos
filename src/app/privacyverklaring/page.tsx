import Layout from '@/components/Layout'

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="pt-20 bg-zinc-950">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Privacyverklaring</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p>
              Bij GP Auto's hechten wij groot belang aan de privacy van onze klanten. 
              Deze privacyverklaring legt uit hoe wij omgaan met uw persoonsgegevens.
            </p>

            <h2>Welke gegevens verzamelen wij?</h2>
            <p>Wij verzamelen de volgende persoonsgegevens:</p>
            <ul>
              <li>Naam en contactgegevens (e-mail, telefoon)</li>
              <li>Adresgegevens</li>
              <li>Kenteken en voertuiggegevens</li>
              <li>Afspraak- en onderhoudshistorie</li>
            </ul>

            <h2>Waarom verzamelen wij deze gegevens?</h2>
            <p>Wij gebruiken uw gegevens voor:</p>
            <ul>
              <li>Het inplannen en uitvoeren van onderhoud en reparaties</li>
              <li>Het versturen van afspraakbevestigingen</li>
              <li>Het bijhouden van uw onderhoudshistorie</li>
              <li>Het versturen van relevante herinneringen (bijv. onderhoudsbeurten)</li>
              <li>Facturatie en administratie</li>
            </ul>

            <h2>Hoe lang bewaren wij uw gegevens?</h2>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is voor de doeleinden 
              waarvoor deze worden verzameld. Voor administratieve gegevens hanteren wij de wettelijke 
              bewaartermijn van 7 jaar.
            </p>

            <h2>Delen van gegevens</h2>
            <p>
              Wij delen uw gegevens alleen met derde partijen als dit noodzakelijk is voor onze dienstverlening 
              of wanneer wij hiertoe wettelijk verplicht zijn. Met bedrijven die uw gegevens verwerken hebben 
              wij een verwerkersovereenkomst gesloten.
            </p>

            <h2>Uw rechten</h2>
            <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
            <ul>
              <li>Recht op inzage in uw gegevens</li>
              <li>Recht op correctie van onjuiste gegevens</li>
              <li>Recht op verwijdering van gegevens</li>
              <li>Recht op beperking van gegevensverwerking</li>
              <li>Recht op overdraagbaarheid van gegevens</li>
              <li>Recht om bezwaar te maken tegen verwerking</li>
            </ul>

            <h2>Contact</h2>
            <p>
              Heeft u vragen over ons privacybeleid? Neem dan contact met ons op via:
            </p>
            <p>
              GP Auto's<br />
              Galileïstraat 5<br />
              7131PE Lichtenvoorde<br />
              Email: info@gpautos.nl<br />
              Tel: +31 (0)6 15530641
            </p>

            <h2>Wijzigingen</h2>
            <p>
              Wij behouden ons het recht voor om wijzigingen aan te brengen in deze privacyverklaring. 
              Controleer daarom regelmatig deze verklaring voor het meest actuele privacybeleid.
            </p>

            <p className="text-sm text-gray-400 mt-8">
              Laatste update: {new Date().toLocaleDateString('nl-NL')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
} 