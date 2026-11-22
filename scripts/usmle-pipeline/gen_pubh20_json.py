#!/usr/bin/env python3
"""PUBH20 surrogates-confidentiality — manifest + inventory (Public Health
batch 2), STAGED under .usmle-pipeline-cache/staging-pubh20/ (the promotion
step owns content/). Source: FULL pdf page 292 / book 270 (Part 1) — the THIRD
page under the ETHICS banner and its LAST (pdf 290 opens the subsection; pdf
293 opens COMMUNICATION SKILLS / patient-centered interviewing); the topic
owns the WHOLE page, which carries FOUR label-column text blocks: (1)
"Ventilator-assisted life support" — discussions ideally occur before
ventilator support is necessary, but preferences may be absent when the
intervention is needed to survive; surrogate decision-makers (patient
identified or legally appointed) focus on the prognosis of the condition AND
the believed wishes of the patient; the OVERRIDE RULE ("If surrogates
indicate patient would not have wanted to receive life support with
ventilation -> withhold or withdraw life support regardless of what the
surrogate prefers."); the support wrap (palliative care, chaplain services,
primary care physician, emotional support); (2) "Surrogate decision-maker" —
capacity lost + no advance directive -> individuals (surrogates) who know the
patient must determine what the patient would have done; priority spouse ->
adult children -> parents -> adult siblings -> other relatives (First Aid's
OWN red mnemonic "the spouse chips in"); (3) "Confidentiality" — respects
patient privacy and autonomy; incapacitated/emergent disclosure to family and
friends guided by professional judgment of patient's best interest; voluntary
waiver (eg, insurance company request); THREE general principles for
exceptions (serious and imminent harm; no alternative means to warn or
protect; steps can prevent harm); First Aid's OWN red mnemonic "The
physician's good judgment SAVED the day" — Suicidal/homicidal ideation,
Abuse (children, older adults, and/or prisoners), duty to protect potential
Victims (state-specific), Epilepsy and other impaired automobile drivers,
Reportable Diseases (eg, STIs, hepatitis, food poisoning) with the warn
mechanics (physicians warn public officials, who notify people at risk;
dangerous communicable diseases such as TB or Ebola may require involuntary
treatment); (4) "Accepting gifts from patients" — a complex subject without
definitive regulations; cards, baked goods, and inexpensive gifts in
practice; accept-or-decline = individual assessment of whether the risk of
harm outweighs the potential benefit; three decline rules (inappropriately
large or valuable; could detrimentally affect patient care; emotional or
financial stress for the patient); the decline script (thank the patient for
offering a kind gift, politely indicate it must be declined, emphasize the
incident does not influence the physician-patient relationship in any way).
Census (pdfimages): ZERO raster images — pure text, four label-column blocks,
the indd footer slug. VLM AVAILABLE this session (glm-4.6v at 120dpi): ONE
full-page pass (staging-pubh20/vlm-census.txt) confirming the four headings
and their wraps, the RED printing of both FA mnemonics ("the spouse chips in"
inside the chain's parenthesis; "SAVED" in red capitals + the initial
capitals S-A-V-E-D of the five bullets), the ventilator override rule in
plain roman text with a black arrow (not boxed/italicized), small solid
square bullets, the ETHICS banner printing ONCE (running header only), and
the absence of margin notes, mnemonics in the margins, asterisk footnotes,
and images. ADJUDICATIONS, documented in the census file and the manifest
notes: (A) the block-2 heading prints "Surrogate decision-maker" with the
hyphen at the line wrap (pdftotext -layout + the VLM pass agree) — the raw
text layer MERGES it to "Surrogate decisionmaker"; the note's verbatim table
carries the hyphenated print and the evidence range preserves the raw merge
(same class as book 256's "riskrelated" merge); (B) the task brief's block
descriptions matched the print exactly — no corrections needed; (C) the
VLM's per-word red read of the priority chain ("spouse / children /
siblings / spouse chips" in red bold, black arrows) is recorded as VLM
detail while the mnemonic proper is the parenthetical "(the spouse chips
in)", carried VERBATIM and ATTRIBUTED. Printed quirks carried + documented:
"SEC TION II" header-space extraction artifact (known, as-is); C1 control
bytes (U+008E) around the -> arrows in the override rule and the priority
chain; a C1 byte (U+0083) before each square-bullet glyph; the headings
"Ventilator-assisted life / support" and "Accepting gifts from / patients"
wrap across two lines (no hyphens); "many are state specific" prints
unhyphenated while "Duty to protect—state-specific laws" carries an em-dash.
Nothing is reproduced: all four text blocks are ORIGINAL KYP ADAPTATIONS in
ONE registry visual (confidentiality-map, ConfidentialityMap in
visuals/pubhealth-p20.tsx, viewBox 0 0 1102 1300): Zone A the surrogate
priority ladder (with the FA mnemonic attributed in red), Zone B the
ventilator decision rule strip, Zone C the confidentiality default + three
gate chips + five SAVED letter cards + warn-mechanics strip, Zone D the
gifts decision panel with the decline script; the four blocks are
additionally carried VERBATIM in the note's table block. DrugCards: none —
the page prints ethics rules, not drugs (folded by absence; the clinical
anchors — palliative wrap, reportable clusters, protected populations — are
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
L = {292: pages[291].split("\n")}
P = {292: norm(pages[291])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 270, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, and the subsection banner '▶ PUBLIC HEALTH SCIENCES—ETHICS' — the banner's THIRD page and its LAST (pdf 293 opens COMMUNICATION SKILLS); unlike the subsection opener on book 256, the banner prints ONCE here (running header only; VLM-confirmed)", rng(292, 1, 7), [292]),
    ("BLOCK 1 HEADING — 'Ventilator-assisted life support' (blue bold label-column heading; wraps across two lines 'Ventilator-assisted life / support' with no hyphen)", rng(292, 9, 10), [292]),
    ("BLOCK 1 body, part 1 — the ideal (discussions with patients occur before ventilator support is necessary), the preference gap (information about patient preferences may be absent at the time patients require this intervention to survive), and the surrogate focus (patient identified or legally appointed; continuation or withdrawal of ventilatory support; focusing on both the prognosis of the condition and the believed wishes of the patient)", rng(292, 12, 16), [292]),
    ("BLOCK 1 body, part 2 — the OVERRIDE RULE, printed with the arrow: if surrogates indicate patient would not have wanted to receive life support with ventilation → withhold or withdraw life support REGARDLESS OF WHAT THE SURROGATE PREFERS (the raw line carries a C1 control byte U+008E before the arrow — known extraction artifact, stripped by normalization; VLM: the sentence prints in plain roman text, not boxed or italicized)", rng(292, 17, 18), [292]),
    ("BLOCK 1 body, part 3 — the support wrap: if the decision is made to withhold or withdraw life support, involve palliative care, chaplain services, and the primary care physician in medical discussions with the family and provide emotional support", rng(292, 19, 20), [292]),
    ("BLOCK 2 HEADING — the print hyphenates across the line wrap ('Surrogate decision- / maker', pdftotext -layout + VLM-confirmed); the raw text layer MERGES it to 'Surrogate decisionmaker' (the raw merge is preserved in this evidence range; the note's verbatim table carries the hyphenated print — same class as book 256's 'riskrelated' merge)", rng(292, 22, 22), [292]),
    ("BLOCK 2 body — the two preconditions (loses decision-making capacity; has not prepared an advance directive), the surrogates' task (individuals who know the patient must determine what the patient would have done), and the priority chain spouse → adult children → parents → adult siblings → other relatives with First Aid's OWN mnemonic '(the spouse chips in)' printed in RED inside the parenthesis (VLM: the words spouse/children/siblings/'spouse chips' print in red bold; the arrows print black; the raw line carries C1 bytes U+008E around each arrow — known artifact)", rng(292, 24, 27), [292]),
    ("BLOCK 3 HEADING — 'Confidentiality' (blue bold label-column heading)", rng(292, 29, 29), [292]),
    ("BLOCK 3 body, part 1 — the default (confidentiality respects patient privacy and autonomy), the incapacitated/emergent disclosure rule (disclosing information to family and friends should be guided by professional judgment of patient's best interest), and the voluntary waiver (eg, insurance company request)", rng(292, 31, 34), [292]),
    ("BLOCK 3 body, part 2 — the three printed general principles for exceptions to confidentiality: potential physical harm to self or others is serious and imminent; alternative means to warn or protect those at risk is not possible; steps can be taken to prevent harm (three square-bullet lines; the raw layer prefixes each bullet with a C1 byte U+0083 before the ▘ glyph — known artifact)", rng(292, 35, 38), [292]),
    ("BLOCK 3 body, part 3 — the SAVED lead-in: examples of exceptions to patient confidentiality (many are state specific — printed WITHOUT a hyphen) include the following ('The physician's good judgment SAVED the day') — First Aid's OWN mnemonic, with SAVED printed in RED capitals (VLM-confirmed)", rng(292, 39, 40), [292]),
    ("BLOCK 3 body, part 4 — the first three SAVED example bullets with their red initial capitals: patients with active Suicidal/homicidal ideation; Abuse (children, older adults, and/or prisoners); Duty to protect—state-specific laws that sometimes allow physician to inform or somehow protect potential Victim from harm (the em-dash in 'protect—state-specific' is as printed)", rng(292, 41, 44), [292]),
    ("BLOCK 3 body, part 5 — the last two SAVED example bullets and the warn mechanics: patients with Epilepsy and other impaired automobile drivers; Reportable Diseases (eg, STIs, hepatitis, food poisoning); physicians may have a duty to warn public officials, who will then notify people at risk; dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment", rng(292, 45, 48), [292]),
    ("BLOCK 4 HEADING — 'Accepting gifts from patients' (blue bold label-column heading; wraps across two lines 'Accepting gifts from / patients' with no hyphen)", rng(292, 50, 51), [292]),
    ("BLOCK 4 body, part 1 — the printed debate: a complex subject without definitive regulations; some argue the patient-physician relationship is strengthened through accepting a gift from a patient, while others argue negative consequences outweigh the benefits; and the practice + assessment: patients often present items such as cards, baked goods, and inexpensive gifts; the physician's decision to accept or decline is based on an individual assessment of whether or not the risk of harm outweighs the potential benefit", rng(292, 53, 58), [292]),
    ("BLOCK 4 body, part 2 — the three printed decline rules (three square-bullet lines, U+0083▘ in the raw layer): physicians should not accept gifts that are inappropriately large or valuable; gifts should not be accepted if the physician identifies that the gift could detrimentally affect patient care; gifts that may cause emotional or financial stress for the patient should not be accepted", rng(292, 59, 62), [292]),
    ("BLOCK 4 body, part 3 — the decline script: if a gift violates any of the guidelines above, the best practice is to thank the patient for offering a kind gift, but politely indicate that it must be declined; during this conversation it should be emphasized that the incident does not influence the physician-patient relationship in any way", rng(292, 63, 65), [292]),
    ("The indd footer slug and print timestamp — 'FAS1_2026_06-PubHealth.indd 270' and '12/16/25 12:46 PM' (page identity, book 270)", rng(292, 67, 69), [292]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"surrogates-confidentiality: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "surrogates-confidentiality", "title": "Surrogate Decision-Makers, Confidentiality, and Gifts",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Ethics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [292], "bookPages": "270–270"},
    "sourceEvidence": kept, "visualIds": ["confidentiality-map"],
    "mechanismIds": ["ventilator-surrogate-pathway", "saved-exceptions-gate"],
    "kypExtensions": [
        {"id": "ventilator-substituted-judgment",
         "summary": "The substituted-judgment reading of the printed ventilator rule: the surrogate is a conduit for the patient's values, not a decision-maker with their own vote — the believed wishes of the patient govern continuation/withdrawal of ventilatory support 'regardless of what the surrogate prefers' (KYP hook: WISHES, NOT WANTS), and the palliative wrap (palliative care, chaplain services, primary care physician, emotional support) is part of the printed answer rather than an afterthought; the two-input rule (prognosis of the condition AND believed wishes of the patient) is the synthesis of the printed sentence.",
         "origin": "outside-first-aid", "rationale": "The source prints the rule and the wrap as sentences but never names the principle (substituted judgment), never frames the wrap as part of the tested answer, and never labels the override direction; the framing and hooks are KYP's.",
         "location": "core.keyIdea GATE 2 + mechanisms[0] ventilator-surrogate-pathway + blocks[2] the decoder BLOCK 1 item + blocks[3] QUESTION 2 + the registry visual's Zone B rule strip"},
        {"id": "confidentiality-decision-line",
         "summary": "The keep-vs-break decision line: the printed permitted disclosures (the patient's voluntary waiver, eg insurance company request, and the incapacitated/emergent professional judgment of the patient's best interest) are keep-side disclosures working FOR the patient, while the five SAVED exceptions are breach-side overrides of the patient that must first pass the three printed general principles — compressed as the KYP original 'SERIOUS, STUCK, STOPPABLE' (harm Serious and imminent; Stuck — no alternative means to warn or protect; Stoppable — steps can prevent harm); the warn mechanics (physicians warn public officials, who notify people at risk; TB or Ebola may require involuntary treatment) sit at the breach-side far end.",
         "origin": "outside-first-aid", "rationale": "The source prints the default, the waiver, the three principles, and the examples as separate statements; the keep-vs-break line, the three-gate router, and the SERIOUS/STUCK/STOPPABLE compression are KYP's organization.",
         "location": "core.keyIdea GATE 3 + mechanisms[1] saved-exceptions-gate + blocks[4] the compare block + blocks[3] QUESTION 3 + the registry visual's Zone C gates and default row"},
        {"id": "vignette-protocol-layer",
         "summary": "The four-question vignette protocol layered over the printed page — WHO decides (capacity → directive → ladder), WHAT would the patient have wanted (ventilator override + wrap), MAY the information leave the room (default → waiver/emergent → gates → SAVED), MAY the physician keep the gift (harm-vs-benefit + three decline rules + script) — plus the attack structure: 4 patterns (the override stem, the ladder stem, the three-SAVED-letters stem, the gifts stem), 4 traps (wishes vs surrogate preference; ladder vs advance directive; permitted disclosure vs required breach; small gift vs large gift), 3 pivots (the who-decides router, the disclosure router, the who-gets-told router), and the 5-option miniCase (the stroke-patient ventilator vignette: withdraw per believed wishes with the wrap, against continue-per-surrogate, court-order, withdraw-without-discussion, and son-decides distractors).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the rules only; the protocol, the question shapes, the distractor logic, and the miniCase are KYP's design.",
         "location": "blocks[3] the steps block + usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN two mnemonics — 'the spouse chips in' (the surrogate priority chain's parenthesis, printed in RED) and 'The physician's good judgment SAVED the day' (SAVED in red capitals, the initial capitals S-A-V-E-D of the five example bullets picked out in red) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim table block, and the visual's Zone A panel and Zone C cards; plus TWO KYP originals, marked as such: 'SERIOUS, STUCK, STOPPABLE' (the three general principles) and 'WISHES, NOT WANTS' (the ventilator override).",
         "origin": "outside-first-aid", "rationale": "The two printed mnemonics are the source's own (attributed, not counted as KYP's); no margin mnemonic prints anywhere on pdf 292 (pdfimages + VLM census, staging-pubh20/vlm-census.txt); the two KYP codes are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's Zone A red panel, Zone B hook line, and Zone C gates"},
        {"id": "clinical-anchor-layer",
         "summary": "The clinical anchor layer built from the page's printed specifics: the withdrawal wrap (palliative care, chaplain services, and the primary care physician joining the family discussions with emotional support), the reportable clusters (STIs, hepatitis, food poisoning; the public-official warn route; TB or Ebola requiring possible involuntary treatment), and the protected populations + impaired drivers (children, older adults, and/or prisoners; epilepsy and other impaired automobile drivers) — plus the routing rule that the surrogate ladder is the NO-directive path (a prepared advance directive governs instead, the previous page's material).",
         "origin": "outside-first-aid", "rationale": "The specifics are printed (FA-own); the anchor grouping, the wrap-as-part-of-the-answer framing, the no-directive routing, and the boundary framing against books 268/269/271 are KYP's design, flagged as such.",
         "location": "clinical block + blocks[2] the decoder BOUNDARY item + related[0-1] + the visual's Zone A routing panel"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 292 / book 270, the THIRD and LAST page of the ETHICS subsection (pdf 290 opens it; pdf 293 opens COMMUNICATION SKILLS — patient-centered interviewing), carrying FOUR label-column text blocks — 'Ventilator-assisted life support' (the preference gap, the surrogate's two inputs, the override rule, the support wrap), 'Surrogate decision-maker' (the two preconditions, the surrogates' task, the priority chain), 'Confidentiality' (the default, waiver, emergent judgment, three general principles, the five SAVED exceptions, the warn mechanics), and 'Accepting gifts from patients' (the debate, the assessment, the three decline rules, the decline script) — all carried VERBATIM in the note's table block (blocks[1]). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh20/vlm-census.txt): the four headings and their wraps confirmed; the two FA mnemonics print in RED — 'the spouse chips in' (the words spouse/children/siblings/'spouse chips' in red bold per the VLM read, black arrows) and 'SAVED' (red capitals in the lead-in + red initial capitals S-A-V-E-D in the five bullets) — First Aid's OWN, carried VERBATIM and ATTRIBUTED (not counted among the KYP mnemonics); the ventilator override rule prints in plain roman text with a black arrow (not boxed, not italicized); the bullets are small solid squares; the ETHICS banner prints ONCE (running header only); no margin notes, mnemonics in the margins, asterisk footnotes, or images. ADJUDICATION (raw text layer + pdftotext -layout + the VLM pass all agree): the block-2 heading prints 'Surrogate decision-maker' with the hyphen at the line wrap — the raw text layer merges it to 'Surrogate decisionmaker' (the note's verbatim table carries the hyphenated print; the evidence range preserves the raw merge — same class as book 256's 'riskrelated'); the task brief's block descriptions matched the print exactly (no corrections needed); the VLM's per-word red read of the chain is recorded as VLM detail while the mnemonic proper is the parenthetical '(the spouse chips in)'. Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); C1 control bytes U+008E around the arrows in the override rule and the priority chain (known artifact, stripped by the gen script's normalization; the arrows are as printed); a C1 byte U+0083 before each square-bullet glyph in the raw layer; the headings 'Ventilator-assisted life / support' and 'Accepting gifts from / patients' wrap across two lines (no hyphens); 'many are state specific' prints unhyphenated while 'Duty to protect—state-specific laws' carries an em-dash — both as printed; the curly apostrophes in 'patient's best interest' and 'The physician's good judgment' are as printed. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (ventilator-surrogate-pathway, saved-exceptions-gate), a visual block + verbatim table block (17 rows, PRINTED ELEMENT / AS PRINTED) + decoder list (6 items) + steps block (4 questions) + compare block (keep vs break) + exam callout + memory callout, a clinical block (the withdrawal wrap, the reportable clusters, the protected populations and impaired drivers), 4 patterns, 4 traps, 3 pivots, 9 recall, 4 related (informed-consent, core-ethical-principles, challenging-scenarios, interpreters-bad-news — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own two carried attributed + two KYP originals marked: 'SERIOUS, STUCK, STOPPABLE', 'WISHES, NOT WANTS'), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints ethics rules, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical anchors are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh20/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'confidentiality-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's FOUR text blocks are implemented in ONE registry visual (confidentiality-map, ConfidentialityMap in visuals/pubhealth-p20.tsx, viewBox 0 0 1102 1300), all as ORIGINAL KYP ADAPTATIONS — Zone A the surrogate priority ladder (five rungs, the FA mnemonic attributed in red, the routing panel), Zone B the ventilator decision rule strip (preference gap → two inputs → override rule → support wrap, with the WISHES NOT WANTS KYP hook labeled), Zone C the confidentiality column (default row, three gate chips, five SAVED letter cards, warn-mechanics strip), Zone D the gifts decision panel (practice box → assessment box → three decline rules → decline script) — with the four blocks' full text ALSO carried verbatim in the note's table block; the census counts each printed text block as one visual asset (sv1-sv4), so coverageAudit: textbookVisualCount 4, accountedFor 4, kypRedraws 0, kypOriginals 4, unresolved 0, omitted 0.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Ethics",
    "topicId": "surrogates-confidentiality", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "surrogates-confidentiality-sv1",
        "sourcePages": {"part": 1, "pdfPages": [292], "bookPages": "270"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Surrogate decision-maker block (book 270): the two preconditions (decision-making capacity lost; no advance directive prepared), the surrogates' task (determine what the patient would have done), and the printed priority chain spouse → adult children → parents → adult siblings → other relatives anchored by First Aid's own red mnemonic '(the spouse chips in)' — the Ethics subsection's surrogate hierarchy",
        "sourceFigureDescription": "LABEL-COLUMN TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh20/vlm-census.txt — VLM available this session): the blue bold heading 'Surrogate decision-maker' (hyphenates across its line wrap 'Surrogate decision- / maker' — the raw text layer merges it to 'Surrogate decisionmaker', documented), the body sentence ('If a patient loses decision-making capacity and has not prepared an advance directive, individuals (surrogates) who know the patient must determine what the patient would have done. Priority of surrogates: spouse → adult children → parents → adult siblings → other relatives (the spouse chips in).') with the words spouse/children/siblings/'spouse chips' printed in RED bold (First Aid's OWN mnemonic), black arrows between the five rungs, C1 control bytes around the arrows in the raw layer, and thin horizontal rules separating the page's four blocks.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "confidentiality-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (ConfidentialityMap in visuals/pubhealth-p20.tsx): the two TRIGGER chips (capacity lost; no advance directive) → the surrogates' task box (substituted judgment, flagged KYP) → the five-rung priority ladder (1 Spouse, 2 Adult children, 3 Parents, 4 Adult siblings, 5 Other relatives, down-arrows between rungs) → the red-attributed mnemonic panel ('the spouse chips in' — First Aid's own, printed in red) and the KYP routing panel (capacity present → patient; directive → directive; neither → ladder); the block's full text is ALSO carried verbatim in the note's table block (blocks[1] rows 6-7), core.what, blocks[2] BLOCK 2, and recall[2]",
        "productionStatus": "complete",
        "plannedKypVisualId": "confidentiality-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "surrogates-confidentiality-sv2",
        "sourcePages": {"part": 1, "pdfPages": [292], "bookPages": "270"},
        "visualType": "CLINICAL_ALGORITHM",
        "visualPurpose": "The Ventilator-assisted life support block (book 270): the preference gap (discussions ideally before; preferences may be absent when needed to survive) → the surrogate (patient identified or legally appointed) weighing the prognosis of the condition and the believed wishes of the patient → the override rule (withhold or withdraw regardless of what the surrogate prefers) → the support wrap (palliative care, chaplain services, primary care physician, emotional support) — the page's end-of-life decision algorithm",
        "sourceFigureDescription": "LABEL-COLUMN TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh20/vlm-census.txt — VLM available this session): the blue bold heading 'Ventilator-assisted life support' (wraps across two lines, no hyphen) and three body paragraphs — the ideal-and-gap paragraph, the override rule sentence ('If surrogates indicate patient would not have wanted to receive life support with ventilation → withhold or withdraw life support regardless of what the surrogate prefers.') printed in PLAIN ROMAN TEXT with a black arrow (VLM: not italicized, not bold, not boxed), and the support-wrap sentence (palliative care, chaplain services, and the primary care physician in medical discussions with the family; provide emotional support). The raw layer carries a C1 control byte before the arrow (known artifact).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "confidentiality-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (ConfidentialityMap in visuals/pubhealth-p20.tsx): a four-box decision strip — THE PREFERENCE GAP (surrogate decision-makers, patient identified or legally appointed) → THE TWO INPUTS (the prognosis of the condition + the believed wishes of the patient) → THE OVERRIDE RULE (the printed sentence with the arrow, emergency-colored, with the KYP hook 'WISHES, NOT WANTS' labeled) → THE SUPPORT WRAP (palliative care · chaplain services · primary care physician · emotional support) — plus the KYP rule strip; the block's full text is ALSO carried verbatim in the note's table block (blocks[1] rows 1-5), mechanisms[0] ventilator-surrogate-pathway, and recall[0-1]",
        "productionStatus": "complete",
        "plannedKypVisualId": "confidentiality-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "surrogates-confidentiality-sv3",
        "sourcePages": {"part": 1, "pdfPages": [292], "bookPages": "270"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The Confidentiality block (book 270): the default (privacy and autonomy), the incapacitated/emergent disclosure rule, the voluntary waiver (eg, insurance company request), the three general principles for exceptions (serious and imminent; no alternative means; preventable), First Aid's own red mnemonic 'The physician's good judgment SAVED the day' with the five exceptions (Suicidal/homicidal ideation, Abuse, duty to protect Victims, Epilepsy/impaired drivers, reportable Diseases), and the warn mechanics (public officials notify people at risk; TB or Ebola may require involuntary treatment)",
        "sourceFigureDescription": "LABEL-COLUMN TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh20/vlm-census.txt — VLM available this session): the blue bold heading 'Confidentiality' and its body — the first paragraph (privacy/autonomy; professional judgment of patient's best interest; insurance company waiver), the three-principle bullet group and the five-example bullet group (small solid square bullets; the raw layer prefixes each with a C1 byte before the ▘ glyph), the lead-in 'Examples of exceptions to patient confidentiality (many are state specific) include the following ('The physician's good judgment SAVED the day'):' with SAVED in RED capitals and the initial capitals S-A-V-E-D of the five bullets picked out in red (First Aid's OWN mnemonic — VLM-confirmed), the em-dash in 'Duty to protect—state-specific laws', and the warn-mechanics sentences (duty to warn public officials who notify people at risk; dangerous communicable diseases such as TB or Ebola may require involuntary treatment).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "confidentiality-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone C of the registry visual (ConfidentialityMap in visuals/pubhealth-p20.tsx): the DEFAULT row (three green chips — the default; the waiver, eg insurance company request; the incapacitated/emergent professional-judgment rule) → the three GATE chips (SERIOUS — harm serious and imminent; STUCK — no alternative means to warn or protect; STOPPABLE — steps can prevent harm; the compression labeled KYP) → the five SAVED letter cards (S Suicidal/homicidal, A Abuse, V duty to protect a potential Victim, E Epilepsy/impaired automobile drivers, D Reportable Diseases eg STIs, hepatitis, food poisoning) under the attributed red mnemonic header → the dashed WARN MECHANICS strip (physicians warn public officials, who notify people at risk; TB or Ebola may require involuntary treatment); the block's full text is ALSO carried verbatim in the note's table block (blocks[1] rows 8-12), mechanisms[1] saved-exceptions-gate, blocks[4] the compare block, and recall[3-6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "confidentiality-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "surrogates-confidentiality-sv4",
        "sourcePages": {"part": 1, "pdfPages": [292], "bookPages": "270"},
        "visualType": "CLINICAL_ALGORITHM",
        "visualPurpose": "The Accepting gifts from patients block (book 270): the printed debate (relationship strengthened vs negative consequences), the practice norm (cards, baked goods, inexpensive gifts), the single assessment (does the risk of harm outweigh the potential benefit), the three decline rules (inappropriately large or valuable; could detrimentally affect patient care; may cause emotional or financial stress for the patient), and the decline script (thank, politely decline, emphasize the relationship is unchanged)",
        "sourceFigureDescription": "LABEL-COLUMN TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh20/vlm-census.txt — VLM available this session): the blue bold heading 'Accepting gifts from patients' (wraps across two lines, no hyphen) and its body — the debate paragraph ('A complex subject without definitive regulations...'), the practice-and-assessment paragraph (cards, baked goods, and inexpensive gifts; individual assessment of whether or not the risk of harm outweighs the potential benefit), the three decline-rule bullets (small solid square bullets, C1 byte + ▘ in the raw layer), and the decline-script paragraph (thank the patient for offering a kind gift; politely indicate that it must be declined; emphasize that the incident does not influence the physician-patient relationship in any way). No red text prints in this block.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "confidentiality-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone D of the registry visual (ConfidentialityMap in visuals/pubhealth-p20.tsx): the IN PRACTICE box (the printed debate + cards, baked goods, and inexpensive gifts) → THE ONE ASSESSMENT box (risk of harm vs potential benefit — small/inexpensive → usually accept; any decline rule met → decline) → the three DECLINE chips (TOO BIG — inappropriately large or valuable; CARE-AFFECTING — could detrimentally affect patient care; PATIENT-STRESSING — emotional or financial stress for the patient) → the green DECLINE SCRIPT strip (thank the patient for offering a kind gift · politely indicate it must be declined · emphasize the incident does not influence the physician-patient relationship in any way); the block's full text is ALSO carried verbatim in the note's table block (blocks[1] rows 13-17), blocks[3] QUESTION 4, and recall[7-8]",
        "productionStatus": "complete",
        "plannedKypVisualId": "confidentiality-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh20"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "surrogates-confidentiality.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "surrogates-confidentiality.json").write_text(
    json.dumps({"topicId": "surrogates-confidentiality", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "surrogates-confidentiality", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 4,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries FOUR visual assets — the four label-column text blocks, censused as one record each: sv1 the Surrogate decision-maker block (the priority chain with First Aid's red mnemonic 'the spouse chips in'), sv2 the Ventilator-assisted life support block (the override rule and the support wrap), sv3 the Confidentiality block (the default, the three general principles, and the five SAVED exceptions with First Aid's red mnemonic 'The physician's good judgment SAVED the day' and the warn mechanics), and sv4 the Accepting gifts from patients block (the assessment, the three decline rules, and the decline script) — all four accounted for in ONE registry visual (confidentiality-map, ConfidentialityMap in visuals/pubhealth-p20.tsx, viewBox 0 0 1102 1300), each as an ORIGINAL KYP ADAPTATION: Zone A the surrogate ladder (with the FA mnemonic attributed in red + the KYP routing panel), Zone B the ventilator decision rule strip (with the KYP 'WISHES, NOT WANTS' hook labeled), Zone C the confidentiality column (default row, three gate chips compressed as the KYP 'SERIOUS, STUCK, STOPPABLE', five SAVED letter cards, warn-mechanics strip), Zone D the gifts decision panel; nothing is reproduced, and all four blocks' full text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page glm-4.6v pass (vlm-census.txt) confirmed the four headings and wraps, both red FA mnemonics, the plain-text override rule with its black arrow, the square bullets, the once-printed ETHICS banner, and the absence of margin mnemonics and images. ADJUDICATION: the block-2 heading prints 'Surrogate decision-maker' (hyphen at the wrap; the raw text layer merges it to 'Surrogate decisionmaker' — the hyphenated print is carried in the note; the evidence range preserves the raw merge). FULL single page, the LAST of the ETHICS subsection (pdf 293 opens COMMUNICATION SKILLS). STAGED under .usmle-pipeline-cache/staging-pubh20/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH20 manifest + inventory staged: {OUT}/manifests/surrogates-confidentiality.json, {OUT}/visual-inventory/surrogates-confidentiality.json")
print(f"surrogates-confidentiality: evidence {len(kept)}/{len(E1)} verified")
