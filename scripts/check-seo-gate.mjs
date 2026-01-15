#!/usr/bin/env node
/**
 * YOY.Group — SEO Release Gate Check (v0.4)
 *
 * Deterministic checks based on repo sources of truth:
 * - next.config.mjs: preview noindex via X-Robots-Tag with production guard
 * - app/layout.tsx: metadataBase derived from SITE_URL and robots gate for preview/prod
 *
 * Fix in v0.4:
 * - Removed naive substring checks that falsely flag `return []`.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();

function die(msg) {
  console.error(`\n[SEO_RELEASE_GATE] FAIL: ${msg}\n`);
  process.exit(1);
}
function warn(msg) {
  console.warn(`[SEO_RELEASE_GATE] WARN: ${msg}`);
}
function ok(msg) {
  console.log(`[SEO_RELEASE_GATE] OK: ${msg}`);
}
function exists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
function readText(p) {
  return fs.readFileSync(p, "utf8");
}
function mustInclude(filePath, needles) {
  const txt = readText(filePath);
  const missing = needles.filter((n) => !txt.includes(n));
  if (missing.length) {
    die(
      `${path.relative(ROOT, filePath)} is missing required snippets:\n- ${missing.join("\n- ")}`
    );
  }
  return txt;
}

// 1) next.config.mjs — preview noindex header gate with production guard
const nextConfigPath = path.join(ROOT, "next.config.mjs");
if (!exists(nextConfigPath)) {
  die(`Missing next.config.mjs at repo root.`);
}

mustInclude(nextConfigPath, [
  "async headers()",
  "process.env.VERCEL_ENV",
  '=== "production"',
  "if (isProd) return []",
  "X-Robots-Tag",
  "noindex",
  "nofollow",
]);

ok(`next.config.mjs enforces preview noindex via X-Robots-Tag and has a production guard (return []).`);

// 2) app/layout.tsx — metadataBase + robots gate
const layoutPathTsx = path.join(ROOT, "app", "layout.tsx");
const layoutPathTs = path.join(ROOT, "app", "layout.ts");

let layoutPath = null;
if (exists(layoutPathTsx)) layoutPath = layoutPathTsx;
else if (exists(layoutPathTs)) layoutPath = layoutPathTs;
else die(`Missing app/layout.tsx (or app/layout.ts).`);

mustInclude(layoutPath, [
  "export const metadata",
  "metadataBase:",
  "new URL(SITE_URL)",
  "const VERCEL_ENV",
  "const IS_PREVIEW",
  'VERCEL_ENV === "preview"',
  "robots: IS_PREVIEW",
  "index: false",
  "follow: false",
  "index: true",
  "follow: true",
]);

ok(`app/layout contains metadataBase derived from SITE_URL and preview/prod robots gate.`);

// 3) Optional static sitemap host hygiene (best-effort)
const possibleSitemaps = [
  path.join(ROOT, "public", "sitemap.xml"),
  path.join(ROOT, "out", "sitemap.xml"),
  path.join(ROOT, ".next", "static", "sitemap.xml"),
];

let sitemapChecked = false;
for (const sm of possibleSitemaps) {
  if (!exists(sm)) continue;
  sitemapChecked = true;

  const xml = readText(sm);
  if (xml.includes("vercel.app") || xml.includes("localhost") || xml.includes("127.0.0.1")) {
    die(`Sitemap at ${path.relative(ROOT, sm)} contains non-canonical hosts (vercel.app/localhost).`);
  }
  if (!xml.includes("https://yoy.group/")) {
    warn(
      `Static sitemap exists at ${path.relative(ROOT, sm)} but does not include https://yoy.group/. ` +
        `If sitemap is generated dynamically (app/sitemap.ts), this may be fine.`
    );
  } else {
    ok(`Sitemap host hygiene OK: ${path.relative(ROOT, sm)}`);
  }
}

if (!sitemapChecked) {
  warn(
    `No static sitemap.xml found in common locations. If sitemap is dynamic (app/sitemap.ts), this is fine.`
  );
}

ok(`SEO release gate checks passed.`);
process.exit(0);
