"use client";

import { useState } from "react";

interface ExpandableTagsProps {
  tags: string[];
  limit?: number;
}

export function ExpandableTags({ tags, limit = 4 }: ExpandableTagsProps) {
  const [expanded, setExpanded] = useState(false);

  if (tags.length === 0) return null;

  const visibleTags = expanded ? tags : tags.slice(0, limit);
  const hiddenCount = tags.length - limit;

  return (
    <div className="flex flex-wrap items-center gap-1.5 pt-1">
      {visibleTags.map((t) => (
        <span
          key={t}
          className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
        >
          {t}
        </span>
      ))}
      {hiddenCount > 0 && !expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="rounded-full border border-border/60 bg-muted/30 px-2 py-0.5 text-xs text-muted-foreground hover:bg-muted/50 transition-colors"
        >
          +{hiddenCount} more
        </button>
      )}
      {expanded && hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className="rounded-full border border-border/60 bg-muted/30 px-2 py-0.5 text-xs text-muted-foreground hover:bg-muted/50 transition-colors"
        >
          show less
        </button>
      )}
    </div>
  );
}
