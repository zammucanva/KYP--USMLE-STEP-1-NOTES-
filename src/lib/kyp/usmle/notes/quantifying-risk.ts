import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 1, topic 4. Source: FULL pdf page 280 / book 258,
// Part 1 — the topic owns the WHOLE page (no shared split): the "Quantifying
// risk" page of EPIDEMIOLOGY AND BIOSTATISTICS. Blocks owned, in printed
// order: (1) the lead-in sentence "Definitions and formulas are based on the
// classic 2 × 2 or contingency table." with the classic 2×2 itself — columns
// "Disease or outcome" (⊕ over the disease column, ⊖ over the no-disease
// column), rows "Exposure or intervention" (⊕ beside the exposed row, ⊖
// beside the unexposed row), cells a (exposed + diseased), b (exposed + no
// disease), c (unexposed + diseased), d (unexposed + no disease); (2) the
// "Quantifying risk" table, columns TERm / DEFINITION / EXAmPLE / FORmULA,
// EIGHT rows in printed order: Odds ratio, Relative risk, Relative risk
// reduction, Attributable risk, Absolute risk reduction, Number needed to
// treat, Number needed to harm, Case fatality rate — all cells carried
// verbatim; (3) the two worked-example 2×2 grids printing inside the FORMULA
// column of the Odds ratio row (a b = 20 5 / c d = 10 20) and the Relative
// risk row (a b = 5 5 / c d = 1 9); (4) the three top-of-page margin formula
// labels — "Odds ratio = a/c ÷ b/d = ad/bc", "Relative risk = a/(a + b) ÷
// c/(c + d)", "Attributable risk = a/(a + b) − c/(c + d)" — stacked above the
// classic 2×2 in the page's top margin. CENSUS (pdfimages + VLM): ZERO raster
// images — the page is pure vector text and rules (VLM: "the only graphic
// elements are the two worked grids, the ⊕/⊖ symbols, and the footer rule").
// VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page pass +
// supplementary passes on the top-band and formula regions, staging-pubh4/
// vlm-census.txt): confirmed the 2×2 orientation (Disease or outcome =
// COLUMNS across the top, Exposure or intervention = ROW labels down the
// left, printing ROTATED/vertical in the book — carried horizontal here, a
// documented adaptation), the printed order of all eight rows, the two worked
// grids (OR grid a=20 b=5 / c=10 d=20; RR grid a=5 b=5 / c=1 d=9), the red
// furniture (the mnemonic sentence "You take a case to the OR." prints in red
// in the OR row's EXAMPLE cell, with "case" and "OR" in red; the "AR" of
// "NNH = 1/AR" prints in red), the teal header band, bold dark-blue TERM
// names, and the absence of photos, margin notes, and asterisk footnotes.
// PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II" header-space
// extraction artifact (known, as-is); (2) the subsection banner interleaves
// with the margin fraction in the text layer — "c/(c + d)AND BIOSTATISTICS"
// (the banner reads "PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS");
// (3) small-caps artifacts: the column headers print "TERm / DEFINITION /
// EXAmPLE / FORmULA" and the banner prints "EPIDEmIOLOGY" (lowercase m inside
// the caps) — carried as printed; (4) dash variance as printed: the RRR row
// uses en dashes ("RRR = 1 – RR", "(ARC – ART)") while the AR/ARR formulas
// use true minus signs ("a/(a + b) − c/(c + d)"), and the ARR example prints
// "8%–2% = 6% = 0.06"; (5) "don't" carries a right single quote (’); (6) each
// printed arrow (→, ↑, ↓) is preceded in the raw text layer by an invisible
// \x8e control byte (pdftotext artifact, stripped by the pipeline's norm());
// (7) the NNT and NNH rows print WITHOUT example cells (their EXAMPLE cells
// are empty in print — VLM confirmed) — carried as printed, with the KYP
// arithmetic continuations (1/0.06 ≈ 17; 1/0.20 = 5) marked as KYP context.
// ADJUDICATIONS, documented: (A) the batch brief anticipated TWO in-cell FA
// mnemonics; only ONE prints on pdf 280 — "You take a case to the OR." (red,
// OR row EXAMPLE cell). "Cohort = relative risk." does NOT print on this page
// (raw text layer + pdftotext -layout + the VLM pass all agree: "No
// cohort/relative-risk mnemonic anywhere on this page"); it prints on pdf 278
// / book 256 (the observational-studies page) and is carried here ATTRIBUTED
// to First Aid with its printed location cited, because this page's RR row
// depends on it ("Typically used in cohort studies"). (B) the three top-margin
// formula labels are present and complete in the text layer but are VISUALLY
// OBSCURED in the digital edition's render (the teal running-header band is
// drawn over the top two; the third prints white-on-white) — the VLM could
// not read them as a visual block; they are carried from the text layer,
// whose content is identical to the OR/RR/AR rows' FORMULA cells (which do
// render legibly). (C) the ARR formula prints as c/(c + d) − a/(a + b) —
// control risk MINUS treated risk — the reverse orientation of AR (a/(a + b)
// − c/(c + d), exposed minus unexposed); both are carried exactly as printed
// and the sign logic is taught in the note (each subtraction is oriented so
// the answer is positive when the question's direction holds). (D) stacked
// fractions are linearized in the note's table block (numerator ÷
// denominator, and numerator − denominator for differences), e.g. the text
// layer's stacked "a/c ad = b/d bc" is carried as "OR = a/c ÷ b/d = ad/bc";
// the raw stacked text-layer order is quoted verbatim in the manifest's
// sourceEvidence. PROVENANCE SPLIT: verbatim from the page — the lead-in
// sentence, the 2×2 axis labels and cell letters, all eight table rows with
// every printed word, the two worked grids, all formulas, the "Lower number =
// better treatment" / "Higher number = safer exposure" interpretations, and
// the OR=1/>1/<1 and RR=1/>1/<1 arrow readings; First Aid's OWN — the
// mnemonic "You take a case to the OR." (this page) and "Cohort = relative
// risk." (book 256), both carried ATTRIBUTED, plus FA's red highlighting,
// documented; KYP ORIGINAL — the registry visual (quantifying-risk-map), the
// RATIO · DIFFERENCE · RECIPROCAL decoder grammar, the AR-READS-DOWN /
// ARR-READS-UP sign rule, the four-move protocol, the exam layer (patterns,
// traps, pivots, miniCase), the bedside re-derivations (including the NNT
// continuation 1/0.06 ≈ 17 and the NNH continuation 1/0.20 = 5, both marked
// as KYP arithmetic extending the printed examples), and every generalization
// beyond the printed page, marked as such. DrugCards: none — the page prints
// no drug rows (nothing to fold; the DrugCard layer is simply not applicable
// to a biostatistics page).

export const quantifyingRisk: KypUsMLENote = {
  id: "quantifying-risk",
  title: "Quantifying Risk: The 2×2 Table and Its Measures",
  subtitle:
    "Every epidemiologic number on the USMLE is manufactured by one machine: the classic 2×2 or contingency table, with disease or outcome across the columns and exposure or intervention down the rows. Four cells — a (exposed and diseased), b (exposed, no disease), c (unexposed and diseased), d (unexposed, no disease) — generate every measure on this page. Read the table by ROWS and you get risks: the risk of disease among the exposed is a/(a+b), among the unexposed c/(c+d), and their ratio is the relative risk, their difference the attributable risk. Read the table by COLUMNS and you get odds — the odds of exposure among cases (a/c) and among controls (b/d) — whose ratio is the odds ratio, the only measure a case-control study can honestly compute, because case-control studies recruit by outcome and cannot know row risks. From a two-arm trial the same four cells cascade: RR = ART/ARC, then RRR = 1 − RR (the proportion of risk removed), then ARR = ARC − ART (the difference, in absolute risk), then NNT = 1/ARR (how many patients you treat to buy one benefit) — and the exposure side mirrors it with NNH = 1/AR. One page, eight measures, one grammar: a ratio tells you how many TIMES, a difference tells you how many PERCENTAGE POINTS, a reciprocal tells you how many PATIENTS per event — and the case fatality rate (deaths/cases) needs no exposure axis at all, just the diseased.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory: "Public Health Sciences — epidemiology and biostatistics",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 258–258 (Epidemiology and Biostatistics: Quantifying risk)",
  tags: [
    "quantifying risk",
    "2×2 table",
    "contingency table",
    "odds ratio",
    "relative risk",
    "relative risk reduction",
    "attributable risk",
    "attributable risk percent",
    "absolute risk reduction",
    "number needed to treat",
    "number needed to harm",
    "case fatality rate",
    "case-control studies",
    "cohort studies",
    "biostatistics",
    "epidemiology",
    "risk quantification",
    "ART",
    "ARC",
  ],
  core: {
    what:
      "One printed page, carried whole. The lead-in: “Definitions and formulas are based on the classic 2 × 2 or contingency table.” — columns “Disease or outcome” (⊕/⊖), rows “Exposure or intervention” (⊕/⊖), cells a, b, c, d. The “Quantifying risk” table — columns TERm / DEFINITION / EXAmPLE / FORmULA — EIGHT rows in printed order: (1) Odds ratio — case-control studies, odds of exposure among cases (a/c) vs controls (b/d), OR = 1 equal / >1 greater in cases / <1 greater in controls; worked example 20/30 lung-cancer patients vs 5/25 healthy individuals report smoking → OR = 8; formula OR = a/c ÷ b/d = ad/bc; red in-cell mnemonic “You take a case to the OR.” (2) Relative risk — cohort studies, risk in exposed ÷ risk in unexposed, RR = 1 none / >1 ↑ disease / <1 ↓ disease; 5/10 radiation-exposed vs 1/10 unexposed develop cancer → RR = 5; RR = a/(a + b) ÷ c/(c + d); “For rare diseases (low prevalence), OR approximates RR.” (3) Relative risk reduction — “The proportion of risk reduction attributable to the intervention/treatment (ART) as compared to a control (ARC)”; flu shot 2% vs unvaccinated 8% → RR = 2/8 = 0.25, RRR = 0.75; RRR = 1 – RR = (ARC – ART)/ARC. (4) Attributable risk — “The difference in risk between exposed and unexposed groups”; smokers 21% vs non-smokers 1% → AR = 20%; AR = a/(a + b) − c/(c + d); AR% = (RR − 1)/RR × 100. (5) Absolute risk reduction — “The difference in risk (not the proportion) attributable to the intervention as compared to a control”; placebo 8% vs flu vaccine 2% → ARR = 8%–2% = 6% = 0.06; ARR = c/(c + d) − a/(a + b). (6) Number needed to treat — “Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.”; NNT = 1/ARR. (7) Number needed to harm — “Number of patients who need to be exposed to a risk factor for 1 patient to be harmed. Higher number = safer exposure.”; NNH = 1/AR. (8) Case fatality rate — “Percentage of deaths occurring among those with disease.”; 4 deaths among 10 cases of meningitis → 40%; CFR% = deaths/cases × 100. Plus the two worked grids in the FORMULA margin (OR: a=20 b=5 / c=10 d=20; RR: a=5 b=5 / c=1 d=9) and the three top-margin formulas (Odds ratio =, Relative risk =, Attributable risk =).",
    why:
      "This page is the arithmetic engine of evidence-based medicine — every downstream page (diagnostic tests, clinical trials, survival curves, bias) presumes it. The 2×2 table matters because study DESIGN decides which measures are even computable: a case-control study samples by outcome (it picks cases and controls first), so the row denominators a+b and c+d are artifacts of sampling and the row RISKS are meaningless — only the column ODDS survive, which is why the odds ratio is “typically used in case-control studies.” A cohort study samples by exposure (it follows exposed and unexposed forward), so row risks are real and the relative risk is honest — “typically used in cohort studies.” The bridge between them is the rare-disease rule printed in the RR row: “For rare diseases (low prevalence), OR approximates RR,” because when disease is rare, a/(a+b) ≈ a/b and the odds ratio converges on the risk ratio. The treatment cascade matters because the same trial reports RR (impressive-sounding, relative), RRR (a proportion of the control's risk), and ARR (absolute, unimpressive, honest) — the exam's favorite manipulation is handing you the pieces of one flu-shot trial (2% vs 8%) and demanding every downstream number: RR 0.25, RRR 0.75, ARR 0.06, NNT ≈ 17. And NNT/NNH matter because they are what a clinician actually says to a patient: how many people like you must take this for one to benefit (lower is better) or be harmed (higher is safer). The case fatality rate closes the page as the measure that needs no exposure information at all — among those with the disease, what fraction die — the number that makes an outbreak headline.",
    keyIdea:
      "Read the design first, then read the table by its rows or its columns — the design decides the axis, the axis decides the measure, and the grammar of the answer (times, points, patients) picks the family. MOVE 1 — ORIENT THE TABLE: columns = disease or outcome (⊕ diseased, ⊖ not), rows = exposure or intervention (⊕ exposed/treated, ⊖ unexposed/control); a = exposed + diseased, b = exposed + well, c = unexposed + diseased, d = unexposed + well. If a vignette hands you a transposed table, flip it back before computing (a classic exam switch). MOVE 2 — CLASSIFY THE DESIGN: case-control (recruited by outcome) → odds of exposure, columns only → OR = a/c ÷ b/d = ad/bc; cohort or trial (followed forward from exposure) → risks by rows → RR = a/(a+b) ÷ c/(c+d); if the disease is rare, OR ≈ RR and either answers. MOVE 3 — PICK THE ANSWER'S GRAMMAR: “how many TIMES” → a RATIO (OR, RR — or its complement RRR = 1 − RR); “how many PERCENTAGE POINTS / per 100 / absolute” → a DIFFERENCE (AR = a/(a+b) − c/(c+d) for a harm; ARR = c/(c+d) − a/(a+b) for a benefit — each oriented to come out positive); “how many PATIENTS per one event” → a RECIPROCAL (NNT = 1/ARR, lower better; NNH = 1/AR, higher safer). MOVE 4 — COMPUTE WITH THE CELL ARITHMETIC AND CHECK THE DIRECTION: ad/bc cross-multiplies to the OR; the two row risks divide to the RR; the two arms subtract to AR/ARR; the reciprocal converts a risk difference into a head count; and deaths/cases × 100 is the CFR, the one measure that reads a single column. Eight measures, four cells, three grammars — one machine.",
  },
  mechanisms: [
    {
      id: "two-by-two-engine",
      title:
        "The 2×2 engine: how four cells manufacture every measure on the page",
      context:
        "The printed lead-in and the classic 2×2 (book 258): “Definitions and formulas are based on the classic 2 × 2 or contingency table.”",
      flow: {
        nodes: [
          {
            id: "grid",
            label: "THE CLASSIC 2 × 2 — disease down the columns, exposure across the rows",
            sublabel:
              "Input — the printed axes: COLUMNS “Disease or outcome” (⊕ disease, ⊖ no disease) × ROWS “Exposure or intervention” (⊕ exposed, ⊖ unexposed). Cell a = exposed + diseased · b = exposed + no disease · c = unexposed + diseased · d = unexposed + no disease. In print the row label runs vertically down the left side (VLM-confirmed); every formula on the page points into these four cells. The FORMULA column even prints two worked grids inside the OR and RR rows (a b = 20 5 / c d = 10 20 and a b = 5 5 / c d = 1 9) so the reader can watch the cells fill.",
            variant: "input",
          },
          {
            id: "rowrisk",
            label: "READ BY ROWS → RISKS: exposed risk a/(a+b), unexposed risk c/(c+d)",
            sublabel:
              "Process — the two row risks are the only probabilities on the page: risk of disease among the EXPOSED = a/(a + b); among the UNEXPOSED = c/(c + d). Cohort studies and clinical trials follow people forward from exposure, so their row denominators are real populations and these risks are honest — this is why RR = a/(a+b) ÷ c/(c+d) is “typically used in cohort studies.” Divide the two row risks → RR; subtract them → AR (or ARR, reversed).",
            variant: "process",
          },
          {
            id: "colodds",
            label: "READ BY COLUMNS → ODDS: among cases a/c, among controls b/d",
            sublabel:
              "Process — flip the reading direction: odds of EXPOSURE among the DISEASED (cases) = a/c; odds of exposure among the CONTROLS = b/d. Case-control studies recruit by outcome (cases vs controls), so the column groups are the sampled ones and column odds are the only honest quantities — this is why the odds ratio is “typically used in case-control studies” and why the printed mnemonic is “You take a case to the OR.” (First Aid's own, red, this page).",
            variant: "process",
          },
          {
            id: "ratio",
            label: "DIVIDE → the ratio family: OR and RR",
            sublabel:
              "Process — OR = a/c ÷ b/d, which cross-cancels to ad/bc (the cross-product of the diagonal: a·d over b·c — the shortcut that needs no denominators at all). RR = a/(a+b) ÷ c/(c+d). Both read as “how many TIMES”: printed interpretations — OR = 1 odds equal, >1 greater in cases, <1 greater in controls; RR = 1 no association, >1 exposure associated with ↑ disease occurrence, <1 with ↓ disease occurrence. Bridge: “For rare diseases (low prevalence), OR approximates RR” — when few people are diseased, a+b ≈ b and c+d ≈ d, so the risk ratio collapses toward the odds ratio.",
            variant: "process",
          },
          {
            id: "difference",
            label: "SUBTRACT → the difference family: AR and ARR",
            sublabel:
              "Process — the same two risks, subtracted instead of divided, answer “how many percentage points”: Attributable risk = a/(a+b) − c/(c+d) (exposed minus unexposed — the risk the exposure itself adds; printed example 21% − 1% = 20%); Absolute risk reduction = c/(c+d) − a/(a+b) (control minus treated — printed in the table exactly in this reversed orientation; example 8% − 2% = 6% = 0.06). Each subtraction is oriented so the answer comes out positive for its own question: harm attributed downward onto the exposed, benefit measured upward from the treated (the AR-READS-DOWN / ARR-READS-UP rule, a KYP original).",
            variant: "process",
          },
          {
            id: "output",
            label: "EVERY MEASURE, ONE MACHINE — plus the reciprocals and the lone column",
            sublabel:
              "Output — the eight printed formulas, each a route through the same four cells: OR = a/c ÷ b/d = ad/bc · RR = a/(a+b) ÷ c/(c+d) · RRR = 1 − RR = (ARC − ART)/ARC · AR = a/(a+b) − c/(c+d) (with AR% = (RR − 1)/RR × 100) · ARR = c/(c+d) − a/(a+b) · NNT = 1/ARR · NNH = 1/AR · CFR% = deaths/cases × 100. The reciprocals convert a risk difference into a patient count, and the CFR reads the diseased column alone (deaths among cases — no exposure axis needed). Four cells in, eight measures out: the contingency table is the periodic table of biostatistics.",
            variant: "output",
          },
        ],
        edges: [
          { from: "grid", to: "rowrisk", label: "read horizontally (cohort/trial direction)" },
          { from: "grid", to: "colodds", label: "read vertically (case-control direction)" },
          { from: "rowrisk", to: "ratio", label: "divide the two row risks → RR" },
          { from: "colodds", to: "ratio", label: "divide the two column odds → OR (ad/bc)" },
          { from: "rowrisk", to: "difference", label: "subtract the two row risks → AR / ARR" },
          { from: "ratio", to: "output", label: "times-language answers" },
          { from: "difference", to: "output", label: "points-language answers → reciprocals (NNT, NNH)" },
        ],
      },
    },
    {
      id: "trial-to-bedside-cascade",
      title:
        "From trial to bedside: how one two-arm study cascades into RR → RRR → ARR → NNT (and the harm mirror)",
      context:
        "The printed RRR, ARR, NNT, and NNH rows (book 258) — the flu-shot trial (2% vs 8%) and the smoking example (21% vs 1%)",
      flow: {
        nodes: [
          {
            id: "arms",
            label: "A TWO-ARM STUDY — ART vs ARC (the intervention arm and the control arm)",
            sublabel:
              "Input — the printed vocabulary: ART = the risk in the intervention/treatment arm, ARC = the risk in the control arm (the RRR row's own abbreviations: “attributable to the intervention/treatment (ART) as compared to a control (ARC)”). Printed instance: 2% of flu-shot recipients develop the flu (ART = 2%), 8% of unvaccinated patients do (ARC = 8%). In 2×2 terms the treated row supplies a/(a+b) = ART and the control row supplies c/(c+d) = ARC — the same two row risks the engine mechanism built.",
            variant: "input",
          },
          {
            id: "rr",
            label: "STEP 1 — RR = ART/ARC = 2/8 = 0.25 (the ratio)",
            sublabel:
              "Process — divide the arms: the treated arm carries a quarter of the control arm's risk (RR = 0.25, i.e. <1 → “exposure [here: vaccination] associated with ↓ disease occurrence”). This is the number a journal abstract leads with — relative, impressive, and blind to baseline risk (KYP context).",
            variant: "process",
          },
          {
            id: "rrr",
            label: "STEP 2 — RRR = 1 – RR = 0.75 (the proportion of risk removed)",
            sublabel:
              "Process — the printed formula in both forms: RRR = 1 – RR and RRR = (ARC – ART)/ARC — here (8 − 2)/8 = 6/8 = 0.75. The RRR is a PROPORTION (the printed ARR row explicitly contrasts itself: “The difference in risk (not the proportion)...”) — 75% of the control arm's risk was removed by vaccination. Same information as RR, complementary packaging — the exam loves swapping 0.25 and 0.75 between the two labels.",
            variant: "process",
          },
          {
            id: "arr",
            label: "STEP 3 — ARR = ARC − ART = 8% – 2% = 6% = 0.06 (the absolute difference)",
            sublabel:
              "Process — subtract the arms: the printed example computes it in one breath — “ARR = 8%–2% = 6% = 0.06.” The printed 2×2 formula orients the subtraction control-minus-treated (c/(c+d) − a/(a+b)), the mirror image of attributable risk's exposed-minus-unexposed — each difference is set up to be positive when its question holds (benefit: control worse than treated; harm: exposed worse than unexposed). ARR is the honest number: six percentage points of absolute flu risk, regardless of how common flu was to begin with.",
            variant: "process",
          },
          {
            id: "nnt",
            label: "STEP 4 — NNT = 1/ARR ≈ 17 (the patient count)",
            sublabel:
              "Output — invert the absolute difference into a head count: NNT = 1/ARR = 1/0.06 ≈ 16.7 → treat 17 patients to prevent one case of flu (KYP arithmetic continuing the printed example — the NNT row itself prints no example, only “Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.”). This is the number a clinician says out loud in shared decision-making — and the exam's favorite final step, because it forces you to have computed ARR correctly first.",
            variant: "output",
          },
          {
            id: "mirror",
            label: "THE HARM MIRROR AND THE LONE COLUMN — AR → AR% → NNH; CFR reads the diseased only",
            sublabel:
              "Output — flip the direction of attribution and the cascade mirrors into harm: Attributable risk = exposed − unexposed = 21% − 1% = 20% (the smoking example), AR% = (RR − 1)/RR × 100 = 20/21 ≈ 95% of smokers' lung-cancer risk attributable to smoking (KYP arithmetic), and NNH = 1/AR = 1/0.20 = 5 — “Number of patients who need to be exposed to a risk factor for 1 patient to be harmed. Higher number = safer exposure.” (KYP arithmetic continuing the example; the NNH row prints no example). And one measure steps outside the exposure axis entirely: Case fatality rate = deaths/cases × 100 — among the diseased column only, 4 deaths among 10 meningitis cases = 40% — severity of disease, not strength of exposure.",
            variant: "output",
          },
        ],
        edges: [
          { from: "arms", to: "rr", label: "divide: ART ÷ ARC" },
          { from: "rr", to: "rrr", label: "complement: 1 − RR" },
          { from: "arms", to: "arr", label: "subtract: ARC − ART" },
          { from: "arr", to: "nnt", label: "reciprocal: 1/ARR" },
          { from: "arms", to: "mirror", label: "reverse the attribution → AR, AR%, NNH" },
          { from: "rrr", to: "nnt", label: "same trial, three grammars: proportion → points → patients" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "quantifying-risk-map",
      title:
        "The 2×2 engine map: the classic contingency table at the center with its eight measures as spokes (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 258's whole page: the classic 2×2 as the centerpiece — columns Disease or outcome (⊕/⊖), rows Exposure or intervention (⊕/⊖), cells a, b, c, d, with the row risks a/(a+b) and c/(c+d) and the column odds a/c and b/d annotated at the axes — surrounded by the eight measure spokes, each carrying its printed formula, its printed worked example, and its printed interpretation: Odds ratio (case-control, OR = a/c ÷ b/d = ad/bc, the 20/5/10/20 worked grid, OR=1/>1/<1 readings, FA's red “You take a case to the OR.”), Relative risk (cohort, RR = a/(a+b) ÷ c/(c+d), the 5/5/1/9 worked grid, RR=1/>1/<1 readings, rare-disease OR≈RR), Relative risk reduction (RRR = 1 – RR = (ARC – ART)/ARC, flu shot 0.75), Attributable risk (AR = a/(a+b) − c/(c+d), 21% − 1% = 20%, AR% = (RR − 1)/RR × 100), Absolute risk reduction (ARR = c/(c+d) − a/(a+b), 8%–2% = 6% = 0.06), Number needed to treat (NNT = 1/ARR, lower = better), Number needed to harm (NNH = 1/AR, higher = safer), and Case fatality rate (CFR% = deaths/cases × 100, 4/10 = 40%) — closed by the RATIO · DIFFERENCE · RECIPROCAL grammar strip and the two attributed First Aid mnemonics.",
      notice:
        "Census (pdfimages + VLM at 120dpi): ZERO raster images on pdf 280 — the page is pure vector text and rules; the only graphic elements in print are the two worked grids, the ⊕/⊖ symbols on the 2×2, and the table rules. The hub-and-spokes layout, the grammar strip, and the axis annotations are an ORIGINAL KYP ADAPTATION — every term, definition, example, formula, and mnemonic is preserved from the print, but the artwork and organization are KYP's; the full table is additionally carried verbatim in the note's table block. In print the row label “Exposure or intervention” runs vertically (rotated) — carried horizontally here. First Aid's red mnemonic “You take a case to the OR.” is carried ATTRIBUTED; “Cohort = relative risk.” is First Aid's own from the study-designs page (book 256), attributed with its location, not this page's print.",
    },
    {
      kind: "table",
      title:
        "Book 258 — the printed Quantifying risk table, carried verbatim (all eight rows, PRINTED row order, every printed word)",
      intro:
        "The page's single table: 4 columns (TERm / DEFINITION / EXAmPLE / FORmULA — the small-caps 'm' artifacts carried as printed) and 8 data rows in printed order. Two printing notes, documented: the NNT and NNH rows print with EMPTY example cells (nothing between their definitions and formulas — VLM-confirmed), carried here as “(no example printed)”; and the stacked fraction formulas are linearized (numerator ÷ denominator, or numerator − denominator) with the raw stacked text-layer order quoted in the manifest. The interpretation lines print inside the DEFINITION cells in the book, with → arrows (each arrow carries an invisible \x8e byte in the raw text layer — a pdftotext artifact, stripped by the pipeline); the RR row's ↑/↓ arrows are carried as printed.",
      columns: ["TERm", "DEFINITION", "EXAmPLE", "FORmULA"],
      rows: [
        [
          "Odds ratio",
          "Typically used in case-control studies. Represents the odds of exposure among cases (a/c) vs odds of exposure among controls (b/d). OR = 1 → odds of exposure are equal in cases and controls. OR > 1 → odds of exposure are greater in cases. OR < 1 → odds of exposure are greater in controls.",
          "If in a case-control study, 20/30 patients with lung cancer and 5/25 healthy individuals report smoking, the OR is 8; so the patients with lung cancer are 8 times more likely to have a history of smoking. You take a case to the OR.",
          "OR = a/c ÷ b/d = ad/bc (with the worked grid: a b = 20 5 / c d = 10 20)",
        ],
        [
          "Relative risk",
          "Typically used in cohort studies. Risk of developing disease in the exposed group divided by risk in the unexposed group. RR = 1 → no association between exposure and disease. RR > 1 → exposure associated with ↑ disease occurrence. RR < 1 → exposure associated with ↓ disease occurrence.",
          "If 5/10 people exposed to radiation are diagnosed with cancer, and 1/10 people not exposed to radiation are diagnosed with cancer, the RR is 5; so people exposed to radiation have a 5 times greater risk of developing cancer. For rare diseases (low prevalence), OR approximates RR.",
          "RR = a/(a + b) ÷ c/(c + d) (with the worked grid: a b = 5 5 / c d = 1 9)",
        ],
        [
          "Relative risk reduction",
          "The proportion of risk reduction attributable to the intervention/treatment (ART) as compared to a control (ARC).",
          "If 2% of patients who receive a flu shot develop the flu, while 8% of unvaccinated patients develop the flu, then RR = 2/8 = 0.25, and RRR = 0.75.",
          "RRR = 1 – RR = (ARC – ART)/ARC",
        ],
        [
          "Attributable risk",
          "The difference in risk between exposed and unexposed groups.",
          "If risk of lung cancer in people who smoke is 21% and risk in people who don’t smoke is 1%, then the attributable risk is 20%.",
          "AR = a/(a + b) − c/(c + d); AR% = (RR − 1)/RR × 100",
        ],
        [
          "Absolute risk reduction",
          "The difference in risk (not the proportion) attributable to the intervention as compared to a control.",
          "If 8% of people who receive a placebo vaccine develop the flu vs 2% of people who receive a flu vaccine, then ARR = 8%–2% = 6% = 0.06.",
          "ARR = c/(c + d) − a/(a + b)",
        ],
        [
          "Number needed to treat",
          "Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.",
          "(no example printed)",
          "NNT = 1/ARR",
        ],
        [
          "Number needed to harm",
          "Number of patients who need to be exposed to a risk factor for 1 patient to be harmed. Higher number = safer exposure.",
          "(no example printed)",
          "NNH = 1/AR",
        ],
        [
          "Case fatality rate",
          "Percentage of deaths occurring among those with disease.",
          "If 4 patients die among 10 cases of meningitis, case fatality rate is 40%.",
          "CFR% = deaths/cases × 100",
        ],
      ],
      caption:
        "Verbatim carry, documented. (1) The interpretation lines (OR = 1 → / OR > 1 → / OR < 1 →, RR = 1 → / RR > 1 → / RR < 1 →) print inside the DEFINITION cells in the book — kept there, as printed. (2) The mnemonic “You take a case to the OR.” prints in RED as the last line of the Odds ratio EXAMPLE cell (First Aid's own, carried attributed; VLM: “case” and “OR” in red). (3) The dash characters are as printed: the RRR row uses en dashes (“RRR = 1 – RR”, “(ARC – ART)”, “8%–2%”) while the AR/ARR formulas use true minus signs (−). (4) The two worked grids (20 5 / 10 20 and 5 5 / 1 9) print inside the FORMULA cells of the OR and RR rows, reproduced here in linear form; in print each grid shows the cell letters a b / c d with the numbers beneath them. (5) The page also prints the three formulas in its top margin — “Odds ratio = a/c ÷ b/d = ad/bc”, “Relative risk = a/(a + b) ÷ c/(c + d)”, “Attributable risk = a/(a + b) − c/(c + d)” — stacked above the classic 2×2; in the digital edition's render these are obscured by the running-header band (carried from the text layer, adjudication B in the note header).",
    },
    {
      kind: "list",
      title:
        "The 2×2 decoder — what each cell, row, and column IS (and which measure reads it)",
      intro:
        "Before any formula, learn the geometry: the printed lead-in says every definition and formula on the page is “based on the classic 2 × 2 or contingency table,” so the fastest skill on exam day is pointing at any cell, row, or column and naming what it is and who reads it.",
      items: [
        {
          lead: "THE AXES — disease down, exposure across (do not let the exam transpose you)",
          text: "COLUMNS = “Disease or outcome”: the ⊕ column is disease present (cases), the ⊖ column is disease absent. ROWS = “Exposure or intervention”: the ⊕ row is exposed (or treated), the ⊖ row is unexposed (or control). In the book the row label prints vertically along the left edge of the 2×2 (VLM-confirmed) — a hint at how central orientation is: FA's own chapter opener warns to “look out for questions that switch the rows and columns” (KYP context, from the chapter introduction). MOVE ZERO on every question: confirm which axis is which before touching a formula.",
        },
        {
          lead: "THE FOUR CELLS — a, b, c, d and their identities",
          text: "a = EXPOSED + DISEASED (the smoking lung-cancer patients: 20 in the worked grid) · b = EXPOSED + WELL (the smoking healthy controls: 5) · c = UNEXPOSED + DISEASED (the non-smoking lung-cancer patients: 10) · d = UNEXPOSED + WELL (the non-smoking controls: 20). The worked grid printed in the OR row's formula margin fills exactly these four cells: a b = 20 5 over c d = 10 20; the RR row's grid fills a b = 5 5 over c d = 1 9 (radiation example: 5 of 10 exposed develop cancer, 1 of 10 unexposed). Memorize the grid, not the letters: every formula is a route through it.",
        },
        {
          lead: "READ BY ROWS — the risks (the cohort/trial direction)",
          text: "Risk in the exposed = a/(a + b); risk in the unexposed = c/(c + d). These are the only two probabilities on the page, and they are only HONEST when the study followed people forward from exposure (cohort) or randomized them (trial) — the row denominators are then real populations. RR divides them; AR subtracts them (exposed − unexposed); ARR subtracts them the other way (control − treated); AR% rescales AR by the exposed risk via RR.",
        },
        {
          lead: "READ BY COLUMNS — the odds (the case-control direction)",
          text: "Odds of exposure among CASES = a/c; odds of exposure among CONTROLS = b/d. A case-control study hand-picks its cases and controls, so the rows are sampling artifacts and the row risks are uncomputable — only these column odds survive. OR = (a/c) ÷ (b/d), which algebraically equals ad/bc (multiply straight across the diagonal: a·d over b·c) — the cross-product formula that needs no denominators and is the exam's favorite one-step computation. First Aid's own mnemonic for the pairing: “You take a case to the OR.” (red, printed in the OR row's example cell).",
        },
        {
          lead: "THE ONE-CELL MEASURE — case fatality rate reads a single column",
          text: "CFR% = deaths/cases × 100 — deaths among those WITH the disease, divided by the cases. No exposure axis, no second arm, no controls: it is a property of the disease (severity/virulence among the diseased), not of an exposure. The printed example: 4 patients die among 10 cases of meningitis → 40%. The exam pairs CFR with incidence/prevalence and outbreak arithmetic (KYP context: the mortality-rate and attack-rate rows continue this table on the next page).",
        },
        {
          lead: "THE ⊕/⊖ FURNITURE — the printed plus/minus signs on the 2×2",
          text: "The printed 2×2 carries ⊕ over the disease column and ⊖ over the no-disease column, and ⊕ beside the exposed row and ⊖ beside the unexposed row (VLM-read) — the book's own way of saying “cell a is ⊕⊕ (both positives): exposed AND diseased,” b is ⊕⊖, c is ⊖⊕, d is ⊖⊖. First Aid's own furniture, carried attributed; a fast orientation check when a question hands you a reversed grid.",
        },
      ],
    },
    {
      kind: "steps",
      title: "From vignette to measure in four moves (the KYP protocol)",
      intro:
        "Every quantifying-risk question on the exam is the same machine with different stickers: orient the table, classify the design, pick the answer's grammar, compute and check direction. The protocol applies to all eight printed measures.",
      steps: [
        {
          label: "MOVE 1 — ORIENT THE 2×2 (disease = columns, exposure = rows)",
          detail:
            "Build or read the grid: columns Disease or outcome (⊕ disease, ⊖ no disease), rows Exposure or intervention (⊕ exposed/treated, ⊖ unexposed/control); fill a (exposed + diseased), b (exposed + well), c (unexposed + diseased), d (unexposed + well). If the stem hands you a table with disease on the rows — the classic switch — transpose it back before computing anything. Write the two row risks (a/(a+b), c/(c+d)) and the two column odds (a/c, b/d) next to the grid: every formula on the page is one of these four quantities, or a combination.",
        },
        {
          label: "MOVE 2 — CLASSIFY THE DESIGN (it decides which measures are legal)",
          detail:
            "Case-control (recruited by outcome: “cases vs controls,” often retrospective) → only the odds ratio is computable: OR = a/c ÷ b/d = ad/bc (“You take a case to the OR.”). Cohort or clinical trial (followed forward / randomized by exposure) → relative risk and everything downstream: RR = a/(a+b) ÷ c/(c+d). Rare disease → the printed bridge: “For rare diseases (low prevalence), OR approximates RR” — a case-control OR may be reported as if it were an RR. If the stem gives ART and ARC directly (a two-arm trial), you can skip the cells entirely.",
        },
        {
          label: "MOVE 3 — MATCH THE ANSWER'S GRAMMAR TO THE MEASURE FAMILY",
          detail:
            "“How many TIMES more likely / the strength of the association” → RATIO: OR, RR (or its complement RRR = 1 − RR for “by what proportion did treatment reduce risk”). “How many percentage points / absolute risk / excess cases per 100 (or per 1000)” → DIFFERENCE: AR = a/(a+b) − c/(c+d) for a harmful exposure, ARR = c/(c+d) − a/(a+b) for a beneficial treatment. “How many patients must be treated/harmed for ONE event” → RECIPROCAL: NNT = 1/ARR, NNH = 1/AR. “What fraction of the diseased died” → CFR% = deaths/cases × 100. The question's units are the answer's family.",
        },
        {
          label: "MOVE 4 — COMPUTE, THEN CHECK THE DIRECTION AGAINST THE PRINTED READINGS",
          detail:
            "Compute with the cross-product shortcut (OR = ad/bc) or the two arm risks, then sanity-check against the printed interpretation lines: OR/RR = 1 → no association; > 1 → greater in cases / ↑ disease occurrence; < 1 → greater in controls / ↓ disease occurrence. For differences, confirm the orientation came out positive (AR: exposed worse than unexposed; ARR: control worse than treated — if negative, the “exposure” protected). For reciprocals, confirm the direction language: “Lower number = better treatment” (NNT), “Higher number = safer exposure” (NNH). Worked endpoints to memorize: 20/5/10/20 → OR 8 · 5/5/1/9 → RR 5 · 2% vs 8% → RR 0.25, RRR 0.75, ARR 0.06, NNT ≈ 17 (KYP arithmetic) · 21% vs 1% → AR 20% · 4/10 → CFR 40%.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Odds ratio vs relative risk — the case-control odds against the cohort risk",
      intro:
        "The page's first two rows are the exam's most-tested distinction: two “how many times” measures that agree only when disease is rare. The design of the study — not preference — decides which one you may compute.",
      columns: [
        "Odds ratio — the case-control measure",
        "Relative risk — the cohort/trial measure",
      ],
      rows: [
        {
          label: "The printed formula",
          a: "OR = a/c ÷ b/d = ad/bc — odds of exposure among cases ÷ odds of exposure among controls; the cross-product form needs no denominators",
          b: "RR = a/(a + b) ÷ c/(c + d) — risk of disease in the exposed ÷ risk in the unexposed",
        },
        {
          label: "Which design, and why",
          a: "“Typically used in case-control studies” — cases and controls are recruited by outcome, so the row denominators (a+b, c+d) are set by the investigator's sampling and the row RISKS are meaningless; only the column odds are honest",
          b: "“Typically used in cohort studies” — exposed and unexposed are followed forward, so a/(a+b) and c/(c+d) are true incidence proportions and their ratio is a true risk ratio",
        },
        {
          label: "The printed worked example",
          a: "20/30 patients with lung cancer and 5/25 healthy individuals report smoking → grid a=20, b=5, c=10, d=20 → OR = (20/10) ÷ (5/20) = 2 ÷ 0.25 = 8 (ad/bc = 400/50 = 8) — lung-cancer patients are 8 times more likely to have a smoking history",
          b: "5/10 people exposed to radiation vs 1/10 unexposed are diagnosed with cancer → grid a=5, b=5, c=1, d=9 → RR = (5/10) ÷ (1/10) = 5 — the exposed have a 5 times greater risk",
        },
        {
          label: "How it reads (=1, >1, <1)",
          a: "OR = 1 → odds of exposure equal in cases and controls · OR > 1 → greater in cases · OR < 1 → greater in controls",
          b: "RR = 1 → no association between exposure and disease · RR > 1 → exposure associated with ↑ disease occurrence · RR < 1 → exposure associated with ↓ disease occurrence (a vaccine lands here)",
        },
        {
          label: "The bridge between them",
          a: "When the disease is RARE, a+b ≈ b and c+d ≈ d, so the risk ratio's denominators vanish and RR ≈ OR — the printed rule “For rare diseases (low prevalence), OR approximates RR” is why case-control ORs get quoted as risk statements for rare cancers",
          b: "The approximation is one-directional: for COMMON outcomes (hospital-acquired infection, treatment success) the OR overstates the RR — the further the outcome from rare, the wider the wedge (KYP context, a classic exam subtlety)",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Attributable risk vs absolute risk reduction — one subtraction, two sign conventions",
      intro:
        "AR and ARR are both absolute risk differences between the two arms — the printed formulas even use the same two fractions in reverse order. The direction of subtraction is the whole difference: each is oriented so it comes out positive when its own question holds.",
      columns: [
        "Attributable risk — the harm question",
        "Absolute risk reduction — the benefit question",
      ],
      rows: [
        {
          label: "The printed formula (note the order)",
          a: "AR = a/(a + b) − c/(c + d) — the EXPOSED row minus the UNEXPOSED row (reads DOWN the table): the risk the exposure adds on top of baseline",
          b: "ARR = c/(c + d) − a/(a + b) — the CONTROL row minus the TREATED row (reads UP the table): the risk the treatment takes away. The page prints it in exactly this reversed orientation (adjudication C)",
        },
        {
          label: "The printed definition",
          a: "“The difference in risk between exposed and unexposed groups.”",
          b: "“The difference in risk (not the proportion) attributable to the intervention as compared to a control.” — the parenthetical separates ARR from RRR, which IS a proportion",
        },
        {
          label: "The printed worked example",
          a: "Lung-cancer risk 21% in people who smoke vs 1% in people who don't → attributable risk = 20% — twenty percentage points of lung-cancer risk are attributable to smoking",
          b: "8% of placebo-vaccine recipients develop the flu vs 2% of flu-vaccine recipients → ARR = 8%–2% = 6% = 0.06 — six percentage points of flu risk removed by vaccination",
        },
        {
          label: "Its reciprocal (the patient count)",
          a: "NNH = 1/AR — “Number of patients who need to be exposed to a risk factor for 1 patient to be harmed. Higher number = safer exposure.” (no example printed; KYP continuation: 1/0.20 = 5 smokers per attributable lung cancer)",
          b: "NNT = 1/ARR — “Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.” (no example printed; KYP continuation: 1/0.06 ≈ 17 vaccinations per flu case prevented)",
        },
        {
          label: "The relative-form companion",
          a: "AR% = (RR − 1)/RR × 100 — the fraction of the EXPOSED group's risk that is attributable to the exposure (KYP arithmetic for the printed example: RR = 21, so (21−1)/21 ≈ 95% of a smoker's lung-cancer risk is attributable to smoking)",
          b: "RRR = 1 – RR = (ARC – ART)/ARC — the fraction of the CONTROL group's risk that the treatment removes (printed example: RR = 0.25 → RRR = 0.75)",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — one trial, every number; one design, one legal measure",
      body:
        "The page tests in three shapes. SHAPE 1 — THE FULL CASCADE: a two-arm trial (the flu shot's 2% vs 8% is the template) and a question at any level of the waterfall — RR = 2/8 = 0.25; RRR = 1 − RR = 0.75; ARR = 8% − 2% = 6% = 0.06; NNT = 1/0.06 ≈ 17 (KYP arithmetic). The distractors are the OTHER levels' answers: 0.25, 0.75, 0.06, and 17 are all in the options, so read whether the stem asks “how many times” (RR), “by what proportion” (RRR), “how many percentage points” (ARR), or “how many patients” (NNT). SHAPE 2 — THE DESIGN ROUTER: “case-control study of … which measure quantifies the association?” → odds ratio (compute ad/bc from the grid; First Aid's mnemonic does the routing: “You take a case to the OR.”); “cohort study / 5-year follow-up / randomized trial” → relative risk — and the rare-disease bridge invites the swap (“OR approximates RR for rare diseases”). SHAPE 3 — THE ORIENTATION TRAP: a filled 2×2 with exposure on the COLUMNS (transposed from the printed convention), or a question that requires you to build the grid yourself from raw counts (“of 100 patients, 30 smoked; 10 of the smokers developed…”). Move zero: re-orient to disease-on-columns, exposure-on-rows, label a/b/c/d, then compute. Also in play: CFR from an outbreak vignette (4 of 10 meningitis cases die = 40%), AR/AR% from a smoking-and-cancer stem (21% vs 1% → AR 20%, AR% ≈ 95%), and the direction rules as stand-alones (“which is the safer exposure?” → the higher NNH; “which is the better treatment?” → the lower NNT).",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own hooks on this page — and the one from the facing study-designs page",
      body:
        "First Aid prints exactly ONE mnemonic on pdf 280, in red, as the last line of the Odds ratio EXAMPLE cell: “You take a case to the OR.” — a CASE (case-control study) goes to the OR (odds ratio): the design-to-measure router for the page's first row, with “case” and “OR” printed in red (VLM-read; carried attributed). Its companion router — “Cohort = relative risk.” — does NOT print on this page (adjudication A: raw text layer + layout + VLM all agree); it prints on the study-designs page two pages earlier (pdf 278 / book 256), and it is First Aid's own mnemonic carried here ATTRIBUTED with that location, because this page's RR row is the one it unlocks (“Typically used in cohort studies”). The page's other printed memory furniture: the ⊕/⊖ signs on the 2×2 (a is ⊕⊕, b is ⊕⊖, c is ⊖⊕, d is ⊖⊖) and the two worked grids in the formula margin (20 5 / 10 20 for OR; 5 5 / 1 9 for RR) — First Aid teaching by example, carried attributed. The ALL-CAPS codes in this note's Memory section (RATIO · DIFFERENCE · RECIPROCAL and AR READS DOWN, ARR READS UP) are KYP originals, marked as such.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's worked examples, re-derived at the bedside (every number from the print, arithmetic shown)",
      intro:
        "First Aid teaches this page through five mini-vignettes printed inside the EXAMPLE cells. Re-deriving each one is the fastest way to own the formulas — the grids, percentages, and counts below are the printed ones; the NNT and NNH continuations are KYP arithmetic (those two rows print no examples) and are marked.",
      items: [
        {
          lead: "THE SMOKING CASE-CONTROL (Odds ratio = 8)",
          text: "Cases: 20 of 30 lung-cancer patients report smoking (a = 20 smokers with cancer, c = 10 non-smokers with cancer). Controls: 5 of 25 healthy individuals report smoking (b = 5, d = 20). Odds of exposure among cases a/c = 20/10 = 2; among controls b/d = 5/20 = 0.25; OR = 2 ÷ 0.25 = 8 (cross-product check: ad/bc = (20×20)/(5×10) = 8). Read-out, as printed: the patients with lung cancer are 8 times more likely to have a history of smoking. “You take a case to the OR.”",
        },
        {
          lead: "THE RADIATION COHORT (Relative risk = 5)",
          text: "Exposed: 5 of 10 radiation-exposed people develop cancer (a = 5, b = 5; risk 5/10). Unexposed: 1 of 10 unexposed develop cancer (c = 1, d = 9; risk 1/10). RR = (5/10) ÷ (1/10) = 5 — a five-times greater risk of cancer in the exposed. The printed grid is exactly a b = 5 5 over c d = 1 9. And because cancer is rare in either arm's population, a case-control OR for the same question would approximate this RR (the printed rare-disease rule).",
        },
        {
          lead: "THE FLU-SHOT CASCADE (RR 0.25 → RRR 0.75 → ARR 0.06 → NNT ≈ 17)",
          text: "ART = 2% (flu-shot recipients who develop flu); ARC = 8% (unvaccinated). RR = 2/8 = 0.25 (vaccination associated with ↓ disease occurrence). RRR = 1 − 0.25 = 0.75 — vaccination removes 75% of the control risk (check: (ARC − ART)/ARC = 6/8 = 0.75). ARR = 8% − 2% = 6% = 0.06 — six absolute percentage points. NNT = 1/ARR = 1/0.06 ≈ 16.7 → vaccinate 17 patients to prevent one case of flu (KYP arithmetic — the NNT row prints no example; NNT is always rounded UP to the next whole patient).",
        },
        {
          lead: "THE SMOKING EXCESS (Attributable risk = 20%; AR% ≈ 95%)",
          text: "Lung-cancer risk 21% in smokers, 1% in non-smokers: AR = 21% − 1% = 20% — twenty percentage points of risk are attributable to smoking (the excess the exposure adds to baseline). In relative form, AR% = (RR − 1)/RR × 100 with RR = 21/1 = 21 → 20/21 ≈ 95% of a smoker's lung-cancer risk is attributable to smoking (KYP arithmetic for the percentage). NNH = 1/AR = 1/0.20 = 5 — about 5 smokers per one attributable lung cancer (KYP arithmetic; the NNH row prints no example; higher = safer).",
        },
        {
          lead: "THE MENINGITIS OUTCOME (Case fatality rate = 40%)",
          text: "4 patients die among 10 cases of meningitis: CFR% = deaths/cases × 100 = 4/10 × 100 = 40%. No exposure arm, no controls — the CFR reads the diseased column alone and measures how lethal the disease is among those who have it. It is the number that scales an outbreak into a headline (KYP context: the mortality-rate and attack-rate rows that close this table print on the next page).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A case-control study enrolls 50 patients with bladder cancer and 50 matched controls; 32 of the cases and 10 of the controls report chronic occupational dye exposure. The question asks for the measure of association and its value.",
        discriminator:
          "The design router: recruited by outcome (cases vs controls) → odds ratio — and the one-step cross-product OR = ad/bc (“You take a case to the OR.”, First Aid's printed mnemonic)",
        concept: "Case-control studies quantified by the odds ratio (OR = a/c ÷ b/d = ad/bc)",
        answer:
          "Odds ratio = ad/bc. Grid: a = 32 (exposed cases), b = 18 (unexposed cases), c = 10 (exposed controls), d = 40 (unexposed controls) → OR = (32×40)/(18×10) = 1280/180 ≈ 7.1 — dye exposure is ~7 times more likely among the cases. The printed worked example is the same machine: 20/30 vs 5/25 → OR = 8.",
      },
      {
        stem: "A cohort follows 200 smelter workers and 200 office workers for 10 years; 24 of the exposed and 4 of the unexposed develop a rare occupational lung disease. The question asks what the incidence data show.",
        discriminator:
          "A forward-followed (cohort) design with row risks available → relative risk = a/(a+b) ÷ c/(c+d); the disease's rarity is a hint that a case-control OR would approximate the same answer",
        concept: "Cohort studies quantified by the relative risk (RR = a/(a+b) ÷ c/(c+d))",
        answer:
          "RR = (24/200) ÷ (4/200) = 0.12 ÷ 0.02 = 6 — the exposed have six times the risk (the printed template: 5/10 vs 1/10 → RR = 5). “Cohort = relative risk.” (First Aid's mnemonic, printed on book 256). Because the disease is rare, an odds ratio from a nested case-control would approximate this RR — the printed bridge.",
      },
      {
        stem: "A randomized trial of a new influenza vaccine reports: 2% of vaccinated participants and 8% of placebo recipients develop influenza over one season. The question asks how many patients must be vaccinated to prevent one case.",
        discriminator:
          "“How many patients … for one” = the reciprocal grammar → NNT = 1/ARR; the distractors are the cascade's other outputs (RR 0.25, RRR 0.75, ARR 0.06)",
        concept: "The treatment cascade: RR → RRR → ARR → NNT = 1/ARR",
        answer:
          "ARR = 8% − 2% = 6% = 0.06; NNT = 1/0.06 ≈ 16.7 → 17 patients (rounded up — you cannot vaccinate a fraction of a patient). This is the printed flu-shot example continued one step beyond the page (the NNT row itself prints only “Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.”).",
      },
      {
        stem: "During an outbreak of bacterial meningitis in a college dormitory, 10 students are confirmed cases and 4 of them die despite treatment. The health department asks for the measure of disease severity among the infected.",
        discriminator:
          "Deaths among those with the disease, no exposure comparison → case fatality rate = deaths/cases × 100 (the one printed measure that reads a single column)",
        concept: "Case fatality rate (CFR% = deaths/cases × 100)",
        answer:
          "CFR = 4/10 × 100 = 40% — the printed example verbatim. The CFR is a property of the disease among the diseased (severity/lethality), distinct from mortality rates that use the whole population as denominator (KYP context — those rows print on the next page).",
      },
    ],
    traps: [
      {
        a: "Odds ratio — the case-control measure (OR = ad/bc)",
        b: "Relative risk — the cohort/trial measure (RR = a/(a+b) ÷ c/(c+d))",
        whyConfused:
          "Both are “how many times” ratios with identical interpretation lines (=1 none, >1 ↑, <1 ↓), and for rare diseases they are numerically the same — the printed row “For rare diseases (low prevalence), OR approximates RR” invites the blur",
        keyDifference:
          "The DESIGN decides: case-control recruited by outcome → row risks are sampling artifacts → only the OR is legal; cohort/trial followed forward from exposure → row risks are real → the RR is the honest ratio. For common outcomes the OR overstates the RR (KYP context)",
        clue:
          "Read how the subjects were assembled: “cases and controls were selected” → OR; “a cohort was followed” / “randomized to” → RR. First Aid's printed routers: “You take a case to the OR.” and “Cohort = relative risk.” (the latter from book 256)",
      },
      {
        a: "RR = 0.25 (the ratio of the flu-shot arms)",
        b: "RRR = 0.75 (its complement)",
        whyConfused:
          "One trial produces both numbers in one subtraction — RR = ART/ARC = 2/8 = 0.25 and RRR = 1 – RR = 0.75 — and both are quoted as “the vaccine's effect”",
        keyDifference:
          "RR is the treated arm's risk RELATIVE to control (a quarter remains); RRR is the PROPORTION of risk removed (three-quarters gone). The printed ARR row even flags the family boundary: “The difference in risk (not the proportion)…” — RRR is the proportion, ARR the difference",
        clue:
          "“What fraction/percent of the risk was REMOVED” → RRR = 1 − RR; “what fraction of the control's risk REMAINS” → RR. If the options contain 0.25 and 0.75 together, the stem is testing exactly this complement",
      },
      {
        a: "Attributable risk = a/(a+b) − c/(c+d) (exposed − unexposed: 21% − 1% = 20%)",
        b: "Absolute risk reduction = c/(c+d) − a/(a+b) (control − treated: 8% − 2% = 6%)",
        whyConfused:
          "The same two fractions, subtracted in opposite orders — the printed table even prints the two formulas with reversed orientations, and both are “absolute risk differences”",
        keyDifference:
          "Direction of attribution: AR quantifies a HARM (how much risk the exposure adds to the exposed, read DOWN the table); ARR quantifies a BENEFIT (how much risk the treatment removes from the treated, read UP the table). Each is oriented to come out positive when its question holds — the KYP rule AR READS DOWN, ARR READS UP",
        clue:
          "Smoking/carcinogen/exposure stem → AR (and AR% = (RR−1)/RR × 100). Vaccine/drug/treatment stem → ARR (and NNT = 1/ARR). The subject of the sentence — exposure or intervention — picks the sign",
      },
      {
        a: "NNT = 1/ARR — “Lower number = better treatment.”",
        b: "NNH = 1/AR — “Higher number = safer exposure.”",
        whyConfused:
          "Both are reciprocals of a risk difference and both are “how many patients for one event”; the exam swaps the directions and the denominators",
        keyDifference:
          "NNT inverts the BENEFIT difference (ARR) and small is good; NNH inverts the HARM difference (AR) and large is good. Inverting the wrong difference (1/AR for a treatment question) produces a plausible-looking wrong number — the classic reciprocal trap",
        clue:
          "Benefit language (“treated … to benefit”) → 1/ARR; harm language (“exposed … to be harmed”) → 1/AR. Then check the direction sentence against the stem's claim about which treatment/exposure is preferable",
      },
    ],
    pivots: [
      {
        lookAlike: "A filled 2×2 with exposure on the columns and disease on the rows",
        differentiator:
          "The printed convention is disease = columns, exposure = rows; a transposed grid silently swaps a with b and c with d",
        correctPath:
          "Move zero — transpose to the printed orientation before computing: relabel so a = exposed + diseased, b = exposed + well, c = unexposed + diseased, d = unexposed + well, then apply OR = ad/bc or RR = a/(a+b) ÷ c/(c+d) (FA's chapter opener itself warns about questions that “switch the rows and columns” — KYP context from the chapter introduction)",
      },
      {
        lookAlike: "A question whose options are 8, 5, 0.75, 0.06, and 17 — all numbers from one study",
        differentiator:
          "The grammar of the question stem: times / proportion / percentage points / patient count",
        correctPath:
          "“Times more likely” → OR or RR · “proportion (percent) of risk reduced” → RRR = 1 − RR · “absolute difference / percentage points / excess per 100” → AR or ARR · “patients per one benefit/harm” → NNT = 1/ARR or NNH = 1/AR. Match the units before matching the arithmetic",
      },
      {
        lookAlike: "A case-control study of a common outcome asking for “the risk ratio”",
        differentiator:
          "Case-control rows are sampled, so risk ratios are uncomputable — only the OR; and the OR approximates RR only when the disease is RARE",
        correctPath:
          "Answer with the odds ratio (ad/bc) and cite the printed bridge in the correct direction: “For rare diseases (low prevalence), OR approximates RR” — for common outcomes the OR is NOT the RR and overstates it (KYP context). If the stem insists on a risk ratio, the study must be a cohort/trial",
      },
    ],
    miniCase: {
      vignette:
        "A nursing home runs a two-season influenza vaccine campaign. Of 300 residents who receive the vaccine, 6 develop influenza (2%); of 300 residents who decline it, 24 develop influenza (8%). The medical director presents the numbers at the family council meeting, and a resident's daughter asks the practical question: “How many of us need to get the shot for one person to be spared the flu?”",
      question:
        "How many residents must be vaccinated to prevent one case of influenza?",
      options: [
        {
          label: "A",
          text: "0.06",
          why:
            "TEMPTING but wrong — 0.06 is the ARR (8% − 2% = 6% = 0.06), the absolute risk difference itself. It is a proportion of risk, not a count of patients; it answers “how much risk did vaccination remove,” not “how many residents per one prevented case.” This distractor is the cascade's step 3 masquerading as step 4.",
        },
        {
          label: "B",
          text: "6",
          why:
            "TEMPTING but wrong — 6 is the same ARR wearing its percentage-point costume (six percentage points of risk). It is also temptingly close to the trial's raw arithmetic (24 − 6 = 18 cases among 300… or 6 vaccinated residents who caught flu), but “percentage points of risk” and “patients treated per benefit” are different units. Only the reciprocal of the ARR converts points into patients.",
        },
        {
          label: "C",
          text: "17",
          correct: true,
          why:
            "CORRECT — NNT = 1/ARR. ARR = ARC − ART = 8% − 2% = 6% = 0.06 (the printed formula ARR = c/(c + d) − a/(a + b), control row minus treated row); NNT = 1/0.06 ≈ 16.7, rounded UP to 17 whole residents — you cannot vaccinate 0.7 of a person. The printed NNT row: “Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.” (The final division is KYP arithmetic continuing the page's own flu-shot example — the printed NNT row carries no example of its own.)",
        },
        {
          label: "D",
          text: "0.75",
          why:
            "TEMPTING but wrong — 0.75 is the RRR: RR = ART/ARC = 2/8 = 0.25, so RRR = 1 − RR = 0.75 (check: (ARC − ART)/ARC = 6/8 = 0.75). It answers “what proportion of the control group's flu risk did vaccination remove” — the relative, impressive-sounding number — not how many residents must be treated. The exam pairs 0.25, 0.75, 0.06, and 17 in one option list precisely to test whether you know which level of the cascade the question lives on.",
        },
      ],
      reasoning:
        "The question's grammar — “how many residents … for one person to be spared” — is a patient count, which means the reciprocal family: NNT = 1/ARR. Build the cascade in order: ART = 2% (vaccinated arm), ARC = 8% (unvaccinated arm); RR = 2/8 = 0.25 (vaccination associated with ↓ disease occurrence); RRR = 1 − 0.25 = 0.75 (75% of the control risk removed); ARR = 8% − 2% = 6% = 0.06 (the absolute difference — the printed example computes exactly this); NNT = 1/0.06 ≈ 16.7 → 17. Option A stops at the ARR (a risk, not a count); option B mistakes percentage points for patients; option D climbs to the RRR (a proportion, relative to the control's risk). Only C completes the reciprocal — and the direction check confirms it: “Lower number = better treatment,” and 17 is a comfortably good NNT for a seasonal vaccine (KYP context).",
    },
  },
  mnemonics: [
    {
      code: "You take a case to the OR.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed IN RED as the last line of the Odds ratio EXAMPLE cell on this page (book 258, with “case” and “OR” in red — VLM-read, carried attributed, verbatim): a CASE (a case-control study, recruited by outcome) goes to the OR (is quantified by the odds ratio, OR = a/c ÷ b/d = ad/bc). The router: case-control design → odds ratio.",
      memorizes:
        "Which measure a case-control study produces — the OR row of the printed table (definition, worked example 20/30 vs 5/25 → OR 8, and formula ad/bc)",
      whenToUse:
        "Any stem that assembles subjects as cases and controls (often retrospective, often “with/without the disease were asked about past exposure”) and asks for the association measure or its value",
      clinical:
        "Case-control architecture is forced whenever the disease is rare or slow (lung cancer and smoking — the printed example — or a rare drug reaction): you cannot wait for a cohort, so you take a case to the OR.",
    },
    {
      code: "Cohort = relative risk.",
      meaning:
        "FIRST AID'S OWN mnemonic — NOT printed on this page (adjudication A: the text layer, pdftotext -layout, and the VLM pass all confirm no cohort mnemonic prints on pdf 280); it prints on the study-designs page two pages earlier (pdf 278 / book 256) and is carried here ATTRIBUTED with that location because it unlocks this page's RR row: a cohort study (followed forward from exposure, real row risks) is quantified by the relative risk, RR = a/(a+b) ÷ c/(c+d).",
      memorizes:
        "Which measure a cohort study (or randomized trial) produces — the RR row of this page's table (“Typically used in cohort studies”), with the radiation example 5/10 vs 1/10 → RR 5",
      whenToUse:
        "Any stem that follows exposed and unexposed groups forward (or randomizes to treatment vs control) and asks for the association measure — and any option pair that swaps OR and RR for the same grid",
      clinical:
        "Cohorts and trials are the only designs with honest row risks, so they are the only source of the downstream cascade (RR → RRR → ARR → NNT) — the numbers that reach a guideline or a prescription.",
    },
    {
      code: "RATIO · DIFFERENCE · RECIPROCAL — the three verbs of the 2×2",
      meaning:
        "A KYP ORIGINAL decoder for the whole page: DIVIDE the arms → a RATIO that answers “how many TIMES” (OR = a/c ÷ b/d; RR = a/(a+b) ÷ c/(c+d); plus the ratio's own complement, RRR = 1 − RR) · SUBTRACT the arms → a DIFFERENCE that answers “how many PERCENTAGE POINTS” (AR = a/(a+b) − c/(c+d); ARR = c/(c+d) − a/(a+b)) · INVERT a difference → a RECIPROCAL that answers “how many PATIENTS per event” (NNT = 1/ARR; NNH = 1/AR). Standing apart: CFR% = deaths/cases × 100 reads the diseased column alone — severity, not association.",
      memorizes:
        "The eight printed measures sorted by the question they answer, so an option list (8, 5, 0.75, 0.06, 17) maps to its family instantly",
      whenToUse:
        "Any question whose stem's units decide the family — “times more likely” (ratio), “percent of risk removed” (RRR), “absolute difference / percentage points / excess cases per 100” (AR/ARR), “number of patients per one benefit/harm” (NNT/NNH), “fraction of the diseased who died” (CFR)",
      clinical:
        "The grammar is the bedside translation: a ratio is how a journal states an effect, a difference is how an epidemiologist states it, and a reciprocal is how a clinician states it to a patient (“about 17 of us need the shot for one to be spared”).",
    },
    {
      code: "AR READS DOWN, ARR READS UP",
      meaning:
        "A KYP ORIGINAL sign rule for the two difference formulas, exactly as printed: Attributable risk = a/(a+b) − c/(c+d) — the EXPOSED (top) row minus the UNEXPOSED (bottom) row: the subtraction reads DOWN the table, quantifying the harm the exposure adds (21% − 1% = 20%). Absolute risk reduction = c/(c+d) − a/(a+b) — the CONTROL (bottom) row minus the TREATED (top) row: the subtraction reads UP the table, quantifying the benefit the treatment delivers (8% − 2% = 6%). Each is oriented so it comes out POSITIVE when its own question holds.",
      memorizes:
        "The subtraction order of AR vs ARR (the printed formulas are mirror images using the same two fractions) — and which stem earns which difference",
      whenToUse:
        "Any computation of AR or ARR from a grid or from two arm risks — write the subtraction in the question's direction (harm: exposed − unexposed; benefit: control − treated) before subtracting, and expect a negative answer to mean the “exposure” protected or the “treatment” harmed",
      clinical:
        "The rule keeps the sign honest in print-outs: a smoking-exposure table subtracts down to +20% attributable risk; a vaccine trial subtracts up to +6% absolute risk reduction; and the reciprocals (NNH = 1/AR, NNT = 1/ARR) inherit the same orientation.",
    },
  ],
  rapidReview: {
    s30: [
      "The classic 2×2: columns = Disease or outcome, rows = Exposure or intervention; a = exposed + diseased, b = exposed + well, c = unexposed + diseased, d = unexposed + well — “Definitions and formulas are based on the classic 2 × 2 or contingency table.”",
      "Odds ratio (case-control): OR = a/c ÷ b/d = ad/bc; OR = 1 equal, >1 greater in cases, <1 greater in controls; 20/30 lung-cancer vs 5/25 healthy smokers → OR = 8; “You take a case to the OR.” (FA, printed in red)",
      "Relative risk (cohort): RR = a/(a + b) ÷ c/(c + d); RR = 1 no association, >1 ↑ disease, <1 ↓ disease; 5/10 radiation-exposed vs 1/10 unexposed → RR = 5; “For rare diseases (low prevalence), OR approximates RR.”",
      "RRR = 1 – RR = (ARC – ART)/ARC (flu shot: RR = 2/8 = 0.25 → RRR = 0.75) · AR = a/(a + b) − c/(c + d) (smokers 21% − 1% = 20%; AR% = (RR − 1)/RR × 100) · ARR = c/(c + d) − a/(a + b) (placebo 8% − vaccine 2% = 6% = 0.06)",
      "NNT = 1/ARR, “Lower number = better treatment.” · NNH = 1/AR, “Higher number = safer exposure.” (neither row prints an example) · CFR% = deaths/cases × 100 (4 deaths among 10 meningitis cases = 40%)",
    ],
    m3: [
      "You take a case to the OR. (FA's own, this page) — case-control → odds ratio; Cohort = relative risk. (FA's own, book 256)",
      "RATIO · DIFFERENCE · RECIPROCAL — times (OR, RR, RRR) · percentage points (AR, ARR) · patients per event (NNT, NNH)",
      "AR READS DOWN (exposed − unexposed, the harm difference), ARR READS UP (control − treated, the benefit difference)",
      "The two worked grids: OR grid a b = 20 5 / c d = 10 20 → ad/bc = 8; RR grid a b = 5 5 / c d = 1 9 → (5/10)/(1/10) = 5",
    ],
    m10: [
      "Why the design decides the measure: case-control rows are sampling artifacts (row risks uncomputable → column odds only); cohort/trial rows are real populations (row risks honest → RR and everything downstream)",
      "The flu-shot cascade in one breath: ART 2% vs ARC 8% → RR 0.25 → RRR 0.75 → ARR 0.06 → NNT ≈ 17 (the last division is KYP arithmetic — the NNT row prints no example)",
      "The rare-disease bridge is one-directional: OR → RR is safe when prevalence is low; for common outcomes the OR overstates the RR (KYP context)",
      "ARR's printed formula is the reverse of AR's (c/(c+d) − a/(a+b) vs a/(a+b) − c/(c+d)) — both come from the same two row risks, oriented to be positive for benefit and harm respectively; NNT and NNH are their reciprocals",
      "CFR needs no exposure axis: deaths/cases among the diseased only — severity of disease, not strength of association (the mortality- and attack-rate rows that complete this table print on the next page)",
    ],
  },
  recall: [
    {
      q: "Which two axes define the classic 2×2 table on this page, and what is in each cell?",
      a: "Columns = “Disease or outcome” (⊕ disease, ⊖ no disease); rows = “Exposure or intervention” (⊕ exposed, ⊖ unexposed). a = exposed + diseased, b = exposed + no disease, c = unexposed + diseased, d = unexposed + no disease.",
    },
    {
      q: "Give the odds ratio formula and its three interpretation lines, as printed.",
      a: "OR = a/c ÷ b/d = ad/bc. OR = 1 → odds of exposure are equal in cases and controls; OR > 1 → odds of exposure are greater in cases; OR < 1 → odds of exposure are greater in controls.",
    },
    {
      q: "Work the printed case-control example: what is the OR, and what does the worked grid look like?",
      a: "20/30 lung-cancer patients and 5/25 healthy individuals report smoking → OR = 8 (lung-cancer patients are 8 times more likely to have a smoking history). Grid: a b = 20 5 over c d = 10 20; check ad/bc = (20×20)/(5×10) = 8.",
    },
    {
      q: "Work the printed cohort example: what is the RR, and what does its worked grid look like?",
      a: "5/10 radiation-exposed vs 1/10 unexposed develop cancer → RR = 5. Grid: a b = 5 5 over c d = 1 9; RR = (5/10) ÷ (1/10) = 5.",
    },
    {
      q: "When does the odds ratio approximate the relative risk, per the printed rule?",
      a: "“For rare diseases (low prevalence), OR approximates RR” — when few are diseased, a+b ≈ b and c+d ≈ d, so the risk ratio's denominators collapse toward the odds ratio.",
    },
    {
      q: "From the flu-shot example (2% vaccinated vs 8% unvaccinated), compute RR, RRR, and ARR.",
      a: "RR = 2/8 = 0.25; RRR = 1 – RR = 0.75 (equivalently (ARC − ART)/ARC = 6/8); ARR = 8% – 2% = 6% = 0.06.",
    },
    {
      q: "Give the printed formulas for attributable risk, AR%, and absolute risk reduction — noting the subtraction orders.",
      a: "AR = a/(a + b) − c/(c + d) (exposed − unexposed); AR% = (RR − 1)/RR × 100; ARR = c/(c + d) − a/(a + b) (control − treated — the reverse orientation, as printed).",
    },
    {
      q: "What are NNT and NNH, their formulas, and their direction rules as printed?",
      a: "NNT = 1/ARR — “Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.” NNH = 1/AR — “Number of patients who need to be exposed to a risk factor for 1 patient to be harmed. Higher number = safer exposure.” (Neither row prints a worked example.)",
    },
    {
      q: "Define the case fatality rate and work its printed example.",
      a: "CFR% = deaths/cases × 100 — “Percentage of deaths occurring among those with disease.” If 4 patients die among 10 cases of meningitis, the case fatality rate is 40%.",
    },
  ],
  related: [
    {
      title: "Likelihood ratios: pretest to posttest odds",
      note:
        "The odds machinery this page installs is the same machinery the likelihood ratios run on: LR+ and LR− convert pretest ODDS to posttest odds by multiplication, exactly as the OR multiplies exposure odds. Master a/c ÷ b/d here and the LR section is the same verb with different nouns (sensitivity and specificity instead of exposure).",
      topicId: "likelihood-ratios",
    },
    {
      title: "Sensitivity, specificity, and predictive values",
      note:
        "The diagnostic-test 2×2 is the contingency table wearing a lab coat: disease status on one axis, test result on the other, with TP/FP/FN/TN in the a/b/c/d positions. Sensitivity = a/(a+c) and PPV = a/(a+b) are the same row-and-column risk arithmetic as RR — and FA warns that the same “switched rows and columns” trap applies to both tables.",
      topicId: "diagnostic-test-performance",
    },
    {
      title: "Observational study designs",
      note:
        "The designs that decide this page's measures live here: case-control (→ OR, sampled by outcome), cohort (→ RR, followed forward), cross-sectional, and the ecologic designs — plus First Aid's own design routers “You take a case to the OR.” (this page) and “Cohort = relative risk.” (that page, book 256). The two pages are one lesson split across a page turn.",
      topicId: "observational-studies",
    },
    {
      title: "Incidence vs prevalence",
      note:
        "The row risks a/(a+b) and c/(c+d) are incidence proportions — new disease among the exposed and unexposed — and the rare-disease rule (“OR approximates RR” when prevalence is low) is an incidence/prevalence statement in disguise. This page's cascade is how incidence differences become the ARR and NNT of a public-health recommendation.",
      topicId: "incidence-prevalence",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics — evaluation of diagnostic tests",
      connection:
        "Sensitivity, specificity, PPV, and NPV are computed from a 2×2 whose cells are TP/FP/FN/TN in the a/b/c/d positions — the same contingency-table geometry, with the test result replacing exposure. The transposed-grid trap FA warns about for risk measures is the same trap it warns about for sensitivity vs PPV.",
    },
    {
      subject: "Pharmacology — clinical therapeutic trials",
      connection:
        "ART and ARC — the two arm risks this page's RRR/ARR/NNT rows are built on — come straight from the randomized controlled trial designs (phases I–IV, randomization, blinding) taught with the drug-development pipeline; NNT is the standard currency of a trial's clinical bottom line.",
    },
    {
      subject: "Pathology — carcinogenesis and neoplasia",
      connection:
        "Three of the page's five worked examples are cancer epidemiology: smoking and lung cancer (OR = 8; AR = 20%), radiation and cancer (RR = 5) — the quantitative shadow of the carcinogen list (chemical carcinogens, radiation injury) taught in pathology.",
    },
    {
      subject: "Infectious disease — vaccines and meningitis",
      connection:
        "The flu-shot cascade (RR 0.25 → RRR 0.75 → ARR 0.06 → NNT ≈ 17) is vaccine-efficacy arithmetic, and the case fatality rate example is bacterial meningitis (4 of 10 = 40%) — the measures that make outbreak reports and vaccine recommendations readable.",
    },
  ],
};
