import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS banner (PH-batch 8). Source: pdf 256 TOP
// HALF / book 234 ("Drug effect modifications" — the p196 shared-page
// convention): the BOTTOM half of pdf 256 is "Autonomic receptors", the
// sibling topic autonomic-receptors — only the effect-modifications
// block's contiguous lines are quoted, stopping before the second
// "▶ PHARMACOLOGY—AUTONOMIC DRUGS" banner (part1.txt page-256 raw line
// 66), which opens the sibling's half.
// The block is ONE 6-row TERM/DEFINITION/EXAMPLE table, carried VERBATIM
// below (blocks[1]): Additive (effect of substances A and B together is
// equal to the sum of their individual effects; aspirin and
// acetaminophen; the source's own chip “2 + 2 = 4”), Permissive (presence
// of substance A is required for the full effects of substance B;
// cortisol on catecholamine responsiveness; NO arithmetic chip),
// Synergistic (…greater than the sum…; clopidogrel with aspirin;
// “2 + 2 > 4”), Potentiation (similar to synergism, but drug B [with no
// therapeutic action alone] enhances the therapeutic action of drug A;
// carbidopa only blocks enzyme to prevent peripheral conversion of
// levodopa; “2 + 0 > 2”), Antagonistic (…less than the sum…; morphine
// with naloxone; “2 + 2 < 4”), Tachyphylactic (acute decrease in response
// to a drug after initial/repeated administration; repeat use of
// intranasal decongestant [eg, oxymetazoline] → ↓ therapeutic response
// [with rebound congestion]; NO arithmetic chip).
// Documented source quirks: (1) the page header prints the source's own
// banner typos "PHARMACoLoGY" and "SEC TIoN II" — quoted exactly as
// printed in the manifest's page-identity evidence and documented here;
// (2) only FOUR of the six rows carry an arithmetic chip — Permissive
// (a requirement, not an operator) and Tachyphylactic (a time course,
// not a combination) have none; (3) the Tachyphylactic example line
// carries two stray cp1252 control characters (U+008E, U+0090) before
// the → and ↓ glyphs in the text layer.
// Census (pdfimages: ZERO rasters — pure text; VLM confirm attempted
// twice on ph8-vlm-census.ts but both calls failed with 401 missing
// X-Token [sandbox vision credential absent], so the census stands on the
// pdfimages raster census + the pdftotext text layer): ONE 6-row table in
// the top half, NO figures, NO margin notes or mnemonics — the KYP memory
// layer (the four mnemonics) is original. The arithmetic chips “2 + 2 =
// 4” / “2 + 2 > 4” / “2 + 0 > 2” / “2 + 2 < 4” are the SOURCE'S OWN and
// are carried verbatim with attribution; the ladder layout, the
// key-unlock glyph, and the fading-response curve are the ORIGINAL KYP
// redraw (EffectModificationMap, visuals/pharm-p8.tsx).

export const drugEffectModifications: KypUsMLENote = {
  id: "drug-effect-modifications",
  title: "Drug Effect Modifications: The Arithmetic of Two Drugs",
  subtitle:
    "Six named ways a drug combination (or a repeat dose) can behave (book 234) — ADDITIVE: the effect of substances A and B together is equal to the sum of their individual effects (aspirin and acetaminophen — the source's own chip “2 + 2 = 4”). PERMISSIVE: the presence of substance A is required for the full effects of substance B (cortisol on catecholamine responsiveness — a requirement, not a booster, and the one row with NO arithmetic chip). SYNERGISTIC: the effect of substances A and B together is greater than the sum of their individual effects (clopidogrel with aspirin — “2 + 2 > 4”). POTENTIATION: similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A (carbidopa only blocks enzyme to prevent peripheral conversion of levodopa — “2 + 0 > 2”). ANTAGONISTIC: the effect of substances A and B together is less than the sum of their individual effects (morphine with naloxone — “2 + 2 < 4”). TACHYPHYLACTIC: an acute decrease in response to a drug after initial/repeated administration (repeat use of intranasal decongestant, eg, oxymetazoline → ↓ therapeutic response, with rebound congestion). Four of the six rows print their own arithmetic — equal, greater, zero-partner-greater, less — and the exam's whole game is picking the right operator.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 1,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 234–234 (Pharmacology — Autonomic Drugs: Drug effect modifications; the six-row TERM/DEFINITION/EXAMPLE table — additive, permissive, synergistic, potentiation, antagonistic, tachyphylactic — with the source's own arithmetic chips “2 + 2 = 4”, “2 + 2 > 4”, “2 + 0 > 2”, and “2 + 2 < 4”; …)",
  tags: [
    "drug effect modifications",
    "drug interactions",
    "additive effect",
    "permissive effect",
    "synergistic effect",
    "synergism",
    "potentiation",
    "antagonistic effect",
    "antagonism",
    "tachyphylaxis",
    "tachyphylactic",
    "acute tolerance",
    "pharmacodynamics",
    "autonomic drugs",
    "aspirin",
    "acetaminophen",
    "clopidogrel",
    "cortisol",
    "catecholamines",
    "carbidopa",
    "levodopa",
    "morphine",
    "naloxone",
    "oxymetazoline",
    "intranasal decongestant",
    "rebound congestion",
    "rhinitis medicamentosa",
    "Parkinson disease",
    "2 + 2 = 4",
    "2 + 0 > 2",
  ],
  core: {
    what:
      "A six-term vocabulary for what happens when two substances meet (or when one substance meets itself repeatedly). ADDITIVE — effect of substances A and B together is equal to the sum of their individual effects: aspirin and acetaminophen (“2 + 2 = 4”). PERMISSIVE — presence of substance A is required for the full effects of substance B: cortisol on catecholamine responsiveness (no arithmetic chip — A does not add an effect, it is REQUIRED for B's full effect). SYNERGISTIC — effect of substances A and B together is greater than the sum of their individual effects: clopidogrel with aspirin (“2 + 2 > 4”). POTENTIATION — similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A: carbidopa only blocks enzyme to prevent peripheral conversion of levodopa (“2 + 0 > 2”). ANTAGONISTIC — effect of substances A and B together is less than the sum of their individual effects: morphine with naloxone (“2 + 2 < 4”). TACHYPHYLACTIC — acute decrease in response to a drug after initial/repeated administration: repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion).",
    why:
      "This is the grammar of every drug-combination question on the exam: when a stem names two drugs and asks what the pair did, the answer is one of these six nouns, and the discriminator is almost always the arithmetic. The source makes that literal — it prints its own chips: “2 + 2 = 4” (additive), “2 + 2 > 4” (synergistic), “2 + 0 > 2” (potentiation), “2 + 2 < 4” (antagonistic). Two rows refuse an operator, and that refusal is itself testable: PERMISSIVE is not a boost but a requirement (cortisol must be present for the full catecholamine response — which is why adrenal insufficiency produces hypotension that shrugs off catecholamine pressors until steroids are given), and TACHYPHYLACTIC is not a combination at all but a time course (the response to a single drug acutely fades with repeat dosing — the intranasal-decongestant rebound). The potentiation row is the classic differentiator from synergism: carbidopa has NO therapeutic action alone (the 0) — it only blocks the enzyme (peripheral aromatic amino acid decarboxylase) that would convert levodopa before levodopa crosses the blood-brain barrier, so more levodopa survives to the brain. Two drugs each doing work = synergism; one drug doing work while its silent partner protects it = potentiation.",
    keyIdea:
      "Read every combination question through four gates. GATE 1 — THE OPERATOR: is the pair's effect EQUAL to the sum (additive — aspirin + acetaminophen, “2 + 2 = 4”), GREATER than the sum (synergistic — clopidogrel with aspirin, “2 + 2 > 4”), or LESS than the sum (antagonistic — morphine with naloxone, “2 + 2 < 4”)? GATE 2 — THE ZERO TEST (synergism vs potentiation): does the second drug have its own therapeutic action? Both drugs effective → synergism (2 + 2 > 4); the second drug therapeutically SILENT (no therapeutic action alone) while enhancing drug A → potentiation (2 + 0 > 2 — carbidopa + levodopa). GATE 3 — THE REQUIREMENT TEST (permissive): is one substance simply REQUIRED for the full effect of the other (cortisol on catecholamine responsiveness)? No arithmetic — remove A and B underperforms, add A alone and nothing therapeutic happens. GATE 4 — THE CLOCK (tachyphylactic): is the question about a SINGLE drug losing effect acutely after initial/repeated administration (oxymetazoline → ↓ therapeutic response with rebound congestion)? One drug, fading response, no partner — the only row where time, not combination, is the story.",
  },
  mechanisms: [
    {
      id: "interaction-arithmetic-map",
      title:
        "The interaction arithmetic map: six terms, four operators, one zero",
      context: "The 6-row TERM/DEFINITION/EXAMPLE table (book 234)",
      flow: {
        nodes: [
          {
            id: "pair",
            label: "Substance A + substance B given together",
            sublabel:
              "Input — the table's substrate is a two-substance encounter (A and B); every comparison row asks how the pair's effect compares with the SUM of their individual effects.",
            variant: "input",
          },
          {
            id: "operator",
            label: "THE OPERATOR TEST — compare the pair with the sum of the individual effects",
            sublabel:
              "Process — the source prints its own arithmetic chips: equal ( = ), greater ( > ), less ( < ), or greater with a silent partner ( 0 ).",
            variant: "process",
          },
          {
            id: "additive",
            label: "ADDITIVE — “2 + 2 = 4”",
            sublabel:
              "Equal to the sum — effect of substances A and B together is equal to the sum of their individual effects. Example: aspirin and acetaminophen.",
            variant: "target",
          },
          {
            id: "synergistic",
            label: "SYNERGISTIC — “2 + 2 > 4”",
            sublabel:
              "Greater than the sum — both drugs therapeutically active. Example: clopidogrel with aspirin (antiplatelet effect beyond two antiplatelet addends).",
            variant: "output",
          },
          {
            id: "potentiation",
            label: "POTENTIATION — “2 + 0 > 2”",
            sublabel:
              "Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A — the zero partner. Example: carbidopa only blocks enzyme to prevent peripheral conversion of levodopa.",
            variant: "output",
          },
          {
            id: "antagonistic",
            label: "ANTAGONISTIC — “2 + 2 < 4”",
            sublabel:
              "Less than the sum — one drug cuts the other down. Example: morphine with naloxone (opioid receptor antagonist against the agonist).",
            variant: "inhibit",
          },
          {
            id: "permissive",
            label: "PERMISSIVE — A required for the full effects of B (no chip)",
            sublabel:
              "The requirement row — presence of substance A is required for the full effects of substance B; A adds no effect of its own and prints no arithmetic. Example: cortisol on catecholamine responsiveness.",
            variant: "process",
          },
        ],
        edges: [
          { from: "pair", to: "operator", label: "co-administration" },
          { from: "operator", to: "additive", label: "together = sum ( = )" },
          { from: "operator", to: "synergistic", label: "together > sum, both active ( > )" },
          { from: "operator", to: "potentiation", label: "together > sum, partner silent ( 0 )" },
          { from: "operator", to: "antagonistic", label: "together < sum ( < )" },
          { from: "operator", to: "permissive", label: "A required for B's full effect" },
          { from: "synergistic", to: "potentiation", label: "the zero test separates them", type: "inhibit" },
        ],
      },
    },
    {
      id: "tachyphylaxis-clock-map",
      title:
        "The tachyphylaxis clock: the acute fading response and its rebound",
      context: "The Tachyphylactic row (book 234)",
      flow: {
        nodes: [
          {
            id: "dosing",
            label: "Repeat administration of one drug (eg, intranasal oxymetazoline)",
            sublabel:
              "Input — no partner drug here: tachyphylaxis is the story of a SINGLE drug meeting the same receptor again and again (repeat use of intranasal decongestant).",
            variant: "input",
          },
          {
            id: "fading",
            label: "ACUTE DECREASE IN RESPONSE after initial/repeated administration",
            sublabel:
              "Process — the definition verbatim: an acute decrease in response to a drug after initial/repeated administration; the decongestant's α1-mediated vasoconstriction delivers less and less as the receptor/signaling reserve adapts.",
            variant: "process",
          },
          {
            id: "less-effect",
            label: "↓ therapeutic response",
            sublabel:
              "Consequence — the printed arrow: oxymetazoline → ↓ therapeutic response; each re-dose decongests less than the one before.",
            variant: "target",
          },
          {
            id: "rebound",
            label: "REBOUND CONGESTION (when the drug wears off)",
            sublabel:
              "Consequence — the printed parenthetical: (with rebound congestion) — congestion returns worse than baseline as the faded α1 response wanes, pulling the patient into more frequent dosing (rhinitis medicamentosa).",
            variant: "output",
          },
        ],
        edges: [
          { from: "dosing", to: "fading", label: "initial → repeated dosing" },
          { from: "fading", to: "less-effect", label: "acute tolerance" },
          { from: "less-effect", to: "rebound", label: "drug wears off between doses" },
          { from: "rebound", to: "dosing", label: "re-dose → deeper fading", type: "stimulate" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "effect-modification-map",
      title: "The effect-modification map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source's 6-row table (book 234) as an ARITHMETIC LADDER: six cards — ADDITIVE (aspirin + acetaminophen, chip “2 + 2 = 4”), PERMISSIVE (cortisol on catecholamine responsiveness, with a KEY-UNLOCK glyph — cortisol is the key required for the full catecholamine response, no arithmetic chip), SYNERGISTIC (clopidogrel with aspirin, chip “2 + 2 > 4”), POTENTIATION (carbidopa + levodopa, chip “2 + 0 > 2” with the ZERO partner highlighted — carbidopa has no therapeutic action alone, it only blocks the enzyme that would convert levodopa peripherally), ANTAGONISTIC (morphine with naloxone, chip “2 + 2 < 4”), and TACHYPHYLACTIC (repeat intranasal oxymetazoline → ↓ therapeutic response with rebound congestion, drawn as a FADING-RESPONSE CURVE with the rebound arrow). Below the ladder, the OPERATOR STRIP: = ADDITIVE · > SYNERGISTIC · 0-PARTNER POTENTIATION · < ANTAGONISTIC — plus the two rows that refuse an operator (permissive = requirement; tachyphylactic = time).",
      notice:
        "Census (pdfimages: ZERO raster images on pdf 256 — pure text; VLM confirm attempted twice on ph8-vlm-census.ts but both calls failed with 401 missing X-Token, so the census stands on the pdfimages raster census + the pdftotext text layer): the top half carries ONE 6-row TERM/DEFINITION/EXAMPLE table and NOTHING else — no figures, no margin notes, no printed mnemonics. The four arithmetic chips (“2 + 2 = 4”, “2 + 2 > 4”, “2 + 0 > 2”, “2 + 2 < 4”) are the SOURCE'S OWN and are rendered here verbatim inside the chips; the ladder layout, the key-unlock glyph, the zero-partner chip art, and the fading-response curve are an ORIGINAL KYP redraw. The verbatim table also ships in the note's table block. The KYP memory layer (four mnemonics) is original — nothing on the page is a mnemonic.",
    },
    {
      kind: "table",
      title:
        "Book 234 — the drug effect modifications table, carried verbatim (all six rows, every printed cell)",
      intro:
        "The table exactly as printed — TERM / DEFINITION / EXAMPLE, six rows in printed order. The arithmetic chips are the source's own, reproduced character-for-character (including the two rows that print none).",
      columns: [
        "TERM",
        "DEFINITION — book 234 (verbatim)",
        "EXAMPLE — book 234 (verbatim)",
      ],
      rows: [
        [
          "Additive",
          "Effect of substances A and B together is equal to the sum of their individual effects",
          "Aspirin and acetaminophen — “2 + 2 = 4”",
        ],
        [
          "Permissive",
          "Presence of substance A is required for the full effects of substance B",
          "Cortisol on catecholamine responsiveness (no arithmetic chip printed)",
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
        "Four operators and two operator-free rows: = additive (aspirin + acetaminophen), > synergistic (clopidogrel with aspirin), 0-partner > potentiation (carbidopa + levodopa), < antagonistic (morphine with naloxone); permissive is a requirement (cortisol on catecholamine responsiveness) and tachyphylactic is a time course (repeat oxymetazoline → ↓ response with rebound congestion).",
    },
    {
      kind: "steps",
      title:
        "The ladder in six rungs — reading any two-drug (or one-drug-twice) question",
      intro:
        "The table distilled into an ordered walk: OPERATOR, ZERO, REQUIREMENT, LESS, CLOCK — plus the rung the exam forgets to label.",
      steps: [
        {
          label: "RUNG 1 — ADDITIVE: the pair equals the sum ( “2 + 2 = 4” )",
          detail:
            "Effect of substances A and B together is equal to the sum of their individual effects — aspirin and acetaminophen. No surprise, no loss: two analgesics deliver exactly what two analgesics should.",
        },
        {
          label: "RUNG 2 — PERMISSIVE: A is required for B's full effect (no chip)",
          detail:
            "Presence of substance A is required for the full effects of substance B — cortisol on catecholamine responsiveness. A is not an addend; it is a permission slip. This row prints no arithmetic because nothing is being added.",
        },
        {
          label: "RUNG 3 — SYNERGISTIC: the pair beats the sum ( “2 + 2 > 4” )",
          detail:
            "Effect of substances A and B together is greater than the sum of their individual effects — clopidogrel with aspirin: two antiplatelet agents whose joint effect outruns the arithmetic of their separate effects.",
        },
        {
          label: "RUNG 4 — POTENTIATION: the silent partner lifts drug A ( “2 + 0 > 2” )",
          detail:
            "Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A — carbidopa only blocks enzyme to prevent peripheral conversion of levodopa. The 0 is the tell: carbidopa treats nothing by itself; it protects levodopa so more of it reaches the brain.",
        },
        {
          label: "RUNG 5 — ANTAGONISTIC: the pair undershoots the sum ( “2 + 2 < 4” )",
          detail:
            "Effect of substances A and B together is less than the sum of their individual effects — morphine with naloxone. The antagonist (naloxone, at the opioid receptor) subtracts from the agonist rather than adding to it — the rescue logic of overdose reversal.",
        },
        {
          label: "RUNG 6 — TACHYPHYLACTIC: one drug fading against itself (no chip)",
          detail:
            "Acute decrease in response to a drug after initial/repeated administration — repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion). No second drug and no operator: the story is time, and the rebound is the trap that pulls the patient back to the bottle.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 70-year-old man with Parkinson disease is started on a combination tablet. The clinician explains that one component has no therapeutic effect on its own — it only blocks the peripheral enzyme that would convert the other component before it crosses the blood-brain barrier, so more of the active drug survives to act centrally.",
        discriminator:
          "Drug B (with no therapeutic action alone) enhances the therapeutic action of drug A — “2 + 0 > 2”",
        concept: "Potentiation (the zero-partner rule)",
        answer:
          "POTENTIATION. Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa: carbidopa has no therapeutic action alone (the 0), yet the pair beats levodopa alone — similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A.",
      },
      {
        stem: "A 24-year-old man is brought to the emergency department with respiratory depression and pinpoint pupils after an opioid overdose; intravenous naloxone is administered and his respiratory drive promptly returns.",
        discriminator:
          "Effect of substances A and B together is less than the sum of their individual effects — “2 + 2 < 4”",
        concept: "Antagonistic effect (the reversal pair)",
        answer:
          "ANTAGONISTIC. Morphine with naloxone is the printed example: the effect of substances A and B together is less than the sum of their individual effects — naloxone competes at the opioid receptor and subtracts the agonist's effect rather than adding to it.",
      },
      {
        stem: "A 61-year-old man with a drug-eluting coronary stent is maintained on dual antiplatelet therapy; his care team notes that the combined antithrombotic effect is greater than either agent's individual effect would predict from simple addition.",
        discriminator:
          "Effect of substances A and B together is greater than the sum of their individual effects — “2 + 2 > 4”",
        concept: "Synergistic effect (both drugs therapeutically active)",
        answer:
          "SYNERGISTIC. Clopidogrel with aspirin is the printed example: the effect of substances A and B together is greater than the sum of their individual effects — and unlike potentiation, BOTH drugs have their own therapeutic action (there is no zero partner).",
      },
      {
        stem: "A 34-year-old woman has used an over-the-counter intranasal decongestant (oxymetazoline) nightly for three weeks for nasal congestion; she now reports the spray works for progressively shorter periods and her congestion is worse than ever when it wears off, with examination notable for swollen nasal mucosa.",
        discriminator:
          "Acute decrease in response to a drug after initial/repeated administration → ↓ therapeutic response (with rebound congestion)",
        concept: "Tachyphylaxis (rhinitis medicamentosa)",
        answer:
          "TACHYPHYLACTIC. Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion) — the printed example of an acute decrease in response to a drug after initial/repeated administration. One drug, fading effect, worse congestion between doses.",
      },
    ],
    traps: [
      {
        a: "Synergistic",
        b: "Potentiation",
        whyConfused:
          "Both belong to the greater-than-the-sum family, and the definitions even share the phrase 'similar to synergism'",
        keyDifference:
          "SYNERGISTIC = both drugs have their own therapeutic action and the pair beats the sum (“2 + 2 > 4”, clopidogrel with aspirin); POTENTIATION = drug B has NO therapeutic action alone and only enhances drug A (“2 + 0 > 2”, carbidopa + levodopa)",
        clue:
          "Run the zero test: if one drug treats nothing by itself (carbidopa), the interaction is potentiation, not synergism",
      },
      {
        a: "Additive",
        b: "Synergistic",
        whyConfused:
          "Both describe two working drugs given together with a predictable direction",
        keyDifference:
          "ADDITIVE = the pair EQUALS the sum of the individual effects (“2 + 2 = 4”, aspirin and acetaminophen); SYNERGISTIC = the pair is GREATER than the sum (“2 + 2 > 4”, clopidogrel with aspirin)",
        clue:
          "The operator is the answer: '=' is additive, '>' is synergistic — look for a stem word like 'beyond what either agent alone or simple addition would predict'",
      },
      {
        a: "Permissive",
        b: "Synergistic / potentiation",
        whyConfused:
          "In all three, substance A and substance B end up producing more effect than B alone",
        keyDifference:
          "PERMISSIVE = the presence of substance A is REQUIRED for the full effects of substance B — A adds nothing itself and prints no arithmetic (cortisol on catecholamine responsiveness); synergism/potentiation are about the pair's combined output beating arithmetic",
        clue:
          "A requirement ('needed for', 'permissive on', 'unresponsive to pressors until steroids given') is permissive; a combination beating the sum is synergism (or potentiation if the partner is silent)",
      },
      {
        a: "Antagonistic ( “2 + 2 < 4” )",
        b: "Tachyphylactic",
        whyConfused:
          "Both present as 'less effect than expected' from the drug regimen",
        keyDifference:
          "ANTAGONISTIC needs TWO substances — the pair's effect is less than the sum of their individual effects (morphine with naloxone); TACHYPHYLACTIC needs ONE drug given repeatedly — an acute decrease in response after initial/repeated administration (repeat oxymetazoline → ↓ response with rebound congestion)",
        clue:
          "Two drugs where one blocks the other = antagonistic; one drug fading against itself over time = tachyphylactic",
      },
    ],
    pivots: [
      {
        lookAlike:
          "A pair of drugs produces MORE effect than expected — which greater-than term is it?",
        differentiator:
          "Run the zero test on the second drug. BOTH drugs therapeutically active → SYNERGISTIC (“2 + 2 > 4”, clopidogrel with aspirin). Second drug has NO therapeutic action alone and only enhances drug A → POTENTIATION (“2 + 0 > 2”, carbidopa only blocks enzyme to prevent peripheral conversion of levodopa). First substance not a drug effect at all but a requirement for the second's full effect → PERMISSIVE (cortisol on catecholamine responsiveness).",
        correctPath:
          "Ask 'what does the second substance do on its own?' — treats the disease (synergism), treats nothing but protects the first drug (potentiation), or is simply required for the full response (permissive)",
      },
      {
        lookAlike:
          "A drug regimen produces LESS effect than expected — is something being blocked, or is the response fading?",
        differentiator:
          "Count the substances. TWO substances whose joint effect is less than the sum of their individual effects → ANTAGONISTIC (“2 + 2 < 4”, morphine with naloxone — one drug actively subtracts the other). ONE drug, repeat-dosed, with an acute decrease in response after initial/repeated administration → TACHYPHYLACTIC (repeat intranasal oxymetazoline → ↓ therapeutic response, with rebound congestion).",
        correctPath:
          "Two drugs, one blocker → antagonistic; one drug, fading over time (and rebounding between doses) → tachyphylactic",
      },
      {
        lookAlike:
          "A question asks which interaction type a classic pair represents — which rows carry arithmetic and which do not?",
        differentiator:
          "The source prints its own chips on exactly FOUR rows: “2 + 2 = 4” (additive, aspirin + acetaminophen), “2 + 2 > 4” (synergistic, clopidogrel with aspirin), “2 + 0 > 2” (potentiation, carbidopa + levodopa), “2 + 2 < 4” (antagonistic, morphine with naloxone). The two operator-free rows are PERMISSIVE (a requirement, not an arithmetic: cortisol on catecholamine responsiveness) and TACHYPHYLACTIC (a time course, not a combination: repeat oxymetazoline → ↓ response with rebound congestion).",
        correctPath:
          "If the stem supplies an operator (=, >, <) match it to its term; if the stem supplies a requirement or a clock, the answer is permissive or tachyphylactic — the two rows without chips",
      },
    ],
    miniCase: {
      vignette:
        "Two patients are discussed at a morning huddle. Patient A is a 69-year-old man with Parkinson disease whose bradykinesia and rigidity have improved on a combination tablet; the pharmacist's note explains that one component of the tablet has no therapeutic action of its own — it only blocks the peripheral enzyme that would convert the other component before it can cross the blood-brain barrier, thereby raising the amount of active drug that reaches the brain. Patient B is a 31-year-old woman who has sprayed an over-the-counter oxymetazoline nasal decongestant into both nostrils nightly for a month; she reports the spray relieves her congestion for progressively shorter periods, and on examination her nasal mucosa is engorged and she feels more blocked than before she ever started. Which pair of drug effect modifications best explains the two patients — Patient A first, Patient B second?",
      question:
        "Identify the interaction type for each patient and choose the option that correctly pairs them.",
      options: [
        {
          label:
            "Patient A: potentiation — drug B (with no therapeutic action alone) enhances the therapeutic action of drug A, “2 + 0 > 2” · Patient B: tachyphylactic — acute decrease in response to a drug after initial/repeated administration, with ↓ therapeutic response and rebound congestion",
          text: "A silent partner protecting the active drug; a single drug fading against itself.",
          correct: true,
          why:
            "Correct on both rows. PATIENT A — carbidopa + levodopa is the printed example of POTENTIATION: 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A. Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa. “2 + 0 > 2”.' Carbidopa treats nothing by itself (the 0); it blocks peripheral conversion so more levodopa survives to act centrally — the pair beats levodopa alone, which is why the combination tablet works. PATIENT B — the printed example of a TACHYPHYLACTIC effect: 'Acute decrease in response to a drug after initial/repeated administration. Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion).' One drug, repeat-dosed, progressively shorter relief, mucosa engorged between doses — rhinitis medicamentosa.",
        },
        {
          label:
            "Patient A: synergistic — the pair's effect is greater than the sum of their individual effects, “2 + 2 > 4” · Patient B: antagonistic — the pair's effect is less than the sum of their individual effects, “2 + 2 < 4”",
          text: "The two arithmetic answers, both misfiled.",
          why:
            "Both rows are misread. Patient A's carbidopa has NO therapeutic action alone — there is no second '2' to add, so the interaction is potentiation (“2 + 0 > 2”), not synergism (“2 + 2 > 4”, the clopidogrel-with-aspirin row). Patient B is not taking two substances; antagonism (morphine with naloxone) requires a second drug that subtracts from the first, while her problem is a single drug whose response fades acutely with repeat administration.",
        },
        {
          label:
            "Patient A: permissive — the presence of substance A is required for the full effects of substance B, as cortisol is required for full catecholamine responsiveness · Patient B: additive — the nightly repeat doses simply sum their effects, “2 + 2 = 4”",
          text: "The requirement row and the equals row, both wrong.",
          why:
            "Patient A's carbidopa does not merely 'permit' levodopa's full effect — it actively enhances the therapeutic action of drug A while having no therapeutic action alone, which is the printed definition of potentiation (permissive is the cortisol-on-catecholamine-responsiveness row, where A is REQUIRED for B's full effect and no enhancement arithmetic is printed). Patient B's problem is not dose-adding: an acute decrease in response after initial/repeated administration is tachyphylaxis, with the printed rebound-congestion twist — not the aspirin-and-acetaminophen equals row.",
        },
        {
          label:
            "Patient A: antagonistic — carbidopa BLOCKS an enzyme, so it reduces the effect of the combination, “2 + 2 < 4” · Patient B: permissive — the decongestant response requires the presence of endogenous catecholamines for its full effect",
          text: "Both rows invert the printed logic.",
          why:
            "Patient A misreads the word 'blocks': carbidopa blocks the enzyme that would WASTE levodopa peripherally, which ENHANCES levodopa's therapeutic action (potentiation, “2 + 0 > 2”) rather than subtracting from the pair. Patient B's oxymetazoline problem is time, not requirement — the acute fading response with rebound congestion after repeated administration is the tachyphylactic row; the permissive row belongs to cortisol on catecholamine responsiveness.",
        },
        {
          label:
            "Patient A: additive — the two components of the combination tablet each contribute their own therapeutic effect, “2 + 2 = 4” · Patient B: synergistic — nightly oxymetazoline plus her allergic rhinitis together produce congestion greater than the sum of its parts, “2 + 2 > 4”",
          text: "Two arithmetic rows stretched to fit two non-arithmetic stories.",
          why:
            "Patient A is the zero-partner row, not the equals row: carbidopa contributes NO therapeutic effect of its own (the 0 in “2 + 0 > 2”), so the pair cannot be additive (the aspirin-and-acetaminophen row requires two effective drugs). Patient B is not a two-substance interaction at all — synergism needs two active drugs beating the sum (clopidogrel with aspirin), whereas her single repeat-dosed decongestant shows an acute decrease in response with rebound congestion: the tachyphylactic row, which prints no arithmetic.",
        },
      ],
      reasoning:
        "The stem hands you one patient per non-obvious row. PATIENT A (carbidopa + levodopa, Parkinson disease): the pharmacist's note is a paraphrase of the printed potentiation definition — 'Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A. Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa. “2 + 0 > 2”.' The zero test settles it: a partner that treats nothing by itself is potentiation, never synergism or additive. PATIENT B (nightly oxymetazoline, shorter relief, engorged mucosa): the printed tachyphylactic example — 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)' — an acute decrease in response after initial/repeated administration, with no second drug anywhere in the story. The distractors each misfile a row: option 2 mislabels both as the two classic arithmetic answers (synergistic/antagonistic), forgetting the zero partner and the single-drug time course; option 3 borrows the permissive and additive rows (carbidopa is an enhancer, not a requirement, and fading response is not a sum); option 4 reads 'blocks enzyme' as antagonism (the block is what protects levodopa) and invents a permissive mechanism for the nose; option 5 stretches the additive and synergistic rows to fit a zero-partner pair and a one-drug fade. Run the operator test, the zero test, and the clock — in that order.",
    },
  },
  mnemonics: [
    {
      code: "READ THE OPERATOR: = ADDS, > SYNS, < ANTS",
      meaning:
        "The source prints its own arithmetic chips on three of the comparison rows — “2 + 2 = 4” (ADDITIVE: together EQUAL to the sum, aspirin and acetaminophen), “2 + 2 > 4” (SYNERGISTIC: together GREATER than the sum, clopidogrel with aspirin), “2 + 2 < 4” (ANTAGONISTIC: together LESS than the sum, morphine with naloxone). Read the operator, name the term. (The chips are the source's own, carried verbatim; the sentence is KYP's.)",
      memorizes:
        "The three operator-mapped terms (additive / synergistic / antagonistic) and their printed equations",
      whenToUse:
        "Any question that quantifies a drug pair's effect against the sum of the individual effects",
      clinical:
        "Equal → additive (two analgesics adding up); greater with both drugs active → synergistic (dual antiplatelet therapy); less → antagonistic (naloxone reversing an opioid).",
    },
    {
      code: "A ZERO PARTNER MAKES IT POTENTIATION",
      meaning:
        "POTENTIATION is the greater-than-sum row whose second drug contributes NOTHING therapeutically by itself: similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A — “2 + 0 > 2”. Carbidopa is the zero: it only blocks enzyme to prevent peripheral conversion of levodopa, so the 2 of levodopa beats levodopa alone. The moment you can write a 0 for one partner, the answer is potentiation, not synergism.",
      memorizes:
        "The synergism-vs-potentiation discriminator (the zero test) and the carbidopa + levodopa example",
      whenToUse:
        "Any stem where one drug of a pair has no therapeutic action alone (enzyme blocker, protector, prodrug-sparing agent)",
      clinical:
        "Carbidopa + levodopa in Parkinson disease is the canonical potentiation pair — carbidopa treats nothing, it just keeps levodopa alive peripherally.",
    },
    {
      code: "PERMISSIVE IS THE KEY, NOT THE BOOSTER",
      meaning:
        "PERMISSIVE — presence of substance A is required for the full effects of substance B: A is the KEY that unlocks B's full response, not an added effect. Cortisol on catecholamine responsiveness: without cortisol, catecholamines underperform; with cortisol, their full vascular effect appears. The row prints NO arithmetic chip because nothing is being added — A is a requirement, not an addend.",
      memorizes:
        "The permissive definition, the cortisol-catecholamine example, and why the row has no equation",
      whenToUse:
        "Any question where one substance must simply be present for another to work at full strength (or a pressor-unresponsive hypotension that steroids fix)",
      clinical:
        "Adrenal crisis: hypotension refractory to fluids and catecholamine pressors until hydrocortisone restores cortisol's permissive effect — the classic exam shadow of this row.",
    },
    {
      code: "TACHY FADES FAST, THE NOSE REBOUNDS",
      meaning:
        "TACHYPHYLACTIC — an ACUTE decrease in response to a drug after initial/repeated administration (tachy- = fast): one drug, repeat-dosed, fading. The printed example is the nose: repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response, WITH rebound congestion when the drug wears off — each spray works less and the congestion returns worse, pulling the patient into more frequent dosing.",
      memorizes:
        "The tachyphylactic definition and the oxymetazoline rebound-congestion example (rhinitis medicamentosa)",
      whenToUse:
        "Any single-drug stem where effect diminishes over repeat dosing, especially decongestants, nitrates, or indirect-acting sympathomimetics",
      clinical:
        "The patient who 'needs the spray more and more' is tachyphylactic — and the rebound congestion (not tolerance to a second drug) is the printed parenthetical the exam tests.",
    },
  ],
  rapidReview: {
    s30: [
      "Additive — effect of substances A and B together is equal to the sum of their individual effects (aspirin and acetaminophen, “2 + 2 = 4”)",
      "Permissive — presence of substance A is required for the full effects of substance B (cortisol on catecholamine responsiveness)",
      "Synergistic — effect of substances A and B together is greater than the sum of their individual effects (clopidogrel with aspirin, “2 + 2 > 4”)",
      "Potentiation — similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A (carbidopa only blocks enzyme to prevent peripheral conversion of levodopa, “2 + 0 > 2”)",
      "Antagonistic — effect of substances A and B together is less than the sum of their individual effects (morphine with naloxone, “2 + 2 < 4”)",
      "Tachyphylactic — acute decrease in response to a drug after initial/repeated administration (repeat intranasal decongestant, eg, oxymetazoline → ↓ therapeutic response with rebound congestion)",
    ],
    m3: [
      "READ THE OPERATOR: = ADDS, > SYNS, < ANTS — the three equation-mapped rows",
      "A ZERO PARTNER MAKES IT POTENTIATION — carbidopa (0) + levodopa (2) > 2",
      "PERMISSIVE IS THE KEY, NOT THE BOOSTER — cortisol required for full catecholamine response",
      "TACHY FADES FAST, THE NOSE REBOUNDS — acute decrease in response after initial/repeated administration",
    ],
    m10: [
      "Only FOUR of the six rows print an arithmetic chip — Permissive (a requirement) and Tachyphylactic (a time course) print none",
      "The four chips are the source's own: “2 + 2 = 4”, “2 + 2 > 4”, “2 + 0 > 2”, “2 + 2 < 4”",
      "The page header prints the source's own banner typos 'PHARMACoLoGY' and 'SEC TIoN II' — quoted exactly as printed",
      "Page 234 (pdf 256) is a SHARED page: 'Drug effect modifications' (top, THIS topic) and 'Autonomic receptors' (bottom, the sibling topic) — the p196 convention; the second '▶ PHARMACOLOGY—AUTONOMIC DRUGS' banner opens the sibling's half and is never quoted",
      "Census: ZERO raster images on the page (pdfimages) — the top half is ONE 6-row TERM/DEFINITION/EXAMPLE table and nothing else; VLM confirm attempted twice (ph8-vlm-census.ts) but failed with 401 missing X-Token, so the census stands on pdfimages + the text layer",
      "The Tachyphylactic example is the table's only arrow chain: 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)'",
      "The whole table sits under the Pharmacology — AUTONOMIC DRUGS banner, one subsection BEFORE the autonomic receptors table it introduces — a vocabulary page wearing an autonomic address",
    ],
  },
  recall: [
    {
      q: "Additive — definition, example, and the source's own arithmetic chip.",
      a: "Effect of substances A and B together is equal to the sum of their individual effects — aspirin and acetaminophen — “2 + 2 = 4”.",
    },
    {
      q: "Permissive — definition and example (and what arithmetic does it print?).",
      a: "Presence of substance A is required for the full effects of substance B — cortisol on catecholamine responsiveness (no arithmetic chip printed).",
    },
    {
      q: "Synergistic — definition, example, and arithmetic chip.",
      a: "Effect of substances A and B together is greater than the sum of their individual effects — clopidogrel with aspirin — “2 + 2 > 4”.",
    },
    {
      q: "Potentiation — definition, example, and arithmetic chip.",
      a: "Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A — carbidopa only blocks enzyme to prevent peripheral conversion of levodopa — “2 + 0 > 2”.",
    },
    {
      q: "Antagonistic — definition, example, and arithmetic chip.",
      a: "Effect of substances A and B together is less than the sum of their individual effects — morphine with naloxone — “2 + 2 < 4”.",
    },
    {
      q: "Tachyphylactic — definition and the printed example chain.",
      a: "Acute decrease in response to a drug after initial/repeated administration — repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion).",
    },
    {
      q: "Which two of the six rows print NO arithmetic chip, and why?",
      a: "Permissive (a requirement, not a combination: A is required for B's full effect) and tachyphylactic (a single drug's time course, not a two-drug pair).",
    },
    {
      q: "The synergism-vs-potentiation discriminator in one sentence.",
      a: "In synergism both drugs have their own therapeutic action (“2 + 2 > 4”); in potentiation drug B has no therapeutic action alone and only enhances drug A (“2 + 0 > 2”).",
    },
  ],
  related: [
    {
      title: "Autonomic Receptors: The Organ Response Table",
      topicId: "autonomic-receptors",
      note: "The SIBLING subsection on the bottom half of the same book page (pdf 256 / book 234, the p196 shared-page convention): the effect-modifications table is the vocabulary preview for the autonomic drugs chapter — oxymetazoline's fading α1 vasoconstriction and naloxone's receptor antagonism both play out on the receptor map printed directly below this table.",
    },
    {
      title: "Sympathomimetics",
      topicId: "sympathomimetics",
      note: "The tachyphylactic example is a sympathomimetic: oxymetazoline is a direct α1 agonist nasal decongestant, and its acute fading response with rebound congestion (rhinitis medicamentosa) is the clinical signature of repeat α1 stimulation covered in the sympathomimetic catalog.",
    },
    {
      title: "Receptor Binding, Agonist Types & Therapeutic Index",
      topicId: "receptor-binding-ti",
      note: "The antagonistic row (morphine with naloxone) is receptor binding in action — naloxone is the competitive antagonist at the μ-opioid receptor that subtracts the agonist's effect (“2 + 2 < 4”); the agonist/antagonist panels supply the mechanism behind the arithmetic.",
    },
    {
      title: "Drug Metabolism: Phase I & Phase II",
      topicId: "drug-metabolism",
      note: "Potentiation's carbidopa is an enzyme story: carbidopa only blocks the peripheral enzyme (aromatic amino acid decarboxylase) that would convert levodopa before it crosses the blood-brain barrier — the same biotransformation logic the metabolism page maps, deployed here to protect a drug instead of clear it.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology — adrenal cortex and cortisol's permissive physiology",
      connection:
        "The permissive example (cortisol on catecholamine responsiveness) is the pharmacology face of adrenal physiology: cortisol maintains vascular adrenergic receptor responsiveness, so in adrenal insufficiency (primary or secondary) the loss of cortisol's permissive effect leaves catecholamine pressors underpowered — the hypotension of adrenal crisis is refractory to fluids and pressors until glucocorticoid is replaced, which is this table's row three becoming a real patient.",
    },
    {
      subject: "Neurology — Parkinson disease pharmacology",
      connection:
        "Potentiation's printed pair is Parkinson therapy: levodopa is the dopamine precursor that crosses the blood-brain barrier and is decarboxylated to dopamine centrally, while carbidopa — a peripheral decarboxylase inhibitor that does NOT cross the blood-brain barrier — only blocks the peripheral enzyme that would waste levodopa before it reaches the brain; the result is more central dopamine with less peripheral nausea, the “2 + 0 > 2” of the movement-disorder clinic.",
    },
    {
      subject: "Toxicology & emergency medicine — opioid overdose reversal",
      connection:
        "The antagonistic example (morphine with naloxone) is the overdose bay's daily arithmetic: naloxone is a competitive opioid-receptor antagonist with rapid onset that displaces morphine (and other full agonists) from μ receptors, dropping the combined effect below the sum of the two drugs given separately — respiratory depression from the agonist is subtracted, not added to, by the antagonist.",
    },
    {
      subject: "Otolaryngology — rhinitis medicamentosa",
      connection:
        "The tachyphylactic example is an ENT diagnosis: repeat intranasal α1-agonist decongestant use (eg, oxymetazoline) produces an acute decrease in therapeutic response with rebound congestion — nasal mucosal engorgement worse than baseline between doses — locking the patient into escalating use; management is decongestant cessation (± intranasal corticosteroids), which is where this pharmacology row hands off to the clinic.",
    },
  ],
};
