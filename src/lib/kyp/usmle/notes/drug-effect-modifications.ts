import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH10 — the topic that OPENS the
// Autonomic Drugs banner). Source: pdf 256 / book 234 — the UPPER
// portion of the page is this one topic: the section header 'Drug effect
// modifications' with the six-row TERM | DEFINITION | EXAMPLE table,
// verbatim: 'Additive | Effect of substances A and B together is equal
// to the sum of their individual effects | Aspirin and acetaminophen
// "2 + 2 = 4"'; 'Permissive | Presence of substance A is required for
// the full effects of substance B | Cortisol on catecholamine
// responsiveness'; 'Synergistic | Effect of substances A and B together
// is greater than the sum of their individual effects | Clopidogrel
// with aspirin "2 + 2 > 4"'; 'Potentiation | Similar to synergism, but
// drug B (with no therapeutic action alone) enhances the therapeutic
// action of drug A | Carbidopa only blocks enzyme to prevent peripheral
// conversion of levodopa "2 + 0 > 2"'; 'Antagonistic | Effect of
// substances A and B together is less than the sum of their individual
// effects | Morphine with naloxone "2 + 2 < 4"'; 'Tachyphylactic |
// Acute decrease in response to a drug after initial/repeated
// administration | Repeat use of intranasal decongestant (eg,
// oxymetazoline) → ↓ therapeutic response (with rebound congestion)'.
// EXCLUSION: the 'Autonomic receptors' section occupies the LOWER
// portion of this same page (its second banner, its header, and the
// AUTONOMIC/SOMATIC overview diagram) — it is the SEPARATE PENDING
// topic 'autonomic-receptors' and is EXCLUDED here. Census (pdfimages
// + VLM): NO raster images on the page; the section is typeset text
// only, carried verbatim (ORIGINAL_KYP_ADAPTATION) in the note's table
// block and re-typeset in the registry visual. The section prints NO
// margin mnemonic — all four mnemonic codes are KYP-original (stated
// everywhere they appear). The clinical anchors extending past the
// source page (adrenal-crisis pressor refractoriness, dual antiplatelet
// therapy, ED naloxone, rhinitis medicamentosa, and the
// tachyphylaxis-vs-tolerance time-course distinction) are flagged as
// KYP clinical anchors wherever they appear.

export const drugEffectModifications: KypUsMLENote = {
  id: "drug-effect-modifications",
  title: "Drug Effect Modifications",
  subtitle:
    "The UPPER portion of book 234 — the page that OPENS the Autonomic Drugs banner — is one six-row table (book 234). Every row is a TERM, a DEFINITION, and an EXAMPLE: Additive ('Effect of substances A and B together is equal to the sum of their individual effects' — Aspirin and acetaminophen '2 + 2 = 4'); Permissive ('Presence of substance A is required for the full effects of substance B' — Cortisol on catecholamine responsiveness); Synergistic ('Effect of substances A and B together is greater than the sum of their individual effects' — Clopidogrel with aspirin '2 + 2 > 4'); Potentiation ('Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' — Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa '2 + 0 > 2'); Antagonistic ('Effect of substances A and B together is less than the sum of their individual effects' — Morphine with naloxone '2 + 2 < 4'); and Tachyphylactic ('Acute decrease in response to a drug after initial/repeated administration' — Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)).",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page opens)",
  pilotCategory:
    "The drug-effect-modifications page's complete architecture — the six-row TERM/DEFINITION/EXAMPLE table with its four math metaphors ('2 + 2 = 4', '2 + 2 > 4', '2 + 0 > 2', '2 + 2 < 4'), the two rows that carry no math metaphor (Permissive — a requirement; Tachyphylactic — a time course), and the six canonical drug pairs (aspirin and acetaminophen; cortisol on catecholamine responsiveness; clopidogrel with aspirin; carbidopa + levodopa; morphine with naloxone; oxymetazoline).",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 234 (Pharmacology — Autonomic Drugs: Drug effect modifications — the six-row TERM/DEFINITION/EXAMPLE table verbatim: Additive '2 + 2 = 4', Permissive, Synergistic '2 + 2 > 4', Potentiation '2 + 0 > 2', Antagonistic '2 + 2 < 4', Tachyphylactic; the Autonomic receptors section on the same page is EXCLUDED — it is the separate autonomic-receptors topic)",
  tags: [
    "drug effect modifications",
    "drug interactions",
    "additive",
    "permissive",
    "synergistic",
    "synergism",
    "potentiation",
    "antagonistic",
    "tachyphylactic",
    "tachyphylaxis",
    "2 + 2 = 4",
    "2 + 2 > 4",
    "2 + 0 > 2",
    "2 + 2 < 4",
    "sum of individual effects",
    "aspirin",
    "acetaminophen",
    "clopidogrel",
    "dual antiplatelet therapy",
    "cortisol",
    "catecholamine responsiveness",
    "carbidopa",
    "levodopa",
    "Parkinson disease",
    "morphine",
    "naloxone",
    "oxymetazoline",
    "intranasal decongestant",
    "rebound congestion",
    "rhinitis medicamentosa",
    "pharmacodynamics",
    "combination therapy",
    "adrenal insufficiency",
    "pharmacology",
    "autonomic drugs",
  ],
  core: {
    what:
      "SIX ROWS, ONE QUESTION: WHAT HAPPENS WHEN TWO SUBSTANCES SHARE A PATIENT? (1) ADDITIVE — 'Effect of substances A and B together is equal to the sum of their individual effects'; example: 'Aspirin and acetaminophen “2 + 2 = 4”'. (2) PERMISSIVE — 'Presence of substance A is required for the full effects of substance B'; example: 'Cortisol on catecholamine responsiveness'. (3) SYNERGISTIC — 'Effect of substances A and B together is greater than the sum of their individual effects'; example: 'Clopidogrel with aspirin “2 + 2 > 4”'. (4) POTENTIATION — 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A'; example: 'Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa “2 + 0 > 2”'. (5) ANTAGONISTIC — 'Effect of substances A and B together is less than the sum of their individual effects'; example: 'Morphine with naloxone “2 + 2 < 4”'. (6) TACHYPHYLACTIC — 'Acute decrease in response to a drug after initial/repeated administration'; example: 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)'. Four of the six rows print their claim as arithmetic; two refuse the arithmetic — one is a requirement (permissive), one is a time course (tachyphylactic).",
    why:
      "WHY THE ARITHMETIC WORKS: the table's hidden anchor is THE SUM OF INDIVIDUAL EFFECTS — the effect you would observe giving A alone plus B alone. Four rows are comparative claims about the observed combination versus that sum, and the math metaphors are the claims compressed: together LESS than the sum ('2 + 2 < 4', antagonistic — morphine with naloxone), together EQUAL to the sum ('2 + 2 = 4', additive — aspirin and acetaminophen), together GREATER than the sum ('2 + 2 > 4', synergistic — clopidogrel with aspirin), and the degenerate case where one partner contributes zero to the sum yet the pair still beats the solitary drug ('2 + 0 > 2', potentiation — carbidopa + levodopa). WHY THE ZERO CASE GETS ITS OWN ROW: carbidopa has 'no therapeutic action alone' — it adds nothing to the sum by itself; it 'only blocks enzyme to prevent peripheral conversion of levodopa', so more levodopa survives to act in the brain. That is why the source defines potentiation as 'Similar to synergism, BUT drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' — the enhancement is real, but the arithmetic is degenerate: there is no second active effect to add. WHY PERMISSIVE REFUSES THE ARITHMETIC: 'Presence of substance A is required for the full effects of substance B' is a requirement claim, not a magnitude claim — cortisol does not add its own increment to a pressor sum; it maintains the vascular responsiveness that lets catecholamines express their full effect (remove cortisol — adrenal insufficiency — and pressors underperform: a KYP clinical anchor beyond the source page). WHY TACHYPHYLACTIC REFUSES IT TOO: 'Acute decrease in response to a drug after initial/repeated administration' is not a combination at all — it is one drug over time; the repeat use of intranasal decongestant (eg, oxymetazoline) yields '↓ therapeutic response (with rebound congestion)' with no partner drug anywhere in the sentence.",
    keyIdea:
      "Read every interaction stem through three questions. QUESTION 1 — IS THE STEM MAKING A MAGNITUDE CLAIM AGAINST THE SUM? If yes, read the sign: '2 + 2 < 4' antagonistic (morphine with naloxone), '2 + 2 = 4' additive (aspirin and acetaminophen), '2 + 2 > 4' synergistic (clopidogrel with aspirin). QUESTION 2 — DOES THE PARTNER DO ANYTHING ALONE? This is the potentiation test, in the source's own words: 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' — a partner that is a ZERO alone and still beats the solitary drug is POTENTIATION ('2 + 0 > 2', carbidopa + levodopa); two active partners beating the sum is SYNERGISM ('2 + 2 > 4'). QUESTION 3 — IS THE FALLING RESPONSE CAUSED BY A SECOND DRUG OR BY THE SAME DRUG RE-DOSED? Two drugs together less than the sum is ANTAGONISTIC (morphine with naloxone); one drug after 'initial/repeated administration' is TACHYPHYLACTIC (oxymetazoline → rebound congestion). And the row that answers none of the three: 'required for the full effects of' is PERMISSIVE (cortisol on catecholamine responsiveness) — a requirement, not a magnitude. The exam's one-line summary: READ THE SIGN, THEN ASK WHO ACTS ALONE — AND COUNT THE DRUGS BEFORE YOU CHECK THE CLOCK.",
  },
  mechanisms: [
    {
      id: "combination-arithmetic-sum-reference",
      title:
        "The sum reference: four of the six rows are one comparison — the observed combination versus the sum of individual effects",
      context: "The Additive, Synergistic, Potentiation, and Antagonistic rows (book 234)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Two substances in one patient — each with its own individual effect",
            sublabel:
              "Input — the reference point is THE SUM: the effect of A alone plus the effect of B alone. The table's four magnitude rows are all claims about where the observed combination sits against that sum, and the math metaphors print the claim: '2 + 2 < 4', '2 + 2 = 4', '2 + 2 > 4', '2 + 0 > 2'.",
            variant: "input",
          },
          {
            id: "signs",
            label: "The three signs — less, equal, greater (two active partners)",
            sublabel:
              "Together LESS than the sum → ANTAGONISTIC, 'Morphine with naloxone “2 + 2 < 4”' (naloxone displaces morphine at the receptor — the antagonistic row's mechanism is the competitive-antagonist geometry of the receptor-binding topic). Together EQUAL to the sum → ADDITIVE, 'Aspirin and acetaminophen “2 + 2 = 4”'. Together GREATER than the sum → SYNERGISTIC, 'Clopidogrel with aspirin “2 + 2 > 4”' — different antiplatelet axes (P2Y12 blockade + COX-1), more than either alone.",
            variant: "process",
          },
          {
            id: "zero",
            label: "The zero case — drug B has no therapeutic action alone, yet enhances A",
            sublabel:
              "The degenerate comparison: B adds ZERO to the sum — 'drug B (with no therapeutic action alone)' — yet the pair still beats A alone. POTENTIATION: 'Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa “2 + 0 > 2”' — no DOPA decarboxylase in the periphery means more levodopa reaches the brain at a lower dose, with less nausea. The source's own boundary with synergism: 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A.'",
            variant: "process",
          },
          {
            id: "output",
            label: "The sign names the term — the exam's recognition shortcut",
            sublabel:
              "Output — the four rows collapse to one reading rule: '<' is Antagonistic (a second drug blocks), '=' is Additive (the effects sum), '>' is Synergistic (both active, beating the sum), '0>' is Potentiation (an inert-alone partner enabling more of A). Before any mechanism is invoked, the sign in the stem — or the phrase 'equal to / greater than / less than the sum' — already names the row.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "signs", label: "compare the observed combination to the sum — <, =, >" },
          { from: "input", to: "zero", label: "if the partner adds nothing alone → the degenerate comparison '2 + 0 > 2'" },
          { from: "signs", to: "output", label: "the sign (or its phrase) names the term" },
          { from: "zero", to: "output", label: "'no therapeutic action alone' + enhancement → potentiation, not synergism" },
        ],
      },
    },
    {
      id: "permissive-gating-and-tachyphylaxis",
      title:
        "The two rows that refuse the arithmetic: a requirement (permissive) and a time course (tachyphylactic)",
      context: "The Permissive and Tachyphylactic rows (book 234)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Two rows with no math metaphor — neither compares anything to a sum",
            sublabel:
              "Input — the Permissive and Tachyphylactic rows print no '2 + 2' arithmetic, because neither is a magnitude claim about a combination: one is a REQUIREMENT relation between two substances, the other is a TIME relation inside a single substance.",
            variant: "input",
          },
          {
            id: "permissive",
            label: "Permissive — 'Presence of substance A is required for the full effects of substance B'",
            sublabel:
              "A does not add its own increment to a sum; it GATES B's effect. The source's example: 'Cortisol on catecholamine responsiveness' — cortisol maintains the vascular responsiveness that lets catecholamines express their full effect. Remove A and B underperforms: the clinical anchor (KYP, beyond the source page) is adrenal insufficiency — shock refractory to vasopressors until hydrocortisone is given.",
            variant: "process",
          },
          {
            id: "tachy",
            label: "Tachyphylactic — 'Acute decrease in response to a drug after initial/repeated administration'",
            sublabel:
              "Not a combination at all: the SAME drug, re-dosed, produces less each time. The source's example: 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)' — the α1 agonist in the nasal mucosa down-regulates with repeat dosing, and the congestion returns worse than baseline (rhinitis medicamentosa — KYP clinical anchor). No partner drug, no sum to compare: the fall happens on the clock, not in the mixture.",
            variant: "process",
          },
          {
            id: "output",
            label: "The two exam anchors — the gate and the clock",
            sublabel:
              "Output — the recognition pair: a stem about a SECOND SUBSTANCE being required for the first to work is permissive (cortisol on catecholamine responsiveness); a stem about a response that FALLS with repeat dosing of the SAME drug is tachyphylactic (oxymetazoline → rebound congestion). Neither stem will contain a sum, a sign, or an inequality — that absence is itself the tell.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "permissive", label: "requirement relation: A gates B — remove A, B's full effect collapses" },
          { from: "input", to: "tachy", label: "time relation: same drug, repeat dosing, response falls" },
          { from: "permissive", to: "output", label: "'required for' in the stem → the permissive row" },
          { from: "tachy", to: "output", label: "'after initial/repeated administration' in the stem → the tachyphylactic row" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "drug-effect-modifications-map",
      title: "The drug-effect-modifications map (an original KYP redraw)",
      caption:
        "An original KYP re-typesetting of the source page's upper portion (book 234): the sign ladder — the four math-metaphor rows as columns (ADDITIVE '2 + 2 = 4', SYNERGISTIC '2 + 2 > 4', POTENTIATION '2 + 0 > 2', ANTAGONISTIC '2 + 2 < 4'), each with its comparison line, its drug pair, and its verbatim definition fragment, arranged less-equal-greater-zero across the panel; the permissive panel — 'Presence of substance A is required for the full effects of substance B' (cortisol on catecholamine responsiveness) with the gate diagram and the adrenal-crisis clinical anchor; the tachyphylactic panel — 'Acute decrease in response to a drug after initial/repeated administration' with the repeat-dose time course into rebound congestion; the verbatim examples strip — all six EXAMPLE cells exactly as printed; and the four-code mnemonic strip (all four KYP-original — the source prints no mnemonic).",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 256). The Drug effect modifications section is typeset text only — one six-row TERM/DEFINITION/EXAMPLE table in the PDF text layer, carried verbatim (ORIGINAL_KYP_ADAPTATION) in this note's table block and re-typeset in this visual's panels. The math metaphors' '>' and '<' signs are typographic characters, re-typeset as HTML entities in the visual. The clinical anchors that extend past the source page (adrenal-crisis pressor refractoriness; rhinitis medicamentosa; the tachyphylaxis-vs-tolerance time-course distinction) are KYP extensions, flagged where they appear. The source prints NO mnemonic — all four codes are KYP-original.",
    },
    {
      kind: "table",
      title: "Book 234 — the Drug effect modifications table (carried verbatim)",
      intro:
        "The whole section, row by row, exactly as printed: the six terms with their definitions and examples, including all four math metaphors and both metaphor-free rows.",
      columns: ["TERM", "DEFINITION (book 234, verbatim)", "EXAMPLE (book 234, verbatim)"],
      rows: [
        [
          "Additive",
          "Effect of substances A and B together is equal to the sum of their individual effects",
          "Aspirin and acetaminophen — “2 + 2 = 4”",
        ],
        [
          "Permissive",
          "Presence of substance A is required for the full effects of substance B",
          "Cortisol on catecholamine responsiveness",
        ],
        [
          "Synergistic",
          "Effect of substances A and B together is greater than the sum of their individual effects",
          "Clopidogrel with aspirin — “2 + 2 > 4”",
        ],
        [
          "Potentiation",
          "Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A",
          "Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa — “2 + 0 > 2”",
        ],
        [
          "Antagonistic",
          "Effect of substances A and B together is less than the sum of their individual effects",
          "Morphine with naloxone — “2 + 2 < 4”",
        ],
        [
          "Tachyphylactic",
          "Acute decrease in response to a drug after initial/repeated administration",
          "Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)",
        ],
      ],
      caption:
        "Read the table as one distributed lesson: four rows are arithmetic against the sum ('2 + 2 < 4' < '2 + 2 = 4' < '2 + 2 > 4', with '2 + 0 > 2' as the degenerate case), and two rows refuse the arithmetic — Permissive because it is a requirement (A gates B; no magnitude claim), Tachyphylactic because it is a time course (one drug; no combination at all). The exam takes items from every row of this table, and the six drug pairs are worth memorizing verbatim: aspirin and acetaminophen; cortisol on catecholamine responsiveness; clopidogrel with aspirin; carbidopa + levodopa; morphine with naloxone; oxymetazoline with rebound congestion.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 64-year-old man undergoes drug-eluting stent placement for an acute coronary syndrome and is discharged on aspirin plus clopidogrel. His cardiologist explains that the two antiplatelet drugs together inhibit platelet aggregation more than either drug alone — aspirin blocking COX-1-derived thromboxane and clopidogrel blocking the P2Y12 receptor — and warns that the bleeding risk climbs with the same arithmetic. The question asks which term from the Drug effect modifications table describes the interaction.",
        discriminator:
          "Two ACTIVE partners, together greater than the sum of individual effects — 'Clopidogrel with aspirin “2 + 2 > 4”'",
        concept: "The synergistic row and its math metaphor",
        answer:
          "Both drugs are active antiplatelet agents on different axes (TXA2 synthesis vs P2Y12 signaling), and the observed antiplatelet effect is greater than the sum of the individual effects — the source's synergistic row, verbatim: 'Effect of substances A and B together is greater than the sum of their individual effects', example 'Clopidogrel with aspirin “2 + 2 > 4”'. The flip side the stem supplies — bleeding risk climbing with the same arithmetic — is the same row read as a harm: dual antiplatelet therapy is the exam's canonical synergistic pair, and the distractors fail on the sign: '=' would require the combined antiplatelet effect to merely equal the sum (additive — the aspirin + acetaminophen row), '<' would require the combination to be weaker than the sum (antagonistic — the morphine + naloxone row), and '0>' would require one partner to have no therapeutic action alone (potentiation — the carbidopa row).",
      },
      {
        stem:
          "A 58-year-old woman with autoimmune adrenal insufficiency presents with hypotension and abdominal pain; she is found in shock. High-dose norepinephrine infusion only partially raises her MAP. Hydrocortisone 100 mg IV is given; within hours the same norepinephrine infusion holds her MAP at target. A student asks why the steroid — which has no pressor action of its own — rescued the vasopressor. The question asks which term describes cortisol's contribution to norepinephrine's effect.",
        discriminator:
          "The presence of substance A is REQUIRED for the full effects of substance B — 'Cortisol on catecholamine responsiveness'",
        concept: "The permissive row — a requirement, not an increment",
        answer:
          "The source's permissive row, verbatim: 'Presence of substance A is required for the full effects of substance B', example 'Cortisol on catecholamine responsiveness'. Cortisol adds no pressor increment of its own (it is not part of a sum); it maintains vascular responsiveness — smooth muscle and receptor signaling — so that catecholamines can express their full effect. Remove it (adrenal crisis) and pressors underperform, which is exactly the vignette. The distractors fail on the claim type: the stem never says the combination exceeds a sum (rules out synergistic '2 + 2 > 4' and additive '2 + 2 = 4'), cortisol is not inactive-alone-then-enhancing in the carbidopa sense (rules out potentiation), and the response ROSE rather than fell (rules out tachyphylactic). The adrenal-crisis framing is a KYP clinical anchor beyond the source page; the row, its definition, and its example are the source's own.",
      },
      {
        stem:
          "A 23-year-old man has used an over-the-counter oxymetazoline nasal spray six times daily for three weeks for nasal congestion. He reports that the spray worked well for the first two days, but he now needs it more often, feels more congested between doses — worse than before he started — and examination shows swollen, red turbinates. The question asks which term from the Drug effect modifications table best explains the course, and what the physical findings represent.",
        discriminator:
          "Same drug, initial/repeated administration, response falls — 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)'",
        concept: "The tachyphylactic row and rebound congestion",
        answer:
          "The source's tachyphylactic row, verbatim: 'Acute decrease in response to a drug after initial/repeated administration', example 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)'. There is no second drug in the stem — the falling response is the SAME drug re-dosed, so the two-drug arithmetic never applies: this is not antagonistic ('2 + 2 < 4' needs a partner — morphine with naloxone). The swollen, red turbinates are the rebound congestion (rhinitis medicamentosa — a KYP clinical anchor beyond the source page): repeat α1 stimulation of the nasal vasculature down-regulates the response, and the congestion returns worse than baseline. The counseling point the exam attaches: stop the spray, treat the rebound with intranasal steroids, and limit topical decongestants to a few days.",
      },
    ],
    traps: [
      {
        a: "Carbidopa + levodopa is synergistic — the pair's effect is greater than what either drug contributes, which is the definition of synergism",
        b: "Lumping the zero-partner case under synergism ('2 + 0 > 2' read as '2 + 2 > 4')",
        whyConfused:
          "Both rows describe a combination that beats the solitary drug, and both feel like 'working together' — the difference is invisible until you ask what each partner contributes ALONE",
        keyDifference:
          "The source draws the boundary in its own definition of potentiation: 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A.' Carbidopa has NO therapeutic action alone — it 'only blocks enzyme to prevent peripheral conversion of levodopa' — so there is no second active effect to add to a sum; the arithmetic is '2 + 0 > 2', not '2 + 2 > 4'. Synergism needs BOTH partners active: clopidogrel with aspirin — 'Effect of substances A and B together is greater than the sum of their individual effects'. If the partner is a zero alone, the term is potentiation; if both are active and the pair beats the sum, it is synergism.",
        clue:
          "Before answering any 'greater than' stem, ask: WHAT DOES THE PARTNER DO ALONE? Zero alone → potentiation. Mnemonic: THE ZERO RULES POTENTIATION — a partner that is a ZERO alone and still beats the solitary drug is '2 + 0 > 2', never '2 + 2 > 4'.",
      },
      {
        a: "Aspirin plus acetaminophen is synergistic — two analgesics together are better than one",
        b: "Reading 'better together' as 'greater than the sum' (the '=' row mistaken for the '>' row)",
        whyConfused:
          "'Two drugs, more relief' sounds like enhancement, and both rows describe a pair that works — the equality is easy to skip because both outcomes are desirable",
        keyDifference:
          "The additive row's claim is exact equality: 'Effect of substances A and B together is equal to the sum of their individual effects' — 'Aspirin and acetaminophen “2 + 2 = 4”'. Two analgesics/antipyretics of the same class, given together, give roughly the sum of their individual effects — no amplification. The synergistic row requires MORE than the sum: 'Clopidogrel with aspirin “2 + 2 > 4”', which is why the source picks two drugs on DIFFERENT axes for that row (TXA2 vs P2Y12). Same-class pairs lean additive; different-axis pairs can clear the sum.",
        clue:
          "Find the comparator in the stem: 'equal to the sum' or same-class pair → additive; 'greater than the sum' → synergistic. Mnemonic: READ THE SIGN — '=' is Additive (aspirin and acetaminophen), '>' is Synergistic (clopidogrel with aspirin).",
      },
      {
        a: "Cortisol is synergistic with catecholamines — it adds its own pressor effect on top of norepinephrine, so the combination exceeds the sum",
        b: "Inventing a magnitude for the permissive row (a requirement read as an increment)",
        whyConfused:
          "The clinical outcome — better pressure with cortisol on board — looks like enhancement, and the adrenal-crisis rescue genuinely improves the numbers",
        keyDifference:
          "The permissive row makes no magnitude claim at all: 'Presence of substance A is required for the full effects of substance B' — cortisol on catecholamine responsiveness. Cortisol contributes no increment of its own to a pressor sum; it GATES catecholamine responsiveness, which is why adrenal insufficiency presents as pressor-REFRACTORY shock (the combination cannot even reach the sum without A present). Synergism ('2 + 2 > 4') requires both partners active and the pair beating the sum — neither clause survives the stem: cortisol is not acting as a second pressor, and the rescue restores B's full effect rather than exceeding a sum.",
        clue:
          "The tell is the phrase 'required for' (or a stem where removing A collapses B): requirement → permissive. Mnemonic: PERMISSIVE = PERMISSION, NOT POWER — cortisol doesn't add pressor force; it permits catecholamines their full effect.",
      },
      {
        a: "Oxymetazoline rebound congestion is antagonistic — the response to the drug is less than the sum of individual effects",
        b: "Applying the two-drug arithmetic to a one-drug time course (the '<' row mistaken for the clock)",
        whyConfused:
          "Both rows describe a diminished response, and the phrasing 'less than' in the antagonistic definition ('together is less than the sum') tempts a mapping onto any falling curve",
        keyDifference:
          "Count the drugs and check the clock. Antagonistic requires TWO substances together: 'Effect of substances A and B together is less than the sum of their individual effects' — 'Morphine with naloxone “2 + 2 < 4”', a second drug displacing the first at the receptor. Tachyphylactic is ONE drug, re-dosed: 'Acute decrease in response to a drug after initial/repeated administration' — the repeat use of intranasal decongestant yields '↓ therapeutic response (with rebound congestion)' with no partner anywhere in the sentence. The time-course distinction is a KYP clinical anchor: tachyphylaxis is ACUTE (days of repeat dosing); tolerance develops more slowly over chronic exposure — the source's word is 'Acute'.",
        clue:
          "Ask: HOW MANY DRUGS ARE IN THE STEM? Two → antagonistic ('2 + 2 < 4'). One, over repeat dosing → tachyphylactic. Mnemonic: TACHYPHYLAXIS = THE DRUG TIRES OF ITSELF — no partner, no sum, just the clock.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem saying the combination is 'greater than expected' — synergistic, potentiation, or additive?",
        differentiator:
          "Run the protocol in order: (1) IS THE CLAIM ABOUT A SUM? If the stem says 'equal to the sum of their individual effects' → ADDITIVE ('2 + 2 = 4', aspirin and acetaminophen). If 'greater than the sum' → the '>' family. (2) WITHIN THE '>' FAMILY, ask WHAT THE PARTNER DOES ALONE: both partners active (clopidogrel with aspirin, two different antiplatelet axes) → SYNERGISTIC ('2 + 2 > 4'); the partner has 'no therapeutic action alone' yet enhances A (carbidopa only blocking peripheral levodopa conversion) → POTENTIATION ('2 + 0 > 2'). (3) If the stem says one substance is REQUIRED for the other's full effect, there is no sum at all → PERMISSIVE (cortisol on catecholamine responsiveness).",
        correctPath:
          "Order of operations for any interaction stem: read the comparator phrase first ('equal to' / 'greater than' / 'less than' the sum, or 'required for'); then ask who acts alone (the zero test); only then invoke mechanism — P2Y12 + COX-1 for the synergistic pair, peripheral DOPA decarboxylase for the potentiation pair. If the stem supplies no comparator and no sum, leave the magnitude family entirely and apply the second pivot.",
      },
      {
        lookAlike: "A stem describing a diminishing response — antagonistic, tachyphylactic, or tolerance?",
        differentiator:
          "Count the drugs, then check the clock. TWO DRUGS together less than the sum of individual effects → ANTAGONISTIC ('2 + 2 < 4' — morphine with naloxone; a second substance at the receptor, the naloxone logic). ONE drug after 'initial/repeated administration' with an ACUTE fall → TACHYPHYLACTIC ('Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)'). A SLOW loss of effect over chronic exposure requiring escalating doses → tolerance (KYP clinical anchor beyond the source page — the source's own word is 'Acute', which is the tachyphylaxis/tolerance boundary).",
        correctPath:
          "Ask three things in order: (1) is a second drug present and opposing (displacement at a receptor)? → antagonistic; (2) is it the same drug re-dosed? → tachyphylactic, expect the source's rebound-congestion signature if the drug is a topical decongestant; (3) is the time course chronic rather than acute? → tolerance, outside this table. The receptor-level mechanism for the antagonistic row is the competitive-antagonist geometry of the receptor-binding topic — naloxone is a competitive antagonist at μ-opioid receptors, which is WHY the combination lands below the sum.",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old man with newly diagnosed Parkinson disease starts levodopa. Two weeks later his tremor and rigidity are improved, but he has nausea and lightheadedness, and at higher doses he develops dyskinesia between doses. The movement-disorder specialist adds carbidopa — a drug with no anti-Parkinson action of its own — and reduces the levodopa dose. At the next visit the motor scores are better than on levodopa alone, the nausea has resolved, and the dyskinesia has quieted. A student asks why adding a drug that does nothing by itself made the regimen work better at a lower levodopa dose.",
      question:
        "Which term from the Drug effect modifications table describes carbidopa's contribution to the regimen; why is it not synergism; and what does the improvement at a LOWER levodopa dose illustrate about the arithmetic?",
      options: [
        {
          label:
            "Potentiation — the source's own definition: 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A.' Carbidopa has no therapeutic action alone; it only blocks the peripheral enzyme (DOPA decarboxylase) that converts levodopa outside the brain, so more of each levodopa dose survives to act centrally. The regimen's effect beats levodopa alone at a lower dose: '2 + 0 > 2'.",
          text: "Potentiation — an inert-alone partner enhances A: '2 + 0 > 2'.",
          correct: true,
          why:
            "Correct on every element, and every element is the page's own. (1) THE TERM: potentiation — the source's row, verbatim: 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A'; example: 'Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa “2 + 0 > 2”'. (2) WHY NOT SYNERGISM: synergism requires BOTH partners active and the pair greater than the SUM of individual effects ('Clopidogrel with aspirin “2 + 2 > 4”'); carbidopa's individual anti-Parkinson effect is zero, so there is no second effect to add — the comparison is degenerate, '2 + 0 > 2', exactly the boundary the source draws with the word 'but'. (3) THE LOWER DOSE: because the enhancement is pharmacokinetic in character (peripheral conversion blocked — more levodopa reaches the brain), the same central effect is achieved with less drug, which is also why the nausea (peripheral dopaminergic stimulation) and dyskinesia (peak-dose central swings) improve. The peripheral-blockade mechanism is the source's own example text; the nausea/dyskinesia detail is a KYP clinical anchor beyond the page.",
        },
        {
          label:
            "Synergistic — the combined anti-Parkinson effect is greater than the sum of levodopa's and carbidopa's individual effects, which is the definition of synergism.",
          text: "Synergistic — the pair beats the sum of individual effects.",
          why:
            "The closest confusable, and it fails on the source's own boundary word: 'but'. Potentiation is 'Similar to synergism, BUT drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' — carbidopa has no therapeutic action alone, so its 'individual effect' is zero and there is no sum for the pair to beat. Synergism is reserved for two ACTIVE partners exceeding the sum ('2 + 2 > 4' — clopidogrel with aspirin). Reading '2 + 0 > 2' as '2 + 2 > 4' is the classic zero-partner trap.",
        },
        {
          label:
            "Permissive — carbidopa's presence is required for the full effects of levodopa; without it, levodopa cannot express its full therapeutic action.",
          text: "Permissive — carbidopa required for levodopa's full effect.",
          why:
            "The requirement-row distractor. The permissive row is 'Presence of substance A is required for the full effects of substance B' — the cortisol-on-catecholamine-responsiveness logic. But levodopa produces its full therapeutic effect WITHOUT carbidopa (it just needs more drug and causes more peripheral side effects); carbidopa is not required for levodopa's action, it ENHANCES it — the source's own verb for potentiation. If carbidopa were permissive, levodopa alone would be ineffective, which contradicts the vignette's opening ('his tremor and rigidity are improved' on levodopa alone).",
        },
        {
          label:
            "Additive — the regimen's effect equals the sum of levodopa's and carbidopa's individual effects, the arithmetic of any well-behaved drug pair.",
          text: "Additive — the effects sum: '2 + 2 = 4'.",
          why:
            "The equality-row distractor, and it fails twice. First, carbidopa's individual effect is zero, so the 'sum' would just be levodopa's effect — yet the vignette reports BETTER motor scores at a LOWER levodopa dose, which is not equality with levodopa-alone at the original dose. Second, the additive row is the same-class pair logic ('Aspirin and acetaminophen “2 + 2 = 4”' — two analgesics of the same class summing); this pair is not two anti-Parkinson drugs summing, it is one active drug plus an enabler.",
        },
        {
          label:
            "Antagonistic — carbidopa blocks the enzyme that activates levodopa (DOPA decarboxylase), reducing levodopa's effect; the improved scores are despite the blockade.",
          text: "Antagonistic — the enzyme blockade reduces levodopa's effect.",
          why:
            "The wrong-direction distractor, built by reading 'blocks the enzyme' as 'blocks the drug'. DOPA decarboxylase converts levodopa to dopamine in the PERIPHERY — where dopamine cannot cross the blood-brain barrier and only causes nausea and hypotension. Blocking that conversion is the entire point: it redirects levodopa to the brain. Antagonistic is 'together less than the sum' ('Morphine with naloxone “2 + 2 < 4”' — naloxone displacing morphine at μ-opioid receptors); here the pair is MORE effective than levodopa alone, the opposite sign.",
        },
      ],
      reasoning:
        "The stem walks the potentiation row through its exact chain: an inert-alone partner + a pharmacokinetic blockade + a better outcome at a lower dose. (1) THE PARTNER: carbidopa 'has no anti-Parkinson action of its own' — the vignette says it in so many words, which is the source's own clause 'drug B (with no therapeutic action alone)'. (2) THE MECHANISM: it 'only blocks enzyme to prevent peripheral conversion of levodopa' — the source's example text; blocking peripheral DOPA decarboxylase leaves more levodopa for the brain, the same effect from less drug. (3) THE SIGN: the regimen beats levodopa alone ('motor scores better than on levodopa alone') while the partner contributes zero alone — '2 + 0 > 2'. The distractors each miss one link: 'synergistic' imports a sum that does not exist (the zero-partner trap — the source's 'but' exists precisely to block this move); 'permissive' claims requirement where the vignette shows enhancement (levodopa already worked alone); 'additive' claims equality the numbers contradict (better at a lower dose); 'antagonistic' misreads 'blocks the enzyme' as 'blocks the drug' (the blockade is peripheral, which is the therapy). The nausea/dyskinesia detail and the lower-dose achievement are KYP clinical anchors; the term, the definition, the example, and the arithmetic are the source's own.",
    },
  },
  mnemonics: [
    {
      code: "READ THE SIGN, NAME THE TERM — < is Antagonistic (morphine with naloxone), = is Additive (aspirin and acetaminophen), > is Synergistic (clopidogrel with aspirin), 0> is Potentiation (carbidopa + levodopa)",
      meaning:
        "The four magnitude rows as four signs (KYP-original): '2 + 2 < 4' together less than the sum; '2 + 2 = 4' together equal to the sum; '2 + 2 > 4' together greater than the sum; '2 + 0 > 2' the zero-partner case that still beats the solitary drug. The sign is the whole row compressed — find it in the stem (or in the phrase 'less than / equal to / greater than the sum of their individual effects') and the term names itself.",
      memorizes: "The four arithmetic rows of the table and their math metaphors",
      whenToUse:
        "Any interaction stem that compares a combination to a sum, or any option list offering the four terms for a drug pair",
      clinical:
        "The four canonical pairs attach to the four signs: morphine with naloxone (<), aspirin and acetaminophen (=), clopidogrel with aspirin (>), carbidopa + levodopa (0>).",
    },
    {
      code: "THE ZERO RULES POTENTIATION — a partner that is a ZERO alone and still beats the solitary drug is '2 + 0 > 2', never '2 + 2 > 4'",
      meaning:
        "The potentiation/synergism boundary (KYP-original), in the source's own words: potentiation is 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A.' Carbidopa has no therapeutic action alone — it 'only blocks enzyme to prevent peripheral conversion of levodopa' — so there is no second active effect to add to a sum; the enhancement is real but the arithmetic is degenerate. Synergism needs BOTH partners active and the pair greater than the sum (clopidogrel with aspirin).",
      memorizes: "The distinction between the two 'greater than' rows",
      whenToUse:
        "Any 'greater than expected' stem, and every option list that offers synergism and potentiation side by side — the single most common miss on this table",
      clinical:
        "Carbidopa + levodopa (Parkinson disease) is the exam's canonical potentiation pair; if the partner drug has an action of its own, you are looking at synergism or additive instead.",
    },
    {
      code: "PERMISSIVE = PERMISSION, NOT POWER — cortisol doesn't add pressor force; it permits catecholamines their full effect ('required for', not 'greater than')",
      meaning:
        "The permissive row's grammar (KYP-original): 'Presence of substance A is required for the full effects of substance B' — a REQUIREMENT claim, not a magnitude claim. Cortisol contributes no increment of its own to a pressor sum; it maintains the responsiveness that lets catecholamines express their full effect. Remove it — adrenal insufficiency — and pressors underperform (pressor-refractory shock until hydrocortisone; a KYP clinical anchor beyond the source page).",
      memorizes: "The permissive row, its example, and why it carries no math metaphor",
      whenToUse:
        "Stems where one substance is 'required for' another's full effect, or where removing A collapses B's effect — especially endocrine and critical-care vignettes",
      clinical:
        "Cortisol on catecholamine responsiveness is the source's example; adrenal crisis (autoimmune adrenal insufficiency, steroid withdrawal) is the clinical face of the same row.",
    },
    {
      code: "TACHYPHYLAXIS = THE DRUG TIRES OF ITSELF — same drug, repeat dosing, response falls: no partner, no sum, just the clock",
      meaning:
        "The tachyphylactic row's grammar (KYP-original): 'Acute decrease in response to a drug after initial/repeated administration' — one drug over time, not two drugs in a mixture. The repeat use of intranasal decongestant (eg, oxymetazoline) yields '↓ therapeutic response (with rebound congestion)': the response falls with re-dosing and the congestion returns worse than baseline (rhinitis medicamentosa — a KYP clinical anchor). The distinction from antagonistic: antagonistic needs a SECOND substance ('Morphine with naloxone “2 + 2 < 4”'); tachyphylaxis needs only a calendar. The acute-vs-chronic boundary with tolerance is likewise a KYP clinical anchor — the source's word is 'Acute'.",
      memorizes: "The tachyphylactic row, its example, and its separation from the antagonistic row",
      whenToUse:
        "Stems describing a drug that stops working with repeat dosing — decongestants, and any 'used it more, worked less' course",
      clinical:
        "Oxymetazoline rebound congestion is the source's example; counseling is to stop the spray (limit topical decongestants to a few days) and treat the rebound with intranasal steroids.",
    },
  ],
  rapidReview: {
    s30: [
      "Additive, verbatim: 'Effect of substances A and B together is equal to the sum of their individual effects' — Aspirin and acetaminophen “2 + 2 = 4”.",
      "Permissive, verbatim: 'Presence of substance A is required for the full effects of substance B' — Cortisol on catecholamine responsiveness.",
      "Synergistic, verbatim: 'Effect of substances A and B together is greater than the sum of their individual effects' — Clopidogrel with aspirin “2 + 2 > 4”.",
      "Potentiation, verbatim: 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' — Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa “2 + 0 > 2”.",
      "Antagonistic, verbatim: 'Effect of substances A and B together is less than the sum of their individual effects' — Morphine with naloxone “2 + 2 < 4”.",
      "Tachyphylactic, verbatim: 'Acute decrease in response to a drug after initial/repeated administration' — Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion).",
      "The four signs: < antagonistic · = additive · > synergistic · 0> potentiation — READ THE SIGN, NAME THE TERM.",
      "The zero rule: a partner with NO therapeutic action alone that still enhances A is potentiation ('2 + 0 > 2'), not synergism ('2 + 2 > 4') — carbidopa + levodopa, not clopidogrel with aspirin.",
      "The two metaphor-free rows: Permissive = a requirement ('required for the full effects of'); Tachyphylactic = a time course ('after initial/repeated administration').",
      "The six pairs to know cold: aspirin + acetaminophen · cortisol on catecholamine responsiveness · clopidogrel with aspirin · carbidopa + levodopa · morphine with naloxone · oxymetazoline (rebound congestion).",
    ],
    m3: [
      "READ THE SIGN, NAME THE TERM — < antagonistic (morphine with naloxone), = additive (aspirin and acetaminophen), > synergistic (clopidogrel with aspirin), 0> potentiation (carbidopa + levodopa).",
      "THE ZERO RULES POTENTIATION — partner is a ZERO alone and still beats the solitary drug: '2 + 0 > 2', never '2 + 2 > 4'.",
      "PERMISSIVE = PERMISSION, NOT POWER — cortisol doesn't add pressor force; it permits catecholamines their full effect.",
      "TACHYPHYLAXIS = THE DRUG TIRES OF ITSELF — one drug, repeat dosing, falling response: no partner, no sum, just the clock.",
      "COUNT THE DRUGS, THEN CHECK THE CLOCK — two drugs falling below the sum is antagonistic; one drug falling over repeat dosing is tachyphylactic.",
    ],
    m10: [
      "The whole table in one breath: four rows are arithmetic against the sum of individual effects (<, =, >, and the degenerate 0>), two rows refuse the arithmetic — permissive (a requirement: A gates B) and tachyphylactic (a time course: same drug, re-dosed).",
      "Mechanism spine — the sum reference: the effect of A alone plus B alone is the anchor; the observed combination is placed against it, and the sign names the term; the zero case (carbidopa) beats the solitary drug without adding anything to the sum.",
      "The potentiation/synergism boundary is the source's own 'but': 'Similar to synergism, BUT drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' — an inert-alone enabler versus two active partners beating the sum.",
      "The permissive mechanism: cortisol maintains catecholamine responsiveness (vascular smooth muscle and receptor signaling); in adrenal crisis the same row presents as pressor-refractory shock rescued by hydrocortisone — a KYP clinical anchor.",
      "The tachyphylaxis mechanism: repeat α1 stimulation of the nasal vasculature down-regulates the response — '↓ therapeutic response (with rebound congestion)', rhinitis medicamentosa; acute (days) by the source's own word, which is the boundary with tolerance (chronic — KYP clinical anchor).",
    ],
  },
  recall: [
    {
      q: "The six terms of the Drug effect modifications table with their definitions and examples — verbatim.",
      a:
        "Additive — 'Effect of substances A and B together is equal to the sum of their individual effects' — Aspirin and acetaminophen “2 + 2 = 4”. Permissive — 'Presence of substance A is required for the full effects of substance B' — Cortisol on catecholamine responsiveness. Synergistic — 'Effect of substances A and B together is greater than the sum of their individual effects' — Clopidogrel with aspirin “2 + 2 > 4”. Potentiation — 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' — Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa “2 + 0 > 2”. Antagonistic — 'Effect of substances A and B together is less than the sum of their individual effects' — Morphine with naloxone “2 + 2 < 4”. Tachyphylactic — 'Acute decrease in response to a drug after initial/repeated administration' — Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion).",
    },
    {
      q: "Why is potentiation not synergism — where exactly does the source draw the line?",
      a:
        "The line is the source's own 'but': potentiation is 'Similar to synergism, BUT drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' — '2 + 0 > 2'. In synergism BOTH partners are active and the pair is greater than the SUM of individual effects ('2 + 2 > 4' — clopidogrel with aspirin). In potentiation the partner contributes zero to any sum (carbidopa 'only blocks enzyme to prevent peripheral conversion of levodopa' — no anti-Parkinson action of its own); there is no second active effect to add, so the comparison is degenerate: the pair beats the SOLITARY drug, not a sum. Ask what the partner does ALONE: zero → potentiation; active → synergism (if the pair beats the sum).",
    },
    {
      q: "The permissive row — definition, example, and the clinical scenario the exam builds on it.",
      a:
        "'Presence of substance A is required for the full effects of substance B' — example: 'Cortisol on catecholamine responsiveness'. Cortisol adds no pressor increment of its own; it maintains the vascular responsiveness that lets catecholamines express their full effect. The exam scenario (a KYP clinical anchor beyond the source page): adrenal insufficiency — shock refractory to vasopressors until hydrocortisone is given; removing the permissive substance collapses the partner's effect. The row carries no math metaphor because it is a requirement claim, not a magnitude claim.",
    },
    {
      q: "The tachyphylactic row — definition, example, and how it differs from the antagonistic row.",
      a:
        "'Acute decrease in response to a drug after initial/repeated administration' — example: 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)'. It differs from antagonistic in the count of drugs and the location of the fall: antagonistic requires TWO substances together producing less than the sum of individual effects ('Morphine with naloxone “2 + 2 < 4”' — a second drug displacing the first at the receptor); tachyphylactic is ONE drug re-dosed — no partner, no sum, the response falls on the clock. Rebound congestion (rhinitis medicamentosa) is its clinical face, and counseling is to limit topical decongestants to a few days (KYP clinical anchor).",
    },
    {
      q: "Which two rows carry no math metaphor, and why?",
      a:
        "Permissive and Tachyphylactic. Permissive — 'Presence of substance A is required for the full effects of substance B' (cortisol on catecholamine responsiveness) — is a REQUIREMENT relation: A gates B's effect rather than contributing an increment to a sum, so there is nothing to compare against 'the sum of their individual effects'. Tachyphylactic — 'Acute decrease in response to a drug after initial/repeated administration' (oxymetazoline → rebound congestion) — is a TIME relation inside a SINGLE drug: there is no combination at all, hence no sum. The four arithmetic rows (additive, synergistic, potentiation, antagonistic) all compare a combination to a sum; these two rows refuse the arithmetic — one by grammar ('required for'), one by headcount (one drug).",
    },
  ],
  related: [
    {
      title: "Therapeutic Index — the Safety Ratio",
      topicId: "therapeutic-index",
      note:
        "The previous page's lower half (PH9, book 233) — the perfect contrast of scale. The therapeutic index is about ONE drug and TWO of its own curves (the dose that helps vs the dose that harms: TI = TD50/ED50); this page is about TWO substances sharing one patient and what their combination does to an effect. They meet where the exam likes to put them: interactions on ↓ TI drugs are the dangerous ones — adding an interacting drug to warfarin, theophylline, digoxin, an antiepileptic, or lithium moves the concentration inside a window too narrow to absorb it, which is why those five are monitored with levels. Read the two pages as one lesson: PH9 prices a single drug's safety; PH10 prices the combination's arithmetic.",
    },
    {
      title: "Receptor Binding — the Four Ways to Change the Agonist Curve",
      topicId: "receptor-binding",
      note:
        "The upper half of the PH9 page (PH8, book 233) supplies the MECHANISM behind this table's antagonistic row: morphine with naloxone is '2 + 2 < 4' because naloxone is a competitive antagonist at μ-opioid receptors — it displaces morphine from the binding site (surmountable by ↑ agonist concentration, per the AGONIST WITH table's row A). The receptor-level geometry is why the combination lands below the sum: less agonist is bound, so less effect is generated. This page supplies the CLINICAL readout (the ED reversing an overdose); the receptor-binding page supplies the molecular one — the exam freely asks for either, and linking them turns two memorized rows into one mechanism.",
    },
    {
      title: "Efficacy vs Potency — the Two-Axis Reading",
      topicId: "efficacy-vs-potency",
      note:
        "The graded-curve page (PH7, book 232) defines the currency this table spends: 'the sum of their individual effects' is a sum of EFFECT MAGNITUDES — the y-axis of the graded dose-response curve — and the four math metaphors are claims about where a combined effect lands relative to that y-axis sum. Potency (the x-axis, EC50) is deliberately NOT the currency here: shifting a curve left does not say whether two drugs' effects add, multiply, or cancel. The exam's cross-table trap is to answer an interaction question with position language ('more potent') when the row asked about magnitude language ('greater than the sum') — read the axis the stem is actually using before choosing a row.",
    },
    {
      title: "Pharmacokinetics — Bioavailability, Vd, Clearance, Half-life",
      topicId: "pharmacokinetics",
      note:
        "The machinery page (PH2, book 229) explains this table's most famous engineering trick: carbidopa + levodopa is a PHARMACOKINETIC intervention wearing a PHARMACODYNAMIC term. Carbidopa does not change levodopa's receptor effect; it changes WHERE levodopa is — blocking peripheral DOPA decarboxylase (carbidopa does not cross the blood-brain barrier) so a larger fraction of each dose survives to act centrally. The same machinery runs in reverse for the PH9 theophylline-ciprofloxacin case: an interaction that moves CONCENTRATION (clearance inhibition) while the effect arithmetic stays fixed. When an interaction stem turns on distribution, metabolism, or clearance rather than on the effect itself, the pharmacokinetics page is the reference layer under this table's terminology.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology (adrenal insufficiency — the permissive row made clinical)",
      connection:
        "The permissive row's clinical face is adrenal crisis: 'Cortisol on catecholamine responsiveness' becomes shock refractory to vasopressors until hydrocortisone is given — the same row, read at the bedside (a KYP clinical anchor beyond the source page). Primary adrenal insufficiency (autoimmune destruction, tuberculosis, adrenal hemorrhage) and the withdrawal of chronic steroids both present through it: hyponatremia, hyperkalemia, hypoglycemia, and hypotension that does not answer norepinephrine until the glucocorticoid is replaced. The physiology explains the pharmacology: cortisol maintains vascular smooth muscle responsiveness and receptor signaling; without it, even high-dose pressors cannot express their full effect — 'Presence of substance A is required for the full effects of substance B' is the table's shortest endocrinology lecture.",
    },
    {
      subject: "Neurology (Parkinson disease — the exam's canonical potentiation pair)",
      connection:
        "Carbidopa + levodopa is the source's potentiation example and the movement-disorder clinic's daily tool: 'Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa' — peripheral DOPA decarboxylase blockade (carbidopa does not cross the blood-brain barrier) lets a lower levodopa dose achieve the same central dopaminergic effect, with less peripheral nausea and hypotension. The same logic extends through the Parkinson armamentarium: entacapone (a COMT inhibitor, again peripheral-only) lengthens levodopa's plasma life, and tolcapone adds central effects — each is an interaction engineered to LOOK like pharmacodynamics while working through pharmacokinetics. When a Parkinson stem reports 'better motor scores at a lower levodopa dose after adding a drug with no anti-Parkinson action of its own', the answer is the potentiation row — '2 + 0 > 2'.",
    },
    {
      subject: "Cardiovascular medicine (dual antiplatelet therapy and the overdose antidote)",
      connection:
        "Two of the table's pairs live in cardiology and the ED. Clopidogrel with aspirin after drug-eluting stenting is the synergistic row ('2 + 2 > 4'): P2Y12 blockade plus COX-1-derived TXA2 inhibition, two different antiplatelet axes, more effect than either alone — and the bleeding risk climbs with the same arithmetic, which is the row read as a harm (the DAPT duration question is this arithmetic applied to risk). Morphine with naloxone is the antagonistic row ('2 + 2 < 4') in the emergency department: naloxone, a competitive antagonist at μ-opioid receptors, displaces morphine from the binding site and reverses respiratory depression — the receptor-binding page's competitive-antagonist geometry expressed as a clinical rescue. One table, two directions: the same signs that build therapy also reverse overdose.",
    },
    {
      subject: "Otolaryngology (rhinitis medicamentosa — the tachyphylactic row made clinical)",
      connection:
        "The tachyphylactic row's clinical face is the decongestant nose: 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)' becomes rhinitis medicamentosa — swollen, red turbinates worse than the original congestion, typically after more than a few days of use. The mechanism is repeat α1 stimulation of the nasal vasculature: the response down-regulates acutely (the source's own word — 'Acute decrease in response... after initial/repeated administration'), and the rebound congestion drives more spray use in a vicious circle. Management is the table's lesson applied: stop the spray (counsel a 3-5 day limit for topical decongestants), treat the rebound with intranasal steroids, and expect the exam to ask which term describes the course — tachyphylactic, not antagonistic (there is no second drug), and not tolerance (the fall is acute).",
    },
  ],
};
