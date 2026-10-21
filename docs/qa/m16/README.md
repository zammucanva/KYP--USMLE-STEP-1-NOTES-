# M16 — systemic-mycoses · QA Evidence

Topic: **Systemic Mycoses: Histoplasma, Blastomyces, Coccidioides, Paracoccidioides**
(Microbiology, 16/39 — MYCOLOGY banner begins)
Route: `/usmle/systemic-mycoses` · Visual: **1 new registry visual** —
`systemic-mycoses-map` (the dimorphic-rule strip + the 4-disease × 5-column grid).

## Machine-measured browser QA (4 passes, re-run after fixes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-systemic-mycoses-map-{light,dark}.png` — 1102×658 (DOM at 1440×900:
  x=281 y=4546), stdev 26.23/23.73 (real content).

## VLM paint QA — 1 real-defect fix round + 1 evidenced false-positive disproof

- Round 1 light: CLEAN. Round 1 dark: DEFECTS FOUND (3 claims):
  1. "Content clipping in the rightmost (NOTES) column" — REAL DEFECT, found
     only by the VLM: the NOTES column (90 units) was too narrow for its
     wrapped cells, whose text overran the row rect into the panel border
     region (the viewBox-edge and 1.5u-graze sweeps had passed it — an audit
     blind spot now covered by an ENHANCED sweep: panel-inner-edge 942 and
     row-rect-right checks). FIXED: columns rebalanced (NOTES 90→138; the
     other four narrowed accordingly); post-fix enhanced audit **0/0/0**
     (viewBox / panel-edge / row-right + graze).
  2. "Typos (bradly, excavation)" — the "bradly" was the VLM misreading the
     5.0px rendering of FA's 'Blasto buds broadly' mnemonic that had LEAKED
     into the visual's NOTES cells (a rules violation the round-1 read
     exposed); FIXED by a facts-only NOTES copy (mnemonic-only cells now show
     an em-dash; the mnemonics stay table-block-only). "excavation" is the
     source's own 'archeological' spelling carried verbatim (documented).
  3. "Contrast issues with body and footer text" — DISPROVEN BY COMPUTED
     CONTRAST: body text (muted-foreground, Lab 95.41) on the alternating row
     fill (secondary, dark Lab 11.76) = **14.7:1** (requirement 4.5:1).
- Round 2 light: **CLEAN**. Round 2 dark: **CLEAN**.

## Gates

- evidence **14/14** first pass (pdf 171 / book 149) · CONTRACT GREEN (after
  the validator caught 2 format violations — sourceRef pp-format + an
  out-of-vocabulary visualType, both fixed) · audit 104 topics / 0 depth
  failures · tsc 1 documented baseline error · tracker synced (104 topics).
