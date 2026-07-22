import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import { PulseMark } from './PulseMark'
import { LINKS } from '../content/data'

const NAV: {
  key: 'nav.leadership' | 'nav.work' | 'nav.experience' | 'nav.ai' | 'nav.about' | 'nav.contact'
  href: string
}[] = [
  { key: 'nav.leadership', href: '#leadership' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.work', href: '#work' },
  { key: 'nav.ai', href: '#ai' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
]

export function Header() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on resize up to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-line bg-cream/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 text-accent"
          aria-label="Théo Camboulive — home"
        >
          <PulseMark className="h-6 w-auto" />
          <span className="text-sm font-semibold tracking-tight text-ink">Théo Camboulive</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a key={n.key} href={n.href} className="text-sm text-muted transition-colors hover:text-ink">
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.cv}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-deep sm:inline-block"
          >
            {t('nav.cv')}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-panel md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-cream/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <li key={n.key}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/60 py-3 text-[15px] text-ink transition-colors hover:text-accent"
                >
                  {t(n.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href={LINKS.cv}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 inline-block rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
              >
                {t('nav.cv')}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
