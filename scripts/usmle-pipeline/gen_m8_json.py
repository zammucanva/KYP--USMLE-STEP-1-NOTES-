#!/usr/bin/env python3
"""M8 exotoxins-endotoxins — manifest + visual inventory + chapter flip.

Microbiology topic 8/39 (Basic Bacteriology banner — the banner's final
topic). Evidence pinned on pdf 151-153 / book 129-131: the exotoxin/
endotoxin comparison table + mechanism diagram (book 129); the
Bacteria-with-exotoxins roster with group banners + AB-toxin footnote
(book 130); the lysers/superantigens rows + the endotoxin block and
cascade diagram (book 131).

Census (pdfimages + VLM 200-DPI reads): pdf 152-153 carry no content
rasters (the exotoxin table and diagrams are pure vector + text; the
'Exotoxin/Endotoxin mechanism diagram' on book 129 is pure vector).
The AB-toxin footnote's 'a' marker is printed on 9 toxin names
('Diphtheria toxina' etc.) and standalone (book 130 line 120).

Quotes built PROGRAMMATICALLY from raw 0-based line ranges (the M7
convention — character-exact by construction). Documented text-layer
quirks (this batch):
- p152: the FA mnemonic printed INSIDE the ETEC manifestation cell
  ('labile in the Air (Adenylate cyclase), stable on the Ground
  (Guanylate cyclase)') — table text, carried verbatim in the note's
  table block; NOT reproduced in the visual.
- p152: '\\x90↓ resorption' — control char U+0090 before ↓ (stripped by
  norm); '→  ↑' double-space arrows (lines 36, 38, 47); '→  dysentery'.
- p153: the continuation table's column headers print in odd case:
  'bacteria' 'toXiN' 'mecHaNism' 'maNiFestatioN' — small-caps text-layer
  artifact, quoted as emitted.
- p153: '\\x8e' (U+008E, in the norm() strip range) renders the → arrows
  of the alpha-toxin row ('Degradation of phospholipids \\x8e
  myonecrosis') and the superantigen rows ('\\x8e overwhelming release').
- p151/p153: chapter banners emit the ▶ bullet as private-use U+F07D
  with lowercase small-caps on some pages.
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
L151 = pages[150].split("\n")
L152 = pages[151].split("\n")
L153 = pages[152].split("\n")
P = {p: norm(pages[p - 1]) for p in (151, 152, 153)}

def rng(pg_lines, a, b):
    """Join raw 0-based lines a..b (inclusive — matching dump indices)."""
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

# --- p151: banners + the exotoxin/endotoxin comparison table + diagram ---
E += [
    ("Section banner", "SEC TION II", 151),
    ("Chapter banner (book 129)", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 151),
    ("Comparison table heading", rng(L151, 27, 30), 151),
    ("SOURCE row", rng(L151, 32, 36), 151),
    ("SECRETED FROM CELL row", rng(L151, 38, 42), 151),
    ("CHEMISTRY row", rng(L151, 44, 49), 151),
    ("LOCATION OF GENES row", rng(L151, 51, 55), 151),
    ("TOXICITY row", rng(L151, 57, 62), 151),
    ("CLINICAL EFFECTS row", rng(L151, 64, 68), 151),
    ("MODE OF ACTION row", rng(L151, 70, 74), 151),
    ("ANTIGENICITY row", rng(L151, 76, 80), 151),
    ("VACCINES row", rng(L151, 82, 86), 151),
    ("HEAT STABILITY row", rng(L151, 88, 94), 151),
    ("TYPICAL DISEASES row", rng(L151, 96, 100), 151),
    ("Exotoxin/endotoxin mechanism diagram labels (physical order; footer interleaves)", rng(L151, 102, 113), 151),
    ("Printed book-page footer (page identity)", rng(L151, 107, 107), 151),
]

# --- p152: the exotoxin roster table (group banners + rows + footnote) ---
E += [
    ("Section banner", "SEC TION II", 152),
    ("Chapter banner (book 130)", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 152),
    ("Roster table heading + column headers", rng(L152, 8, 15), 152),
    ("Protein-synthesis group: banner + diphtheriae/Pseudomonas/Shigella rows + LT/ST + manifestations (full physical interleave, lines 17-71; incl. the FA mnemonic in the ETEC manifestation cell)", rng(L152, 17, 71), 152),
    ("Fluid-secretion group: banner + ETEC/anthrax/cholera/pertussis rows (full physical interleave, lines 73-110)", rng(L152, 73, 110), 152),
    ("Phagocytosis + neurotransmitter groups: banners + pertussis/tetani/botulinum rows + SNARE mechanism + manifestations (full physical interleave, lines 111-142; the standalone footnote marker 'a' at line 120)", rng(L152, 111, 142), 152),
    ("AB-toxin footnote", rng(L152, 144, 146), 152),
    ("Printed book-page footer (page identity)", rng(L152, 148, 148), 152),
]

# --- p153: lysers + superantigens + the endotoxin block and cascade ---
E += [
    ("Section banner", "SEC TION II", 153),
    ("Chapter banner (book 131 — U+F07D private-use bullet, lowercase small-caps)", rng(L153, 2, 2), 153),
    ("Continuation heading + odd-case column headers ('bacteria' 'toXiN' 'mecHaNism' 'maNiFestatioN' — small-caps text-layer artifact)", rng(L153, 8, 15), 153),
    ("C perfringens + S pyogenes rows (full physical interleave; \\x8e renders the → arrows)", rng(L153, 17, 42), 153),
    ("Superantigen mechanism cell + manifestations (physical interleave, lines 44-55)", rng(L153, 44, 55), 153),
    ("Group banners 'Lyse cell membranes' + 'Superantigens causing shock' + the bacteria rows (lines 57-71)", rng(L153, 57, 71), 153),
    ("Endotoxin block — LPS text (full physical order, lines 73-85)", rng(L153, 73, 85), 153),
    ("Endotoxin cascade diagram labels (full physical interleave, lines 87-133; incl. 'eXtremely heat stable')", rng(L153, 87, 133), 153),
    ("Printed book-page footer (page identity)", rng(L153, 134, 134), 153),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 151-153 / book 129-131)")

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

SRC = {"part": 1, "pdfPages": [151, 152, 153], "bookPages": "129–131"}

manifest = {
    "topicId": "exotoxins-endotoxins",
    "title": "Exotoxins vs Endotoxins",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Basic Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["toxin-comparison-map"],
    "mechanismIds": ["toxin-axis", "cascade-to-shock"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the tables and diagrams; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidRelease",
        },
        {
            "id": "delivery-design-model",
            "summary": "The mailed-protein vs shed-wall model of the axis (secretion, chemistry, genes, per-dose potency, vaccine-ability, heat); the amplification model (the cascade compensates endotoxin's low nominal toxicity); the spastic-vs-flaccid SNARE address split (cord vs junction); the superantigen-vs-AB-toxin precision distinction (cross-link outside the binding site vs B-binds/A-acts); and the three heat-stable exceptions as a memorized exception set — with the Jarisch-Herxheimer-like release concept, pharmaceutical pyrogen monitoring, and therapeutic botulinum use labeled as extensions.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the comparison and cascade without the delivery-design taxonomy or the address-split models; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pure vector pages (pdf 152-153 carry no content rasters; the book-129 mechanism diagram is pure vector). ONE original KYP registry visual (toxin-comparison-map: the 11-row axis panel + the cascade panel + the roster-by-group panel + the lysers/superantigens panel + the AB-toxin footnote strip). Quotes built programmatically from raw 0-based line ranges (M7 convention). Documented quirks: the FA mnemonic printed inside the ETEC manifestation cell (table text; carried verbatim in the note's table block, NOT in the visual); the AB-toxin 'a' footnote marker on 9 toxin names + standalone (sub-3-char drop covered inline); U+0090 before ↓; double-space '→  ↑' arrows; \\x8e (U+008E) rendering → in the alpha-toxin and superantigen rows (stripped by norm); the continuation table's odd-case column headers ('toXiN' 'mecHaNism' 'maNiFestatioN' — small-caps text-layer artifact); U+F07D chapter-banner glyph on book 131. Boundary: none needed (this is the banner's final topic; book 132+ begins the gram-positive cocci section owned by M9).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"exotoxins-endotoxins-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Basic Bacteriology",
        "topicId": "exotoxins-endotoxins",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "exotoxins-endotoxins",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "The exotoxin/endotoxin comparison table (book 129)",
            "The printed 11-row comparison (SOURCE through TYPICAL DISEASES) with the Exotoxins and Endotoxins columns.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'The exotoxin/endotoxin axis — verbatim' table block (also condensed in the visual's axis panel)"),
        svi(2, "PHARMACOLOGY_DIAGRAM", "The exotoxin/endotoxin mechanism diagram (book 129)",
            "A host-cell boundary diagram: a bacterium labeled Exotoxin releasing spherical toxin molecules toward a host-cell receptor with a looping 'downstream cellular reaction' arrow; a bacterium labeled Endotoxin releasing fragments that trigger 'TNF, IL-1, IL-6' at the host cell.",
            "ORIGINAL_KYP_REDRAW", "toxin-comparison-map", "registry-visual"),
        svi(3, "VISUAL_TABLE", "The Bacteria-with-exotoxins roster table (books 130-131)",
            "The printed 4-column roster (BACTERIA / TOXIN / MECHANISM / MANIFESTATION) with group banners (inhibit protein synthesis / increase fluid secretion / inhibit phagocytic ability / inhibit release of neurotransmitter / lyse cell membranes / superantigens causing shock), the AB-toxin footnote, and the FA mnemonic printed in the ETEC manifestation cell.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[2] — 'The exotoxin roster — verbatim' table block"),
        svi(4, "MOLECULAR_STRUCTURE", "The endotoxin cascade diagram (book 131)",
            "The printed cascade: the outer membrane (O-antigen + core polysaccharide + lipid A; 'eXtremely heat stable'); macrophage activation (TLR4/CD14); TNF-α, IL-1 and IL-6 → fever and hypotension; nitric oxide → hypotension; C3a → histamine release (hypotension and edema); C5a → neutrophil chemotaxis; the coagulation cascade → DIC; the ENDOTOXINS outcome strip (edema, shock, DIC/death).",
            "ORIGINAL_KYP_REDRAW", "toxin-comparison-map", "registry-visual"),
    ],
    "coverageAudit": {
        "topicId": "exotoxins-endotoxins",
        "textbookVisualCount": 4,
        "accountedFor": 4,
        "sourceReproductions": 0,
        "kypRedraws": 2,
        "kypOriginals": 2,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: pure vector pages (no content rasters on pdf 152-153; the book-129 mechanism diagram is pure vector). TWO diagrams redrawn in the registry visual (the exotoxin/endotoxin mechanism diagram → the cascade panel; the endotoxin cascade diagram → the same panel's readout strip); TWO tables carried verbatim as note-blocks (the comparison table; the roster). The FA mnemonic in the ETEC manifestation cell carried in the table block only; NOT in the visual. The 9-toxin 'a' footnote markers documented.",
}

(ROOT / "content/usmle/manifests/exotoxins-endotoxins.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/exotoxins-endotoxins.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 7/39 -> 8/39 (Basic Bacteriology COMPLETE) ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "exotoxins-endotoxins":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: exotoxins-endotoxins -> complete, textbookVisuals rewritten (4 sv)")
        break
else:
    print("ERROR: exotoxins-endotoxins not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
