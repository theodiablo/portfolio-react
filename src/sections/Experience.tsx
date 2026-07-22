import { useLang } from '../i18n/LangContext'
import { EXPERIENCE } from '../content/data'
import { Reveal } from '../components/Reveal'

export function Experience() {
  const { t, tr } = useLang()
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line bg-panel py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t('exp.title')}</h2>
          <p className="mt-3 text-ink-soft">{t('exp.subtitle')}</p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {EXPERIENCE.map((job) => (
            <Reveal key={job.company} as="article">
              <div className="grid gap-6 sm:grid-cols-[200px_1fr]">
                <div className="sm:sticky sm:top-24 sm:self-start">
                  <h3 className="text-lg font-bold text-ink">{job.company}</h3>
                  <p className="text-[13px] text-muted">{tr(job.location)}</p>
                  <p className="label mt-1 text-[0.65rem] text-accent">{job.period}</p>
                </div>

                <div className="space-y-6 border-l border-line-strong pl-6">
                  {job.roles.map((role) => (
                    <div key={tr(role.title) + role.period} className="relative">
                      <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-panel" />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h4 className="text-[15px] font-semibold text-ink">{tr(role.title)}</h4>
                        <span className="font-mono text-xs text-muted">{role.period}</span>
                      </div>
                      <ul className="mt-2 space-y-2">
                        {role.bullets.map((b, i) => (
                          <li key={i} className="text-[14px] leading-relaxed text-ink-soft">
                            {tr(b)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
