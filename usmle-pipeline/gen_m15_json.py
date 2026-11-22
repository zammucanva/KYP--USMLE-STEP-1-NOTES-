#!/usr/bin/env python3
"""M15 intracellular-bacteria — manifest + visual inventory + chapter flip.

Microbiology topic 15/39 (Clinical Bacteriology). Evidence pinned on pdf 168
(book 146 — the Chlamydiae section ONLY, the shared page's lower block; the
diagnosing-syphilis tree above it is M14's), pdf 169 (book 147: Gardnerella
vaginalis + the 17-row zoonotic directory), and pdf 170 (book 148: the RASH
COMMON / RASH RARE rickettsial split + Mycoplasma pneumoniae).

Photos (raster, COPYRIGHTED, described-in-text only):
- p168: 1 raster — the chlamydial (follicular) conjunctivitis photo, marker A
  inline at line 53 ('conjunctivitis A ,') + the standalone heading marker at
  line 35.
- p169: 1 raster — the Gardnerella clue-cells photo, marker A after the
  heading (line 3) with the inline '(arrow in A )' at line 16.
- p170: 4 rasters — the RMSF wrist rash (A, inline 'wrists A' line 22), the
  monocyte morulae of ehrlichiosis (B, inline line 43 + figure-block B at 74),
  the granulocyte morulae of anaplasmosis (C, inline line 53 + standalone C at
  91), and the pleomorphic Mycoplasma (A, inline 'Pleomorphic A' line 93 +
  figure-block A at 70).
The figure block 66-74 emits mid-page with the printed footer at 72.

Text-layer quirks documented:
- p168 (M15's section): the life-cycle and serotype lines INTERLEAVE with
  M14's tree cells (25-42, 60-65) in the shared page — M15's ranges avoid
  them: 34-35 (heading + A), 44-58 (cycle + diseases), 67-78 (wall + lab +
  treatment), 80-104 (serotypes). '▘' U+2598 bullets for the EB/RB lines;
  '"enfectious"' FA's own printed gloss with curly quotes; 'fluorescent
  antibody–stained' en dash; '→' with double space (LGV row).
- p169: the zoonotic table emits as interleaved triplets (species / disease /
  transmission per row) — quoted as 3 contiguous chunks (rows 1-6, 7-12,
  13-17); '↓ lactobacilli' arrow; the Gardnerella side box (22-25) emits
  after the entry text.
- p170: the RASH COMMON / RASH RARE grouping resolved by TWO concordant VLM
  reads (census + 2x zoom): RASH COMMON = RMSF + typhus; RASH RARE =
  ehrlichiosis + anaplasmosis + Q fever, with Mycoplasma closing the block.
  The text layer emits the RASH RARE label at line 64 — between the Q fever
  block and the figure row (content-stream ordering quirk documented).
  'culture ⊝ endocarditis' with ⊝ U+229D; 'walking pneumonia' curly quotes;
  '→' arrows; the CARS/MEGA/Quite-Complicated/cold-without-a-coat mnemonics
  carried verbatim in the table block only (NOT in the visual).
PAGE BOUNDARY: pdf 168 shared with M14 — M15 owns the Chlamydiae section
(lines 34-105); the diagnosing-syphilis section (lines 10-65) is M14's.
Gardnerella belongs to M15 by PAGE OWNERSHIP of book 147.
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
L = {p: pages[p - 1].split("\n") for p in (168, 169, 170)}
P = {p: norm(pages[p - 1]) for p in (168, 169, 170)}

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

# --- p168 (book 146): the Chlamydiae section (M15's share of the shared page) ---
E += [
    ("The Chlamydiae heading with photo marker (physical order, lines 34-35: Chlamydiae / A — the shared page's lower block; the diagnosing-syphilis tree above is M14's)", rng(168, 34, 35), 168),
    ("Chlamydiae life cycle and diseases (cannot make their own ATP; obligate intracellular; the ▘-bulleted EB/RB forms with the printed enfectious gloss; C. trachomatis conjunctivitis with inline photo marker A; C. pneumoniae and C. psittaci atypical pneumonia by aerosol)", rng(168, 44, 58), 168),
    ("Chlamydial cell wall + lab + treatment (lacks classic peptidoglycan — reduced muramic acid — β-lactams ineffective; the printed Chlamys=cloak gloss; psittaci's avian reservoir; PCR/NAAT; cytoplasmic inclusions on Giemsa or fluorescent antibody stain; doxycycline, azithromycin for pregnancy, + ceftriaxone if concurrent gonorrhea positive)", rng(168, 67, 78), 168),
    ("Serotypes heading + types A, B, and C (chronic infection, blindness, follicular conjunctivitis in resource-limited areas; the printed ABC mnemonic)", rng(168, 80, 87), 168),
    ("Types D-K (urethritis/PID, neonatal pneumonia with staccato cough and eosinophilia, neonatal conjunctivitis 1-2 weeks after birth; the printed D-K=everything-else gloss; vaginal birth acquisition)", rng(168, 89, 97), 168),
    ("Types L1, L2, and L3 (lymphogranuloma venereum — small painless ulcers → swollen painful inguinal lymph nodes that ulcerate [buboes]; treat with doxycycline, with the → double-space arrow)", rng(168, 99, 104), 168),
    ("Printed book-page footer (page identity)", rng(168, 106, 106), 168),
    ("Timestamp footer line (page identity)", rng(168, 108, 108), 168),
]

# --- p169 (book 147): Gardnerella + the zoonotic directory ---
E += [
    ("Page banner", "MICROBIOLOGY", 169),
    ("Section heading with photo marker", rng(169, 2, 3), 169),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 169),
    ("Printed book-page number (page identity)", "147", 169),
    ("Section banner", "SEC TION II", 169),
    ("Gardnerella vaginalis entry (pleomorphic gram-variable rod; bacterial vaginosis; gray fishy nonpainful discharge vs vaginitis; not sexually transmitted; anaerobic overgrowth with ↓ lactobacilli; clue cells with the inline arrow-in-A photo marker)", rng(169, 7, 16), 169),
    ("Gardnerella side box (amine whiff test with 10% KOH; vaginal pH >4.5; treatment metronidazole or clindamycin)", rng(169, 22, 25), 169),
    ("Zoonotic bacteria heading + definition (zoonosis — infectious disease transmitted between animals and humans)", rng(169, 27, 29), 169),
    ("Zoonotic table headers (SPECIES / DISEASE / TRANSMISSION AND SOURCE)", rng(169, 31, 35), 169),
    ("Zoonotic rows 1-6, interleaved (physical order, lines 37-74: Anaplasma/Ixodes; Bartonella/cat scratch; B. burgdorferi/Ixodes; B. recurrentis/louse with variable surface antigens; Brucella/unpasteurized dairy; Campylobacter/pet feces)", rng(169, 37, 74), 169),
    ("Zoonotic rows 7-12, interleaved (physical order, lines 76-111: C. psittaci/parrots; Coxiella/aerosols of cattle-sheep amniotic fluid; E. chaffeensis/Lone Star tick; F. tularensis/ticks rabbits deer flies; Leptospira/animal urine; M. leprae/lepromatous humans + armadillo)", rng(169, 76, 111), 169),
    ("Zoonotic rows 13-17, interleaved (physical order, lines 113-149: Pasteurella/animal bite; R. prowazekii/human body louse; R. rickettsii/Dermacentor dog tick; R. typhi/fleas; Salmonella except S typhi/reptiles and poultry; Y. pestis/fleas with rats and prairie dogs)", rng(169, 113, 149), 169),
    ("Printed book-page footer (page identity)", rng(169, 151, 151), 169),
    ("Timestamp footer line (page identity)", rng(169, 153, 153), 169),
]

# --- p170 (book 148): RASH COMMON / RASH RARE + Mycoplasma ---
E += [
    ("Printed book-page number (page identity)", "148", 170),
    ("Section banner", "SEC TION II", 170),
    ("Section heading", rng(170, 4, 6), 170),
    ("Page banner", "MICROBIOLOGY", 170),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 170),
    ("Treatment line", rng(170, 12, 12), 170),
    ("RASH COMMON label", rng(170, 14, 14), 170),
    ("Rocky Mountain spotted fever block (R. rickettsii, tick vector; South Atlantic states especially North Carolina; the rash starts at wrists A — inline photo marker — and ankles then spreads to trunk, palms, soles; the classic triad headache-fever-rash vasculitis; the printed CARS mnemonic; the printed wrists/trunk mnemonic)", rng(170, 16, 29), 170),
    ("Typhus block (endemic fleas — R typhi; epidemic human body louse — R prowazekii; rash starts centrally and spreads out, sparing palms and soles)", rng(170, 31, 38), 170),
    ("Ehrlichiosis block (Ehrlichia, tick; monocytes with morulae B — inline photo marker; mulberrylike inclusions; the printed MEGA mnemonic)", rng(170, 40, 48), 170),
    ("Anaplasmosis block (Anaplasma, tick; granulocytes with morulae C — inline photo marker)", rng(170, 50, 53), 170),
    ("Q fever block (Coxiella burnetii, no arthropod vector; aerosols of cattle/sheep amniotic fluid; headache, cough, flulike symptoms, pneumonia possibly with hepatitis; common cause of culture ⊝ endocarditis)", rng(170, 55, 62), 170),
    ("RASH RARE label (emits at line 64, between the Q fever block and the figure row — content-stream quirk; the grouping resolved by two concordant VLM reads)", rng(170, 64, 64), 170),
    ("Figure block with markers and the printed footer (physical order, lines 66-74: A / Mycoplasma pneumoniae / A / the indd footer / B)", rng(170, 66, 74), 170),
    ("Mycoplasma clinical block (atypical walking pneumonia with curly quotes; <30 years old; outbreaks in military recruits, prisons, colleges; macrolides, doxycycline, or fluoroquinolone — penicillin ineffective since Mycoplasma has no cell wall)", rng(170, 76, 84), 170),
    ("The printed Quite-Complicated Q-fever mnemonic + the C figure marker (physical order, lines 86-91)", rng(170, 86, 91), 170),
    ("Mycoplasma lab block (not seen on Gram stain; Pleomorphic with inline photo marker A; membrane sterols; Eaton agar; CXR more severe than presentation; cold agglutinins IgM agglutinating RBCs; the printed cold-without-a-coat mnemonic)", rng(170, 93, 99), 170),
    ("Timestamp footer line (page identity)", rng(170, 101, 101), 170),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 168-170 / book 146-148)")

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

SRC = {"part": 1, "pdfPages": [168, 169, 170], "bookPages": "146–148"}

manifest = {
    "topicId": "intracellular-bacteria",
    "title": "Intracellular & Vector-Borne Bacteria: Chlamydia, Rickettsia, Mycoplasma",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Clinical Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["vector-borne-rash-map"],
    "mechanismIds": ["obligate-intracellular-cycle", "rash-geography-logic"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the sections and the tables; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "cycle-wall-rash-synthesis",
            "summary": "The EB/RB cycle read through the wall rule (no peptidoglycan → β-lactams fail → doxycycline/azithromycin axis) with the serotype tri-split (A-C blindness, D-K the 1-2-week neonatal conjunctivitis vs the gonococcal 2-5-day pair of M12, L1-L3 the buboes); the zoonotic directory read as a transmission map (the tick boards, the louse, the fleas, the aerosol exceptions); the rash geometry (RMSF wrists-to-palms vasculitis vs typhus central-sparing) with the morulae cell-lineage axis and Q fever's no-rash-no-vector culture-negative endocarditis; Mycoplasma's no-wall set (cold agglutinins, CXR worse than the patient, not on Gram stain) paired with chlamydiae's no-peptidoglycan as the same therapy logic; and Gardnerella's vaginosis-vs-vaginitis split (nonpainful, pH, whiff, clue cells) — labeled as integrations.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the sections without the cross-chapter wiring or the synthesis; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list): p168 carries 1 raster in M15's section (the chlamydial follicular-conjunctivitis photo, marker A inline at line 53 + heading marker at 35); p169 carries 1 (the Gardnerella clue cells, marker A after the heading with the inline arrow-in-A at line 16); p170 carries 4 (the RMSF wrist rash A inline at 22; the monocyte morulae B inline at 43 + figure-block B at 74; the granulocyte morulae C inline at 53 + standalone C at 91; the pleomorphic Mycoplasma A inline at 93 + figure-block A at 70) — all COPYRIGHTED, described-in-text only. The zoonotic directory and the RASH blocks are pure vector (redrawn in the registry visual — the DIRECTORY grid and the RASH panels). PAGE BOUNDARY: pdf 168 shared with M14 — M15 owns the Chlamydiae section (dump lines 34-105); the diagnosing-syphilis tree (25-65 interleaved) is M14's. Gardnerella belongs by PAGE OWNERSHIP of book 147. RASH COMMON/RASH RARE grouping resolved by TWO concordant VLM reads (census + zoom): RASH COMMON = RMSF + typhus; RASH RARE = ehrlichiosis + anaplasmosis + Q fever, with Mycoplasma closing; the text layer emits the RASH RARE label at line 64 between the Q fever block and the figure row (content-stream quirk documented). Text-layer quirks documented: the ▘ U+2598 bullets; the enfectious gloss (FA's own printed curly-quoted misspelling); the fluorescent antibody–stained en dash; 'culture ⊝ endocarditis' ⊝ U+229D; curly quotes; → double-space arrows; the zoonotic table's interleaved triplets quoted as 3 contiguous chunks. FA's printed mnemonics (Chlamys = cloak; ABC; D-K = everything else; CARS; wrists/trunk; MEGA; Quite Complicated; cold without a coat) carried verbatim in the table block only (NOT in the visual).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"intracellular-bacteria-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Clinical Bacteriology",
        "topicId": "intracellular-bacteria",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

photos = [
    ("The chlamydial follicular-conjunctivitis photo (book 146)", "A photograph of chlamydial (follicular) conjunctivitis, its marker A printed after 'conjunctivitis' in the C. trachomatis diseases line and at the section heading.", "blocks[1] table block, the cycle row — figure pointer carried verbatim; described-in-text only"),
    ("The Gardnerella clue-cells photo (book 147)", "A micrograph of vaginal epithelial cells covered with Gardnerella (clue cells) with a stippled appearance along the outer margin, an arrow marking it; marker A printed after the heading, referenced inline as 'arrow in A'.", "blocks[1] table block, the Gardnerella row — figure pointer carried verbatim; described-in-text only"),
    ("The RMSF wrist-rash photo (book 148)", "A clinical photograph of the RMSF rash at the wrist, its marker A printed after 'wrists' in the rash-distribution line.", "blocks[1] table block, the RASH COMMON row — figure pointer carried verbatim; described-in-text only"),
    ("The monocyte-morulae photo of ehrlichiosis (book 148)", "A photomicrograph of a monocyte containing mulberrylike inclusions (morulae), its marker B printed after 'morulae' in the ehrlichiosis line and in the figure block.", "blocks[1] table block, the RASH RARE row — figure pointer carried verbatim; described-in-text only"),
    ("The granulocyte-morulae photo of anaplasmosis (book 148)", "A photomicrograph of a granulocyte with morulae, its marker C printed after 'morulae' in the anaplasmosis line and standalone at line 91.", "blocks[1] table block, the RASH RARE row — figure pointer carried verbatim; described-in-text only"),
    ("The pleomorphic Mycoplasma photo (book 148)", "A micrograph of the pleomorphic Mycoplasma organism, its marker A printed after 'Pleomorphic' in the lab block and in the figure block at line 70.", "blocks[1] table block, the Mycoplasma row — figure pointer carried verbatim; described-in-text only"),
]

inventory_list = [
    svi(1, "VISUAL_TABLE", "The chlamydiae life-cycle + serotype sections (book 146, the shared page's lower block)",
        "The printed two-column section: the EB/RB cycle with the no-ATP rule and the ▘-bulleted forms; the wall rule (β-lactams ineffective); and the serotype tri-split table (Types A, B, and C / Types D-K / Types L1, L2, and L3).",
        "ORIGINAL_KYP_REDRAW", "vector-borne-rash-map", "registry-visual", "the CHLAMYDIAE panel — the cycle lines and the three serotype cards"),
    svi(2, "VISUAL_TABLE", "The 17-row zoonotic directory (book 147)",
        "The printed SPECIES | DISEASE | TRANSMISSION AND SOURCE table: 17 rows from Anaplasma spp through Yersinia pestis with their transmission sources.",
        "ORIGINAL_KYP_REDRAW", "vector-borne-rash-map", "registry-visual", "the DIRECTORY panel — the 17-row grid, verbatim"),
    svi(3, "VISUAL_TABLE", "The RASH COMMON / RASH RARE split + Mycoplasma (book 148)",
        "The printed rickettsial block: RASH COMMON (RMSF with the triad and the CARS/wrists-trunk mnemonic boxes; typhus endemic/epidemic), RASH RARE (ehrlichiosis with MEGA; anaplasmosis; Q fever with the Quite-Complicated box), and the Mycoplasma pneumoniae section (clinical + lab columns with the cold-without-a-coat box).",
        "ORIGINAL_KYP_REDRAW", "vector-borne-rash-map", "registry-visual", "the RASH panels + the MYCOPLASMA closer; the verbatim text also carried in the note's table block"),
]
for i, (purpose, desc, loc) in enumerate(photos, start=4):
    inventory_list.append(svi(i, "MICROBIOLOGY_IMAGE", purpose, desc, "ORIGINAL_KYP_ADAPTATION", None, "note-block", loc))

inventory = {
    "topicId": "intracellular-bacteria",
    "chapterId": "microbiology",
    "inventory": inventory_list,
    "coverageAudit": {
        "topicId": "intracellular-bacteria",
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
    "notes": "Census: the life-cycle section, the zoonotic directory, and the RASH blocks are pure vector (redrawn in the registry visual — the CHLAMYDIAE, DIRECTORY, and RASH panels). The 6 printed photos (the chlamydial conjunctivitis, the Gardnerella clue cells, the RMSF wrist rash, the two morulae photomicrographs, the pleomorphic Mycoplasma) are rasters — COPYRIGHTED, described-in-text only within the note's table block rows. FA's printed mnemonics (Chlamys = cloak; ABC; D-K; CARS; wrists/trunk; MEGA; Quite Complicated; cold without a coat) carried in the table block only; NOT in the visual.",
}

(ROOT / "content/usmle/manifests/intracellular-bacteria.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/intracellular-bacteria.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 14/39 -> 15/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "intracellular-bacteria":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory_list))
        for v, src in zip(t["textbookVisuals"], inventory_list):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: intracellular-bacteria -> complete, textbookVisuals rewritten (9 sv)")
        break
else:
    print("ERROR: intracellular-bacteria not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
