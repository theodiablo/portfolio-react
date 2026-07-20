/** Heartbeat / pulse line rising into a finish dot — the shared brand mark,
 *  echoing the Running Coach "Pulse Stride" logo. Uses currentColor. */
export function PulseMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 120" className={className} role="img" aria-label="Théo Camboulive">
      <polyline
        points="6,72 46,72 66,36 92,96 116,20 138,72 176,72"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="196" cy="72" r="12" fill="currentColor" />
    </svg>
  )
}
