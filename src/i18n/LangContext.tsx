import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Lang, L10n } from '../content/types'
import { STRINGS, type StringKey } from './strings'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  /** Translate a known UI string key. */
  t: (key: StringKey) => string
  /** Resolve an inline L10n value from the content data. */
  tr: (value: L10n) => string
}

const Ctx = createContext<LangCtx | null>(null)

function initialLang(): Lang {
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
    return 'es'
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    if (typeof document !== 'undefined') document.documentElement.lang = l
  }, [])

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang,
      t: (key) => STRINGS[key][lang],
      tr: (v) => v[lang],
    }),
    [lang, setLang],
  )

  return <Ctx value={value}>{children}</Ctx>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
