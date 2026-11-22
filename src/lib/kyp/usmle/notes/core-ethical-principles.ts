import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic core-ethical-principles. Source: LOWER
// portion of pdf page 290 / book 268 (Part 1) — a PINNED PAGE-SPLIT. The page
// is divided at the in-body subsection ribbon: the UPPER portion (running
// header band + the "Pearson correlation coefficient" block with its row of
// r-value scatter panels, raw lines 1-41) belongs to correlation-coefficient
// (same batch, produced in parallel); THIS topic owns raw lines 43-101 — from
// the in-body "▶ PUBLIC HEALTH SCIENCES—ETHICS" ribbon to the footer timestamp.
// Every verbatim quote in this note is a contiguous span of raw lines 43-101;
// none crosses the boundary. The lower portion carries THREE printed blocks,
// all owned: (1) the "Core ethical principles" table — a two-column table
// (principle name | definition), FOUR rows in printed order: Autonomy,
// Beneficence, Nonmaleficence, Justice — every cell carried verbatim in the
// note's first table block; (2) the "Decision-making capacity" table — a
// two-column table (title | five paragraphs: the physician-must-determine
// definition, the irrevocability note, the not-exclusion-criteria note, the
// capacity-vs-competency pair), carried verbatim in the second table block;
// (3) the "Four major components of decision-making:" panel — a bulleted list
// (Understanding, Appreciation, Reasoning, Expressing a choice, each with its
// printed parenthetical question), carried verbatim in the same table block.
// PRINTED GEOMETRY (pinned by pdftotext -bbox): the four-components panel
// prints SIDE BY SIDE with the Decision-making capacity table, not below it —
// the capacity table spans x≈60-375 while the components panel sits to its
// RIGHT at x≈388-590, both starting at y≈574. CENSUS (pdfimages -list on pdf
// 290): ZERO raster images — pure text, two tables, one bulleted panel, the
// indd footer slug; both tables are ORIGINAL KYP ADAPTATIONS (the registry
// visual re-draws the principles table as four "pillars" and the capacity
// block as a capacity-vs-competency comparison card plus a four-components
// strip — the layout is KYP's, every printed label is preserved). VLM
// AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page pass,
// staging-pubh18/vlm-census.txt), confirming: the ETHICS ribbon prints on a
// solid teal/navy band BELOW the Pearson correlation figure (split boundary
// confirmed) and the same banner text also prints in the running header (the
// banner prints TWICE); "Core ethical principles" is a blue bold table title
// with the four principle names bold blue/navy in the left column, thin
// hairline rules between rows, no shading; "Principle of double effect" and
// the "not" in "are not exclusion criteria" print bold/italic; the four
// components' bullets are small BLUE SQUARES (they extract in the text layer
// as a \x83 control byte + the ▘ quadrant glyph — the control byte is a
// text-layer artifact, stripped by normalization; the square bullet is the
// print's own); NO red text, mnemonics, margin notes, asterisk footnotes, or
// images anywhere in the lower portion. PRINTED-TEXT QUIRKS carried +
// documented: (1) the in-body banner "▶ PUBLIC HEALTH SCIENCES—ETHICS" prints
// with the ▶ glyph and an em-dash (carried as extracted); the banner prints
// TWICE on the page (running header + in-body ribbon) and the running-header
// instance sits in the shared header band owned by the upper topic — the
// in-body ribbon is this block's opener; (2) "SEC TION II" header-space
// extraction artifact (in the shared header band, upper portion — noted, not
// quoted across the boundary); (3) the indd footer slug
// "FAS1_2026_06-PubHealth.indd 268" extracts MID-BLOCK in the raw order (raw
// line 87, between the capacity table and the four-components panel) although
// it prints at the bottom-left corner (bbox y≈836) — the evidence range quotes
// it in its raw extraction position and the printed position is bbox-pinned;
// (4) "Decision-making capacity" wraps across two lines in its table cell;
// (5) curly quotes and apostrophes are as printed ("Do good.", "Do no harm.",
// patient's); (6) the em-dash in "Principle of double effect—facilitating" is
// as printed; (7) the four components' bullets carry the ▘ square-bullet
// glyph in the verbatim table block. ADJUDICATIONS (documented in the manifest
// too): (A) the pinned split starts at the IN-BODY ribbon (raw line 43) — the
// running-header banner instance (raw line 10) belongs to the shared header
// band and is NOT quoted, keeping every quote inside the boundary; (B) the
// brief's block description matched the print exactly (four principle rows,
// the five capacity paragraphs, the four components) — no correction needed;
// (C) the VLM pass transcribed the last component's question as "what would
// you like to do to do?" — a duplication error; the pdftotext text layer
// reads "what would you like to do?" (raw lines 98-99) — TEXT LAYER GOVERNS;
// (D) the printed sentence "Traditionally, patient interest supersedes."
// follows TWO named conflicts (autonomy and society); read with its
// parentheticals, the autonomy conflict is resolved by "an informed patient
// has the right to decide" and the supersede rule most directly resolves the
// SOCIETY conflict — the note presents the page's own resolution order.
// PROVENANCE SPLIT: verbatim = the four principle definitions, the five
// capacity paragraphs, the four components with their questions, the mottos
// "Do good." / "Do no harm."; FA-own = the bold-blue principle names, the
// double-effect bolding, the italic "not", the blue square bullets; KYP-
// original = the four-pillar grammar, the conflict-ladder reading, the
// capacity/competency see-saw, the U-ARE four-question protocol, the exam
// layer, and the four KYP mnemonics ("A BRIGHT NEW JUDGE", "U-ARE", "CAPACITY
// IS CLINICAL, COMPETENCY IS COURT", "COMFORT FIRST, PATIENT FIRST") — the
// page prints NO mnemonics of its own (VLM-confirmed), so every mnemonic in
// this note is a KYP original, marked as such. DrugCards: none — the page
// prints principles and capacity rules, not drug rows (the opioid mention is
// an example inside beneficence's double-effect sentence, carried in the
// clinical block; documented as folded-by-absence in the manifest). The next
// page (pdf 291) continues the ETHICS subsection (informed consent,
// surrogates, confidentiality) — separate topics in this same chapter census.

export const coreEthicalPrinciples: KypUsMLENote = {
  id: "core-ethical-principles",
  title: "Core Ethical Principles and Decision-Making Capacity",
  subtitle:
    "The ETHICS subsection of Public Health Sciences opens with two instruments that between them solve almost every ethics vignette on the exam. The first is a table of four principles — the pillars every doctor leans on: autonomy (respect patients as individuals, tell the truth, keep confidences, obtain informed consent, and honor the patient's preference in accepting or not accepting medical care), beneficence (\"Do good.\" — the physician's special fiduciary duty to act in the patient's best interest), nonmaleficence (\"Do no harm.\" — balanced against beneficence whenever benefits and risks trade off, which is most surgeries and medications), and justice (treat persons fairly and equitably — which does not always imply equally, as triage shows). The four are printed in one table because the exam does not test them separately: it tests their COLLISIONS — beneficence against autonomy (an informed patient has the right to decide), beneficence against society (eg, mandatory TB treatment — and traditionally, patient interest supersedes), comfort against side effects at the end of life (the principle of double effect). The second instrument is the capacity panel: the physician must determine whether the patient is psychologically and legally capable of making a particular healthcare decision — a clinical, decision-specific judgment (capacity, by a physician, for one decision, eg, to refuse medical care) that must not be confused with competency, the judge's global legal ruling. Two guardrails fence the panel: decisions made with capacity cannot be revoked simply if the patient later loses capacity, and intellectual disabilities and mental illnesses are not exclusion criteria unless the patient's condition presently impairs their ability to make healthcare decisions. The panel closes with the four components the physician actually tests — Understanding, Appreciation, Reasoning, and Expressing a choice — the bedside questions this note turns into a protocol.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Ethics",
  pilotCategory:
    "Public Health Sciences — Ethics: the four core principles with their printed definitions and conflicts (beneficence vs autonomy vs society, the principle of double effect with end-of-life opioids, nonmaleficence's risk-benefit balance, justice's triage example), plus decision-making capacity vs competency (physician for a specific decision vs judge for any decision), the irrevocability and not-exclusion-criteria guardrails, and the four components of decision-making.",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 268 (lower) (Ethics: Core ethical principles; Decision-making capacity)",
  tags: [
    "ethics",
    "core ethical principles",
    "autonomy",
    "beneficence",
    "nonmaleficence",
    "justice",
    "decision-making capacity",
    "competency",
    "informed consent",
    "truth-telling",
    "confidentiality",
    "fiduciary duty",
    "principle of double effect",
    "end-of-life care",
    "opioids",
    "respiratory depression",
    "triage",
    "mandatory treatment",
    "tuberculosis",
    "intellectual disability",
    "mental illness",
    "physician-patient relationship",
  ],
  core: {
    what:
      "The LOWER portion of book 268, carried whole — the ETHICS subsection's opening. BLOCK 1 — the “Core ethical principles” table, FOUR rows in printed order, every cell verbatim: (1) Autonomy — Obligation to respect patients as individuals (truth-telling, confidentiality), to create conditions necessary for autonomous choice (informed consent), and to honor their preference in accepting or not accepting medical care. (2) Beneficence — “Do good.” Physicians have a special ethical (fiduciary) duty to act in the patient’s best interest. May conflict with autonomy (an informed patient has the right to decide) or what is best for society (eg, mandatory TB treatment). Traditionally, patient interest supersedes. Principle of double effect—facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care. (3) Nonmaleficence — “Do no harm.” Must be balanced against beneficence; if the benefits outweigh the risks, a patient may make an informed decision to proceed (most surgeries and medications fall into this category). (4) Justice — To treat persons fairly and equitably. This does not always imply equally (eg, triage). BLOCK 2 — the “Decision-making capacity” table, five printed paragraphs verbatim: “Physician must determine whether the patient is psychologically and legally capable of making a particular healthcare decision.” · “Note that decisions made with capacity cannot be revoked simply if the patient later loses capacity.” · “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.” · “Capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care).” · “Competency is determined by a judge (eg, legally unable to make any healthcare-related decision).” BLOCK 3 — the “Four major components of decision-making:” panel, printing BESIDE the capacity table (bbox-pinned side-by-side geometry), four items verbatim: “Understanding (what do you know about your condition/proposed procedure/treatment?)” · “Appreciation (what does your condition mean to you? why do you think your doctor is recommending this course of treatment?)” · “Reasoning (how are you weighing your options?)” · “Expressing a choice (what would you like to do?)”.",
    why:
      "This page opens the ETHICS subsection because its two blocks are the two questions every clinical-ethics vignette reduces to: WHICH PRINCIPLE IS AT STAKE, and CAN THIS PATIENT DECIDE. The four principles are not four separate facts — they are the four loads a doctor carries at once, and the exam prices their collisions. Beneficence is the principle that collides: with autonomy (the page's own resolution — an informed patient has the right to decide) and with what is best for society (eg, mandatory TB treatment — with the printed priority rule that traditionally, patient interest supersedes). Nonmaleficence is the principle that balances: “Do no harm.” is not an absolute — it “must be balanced against beneficence,” and when benefits outweigh risks the balance is tipped not by the physician alone but by “a patient may make an informed decision to proceed” — which is why most surgeries and medications, all of them risky, are still ethically ordinary. Justice is the distribution principle: fair and equitable treatment that “does not always imply equally (eg, triage)” — the disaster-room counterexample that equal care for everyone is not the same as fair care. And the double-effect sentence is beneficence's end-of-life escape valve: facilitating comfort is prioritized over potential side effects, so respiratory depression with opioid use does not forbid opioids for patients receiving end-of-life care. The capacity block then guards the gateway to all four principles — because autonomy, informed consent, and the right to refuse all presuppose that the patient can decide. The page draws the clinical/legal line the exam loves: capacity is the physician's bedside judgment for ONE specific decision; competency is a judge's ruling over ANY healthcare decision. Its two guardrails kill the two favorite wrong answers: a capable decision stands even if capacity is later lost, and a diagnosis (intellectual disability, mental illness) is not an exclusion criterion unless the condition presently impairs decision-making. The four components are the actual test the physician performs.",
    keyIdea:
      "Read every ethics vignette in two moves. MOVE 1 — FIND THE COLLISION. Name the two principles in tension, then apply the page's own resolution rules: beneficence vs autonomy → an informed patient has the right to decide; beneficence vs society (eg, mandatory TB treatment) → traditionally, patient interest supersedes; comfort vs side effects at end of life → the principle of double effect (facilitating comfort is prioritized over potential side effects, eg, respiratory depression with opioid use); risk vs benefit → nonmaleficence balanced against beneficence, with the informed patient deciding to proceed (most surgeries and medications); scarce resources → justice, fairly and equitably but not always equally (eg, triage). MOVE 2 — CHECK THE GATEWAY. Before any principle operates, ask whether the patient can decide: the physician must determine whether the patient is psychologically and legally capable of making THIS particular healthcare decision. Capacity is CLINICAL (a physician, one specific decision, eg, to refuse medical care); competency is LEGAL (a judge, any healthcare decision). Two guardrails: decisions made with capacity cannot be revoked simply if the patient later loses capacity — the prior capable choice stands; and intellectual disabilities and mental illnesses are not exclusion criteria unless the patient's condition PRESENTLY impairs their ability to make healthcare decisions — test the patient, not the chart. The test itself is four questions (KYP: U-ARE): Understanding — what do you know about your condition/proposed procedure/treatment? Appreciation — what does your condition mean to you, and why do you think your doctor is recommending this course of treatment? Reasoning — how are you weighing your options? Expressing a choice — what would you like to do?",
  },
  mechanisms: [
    {
      id: "principle-conflict-map",
      title:
        "The four pillars and their collisions: how each printed principle generates its characteristic conflict",
      context:
        "The printed Core ethical principles table (book 268 lower): Autonomy, Beneficence, Nonmaleficence, Justice",
      flow: {
        nodes: [
          {
            id: "pillars",
            label: "THE FOUR PILLARS — the printed table's grammar",
            sublabel:
              "Input — the ETHICS subsection opens with four principles, each a duty, two with printed mottos: AUTONOMY (respect patients as individuals — truth-telling, confidentiality — create the conditions for autonomous choice, and honor the preference in accepting or NOT accepting care), BENEFICENCE (“Do good.” — a special ethical (fiduciary) duty to act in the patient’s best interest), NONMALEFICENCE (“Do no harm.”), JUSTICE (treat persons fairly and equitably). Every ethics vignette is a collision between two of them.",
            variant: "input",
          },
          {
            id: "autonomy-hinge",
            label: "AUTONOMY — the hinge principle",
            sublabel:
              "Process — autonomy has three printed verbs: RESPECT patients as individuals (truth-telling, confidentiality), CREATE the conditions necessary for autonomous choice (informed consent), and HONOR their preference in accepting or not accepting medical care. The third verb is the one the exam hammers: honoring a preference includes honoring a REFUSAL — which is why the Beneficence row immediately concedes that “an informed patient has the right to decide.”",
            variant: "process",
          },
          {
            id: "beneficence-collides",
            label: "BENEFICENCE COLLIDES — with the patient and with society",
            sublabel:
              "Process — “Do good.” is a fiduciary duty, and the row names both collisions: with AUTONOMY (“an informed patient has the right to decide”) and with WHAT IS BEST FOR SOCIETY (“eg, mandatory TB treatment”). The printed priority rule: “Traditionally, patient interest supersedes” — the patient's interest outranks society's. And at the end of life, the PRINCIPLE OF DOUBLE EFFECT: “facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care.”",
            variant: "process",
          },
          {
            id: "nonmaleficence-balances",
            label: "NONMALEFICENCE BALANCES — do no harm, weighed against do good",
            sublabel:
              "Process — “Do no harm.” “Must be balanced against beneficence”: the two duties pull against each other whenever a beneficial intervention carries risk. The printed resolution is procedural, not paternal: “if the benefits outweigh the risks, a patient may make an informed decision to proceed” — and the row's own example of that category is enormous: “(most surgeries and medications fall into this category).” Risk alone never forbids an intervention; it triggers informed consent.",
            variant: "process",
          },
          {
            id: "justice-distributes",
            label: "JUSTICE DISTRIBUTES — fair and equitable, not always equal",
            sublabel:
              "Process — “To treat persons fairly and equitably.” The row's own caution: “This does not always imply equally (eg, triage).” Justice governs how care is distributed when demand outstrips supply — and triage is the printed case where treating persons EQUALLY (first-come-first-served) would be treating them UNFAIRLY.",
            variant: "process",
          },
          {
            id: "conflict-ladder",
            label: "THE CONFLICT LADDER — name the collision, apply the printed rule",
            sublabel:
              "Output — every vignette resolves in one of four printed moves: (1) beneficence vs autonomy → the informed patient decides; (2) beneficence vs society → patient interest supersedes (mandatory TB treatment is the tension case); (3) comfort vs side effects at end of life → double effect, comfort first; (4) risk vs benefit → the informed patient proceeds (most surgeries and medications). Justice is the distribution overlay on all of them. Two moves — name the collision, apply the rule.",
            variant: "output",
          },
        ],
        edges: [
          { from: "pillars", to: "autonomy-hinge", label: "respect · create · honor →" },
          { from: "pillars", to: "beneficence-collides", label: "“Do good.” collides →" },
          { from: "pillars", to: "nonmaleficence-balances", label: "“Do no harm.” balances →" },
          { from: "pillars", to: "justice-distributes", label: "fair, not always equal →" },
          { from: "beneficence-collides", to: "conflict-ladder", label: "informed patient decides · patient supersedes society" },
          { from: "nonmaleficence-balances", to: "conflict-ladder", label: "benefits outweigh risks → informed decision" },
          { from: "justice-distributes", to: "conflict-ladder", label: "triage: equitable ≠ equal" },
          { from: "autonomy-hinge", to: "conflict-ladder", label: "the hinge every rule resolves against" },
        ],
      },
    },
    {
      id: "capacity-assessment-flow",
      title:
        "From a healthcare decision to a valid choice: the capacity pathway, its guardrails, and the four components",
      context:
        "The printed Decision-making capacity table + Four major components panel (book 268 lower)",
      flow: {
        nodes: [
          {
            id: "decision-arises",
            label: "A HEALTHCARE DECISION ARISES — eg, to refuse medical care",
            sublabel:
              "Input — the gateway question of the whole page: “Physician must determine whether the patient is psychologically and legally capable of making a particular healthcare decision.” Before autonomy can honor a preference or nonmaleficence can weigh a risk, someone must establish that THIS patient can make THIS decision — and the page assigns that determination to the physician.",
            variant: "input",
          },
          {
            id: "gate-diagnosis",
            label: "GUARDRAIL 1 — DIAGNOSIS IS NOT DESTINY",
            sublabel:
              "Process — “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.” A chart label (schizophrenia, intellectual disability) never answers the capacity question by itself; the physician tests the patient's PRESENT ability, decision by decision. The print's italic “not” is the exam's emphasis.",
            variant: "process",
          },
          {
            id: "gate-components",
            label: "THE FOUR COMPONENTS — the bedside test (KYP: U-ARE)",
            sublabel:
              "Process — the panel printed beside the capacity table gives the actual instrument: UNDERSTANDING (“what do you know about your condition/proposed procedure/treatment?”), APPRECIATION (“what does your condition mean to you? why do you think your doctor is recommending this course of treatment?”), REASONING (“how are you weighing your options?”), EXPRESSING A CHOICE (“what would you like to do?”). All four present → the patient has capacity for this decision; any one absent → capacity for this decision is impaired.",
            variant: "process",
          },
          {
            id: "decision-specific",
            label: "OUTPUT 1 — CAPACITY IS DECISION-SPECIFIC AND DURABLE",
            sublabel:
              "Output — “Capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care)” — one decision at a time, by the treating physician at the bedside. And durability runs forward only: “decisions made with capacity cannot be revoked simply if the patient later loses capacity” — a prior capable refusal or consent stands; later incapacity does not unwind it.",
            variant: "output",
          },
          {
            id: "courtroom-twin",
            label: "OUTPUT 2 — COMPETENCY, THE COURTROOM TWIN",
            sublabel:
              "Output — “Competency is determined by a judge (eg, legally unable to make any healthcare-related decision).” Same axis, different forum and scope: capacity = physician + ONE specific decision; competency = judge + ANY healthcare-related decision (a global legal status). The exam's fastest discriminator is WHO determines and for WHAT scope.",
            variant: "output",
          },
        ],
        edges: [
          { from: "decision-arises", to: "gate-diagnosis", label: "first, set aside the chart →" },
          { from: "gate-diagnosis", to: "gate-components", label: "then test the four components →" },
          { from: "gate-components", to: "decision-specific", label: "all four present → capable for THIS decision" },
          { from: "gate-components", to: "courtroom-twin", label: "global question → the judge" },
          { from: "decision-arises", to: "courtroom-twin", label: "court vs bedside fork →" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "ethics-principles-map",
      title:
        "The four pillars, the capacity-vs-competency see-saw, and the four components (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 268 lower's three blocks. ZONE A — the printed Core ethical principles table re-drawn as FOUR PILLARS in printed order (Autonomy, Beneficence, Nonmaleficence, Justice), each carrying its printed definition verbatim: Autonomy's three verbs (respect / create / honor) with truth-telling, confidentiality, and informed consent; Beneficence with its two collisions (vs autonomy — an informed patient has the right to decide; vs society — eg, mandatory TB treatment, traditionally patient interest supersedes) and the PRINCIPLE OF DOUBLE EFFECT callout (comfort prioritized over potential side effects, eg, respiratory depression with opioid use, in end-of-life care); Nonmaleficence's balance against beneficence (benefits outweigh risks → informed decision to proceed — most surgeries and medications); Justice's fair-and-equitable-not-always-equally with the triage example. ZONE B — the capacity-vs-competency comparison card: CAPACITY = determined by a physician for a specific healthcare-related decision (eg, to refuse medical care), with the two guardrails (decisions made with capacity cannot be revoked simply if the patient later loses capacity; intellectual disabilities and mental illnesses are not exclusion criteria unless the condition presently impairs) vs COMPETENCY = determined by a judge (legally unable to make any healthcare-related decision). ZONE C — the four-components strip: Understanding, Appreciation, Reasoning, Expressing a choice, each with its printed question.",
      notice:
        "Census (pdfimages -list on pdf 290): ZERO raster images — the page's assets are two color-coded tables (blue bold principle names, hairline rules, no shading) and one blue-square-bulleted panel, all VLM-read at 120dpi (staging-pubh18/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION: the principles table is re-laid-out as four pillars, the capacity table as a see-saw comparison card, and the four-components panel as a strip — the artwork and layout are KYP's, every printed label (all four definitions, all five capacity paragraphs, all four component questions) is preserved from the print, and the full text is additionally carried verbatim in the note's two table blocks. PRINTED GEOMETRY, drawn as the page prints it: the four-components panel sits BESIDE the Decision-making capacity table (bbox-pinned), not below it — the visual's Zone C strip is KYP's re-arrangement of that side panel and is labeled as such.",
    },
    {
      kind: "table",
      title:
        "Book 268 (lower) — the printed Core ethical principles table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The ETHICS subsection's first block: a two-column table (principle | definition) with FOUR rows in printed order — Autonomy, Beneficence, Nonmaleficence, Justice. The principle names print in bold blue/navy in the left column with thin hairline rules between rows and no shading (VLM-confirmed); the two mottos print in curly quotes (“Do good.” / “Do no harm.”); “Principle of double effect” prints bold; “Traditionally, patient interest supersedes.” closes the Beneficence row's conflict sentences. Every definition below is the print's own.",
      columns: ["PRINCIPLE", "PRINTED DEFINITION (verbatim)"],
      rows: [
        [
          "Autonomy",
          "Obligation to respect patients as individuals (truth-telling, confidentiality), to create conditions necessary for autonomous choice (informed consent), and to honor their preference in accepting or not accepting medical care.",
        ],
        [
          "Beneficence",
          "“Do good.” Physicians have a special ethical (fiduciary) duty to act in the patient’s best interest. May conflict with autonomy (an informed patient has the right to decide) or what is best for society (eg, mandatory TB treatment). Traditionally, patient interest supersedes. Principle of double effect—facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care.",
        ],
        [
          "Nonmaleficence",
          "“Do no harm.” Must be balanced against beneficence; if the benefits outweigh the risks, a patient may make an informed decision to proceed (most surgeries and medications fall into this category).",
        ],
        [
          "Justice",
          "To treat persons fairly and equitably. This does not always imply equally (eg, triage).",
        ],
      ],
      caption:
        "Verbatim carry, documented: FOUR rows in printed order (VLM-confirmed — none missing or extra). Printed quirks carried: the mottos’ curly quotes are as printed; the em-dash in “Principle of double effect—facilitating” is as printed; “eg,” lower-case with comma is the print's own style (mandatory TB treatment, respiratory depression with opioid use, triage); “patient’s” carries the print's curly apostrophe. The row order is First Aid's own (Autonomy first — the hinge principle) and is preserved everywhere in this note.",
    },
    {
      kind: "table",
      title:
        "Book 268 (lower) — the printed Decision-making capacity block and the Four major components panel, carried verbatim",
      intro:
        "The subsection's second and third blocks. The “Decision-making capacity” table prints a title cell (left) and five paragraphs (right); the “Four major components of decision-making:” panel prints BESIDE it — to the right of the capacity text, both starting at the same height (pinned by pdftotext -bbox coordinates; confirmed by the VLM pass). The four components' bullets are small blue squares that extract in the text layer as a control byte plus the ▘ quadrant glyph (carried here); the component lead words print bold. Raw-extraction quirk: the indd footer slug “FAS1_2026_06-PubHealth.indd 268” extracts BETWEEN the two blocks although it prints at the bottom-left corner — documented in the header comment and the manifest.",
      columns: ["PRINTED BLOCK", "VERBATIM TEXT (book 268, lower)"],
      rows: [
        [
          "Decision-making capacity",
          "Physician must determine whether the patient is psychologically and legally capable of making a particular healthcare decision. Note that decisions made with capacity cannot be revoked simply if the patient later loses capacity. Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions. Capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care). Competency is determined by a judge (eg, legally unable to make any healthcare-related decision).",
        ],
        [
          "Four major components of decision-making:",
          "▘ Understanding (what do you know about your condition/proposed procedure/treatment?) ▘ Appreciation (what does your condition mean to you? why do you think your doctor is recommending this course of treatment?) ▘ Reasoning (how are you weighing your options?) ▘ Expressing a choice (what would you like to do?)",
        ],
      ],
      caption:
        "Verbatim carry, documented: the five capacity paragraphs in printed order; the four components with their printed parenthetical questions and the ▘ square-bullet glyph (the print's blue square bullets); the italic “not” in “are not exclusion criteria” is the print's emphasis (VLM-confirmed). “Decision-making capacity” wraps across two lines in its title cell (carried as one title). The side-by-side printed geometry of these two blocks is preserved in the registry visual's Zones B and C.",
    },
    {
      kind: "list",
      title:
        "The decoder — principle by principle, with each one's collision (KYP's reading of the table)",
      intro:
        "Each printed row compressed to its exam-decision core: the duty, the motto where the print gives one, and the conflict the exam will build a vignette around. This is the layer to recall when a stem asks which principle is in play or who wins.",
      items: [
        {
          lead: "ROW 1 — AUTONOMY: respect, create, honor (the hinge)",
          text: "Duty: “Obligation to respect patients as individuals (truth-telling, confidentiality), to create conditions necessary for autonomous choice (informed consent), and to honor their preference in accepting or not accepting medical care.” Three verbs, three exam hooks: RESPECT (truth-telling, confidentiality), CREATE (informed consent — the conditions for choice), HONOR (the preference — including refusal). Autonomy is the hinge because every other principle's collision with it resolves the same printed way: “an informed patient has the right to decide.”",
        },
        {
          lead: "ROW 2 — BENEFICENCE: “Do good.” — the principle that collides",
          text: "Duty: “Physicians have a special ethical (fiduciary) duty to act in the patient’s best interest.” Two printed collisions: with AUTONOMY (resolution in the parenthesis — an informed patient has the right to decide) and with WHAT IS BEST FOR SOCIETY (eg, mandatory TB treatment; resolution — “Traditionally, patient interest supersedes.”). Plus the end-of-life rule, the PRINCIPLE OF DOUBLE EFFECT: “facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care.”",
        },
        {
          lead: "ROW 3 — NONMALEFICENCE: “Do no harm.” — the principle that balances",
          text: "Duty: “Do no harm.” — but the row immediately qualifies it: “Must be balanced against beneficence; if the benefits outweigh the risks, a patient may make an informed decision to proceed (most surgeries and medications fall into this category).” Nonmaleficence is not a veto on risky medicine — it is the reason consent exists. When a vignette offers a risky but beneficial intervention, the answer is informed consent, not refusal of the intervention.",
        },
        {
          lead: "ROW 4 — JUSTICE: fair and equitable — not always equal",
          text: "Duty: “To treat persons fairly and equitably.” The row's own caution: “This does not always imply equally (eg, triage).” Justice questions hand you a distribution problem — organs, vaccines, ICU beds, clinic slots — and the printed counterexample is triage: sorting patients by need and prognostic benefit is FAIR without being EQUAL. KYP context: justice is also where the four principles meet the population level of this chapter (the epidemiology pages before it).",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Capacity vs competency — the exam's favorite see-saw, in the page's own words",
      intro:
        "The capacity block's last two paragraphs draw the line the exam tests several ways a year: a clinical bedside judgment vs a legal courtroom ruling. Every distinguishing feature follows from WHO determines and for WHAT scope.",
      columns: [
        "CAPACITY — the clinical, bedside question",
        "COMPETENCY — the legal, courtroom question",
      ],
      rows: [
        {
          label: "Who determines it",
          a: "“Capacity is determined by a physician” — the treating physician, at the bedside, clinically",
          b: "“Competency is determined by a judge” — a court ruling, legally",
        },
        {
          label: "Scope",
          a: "“for a specific healthcare-related decision (eg, to refuse medical care)” — ONE decision at a time; the patient may have capacity for one decision and not another",
          b: "“(eg, legally unable to make any healthcare-related decision)” — a GLOBAL status covering any healthcare decision",
        },
        {
          label: "What is being judged",
          a: "“whether the patient is psychologically and legally capable of making a particular healthcare decision”",
          b: "the patient's legal ability to make healthcare decisions at all — the courtroom twin of the bedside assessment",
        },
        {
          label: "The guardrails that travel with it",
          a: "“decisions made with capacity cannot be revoked simply if the patient later loses capacity”; “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.”",
          b: "A competency ruling is what the vignette escalates to when the question is global and legal — not the first step for one treatment refusal (KYP framing of the distinction)",
        },
        {
          label: "How the exam words it",
          a: "“Can this patient decide THIS, now?” — refuse this transfusion, consent to this biopsy; answer by assessing the four components",
          b: "“Who is legally unable to make ANY healthcare decision?” — a judge's declaration; the word “legally” is the courtroom tell",
        },
      ],
    },
    {
      kind: "steps",
      title:
        "Assessing capacity at the bedside — the four printed components as an ordered protocol",
      intro:
        "The “Four major components of decision-making:” panel is the instrument the physician actually uses after the guardrails are cleared. Ask the four questions in order; all four present → capacity for this decision (KYP: U-ARE).",
      steps: [
        {
          label: "GUARDRAIL FIRST — diagnosis is not destiny",
          detail:
            "Before testing anything, set the chart aside: “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.” The question is never “does the patient have schizophrenia?” but “does the patient's present condition impair THIS decision?”",
        },
        {
          label: "QUESTION 1 — UNDERSTANDING: “what do you know about your condition/proposed procedure/treatment?”",
          detail:
            "The factual component: can the patient restate the condition, the proposed procedure or treatment, and what it involves? A patient who cannot describe the intervention does not understand it.",
        },
        {
          label: "QUESTION 2 — APPRECIATION: “what does your condition mean to you? why do you think your doctor is recommending this course of treatment?”",
          detail:
            "The personal component: does the patient recognize the condition as applying to THEM and the recommendation as being for THEM? Appreciation is where denial and disconnection show up — the patient who can recite the facts but says the diagnosis belongs to someone else.",
        },
        {
          label: "QUESTION 3 — REASONING: “how are you weighing your options?”",
          detail:
            "The comparative component: can the patient lay out options, consequences, and trade-offs and explain why one outweighs another? Reasoning is the process, not the choice — a patient can reason to a refusal the physician dislikes and still have capacity.",
        },
        {
          label: "QUESTION 4 — EXPRESSING A CHOICE: “what would you like to do?”",
          detail:
            "The output component: can the patient state a choice? And once stated — under the block's guardrail — “decisions made with capacity cannot be revoked simply if the patient later loses capacity”: the capable choice stands, and it is specific to THIS decision, because “capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care).”",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and two guardrail twists",
      body:
        "SHAPE 1 — WHO DETERMINES: the stem asks who evaluates whether the patient can decide, or the options contrast physician with judge — route by scope: one specific healthcare decision (eg, to refuse medical care) = the physician's capacity assessment; “legally unable to make any healthcare-related decision” = a judge's competency ruling. SHAPE 2 — WHICH PRINCIPLE: name the duty in play — truth-telling/confidentiality/informed consent/honoring a refusal = autonomy; acting in the patient's best interest = beneficence; weighing harm = nonmaleficence; distribution and triage = justice. SHAPE 3 — WHO WINS THE COLLISION: beneficence vs an informed patient → the patient decides; beneficence vs society (mandatory TB treatment) → “traditionally, patient interest supersedes”; comfort vs side effects at end of life → double effect. SHAPE 4 — THE DOUBLE EFFECT: a dying patient's opioids with family worried about respiratory depression → “facilitating comfort is prioritized over potential side effects … for patients receiving end-of-life care.” GUARDRAIL TWIST 1 — the patient who was capable yesterday and confused today: the prior decision “cannot be revoked simply if the patient later loses capacity.” GUARDRAIL TWIST 2 — the patient with schizophrenia or intellectual disability refusing treatment: “not exclusion criteria unless the patient's condition presently impairs their ability to make healthcare decisions” — assess the four components; do not call the judge first.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The mnemonic ledger — the page prints none of its own; all four below are KYP originals",
      body:
        "VLM-CONFIRMED (staging-pubh18/vlm-census.txt): the lower portion of book 268 prints NO mnemonics — no red text, no margin notes, no asterisk hooks; the color furniture is blue/navy only (bold principle names, “Principle of double effect,” the blue square bullets of the components panel). Every mnemonic below is therefore a KYP ORIGINAL, marked as such, none attributed to the source: (1) “A BRIGHT NEW JUDGE” — the four principles in printed order (Autonomy, Beneficence, Nonmaleficence, Justice) — with the bonus that the judge in the phrase is the competency judge. (2) “U-ARE” — the four components of decision-making (Understanding, Appreciation, Reasoning, Expressing a choice): if the patient can U-ARE, they have capacity for this decision. (3) “CAPACITY IS CLINICAL, COMPETENCY IS COURT” — the determiner and forum split (physician, one specific decision vs judge, any decision). (4) “COMFORT FIRST, PATIENT FIRST” — the page's two priority rules: the double effect (comfort over side effects at end of life) and the supersede rule (patient interest over society's, eg, mandatory TB treatment).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — opioids, TB, the refusal that stands, and the chart that doesn't decide",
      intro:
        "First Aid plants four clinical scenarios inside these two blocks; each is a complete exam stem in miniature, and each is printed inside a definition rather than in a margin.",
      items: [
        {
          lead: "THE DOUBLE EFFECT AT THE BEDSIDE — opioids at the end of life",
          text: "The printed sentence: “facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care.” The exam's version: a dying patient needs escalating morphine; the family (or a student) worries the opioid could suppress respiration and “hasten death.” The principle of double effect answers: the intent is comfort, the respiratory depression is a foreseen but unintended potential side effect, and for patients receiving end-of-life care comfort comes first. This is beneficence's end-of-life rule, printed inside the Beneficence row.",
        },
        {
          lead: "MANDATORY TB TREATMENT — beneficence vs what is best for society",
          text: "The printed tension: beneficence may conflict “with … what is best for society (eg, mandatory TB treatment).” A patient with active, transmissible tuberculosis refusing therapy is the canonical collision — the physician's duty to the patient's best interest meets the public-health duty to everyone else. The page's resolution rule: “Traditionally, patient interest supersedes” — the tension is real, and the traditional default favors the patient (the challenging-scenarios topic carries the exceptions where society's claim wins).",
        },
        {
          lead: "THE REFUSAL THAT STANDS — capacity's durability guardrail",
          text: "The printed rule: “decisions made with capacity cannot be revoked simply if the patient later loses capacity.” A patient who capably refuses a transfusion on Monday and is confused on Friday has already decided — the Friday team cannot simply unwind Monday's refusal. The exam loves this as a wrong-answer generator: “reassess and let the family decide now” fails; the prior capable choice governs unless it is properly revisited while capacity returns.",
        },
        {
          lead: "DIAGNOSIS ≠ INCAPACITY — the not-exclusion-criteria guardrail",
          text: "The printed rule: “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.” A stable patient with schizophrenia — or an adult with a mild intellectual disability — may demonstrate all four components (understanding, appreciation, reasoning, expressing a choice) and retain full capacity for the specific decision at hand. Test the patient, not the chart; the exam's trap option is always the reflex call to psychiatry or a judge.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 68-year-old man with capacity to decide refuses a recommended cancer surgery after a full informed-consent discussion; the surgical team believes operating is clearly in his best interest and asks what should prevail.",
        discriminator:
          "An informed patient has the right to decide — beneficence colliding with autonomy, resolved by the print's own parenthesis",
        concept: "Beneficence vs autonomy — who wins",
        answer:
          "Autonomy prevails: the Beneficence row itself concedes the conflict — “May conflict with autonomy (an informed patient has the right to decide)” — and autonomy's own row requires the physician “to honor their preference in accepting or not accepting medical care.” A capable refusal stands.",
      },
      {
        stem: "A patient with active pulmonary tuberculosis refuses treatment; the health department and the physician weigh society's interest in stopping transmission against the patient's interest.",
        discriminator:
          "“What is best for society (eg, mandatory TB treatment)” — the printed beneficence-vs-society collision with its printed resolution",
        concept: "Beneficence vs society — the supersede rule",
        answer:
          "The printed rule: “Traditionally, patient interest supersedes.” The collision is real — beneficence may conflict “with … what is best for society (eg, mandatory TB treatment)” — but the traditional priority favors the patient's interest (the narrow public-health exceptions, eg, communicable-disease control, live in the challenging-scenarios material).",
      },
      {
        stem: "A terminally ill patient receiving end-of-life care needs escalating opioid doses for pain; the family worries the opioids will cause respiratory depression and asks that the dose be reduced.",
        discriminator:
          "“respiratory depression with opioid use” in a patient “receiving end-of-life care” — the double-effect sentence in stem form",
        concept: "Principle of double effect",
        answer:
          "Continue comfort-directed opioids: “Principle of double effect—facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care.” The intended good (comfort) is prioritized over the foreseen-but-unintended harm.",
      },
      {
        stem: "A 34-year-old man with well-controlled schizophrenia refuses antibiotics for a treatable infection; he restates his condition and the proposed treatment, explains the consequences of refusal, gives consistent reasons, and clearly voices his choice. The team asks whether a judge must first declare him competent.",
        discriminator:
          "Mental illness present + all four components demonstrated + one specific decision — the not-exclusion-criteria guardrail and the physician/judge split",
        concept: "Decision-making capacity vs competency",
        answer:
          "No judge needed first: “Capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care),” and “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.” He demonstrates all four components — the physician documents capacity for THIS decision and honors the refusal.",
      },
    ],
    traps: [
      {
        a: "Capacity — determined by a physician for a specific healthcare-related decision",
        b: "Competency — determined by a judge (legally unable to make any healthcare-related decision)",
        whyConfused:
          "Both answer “can this patient decide?”; vignettes use the words loosely, and both appear as options on the same question",
        keyDifference:
          "Forum and scope: capacity is CLINICAL (the treating physician, at the bedside, for ONE specific decision, eg, to refuse medical care); competency is LEGAL (a judge, a GLOBAL ruling over any healthcare decision)",
        clue:
          "“This decision, right now” → physician/capacity; “legally unable to make ANY healthcare decision” → judge/competency.",
      },
      {
        a: "Autonomy — honor their preference in accepting or not accepting medical care",
        b: "Beneficence — a special ethical (fiduciary) duty to act in the patient’s best interest",
        whyConfused:
          "Both sound like “doing right by the patient,” and every refusal vignette activates both at once",
        keyDifference:
          "Autonomy makes the PATIENT the decision-maker (truth-telling, confidentiality, informed consent, honoring acceptance or refusal); beneficence makes the PHYSICIAN's duty to the patient's best interest the driver — and the print fixes the collision: an informed patient has the right to decide",
        clue:
          "A capable refusal against physician advice → autonomy wins; an incapable patient needing action → beneficence (via surrogates) takes over.",
      },
      {
        a: "A diagnosis of schizophrenia or intellectual disability",
        b: "Lack of decision-making capacity",
        whyConfused:
          "The stem hands you a psychiatric label and a refusal and expects the reflex “call psychiatry / call the judge”",
        keyDifference:
          "The print's guardrail: “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions” — capacity is tested behaviorally with the four components, not diagnostically from the chart",
        clue:
          "Assess understanding, appreciation, reasoning, and expressing a choice for THIS decision — the label alone never decides.",
      },
      {
        a: "Nonmaleficence — “Do no harm.”",
        b: "A prohibition on risky interventions",
        whyConfused:
          "The motto reads like an absolute, so a risky surgery or a risky medication feels like a violation",
        keyDifference:
          "The row qualifies itself: “Must be balanced against beneficence; if the benefits outweigh the risks, a patient may make an informed decision to proceed (most surgeries and medications fall into this category)” — nonmaleficence triggers informed consent, not veto",
        clue:
          "Risk + benefit + a capable patient → consent and proceed; harm WITHOUT offsetting benefit (or without consent) is what nonmaleficence forbids.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem that names the patient's diagnosis (schizophrenia, intellectual disability) beside a treatment refusal",
        differentiator:
          "The diagnosis is a distractor — pivot from the chart to the bedside test",
        correctPath:
          "Apply the guardrail (diagnoses “are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions”), then assess the four components for THIS specific decision — if all four are present, the physician documents capacity and honors the choice.",
      },
      {
        lookAlike: "“The patient made this decision yesterday; today she is confused” — a capacity question that looks like a re-decide question",
        differentiator:
          "Durability runs forward only — pivot to the irrevocability rule",
        correctPath:
          "“Decisions made with capacity cannot be revoked simply if the patient later loses capacity” — the prior capable choice governs; today's confusion does not unwind it (and if capacity returns, the patient can revisit the decision then).",
      },
      {
        lookAlike: "Judge, court, or “legally incompetent” language appearing on a one-decision stem",
        differentiator:
          "Scope tells the forum — one decision vs any decision",
        correctPath:
          "A single healthcare decision (refuse this transfusion, consent to this procedure) is the physician's capacity call; only the global question — legally unable to make ANY healthcare-related decision — belongs to the judge as competency.",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old man with schizophrenia, stable on antipsychotics and working part-time, is admitted with cellulitis. The team recommends IV antibiotics. In a calm, organized conversation he restates that he has a skin infection, describes the antibiotics and the risk of progression to sepsis, explains that he refuses because the prior course caused him severe nausea and he prefers oral treatment, and gives the same answer each time he is asked. The resident is uncomfortable overriding no one, but the intern asks the team to “get a judge to declare him incompetent so we can treat.”",
      question:
        "Which of the following is the most appropriate next step?",
      options: [
        {
          label: "A",
          text: "The treating physician assesses and documents decision-making capacity for this specific decision and honors the refusal",
          correct: true,
          why: "CORRECT — “Capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care)”: the bedside call belongs to the treating physician, not the court. And the guardrail applies: “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.” He demonstrates all four components — Understanding (restates the infection and the proposed treatment), Appreciation (knows the condition and the recommendation are his), Reasoning (weighs IV antibiotics against his prior nausea, prefers oral), Expressing a choice (consistent refusal). The capable refusal stands: autonomy requires honoring “their preference in accepting or not accepting medical care.”",
        },
        {
          label: "B",
          text: "Petition a judge to declare the patient legally incompetent before treating or discharging him",
          why: "TEMPTING but wrong — competency is “determined by a judge (eg, legally unable to make any healthcare-related decision)”: a GLOBAL legal ruling, and nothing here shows he cannot make healthcare decisions generally. Worse, it inverts the sequence — the physician's decision-specific capacity assessment comes first, and a capable patient's choice leaves nothing for the court to take over.",
        },
        {
          label: "C",
          text: "Override the refusal and give IV antibiotics, because beneficence requires acting in the patient’s best interest",
          why: "TEMPTING but wrong — beneficence “may conflict with autonomy (an informed patient has the right to decide)”: the page's own resolution gives the collision to the informed patient. Acting against a capable refusal is exactly what autonomy's “honor their preference in accepting or not accepting medical care” forbids.",
        },
        {
          label: "D",
          text: "Obtain surrogate consent from the patient’s parents and proceed under their authorization",
          why: "WRONG layer — surrogates speak for patients who LACK capacity for the decision at hand (the informed-consent and surrogates material). This patient demonstrates all four components for this decision, so his own choice governs; a surrogate cannot override a capable patient's refusal.",
        },
        {
          label: "E",
          text: "Administer the antibiotics under the principle of double effect, since the harm of injection-site pain is outweighed by the good of curing the infection",
          why: "WRONG tool — the double effect is the Beneficence row's END-OF-LIFE rule: “facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care.” It prices comfort against side effects in palliation; it never licenses nonconsented treatment of a patient with capacity.",
        },
      ],
      reasoning:
        "The question tests the page's gateway: before any principle operates, who decides whether the patient can decide? The print's answer: the physician, for this specific decision — “Capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care)” — and the guardrail removes the diagnosis as a shortcut: “Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.” He clears all four components (understanding, appreciation, reasoning, expressing a choice), so his refusal is a capable one, and autonomy requires honoring “their preference in accepting or not accepting medical care.” Option B fails on forum and scope (judge = any decision, global); C fails on the printed collision rule (an informed patient has the right to decide); D fails on the surrogate layer (surrogates are for incapacity); E misapplies the double effect (end-of-life comfort rule, not a consent substitute).",
    },
  },
  mnemonics: [
    {
      code: "A BRIGHT NEW JUDGE",
      meaning:
        "A KYP ORIGINAL — the four principles of the printed table in PRINTED order: Autonomy, Beneficence, Nonmaleficence, Justice (A-B-N-J). The phrase's judge is a bonus hook: the JUDGE is the competency judge, who enters this material one block later.",
      memorizes:
        "The four core ethical principles and their printed order (Autonomy first — the hinge; Justice last — the distribution overlay)",
      whenToUse:
        "Any “which principle is in play?” option list — recall the four candidates before reading the options; also the printed-order anchor for table-reconstruction questions.",
      clinical:
        "The order itself teaches (KYP): autonomy leads because the informed patient is the default decision-maker; beneficence and nonmaleficence are the physician's two treatment duties; justice is the population-level overlay where this chapter's epidemiology meets ethics.",
    },
    {
      code: "U-ARE",
      meaning:
        "A KYP ORIGINAL — the four printed components of decision-making: Understanding, Appreciation, Reasoning, Expressing a choice. If the patient can U-ARE, the patient has capacity for THIS decision.",
      memorizes:
        "The Four major components of decision-making and their questions: what do you know / what does it mean to you and why this recommendation / how are you weighing your options / what would you like to do",
      whenToUse:
        "Any bedside or vignette capacity assessment — walk the four questions in order; all four present → capacity for the specific decision; any one absent → impaired for that decision.",
      clinical:
        "The order is a funnel (KYP framing of the printed panel): facts first (understanding), personalization second (appreciation), comparison third (reasoning), output last (expressing a choice) — and a patient can fail at any level while passing the earlier ones.",
    },
    {
      code: "CAPACITY IS CLINICAL, COMPETENCY IS COURT",
      meaning:
        "A KYP ORIGINAL — the determiner-and-forum split of the printed pair: capacity is determined by a PHYSICIAN for a SPECIFIC healthcare-related decision (eg, to refuse medical care); competency is determined by a JUDGE (eg, legally unable to make any healthcare-related decision).",
      memorizes:
        "Who determines what: physician → capacity → one decision; judge → competency → any decision",
      whenToUse:
        "Any question asking who should evaluate the patient's ability to decide, or contrasting “this decision” with “any healthcare decision”; the word “legally” in a stem points to the court.",
      clinical:
        "At the bedside this means the treating physician never needs a court order to accept a capable patient's treatment refusal — and a court ruling is what the stem escalates to only when the question is global.",
    },
    {
      code: "COMFORT FIRST, PATIENT FIRST",
      meaning:
        "A KYP ORIGINAL — the page's two printed priority rules: COMFORT FIRST = the principle of double effect (“facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care”); PATIENT FIRST = the supersede rule (“Traditionally, patient interest supersedes” — over what is best for society, eg, mandatory TB treatment).",
      memorizes:
        "The two resolution rules the exam asks for: comfort over side effects in end-of-life care; patient interest over society's interest in the beneficence conflict",
      whenToUse:
        "Any double-effect stem (opioids at the end of life) and any beneficence-vs-society stem (mandatory treatment, communicable disease) — the two priority rules answer both.",
      clinical:
        "Both rules have the same shape (KYP): a foreseen cost is accepted when the prioritized good is the patient's — comfort in palliation, the patient's interest in the society conflict.",
    },
  ],
  rapidReview: {
    s30: [
      "Autonomy — respect patients as individuals (truth-telling, confidentiality), create conditions for autonomous choice (informed consent), honor their preference in accepting or NOT accepting medical care",
      "Beneficence — “Do good.”; special ethical (fiduciary) duty to act in the patient’s best interest; may conflict with autonomy (an informed patient has the right to decide) or society (eg, mandatory TB treatment); traditionally, patient interest supersedes",
      "Principle of double effect — facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care",
      "Nonmaleficence — “Do no harm.”; must be balanced against beneficence; benefits outweigh risks → a patient may make an informed decision to proceed (most surgeries and medications)",
      "Justice — treat persons fairly and equitably; does not always imply equally (eg, triage)",
      "Capacity — determined by a PHYSICIAN for a SPECIFIC healthcare-related decision (eg, to refuse medical care)",
      "Competency — determined by a JUDGE (eg, legally unable to make any healthcare-related decision)",
      "Decisions made with capacity cannot be revoked simply if the patient later loses capacity",
      "Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions",
      "Four components of decision-making — Understanding, Appreciation, Reasoning, Expressing a choice (U-ARE)",
    ],
    m3: [
      "A BRIGHT NEW JUDGE — Autonomy, Beneficence, Nonmaleficence, Justice in printed order (KYP)",
      "U-ARE — Understanding, Appreciation, Reasoning, Expressing a choice (KYP)",
      "CAPACITY IS CLINICAL, COMPETENCY IS COURT — physician/one decision vs judge/any decision (KYP)",
      "COMFORT FIRST, PATIENT FIRST — double effect + patient interest supersedes (KYP)",
    ],
    m10: [
      "Capacity is DECISION-SPECIFIC: a patient may have capacity to refuse medical care while lacking capacity to manage finances or choose a discharge destination — the physician assesses one healthcare decision at a time",
      "The irrevocability rule runs FORWARD only: a prior capable decision stands if capacity is later lost — it does not make future incapable decisions valid; the patient who recovers capacity can revisit",
      "The supersede sentence reads in context: “May conflict with autonomy (an informed patient has the right to decide) or what is best for society (eg, mandatory TB treatment). Traditionally, patient interest supersedes.” — the autonomy conflict is resolved by the informed-patient parenthesis; the supersede rule resolves the SOCIETY conflict",
      "The four components print BESIDE the capacity table (bbox-pinned side-by-side geometry) with blue square bullets and bold lead words — Understanding, Appreciation, Reasoning, Expressing a choice, each with its printed parenthetical question",
      "The page prints NO mnemonics of its own — no red text, no margin hooks (VLM-confirmed); the two mottos “Do good.” and “Do no harm.” are the Beneficence and Nonmaleficence openers, not mnemonics",
    ],
  },
  recall: [
    {
      q: "Name the four core ethical principles in printed order, with each one's motto where the print gives one.",
      a: "Autonomy; Beneficence (“Do good.”); Nonmaleficence (“Do no harm.”); Justice — the printed order of the book 268 (lower) table.",
    },
    {
      q: "What are autonomy's three printed verbs (the three obligations in its definition)?",
      a: "RESPECT patients as individuals (truth-telling, confidentiality); CREATE conditions necessary for autonomous choice (informed consent); HONOR their preference in accepting or not accepting medical care.",
    },
    {
      q: "Beneficence may conflict with which two things, and what is the printed resolution of each conflict?",
      a: "With AUTONOMY — resolved by the parenthesis “an informed patient has the right to decide”; and with WHAT IS BEST FOR SOCIETY (eg, mandatory TB treatment) — resolved by “Traditionally, patient interest supersedes.”",
    },
    {
      q: "State the principle of double effect as the page prints it.",
      a: "“Principle of double effect—facilitating comfort is prioritized over potential side effects (eg, respiratory depression with opioid use) for patients receiving end-of-life care.”",
    },
    {
      q: "How is nonmaleficence's “Do no harm.” qualified, and what falls into the printed category?",
      a: "It “must be balanced against beneficence; if the benefits outweigh the risks, a patient may make an informed decision to proceed” — and “most surgeries and medications fall into this category.”",
    },
    {
      q: "Justice requires treating persons how — and what does this NOT always imply, with the printed example?",
      a: "“To treat persons fairly and equitably. This does not always imply equally (eg, triage).”",
    },
    {
      q: "Contrast capacity and competency: who determines each, and for what scope?",
      a: "“Capacity is determined by a physician for a specific healthcare-related decision (eg, to refuse medical care). Competency is determined by a judge (eg, legally unable to make any healthcare-related decision).”",
    },
    {
      q: "What happens to decisions made with capacity if the patient later loses capacity, and are intellectual disabilities or mental illnesses exclusion criteria?",
      a: "“Decisions made with capacity cannot be revoked simply if the patient later loses capacity.” And no — “intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition presently impairs their ability to make healthcare decisions.”",
    },
    {
      q: "List the four major components of decision-making with each one's printed question.",
      a: "Understanding (what do you know about your condition/proposed procedure/treatment?); Appreciation (what does your condition mean to you? why do you think your doctor is recommending this course of treatment?); Reasoning (how are you weighing your options?); Expressing a choice (what would you like to do?).",
    },
  ],
  related: [
    {
      title: "Informed consent — autonomy's procedural arm",
      note:
        "Autonomy's second verb — “to create conditions necessary for autonomous choice (informed consent)” — is the consent process itself: what must be disclosed, who can consent, and when consent is valid. This page supplies the principle; the informed-consent topic supplies the procedure.",
      topicId: "informed-consent",
    },
    {
      title: "Surrogates and confidentiality — what happens when capacity is absent",
      note:
        "When the capacity assessment here fails, surrogate decision-makers take over (the spousal/hierarchical and best-interest standards), and autonomy's first verb — truth-telling, confidentiality — is the other half of the same row. Both live on the pages that follow this one in the ETHICS subsection.",
      topicId: "surrogates-confidentiality",
    },
    {
      title: "Challenging scenarios — the exceptions that stress these principles",
      note:
        "The collisions this page names in passing (mandatory TB treatment vs patient interest, end-of-life comfort, refusal of care) are played out as full scenarios — minors, advance directives, physician-assisted dying, compulsory treatment — in the challenging-scenarios material that consumes them.",
      topicId: "challenging-scenarios",
    },
    {
      title: "Pearson correlation coefficient — the other half of book 268",
      note:
        "The pinned page-split's sibling: the UPPER portion of the same printed page (raw lines 1-41) is the Pearson r block — linear correlation, −1 to +1, coefficient of determination, the scatter panels — produced in parallel in this same batch. Book 268 is the chapter's handoff page: statistics above, ethics below.",
      topicId: "correlation-coefficient",
    },
  ],
  crossLinks: [
    {
      subject: "Psychiatry — mental illness and the capacity assessment",
      connection:
        "The not-exclusion-criteria guardrail is psychiatry-adjacent by design: schizophrenia, depression, and psychosis become capacity questions only when the condition PRESENTLY impairs the patient's ability to make the specific healthcare decision — psychiatric stability and insight (appreciation is where impaired insight surfaces) are assessed with the same four components, not inferred from the diagnosis.",
    },
    {
      subject: "Pharmacology — opioids and respiratory depression",
      connection:
        "The double-effect sentence names the pharmacology: opioids cause respiratory depression (μ-receptor-mediated central drive suppression, the overdose mechanism naloxone reverses) — and the ethics page prices that side effect against comfort in end-of-life care, linking the opioid pharmacology topic to beneficence's priority rule.",
    },
    {
      subject: "Infectious disease and public health — tuberculosis control",
      connection:
        "Mandatory TB treatment is the printed beneficence-vs-society case because tuberculosis is the classic communicable-disease conflict: directly observed therapy, isolation, and reporting obligations serve society's interest while the patient's interest traditionally supersedes in the physician's fiduciary frame.",
    },
    {
      subject: "Emergency medicine and trauma — triage",
      connection:
        "Justice's printed example (triage) is the emergency-department distribution problem: fair and equitable allocation of scarce resources (staff, beds, blood) that does not always imply equal treatment — the disaster-medicine counterpart of the justice principle this page defines.",
    },
  ],
};
