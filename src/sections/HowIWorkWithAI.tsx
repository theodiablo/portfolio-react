import { useLang } from '../i18n/LangContext'
import { Reveal } from '../components/Reveal'

export function HowIWorkWithAI() {
  const { t } = useLang()
  return (
    <section id="ai" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-soft">{t('ai.eyebrow')}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{t('ai.title')}</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-400">
            <p>{t('ai.p1')}</p>
            <p>{t('ai.p2')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
