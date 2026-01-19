// app/about/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "YOY.Group is a London-based operator studio that designs and installs operating systems for commerce: systems, cadence, proof.",
  path: "/about",
  type: "article",
  imagePath: "/og/og.png",
});

const WHAT_WE_DO = [
  "Design operating models for retail brands, commerce teams, and creator-led businesses",
  "Build workflow + data rails: integrations, data contracts, event tracking, and automation guardrails",
  "Translate strategy into an operating cadence that actually ships (weekly decisions, owners, deliverables)",
] as const;

const HOW_WE_WORK = [
  "Timeboxed engagements focused on a small number of high-leverage moves",
  "Decisions documented, outcomes measured, claims backed by proof",
  "Systems designed to work for humans and agents (bounded, governed, auditable)",
] as const;

const WHO_ITS_FOR = [
  "Founders scaling commerce without losing control (delivery, data, decisions)",
  "COOs / Heads of Ops / Heads of Commerce who want less noise and more throughput",
  "Systems leads owning integrations, automation, and operational reliability",
] as const;

const PROOF_ARTIFACTS = [
  "A system map (what exists, what breaks, what matters)",
  "A cadence spec (meetings, owners, decisions, deliverables)",
  "A workflow spec (events, data contracts, failure paths)",
  "A bounded automation prototype (testable, reversible, with guardrails)",
  "A Proof Log entry (what changed, why, and where the evidence lives)",
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
          Operating systems for modern commerce: systems, cadence, proof.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          YOY.Group is a London-based operator studio that designs and installs
          operating systems for commerce — so brands sell, ship, and grow with
          discipline you can point to.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      {/* Editorial body */}
      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <p>
          We work where brand meets operations: the workflows, decision loops,
          controls, and data flows that quietly determine whether a business
          compounds or stalls.
        </p>

        <p>
          Default mode: build → ship → log proof. The surface stays calm. The
          system underneath gets sharper — week by week.
        </p>

        <div className="space-y-4">
          <p className="font-medium text-foreground">Who it’s for</p>
          <ul className="list-disc pl-5 space-y-2">
            {WHO_ITS_FOR.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

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
          <p className="font-medium text-foreground">What “proof” looks like</p>
          <ul className="list-disc pl-5 space-y-2">
            {PROOF_ARTIFACTS.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground">
            Proof beats promises. If it can’t be logged, it doesn’t count.
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

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Where to start: read the{" "}
            <Link href="/pillars" className="underline underline-offset-4">
              Pillars
            </Link>{" "}
            for the operating model, then follow the{" "}
            <Link href="/proof" className="underline underline-offset-4">
              Proof
            </Link>{" "}
            and{" "}
            <Link href="/log" className="underline underline-offset-4">
              Log
            </Link>{" "}
            for evidence and solved states.
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          Services are delivered via{" "}
          <span className="font-medium text-foreground">YOY.AI Studio</span> —
          the consulting practice of{" "}
          <span className="font-medium text-foreground">YOY.Group</span>.
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
