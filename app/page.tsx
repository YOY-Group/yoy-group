// app/page.tsx
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "YOY.Group",
  description:
    "Operating systems for modern commerce. We help brands sell, ship, and grow with discipline — systems, cadence, and proof.",
  path: "/",
  type: "website",
  imagePath: "/og/og.png",
});

const PILLARS = [
  {
    title: "Agentic Commerce OS",
    href: "/pillars/agentic-commerce-os",
    desc: "Governed systems for commerce execution and decision-making.",
  },
  {
    title: "Retail Operations Architecture",
    href: "/pillars/retail-ops-architecture",
    desc: "Modular operating models spanning supply, systems, and distribution.",
  },
  {
    title: "Culture–Commerce Engineering",
    href: "/pillars/culture-commerce-engineering",
    desc: "Translating cultural signal into durable commercial systems.",
  },
] as const;

export default function Page() {
  const siteUrl =
    process.env.SITE_URL?.replace(/\/+$/, "") || "https://yoy.group";

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#org`,
    name: "YOY.Group",
    url: siteUrl,
    logo: `${siteUrl}/brand/y-glyph-white.svg`,
    email: "mailto:hello@yoy.group",
    founder: {
      "@type": "Person",
      "@id": `${siteUrl}/andrey#person`,
      name: "Andrey Voronkov",
      url: `${siteUrl}/andrey`,
    },
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <header className="space-y-6">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight">YOY.Group</h1>

            <h2 className="text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
              We help brands run better.
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              We improve how companies sell, ship, and grow — using systems, not
              slides.
              <br />
              <span className="text-sm text-muted-foreground">
                Three lenses: Retail, Creators, Rails.
              </span>
            </p>
          </div>

          <section aria-label="What we fix" className="space-y-3">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              What we fix
            </h3>

            <ul className="space-y-2 text-sm text-foreground">
              <li>How your business is structured</li>
              <li>How work actually gets done</li>
              <li>How results are proven, not promised</li>
            </ul>

            {/* breathe */}
            <p className="mt-4 text-xs text-muted-foreground">
              Proof beats promises.
            </p>
          </section>

          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link
              href="/services"
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              Services →
            </Link>
            <Link
              href="/proof"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Proof →
            </Link>
            <Link
              href="/pillars"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pillars →
            </Link>
            <Link
              href="/trust"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Trust →
            </Link>
          </nav>
        </div>
      </header>

      {/* Divider */}
      <div className="my-16 h-px bg-border" />

      {/* Pillars */}
      <section aria-labelledby="pillars" className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2
            id="pillars"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Pillars
          </h2>

          <Link
            href="/pillars"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            View →
          </Link>
        </div>

        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          aria-label="Pillar links"
        >
          {PILLARS.map((p) => (
            <li key={p.href} className="group">
              <Link
                href={p.href}
                className="block h-full rounded-lg border border-border bg-background p-6 transition-colors hover:bg-muted/30"
              >
                <div className="text-base font-medium text-foreground">
                  {p.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-3 text-xs text-muted-foreground group-hover:text-foreground">
                  Read →
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="my-16 h-px bg-border" />

      {/* Start here */}
      <section aria-label="Start here" className="space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Start here
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link
            href="/services"
            className="block rounded-lg border border-border/60 p-6 transition-colors hover:border-border"
          >
            <p className="text-sm font-medium tracking-tight">Services</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Work that ships. Three lenses: Retail, Creators, Rails.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">View →</div>
          </Link>

          <Link
            href="/proof"
            className="block rounded-lg border border-border/60 p-6 transition-colors hover:border-border"
          >
            <p className="text-sm font-medium tracking-tight">Proof</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Operator installs and system builds. Claims belong here or they
              don’t ship.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">View →</div>
          </Link>

          <Link
            href="/contact"
            className="block rounded-lg border border-border/60 p-6 transition-colors hover:border-border"
          >
            <p className="text-sm font-medium tracking-tight">Contact</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Short context. Clear intent. No decks by default.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">Open →</div>
          </Link>
        </div>
      </section>

      {/* Footer signal */}
      <footer className="mt-24 text-xs text-muted-foreground">
        Authority layer · v0.1
      </footer>
    </main>
  );
}
