import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { Lang, L10n } from '../content/types'
import { STRINGS, type StringKey } from './strings'

interface LangCtx {
  lang: Lang
  /** Translate a known UI string key. */
  t: (key: StringKey) => string
  /** Resolve an inline L10n value from the content data. */
  tr: (value: L10n) => string
}

const Ctx = createContext<LangCtx | null>(null)

/** Single-language (English) for now. The L10n plumbing is kept so Spanish/French
 *  can be switched back on later without touching every component. */
export function LangProvider({ children }: { children: ReactNode }) {
  const value = useMemo<LangCtx>(
    () => ({
      lang: 'en',
      t: (key) => STRINGS[key].en,
      tr: (v) => v.en,
    }),
    [],
  )

  return <Ctx value={value}>{children}</Ctx>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
