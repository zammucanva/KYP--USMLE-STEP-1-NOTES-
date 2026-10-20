# M11 — mycobacteria · QA Evidence

Topic: **Mycobacteria: Tuberculosis & Leprosy** (Microbiology, 11/39 —
Clinical Bacteriology)
Route: `/usmle/mycobacteria` · Visual: **1 new registry visual** —
`tb-spectrum-map` (the TB progression flowchart redraw with both roads and
the miliary organ list + the virulence/test rail + the leprosy Th1/Th2
spectrum + the 5-species roster).

## Machine-measured browser QA (4 passes, re-run after fixes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-tb-spectrum-map-{light,dark}.png` — 1102×1361
  (DOM-measured at x=281 y=4805), stdev 23.95/21.36 (post-fix)

## VLM paint QA — CLEAN ×2 after 2 real-defect fixes

- Round 1 (light) raised 2 REAL defects, both fixed in code:
  1. OVERLAP — a redundant straight arrow from the Ghon box crossed the
     two branch paths near the >90% box entry (three lines fanning from
     one corner). FIX: removed the straight arrow; the two branch paths
     now originate from a single point (242,162).
  2. CLIPPING — the leprosy panel header (230+ chars at fontSize 9)
     overran the panel's right edge. FIX: split into a 9px title line +
     a 5.6px facts line.
- Round 2: light CLEAN, dark CLEAN; content check independently confirmed
  the flowchart (the ~90%/<10% roads), the four-card rail, the leprosy
  poles, and the five-species roster.
- Transcripts: `vlm-round1-light-defects.txt` (pre-fix),
  `vlm-spectrum-map-{light,dark}.txt` (post-fix), `source-census.txt`
  (200-DPI VLM read resolving the printed flowchart's structure, the two
  p160 micrographs, and the p161 leprosy photos).

## Evidence set

19/19 kept quotes verified (gen_m11_json.py; 2 standalone 'A' markers
dropped sub-3-char by design). The heavily interleaved TB-flowchart label
stream quoted as three physical-order ranges (the '2° tuberculosis' label
between 'Progressive lung disease' and 'Bacteremia'; the miliary organ
list before the PPD/Langhans block; 'Joints and long bones' after
everything; 'PPD ⊕' emitting as a bare 'PPD )' fragment). p160's chapter
banner quoted as emitted (' microbiology—Clinical Bacteriology' — no ▶
glyph, leading space). ▘ bullet glyphs, 'cellmediated' hyphen-drop, curly
quotes, en-dash in M avium–intracellulare documented. PAGE BOUNDARY: pdf
161 shared with M12 per inventory — M11 owns the leprosy subsection; the
Gram-negative lab algorithm tree is M12's content.

## Gates

sync (98 topics) · validate CONTRACT GREEN (2 documented warnings) ·
audit 0 depth failures · evidence 2712/2712 EXIT 0 · tsc 1 baseline error.
