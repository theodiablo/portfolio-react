import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { LINKS } from '../content/data'
import { CoachChatMock } from '../components/CoachChatMock'

export function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal is-visible">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-medium text-accent-soft">
            {t('hero.eyebrow')}
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-50 sm:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
            {t('hero.lede')}
          </p>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="h-4 w-4" aria-hidden />
            {t('hero.location')}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {t('hero.ctaWork')}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500"
            >
              {t('hero.ctaContact')}
            </a>

            <div className="ml-1 flex items-center gap-1">
              <IconLink href={LINKS.github} label="GitHub">
                <Github className="h-5 w-5" />
              </IconLink>
              <IconLink href={LINKS.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </IconLink>
              <IconLink href={`mailto:${LINKS.email}`} label="Email">
                <Mail className="h-5 w-5" />
              </IconLink>
              <IconLink href={LINKS.cv} label={t('nav.cv')}>
                <FileText className="h-5 w-5" />
              </IconLink>
            </div>
          </div>
        </div>

        <div className="reveal is-visible flex justify-center lg:justify-end">
          <CoachChatMock />
        </div>
      </div>
    </section>
  )
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="rounded-full p-2 text-slate-400 transition-colors hover:bg-surface hover:text-slate-100"
    >
      {children}
    </a>
  )
}
