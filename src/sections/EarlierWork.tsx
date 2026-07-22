import { useLang } from '../i18n/LangContext'
import { EARLIER_WORK } from '../content/data'
import { Reveal } from '../components/Reveal'

export function EarlierWork() {
  const { t, tr } = useLang()
  return (
    <section className="border-t border-line/60 bg-ink-2/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{t('earlier.title')}</h2>
          <p className="mt-3 text-slate-400">{t('earlier.subtitle')}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {EARLIER_WORK.map((w, i) => (
            <Reveal key={w.name} as="article" delayMs={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-6 transition-colors hover:border-slate-600">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-100">{w.name}</h3>
                  <span className="text-xs font-medium text-slate-500">{w.period}</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{tr(w.blurb)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-medium text-slate-400"
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
