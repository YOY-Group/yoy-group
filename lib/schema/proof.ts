// lib/schema/proof.ts
import { z } from "zod";

export const ProofFrontmatterSchema = z.object({
  id: z.string().regex(/^\d{4}-\d{2}-\d{2}-[a-z]+-[a-z0-9-]+$/),
  title: z.string().min(10).max(140),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  vertical: z.enum(["retail", "agentic", "creator"]),
  tags: z.array(z.string()).min(1).max(12),
  status: z.enum(["draft", "review", "published"]),
  lane: z.string().min(2).max(80),
  chain: z.string().optional(),
  chain_position: z.number().int().positive().optional(),
  summary: z.string().min(30).max(320),
  related: z
    .array(
      z.object({
        id: z.string(),
        label: z.string(),
      }),
    )
    .optional(),

  // SEO/agentic future-safe (optional)
  canonical_path: z.string().optional(),
  og_image: z.string().optional(),
});

export type ProofFrontmatter = z.infer<typeof ProofFrontmatterSchema>;

export type ProofArtifact = ProofFrontmatter & {
  slug: string;
  body: string;
};
