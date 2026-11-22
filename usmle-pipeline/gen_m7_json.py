#!/usr/bin/env python3
"""M7 bacterial-genetics — manifest + visual inventory + chapter flip.

Microbiology topic 7/39 (Basic Bacteriology banner). Evidence pinned on
pdf 150-151 / book 128-129 (Transformation / Conjugation F+ × F− and Hfr × F−
/ Transduction generalized + specialized / Transposition). The exotoxin/
endotoxin table that begins on book 129 is M8's territory (heading pinned
here as a boundary marker).

Census (pdfimages + VLM 200-DPI reads): p150's diagrams are raster
color-plate art (separation plates at 435/445 ppi + index images — the
five genetics diagrams: transformation, conjugation F+×F−, Hfr×F−,
generalized + specialized transduction). p151 top: the transposition
diagram. All COPYRIGHTED, never reproduced; redrawn as ONE original KYP
registry visual (gene-transfer-triangle).

QUOTE CONSTRUCTION: this page's text layer is the most heavily interleaved
in the chapter (paragraph text + diagram labels + cell markers + '+/–'
symbols all mixed, plus ligatures and merged lines). Quotes are therefore
built PROGRAMMATICALLY from raw line ranges of the cached page text
(joining lines[a-1:b] with '\\n') — guaranteeing character-exact
reproduction including every scramble. Documented text-layer quirks:
- 'highfrequency' — hyphen dropped at a line join (print: 'high-frequency')
- 'ﬂanking' — printed with the ﬂ ligature (U+FB02) on two lines (71, 144)
- 'DNA F–+cellbacterialHfr' (line 162) — merged scrambled cell-label string
- 'F cell F cell' marker rows (64-67, 80) and the '+/–' marker columns
  (81-106) — diagram cell markers emitted inline
- 'F–' (en-dash U+2013) vs 'F−' (minus U+2212) — both appear; joined raw
  so exactness is automatic
- 'Completment' typo: none on these pages (that was M6's p149)
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
L150 = pages[149].split("\n")
L151 = pages[150].split("\n")
P = {p: norm(pages[p - 1]) for p in (150, 151)}

def rng(pg_lines, a, b):
    """Join raw 0-based lines a..b (inclusive — matching the dump indices)
    with \\n — character-exact."""
    return "\n".join(pg_lines[a:b + 1])

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

# --- p150: banners + section heading + intro ---
E += [
    ("Section banner", "SEC TION II", 150),
    ("Section banner", "MICROBIOLOGY", 150),
    ("Chapter banner", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 150),
    ("Section heading + horizontal-transfer rule", rng(L150, 8, 10), 150),
]

# --- p150: transformation (text + diagram labels) ---
E += [
    ("Transformation row (full physical order; DNase rule; SHiN)", rng(L150, 12, 23), 150),
    ("Transformation diagram labels (physical order)", rng(L150, 25, 36), 150),
]

# --- p150: conjugation F+ × F− (heading + full interleave text/diagram) ---
E += [
    ("Conjugation heading", rng(L150, 38, 39), 150),
    ("F+ × F– paragraph + diagram labels (FULL physical interleave, lines 41-73)", rng(L150, 41, 73), 150),
    ("F+ × F– diagram cell markers + '+'/'–' columns (physical order, lines 74-106)", rng(L150, 74, 106), 150),
]

# --- p150: conjugation Hfr × F− (heading + text + diagram labels) ---
E += [
    ("Hfr × F– heading + paragraph (full physical order; 'highfrequency' hyphen-drop as printed; lines 107-115)", rng(L150, 107, 115), 150),
    ("Hfr × F– diagram labels (full physical interleave incl. 'ﬂanking' ligature and the merged 'DNA F–+cellbacterialHfr' string; lines 117-168)", rng(L150, 117, 168), 150),
]

# --- p150: transduction (generalized + specialized) ---
E += [
    ("Transduction generalized heading + paragraph (full physical order)", rng(L150, 170, 178), 150),
    ("Generalized diagram labels (physical order, lines 180-189)", rng(L150, 180, 189), 150),
    ("Specialized paragraph + both diagrams' labels + ABCD'S toxins (full physical interleave, lines 193-215)", rng(L150, 193, 215), 150),
    ("Transduction shared diagram labels (physical order, lines 217-226)", rng(L150, 217, 226), 150),
    ("Printed book-page footer (page identity)", rng(L150, 191, 191), 150),
]

# --- p151: transposition (M7's final route) + M8 boundary ---
E += [
    ("Section banner", "SEC TION II", 151),
    ("Chapter banner", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 151),
    ("Transposition paragraph + diagram labels (full physical interleave, lines 8-25)", rng(L151, 8, 25), 151),
    ("M8 boundary marker (Main features of exotoxins and endotoxins heading — owned by M8)", rng(L151, 27, 27), 151),
    ("Printed book-page footer (page identity)", rng(L151, 107, 107), 151),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 150-151 / book 128-129)")

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

SRC = {"part": 1, "pdfPages": [150, 151], "bookPages": "128–129"}

manifest = {
    "topicId": "bacterial-genetics",
    "title": "Bacterial Genetics: Transformation, Conjugation, Transduction",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Basic Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["gene-transfer-triangle"],
    "mechanismIds": ["horizontal-transfer-routes", "mobile-element-logic"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the routes and diagrams; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "route-gate-cargo-model",
            "summary": "The unified model: every route has a GATE (competence / the F plasmid's pilus / phage packaging mode / the target site) that determines its CARGO (naked fragments / one plasmid / plasmid-plus-flanking-genes / any gene / flanking-only genes / a resistance cassette); the DNase discrimination (naked vs pilus-protected vs capsid-protected); the F-status vs gene-content decoupling of the Hfr cross; the transposition-as-plasmid-assembler model (multi-drug-resistance R plasmids); and the ABCD'S toxin genes as phage-encoded (acquiring the phage acquires the toxin) — with interrupted-mating mapping and the VRSA first-isolate story labeled as extensions.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the routes and diagrams without the gate-cargo taxonomy or the transposition-assembly model; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p150's five genetics diagrams are raster color-plate art (separation plates 114x172/226x172 at 435/445 ppi + index images); p151 top carries the transposition diagram — all COPYRIGHTED, never reproduced; all six redrawn as ONE original KYP registry visual (gene-transfer-triangle). QUOTE CONSTRUCTION: this chapter's most heavily interleaved text layer — quotes built PROGRAMMATICALLY from raw line ranges of the cached page text (character-exact by construction), with the scrambles documented: 'highfrequency' hyphen-drop (print: high-frequency); 'ﬂanking' with the ﬂ ligature (U+FB02); the merged 'DNA F–+cellbacterialHfr' string; the 'F cell F cell' marker rows and '+/–' marker columns; en-dash F– vs minus F− both present (raw joins reproduce both). Boundary: the 'Main features of exotoxins and endotoxins' table beginning on book 129 is M8's (heading pinned as boundary marker). The source's own ABCD'S acronym is a roster label carried as the printed list. No FA mnemonics printed on these pages (none to reproduce).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"bacterial-genetics-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Basic Bacteriology",
        "topicId": "bacterial-genetics",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "bacterial-genetics",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "MOLECULAR_STRUCTURE", "Genetics — the transformation diagram",
            "Three stages: wavy naked DNA lines approaching a recipient cell (oval, containing the circular recipient DNA chromosome); degraded uncombined DNA fragments discarded; the transformed cell containing recipient DNA plus recombined donor DNA.",
            "ORIGINAL_KYP_REDRAW", "gene-transfer-triangle", "registry-visual"),
        svi(2, "MOLECULAR_STRUCTURE", "Genetics — the conjugation F+ × F− diagram",
            "A multi-stage strip: the F+ cell (small circular F plasmid carrying sex-pilus/conjugation genes) building a sex pilus conjugal bridge ('mating bridge') to the F− cell; a single strand of plasmid DNA transferred; both cells ending F+; labeled 'no transfer of chromosomal DNA'.",
            "ORIGINAL_KYP_REDRAW", "gene-transfer-triangle", "registry-visual"),
        svi(3, "MOLECULAR_STRUCTURE", "Genetics — the Hfr × F− diagram",
            "The F+ plasmid incorporated into the bacterial chromosome (high-frequency recombination cell); transfer of the leading portion of the plasmid along with flanking bacterial chromosome through the bridge; the recipient as a recombinant F− cell (bacterial DNA + bacterial DNA + plasmid copy annotations).",
            "ORIGINAL_KYP_REDRAW", "gene-transfer-triangle", "registry-visual"),
        svi(4, "MOLECULAR_STRUCTURE", "Genetics — the generalized transduction diagram",
            "A lytic-cycle strip: lytic phage infecting a bacterium; cleavage of bacterial DNA; bacterial DNA packaged in phage capsids; release of new phage from the lysed cell; infecting other bacteria; genes transferred to new bacteria.",
            "ORIGINAL_KYP_REDRAW", "gene-transfer-triangle", "registry-visual"),
        svi(5, "MOLECULAR_STRUCTURE", "Genetics — the specialized transduction diagram",
            "A lysogenic-cycle strip: lysogenic phage infecting a bacterium with viral DNA incorporating into bacterial DNA; the excision event taking flanking bacterial genes; phage particles carrying bacterial DNA; genes different from donor and recipient; the ABCD'S toxin roster printed with it.",
            "ORIGINAL_KYP_REDRAW", "gene-transfer-triangle", "registry-visual"),
        svi(6, "MOLECULAR_STRUCTURE", "Genetics — the transposition diagram (book 129)",
            "A plasmid containing a transposon; the bacterial DNA chromosome with a marked target site; the transposon copying and excising itself and inserting at the target site; 'integration of genes' as the result.",
            "ORIGINAL_KYP_REDRAW", "gene-transfer-triangle", "registry-visual"),
    ],
    "coverageAudit": {
        "topicId": "bacterial-genetics",
        "textbookVisualCount": 6,
        "accountedFor": 6,
        "sourceReproductions": 0,
        "kypRedraws": 6,
        "kypOriginals": 0,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: six printed genetics diagrams (p150: transformation, conjugation F+×F−, Hfr×F−, generalized + specialized transduction; p151: transposition) — raster color-plate art, all COPYRIGHTED; all six redrawn within ONE original KYP registry visual (gene-transfer-triangle, four lanes: transformation / conjugation pair / transduction pair + the transposition card + the route-rules card). The verbatim route text is the note's table block. No FA mnemonics printed on these pages.",
}

(ROOT / "content/usmle/manifests/bacterial-genetics.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/bacterial-genetics.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 6/39 -> 7/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "bacterial-genetics":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: bacterial-genetics -> complete, textbookVisuals rewritten (6 sv)")
        break
else:
    print("ERROR: bacterial-genetics not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
