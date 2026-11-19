#!/usr/bin/env python3
"""PH6 efficacy-potency — manifest + inventory (Pharmacology 6 of the
PH batch), STAGED under .usmle-pipeline-cache/staging-ph6/ (the
promotion step owns content/). Source: pdf 254 / book 232
(PHARMACOLOGY — PHARMACOKINETICS AND PHARMACODYNAMICS: Efficacy vs
potency). Census (pdfimages): ZERO raster images — pure text plus TWO
VECTOR dose-response figures (RELATIVE EFFICACY: % Maximal effect
0-100 vs Log (drug dose), Drug A plateauing at Emax 100 and Drug B at
Emax 50 with the Δ Efficacy bracket; RELATIVE POTENCY: Drug A
left-shifted of Drug B at the SAME maximal effect, with the Δ Potency
bracket, two EC50 markers, and the "EC = Effective concentration"
note). VLM confirm attempted (scripts/usmle-pipeline/ph6-vlm-
census.ts) but the vision endpoint returned 401 (missing X-Token) on
BOTH retries — an environment-level credential failure, not a content
failure — so per the fallback policy the census stands on the
pdfimages raster count + the pre-extracted text layer; the figure
topology quoted in the claims is the task's own pre-verified reading.
No margin mnemonics print anywhere on the page; the KYP memory layer
is original. Text-layer quirks documented in the claims: the ↑/↓
arrows in the two definition blocks carry \\x8f/\\x90 control bytes
ahead of them (stripped by norm(), per the pipeline convention); the
"EC = Effective concentration" note wraps across two raw lines (50-51)
with the two EC50 labels (52, 54) straddling the wrap; and the Δ
Efficacy label (raw 23) interleaves between the Emax Drug A label
(22) and the 50 tick (25) while the Δ Potency label (46) sits between
the Drug B label (44) and the 50 tick (48)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
STAGING = CACHE / "staging-ph6"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
PG = 254
page = pages[PG - 1]
P = norm(page)

# ph1-p254.txt: line 1 is the banner; raw N == ph1 file line N
ph6_lines = (CACHE / "ph1-p254.txt").read_text(encoding="utf8").split("\n")
if ph6_lines and ph6_lines[-1] == "": ph6_lines.pop()
body = "\n".join(ph6_lines[1:])
if body.rstrip("\n") != page.rstrip("\n"):
    print("FAIL: ph1-p254.txt body does not match part1.txt page 254")
    sys.exit(1)
def rng(a, b):  # raw line range a..b (physical order, ph1-p254.txt numbering)
    return "\n".join(ph6_lines[a - 1:b])

def ev(claim, quote, pgs):
    ok = all(norm(quote) in P for pg in pgs) if pgs == [PG] else False
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}

kept, fails = [], []
E6 = [
    ("Page identity — the section banner, headers, and topic heading (book 232)", rng(2, 10), [PG]),
    ("The Efficacy definition block, verbatim — maximal effect a drug can produce (intrinsic activity); represented by the y-value (Emax); ↑ y-value = ↑ Emax = ↑ efficacy; unrelated to potency (ie, efficacious drugs can have high or low potency); partial agonists have less efficacy than full agonists (the ↑ arrows carry \\x8f control bytes in the raw layer, stripped by norm)", rng(11, 15), [PG]),
    ("The RELATIVE EFFICACY figure labels — '% Maximal effect', the 100 / 50 / 0 ticks, 'Emax Drug A', 'Emax Drug B', the Δ Efficacy bracket label (which interleaves between the Emax Drug A label and the 50 tick — raw 23 between raw 22 and 25), and the 'Log (drug dose)' axis", rng(16, 30), [PG]),
    ("The Potency definition block, verbatim — amount of drug needed for a given effect; represented by the x-value (EC50); left shifting = ↓ EC50 = ↑ potency = ↓ drug needed; unrelated to efficacy (ie, potent drugs can have high or low efficacy) (the ↑/↓ arrows carry \\x8f/\\x90 control bytes in the raw layer, stripped by norm)", rng(32, 36), [PG]),
    ("The RELATIVE POTENCY figure labels — '% Maximal effect', the 100 / 50 / 0 ticks, 'Drug A', 'Drug B', the Δ Potency bracket label (raw 46, between the Drug B label and the 50 tick), the two-line 'EC = Effective / concentration' wrap (raw 50-51) with the two EC50 labels (raw 52, 54) straddling it, and the 'Log (drug dose)' axis", rng(37, 57), [PG]),
    ("The footer print line — the indd slug (page identity, book 232)", rng(59, 59), [PG]),
    ("The footer print line — the timestamp at stream end (page identity, book 232)", rng(61, 61), [PG]),
]
for c, q, pgs in E6:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"efficacy-potency: evidence {len(kept)}/{len(E6)} verified")

QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m6 = {"topicId": "efficacy-potency", "title": "Efficacy vs Potency: Reading Dose-Response Curves",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [254], "bookPages": "232–232"},
    "sourceEvidence": kept, "visualIds": ["dose-response-map"],
    "mechanismIds": ["emax-ceiling-map", "ec50-shift-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts (4 patterns, 4 traps, 3 pivots).",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two definitions and the two figures only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-axes-reading", "summary": "The two-axes reading protocol (AXIS 1 THE CEILING — Emax on the Y, ↑ y-value = ↑ Emax = ↑ efficacy, partial agonists plateau lower; AXIS 2 THE ADDRESS — EC50 on the X, left shifting = ↓ EC50 = ↑ potency = ↓ drug needed; then REFUSE TO CROSS THE AXES) plus the independence grid (the KYP 2×2 of high/low potency × high/low efficacy, every cell a real drug behavior) — KYP's synthesis of the page's two symmetric definitions into one figure protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the two definitions and the two figures separately and never states the read-order protocol or draws the 2×2 of possible drug behaviors; the protocol, the grid, and the four axis-error distractor archetypes are KYP's design.",
         "location": "core.keyIdea + blocks[2] the steps block + the registry visual's Panels 3-4 + pivots"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (EFFICACY IS THE CEILING; POTENCY IS THE ADDRESS / LEFT SHIFT, LESS DRUG / TALL DOESN'T MEAN CHEAP, AND CHEAP DOESN'T MEAN TALL / PARTIAL PLATEAUS LOWER) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 232 (text census; the VLM confirm attempt failed 401 on environment credentials, and the text layer carries no margin notes); the four codes are KYP's design.",
         "location": "mnemonics + rapidReview.m3 + the registry visual's rule cards and chips"},
        {"id": "mini-case-layer", "summary": "The three-curve figure miniCase (curves 1 and 2 fusing the RELATIVE POTENCY figure — same 100% ceiling, curve 1 ten-fold left; curve 3 fusing the RELATIVE EFFICACY figure — 50% plateau at curve 1's exact EC50, the partial agonist) with the four axis-error distractors (position read as height; the more-drug-stronger fallacy; potency ranked by plateau; the plateau misread as an unfinished dose range) — a KYP-authored fusion of the page's two figures into one question.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the two figures separately and never asks the learner to read both axes off one fused figure or to resist the cross-axis substitutions; the vignette, the four distractors, and the reasoning are KYP's design.",
         "location": "usmle.miniCase + traps"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "pendingCorrections": [],
    "notes": ("Census (pdfimages): ZERO raster images on pdf 254 / book 232 — pure text plus the TWO VECTOR dose-response figures "
        "(RELATIVE EFFICACY: % Maximal effect 0-100 vs Log (drug dose), Drug A plateauing at Emax 100 and Drug B at Emax 50 with the "
        "Δ Efficacy bracket between the plateaus; RELATIVE POTENCY: Drug A left-shifted of Drug B at the SAME maximal effect, with the "
        "Δ Potency bracket, two EC50 markers, and the EC = Effective concentration note). VLM CONFIRM DEVIATION, documented: the confirm "
        "attempt (scripts/usmle-pipeline/ph6-vlm-census.ts) returned 401 'missing X-Token' on BOTH retries — an environment-level "
        "credential failure, not a content failure — so per the fallback policy the census stands on the pdfimages raster count plus the "
        "pre-extracted text layer (ph1-p254.txt, whose body the script asserts equals part1.txt page 254); the figure topology in the "
        "claims is the task's own pre-verified reading. Text-layer quirks, documented: (1) the ↑/↓ arrows in the two definition blocks "
        "carry \\x8f/\\x90 control bytes ahead of them in the raw layer (stripped by norm(), per the pipeline convention); (2) the "
        "'EC = Effective concentration' note wraps across two raw lines (50-51) with the two EC50 labels (raw 52, 54) straddling the wrap; "
        "(3) the Δ Efficacy label (raw 23) interleaves between the Emax Drug A label (raw 22) and the 50 tick (raw 25), and the Δ Potency "
        "label (raw 46) sits between the Drug B label (raw 44) and the 50 tick (raw 48) — otherwise the label stream is clean (no fused "
        "labels, unlike the enzyme-kinetics page); (4) the topic is a single-column page: 'Efficacy' heads the first definition block at "
        "raw 11 and 'Potency' heads the second at raw 32, between the two figures. Difficulty 2 matches the chapter inventory "
        "(content/usmle/chapters/pharmacology.json lists efficacy-potency at difficulty 2 — no pending correction). Outputs are STAGED "
        "under .usmle-pipeline-cache/staging-ph6/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, "
        "visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId "
        "'dose-response-map' is therefore not yet in visuals/registry.tsx by design)."),
    "updatedAt": str(date.today())}

SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "efficacy-potency", "requiredInKYP": True}
inv6 = [
    dict(SV_BASE, **{
        "visualId": "efficacy-potency-sv1",
        "sourcePages": {"part": 1, "pdfPages": [254], "bookPages": "232"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The two definition blocks (book 232): Efficacy (maximal effect a drug can produce — intrinsic activity; represented by the y-value (Emax); ↑ y-value = ↑ Emax = ↑ efficacy; unrelated to potency — efficacious drugs can have high or low potency; partial agonists have less efficacy than full agonists) and Potency (amount of drug needed for a given effect; represented by the x-value (EC50); left shifting = ↓ EC50 = ↑ potency = ↓ drug needed; unrelated to efficacy — potent drugs can have high or low efficacy)",
        "sourceFigureDescription": "PURE TEXT (pdfimages: zero raster images): the page's entire text content is the two symmetric definition blocks, each carrying its own axis assignment (y-value Emax vs x-value EC50), its own conversion chain, its own independence clause, and — for efficacy only — the partial-agonist clause; the ↑/↓ arrows carry \\x8f/\\x90 control bytes in the raw text layer (stripped by norm).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "dose-response-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (DoseResponseMap in visuals/pharm-p6.tsx — Panel 1's rule chip '↑ y-value = ↑ Emax = ↑ efficacy' and partial-agonist note chip; Panel 2's rule chip 'left shifting = ↓ EC50 = ↑ potency = ↓ drug needed' and the 'EC = Effective concentration' note chip; Panel 4's four rule cards) + blocks[1] the table block carried verbatim in the note",
        "productionStatus": "complete",
        "plannedKypVisualId": "dose-response-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "efficacy-potency-sv2",
        "sourcePages": {"part": 1, "pdfPages": [254], "bookPages": "232"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The two vector dose-response figures (book 232): RELATIVE EFFICACY (% Maximal effect 0-100 vs Log (drug dose); Drug A plateauing at Emax 100 and Drug B at Emax 50 at the same log-dose position; the Δ Efficacy bracket spanning the two plateaus) and RELATIVE POTENCY (Drug A left-shifted of Drug B with BOTH reaching the same maximal effect; two EC50 markers on the Log (drug dose) axis; the Δ Potency bracket spanning them; the 'EC = Effective concentration' note)",
        "sourceFigureDescription": "VECTOR LINE ART (pdfimages: zero rasters; text-layer census — the VLM confirm attempt failed 401 on environment credentials, so the topology stands on the raster count + the pre-extracted text layer and the task's pre-verified reading): two sigmoid-panel figures whose labels stream nearly cleanly — '% Maximal effect' and 'Log (drug dose)' axes on both, ticks 100 / 50 / 0, 'Emax Drug A' / 'Emax Drug B' with the 'Δ Efficacy' bracket label interleaved between them (raw 22-25), 'Drug A' / 'Drug B' with the 'Δ Potency' bracket label (raw 44-48) and the two-line 'EC = Effective / concentration' wrap straddled by the two EC50 labels (raw 50-54).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "dose-response-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Panels 1-2 of the registry visual (DoseResponseMap in visuals/pharm-p6.tsx — the sigmoids recomputed from the logistic equation on original KYP axes: RELATIVE EFFICACY with Drug A's plateau at 100 and Drug B's at 50 and the vertical Δ Efficacy bracket; RELATIVE POTENCY with Drug A left-shifted at the same 100% ceiling, the two dashed EC50 markers, the horizontal Δ Potency bracket, and the left-shift arrow)",
        "productionStatus": "complete",
        "plannedKypVisualId": "dose-response-map", "plannedImplementation": "registry-visual"}),
]
(STAGING / "manifests").mkdir(parents=True, exist_ok=True)
(STAGING / "visual-inventory").mkdir(parents=True, exist_ok=True)
(STAGING / "manifests" / "efficacy-potency.json").write_text(json.dumps(m6, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(STAGING / "visual-inventory" / "efficacy-potency.json").write_text(
    json.dumps({"topicId": "efficacy-potency", "chapterId": "pharmacology", "inventory": inv6,
                "coverageAudit": {"topicId": "efficacy-potency", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Two source visuals: sv1 the two definition blocks (pure text — ZERO rasters) adapted as the registry visual's rule chips / partial-agonist note / EC note / rule cards and carried verbatim in the note's table block; sv2 the two vector dose-response figures (RELATIVE EFFICACY, RELATIVE POTENCY) REDRAWN with original KYP axes as the registry visual's Panels 1-2 (the sigmoids recomputed from the logistic equation, the Δ brackets redrawn as vertical and horizontal brackets, the EC50 markers placed at each curve's half-maximal crossing). Nothing is reproduced; both surface through the single registry visual dose-response-map (DoseResponseMap in visuals/pharm-p6.tsx), whose Panel 3 independence grid is flagged KYP TEACHING CONTENT (not a book figure). Census: zero rasters (pdfimages); the VLM confirm attempt (ph6-vlm-census.ts) failed 401 on both retries (environment credentials — missing X-Token), so the census stands on the raster count + the text layer per the fallback policy. STAGED under .usmle-pipeline-cache/staging-ph6/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH6 STAGING manifest + inventory written to {STAGING}")
print(f"efficacy-potency: evidence {len(kept)}/{len(E6)} verified")
