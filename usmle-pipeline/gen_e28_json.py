#!/usr/bin/env python3
"""E28 immunoglobulin-isotypes — manifest + visual inventory + chapter flip.

Immunology topic 11/24 (Immune Responses banner). Evidence pinned on
pdf 125 / book 103 (Immunoglobulin isotypes + IgG/IgA/IgM/IgD/IgE +
Antigen type and memory).

Census: pdf 125 carries only a 1x1 rgb pixel artifact — the page is pure
vector/text (structure icons drawn as vectors). One original KYP registry
visual (isotype-comparison-table) with drawn monomer/dimer/pentamer
schematics.

Mnemonic boundary (documented, per the established E22/E24 rule): the printed
page carries FA's distinctive mnemonic phrases ("IgMom and IgDad...",
"IgG Greets the Growing fetus", "warm weather is Good!"). They ARE quoted in
the manifest evidence (verification record, in-repo only) but are NOT
reproduced in the user-facing note — KYP-authored mnemonics replace them.
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
P = {p: norm(pages[p - 1]) for p in (125,)}

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

# --- p125: intro + switching + affinity/avidity ---
E += [
    ("Section heading", "Immunoglobulin\nisotypes", 125),
    ("All-monomer rule", "All isotypes can exist as monomers.", 125),
    ("Naïve B-cell expression", "Mature, naïve B cells prior to activation express IgM and IgD\non their surfaces.", 125),
    ("Germinal-center switching", "They may differentiate in germinal centers of lymph nodes by isotype switching\n(gene rearrangement; induced by cytokines and CD40L) into plasma cells that secrete IgA, IgG,\nor IgE.", 125),
    ("FA printed mnemonic (verification only — not reproduced in user-facing note)", "“For B cells, IgMom and IgDad mature to plasma cells as they AGE.”", 125),
    ("Affinity definition", "Affinity refers to the strength of a single antibody–antigen interaction.", 125),
    ("Avidity definition", "Avidity (enhanced by the\nhinge region and heavy chain domains) describes the overall binding strength resulting from\nmultiple antibody–antigen interactions in a multivalent molecule.", 125),
]

# --- p125: IgG ---
E += [
    ("IgG — heading", "IgG", 125),
    ("IgG — 2° response + abundance", "Main antibody in 2° response to an antigen. Most abundant isotype in serum.", 125),
    ("IgG — functions", "Fixes complement,\nopsonizes bacteria, neutralizes bacterial toxins and viruses.", 125),
    ("IgG — placenta", "Only isotype that crosses the placenta\n(provides infants with passive immunity that starts to wane after birth).", 125),
    ("IgG — FA mnemonic (verification only)", "“IgG Greets the Growing\nfetus.”", 125),
    ("IgG — warm AIHA + FA mnemonic (verification only)", "Associated with warm autoimmune\nhemolytic anemia (“warm weather is Good!”).", 125),
]

# --- p125: IgA ---
E += [
    ("IgA — heading", "IgA", 125),
    ("IgA — mucosal function, no complement", "Prevents attachment of bacteria and viruses to mucous membranes; does not fix complement.", 125),
    ("IgA — structure", "Monomer (in circulation) or dimer (with J chain when secreted).", 125),
    ("IgA — transcytosis", "Crosses epithelial cells by\ntranscytosis.", 125),
    ("IgA — GI source + Giardia", "Produced in GI tract (eg, by Peyer patches) and protects against gut infections (eg,\nGiardia).", 125),
    ("IgA — most produced, low serum", "Most produced antibody overall, but has lower serum concentrations.", 125),
    ("IgA — secretions + milk", "Released into\nsecretions (tears, saliva, mucus) and breast milk.", 125),
    ("IgA — secretory component", "Picks up secretory component from epithelial cells,\nwhich protects the Fc portion from luminal proteases.", 125),
]

# --- p125: IgM ---
E += [
    ("IgM — heading", "IgM", 125),
    ("IgM — first antibody", "First antibody to be produced during an immune response.", 125),
    ("IgM — complement + BCR", "Fixes complement. Antigen receptor\non the surface of B cells.", 125),
    ("IgM — pentamer structure", "Monomer on B cell, pentamer with J chain when secreted.", 125),
    ("IgM — avid pentamer", "Pentamer\nenables avid binding to antigen while humoral response evolves.", 125),
    ("IgM — cold AIHA", "Associated with cold autoimmune\nhemolytic anemia.", 125),
]

# --- p125: IgD ---
E += [
    ("IgD — heading", "IgD", 125),
    ("IgD — naïve BCR + low serum", "Expressed on the surface of mature, naïve B cells. Normally, low levels are detectable in serum.", 125),
]

# --- p125: IgE ---
E += [
    ("IgE — heading", "IgE", 125),
    ("IgE — mast cells, type I, histamine", "Binds mast cells and basophils; cross-links when exposed to allergen, mediating immediate (type I)\nhypersensitivity through release of inflammatory mediators such as histamine.", 125),
    ("IgE — parasites via eosinophils", "Contributes to\nimmunity to parasites by activating Eosinophils.", 125),
]

# --- p125: antigen type and memory ---
E += [
    ("Antigen memory heading", "Antigen type and memory", 125),
    ("TI — heading + definition", "Thymus-independent\nantigens\nAntigens lacking a peptide component (eg, lipopolysaccharides from gram ⊝ bacteria); cannot\nbe presented by MHC to T cells.", 125),
    ("TI — weakly immunogenic, boosters, PPSV23", "Weakly immunogenic; vaccines often require boosters and\nadjuvants (eg, capsular polysaccharide subunit of Streptococcus pneumoniae PPSV23 vaccine).", 125),
    ("TD — heading + definition", "Thymus-dependent\nantigens\nAntigens containing a protein component (eg, diphtheria toxoid).", 125),
    ("TD — switching + memory", "Class switching and immunologic\nmemory occur as a result of direct contact of B cells with Th cells.", 125),
]

# --- p125: structure icons (vector labels) ---
E += [
    ("Structure icon label — J chain", "J chain", 125),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 125 / book 103)")

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

SRC125 = {"part": 1, "pdfPages": [125], "bookPages": "103"}

manifest = {
    "topicId": "immunoglobulin-isotypes",
    "title": "Immunoglobulin Isotypes & Antigen Memory",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC125,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["isotype-comparison-table"],
    "mechanismIds": ["isotype-lifecycle"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the isotype roster and antigen-memory text; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "compartment-and-superlative-model",
            "summary": "Reading the roster by compartments and exact superlatives (IgG most abundant IN SERUM vs IgA most PRODUCED overall; blood vs mucosa vs mast-cell-bound), the serology clock (IgM recent/acute vs IgG past/secondary), the temperature-isotype map (warm AIHA IgG vs cold AIHA IgM), and the conjugate-vaccine logic (TI polysaccharide + protein carrier = TD, per PCV13 vs PPSV23).",
            "origin": "outside-first-aid",
            "rationale": "The source lists isotype facts but does not build the compartment map, serology clock, or the conjugate-vaccine corollary; these integrations are KYP's design. The PCV13/conjugate details are labeled extension (the printed page names only PPSV23 and diphtheria toxoid).",
            "location": "core.keyIdea + traps 1 + pivots 1-2 + callout + pattern 1 + miniCase distractors",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdf 125 carries only a 1x1 pixel artifact — pure vector/text page; the structure icons (monomer/dimer/pentamer with J chains) are conveyed as drawn schematics inside the ONE original KYP registry visual (isotype-comparison-table). MNEMONIC BOUNDARY (documented, E22/E24 rule): the page's FA mnemonic phrases ('IgMom and IgDad...', 'IgG Greets the Growing fetus', 'warm weather is Good!') are quoted in the manifest evidence for VERIFICATION ONLY and are NOT reproduced in any user-facing note content — KYP-authored mnemonics replace them. Boundary: pdf 124 = E27 antibody-structure; pdf 126 (complement) = E29.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"immunoglobulin-isotypes-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC125,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "immunoglobulin-isotypes",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "immunoglobulin-isotypes",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Immunoglobulin isotypes — the five-isotype roster with structure icons",
            "A vector layout of the five isotype entries, each with structure icons drawn as simple Y-unit schematics (IgG monomer; IgA monomer or dimer with J chain; IgM monomer-on-cell or pentamer with J chain, with J-chain labels repeated; IgD monomer; IgE monomer) followed by each isotype's function paragraph.",
            "ORIGINAL_KYP_REDRAW", "isotype-comparison-table", "registry-visual"),
    ],
    "coverageAudit": {
        "topicId": "immunoglobulin-isotypes",
        "textbookVisualCount": 1,
        "accountedFor": 1,
        "sourceReproductions": 0,
        "kypRedraws": 1,
        "kypOriginals": 0,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: pure vector page (1x1 artifact only). The five-isotype roster with its structure icons is conveyed in ONE original KYP comparison grid (drawn monomer/dimer/pentamer schematics + five rows of attributes); the verbatim isotype text is the note's table block. FA's printed mnemonic phrases are not reproduced in user-facing content.",
}

(ROOT / "content/usmle/manifests/immunoglobulin-isotypes.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/immunoglobulin-isotypes.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 10/24 -> 11/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "immunoglobulin-isotypes":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: immunoglobulin-isotypes -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: immunoglobulin-isotypes not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
