import type { Lang } from '../content/types'

export const STRINGS = {
  'nav.leadership': { en: 'Leadership', es: 'Liderazgo' },
  'nav.work': { en: 'Work', es: 'Proyectos' },
  'nav.experience': { en: 'Experience', es: 'Experiencia' },
  'nav.ai': { en: 'AI', es: 'IA' },
  'nav.about': { en: 'About', es: 'Sobre mí' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },
  'nav.cv': { en: 'Download CV', es: 'Descargar CV' },

  'hero.eyebrow': { en: 'Engineering Manager · AI adoption', es: 'Engineering Manager · adopción de IA' },
  'hero.title': {
    en: 'Hands-on engineering manager.',
    es: 'Engineering manager que sigue programando.',
  },
  'hero.lede': {
    en: 'I lead two squads at Ecologi (B Corp), where I brought AI-assisted development into the team. 11+ years in high-growth SaaS, from a platform service at King serving 200M+ users to a small AI running coach I built and run myself.',
    es: 'Lidero dos equipos en Ecologi (B Corp), donde introduje el desarrollo asistido por IA en el equipo. Más de 11 años en SaaS de alto crecimiento, desde un servicio de plataforma en King que servía a más de 200M de usuarios hasta un pequeño entrenador de running con IA que construí y opero yo mismo.',
  },
  'hero.location': { en: 'San Sebastián, Spain', es: 'San Sebastián, España' },
  'hero.ctaWork': { en: 'See the work', es: 'Ver el trabajo' },
  'hero.ctaContact': { en: 'Get in touch', es: 'Contactar' },

  'profile.role': { en: 'Senior Engineering Manager', es: 'Senior Engineering Manager' },
  'profile.langs': { en: 'English · Spanish · French', es: 'Inglés · Español · Francés' },
  'profile.stackLabel': { en: 'Stack', es: 'Stack' },

  'highlights.title': { en: 'At a glance', es: 'De un vistazo' },

  'lead.title': { en: 'Engineering leadership', es: 'Liderazgo de ingeniería' },
  'lead.subtitle': {
    en: 'Built a high-performing remote engineering team that has fully embedded AI in their workflows while reducing tooling and operating costs.',
    es: 'Construí un equipo de ingeniería remoto de alto rendimiento que ha integrado plenamente la IA en sus flujos de trabajo, reduciendo a la vez los costes de herramientas y de operación.',
  },

  'work.eyebrow': { en: 'Featured project', es: 'Proyecto destacado' },
  'work.title': { en: 'Running Coach', es: 'Running Coach' },
  'work.tagline': {
    en: 'A free running app whose AI coach adapts your training plan in production.',
    es: 'Una app de running gratuita cuyo entrenador con IA adapta tu plan de entrenamiento en producción.',
  },
  'work.p1': {
    en: 'The coach is an LLM tool-use agent (Claude API) built as an editor, not an author: a propose-and-confirm loop with bounded typed tools and a shared validator, so the model can adjust a plan but can never break training-safety rules. You stay in control — it proposes, you apply.',
    es: 'El entrenador es un agente LLM de uso de herramientas (Claude API) construido como editor, no como autor: un bucle de propuesta y confirmación con herramientas tipadas y acotadas y un validador compartido, de modo que el modelo puede ajustar un plan pero nunca romper las reglas de seguridad del entrenamiento. Tú mantienes el control: propone, tú aplicas.',
  },
  'work.p2': {
    en: 'Behind it sits a real eval stack: offline golden tests for the engine plus live end-to-end evals against the real model, with hard safety gates (injury, illness, taper, volume ramp) and scored quality graders. Every production round is audited and replayable as a regression fixture.',
    es: 'Detrás hay un stack de evaluación real: tests golden offline para el motor más evals end-to-end en vivo contra el modelo real, con controles de seguridad estrictos (lesión, enfermedad, descarga, aumento de volumen) y evaluadores de calidad puntuados. Cada ronda en producción se audita y puede reproducirse como fixture de regresión.',
  },
  'work.p3': {
    en: 'Full product ownership: a React/TypeScript PWA plus Capacitor iOS/Android shells with native background GPS, serverless AWS deploy, Supabase with row-level security, and PostHog analytics.',
    es: 'Propiedad total del producto: una PWA en React/TypeScript más shells de Capacitor para iOS/Android con GPS nativo en segundo plano, despliegue serverless en AWS, Supabase con seguridad a nivel de fila y analítica con PostHog.',
  },
  'work.caseStudy': { en: 'Read the case study', es: 'Leer el caso de estudio' },
  'work.openApp': { en: 'Open the app', es: 'Abrir la app' },
  'work.viewCode': { en: 'View the code', es: 'Ver el código' },

  'exp.title': { en: 'Experience', es: 'Experiencia' },
  'exp.subtitle': {
    en: '11+ years across engineering leadership and hands-on IC work.',
    es: 'Más de 11 años entre liderazgo de ingeniería y trabajo técnico hands-on.',
  },

  'ai.eyebrow': { en: 'How I work', es: 'Cómo trabajo' },
  'ai.title': { en: 'Building AI you can trust', es: 'Construir IA en la que confiar' },
  'ai.p1': {
    en: 'I lead AI adoption at Ecologi as the org’s AI evangelist: I brought AI-assisted development into everyday coding, code review and testing, ran hands-on upskilling for every engineer, and turned it into a measurable 2–3× improvement in delivery speed with a leaner team.',
    es: 'Lidero la adopción de IA en Ecologi como evangelista de IA de la organización: llevé el desarrollo asistido por IA al día a día de la programación, la revisión de código y el testing, formé personalmente a cada ingeniero y lo convertí en una mejora medible de 2–3× en la velocidad de entrega con un equipo más reducido.',
  },
  'ai.p2': {
    en: 'But adoption is the easy half. The harder, more interesting problem is making an LLM safe to trust with real user decisions. That’s what Running Coach is really about: bounded tools, a validator as the trust boundary, and a safety-gated eval harness that treats every production interaction as a testable, replayable artifact. AI that ships is AI you can show is behaving.',
    es: 'Pero la adopción es la mitad fácil. El problema más difícil e interesante es hacer que un LLM sea seguro para confiarle decisiones reales de usuarios. De eso trata realmente Running Coach: herramientas acotadas, un validador como frontera de confianza y un harness de evaluación con controles de seguridad que trata cada interacción en producción como un artefacto testeable y reproducible. La IA que llega a producción es la IA que puedes demostrar que se comporta.',
  },

  'earlier.title': { en: 'Earlier work', es: 'Trabajo anterior' },
  'earlier.subtitle': {
    en: 'A founder chapter and a decade of shipping before it.',
    es: 'Una etapa como fundador y una década programando antes.',
  },

  'about.title': { en: 'About', es: 'Sobre mí' },
  'about.p1': {
    en: 'I’m a French engineering manager based in San Sebastián, working in English, Spanish and French. I care about building software that earns trust — technically solid, well-tested, and honest about what it does.',
    es: 'Soy un engineering manager francés afincado en San Sebastián, que trabaja en inglés, español y francés. Me importa construir software que se gane la confianza: técnicamente sólido, bien testeado y honesto sobre lo que hace.',
  },
  'about.p2': {
    en: 'Running Coach started as a personal itch — I run, and I wanted a coach I could actually trust. It became the app I use myself, and a good demonstration of how I think agentic AI should be built.',
    es: 'Running Coach empezó como una necesidad personal: corro y quería un entrenador en el que pudiera confiar de verdad. Se convirtió en la app que yo mismo uso y en una buena demostración de cómo creo que debe construirse la IA agéntica.',
  },

  'contact.title': { en: 'Let’s talk', es: 'Hablemos' },
  'contact.lede': {
    en: 'Open to conversations about engineering leadership and applied AI. The fastest way to reach me is email.',
    es: 'Abierto a conversaciones sobre liderazgo de ingeniería e IA aplicada. La forma más rápida de contactarme es por email.',
  },
  'contact.email': { en: 'Email me', es: 'Escríbeme' },

  'footer.built': {
    en: 'Built with React, TypeScript and Tailwind.',
    es: 'Construido con React, TypeScript y Tailwind.',
  },
  'footer.updated': { en: 'Last updated', es: 'Última actualización' },
} as const satisfies Record<string, Record<Lang, string>>

export type StringKey = keyof typeof STRINGS
