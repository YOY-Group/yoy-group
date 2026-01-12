// lib/seo.ts
import { getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";

type CanonicalPath = `/${string}`;

type SeoInput = {
  title: string;
  description: string;

  /** Canonical path (must start with "/") */
  path?: CanonicalPath;

  /** Path to image (must start with "/") e.g. "/og/og.png" */
  imagePath?: CanonicalPath;

  /** Whether search engines should index this page */
  index?: boolean;

  /** Whether links should be followed */
  follow?: boolean;

  /** OpenGraph type */
  type?: "website" | "article";

  /** Twitter card type */
  twitterCard?: "summary" | "summary_large_image";
};

function stripTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

function ensureLeadingSlash(p: string): CanonicalPath {
  return (p.startsWith("/") ? p : `/${p}`) as CanonicalPath;
}

function joinUrl(base: string, path: string) {
  const b = stripTrailingSlash(base);
  const p = ensureLeadingSlash(path);
  return `${b}${p}`;
}

function safeBaseUrl() {
  const base = getSiteUrl();

  // Force canonicals to prod domain on Vercel preview deployments
  if (process.env.VERCEL_ENV === "preview") return "https://yoy.group";

  if (!base || typeof base !== "string") return "https://yoy.group";
  if (!/^https?:\/\//.test(base)) return `https://${base.replace(/^\/+/, "")}`;
  return base;
}

export function buildMetadata(input: SeoInput): Metadata {
  const base = safeBaseUrl(); // absolute origin, e.g. "https://yoy.group"
  const canonicalPath = ensureLeadingSlash(input.path ?? "/");

  const url = joinUrl(base, canonicalPath);

  const imagePath = ensureLeadingSlash(input.imagePath ?? "/og/og.png");
  const imageUrl = joinUrl(base, imagePath);

  const index = input.index ?? true;
  const follow = input.follow ?? true;

  const ogType = input.type ?? "website";
  const twitterCard = input.twitterCard ?? "summary_large_image";

  return {
    title: input.title,
    description: input.description,

    // Keep canonical path-based (works nicely with metadataBase too)
    alternates: { canonical: canonicalPath },

    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: ogType,
      url,
      title: input.title,
      description: input.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `YOY.Group — ${input.title}`,
        },
      ],
    },

    twitter: {
      card: twitterCard,
      title: input.title,
      description: input.description,
      images: [imageUrl],
    },
  };
}
