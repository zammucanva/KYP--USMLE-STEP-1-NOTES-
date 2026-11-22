import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 11: Bias and study errors (FULL pdf page
// 285 / book 263, Part 1 — the page after Incidence vs prevalence, the page
// before Confounding vs effect modification). The topic owns the WHOLE page,
// which carries ONE block plus its stage rail: the "Bias and study errors"
// table — columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS,
// SEVEN rows in printed order: (1) Selection bias (definition cell stacks
// "Nonrandom sampling or treatment allocation of subjects such that study
// population is not representative of target population" + the sub-line "Most
// commonly a sampling bias" + "Convenience sampling—patients are enrolled on
// basis of ease of contact"; examples cell carries Berkson bias with the
// in-print nickname "(bedside bias)" and Attrition bias; strategies:
// Randomization + Ensure the choice of the right comparison/reference group);
// (2) Recall bias; (3) Measurement bias (faulty automatic sphygmomanometer +
// Hawthorne effect with FA's OWN red mnemonic "(Hawthorne watches you like a
// hawk)."); (4) Procedure bias; (5) Observer-expectancy bias (also called
// Pygmalion effect); (6) Lead-time bias; (7) Length-time bias — every cell
// carried verbatim in the note's table block. PLUS the study-stage rail
// printing INSIDE the table as three full-width light-teal bands: "Recruiting
// participants" (governs Selection bias), "Performing study" (governs Recall,
// Measurement, Procedure, Observer-expectancy), "Interpreting results"
// (governs Lead-time, Length-time). CENSUS (pdfimages): ZERO raster images —
// color-coded table + bands + the indd footer slug. VLM AVAILABLE this session
// (glm-4.6v at 120dpi full-page + two zoom passes,
// staging-pubh11/vlm-census.txt), with colors PINNED by PyMuPDF span reads +
// 300dpi pixel sampling, confirming: exactly SEVEN rows in printed order (none
// missing or extra); the STRATEGIES column has ONE merged cell spanning BOTH
// the Procedure bias and Observer-expectancy bias rows ("Blinding (masking)
// and use of placebo reduce influence of participants and researchers on
// procedures and interpretation of outcomes as neither are aware of group
// assignments" — no internal divider); the three stage bands are full-width
// light-teal shaded rows inside the table with navy left-aligned labels; the
// table title and column headers print navy, the seven TYPE names and the
// stage-band labels teal; RED is reserved for First Aid's own letter-link
// device — "be"/"bias" of "(bedside bias)", "observed" + the watch-words
// "Haw"/"watches"/"haw" of the Hawthorne mnemonic, and the "E"+"d" linking
// L(e)a(d)-time to (E)arly (d)etection ("Early detection" opens the Lead-time
// definition with E and d in red bold). PRINTED-TEXT QUIRKS carried +
// documented: (1) "SEC TION II" header-space extraction artifact (known,
// carried as-is); (2) small-caps artifacts — "EPIDEmIOLOGY AND BIOSTATISTICS"
// in the running header (banner prints ONCE — this is not the subsection
// opener) and the column header "EXAmPLES" (lowercase m, carried as
// extracted); (3) "follow up" (two words, verb — Attrition example) vs
// "follow-up" (hyphenated, noun — Recall strategy), both carried exactly as
// printed; (4) em-dashes inside "Convenience sampling—", "Berkson bias—",
// "Attrition bias—", "Hawthorne effect—" and curly quotes/apostrophes in
// "Measure “back-end” survival" and "Researcher’s belief" carried as printed;
// (5) the C1 control byte \x8f before the ↑ arrow in "↑ survival" (known
// artifact; the evidence quote carries it and the verifier strips it);
// (6) "and/or" wraps across lines in the Berkson cell (raw layer splits
// "and/" + "or"; the joined "and/or" is carried); (7) "Observer-expectancy /
// bias" wraps across two lines in its TYPE cell; (8) the raw text layer
// extracts the TYPE cells "Selection bias" (row 1) and "Lead-time bias"
// (row 6) LATE, interleaved with the three band labels (raw lines 108-114),
// while rows 2-5 extract in place — bbox/-layout/VLM pin the printed
// positions; (9) sentence-final periods are normalized in the verbatim table
// (the text layer prints terminal punctuation only inside the Hawthorne
// mnemonic — "a hawk)."). ADJUDICATIONS (documented in the manifest too):
// (A) the STRATEGIES column carries ONE merged cell spanning the Procedure
// bias and Observer-expectancy bias rows (bbox y-span + -layout flow + the
// zoom VLM pass all agree) — the task brief described two separate strategy
// cells ("Blinding (masking) and use of placebo" for Procedure; "Blinding and
// placebo (reduce influence of …)" for Observer-expectancy); the PRINT
// governs and is internally consistent: blinding + placebo is the single
// shared fix for both performing-stage human-influence traps; (B) "Convenience
// sampling—patients are enrolled on basis of ease of contact" prints in the
// DEFINITION column (bbox x 199.5-303.6; the VLM pass agrees) as the third
// stacked block of the Selection bias DEFINITION cell — the task brief listed
// it among the EXAMPLES; print governs (the EXAMPLES cell carries Berkson +
// Attrition only); (C) "Most commonly a sampling bias" prints in BLACK (the
// VLM first called it red — pixel sampling shows 0 red pixels; corrected) as
// a sub-line of the Selection bias DEFINITION cell; (D) the three stage
// labels print as full-width shaded bands INSIDE the table (not a left-margin
// rail) — "Recruiting participants" above Selection bias, "Performing study"
// above Recall bias, "Interpreting results" above Lead-time bias — the
// 1-4-2 stage mapping pinned by bbox + the VLM passes. PROVENANCE SPLIT:
// verbatim = the seven table rows, the column headers, the three band labels,
// the merged strategies cell; FA-own = the red letter-link device (bedside
// bias; Hawthorne watches you like a hawk; the E+d of Lead-time/Early
// detection), the printed sub-line "Most commonly a sampling bias", the
// clinical props (sphygmomanometer, specialized hospital units, mammography/
// breast cancer, slowly vs rapidly progressive cancer); KYP-original = the
// stage-decoder grammar (ONE RECRUITS · FOUR PERFORM · TWO INTERPRET), the
// fix-toolbox mapping, the exam layer, and the two KYP mnemonics ("ONE
// RECRUITS, FOUR PERFORM, TWO INTERPRET" and "LEAD-TIME STEALS A HEAD START;
// LENGTH-TIME FAVORS THE SLOW") — every teaching generalization beyond the
// printed page is flagged as KYP context. DrugCards: none — the page prints
// biases, not drugs (documented as folded-by-absence in the manifest). The
// next page (pdf 286) opens Confounding vs effect modification — the third
// member of the validity triad (bias / confounding / effect modification).

export const biasAndStudyErrors: KypUsMLENote = {
  id: "bias-and-study-errors",
  title: "Bias and Study Errors: The Seven Traps and Their Fixes",
  subtitle:
    "Every study walks through three stages — recruiting participants, performing the study, interpreting the results — and First Aid's bias table hangs its seven traps on exactly that rail, printed as three shaded bands inside the table. One trap strikes at recruitment: selection bias, the nonrandom sampling or treatment allocation that makes the study population unrepresentative — wearing three printed faces (convenience sampling, Berkson's hospitalized \"bedside bias,\" and attrition among those lost to follow up). Four traps strike while the study runs: recall bias (awareness of disease rewrites memory in retrospective designs), measurement bias (the faulty sphygmomanometer, and the Hawthorne effect — First Aid's own red mnemonic, \"Hawthorne watches you like a hawk\"), procedure bias (groups treated unequally), and observer-expectancy bias (the researcher's belief changes the outcome — the Pygmalion effect). Two traps strike at interpretation, both born of screening: lead-time bias, where early detection is misread as longer survival — First Aid prints the linking letters in red, L(e)a(d)-time = (E)arly (d)etection — and length-time bias, where the screening test preferentially catches the slowly progressive cancers. The right-hand column is the arsenal: randomization and the right comparison group for selection, records and a shorter recall window for recall bias, objective pretested methods and a placebo group for measurement, one merged cell of blinding and placebo for procedure and observer-expectancy together, back-end survival for lead-time, and a screening randomized controlled trial for length-time. Learn each trap by its stage, its example, and its fix — that triple is the whole page.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — study-validity decoding: the seven bias traps with their printed definitions, examples, and reduction strategies; the three-stage recruiting/performing/interpreting rail printed as bands inside the table; the merged blinding-and-placebo strategies cell spanning the Procedure and Observer-expectancy rows; and First Aid's own in-cell hooks (the Hawthorne hawk mnemonic, the Berkson bedside-bias nickname, the red E+d letter-link of Lead-time = Early Detection) carried attributed.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 263–263 (Epidemiology and Biostatistics: Bias and study errors)",
  tags: [
    "bias",
    "study errors",
    "selection bias",
    "convenience sampling",
    "Berkson bias",
    "bedside bias",
    "attrition bias",
    "recall bias",
    "measurement bias",
    "Hawthorne effect",
    "procedure bias",
    "observer-expectancy bias",
    "Pygmalion effect",
    "lead-time bias",
    "length-time bias",
    "randomization",
    "blinding",
    "placebo",
    "back-end survival",
    "screening",
    "study validity",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One printed page, carried whole. The “Bias and study errors” table — columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS — with the three-stage rail printed as full-width shaded bands inside the table (Recruiting participants · Performing study · Interpreting results). RECRUITING BAND — (1) Selection bias: nonrandom sampling or treatment allocation of subjects such that study population is not representative of target population; most commonly a sampling bias; convenience sampling (patients are enrolled on basis of ease of contact); Berkson bias (cases and/or controls selected from hospitals — “bedside bias” — are less healthy and have different exposures); attrition bias (participants lost to follow up have a different prognosis than those who complete the study); fixed by randomization (creates groups with similar distributions of known and unknown variables) and ensuring the choice of the right comparison/reference group. PERFORMING BAND — (2) Recall bias: awareness of disorder alters recall by subjects; common in retrospective studies; patients with disease recall exposure after learning of similar cases; fixed by decreasing time from exposure to follow-up and using medical records as sources. (3) Measurement bias: information is gathered in a systemically distorted manner; using a faulty automatic sphygmomanometer; Hawthorne effect (participants change behavior upon awareness of being observed — “Hawthorne watches you like a hawk.”); fixed by objective, standardized, previously tested methods of data collection planned ahead of time, and a placebo group. (4) Procedure bias: subjects in different groups are not treated the same; patients in treatment group spend more time in highly specialized hospital units. (5) Observer-expectancy bias: researcher’s belief in the efficacy of a treatment changes the outcome of that treatment (also called Pygmalion effect); an observer expecting treatment group to show signs of recovery is more likely to document positive outcomes. Rows 4 and 5 share ONE merged STRATEGIES cell in the print: blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments. INTERPRETING BAND — (6) Lead-time bias: early detection interpreted as ↑ survival, but the disease course has not changed; breast cancer diagnosed early by mammography may appear to exaggerate survival time because patients are known to have the cancer for longer; fixed by measuring “back-end” survival (adjust survival according to the severity of disease at the time of diagnosis), with the printed caveat that adjusting for severity is the potential masking of causality. (7) Length-time bias: screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier; a slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer; fixed by a randomized controlled trial assigning subjects to the screening program or to no screening.",
    why:
      "This page is the validity layer of the Epidemiology and Biostatistics subsection: the observational-studies page named the designs and their measures, the trials page named the machinery of experiments, and this page names the seven standard ways each of those studies lies — plus the fix for each lie. The organizing insight is the printed stage rail itself: bias enters a study at the stage where the distortion happens. WHO GOT IN (and who stayed) is decided at recruitment — that is selection bias, and the print gives it three faces: convenience sampling (enrolled on basis of ease of contact), Berkson bias (the hospitalized are less healthy and have different exposures — First Aid's own “bedside bias”), and attrition bias (those lost to follow up have a different prognosis — the sample erodes after recruitment, but the distortion is still in who the study population is, which is why the print classes it under selection). WHAT WAS REMEMBERED, MEASURED, DONE, AND EXPECTED happens during the study — recall bias (retrospective memory, rewritten by awareness of the disorder), measurement bias (the instrument is faulty, or the subjects change behavior because they are observed — the Hawthorne effect), procedure bias (the groups are not treated the same), and observer-expectancy bias (the researcher's belief changes the documented outcome — the Pygmalion effect). HOW A SCREENING RESULT IS READ happens at interpretation — lead-time bias (the clock starts earlier, so the same course looks longer) and length-time bias (the screen preferentially catches the slow diseases). The table's own geometry teaches the deepest lesson: rows 4 and 5 share ONE merged strategies cell, because blinding and placebo are a single fix for both human-influence traps — neither participants nor researchers can tilt what they do not know. And the fix column is stage-matched: randomization belongs to recruitment, blinding and standardized methods to performance, back-end survival adjustment and the screening RCT to interpretation.",
    keyIdea:
      "Decode any bias stem in four moves. MOVE 1 — WHICH STAGE? The printed rail: RECRUITING PARTICIPANTS (1 trap: selection), PERFORMING STUDY (4 traps: recall, measurement, procedure, observer-expectancy), INTERPRETING RESULTS (2 traps: lead-time, length-time). MOVE 2 — WHOSE ACTION DISTORTED THE STUDY? The sampler/enroller (who got in, who stayed → selection: convenience = ease of contact; Berkson = the hospitalized bedside; attrition = lost to follow up). The remembering subject (recall — common in retrospective studies). The instrument or the watched subject (measurement — faulty sphygmomanometer; Hawthorne — behavior changes under observation, “Hawthorne watches you like a hawk.”). The treating system (procedure — groups not treated the same). The expecting researcher (observer-expectancy/Pygmalion — belief changes the documented outcome). The screening clock (lead-time — early detection read as ↑ survival with the disease course unchanged; L(e)a(d)-time = (E)arly (d)etection). The screening net (length-time — long-latency disease is caught, short-latency disease becomes symptomatic first). MOVE 3 — NAME THE TRAP from the printed definition that matches the distorted action. MOVE 4 — ATTACH THE FIX: selection → randomization + the right comparison/reference group; recall → decrease time from exposure to follow-up + medical records; measurement → objective, standardized, previously tested methods planned ahead of time + placebo group; procedure AND observer-expectancy → the one merged cell: blinding (masking) + placebo (neither participants nor researchers know assignments); lead-time → measure “back-end” survival (adjust for severity at diagnosis; caveat — adjusting for severity can mask causality); length-time → randomize subjects to the screening program or no screening. Stage → distorted action → trap → fix: four moves and the whole table decodes.",
  },
  mechanisms: [
    {
      id: "stage-trap-map",
      title:
        "The study life cycle: how the printed three-stage rail generates and groups the seven traps",
      context:
        "The printed stage rail (book 263): Recruiting participants / Performing study / Interpreting results — three full-width bands inside the table",
      flow: {
        nodes: [
          {
            id: "lifecycle",
            label: "THE STUDY LIFE CYCLE — the rail every study walks",
            sublabel:
              "Input — the print organizes its seven rows under three shaded band labels: “Recruiting participants,” “Performing study,” “Interpreting results.” Every study passes through all three stages, and each bias enters at the stage whose work it distorts — which is why the rail, not the alphabet, is the table's real index (the 1-4-2 grouping is the KYP reading of the printed bands).",
            variant: "input",
          },
          {
            id: "recruiting",
            label: "STAGE 1 — RECRUITING PARTICIPANTS: who gets IN (and who stays)",
            sublabel:
              "Process — SELECTION BIAS, the one recruiting trap: “Nonrandom sampling or treatment allocation of subjects such that study population is not representative of target population” — and the print adds, “Most commonly a sampling bias.” Three printed faces: CONVENIENCE SAMPLING (“patients are enrolled on basis of ease of contact”), BERKSON BIAS (“cases and/or controls selected from hospitals (bedside bias) are less healthy and have different exposures”), and ATTRITION BIAS (“participants lost to follow up have a different prognosis than those who complete the study” — the erosion happens later, but the distortion is still in who the study population is, so the print classes it under selection).",
            variant: "process",
          },
          {
            id: "performing",
            label: "STAGE 2 — PERFORMING STUDY: what is remembered, measured, done, expected",
            sublabel:
              "Process — FOUR traps, one per way the running study can bend. RECALL BIAS: “Awareness of disorder alters recall by subjects; common in retrospective studies.” MEASUREMENT BIAS: “Information is gathered in a systemically distorted manner” — the faulty automatic sphygmomanometer, or the Hawthorne effect (“participants change behavior upon awareness of being observed”). PROCEDURE BIAS: “Subjects in different groups are not treated the same.” OBSERVER-EXPECTANCY BIAS: “Researcher’s belief in the efficacy of a treatment changes the outcome of that treatment (also called Pygmalion effect).” Subject memory, instrument and subject reactivity, unequal care, researcher belief — the four human and mechanical failure points of a running study.",
            variant: "process",
          },
          {
            id: "interpreting",
            label: "STAGE 3 — INTERPRETING RESULTS: how a screening finding is read",
            sublabel:
              "Process — TWO traps, both children of screening. LEAD-TIME BIAS: “Early detection interpreted as ↑ survival, but the disease course has not changed” — the print links the letters itself, L(e)a(d)-time = (E)arly (d)etection, with the E and d picked out in red. LENGTH-TIME BIAS: “Screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier” — the screen's net is biased toward the slow fish. Same mammography suite, two different illusions.",
            variant: "process",
          },
          {
            id: "stage-rule",
            label: "THE RULE — the stage where the distortion enters names the trap",
            sublabel:
              "Output — read any vignette through the rail: a distortion in WHO IS IN THE SAMPLE (by ease, by hospital bed, by differential loss) is selection bias no matter when it manifests; a distortion in WHAT WAS REMEMBERED, MEASURED, DONE, OR EXPECTED during the study is one of the performing four; a distortion in HOW A SURVIVAL BENEFIT OR SCREENING YIELD IS READ is lead-time or length-time. The rail is the table's own grammar (KYP synthesis of the printed bands) — and it predicts the fix before you read the fix column.",
            variant: "output",
          },
        ],
        edges: [
          { from: "lifecycle", to: "recruiting", label: "who gets in →" },
          { from: "lifecycle", to: "performing", label: "what happens while it runs →" },
          { from: "lifecycle", to: "interpreting", label: "how results are read →" },
          { from: "recruiting", to: "stage-rule", label: "1 trap: selection" },
          { from: "performing", to: "stage-rule", label: "4 traps: recall · measurement · procedure · observer-expectancy" },
          { from: "interpreting", to: "stage-rule", label: "2 traps: lead-time · length-time" },
        ],
      },
    },
    {
      id: "fix-toolbox-map",
      title:
        "The fix toolbox: how the printed strategies column maps one fix to each trap (and one shared fix to two)",
      context:
        "The printed STRATEGIES TO REDUCE BIAS column (book 263), including the one merged cell spanning the Procedure and Observer-expectancy rows",
      flow: {
        nodes: [
          {
            id: "toolbox",
            label: "THE TOOLBOX — the right-hand column of the printed table",
            sublabel:
              "Input — six printed fix families, stage-matched to the seven traps. The column's deepest printed lesson is structural: rows 4 and 5 (Procedure bias, Observer-expectancy bias) share ONE merged cell — the table itself says blinding and placebo are a single fix for both human-influence traps.",
            variant: "input",
          },
          {
            id: "fix-selection",
            label: "RANDOMIZATION + THE RIGHT COMPARISON GROUP → Selection bias",
            sublabel:
              "Process — “Randomization (creates groups with similar distributions of known and unknown variables)” and “Ensure the choice of the right comparison/reference group.” Randomization fixes the allocation; the right reference group fixes the sampling frame — Berkson's answer is precisely this: do not draw controls from the hospital bedside, because the hospitalized “are less healthy and have different exposures.”",
            variant: "process",
          },
          {
            id: "fix-recall",
            label: "A SHORTER CLOCK + THE MEDICAL RECORD → Recall bias",
            sublabel:
              "Process — “Decrease time from exposure to follow-up; use medical records as sources.” Memory is the distorted instrument in recall bias, so the fix replaces memory with the record and shrinks the interval it must span (KYP framing of the printed strategy: records do not remember; they were written before the outcome was known).",
            variant: "process",
          },
          {
            id: "fix-measurement",
            label: "OBJECTIVE, STANDARDIZED, PRETESTED METHODS + PLACEBO GROUP → Measurement bias",
            sublabel:
              "Process — “Use objective, standardized, and previously tested methods of data collection that are planned ahead of time. Use placebo group.” The fix attacks both printed faces: pretested instruments kill the faulty sphygmomanometer; the placebo group gives the watched subject's changed behavior (Hawthorne effect) a control that changed identically — “Hawthorne watches you like a hawk,” so give the hawk two groups to watch.",
            variant: "process",
          },
          {
            id: "fix-merged",
            label: "THE MERGED CELL — BLINDING (MASKING) + PLACEBO → Procedure AND Observer-expectancy bias",
            sublabel:
              "Process — the print's ONE strategies cell spanning both rows: “Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments.” One mechanism, two kills: if nobody knows who gets the treatment, caregivers cannot treat the groups differently (procedure) and expectant researchers cannot find the recovery they hope for (observer-expectancy/Pygmalion).",
            variant: "process",
          },
          {
            id: "fix-screening",
            label: "BACK-END SURVIVAL + THE SCREENING RCT → Lead-time and Length-time bias",
            sublabel:
              "Process — lead-time: “Measure ‘back-end’ survival (adjust survival according to the severity of disease at the time of diagnosis); a caveat of adjusting for severity is the potential masking of causality” — start the survival clock at a fixed point in the disease course instead of at diagnosis. Length-time: “A randomized controlled trial assigning subjects to the screening program or to no screening” — only randomization can make the screened and unscreened arms carry the same mix of slow and fast disease.",
            variant: "process",
          },
          {
            id: "fix-rule",
            label: "THE RULE — fixes are stage-matched",
            sublabel:
              "Output — recruitment is fixed by randomization and the right reference group; performance is fixed by blinding, placebos, standardized methods, records, and a shorter recall window; interpretation is fixed by adjusting the survival clock or randomizing to screening. When a stem names the fix, the trap is already named (KYP synthesis of the printed column).",
            variant: "output",
          },
        ],
        edges: [
          { from: "toolbox", to: "fix-selection", label: "who got in →" },
          { from: "toolbox", to: "fix-recall", label: "what was remembered →" },
          { from: "toolbox", to: "fix-measurement", label: "how it was measured →" },
          { from: "toolbox", to: "fix-merged", label: "what was done + expected →" },
          { from: "toolbox", to: "fix-screening", label: "how screening was read →" },
          { from: "fix-selection", to: "fix-rule", label: "randomize the recruiting" },
          { from: "fix-recall", to: "fix-rule", label: "shorten + record the performing" },
          { from: "fix-measurement", to: "fix-rule", label: "standardize + placebo the performing" },
          { from: "fix-merged", to: "fix-rule", label: "blind both performing traps" },
          { from: "fix-screening", to: "fix-rule", label: "adjust the clock / randomize the screen" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "bias-map",
      title:
        "The seven traps docked to the three-stage rail, each with its fix (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 263's table. LEFT — the three printed stage bands as a docked rail: RECRUITING PARTICIPANTS (1 trap: Selection), PERFORMING STUDY (4 traps: Recall, Measurement, Procedure, Observer-expectancy), INTERPRETING RESULTS (2 traps: Lead-time, Length-time). RIGHT — the seven biases as cards in printed order, each carrying its printed definition, example(s), and FIX chip; the Procedure and Observer-expectancy cards share ONE merged fix box, exactly as the print merges their STRATEGIES cell (“Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments”). First Aid's own in-cell hooks are attributed: the red “(Hawthorne watches you like a hawk).” mnemonic in the Measurement card, the “(bedside bias)” nickname in the Selection card's Berkson example, and the red E+d letter-link L(e)a(d)-time = (E)arly (d)etection in the Lead-time card.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 285 — the page's assets are the color-coded table (navy title and headers, teal TYPE names and stage-band labels, black body, red reserved for FA's letter-link hooks; VLM-read at 120dpi + PyMuPDF span colors + 300dpi pixel reads, staging-pubh11/vlm-census.txt) and the three full-width light-teal stage bands. The visual is an ORIGINAL KYP ADAPTATION: the rail is re-drawn as a docked left column, the rows as cards, the merged strategies cell as one spanning fix box — the artwork and layout are KYP's, every printed label (all seven rows, all four columns, the three band labels, the merged cell's full text) is preserved from the print, and the full table is additionally carried verbatim in the note's table block. ADJUDICATIONS drawn on the visual exactly as printed: the merged blinding-and-placebo cell spans BOTH the Procedure and Observer-expectancy cards; “Convenience sampling—patients are enrolled on basis of ease of contact” prints in the DEFINITION block of the Selection card (not among the examples); the Lead-time card carries the printed red-letter device (E + d) attributed to First Aid.",
    },
    {
      kind: "table",
      title:
        "Book 263 — the printed Bias and study errors table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's one block: 4 columns (TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS) and 7 data rows in printed order, grouped under the three stage bands (Recruiting participants → row 1; Performing study → rows 2–5; Interpreting results → rows 6–7). The STRATEGIES column carries ONE merged cell spanning the Procedure bias and Observer-expectancy bias rows (drawn here in both rows, marked) — the print's own statement that blinding + placebo is the single shared fix. The column header prints in small caps and extracts as “EXAmPLES” (a text-layer artifact, carried as extracted); sentence-final periods are normalized (the text layer prints terminal punctuation only inside the Hawthorne mnemonic); “follow up” (Attrition, verb) prints as two words while the Recall strategy prints the hyphenated noun “follow-up” — both carried exactly as printed.",
      columns: ["TYPE", "DEFINITION", "EXAmPLES", "STRATEGIES TO REDUCE BIAS"],
      rows: [
        [
          "Selection bias",
          "Nonrandom sampling or treatment allocation of subjects such that study population is not representative of target population. Most commonly a sampling bias. Convenience sampling—patients are enrolled on basis of ease of contact.",
          "Berkson bias—cases and/or controls selected from hospitals (bedside bias) are less healthy and have different exposures. Attrition bias—participants lost to follow up have a different prognosis than those who complete the study.",
          "Randomization (creates groups with similar distributions of known and unknown variables). Ensure the choice of the right comparison/reference group.",
        ],
        [
          "Recall bias",
          "Awareness of disorder alters recall by subjects; common in retrospective studies.",
          "Patients with disease recall exposure after learning of similar cases.",
          "Decrease time from exposure to follow-up; use medical records as sources.",
        ],
        [
          "Measurement bias",
          "Information is gathered in a systemically distorted manner.",
          "Using a faulty automatic sphygmomanometer. Hawthorne effect—participants change behavior upon awareness of being observed (Hawthorne watches you like a hawk).",
          "Use objective, standardized, and previously tested methods of data collection that are planned ahead of time. Use placebo group.",
        ],
        [
          "Procedure bias",
          "Subjects in different groups are not treated the same.",
          "Patients in treatment group spend more time in highly specialized hospital units.",
          "Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments. [ONE merged cell in the print — this single STRATEGIES cell vertically spans BOTH the Procedure bias and the Observer-expectancy bias rows.]",
        ],
        [
          "Observer-expectancy bias",
          "Researcher’s belief in the efficacy of a treatment changes the outcome of that treatment (also called Pygmalion effect).",
          "An observer expecting treatment group to show signs of recovery is more likely to document positive outcomes.",
          "[The same merged cell as the Procedure bias row above — the print's single STRATEGIES cell spans both rows:] “Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments.”",
        ],
        [
          "Lead-time bias",
          "Early detection interpreted as ↑ survival, but the disease course has not changed.",
          "Breast cancer diagnosed early by mammography may appear to exaggerate survival time because patients are known to have the cancer for longer.",
          "Measure “back-end” survival (adjust survival according to the severity of disease at the time of diagnosis); a caveat of adjusting for severity is the potential masking of causality.",
        ],
        [
          "Length-time bias",
          "Screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier.",
          "A slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer.",
          "A randomized controlled trial assigning subjects to the screening program or to no screening.",
        ],
      ],
      caption:
        "Verbatim carry, documented: SEVEN rows in printed order, grouped by the printed stage bands (VLM-confirmed — none missing or extra). First Aid's own hooks are the source's, carried VERBATIM and ATTRIBUTED: the red mnemonic “(Hawthorne watches you like a hawk).” inside the Measurement bias EXAMPLES cell, the printed nickname “(bedside bias)” inside the Berkson example, and the red letter-link “E”+“d” binding L(e)a(d)-time bias to its definition “(E)arly (d)etection” — none of these are KYP's. Printed quirks carried: “EXAmPLES” small-caps extraction artifact; “follow up” (Attrition) vs “follow-up” (Recall strategy) exactly as printed; the em-dash compounds “Convenience sampling—”, “Berkson bias—”, “Attrition bias—”, “Hawthorne effect—”; the curly-quoted “back-end” and the curly apostrophe in “Researcher’s”; the ↑ arrow in “↑ survival” (a C1 control byte precedes it in the raw layer — stripped by the verifier, documented); “and/or” rejoined across its line wrap; “Observer-expectancy bias” wraps across two lines in its TYPE cell; “Most commonly a sampling bias” prints as a black sub-line of the Selection bias DEFINITION cell (pixel-pinned — not red), with “Convenience sampling” as the third block of that same DEFINITION cell (bbox-pinned adjudication: the brief listed it among the examples; print governs); the merged STRATEGIES cell of rows 4–5 is printed here in both rows with its span marked.",
    },
    {
      kind: "list",
      title:
        "The decoder — trap → distorted action → example → fix, row by row (KYP's reading of the table)",
      intro:
        "Each printed row compressed to its exam-decision core: what action distorts the study, the printed example that anchors it, and the printed fix. This is the layer to recall when a vignette hands you a flawed study and asks for the bias's name or its remedy.",
      items: [
        {
          lead: "ROW 1 — SELECTION BIAS: who gets in (and who stays) — the recruiting trap",
          text: "Distorted action: nonrandom sampling or treatment allocation such that the study population is not representative of the target population — “most commonly a sampling bias.” Three printed faces: CONVENIENCE SAMPLING (patients enrolled on basis of ease of contact), BERKSON BIAS (hospital-selected cases and/or controls — “bedside bias” — are less healthy and have different exposures), ATTRITION BIAS (participants lost to follow up have a different prognosis than those who complete the study). Fix: randomization (creates groups with similar distributions of known and unknown variables) + ensure the choice of the right comparison/reference group. Stage tell: the distortion is in the sample's composition, whenever it arises.",
        },
        {
          lead: "ROW 2 — RECALL BIAS: the remembering subject — common in retrospective studies",
          text: "Distorted action: awareness of disorder alters recall by subjects. Printed example: patients with disease recall exposure after learning of similar cases. Fix: decrease time from exposure to follow-up; use medical records as sources — shrink the memory window and replace memory with the record. Stage tell: the data-gathering instrument is the subject's own memory of the past.",
        },
        {
          lead: "ROW 3 — MEASUREMENT BIAS: the instrument or the watched subject — data gathered in a systemically distorted manner",
          text: "Distorted action: information is gathered in a systemically distorted manner. Two printed faces: USING A FAULTY AUTOMATIC SPHYGMOMANOMETER (the instrument itself is wrong) and the HAWTHORNE EFFECT (participants change behavior upon awareness of being observed — First Aid's own mnemonic, printed in red in the cell: “Hawthorne watches you like a hawk.”). Fix: use objective, standardized, and previously tested methods of data collection planned ahead of time; use a placebo group. Stage tell: the distortion is in how information is captured, not in who was enrolled.",
        },
        {
          lead: "ROWS 4–5 — PROCEDURE AND OBSERVER-EXPECTANCY BIAS: unequal care and expectant reading — the two human-influence traps that share one fix",
          text: "PROCEDURE BIAS: subjects in different groups are not treated the same — patients in treatment group spend more time in highly specialized hospital units. OBSERVER-EXPECTANCY BIAS: researcher’s belief in the efficacy of a treatment changes the outcome of that treatment (also called Pygmalion effect) — an observer expecting treatment group to show signs of recovery is more likely to document positive outcomes. The print gives BOTH rows one merged STRATEGIES cell: blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments. Stage tell: procedure bias lives in the care delivered; observer-expectancy lives in the outcome documented — blinding kills both because nobody knows who is who.",
        },
        {
          lead: "ROW 6 — LEAD-TIME BIAS: the clock starts early — early detection misread as longer survival",
          text: "Distorted action: early detection interpreted as ↑ survival, but the disease course has not changed. Printed example: breast cancer diagnosed early by mammography may appear to exaggerate survival time because patients are known to have the cancer for longer. Fix: measure “back-end” survival (adjust survival according to the severity of disease at the time of diagnosis) — with the printed caveat that adjusting for severity is the potential masking of causality. First Aid's own red-letter link: L(e)a(d)-time = (E)arly (d)etection. Stage tell: the survival benefit is a bookkeeping artifact of when the clock started.",
        },
        {
          lead: "ROW 7 — LENGTH-TIME BIAS: the screening net catches the slow fish",
          text: "Distorted action: screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier. Printed example: a slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer. Fix: a randomized controlled trial assigning subjects to the screening program or to no screening — only randomization equalizes the slow/fast disease mix across arms. Stage tell: the screened population looks healthier in survival terms partly because screening oversamples the indolent disease.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Naming the trap from any flawed-study vignette in four questions",
      intro:
        "The whole table distilled into an ordered reading path — STAGE, ACTION, NAME, FIX — applicable to any study-error stem, printed on book 263 or not.",
      steps: [
        {
          label: "QUESTION 1 — AT WHICH STAGE DID THE DISTORTION ENTER?",
          detail:
            "A sample that does not represent its target (by ease of contact, by hospital bed, by differential loss to follow up) → the RECRUITING band → selection bias. A distortion in what subjects remember, what the instrument reads, how the groups are treated, or what the researcher expects → the PERFORMING band → recall, measurement, procedure, or observer-expectancy bias. A distortion in how a screening-detected survival or yield is read → the INTERPRETING band → lead-time or length-time bias.",
        },
        {
          label: "QUESTION 2 — WHOSE ACTION DISTORTED THE STUDY?",
          detail:
            "The enroller (ease of contact → convenience; the hospitalized → Berkson “bedside bias”; the lost → attrition) → selection. The remembering subject, aware of the disease → recall. The instrument (faulty automatic sphygmomanometer) or the watched subject (behavior change when observed — “Hawthorne watches you like a hawk.”) → measurement. The treating system (more time in highly specialized units for one group) → procedure. The expecting researcher (documenting the recovery they believe in — Pygmalion) → observer-expectancy. The clock (diagnosis earlier, course unchanged) → lead-time. The net (long-latency disease caught, short-latency disease presents first) → length-time.",
        },
        {
          label: "QUESTION 3 — NAME THE TRAP FROM THE PRINTED DEFINITION",
          detail:
            "Selection: study population not representative of target population. Recall: awareness of disorder alters recall by subjects. Measurement: information gathered in a systemically distorted manner. Procedure: subjects in different groups are not treated the same. Observer-expectancy: researcher’s belief in the efficacy of a treatment changes the outcome (Pygmalion effect). Lead-time: early detection interpreted as ↑ survival, disease course unchanged. Length-time: the screen detects long-latency disease while short-latency disease becomes symptomatic earlier.",
        },
        {
          label: "QUESTION 4 — ATTACH THE PRINTED FIX (or read a named fix backwards to its trap)",
          detail:
            "Randomization + the right comparison/reference group → selection. Decrease time from exposure to follow-up + medical records as sources → recall. Objective, standardized, previously tested methods planned ahead of time + placebo group → measurement. Blinding (masking) + placebo (the merged cell) → procedure AND observer-expectancy. Measure “back-end” survival adjusted for severity at diagnosis (caveat: potential masking of causality) → lead-time. A randomized controlled trial assigning subjects to the screening program or no screening → length-time.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Lead-time vs length-time — the two screening biases of the Interpreting band, in the table's own words",
      intro:
        "Rows 6 and 7 are the exam's favorite pair: both are artifacts of screening programs, both fake a survival benefit, and both live in the Interpreting results band — but the distorted quantity differs, and so does the fix.",
      columns: [
        "Lead-time bias — the CLOCK starts early",
        "Length-time bias — the NET catches the slow",
      ],
      rows: [
        {
          label: "What is distorted",
          a: "The starting point of the survival clock: “Early detection interpreted as ↑ survival, but the disease course has not changed.” The patient is simply known to have the cancer for longer.",
          b: "The composition of what the screen finds: “Screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier.” The screened set is enriched for indolent disease.",
        },
        {
          label: "The printed example",
          a: "“Breast cancer diagnosed early by mammography may appear to exaggerate survival time because patients are known to have the cancer for longer.”",
          b: "“A slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer.”",
        },
        {
          label: "The survival illusion",
          a: "Time-from-diagnosis rises while time-in-course is fixed — a bookkeeping artifact (First Aid's own red-letter link: L(e)a(d)-time = (E)arly (d)etection).",
          b: "Screened cancers look slower-growing by selection — the aggressive ones present clinically before the screen ever runs (KYP framing of the printed mechanism).",
        },
        {
          label: "The printed fix",
          a: "Measure “back-end” survival — adjust survival according to the severity of disease at the time of diagnosis; printed caveat: adjusting for severity is the potential masking of causality.",
          b: "A randomized controlled trial assigning subjects to the screening program or to no screening — randomization equalizes the slow/fast mix across arms.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one merged-cell payoff",
      body:
        "SHAPE 1 — NAME THE BIAS FROM THE FLAW: the stem describes who was sampled (clinic volunteers, hospitalized controls, dropouts with worse prognosis), what was remembered, measured, done, or expected — route through the four questions (stage → action → name). SHAPE 2 — THE SCREENING TRAP: “a mammography program appears to improve 5-year survival” → ask whether the clock started early (lead-time) or the net caught the slow ones (length-time) — and expect the fix as the answer option (back-end survival adjustment vs the screening RCT). SHAPE 3 — THE FIX IN THE STEM: “which of the following reduces this bias?” — match the printed fix: randomization/right comparison group (selection), records + shorter window (recall), objective pretested methods + placebo (measurement), blinding + placebo (procedure AND observer-expectancy — the merged cell means ONE answer covers both). SHAPE 4 — THE HAWTHORNE HOOK: subjects change behavior because they know they are being watched — “Hawthorne watches you like a hawk.” — measurement bias, not procedure or observer-expectancy. THE PAYOFF DETAIL: procedure bias and observer-expectancy bias share their fix because the print merges their strategies cell — an exam item that offers “blinding (masking) and use of placebo” is correct for either.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own printed hooks — carried verbatim and attributed",
      body:
        "The page prints THREE hooks of its own (all pinned by PyMuPDF span colors + 300dpi pixel reads + the VLM pass, staging-pubh11/vlm-census.txt) — these are the source's, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “(Hawthorne watches you like a hawk).” — inside the Measurement bias EXAMPLES cell, printed in RED bold (with “observed” from the preceding line also red); the mnemonic watches the watched: participants change behavior upon awareness of being observed. (2) “(bedside bias)” — First Aid's printed nickname for Berkson bias (Selection bias EXAMPLES cell), with “be” and “bias” picked out in red and the same letters red in “Berkson bias”: the hospitalized bedside is less healthy and differently exposed. (3) The red-letter link E + d: “Lead-time bias” prints with e and d in red, and its definition opens “Early detection” with E and d in red bold — L(e)a(d)-time = (E)arly (d)etection. The two KYP originals in the Memory section are marked as such: “ONE RECRUITS, FOUR PERFORM, TWO INTERPRET” (the stage census: 1 selection trap at recruiting; recall, measurement, procedure, observer-expectancy at performing; lead-time and length-time at interpreting) and “LEAD-TIME STEALS A HEAD START; LENGTH-TIME FAVORS THE SLOW” (the two screening biases and their mechanisms).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — four printed props and one boundary",
      intro:
        "First Aid dresses each bias in a clinical prop; these props are high-yield anchors for stem recognition, and all four are printed on book 263.",
      items: [
        {
          lead: "THE HYPERTENSION CLINIC — the faulty automatic sphygmomanometer (measurement bias)",
          text: "The printed instrument example: “Using a faulty automatic sphygmomanometer” gathers information in a systemically distorted manner — every reading shifts the same way because the device is miscalibrated (KYP context: “systemically” is the printed word — the distortion is in the system of measurement, not random error). The clinical defense is the printed fix: objective, standardized, previously tested methods of data collection planned ahead of time — calibrate, standardize, and pretest before the first patient is measured.",
        },
        {
          lead: "THE SPECIALIZED UNIT — unequal care between arms (procedure bias)",
          text: "The printed care example: “Patients in treatment group spend more time in highly specialized hospital units” — subjects in different groups are not treated the same, so the outcome mixes the treatment with the extra care. The clinical defense: blinding (masking) and placebo, so that neither the caregivers nor the patients know who receives the active arm — the merged cell's lesson.",
        },
        {
          lead: "THE MAMMOGRAPHY SUITE — the two screening illusions (lead-time and length-time bias)",
          text: "The printed screening example: “Breast cancer diagnosed early by mammography may appear to exaggerate survival time because patients are known to have the cancer for longer” — lead-time: the disease course has not changed, only the clock's start. Its sibling: “A slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer” — length-time: the screen's yield is enriched for the indolent. Together they are the standard caveat behind every cancer-screening survival claim (KYP framing: observed survival gains in screening programs must survive both corrections before they count).",
        },
        {
          lead: "THE BOUNDARY — what this page is NOT: confounding",
          text: "All seven rows on this page are BIAS — systematic error in how the study was assembled, run, or read. The chapter's next page (book 264) opens “Confounding vs effect modification”: a confounder is a third variable linked to both exposure and outcome, and it is fixed by matching, stratification, and multivariable adjustment — a different beast from every trap printed here (KYP framing of the chapter's structure: bias is a defect of the study's machinery; confounding is a rival explanation riding the data).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A health system introduces an annual mammography program and reports that, five years later, women whose breast cancer was detected by screening survive longer after diagnosis than women diagnosed before the program; the biology of the detected tumors and the age at death are unchanged.",
        discriminator:
          "Earlier diagnosis with an unchanged disease course — the survival gain is time already known-to-have-disease, not time gained",
        concept: "Lead-time bias and its fix",
        answer:
          "Lead-time bias — early detection interpreted as ↑ survival, but the disease course has not changed; patients are simply known to have the cancer for longer. The fix is printed: measure “back-end” survival (adjust survival according to the severity of disease at the time of diagnosis), with the caveat that adjusting for severity is the potential masking of causality.",
      },
      {
        stem: "A screening program preferentially registers slowly progressive cancers, because the rapidly progressive ones present with symptoms and are diagnosed clinically before the screening round; the screened cohort's tumors look indolent and its survival statistics look superior.",
        discriminator:
          "The screen's yield is enriched for long-latency disease — “a slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer”",
        concept: "Length-time bias and its fix",
        answer:
          "Length-time bias — the screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier. The printed fix: a randomized controlled trial assigning subjects to the screening program or to no screening.",
      },
      {
        stem: "In a case-control study of a rare cancer, mothers of affected children are interviewed about prenatal exposures years later and report far more solvent exposure than do mothers of healthy controls; the investigators worry that the mothers of affected children have thought harder about the past.",
        discriminator:
          "Awareness of the disorder alters recall by subjects; the data-gathering instrument is memory, and the study is retrospective",
        concept: "Recall bias and its fix",
        answer:
          "Recall bias — patients with disease recall exposure after learning of similar cases; common in retrospective studies. The printed fix: decrease time from exposure to follow-up; use medical records as sources (KYP context: the record was written before the outcome was known, so it cannot be rewritten by it).",
      },
      {
        stem: "Participants in an exercise study who know they are being tracked by wearable monitors begin exercising far more than their baseline habits, and the investigators' apparent intervention effect shrinks when the observation period ends.",
        discriminator:
          "Subjects change behavior upon awareness of being observed — the distortion is in the measurement of behavior",
        concept: "Measurement bias (Hawthorne effect)",
        answer:
          "Measurement bias via the Hawthorne effect — “Hawthorne watches you like a hawk.” (First Aid's own, printed in red in the cell). Information is gathered in a systemically distorted manner because the watched behave differently. The printed fix: use objective, standardized, and previously tested methods of data collection planned ahead of time; use a placebo group.",
      },
    ],
    traps: [
      {
        a: "Lead-time bias — the clock starts early; the disease course is unchanged",
        b: "Length-time bias — the net catches slow, long-latency disease",
        whyConfused:
          "Both are screening-program artifacts of the Interpreting band; both inflate the apparent survival of the screened, and both can appear in the same mammography stem",
        keyDifference:
          "Lead-time distorts WHEN the survival clock starts (early detection read as ↑ survival — patients are known to have the cancer for longer); length-time distorts WHICH disease the screen catches (slowly progressive cancers overrepresented because rapidly progressive ones become symptomatic earlier)",
        clue:
          "Clock/diagnosis-timing language → lead-time; slow-vs-fast or latency language → length-time. Fixes differ: back-end survival adjustment vs the screening RCT.",
      },
      {
        a: "Measurement bias (Hawthorne effect) — the SUBJECT changes behavior when observed",
        b: "Observer-expectancy bias (Pygmalion effect) — the RESEARCHER's belief changes the documented outcome",
        whyConfused:
          "Both are performing-band traps in which someone's awareness distorts the data; both are helped by study-design machinery, and the printed table even shares one fix family (placebo/blinding)",
        keyDifference:
          "Whose awareness does the work: the watched participant changes behavior upon awareness of being observed (“Hawthorne watches you like a hawk.”); the expecting researcher documents the recovery they believe in — “an observer expecting treatment group to show signs of recovery is more likely to document positive outcomes”",
        clue:
          "If the stem's actor is a participant behaving differently → Hawthorne/measurement; if the actor is an investigator grading or documenting outcomes → observer-expectancy.",
      },
      {
        a: "Procedure bias — subjects in different groups are not treated the same",
        b: "Observer-expectancy bias — the researcher's belief changes the outcome",
        whyConfused:
          "The print gives both rows ONE merged STRATEGIES cell (blinding + placebo), so both can be “fixed by blinding” — and a vignette with unequal care AND an expectant assessor contains both",
        keyDifference:
          "Procedure bias lives in the CARE delivered (patients in treatment group spend more time in highly specialized hospital units); observer-expectancy lives in the OUTCOME documented (belief in efficacy changes the outcome of that treatment — also called Pygmalion effect)",
        clue:
          "Different treatment intensity/exposure to care between arms → procedure; assessing/scoring/documenting colored by expectation → observer-expectancy.",
      },
      {
        a: "Berkson bias — hospital-selected cases and/or controls (“bedside bias”)",
        b: "Attrition bias — participants lost to follow up",
        whyConfused:
          "Both are printed faces of SELECTION bias, so an option list containing “selection bias” is tempting for either stem, and both distort who is in the study population",
        keyDifference:
          "Berkson distorts ENROLLMENT: hospital-based cases and/or controls are less healthy and have different exposures; attrition distorts RETENTION: participants lost to follow up have a different prognosis than those who complete the study — the sample erodes nonrandomly after recruitment",
        clue:
          "Hospital/clinic sampling frame → Berkson (bedside bias); dropouts/loss to follow up differing by prognosis → attrition. Both fix back to the same printed remedies: randomization + the right comparison/reference group.",
      },
    ],
    pivots: [
      {
        lookAlike: "A screening program “improves survival” — deciding which screening bias",
        differentiator:
          "What exactly was distorted: the clock's start or the catch's composition",
        correctPath:
          "Earlier diagnosis, unchanged course, “known to have the cancer for longer” → lead-time (fix: measure “back-end” survival adjusted for severity at diagnosis, caveat masking of causality). Screened tumors disproportionately slow/long-latency while fast ones present first → length-time (fix: an RCT assigning subjects to the screening program or to no screening).",
      },
      {
        lookAlike: "An option list that includes “confounding” alongside the seven biases",
        differentiator:
          "Bias is a defect of the study's machinery; confounding is a rival third-variable explanation riding the data",
        correctPath:
          "If the stem's problem is a third factor linked to both exposure and outcome (a confounder), the answer is confounding/effect modification territory — the NEXT page of the chapter, not this one. If the problem is in who was sampled, what was remembered/measured/done/expected, or how screening results were read, it is one of the seven printed traps.",
      },
      {
        lookAlike: "The fix named in the stem — reading a remedy backwards to its trap",
        differentiator:
          "Each printed fix maps to its stage: randomization to recruitment, blinding/standardization to performance, clock-adjustment/screening-RCT to interpretation",
        correctPath:
          "“Randomization” or “choice of the right comparison/reference group” → selection bias. “Medical records” or “decreased time from exposure to follow-up” → recall bias. “Objective, standardized, previously tested methods” or “placebo group” → measurement bias. “Blinding (masking) and use of placebo” → procedure AND/OR observer-expectancy bias (the merged cell). “Back-end survival” → lead-time. “Randomized controlled trial assigning subjects to the screening program or to no screening” → length-time.",
      },
    ],
    miniCase: {
      vignette:
        "A residents' research project studies the association between occupational solvent exposure and bladder cancer. Short on time, the team enrolls cases from the urology oncology ward of the university hospital and recruits controls from visitors in the same hospital's lobby, then interviews both groups about job histories. A faculty reviewer notes that the hospital's visitors include a high share of chronically ill family members of hospitalized patients, and that the study's control group is therefore sicker and more heavily exposed to industrial work environments than the general population. The residents are asked to name the flaw before the project can proceed.",
      question:
        "Which of the following best describes the bias most likely to distort this study?",
      options: [
        {
          label: "A",
          text: "Selection bias (Berkson bias)",
          correct: true,
          why: "CORRECT — the distortion is in WHO is in the sample: cases and/or controls selected from hospitals — First Aid's own printed nickname, “bedside bias” — are less healthy and have different exposures, so the study population is not representative of the target population. The printed definition fits exactly (nonrandom sampling of subjects such that the study population is not representative), and the printed fix names this case's remedy: ensure the choice of the right comparison/reference group, with randomization where allocation applies.",
        },
        {
          label: "B",
          text: "Recall bias",
          why: "TEMPTING but wrong — the stem does involve interviews about past exposure, and recall bias (awareness of disorder alters recall by subjects; common in retrospective studies) is the classic case-control hazard. But the reviewer's objection is about the COMPOSITION of the control group (sicker and differently exposed hospital visitors), not about anyone's memory. The fix would also differ: decrease time from exposure to follow-up; use medical records as sources.",
        },
        {
          label: "C",
          text: "Measurement bias (Hawthorne effect)",
          why: "TEMPTING but wrong — the Hawthorne effect is participants changing behavior upon awareness of being observed (“Hawthorne watches you like a hawk.”), a face of measurement bias (information gathered in a systemically distorted manner). Nothing in the stem changes behavior because of observation; the interviews may be perfectly accurate and the sample still unrepresentative.",
        },
        {
          label: "D",
          text: "Observer-expectancy bias",
          why: "TEMPTING but wrong — observer-expectancy bias is the researcher's belief in the efficacy of a treatment changing the outcome of that treatment (also called Pygmalion effect), with the observer more likely to document positive outcomes in the expected direction. No outcome documentation is being colored by belief here; the flaw precedes any outcome assessment — it is in the sampling frame.",
        },
        {
          label: "E",
          text: "Lead-time bias",
          why: "WRONG stage entirely — lead-time bias is early detection interpreted as ↑ survival when the disease course has not changed (the mammography/breast-cancer example), an artifact of reading screening results in the Interpreting band. This study is not a screening program and makes no survival claim; the distortion is in recruitment.",
        },
      ],
      reasoning:
        "The question tests the stage rule: locate where the distortion entered. The reviewer's objection is about the control group's composition — hospital-recruited, sicker, differently exposed — which is the recruiting band: selection bias, whose printed hospital face is Berkson bias (“bedside bias”), with First Aid's own red-highlighted nickname in the cell. Option B (recall) fails because the objection is not about memory; C and D fail because no behavior or documentation changed — only the sampling frame; E fails because no screening survival claim is being read. The printed fix also confirms the diagnosis: the right comparison/reference group (and randomization where treatment allocation applies) — the answer to “how would you fix it?” is the signature of the trap.",
    },
  },
  mnemonics: [
    {
      code: "Hawthorne watches you like a hawk.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in red bold inside the Measurement bias EXAMPLES cell (carried verbatim, attributed — with the word “observed” from the preceding line and the watch-words “Haw”/“watches”/“haw” picked out in red by the book's letter-link device): the HAWTHORNE EFFECT is participants changing behavior upon awareness of being OBSERVED — the watched behave like birds under a hawk's eye.",
      memorizes:
        "The Hawthorne effect's mechanism (behavior change under observation) and its classification (a face of measurement bias — information gathered in a systemically distorted manner)",
      whenToUse:
        "Any stem where subjects alter behavior because they know they are being watched (wearable monitors, observed hand hygiene, diet diaries under supervision); pair with the fix — objective, standardized, previously tested methods planned ahead of time, and a placebo group.",
      clinical:
        "The effect powers run-in designs and placebo arms in real trials (KYP context): because being watched changes behavior, an observed group is never a baseline — which is exactly why the printed fix adds a placebo group to absorb the reactivity.",
    },
    {
      code: "Berkson bias = bedside bias",
      meaning:
        "FIRST AID'S OWN printed nickname, carried verbatim and attributed from the Selection bias EXAMPLES cell — “cases and/or controls selected from hospitals (bedside bias) are less healthy and have different exposures,” with the book's red letter-link picking out “be…bias” in both “Berkson bias” and “bedside bias”: the hospital BEDSIDE is a biased sampling frame.",
      memorizes:
        "The hospital-sampling face of selection bias: who is recruited (cases and/or controls from hospitals), why they are unrepresentative (less healthy, different exposures), and the nickname that names the trap",
      whenToUse:
        "Any stem drawing cases, controls, or the whole sample from an inpatient or specialty-clinic setting; the fix is the printed remedy for selection bias — the right comparison/reference group (and randomization where allocation applies).",
      clinical:
        "Hospital-based case-control studies are the classic setting (KYP context): the ward and the lobby are both filtered by illness, so both groups' exposures differ from the population — sample the community, not the bedside.",
    },
    {
      code: "ONE RECRUITS, FOUR PERFORM, TWO INTERPRET",
      meaning:
        "A KYP ORIGINAL — the stage census of the printed rail: ONE trap at RECRUITING participants (Selection bias — with its three faces: convenience, Berkson/bedside, attrition); FOUR traps while PERFORMING the study (Recall, Measurement, Procedure, Observer-expectancy); TWO traps when INTERPRETING results (Lead-time, Length-time — the screening pair).",
      memorizes:
        "All seven printed rows, grouped exactly as the book's three stage bands group them, with the 1-4-2 count as the checksum",
      whenToUse:
        "Before reading options on any bias question: place the stem's distortion in a stage, then count through that stage's candidates (1, 4, or 2) — the stage plus the distorted action names the trap.",
      clinical:
        "The census mirrors real protocol review (KYP context): reviewers screen recruitment plans for selection, monitor conduct for the performing four, and demand screening-bias corrections before accepting survival claims from early-detection programs.",
    },
    {
      code: "LEAD-TIME STEALS A HEAD START; LENGTH-TIME FAVORS THE SLOW",
      meaning:
        "A KYP ORIGINAL — the two screening biases of the Interpreting band in one line: LEAD-TIME bias steals a head start on the survival clock (early detection read as ↑ survival while the disease course has not changed — the book's own red letters make L(e)a(d)-time = (E)arly (d)etection); LENGTH-TIME bias favors the slow (the screening net catches long-latency disease while short-latency disease becomes symptomatic earlier).",
      memorizes:
        "The mechanism of each screening bias and their different fixes: back-end survival adjustment (lead-time) vs the randomized screening trial (length-time)",
      whenToUse:
        "Any screening-program survival claim: ask “did the clock start early, or does the catch skew slow?” — and answer with the matching printed fix, remembering the caveat that adjusting for severity can mask causality.",
      clinical:
        "Cancer-screening statistics are the habitat (KYP context): mammography's printed example is lead-time; the slowly-vs-rapidly progressive cancer example is length-time — every apparent screening survival benefit must survive both questions.",
    },
  ],
  rapidReview: {
    s30: [
      "Selection bias — nonrandom sampling or treatment allocation such that study population is not representative of target population; most commonly a sampling bias; faces: convenience sampling, Berkson (bedside) bias, attrition bias → fix: randomization + right comparison/reference group",
      "Recall bias — awareness of disorder alters recall by subjects; common in retrospective studies → fix: decrease time from exposure to follow-up; use medical records as sources",
      "Measurement bias — information gathered in a systemically distorted manner; faulty automatic sphygmomanometer; Hawthorne effect (“Hawthorne watches you like a hawk.”) → fix: objective, standardized, previously tested methods planned ahead of time + placebo group",
      "Procedure bias — subjects in different groups are not treated the same (treatment group spends more time in highly specialized hospital units) → fix: the merged cell — blinding (masking) + placebo",
      "Observer-expectancy bias — researcher's belief in the efficacy of a treatment changes the outcome (Pygmalion effect) → fix: the same merged cell — blinding (masking) + placebo (neither participants nor researchers know assignments)",
      "Lead-time bias — early detection interpreted as ↑ survival, but the disease course has not changed (mammography/breast cancer) → fix: measure “back-end” survival adjusted for severity at diagnosis; caveat: potential masking of causality",
      "Length-time bias — screening test detects diseases with long latency period while shorter-latency disease becomes symptomatic earlier (slowly vs rapidly progressive cancer) → fix: RCT assigning subjects to the screening program or no screening",
      "The stage rail — Recruiting participants (selection) · Performing study (recall, measurement, procedure, observer-expectancy) · Interpreting results (lead-time, length-time)",
    ],
    m3: [
      "“Hawthorne watches you like a hawk.” — observed subjects change behavior; a red in-cell face of measurement bias (First Aid's own)",
      "Berkson bias = bedside bias — hospital-selected cases/controls are less healthy and differently exposed (First Aid's own nickname)",
      "ONE RECRUITS, FOUR PERFORM, TWO INTERPRET — the 1-4-2 stage census of the seven traps (KYP)",
      "LEAD-TIME STEALS A HEAD START; LENGTH-TIME FAVORS THE SLOW — the two screening biases and their fixes (KYP)",
    ],
    m10: [
      "The STRATEGIES column merges ONE cell across the Procedure bias and Observer-expectancy bias rows: “Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments” — one fix family, two traps",
      "The stage rail prints as three full-width shaded bands INSIDE the table (Recruiting participants / Performing study / Interpreting results), grouping the rows 1-4-2 — and “Convenience sampling—patients are enrolled on basis of ease of contact” prints in the DEFINITION cell (its third block, under “Most commonly a sampling bias”), not among the examples",
      "“Most commonly a sampling bias” prints as a black sub-line of the Selection bias definition (pixel-pinned); the red on the page is reserved for FA's letter-link hooks: “(bedside bias),” the Hawthorne mnemonic's watch-words, and the E+d binding L(e)a(d)-time to (E)arly (d)etection",
      "Printed punctuation quirks: “follow up” (Attrition, verb) vs “follow-up” (Recall strategy, noun); the ↑ in “↑ survival” carries a stray C1 control byte in the text layer; “Observer-expectancy / bias” wraps in its TYPE cell",
      "Lead-time's fix carries its own printed caveat — adjusting survival for severity at diagnosis is the potential masking of causality — so the correction itself can hide a true screening benefit",
    ],
  },
  recall: [
    {
      q: "Which bias is nonrandom sampling or treatment allocation of subjects such that the study population is not representative of the target population, what is its most common form, and what are its three printed faces?",
      a: "Selection bias — most commonly a sampling bias. Faces: convenience sampling (patients enrolled on basis of ease of contact), Berkson bias (cases and/or controls selected from hospitals — “bedside bias” — are less healthy and have different exposures), and attrition bias (participants lost to follow up have a different prognosis than those who complete the study).",
    },
    {
      q: "A retrospective study's subjects, aware of their disease, report past exposures differently than healthy controls. Name the bias and both printed reduction strategies.",
      a: "Recall bias — awareness of disorder alters recall by subjects; common in retrospective studies. Reduction: decrease time from exposure to follow-up; use medical records as sources.",
    },
    {
      q: "What is the Hawthorne effect, which bias family does it belong to, and what is First Aid's printed mnemonic for it?",
      a: "Participants change behavior upon awareness of being observed — a face of measurement bias (information is gathered in a systemically distorted manner). First Aid's own mnemonic, printed in red in the cell: “(Hawthorne watches you like a hawk).” Reduction: objective, standardized, previously tested methods of data collection planned ahead of time; use a placebo group.",
    },
    {
      q: "Patients in a treatment group spend more time in highly specialized hospital units. Name the bias — and the single printed strategies cell that covers BOTH this bias and observer-expectancy bias.",
      a: "Procedure bias — subjects in different groups are not treated the same. The merged cell: “Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments.”",
    },
    {
      q: "What is observer-expectancy bias also called, and what is its printed example?",
      a: "The Pygmalion effect — the researcher's belief in the efficacy of a treatment changes the outcome of that treatment. Example: an observer expecting treatment group to show signs of recovery is more likely to document positive outcomes.",
    },
    {
      q: "A mammography program's screened patients appear to survive longer because they are known to have the cancer for longer. Name the bias, its fix, and the fix's printed caveat.",
      a: "Lead-time bias — early detection interpreted as ↑ survival, but the disease course has not changed. Fix: measure “back-end” survival (adjust survival according to the severity of disease at the time of diagnosis). Caveat: adjusting for severity is the potential masking of causality.",
    },
    {
      q: "Why does a screening test preferentially detect slowly progressive cancers, what is the bias called, and what is the printed fix?",
      a: "Because the screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier — length-time bias. Fix: a randomized controlled trial assigning subjects to the screening program or to no screening.",
    },
    {
      q: "Name the three printed stage bands and the biases each governs.",
      a: "Recruiting participants → Selection bias. Performing study → Recall bias, Measurement bias, Procedure bias, Observer-expectancy bias. Interpreting results → Lead-time bias, Length-time bias.",
    },
    {
      q: "Which printed fix creates groups with similar distributions of known AND unknown variables, and which trap does it repair?",
      a: "Randomization — the printed reduction strategy for selection bias (paired with ensuring the choice of the right comparison/reference group).",
    },
  ],
  related: [
    {
      title: "Confounding vs effect modification — the next page of the validity triad",
      note:
        "The very next page of the chapter (book 264) separates confounding (a third variable linked to both exposure and outcome) from effect modification (a genuinely different effect across strata) — the rival explanation that is NOT one of the seven bias traps printed here. The exam loves the bias-vs-confounding boundary, and the two pages together draw it. (Produced in parallel in this same batch — referenced by design.)",
      topicId: "confounding-effect-modification",
    },
    {
      title: "Clinical therapeutic trials — where the fixes live",
      note:
        "The bias page's fix column is the trials page's machinery: randomization, blinding (masking), placebo, and intention-to-treat are defined on the Clinical therapeutic trial pages (phases, crossover with washout) — this page says WHAT each machine part repairs; that page says how the machine is built.",
      topicId: "clinical-therapeutic-trials",
    },
    {
      title: "Observational studies — the designs the traps attack",
      note:
        "Recall bias is “common in retrospective studies” — the case-control design of the observational-studies page; attrition bias is the cohort's loss-to-follow-up problem; Berkson bias is the hospital-based case-control's birth defect. The design layer and the validity layer only make sense stacked.",
      topicId: "observational-studies",
    },
    {
      title: "ROC, precision, and accuracy — measurement error's quantified siblings",
      note:
        "Measurement bias (systemic distortion of gathered information) borders the test-performance material: a faulty sphygmomanometer shifts systematically (bias) while a noisy one scatters (random error), and the ROC/precision-accuracy pages quantify what distortion does to cutoffs, PPV, and NPV — prevalence ∼ pretest probability is the bridge.",
      topicId: "roc-precision-accuracy",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — screening test performance",
      connection:
        "Lead-time and length-time bias are the interpretation-layer costs of every screening test whose sensitivity and specificity the ROC material quantifies: a positive screen moves the diagnosis earlier in the course (lead-time) and preferentially in the slow-growing disease (length-time), so apparent survival gains must be corrected before a test's performance numbers mean anything clinically.",
    },
    {
      subject: "Research methods — clinical therapeutic trials",
      connection:
        "The merged blinding-and-placebo cell of this page is the experimental-design core of the therapeutic-trials material: randomized, controlled, double-blinded trials with crossover and washout exist precisely because procedure and observer-expectancy bias (plus measurement and selection bias) otherwise decide the result.",
    },
    {
      subject: "Oncology — cancer screening and survival statistics",
      connection:
        "The page's two screening examples are oncology's standing debate: mammography-detected breast cancer appearing to exaggerate survival time (lead-time) and the slowly progressive cancer overrepresented in screened cohorts (length-time) — the standard caveats behind every cancer-screening mortality claim.",
    },
    {
      subject: "Behavioral science — reactivity and expectancy effects",
      connection:
        "The Hawthorne effect (subjects change behavior upon awareness of being observed) and the Pygmalion effect (expectation changes documented outcomes) are behavioral-science phenomena imported into research methods: reactivity to observation and interpersonal expectancy are the psychological engines of two of the seven traps.",
    },
  ],
};
