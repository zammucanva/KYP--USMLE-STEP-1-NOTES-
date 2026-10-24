# M34 — dna-rna-folate-inhibitors QA evidence (durable)

**Topic:** DNA/RNA & Folate Pathway Inhibitors (Microbiology — Antimicrobials, pdf 212-213 / book 190-191)
**Commit scope:** note `src/lib/kyp/usmle/notes/dna-rna-folate-inhibitors.ts` (registered in `notes/index.ts`) · registry visual `folate-quinolone-map` (micro.tsx + registry.tsx) · manifest + visual-inventory (gen_m34_json.py) · chapter flip 34/39 · tracker 121.

## Census (machine)
- `pdfimages -list` on p212/p213: **0 rasters each — pure text pages**. The folate pathway figure prints entirely in the text layer (the two enzyme labels, the four intermediates, the downstream products panel) — the registry visual is an original KYP vector redraw of it.

## Source-fidelity notes (documented, carried verbatim in note-block tables)
- Figure glyph emission interleaves among the cards (raw layer): 'Sulfonamides, dapsone' + the synthase label at 37-42 between the sulfa and dapsone cards; 'PABA + Pteridine' at 58 inside the dapsone ADVERSE EFFECTS block; the gate-2 labels at 63-69; the downstream products panel 97-107 AFTER the indd footer (page-end emission).
- On p213 the book-page number '191' prints MID-PAGE (raw line 41, between the FQ resistance block and its margin notes); the metronidazole margin (GET GAP + the diaphragm rule) interleaves INTO the CLINICAL USE text (raw 80-86).
- The source's own margin mnemonics ('TMP Treats Marrow Poorly' 93; 'Fluoroquinolones hurt attachments to your bones' 47-48; 'Dapto-myo-skin' 66-69) carried ONLY inside the verbatim tables (E38 precedent) — omitted from the visual and the KYP memory layer (originals: TWO GATES ONE FACTORY / CHARTER UNDER 18 RUPTURE OVER 60 / THE SURFACTANT SPONGE / METRO RIDES LOW).

## Gates (machine, true exit codes)
- `usmle:sync` — tracker 121; `usmle:validate` — **CONTRACT GREEN**; `usmle:evidence` — **3465/3465, 0 failed** (M34 adds 33, all verified FIRST RUN); `usmle:audit` — **121 topics, 0 depth failures**; `tsc --noEmit` — **1 = the documented next.config.ts baseline only**.
- Manifest: visualIds `["folate-quinolone-map"]`, mechanismIds `["sequential-folate-blockade","nonribosomal-doors"]`, 2 kypExtensions, productionStatus pilot-complete.

## Environment events (documented, not code defects)
- A resource exhaustion event (`pthread_create: Resource temporarily unavailable`) killed Chrome during the first QA attempt — 84 processes had accumulated; cleanup (close sessions, kill stale chrome/agent-browser) restored operation (16 processes). The dev server was proactively restarted before QA (the M33 stale-route-cache lesson).
- The sed-generated QA script's `startsWith` aria-label check mismatched ("DNA/RNA and..." vs the visual's "DNA, RNA and...") — the audit re-ran with the corrected selector; the visual itself needed no fixes.

## Browser QA (machine-measured, 4 passes)
- `full-desktop-light/dark.png`, `full-mobile-light/dark.png` — theme class verified BEFORE each capture; **0px horizontal overflow on all four passes**; page title verified.

## getBBox + VLM paint QA
- `bbox-audit.json`: **87 texts, 0 overlaps, 0 overruns, 0 edges** (first render; the only fix was the audit script's own selector).
- `element-rect.json` → true-DOM crops 1110×998 (`element-crop-v0-light/dark.png`).
- VLM (glm-4.6v, anti-code guard): `vlm-light.txt` / `vlm-dark.txt` — **VERDICT: CLEAN ×2 first pass**.

## Files in this directory
source-extract-p212/213.txt (layout-mode extracts) · full-{desktop,mobile}-{light,dark}.png · element-rect.json · element-crop-v0-{light,dark}.png · bbox-audit.json · vlm-light.txt · vlm-dark.txt · README.md (this file).
