// lib/schema/proof.ts
import { z } from "zod";

/**
 * Coherence edges (optional):
 * - pillar links Proof → Pillars IA
 * - service links Proof → Services IA
 *
 * Keep these optional so old artifacts remain valid.
 */
export const ProofPillarSchema = z.enum([
  "agentic-commerce-os",
  "retail-ops-architecture",
  "culture-commerce-engineering",
]);

export const ProofServiceSchema = z.enum(["retail", "creators", "rails"]);

export const ProofFrontmatterSchema = z
  .object({
    id: z.string().regex(/^\d{4}-\d{2}-\d{2}-[a-z]+-[a-z0-9-]+$/),
    title: z.string().min(10).max(140),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    vertical: z.enum(["retail", "agentic", "creator"]),
    tags: z.array(z.string()).min(1).max(12),
    status: z.enum(["draft", "review", "published"]),
    lane: z.string().min(2).max(80),

    // Optional Proof Chain metadata
    chain: z.string().optional(),
    chain_position: z.number().int().positive().optional(),

    // Coherence edges (optional)
    pillar: ProofPillarSchema.optional(),
    service: ProofServiceSchema.optional(),

    summary: z.string().min(30).max(320),

    related: z
      .array(
        z.object({
          id: z.string(),
          label: z.string(),
        }),
      )
      .optional(),

    // SEO / agentic future-safe (optional)
    // Keep these as paths (not full URLs) to prevent canonical mistakes.
    canonical_path: z
      .string()
      .regex(/^\//, "canonical_path must start with '/'")
      .optional(),

    // Accept either a local path or a full URL (CDN-ready).
    og_image: z.string().optional(),
  })
  .superRefine((fm, ctx) => {
    if (fm.chain_position && !fm.chain) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["chain_position"],
        message: "chain_position requires chain",
      });
    }
  });

export type ProofFrontmatter = z.infer<typeof ProofFrontmatterSchema>;

export type ProofArtifact = ProofFrontmatter & {
  slug: string;
  body: string;
};
