// app/andrey/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Andrey Voronkov · YOY.Group",
  description:
    "Andrey Voronkov is the founder of YOY.Group. Retail operations operator and AI commerce systems builder — shipping-first, proof-led.",
  openGraph: {
    title: "Andrey Voronkov · YOY.Group",
    description:
      "Retail operations operator and AI commerce systems builder — shipping-first, proof-led.",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Andrey Voronkov · YOY.Group",
    description:
      "Retail operations operator and AI commerce systems builder — shipping-first, proof-led.",
  },
};

export default function AndreyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Profile
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">Andrey Voronkov</h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          Founder at <span className="text-foreground">YOY.Group</span>. I build operating
          systems for retail — from execution cadence and trading discipline to
          automation, data, and customer loops.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href="mailto:andrey@yoy.group"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            andrey@yoy.group
          </a>
          <span className="text-muted-foreground">·</span>
          <a
            href="https://linkedin.com/in/andreyvoronkov"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">London, UK</span>
        </div>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Focus
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="text-foreground">Retail Operations:</span> execution cadence,
              accountability, handoffs, and measurable performance.
            </li>
            <li>
              <span className="text-foreground">AI Commerce Systems:</span> agent-assisted
              workflows, decision guardrails, and auditable automation.
            </li>
            <li>
              <span className="text-foreground">Culture → Commerce:</span> translating signal
              into legible product, drops, and retention loops.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Now
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            YOY.Group is the public authority surface. Work ships as{" "}
            <Link href="/proof" className="text-foreground hover:underline">
              Proof
            </Link>
            . Anything else is noise.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Principles
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="text-foreground">Shipping first:</span> small releases, tight loops.
            </li>
            <li>
              <span className="text-foreground">Proof over theatre:</span> logs, before/after, trace.
            </li>
            <li>
              <span className="text-foreground">Systems beat heroics:</span> the machine must run.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you want to explore fit, send a short note with: current stack, primary constraint,
            and what success must look like in 30 days.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="mailto:andrey@yoy.group"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/trust" className="text-muted-foreground hover:text-foreground transition-colors">
              Trust
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          ← Home
        </Link>
      </footer>
    </main>
  );
}