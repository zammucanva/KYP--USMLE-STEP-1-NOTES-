import type { KypUsMLENote } from "../types";

// Public Health — PUBH 27 (batch 2). Source: FULL pdf page 300 / book 278
// (Part 1), the FINAL page of the PUBLIC HEALTH SCIENCES chapter (pdf 301
// opens SECTION III — High-Yield Organ Systems) and the LAST page of the
// HEALTHCARE DELIVERY subsection (pdf 298-300, book 276-278). The topic owns
// the WHOLE page, which carries FOUR blocks: (1) "Palliative care" — a
// label + text block: medical care aiming to provide comfort, relieve
// suffering, and improve quality of life in patients with complex or
// life-threatening illness regardless of their diagnosis or prognosis; often
// concurrent with curative or life-prolonging treatment; delivered by an
// interdisciplinary team (eg, physicians, nurses, social workers) in
// hospitals, outpatient clinics, or at home; Hospice care (end-of-life
// care)—form of palliative care for patients with prognosis ≤6 months when
// curative or life-prolonging treatment is no longer wanted or beneficial.
// (2) "Types of medical errors" — an intro sentence (errors may involve
// patient identification, diagnosis, monitoring, healthcare-associated
// infection, medications, procedures, devices, documentation, handoffs) plus
// the DISCLOSURE RULE ("Medical errors should be disclosed to patients,
// independent of immediate outcome (harmful or not)."), then a FOUR-row
// table: Active error (frontline operator, wrong IV pump dose programmed,
// immediate impact), Latent error (processes indirect from operator,
// different types of IV pumps used within same hospital, accident waiting to
// happen), Never event (identifiable, serious, usually preventable, scalpel
// retained in a surgical patient's abdomen; major error that should never
// occur; Sentinel event—a never event that leads to death, permanent harm,
// or severe temporary harm), Near miss (unplanned event, does not result in
// harm but has the potential to do so, pharmacist recognizes a medication
// interaction and cancels the order; narrow prevention of harm that exposes
// dangers). (3) "Medical error analysis" — a TWO-row table with column
// headers DESIGN / mETHODS: Root cause analysis (retrospective approach,
// applied after failure event to prevent recurrence; records and participant
// interviews — 5 whys approach, fishbone/cause-and-effect diagrams, process
// maps — to identify all the underlying problems: process, people,
// environment, equipment, materials, management) vs Failure mode and effects
// analysis (forward-looking approach, applied before process implementation
// to prevent failure occurrence; inductive reasoning to identify all the ways
// a process might fail, prioritized by their probability of occurrence and
// impact on patients). (4) "Causes of medical errors" — a TWO-row table:
// Burnout (prolonged, excessive stress leading to emotional exhaustion,
// depersonalization, leading to reduced professional efficacy), Fatigue
// (sleep/rest deprivation resulting in cognitive impairment and decreased
// attention to detail). CENSUS (pdfimages): ZERO raster images on the page —
// three hairline tables + label/text blocks and no vector figure at all;
// every table is an ORIGINAL KYP ADAPTATION (nothing to REDRAW — there is no
// figure on this page). VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE
// full-page pass, staging-pubh27/vlm-census.txt), confirming: the four
// blocks and their printed order; the Types of medical errors table prints
// NO column headers (nothing between the intro paragraph and the Active
// error row but a hairline rule) and the Causes of medical errors table
// prints none either, while the Medical error analysis table prints DESIGN /
// METHODS; section titles and row labels print in dark navy, with the inline
// lead-ins "Hospice care" and "Sentinel event" also navy; the Medical error
// analysis table prints its leading capital letters in RED (the R of Root
// and of Retrospective, the F of Failure and of Forward-looking —
// pixel-probed to the exact glyph extents, the ONLY red on the page);
// hairline rules only, no zebra striping; NO margin mnemonics, asterisk
// footnotes, images, or icons; the bottom third of the page is white space
// above the footer (the chapter ends here). PRINTED-TEXT QUIRKS carried +
// documented: (1) "SEC TION II" header-space extraction artifact (known,
// carried as-is); (2) the subsection banner "▶ PUBLIC HEALTH SCIENCES—
// HEALTHCARE DELIVERY" prints ONCE visually (in the running-header band) but
// its text layer carries TWO overlapping copies offset ~2.6pt — the raw
// layer interleaves them as "▶▶ PUBLIC / PUBLIC HEALTH / HEALTH SCIENCES—
// HEALTHCARE / SCIENCES—HEALTHCARE DELIVERY / DELIVERY" (pdftotext -bbox:
// PUBLIC at x=334.075 AND x=336.714; DELIVERY at x=515.13 and x=517.77) — a
// doubled-text-layer artifact, NOT two banner instances; unlike pdf 278,
// this page prints NO in-body subsection ribbon (the Healthcare Delivery
// subsection opened on pdf 298), and this banner carries NO small-caps
// lowercase artifact; (3) the column header extracts as "mETHODS"
// (small-caps extraction artifact — the print is small-caps METHODS; carried
// as extracted, the same class as p278's "mEASURES/EXAmPLE"); (4) line-wrap
// hyphenation — the RCA METHODS cell prints "fishbone/cause-and-effect
// diagrams" hyphenated across a line wrap, which the raw text layer merges
// to "cause-andeffect" (the print carries the hyphen; the note's verbatim
// table prints "cause-and-effect" and the merge is documented); (5) the
// "Medical error analysis" heading extracts AFTER its table body in the raw
// layer (raw line 92) although it prints ABOVE the DESIGN/mETHODS header row
// (bbox yMin 466.9 vs 482.8) — a jumbled-extraction-order quirk of the same
// class as p278's figure text; (6) "Types of medical errors" and "Failure
// mode and effects analysis" wrap across two lines in their label cells;
// (7) the curly apostrophe in "surgical patient's abdomen" is as printed.
// ADJUDICATIONS (documented in the manifest too): (A) the VLM transcribed
// "concurent" in the Palliative care block — the text layer prints
// "concurrent" (raw line 17, confirmed by the layout pass); the text layer
// governs and the note carries "concurrent"; (B) the Types of medical errors
// and Causes of medical errors tables print WITHOUT column headers — the
// note's verbatim table blocks therefore use KYP-DESCRIPTIVE column labels
// (marked as such) over verbatim cells, while the Medical error analysis
// table's own DESIGN / mETHODS headers are carried as extracted; (C) the
// brief's four-block description matched the print exactly (all sentences,
// examples, and the error-domain list) — no correction needed; (D) the red
// leading capitals are First Aid's own STYLING (not mnemonics) — documented
// as FA-own furniture and not counted among the mnemonics; (E) the page
// prints NO mnemonics of its own (VLM + census) — all four mnemonics in this
// note are KYP originals, marked as such. PROVENANCE SPLIT: verbatim = the
// four blocks' sentences (the palliative/hospice block, the error-domain
// list + disclosure rule, the four error-type rows with their examples, the
// RCA/FMEA rows, the burnout/fatigue rows); FA-own = the navy label styling,
// the red initial capitals, the hairline tables, the printed examples; KYP-
// original = the two-axis classification grammar (WHERE it sits — operator
// vs system — × WHAT it did — the harm ladder), the harm-ladder ordering
// (near miss → never event → sentinel event), the RCA/FMEA time-axis
// framing, the 2P-2E-2M grouping of RCA's six underlying problems, the exam
// layer, and the four KYP mnemonics ("ACTIVE ACTS, LATENT LURKS", "NEVER
// EVENT, SENTINEL SEQUEL", "RCA REWINDS, FMEA FORECASTS", "PALLIATIVE
// PAIRS, HOSPICE HALTS") — every teaching generalization beyond the printed
// page is flagged as KYP context. DrugCards: none — the page prints systems
// concepts, not drugs (documented as folded-by-absence in the manifest). The
// next pdf page (301) opens SECTION III — High-Yield Organ Systems: this
// note closes the Public Health Sciences chapter.

export const patientSafetyQuality: KypUsMLENote = {
  id: "patient-safety-quality",
  title: "Patient Safety: Medical Errors and Quality Improvement",
  subtitle:
    "The last page of Public Health Sciences is the health system looking at its own failures — and at the comfort it owes the patient while it fixes them. It opens with palliative care: medical care aiming to provide comfort, relieve suffering, and improve quality of life in patients with complex or life-threatening illness regardless of their diagnosis or prognosis — often concurrent with curative or life-prolonging treatment, delivered by an interdisciplinary team of physicians, nurses, and social workers in hospitals, outpatient clinics, or at home — and it narrows to hospice care, a form of palliative care for patients with prognosis ≤6 months when curative or life-prolonging treatment is no longer wanted or beneficial. Then the page turns to harm. Medical errors may involve patient identification, diagnosis, monitoring, healthcare-associated infection, medications, procedures, devices, documentation, or handoffs — and every one of them should be disclosed to patients, independent of the immediate outcome, harmful or not. Four terms form the core quartet: the ACTIVE error occurs at the level of the frontline operator (a wrong IV pump dose programmed) with immediate impact; the LATENT error hides in processes indirect from the operator (different types of IV pumps used within the same hospital) — an accident waiting to happen; the NEVER event is identifiable, serious, and usually preventable (a scalpel retained in a surgical patient's abdomen) — a major error that should never occur — and when it leads to death, permanent harm, or severe temporary harm it is a SENTINEL event; the NEAR MISS is an unplanned event that does not result in harm but has the potential to do so (a pharmacist recognizes a medication interaction and cancels the order). Two analysis tools then attack errors from opposite directions in time — root cause analysis rewinds after the failure, using records, interviews, 5 whys, fishbone diagrams, and process maps to find the underlying problems, while failure mode and effects analysis forecasts before implementation, using inductive reasoning to rank every way a process might fail by probability and impact — and the page closes with the two human causes that keep both tools busy: burnout and fatigue.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Healthcare Delivery",
  pilotCategory:
    "Public Health Sciences — Healthcare Delivery: the patient-safety quartet (active, latent, never/sentinel, near miss) with the printed IV-pump, retained-scalpel, and pharmacist examples; the outcome-independent disclosure rule; root cause analysis vs failure mode and effects analysis on the time axis; the burnout/fatigue causes; and the palliative-vs-hospice boundary (≤6 months, concurrent with curative treatment).",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 278–278 (Healthcare Delivery: Palliative care; Types of medical errors; Medical error analysis; Causes of medical errors)",
  tags: [
    "patient safety",
    "medical errors",
    "quality improvement",
    "active error",
    "latent error",
    "never event",
    "sentinel event",
    "near miss",
    "error disclosure",
    "root cause analysis",
    "failure mode and effects analysis",
    "5 whys",
    "fishbone diagram",
    "process map",
    "burnout",
    "fatigue",
    "palliative care",
    "hospice care",
    "end-of-life care",
    "interdisciplinary team",
    "healthcare delivery",
    "IV pump",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — “Palliative care”: medical care aiming to provide comfort, relieve suffering, and improve quality of life in patients with complex or life-threatening illness regardless of their diagnosis or prognosis; often concurrent with curative or life-prolonging treatment; delivered by interdisciplinary team (eg, physicians, nurses, social workers) in hospitals, outpatient clinics, or at home. Hospice care (end-of-life care)—form of palliative care for patients with prognosis ≤6 months when curative or life-prolonging treatment is no longer wanted or beneficial. BLOCK 2 — “Types of medical errors”: may involve patient identification, diagnosis, monitoring, healthcare-associated infection, medications, procedures, devices, documentation, handoffs; medical errors should be disclosed to patients, independent of immediate outcome (harmful or not). Four rows: Active error — occurs at level of frontline operator (eg, wrong IV pump dose programmed); immediate impact. Latent error — occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital); accident waiting to happen. Never event — adverse event that is identifiable, serious, and usually preventable (eg, scalpel retained in a surgical patient’s abdomen); major error that should never occur; sentinel event—a never event that leads to death, permanent harm, or severe temporary harm. Near miss — unplanned event that does not result in harm but has the potential to do so (eg, pharmacist recognizes a medication interaction and cancels the order); narrow prevention of harm that exposes dangers. BLOCK 3 — “Medical error analysis” (columns DESIGN / mETHODS): Root cause analysis — retrospective approach; applied after failure event to prevent recurrence; uses records and participant interviews (eg, 5 whys approach, fishbone/cause-and-effect diagrams, process maps) to identify all the underlying problems (eg, process, people, environment, equipment, materials, management) that led to an error. Failure mode and effects analysis — forward-looking approach; applied before process implementation to prevent failure occurrence; uses inductive reasoning to identify all the ways a process might fail and prioritizes them by their probability of occurrence and impact on patients. BLOCK 4 — “Causes of medical errors”: Burnout — prolonged, excessive stress leading to emotional exhaustion, depersonalization, leading to reduced professional efficacy. Fatigue — sleep/rest deprivation resulting in cognitive impairment and decreased attention to detail.",
    why:
      "This page closes the chapter because it is the delivery system's self-portrait: everything before it (prevention, payment, communication, ethics) describes what the system should do, and this page describes what it does wrong, how it classifies its failures, how it analyzes them, and why they keep happening. The four error terms are not four arbitrary facts — they are two axes in a grid. Axis 1, WHERE THE ERROR SITS: at the frontline operator (ACTIVE — the wrong IV pump dose programmed, immediate impact) or in the processes behind the operator (LATENT — different types of IV pumps used within same hospital, an accident waiting to happen). First Aid's two examples are deliberately the SAME device: the pump you program badly is active, the pump fleet your hospital bought badly is latent — the exam's cleanest discriminator. Axis 2, WHAT THE ERROR DID: no harm but potential (NEAR MISS — the pharmacist catches the interaction), identifiable + serious + usually preventable harm (NEVER EVENT — the retained scalpel), and the severity escalator on top of it (SENTINEL EVENT — a never event that leads to death, permanent harm, or severe temporary harm). The two analysis tools then split the timeline: RCA owns the past (applied AFTER a failure event, with records, participant interviews, 5 whys, fishbone diagrams, and process maps, to find all the underlying problems) and FMEA owns the future (applied BEFORE process implementation, with inductive reasoning, ranking every way a process might fail by probability of occurrence and impact on patients). And the causes block explains why the tools never run out of work: burnout (emotional exhaustion, depersonalization, reduced professional efficacy) and fatigue (cognitive impairment, decreased attention to detail) are printed as the standing upstream threats. The palliative/hospice block opens the page for the same reason it opens a goals-of-care conversation: safety is not only preventing harm, it is also relieving suffering when harm cannot be prevented.",
    keyIdea:
      "Classify any error event in four moves. MOVE 1 — WHERE DOES IT SIT? At the frontline operator = ACTIVE error (“Occurs at level of frontline operator (eg, wrong IV pump dose programmed)” — immediate impact). In the processes behind the operator = LATENT error (“Occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital)” — accident waiting to happen). MOVE 2 — DID HARM REACH THE PATIENT? An unplanned event that “does not result in harm but has the potential to do so” = NEAR MISS (the pharmacist recognizes the interaction and cancels the order — “narrow prevention of harm that exposes dangers”). MOVE 3 — HOW SERIOUS AND PREVENTABLE? “Identifiable, serious, and usually preventable” = NEVER EVENT (the retained scalpel — “major error that should never occur”); if it “leads to death, permanent harm, or severe temporary harm” it is additionally a SENTINEL EVENT — every sentinel event is a never event, not every never event is sentinel. MOVE 4 — WHAT HAPPENS NEXT? DISCLOSE — “Medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)” — then ANALYZE: after the failure event → ROOT CAUSE ANALYSIS (retrospective; records + participant interviews; 5 whys, fishbone/cause-and-effect diagrams, process maps; identify all the underlying problems — process, people, environment, equipment, materials, management); before process implementation → FAILURE MODE AND EFFECTS ANALYSIS (forward-looking; inductive reasoning; failure modes prioritized by probability of occurrence and impact on patients). And behind everything, the two standing causes: BURNOUT (prolonged, excessive stress → emotional exhaustion, depersonalization → reduced professional efficacy) and FATIGUE (sleep/rest deprivation → cognitive impairment, decreased attention to detail). For the page's opening pair: PALLIATIVE care pairs with cure (any diagnosis, any prognosis, often concurrent with curative or life-prolonging treatment); HOSPICE care halts at ≤6 months (when curative treatment is no longer wanted or beneficial).",
  },
  mechanisms: [
    {
      id: "error-classification-flow",
      title:
        "From latent condition to disclosed event: classifying one error on two axes — where it sits (operator vs system) and what it did (the harm ladder)",
      context:
        "The printed Types of medical errors table (book 278): the four rows read as one causal sequence, not four parallel facts",
      flow: {
        nodes: [
          {
            id: "system",
            label: "THE SYSTEM — latent conditions wait in the processes",
            sublabel:
              "Input — the hospital's processes carry the LATENT error: “Occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital).” Its printed consequence is a warning label: “Accident waiting to happen.” Nothing has gone wrong yet — the mixed pump fleet is simply a hazard installed in the workflow (KYP framing: the latent error is the loaded condition the active error will one day meet).",
            variant: "input",
          },
          {
            id: "operator",
            label: "THE FRONTLINE OPERATOR — the active error happens at the point of care",
            sublabel:
              "Process — the ACTIVE error: “Occurs at level of frontline operator (eg, wrong IV pump dose programmed),” with “Immediate impact.” The float nurse meets the unfamiliar pump; the programming mistake is the visible act. Note that the printed pair of examples is the SAME device in two roles — the dose programmed wrong (active) rides on the pump fleet bought mixed (latent) — the exam's cleanest active/latent discriminator (the pairing is KYP's reading; both examples are the print's own).",
            variant: "process",
          },
          {
            id: "harm",
            label: "THE FORK — did harm reach the patient?",
            sublabel:
              "Process — if the unplanned event “does not result in harm but has the potential to do so,” it is a NEAR MISS: “eg, pharmacist recognizes a medication interaction and cancels the order” — “Narrow prevention of harm that exposes dangers.” If the event is an “adverse event that is identifiable, serious, and usually preventable,” it is a NEVER EVENT: “eg, scalpel retained in a surgical patient’s abdomen” — “Major error that should never occur.”",
            variant: "process",
          },
          {
            id: "sentinel",
            label: "THE SEVERITY ESCALATOR — sentinel event",
            sublabel:
              "Process — “Sentinel event—a never event that leads to death, permanent harm, or severe temporary harm.” The escalator is a subset relation (KYP): every sentinel event is a never event, but a never event becomes sentinel only when the outcome is severe — the retained scalpel is a never event the moment it is found; it is a sentinel event if the patient dies or is permanently harmed.",
            variant: "process",
          },
          {
            id: "disclose",
            label: "DISCLOSE, THEN ANALYZE — the outcome-independent rule",
            sublabel:
              "Output — “Medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)” — near miss, never event, and sentinel event alike. After disclosure, the event is routed to the analysis layer (mechanism 2): root cause analysis if the failure already happened; failure mode and effects analysis to keep the next one from happening at all.",
            variant: "output",
          },
        ],
        edges: [
          { from: "system", to: "operator", label: "the latent condition meets the active act →" },
          { from: "operator", to: "harm", label: "did harm reach the patient? →" },
          { from: "harm", to: "sentinel", label: "death, permanent harm, or severe temporary harm? →" },
          { from: "harm", to: "disclose", label: "near miss or never event — both disclosed" },
          { from: "sentinel", to: "disclose", label: "the severest grade — disclosed and analyzed" },
        ],
      },
    },
    {
      id: "analysis-time-axis",
      title:
        "Two directions of quality improvement: RCA rewinds after the failure, FMEA forecasts before implementation — and burnout and fatigue keep both busy",
      context:
        "The printed Medical error analysis table + the Causes of medical errors table (book 278): the two tools read as one timeline with the causes upstream",
      flow: {
        nodes: [
          {
            id: "causes",
            label: "THE UPSTREAM CAUSES — burnout and fatigue keep generating errors",
            sublabel:
              "Input — the page's last block names the standing threats. Burnout: “Prolonged, excessive stress leading to emotional exhaustion, depersonalization, leading to reduced professional efficacy.” Fatigue: “Sleep/rest deprivation resulting in cognitive impairment and decreased attention to detail.” (KYP framing: the print places the causes AFTER the analysis tools — the page's own way of closing its loop: here is what keeps the tools busy.)",
            variant: "input",
          },
          {
            id: "failure",
            label: "THE FAILURE EVENT — something went wrong",
            sublabel:
              "Process — an error reached the patient (or nearly did). The retrospective door opens: Root cause analysis, “Applied after failure event to prevent recurrence.” Its trigger is always an event that already happened — RCA is the autopsy of a process (KYP gloss of the printed “Retrospective approach”).",
            variant: "process",
          },
          {
            id: "rca",
            label: "RCA — REWIND: records, interviews, 5 whys, fishbone, process maps",
            sublabel:
              "Process — “Uses records and participant interviews (eg, 5 whys approach, fishbone/cause-and-effect diagrams, process maps) to identify all the underlying problems (eg, process, people, environment, equipment, materials, management) that led to an error.” KYP grouping of the six underlying problems — 2 Ps (process, people), 2 Es (environment, equipment), 2 Ms (materials, management) — a checklist that refuses to stop at the operator.",
            variant: "process",
          },
          {
            id: "design",
            label: "THE NEW OR REVISED PROCESS — before it goes live",
            sublabel:
              "Process — the forward-looking door: a process is about to be implemented, and Failure mode and effects analysis is “Applied before process implementation to prevent failure occurrence.” Its trigger is a DESIGN, not an event — FMEA asks what COULD go wrong before anything has (KYP gloss of the printed “Forward-looking approach”).",
            variant: "process",
          },
          {
            id: "fmea",
            label: "FMEA — FORECAST: inductive reasoning, ranked by probability × impact",
            sublabel:
              "Process — “Uses inductive reasoning to identify all the ways a process might fail and prioritizes them by their probability of occurrence and impact on patients.” The output is a ranked list of failure modes — a risk budget for the redesign, not an assignment of blame (KYP: probability × impact is a risk ranking, the same arithmetic as the epidemiologist's risk measures).",
            variant: "process",
          },
          {
            id: "safer",
            label: "THE LOOP CLOSES — a safer process, and the causes still matter",
            sublabel:
              "Output — RCA's fixes and FMEA's redesigns land in the same place: a process with fewer ways to fail. But burnout and fatigue remain the standing upstream causes — the page's final lesson is that quality improvement attacks processes AND protects the people inside them (KYP synthesis of the printed order).",
            variant: "output",
          },
        ],
        edges: [
          { from: "causes", to: "failure", label: "burnout/fatigue raise error risk →" },
          { from: "failure", to: "rca", label: "after the event — rewind" },
          { from: "rca", to: "safer", label: "fix the underlying problems" },
          { from: "design", to: "fmea", label: "before implementation — forecast" },
          { from: "fmea", to: "safer", label: "design the failure modes out" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "patient-safety-map",
      title:
        "Patient safety — the palliative/hospice boundary, the error quartet, the RCA-vs-FMEA time axis, and the causes strip (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 278's four blocks. TOP — the palliative-vs-hospice pair: palliative care (comfort, relieve suffering, improve quality of life — regardless of diagnosis or prognosis, often concurrent with curative or life-prolonging treatment, interdisciplinary team, hospital/clinic/home) beside hospice care (a form of palliative care, prognosis ≤6 months, curative treatment no longer wanted or beneficial). MIDDLE — the error-type quartet with every printed example: Active error (frontline operator, wrong IV pump dose programmed, immediate impact), Latent error (processes indirect from operator, different types of IV pumps used within same hospital, accident waiting to happen), Never event (identifiable, serious, usually preventable, retained scalpel — with the Sentinel event escalator: death, permanent harm, or severe temporary harm), Near miss (no harm but potential, pharmacist cancels the interaction) — over the error-domain strip (patient identification, diagnosis, monitoring, healthcare-associated infection, medications, procedures, devices, documentation, handoffs) and the outcome-independent disclosure rule. LOWER — the RCA-vs-FMEA time axis: RCA's look-back arrow applied AFTER the failure event (records, participant interviews, 5 whys, fishbone/cause-and-effect diagrams, process maps → the 2P-2E-2M underlying problems) vs FMEA's forward arrow applied BEFORE process implementation (inductive reasoning, failure modes prioritized by probability of occurrence and impact on patients). BOTTOM — the causes strip: burnout (emotional exhaustion, depersonalization → reduced professional efficacy) and fatigue (cognitive impairment, decreased attention to detail) feeding the error machinery.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 300 — the page's assets are three hairline tables (no vector figure at all), all rebuilt here as ORIGINAL KYP ADAPTATION in one registry visual. VLM-read at 120dpi (staging-pubh27/vlm-census.txt): section titles and row labels print in dark navy with the inline lead-ins “Hospice care” and “Sentinel event” also navy; the Medical error analysis table prints its leading capitals in RED (R of Root and Retrospective, F of Failure and Forward-looking — pixel-probed, the only red on the page); no zebra striping (hairline rules only); no margin mnemonics, footnotes, images, or icons. The Types of medical errors and Causes of medical errors tables print WITHOUT column headers — the column labels on this diagram and in the note's verbatim tables are KYP-descriptive (documented); the Medical error analysis table's own DESIGN / mETHODS headers are carried as extracted (“mETHODS” is the small-caps artifact). Every printed sentence and example on the diagram is the print's own; the panel arrangement, the two-axis grammar, the harm ladder, and the 2P-2E-2M grouping are KYP's.",
    },
    {
      kind: "table",
      title:
        "Book 278 — the printed Types of medical errors table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's second block: an intro sentence (the error-domain list) plus the disclosure rule, then FOUR rows in printed order — Active error, Latent error, Never event, Near miss. The print carries NO column headers for this table (VLM-confirmed: nothing sits between the intro paragraph and the Active error row but a hairline rule) — the three column labels below are KYP-DESCRIPTIVE; every cell is verbatim.",
      columns: [
        "ERROR TYPE (printed row label)",
        "WHAT IT IS — the printed description cell",
        "THE PRINTED CONSEQUENCE CELL",
      ],
      rows: [
        [
          "Active error",
          "Occurs at level of frontline operator (eg, wrong IV pump dose programmed).",
          "Immediate impact.",
        ],
        [
          "Latent error",
          "Occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital).",
          "Accident waiting to happen.",
        ],
        [
          "Never event",
          "Adverse event that is identifiable, serious, and usually preventable (eg, scalpel retained in a surgical patient’s abdomen).",
          "Major error that should never occur. Sentinel event—a never event that leads to death, permanent harm, or severe temporary harm.",
        ],
        [
          "Near miss",
          "Unplanned event that does not result in harm but has the potential to do so (eg, pharmacist recognizes a medication interaction and cancels the order).",
          "Narrow prevention of harm that exposes dangers.",
        ],
      ],
      caption:
        "Verbatim carry, documented: FOUR rows in printed order (VLM-confirmed — none missing or extra). The block's intro sentence prints above the table: “May involve patient identification, diagnosis, monitoring, healthcare-associated infection, medications, procedures, devices, documentation, handoffs. Medical errors should be disclosed to patients, independent of immediate outcome (harmful or not).” Printed quirks carried: the table prints WITHOUT column headers (the three labels above are KYP-descriptive — adjudicated); the curly apostrophe in “surgical patient’s abdomen” is as printed; “Types of medical errors” wraps across two lines in its label cell; the row labels print in dark navy (VLM + pixel probe). The consequence cells are First Aid's own one-line verdicts — “Immediate impact.” / “Accident waiting to happen.” / “Major error that should never occur.” / “Narrow prevention of harm that exposes dangers.” — and the Never event row's second sentence is where the SENTINEL EVENT definition prints.",
    },
    {
      kind: "list",
      title:
        "Palliative care vs hospice care — the boundary in four questions (KYP's reading of the printed block)",
      intro:
        "The page's first block is a label + text block (not a table — the only block on the page without hairline rows). Every sentence below is the print's own; the four-question arrangement is KYP's.",
      items: [
        {
          lead: "QUESTION 1 — WHAT IS PALLIATIVE CARE?",
          text: "“Medical care aiming to provide comfort, relieve suffering, and improve quality of life in patients with complex or life-threatening illness regardless of their diagnosis or prognosis.” The word “regardless” is the whole point: any diagnosis, any prognosis, any stage of illness — comfort is not gated on terminal status (KYP emphasis of the printed wording).",
        },
        {
          lead: "QUESTION 2 — CAN IT RUN ALONGSIDE TREATMENT?",
          text: "“Often concurrent with curative or life-prolonging treatment.” Palliative care is not hospice: comfort and cure can proceed together — the exam's favorite distinction on this material. Choosing palliative care does not mean abandoning disease-directed therapy.",
        },
        {
          lead: "QUESTION 3 — WHO DELIVERS IT, AND WHERE?",
          text: "“Delivered by interdisciplinary team (eg, physicians, nurses, social workers) in hospitals, outpatient clinics, or at home.” Three professions, three settings — palliative care is a team service delivered wherever the patient is.",
        },
        {
          lead: "QUESTION 4 — WHEN DOES IT BECOME HOSPICE?",
          text: "“Hospice care (end-of-life care)—form of palliative care for patients with prognosis ≤6 months when curative or life-prolonging treatment is no longer wanted or beneficial.” Two gates, both required: the TIME gate (prognosis ≤6 months) and the INTENT gate (curative or life-prolonging treatment is no longer wanted or beneficial). Hospice is a subset of palliative care — every hospice is palliative, not every palliative is hospice (KYP framing of the printed “form of”).",
        },
      ],
    },
    {
      kind: "table",
      title:
        "Book 278 — the printed Medical error analysis table, carried verbatim (DESIGN / mETHODS, as extracted)",
      intro:
        "The page's third block: column headers DESIGN / mETHODS (the raw layer's lowercase “m” in “mETHODS” is the small-caps extraction artifact — the print is small-caps METHODS; carried as extracted, the same class as p278's “mEASURES/EXAmPLE”) and TWO rows in printed order. The first column's header label below is KYP-descriptive (the print labels only the second and third columns).",
      columns: [
        "ANALYSIS METHOD (printed row label)",
        "DESIGN",
        "mETHODS",
      ],
      rows: [
        [
          "Root cause analysis",
          "Retrospective approach. Applied after failure event to prevent recurrence.",
          "Uses records and participant interviews (eg, 5 whys approach, fishbone/cause-and-effect diagrams, process maps) to identify all the underlying problems (eg, process, people, environment, equipment, materials, management) that led to an error.",
        ],
        [
          "Failure mode and effects analysis",
          "Forward-looking approach. Applied before process implementation to prevent failure occurrence.",
          "Uses inductive reasoning to identify all the ways a process might fail and prioritizes them by their probability of occurrence and impact on patients.",
        ],
      ],
      caption:
        "Verbatim carry, documented. Printed quirks: the METHODS cell prints “fishbone/cause-and-effect diagrams” hyphenated across a line wrap — the raw text layer merges it to “cause-andeffect” (the hyphenated print is carried here; the merge is documented); “Failure mode and effects analysis” wraps across two lines in its row-label cell; the row labels and DESIGN-cell openers print their leading capitals in RED (the R of Root and of Retrospective, the F of Failure and of Forward-looking — pixel-probed, the only red on the page; First Aid's own styling, documented, not a mnemonic); the “Medical error analysis” heading prints ABOVE the DESIGN/mETHODS header row (bbox yMin 466.9 vs 482.8) even though the raw text layer extracts it AFTER the table body — a jumbled-extraction-order quirk pinned by bbox + the VLM pass.",
    },
    {
      kind: "table",
      title:
        "Book 278 — the printed Causes of medical errors table, carried verbatim",
      intro:
        "The page's fourth and final block: TWO rows in printed order. The print carries NO column headers for this table (VLM-confirmed) — the two column labels below are KYP-DESCRIPTIVE; the cells are verbatim.",
      columns: [
        "CAUSE (printed row label)",
        "THE PRINTED DEFINITION CELL",
      ],
      rows: [
        [
          "Burnout",
          "Prolonged, excessive stress leading to emotional exhaustion, depersonalization, leading to reduced professional efficacy.",
        ],
        [
          "Fatigue",
          "Sleep/rest deprivation resulting in cognitive impairment and decreased attention to detail.",
        ],
      ],
      caption:
        "Verbatim carry, documented: the print places this block LAST — after the analysis tools — so the page's own arc is errors → analysis → causes (KYP reading: here is what keeps the tools busy). The burnout chain is printed as a three-step cascade (prolonged, excessive stress → emotional exhaustion, depersonalization → reduced professional efficacy); the fatigue chain as a two-step one (sleep/rest deprivation → cognitive impairment AND decreased attention to detail). The row labels print in dark navy like every other label on the page.",
    },
    {
      kind: "steps",
      title: "Classifying any error event in four questions",
      intro:
        "The whole page distilled into an ordered reading path — WHERE, HARM, HOW SERIOUS, WHAT NEXT — applicable to any safety vignette the exam shows, printed on book 278 or not.",
      steps: [
        {
          label: "QUESTION 1 — WHERE DOES THE ERROR SIT: OPERATOR OR SYSTEM?",
          detail:
            "At the frontline operator → ACTIVE error: “Occurs at level of frontline operator (eg, wrong IV pump dose programmed)” — immediate impact. In the processes indirect from the operator → LATENT error: “Occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital)” — accident waiting to happen. The printed pair is the same device twice: the dose programmed wrong vs the fleet bought mixed.",
        },
        {
          label: "QUESTION 2 — DID HARM REACH THE PATIENT?",
          detail:
            "An unplanned event that “does not result in harm but has the potential to do so” → NEAR MISS (eg, pharmacist recognizes a medication interaction and cancels the order) — narrow prevention of harm that exposes dangers. An adverse event that is “identifiable, serious, and usually preventable” → NEVER EVENT (eg, scalpel retained in a surgical patient's abdomen) — major error that should never occur.",
        },
        {
          label: "QUESTION 3 — HOW SEVERE WAS THE OUTCOME?",
          detail:
            "The escalator: “Sentinel event—a never event that leads to death, permanent harm, or severe temporary harm.” Near miss (no harm) < never event (serious, preventable) < sentinel event (death, permanent harm, or severe temporary harm). The subset rule: every sentinel event is a never event; a never event becomes sentinel only when the outcome is severe.",
        },
        {
          label: "QUESTION 4 — WHAT HAPPENS NEXT: DISCLOSE, THEN ANALYZE",
          detail:
            "First, disclose: “Medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)” — the rule covers near misses too. Then analyze: after the failure event → ROOT CAUSE ANALYSIS (retrospective; records + participant interviews; 5 whys, fishbone/cause-and-effect diagrams, process maps; all the underlying problems); before process implementation → FAILURE MODE AND EFFECTS ANALYSIS (forward-looking; inductive reasoning; failure modes prioritized by probability of occurrence and impact on patients).",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Root cause analysis vs failure mode and effects analysis — the exam's favorite see-saw, in the table's own words",
      intro:
        "The two rows of the Medical error analysis table are mirror images: one looks backward from an event that happened, the other forward into a process that has not launched. Every distinguishing feature follows from that one choice of direction.",
      columns: [
        "Root cause analysis — REWIND (after the event)",
        "Failure mode and effects analysis — FORECAST (before implementation)",
      ],
      rows: [
        {
          label: "Direction in time",
          a: "“Retrospective approach.”",
          b: "“Forward-looking approach.”",
        },
        {
          label: "When it is applied",
          a: "“Applied after failure event to prevent recurrence.”",
          b: "“Applied before process implementation to prevent failure occurrence.”",
        },
        {
          label: "How it works",
          a: "“Uses records and participant interviews (eg, 5 whys approach, fishbone/cause-and-effect diagrams, process maps).”",
          b: "“Uses inductive reasoning to identify all the ways a process might fail.”",
        },
        {
          label: "What it produces",
          a: "Identification of “all the underlying problems (eg, process, people, environment, equipment, materials, management) that led to an error.”",
          b: "Failure modes “prioritized … by their probability of occurrence and impact on patients.”",
        },
        {
          label: "The KYP one-liner",
          a: "An autopsy of a process — it refuses to stop at the operator, digging to the 2 Ps, 2 Es, and 2 Ms underneath (KYP).",
          b: "A weather forecast for a process — it ranks the storm risks before launch, probability × impact (KYP).",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page — four stem shapes and one disclosure twist",
      body:
        "SHAPE 1 — CLASSIFY THE ERROR: the stem shows an act and its context and asks active vs latent — route through the printed IV pump pair: the wrong dose PROGRAMMED is active (frontline operator, immediate impact); the different types of IV pumps USED WITHIN THE SAME HOSPITAL are latent (processes indirect from operator, accident waiting to happen). SHAPE 2 — GRADE THE OUTCOME: the options are never event / sentinel event / near miss — no harm but potential = near miss; identifiable + serious + usually preventable = never event (the retained scalpel); death, permanent harm, or severe temporary harm = sentinel event. SHAPE 3 — PICK THE TOOL: after-the-event questions (records, interviews, 5 whys, fishbone diagrams, process maps) → root cause analysis; before-implementation questions (inductive reasoning, failure modes ranked by probability of occurrence and impact on patients) → failure mode and effects analysis. SHAPE 4 — GOALS OF CARE: comfort alongside cure (any diagnosis or prognosis, often concurrent with curative or life-prolonging treatment) → palliative care; prognosis ≤6 months + curative treatment no longer wanted or beneficial → hospice care. THE DISCLOSURE TWIST: whatever the grade, “medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)” — the exam loves asking whether a near miss still gets disclosed (it does).",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The mnemonic ledger — four KYP originals (the page prints none of its own)",
      body:
        "CENSUS: this page prints NO mnemonics of its own — the VLM pass (staging-pubh27/vlm-census.txt) and the pixel census found no margin mnemonics anywhere on pdf 300 (unlike p278's red in-cell mnemonics); the red leading capitals on the Medical error analysis table are First Aid's STYLING, not mnemonics. All four codes below are therefore KYP ORIGINALS, marked as such: (1) “ACTIVE ACTS, LATENT LURKS” — the active error acts at the frontline operator with immediate impact; the latent error lurks in the processes, an accident waiting to happen. (2) “NEVER EVENT, SENTINEL SEQUEL” — a never event is identifiable, serious, and usually preventable; the sentinel event is its severe sequel: death, permanent harm, or severe temporary harm. (3) “RCA REWINDS, FMEA FORECASTS” — root cause analysis rewinds after the failure event; failure mode and effects analysis forecasts before implementation (with the 2P-2E-2M grouping of RCA's six underlying problems). (4) “PALLIATIVE PAIRS, HOSPICE HALTS” — palliative care pairs with curative or life-prolonging treatment at any prognosis; hospice care halts curative treatment at ≤6 months, when it is no longer wanted or beneficial.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — one pump, one scalpel, one catch, one consult",
      intro:
        "First Aid plants four concrete clinical scenes on this page; each is an anchor for a different exam question, and all four are printed (the clinical framing is KYP's).",
      items: [
        {
          lead: "THE IV PUMP PAIR — one device, two error types",
          text: "The wrong IV pump dose programmed is the printed ACTIVE error (frontline operator, immediate impact); different types of IV pumps used within same hospital is the printed LATENT error (processes indirect from operator, accident waiting to happen). Same machine, two axes — the act of programming vs the fleet that was bought. When a vignette hands you a device error, ask which of the two the stem is actually describing.",
        },
        {
          lead: "THE RETAINED SCALPEL — never event, and possibly sentinel",
          text: "“Scalpel retained in a surgical patient's abdomen” is the printed never-event example: identifiable, serious, usually preventable — a major error that should never occur. If the same patient dies or suffers permanent harm (or severe temporary harm), the event additionally meets the sentinel-event definition. The object does not change; the outcome decides the grade.",
        },
        {
          lead: "THE PHARMACIST'S CATCH — the near miss and the disclosure duty",
          text: "“Pharmacist recognizes a medication interaction and cancels the order” is the printed near-miss example: an unplanned event that does not result in harm but has the potential to do so — a narrow prevention of harm that exposes dangers. And the printed rule still applies to it: medical errors should be disclosed to patients, independent of immediate outcome (harmful or not).",
        },
        {
          lead: "THE WELLNESS PAIR — burnout and fatigue as safety problems",
          text: "The printed CAUSES are burnout (prolonged, excessive stress → emotional exhaustion, depersonalization → reduced professional efficacy) and fatigue (sleep/rest deprivation → cognitive impairment, decreased attention to detail). They print on a patient-safety page, not a wellness page: the impaired operator is the mechanism by which latent conditions become active errors (KYP synthesis) — which is why work-hour and staffing interventions are patient-safety interventions.",
        },
        {
          lead: "THE PALLIATIVE/HOSPICE CONSULT — comfort at any stage",
          text: "Palliative care aims to provide comfort, relieve suffering, and improve quality of life in patients with complex or life-threatening illness regardless of their diagnosis or prognosis — often concurrent with curative or life-prolonging treatment — delivered by an interdisciplinary team (eg, physicians, nurses, social workers) in hospitals, outpatient clinics, or at home. It becomes hospice care (end-of-life care) at prognosis ≤6 months, when curative or life-prolonging treatment is no longer wanted or beneficial. The consult is appropriate on day 1 of a complex illness, not only at the end (KYP framing of the printed “regardless” and “often concurrent”).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A hospital uses different types of IV pumps within the same hospital. A float nurse, unfamiliar with the unit's pump, programs a wrong IV pump dose; the patient receives the incorrect infusion within minutes.",
        discriminator:
          "The printed pair on one device: the programming act vs the process behind it — “frontline operator” vs “processes indirect from operator”",
        concept: "Active vs latent error",
        answer:
          "The nurse's programming is an ACTIVE error (occurs at level of frontline operator — eg, wrong IV pump dose programmed — with immediate impact). The hospital's mixed pump fleet is the LATENT error (occurs in processes indirect from operator but impacts patient care — eg, different types of IV pumps used within same hospital — an accident waiting to happen).",
      },
      {
        stem: "A surgical patient is readmitted with abdominal pain and sepsis; imaging reveals a scalpel retained in a surgical patient's abdomen from an operation two weeks earlier, and the patient dies of the complication.",
        discriminator:
          "“Identifiable, serious, and usually preventable” plus an outcome of death — the two printed definitions stacked",
        concept: "Never event and sentinel event",
        answer:
          "The retained scalpel is a NEVER EVENT — an adverse event that is identifiable, serious, and usually preventable; a major error that should never occur. Because it led to the patient's death, it is also a SENTINEL EVENT — a never event that leads to death, permanent harm, or severe temporary harm. (Every sentinel event is a never event; the outcome decides the grade.)",
      },
      {
        stem: "Before a hospital implements a new chemotherapy-ordering pathway, a quality committee works through the ordering process step by step, lists every way the process might fail, and ranks the failure modes by how likely each is to occur and how badly each would affect patients.",
        discriminator:
          "Applied BEFORE process implementation + inductive reasoning + prioritization “by their probability of occurrence and impact on patients”",
        concept: "Failure mode and effects analysis",
        answer:
          "Failure mode and effects analysis — the forward-looking approach, applied before process implementation to prevent failure occurrence; it uses inductive reasoning to identify all the ways a process might fail and prioritizes them by their probability of occurrence and impact on patients. (The after-the-event counterpart is root cause analysis.)",
      },
      {
        stem: "A patient with metastatic cancer continues chemotherapy aimed at slowing disease progression while a separate team manages her pain, nausea, and family meetings; her prognosis is expected to exceed a year. She asks whether the comfort service means she is “giving up.”",
        discriminator:
          "Comfort care running CONCURRENT with curative/life-prolonging treatment, with no ≤6-month prognosis",
        concept: "Palliative care vs hospice care",
        answer:
          "This is PALLIATIVE CARE — medical care aiming to provide comfort, relieve suffering, and improve quality of life in patients with complex or life-threatening illness regardless of their diagnosis or prognosis; it is often concurrent with curative or life-prolonging treatment, and is delivered by an interdisciplinary team (eg, physicians, nurses, social workers) in hospitals, outpatient clinics, or at home. HOSPICE care is the form of palliative care reserved for prognosis ≤6 months when curative or life-prolonging treatment is no longer wanted or beneficial.",
      },
    ],
    traps: [
      {
        a: "Active error — frontline operator, wrong IV pump dose programmed, immediate impact",
        b: "Latent error — processes indirect from operator, different types of IV pumps within same hospital, accident waiting to happen",
        whyConfused:
          "Both printed examples are the SAME device (the IV pump), and both sit inside one vignette about a pump overdose; the stem usually contains BOTH the act and the system condition",
        keyDifference:
          "WHERE the error lives: the active error is the ACT at the point of care (programming the wrong dose — it happens now, with immediate impact); the latent error is the CONDITION in the processes (the mixed pump fleet — it existed before the nurse ever arrived, an accident waiting to happen)",
        clue:
          "Ask “could this be photographed at the moment of the mistake?” — if yes, active; if it is a property of the system that was there all along, latent.",
      },
      {
        a: "Never event — identifiable, serious, usually preventable (eg, scalpel retained in a surgical patient's abdomen)",
        b: "Sentinel event — a never event that leads to death, permanent harm, or severe temporary harm",
        whyConfused:
          "Both describe the retained scalpel; the exam gives the object and asks for the term, and both terms feel “severe”",
        keyDifference:
          "The OUTCOME, not the object: the retained scalpel is a never event the moment it is identified (a major error that should never occur); it becomes a sentinel event only when the outcome is death, permanent harm, or severe temporary harm. Sentinel is a subset of never — every sentinel event is a never event, not every never event is sentinel",
        clue:
          "Look for the outcome sentence (died / permanent harm / severe temporary harm) — present: sentinel event; absent: never event.",
      },
      {
        a: "Near miss — unplanned event that does not result in harm but has the potential to do so (pharmacist cancels the interaction)",
        b: "Latent error — processes indirect from operator, accident waiting to happen",
        whyConfused:
          "Both are “no harm yet” states, and both are defined by potential rather than outcome; a stem about “an error that never reached the patient” sits right on the border",
        keyDifference:
          "An EVENT vs a CONDITION: the near miss is an unplanned event that HAPPENED and was caught (the order was placed, the pharmacist caught it — a narrow prevention of harm that exposes dangers); the latent error is a standing hazard in the processes with no event at all yet (the mixed pumps). A near miss has a story; a latent error has only a setting",
        clue:
          "If the stem narrates a catch (“the pharmacist recognizes … and cancels the order”), it is a near miss; if it describes a system property, it is a latent error.",
      },
      {
        a: "Root cause analysis — retrospective, applied AFTER failure event; records + participant interviews; 5 whys, fishbone/cause-and-effect diagrams, process maps; the underlying problems",
        b: "Failure mode and effects analysis — forward-looking, applied BEFORE process implementation; inductive reasoning; failure modes prioritized by probability of occurrence and impact on patients",
        whyConfused:
          "Both are quality-improvement analyses of the same processes, and both ask “why would/does this fail?” — the tool names do not reveal their direction",
        keyDifference:
          "The TIMING: RCA is triggered by an event that already happened (it digs to the underlying problems — process, people, environment, equipment, materials, management); FMEA is triggered by a process that has not launched (it forecasts failure modes and ranks them). Past autopsy vs pre-launch forecast",
        clue:
          "Past tense + an actual event → RCA; future/conditional tense + “before implementation” → FMEA.",
      },
    ],
    pivots: [
      {
        lookAlike: "A “which analysis approach?” question with both tools in the options",
        differentiator:
          "Only the position in time separates them — did the failure already occur, or is the process about to be implemented?",
        correctPath:
          "Applied after failure event to prevent recurrence + records and participant interviews + 5 whys / fishbone diagrams / process maps → root cause analysis. Applied before process implementation to prevent failure occurrence + inductive reasoning + prioritized by probability of occurrence and impact on patients → failure mode and effects analysis.",
      },
      {
        lookAlike: "A harm-grading question with near miss, never event, and sentinel event in one option list",
        differentiator:
          "Two forks in sequence: did harm reach the patient, and if so how severe was the outcome?",
        correctPath:
          "No harm but the potential for harm (the pharmacist's catch) → near miss. Harm occurred and the event is identifiable, serious, usually preventable (the retained scalpel) → never event. That event led to death, permanent harm, or severe temporary harm → sentinel event. Remember the disclosure rule runs across all three grades: errors are disclosed independent of immediate outcome (harmful or not).",
      },
      {
        lookAlike: "A goals-of-care question that offers both “palliative care” and “hospice care”",
        differentiator:
          "Two gates: the prognosis clock (≤6 months) and the intent toward curative or life-prolonging treatment",
        correctPath:
          "Comfort, relieve suffering, improve quality of life — regardless of diagnosis or prognosis, often CONCURRENT with curative or life-prolonging treatment, interdisciplinary team (physicians, nurses, social workers), hospital/clinic/home → palliative care. A form of palliative care for prognosis ≤6 months when curative or life-prolonging treatment is NO LONGER WANTED OR BENEFICIAL → hospice care (end-of-life care).",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old woman hospitalized with heart failure is started on a continuous heparin infusion. Her hospital uses different types of IV pumps within the same hospital, and the float nurse covering her unit that night programs an unfamiliar pump incorrectly — a wrong IV pump dose — delivering a tenfold overdose. The patient develops a large gastrointestinal bleed and suffers permanent renal injury. The hospital convenes a review committee, which pulls the medication records, interviews the nurse, the pharmacist, and the charge nurse, and applies the 5 whys approach and fishbone diagrams to trace the event to the underlying problems: the mixed pump fleet, the absence of a float-orientation checklist, and the overnight staffing mix. The committee's report recommends replacing the pump fleet and standardizing the float orientation.",
      question:
        "Which of the following best describes the committee's analysis approach?",
      options: [
        {
          label: "A",
          text: "Root cause analysis",
          correct: true,
          why: "CORRECT — the committee took a RETROSPECTIVE approach, applied AFTER the failure event to prevent recurrence: it “uses records and participant interviews (eg, 5 whys approach, fishbone/cause-and-effect diagrams, process maps) to identify all the underlying problems (eg, process, people, environment, equipment, materials, management) that led to an error.” The stem's own tools (records, interviews, 5 whys, fishbone diagrams) and its refusal to stop at the nurse (pump fleet, checklist, staffing) are RCA's signature.",
        },
        {
          label: "B",
          text: "Failure mode and effects analysis",
          why: "TEMPTING but wrong — FMEA is the “forward-looking approach,” “applied before process implementation to prevent failure occurrence”: it uses inductive reasoning to identify all the ways a process MIGHT fail and prioritizes them by their probability of occurrence and impact on patients. Here the failure already happened and the committee looked backward at actual records and participants — the opposite direction in time. (The pump-fleet replacement that follows is where FMEA would next be appropriate, before the new fleet is rolled out — KYP context.)",
        },
        {
          label: "C",
          text: "Near-miss reporting",
          why: "WRONG grade of event — a near miss is “an unplanned event that does not result in harm but has the potential to do so” (eg, the pharmacist recognizing and cancelling an interaction). This event resulted in permanent harm, so it is not a near miss; and near miss names the EVENT type, not the retrospective analysis the committee performed.",
        },
        {
          label: "D",
          text: "Sentinel event review",
          why: "TEMPTING but the wrong layer — the EVENT is correctly graded: a heparin overdose from a wrong programmed dose is identifiable, serious, and usually preventable (a never event), and because it led to permanent harm it is also a sentinel event. But “sentinel event” classifies the EVENT, not the analysis approach; the question asks what the committee DID, and what it did — records, interviews, 5 whys, fishbone diagrams, underlying problems — is root cause analysis.",
        },
        {
          label: "E",
          text: "Error disclosure to the patient",
          why: "WRONG task — disclosure is the printed DUTY (“medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)”), and the team certainly owes this patient a disclosure. But disclosure is a communication obligation to the patient, not the retrospective analysis method the committee used to find the underlying problems.",
        },
      ],
      reasoning:
        "The question tests the time axis of the Medical error analysis table. The committee worked backward from an event that had already occurred, using records and participant interviews, the 5 whys approach, and fishbone/cause-and-effect diagrams, to identify the underlying problems — the printed definition of ROOT CAUSE ANALYSIS (“retrospective approach … applied after failure event to prevent recurrence”). The vignette also layers the rest of the page: the nurse's programming is the ACTIVE error (frontline operator, immediate impact); the mixed pump fleet is the LATENT error (processes indirect from operator — the accident waiting to happen that the active error set off); the outcome (permanent harm from an identifiable, serious, usually preventable event) makes it a NEVER EVENT that led to permanent harm — a SENTINEL EVENT; and the disclosure duty runs independent of outcome. Option B fails on time direction (FMEA is applied before process implementation); option C fails on harm (a near miss does not result in harm); option D names the event grade, not the analysis; option E names the duty, not the method.",
    },
  },
  mnemonics: [
    {
      code: "ACTIVE ACTS, LATENT LURKS",
      meaning:
        "A KYP ORIGINAL — the active error ACTS: “occurs at level of frontline operator (eg, wrong IV pump dose programmed),” with “immediate impact.” The latent error LURKS: “occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital)” — “accident waiting to happen.”",
      memorizes:
        "The two WHERE-it-sits error types, their printed IV-pump examples, and their printed consequence lines (immediate impact vs accident waiting to happen)",
      whenToUse:
        "Any vignette that both narrates a mistake at the point of care and describes a system condition behind it — classify the act as active and the condition as latent; the printed pair is the same device twice (the dose programmed vs the fleet bought).",
      clinical:
        "The pair also predicts the fix (KYP context): active errors are addressed at the operator (training, checklists at the point of care); latent errors only yield to system redesign (standardizing the pump fleet) — the reason RCA refuses to stop at the person.",
    },
    {
      code: "NEVER EVENT, SENTINEL SEQUEL",
      meaning:
        "A KYP ORIGINAL — the NEVER EVENT: “adverse event that is identifiable, serious, and usually preventable (eg, scalpel retained in a surgical patient’s abdomen)” — “major error that should never occur.” The SENTINEL EVENT is its severe SEQUEL: “a never event that leads to death, permanent harm, or severe temporary harm.”",
      memorizes:
        "The never-event definition and example, and the sentinel event's subset relation — death, permanent harm, or severe temporary harm",
      whenToUse:
        "Any harm-grading question: no harm but potential → near miss; identifiable + serious + usually preventable → never event; that event with death, permanent harm, or severe temporary harm → sentinel event. The outcome sentence is the grade decider.",
      clinical:
        "The retained scalpel is the classic operating-room never event (KYP context: counts, instrument reconciliation, and readbacks exist precisely because the event is “usually preventable”); the sentinel grading triggers the hospital's severest review pathway.",
    },
    {
      code: "RCA REWINDS, FMEA FORECASTS",
      meaning:
        "A KYP ORIGINAL — ROOT CAUSE ANALYSIS REWINDS: retrospective, “applied after failure event to prevent recurrence,” using “records and participant interviews (eg, 5 whys approach, fishbone/cause-and-effect diagrams, process maps)” to find “all the underlying problems” — which group as 2 Ps (process, people), 2 Es (environment, equipment), 2 Ms (materials, management). FAILURE MODE AND EFFECTS ANALYSIS FORECASTS: forward-looking, “applied before process implementation to prevent failure occurrence,” using “inductive reasoning to identify all the ways a process might fail,” “prioritized … by their probability of occurrence and impact on patients.”",
      memorizes:
        "Both analysis tools — direction (retrospective vs forward-looking), timing (after failure vs before implementation), method (records + interviews + 5 whys/fishbone/process maps vs inductive reasoning + probability × impact ranking), and RCA's six underlying problems",
      whenToUse:
        "Any “which analysis approach?” stem: past tense + an actual event + digging for underlying problems → RCA; future/conditional + pre-launch process + ranked failure modes → FMEA. The 2P-2E-2M grouping answers any “which underlying problems?” recall question.",
      clinical:
        "Hospitals run RCA after every sentinel event and FMEA before every high-risk rollout (chemo ordering, blood banking — KYP context); the same process can pass through both, FMEA first at design and RCA after an unforeseen failure.",
    },
    {
      code: "PALLIATIVE PAIRS, HOSPICE HALTS",
      meaning:
        "A KYP ORIGINAL — PALLIATIVE CARE PAIRS: “medical care aiming to provide comfort, relieve suffering, and improve quality of life in patients with complex or life-threatening illness regardless of their diagnosis or prognosis,” “often concurrent with curative or life-prolonging treatment,” delivered by an “interdisciplinary team (eg, physicians, nurses, social workers)” in “hospitals, outpatient clinics, or at home.” HOSPICE CARE HALTS: “a form of palliative care for patients with prognosis ≤6 months when curative or life-prolonging treatment is no longer wanted or beneficial” (end-of-life care).",
      memorizes:
        "The palliative-vs-hospice boundary: any diagnosis/prognosis + concurrent with treatment vs ≤6-month prognosis + curative treatment no longer wanted or beneficial; plus palliative care's team and settings",
      whenToUse:
        "Any goals-of-care stem: comfort alongside active treatment → palliative care (and reassure the patient it is not “giving up”); prognosis ≤6 months + curative treatment no longer wanted or beneficial → hospice care.",
      clinical:
        "The consult timing is the clinical lesson (KYP context): because palliative care is “regardless of … prognosis” and “often concurrent with curative … treatment,” the team is appropriate from the day a complex illness is diagnosed — hospice is the later, narrower form, not the only form.",
    },
  ],
  rapidReview: {
    s30: [
      "Palliative care — comfort, relieve suffering, improve quality of life in complex or life-threatening illness REGARDLESS of diagnosis or prognosis; often concurrent with curative or life-prolonging treatment; interdisciplinary team (physicians, nurses, social workers) in hospitals, outpatient clinics, or at home",
      "Hospice care (end-of-life care) — form of palliative care; prognosis ≤6 months when curative or life-prolonging treatment is no longer wanted or beneficial",
      "Medical errors may involve — patient identification, diagnosis, monitoring, healthcare-associated infection, medications, procedures, devices, documentation, handoffs; DISCLOSED to patients independent of immediate outcome (harmful or not)",
      "Active error — frontline operator (eg, wrong IV pump dose programmed); immediate impact",
      "Latent error — processes indirect from operator (eg, different types of IV pumps used within same hospital); accident waiting to happen",
      "Never event — identifiable, serious, usually preventable (eg, scalpel retained in a surgical patient's abdomen); major error that should never occur; SENTINEL EVENT = a never event that leads to death, permanent harm, or severe temporary harm",
      "Near miss — unplanned event that does not result in harm but has the potential to do so (eg, pharmacist recognizes a medication interaction and cancels the order); narrow prevention of harm that exposes dangers",
      "Root cause analysis — retrospective, after failure event, to prevent recurrence; records + participant interviews (5 whys, fishbone/cause-and-effect diagrams, process maps) → all the underlying problems (process, people, environment, equipment, materials, management)",
      "Failure mode and effects analysis — forward-looking, before process implementation, to prevent failure occurrence; inductive reasoning; failure modes prioritized by probability of occurrence and impact on patients",
      "Burnout — prolonged, excessive stress → emotional exhaustion, depersonalization → reduced professional efficacy; Fatigue — sleep/rest deprivation → cognitive impairment, decreased attention to detail (the printed CAUSES)",
    ],
    m3: [
      "ACTIVE ACTS, LATENT LURKS — the act at the operator (wrong dose programmed, immediate impact) vs the condition in the processes (mixed pump fleet, accident waiting to happen) (KYP)",
      "NEVER EVENT, SENTINEL SEQUEL — identifiable/serious/usually preventable → never event; death, permanent harm, or severe temporary harm → sentinel event (KYP)",
      "RCA REWINDS, FMEA FORECASTS — after the event (records, interviews, 5 whys, fishbone, process maps, 2P-2E-2M problems) vs before implementation (inductive, probability × impact) (KYP)",
      "PALLIATIVE PAIRS, HOSPICE HALTS — comfort alongside cure at any prognosis vs ≤6 months + curative treatment no longer wanted or beneficial (KYP)",
    ],
    m10: [
      "The IV-pump pair: the print uses the SAME device for both examples — the wrong dose programmed (active) and the different types of pumps used within the same hospital (latent) — the exam's cleanest active/latent discriminator",
      "Sentinel ⊂ never: every sentinel event is a never event; a never event becomes sentinel only when the outcome is death, permanent harm, or severe temporary harm — the retained scalpel's grade depends on the outcome sentence, not the object",
      "The disclosure rule is outcome-independent: “Medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)” — near misses included, not only events that caused harm",
      "The page's own arc — errors (what they are) → analysis (RCA rewinds, FMEA forecasts) → causes (burnout, fatigue) — and the page is the chapter's LAST (pdf 301 opens Section III); the palliative/hospice block opens it: the system's duty of comfort alongside its duty of safety",
    ],
  },
  recall: [
    {
      q: "What is palliative care, and can it be given alongside curative treatment?",
      a: "Medical care aiming to provide comfort, relieve suffering, and improve quality of life in patients with complex or life-threatening illness regardless of their diagnosis or prognosis — often concurrent with curative or life-prolonging treatment.",
    },
    {
      q: "Who delivers palliative care, and in what settings?",
      a: "An interdisciplinary team (eg, physicians, nurses, social workers), in hospitals, outpatient clinics, or at home.",
    },
    {
      q: "What defines hospice care?",
      a: "Hospice care (end-of-life care) — a form of palliative care for patients with prognosis ≤6 months when curative or life-prolonging treatment is no longer wanted or beneficial.",
    },
    {
      q: "List the domains medical errors may involve, and state the disclosure rule.",
      a: "Patient identification, diagnosis, monitoring, healthcare-associated infection, medications, procedures, devices, documentation, handoffs — and medical errors should be disclosed to patients, independent of immediate outcome (harmful or not).",
    },
    {
      q: "Define active vs latent error, with the printed examples and consequence lines.",
      a: "Active error — occurs at level of frontline operator (eg, wrong IV pump dose programmed); immediate impact. Latent error — occurs in processes indirect from operator but impacts patient care (eg, different types of IV pumps used within same hospital); accident waiting to happen.",
    },
    {
      q: "What is a never event, and what makes it a sentinel event?",
      a: "An adverse event that is identifiable, serious, and usually preventable (eg, scalpel retained in a surgical patient's abdomen) — a major error that should never occur. A sentinel event is a never event that leads to death, permanent harm, or severe temporary harm.",
    },
    {
      q: "What is a near miss, with the printed example?",
      a: "An unplanned event that does not result in harm but has the potential to do so (eg, pharmacist recognizes a medication interaction and cancels the order) — a narrow prevention of harm that exposes dangers.",
    },
    {
      q: "Contrast root cause analysis and failure mode and effects analysis — direction, timing, and method.",
      a: "Root cause analysis — retrospective approach, applied after failure event to prevent recurrence; uses records and participant interviews (eg, 5 whys approach, fishbone/cause-and-effect diagrams, process maps) to identify all the underlying problems (eg, process, people, environment, equipment, materials, management) that led to an error. Failure mode and effects analysis — forward-looking approach, applied before process implementation to prevent failure occurrence; uses inductive reasoning to identify all the ways a process might fail and prioritizes them by their probability of occurrence and impact on patients.",
    },
    {
      q: "What are the two printed causes of medical errors, with their full chains?",
      a: "Burnout — prolonged, excessive stress leading to emotional exhaustion, depersonalization, leading to reduced professional efficacy. Fatigue — sleep/rest deprivation resulting in cognitive impairment and decreased attention to detail.",
    },
  ],
  related: [
    {
      title: "Insurance and payment models — quality's financial engine",
      note:
        "The Healthcare Delivery subsection's payment page: value-based models attach money to safety and quality, and serious, preventable events are the classic trigger for payment consequences — the safety taxonomy on this page is what those payment levers are built to prevent (KYP bridge between the subsection's two pages).",
      topicId: "insurance-payment-models",
    },
    {
      title: "Disease prevention and prophylaxis — the population side of avoiding harm",
      note:
        "Prevention operates at the population level (primary, secondary, tertiary); patient safety operates at the encounter level (active/latent errors, near misses, never events) — the two are the same impulse, avoiding harm, at different scales.",
      topicId: "disease-prevention-prophylaxis",
    },
    {
      title: "Challenging scenarios — delivering bad news and error disclosure",
      note:
        "The printed rule that errors are disclosed “independent of immediate outcome (harmful or not)” is EXECUTED through the communication techniques of the challenging-scenarios material — the disclosure conversation is a structured skill, not just a policy.",
      topicId: "challenging-scenarios",
    },
    {
      title: "Informed consent — the other disclosure duty",
      note:
        "Consent is disclosure BEFORE treatment (risks, benefits, alternatives); error disclosure is disclosure AFTER harm — the two duties bookend every clinical encounter, and both are autonomy in action (KYP framing linking the Ethics and Healthcare Delivery subsections).",
      topicId: "informed-consent",
    },
  ],
  crossLinks: [
    {
      subject: "Behavioral science and psychiatry — physician well-being",
      connection:
        "The burnout chain printed here (prolonged, excessive stress → emotional exhaustion, depersonalization → reduced professional efficacy) is the same triad tested under physician well-being in behavioral science, and fatigue's cognitive impairment is the sleep-deprivation physiology — on this page they appear as patient-safety CAUSES, which is exactly why wellness interventions are safety interventions.",
    },
    {
      subject: "Ethics — disclosure, honesty, and autonomy",
      connection:
        "The outcome-independent disclosure rule is the patient-safety corollary of the ethical principles covered in the Ethics subsection: autonomy requires the patient know what happened to them, and beneficence demands the system learn from it — disclosure (to the patient) and analysis (RCA/FMEA, internal) are the two halves of the same duty.",
    },
    {
      subject: "Healthcare delivery — quality measurement and payment",
      connection:
        "Never events and sentinel events are the units of quality reporting: registries, hospital review pathways, and payment models all count them — the insurance/payment-models page supplies the financial machinery that makes the taxonomy on this page consequential.",
    },
    {
      subject: "Communication skills — handoffs and closed-loop communication",
      connection:
        "The printed error-domain list names HANDOFFS as a source of medical errors — the communication-skills subsection's structured handoff and readback techniques are the countermeasure: the domain list and the communication tools are two ends of one thread (the list prints them as problems; the communication pages print the fixes).",
    },
  ],
};
