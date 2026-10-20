# M3 — special-culture-requirements · QA Evidence

Topic: **Special Culture Requirements** (Microbiology, 3/39)
Route: `/usmle/special-culture-requirements` · Visual: **1 new registry visual** —
`bug-media-matching-map` (three medium-job panels: enrich/select/indicate + the
10-row bug-to-medium directory with job chips).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-bug-media-matching-map-{light,dark}.png` — 1102×877 (DOM-measured at
  x=281 y=3186), stdev 25.20/23.21

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: all 4 classes PASS · dark: all 4 classes PASS — zero defect rounds,
  zero fixes needed.

## Gates (this batch)

- Evidence: 15/15 quotes machine-verified (pdf 146 / book 124) first run.
  VLM census resolved the two ambiguous rows (Brucella row: media cell = BCYE,
  contents cell = the FA mnemonic; Fungi row: contents cell = the FA mnemonic;
  C diphtheriae + M tuberculosis rows: blank contents cells).
- validate: CONTRACT GREEN · audit 90/0 · evidence 2537/2537 · tsc 1 baseline.
- Census: p146 is a PURE VECTOR page (pdfimages empty — no printed figures);
  the single source visual is the directory table, redrawn job-organized.
  One code fix during the batch: null-match guard on the empty contents rows
  (`(r.note.match(...) || [""])[0]`) — a crash-risk catch before render.
- FA's printed mnemonics ('The Ella siblings…'; "Sab's a fun guy!") — quoted
  for verification, carried verbatim in the table block only; NOT reproduced
  in the visual.
