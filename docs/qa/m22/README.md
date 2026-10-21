# M22 — viral-structure-genetics · QA Evidence

Topic: **Viral Structure & Genetics** (Microbiology, 22/39 — the VIROLOGY banner
opens)
Route: `/usmle/viral-structure-genetics` · Visual: **1 new registry visual** —
`viral-structure-map` (the 4 architecture panels + the 4 genetic-exchange
cards + the naked-genome/envelope rules strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Defect found and fixed (real, documented)

- **Mobile 5px overflow** (first run): long slash-joined roster tokens in
  `core.keyIdea` (e.g. `retro/toga/flavi/corona/hepe/calici/pico`) are
  unbreakable in CSS and overflowed the 242px keyIdea flex child
  (paragraph scrollWidth 305 > 242; text-node right edge 394.8 > viewport
  390). Located by DOM bisect (hide-section sweep → text-node range
  measurement). **Fix:** slash-chains rewritten in comma form (the source's
  own roster style) in keyIdea, the reassortment mechanism label, and the
  vaccine-related note; re-measured 0px on all 4 passes.
- Visual figure NOT the cause (empirically disproven by hiding the figure —
  scrollWidth unchanged; the visual sits inside the overflow-x-auto block
  wrapper, sw=972 confined to the scroll container).

## Element capture + geometric audit

- `element-crop-v0-{light,dark}.png` — 1102×852 (DOM at 1440×900:
  x=281 y=5114), stdev 26.63/22.41 (real content).
- In-browser getBBox sweep: 85 text elements · viewBox 980×758 · 0
  right/left/bottom edge violations · 0 text-text overlaps · 0
  rect-containment overruns (9 big rects checked).

## VLM paint QA — CLEAN ×2 first pass

- Light **CLEAN**, dark **CLEAN** (anti-code guard round 1 — no invalid
  outputs).

## Source resolution

- Both pages pure vector (pdfimages 0 rasters on 181/182) — the first
  M-topic with no copyrighted photos. Banner typo `MICROCIOLOGY—VIROLOGY`
  in the text layer both pages (the VLM census auto-normalized it to
  MICROBIOLOGY — documented VLM-normalization case; text layer is
  authoritative). Genetics-table row labels group before the definitions;
  `Base Spikes`/`plate` interleave; p182's `Viral envelopes` row label emits
  after its own row content; the retro-toga-party mnemonic block emits after
  the indd footer.

## Gates

- evidence **36/36** first pass (pdf 181-182 / books 159-160) · CONTRACT
  GREEN · audit 109 topics / 0 depth failures · tsc 1 baseline · tracker
  synced (109).
