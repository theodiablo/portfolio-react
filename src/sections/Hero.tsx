import { Github, Linkedin, MapPin, FileText } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { LINKS, PROFILE_STACK } from '../content/data'

export function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-12 sm:pt-32">
      {/* faint sage wash at the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sagewash/60 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal is-visible">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
            {t('hero.lede')}
          </p>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4" aria-hidden />
            {t('hero.location')}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t('hero.ctaWork')}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
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
              <IconLink href={LINKS.cv} label={t('nav.cv')}>
                <FileText className="h-5 w-5" />
              </IconLink>
            </div>
          </div>
        </div>

        <div className="reveal is-visible flex justify-center lg:justify-end">
          <ProfileCard />
        </div>
      </div>
    </section>
  )
}

/** CV-style intro: portrait, name, role, languages and a compact skill set. */
function ProfileCard() {
  const { t } = useLang()
  return (
    <div className="w-full max-w-sm rounded-2xl border border-line bg-paper p-6 shadow-sm shadow-black/[0.03]">
      <div className="flex items-center gap-4">
        <img
          src="/portrait.jpg"
          alt="Théo Camboulive"
          width={80}
          height={80}
          className="h-20 w-20 flex-none rounded-full object-cover ring-2 ring-accent/25"
        />
        <div>
          <p className="text-lg font-bold leading-tight text-ink">Théo Camboulive</p>
          <p className="text-sm text-muted">{t('profile.role')}</p>
          <p className="mt-1 text-[13px] text-muted">{t('profile.langs')}</p>
        </div>
      </div>

      <div className="mt-5 border-t border-line pt-4">
        <p className="label text-[0.65rem] text-muted">{t('profile.stackLabel')}</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {PROFILE_STACK.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-accent/30 bg-sagewash/60 px-2.5 py-0.5 text-[11px] font-medium text-accent-deep"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="rounded-full p-2 text-muted transition-colors hover:bg-panel hover:text-accent"
    >
      {children}
    </a>
  )
}
