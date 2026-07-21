import { Github, Linkedin, Mail } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { LINKS } from '../content/data'
import { Reveal } from '../components/Reveal'
import { PulseMark } from '../components/PulseMark'

const BUILD_DATE = new Date().toISOString().slice(0, 10)

export function AboutContact() {
  const { t } = useLang()
  return (
    <>
      <section id="about" className="scroll-mt-20 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t('about.title')}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-line bg-panel py-14 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <PulseMark className="mx-auto mb-6 h-8 w-auto text-accent" />
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t('contact.title')}</h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-soft">{t('contact.lede')}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${LINKS.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> {t('contact.email')}
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-line-strong p-3 text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-line-strong p-3 text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Théo Camboulive · {t('footer.built')}</p>
          <p>
            {t('footer.updated')} {BUILD_DATE}
          </p>
        </div>
      </footer>
    </>
  )
}
