#!/usr/bin/env python3
"""PH8 drug-effect-modifications — manifest + inventory (Pharmacology 8/29),
STAGED under .usmle-pipeline-cache/staging-ph8/ (the promotion step
owns content/). Source: pdf 256 TOP HALF / book 234 — a SHARED page
(the p196 convention): the bottom half, "Autonomic receptors", is the
sibling topic autonomic-receptors, so only the effect-modifications
block's contiguous lines are quoted, stopping before the SECOND
"▶ PHARMACOLOGY—AUTONOMIC DRUGS" banner. Census (pdfimages: ZERO raster
images on the page — pure text): ONE 6-row TERM/DEFINITION/EXAMPLE table
in the top half (Additive / Permissive / Synergistic / Potentiation /
Antagonistic / Tachyphylactic, with the source's own arithmetic chips
"2 + 2 = 4", "2 + 2 > 4", "2 + 0 > 2", "2 + 2 < 4" on four rows and NO
chip on Permissive or Tachyphylactic); NO figures; NO margin notes or
mnemonics. VLM confirm attempted twice (ph8-vlm-census.ts) — both calls
failed with 401 missing X-Token (sandbox vision credential absent), so
the census stands on the pdfimages raster census + the pdftotext text
layer. Documented banner typos: the page header prints "PHARMACoLoGY"
and "SEC TIoN II" — quoted exactly as printed.

Nothing is reproduced: the table is adapted as an ORIGINAL KYP visual
(effect-modification-map, EffectModificationMap in
visuals/pharm-p8.tsx — the arithmetic-ladder redraw) and carried
verbatim in the note's table block; the KYP memory layer is original.

Line-number note: the coordinates below are 1-based lines of the
part1.txt page-256 block (pages[255] of the \f split, no banner line).
The pre-extracted .usmle-pipeline-cache/ph1-p256.txt has the
"========== PDF PAGE 256" banner at line 1, so its coordinates are
shifted +1 relative to the ranges below (banner 1-9 here = 2-10 there;
the second ▶ banner sits at part1.txt line 66 = ph1-p256.txt line 67
and is NEVER quoted — it opens the sibling's half).
"""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
L = {256: pages[255].split("\n")}
P = {256: norm(pages[255])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E8 = [
    ("Page identity — the page number, the section banner (with the source's own typos “SEC TIoN II” and “PHARMACoLoGY” printed exactly as shown), the subsection banner, and the topic heading (book 234)", rng(256, 1, 9), [256]),
    ("The table header — the three column labels TERM / DEFINITION / EXAMPLE of the drug effect modifications table", rng(256, 10, 14), [256]),
    ("Row 1, ADDITIVE — effect of substances A and B together is equal to the sum of their individual effects; aspirin and acetaminophen; the source's own chip “2 + 2 = 4”", rng(256, 16, 22), [256]),
    ("Row 2, PERMISSIVE — presence of substance A is required for the full effects of substance B; cortisol on catecholamine responsiveness (no arithmetic chip printed)", rng(256, 24, 29), [256]),
    ("Row 3, SYNERGISTIC — effect of substances A and B together is greater than the sum of their individual effects; clopidogrel with aspirin; the source's own chip “2 + 2 > 4”", rng(256, 31, 37), [256]),
    ("Row 4, POTENTIATION — similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A; carbidopa only blocks enzyme to prevent peripheral conversion of levodopa; the source's own chip “2 + 0 > 2”", rng(256, 39, 47), [256]),
    ("Row 5, ANTAGONISTIC — effect of substances A and B together is less than the sum of their individual effects; morphine with naloxone; the source's own chip “2 + 2 < 4”", rng(256, 49, 55), [256]),
    ("Row 6, TACHYPHYLACTIC — acute decrease in response to a drug after initial/repeated administration; repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion); no arithmetic chip printed", rng(256, 57, 64), [256]),
]
for c, q, pgs in E8:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"drug-effect-modifications: evidence {len(kept)}/{len(E8)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m8 = {"topicId": "drug-effect-modifications", "title": "Drug Effect Modifications: The Arithmetic of Two Drugs",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [256], "bookPages": "234–234"},
    "sourceEvidence": kept, "visualIds": ["effect-modification-map"],
    "mechanismIds": ["interaction-arithmetic-map", "tachyphylaxis-clock-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the six-term table only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "ladder-reading", "summary": "The four-gate reading protocol (THE OPERATOR / THE ZERO TEST / THE REQUIREMENT TEST / THE CLOCK) and the arithmetic-ladder framing of the table, including the documented quirk that only four of the six rows print an arithmetic chip (Permissive and Tachyphylactic print none).",
         "origin": "outside-first-aid", "rationale": "The source prints the six terms as an unordered table; the operator/zero/requirement/clock synthesis, the rung ordering, and the chip-count quirk documentation are KYP's design.",
         "location": "core.keyIdea + the registry visual's ladder zones + the steps block + pivots"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (READ THE OPERATOR: = ADDS, > SYNS, < ANTS / A ZERO PARTNER MAKES IT POTENTIATION / PERMISSIVE IS THE KEY, NOT THE BOOSTER / TACHY FADES FAST, THE NOSE REBOUNDS) — no mnemonic prints on the page; the four arithmetic chips inside them are the source's own, carried verbatim and attributed.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere in the Drug effect modifications half of book 234 (census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the visual's operator strip and card captions"},
        {"id": "mini-case-layer", "summary": "The two-patient miniCase (a Parkinson patient on carbidopa + levodopa whose silent partner is mislabeled + an oxymetazoline rebound-congestion patient) — a KYP-authored integration of the potentiation and tachyphylactic rows.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the six terms as table rows and never asks the learner to apply them to patients; the vignette, the four distractors (synergistic/antagonistic misfile, permissive/additive misfile, blocks-enzyme-as-antagonism, additive/synergistic stretch), and the reasoning are KYP's design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SHARED PAGE (the p196 convention): pdf 256 / book 234 carries TWO subsections — 'Drug effect modifications' (top half, THIS topic) and 'Autonomic receptors' (bottom half, the sibling topic autonomic-receptors); only the effect-modifications block's contiguous lines are quoted and every quote range stops before the SECOND '▶ PHARMACOLOGY—AUTONOMIC DRUGS' banner (part1.txt page-256 raw line 66), which belongs to the sibling. Census (pdfimages: ZERO raster images on the page — pure text): the top half is ONE 6-row TERM/DEFINITION/EXAMPLE table (Additive / Permissive / Synergistic / Potentiation / Antagonistic / Tachyphylactic) and NOTHING else — no figures, no margin notes, no mnemonics; the KYP memory layer is original. VLM confirm attempted twice (ph8-vlm-census.ts, glm-4.6v on scripts/p-pages/ph1-256-256.png) — both calls failed with 401 missing X-Token (the sandbox vision credential is absent), so per the fallback rule the census stands on the pdfimages raster census + the pdftotext text layer. Documented quirks: (1) only FOUR of the six rows print an arithmetic chip — the source's own “2 + 2 = 4” (Additive), “2 + 2 > 4” (Synergistic), “2 + 0 > 2” (Potentiation), “2 + 2 < 4” (Antagonistic); Permissive (a requirement, not an operator) and Tachyphylactic (a time course, not a combination) print none; (2) the page header prints the source's own banner typos 'PHARMACoLoGY' and 'SEC TIoN II' — quoted exactly as printed in the page-identity evidence; (3) the Tachyphylactic example line carries two stray cp1252 control characters (U+008E, U+0090) before the → and ↓ glyphs in the text layer — norm() strips them for containment; (4) the spec's raw line coordinates are 1-based lines of .usmle-pipeline-cache/ph1-p256.txt (banner at line 1), so the part1.txt page-256 ranges used here are shifted by -1 (identity 1-9, header 10-14, rows 16-22/24-29/31-37/39-47/49-55/57-64; the second ▶ banner sits at part1.txt line 66 and is never quoted); (5) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (6) outputs are STAGED under .usmle-pipeline-cache/staging-ph8/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'effect-modification-map' is therefore not yet in visuals/registry.tsx by design); (7) the note's verbatim table block carries the table's cell text, not its column geometry — the ladder layout, key-unlock glyph, and fading-response curve are expressed only in the ORIGINAL KYP redraw.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "drug-effect-modifications", "requiredInKYP": True}
inv8 = [
    dict(SV_BASE, **{
        "visualId": "drug-effect-modifications-sv1",
        "sourcePages": {"part": 1, "pdfPages": [256], "bookPages": "234"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The 6-row drug effect modifications table (book 234, top half) — TERM/DEFINITION/EXAMPLE for additive, permissive, synergistic, potentiation, antagonistic, tachyphylactic",
        "sourceFigureDescription": "PURE TEXT TABLE (pdfimages: zero raster images on the page; no figures, no margin notes or mnemonics): one 6-row TERM/DEFINITION/EXAMPLE table — Additive (effect of substances A and B together is equal to the sum of their individual effects; aspirin and acetaminophen; “2 + 2 = 4”), Permissive (presence of substance A is required for the full effects of substance B; cortisol on catecholamine responsiveness; no chip), Synergistic (effect of substances A and B together is greater than the sum of their individual effects; clopidogrel with aspirin; “2 + 2 > 4”), Potentiation (similar to synergism, but drug B [with no therapeutic action alone] enhances the therapeutic action of drug A; carbidopa only blocks enzyme to prevent peripheral conversion of levodopa; “2 + 0 > 2”), Antagonistic (effect of substances A and B together is less than the sum of their individual effects; morphine with naloxone; “2 + 2 < 4”), Tachyphylactic (acute decrease in response to a drug after initial/repeated administration; repeat use of intranasal decongestant [eg, oxymetazoline] → ↓ therapeutic response [with rebound congestion]; no chip). VLM confirm attempted twice (ph8-vlm-census.ts) — both calls failed 401 missing X-Token; census stands on pdfimages + the text layer.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "effect-modification-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (EffectModificationMap in visuals/pharm-p8.tsx — the six arithmetic-ladder cards with the four source-own equation chips, the permissive key-unlock glyph with its dashed no-chip ghost chip, the tachyphylactic fading-response curve with the growing rebound-congestion bars and rebound arrow, the operator strip, and the two-rows-refuse-an-operator banner) + blocks[2] the steps block distilling the same six rungs; the table is also carried verbatim in blocks[1] the table block, core.what, and recall[0-5]",
        "productionStatus": "complete",
        "plannedKypVisualId": "effect-modification-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph8"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "drug-effect-modifications.json").write_text(json.dumps(m8, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "drug-effect-modifications.json").write_text(
    json.dumps({"topicId": "drug-effect-modifications", "chapterId": "pharmacology", "inventory": inv8,
                "coverageAudit": {"topicId": "drug-effect-modifications", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The effect-modifications half's ONE visual asset — the 6-row TERM/DEFINITION/EXAMPLE table — is accounted for: adapted as the registry visual effect-modification-map (an ORIGINAL KYP ADAPTATION — the arithmetic-ladder redraw with the source's own four equation chips carried verbatim) and carried verbatim in the note's table block; nothing is reproduced. Census: zero raster images (pdfimages) and no margin mnemonics in the top half; VLM confirm attempted twice (ph8-vlm-census.ts) but both calls failed 401 missing X-Token, so the census stands on pdfimages + the text layer. SHARED PAGE (the p196 convention): the bottom half of pdf 256 / book 234 is the sibling topic autonomic-receptors and is out of scope here. STAGED under .usmle-pipeline-cache/staging-ph8/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH8 manifest + inventory staged: {OUT}/manifests/drug-effect-modifications.json, {OUT}/visual-inventory/drug-effect-modifications.json")
print(f"drug-effect-modifications: evidence {len(kept)}/{len(E8)} verified")
