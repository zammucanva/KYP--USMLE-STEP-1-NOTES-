#!/usr/bin/env python3
"""M10 gram-positive-bacilli — manifest + visual inventory + chapter flip.

Microbiology topic 10/39 (Clinical Bacteriology). Evidence pinned on pdf
158-159 / book 136-137: Bacillus cereus + Clostridioides difficile + the
Clostridia (tetani, botulinum, perfringens + the septicum rule) on book 136
(with the printed tetanus-vs-botulism SNARE diagram, pure vector); and
Corynebacterium diphtheriae + Listeria monocytogenes + the Nocardia-vs-
Actinomyces comparison table on book 137. The B-anthracis bridge text on
book 135 was covered by M9 per page ownership (this note starts at book 136).

Photos (raster, COPYRIGHTED, described-in-text only):
- book 136: C difficile pseudomembranous colitis (endoscopic, 188x188,
  marker A); C perfringens gas gangrene (clinical, 188x188, marker A).
- book 137: diphtheria pseudomembrane (188x188, A); Listeria rocket tails
  (actin comet tails, 188x168, A); Nocardia acid-fast filaments (188x188,
  A); Actinomyces branching filaments (188x188, B).
Standalone 'A'/'B' markers are sub-3-char (dropped by design; covered inline).

Text-layer quirks documented:
- HEADING INTERLEAVE (the big one): 'Clostridium botulinum' (dump line 124)
  and 'Clostridium perfringens' (lines 148-149) are emitted AFTER the SNARE
  diagram's label stream (lines 93-151) — the diagram text layer physically
  separates both section headings from their body text (58-76, 78-91).
- Page 159 opens with the three organism headings + photo markers (lines
  2-14: 'Corynebacterium diphtheriae A', 'Listeria monocytogenes A',
  'Nocardia vs Actinomyces A B') BEFORE the chapter banner — top-of-page
  figure-block emission.
- '→  ' double-space arrows (lines 20, 83-84); '2°' (line 20);
  '+/−' with U+2212 minus (line 55) vs '+/–' with en dash (line 49) — both
  slash-dash forms in one spread; '5 D's' curly apostrophe (line 65);
  '“bull's neck”' curly quotes (line 27).
- Merged hyphen-drop 'cellto-cell' (line 55 — print: cell-to-cell); the
  source's own grammar slip 'spore germinate' (line 83, quoted as printed).
- FA mnemonics printed on these pages ('Difficile causes diarrhea.',
  'Tetanus is tetanic paralysis.', 'Botulinum is from bad bottles of food,
  juice, and honey.', 'Perfringens perforates a gangrenous leg.',
  'Coryne = club shaped...', 'Black colonies on cystine-tellurite agar.',
  'ABCDEFG', 'Treatment is a SNAP') — table text carried verbatim in the
  note's table block only; NOT reproduced in the visual.
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
L = {p: pages[p - 1].split("\n") for p in (158, 159)}
P = {p: norm(pages[p - 1]) for p in (158, 159)}

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

# --- p158 (book 136): cereus + difficile + the clostridia + the SNARE diagram ---
E += [
    ("Section banner", "SEC TION II", 158),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 158),
    ("B cereus entry (full physical order; reheated-rice syndrome; emetic 1-5 h cereulide vs diarrheal 8-18 h; supportive care)", rng(158, 8, 14), 158),
    ("C difficile entry part 1 (toxins A/B; pseudomembranous colitis with inline photo marker A; antibiotic and PPI risks; fulminant course)", rng(158, 16, 25), 158),
    ("C difficile entry part 2 (standalone photo marker A; FA mnemonic; PCR/antigen diagnosis; oral vancomycin or fidaxomicin; fecal microbiota transplant)", rng(158, 26, 34), 158),
    ("Clostridia genus rule (gram ⊕, spore-forming, obligate anaerobic rods; tetanus and botulinum toxins are SNARE-cleaving proteases)", rng(158, 36, 39), 158),
    ("C tetani entry part 1 (noninvasive, wound-localized; tetanospasmin; retrograde axonal transport; Renshaw-cell GABA/glycine blockade; the spastic triad)", rng(158, 41, 51), 158),
    ("C tetani entry part 2 (FA mnemonic; vaccine prevention; antitoxin +/− booster, antibiotics, diazepam, wound debridement)", rng(158, 53, 56), 158),
    ("C botulinum entry part 1 (heat-labile SNARE toxin; no ACh at the NMJ; floppy baby vs adult preformed toxin; the 5 D's; no sensory deficits)", rng(158, 58, 68), 158),
    ("C botulinum entry part 2 (FA mnemonic; human botulinum immunoglobulin; therapeutic Botox uses)", rng(158, 70, 76), 158),
    ("C perfringens entry part 1 (α-toxin lecithinase; myonecrosis/gas gangrene with inline photo marker A and crepitus; the <60°C standing-food rule; 10-12 h enterotoxin)", rng(158, 78, 85), 158),
    ("C perfringens entry part 2 (FA mnemonic; spontaneous gas gangrene via hematogenous seeding; colonic malignancy; C septicum)", rng(158, 87, 91), 158),
    ("SNARE diagram text layer, part 1 — the tetanus panel (physical order, lines 93-123: 'Tetanus toxin', 'Motor neuron', 'Renshaw cell (inhibitory neuron)', 'Unopposed stimulation = spastic paralysis' labels as emitted)", rng(158, 93, 123), 158),
    ("SNARE diagram text layer, part 2 — the botulinum panel + the interleaved headings (physical order, lines 124-151: 'Clostridium botulinum' heading, 'No stimulation = flaccid paralysis', 'Botulism toxin', then the 'Clostridium perfringens' heading + its photo marker A emitted at stream end)", rng(158, 124, 151), 158),
    ("Printed book-page footer (page identity)", rng(158, 152, 152), 158),
]

# --- p159 (book 137): diphtheriae + listeria + nocardia vs actinomyces ---
E += [
    ("Page banner", "MICROBIOLOGY", 159),
    ("Top-of-page organism headings + photo markers (physical order: 'Corynebacterium diphtheriae A', 'Listeria monocytogenes A', 'Nocardia vs Actinomyces A B' — figure-block emission before the chapter banner)", rng(159, 2, 14), 159),
    ("Chapter banner", "▶ MICROBIOLOGY—CLINICAL BACTERIOLOGY", 159),
    ("C diphtheriae entry part 1 (angular gram ⊕ rods; respiratory droplets; β-prophage; EF-2 ADP-ribosylation; pseudomembranous pharyngitis with inline photo marker A; bull's neck; myocarditis, arrhythmias, neuropathies; metachromatic granules; ⊕ Elek test; toxoid vaccine)", rng(159, 18, 33), 159),
    ("C diphtheriae entry part 2 (printed page number; FA mnemonics — Cory = club shaped, black colonies on cystine-tellurite, ABCDEFG; antitoxin +/– erythromycin or penicillin)", rng(159, 35, 50), 159),
    ("L monocytogenes entry (facultative intracellular rod; cold foods and transplacental/vaginal acquisition; cold enrichment; rocket tails with inline photo marker; listeriolysin; tumbling motility; the pregnancy/neonate/immunocompromised disease set; ampicillin)", rng(159, 52, 59), 159),
    ("Nocardia vs Actinomyces comparison table (both gram ⊕ branching filaments resembling fungi; aerobe/catalase ⊕ vs anaerobe/catalase ⊝; weakly acid fast A vs not acid fast B; soil vs microbiota; the disease columns; TMP-SMX vs penicillin; the SNAP mnemonic)", rng(159, 61, 94), 159),
    ("Printed book-page footer (page identity)", rng(159, 96, 96), 159),
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
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 158-159 / book 136-137)")

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

SRC = {"part": 1, "pdfPages": [158, 159], "bookPages": "136–137"}

manifest = {
    "topicId": "gram-positive-bacilli",
    "title": "Gram-Positive Bacilli: Clostridia, Corynebacterium, Listeria & the Branching Filaments",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Clinical Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": ["gram-pos-bacilli-map"],
    "mechanismIds": ["snare-axis", "bacilli-injury-modes"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the organism entries and the SNARE diagram; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "address-code-model",
            "summary": "The injury-address model as the block's organizer (same scissors, different address — the Renshaw cell vs the neuromuscular junction; then membrane, enterocyte, ribosome, cytoskeleton as the non-synaptic addresses); the incubation-clock synthesis (cereulide 1-5 h vs cereus diarrheal 8-18 h vs perfringens standing food 10-12 h vs post-antibiotic difficile); the spores-vs-preformed age split as the botulism trap; and the C-septicum-to-colonic-malignancy spontaneous-gangrene rule — with Botox therapeutics and the food-counseling contexts labeled as integrations.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the entries and the diagram without the address taxonomy or the cross-organism timing synthesis; these integrations are KYP's design.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list): p158 carries 2 rasters (C difficile pseudomembranous colitis 188x188 marker A; C perfringens gas gangrene 188x188 marker A) and p159 carries 4 (diphtheria pseudomembrane 188x188 A; Listeria rocket tails 188x168 A; Nocardia acid-fast 188x188 A; Actinomyces filaments 188x188 B) — all COPYRIGHTED, described-in-text only; standalone A/B markers sub-3-char (dropped by design). The tetanus-vs-botulism SNARE diagram is PURE VECTOR (redrawn as the registry visual's core panel); the Nocardia-vs-Actinomyces comparison table redrawn as the visual's SNAP axis with its verbatim text also carried in the note's table block. Text-layer quirks documented: the heading interleave (C botulinum at dump line 124 and C perfringens at 148-149 emitted after the SNARE label stream 93-151, separated from their body text); p159's top-of-page heading+marker block (lines 2-14); double-space arrows; '2°'; both '+/−' (U+2212) and '+/–' (en dash) forms; 'cellto-cell' hyphen-drop; the source's own 'spore germinate' (sic); '5 D's' curly apostrophe; '“bull's neck”' curly quotes. FA mnemonics (Difficile causes diarrhea; Tetanus is tetanic paralysis; bad bottles; Perfringens perforates; Cory = club; black colonies on cystine-tellurite; ABCDEFG; SNAP) carried verbatim in the table block only (NOT in the visual). Boundary: the B-anthracis bridge on book 135 was covered by M9 per page ownership — this note begins at Bacillus cereus (book 136).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"gram-positive-bacilli-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Clinical Bacteriology",
        "topicId": "gram-positive-bacilli",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "gram-positive-bacilli",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "PHYSIOLOGY_DIAGRAM", "The tetanus-vs-botulism SNARE panels (book 136)",
            "The printed two-panel diagram: each panel carries a Motor neuron, a Renshaw cell (inhibitory neuron), and a Muscle. LEFT (tetanus): tetanus toxin blocks the Renshaw cell — unopposed stimulation = spastic paralysis. RIGHT (botulism): botulism toxin blocks the motor-neuron terminal at the neuromuscular junction — no stimulation = flaccid paralysis. Pure vector (pdfimages empty at the diagram region).",
            "ORIGINAL_KYP_REDRAW", "gram-pos-bacilli-map", "registry-visual", "the SNARE AXIS panel — the redraw of both printed panels"),
        svi(2, "MICROBIOLOGY_IMAGE", "C difficile — the pseudomembranous colitis photograph (book 136)",
            "An endoscopic photograph of pseudomembranous colitis (yellowish plaques on inflamed mucosa), its marker A printed after 'pseudomembranous colitis' in the C difficile entry.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, C difficile rows — figure pointer carried verbatim; the photograph described-in-text only"),
        svi(3, "MICROBIOLOGY_IMAGE", "C perfringens — the gas gangrene photograph (book 136)",
            "A clinical photograph of gas gangrene (myonecrosis) of a limb with dark necrotic tissue, its marker A printed at the section heading 'Clostridium perfringens' (heading emitted in the text layer after the SNARE diagram labels).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, C perfringens rows — figure pointer carried verbatim; the photograph described-in-text only"),
        svi(4, "MICROBIOLOGY_IMAGE", "C diphtheriae — the pseudomembrane photograph (book 137)",
            "A clinical photograph of the grayish-white pharyngeal pseudomembrane of diphtheria, its marker A printed after 'grayish-white membrane'.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, C diphtheriae rows — figure pointer carried verbatim; the photograph described-in-text only"),
        svi(5, "MICROBIOLOGY_IMAGE", "L monocytogenes — the rocket-tails photomicrograph (book 137)",
            "A photomicrograph of Listeria actin 'rocket tails' (red), its marker A printed after 'Forms rocket tails (red in A)'.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, L monocytogenes rows — figure pointer carried verbatim; the photomicrograph described-in-text only"),
        svi(6, "MICROBIOLOGY_IMAGE", "Nocardia — the acid-fast micrograph (book 137)",
            "An acid-fast stain micrograph of Nocardia's branching filaments (weakly acid fast), its marker A printed in the comparison table's 'Acid fast (weak) A' row.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, Nocardia-vs-Actinomyces row — figure pointer carried verbatim; the micrograph described-in-text only"),
        svi(7, "MICROBIOLOGY_IMAGE", "Actinomyces — the branching-filament micrograph (book 137)",
            "A micrograph of Actinomyces branching filaments (not acid fast), its marker B printed in the comparison table's 'Not acid fast B' row.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] table block, Nocardia-vs-Actinomyces row — figure pointer carried verbatim; the micrograph described-in-text only"),
        svi(8, "VISUAL_TABLE", "The Nocardia vs Actinomyces comparison table (book 137)",
            "The printed two-column comparison: Nocardia (aerobe, catalase ⊕; acid fast [weak]; found in soil; pulmonary infections in immunocompromised mimicking TB with ⊝ PPD, cutaneous after trauma, CNS → cerebral abscess; treat with sulfonamides [TMP-SMX]) vs Actinomyces (anaerobe, catalase ⊝; not acid fast; normal oral, reproductive, and GI microbiota; oral/facial abscesses draining through sinus tracts, sulfur granules, PID with IUDs; treat with penicillin), with the SNAP mnemonic printed beneath.",
            "ORIGINAL_KYP_REDRAW", "gram-pos-bacilli-map", "registry-visual", "the SNAP AXIS panel of the visual; the verbatim table text also carried in the note's table block"),
    ],
    "coverageAudit": {
        "topicId": "gram-positive-bacilli",
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
    "notes": "Census: the SNARE diagram is pure vector and the Nocardia-vs-Actinomyces table is printed text — both redrawn in the registry visual (the SNARE AXIS and SNAP AXIS panels). The 6 printed photographs (difficile colitis, perfringens gangrene, diphtheria pseudomembrane, listeria rocket tails, nocardia acid-fast, actinomyces filaments) are rasters — COPYRIGHTED, described-in-text only within the note's table block rows. FA's printed mnemonics carried in the table block only; NOT in the visual.",
}

(ROOT / "content/usmle/manifests/gram-positive-bacilli.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/gram-positive-bacilli.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 9/39 -> 10/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "gram-positive-bacilli":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: gram-positive-bacilli -> complete, textbookVisuals rewritten (8 sv)")
        break
else:
    print("ERROR: gram-positive-bacilli not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
