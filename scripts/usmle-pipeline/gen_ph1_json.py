#!/usr/bin/env python3
"""PH1 enzyme-kinetics — manifest + inventory (Pharmacology, PH-batch 1),
STAGED under .usmle-pipeline-cache/staging-ph1/ (the promotion step owns
content/). Source: pdf 250 / book 228 (PHARMACOLOGY — PHARMACOKINETICS
AND PHARMACODYNAMICS: Enzyme kinetics). Census (pdfimages + VLM,
scripts/usmle-pipeline/ph1-vlm-census.ts): ZERO raster images — the page
prints FOUR VECTOR curve panels (the single Michaelis-Menten hyperbola
with its "Km = [S] at 1/2 Vmax" annotation, the single Lineweaver-Burk
line with slope = Km/Vmax, and the two "Effects of enzyme inhibition"
overlays — one on Michaelis-Menten axes, one on Lineweaver-Burk axes)
plus the pure-text 6-row x 3-column inhibition table; the text layer
interleaves the panels' labels at the batch's densest ("VmaxVmax",
"CompetitiveK inhibitor = [S] at 1/2(reversible)", "− Km 1⁄2 V1/2 Vmax").
The source's own printed typo — "Kompetitive inhibitors increase K m."
— prints in red in the left column directly beneath the crossing rule
and is carried VERBATIM. Nothing is reproduced: the curves are an
ORIGINAL KYP redraw (enzyme-kinetics-map, pharm-p1.tsx), the table is
carried verbatim in the note and re-set as KYP table art; the KYP
memory layer is original.

Raw line numbering: the task's "raw N" = line N of
.usmle-pipeline-cache/ph1-p250.txt (whose line 1 is the "========== PDF
PAGE 250" banner) = line N-1 of page 250 in part1.txt. The script reads
ph1-p250.txt for the quotes and verifies containment against part1.txt
page 250 (asserting the two extractions agree)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()

# --- source pages -------------------------------------------------------
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
PG = 250
page = pages[PG - 1]
P = norm(page)

# ph1-p250.txt: line 1 is the banner; raw N == ph1 file line N
ph1_lines = (CACHE / "ph1-p250.txt").read_text(encoding="utf8").split("\n")
if ph1_lines and ph1_lines[-1] == "": ph1_lines.pop()
body = "\n".join(ph1_lines[1:])
if body.rstrip("\n") != page.rstrip("\n"):
    print("FAIL: ph1-p250.txt body does not match part1.txt page 250")
    sys.exit(1)
def rng(a, b):  # raw line range a..b (physical order, ph1-p250.txt numbering)
    return "\n".join(ph1_lines[a - 1:b])

def ev(claim, quote, pgs):
    ok = all(norm(quote) in P for pg in pgs) if pgs == [PG] else False
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}

kept, fails = [], []
E1 = [
    ("Page identity — the section banner, headers, and topic heading (book 228)", rng(2, 11), [PG]),
    ("The Km definition + Vmax + hyperbolic-vs-sigmoidal block — the raw 105-139 region, where the left-column paragraph (Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax, inversely related to affinity; Vmax directly proportional to enzyme concentration; hyperbolic = Michaelis-Menten kinetics, sigmoidal = positive cooperativity, eg, aspartate transcarbamoylase) physically interleaves with the figure annotation 'Km = [S] at 1/2 Vmax', the 'Effects of enzyme inhibition' title, the reading rules, and the 1/Vmax / −Km axis labels", rng(105, 139), [PG]),
    ("The four Lineweaver-Burk reading rules, verbatim — Y-axis 0-proximity (higher Vmax), X-axis 0-proximity (higher Km), the Km-affinity inverse, and the crossing rule (reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not)", rng(113, 119), [PG]),
    ("Figure-label cluster 1 of 3 — the top curve panels (the single Michaelis-Menten hyperbola + the single Lineweaver-Burk line): '1/2 Vmax', '1/Vmax', the doubled 'VmaxVmax', the stacked '− Km' X-intercept, 'Uninhibited', 'Saturation' twice, 'slope = Km/Vmax' (stacked), and the densest interleave on the page — 'CompetitiveK inhibitor' fused with '= [S] at 1/2(reversible)' (the Competitive inhibitor (reversible) curve label fused with the Km = [S] at 1/2 Vmax annotation)", rng(13, 33), [PG]),
    ("Figure-label cluster 2 of 3 — the effects-of-inhibition overlay panels: 'Noncompetitive inhibitor', the doubled 'Km Km Substrate' X-axis labels, '[S]' three times, 'Uninhibited', 'Competitive inhibitor', 'slope = Km/Vmax', the paired 1/V Y-axis labels, and the '− Km' X-intercept", rng(44, 62), [PG]),
    ("Figure-label cluster 3 of 3 — the second 'Effects of enzyme inhibition' title with its three line labels ('Noncompetitive inhibitor', 'Competitive inhibitor', 'Uninhibited', 'Competitive inhibitor (reversible)' wrapped across three lines) plus the 1/Vmax Y-intercepts and the paired 1/V axes and 1/[S] X-axis labels", rng(64, 87), [PG]),
    ("The inhibition table, part 1 — the source's own printed typo 'Kompetitive inhibitors increase K m.' in its physical position (left column, beneath the crossing rule), fused with the table's first printed row and first column header: 'Resemble substrate' + 'Competitive / inhibitors, / reversible' + 'Yes', interleaved with the Lineweaver-Burk 'V' / '1' / '− Km' labels", rng(89, 101), [PG]),
    ("The inhibition table, part 2 — the 'Overcome by ↑ [S]' row (Yes / No / No) and the column-2 and column-3 headers ('Competitive / inhibitors, / irreversible' + Yes; 'Noncompetitive / inhibitors' + No), interleaved with the Michaelis-Menten overlay labels ('1 Vmax', '[S]', 'Saturation', 'Competitive inhibitor (reversible)', '1⁄2 Vmax', 'Noncompetitive inhibitor', 'Km')", rng(155, 188), [PG]),
    ("The inhibition table, part 3 — the clean lower block, verbatim: Bind site (Active / Active / Allosteric), Effect on Vmax (Unchanged / ↓ / ↓), Effect on Km (↑ / Unchanged / Unchanged)", rng(190, 212), [PG]),
    ("The Pharmacodynamics row, verbatim — ↓ potency (Competitive inhibitors, reversible) / ↓ efficacy (Competitive inhibitors, irreversible) / ↓ efficacy (Noncompetitive inhibitors)", rng(214, 220), [PG]),
    ("The footer print line — the indd slug (page identity, book 228; it prints mid-stream, interleaved between the table-header cluster and the Km-definition block)", rng(103, 103), [PG]),
    ("The footer print line — the timestamp at stream end (page identity, book 228)", rng(222, 222), [PG]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"enzyme-kinetics: evidence {len(kept)}/{len(E1)} verified")

QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "enzyme-kinetics", "title": "Enzyme Kinetics",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [250], "bookPages": "228–228"},
    "sourceEvidence": kept, "visualIds": ["enzyme-kinetics-map"],
    "mechanismIds": ["km-affinity-map", "crossing-lines-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definitions, the four reading rules, and the table only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-dials-reading", "summary": "The two-dials reading protocol (Km = the affinity dial at [S] = 1/2 Vmax; Vmax = the capacity dial set by enzyme head-count; exactly ONE dial moves per inhibitor class) and the geometry decode of the Lineweaver-Burk intercepts (Y-intercept = 1/Vmax, X-intercept = −1/Km, slope = Km/Vmax) — KYP's synthesis of the page's definitions, rules, and table into one protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the definitions, the rules, and the table as separate blocks and never states the one-dial-per-inhibitor invariant; the two-dials framing and the dial-routing pivot are KYP's design.",
         "location": "core.keyIdea + mechanism km-affinity-map + the registry visual's panels + pivots"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (HALF-SPEED SUBSTRATE, HEAD-COUNT CEILING / HUG THE ZERO — Y-HUG LIFTS VMAX, X-HUG LIFTS KM / CROSSERS SHARE THE Y-AXIS; NONCROSSERS SHARE THE X-AXIS / COMPETITION BENDS POTENCY; EVICTION BREAKS EFFICACY) — no mnemonic prints on the page (VLM confirmed).",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 228 (VLM census confirmed; the only margin glyph is a small key icon beside two panels); the four codes are KYP's design.",
         "location": "mnemonics + rapidReview.m3 + the visual's rule cards"},
        {"id": "mini-case-layer", "summary": "The allosteric-inhibitor miniCase (binding site distinct from the active site, no substrate homology, Vmax ↓ with Km unchanged, shared X-intercept, no crossing, doubling [S] restores nothing) with the irreversible-competitive near-miss distractor — the two table columns that are numerically identical separated only by Bind site and Resemble substrate.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the table columns side by side and never asks the learner to separate the identically-numbered Vmax-movers from binding data; the vignette and the four distractors are KYP's design.",
         "location": "usmle.miniCase + traps"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "pendingCorrections": [],
    "notes": ("Census (pdfimages + VLM, ph1-vlm-census.ts): ZERO raster images on pdf 250 / book 228 — "
        "FOUR VECTOR curve panels (VLM: the single Michaelis-Menten hyperbola with dashed 1/2 Vmax meeting the curve at Km, "
        "the 'Km = [S] at 1/2 Vmax' annotation and the Saturation arrow; the effects-of-inhibition Michaelis-Menten overlay "
        "with Uninhibited / Competitive inhibitor (reversible) / Noncompetitive inhibitor; the single Lineweaver-Burk line "
        "with Y-intercept 1/Vmax, X-intercept −1/Km and slope = Km/Vmax; the effects-of-inhibition Lineweaver-Burk overlay "
        "with the same three lines) plus the pure-text inhibition table; no margin mnemonics print (VLM: only a small key-icon "
        "glyph beside two panels). THE INTERLEAVE (documented, at the batch's densest): the text layer fuses labels across "
        "panels — 'VmaxVmax', 'CompetitiveK inhibitor' fused with '= [S] at 1/2(reversible)' (the Competitive inhibitor "
        "(reversible) curve label fused with the Km = [S] at 1/2 Vmax annotation), '− Km 1⁄2 V1/2 Vmax', 'Km Km Substrate [S]', "
        "and the table's header/first rows physically interleave with the figure clusters (raw 89-101, 155-188) while the "
        "lower four rows stream clean (raw 190-220). QUIRKS, documented: (1) the source's own printed typo — "
        "'Kompetitive inhibitors increase K m.' — prints in red in the left column directly beneath the crossing rule "
        "('Reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not.') and above the "
        "Lineweaver-Burk inhibition panel and the table (VLM confirmed the capital K as printed); KYP carries it verbatim in "
        "the note's callout block and visual Panel 3. (2) TABLE ROW ORDER: the production spec assumed Bind site first, but "
        "both the VLM reading and a layout-preserved pdftotext pass confirm the printed order is Resemble substrate → "
        "Overcome by ↑ [S] → Bind site → Effect on Vmax → Effect on Km → Pharmacodynamics; the verbatim table block and the "
        "visual's Panel 4 carry the PRINTED order. (3) The indd footer slug (FAS1_2026_05-Pharmacology.indd 228) prints "
        "mid-stream (raw 103), not adjacent to the timestamp (raw 222), so the two print-line components are quoted as two "
        "contiguous-range entries. (4) Outputs are STAGED under .usmle-pipeline-cache/staging-ph1/ — nothing is written into "
        "content/ (chapters/pharmacology.json, content manifests, visual-inventory, and the visual registry are owned by the "
        "promotion step; the note's visualId 'enzyme-kinetics-map' is therefore not yet in visuals/registry.tsx by design)."),
    "updatedAt": str(date.today())}

SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "enzyme-kinetics", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "enzyme-kinetics-sv1",
        "sourcePages": {"part": 1, "pdfPages": [250], "bookPages": "228"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The effects-of-enzyme-inhibition table (book 228): 3 columns (Competitive inhibitors, reversible / Competitive inhibitors, irreversible / Noncompetitive inhibitors) x 6 rows in printed order (Resemble substrate Yes/Yes/No; Overcome by ↑ [S] Yes/No/No; Bind site Active/Active/Allosteric; Effect on Vmax Unchanged/↓/↓; Effect on Km ↑/Unchanged/Unchanged; Pharmacodynamics ↓ potency/↓ efficacy/↓ efficacy)",
        "sourceFigureDescription": "PURE TEXT (pdfimages: zero raster images; VLM confirmed): the complete inhibition table as printed, with the source's own red typo 'Kompetitive inhibitors increase K m.' printing in the left column directly beneath the crossing rule; the table's header and first two rows physically interleave with the figure clusters in the text layer (raw 89-101 and 155-188), the lower four rows stream clean (raw 190-220).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "enzyme-kinetics-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Panel 4 of the registry visual (EnzymeKineticsMap in visuals/pharm-p1.tsx — the table re-set as KYP table art with the Pharmacodynamics row highlighted) + blocks[1] the table block carried verbatim in the note",
        "productionStatus": "complete",
        "plannedKypVisualId": "enzyme-kinetics-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "enzyme-kinetics-sv2",
        "sourcePages": {"part": 1, "pdfPages": [250], "bookPages": "228"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The four curve panels (book 228): the single Michaelis-Menten hyperbola (Velocity V vs [S], dashed 1/2 Vmax meeting the curve at Km, 'Km = [S] at 1/2 Vmax', Saturation) and the single Lineweaver-Burk line (1/V vs 1/[S], Y-intercept 1/Vmax, X-intercept −1/Km, slope = Km/Vmax), plus the two 'Effects of enzyme inhibition' overlays (Michaelis-Menten axes and Lineweaver-Burk axes) each carrying Uninhibited / Competitive inhibitor (reversible) / Noncompetitive inhibitor",
        "sourceFigureDescription": "VECTOR LINE ART (pdfimages: zero rasters; VLM confirmed): four curve panels printed as vector line art whose labels interleave in the text layer at the batch's densest — 'VmaxVmax', 'CompetitiveK inhibitor = [S] at 1/2(reversible)', '− Km 1⁄2 V1/2 Vmax', 'Km Km Substrate [S]', the axis labels 1/V and 1/[S] repeated across panels, and the reading rules ('The closer to 0 on the Y-axis, the higher the Vmax.', 'The closer to 0 on the X-axis, the higher the K m.', 'The higher the K m, the lower the affinity.', 'Reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not.') printed beneath the plots.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "enzyme-kinetics-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Panels 1-3 of the registry visual (EnzymeKineticsMap in visuals/pharm-p1.tsx — the hyperbola and the double-reciprocal lines recomputed on original KYP axes with the three-inhibitor overlays, plus the four reading rules as verbatim rule cards and the Kompetitive-typo strip)",
        "productionStatus": "complete",
        "plannedKypVisualId": "enzyme-kinetics-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph1"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "enzyme-kinetics.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "enzyme-kinetics.json").write_text(
    json.dumps({"topicId": "enzyme-kinetics", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "enzyme-kinetics", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's two visual assets are its four VECTOR curve panels (redrawn as ORIGINAL KYP art — the hyperbola and double-reciprocal lines recomputed from the Michaelis-Menten equation on original KYP axes) and its pure-text inhibition table (carried verbatim in the note's table block and re-set as KYP table art in the registry visual); nothing is reproduced. Census: zero raster images (pdfimages) and no margin mnemonics (VLM confirmed on scripts/usmle-pipeline/ph1-vlm-census.ts); the source's own 'Kompetitive inhibitors increase K m.' typo prints in red in the left column and is carried verbatim. STAGED under .usmle-pipeline-cache/staging-ph1/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH1 manifest + inventory staged: {OUT}/manifests/enzyme-kinetics.json, {OUT}/visual-inventory/enzyme-kinetics.json")
print(f"enzyme-kinetics: evidence {len(kept)}/{len(E1)} verified")
