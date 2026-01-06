// app/contact/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Quiet intake surface for YOY.Group. Short context. Clear intent.",
};

export default function ContactPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Contact
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          Short context. Clear intent. No decks by default.
        </p>
      </header>

      <div className="h-px bg-border" />

      {/* Primary */}
      <section className="space-y-6" aria-label="Primary contact">
        <div className="space-y-2">
          <p className="text-sm font-medium">Email</p>
          <a
            href="mailto:hello@yoy.group"
            className="text-sm underline underline-offset-4 hover:opacity-80"
          >
            hello@yoy.group →
          </a>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you can keep it to 8–10 lines, we can move fast.
          </p>
        </div>

        <div className="rounded-lg border border-border/60 p-5">
          <p className="text-sm font-medium">Include</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground">
            <li>
              <span className="text-muted-foreground">1)</span> Current stack +
              surface (site/store/app/Telegram/etc.)
            </li>
            <li>
              <span className="text-muted-foreground">2)</span> Primary
              constraint (what’s breaking / leaking / blocking revenue)
            </li>
            <li>
              <span className="text-muted-foreground">3)</span> 30-day success
              metric (what “better” means in one month)
            </li>
            <li>
              <span className="text-muted-foreground">4)</span> Any hard
              constraints (budget, deadlines, compliance, team capacity)
            </li>
          </ul>
        </div>
      </section>

      {/* Expectations */}
      <section className="space-y-3" aria-label="Response expectations">
        <h2 className="text-sm font-medium tracking-tight">Expectations</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>We reply when there’s clear fit.</li>
          <li>Work starts timeboxed. Every change is logged.</li>
          <li>Claims belong in Proof or they don’t ship.</li>
        </ul>
      </section>

      <div className="h-px bg-border" />

      {/* Links */}
      <section className="space-y-4" aria-label="Crosslinks">
        <h2 className="text-sm font-medium tracking-tight">Start here</h2>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/services"
            className="text-sm underline underline-offset-4 hover:opacity-80"
          >
            Services →
          </Link>
          <Link
            href="/proof"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Proof →
          </Link>
          <Link
            href="/trust"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Trust & disclosures →
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          Public surface stays calm. Internals stay strict.
        </p>
      </section>

      <footer className="pt-4 text-xs text-muted-foreground">
        Timeboxed by default. Proof over promises.
      </footer>
    </section>
  );
}