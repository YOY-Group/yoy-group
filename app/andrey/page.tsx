// app/andrey/page.tsx
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Andrey Voronkov",
  description:
    "Andrey Voronkov is the founder of YOY.Group. Retail operator, commerce systems builder, and culture→commerce translator — shipping-first, proof-led.",
  path: "/andrey",
  // Person page: express as profile for OG, Person via JSON-LD below
  type: "profile",
  // Use the canonical headshot as the OG image for this profile page
  imagePath: "/og/andrey.jpg",
});

// Stable links (auditable, reusable)
const LINKS = {
  email: "mailto:andrey@yoy.group",
  linkedin: "https://linkedin.com/in/andreyvoronkov",
} as const;

const FOCUS = [
  {
    k: "Retail Operator",
    v: "Trading cadence, store performance, franchise governance, openings, and end-to-end operational discipline.",
  },
  {
    k: "Agentic Commerce Systems",
    v: "Bounded automation, decision guardrails, and auditable workflows across retail and ecommerce operations.",
  },
  {
    k: "Culture → Commerce",
    v: "Translate signal into legible product, drops, and retention loops that hold under scale.",
  },
] as const;

const SELECTED = [
  {
    role: "Retail Management Consultant — multi-brand fashion (UK + Europe)",
    note: "Operational stabilisation, value chain improvement, and scalable operating systems.",
  },
  {
    role: "General Manager (Europe) — P&L ownership",
    note: "Growth planning and execution across D2C and wholesale; reporting to board-level stakeholders.",
  },
  {
    role: "International Franchise Retail Manager — 100+ locations",
    note: "Partner management, standards, and operating discipline across a distributed estate.",
  },
  {
    role: "Head of Retail (UK) + European Retail Ops leadership",
    note: "Store performance management, openings/closures, and execution at scale.",
  },
] as const;

const CREDENTIALS = [
  {
    k: "Executive MBA (Fashion)",
    v: "Fashion Business School, London College of Fashion (University of the Arts London).",
  },
  {
    k: "PG Cert",
    v: "Fashion Buying & Merchandising (London College of Fashion, University of the Arts London).",
  },
  { k: "Chartered Manager", v: "Strategic Management & Leadership (CMI)." },
  { k: "Languages", v: "English, French, Russian." },
] as const;

const PRINCIPLES = [
  { k: "Shipping first", v: "Small releases, tight loops." },
  { k: "Proof over theatre", v: "Logs, before/after, trace." },
  { k: "Systems beat heroics", v: "The machine must run without you." },
] as const;

export default function AndreyPage() {
  const siteUrl =
    process.env.SITE_URL?.replace(/\/+$/, "") || "https://yoy.group";

  // Canonical identity image (stable, versioned)
  const imageUrl = `${siteUrl}/og/andrey.jpg`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    // Use fragment id (common pattern) to distinguish entity from document
    "@id": `${siteUrl}/andrey#person`,
    name: "Andrey Voronkov",
    url: `${siteUrl}/andrey`,
    image: imageUrl,
    email: "mailto:andrey@yoy.group",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "YOY.Group",
      url: siteUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    knowsLanguage: ["en", "fr", "ru"],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of the Arts London",
        sameAs: "https://www.arts.ac.uk/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "London College of Fashion",
        sameAs: "https://www.arts.ac.uk/colleges/london-college-of-fashion",
      },
      {
        "@type": "EducationalOrganization",
        name: "Fashion Business School (London College of Fashion)",
        sameAs:
          "https://www.arts.ac.uk/colleges/london-college-of-fashion/courses/fashion-business-school",
      },
    ],
    sameAs: [LINKS.linkedin],
    knowsAbout: [
      "Retail operations",
      "Commerce operating systems",
      "Automation governance",
      "Agentic systems",
      "Merchandising and trading cadence",
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      {/* Person JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <header className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Profile
        </p>

        {/* Identity header: photo + name */}
        <div className="flex items-start gap-5">
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src="/og/andrey.jpg"
              alt="Andrey Voronkov"
              fill
              sizes="64px"
              className="object-cover"
              priority
            />
          </div>

          <div className="min-w-0 space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              Andrey Voronkov
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground">
              Founder at <span className="text-foreground">YOY.Group</span>. I
              build operating systems for modern commerce — from trading cadence
              and store execution to automation, data, and customer loops.
              UK-based. Shipping first.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href={LINKS.email}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                andrey@yoy.group
              </a>
              <span className="text-muted-foreground">·</span>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">London, UK</span>
            </div>
          </div>
        </div>
      </header>

      <div className="my-12 h-px bg-border" />

      <section className="space-y-10">
        {/* Background */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Background
          </h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            20+ years across fashion retail operations in the UK and
            international markets — spanning store leadership, multi-site ops,
            franchise portfolios, and P&amp;L ownership. I package the work into
            systems teams can actually run: cadence, controls, and proof.
          </p>

          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            {CREDENTIALS.map((x) => (
              <li key={x.k}>
                <span className="text-foreground">{x.k}:</span> {x.v}
              </li>
            ))}
          </ul>
        </div>

        {/* Focus */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Focus
          </h2>

          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            {FOCUS.map((x) => (
              <li key={x.k}>
                <span className="text-foreground">{x.k}:</span> {x.v}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Selected experience
          </h2>

          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            {SELECTED.map((x) => (
              <li key={x.role}>
                <span className="text-foreground">{x.role}:</span> {x.note}
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground">
            Full chronology lives on LinkedIn.
          </p>
        </div>

        {/* Now */}
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

          <p className="text-xs text-muted-foreground">
            “Agentic” here means bounded automation under explicit governance —
            not black-box autonomy.
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Principles
          </h2>

          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            {PRINCIPLES.map((x) => (
              <li key={x.k}>
                <span className="text-foreground">{x.k}:</span> {x.v}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ / Disambiguation */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            FAQ
          </h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            This page refers to Andrey Voronkov, founder of YOY.Group (UK). Not
            affiliated with the computer scientist Andrei Voronkov (University
            of Manchester) or athletes with the same name.
          </p>
        </div>

        {/* Start */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Start
          </h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            If you want to explore fit, send a short note with: current stack,
            primary constraint, and what success must look like in 30 days.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/contact" className="hover:text-foreground">
              Contact →
            </Link>
            <Link href="/services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="/trust" className="hover:text-foreground">
              Trust
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          ← Home
        </Link>
        <Link href="/proof" className="hover:text-foreground">
          Proof →
        </Link>
      </footer>
    </main>
  );
}
