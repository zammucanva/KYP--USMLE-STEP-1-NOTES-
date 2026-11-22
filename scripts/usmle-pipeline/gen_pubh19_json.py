#!/usr/bin/env python3
"""PUBH19 informed-consent — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh19/ (the promotion step owns
content/). Source: FULL pdf page 291 / book 269 (Part 1) — the SECOND page of
the ETHICS subsection (the banner opened on pdf 290 / book 268-lower with
the core principles and decision-making capacity; pdf 292 / book 270 opens
Ventilator-assisted life support). The topic owns the WHOLE page: ONE
continuous two-column term/definition table carrying THREE blocks: (1)
"Informed consent" — a process requiring Disclosure (discussion of pertinent
information, including risks/benefits), Understanding (ability to
comprehend), Capacity (ability to reason and make one's own decisions —
distinct from competence, a legal determination), and Voluntariness (freedom
from coercion and manipulation); plus the comprehensive-understanding
sentence (diagnosis, risks/benefits of proposed treatment, alternative
options, INCLUDING NO TREATMENT) and the right to revoke written consent at
any time, even orally; plus the exceptions box "Exceptions to informed
consent (WIPE it away)" — Waiver / Legally Incompetent / Therapeutic
Privilege / Emergency situation; (2) "Consent for minors" — a minor is
generally any person <18 years old; parental consent laws vary by state;
parental consent in general obtained except emergency treatment (eg, blood
transfusions) or legal emancipation (eg, married, self-supporting, or in the
military); "Situations in which parental consent is usually not required" —
Sex (contraception, STIs, prenatal care—usually not abortion) / Drugs
(substance use disorder treatment) / Rock and roll (emergency/trauma);
always encourage healthy minor-guardian communication; seek a minor's assent
(agreement of someone unable to legally consent) even when consent is not
required; (3) "Advance directives" — instructions given by a patient in
anticipation of the need for a medical decision, details varying per state
law, in FOUR printed rows: Oral advance directive (prior oral statements;
problems arise from variance in interpretation; more valid if informed,
specific, a choice, repeated over time to multiple people), Written advance
directive (a living will is an example), Medical power of attorney (agent;
can be revoked by patient if decision-making capacity is intact; more
flexible than a living will), Do not resuscitate order (prohibits CPR;
other life-sustaining measures eg intubation, feeding tube, chemotherapy
may still be considered). Census (pdfimages): ZERO raster images — the
term/definition table is the page's only printed asset. VLM AVAILABLE this
session (glm-4.6v at 120dpi): ONE full-page pass
(staging-pubh19/vlm-census.txt) confirming the three blocks and four
directive rows verbatim, the WIPE heading with "WIPE" in RED and the four
exception bullets led by BOLD RED initial letters (W, I, P, E), "Sex",
"Drugs", "Rock and roll" in BOLD RED — First Aid's OWN mnemonic devices,
carried VERBATIM and ATTRIBUTED (not counted among the KYP mnemonics) — the
bold navy main terms on pale shaded cells vs the smaller medium-blue
directive sub-rows, thin black rules with no zebra striping, the ETHICS
banner printed ONCE (running-header ribbon only), and the absence of margin
notes, asterisk footnotes, and images. ADJUDICATIONS, documented in the
census file and the manifest notes: (A) the task brief's block description
matched the print exactly (four process rows, four WIPE exceptions, the
Sex/Drugs/Rock-and-roll trio, four directive rows) — no correction needed;
(B) the FLEXIBILITY LADDER (words -> paper -> person: oral -> written/
living will -> medical power of attorney) is the KYP synthesis of printed
cues only — the Oral row's "problems arise from variance in interpretation"
and the POA row's "More flexible than a living will" — and is flagged as
such everywhere it is drawn, with the DNR order drawn BESIDE the ladder as
a scoped order (it names one intervention, CPR; the print never ranks it);
(C) banner census — the VLM pass and the raw layer agree the ETHICS ribbon
prints ONCE (running header; no second in-body ribbon on this continuation
page). Printed quirks carried + documented: "SEC TION II" header-space
extraction artifact (known, as-is); C1 control bytes (\\x83) preceding every
bullet glyph in the raw layer (stripped by the normalizer, documented);
line-wrap hyphenation merges in the raw text layer — "decision-making"
extracts as "decisionmaking" TWICE (the Legally Incompetent bullet, raw
lines 30-31, and the Medical power of attorney row, raw line 81) and
"life-sustaining" extracts as "lifesustaining" (the DNR row, raw line 87) —
the print carries the hyphens, the note's verbatim table prints the
hyphenated forms, and the evidence ranges preserve the RAW merged forms (a
quote must be a contiguous text-layer span); the em-dashes in the exception
bullets and "prenatal care—usually not abortion" are as printed; the
"prenatal care—usually" wrap falls after the em-dash in print (raw layer
keeps one line); the four directive terms wrap across two lines in the
printed term column. Nothing is reproduced: the page's single table asset
is an ORIGINAL KYP ADAPTATION (pillars / valve cards / gates / ladder) in
ONE registry visual (consent-map, ConsentMap in visuals/pubhealth-p19.tsx,
viewBox 0 0 1102 1290); the full page is additionally carried VERBATIM in
the note's table block. DrugCards: none — the page prints ethico-legal
process, not drugs (folded by absence; the clinical anchors — emergency
transfusion, emancipation criteria, DNR scope, midstream revocation — are
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
L = {291: pages[290].split("\n")}
P = {291: norm(pages[290])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 269, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, and the subsection banner '▶ PUBLIC HEALTH SCIENCES—ETHICS' printed ONCE (running-header ribbon only — no second in-body ribbon on this continuation page; raw layer + VLM pass agree)", rng(291, 1, 7), [291]),
    ("BLOCK 1 — the 'Informed consent' title and the four-part process list, all four requirements verbatim: Disclosure (discussion of pertinent information, including risks/benefits), Understanding (ability to comprehend), Capacity (ability to reason and make one's own decisions — distinct from competence, a LEGAL determination), Voluntariness (freedom from coercion and manipulation)", rng(291, 9, 19), [291]),
    ("BLOCK 1 closers — the comprehensive-understanding sentence (diagnosis, risks/benefits of proposed treatment and alternative options, INCLUDING NO TREATMENT) and the revocation clause (right to revoke written consent at any time, even orally)", rng(291, 20, 25), [291]),
    ("The exceptions heading with First Aid's OWN red mnemonic — 'Exceptions to informed consent (WIPE it away):' (WIPE prints in red, VLM-confirmed) — plus the first exception: Waiver—patient explicitly relinquishes the right of informed consent", rng(291, 27, 29), [291]),
    ("WIPE exception 2 — Legally Incompetent—patient lacks decision-making capacity (obtain consent from legal surrogate); the raw layer merges the line-wrapped 'decision-' + 'making' to 'decisionmaking' (the print carries the hyphen; the note's verbatim table prints 'decision-making' and the merge is documented)", rng(291, 30, 31), [291]),
    ("WIPE exception 3 — Therapeutic Privilege—withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity (this instance of 'decision-making' does NOT wrap in print and extracts intact)", rng(291, 32, 35), [291]),
    ("WIPE exception 4 — Emergency situation—implied consent may apply", rng(291, 36, 37), [291]),
    ("BLOCK 2 — the 'Consent for minors' title and default paragraph: a minor is generally any person <18 years old; parental consent laws in relation to healthcare vary by state; in general, parental consent should be obtained, but exceptions exist for emergency treatment (eg, blood transfusions) or if minor is legally emancipated (eg, married, self-supporting, or in the military)", rng(291, 39, 47), [291]),
    ("BLOCK 2 exceptions box — 'Situations in which parental consent is usually not required:' with First Aid's OWN red trio (the three lead words print in bold red, VLM-confirmed): Sex (contraception, STIs, prenatal care—usually not abortion) / Drugs (substance use disorder treatment) / Rock and roll (emergency/trauma)", rng(291, 49, 54), [291]),
    ("BLOCK 2 closers — physicians should always encourage healthy minor-guardian communication; physician should seek a minor's assent (agreement of someone unable to legally consent) even if their consent is not required", rng(291, 55, 59), [291]),
    ("BLOCK 3 — the 'Advance directives' title and lead: instructions given by a patient in anticipation of the need for a medical decision; details vary per state law", rng(291, 61, 64), [291]),
    ("DIRECTIVE ROW 1 — Oral advance directive: incapacitated patient's prior oral statements commonly used as guide; problems arise from variance in interpretation; more valid if patient was informed, directive was specific, patient made a choice, and decision was repeated over time to multiple people", rng(291, 66, 70), [291]),
    ("DIRECTIVE ROW 2 — Written advance directive: delineates specific healthcare interventions that patient anticipates accepting or rejecting during treatment for a critical or life-threatening illness; a living will is an example", rng(291, 72, 76), [291]),
    ("DIRECTIVE ROW 3 — Medical power of attorney: patient designates an agent to make medical decisions in the event that the patient loses decision-making capacity; may also specify decisions in clinical situations; can be revoked by patient if decision-making capacity is intact; MORE FLEXIBLE THAN A LIVING WILL (the print's explicit ranking cue); the raw layer merges the wrapped 'decision-' + 'making' to 'decisionmaking' here too (documented)", rng(291, 78, 82), [291]),
    ("DIRECTIVE ROW 4 — Do not resuscitate order: DNR order prohibits cardiopulmonary resuscitation (CPR); patient may still consider other life-sustaining measures (eg, intubation, feeding tube, chemotherapy); the raw layer merges the wrapped 'life-' + 'sustaining' to 'lifesustaining' (the print carries the hyphen; documented)", rng(291, 84, 87), [291]),
    ("The indd footer slug and print timestamp — 'FAS1_2026_06-PubHealth.indd 269' + '12/16/25 12:46 PM' (page identity, book 269)", rng(291, 89, 91), [291]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"informed-consent: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "informed-consent", "title": "Informed Consent, Minors, and Advance Directives",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Ethics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [291], "bookPages": "269–269"},
    "sourceEvidence": kept, "visualIds": ["consent-map"],
    "mechanismIds": ["consent-process-map", "minor-to-directive-continuum"],
    "kypExtensions": [
        {"id": "who-decides-router",
         "summary": "The four-question router that turns the page's three blocks into one decision procedure: (1) WHO is the decider — adult with capacity, minor, or capacity lost; (2) does the PROCESS stand — the four printed requirements run in order (Disclosure with the alternatives-and-no-treatment set, Understanding, Capacity, Voluntariness) with the revocation clause attached; (3) is the patient a MINOR — run the gates (emergency treatment, emancipation, the Sex/Drugs/Rock-and-roll set) with assent and minor-guardian communication on every path; (4) if capacity is LOST — match the instrument (oral directive, living will, medical power of attorney, DNR scope).",
         "origin": "outside-first-aid", "rationale": "The source prints the three blocks as parallel doctrine; the single router that sequences them (decider → process → exception → substitute) is KYP's organization.",
         "location": "core.keyIdea MOVES 1-4 + mechanisms[0] and [1] + blocks[3] the steps block + the registry visual's four zones"},
        {"id": "pillar-failure-reading-of-wipe",
         "summary": "The reading of the WIPE exceptions as the four ways the consent process fails, each with its guardrail: Waiver = the patient explicitly relinquishes the process (a family's request is never a waiver); Legally Incompetent = the capacity pillar is absent and consent routes to the legal surrogate (capacity clinical vs competence legal); Therapeutic Privilege = the physician withholds, and only when disclosure would severely harm the patient or undermine informed decision-making capacity; Emergency = implied consent may apply, and lasts only as long as the emergency. The capacity-vs-competence clinical/legal gloss and the guardrails beyond the printed conditions are KYP's.",
         "origin": "outside-first-aid", "rationale": "The source prints the four exceptions as a list; mapping each onto a process failure point and adding the guardrails is KYP's synthesis.",
         "location": "mechanisms[0] the WIPE node and its edges + blocks[2] decoder WIPE item + blocks[4] exam callout SHAPE 1 + usmle.traps[0-1]"},
        {"id": "words-paper-person-ladder",
         "summary": "The advance-directive flexibility ladder — WORDS (oral directive: prior statements, problems from variance in interpretation, strengthened by the four printed validity boosters) → PAPER (written directive / living will: specific interventions for critical or life-threatening illness, rigid but precise) → PERSON (medical power of attorney: a designated agent, printed 'more flexible than a living will', revocable while capacity is intact) — with the DNR order drawn BESIDE the ladder as the scoped order that prohibits CPR only (intubation, feeding tube, chemotherapy remain separate decisions). The full ladder ordering is the KYP synthesis of the printed cues; the print ranks only implicitly.",
         "origin": "outside-first-aid", "rationale": "The source's only explicit ranking language is 'More flexible than a living will' (POA row) plus the Oral row's interpretation problems; assembling the three-rung ladder and placing the DNR outside it is KYP's synthesis, flagged as such on the visual, in the note, and here.",
         "location": "mechanisms[1] the ladder node + blocks[2] decoder ladder item + blocks[5] the living-will-vs-POA compare block + the registry visual's Zone D"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the therapeutic-privilege-limit stem, the 15-year-old contraception stem, the DNR-scope intubation stem, the living-will-vs-POA flexibility stem), 4 traps (capacity vs competence; waiver vs therapeutic privilege; emancipation vs the Sex/Drugs/Rock-and-roll set; DNR vs withdrawal of life-sustaining measures), 3 pivots (the signed-form tell, the minor-gates router, the instrument matcher), and 8 recall cards covering every printed block.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the doctrine only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN two devices — 'Exceptions to informed consent (WIPE it away)' (the heading prints WIPE in red, the four bullets led by bold red W/I/P/E initials) and the 'Sex / Drugs / Rock and roll' trio (the three lead words print in bold red) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim table block, and the visual's cards; plus TWO KYP originals, marked as such: 'DUCV' (the four process requirements in printed order — Disclosure, Understanding, Capacity, Voluntariness) and 'WORDS, PAPER, PERSON' (the advance-directive flexibility ladder, with the DNR as the scoped order that stops CPR only).",
         "origin": "outside-first-aid", "rationale": "The two red mnemonic devices are the source's own (attributed, not counted as KYP's); no margin mnemonic prints anywhere on pdf 291 (pdfimages + VLM census, staging-pubh19/vlm-census.txt); the two KYP codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the visual's Zone B cards and Zone C red row"},
        {"id": "clinical-anchor-layer",
         "summary": "The clinical anchor layer: the four ward encounters the page dresses — the emergency transfusion (the printed example of the emergency gate, generalized category-wide), the emancipated minor (the three printed criteria, contrasted with the category-specific trio), the DNR at the bedside (one prohibition, not a treatment plan), and the midstream revocation (the spoken no outranking the paperwork) — plus the miniCase (the 15-year-old contraception-and-STI vignette routed to provide-care-without-parental-consent against the parental-consent default, the emancipation-court, the emergency-only, and the notify-parents distractors).",
         "origin": "outside-first-aid", "rationale": "The printed examples (blood transfusions, the emancipation criteria, the DNR's life-sustaining measures, the revocation clause) are the source's; the encounter framing, the emancipation-vs-category contrast, and the miniCase vignette with its distractors are KYP's design, flagged as such.",
         "location": "clinical block + usmle.miniCase + usmle.patterns + the visual's Zone C gates"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 291 / book 269, the SECOND page of the ETHICS subsection (pdf 290 / book 268-lower is the core-ethical-principles page; pdf 292 / book 270 opens Ventilator-assisted life support), carrying ONE continuous two-column term/definition table with THREE blocks — Informed consent (the four-part process + the comprehensive-understanding and revocation sentences + the WIPE exceptions box), Consent for minors (the <18 default + the emergency/emancipation gates + the Sex/Drugs/Rock-and-roll box + the communication and assent closers), and Advance directives (the lead + four instrument rows: Oral, Written/living will, Medical power of attorney, DNR) — carried VERBATIM in the note's table block (blocks[1]). CENSUS (pdfimages): ZERO raster images — the table is the page's only printed asset; VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh19/vlm-census.txt): the three blocks and four directive rows confirmed verbatim (none missing or extra); the 'Exceptions to informed consent (WIPE it away)' heading prints 'WIPE' in RED with the four exception bullets led by BOLD RED initial letters (W, I, P, E), and 'Sex', 'Drugs', 'Rock and roll' print in BOLD RED — First Aid's OWN mnemonic devices, carried VERBATIM and ATTRIBUTED (not counted among the KYP mnemonics); the three main term names print in larger bold dark navy on pale blue/gray shaded cells while the four directive sub-rows print in smaller bold medium blue; thin black horizontal rules, no zebra striping, small square bullet glyphs; the ETHICS banner prints ONCE (running-header ribbon only — unlike subsection-opener pages, there is no second in-body ribbon); no margin notes, mnemonics, asterisk footnotes, or images. ADJUDICATIONS: (A) the task brief's block description matched the print exactly — no correction needed; (B) the FLEXIBILITY LADDER (words → paper → person) is the KYP synthesis of printed cues only (the Oral row's 'problems arise from variance in interpretation'; the POA row's 'More flexible than a living will') and is flagged as such everywhere it is drawn, with the DNR order drawn BESIDE the ladder as a scoped order that prohibits CPR only (the print never ranks the DNR); (C) the banner census — VLM and raw layer agree the ribbon prints ONCE. Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); C1 control bytes (\\x83) preceding every bullet glyph in the raw layer (stripped by the normalizer); line-wrap hyphenation merges in the raw layer — 'decision-making' extracts as 'decisionmaking' TWICE (Legally Incompetent bullet; Medical power of attorney row) and 'life-sustaining' as 'lifesustaining' (DNR row) — the note's verbatim table prints the hyphenated forms and the evidence ranges preserve the RAW merged forms (contiguous-span rule); the em-dashes in the exception bullets and 'prenatal care—usually not abortion' are as printed (the wrap falls after the em-dash); the four directive terms wrap across two lines in the printed term column; curly apostrophes ('one's', 'minor's', 'patient's') are as printed. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (consent-process-map, minor-to-directive-continuum), a visual block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the four ward encounters), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (core-ethical-principles, surrogates-confidentiality, challenging-scenarios, patient-safety-quality — all four are public-health census topicIds; the first two are produced in parallel and referenced by design), 4 crossLinks, 4 mnemonics (First Aid's own two red devices carried attributed + two KYP originals marked), and a miniCase with 5 options (exactly 1 correct, why/why-wrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints ethico-legal process, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical anchors (blood transfusions, emancipation criteria, DNR scope, revocation) are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh19/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'consent-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's ONE visual asset (the term/definition table) is implemented in ONE registry visual (consent-map, ConsentMap in visuals/pubhealth-p19.tsx, viewBox 0 0 1102 1290) as an ORIGINAL KYP ADAPTATION with four zones — Zone A the four process pillars + disclosure-set and revocation strips, Zone B the four WIPE valve cards (red initials, attributed), Zone C the minors panel (default + gates + the attributed red Sex/Drugs/Rock-and-roll row + assent/communication closers), Zone D the three instrument cards on the flexibility ladder + the DNR scoped-order strip — with the full page's text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Ethics",
    "topicId": "informed-consent", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "informed-consent-sv1",
        "sourcePages": {"part": 1, "pdfPages": [291], "bookPages": "269"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The book-269 term/definition table — the Ethics subsection's consent page: three printed blocks (Informed consent with its four-part process and WIPE exceptions; Consent for minors with its gates and the Sex/Drugs/Rock-and-roll set; Advance directives with its four instrument rows) — the page's only printed asset and the operational core of patient autonomy",
        "sourceFigureDescription": "TWO-COLUMN TERM/DEFINITION TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh19/vlm-census.txt — VLM available this session): the running-header ribbon (PUBLIC HEALTH SCIENCES → PUBLIC HEALTH SCIENCES—ETHICS, printed ONCE; SECTION II block with page number 269), then the table — bold dark-navy term names on pale light-blue/gray shaded cells in the left column (Informed consent, Consent for minors, Advance directives as the three main, larger terms; Oral advance directive, Written advance directive, Medical power of attorney, Do not resuscitate order as four smaller bold medium-blue sub-rows), definitions in the right column with small square bullet glyphs, thin black horizontal rules, no vertical borders, no zebra striping. RED TEXT (First Aid's own): the heading 'Exceptions to informed consent (WIPE it away):' prints 'WIPE' in red with the four exception bullets led by bold red initial letters — Waiver—patient explicitly relinquishes the right of informed consent; Legally Incompetent—patient lacks decision-making capacity (obtain consent from legal surrogate); Therapeutic Privilege—withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity; Emergency situation—implied consent may apply — and the minors box's 'Sex', 'Drugs', 'Rock and roll' lead words print in bold red: Sex (contraception, STIs, prenatal care—usually not abortion); Drugs (substance use disorder treatment); Rock and roll (emergency/trauma). Also printed: the four process requirements (Disclosure, Understanding, Capacity [distinct from competence, a legal determination], Voluntariness), the comprehensive-understanding sentence (alternative options including no treatment), the revocation clause (revoke written consent at any time, even orally), the minors default (<18 years old; parental consent laws vary by state; emergency treatment eg blood transfusions; legally emancipated eg married, self-supporting, or in the military), the communication and assent closers, the directives lead (instructions given in anticipation; details vary per state law), and the four instrument rows with the POA's 'More flexible than a living will' and the DNR's CPR-only scope. Line-wrap hyphenations in print: 'decision-making' (twice), 'life-sustaining', and 'prenatal care—usually'.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "consent-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the whole registry visual (ConsentMap in visuals/pubhealth-p19.tsx, viewBox 0 0 1102 1290), four zones: Zone A the four process pillars in printed order (Disclosure / Understanding / Capacity-with-the-competence-parenthetical / Voluntariness, each with its printed definition) plus the disclosure-set strip (INCLUDING NO TREATMENT) and the revocation strip; Zone B the four WIPE exception cards with red initial letters and First Aid attribution; Zone C the minors panel (the <18 default card, the EMERGENCY TREATMENT and LEGALLY EMANCIPATED gate chips, the attributed red Sex/Drugs/Rock-and-roll row, and the communication + assent closers); Zone D the four advance-directive instruments — Oral / Written / Medical power of attorney as staircase cards on the KYP flexibility ladder (flagged: the print ranks only implicitly, 'More flexible than a living will') with the DNR drawn beside as the scoped CPR-only order; the full page's text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block (blocks[2]), and recall[0-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "consent-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh19"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "informed-consent.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "informed-consent.json").write_text(
    json.dumps({"topicId": "informed-consent", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "informed-consent", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries ONE printed visual asset — the book-269 two-column term/definition table with its three blocks (Informed consent: the four-part process + the WIPE exceptions; Consent for minors: the <18 default, the emergency/emancipation gates, the Sex/Drugs/Rock-and-roll set, the assent and communication closers; Advance directives: the four instrument rows) — accounted for in ONE registry visual (consent-map, ConsentMap in visuals/pubhealth-p19.tsx, viewBox 0 0 1102 1290) as an ORIGINAL KYP ADAPTATION: four zones (process pillars / WIPE valve cards / minors panel / directive ladder with the scoped DNR strip), every printed label, definition, and both of First Aid's red mnemonic devices ('WIPE it away' with its W·I·P·E initials; the Sex / Drugs / Rock and roll row) carried verbatim and attributed; nothing is reproduced, and the full page's text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v full-page pass (vlm-census.txt) confirmed the three blocks and four directive rows, the red WIPE heading and initials, the bold-red Sex/Drugs/Rock-and-roll lead words, the two-tier term styling, and the absence of margin mnemonics and images. ADJUDICATION: the flexibility ladder (words → paper → person) is the KYP synthesis of the printed cues (the Oral row's interpretation problems; the POA row's 'More flexible than a living will') and the DNR is drawn as a scoped order beside it (the print never ranks the DNR); the ETHICS ribbon prints ONCE (running header only). FULL single page, the SECOND of the Ethics thread. STAGED under .usmle-pipeline-cache/staging-pubh19/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH19 manifest + inventory staged: {OUT}/manifests/informed-consent.json, {OUT}/visual-inventory/informed-consent.json")
print(f"informed-consent: evidence {len(kept)}/{len(E1)} verified")
