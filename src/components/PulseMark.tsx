/** Line-art leaf — the brand mark, nodding to green tech (Ecologi, B Corp).
 *  Uses currentColor so it inherits the sage accent wherever it's placed. */
export function PulseMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Théo Camboulive">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(-12 50 50)"
      >
        <path d="M50 12 C 70 30, 74 56, 50 80 C 26 56, 30 30, 50 12 Z" />
        <path d="M50 80 L50 94" />
        <path d="M50 78 C 49 55, 49 32, 50 15" />
      </g>
    </svg>
  )
}
