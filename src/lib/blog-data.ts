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
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
