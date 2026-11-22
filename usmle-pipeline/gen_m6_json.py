#!/usr/bin/env python3
"""M6 virulence-mechanisms — manifest + visual inventory + chapter flip.

Microbiology topic 6/39 (Basic Bacteriology banner). Evidence pinned on
pdf 149 / book 127 (Bacterial virulence factors: capsule / Protein A /
IgA protease / M protein + the immune-evasion diagram labels + the
antibiotic resistance mechanisms figure).

Census (pdfimages + VLM 200-DPI read): p149 is a PURE VECTOR page — no
rasters at all (no printed photos). Two printed diagrams: (1) the
immune-evasion diagram (a rod bacterium with surface structures, blocked
phagocytosis, complement-mediated phagocytosis cell, Protein A binding
the Fc region of IgG / Fc receptor (opsonization), IgA protease cleaving
IgA) and (2) the antibiotic-resistance-mechanisms figure (a bacterial
cell with three mechanism columns). Both redrawn as ONE original KYP
registry visual (virulence-resistance-map).

Text-layer quirks documented:
- 'Completment-mediated phagocytosis' — the SOURCE'S OWN PRINTED TYPO
  ('Completment' for 'Complement'), quoted as printed; the redraw spells
  it correctly and does not reproduce the typo.
- 'Ce l\nlw\na ll' — the 'Cell wall' anatomy label emitted in scrambled
  character fragments by the text layer; quoted as emitted (norm
  containment tolerates the internal spaces).
- '\\uf07d microbiology—Basic Bacteriology' — this page's chapter banner
  emits the ▶ bullet as the private-use glyph U+F07D and small-caps as
  lowercase (other pages emit '▶ MICROBIOLOGY—BASIC BACTERIOLOGY');
  quoted as this page's text layer gives it.
- 'Penicillinase-sensitive penicillins' / 'Penicillinase-resistant
  penicillins' — the figure's two lists (cleavage vs target
  modification), each quoted in its physical position.
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
P = {p: norm(pages[p - 1]) for p in (149,)}

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

# --- p149: banners + section heading ---
E += [
    ("Section banner", "SEC TION II", 149),
    ("Chapter banner (this page emits the bullet as private-use U+F07D and small-caps lowercase)", "\uf07d microbiology—Basic Bacteriology", 149),
    ("Section heading", "Bacterial virulence\nfactors\nThese promote evasion of host immune response.", 149),
]

# --- p149: the four virulence rows (physical order) ---
E += [
    ("Capsular polysaccharide row (full physical order)", "Capsular\npolysaccharide\nHighly charged, hydrophilic structure. Acts as barrier to phagocytosis and complement-mediated\nlysis. Major determinant of virulence.", 149),
    ("Protein A row (full physical order)", "Protein A\nBinds Fc region of IgG. Prevents opsonization and phagocytosis. Expressed by S aureus.", 149),
    ("IgA protease row (full physical order; SHiN roster)", "IgA protease\nEnzyme that cleaves IgA, allowing bacteria to adhere to and colonize mucous membranes. Secreted\nby S pneumoniae, H influenzae type b, and Neisseria (SHiN).", 149),
    ("M protein row (full physical order; molecular mimicry)", "M protein\nHelps prevent phagocytosis. Expressed by group A streptococci. Sequence homology with human\ncardiac myosin (molecular mimicry); possibly underlies the autoimmune response seen in acute\nrheumatic fever.", 149),
]

# --- p149: the immune-evasion diagram labels (physical order) ---
E += [
    ("Evasion diagram labels (physical order; source's own typo 'Completment-mediated' quoted as printed)", "Phagocytosis\nCapsular\npolysaccharide\nM protein\nCompletment-mediated\nphagocytosis\nProtein A\nFc region of IgG\nFc receptor (opsonization)\nIgA protease\nIgA", 149),
]

# --- p149: the resistance figure (physical order) ---
E += [
    ("Resistance figure headers + efflux/uptake list (physical order)", "Antibiotic resistance mechanisms\nINCREASED EFFLUX,\nDECREASED UPTAKE\nENZYMATIC\nINACTIVATION\nTetracyclines\nSulfonamides\nFluoroquinolones", 149),
    ("Drug cleavage + drug modification (physical order)", "Drug cleavage\nPenicillin G, V\nPenicillinase-sensitive\npenicillins\nCephalosporins\nCarbapenems\nDrug modification\nAminoglycosides\nChloramphenicol", 149),
    ("Target modification header + cell label (physical order)", "DRUG TARGET\nMODIFICATION\nBACTERIAL CELL", 149),
    ("Target modification — rRNA row (physical order)", "rRNA\nLinezolid\nMacrolides", 149),
    ("Cell anatomy labels (physical order)", "Ribosome\nrRNA\nmRNA\nDNA\nEnzyme", 149),
    ("Cell wall anatomy label (scrambled text-layer fragments 'Ce l lw a ll'; quoted as emitted)", "Ce l\nlw\na ll", 149),
    ("Target modification — enzyme row (physical order; the resistant-target list)", "Enzyme\nPenicillinase-resistant\npenicillins\nCephalosporins\nSulfonamides\nFluoroquinolones", 149),
    ("Target modification — cell wall row (physical order)", "Cell wall\nVancomycin", 149),
    ("Printed book-page footer (page identity)", "FAS1_2026_03-Microbiology.indd 127", 149),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 149 / book 127)")

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

SRC = {"part": 1, "pdfPages": [149], "bookPages": "127–127"}

manifest = {
    "topicId": "virulence-mechanisms",
    "title": "Virulence Mechanisms & Antimicrobial Resistance Overview",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Basic Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["virulence-resistance-map"],
    "mechanismIds": ["immune-evasion-arsenal", "resistance-geometry"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the table and figure; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "arrive-survive-fit",
            "summary": "The drug-journey model of resistance (a drug must accumulate, stay intact, and fit its target — each mechanism class removes one leg); the immune-evasion arsenal as four pressures defeated (phagocytosis/complement, opsonization, mucosal IgA, phagocytosis+mimicry); the Protein A backwards-IgG explanation; the mimicry-to-autoimmunity chain (cardiac myosin homology → acute rheumatic fever carditis); and the cleavage-list vs target-list split at the β-lactamase line — with post-strep glomerulonephritis and altered-PBP/MRSA notes labeled as extensions.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the figure without the drug-journey taxonomy or the mimicry-autoimmunity chain; these integrations are KYP's design.",
            "location": "core.keyIdea + mechanism captions + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p149 is a PURE VECTOR page (pdfimages returns nothing — no printed photos). TWO printed diagrams (the immune-evasion diagram; the antibiotic-resistance-mechanisms cell figure) both redrawn as ONE original KYP registry visual (virulence-resistance-map: evasion arsenal panel + resistance geometry panel with the cell schematic). Text-layer quirks documented: the source's OWN printed typo 'Completment-mediated phagocytosis' (quoted as printed; the redraw spells it correctly); the 'Cell wall' anatomy label emitted as scrambled fragments ('Ce l lw a ll' — quoted as emitted); this page's chapter banner emits the bullet as private-use U+F07D with small-caps lowercase; the figure's two penicillin lists (penicillinase-SENSITIVE on the cleavage list; penicillinase-RESISTANT on the target-modification list) each quoted in physical position. No FA mnemonics printed on this page (none to reproduce).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"virulence-mechanisms-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Basic Bacteriology",
        "topicId": "virulence-mechanisms",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "virulence-mechanisms",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "IMMUNOLOGY_DIAGRAM", "Virulence — the immune-evasion diagram",
            "A rod-shaped bacterium with surface structures (capsular polysaccharide as wavy lines, M protein as rectangles, Protein A as surface structures); a phagocytosis cell with a blocked symbol; a complement-mediated phagocytosis cell interacting with Protein A bound to the Fc region of IgG (blocking the Fc receptor / opsonization); and IgA protease shown cleaving IgA. (The source's own typo 'Completment-mediated phagocytosis' is printed in this diagram.)",
            "ORIGINAL_KYP_REDRAW", "virulence-resistance-map", "registry-visual"),
        svi(2, "PHARMACOLOGY_DIAGRAM", "Resistance — the antibiotic resistance mechanisms figure",
            "A bacterial-cell schematic with three mechanism columns: INCREASED EFFLUX/DECREASED UPTAKE (tetracyclines, sulfonamides, fluoroquinolones); ENZYMATIC INACTIVATION with drug cleavage (penicillin G, V; penicillinase-sensitive penicillins; cephalosporins; carbapenems) and drug modification (aminoglycosides, chloramphenicol); and DRUG TARGET MODIFICATION with rRNA (linezolid, macrolides), enzyme (penicillinase-resistant penicillins; cephalosporins; sulfonamides; fluoroquinolones), and cell wall (vancomycin) — the cell carrying anatomy labels (BACTERIAL CELL, cell wall, ribosome with rRNA, mRNA, DNA, enzyme).",
            "ORIGINAL_KYP_REDRAW", "virulence-resistance-map", "registry-visual"),
        svi(3, "VISUAL_TABLE", "Virulence — the four-factor table",
            "The printed table (factor | description): capsular polysaccharide, Protein A, IgA protease, M protein.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'The virulence factors — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "virulence-mechanisms",
        "textbookVisualCount": 3,
        "accountedFor": 3,
        "sourceReproductions": 0,
        "kypRedraws": 2,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: pure vector page (no rasters). The two printed diagrams are redrawn as ONE original KYP registry visual (virulence-resistance-map — the evasion arsenal panel and the resistance geometry panel); the four-factor table is reproduced verbatim as the note's table block. The source's own typo ('Completment-mediated') and the scrambled wall label are documented, not reproduced. No FA mnemonics printed on this page.",
}

(ROOT / "content/usmle/manifests/virulence-mechanisms.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/virulence-mechanisms.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 5/39 -> 6/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "virulence-mechanisms":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: virulence-mechanisms -> complete, textbookVisuals rewritten (3 sv)")
        break
else:
    print("ERROR: virulence-mechanisms not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
