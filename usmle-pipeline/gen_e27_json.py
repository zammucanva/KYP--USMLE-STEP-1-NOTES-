#!/usr/bin/env python3
"""E27 antibody-structure — manifest + visual inventory + chapter flip.

Immunology topic 10/24 — FIRST "Immune Responses" banner topic (pdf 124 /
book 102; the Cellular Components banner ended at E26/pdf 123).

Census (pdfimages -list, p124): 4 raster objects — 467x329 cmyk jpeg (one of
the function illustrations), 78x792 + 934x136 index strips (decorative page
furniture), 1x1 artifact. The antibody structure diagram itself is
vector-drawn (VLM layout census confirms vector-style geometric shapes). All
copyrighted artwork is conveyed as an ORIGINAL KYP schematic
(antibody-anatomy); nothing is reproduced.

Scope note (documented): the inventory's productionRationale mentions a
'papain vs pepsin cleavage map' — the printed p124 does NOT contain papain/
pepsin content (verified: no such tokens in the p124 text layer; the only
'pepsin' hits in the book are GI-physiology pages 400-403). E27 is scoped to
the actual printed content: structure prose, anatomy diagram, region
definitions, 5 C's, diversity/specificity steps 1-5, function trio. The
cleavage-fragment concept appears in the note ONLY as a labeled KYP bridge
(pattern 2), never as source evidence.
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
P = {p: norm(pages[p - 1]) for p in (124,)}

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

# --- p124: structure prose (the four anchors) ---
E += [
    ("Section heading", "Antibody structure\nand function", 124),
    ("Fab recognizes antigens", "Fab fragment consisting of light (L) and heavy (H) chains recognizes antigens.", 124),
    ("Fc fixes complement (IgM, IgG)", "Fc region of IgM and IgG fixes complement.", 124),
    ("Heavy chain contribution", "Heavy chain contributes to Fc and Fab regions.", 124),
    ("Light chain contribution", "Light chain contributes only to Fab region.", 124),
]

# --- p124: diagram labels (vector text) ---
# (VH / VL / CL are 2-char labels — below the >=3-char quote floor; they are
#  covered by the multi-line hypervariable-region label and the legend below.)
E += [
    ("Diagram label — binding site", "Antigenbinding site", 124),
    ("Diagram label — Fab", "Fa\nb", 124),
    ("Diagram label — hypervariable", "ble\nria\nrva ns\npe io\nHy reg", 124),
    ("Diagram label — CH1", "C H1", 124),
    ("Diagram label — CH2", "CH2", 124),
    ("Diagram label — CH3", "C H3", 124),
    ("Diagram label — epitope", "Epitope", 124),
    ("Diagram label — heavy chain", "Heavy chain", 124),
    ("Diagram label — Fc region", "Fc region", 124),
    ("Diagram label — light chain", "Light chain", 124),
    ("Diagram label — complement binding", "Complement\nbinding", 124),
    ("Diagram label — macrophage binding", "Macrophage\nbinding", 124),
    ("Diagram label — neutralization", "Neutralization", 124),
    ("Diagram label — disulfide legend", "SS = Disulﬁde bond", 124),
    ("Diagram label — hinge", "Hinge", 124),
    ("Diagram label — opsonization", "Opsonization", 124),
    ("Diagram label — complement activation", "Complement\nactivation", 124),
    ("Diagram label — MAC", "Membrane\nattack complex\n(MAC)", 124),
    ("Diagram label — C3b", "C3b", 124),
]

# --- p124: function captions ---
E += [
    ("Function — neutralization caption", "Antibody prevents\nbacterial adherence", 124),
    ("Function — opsonization caption", "Antibody promotes\nphagocytosis by marking\npathogens for destruction", 124),
    ("Function — complement caption", "Antibody activates\ncomplement, enhancing\nopsonization and lysis", 124),
]

# --- p124: region definitions + generation steps (verbatim) ---
E += [
    ("Fab definition", "Fab:\n▘ Fragment, antigen binding\n▘ Determines idiotype: antigen binding site.", 124),
    ("Hinge definition", "Hinge region: provides flexibility between\nFab arms, allowing simultaneous binding to\nmultiple epitopes", 124),
    ("Fc 5 C's", "Fc (5 C’s):\n▘ Constant\n▘ Carboxy terminal\n▘ Complement binding\n▘ Carbohydrate side chains\n▘ Confers (determines) isotype (IgM, IgD, etc)", 124),
    ("Diversity heading", "Generation of antibody diversity (antigen\nindependent)", 124),
    ("Step 1 — RAG recombination", "1. Random recombination of VJ (light-chain)\nor V(D)J (heavy-chain) genes by RAG1 and\nRAG2", 124),
    ("Step 2 — TdT", "2. Random addition of nucleotides to\nDNA during recombination by terminal\ndeoxynucleotidyl transferase (TdT)", 124),
    ("Step 3 — chain pairing", "3. Random combination of heavy chains with\nlight chains", 124),
    ("Specificity heading", "Generation of antibody specificity (antigen\ndependent)", 124),
    ("Step 4 — hypermutation/affinity", "4. Somatic hypermutation and affinity\nmaturation (variable region)", 124),
    ("Step 5 — isotype switching", "5. Isotype switching (constant region)", 124),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 124 / book 102)")

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

SRC124 = {"part": 1, "pdfPages": [124], "bookPages": "102"}

manifest = {
    "topicId": "antibody-structure",
    "title": "Antibody Structure & Function",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC124,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["antibody-anatomy"],
    "mechanismIds": ["fab-fc-division-of-labor", "diversity-vs-specificity-generation"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the anatomy, region definitions, steps, and function captions; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "modular-chassis-model",
            "summary": "Reading the Y as a modular chassis (recognition module upstairs, effector module downstairs, flexible joint between) that explains isotype-switching logic (constant swap preserves binding), isotype-dependent complement fixation, assay design (anti-Fab vs anti-Fc secondaries), and therapeutic antibody engineering; plus the disease map of the five steps (RAG null = SCID, TdT = restricted diversity, AID = hyper-IgM type 2) and the booster-kinetics payoff.",
            "origin": "outside-first-aid",
            "rationale": "The source presents anatomy and steps as lists without the chassis framing or the step-to-disease map. NOTE: papain/pepsin cleavage products are NOT on this printed page (verified absent from the p124 text layer) and appear only as a labeled bridge in pattern 2; the disease-genetics specifics of the distractors are standard immunology knowledge, cited only as KYP extension.",
            "location": "core.keyIdea + mechanism captions + pattern 2 + mnemonics + miniCase distractors",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list + 200-DPI VLM, this batch): p124 carries 4 raster objects (467x329 cmyk jpeg = a function illustration; two index strips = page furniture; 1x1 artifact); the antibody structure diagram is VECTOR-DRAWN. All artwork is COPYRIGHTED_NO_REPUBLISH — conveyed as ONE original KYP schematic (antibody-anatomy) covering the Y anatomy, region jobs, chain contributions, and the function trio. Scope correction (documented): the inventory rationale's 'papain vs pepsin cleavage map' is NOT printed on p124 (only GI-physiology pepsin on pdf 400-403) — E27 is scoped to the actual printed content; the cleavage concept appears only as a labeled KYP bridge in pattern 2. Boundary: E26 owns pdf 123; pdf 125 (immunoglobulin isotypes) is E28.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"antibody-structure-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC124,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "antibody-structure",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "antibody-structure",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "IMMUNOLOGY_DIAGRAM", "Antibody structure — the Y-shaped IgG anatomy diagram",
            "A vector-drawn Y-shaped IgG: two Fab arms each with hypervariable V domains (VH, VL) at the tips (Antigen-binding site, Epitope labels) above constant domains (CH1, CL); a Hinge region with SS (disulfide) bonds; an Fc stem of heavy-chain-only CH2 and CH3 domains with Complement binding and Macrophage binding pointers; legend C = Constant, V = Variable, L = Light, H = Heavy, SS = Disulfide bond.",
            "ORIGINAL_KYP_REDRAW", "antibody-anatomy", "registry-visual"),
        svi(2, "IMMUNOLOGY_DIAGRAM", "Antibody function trio — neutralization / opsonization / complement activation",
            "Three function illustrations with captions: Neutralization (antibody prevents bacterial adherence); Opsonization (antibody promotes phagocytosis by marking pathogens for destruction, C3b); Complement activation (antibody activates complement, enhancing opsonization and lysis — membrane attack complex [MAC]). The 467x329 cmyk raster on the page belongs to this function set.",
            "ORIGINAL_KYP_REDRAW", "antibody-anatomy", "registry-visual", "bottom function-trio strip of the same registry visual"),
    ],
    "coverageAudit": {
        "topicId": "antibody-structure",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 2,
        "kypOriginals": 0,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the Y-anatomy diagram is vector-drawn; the function illustrations include the page's one content raster (467x329 cmyk jpeg). Both are COPYRIGHTED — conveyed within ONE original KYP registry visual (antibody-anatomy: expanded-Y schematic + function-trio strip). The two index strips (78x792, 934x136) are page furniture, not content. Verbatim region definitions and steps 1-5 are the note's table block.",
}

(ROOT / "content/usmle/manifests/antibody-structure.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/antibody-structure.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 9/24 -> 10/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "antibody-structure":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: antibody-structure -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: antibody-structure not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
