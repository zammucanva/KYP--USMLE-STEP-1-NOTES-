# M36 — antifungals QA evidence (durable)

**Topic:** Antifungal Agents (Microbiology — Antimicrobials, pdf 216-217 / book 194-195)
**Commit scope:** note `src/lib/kyp/usmle/notes/antifungals.ts` (registered in `notes/index.ts`) · registry visual `antifungal-target-map` (micro.tsx + registry.tsx) · manifest + visual-inventory (gen_m36_json.py) · chapter flip 36/39 · tracker 123.

## Census (machine + VLM)
- p216: exactly ONE raster — the FUNGAL CELL mechanisms-of-action diagram (1087×488 cmyk + 14.9K smask, 150ppi ≈ 7.2×3.3 in). **VLM census confirmed a color-coded schematic** (drug-target lines for terbinafine, azoles, flucytosine, the polyenes with a pore inset, the echinocandins; a small Rx icon) — REDRAWN as the registry visual, never reproduced.
- p217: pure text (0 rasters).

## Source-fidelity notes (documented, carried verbatim in note-block tables)
- The text layer prints `amphoterrible` — authoritative over the VLM census's variant `amphoterrrrible` reading (the M23 text-layer-wins convention, applied again).
- `195` prints mid-page on p217 (raw line 5, between the banner and SEC TION II); the azoles' drug roster prints as a single unbroken line (raw 11) — the chapter's longest single-line drug list.
- The source's own margin mnemonics (`tears holes`, `shake and bake`, `amphoterrible`, `Swish and swallow`, plus the K+/Mg2+ and hydration/liposomal notes) carried ONLY inside the verbatim tables (E38 precedent) — omitted from the visual and the KYP memory layer (originals: ONE STEROL FOUR DOORS / SUPPLEMENT THE TUBULE / THE CYP450 ECHO / CUMULATIVE RETINA).
- Page ownership: book 195's tail (antiprotozoal summary, anti-mite/louse block, chloroquine card) carried verbatim in the book-195 table; M37 (books 196-197) holds the dedicated antiparasitic/antiviral cards.

## Gates (machine, true exit codes)
- `usmle:sync` — tracker 123; `usmle:validate` — **CONTRACT GREEN**; `usmle:evidence` — **3517/3517, 0 failed** (M36 adds 25, all verified FIRST RUN); `usmle:audit` — **123 topics, 0 depth failures**; `tsc --noEmit` — **1 = the documented next.config.ts baseline only**.
- Manifest: visualIds `["antifungal-target-map"]`, mechanismIds `["ergosterol-door-logic","prodrug-activation-tail"]`, 2 kypExtensions, productionStatus pilot-complete.

## Real defects found and fixed (1 round, 2 offenders)
- **Mobile 93px overflow**: two unbreakable chains — the slash roster `Cryptococcus/Blastomyces/Coccidioides/Histoplasma/Candida/Mucor` in mechanism-1's trigger sublabel (→ comma-form) and the arrow chain `lanosterol→ergosterol` in keyIdea/why/labels (→ 'the P-450 converting lanosterol to ergosterol'), plus the keyIdea TAIL slash chains `pyrimethamine-sulfadiazine/suramin/melarsoprol/nifurtimox/stibogluconate` and `permethrin/malathion/ivermectin` (→ comma-form). Fourth recurrence of the unbreakable-chain family (M32 slash rosters, M33 caption, M35 atovaquone chain) — all located by section scrollWidth bisection + leaf-node scan.
- **bbox 1 edge**: the synthesis strip's DOOR line exceeded the viewBox — split into 2 lines; re-audit **123 texts 0/0/0**.

## Browser QA (machine-measured, 4 passes)
- `full-desktop-light/dark.png`, `full-mobile-light/dark.png` — theme class verified BEFORE capture; **0px overflow ×4** after the fixes; page title verified.

## VLM paint QA
- `vlm-light.txt` / `vlm-dark.txt` — **VERDICT: CLEAN ×2** on the 1110×998 true-DOM element crops (first pass after fixes).

## Files in this directory
source-extract-p216/217.txt (layout-mode extracts) · full-{desktop,mobile}-{light,dark}.png · element-rect.json · element-crop-v0-{light,dark}.png · bbox-audit.json · vlm-light.txt · vlm-dark.txt · vlm-census-p216.txt · README.md (this file).
