import { useLang } from '../i18n/LangContext'
import { Reveal } from '../components/Reveal'
import { CoachChatMock } from '../components/CoachChatMock'

export function HowIWorkWithAI() {
  const { t } = useLang()
  return (
    <section id="ai" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="label text-[0.7rem] text-accent">{t('ai.eyebrow')}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{t('ai.title')}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              <p>{t('ai.p1')}</p>
              <p>{t('ai.p2')}</p>
            </div>
          </Reveal>

          <Reveal delayMs={120} className="flex justify-center lg:justify-end">
            <CoachChatMock />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
