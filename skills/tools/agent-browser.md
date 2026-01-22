---
name: agent-browser
role: verification-only
scope: public-surface
source: YOY_MASTER_OS/02_agents/tools/agent-browser.md
---

This repo supports `agent-browser` for **public surface verification only**.
No authentication. No publishing. No state mutation.

### Allowed

- open public URLs
- snapshot (a11y tree)
- extract titles/text/attributes
- screenshots / PDFs
- non-destructive navigation (links, tabs, expanders)

### Not allowed

- authenticated sessions (no login, no saved state, no cookies/storage load/save)
- form submissions or data entry
- interactions with internal/gated systems
- any action that changes server-side state
- publishing / content mutation / deployments

Canonical definition lives in YOY_MASTER_OS. This file is the public-safe contract.

---

## Operational usage (public-safe)

### Quick start

```bash
agent-browser open https://yoy.group
agent-browser get title
agent-browser snapshot -i
agent-browser close
```

---

Core workflow 1. Navigate

```bash
agent-browser open <url>
```

    2.	Snapshot

```bash
agent-browser snapshot -i
```

    3.	Inspect / navigate (public, non-destructive only)
    4.	Re-snapshot after navigation or DOM changes
    5.	Capture evidence (optional)

```bash
agent-browser screenshot --full
agent-browser pdf output.pdf
```

    6.	Close

```bash
agent-browser close
```

If any action might mutate state, stop. Verification only.

---

Commands

Navigation

```bash
agent-browser open <url>
agent-browser back
agent-browser forward
agent-browser reload
agent-browser close
```

Snapshot (page analysis)

```bash
agent-browser snapshot
agent-browser snapshot -i
agent-browser snapshot -c
agent-browser snapshot -d 3
agent-browser snapshot -s "#main"
```

Interactions (public, non-destructive only)

```bash
agent-browser click @e1
agent-browser dblclick @e1
agent-browser focus @e1
agent-browser hover @e1
agent-browser scroll down 500
agent-browser scrollintoview @e1
agent-browser press Enter
```

Get information

```bash
agent-browser get title
agent-browser get url
agent-browser get text @e1
agent-browser get attr @e1 href
agent-browser get count ".item"
```

Wait (stability)

```bash
agent-browser wait --load networkidle
agent-browser wait --url "**/proof"
agent-browser wait --text "Proof"
agent-browser wait 1000
```

JSON output (for parsing)

```bash
agent-browser snapshot -i --json
agent-browser get title --json
```

---

YOY.Group recipes (copy/paste)

1. Home sanity check

```bash
agent-browser open https://yoy.group
agent-browser get title
agent-browser snapshot -i
agent-browser close
```

2. Proof hub renders

```bash
agent-browser open https://yoy.group/proof
agent-browser wait --load networkidle
agent-browser snapshot -i
agent-browser close
```

3. Proof detail loads (no 404)

```bash
agent-browser open https://yoy.group/proof/2026-01-17-ia-integrity-audit
agent-browser wait --load networkidle
agent-browser get title
agent-browser snapshot -c
agent-browser close
```

4. Trust pages present + readable

```bash
agent-browser open https://yoy.group/trust/editorial
agent-browser snapshot -i
agent-browser open https://yoy.group/trust/press
agent-browser snapshot -i
agent-browser close
```

5. Sitemap reachable (visual proof only)

```bash
agent-browser open https://yoy.group/sitemap.xml
agent-browser screenshot --full
agent-browser close
```

---

Reporting format

When you run checks, report:
• Scope: (URLs)
• Commands run: (bash lines)
• Findings: pass/fail + what broke
• Evidence: screenshot/PDF paths (do not commit)
• Next action: fix / ignore / log as Proof

---

Notes
• This repo is public: keep outputs non-sensitive.
• Deep orchestration lives in Master_OS; this is the public-safe contract.
