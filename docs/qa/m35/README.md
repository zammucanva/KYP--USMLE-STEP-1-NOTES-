# M35 — antimycobacterials QA evidence (durable)

**Topic:** Antimycobacterial Therapy (Microbiology — Antimicrobials, pdf 214-215 / book 192-193)
**Commit scope:** note `src/lib/kyp/usmle/notes/antimycobacterials.ts` (registered in `notes/index.ts`) · registry visual `tb-drug-regimen-map` (micro.tsx + registry.tsx) · manifest + visual-inventory (gen_m35_json.py) · chapter flip 35/39 · tracker 122.

## Census (machine + VLM)
- p214: exactly ONE image pair — a 1×1-pixel cmyk solid stretched behind the MYCOBACTERIAL CELL schematic through a 1621×1323 smooth mask (729B, 150ppi — a light color wash, DECORATIVE). **VLM census (glm-4.6v) confirmed: the schematic is line-art vector (drawn outlines, no photographs), on the beige wash**; the 4-column bordered table confirmed; the source's own NOTES mnemonics quoted verbatim by the VLM.
- p215: pure text (0 rasters).

## Source-fidelity notes (documented, carried verbatim in note-block tables)
- The therapy table's first header word emits as `CACTERIUM` in the raw and layout layers (the MYCOB prefix lost in extraction — the printed page reads MYCOBACTERIUM); documented in the manifest.
- The schematic's rotated rim labels emit split mid-word (`Arab inog ala c` = Arabinogalactan; `Pep tido tan gly can` = Peptidoglycan; `A comp lex f cyl lipid ree lipi s, ds` = a complex of free lipids; `Myc olic acid` = Mycolic acid) with the figure block emitting AFTER the indd footer (raw 92-155).
- The source's own NOTES-column mnemonics (`INH Injures Neurons and Hepatocytes`, `Pronounce "eyethambutol"`) carried ONLY inside the verbatim tables (E38 precedent) — omitted from the visual and the KYP memory layer (originals: FOUR DOORS ONE REGIMEN / PYRIDOXINE PARTNER / INDUCER vs INHIBITOR / RED-GREEN IS THE DOOR).
- C1-control-prefixed arrows on the mechanism rows (normalizer strips them, as on M32/M34).

## Gates (machine, true exit codes)
- `usmle:sync` — tracker 122; `usmle:validate` — **CONTRACT GREEN**; `usmle:evidence` — **3492/3492, 0 failed** (M35 adds 27, all verified FIRST RUN); `usmle:audit` — **122 topics, 0 depth failures**; `tsc --noEmit` — **1 = the documented next.config.ts baseline only**.
- Manifest: visualIds `["tb-drug-regimen-map"]`, mechanismIds `["ripe-four-doors","mycobacteria-therapy-map"]`, 2 kypExtensions, productionStatus pilot-complete.

## Real defects found and fixed (2 rounds)
1. **Mobile 82px overflow**: the keyIdea/rapidReview carried the unbreakable slash chain `atovaquone-proguanil/mefloquine/doxycycline/primaquine/chloroquine` (≈400px) — located by section scrollWidth bisection (section[1] 472/390 → the keyIdea card 382-in-242) and rewritten comma-form (the M32 slash-roster precedent, third recurrence).
2. **getBBox 2 edges**: the synthesis strip's second line and the footer's first line exceeded the viewBox right edge — split into 2 and 3 lines respectively; re-audit **118 texts 0/0/0**.

## Environment events (documented)
- A second resource-exhaustion event (`EAGAIN` at the shell level — process table full at 84 processes after accumulated QA browser sessions). Recovery: `agent-browser close --all` + killing stale chrome processes (84 → 16). **Process-hygiene rule adopted: every QA script run now ends with `agent-browser close --all`** (the QA scripts create timestamped sessions that each hold a Chrome instance alive).

## Browser QA (machine-measured, 4 passes)
- `full-desktop-light/dark.png`, `full-mobile-light/dark.png` — theme class verified BEFORE each capture; **0px horizontal overflow on all four passes** (after the keyIdea fix); page title verified.

## VLM paint QA
- `vlm-light.txt` / `vlm-dark.txt` — **VERDICT: CLEAN ×2** on the 1110×998 true-DOM element crops (first pass after fixes).

## Files in this directory
source-extract-p214/215.txt (layout-mode extracts) · full-{desktop,mobile}-{light,dark}.png · element-rect.json · element-crop-v0-{light,dark}.png · bbox-audit.json · vlm-light.txt · vlm-dark.txt · vlm-census-p214.txt · README.md (this file).
