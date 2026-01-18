// lib/content/proof-loader.ts
import { ProofArtifact, ProofFrontmatterSchema } from "@/lib/schema/proof";
import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const ProofFileSchema = ProofFrontmatterSchema.extend({
  slug: z.string().min(2).max(120),
});

type ProofFileFrontmatter = z.infer<typeof ProofFileSchema>;

const CONTENT_DIR = path.join(process.cwd(), "content", "proof");

function isProd(): boolean {
  return process.env.VERCEL_ENV === "production";
}

export async function listProofFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(CONTENT_DIR);
    return entries.filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}

function trimBody(content: string): string {
  // Avoid empty leading/trailing whitespace noise; preserve internal newlines.
  return content.replace(/\s+$/g, "").replace(/^\s+/g, "");
}

export async function loadAllProofArtifacts(): Promise<ProofArtifact[]> {
  const files = await listProofFiles();
  const artifacts: ProofArtifact[] = [];
  const slugSeen = new Set<string>();
  const idSeen = new Set<string>();

  for (const file of files) {
    const full = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(full, "utf-8");
    const { data, content } = matter(raw);

    const fm = ProofFileSchema.parse(data) as ProofFileFrontmatter;

    // Production safety: only show published.
    if (isProd() && fm.status !== "published") continue;

    // Hard uniqueness guarantees (prevents weird indexing bugs).
    if (idSeen.has(fm.id))
      throw new Error(`Duplicate proof id detected: "${fm.id}"`);
    idSeen.add(fm.id);

    if (slugSeen.has(fm.slug)) {
      throw new Error(`Duplicate proof slug detected: "${fm.slug}"`);
    }
    slugSeen.add(fm.slug);

    artifacts.push({
      ...fm,
      slug: fm.slug,
      body: trimBody(content),
    });
  }

  // Newest first (stable)
  artifacts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return artifacts;
}

export async function loadProofBySlug(
  slug: string,
): Promise<ProofArtifact | null> {
  // Fast path: load list once, then scan frontmatter only.
  const files = await listProofFiles();

  for (const file of files) {
    const full = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(full, "utf-8");
    const { data, content } = matter(raw);

    const fm = ProofFileSchema.parse(data) as ProofFileFrontmatter;

    if (fm.slug !== slug) continue;

    // Production safety: unpublished is treated as not found.
    if (isProd() && fm.status !== "published") return null;

    return {
      ...fm,
      slug: fm.slug,
      body: trimBody(content),
    };
  }

  return null;
}
