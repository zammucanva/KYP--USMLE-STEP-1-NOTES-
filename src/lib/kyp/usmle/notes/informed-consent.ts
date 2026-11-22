import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 19. Source: FULL pdf page 291 / book 269
// (Part 1), the SECOND page of the ETHICS subsection (the banner opened on pdf
// 290 / book 268-lower with the four principles and decision-making capacity —
// the core-ethical-principles topic; pdf 292 / book 270 opens Ventilator-
// assisted life support — the surrogates-confidentiality topic). The topic
// owns the WHOLE page: ONE continuous two-column term/definition table whose
// left column carries the printed term names and whose right column carries
// three blocks: (1) "Informed consent" — the process that requires Disclosure
// (discussion of pertinent information, including risks/benefits),
// Understanding (ability to comprehend), Capacity (ability to reason and make
// one's own decisions — distinct from competence, a LEGAL determination), and
// Voluntariness (freedom from coercion and manipulation); plus the
// comprehensive-understanding sentence (diagnosis + risks/benefits of proposed
// treatment + alternative options, INCLUDING NO TREATMENT) and the right to
// revoke written consent at any time, even orally; plus the exceptions box
// "Exceptions to informed consent (WIPE it away)" — Waiver / Legally
// Incompetent / Therapeutic Privilege / Emergency situation. (2) "Consent for
// minors" — a minor is generally any person <18 years old; parental consent
// laws vary by state; parental consent in general obtained, except emergency
// treatment (eg, blood transfusions) or legal emancipation (eg, married,
// self-supporting, or in the military); the "Situations in which parental
// consent is usually not required" box — Sex (contraception, STIs, prenatal
// care—usually not abortion) / Drugs (substance use disorder treatment) /
// Rock and roll (emergency/trauma); always encourage healthy minor-guardian
// communication; seek a minor's ASSENT (agreement of someone unable to
// legally consent) even when consent is not required. (3) "Advance
// directives" — instructions given by a patient in anticipation of the need
// for a medical decision, details varying per state law, in FOUR printed
// rows: Oral advance directive, Written advance directive (a living will is
// an example), Medical power of attorney (more flexible than a living will),
// Do not resuscitate order (prohibits CPR only). CENSUS (pdfimages): ZERO
// raster images on the page — the term/definition table is the page's only
// printed asset (ORIGINAL KYP ADAPTATION); no figures, no margin mnemonics,
// no asterisk footnotes. VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE
// full-page pass, staging-pubh19/vlm-census.txt), confirming: the four
// process rows and their wording; the WIPE heading with "WIPE" printed in RED
// and the four exception bullets led by BOLD RED initial letters (W, I, P, E
// — First Aid's OWN mnemonic, carried VERBATIM and ATTRIBUTED everywhere it
// appears in this note); "Sex", "Drugs", "Rock and roll" printed in BOLD RED
// in the minors box (First Aid's OWN framing, carried attributed); the three
// main term names in larger bold dark navy on pale blue/gray shaded cells,
// the four directive sub-rows in smaller bold medium blue; thin black
// horizontal rules, no zebra striping, small square bullet glyphs; the ETHICS
// banner printed ONCE (running-header ribbon only — unlike the subsection-
// opener pages, there is no second in-body ribbon); the footer slug
// "FAS1_2026_06-PubHealth.indd 269" + timestamp "12/16/25 12:46 PM".
// PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II" header-space
// extraction artifact (known, carried as-is); (2) C1 control bytes (\x83)
// precede every bullet glyph in the raw layer (stripped by the evidence
// normalizer, documented); (3) line-wrap hyphenation merges in the raw text
// layer — "Legally Incompetent—patient lacks decision-making capacity"
// extracts as "decisionmaking" (lines 30-31), "patient loses decision-making
// capacity" extracts as "decisionmaking" (line 81), and "other life-
// sustaining measures" extracts as "lifesustaining" (line 87); the print
// carries the hyphens, so the note's verbatim table prints "decision-making"
// and "life-sustaining" and each merge is documented (the gen script's
// evidence ranges preserve the RAW merged forms — a quote must be a
// contiguous text-layer span); (4) the "prenatal care—usually not abortion"
// em-dash wraps across lines in print (raw layer keeps it on one line);
// (5) the advance-directives rows are laid out as a term/definition TABLE in
// print (term wraps across two lines in the Written/Medical power/DNR rows).
// ADJUDICATIONS (documented in the manifest too): (A) the task brief's block
// description matched the print exactly (four process rows, four WIPE
// exceptions, the Sex/Drugs/Rock-and-roll trio, four directive rows) — no
// correction needed; (B) FLEXIBILITY LADDER — the print's only explicit
// ranking language is "More flexible than a living will" (Medical power of
// attorney) plus the Oral row's "Problems arise from variance in
// interpretation"; the full words → paper → person ladder (oral → written/
// living will → medical power of attorney) is the KYP synthesis of those
// printed cues and is flagged as such wherever drawn, with the DNR order
// drawn as a scoped order beside the ladder (it names one intervention —
// CPR — rather than ranking on the flexibility axis; the print never ranks
// it); (C) the banner census — the VLM pass reports the ETHICS ribbon ONCE
// (running header only), matching the raw layer (no second in-body ribbon on
// this continuation page). PROVENANCE SPLIT: verbatim = the three block
// titles, the four process requirements, the comprehensive-understanding and
// revocation sentences, the four WIPE exceptions, the minors paragraph, the
// Sex/Drugs/Rock-and-roll trio, the assent and communication sentences, the
// directives lead, and all four directive rows; FA-own = the WIPE mnemonic
// and the Sex/Drugs/Rock-and-roll framing (both printed in red, carried
// attributed); KYP-original = the "who decides?" router, the words → paper →
// person flexibility ladder, the pillar-failure reading of WIPE, the
// assent-vs-consent gloss, the exam layer, and the two KYP mnemonics ("DUCV"
// and "WORDS, PAPER, PERSON") — every teaching generalization beyond the
// printed page is flagged as KYP context. DrugCards: none — the page prints
// ethico-legal process, not drugs (documented as folded-by-absence in the
// manifest). The next page (pdf 292) opens Ventilator-assisted life support
// — the withdrawal/withholding and surrogate hierarchy topic, a separate
// production.

export const informedConsent: KypUsMLENote = {
  id: "informed-consent",
  title: "Informed Consent, Minors, and Advance Directives",
  subtitle:
    "Book 269 is the operational page of autonomy: it tells you exactly WHO decides, and what still counts as deciding, in every consent situation the exam can build. Block 1 defines informed consent as a PROCESS — not a signature — with four printed requirements: Disclosure (discussion of pertinent information, including risks/benefits), Understanding (ability to comprehend), Capacity (ability to reason and make one's own decisions — distinct from competence, a legal determination), and Voluntariness (freedom from coercion and manipulation), all resting on comprehensive understanding of the diagnosis, the risks/benefits of the proposed treatment, the alternatives, and no treatment at all — with a standing right to revoke written consent at any time, even orally. When the full process cannot run, First Aid's own red mnemonic WIPE catalogs the four exceptions: Waiver, Legally Incompetent, Therapeutic Privilege, Emergency. Block 2 routes the minor: <18 means a parent decides in general — unless the situation is an emergency (eg, blood transfusions), the minor is emancipated (married, self-supporting, or in the military), or the care falls in the red Sex/Drugs/Rock-and-roll set (contraception, STIs, prenatal care—usually not abortion; substance use disorder treatment; emergency/trauma) — and the physician still encourages minor-guardian communication and still seeks the minor's assent. Block 3 routes the anticipated loss of capacity: advance directives given in advance, in four printed instruments — the oral directive (prior statements, strengthened by being informed, specific, chosen, and repeated over time to multiple people), the written directive or living will (specific interventions accepted or rejected in critical illness), the medical power of attorney (a designated agent — more flexible than a living will), and the DNR order, which prohibits CPR and nothing else.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Ethics",
  pilotCategory:
    "Public Health Sciences — ethics process decoding: the four-part informed-consent process with the right to revoke, the WIPE exceptions (Waiver, Legally Incompetent, Therapeutic Privilege, Emergency — First Aid's own red mnemonic carried attributed), consent for minors (the <18 rule, emancipation, the Sex/Drugs/Rock-and-roll exceptions attributed, assent vs consent, minor-guardian communication), and the four advance-directive instruments (oral, written/living will, medical power of attorney, DNR — what each covers and the flexibility ranking).",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 269–269 (Ethics: Informed consent; Consent for minors; Advance directives)",
  tags: [
    "informed consent",
    "disclosure",
    "understanding",
    "capacity",
    "competence",
    "voluntariness",
    "revocation of consent",
    "waiver",
    "therapeutic privilege",
    "implied consent",
    "emergency consent",
    "legal surrogate",
    "minors",
    "parental consent",
    "emancipated minor",
    "assent",
    "advance directives",
    "oral advance directive",
    "living will",
    "medical power of attorney",
    "do not resuscitate",
    "DNR",
    "autonomy",
    "ethics",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — “Informed consent”: a process that requires Disclosure (discussion of pertinent information, including risks/benefits), Understanding (ability to comprehend), Capacity (ability to reason and make one’s own decisions — distinct from competence, a legal determination), and Voluntariness (freedom from coercion and manipulation). Patients must have a comprehensive understanding of their diagnosis and the risks/benefits of proposed treatment and alternative options, including no treatment — and must be informed of their right to revoke written consent at any time, even orally. Exceptions to informed consent (WIPE it away): Waiver—patient explicitly relinquishes the right of informed consent; Legally Incompetent—patient lacks decision-making capacity (obtain consent from legal surrogate); Therapeutic Privilege—withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity; Emergency situation—implied consent may apply. BLOCK 2 — “Consent for minors”: a minor is generally any person <18 years old; parental consent laws in relation to healthcare vary by state; in general, parental consent should be obtained, but exceptions exist for emergency treatment (eg, blood transfusions) or if the minor is legally emancipated (eg, married, self-supporting, or in the military). Situations in which parental consent is usually not required: Sex (contraception, STIs, prenatal care—usually not abortion), Drugs (substance use disorder treatment), Rock and roll (emergency/trauma). Physicians should always encourage healthy minor-guardian communication; the physician should seek a minor’s assent (agreement of someone unable to legally consent) even if their consent is not required. BLOCK 3 — “Advance directives”: instructions given by a patient in anticipation of the need for a medical decision; details vary per state law. Four printed rows: Oral advance directive (incapacitated patient’s prior oral statements commonly used as guide; problems arise from variance in interpretation; more valid if patient was informed, directive was specific, patient made a choice, and decision was repeated over time to multiple people); Written advance directive (delineates specific healthcare interventions that patient anticipates accepting or rejecting during treatment for a critical or life-threatening illness; a living will is an example); Medical power of attorney (patient designates an agent to make medical decisions in the event that the patient loses decision-making capacity; patient may also specify decisions in clinical situations; can be revoked by patient if decision-making capacity is intact; more flexible than a living will); Do not resuscitate order (DNR order prohibits cardiopulmonary resuscitation (CPR); patient may still consider other life-sustaining measures, eg, intubation, feeding tube, chemotherapy).",
    why:
      "This page is the second page of the ETHICS subsection because it converts the previous page's abstract principle — autonomy, the patient's right to decide — into a runnable procedure, and then answers the two questions autonomy alone cannot: what happens when the decider is a minor, and what happens when the decider loses capacity. The four process requirements are not four arbitrary hurdles; they are the four ways a consent FAILS — information never disclosed (Disclosure), information disclosed but not comprehended (Understanding), a decider who cannot reason the choice (Capacity), or a choice extracted by coercion or manipulation (Voluntariness) — and the WIPE exceptions map onto exactly those failure points: a patient may waive the process, the law may declare the patient incompetent (routing consent to a legal surrogate), the physician may withhold information under therapeutic privilege when disclosure would severely harm the patient or undermine the decision itself, or an emergency may imply consent when there is no time to ask. The minors block then draws the age boundary of autonomy: <18 the parent decides, EXCEPT where the state (emergency care, emancipation) or the care category (the Sex/Drugs/Rock-and-roll set) transfers the decision to the minor — with assent preserved as the minor's voice whenever the law does not require the minor's consent. And the directives block extends autonomy FORWARD in time: the oral directive, the living will, and the medical power of attorney are three attempts to keep the patient deciding after capacity is lost, trading ease of interpretation for flexibility — words are cheap but contested, paper is specific but rigid, an agent is flexible but is a person rather than the patient — while the DNR order stands apart as the one instrument that prohibits a single named intervention (CPR) and nothing else.",
    keyIdea:
      "Route every consent vignette through one question: WHO DECIDES, AND CAN THE DECISION STAND? MOVE 1 — THE PATIENT WITH CAPACITY: run the four-part process (DUCV — Disclosure, Understanding, Capacity, Voluntariness); the disclosure set must cover the diagnosis, the risks/benefits of the proposed treatment, the alternative options, AND no treatment; the resulting consent is revocable at any time, even orally — a signed form is not a contract. MOVE 2 — THE WIPE CHECK: if the full process cannot run, name the exception — Waiver (the patient explicitly relinquishes the right), Legally Incompetent (no decision-making capacity → obtain consent from the legal surrogate; capacity is clinical, competence is a legal determination), Therapeutic Privilege (withhold information only when disclosure would severely harm the patient or undermine informed decision-making capacity), Emergency (implied consent may apply). MOVE 3 — THE MINOR (<18): parent decides in general — unless emergency treatment (eg, blood transfusions), legal emancipation (married, self-supporting, or in the military), or the Sex/Drugs/Rock-and-roll set (contraception, STIs, prenatal care—usually not abortion; substance use disorder treatment; emergency/trauma); always encourage healthy minor-guardian communication and still seek the minor's ASSENT. MOVE 4 — THE LOST DECIDER: match the instrument — oral advance directive (prior statements; stronger when informed, specific, chosen, repeated over time to multiple people), written advance directive / living will (specific interventions for critical or life-threatening illness), medical power of attorney (a designated agent — more flexible than a living will; revocable while capacity is intact), DNR order (prohibits CPR ONLY — intubation, feeding tube, and chemotherapy remain on the table).",
  },
  mechanisms: [
    {
      id: "consent-process-map",
      title:
        "How a consent is built and how it fails: the four pillars, the revocation right, and the WIPE escape valves",
      context:
        "The printed Informed consent block (book 269): the four process requirements, the disclosure set, and the exceptions box",
      flow: {
        nodes: [
          {
            id: "intervention",
            label: "THE PROPOSED INTERVENTION — consent is a process, not a signature",
            sublabel:
              "Input — any medical decision that belongs to the patient starts here. The page's own definition: informed consent is “a process that requires” four things — which means the signed form is only the RECORD of the process, never its substitute (KYP framing of the printed definition).",
            variant: "input",
          },
          {
            id: "disclosure",
            label: "PILLAR 1 — DISCLOSURE: the information must actually be given",
            sublabel:
              "Process — “discussion of pertinent information, including risks/benefits.” The disclosure set is printed two paragraphs later: the patient must have “a comprehensive understanding of their diagnosis and the risks/benefits of proposed treatment and alternative options, including no treatment” — the alternatives AND the option of doing nothing are part of the disclosure, not an afterthought.",
            variant: "process",
          },
          {
            id: "understanding",
            label: "PILLAR 2 — UNDERSTANDING: the information must be comprehended",
            sublabel:
              "Process — “ability to comprehend.” Disclosure without comprehension is a recital, not a consent: the physician confirms the patient grasps the diagnosis, the risks/benefits, the alternatives, and the no-treatment option (KYP gloss of the printed requirement).",
            variant: "process",
          },
          {
            id: "capacity",
            label: "PILLAR 3 — CAPACITY: the patient must be able to reason and decide",
            sublabel:
              "Process — “ability to reason and make one’s own decisions (distinct from competence, a legal determination).” Capacity is CLINICAL and decision-specific, assessed by the physician; competence is a LEGAL status determined by a judge — the parenthetical is printed on the page and is the exam's favorite distinction (the capacity-vs-competence assessment tools live on the previous page, book 268).",
            variant: "process",
          },
          {
            id: "voluntariness",
            label: "PILLAR 4 — VOLUNTARINESS: the choice must be free",
            sublabel:
              "Process — “freedom from coercion and manipulation.” A yes extracted by pressure from family, physician, or institution fails this pillar even when the first three stand (KYP gloss of the printed requirement).",
            variant: "process",
          },
          {
            id: "valid-consent",
            label: "VALID CONSENT — and it stays revocable",
            sublabel:
              "Output — all four pillars standing yields a valid consent, but the page adds a standing condition: “Patients must be informed of their right to revoke written consent at any time, even orally.” The consent is a live agreement, not a contract — the patient's yes today can become a no tomorrow, spoken, mid-treatment.",
            variant: "output",
          },
          {
            id: "wipe",
            label: "THE FOUR ESCAPE VALVES — Exceptions to informed consent (WIPE it away)",
            sublabel:
              "Output — when a pillar cannot be met, one of four printed exceptions applies (First Aid's OWN red mnemonic, carried attributed): WAIVER — the patient explicitly relinquishes the right of informed consent (a pillar is voluntarily surrendered); LEGALLY INCOMPETENT — the patient lacks decision-making capacity, so consent comes from the legal surrogate (the capacity pillar is absent and the law routes the decision); THERAPEUTIC PRIVILEGE — withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity (disclosure itself would defeat the process); EMERGENCY SITUATION — implied consent may apply (there is no time to run the process at all).",
            variant: "output",
          },
        ],
        edges: [
          { from: "intervention", to: "disclosure", label: "step 1 →" },
          { from: "disclosure", to: "understanding", label: "step 2 →" },
          { from: "understanding", to: "capacity", label: "step 3 →" },
          { from: "capacity", to: "voluntariness", label: "step 4 →" },
          { from: "voluntariness", to: "valid-consent", label: "all four pillars stand →" },
          { from: "valid-consent", to: "wipe", label: "the revocable yes can also be withdrawn →" },
          { from: "disclosure", to: "wipe", label: "no disclosure possible/wise? → P or E" },
          { from: "capacity", to: "wipe", label: "capacity absent? → I (legal surrogate)" },
          { from: "voluntariness", to: "wipe", label: "patient surrenders the process? → W" },
        ],
      },
    },
    {
      id: "minor-to-directive-continuum",
      title:
        "Who decides when the patient cannot: the minor route, the assent rule, and the advance-directive ladder",
      context:
        "The printed Consent for minors and Advance directives blocks (book 269): the age boundary and the four instruments",
      flow: {
        nodes: [
          {
            id: "cannot-decide",
            label: "THE PATIENT WHO CANNOT CONSENT — too young, or no longer able",
            sublabel:
              "Input — the two situations in which the patient's own valid consent is unavailable: the patient is a MINOR (generally any person <18 years old), or the patient has lost decision-making capacity. The page supplies a different mechanism for each.",
            variant: "input",
          },
          {
            id: "minor-route",
            label: "THE MINOR ROUTE — the parent decides, with three printed gates out",
            sublabel:
              "Process — “In general, parental consent should be obtained” (parental consent laws in relation to healthcare vary by state). Gate 1, EMERGENCY: exceptions exist for emergency treatment (eg, blood transfusions). Gate 2, EMANCIPATION: the minor is legally emancipated (eg, married, self-supporting, or in the military) and consents as an adult. Gate 3, THE CARE CATEGORY (First Aid's OWN red framing, carried attributed): parental consent is usually not required for Sex (contraception, STIs, prenatal care—usually not abortion), Drugs (substance use disorder treatment), Rock and roll (emergency/trauma).",
            variant: "process",
          },
          {
            id: "assent",
            label: "THE ASSENT RULE — the minor's voice survives every gate",
            sublabel:
              "Process — two printed closers: “Physicians should always encourage healthy minor-guardian communication” and “Physician should seek a minor’s assent (agreement of someone unable to legally consent) even if their consent is not required.” Assent is agreement without legal force; consent is agreement with it — seek the first whenever the law does not demand the second (KYP gloss).",
            variant: "process",
          },
          {
            id: "directive-lead",
            label: "THE INCAPACITATED ADULT — advance directives, given in anticipation",
            sublabel:
              "Process — “Instructions given by a patient in anticipation of the need for a medical decision. Details vary per state law.” The patient who still has capacity writes the script for the patient who will not; four printed instruments carry the script with increasing flexibility.",
            variant: "process",
          },
          {
            id: "oral-written",
            label: "WORDS THEN PAPER — the oral directive and the written directive",
            sublabel:
              "Process — ORAL ADVANCE DIRECTIVE: “Incapacitated patient’s prior oral statements commonly used as guide”; problems arise from variance in interpretation, and the directive is more valid if patient was informed, directive was specific, patient made a choice, and decision was repeated over time to multiple people. WRITTEN ADVANCE DIRECTIVE: “Delineates specific healthcare interventions that patient anticipates accepting or rejecting during treatment for a critical or life-threatening illness. A living will is an example.” — paper beats words on precision but loses flexibility.",
            variant: "process",
          },
          {
            id: "poa-dnr",
            label: "PERSON, AND THE SCOPED ORDER — medical power of attorney and the DNR",
            sublabel:
              "Process — MEDICAL POWER OF ATTORNEY: “Patient designates an agent to make medical decisions in the event that the patient loses decision-making capacity”; the patient may also specify decisions in clinical situations; it “can be revoked by patient if decision-making capacity is intact” and is “more flexible than a living will.” DO NOT RESUSCITATE ORDER: “DNR order prohibits cardiopulmonary resuscitation (CPR). Patient may still consider other life-sustaining measures (eg, intubation, feeding tube, chemotherapy)” — one named intervention, nothing else.",
            variant: "process",
          },
          {
            id: "ladder",
            label: "THE LADDER — words → paper → person; DNR stands apart as the scoped order",
            sublabel:
              "Output — the KYP synthesis of the printed cues (flagged as such: the print ranks only implicitly): the oral directive is the most contestable (“problems arise from variance in interpretation”), the living will fixes specific interventions for critical illness, and the medical power of attorney is the most flexible (“more flexible than a living will”) because an agent adapts to clinical situations the paper never anticipated. The DNR order is not a rung but a scope: it prohibits CPR only, so every other life-sustaining measure remains a separate decision.",
            variant: "output",
          },
        ],
        edges: [
          { from: "cannot-decide", to: "minor-route", label: "patient <18 →" },
          { from: "cannot-decide", to: "directive-lead", label: "capacity lost →" },
          { from: "minor-route", to: "assent", label: "every gate still seeks →" },
          { from: "directive-lead", to: "oral-written", label: "anticipation in words, then paper →" },
          { from: "oral-written", to: "poa-dnr", label: "then an agent; CPR alone scoped →" },
          { from: "assent", to: "ladder", label: "the minor's voice → the lost adult's voice" },
          { from: "poa-dnr", to: "ladder", label: "flexibility rises; DNR stays scoped" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "consent-map",
      title:
        "The consent page as one map: the four pillars, the WIPE valves, the minor gates, and the directive ladder (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 269's three blocks. ZONE A — the four-part process as four pillar cards in printed order (Disclosure → Understanding → Capacity → Voluntariness, each with its printed definition), the disclosure set (diagnosis, risks/benefits, alternatives, INCLUDING NO TREATMENT), and the revocability strip (revoke written consent at any time, even orally). ZONE B — the WIPE exceptions as four cards (Waiver, Legally Incompetent, Therapeutic Privilege, Emergency situation), First Aid's own red mnemonic carried attributed. ZONE C — the minors panel: the <18 default, the emergency and emancipation gates (blood transfusions; married, self-supporting, or in the military), the attributed Sex/Drugs/Rock-and-roll row, and the assent + minor-guardian communication closers. ZONE D — the four advance-directive instruments on the KYP flexibility ladder (oral → written/living will → medical power of attorney, with the printed “more flexible than a living will” anchor), the DNR drawn beside as the scoped order that prohibits CPR only.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 291 — the page's single printed asset is the two-column term/definition table (bold navy term names on pale shaded cells, thin black rules, no zebra; VLM-read at 120dpi, staging-pubh19/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION: the layout — pillars, valve cards, gates, ladder — is KYP's; every printed label, definition, and both of First Aid's red mnemonics (WIPE and Sex/Drugs/Rock-and-roll) are preserved from the print and attributed. ADJUDICATION, drawn on the visual: the flexibility ladder (words → paper → person) is the KYP synthesis of the printed cues — the Oral row's “problems arise from variance in interpretation” and the Medical power of attorney row's “more flexible than a living will” — and the DNR order is drawn as a scoped order beside the ladder rather than ranked on it (the print never ranks the DNR); the full page is additionally carried verbatim in the note's table block.",
    },
    {
      kind: "table",
      title:
        "Book 269 — the printed page carried verbatim (every printed word, PRINTED block and row order)",
      intro:
        "The page's single table, term column and definition column, carried in printed order: the Informed consent block (with its exceptions box), the Consent for minors block (with its no-parental-consent box), and the Advance directives block with its four instrument rows. Two of First Aid's own mnemonics print in RED — the “WIPE it away” heading with bold red initial letters (W, I, P, E) and the red “Sex / Drugs / Rock and roll” trio — carried here verbatim and attributed. Printed quirks carried: the em-dashes in the exception bullets and “prenatal care—usually not abortion” are as printed; “decision-making” (twice) and “life-sustaining” hyphenate across line wraps in print, which the raw text layer merges to “decisionmaking” and “lifesustaining” — the hyphenated print forms are carried here and the merges are documented.",
      columns: ["TERM (left column)", "PRINTED TEXT (right column, verbatim)"],
      rows: [
        [
          "Informed consent",
          "A process that requires: Disclosure: discussion of pertinent information, including risks/benefits. Understanding: ability to comprehend. Capacity: ability to reason and make one’s own decisions (distinct from competence, a legal determination). Voluntariness: freedom from coercion and manipulation. Patients must have a comprehensive understanding of their diagnosis and the risks/benefits of proposed treatment and alternative options, including no treatment. Patients must be informed of their right to revoke written consent at any time, even orally.",
        ],
        [
          "Exceptions to informed consent (WIPE it away)",
          "Waiver—patient explicitly relinquishes the right of informed consent. Legally Incompetent—patient lacks decision-making capacity (obtain consent from legal surrogate). Therapeutic Privilege—withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity. Emergency situation—implied consent may apply.",
        ],
        [
          "Consent for minors",
          "A minor is generally any person <18 years old. Parental consent laws in relation to healthcare vary by state. In general, parental consent should be obtained, but exceptions exist for emergency treatment (eg, blood transfusions) or if minor is legally emancipated (eg, married, self-supporting, or in the military).",
        ],
        [
          "Situations in which parental consent is usually not required",
          "Sex (contraception, STIs, prenatal care—usually not abortion). Drugs (substance use disorder treatment). Rock and roll (emergency/trauma). Physicians should always encourage healthy minor-guardian communication. Physician should seek a minor’s assent (agreement of someone unable to legally consent) even if their consent is not required.",
        ],
        [
          "Advance directives",
          "Instructions given by a patient in anticipation of the need for a medical decision. Details vary per state law.",
        ],
        [
          "Oral advance directive",
          "Incapacitated patient’s prior oral statements commonly used as guide. Problems arise from variance in interpretation. If patient was informed, directive was specific, patient made a choice, and decision was repeated over time to multiple people, then the oral directive is more valid.",
        ],
        [
          "Written advance directive",
          "Delineates specific healthcare interventions that patient anticipates accepting or rejecting during treatment for a critical or life-threatening illness. A living will is an example.",
        ],
        [
          "Medical power of attorney",
          "Patient designates an agent to make medical decisions in the event that the patient loses decision-making capacity. Patient may also specify decisions in clinical situations. Can be revoked by patient if decision-making capacity is intact. More flexible than a living will.",
        ],
        [
          "Do not resuscitate order",
          "DNR order prohibits cardiopulmonary resuscitation (CPR). Patient may still consider other life-sustaining measures (eg, intubation, feeding tube, chemotherapy).",
        ],
      ],
      caption:
        "Verbatim carry, documented: three blocks and four directive rows in printed order (VLM-confirmed — none missing or extra). First Aid prints its own mnemonic devices in red on this page — the “Exceptions to informed consent (WIPE it away)” heading with the W/I/P/E initial letters and the “Sex / Drugs / Rock and roll” lead words — reproduced here as printed and ATTRIBUTED to the source (they are First Aid's own hooks, not KYP's). Printed quirks carried: the Capacity parenthetical “(distinct from competence, a legal determination)” attaches to Capacity; the exception bullets and “prenatal care—usually not abortion” carry em-dashes as printed; “decision-making” prints hyphenated across a line wrap in the Legally Incompetent bullet and the Medical power of attorney row, and “life-sustaining” in the DNR row — the raw text layer merges all three (“decisionmaking” ×2, “lifesustaining”), and the hyphenated print forms are carried here; the curly-quoted apostrophes (“one’s”, “minor’s”, “patient’s”) are as printed; the four directive terms each wrap across two lines in the printed term column.",
    },
    {
      kind: "list",
      title:
        "The decoder — who decides, block by block (KYP's reading of the page)",
      intro:
        "Each printed unit compressed to its exam-decision core: the rule, the exception set, and the one distinction the answer hinges on. This is the layer to recall when a vignette hands you a patient who cannot, or will not, walk through the standard consent.",
      items: [
        {
          lead: "THE FOUR PILLARS — the process is the consent",
          text: "Disclosure: discussion of pertinent information, including risks/benefits. Understanding: ability to comprehend. Capacity: ability to reason and make one’s own decisions (distinct from competence, a legal determination — the physician assesses capacity, a judge determines competence). Voluntariness: freedom from coercion and manipulation. Fail any pillar and there is no valid consent, whatever the form says — and even a valid consent can be revoked at any time, even orally.",
        },
        {
          lead: "THE DISCLOSURE SET — no treatment is an option",
          text: "The comprehensive-understanding sentence is the exam's quiet trap: the patient must understand the diagnosis, the risks/benefits of the PROPOSED treatment, the ALTERNATIVE options, and NO treatment. A consent conversation that covers only the proposed intervention has not covered the printed requirement — “including no treatment” is carried verbatim.",
        },
        {
          lead: "WIPE — the four exceptions, one sentence each",
          text: "Waiver: the patient explicitly relinquishes the right of informed consent — the PATIENT gives the process away. Legally Incompetent: the patient lacks decision-making capacity — obtain consent from the legal SURROGATE. Therapeutic Privilege: withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity — the PHYSICIAN withholds, and only under those two conditions. Emergency situation: implied consent may apply — no one is asked, because there is no time.",
        },
        {
          lead: "THE MINOR DEFAULT AND ITS GATES — <18 means the parent, unless",
          text: "A minor is generally any person <18 years old; parental consent laws vary by state; in general parental consent should be obtained. The gates out: emergency treatment (eg, blood transfusions); legal emancipation (eg, married, self-supporting, or in the military); and the care-category set — Sex (contraception, STIs, prenatal care—usually not abortion), Drugs (substance use disorder treatment), Rock and roll (emergency/trauma) — where parental consent is usually not required.",
        },
        {
          lead: "ASSENT, ALWAYS — the minor's voice survives every gate",
          text: "Physicians should always encourage healthy minor-guardian communication, and the physician should seek a minor's assent (agreement of someone unable to legally consent) even if their consent is not required. Assent is not a legal formality — it is the printed instruction to keep the minor in the conversation the law does not let the minor own (KYP gloss).",
        },
        {
          lead: "THE FOUR INSTRUMENTS — what each one is, in one line",
          text: "Oral advance directive: prior oral statements as guide — problems arise from variance in interpretation; more valid if informed, specific, a real choice, repeated over time to multiple people. Written advance directive: delineates specific healthcare interventions the patient anticipates accepting or rejecting during treatment for a critical or life-threatening illness — a living will is an example. Medical power of attorney: a designated agent makes medical decisions if the patient loses decision-making capacity; revocable while capacity is intact; more flexible than a living will. DNR order: prohibits CPR only — other life-sustaining measures (intubation, feeding tube, chemotherapy) may still be considered.",
        },
        {
          lead: "THE FLEXIBILITY LADDER — words → paper → person (KYP)",
          text: "The print's ranking cues are implicit: the oral directive carries “problems arise from variance in interpretation” (weakest), the living will fixes specific interventions (rigid), and the medical power of attorney is printed “more flexible than a living will” (strongest — an agent adapts to clinical situations). The ladder is the KYP synthesis of those cues; the DNR order sits beside it as a scoped order, not a rung (the print never ranks it).",
        },
      ],
    },
    {
      kind: "steps",
      title: "Answering any consent vignette in four questions",
      intro:
        "The whole page distilled into an ordered reading path — DECIDER, PROCESS, EXCEPTION, SUBSTITUTE — applicable to any consent scenario the exam shows, printed on book 269 or not.",
      steps: [
        {
          label: "QUESTION 1 — WHO IS THE DECIDER?",
          detail:
            "An adult with decision-making capacity decides for themselves (proceed to Question 2). A minor (<18) routes to the parent unless a gate applies (Question 3). A patient who has lost capacity routes to whatever they left in place (Question 4). Age, capacity, and prior instructions are the three routing facts — read them first.",
        },
        {
          label: "QUESTION 2 — DOES THE PROCESS STAND? (DUCV)",
          detail:
            "Check the four pillars in printed order: Disclosure (pertinent information including risks/benefits — plus alternatives and no treatment), Understanding (ability to comprehend), Capacity (ability to reason and make one's own decisions — distinct from competence, a legal determination), Voluntariness (freedom from coercion and manipulation). All four standing = valid consent; remind the patient it is revocable at any time, even orally.",
        },
        {
          label: "QUESTION 3 — IS THE PATIENT A MINOR? RUN THE GATES.",
          detail:
            "Parental consent in general — but ask in order: emergency treatment (eg, blood transfusions)? Legally emancipated (married, self-supporting, or in the military)? Care in the Sex (contraception, STIs, prenatal care—usually not abortion), Drugs (substance use disorder treatment), Rock and roll (emergency/trauma) set? Any yes → the minor's own consent suffices for that care; every path → encourage healthy minor-guardian communication and seek the minor's assent.",
        },
        {
          label: "QUESTION 4 — CAPACITY LOST? MATCH THE INSTRUMENT.",
          detail:
            "Prior oral statements → the oral advance directive (weigh its validity boosters: informed, specific, a choice, repeated over time to multiple people). A living will → specific interventions accepted or rejected in critical or life-threatening illness. A designated agent → medical power of attorney (most flexible; revocable while capacity is intact). A DNR order → prohibits CPR ONLY — do not let it silently cancel intubation, feeding tube, or chemotherapy.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Living will vs medical power of attorney — the flexibility see-saw, in the page's own words",
      intro:
        "The two written advance-directive instruments are the exam's favorite pair on this page: both are given in anticipation of incapacity, and the print itself ranks them — “More flexible than a living will.” Every distinguishing feature follows from what each one IS: a document or a person.",
      columns: [
        "Written advance directive (living will)",
        "Medical power of attorney",
      ],
      rows: [
        {
          label: "What it is",
          a: "A DOCUMENT: “Delineates specific healthcare interventions that patient anticipates accepting or rejecting during treatment for a critical or life-threatening illness. A living will is an example.”",
          b: "A PERSON: “Patient designates an agent to make medical decisions in the event that the patient loses decision-making capacity.”",
        },
        {
          label: "When it speaks",
          a: "Only for the clinical situations it names, in advance — “during treatment for a critical or life-threatening illness”",
          b: "Whenever capacity is lost — and “patient may also specify decisions in clinical situations,” narrowing the agent's lane where the patient chooses to",
        },
        {
          label: "Flexibility (the printed ranking)",
          a: "The rigid instrument — it says only what it says; a situation it did not anticipate is a situation it does not answer",
          b: "Printed verbatim: “More flexible than a living will” — an agent reasons through situations the document never anticipated",
        },
        {
          label: "Revocation",
          a: "Revocable by the patient (details vary per state law — the directives lead sentence)",
          b: "“Can be revoked by patient if decision-making capacity is intact” — the revocation clause is printed for this instrument specifically",
        },
        {
          label: "Characteristic failure",
          a: "Rigidity: the intervention list cannot grow or adapt once capacity is lost",
          b: "Agency drift: the agent decides as the patient would have — the surrogate-standards page (book 270) governs how (KYP bridge)",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one scope twist",
      body:
        "SHAPE 1 — THE EXCEPTION NAME: a vignette where the full process does not run, and the options are the four exceptions — match the mechanism: the patient declines the discussion = Waiver; the patient cannot decide = Legally Incompetent (consent from the legal surrogate); disclosure would severely harm the patient or undermine the decision itself = Therapeutic Privilege; unconscious, time-critical = Emergency (implied consent). SHAPE 2 — THE MINOR AT THE COUNTER: a teenager requests contraception, STI care, prenatal care, or substance use disorder treatment without a parent — parental consent is usually not required for that care (usually not abortion), while the physician encourages minor-guardian communication and seeks assent; an emancipated minor (married, self-supporting, in the military) consents as an adult; an emergency (eg, blood transfusion) needs no parent. SHAPE 3 — THE DIRECTIVE MATCH: an incapacitated adult and the question is which instrument controls — prior oral statements (check the validity boosters), a living will (specific interventions in critical illness), a designated agent (medical power of attorney — more flexible; revocable while capacity intact). SHAPE 4 — THE REVOCATION: a patient who signed the form now says no — the written consent is revoked at any time, even orally. THE SCOPE TWIST: a DNR order prohibits CPR ONLY — a patient with a DNR who needs intubation, a feeding tube, or chemotherapy may still receive them; “do not resuscitate” is not “do not treat.”",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own red mnemonics — WIPE and Sex/Drugs/Rock-and-roll, carried attributed",
      body:
        "The page prints TWO mnemonic devices of its own, in RED (VLM-confirmed at 120dpi, staging-pubh19/vlm-census.txt) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “Exceptions to informed consent (WIPE it away)” — the heading prints “WIPE” in red, and the four bullets are led by bold red initial letters: Waiver, Legally Incompetent, Therapeutic Privilege, Emergency situation. (2) “Sex (contraception, STIs, prenatal care—usually not abortion) / Drugs (substance use disorder treatment) / Rock and roll (emergency/trauma)” — the three lead words print in bold red as the situations in which parental consent is usually not required. The two KYP originals in the Memory section below are marked as such: “DUCV” (the four process requirements in printed order — Disclosure, Understanding, Capacity, Voluntariness) and “WORDS, PAPER, PERSON” (the advance-directive flexibility ladder — oral directive, living will, medical power of attorney — with the DNR as the scoped order that stops CPR only).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — where each rule meets the ward",
      intro:
        "First Aid's printed examples and phrasings are the exam's wardrobe; these are the four encounters the page dresses, each anchored to its printed sentence.",
      items: [
        {
          lead: "THE EMERGENCY TRANSFUSION — the printed example of the emergency gate",
          text: "“Exceptions exist for emergency treatment (eg, blood transfusions)”: a hemorrhaging minor whose parents are unreachable receives the transfusion under implied consent — the same logic as the WIPE Emergency exception on the adult side of the page. The emergency gate is category-wide, not transfusion-specific (KYP context: the printed example generalizes to emergency care).",
        },
        {
          lead: "THE EMANCIPATED MINOR — the three printed criteria",
          text: "“Legally emancipated (eg, married, self-supporting, or in the military)” — any one of the three makes the minor their own consent-giver for general care. Emancipation is a blanket status; the Sex/Drugs/Rock-and-roll set is category-specific and does NOT require emancipation — the distinction the exam probes (KYP contrast of the two printed mechanisms).",
        },
        {
          lead: "THE DNR AT THE BEDSIDE — one prohibition, not a treatment plan",
          text: "“DNR order prohibits cardiopulmonary resuscitation (CPR). Patient may still consider other life-sustaining measures (eg, intubation, feeding tube, chemotherapy)” — the DNR conversation is about resuscitation after cardiopulmonary arrest, not about the rest of the care. A patient with a DNR may choose intubation for respiratory failure; the order forbids CPR alone.",
        },
        {
          lead: "THE MIDSTREAM REVOCATION — the printed revocation clause",
          text: "“Patients must be informed of their right to revoke written consent at any time, even orally” — a consent signed preoperatively dies the moment the patient says no, in words, without a form. The revocation clause pairs with the minors block's assent rule: in both, the patient's spoken voice outranks the paperwork (KYP pairing of the two printed sentences).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 68-year-old man with newly diagnosed metastatic pancreatic cancer is told that chemotherapy may extend his life by several months but causes severe nausea and fatigue. His family asks the oncologist not to tell him the prognosis, believing he would give up; the patient has full decision-making capacity and wants to know what is happening.",
        discriminator:
          "Full capacity + a family request to withhold + disclosure that would not undermine the patient's own decision-making — therapeutic privilege does NOT fit",
        concept: "The WIPE exceptions and their limits — therapeutic privilege",
        answer:
          "This is not a valid exception — disclose to the patient. Therapeutic Privilege permits “withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity”; a capable patient asking for information is the opposite case, and family preference is never a waiver (the patient must explicitly relinquish the right himself).",
      },
      {
        stem: "A 15-year-old girl presents alone to a community clinic requesting oral contraceptives. She is not married, is not self-supporting, and is not in the military. She asks that her parents not be told.",
        discriminator:
          "The care category — contraception — sits in the printed Sex set, which requires neither parental consent nor emancipation",
        concept: "Consent for minors — the situations not requiring parental consent",
        answer:
          "Provide the contraception without parental consent: Sex (contraception, STIs, prenatal care—usually not abortion) is one of the situations in which parental consent is usually not required. The physician should always encourage healthy minor-guardian communication and should seek the girl's assent — which in this case is effectively her request itself.",
      },
      {
        stem: "A 74-year-old woman with a documented DNR order is admitted with COPD exacerbation and worsening hypercapnia; the team proposes noninvasive ventilation and, if it fails, intubation. Her family objects that the DNR means she cannot be intubated.",
        discriminator:
          "The DNR's printed scope — it names CPR only, and intubation is not CPR",
        concept: "Do not resuscitate order — scope of the prohibition",
        answer:
          "Intubation remains available: “DNR order prohibits cardiopulmonary resuscitation (CPR). Patient may still consider other life-sustaining measures (eg, intubation, feeding tube, chemotherapy).” The DNR forbids resuscitation after cardiopulmonary arrest; the ventilation decision is a separate one, made with the patient or her surrogate on its own risks and benefits.",
      },
      {
        stem: "Before elective surgery, a 58-year-old woman completes both a living will refusing dialysis in end-stage renal disease and a medical power of attorney naming her sister as agent. Years later, she loses decision-making capacity after a stroke, and a question arises that her living will does not address.",
        discriminator:
          "The instrument with a decider who can reason through an unanticipated situation — the agent, not the document",
        concept: "Advance directives — the flexibility ranking",
        answer:
          "The medical power of attorney controls the unaddressed question: the agent “make[s] medical decisions in the event that the patient loses decision-making capacity,” and the instrument is printed “more flexible than a living will.” The living will speaks only to the specific interventions it delineates (dialysis in critical illness); the agent extends the patient's voice to situations the paper never anticipated.",
      },
    ],
    traps: [
      {
        a: "Capacity — clinical, decision-specific, assessed by the physician",
        b: "Competence — a legal determination made by a judge",
        whyConfused:
          "The page prints them in one parenthetical — “Capacity: ability to reason and make one's own decisions (distinct from competence, a legal determination)” — and vignettes use the words almost interchangeably",
        keyDifference:
          "Capacity is what the clinician assesses at the bedside for the decision at hand (and it can fluctuate); competence is what a court declares about the person. A patient can lack capacity for one decision and retain it for another; only a court makes incompetence official",
        clue:
          "If the stem asks who DETERMINES it → physician (capacity) vs judge (competence); if the stem says a patient was found incompetent → route consent to the legal surrogate (the WIPE “I”).",
      },
      {
        a: "Waiver — the PATIENT explicitly relinquishes the right of informed consent",
        b: "Therapeutic Privilege — the PHYSICIAN withholds information",
        whyConfused:
          "Both are printed exceptions in which the disclosure conversation does not happen; both appear in the same WIPE box",
        keyDifference:
          "Who declines the conversation: in Waiver the patient gives the process away (their autonomous choice not to hear); in Therapeutic Privilege the physician withholds — and only “when disclosure would severely harm the patient or undermine informed decision-making capacity.” A family's request is neither",
        clue:
          "Ask whose choice the missing conversation is; then check therapeutic privilege's two printed conditions — severe harm, or undermining the decision itself.",
      },
      {
        a: "Emancipated minor — married, self-supporting, or in the military (a blanket status)",
        b: "The Sex/Drugs/Rock-and-roll set — care categories (no emancipation needed)",
        whyConfused:
          "Both are printed gates out of parental consent on the same block of the page; a stem about a teenager alone in clinic triggers both memories",
        keyDifference:
          "Emancipation transfers GENERAL consent authority to the minor; the Sex (contraception, STIs, prenatal care—usually not abortion), Drugs (substance use disorder treatment), Rock and roll (emergency/trauma) set confers authority for THAT CARE ONLY — an unemancipated 15-year-old consents to contraception but not to elective surgery",
        clue:
          "Scope: whole person (emancipation) vs one category (the red trio). And remember the trio's own carve-out — prenatal care yes, abortion usually not.",
      },
      {
        a: "DNR order — prohibits cardiopulmonary resuscitation (CPR) only",
        b: "Withdrawal of life-sustaining measures — intubation, feeding tube, chemotherapy",
        whyConfused:
          "Both involve limiting treatment near the end of life; families (and distractor options) read “do not resuscitate” as “do not treat”",
        keyDifference:
          "The DNR is a scoped order: “Patient may still consider other life-sustaining measures (eg, intubation, feeding tube, chemotherapy)” — each of those is a separate decision requiring its own consent or refusal. Withholding/withdrawing those measures is governed by the patient's wishes and the surrogate rules on the NEXT page (book 270), not by the DNR",
        clue:
          "If the question is about anything other than CPR after an arrest, the DNR is silent — the answer lies elsewhere.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem that makes much of a signed consent form",
        differentiator:
          "The form records the process; it is neither the process nor a contract",
        correctPath:
          "Check the four pillars (Disclosure including alternatives and no treatment, Understanding, Capacity, Voluntariness) — a signature without them is not informed consent, and even a properly signed consent “can be revoked … at any time, even orally.”",
      },
      {
        lookAlike: "A minor in the vignette, any minor",
        differentiator:
          "Run the gates in order before defaulting to the parent — emergency, emancipation, care category",
        correctPath:
          "Emergency treatment (eg, blood transfusions) → treat under implied consent; emancipated (married, self-supporting, in the military) → minor consents generally; care in Sex/Drugs/Rock-and-roll → minor consents for that care; otherwise parental consent — and on every path, encourage minor-guardian communication and seek the minor's assent.",
      },
      {
        lookAlike: "An incapacitated adult with paperwork (or just a story)",
        differentiator:
          "Match the instrument to its printed scope — words, paper, person, or the CPR-scoped order",
        correctPath:
          "Oral statements → weigh the validity boosters (informed, specific, a choice, repeated over time to multiple people); living will → the specific interventions it delineates for critical or life-threatening illness; medical power of attorney → the agent decides, more flexibly, revocable while capacity is intact; DNR → CPR only, everything else remains on the table.",
      },
    ],
    miniCase: {
      vignette:
        "A 15-year-old high-school student comes to a family medicine clinic alone. She requests a contraceptive method and STI screening. She has been living at home with her parents, who do not know she is sexually active; she is not married, does not support herself financially, and is not in the military. She says she will not seek care at all if her parents are contacted. After a full discussion of the contraceptive options, their risks and benefits, and the alternatives including no treatment, she states clearly that she wants to proceed.",
      question:
        "Which of the following is the most appropriate response by the physician?",
      options: [
        {
          label: "A",
          text: "Provide the contraception and STI screening without parental consent, and encourage her to discuss the visit with a parent or guardian",
          correct: true,
          why: "CORRECT — contraception and STI care sit in the printed set of “Situations in which parental consent is usually not required”: “Sex (contraception, STIs, prenatal care—usually not abortion).” The care category — not emancipation — is what removes the parental-consent requirement here; the page's two closers then govern delivery: “Physicians should always encourage healthy minor-guardian communication” and seek the minor's assent (her stated request), which the physician has already elicited.",
        },
        {
          label: "B",
          text: "Obtain parental consent before providing any contraception or STI screening, because she is a minor",
          why: "TEMPTING but wrong — the default (“In general, parental consent should be obtained”) is real, but the same printed paragraph builds the exceptions, and the care she requests is squarely in the Sex set: contraception, STIs, prenatal care (usually not abortion). Parental consent is usually NOT required for this care; requiring it here would misapply the general rule to an excepted category.",
        },
        {
          label: "C",
          text: "Decline to provide care unless a court declares her emancipated",
          why: "TEMPTING but wrong — it confuses the two gates. Emancipation (eg, married, self-supporting, or in the military) transfers GENERAL consent authority and is not needed for category care; the Sex/Drugs/Rock-and-roll set confers authority for THIS care without any emancipation. A 15-year-old living at home can still consent to contraception and STI screening.",
        },
        {
          label: "D",
          text: "Provide STI screening only, because contraception is not emergency care and Rock and roll covers emergencies alone",
          why: "WRONG parsing of the printed trio — “Rock and roll (emergency/trauma)” is the emergency/trauma category, but contraception is not riding on it: contraception and STIs are the “Sex” line's own contents (“contraception, STIs, prenatal care—usually not abortion”). Both requested services fall inside the excepted set; neither requires an emergency.",
        },
        {
          label: "E",
          text: "Notify her parents about the visit despite her request, because minors' care must be disclosed to guardians",
          why: "TEMPTING but wrong — the printed instruction runs the other way: “Physicians should always encourage healthy minor-guardian communication” — encourage, not compel or disclose over the patient's refusal. Confidentiality protections for the excepted categories (developed on the next page's confidentiality block, book 270) mean unilateral notification is not the most appropriate response; the physician's move is the invitation, not the report.",
        },
      ],
      reasoning:
        "The question tests the minors router: a 15-year-old, not emancipated, requesting category care. The printed default is parental consent, but the same page carves out the Sex/Drugs/Rock-and-roll set, and her two requests — contraception and STI screening — are the Sex line's own contents. The correct response provides the care, encourages (does not compel) minor-guardian communication, and treats her clear statement after a full disclosure discussion as the assent the page asks physicians to seek. Option B misapplies the default to an excepted category; option C confuses the emancipation gate with the category gate; option D misparses the trio's contents; option E converts encouragement into compelled disclosure, which the printed sentence does not do.",
    },
  },
  mnemonics: [
    {
      code: "WIPE it away",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in red on book 269 — the heading “Exceptions to informed consent (WIPE it away)” with bold red initial letters on the four bullets (carried verbatim, attributed): Waiver — patient explicitly relinquishes the right of informed consent; Legally Incompetent — patient lacks decision-making capacity (obtain consent from legal surrogate); Therapeutic Privilege — withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity; Emergency situation — implied consent may apply.",
      memorizes:
        "The four exceptions to informed consent — the situations in which the full process is excused",
      whenToUse:
        "Any vignette where the disclosure-and-consent conversation does not or cannot happen; name the exception by its mechanism — who removed the conversation (patient waiver, court incompetence, physician privilege, or the clock of an emergency).",
      clinical:
        "Each exception carries its own guardrail (KYP context): a waiver must be the patient's own explicit act; incompetence routes consent to the legal surrogate; therapeutic privilege requires severe harm or undermined decision-making — never mere family preference; implied consent lasts only as long as the emergency.",
    },
    {
      code: "Sex, Drugs, Rock and roll",
      meaning:
        "FIRST AID'S OWN framing, printed in bold red on book 269 as the situations in which parental consent is usually not required (carried verbatim, attributed): Sex — contraception, STIs, prenatal care (usually not abortion); Drugs — substance use disorder treatment; Rock and roll — emergency/trauma.",
      memorizes:
        "The three minor-care categories that bypass parental consent — with their contents and the abortion carve-out",
      whenToUse:
        "Any stem with a minor seeking care alone: check the requested care against the trio before defaulting to parental consent, and remember the trio needs no emancipation.",
      clinical:
        "The trio is category-specific (KYP context): it authorizes the minor's consent for contraception, STI care, prenatal care, substance use disorder treatment, and emergency/trauma care — not for general or elective care — and on every path the physician still encourages healthy minor-guardian communication and seeks the minor's assent.",
    },
    {
      code: "DUCV",
      meaning:
        "A KYP ORIGINAL — the four process requirements in their printed order: Disclosure (discussion of pertinent information, including risks/benefits — plus alternatives and no treatment), Understanding (ability to comprehend), Capacity (ability to reason and make one's own decisions — distinct from competence, a legal determination), Voluntariness (freedom from coercion and manipulation).",
      memorizes:
        "The four pillars of the informed-consent process — and, read in reverse, the four ways a consent fails",
      whenToUse:
        "Any question asking what makes a consent valid or invalid, and any stem where one pillar is suspicious (a rushed disclosure, a confused patient, a pressured yes); the WIPE exceptions then name what happens when a pillar cannot stand.",
      clinical:
        "Run DUCV in order at the bedside (KYP context): say the pertinent information, confirm comprehension, assess capacity for THIS decision, confirm the choice is uncoerced — then remind the patient the resulting consent is revocable at any time, even orally.",
    },
    {
      code: "WORDS, PAPER, PERSON",
      meaning:
        "A KYP ORIGINAL — the advance-directive flexibility ladder: WORDS (the oral advance directive — prior statements, “problems arise from variance in interpretation,” strengthened when informed, specific, chosen, repeated over time to multiple people) → PAPER (the written advance directive / living will — specific interventions accepted or rejected in critical or life-threatening illness) → PERSON (the medical power of attorney — a designated agent, printed “more flexible than a living will,” revocable while capacity is intact). The DNR order stands apart: the scoped order that prohibits CPR only.",
      memorizes:
        "The four advance-directive instruments and their relative flexibility, plus the DNR's unique one-intervention scope",
      whenToUse:
        "Any stem with an incapacitated adult: identify which instrument exists, then apply its printed scope — and never let a DNR silently cancel intubation, feeding tube, or chemotherapy.",
      clinical:
        "The ladder explains the trade-off (KYP synthesis of the printed cues): ease of creation rises as you go down the ladder — words are free, paper takes a document, a person takes a designation — while interpretive contestability falls and flexibility rises.",
    },
  ],
  rapidReview: {
    s30: [
      "Informed consent is a PROCESS requiring Disclosure (pertinent information including risks/benefits), Understanding (ability to comprehend), Capacity (ability to reason and make one's own decisions — distinct from competence, a legal determination), and Voluntariness (freedom from coercion and manipulation)",
      "The disclosure set: comprehensive understanding of the diagnosis, risks/benefits of proposed treatment, alternative options, INCLUDING NO TREATMENT; patients must be informed of their right to revoke written consent at any time, even orally",
      "WIPE — Waiver (patient explicitly relinquishes the right), Legally Incompetent (lacks decision-making capacity → legal surrogate), Therapeutic Privilege (withhold when disclosure would severely harm the patient or undermine informed decision-making capacity), Emergency (implied consent may apply)",
      "Minor = generally any person <18 years old; parental consent laws vary by state; parental consent in general — except emergency treatment (eg, blood transfusions) or legal emancipation (eg, married, self-supporting, or in the military)",
      "Sex (contraception, STIs, prenatal care—usually not abortion) · Drugs (substance use disorder treatment) · Rock and roll (emergency/trauma) — parental consent usually NOT required; always encourage healthy minor-guardian communication; seek the minor's assent (agreement of someone unable to legally consent) even when consent is not required",
      "Advance directives = instructions given by a patient in anticipation of the need for a medical decision; details vary per state law — oral (prior statements; validity up with informed, specific, a choice, repeated over time to multiple people), written/living will (specific interventions in critical or life-threatening illness), medical power of attorney (agent; revocable while capacity intact; more flexible than a living will)",
      "DNR order prohibits CPR only — the patient may still consider other life-sustaining measures (eg, intubation, feeding tube, chemotherapy)",
    ],
    m3: [
      "WIPE it away — Waiver, Legally Incompetent, Therapeutic Privilege, Emergency (First Aid's own, printed in red)",
      "Sex, Drugs, Rock and roll — the minor-care categories that bypass parental consent (First Aid's own, printed in red)",
      "DUCV — the four process pillars in printed order (KYP)",
      "WORDS, PAPER, PERSON — the directive flexibility ladder; the DNR stops CPR only (KYP)",
    ],
    m10: [
      "Capacity vs competence: the Capacity bullet's own parenthetical — “(distinct from competence, a legal determination)” — capacity is assessed by the physician for the specific decision; competence is declared by a court",
      "The living-will vs medical-power-of-attorney see-saw is printed verbatim: the POA is “more flexible than a living will” and “can be revoked by patient if decision-making capacity is intact”",
      "The emancipation gate and the Sex/Drugs/Rock-and-roll set are different mechanisms: emancipation (married, self-supporting, or in the military) is blanket; the trio is category-specific and includes its own carve-out — prenatal care, usually not abortion",
      "This page is the CONSENT half of the Ethics thread — book 268 (lower) built autonomy and capacity, book 270 opens Ventilator-assisted life support and the surrogate hierarchy; the DNR's “other life-sustaining measures” point directly there (KYP framing)",
    ],
  },
  recall: [
    {
      q: "Name the four requirements of the informed-consent process, each with its printed definition.",
      a: "Disclosure — discussion of pertinent information, including risks/benefits; Understanding — ability to comprehend; Capacity — ability to reason and make one's own decisions (distinct from competence, a legal determination); Voluntariness — freedom from coercion and manipulation.",
    },
    {
      q: "What must the comprehensive understanding cover, and what standing right accompanies a valid consent?",
      a: "The diagnosis and the risks/benefits of proposed treatment and alternative options, including no treatment; patients must be informed of their right to revoke written consent at any time, even orally.",
    },
    {
      q: "First Aid's printed mnemonic lists four exceptions to informed consent — name them with their mechanisms.",
      a: "\"WIPE it away\": Waiver — patient explicitly relinquishes the right of informed consent; Legally Incompetent — patient lacks decision-making capacity (obtain consent from legal surrogate); Therapeutic Privilege — withholding information when disclosure would severely harm the patient or undermine informed decision-making capacity; Emergency situation — implied consent may apply.",
    },
    {
      q: "When can parental consent be bypassed for a minor's care?",
      a: "Emergency treatment (eg, blood transfusions); if the minor is legally emancipated (eg, married, self-supporting, or in the military); and the usually-not-required set — Sex (contraception, STIs, prenatal care—usually not abortion), Drugs (substance use disorder treatment), Rock and roll (emergency/trauma). In every case, encourage healthy minor-guardian communication and seek the minor's assent.",
    },
    {
      q: "What is assent, and when is it sought?",
      a: "A minor's assent is the agreement of someone unable to legally consent; the physician should seek it even if the minor's consent is not required.",
    },
    {
      q: "What is an advance directive, and what four instruments does the page print?",
      a: "Instructions given by a patient in anticipation of the need for a medical decision (details vary per state law): oral advance directive, written advance directive (a living will is an example), medical power of attorney, and do not resuscitate order.",
    },
    {
      q: "What four conditions make an oral advance directive more valid?",
      a: "The patient was informed, the directive was specific, the patient made a choice, and the decision was repeated over time to multiple people — otherwise problems arise from variance in interpretation.",
    },
    {
      q: "What does a DNR order prohibit, and what does it leave untouched?",
      a: "It prohibits cardiopulmonary resuscitation (CPR) only; the patient may still consider other life-sustaining measures (eg, intubation, feeding tube, chemotherapy).",
    },
  ],
  related: [
    {
      title: "Core ethical principles and decision-making capacity — the page before",
      note:
        "Book 268 (lower) built this page's foundation: autonomy as the principle consent operationalizes, and decision-making capacity as a four-component clinical assessment (understanding, appreciation, reasoning, expressing a choice) — the physician's side of the capacity-vs-competence distinction printed in the Capacity bullet. The WIPE 'Legally Incompetent' exception and every surrogate question route through that assessment first.",
      topicId: "core-ethical-principles",
    },
    {
      title: "Surrogate decision-makers, confidentiality, and gifts — the page after",
      note:
        "Book 270 opens Ventilator-assisted life support and the surrogate decision-maker hierarchy — what happens when capacity is lost AND no directive anticipated the decision. The advance-directive instruments on this page name the patient's own script; the surrogate hierarchy supplies the default when the script runs out. The confidentiality block also develops the protections behind the minors' excepted categories (the miniCase's notification distractor).",
      topicId: "surrogates-confidentiality",
    },
    {
      title: "Challenging patient and ethical scenarios",
      note:
        "The applied ethics page (books 274–275): the difficult conversations, refusals, and boundary situations that stress the consent process built here — including the coercion and manipulation that Voluntariness forbids, and the waiver-like interactions that must be distinguished from valid consent.",
      topicId: "challenging-scenarios",
    },
    {
      title: "Patient safety: medical errors and quality improvement",
      note:
        "The systems counterpart (book 278): consent failures, documentation, and disclosure of errors are quality-of-care problems as well as ethical ones — the process view of consent on this page (a conversation with a record, not a signature) is the same process view that error disclosure requires.",
      topicId: "patient-safety-quality",
    },
  ],
  crossLinks: [
    {
      subject: "Behavioral science and psychiatry — capacity assessment",
      connection:
        "The Capacity pillar's parenthetical — “(distinct from competence, a legal determination)” — is assessed with the four components printed on the previous page (understanding, appreciation, reasoning, expressing a choice); psychiatry vignettes (depression, psychosis, suicidality) are the classic settings where capacity for a specific decision is questioned, and intellectual disability and mental illness are not by themselves exclusions.",
    },
    {
      subject: "Pediatrics — the minor patient",
      connection:
        "Pediatric practice runs on this page's router daily: routine care needs parental consent, the emergency department runs on implied consent (eg, blood transfusions), adolescent medicine lives in the Sex/Drugs/Rock-and-roll set (contraception, STI care, prenatal care, substance use disorder treatment), and assent is the standard of care for the developing child — the American Academy of Pediatrics' assent model is the printed sentence made policy (KYP context).",
    },
    {
      subject: "Critical care and emergency medicine — resuscitation and the DNR",
      connection:
        "The DNR order is a critical-care instrument: it prohibits CPR after cardiopulmonary arrest while leaving intubation, vasopressors, feeding tubes, and chemotherapy as separate decisions — the code-status conversation distinguishes resuscitation from treatment, and emergencies invoke the implied-consent exception on both the adult and minor sides of the page.",
    },
    {
      subject: "Health law and policy — state variation and instruments",
      connection:
        "Both blocks carry the law's fingerprint: “Parental consent laws in relation to healthcare vary by state” and “Details vary per state law” for advance directives — emancipation criteria, the excepted minor categories, living-will formalities, and medical-power-of-attorney scope are state statutes, which is why the exam asks for the general principle, not the state rule (KYP context).",
    },
  ],
};
