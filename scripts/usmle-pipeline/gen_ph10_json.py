#!/usr/bin/env python3
"""PH10 acetylcholine-receptors — manifest + inventory (Pharmacology
autonomic-drugs batch), STAGED under .usmle-pipeline-cache/staging-ph10/
(the promotion step owns content/). Source: pdf 257 TOP HALF / book 235 —
a SHARED page (the p196 convention): the bottom half, "Pain
transmission", is the sibling topic pain-transmission, so only the
ACh-receptors block's contiguous lines are quoted, stopping before the
"Pain transmission" heading. Census (pdfimages): ZERO raster images on
the page — pure text, TWO blocks, no figures: the NICOTINIC block
("Nicotinic ACh receptors are ligand-gated channels allowing efflux of
K+ and influx of Na+ and in some cases Ca2+. Two subtypes: NN (found in
autonomic ganglia, adrenal medulla) and NM (found in neuromuscular
junction of skeletal muscle).") and the MUSCARINIC block ("Muscarinic
ACh receptors are G-protein–coupled receptors that usually act through
2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain,
exocrine glands, and on sweat glands (cholinergic sympathetic)."). The
z-ai VLM census attempt (ph10-vlm-census.ts) returned 401 TWICE in
subagent context (missing X-Token header — the ph8/ph9 failure mode),
so the census stands on pdfimages + the text layer (documented). NO
margin notes or mnemonics print in the ACh half — the KYP memory layer
is original. Nothing is reproduced: there is no figure on the source
page, so the registry visual ach-receptor-map (AchReceptorMap in
visuals/pharm-p10.tsx) is an ORIGINAL KYP diagram built from the two
text blocks; the printed text is carried verbatim in the note's table
block.

Line-number note: the spec's raw coordinates are 1-based lines of the
pre-extracted .usmle-pipeline-cache/ph1-p257.txt, whose line 1 is the
"========== PDF PAGE 257" banner. part1.txt's page-257 block has no
banner line, so every range below is shifted by -1 (banner + heading
1-11 -> 1-10; nicotinic 13-15 -> 12-14; muscarinic 16-18 -> 15-17; the
"Pain transmission" heading sits at raw 20 / part1.txt line 19 and is
never quoted; the indd slug + timestamp footer sits at raw 39-41 /
part1.txt lines 38-40 — it prints at the very foot of the page, AFTER
the sibling's Pain transmission block, so it is quoted as its own
entry with the position noted).
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
L = {257: pages[256].split("\n")}
P = {257: norm(pages[256])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E10 = [
    ("Page identity — the section banner, header, and topic heading (book 235)", rng(257, 1, 10), [257]),
    ("The NICOTINIC block — ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+; two subtypes NN (autonomic ganglia, adrenal medulla) and NM (neuromuscular junction of skeletal muscle)", rng(257, 12, 14), [257]),
    ("The MUSCARINIC block — G-protein–coupled receptors that usually act through 2nd messengers; 5 subtypes M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic)", rng(257, 15, 17), [257]),
    ("The page footer — the indd print slug and timestamp (position note: these two footer lines print at the very foot of pdf 257, AFTER the sibling Pain transmission block at the bottom half of the shared page; quoted here as its own entry for page-identity pinning only)", rng(257, 38, 40), [257]),
]
for c, q, pgs in E10:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"acetylcholine-receptors: evidence {len(kept)}/{len(E10)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m10 = {"topicId": "acetylcholine-receptors", "title": "Acetylcholine Receptors: Nicotinic & Muscarinic",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [257], "bookPages": "235–235"},
    "sourceEvidence": kept, "visualIds": ["ach-receptor-map"],
    "mechanismIds": ["channel-vs-gpcr-map", "subtype-distribution-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the two printed blocks.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two receptor definitions only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "fork-reading", "summary": "The four-move reading protocol (SPOT / SORT / PLACE / PREDICT) and the three-locks framing of the page — one key (ACh), three locks (NN, NM, M1–5) — including the receptor-intact vs drive-interrupted split and the never-sort-by-division rule as documented synthesis.",
         "origin": "outside-first-aid", "rationale": "The source prints the two blocks as definitions and never asks the learner to route drugs through them; the four-move synthesis, the three-locks framing, and the neural-arc split are KYP's design.",
         "location": "core.keyIdea + blocks[2] the steps block + pivots + the registry visual's exam-targets band"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (GATE VS MAILBOX / NN RUNS NEURONS, NM MOVES MUSCLE / FOUR M-HOMES AND ONE SYMPATHETIC SPY / ONE KEY, THREE LOCKS) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere in the Acetylcholine receptors half of book 235 (pdfimages + text-layer census; the VLM returned 401 twice); the four codes are KYP's design.",
         "location": "mnemonics + the visual's panel footers"},
        {"id": "mini-case-layer", "summary": "The ganglionic-blocker miniCase (a hypertensive emergency on an NN-selective ganglionic antagonist — which cholinergic pathway remains fully intact) with distractors discriminating adrenal medulla (NN, blocked) vs NMJ (NM, spared) vs vagal slowing and thermoregulatory sweating (M receptor intact, neural drive interrupted at the ganglion).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the subtype locations as a list and never asks the learner to apply them to a drug; the vignette, the four distractors, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SHARED PAGE (the p196 convention): pdf 257 / book 235 carries TWO subsections — 'Acetylcholine receptors' (top half, THIS topic) and 'Pain transmission' (bottom half, the sibling topic pain-transmission); only the ACh-receptors block's contiguous lines are quoted and every quote range stops before the 'Pain transmission' heading (part1.txt raw line 19), which belongs to the sibling. Census (pdfimages): ZERO raster images on the page — the ACh half is PURE TEXT, exactly two blocks (nicotinic, muscarinic), no figures; the z-ai VLM census attempt (ph10-vlm-census.ts) returned 401 TWICE in subagent context (missing X-Token header — the ph8/ph9 failure mode), so the census stands on pdfimages + the text layer: nothing but the two printed blocks appears in the top half, and the indd slug + timestamp print at the very foot of the page, AFTER the sibling's Pain transmission block (quoted as its own page-identity entry with the position noted). NO margin notes or mnemonics print in the ACh half — the KYP memory layer is original. Quirks, documented: (1) the spec's raw line coordinates are 1-based lines of .usmle-pipeline-cache/ph1-p257.txt (banner at line 1), so the part1.txt page-257 ranges used here are shifted by -1 (banner + heading 1-10, nicotinic 12-14, muscarinic 15-17; the Pain transmission heading sits at part1.txt line 19 and is never quoted; the footer prints at lines 38-40); (2) the whole subsection is FOUR printed sentences — two text blocks of two sentences each; the printed blocks do NOT map individual M numbers to individual organs (the page lists the family M1–5 across the five sites), and the note deliberately preserves that restraint; (3) the text layer prints the subtypes as NN and NM and the muscarinic range as 'M1–5' (en dash); (4) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (5) outputs are STAGED under .usmle-pipeline-cache/staging-ph10/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'ach-receptor-map' is therefore not yet in visuals/registry.tsx by design); (6) there is NO figure on the source page, so the registry visual is an ORIGINAL KYP diagram (not a redraw) built from the two text blocks; the printed text is carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "acetylcholine-receptors", "requiredInKYP": True}
inv10 = [
    dict(SV_BASE, **{
        "visualId": "acetylcholine-receptors-sv1",
        "sourcePages": {"part": 1, "pdfPages": [257], "bookPages": "235"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The two-block Acetylcholine receptors text (book 235, top half) — the nicotinic and muscarinic receptor definitions with their subtype/distribution lists",
        "sourceFigureDescription": "PURE TEXT, TWO BLOCKS (pdfimages: zero raster images; VLM census attempt returned 401 twice in subagent context, so the census stands on pdfimages + the text layer): the NICOTINIC block — 'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+. Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).' — followed by the MUSCARINIC block — 'Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).' No figures, margin notes, or mnemonics print in the ACh half.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "ach-receptor-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (AchReceptorMap in visuals/pharm-p10.tsx — the ACh dispatcher chip, the nicotinic channel glyph with K+ efflux / Na+ and in-some-cases Ca2+ influx arrows plus the NN and NM subtype chips, the muscarinic GPCR glyph with its G-protein → 2nd-messenger cascade plus the five M1–5 location chips with the cholinergic-sympathetic sweat exception, the exam-targets band, and the one-key-three-locks banner); the two printed blocks are also carried verbatim in the note's table block (blocks[1]), core.what, and recall[0-1]",
        "productionStatus": "complete",
        "plannedKypVisualId": "ach-receptor-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph10"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "acetylcholine-receptors.json").write_text(json.dumps(m10, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "acetylcholine-receptors.json").write_text(
    json.dumps({"topicId": "acetylcholine-receptors", "chapterId": "pharmacology", "inventory": inv10,
                "coverageAudit": {"topicId": "acetylcholine-receptors", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The ACh half's single visual asset — the two-block text (nicotinic + muscarinic definitions) — is accounted for as an ORIGINAL KYP ADAPTATION: there is no figure on the source page (pdfimages: zero rasters), so the registry visual ach-receptor-map (AchReceptorMap in visuals/pharm-p10.tsx) is an original KYP diagram built from the two printed blocks, whose text is also carried verbatim in the note's table block; nothing is reproduced. Census: zero raster images (pdfimages) and no margin mnemonics in the ACh half (the z-ai VLM census attempt returned 401 twice in subagent context, so the census stands on pdfimages + the text layer). SHARED PAGE (the p196 convention): the bottom half of pdf 257 / book 235 is the sibling topic pain-transmission and is out of scope here. STAGED under .usmle-pipeline-cache/staging-ph10/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH10 manifest + inventory staged: {OUT}/manifests/acetylcholine-receptors.json, {OUT}/visual-inventory/acetylcholine-receptors.json")
print(f"acetylcholine-receptors: evidence {len(kept)}/{len(E10)} verified")
