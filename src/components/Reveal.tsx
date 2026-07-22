import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

/** Wraps children and plays the fade-up animation once they scroll into view. */
export function Reveal({
  children,
  className = '',
  as,
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  as?: ElementType
  delayMs?: number
}) {
  const Tag: ElementType = as ?? 'div'
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
