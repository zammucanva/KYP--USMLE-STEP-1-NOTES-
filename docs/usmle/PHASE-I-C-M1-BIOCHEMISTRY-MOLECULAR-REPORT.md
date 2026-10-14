# USMLE Phase I-C · M1 Batch Report — Biochemistry: Molecular I

**Batch:** M1 (first Phase I-C production batch) — DNA Replication · DNA Repair · DNA Mutations · Chromatin Organization
**Source:** First Aid for the USMLE Step 1 2026 — Part 1, pdf 54, 58, 59, 60 (book 32, 36, 37, 38)
**Status:** ALL FOUR TOPICS PASS — 15/15 QA gates each · tracker synchronized · contract GREEN
**Date:** 2026-10-07

---

## 1. Topics completed

| Topic | Difficulty | Note file | Status |
|---|---|---|---|
| chromatin-organization | D2 | `src/lib/kyp/usmle/notes/chromatin-organization.ts` | chapter-complete, 15/15 gates |
| dna-replication | D3 | `src/lib/kyp/usmle/notes/dna-replication.ts` | chapter-complete, 15/15 gates |
| dna-repair | D3 | `src/lib/kyp/usmle/notes/dna-repair.ts` | chapter-complete, 15/15 gates |
| dna-mutations | D2 | `src/lib/kyp/usmle/notes/dna-mutations.ts` | chapter-complete, 15/15 gates |

All four FA subsections claimed by these topics (Chromatin structure · DNA replication · DNA repair · Mutations in DNA) are fully covered; each note exceeds its difficulty-tier depth floors (audit: 0 failures across 14 topics).

## 2. Source coverage

- **53 evidence quotes pinned and machine-verified** against the supplied PDF text layer (chromatin 14 · replication 15 · repair 13 · mutations 11) — `verify-evidence.ts`: **94/94 verified corpus-wide, 0 failed**. Every quote was extracted from the actual text layer (never typed from memory); one quote required text-layer-faithful wording ("TaySachs" — the printed hyphen is a line-break artifact absent from the layer).
- Dual pdf/book mapping carried on every topic, every evidence item, and every visual record (book = pdf − 22, per the calibrated offset; page-number prints confirmed on the rendered pages).
- First Aid is the sole content source; every clinically relevant detail on the four pages is preserved (enzyme table, drug targets, Bloom/XP/Lynch/BRCA/Fanconi locks, telomerase states, mutation examples, epigenetic switches).

## 3. Visual coverage (per contract §3.4)

| Topic | FA figures identified | Accounted | Redraws | Reproductions | Unresolved | Omitted |
|---|---|---|---|---|---|---|
| chromatin-organization | 2 (packing hierarchy · EM pattern) | 2 | 2 | 0 | 0 | 0 |
| dna-replication | 1 (fork machinery + directionality inset) | 1 | 1 | 0 | 0 | 0 |
| dna-repair | 1 (five-pathway composite) | 1 | 1 | 0 | 0 | 0 |
| dna-mutations | 1 (mutation comparison table) | 1 | 1 | 0 | 0 | 0 |
| **M1 total** | **5** | **5** | **5** | **0** | **0** | **0** |

All source figures are COPYRIGHTED_NO_REPUBLISH; every one is implemented as an **original KYP redraw** (registry SVG) that preserves the source figure's educational content — labels, relationships, sequence, directionality, diagnostic pattern — without copying artwork, styling, or layout.

## 4. Visuals actually implemented (registry, painted and VLM-verified)

| Registry visualId | Component | What it preserves from the source figure |
|---|---|---|
| `chromatin-packing-hierarchy` | `chromatin.tsx` | DNA → nucleosome (octamer H2A/H2B/H3/H4 ×2, DNA loops twice, H1 on linker) → supercoiled structure → euchromatin (acetylated) vs heterochromatin (deacetylated) → metaphase chromosome; S-phase + mtDNA chips |
| `heterochromatin-euchromatin-em` | `chromatin.tsx` | The diagnostic EM pattern: dense heterochromatin rimming the nuclear envelope (± Barr body on the periphery), pale central euchromatin, nucleolus (Nu) — with legend cards |
| `replication-fork-machinery` | `dna.tsx` | Full fork: origin, helicase, SSBP, topoisomerase ahead, leading strand continuous, lagging Okazaki cycle (primase → pol III → pol I → ligase), 5′/3′ polarity on every strand, fork-movement arrow, directionality close-up, drug-target panel |
| `dna-repair-pathways` | `dna.tsx` | DSB band (NHEJ blunt-end ligation with possible base loss vs HR sister-chromatid template, accurate) + three lanes NER/BER("GEL Please")/MMR with phase chips (G1 / all / S) and disease chips (XP · Lynch/HNPCC · BRCA/Fanconi) |
| `mutation-types-panel` | `dna.tsx` | The source's own codon table reproduced exactly: GAG→GAA/GTG/TAG, GAU/GAC; Glu/Glu/Val/Stop/Asp/Asp; altered-amino-acids bracket; transition vs transversion; severity ladder; inserted-T and deleted-G annotations |

Visual placement rule honored: every visual sits inside the block flow **beside the concept it teaches**; no end-of-page galleries. No "Visual unavailable" anywhere (registry keys 19/19 resolve).

## 5. Mechanisms (shared KYP MechanismFlow — not replaced)

| Topic | Flows |
|---|---|
| dna-replication | leading-strand-synthesis · lagging-strand-cycle · telomerase-end-replication (3) |
| dna-repair | dsb-repair-choice (NHEJ vs HR, with a real inhibit edge: BRCA/Fanconi loss ⊣ HR) · ner-bulky-lesion · mismatch-repair (3) |
| dna-mutations | point-mutation-consequences · frameshift-anticipation (2) |
| chromatin-organization | acetylation-switch (with inhibit edge: acetylation ⊣ deacetylation arm) · methylation-silencing (2) |

Render verified on-screen (labeled nodes, arrows, T-bar inhibition edges) via browser screenshot + VLM.

## 6. kypExtensions (traceable, manifest-recorded)

- **usmle-attack-layer** (all four topics) — KYP-original exam-strategy synthesis (patterns/traps/pivots/mini-case) over source-verified facts.
- **end-replication-why** (dna-replication) — the mechanistic reason the final primer cannot be replaced (no upstream 3′-OH), deepening First Aid's one-line "avoid loss of genetic material with every duplication" rationale; flagged as outside-first-aid, located in `mechanisms[telomerase-end-replication].s1`.
- No external additions were presented as though they came from First Aid.

## 7. QA results — failures found and fixed

| # | Finding | Fix | Verified |
|---|---|---|---|
| 1 | **Hydration mismatch** on chromatin-organization (all viewports): `Math.cos/sin` differ in the last ULP between Node SSR and the browser, so EM-visual dot coordinates serialized differently server vs client | Pre-round all computed coordinates to 2 decimals (r2 helper) | 20/20 viewport combos → 0 console errors, 0 page errors, 0 hydration warnings |
| 2 | **Label collisions** in replication-fork visual: primase caption overlapped the helicase hexagon; helicase captions overlapped the PRIM circle and the lagging-strand line; lagging caption crowded the close-up panel; RNA-primer legend risked clipping at the right edge | Re-laid the label zones with clearance (primase stack moved left/up, helicase captions moved to the free bottom-right strip, captions shortened, legend moved inward) | VLM re-inspection light + dark: **CLEAR — no overlaps, no cutoffs** |

Final QA matrix (evidence in `download/usmle-m1-qa/`, 39 screenshots):

- Desktop 1440×900 + mobile 390×844 × light + dark × 4 topics: all paint, labels readable (VLM-verified per visual, both themes)
- Mobile page-level horizontal overflow: **0 px** on all 8 mobile combos (wide diagrams pan inside their figure frames)
- Console/page/hydration errors: **0** across all 20 checks (incl. pilot control page)
- Hub `/usmle`: 4 new cards grouped under Biochemistry, clean render; compare launcher + `/?topic=` / `/?view=compare&topic=` preview aliases working
- Pipeline machine gates: `validate.ts` **CONTRACT GREEN (0 errors, 2 pre-existing pilot warnings)** · `verify-evidence.ts` 94/94 · `audit.ts` 0 depth failures

## 8. Tracker status

Regenerated only by `sync-tracker.ts`: **14 topics produced** (10 pilot-complete + **4 chapter-complete**), notes ⇄ manifests ⇄ tracker 1:1. Biochemistry chapter: 55 registered · 5 produced · 50 remaining · qaStatus pass. No git operations (no commit, no push, no deployment).

## 9. Unresolved / flagged items (none block M1)

1. **Inventory data defect (systemic, pre-existing):** all 55 chapter-inventory topics carried `bookPages` = pdf page (e.g. "58" where the printed page is 36). The approved inventory *report* documents the correct mapping; the JSON field simply stored the wrong value. **M1 scope fixed** (4 topics + their 5 visual records now carry book 32/36/37/38). The remaining 51 records still carry the defect — a one-line mechanical correction (book = pdf − 22) is ready to run but awaits your approval since the inventory was approved as-is.
2. **Pre-existing pilot-era `tsc --noEmit` errors (8, in next.config.ts, audit.ts, seed-visual-inventory.ts, note-sections.tsx, pathways.tsx, av-conduction-blocks.ts)** — not introduced or touched by M1 (all M1 files typecheck clean); dev-server rendering unaffected. Flagged for a future cleanup pass; `next build` would currently fail on them, so a production build pass will need them resolved first.
3. **Pilot `pendingCorrection` (sourceRef display style)** — unchanged, still awaiting your decision (new M1 notes follow the pilot display convention; manifests carry the dual mapping).

**M1 is complete. Stopping here per instruction — M2 (Nucleotides, Purine salvage, Lac operon, Eukaryotic gene organization, RNA processing, Translation) awaits your go-ahead.**
