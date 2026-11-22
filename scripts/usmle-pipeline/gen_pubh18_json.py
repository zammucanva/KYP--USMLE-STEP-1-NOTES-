#!/usr/bin/env python3
"""PUBH18 core-ethical-principles — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh18/ (the promotion step owns
content/). Source: LOWER portion of pdf page 290 / book 268 (Part 1) — a
PINNED PAGE-SPLIT. The page divides at the in-body subsection ribbon: the
UPPER portion (running header band + the "Pearson correlation coefficient"
block with its r-value scatter panels, raw lines 1-41) belongs to
correlation-coefficient (same batch, produced in parallel); THIS topic owns
raw lines 43-101 — from the in-body "▶ PUBLIC HEALTH SCIENCES—ETHICS" ribbon
to the footer timestamp. EVERY evidence quote below is a contiguous span of
raw lines 43-101; none crosses the boundary. The lower portion carries THREE
blocks, all owned: (1) the "Core ethical principles" table — a two-column
table (principle | definition), FOUR rows in printed order (Autonomy,
Beneficence, Nonmaleficence, Justice), every cell carried VERBATIM in the
note's first table block (blocks[1]); (2) the "Decision-making capacity"
table — the title cell (wrapping across two raw lines) plus five paragraphs
(physician-must-determine definition; irrevocability; not-exclusion-criteria;
capacity-vs-competency pair), carried VERBATIM in the note's second table
block; (3) the "Four major components of decision-making:" panel — four
blue-square-bulleted items (Understanding, Appreciation, Reasoning,
Expressing a choice, each with its printed parenthetical question), carried
VERBATIM in the same table block. PRINTED GEOMETRY (pinned by pdftotext
-bbox): the four-components panel prints SIDE BY SIDE with the
Decision-making capacity table — capacity text x~181-375, components panel
x~388-590, both starting y~574 — NOT below it. Census (pdfimages -list on
pdf 290): ZERO raster images — pure text, two tables, one bulleted panel,
the indd footer slug. VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE
full-page pass, staging-pubh18/vlm-census.txt), confirming: the ETHICS
ribbon prints on a solid teal/navy band BELOW the Pearson correlation figure
(split boundary confirmed) and the banner text also prints in the running
header (the banner prints TWICE); "Core ethical principles" is a blue bold
table title with the four principle names bold blue/navy in the left column,
thin hairline rules between rows, no shading; "Principle of double effect"
prints bold; the "not" in "are not exclusion criteria" prints italic; the
four components' bullets are small BLUE SQUARES (extracting in the text
layer as a \\x83 control byte + the quadrant glyph, a text-layer artifact
stripped by normalization); NO red text, mnemonics, margin notes, asterisk
footnotes, or images anywhere in the lower portion. ADJUDICATIONS,
documented in the census file and the manifest notes: (A) the pinned split
starts at the IN-BODY ribbon (raw line 43) — the running-header banner
instance (raw line 10) sits in the shared header band owned by the upper
topic and is NOT quoted, keeping every quote inside the boundary; (B) the
batch brief's block description matched the print exactly (four principle
rows, the five capacity paragraphs, the four components) — no correction;
(C) the VLM pass transcribed the last component's question as "what would
you like to do to do?" — a duplication error; the pdftotext text layer
reads "what would you like to do?" (raw lines 98-99) — TEXT LAYER GOVERNS;
(D) the printed sentence "Traditionally, patient interest supersedes."
follows TWO named conflicts; read with its parentheticals, the autonomy
conflict is resolved by "an informed patient has the right to decide" and
the supersede rule most directly resolves the SOCIETY conflict. Printed
quirks carried + documented: the banner's triangle glyph and em-dash;
"Decision-making capacity" wraps across two lines in its title cell; curly
quotes/apostrophes as printed ("Do good." / "Do no harm." / patient's); the
em-dash in "Principle of double effect-facilitating" as printed; the indd
footer slug "FAS1_2026_06-PubHealth.indd 268" extracts MID-BLOCK in the raw
order (raw line 87, between the capacity table and the four-components
panel) although it prints at the bottom-left corner (bbox y~836) — the
evidence range quotes it in its raw extraction position, printed position
bbox-pinned. Nothing is reproduced: both tables are ORIGINAL KYP
ADAPTATIONS in ONE registry visual (ethics-principles-map,
EthicsPrinciplesMap in visuals/pubhealth-p18.tsx, viewBox 0 0 1102 1290) —
the principles table re-drawn as four PILLARS (with the double-effect
callout on Beneficence), the capacity block re-composed as the
capacity-vs-competency SEE-SAW plus the four-components STRIP (KYP's
re-arrangement of the printed side panel, labeled as such) — and the full
text of both tables is additionally carried VERBATIM in the note's two
table blocks. DrugCards: none — the page prints principles and capacity
rules, not drug rows (the opioid mention is an example inside beneficence's
double-effect sentence, carried in the note's clinical block; folded by
absence)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 434 and pages[-1].strip() == "": pages.pop()
L = {290: pages[289].split("\n")}
P = {290: norm(pages[289])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "268 (lower)"},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on the pinned page's lower portion (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("BOUNDARY + BLOCK 1 opener — the in-body subsection ribbon '▶ PUBLIC HEALTH SCIENCES—ETHICS' (the pinned page-split's start; the Pearson correlation coefficient block above, raw lines 1-41, belongs to correlation-coefficient) and the block title 'Core ethical principles'. QUIRK: the banner text also prints in the running header (raw line 10, the shared header band) — the banner prints TWICE; the in-body ribbon is this topic's opener and the running-header instance is NOT quoted (quotes stay inside the boundary)", rng(290, 43, 44), [290]),
    ("BLOCK 1, ROW 1 — Autonomy: obligation to respect patients as individuals (truth-telling, confidentiality), to create conditions necessary for autonomous choice (informed consent), and to honor their preference in accepting or not accepting medical care", rng(290, 45, 49), [290]),
    ("BLOCK 1, ROW 2 — Beneficence: 'Do good.'; the special ethical (fiduciary) duty to act in the patient's best interest; the two collisions (autonomy — an informed patient has the right to decide; society — eg, mandatory TB treatment, traditionally patient interest supersedes) and the PRINCIPLE OF DOUBLE EFFECT — facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care (em-dash as printed)", rng(290, 51, 57), [290]),
    ("BLOCK 1, ROW 3 — Nonmaleficence: 'Do no harm.'; must be balanced against beneficence; if the benefits outweigh the risks, a patient may make an informed decision to proceed (most surgeries and medications fall into this category)", rng(290, 59, 62), [290]),
    ("BLOCK 1, ROW 4 — Justice: to treat persons fairly and equitably; this does not always imply equally (eg, triage)", rng(290, 64, 66), [290]),
    ("BLOCK 2 opener — the 'Decision-making capacity' table title (wrapping across two raw lines, a printed line-wrap carried) and the definition paragraph: the physician must determine whether the patient is psychologically and legally capable of making a particular healthcare decision", rng(290, 68, 73), [290]),
    ("BLOCK 2, the two guardrail paragraphs — decisions made with capacity cannot be revoked simply if the patient later loses capacity; intellectual disabilities and mental illnesses are not exclusion criteria unless the patient's condition presently impairs their ability to make healthcare decisions (the print's italic 'not'; curly apostrophe in patient's as printed)", rng(290, 74, 79), [290]),
    ("BLOCK 2, the capacity-vs-competency pair — capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care); competency is determined by a judge (eg, legally unable to make any healthcare-related decision)", rng(290, 80, 85), [290]),
    ("The indd footer slug 'FAS1_2026_06-PubHealth.indd 268' — QUIRK: it extracts MID-BLOCK in the raw order (between the capacity table and the four-components panel, raw line 87) although it prints at the bottom-left corner (pdftotext -bbox y≈836); the evidence range preserves the raw extraction position and the printed position is bbox-pinned", rng(290, 87, 87), [290]),
    ("BLOCK 3 — the 'Four major components of decision-making:' panel (printed BESIDE the capacity table, bbox-pinned x≈388-590 vs the capacity text x≈181-375, both starting y≈574): Understanding, Appreciation, Reasoning, Expressing a choice, each with its printed parenthetical question. QUIRK: the bullets extract as a \\x83 control byte + the ▘ quadrant glyph (the print's small blue square bullets; the control byte is a text-layer artifact stripped by normalization)", rng(290, 89, 99), [290]),
    ("The print footer timestamp — 12/16/25 12:46 PM (page identity, book 268; the page end of the pinned lower portion)", rng(290, 101, 101), [290]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"core-ethical-principles: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "core-ethical-principles", "title": "Core Ethical Principles and Decision-Making Capacity",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Ethics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [290], "bookPages": "268 (lower)"},
    "sourceEvidence": kept, "visualIds": ["ethics-principles-map"],
    "mechanismIds": ["principle-conflict-map", "capacity-assessment-flow"],
    "kypExtensions": [
        {"id": "principle-conflict-grammar",
         "summary": "The four-pillar grammar of the printed Core ethical principles table: AUTONOMY read through its three printed verbs (respect — truth-telling, confidentiality; create — informed consent; honor — accepting or NOT accepting care) as the HINGE principle, plus the collision resolution ladder — beneficence vs autonomy resolves 'an informed patient has the right to decide'; beneficence vs society (eg, mandatory TB treatment) resolves 'traditionally, patient interest supersedes'; risk vs benefit resolves through the informed patient proceeding ('most surgeries and medications fall into this category'); comfort vs side effects at end of life resolves through the principle of double effect; justice overlays distribution ('does not always imply equally (eg, triage)').",
         "origin": "outside-first-aid", "rationale": "The source prints the four definitions in parallel; the hinge reading, the three-verb decomposition of autonomy, the conflict-ladder organization, and the 'name the collision, apply the printed rule' protocol are KYP's synthesis.",
         "location": "core.keyIdea MOVE 1 + mechanisms[0] principle-conflict-map + blocks[3] the decoder list block + the registry visual's Zone A pillars"},
        {"id": "capacity-competency-frame",
         "summary": "The capacity-vs-competency see-saw: capacity = CLINICAL (a physician, at the bedside, for ONE specific healthcare-related decision, eg, to refuse medical care) vs competency = LEGAL (a judge, a GLOBAL ruling — legally unable to make any healthcare-related decision), plus the two guardrails read as wrong-answer killers — decisions made with capacity cannot be revoked simply if the patient later loses capacity (durability runs forward only), and diagnoses (intellectual disabilities, mental illnesses) are not exclusion criteria unless the condition presently impairs (test the patient, not the chart).",
         "origin": "outside-first-aid", "rationale": "The source prints the five paragraphs; the clinical-vs-legal framing, the decision-specificity emphasis, the 'guardrail' naming, and the forum/scope discriminator are KYP's organization.",
         "location": "core.keyIdea MOVE 2 + mechanisms[1] capacity-assessment-flow + blocks[4] the compare block + the registry visual's Zone B see-saw and guardrail strip"},
        {"id": "four-question-protocol",
         "summary": "The U-ARE bedside protocol: the printed four components (Understanding, Appreciation, Reasoning, Expressing a choice) sequenced as an ordered assessment — facts first, personalization second, comparison third, output last — with the rule that all four present → capacity for THIS decision and any one absent → impaired for that decision; the funnel framing (a patient can fail at any level while passing earlier ones) is KYP's.",
         "origin": "outside-first-aid", "rationale": "The source prints the four components and their questions as a side panel; the ordered protocol, the pass/fail rule, and the funnel framing are KYP's design.",
         "location": "mechanisms[1] gate-components node + blocks[5] the steps block + the registry visual's Zone C strip + mnemonics[1] U-ARE"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the informed-refusal beneficence-vs-autonomy stem, the mandatory-TB beneficence-vs-society stem, the end-of-life opioid double-effect stem, the schizophrenia-refusal capacity-vs-competency stem), 4 traps (capacity vs competency; autonomy vs beneficence; diagnosis vs incapacity; nonmaleficence vs a risk veto), 3 pivots (chart-to-bedside on a psychiatric diagnosis; the yesterday-capable/today-confused irrevocability pivot; the judge/legally scope pivot), and 9 recall cards covering all three blocks.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the principles and capacity rules only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: the page prints NO mnemonics of its own (VLM-confirmed — no red text, margin notes, or hooks in the lower portion; the mottos 'Do good.' and 'Do no harm.' are the Beneficence and Nonmaleficence openers, not mnemonics), so all FOUR codes are KYP originals, marked as such: 'A BRIGHT NEW JUDGE' (the four principles in printed order — Autonomy, Beneficence, Nonmaleficence, Justice), 'U-ARE' (Understanding, Appreciation, Reasoning, Expressing a choice), 'CAPACITY IS CLINICAL, COMPETENCY IS COURT' (physician/one decision vs judge/any decision), and 'COMFORT FIRST, PATIENT FIRST' (the double effect + the supersede rule).",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on the lower portion of pdf 290 (pdfimages + VLM census, staging-pubh18/vlm-census.txt); all four ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the visual's Zone C KYP-rule line"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "PINNED PAGE-SPLIT (the pubh8 '260 (lower)' convention): pdf 290 / book 268 is split between two topics — the LOWER portion (raw lines 43-101, from the in-body '▶ PUBLIC HEALTH SCIENCES—ETHICS' ribbon to the footer timestamp) is THIS topic; the upper portion (raw lines 1-41: the running header band + the 'Pearson correlation coefficient' block with its r-value scatter panels) belongs to correlation-coefficient (same batch, produced in parallel). EVERY evidence quote in this manifest is a contiguous span of raw lines 43-101 — none crosses the boundary; the running-header banner instance (raw line 10) is deliberately NOT quoted. The lower portion carries THREE blocks, all owned: (1) the 'Core ethical principles' table — FOUR rows in printed order (Autonomy, Beneficence, Nonmaleficence, Justice), every cell carried VERBATIM in the note's table block (blocks[1]); (2) the 'Decision-making capacity' table — five paragraphs carried VERBATIM in blocks[2]; (3) the 'Four major components of decision-making:' panel — four items with their printed questions, carried VERBATIM in blocks[2]. PRINTED GEOMETRY (pdftotext -bbox + the VLM pass): the four-components panel prints SIDE BY SIDE with the capacity table (capacity text x≈181-375, panel x≈388-590, both starting y≈574), NOT below it — the registry visual's Zone C strip is KYP's re-arrangement of that side panel and is labeled as such. CENSUS (pdfimages -list on pdf 290): ZERO raster images; VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh18/vlm-census.txt): the ETHICS ribbon prints on a solid teal/navy band BELOW the Pearson correlation figure (split boundary confirmed) and the banner text also prints in the running header (twice on the page); 'Core ethical principles' is a blue bold table title with bold blue/navy principle names, hairline rules, no shading; 'Principle of double effect' prints bold; the 'not' in 'are not exclusion criteria' prints italic; the components' bullets are small BLUE SQUARES; NO red text, mnemonics, margin notes, asterisk footnotes, or images in the lower portion — so the note's four mnemonic codes are all KYP originals, marked as such. ADJUDICATIONS: (A) boundary — the split starts at the IN-BODY ribbon; the running-header banner instance belongs to the shared header band and is not quoted; (B) the brief's block description matched the print exactly — no correction; (C) the VLM transcribed the last component's question as 'what would you like to do to do?' — a duplication error; the text layer reads 'what would you like to do?' (raw lines 98-99) — TEXT LAYER GOVERNS; (D) 'Traditionally, patient interest supersedes.' is read in context — the autonomy conflict is resolved by its own parenthesis ('an informed patient has the right to decide') and the supersede rule most directly resolves the SOCIETY conflict. Quirks carried + documented: the banner's ▶ glyph and em-dash; 'Decision-making capacity' wraps across two lines in its title cell; curly quotes/apostrophes as printed; the em-dash in 'Principle of double effect—facilitating'; the indd slug extracts MID-BLOCK in the raw order (raw line 87, between the capacity table and the components panel) though it prints bottom-left (bbox y≈836) — the evidence range preserves the raw position; the components' bullets extract as a \\x83 control byte + the ▘ quadrant glyph (text-layer artifact stripped by normalization; the square bullet is the print's own). Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (principle-conflict-map, capacity-assessment-flow), a visual block + TWO verbatim table blocks + decoder list + compare block + steps block + exam callout + memory callout, a clinical block (the double effect, mandatory TB treatment, the standing refusal, diagnosis ≠ incapacity), 4 patterns, 4 traps, 3 pivots, 9 recall, 4 related (informed-consent, surrogates-confidentiality, challenging-scenarios, correlation-coefficient — all four public-health census topicIds; correlation-coefficient is the pinned split's sibling, produced in parallel), 4 crossLinks (psychiatry, pharmacology/opioids, infectious disease/TB, emergency medicine/triage), 4 mnemonics (all KYP originals, marked — the page prints none of its own), and a miniCase with 5 options (exactly 1 correct + 4 distractors, why/why-wrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints principles and capacity rules, not drug rows — the opioid mention is an example inside beneficence's double-effect sentence and is carried in the clinical block; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete'; the per-record INVENTORY productionStatus is 'complete'; (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh18/ — nothing is written into content/ (the chapter census, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'ethics-principles-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's TWO visual assets are implemented in ONE registry visual (ethics-principles-map, EthicsPrinciplesMap in visuals/pubhealth-p18.tsx, viewBox 0 0 1102 1290): the Core ethical principles table as an ORIGINAL KYP ADAPTATION (four pillars in printed order — capital band, printed definition, conflict chips, the double-effect callout on Beneficence, plinth) and the Decision-making capacity block + Four major components panel as an ORIGINAL KYP ADAPTATION (the capacity-vs-competency see-saw with the two guardrails + the four-components strip) — with both tables' full text ALSO carried verbatim in the note's two table blocks; (6) sourceRef discipline: the note's sourceRef 'First Aid 2026, Part 1 pp. 268 (lower) (Ethics: Core ethical principles; Decision-making capacity)' carries {bookPages} = '268 (lower)' character-for-character identical to this manifest's sourcePages.bookPages.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Ethics",
    "topicId": "core-ethical-principles", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "core-ethical-principles-sv1",
        "sourcePages": {"part": 1, "pdfPages": [290], "bookPages": "268 (lower)"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Core ethical principles table (book 268 lower): the ETHICS subsection's opening table — four principle rows (Autonomy, Beneficence, Nonmaleficence, Justice) with their printed definitions, conflicts, and the principle of double effect; the four principles every clinical-ethics vignette is built from",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages -list on pdf 290: zero raster images; VLM-read at 120dpi, staging-pubh18/vlm-census.txt — VLM available this session): the block prints under the in-body '▶ PUBLIC HEALTH SCIENCES—ETHICS' ribbon (solid teal/navy band; the banner text also prints in the running header) with the blue bold table title 'Core ethical principles', then FOUR rows in printed order — bold blue/navy principle names in the left column, thin hairline rules between rows, no shading, curly-quoted mottos: Autonomy → Obligation to respect patients as individuals (truth-telling, confidentiality), to create conditions necessary for autonomous choice (informed consent), and to honor their preference in accepting or not accepting medical care; Beneficence → 'Do good.' Physicians have a special ethical (fiduciary) duty to act in the patient's best interest. May conflict with autonomy (an informed patient has the right to decide) or what is best for society (eg, mandatory TB treatment). Traditionally, patient interest supersedes. Principle of double effect—facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care. ('Principle of double effect' prints bold); Nonmaleficence → 'Do no harm.' Must be balanced against beneficence; if the benefits outweigh the risks, a patient may make an informed decision to proceed (most surgeries and medications fall into this category); Justice → To treat persons fairly and equitably. This does not always imply equally (eg, triage).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "ethics-principles-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (EthicsPrinciplesMap in visuals/pubhealth-p18.tsx): the table re-drawn as FOUR PILLARS in PRINTED order, each with a capital band (principle name + motto), the printed definition verbatim, KYP conflict chips (Autonomy's three verbs RESPECT/CREATE/HONOR; Beneficence's COLLIDES WITH AUTONOMY / COLLIDES WITH SOCIETY chips; Nonmaleficence's BALANCED / RISK vs BENEFIT / THE CATEGORY chips; Justice's FAIR + EQUITABLE / NOT ALWAYS EQUAL chips), the PRINCIPLE OF DOUBLE EFFECT callout on the Beneficence pillar, and a plinth band; the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block (blocks[3]), and recall[0-6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "ethics-principles-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "core-ethical-principles-sv2",
        "sourcePages": {"part": 1, "pdfPages": [290], "bookPages": "268 (lower)"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The Decision-making capacity block and the Four major components panel (book 268 lower): the capacity table's five paragraphs (physician-must-determine definition, irrevocability, not-exclusion-criteria, capacity-vs-competency pair) with the four-components side panel (Understanding, Appreciation, Reasoning, Expressing a choice) — the gateway test that guards all four principles",
        "sourceFigureDescription": "TWO-COLUMN TABLE + BULLETED SIDE PANEL, no raster (pdfimages: zero raster images; geometry pinned by pdftotext -bbox coordinates + the VLM pass at 120dpi, staging-pubh18/vlm-census.txt): the 'Decision-making capacity' table prints with the title cell left (blue bold, wrapping across two lines) and five paragraphs right — Physician must determine whether the patient is psychologically and legally capable of making a particular healthcare decision; Note that decisions made with capacity cannot be revoked simply if the patient later loses capacity; Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient's condition presently impairs their ability to make healthcare decisions ('not' italic); Capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care); Competency is determined by a judge (eg, legally unable to make any healthcare-related decision). The 'Four major components of decision-making:' panel prints BESIDE the capacity table (capacity text x≈181-375, panel x≈388-590, both starting y≈574 — NOT below it), with small BLUE SQUARE bullets (extracting as a control byte + the ▘ quadrant glyph) and bold lead words: Understanding (what do you know about your condition/proposed procedure/treatment?); Appreciation (what does your condition mean to you? why do you think your doctor is recommending this course of treatment?); Reasoning (how are you weighing your options?); Expressing a choice (what would you like to do?). The indd footer slug extracts between the two blocks in the raw order though it prints bottom-left (documented quirk).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "ethics-principles-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zones B and C of the registry visual (EthicsPrinciplesMap in visuals/pubhealth-p18.tsx): Zone B re-composes the capacity table as the CAPACITY-vs-COMPETENCY SEE-SAW (capacity card: physician, psychologically and legally capable, specific decision eg to refuse medical care, DECISION-SPECIFIC and NOT-REVOKED chips; competency card: judge, legally unable to make any healthcare-related decision, the forum/scope tell) plus the GUARDRAIL strip (diagnosis is not destiny — the not-exclusion-criteria sentence); Zone C re-arranges the printed side panel as the four-components strip (numbered cards carrying each component's printed question with the ▘ bullet glyph) plus the KYP U-ARE rule line; both blocks' full text is ALSO carried verbatim in the note's table block (blocks[2]), core.what, the compare block (blocks[4]), the steps block (blocks[5]), and recall[6-8]",
        "productionStatus": "complete",
        "plannedKypVisualId": "ethics-principles-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh18"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "core-ethical-principles.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "core-ethical-principles.json").write_text(
    json.dumps({"topicId": "core-ethical-principles", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "core-ethical-principles", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The lower portion of book 268 carries TWO visual assets — the Core ethical principles table (sv1: FOUR rows in printed order, Autonomy through Justice, with the mottos, the two beneficence collisions, and the principle of double effect) and the Decision-making capacity table with the Four major components side panel (sv2: five capacity paragraphs + the four blue-square-bulleted components, printed SIDE BY SIDE per pdftotext -bbox) — both accounted for in ONE registry visual (ethics-principles-map, EthicsPrinciplesMap in visuals/pubhealth-p18.tsx, viewBox 0 0 1102 1290): the principles table as an ORIGINAL KYP ADAPTATION (Zone A, four pillars in printed order — capital band, printed definition verbatim, conflict chips, the double-effect callout on Beneficence, plinth) and the capacity block + components panel as an ORIGINAL KYP ADAPTATION (Zone B see-saw + guardrail strip; Zone C four-components strip — KYP's re-arrangement of the printed side panel, labeled as such); nothing is reproduced, and both tables' full text is additionally carried verbatim in the note's two table blocks. Census: zero raster images (pdfimages -list on pdf 290); VLM available this session — ONE 120dpi full-page glm-4.6v pass (staging-pubh18/vlm-census.txt) confirmed the split boundary (the ETHICS ribbon below the Pearson correlation figure, banner printing twice), the four principle rows and their blue bold names with hairline rules, the bold 'Principle of double effect', the italic 'not', the side-by-side capacity/components geometry, the blue square bullets, and the absence of mnemonics, red text, margin notes, and images. ADJUDICATION: the VLM's 'what would you like to do to do?' duplication in the last component — the text layer reads 'what would you like to do?' and GOVERNS. PINNED PAGE-SPLIT: the upper portion of book 268 (the Pearson correlation coefficient block) belongs to correlation-coefficient, produced in parallel — every quote here stays inside raw lines 43-101. STAGED under .usmle-pipeline-cache/staging-pubh18/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH18 manifest + inventory staged: {OUT}/manifests/core-ethical-principles.json, {OUT}/visual-inventory/core-ethical-principles.json")
print(f"core-ethical-principles: evidence {len(kept)}/{len(E1)} verified")
