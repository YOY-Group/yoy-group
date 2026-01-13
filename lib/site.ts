// lib/site.ts
const FALLBACK_PUBLIC_URL = "https://yoy-group.vercel.app";

function normalise(url: string) {
  const trimmed = url.trim().replace(/\/$/, "");
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://"))
    return trimmed;
  return `https://${trimmed}`;
}

export function getSiteUrl() {
  const explicitNorm = process.env.NEXT_PUBLIC_SITE_URL
    ? normalise(process.env.NEXT_PUBLIC_SITE_URL)
    : "";
  if (explicitNorm) return explicitNorm;

  const env = process.env.VERCEL_ENV; // 'production' | 'preview' | 'development'

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const branch = process.env.VERCEL_BRANCH_URL?.trim();
  const vercel = process.env.VERCEL_URL?.trim();

  // In preview/dev, prefer the preview URL so OG tags match the deployment you're looking at.
  if (env !== "production") {
    if (branch) return normalise(branch);
    if (vercel) return normalise(vercel);
    if (prod) return normalise(prod); // last resort
  }

  // In production, prefer canonical prod domain.
  if (prod) return normalise(prod);
  if (vercel) return normalise(vercel);

  return normalise(FALLBACK_PUBLIC_URL);
}
