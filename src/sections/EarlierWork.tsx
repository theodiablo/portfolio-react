import { useLang } from '../i18n/LangContext'
import { EARLIER_WORK } from '../content/data'
import { Reveal } from '../components/Reveal'

export function EarlierWork() {
  const { t, tr } = useLang()
  return (
    <section className="border-t border-line bg-panel py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t('earlier.title')}</h2>
          <p className="mt-3 text-ink-soft">{t('earlier.subtitle')}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {EARLIER_WORK.map((w, i) => (
            <Reveal key={w.name} as="article" delayMs={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-accent/40">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-bold text-ink">{w.name}</h3>
                  <span className="font-mono text-xs text-muted">{w.period}</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{tr(w.blurb)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line-strong px-2.5 py-0.5 text-[11px] font-medium text-muted"
                    >
                      {tag}
                    </span>
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
