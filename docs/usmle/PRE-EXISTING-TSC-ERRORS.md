# Pre-existing TSC Error Registry — KYP / USMLE Production

**Recorded:** 2026-10-08 (M1 → M2 transition cleanup)
**Command:** `npx tsc --noEmit`
**Purpose:** Directive — pre-existing TypeScript errors unrelated to the USMLE application, pipeline, or generated content are documented, not repaired. USMLE-scoped errors were fixed surgically.

## Status after cleanup

| Category | Errors | Action |
|---|---|---|
| USMLE pipeline scripts | 5 → **0** | FIXED (see below) |
| USMLE app components / notes | 3 → **0** | FIXED (see below) |
| Unrelated app infrastructure | 4 | DOCUMENTED ONLY (pre-existing, out of production scope) |

## Fixed (USMLE-scoped, surgical, behavior-preserving)

1. `scripts/usmle-pipeline/audit.ts(23)` — `main(): number` never returns a value (process exits inside promise callback). Fix: return type `void`.
2. `scripts/usmle-pipeline/seed-visual-inventory.ts(38,53,66)` — local `Rec` helper type still required `subsection` although `inventory()` injects it per record at composition time (schema evolution artifact). Fix: added `"subsection"` to the `Omit<…>` list.
3. `src/components/kyp/usmle/note-sections.tsx(254)` — `UsMLERecallDeck` passed no `type` to Radix `Accordion` (required in props type; runtime defaulted to single). Fix: `type="single"` (preserves exact runtime behavior).
4. `src/components/kyp/usmle/visuals/pathways.tsx(138)` — invalid SVG attribute `textAnchor="begin"` (valid value is `"start"`; element is an empty leftover axis label, rendered nothing either way). Fix: `textAnchor="start"`.
5. `src/lib/kyp/usmle/notes/av-conduction-blocks.ts(334)` — `related` entry used nonexistent `connection` key (silently dropped; `RelatedTopic` uses `note`). Fix: renamed to `note` so the authored connection text actually renders.

## Documented only (pre-existing, unrelated to USMLE production)

1. `.next/dev/types/` generated files (transient) — while a `next dev` server is running (or was killed mid-write), `.next/dev/types/validator.ts` (3 errors) and `.next/dev/types/routes.d.ts` (up to ~17 errors, observed 2026-10-08 while the QA dev server was regenerating routes) can show parse errors. These are **generated dev artifacts**, fully rewritten on the next `next dev`/`next build`, never compiled into production output. Resolved by deleting `.next/dev` or simply restarting dev. **Not counted in the baseline.**
2. `next.config.ts(22)` — `redirects()` return type widening: `has: { type: string }` not assignable to `RouteHas` union (`"query" | "header" | "cookie"`). Pre-existing app infrastructure config; does not affect USMLE app routes, pipeline, or generated content. The build compiles and routes serve correctly.

## Stable baseline after cleanup (2026-10-08, dev server stopped, `.next/dev` cleared)

`npx tsc --noEmit` → **1 error: next.config.ts only** (plus transient `.next/dev/types/*` churn whenever a dev server writes those files mid-run).

## Ongoing rule for production

- Future `tsc` runs during USMLE production should treat **new USMLE-scoped errors as blockers** (fix at source).
- The 4 errors above are the accepted baseline; they are not counted as production regressions.
