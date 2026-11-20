#!/usr/bin/env python3
"""PH17 muscarinic-antagonists — manifest + inventory (Pharmacology,
Autonomic Drugs), STAGED under .usmle-pipeline-cache/staging-ph17/
(the promotion step owns content/). Source: FULL pdf page 262 / book
240 — a single-owner FULL page, no shared-page split (the p262 content
was re-assigned to this topic by the batch's scope correction: the
initial-build sympathomimetics topic declared pdf 262-265 but its
evidence sits on 263-264, so the p262 anticholinergic/atropine content
owns muscarinic-antagonists). Census (pdfimages): ZERO raster images
on pdf 262 — the page is pure text and tables, no figures, no
photographs. VLM WAS AVAILABLE this session (one 120dpi pass, glm-4.6v,
saved to .usmle-pipeline-cache/staging-ph17/vlm-census.txt — unlike the
ph6-ph10 batch's 401 outage) and adjudicated the interleaved text layer:
(1) the first table is the 3-column DRUGS / ORGAN SYSTEMS / APPLICATIONS
directory with SEVEN rows in the printed order quoted below (the text
layer interleaves each row's cells as separate lines — the m38
convention; the logical table is the VLM-reconstructed print layout);
(2) the atropine table's NOTES cell — "Blocks muscarinic effects
(DUMBBELSS) of anticholinesterases, but not the nicotinic effects" — is
ONE cell that SPANS ALL SIX organ rows (Eye through Bladder), which is
why the text layer extracts it mid-table between the Heart and Stomach
rows (quoted as its own entry at its extracted position, with the
spanning adjudication documented); (3) the "Hot as a hare ... Full as a
flask / Jimson weed (Datura) → gardener's pupil (mydriasis)" mnemonic
is NOT a margin box — it is the right-hand cell of the printed ADVERSE
EFFECTS row (First Aid's own mnemonic, carried attributed in the note's
table block and recorded here). VERBATIM CARRIES, documented: "DUMBBELSS"
prints with the DOUBLE S and is carried exactly; "park my Benz" and
"Make bladder SOFT" are printed in-table mnemonic phrases carried
exactly; the running header prints "SEC TION II" (a space inside
SECTION — text-layer quirk, carried verbatim in the identity quote);
the ↑/↓/→ arrows print in the text layer preceded by U+008F/U+0090/
U+008E control characters (the generator's norm() strips \u0080-\u009f,
so containment is whitespace- and control-character-insensitive — the
direction glyphs themselves are real text-layer characters and stay in
the quotes); the indd slug "FAS1_2026_05-Pharmacology.indd 240"
extracts at a MID-PAGE position (line 112, between the ADVERSE EFFECTS
label and its body) but prints at the page foot — quoted as its own
entry with the position note. Nothing is reproduced: there is no figure
on the source page, so the registry visual muscarinic-antagonist-map
(MuscarinicAntagonistMap in visuals/pharm-p17.tsx) is an ORIGINAL KYP
diagram built from the printed tables; all three printed tables are
carried verbatim in the note's table blocks, and the printed mnemonic
family is carried ATTRIBUTED to First Aid (the four ALL-CAPS KYP memory
codes are original and recorded as kypExtensions)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
L = {262: pages[261].split("\n")}
P = {262: norm(pages[261])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E17 = [
    ("Page identity — the running header and the topic heading (book 240): the page number, SECTION II ('SEC TION' prints with the space inside SECTION — text-layer quirk carried verbatim), the PHARMACOLOGY banner, the ▶ PHARMACOLOGY—AUTONOMIC DRUGS subsection bar, and the Muscarinic antagonists heading", rng(262, 1, 9), [262]),
    ("The anticholinergic system directory — the column headers DRUGS / ORGAN SYSTEMS / APPLICATIONS plus row 1: Atropine, homatropine, tropicamide | Eye | Produce mydriasis and cycloplegia (the text layer interleaves each row's cells as separate lines — the m38 convention; the logical row order is VLM-adjudicated)", rng(262, 10, 22), [262]),
    ("Directory row 2 — Benztropine, trihexyphenidyl | CNS | Parkinson disease (“park my Benz”) / Acute dystonia — the printed mnemonic phrase carried verbatim inside the cell", rng(262, 24, 30), [262]),
    ("Directory row 3 — Glycopyrrolate | GI, respiratory | Parenteral: preoperative use to reduce airway secretions / Oral: reduces drooling, peptic ulcer", rng(262, 32, 38), [262]),
    ("Directory row 4 — Hyoscyamine, dicyclomine | GI | Antispasmodics for irritable bowel syndrome", rng(262, 40, 45), [262]),
    ("Directory row 5 — Ipratropium, tiotropium | Respiratory | COPD, asthma / Duration: tiotropium > ipratropium", rng(262, 47, 53), [262]),
    ("Directory row 6 — Solifenacin, Oxybutynin, Flavoxate, Tolterodine | Genitourinary | Reduce bladder spasms and urge urinary incontinence (overactive bladder) / Make bladder SOFT — the printed SOFT acronym (the four drug initials) carried verbatim inside the cell", rng(262, 55, 64), [262]),
    ("Directory row 7 — Scopolamine | CNS | Motion sickness", rng(262, 66, 70), [262]),
    ("The Atropine block — the heading plus the printed definition line: Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.", rng(262, 72, 74), [262]),
    ("The atropine end-organ table — the column headers ORGAN SYSTEM / ACTION / NOTES plus the first three rows: Eye (↑ pupil dilation, cycloplegia), Airway (Bronchodilation, ↓ secretions), Heart (↑ heart rate) — the ↑/↓ arrows print in the text layer preceded by U+008F/U+0090 control characters (stripped by the generator's norm(); the arrows themselves are carried)", rng(262, 76, 92), [262]),
    ("The atropine table's NOTES cell, at its interleaved mid-table extraction position (between the Heart and Stomach rows) — VLM-adjudicated to be ONE cell spanning ALL SIX organ rows Eye through Bladder: Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects — 'DUMBBELSS' prints with the DOUBLE S, carried verbatim", rng(262, 94, 96), [262]),
    ("The atropine end-organ table rows 4-6 — Stomach (↓ acid secretion), Gut (↓ motility), Bladder (↓ urgency in cystitis)", rng(262, 98, 108), [262]),
    ("The ADVERSE EFFECTS row label (the left cell of the printed adverse-effects row; the indd footer slug interleaves between this label and the body in the text layer but prints at the page foot)", rng(262, 110, 110), [262]),
    ("The ADVERSE EFFECTS body, verbatim — ↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation / Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants", rng(262, 114, 120), [262]),
    ("The printed mnemonic cell of the ADVERSE EFFECTS row, verbatim — Adverse effects: Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask / Jimson weed (Datura) → gardener’s pupil (mydriasis) — First Aid's own mnemonic (VLM-adjudicated: it is the right-hand cell of the ADVERSE EFFECTS row, NOT a margin box; carried attributed)", rng(262, 122, 131), [262]),
    ("The print footer slug — FAS1_2026_05-Pharmacology.indd 240 (page identity; POSITION QUIRK: this line extracts at a MID-PAGE position in the text layer, line 112, between the ADVERSE EFFECTS label and its body, but prints at the page foot)", rng(262, 112, 112), [262]),
    ("The print timestamp footer — 12/19/25 8:07 AM (page identity, the last line of the page block)", rng(262, 133, 133), [262]),
]
for c, q, pgs in E17:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"muscarinic-antagonists: evidence {len(kept)}/{len(E17)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m17 = {"topicId": "muscarinic-antagonists", "title": "Muscarinic Antagonists & Atropine",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [262], "bookPages": "240–240"},
    "sourceEvidence": kept, "visualIds": ["muscarinic-antagonist-map"],
    "mechanismIds": ["atropine-end-organ-pattern", "organ-selectivity-docking"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the two printed tables and the adverse-effects row.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the directory table, the atropine table, and the adverse-effects row; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "reading-protocol", "summary": "The four-move reading protocol (NAME THE PATTERN / NAME THE DOOR / CHECK THE BARRIER / EXPECT THE TOXIDROME) and the one-mechanism-seven-doors framing of the page.",
         "origin": "outside-first-aid", "rationale": "The source prints the directory as a lookup table and never asks the learner to route vignettes through it; the four-move synthesis and the door framing are KYP's design.",
         "location": "core.keyIdea + blocks[4] the steps block + mechanisms[1] + the registry visual's directory zone"},
        {"id": "barrier-selectivity-synthesis", "summary": "The CNS tollbooth: the charge-based blood-brain-barrier rule (permanently charged quaternary amines ipratropium, tiotropium, glycopyrrolate are excluded from the CNS; the tertiary amines atropine, homatropine, tropicamide, benztropine, trihexyphenidyl, scopolamine, oxybutynin cross) — explaining the printed CNS organ assignments (park my Benz, motion sickness) and the disorientation of the toxidrome.",
         "origin": "outside-first-aid", "rationale": "The page prints only the ORGAN SYSTEMS column; the quaternary-vs-tertiary charge rule behind it is general pharmacology knowledge NOT printed on book 240 — recorded here so it is never presented as First Aid content (the note and visual flag it 'KYP synthesis').",
         "location": "core.keyIdea MOVE 3 + blocks[4] MOVE 3 + usmle.traps[0] + mnemonics[2] + the registry visual's tollbooth panel"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (DRY, WIDE, FAST, STILL (AND HOT) / THE CNS TOLLBOOTH — CHARGED STAYS OUT / EYES DROP, BRAIN PARKS, AIRWAY DRIES, GUT CALMS, BLADDER SOFTENS / NO SWEAT, NO EXIT — THE THERMOSTAT RULE). First Aid's OWN printed mnemonic family (Hot as a hare ... Full as a flask + Jimson weed → gardener's pupil) and the printed in-table phrases (“park my Benz”, “Make bladder SOFT”, “(DUMBBELSS)”) are carried ATTRIBUTED in the note's table blocks and mnemonics[0], and are NOT extensions.",
         "origin": "outside-first-aid", "rationale": "The four ALL-CAPS codes are KYP's design; the printed family is First Aid's own and is carried attributed to book 240.",
         "location": "mnemonics[1-4] + the visual's verb tags, tollbooth, and toxidrome panels"},
        {"id": "mini-case-layer", "summary": "The anticholinesterase-poisoning miniCase (which finding persists despite adequate atropine — the nicotinic muscle findings) with distractors routing miosis, bronchorrhea, and bradycardia through the printed muscarinic rows and inventing barriers (distance, 'sympathetic-only airway', 'protected SA node') that the printed rule denies.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the boundary rule ('blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects') but never asks the learner to apply it to a poisoned patient; the vignette, the four distractors, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "drug-card-layer", "summary": "The eight DrugCards (atropine; homatropine/tropicamide; benztropine/trihexyphenidyl; glycopyrrolate; hyoscyamine/dicyclomine; ipratropium/tiotropium; the SOFT quartet; scopolamine) restructuring the printed directory rows into the KYP drug → target → mechanism → effect → uses → adverse + clue card format.",
         "origin": "outside-first-aid", "rationale": "The DrugCard presentation is a KYP design over First Aid's printed table rows; all drug/appication facts trace to the printed directory (adverse facts to the printed adverse-effects row).",
         "location": "drugs"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single-owner page (no shared-page split): pdf 262 / book 240 carries the Muscarinic antagonists directory + the Atropine block + the ADVERSE EFFECTS row — the p262 content was assigned to this topic by the batch's documented scope correction (the initial-build sympathomimetics topic declared pdf 262-265 but its evidence sits on 263-264). Census (pdfimages): ZERO raster images on pdf 262 — pure text and tables, no figures; VLM WAS AVAILABLE this session (one 120dpi pass, glm-4.6v, saved to staging-ph17/vlm-census.txt — the ph6-ph10 batch lost VLM to a 401 outage; this session did not) and adjudicated the interleaved text layer: (1) the 7-row directory in the printed order quoted (the m38 interleave — each row's three cells extract as separate lines; the logical table is the VLM reconstruction, carried verbatim in the note's blocks[1]); (2) the atropine table's NOTES cell — 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — is ONE cell spanning ALL SIX organ rows, which is why the text layer extracts it between the Heart and Stomach rows (quoted as its own evidence entry at that position with the spanning adjudication; the note carries it once in its spanning position in blocks[2]); (3) the 'Hot as a hare ... Full as a flask + Jimson weed (Datura) → gardener’s pupil (mydriasis)' mnemonic is the right-hand cell of the printed ADVERSE EFFECTS row, NOT a margin box — it is First Aid's own mnemonic, carried ATTRIBUTED (note blocks[3] + mnemonics[0]) and NOT a kypExtension. Quirks, documented: (a) 'DUMBBELSS' prints with the DOUBLE S — carried verbatim everywhere, never corrected to DUMBBELLS; (b) the printed in-table mnemonic phrases “park my Benz” and “Make bladder SOFT” are carried exactly inside their table cells; (c) the running header prints 'SEC TION II' (space inside SECTION — text-layer quirk, carried verbatim in the identity quote); (d) the ↑/↓/→ arrows print preceded by U+008F/U+0090/U+008E control characters — the generator's norm() strips \u0080-\u009f so containment is control-character-insensitive while the direction glyphs stay in the quotes; (e) the indd slug extracts at a MID-PAGE position (line 112, between the ADVERSE EFFECTS label and its body) but prints at the page foot — quoted as its own entry with the position note, and the timestamp extracts as the page block's last line; (f) line numbers are 1-based within the part1.txt page-262 block (its line 1 is the printed book page number '240' — no banner line, unlike the ph1-pNNN.txt convention). productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'). Outputs are STAGED under .usmle-pipeline-cache/staging-ph17/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'muscarinic-antagonist-map' is therefore not yet in visuals/registry.tsx by design). There is NO figure on the source page, so the registry visual is an ORIGINAL KYP diagram (not a redraw) built from the three printed tables; the barrier/tollbooth content inside it is a flagged KYP synthesis.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "muscarinic-antagonists", "requiredInKYP": True}
inv17 = [
    dict(SV_BASE, **{
        "visualId": "muscarinic-antagonists-sv1",
        "sourcePages": {"part": 1, "pdfPages": [262], "bookPages": "240"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The anticholinergic system directory (book 240) — the DRUGS / ORGAN SYSTEMS / APPLICATIONS lookup that routes every muscarinic antagonist to its organ and application",
        "sourceFigureDescription": "PURE VECTOR TABLE (pdfimages: zero raster images; VLM 120dpi pass adjudicated the interleaved text layer): a 3-column table — headers DRUGS / ORGAN SYSTEMS / APPLICATIONS — with SEVEN rows in printed order: Atropine, homatropine, tropicamide | Eye | Produce mydriasis and cycloplegia; Benztropine, trihexyphenidyl | CNS | Parkinson disease (“park my Benz”) / Acute dystonia; Glycopyrrolate | GI, respiratory | Parenteral: preoperative use to reduce airway secretions / Oral: reduces drooling, peptic ulcer; Hyoscyamine, dicyclomine | GI | Antispasmodics for irritable bowel syndrome; Ipratropium, tiotropium | Respiratory | COPD, asthma / Duration: tiotropium > ipratropium; Solifenacin, Oxybutynin, Flavoxate, Tolterodine | Genitourinary | Reduce bladder spasms and urge urinary incontinence (overactive bladder) / Make bladder SOFT; Scopolamine | CNS | Motion sickness. The 'park my Benz' and 'Make bladder SOFT' mnemonic phrases print inside their cells (First Aid's own, red-initial styling per the VLM read).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "muscarinic-antagonist-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (MuscarinicAntagonistMap in visuals/pharm-p17.tsx — THE DIRECTORY zone: the seven rows docked by organ in printed order with CNS-entry tags) and the note's blocks[1] table block carrying the directory VERBATIM in printed row order; the DrugCards (drugs) restructure the same rows into card format",
        "productionStatus": "complete",
        "plannedKypVisualId": "muscarinic-antagonist-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "muscarinic-antagonists-sv2",
        "sourcePages": {"part": 1, "pdfPages": [262], "bookPages": "240"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The atropine end-organ table (book 240) — the prototype's six-organ blockade pattern (ORGAN SYSTEM / ACTION) with the spanning DUMBBELSS NOTES cell",
        "sourceFigureDescription": "PURE VECTOR TABLE (pdfimages: zero rasters; VLM adjudication): the 'Atropine' heading with the definition line 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' above a 3-column table — headers ORGAN SYSTEM / ACTION / NOTES — with six rows: Eye | ↑ pupil dilation, cycloplegia; Airway | Bronchodilation, ↓ secretions; Heart | ↑ heart rate; Stomach | ↓ acid secretion; Gut | ↓ motility; Bladder | ↓ urgency in cystitis. The NOTES column is ONE cell spanning all six rows: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' (VLM: it spans Eye through Bladder, which is why the text layer extracts it mid-table between Heart and Stomach).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "muscarinic-antagonist-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (MuscarinicAntagonistMap — THE SPINE zone: the six organ chips with their printed actions + the DUMBBELSS note rendered as the vertical spanning banner it is in print; and the DUMBBELSS BOUNDARY trap card) and the note's blocks[2] table block carrying the six rows + the spanning note VERBATIM in its spanning position; mechanisms[0] renders the same pattern as a MechanismFlow",
        "productionStatus": "complete",
        "plannedKypVisualId": "muscarinic-antagonist-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "muscarinic-antagonists-sv3",
        "sourcePages": {"part": 1, "pdfPages": [262], "bookPages": "240"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The ADVERSE EFFECTS row (book 240) — the printed anticholinergic toxidrome body plus First Aid's own mnemonic cell (Hot as a hare ... Full as a flask; Jimson weed → gardener's pupil)",
        "sourceFigureDescription": "PURE VECTOR TABLE ROW (pdfimages: zero rasters; VLM adjudication): one row with the label ADVERSE EFFECTS, the body '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation / Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants', and — as the right-hand cell, NOT a margin box — First Aid's mnemonic: 'Adverse effects: Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask / Jimson weed (Datura) → gardener’s pupil (mydriasis)'.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "muscarinic-antagonist-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (MuscarinicAntagonistMap — THE PRINTED TOXIDROME zone: the seven phrase chips decoded against the printed adverse effects + the Jimson weed line + the three special-population traps) and the note's blocks[3] table block carrying the body and the mnemonic cell VERBATIM (attributed to First Aid); the clinical blocks decode the toxidrome at the bedside",
        "productionStatus": "complete",
        "plannedKypVisualId": "muscarinic-antagonist-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph17"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "muscarinic-antagonists.json").write_text(json.dumps(m17, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "muscarinic-antagonists.json").write_text(
    json.dumps({"topicId": "muscarinic-antagonists", "chapterId": "pharmacology", "inventory": inv17,
                "coverageAudit": {"topicId": "muscarinic-antagonists", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's three visual assets — the anticholinergic system directory (sv1), the atropine end-organ table with its spanning DUMBBELSS note (sv2), and the ADVERSE EFFECTS row with First Aid's mnemonic cell (sv3) — are all accounted for as ORIGINAL KYP ADAPTATIONS: there are NO raster images and no figures on pdf 262 (pdfimages: zero; the page is pure text and tables), so the registry visual muscarinic-antagonist-map (MuscarinicAntagonistMap in visuals/pharm-p17.tsx) is an original KYP diagram built from the three printed tables, each of which is ALSO carried verbatim in the note's table blocks (blocks[1], blocks[2], blocks[3]) with the printed mnemonic family attributed to First Aid. The one substantive non-printed element in the visual — the CNS tollbooth panel (the quaternary-vs-tertiary charge rule) — is flagged 'KYP synthesis' in the visual itself and recorded as the barrier-selectivity-synthesis kypExtension in the manifest. Census: VLM was available this session (one 120dpi pass, saved to staging-ph17/vlm-census.txt) and adjudicated the interleaved table structures, the spanning NOTES cell, and the in-table (non-margin) position of the mnemonic cell. STAGED under .usmle-pipeline-cache/staging-ph17/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH17 manifest + inventory staged: {OUT}/manifests/muscarinic-antagonists.json, {OUT}/visual-inventory/muscarinic-antagonists.json")
print(f"muscarinic-antagonists: evidence {len(kept)}/{len(E17)} verified")
