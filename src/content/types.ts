export type Lang = 'en' | 'es'

/** A short piece of copy that exists in both languages. */
export type L10n = Record<Lang, string>

export interface Stat {
  value: string
  label: L10n
}

export interface Role {
  title: L10n
  period: string
  bullets: L10n[]
}

export interface Job {
  company: string
  logo?: string
  location: L10n
  period: string
  /** One company can hold several roles (e.g. promotions at Ecologi). */
  roles: Role[]
}

export interface EarlierWork {
  name: string
  logo?: string
  period: string
  blurb: L10n
  tags: string[]
  href?: string
}
