#!/usr/bin/env python3
"""M13 enteric-pathogens — manifest + visual inventory + chapter flip.

Microbiology topic 13/39 (Clinical Bacteriology). Evidence pinned on pdf 164
(book 142, the Salmonella-vs-Shigella three-column comparison + Yersinia
enterocolitica + the lactose-fermenting/MacConkey-EMB box) and pdf 165
(book 143: E coli with the four-strain table, Klebsiella, Campylobacter
jejuni, Proteus mirabilis).

Photos (raster, COPYRIGHTED, described-in-text only):
- p165: Klebsiella 'Very mucoid colonies A' (188x188 cmyk, inline marker A
  at line 65); Campylobacter jejuni comma/S shape with polar flagella
  (188x188 cmyk, inline marker A at line 88 + the standalone A markers at
  72/75 in the figure block).
Standalone 'A' markers (lines 72/75) are sub-3-char (dropped by design;
covered inline and as the figure-block range 72-77).

Text-layer quirks documented:
- p164's comparison table: each row emits as label + col1 + col2 + col3 in
  PHYSICAL order (the columns do not interleave row-internal here — each
  row is one contiguous block; the column HEADERS emit first as lines
  12-17). Quoted as physical-order ranges labeled as such.
- The printed tyVi gloss ('pronounce "tyVi"') splits across lines 54-55;
  the ID50 col1 cell across 63-65; the ABX row label across 72-73; the
  IMMUNE col2 cell across 85-86; the GI col1 across 92-93 and col3 across
  97-99; the VACCINE col1 across 103-106; the UNIQUE col1 across 114-122,
  col2 across 124-131, col3 across 133-138 — all handled by row ranges.
- 'salmoncolored' merged hyphen-drop (line 114); '→' U+2192 arrows printed
  with double spaces; curly quotes ("tyVi", "currant jelly"); '4 F's:
  fingers, flies, food, feces' is FA's printed mnemonic — carried verbatim
  in the table block only (NOT in the visual).
- p165's EHEC row: the TOXIN and PRESENTATION columns INTERLEAVE
  line-by-line (46-58). Resolved by TWO INDEPENDENT VLM reads (200-DPI
  census + 2x zoom): 'Does not ferment sorbitol (vs other E coli)' belongs
  to the PRESENTATION column, between 'Dysentery (toxin alone causes
  necrosis and inflammation).' and 'EHEC associated with hemorrhage,
  hamburgers, hemolytic-uremic syndrome.' — quoted as one physical-order
  range with the interleave documented.
- '\x90' control char before '↓ renal blood flow' (line 58, stripped by
  norm()); 'personto-person' merged hyphen-drop (line 90); 'heat-labile'
  and 'healthcare-associated' hyphens print normally here; the figure
  block 72-77 (A / Campylobacter jejuni / A / Proteus mirabilis) emits
  mid-page between the Klebsiella entry and the printed footer.
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
L = {p: pages[p - 1].split("\n") for p in (164, 165)}
P = {p: norm(pages[p - 1]) for p in (164, 165)}

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

# --- p164 (book 142): the Salmonella-vs-Shigella comparison + Yersinia + the lactose box ---
E += [
    ("Printed book-page number (page identity)", "142", 164),
    ("Section banner", "SEC TION II", 164),
    ("Page banner", "MICROBIOLOGY", 164),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 164),
    ("Section heading", "Salmonella vs Shigella", 164),
    ("The genus line (both gram ⊝ rods, non-lactose fermenters, oxidase ⊝, invading via M cells of Peyer patches)", rng(164, 10, 11), 164),
    ("Comparison column headers (physical order, lines 12-17: Salmonella typhi (ty-Vi) / Salmonella spp. except S typhi / Shigella)", rng(164, 12, 17), 164),
    ("RESERVOIRS row (physical order: humans only / humans and animals / humans only)", rng(164, 19, 25), 164),
    ("SPREAD row (physical order: hematogenous spread / hematogenous spread is rare / cell to cell; no hematogenous spread)", rng(164, 27, 34), 164),
    ("H2S PRODUCTION row (yes / yes / no)", rng(164, 36, 42), 164),
    ("FLAGELLA row (yes with the printed salmon-swim gloss / yes salmon swim / no)", rng(164, 44, 50), 164),
    ("VIRULENCE FACTORS row (endotoxin; Vi capsule with the printed pronounce-tyVi gloss / endotoxin / endotoxin; Shiga toxin (enterotoxin))", rng(164, 52, 59), 164),
    ("INFECTIOUS DOSE (ID50) row (high, large inoculum, acid-labile / high / low, very small inoculum, acid stable)", rng(164, 61, 70), 164),
    ("EFFECT OF ANTIBIOTICS ON FECAL EXCRETION row (prolongs duration / prolongs duration / shortens duration with the printed shortens-Shigella gloss)", rng(164, 72, 79), 164),
    ("IMMUNE RESPONSE row (primarily monocytes / PMNs in disseminated disease / primarily PMN infiltration)", rng(164, 81, 88), 164),
    ("GI MANIFESTATIONS row (constipation followed by diarrhea / diarrhea possibly bloody / crampy pain with tenesmus and bloody mucoid stools — bacillary dysentery)", rng(164, 90, 99), 164),
    ("VACCINE row (oral live attenuated S typhi + IM Vi capsular polysaccharide / no vaccine / no vaccine)", rng(164, 101, 110), 164),
    ("UNIQUE PROPERTIES row (physical order: typhoid fever with the salmon-colored truncal macular rash, pulse-temperature dissociation, later GI ulceration and hemorrhage, carrier state with gallbladder colonization, ceftriaxone or fluoroquinolone / poultry-eggs-pets-turtles with supportive treatment / the printed 4-F's mnemonic with the severity order and M-cell invasion)", rng(164, 112, 138), 164),
    ("Yersinia enterocolitica entry (gram ⊝ pleomorphic rod/coccobacillus with bipolar staining; pet feces, contaminated milk, pork; acute bloody diarrhea, pseudoappendicitis with mesenteric adenitis and/or terminal ileitis; reactive arthritis in adults)", rng(164, 140, 145), 164),
    ("Lactose-fermenting enteric bacteria entry (pink colonies on MacConkey; Citrobacter, E coli, Enterobacter, Klebsiella, Serratia)", rng(164, 147, 153), 164),
    ("Printed book-page footer (page identity)", rng(164, 155, 155), 164),
    ("The printed MacConkey/EMB mnemonic box (McCowkey CEEKS milk; EMB purple/black colonies; E coli green sheen — verification only, NOT in the visual)", rng(164, 157, 160), 164),
    ("Timestamp footer line (page identity)", rng(164, 162, 162), 164),
]

# --- p165 (book 143): E coli + the four strains + Klebsiella + Campylobacter + Proteus ---
E += [
    ("Page banner", "MICROBIOLOGY", 165),
    ("Section heading", "Escherichia coli", 165),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 165),
    ("Printed book-page number (page identity)", "143", 165),
    ("Section banner", "SEC TION II", 165),
    ("E coli genus line (gram ⊝, indole ⊕; fimbriae (P pili) for cystitis and pyelonephritis; K capsule for pneumonia and neonatal meningitis; LPS endotoxin for septic shock)", rng(165, 10, 11), 165),
    ("Strain-table column headers (STRAIN / TOXIN AND MECHANISM / PRESENTATION)", rng(165, 13, 17), 165),
    ("EIEC row (physical order: strain; microbe invades intestinal mucosa with necrosis and inflammation; the printed EIEC-is-Invasive gloss; clinical manifestations similar to Shigella)", rng(165, 19, 25), 165),
    ("ETEC row (physical order: strain; heat-labile and heat-stable enteroToxins with no inflammation or invasion; ETEC Traveler's diarrhea watery)", rng(165, 27, 32), 165),
    ("EPEC row (physical order: strain; no toxin produced, adheres to apical surface, flattens villi, prevents absorption; diarrhea usually in children with the printed Pediatrics gloss)", rng(165, 34, 41), 165),
    ("EHEC row — INTERLEAVED, VLM-resolved (physical order, lines 43-58: strain; TOXIN column = O157:H7 + undercooked meat/raw leafy vegetables + the Shiga-toxin hemolytic-uremic-syndrome cascade with the \x90↓ quirk; PRESENTATION column = dysentery from toxin alone + does not ferment sorbitol + the printed hemorrhage-hamburgers gloss)", rng(165, 43, 58), 165),
    ("Klebsiella entry (lobar pneumonia in heavy alcohol use or impaired host defenses; very mucoid colonies with inline photo marker A; dark red currant-jelly sputum; healthcare-associated UTIs; MDR)", rng(165, 60, 70), 165),
    ("Figure block with photo markers and the following headings (physical order, lines 72-77: A / Campylobacter jejuni / A / Proteus mirabilis)", rng(165, 72, 77), 165),
    ("Printed book-page footer (page identity)", rng(165, 79, 79), 165),
    ("The printed ABCDE's-of-Klebsiella mnemonic (verification only, NOT in the visual)", rng(165, 81, 86), 165),
    ("Campylobacter jejuni entry (comma or S shaped with polar flagella and inline photo marker A; oxidase ⊕; grows at 42°C with the printed hot-campfire gloss; major cause of bloody diarrhea; fecal-oral with the personto-person merged hyphen-drop; common antecedent to Guillain-Barré syndrome and reactive arthritis)", rng(165, 88, 92), 165),
    ("Proteus mirabilis entry (gram ⊝, urease ⊕, facultative anaerobe; swarming motility; common cause of UTIs; urease hydrolyzes urea with the → arrows; struvite stones and staghorn calculi)", rng(165, 94, 97), 165),
    ("Timestamp footer line (page identity)", rng(165, 99, 99), 165),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 164-165 / book 142-143)")

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

SRC = {"part": 1, "pdfPages": [164, 165], "bookPages": "142–143"}

manifest = {
    "topicId": "enteric-pathogens",
    "title": "Enteric Pathogens: Salmonella, Shigella, E. coli Strains & Campylobacter",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Clinical Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["enteric-pathogen-map"],
    "mechanismIds": ["enteric-axis-logic", "shiga-toxin-hus-cascade"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the comparison table and the organism entries; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "invasion-toxin-axis-model",
            "summary": "The invasion-vs-toxigenic reading of the E. coli strain set (EIEC borrows Shigella's invasion, ETEC borrows the enterotoxin-only watery mechanism, EPEC adheres without either, EHEC borrows the Shiga toxin and adds the kidney) with the HUS cascade wired to nephrology; the dose axis as the public-health column (low acid-stable ID50 = person-to-person spread); the antibiotic-effect axis read as therapy-as-epidemiology (prolongs for both Salmonellas, shortens for Shigella); the MacConkey/EMB plate rule as the lactose-fermenter boundary; and the roster's exposure-to-disease map (pseudoappendicitis, currant-jelly pneumonia, Guillain-Barré antecedent, staghorn calculi) — labeled as integrations.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the tables and entries without the axis synthesis or the cross-chapter wiring; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list): p164 is PURE VECTOR (the three-column comparison and the MacConkey/EMB box are printed text — the comparison redrawn as the registry visual's COMPARISON panel); p165 carries 2 rasters (Klebsiella very mucoid colonies 188x188 cmyk marker A inline at line 65; Campylobacter jejuni comma/S shape with polar flagella 188x188 cmyk marker A inline at line 88 with the standalone A markers at 72/75) — both COPYRIGHTED, described-in-text only; standalone A markers sub-3-char (dropped by design; covered inline and as the figure-block range 72-77). The E. coli strain table (printed) redrawn as the visual's STRAIN SET panel with its verbatim text also in the note's table block. Text-layer quirks documented: p164's rows each emit as one contiguous physical-order block (label + col1 + col2 + col3) with the column headers first at 12-17; 'salmoncolored' merged hyphen-drop; → U+2192 arrows with double spaces; curly quotes; the printed tyVi gloss split across 54-55. p165's EHEC row: the TOXIN and PRESENTATION columns INTERLEAVE line-by-line (46-58) — resolved by two independent VLM reads (200-DPI census + 2x zoom): 'Does not ferment sorbitol (vs other E coli)' belongs to the PRESENTATION column between the dysentery sentence and the printed hemorrhage-hamburgers mnemonic line; '\x90' control char before ↓ (line 58, stripped by norm); 'personto-person' merged hyphen-drop (line 90). FA's printed mnemonics (salmon swim; pronounce tyVi; shortens Shigella; 4 F's; McCowkey CEEKS milk; ABCDE's of Klebsiella; the hot campfire; the strain letter glosses EIEC-is-Invasive/ETEC-Traveler's/EPEC-Pediatrics; EHEC-hemorrhage-hamburgers) carried verbatim in the table block only (NOT in the visual).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"enteric-pathogens-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Clinical Bacteriology",
        "topicId": "enteric-pathogens",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "enteric-pathogens",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "The Salmonella-vs-Shigella three-column comparison (book 142)",
            "The printed comparison: eleven row axes (reservoirs, spread, H2S production, flagella, virulence factors, infectious dose, effect of antibiotics on fecal excretion, immune response, GI manifestations, vaccine, unique properties) across three columns — S typhi (ty-Vi), Salmonella spp. except S typhi, Shigella — with FA's printed glosses in cells (salmon swim; pronounce tyVi; shortens Shigella; 4 F's). Pure vector.",
            "ORIGINAL_KYP_REDRAW", "enteric-pathogen-map", "registry-visual", "the COMPARISON panel — the eleven-axis grid with the three column headers"),
        svi(2, "VISUAL_TABLE", "The E. coli four-strain table (book 143)",
            "The printed STRAIN | TOXIN AND MECHANISM | PRESENTATION table: EIEC (invasive, like Shigella), ETEC (heat-labile + heat-stable enterotoxins, watery traveler's diarrhea), EPEC (no toxin; adheres, flattens villi, prevents absorption; children), EHEC (O157:H7; undercooked meat, raw leafy vegetables; does not ferment sorbitol; Shiga toxin causes the hemolytic-uremic syndrome triad; dysentery from toxin alone). Pure vector.",
            "ORIGINAL_KYP_REDRAW", "enteric-pathogen-map", "registry-visual", "the STRAIN SET panel with the EHEC capstone; the verbatim strain text also carried in the note's table block"),
        svi(3, "MICROBIOLOGY_IMAGE", "Klebsiella — the very mucoid colonies photo (book 143)",
            "A photograph of Klebsiella's very mucoid colonies on agar (abundant polysaccharide capsules), its marker A printed inline after 'Very mucoid colonies'.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, Klebsiella row — figure pointer carried verbatim; the photo described-in-text only"),
        svi(4, "MICROBIOLOGY_IMAGE", "Campylobacter jejuni — the comma/S-shaped rod photo (book 143)",
            "A photograph of C. jejuni's comma or S shape with polar flagella, its marker A printed inline at the morphology description and again in the figure block (lines 72/75).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, Campylobacter row — figure pointer carried verbatim; the photo described-in-text only"),
    ],
    "coverageAudit": {
        "topicId": "enteric-pathogens",
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
    "notes": "Census: the comparison table and the strain table are pure vector (both redrawn in the registry visual — the COMPARISON and STRAIN SET panels). The 2 printed photos (Klebsiella mucoid colonies; Campylobacter comma/S with polar flagella) are rasters — COPYRIGHTED, described-in-text only within the note's table block rows. FA's printed mnemonics (salmon swim; tyVi; shortens Shigella; 4 F's; McCowkey CEEKS milk; ABCDE's of Klebsiella; the hot campfire; the strain letter glosses) carried in the table block only; NOT in the visual.",
}

(ROOT / "content/usmle/manifests/enteric-pathogens.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/enteric-pathogens.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 12/39 -> 13/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "enteric-pathogens":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: enteric-pathogens -> complete, textbookVisuals rewritten (4 sv)")
        break
else:
    print("ERROR: enteric-pathogens not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
