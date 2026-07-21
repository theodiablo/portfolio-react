import { useLang } from '../i18n/LangContext'

/** A hand-built propose-and-confirm chat exchange — the honest AI visual:
 *  the coach only proposes, "Apply" belongs to the user. */
export function CoachChatMock() {
  const { lang } = useLang()

  const copy = {
    en: {
      user: 'My knee’s been sore since Tuesday’s run.',
      coachIntro: 'Sorry to hear that. Let’s protect the knee — here’s what I’d change this week:',
      change1: 'Swap Thu intervals → easy 30 min',
      change2: 'Cut Sun long run 18 km → 12 km',
      note: 'No new load added while you’re in pain.',
      apply: 'Apply changes',
      dismiss: 'Not now',
      badge: 'Proposed · you decide',
    },
    es: {
      user: 'Me duele la rodilla desde la salida del martes.',
      coachIntro: 'Lo siento. Vamos a proteger la rodilla, esto es lo que cambiaría esta semana:',
      change1: 'Cambiar series del jue → 30 min suaves',
      change2: 'Reducir tirada larga dom 18 km → 12 km',
      note: 'No añado carga nueva mientras te duela.',
      apply: 'Aplicar cambios',
      dismiss: 'Ahora no',
      badge: 'Propuesto · tú decides',
    },
  }[lang]

  return (
    <div className="w-full max-w-sm rounded-[28px] border border-line bg-paper p-3 shadow-lg shadow-black/[0.04]">
      {/* phone header */}
      <div className="mb-3 flex items-center justify-between px-2 pt-1">
        <span className="text-xs font-semibold text-ink">AI Coach</span>
        <span className="rounded-full bg-sagewash px-2 py-0.5 text-[10px] font-medium text-accent-deep">
          {copy.badge}
        </span>
      </div>

      <div className="space-y-2.5">
        {/* user message */}
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2 text-sm text-white">
          {copy.user}
        </div>

        {/* coach message */}
        <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-panel px-3.5 py-2.5 text-sm text-ink">
          <p className="mb-2">{copy.coachIntro}</p>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2 rounded-lg bg-paper px-2.5 py-1.5 text-[13px]">
              <span className="mt-0.5 text-accent">→</span>
              <span>{copy.change1}</span>
            </li>
            <li className="flex items-start gap-2 rounded-lg bg-paper px-2.5 py-1.5 text-[13px]">
              <span className="mt-0.5 text-accent">→</span>
              <span>{copy.change2}</span>
            </li>
          </ul>
          <p className="mt-2 text-[11px] text-muted">{copy.note}</p>
        </div>

        {/* confirm controls — the Apply is the user's */}
        <div className="flex gap-2 pt-0.5">
          <span className="flex-1 rounded-xl bg-accent px-3 py-2 text-center text-[13px] font-semibold text-white">
            {copy.apply}
          </span>
          <span className="rounded-xl border border-line-strong px-3 py-2 text-center text-[13px] text-muted">
            {copy.dismiss}
          </span>
        </div>
      </div>
    </div>
  )
}
