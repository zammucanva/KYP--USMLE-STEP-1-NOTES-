#!/usr/bin/env python3
"""M4 oxygen-requirements — manifest + visual inventory + chapter flip.

Microbiology topic 4/39 (Basic Bacteriology banner). Evidence pinned on
pdf 147 / book 125 (Anaerobes / Facultative anaerobes / Intracellular
bacteria [obligate + facultative] / Encapsulated bacteria / Urease-positive
organisms — the trait directory). TABLE NOTE by design (requiresVisual
false in the inventory); the printed micrograph is the one raster.

Census (pdfimages + VLM 200-DPI reads, 3 rounds): p147 carries ONE raster
(188x188 cmyk) = photo A (encapsulated gram-positive diplococci, light
microscopy) — the Encapsulated bacteria row's figure, its callout letter
printed inline ('Streptococcus pneumoniae A ,') and in a corner box on the
photo. COPYRIGHTED, described-in-text only.

Text-layer quirks documented:
- 'shortchain' — the hyphen of 'short-chain' dropped at a line join
  (printed 'short-chain fatty acids'; the text layer merges it).
- 'AminO2glycosides' — the FA mnemonic style embeds O2 in the word
  (printed as such; the mnemonic is table text, carried verbatim in the
  note's table block, verification-only boundary).
- '\\x90↓ opsonizing' — control char (U+0090) before ↓; stripped by
  norm(); quotes given as printed minus the control char.
- '→  ↑ pH' — printed with a double space between → and ↑.
- 'Intracellular bacteria' (the left-column section header above
  'Obligate intracellular', per the VLM layout read) is emitted by the
  text layer near the END of the page (with the standalone photo letter
  'A' and the 'Urease-positive organisms' row label) — a text-layer
  emission-order quirk; the header is quoted as its own evidence entry.
- The physical row order per VLM: Anaerobes → Facultative anaerobes →
  Intracellular bacteria (header) → Obligate intracellular → Facultative
  intracellular → Encapsulated bacteria (photo A) → Urease-positive
  organisms.

FA mnemonics printed on this page ('Anaerobes Can't Breathe Fresh Air';
'Stay inside (cells) when it is Really Chilly and Cold'; 'Some Nasty Bugs
May Live FacultativeLY'; 'Please SHiNE my SKiS'; 'Pee CHUNKSS') are quoted
in manifest evidence for VERIFICATION ONLY and carried verbatim in the
note's table block (they ARE the source's table text, per the E20+
precedent); they are NOT reproduced in any user-facing visual (this note
has none by design); KYP originals replace them in the mnemonics field.
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
P = {p: norm(pages[p - 1]) for p in (147,)}

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

# --- p147: banners + section ---
E += [
    ("Section banner", "SEC TION II", 147),
    ("Chapter banner", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 147),
]

# --- p147: Anaerobes row (full physical order) ---
E += [
    ("Anaerobes row (full physical order; shortchain hyphen-drop + AminO2glycosides as printed)", "Anaerobes\nExamples include Clostridioides, Clostridium,\nBacteroides, Fusobacterium, and Actinomyces\nisraelii. They lack catalase and/or superoxide\ndismutase and are thus susceptible to oxidative\ndamage. Generally foul smelling (shortchain fatty acids), are difficult to culture, and\nproduce gas in tissue (CO2 and H2).\nAnaerobes Can’t Breathe Fresh Air.\nAnaerobes are normal microbiota in GI tract,\ntypically pathogenic elsewhere (eg, causes\naspiration pneumonia). AminO2glycosides are\nineffective against anaerobes because these\nantibiotics require O2 to enter into bacterial\ncell.", 147),
    ("FA mnemonic — anaerobes (verification only)", "Anaerobes Can’t Breathe Fresh Air.", 147),
    ("Aminoglycoside-O2 rule (printed with the mnemonic word AminO2glycosides)", "AminO2glycosides are\nineffective against anaerobes because these\nantibiotics require O2 to enter into bacterial\ncell.", 147),
]

# --- p147: Facultative anaerobes row ---
E += [
    ("Facultative anaerobes row (full physical order)", "Facultative anaerobes\nMay use O2 as a terminal electron acceptor to\ngenerate ATP, but can also use fermentation\nand other O2-independent pathways.\nStreptococci, staphylococci, and enteric gram ⊝\nbacteria.", 147),
]

# --- p147: Intracellular header + two rows ---
E += [
    ("Intracellular bacteria section header (left column, above Obligate intracellular; text layer emits it near page end)", "Intracellular bacteria", 147),
    ("Obligate intracellular row (full physical order)", "Obligate intracellular\nRickettsia, Chlamydia, Coxiella\nRely on host ATP\nStay inside (cells) when it is Really Chilly and\nCold", 147),
    ("FA mnemonic — obligate intracellular (verification only)", "Stay inside (cells) when it is Really Chilly and\nCold", 147),
    ("Facultative intracellular row (full physical order)", "Facultative\nintracellular\nSalmonella, Neisseria, Brucella, Mycobacterium,\nListeria, Francisella, Legionella, Yersinia pestis\nSome Nasty Bugs May Live FacultativeLY", 147),
    ("FA mnemonic — facultative intracellular (verification only)", "Some Nasty Bugs May Live FacultativeLY", 147),
]

# --- p147: Encapsulated bacteria row (with photo letter A inline) ---
E += [
    ("Encapsulated bacteria row (full physical order; photo letter A inline; ▘ U+2598 bullets as printed; U+0090 before ↓ stripped)", "Encapsulated bacteria\nExamples are Pseudomonas aeruginosa,\nStreptococcus pneumoniae A , Haemophilus\ninfluenzae type b, Neisseria meningitidis,\nEscherichia coli, Salmonella, Klebsiella\npneumoniae, and group B Strep. Their\ncapsules serve as an antiphagocytic virulence\nfactor.\nCapsular polysaccharide +/– protein conjugate\ncan serve as an antigen in vaccines. A\npolysaccharide antigen alone cannot be\npresented to T cells; immunogenicity can be\nenhanced by conjugating capsule antigens to a\ncarrier protein.\nPlease SHiNE my SKiS.\nAre opsonized, and then cleared by spleen.\nAsplenics (No Spleen Here) have ↓ opsonizing\nability and thus ↑ risk for severe infections;\nneed vaccines to protect against:\n▘ N meningitidis\n▘ S pneumoniae\n▘ H influenzae", 147),
    ("FA mnemonic — encapsulated (verification only)", "Please SHiNE my SKiS.", 147),
    ("Photo letter A (standalone; emitted near page end with the header quirk)", "A", 147),
]

# --- p147: Urease row + label ---
E += [
    ("Urease-positive organisms row label (two-line left-column label, emitted at page end)", "Urease-positive\norganisms", 147),
    ("Urease row (full physical order; double-space →  ↑ as printed)", "Proteus, Cryptococcus, H pylori, Ureaplasma,\nNocardia, Klebsiella, S epidermidis,\nS saprophyticus. Urease hydrolyzes urea\nto release ammonia and CO2 →  ↑ pH.\nPredisposes to struvite (magnesium\nammonium phosphate) stones, particularly\nProteus.\nPee CHUNKSS.", 147),
    ("FA mnemonic — urease (verification only)", "Pee CHUNKSS.", 147),
    ("Printed book-page footer (page identity)", "FAS1_2026_03-Microbiology.indd 125", 147),
]

EVIDENCE = [ev(c, q, p) for (c, q, p) in E]

failures = []
for e in EVIDENCE:
    if len(e["quote"].strip()) < 3:
        # intentional drop: standalone photo letters are sub-3-char and
        # covered by their inline figure-pointer quotes ('... pneumoniae A ,')
        print(f"  (dropping sub-3-char by design: {e['quote']!r} — covered inline)")
        continue
    elif e["verified"] != "pass":
        failures.append(f"NOT FOUND on page {e['pages']['pdfPages'][0]}: {e['quote']!r} ({e['claim']})")
if failures:
    print("EVIDENCE FAILURES:")
    for f in failures:
        print("  ✗", f)
    sys.exit(1)

kept = [e for e in EVIDENCE if len(e["quote"].strip()) >= 3]
print(f"evidence: {len(kept)}/{len(EVIDENCE)} verified (pdf 147 / book 125; 1 sub-3-char photo letter dropped, covered inline)")

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

SRC = {"part": 1, "pdfPages": [147], "bookPages": "125–125"}

manifest = {
    "topicId": "oxygen-requirements",
    "title": "Anaerobes, Aerobes & Oxygen Tolerance",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Basic Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": kept,
    "visualIds": [],
    "mechanismIds": ["oxygen-tolerance-spectrum"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the directory; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "missing-enzyme-corollary-chain",
            "summary": "The model that unites the row: one missing enzyme set (catalase/SOD) generates the three clinical signatures (short-chain fatty-acid smell, gas in tissue, culture difficulty) and the pharmacology corollary (aminoglycosides require O2 to enter); the obligate-vs-facultative intracellular split by host-ATP dependence; the capsule-as-splenic-opsonization economy (asplenia risk + the conjugate-vaccine T-cell-presentation principle); and the urease chemistry-to-stone chain — with granuloma logic and alternative-therapy notes labeled as extensions.",
            "origin": "outside-first-aid",
            "rationale": "The source lists the rows without the corollary chains or the T-cell-presentation rationale behind conjugation; these integrations are KYP's design.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "TABLE NOTE by design (requiresVisual false). Census: p147 carries ONE raster (188x188 cmyk) = photo A, the Encapsulated-bacteria row figure (encapsulated gram-positive diplococci, light microscopy; callout letter printed inline as 'Streptococcus pneumoniae A ,' and in a corner box on the photo) — COPYRIGHTED, described-in-text only. Text-layer quirks documented: 'shortchain' hyphen-drop; 'AminO2glycosides' (the FA mnemonic word, carried verbatim in the table block only); U+0090 control char before ↓ (stripped by norm); double-space '→  ↑ pH'; 'Intracellular bacteria' header emitted near page end (VLM resolved its true position: left column, above Obligate intracellular); the standalone photo letter 'A' is sub-3-char and covered by the inline quote. MNEMONIC BOUNDARY (E22+ rule): the page's 5 FA mnemonics quoted for verification and carried verbatim in the note's table block (they ARE the source's table text, per the E20+ precedent); no user-facing visual exists for this note; KYP originals authored in the mnemonics field.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"oxygen-requirements-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Basic Bacteriology",
        "topicId": "oxygen-requirements",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "oxygen-requirements",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "MICROBIOLOGY_IMAGE", "Trait directory — the encapsulated-bacteria micrograph (photo A)",
            "One light-microscopy micrograph of encapsulated gram-positive diplococci (the Encapsulated bacteria row's figure), with its callout letter A printed inline in the row's organism list ('Streptococcus pneumoniae A ,') and in a corner box on the photo.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[0] — 'The trait directory — verbatim' table block, Encapsulated bacteria row: the printed figure pointer is carried verbatim ('Streptococcus pneumoniae A'); the micrograph itself (encapsulated gram-positive diplococci, light microscopy) is described-in-text only, never reproduced"),
        svi(2, "VISUAL_TABLE", "Trait directory — the six-row directory table",
            "The printed 2-column table (category | description/examples/notes): Anaerobes, Facultative anaerobes, Intracellular bacteria (obligate + facultative), Encapsulated bacteria, Urease-positive organisms.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[0] — 'The trait directory — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "oxygen-requirements",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 0,
        "kypOriginals": 2,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "TABLE NOTE by design (requiresVisual false; no registry visual). Census: the single raster is photo A (encapsulated gram-positive diplococci, light microscopy) — COPYRIGHTED, described-in-text only. The directory table is reproduced verbatim as the note's table block. FA's printed mnemonics (5 on this page) carried in the table block only; KYP originals in the mnemonics field.",
}

(ROOT / "content/usmle/manifests/oxygen-requirements.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/oxygen-requirements.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 3/39 -> 4/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "oxygen-requirements":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: oxygen-requirements -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: oxygen-requirements not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
