// app/glossary/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Glossary",
  description:
    "Canonical definitions used by YOY.Group. Language as infrastructure.",
};

const TERMS = [
  {
    term: "Agentic Commerce",
    href: "/glossary/agentic-commerce",
    desc: "Commerce systems designed to operate autonomously via agents, not workflows.",
  },
  {
    term: "Authority Layer",
    href: "/glossary/authority-layer",
    desc: "The trust surface created through proof, clarity, and consistency over time.",
  },
  {
    term: "Culture–Commerce",
    href: "/glossary/culture-commerce",
    desc: "The translation of cultural signal into durable commercial systems.",
  },
];

export default function GlossaryPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Glossary</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Canonical definitions used across YOY.Group.
          <br />
          Terms are precise by design and updated deliberately.
        </p>
      </header>

      <div className="my-12 h-px bg-border" />

      <section aria-label="Glossary terms">
        <ul className="space-y-6">
          {TERMS.map((item) => (
            <li key={item.href} className="group">
              <Link
                href={item.href}
                className="block space-y-1 hover:opacity-90"
              >
                <h2 className="text-sm font-medium">{item.term}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 text-xs text-muted-foreground">
        Language is treated as infrastructure.
      </footer>
    </main>
  );
}