#!/usr/bin/env python3
"""PUBH9 roc-precision-accuracy — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh9/ (the promotion step owns
content/). Source: FULL pdf page 283 / book 261 (Part 1) — the topic owns the
WHOLE page, which carries TWO blocks: (1) "Receiver operating characteristic
curve" — TWO verbatim body paragraphs ("ROC curve demonstrates how well a
diagnostic test can distinguish between 2 groups (eg, disease vs healthy).
Plots the true-positive rate (sensitivity) against the false-positive rate
(1 – specificity)." / "The better performing test will have a higher area
under the curve (AUC), with the curve closer to the upper left corner.") plus
the ROC FIGURE (pure vector): a square plot whose y-axis label "TP rate
(sensitivity)" prints ROTATED 90° (reading bottom-to-top), whose x-axis label
prints "FP rate (1 – speciﬁcity)" (fi ligature U+FB01 — the body text spells
"specificity" plain), with a "1" at the top of the y-axis and a "1" at the
right end of the x-axis as the ONLY axis numbers (NO origin "0", NO ".5"
ticks — pinned by the text layer + the vector tick marks + the 200dpi VLM
crop; the 120dpi full-page VLM pass over-read an origin "0" and is outvoted
3-to-1), and THREE traces: the chance DIAGONAL (blue #4d7cbe, dashed 6-3)
labeled "No predictive value (AUC = 0.5)" (blue, printed ROTATED ~42°
running parallel above the diagonal — PyMuPDF reads it as ONE span with
direction (0.741, −0.671)); the IDEAL TEST trace (pink/mauve #c978a1,
dashed 6-3, rising vertically up the left edge, rounding the corner, running
along the top to (1,1)) labeled "Ideal test (AUC = 1)" (pink, horizontal, at
the top of the plot); and the ACTUAL TEST curve (gray #939598, solid,
concave, bowing toward the upper-left corner, two bezier segments origin to
(1,1)) labeled "Actual test (0.5 < AUC < 1)" (dark gray #6d6e71, typeset on
a CURVED BASELINE along the curve — PyMuPDF shows per-character direction
vectors rotating from ~74° at the "A" to ~32° at the "1)", which is why the
raw text layer shatters it into the jumbled fragments "Act"/"ua"/"l te"/"s"
+ "t (0"/".5"/"<"/"UC"/"<A"/"1)"). The plot shades the region above the
diagonal light lavender (#f1e6f2) and below it light blue (#e7f6fd) and
prints a small double-headed dark-gray arrow (#6d6e71) in the wedge between
the ideal trace and the actual curve; the axes are tan (#a69a84) with tiny
end ticks and NO arrowheads; a tiny slate-blue Rx-style vector icon
decorates the lower right of each figure (not redrawn).
(2) "Precision vs accuracy" — TWO sub-blocks and the FOUR-TARGET FIGURE
(pure vector): "Precision (reliability)" (MyriadPro-Semibold #165d7e with
FIRST AID'S OWN RED LETTERS #c04d49 — the "re" of "Precision" and of
"reliability"; the "re" of "reproducibility" inside the first definition
line prints red bold #b82837) carrying "The consistency and reproducibility
of a test." / "The absence of random variation in a test." / "Random error ↓
precision in a test." / "↑ precision → ↓ standard deviation." / "↑ precision
→ ↑ statistical power (1 − β)." and "Accuracy (validity)" (red "A" of
"Accuracy", red "a" of "validity") carrying "The closeness of test results
to the true values." / "The absence of systematic error or bias in a test."
/ "Systematic error ↓ accuracy in a test." The FIGURE prints FOUR targets
in ONE horizontal row as TWO pairs — "Accuracy" twice ABOVE (centered over
each pair, tan bracket connectors dropping to a High/Low word over EACH
target: High left, Low right within both pairs) and "Precision" twice BELOW
(brackets rising to a High/Low word under each target: the LEFT pair both
High, the RIGHT pair both Low); each target is three concentric filled
circles (pale tan #e6e0d9 outer r≈35, darker tan #d5ccc1 middle r≈21.5,
olive #b8ae9a bullseye r≈7) with FIVE teal dart dots (#3a899b, r≈3.5):
T1 tight cluster centered on the bullseye; T2 tight cluster off-center to
the upper left (bullseye empty); T3 scattered but centered; T4 scattered
AND off-center to the upper left — all four accuracy × precision
combinations present.
CENSUS (pdfimages): ZERO raster images — pure text + two pure-vector
figures + the indd footer slug. VLM AVAILABLE this session (glm-4.6v, THREE
passes: full page at 120dpi + TWO 200dpi figure crops, staging-pubh9/
vlm-census.txt) + a PyMuPDF vector trace (get_drawings stroke colors, dash
patterns, bezier control points + get_text("dict") span colors and rotation
vectors) as programmatic ground truth — the three trace labels were read
back character-for-character ("No predictive value (AUC = 0.5)", NOT "No
better than chance"), the four-target mapping was confirmed target by
target, and the axis numbering (two "1"s only) was settled against the
120dpi pass's over-read. ADJUDICATIONS: (A) the batch brief paraphrased the
diagonal's label as "No better than chance (AUC = 0.5)" — the PRINT reads
"No predictive value (AUC = 0.5)" (raw fragments + PyMuPDF single-span read
+ both VLM figure passes agree character-for-character; internally
consistent with the page's own vocabulary) — brief corrected to print;
(B) the brief described the precision/accuracy panel as a 2×2 — the PRINT
arranges the same four combinations as ONE row of four targets in two pairs
(accuracy High/Low within each pair; precision High pair left, Low pair
right; "Accuracy" above each pair, "Precision" below) — the KYP visual
re-arranges it as a TRUE 2×2 matrix (accuracy columns × precision rows;
layout KYP's, every printed label preserved, the print's arrangement
documented); (C) the printed axes number only the two "1"s — the KYP redraw
adds 0/.5/1 ticks for readability, documented; (D) the brief's block
descriptions otherwise matched the print exactly — no correction needed.
Printed quirks carried + documented: "SEC TION II" header-space artifact
(known, as-is); small-caps artifact "EPIDEmIOLOGY AND BIOSTATISTICS" in the
running-header banner (printed ONCE — running header only; no in-body
ribbon on this mid-subsection page); the ROC figure's rotated/curved labels
extract as jumbled fragments in jumbled order with the indd footer slug
interleaved mid-figure (evidence ranges quote the fragments in raw
extraction order; label identities pinned by the PyMuPDF span read + the
VLM passes); the quadrant panel's labels interleave across the two label
groups in the raw layer; the en-dash (U+2013) in "(1 – specificity)" vs the
minus (U+2212) in "(1 − β)"; the fi ligature "speciﬁcity" in the x-axis
label only; C1 control bytes (Wingdings3 spans) around every ↑↓→ arrow,
stripped for display with arrows carried. Nothing is reproduced: both
figures are ORIGINAL_KYP_REDRAW records (sv1 sv2) implemented together in
ONE registry visual (roc-precision-map, RocPrecisionMap in
visuals/pubhealth-p9.tsx, viewBox 0 0 1102 1180); both text blocks are
additionally carried VERBATIM in the note (blocks[1] text block + blocks[2]
table block). DrugCards: none — the page prints statistics, not drugs
(folded by absence; the clinical anchors — biomarker comparison, assay
reproducibility, device calibration — are carried in the note's clinical
block)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 434 and pages[-1].strip() == "": pages.pop()
L = {283: pages[282].split("\n")}
P = {283: norm(pages[282])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Block 1 body, paragraph 1 — the ROC definition: how well a diagnostic test can distinguish between 2 groups (eg, disease vs healthy); plots the true-positive rate (sensitivity) against the false-positive rate (1 – specificity) — en dash as printed", rng(283, 1, 5), [283]),
    ("Block 1 body, paragraph 2 — the printed comparison rule: the better performing test has a higher area under the curve (AUC), with the curve closer to the upper left corner", rng(283, 6, 8), [283]),
    ("The ROC figure's ideal-test label (pink #c978a1 in the print, horizontal at the top of the plot) plus the '1' that marks the top of the y-axis — one of only TWO axis numbers the figure prints", rng(283, 10, 12), [283]),
    ("The actual-test label's leading fragments in RAW extraction order — 'Act'/'ua'/'l te'/'s': the print typesets 'Actual test (0.5 < AUC < 1)' on a CURVED baseline along the gray curve (per-character rotation, ~74° to ~32°), which shatters the label into fragments; identity pinned by the PyMuPDF span read + both VLM figure passes", rng(283, 14, 17), [283]),
    ("Block 1's title — 'Receiver operating characteristic curve' (navy MyriadPro-Bold #004b6c, PyMuPDF span color)", rng(283, 19, 20), [283]),
    ("Page identity + the rotated y-axis label — book page 261, the 'SEC TION II' header-space artifact (known, carried as-is), the running-header banner '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' with its small-caps 'm' artifact (printed ONCE on this mid-subsection page — running header only, no in-body ribbon), the y-axis label 'TP rate (sensitivity)' (printed rotated 90°, reading bottom-to-top — extracts here in jumbled order), and the left running-header word PUBLIC HEALTH SCIENCES", rng(283, 22, 30), [283]),
    ("The rotated labels' fragments, part 1 (raw order) — '.5'/'t (0'/'<'/'UC'/'<A'/'1)' reassemble to '(0.5 < AUC < 1)' (the actual-test label's tail, ascending along the curve) and '.5)'/'0'/'C=' complete '(AUC = 0.5)' — pinned by bbox + PyMuPDF + the VLM crop pass", rng(283, 32, 43), [283]),
    ("The rotated labels' fragments, part 2 (raw order, reading upward) — 'lue'/'va'/'e'/'tiv'/'(AU'/'ic'/'red'/'p'/'No' reassemble to 'No predictive value (AUC = 0.5)', the chance diagonal's label (blue #4d7cbe in the print, rotated ~42°, parallel above the diagonal — PyMuPDF reads it as ONE span, direction (0.741, −0.671))", rng(283, 45, 57), [283]),
    ("The x-axis label 'FP rate (1 – speciﬁcity)' — with the fi LIGATURE (U+FB01) as printed in the figure (the body text spells 'specificity' plain) — plus the '1' marking the right end of the x-axis, the figure's only other axis number (no origin '0', no '.5' ticks: text layer + vector tick marks + the 200dpi VLM crop agree)", rng(283, 59, 61), [283]),
    ("Block 2's title and the precision sub-block — 'Precision vs accuracy' (navy heading), the sub-block title 'Precision (reliability)' (with First Aid's OWN red letters: 're' of Precision, 're' of reliability — PyMuPDF span #c04d49), and both definition lines ('The consistency and reproducibility of a test.' with the red-bold 're' of reproducibility; 'The absence of random variation in a test.')", rng(283, 63, 67), [283]),
    ("The precision sub-block's three consequence lines, verbatim with the printed arrows (C1 control bytes stripped, arrows carried) — 'Random error ↓ precision in a test.' / '↑ precision → ↓ standard deviation.' / '↑ precision → ↑ statistical power (1 − β).' (true minus U+2212 and Symbol-font β as printed)", rng(283, 69, 71), [283]),
    ("The accuracy sub-block, verbatim — 'Accuracy (validity)' (with First Aid's OWN red 'A' of Accuracy and red 'a' of validity), 'The closeness of test results to the true values.', 'The absence of systematic error or bias in a test.', 'Systematic error ↓ accuracy in a test.'", rng(283, 73, 78), [283]),
    ("The four-target figure's labels, part 1 (raw interleave) — 'Accuracy'/'High'/'High'/'Precision': the raw layer interleaves the two label groups; the print places 'Accuracy' TWICE above (one per target pair) with a High/Low word over each target, and 'Precision' twice below — per-target assignment pinned by bbox + PyMuPDF word coordinates + the VLM crop pass", rng(283, 80, 84), [283]),
    ("The indd footer slug — 'FAS1_2026_06-PubHealth.indd 261' — interleaved MID-FIGURE between the two label groups (the known reading-order jumble; page identity, book 261)", rng(283, 86, 86), [283]),
    ("The four-target figure's labels, part 2 (raw interleave) — 'Accuracy'/'Low'/'High'/'High'/'Low'/'Low'/'Low'/'Precision': the print's arrangement is ONE row of four targets in TWO pairs — accuracy High over the left target and Low over the right within EACH pair; precision High under both targets of the LEFT pair and Low under both of the RIGHT pair — all four combinations present (tight+centered, tight+off-center, scattered+centered, scattered+off-center)", rng(283, 88, 100), [283]),
    ("The print footer timestamp — 12/16/25 12:46 PM (page identity, book 261)", rng(283, 102, 102), [283]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"roc-precision-accuracy: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "roc-precision-accuracy", "title": "ROC Curves, Precision, and Accuracy: The Discrimination Plane and the Four Targets",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [283], "bookPages": "261–261"},
    "sourceEvidence": kept, "visualIds": ["roc-precision-map"],
    "mechanismIds": ["auc-geometry", "error-type-split"],
    "kypExtensions": [
        {"id": "roc-landmarks-decoder",
         "summary": "The three-landmark reading of the ROC plane: the chance diagonal as the FLOOR ('No predictive value (AUC = 0.5)' — a test on it distinguishes the 2 groups no better than chance), the upper-left corner path as the CEILING ('Ideal test (AUC = 1)' — TP rate 1 at FP rate 0), and every real test's curve bowing up-left between them ('Actual test (0.5 < AUC < 1)'); plus the KYP readings 'every cutoff is one point on the curve' (sweeping the cutoff walks the point from bottom right toward the upper left) and 'AUC as ranking' (the probability the test ranks a random diseased person above a random healthy one — not printed).",
         "origin": "outside-first-aid", "rationale": "The source prints the two body sentences, the three labeled traces, and the comparison rule; the floor/ceiling/curve landmark grammar, the cutoff-to-point mapping, and the ranking interpretation of AUC are KYP's synthesis.",
         "location": "core.keyIdea MOVE 1 + mechanisms[0] auc-geometry + blocks[3] the decoder list block (LANDMARKS 1–5) + blocks[4] the steps block + the registry visual's Zone A (how-to-read panel + the one-cutoff dot + the AUC-gap arrow)"},
        {"id": "error-family-split",
         "summary": "The two-error-family taxonomy wiring and the target grammar: RANDOM error degrades PRECISION (reliability — consistency and reproducibility), with the printed statistical shadows (↑ precision → ↓ standard deviation; ↑ precision → ↑ statistical power (1 − β)); SYSTEMATIC error/bias degrades ACCURACY (validity — closeness to the true values); on the printed targets, TIGHTNESS of the dart cluster = precision and CENTEREDNESS on the bullseye = accuracy, graded independently across all four combinations (tight+centered, tight+off-center, scattered+centered, scattered+off-center).",
         "origin": "outside-first-aid", "rationale": "The source prints the definitions, the four arrow lines, and the four targets; the scatters-vs-shifts grammar, the tight/centered grading rule, and the independence framing are KYP's organization.",
         "location": "core.why + core.keyIdea MOVE 2 + mechanisms[1] error-type-split + blocks[3] (ERROR FAMILIES 1–2) + blocks[5] the compare block + the registry visual's Zone B (2×2 grid, per-cell error chips, printed-lines strip)"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the two-curve AUC comparison stem, the on-the-diagonal AUC 0.5 stem, the consistent-but-miscalibrated device stem, the scattered-but-centered analyzer stem with the ↓SD/↑power follow-up), 4 traps (precision vs accuracy themselves; upper-LEFT vs upper-right corner; AUC vs single-cutoff sensitivity; the printed ↓SD/↑power consequences vs the never-printed 'precision improves accuracy'), 3 pivots (curve-description landmark routing; reliability/validity synonym swaps; the consistent-device praise-or-fault pivot), and 8 recall cards covering both blocks and both figures.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions and the figure only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN red-letter hooks — the red 're' of 'Precision', 'reliability', and 'reproducibility' (pREcision = REliability = REproducibility) and the red 'A'/'a' of 'Accuracy'/'validity' (Accuracy = vAlidity), printed in the block (#c04d49 titles, #b82837 body) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim table block, and the note header; plus THREE KYP originals, marked as such: 'TRUE UP, FALSE FLAT' (the ROC axes), 'TIGHT = PRECISE, CENTERED = ACCURATE' (the target reading), and 'RANDOM SCATTERS, SYSTEMATIC SHIFTS' (the error families).",
         "origin": "outside-first-aid", "rationale": "The red-letter highlighting is the source's own (PyMuPDF span colors + VLM-confirmed, attributed, not counted as KYP's); no margin mnemonic prints anywhere on pdf 283 (pdfimages + VLM census, staging-pubh9/vlm-census.txt); the three ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + blocks[2] the verbatim table block's intro + the visual's KYP-hook note"},
        {"id": "clinical-and-boundary-layer",
         "summary": "The clinical anchor layer: where the page's two geometries appear on the wards — biomarker head-to-head comparison by ROC/AUC (the printed comparison rule as the vignette sentence), assay reproducibility as precision in the lab (repeat-measurement stems with the ↓SD/↑power consequences), and device calibration/bias as accuracy (the consistently-wrong cuff) — plus the boundary framing (single-cutoff sensitivity/specificity/PPV/NPV and the cutoff distributions are book 260 — diagnostic-test-performance; LR+ = TP rate/FP rate is book 259 — the ROC axes as one number) and the miniCase (the microRNA panel vs CA 19-9 ROC vignette routed to the higher-AUC/closer-corner rule against AUC-as-sensitivity, diagonal-as-specificity, swapped-axis, and AUC-as-proportion distractors).",
         "origin": "outside-first-aid", "rationale": "The clinical settings, the repeat-measurement vignettes, the boundary framing, and the miniCase with its distractors are KYP's design, flagged as such; the printed page itself is method-level.",
         "location": "clinical block + usmle.miniCase + usmle.patterns + related"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 283 / book 261, carrying TWO blocks — 'Receiver operating characteristic curve' (two verbatim body paragraphs + the pure-vector ROC figure) and 'Precision vs accuracy' (two sub-blocks + the pure-vector four-target figure), all carried in the note (blocks[1] text block verbatim; blocks[2] table block verbatim; the figure labels quoted throughout). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (glm-4.6v, THREE passes: full page at 120dpi + TWO 200dpi figure crops, staging-pubh9/vlm-census.txt) + a PyMuPDF vector trace as programmatic ground truth (get_drawings stroke colors/dash patterns/bezier control points; get_text('dict') span colors and per-character rotation vectors). ADJUDICATIONS (all reads agree): (A) the diagonal's label prints 'No predictive value (AUC = 0.5)' — the batch brief's paraphrase 'No better than chance (AUC = 0.5)' is corrected to print (raw fragments 'No/p/red/ic/tiv/e/va/lue/(AU/C=/0/.5)' + the PyMuPDF single-span read + both VLM figure passes agree character-for-character); (B) the four-target panel prints ONE row of four targets in two pairs ('Accuracy' above each pair with a High/Low word over each target, 'Precision' below with High/High under the left pair and Low/Low under the right) — the KYP visual re-arranges the same four combinations as a TRUE 2×2 (accuracy columns × precision rows; layout KYP's, every printed label preserved, the print's arrangement documented in the visual footer); (C) the printed axes number only two '1's (top of the y-axis, right end of the x-axis — no origin '0', no '.5' ticks); the 120dpi VLM pass over-read an origin '0' and is outvoted by the text layer, the vector tick marks, and the 200dpi crop pass; the KYP redraw adds 0/.5/1 ticks for readability, documented on the visual; (D) the print's rotated/curved figure labels ('TP rate (sensitivity)' rotated 90°; 'No predictive value (AUC = 0.5)' rotated ~42°; 'Actual test (0.5 < AUC < 1)' on a curved baseline) are redrawn as HORIZONTAL text with leader lines per the KYP visual system, and the print's double-headed ideal-vs-actual arrow is redrawn as KYP's labeled 'AUC gap' arrow. Quirks carried + documented: 'SEC TION II' header-space artifact (known, as-is); small-caps artifact 'EPIDEmIOLOGY AND BIOSTATISTICS' in the running-header banner (printed ONCE — running header only; no in-body ribbon on this mid-subsection page); the ROC figure's rotated/curved labels extract as jumbled fragments in jumbled order with the indd footer slug interleaved mid-figure (evidence ranges 3-4, 7-8 quote the raw order; label identities pinned by the PyMuPDF span read + the VLM passes); the quadrant labels interleave across the two label groups in the raw layer (evidence ranges 13 and 15); en-dash (U+2013) in '(1 – specificity)' (body + x-axis label) vs true minus (U+2212) in '(1 − β)'; the fi ligature 'speciﬁcity' in the x-axis label only; C1 control bytes (Wingdings3 spans) around every ↑↓→ arrow (stripped for display, arrows carried). Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (auc-geometry, error-type-split), a visual block + verbatim text block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (biomarker comparison, assay reproducibility, device calibration, the boundary), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (diagnostic-test-performance, likelihood-ratios, hypothesis-testing-errors, statistical-distributions — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own red-letter hooks carried attributed + three KYP originals marked), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints statistics, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical anchors are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention shared with staging-pubh1 and staging-pubh6; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh9/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'roc-precision-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's TWO visual assets are both pure-vector figures and are implemented in ONE registry visual (roc-precision-map, RocPrecisionMap in visuals/pubhealth-p9.tsx, viewBox 0 0 1102 1180): the ROC plane as an ORIGINAL_KYP_REDRAW (Zone A — axes with the two printed '1's plus documented 0/.5 ticks, the dashed chance diagonal, the dashed ideal corner trace, the solid actual-test curve bowing toward the upper left corner, all three printed trace labels as horizontal text with leader lines, the shaded AUC, the one-cutoff dot, the labeled AUC-gap arrow, the how-to-read panel, the printed comparison rule) and the four-target panel as an ORIGINAL_KYP_REDRAW (Zone B — the print's one-row-of-two-pairs re-arranged as a 2×2 of accuracy columns × precision rows, three-ring targets with five darts each in the printed patterns, per-cell error chips, the KYP tight/centered hook, and the printed definition + arrow lines strip) — with both text blocks ALSO carried verbatim in the note.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "roc-precision-accuracy", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "roc-precision-accuracy-sv1",
        "sourcePages": {"part": 1, "pdfPages": [283], "bookPages": "261"},
        "visualType": "COMPARISON_FIGURE",
        "visualPurpose": "The receiver operating characteristic curve figure (book 261): the plot that demonstrates how well a diagnostic test can distinguish between 2 groups (eg, disease vs healthy) — TP rate (sensitivity) vs FP rate (1 – specificity), with the chance diagonal, the ideal-test corner, the actual-test curve, and the AUC comparison rule for ranking tests",
        "sourceFigureDescription": "PURE VECTOR LINE ART, no raster (pdfimages: zero raster images; geometry pinned by the raw text layer + a PyMuPDF vector trace — exact stroke colors, dash patterns, bezier control points, span colors, per-character rotation vectors — + a 3-pass VLM read: full page 120dpi + two 200dpi crops, staging-pubh9/vlm-census.txt): a square plot with the y-axis label 'TP rate (sensitivity)' printed ROTATED 90° (reading bottom-to-top) and the x-axis label 'FP rate (1 – speciﬁcity)' horizontal below (fi ligature as printed); a '1' at the top of the y-axis and a '1' at the right end of the x-axis as the ONLY axis numbers (small tan vector tick marks at both ends; no origin '0', no '.5' ticks); the region above the diagonal shaded light lavender (#f1e6f2) and below it light blue (#e7f6fd); THREE traces — the chance DIAGONAL (blue #4d7cbe, dashed 6-3, origin to top-right corner) labeled 'No predictive value (AUC = 0.5)' (blue #4d7cbe, printed rotated ~42° running parallel above the diagonal; PyMuPDF reads it as one span, direction (0.741, −0.671)); the IDEAL TEST trace (pink/mauve #c978a1, dashed 6-3 — rising vertically up the left edge from the origin, rounding the corner, running along the top to (1,1)) labeled 'Ideal test (AUC = 1)' (pink #c978a1, horizontal, at the top of the plot); and the ACTUAL TEST curve (gray #939598, solid 1.5pt, two bezier segments — steep rise hugging the left, then flattening along the top to (1,1), concave toward the upper-left corner) labeled 'Actual test (0.5 < AUC < 1)' (dark gray #6d6e71, typeset on a CURVED baseline along the curve with per-character rotation from ~74° to ~32° — the reason the text layer shatters it into the jumbled fragments 'Act/ua/l te/s' + 't (0/.5/</UC/<A/1)'); a small double-headed dark-gray arrow (#6d6e71, two collinear 45° shafts with filled heads) printed in the wedge between the ideal trace and the actual curve; the axes tan #a69a84 with NO arrowheads; a tiny slate-blue Rx-style vector icon at the figure's lower right (decorative, not redrawn).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "roc-precision-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (RocPrecisionMap in visuals/pubhealth-p9.tsx): the plane redrawn with the two printed axis labels (horizontal text — the print rotates the y-axis label 90°), the printed two-'1' axis numbering plus documented 0/.5/1 ticks, the dashed chance diagonal, the dashed ideal corner trace, the solid actual-test curve bowing toward the upper left corner, the shaded area under the curve as the AUC, all three printed trace labels as horizontal text with leader lines, the one-cutoff dot, the labeled AUC-gap arrow (the print's double-headed annotation, KYP-labeled), the how-to-read panel (both printed body sentences quoted verbatim + the KYP readings), and the comparison-rule chip; the figure's semantics are also carried in mechanisms[0] auc-geometry, blocks[1] the verbatim text block, blocks[3] the decoder list (LANDMARKS 1–5), and recall[0-2]",
        "productionStatus": "complete",
        "plannedKypVisualId": "roc-precision-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "roc-precision-accuracy-sv2",
        "sourcePages": {"part": 1, "pdfPages": [283], "bookPages": "261"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The precision-vs-accuracy four-target figure (book 261): the dartboard panel that summarizes the 2×2 of precision (reliability — consistency and reproducibility, destroyed by random error) × accuracy (validity — closeness to the true values, destroyed by systematic error or bias), with all four combinations drawn",
        "sourceFigureDescription": "PURE VECTOR LINE ART, no raster (pdfimages: zero raster images; geometry pinned by the raw text layer + a PyMuPDF vector trace + the 200dpi VLM crop pass, staging-pubh9/vlm-census.txt): FOUR targets printed in ONE horizontal row as TWO pairs — the word 'Accuracy' prints TWICE above (centered over each pair, in 8pt MuseoSansCond-300) with tan/olive bracket connector lines (#b8ae9a) dropping to a High/Low word positioned over EACH target (High over the left target, Low over the right, within both pairs), and the word 'Precision' prints TWICE below with mirrored brackets rising to a High/Low word under each target (the LEFT pair both High, the RIGHT pair both Low). Each target is three concentric filled circles (pale tan #e6e0d9 outer r≈35, darker tan #d5ccc1 middle r≈21.5, olive #b8ae9a bullseye r≈7) with FIVE teal dart dots (#3a899b, r≈3.5): target 1 — tight cluster centered on the bullseye; target 2 — tight cluster off-center to the upper left (bullseye empty, cluster at the ring's edge); target 3 — scattered widely but distributed around the center; target 4 — scattered AND off to the upper left. So all four accuracy × precision combinations are present, each target carrying one accuracy word above and one precision word below. The block's text sub-blocks print alongside: 'Precision (reliability)' with First Aid's OWN red letters (the 're' of Precision and of reliability, #c04d49; the red-bold 're' of 'reproducibility' in the first definition line, #b82837) and 'Accuracy (validity)' with the red 'A'/'a' — PyMuPDF span colors. The raw text layer interleaves the two label groups and interleaves the indd footer slug mid-figure (documented quirks).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "roc-precision-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (RocPrecisionMap in visuals/pubhealth-p9.tsx): the print's one-row-of-two-pairs arrangement re-drawn as a TRUE 2×2 matrix — accuracy High/Low columns (the ACCURACY (VALIDITY) super-header with the printed definition lines and the systematic-error annotation) × precision High/Low rows (the PRECISION (RELIABILITY) label column with the High/Low chips, the random-error annotation, and the KYP tight/centered hook) — each cell a three-ring target with five darts in the printed pattern plus a caption card naming the combination and its error family, with the printed definition and arrow lines carried verbatim in the bottom strip ('Random error ↓ precision in a test.' / '↑ precision → ↓ standard deviation.' / '↑ precision → ↑ statistical power (1 − β).' / 'Systematic error ↓ accuracy in a test.'); the panel's semantics are also carried in mechanisms[1] error-type-split, blocks[2] the verbatim table block, blocks[5] the compare block, and recall[3-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "roc-precision-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh9"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "roc-precision-accuracy.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "roc-precision-accuracy.json").write_text(
    json.dumps({"topicId": "roc-precision-accuracy", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "roc-precision-accuracy", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 2, "kypOriginals": 0,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets, both pure-vector figures (pdfimages: zero rasters) — the ROC curve figure (sv1: TP rate (sensitivity) vs FP rate (1 – specificity), the dashed chance diagonal labeled 'No predictive value (AUC = 0.5)', the dashed pink ideal corner trace labeled 'Ideal test (AUC = 1)', the solid gray actual-test curve labeled 'Actual test (0.5 < AUC < 1)' bowing toward the upper left corner, two '1's as the only axis numbers) and the precision/accuracy four-target panel (sv2: four three-ring targets with five teal darts each — tight+centered, tight+off-center, scattered+centered, scattered+off-center — 'Accuracy' printed twice above with per-target High/Low words, 'Precision' twice below) — BOTH accounted for as ORIGINAL_KYP_REDRAW records implemented together in ONE registry visual (roc-precision-map, RocPrecisionMap in visuals/pubhealth-p9.tsx, viewBox 0 0 1102 1180): Zone A redraws the ROC plane (horizontal-text label redraws of the print's rotated/curved labels, documented 0/.5/1 ticks, the shaded AUC, the one-cutoff dot, the labeled AUC-gap arrow, the printed comparison rule) and Zone B re-arranges the print's one-row-of-two-pairs panel as a TRUE 2×2 of accuracy columns × precision rows with per-cell error chips and the printed definition/arrow lines strip; nothing is reproduced, and both text blocks are additionally carried verbatim in the note (blocks[1] text block, blocks[2] table block). Census: zero raster images (pdfimages); VLM available this session — THREE glm-4.6v passes (full page 120dpi + two 200dpi figure crops, vlm-census.txt) plus a PyMuPDF vector trace as programmatic ground truth (stroke colors, dash patterns, bezier control points, span colors, per-character rotation vectors). ADJUDICATIONS: (A) the diagonal's label prints 'No predictive value (AUC = 0.5)' — the batch brief's paraphrase 'No better than chance (AUC = 0.5)' corrected to print (raw fragments + PyMuPDF single-span read + both VLM figure passes agree character-for-character); (B) the print arranges the four targets as ONE row of two pairs — the KYP visual re-arranges the same four combinations as a 2×2 (layout KYP's, every printed label preserved, documented in the visual footer); (C) the printed axes number only two '1's — the KYP redraw adds 0/.5/1 ticks for readability (documented on the visual); the 120dpi VLM pass's over-read of an origin '0' is outvoted by the text layer + vector tick marks + the 200dpi crop pass. FULL single page (pdf 283 / book 261), mid-subsection (the banner prints once — running header only). STAGED under .usmle-pipeline-cache/staging-pubh9/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH9 manifest + inventory staged: {OUT}/manifests/roc-precision-accuracy.json, {OUT}/visual-inventory/roc-precision-accuracy.json")
print(f"roc-precision-accuracy: evidence {len(kept)}/{len(E1)} verified")
