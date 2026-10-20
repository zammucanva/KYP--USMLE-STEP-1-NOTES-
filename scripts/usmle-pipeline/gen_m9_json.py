#!/usr/bin/env python3
"""M9 gram-positive-cocci — manifest + visual inventory + chapter flip.

Microbiology topic 9/39 (Clinical Bacteriology banner begins). Evidence
pinned on pdf 154-157 / book 132-135: the Gram-positive lab algorithm tree
(book 132, pure vector); hemolysis definitions + the staphylococci (book
133, 2 photos); S pneumoniae/viridans/pyogenes (book 134, 2 photos);
S agalactiae/gallolyticus/enterococci + the B-anthracis bridge (book 135,
1 photo — the bridge section that begins M10's bacilli territory on this
note's final page; covered here per page ownership).

Photos (raster, COPYRIGHTED, described-in-text only):
- book 133: the α/β hemolysis blood-agar figure (378x255 cmyk) with two
  inline A markers; S aureus cocci-in-clusters gram stain (188x188).
- book 134: S pneumoniae lancet-shaped diplococci (188x188); S pyogenes
  cocci-in-chains (188x188).
- book 135: the cutaneous-anthrax black-eschar photo (188x188).
Standalone 'A' markers are sub-3-char (dropped by design; covered inline).

Text-layer quirks documented:
- book 132 (the tree): 'sensitiVity' / 'groWs' / 'GroWth' / 'NoVobiocin
  sensitiVity' — small-caps V/W render as capitals in the text layer;
  'ﬁlaments' with the ﬁ ligature; the tree labels quote as emitted.
- '→  ' double-space arrows throughout; 'healthcareassociated' and
  'penicillinbinding' merged hyphen-drops (print: healthcare-associated,
  penicillin-binding); 'ﬁbrin-platelet' ligature on book 134 (line 39:
  'fibrinplatelet' hyphen-drop).
- FA mnemonics printed on these pages ('op-to-chin', 'Sanguinis = blood',
  '"Ph"yogenes ... rheumatic "phever"', 'Group B for Babies!', 'Bovis in
  the blood = cancer in the colon', 'Entero = intestine, faecalis =
  feces...') — table text carried verbatim in the note's table block only;
  NOT reproduced in the visual.
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
L = {p: pages[p - 1].split("\n") for p in (154, 155, 156, 157)}
P = {p: norm(pages[p - 1]) for p in (154, 155, 156, 157)}

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

# --- p154: the lab algorithm tree (pure vector) ---
E += [
    ("Section banner", "SEC TION II", 154),
    ("Chapter banner (Clinical Bacteriology begins)", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 154),
    ("Tree heading", rng(154, 9, 9), 154),
    ("Tree: gram ⊕ bacilli branch (physical order)", rng(154, 10, 42), 154),
    ("Tree: catalase split (physical order)", rng(154, 44, 52), 154),
    ("Tree: hemolysis split + third-level tests (full physical order, lines 54-107; the small-caps V/W artifacts 'sensitiVity'/'groWs'/'GroWth'/'NoVobiocin' quoted as emitted)", rng(154, 54, 107), 154),
    ("Tree footnote (important tests/pathogens bold note + Enterococcus hemolysis note + PYR definition)", rng(154, 109, 111), 154),
    ("Printed book-page footer (page identity)", rng(154, 113, 113), 154),
]

# --- p155: hemolysis definitions + the staphylococci ---
E += [
    ("Section banner", "SEC TION II", 155),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 155),
    ("Hemolysis definitions (full physical order; inline photo markers A)", rng(155, 8, 24), 155),
    ("S aureus entry (full physical order; Protein A; MRSA/PVL; TSS; food poisoning; coagulase-abscess)", rng(155, 26, 72), 155),
    ("S epidermidis entry (full physical order)", rng(155, 74, 81), 155),
    ("S saprophyticus entry (full physical order)", rng(155, 83, 88), 155),
    ("Printed book-page footer (page identity)", rng(155, 90, 90), 155),
]

# --- p156: pneumoniae / viridans / pyogenes ---
E += [
    ("Section banner", "SEC TION II", 156),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 156),
    ("S pneumoniae entry (full physical order; MOPS; asplenia; vaccines)", rng(156, 4, 29), 156),
    ("Viridans entry (full physical order; fibrinplatelet hyphen-drop as printed)", rng(156, 31, 46), 156),
    ("S pyogenes entry (full physical order; triad; M protein/myosin; ASO/anti-DNase B; scarlet fever; the FA mnemonics are table text)", rng(156, 48, 85), 156),
    ("Printed book-page footer (page identity)", rng(156, 91, 91), 156),
]

# --- p157: agalactiae / gallolyticus / enterococci + the B-anthracis bridge ---
E += [
    ("Section banner", "SEC TION II", 157),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 157),
    ("S agalactiae entry (full physical order; CAMP; hippurate; 35-37-week screen; intrapartum prophylaxis)", rng(157, 8, 25), 157),
    ("S gallolyticus entry (full physical order; colon cancer)", rng(157, 27, 35), 157),
    ("Enterococci entry (full physical order; 6.5% NaCl; VRE)", rng(157, 37, 54), 157),
    ("Bacillus anthracis bridge section (this note's final page; covered here per page ownership — M10 continues from book 136)", rng(157, 56, 69), 157),
    ("Printed book-page footer (page identity)", rng(157, 73, 73), 157),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 154-157 / book 132-135)")

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

SRC = {"part": 1, "pdfPages": [154, 155, 156, 157], "bookPages": "132–135"}

manifest = {
    "topicId": "gram-positive-cocci",
    "title": "Gram-Positive Cocci: Staphylococcus & Streptococcus",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Clinical Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["gram-pos-cocci-tree"],
    "mechanismIds": ["cocci-tree-logic", "virulence-at-the-leaf"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the tree and organism entries; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "tree-protocol-model",
            "summary": "The three-gate tree as the exam's thought process (catalase → coagulase/hemolysis → the third-level test that follows the hemolysis color); the leaf-protocol model (each leaf carries a management gate: pneumococcal conjugate+polysaccharide vaccines at the asplenia link; the 35-37-week group-B screen with intrapartum prophylaxis; colonoscopy after S gallolyticus bacteremia; anti-MRSA therapy by the mecA target-modification class); the TSS-vs-TSLS distinction; and the preformed-heat-stable-enterotoxin 2-6-hour signature — with hardware-revision practice and endocarditis-prophylaxis contexts labeled as extensions.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the tree and entries without the protocol column or the third-test-follows-the-color rule; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: the lab-algorithm tree is PURE VECTOR (pdfimages empty on p154). The printed photos (5 rasters: the α/β hemolysis blood-agar figure 378x255, S aureus clusters, S pneumoniae lancet diplococci, S pyogenes chains, and the cutaneous-anthrax black-eschar photo on p157) are COPYRIGHTED, described-in-text only; inline 'A' markers quoted; standalone markers sub-3-char (dropped by design). Text-layer quirks documented: the tree's small-caps V/W artifacts ('sensitiVity', 'groWs', 'GroWth', 'NoVobiocin'); 'ﬁlaments' ligature; double-space arrows; merged hyphen-drops ('healthcareassociated', 'penicillinbinding', 'fibrinplatelet'); FA mnemonics printed on these pages carried verbatim in the note's table block only (NOT in the visual). Boundary: the B-anthracis section on book 135 is this note's page (covered here per page ownership — the bridge to M10's gram-positive bacilli, which continues from book 136).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"gram-positive-cocci-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Clinical Bacteriology",
        "topicId": "gram-positive-cocci",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "gram-positive-cocci",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "DIAGNOSTIC_ALGORITHM", "The Gram-positive lab algorithm tree (book 132)",
            "The printed decision tree: Gram ⊕ → Bacilli (aerobic: Listeria, Bacillus, Corynebacterium; anaerobic: Clostridium, Cutibacterium; branching filaments: Nocardia [weakly acid fast] vs Actinomyces [not acid fast]) and Cocci → catalase ⊝ Streptococcus (pairs or chains) vs catalase ⊕ Staphylococcus (clusters); hemolysis α (optochin sensitiVity and bile solubility → S pneumoniae [encapsulated] vs viridans [no capsule: S mutans, S mitis]); β (bacitracin sensitiVity and PYR status → Group A S pyogenes vs Group B S agalactiae); staphylococci by coagulase (S aureus vs S epidermidis/S saprophyticus) with NoVobiocin sensitiVity; GroWth in 6.5% NaCl and PYR Status → Enterococcus (E faecium, E faecalis) vs Nonenterococcus (S gallolyticus).",
            "ORIGINAL_KYP_REDRAW", "gram-pos-cocci-tree", "registry-visual"),
        svi(2, "MICROBIOLOGY_IMAGE", "Hemolysis — the α/β blood-agar figure (book 133)",
            "Two blood-agar photographs (a combined figure): partial greenish discoloration without clearing (α) and complete clear lysis around colonies (β), with inline figure markers A after 'growth on blood agar' and 'colony on blood agar'.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, Hemolysis definitions row — the printed figure pointers carried verbatim; the photographs are described-in-text only"),
        svi(3, "MICROBIOLOGY_IMAGE", "Staphylococci — the S aureus clusters gram stain (book 133)",
            "A gram-stain micrograph of gram ⊕ cocci in clusters (S aureus), its inline marker after 'cocci in clusters'.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, S aureus row — figure pointer carried verbatim; the micrograph described-in-text only"),
        svi(4, "MICROBIOLOGY_IMAGE", "Streptococci — the S pneumoniae and S pyogenes gram stains (book 134)",
            "Two gram-stain micrographs: lancet-shaped gram ⊕ diplococci (S pneumoniae) and gram ⊕ cocci in chains (S pyogenes), each with its inline marker A.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, S pneumoniae + S pyogenes rows — figure pointers carried verbatim; the micrographs described-in-text only"),
        svi(5, "MICROBIOLOGY_IMAGE", "The B-anthracis black-eschar photograph (book 135, the bridge section)",
            "A clinical photograph of a cutaneous anthrax ulcer with black eschar (painless, necrotic), its inline marker after 'ulcer with black eschar'.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, B-anthracis bridge row — figure pointer carried verbatim; the photograph described-in-text only"),
    ],
    "coverageAudit": {
        "topicId": "gram-positive-cocci",
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
    "notes": "Census: the tree is pure vector (redrawn as the registry visual's core); the 5 printed photos (hemolysis agar pair, S aureus clusters, S pneumoniae diplococci, S pyogenes chains, anthrax eschar) are rasters — COPYRIGHTED, described-in-text only within the note's table block rows. FA's printed mnemonics carried in the table block only; NOT in the visual.",
}

(ROOT / "content/usmle/manifests/gram-positive-cocci.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/gram-positive-cocci.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 8/39 -> 9/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "gram-positive-cocci":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: gram-positive-cocci -> complete, textbookVisuals rewritten (5 sv)")
        break
else:
    print("ERROR: gram-positive-cocci not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
