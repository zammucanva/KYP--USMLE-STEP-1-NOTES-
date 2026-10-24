# M32 — cell-wall-inhibitors QA evidence (durable)

**Topic:** Cell Wall Inhibitors: Penicillins, Cephalosporins, Carbapenems, Vancomycin (Microbiology — Antimicrobials, pdf 206-208 / book 184-186)
**Commit scope:** note `src/lib/kyp/usmle/notes/cell-wall-inhibitors.ts` (registered in `notes/index.ts`) · registry visual `beta-lactam-family-map` (micro.tsx + registry.tsx) · manifest + visual-inventory (gen_m32_json.py) · chapter flip 32/39 · tracker 119.

## Census (machine)
- `pdfimages -list` on p206/p207: **0 rasters** — pure text (drug-directory cards).
- p208: **exactly one raster** — 188×188 cmyk jpeg, 150 ppi (~1.25 in²). VLM census (m32-vlm-census.ts, glm-4.6v): the clinical photograph of the **vancomycin infusion reaction** (diffuse bright red flushing of the torso), left column beside ADVERSE EFFECTS, carrying the boxed **"A"** marker matching the text-layer superscript (the standalone line-78 "A"). COPYRIGHTED patient photograph → **described-in-text only, never reproduced** (E38/E39 clinical-photo precedent).

## Source-fidelity notes (documented, carried verbatim in note-block tables)
- Chapter banner typo `MICROCIOLOGY—ANTIMICROCIALS` prints on all three pages (raw line 7 each); `SEC TION II` split print (p206/p208 line 3; p207 line 5).
- Margin notes emit at page end in the raw layer: p206 "Use naf…" (raw 87) between the indd footer (85) and the timestamp (89); p207 CAST block (75-77) after the footer (73); p208 vancomycin's resistance content (84-85) AFTER the footer (82) — its heading (80) separated from its content by the footer (physical-order interleave; heading and content carried in field order in the note with the interleave documented).
- The source's own margin typo `pseudomonaz` (book 185, raw line 44, the ceftazidime note) — carried verbatim in the table; all KYP-original content prints `Pseudomonas`.
- Hyphen-drops in the raw layer: `crossreactivity` (207:58), `penicillinbinding` (207:64; 208:49). C1-control-prefixed arrows in the carbapenems mechanism (208:17) — stripped by the normalizer.
- The source's own margin mnemonics (HHEELPSS, LAME, PEcK, HENS PEcK, fox-fur, kill-is-lastin', Lack-a-D-Ala, CAST) are carried ONLY inside the verbatim note-block tables as source provenance (E38 verbatim-table precedent); omitted from the registry visual and the KYP memory layer per the copyright boundary — KYP's original mnemonics (PLAIN-AMPED-ARMORED-ESCORTED / 1⊕·2half-⊝·3BBB·4pseudo·5MRSA / THE TIP SWAP / NEVER ALONE) replace them.

## Gates (machine, true exit codes)
- `usmle:sync` — tracker 119 topics; `usmle:validate` — **CONTRACT GREEN**; `usmle:evidence` — **3380/3380, 0 failed** (M32 adds 50, all verified first run after the rng line-index fix); `usmle:audit` — **119 topics, 0 depth failures**; `tsc --noEmit` — **1 error = the documented next.config.ts baseline only**.
- Manifest: `content/usmle/manifests/cell-wall-inhibitors.json` — visualIds `["beta-lactam-family-map"]`, mechanismIds `["beta-lactam-door-logic","wall-two-doors"]`, 2 kypExtensions, productionStatus pilot-complete.

## Real defects found and fixed (3 rounds, all machine-located)
1. **rng line-index off-by-one** (gen_m32_json.py): the generator census used 1-indexed line numbers against 0-indexed slices — single-line quotes became empty strings → 8 schema violations + 3 evidence failures. Fixed `rng` to `L[pg][a-1:b]`; M31's own numbering was audited and confirmed 0-indexed-correct (its "folate zone" quote matches raw lines 12-14 exactly) — no M31 repair needed.
2. **Mobile 49px overflow** (first QA round): three causes, located by section-hide bisection + container-width chain trace + leaf-node scrollWidth scan: (a) JSX bare `>` parse error 500 → `amoxicillin {'>'} ampicillin`; (b) the three verbatim card tables as 3-column layouts — table 1 min-content 402px at 390 viewport → restructured all three to the 2-column card form with source margin notes as labeled rows; (c) mechanism-flow node labels too long (mechanism 1 section measured 439px) → rewritten to M31 label lengths; (d) keyIdea slash-rosters (`ceftriaxone/cefpodoxime/ceftazidime/cefixime` ≈ 300px unbreakable) → comma-form per the M31 precedent. Also the miniCase `correct: true` flag was missing (validate rule: exactly 1 correct option).
3. Residual 1px mobile overflow after (b)/(c) → the keyIdea comma-form fix closed it to 0px.

## Browser QA (machine-measured, 4 passes)
- `full-desktop-light/dark.png`, `full-mobile-light/dark.png` — theme class verified BEFORE each capture; **0px horizontal overflow** on all four passes; page title verified.
- getBBox paint audit (`bbox-audit.json`): **111 texts, 0 overlaps, 0 overruns, 0 edges**.
- Element rect (`element-rect.json`) → true-DOM crops at 1110×989 (`element-crop-v0-light/dark.png`).

## VLM paint QA (glm-4.6v, anti-code guard)
- `vlm-light.txt` / `vlm-dark.txt` — **VERDICT: CLEAN ×2, first pass after fixes** (overlaps / clipping / contrast / alignment all pass; the p208 census run is additionally CLEAN — see vlm-census-p208.txt).

## Files in this directory
source-extract-p206/207/208.txt (layout-mode extracts) · full-{desktop,mobile}-{light,dark}.png · element-rect.json · element-crop-v0-{light,dark}.png · bbox-audit.json · vlm-light.txt · vlm-dark.txt · vlm-census-p208.txt · README.md (this file).
