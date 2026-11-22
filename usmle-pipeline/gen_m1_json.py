#!/usr/bin/env python3
"""M1 bacterial-structures — manifest + visual inventory + chapter flip.

Microbiology topic 1/39 (Basic Bacteriology banner). Evidence pinned on
pdf 144 / book 122 (Bacterial structures: the 9-row STRUCTURE/CHEMICAL
COMPOSITION/FUNCTION table + the Gram⊕/Gram⊝ cell comparison figure).

Census (pdfimages -list + VLM 200-DPI read): p144 rasters = 4x 1x1
artifacts (furniture) + the two cell comparison drawings (392x189 gray +
cmyk duplicate, soft masks 489x316/489x287) — COPYRIGHTED line art,
described-in-text only; redrawn as ONE original KYP registry visual
(bacterial-cell-anatomy). VLM census resolved the figure's true layout:
Gram ⊕ cell LEFT / Gram ⊝ cell RIGHT; brackets COMMON TO BOTH, UNIQUE TO
GRAM ⊕, UNIQUE TO GRAM ⊝; label-to-cell assignments for every callout.

Table interleave note: the nine rows' cells are contiguous blocks in the
text layer. ONE quirk documented: the table's Spore row label is emitted
by the text layer in the FIGURE region (physical position between
'Specialized structures' and 'Cell envelope') — the Spore row quote
carries the composition+function cells, and the label is quoted at its
physical position in the figure-region evidence. The figure-region
labels interleave by visual row across both cells (e.g.
'Flagellum\nLipoteichoic acid' = same visual row, left cell + unique-
gram⊕ label); the VLM census resolved the sides.
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
P = {p: norm(pages[p - 1]) for p in (144,)}

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

# --- p144: section banners + table headers ---
E += [
    ("Section banner", "SEC TION II", 144),
    ("Section banner", "MICROBIOLOGY", 144),
    ("Chapter banner", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 144),
    ("Table heading", "Bacterial structures", 144),
    ("Table column headers", "CHEMICAL COMPOSITION\nFUNCTION", 144),
]

# --- p144: the 9 rows (physical order; label + composition + function) ---
E += [
    ("Flagellum row (full physical order)", "Flagellum\nProteins\nMotility", 144),
    ("Pilus/fimbria row (full physical order)", "Pilus/fimbria\nGlycoprotein\nMediate adherence of bacteria to cell surface;\nsex pilus forms during conjugation", 144),
    ("Spore row — composition + function (label emitted in figure region; see figure evidence)", "Keratinlike coat, dipicolinic acid, peptidoglycan,\nDNA\nSurvival: resist dehydration, heat, chemicals", 144),
    ("Capsule row (full physical order)", "Capsule\nDiscrete layer usually made of polysaccharides\n(and rarely proteins)\nProtects against phagocytosis", 144),
    ("Slime (S) layer row (full physical order)", "Slime (S) layer\nLoose network of polysaccharides\nMediates adherence to surfaces, plays a role in\nbiofilm formation (eg, indwelling catheters)", 144),
    ("Outer membrane row (full physical order; composition then function)", "Outer membrane\nOuter leaflet: contains endotoxin (LPS/LOS)\nEmbedded proteins: porins and other outer\nmembrane proteins (OMPs)\nInner leaflet: phospholipids\nGram ⊝ only\nEndotoxin: lipid A induces TNF and IL-1;\nantigenic O polysaccharide component\nMost OMPs are antigenic\nPorins: transport across outer membrane", 144),
    ("Periplasm row (full physical order)", "Periplasm\nSpace between cytoplasmic membrane\nand outer membrane in gram ⊝ bacteria\n(peptidoglycan in middle)\nAccumulates components exiting gram\n⊝ cells, including hydrolytic enzymes\n(eg, β-lactamases)", 144),
    ("Cell wall row (full physical order)", "Cell wall\nPeptidoglycan is a sugar backbone with peptide\nside chains cross-linked by transpeptidase\nNetlike structure gives rigid support, protects\nagainst osmotic pressure damage", 144),
    ("Cytoplasmic membrane row (full physical order)", "Cytoplasmic\nmembrane\nPhospholipid bilayer sac with embedded\nproteins (eg, penicillin-binding proteins\n[PBPs]) and other enzymes\nLipoteichoic acids (gram positive) only extend\nfrom membrane to exterior\nSite of oxidative and transport enzymes; PBPs\ninvolved in cell wall synthesis\nLipoteichoic acids induce TNF-α and IL-1", 144),
]

# --- p144: figure region (organizer + brackets + labels + cell identifiers) ---
E += [
    ("Figure organizer column (physical order)", "STRUCTURE\nAppendages\nSpecialized structures\nSpore\nCell envelope", 144),
    ("Figure bracket rows (physical order)", "Cell envelope\nCommon to both\nUnique to\ngram ⊕\nUnique to\ngram ⊝", 144),
    ("Figure labels — row 1 (interleaved across cells; VLM census: both point LEFT, Gram ⊕)", "Flagellum\nLipoteichoic acid", 144),
    ("Figure labels — row 2 (interleaved across cells; VLM census: Pilus common, Capsule common, Endotoxin/LPS RIGHT, Porin RIGHT)", "Pilus\nCapsule\nEndotoxin/LPS\nPorin", 144),
    ("Figure label — outer membrane (RIGHT cell)", "Outer\nmembrane", 144),
    ("Figure labels — cell wall + periplasm (interleaved; VLM census: Cell wall common, wide periplasm RIGHT)", "Cell wall\nWide periplasmic space\ncontaining β-lactamase", 144),
    ("Figure labels — peptidoglycan + cytoplasmic membrane (common to both)", "Peptidoglycan\nCytoplasmic\nmembrane", 144),
    ("Figure cell identifiers (left and right; footer line interleaves between)", "Gram ⊕", 144),
    ("Figure cell identifier (right cell)", "Gram ⊝", 144),
    ("Printed book-page footer (page identity)", "FAS1_2026_03-Microbiology.indd 122", 144),
]

EVIDENCE = [ev(c, q, p) for (c, q, p) in E]

failures = []
for e in EVIDENCE:
    if len(e["quote"].strip()) < 3:
        failures.append(f"sub-3-char quote dropped: {e['quote']!r} ({e['claim']})")
    elif e["verified"] != "pass":
        failures.append(f"NOT FOUND on page {e['pages']['pdfPages'][0]}: {e['quote']!r} ({e['claim']})")
if failures:
    print("EVIDENCE FAILURES:")
    for f in failures:
        print("  ✗", f)
    sys.exit(1)

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 144 / book 122)")

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

SRC = {"part": 1, "pdfPages": [144], "bookPages": "122–122"}

manifest = {
    "topicId": "bacterial-structures",
    "title": "Bacterial Structures: Anatomy & Function",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Basic Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["bacterial-cell-anatomy"],
    "mechanismIds": ["envelope-layer-logic"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the structure table and comparison figure; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "layered-envelope-model",
            "summary": "The nine structures read as a stack of coats (surface → appendages → wall → gram-status extras → membrane) with each layer's chemistry owning one function; the TNF/IL-1 address book (lipid A at the gram ⊝ outer membrane vs lipoteichoic acids membrane-to-exterior in gram ⊕); the capsule-vs-slime surface split; the drug geometry (PBPs at the membrane, β-lactamases in the periplasm, porins as the outer-membrane gate); and the sterilization rationale of the spore coat (with the autoclave parameter note labeled extension).",
            "origin": "outside-first-aid",
            "rationale": "The source lists structures, chemistry, and functions without the layered model, the cytokine address distinction, or the drug-target geometry; these integrations are KYP's design. The encapsulated-pathogen examples and autoclave parameters are labeled extension.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p144 rasters = 4x 1x1 artifacts (furniture) + the two cell comparison drawings (gray 392x189 + cmyk duplicate, soft masks 489x316/489x287) — COPYRIGHTED line art, described-in-text only, never reproduced; redrawn as ONE original KYP registry visual (bacterial-cell-anatomy: two gram-archetype panels + common/unique key + 9-structure roster + toxin-layers/sporulation/enzyme-address cards). VLM 200-DPI census read resolved the figure's true layout (Gram ⊕ LEFT / Gram ⊝ RIGHT; bracket rows; every callout label's cell assignment) — the pdftotext figure labels interleave by visual row across both cells and the VLM read is the authority for side assignment, documented here. Table interleave: the nine rows' cells are contiguous blocks; ONE quirk — the table's Spore row label is emitted in the figure region (between 'Specialized structures' and 'Cell envelope'), so the Spore row quote carries composition+function with the label quoted at its physical figure position. No FA mnemonics are printed on this page (none to reproduce); KYP originals authored in the mnemonics field.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"bacterial-structures-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Basic Bacteriology",
        "topicId": "bacterial-structures",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "bacterial-structures",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "MICROBIOLOGY_IMAGE", "Bacterial structures — the Gram⊕/Gram⊝ cell comparison figure",
            "Two cell cross-sections side by side (Gram ⊕ left, Gram ⊝ right): left-side organizer column (STRUCTURE; rows Appendages / Specialized structures / Spore / Cell envelope) with bracket rows (Common to both / Unique to gram ⊕ / Unique to gram ⊝); callout labels — Flagellum, Lipoteichoic acid, Pilus, Capsule, Endotoxin/LPS, Porin, Outer membrane, Cell wall, Wide periplasmic space containing β-lactamase, Peptidoglycan, Cytoplasmic membrane — and the cell identifiers Gram ⊕ (left) and Gram ⊝ (right).",
            "ORIGINAL_KYP_REDRAW", "bacterial-cell-anatomy", "registry-visual"),
        svi(2, "VISUAL_TABLE", "Bacterial structures — the 9-row structure table",
            "The printed table (STRUCTURE / CHEMICAL COMPOSITION / FUNCTION) with rows for Flagellum, Pilus/fimbria, Spore, Capsule, Slime (S) layer, Outer membrane, Periplasm, Cell wall, Cytoplasmic membrane.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'The nine structures — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "bacterial-structures",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 1,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the cell comparison art is raster line art (gray + cmyk duplicates with soft masks) — COPYRIGHTED, described-in-text only; redrawn as ONE original KYP registry visual (bacterial-cell-anatomy) with every printed label accounted for (figure-region evidence: organizer column, brackets, 13 callout labels, 2 cell identifiers — 10 evidence quotes covering the full label set). The 9-row table is reproduced verbatim as the note's table block. No FA mnemonics printed on this page.",
}

(ROOT / "content/usmle/manifests/bacterial-structures.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/bacterial-structures.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 0/39 -> 1/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "bacterial-structures":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: bacterial-structures -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: bacterial-structures not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
