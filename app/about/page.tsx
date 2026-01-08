// app/about/page.tsx
import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "YOY.Group builds operating systems for modern commerce — where brand, execution, and proof converge.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          YOY.Group builds operating systems for modern commerce.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          We help brands sell, ship, and grow with discipline — clear cadences,
          clean handoffs, and decisions that can be audited.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      {/* Editorial body */}
      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <p>
          YOY.Group is a studio for operators. We work where brand meets
          execution: the calendars, systems, numbers, and decision loops that
          quietly determine whether a business compounds or stalls.
        </p>

        <p>
          The public surface stays calm. The system underneath gets sharper —
          week by week. Less chaos. More shipping.
        </p>

        <div className="space-y-4">
          <p className="font-medium text-foreground">What we do</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Design operating models for retail and creator-led businesses
            </li>
            <li>
              Build execution rails: workflows, data contracts, and automation
              guardrails
            </li>
            <li>
              Translate strategy into a weekly cadence that actually ships
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-medium text-foreground">How we work</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Timeboxed engagements with a small number of high-leverage moves</li>
            <li>Decisions documented, outcomes measured, claims backed by proof</li>
            <li>Systems designed to work for humans <span className="italic">and</span> agents</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-medium text-foreground">Not a fit</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Deck-only strategy with no implementation</li>
            <li>“Autonomous AI” theater without governance</li>
            <li>Complexity used as a proxy for status</li>
          </ul>
        </div>

        <p>
          Services are delivered by <span className="font-medium text-foreground">YOY.AI Studio</span> — a
          division of <span className="font-medium text-foreground">YOY.Group</span>.
        </p>

        <p className="text-xs">
          Proof beats promises. If it can’t be logged, it doesn’t count.
        </p>
      </div>

      <div className="my-16 h-px bg-border" />

      {/* Footer */}
      <footer className="flex items-center justify-between text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          ← Home
        </Link>

        <Link href="/proof" className="hover:text-foreground transition-colors">
          Proof →
        </Link>
      </footer>
    </main>
  );
}