// app/about/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "YOY.Group builds operating systems for modern commerce — where brand, execution, and proof converge.",
  path: "/about",
  type: "article",
  imagePath: "/og/og.png",
});

const WHAT_WE_DO = [
  "Design operating models for retail, commerce teams and creator-led businesses",
  "Build execution rails: workflows, data contracts, and automation guardrails",
  "Translate strategy into a weekly cadence that actually ships",
] as const;

const HOW_WE_WORK = [
  "Timeboxed engagements with a small number of high-leverage moves",
  "Decisions documented, outcomes measured, claims backed by proof",
  "Systems designed to work for humans and agents (governed, auditable)",
] as const;

const NOT_A_FIT = [
  "Deck-only strategy with no implementation",
  "“Autonomous AI” theatre without governance",
  "Complexity used as a proxy for status",
] as const;

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <header className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          About
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          YOY.Group builds operating systems for modern commerce.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          We help brands sell, ship, and grow with discipline — cadence,
          controls, and proof you can point to.
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
            {WHAT_WE_DO.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-medium text-foreground">How we work</p>
          <ul className="list-disc pl-5 space-y-2">
            {HOW_WE_WORK.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground">
            Note: “agents” here means bounded automation under explicit
            governance — not black-box autonomy.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-medium text-foreground">Not a fit</p>
          <ul className="list-disc pl-5 space-y-2">
            {NOT_A_FIT.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <p>
          Services are delivered by{" "}
          <span className="font-medium text-foreground">YOY.AI Studio</span> — a
          division of{" "}
          <span className="font-medium text-foreground">YOY.Group</span>.
        </p>

        <p className="text-xs">
          Proof beats promises. If it can’t be logged, it doesn’t count.
        </p>
      </div>

      <div className="my-16 h-px bg-border" />

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Home
          </Link>

          <Link
            href="/services"
            className="hover:text-foreground transition-colors"
          >
            Services →
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/proof"
            className="hover:text-foreground transition-colors"
          >
            Proof →
          </Link>

          <Link
            href="/trust"
            className="hover:text-foreground transition-colors"
          >
            Trust →
          </Link>
        </div>
      </footer>
    </main>
  );
}
