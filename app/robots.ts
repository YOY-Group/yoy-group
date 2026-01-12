// app/robots.ts
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl().replace(/\/$/, "");

  return {
    rules: [
      // Default: allow public surface, block non-public/internal surfaces
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/n8n/",
          "/dev/",
          "/ai/",
          "/studio/",
          "/_next/",

          // common non-public / noisy surfaces (safe even if they don't exist)
          "/admin/",
          "/dashboard/",
          "/internal/",
          "/private/",
          "/preview/",
          "/draft/",
        ],
      },

      // Optional: hard block obvious scraper patterns
      // (Keeps your intent explicit without hurting normal indexing)
      {
        userAgent: "AhrefsBot",
        disallow: ["/"],
      },
      {
        userAgent: "SemrushBot",
        disallow: ["/"],
      },
      {
        userAgent: "MJ12bot",
        disallow: ["/"],
      },
      {
        userAgent: "DotBot",
        disallow: ["/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}