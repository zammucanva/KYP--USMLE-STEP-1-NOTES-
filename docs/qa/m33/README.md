# M33 — protein-synthesis-inhibitors QA evidence (durable)

**Topic:** Protein Synthesis Inhibitors: 30S, 50S & Beyond (Microbiology — Antimicrobials, pdf 209-211 / book 187-189)
**Commit scope:** note `src/lib/kyp/usmle/notes/protein-synthesis-inhibitors.ts` (registered in `notes/index.ts`) · registry visual `ribosome-target-map` (micro.tsx + registry.tsx) · manifest + visual-inventory (gen_m33_json.py) · chapter flip 33/39 · tracker 120.

## Census (machine)
- `pdfimages -list` on p209/p210/p211: **0 rasters each — pure text pages**. The entire translation figure prints in the text layer on book 187 (the 70S/30S/50S labels, E/P/A sites, the mRNA thread 5´-A-U-G-C-A-U-G-A-U-3´, the UGA stop, and the five drug-door labels) — the registry visual is an original KYP vector redraw of it.

## Source-fidelity notes (documented, carried verbatim in note-block tables)
- The source's own margin typo `ccel (sell)` for `cell (sell)` on book 187 (raw line 27, the Buy-at-30 mnemonic line) — preserved as printed in the table, typo documented.
- Banner typo `MICROCIOLOGY—ANTIMICROCIALS` on all three pages; `SEC TION II` split print on all three.
- Figure glyph emission order (raw layer, non-reading): 70S/30S/50S labels first (29-38), Initiation (41-63), A-site/Elongation with interleaved drug labels (69-131), Translocation + the macrolides/clindamycin label last (131-136); the aminoglycosides card emits after the figure (138-161) with its `Mean GNATS` margin note.
- The source's own mnemonics (`Buy at 30`, `Mean GNATS`, `Teratocyclines`, `macroslides`, `MACRO`) carried ONLY inside the verbatim tables (E38 precedent) — omitted from the visual and the KYP memory layer (originals: ASSEMBLE·DELIVER·WELD·SLIDE / O2 OR NO GO / CHELATE AND STARVE / THE UNGLUCURONIDATED BABY).
- Polymyxins mechanism carries the C1-control-prefixed arrows (normalizer strips them, as on M32's carbapenems line).

## Gates (machine, true exit codes)
- `usmle:sync` — tracker 120; `usmle:validate` — **CONTRACT GREEN**; `usmle:evidence` — **3432/3432, 0 failed** (M33 adds 52, all verified FIRST RUN); `usmle:audit` — **120 topics, 0 depth failures**; `tsc --noEmit` — **1 = the documented next.config.ts baseline only**.
- Manifest: visualIds `["ribosome-target-map"]`, mechanismIds `["translation-stage-doors","uptake-selectivity-rules"]`, 2 kypExtensions, productionStatus pilot-complete.

## Real defects found and fixed (2 rounds)
1. **Stale route cache**: `/usmle/protein-synthesis-inhibitors` 404'd after registration — the dev server's generate-params cache was stale; a dev-server restart resolved it (200). Documented as an environment quirk, not a code defect; the committed code was correct.
2. **getBBox audit (first visual round)**: 1 overlap (the standalone 70S caption vs the ② AMINOACYL-tRNA ATTACHMENT panel title) + 1 edge (the footer's second line exceeded the viewBox right edge). Fixed: the two 70S caption lines collapsed into one line at a separated y; the footer reflowed to three lines. Re-audit: **86 texts, 0/0/0**.

## Browser QA (machine-measured, 4 passes)
- `full-desktop-light/dark.png`, `full-mobile-light/dark.png` — theme class verified BEFORE each capture; **0px horizontal overflow on all four passes**; page title verified (the stale-cache round was caught by exactly this title check and is documented above).

## VLM paint QA (glm-4.6v, anti-code guard)
- `vlm-light.txt` / `vlm-dark.txt` — **VERDICT: CLEAN ×2** (on the 1110×998 true-DOM element crops; run twice — before and after the bbox fixes; both CLEAN).

## Files in this directory
source-extract-p209/210/211.txt (layout-mode extracts) · full-{desktop,mobile}-{light,dark}.png · element-rect.json · element-crop-v0-{light,dark}.png · bbox-audit.json · vlm-light.txt · vlm-dark.txt · README.md (this file).
