// components/nav/PrimaryNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const NAV = [
  { href: "/pillars", label: "Pillars" },
  { href: "/log", label: "Log" },
  { href: "/proof", label: "Proof" },
  { href: "/glossary", label: "Glossary" },
  { href: "/services", label: "Services" },
  { href: "/trust", label: "Trust" },
] as const;

export default function PrimaryNav() {
  const pathname = usePathname();

  return (
    <header className="mb-12">
      <div className="flex items-center justify-between gap-6">
        {/* Brand / Home */}
        <Link
          href="/"
          aria-label="YOY.Group home"
          className="text-sm font-medium tracking-wide text-foreground hover:opacity-80 transition-opacity"
        >
          YOY.Group
        </Link>

        {/* Primary navigation */}
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
            {NAV.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "text-sm transition-colors",
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <Separator className="mt-6" />
    </header>
  );
}