#!/usr/bin/env python3
"""M28 normal-flora — manifest + inventory + flip (28/39). A TABLE NOTE
(requiresVisual false — the E22/E35 pattern). Source: pdf 196 / book 174,
the Normal microbiota + Bugs causing foodborne illness blocks (page
ownership: the Prions block on the same page belongs to M25). The page is
pure text (0 rasters).

Text quirks: the SYSTEMS banner typo 'MICROCIOLOGY—SYSTEMS' prints on book
174 (the VIROLOGY banner's sibling). The microbiota table's headers
interleave (LOCATION at 28, MICROORGANISM at 29); the vagina row's
'group B' splits from 'strep' across lines 53-54; the foodborne table
emits with the S aureus source text (86) interleaved BEFORE its label
(88); the seafood superscript 'a' prints detached at 90/94 with the source
text 'Raw/undercooked seafood' at 96 and the V vulnificus footnote at 98.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"

def norm(s: str) -> str:
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()

pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
L = {196: pages[195].split("\n")}
P = {196: norm(pages[195])}

def rng(pg, a, b):
    return "\n".join(L[pg][a:b + 1])

def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}

kept, fails = [], []
E28 = [
    ("Printed book-page number (page identity)", "174", 196),
    ("Section banner", "SEC TION II", 196),
    ("Page banner", "MICROBIOLOGY", 196),
    ("Chapter banner (the source's own SYSTEMS typo: MICROCIOLOGY)", "▶ MICROCIOLOGY—SYSTEMS", 196),
    ("Normal microbiota heading", rng(196, 20, 22), 196),
    ("The foodborne heading", rng(196, 24, 24), 196),
    ("The C-section neonate note", rng(196, 26, 26), 196),
    ("Microbiota table headers (interleaved)", rng(196, 28, 29), 196),
    ("Skin + Nose rows (S epidermidis x2; S aureus colonization)", rng(196, 31, 37), 196),
    ("Oropharynx + Dental plaque rows (viridans; S mutans)", rng(196, 39, 45), 196),
    ("Colon + Vagina rows (B fragilis > E coli; Lactobacillus + E coli/group B strep colonization — the split line 53-54)", rng(196, 47, 54), 196),
    ("The quick-quick rule (S aureus and B cereus — starts quickly and ends quickly, exotoxin-mediated)", rng(196, 56, 56), 196),
    ("Foodborne table headers", rng(196, 58, 59), 196),
    ("B cereus row (reheated rice + FA's printed gloss — verification-only)", rng(196, 61, 63), 196),
    ("C botulinum + C perfringens rows (improperly canned foods, raw honey; reheated meat)", rng(196, 66, 73), 196),
    ("E coli O157:H7 + L monocytogenes + Salmonella rows (undercooked meat; deli meats, soft cheeses; poultry, meat, eggs)", rng(196, 75, 85), 196),
    ("S aureus row, interleaved (the source text at 86 emits BEFORE the label at 88: meats, mayonnaise, custard; preformed toxin)", rng(196, 86, 89), 196),
    ("The Vibrio row + the detached superscript + the source text + the V vulnificus wound footnote (raw/undercooked seafood; predominantly wound infections from contaminated water or shellfish)", rng(196, 90, 98), 196),
    ("Timestamp footer (page identity)", rng(196, 101, 101), 196),
]
for c, q, p in E28:
    e = ev(c, q, p)
    if e["verified"] != "pass":
        fails.append(f"NOT FOUND: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails:
        print("  x", f)
    sys.exit(1)
print(f"normal-flora: evidence {len(kept)} verified")

QA = {g: "pass" for g in ["sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
    "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
    "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
    "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
    "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
    "relatedAuthored", "qaPassed", "trackerSynced"]}

m28 = {"topicId": "normal-flora", "title": "Normal Flora & Colonization",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Systems Microbiology", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [196], "bookPages": "174–174"},
    "sourceEvidence": kept, "visualIds": [], "mechanismIds": ["site-colonization-logic"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two tables; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "site-source-synthesis", "summary": "The site-ownership reading of the flora directory (one commensal per surface with the colonizer annotations made clinical: device S epidermidis, peripartum GBS, dental-work viridans) and the foodborne timing axis (the quick-quick preformed-toxin pair against the incubated growers) — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the tables without the ownership or timing synthesis; these are KYP's design.",
         "location": "core.keyIdea + mechanism caption + callout + patterns + traps + pivots + mnemonics + miniCase"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "TABLE NOTE (requiresVisual false — the E22/E35 pattern): both source tables carried verbatim in the note's table blocks; no registry visual per the approved inventory. Census: the page is pure text (0 rasters). Page ownership: book 174's Prions block belongs to M25 (cross-documented); the microbiota and foodborne blocks belong here. The SYSTEMS banner typo 'MICROCIOLOGY—SYSTEMS' prints on book 174. The microbiota headers interleave (28-29); the vagina row's 'group B'/'strep' splits across 53-54; the S aureus source text emits BEFORE its label (86 before 88); the seafood superscript prints detached (90/94) with the source text at 96 and the V vulnificus footnote at 98. FA's printed B cereus gloss is quoted in the table block for verification only.",
    "updatedAt": str(date.today())}

inv28 = [
    {"visualId": "normal-flora-sv1", "sourceBook": "First Aid for the USMLE Step 1 2026",
     "sourcePages": {"part": 1, "pdfPages": [196], "bookPages": "174–174"},
     "chapterId": "microbiology", "visualType": "VISUAL_TABLE",
     "visualPurpose": "The Normal microbiota table (book 174)",
     "sourceFigureDescription": "The printed 2-column flora directory with the C-section note.",
     "requiredInKYP": True, "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
     "subsection": "Microbiology — Systems Microbiology", "topicId": "normal-flora",
     "implementationType": "ORIGINAL_KYP_ADAPTATION", "kypVisualId": None,
     "kypImplementation": "note-block", "qaStatus": "passed",
     "kypLocation": "blocks[0] table block — verbatim",
     "productionStatus": "complete", "plannedKypVisualId": "note-block", "plannedImplementation": "note-block"},
    {"visualId": "normal-flora-sv2", "sourceBook": "First Aid for the USMLE Step 1 2026",
     "sourcePages": {"part": 1, "pdfPages": [196], "bookPages": "174–174"},
     "chapterId": "microbiology", "visualType": "VISUAL_TABLE",
     "visualPurpose": "The Bugs causing foodborne illness table (book 174)",
     "sourceFigureDescription": "The printed 2-column source map with the quick-quick rule.",
     "requiredInKYP": True, "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
     "subsection": "Microbiology — Systems Microbiology", "topicId": "normal-flora",
     "implementationType": "ORIGINAL_KYP_ADAPTATION", "kypVisualId": None,
     "kypImplementation": "note-block", "qaStatus": "passed",
     "kypLocation": "blocks[1] table block — verbatim",
     "productionStatus": "complete", "plannedKypVisualId": "note-block", "plannedImplementation": "note-block"},
]

(ROOT / "content/usmle/manifests/normal-flora.json").write_text(
    json.dumps(m28, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/normal-flora.json").write_text(
    json.dumps({"topicId": "normal-flora", "chapterId": "microbiology", "inventory": inv28,
                "coverageAudit": {"topicId": "normal-flora", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Both source tables adapted as verbatim note-block tables (the inventory's requiresVisual = false); no registry visual for this topic."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")

ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "normal-flora":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv28))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
print("M28 manifest + inventory + flip done")
