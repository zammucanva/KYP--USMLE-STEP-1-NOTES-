#!/usr/bin/env python3
"""PUBH22 cultural-competence-interviewing — manifest + inventory (Public
Health batch 2), STAGED under .usmle-pipeline-cache/staging-pubh22/ (the
promotion step owns content/). Source: FULL pdf page 294 / book 272 (Part 1)
— the THIRD page of the PUBLIC HEALTH SCIENCES—COMMUNICATION SKILLS
subsection (pdf 293/book 271 closes the patient-centered interviewing page
with the disabilities communication rules; pdf 295/book 273 opens "Use of
interpreters"). The topic owns the WHOLE page, which carries FOUR
blue-headed pure-text blocks in a table-style two-column layout: (1)
"Cultural formulation interview" — FIVE moves, each opening with the
printed bold lead-in "Identify" (problem through the patient's perspective;
cultural perceptions of factors; background influences incl. family,
community, spirituality; impact on current and future interventions incl.
the COMBINE-their-plans-with-the-standard-regimen rule; possible barriers
to care based on culture incl. the patient-physician-relationship probe);
(2) "Trauma-informed care" — thorough behavioral health screenings (mood,
substance use, social supports, suicide risk), focus on trauma-related
symptoms interfering with social and occupational function, empathy,
permission prior to discussion, no invasive detail, the pre-exam
signal-to-end rule, additional staff, counseling offered/advised, and First
Aid's OWN "Remember 4 R's: Realize, Recognize, Respond, Resist
retraumatization."; (3) "Motivational interviewing" — resolve ambivalence
(some desire required, commitment not; eg, nicotine dependence, obesity),
examine the behavior, assess barriers (eg, food access, untreated trauma),
readiness for change guides physician-suggested goals, SMART = Specific,
Measurable, Achievable, Relevant, Time bound (First Aid's OWN); (4)
"Gender- and sexuality-inclusive history taking" — no assumptions
(orientation/identity/expression/behavior independent), "partner" not
"husband"/"wife" until instructed otherwise, assigned sex at birth and
gender identity may differ, the hand-laceration relevance gate, pronouns
stated and asked, correct name/pronouns in the EMR, confidentiality,
trust built over time. Census (pdfimages): ZERO raster images — four
pure-text blocks + the indd footer slug; every block is an ORIGINAL KYP
ADAPTATION. VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page
pass, staging-pubh22/vlm-census.txt), confirming: the four headings and
every sentence exactly as the text layer reads them (none missing or
extra); the five "Identify" openers print in BOLD; the 4 R's sentence
prints with "4 R's" bold black and the R initials in RED bold; the SMART
sentence prints with the S/M/A/R/T initials in RED bold and "(SMART)" bold
black — both First Aid's OWN, carried VERBATIM and ATTRIBUTED; NO bullet
glyphs (the moves print as sentence-clusters/indented paragraphs); NO
margin mnemonics, asterisk footnotes, images, figures, or tables; the
Communication Skills banner prints ONCE (running header only — a
continuation page). ADJUDICATIONS, documented in the census file and the
manifest notes: (A) the task brief's block descriptions matched the print
exactly (five Identify moves, the trauma rules with the 4 R's, the MI arc
with SMART, the inclusive-history rules) — no correction needed; (B) the
4 R's and SMART ARE marked in print (red bold initials) — both carried as
FIRST AID'S OWN, attributed, and counted as two of the four mnemonics;
the two KYP originals ("PROBLEM, PERCEPTION, BACKGROUND, PLAN, BARRIERS"
and "PERMISSION, SIGNAL, SUPPORT") are marked as KYP's; (C) the VLM pass
describes the page furniture as a "four-row table-style layout" with thin
rules — the page prints NO true table or figure, so the four blocks are
inventoried as four ORIGINAL_KYP_ADAPTATION text-block records (not
reproductions of print artwork). Printed quirks carried + documented:
"SEC TION II" header-space extraction artifact (known, as-is); the
small-caps banner artifact "COmmUNICATION SkILLS" (the 'm' and 'k' drop
to lowercase in extraction — carried as extracted); the block D heading
"Gender- and sexuality-inclusive history taking" wraps across lines in
print, breaking after the compound's own hyphen ("Gender- and sexuality-"
/ "inclusive history" / "taking" per the VLM pass) — the raw text layer
merges the hyphenated compound to "sexualityinclusive" (raw line reads
"Gender- and sexualityinclusive history" / "taking"); the note's verbatim
table carries the hyphenated print form and the merge is documented
(evidence range 13 preserves the RAW merged form — a quote must be a
contiguous text-layer span); the block A and block C headings wrap across
two lines ("Cultural formulation"/"interview";
"Motivational"/"interviewing"); the "she/her pronouns" example wraps
"she/" / "her" across raw lines (the slash survives; documented); the
curly-quoted apostrophes and double-quoted examples are as printed.
Nothing is reproduced: all four blocks are ORIGINAL KYP ADAPTATIONS
re-laid-out in ONE registry visual (cultural-interviewing-map,
CulturalInterviewingMap in visuals/pubhealth-p22.tsx, viewBox 0 0 1102
1150 — a descending five-step staircase, the trauma-informed panel with
the 4 R's strip, the MI arc with the SMART bar, and the inclusive-history
checklist strip); the full page is additionally carried VERBATIM in the
note's table block. DrugCards: none — the page prints interviewing
technique, not drugs (folded by absence; the clinical examples — nicotine
dependence, obesity, food access, untreated trauma, the trauma screening
set, the hand-laceration and she/her-pronouns examples — are carried in
the note's clinical block)."""
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
L = {294: pages[293].split("\n")}
P = {294: norm(pages[293])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 272, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, and the subsection banner '▶ PUBLIC HEALTH SCIENCES—COmmUNICATION SkILLS' printing ONCE (running header only — this is a continuation page; the small-caps 'm'/'k' artifacts carried as extracted)", rng(294, 1, 7), [294]),
    ("BLOCK A heading (wraps across two lines in the left column) + MOVE 1 — Identify the problem through the patient's perspective; ask the patient to describe the problem in their own words, or how the patient would describe the problem to their family and friends", rng(294, 9, 13), [294]),
    ("MOVE 2 — Identify cultural perceptions of factors leading to a problem; ask the patient to explain why they think they are experiencing their problem", rng(294, 14, 15), [294]),
    ("MOVE 3 — Identify how the patient's background influences their problem; ask what makes the problem better or worse; investigate roles of family, community, and spirituality", rng(294, 16, 17), [294]),
    ("MOVE 4 — Identify how culture may impact current and future interventions; concerns or suggestions about the current plan of treatment; if they do not want to follow medical advice, investigate if there is a way to combine their plans with the standard medical regimen", rng(294, 18, 20), [294]),
    ("MOVE 5 — Identify possible barriers to care based on culture; anything that would prevent them from seeking care in a standard medical institution; probe for explanations and what may increase the chance of maintaining a good patient-physician relationship", rng(294, 21, 23), [294]),
    ("BLOCK B heading + the screening rule — Patients with history of psychological trauma should receive thorough behavioral health screenings; regularly assess mood, substance use, social supports, and suicide risk", rng(294, 25, 28), [294]),
    ("The assessment-focus and interaction rules — focus assessments on trauma-related symptoms that interfere with social and occupational function; always be empathetic; do not ask invasive questions requiring the patient to describe trauma in detail; ask permission prior to discussion", rng(294, 29, 31), [294]),
    ("The exam-signal and support rules + First Aid's OWN mnemonic — before the physical exam, reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort; offer the presence of additional staff for support; psychological counseling may be indicated; follow-up counseling is offered (or advised) as appropriate; Remember 4 R's: Realize, Recognize, Respond, Resist retraumatization (the R initials print in RED bold per the VLM pass — carried attributed)", rng(294, 32, 35), [294]),
    ("BLOCK C heading (wraps across two lines) + the definition and candidacy rule — counseling technique to facilitate behavior modification by helping patients resolve ambivalence about change; useful for many conditions (eg, nicotine dependence, obesity); helpful when patient has some desire to change, but it does not require that the patient be committed to making the change", rng(294, 37, 42), [294]),
    ("The MI moves — ask patients to examine how their behavior interferes with their life or why they might want to change it; assess barriers (eg, food access, untreated trauma) that may make behavior change difficult", rng(294, 43, 45), [294]),
    ("Readiness + First Aid's OWN mnemonic — assessing a patient's readiness for change is also important for guiding physician-suggested goals; these goals should be Specific, Measurable, Achievable, Relevant, and Time bound (SMART) (the S/M/A/R/T initials print in RED bold per the VLM pass — carried attributed)", rng(294, 46, 47), [294]),
    ("BLOCK D heading (RAW merged form 'Gender- and sexualityinclusive history / taking' — the print breaks after the compound's own hyphen, 'Gender- and sexuality-' / 'inclusive history' / 'taking'; the hyphenated print form 'sexuality-inclusive' is carried in the note and the merge is documented) + the no-assumptions rule with the printed example, the gender-neutral-terms rule ('partner' rather than 'husband' or 'wife'), the assigned-sex-at-birth vs gender-identity rule, and the relevance gate (a gender-nonconforming patient seeking care for a hand laceration)", rng(294, 49, 58), [294]),
    ("The pronoun exchange and EMR rule — consider stating what pronouns you use when you introduce yourself (eg, 'I'm Dr. Smith, and I use she/her pronouns' — 'she/her' wraps across raw lines, the slash survives) and asking patients how they would like to be addressed; ensuring correct name and pronouns are in the electronic medical record", rng(294, 59, 61), [294]),
    ("The confidentiality and trust rules — reassure them about the confidentiality of their visits and be sensitive to the fact that patients may not be open about their sexual orientation or gender identity to others in their life; Remember: trust is built over time, and listening to and learning from patients about how they would like to approach the topics discussed above is key", rng(294, 62, 65), [294]),
    ("The print footer slug and timestamp — FAS1_2026_06-PubHealth.indd 272, 12/16/25 12:46 PM (page identity, book 272)", rng(294, 67, 69), [294]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"cultural-competence-interviewing: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "cultural-competence-interviewing", "title": "Cultural Formulation, Trauma-Informed Care, and Motivational Interviewing",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Communication Skills", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [294], "bookPages": "272–272"},
    "sourceEvidence": kept, "visualIds": ["cultural-interviewing-map"],
    "mechanismIds": ["cultural-formulation-flow", "ambivalence-to-smart-arc"],
    "kypExtensions": [
        {"id": "five-moves-staircase",
         "summary": "The staircase grammar of the cultural formulation interview: the five printed Identify moves read as one descent — PROBLEM (the problem through the patient's perspective, in their own words or the words they would use with family and friends) → PERCEPTION (why they think they are experiencing the problem — the perceived cause) → BACKGROUND (what makes it better or worse; family, community, spirituality) → PLAN (concerns or suggestions about the current plan; the COMBINE rule — if they do not want to follow medical advice, investigate combining their plans with the standard medical regimen, never overriding) → BARRIERS (anything preventing care in a standard medical institution; the closing probe for what may increase the chance of maintaining a good patient-physician relationship). The claim 'each move feeds the next; the relationship is the deliverable' is the KYP synthesis of the printed sequence.",
         "origin": "outside-first-aid", "rationale": "The source prints the five moves as parallel sentences; the ordered-staircase reading, the one-word decoders (PROBLEM/PERCEPTION/BACKGROUND/PLAN/BARRIERS), and the relationship-as-output framing are KYP's organization.",
         "location": "core.keyIdea DECODER 1 + mechanisms[0] cultural-formulation-flow + blocks[2] the steps block + the registry visual's Zone A staircase and KYP-reading card"},
        {"id": "trauma-safety-architecture",
         "summary": "The safety architecture of trauma-informed care: the printed rules re-organized by function — SCREEN (thorough behavioral health screenings; regularly assess mood, substance use, social supports, and suicide risk), FOCUS (trauma-related symptoms that interfere with social and occupational function, not the narrative), PROTECT (PERMISSION — ask permission prior to discussion, never invasive questions requiring the patient to describe trauma in detail; SIGNAL — before the physical exam, the patient may signal to end it immediately; SUPPORT — additional staff, counseling offered or advised) — with the 4 R's (Realize, Recognize, Respond, Resist retraumatization) as First Aid's own compression, and the KYP rule 'PERMISSION governs the conversation, SIGNAL governs the exam, SUPPORT governs the room'.",
         "origin": "outside-first-aid", "rationale": "The source prints the rules as a paragraph; the screen/focus/protect grouping, the PERMISSION·SIGNAL·SUPPORT triad, and the control-transfer reading are KYP's organization. The 4 R's mnemonic itself is FA's own (red-initialed in print, attributed, not counted as a KYP mnemonic).",
         "location": "core.keyIdea DECODER 2 + blocks[3] the trauma rules list + the registry visual's Zone B panel and 4 R's strip + mnemonics[3] PERMISSION, SIGNAL, SUPPORT"},
        {"id": "ambivalence-to-smart-decoder",
         "summary": "The motivational-interviewing arc: RESOLVE AMBIVALENCE (a counseling technique to facilitate behavior modification; useful for many conditions, eg, nicotine dependence, obesity; some desire to change required, commitment explicitly NOT) → EXAMINE the behavior (how it interferes with their life or why they might want to change it — the patient voices the argument) → ASSESS BARRIERS (eg, food access — structural; untreated trauma — psychological) → READINESS guides physician-suggested goals → SMART (Specific, Measurable, Achievable, Relevant, Time bound — FA's own, red-initialed); plus the KYP rule 'readiness SIZES the goal; SMART FORMATS it' and the MI-vs-directive-advice contrast (who supplies the argument for change).",
         "origin": "outside-first-aid", "rationale": "The source prints the sentences; the arc organization, the candidacy formula's two-sided reading (some desire = required; commitment = not), the structural/psychological barrier pairing, and the MI-vs-directive contrast are KYP's design. SMART itself is FA's own (attributed).",
         "location": "mechanisms[1] ambivalence-to-smart-arc + blocks[4] the MI decoder list + blocks[6] the compare block + the registry visual's Zone C arc"},
        {"id": "inclusive-history-protocol",
         "summary": "The checklist organization of gender- and sexuality-inclusive history taking: NO ASSUMPTIONS (sexual orientation, gender identity, gender expression, and behavior are independent axes — a patient who identifies as heterosexual may engage in same-sex sexual activity) · NEUTRAL TERMS ('partner' rather than 'husband' or 'wife' upon first meeting, until the patient instructs otherwise or uses specific pronouns) · SEX AT BIRTH ≠ GENDER IDENTITY · ONLY IF RELEVANT (the hand-laceration rule — do not bring up gender or sexuality if not relevant to the visit) · PRONOUNS + EMR (state yours, eg, 'I'm Dr. Smith, and I use she/her pronouns'; ask how patients would like to be addressed; correct name and pronouns in the electronic medical record) · CONFIDENTIALITY + TRUST (reassure confidentiality; patients may not be open to others in their life; trust is built over time).",
         "origin": "outside-first-aid", "rationale": "The source prints the rules as flowing paragraphs; the six-item checklist shape, the four-independent-axes reading, and the relevance-gate framing shared with the disabilities rules on the previous page are KYP's organization.",
         "location": "core.keyIdea DECODER 4 + blocks[5] the checklist table + the registry visual's Zone D strip + clinical block items"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the five-move cultural formulation stem, the trauma-rules stem with permission/signal/support, the MI + SMART goal-format stem, the inclusive-wording stem), 4 traps (detail-account vs permission-first; commitment required vs some desire; combine vs persuade/override; universal identity questionnaire vs the relevance gate), 3 pivots (the respectful-option router, readiness-sizes vs SMART-formats, the signal promised BEFORE the exam), and 8 recall cards covering all four blocks.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the techniques only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN two mnemonics — 'Remember 4 R's: Realize, Recognize, Respond, Resist retraumatization.' (the R initials printed in RED bold at the end of the trauma-informed care block) and the SMART list 'Specific, Measurable, Achievable, Relevant, and Time bound (SMART)' (the S/M/A/R/T initials printed in RED bold at the end of the motivational interviewing block) — both carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim table block, and the visual's 4 R's strip and SMART bar; plus TWO KYP originals, marked as such: 'PROBLEM, PERCEPTION, BACKGROUND, PLAN, BARRIERS' (the five cultural-formulation moves in printed order) and 'PERMISSION, SIGNAL, SUPPORT' (the three trauma-informed safety rules).",
         "origin": "outside-first-aid", "rationale": "The two red-initialed mnemonics are the source's own (attributed, not counted as KYP's); no margin mnemonic prints anywhere on pdf 294 (pdfimages + VLM census, staging-pubh22/vlm-census.txt); the two ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[8] the memory callout + the visual's Zone B 4 R's strip and Zone C SMART bar"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 294 / book 272, the THIRD page of the PUBLIC HEALTH SCIENCES—COMMUNICATION SKILLS subsection (pdf 293/book 271 closes patient-centered interviewing with the disabilities communication rules; pdf 295/book 273 opens 'Use of interpreters'), carrying FOUR blue-headed pure-text blocks — Cultural formulation interview (FIVE Identify moves), Trauma-informed care (screenings, focus rule, interaction rules, the 4 R's), Motivational interviewing (ambivalence resolution to SMART goals), and Gender- and sexuality-inclusive history taking (the inclusive checklist) — all carried VERBATIM in the note's table block (blocks[1]). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh22/vlm-census.txt): the four headings and every sentence confirmed exactly as the text layer reads them (none missing or extra); the five 'Identify' openers print in BOLD; the 4 R's sentence prints with '4 R's' in bold black and the R initials of Realize/Recognize/Respond/Resist in RED bold; the SMART sentence prints with the S/M/A/R/T initials in RED bold and '(SMART)' in bold black — First Aid's OWN mnemonics, carried VERBATIM and ATTRIBUTED (not counted among the KYP mnemonics); NO bullet glyphs (the moves print as sentence-clusters/indented paragraphs, not bulleted items); NO margin notes, mnemonics, asterisk footnotes, images, figures, or tables; the Communication Skills banner prints ONCE (running header only — a continuation page, matching the raw layer). ADJUDICATIONS (documented): (A) the task brief's block descriptions matched the print exactly — no correction needed; (B) the 4 R's and SMART ARE marked in print (VLM: red bold initials) — both carried as FIRST AID'S OWN, attributed, and counted as two of the four mnemonics, with the two KYP originals marked as such; (C) the VLM pass describes the page furniture as a 'four-row table-style layout' with thin rules — the page prints NO true table or figure, so the four blocks are inventoried as four ORIGINAL_KYP_ADAPTATION text-block records (sv1-sv4), not VISUAL_TABLE reproductions of print artwork. Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); the small-caps banner artifact 'COmmUNICATION SkILLS' (carried as extracted); the block D heading 'Gender- and sexuality-inclusive history taking' wraps across lines in print breaking after the compound's own hyphen ('Gender- and sexuality-' / 'inclusive history' / 'taking' per the VLM pass) — the raw text layer merges the compound to 'sexualityinclusive' (the hyphenated print form is carried in the note's verbatim table; evidence range 13 preserves the RAW merged form so the quote stays a contiguous text-layer span); the block A and block C headings wrap across two lines; the 'she/her pronouns' example wraps 'she/' / 'her' across raw lines (the slash survives); the curly-quoted apostrophes and double-quoted examples are as printed. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (cultural-formulation-flow, ambivalence-to-smart-arc), a visual block + verbatim table block + steps block (the five moves) + trauma-rules list + MI decoder list + inclusive checklist table + compare block (MI vs directive advice) + exam callout + memory callout, a clinical block (the MI pair nicotine/obesity, the barrier pair food access/untreated trauma, the trauma screening set, the inclusive-history examples, the combined-regimen refusal scenario), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (patient-centered-interviewing, interpreters-bad-news, challenging-scenarios, informed-consent — all four are public-health census topicIds), 4 crossLinks, and 4 mnemonics (First Aid's own two carried attributed + two KYP originals marked), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints interviewing technique, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical examples (nicotine dependence, obesity, food access, untreated trauma) are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh22/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'cultural-interviewing-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's FOUR text blocks are implemented in ONE registry visual (cultural-interviewing-map, CulturalInterviewingMap in visuals/pubhealth-p22.tsx, viewBox 0 0 1102 1150): a descending five-step staircase (Zone A, every printed prompt preserved + KYP decoder tags + the KYP-reading card), the trauma-informed care panel (Zone B, screenings/focus/PERMISSION-SIGNAL-SUPPORT + the attributed 4 R's strip), the motivational-interviewing arc (Zone C, ambivalence → examine → barriers → readiness → the attributed SMART bar), and the inclusive-history checklist strip (Zone D, six vector-checkbox cells) — with the full page's text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Communication Skills",
    "topicId": "cultural-competence-interviewing", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "cultural-competence-interviewing-sv1",
        "sourcePages": {"part": 1, "pdfPages": [294], "bookPages": "272"},
        "visualType": "CLINICAL_ALGORITHM",
        "visualPurpose": "The Cultural formulation interview block (book 272): the FIVE sequential interviewing moves — the problem through the patient's perspective (own words; family-and-friends wording), cultural perceptions of factors leading to a problem, background influences (better/worse; family, community, spirituality), impact on current and future interventions (the combine-their-plans-with-the-standard-regimen rule), and possible barriers to care based on culture (the patient-physician-relationship probe) — the Communication Skills subsection's core cultural-competence protocol",
        "sourceFigureDescription": "PURE-TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh22/vlm-census.txt — VLM available this session): a blue bold left-column heading 'Cultural formulation interview' (wrapping across two lines: 'Cultural formulation' / 'interview') over a right-column block of FIVE sentence-clusters, each opening with the word 'Identify' in bold black — (1) 'Identify the problem through the patient's perspective. Ask the patient to describe the problem in their own words, or how the patient would describe the problem to their family and friends.'; (2) 'Identify cultural perceptions of factors leading to a problem. Ask the patient to explain why they think they are experiencing their problem.'; (3) 'Identify how the patient's background influences their problem. Ask the patient about what makes their problem better or worse. Investigate roles of family, community, and spirituality.'; (4) 'Identify how culture may impact current and future interventions. Ask the patient if they have any concerns or suggestions about the current plan of treatment. If they do not want to follow medical advice, investigate if there is a way to combine their plans with the standard medical regimen.'; (5) 'Identify possible barriers to care based on culture. Ask the patient if there is anything that would prevent them from seeking care in a standard medical institution. Probe for explanations and what may increase the chance of maintaining a good patient-physician relationship.' No bullet glyphs, no margin notes, no images.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "cultural-interviewing-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (CulturalInterviewingMap in visuals/pubhealth-p22.tsx): the five moves as a DESCENDING STAIRCASE of five step cards in printed order, each carrying its number, its printed 'Identify' lead-in as the card title, its printed prompts as quoted lines, and a KYP decoder tag (PROBLEM / PERCEPTION / BACKGROUND / PLAN / BARRIERS), with inter-step arrows and the KYP-reading card; the block's full text is ALSO carried verbatim in the note's table block (blocks[1] row 1), mechanisms[0] cultural-formulation-flow, blocks[2] the steps block, and recall[0-1]",
        "productionStatus": "complete",
        "plannedKypVisualId": "cultural-interviewing-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "cultural-competence-interviewing-sv2",
        "sourcePages": {"part": 1, "pdfPages": [294], "bookPages": "272"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The Trauma-informed care block (book 272): the care framework for patients with histories of psychological trauma — thorough behavioral health screenings (mood, substance use, social supports, suicide risk), the functional-focus rule, the empathy/permission/no-invasive-detail rules, the pre-exam signal-to-end reassurance, additional staff for support, counseling offered or advised, and First Aid's own red-initialed 4 R's: Realize, Recognize, Respond, Resist retraumatization",
        "sourceFigureDescription": "PURE-TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh22/vlm-census.txt — VLM available this session): a blue bold left-column heading 'Trauma-informed care' (single line) over a right-column block of three sentence-cluster paragraphs — 'Patients with history of psychological trauma should receive thorough behavioral health screenings. Regularly assess mood, substance use, social supports, and suicide risk.'; 'Focus assessments on trauma-related symptoms that interfere with social and occupational function. Always be empathetic. Do not ask invasive questions requiring the patient to describe trauma in detail. Ask permission prior to discussion.'; 'Before the physical exam, reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort. Offer the presence of additional staff for support. Psychological counseling may be indicated. Follow-up counseling is offered (or advised) as appropriate. Remember 4 R's: Realize, Recognize, Respond, Resist retraumatization.' — the closing mnemonic prints with '4 R's' in bold black and the R initials of Realize/Recognize/Respond/Resist in RED bold (First Aid's own). No bullet glyphs, no margin notes, no images.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "cultural-interviewing-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (CulturalInterviewingMap in visuals/pubhealth-p22.tsx): the panel organized SCREEN / FOCUS / PERMISSION / SIGNAL / SUPPORT with every printed rule, plus the 4 R's strip (Realize · Recognize · Respond · Resist retraumatization) drawn in the emergency color with First Aid attribution and the KYP rule line; the block's full text is ALSO carried verbatim in the note's table block (blocks[1] row 2), blocks[3] the trauma rules list, mnemonics[0] (the 4 R's, attributed) and mnemonics[3], and recall[2-4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "cultural-interviewing-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "cultural-competence-interviewing-sv3",
        "sourcePages": {"part": 1, "pdfPages": [294], "bookPages": "272"},
        "visualType": "FLOWCHART",
        "visualPurpose": "The Motivational interviewing block (book 272): the counseling arc — resolve ambivalence about change (some desire required, commitment not; eg, nicotine dependence, obesity), examine how the behavior interferes with life, assess barriers (eg, food access, untreated trauma), let readiness for change guide physician-suggested goals, and land on SMART goals (Specific, Measurable, Achievable, Relevant, Time bound — First Aid's own, red-initialed)",
        "sourceFigureDescription": "PURE-TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh22/vlm-census.txt — VLM available this session): a blue bold left-column heading 'Motivational interviewing' (wrapping across two lines: 'Motivational' / 'interviewing') over a right-column block of two paragraphs — 'Counseling technique to facilitate behavior modification by helping patients resolve ambivalence about change. Useful for many conditions (eg, nicotine dependence, obesity). Helpful when patient has some desire to change, but it does not require that the patient be committed to making the change. May involve asking patients to examine how their behavior interferes with their life or why they might want to change it. Assess barriers (eg, food access, untreated trauma) that may make behavior change difficult.'; 'Assessing a patient's readiness for change is also important for guiding physician-suggested goals. These goals should be Specific, Measurable, Achievable, Relevant, and Time bound (SMART).' — the SMART sentence prints with the S/M/A/R/T initials in RED bold and '(SMART)' in bold black (First Aid's own). No bullet glyphs, no margin notes, no images.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "cultural-interviewing-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone C of the registry visual (CulturalInterviewingMap in visuals/pubhealth-p22.tsx): the arc as a flow — RESOLVE AMBIVALENCE (with the printed examples nicotine dependence / obesity) → EXAMINE the behavior + ASSESS BARRIERS (parallel nodes: food access, untreated trauma) → READINESS guides physician-suggested goals → the SMART bar (Specific · Measurable · Achievable · Relevant · Time bound) drawn in the success color with First Aid attribution, plus the KYP rule line; the block's full text is ALSO carried verbatim in the note's table block (blocks[1] row 3), mechanisms[1] ambivalence-to-smart-arc, blocks[4] the MI decoder list, blocks[6] the compare block, mnemonics[1] (SMART, attributed), and recall[5-6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "cultural-interviewing-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "cultural-competence-interviewing-sv4",
        "sourcePages": {"part": 1, "pdfPages": [294], "bookPages": "272"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Gender- and sexuality-inclusive history taking block (book 272): the inclusive-interviewing checklist — no assumptions about sexual orientation, gender identity, gender expression, or behavior; gender-neutral terms ('partner' rather than 'husband' or 'wife') until the patient instructs otherwise; assigned sex at birth and gender identity may differ; do not bring up gender or sexuality if not relevant (the gender-nonconforming hand-laceration example); the pronoun exchange ('I'm Dr. Smith, and I use she/her pronouns') and the correct EMR; confidentiality reassurance; trust built over time",
        "sourceFigureDescription": "PURE-TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh22/vlm-census.txt — VLM available this session): a blue bold left-column heading 'Gender- and sexuality-inclusive history taking' (wrapping across three lines in the left column, breaking after the compound's own hyphen: 'Gender- and sexuality-' / 'inclusive history' / 'taking' — the raw text layer merges the hyphenated compound to 'sexualityinclusive', a documented quirk) over a right-column block of four paragraphs — the no-assumptions paragraph with the printed example 'a patient who identifies as heterosexual may engage in same-sex sexual activity'; the gender-neutral-terms paragraph ('partner' rather than 'husband' or 'wife') with the assigned-sex-at-birth vs gender-identity sentence and the relevance gate ('eg, a gender-nonconforming patient seeking care for a hand laceration'); the pronoun paragraph ('I'm Dr. Smith, and I use she/her pronouns' — the example wraps 'she/' / 'her' across raw lines — and ensuring correct name and pronouns are in the electronic medical record); and the confidentiality + trust paragraph ('Remember: trust is built over time, and listening to and learning from patients about how they would like to approach the topics discussed above is key.'). No bullet glyphs, no margin notes, no images.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "cultural-interviewing-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone D of the registry visual (CulturalInterviewingMap in visuals/pubhealth-p22.tsx): the checklist strip — six vector-checkbox cells in two columns (NO ASSUMPTIONS / NEUTRAL TERMS / SEX AT BIRTH ≠ GENDER IDENTITY / ONLY IF RELEVANT — the hand-laceration rule / PRONOUNS + EMR / CONFIDENTIALITY + TRUST — built over time); the block's full text is ALSO carried verbatim in the note's table block (blocks[1] row 4), blocks[5] the checklist table with decoding, and recall[7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "cultural-interviewing-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh22"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "cultural-competence-interviewing.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "cultural-competence-interviewing.json").write_text(
    json.dumps({"topicId": "cultural-competence-interviewing", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "cultural-competence-interviewing", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 4,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries FOUR pure-text visual assets — the Cultural formulation interview block (sv1: the five Identify moves), the Trauma-informed care block (sv2: screenings, focus/permission/signal/support rules, First Aid's red-initialed 4 R's), the Motivational interviewing block (sv3: the ambivalence-to-SMART arc, SMART red-initialed), and the Gender- and sexuality-inclusive history taking block (sv4: the inclusive checklist) — all accounted for in ONE registry visual (cultural-interviewing-map, CulturalInterviewingMap in visuals/pubhealth-p22.tsx, viewBox 0 0 1102 1150): a descending five-step staircase (Zone A), the trauma-informed panel with the attributed 4 R's strip (Zone B), the MI arc with the attributed SMART bar (Zone C), and the six-cell inclusive-history checklist strip (Zone D) — every printed prompt preserved, nothing reproduced, and the full page's text additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page glm-4.6v pass (vlm-census.txt) confirmed all four headings and sentences, the five bold 'Identify' openers, the RED bold initials of the 4 R's and SMART (both First Aid's own, carried attributed), the absence of bullet glyphs/margin mnemonics/asterisk footnotes/images, and the once-printed banner (running header only). ADJUDICATION: the task brief's block descriptions matched the print exactly — no correction needed; the page furniture is a 'four-row table-style layout' (VLM) with thin rules, NOT a printed table, so all four records are ORIGINAL_KYP_ADAPTATION text-block adaptations. QUIRK documented: the block D heading prints 'Gender- and sexuality-inclusive history taking', breaking after the compound's own hyphen; the raw text layer merges it to 'sexualityinclusive' (the hyphenated print form is carried in the note; evidence range 13 preserves the raw merged form). FULL single page, the THIRD of the Communication Skills subsection. STAGED under .usmle-pipeline-cache/staging-pubh22/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH22 manifest + inventory staged: {OUT}/manifests/cultural-competence-interviewing.json, {OUT}/visual-inventory/cultural-competence-interviewing.json")
print(f"cultural-competence-interviewing: evidence {len(kept)}/{len(E1)} verified")
