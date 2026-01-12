// app/trust/editorial/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Editorial",
  description: "Editorial standards and publishing principles for YOY.Group.",
  path: "/trust/editorial",
  type: "article",
  imagePath: "/og/og.png",
});

const PRINCIPLES = [
  {
    title: "Evidence over persuasion",
    desc: "If a claim matters, it must be traceable. If it cannot be traced publicly, we either remove it or label it as opinion.",
  },
  {
    title: "Clarity beats coverage",
    desc: "We publish fewer pages, kept readable over time. Density is allowed; ambiguity is not.",
  },
  {
    title: "Bounded writing",
    desc: "Each page has a scope. If scope expands, we version it or create a separate page.",
  },
  {
    title: "Corrections are normal",
    desc: "We correct quickly and visibly. Corrections are a trust signal, not a failure.",
  },
  {
    title: "No sensitive leakage",
    desc: "Operational competence can be shown without exposing secrets, customer data, or security details.",
  },
] as const;

const WHAT_WE_PUBLISH = [
  "Definitions and primitives (Glossary, Pillars)",
  "Proof entries (build logs, experiments, releases)",
  "Time-bound snapshots (Log)",
  "Policies and boundaries (Trust pages)",
] as const;

const WHAT_WE_DONT_PUBLISH = [
  "Marketing theatre disguised as research",
  "Private client details without explicit permission",
  "Step-by-step exploitation or sensitive security specifics",
  "Unbounded hot takes presented as fact",
] as const;

const EVIDENCE_TAGS = [
  { tag: "Proof", desc: "A claim is backed by an artifact we control and can reference." },
  { tag: "Log", desc: "A time-bounded snapshot of what changed during a period." },
  { tag: "Definition", desc: "A canonical term used to reduce ambiguity across pages." },
  { tag: "Opinion", desc: "Interpretation. Allowed, but explicitly labeled and kept bounded." },
] as const;

const CORRECTIONS = [
  "If a factual error is found, we correct it and note what changed.",
  "If a page becomes misleading, we either rewrite it, deprecate it, or remove it.",
  "If a claim cannot be defended without context, it does not belong on the Authority surface.",
] as const;

export default function TrustEditorialPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Trust / Editorial
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">Editorial</h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          This page defines the standards governing what we publish: clarity,
          evidence, and intent. Pages ship when they meet them.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted-foreground">
          <Link href="/trust" className="hover:text-foreground transition-colors">
            Trust hub →
          </Link>
          <span>·</span>
          <Link href="/proof" className="hover:text-foreground transition-colors">
            Proof →
          </Link>
          <span>·</span>
          <Link href="/log" className="hover:text-foreground transition-colors">
            Log →
          </Link>
        </div>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-6" aria-label="Principles">
        <h2 className="text-sm font-medium tracking-tight">Principles</h2>

        <ul className="space-y-4">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="rounded-lg border border-border/60 p-5">
              <p className="text-sm font-medium">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-6" aria-label="Publishing scope">
        <h2 className="text-sm font-medium tracking-tight">What we publish</h2>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {WHAT_WE_PUBLISH.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>

        <div className="pt-2">
          <h3 className="text-sm font-medium tracking-tight">What we don’t publish</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {WHAT_WE_DONT_PUBLISH.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-4" aria-label="Evidence tags">
        <h2 className="text-sm font-medium tracking-tight">Evidence tags</h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          When a page makes claims, it should route the reader to the right type
          of support.
        </p>

        <ul className="space-y-3">
          {EVIDENCE_TAGS.map((e) => (
            <li key={e.tag} className="flex flex-col gap-1 rounded-lg border border-border/60 p-5">
              <p className="text-sm font-medium">{e.tag}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-4" aria-label="Corrections">
        <h2 className="text-sm font-medium tracking-tight">Corrections</h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Corrections are part of the system. We prefer visible honesty over
          quiet edits.
        </p>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {CORRECTIONS.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed text-muted-foreground pt-2">
          Report an issue via{" "}
          <a
            href="mailto:hello@yoy.group?subject=Correction%20%E2%80%94%20YOY.Group"
            className="text-foreground underline underline-offset-4 hover:opacity-80"
          >
            hello@yoy.group
          </a>
          .
        </p>
      </section>

      <div className="my-12 h-px bg-border" />

      <footer className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <Link href="/trust" className="hover:text-foreground transition-colors">
          ← Back to Trust
        </Link>
        <span>Authority layer · Editorial policy is deliberate.</span>
      </footer>
    </main>
  );
}