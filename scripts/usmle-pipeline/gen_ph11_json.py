#!/usr/bin/env python3
"""PH11 pain-transmission — manifest + inventory (Pharmacology
autonomic-drugs batch), STAGED under .usmle-pipeline-cache/staging-ph11/
(the promotion step owns content/). Source: pdf 257 BOTTOM HALF / book 235
— a SHARED page (the p196 convention): the top half, "Acetylcholine
receptors" (part1.txt page-257 lines 1-17), is the COMPLETED sibling
topic acetylcholine-receptors and is NEVER quoted here; only the Pain
transmission block's contiguous lines are quoted — from the "Pain
transmission" heading (line 19) through "...diabetic peripheral
neuropathy." (line 36) — plus the indd slug/timestamp footer (lines
38-40) as its own page-identity evidence entry. LINE NUMBERS: the task
spec's coordinates are already part1.txt page-257 1-based lines (verified
against the cache text layer directly; unlike ph10's ph1-p257.txt raw
coordinates, NO -1 shift is needed). Census (pdfimages): ZERO raster
images on the page — pure text. THE VLM CENSUS RAN THIS SESSION (unlike
the ph6-ph10 batch, which lost VLM to the 401 outage): glm-4.6v read the
120-DPI full-page render AND the 200-DPI bottom-half render
(staging-ph11/vlm-census.txt) and confirms — no figures, diagrams,
photographs, or icons ANYWHERE on the page (both halves); NO margin notes
or mnemonics; the bottom half prints as: the "Pain transmission" heading
-> the "Nociceptive pain" subheading with a THREE-sentence paragraph
(stimuli sentence; TRPV sentence; Aδ/C fiber sentence) -> the "Processes
involved in pain transmission:" lead-in -> FOUR square-bulleted rows
(Transduction / Transmission / Modulation / Perception, process names in
BOLD, each with its printed blocker list) -> the "Neuropathic pain"
subheading with its three-sentence block -> blank space -> the indd
footer. VERBATIM QUIRKS, documented: (1) each process row is prefixed in
the text layer by a 0x83 control-char artifact followed by the ▘ (U+2598)
square-bullet glyph — the bullet IS carried (into the note's verbatim
table and these quotes, via rng() on the raw lines), the invisible
control artifact is stripped by the containment normalizer and is NOT
carried into the note; (2) the page prints α2-agonists (Greek alpha) and
Aδ (Greek delta); (3) "Ca2+ influx–induced" carries an EN dash (U+2013);
(4) each "Process—blocked by" carries an EM dash (U+2014); (5) the page
prints the receptor name in full — "Transient receptor potential vanilloid
ligand receptors" — and never abbreviates it; "TRPV" is used as KYP
SHORTHAND in the note/visual (documented, never presented as printed
text). Nothing is reproduced: there is no figure on the source page, so
the registry visual pain-transmission-map (PainTransmissionMap in
visuals/pharm-p11.tsx — the four-station relay with the blocker chips,
the Aδ/C fiber fork, the TRPV transducer glyph, the neuropathic Na+-
channel panel, and the drug-class overlap ledger) is an ORIGINAL KYP
diagram built from the printed text; the printed text is carried verbatim
in the note's table blocks. Authoring-side paint QA (staging-ph11/
paint-qa-summary.txt): two label collisions found by the VLM+pixel audit
and fixed (the vanilloid label vs the Na+ channel glyph; the PERSISTENT
ACTIVATION label vs the NO STIMULUS NEEDED chip), both re-verified
readable in light AND dark; the 1x 'widespread unreadable dark text'
verdicts were proven a rasterization artifact via the promoted-ph10
control rendered through the identical pipeline."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
L = {257: pages[256].split("\n")}
P = {257: norm(pages[256])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E11 = [
    ("Page identity — the 'Pain transmission' subsection heading with its 'Nociceptive pain' subheading, opening THIS topic's half of the shared page (book 235); the sibling ACh-receptors block (lines 1–17) is NEVER quoted here", rng(257, 19, 21), [257]),
    ("The NOCICEPTIVE PAIN definition — pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli; transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation; signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain)", rng(257, 22, 25), [257]),
    ("The four-process lead-in — 'Processes involved in pain transmission:'", rng(257, 26, 26), [257]),
    ("Process row 1, verbatim and in printed order — TRANSDUCTION, blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids (six classes; the row prints under a ▘ square bullet prefixed by a 0x83 control artifact in the text layer)", rng(257, 27, 28), [257]),
    ("Process row 2, verbatim and in printed order — TRANSMISSION, blocked by local anesthetics, α2-agonists, opioids (three classes)", rng(257, 29, 29), [257]),
    ("Process row 3, verbatim and in printed order — MODULATION, blocked by TCAs, SSRIs, SNRIs, gabapentinoids (four classes)", rng(257, 30, 30), [257]),
    ("Process row 4, verbatim and in printed order — PERCEPTION, blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs (five classes)", rng(257, 31, 31), [257]),
    ("The NEUROPATHIC PAIN block — caused by neuronal dysfunction of the CNS or PNS; transmitted via upregulation and persistent activation of voltage-gated Na+ channels; example: diabetic peripheral neuropathy", rng(257, 33, 36), [257]),
    ("The page footer — the indd print slug and timestamp (position note: these footer lines print at the very foot of pdf 257, BELOW this topic's Neuropathic pain block at the bottom of the shared page; quoted as its own entry for page-identity pinning only)", rng(257, 38, 40), [257]),
]
for c, q, pgs in E11:
    e = ev(c, q, pgs)
    if e["verified"] != "pass":
        fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails:
        print("  x", f)
    sys.exit(1)
print(f"pain-transmission: evidence {len(kept)}/{len(E11)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m11 = {"topicId": "pain-transmission", "title": "Pain Transmission & Analgesic Targets",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [257], "bookPages": "235–235"},
    "sourceEvidence": kept, "visualIds": ["pain-transmission-map"],
    "mechanismIds": ["four-station-relay-map", "nociceptive-vs-neuropathic-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed facts — 4 patterns (two-phase Aδ/C pain, the NSAID-at-transduction station question, the diabetic neuropathic fork, the local-anesthetic two-station span), 4 traps (transduction-vs-transmission, Aδ-vs-C, nociceptive-vs-neuropathic, gabapentinoids-vs-antidepressants by station pair), 3 pivots.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definitions and the four blocker lists only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "station-gloss-layer", "summary": "The plain-word jobs of the four stations (CONVERT / CARRY / TUNE / FEEL) and the fast-lane/slow-lane fiber framing. The page NAMES all four processes but only DEFINES transduction (the TRPV sentence) and transmission (the Aδ/C sentence) — modulation and perception print as bare names with blocker lists, so their one-line glosses, the CONVERT-CARRY-TUNE-FEEL code, and the lane-speed framing are KYP synthesis.",
         "origin": "outside-first-aid", "rationale": "The source prints two mechanism sentences and two bare process names; the station-job layer and the reading protocol (SORT / STATION / LIST / OVERLAP) are KYP's design.",
         "location": "core.keyIdea + blocks[3] the steps block + the registry visual's station cards"},
        {"id": "overlap-ledger-layer", "summary": "The station × drug-class matrix (blocks[2]), the 6·3·4·5 blocker-count spine, and the three-asymmetries callout (blocks[4]) — the printed lists re-sorted by drug class so each drug's station span is visible: local anesthetics transduction+transmission; α2-agonists three stations; gabapentinoids transduction+modulation; NSAIDs/acetaminophen/glucocorticoids transduction-only; opioids transmission+perception; TCAs/SSRIs/SNRIs modulation+perception.",
         "origin": "outside-first-aid", "rationale": "The page prints the lists BY STATION; flipping the axis to BY DRUG CLASS is a KYP re-sorting of the same printed facts (every cell sourced from the printed lists, nothing added).",
         "location": "blocks[2] the matrix table + blocks[4] the exam callout + the registry visual's overlap ledger + rapidReview.m3"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (CONVERT, CARRY, TUNE, FEEL / Aδ IS THE ARROW, C IS THE EMBER / Ca2+ UNLOCKS THE Na+ GATE / THE CHANNEL IS THE DISEASE) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere in the Pain transmission half of book 235 (pdfimages + text-layer + VLM census, staging-ph11/vlm-census.txt: no margin notes or mnemonics anywhere on the page); the four codes are KYP's design.",
         "location": "mnemonics + rapidReview.m3 + the visual's panel footers"},
        {"id": "mini-case-layer", "summary": "The osteoarthritis miniCase (a 66-year-old with mechanical two-phase knee pain — sharp Aδ jab then dull C-fiber ache — relieved by naproxen; asked which of the four processes the NSAID blocks) with distractors quoting the transmission, modulation, and perception lists accurately for the wrong stations.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the four lists but never asks the learner to route a drug through them; the vignette, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SHARED PAGE (the p196 convention): pdf 257 / book 235 carries TWO subsections — 'Acetylcholine receptors' (top half, lines 1-17, the COMPLETED sibling topic acetylcholine-receptors) and 'Pain transmission' (bottom half, THIS topic); only the Pain-transmission block's contiguous lines are quoted — from the 'Pain transmission' heading (part1.txt page-257 line 19) through 'diabetic peripheral neuropathy.' (line 36) — plus the indd slug/timestamp footer (lines 38-40) as its own page-identity entry with the position noted; the ACh half is NEVER quoted. CENSUS (three-way): (1) pdfimages — ZERO raster images on pdf 257 (staging-ph11/pdfimages-census.txt); (2) text layer — the bottom half is pure text (nociceptive definition, the four-process lead-in + four ▘-bulleted rows, the neuropathic block); (3) THE VLM CENSUS RAN THIS SESSION (glm-4.6v, 120-DPI full page + 200-DPI bottom half, staging-ph11/vlm-census.txt — unlike the ph6-ph10 batch, which lost VLM to the 401 outage) and confirms no figures, diagrams, photographs, or icons ANYWHERE on the page, NO margin notes or mnemonics, the process names printing in bold under small square bullets, and the nociceptive paragraph being THREE sentences (stimuli; TRPV; Aδ/C). QUIRKS, documented: (1) each process row is prefixed by a 0x83 control-char artifact before the ▘ (U+2598) square-bullet glyph in the text layer — the bullet glyph is carried verbatim (into the quotes via rng() and into the note's table), the invisible control artifact is not (stripped by the containment normalizer); (2) the page prints α2-agonists (Greek alpha) and Aδ fibers (Greek delta) — preserved everywhere; (3) 'Ca2+ influx–induced' carries an EN dash and each 'Process—blocked by' carries an EM dash — preserved verbatim; (4) the page prints the receptor name in full ('Transient receptor potential vanilloid ligand receptors') and never abbreviates it — 'TRPV' is KYP shorthand, used only in the note's synthesis text and the visual's glyph label, never inside a verbatim carry; (5) the spec's line coordinates are already part1.txt page-257 1-based lines (verified directly; no ph1-p257.txt -1 shift as in ph10); (6) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (7) outputs are STAGED under .usmle-pipeline-cache/staging-ph11/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'pain-transmission-map' is therefore not yet in visuals/registry.tsx by design); (8) there is NO figure on the source page, so the registry visual is an ORIGINAL KYP diagram (not a redraw) built from the printed text; the printed text is carried verbatim in the note's table blocks; (9) authoring-side paint QA (staging-ph11/paint-qa-summary.txt): the VLM+pixel audit found and fixed TWO label collisions (vanilloid label vs Na+ channel glyph; PERSISTENT ACTIVATION label vs NO STIMULUS NEEDED chip), both re-verified readable in light AND dark at 2x rasterization, and the 1x 'widespread unreadable dark text' verdicts were proven a rasterization artifact via the promoted-ph10 control visual failing the identical 1x pipeline test.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "pain-transmission", "requiredInKYP": True}
inv11 = [
    dict(SV_BASE, **{
        "visualId": "pain-transmission-sv1",
        "sourcePages": {"part": 1, "pdfPages": [257], "bookPages": "235"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Pain transmission text (book 235, bottom half) — the nociceptive pain definition with the TRPV transduction cascade and the Aδ/C fiber fork, the four-process blocker-list table, and the neuropathic pain block",
        "sourceFigureDescription": "PURE TEXT, THREE BLOCKS + A BULLETED LIST (pdfimages: zero raster images; the VLM census RAN this session — glm-4.6v on the 120-DPI and 200-DPI renders, staging-ph11/vlm-census.txt — confirming no figures, photographs, icons, or margin notes/mnemonics anywhere on the page): [1] the NOCICEPTIVE PAIN block — 'Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli. Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation. Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).' — [2] the lead-in 'Processes involved in pain transmission:' with FOUR square-bulleted rows (process names in bold): '▘ Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids' / '▘ Transmission—blocked by local anesthetics, α2-agonists, opioids' / '▘ Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids' / '▘ Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs' — and [3] the NEUROPATHIC PAIN block — 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.' No figures, margin notes, or mnemonics print in the Pain-transmission half.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "pain-transmission-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (PainTransmissionMap in visuals/pharm-p11.tsx — the PERIPHERY panel with the TRPV transducer glyph: stimulus chips, vanilloid ligand receptor, Ca2+ influx arrow, Na+ channel activation spark, the signal-born zigzag; the Aδ fast lane and C slow lane fork into the CNS panel with the MODULATION and PERCEPTION boxes; the four station cards with every printed blocker chip docked beneath its station and the 6·3·4·5 count chips; the NEUROPATHIC PAIN panel with the upregulated-channel nerve glyph, NO STIMULUS NEEDED flag, and the diabetic peripheral neuropathy example card; and the drug-class × station overlap ledger); the printed text is also carried verbatim in the note's table block (blocks[1]), core.what, and recall[0]/[2-6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "pain-transmission-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph11"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "pain-transmission.json").write_text(json.dumps(m11, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "pain-transmission.json").write_text(
    json.dumps({"topicId": "pain-transmission", "chapterId": "pharmacology", "inventory": inv11,
                "coverageAudit": {"topicId": "pain-transmission", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The Pain-transmission half's single visual asset — the printed text (nociceptive definition + four-process blocker-list table + neuropathic block) — is accounted for as an ORIGINAL KYP ADAPTATION: there is no figure on the source page (pdfimages: zero rasters; the VLM census RAN this session and confirms no figures or margin mnemonics anywhere), so the registry visual pain-transmission-map (PainTransmissionMap in visuals/pharm-p11.tsx) is an original KYP diagram built from the printed text — the four-station relay with the blocker chips, the Aδ/C fiber fork, the TRPV transducer glyph, the neuropathic upregulated-Na+-channel panel, and the drug-class overlap ledger — whose text is also carried verbatim in the note's table block; nothing is reproduced. SHARED PAGE (the p196 convention): the top half of pdf 257 / book 235 (Acetylcholine receptors) belongs to the completed sibling topic acetylcholine-receptors and is out of scope here. Authoring-side paint QA: two label collisions found and fixed, verified readable in both themes (staging-ph11/paint-qa-summary.txt). STAGED under .usmle-pipeline-cache/staging-ph11/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH11 manifest + inventory staged: {OUT}/manifests/pain-transmission.json, {OUT}/visual-inventory/pain-transmission.json")
print(f"pain-transmission: evidence {len(kept)}/{len(E11)} verified")
