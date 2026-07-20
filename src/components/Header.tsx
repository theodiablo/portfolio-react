import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { PulseMark } from './PulseMark'
import { LINKS } from '../content/data'

const NAV: { key: 'nav.work' | 'nav.experience' | 'nav.ai' | 'nav.about' | 'nav.contact'; href: string }[] = [
  { key: 'nav.work', href: '#work' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.ai', href: '#ai' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
]

export function Header() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-2.5 text-accent" aria-label="Théo Camboulive — home">
          <PulseMark className="h-6 w-auto" />
          <span className="text-sm font-semibold tracking-tight text-slate-100">Théo Camboulive</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.key}
              href={n.href}
              className="text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex overflow-hidden rounded-full border border-line text-xs"
            role="group"
            aria-label="Language"
          >
            {(['en', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-2.5 py-1 font-medium uppercase transition-colors ${
                  lang === l ? 'bg-accent text-ink' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={LINKS.cv}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:bg-white sm:inline-block"
          >
            {t('nav.cv')}
          </a>
        </div>
      </div>
    </header>
  )
}
