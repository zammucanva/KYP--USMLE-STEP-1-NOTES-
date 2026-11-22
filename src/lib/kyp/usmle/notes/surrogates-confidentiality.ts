import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 20. Source: FULL pdf page 292 / book 270
// (Part 1), the THIRD page under the ETHICS banner and its LAST (pdf 290 opens
// the subsection; pdf 293 opens COMMUNICATION SKILLS with patient-centered
// interviewing — the boundary topics on either side). The topic owns the WHOLE
// page, which carries FOUR blocks in the label-column format (blue bold
// headings at left, body text at right, thin horizontal rules between blocks):
// (1) "Ventilator-assisted life support" — discussions ideally occur before
// ventilator support is necessary; preferences may be absent when the
// intervention is needed to survive; surrogate decision-makers (patient
// identified or legally appointed) focus on the prognosis AND the believed
// wishes of the patient; the OVERRIDE RULE ("If surrogates indicate patient
// would not have wanted to receive life support with ventilation → withhold or
// withdraw life support regardless of what the surrogate prefers."); and the
// support wrap (palliative care, chaplain services, primary care physician,
// emotional support). (2) "Surrogate decision-maker" — capacity lost + no
// advance directive → individuals who know the patient determine what the
// patient would have done; priority: spouse → adult children → parents → adult
// siblings → other relatives, anchored by First Aid's OWN red mnemonic
// "(the spouse chips in)". (3) "Confidentiality" — respects privacy and
// autonomy; incapacitated/emergent disclosure to family and friends guided by
// professional judgment of the patient's best interest; voluntary waiver (eg,
// insurance company request); THREE general principles for exceptions (serious
// and imminent harm; no alternative means to warn or protect; steps can
// prevent harm); the exceptions themselves anchored by First Aid's OWN red
// mnemonic "The physician's good judgment SAVED the day" — Suicidal/homicidal
// ideation, Abuse, duty to protect potential Victims (state-specific),
// Epilepsy and other impaired automobile drivers, Reportable Diseases (STIs,
// hepatitis, food poisoning; warn public officials; TB or Ebola may require
// involuntary treatment). (4) "Accepting gifts from patients" — a complex
// subject without definitive regulations; cards, baked goods, and inexpensive
// gifts in practice; accept-or-decline = individual assessment of whether the
// risk of harm outweighs the potential benefit; three decline rules (too
// large/valuable; could detrimentally affect patient care; emotional or
// financial stress for the patient); the decline script (thank the patient for
// a kind gift, politely indicate it must be declined, emphasize no influence
// on the physician-patient relationship). CENSUS (pdfimages): ZERO raster
// images on the page — pure text, four label-column blocks, the indd footer
// slug; every block is an ORIGINAL KYP ADAPTATION (text structures; no source
// artwork exists to redraw). VLM AVAILABLE this session (glm-4.6v at 120dpi,
// ONE full-page pass, staging-pubh20/vlm-census.txt), confirming: the four
// headings and their wraps; the red printing — "(the spouse chips in)" (VLM
// read the red bold spans as "spouse / children / siblings / spouse chips"
// within the chain, with black arrows) and "SAVED" in red bold plus the five
// bullets' initial capitals S-A-V-E-D in red; the ventilator override rule in
// plain roman text with a black arrow (not boxed, not italicized); small solid
// square bullets; the ETHICS banner prints ONCE (running header only — unlike
// the subsection opener on book 256 where it prints twice); NO margin notes,
// mnemonics in the margins, asterisk footnotes, images, or icons; footer slug
// "FAS1_2026_06-PubHealth.indd 270" + "12/16/25 12:46 PM". PRINTED-TEXT
// QUIRKS carried + documented: (1) "SEC TION II" header-space extraction
// artifact (known, carried as-is); (2) the block-2 heading hyphenates across
// its line wrap ("Surrogate decision- / maker") — the raw text layer MERGES it
// to "Surrogate decisionmaker"; the note's verbatim table carries the
// hyphenated print and the manifest evidence range preserves the raw merge
// (same class as book 256's "riskrelated" merge); (3) C1 control bytes
// (U+008E) print around the → arrows in the ventilator rule and the surrogate
// priority chain (known extraction artifact — stripped by the gen script's
// normalization; the arrows themselves are as printed); (4) a C1 byte
// (U+0083) precedes each ▘ square-bullet glyph in the raw layer; (5) the
// headings "Ventilator-assisted life / support" and "Accepting gifts from /
// patients" wrap across two lines (no hyphens); (6) "many are state specific"
// prints WITHOUT a hyphen, while "Duty to protect—state-specific laws" carries
// an em-dash — both as printed. ADJUDICATIONS (documented in the manifest
// too): (A) the block-2 heading's printed form is "Surrogate decision-maker"
// (hyphen confirmed by pdftotext -layout + the VLM pass); the task brief's
// block descriptions matched the print exactly — no corrections needed; (B)
// the VLM's per-word red read of the priority chain is recorded as VLM detail,
// while the mnemonic proper is the parenthetical "(the spouse chips in)",
// carried VERBATIM and ATTRIBUTED everywhere it appears; (C) the SAVED
// lettering is First Aid's OWN (red capitals in the lead-in + red initial
// capitals in the five bullets), never claimed as KYP's. PROVENANCE SPLIT:
// verbatim = the four blocks' complete text, the priority chain, the three
// general principles, both mnemonics; FA-own = the red mnemonic printing, the
// SAVED initial-capitals scheme, the printed examples (STIs, hepatitis, food
// poisoning, TB, Ebola); KYP-original = the four-question vignette protocol,
// "SERIOUS, STUCK, STOPPABLE" (the three general principles), "WISHES, NOT
// WANTS" (the ventilator override), the ladder-vs-directive routing, the
// keep-vs-break confidentiality decision line, the exam layer — every teaching
// generalization beyond the printed page is flagged as KYP context.
// DrugCards: none — the page prints ethics rules, not drugs (folded by
// absence, documented in the manifest). The previous page (pdf 291 / book
// 269) carries informed consent, minors, and advance directives (the
// informed-consent topic); the next (pdf 293 / book 271) opens COMMUNICATION
// SKILLS — patient-centered interviewing (a separate topic).

export const surrogatesConfidentiality: KypUsMLENote = {
  id: "surrogates-confidentiality",
  title: "Surrogate Decision-Makers, Confidentiality, and Gifts",
  subtitle:
    "The last page of the Ethics subsection answers three questions the exam asks in vignette clothing. First: who speaks for a patient who cannot speak — and what do they say? When decision-making capacity is lost and no advance directive exists, surrogates who know the patient must determine what the patient would have done, in a fixed priority order anchored by First Aid’s own red mnemonic “the spouse chips in”: spouse → adult children → parents → adult siblings → other relatives. On the ventilator, the page prints its hardest rule: if surrogates indicate the patient would not have wanted life support with ventilation, withhold or withdraw it regardless of what the surrogate prefers — the patient's believed wishes outrank the surrogate's choice — and then wrap the family in palliative care, chaplain services, the primary care physician, and emotional support. Second: what may a physician reveal? Confidentiality respects patient privacy and autonomy, may be voluntarily waived (eg, an insurance company request), and yields in emergencies to professional judgment of the patient's best interest — but it must yield only when the harm is serious and imminent, no alternative means to warn or protect exists, and steps can prevent it, as First Aid’s own red mnemonic “The physician’s good judgment SAVED the day” catalogs: Suicidal/homicidal ideation, Abuse, duty to protect potential Victims, Epilepsy and other impaired automobile drivers, and Reportable Diseases — with TB or Ebola even permitting involuntary treatment. Third: may the physician keep the fruit basket? Cards, baked goods, and inexpensive gifts pass an individual risk-of-harm-versus-benefit assessment; inappropriately large or valuable gifts, gifts that could detrimentally affect patient care, and gifts that stress the patient emotionally or financially are declined — with thanks, politely, and the assurance that the relationship is unchanged.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Ethics",
  pilotCategory:
    "Public Health Sciences — Ethics: the ventilator-assisted life support override rule and its palliative wrap; the surrogate decision-maker priority chain with First Aid’s own mnemonic “the spouse chips in” (carried attributed); confidentiality's default, waiver, three general exception principles, and the SAVED exceptions (First Aid's own mnemonic, carried attributed) including the reportable-disease warn mechanics and TB/Ebola involuntary treatment; and the accept-or-decline assessment for gifts from patients with the decline script.",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 270–270 (Ethics: Ventilator-assisted life support; Surrogate decision-maker; Confidentiality; Accepting gifts from patients)",
  tags: [
    "surrogate decision-maker",
    "ventilator-assisted life support",
    "withdraw life support",
    "withhold life support",
    "palliative care",
    "advance directives",
    "decision-making capacity",
    "the spouse chips in",
    "surrogate priority",
    "confidentiality",
    "exceptions to confidentiality",
    "SAVED",
    "duty to protect",
    "reportable diseases",
    "impaired automobile drivers",
    "epilepsy",
    "involuntary treatment",
    "accepting gifts from patients",
    "patient privacy",
    "autonomy",
    "ethics",
    "public health sciences",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — “Ventilator-assisted life support”: “Ideally, discussions with patients occur before ventilator support is necessary. However, information about patient preferences may be absent at the time patients require this intervention to survive. Medical decision-making frequently relies on surrogate decision-makers (patient identified or legally appointed) when discussing the continuation or withdrawal of ventilatory support, focusing on both the prognosis of the condition and the believed wishes of the patient.” The printed override rule: “If surrogates indicate patient would not have wanted to receive life support with ventilation → withhold or withdraw life support regardless of what the surrogate prefers.” And the support wrap: “If the decision is made to withhold or withdraw life support, involve palliative care, chaplain services, and the primary care physician in medical discussions with the family and provide emotional support.” BLOCK 2 — “Surrogate decision-maker”: “If a patient loses decision-making capacity and has not prepared an advance directive, individuals (surrogates) who know the patient must determine what the patient would have done. Priority of surrogates: spouse → adult children → parents → adult siblings → other relatives (the spouse chips in).” BLOCK 3 — “Confidentiality”: “Confidentiality respects patient privacy and autonomy. If the patient is incapacitated or the situation is emergent, disclosing information to family and friends should be guided by professional judgment of patient’s best interest. The patient may voluntarily waive the right to confidentiality (eg, insurance company request).” General principles for exceptions: “Potential physical harm to self or others is serious and imminent”; “Alternative means to warn or protect those at risk is not possible”; “Steps can be taken to prevent harm.” The printed examples — “Examples of exceptions to patient confidentiality (many are state specific) include the following (“The physician’s good judgment SAVED the day”)”: “Patients with active Suicidal/homicidal ideation”; “Abuse (children, older adults, and/or prisoners)”; “Duty to protect—state-specific laws that sometimes allow physician to inform or somehow protect potential Victim from harm”; “Patients with Epilepsy and other impaired automobile drivers”; “Reportable Diseases (eg, STIs, hepatitis, food poisoning); physicians may have a duty to warn public officials, who will then notify people at risk. Dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment.” BLOCK 4 — “Accepting gifts from patients”: “A complex subject without definitive regulations. Some argue that the patient-physician relationship is strengthened through accepting a gift from a patient, while others argue that negative consequences outweigh the benefits of accepting any gift.” In practice “patients often present items such as cards, baked goods, and inexpensive gifts”; the accept-or-decline decision “is based on an individual assessment of whether or not the risk of harm outweighs the potential benefit.” Three decline rules: not “inappropriately large or valuable”; not if the gift “could detrimentally affect patient care”; not if it “may cause emotional or financial stress for the patient.” The script: thank the patient for offering a kind gift, politely indicate that it must be declined, and emphasize “that the incident does not influence the physician-patient relationship in any way.”",
    why:
      "This page is where the Ethics subsection's two earlier pages — core principles and informed consent/advance directives — meet their edge cases. The consent page assumes a patient who can consent; this page asks what happens when that assumption fails on a ventilator: discussions ideally happen before, but “information about patient preferences may be absent at the time patients require this intervention to survive,” so decision-making falls to surrogates guided by two inputs — “the prognosis of the condition and the believed wishes of the patient.” The override rule is the page's ethical center: substituted judgment (what the patient would have wanted) beats the surrogate's own preference, which is why the printed sentence ends “regardless of what the surrogate prefers.” The surrogate hierarchy exists for the same gap when no advance directive was prepared: someone must reconstruct the patient's choice, and the law supplies the order — spouse first, then adult children, parents, adult siblings, other relatives — First Aid's own red mnemonic “the spouse chips in.” Confidentiality then flips the direction of information flow: the core principles page made autonomy the default, and confidentiality is autonomy's information branch (privacy), waivable by the patient (insurance company request) and bendable in emergencies by professional judgment of the patient's best interest. But the page fences the exceptions with three general principles — serious and imminent harm, no alternative means to warn or protect, preventable by steps taken — and then names the five SAVED exceptions, each a statutory duty (many state specific) rather than a judgment call, with the warn mechanics spelled out (physicians warn public officials, who notify people at risk) and the two diseases severe enough to permit involuntary treatment (TB, Ebola). The gifts block closes the page with the one ethics area the book itself calls “a complex subject without definitive regulations” — and resolves it into the same harm-versus-benefit grammar used everywhere else in medicine.",
    keyIdea:
      "Route every vignette on this page through three gates. GATE 1 — WHO DECIDES? Capacity present → the patient (this page does not apply). Capacity lost + advance directive prepared → the directive governs (the previous page's material). Capacity lost + no directive → the surrogate ladder: spouse → adult children → parents → adult siblings → other relatives (“the spouse chips in” — First Aid's own). GATE 2 — WHAT WOULD THE PATIENT HAVE WANTED? On ventilatory support, the surrogate weighs the prognosis of the condition AND the believed wishes of the patient — and if the patient would not have wanted life support with ventilation, withhold or withdraw it “regardless of what the surrogate prefers” (WISHES, NOT WANTS — KYP), then involve palliative care, chaplain services, and the primary care physician and provide emotional support. GATE 3 — MAY THE INFORMATION LEAVE THE ROOM? Default: confidentiality respects privacy and autonomy. Permitted disclosure without breach: the patient waives it (eg, insurance company request), or the patient is incapacitated/the situation emergent and professional judgment of the patient's best interest guides what family and friends learn. Required breach — only through the three general principles (harm serious and imminent; no alternative means to warn or protect; steps can prevent harm — SERIOUS, STUCK, STOPPABLE, KYP): “The physician's good judgment SAVED the day” (First Aid's own) — active Suicidal/homicidal ideation; Abuse of children, older adults, and/or prisoners; Duty to protect a potential Victim (state-specific); Epilepsy and other impaired automobile drivers; Reportable Diseases (STIs, hepatitis, food poisoning — warn public officials, who notify people at risk; TB or Ebola may require involuntary treatment). And for the gift: one assessment — does the risk of harm outweigh the potential benefit? Cards, baked goods, and inexpensive gifts usually pass; too large or valuable, care-affecting, or patient-stressing gifts are declined with thanks and reassurance.",
  },
  mechanisms: [
    {
      id: "ventilator-surrogate-pathway",
      title:
        "The preference gap: how an intubated patient's believed wishes travel through a surrogate and override what the surrogate prefers",
      context:
        "The printed Ventilator-assisted life support block (book 270): the ventilator decision pathway",
      flow: {
        nodes: [
          {
            id: "gap",
            label: "THE PREFERENCE GAP — discussions ideally precede the ventilator",
            sublabel:
              "Input — the printed ideal: “Ideally, discussions with patients occur before ventilator support is necessary.” The printed reality: “information about patient preferences may be absent at the time patients require this intervention to survive.” The gap between the two is where every vignette on this block begins.",
            variant: "input",
          },
          {
            id: "surrogate",
            label: "FILL THE GAP WITH A SURROGATE — patient identified or legally appointed",
            sublabel:
              "Process — “Medical decision-making frequently relies on surrogate decision-makers (patient identified or legally appointed) when discussing the continuation or withdrawal of ventilatory support.” The surrogate's lens is printed as two inputs at once: “focusing on both the prognosis of the condition and the believed wishes of the patient” — the medical facts AND the patient's own values.",
            variant: "process",
          },
          {
            id: "override",
            label: "THE OVERRIDE RULE — believed wishes beat surrogate preference",
            sublabel:
              "Process — the page's one-sentence law: “If surrogates indicate patient would not have wanted to receive life support with ventilation → withhold or withdraw life support regardless of what the surrogate prefers.” The direction of the override is the exam point: the surrogate reports the patient's wishes; the surrogate's own preference does not count when the two diverge (KYP framing: WISHES, NOT WANTS).",
            variant: "process",
          },
          {
            id: "wrap",
            label: "THE SUPPORT WRAP — palliative care, chaplain, primary care physician",
            sublabel:
              "Process — “If the decision is made to withhold or withdraw life support, involve palliative care, chaplain services, and the primary care physician in medical discussions with the family and provide emotional support.” Withdrawal is not a solitary act: the printed sentence names the three services to involve and the emotional support to give.",
            variant: "process",
          },
          {
            id: "out",
            label: "THE RULE — substituted judgment governs the ventilator",
            sublabel:
              "Output — the whole block compresses to: ventilator decisions belong to the patient's voice, reconstructed by a surrogate from prognosis + believed wishes; when that voice says no, life support is withheld or withdrawn regardless of the surrogate's preference, and the family is wrapped in palliative care, chaplain services, the primary care physician, and emotional support.",
            variant: "output",
          },
        ],
        edges: [
          { from: "gap", to: "surrogate", label: "preferences absent →" },
          { from: "surrogate", to: "override", label: "prognosis + believed wishes →" },
          { from: "override", to: "wrap", label: "withhold/withdraw decided →" },
          { from: "wrap", to: "out", label: "family supported →" },
        ],
      },
    },
    {
      id: "saved-exceptions-gate",
      title:
        "Privacy's decision line: the default, the waiver, the three general principles, and the five SAVED exceptions",
      context:
        "The printed Confidentiality block (book 270): the default-to-breach pathway",
      flow: {
        nodes: [
          {
            id: "default",
            label: "THE DEFAULT — confidentiality respects privacy and autonomy",
            sublabel:
              "Input — “Confidentiality respects patient privacy and autonomy.” Two printed soft exits that are NOT breaches: the patient may “voluntarily waive the right to confidentiality (eg, insurance company request),” and “if the patient is incapacitated or the situation is emergent, disclosing information to family and friends should be guided by professional judgment of patient’s best interest.”",
            variant: "input",
          },
          {
            id: "gates",
            label: "THREE GATES — serious and imminent, no alternative, preventable",
            sublabel:
              "Process — the general principles for exceptions to confidentiality, all three printed: “Potential physical harm to self or others is serious and imminent”; “Alternative means to warn or protect those at risk is not possible”; “Steps can be taken to prevent harm.” (KYP: SERIOUS, STUCK, STOPPABLE.) An exception that fails any gate is not an exception.",
            variant: "process",
          },
          {
            id: "saved",
            label: "THE FIVE EXCEPTIONS — “The physician’s good judgment SAVED the day”",
            sublabel:
              "Process — First Aid's OWN red mnemonic, printed with SAVED in red capitals and the initial capitals S-A-V-E-D picked out in red in the five bullets: active “Suicidal/homicidal ideation”; “Abuse (children, older adults, and/or prisoners)”; “Duty to protect—state-specific laws that sometimes allow physician to inform or somehow protect potential Victim from harm”; “Epilepsy and other impaired automobile drivers”; “Reportable Diseases (eg, STIs, hepatitis, food poisoning)” — many state specific.",
            variant: "process",
          },
          {
            id: "mechanics",
            label: "THE WARN MECHANICS — who is told, and the involuntary-treatment edge",
            sublabel:
              "Process — for reportable diseases “physicians may have a duty to warn public officials, who will then notify people at risk” (the physician warns the officials; the officials notify the people). And the printed edge: “Dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment” — the one printed sentence where the exception reaches past disclosure into treatment.",
            variant: "process",
          },
          {
            id: "out",
            label: "THE RULE — narrow, gated, state-specific exceptions; otherwise privacy holds",
            sublabel:
              "Output — confidentiality bends only for the patient (waiver), for the patient's best interest (incapacitated/emergent, professional judgment), or for preventable serious imminent harm through the three gates — and the five SAVED categories are the printed roster of where that last path actually leads, with the public-official warn route and the TB/Ebola involuntary-treatment extension at the far end.",
            variant: "output",
          },
        ],
        edges: [
          { from: "default", to: "gates", label: "no waiver, no emergency →" },
          { from: "gates", to: "saved", label: "all three gates pass →" },
          { from: "saved", to: "mechanics", label: "duty triggered →" },
          { from: "mechanics", to: "out", label: "warn or treat →" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "confidentiality-map",
      title:
        "The surrogate ladder, the ventilator override, the SAVED exceptions, and the gifts panel (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 270's four blocks. ZONE A — the surrogate priority ladder: capacity lost + no advance directive → individuals who know the patient determine what the patient would have done, with the five-rung ladder spouse → adult children → parents → adult siblings → other relatives and First Aid's own red mnemonic “the spouse chips in” attributed. ZONE B — the ventilator decision rule strip: the preference gap → surrogate (patient identified or legally appointed) weighing prognosis + believed wishes → the override rule (withhold or withdraw regardless of what the surrogate prefers) → the support wrap (palliative care, chaplain services, primary care physician, emotional support). ZONE C — confidentiality: the default (privacy + autonomy, waiver, incapacitated/emergent judgment) → the three general principles as gate chips (serious and imminent; no alternative; preventable) → the SAVED exceptions as five lettered cards, “The physician's good judgment SAVED the day” attributed, with the warn-public-officials route and the TB/Ebola involuntary-treatment edge. ZONE D — the gifts decision panel: cards, baked goods, and inexpensive gifts → the individual risk-of-harm-vs-benefit assessment → the three decline rules → the decline script (thank, decline politely, reassure the relationship is unchanged).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 292 — the page is pure text in the label-column format (blue bold headings, body text, thin rules between blocks; VLM-read at 120dpi, staging-pubh20/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION: the ladder, rule strip, five cards, and decision panel are KYP's layout; every printed label, both mnemonics, and all three general principles are preserved from the print, and the four blocks are additionally carried verbatim in the note's table block. First Aid's two mnemonics — “the spouse chips in” and “The physician's good judgment SAVED the day” — print in RED in the book (VLM-confirmed) and are drawn attributed, never as KYP originals.",
    },
    {
      kind: "table",
      title:
        "Book 270 — the four printed blocks, carried verbatim (every printed word, PRINTED order)",
      intro:
        "The whole page in one table: four label-column headings and their bodies, from “Ventilator-assisted life support” through the gifts decline script. Printed quirks documented: the headings “Ventilator-assisted life / support” and “Accepting gifts from / patients” wrap across two lines (no hyphens); the block-2 heading hyphenates across its wrap (“Surrogate decision- / maker”) — the raw text layer merges it to “Surrogate decisionmaker,” and the hyphenated print is carried here (layout + VLM-confirmed); the bullets are small solid squares (raw text layer “\\u0083▘”); the arrows in the priority chain and the ventilator rule print black with C1 extraction bytes around them in the raw layer; First Aid's two mnemonics print in RED (“the spouse chips in” inside the chain's parenthesis; “SAVED” plus the five bullets' initial capitals).",
      columns: ["PRINTED ELEMENT", "AS PRINTED (VERBATIM)"],
      rows: [
        [
          "Heading (blue bold; wraps “Ventilator-assisted life / support”)",
          "Ventilator-assisted life support",
        ],
        [
          "Block 1 — the ideal and the preference gap",
          "Ideally, discussions with patients occur before ventilator support is necessary. However, information about patient preferences may be absent at the time patients require this intervention to survive.",
        ],
        [
          "Block 1 — the surrogate and the two inputs",
          "Medical decision-making frequently relies on surrogate decision-makers (patient identified or legally appointed) when discussing the continuation or withdrawal of ventilatory support, focusing on both the prognosis of the condition and the believed wishes of the patient.",
        ],
        [
          "Block 1 — the override rule (prints with the arrow)",
          "If surrogates indicate patient would not have wanted to receive life support with ventilation → withhold or withdraw life support regardless of what the surrogate prefers.",
        ],
        [
          "Block 1 — the support wrap",
          "If the decision is made to withhold or withdraw life support, involve palliative care, chaplain services, and the primary care physician in medical discussions with the family and provide emotional support.",
        ],
        [
          "Heading (blue bold; hyphen wraps across the line — raw layer merges to “Surrogate decisionmaker”)",
          "Surrogate decision-maker",
        ],
        [
          "Block 2 — the trigger, the task, and the priority chain (First Aid's own red mnemonic in the parenthesis)",
          "If a patient loses decision-making capacity and has not prepared an advance directive, individuals (surrogates) who know the patient must determine what the patient would have done. Priority of surrogates: spouse → adult children → parents → adult siblings → other relatives (the spouse chips in).",
        ],
        ["Heading (blue bold)", "Confidentiality"],
        [
          "Block 3 — the default, the emergent disclosure, and the waiver",
          "Confidentiality respects patient privacy and autonomy. If the patient is incapacitated or the situation is emergent, disclosing information to family and friends should be guided by professional judgment of patient’s best interest. The patient may voluntarily waive the right to confidentiality (eg, insurance company request).",
        ],
        [
          "Block 3 — the three general principles (square bullets; shown with “·” separators)",
          "General principles for exceptions to confidentiality: Potential physical harm to self or others is serious and imminent · Alternative means to warn or protect those at risk is not possible · Steps can be taken to prevent harm",
        ],
        [
          "Block 3 — the SAVED lead-in (First Aid's own mnemonic; “SAVED” prints in red)",
          "Examples of exceptions to patient confidentiality (many are state specific) include the following (“The physician’s good judgment SAVED the day”):",
        ],
        [
          "Block 3 — the five example bullets (initial capitals S-A-V-E-D print in red; shown with “·” separators)",
          "Patients with active Suicidal/homicidal ideation · Abuse (children, older adults, and/or prisoners) · Duty to protect—state-specific laws that sometimes allow physician to inform or somehow protect potential Victim from harm · Patients with Epilepsy and other impaired automobile drivers · Reportable Diseases (eg, STIs, hepatitis, food poisoning); physicians may have a duty to warn public officials, who will then notify people at risk. Dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment.",
        ],
        [
          "Heading (blue bold; wraps “Accepting gifts from / patients”)",
          "Accepting gifts from patients",
        ],
        [
          "Block 4 — the debate",
          "A complex subject without definitive regulations. Some argue that the patient-physician relationship is strengthened through accepting a gift from a patient, while others argue that negative consequences outweigh the benefits of accepting any gift.",
        ],
        [
          "Block 4 — the practice and the assessment",
          "In practice, patients often present items such as cards, baked goods, and inexpensive gifts to physicians. The physician’s decision to accept or decline is based on an individual assessment of whether or not the risk of harm outweighs the potential benefit.",
        ],
        [
          "Block 4 — the three decline rules (square bullets; shown with “·” separators)",
          "Physicians should not accept gifts that are inappropriately large or valuable. · Gifts should not be accepted if the physician identifies that the gift could detrimentally affect patient care. · Gifts that may cause emotional or financial stress for the patient should not be accepted.",
        ],
        [
          "Block 4 — the decline script",
          "If a gift violates any of the guidelines above, the best practice is to thank the patient for offering a kind gift, but politely indicate that it must be declined. During this conversation it should be emphasized that the incident does not influence the physician-patient relationship in any way.",
        ],
      ],
      caption:
        "Verbatim carry, documented: FOUR blocks in printed order (VLM-confirmed — no block missing or extra, no additional text on the page). First Aid prints two mnemonics of its own in RED: “the spouse chips in” (inside the surrogate priority chain's parenthesis) and “The physician’s good judgment SAVED the day” (the word SAVED in red capitals in the lead-in, and the initial capitals S, A, V, E, D of the five example bullets picked out in red) — reproduced here as printed and ATTRIBUTED to the source; they are First Aid's own hooks, not KYP's. Printed quirks carried: the block-2 heading prints “Surrogate decision-maker” with the hyphen at the line wrap (the raw text layer merges it to “Surrogate decisionmaker” — the hyphenated print is carried here, and the manifest evidence range preserves the raw merge); the em-dash in “Duty to protect—state-specific laws” and the unhyphenated “many are state specific” are both as printed; the “·” separators above stand for the print's separate square-bullet lines; the arrows (→) in the chain and the override rule print in black (VLM), with C1 extraction bytes around them in the raw layer (known artifact, stripped by normalization).",
    },
    {
      kind: "list",
      title:
        "The decoder — the four blocks in exam form (KYP's reading of the page)",
      intro:
        "Each printed block compressed to its exam-decision core: the rule, the order, the roster, and the script. This is the layer to recall when a vignette hands you an incapacitated patient, a request for information, or a gift.",
      items: [
        {
          lead: "BLOCK 1 — VENTILATOR: wishes, not wants",
          text: "The two inputs are printed: “the prognosis of the condition and the believed wishes of the patient.” The rule is printed with an arrow: if the patient “would not have wanted to receive life support with ventilation → withhold or withdraw life support regardless of what the surrogate prefers.” The wrap is printed too: palliative care, chaplain services, and the primary care physician join the family discussions, with emotional support provided. Exam shape: a surrogate begs for continued ventilation the patient said he would never want — the answer is to honor the patient's believed wishes.",
        },
        {
          lead: "BLOCK 2 — SURROGATE LADDER: the spouse chips in",
          text: "Two preconditions, both printed: the patient “loses decision-making capacity” AND “has not prepared an advance directive.” Then “individuals (surrogates) who know the patient must determine what the patient would have done” — substituted judgment, not the surrogate's own choice. The priority: spouse → adult children → parents → adult siblings → other relatives. Exam shape: a wife and an adult son disagree — the spouse decides (First Aid's own mnemonic: “the spouse chips in”).",
        },
        {
          lead: "BLOCK 3 — CONFIDENTIALITY DEFAULT: privacy, waiver, best interest",
          text: "The base: “Confidentiality respects patient privacy and autonomy.” Two soft exits that are not breaches: the patient's voluntary waiver (“eg, insurance company request”) and the incapacitated/emergent case, where “disclosing information to family and friends should be guided by professional judgment of patient's best interest.” Exam shape: a friend asks about an unconscious patient's status in the ER — professional judgment of the patient's best interest guides what is shared.",
        },
        {
          lead: "BLOCK 3 — THE THREE GATES AND THE SAVED ROSTER",
          text: "Before any breach: harm “serious and imminent,” “alternative means to warn or protect those at risk is not possible,” and “steps can be taken to prevent harm” (KYP: SERIOUS, STUCK, STOPPABLE). Then First Aid's own “The physician's good judgment SAVED the day”: active Suicidal/homicidal ideation; Abuse of children, older adults, and/or prisoners; Duty to protect a potential Victim (state-specific laws); Epilepsy and other impaired automobile drivers; Reportable Diseases (STIs, hepatitis, food poisoning). The mechanics: physicians “warn public officials, who will then notify people at risk,” and “dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment.”",
        },
        {
          lead: "BLOCK 4 — GIFTS: one assessment, three declines, one script",
          text: "The page itself concedes “a complex subject without definitive regulations,” so the decision “is based on an individual assessment of whether or not the risk of harm outweighs the potential benefit” — cards, baked goods, and inexpensive gifts are the practice norm. Three printed declines: gifts “inappropriately large or valuable”; gifts that “could detrimentally affect patient care”; gifts that “may cause emotional or financial stress for the patient.” The script: thank the patient for offering a kind gift, politely indicate it must be declined, and emphasize the incident “does not influence the physician-patient relationship in any way.”",
        },
        {
          lead: "THE BOUNDARY — what this page is NOT",
          text: "The surrogate ladder is the NO-advance-directive path only: if the patient prepared a directive (living will, medical power of attorney), the directive governs — that is the previous page's material (book 269, the informed-consent topic). Likewise the core principles (autonomy, beneficence, nonmaleficence, justice) and capacity assessment live on book 268; this page applies them at the edge (KYP framing of the chapter's structure).",
        },
      ],
    },
    {
      kind: "steps",
      title: "Working any vignette on this page in four questions",
      intro:
        "The whole page distilled into an ordered reading path — WHO, WHAT, MAY I, MAY I KEEP — applicable to any ethics vignette built from book 270, printed there or not.",
      steps: [
        {
          label: "QUESTION 1 — WHO DECIDES? (capacity, directive, ladder)",
          detail:
            "Capacity present → the patient decides (leave this page). Capacity lost + advance directive prepared → the directive governs (previous page). Capacity lost + no directive → the surrogate ladder: spouse → adult children → parents → adult siblings → other relatives (“the spouse chips in” — First Aid's own). A vignette that names two relatives is testing the ladder; a vignette that names a directive is testing the routing.",
        },
        {
          label: "QUESTION 2 — WHAT WOULD THE PATIENT HAVE WANTED? (ventilator)",
          detail:
            "On ventilatory support the surrogate weighs “the prognosis of the condition and the believed wishes of the patient.” If the patient would not have wanted life support with ventilation → withhold or withdraw “regardless of what the surrogate prefers” (WISHES, NOT WANTS — KYP). Once withheld or withdrawn → involve palliative care, chaplain services, and the primary care physician in the family discussions and provide emotional support.",
        },
        {
          label: "QUESTION 3 — MAY THE INFORMATION LEAVE THE ROOM? (confidentiality)",
          detail:
            "Default: keep it — privacy and autonomy. Soft exits: the patient waives (eg, insurance company request) or is incapacitated/emergent and professional judgment of the patient's best interest guides disclosure to family and friends. Hard exits only through the three gates (serious and imminent; no alternative means; preventable): the SAVED roster — Suicidal/homicidal, Abuse, Victim (duty to protect, state-specific), Epilepsy/impaired drivers, reportable Diseases (warn public officials, who notify people at risk; TB or Ebola may require involuntary treatment).",
        },
        {
          label: "QUESTION 4 — MAY THE PHYSICIAN KEEP THE GIFT? (the harm-benefit assessment)",
          detail:
            "Run the one printed assessment: does “the risk of harm outweigh the potential benefit”? Cards, baked goods, and inexpensive gifts usually pass. Decline if the gift is “inappropriately large or valuable,” if it “could detrimentally affect patient care,” or if it “may cause emotional or financial stress for the patient” — and when declining: thank the patient for the kind gift, politely indicate it must be declined, and emphasize the physician-patient relationship is unchanged.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Keep vs break — the confidentiality decision line, in the page's own words",
      intro:
        "The Confidentiality block draws one line with two sides: disclosures that respect the patient, and exceptions that override the patient. Every confidentiality vignette is a routing question — which side does this fact pattern sit on?",
      columns: [
        "KEEP CONFIDENTIAL — the default and its permitted disclosures",
        "BREAK CONFIDENTIAL — the SAVED exceptions through the three gates",
      ],
      rows: [
        {
          label: "The printed basis",
          a: "“Confidentiality respects patient privacy and autonomy” — the information belongs to the patient",
          b: "“Examples of exceptions to patient confidentiality (many are state specific) include the following (“The physician’s good judgment SAVED the day”)”",
        },
        {
          label: "Who authorizes the disclosure",
          a: "The patient — “may voluntarily waive the right to confidentiality (eg, insurance company request)” — or the physician's professional judgment when “the patient is incapacitated or the situation is emergent”",
          b: "The exception itself, once the three general principles pass: harm “serious and imminent,” “alternative means to warn or protect those at risk is not possible,” “steps can be taken to prevent harm”",
        },
        {
          label: "Who is told",
          a: "Family and friends, “guided by professional judgment of patient’s best interest” — or the waiving party (eg, the insurance company)",
          b: "For reportable diseases, “public officials, who will then notify people at risk”; for duty to protect, “state-specific laws that sometimes allow physician to inform or somehow protect potential Victim from harm”",
        },
        {
          label: "The printed roster / examples",
          a: "The waiver example (insurance company request) and the incapacitated/emergent judgment — no disease list attaches",
          b: "Active Suicidal/homicidal ideation · Abuse (children, older adults, and/or prisoners) · duty to protect a potential Victim · Epilepsy and other impaired automobile drivers · Reportable Diseases (STIs, hepatitis, food poisoning) — and “dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment”",
        },
        {
          label: "What the exam is really asking",
          a: "“The patient consented (or cannot and someone close needs to know)” — a permitted disclosure is still confidentiality working FOR the patient",
          b: "“Serious, imminent, no other way, preventable” — a breach the physician must make despite the patient's objection (KYP framing of the gates)",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one script question",
      body:
        "SHAPE 1 — THE OVERRIDE: an intubated patient's surrogate reports the patient “would never have wanted this” but asks that ventilation continue — the printed rule answers: withhold or withdraw “regardless of what the surrogate prefers,” then involve palliative care, chaplain services, and the primary care physician and provide emotional support. SHAPE 2 — THE LADDER: capacity lost, no advance directive, two relatives in conflict (wife vs adult son; parent vs adult child) — the spouse comes first (“the spouse chips in”). SHAPE 3 — THE BREACH: a disease, an impaired driver, an abused child or older adult, or a credible threat to an identified victim — route through the three gates to SAVED, and know the mechanics (public officials notify people at risk; duty to protect is state-specific; TB or Ebola may require involuntary treatment). SHAPE 4 — THE REQUEST: a friend or insurer asks for information — waiver and incapacitated/emergent professional judgment are the permitted paths, not breaches. THE SCRIPT QUESTION: an expensive gift from a grateful patient — decline it with the printed script: thank the patient for offering a kind gift, politely indicate that it must be declined, and emphasize the incident does not influence the physician-patient relationship in any way.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own red mnemonics — printed on the page, carried attributed",
      body:
        "The page prints TWO mnemonics of its own, both in RED (VLM-confirmed at 120dpi, staging-pubh20/vlm-census.txt) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “the spouse chips in” — the surrogate priority chain's parenthesis: Spouse → Children → Parents → Siblings → other relatives, in exactly that order, and the spouse leads it. (2) “The physician’s good judgment SAVED the day” — the exceptions roster: Suicidal/homicidal ideation, Abuse (children, older adults, and/or prisoners), duty to protect a potential Victim (state-specific), Epilepsy and other impaired automobile drivers, reportable Diseases (STIs, hepatitis, food poisoning) — the word SAVED prints in red capitals in the lead-in, and the five bullets' initial capitals print in red. The two KYP originals in the Memory section below are marked as such: “SERIOUS, STUCK, STOPPABLE” (the three general principles: the harm is Serious and imminent; you are Stuck — no alternative means to warn or protect; the harm is Stoppable — steps can be taken to prevent it) and “WISHES, NOT WANTS” (the ventilator override: the patient's believed WISHES govern, not the surrogate's WANTS).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — the withdrawal wrap, the reportables, the impaired driver",
      intro:
        "First Aid plants three concrete clinical anchors on this page; all are printed and all are high-yield anchors for ethics vignettes.",
      items: [
        {
          lead: "THE WITHDRAWAL WRAP — palliative care, chaplain, primary care physician",
          text: "The printed sentence names the team that joins the family discussions once life support is withheld or withdrawn: “involve palliative care, chaplain services, and the primary care physician in medical discussions with the family and provide emotional support.” A vignette answer option that withdraws support but leaves the family alone is incomplete — the wrap is part of the correct answer (KYP framing of the printed sentence).",
        },
        {
          lead: "THE REPORTABLE CLUSTERS — STIs, hepatitis, food poisoning; TB, Ebola",
          text: "The Reportable Diseases bullet prints three named examples — “STIs, hepatitis, food poisoning” — and then the escalation: “physicians may have a duty to warn public officials, who will then notify people at risk. Dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment.” The two-tier structure is the exam point: ordinary reportables route through public officials; TB and Ebola can justify treating the patient over the patient's refusal.",
        },
        {
          lead: "THE PROTECTED POPULATIONS AND THE IMPAIRED DRIVER",
          text: "Abuse prints with its three protected groups — “children, older adults, and/or prisoners.” Epilepsy prints with its class — “other impaired automobile drivers.” Both are SAVED letters (A and E): the physician reports despite confidentiality, and both are “many are state specific” in their mechanics. A vignette about a patient having seizures who keeps driving, or a bruised child or older adult, is routing to these letters.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 68-year-old man with a devastating stroke is intubated and has lost decision-making capacity; he prepared no advance directive. His wife, his legally identified surrogate, tells the team that he repeatedly said he would never want to be kept on a ventilator, but she asks that ventilation be continued because she is not ready to let go.",
        discriminator:
          "Substituted judgment vs the surrogate's own preference — the believed wishes of the patient govern “regardless of what the surrogate prefers”",
        concept: "Ventilator-assisted life support and the override rule",
        answer:
          "Withhold or withdraw life support in accordance with the patient's believed wishes, regardless of what the surrogate prefers — and involve palliative care, chaplain services, and the primary care physician in the family discussions with emotional support. The surrogate's report of the patient's wishes, not the surrogate's preference, decides.",
      },
      {
        stem: "A patient who has lost decision-making capacity has no advance directive. At the bedside, the patient's spouse and two adult children disagree about whether to proceed with a major procedure; the parents and an adult sibling are also present and offering opinions.",
        discriminator:
          "The fixed priority order when capacity is lost and no directive exists — First Aid's own mnemonic “the spouse chips in”",
        concept: "Surrogate decision-maker priority",
        answer:
          "The surrogate priority is spouse → adult children → parents → adult siblings → other relatives: the spouse decides, and the adult children come next — “the spouse chips in” (First Aid's own mnemonic, printed in red). Individuals who know the patient must determine what the patient would have done.",
      },
      {
        stem: "A physician diagnoses a notifiable infection and the patient explicitly forbids any disclosure; in the same clinic, a patient with epilepsy continues to drive against advice, and a new patient discloses ongoing abuse of an older parent.",
        discriminator:
          "Three SAVED letters in one stem — reportable Diseases, Epilepsy/impaired drivers, Abuse — each bypassing the patient's confidentiality through the three general principles",
        concept: "Exceptions to confidentiality (the SAVED roster)",
        answer:
          "All three are printed exceptions: report the notifiable disease (physicians “may have a duty to warn public officials, who will then notify people at risk”); report the impaired driver per state-specific law; report the abuse of an older adult. Each passes the gates — serious and imminent harm, no alternative means to warn or protect, steps that can prevent harm.",
      },
      {
        stem: "A long-term patient, grateful after a complicated hospitalization, hands her physician an expensive watch; another brings homemade cookies and a thank-you card.",
        discriminator:
          "The individual harm-versus-benefit assessment and the three printed decline rules vs the practice norm of cards, baked goods, and inexpensive gifts",
        concept: "Accepting gifts from patients",
        answer:
          "The cookies and card may be accepted — patients often present cards, baked goods, and inexpensive gifts, and the decision rests on whether the risk of harm outweighs the potential benefit. The expensive watch is declined: physicians should not accept gifts that are inappropriately large or valuable — thank the patient for offering a kind gift, politely indicate it must be declined, and emphasize the incident does not influence the physician-patient relationship in any way.",
      },
    ],
    traps: [
      {
        a: "The patient's believed wishes (what the patient would have wanted)",
        b: "The surrogate's own preference (what the surrogate wants done)",
        whyConfused:
          "Both are voiced by the same person at the same bedside, and the surrogate is often the one pleading; stems are written so the two diverge exactly once",
        keyDifference:
          "The printed override: if surrogates indicate the patient would not have wanted life support with ventilation, withhold or withdraw it “regardless of what the surrogate prefers” — substituted judgment governs, and the divergence is the test",
        clue:
          "Quotation of the patient's prior words (“he always said he would never want…”) = wishes → honor them; a surrogate's own request (“I'm not ready”) = preference → it does not govern (KYP: WISHES, NOT WANTS).",
      },
      {
        a: "Surrogate decision-maker — capacity lost, NO advance directive prepared",
        b: "Advance directive (living will / medical power of attorney) — the patient's own prior instructions",
        whyConfused:
          "Both answer “who decides when the patient cannot?”; a stem that mentions a directive plus a family conflict is baiting the ladder",
        keyDifference:
          "The ladder applies only if the patient “has not prepared an advance directive”; if a directive exists, its terms govern — the hierarchy never even activates (the previous page's material, book 269)",
        clue:
          "“No advance directive” or “never discussed his wishes in writing” → ladder (“the spouse chips in”); “living will states…” or “designated her agent” → follow the directive.",
      },
      {
        a: "Permitted disclosure — the patient's waiver (eg, insurance company request) or incapacitated/emergent best-interest judgment",
        b: "Required breach — the SAVED exceptions through the three general principles",
        whyConfused:
          "Both result in information leaving the room, and both can occur without the patient's real-time consent; stems blur who authorized what",
        keyDifference:
          "Waiver/emergent disclosure is confidentiality working with the patient's own authorization or best interest; the SAVED exceptions override the patient over the patient's objection, and only when the harm is serious and imminent, no alternative means to warn or protect exists, and steps can prevent it",
        clue:
          "Ask who benefits: the patient (waiver, best interest) → keep-side disclosure; identifiable others or the public (SAVED) → breach-side, report per state-specific law.",
      },
      {
        a: "Accepting a card, baked goods, or an inexpensive gift",
        b: "Accepting an inappropriately large or valuable gift",
        whyConfused:
          "Both arrive with genuine gratitude; the page itself says the subject lacks definitive regulations",
        keyDifference:
          "The printed assessment: accept or decline “based on an individual assessment of whether or not the risk of harm outweighs the potential benefit” — the practice norm is cards, baked goods, and inexpensive gifts; the three decline rules are size/value, detriment to patient care, and emotional or financial stress for the patient",
        clue:
          "Price tag, care-affecting strings, or visible patient hardship → decline with the script (thank, politely decline, reassure the relationship is unchanged); cookies and a card → accept.",
      },
    ],
    pivots: [
      {
        lookAlike: "“Who decides?” — a capacity-loss stem with relatives named",
        differentiator:
          "Route by capacity and paperwork before touching the ladder: capacity present → patient; directive present → directive; neither → spouse first",
        correctPath:
          "Capacity present → the patient decides. Capacity lost + advance directive → the directive governs (book 269). Capacity lost + no directive → individuals who know the patient determine what the patient would have done, in the order spouse → adult children → parents → adult siblings → other relatives — “the spouse chips in” (First Aid's own).",
      },
      {
        lookAlike: "A request for patient information (family, friend, insurer)",
        differentiator:
          "Was the disclosure authorized by the patient (or the patient's best interest), or is it a harm-prevention override?",
        correctPath:
          "Patient waived (eg, insurance company request) → disclose to the waiving party. Patient incapacitated or situation emergent → disclose to family and friends as guided by professional judgment of the patient's best interest. Neither and no SAVED letter → keep confidential. SAVED letter through the three gates → report/warn per state-specific law.",
      },
      {
        lookAlike: "A harm scenario asking WHO gets told",
        differentiator:
          "The warn mechanics differ by exception: public officials vs the potential victim vs involuntary treatment",
        correctPath:
          "Reportable Diseases (STIs, hepatitis, food poisoning) → physicians “may have a duty to warn public officials, who will then notify people at risk.” Duty to protect a potential Victim → state-specific laws that “sometimes allow physician to inform or somehow protect” the victim. Dangerous communicable diseases such as TB or Ebola → “may require involuntary treatment” — the one printed extension past disclosure.",
      },
    ],
    miniCase: {
      vignette:
        "A 72-year-old man is admitted with a massive intracranial hemorrhage and is placed on ventilatory support. He has lost decision-making capacity and never prepared an advance directive. His wife — his health care agent by state surrogate law — tells the team that for years he said he “would never want to be on a machine like this,” but through tears she asks the team to keep the ventilator running because she cannot bear to lose him yet. Their adult son agrees with continuing ventilation “for a few more days.” The ICU team convenes to decide the next step.",
      question:
        "Which of the following is the most appropriate action for the team?",
      options: [
        {
          label: "A",
          text: "Continue ventilatory support because the surrogate requesting it is the patient's spouse and she is legally empowered to decide",
          why: "TEMPTING but wrong — the spouse is indeed the first-priority surrogate (“the spouse chips in”), but her authority is to carry the PATIENT's decision, not her own: surrogates must “determine what the patient would have done.” Here the patient's believed wishes are known and point against ventilation, and the printed rule says to withhold or withdraw “regardless of what the surrogate prefers.”",
        },
        {
          label: "B",
          text: "Withdraw ventilatory support in accordance with the patient's believed wishes, and involve palliative care, chaplain services, and the primary care physician in discussions with the family while providing emotional support",
          correct: true,
          why: "CORRECT — the two printed halves of the block in one action: “If surrogates indicate patient would not have wanted to receive life support with ventilation → withhold or withdraw life support regardless of what the surrogate prefers,” followed by “involve palliative care, chaplain services, and the primary care physician in medical discussions with the family and provide emotional support.” The wife's report of his wishes governs; her own preference does not.",
        },
        {
          label: "C",
          text: "Continue ventilatory support because withdrawing life support requires a court order whenever the surrogate's preference conflicts with the patient's stated wishes",
          why: "TEMPTING but wrong — nothing on the page routes this decision to a court: medical decision-making relies on surrogate decision-makers (patient identified or legally appointed) “when discussing the continuation or withdrawal of ventilatory support,” and the override rule resolves the conflict at the bedside. Courts are not part of the printed pathway (KYP context: judicial involvement is reserved for intractable disputes, not the routine case).",
        },
        {
          label: "D",
          text: "Withdraw ventilatory support immediately without further family discussion, since the patient's wishes are now known",
          why: "TEMPTING but wrong — the decision may be correct, but the execution is not: the printed sentence requires the team to “involve palliative care, chaplain services, and the primary care physician in medical discussions with the family and provide emotional support.” Withdrawal without the family discussion and the support wrap is an incomplete answer to this block.",
        },
        {
          label: "E",
          text: "Ask the adult son to decide, since the spouse is emotionally compromised and cannot act in the patient's best interest at this moment",
          why: "WRONG on two counts — the ladder is fixed (spouse → adult children → parents → adult siblings → other relatives), and emotional distress does not disqualify the first-priority surrogate; and the ladder is only reached for a patient without an advance directive in the first place. The son is second in line, not first, and the decision turns on the patient's wishes, not on who is least distressed.",
        },
      ],
      reasoning:
        "The vignette tests the override rule plus the wrap. Capacity is lost and no advance directive exists, so decision-making falls to surrogates — the spouse first (“the spouse chips in,” First Aid's own). But the surrogate's job is substituted judgment: she must “determine what the patient would have done,” and she has just reported it — he would not have wanted life support with ventilation. The printed rule then decides the case: withhold or withdraw life support “regardless of what the surrogate prefers,” the surrogate's own tearful request included. Option A misreads the spouse's authority as her own choice; option E both misorders the ladder and invents a distress disqualifier; option C sends the case to a court the printed pathway does not require; option D reaches the right decision but skips the printed wrap — palliative care, chaplain services, the primary care physician, and emotional support — which the correct answer (B) carries in full.",
    },
  },
  mnemonics: [
    {
      code: "the spouse chips in",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in RED inside the surrogate priority chain's parenthesis (carried verbatim, attributed): the Spouse decides first, then Children, then Parents, then Siblings, then other relatives — the initial letters S-C-P-S-O in priority order, with the spouse leading the chain.",
      memorizes:
        "The surrogate decision-maker priority order when a patient loses decision-making capacity without an advance directive",
      whenToUse:
        "Any vignette with an incapacitated patient, no advance directive, and more than one relative offering an opinion — identify who is empowered before evaluating what they say; also the fallback whenever a stem asks “who is the most appropriate person to ask for consent?”",
      clinical:
        "The hierarchy is the legal default in most jurisdictions (KYP context); state surrogate laws vary, and the exam tests the printed order — spouse → adult children → parents → adult siblings → other relatives.",
    },
    {
      code: "The physician's good judgment SAVED the day",
      meaning:
        "FIRST AID'S OWN mnemonic, printed with SAVED in red capitals and the five bullets' initial capitals picked out in red (carried verbatim, attributed): Suicidal/homicidal ideation; Abuse (children, older adults, and/or prisoners); duty to protect a potential Victim (state-specific laws); Epilepsy and other impaired automobile drivers; reportable Diseases (eg, STIs, hepatitis, food poisoning).",
      memorizes:
        "The printed roster of exceptions to patient confidentiality — the situations in which confidentiality yields to prevent harm",
      whenToUse:
        "Any confidentiality stem with a harm vector: an actively suicidal or homicidal patient, a suspected abuse victim, a threat against an identifiable person, a seizing patient who keeps driving, or a notifiable diagnosis the patient wants hidden — check the three gates, then report per the SAVED category.",
      clinical:
        "The mechanics print with the roster: physicians “may have a duty to warn public officials, who will then notify people at risk” (reportable diseases), duty-to-protect laws are state-specific, and “dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment.”",
    },
    {
      code: "SERIOUS, STUCK, STOPPABLE",
      meaning:
        "A KYP ORIGINAL — the three printed general principles for exceptions to confidentiality in one line each: the potential physical harm to self or others is SERIOUS (and imminent); you are STUCK — alternative means to warn or protect those at risk is not possible; the harm is STOPPABLE — steps can be taken to prevent it.",
      memorizes:
        "The three conditions that must all hold before any SAVED exception justifies breaching confidentiality",
      whenToUse:
        "Any stem that offers a breach as an answer choice: run the three gates first — a breach that fails even one (harm not imminent, another way to warn exists, nothing can be done) is not the printed exception; also the discriminator between “must report” and “may not disclose.”",
      clinical:
        "The gates explain the roster (KYP context): active ideation and reportable diseases are serious and imminent with no alternative and preventable steps; that is why they print as exceptions while mere embarrassment or past behavior does not.",
    },
    {
      code: "WISHES, NOT WANTS",
      meaning:
        "A KYP ORIGINAL — the ventilator override rule compressed: the patient's believed WISHES (what the patient would have wanted, reported by the surrogate alongside the prognosis of the condition) govern the continuation or withdrawal of ventilatory support — NOT the surrogate's WANTS, which the printed rule dismisses with “regardless of what the surrogate prefers.”",
      memorizes:
        "Whose voice decides ventilator-assisted life support when the patient has lost capacity",
      whenToUse:
        "Any ventilator or life-support stem where the surrogate's request and the patient's previously expressed wishes diverge — and remember the wrap that follows the decision: palliative care, chaplain services, the primary care physician, and emotional support for the family.",
      clinical:
        "This is substituted judgment (KYP framing of the printed rule): the surrogate is a conduit for the patient's values, not a substitute decision-maker with their own vote — the same principle that powers the advance-directive material on the previous page.",
    },
  ],
  rapidReview: {
    s30: [
      "Ventilator-assisted life support — discuss preferences BEFORE if possible; preferences may be absent when needed to survive; surrogates (patient identified or legally appointed) weigh the prognosis of the condition + the believed wishes of the patient",
      "The override rule — if the patient would not have wanted life support with ventilation → withhold or withdraw regardless of what the surrogate prefers; then involve palliative care, chaplain services, and the primary care physician + provide emotional support",
      "Surrogate decision-maker — capacity lost + no advance directive → individuals who know the patient determine what the patient would have done; priority: spouse → adult children → parents → adult siblings → other relatives (“the spouse chips in”)",
      "Confidentiality default — respects patient privacy and autonomy; voluntary waiver (eg, insurance company request); incapacitated/emergent disclosure to family and friends guided by professional judgment of the patient's best interest",
      "Three general principles for exceptions — harm serious and imminent · no alternative means to warn or protect · steps can prevent harm (SERIOUS, STUCK, STOPPABLE — KYP)",
      "SAVED exceptions (First Aid's own) — Suicidal/homicidal ideation · Abuse (children, older adults, and/or prisoners) · duty to protect potential Victim (state-specific) · Epilepsy and other impaired automobile drivers · reportable Diseases (STIs, hepatitis, food poisoning)",
      "Warn mechanics — physicians may warn public officials, who then notify people at risk; dangerous communicable diseases such as TB or Ebola may require involuntary treatment",
      "Gifts — individual assessment: does the risk of harm outweigh the potential benefit? Cards, baked goods, and inexpensive gifts are the norm; decline if inappropriately large or valuable, could detrimentally affect patient care, or may cause emotional or financial stress — thank, politely decline, reassure the relationship is unchanged",
    ],
    m3: [
      "“the spouse chips in” — spouse → Children → Parents → Siblings → other relatives (First Aid's own, printed in red)",
      "“The physician's good judgment SAVED the day” — Suicidal/homicidal, Abuse, Victim (duty to protect), Epilepsy/impaired drivers, reportable Diseases (First Aid's own, printed in red)",
      "SERIOUS, STUCK, STOPPABLE — the three gates before any breach (KYP)",
      "WISHES, NOT WANTS — the patient's believed wishes override the surrogate's preference on the ventilator (KYP)",
    ],
    m10: [
      "The surrogate ladder activates ONLY when capacity is lost AND no advance directive exists — a prepared directive governs instead (book 269's material)",
      "The ventilator decision's two printed inputs: the prognosis of the condition AND the believed wishes of the patient — never the surrogate's preference when the two diverge",
      "Permitted disclosure vs breach: waiver (insurance company request) and incapacitated/emergent best-interest judgment keep confidentiality working for the patient; the SAVED exceptions override the patient and are “many are state specific”",
      "The gift decline script is itself testable content: thank the patient for offering a kind gift, politely indicate that it must be declined, and emphasize that the incident does not influence the physician-patient relationship in any way",
    ],
  },
  recall: [
    {
      q: "A patient on ventilatory support has lost capacity and left no advance directive. What two inputs guide the surrogate's discussions about continuing or withdrawing support — and what happens if the patient would not have wanted it?",
      a: "The prognosis of the condition and the believed wishes of the patient; if surrogates indicate the patient would not have wanted to receive life support with ventilation, withhold or withdraw life support regardless of what the surrogate prefers.",
    },
    {
      q: "Once the decision is made to withhold or withdraw life support, what does the printed page require the team to do?",
      a: "Involve palliative care, chaplain services, and the primary care physician in medical discussions with the family and provide emotional support.",
    },
    {
      q: "What two conditions must hold before the surrogate priority chain is used, and what is the chain?",
      a: "The patient has lost decision-making capacity AND has not prepared an advance directive; then individuals (surrogates) who know the patient must determine what the patient would have done, in the order: spouse → adult children → parents → adult siblings → other relatives (“the spouse chips in” — First Aid's own red mnemonic).",
    },
    {
      q: "Under what circumstances may a physician disclose confidential information to family and friends WITHOUT a breach, and how may a patient's own action end confidentiality?",
      a: "If the patient is incapacitated or the situation is emergent, disclosure is guided by professional judgment of the patient's best interest; the patient may voluntarily waive the right to confidentiality (eg, insurance company request).",
    },
    {
      q: "Name the three printed general principles for exceptions to confidentiality.",
      a: "Potential physical harm to self or others is serious and imminent; alternative means to warn or protect those at risk is not possible; steps can be taken to prevent harm.",
    },
    {
      q: "What are the five SAVED exceptions, and whose mnemonic is SAVED?",
      a: "First Aid's own (“The physician's good judgment SAVED the day,” printed in red): active Suicidal/homicidal ideation; Abuse (children, older adults, and/or prisoners); Duty to protect a potential Victim (state-specific laws); Epilepsy and other impaired automobile drivers; Reportable Diseases (eg, STIs, hepatitis, food poisoning).",
    },
    {
      q: "For a reportable disease, whom does the physician warn — and which two printed diseases may require involuntary treatment?",
      a: "Physicians may have a duty to warn public officials, who will then notify people at risk; dangerous communicable diseases such as TB or Ebola may require involuntary treatment.",
    },
    {
      q: "On what single assessment does the accept-or-decline gift decision rest, and what three kinds of gifts should never be accepted?",
      a: "An individual assessment of whether or not the risk of harm outweighs the potential benefit; never accept gifts that are inappropriately large or valuable, gifts that could detrimentally affect patient care, or gifts that may cause emotional or financial stress for the patient.",
    },
    {
      q: "A grateful patient offers a gift that violates the guidelines. What is the best-practice response, word for word as the page teaches it?",
      a: "Thank the patient for offering a kind gift, but politely indicate that it must be declined — and emphasize that the incident does not influence the physician-patient relationship in any way.",
    },
  ],
  related: [
    {
      title: "Informed consent, minors, and advance directives — the page before",
      note:
        "Book 269 prints the machinery this page falls back on: the consent process (disclosure, understanding, capacity, voluntariness), the WIPE exceptions, consent for minors, and the advance directives (living will, medical power of attorney, DNR) that preempt the surrogate ladder when they exist. The two pages are one decision tree: directive first, ladder only in its absence.",
      topicId: "informed-consent",
    },
    {
      title: "Core ethical principles and decision-making capacity — the foundation",
      note:
        "Book 268 prints autonomy, beneficence, nonmaleficence, and justice, and the capacity assessment that decides whether this page's machinery activates at all: capacity present → the patient decides; capacity lost → surrogate ladder. Confidentiality is autonomy's information branch, and the override rule is substituted judgment in action.",
      topicId: "core-ethical-principles",
    },
    {
      title: "Challenging patient and ethical scenarios — the applied sequel",
      note:
        "Books 274–275 apply this page's rules in the hardest vignettes — the impaired physician, requests for nonbeneficial treatment, family conflicts at the bedside. The ventilator override, surrogate ladder, and confidentiality gates all reappear there wearing harder facts.",
      topicId: "challenging-scenarios",
    },
    {
      title: "Interpreters and delivering bad news — SPIKES",
      note:
        "Book 273 prints the delivery side of the same conversations: the SPIKES protocol for breaking bad news and the interpreter rules for crossing language barriers — the communication skills that carry the withdrawal discussions and family meetings this page mandates (palliative care, chaplain, primary care physician).",
      topicId: "interpreters-bad-news",
    },
  ],
  crossLinks: [
    {
      subject: "Psychiatry — suicidality and duty to protect",
      connection:
        "The first SAVED letter is psychiatry's daily workup: active Suicidal/homicidal ideation justifies breaching confidentiality (hospitalization, warning) through the three gates, and the duty-to-protect letter covers the identifiable potential Victim — state-specific laws that allow the physician to inform or protect. Every psychiatry safety vignette routes through this page's gate check.",
    },
    {
      subject: "Neurology — epilepsy and driving privilege",
      connection:
        "Epilepsy is the printed SAVED example for impaired automobile drivers: the physician may owe a report to licensing or public officials despite the patient's confidentiality, a state-specific duty the exam tests through the seizure-patient-who-drives stem. The neurologic disease is the vehicle; the ethics rule is the answer.",
    },
    {
      subject: "Infectious disease and public health — reportable conditions",
      connection:
        "The reportable Diseases letter names STIs, hepatitis, and food poisoning, and the warn mechanics — physicians warn public officials, who notify people at risk — plus the TB/Ebola involuntary-treatment edge. This is the clinical intersection of the public-health surveillance system with individual patient confidentiality.",
    },
    {
      subject: "Palliative and end-of-life care — withdrawal of support",
      connection:
        "The ventilator block's wrap names the palliative care team, chaplain services, and the primary care physician as mandatory participants in the family discussion once life support is withheld or withdrawn, with emotional support provided — the printed bridge from the ethics decision to the end-of-life care delivery that follows it.",
    },
  ],
};
