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

export async function listProofFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(CONTENT_DIR);
    return entries.filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}

function isProd(): boolean {
  return process.env.VERCEL_ENV === "production";
}

export async function loadAllProofArtifacts(): Promise<ProofArtifact[]> {
  const files = await listProofFiles();
  const artifacts: ProofArtifact[] = [];
  const slugSeen = new Set<string>();

  for (const file of files) {
    const full = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(full, "utf-8");
    const { data, content } = matter(raw);

    const fm = ProofFileSchema.parse(data) as ProofFileFrontmatter;

    if (isProd() && fm.status !== "published") continue;

    if (slugSeen.has(fm.slug)) {
      throw new Error(`Duplicate proof slug detected: "${fm.slug}"`);
    }
    slugSeen.add(fm.slug);

    artifacts.push({
      ...fm,
      slug: fm.slug,
      body: content.trim(),
    });
  }

  artifacts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return artifacts;
}

export async function loadProofBySlug(
  slug: string,
): Promise<ProofArtifact | null> {
  const files = await listProofFiles();

  for (const file of files) {
    const full = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(full, "utf-8");
    const { data, content } = matter(raw);

    // Fast parse frontmatter first
    const fm = ProofFileSchema.parse(data) as ProofFileFrontmatter;

    if (fm.slug !== slug) continue;
    if (isProd() && fm.status !== "published") return null;

    return {
      ...fm,
      slug: fm.slug,
      body: content.trim(),
    };
  }

  return null;
}
