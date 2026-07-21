import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { PulseMark } from '../components/PulseMark'
import { LINKS, RUNNING_STACK } from '../content/data'

/** Standalone Running Coach case study (English-only, static second entry). */
export function RunningCoachPage() {
  return (
    <div className="min-h-screen">
      <TopBar />

      <main className="mx-auto max-w-3xl px-5">
        {/* Hero */}
        <header className="pt-28 pb-12 sm:pt-32">
          <p className="label text-[0.7rem] text-accent">Case study · side project</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Running Coach</h1>
          <p className="mt-4 text-lg text-ink-soft">
            A free running app with an AI coach that adapts your training plan in production.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            I designed, built and run the whole thing: a React/TypeScript PWA, native iOS and Android
            shells, a Supabase edge agent and an eval harness. The code is open source and the app is
            free — if it helps your training, you can{' '}
            <a
              href="https://buymeacoffee.com/theo.camboulive"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-deep"
            >
              buy me a coffee
            </a>
            . The interesting part isn’t generating a plan, it’s making an LLM safe to trust with real
            training decisions. Here’s how that works.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={LINKS.runningApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Open the app <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={LINKS.runningRepo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" /> View the code
            </a>
          </div>
        </header>

        {/* The problem */}
        <Section eyebrow="The problem" title="A coach has to be able to say no">
          <p>
            An LLM that just rewrites your plan is easy to demo and dangerous to ship. A real coach
            refuses things: no adding intensity on a sore knee, no “making up” a missed week, no two
            hard sessions back to back, no intervals during your taper. The hard problem isn’t
            authoring a plan, it’s guaranteeing the model can never make one worse.
          </p>
        </Section>

        {/* What it is */}
        <Section eyebrow="What it is" title="The app I actually use">
          <p>
            Adaptive training plans, GPS-tracked runs, races, progress and badges. The plan is
            generated deterministically; the AI coach only <em>edits</em> it, through a
            propose-and-confirm loop. It proposes a change, you see exactly what would change, and
            nothing touches your plan until you tap Apply.
          </p>
          <ShotRow>
            <PhoneShot src="/running-coach/01-home.png" alt="Running Coach home dashboard" />
            <PhoneShot src="/running-coach/02-plan.png" alt="Training plan view" />
          </ShotRow>
        </Section>

        {/* The agent */}
        <Section eyebrow="The agent" title="An editor, never an author">
          <p>
            A deterministic generator stays the author of plan structure. The model acts only through
            a bounded set of typed tools — swap a session, add one, cancel one — with no free-text
            plan generation. The one load-increasing tool is fenced three ways: it refuses dates in
            the final two weeks and caps distance at your longest existing session, the validator
            gates the resulting week, and the prompt licenses it only for genuine extra availability,
            never to make up missed volume.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <StepCard n={1} title="Propose" body="The model suggests plan edits through bounded, typed tools only." />
            <StepCard n={2} title="Validate" body="A shared validator is the trust boundary. It can reject a change, never worsen the plan." />
            <StepCard n={3} title="Confirm" body="You apply the change under your own auth. The model never writes your plan directly." />
            <StepCard n={4} title="Evaluate" body="Every round is logged and replayable — the audit trail is also the eval dataset." />
          </div>
          <ShotRow>
            <PhoneShot src="/running-coach/03-coach-chat.png" alt="AI coach chat — propose and confirm" />
          </ShotRow>
        </Section>

        {/* Trust boundary */}
        <Section eyebrow="The trust boundary" title="Nothing that matters runs in the browser">
          <p>
            The API key, the tool implementations, the validator, the rate limit and a tamper-proof
            audit log all live in a Supabase edge function. The browser sends a message and renders a
            proposal — it never sees a key and can’t bypass a rule. Plan writes stay under the user’s
            own row-level-security token; <code className="rounded bg-panel px-1 py-0.5 text-[13px]">confirm</code> does
            no model call at all — it re-validates the stored proposal and the client persists it.
          </p>
          <ul className="mt-5 space-y-2.5">
            <Invariant>The model acts only through bounded typed tools — no free-text plan generation.</Invariant>
            <Invariant>One validator, two callers: the agent path and the deterministic generator share the exact same rules.</Invariant>
            <Invariant>An invalid plan is never surfaced. An internal validate-and-retry loop ends in a distinct “no safe adjustment” outcome, never a broken plan or a 500.</Invariant>
            <Invariant>Context gates reject unsafe intent before the structural validator even runs — pain, injury, illness or a missed-week make-up block the load-increasing tools.</Invariant>
            <Invariant>The audit log is service-role only. Users can read their own rounds, never write them. Every round is logged, including failures.</Invariant>
          </ul>
        </Section>

        {/* Eval stack */}
        <Section eyebrow="The eval stack" title="AI that ships is AI you can show is behaving">
          <p>
            Every production round records what the model saw, what it did and how it fared — and that
            log is the eval dataset. On top of it sit two harnesses over the same proposal loop:
          </p>
          <ul className="mt-5 space-y-2.5">
            <Invariant>
              <strong className="font-semibold text-ink">Golden tests</strong> run offline in CI with
              zero API calls, asserting properties rather than exact output: knee pain never adds
              intensity, a missed week never makes up volume, the validator-failure path ends in a
              safe no-op.
            </Invariant>
            <Invariant>
              <strong className="font-semibold text-ink">Live evals</strong> replay ten realistic
              scenarios against the real model, graded in two tiers — safety invariants that fail the
              run, and quality metrics that are scored but non-blocking. I run them before touching the
              prompt, the tools, the validator or the model.
            </Invariant>
            <Invariant>
              <strong className="font-semibold text-ink">Headline metrics</strong> — first-proposal
              acceptance rate, rounds-to-accept, and the abandoned / no-safe-adjustment split — come
              straight from the same logged rounds.
            </Invariant>
            <Invariant>
              A <strong className="font-semibold text-ink">“this isn’t right”</strong> control flags the
              exact round; when it’s the latest open answer, the correction re-enters the chat as a
              critique so the coach can revise in place.
            </Invariant>
          </ul>
        </Section>

        {/* Architecture */}
        <Section eyebrow="Architecture" title="At a glance">
          <div className="rounded-2xl border border-line bg-panel p-6">
            <ol className="space-y-4">
              <ArchRow label="Client" body="React 19 / TypeScript PWA, plus Capacitor iOS & Android shells with native background GPS." />
              <ArchRow label="Edge agent" body="Supabase edge function — validator, typed tools, rate limit and audit log. Holds the Anthropic key." />
              <ArchRow label="Model" body="Claude (Sonnet) via the Anthropic API, tool-use only. Upgrading the model is one secret change." />
              <ArchRow label="Data" body="Supabase Postgres: user state under row-level security, agent audit tables service-role only." />
              <ArchRow label="Ops" body="Serverless AWS static hosting and CloudFront; PostHog for product analytics." />
            </ol>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {RUNNING_STACK.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-accent/30 bg-sagewash/60 px-3 py-1 text-xs font-medium text-accent-deep"
              >
                {chip}
              </span>
            ))}
          </div>
        </Section>
      </main>

      <footer className="mt-8 border-t border-line py-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 text-xs text-muted">
          <a href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
          </a>
          <span>© {new Date().getFullYear()} Théo Camboulive</span>
        </div>
      </footer>
    </div>
  )
}

function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
        <a href="/" className="inline-flex items-center gap-2.5 text-accent" aria-label="Théo Camboulive — home">
          <PulseMark className="h-6 w-auto" />
          <span className="text-sm font-semibold tracking-tight text-ink">Théo Camboulive</span>
        </a>
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </a>
      </div>
    </header>
  )
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-12 sm:py-16">
      <p className="label text-[0.7rem] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-soft">{children}</div>
    </section>
  )
}

function StepCard({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sagewash text-xs font-bold text-accent-deep">
          {n}
        </span>
        <span className="text-sm font-semibold text-ink">{title}</span>
      </div>
      <p className="mt-2.5 text-[13px] leading-snug text-muted">{body}</p>
    </div>
  )
}

function Invariant({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
      <span>{children}</span>
    </li>
  )
}

function ArchRow({ label, body }: { label: string; body: string }) {
  return (
    <li className="flex flex-col gap-1 sm:flex-row sm:gap-4">
      <span className="label w-28 flex-none text-[0.65rem] text-accent sm:pt-0.5">{label}</span>
      <span className="text-[14px] leading-relaxed text-ink-soft">{body}</span>
    </li>
  )
}

function ShotRow({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 flex flex-wrap justify-center gap-5">{children}</div>
}

function PhoneShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[220px] flex-none rounded-[2rem] border border-line-strong bg-[#0b1220] p-2 shadow-lg shadow-black/[0.06]">
      <img src={src} alt={alt} loading="lazy" className="w-full rounded-[1.5rem]" />
    </div>
  )
}
