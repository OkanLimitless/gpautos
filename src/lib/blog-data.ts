export type BlogBlock =
  | {
      type: 'lead'
      text: string
    }
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'bullets'
      title?: string
      items: string[]
    }
  | {
      type: 'steps'
      title?: string
      items: {
        title: string
        text: string
      }[]
    }
  | {
      type: 'callout'
      title: string
      text: string
    }

export interface BlogFaq {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  publishedAt: string
  updatedAt: string
  readingTime: string
  focusKeyword: string
  focusArea: string
  relatedServices: string[]
  blocks: BlogBlock[]
  faqs: BlogFaq[]
  sources?: {
    name: string
    url: string
  }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'auto-onderhoud-achterhoek',
    title: 'Auto onderhoud in de Achterhoek: wanneer plant u een beurt?',
    excerpt:
      'Leer de signalen herkennen die aangeven dat onderhoud slim is, wat u tijdens een beurt mag verwachten en waarom lokaal onderhoud tijd scheelt.',
    metaDescription:
      'Wanneer is auto onderhoud nodig in de Achterhoek? Lees de signalen, service-intervallen en hoe GP Auto’s u helpt met onderhoud in Lichtenvoorde.',
    publishedAt: '2026-03-14',
    updatedAt: '2026-03-14',
    readingTime: '6 min',
    focusKeyword: 'auto onderhoud Achterhoek',
    focusArea: 'Achterhoek, Lichtenvoorde en omgeving',
    relatedServices: ['onderhoud-service', 'diagnose-storing', 'remmen-wielophanging'],
    blocks: [
      {
        type: 'lead',
        text:
          'Veel zoekopdrachten beginnen niet met “ik wil onderhoud”, maar met “wat klinkt hier niet goed?” of “kan ik hier nog mee doorrijden?”. Daarom is goed onderhoud vooral een kwestie van op tijd signalen herkennen.',
      },
      {
        type: 'paragraph',
        text:
          'Bij regulier auto onderhoud kijken wij naar vloeistoffen, filters, remmen, banden, accu, ophanging en foutcodes. Het doel is simpel: kleine slijtage vinden voordat het een dure reparatie wordt.',
      },
      {
        type: 'bullets',
        title: 'Signalen dat u nu een beurt moet plannen',
        items: [
          'De auto maakt nieuwe geluiden bij remmen, sturen of optrekken.',
          'Het brandstofverbruik loopt ineens op zonder duidelijke reden.',
          'De auto voelt minder strak aan of maakt nieuwe geluiden bij remmen of sturen.',
          'Er brandt een storingslampje of het dashboard geeft een melding.',
        ],
      },
      {
        type: 'steps',
        title: 'Wat een goede onderhoudsbeurt oplevert',
        items: [
          {
            title: 'Minder kans op pech',
            text:
              'Een tijdige check voorkomt dat u met lege accu, versleten remmen of lekkage stilvalt.',
          },
          {
            title: 'Beter inzicht in kosten',
            text:
              'U krijgt duidelijk te horen wat urgent is en wat nog even kan wachten.',
          },
          {
            title: 'Praktische planning',
            text:
              'Woont u in Lichtenvoorde of een dorp in de buurt, dan is een werkplaats dichtbij gewoon handiger voor vervolgwerk.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Onderhoud slim combineren',
        text:
          'Heeft uw auto ook een storing of remgeluid? Dan is het vaak efficiënter om dat meteen mee te laten nemen in dezelfde afspraak.',
      },
    ],
    faqs: [
      {
        question: 'Hoe vaak moet auto onderhoud gebeuren?',
        answer:
          'Dat hangt af van merk, model, kilometerstand en gebruik. De onderhoudsintervallen van de fabrikant zijn leidend, maar signalen uit de praktijk zijn minstens zo belangrijk.',
      },
      {
        question: 'Is onderhoud ook zinvol als de auto “nog prima rijdt”?',
        answer:
          'Ja. Juist preventief onderhoud voorkomt dat kleine afwijkingen uitgroeien tot grotere reparaties.',
      },
      {
        question: 'Kan onderhoud worden gecombineerd met diagnose?',
        answer:
          'Zeker. Dat is vaak de slimste manier om in één bezoek meerdere problemen te beoordelen.',
      },
    ],
  },
  {
    slug: 'motorlampje-brandt-lichtenvoorde',
    title: 'Motorlampje brandt? Dit doet u voordat u naar een garage in Lichtenvoorde rijdt',
    excerpt:
      'Praktische uitleg over de meest voorkomende oorzaken van een brandend storingslampje en wanneer u direct diagnose nodig heeft.',
    metaDescription:
      'Brandt het motorlampje? Lees wat u wel en niet moet doen, wanneer veilig doorrijden kan en wanneer diagnose in Lichtenvoorde nodig is.',
    publishedAt: '2026-03-18',
    updatedAt: '2026-03-18',
    readingTime: '5 min',
    focusKeyword: 'motorlampje brandt Lichtenvoorde',
    focusArea: 'Lichtenvoorde en directe omgeving',
    relatedServices: ['diagnose-storing', 'onderhoud-service', 'remmen-wielophanging'],
    blocks: [
      {
        type: 'lead',
        text:
          'Een brandend motorlampje zorgt vaak direct voor twijfel: nog even doorrijden of meteen stoppen? Het antwoord hangt af van de melding, het gedrag van de auto en of er extra waarschuwingssignalen zijn.',
      },
      {
        type: 'paragraph',
        text:
          'Een storingslampje is geen diagnose op zichzelf. Het is een aanwijzing dat het motormanagement iets heeft gedetecteerd. Dat kan variëren van een losse sensor of een misfire tot een probleem met inspuiting, emissie of ontsteking.',
      },
      {
        type: 'bullets',
        title: 'Doe dit eerst',
        items: [
          'Controleer of de auto normaal optrekt en geen rare trillingen geeft.',
          'Kijk of er naast het motorlampje nog andere meldingen branden.',
          'Let op rook, verlies van vermogen of sterke benzinegeur.',
          'Rijd niet onnodig door als het lampje knippert in plaats van constant brandt.',
        ],
      },
      {
        type: 'steps',
        title: 'Wanneer is diagnose slim?',
        items: [
          {
            title: 'Bij terugkerende meldingen',
            text:
              'Als het lampje vaker terugkomt, is er een onderliggend probleem dat u niet moet uitstellen.',
          },
          {
            title: 'Bij VAG-modellen',
            text:
              'Audi, Volkswagen, SEAT en Skoda vragen vaak merkgerichte uitlezing om de echte oorzaak te vinden.',
          },
          {
            title: 'Als u uit de buurt komt',
            text:
              'Woont u in Lichtenvoorde, Groenlo of Varsseveld, dan is snel even langsgaan vaak beter dan blijven gokken.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Laat het uitlezen voordat het erger wordt',
        text:
          'Met een goede diagnose voorkomt u onnodig onderdelen vervangen. Dat scheelt tijd, geld en frustratie.',
      },
    ],
    faqs: [
      {
        question: 'Kan ik nog doorrijden met een brandend motorlampje?',
        answer:
          'Soms wel, soms niet. Als het lampje knippert, de auto inhoudt of vreemd ruikt, is stoppen verstandiger.',
      },
      {
        question: 'Is uitlezen altijd genoeg?',
        answer:
          'Nee. Een foutcode wijst richting een probleem, maar de oorzaak moet technisch bevestigd worden.',
      },
      {
        question: 'Waarom is een VAG specialist handig?',
        answer:
          'Omdat merkspecifieke kennis en apparatuur de kans vergroten dat de echte oorzaak sneller wordt gevonden.',
      },
    ],
  },
  {
    slug: 'wat-doet-een-vag-specialist',
    title: 'Wat doet een VAG specialist en wanneer is die handig?',
    excerpt:
      'Lees wat een VAG specialist doet, wanneer merkgerichte diagnose verschil maakt en voor welke Audi, Volkswagen, SEAT en Skoda-vragen u terechtkunt.',
    metaDescription:
      'Wat doet een VAG specialist? Ontdek wanneer merkkennis en gerichte diagnose voor Audi, Volkswagen, SEAT en Skoda verschil maken.',
    publishedAt: '2026-07-09',
    updatedAt: '2026-07-09',
    readingTime: '5 min',
    focusKeyword: 'wat doet een VAG specialist',
    focusArea: 'Lichtenvoorde en de Achterhoek',
    relatedServices: ['diagnose-storing', 'onderhoud-service', 'software-chiptuning'],
    blocks: [
      {
        type: 'lead',
        text:
          'Een VAG specialist is een garage die veel werkt aan Audi, Volkswagen, SEAT, Skoda en Cupra. Dat is vooral handig wanneer onderhoud, elektronica, foutcodes of instellingen merkspecifieke kennis vragen.',
      },
      {
        type: 'paragraph',
        text:
          'VAG staat voor Volkswagen Aktiengesellschaft, de groep waar verschillende automerken onder vallen. De auto’s delen vaak techniek, maar de uitvoering, software en onderhoudsbehoefte verschillen per model en bouwjaar. Daarom begint goed werk niet met onderdelen vervangen, maar met vaststellen wat er technisch speelt.',
      },
      {
        type: 'bullets',
        title: 'Wanneer een VAG specialist verschil kan maken',
        items: [
          'Bij een storingslampje, foutcode of terugkerende elektronische melding.',
          'Bij onderhoud waarbij service-intervallen, olie-eisen of digitale registraties belangrijk zijn.',
          'Bij rem-, onderstel- of rijgedragsklachten waarbij een gerichte controle nodig is.',
          'Bij VAG-COM of VCDS-coderingen voor geschikte comfortfuncties en instellingen.',
        ],
      },
      {
        type: 'steps',
        title: 'Zo verloopt een gerichte diagnose',
        items: [
          {
            title: 'Klacht en voertuiggegevens verzamelen',
            text:
              'De omstandigheden waarin een melding of klacht optreedt, geven richting aan de controle.',
          },
          {
            title: 'Foutcodes en meetwaarden beoordelen',
            text:
              'Een foutcode is een aanwijzing. Door die te combineren met meetwaarden en het gedrag van de auto ontstaat een beter technisch beeld.',
          },
          {
            title: 'Pas daarna een vervolg voorstellen',
            text:
              'U krijgt duidelijkheid over wat aandacht vraagt, wat de logische vervolgstap is en wat eventueel nog kan wachten.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Kort antwoord',
        text:
          'Voor Audi, Volkswagen, SEAT en Skoda is een VAG specialist vooral waardevol wanneer een standaardbeurt niet genoeg is en merkspecifieke diagnose, onderhoud of codering nodig is. GP Auto’s werkt vanuit Lichtenvoorde voor automobilisten uit de Achterhoek, op afspraak.',
      },
    ],
    faqs: [
      {
        question: 'Werkt een VAG specialist alleen aan Volkswagen?',
        answer:
          'Nee. VAG-specialisme richt zich doorgaans op Audi, Volkswagen, SEAT, Skoda en vaak ook Cupra. Welke werkzaamheden passend zijn, hangt af van het model, bouwjaar en de klacht.',
      },
      {
        question: 'Is een foutcode meteen de oorzaak van een storing?',
        answer:
          'Nee. Een foutcode geeft een richting, maar moet worden gecontroleerd met de klacht, meetwaarden en een technische inspectie voordat een reparatie wordt geadviseerd.',
      },
      {
        question: 'Kan onderhoud worden gecombineerd met diagnose?',
        answer:
          'Vaak wel. Als u de klacht vooraf doorgeeft, kan worden beoordeeld of onderhoud en diagnose logisch in één afspraak passen.',
      },
    ],
  },
  {
    slug: 'remmen-controleren-signalen',
    title: 'Wanneer moet u de remmen van uw auto laten controleren?',
    excerpt:
      'Piepen, trillen of een sponsachtig pedaal? Lees welke remsignalen u serieus moet nemen en wanneer een controle verstandig is.',
    metaDescription:
      'Wanneer moeten remmen gecontroleerd worden? Herken piepen, trillen en andere signalen en plan op tijd een remcontrole.',
    publishedAt: '2026-07-09',
    updatedAt: '2026-07-09',
    readingTime: '5 min',
    focusKeyword: 'wanneer remmen laten controleren',
    focusArea: 'Lichtenvoorde en de Achterhoek',
    relatedServices: ['remmen-wielophanging', 'onderhoud-service', 'diagnose-storing'],
    blocks: [
      {
        type: 'lead',
        text:
          'Laat uw remmen controleren zodra het rempedaal anders aanvoelt, de auto bij remmen trilt of u nieuwe geluiden hoort. Remklachten zijn veiligheidsrelevant: uitstellen maakt een gerichte controle niet slimmer of goedkoper.',
      },
      {
        type: 'paragraph',
        text:
          'Slijtage aan remblokken en remschijven hoort bij normaal gebruik, maar het tempo verschilt per auto en rijstijl. Ook banden, wielophanging en elektronische systemen kunnen invloed hebben op wat u tijdens het remmen voelt. Alleen op een geluid afgaan is daarom niet genoeg voor een betrouwbare conclusie.',
      },
      {
        type: 'bullets',
        title: 'Signalen om niet te negeren',
        items: [
          'Een schurend, metaalachtig of voortdurend piepend geluid bij remmen.',
          'Trillingen in stuur of rempedaal zodra u afremt.',
          'Een rempedaal dat duidelijk sponsachtiger aanvoelt dan normaal.',
          'De auto trekt naar één kant bij remmen of een remwaarschuwingslampje brandt.',
        ],
      },
      {
        type: 'steps',
        title: 'Wat een remcontrole oplevert',
        items: [
          {
            title: 'De oorzaak in beeld',
            text:
              'De werkplaats beoordeelt onder meer de conditie van remblokken en -schijven, het remsysteem en relevante delen van het onderstel.',
          },
          {
            title: 'Duidelijke prioriteit',
            text:
              'U weet welke punten direct aandacht vragen en welke punten u kunt blijven volgen.',
          },
          {
            title: 'Een passende vervolgstap',
            text:
              'Pas na de controle is duidelijk of onderhoud, herstelwerk of aanvullende diagnose nodig is.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Bij twijfel: niet afwachten',
        text:
          'Bij een rood remwaarschuwingslampje, duidelijk verminderd remvermogen of een auto die onveilig aanvoelt, rijd dan niet verder dan nodig is. Neem contact op voor een gerichte beoordeling.',
      },
    ],
    faqs: [
      {
        question: 'Hoe lang gaan remblokken en remschijven mee?',
        answer:
          'Dat verschilt sterk per auto, rijstijl, gebruik en soort ritten. Een inspectie tijdens onderhoud of bij klachten geeft een betrouwbaarder antwoord dan een vaste kilometerstand.',
      },
      {
        question: 'Is piepen altijd een teken dat remmen versleten zijn?',
        answer:
          'Niet altijd, maar nieuw of aanhoudend piepen verdient wel controle. Het kan samenhangen met slijtage, vuil, vocht of een ander onderdeel van het remsysteem.',
      },
      {
        question: 'Kan een trillend stuur door de remmen komen?',
        answer:
          'Dat kan, vooral wanneer de trilling vooral bij afremmen optreedt. Een technische controle is nodig om remmen, banden en onderstel goed van elkaar te onderscheiden.',
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
