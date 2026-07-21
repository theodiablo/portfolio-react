import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { PulseMark } from './PulseMark'
import { LINKS } from '../content/data'

const NAV: {
  key: 'nav.leadership' | 'nav.work' | 'nav.experience' | 'nav.ai' | 'nav.about' | 'nav.contact'
  href: string
}[] = [
  { key: 'nav.leadership', href: '#leadership' },
  { key: 'nav.work', href: '#work' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.ai', href: '#ai' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
]

export function Header() {
  const { t } = useLang()
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
        scrolled ? 'border-b border-line bg-cream/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-2.5 text-accent" aria-label="Théo Camboulive — home">
          <PulseMark className="h-6 w-auto" />
          <span className="text-sm font-semibold tracking-tight text-ink">Théo Camboulive</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.key}
              href={n.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            {t('nav.cv')}
          </a>
        </div>
      </div>
    </header>
  )
}
