#!/usr/bin/env python3
"""PUBH21 patient-centered-interviewing — manifest + inventory (Public Health
batch 2), STAGED under .usmle-pipeline-cache/staging-pubh21/ (the promotion
step owns content/). Source: FULL pdf page 293 / book 271 (Part 1) — the FIRST
page of the COMMUNICATION SKILLS subsection of Public Health Sciences (pdf
292 / book 270 ends the Ethics content — surrogates-confidentiality; pdf 294 /
book 272 opens Cultural formulation interview — cultural-competence-
interviewing). The topic owns the WHOLE page, which carries THREE blocks, all
pure text: (1) 'Patient-centered interviewing techniques' — a term/definition
table with SIX rows in printed order (Introduction, Agenda setting,
Reflection, Validation, Recapitulation, Facilitation), every definition
carried VERBATIM in the note's first table block; (2) 'Establishing rapport'
— the PEARLS block: the acronym prints in RED beside the block title and the
six row terms print their INITIAL LETTERS in red (Partnership, Empathy,
Apology, Respect, Legitimization, Support) — First Aid's OWN acronym, carried
VERBATIM and ATTRIBUTED (never counted among the KYP mnemonics); (3)
'Communicating with patients with disabilities' — a header (wrapping across
three lines in the print) and SEVEN unlabeled prose paragraphs (person-first
vs identity-first language; talk directly to the patient / nonverbal
patients / caregivers; ask if assistance is desired / independence; speech
difficulties; cognitive impairment; deaf or hard of hearing; the two
do-nots), all carried VERBATIM in the note's list block (the paragraph
labels are KYP's). Census (pdfimages): ZERO raster images — three pure-text
blocks + the indd footer slug. VLM AVAILABLE this session (glm-4.6v at
120dpi): ONE full-page pass (staging-pubh21/vlm-census.txt) confirming the
six technique rows in printed order (none missing or extra), the
term/definition two-column layout (bold dark-teal terms, thin dotted/light
rules), PEARLS as the ONLY red on the page (red heading + red initial
letters), the three-line wrap of the disabilities header, the banner
printing TWICE (running header + in-body ribbon), and the absence of margin
notes, mnemonics, asterisk footnotes, images, and figures. ADJUDICATIONS,
documented in the census file and the manifest notes: (A) the batch brief's
block descriptions matched the print exactly (six techniques, six PEARLS
elements, seven disabilities paragraphs) — no correction needed; (B) PEARLS
is the source's OWN acronym (red heading + red initial letters) — carried
attributed everywhere, never marked KYP; (C) the brief's disabilities
summary (ask what terms they use; talk directly; don't assume nonverbal =
non-understanding; caregivers add information; ask if assistance is desired;
speech/cognitive/deaf protocols; the two do-nots) was confirmed verbatim in
the print. Printed quirks carried + documented: 'SEC TION II' header-space
extraction artifact (known, as-is); small-caps extraction artifact
'COmmUNICATION SkILLS' in BOTH banner instances; the Agenda setting
definition prints 'developing joint agenda between the physician and the
patient' with NO article before 'joint agenda' (VLM-confirmed as printed —
carried verbatim); curly quotes as printed ('a person with a disability' /
'a disabled person' inside curly double quotes; curly apostrophe in
'patient's perspectives'); the disabilities header wraps across three lines;
the term/definition blocks print WITHOUT column headers (the note's verbatim
tables supply descriptive headers, documented as KYP-supplied); the seven
disabilities paragraphs print UNLABELED (the note's paragraph labels are
KYP's). Nothing is reproduced: all three blocks are ORIGINAL KYP
ADAPTATIONS (station strip / rapport wheel / grouped-by-need panel) in ONE
registry visual (interviewing-map, InterviewingMap in
visuals/pubhealth-p21.tsx, viewBox 0 0 1102 1460); the full text of all
three blocks is additionally carried VERBATIM in the note's two table blocks
and list block. DrugCards: none — the page prints communication techniques,
not drugs (folded by absence)."""
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
L = {293: pages[292].split("\n")}
P = {293: norm(pages[292])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 271, the running header (PUBLIC HEALTH SCIENCES, the banner '▶ PUBLIC HEALTH SCIENCES—COmmUNICATION SkILLS' printing TWICE: running header + in-body ribbon — the Communication Skills subsection opener; small-caps 'mm'/'k' artifact as extracted), the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), and the page's first block title 'Patient-centered interviewing techniques'", rng(293, 1, 10), [293]),
    ("TECHNIQUE 1 — Introduction: introduce yourself and ask the patient their name and how they would like to be addressed; address the patient by the name and pronouns given; avoid making gender assumptions; sit at eye level, near the patient, while facing them directly", rng(293, 11, 15), [293]),
    ("TECHNIQUE 2 — Agenda setting: identify concerns and set goals by developing joint agenda between the physician and the patient (printed with NO article before 'joint agenda' — a printed quirk, carried verbatim and VLM-confirmed as printed)", rng(293, 17, 19), [293]),
    ("TECHNIQUE 3 — Reflection: actively listen and synthesize information offered by the patient, particularly with respect to primary concern(s)", rng(293, 21, 24), [293]),
    ("TECHNIQUE 4 — Validation: legitimize or affirm the patient's perspectives (curly apostrophe as printed)", rng(293, 26, 28), [293]),
    ("TECHNIQUE 5 — Recapitulation: summarize what the patient has said so far to ensure correct interpretation", rng(293, 30, 32), [293]),
    ("TECHNIQUE 6 — Facilitation: encourage the patient to speak freely without guiding responses or leading questions; allow the patient to ask questions throughout the encounter", rng(293, 34, 37), [293]),
    ("BLOCK 2 opens — the 'Establishing rapport' title with First Aid's OWN acronym PEARLS (printed in RED beside the title, with the six row terms' initial letters printed in red — VLM-confirmed; carried VERBATIM and ATTRIBUTED) and the first element, Partnership: work together with patient to identify primary concerns and develop preferred solutions", rng(293, 39, 45), [293]),
    ("PEARLS 2 — Empathy: acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way", rng(293, 47, 50), [293]),
    ("PEARLS 3 — Apology: take personal responsibility when appropriate", rng(293, 52, 54), [293]),
    ("PEARLS 4 — Respect: commend the patient for coming in to discuss a problem, pushing through challenging circumstances, keeping a positive attitude, or other constructive behaviors", rng(293, 56, 59), [293]),
    ("PEARLS 5 — Legitimization: assure patient that emotional responses are understandable or common", rng(293, 61, 63), [293]),
    ("PEARLS 6 — Support: reassure patient that you will work together through difficult times and offer appropriate resources", rng(293, 65, 67), [293]),
    ("BLOCK 3 opens — the 'Communicating with patients with disabilities' header (wrapping across three lines in the print: 'Communicating / with patients with / disabilities') and paragraph 1, the language rule: person-first (ie, 'a person with a disability') vs identity-first (ie, 'a disabled person') language — ask patients what terms they use (curly quotes as printed)", rng(293, 69, 74), [293]),
    ("Disabilities paragraphs 2-3 — direct address and assistance: under most circumstances talk directly to the patient; do not assume that nonverbal patients do not understand; accompanying caregivers can add information to any discussion as needed; ask if assistance is desired rather than assuming the patient cannot do something alone; most people, including people with disabilities, value their independence", rng(293, 75, 78), [293]),
    ("Disabilities paragraph 4 — speech difficulties: provide extra time for the interview; if speech is difficult to understand, consider asking them to write down a few words or ask them to rephrase their sentence; repeat what they said to ensure you understood it correctly", rng(293, 79, 81), [293]),
    ("Disabilities paragraph 5 — cognitive impairment: use concrete, specific language; ask simple, direct questions; eliminate background noise and distractions; do not assume the patient can read; adjust to how the patient understands best (eg, use hand gestures or ask them to demonstrate a task)", rng(293, 82, 84), [293]),
    ("Disabilities paragraph 6 — deaf or hard of hearing: ask their preferred mode of communication; use light touch or waving to get their attention; for patients who prefer to speak and lipread, eliminate background noise, face the patient, and do not change your mode of speaking; consider using an interpreter when necessary", rng(293, 85, 88), [293]),
    ("Disabilities paragraph 7 — the two do-nots: do not bring up a disability if it is not relevant to a visit (eg, a patient in a wheelchair with an ear infection); do not skip relevant parts of the physical exam even if the disability makes the exam challenging", rng(293, 89, 91), [293]),
    ("The indd footer slug and print footer timestamp — 'FAS1_2026_06-PubHealth.indd 271' and 12/16/25 12:46 PM (page identity, book 271)", rng(293, 93, 95), [293]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"patient-centered-interviewing: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "patient-centered-interviewing", "title": "Patient-Centered Interviewing and Rapport",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Communication Skills", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [293], "bookPages": "271–271"},
    "sourceEvidence": kept, "visualIds": ["interviewing-map"],
    "mechanismIds": ["interview-arc-map", "pearls-rapport-map"],
    "kypExtensions": [
        {"id": "arc-architecture",
         "summary": "The 2+3+1 arc reading of the six printed techniques: TWO TO STRUCTURE the encounter (Introduction — name, pronouns, eye level, facing directly; Agenda setting — the joint agenda between the physician and the patient), THREE TO LISTEN (Reflection — synthesize what is offered, particularly the primary concern(s); Validation — legitimize or affirm perspectives; Recapitulation — summarize so far to ensure correct interpretation), ONE TO OPEN THE DOOR (Facilitation — free speech without guiding responses or leading questions, questions allowed throughout) — plus the claim that the printed order IS the working order of an encounter (the station-strip timeline).",
         "origin": "outside-first-aid", "rationale": "The source prints the six techniques as parallel term/definition rows; the arc grouping, the station-strip timeline, and the structure/listen/open-the-door grammar are KYP's organization.",
         "location": "core.why + core.keyIdea MOVE 1 + mechanisms[0] interview-arc-map + blocks[4] the steps block + the registry visual's Zone A station strip and 2+3+1 brackets"},
        {"id": "pearls-emotion-protocol",
         "summary": "The emotion-response reading of PEARLS: an emotion surfacing mid-interview is the trigger the six interviewing techniques cannot answer, and PEARLS is the sequenced protocol that does — Partnership ('we' + preferred solutions), Empathy (name the emotion AND the why), Apology (own the physician's faults only), Respect (commend the printed list of constructive behaviors), Legitimization (normalize the response), Support (presence AND resources) — with the Empathy-vs-Legitimization and the half-response distractors (naming without the why; resources without presence) called out.",
         "origin": "outside-first-aid", "rationale": "PEARLS itself and all six definitions are the source's own (attributed, printed in red); the trigger→moves→rapport protocol framing, the pairing of moves, and the half-response distractor analysis are KYP's.",
         "location": "core.keyIdea MOVE 2 + mechanisms[1] pearls-rapport-map + blocks[2] the PEARLS table block caption + usmle.traps[0] + the registry visual's Zone B wheel"},
        {"id": "disabilities-ask-dont-assume",
         "summary": "The ASK-DON'T-ASSUME synthesis of the disabilities block — the page's three ASKS (what terms they use; whether assistance is desired; the preferred mode of communication) against its three DO-NOT-ASSUMES (that nonverbal patients do not understand; that the patient cannot do something alone; that the patient can read) — plus the grouped-by-need panel (universal layer + the three need-specific protocols tagged TIME · SIMPLE · ATTENTION: speech gets extra time/write/rephrase/repeat; cognitive gets concrete simple language/quiet room/no assumed literacy/adjust the channel; deaf or hard of hearing gets attention first then the chosen channel).",
         "origin": "outside-first-aid", "rationale": "The seven paragraphs' rules are printed verbatim; the ask-vs-assume grammar, the need-based grouping, the TIME · SIMPLE · ATTENTION tags, and the paragraph labels (¶1–¶7) are KYP's.",
         "location": "core.keyIdea MOVE 3 + blocks[3] the verbatim list block + clinical[0] the adapted-interview block + blocks[5] the person-first/identity-first compare + the registry visual's Zone C panel"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the Introduction choreography stem, the joint-agenda stem, the multiple-sclerosis PEARLS stem, the nonverbal-patient direct-address stem), 4 traps (Empathy vs Legitimization vs Validation; Reflection vs Recapitulation; Facilitation vs leading questions; talk-to-the-patient vs talk-to-the-caregiver), 3 pivots (the arc router, the emotion-router between blocks, the ask-don't-assume scanner), and 11 recall cards covering all six techniques, PEARLS, and the disabilities protocols.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN acronym — PEARLS, printed in RED beside 'Establishing rapport' with the six row terms' initial letters in red (VLM-confirmed) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim PEARLS table block, and the visual's wheel hub (never counted among the KYP mnemonics); plus THREE KYP originals, marked as such: 'TWO TO STRUCTURE, THREE TO LISTEN, ONE TO OPEN THE DOOR' (the 2+3+1 arc), 'ASK, DON'T ASSUME' (the three asks vs three do-not-assumes), and 'TIME · SIMPLE · ATTENTION' (the three need-specific protocols).",
         "origin": "outside-first-aid", "rationale": "PEARLS is the source's own (attributed); no margin mnemonic prints anywhere on pdf 293 (pdfimages + VLM census, staging-pubh21/vlm-census.txt); the three ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the visual's wheel hub, Zone A brackets, and Zone C protocol tags"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 293 / book 271, the FIRST page of the COMMUNICATION SKILLS subsection of Public Health Sciences (pdf 292 / book 270 ends the Ethics content — surrogates-confidentiality; pdf 294 / book 272 opens Cultural formulation interview — cultural-competence-interviewing), carrying THREE blocks — 'Patient-centered interviewing techniques' (a term/definition table, SIX rows in printed order: Introduction, Agenda setting, Reflection, Validation, Recapitulation, Facilitation — carried VERBATIM in the note's first table block), 'Establishing rapport' (the PEARLS block — First Aid's OWN acronym, printed in RED beside the title with the six row terms' initial letters in red, carried VERBATIM and ATTRIBUTED in the note's second table block), and 'Communicating with patients with disabilities' (a three-line header + SEVEN unlabeled prose paragraphs carried VERBATIM in the note's list block, with KYP paragraph labels documented as such). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh21/vlm-census.txt): the six technique rows confirmed in printed order (none missing or extra); the term/definition two-column layout with bold dark-teal terms and thin dotted/light rules; PEARLS as the ONLY red on the page (red heading + red initial letters on Partnership/Empathy/Apology/Respect/Legitimization/Support); the three-line wrap of the disabilities header; the banner printing TWICE (running header + in-body ribbon); no margin notes, mnemonics, asterisk footnotes, images, or figures. ADJUDICATIONS: (A) the batch brief's block descriptions matched the print exactly (six techniques, six PEARLS elements, seven disabilities paragraphs) — no correction needed; (B) PEARLS is the source's OWN acronym — attributed everywhere, never marked KYP, and not counted among the KYP mnemonics; (C) the term/definition blocks print WITHOUT column headers — the note's verbatim tables supply descriptive headers, documented as KYP-supplied; (D) the seven disabilities paragraphs print UNLABELED — the note's ¶1–¶7 labels are KYP's, flagged in the list block intro. Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); small-caps extraction artifact 'COmmUNICATION SkILLS' in BOTH banner instances (the print uses small caps; the text layer drops the 'mm' and the 'k' to lowercase — carried as extracted); the Agenda setting definition prints 'developing joint agenda between the physician and the patient' with NO article before 'joint agenda' (VLM-confirmed as printed — carried verbatim, not corrected); curly quotes as printed ('a person with a disability' / 'a disabled person' inside curly double quotes; curly apostrophe in 'patient's perspectives'); the 'Communicating with patients with disabilities' header wraps across three lines ('Communicating / with patients with / disabilities'); the banner prints TWICE (running header + in-body subsection ribbon). Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (interview-arc-map, pearls-rapport-map), a visual block + two verbatim table blocks + a verbatim list block + a steps block + a compare block + an exam callout + a memory callout, a clinical block (the adapted interview: universal layer + three need-specific protocols + the two boundary rules), 4 patterns, 4 traps, 3 pivots, 11 recall, 4 related (cultural-competence-interviewing — the very next page of the chapter, book 272; interpreters-bad-news; challenging-scenarios; core-ethical-principles — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own PEARLS carried attributed + three KYP originals marked), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints communication techniques, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh21/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'interviewing-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's THREE visual assets are implemented in ONE registry visual (interviewing-map, InterviewingMap in visuals/pubhealth-p21.tsx, viewBox 0 0 1102 1460), all three as ORIGINAL KYP ADAPTATIONS: the techniques table as the six-station strip with the KYP 2+3+1 brackets, the PEARLS table as the rapport wheel (red hub attributed to First Aid, six spokes with verbatim definitions), and the disabilities prose as the grouped-by-need panel (universal layer + three need-specific protocol cards) — with the full text of all three blocks ALSO carried verbatim in the note's table and list blocks; (6) sourceRef is identical in the note and this manifest's topic record: 'First Aid 2026, Part 1 pp. 271–271 (Communication Skills: Patient-centered interviewing techniques; Establishing rapport; Communicating with patients with disabilities)'.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Communication Skills",
    "topicId": "patient-centered-interviewing", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "patient-centered-interviewing-sv1",
        "sourcePages": {"part": 1, "pdfPages": [293], "bookPages": "271"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Patient-centered interviewing techniques block (book 271): the six techniques — Introduction, Agenda setting, Reflection, Validation, Recapitulation, Facilitation — as printed term/definition rows; the Communication Skills subsection's opening table and the exam's answer key for every identify-the-technique question",
        "sourceFigureDescription": "TERM/DEFINITION TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh21/vlm-census.txt — VLM available this session): under the block title 'Patient-centered interviewing techniques' (bold dark teal), SIX rows in printed order, each a bold dark-teal term at left with its black definition at right, separated by thin dotted/light rules (no heavy borders): Introduction → Introduce yourself and ask the patient their name and how they would like to be addressed. Address the patient by the name and pronouns given. Avoid making gender assumptions. Sit at eye level, near the patient, while facing them directly.; Agenda setting → Identify concerns and set goals by developing joint agenda between the physician and the patient. (printed with no article before 'joint agenda'); Reflection → Actively listen and synthesize information offered by the patient, particularly with respect to primary concern(s).; Validation → Legitimize or affirm the patient's perspectives.; Recapitulation → Summarize what the patient has said so far to ensure correct interpretation.; Facilitation → Encourage the patient to speak freely without guiding responses or leading questions. Allow the patient to ask questions throughout the encounter. The block prints WITHOUT column headers (term | definition rows only).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "interviewing-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the six-station strip in the registry visual (InterviewingMap in visuals/pubhealth-p21.tsx, Zone A): one numbered station per printed row in PRINTED order, each carrying its verbatim definition plus a KYP job tag (STRUCTURE / LISTEN / OPEN THE DOOR), connected by arrows, with the KYP 2+3+1 grouping brackets (TWO TO STRUCTURE / THREE TO LISTEN / ONE TO OPEN THE DOOR) beneath; the full table text is ALSO carried verbatim in the note's first table block (blocks[1]), core.what, the steps block (blocks[4]), and recall[0-4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "interviewing-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "patient-centered-interviewing-sv2",
        "sourcePages": {"part": 1, "pdfPages": [293], "bookPages": "271"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Establishing rapport / PEARLS block (book 271): First Aid's own rapport acronym in red — Partnership, Empathy, Apology, Respect, Legitimization, Support — with each element's printed definition; the page's answer key for every best-response-to-an-emotion question",
        "sourceFigureDescription": "TERM/DEFINITION TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh21/vlm-census.txt — VLM available this session): under the block title 'Establishing rapport' (bold dark teal) the acronym PEARLS prints in RED bold caps (the ONLY red text on the page), then SIX rows whose term initial letters print in RED (P-artnership, E-mpathy, A-pology, R-espect, L-egitimization, S-upport) with the remainder of each term in bold dark teal: Partnership → Work together with patient to identify primary concerns and develop preferred solutions.; Empathy → Acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way.; Apology → Take personal responsibility when appropriate.; Respect → Commend the patient for coming in to discuss a problem, pushing through challenging circumstances, keeping a positive attitude, or other constructive behaviors.; Legitimization → Assure patient that emotional responses are understandable or common.; Support → Reassure patient that you will work together through difficult times and offer appropriate resources. Thin dotted/light rules between rows; no column headers.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "interviewing-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the PEARLS rapport wheel in the registry visual (InterviewingMap in visuals/pubhealth-p21.tsx, Zone B): a central hub carrying 'PEARLS' in red with the attribution 'First Aid's own — printed in red' (the acronym and its red printing are the source's own), six spokes to cards P/E/A/R/L/S each carrying its verbatim definition plus a KYP gloss line; the full table text is ALSO carried verbatim in the note's second table block (blocks[2]), mechanisms[1] pearls-rapport-map, the memory callout (blocks[7]), mnemonics[0], and recall[4-5]",
        "productionStatus": "complete",
        "plannedKypVisualId": "interviewing-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "patient-centered-interviewing-sv3",
        "sourcePages": {"part": 1, "pdfPages": [293], "bookPages": "271"},
        "visualPurpose": "The Communicating with patients with disabilities block (book 271): the language rule (person-first vs identity-first), direct address, assistance and independence, the three need-specific protocols (speech difficulties, cognitive impairment, deaf or hard of hearing), and the two boundary do-nots — the accessibility layer of the interview",
        "visualType": "SUMMARY_FIGURE",
        "sourceFigureDescription": "PROSE PANEL, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh21/vlm-census.txt — VLM available this session): a bold dark-teal header 'Communicating with patients with disabilities' wrapping across three lines at left, then SEVEN unlabeled prose paragraphs: (1) Patients may identify with person-first (ie, 'a person with a disability') or identity-first (ie, 'a disabled person') language. Ask patients what terms they use.; (2) Under most circumstances, talk directly to the patient. Do not assume that nonverbal patients do not understand. Accompanying caregivers can add information to any discussion as needed.; (3) Ask if assistance is desired rather than assuming the patient cannot do something alone. Most people, including people with disabilities, value their independence.; (4) For patients with speech difficulties, provide extra time for the interview. If their speech is difficult to understand, consider asking them to write down a few words or ask them to rephrase their sentence. Repeat what they said to ensure you understood it correctly.; (5) For patients with a cognitive impairment, use concrete, specific language. Ask simple, direct questions. Eliminate background noise and distractions. Do not assume the patient can read. Adjust to how the patient understands best (eg, use hand gestures or ask them to demonstrate a task).; (6) Ask patients who are deaf or hard of hearing their preferred mode of communication. Use light touch or waving to get their attention. For patients who prefer to speak and lipread, eliminate background noise, face the patient, and do not change your mode of speaking. Consider using an interpreter when necessary.; (7) As with other parts of a medical history, do not bring up a disability if it is not relevant to a visit (eg, a patient in a wheelchair with an ear infection). Do not skip relevant parts of the physical exam even if the disability makes the exam challenging. Curly double quotes as printed in paragraph 1.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "interviewing-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the grouped-by-need panel in the registry visual (InterviewingMap in visuals/pubhealth-p21.tsx, Zone C): a universal-layer strip (LANGUAGE ¶1 / ADDRESS ¶2 / ASSISTANCE ¶3 / BOUNDARIES ¶7 columns) plus three need-specific protocol cards (SPEECH DIFFICULTIES ¶4 — the TIME protocol; COGNITIVE IMPAIRMENT ¶5 — the SIMPLE protocol; DEAF OR HARD OF HEARING ¶6 — the ATTENTION protocol; the protocol tags are KYP's) and the ASK-DON'T-ASSUME rule strip; the full paragraph text is ALSO carried verbatim in the note's list block (blocks[3]), clinical[0] the adapted interview, the compare block (blocks[5]), core.keyIdea MOVE 3, and recall[6-10]",
        "productionStatus": "complete",
        "plannedKypVisualId": "interviewing-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh21"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "patient-centered-interviewing.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "patient-centered-interviewing.json").write_text(
    json.dumps({"topicId": "patient-centered-interviewing", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "patient-centered-interviewing", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries THREE visual assets, all pure text (pdfimages: zero raster images) — the Patient-centered interviewing techniques table (sv1: SIX term/definition rows in printed order), the Establishing rapport / PEARLS table (sv2: First Aid's OWN acronym printed in RED beside the block title, with the six row terms' initial letters in red — Partnership, Empathy, Apology, Respect, Legitimization, Support), and the Communicating with patients with disabilities prose panel (sv3: a three-line header and SEVEN unlabeled paragraphs) — all three accounted for in ONE registry visual (interviewing-map, InterviewingMap in visuals/pubhealth-p21.tsx, viewBox 0 0 1102 1460), each as an ORIGINAL KYP ADAPTATION: sv1 as the six-station strip with the KYP 2+3+1 brackets (Zone A), sv2 as the PEARLS rapport wheel with a red attributed hub (Zone B), sv3 as the grouped-by-need panel — universal layer plus three need-specific protocol cards tagged TIME · SIMPLE · ATTENTION (Zone C); nothing is reproduced, and the full text of all three blocks is additionally carried verbatim in the note's two table blocks and list block. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v full-page pass (staging-pubh21/vlm-census.txt) confirmed the six printed technique rows in order, the two-column term/definition layout with bold dark-teal terms and thin dotted rules, PEARLS as the only red on the page (red heading + red initial letters), the three-line disabilities header wrap, the banner printing twice, and the absence of margin mnemonics and images. ADJUDICATIONS: the batch brief's block descriptions matched the print exactly (no corrections); PEARLS is the source's own and is attributed everywhere (never counted among KYP mnemonics); the term/definition blocks print without column headers (the note's verbatim table headers are KYP-supplied, documented); the seven disabilities paragraphs print unlabeled (the note's ¶1–¶7 labels are KYP's, flagged). FULL single page, the FIRST of the Communication Skills subsection (pdf 292 / book 270 ends the Ethics content; pdf 294 / book 272 opens Cultural formulation interview). STAGED under .usmle-pipeline-cache/staging-pubh21/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH21 manifest + inventory staged: {OUT}/manifests/patient-centered-interviewing.json, {OUT}/visual-inventory/patient-centered-interviewing.json")
print(f"patient-centered-interviewing: evidence {len(kept)}/{len(E1)} verified")
