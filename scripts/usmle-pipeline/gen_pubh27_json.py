#!/usr/bin/env python3
"""PUBH27 patient-safety-quality — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh27/ (the promotion step owns
content/). Source: FULL pdf page 300 / book 278 (Part 1) — the FINAL page of
the PUBLIC HEALTH SCIENCES chapter (pdf 301 opens SECTION III — High-Yield
Organ Systems) and the LAST page of the HEALTHCARE DELIVERY subsection (pdf
298-300, book 276-278); the topic owns the WHOLE page, which carries FOUR
blocks: (1) "Palliative care" — a label + text block (medical care aiming to
provide comfort, relieve suffering, and improve quality of life in patients
with complex or life-threatening illness regardless of their diagnosis or
prognosis; often concurrent with curative or life-prolonging treatment;
delivered by interdisciplinary team (eg, physicians, nurses, social workers)
in hospitals, outpatient clinics, or at home; Hospice care (end-of-life
care)—form of palliative care for patients with prognosis ≤6 months when
curative or life-prolonging treatment is no longer wanted or beneficial);
(2) "Types of medical errors" — the error-domain list + the disclosure rule
(medical errors should be disclosed to patients, independent of immediate
outcome (harmful or not)) + a FOUR-row table (Active error — frontline
operator, wrong IV pump dose programmed, immediate impact; Latent error —
processes indirect from operator, different types of IV pumps used within
same hospital, accident waiting to happen; Never event — identifiable,
serious, usually preventable, scalpel retained in a surgical patient's
abdomen, major error that should never occur, with Sentinel event—a never
event that leads to death, permanent harm, or severe temporary harm; Near
miss — unplanned event that does not result in harm but has the potential to
do so, pharmacist recognizes a medication interaction and cancels the order,
narrow prevention of harm that exposes dangers); (3) "Medical error analysis"
— a TWO-row table with printed column headers DESIGN / mETHODS (Root cause
analysis — retrospective approach, applied after failure event to prevent
recurrence, records + participant interviews (5 whys approach,
fishbone/cause-and-effect diagrams, process maps) to identify all the
underlying problems (process, people, environment, equipment, materials,
management); Failure mode and effects analysis — forward-looking approach,
applied before process implementation to prevent failure occurrence,
inductive reasoning, failure modes prioritized by probability of occurrence
and impact on patients); (4) "Causes of medical errors" — a TWO-row table
(Burnout — prolonged, excessive stress leading to emotional exhaustion,
depersonalization, leading to reduced professional efficacy; Fatigue —
sleep/rest deprivation resulting in cognitive impairment and decreased
attention to detail). Census (pdfimages): ZERO raster images and NO vector
figure — three hairline tables + label/text blocks; every table is an
ORIGINAL KYP ADAPTATION in ONE registry visual (patient-safety-map,
PatientSafetyMap in visuals/pubhealth-p27.tsx, viewBox 0 0 1102 1224: the
palliative-vs-hospice panel, the error-type quartet with every printed
example + the domain/disclosure strip, the RCA-vs-FMEA time-axis comparison,
and the burnout/fatigue causes strip). VLM AVAILABLE this session (glm-4.6v
at 120dpi, ONE full-page pass, staging-pubh27/vlm-census.txt): the four
blocks and their printed order confirmed; the Types of medical errors table
prints NO column headers and the Causes of medical errors table prints none
either, while Medical error analysis prints DESIGN / METHODS; section titles
and row labels print in dark navy with the inline lead-ins "Hospice care"
and "Sentinel event" also navy; the Medical error analysis table prints its
leading capitals in RED (the R of Root and of Retrospective, the F of
Failure and of Forward-looking — pixel-probed to the exact glyph extents,
the ONLY red on the page); hairline rules only (no zebra striping); NO
margin mnemonics, asterisk footnotes, images, or icons; the bottom third of
the page is white space above the footer (the chapter ends here).
ADJUDICATIONS: (A) the VLM transcribed "concurent" in the Palliative care
block — the text layer prints "concurrent" (raw line 17 + the layout pass);
the text layer governs; (B) the two header-less tables are carried in the
note with KYP-DESCRIPTIVE column labels over verbatim cells (documented),
while the Medical error analysis table's own DESIGN / mETHODS headers are
carried as extracted; (C) the brief's four-block description matched the
print exactly — no correction; (D) the red leading capitals are FA styling,
not mnemonics — documented, not counted among the mnemonics; (E) the page
prints NO mnemonics of its own — all four note mnemonics are KYP originals,
marked. Printed quirks carried + documented: "SEC TION II" header-space
extraction artifact (known, as-is); the subsection banner "▶ PUBLIC HEALTH
SCIENCES—HEALTHCARE DELIVERY" prints ONCE visually (running-header band) but
its text layer carries TWO overlapping copies offset ~2.6pt — the raw layer
interleaves them as "▶▶ PUBLIC / PUBLIC HEALTH / HEALTH SCIENCES—HEALTHCARE /
SCIENCES—HEALTHCARE DELIVERY / DELIVERY" (pdftotext -bbox: PUBLIC at x=334.075
AND x=336.714; DELIVERY at x=515.13 and x=517.77) — a doubled-text-layer
artifact, NOT two banner instances; unlike pdf 278 this page prints NO
in-body subsection ribbon (the subsection opened on pdf 298) and the banner
carries NO small-caps lowercase artifact; the column header extracts as
"mETHODS" (small-caps extraction artifact — the print is small-caps METHODS,
the same class as p278's "mEASURES/EXAmPLE"); the RCA METHODS cell prints
"fishbone/cause-and-effect diagrams" hyphenated across a line wrap, which
the raw layer merges to "cause-andeffect" (the note's verbatim table carries
the hyphenated print; the evidence range preserves the raw merge); the
"Medical error analysis" heading extracts AFTER its table body in the raw
layer (raw line 92) although it prints ABOVE the DESIGN/mETHODS header row
(bbox yMin 466.9 vs 482.8) — a jumbled-extraction-order quirk pinned by bbox
+ the VLM pass; "Types of medical errors" and "Failure mode and effects
analysis" wrap across two lines in their label cells; the curly apostrophe
in "surgical patient's abdomen" is as printed. Nothing is reproduced: all
three tables are ORIGINAL KYP ADAPTATIONS in ONE registry visual; the
Palliative care text block is not a textbook visual asset (no record) — its
sentences are carried verbatim in the note's blocks and as the visual's Zone
A panel. DrugCards: none — the page prints systems concepts, not drugs
(folded by absence; the clinical anchors are carried in the note's clinical
block)."""
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
L = {300: pages[299].split("\n")}
P = {300: norm(pages[299])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 278 (the FINAL page of the Public Health Sciences chapter; pdf 301 opens Section III), the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, and the subsection banner '▶ PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY' whose text layer carries TWO overlapping copies offset ~2.6pt (the raw layer interleaves them as '▶▶ PUBLIC / PUBLIC HEALTH / HEALTH SCIENCES—HEALTHCARE / SCIENCES—HEALTHCARE DELIVERY / DELIVERY' — a doubled-text-layer artifact, NOT two banner instances; this page prints NO in-body subsection ribbon, unlike pdf 278)", rng(300, 1, 11), [300]),
    ("BLOCK 1 part 1 — Palliative care: medical care aiming to provide comfort, relieve suffering, and improve quality of life in patients with complex or life-threatening illness regardless of their diagnosis or prognosis; often concurrent with curative or life-prolonging treatment (the VLM misread this as 'concurent' — the text layer prints 'concurrent' and governs; adjudicated)", rng(300, 13, 17), [300]),
    ("BLOCK 1 part 2 — delivered by interdisciplinary team (eg, physicians, nurses, social workers) in hospitals, outpatient clinics, or at home; Hospice care (end-of-life care)—form of palliative care for patients with prognosis ≤6 months when curative or life-prolonging treatment is no longer wanted or beneficial", rng(300, 18, 21), [300]),
    ("BLOCK 2 intro — the Types of medical errors heading (wraps across two lines in its label cell) + the error-domain list (patient identification, diagnosis, monitoring, healthcare-associated infection, medications, procedures, devices, documentation, handoffs) + the DISCLOSURE RULE: medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)", rng(300, 23, 28), [300]),
    ("BLOCK 2 ROW 1 — Active error: occurs at level of frontline operator (eg, wrong IV pump dose programmed) → immediate impact", rng(300, 30, 35), [300]),
    ("BLOCK 2 ROW 2 — Latent error: occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital) → accident waiting to happen", rng(300, 37, 43), [300]),
    ("BLOCK 2 ROW 3 — Never event: adverse event that is identifiable, serious, and usually preventable (eg, scalpel retained in a surgical patient's abdomen) → major error that should never occur; Sentinel event—a never event that leads to death, permanent harm, or severe temporary harm", rng(300, 45, 54), [300]),
    ("BLOCK 2 ROW 4 — Near miss: unplanned event that does not result in harm but has the potential to do so (eg, pharmacist recognizes a medication interaction and cancels the order) → narrow prevention of harm that exposes dangers", rng(300, 56, 63), [300]),
    ("BLOCK 3 part 1 — the Medical error analysis table's printed column headers DESIGN / mETHODS (the raw layer's lowercase 'm' is the small-caps extraction artifact — the print is small-caps METHODS; carried as extracted) + ROW 1 Root cause analysis: retrospective approach, applied after failure event to prevent recurrence; uses records and participant interviews (eg, 5 whys approach, fishbone/cause-andeffect diagrams — the print hyphenates 'cause-and-effect' across a line wrap and the raw layer merges it; documented — and process maps) to identify all the underlying problems (eg, process, people, environment, equipment, materials, management) that led to an error", rng(300, 65, 78), [300]),
    ("BLOCK 3 part 2 — ROW 2 Failure mode and effects analysis (the row label wraps across two lines): forward-looking approach, applied before process implementation to prevent failure occurrence; uses inductive reasoning to identify all the ways a process might fail and prioritizes them by their probability of occurrence and impact on patients", rng(300, 80, 90), [300]),
    ("BLOCK 3 heading + BLOCK 4 part 1 — the 'Medical error analysis' heading extracts AFTER its table body in the raw layer (raw line 92) although it prints ABOVE the DESIGN/mETHODS header row (bbox yMin 466.9 vs 482.8 — a jumbled-extraction-order quirk, pinned); then the Causes of medical errors heading and ROW 1 Burnout: prolonged, excessive stress leading to emotional exhaustion, depersonalization, leading to reduced professional efficacy", rng(300, 92, 98), [300]),
    ("BLOCK 4 part 2 + page footer — ROW 2 Fatigue: sleep/rest deprivation resulting in cognitive impairment and decreased attention to detail; then the indd footer slug 'FAS1_2026_06-PubHealth.indd 278' and the print timestamp 12/16/25 12:46 PM (page identity, book 278 — the chapter's last page: the bottom third of the printed page is white space above the footer)", rng(300, 100, 106), [300]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"patient-safety-quality: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "patient-safety-quality", "title": "Patient Safety: Medical Errors and Quality Improvement",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Healthcare Delivery", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [300], "bookPages": "278–278"},
    "sourceEvidence": kept, "visualIds": ["patient-safety-map"],
    "mechanismIds": ["error-classification-flow", "analysis-time-axis"],
    "kypExtensions": [
        {"id": "two-axis-classification",
         "summary": "The classification grammar for the printed error quartet: every error is located on two axes — WHERE it sits (the ACTIVE error occurs at level of frontline operator with immediate impact; the LATENT error occurs in processes indirect from operator — an accident waiting to happen; the printed IV-pump pair is the SAME device in both roles, the dose programmed wrong vs the mixed pump fleet) — and WHAT it did (the harm ladder: NEAR MISS, an unplanned event that does not result in harm but has the potential to do so → NEVER EVENT, identifiable, serious, usually preventable → SENTINEL EVENT, a never event that leads to death, permanent harm, or severe temporary harm — with the subset rule that every sentinel event IS a never event), closed by the outcome-independent disclosure rule (disclosed to patients, harmful or not).",
         "origin": "outside-first-aid", "rationale": "The source prints the four rows as parallel definitions; the two-axis grid, the harm-ladder ordering, the sentinel-subset rule, the outcome-sentence grade-decider, and the same-device reading of the IV-pump pair are KYP's synthesis.",
         "location": "core.keyIdea MOVES 1-4 + mechanisms[0] error-classification-flow + blocks[5] the steps block + usmle.traps + the registry visual's error quartet and ladder line"},
        {"id": "analysis-time-axis",
         "summary": "The time-axis framing of the printed Medical error analysis table: RCA REWINDS (retrospective approach, applied AFTER failure event to prevent recurrence — records + participant interviews, 5 whys, fishbone/cause-and-effect diagrams, process maps → all the underlying problems, grouped by KYP as 2 Ps (process, people), 2 Es (environment, equipment), 2 Ms (materials, management)) while FMEA FORECASTS (forward-looking approach, applied BEFORE process implementation — inductive reasoning, failure modes prioritized by probability of occurrence × impact on patients); plus the upstream framing of the printed causes (burnout and fatigue are what keep both tools busy — the impaired operator is how latent conditions become active errors, so wellness is a patient-safety intervention).",
         "origin": "outside-first-aid", "rationale": "The source prints the two rows and the two causes as separate facts; the shared timeline, the rewind/forecast arrows, the 2P-2E-2M grouping, the probability-×-impact risk-budget reading, and the causes-upstream synthesis are KYP's organization.",
         "location": "mechanisms[1] analysis-time-axis + blocks[6] the compare block + the registry visual's time-axis zone and 2P-2E-2M strip + the causes strip"},
        {"id": "palliative-hospice-boundary",
         "summary": "The four-question decoder for the printed Palliative care block: WHAT is it (comfort, relieve suffering, improve quality of life — regardless of diagnosis or prognosis); CAN IT RUN ALONGSIDE TREATMENT (often concurrent with curative or life-prolonging treatment — palliative is not hospice); WHO/WHERE (interdisciplinary team — physicians, nurses, social workers — hospitals, outpatient clinics, home); WHEN DOES IT BECOME HOSPICE (a form of palliative care for prognosis ≤6 months when curative treatment is no longer wanted or beneficial — the TIME gate AND the INTENT gate, both required; every hospice is palliative, not every palliative is hospice).",
         "origin": "outside-first-aid", "rationale": "The source prints the block as three sentences; the four-question arrangement, the two-gate reading of the hospice sentence, and the day-1 consult framing are KYP's.",
         "location": "blocks[2] the palliative decoder list + usmle.patterns[3] + usmle.pivots[2] + the registry visual's Zone A pair + mnemonics[3]"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the active/latent IV-pump stem, the retained-scalpel never/sentinel stem, the pre-implementation FMEA stem, the concurrent-with-cure palliative stem), 4 traps (active vs latent; never vs sentinel; near miss vs latent error — an event vs a condition; RCA vs FMEA), 3 pivots (the which-tool router on time position, the harm-grading fork, the goals-of-care two gates), a 5-option miniCase (the heparin-pump vignette routed to root cause analysis against FMEA, near-miss reporting, sentinel event review, and error disclosure) and 9 recall cards covering all four blocks.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions only; the attack structure, distractor shapes, and the layered vignette (one event carrying active + latent + never + sentinel grades plus the analysis question) are KYP's design.",
         "location": "usmle section + recall + clinical block"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: the page prints NO mnemonics of its own (VLM + pixel census, staging-pubh27/vlm-census.txt — no margin mnemonics anywhere on pdf 300; the red leading capitals on Root/Retrospective/Failure/Forward-looking are First Aid's STYLING, documented, not mnemonics) — so all four codes are KYP ORIGINALS, marked as such: 'ACTIVE ACTS, LATENT LURKS' (the where-axis pair with the IV-pump examples), 'NEVER EVENT, SENTINEL SEQUEL' (the harm ladder and the subset rule), 'RCA REWINDS, FMEA FORECASTS' (direction, timing, method, and the 2P-2E-2M problems), and 'PALLIATIVE PAIRS, HOSPICE HALTS' (any prognosis alongside cure vs ≤6 months with cure no longer wanted or beneficial).",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on the pinned page (VLM + pdfimages census) — the four ALL-CAPS codes are KYP's design, and the FA-own red-initial styling is documented as furniture rather than claimed as a mnemonic.",
         "location": "mnemonics + blocks[8] the memory callout + the visual's KYP tags"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 300 / book 278, the FINAL page of the Public Health Sciences chapter (pdf 301 opens SECTION III — High-Yield Organ Systems) and the LAST page of the HEALTHCARE DELIVERY subsection (pdf 298-300, book 276-278), carrying FOUR blocks — Palliative care (label + text, carried verbatim in the note's decoder list and core.what), Types of medical errors (the error-domain list + disclosure rule + a FOUR-row table carried VERBATIM in the note's table block, blocks[1]), Medical error analysis (a TWO-row table with printed headers DESIGN / mETHODS, carried verbatim in blocks[3]), and Causes of medical errors (a TWO-row table carried verbatim in blocks[4]). CENSUS (pdfimages): ZERO raster images and NO vector figure — three hairline tables; all three are ORIGINAL KYP ADAPTATIONS rebuilt in ONE registry visual (patient-safety-map, PatientSafetyMap in visuals/pubhealth-p27.tsx, viewBox 0 0 1102 1224: Zone A the palliative-vs-hospice pair, Zone B the error quartet + domain/disclosure strip, Zone C the RCA-vs-FMEA time axis with the 2P-2E-2M strip, Zone D the burnout/fatigue causes strip). VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh27/vlm-census.txt): the four blocks and printed order confirmed; the errors and causes tables print WITHOUT column headers (the note's table-block column labels for them are KYP-DESCRIPTIVE over verbatim cells — adjudicated) while Medical error analysis prints DESIGN / METHODS; section titles and row labels print in dark navy with the inline lead-ins 'Hospice care' and 'Sentinel event' also navy; the Medical error analysis table prints its leading capitals in RED (the R of Root and of Retrospective, the F of Failure and of Forward-looking — pixel-probed to the exact glyph extents, the ONLY red on the page; FA-own styling, documented, not a mnemonic); hairline rules only (no zebra striping); NO margin mnemonics, asterisk footnotes, images, or icons; the bottom third of the page is white space above the footer. ADJUDICATIONS: (A) the VLM transcribed 'concurent' in the Palliative care block — the text layer prints 'concurrent' (raw line 17 + the layout pass); the text layer governs and the note carries 'concurrent'; (B) header-less tables → KYP-descriptive column labels over verbatim cells (documented in the table blocks' intros/captions); (C) the brief's four-block description matched the print exactly — no correction; (D) red leading capitals = FA styling, not mnemonics; (E) no FA-own mnemonics on the page — all four note mnemonics are KYP originals, marked. Quirks carried + documented: 'SEC TION II' header-space artifact (known, as-is); the subsection banner prints ONCE visually (running-header band) but its text layer carries TWO overlapping copies offset ~2.6pt — the raw layer interleaves them as '▶▶ PUBLIC / PUBLIC HEALTH / HEALTH SCIENCES—HEALTHCARE / SCIENCES—HEALTHCARE DELIVERY / DELIVERY' (pdftotext -bbox: PUBLIC at x=334.075 AND x=336.714; DELIVERY at x=515.13 and x=517.77) — a doubled-text-layer artifact, NOT two banner instances; NO in-body subsection ribbon on this page (unlike pdf 278 — the Healthcare Delivery subsection opened on pdf 298) and no small-caps lowercase artifact in the banner; the column header extracts as 'mETHODS' (small-caps artifact — the print is small-caps METHODS; same class as p278's 'mEASURES/EXAmPLE'); the RCA METHODS cell prints 'fishbone/cause-and-effect diagrams' hyphenated across a line wrap, which the raw layer merges to 'cause-andeffect' (the note's verbatim table carries the hyphenated print; the evidence range preserves the raw merge); the 'Medical error analysis' heading extracts AFTER its table body in the raw layer though it prints above it (bbox yMin 466.9 vs 482.8 — jumbled extraction order, pinned); 'Types of medical errors' and 'Failure mode and effects analysis' wrap across two lines in their label cells; the curly apostrophe in 'surgical patient's abdomen' is as printed. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (error-classification-flow, analysis-time-axis), a visual block + THREE verbatim table blocks + the palliative decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the IV-pump pair, the retained scalpel, the pharmacist's catch, the wellness pair, the palliative/hospice consult), 4 patterns, 4 traps, 3 pivots, 9 recall, 4 related (disease-prevention-prophylaxis, insurance-payment-models, challenging-scenarios, informed-consent — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (all KYP originals, marked — the page prints none of its own), and a miniCase with 5 options (exactly 1 correct, why/why-wrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints systems concepts, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical anchors are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh27/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'patient-safety-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's THREE visual assets (the errors table, the DESIGN/mETHODS analysis table, the causes table) are all ORIGINAL KYP ADAPTATIONS in ONE registry visual — the Palliative care block is a text block, not a textbook visual asset, so it takes no inventory record; its sentences are carried verbatim in the note and as the visual's Zone A panel.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Healthcare Delivery",
    "topicId": "patient-safety-quality", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "patient-safety-quality-sv1",
        "sourcePages": {"part": 1, "pdfPages": [300], "bookPages": "278"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Types of medical errors table (book 278): FOUR rows — Active error, Latent error, Never event (with the Sentinel event definition), Near miss — each with its description cell and consequence cell; the page's core error taxonomy, under the printed error-domain list and the outcome-independent disclosure rule",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh27/vlm-census.txt — VLM available this session): the running header (book page 278, SEC TION II, PUBLIC HEALTH SCIENCES, the subsection banner '▶ PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY' printing once visually with a doubled text layer — two overlapping copies ~2.6pt apart, NOT two banner instances), the navy 'Types of medical errors' heading (wraps across two lines), the intro paragraph (errors may involve patient identification, diagnosis, monitoring, healthcare-associated infection, medications, procedures, devices, documentation, handoffs; medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)), then FOUR rows in printed order with navy row labels, NO printed column headers (nothing between the intro and the Active error row but a hairline rule — VLM-confirmed) and hairline row separators (no zebra striping): Active error → Occurs at level of frontline operator (eg, wrong IV pump dose programmed) → Immediate impact; Latent error → Occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital) → Accident waiting to happen; Never event → Adverse event that is identifiable, serious, and usually preventable (eg, scalpel retained in a surgical patient's abdomen) → Major error that should never occur. Sentinel event—a never event that leads to death, permanent harm, or severe temporary harm (the inline 'Sentinel event' lead-in prints navy); Near miss → Unplanned event that does not result in harm but has the potential to do so (eg, pharmacist recognizes a medication interaction and cancels the order) → Narrow prevention of harm that exposes dangers.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "patient-safety-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (PatientSafetyMap in visuals/pubhealth-p27.tsx): the error quartet as four numbered cards in PRINTED order, each carrying the printed definition, its printed example, and the consequence chip (IMMEDIATE IMPACT / ACCIDENT WAITING TO HAPPEN / MAJOR ERROR THAT SHOULD NEVER OCCUR / NARROW PREVENTION OF HARM THAT EXPOSES DANGERS), with the Never-event card's Sentinel-event sub-panel (death, permanent harm, or severe temporary harm + the subset rule), the harm-ladder line, and the domain/disclosure strip beneath; the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, mechanisms[0], the steps block (blocks[5]), and recall[4-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "patient-safety-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "patient-safety-quality-sv2",
        "sourcePages": {"part": 1, "pdfPages": [300], "bookPages": "278"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Medical error analysis table (book 278): column headers DESIGN / METHODS with TWO rows — Root cause analysis (retrospective, after the failure event) vs Failure mode and effects analysis (forward-looking, before implementation); the page's quality-improvement core and the exam's favorite tool-identification pair",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh27/vlm-census.txt — VLM available this session): the navy 'Medical error analysis' heading prints ABOVE the DESIGN/METHODS header row (bbox yMin 466.9 vs 482.8) though the raw text layer extracts the heading AFTER the table body (a jumbled-extraction-order quirk); the header row prints DESIGN / METHODS in small caps (the raw layer's lowercase 'm' in 'mETHODS' is the small-caps extraction artifact, the same class as p278's 'mEASURES/EXAmPLE'); then TWO rows with navy row labels whose leading capitals print in RED (the R of Root and of Retrospective, the F of Failure and of Forward-looking — pixel-probed to the exact glyph extents, the ONLY red on the page; FA-own styling): Root cause analysis → Retrospective approach. Applied after failure event to prevent recurrence. → Uses records and participant interviews (eg, 5 whys approach, fishbone/cause-and-effect diagrams — hyphenated across a line wrap in print; the raw layer merges it to 'cause-andeffect' — process maps) to identify all the underlying problems (eg, process, people, environment, equipment, materials, management) that led to an error; Failure mode and effects analysis (the label wraps across two lines) → Forward-looking approach. Applied before process implementation to prevent failure occurrence. → Uses inductive reasoning to identify all the ways a process might fail and prioritizes them by their probability of occurrence and impact on patients. Hairline rules only; no zebra striping; no margin notes or icons.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "patient-safety-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone C of the registry visual (PatientSafetyMap in visuals/pubhealth-p27.tsx): the two rows re-laid on a shared BEFORE IMPLEMENTATION → LIVE PROCESS → FAILURE EVENT time axis — the green forward arrow (FMEA forecasts — applied BEFORE implementation) vs the emergency rewind arrow (RCA rewinds — applied AFTER the failure event) — with both rows' DESIGN and METHODS text carried verbatim in the two cards (FORWARD-LOOKING APPROACH / RETROSPECTIVE APPROACH chips, the 5 whys / fishbone/cause-and-effect diagrams / process maps inventory, the probability × impact prioritization) and the 2P-2E-2M strip for RCA's six underlying problems; the table's full text is ALSO carried verbatim in the note's table block (blocks[3]), the compare block (blocks[6]), mechanisms[1], and recall[7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "patient-safety-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "patient-safety-quality-sv3",
        "sourcePages": {"part": 1, "pdfPages": [300], "bookPages": "278"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Causes of medical errors table (book 278): TWO rows — Burnout and Fatigue — the page's final block, printing the two human causes that keep the analysis tools busy",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh27/vlm-census.txt — VLM available this session): the navy 'Causes of medical errors' heading, then TWO rows with navy row labels and NO printed column headers (VLM-confirmed), hairline rules only: Burnout → Prolonged, excessive stress leading to emotional exhaustion, depersonalization, leading to reduced professional efficacy; Fatigue → Sleep/rest deprivation resulting in cognitive impairment and decreased attention to detail. The print places this block LAST — after the analysis tools — so the page's arc is errors → analysis → causes; the bottom third of the page below it is white space above the footer (the chapter's final page).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "patient-safety-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone D of the registry visual (PatientSafetyMap in visuals/pubhealth-p27.tsx): the burnout and fatigue cards with their printed chains (stress → exhaustion + depersonalization → lost efficacy; deprivation → impaired cognition + lost detail — KYP chain tags) under the causes-strip title, plus the KYP synthesis line (wellness is a patient-safety intervention — the impaired operator is how latent conditions become active errors); the table's full text is ALSO carried verbatim in the note's table block (blocks[4]), core.what, mechanisms[1]'s causes node, the clinical block, and recall[8]",
        "productionStatus": "complete",
        "plannedKypVisualId": "patient-safety-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh27"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "patient-safety-quality.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "patient-safety-quality.json").write_text(
    json.dumps({"topicId": "patient-safety-quality", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "patient-safety-quality", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries THREE visual assets, all tables — the Types of medical errors table (sv1: FOUR rows, Active error / Latent error / Never event with Sentinel event / Near miss, printed WITHOUT column headers), the Medical error analysis table (sv2: printed column headers DESIGN / METHODS, TWO rows — Root cause analysis vs Failure mode and effects analysis), and the Causes of medical errors table (sv3: TWO rows, Burnout and Fatigue, printed WITHOUT column headers) — all accounted for in ONE registry visual (patient-safety-map, PatientSafetyMap in visuals/pubhealth-p27.tsx, viewBox 0 0 1102 1224) as ORIGINAL KYP ADAPTATIONS: Zone B the error quartet + the domain/disclosure strip, Zone C the RCA-vs-FMEA time axis with the 2P-2E-2M strip, Zone D the burnout/fatigue causes strip; nothing is reproduced, and every table's full text is additionally carried verbatim in the note's table blocks. The Palliative care block is a label + TEXT block, not a textbook visual asset (no rules, no rows — it takes no inventory record); its sentences are carried verbatim in the note (blocks[2], core.what) and adapted as the registry visual's Zone A panel. Census: zero raster images and NO vector figure (pdfimages — the page is pure text + three hairline tables); VLM available this session — ONE 120dpi full-page glm-4.6v pass (vlm-census.txt) confirmed the four blocks and their order, the two header-less tables vs the DESIGN/METHODS headers, the navy labels with inline navy 'Hospice care' and 'Sentinel event', the RED leading capitals on Root/Retrospective/Failure/Forward-looking (pixel-probed — the only red on the page; FA styling, not a mnemonic), hairline rules only, and the absence of margin mnemonics, footnotes, images, and icons. ADJUDICATIONS: the VLM's 'concurent' misread corrected to the text layer's 'concurrent' (print governs); the note's table blocks for the two header-less tables use KYP-descriptive column labels over verbatim cells (documented). FULL single page, the LAST of Public Health Sciences (pdf 301 opens Section III). STAGED under .usmle-pipeline-cache/staging-pubh27/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH27 manifest + inventory staged: {OUT}/manifests/patient-safety-quality.json, {OUT}/visual-inventory/patient-safety-quality.json")
print(f"patient-safety-quality: evidence {len(kept)}/{len(E1)} verified")
