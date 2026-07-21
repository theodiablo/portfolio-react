import { useLang } from '../i18n/LangContext'
import { LEADERSHIP } from '../content/data'
import { Reveal } from '../components/Reveal'

export function Leadership() {
  const { t, tr } = useLang()
  return (
    <section id="leadership" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t('lead.title')}</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">{t('lead.subtitle')}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {LEADERSHIP.map((c, i) => (
            <Reveal key={tr(c.label)} as="article" delayMs={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-paper p-6">
                <p className="label text-[0.65rem] text-accent">{tr(c.label)}</p>
                <p className="mt-2 text-lg font-bold leading-snug text-ink">{tr(c.lead)}</p>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{tr(c.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
