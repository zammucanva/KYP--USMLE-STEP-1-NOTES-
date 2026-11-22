#!/usr/bin/env python3
"""PUBH23 interpreters-bad-news — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh23/ (the promotion step owns
content/). Source: FULL pdf page 295 / book 273 (Part 1) — the THIRD page
under the COMMUNICATION SKILLS banner (pdf 293 = the subsection opener,
book 271 — patient-centered interviewing; pdf 294 = book 272 — cultural
competence interviewing; pdf 296 = book 274 — challenging scenarios). The
topic owns the WHOLE page, which carries TWO side-head blocks: (1) "Use of
interpreters" — SIX printed paragraphs: the
professionally-trained-interpreter default with the conversational-fluency
exception, the telephone/video-call fallback, the family-member preference
recorded in the chart, the do-not-assume (name/skin tone/accent)
language-ask rule, the direct-speech rule (eye contact, no third-person
"tell him"), the pace rule (extra time, one question at a time), the
spoken-vs-sign positioning mirror (spoken: interpreter next to or slightly
behind the PATIENT; sign: next to or slightly behind the PHYSICIAN), and
the emergency any-tools override (friends, family, sketches, interpreter
apps); (2) "Delivering bad news" — SPIKES, FIRST AID'S OWN acronym,
printed in BOLD RED beside the heading, with the six station labels
(Setting, Perception, Invitation, Knowledge, Emotions, Strategy) each
printing an enlarged RED initial letter + bold navy remainder, every
station body carried VERBATIM in the note's second table block. Census
(pdfimages): ZERO raster images — pure text, no figures, the indd footer
slug. VLM AVAILABLE this session (glm-4.6v at 120dpi): ONE full-page pass
(staging-pubh23/vlm-census.txt) confirming: the banner prints ONCE
(running header only — page 295 is NOT the subsection opener; the opener
pdf 293 prints it twice), "SPIKES" bold red plain text beside the
"Delivering bad news" heading, enlarged red initial letters on all six
station labels, two bold navy block headings, NO margin notes/mnemonics
beyond SPIKES itself, no asterisk footnotes, no images, no boxes or
shading, and NO line-wrap hyphenation anywhere (whole-word wraps only).
ADJUDICATIONS, documented in the note header comment and the manifest
notes: (A) the batch brief's block descriptions matched the print EXACTLY
— both blocks, every sentence, both interpreter positions, all six SPIKES
stations — no corrections needed (unlike the pubh1 compare-label swap);
(B) the banner count is pinned by the raw text layer + the VLM pass: ONE
instance on this page, because pdf 295 is the third page of the
subsection, not its opener — the "prints twice" convention governs only
the opener (pdf 293). Printed quirks carried + documented: "SEC TION II"
header-space extraction artifact (known, as-is); the small-caps extraction
artifact "COmmUNICATION SkILLS" in the banner (the print uses small caps;
the text layer drops the 'm' and 'k' to lowercase — carried as extracted);
the typographic quotes around "tell him." are as printed; the indd footer
slug "FAS1_2026_06-PubHealth.indd 273" + timestamp "12/16/25 12:46 PM".
Nothing is reproduced: both blocks are ORIGINAL KYP ADAPTATIONS in ONE
registry visual (bad-news-map, BadNewsMap in visuals/pubhealth-p23.tsx,
viewBox 0 0 1102 1280) — the fallback ladder, the rule cards, the
positioning diagrams with sightline arrows, and the six-station SPIKES
rail are KYP's artwork; every printed rule, position, and station move is
preserved, and both blocks are additionally carried VERBATIM in the
note's two table blocks. DrugCards: none — the page prints communication
protocols, not drugs (folded by absence; the encounter anchors are
carried in the note's clinical block)."""
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
L = {295: pages[294].split("\n")}
P = {295: norm(pages[294])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header: PUBLIC HEALTH SCIENCES, the banner '▶ PUBLIC HEALTH SCIENCES—COmmUNICATION SkILLS' printed ONCE (running header only — pdf 295 is the third page of the subsection, NOT the opener; small-caps 'm'/'k' artifact carried as extracted), the 'SEC TION II' header-space extraction artifact (known, as-is), and book page 273", rng(295, 1, 7), [295]),
    ("BLOCK 1 HEADING — 'Use of interpreters' (bold navy side-head, VLM-confirmed)", rng(295, 9, 9), [295]),
    ("Interpreter paragraph 1 — the professional default, the fluency exception, the remote fallback, and the charted family-member substitution: visits with a patient who speaks little English should utilize a professionally trained medical interpreter unless the physician is conversationally fluent in the patient's preferred language; if an interpreter is unavailable in person, interpretation services may be provided by telephone or video call; if the patient prefers to utilize a family member, this should be recorded in the chart", rng(295, 11, 14), [295]),
    ("Interpreter paragraph 2 — the LANGUAGE-ASK RULE: do not assume that a patient is a poor English speaker because of name, skin tone, or accent; ask the patient what language is preferred", rng(295, 15, 16), [295]),
    ("Interpreter paragraph 3 — the DIRECT-SPEECH RULE: the physician should make eye contact with the patient and speak to them directly, without use of third-person statements such as 'tell him' (typographic quotes as printed)", rng(295, 17, 18), [295]),
    ("Interpreter paragraph 4 — the PACE RULE: allow extra time for the interview, and ask one question at a time", rng(295, 19, 19), [295]),
    ("Interpreter paragraph 5 — the POSITIONING MIRROR: for in-person spoken language interpretation the interpreter should ideally be next to or slightly behind the patient; for sign language interpretation the interpreter should be next to or slightly behind the physician", rng(295, 20, 22), [295]),
    ("Interpreter paragraph 6 — the EMERGENCY OVERRIDE: in cases of emergency, facilitate communication by any tools available (eg, friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise", rng(295, 23, 24), [295]),
    ("BLOCK 2 HEADING + First Aid's OWN acronym — 'Delivering bad news' (bold navy side-head) with 'SPIKES' printed in BOLD RED beside it (VLM-confirmed; not boxed); the six station labels each print an enlarged RED initial letter", rng(295, 26, 28), [295]),
    ("SPIKES station 1 of 6 — SETTING: offer in advance for the patient to bring support; eliminate distractions, ensure privacy, and sit down with the patient to talk", rng(295, 30, 33), [295]),
    ("SPIKES station 2 of 6 — PERCEPTION: determine the patient's understanding and expectations of the situation", rng(295, 35, 37), [295]),
    ("SPIKES station 3 of 6 — INVITATION: obtain the patient's permission to disclose the news and what level of detail is desired", rng(295, 39, 41), [295]),
    ("SPIKES station 4 of 6 — KNOWLEDGE: share the information in small pieces without medical jargon, allowing time to process; assess the patient's understanding", rng(295, 43, 46), [295]),
    ("SPIKES station 5 of 6 — EMOTIONS: acknowledge the patient's emotions, and provide opportunity to express them; listen and offer empathetic responses", rng(295, 48, 51), [295]),
    ("SPIKES station 6 of 6 — STRATEGY, gated on readiness: if the patient feels ready, discuss treatment options and goals of care; offer an agenda for the next appointment; giving control to the patient may be empowering; ask how they feel a problem might be solved and what they would like to do about the plan of action", rng(295, 53, 57), [295]),
    ("The indd footer slug 'FAS1_2026_06-PubHealth.indd 273' and the print footer timestamp 12/16/25 12:46 PM (page identity, book 273)", rng(295, 59, 61), [295]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"interpreters-bad-news: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "interpreters-bad-news", "title": "Interpreters and Delivering Bad News: SPIKES",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Communication Skills", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [295], "bookPages": "273–273"},
    "sourceEvidence": kept, "visualIds": ["bad-news-map"],
    "mechanismIds": ["interpreter-visit-flow", "spikes-flow"],
    "kypExtensions": [
        {"id": "interpreter-visit-protocol",
         "summary": "The interpreter-visit grammar: STATION 0 identify the language by ASKING (never assuming from name, skin tone, or accent) → STATION 1 the fallback ladder (professionally trained medical interpreter in person — unless the physician is conversationally fluent — → telephone or video call → family member if the patient prefers, recorded in the chart) → STATION 2 the conduct rules (eye contact, direct second-person speech with no third-person 'tell him,' extra time, one question at a time) → STATION 3 the positioning mirror (spoken: interpreter next to or slightly behind the PATIENT; sign: next to or slightly behind the PHYSICIAN) → STATION 4 the emergency override (any tools available — friends, family, sketches, interpreter apps — even though not standard procedure otherwise) → the yield: a visit that stays doctor-patient. The station organization, the ladder framing, the two-person-conversation reading, and the sightline logic behind the positioning mirror are KYP's synthesis; every rule and position is printed.",
         "origin": "outside-first-aid", "rationale": "The source prints six parallel paragraphs of rules; the staged-protocol organization (stations 0-4), the fallback-ladder framing, the conduct grammar, and the sightline reasoning (why the sign interpreter sits at the physician's side) are KYP's design — the print gives the positions without the why.",
         "location": "core.keyIdea + mechanisms[0] interpreter-visit-flow + blocks[3] the decoder list + blocks[4] the steps block + blocks[5] the compare block (the positioning mirror) + the registry visual's Zone A"},
        {"id": "spikes-order-logic",
         "summary": "The order reading of First Aid's own SPIKES acronym: stage before speech (Setting), calibrate before content (Perception), permission before disclosure (Invitation), chunk before check (Knowledge — with its own comprehension check), clear the emotion before the plan (Emotions), and return control (Strategy — gated on the patient feeling ready, closing with the print's own control-return questions). The unskippable-order claim and the failure-mode mapping (hallway disclosure = skipped Setting; ambushing = skipped Invitation; planning over tears = skipped Emotions) are KYP's synthesis.",
         "origin": "outside-first-aid", "rationale": "SPIKES and every station move are the source's own (attributed, not counted as KYP's); the ordering logic — WHY the stations cannot swap — is nowhere printed; the KYP reading is the note's and the visual's order strip.",
         "location": "core.why + mechanisms[1] spikes-flow + blocks[1] the SPIKES table block caption + the registry visual's Zone B order strip + usmle.traps[3]"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the assume/ask stem, the spoken-positioning stem, the sign-positioning stem, the pre-disclosure SPIKES stem), 4 traps (spoken vs sign positioning anchors; direct speech vs third-person 'tell him'; professional default vs charted family preference; Emotions before Strategy), 3 pivots (the station router, the interpreter-availability ladder, the conversational-fluency bar), and 8 recall cards covering both blocks — plus the miniCase (the 62-year-old Mandarin-speaking patient with the two-semester physician, the volunteering daughter, and the five-option set routed to the professional interpreter, patient-side positioning, and direct speech).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the rules and stations only; the attack structure, the distractor designs (including the two-college-semesters fluency trap and the daughter-as-default-convenience trap), and the question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN acronym — SPIKES (Setting, Perception, Invitation, Knowledge, Emotions, Strategy), printed in BOLD RED beside the 'Delivering bad news' heading with enlarged red initial letters on the station labels (VLM-confirmed) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the SPIKES table block, and the visual's Zone B; plus THREE KYP originals, marked as such: 'PRO, PHONE, FAMILY — CHARTED' (the interpreter fallback ladder), 'SPOKEN to the PATIENT, SIGNED to the PHYSICIAN' (the positioning mirror), and 'ASK · EYE · ONE · EXTRA' (the four conduct rules).",
         "origin": "outside-first-aid", "rationale": "SPIKES is the source's own hook (attributed, not counted among the KYP mnemonics); no margin mnemonic prints anywhere on pdf 295 (pdfimages + VLM census, staging-pubh23/vlm-census.txt); the three structured codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the registry visual's ladder and mirror strips"},
        {"id": "clinical-anchor-layer",
         "summary": "The clinical anchor layer: the five encounters the printed rules govern — the limited-English visit (the whole ladder in one breath), the deaf or hard-of-hearing patient (the sign-language mirror, cross-referenced to the patient-centered interviewing page's disability rules), the family member at the bedside (preference, not default — documented), the emergency (any tools, with the emergency-exception parallel to the ethics pages), and the bad-news encounter (SPIKES at the bedside, cross-referenced to the challenging-scenarios table's prognosis and nondisclosure rows) — plus the two cross-protocol habits (ASK before assuming; SLOW DOWN) uniting both blocks.",
         "origin": "outside-first-aid", "rationale": "The rules themselves are printed (FA-own); the encounter framing, the cross-references to the neighboring Communication Skills and Ethics pages, the emergency-exception parallel, and the two-habit synthesis are KYP's design, flagged as such.",
         "location": "clinical block + blocks[3] item 8 (the two cross-protocol habits) + related"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 295 / book 273, the THIRD page under the COMMUNICATION SKILLS banner (pdf 293 = the subsection opener — the banner prints TWICE there; on pdf 295 it prints ONCE, in the running header only, pinned by the raw text layer + the VLM pass), carrying TWO side-head blocks — 'Use of interpreters' (SIX printed paragraphs: the professionally-trained-interpreter default with the conversational-fluency exception; the telephone-or-video-call fallback; the family-member preference recorded in the chart; the never-assume language-ask rule (name / skin tone / accent); the direct-speech rule with the typographic 'tell him' quotes; the pace rule (extra time, one question at a time); the spoken-vs-sign positioning mirror; the emergency any-tools override) and 'Delivering bad news' (First Aid's OWN acronym SPIKES, printed in BOLD RED beside the heading, with enlarged red initial letters on the six station labels — Setting, Perception, Invitation, Knowledge, Emotions, Strategy — every station body carried VERBATIM in the note's SPIKES table block, blocks[2]). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh23/vlm-census.txt): the banner prints ONCE (running header only); both block headings are bold navy; 'SPIKES' is bold red plain text, not boxed; the six station labels carry enlarged red initial letters; no margin notes or mnemonics beyond SPIKES itself, no asterisk footnotes, no images, no boxes or shading; NO line-wrap hyphenation anywhere (whole-word wraps only — the printed compounds 'third-person' and 'in-person' are intentional hyphens, not wraps). ADJUDICATION: the batch brief's block descriptions matched the print EXACTLY — both blocks, every sentence, both interpreter positions, all six SPIKES stations — no corrections needed (documented; contrast the pubh1 compare-label swap); the banner count (once vs twice) is pinned by the raw layer + VLM and documented against the subsection-opener convention. Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); small-caps extraction artifact 'COmmUNICATION SkILLS' in the banner; the typographic quotes around 'tell him.' are as printed; the indd footer slug 'FAS1_2026_06-PubHealth.indd 273' + timestamp '12/16/25 12:46 PM'. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (interpreter-visit-flow, spikes-flow), a visual block + TWO verbatim table blocks (one per printed block, KYP-labeled left columns flagged) + decoder list + steps block + compare block (the positioning mirror) + exam callout + memory callout, a clinical block (five encounter anchors), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (patient-centered-interviewing, cultural-competence-interviewing, challenging-scenarios, surrogates-confidentiality — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own SPIKES carried attributed + three KYP originals marked), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints communication protocols, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the encounter anchors are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh23/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'bad-news-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's TWO blocks are implemented in ONE registry visual (bad-news-map, BadNewsMap in visuals/pubhealth-p23.tsx, viewBox 0 0 1102 1280), both as ORIGINAL KYP ADAPTATION: the interpreter protocol as the fallback-ladder chips + language-ask rule card + direct-speech rule card with pace chips + two positioning diagrams (physician/patient/interpreter glyphs with direct-speech and sightline arrows — spoken: interpreter at the patient's side; sign: interpreter at the physician's side), and SPIKES as the six-station rail with red initial letters and each station's printed moves plus the KYP order strip — with BOTH blocks' full text additionally carried VERBATIM in the note's two table blocks.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Communication Skills",
    "topicId": "interpreters-bad-news", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "interpreters-bad-news-sv1",
        "sourcePages": {"part": 1, "pdfPages": [295], "bookPages": "273"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The 'Use of interpreters' block (book 273): the six printed rules of the interpreted visit — the professional-interpreter default with the conversational-fluency exception, the telephone/video-call fallback, the charted family-member preference, the never-assume language-ask rule (name/skin tone/accent), the direct-speech rule ('tell him' forbidden) with the pace rules (extra time, one question at a time), the spoken-vs-sign positioning mirror, and the emergency any-tools override",
        "sourceFigureDescription": "PURE TEXT in a side-head layout, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh23/vlm-census.txt — VLM available this session): the running header (book page 273, SEC TION II, PUBLIC HEALTH SCIENCES, the banner '▶ PUBLIC HEALTH SCIENCES—COmmUNICATION SkILLS' printed ONCE — running header only, this page is not the subsection opener), then the bold navy block heading 'Use of interpreters' with SIX paragraphs of body text: (1) 'Visits with a patient who speaks little English should utilize a professionally trained medical interpreter unless the physician is conversationally fluent in the patient's preferred language. If an interpreter is unavailable in person, interpretation services may be provided by telephone or video call. If the patient prefers to utilize a family member, this should be recorded in the chart.'; (2) 'Do not assume that a patient is a poor English speaker because of name, skin tone, or accent. Ask the patient what language is preferred.'; (3) 'The physician should make eye contact with the patient and speak to them directly, without use of third-person statements such as \"tell him.\"'; (4) 'Allow extra time for the interview, and ask one question at a time.'; (5) 'For in-person spoken language interpretation, the interpreter should ideally be next to or slightly behind the patient. For sign language interpretation, the interpreter should be next to or slightly behind the physician.'; (6) 'In cases of emergency, facilitate communication by any tools available (eg, friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise.' No colored body text, no boxes, no icons, no margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "bad-news-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (BadNewsMap in visuals/pubhealth-p23.tsx): the fallback-ladder chips (PROFESSIONALLY TRAINED MEDICAL INTERPRETER — IN PERSON → TELEPHONE OR VIDEO CALL → FAMILY MEMBER, charted → EMERGENCY: ANY TOOLS), the LANGUAGE-ASK RULE warning card ('Do not assume… name, skin tone, or accent' + the ASK chip), the DIRECT-SPEECH RULE card (eye contact, speak directly, no third-person 'tell him' + the EXTRA-time and ONE-question-at-a-time chips), the two positioning diagrams (spoken-language: physician and patient glyphs with a direct-speech arrow and the dashed interpreter next to or slightly behind the PATIENT; sign-language: the dashed interpreter next to or slightly behind the PHYSICIAN with the patient-watches-the-physician sightline arrow), and the printed-mirror strip; the block's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block (blocks[3]), the steps block (blocks[4]), and recall[0-5]",
        "productionStatus": "complete",
        "plannedKypVisualId": "bad-news-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "interpreters-bad-news-sv2",
        "sourcePages": {"part": 1, "pdfPages": [295], "bookPages": "273"},
        "visualType": "CLINICAL_ALGORITHM",
        "visualPurpose": "The 'Delivering bad news' block (book 273): SPIKES — First Aid's OWN acronym for the six-station bad-news protocol (Setting, Perception, Invitation, Knowledge, Emotions, Strategy), each station with its printed moves; the Communication Skills subsection's flagship clinical protocol",
        "sourceFigureDescription": "PURE TEXT in a side-head layout, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh23/vlm-census.txt — VLM available this session): the bold navy block heading 'Delivering bad news' with 'SPIKES' printed in BOLD RED plain text beside it (not boxed), followed by SIX stations whose labels each print an enlarged RED initial letter with a bold navy remainder (red 'S' + 'etting', red 'P' + 'erception', red 'I' + 'nvitation', red 'K' + 'nowledge', red 'E' + 'motions', red 'S' + 'trategy'), each with a body paragraph: Setting — 'Offer in advance for the patient to bring support. Eliminate distractions, ensure privacy, and sit down with the patient to talk.'; Perception — 'Determine the patient's understanding and expectations of the situation.'; Invitation — 'Obtain the patient's permission to disclose the news and what level of detail is desired.'; Knowledge — 'Share the information in small pieces without medical jargon, allowing time to process. Assess the patient's understanding.'; Emotions — 'Acknowledge the patient's emotions, and provide opportunity to express them. Listen and offer empathetic responses.'; Strategy — 'If the patient feels ready, discuss treatment options and goals of care. Offer an agenda for the next appointment. Giving control to the patient may be empowering. Ask how they feel a problem might be solved and what they would like to do about the plan of action.' The acronym SPIKES and the red-initial label device are First Aid's own.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "bad-news-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (BadNewsMap in visuals/pubhealth-p23.tsx): the SPIKES six-station rail — six station cards in printed order, each with an enlarged red initial letter (S, P, I, K, E, S), the station name, its printed key moves, a role chip (stage before speech / calibrate before content / permission before disclosure / chunk, then check / clear emotion before plan / gated: 'if the patient feels ready'), and the KYP order strip (stage → calibrate → permit → disclose in small pieces → clear the emotion → return control); the block's full text is ALSO carried verbatim in the note's SPIKES table block (blocks[2]), core.what, mechanisms[1] spikes-flow, and recall[6-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "bad-news-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh23"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "interpreters-bad-news.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "interpreters-bad-news.json").write_text(
    json.dumps({"topicId": "interpreters-bad-news", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "interpreters-bad-news", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets, both pure text in a side-head layout (census: zero raster images) — the 'Use of interpreters' block (sv1: SIX printed paragraphs, the professional-interpreter default with the fluency exception, the telephone/video fallback, the charted family-member preference, the never-assume language-ask rule, the direct-speech rule, the pace rule, the spoken-vs-sign positioning mirror, the emergency override) and the 'Delivering bad news' block (sv2: SPIKES, First Aid's OWN acronym printed in bold red with red-initial station labels, six stations with their printed moves) — both accounted for in ONE registry visual (bad-news-map, BadNewsMap in visuals/pubhealth-p23.tsx, viewBox 0 0 1102 1280), each as an ORIGINAL KYP ADAPTATION: the interpreter protocol as the fallback ladder + rule cards + positioning diagrams with sightline arrows (Zone A), and SPIKES as the six-station rail with red initial letters plus the KYP order strip (Zone B); nothing is reproduced, and both blocks' full text is additionally carried VERBATIM in the note's two table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v full-page pass (vlm-census.txt) confirmed the bold-red SPIKES, the red-initial station labels, the two bold navy block headings, the banner printing ONCE (running header only — pdf 295 is not the subsection opener), and the absence of margin mnemonics, boxes, footnotes, and images. ADJUDICATION: the batch brief matched the print exactly (both blocks, every sentence, both interpreter positions, all six stations) — no corrections. STAGED under .usmle-pipeline-cache/staging-pubh23/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH23 manifest + inventory staged: {OUT}/manifests/interpreters-bad-news.json, {OUT}/visual-inventory/interpreters-bad-news.json")
print(f"interpreters-bad-news: evidence {len(kept)}/{len(E1)} verified")
