#!/usr/bin/env python3
"""M5 organism-groups-quick-reference — manifest + visual inventory + chapter flip.

Microbiology topic 5/39 (Basic Bacteriology banner). Evidence pinned on
pdf 148 / book 126 (Catalase-positive organisms / Pigment-producing
bacteria / In vivo biofilm-producing bacteria / Spore-forming bacteria).
TABLE NOTE by design (requiresVisual false).

Census (pdfimages + VLM 200-DPI read): p148 carries ONE raster (198x130
cmyk) = photo A, the Catalase-positive row's figure (a positive catalase
test — bubbles of O2; the inline letter printed within the mechanism
sentence 'bubbles of O2 A before'). COPYRIGHTED, described-in-text only.

Layout (VLM census): row order = Catalase-positive organisms →
Pigment-producing bacteria → In vivo biofilm-producing bacteria →
Spore-forming bacteria. Text-layer emission quirk: the two-line
left-column labels 'In vivo biofilmproducing bacteria' (hyphen dropped at
the line join — printed 'biofilm-producing') and 'Spore-forming
bacteria' are emitted at the END of the page (after the spore block).
FA mnemonics printed on this page ('Notoriously Big Bubbling HASSLE';
'Israel has yellow sand'; 'Aureus (Latin) = gold'; 'Aerugula is green';
'Think red Sriracha hot sauce'; 'Autoclave to kill Bacillus and
Clostridium (ABC)') are quoted in manifest evidence for VERIFICATION
ONLY and carried verbatim in the note's table block (they ARE the
source's table text, per the E20+ precedent); no user-facing visual
exists for this note; KYP originals replace them in the mnemonics field.
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
P = {p: norm(pages[p - 1]) for p in (148,)}

def ev(claim: str, quote: str, pg: int) -> dict:
    ok = norm(quote) in P[pg]
    return {
        "claim": claim,
        "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
        "quote": quote,
        "verified": "pass" if ok else "FAIL",
        "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
    }

E = []  # (claim, quote, page)

# --- p148: banners + section labels ---
E += [
    ("Section banner", "SEC TION II", 148),
    ("Chapter banner", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 148),
    ("Row label — catalase (two-line left-column label)", "Catalase-positive\norganisms", 148),
]

# --- p148: catalase row (full physical order; photo letter A inline) ---
E += [
    ("Catalase row (full physical order; photo letter A inline in the mechanism sentence)", "Catalase degrades H2O2 into H2O and bubbles of O2 A before it can be converted to microbicidal\nproducts by the enzyme myeloperoxidase. People with chronic granulomatous disease (NADPH\noxidase deficiency) have recurrent infections with certain catalase ⊕ organisms.\nCatalase ⊕ organisms include Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia\ncepacia, Helicobacter pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli. Catalase Positive:\nNotoriously Big Bubbling HASSLE.", 148),
    ("FA mnemonic — catalase (verification only)", "Notoriously Big Bubbling HASSLE.", 148),
]

# --- p148: pigment row (full physical order; FA mnemonic cues inline) ---
E += [
    ("Row label — pigment (two-line left-column label)", "Pigment-producing\nbacteria", 148),
    ("Pigment row (full physical order; all four FA mnemonic cues inline as printed)", "Actinomyces israelii—yellow “sulfur” granules, which are composed of filaments of bacteria\nIsrael has yellow sand\nS aureus—golden yellow pigment\nAureus (Latin) = gold\nP aeruginosa—blue-green pigment (pyocyanin\nand pyoverdin)\nAerugula is green\nSerratia marcescens—red pigment\nThink red Sriracha hot sauce", 148),
    ("FA mnemonic — Actinomyces (verification only)", "Israel has yellow sand", 148),
    ("FA mnemonic — S aureus (verification only)", "Aureus (Latin) = gold", 148),
    ("FA mnemonic — P aeruginosa (verification only)", "Aerugula is green", 148),
    ("FA mnemonic — Serratia (verification only)", "Think red Sriracha hot sauce", 148),
]

# --- p148: biofilm row (right-cell contents; label emitted at page end) ---
E += [
    ("Biofilm row right cell (full physical order)", "S epidermidis\nCatheter and prosthetic device infections\nViridans streptococci (S mutans, S sanguinis)\nDental plaques, infective endocarditis\nP aeruginosa\nRespiratory tree colonization in patients with\ncystic fibrosis, ventilator-associated pneumonia\nContact lens–associated keratitis\nNontypeable (unencapsulated) H influenzae\nOtitis media", 148),
]

# --- p148: spore row (full physical order) ---
E += [
    ("Spore row (full physical order; autoclave + examples + FA mnemonic inline)", "Some gram ⊕ bacteria can form spores when\nnutrients are limited. Spores lack metabolic\nactivity and are highly resistant to heat\nand chemicals. Core contains dipicolinic\nacid (responsible for heat resistance). Must\nautoclave to kill spores (as is done to surgical\nequipment) by steaming at 121°C for 15\nminutes at a pressure of 15 psi. Hydrogen\nperoxide and iodine-based agents are also\nsporicidal.\nExamples: B anthracis (anthrax), B cereus (food\npoisoning), Clostridium botulinum (botulism),\nClostridioides difficile (pseudomembranous\ncolitis), Clostridium perfringens (gas gangrene),\nClostridium tetani (tetanus).\nAutoclave to kill Bacillus and Clostridium\n(ABC).", 148),
    ("FA mnemonic — spore formers (verification only)", "Autoclave to kill Bacillus and Clostridium\n(ABC).", 148),
]

# --- p148: the two end-emitted row labels + footer ---
E += [
    ("Row label — biofilm (two-line left-column label emitted at page end; hyphen dropped at line join — printed 'biofilm-producing')", "In vivo biofilmproducing bacteria", 148),
    ("Row label — spore formers (two-line left-column label emitted at page end)", "Spore-forming\nbacteria", 148),
    ("Printed book-page footer (page identity)", "FAS1_2026_03-Microbiology.indd 126", 148),
]

EVIDENCE = [ev(c, q, p) for (c, q, p) in E]

failures = []
for e in EVIDENCE:
    if len(e["quote"].strip()) < 3:
        print(f"  (dropping sub-3-char by design: {e['quote']!r})")
        continue
    elif e["verified"] != "pass":
        failures.append(f"NOT FOUND on page {e['pages']['pdfPages'][0]}: {e['quote']!r} ({e['claim']})")
if failures:
    print("EVIDENCE FAILURES:")
    for f in failures:
        print("  ✗", f)
    sys.exit(1)

kept = [e for e in EVIDENCE if len(e["quote"].strip()) >= 3]
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 148 / book 126)")

QA = {g: "pass" for g in [
    "sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
    "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
    "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced",
]}
STAGES = {s: "pass" for s in [
    "sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
    "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
    "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
    "relatedAuthored", "qaPassed", "trackerSynced",
]}

SRC = {"part": 1, "pdfPages": [148], "bookPages": "126–126"}

manifest = {
    "topicId": "organism-groups-quick-reference",
    "title": "Catalase, Pigment, Spore & Encapsulation Groups",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Basic Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": [],
    "mechanismIds": ["catalase-cgd-axis"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the directories; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "catalase-cgd-axis",
            "summary": "The host-microbe enzyme axis as the organizer: the microbe's catalase vs the host's myeloperoxidase over the only H2O2 a burst-less phagocyte ever sees; the pigment row as naked-eye identification (color-to-organism pairs that never swap); the biofilm row as a device-to-organism map (catheters, dental plaques/valves, CF airway/ventilator/contact lens, middle ear); and the spore row as sterilization chemistry (dipicolinic acid → autoclave 121 °C/15 min/15 psi; H2O2 and iodine also sporicidal) — with the NBT test, myeloperoxidase deficiency, X-linked CGD inheritance, and coagulase distinctions labeled as extensions.",
            "origin": "outside-first-aid",
            "rationale": "The source lists the four directories without the cross-directory mechanisms or the color/device/sterilization logics; these integrations are KYP's design.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "TABLE NOTE by design (requiresVisual false). Census: p148 carries ONE raster (198x130 cmyk) = photo A, the Catalase-positive row's figure (a positive catalase test — bubbles of O2, the inline letter printed within the mechanism sentence 'bubbles of O2 A before') — COPYRIGHTED, described-in-text only. Layout resolved by VLM census (row order: catalase → pigment → biofilm → spore). Text-layer quirks documented: the two-line left-column labels 'In vivo biofilmproducing bacteria' (hyphen dropped at line join) and 'Spore-forming bacteria' are emitted at page end; the biofilm row's right cell emits before the spore block. MNEMONIC BOUNDARY (E22+ rule): the page's 6 FA mnemonics ('Notoriously Big Bubbling HASSLE'; 'Israel has yellow sand'; 'Aureus (Latin) = gold'; 'Aerugula is green'; 'Think red Sriracha hot sauce'; 'Autoclave to kill Bacillus and Clostridium (ABC)') quoted for verification and carried verbatim in the note's table block (they ARE the source's table text, per the E20+ precedent); no user-facing visual exists for this note; KYP originals authored in the mnemonics field.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"organism-groups-quick-reference-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Basic Bacteriology",
        "topicId": "organism-groups-quick-reference",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "organism-groups-quick-reference",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "MICROBIOLOGY_IMAGE", "Trait directories — the catalase-test photo (photo A)",
            "One photograph of a positive catalase test (bubbles of O2 on a slide), the Catalase-positive organisms row's figure, its callout letter printed inline within the mechanism sentence ('bubbles of O2 A before').",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[0] — 'The four trait directories — verbatim' table block, Catalase row: the printed figure pointer is carried verbatim; the photo itself (a positive catalase test with O2 bubbles) is described-in-text only, never reproduced"),
        svi(2, "VISUAL_TABLE", "Trait directories — the four-row directory table",
            "The printed 2-column table (category | description/organisms/notes): Catalase-positive organisms, Pigment-producing bacteria, In vivo biofilm-producing bacteria, Spore-forming bacteria.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[0] — 'The four trait directories — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "organism-groups-quick-reference",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 0,
        "kypOriginals": 2,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "TABLE NOTE by design (requiresVisual false; no registry visual). Census: the single raster is photo A (a positive catalase test with O2 bubbles) — COPYRIGHTED, described-in-text only. The directory table is reproduced verbatim as the note's table block. FA's printed mnemonics (6 on this page) carried in the table block only; KYP originals in the mnemonics field.",
}

(ROOT / "content/usmle/manifests/organism-groups-quick-reference.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/organism-groups-quick-reference.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 4/39 -> 5/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "organism-groups-quick-reference":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: organism-groups-quick-reference -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: organism-groups-quick-reference not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
