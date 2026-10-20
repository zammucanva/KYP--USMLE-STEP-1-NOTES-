# M8 — exotoxins-endotoxins · QA Evidence

Topic: **Exotoxins vs Endotoxins** (Microbiology, 8/39 — Basic Bacteriology
banner COMPLETE 8/8)
Route: `/usmle/exotoxins-endotoxins` · Visual: **1 new registry visual** —
`toxin-comparison-map` (11-row axis panel + endotoxin cascade panel +
exotoxin roster by mechanism group + lysers/superantigens panel + the
AB-toxin footnote strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-toxin-comparison-map-{light,dark}.png` — 1102×990
  (DOM-measured at x=281 y=4450), stdev 31.77/27.57

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: CLEAN · dark: CLEAN — zero defect rounds, zero fixes (the M6
  slash-chain lesson and M1 rail lesson both applied at design time).

## Gates (this batch)

- Evidence: 33/33 quotes verified (pdf 151–153 / book 129–131) FIRST RUN —
  the largest evidence set in the M series, built programmatically from raw
  0-based line ranges. Documented quirks: the FA mnemonic printed INSIDE the
  ETEC manifestation cell (table text; carried verbatim in the table block,
  NOT in the visual); the AB-toxin 'a' footnote marker on 9 toxin names +
  standalone (sub-3-char drop covered inline); U+0090 before ↓;
  double-space '→  ↑' arrows; \x8e (U+008E) rendering → in the alpha-toxin
  and superantigen rows; the continuation table's odd-case column headers
  ('toXiN' 'mecHaNism' 'maNiFestatioN'); U+F07D chapter-banner glyph.
- Census: pure vector pages (no content rasters on pdf 152-153; the
  book-129 mechanism diagram is pure vector). TWO diagrams redrawn in the
  one visual; TWO tables carried verbatim as note-blocks.
- validate: CONTRACT GREEN · audit 95/0 · evidence 2642/2642 · tsc 1
  baseline.
