// components/nav/SiteFooter.tsx
import Image from "next/image";
import Link from "next/link";

const COLS = [
  {
    title: "Explore",
    links: [
      { href: "/pillars", label: "Pillars" },
      { href: "/log", label: "Log" },
      { href: "/proof", label: "Proof" },
      { href: "/glossary", label: "Glossary" },
      { href: "/about", label: "About" },
      { href: "/andrey", label: "Andrey" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/retail", label: "Retail" },
      { href: "/services/creators", label: "Creators" },
      { href: "/services/rails", label: "Rails" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/trust", label: "Trust" },
      { href: "/trust/editorial", label: "Editorial" },
      { href: "/trust/press", label: "Press" },
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
] as const;

const LINK_CLASS =
  "text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function SiteFooter() {
  // Avoid any “current year” hydration edge cases by computing on the server only.
  const year = new Date().getUTCFullYear();

  return (
    <footer className="border-t border-border/60" aria-label="Site footer">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* 12-col grid keeps spacing consistent across viewport widths */}
        <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-10">
          {/* Brand block */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              {/* Light */}
              <Image
                src="/brand/y-glyph.svg"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="h-[18px] w-[18px] dark:hidden"
              />
              {/* Dark */}
              <Image
                src="/brand/y-glyph-white.svg"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="hidden h-[18px] w-[18px] dark:block"
              />

              <span className="text-sm font-medium">YOY.Group</span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              We build operating systems for
              <br />
              retail brands and creators.
              <br />
              Less chaos. More shipping.
            </p>

            <p className="text-xs text-muted-foreground">
              Proof beats promises.
            </p>
          </div>

          {/* Columns */}
          <div className="md:col-span-7">
            <div className="grid gap-10 sm:grid-cols-3">
              {COLS.map((col) => (
                <nav
                  key={col.title}
                  aria-label={col.title}
                  className="space-y-3"
                >
                  <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {col.title}
                  </h2>

                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className={LINK_CLASS}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} YOY.Group. Proof required.
          </p>

          <a href="mailto:hello@yoy.group" className={LINK_CLASS}>
            hello@yoy.group
          </a>
        </div>
      </div>
    </footer>
  );
}
