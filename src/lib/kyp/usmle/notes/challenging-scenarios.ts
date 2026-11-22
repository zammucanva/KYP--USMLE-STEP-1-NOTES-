import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch, topic 24. Source: FULL pdf pages 296–297 / books
// 274–275 (Part 1), the CLOSING topic of the COMMUNICATION SKILLS subsection
// and the chapter's only TWO-PAGE topic (the drug-names precedent): the
// two-page "Challenging patient and ethical scenarios" situation/response
// table — the lead-in + 13 rows on book 274 ("Patient does not follow the
// medical plan." through "Patient is upset with treatment received from
// another physician.") + 12 rows on book 275 ("An invasive test is performed
// on the wrong patient." through "A pediatrician recommends standard
// vaccinations for a patient, but the child's parent refuses."), where the
// table ENDS with a closing rule (VLM-confirmed — no third page; book 276
// opens Disease prevention, a separate topic). ROW-COUNT ADJUDICATION: the
// batch brief called this "the 24-row situation/response table (~12 rows per
// page)" — the PRINT carries TWENTY-FIVE rows (13 + 12), and the chapter
// census's own productionRationale likewise enumerates 25 situations
// (nonadherence through vaccine refusal); printed rows govern — ALL 25 rows
// are carried verbatim in this note's two table blocks (blocks[1] and
// blocks[2]) and the miscount is documented here and in the manifest.
// CENSUS (pdfimages): ZERO raster images on both pages — pure text/table.
// VLM AVAILABLE this session (glm-4.6v at 120dpi, TWO full-page passes,
// staging-pubh24/vlm-census.txt), confirming: the printed row order and
// counts of BOTH pages (13 + 12 = 25 — none missing or extra); every
// response cell verbatim; the lead-in with its three quoted example phrases
// and its closing lists (autonomy, beneficence, nonmaleficence, justice /
// patient, family, culture, and healthcare team); dotted-hairline row
// separators with NO zebra striping; the SITUATION column in regular black
// (not bold, not colored); the bold-navy titles; and the ABSENCE of margin
// notes, mnemonics, asterisk footnotes, images, and icons on both pages.
// PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II" (both pages)
// and "COmmUNICATION SkILLS" (both banner instances) — the known header-
// space and small-caps extraction artifacts, carried as-is; (2) the banner
// prints ONCE on 296 (running header only — VLM-confirmed; no in-body
// sub-banner, unlike the pharmacology pages); (3) the FINAL row (vaccines)
// interleaves its two cells LINE BY LINE in the raw text layer ("A
// pediatrician recommends standard Address any concerns the parent has.
// Explain..." on one raw line) — the evidence manifest quotes the
// contiguous raw span as extracted; this note's table block carries the
// DE-INTERLEAVED reading (VLM-confirmed); (4) the VLM's "spinal are reflex"
// in the brain-death row is a 120dpi misread — the text layer prints
// "spinal arc reflex" (adjudicated to the text layer, the ph27 "5-IIT"
// precedent); (5) curly quotes/apostrophes as printed ("unable to handle
// it.", "ugly.", "You still look good", isn't, patient's), the em-dash in
// "view—patient", the plain hyphen in "At ages 5-7", and the terminal
// ellipses of the lead-in's three example phrases; (6) the lead-in prints
// First Aid's signature FIRST-LETTER RED styling on key terms
// (patient-centered, obstacles, validate, points of view) — styling, not a
// mnemonic: NO mnemonic of First Aid's own prints anywhere on either page
// (VLM-explicit), so all four mnemonics below are KYP ORIGINALS, marked as
// such. ADJUDICATIONS: (A) row count corrected to print (25, not 24); (B)
// "arc" over the VLM's "are"; (C) the vaccine row de-interleaved; (D) the
// brief's cluster sketch (adherence · consent & disclosure · minors ·
// end-of-life · boundaries & professionalism · safety & reporting ·
// conflicts) adopted as the seven-cluster taxonomy with every row assigned
// exactly once (3 + 4 + 4 + 3 + 4 + 5 + 2 = 25). PROVENANCE SPLIT: verbatim
// = the lead-in, the column headers, and all 25 situation/response rows;
// FA-own = the lead-in's example phrases and principle/lens lists; KYP-
// original = the response grammar (ACKNOWLEDGE–VALIDATE–ASK), the seven-
// cluster taxonomy, the autonomy-override threshold map, the exam layer,
// and the four KYP mnemonics — every teaching generalization beyond the
// printed pages is flagged as KYP context. DrugCards: none — the pages
// print communication responses, not drugs (documented as folded-by-
// absence in the manifest; the analgesic clause and the sponsorship row's
// "new drug" are not monograph rows). The next page (book 276) opens
// Disease prevention — the Healthcare Delivery subsection, a separate
// topic.

export const challengingScenarios: KypUsMLENote = {
  id: "challenging-scenarios",
  title: "Challenging Patient and Ethical Scenarios: The Response Table",
  subtitle:
    "Two printed pages, one skill: choosing the most appropriate response. Twenty-five situations — the nonadherent patient, the family asking you to hide a prognosis, the 17-year-old requesting an abortion, the suicidal patient, the colleague who arrives impaired, the Jehovah's Witness family in the emergency department — each paired with the response First Aid wants you to pick on the exam. The pages open with the grammar that generates every correct answer: appropriate responses are patient-centered, open-ended, and empathetic; acknowledge obstacles (\"I understand this plan may be difficult...\"), validate emotions (\"It's understandable to feel frustrated...\"), and create open-ended dialogue (\"What concerns you most about...?\") — all of it checked against autonomy, beneficence, nonmaleficence, and justice, viewed through the eyes of patient, family, culture, and healthcare team. Read closely, the 25 rows are not 25 separate facts but seven recurring shapes: explore-don't-coerce (adherence barriers), the patient holds the information (consent and disclosure), the minor's body and the parent's consent, neither hasten nor prolong (end-of-life), acknowledge-don't-absorb (boundaries and professionalism), safety trumps preference (the reporting rows), and disclose-decline-refer (conflicts of interest and conscience). And a handful of rows mark the thresholds where autonomy itself yields — safety, minors, and the duties the law imposes.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Communication Skills",
  pilotCategory:
    "Public Health Sciences — communication under pressure: the complete two-page situation → appropriate-response table (25 rows, book 274–275) with the patient-centered/open-ended/empathetic response grammar, the four ethical principles and four points of view from the lead-in, and the override thresholds (safety, minors, reporting duties) the table's exception rows define.",
  difficulty: 1,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 274–275 (Communication Skills: Challenging patient and ethical scenarios)",
  tags: [
    "challenging scenarios",
    "communication skills",
    "physician-patient relationship",
    "most appropriate response",
    "patient-centered care",
    "empathy",
    "open-ended questions",
    "nonadherence",
    "therapeutic privilege",
    "disclosure",
    "minors",
    "adolescent pregnancy",
    "physician-assisted dying",
    "brain death",
    "suicidality",
    "professional boundaries",
    "intimate partner violence",
    "impaired physician",
    "child abuse",
    "elder abuse",
    "Jehovah's Witnesses",
    "vaccine refusal",
    "alternative medicine",
    "conflict of interest",
    "conscientious objection",
    "medical error disclosure",
    "ethics",
  ],
  core: {
    what:
      "Two printed pages, carried whole. THE LEAD-IN (book 274): “Appropriate responses are patient-centered, open-ended, and empathetic. Acknowledge obstacles (“I understand this plan may be difficult...”), validate emotions (“It’s understandable to feel frustrated...”), and create open-ended dialogue (“What concerns you most about...?”). Responses should reflect ethical principles (autonomy, beneficence, nonmaleficence, justice) and consider multiple points of view—patient, family, culture, and healthcare team.” THE TABLE — columns SITUATION / APPROPRIATE RESPONSE, TWENTY-FIVE rows in printed order. Book 274 (13 rows): (1) patient does not follow the medical plan → determine financial, logistical, or other obstacles; do not coerce or refer; schedule regular follow-up. (2) patient desires an unnecessary procedure → understand why and address underlying concerns; do not refuse to see or refer; avoid performing unnecessary procedures. (3) patient has difficulty taking medications → determine the factors; written instructions, teach-back method, simplified regimens. (4) family members ask about prognosis → avoid discussing with relatives without the patient’s permission. (5) family member asks you not to disclose poor-prognosis results (“unable to handle it”) → explore why incl. cultural factors; information will not be withheld if the patient wants it; therapeutic privilege only if the patient might seriously harm self or others. (6) a 17-year-old requests an abortion → many states require parental notification/consent; do not sway the decision; discuss options and refer to abortion care. (7) a 15-year-old wants to raise her child (parents want adoption) → the patient retains the right to make decisions regarding the child; practical information; encourage patient-parent discussion. (8) terminally ill patient requests physician-assisted dying → most states prohibit it; medically appropriate analgesics permitted even if they potentially shorten life. (9) patient is suicidal → assess seriousness; voluntary admission suggested, involuntary if needed. (10) patient asks you on a date → chaperone if necessary; romantic relationships with patients are never appropriate; firm boundaries; transition care if necessary. (11) post-mastectomy patient feels “ugly” → find out why; no falsely reassuring statements (eg, “You still look good”). (12) patient angry about waiting-room time → acknowledge, don’t take it personally, thank and apologize, stay away from explaining the delay. (13) patient upset with another physician → suggest speaking directly to that physician; office-staff problems you handle yourself. Book 275 (12 rows): (14) invasive test on the wrong patient → regardless of outcome, ethically obligated to inform the patient a mistake has been made. (15) treatment not covered by insurance → discuss all options; inform of financial assistance programs. (16) 7-year-old who lost his sister to cancer feels responsible → ages 5-7 understand death is permanent; direct concrete description; avoid clichés and euphemisms; reassure he is not responsible; normalize fears; encourage play and coping. (17) victim of intimate partner violence → ask if safe, devise an emergency plan; direct open-ended questions; summarize answers back; do not necessarily pressure to leave or disclose to authorities (unless required by state law). (18) patient wants alternative or holistic medicine → explore underlying reasons supportively and nonjudgmentally; advise benefits/risks incl. interactions; consider referral. (19) colleague presents to work impaired → risk to patient safety; ethical and usually legal obligation to report; seek guidance as procedures and law vary. (20) family insists on life support after brain death, citing movements → gently explain no chance of recovery, brain death is equivalent to death, movement is spinal arc reflex; bring to ethics board re futility. (21) pharmaceutical sponsorship offer → reject; generally decline gifts/sponsorships to avoid conflict of interest (AMA exceptions: gifts directly benefitting patients; medical-education funding; independent-criteria grants; unattributed funds). (22) patient requests a nonemergent procedure against your beliefs → accurate unbiased information; explain you do not perform it, neutrally; offer to refer. (23) mother and 15-year-old daughter unresponsive and bleeding, father refuses transfusion (Jehovah’s Witnesses) → transfuse daughter, but do not transfuse mother; a proxy may refuse emergent care for an adult whose preferences are known or reasonably inferred, but not for a minor based solely on faith. (24) dependent patient with injuries inconsistent with caretaker’s story → document, interview alone if possible, provide care, contact protective services if suspicion remains, inform the caretaker; physicians are required by law to report any reasonable suspicion of abuse, neglect, or endangerment. (25) pediatrician recommends vaccines, parent refuses → address concerns; explain risks and benefits; do not administer routine vaccinations without the parent’s consent.",
    why:
      "This table closes the Communication Skills subsection because it is the subsection's examination: every tool the chapter has built — the core ethical principles, informed consent, surrogate rules and confidentiality, interpreters and SPIKES — is stress-tested here against the situations where the tools collide. What makes each situation 'challenging' is that two instincts pull against each other: a 15-year-old's autonomy pulls against her parents' judgment; a family's request pulls against the patient's right to information; a physician's conscience pulls against a patient's request; a family's grief pulls against the definition of death; a colleague's privacy pulls against patient safety. The table's genius — and the reason the exam loves it — is that the correct response almost never resolves the tension by force. It EXPLORES (obstacles, reasons, cultural factors), INFORMS (risks, benefits, options, mistakes), and where needed REFERS (to abortion care, to a CAM provider, to another physician, to an ethics board) — and it names the narrow set of cases where the physician acts over objection: the actively suicidal patient, the bleeding minor whose proxy refuses transfusion on faith alone, the impaired colleague, the suspected abuse. That is the whole architecture: autonomy is the default, and the table's exception rows are the fence around it.",
    keyIdea:
      "Answer any 'most appropriate response' question in four moves. MOVE 1 — APPLY THE GRAMMAR: the correct option is patient-centered, open-ended, and empathetic — it acknowledges obstacles (\"I understand this plan may be difficult...\"), validates emotions (\"It's understandable to feel frustrated...\"), and creates open-ended dialogue (\"What concerns you most about...?\"). Directive, coercive, dismissive, and falsely reassuring options are distractors by construction. MOVE 2 — CHECK THE PRINCIPLE AND THE LENSES: autonomy (the 17-year-old's decision is not swayed; the 15-year-old retains the right to decide about her child), beneficence (financial assistance programs, practical information about caring for a baby), nonmaleficence (avoid performing unnecessary procedures; do not offer falsely reassuring statements), justice (discuss ALL treatment options even uninsured ones) — seen through four lenses: patient, family, culture, and healthcare team (the nondisclosure row's \"possible cultural factors\"; the bereavement row's developmental lens). MOVE 3 — SORT THE SITUATION INTO ONE OF SEVEN CLUSTERS: adherence barriers (1, 3, 18 — explore, don't coerce); consent & disclosure (2, 4, 5, 15 — the patient holds the information); minors (6, 7, 23, 25 — the minor's body, the parent's consent); end-of-life & loss (8, 16, 20 — neither hasten nor prolong); boundaries & professionalism (10, 11, 12, 13 — acknowledge, don't absorb); safety & reporting (9, 14, 17, 19, 24 — safety trumps preference); conflicts of interest & conscience (21, 22 — disclose, decline, refer). MOVE 4 — TEST FOR AN OVERRIDE: only three forces beat preference — SAFETY (involuntary hospitalization for the actively suicidal patient with a plan), THE MINOR LINE (transfuse the daughter, not the mother; no routine vaccines without parental consent), and LEGAL DUTIES (report impaired colleagues; report any reasonable suspicion of abuse, neglect, or endangerment; disclose errors regardless of outcome). Everything else: explore, inform, refer — never coerce, never dismiss, never decide for the patient.",
  },
  mechanisms: [
    {
      id: "response-grammar-map",
      title:
        "The response grammar: how the lead-in's three moves generate every appropriate response in the 25-row table",
      context:
        "The printed lead-in (book 274): patient-centered, open-ended, empathetic — acknowledge, validate, ask",
      flow: {
        nodes: [
          {
            id: "leadin",
            label: "THE LEAD-IN — the table's generating grammar",
            sublabel:
              "Input — “Appropriate responses are patient-centered, open-ended, and empathetic.” Every one of the 25 printed responses is a specific instantiation of this one sentence: meet the patient where they are (patient-centered), keep the conversation open (open-ended), and honor the feeling (empathetic) — before any information, referral, or action is offered.",
            variant: "input",
          },
          {
            id: "acknowledge",
            label: "MOVE 1 — ACKNOWLEDGE OBSTACLES: “I understand this plan may be difficult...”",
            sublabel:
              "Process — name the barrier before addressing it. The printed instantiations: “Determine whether there are financial, logistical, or other obstacles preventing the patient’s adherence” (row 1); “Determine what factors are involved in the patient’s difficulties” (row 3); “Attempt to understand why the patient wants the procedure and address underlying concerns” (row 2); “Explore why the family member believes this would be detrimental, including possible cultural factors” (row 5); “Explore any underlying reasons with the patient in a supportive, nonjudgmental manner” (row 18). The move is always diagnostic before it is corrective — the obstacle is treated as information, not defiance.",
            variant: "process",
          },
          {
            id: "validate",
            label: "MOVE 2 — VALIDATE EMOTIONS: “It’s understandable to feel frustrated...”",
            sublabel:
              "Process — the feeling is legitimate even when the behavior is not. The printed instantiations: “Acknowledge the patient’s anger, but do not take a patient’s anger personally” (row 12); “Find out why the patient feels this way” before any reassurance (row 11); “Identify and normalize fears and feelings” for the bereaved 7-year-old (row 16); “Gently explain to family” rather than confronting them (row 20). The paired prohibitions are the same move in negative: “Do not offer falsely reassuring statements (eg, “You still look good”)” — false reassurance invalidates; validation opens.",
            variant: "process",
          },
          {
            id: "ask",
            label: "MOVE 3 — CREATE OPEN-ENDED DIALOGUE: “What concerns you most about...?”",
            sublabel:
              "Process — hand the microphone back. The printed instantiations: “Ask patient direct, open-ended questions about exam findings and summarize patient’s answers back to them. Ask if patient has any questions” (row 17); “Address any concerns the parent has” (row 25); “Encourage discussion between the patient and parents to reach the best decision” (row 7). Closed, directive, or leading options are the exam's signature distractors — the correct answer keeps the patient talking.",
            variant: "process",
          },
          {
            id: "principles",
            label: "THE CHECK — four principles, four lenses",
            sublabel:
              "Process — the lead-in's second sentence: “Responses should reflect ethical principles (autonomy, beneficence, nonmaleficence, justice) and consider multiple points of view—patient, family, culture, and healthcare team.” AUTONOMY: “a physician should not sway the patient’s decision” (row 6); “The patient retains the right to make decisions regarding the child” (row 7). BENEFICENCE: “Inform patient of financial assistance programs” (row 15); “Provide any necessary medical care” (row 24). NONMALEFICENCE: “Avoid performing unnecessary procedures” (row 2); “Do not offer falsely reassuring statements” (row 11). JUSTICE: “Discuss all treatment options with patients, even if some are not covered by their insurance companies” (row 15). The four lenses: patient (whose information it is), family (row 4, 5, 7, 20), culture (row 5, 18, 23), healthcare team (rows 13, 19, 21 — colleague, staff, and industry relationships).",
            variant: "process",
          },
          {
            id: "rule",
            label: "THE RULE — explore, inform, refer; never coerce, never dismiss",
            sublabel:
              "Output — the grammar's yield: almost every correct response in the table ends in one of three constructive places — EXPLORATION continued (follow-up visits, open questions), INFORMATION delivered (risks/benefits, options, mistakes), or REFERRAL offered (abortion care, CAM provider, another physician, ethics board) — and never in coercion (“do not coerce the patient into adhering”), abandonment (“do not refuse to see the patient”), or deception (therapeutic privilege only at its narrow trigger). The exceptions — where the physician acts over objection — are the second mechanism's subject.",
            variant: "output",
          },
        ],
        edges: [
          { from: "leadin", to: "acknowledge", label: "obstacles are named →" },
          { from: "leadin", to: "validate", label: "feelings are honored →" },
          { from: "leadin", to: "ask", label: "dialogue stays open →" },
          { from: "acknowledge", to: "principles", label: "then check autonomy…" },
          { from: "validate", to: "principles", label: "…beneficence…" },
          { from: "ask", to: "principles", label: "…nonmaleficence, justice" },
          { from: "principles", to: "rule", label: "four lenses, one rule" },
        ],
      },
    },
    {
      id: "autonomy-threshold-map",
      title:
        "When autonomy yields: the table's override rows and the three thresholds that beat patient or family preference",
      context:
        "The printed exception rows (books 274–275): suicidality, the minor line, and the reporting duties",
      flow: {
        nodes: [
          {
            id: "default",
            label: "THE DEFAULT — autonomy and known preference govern",
            sublabel:
              "Input — most rows never override anyone: the 17-year-old's decision is not swayed “regardless of patient’s age or fetal condition”; the 15-year-old “retains the right to make decisions regarding the child, even if the patient’s parents disagree”; information is not withheld from a patient who wants it; a proxy's refusal stands for an adult “particularly when patient preferences are known or reasonably inferred” — the Jehovah's Witness mother is NOT transfused. Preference — the patient's, or the surrogate's standing in for it — is the currency.",
            variant: "input",
          },
          {
            id: "safety",
            label: "THRESHOLD 1 — SAFETY: “patient may be hospitalized involuntarily if needed”",
            sublabel:
              "Process — the suicidal row is the table's purest override: “Assess the seriousness of the threat. If patient is actively suicidal with a plan, suggest remaining in the hospital voluntarily; patient may be hospitalized involuntarily if needed.” The graduated shape matters — voluntary first, involuntary only at the active-plan level. The impaired-colleague row extends the same threshold to third parties: an impaired physician “presents a potential risk to patient safety,” creating “an ethical and usually a legal obligation to report.”",
            variant: "process",
          },
          {
            id: "minor",
            label: "THRESHOLD 2 — THE MINOR LINE: “Transfuse daughter, but do not transfuse mother.”",
            sublabel:
              "Process — the Jehovah's Witness row splits one emergency into two answers along the age line: “Emergent care can be refused by the healthcare proxy for an adult, particularly when patient preferences are known or reasonably inferred, but not for a minor based solely on faith.” The minor's body is protected even against the parent's faith; the adult's known preference is honored even in extremis. The vaccine row draws the same line in the outpatient direction — the child benefits, but the intervention is NONEMERGENT, so “Do not administer routine vaccinations without the parent’s consent”: parental consent governs routine pediatric care; faith alone cannot refuse EMERGENT care for a minor.",
            variant: "process",
          },
          {
            id: "duty",
            label: "THRESHOLD 3 — LEGAL DUTIES: report, disclose, do not conceal",
            sublabel:
              "Process — three rows attach duties that survive any preference: the abuse row (“Physicians are required by law to report any reasonable suspicion of abuse, neglect, or endangerment” — and “Inform the caretaker of your obligation to report”), the impairment row (report impaired colleagues “so they can cease patient care and receive appropriate assistance in a timely manner”), and the error row (“Regardless of the outcome, a physician is ethically obligated to inform a patient that a mistake has been made” — disclosure is not conditioned on harm). Note the boundary case: IPV disclosure to the authorities is NOT among the mandatory reports — “Do not necessarily pressure patient to leave a partner or disclose the incident to the authorities (unless required by state law).”",
            variant: "process",
          },
          {
            id: "narrow",
            label: "THE NEAR-MISSES — overrides the table explicitly refuses",
            sublabel:
              "Process — the fence has gaps the exam tests: therapeutic privilege exists but only “if you believe the patient might seriously harm self or others if informed” — a family member's request (“unable to handle it”) is not the trigger; futility is pursued through “appropriate ethics board regarding futility of care and withdrawal of life support,” not unilateral withdrawal; conscience routes to referral (“explain to the patient that you do not perform the procedure but offer to refer to another physician”), not to refusal of the patient; nonadherence is met with follow-up (“Schedule regular follow-up visits to track patient progress”), not with discharge from the practice.",
            variant: "process",
          },
          {
            id: "rule",
            label: "THE RULE — safety, minors, reports override; everything else explores",
            sublabel:
              "Output — read any challenging-scenario stem by asking, in order: Is anyone in danger? (suicide, impairment → act/report.) Is the patient a minor in an emergency? (transfuse; but routine care still needs the parent.) Does a statute attach? (abuse, impairment → report; errors → disclose, always.) If none of the three fires, the answer is the grammar: acknowledge, validate, ask — then explore, inform, or refer. The 25 rows are 25 points on this one map.",
            variant: "output",
          },
        ],
        edges: [
          { from: "default", to: "safety", label: "active danger →" },
          { from: "default", to: "minor", label: "minor + emergency →" },
          { from: "default", to: "duty", label: "statute or error →" },
          { from: "default", to: "narrow", label: "everything else →" },
          { from: "safety", to: "rule", label: "act over objection" },
          { from: "minor", to: "rule", label: "protect the minor" },
          { from: "duty", to: "rule", label: "report and disclose" },
          { from: "narrow", to: "rule", label: "explore, inform, refer" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "challenging-scenarios-map",
      title:
        "The 25 challenging scenarios as seven themed clusters (an original KYP diagram)",
      caption:
        "An original KYP diagram of books 274–275's two-page table. TOP — the lead-in triad band: patient-centered · open-ended · empathetic, each move with its printed example phrase (\"I understand this plan may be difficult...\" / \"It's understandable to feel frustrated...\" / \"What concerns you most about...?\"), over the principles strip (autonomy · beneficence · nonmaleficence · justice) and the lenses strip (patient · family · culture · healthcare team). MIDDLE — SEVEN cluster cards, every one of the 25 situations appearing exactly once with the verbatim key phrase of its response: ADHERENCE BARRIERS (rows 1, 3, 18), CONSENT & DISCLOSURE (2, 4, 5, 15), MINORS (6, 7, 23, 25), END-OF-LIFE & LOSS (8, 16, 20), BOUNDARIES & PROFESSIONALISM (10, 11, 12, 13), SAFETY & REPORTING (9, 14, 17, 19, 24), CONFLICTS OF INTEREST & CONSCIENCE (21, 22). BOTTOM — the override-threshold rule strip: safety, minors, reports override preference; everything else explores, informs, refers.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 296–297 — the pages' assets are the two color-coded table parts (bold-navy titles, small-caps column headers, regular-black SITUATION column, dotted hairlines, no zebra striping — VLM-read at 120dpi, staging-pubh24/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION: the cluster-card layout, the triad band, and the rule strip are KYP's; every situation label and every quoted response phrase is preserved from the print, and both pages' full text is additionally carried verbatim in the note's two table blocks. ADJUDICATION drawn on the visual: the print carries 25 rows (13 + 12), not the brief's 24 — printed rows govern; the brain-death card carries \"spinal arc reflex\" (the text layer's reading; the VLM's \"are\" is a 120dpi misread).",
    },
    {
      kind: "table",
      title:
        "Book 274 — the printed table, part one, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The first page of the two-page table: the lead-in's columns SITUATION / APPROPRIATE RESPONSE and THIRTEEN rows, from the nonadherent patient through the complaint about another physician. Two prohibitions print in full sentences (\"Do not coerce...\", \"Do not refuse to see...\") — the table teaches by forbidding the tempting wrong answers, and those sentences are carried exactly. Printed quirks: the SITUATION column prints in regular black (not bold); curly quotes and apostrophes as printed; the therapeutic-privilege row's conditions carried in full.",
      columns: ["SITUATION", "APPROPRIATE RESPONSE"],
      rows: [
        [
          "Patient does not follow the medical plan.",
          "Determine whether there are financial, logistical, or other obstacles preventing the patient’s adherence. Do not coerce the patient into adhering or refer the patient to another physician. Schedule regular follow-up visits to track patient progress.",
        ],
        [
          "Patient desires an unnecessary procedure.",
          "Attempt to understand why the patient wants the procedure and address underlying concerns. Do not refuse to see the patient or refer to another physician. Avoid performing unnecessary procedures.",
        ],
        [
          "Patient has difficulty taking medications.",
          "Determine what factors are involved in the patient’s difficulties. If comprehension or memory are issues, use techniques such as providing written instructions, using the teach-back method, or simplifying treatment regimens.",
        ],
        [
          "Family members ask for information about patient’s prognosis.",
          "Avoid discussing issues with relatives without the patient’s permission.",
        ],
        [
          "A patient’s family member asks you not to disclose the results of a test if the prognosis is poor because the patient will be “unable to handle it.”",
          "Explore why the family member believes this would be detrimental, including possible cultural factors. Explain that if the patient would like to know information concerning care, it will not be withheld. However, if you believe the patient might seriously harm self or others if informed, you may invoke therapeutic privilege and withhold the information.",
        ],
        [
          "A 17-year-old is pregnant and requests an abortion.",
          "Many states require parental notification or consent for minors for an abortion. Unless there are specific medical risks associated with pregnancy, a physician should not sway the patient’s decision for, or against, an elective abortion (regardless of patient’s age or fetal condition). Discuss options for terminating the pregnancy and refer to abortion care, if needed.",
        ],
        [
          "A 15-year-old is pregnant and wants to raise the child. The patient’s parents want you to tell the patient to give the child up for adoption.",
          "The patient retains the right to make decisions regarding the child, even if the patient’s parents disagree. Provide information to the teenager about the practical aspects of caring for a baby. Discuss options for terminating the pregnancy, if requested. Encourage discussion between the patient and parents to reach the best decision.",
        ],
        [
          "A terminally ill patient requests physician-assisted dying.",
          "The overwhelming majority of states prohibit most forms of physician-assisted dying. Physicians may, however, prescribe medically appropriate analgesics even if they potentially shorten the patient’s life.",
        ],
        [
          "Patient is suicidal.",
          "Assess the seriousness of the threat. If patient is actively suicidal with a plan, suggest remaining in the hospital voluntarily; patient may be hospitalized involuntarily if needed.",
        ],
        [
          "Patient states that you are attractive and asks if you would go on a date.",
          "Use a chaperone if necessary. Romantic relationships with patients are never appropriate. Set firm professional boundaries with direct communication. Transition care to another physician if necessary.",
        ],
        [
          "A woman who had a mastectomy says she now feels “ugly.”",
          "Find out why the patient feels this way. Do not offer falsely reassuring statements (eg, “You still look good”).",
        ],
        [
          "Patient is angry about the long time spent in the waiting room.",
          "Acknowledge the patient’s anger, but do not take a patient’s anger personally. Thank the patient for being patient and apologize for any inconvenience. Stay away from efforts to explain the delay.",
        ],
        [
          "Patient is upset with treatment received from another physician.",
          "Suggest that the patient speak directly to that physician regarding the concern. If the problem is with a member of the office staff, reassure the patient you will speak to that person.",
        ],
      ],
      caption:
        "Verbatim carry, documented: THIRTEEN rows in printed order (VLM-confirmed — none missing or extra; the table continues on book 275). First Aid prints the SITUATION column in regular black roman type with dotted hairline separators and no zebra shading (VLM-read at 120dpi, staging-pubh24/vlm-census.txt). Printed quirks carried: the curly quotes of “unable to handle it.,” “ugly.,” and “You still look good”; the curly apostrophes (patient’s, It’s); the parenthetical “(eg, “You still look good”)” printed inside the mastectomy response. The response sentences that begin “Do not...” are the table's own distractor-killers — they are First Aid's printed guidance, carried exactly, and the exam's wrong answers are built from violating them.",
    },
    {
      kind: "table",
      title:
        "Book 275 — the printed table, part two (continued), carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The second page: TWELVE rows, from the wrong-patient error through the vaccine refusal, where the table ENDS with a closing rule (VLM-confirmed — no third page). This page carries the threshold rows — the error-disclosure mandate, the IPV safety plan, the impaired-colleague report, brain death and the spinal arc reflex, the AMA gift exceptions, the Jehovah's Witness split decision, and the abuse-reporting statute — all carried verbatim.",
      columns: ["SITUATION", "APPROPRIATE RESPONSE"],
      rows: [
        [
          "An invasive test is performed on the wrong patient.",
          "Regardless of the outcome, a physician is ethically obligated to inform a patient that a mistake has been made.",
        ],
        [
          "A patient requires a treatment not covered by insurance.",
          "Discuss all treatment options with patients, even if some are not covered by their insurance companies. Inform patient of financial assistance programs.",
        ],
        [
          "A 7-year-old boy loses a sister to cancer and now feels responsible.",
          "At ages 5-7, children begin to understand that death is permanent, all life functions end completely at death, and everything that is alive eventually dies. Provide a direct, concrete description of his sister’s death. Avoid clichés and euphemisms. Reassure the boy that he is not responsible. Identify and normalize fears and feelings. Encourage play and healthy coping behaviors (eg, remembering her in his own way).",
        ],
        [
          "Patient is victim of intimate partner violence.",
          "Ask if patient is safe and help devise an emergency plan if there isn’t one. Ask patient direct, open-ended questions about exam findings and summarize patient’s answers back to them. Ask if patient has any questions. Do not necessarily pressure patient to leave a partner or disclose the incident to the authorities (unless required by state law).",
        ],
        [
          "Patient wants to try alternative or holistic medicine.",
          "Explore any underlying reasons with the patient in a supportive, nonjudgmental manner. Advise the patient of known benefits and risks of treatment, including adverse effects, contraindications, and medication interactions. Consider referral to an appropriate complementary or alternative medicine provider.",
        ],
        [
          "Physician colleague presents to work impaired.",
          "This presents a potential risk to patient safety. You have an ethical and usually a legal obligation to report impaired colleagues so they can cease patient care and receive appropriate assistance in a timely manner. Seek guidance in reporting as procedures and applicable law vary by institution and state.",
        ],
        [
          "Patient’s family insists on maintaining life support after brain death has occurred, citing patient’s movements when touched.",
          "Gently explain to family that there is no chance of recovery, and that brain death is equivalent to death. Movement is due to spinal arc reflex and is not voluntary. Bring case to appropriate ethics board regarding futility of care and withdrawal of life support.",
        ],
        [
          "A pharmaceutical company offers you a sponsorship in exchange for advertising its new drug.",
          "Reject this offer. Generally, decline gifts and sponsorships to avoid any conflict of interest. The AMA Code of Ethics does make exceptions for gifts directly benefitting patients; special funding for medical education of students, residents, fellows; grants whose recipients are chosen by independent institutional criteria; and funds that are distributed without attribution to sponsors.",
        ],
        [
          "Patient requests a nonemergent procedure that is against your personal or religious beliefs.",
          "Provide accurate and unbiased information so patients can make an informed decision. In a neutral, nonjudgmental manner, explain to the patient that you do not perform the procedure but offer to refer to another physician.",
        ],
        [
          "Mother and 15-year-old daughter are unresponsive and bleeding heavily, but father refuses transfusion because they are Jehovah’s Witnesses.",
          "Transfuse daughter, but do not transfuse mother. Emergent care can be refused by the healthcare proxy for an adult, particularly when patient preferences are known or reasonably inferred, but not for a minor based solely on faith.",
        ],
        [
          "A dependent patient presents with injuries inconsistent with caretaker’s story.",
          "Document detailed history and physical. If possible and appropriate, interview the patient alone. Provide any necessary medical care. If suspicion remains, contact the appropriate agencies or authorities (eg, child or adult protective services) for an evaluation. Inform the caretaker of your obligation to report. Physicians are required by law to report any reasonable suspicion of abuse, neglect, or endangerment.",
        ],
        [
          "A pediatrician recommends standard vaccinations for a patient, but the child’s parent refuses.",
          "Address any concerns the parent has. Explain the risks and benefits of vaccinations and why they are recommended. Do not administer routine vaccinations without the parent’s consent.",
        ],
      ],
      caption:
        "Verbatim carry, documented: TWELVE rows in printed order (VLM-confirmed — none missing or extra; the table ENDS here with a closing rule, no third page). Printed quirks carried + documented: “At ages 5-7” with a plain hyphen as printed; the curly apostrophes (isn’t, sister’s, patient’s, caretaker’s, Jehovah’s); “spinal arc reflex” per the text layer (the VLM census's “spinal are reflex” is a 120dpi misread — adjudicated to the text layer, the ph27 “5-IIT” precedent); and the FINAL row (vaccines) interleaves its two cells line-by-line in the RAW text layer (\"A pediatrician recommends standard Address any concerns the parent has...\" on one raw line) — the manifest's evidence item quotes the contiguous raw span as extracted, and this table carries the DE-INTERLEAVED reading (VLM-confirmed). The AMA gift-exception list (patients, trainees, independent grants, unattributed funds) is First Aid's own condensation of the AMA Code of Ethics, carried exactly as printed.",
    },
    {
      kind: "list",
      title:
        "The seven clusters — 25 rows re-sorted into the seven shapes the exam actually tests (KYP's reading)",
      intro:
        "The printed order is narrative, not thematic; these seven clusters (the task brief's own sketch, adopted with every row assigned exactly once: 3 + 4 + 4 + 3 + 4 + 5 + 2 = 25) are the retrieval structure. Row numbers refer to the two verbatim tables above.",
      items: [
        {
          lead: "CLUSTER 1 — ADHERENCE BARRIERS (rows 1, 3, 18): EXPLORE, DON’T COERCE",
          text: "Nonadherence (row 1), medication difficulty (row 3), and alternative-medicine interest (row 18) share one response shape: find the obstacle before correcting the behavior. Row 1: “Determine whether there are financial, logistical, or other obstacles preventing the patient’s adherence. Do not coerce the patient into adhering or refer the patient to another physician. Schedule regular follow-up visits to track patient progress.” Row 3 adds the comprehension toolkit: “providing written instructions, using the teach-back method, or simplifying treatment regimens.” Row 18 keeps the same posture toward unconventional therapy: “Explore any underlying reasons... in a supportive, nonjudgmental manner,” advise of “known benefits and risks... including adverse effects, contraindications, and medication interactions,” and “Consider referral to an appropriate complementary or alternative medicine provider.”",
        },
        {
          lead: "CLUSTER 2 — CONSENT & DISCLOSURE (rows 2, 4, 5, 15): THE PATIENT HOLDS THE INFORMATION",
          text: "The unnecessary-procedure request (row 2), the family asking about prognosis (row 4), the family asking you to hide results (row 5), and the uninsured treatment (row 15) all route through the same principle: information belongs to the patient, and options belong on the table. Row 4 is the one-sentence rule: “Avoid discussing issues with relatives without the patient’s permission.” Row 5 is its stress test: explore the family member's reasons “including possible cultural factors,” promise that “if the patient would like to know information concerning care, it will not be withheld,” and reserve therapeutic privilege for the narrow case where “the patient might seriously harm self or others if informed.” Row 2 and row 15 extend it to procedures and costs: understand why; discuss “all treatment options... even if some are not covered by their insurance companies”; “Inform patient of financial assistance programs.”",
        },
        {
          lead: "CLUSTER 3 — MINORS (rows 6, 7, 23, 25): THE MINOR’S BODY, THE PARENT’S CONSENT",
          text: "The two adolescent-pregnancy rows and the two parent-refusal rows form the minors see-saw. Row 6 (17-year-old, abortion): “a physician should not sway the patient’s decision for, or against, an elective abortion (regardless of patient’s age or fetal condition).” Row 7 (15-year-old, wants the child): “The patient retains the right to make decisions regarding the child, even if the patient’s parents disagree” — with practical information, termination options “if requested,” and encouragement of “discussion between the patient and parents.” Row 23 (the emergency) splits on the age line: “Transfuse daughter, but do not transfuse mother” — a proxy may refuse emergent care for an adult with known or reasonably inferred preferences, “but not for a minor based solely on faith.” Row 25 (routine care) flips it: “Do not administer routine vaccinations without the parent’s consent” — parental consent governs the nonemergent, faith cannot refuse the emergent.",
        },
        {
          lead: "CLUSTER 4 — END-OF-LIFE & LOSS (rows 8, 16, 20): NEITHER HASTEN NOR PROLONG",
          text: "Physician-assisted dying (row 8), the bereaved 7-year-old (row 16), and brain-death life support (row 20). Row 8 draws both lines at once: “The overwhelming majority of states prohibit most forms of physician-assisted dying. Physicians may, however, prescribe medically appropriate analgesics even if they potentially shorten the patient’s life” — the doctrine of double effect in First Aid's own words. Row 20 holds the definition against grief: “brain death is equivalent to death. Movement is due to spinal arc reflex and is not voluntary,” and futility goes to “appropriate ethics board regarding futility of care and withdrawal of life support” — never unilateral. Row 16 brings the developmental lens: at “ages 5-7, children begin to understand that death is permanent, all life functions end completely at death, and everything that is alive eventually dies” — so give “a direct, concrete description,” “Avoid clichés and euphemisms,” “Reassure the boy that he is not responsible,” and “Encourage play and healthy coping behaviors (eg, remembering her in his own way).”",
        },
        {
          lead: "CLUSTER 5 — BOUNDARIES & PROFESSIONALISM (rows 10, 11, 12, 13): ACKNOWLEDGE, DON’T ABSORB",
          text: "The date request (row 10), the post-mastectomy “ugly” (row 11), the waiting-room anger (row 12), and the complaint about another physician (row 13). Row 10 is the firmest sentence in the table: “Romantic relationships with patients are never appropriate” — chaperone, “firm professional boundaries with direct communication,” and “Transition care to another physician if necessary.” Row 11 forbids the kind instinct: “Do not offer falsely reassuring statements (eg, “You still look good”)” — find out why instead. Row 12 manages anger without absorbing it: “Acknowledge the patient’s anger, but do not take a patient’s anger personally. Thank the patient for being patient and apologize for any inconvenience. Stay away from efforts to explain the delay” — the delay-explanation trap is the exam's favorite distractor here. Row 13 routes the complaint: “Suggest that the patient speak directly to that physician,” but office-staff problems the physician addresses personally.",
        },
        {
          lead: "CLUSTER 6 — SAFETY & REPORTING (rows 9, 14, 17, 19, 24): SAFETY TRUMPS PREFERENCE",
          text: "The suicidal patient (row 9), the wrong-patient error (row 14), intimate partner violence (row 17), the impaired colleague (row 19), and suspected abuse (row 24) — the override cluster. Row 9: “Assess the seriousness of the threat. If patient is actively suicidal with a plan, suggest remaining in the hospital voluntarily; patient may be hospitalized involuntarily if needed.” Row 14: “Regardless of the outcome, a physician is ethically obligated to inform a patient that a mistake has been made.” Row 19: impaired colleagues are reported — “an ethical and usually a legal obligation” — because of “a potential risk to patient safety.” Row 24: “Physicians are required by law to report any reasonable suspicion of abuse, neglect, or endangerment.” And row 17 marks the boundary: for IPV, ask “if patient is safe,” “help devise an emergency plan,” ask “direct, open-ended questions,” and “Do not necessarily pressure patient to leave a partner or disclose the incident to the authorities (unless required by state law).”",
        },
        {
          lead: "CLUSTER 7 — CONFLICTS OF INTEREST & CONSCIENCE (rows 21, 22): DISCLOSE, DECLINE, REFER",
          text: "The pharmaceutical sponsorship (row 21) and the conscience-based procedure request (row 22) are the physician-side conflicts. Row 21: “Reject this offer. Generally, decline gifts and sponsorships to avoid any conflict of interest” — with the AMA Code of Ethics exceptions carried in full (gifts directly benefitting patients; medical-education funding for students, residents, fellows; independent-criteria grants; unattributed funds). Row 22: conscience never blocks information — “Provide accurate and unbiased information so patients can make an informed decision” — and never abandons the patient: “In a neutral, nonjudgmental manner, explain to the patient that you do not perform the procedure but offer to refer to another physician.”",
        },
      ],
    },
    {
      kind: "steps",
      title: "Choosing the most appropriate response in four questions",
      intro:
        "The whole two-page table distilled into an ordered decision path — GRAMMAR, PRINCIPLE, CLUSTER, OVERRIDE — applicable to any challenging-scenario stem, printed on books 274–275 or not.",
      steps: [
        {
          label: "QUESTION 1 — DOES THE OPTION APPLY THE GRAMMAR?",
          detail:
            "Patient-centered, open-ended, empathetic: acknowledge obstacles (\"I understand this plan may be difficult...\"), validate emotions (\"It's understandable to feel frustrated...\"), create open-ended dialogue (\"What concerns you most about...?\"). Eliminate any option that is directive, coercive, dismissive, or falsely reassuring — \"You still look good\" is the printed example of what NOT to say.",
        },
        {
          label: "QUESTION 2 — WHICH PRINCIPLE, THROUGH WHICH LENSES?",
          detail:
            "Autonomy (don't sway the 17-year-old; the 15-year-old retains the right to decide about her child), beneficence (financial assistance programs; necessary medical care), nonmaleficence (avoid unnecessary procedures; no false reassurance), justice (discuss all options even uninsured) — considered from the patient's, family's, culture's, and healthcare team's points of view. Most stems are decided here: the correct option is the one that serves the principle without trampling a lens.",
        },
        {
          label: "QUESTION 3 — WHICH CLUSTER IS THE SITUATION?",
          detail:
            "Adherence barriers (explore, don't coerce) · consent & disclosure (the patient holds the information) · minors (the minor's body, the parent's consent) · end-of-life & loss (neither hasten nor prolong) · boundaries & professionalism (acknowledge, don't absorb) · safety & reporting (safety trumps preference) · conflicts of interest & conscience (disclose, decline, refer). The cluster names the response shape before you read the options.",
        },
        {
          label: "QUESTION 4 — DOES AN OVERRIDE FIRE?",
          detail:
            "Three forces beat preference: SAFETY (actively suicidal with a plan → involuntary hospitalization possible; impaired colleague → report), THE MINOR LINE (emergent care cannot be refused for a minor based solely on faith — transfuse the daughter; but routine vaccinations need the parent's consent), and LEGAL DUTIES (report any reasonable suspicion of abuse, neglect, or endangerment; disclose errors regardless of outcome). If no override fires — and therapeutic privilege fires only at \"might seriously harm self or others\" — the answer is explore, inform, or refer. Never coerce, never dismiss, never decide for the patient.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "The exam's minors see-saw — the 17-year-old's abortion vs the 15-year-old's baby, in the table's own words",
      intro:
        "Rows 6 and 7 sit four lines apart on book 274 and are the table's most confusable pair: two pregnant minors, two sets of pressing adults, opposite exam answers. Every distinguishing feature follows from what decision is on the table.",
      columns: [
        "ROW 6 — the 17-year-old requesting an abortion",
        "ROW 7 — the 15-year-old wanting to raise the child",
      ],
      rows: [
        {
          label: "The decision on the table",
          a: "Whether to terminate HER OWN pregnancy — a decision about her body and her care",
          b: "Whether to keep and raise the child — a decision about the child's future, which the print assigns to the mother",
        },
        {
          label: "Who decides (the printed rule)",
          a: "The patient: “a physician should not sway the patient’s decision for, or against, an elective abortion (regardless of patient’s age or fetal condition)”",
          b: "The patient: “The patient retains the right to make decisions regarding the child, even if the patient’s parents disagree”",
        },
        {
          label: "What the physician does",
          a: "“Discuss options for terminating the pregnancy and refer to abortion care, if needed” — information plus referral",
          b: "“Provide information to the teenager about the practical aspects of caring for a baby. Discuss options for terminating the pregnancy, if requested. Encourage discussion between the patient and parents to reach the best decision.”",
        },
        {
          label: "What the parents get",
          a: "A legal backdrop, not a veto: “Many states require parental notification or consent for minors for an abortion”",
          b: "A place in the conversation, not the decision: patient-parent discussion is encouraged toward “the best decision”",
        },
        {
          label: "The exam hook",
          a: "Any option where the physician “sways” the patient — toward OR against the procedure, for any age or fetal condition — is wrong by one printed sentence",
          b: "Any option where the parents' adoption preference overrides the patient's is wrong; the trigger phrase is “retains the right to make decisions regarding the child”",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks these two pages — four stem shapes and the distractor grammar",
      body:
        "SHAPE 1 — THE DIRECT ROW: the stem restates a printed situation (“A patient repeatedly misses appointments and admits he has not been taking his medication...”) and asks for the most appropriate response — route through the cluster (adherence: determine obstacles, do not coerce, schedule follow-up). SHAPE 2 — THE MINORS SPLIT: a pregnant adolescent or a refusing parent; decide WHICH minor row (17-year-old's decision not swayed; 15-year-old's right to the child; transfuse the minor, not the adult proxy's refusal; no routine vaccines without parental consent). SHAPE 3 — THE OVERRIDE CHECK: a suicidal patient, an impaired colleague, or suspicious injuries — the correct option ACTS or REPORTS (involuntary hospitalization at active-plan level; report impaired colleagues; report reasonable suspicion of abuse), while IPV's correct option does NOT press the patient to leave or disclose. SHAPE 4 — THE DISCLOSURE PAIR: family asking for prognosis (no discussion without the patient's permission) vs family asking you to hide results (explore, don't withhold if the patient wants to know; therapeutic privilege only at serious-harm-to-self-or-others). THE DISTRACTOR GRAMMAR: wrong options violate a printed prohibition — they coerce, refuse to see, refer when the table says explore, explain the waiting-room delay, offer “You still look good,” sway the adolescent, transfuse the mother, hide the error, or accept the sponsorship. When two options both sound kind, pick the one that keeps the dialogue open.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The mnemonic ledger — no First Aid mnemonic prints on these pages; all four codes are KYP originals",
      body:
        "The VLM census of both pages (staging-pubh24/vlm-census.txt) found NO mnemonic of First Aid's own anywhere in the owned span — no margin notes, no red in-cell mnemonic lines (the lead-in's first-letter red styling on patient-centered, obstacles, validate, and points of view is the book's signature styling, not a mnemonic). All four codes below are therefore KYP ORIGINALS, designed as retrieval hooks: (1) “ACKNOWLEDGE, VALIDATE, ASK” — the lead-in's three moves with their printed example phrases; (2) “EXPLORE, DON’T COERCE” — the adherence cluster's principle, with the teach-back toolkit attached; (3) “SAFETY, MINORS, REPORTS” — the three override thresholds; (4) “FOUR PRINCIPLES, FOUR LENSES” — autonomy/beneficence/nonmaleficence/justice × patient/family/culture/healthcare team. The adjacent pages' own hooks (SPIKES for bad news, the interpreter rules) are referenced only with attribution in the related-topics links.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The safety-and-law anchors — the rows where the response is a clinical action",
      intro:
        "Most rows of the table are conversation; these rows are procedure, and the exam asks them as clinical-management questions, not communication-style questions.",
      items: [
        {
          lead: "THE SUICIDAL PATIENT — graduated restriction of liberty",
          text: "“Assess the seriousness of the threat” first; “If patient is actively suicidal with a plan, suggest remaining in the hospital voluntarily; patient may be hospitalized involuntarily if needed.” The voluntary offer comes first, the involuntary hold is reserved for the active-plan level — the same graduated shape as the IPV row's non-pressure stance, and the table's clearest safety override of autonomy.",
        },
        {
          lead: "THE JEHOVAH’S WITNESS EMERGENCY — one event, two decisions",
          text: "“Transfuse daughter, but do not transfuse mother. Emergent care can be refused by the healthcare proxy for an adult, particularly when patient preferences are known or reasonably inferred, but not for a minor based solely on faith.” The clinical act (transfusion) is identical; the ethics differ by age and by whose preference the proxy carries. The known-preference adult is respected; the minor is protected.",
        },
        {
          lead: "THE ABUSE EVALUATION — document, separate, treat, report",
          text: "“Document detailed history and physical. If possible and appropriate, interview the patient alone. Provide any necessary medical care. If suspicion remains, contact the appropriate agencies or authorities (eg, child or adult protective services) for an evaluation. Inform the caretaker of your obligation to report. Physicians are required by law to report any reasonable suspicion of abuse, neglect, or endangerment.” The interview-alone step is the exam's favorite detail — the caretaker is not in the room when the questions are asked.",
        },
        {
          lead: "THE IMPAIRED COLLEAGUE — the report is the treatment",
          text: "“This presents a potential risk to patient safety. You have an ethical and usually a legal obligation to report impaired colleagues so they can cease patient care and receive appropriate assistance in a timely manner. Seek guidance in reporting as procedures and applicable law vary by institution and state.” Reporting is framed as help — the colleague “receive[s] appropriate assistance” — but the obligation stands regardless, and “seek guidance” covers the institutional variation.",
        },
        {
          lead: "THE WRONG-PATIENT ERROR — disclosure without a harm threshold",
          text: "“Regardless of the outcome, a physician is ethically obligated to inform a patient that a mistake has been made.” No materiality filter, no outcome condition — the duty attaches to the mistake itself. This is the table's one-sentence answer to every error-disclosure stem, and the printed “Regardless of the outcome” is the phrase the exam tests.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 58-year-old man with newly diagnosed hypertension returns for his third visit; his blood pressure is unchanged, and he admits he often skips his medications because of cost and a complicated regimen. He asks whether he should find another doctor.",
        discriminator:
          "The nonadherence row (row 1): obstacles are diagnosed, the patient is not coerced and not referred away, follow-up is scheduled",
        concept: "Responding to nonadherence — explore, don't coerce",
        answer:
          "Explore the financial and logistical obstacles and simplify the regimen with follow-up: “Determine whether there are financial, logistical, or other obstacles preventing the patient’s adherence. Do not coerce the patient into adhering or refer the patient to another physician. Schedule regular follow-up visits to track patient progress.” (Row 3 adds written instructions, the teach-back method, or simplifying treatment regimens when comprehension or memory are the issues.)",
      },
      {
        stem: "The daughter of a 72-year-old man with metastatic pancreatic cancer pulls you aside and asks that you not tell her father his biopsy results, insisting the news would kill him and that in the family's culture such news is never given directly.",
        discriminator:
          "The therapeutic-privilege row (row 5): explore the reasons and the cultural factors; the patient's wish controls; privilege is reserved for serious-harm-to-self-or-others",
        concept: "Family-requested nondisclosure and the narrow therapeutic privilege",
        answer:
          "Explore why the daughter believes disclosure would be detrimental, including possible cultural factors; explain that if the patient would like to know information concerning care, it will not be withheld; invoke therapeutic privilege only if you believe the patient might seriously harm self or others if informed — a family member's request alone is not the trigger.",
      },
      {
        stem: "A mother and her 15-year-old daughter are brought to the emergency department unconscious after a motor vehicle collision; both are bleeding heavily and need transfusion. The father, who is uninjured, refuses blood products for both, stating the family are Jehovah's Witnesses.",
        discriminator:
          "The minor line (row 23): “Transfuse daughter, but do not transfuse mother” — proxy refusal stands for the known-preference adult, not for the minor",
        concept: "Emergent refusal by proxy — the age split",
        answer:
          "Transfuse the daughter but not the mother: “Emergent care can be refused by the healthcare proxy for an adult, particularly when patient preferences are known or reasonably inferred, but not for a minor based solely on faith.” (The vaccine row is the outpatient mirror: routine vaccinations are NOT given without the parent's consent.)",
      },
      {
        stem: "During a procedure, you realize the consent form you are holding belongs to a different patient; the procedure went smoothly and the patient suffered no harm. A colleague advises you that because the outcome was good, no disclosure is needed.",
        discriminator:
          "The wrong-patient row (row 14): “Regardless of the outcome” — the disclosure duty does not depend on harm",
        concept: "Medical error disclosure",
        answer:
          "Inform the patient that a mistake has been made: “Regardless of the outcome, a physician is ethically obligated to inform a patient that a mistake has been made.” The same override family as the impaired colleague and abuse rows — duties that survive preference and outcome.",
      },
    ],
    traps: [
      {
        a: "Nonadherence → “Do not coerce... or refer the patient to another physician” (row 1)",
        b: "Conscience-based request → “explain to the patient that you do not perform the procedure but offer to refer to another physician” (row 22)",
        whyConfused:
          "Both rows involve a physician-patient mismatch the tempting answer resolves by referral, and both rows' responses contain the word “refer”",
        keyDifference:
          "The DIRECTION of the mismatch: when the PATIENT is the problem (nonadherence, unnecessary-procedure desire), the table forbids referral — the relationship holds and the obstacles are explored; when the PHYSICIAN is the limit (your personal or religious beliefs), referral is exactly the printed remedy, paired with unbiased information",
        clue:
          "Ask whose constraint creates the impasse: the patient's behavior → explore; your conscience → inform and refer.",
      },
      {
        a: "The 17-year-old requesting an abortion (row 6) — decision not swayed",
        b: "The 15-year-old wanting to raise her child (row 7) — retains the right to decide about the child",
        whyConfused:
          "Two pregnant minors with pressing adults, printed four lines apart; both answers protect the adolescent's decision-making",
        keyDifference:
          "WHAT is being decided: the 17-year-old's row is about terminating her own pregnancy (“should not sway the patient’s decision for, or against, an elective abortion — regardless of patient’s age or fetal condition”); the 15-year-old's row is about the CHILD's future (“The patient retains the right to make decisions regarding the child, even if the patient’s parents disagree”), with patient-parent discussion encouraged",
        clue:
          "Abortion decision → don't sway, discuss options, refer to abortion care. Child-rearing decision → patient's right, practical information, encourage the family discussion.",
      },
      {
        a: "Therapeutic privilege — withhold only if the patient “might seriously harm self or others if informed” (row 5)",
        b: "Ordinary family confidentiality — “Avoid discussing issues with relatives without the patient’s permission” (row 4)",
        whyConfused:
          "Both rows involve a family member seeking control of medical information, and both correct answers begin with the patient's claim on the information",
        keyDifference:
          "Row 4 is about REQUESTS FOR information (the answer: the patient's permission gates it); row 5 is about REQUESTS TO CONCEAL (the answer: explore the family's reasons, promise non-withholding if the patient wants to know, and reserve therapeutic privilege for its narrow serious-harm trigger)",
        clue:
          "Family asking TO KNOW → patient's permission. Family asking TO HIDE → explore + patient's wish + privilege only at serious harm.",
      },
      {
        a: "Intimate partner violence — “Do not necessarily pressure patient to leave a partner or disclose the incident to the authorities (unless required by state law)” (row 17)",
        b: "Abuse of a dependent patient and the impaired colleague — report (rows 19, 24)",
        whyConfused:
          "Three safety rows, three violent or dangerous situations; the reflexive answer to all three is “report to authorities”",
        keyDifference:
          "WHO is at risk and WHAT the duty is: the IPV patient is a competent adult — the response is safety assessment and an emergency plan without pressure; the dependent patient's suspected abuse and the impaired colleague carry explicit duties — “required by law to report any reasonable suspicion of abuse, neglect, or endangerment” and “an ethical and usually a legal obligation to report impaired colleagues”",
        clue:
          "Competent adult victim → ask, plan, don't pressure. Dependent patient or impaired physician → report.",
      },
    ],
    pivots: [
      {
        lookAlike: "A “most appropriate response” option list where every option sounds kind",
        differentiator:
          "The grammar separates them: only the correct option acknowledges obstacles, validates emotions, and keeps the dialogue open",
        correctPath:
          "Eliminate the directive option (tells the patient what to do), the coercive option (threatens discharge or referral for nonadherence), the dismissive option (minimizes the concern), and the falsely reassuring option (“You still look good”) — what remains is the open-ended, empathetic exploration: “What concerns you most about...?”",
      },
      {
        lookAlike: "Any stem where a family member speaks for the patient",
        differentiator:
          "The patient's own wishes control information and decisions; family members hold requests, not authority",
        correctPath:
          "Prognosis questions from relatives → no discussion without the patient's permission. Requests to conceal → explore the reasons (incl. cultural), promise non-withholding if the patient wants to know, therapeutic privilege only at serious-harm-to-self-or-others. Parents vs a pregnant minor → the patient retains the right to make decisions regarding the child. Family vs brain death → the definition stands (spinal arc reflex), and futility goes to the ethics board.",
      },
      {
        lookAlike: "A safety-flavored stem (suicide, impairment, abuse, IPV, error) — report, hospitalize, or neither?",
        differentiator:
          "The override thresholds: safety, the minor line, and the legal duties — nothing else overrides",
        correctPath:
          "Actively suicidal with a plan → voluntary admission offered, involuntary if needed. Impaired colleague → report. Reasonable suspicion of abuse of a dependent patient → report (and interview the patient alone). IPV in a competent adult → safety plan without pressure to leave or disclose (unless state law requires). Error → disclose regardless of outcome. If no threshold fires, return to the grammar: explore, inform, refer.",
      },
    ],
    miniCase: {
      vignette:
        "A 15-year-old girl presents for prenatal care at 22 weeks' gestation. She tells you she intends to leave school and raise the baby with her aunt's help. Her parents, who accompany her, take you aside: they believe she is too young, and they want you to tell her to place the baby for adoption. The patient is alert, oriented, and articulate about her plans. When you return to the room, both the patient and her parents look to you to settle the question.",
      question:
        "Which of the following is the most appropriate response to this family?",
      options: [
        {
          label: "A",
          text:
            "Tell the family that the patient retains the right to make decisions regarding the child, provide her practical information about caring for a baby, and encourage discussion between the patient and her parents to reach the best decision",
          correct: true,
          why:
            "CORRECT — the printed row 7 response: “The patient retains the right to make decisions regarding the child, even if the patient’s parents disagree. Provide information to the teenager about the practical aspects of caring for a baby. Discuss options for terminating the pregnancy, if requested. Encourage discussion between the patient and parents to reach the best decision.” The grammar is intact (information, not directive; family included, not overruled), and autonomy governs — no override fires.",
        },
        {
          label: "B",
          text:
            "Honor the parents' request and advise the patient that as a minor she must follow her parents' decision, then arrange adoption counseling",
          why:
            "TEMPTING but wrong — it inverts the printed rule: the PATIENT, not her parents, “retains the right to make decisions regarding the child.” Parental authority over a minor's own medical care does not extend to commandeering the decision about her child's future; the parents' role in the printed response is the encouraged discussion, not the deciding vote.",
        },
        {
          label: "C",
          text:
            "Tell the patient that because she is a minor, the physician will make the final decision in the child's best interest, and defer the question until after delivery",
          why:
            "WRONG on two counts — the physician does not decide for the patient (the row assigns the right to HER), and deferral abandons the printed tasks: practical information about caring for a baby, termination options if requested, and patient-parent discussion now. It also fails the grammar: it is directive rather than open-ended.",
        },
        {
          label: "D",
          text:
            "Refer the family to another physician who specializes in adolescent medicine, since the parents and patient disagree",
          why:
            "TEMPTING but wrong — referral is the remedy the table reserves for the PHYSICIAN's own limits (row 22: “explain to the patient that you do not perform the procedure but offer to refer to another physician”), not for family disagreement; the nonadherence row prints the prohibition explicitly (“Do not... refer the patient to another physician”). Disagreement is met with the encouraged discussion, not with handoff.",
        },
        {
          label: "E",
          text:
            "Discuss only the option of terminating the pregnancy, since she has not yet delivered and the parents prefer adoption",
          why:
            "WRONG — it sways. The termination-options sentence is conditional and patient-initiated (“Discuss options for terminating the pregnancy, if requested”), and the 17-year-old row's rule generalizes the posture: “a physician should not sway the patient’s decision for, or against” the options. Presenting one option at the parents' preference violates both autonomy and the open-ended grammar.",
        },
      ],
      reasoning:
        "The question tests the minors cluster's second row: who decides about the CHILD. The printed answer assigns the right to the patient — “even if the patient’s parents disagree” — and gives the physician three tasks: practical information, termination options if requested, and encouraged family discussion toward “the best decision.” Option B flips the right to the parents; option C flips it to the physician; option D outsources the conflict by referral (the table's remedy for conscience, not for disagreement); option E sways toward one option, which the adjacent 17-year-old row forbids “for, or against.” Only option A holds the grammar — inform, don't sway, keep the family in the conversation — while protecting the adolescent's decision-making, and no override (safety, minor-emergency, statutory duty) fires to change the calculation.",
    },
  },
  mnemonics: [
    {
      code: "ACKNOWLEDGE, VALIDATE, ASK",
      meaning:
        "A KYP ORIGINAL — the printed lead-in's three moves compressed: ACKNOWLEDGE obstacles (“I understand this plan may be difficult...”), VALIDATE emotions (“It’s understandable to feel frustrated...”), and ASK open-ended questions (“What concerns you most about...?”). Every appropriate response in the 25-row table is built from these three moves.",
      memorizes:
        "The response grammar that generates all 25 printed appropriate responses — and eliminates the directive, coercive, dismissive, and falsely reassuring distractors",
      whenToUse:
        "Any “most appropriate response” question: check the option against the three moves before anything else; the correct answer always keeps the dialogue open.",
      clinical:
        "The moves double as the SPIKES family's tools (the sibling topic's Emotions and Strategy steps) — acknowledgment and validation are the same skills whether the news is bad or the patient is angry (KYP context).",
    },
    {
      code: "EXPLORE, DON’T COERCE",
      meaning:
        "A KYP ORIGINAL — the adherence-barriers cluster's principle: row 1's “Determine whether there are financial, logistical, or other obstacles” and “Do not coerce the patient into adhering or refer the patient to another physician”; row 3's “Determine what factors are involved” (written instructions, teach-back method, simplified regimens); row 18's “Explore any underlying reasons... in a supportive, nonjudgmental manner.”",
      memorizes:
        "The response shape for nonadherence, medication difficulty, and alternative-medicine interest — obstacles are diagnosed, behavior is never forced",
      whenToUse:
        "Any stem about a patient not following the plan, struggling with medications, or wanting holistic treatment; also the anchor for the explore-vs-refer trap (referral is forbidden here, mandated for conscience).",
      clinical:
        "The teach-back method (asking the patient to restate the plan in their own words) is the printed remedy when comprehension or memory is the barrier — a usability test for the regimen, not a lecture (KYP gloss).",
    },
    {
      code: "SAFETY, MINORS, REPORTS",
      meaning:
        "A KYP ORIGINAL — the three override thresholds where preference yields: SAFETY (the actively suicidal patient “may be hospitalized involuntarily if needed”; the impaired colleague is reported for “a potential risk to patient safety”), MINORS (emergent care “not for a minor based solely on faith” — transfuse the daughter; but routine vaccinations need the parent's consent), REPORTS (impaired colleagues; “any reasonable suspicion of abuse, neglect, or endangerment”; errors disclosed “regardless of the outcome”).",
      memorizes:
        "The complete list of forces that beat patient or family preference in the 25-row table",
      whenToUse:
        "The fourth question of the decision path: if none of the three fires, the answer is explore/inform/refer — never coercion.",
      clinical:
        "The near-misses are included by contrast (KYP): therapeutic privilege fires only at serious harm to self or others; IPV disclosure is not pressed “unless required by state law”; futility goes to the ethics board, not unilateral action.",
    },
    {
      code: "FOUR PRINCIPLES, FOUR LENSES",
      meaning:
        "A KYP ORIGINAL — the lead-in's closing sentence as a checking grid: the FOUR PRINCIPLES (autonomy — don't sway the 17-year-old; beneficence — financial assistance programs; nonmaleficence — avoid unnecessary procedures, no false reassurance; justice — discuss all options even uninsured) seen through the FOUR LENSES (patient — whose information it is; family — rows 4, 5, 7, 20; culture — the nondisclosure row's “possible cultural factors,” holistic medicine, Jehovah's Witnesses; healthcare team — the colleague, staff, and industry rows).",
      memorizes:
        "The principle × lens grid the printed lead-in says every response should reflect and consider",
      whenToUse:
        "When two options both pass the grammar — run the grid: which principle does each serve, and whose point of view does each miss?",
      clinical:
        "The four principles are the core-ethical-principles topic's own list, applied here under pressure; the four lenses are the cultural-sensitivity layer the exam increasingly folds into communication stems (KYP context).",
    },
  ],
  rapidReview: {
    s30: [
      "Nonadherence → determine financial/logistical/other obstacles; do not coerce or refer; schedule regular follow-up (medication difficulty → written instructions, teach-back, simplified regimens)",
      "Family asks about prognosis → avoid discussing with relatives without the patient's permission; family asks you to hide poor results → explore why (incl. cultural factors), information not withheld if the patient wants it, therapeutic privilege only if the patient might seriously harm self or others",
      "17-year-old requesting abortion → physician should not sway the decision (regardless of age or fetal condition); discuss options, refer to abortion care",
      "15-year-old wanting to raise her child → the patient retains the right to make decisions regarding the child even if the parents disagree; practical information; encourage patient-parent discussion",
      "Physician-assisted dying → most states prohibit; medically appropriate analgesics permitted even if they potentially shorten life",
      "Suicidal patient → assess seriousness; voluntary admission suggested; involuntary hospitalization if actively suicidal with a plan; wrong-patient error → disclose regardless of outcome",
      "IPV → ask if safe, devise emergency plan, open-ended questions, summarize back; do not pressure to leave or disclose (unless state law requires); impaired colleague → ethical and usually legal duty to report",
      "Brain death → equivalent to death; movements are spinal arc reflex; ethics board for futility · JW emergency → transfuse daughter, not mother (proxy refusal stands for the known-preference adult, not for a minor based solely on faith) · suspected abuse → required by law to report any reasonable suspicion · vaccines → not without parental consent · sponsorship → reject (AMA exceptions exist) · against your beliefs → unbiased information + offer to refer",
    ],
    m3: [
      "ACKNOWLEDGE, VALIDATE, ASK — the response grammar: “I understand this plan may be difficult...” / “It's understandable to feel frustrated...” / “What concerns you most about...?” (KYP)",
      "EXPLORE, DON'T COERCE — adherence barriers: obstacles first, never force, never refer away (KYP)",
      "SAFETY, MINORS, REPORTS — the three overrides of preference (KYP)",
      "FOUR PRINCIPLES, FOUR LENSES — A-B-N-J × patient, family, culture, team (KYP; the lead-in's own lists)",
    ],
    m10: [
      "Therapeutic privilege's trigger is printed precisely: “if you believe the patient might seriously harm self or others if informed” — a family member's “unable to handle it” request is NOT the trigger; explore the reasons (including cultural factors) instead",
      "The two emergency edges of the minors line: TRANSFUSE the bleeding minor whose proxy refuses on faith; WITHHOLD routine vaccinations without the parent's consent — emergent protection vs routine consent",
      "The waiting-room row's printed prohibitions: “do not take a patient's anger personally” and “Stay away from efforts to explain the delay” — thanking and apologizing are in; explaining is out",
      "The AMA gift exceptions (printed): gifts directly benefitting patients; medical-education funding for students, residents, fellows; independent-criteria grants; funds distributed without attribution to sponsors — the sponsorship itself is still rejected",
    ],
  },
  recall: [
    {
      q: "A patient does not follow the medical plan. What three things does the printed response direct, and what two does it forbid?",
      a: "Determine whether there are financial, logistical, or other obstacles preventing adherence; do not coerce the patient into adhering or refer the patient to another physician; schedule regular follow-up visits to track patient progress. (Forbidden: coercion and referral.)",
    },
    {
      q: "A family member asks you not to disclose poor-prognosis test results because the patient will be “unable to handle it.” What are the three parts of the printed response, and what is the ONLY trigger for therapeutic privilege?",
      a: "Explore why the family member believes disclosure would be detrimental, including possible cultural factors; explain that if the patient would like to know information concerning care, it will not be withheld; therapeutic privilege may be invoked only if you believe the patient might seriously harm self or others if informed.",
    },
    {
      q: "How do the 17-year-old and 15-year-old pregnancy rows differ in who decides, and what is the physician's role in each?",
      a: "17-year-old requesting abortion: the physician “should not sway the patient's decision for, or against, an elective abortion (regardless of patient's age or fetal condition)” — discuss options and refer to abortion care if needed. 15-year-old wanting to raise the child: “The patient retains the right to make decisions regarding the child, even if the patient's parents disagree” — provide practical information about caring for a baby, discuss termination options if requested, and encourage discussion between patient and parents.",
    },
    {
      q: "A terminally ill patient requests physician-assisted dying. What does the printed response permit, and under what condition?",
      a: "The overwhelming majority of states prohibit most forms of physician-assisted dying; physicians may, however, prescribe medically appropriate analgesics even if they potentially shorten the patient's life.",
    },
    {
      q: "A family cites a brain-dead patient's movements when touched as a reason to continue life support. What is the movement, and where does the case go?",
      a: "The movement is due to spinal arc reflex and is not voluntary; gently explain that there is no chance of recovery and that brain death is equivalent to death, and bring the case to the appropriate ethics board regarding futility of care and withdrawal of life support.",
    },
    {
      q: "Mother and 15-year-old daughter, both unresponsive and bleeding heavily; the father (Jehovah's Witness) refuses transfusion for both. Who is transfused, and why?",
      a: "Transfuse daughter, but do not transfuse mother — emergent care can be refused by the healthcare proxy for an adult, particularly when patient preferences are known or reasonably inferred, but not for a minor based solely on faith.",
    },
    {
      q: "What four steps does the printed intimate-partner-violence response take, and what does it explicitly NOT do?",
      a: "Ask if the patient is safe and help devise an emergency plan if there isn't one; ask direct, open-ended questions about exam findings and summarize the patient's answers back to them; ask if the patient has any questions. It does NOT necessarily pressure the patient to leave a partner or disclose the incident to the authorities (unless required by state law).",
    },
    {
      q: "Name the three reporting/disclosure duties the table prints, each with its exact obligation.",
      a: "Impaired colleague: an ethical and usually a legal obligation to report, so they can cease patient care and receive appropriate assistance (seek guidance — procedures and law vary by institution and state). Suspected abuse of a dependent patient: physicians are required by law to report any reasonable suspicion of abuse, neglect, or endangerment (document, interview the patient alone if possible, provide care, contact child or adult protective services, and inform the caretaker of the obligation). Wrong-patient error: regardless of the outcome, a physician is ethically obligated to inform a patient that a mistake has been made.",
    },
  ],
  related: [
    {
      title: "Core ethical principles — the four-principle engine",
      note:
        "The lead-in names autonomy, beneficence, nonmaleficence, and justice as the checklist every response should reflect; the core-ethical-principles note defines each principle and shows how they collide — the same collisions this table's 25 situations dramatize (a 15-year-old's autonomy vs her parents' judgment, a family's request vs the patient's information rights).",
      topicId: "core-ethical-principles",
    },
    {
      title: "Informed consent — the consent machinery behind the consent rows",
      note:
        "The unnecessary-procedure row, the conscience row, and the vaccine row all run on informed-consent machinery: accurate and unbiased information, the patient's (or parent's) decision, and referral when the physician cannot provide the service — the informed-consent note is the full doctrine this table applies under pressure.",
      topicId: "informed-consent",
    },
    {
      title: "Surrogates and confidentiality — who speaks for whom",
      note:
        "The prognosis row, the nondisclosure row, and the Jehovah's Witness emergency are surrogate-and-confidentiality questions in situ: what relatives may be told (nothing without the patient's permission), what a proxy may refuse (emergent care for a known-preference adult — but not for a minor based solely on faith); the surrogates-confidentiality note carries the full rules this table exercises.",
      topicId: "surrogates-confidentiality",
    },
    {
      title: "Interpreters and breaking bad news — the sibling Communication Skills page",
      note:
        "The immediately preceding pages of the same subsection (book 271–273) carry the interpreter rules and the SPIKES protocol for delivering bad news — the same patient-centered, open-ended, empathetic grammar this table's lead-in states, taught as a six-station protocol. The bereaved-sibling row (a direct, concrete description of death, no euphemisms) is SPIKES's Knowledge and Emotion steps at the pediatric edge. (Produced in parallel in this same batch — referenced by design.)",
      topicId: "interpreters-bad-news",
    },
  ],
  crossLinks: [
    {
      subject: "Psychiatry — suicide risk assessment and involuntary commitment",
      connection:
        "The suicidal row's graduated response (assess seriousness; voluntary admission suggested; involuntary if actively suicidal with a plan) is the ethics face of the psychiatry competence's commitment criteria — imminent danger to self is the civil-commitment standard, and the table's “with a plan” language marks the active-ideation threshold the psychiatry material grades (ideation vs plan vs intent).",
    },
    {
      subject: "Pediatrics — child development and the concept of death",
      connection:
        "The bereaved-7-year-old row prints its own developmental anchor: “At ages 5-7, children begin to understand that death is permanent, all life functions end completely at death, and everything that is alive eventually dies” — the concrete-operational understanding that dictates a direct, concrete description (no euphemisms, no “went to sleep”), the same developmental logic pediatrics applies to explaining illness and procedures to school-age children.",
    },
    {
      subject: "Behavioral science and preventive medicine — intimate partner violence screening",
      connection:
        "The IPV row's protocol (ask if the patient is safe, devise an emergency plan, direct open-ended questions, summarize answers back, ask if the patient has any questions, and do not pressure to leave or disclose) is the screening-and-safety-planning standard of preventive medicine behavioral counseling — including the validated insight that pressuring a victim to leave can escalate danger, which is why the printed response withholds the pressure.",
    },
    {
      subject: "Health systems and quality improvement — medical error and disclosure",
      connection:
        "The wrong-patient row (“Regardless of the outcome, a physician is ethically obligated to inform a patient that a mistake has been made”) is the communication face of patient-safety practice: disclosure of adverse events is a systems duty, not a judgment call conditioned on harm — and the sponsorship row's conflict-of-interest rules (reject; AMA exceptions) are the physician-side integrity policy of the same professional-conduct layer.",
    },
  ],
};
