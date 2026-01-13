// app/glossary/terms.ts
export type GlossaryTerm = {
  slug: string;
  title: string;
  short: string;
  definition: string;
  notes?: string[];
  related?: { title: string; href: string }[];
  updated?: string; // YYYY-MM-DD
};

export const GLOSSARY_TERMS: readonly GlossaryTerm[] = [
  {
    slug: "agentic-commerce",
    title: "Agentic Commerce",
    short:
      "Commerce systems designed to operate autonomously via agents, not manual workflows.",
    definition:
      "Agentic Commerce treats execution as a system: agents handle routine decisions, orchestration, and exception routing. The human defines goals, constraints, and review points; the system runs the loop and produces traceable outcomes.",
    notes: [
      "Automate decisions only after you can audit them.",
      "Prefer small agents with strict scopes over one general agent.",
      "Human-in-the-loop is a feature, not a failure mode.",
    ],
    related: [
      { title: "Pillars", href: "/pillars" },
      { title: "Proof", href: "/proof" },
      { title: "Trust", href: "/trust" },
    ],
    updated: "2026-01-07",
  },
  {
    slug: "authority-layer",
    title: "Authority Layer",
    short: "The public surface where claims must be earned and verifiable.",
    definition:
      "The Authority Layer is YOY.Group’s public-facing library. Its purpose is not marketing; it is a durable record of primitives, decisions, and proof. Anything published here must survive scrutiny, remain readable over time, and avoid claims without evidence.",
    notes: [
      "Prefer structure over persuasion.",
      "Publish only what can be defended without context.",
      "When uncertain: remove.",
    ],
    related: [
      { title: "Proof", href: "/proof" },
      { title: "Pillars", href: "/pillars" },
      { title: "Trust", href: "/trust" },
    ],
    updated: "2026-01-07",
  },
  {
    slug: "culture-commerce",
    title: "Culture–Commerce",
    short:
      "The translation of cultural signal into durable commercial systems.",
    definition:
      "Culture–Commerce is the operating discipline of converting signal (taste, scenes, identity, rituals) into repeatable product, distribution, and retention loops—without collapsing into hype. The output is legible product and compounding demand.",
    notes: [
      "Signal must become structure (offers, drops, rituals, repeat loops).",
      "Legibility beats attention over time.",
      "If it can’t be operationalised, it’s just commentary.",
    ],
    related: [
      { title: "Authority Layer", href: "/glossary/authority-layer" },
      { title: "Proof", href: "/proof" },
      { title: "Trust", href: "/trust" },
    ],
    updated: "2026-01-07",
  },
] as const;

export function getGlossaryTerm(slug: string) {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export type GlossaryIndexItem = Readonly<{
  term: string;
  href: string;
  desc: string;
}>;

export const GLOSSARY_INDEX = GLOSSARY_TERMS.map((t) => ({
  term: t.title,
  href: `/glossary/${t.slug}`,
  desc: t.short,
})) satisfies ReadonlyArray<GlossaryIndexItem>;
