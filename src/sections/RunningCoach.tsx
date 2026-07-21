import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { LINKS, RUNNING_STACK } from '../content/data'
import { Reveal } from '../components/Reveal'

export function RunningCoach() {
  const { t } = useLang()
  return (
    <section id="work" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <p className="label text-[0.7rem] text-accent">{t('work.eyebrow')}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t('work.title')}</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">{t('work.tagline')}</p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
            <p>{t('work.p1')}</p>
            <p>{t('work.p2')}</p>
            <p>{t('work.p3')}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {RUNNING_STACK.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line-strong bg-paper px-3 py-1 text-xs font-medium text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="/running-coach.html"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {t('work.caseStudy')} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={LINKS.runningApp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {t('work.openApp')} <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={LINKS.runningRepo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" /> {t('work.viewCode')}
              </a>
            </div>
          </Reveal>

          {/* architecture-at-a-glance card */}
          <Reveal delayMs={120}>
            <div className="rounded-2xl border border-line bg-panel p-6">
              <div className="label text-[0.65rem] text-muted">How the agent stays safe</div>
              <ol className="mt-4 space-y-3.5">
                {[
                  ['Propose', 'The LLM suggests plan edits through bounded, typed tools only.'],
                  ['Validate', 'A shared validator is the trust boundary — it can reject, never worsen.'],
                  ['Confirm', 'You apply the change. The model never writes your plan directly.'],
                  ['Evaluate', 'Safety gates + golden tests + live evals; every round is replayable.'],
                ].map(([step, desc], i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sagewash text-xs font-bold text-accent-deep">
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{step}</div>
                      <div className="text-[13px] leading-snug text-muted">{desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
