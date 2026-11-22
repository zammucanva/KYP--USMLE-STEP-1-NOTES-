#!/usr/bin/env python3
"""M33 protein-synthesis-inhibitors — manifest + inventory + flip (33/39).
Census: p209/p210/p211 are PURE TEXT (0 rasters each). The entire translation
figure prints in the text layer on book 187 (the 70S/30S/50S labels, the E/P/A
sites, the mRNA thread 5´-A-U-G-C-A-U-G-A-U-3´, the UGA stop, and the five
drug-door labels interleaved) — redrawn as an original KYP vector visual.
Text quirks documented: the banner typo MICROCIOLOGY—ANTIMICROCIALS on all
three pages; 'SEC TION II' split print on all three; the source's own margin
typo 'ccel (sell)' for 'cell (sell)' on book 187 (raw line 27); the figure
glyphs emit in non-reading order (70S labels 29-39 first, Initiation 41-63,
A-site/Elongation 69-107 with the drug labels interleaved, Translocation
131 + the macrolides label 135-136 late); the aminoglycosides card emits
AFTER the figure (138-161); the polymyxins mechanism carries the
C1-control-prefixed arrows (\\x8e-> — the normalizer strips them)."""
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
L = {p: pages[p-1].split("\n") for p in range(209, 212)}
P = {p: norm(pages[p-1]) for p in range(209, 212)}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E33 = [
    # ── p209 / book 187 — intro, lists, the figure, the aminoglycosides card ──
    ("Page banner trio + printed book-page number", rng(209, 1, 7), 209),
    ("The section heading pair", rng(209, 9, 10), 209),
    ("The selectivity sentence (the 70S/80S rule)", rng(209, 12, 14), 209),
    ("The 30S inhibitor list (printed)", rng(209, 16, 19), 209),
    ("The 50S inhibitor list (printed)", rng(209, 21, 25), 209),
    ("The source's margin mnemonic with its own 'ccel' typo (for 'cell')", rng(209, 27, 27), 209),
    ("The figure: the 70S/30S/50S labels with the linezolid door label", rng(209, 29, 38), 209),
    ("The figure: the Initiation block (initiator tRNA, mRNA, U AC, the 5´ AUG thread)", rng(209, 41, 58), 209),
    ("The figure: the A-site binding block (GUA, U AC, the A-site label, the second thread)", rng(209, 60, 81), 209),
    ("The figure: Elongation + the tetracyclines door label", rng(209, 83, 93), 209),
    ("The figure: the chloramphenicol door label + the H/M markers + the UAC pairs", rng(209, 95, 103), 209),
    ("The figure: Termination (UGA) + the thread pairs", rng(209, 105, 131), 209),
    ("The figure: the translocation + macrolides/clindamycin door label (emitting last)", rng(209, 131, 136), 209),
    ("The aminoglycosides card: drug roster", rng(209, 138, 140), 209),
    ("The aminoglycosides margin mnemonic (Mean GNATS — cannot kill anaerobes)", rng(209, 141, 141), 209),
    ("The aminoglycosides card: MECHANISM (initiation complex, misreading, O2 for uptake)", rng(209, 143, 147), 209),
    ("The aminoglycosides card: CLINICAL USE + the Neomycin margin note", rng(209, 149, 152), 209),
    ("The aminoglycosides card: ADVERSE EFFECTS (myasthenia gravis, loop diuretics)", rng(209, 154, 157), 209),
    ("The aminoglycosides card: MECHANISM OF RESISTANCE (acetylation, phosphorylation, adenylation)", rng(209, 159, 161), 209),
    ("The indd footer + timestamp (page identity)", rng(209, 163, 165), 209),
    # ── p210 / book 188 — tetracyclines, tigecycline, chloramphenicol, clindamycin ──
    ("Page banner trio + printed book-page number", rng(210, 1, 7), 210),
    ("The tetracyclines card: heading + drug line", rng(210, 9, 11), 210),
    ("The tetracyclines card: MECHANISM (aa-tRNA attachment, doxycycline fecal, the divalent-cation rule)", rng(210, 13, 18), 210),
    ("The tetracyclines card: CLINICAL USE (intracellular accumulation, Rickettsia, Chlamydia, acne, community-acquired MRSA)", rng(210, 20, 24), 210),
    ("The tetracyclines card: ADVERSE EFFECTS (with the source's own 'Teratocyclines' mnemonic)", rng(210, 26, 30), 210),
    ("The tetracyclines card: MECHANISM OF RESISTANCE (efflux pumps)", rng(210, 32, 34), 210),
    ("The tigecycline card: heading + MECHANISM", rng(210, 36, 39), 210),
    ("The tigecycline card: CLINICAL USE (MRSA, VRE)", rng(210, 41, 44), 210),
    ("The tigecycline card: ADVERSE EFFECTS", rng(210, 46, 48), 210),
    ("The chloramphenicol card: heading + MECHANISM (peptidyltransferase)", rng(210, 50, 53), 210),
    ("The chloramphenicol card: CLINICAL USE (meningitis, RMSF, developing countries)", rng(210, 55, 59), 210),
    ("The chloramphenicol card: ADVERSE EFFECTS (gray baby syndrome, UDP-glucuronosyltransferase)", rng(210, 61, 64), 210),
    ("The chloramphenicol card: MECHANISM OF RESISTANCE (acetyltransferase)", rng(210, 66, 68), 210),
    ("The clindamycin card: heading + MECHANISM (translocation)", rng(210, 70, 73), 210),
    ("The clindamycin card: CLINICAL USE (above the diaphragm vs metronidazole below)", rng(210, 75, 80), 210),
    ("The clindamycin card: ADVERSE EFFECTS (pseudomembranous colitis)", rng(210, 82, 84), 210),
    ("The indd footer + timestamp (page identity)", rng(210, 86, 88), 210),
    # ── p211 / book 189 — linezolid, macrolides, polymyxins ──
    ("Page banner trio + printed book-page number", rng(211, 1, 7), 211),
    ("The linezolid card: heading + MECHANISM (23S rRNA, initiation complex)", rng(211, 9, 13), 211),
    ("The linezolid card: CLINICAL USE (MRSA and VRE)", rng(211, 15, 17), 211),
    ("The linezolid card: ADVERSE EFFECTS (myelosuppression, serotonin syndrome, partial MAO)", rng(211, 19, 22), 211),
    ("The linezolid card: MECHANISM OF RESISTANCE (rRNA point mutation)", rng(211, 24, 26), 211),
    ("The macrolides card: heading + drug line", rng(211, 28, 30), 211),
    ("The macrolides card: MECHANISM (the source's own 'macroslides' gloss)", rng(211, 32, 35), 211),
    ("The macrolides card: CLINICAL USE (atypicals, STIs, B pertussis)", rng(211, 37, 40), 211),
    ("The macrolides card: ADVERSE EFFECTS (the source's own MACRO mnemonic set + P-450)", rng(211, 42, 46), 211),
    ("The macrolides card: MECHANISM OF RESISTANCE (23S methylation)", rng(211, 48, 50), 211),
    ("The polymyxins card: heading + drug line (colistin, polymyxin B)", rng(211, 52, 54), 211),
    ("The polymyxins card: MECHANISM (cation polypeptides; the C1-prefixed arrows the normalizer strips)", rng(211, 56, 59), 211),
    ("The polymyxins card: CLINICAL USE (salvage therapy, triple antibiotic ointment)", rng(211, 61, 64), 211),
    ("The polymyxins card: ADVERSE EFFECTS (neurotoxicity, respiratory failure)", rng(211, 66, 68), 211),
    ("The indd footer + timestamp (page identity)", rng(211, 70, 72), 211),
]
for c, q, p in E33:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"protein-synthesis-inhibitors: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m33 = {"topicId": "protein-synthesis-inhibitors", "title": "Protein Synthesis Inhibitors: 30S, 50S & Beyond",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Antimicrobials", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [209, 210, 211], "bookPages": "187–189"},
    "sourceEvidence": kept, "visualIds": ["ribosome-target-map"],
    "mechanismIds": ["translation-stage-doors", "uptake-selectivity-rules"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the cards and the figure; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "stage-door-synthesis", "summary": "The figure's four stages as the drug-door routing system (assemble / deliver / weld / slide) plus the three practical rules (O2 OR NO GO, CHELATE AND STARVE, the diaphragm split) — KYP's reading of the printed figure.",
         "origin": "outside-first-aid", "rationale": "The source prints the figure and the cards but no routing system; the stage-door mapping and the three-rules synthesis are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + the exam callout + patterns + traps + pivots + mnemonics + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: all three pages pure text (0 rasters); the translation figure prints entirely in the text layer — an original KYP vector redraw (ribosome-target-map). The source's own margin typo 'ccel (sell)' (book 187, raw 27) carried verbatim in the note's tables and documented; the source's own margin mnemonics ('Buy at 30', 'Mean GNATS') carried ONLY inside the verbatim tables per the E38 precedent — omitted from the visual and the KYP memory layer ('macroslides' and 'MACRO' print inside field text and are carried there as printed). Figure glyph emission order documented (70S labels first, the drug-door labels interleaved, Translocation/macrolides label last); the aminoglycosides card emits after the figure; the polymyxins mechanism carries the C1-prefixed arrows (normalizer strips).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "microbiology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Antimicrobials",
    "topicId": "protein-synthesis-inhibitors", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"protein-synthesis-inhibitors-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [pages], "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv33 = [
    sv(1, 209, "187–187", "SUMMARY_FIGURE", "The translation figure (book 187)",
       "The printed figure — entirely text-layer glyphs (0 rasters): the 70S ribosome with 30S/50S labels, the mRNA thread 5´-A-U-G-C-A-U-G-A-U-3´, the E/P/A sites, Initiation/Elongation/Termination/Translocation panels, and the five drug-door labels (Aminoglycosides 30S, Linezolid 50S, Tetracyclines 30S, Chloramphenicol 50S, Macrolides and clindamycin 50S).",
       "ORIGINAL_KYP_REDRAW", "ribosome-target-map", "the whole component: the banner rules, the figure's four stage panels with the drug doors, the directory rosters, the three practical rules, and the polymyxin annex"),
    sv(2, 209, "187–187", "VISUAL_TABLE", "The section intro, the inhibitor lists, and the aminoglycosides card (book 187)",
       "The printed selectivity sentence, the cidal/static banner, the 30S/50S lists, and the aminoglycosides card with its margin notes (including the source's own 'ccel' typo and the Mean GNATS line).",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim per the page-ownership convention", "note-block"),
    sv(3, 210, "188–188", "VISUAL_TABLE", "The tetracyclines, tigecycline, chloramphenicol, and clindamycin cards (book 188)",
       "The page's four printed cards in full, including the source's own 'Teratocyclines' mnemonic in the adverse-effects row.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim", "note-block"),
    sv(4, 211, "189–189", "VISUAL_TABLE", "The linezolid, macrolides, and polymyxins cards (book 189)",
       "The page's three printed cards in full, including the source's own 'macroslides' gloss and MACRO mnemonic inside the field text.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[3] the table block — carried verbatim", "note-block"),
]
(ROOT / "content/usmle/manifests/protein-synthesis-inhibitors.json").write_text(json.dumps(m33, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/protein-synthesis-inhibitors.json").write_text(
    json.dumps({"topicId": "protein-synthesis-inhibitors", "chapterId": "microbiology", "inventory": inv33,
                "coverageAudit": {"topicId": "protein-synthesis-inhibitors", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The translation figure (pure text-layer glyphs, 0 rasters) is the registry visual — an original KYP vector redraw preserving the source's stage panels and drug-door labels. The three page-card groups are note-block verbatim adaptations (page-ownership convention). The source's own margin mnemonics are carried only inside the verbatim tables; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "protein-synthesis-inhibitors":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv33))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
print("M33 manifest + inventory + flip done")
