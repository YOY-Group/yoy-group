// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import PrimaryNav from "@/components/nav/PrimaryNav";
import SiteFooter from "@/components/nav/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/**
 * ─────────────────────────────────────────────────────────────
 * Canonical identity constants
 * ─────────────────────────────────────────────────────────────
 */
const SITE_NAME = "YOY.Group";
const SITE_URL = "https://yoy.group";
const DEFAULT_TITLE = "YOY.Group";
const DEFAULT_DESCRIPTION =
  "Agent-led, culture-native operating systems for commerce. We design retail architectures where brand, software, and distribution move as one.";

const SAME_AS = [
  "https://www.instagram.com/yoy.group/",
  "https://x.com/yoygroup",
  "https://www.linkedin.com/company/yoy-group/",
  "https://www.tiktok.com/@yoy_group",
  "https://github.com/YOY-Group",
];

/**
 * ─────────────────────────────────────────────────────────────
 * Viewport (Next.js preferred API)
 * ─────────────────────────────────────────────────────────────
 */
export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

/**
 * ─────────────────────────────────────────────────────────────
 * Global metadata
 * ─────────────────────────────────────────────────────────────
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE_NAME}`,
  },

  description: DEFAULT_DESCRIPTION,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/brand/y-glyph/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/y-glyph/favicon-16.png", sizes: "16x16", type: "image/png" },

      {
        url: "/brand/y-glyph.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/y-glyph-white.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/brand/y-glyph/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_GB",
  },

  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

/**
 * ─────────────────────────────────────────────────────────────
 * JSON-LD: Organization
 * ─────────────────────────────────────────────────────────────
 */
function JsonLdOrganization() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/y-glyph/icon-192.png`,
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    sameAs: SAME_AS,
    alternateName: ["YOY Group"],
    disambiguatingDescription:
      "Not affiliated with similarly named entities in other jurisdictions.",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * ─────────────────────────────────────────────────────────────
 * JSON-LD: Website
 * ─────────────────────────────────────────────────────────────
 */
function JsonLdWebsite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * ─────────────────────────────────────────────────────────────
 * Root layout (sticky footer)
 * ─────────────────────────────────────────────────────────────
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inject theme class early (enables Tailwind `dark:` + allows logo swaps) */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var root = document.documentElement;
    if (prefersDark) root.classList.add('dark');
    else root.classList.remove('dark');
  } catch (e) {}
})();`,
          }}
        />
      </head>

      <body
        className={[
          inter.variable,
          "min-h-screen",
          "bg-background text-foreground",
          "antialiased",
          "flex flex-col",
        ].join(" ")}
      >
        <JsonLdOrganization />
        <JsonLdWebsite />

        {/* Top */}
        <PrimaryNav />

        {/* Page content grows to fill viewport */}
        <main className="flex-1">
          <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
        </main>

        {/* Bottom */}
        <SiteFooter />
      </body>
    </html>
  );
}