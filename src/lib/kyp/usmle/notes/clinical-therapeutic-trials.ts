import type { KypUsMLENote } from "../types";

// Public Health — pubh batch 1 / task pubh2. Source: pdf page 279 / book
// 257, Part 1, UPPER PORTION ONLY — a pinned page-split (the p252
// pharmacology convention): the topic owns everything from the navy
// "Clinical therapeutic trial" heading (which the print line-wraps as
// "Clinical therapeutic / trial") down to the thin rule immediately ABOVE
// the "Off-label drug use" heading; the lower portion (Off-label drug use
// + the Bradford Hill criteria table) belongs to bradford-hill-criteria
// (pubh3). Blocks owned: (1) the intro — experimental study involving
// humans, compares therapeutic benefits of ≥2 interventions, quality
// improves when randomized/controlled/double-blinded (neither subject nor
// researcher knows whether the subject is in the treatment or control
// group), triple-blind = additional blinding of the researchers analyzing
// the data; (2) Crossover clinical trial — series of ≥2 treatments on a
// subject, randomized order, washout period between treatments, subjects
// serve as their own controls; (3) Intention-to-treat analysis; (4)
// As-treated analysis; (5) Per-protocol analysis; (6) the sentence
// "Clinical trials occur after preclinical studies and consist of five
// phases ("Can I SWIM?")." plus the PHASE PIPELINE FIGURE — six boxes
// left to right (Preclinical → Phase 0 → Phase 1 → Phase 2 → Phase 3 →
// Phase 4) with the "FDA approval" label ABOVE the connector between the
// Phase 3 and Phase 4 boxes, and the "Sample" row beneath. Census
// (pdfimages -list): ZERO raster images on the page — the figure is
// pure vector line art (the VLM pass read it as "a full-color
// raster/illustrated image"; pdfimages is the authority: no raster) →
// ORIGINAL_KYP_REDRAW. VLM AVAILABLE this session (glm-4.6v at 120dpi,
// ONE full-page pass, staging-pubh2/vlm-census.txt): confirmed the
// six-box left-to-right rail, the "FDA approval" label above the
// Phase 3→Phase 4 connector, the "Sample" row and its person-group
// icons, the color furniture (dark navy heading; teal bold lead-ins for
// the four refinement paragraphs; red emphasis words "I SWIM", "Work?",
// "Improvement?", "Market?"; per-phase icon colors green/blue/pink/
// purple/tan; "Randomized" italicized in the phase 2/3 sample captions),
// the two large standalone "?" glyphs (pink beside the phase 2 sample
// group, purple beside the phase 3 sample group), the absence of margin
// notes/mnemonics/asterisk footnotes, and that "Off-label drug use" is
// the first content below the figure (the pinned split boundary).
// ADJUDICATIONS, documented in the census file and the manifest: (1)
// PRINTED ROWS GOVERN — the batch brief pinned "very small number of
// healthy volunteers or patients" to Phase 1, but the PRINT puts "Very
// small number…" under Phase 0 (microdosing) and "Small number…" under
// Phase 1 (pdftotext -layout column positions + the VLM pass agree
// explicitly: "the columns do not shift") — carried per the print and
// flagged in every carrier; (2) the mnemonic prints in the body sentence
// ("Can" bold navy, "I SWIM" bold red — VLM), and its four capital
// letters land as the RED CAPITALIZED caption words Safety (phase 1),
// Work (phase 2), Improvement (phase 3), Market (phase 4); there are NO
// large decorative letters pinned over the boxes in the print — the
// letter-pinning on the rail in the KYP visual is KYP's own overlay of
// First Aid's attributed mnemonic (documented); "Can I…" is carried as
// the phrase's lead-in question, not pinned to a phase (KYP reading,
// flagged); (3) the two standalone "?" glyphs of the text layer are the
// figure's large pink/purple question marks beside the phase 2/phase 3
// sample person-groups (VLM) — read as the anonymization markers of the
// printed "Randomized, controlled, anonymized" captions (KYP reading,
// flagged); (4) the footer slug (FAS1_2026_06-PubHealth.indd 257 /
// 12/16/25 12:46 PM) extracts BELOW the Off-label boundary in the text
// stream, so it is documented here and NOT quoted as evidence (the
// split is pinned at the Off-label heading); (5) "SEC TION II" is the
// header-space extraction artifact and the banner "▶ PUBLIC HEALTH
// SCIENCES—EPIdEmIoLogy ANd BIoSTATISTICS" carries the small-caps
// mixed-case artifact (both known, carried as-is); (6) the ↑ arrows of
// the printed "↑ risk of bias" extract at line ends ("received. ↑ /
// risk of bias.") — carried as printed; (7) the VLM's caption readings
// "Initial pharmacokinetics" and "(placebo if no Improvement?)" are
// 120dpi misreads — the text layer governs: "Initial pharmacokinetic
// and pharmacodynamic assessment via microdosing" and "comparison with
// current standard of care/placebo (any Improvement?)". Nothing is
// reproduced: the figure is rebuilt as ORIGINAL KYP VECTOR ART (registry
// visual clinical-trials-map, ClinicalTrialsMap in visuals/
// pubhealth-p2.tsx — the pipeline rail with the SWIM letters pinned to
// their phases, the sample row with headcount figures and the
// anonymization "?" badges, the analysis-population fork, the design
// ladder, and the crossover timeline); every printed label and caption
// is ALSO carried verbatim in the note's table block. DrugCards: FOLDED
// (documented in the manifest) — the page is a design-and-phases page,
// no drug rows to trace. PROVENANCE SPLIT: verbatim = the intro, the
// four refinement paragraphs, the phases sentence, and every figure
// label/caption; FA-own = the "Can I SWIM?" mnemonic and the "once
// randomized, always analyzed" formula (both attributed); KYP-original
// = the two KYP mnemonics, the decode protocol, the exam layer, the
// mini-case, and every "KYP context" gloss (e.g., the rung-by-rung bias
// channels of the design ladder, the dilution-toward-the-null reading).

export const clinicalTherapeuticTrials: KypUsMLENote = {
  id: "clinical-therapeutic-trials",
  title: "Clinical Therapeutic Trials and the Drug Development Pipeline",
  subtitle:
    "A clinical therapeutic trial is the one design on the exam where the investigator ASSIGNS the exposure: an experimental study involving humans that compares the therapeutic benefits of ≥2 interventions — treatment vs placebo, or treatment vs treatment. Its quality climbs a ladder the page names exactly: randomized (chance builds the arms), controlled (a comparator exists), double-blinded (neither subject nor researcher knows whether the subject is in the treatment or control group), and one rung higher, triple-blind (additional blinding of the researchers analyzing the data). Two structural refinements follow: the crossover trial, in which each subject receives a series of ≥2 treatments in randomized order separated by a washout period, so every subject serves as their own control; and the analysis-population fork — intention-to-treat (all subjects analyzed by original random assignment, “once randomized, always analyzed,” which guards against attrition, crossover, and nonrandom noncompliance bias but may dilute the true effect) vs as-treated (analyzed by the treatment actually received — ↑ risk of bias) vs per-protocol (noncompleters excluded — ↑ risk of bias). The page's second half is the drug development pipeline: clinical trials occur after preclinical studies and consist of five phases — “Can I SWIM?” — preclinical (lab animals and in vitro experiments), Phase 0 (microdosing pharmacokinetics/pharmacodynamics, often skipped), Phase 1 (Safety via dose escalation, maximum tolerable dose, very small samples, open label), Phase 2 (does it Work? — efficacy and short-term adverse effects, moderate samples, randomized/controlled/anonymized), Phase 3 (any Improvement? — effectiveness vs current standard of care or placebo, large samples), then FDA approval, then Phase 4 (can it stay on the Market? — long-term and rare adverse effects, postmarketing surveillance, open label). Together they are the exam's entire vocabulary for “how strong is this evidence” and “where is this drug in development.”",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory: "Public Health — epidemiology & biostatistics",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 257 (upper) (Epidemiology and Biostatistics: Clinical therapeutic trial)",
  tags: [
    "clinical therapeutic trial",
    "randomized controlled trial",
    "randomization",
    "controlled trial",
    "double-blind",
    "triple-blind",
    "blinding",
    "crossover trial",
    "washout period",
    "intention-to-treat",
    "as-treated",
    "per-protocol",
    "once randomized always analyzed",
    "preclinical studies",
    "phase 0",
    "microdosing",
    "phase 1",
    "safety assessment",
    "maximum tolerable dose",
    "phase 2",
    "efficacy",
    "phase 3",
    "effectiveness",
    "FDA approval",
    "phase 4",
    "postmarketing surveillance",
    "open label",
    "anonymized",
    "drug development",
    "Can I SWIM",
  ],
  core: {
    what:
      "One printed block, carried whole. CLINICAL THERAPEUTIC TRIAL — “Experimental study involving humans. Compares therapeutic benefits of ≥2 interventions (eg, treatment vs placebo, treatment vs treatment). Study quality improves when clinical trial is randomized, controlled, and double-blinded (ie, neither subject nor researcher knows whether the subject is in the treatment or control group). Triple-blind refers to additional blinding of the researchers analyzing the data.” Then four refinements, printed in order: Crossover clinical trial — a series of ≥2 treatments on a subject, randomized order, washout period between treatments, subjects serve as their own controls · Intention-to-treat analysis — all subjects analyzed according to their original, randomly assigned treatment, no one excluded (“once randomized, always analyzed”); avoids bias from attrition, crossover, and nonrandom noncompliance, but may dilute the true effects of intervention · As-treated analysis — analyzed by the treatment actually received, ↑ risk of bias · Per-protocol analysis — subjects who fail to complete treatment as originally, randomly assigned are excluded, ↑ risk of bias. Then the pipeline sentence — “Clinical trials occur after preclinical studies and consist of five phases (“Can I SWIM?”).” — and the figure: Preclinical (test drug in lab animals and in vitro experiments) → Phase 0 (initial pharmacokinetic and pharmacodynamic assessment via microdosing, often skipped) → Phase 1 (safety assessment via dose escalation, determine maximum tolerable dose) → Phase 2 (efficacy assessment — does it Work? — plus short-term adverse effects) → Phase 3 (effectiveness assessment via comparison with current standard of care/placebo — any Improvement?) → FDA approval → Phase 4 (long-term or rare adverse effects — can it stay on the Market? — postmarketing surveillance), each phase carrying its printed Sample row (very small/small/moderate/large/surveillance; open label for 0, 1, 4; randomized, controlled, anonymized for 2 and 3).",
    why:
      "This page is the top of the evidence pyramid. An observational study — the cohort and case-control designs of the sibling pages — only MEASURES exposure; a clinical therapeutic trial ASSIGNS it, which is why randomization, control, and blinding can kill the confounding and expectation biases that observational designs spend their whole machinery adjusting for. The analysis-population trio is the page's quiet high-yield core: the SAME trial dataset yields three different effect estimates depending on who counts, and the choice decides whether the randomization (the thing that made the trial a trial) survives the statistics. Intention-to-treat is the conservative guardian — it keeps every randomized subject in their original arm, so any dropout or noncompliance blurs the arms toward each other and the measured effect shrinks toward the null (may dilute the true effect); as-treated and per-protocol chase the biologically “clean” comparison but pay for it with ↑ risk of bias, because the subjects who drift are rarely a random sample. The pipeline is the other half of the exam's vocabulary: every drug question stem that says “investigational agent,” “dose-escalation cohort,” or “after market release” is naming a phase, and First Aid's own “Can I SWIM?” pins the four testable questions to phases 1–4 — Safety, Work, Improvement, Market. This page also feeds the neighbors: the trial's 2×2 table becomes the RR/ARR/NNT arithmetic of quantifying-risk, and its bias vocabulary is the same one bias-and-study-errors catalogs.",
    keyIdea:
      "Read any trial stem in three passes. PASS 1 — THE DESIGN LADDER: is it an experiment in humans (yes → clinical therapeutic trial, ≥2 interventions)? Is it randomized, controlled, double-blinded — and does the stem say the ANALYSTS are blinded too (→ triple-blind)? Does each subject receive a series of treatments in randomized order with a washout between (→ crossover, subjects their own controls)? PASS 2 — THE ANALYSIS POPULATION: “analyzed by original random assignment, no one excluded” → intention-to-treat, once randomized, always analyzed — protects against attrition/crossover/nonrandom-noncompliance bias, may dilute the true effect; “by the treatment actually received” → as-treated, ↑ risk of bias; “noncompleters excluded” → per-protocol, ↑ risk of bias. PASS 3 — THE PHASE (SWIM): lab animals/in vitro → preclinical; microdosing PK/PD, often skipped → Phase 0; Safety via dose escalation, maximum tolerable dose, very small, open label → Phase 1; does it Work? moderate, randomized/controlled/anonymized → Phase 2; any Improvement? vs current standard of care/placebo, large → Phase 3; FDA approval gates the transition; long-term/rare adverse effects, postmarketing surveillance, open label → Phase 4. Design → denominator → phase: three questions, and any trial vignette answers itself.",
  },
  mechanisms: [
    {
      id: "rct-quality-ladder",
      title:
        "The design ladder: how randomization, control, and blinding stack to remove bias one channel at a time",
      context:
        "The printed intro paragraph (book 257 upper): “Study quality improves when clinical trial is randomized, controlled, and double-blinded…”",
      flow: {
        nodes: [
          {
            id: "question",
            label: "THE CLINICAL QUESTION — ≥2 interventions in humans",
            sublabel:
              "Input — the printed definition: an experimental study involving humans that “compares therapeutic benefits of ≥2 interventions (eg, treatment vs placebo, treatment vs treatment).” Assignment is what makes it experimental — the investigator chooses each subject's arm, something cohort and case-control designs can never do.",
            variant: "input",
          },
          {
            id: "randomized",
            label: "RANDOMIZED — chance builds the arms",
            sublabel:
              "Process — random assignment distributes known AND unknown confounders evenly between the arms, so any outcome difference is attributable to the intervention (KYP context: this is the only bias-removal channel observational designs cannot install; it neutralizes selection/confounding bias).",
            variant: "process",
          },
          {
            id: "controlled",
            label: "CONTROLLED — a comparator arm exists",
            sublabel:
              "Process — the comparison needs its counterfactual: placebo (treatment vs placebo) or an active comparator (treatment vs treatment), the two printed examples. Without a control arm there is no reference against which “therapeutic benefit” could be measured (KYP context).",
            variant: "process",
          },
          {
            id: "double",
            label: "DOUBLE-BLINDED — neither subject nor researcher knows the group",
            sublabel:
              "Process — the printed parenthetical verbatim: “(ie, neither subject nor researcher knows whether the subject is in the treatment or control group).” Subject blinding removes placebo/nocebo reporting bias; researcher blinding removes observer/expectation bias in care and measurement (KYP context).",
            variant: "process",
          },
          {
            id: "triple",
            label: "TRIPLE-BLIND — the analysts are blinded too",
            sublabel:
              "Process — the printed rung above double-blind: “additional blinding of the researchers analyzing the data.” The statisticians reading the outcome tables do not know which arm is which, removing analytic-dredging bias at the data end (KYP context).",
            variant: "process",
          },
          {
            id: "estimate",
            label: "THE STACKED RESULT — an unbiased estimate of therapeutic benefit",
            sublabel:
              "Output — each rung closes one bias channel: randomization (confounding) + control (no counterfactual) + subject blinding (placebo effects) + researcher blinding (observer bias) + analyst blinding (analytic bias) = the highest-quality comparison the page can build. The printed sentence's own ranking: “Study quality improves when clinical trial is randomized, controlled, and double-blinded” — and improves again at triple-blind.",
            variant: "output",
          },
        ],
        edges: [
          { from: "question", to: "randomized", label: "assign by chance →" },
          { from: "randomized", to: "controlled", label: "compare against a control →" },
          { from: "controlled", to: "double", label: "blind subject + researcher →" },
          { from: "double", to: "triple", label: "add the data analysts →" },
          { from: "triple", to: "estimate", label: "the stacked, least-biased estimate" },
        ],
      },
    },
    {
      id: "analysis-population-fork",
      title:
        "One dataset, three answers: how the analysis-population rule sets the bias profile of the measured effect",
      context:
        "The printed Intention-to-treat / As-treated / Per-protocol paragraphs (book 257 upper)",
      flow: {
        nodes: [
          {
            id: "dataset",
            label: "THE COMPLETED TRIAL — dropouts, crossovers, and noncompliance now blur the arms",
            sublabel:
              "Input — the randomized arms were clean on day 0; by the end, some subjects quit (attrition), some switch treatments (crossover), some simply stop taking the pills (nonrandom noncompliance). The dataset is fixed; the QUESTION is who counts in the analysis — and the three printed rules answer it three different ways.",
            variant: "input",
          },
          {
            id: "itt",
            label: "INTENTION-TO-TREAT — analyze by ORIGINAL, randomly assigned treatment",
            sublabel:
              "Process — printed verbatim: “all subjects are analyzed according to their original, randomly assigned treatment. No one is excluded, ie, once randomized, always analyzed.” The randomization is preserved all the way into the statistics: whatever happened after assignment is part of the real-world story of the treatment.",
            variant: "process",
          },
          {
            id: "astreated",
            label: "AS-TREATED — analyze by the treatment ACTUALLY RECEIVED",
            sublabel:
              "Process — printed verbatim: “all subjects are analyzed according to the treatment they actually received.” Subjects migrate to the arm their behavior chose — and behavior is rarely random, so the arm compositions drift back toward self-selection (KYP context).",
            variant: "process",
          },
          {
            id: "perprotocol",
            label: "PER-PROTOCOL — only the completers count",
            sublabel:
              "Process — printed verbatim: “subjects who fail to complete treatment as originally, randomly assigned are excluded.” The cleanest-looking rule and the most dangerous: exclusions are themselves an outcome (KYP context — the subjects who quit differ systematically from those who stayed).",
            variant: "process",
          },
          {
            id: "tradeoff",
            label: "THE TRADE-OFF — ITT guards the randomization but may dilute; the other two ↑ risk of bias",
            sublabel:
              "Output — the printed verdicts: intention-to-treat “attempts to avoid bias from attrition, crossover, and nonrandom noncompliance, but may dilute the true effects of intervention”; as-treated and per-protocol each carry “↑ risk of bias.” Same trial, three denominators: the conservative estimate that keeps the design's promise vs the optimistic estimates that break it (KYP context: ITT estimates effectiveness as it will actually play out in practice).",
            variant: "output",
          },
        ],
        edges: [
          { from: "dataset", to: "itt", label: "keep the original assignment" },
          { from: "dataset", to: "astreated", label: "follow what was received" },
          { from: "dataset", to: "perprotocol", label: "keep completers only" },
          { from: "itt", to: "tradeoff", label: "protected, possibly diluted" },
          { from: "astreated", to: "tradeoff", label: "↑ risk of bias" },
          { from: "perprotocol", to: "tradeoff", label: "↑ risk of bias" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "clinical-trials-map",
      title:
        "The clinical-trials decoder: the design ladder, the “Can I SWIM?” pipeline rail with its sample row, and the analysis-population fork (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 257 upper: the design-quality ladder (experimental study in humans → randomized → controlled → double-blinded → triple-blind, each rung closing one bias channel); the six-station pipeline rail — Preclinical (test drug in lab animals and in vitro experiments) → Phase 0 (initial pharmacokinetic and pharmacodynamic assessment via microdosing, often skipped) → Phase 1 (safety assessment via dose escalation, determine maximum tolerable dose) → Phase 2 (efficacy assessment — does it Work? — short-term adverse effects) → Phase 3 (effectiveness assessment via comparison with current standard of care/placebo — any Improvement?) → Phase 4 (long-term or rare adverse effects — can it stay on the Market?) — with First Aid's own “Can I SWIM?” letters pinned to their phases (S=W Safety, W=ork, I=mprovement, M=arket), the FDA approval gate printed above the Phase 3→4 connector, and the printed Sample row (very small/small/moderate/large/postmarketing headcounts; open label for phases 0, 1, 4; randomized, controlled, anonymized — with the figure's two large “?” marks — for phases 2 and 3); then the analysis-population fork (intention-to-treat vs as-treated vs per-protocol with their printed bias ratings) and the crossover timeline (≥2 treatments, randomized order, washout between, subject as own control).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 279 — the source figure is pure vector line art (the phase icons — microscope, distribution curve, syringe, heart-with-stethoscope, scales, pill bottle in the print — are NOT reproduced; the KYP rail, letter badges, headcount figures, “?” badges, fork, and timeline are original art). ADJUDICATION carried in the rail: the print puts “Very small number…” under Phase 0 and “Small number…” under Phase 1 (layout columns + VLM agree — printed rows govern, correcting the brief's pin). First Aid's own “Can I SWIM?” is attributed; there are no large mnemonic letters over the printed boxes — the pinning is KYP's overlay. The two large “?” badges mark the printed pink/purple question marks beside the phase 2/3 sample groups (read as the anonymization markers — KYP reading, flagged).",
    },
    {
      kind: "table",
      title:
        "Book 257 upper — the printed phase pipeline, carried verbatim (every printed word, PRINTED order)",
      intro:
        "The figure's six stations plus the FDA gate, in printed left-to-right order, each with its two printed cells: what the stage assesses, and the Sample row beneath. First Aid prints its mnemonic as the red capitalized words inside the captions — Safety (phase 1), Work (phase 2), Improvement (phase 3), Market (phase 4) — spelling SWIM, carried attributed. ADJUDICATION (pdftotext -layout + VLM agree): the print puts “Very small number of healthy volunteers or patients” under PHASE 0 (microdosing) and “Small number…” under PHASE 1 — carried per the print (the batch brief's reverse pin is corrected to the printed columns).",
      columns: ["STAGE", "WHAT IT ASSESSES (printed)", "SAMPLE (printed)"],
      rows: [
        [
          "Preclinical",
          "Test drug in lab animals and in vitro experiments.",
          "(no human sample — the “Sample” label itself prints here, at the left of the sample row)",
        ],
        [
          "Phase 0",
          "Initial pharmacokinetic and pharmacodynamic assessment via microdosing. Often skipped.",
          "Very small number of healthy volunteers or patients with disease of interest. Open label.",
        ],
        [
          "Phase 1 — “Can I SWIM?” → S = Safety",
          "Safety assessment via dose escalation. Determine maximum tolerable dose.",
          "Small number of healthy volunteers or patients with disease of interest. Open label.",
        ],
        [
          "Phase 2 — W = does it Work?",
          "Efficacy assessment (does it Work?) Provides additional data on short-term adverse effects.",
          "Moderate number of patients with disease of interest. Randomized, controlled, anonymized.",
        ],
        [
          "Phase 3 — I = any Improvement?",
          "Effectiveness assessment via comparison with current standard of care/placebo (any Improvement?).",
          "Large number of patients with disease of interest. Randomized, controlled, anonymized.",
        ],
        [
          "FDA approval",
          "The gate on the pipeline's arrow between the Phase 3 and Phase 4 boxes (printed above the connector).",
          "—",
        ],
        [
          "Phase 4 — M = can it stay on the Market?",
          "Provides data on long-term or rare adverse effects (can it stay on the Market?).",
          "Postmarketing surveillance of patients with disease of interest. Open label.",
        ],
      ],
      caption:
        "Verbatim carry, documented: the phase captions and sample texts are the figure's printed words (the “S = Safety / W = Work / I = Improvement / M = Market” tags in the STAGE column are First Aid's own SWIM letters, attributed — they print as the red capitalized caption words, not as row labels). Design pattern to read off the table: phases 0, 1, and 4 are OPEN LABEL (single-group, no masking); phases 2 and 3 are RANDOMIZED, CONTROLLED, ANONYMIZED — and those two are exactly the columns where the print places its two large “?” marks beside the sample figures. Sample sizes climb monotonically except that Phase 0 (microdosing) and Phase 1 (dose escalation) both sit at the tiny end — “very small” prints under Phase 0, “small” under Phase 1.",
    },
    {
      kind: "list",
      title:
        "The design vocabulary — every printed term of the intro and the four refinement paragraphs",
      intro:
        "The upper block's prose, term by term, each with the printed definition it anchors. These six terms are the exam's complete trial-design lexicon for this page.",
      items: [
        {
          lead: "CLINICAL THERAPEUTIC TRIAL — the printed definition",
          text: "“Experimental study involving humans. Compares therapeutic benefits of ≥2 interventions (eg, treatment vs placebo, treatment vs treatment).” The two printed contrasts to memorize: the comparison can be against a PLACEBO or against another TREATMENT, and “experimental” is the word that separates this page from every observational design (assignment, not measurement).",
        },
        {
          lead: "THE QUALITY LADDER — randomized, controlled, double-blinded, (triple-blind)",
          text: "“Study quality improves when clinical trial is randomized, controlled, and double-blinded (ie, neither subject nor researcher knows whether the subject is in the treatment or control group). Triple-blind refers to additional blinding of the researchers analyzing the data.” Count the blinded parties: double = subject + researcher; triple = subject + researcher + the researchers analyzing the data. Blinding WHO is the question the exam asks.",
        },
        {
          lead: "CROSSOVER CLINICAL TRIAL — a series of ≥2 treatments on one subject",
          text: "“Compares the effect of a series of ≥2 treatments on a subject. Order in which subjects receive treatments is randomized. Washout period occurs between treatments. Allows subjects to serve as their own controls.” Three testable mechanics: the ORDER is randomized, the WASHOUT separates the treatments (so the first cannot contaminate the second — KYP context), and each subject is their OWN CONTROL — the between-subject variance disappears (KYP context: fewer subjects needed for the same power).",
        },
        {
          lead: "INTENTION-TO-TREAT ANALYSIS — once randomized, always analyzed",
          text: "“All subjects are analyzed according to their original, randomly assigned treatment. No one is excluded, ie, once randomized, always analyzed. Attempts to avoid bias from attrition, crossover, and nonrandom noncompliance, but may dilute the true effects of intervention.” The three bias sources it names — attrition, crossover, nonrandom noncompliance — and the one price it pays: dilution of the true effect.",
        },
        {
          lead: "AS-TREATED ANALYSIS — by the treatment actually received",
          text: "“All subjects are analyzed according to the treatment they actually received. ↑ risk of bias.” The migrating-subjects rule: a subject counts in the arm their behavior chose, not the arm chance chose.",
        },
        {
          lead: "PER-PROTOCOL ANALYSIS — noncompleters excluded",
          text: "“Subjects who fail to complete treatment as originally, randomly assigned are excluded. ↑ risk of bias.” The completers-only rule: the analysis population is filtered after the fact, and the filter is itself an outcome (KYP context).",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any clinical-trial stem in four moves",
      intro:
        "The whole upper block distilled into an ordered reading path — FAMILY, ANALYSIS POPULATION, PHASE, BIAS DIRECTION — applicable to any trial vignette the exam builds from this page.",
      steps: [
        {
          label: "MOVE 1 — NAME THE FAMILY: was the exposure assigned or observed?",
          detail:
            "Assigned in humans → clinical therapeutic trial (experimental study involving humans, ≥2 interventions: treatment vs placebo or treatment vs treatment). Only observed → leave this page for the observational designs (cohort, case-control, cross-sectional). If assigned AND each subject receives a series of treatments in randomized order with a washout between → crossover clinical trial, subjects as their own controls.",
        },
        {
          label: "MOVE 2 — READ THE BLINDING COUNT: who does not know the assignment?",
          detail:
            "Nobody masked → open label (the printed status of phases 0, 1, and 4). Subject and researcher masked → double-blinded (“neither subject nor researcher knows whether the subject is in the treatment or control group”). Subject + researcher + the researchers analyzing the data masked → triple-blind. The count is of PARTIES blinded, not of arms.",
        },
        {
          label: "MOVE 3 — READ THE ANALYSIS POPULATION: who counts in the table?",
          detail:
            "“Analyzed by original random assignment, no one excluded” → intention-to-treat (once randomized, always analyzed — avoids bias from attrition, crossover, nonrandom noncompliance; may dilute the true effect). “Analyzed by treatment actually received” → as-treated (↑ risk of bias). “Noncompleters excluded” → per-protocol (↑ risk of bias).",
        },
        {
          label: "MOVE 4 — PIN THE PHASE (SWIM) AND PREDICT THE BIAS DIRECTION",
          detail:
            "Lab animals/in vitro → preclinical · microdosing PK/PD, often skipped → Phase 0 · Safety, dose escalation, maximum tolerable dose, very small, open label → Phase 1 · does it Work? moderate, randomized/controlled/anonymized → Phase 2 · any Improvement? vs standard of care/placebo, large → Phase 3 · FDA approval gates entry to the market · long-term/rare adverse effects, postmarketing surveillance, open label → Phase 4. Then state the bias direction the stem is probing: ITT dilutes toward the null; as-treated and per-protocol inflate away from it (KYP context for the directions).",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Intention-to-treat vs per-protocol — the analysis-population fork (as-treated between them)",
      intro:
        "The page's three analysis rules are one fork: the same completed dataset, three different denominators. The compare below pits the two poles against each other; as-treated — analyzed by the treatment actually received, ↑ risk of bias — sits between them, sharing per-protocol's bias rating while keeping every subject.",
      columns: [
        "INTENTION-TO-TREAT — “once randomized, always analyzed”",
        "PER-PROTOCOL — completers only (as-treated: by what was received)",
      ],
      rows: [
        {
          label: "The printed rule",
          a: "“All subjects are analyzed according to their original, randomly assigned treatment. No one is excluded.”",
          b: "“Subjects who fail to complete treatment as originally, randomly assigned are excluded.” (As-treated: “analyzed according to the treatment they actually received.”)",
        },
        {
          label: "What happens to the randomization",
          a: "PRESERVED into the statistics — the arms stay as chance built them, whatever happened afterward",
          b: "BROKEN — post-assignment behavior (dropping out, switching, stopping) reshapes the arms, and that behavior is not random (KYP context)",
        },
        {
          label: "The printed bias verdict",
          a: "“Attempts to avoid bias from attrition, crossover, and nonrandom noncompliance” — the guardian estimate",
          b: "“↑ risk of bias” — as-treated carries the same printed verdict (↑ risk of bias)",
        },
        {
          label: "The measured effect",
          a: "Conservative — “may dilute the true effects of intervention” (noncompliance pulls the arms toward each other, shrinking the estimate toward the null — KYP context)",
          b: "Optimistic in the direction of the compliers' experience — excluding or re-sorting the noncompleters magnifies the apparent effect (KYP context)",
        },
        {
          label: "The exam's question shape",
          a: "A stem describing dropouts/switchers who are still counted in their original arm, or asking which analysis “best preserves the benefits of randomization”",
          b: "A stem describing noncompleters being dropped, or asking which analysis carries the highest risk of bias — as-treated and per-protocol are the two ↑-bias answers",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "The exam asks this page in four reverse directions — and twice it asks you to count",
      body:
        "DIRECTION 1 — FROM DESIGN TO NAME: “subjects receive both the study drug and placebo in an order determined by lot, separated by a drug-free interval” → crossover clinical trial (washout; own controls). DIRECTION 2 — FROM ANALYSIS TO NAME: “including the 40 subjects who discontinued the drug, all were analyzed in the group to which they were randomized” → intention-to-treat, once randomized, always analyzed — and the follow-up question is always the trade: it AVOIDS attrition/crossover/nonrandom-noncompliance bias but MAY DILUTE the true effect. DIRECTION 3 — FROM TRIAL PROFILE TO PHASE: “moderate number of patients, randomized, controlled, anonymized, short-term adverse effects, does it Work?” → Phase 2; “large number, comparison with current standard of care/placebo, any Improvement?” → Phase 3; “postmarketing surveillance, open label, long-term or rare adverse effects” → Phase 4; “microdosing, pharmacokinetics and pharmacodynamics, often skipped” → Phase 0. DIRECTION 4 — THE COUNT QUESTIONS: how many parties are blinded (double = subject + researcher; triple adds “the researchers analyzing the data”), and how big is the sample (very small = phase 0, small = phase 1, moderate = phase 2, large = phase 3 — per the printed columns). The composite trap: a stem that says “randomized, controlled, double-blinded” is describing DESIGN quality, never the analysis population — do not answer an ITT question with a blinding word.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own memory hooks — carried attributed, verbatim",
      body:
        "The page prints TWO hooks of its own, both carried verbatim and attributed (the two ALL-CAPS codes in the Memory section are KYP originals): (1) “Can I SWIM?” — the pipeline sentence's own acronym for the five phases, printed with “I SWIM” in red in the body sentence, its four capital letters landing as the red capitalized caption words of the phases: S = Safety assessment (phase 1, dose escalation, maximum tolerable dose), W = does it Work? (phase 2, efficacy), I = any Improvement? (phase 3, effectiveness vs standard of care/placebo), M = can it stay on the Market? (phase 4, postmarketing surveillance) — “Can I…” is the phrase's lead-in question, the swimmer asking permission to enter the water (KYP reading). (2) “once randomized, always analyzed” — the printed formula inside the intention-to-treat paragraph, the sentence that decides every analysis-population question: no one is excluded; the original random assignment governs the statistics. Both hooks are the source's, not KYP's — the two KYP codes in the Memory section (THREE BLINDS: SUBJECT, SCIENTIST, STATISTICIAN · ALL IN · AS GIVEN · AS PLANNED) are marked as originals, and the washout mechanics and the sample-size ladder (very small → small → moderate → large → surveillance) are carried in the design-vocabulary list, the traps, and the table block instead.",
    },
  ],
  clinical: [
    {
      kind: "callout",
      variant: "clinical",
      title: "Where this vocabulary carries you on the wards",
      body:
        "The page's vocabulary is the operating language of evidence-based medicine. When a journal report says the primary outcome was analyzed “by intention to treat,” it is telling you the estimate is the conservative one — the effect you should expect when real patients take the drug the way real patients do (imperfectly), which is why regulators favor it (KYP context). When a package insert recounts a drug's development — “dose-escalation study in healthy volunteers,” “randomized trial against active comparator,” “postmarketing reports of rare hepatotoxicity” — it is reciting phases 1, 3, and 4 of this rail, and the rare-adverse-effect stories (the withdrawals you hear about years after approval) are Phase 4 doing exactly its printed job: “provides data on long-term or rare adverse effects (can it stay on the Market?).” And when a trial of a chronic-disease drug reports that half the treatment arm dropped out, the three analysis rules tell you what the headline number means before you read a word of the discussion (KYP context).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A randomized, double-blind trial compares a new oral anticoagulant with warfarin in 4,000 patients with atrial fibrillation. During 1 year of follow-up, 9% of the new-drug arm discontinues the study drug (about half of them switching back to warfarin). In the primary analysis, all 4,000 patients are counted in the arms to which they were originally assigned.",
        discriminator:
          "Analysis by ORIGINAL random assignment with no exclusions — the printed intention-to-treat rule, “once randomized, always analyzed”",
        concept: "The analysis-population fork: intention-to-treat",
        answer:
          "Intention-to-treat analysis. The printed definition fits verbatim: “all subjects are analyzed according to their original, randomly assigned treatment. No one is excluded.” The design's payoff: it “attempts to avoid bias from attrition, crossover, and nonrandom noncompliance” — and its printed price: it “may dilute the true effects of intervention” (the discontinuers pull the arms together, shrinking the measured effect toward the null — KYP context).",
      },
      {
        stem: "A trial of two antihypertensive regimens enrolls subjects who each receive both regimens — half starting with drug A, half with drug B, the order determined by lot — separated by a 4-week drug-free interval before the switch.",
        discriminator:
          "A series of ≥2 treatments on one subject, randomized ORDER, drug-free interval between → the washout period, and each subject as their own control",
        concept: "Crossover clinical trial",
        answer:
          "Crossover clinical trial — the printed definition: “compares the effect of a series of ≥2 treatments on a subject. Order in which subjects receive treatments is randomized. Washout period occurs between treatments. Allows subjects to serve as their own controls.” The 4-week interval is the washout (clearing the first regimen so it cannot contaminate the second — KYP context); the lot-determined sequence is the randomized order.",
      },
      {
        stem: "An investigational agent that showed promise in vitro and in mouse models enters human testing. The first human trial gives a microdose to a very small group of healthy volunteers to characterize tissue distribution and receptor effects; the sponsor may omit this stage entirely for a slow-release reformulation.",
        discriminator:
          "Microdosing for pharmacokinetic and pharmacodynamic assessment — and the stage the print marks “often skipped”",
        concept: "Phase 0 and its printed neighbors",
        answer:
          "Phase 0 — “initial pharmacokinetic and pharmacodynamic assessment via microdosing. Often skipped,” with the printed sample “Very small number of healthy volunteers or patients with disease of interest. Open label.” The mouse/in vitro work the stem opens with is the PRECLINICAL stage (“test drug in lab animals and in vitro experiments”); the next station, Phase 1, is the safety/dose-escalation stage (“Small number… Open label” per the printed columns — the adjudicated print mapping).",
      },
      {
        stem: "Three years after FDA approval of a new statin, reports accumulate from outpatient prescribing of a rare fulminant myopathy occurring at roughly 1 per 50,000 patient-years; the label is updated with a boxed warning.",
        discriminator:
          "Post-approval, open-label detection of long-term or rare adverse effects in routine care — postmarketing surveillance",
        concept: "Phase 4 — can it stay on the Market?",
        answer:
          "Phase 4 — “provides data on long-term or rare adverse effects (can it stay on the Market?)” with the printed sample “Postmarketing surveillance of patients with disease of interest. Open label.” The boxed-warning update is the market answering the M question of First Aid's own “Can I SWIM?” — and the open-label status is why the detection happens as surveillance rather than as a masked trial.",
      },
    ],
    traps: [
      {
        a: "Double-blinded — neither subject nor researcher knows the group",
        b: "Triple-blind — additional blinding of the researchers analyzing the data",
        whyConfused:
          "Both are blinding counts on the same quality ladder, and both print inside the same intro paragraph one sentence apart",
        keyDifference:
          "COUNT THE BLINDED PARTIES: double = subject + researcher (the printed parenthetical); triple adds a third party — the researchers analyzing the data. Blinding runs from the bedside inward to the dataset, not from two arms to three",
        clue:
          "The stem that mentions the STATISTICIANS or the analysts not knowing the treatment codes is always the triple-blind question.",
      },
      {
        a: "Intention-to-treat — by original random assignment, no one excluded",
        b: "As-treated / per-protocol — by treatment actually received / noncompleters excluded",
        whyConfused:
          "All three rules analyze the SAME dataset; the stems differ by one clause about who counts, and the exam writes that clause quietly",
        keyDifference:
          "Follow the exclusions: none, ever (“once randomized, always analyzed”) → ITT, the printed guardian against attrition, crossover, and nonrandom noncompliance bias that “may dilute the true effects”; re-sorted by what was received → as-treated, ↑ risk of bias; completers only → per-protocol, ↑ risk of bias",
        clue:
          "Underline the word after “analyzed according to…” — ASSIGNMENT means ITT; RECEIVED means as-treated; PROTOCOL/COMPLETED means per-protocol.",
      },
      {
        a: "Phase 2 — efficacy assessment (does it Work?)",
        b: "Phase 3 — effectiveness assessment (any Improvement?)",
        whyConfused:
          "Both are randomized, controlled, anonymized trials in patients with the disease of interest — the printed sample rows differ only in size (moderate vs large)",
        keyDifference:
          "The QUESTION and the COMPARATOR: phase 2 asks whether it Works at all and adds short-term adverse-effect data in a moderate sample; phase 3 asks whether it Improves on the CURRENT STANDARD OF CARE/PLACEBO in a large sample — effectiveness, not just efficacy (the W vs I of “Can I SWIM?”)",
        clue:
          "A named active comparator (“vs metformin,” “vs standard of care”) or a sample size in the thousands points at phase 3; “short-term adverse effects” and “moderate number” point at phase 2.",
      },
      {
        a: "Phase 0 — microdosing, “very small number,” often skipped",
        b: "Phase 1 — dose escalation, maximum tolerable dose, “small number”",
        whyConfused:
          "Both are tiny, open-label, early-human stages that can enroll healthy volunteers OR patients — and the size words differ by one adverb",
        keyDifference:
          "The PURPOSE: phase 0 is PHARMACOKINETIC/PHARMACODYNAMIC (what the body does to a microdose and what the microdose does to the body — not therapeutic dosing), and the print marks it “often skipped”; phase 1 is SAFETY under dose escalation, determining the MAXIMUM TOLERABLE DOSE. The print's own columns: “Very small number…” sits under phase 0, “Small number…” under phase 1 (the adjudicated print mapping)",
        clue:
          "“Microdose,” “PK/PD,” or “skipped” → phase 0; “maximum tolerable dose,” “dose escalation,” “safety” → phase 1.",
      },
    ],
    pivots: [
      {
        lookAlike: "randomized · controlled · double-blinded · triple-blind — a stack of design words",
        differentiator:
          "Whether the stem is ranking DESIGN quality or counting BLINDED PARTIES",
        correctPath:
          "“Improves study quality” statements → the ladder (randomized, controlled, double-blinded); any count of who is blinded → double = subject + researcher, triple = + the researchers analyzing the data. Never answer a blinding question with a randomization word, or vice versa.",
      },
      {
        lookAlike: "An analysis-population clause: assignment vs receipt vs completion",
        differentiator:
          "The object of “analyzed according to…” — original random assignment / treatment actually received / completion of the protocol",
        correctPath:
          "assignment → intention-to-treat (once randomized, always analyzed; guards bias, may dilute); received → as-treated (↑ risk of bias); completers only → per-protocol (↑ risk of bias).",
      },
      {
        lookAlike: "A trial-profile router: safety vs work vs improvement vs market",
        differentiator:
          "The question the stage asks — First Aid's own SWIM letters pinned to phases 1-4",
        correctPath:
          "Safety/dose escalation/maximum tolerable dose → Phase 1 · does it Work?/efficacy/short-term adverse effects/moderate sample → Phase 2 · any Improvement?/vs current standard of care or placebo/large sample → Phase 3 · can it stay on the Market?/long-term or rare adverse effects/postmarketing surveillance/open label → Phase 4. Microdosing PK/PD, often skipped, sits before phase 1 as Phase 0; lab animals and in vitro come before any human stage as preclinical.",
      },
    ],
    miniCase: {
      vignette:
        "A 64-year-old woman with nonvalvular atrial fibrillation enrolls in a randomized, double-blind, controlled trial comparing a new once-daily oral anticoagulant against warfarin. She is assigned to the new drug. At month 4 she stops taking it because of nausea and resumes the warfarin she had used before the trial; she completes all follow-up visits and is counted in the trial's stroke-outcome table. At the study's end the investigators report that every enrolled subject — including this patient — was analyzed in the arm to which he or she was originally randomized, and that the new drug reduced the primary outcome by a relative risk reduction of 12%. A commentator argues the trial therefore UNDERSTATES the drug's benefit in patients who actually take it as prescribed.",
      question:
        "Which principle best accounts for the difference between the trial's reported estimate and the larger effect the commentator expects?",
      options: [
        {
          label: "A",
          text: "Intention-to-treat analysis — the reported estimate includes noncompliant subjects in their original arms",
          correct: true,
          why:
            "CORRECT — the printed rule governs the scenario verbatim: “all subjects are analyzed according to their original, randomly assigned treatment. No one is excluded, ie, once randomized, always analyzed… but may dilute the true effects of intervention.” The patient who returned to warfarin still counts in the new-drug arm, so her warfarin-protected outcome pulls the new-drug arm's event rate up and the measured effect down — the exact dilution the commentator is describing, and the exact price the print names for the bias protection ITT buys (protection from attrition, crossover, and nonrandom noncompliance bias).",
        },
        {
          label: "B",
          text: "As-treated analysis — subjects are analyzed by the treatment they actually received",
          why:
            "TEMPTING but wrong — as-treated WOULD move this patient to the warfarin arm (the treatment she actually received), which is precisely the re-sorting the trial did NOT do. It is the commentator's implied analysis, and the print gives it its verdict: “↑ risk of bias” — because subjects who switch treatments are not a random subset (her nausea is related to the drug, so re-sorting her biases the arms).",
        },
        {
          label: "C",
          text: "Per-protocol analysis — subjects who fail to complete the assigned treatment are excluded",
          why:
            "TEMPTING but wrong — per-protocol would drop the patient (and every other noncompleter) from the table entirely, again chasing the “clean” estimate. The print's verdict is the same “↑ risk of bias”: exclusion happens after the fact and is itself an outcome (the completers differ systematically from the dropouts), so the randomization that made the trial a trial is discarded exactly where it was needed.",
        },
        {
          label: "D",
          text: "Triple-blinding — the researchers analyzing the data did not know the treatment codes",
          why:
            "WRONG LAYER — triple-blind is a blinding rung (additional blinding of the researchers analyzing the data), not an analysis-population rule. It decides who KNEW the assignment during analysis, not who is COUNTED in the outcome table; a trial can be triple-blind and still analyzed per-protocol, or double-blind like this one and still analyzed by intention-to-treat.",
        },
      ],
      reasoning:
        "The question tests whether you can tell the design layer (randomized, double-blind — how the trial was run) from the analysis layer (who counts in the final table). The stem's clause “every enrolled subject… was analyzed in the arm to which he or she was originally randomized” is the intention-to-treat rule verbatim, and the commentator's complaint — the estimate understates the effect in true takers — is the printed cost of that rule: “may dilute the true effects of intervention.” Options B and C are the two analysis rules that would produce the commentator's larger number, but both carry the printed “↑ risk of bias” (re-sorting or dropping nonrandom noncompliers breaks the randomization); option D confuses blinding (who knows) with analysis population (who counts). The composite lesson: the conservative estimate and the unbiased-by-attrition estimate are the SAME estimate — that is the whole trade of intention-to-treat.",
    },
  },
  mnemonics: [
    {
      code: "“Can I SWIM?” — First Aid's own (attributed, printed with “I SWIM” in red)",
      meaning:
        "The pipeline sentence's own acronym for the five phases: S = Safety assessment via dose escalation, maximum tolerable dose (phase 1) · W = does it Work? — efficacy, short-term adverse effects (phase 2) · I = any Improvement? — effectiveness vs current standard of care/placebo (phase 3) · M = can it stay on the Market? — long-term or rare adverse effects, postmarketing surveillance (phase 4). “Can I…” is the phrase's lead-in question — the swimmer asking permission to enter the water before the four questions begin (KYP reading; the print pins no letters to preclinical or phase 0).",
      memorizes:
        "The four testable questions of phases 1-4, in pipeline order — the capitals are the source's own red caption words (Safety, Work, Improvement, Market), not KYP's",
      whenToUse:
        "Any phase-identification stem: match the question the trial asks (safety? work? improvement? market?) to its phase, then read the sample/design row (very small → small → moderate → large → surveillance; open label for 0/1/4, randomized/controlled/anonymized for 2/3)",
      clinical:
        "A drug's development history in a vignette — healthy-volunteer safety study (S), first efficacy signal (W), the big pre-approval comparison trial (I), the post-approval rare-adverse-effect reports (M) — decodes into phases 1, 2, 3, 4 in order.",
    },
    {
      code: "“Once randomized, always analyzed” — First Aid's own (attributed, printed in the ITT paragraph)",
      meaning:
        "The intention-to-treat rule in one printed formula: all subjects are analyzed according to their original, randomly assigned treatment; no one is excluded — whatever happened after randomization (dropout, switch, noncompliance) stays inside the original arm.",
      memorizes:
        "The ITT rule, its protection (avoids bias from attrition, crossover, and nonrandom noncompliance), and its price (may dilute the true effects of intervention)",
      whenToUse:
        "Every analysis-population question: if the stem says subjects were analyzed by original assignment — or asks which analysis best preserves the randomization — this formula is the answer",
      clinical:
        "Reading any RCT report: the “analyzed by intention to treat” line under the primary outcome table is this sentence in journal form — the conservative, real-world estimate.",
    },
    {
      code: "THREE BLINDS: SUBJECT, SCIENTIST, STATISTICIAN (a KYP original)",
      meaning:
        "The blinding ladder as a headcount: double-blind = SUBJECT + SCIENTIST (researcher) — “neither subject nor researcher knows whether the subject is in the treatment or control group”; triple-blind adds the STATISTICIAN — “additional blinding of the researchers analyzing the data.” Two parties → double; three parties → triple.",
      memorizes:
        "Who is blinded at each level of the printed quality ladder — the exam's count question",
      whenToUse:
        "Any stem that mentions who knows the treatment codes — especially the step-up question (“the trial also blinds the statisticians analyzing the data: this is called…?” → triple-blind)",
      clinical:
        "The masking statement in a trial's methods section: “open-label” names zero parties; “double-blind” two; “triple-blind” (rare, and the print's own extra rung) three — the analysts included.",
    },
    {
      code: "ALL IN · AS GIVEN · AS PLANNED (a KYP original)",
      meaning:
        "The analysis-population fork by preposition: INTENTION-TO-TREAT keeps them ALL IN by original random assignment (once randomized, always analyzed — guards against attrition/crossover/nonrandom-noncompliance bias, may dilute the true effect) · AS-TREATED counts them AS GIVEN — by the treatment actually received (↑ risk of bias) · PER-PROTOCOL counts only those treated AS PLANNED — noncompleters excluded (↑ risk of bias).",
      memorizes:
        "All three printed analysis rules, their exclusion behavior, and their bias ratings in one line — the fork the exam routes through",
      whenToUse:
        "Any question pairing a trial's dropout/switcher story with an analysis choice, and any “which analysis has the highest risk of bias?” option list (the two non-ITT rules are the two ↑-bias answers)",
      clinical:
        "The same completed trial yields three headline numbers; journals report the ALL IN one, sponsors quote the AS PLANNED one — knowing which you are reading is the whole skill.",
    },
  ],
  rapidReview: {
    s30: [
      "Clinical therapeutic trial = experimental study involving humans comparing therapeutic benefits of ≥2 interventions (treatment vs placebo, treatment vs treatment); quality improves when randomized, controlled, double-blinded; triple-blind adds the researchers analyzing the data",
      "Crossover trial = a series of ≥2 treatments on a subject, randomized order, washout period between treatments, subjects serve as their own controls",
      "Intention-to-treat = analyzed by original random assignment, no one excluded — “once randomized, always analyzed”; avoids attrition/crossover/nonrandom-noncompliance bias but may dilute true effects",
      "As-treated = analyzed by treatment actually received, ↑ risk of bias; per-protocol = noncompleters excluded, ↑ risk of bias",
      "“Can I SWIM?” — the five phases after preclinical: 0 microdosing PK/PD often skipped · 1 Safety (dose escalation, maximum tolerable dose) · 2 Work? (efficacy, short-term adverse effects) · 3 Improvement? (effectiveness vs standard of care/placebo) · 4 Market? (long-term/rare adverse effects, postmarketing surveillance)",
    ],
    m3: [
      "“Can I SWIM?” — Safety · Work · Improvement · Market = phases 1-4 (First Aid's own)",
      "“Once randomized, always analyzed” — the ITT rule (First Aid's own)",
      "THREE BLINDS: SUBJECT, SCIENTIST, STATISTICIAN — double vs triple (KYP)",
      "ALL IN · AS GIVEN · AS PLANNED — ITT vs as-treated vs per-protocol (KYP)",
    ],
    m10: [
      "Sample ladder per the printed columns: Phase 0 “very small” · Phase 1 “small” · Phase 2 “moderate” · Phase 3 “large” · Phase 4 “postmarketing surveillance” — and the print puts “very small” under Phase 0, “small” under Phase 1 (the adjudicated mapping; both are healthy volunteers OR patients, open label)",
      "Open label: phases 0, 1, and 4 · randomized, controlled, anonymized: phases 2 and 3 — the two anonymized columns are exactly where the print places its two large “?” marks beside the sample figures",
      "FDA approval gates the arrow between the Phase 3 and Phase 4 boxes — before it, efficacy and effectiveness; after it, the market question",
      "ITT preserves the randomization into the statistics (the conservative, real-world estimate); as-treated and per-protocol break it chasing the cleaner comparison — the trade the page prints as “may dilute the true effects of intervention” vs “↑ risk of bias”",
    ],
  },
  recall: [
    {
      q: "What defines a clinical therapeutic trial, and what two comparisons does it use?",
      a: "An experimental study involving humans that compares therapeutic benefits of ≥2 interventions — eg, treatment vs placebo, or treatment vs treatment.",
    },
    {
      q: "What does triple-blind add on top of double-blinded?",
      a: "Additional blinding of the researchers analyzing the data — double-blind already means neither subject nor researcher knows whether the subject is in the treatment or control group.",
    },
    {
      q: "In a crossover clinical trial, what separates the treatments, and what is the control?",
      a: "A washout period occurs between treatments (order randomized); each subject serves as their own control.",
    },
    {
      q: "State the intention-to-treat rule and both halves of its trade-off.",
      a: "All subjects are analyzed according to their original, randomly assigned treatment — no one excluded, “once randomized, always analyzed.” It avoids bias from attrition, crossover, and nonrandom noncompliance, but may dilute the true effects of intervention.",
    },
    {
      q: "How do as-treated and per-protocol differ from intention-to-treat, and what is their shared printed verdict?",
      a: "As-treated analyzes by the treatment actually received; per-protocol excludes subjects who fail to complete treatment as originally, randomly assigned. Both carry “↑ risk of bias.”",
    },
    {
      q: "What happens in Phase 0, and how often is it done?",
      a: "Initial pharmacokinetic and pharmacodynamic assessment via microdosing — often skipped (sample: very small number of healthy volunteers or patients with disease of interest; open label).",
    },
    {
      q: "Which phases are randomized, controlled, and anonymized, and which are open label?",
      a: "Phases 2 and 3 are randomized, controlled, anonymized (moderate and large numbers of patients); phases 0, 1, and 4 are open label.",
    },
    {
      q: "What does Phase 4 assess, and what is its sample?",
      a: "Data on long-term or rare adverse effects — “can it stay on the Market?” — via postmarketing surveillance of patients with disease of interest; open label.",
    },
  ],
  related: [
    {
      title: "Observational study designs",
      note:
        "The sibling page (book 256) carries the designs this page is NOT: cohort, case-control, cross-sectional — studies that measure exposure rather than assign it. The exam's first fork on any study-vignette is assignment vs observation; this page owns the assigned side (randomized, controlled, blinded), that page the observed side (relative risk, odds ratio, recall bias).",
      topicId: "observational-studies",
    },
    {
      title: "Bradford Hill criteria",
      note:
        "The lower portion of this same printed page (book 257 lower) — when an OBSERVATIONAL association must be judged for causation, the nine Bradford Hill criteria are the checklist; the clinical therapeutic trial is the design that satisfies most of them by construction (strength, consistency, temporality, experiment), which is why the trial sits above every observational design in the evidence hierarchy.",
      topicId: "bradford-hill-criteria",
    },
    {
      title: "Bias and study errors",
      note:
        "The bias vocabulary this page names in passing — attrition, nonrandom noncompliance, the biases blinding removes — is catalogued in full on book 263: selection bias, recall bias, measurement bias, confounding. The design ladder of this page is the ENGINEERING answer to that page's taxonomy: each rung (randomize, control, blind) is a bias channel closed.",
      topicId: "bias-and-study-errors",
    },
    {
      title: "Quantifying risk",
      note:
        "Every trial's 2×2 result table feeds the next page's arithmetic: relative risk, attributable risk, absolute risk reduction, and number needed to treat (NNT = 1/ARR). A trial analyzed by intention-to-treat produces the 2×2 that real-world ARR — and therefore the NNT a guideline quotes — is computed from.",
      topicId: "quantifying-risk",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology — pharmacokinetics and drug development",
      connection:
        "Phase 0 and Phase 1 are pharmacology applied to regulation: microdosing directly measures what the pharmacokinetics curve does (distribution, clearance — the printed “initial pharmacokinetic and pharmacodynamic assessment”), and dose escalation to the maximum tolerable dose is the LD-of-clinical-development that later phases' dosing is built on. The pipeline sentence “clinical trials occur after preclinical studies” is the bridge between the pharmacology chapters and the drug-development questions.",
    },
    {
      subject: "Pharmacology — pharmacovigilance and adverse drug reactions",
      connection:
        "Phase 4 is the regulatory home of adverse-effect surveillance: the printed “long-term or rare adverse effects (can it stay on the Market?)” is why rare toxicities (the 1-in-50,000 events no premarket trial could power for) surface only as postmarketing surveillance — and why drugs are withdrawn years after approval. The open-label status of phase 4 is what makes spontaneous-report surveillance, not masked detection, the mechanism.",
    },
    {
      subject: "Ethics — informed consent and research in humans",
      connection:
        "An experimental study involving humans is also an ethical event: randomization requires equipoise, placebo controls require consent to possible placebo, and the chapter's own Ethics subsection (informed consent, capacity, surrogate decisions) supplies the rules every phase of this pipeline runs under. The crossover design doubles the consent burden — the subject agrees to receive both treatments and to the washout.",
    },
    {
      subject: "Epidemiology and Biostatistics — the 2×2 table downstream of every trial",
      connection:
        "The trial produces the counts; the next page of the chapter turns them into measures: the event rates per arm become RR = [a/(a+b)]/[c/(c+d)], the difference becomes ARR, the reciprocal becomes NNT. An ITT-analyzed trial yields the conservative event rates — which is why the NNT computed from ITT data is the one guidelines quote for real-world practice.",
    },
  ],
};
