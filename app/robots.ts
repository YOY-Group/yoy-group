// app/robots.ts
import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";
  const base = getSiteUrl().replace(/\/$/, "");

  if (!isProd) {
    return { rules: [{ userAgent: "*", disallow: ["/"] }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: [
          "/api/",
          "/n8n/",
          "/dev/",
          "/ai/",
          "/studio/",
          "/admin/",
          "/dashboard/",
          "/internal/",
          "/private/",
          "/preview/",
          "/draft/",
          "/cdn-cgi/",
        ],
      },
      { userAgent: "AhrefsBot", disallow: ["/"] },
      { userAgent: "SemrushBot", disallow: ["/"] },
      { userAgent: "MJ12bot", disallow: ["/"] },
      { userAgent: "DotBot", disallow: ["/"] },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
