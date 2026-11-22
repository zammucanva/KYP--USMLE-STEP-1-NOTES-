import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 3. Source: pdf page 279 / book 257, LOWER
// PORTION ONLY — a pinned page-split (the p252 pharmacology convention).
// The topic's scope STARTS at the "Off-label drug use" navy heading (raw
// text line 86) and runs to the page footer; the upper portion (the
// "Clinical therapeutic trial" block and the five-phase "Can I SWIM?"
// figure, raw lines 1-85) belongs to clinical-therapeutic-trials (pubh2,
// produced in parallel in this same batch). TWO blocks are owned: (1)
// "Off-label drug use" — the definition (use in a form, population group,
// or dosage not specifically approved by the FDA), the two printed reasons
// (treatment of an illness with no approved pharmacologic treatment;
// exploring alternative treatments after failure of approved options), and
// the printed example (tricyclic antidepressants for neuropathic/chronic
// pain); (2) "Bradford Hill criteria" — the lead-in ("A group of
// principles that provide limited support (ie, necessary but not
// sufficient criteria) for establishing evidence of a causal relationship
// between presumed cause and effect") and NINE criteria rows in printed
// order: Strength, Consistency, Specificity, Temporality, Biological
// gradient, Plausibility, Coherence, Experiment, Analogy — every
// definition carried verbatim in the note's table block. Census
// (pdfimages): ZERO raster images on pdf 279 — pure text, thin rules, and
// vector. VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page
// pass, staging-pubh3/vlm-census.txt): the lower portion prints with
// navy/dark-blue bold term headings and right-column definitions, thin
// light rules separating the criteria rows, NO red text below the split
// (unlike the upper figure's red "Work?"/"Market?" highlights), and NO
// margin notes, mnemonics, asterisk footnotes, or images; the boundary is
// clean — the phase figure's last printed line ("Postmarketing
// surveillance of patients with disease of interest. Open label.") ends
// the upper portion, then the "Off-label drug use" heading opens the
// lower. QUIRKS carried verbatim + documented: (1) the printed lowercase
// abbreviation conventions "(ie, necessary but not sufficient criteria)"
// and "(eg, animal studies, in vitro studies)" carry with the comma and no
// periods, exactly as printed; (2) "dose-response relationship" and
// "neuropathic/chronic pain" carry their hyphen and slash as printed;
// (3) the "SEC TION II" header-space extraction artifact prints on this
// page but sits in the UPPER portion's header band (raw line 10) — outside
// this topic's pinned scope, so it is documented here and carried by the
// clinical-therapeutic-trials topic instead. ADJUDICATIONS, documented in
// the census file and the manifest: (1) the chapter census titles this
// topic "Bradford Hill Criteria: Judging Causation"; the production title
// "Off-Label Use and the Bradford Hill Criteria: Judging Causation" adds
// the off-label block because the pinned lower-portion scope owns BOTH
// printed blocks (both are carried whole); (2) the print agrees with the
// brief — exactly NINE criteria rows, none missing, none extra (raw text
// layer + pdftotext -layout + the VLM pass all agree); (3) the off-label
// block prints as a navy heading + paragraph, not a table — carried here
// as a four-row verbatim table (a KYP adaptation) so the evidence audit
// can pin every printed word; (4) DrugCards are FOLDED (documented in the
// manifest): the page prints a single drug-class example (tricyclic
// antidepressants) with no mechanism/uses/adverse-effect rows to trace,
// so the DrugCard shape does not fit. PROVENANCE SPLIT: verbatim = the
// off-label definition/reasons/example, the Bradford Hill lead-in, and
// all nine criterion definitions (the note's two table blocks carry every
// printed word of the lower portion); First Aid's own = nothing beyond the
// printed text — NO mnemonic prints anywhere in the lower portion
// (VLM-confirmed), so all four mnemonics in this note are KYP originals,
// marked as such; KYP-original = the MEASURE/THINK/GATE decoder grouping,
// the four-move causal-inference protocol, the association-vs-causation
// compare, the exam layer (patterns/traps/pivots/mini-case), and every
// "KYP context" gloss (temporality as the only criterion that must hold,
// the smoking-lung-cancer worked example, the TCA/amitriptyline
// pharmacology link, off-label ≠ illegal or experimental).

export const bradfordHillCriteria: KypUsMLENote = {
  id: "bradford-hill-criteria",
  title: "Off-Label Use and the Bradford Hill Criteria: Judging Causation",
  subtitle:
    "The lower half of book page 257 answers two questions the exam loves to blur together. First: what does it mean to prescribe a drug off-label? The FDA approval attaches to a specific form, population group, and dosage — prescribing outside that label (the printed example: tricyclic antidepressants for neuropathic/chronic pain) is off-label use, done when an illness has no approved pharmacologic treatment or when the approved options have failed. Second: when an exposure and an outcome travel together, when may you call the exposure a CAUSE? The Bradford Hill criteria are a group of principles that provide limited support — the page's own parenthetical is 'necessary but not sufficient criteria' — for establishing evidence of a causal relationship between presumed cause and effect. Nine principles, each one line long: Strength (the stronger the association, the more evidence), Consistency (repeated observations in multiple distinct samples), Specificity (one cause, one effect), Temporality (the cause precedes the effect by an expected amount of time), Biological gradient (dose-response), Plausibility (a conceivable mechanism), Coherence (no conflict with scientific consensus), Experiment (animal and in vitro evidence), and Analogy (comparison to an established cause-effect pair). Learn them as a courtroom, not a checklist: temporality is the gate the claim must pass, the measured criteria and the thinking criteria pile up support, and the verdict is always 'limited support' — never mathematical proof.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public health — causal inference and off-label prescribing: the nine Bradford Hill criteria (strength, consistency, specificity, temporality, biological gradient, plausibility, coherence, experiment, analogy) with their printed one-line definitions and the necessary-but-not-sufficient verdict, plus off-label drug use (definition, the two reasons, the tricyclic-antidepressant example)",
  difficulty: 1,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 257 (lower) (Epidemiology and Biostatistics: Off-label drug use; Bradford Hill criteria)",
  tags: [
    "bradford hill criteria",
    "causation",
    "causal inference",
    "association vs causation",
    "strength",
    "consistency",
    "specificity",
    "temporality",
    "biological gradient",
    "dose-response relationship",
    "plausibility",
    "coherence",
    "experiment",
    "analogy",
    "necessary but not sufficient",
    "off-label drug use",
    "off-label prescribing",
    "FDA approval",
    "tricyclic antidepressants",
    "neuropathic pain",
    "chronic pain",
    "epidemiology",
    "public health sciences",
  ],
  core: {
    what:
      "Two printed blocks, carried whole. BLOCK 1 — “Off-label drug use”: “Use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA.” The two printed reasons: “treatment of an illness with no approved pharmacologic treatment or exploring alternative treatments after failure of approved options.” The printed example: “use of tricyclic antidepressants for treating neuropathic/chronic pain.” BLOCK 2 — “Bradford Hill criteria”: “A group of principles that provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect” — then NINE criteria rows in printed order, each with its one-line definition: 1 Strength — “Association does not necessarily imply causation, but the stronger the association, the more evidence for causation.” 2 Consistency — “Repeated observations of the findings in multiple distinct samples.” 3 Specificity — “The more specific the presumed cause is to the effect, the stronger the evidence for causation.” 4 Temporality — “The presumed cause precedes the effect by an expected amount of time.” 5 Biological gradient — “Greater effect observed with greater exposure to the presumed cause (dose-response relationship).” 6 Plausibility — “A conceivable mechanism exists by which the cause may lead to the effect.” 7 Coherence — “The presumed cause and effect do not conflict with existing scientific consensus.” 8 Experiment — “Empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies).” 9 Analogy — “The presumed cause and effect are comparable to a similar, established cause and effect.”",
    why:
      "This half-page is where First Aid teaches the difference between SEEING TWO THINGS TOGETHER and PROVING ONE CAUSES THE OTHER. Every observational design on the previous page ends the same way — the cross-sectional row literally prints “does not establish causality” — and the Bradford Hill criteria are the bridge across that gap: a structured way to argue from association toward causation when a randomized experiment is impossible (you cannot ethically randomize people to smoking, asbestos, or radiation). The page's own framing is the exam's framing: the criteria are “necessary but not sufficient” — they provide “limited support,” never proof — so an answer choice that says a criterion PROVES causation is wrong by definition. Strength's printed definition even carries its own caveat (“Association does not necessarily imply causation”), the single most-tested sentence in biostatistics. The off-label block earns its place on the same page because it is the clinical mirror of the trials material above the split: FDA approval (the endpoint of Phase 3) defines the label — the disease, the form, the population group, the dosage — and off-label use is everything beyond it, which is why the printed example is a drug class repurposed across indications (an antidepressant prescribed for pain). Together the two blocks say: evidence gets you a label, and judgment — nine questions, not a formula — gets you a cause.",
    keyIdea:
      "Run the nine as a courtroom, not a checklist (the KYP decoder). MOVE 1 — THE GATE: Temporality is the one criterion that must hold — the presumed cause has to precede the effect by an expected amount of time; if the effect came first, causation fails no matter how strong the association (KYP gloss of the printed line). MOVE 2 — THE MEASURED FOUR (evidence you COUNT): Strength — how big is the association, with the page's caveat that association does not necessarily imply causation; Consistency — does the finding replicate in multiple distinct samples; Biological gradient — is there a dose-response relationship (greater exposure, greater effect); Experiment — is there empirical evidence (animal studies, in vitro studies). MOVE 3 — THE THINKING FOUR (evidence you REASON): Specificity — is this the one cause for this one effect; Plausibility — does a conceivable mechanism exist; Coherence — does anything conflict with existing scientific consensus; Analogy — is there a comparable, established cause and effect. MOVE 4 — THE VERDICT: the group provides limited support — necessary but not sufficient — so the correct exam answer is always “supports causation,” never “proves causation.” And for the block above the fold: off-label = beyond the FDA-approved form, population group, or dosage — the two printed reasons are NO APPROVED DRUG or THE APPROVED ONES FAILED.",
  },
  mechanisms: [
    {
      id: "causal-verdict-map",
      title:
        "How an association becomes a causal claim: the gate, the measured evidence, and the thinking evidence",
      context:
        "The printed Bradford Hill criteria block (book 257 lower) — the page's own necessary-but-not-sufficient frame",
      flow: {
        nodes: [
          {
            id: "association",
            label: "AN OBSERVED ASSOCIATION — presumed cause + effect travel together",
            sublabel:
              "Input — the raw material every causal question starts from: an exposure and an outcome that co-occur (a risk factor and a disease, a drug and a side effect). The page's first printed sentence warns what this is NOT: “Association does not necessarily imply causation” — the Strength row's own caveat. Confounding, bias, and chance can all manufacture association without causation (the neighbors this note links to).",
            variant: "input",
          },
          {
            id: "gate",
            label: "THE GATE — Temporality: cause precedes effect by an expected amount of time",
            sublabel:
              "Process — the one criterion that must hold before the others even matter: “The presumed cause precedes the effect by an expected amount of time.” If the effect predates the exposure, the causal claim fails at the door (KYP gloss: temporality is the only logically necessary criterion — reverse it and causation is impossible). The phrase “expected amount of time” also arms the latency question: a cause that acts after a 20-year latency must show effects 20 years after exposure begins, not before.",
            variant: "process",
          },
          {
            id: "measured",
            label: "THE MEASURED FOUR — Strength · Consistency · Biological gradient · Experiment",
            sublabel:
              "Process — the criteria you can COUNT. Strength: the stronger the association, the more evidence for causation. Consistency: repeated observations of the findings in multiple distinct samples — replication across populations, settings, and designs. Biological gradient: greater effect observed with greater exposure (the dose-response relationship). Experiment: empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies) — the closest the list comes to interventional proof.",
            variant: "process",
          },
          {
            id: "thinking",
            label: "THE THINKING FOUR — Specificity · Plausibility · Coherence · Analogy",
            sublabel:
              "Process — the criteria you REASON. Specificity: the more specific the presumed cause is to the effect, the stronger the evidence (one cause, one effect). Plausibility: a conceivable mechanism exists by which the cause may lead to the effect. Coherence: the presumed cause and effect do not conflict with existing scientific consensus. Analogy: the presumed cause and effect are comparable to a similar, established cause and effect. These weigh biology and prior knowledge, not new numbers (the MEASURE/THINK split is a KYP decoder).",
            variant: "process",
          },
          {
            id: "verdict",
            label: "THE VERDICT — limited support: necessary but not sufficient",
            sublabel:
              "Output — the printed lead-in's own ruling: “A group of principles that provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect.” No number of passing criteria PROVES causation, and no single criterion (beyond the gate) is required — they accumulate support. The exam translation: answer choices say “supports causation,” never “proves.”",
            variant: "output",
          },
        ],
        edges: [
          { from: "association", to: "gate", label: "ask FIRST: which came first?" },
          { from: "gate", to: "measured", label: "order holds → count the evidence" },
          { from: "gate", to: "verdict", label: "order fails → causation fails (KYP gloss)" },
          { from: "measured", to: "thinking", label: "then weigh the biology" },
          { from: "thinking", to: "verdict", label: "support accumulates — never to proof" },
          { from: "measured", to: "verdict", label: "how big · replicated · dose-response · shown" },
        ],
      },
    },
    {
      id: "off-label-boundary-map",
      title:
        "How a drug crosses the FDA-approval boundary: the label's three axes and the two printed reasons",
      context:
        "The printed Off-label drug use block (book 257 lower), read against the trials material above the split",
      flow: {
        nodes: [
          {
            id: "label",
            label: "THE FDA LABEL — a drug is approved for a specific form, population group, and dosage",
            sublabel:
              "Input — what Phase 3 wins a drug (the page above the split): an approval that attaches to the disease treated, the formulation, the population, and the dose. The printed definition slices the label into exactly these axes: “Use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA” is off-label — cross ANY ONE axis and the use is off-label (KYP decoder: three axes, one boundary).",
            variant: "input",
          },
          {
            id: "reason1",
            label: "REASON 1 — the illness has no approved pharmacologic treatment",
            sublabel:
              "Process — the first printed reason: “treatment of an illness with no approved pharmacologic treatment.” When no approved drug exists, prescribers reach past the label on purpose: rare diseases, pediatric populations, and refractory conditions live here (KYP context: pediatrics is the classic off-label territory because approvals lag behind practice).",
            variant: "process",
          },
          {
            id: "reason2",
            label: "REASON 2 — the approved options have failed",
            sublabel:
              "Process — the second printed reason: “exploring alternative treatments after failure of approved options.” The approved drugs were tried and failed (or were not tolerated), so the clinician explores alternatives — the stepwise escape from the label that the printed TCA example embodies when antidepressants are prescribed for pain rather than depression.",
            variant: "process",
          },
          {
            id: "example",
            label: "THE PRINTED EXAMPLE — tricyclic antidepressants for neuropathic/chronic pain",
            sublabel:
              "Process — the page's own case: “use of tricyclic antidepressants for treating neuropathic/chronic pain.” An antidepressant class prescribed as an analgesic is off-label use in its purest form: same drug, different disease. KYP context for the pharmacology link: TCAs (amitriptyline, nortriptyline) inhibit monoamine reuptake and block sodium channels in hyperexcitable nociceptive neurons, which is why they work in neuropathic pain at doses below the antidepressant range.",
            variant: "process",
          },
          {
            id: "bridge",
            label: "THE BRIDGE — evidence, judgment, and the boundary between them",
            sublabel:
              "Output — the two blocks of the lower page are one lesson. The label is what EVIDENCE bought (the trials and phases above the split); off-label use is what JUDGMENT buys when the evidence runs out; and the Bradford Hill criteria are the structure of that judgment when the question is causation. Off-label ≠ illegal or experimental (KYP context: it is common, legal, and a professional-judgment call — and its risks and benefits are exactly what postmarketing surveillance watches).",
            variant: "output",
          },
        ],
        edges: [
          { from: "label", to: "reason1", label: "no approved drug exists →" },
          { from: "label", to: "reason2", label: "approved drugs failed →" },
          { from: "reason1", to: "example", label: "reach past the label" },
          { from: "reason2", to: "example", label: "explore alternatives" },
          { from: "example", to: "bridge", label: "an antidepressant prescribed for pain" },
          { from: "label", to: "bridge", label: "evidence → label; judgment → beyond it" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "bradford-hill-map",
      title:
        "The off-label boundary and the nine criteria as a courtroom: the off-label panel, the necessary-but-not-sufficient verdict band, and the 3×3 criteria grid (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 257's lower portion: the OFF-LABEL DRUG USE panel carrying the printed definition verbatim with the three FDA-approval axes as chips (FORM / POPULATION GROUP / DOSAGE), the two printed reasons (no approved pharmacologic treatment; alternative treatments after failure of approved options), and the printed tricyclic-antidepressant example; the NECESSARY BUT NOT SUFFICIENT verdict band anchored on the printed lead-in verbatim, with the association → causation bridge glyph; and the nine criteria as a 3×3 card grid in printed order — Strength, Consistency, Specificity, Temporality, Biological gradient, Plausibility, Coherence, Experiment, Analogy — each card with its printed definition, a vector glyph, the question it asks, and a color tag grouping the criteria MEASURED (strength, consistency, biological gradient, experiment), THINKING (specificity, plausibility, coherence, analogy), and THE GATE (temporality).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 279 — the lower portion is pure text with navy bold term headings, right-column definitions, and thin light rules (VLM-read at 120dpi, staging-pubh3/vlm-census.txt; no red text, no mnemonics, no margin notes, no images below the split). The diagram is an ORIGINAL KYP ADAPTATION: every criterion name and definition is preserved from the print, but the panel layout, the verdict band, the 3×3 grid, the glyphs, and the MEASURE/THINK/GATE grouping are KYP's. The full printed text is additionally carried verbatim in this note's two table blocks. The pinned split is drawn in the diagram's footer: the upper portion of the page (Clinical therapeutic trial + the “Can I SWIM?” phase figure) belongs to clinical-therapeutic-trials.",
    },
    {
      kind: "table",
      title:
        "Book 257 lower, block 1 — the printed Off-label drug use block, carried verbatim",
      intro:
        "The page's first lower-portion block prints as a navy heading plus one paragraph and an example line. It is carried here as a four-row verbatim table (a KYP adaptation of the printed paragraph — every printed word preserved) so the evidence audit can pin each sentence: the definition names the three axes of an FDA approval (form, population group, dosage), the reasons sentence carries both printed reasons in one line, and the example line is the page's own case.",
      columns: ["ELEMENT", "PRINTED TEXT (VERBATIM)"],
      rows: [
        [
          "Heading (navy, in print)",
          "Off-label drug use",
        ],
        [
          "Definition — the three axes of the label",
          "Use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA.",
        ],
        [
          "Reasons — both printed reasons, one sentence",
          "Reasons for off-label use include treatment of an illness with no approved pharmacologic treatment or exploring alternative treatments after failure of approved options.",
        ],
        [
          "Example — the printed case",
          "Example: use of tricyclic antidepressants for treating neuropathic/chronic pain.",
        ],
      ],
      caption:
        "Verbatim carry of the printed block (raw text lines 86-91 of pdf 279; the block ends the lower portion's first unit). Documented: the two reasons print inside ONE sentence joined by “or” — (1) treatment of an illness with NO approved pharmacologic treatment, (2) exploring ALTERNATIVE treatments after failure of approved options. The example prints with the slash as shown (“neuropathic/chronic pain”). The definition's three axes — form, population group, dosage — are the FDA label's own coordinates (KYP gloss): crossing any one of them makes the use off-label. Off-label use is legal prescribing beyond the label, not an experimental or contraindicated use (KYP context).",
    },
    {
      kind: "table",
      title:
        "Book 257 lower, block 2 — the printed Bradford Hill criteria, all nine rows carried verbatim (PRINTED row order)",
      intro:
        "The page's second lower-portion block: the navy “Bradford Hill criteria” heading, the two-line lead-in definition with the printed parenthetical “(ie, necessary but not sufficient criteria),” then NINE criterion rows — navy term on the left, one-line definition on the right, thin rules between rows — in printed order: Strength, Consistency, Specificity, Temporality, Biological gradient, Plausibility, Coherence, Experiment, Analogy. Every row is carried verbatim; the KYP group tags (MEASURED / THINKING / THE GATE) are appended in brackets for the decoder layer and are NOT printed.",
      columns: ["CRITERION (printed order)", "PRINTED DEFINITION (VERBATIM)"],
      rows: [
        [
          "1 Strength [MEASURED]",
          "Association does not necessarily imply causation, but the stronger the association, the more evidence for causation.",
        ],
        [
          "2 Consistency [MEASURED]",
          "Repeated observations of the findings in multiple distinct samples.",
        ],
        [
          "3 Specificity [THINKING]",
          "The more specific the presumed cause is to the effect, the stronger the evidence for causation.",
        ],
        [
          "4 Temporality [THE GATE]",
          "The presumed cause precedes the effect by an expected amount of time.",
        ],
        [
          "5 Biological gradient [MEASURED]",
          "Greater effect observed with greater exposure to the presumed cause (dose-response relationship).",
        ],
        [
          "6 Plausibility [THINKING]",
          "A conceivable mechanism exists by which the cause may lead to the effect.",
        ],
        [
          "7 Coherence [THINKING]",
          "The presumed cause and effect do not conflict with existing scientific consensus.",
        ],
        [
          "8 Experiment [MEASURED]",
          "Empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies).",
        ],
        [
          "9 Analogy [THINKING]",
          "The presumed cause and effect are comparable to a similar, established cause and effect.",
        ],
      ],
      caption:
        "Verbatim carry of the printed criteria rows (raw text lines 93-133 of pdf 279). The lead-in, carried whole: “A group of principles that provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect.” Documented quirks: the parenthetical abbreviations print lowercase with a comma and no periods — “(ie, necessary but not sufficient criteria)” and “(eg, animal studies, in vitro studies)” — carried exactly as printed; “dose-response relationship” prints with the hyphen. The bracketed MEASURED / THINKING / THE GATE tags are the KYP decoder (evidence you count vs evidence you reason vs the one criterion that must hold) and are NOT printed on the page. ADJUDICATION: the print carries exactly NINE rows — none missing, none extra (raw text layer + pdftotext -layout + the VLM pass all agree).",
    },
    {
      kind: "list",
      title:
        "The decoder — what each criterion is actually asking (KYP's reading of the nine)",
      intro:
        "The printed definitions are one line each; this block restates each criterion as the QUESTION it asks, so a vignette sentence maps onto a criterion in one step. Grouped by the KYP courtroom decoder: the gate, the measured four, the thinking four.",
      items: [
        {
          lead: "THE GATE — TEMPORALITY: “which came first?”",
          text: "The presumed cause precedes the effect by an expected amount of time. Ask: in the vignette's timeline, does the exposure BEGIN before the outcome APPEARS — and after the right latency (an exposure with a 20-year latency should show effects two decades later)? KYP gloss: temporality is the only criterion that MUST hold — every other criterion can strengthen a case, but if the effect predates the cause, causation is impossible. The exam's favorite formulation: “the only criterion that is required for causation.”",
        },
        {
          lead: "THE MEASURED FOUR — STRENGTH, CONSISTENCY, BIOLOGICAL GRADIENT, EXPERIMENT",
          text: "Strength: HOW BIG? — the stronger the association, the more evidence for causation, with the printed caveat that association does not necessarily imply causation (a strong OR/RR is support, not proof). Consistency: DOES IT REPLICATE? — repeated observations of the findings in multiple distinct samples (different populations, places, designs). Biological gradient: IS THERE A DOSE-RESPONSE? — greater effect observed with greater exposure (more pack-years, more mesothelioma). Experiment: CAN IT BE SHOWN? — empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies) — the interventional criterion, the RCT's echo inside a causal judgment (KYP link).",
        },
        {
          lead: "THE THINKING FOUR — SPECIFICITY, PLAUSIBILITY, COHERENCE, ANALOGY",
          text: "Specificity: ONE CAUSE, ONE EFFECT? — the more specific the presumed cause is to the effect, the stronger the evidence (KYP context: the weakest fit for multifactorial chronic disease, where many causes produce one effect and one cause produces many). Plausibility: IS THERE A MECHANISM? — a conceivable mechanism exists by which the cause may lead to the effect (pathophysiology supplies the story). Coherence: DOES IT CONFLICT? — the presumed cause and effect do not conflict with existing scientific consensus (it fits what is already known — natural history, lab findings, dose-time patterns; KYP gloss). Analogy: SEEN BEFORE? — the presumed cause and effect are comparable to a similar, established cause and effect (another drug in the same class did the same thing; KYP context: the softest of the nine).",
        },
        {
          lead: "THE VERDICT — NECESSARY BUT NOT SUFFICIENT (the printed lead-in, unpacked)",
          text: "The page's own ruling on the whole group: the principles “provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect.” Read it as the exam does: no criterion alone establishes causation, the set as a whole does not prove it either, and an answer choice claiming proof (or claiming one specific criterion is “sufficient”) is wrong by the page's own wording. Causation on this framework is a weight-of-evidence verdict, not a computation (KYP gloss).",
        },
        {
          lead: "THE OFF-LABEL BLOCK — THE OTHER SIDE OF THE SPLIT'S LESSON",
          text: "The off-label block compresses to: OFF-LABEL = use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA — three axes, one boundary (KYP decoder). REASON 1: no approved pharmacologic treatment exists for the illness. REASON 2: exploring alternative treatments after failure of approved options. PRINTED EXAMPLE: tricyclic antidepressants for neuropathic/chronic pain. The pairing with the criteria is deliberate: the label is what evidence bought, off-label prescribing is judgment beyond the evidence, and the criteria structure judgment when the question is causation (KYP synthesis).",
        },
      ],
    },
    {
      kind: "steps",
      title:
        "Judging a cause-effect claim in four moves (the KYP protocol for any causal-inference stem)",
      intro:
        "The nine criteria distilled into an ordered reading path — GATE, MEASURE, THINK, VERDICT — applicable to any vignette that shows an exposure-outcome pair and asks about causation.",
      steps: [
        {
          label: "MOVE 1 — CHECK THE GATE: which came first?",
          detail:
            "Temporality first: does the presumed cause precede the effect by an expected amount of time? If the vignette's timeline reverses (the outcome appears before the exposure begins), the causal claim fails here and no other criterion rescues it (KYP gloss). If the timeline holds — or the stem describes latency (“symptoms began months after starting exposure”) — the sentence is demonstrating TEMPORALITY: answer and move on.",
        },
        {
          label: "MOVE 2 — COUNT THE MEASURED EVIDENCE: strength · consistency · gradient · experiment",
          detail:
            "Scan the stem for numbers and replication: a big association (strong OR/RR) = STRENGTH; the same finding in different populations, studies, or countries = CONSISTENCY; more exposure → more disease (higher dose, longer duration, pack-years) = BIOLOGICAL GRADIENT, the dose-response relationship; animal or in vitro data = EXPERIMENT. Each sentence in a rich vignette usually maps to exactly one of these.",
        },
        {
          label: "MOVE 3 — WEIGH THE THINKING EVIDENCE: specificity · plausibility · coherence · analogy",
          detail:
            "Scan for biology and prior knowledge instead of numbers: one cause uniquely producing one effect = SPECIFICITY; a named mechanism from pathophysiology = PLAUSIBILITY; agreement with the established natural history and literature (nothing conflicts) = COHERENCE; a parallel with an already-accepted cause-effect pair (another drug in the class, a related carcinogen) = ANALOGY.",
        },
        {
          label: "MOVE 4 — RENDER THE VERDICT: supports, never proves",
          detail:
            "Whatever the mix, the verdict language is the printed lead-in's: the criteria “provide limited support (ie, necessary but not sufficient criteria)” — so the answer is “evidence supporting a causal relationship,” never “proof of causation.” Two classic wrong-answer shapes: a single criterion offered as SUFFICIENT (wrong — none is), and a strong association offered as PROOF (wrong — “association does not necessarily imply causation” is printed in the Strength row itself).",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Association vs causation — what studies measure vs what the nine criteria support",
      intro:
        "The page's deepest distinction, printed inside the Strength row's first clause (“Association does not necessarily imply causation”) and in the lead-in's “limited support.” This compare holds the two concepts apart the way the exam does.",
      columns: [
        "ASSOCIATION — what the study measures",
        "CAUSATION — what the criteria support",
      ],
      rows: [
        {
          label: "What it is",
          a: "Two variables traveling together: exposed people have more (or less) disease than unexposed people. Quantified as odds ratio, relative risk, attributable risk — the 2×2 table's output (the quantifying-risk page).",
          b: "The claim that the exposure MAKES the disease happen — that changing the exposure would change the outcome. Never established by a single measure.",
        },
        {
          label: "What establishes it",
          a: "A study with a valid design: the observational designs measure it (case-control → OR, cohort → RR), which is why the observational-studies page prints “does not establish causality” for its weaker rows.",
          b: "The Bradford Hill criteria, applied as a group: they “provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship.”",
        },
        {
          label: "What breaks it",
          a: "Bias and confounding — a third variable or a systematic error can manufacture an association with no causation behind it (selection bias, recall bias, a confounder tied to both exposure and outcome).",
          b: "Failing the gate: if the presumed cause does not precede the effect by an expected amount of time, causation fails no matter how strong the association (KYP gloss).",
        },
        {
          label: "The strength link",
          a: "A STRONG association is more evidence FOR causation — the Strength criterion is literally about the size of the measured association.",
          b: "…but “association does not necessarily imply causation” (printed, Strength row): strength upgrades support, it never converts association into proof.",
        },
        {
          label: "The exam's question shape",
          a: "“Which measure quantifies this association?” / “What study design generated it?” — answered from the 2×2 and design pages.",
          b: "“Which criterion does this sentence demonstrate?” / “Which is required for causation?” — answered by mapping the sentence to one of the nine (temporality for “required,” KYP gloss).",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — definition-matching in both directions, plus the off-label one-liner",
      body:
        "Three question shapes cover this material. (1) SENTENCE → CRITERION: the stem describes an exposure-outcome pair and one highlighted sentence — “the same association was reproduced in three countries” → CONSISTENCY (repeated observations in multiple distinct samples); “workers with higher solvent exposure had more neuropathy” → BIOLOGICAL GRADIENT (dose-response); “a known neurotoxic mechanism exists” → PLAUSIBILITY; “similar effects were already accepted for a related compound” → ANALOGY; “symptoms appeared only months after exposure began” → TEMPORALITY. (2) CRITERION → DEFINITION (reverse matching): “Which criterion states that association does not necessarily imply causation, but stronger associations are more evidence?” → STRENGTH; “Which refers to empirical evidence from animal and in vitro studies?” → EXPERIMENT; “Which requires no conflict with existing scientific consensus?” → COHERENCE. (3) THE CAUSATION-PHILOSOPHY item: “Which single criterion must be satisfied for a causal inference?” → TEMPORALITY (KYP gloss — the gate); “Do the Bradford Hill criteria prove causation?” → NO — they provide limited support, necessary but not sufficient. And the off-label one-liner: a patient prescribed a drug for an unapproved indication (classically TCAs for neuropathic/chronic pain) → “this is an example of off-label drug use,” with the reason chosen from the two printed ones (no approved treatment exists, or approved options failed).",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "What prints on the page vs what KYP adds (the provenance card)",
      body:
        "PRINTED (carried verbatim in the two table blocks): the off-label definition, both reasons, and the example; the criteria lead-in with “(ie, necessary but not sufficient criteria)”; and all nine criterion definitions. NO MNEMONIC prints anywhere in the lower portion — VLM-confirmed at 120dpi (the upper portion's “Can I SWIM?” belongs to the clinical-trials topic above the split) — so the four ALL-CAPS codes in this note's Memory section are KYP ORIGINALS, not First Aid's. The page's own color furniture: navy/dark-blue bold term headings, definitions in the right column, thin light rules between rows, and NO red text below the split (unlike the upper figure's red “Work?”/“Market?” highlights) — VLM-documented. The MEASURE/THINK/GATE grouping, the courtroom framing, the four-move protocol, the association-vs-causation compare, the temporality-as-gate gloss, and every “KYP context” note (smoking-lung cancer as the classic causal case, amitriptyline's sodium-channel analgesia, pediatrics as off-label territory) are KYP's, marked as such throughout.",
    },
  ],
  clinical: [
    {
      kind: "callout",
      variant: "clinical",
      title:
        "Off-label prescribing in practice — the printed TCA example, decoded at the bedside",
      body:
        "The page's printed example is a real clinical pattern: “use of tricyclic antidepressants for treating neuropathic/chronic pain.” A patient with diabetic distal polyneuropathy or postherpetic neuralgia (KYP context for the classic indications) may leave with a prescription for amitriptyline or nortriptyline — an antidepressant class used as an ANALGESIC, at doses typically below the antidepressant range (KYP context). Why it works: TCAs inhibit serotonin/norepinephrine reuptake in descending pain pathways and block sodium channels on hyperexcitable nociceptive neurons (KYP context — the pharmacology chapter's mechanism). Why it is OFF-LABEL rather than contraindicated: the FDA approved the molecule for depression, not for neuropathic pain — the disease (and often the dose band) sits outside the label's approved population and indication. The two printed reasons tell you when a clinician reaches this way: the illness has NO approved pharmacologic treatment, or the approved options FAILED. The exam pairs this with the ethics of prescribing: off-label use is legal and common (especially in pediatrics and rare disease, KYP context), it is a professional-judgment call best made with the patient's informed awareness, and harms that surface beyond the label are exactly what Phase 4 postmarketing surveillance is designed to catch (the trials page above the split).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 61-year-old man with painful diabetic distal polyneuropathy has failed gabapentin and pregabalin. His physician prescribes low-dose nortriptyline, which he fills with a label reading “indication: depression.” He asks why he is taking an antidepressant for pain.",
        discriminator:
          "The drug–indication mismatch is the whole question: an approved molecule prescribed for a disease outside its FDA-approved label — the printed definition of off-label use, with the printed example class (tricyclic antidepressants for neuropathic/chronic pain)",
        concept: "Off-label drug use: the three label axes (form, population group, dosage) and the two printed reasons",
        answer:
          "Off-label drug use — use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA. Here the printed reason in play is the second one: exploring alternative treatments after failure of approved options (gabapentin and pregabalin failed). The printed example is exactly this pattern: tricyclic antidepressants for treating neuropathic/chronic pain.",
      },
      {
        stem: "An investigator reports that workers exposed to an industrial solvent have higher rates of a sensorimotor neuropathy than unexposed workers. The association has now been reproduced by independent groups in three countries, in cohort and case-control designs, with similar effect sizes everywhere.",
        discriminator:
          "The same finding, repeatedly, in different populations and study designs — “repeated observations of the findings in multiple distinct samples,” the printed definition",
        concept: "Consistency (a MEASURED criterion)",
        answer:
          "Consistency — repeated observations of the findings in multiple distinct samples. Replication across countries and designs is the classic consistency vignette; contrast Strength (how BIG the association is), which the stem deliberately does not quantify.",
      },
      {
        stem: "A public health team studying a rare liver cancer notes that incidence rises with cumulative exposure to a contaminant: workers with low exposure have 2× the baseline risk, moderate exposure 5×, and high exposure 12×. In animals, the contaminant produces the same tumor histology at high doses.",
        discriminator:
          "Two criteria in one stem: risk climbing with exposure (the dose-response relationship) and empirical animal evidence — but the question asks specifically about the rising 2×/5×/12× pattern",
        concept: "Biological gradient (dose-response) vs Experiment",
        answer:
          "The rising risk with greater exposure demonstrates Biological gradient — “greater effect observed with greater exposure to the presumed cause (dose-response relationship).” The animal tumor data separately demonstrates Experiment — “empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies).” Read the question's target sentence before answering: numbers climbing with dose = gradient; a lab experiment = experiment.",
      },
      {
        stem: "A registry study finds a strong association (RR 9) between a new monoclonal antibody and acute pancreatitis. The pancreatitis episodes all began 1-2 days AFTER the first infusion, and no case occurred before exposure. A question asks which Bradford Hill criterion is REQUIRED — the one without which causal inference fails regardless of the strength of association.",
        discriminator:
          "The only criterion that must hold: the cause must precede the effect — and the vignette's timeline (pancreatitis only after the infusion) is demonstrating it",
        concept: "Temporality — the gate (KYP gloss: the only necessary criterion)",
        answer:
          "Temporality — “the presumed cause precedes the effect by an expected amount of time.” The page's Strength row prints the companion lesson: association does not necessarily imply causation — even RR 9 is support, not proof. KYP gloss: temporality is the single criterion that must be satisfied; the others accumulate “limited support (ie, necessary but not sufficient criteria).”",
      },
    ],
    traps: [
      {
        a: "Strength — the stronger the association, the more evidence for causation",
        b: "Temporality — the presumed cause precedes the effect by an expected amount of time",
        whyConfused:
          "Both are “the most important criterion” in popular teaching, and both appear in causation questions with big effect measures",
        keyDifference:
          "Strength GRADES the evidence (a bigger association = more support); Temporality GATES the claim (wrong order = no causation, whatever the size). The page prints the caveat in Strength's own row: “Association does not necessarily imply causation.”",
        clue:
          "Read the question's exact demand: “which is REQUIRED / must be present” → Temporality; “which does a large relative risk illustrate” → Strength.",
      },
      {
        a: "Plausibility — a conceivable mechanism exists",
        b: "Coherence — no conflict with existing scientific consensus",
        whyConfused:
          "Both are biology-reasoning criteria about the cause-effect story “making sense,” and both sit in the thinking four",
        keyDifference:
          "Plausibility asks whether A mechanism is conceivable (the pathophysiology story: how could the cause produce the effect?); Coherence asks whether the WHOLE picture fits what science already accepts (natural history, known dose-time patterns, the broader literature — nothing conflicts).",
        clue:
          "A stem naming a molecular or physiologic pathway → Plausibility; a stem saying the finding agrees with (or contradicts) everything already known about the disease → Coherence.",
      },
      {
        a: "Consistency — repeated observations in multiple distinct samples",
        b: "Strength — the stronger the association, the more evidence",
        whyConfused:
          "Both are quantitative-seeming criteria invoked when studies “keep finding the same thing,” and both strengthen a causal argument",
        keyDifference:
          "Consistency is about REPLICATION — the same finding across distinct samples, populations, and designs, whatever its size; Strength is about MAGNITUDE — how big the association is in whichever study you are reading. Many small consistent studies demonstrate consistency, not strength.",
        clue:
          "“Reproduced / replicated / seen in different populations and countries” → Consistency; “a relative risk of 15” → Strength.",
      },
      {
        a: "Off-label drug use — prescribing beyond the FDA-approved form, population group, or dosage",
        b: "Contraindicated, experimental, or illegal use",
        whyConfused:
          "“Not approved by the FDA” sounds like a regulatory violation, so students read off-label as forbidden",
        keyDifference:
          "Off-label use is legal, common prescribing outside the LABEL (the approved disease/form/population/dose) — driven by the two printed reasons: no approved pharmacologic treatment exists, or approved options failed. It is not a contraindication (a warning AGAINST use) and not an experimental protocol (though informed patient awareness is good practice — KYP context).",
        clue:
          "An approved drug + an unapproved indication/population/dose → off-label use; read the stem for the reason (nothing approved exists, or approved drugs failed).",
      },
    ],
    pivots: [
      {
        lookAlike: "A sentence about HOW MUCH of the exposure there was",
        differentiator:
          "Does the sentence quantify EXPOSURE (dose, duration, pack-years) tied to effect size, or just repeat the finding?",
        correctPath:
          "Exposure amount rising with effect → Biological gradient (dose-response relationship). Same finding in new samples → Consistency. A single large effect measure → Strength.",
      },
      {
        lookAlike: "Biological gradient vs Specificity — both tie the cause tightly to the effect",
        differentiator:
          "Gradient varies the DOSE (more exposure, more effect); Specificity varies the PAIRING (this one cause, this one effect)",
        correctPath:
          "“Higher/lower exposure, more/less disease” → Biological gradient. “This is the only cause linked to this outcome, and the outcome has no other cause” → Specificity.",
      },
      {
        lookAlike: "A causation question vs an association-measure question",
        differentiator:
          "Is the stem asking about the SIZE/measure of the link (OR, RR, AR, NNT) or about JUDGING whether the link is causal?",
        correctPath:
          "Size/measure → the 2×2 quantifying-risk material. Judgment/“which criterion” → the Bradford Hill nine, run through the KYP protocol: gate (temporality) → measured four → thinking four → verdict (supports, never proves).",
      },
    ],
    miniCase: {
      vignette:
        "An occupational medicine clinic evaluates a cluster of reversible sensorimotor neuropathy among workers at a specialty adhesives plant. The plant's medical officer compiles the evidence: several independent studies from factories on three continents report the same exposure-outcome link (with similar effect sizes); neuropathy severity tracks cumulative solvent exposure, with the most-exposed workers affected worst; published in vitro studies show the solvent metabolite disrupting axonal transport; and the pattern of distal axonal degeneration fits what is already known about solvent neurotoxicity, contradicting nothing in the literature. Crucially, every affected worker first noticed symptoms months AFTER starting exposure, and no worker was symptomatic before assignment to the solvent line. The medical student presenting the case is asked which Bradford Hill criterion the timing observation specifically demonstrates — and whether the collected evidence now PROVES causation.",
      question:
        "Which criterion do the months-after-onset timing observations demonstrate, and what is the status of the causal claim?",
      options: [
        {
          label: "A",
          text: "Temporality — demonstrated; the criteria as a group provide limited support, not proof",
          correct: true,
          why:
            "CORRECT — the timing sentence (“symptoms began only months after starting exposure, never before”) is the printed Temporality definition in action: “The presumed cause precedes the effect by an expected amount of time.” And the verdict language is the page's own: the criteria “provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect” — support, never proof.",
        },
        {
          label: "B",
          text: "Consistency — demonstrated; and replication across three continents proves causation",
          why:
            "TEMPTING but wrong — the three-continent replication IS consistency (“repeated observations of the findings in multiple distinct samples”), but that is a DIFFERENT sentence in the vignette, not the timing observation asked about; and no criterion, nor the whole set, PROVES causation — the printed lead-in says limited support, necessary but not sufficient.",
        },
        {
          label: "C",
          text: "Biological gradient — demonstrated; the dose-severity relationship is what proves causation",
          why:
            "TEMPTING but wrong — severity tracking cumulative exposure is indeed Biological gradient (“greater effect observed with greater exposure… dose-response relationship”), but again that is a different sentence; and the dose-response relationship, like every other criterion, provides evidence FOR causation without proving it.",
        },
        {
          label: "D",
          text: "Plausibility — demonstrated; a conceivable mechanism is the one sufficient criterion",
          why:
            "TEMPTING but wrong — the in vitro axonal-transport disruption is Plausibility (“a conceivable mechanism exists by which the cause may lead to the effect”), but it is not what the timing sentence demonstrates, and NO single criterion is sufficient: the printed parenthetical says the criteria are “necessary but not sufficient” as a group, so no one of them can carry a causal claim alone.",
        },
      ],
      reasoning:
        "The question tests sentence-to-criterion mapping plus the page's verdict language. Every sentence in the vignette is a criterion: replication across continents = Consistency; severity tracking cumulative exposure = Biological gradient; the in vitro axonal-transport finding = Plausibility; the fit with known solvent neurotoxicity = Coherence. The ASKED sentence — symptoms beginning only after exposure starts, with a months-long latency — is Temporality, the gate. The second half of the question is the page's lead-in verbatim in spirit: the nine criteria “provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect,” so any option claiming PROOF (B, C) or single-criterion sufficiency (D) is wrong by the printed text itself.",
    },
  },
  mnemonics: [
    {
      code: "SOME CATS SLEEP TIGHT; BIG PURRING CATS EAT ANTS",
      meaning:
        "A KYP-original acrostic for the nine criteria in PRINTED order: SOME = Strength · (C)onsistency… read the initials: S-C-S-T-B-P-C-E-A — Strength, Consistency, Specificity, Temporality, Biological gradient, Plausibility, Coherence, Experiment, Analogy. (“Some cats sleep tight; big purring cats eat ants.”)",
      memorizes:
        "The nine Bradford Hill criteria in the page's printed row order — the order the exam's matching columns use",
      whenToUse:
        "Any “list the Bradford Hill criteria,” any criterion-to-definition matching set, and as a checklist to run against a causal-inference vignette (tick each initial as you find its sentence)",
      clinical:
        "Order matters less than coverage, but the acrostic guarantees you do not drop a criterion mid-analysis — a missed criterion (usually Specificity or Analogy) is a missed matching point.",
    },
    {
      code: "TIME IS THE GATE",
      meaning:
        "A KYP original: Temporality (TIME) is the gate the claim must pass — the presumed cause must precede the effect by an expected amount of time — and it is the only criterion that MUST hold (KYP gloss). Every other criterion (the measured four and the thinking four) only ADDS SUPPORT once the timeline is right.",
      memorizes:
        "Which criterion is required for causal inference (temporality) and the page's necessary-but-not-sufficient logic",
      whenToUse:
        "Any question asking “which criterion is required / must be present,” and any vignette where the timeline is described — symptoms after exposure = temporality demonstrated; symptoms before exposure = causation fails",
      clinical:
        "Latency is the clinical shadow of the gate: a cause with a known latency (months for a toxic neuropathy, decades for asbestos-related mesothelioma — KYP context) must produce effects on that schedule, and effects off-schedule weaken the causal story.",
    },
    {
      code: "MEASURE IT OR THINK IT",
      meaning:
        "A KYP original grouping of the nine: MEASURED — Strength (how big), Consistency (how replicated), Biological gradient (dose-response), Experiment (animal/in vitro evidence) = evidence you COUNT; THINKING — Specificity (one cause, one effect), Plausibility (mechanism), Coherence (fits consensus), Analogy (like a known pair) = evidence you REASON; plus THE GATE — Temporality.",
      memorizes:
        "The nine criteria in two working buckets plus the gate — which bucket a vignette sentence belongs to at first glance",
      whenToUse:
        "First-pass triage of a causal-inference stem: numbers, studies, and dose data → the measured four; mechanisms, consensus, and parallels → the thinking four; timeline → the gate",
      clinical:
        "The buckets mirror how real evidence reviews argue: measured criteria come from the data tables, thinking criteria come from the discussion section — and the strongest causal cases bring both (the smoking-lung cancer story brought dose-response, replication, and mechanism together — KYP context).",
    },
    {
      code: "NONE APPROVED, OR THE APPROVED ONES FAILED",
      meaning:
        "A KYP original compressing the two printed reasons for off-label use: (1) NONE APPROVED — treatment of an illness with NO approved pharmacologic treatment; (2) APPROVED FAILED — exploring alternative treatments after FAILURE of approved options. The printed definition supplies the boundary: a form, population group, or dosage not specifically approved by the FDA.",
      memorizes:
        "The off-label definition and both printed reasons — the entire first block of the page's lower portion",
      whenToUse:
        "Any vignette where a drug is prescribed for an unapproved indication, population, or dose — choose the reason the stem supports (no approved option exists vs approved options failed/intolerated)",
      clinical:
        "The printed example is the pattern: tricyclic antidepressants for neuropathic/chronic pain — the same class also used off-label in pediatrics and rare disease, where approvals lag practice (KYP context).",
    },
  ],
  rapidReview: {
    s30: [
      "Off-label drug use = use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA — reasons: an illness with no approved pharmacologic treatment, or alternative treatments after failure of approved options; printed example: tricyclic antidepressants for neuropathic/chronic pain",
      "Bradford Hill criteria = a group of principles that provide LIMITED SUPPORT (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect",
      "Strength — association does not necessarily imply causation, but the stronger the association, the more evidence for causation · Consistency — repeated observations of the findings in multiple distinct samples",
      "Specificity — the more specific the presumed cause is to the effect, the stronger the evidence · Temporality — the presumed cause precedes the effect by an expected amount of time · Biological gradient — greater effect with greater exposure (dose-response relationship)",
      "Plausibility — a conceivable mechanism exists · Coherence — no conflict with existing scientific consensus · Experiment — empirical evidence (eg, animal studies, in vitro studies) · Analogy — comparable to a similar, established cause and effect",
    ],
    m3: [
      "SOME CATS SLEEP TIGHT; BIG PURRING CATS EAT ANTS — the nine in printed order (Strength, Consistency, Specificity, Temporality, Biological gradient, Plausibility, Coherence, Experiment, Analogy)",
      "TIME IS THE GATE — temporality is the only criterion that must hold (KYP gloss)",
      "MEASURE IT OR THINK IT — strength/consistency/gradient/experiment you count; specificity/plausibility/coherence/analogy you reason (KYP grouping)",
      "NONE APPROVED, OR THE APPROVED ONES FAILED — the two printed reasons for off-label use (KYP compression)",
    ],
    m10: [
      "The verdict language is the testable language: the criteria “provide limited support (ie, necessary but not sufficient criteria)” — supports causation, never proves it",
      "The gate: if the effect precedes the cause, causation fails regardless of association strength; the “expected amount of time” clause arms latency questions (KYP gloss)",
      "Off-label ≠ contraindicated, experimental, or illegal — it is prescribing beyond the label's form/population group/dosage; the TCA-for-pain example is the printed case (KYP context: amitriptyline for diabetic neuropathy and postherpetic neuralgia)",
      "The page is SPLIT: the upper portion (Clinical therapeutic trial + the five-phase “Can I SWIM?” figure) belongs to clinical-therapeutic-trials; this topic owns everything from the “Off-label drug use” heading down (book 257 lower, pdf 279)",
    ],
  },
  recall: [
    {
      q: "Define off-label drug use, verbatim.",
      a: "Use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA.",
    },
    {
      q: "What are the two printed reasons for off-label use?",
      a: "Treatment of an illness with no approved pharmacologic treatment, or exploring alternative treatments after failure of approved options.",
    },
    {
      q: "What is the printed example of off-label drug use?",
      a: "Use of tricyclic antidepressants for treating neuropathic/chronic pain.",
    },
    {
      q: "What does the Bradford Hill criteria lead-in say the principles provide, and what is the printed parenthetical?",
      a: "A group of principles that provide limited support — “(ie, necessary but not sufficient criteria)” — for establishing evidence of a causal relationship between presumed cause and effect.",
    },
    {
      q: "Which criterion does the printed page introduce with the caveat that association does not necessarily imply causation?",
      a: "Strength — “Association does not necessarily imply causation, but the stronger the association, the more evidence for causation.”",
    },
    {
      q: "Name the criterion: repeated observations of the findings in multiple distinct samples.",
      a: "Consistency.",
    },
    {
      q: "Name the criterion: greater effect observed with greater exposure to the presumed cause.",
      a: "Biological gradient — the dose-response relationship.",
    },
    {
      q: "Which two criteria invoke prior scientific knowledge rather than new measurements, and how do they differ?",
      a: "Plausibility — a conceivable mechanism exists by which the cause may lead to the effect (the mechanism story); and Coherence — the presumed cause and effect do not conflict with existing scientific consensus (the fit with everything already known).",
    },
    {
      q: "What empirical evidence does the Experiment criterion cite, as printed?",
      a: "“Empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies).”",
    },
    {
      q: "Which single Bradford Hill criterion is generally treated as required for causal inference (KYP gloss), and what does it demand?",
      a: "Temporality — the presumed cause precedes the effect by an expected amount of time; if the effect predates the exposure, causation fails no matter how strong the association.",
    },
  ],
  related: [
    {
      title: "Clinical therapeutic trials and the drug development pipeline",
      note:
        "The UPPER portion of this very page (book 257 upper): the trial definitions (randomized, controlled, double-blinded; crossover; intention-to-treat vs as-treated vs per-protocol) and the five-phase “Can I SWIM?” figure — the approval machinery whose endpoint defines the label that off-label use goes beyond. The pinned split boundary sits exactly between the phase figure and the “Off-label drug use” heading.",
      topicId: "clinical-therapeutic-trials",
    },
    {
      title: "Observational study designs",
      note:
        "The page before this one (book 256): case series through cohort studies, with the printed warnings that cross-sectional studies “do not establish causality.” The Bradford Hill criteria are the bridge those designs need — observational associations are exactly the raw material the nine criteria judge.",
      topicId: "observational-studies",
    },
    {
      title: "Confounding vs effect modification",
      note:
        "The classic reason an association is not a cause: a confounder tied to both exposure and outcome manufactures association without causation — the phenomenon behind Strength's printed caveat. In effect modification, the association genuinely differs across strata, which is a different (and non-causal-in-itself) phenomenon the criteria help disentangle.",
      topicId: "confounding-effect-modification",
    },
    {
      title: "Bias and study errors",
      note:
        "Selection and recall bias are the other manufacturers of false association. Run the bias page BEFORE the criteria: first ask whether the association is valid (bias, confounding), then ask whether it is causal (Bradford Hill) — the two-step ladder every causal-inference question climbs.",
      topicId: "bias-and-study-errors",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology — tricyclic antidepressants",
      connection:
        "The printed off-label example lives in the pharmacology chapter: TCAs (amitriptyline, nortriptyline) inhibit serotonin/norepinephrine reuptake and block sodium channels, which is why an antidepressant class works as a neuropathic pain analgesic — the mechanism that makes the off-label use plausible (KYP context for the receptor and channel detail).",
    },
    {
      subject: "Biostatistics — quantifying risk (the 2×2 table)",
      connection:
        "The criteria judge associations that the 2×2 table measures: OR, RR, attributable risk, NNT/NNH. Strength is literally about the magnitude of these measures — and “association ≠ causation” is the hinge between the quantifying-risk page and this one.",
    },
    {
      subject: "Pathology — oncologic and environmental disease",
      connection:
        "The textbook causal-inference cases: smoking and lung cancer, asbestos and mesothelioma, HPV and cervical cancer (KYP context). Each is a worked Bradford Hill demonstration — strong, consistent, dose-dependent, mechanistically plausible, coherent with tumor biology — and the mesothelioma latency decades are temporality's “expected amount of time” in real life.",
    },
    {
      subject: "Ethics and health systems — prescribing and surveillance",
      connection:
        "Off-label prescribing is a professional-judgment and informed-consent conversation (patient-centered prescribing beyond the label), and its risks are what Phase 4 postmarketing surveillance monitors — the systems answer to evidence gathered after approval (KYP context; the trials page above the split owns the phases).",
    },
  ],
};
