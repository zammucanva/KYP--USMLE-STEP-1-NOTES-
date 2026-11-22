#!/usr/bin/env python3
"""M35 antimycobacterials — manifest + inventory + flip (35/39).
Census: p214 carries exactly ONE image pair — a 1x1-pixel cmyk solid stretched
behind the MYCOBACTERIAL CELL schematic through a 1621x1323 smooth mask (729B,
150ppi — a light color wash, DECORATIVE; the schematic itself is line art
whose labels print in the text layer; VLM census confirmed: line-art vector
diagram, no photographs); p215 is pure text (0 rasters). Text quirks
documented: the banner typo MICROCIOLOGY—ANTIMICROCIALS on both pages; the
therapy table's first header word emits as 'CACTERIUM' in the raw and layout
layers (the MYCOB prefix lost in extraction — the printed page reads
MYCOBACTERIUM); the schematic's rotated rim labels emit split mid-word ('Arab
inog ala c', 'Pep tido tan gly can', 'A comp lex f cyl lipid ree lipi s, ds',
'Myc olic acid') with the figure block emitting after the indd footer (raw
92-155); the source's own NOTES-column mnemonics ('INH Injures Neurons and
Hepatocytes', 'Pronounce eyethambutol') are carried ONLY inside the verbatim
tables per the E38 precedent. The mechanism rows carry the C1-control-
prefixed arrows (the normalizer strips them)."""
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
L = {p: pages[p-1].split("\n") for p in range(214, 216)}
P = {p: norm(pages[p-1]) for p in range(214, 216)}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E35 = [
    # ── p214 / book 192 — the antituberculous table + the cell schematic ──
    ("Printed book-page number (page identity)", "192", 214),
    ("Page banner trio (the SEC TION split print)", rng(214, 1, 7), 214),
    ("The table headers (Antituberculous drugs · DRUG · MECHANISM · ADVERSE EFFECTS · NOTES)", rng(214, 9, 18), 214),
    ("Rifamycins row: drug line", rng(214, 18, 20), 214),
    ("Rifamycins row: MECHANISM (the C1-prefixed arrows; RNA-polymerase resistance)", rng(214, 22, 27), 214),
    ("Rifamycins row: ADVERSE EFFECTS (CYP450 induction, red-orange discoloration)", rng(214, 29, 33), 214),
    ("Rifamycins row: NOTES (rifabutin in HIV; monotherapy resistance)", rng(214, 35, 39), 214),
    ("Isoniazid row: MECHANISM (mycolic acid; katG activation; katG resistance)", rng(214, 41, 49), 214),
    ("Isoniazid row: ADVERSE EFFECTS (B6 deficiency, hepatotoxicity, lupus, refractory seizures)", rng(214, 51, 60), 214),
    ("Isoniazid row: NOTES (pyridoxine + the source's own mnemonic; acetylator half-lives)", rng(214, 62, 69), 214),
    ("Pyrazinamide row: MECHANISM + ADVERSE + NOTES (mechanism uncertain; acidic pH)", rng(214, 71, 78), 214),
    ("Ethambutol row: MECHANISM (arabinosyltransferase; the C1-prefixed arrows)", rng(214, 80, 84), 214),
    ("Ethambutol row: ADVERSE EFFECTS (optic neuropathy) + NOTES (the source's own pronunciation gloss)", rng(214, 86, 90), 214),
    ("The MYCOBACTERIAL CELL figure — the schematic's labels emitting after the indd footer (raw 92-155: the interior doors, the split rim labels, the INTRACELLULAR + Pyrazinamide + rifamycin labels)", rng(214, 92, 155), 214),
    ("The page timestamp (page identity)", rng(214, 157, 157), 214),
    # ── p215 / book 193 — the therapy + prophylaxis tables ──
    ("Page banner trio", rng(215, 1, 5), 215),
    ("The printed book-page number '193' (mid-page)", rng(215, 7, 7), 215),
    ("The therapy-table headers (Antimycobacterial therapy; the header quirk 'CACTERIUM' — the MYCOB prefix lost in extraction)", rng(215, 9, 14), 215),
    ("M tuberculosis row (prophylaxis + RIPE treatment)", rng(215, 16, 21), 215),
    ("M avium–intracellulare row (azithromycin/rifabutin; the macrolide-anchored treatment)", rng(215, 23, 28), 215),
    ("M leprae row (dapsone + rifampin; clofazimine for lepromatous)", rng(215, 30, 36), 215),
    ("The prophylaxis-table headers (Antimicrobial prophylaxis · CLINICAL SCENARIO · MEDICATION)", rng(215, 38, 43), 215),
    ("Prophylaxis rows 1-2 (meningococcal exposure; IE procedures)", rng(215, 45, 52), 215),
    ("Prophylaxis rows 3-4 (recurrent UTIs; malaria)", rng(215, 54, 62), 215),
    ("Prophylaxis rows 5-6 (GBS pregnancy; newborn gonococcal conjunctivitis)", rng(215, 64, 71), 215),
    ("Prophylaxis rows 7-8 (postsurgical S aureus; rheumatic fever)", rng(215, 73, 81), 215),
    ("The indd footer + timestamp (page identity)", rng(215, 83, 85), 215),
]
for c, q, p in E35:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"antimycobacterials: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m35 = {"topicId": "antimycobacterials", "title": "Antimycobacterial Therapy",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Antimicrobials", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [214, 215], "bookPages": "192–193"},
    "sourceEvidence": kept, "visualIds": ["tb-drug-regimen-map"],
    "mechanismIds": ["ripe-four-doors", "mycobacteria-therapy-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the tables and the schematic; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "polarity-pair-synthesis", "summary": "The CYP450 polarity-pair reading of RIPE (rifampin induces while INH inhibits — opposite polarities co-prescribed) plus the partnerships system (pyridoxine, visual monitoring, uric acid, LFTs) and the four-door cell reading — KYP's synthesis of the regimen.",
         "origin": "outside-first-aid", "rationale": "The source prints the rows without the polarity-pair or partnership framing; both are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + the exam callout + patterns + traps + pivots + mnemonics + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p214's only image is the decorative 1×1+smask color wash behind the line-art MYCOBACTERIAL CELL schematic (VLM-census confirmed); p215 pure text. Quirks documented: the 'CACTERIUM' header (MYCOB prefix lost in extraction); the schematic's rotated rim labels split mid-word with the figure emitting after the indd footer (raw 92-155); the source's own NOTES mnemonics ('INH Injures Neurons and Hepatocytes', 'Pronounce eyethambutol') carried ONLY inside the verbatim tables per the E38 precedent — omitted from the visual and the KYP memory layer; the C1-prefixed arrows on the mechanism rows (normalizer strips).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "microbiology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Antimicrobials",
    "topicId": "antimycobacterials", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"antimycobacterials-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [pages], "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv35 = [
    sv(1, 214, "192–192", "SUMMARY_FIGURE", "The MYCOBACTERIAL CELL schematic (book 192)",
       "The line-art cross-section (labels in the text layer; background is the decorative 1×1+smask wash): the cell wall layers, plasma membrane, interior with the four labeled synthesis doors and the INTRACELLULAR/Pyrazinamide + rifamycin labels; the rotated rim labels emit split mid-word.",
       "ORIGINAL_KYP_REDRAW", "tb-drug-regimen-map", "the mycobacterial-cell panel of the registry visual — the four doors with the wall layers redrawn clean"),
    sv(2, 214, "192–192", "VISUAL_TABLE", "The antituberculous drugs table (book 192)",
       "The 4-column table (DRUG | MECHANISM | ADVERSE EFFECTS | NOTES) with the Rifamycins, Isoniazid, Pyrazinamide, and Ethambutol rows — including the source's own NOTES-column mnemonics.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim per the page-ownership convention", "note-block"),
    sv(3, 215, "193–193", "VISUAL_TABLE", "The antimycobacterial therapy table (book 193)",
       "The three-species prophylaxis/treatment map (M tuberculosis, M avium–intracellulare, M leprae) — with the 'CACTERIUM' header quirk documented.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim", "note-block"),
    sv(4, 215, "193–193", "VISUAL_TABLE", "The antimicrobial prophylaxis table (book 193)",
       "The general prophylaxis table (CLINICAL SCENARIO | MEDICATION) — the eight rows from meningococcal exposure to rheumatic fever.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[3] the table block — carried verbatim", "note-block"),
]
(ROOT / "content/usmle/manifests/antimycobacterials.json").write_text(json.dumps(m35, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/antimycobacterials.json").write_text(
    json.dumps({"topicId": "antimycobacterials", "chapterId": "microbiology", "inventory": inv35,
                "coverageAudit": {"topicId": "antimycobacterials", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The MYCOBACTERIAL CELL schematic (line art + decorative wash; VLM-census confirmed) is the registry visual — an original KYP vector redraw preserving the four labeled doors. The three printed tables are note-block verbatim adaptations. The source's own NOTES mnemonics are carried only inside the verbatim tables; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "antimycobacterials":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv35))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
print("M35 manifest + inventory + flip done")
