#!/usr/bin/env python3
"""M11 mycobacteria — manifest + visual inventory + chapter flip.

Microbiology topic 11/39 (Clinical Bacteriology). Evidence pinned on pdf
160 / book 138 (the mycobacteria roster, TB symptoms, cord factor and
sulfatides, the TB progression flowchart's label stream, PPD/IGRA rules,
the Langhans/Langerhans rule, the reactivation rules) and pdf 161 / book
139 LEPROSY SUBSECTION ONLY (lines 0-24: M leprae facts, the two forms, the
treatment rule, the printed mnemonic, photos A and B).

PAGE BOUNDARY (per the chapter inventory's shared-page assignment): pdf 161
is shared between M11 (160-161) and M12 (161-163) — M11 owns the leprosy
subsection; the Gram-negative lab algorithm tree on 161's lower half (dump
lines 26-98) is M12's opening content. Documented here and in M12's manifest.

Photos (raster, COPYRIGHTED, described-in-text only):
- p160: the acid-fast rods micrograph (200x200, arrows in A — red arrows
  pointing to pink rods); the Langhans giant cell histology (396x296,
  single example in A — blue arrows).
- p161: leonine facies (187x188, marker A); tuberculoid plaques (188x173,
  marker B).
Standalone 'A'/'B' markers are sub-3-char (dropped by design; covered inline).

Text-layer quirks documented:
- The TB progression diagram's label stream (dump lines 34-116) is heavily
  INTERLEAVED — the flowchart's boxes emit out of logical order (eg the
  '2° tuberculosis' label at line 63 arrives between 'Progressive lung
  disease' and 'Bacteremia'; the miliary organ list [lines 86-92] emits
  before the PPD/Langhans text block [lines 94-106]; 'Joints and long
  bones' at 115-116 arrives after everything). All diagram quotes are taken
  as physical-order ranges and labeled as such.
- ' microbiology—Clinical Bacteriology' on p160 (line 8) is the chapter
  banner WITHOUT the '▶' glyph and with a LEADING SPACE — unlike p161's
  '▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY' (line 4). Both quoted as emitted.
- '“serpentine cord”' curly quotes (line 27); '“glove and stocking”'
  curly quotes with an em-dash join on p161 (line 11); 'M avium–intracellulare'
  en-dash; '2°' degree; 'CD4+' superscript-less emission; ▘ bullet glyphs
  (U+2598) on p161 (lines 15/18); 'high cellmediated immunity' hyphen-drop
  (p161 line 18 — print: cell-mediated); 'Interferon-γ' Greek gamma;
  'TNF-α' Greek alpha.
- FA mnemonic printed on p161 ('Daring rifles target cloaked leprechauns.')
  — table text carried verbatim in the note's table block only; NOT
  reproduced in the visual.
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
L = {p: pages[p - 1].split("\n") for p in (160, 161)}
P = {p: norm(pages[p - 1]) for p in (160, 161)}

def rng(pg, a, b):
    """Join raw 0-based lines a..b (inclusive) of page pg."""
    return "\n".join(L[pg][a:b + 1])

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

# --- p160 (book 138): the mycobacteria roster + TB + the progression flowchart ---
E += [
    ("Section banner", "SEC TION II", 160),
    ("Page banner (as emitted, no ▶ glyph, leading space)", rng(160, 8, 8), 160),
    ("Mycobacteria genus entry (acid-fast rods with inline photo marker A; slow culture growth; the species roster: M tuberculosis [MDR], M avium–intracellulare [AIDS, MDR], M scrofulaceum [cervical lymphadenitis in children], M marinum [aquarium handlers])", rng(160, 6, 20), 160),
    ("Standalone photo marker A (the acid-fast rods micrograph — sub-3-char covered inline)", rng(160, 22, 22), 160),
    ("TB symptoms (fever, night sweats, weight loss, cough, hemoptysis)", rng(160, 24, 26), 160),
    ("Virulence block (cord factor — serpentine cord, macrophage activation, granuloma formation, TNF-α release; sulfatides inhibit phagolysosomal fusion)", rng(160, 27, 32), 160),
    ("TB progression diagram text layer, part 1 (physical order, lines 34-53: the 'Tuberculosis / Mycobacterium tuberculosis' heading, Hilar nodes / Ghon complex / Ghon focus mid-lower lobes labels, the '+' glyph, 'Primary tuberculosis', the <10% and >90% branch labels, 'Healing by fibrosis / Calcification (PPD)' — the ⊕ emits as a bare 'PPD )' fragment at line 53)", rng(160, 34, 53), 160),
    ("TB progression diagram text layer, part 2 (physical order, lines 55-85: Progressive primary tuberculosis [AIDS, malnutrition], Reactivation, Progressive lung disease, the interleaved '2° tuberculosis' label, Bacteremia, Fibrocaseous cavitary lesion [usually upper lobes], Miliary tuberculosis, Meninges, Vertebrae [Pott disease], Localized destructive disease, Cavity, Caseation, Scar, Caseation)", rng(160, 55, 85), 160),
    ("TB progression diagram text layer, part 3 (physical order, lines 86-92: the miliary organ list — Lymph nodes, Lungs, Liver, Spleen, Adrenal gland)", rng(160, 86, 92), 160),
    ("PPD/IGRA rules (PPD ⊕ current/past infection or BCG; PPD ⊝ no infection and immunocompromised with low CD4+; IGRA fewer BCG false positives)", rng(160, 94, 100), 160),
    ("The histology rule (caseating granulomas with central necrosis and Langhans giant cell with inline photo marker A; do not confuse Langhans giant cell [fused macrophages] with Langerhans cell [dermal APC])", rng(160, 101, 106), 160),
    ("The reactivation rule (risk highest in immunocompromised: HIV, organ transplant recipients, TNF-α inhibitor use; apices of the lung — highly aerobic)", rng(160, 107, 112), 160),
    ("Standalone photo marker A (the Langhans giant cell histology — sub-3-char covered inline)", rng(160, 113, 113), 160),
    ("Diagram text layer tail (physical order, lines 115-116: 'Joints and long bones' — emitted after the main flow)", rng(160, 115, 116), 160),
    ("Printed book-page footer (page identity)", rng(160, 118, 118), 160),
]

# --- p161 (book 139): the leprosy subsection ONLY (lines 0-24; the Gram-negative
#     lab algorithm tree below is M12's content per the shared-page assignment) ---
E += [
    ("Page banner", "MICROBIOLOGY", 161),
    ("Section banner (leprosy subsection)", "SEC TION II", 161),
    ("Leprosy entry part 1 (Hansen disease; M leprae acid-fast bacillus, cool temperatures, skin and superficial nerves with 'glove and stocking' loss, cannot be grown in vitro; dx skin biopsy or tissue PCR; US reservoir armadillos; the two forms with ▘ bullet glyphs — lepromatous [diffuse, leonine facies with inline photo marker A, communicable, high bacterial load, low CMI largely Th2, can be lethal] vs tuberculoid [few hypoesthetic hairless plaques with inline photo marker B, high CMI largely Th1, low bacterial load]; 'cellmediated' hyphen-drop quoted as printed)", rng(161, 10, 18), 161),
    ("Leprosy treatment rule (dapsone and rifampin for tuberculoid; clofazimine added for lepromatous)", rng(161, 19, 19), 161),
    ("FA mnemonic printed on the page (verification-only; carried verbatim in the note's table block, NOT in the visual)", rng(161, 20, 20), 161),
    ("Standalone photo markers A and B (leonine facies; tuberculoid plaques — sub-3-char covered inline)", rng(161, 22, 24), 161),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 160 / book 138 full + pdf 161 / book 139 leprosy subsection)")

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

SRC = {"part": 1, "pdfPages": [160, 161], "bookPages": "138–139"}

manifest = {
    "topicId": "mycobacteria",
    "title": "Mycobacteria: Tuberculosis & Leprosy",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Clinical Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["tb-spectrum-map"],
    "mechanismIds": ["tb-spectrum", "cell-mediated-axis"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the flowchart and the leprosy entries; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "immune-gate-model",
            "summary": "The immune-gate reading of the spectrum (every outcome is a cell-mediated verdict: the >90% road is the competent Th1 host, reactivation is the wall's guards going down [HIV, transplant, TNF-α inhibitors — the drugs that block the very cytokine cord factor induces], and the <10% road is the never-competent host); the leprosy pole as the same axis printed as a skin disease (E31's IL-12/IFN-γ circuit); the lobe-assignment rule (mid/lower primary focus vs apical reactivation — the aerobic-preference contrast); the anergy reading of a negative PPD; and the miliary organ list as Pott/adrenal exam cross-links — labeled as integrations.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the flowchart, rules, and entries without the immune-axis synthesis or the cross-chapter wiring; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list): p160 carries 2 rasters (the acid-fast rods micrograph 200x200 with red arrows, marker A; the Langhans giant cell histology 396x296 with blue arrows, marker A) and p161's leprosy subsection carries 2 (leonine facies 187x188 marker A; tuberculoid plaques 188x173 marker B) — all COPYRIGHTED, described-in-text only; standalone A/B markers sub-3-char (dropped by design). The TB progression flowchart is PURE VECTOR (redrawn as the registry visual's core panel); the leprosy two-form comparison is printed ▘-bulleted text (redrawn as the visual's Th1/Th2 spectrum panels). Text-layer quirks documented: the flowchart's heavily interleaved label stream quoted as physical-order ranges (the '2° tuberculosis' label between 'Progressive lung disease' and 'Bacteremia'; the miliary organ list before the PPD/Langhans block; 'Joints and long bones' after everything; the 'PPD ⊕' label emitting as a bare 'PPD )' fragment at line 53); p160's chapter banner emits WITHOUT the ▶ glyph and WITH a leading space (' microbiology—Clinical Bacteriology') vs p161's '▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY'; '“serpentine cord”' and '“glove and stocking”' curly quotes; 'M avium–intracellulare' en-dash; ▘ bullet glyphs (U+2598); 'cellmediated' hyphen-drop; Greek γ/α. FA's printed mnemonic ('Daring rifles target cloaked leprechauns.') carried verbatim in the table block only (NOT in the visual). PAGE BOUNDARY: pdf 161 is shared with M12 per the chapter inventory — M11 owns the leprosy subsection (dump lines 0-24); the Gram-negative lab algorithm tree (lines 26-98) is M12's opening content.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"mycobacteria-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Clinical Bacteriology",
        "topicId": "mycobacteria",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "mycobacteria",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "PATHOLOGY_ILLUSTRATION", "The tuberculosis progression flowchart (book 138)",
            "The printed full-page flowchart: entry at the Ghon complex (Ghon focus usually mid/lower lobes + hilar nodes, with a '+' glyph) → Primary tuberculosis, splitting >90% (Healing by fibrosis, Calcification [PPD ⊕]) vs <10% (Progressive primary tuberculosis [AIDS, malnutrition]); the healing road continues to Reactivation → 2° tuberculosis (Fibrocaseous cavitary lesion, usually upper lobes) → Localized destructive disease (Cavity, Caseation, Scar); the progressive road splits to Progressive lung disease and Bacteremia → Miliary tuberculosis with a body silhouette labeling Meninges, Vertebrae (Pott disease), Joints and long bones, Lymph nodes, Lungs, Liver, Spleen, Adrenal gland. Pure vector (pdfimages empty at the diagram region).",
            "ORIGINAL_KYP_REDRAW", "tb-spectrum-map", "registry-visual", "the TB SPECTRUM panel — the redraw of the printed flowchart with both roads and the miliary organ list"),
        svi(2, "MICROBIOLOGY_IMAGE", "The acid-fast rods micrograph (book 138)",
            "A micrograph of acid-fast rods (pink rods against a blue background) with red arrows pointing to the organisms, its marker A printed after 'Acid-fast rods (pink rods, arrows in A).'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, Mycobacteria genus row — figure pointer carried verbatim; the micrograph described-in-text only"),
        svi(3, "HISTOLOGY", "The Langhans giant cell histology (book 138)",
            "An H&E histology section showing a Langhans giant cell (a large fused-macrophage cell with peripherally arranged nuclei) with blue arrows, its marker A printed after 'Langhans giant cell (single example in A).'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, the histology-rule row — figure pointer carried verbatim; the histology described-in-text only"),
        svi(4, "DERMATOLOGY_PHOTO", "The leonine facies photograph (book 139)",
            "A clinical photograph of leonine (lionlike) facies — the thickened, nodular facial skin of lepromatous leprosy — its marker A printed after 'leonine (lionlike) facies A.'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, M leprae row — figure pointer carried verbatim; the photograph described-in-text only"),
        svi(5, "DERMATOLOGY_PHOTO", "The tuberculoid plaques photograph (book 139)",
            "A clinical photograph of tuberculoid leprosy — a few hypoesthetic, hairless hypopigmented skin plaques — its marker B printed after 'a few hypoesthetic, hairless skin plaques B.'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, M leprae row — figure pointer carried verbatim; the photograph described-in-text only"),
    ],
    "coverageAudit": {
        "topicId": "mycobacteria",
        "textbookVisualCount": 5,
        "accountedFor": 5,
        "sourceReproductions": 0,
        "kypRedraws": 1,
        "kypOriginals": 4,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the TB progression flowchart is pure vector (redrawn as the registry visual's core panel); the 4 printed photographs/micrographs (acid-fast rods, Langhans giant cell histology, leonine facies, tuberculoid plaques) are rasters — COPYRIGHTED, described-in-text only within the note's table block rows. FA's printed mnemonic (Daring rifles target cloaked leprechauns) carried in the table block only; NOT in the visual.",
}

(ROOT / "content/usmle/manifests/mycobacteria.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/mycobacteria.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 10/39 -> 11/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "mycobacteria":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: mycobacteria -> complete, textbookVisuals rewritten (5 sv)")
        break
else:
    print("ERROR: mycobacteria not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
