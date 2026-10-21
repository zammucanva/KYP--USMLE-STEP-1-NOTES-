#!/usr/bin/env python3
"""M29 bugs-by-system-gi-meningitis — manifest + inventory + flip (29/39).
Census: p197 0 rasters; p198 1 gray raster (the osteomyelitis imaging A —
the radiograph [left] + MRI [right] pair). Text quirks: the SYSTEMS banner
typo 'MICROCIOLOGY—SYSTEMS' on books 175-176; the diarrhea table's two
columns interleave (bloody organisms 10-37, then watery 39-63, with the
virus row wrapping at 62-63); the pneumonia table's age headers emit
grouped (66-74) before the organism blocks (76-102) with FA's two glosses
(Runts May Cough 85; Chunky Sputum 86) interleaved mid-column; the special
groups emit 105-141; p198's meningitis columns interleave (17-36) before
the empiric note (38-45); the CSF table emits row-by-row in 5-cell groups
(55-83); the osteomyelitis table emits with the footnote A marker at 100
and the workup text at 131-134.
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
L = {p: pages[p-1].split("\n") for p in (197, 198)}
P = {p: norm(pages[p-1]) for p in (197, 198)}
def rng(pg, a, b): return "\n".join(L[pg][a:b+1])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E29 = [
    ("Page banner", "MICROBIOLOGY", 197),
    ("Chapter banner (the source's own SYSTEMS typo: MICROCIOLOGY)", "▶ MICROCIOLOGY—SYSTEMS", 197),
    ("Printed book-page number (page identity)", "175", 197),
    ("Section banner", "SEC TION II", 197),
    ("Section heading", rng(197, 8, 9), 197),
    ("Bloody column, part 1 (Campylobacter 42C; E histolytica amebic dysentery + liver abscess; EHEC O157:H7 Shiga + HUS; EIEC mucosal invasion)", rng(197, 10, 25), 197),
    ("Bloody column, part 2 (Salmonella lactose-negative flagellar poultry/eggs; Shigella low ID50 Shiga human-only bacillary dysentery; Y enterocolitica pseudoappendicitis)", rng(197, 27, 37), 197),
    ("Watery column, part 1 (C difficile pseudomembranous antibiotics/PPIs; C perfringens gas gangrene; ETEC LT/ST travelers')", rng(197, 39, 50), 197),
    ("Watery column, part 2 (Protozoa Giardia/Cryptosporidium; V cholerae rice-water infected seafood; the virus row wrapping across lines — norovirus most common developed, rotavirus down with vaccination, enteric adenovirus)", rng(197, 52, 63), 197),
    ("Pneumonia heading + the age headers, grouped", rng(197, 65, 74), 197),
    ("Pneumonia: the neonate + children columns (GBS, E coli; RSV, Mycoplasma, C trachomatis infants-3yr, C pneumoniae school-aged, S pneumoniae + FA's Runts May Cough gloss)", rng(197, 76, 85), 197),
    ("Pneumonia: the 18-40 column (Mycoplasma, C pneumoniae, S pneumoniae, viruses + FA's Chunky Sputum gloss) and the 40-65 column", rng(197, 86, 97), 197),
    ("Pneumonia: the 65+ column (S pneumoniae, influenza, anaerobes, H influenzae, gram-negative rods)", rng(197, 99, 102), 197),
    ("Special groups, part 1 (alcohol overuse Klebsiella + aspiration anaerobes; injection drug use; aspiration; atypical set; cystic fibrosis)", rng(197, 105, 125), 197),
    ("Special groups, part 2 (immunocompromised incl. P jirovecii with HIV; healthcare-associated; postviral; COPD)", rng(197, 127, 141), 197),
    ("Timestamp footer (page identity)", rng(197, 145, 145), 197),
    ("Printed book-page number (page identity)", "176", 198),
    ("Section banner", "SEC TION II", 198),
    ("Page banner", "MICROBIOLOGY", 198),
    ("Chapter banner (the source's own SYSTEMS typo)", "▶ MICROCIOLOGY—SYSTEMS", 198),
    ("Meningitis heading + the age headers", rng(198, 8, 15), 198),
    ("Meningitis: the newborn + children columns (GBS, E coli, Listeria; S pneumoniae, N meningitidis, H influenzae type b, GBS, enteroviruses)", rng(198, 17, 25), 198),
    ("Meningitis: the 6-60 and 60+ columns (S pneumoniae, N meningitidis, enteroviruses, HSV; the newborn set returns with Listeria)", rng(198, 27, 36), 198),
    ("The empiric rule (ceftriaxone + vancomycin; ampicillin if Listeria; acyclovir if encephalitis) + the viral set (coxsackievirus, HSV-2, HIV, West Nile, VZV; Cryptococcus in HIV)", rng(198, 38, 42), 198),
    ("The vaccine notes (GBS down with screening + prophylaxis; H influenzae down with conjugate vaccines — cases in the unimmunized)", rng(198, 43, 45), 198),
    ("CSF heading + the column headers", rng(198, 46, 53), 198),
    ("CSF: bacterial + fungal/TB rows (up OP; up PMNs / up lymphocytes; up protein; down glucose)", rng(198, 55, 73), 198),
    ("CSF: the viral row (normal/up OP; up lymphocytes; normal/up protein; NORMAL glucose)", rng(198, 75, 83), 198),
    ("Brain abscess block (viridans + S aureus; dental adds oral anaerobes; multiple = bacteremia; single = contiguous with the lobe map; Toxoplasma in AIDS)", rng(198, 85, 92), 198),
    ("Osteomyelitis heading + headers + the A footnote marker", rng(198, 94, 102), 198),
    ("Osteomyelitis rows, part 1 (default S aureus; sexually active N gonorrhoeae; sickle cell Salmonella; prosthetic joint)", rng(198, 104, 118), 198),
    ("Osteomyelitis rows, part 2 (vertebral S aureus + TB Pott; cat/dog bites Pasteurella; injection drug use)", rng(198, 119, 129), 198),
    ("The workup text (ESR/CRP sensitive not specific; radiographs insensitive early, useful chronic A; MRI best acute; biopsy identifies)", rng(198, 131, 134), 198),
    ("Timestamp footer (page identity)", rng(198, 138, 138), 198),
]
for c, q, p in E29:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"bugs-by-system-gi-meningitis: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m29 = {"topicId": "bugs-by-system-gi-meningitis", "title": "Bugs by System: GI, Pneumonia, Meningitis & CSF",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Systems Microbiology", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [197, 198], "bookPages": "175–176"},
    "sourceEvidence": kept, "visualIds": ["systems-bug-matrix"],
    "mechanismIds": ["diarrhea-split-logic", "age-ladder-logic"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the matrices; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "systems-matrix-synthesis", "summary": "The diarrhea bloody/watery mechanism split; the age-ladder U-shape (the birth organisms returning at life's end) shared by pneumonia and meningitis with the Listeria ampicillin rule; the CSF glucose tiebreaker for the lymphocyte rows; the abscess count-routing with its lobe map; and the osteomyelitis risk-factor swaps — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the five matrices without the shared-ladder or routing synthesis; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + pivots + mnemonics + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p197 0 rasters; p198 1 gray raster (the osteomyelitis radiograph + MRI pair A — described-in-text only). The SYSTEMS banner typo MICROCIOLOGY prints on books 175-176. The diarrhea columns interleave; the virus row wraps across lines 62-63; the pneumonia age headers emit grouped before the organism blocks with FA's two glosses (Runts May Cough; Chunky Sputum) interleaved mid-column; the special groups emit as pairs of label + text; p198's meningitis columns interleave before the empiric note; the CSF table emits row-by-row in 5-cell groups; the osteomyelitis footnote A marker emits at line 100 with the workup text at 131-134. FA's printed glosses are quoted in the table block for verification only.",
    "updatedAt": str(date.today())}
inv29 = [
    {"visualId": "bugs-by-system-gi-meningitis-sv1", "sourceBook": "First Aid for the USMLE Step 1 2026",
     "sourcePages": {"part": 1, "pdfPages": [197], "bookPages": "175–175"},
     "chapterId": "microbiology", "visualType": "VISUAL_TABLE",
     "visualPurpose": "The Bugs causing diarrhea split table (book 175)",
     "sourceFigureDescription": "The printed bloody/watery two-column directory.",
     "requiredInKYP": True, "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
     "subsection": "Microbiology — Systems Microbiology", "topicId": "bugs-by-system-gi-meningitis",
     "implementationType": "ORIGINAL_KYP_REDRAW", "kypVisualId": "systems-bug-matrix",
     "kypImplementation": "registry-visual", "qaStatus": "passed",
     "kypLocation": "the DIARRHEA SPLIT panel", "productionStatus": "complete",
     "plannedKypVisualId": "systems-bug-matrix", "plannedImplementation": "registry-visual"},
    {"visualId": "bugs-by-system-gi-meningitis-sv2", "sourceBook": "First Aid for the USMLE Step 1 2026",
     "sourcePages": {"part": 1, "pdfPages": [197], "bookPages": "175–175"},
     "chapterId": "microbiology", "visualType": "VISUAL_TABLE",
     "visualPurpose": "The Common causes of pneumonia table (book 175)",
     "sourceFigureDescription": "The printed age-ladder table with the special-groups set.",
     "requiredInKYP": True, "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
     "subsection": "Microbiology — Systems Microbiology", "topicId": "bugs-by-system-gi-meningitis",
     "implementationType": "ORIGINAL_KYP_REDRAW", "kypVisualId": "systems-bug-matrix",
     "kmpImplementation": "registry-visual", "kypImplementation": "registry-visual", "qaStatus": "passed",
     "kypLocation": "the PNEUMONIA LADDER + special groups panel", "productionStatus": "complete",
     "plannedKypVisualId": "systems-bug-matrix", "plannedImplementation": "registry-visual"},
    {"visualId": "bugs-by-system-gi-meningitis-sv3", "sourceBook": "First Aid for the USMLE Step 1 2026",
     "sourcePages": {"part": 1, "pdfPages": [198], "bookPages": "176–176"},
     "chapterId": "microbiology", "visualType": "VISUAL_TABLE",
     "visualPurpose": "The Common causes of meningitis + CSF findings tables (book 176)",
     "sourceFigureDescription": "The printed age-ladder table, the CSF findings table, and the empiric/viral notes.",
     "requiredInKYP": True, "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
     "subsection": "Microbiology — Systems Microbiology", "topicId": "bugs-by-system-gi-meningitis",
     "implementationType": "ORIGINAL_KYP_REDRAW", "kypVisualId": "systems-bug-matrix",
     "kypImplementation": "registry-visual", "qaStatus": "passed",
     "kypLocation": "the MENINGITIS LADDER + CSF key + empiric strip", "productionStatus": "complete",
     "plannedKypVisualId": "systems-bug-matrix", "plannedImplementation": "registry-visual"},
    {"visualId": "bugs-by-system-gi-meningitis-sv4", "sourceBook": "First Aid for the USMLE Step 1 2026",
     "sourcePages": {"part": 1, "pdfPages": [198], "bookPages": "176–176"},
     "chapterId": "microbiology", "visualType": "VISUAL_TABLE",
     "visualPurpose": "The brain-abscess and osteomyelitis blocks (book 176)",
     "sourceFigureDescription": "The printed abscess routing text and the osteomyelitis risk-factor table with the imaging workup.",
     "requiredInKYP": True, "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
     "subsection": "Microbiology — Systems Microbiology", "topicId": "bugs-by-system-gi-meningitis",
     "implementationType": "ORIGINAL_KYP_REDRAW", "kypVisualId": "systems-bug-matrix",
     "kypImplementation": "registry-visual", "qaStatus": "passed",
     "kypLocation": "the BRAIN ABSCESS + OSTEOMYELITIS panels", "productionStatus": "complete",
     "plannedKypVisualId": "systems-bug-matrix", "plannedImplementation": "registry-visual"},
    {"visualId": "bugs-by-system-gi-meningitis-sv5", "sourceBook": "First Aid for the USMLE Step 1 2026",
     "sourcePages": {"part": 1, "pdfPages": [198], "bookPages": "176–176"},
     "chapterId": "microbiology", "visualType": "RADIOLOGY",
     "visualPurpose": "The osteomyelitis imaging pair (book 176)",
     "sourceFigureDescription": "The radiograph (left) and MRI (right) of osteomyelitis, marker A.",
     "requiredInKYP": True, "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
     "subsection": "Microbiology — Systems Microbiology", "topicId": "bugs-by-system-gi-meningitis",
     "implementationType": "ORIGINAL_KYP_ADAPTATION", "kypVisualId": None,
     "kypImplementation": "note-block", "qaStatus": "passed",
     "kypLocation": "blocks[1] table row — figure pointer carried verbatim; described-in-text only",
     "productionStatus": "complete", "plannedKypVisualId": "note-block", "plannedImplementation": "note-block"},
]
inv29[1].pop("kmpImplementation", None)
(ROOT / "content/usmle/manifests/bugs-by-system-gi-meningitis.json").write_text(json.dumps(m29, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/bugs-by-system-gi-meningitis.json").write_text(
    json.dumps({"topicId": "bugs-by-system-gi-meningitis", "chapterId": "microbiology", "inventory": inv29,
                "coverageAudit": {"topicId": "bugs-by-system-gi-meningitis", "textbookVisualCount": 5,
                    "accountedFor": 5, "sourceReproductions": 0, "kypRedraws": 4, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "4 source tables redrawn in the registry visual; the osteomyelitis imaging pair is COPYRIGHTED — described-in-text only."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "bugs-by-system-gi-meningitis":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv29))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
print("M29 manifest + inventory + flip done")
