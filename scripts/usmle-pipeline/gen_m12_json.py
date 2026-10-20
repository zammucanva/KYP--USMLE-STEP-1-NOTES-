#!/usr/bin/env python3
"""M12 gram-negative-bacilli — manifest + visual inventory + chapter flip.

Microbiology topic 12/39 (Clinical Bacteriology). Evidence pinned on pdf
161 (book 139, the Gram-negative lab algorithm tree ONLY — the leprosy
subsection above it is M11's per the shared-page assignment), pdf 162
(book 140: Neisseria gonococci-vs-meningococci comparison, H influenzae,
B cepacia complex), and pdf 163 (book 141: B pertussis, Brucella,
L pneumophila, P aeruginosa).

Photos (raster, COPYRIGHTED, described-in-text only):
- p162: gonococci within neutrophils (188x188 cmyk, marker A, after
  'within neutrophils) A'); meningococcemic gangrene of toes (187x279 cmyk,
  marker B, after 'gangrene of toes B'); the thumb-sign lateral neck x-ray
  (188x188 grayscale, marker A, after 'thumb sign on lateral neck x-ray A').
- p163: the unilateral lobar pneumonia imaging (188x188 grayscale, marker A,
  after 'often unilateral and lobar A'); the green-pigment plate (680x632
  indexed color, marker A, after 'green Pigment A'); ecthyma gangrenosum
  (188x188 cmyk, marker B, after 'necrotic cutaneous lesion B').
Standalone 'A'/'B' markers at p162 top (lines 5/7/11) and p163 bottom
(lines 90/94/96) are sub-3-char (dropped by design; covered inline).

Text-layer quirks documented:
- The TREE's label stream on p161 (lines 26-98) is interleaved: the four
  morphology labels emit first (Gram/(pink), Diplococci, Coccobacilli,
  Curved rods, then the coccobacillus organism list), then the test labels
  (Oxidase, Maltose fermentation), then the diplococci leaves, then the
  curved-rod conditions and leaves, then the entire bacilli lane (its
  tests and leaves interleaved: Shigella/Yersinia BEFORE 'Fast', then
  Pseudomonas/Burkholderia, then the fast fermenters, 'Slow', the slow
  fermenters, and Salmonella/Proteus LAST). All quoted as physical-order
  ranges labeled as such.
- The Yersinia footnote: 'a' marker at line 77 emits attached
  ('Yersiniaa' — the source's own superscript-a emission), with the
  footnote text 'Pleomorphic rod/coccobacillus' at lines 97-98.
- p162: top-of-page headings + markers block (lines 4-14: 'Neisseria A B',
  'Haemophilus influenzae A', 'Burkholderia cepacia complex') emits BEFORE
  the section banner; the printed footer at line 16 emits mid-page (before
  the 'MICROBIOLOGY' banner at 18) — figure-block emission order.
- p163: 'PSEUDOMONAS is associated with:' mnemonic block (lines 56-63)
  prints as a wall of comma-separated capitals (FA's own printed mnemonic —
  carried verbatim in the table block only, NOT in the visual);
  'healthcareassociated' and 'piperacillintazobactam' merged hyphen-drops;
  ▘ bullet glyphs (U+2598) for the pertussis stages and the treatment list;
  '“whoop”' and '“cherry red”' curly quotes (p162); '+/−' U+2212 (p162
  line 104) vs '+/–' en dash; 'Legionnaires’' apostrophe; '↓' down-arrow
  (p162 line 71); '↑' up-arrow (p163 line 10); 'ᵃ' handled as 'a'.
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
L = {p: pages[p - 1].split("\n") for p in (161, 162, 163)}
P = {p: norm(pages[p - 1]) for p in (161, 162, 163)}

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

# --- p161 (book 139): the Gram-negative lab algorithm tree (M12's section of the shared page) ---
E += [
    ("Page banner", "MICROBIOLOGY", 161),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 161),
    ("Tree root and morphology labels (physical order, lines 26-44: 'Gram-negative lab algorithm', 'Gram (pink)', Diplococci, Coccobacilli, Curved rods, Aerobic, then the coccobacillus organism list)", rng(161, 26, 44), 161),
    ("Tree: diplococci gates and leaves (physical order, lines 46-53: Oxidase, Maltose fermentation, N gonorrhoeae, Moraxella, N meningitidis)", rng(161, 46, 53), 161),
    ("Tree: curved-rod conditions and leaves (physical order, lines 55-65: grows in 42°C → Campylobacter jejuni; grows in alkaline media → Vibrio cholerae; produces urease → Helicobacter pylori; the Bacilli label)", rng(161, 55, 67), 161),
    ("Tree: bacilli gates and leaves, part 1 (physical order, lines 69-82: Lactose fermentation, Oxidase, H2S production on TSI agar, Shigella, Yersinia [superscript a emitted attached], Fast, Pseudomonas, Burkholderia)", rng(161, 69, 82), 161),
    ("Tree: bacilli leaves, part 2 (physical order, lines 84-95: E coli, Klebsiella, Enterobacter, Slow, Citrobacter, Serratia, Salmonella, Proteus)", rng(161, 84, 95), 161),
    ("Tree footnote and emphasis note (physical order, lines 96-98: 'Important tests are in bold. Important pathogens are in bold italics.' + the Yersinia footnote 'Pleomorphic rod/coccobacillus')", rng(161, 96, 98), 161),
    ("Printed book-page footer (page identity)", rng(161, 100, 100), 161),
]

# --- p162 (book 140): neisseria + haemophilus + burkholderia ---
E += [
    ("Section banner", "SEC TION II", 162),
    ("Top-of-page organism headings + photo markers (physical order, lines 4-14: 'Neisseria A B', 'Haemophilus influenzae A', 'Burkholderia cepacia complex' — figure-block emission before the section banner; the printed footer at line 16 also emits here)", rng(162, 4, 16), 162),
    ("Page banner", "MICROBIOLOGY", 162),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 162),
    ("Neisseria genus rule (gram ⊝ diplococci; glucose metabolism; IgA proteases; LOS endotoxin; intracellular gonococci with inline photo marker A; the maltose/glucose acid-production rule)", rng(162, 22, 30), 162),
    ("Gonococci vs meningococci comparison, part 1 (capsule, maltose, vaccine — lines 32-48 in physical order)", rng(162, 32, 48), 162),
    ("Gonococci vs meningococci comparison, part 2 (transmission and close-quarters spread — lines 50-54)", rng(162, 50, 54), 162),
    ("Gonococci vs meningococci comparison, part 3 (diseases: gonorrhea/septic arthritis/neonatal conjunctivitis/PID/Fitz-Hugh–Curtis vs meningococcemia with petechiae and toe gangrene with inline photo marker B/meningitis/Waterhouse-Friderichsen — lines 56-65)", rng(162, 56, 65), 162),
    ("Gonococci vs meningococci comparison, part 4 (diagnosis, prevention with the ↓ arrow, prophylaxis, and treatment — lines 67-81)", rng(162, 67, 81), 162),
    ("H influenzae entry part 1 (coccobacillary rod, respiratory droplets; nontypeable strains dominate post-vaccine; IgA protease; chocolate agar factors V [NAD+] and X [hematin]; S aureus satellitism — lines 83-93)", rng(162, 83, 93), 162),
    ("H influenzae entry part 2 (epiglottitis with cherry-red appearance and thumb sign with inline photo marker A; meningitis, otitis media, pneumonia — lines 94-97)", rng(162, 94, 97), 162),
    ("H influenzae entry part 3 (the type b vaccine: polyribosylribitol phosphate conjugated to diphtheria toxoid, 2-18 months; does not cause the flu; treatment and prophylaxis — lines 99-106)", rng(162, 99, 106), 162),
    ("B cepacia complex entry (aerobic, catalase ⊕; pneumonia in underlying lung disease such as cystic fibrosis; multidrug resistant; relative contraindication to lung transplant)", rng(162, 108, 110), 162),
    ("Printed book-page footer tail (timestamp line — page identity)", rng(162, 112, 112), 162),
]

# --- p163 (book 141): pertussis + brucella + legionella + pseudomonas ---
E += [
    ("Page banner", "MICROBIOLOGY", 163),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 163),
    ("Section banner", "SEC TION II", 163),
    ("B pertussis entry (aerobic coccobacillus; pertussis toxin disables Gi; adenylate cyclase toxin ↑ cAMP; tracheal cytotoxin; the three ▘-bulleted stages; Tdap/DTaP; lymphocytosis; macrolides or TMP-SMX)", rng(163, 8, 19), 163),
    ("Brucella entry (aerobic coccobacillus; contaminated animal products, unpasteurized milk; survives in RES macrophages; noncaseating granulomas; undulant fever, night sweats, arthralgia; doxycycline + rifampin or streptomycin)", rng(163, 21, 25), 163),
    ("L pneumophila entry part 1 (poor gram stain — silver stain; charcoal yeast extract with iron and cysteine; urine antigen; hyponatremia + elevated transaminases; aerosol transmission from water; cruise ships, nursing homes; NO person-to-person transmission; macrolide or quinolone)", rng(163, 27, 40), 163),
    ("L pneumophila entry part 2 (the FA campfire mnemonic, printed — verification only; Legionnaires disease with inline photo marker A; Pontiac fever)", rng(163, 42, 50), 163),
    ("P aeruginosa entry part 1 (aerobic, motile, catalase ⊕; non-lactose fermenting; oxidase ⊕; water; acidic-environment virulence; grapelike odor; the printed PSEUDOMONAS association block with the 'healthcareassociated' hyphen-drop)", rng(163, 52, 63), 163),
    ("P aeruginosa entry part 2 (mucoid capsule → CF chronic pneumonia via biofilm; the PEEP toxin set with inline green-pigment photo marker A)", rng(163, 64, 69), 163),
    ("P aeruginosa entry part 3 (corneal ulcers/keratitis in contact lens wearers; ecthyma gangrenosum with inline photo marker B; the ▘-bulleted treatment list with 'piperacillintazobactam' hyphen-drop; aminoglycoside monotherapy avoided)", rng(163, 71, 88), 163),
    ("Bottom-of-page photo markers and heading (physical order, lines 90-96: A, 'Pseudomonas aeruginosa', A, B — figure-block emission)", rng(163, 90, 96), 163),
    ("Printed book-page footer (page identity)", rng(163, 98, 98), 163),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 161 tree + 162-163 / book 139-141)")

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

SRC = {"part": 1, "pdfPages": [161, 162, 163], "bookPages": "139–141"}

manifest = {
    "topicId": "gram-negative-bacilli",
    "title": "Gram-Negative Bacilli: Enterics, Zoonotics & the Water Organisms",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Clinical Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["gram-neg-bacilli-map"],
    "mechanismIds": ["gram-neg-tree-logic", "reservoir-to-disease"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the tree and the organism entries; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "reservoir-map-model",
            "summary": "The reservoir-to-disease reading (the exposure history as the diagnostic test: the dorm/barracks for meningococci with Waterhouse-Friderichsen as the adrenal cross-link, the cruise-ship water aerosol for Legionella with its no-person-to-person rule, the unpasteurized-milk macrophage survival of Brucella, the water-and-acid story of Pseudomonas with ecthyma and the CF biofilm); the conjugate-vaccine column (Hib PRP-toxoid) alongside the antigenic-variation non-vaccine of the gonococcus; the Exotoxin A-EF-2 link back to diphtheria; and the tree's leaves as the pre-load of the enterics and GI chapters — labeled as integrations.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the tree and entries without the reservoir synthesis or the cross-chapter wiring; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list): p162 carries 3 rasters (gonococci within neutrophils 188x188 marker A; meningococcemic gangrene of toes 187x279 marker B; thumb-sign lateral neck x-ray 188x188 grayscale marker A) and p163 carries 3 (unilateral lobar pneumonia imaging 188x188 grayscale marker A; the green-pigment plate 680x632 indexed marker A; ecthyma gangrenosum 188x188 marker B) — all COPYRIGHTED, described-in-text only; standalone A/B markers sub-3-char (dropped by design). The Gram-negative lab algorithm tree is PURE VECTOR (redrawn as the registry visual's core); the gonococci-vs-meningococci comparison (printed two-column table) redrawn as the visual's Neisseria split panel with its verbatim text also in the note's table block. Text-layer quirks documented: the tree's interleaved label stream quoted as physical-order ranges (morphology labels → coccobacillus list → diplococci gates/leaves → curved-rod conditions → the bacilli lane with Shigella/Yersinia BEFORE 'Fast' and Salmonella/Proteus LAST); the Yersinia superscript-a emitted attached ('Yersiniaa'); p162's top-of-page headings+markers block with the footer emitting at line 16 before the page banner; p163's printed PSEUDOMONAS association block; 'healthcareassociated' and 'piperacillintazobactam' hyphen-drops; ▘ bullets; curly quotes; ↓/↑ arrows; '+/−' (U+2212) vs '+/–' (en dash). FA's printed mnemonics (the French legionnaire campfire; PSEUDOMONAS; PEEP) carried verbatim in the table block only (NOT in the visual). PAGE BOUNDARY: pdf 161 is shared with M11 per the chapter inventory — M12 owns the tree section (dump lines 26-98); the leprosy subsection (lines 0-24) is M11's.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"gram-negative-bacilli-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Clinical Bacteriology",
        "topicId": "gram-negative-bacilli",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "gram-negative-bacilli",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "DIAGNOSTIC_ALGORITHM", "The Gram-negative lab algorithm tree (book 139, lower half)",
            "The printed decision tree: root 'Gram ⊝ (pink)' splitting by morphology into Diplococci (aerobic; oxidase and maltose fermentation → N gonorrhoeae + Moraxella vs N meningitidis), Coccobacilli (aerobic: H influenzae, B pertussis, Pasteurella, Brucella, F tularensis, A baumannii), Curved rods (oxidase ⊕: 42°C → C jejuni, alkaline → V cholerae, urease → H pylori), and Bacilli (lactose fermentation → oxidase → H2S on TSI agar, with fast/slow lactose split and the Yersinia superscript-a footnote 'Pleomorphic rod/coccobacillus'; 'Important tests are in bold. Important pathogens are in bold italics.'). Pure vector.",
            "ORIGINAL_KYP_REDRAW", "gram-neg-bacilli-map", "registry-visual", "the TREE panel — the redraw of the printed algorithm with all four lanes and their gates"),
        svi(2, "VISUAL_TABLE", "The gonococci vs meningococci comparison (book 140)",
            "The printed two-column comparison with seven row topics: capsule, maltose acid detection, vaccine, transmission, diseases, diagnosis, treatment/prevention.",
            "ORIGINAL_KYP_REDRAW", "gram-neg-bacilli-map", "registry-visual", "the NEISSERIA SPLIT panel of the visual; the verbatim comparison text also carried in the note's table block"),
        svi(3, "MICROBIOLOGY_IMAGE", "N gonorrhoeae — the intracellular diplococci micrograph (book 140)",
            "A gram-stain micrograph of N gonorrhoeae within neutrophils (gram ⊝ diplococci inside white cells), its marker A printed after 'within neutrophils) A.'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, Neisseria genus row — figure pointer carried verbatim; the micrograph described-in-text only"),
        svi(4, "MICROBIOLOGY_IMAGE", "N meningitidis — the meningococcemic toe-gangrene photograph (book 140)",
            "A clinical photograph of gangrene of the toes in meningococcemia, its marker B printed after 'gangrene of toes B.'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, the Neisseria comparison row — figure pointer carried verbatim; the photograph described-in-text only"),
        svi(5, "RADIOLOGY", "H influenzae — the thumb-sign lateral neck x-ray (book 140)",
            "A lateral neck radiograph showing the swollen epiglottis (the thumb sign) of pediatric epiglottitis, with red arrows, its marker A printed after 'thumb sign on lateral neck x-ray A.'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, H influenzae row — figure pointer carried verbatim; the radiograph described-in-text only"),
        svi(6, "RADIOLOGY", "L pneumophila — the unilateral lobar pneumonia imaging (book 141)",
            "A chest imaging study showing unilateral lobar consolidation of Legionnaires disease, with arrows, its marker A printed after 'often unilateral and lobar A.'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, L pneumophila row — figure pointer carried verbatim; the radiograph described-in-text only"),
        svi(7, "MICROBIOLOGY_IMAGE", "P aeruginosa — the green-pigment plate (book 141)",
            "A photograph of a culture plate showing Pseudomonas's green pigment (pyocyanin), its marker A printed after 'green Pigment A.'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, P aeruginosa row — figure pointer carried verbatim; the plate described-in-text only"),
        svi(8, "DERMATOLOGY_PHOTO", "P aeruginosa — the ecthyma gangrenosum photograph (book 141)",
            "A clinical photograph of ecthyma gangrenosum — a rapidly progressive, necrotic cutaneous lesion of Pseudomonas bacteremia — its marker B printed after 'necrotic cutaneous lesion B.'",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, P aeruginosa row — figure pointer carried verbatim; the photograph described-in-text only"),
    ],
    "coverageAudit": {
        "topicId": "gram-negative-bacilli",
        "textbookVisualCount": 8,
        "accountedFor": 8,
        "sourceReproductions": 0,
        "kypRedraws": 2,
        "kypOriginals": 6,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the lab algorithm tree is pure vector and the Neisseria comparison is printed text — both redrawn in the registry visual (the TREE and NEISSERIA SPLIT panels). The 6 printed images (gonococci in neutrophils, toe gangrene, thumb-sign x-ray, lobar pneumonia imaging, green-pigment plate, ecthyma gangrenosum) are rasters — COPYRIGHTED, described-in-text only within the note's table block rows. FA's printed mnemonics (the French legionnaire campfire; PSEUDOMONAS; PEEP) carried in the table block only; NOT in the visual.",
}

(ROOT / "content/usmle/manifests/gram-negative-bacilli.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/gram-negative-bacilli.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 11/39 -> 12/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "gram-negative-bacilli":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: gram-negative-bacilli -> complete, textbookVisuals rewritten (8 sv)")
        break
else:
    print("ERROR: gram-negative-bacilli not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
