import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 1. Source: FULL pdf page 278 / book 256 (Part 1), the
// FIRST content page of the PUBLIC HEALTH SCIENCES chapter (pdf 277 = the chapter
// opener, book 255, unclaimed — the p249 convention) and the FIRST page of the
// EPIDEMIOLOGY AND BIOSTATISTICS subsection. The topic owns the WHOLE page, which
// carries TWO blocks: (1) the "Observational studies" table — columns STUDY TYPE /
// DESIGN / mEASURES/EXAmPLE, SEVEN rows in printed order: Case series, Cross-
// sectional study, Case-control study, Cohort study, Twin concordance study,
// Adoption study, Ecological study — every cell carried verbatim in the note's
// table block; (2) the study-design TIMELINE FIGURE (pure vector line art): a
// vertical Past–Present–Future time axis with FOUR study-design panels —
// Cross-sectional study (two "Risk factor" boxes at the Present level, connector
// lines down to "Compare disease prevalence"), Case-control study ("Diseased
// cases" + "Controls without disease" at Present, solid arrows pointing UP/back
// in time to "Compare risk factor frequency" at Past), Retrospective cohort study
// (two "Risk factor" boxes at Past, arrows forward to "Compare disease incidence"
// at Present, "Review previous records" below), Prospective cohort study (two
// "Risk factor" boxes at Present, arrows forward to "Compare disease incidence"
// at Future). CENSUS (pdfimages): ZERO raster images on the page — table + pure
// vector figure + the indd footer slug; the table is an ORIGINAL KYP ADAPTATION,
// the timeline figure an ORIGINAL_KYP_REDRAW (the registry visual re-arranges the
// book's vertical axis as a horizontal KYP time axis — the layout is KYP's, every
// printed label is preserved). VLM AVAILABLE this session (glm-4.6v at 120dpi,
// ONE full-page pass, staging-pubh1/vlm-census.txt), confirming: exactly SEVEN
// table rows in the printed order given above (none missing or extra); the two
// in-cell mnemonics print in RED inside the MEASURES/EXAMPLE cells ("Control the
// case in the OR." in the Case-control row, "Cohort = relative risk." in the
// Cohort row — First Aid's OWN, carried VERBATIM and ATTRIBUTED everywhere they
// appear in this note); the figure's panel geometry as reconstructed above (with
// ⊕/⊖ icons on the Risk factor boxes, pink/green/blue Past/Present/Future bands,
// solid black arrows; the case-control arrows point UP = back in time); the dark
// navy table title; NO margin mnemonics, NO asterisk footnotes, NO images, NO
// zebra striping (dotted hairlines only); the subsection banner prints TWICE
// (running header + in-body ribbon). PRINTED-TEXT QUIRKS carried + documented:
// (1) "SEC TION II" header-space extraction artifact (known, carried as-is);
// (2) small-caps extraction artifacts — "EPIDEmIOLOGY AND BIOSTATISTICS" in both
// banner instances and the column header "mEASURES/EXAmPLE" (the print uses small
// caps; the text layer drops the 'm's to lowercase — carried as extracted);
// (3) line-wrap hyphenation — the Cross-sectional DESIGN cell prints "risk-/
// related factors", which the raw text layer merges to "riskrelated" (the print
// carries the hyphen; the note's verbatim table prints "risk-related" and the
// merge is documented); (4) the figure's text objects extract AFTER the table in
// a jumbled reading order with the indd footer slug ("FAS1_2026_06-PubHealth.indd
// 256") interleaved MID-FIGURE in the raw layer — the gen script's figure
// evidence ranges therefore quote the labels in their raw extraction order, and
// the panel assignment is pinned by pdftotext -bbox coordinates + the VLM pass;
// (5) "Twin concordance study" wraps across two lines in its STUDY TYPE cell.
// ADJUDICATIONS (documented in the manifest too): (A) the batch brief's figure
// description assigned "compare risk factor frequency" to the Cross-sectional
// panel and "compare disease prevalence" to the Case-control panel — the PRINT
// says the OPPOSITE (pdftotext -bbox column coordinates, pdftotext -layout, and
// the VLM pass all agree: Cross-sectional → "Compare disease prevalence";
// Case-control → "Compare risk factor frequency"), and the print is internally
// consistent with the printed table (Cross-sectional measures "Disease
// prevalence."; Case-control "Looks to see if odds of prior exposure or risk
// factor differ by disease state") — brief corrected to print; (B) the brief's
// anticipated table content matched the print exactly (seven rows, all cells as
// expected) — no correction needed. PROVENANCE SPLIT: verbatim = the seven table
// rows, the column headers, the figure's labels, the two FA mnemonics; FA-own =
// the red mnemonic printing, the table's examples (COPD ×3, schizophrenia ×2);
// KYP-original = the Past–Present–Future decoder grammar, the 2×2 "two doors"
// reading (disease-first vs exposure-first), the unit-of-analysis ladder, the
// four-question protocol, the exam layer, and the two KYP mnemonics ("FOUR Cs,
// THEN GENES, THEN POPULATIONS" and "ONE SLICE, TWO DIRECTIONS") — every
// teaching generalization beyond the printed page is flagged as KYP context.
// DrugCards: none — the page prints study designs, not drugs (documented as
// folded-by-absence in the manifest). The next page (pdf 279) opens Clinical
// therapeutic trial — the experimental counterpart, a separate topic.

export const observationalStudies: KypUsMLENote = {
  id: "observational-studies",
  title: "Observational Study Designs: The Seven Designs and the Time Axis",
  subtitle:
    "The first content page of Public Health Sciences is a decoder for every study the exam can name. Seven observational designs are printed in one table, and each is secretly answering three questions: where does the investigator stand in time, which door of the 2×2 grid is entered first (disease or exposure), and what is the unit of analysis (one patient, a twin pair, an adoptee, a whole population). A case series describes several individual patients with the same diagnosis, treatment, or outcome — with no comparison group it cannot show risk factor association. A cross-sectional study assesses disease and risk-related factors in the present and measures disease prevalence — association, but not causality. A case-control study starts from disease (cases vs controls) and looks back for the odds of prior exposure — the odds ratio, anchored by First Aid's own red mnemonic \"Control the case in the OR.\" A cohort study starts from exposure and follows forward (or reviews records backward) to later disease — incidence and relative risk, anchored by \"Cohort = relative risk.\" Twin concordance and adoption studies change the unit to sibling pairs and families to price heritability — nature vs nurture, with schizophrenia as the printed example — and an ecological study compares whole populations, where the ecological fallacy waits. The page's timeline figure then compresses four of the designs onto one Past–Present–Future axis: slice the present, look back from disease, or march forward from exposure — and the direction fixes the measure.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — study-design decoding: the seven observational designs with their measures and printed examples (COPD ×3, schizophrenia ×2), the two in-cell First Aid mnemonics carried attributed, and the Past–Present–Future timeline figure with all four study types, their risk-factor arrows, and their compare-labels.",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 256–256 (Epidemiology and Biostatistics: Observational studies)",
  tags: [
    "observational studies",
    "study designs",
    "case series",
    "cross-sectional study",
    "case-control study",
    "cohort study",
    "twin concordance study",
    "adoption study",
    "ecological study",
    "odds ratio",
    "relative risk",
    "disease prevalence",
    "disease incidence",
    "heritability",
    "nature vs nurture",
    "ecological fallacy",
    "retrospective",
    "prospective",
    "COPD",
    "smoking",
    "schizophrenia",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — the “Observational studies” table, columns STUDY TYPE / DESIGN / mEASURES/EXAmPLE, SEVEN rows in printed order: (1) Case series — describes several individual patients with the same diagnosis, treatment, or outcome; description of clinical findings and symptoms; has no comparison group, thus cannot show risk factor association with disease. (2) Cross-sectional study — frequency of disease and frequency of risk-related factors are assessed in the present; disease prevalence; can show risk factor association with disease, but does not establish causality. (3) Case-control study — retrospectively compares a group of people with disease to a group without disease; looks to see if odds of prior exposure or risk factor differ by disease state; odds ratio (OR); “Control the case in the OR.”; patients with COPD had higher odds of a smoking history than those without COPD. (4) Cohort study — compares a group with a given exposure or risk factor to a group without such exposure; looks to see if exposure or risk factor is associated with later development of disease; can be prospective or retrospective; disease incidence; relative risk (RR); people who smoke had a higher risk of developing COPD than people who do not; “Cohort = relative risk.” (5) Twin concordance study — compares the frequency with which both monozygotic twins vs both dizygotic twins develop the same disease; measures heritability and influence of environmental factors (“nature vs nurture”); if one monozygotic twin develops schizophrenia, the other twin has a much higher concordance rate than dizygotic twins, showing a strong genetic component. (6) Adoption study — compares behavioral traits/genetics in siblings raised by biological vs adoptive parents; measures heritability and influence of environmental factors; an adopted child has a higher risk of developing schizophrenia if their biological parent had schizophrenia, regardless of the adoptive parents’ health. (7) Ecological study — compares frequency of disease and frequency of risk-related factors across populations; measures population data not necessarily applicable to individuals (ecological fallacy); used to monitor population health; COPD prevalence was higher in more polluted cities. BLOCK 2 — the study-design timeline figure (pure vector art): four study types on a Past–Present–Future axis with their risk-factor boxes and compare-labels — Cross-sectional (two Risk factor boxes at Present → “Compare disease prevalence”), Case-control (Diseased cases + Controls without disease at Present, arrows looking back to “Compare risk factor frequency” at Past), Retrospective cohort (Risk factor boxes at Past → “Compare disease incidence” at Present, “Review previous records”), Prospective cohort (Risk factor boxes at Present → “Compare disease incidence” at Future).",
    why:
      "This page opens the Epidemiology and Biostatistics subsection because study-design identification is the doorway to every biostatistics question that follows: you cannot pick the right measure, the right bias, or the right causal claim until you know what kind of study produced the data. The seven designs are not seven arbitrary facts — they are the cells of one design space. Axis 1, TIME: the investigator either slices the present (cross-sectional), looks back from disease (case-control), marches forward from exposure (prospective cohort), or reads yesterday's records of exposure-forward (retrospective cohort). Axis 2, THE 2×2 GRID'S TWO DOORS: entering by the disease door (cases vs controls) yields the odds ratio; entering by the exposure door (exposed vs unexposed) yields incidence and relative risk — which is exactly why First Aid prints “Control the case in the OR.” and “Cohort = relative risk.” as the table's two red anchors. Axis 3, THE UNIT OF ANALYSIS: one patient (case series), one individual at one moment (cross-sectional), one individual over time (case-control, cohort), a twin pair (twin concordance), an adoptive family (adoption), a whole population (ecological) — and each widening of the unit trades individual-level inference for reach, with the ecological fallacy as the printed price of the last step. The page also plants the chapter's two running examples: COPD/smoking, which recurs through three designs (odds of smoking history in case-control, risk of developing COPD in cohort, polluted-city prevalence in ecological), and schizophrenia, which recurs through the two heritability designs (twin concordance and adoption).",
    keyIdea:
      "Decode any study in four moves. MOVE 1 — WHERE DOES THE INVESTIGATOR STAND IN TIME? A single slice of the present = cross-sectional (measures disease PREVALENCE; association, not causality). Looking backward from disease = case-control. Moving forward from exposure = prospective cohort; reading past records of exposure-forward = retrospective cohort (both cohort flavors measure disease INCIDENCE and RELATIVE RISK). MOVE 2 — WHICH DOOR OF THE 2×2 GRID IS ENTERED FIRST? Disease first (diseased cases vs controls without disease) → the odds of prior exposure → ODDS RATIO (OR) — “Control the case in the OR.” Exposure first (given exposure or risk factor vs without such exposure) → later development of disease → RELATIVE RISK (RR) — “Cohort = relative risk.” MOVE 3 — WHAT IS THE UNIT OF ANALYSIS? No comparison group at all = case series (description only — cannot show risk factor association). Monozygotic vs dizygotic twin pairs = twin concordance study (heritability, nature vs nurture — MZ twins share nearly all genes, DZ twins share ~half, so higher MZ concordance shows a strong genetic component). Biological vs adoptive parents = adoption study (heritability plus environment — risk tracking the biological parent shows genes; tracking the adoptive environment shows nurture). Whole populations = ecological study (population data, not necessarily applicable to individuals — the ecological fallacy). MOVE 4 — READ OFF THE MEASURE: description → prevalence → odds ratio → incidence/relative risk → heritability → population-level comparison. Direction, door, unit, measure — four questions, and any design the exam names decodes itself.",
  },
  mechanisms: [
    {
      id: "time-axis-map",
      title:
        "Standing at the Present: how the direction of inquiry generates the four timeline designs and fixes their measures",
      context:
        "The printed study-design timeline figure (book 256): four designs on the Past–Present–Future axis",
      flow: {
        nodes: [
          {
            id: "present",
            label: "THE PRESENT — where every investigator stands",
            sublabel:
              "Input — the figure's time axis runs Past → Present → Future (printed top to bottom in the book; re-drawn left to right in the KYP visual). Every observational design is anchored at the present moment: the question is which way the study's arrows point from there. Four printed arrow-patterns generate the four timeline designs.",
            variant: "input",
          },
          {
            id: "slice",
            label: "SLICE THE PRESENT — Cross-sectional study",
            sublabel:
              "Process — assess frequency of disease AND frequency of risk-related factors at one point in time: the printed design, “Frequency of disease and frequency of risk-related factors are assessed in the present.” The figure draws two Risk factor boxes sitting AT the Present level. The measure is what a single slice can measure: “Disease prevalence.” It “can show risk factor association with disease, but does not establish causality” — a snapshot has no before and after.",
            variant: "process",
          },
          {
            id: "lookback",
            label: "LOOK BACK FROM DISEASE — Case-control study",
            sublabel:
              "Process — start at the Present with the outcome already known: “Diseased cases” vs “Controls without disease” (the figure's two Present-level boxes), then send the arrows UP, back in time, to “Compare risk factor frequency” in the Past. The printed design: “Retrospectively compares a group of people with disease to a group without disease. Looks to see if odds of prior exposure or risk factor differ by disease state.” The measure of a look-back: “Odds ratio (OR)” — “Control the case in the OR.”",
            variant: "process",
          },
          {
            id: "march",
            label: "MARCH FORWARD FROM EXPOSURE — Prospective cohort study",
            sublabel:
              "Process — start at the Present with the exposure: two Risk factor boxes (exposed vs unexposed), then send the arrows DOWN, forward in time, to “Compare disease incidence” in the Future. The printed design: “Compares a group with a given exposure or risk factor to a group without such exposure. Looks to see if exposure or risk factor is associated with later development of disease.” Measures: “Disease incidence.” “Relative risk (RR)” — “Cohort = relative risk.”",
            variant: "process",
          },
          {
            id: "records",
            label: "READ YESTERDAY'S RECORDS — Retrospective cohort study",
            sublabel:
              "Process — the same exposure-forward logic, but the exposure happened in the Past: the figure's two Risk factor boxes sit at the Past level, arrows run forward to “Compare disease incidence” at the Present, and the method tag is “Review previous records.” The printed table's own words: a cohort “can be prospective or retrospective” — the direction of the ARROW (exposure → disease) is what makes it a cohort, not the calendar date the data were collected.",
            variant: "process",
          },
          {
            id: "rule",
            label: "THE RULE — the direction fixes the measure",
            sublabel:
              "Output — slice the present → PREVALENCE (a snapshot counts who has disease now); look back from disease → ODDS (prior exposure can only be asked about, so the yield is the odds ratio); march forward (or read forward) from exposure → INCIDENCE and RELATIVE RISK (following exposed and unexposed groups forward counts new disease in each arm). Time direction is the single fastest design identifier in any vignette — and it is exactly the grammar the printed figure draws.",
            variant: "output",
          },
        ],
        edges: [
          { from: "present", to: "slice", label: "no arrow — one time slice →" },
          { from: "present", to: "lookback", label: "arrows point back in time →" },
          { from: "present", to: "march", label: "arrows point forward →" },
          { from: "present", to: "records", label: "arrows point forward, from the past →" },
          { from: "slice", to: "rule", label: "a slice measures prevalence" },
          { from: "lookback", to: "rule", label: "a look-back measures odds (OR)" },
          { from: "march", to: "rule", label: "a march measures incidence (RR)" },
          { from: "records", to: "rule", label: "records run the same arrow (RR)" },
        ],
      },
    },
    {
      id: "comparison-axis-map",
      title:
        "The two doors of the 2×2 grid and the unit of analysis: how the table's seven rows are generated",
      context:
        "The printed Observational studies table (book 256): the 2×2 exposure × disease grid plus the unit ladder",
      flow: {
        nodes: [
          {
            id: "grid",
            label: "THE 2×2 GRID — exposure × disease, the table's hidden backbone",
            sublabel:
              "Input — every analytic observational design lives inside the same 2×2 contingency grid (exposure: yes/no × disease: yes/no; the grid itself is taught with the quantifying-risk topic). The printed table's seven rows are seven different ways of ENTERING that grid — or of stepping outside it — and the door chosen decides the measure that comes out.",
            variant: "input",
          },
          {
            id: "disease-door",
            label: "ENTER BY THE DISEASE DOOR — Case-control study → odds ratio",
            sublabel:
              "Process — sample on the OUTCOME: “Retrospectively compares a group of people with disease to a group without disease,” then ask both groups about the past. Because the sampling is disease-first, the exposed and unexposed denominators are fixed by the investigator, not by the population — so raw disease risk is uncomputable and the yield is the ODDS RATIO (OR): “Patients with COPD had higher odds of a smoking history than those without COPD.” First Aid's own red mnemonic: “Control the case in the OR.”",
            variant: "process",
          },
          {
            id: "exposure-door",
            label: "ENTER BY THE EXPOSURE DOOR — Cohort study → incidence, relative risk",
            sublabel:
              "Process — sample on the EXPOSURE: “Compares a group with a given exposure or risk factor to a group without such exposure,” then watch for “later development of disease.” Exposure-first sampling preserves the denominators, so NEW disease can be counted in each arm → “Disease incidence” and “Relative risk (RR)”: “People who smoke had a higher risk of developing COPD than people who do not.” First Aid's own red mnemonic: “Cohort = relative risk.”",
            variant: "process",
          },
          {
            id: "freeze",
            label: "FREEZE THE GRID AT ONE MOMENT — Cross-sectional study → prevalence",
            sublabel:
              "Process — take the whole grid at a single time slice: “Frequency of disease and frequency of risk-related factors are assessed in the present.” Because exposure and disease are measured simultaneously, the grid yields “Disease prevalence” and cross-tabulations of risk factor vs disease — association, “but does not establish causality,” because nothing precedes anything else in a snapshot.",
            variant: "process",
          },
          {
            id: "no-grid",
            label: "NO COMPARISON AT ALL — Case series → description only",
            sublabel:
              "Process — the pre-analytic row: “Describes several individual patients with the same diagnosis, treatment, or outcome.” There is no second group, hence no 2×2 grid at all: “Description of clinical findings and symptoms. Has no comparison group, thus cannot show risk factor association with disease.” A case series can generate hypotheses; it cannot test them (KYP framing of the printed limitation).",
            variant: "process",
          },
          {
            id: "unit-ladder",
            label: "CHANGE THE UNIT — twins, adoptive families, populations",
            sublabel:
              "Process — three rows widen the unit of analysis instead of reshaping the grid. Twin concordance study: compare how often BOTH monozygotic twins vs BOTH dizygotic twins develop the same disease — MZ pairs share essentially all genes, DZ pairs ~half, so higher MZ concordance prices heritability (“nature vs nurture”); printed example: schizophrenia. Adoption study: compare “siblings raised by biological vs adoptive parents” — risk that tracks the biological parent is genetic, risk that tracks the adoptive home is environmental; printed example: schizophrenia. Ecological study: compare “frequency of disease and frequency of risk-related factors across populations” — the unit is the population itself, so conclusions are “population data not necessarily applicable to individuals (ecological fallacy).”",
            variant: "process",
          },
          {
            id: "ladder-out",
            label: "THE LADDER — individual description → individual comparison → sibling pairs → families → populations",
            sublabel:
              "Output — read the seven rows as one climb: the case series describes individuals; cross-sectional, case-control, and cohort compare individuals; twin concordance compares twin pairs; adoption compares family rearing vs family genes; ecological compares whole populations. Each rung up widens reach and shrinks individual-level inference — the ecological fallacy is the printed toll at the top, and the genetics pair is the only rung that can separate genes from environment.",
            variant: "output",
          },
        ],
        edges: [
          { from: "grid", to: "disease-door", label: "sample on disease →" },
          { from: "grid", to: "exposure-door", label: "sample on exposure →" },
          { from: "grid", to: "freeze", label: "measure both at once →" },
          { from: "grid", to: "no-grid", label: "never enters the grid →" },
          { from: "grid", to: "unit-ladder", label: "widen the unit →" },
          { from: "disease-door", to: "ladder-out", label: "OR" },
          { from: "exposure-door", to: "ladder-out", label: "incidence, RR" },
          { from: "freeze", to: "ladder-out", label: "prevalence" },
          { from: "no-grid", to: "ladder-out", label: "description only" },
          { from: "unit-ladder", to: "ladder-out", label: "heritability · ecological fallacy" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "observational-studies-map",
      title:
        "The seven observational designs and the Past–Present–Future time axis (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 256's two blocks. TOP — the time axis re-drawn horizontally (Past · Present · Future) with the four timeline designs as lanes: Cross-sectional study (two risk-factor chips at the Present tick, reading down to “Compare disease prevalence”); Case-control study (Diseased cases + Controls without disease at Present, arrows pointing BACK to “Compare risk factor frequency” at Past); Retrospective cohort study (risk-factor chips at Past marching forward to “Compare disease incidence” at Present, tagged “Review previous records”); Prospective cohort study (risk-factor chips at Present marching forward to “Compare disease incidence” at Future). BOTTOM — the seven design rows as compact cards in printed order, each carrying design → measure → example, with First Aid's two red in-cell mnemonics (“Control the case in the OR.” and “Cohort = relative risk.”) attributed, plus the page's two example threads (COPD through three designs; schizophrenia through the two heritability designs).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 278 — the page's assets are the color-coded table (dark navy title, blue STUDY TYPE names, red mnemonic lines, dotted hairlines — VLM-read at 120dpi, staging-pubh1/vlm-census.txt) and the pure-vector timeline figure (pink/green/blue time bands, ⊕/⊖ risk-factor icons, solid black arrows). The visual is an ORIGINAL KYP ADAPTATION + REDRAW: the book's vertical time axis is re-arranged as a horizontal KYP axis and the table is re-laid-out as cards — the artwork and layout are KYP's, every printed label (all seven rows, all four panels, both compare-labels, both mnemonics) is preserved from the print, and the full table is additionally carried verbatim in the note's table block. ADJUDICATION, drawn on the visual exactly as printed: the Cross-sectional panel carries “Compare disease prevalence” and the Case-control panel carries “Compare risk factor frequency” (bbox + layout + VLM agree; the batch brief had the two labels swapped — print governs).",
    },
    {
      kind: "table",
      title:
        "Book 256 — the printed Observational studies table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's first block: 3 columns (STUDY TYPE / DESIGN / mEASURES/EXAmPLE) and 7 data rows in printed order — Case series through Ecological study. Two of First Aid's own mnemonics print in RED inside the MEASURES/EXAMPLE cells (“Control the case in the OR.” in the Case-control row, “Cohort = relative risk.” in the Cohort row) — carried here verbatim and attributed. The column header prints in small caps and extracts as “mEASURES/EXAmPLE” (a text-layer artifact, carried as extracted); the Cross-sectional DESIGN cell prints “risk-related” across a line wrap, which the raw layer merges to “riskrelated” — the hyphenated print is carried here.",
      columns: ["STUDY TYPE", "DESIGN", "mEASURES/EXAmPLE"],
      rows: [
        [
          "Case series",
          "Describes several individual patients with the same diagnosis, treatment, or outcome.",
          "Description of clinical findings and symptoms. Has no comparison group, thus cannot show risk factor association with disease.",
        ],
        [
          "Cross-sectional study",
          "Frequency of disease and frequency of risk-related factors are assessed in the present.",
          "Disease prevalence. Can show risk factor association with disease, but does not establish causality.",
        ],
        [
          "Case-control study",
          "Retrospectively compares a group of people with disease to a group without disease. Looks to see if odds of prior exposure or risk factor differ by disease state.",
          "Odds ratio (OR). Control the case in the OR. Patients with COPD had higher odds of a smoking history than those without COPD.",
        ],
        [
          "Cohort study",
          "Compares a group with a given exposure or risk factor to a group without such exposure. Looks to see if exposure or risk factor is associated with later development of disease. Can be prospective or retrospective.",
          "Disease incidence. Relative risk (RR). People who smoke had a higher risk of developing COPD than people who do not. Cohort = relative risk.",
        ],
        [
          "Twin concordance study",
          "Compares the frequency with which both monozygotic twins vs both dizygotic twins develop the same disease.",
          "Measures heritability and influence of environmental factors (“nature vs nurture”). If one monozygotic twin develops schizophrenia, the other twin has a much higher concordance rate than dizygotic twins, showing a strong genetic component.",
        ],
        [
          "Adoption study",
          "Compares behavioral traits/genetics in siblings raised by biological vs adoptive parents.",
          "Measures heritability and influence of environmental factors. An adopted child has a higher risk of developing schizophrenia if their biological parent had schizophrenia, regardless of the adoptive parents’ health.",
        ],
        [
          "Ecological study",
          "Compares frequency of disease and frequency of risk-related factors across populations. Measures population data not necessarily applicable to individuals (ecological fallacy).",
          "Used to monitor population health. COPD prevalence was higher in more polluted cities.",
        ],
      ],
      caption:
        "Verbatim carry, documented: SEVEN rows in printed order (VLM-confirmed — none missing or extra). First Aid prints its two mnemonics in red bold inside the MEASURES/EXAMPLE cells — “Control the case in the OR.” (Case-control row) and “Cohort = relative risk.” (Cohort row) — reproduced here as printed and ATTRIBUTED to the source (they are First Aid's own hooks, not KYP's). Printed quirks carried: “Twin concordance study” wraps across two lines in its STUDY TYPE cell; the curly-quoted “nature vs nurture” is as printed; the Cross-sectional DESIGN cell's “risk-related” hyphenates across a line wrap in print (raw text layer merges it to “riskrelated” — the hyphenated word is carried); the column header extracts as “mEASURES/EXAmPLE” (small-caps artifact). The table's three COPD mentions (case-control odds of smoking history, cohort risk of developing COPD, ecological prevalence in polluted cities) and two schizophrenia mentions (twin concordance, adoption) are First Aid's own running examples.",
    },
    {
      kind: "list",
      title:
        "The decoder — design → measure → example, row by row (KYP's reading of the table)",
      intro:
        "Each printed row compressed to its exam-decision core: what the design does, what it measures, and the printed example that anchors it. This is the layer to recall when a vignette hands you a study and asks for its name, its measure, or its limitation.",
      items: [
        {
          lead: "ROW 1 — CASE SERIES: describe, do not compare",
          text: "Design: describes several individual patients with the same diagnosis, treatment, or outcome. Measure: description of clinical findings and symptoms — there is no measure of association at all. Limitation (the exam's favorite): has no comparison group, thus cannot show risk factor association with disease. Use it to spot a pattern (KYP context: case series generate hypotheses); never to test one.",
        },
        {
          lead: "ROW 2 — CROSS-SECTIONAL: one slice of the present → PREVALENCE",
          text: "Design: frequency of disease and frequency of risk-related factors are assessed in the present — a snapshot. Measure: disease prevalence. Strength and limit in one printed sentence: can show risk factor association with disease, but does not establish causality. Timeline figure: two risk-factor chips AT the Present tick, reading to “Compare disease prevalence.”",
        },
        {
          lead: "ROW 3 — CASE-CONTROL: disease first, look back → ODDS RATIO",
          text: "Design: retrospectively compares a group of people with disease to a group without disease; looks to see if odds of prior exposure or risk factor differ by disease state. Measure: odds ratio (OR) — First Aid's own red mnemonic, printed in the cell: “Control the case in the OR.” Example: patients with COPD had higher odds of a smoking history than those without COPD. Timeline figure: Diseased cases + Controls without disease at Present, arrows pointing back to “Compare risk factor frequency” at Past.",
        },
        {
          lead: "ROW 4 — COHORT: exposure first, march forward → INCIDENCE + RELATIVE RISK",
          text: "Design: compares a group with a given exposure or risk factor to a group without such exposure; looks to see if exposure or risk factor is associated with later development of disease; can be prospective or retrospective. Measures: disease incidence; relative risk (RR) — First Aid's own red mnemonic, printed in the cell: “Cohort = relative risk.” Example: people who smoke had a higher risk of developing COPD than people who do not. Timeline figure: prospective = risk-factor chips at Present marching to “Compare disease incidence” at Future; retrospective = chips at Past marching to incidence at Present, tagged “Review previous records.”",
        },
        {
          lead: "ROW 5 — TWIN CONCORDANCE: MZ vs DZ pairs → HERITABILITY",
          text: "Design: compares the frequency with which both monozygotic twins vs both dizygotic twins develop the same disease. Measures heritability and influence of environmental factors (“nature vs nurture”). Example: if one monozygotic twin develops schizophrenia, the other twin has a much higher concordance rate than dizygotic twins, showing a strong genetic component. The logic (KYP): MZ twins share essentially all their genes, DZ twins about half — so concordance that is much higher in MZ pairs is genetic signal.",
        },
        {
          lead: "ROW 6 — ADOPTION: biological vs adoptive parents → GENES vs ENVIRONMENT",
          text: "Design: compares behavioral traits/genetics in siblings raised by biological vs adoptive parents. Measures heritability and influence of environmental factors — the same target as twin concordance, attacked from the family side. Example: an adopted child has a higher risk of developing schizophrenia if their biological parent had schizophrenia, regardless of the adoptive parents’ health — the risk travels with the genes, not the household.",
        },
        {
          lead: "ROW 7 — ECOLOGICAL: populations, not people → ECOLOGICAL FALLACY",
          text: "Design: compares frequency of disease and frequency of risk-related factors across populations. The caution is printed in the DESIGN cell itself: measures population data not necessarily applicable to individuals (ecological fallacy). Use: to monitor population health. Example: COPD prevalence was higher in more polluted cities. The fallacy (the exam's favorite twist): a population-level association does not prove any individual in that population carries the risk.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Identifying the design from any vignette in four questions",
      intro:
        "The whole page distilled into an ordered reading path — STAND, DOOR, UNIT, MEASURE — applicable to any study description the exam shows, printed on book 256 or not.",
      steps: [
        {
          label: "QUESTION 1 — WHERE DOES THE INVESTIGATOR STAND IN TIME?",
          detail:
            "A single snapshot (“assessed in the present”) → cross-sectional. Arrows backward from disease (“retrospectively compares”) → case-control. Arrows forward from exposure (“later development of disease”) → cohort — prospective if the follow-up is still to come, retrospective if the method is to “review previous records.”",
        },
        {
          label: "QUESTION 2 — WHICH GROUP WAS SAMPLED FIRST — DISEASE OR EXPOSURE?",
          detail:
            "The 2×2 grid's two doors. Sampled on disease (cases vs controls, then asked about the past) → case-control → odds ratio (OR): “Control the case in the OR.” Sampled on exposure (exposed vs unexposed, then watched for disease) → cohort → disease incidence and relative risk (RR): “Cohort = relative risk.”",
        },
        {
          label: "QUESTION 3 — WHAT IS THE UNIT OF ANALYSIS?",
          detail:
            "One patient described alone → case series (no comparison group — cannot show risk factor association). Twin pairs (both MZ vs both DZ) → twin concordance study. Siblings raised by biological vs adoptive parents → adoption study. Whole populations → ecological study (ecological fallacy). Individuals compared at one moment or over time → cross-sectional / case-control / cohort.",
        },
        {
          label: "QUESTION 4 — READ OFF THE MEASURE, THEN THE LIMITATION",
          detail:
            "Description (case series) → prevalence (cross-sectional) → odds ratio (case-control) → incidence + relative risk (cohort) → heritability / nature-vs-nurture (twin concordance, adoption) → population-level comparison (ecological). Then attach the printed limits: snapshots do not establish causality; case series cannot show association; ecological data do not necessarily apply to individuals.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Case-control vs cohort — the exam's favorite see-saw, in the table's own words",
      intro:
        "Rows 3 and 4 of the printed table are mirror images: one enters the 2×2 grid by the disease door, the other by the exposure door. Every distinguishing feature follows from that one choice.",
      columns: [
        "Case-control study — the DISEASE door",
        "Cohort study — the EXPOSURE door",
      ],
      rows: [
        {
          label: "Starting point (who is sampled first)",
          a: "A group of people WITH disease vs a group WITHOUT disease — “Retrospectively compares a group of people with disease to a group without disease”",
          b: "A group WITH a given exposure or risk factor vs a group WITHOUT such exposure — the exposure is the sampling handle",
        },
        {
          label: "Direction of inquiry",
          a: "Backward: “Looks to see if odds of prior exposure or risk factor differ by disease state” — the timeline figure's arrows point up, back to the Past",
          b: "Forward: “Looks to see if exposure or risk factor is associated with later development of disease” — the figure's arrows march toward Present or Future; “can be prospective or retrospective”",
        },
        {
          label: "What is compared (the figure's compare-label)",
          a: "“Compare risk factor frequency” — how common the prior exposure was in cases vs controls",
          b: "“Compare disease incidence” — how much new disease develops in the exposed vs unexposed arms",
        },
        {
          label: "Measures",
          a: "Odds ratio (OR) — the printed mnemonic: “Control the case in the OR.”",
          b: "Disease incidence; Relative risk (RR) — the printed mnemonic: “Cohort = relative risk.”",
        },
        {
          label: "The printed COPD example",
          a: "“Patients with COPD had higher odds of a smoking history than those without COPD” — odds language, past exposure",
          b: "“People who smoke had a higher risk of developing COPD than people who do not” — risk language, later development",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — three stem shapes and one fallacy twist",
      body:
        "SHAPE 1 — IDENTIFY THE DESIGN: the stem describes the sampling (“120 patients with COPD and 120 without, asked about smoking history”) and asks for the design — route through the four questions (disease-first + look-back = case-control). SHAPE 2 — MATCH THE MEASURE: the answer options are measures (prevalence, OR, RR, heritability, population data) — the design fixes the measure: snapshot → prevalence; look-back → OR; exposure-forward → RR; twin/adoption → heritability; populations → ecological comparison. SHAPE 3 — ODDS VS RISK LANGUAGE: a stem that says patients with disease “had higher ODDS of a prior exposure” is a case-control regardless of the disease; one that says the exposed “had a higher RISK of DEVELOPING disease” is a cohort — the two printed COPD examples are the templates. THE FALLACY TWIST: “COPD prevalence was higher in more polluted cities” is an ecological study, and the follow-up question is always the ecological fallacy — population-level data are “not necessarily applicable to individuals.” Also expect the case-series limitation as a one-liner: with no comparison group, it cannot show risk factor association with disease.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own red mnemonics — printed in the cells, carried attributed",
      body:
        "The page prints TWO mnemonics of its own, in RED inside the MEASURES/EXAMPLE cells (VLM-confirmed at 120dpi, staging-pubh1/vlm-census.txt) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “Control the case in the OR.” — the Case-control row: case-CONTROL studies compare diseased CASES to CONTROLS and yield the ODDS RATIO (the OR doubles as the operating room). (2) “Cohort = relative risk.” — the Cohort row: cohorts measure disease incidence and express it as RELATIVE RISK. The two KYP originals in the Memory section below are marked as such: “FOUR Cs, THEN GENES, THEN POPULATIONS” (the seven-row architecture: Case series, Cross-sectional, Case-control, Cohort — then the two heritability designs, Twin concordance and Adoption — then the population design, Ecological) and “ONE SLICE, TWO DIRECTIONS” (the time axis: slice the present = cross-sectional/prevalence; look back = case-control/OR; march forward = cohort/RR).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — one disease of the lung, one of the mind",
      intro:
        "First Aid runs two clinical threads through the seven rows; both are printed in the MEASURES/EXAMPLE cells and both are high-yield anchors for design-identification questions.",
      items: [
        {
          lead: "THE COPD THREAD — one disease through three designs",
          text: "Case-control: “Patients with COPD had higher odds of a smoking history than those without COPD” (odds ratio). Cohort: “People who smoke had a higher risk of developing COPD than people who do not” (relative risk). Ecological: “COPD prevalence was higher in more polluted cities” (population-level comparison, ecological fallacy). The same disease refracts into three measures depending on the design — smoking is the individual-level exposure, city pollution the population-level one.",
        },
        {
          lead: "THE SCHIZOPHRENIA THREAD — one disease through the two heritability designs",
          text: "Twin concordance: “If one monozygotic twin develops schizophrenia, the other twin has a much higher concordance rate than dizygotic twins, showing a strong genetic component.” Adoption: “An adopted child has a higher risk of developing schizophrenia if their biological parent had schizophrenia, regardless of the adoptive parents’ health” — the risk travels with the biological parent, so the signal is genetic, not rearing.",
        },
        {
          lead: "THE BOUNDARY — what this page is NOT",
          text: "Every design on this page is OBSERVATIONAL: the investigator measures what happens without assigning interventions (the printed table's own contrast is implicit — the next page of the chapter, book 257, opens “Clinical therapeutic trial,” the experimental design where the investigator intervenes). When a stem says subjects were randomized to treatment vs placebo, the study has left this page (KYP framing of the chapter's structure).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A researcher assembles 120 patients with COPD and 120 people without COPD, then interviews both groups about their smoking histories; the finding is that the patients with COPD had higher odds of a smoking history than those without COPD.",
        discriminator:
          "Disease-first sampling plus backward inquiry — “odds of prior exposure” language; the printed COPD example itself",
        concept: "Case-control study design and its measure",
        answer:
          "Case-control study, yielding the odds ratio (OR) — “Control the case in the OR.” The design: retrospectively compares a group of people with disease to a group without disease, looking to see if odds of prior exposure or risk factor differ by disease state.",
      },
      {
        stem: "A study enrolls smokers and nonsmokers who are free of lung disease at baseline, follows both groups for a decade, and finds that people who smoke had a higher risk of developing COPD than people who do not.",
        discriminator:
          "Exposure-first sampling plus forward follow-up — “later development of disease”; “risk of developing” language",
        concept: "(Prospective) cohort study design and its measures",
        answer:
          "Cohort study — measures disease incidence and relative risk (RR): “Cohort = relative risk.” The design: compares a group with a given exposure or risk factor to a group without such exposure and looks for later development of disease; a cohort can be prospective (follow forward) or retrospective (review previous records).",
      },
      {
        stem: "An analyst plots COPD prevalence against air-pollution measurements across dozens of cities and reports that COPD prevalence was higher in more polluted cities; a colleague warns that this cannot be applied to any single city resident.",
        discriminator:
          "The unit of analysis is the POPULATION (cities), not the individual — and the printed caution names itself",
        concept: "Ecological study and the ecological fallacy",
        answer:
          "Ecological study — compares frequency of disease and frequency of risk-related factors across populations; used to monitor population health. The caution is printed in the design cell itself: it “measures population data not necessarily applicable to individuals (ecological fallacy).”",
      },
      {
        stem: "Among pairs in which one twin develops schizophrenia, the co-twin develops it far more often when the pair is monozygotic than when it is dizygotic; in a separate design, an adopted child's risk of schizophrenia tracks the biological parent's diagnosis, regardless of the adoptive parents' health.",
        discriminator:
          "The two heritability designs side by side: MZ-vs-DZ concordance, and biological-vs-adoptive parents",
        concept: "Twin concordance and adoption studies — heritability, nature vs nurture",
        answer:
          "Twin concordance study (compares the frequency with which both monozygotic twins vs both dizygotic twins develop the same disease — much higher MZ concordance shows a strong genetic component) and adoption study (compares behavioral traits/genetics in siblings raised by biological vs adoptive parents — risk tracking the biological parent is genetic). Both measure heritability and the influence of environmental factors (“nature vs nurture”).",
      },
    ],
    traps: [
      {
        a: "Case-control study — odds ratio (OR): “Control the case in the OR.”",
        b: "Cohort study — incidence, relative risk (RR): “Cohort = relative risk.”",
        whyConfused:
          "Both are analytic individual-level designs comparing an exposed and unexposed experience; the printed COPD examples differ by only a few words (higher odds of a smoking HISTORY vs higher risk of DEVELOPING COPD)",
        keyDifference:
          "The DOOR: case-control samples on disease and looks back (prior exposure → odds); cohort samples on exposure and looks forward (later disease → incidence, RR). The language tells the door: “odds of prior exposure” vs “later development of disease”",
        clue:
          "Odds + past exposure = case-control (OR); risk + new disease = cohort (RR). And the figure: case-control arrows point back in time, cohort arrows point forward.",
      },
      {
        a: "Cross-sectional study — disease prevalence, assessed in the present",
        b: "Case-control study — odds ratio, retrospectively compared groups",
        whyConfused:
          "Both are quick, cheap, and stop short of causality; both can “show risk factor association with disease”; a stem about “current smoking and current COPD” sits right on the border",
        keyDifference:
          "Cross-sectional measures disease and risk-related factors simultaneously in a present-time snapshot (a prevalence slice); case-control STARTS from disease status (cases vs controls) and asks about the PAST. A snapshot has no groups sampled on outcome; a case-control has no present-time slice",
        clue:
          "“Assessed in the present” / “prevalence” → cross-sectional; “retrospectively compares… disease to a group without disease” → case-control.",
      },
      {
        a: "Twin concordance study — both monozygotic vs both dizygotic twins",
        b: "Adoption study — biological vs adoptive parents",
        whyConfused:
          "Both measure heritability and the influence of environmental factors; both print the same schizophrenia example on this page",
        keyDifference:
          "Twin concordance holds the environment (largely) shared and varies GENES (MZ vs DZ); adoption holds the genes (biological parent) and varies the ENVIRONMENT (adoptive home). Twin concordance asks “how often do both twins develop the same disease?”; adoption asks “whom does the child's risk follow?”",
        clue:
          "Twins → compare ZYGOSITY (concordance rates); adoptees → compare PARENTS (biological vs adoptive). Risk following the biological parent = genetic.",
      },
      {
        a: "Ecological study — populations compared, “COPD prevalence was higher in more polluted cities”",
        b: "The six individual-level designs — individual patients sampled",
        whyConfused:
          "The ecological stem still mentions disease frequency and risk-related factors — the same vocabulary as every other row",
        keyDifference:
          "The UNIT: ecological compares whole populations (cities, countries) and is used to monitor population health; its printed caution is the ecological fallacy — population data are not necessarily applicable to individuals. No other row carries a fallacy",
        clue:
          "If the data points are populations, not people, it is ecological — and the exam will follow with the fallacy twist.",
      },
    ],
    pivots: [
      {
        lookAlike: "A measure question: prevalence vs odds ratio vs relative risk vs heritability",
        differentiator:
          "The design harvests exactly one measure — match design to measure before reading options",
        correctPath:
          "Snapshot in the present → prevalence (cross-sectional); odds of prior exposure by disease state → OR (case-control); later development of disease by exposure → incidence + RR (cohort); MZ-vs-DZ concordance or biological-vs-adoptive tracking → heritability (twin concordance / adoption); population comparison → ecological data (ecological fallacy).",
      },
      {
        lookAlike: "“Retrospective” appearing in two different rows",
        differentiator:
          "Retrospective CASE-CONTROL looks back from disease; retrospective COHORT reviews previous records of an exposure-forward comparison",
        correctPath:
          "Ask what was sampled first: disease (cases vs controls) → retrospective case-control → OR; exposure (exposed vs unexposed, then disease by records) → retrospective cohort → incidence, RR — “Can be prospective or retrospective” is printed only in the Cohort row.",
      },
      {
        lookAlike: "A “which study design?” option list that includes Case series",
        differentiator:
          "The comparison-group tell: case series has none, and the limitation is printed verbatim",
        correctPath:
          "Several individual patients, same diagnosis/treatment/outcome, no second group → case series — description of clinical findings and symptoms; “has no comparison group, thus cannot show risk factor association with disease.” Any option with a comparison (of exposure or disease) is not a case series.",
      },
    ],
    miniCase: {
      vignette:
        "A pulmonologist notices that many of her COPD patients smoked in the past. To test the impression, she recruits 150 patients with COPD from her clinic and 150 clinic patients without COPD, matched on age and sex, and has a research assistant review every subject's records and interview them about their smoking history. She reports that the patients with COPD had higher odds of a smoking history than those without COPD. A medical student rotating with her is asked to classify the study before the journal club.",
      question:
        "Which of the following best describes this study design and the measure it yields?",
      options: [
        {
          label: "A",
          text: "Case-control study; odds ratio",
          correct: true,
          why: "CORRECT — the study samples on DISEASE (150 with COPD vs 150 without), then looks back at prior exposure (smoking history): “Retrospectively compares a group of people with disease to a group without disease. Looks to see if odds of prior exposure or risk factor differ by disease state.” The measure is the odds ratio (OR) — the printed mnemonic “Control the case in the OR.” — and the finding's own wording (“higher odds of a smoking history”) is the case-control signature.",
        },
        {
          label: "B",
          text: "Cross-sectional study; disease prevalence",
          why: "TEMPTING but wrong — a cross-sectional study assesses frequency of disease AND frequency of risk-related factors in the present, a single snapshot of a population, yielding disease prevalence. This study did not snapshot a population: it deliberately assembled two groups BY disease status and then reached into the past for exposure. Prevalence is not even computable from disease-sampled groups (KYP context).",
        },
        {
          label: "C",
          text: "Prospective cohort study; relative risk",
          why: "TEMPTING but wrong — a cohort compares a group with a given exposure or risk factor to a group without such exposure and follows for LATER development of disease, yielding incidence and relative risk (“Cohort = relative risk.”). Here the groups were formed by disease status, not smoking status, and the exposure was already in the past — the arrow points the wrong way.",
        },
        {
          label: "D",
          text: "Ecological study; population-level comparison",
          why: "WRONG unit of analysis — an ecological study compares frequency of disease and frequency of risk-related factors across POPULATIONS (the printed example: COPD prevalence was higher in more polluted cities). This study's data points are individual patients, not populations, so there is no ecological fallacy question — and no population-level measure.",
        },
      ],
      reasoning:
        "The question tests the two-doors rule: which group was sampled first, and which way does the arrow point? The investigator sampled on disease (COPD vs no COPD) and inquired backward (smoking history by records and interview) — disease door + backward arrow = case-control, and the yield of a look-back is the odds ratio. The stem's own language confirms it: “higher odds of a smoking history” is odds-of-prior-exposure phrasing, the printed case-control example verbatim. Option B fails on time direction (a snapshot measures the present, not prior exposure); option C fails on the door (exposure-first sampling and forward follow-up would be needed for RR); option D fails on the unit (populations, not patients). First Aid's own mnemonic seals it: “Control the case in the OR.”",
    },
  },
  mnemonics: [
    {
      code: "Control the case in the OR.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in red inside the Case-control row's MEASURES/EXAMPLE cell (carried verbatim, attributed): case-CONTROL studies compare diseased CASES to CONTROLS without disease and yield the ODDS RATIO — the OR doubles as the operating room.",
      memorizes:
        "The case-control design's sampling (case vs control) and its measure (odds ratio) in one sentence",
      whenToUse:
        "Any stem that samples on disease status and asks about prior exposure, and any measure question whose options include the odds ratio; the printed example is “Patients with COPD had higher odds of a smoking history than those without COPD.”",
      clinical:
        "Case-control designs dominate rare-disease and quick-turnaround research (KYP context): assemble the cases, find controls, ask about the past — the OR approximates the RR when the disease is rare (a quantifying-risk bridge, not printed here).",
    },
    {
      code: "Cohort = relative risk.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in red inside the Cohort row's MEASURES/EXAMPLE cell (carried verbatim, attributed): a cohort compares a group with a given exposure or risk factor to a group without such exposure, watches for later development of disease, and expresses the finding as RELATIVE RISK (with disease incidence as its denominator data).",
      memorizes:
        "The cohort design's measure — disease incidence and relative risk (RR)",
      whenToUse:
        "Any stem that samples on exposure and follows forward (or reviews records of exposure-forward comparison) — “Can be prospective or retrospective” — and any measure question pairing cohort with RR; the printed example is “People who smoke had a higher risk of developing COPD than people who do not.”",
      clinical:
        "Cohorts are the design of choice when the exposure is rare or the disease takes years to develop (KYP context): define exposed and unexposed arms, then count new disease in each — incidence first, RR second.",
    },
    {
      code: "FOUR Cs, THEN GENES, THEN POPULATIONS",
      meaning:
        "A KYP ORIGINAL — the seven-row architecture of the printed table in its printed order: FOUR Cs (Case series — describe; Cross-sectional — prevalence slice; Case-control — look back, OR; Cohort — march forward, RR), THEN GENES (Twin concordance — MZ vs DZ; Adoption — biological vs adoptive parents; both measure heritability, nature vs nurture), THEN POPULATIONS (Ecological — compare across populations, ecological fallacy).",
      memorizes:
        "All seven printed rows in order, grouped by what they compare: individuals described, individuals compared, sibling pairs and families, whole populations",
      whenToUse:
        "Any “which of the following study designs…” option list (recall the seven candidates before reading), and any question asking which designs measure heritability (the GENES pair) or which carries a fallacy (the POPULATIONS row)",
      clinical:
        "The grouping mirrors real research menus (KYP context): the four Cs cover clinical observation and individual epidemiology; the genetics pair prices disease inheritance (schizophrenia is the printed example); the ecological row monitors population health (polluted-city COPD is the printed example).",
    },
    {
      code: "ONE SLICE, TWO DIRECTIONS",
      meaning:
        "A KYP ORIGINAL — the timeline figure's grammar: from the PRESENT, an investigator can take ONE SLICE (cross-sectional — assess disease and risk-related factors now → prevalence) or send arrows in TWO DIRECTIONS: look BACK from disease (case-control → odds of prior exposure → OR) or march FORWARD from exposure (cohort → later disease → incidence, RR; retrospective cohorts run the same forward arrow on previous records).",
      memorizes:
        "The four timeline designs and how the direction of inquiry fixes each measure — the figure's Past–Present–Future axis in one sentence",
      whenToUse:
        "Any vignette describing a study's temporal structure; pair with the two FA mnemonics (look-back = “Control the case in the OR.”; forward = “Cohort = relative risk.”) to attach measures to directions",
      clinical:
        "The direction also predicts each design's practical niche (KYP context): snapshots are fast and cheap but cannot establish causality; look-backs suit rare diseases; forward marches cost time but measure incidence; record reviews recover forward marches without the wait.",
    },
  ],
  rapidReview: {
    s30: [
      "Case series — describes several individual patients with the same diagnosis, treatment, or outcome; no comparison group → cannot show risk factor association with disease",
      "Cross-sectional — frequency of disease and risk-related factors assessed in the present → disease prevalence; association, but does not establish causality",
      "Case-control — retrospectively compares disease vs no disease; odds of prior exposure → odds ratio (OR); “Control the case in the OR.”; COPD had higher odds of smoking history",
      "Cohort — exposure vs no exposure → later disease; prospective or retrospective → disease incidence, relative risk (RR); “Cohort = relative risk.”; smokers had higher risk of developing COPD",
      "Twin concordance — both MZ vs both DZ twins develop the same disease → heritability, “nature vs nurture”; MZ schizophrenia concordance ≫ DZ = strong genetic component",
      "Adoption — biological vs adoptive parents → heritability + environment; adopted child's schizophrenia risk follows the biological parent, regardless of adoptive parents' health",
      "Ecological — compares disease and risk-related factors across populations → monitor population health; ecological fallacy: population data not necessarily applicable to individuals; COPD prevalence higher in more polluted cities",
    ],
    m3: [
      "“Control the case in the OR.” — case-control → odds ratio (First Aid's own, printed in red)",
      "“Cohort = relative risk.” — cohort → incidence + RR (First Aid's own, printed in red)",
      "FOUR Cs, THEN GENES, THEN POPULATIONS — the seven rows in printed order (KYP)",
      "ONE SLICE, TWO DIRECTIONS — present slice = prevalence; look back = OR; march forward = RR (KYP)",
    ],
    m10: [
      "The timeline figure's printed compare-labels: Cross-sectional → “Compare disease prevalence”; Case-control → “Compare risk factor frequency” (at Past, arrows back from Diseased cases + Controls without disease); both cohort panels → “Compare disease incidence” (retrospective: “Review previous records”)",
      "Retrospective case-control ≠ retrospective cohort: the first looks back FROM disease (OR); the second reviews previous records of an exposure-forward comparison (incidence, RR) — “Can be prospective or retrospective” prints only in the Cohort row",
      "The two example threads: COPD through three designs (case-control odds of smoking history, cohort risk of developing COPD, ecological polluted-city prevalence) and schizophrenia through the two heritability designs (twin concordance, adoption)",
      "This page is the OBSERVATIONAL half of the chapter's design story — book 257 opens “Clinical therapeutic trial,” the experimental design where the investigator intervenes; observational designs never assign exposures (KYP framing)",
    ],
  },
  recall: [
    {
      q: "Which design describes several individual patients with the same diagnosis, treatment, or outcome — and what can it NOT show?",
      a: "Case series — description of clinical findings and symptoms; it has no comparison group, thus cannot show risk factor association with disease.",
    },
    {
      q: "Which design assesses frequency of disease and frequency of risk-related factors in the present, and what does it measure?",
      a: "Cross-sectional study — measures disease prevalence; it can show risk factor association with disease, but does not establish causality.",
    },
    {
      q: "A study retrospectively compares people with disease to people without disease, looking at odds of prior exposure. Name the design, the measure, and First Aid's printed mnemonic.",
      a: "Case-control study; odds ratio (OR); “Control the case in the OR.” — the printed example: patients with COPD had higher odds of a smoking history than those without COPD.",
    },
    {
      q: "A study compares a group with a given exposure or risk factor to a group without such exposure, looking for later development of disease. Name the design, both measures, and First Aid's printed mnemonic.",
      a: "Cohort study (can be prospective or retrospective); disease incidence and relative risk (RR); “Cohort = relative risk.” — the printed example: people who smoke had a higher risk of developing COPD than people who do not.",
    },
    {
      q: "Which design compares the frequency with which both monozygotic twins vs both dizygotic twins develop the same disease, and what does it measure?",
      a: "Twin concordance study — measures heritability and influence of environmental factors (“nature vs nurture”); the printed example: much higher MZ-than-DZ concordance in schizophrenia, showing a strong genetic component.",
    },
    {
      q: "Which design compares behavioral traits/genetics in siblings raised by biological vs adoptive parents, and what does the printed schizophrenia example show?",
      a: "Adoption study — measures heritability and influence of environmental factors; an adopted child has a higher risk of developing schizophrenia if their biological parent had schizophrenia, regardless of the adoptive parents’ health (the risk travels with the genes).",
    },
    {
      q: "Which design compares frequency of disease and risk-related factors across populations, what is it used for, and what is its printed caution?",
      a: "Ecological study — used to monitor population health; it measures population data not necessarily applicable to individuals (ecological fallacy). Printed example: COPD prevalence was higher in more polluted cities.",
    },
    {
      q: "On the printed timeline figure, what does each of the four study types compare, and where does each sit on the Past–Present–Future axis?",
      a: "Cross-sectional (at Present): two risk-factor boxes → “Compare disease prevalence.” Case-control (Diseased cases + Controls without disease at Present, arrows back to Past): “Compare risk factor frequency.” Retrospective cohort (risk-factor boxes at Past, forward to Present, “Review previous records”): “Compare disease incidence.” Prospective cohort (risk-factor boxes at Present, forward to Future): “Compare disease incidence.”",
    },
  ],
  related: [
    {
      title: "Clinical therapeutic trials — the experimental counterpart",
      note:
        "The very next page of the chapter (book 257) opens the Clinical therapeutic trial: the ONE design family where the investigator intervenes (randomized, controlled, double-blinded; crossover with washout; intention-to-treat) — everything on this page only observes. The exam loves the observational-vs-experimental boundary, and the two pages together draw it. (Produced in parallel in this same batch — referenced by design.)",
      topicId: "clinical-therapeutic-trials",
    },
    {
      title: "Quantifying risk — the arithmetic of OR and RR",
      note:
        "The measures this page names — odds ratio, relative risk — are computed from the 2×2 table on the quantifying-risk page: the case-control harvests the odds ratio, the cohort the relative risk (with attributable-risk relatives). Study design fixes WHICH formula applies; this page is the door to that one.",
      topicId: "quantifying-risk",
    },
    {
      title: "Bias and study errors — every design's characteristic failure",
      note:
        "Each design on this page carries its signature biases (KYP context for the pairings: recall bias in case-control, attrition in cohort, confounding in ecological) — the bias-and-study-errors page is the validity layer that sits on top of the design layer built here.",
      topicId: "bias-and-study-errors",
    },
    {
      title: "Incidence and prevalence — the measures the designs harvest",
      note:
        "Cross-sectional measures prevalence; cohort measures incidence — the incidence-prevalence page defines the two quantities (and their relationship, prevalence ≈ incidence × duration) that this page's designs are built to harvest. The COPD examples (prevalence in polluted cities; risk of developing COPD) are the same distinction wearing clinical clothes.",
      topicId: "incidence-prevalence",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — risk quantification",
      connection:
        "The odds ratio (case-control) and relative risk (cohort) named on this page are the formulas of the quantifying-risk material: OR = (odds of exposure in cases)/(odds in controls), RR = incidence in exposed/incidence in unexposed. Design choice decides which formula is legitimate — sampling on disease breaks the RR denominator, which is precisely why “Control the case in the OR.” exists.",
    },
    {
      subject: "Behavioral science and psychiatry — schizophrenia and behavioral genetics",
      connection:
        "The two heritability rows are behavioral genetics in action: twin concordance (MZ ≫ DZ concordance in schizophrenia → strong genetic component) and adoption studies (risk tracking the biological parent regardless of adoptive parents' health) are the evidence base behind every heritability claim in behavioral science and psychiatry.",
    },
    {
      subject: "Pathology — obstructive lung disease",
      connection:
        "COPD is the page's running example, and its two risk-factor scales map onto the two study units: smoking is the individual-level exposure (case-control odds, cohort risk), city pollution the population-level exposure (ecological prevalence) — the same disease demonstrating why the unit of analysis matters.",
    },
    {
      subject: "Research methods — bias, confounding, and study validity",
      connection:
        "Every design's limitation printed on this page (no comparison group, no causality from a snapshot, ecological fallacy) is the entry to the bias-and-confounding layer: selection and recall bias in case-control, attrition and loss-to-follow-up in cohort, confounding by population differences in ecological studies — validity questions assume the design is already identified.",
    },
  ],
};
