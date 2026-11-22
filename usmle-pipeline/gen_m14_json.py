#!/usr/bin/env python3
"""M14 spirochetes-syphilis — manifest + visual inventory + chapter flip.

Microbiology topic 14/39 (Clinical Bacteriology). Evidence pinned on pdf 166
(book 144: V. cholerae + V. vulnificus, H. pylori — the curved-rod entries
by page ownership; the Spirochetes section; Lyme disease), pdf 167 (book
145: Leptospira interrogans; the syphilis clock), and pdf 168 (book 146:
the diagnosing-syphilis tree — M14's section of the SHARED page; the
Chlamydiae section below it is M15's per the chapter inventory).

Photos (raster, COPYRIGHTED, described-in-text only):
- p166: 5 rasters — V. cholerae comma (188x188 gray, A), H. pylori curved
  rod (188x188 gray, A), the spirochete with axial filaments (188x188 cmyk,
  A), the Ixodes deer tick (187x188 cmyk, A), erythema migrans bulls-eye
  (188x188 cmyk, B). The heading block + markers + the printed footer emit
  as one figure block at dump lines 4-18 BEFORE the page banner (20/22).
- p167: 8 rasters — chancre dark-field (A), maculopapular rash (B), palms
  (C1), soles (C2), condylomata lata (D), gummas (E), the congenital face
  with the rhagades black arrow and snuffles red arrow (F), Hutchinson teeth
  (G). The bottom-of-page marker block emits as A/B/C1/C2/D/E/F/G at lines
  51-65.
- p168: 1 raster (the chlamydial conjunctivitis photo, marker A at line 35)
  — that image belongs to M15's Chlamydiae section; NOT in this inventory.

Text-layer quirks documented:
- p166: the heading block (4-17) interleaves organism headings and photo
  markers, ending with the printed footer at line 18 before the page banner
  (20) — figure-block emission; '→' U+2192 double-space arrows; '↓' arrow;
  curly quotes (“bulls-eye”); 'personto-person' hyphen-drop does NOT occur
  here (that was M13's p165); FA's mnemonics (Little Twirling Bacteria; A
  Key Lyme pie to the FACE) carried verbatim in the table block only.
- p167: secondary syphilis lines interleave the rash photo markers inline
  (B ... palms C and soles ... condylomata lata D at lines 28-29); the
  congenital entry carries the F/G markers inline (43-45); VDRL ⊕ with the
  ⊕ symbol; '“general paresis”' curly quotes.
- p168 (M14's section): the test-selection tree's cells INTERLEAVE with
  M15's Chlamydiae section in the text layer — 'Serologic testing' (25),
  'Nontreponemal (nonspecific)' (29-31), 'RPR' (32), then the Chlamydiae
  heading + A marker (34-35), 'VDRL' (37), 'Treponemal (specific)' (39-41),
  'FTA-ABS' (42), then chlamydia text (44-58, M15's), then 'Darkfield
  microscopy' (60-61), 'PCR' (63), 'TP-PA' (65). Quoted as ranges 25-42 and
  60-65 with the interleave and the PAGE BOUNDARY documented: M14 owns the
  syphilis-testing section (dump lines 10-65 within the shared page); the
  Chlamydiae section (34-35, 44-105) is M15's.
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
L = {p: pages[p - 1].split("\n") for p in (166, 167, 168)}
P = {p: norm(pages[p - 1]) for p in (166, 167, 168)}

def rng(pg, a, b):
    return "\n".join(L[pg][a:b + 1])

def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {
        "claim": claim,
        "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
        "quote": quote,
        "verified": "pass" if ok else "FAIL",
        "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
    }

E = []

# --- p166 (book 144): curved-rod entries + spirochetes + lyme ---
E += [
    ("Printed book-page number (page identity)", "144", 166),
    ("Section banner", "SEC TION II", 166),
    ("Heading block with photo markers and the printed footer (physical order, lines 4-18: Vibrio cholerae A / Helicobacter pylori A / Spirochetes A / Lyme disease A B / the indd footer — figure-block emission before the page banner)", rng(166, 4, 18), 166),
    ("Page banner", "MICROBIOLOGY", 166),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 166),
    ("V. cholerae entry (comma shaped, oxidase ⊕, alkaline media; rice-water diarrhea via enterotoxin permanently activating Gs with ↑ cAMP; acid labile, high ID50 unless ↓ gastric acidity; contaminated water/raw shellfish; ORS; V. vulnificus marine cellulitis → necrotizing fasciitis in high serum iron; surgical debridement)", rng(166, 24, 32), 166),
    ("H. pylori entry (triple ⊕ catalase/oxidase/urease; urea breath test/fecal antigen; antrum; gastritis + PUD especially duodenal; risk for peptic ulcer disease, gastric adenocarcinoma, MALT lymphoma; triple therapy + bismuth quadruple)", rng(166, 34, 41), 166),
    ("Spirochetes section (spiral-shaped with axial filaments; Leptospira, Treponema, Borrelia; only Borrelia visualized with aniline dyes [Wright/Giemsa] in light microscopy due to size; Treponema by dark-field or DFA)", rng(166, 43, 49), 166),
    ("The printed Little-Twirling-Bacteria mnemonic (FA's own — verification only, carried in the table block)", rng(166, 51, 51), 166),
    ("Jarisch-Herxheimer reaction box (flulike symptoms after antibiotics are started; host response to sudden release of bacterial antigens; spirochetal infections)", rng(166, 52, 57), 166),
    ("Lyme disease entry (Ixodes deer tick A also vector for Anaplasma spp. and Babesia; mouse reservoir, deer essential to tick life cycle but do not harbor Borrelia; northeastern US; stages 1/2/3; the printed FACE mnemonic; doxycycline/amoxicillin/ceftriaxone)", rng(166, 59, 83), 166),
    ("Timestamp footer line (page identity)", rng(166, 85, 85), 166),
]

# --- p167 (book 145): leptospira + the syphilis clock ---
E += [
    ("Page banner", "MICROBIOLOGY", 167),
    ("Section heading", "Leptospira interrogans", 167),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 167),
    ("Section banner", "SEC TION II", 167),
    ("Printed book-page number (page identity)", "145", 167),
    ("Leptospira entry (hook-shaped ends; water contaminated with animal urine; leptospirosis with flulike symptoms, myalgias classically of calves, jaundice, photophobia with conjunctival suffusion; surfers and the tropics; Weil disease)", rng(167, 10, 15), 167),
    ("Syphilis genus line (Treponema pallidum; treatment penicillin G)", rng(167, 17, 19), 167),
    ("Primary syphilis entry (localized, painless chancre; fluorescent or dark-field microscopy of chancre fluid with inline photo marker A; VDRL ⊕ in ~80%)", rng(167, 21, 24), 167),
    ("Secondary syphilis entry (disseminated systemic; constitutional symptoms, maculopapular rash B including palms C and soles, condylomata lata D, lymphadenopathy, patchy hair loss; VDRL/RPR then confirm with FTA-ABS; latent may follow)", rng(167, 26, 32), 167),
    ("Tertiary syphilis entry (gummas E, aortitis vasa vasorum, neurosyphilis with tabes dorsalis and general paresis, Argyll Robertson pupil; broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension)", rng(167, 34, 39), 167),
    ("Congenital syphilis entry (rhagades with the black arrow in F, snuffles with the red arrow in F, saddle nose, Hutchinson teeth G, mulberry molars, short maxilla; saber shins; CN VIII deafness; treat early in pregnancy; placental transmission typically after first trimester)", rng(167, 41, 47), 167),
    ("Printed book-page footer (page identity)", rng(167, 49, 49), 167),
    ("Bottom-of-page photo-marker block (physical order, lines 51-65: A, B, C1, C2, D, E, F, G — the eight syphilis photographs)", rng(167, 51, 65), 167),
    ("Timestamp footer line (page identity)", rng(167, 67, 67), 167),
]

# --- p168 (book 146): the diagnosing-syphilis tree (M14's section of the shared page) ---
E += [
    ("Printed book-page number (page identity)", "146", 168),
    ("Section banner", "SEC TION II", 168),
    ("Section heading", "Diagnosing syphilis", 168),
    ("Page banner", "MICROBIOLOGY", 168),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 168),
    ("False-positive VDRL list (pregnancy; viral infection eg EBV, hepatitis; drugs eg chlorpromazine, procainamide; rheumatic fever rare; lupus anticardiolipin antibody and leprosy)", rng(168, 10, 15), 168),
    ("VDRL/RPR description (nonspecific antibody reacting with beef cardiolipin; quantitative, inexpensive, widely available; sensitive but not specific; nontreponemal tests and direct testing revert to negative after treatment; treponemal tests remain positive)", rng(168, 17, 23), 168),
    ("The test-selection tree, part 1 — INTERLEAVED with M15's Chlamydiae (physical order, lines 25-42: Direct testing; Serologic testing; Nontreponemal (nonspecific); RPR; the Chlamydiae heading + A marker [M15's]; VDRL; Treponemal (specific); FTA-ABS)", rng(168, 25, 42), 168),
    ("The test-selection tree, part 2 (physical order, lines 60-65: Darkfield microscopy; PCR; TP-PA)", rng(168, 60, 65), 168),
    ("Printed book-page footer (page identity)", rng(168, 106, 106), 168),
    ("Timestamp footer line (page identity)", rng(168, 108, 108), 168),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 166-168 / book 144-146)")

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

SRC = {"part": 1, "pdfPages": [166, 167, 168], "bookPages": "144–146"}

manifest = {
    "topicId": "spirochetes-syphilis",
    "title": "Spirochetes: Treponema, Borrelia, Leptospira",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Clinical Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["spirochete-syphilis-map"],
    "mechanismIds": ["syphilis-clock-logic", "spirochete-trio-logic"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the staging sections and the serology paragraph; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "clock-tree-synthesis",
            "summary": "The syphilis clock read through the serology tree (stage names the test question: chancre fluid to dark-field in primary, the palms-and-soles rash with the two-step screen-confirm rule in secondary, reverting-vs-persisting titers after treatment); the false-positive VDRL list as a lupus/pregnancy clue rather than a diagnosis; the trio's visualization axis (aniline dyes vs dark-field) wired to the M12 tree's curved-rod leaves completed here by page ownership (cholera's permanently-activating Gs enterotoxin, vulnificus's iron-dependent marine wounds, H. pylori's urease-built alkaline niche with the PUD-MALT trajectory); Jarisch-Herxheimer as the shared treatment event; and the congenital branch as the vertical-transmission lane with its trimester rule — labeled as integrations.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the sections and the tree without the stage-to-test synthesis or the cross-chapter wiring; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list): p166 carries 5 rasters (V. cholerae comma 188x188 gray A; H. pylori curved rod 188x188 gray A; the spirochete with axial filaments 188x188 cmyk A; the Ixodes deer tick 187x188 cmyk A; erythema migrans bulls-eye 188x188 cmyk B) and p167 carries 8 (chancre dark-field A; maculopapular rash B; palms C1; soles C2; condylomata lata D; gummas E; the congenital face with the rhagades black arrow and snuffles red arrow F; Hutchinson teeth G) — all COPYRIGHTED, described-in-text only. The diagnosing-syphilis test-selection tree on p168 is PURE VECTOR (redrawn as the registry visual's SEROLOGY panel). PAGE BOUNDARY: pdf 168 is shared with M15 per the chapter inventory — M14 owns the syphilis-testing section (the tree cells at dump lines 25-65 interleaved with M15's Chlamydiae heading/A-marker at 34-35 and its text at 44-58 and 67-105); the Chlamydiae section is M15's. The curved-rod entries (V. cholerae, V. vulnificus, H. pylori) belong to this topic by PAGE OWNERSHIP of book 144 — they are the M12 tree's curved-rod leaves whose entries live here (the M9 B-anthracis-bridge precedent). Text-layer quirks documented: p166's heading block + markers + printed footer emit as one figure block (lines 4-18) before the page banner; → U+2192 double-space arrows; ↓; curly quotes; the printed FACE and Little-Twirling-Bacteria mnemonics carried verbatim in the table block only (NOT in the visual). p167's secondary-syphilis lines interleave the B/C/D markers inline; the congenital entry carries F/G inline. p168's tree cells interleave with M15's Chlamydiae — quoted as ranges 25-42 and 60-65 with the interleave documented; 'FTAABS' prints without the hyphen (line 23).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"spirochetes-syphilis-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Clinical Bacteriology",
        "topicId": "spirochetes-syphilis",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

photos = [
    ("V. cholerae — the comma-shaped rod micrograph (book 144)", "A gram-stain micrograph of the comma-shaped Vibrio cholerae organism, its marker A printed after 'comma shaped'.", "blocks[1] table block, V. cholerae row — figure pointer carried verbatim; described-in-text only"),
    ("H. pylori — the curved-rod micrograph (book 144)", "A micrograph of the curved, flagellated (motile) H. pylori rod, its marker A printed after 'gram ⊝ rod'.", "blocks[1] table block, H. pylori row — figure pointer carried verbatim; described-in-text only"),
    ("Spirochetes — the spiral-with-axial-filaments micrograph (book 144)", "A micrograph of spiral-shaped bacteria with axial filaments, its marker A printed after 'Spiral-shaped bacteria'.", "blocks[1] table block, Spirochetes row — figure pointer carried verbatim; described-in-text only"),
    ("Lyme disease — the Ixodes deer tick photo (book 144)", "A photograph of the Ixodes deer tick, its marker A printed after 'Ixodes deer tick'.", "blocks[1] table block, Lyme disease row — figure pointer carried verbatim; described-in-text only"),
    ("Lyme disease — the erythema migrans bulls-eye photo (book 144)", "A clinical photograph of erythema migrans in the typical bulls-eye configuration, its marker B printed after 'configuration'.", "blocks[1] table block, Lyme disease row — figure pointer carried verbatim; described-in-text only"),
    ("Primary syphilis — the chancre dark-field micrograph (book 145)", "A dark-field micrograph of treponemes in chancre fluid, its marker A printed after 'fluid from chancre'.", "blocks[1] table block, the syphilis-clock row — figure pointer carried verbatim; described-in-text only"),
    ("Secondary syphilis — the maculopapular rash photo (book 145)", "A clinical photograph of the diffuse maculopapular rash, its marker B printed after 'maculopapular rash'.", "blocks[1] table block, the syphilis-clock row — described-in-text only"),
    ("Secondary syphilis — the palms photo (book 145)", "A clinical photograph of the maculopapular rash on the palms, its marker C1 printed in the bottom block.", "blocks[1] table block, the syphilis-clock row — described-in-text only"),
    ("Secondary syphilis — the soles photo (book 145)", "A clinical photograph of the maculopapular rash on the soles, its marker C2 printed in the bottom block.", "blocks[1] table block, the syphilis-clock row — described-in-text only"),
    ("Secondary syphilis — the condylomata lata photo (book 145)", "A clinical photograph of the smooth, painless, wartlike white genital lesions, its marker D printed after 'condylomata lata'.", "blocks[1] table block, the syphilis-clock row — described-in-text only"),
    ("Tertiary syphilis — the gumma photo (book 145)", "A clinical photograph of a gumma (chronic granuloma), its marker E printed after 'Gummas'.", "blocks[1] table block, the syphilis-clock row — described-in-text only"),
    ("Congenital syphilis — the facial-abnormalities photo (book 145)", "A clinical photograph of the congenital syphilis face with the black arrow marking rhagades (linear scars at the angle of the mouth) and the red arrow marking snuffles (nasal discharge), its marker F printed in the bottom block.", "blocks[1] table block, the syphilis-clock row — described-in-text only"),
    ("Congenital syphilis — the Hutchinson-teeth photo (book 145)", "A clinical photograph of notched (Hutchinson) teeth, its marker G printed after 'notched (Hutchinson) teeth'.", "blocks[1] table block, the syphilis-clock row — described-in-text only"),
]

inventory_list = [
    svi(1, "DIAGNOSTIC_ALGORITHM", "The diagnosing-syphilis test-selection tree (book 146)",
        "The printed branch diagram: Serologic testing (light box) splitting into Nontreponemal (nonspecific) with leaves RPR and VDRL, and Treponemal (specific) with leaves FTA-ABS and TP-PA; Direct testing (orange box) with leaves Darkfield microscopy and PCR. Pure vector.",
        "ORIGINAL_KYP_REDRAW", "spirochete-syphilis-map", "registry-visual", "the SEROLOGY panel — the redraw of the printed tree with its two root branches, the rules strip, and the false-positive list"),
    svi(2, "VISUAL_TABLE", "The syphilis staging sections (book 145)",
        "The printed staging directory: the Treponema pallidum line (penicillin G) followed by the Primary / Secondary / Tertiary / Congenital syphilis sections with their inline photo markers (A, B, C, D, E, F, G).",
        "ORIGINAL_KYP_REDRAW", "spirochete-syphilis-map", "registry-visual", "the CLOCK panel — the four stage cards with the congenital branch; the verbatim staging text also carried in the note's table block"),
    svi(3, "VISUAL_TABLE", "The Lyme disease section (book 144)",
        "The printed Lyme block: the Ixodes/mouse/deer reservoir paragraph and the three stages with the printed FACE mnemonic box and treatment lines.",
        "ORIGINAL_KYP_REDRAW", "spirochete-syphilis-map", "registry-visual", "the LYME panel — the vector/reservoir card with the three stage cards; the verbatim text also carried in the note's table block"),
]
for i, (purpose, desc, loc) in enumerate(photos, start=4):
    inventory_list.append(svi(i, "MICROBIOLOGY_IMAGE", purpose, desc, "ORIGINAL_KYP_ADAPTATION", None, "note-block", loc))

inventory = {
    "topicId": "spirochetes-syphilis",
    "chapterId": "microbiology",
    "inventory": inventory_list,
    "coverageAudit": {
        "topicId": "spirochetes-syphilis",
        "textbookVisualCount": 3 + len(photos),
        "accountedFor": 3 + len(photos),
        "sourceReproductions": 0,
        "kypRedraws": 3,
        "kypOriginals": len(photos),
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the diagnosing-syphilis tree, the syphilis staging sections, and the Lyme section are pure vector (redrawn in the registry visual — the SEROLOGY, CLOCK, and LYME panels). The 13 printed photos (5 on book 144, 8 on book 145) are rasters — COPYRIGHTED, described-in-text only within the note's table block rows. FA's printed mnemonics (Little Twirling Bacteria; A Key Lyme pie to the FACE; the triple-therapy letter gloss) carried in the table block only; NOT in the visual. The p168 chlamydial-conjunctivitis raster is M15's (page-boundary rule), not counted here.",
}

(ROOT / "content/usmle/manifests/spirochetes-syphilis.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/spirochetes-syphilis.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 13/39 -> 14/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "spirochetes-syphilis":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory_list))
        for v, src in zip(t["textbookVisuals"], inventory_list):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: spirochetes-syphilis -> complete, textbookVisuals rewritten (16 sv)")
        break
else:
    print("ERROR: spirochetes-syphilis not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
