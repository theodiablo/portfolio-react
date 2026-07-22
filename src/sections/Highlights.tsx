import { useLang } from '../i18n/LangContext'
import { HIGHLIGHTS } from '../content/data'
import { Reveal } from '../components/Reveal'

export function Highlights() {
  const { tr } = useLang()
  return (
    <section className="border-y border-line/60 bg-ink-2/40">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden px-5 py-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((s, i) => (
          <Reveal key={i} as="div" delayMs={i * 70} className="px-3 py-7 text-center sm:px-5">
            <div className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">{s.value}</div>
            <div className="mx-auto mt-2 max-w-[15ch] text-xs leading-snug text-slate-400 sm:text-[13px]">
              {tr(s.label)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
