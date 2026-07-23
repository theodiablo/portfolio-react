import type { Stat, Job, EarlierWork, LeadershipCard } from './types'

export const LINKS = {
  email: 'theo.camboulive.dev@gmail.com',
  github: 'https://github.com/theodiablo',
  linkedin: 'https://www.linkedin.com/in/théo-camboulive',
  runningApp: 'https://run.camboulive.solutions',
  runningRepo: 'https://github.com/theodiablo/running-coach',
  cv: '/cv/theo-camboulive-cv.pdf',
}

/** Compact skill set for the hero profile card — mirrors the CV's Stack column. */
export const PROFILE_STACK = [
  'TypeScript',
  'Node.js',
  'React',
  'Python',
  'PostgreSQL',
  'AWS',
  'Docker',
  'AI-assisted dev',
]

/** Engineering-leadership dimensions — foregrounds the EM story before the AI project. */
export const LEADERSHIP: LeadershipCard[] = [
  {
    label: { en: 'Team', es: 'Equipo' },
    lead: { en: '9 engineers, 2 remote squads', es: '9 ingenieros, 2 equipos en remoto' },
    body: {
      en: 'I lead two cross-functional teams at a remote-first B Corp, owning the full delivery loop from grooming and cadence to unblocking and technical-debt planning.',
      es: 'Lidero dos equipos multidisciplinares en una B Corp remota, con responsabilidad sobre todo el ciclo de entrega: desde el refinamiento y la cadencia hasta el desbloqueo y la planificación de deuda técnica.',
    },
  },
  {
    label: { en: 'Culture', es: 'Cultura' },
    lead: { en: 'HackDays, every quarter', es: 'HackDays, cada trimestre' },
    body: {
      en: 'I conceived and launched a quarterly company-wide hackathon so a distributed team gets to meet in person, invest in learning, and have fun experimenting outside of the product backlog.',
      es: 'Concebí y lancé un hackathon trimestral para toda la empresa, para que un equipo distribuido se reúna en persona, invierta en aprendizaje y se divierta experimentando fuera del backlog de producto.',
    },
  },
  {
    label: { en: 'Budget', es: 'Presupuesto' },
    lead: { en: '+€10,000 saved a year', es: '+10.000 € ahorrados al año' },
    body: {
      en: 'I own the engineering budget and cut and consolidated redundant tooling for real annual savings. I also run the R&D Tax Credits process for the whole Product & Engineering team, claiming back +€10,000 a year and lowering the team’s overall costs.',
      es: 'Gestiono el presupuesto de ingeniería y recorté y unifiqué herramientas redundantes con un ahorro anual real. También llevo el proceso de R&D Tax Credits para todo el equipo de Producto & Ingeniería, recuperando +10.000 € al año y reduciendo los costes globales del equipo.',
    },
  },
  {
    label: { en: 'People growth', es: 'Desarrollo de personas' },
    lead: { en: 'A path that didn’t exist', es: 'Un itinerario que no existía' },
    body: {
      en: 'I handled 7 promotions on my team, some difficult performance conversations, and contributed to the creation of a bespoke Product Engineer career track for a Staff Engineer who now owns product direction and delivery end to end.',
      es: 'Gestioné 7 promociones en mi equipo, algunas conversaciones de rendimiento difíciles, y contribuí a la creación de un itinerario de Product Engineer para una Staff Engineer que ahora lidera la dirección de producto y la entrega de principio a fin.',
    },
  },
]

export const HIGHLIGHTS: Stat[] = [
  {
    value: '9',
    label: { en: 'engineers led across 2 squads', es: 'ingenieros liderados en 2 equipos' },
  },
  {
    value: '2–3×',
    label: { en: 'faster delivery with AI-assisted dev', es: 'entrega más rápida con desarrollo asistido por IA' },
  },
  {
    value: '200M+',
    label: { en: 'monthly active users served at King', es: 'usuarios activos mensuales servidos en King' },
  },
  {
    value: '1',
    label: { en: 'agentic AI app, built end-to-end', es: 'app de IA agéntica, de principio a fin' },
  },
]

/** Tech chips for the Running Coach feature card. */
export const RUNNING_STACK = [
  'React 19',
  'TypeScript',
  'Capacitor (iOS/Android)',
  'Supabase (RLS)',
  'Claude API · tool use',
  'Eval & safety gates',
  'AWS',
  'PostHog',
]

export const EXPERIENCE: Job[] = [
  {
    company: 'Ecologi',
    location: { en: 'B Corp · Remote', es: 'B Corp · Remoto' },
    period: 'Feb 2022 — Present',
    roles: [
      {
        title: { en: 'Senior Engineering Manager', es: 'Senior Engineering Manager' },
        period: 'Feb 2025 — Present',
        bullets: [
          {
            en: 'Directly manage 9 engineers across two cross-functional squads, owning end-to-end delivery from backend data models and services to user-facing features, partnering closely with Product and Design from problem definition to launch.',
            es: 'Gestiono directamente a 9 ingenieros en dos equipos multidisciplinares, con responsabilidad total sobre la entrega, desde los modelos de datos y servicios de backend hasta las funcionalidades de cara al usuario, en estrecha colaboración con Producto y Diseño.',
          },
          {
            en: 'AI evangelist for the engineering org: introduced AI-assisted development across coding, code review and testing, ran hands-on upskilling for every engineer, and turned it into a 2–3× improvement in delivery speed with a leaner team.',
            es: 'Evangelista de IA para la organización: introduje el desarrollo asistido por IA en programación, revisión de código y testing, formé personalmente a cada ingeniero y lo convertí en una mejora de 2–3× en la velocidad de entrega con un equipo más reducido.',
          },
          {
            en: 'Rebuilt delivery on one team: monthly PR volume grew from 65 to 266, shipped 74 feature releases, moved from 2 QAs to zero through stronger test automation and AI-assisted review.',
            es: 'Reconstruí la entrega en un equipo: el volumen mensual de PRs pasó de 65 a 266, se lanzaron 74 releases y se pasó de 2 QAs a cero gracias a una mayor automatización de tests y a la revisión asistida por IA.',
          },
          {
            en: 'Drove CI/CD improvements: reduced build times by 50% and increased pipeline reliability by 90%. Managed the full people cycle: 7 promotions and a 6-month PIP through to resolution.',
            es: 'Impulsé mejoras de CI/CD: reduje los tiempos de build un 50% y aumenté la fiabilidad del pipeline un 90%. Gestioné el ciclo completo de personas: 7 promociones y un PIP de 6 meses hasta su resolución.',
          },
        ],
      },
      {
        title: { en: 'Software Engineering Manager', es: 'Software Engineering Manager' },
        period: 'Jun 2023 — Feb 2025',
        bullets: [
          {
            en: 'Managed a team of 5 shipping features on the TypeScript/Node.js Ecologi Zero platform; ran the technical roadmap in close collaboration with Product.',
            es: 'Gestioné un equipo de 5 personas desarrollando funcionalidades en la plataforma Ecologi Zero (TypeScript/Node.js); dirigí la hoja de ruta técnica en estrecha colaboración con Producto.',
          },
          {
            en: 'Conceived, pitched and launched Ecologi HackDays, a quarterly hackathon lifting builder culture, L&D and engagement. Led the company-wide migration from ClickUp to Notion.',
            es: 'Concebí, presenté y lancé Ecologi HackDays, un hackathon trimestral que impulsó la cultura de construcción, la formación y el compromiso. Lideré la migración de toda la empresa de ClickUp a Notion.',
          },
        ],
      },
      {
        title: { en: 'Senior Software Engineer', es: 'Senior Software Engineer' },
        period: 'Feb 2022 — Jun 2023',
        bullets: [
          {
            en: 'Designed and built core full-stack features on the Ecologi Zero platform, with a React front-end; took PoCs to live products end-to-end in a TypeScript/Node.js/PostgreSQL stack. Championed test automation and mentored junior engineers.',
            es: 'Diseñé y construí funcionalidades core full-stack en la plataforma Ecologi Zero, con React en el front-end; llevé PoCs a productos en producción de extremo a extremo con un stack TypeScript/Node.js/PostgreSQL. Impulsé la automatización de tests y mentoricé a ingenieros junior.',
          },
        ],
      },
    ],
  },
  {
    company: 'Freelance',
    location: { en: 'International clients', es: 'Clientes internacionales' },
    period: 'May 2017 — Feb 2022',
    roles: [
      {
        title: { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
        period: 'May 2017 — Feb 2022',
        bullets: [
          {
            en: 'Delivered backend and full-stack solutions for international clients across Python, Java/Spring, Go, Node.js and Vue/React on Google Cloud Run; owned full system design, architecture and infrastructure.',
            es: 'Entregué soluciones backend y full-stack para clientes internacionales con Python, Java/Spring, Go, Node.js y Vue/React sobre Google Cloud Run; con responsabilidad total sobre el diseño del sistema, la arquitectura y la infraestructura.',
          },
        ],
      },
    ],
  },
  {
    company: 'King',
    location: { en: 'Barcelona, Spain', es: 'Barcelona, España' },
    period: 'Jun 2018 — Sep 2020',
    roles: [
      {
        title: { en: 'Full-Stack Developer, Shared Technology', es: 'Full-Stack Developer, Shared Technology' },
        period: 'Jul 2019 — Sep 2020',
        bullets: [
          {
            en: 'Maintained a core platform service delivering content and messages to 50M+ daily and 200M+ monthly active users across all King games. Mission-critical, high-availability infrastructure.',
            es: 'Mantuve un servicio core de la plataforma que entregaba contenido y mensajes a más de 50M de usuarios diarios y 200M mensuales en todos los juegos de King: infraestructura crítica de alta disponibilidad.',
          },
        ],
      },
    ],
  },
]

export const EARLIER_WORK: EarlierWork[] = [
  {
    name: 'Luffa Shop',
    period: '2018 — 2021',
    blurb: {
      en: 'Co-founded an online zero-waste store for Spanish households. In three years we planted 3,500+ trees and avoided 15,000+ kg of plastic waste, building and running the full e-commerce stack myself.',
      es: 'Cofundé una tienda online de residuo cero para hogares españoles. En tres años plantamos más de 3.500 árboles y evitamos más de 15.000 kg de residuos plásticos, construyendo y operando yo mismo todo el stack de e-commerce.',
    },
    tags: ['E-commerce', 'PrestaShop', 'Sustainability', 'Founder'],
  },
  {
    name: 'Freelance & earlier roles',
    period: '2013 — 2022',
    blurb: {
      en: 'Before Ecologi: full-stack consulting for international clients, plus earlier engineering roles at Criteo, Sopra Steria and Worldline. A decade of shipping across the stack in Java, PHP, Go, Node and the front-end.',
      es: 'Antes de Ecologi: consultoría full-stack para clientes internacionales, además de roles previos de ingeniería en Criteo, Sopra Steria y Worldline: una década entregando en todo el stack con Java, PHP, Go, Node y el front-end.',
    },
    tags: ['Criteo', 'Sopra Steria', 'Worldline', 'Consulting'],
  },
]
