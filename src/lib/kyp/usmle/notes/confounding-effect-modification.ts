import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 3 / task pubh12. Source: FULL pdf page 286 /
// book 264 (Part 1), a WHOLE-PAGE topic in the EPIDEMIOLOGY AND BIOSTATISTICS
// subsection — the page AFTER "Bias and study errors" (pdf 285 / book 263,
// produced in a parallel batch) and BEFORE "Statistical distribution"
// (pdf 287 / book 265). The topic owns the WHOLE page, which carries TWO
// blocks: (1) THE "CONFOUNDING VS EFFECT MODIFICATION" TABLE — columns
// TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, exactly TWO rows
// in printed order: Confounding (factor related to both exposure and outcome
// (not on a causal pathway) distorts the effect on the outcome; "No
// association after stratification"; the coffee/lung-cancer example with
// smoking the true cause; reduction via Crossover studies (subject serves as
// self-control), Matching (patients with similar characteristics in both
// treatment and control groups), Analytic techniques (eg, regression analysis
// when confounding variables are known and were measured)) and Effect
// modification (exposure leads to different outcomes in subgroups stratified
// by factor; "True association exists"; the OCP/DVT example — very strong
// association among smokers, no such association in people who do not smoke;
// handled by Stratified analysis (eg, after testing for interaction between
// OCP and smoking, analyze risk among smokers and nonsmokers)); every cell
// carried verbatim in the note's table block. (2) THE TWO CRUDE-VS-
// STRATIFIED DIAGRAM GROUPS (pure vector line art) plus their SHARED ARROW
// LEGEND: group 1 "Confounding" — Crude analysis row [Drinking coffee] →
// [Lung cancer], Stratified analysis rows [Smokers][Drinking coffee] →
// [Lung cancer] and [Nonsmokers][Drinking coffee] → [Lung cancer], with the
// note "Note: Association disappeared after stratiﬁcation."; group 2
// "Effect modification" — Crude [OCP use] → [DVT], Stratified
// [Smokers][OCP use] → [DVT] and [Nonsmokers][OCP use] → [DVT], with the
// note "Note: Association was strong in one subgroup with weak/no
// association in the other subgroup."; then the three-entry legend
// "Strong association" / "Significant association" / "Weak/no association".
// CENSUS (pdfimages): ZERO raster images on the page — table + two pure
// vector diagram groups + the indd footer slug; the table is an ORIGINAL KYP
// ADAPTATION, the diagram groups + legend an ORIGINAL_KYP_REDRAW (the
// registry visual re-arranges the two stacked groups as two parallel
// vertical lanes, each ending in its verdict strip — the layout is KYP's,
// every printed label is preserved). VLM AVAILABLE this session (glm-4.6v:
// ONE full-page 120dpi pass + ONE 300dpi zoom pass + ONE targeted 300dpi
// confirmation pass, plus an objective PIXEL census of the 300dpi bitmap —
// all recorded in staging-pubh12/vlm-census.txt), confirming: exactly TWO
// table rows (none missing or extra) with blue bold row labels and dotted
// hairlines, NO red text and NO margin mnemonics anywhere on the page; the
// diagram groups' geometry — gray rounded title boxes, tan/orange exposure
// boxes, light-blue outcome boxes, light-gray stratum boxes, bold horizontal
// "Crude analysis" / "Stratified analysis" labels at the LEFT above their
// row blocks (not vertical side labels), dark-gray right-pointing arrows;
// and the CRITICAL layout fact: the three association labels print ONCE as a
// STANDALONE LEGEND below group 2's note (sample arrow + label per entry, NO
// leader lines to any diagram arrow), decoding the arrow grammar used in
// BOTH groups — thick solid = "Strong association", thin solid =
// "Significant association", thin dashed = "Weak/no association" (pixel
// census: thick ≈2.2pt solid, thin ≈1.0pt solid, dashed ≈13px dashes with
// ≈13px gaps). PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II"
// header-space extraction artifact (known, carried as-is); (2) small-caps
// extraction artifacts — "EPIDEmIOLOGY AND BIOSTATISTICS" in the running
// banner (which prints ONCE on this page — running header only, no in-body
// ribbon, unlike the subsection opener pdf 278) and the column header
// "EXAmPLES" (the print uses small caps; the text layer drops the 'm' to
// lowercase — carried as extracted); (3) the ﬁ LIGATURE (U+FB01) prints in
// the DIAGRAM groups' text objects only — "Stratiﬁed analysis" (both
// groups), "stratiﬁcation" (group 1's note), "Effect modiﬁcation" (group 2's
// title), "Signiﬁcant association" (the legend) — while the TABLE cells
// print plain "fi" ("stratification", "Stratified analysis", "significant");
// carried verbatim both ways and documented; (4) reading-order interleaving
// INSIDE the figure text — in EACH group the "Stratified analysis" label
// object extracts AFTER the stratum rows (raw lines 84 and 106) even though
// it prints between the crude row and the first stratified row, and the
// three legend labels extract after group 2's note (raw lines 109–111); the
// diagram text extracts entirely AFTER the table in the raw layer, with the
// indd footer slug after the legend; (5) a small ▶ icon in a rounded box
// near the right margin at the legend's level (FA's multimedia marker;
// vector furniture, no text-layer content — documented, not a topic label).
// ADJUDICATIONS (documented in the manifest too): (A) the task brief
// described "Strong association"/"Weak/no association" as subgroup
// annotations inside the effect-modification diagram — the PRINT prints them
// ONCE, below group 2's note, as a standalone legend decoding the shared
// arrow grammar (VLM ×3 + pixel census all agree), and BOTH diagram groups
// use the identical three-style grammar (crude = thin solid "Significant
// association" style; Smokers row = thick solid "Strong association" style;
// Nonsmokers row = dashed "Weak/no association" style) — brief corrected to
// print; (B) the confounding group's stratified rows therefore PRINT the
// strong/dashed arrow pattern even though that group's own note and the
// table's DEFINITION cell say the association disappears
// ("No association after stratification" / "Note: Association disappeared
// after stratiﬁcation.") — the printed NOTE governs the teaching verdict:
// the KYP redraw draws the print's arrow grammar exactly and gives each lane
// its own printed note as the verdict strip, and the apparent tension (a
// strong-looking arrow inside the confounding group's smokers stratum) is
// documented rather than resolved; (C) the task brief anticipated the
// diagram labels "extracting interleaved with the table" — in the raw layer
// the diagrams extract entirely AFTER the table (lines 66–111); the
// interleaving is INSIDE the figure block (the "Stratified analysis" labels
// and the legend extracting out of visual order), as documented above.
// PROVENANCE SPLIT: verbatim = the two table rows and four column headers,
// the diagram groups' titles, row labels, exposure/outcome labels, both
// notes, and the three legend entries; FA-own = the coffee/lung-cancer and
// OCP/DVT worked examples (First Aid's own running clinical anchors);
// KYP-original = the stratification-decision protocol (crude → stratify →
// collapse-vs-split verdict → act), the confounder/mediator/modifier
// three-role router, the exam layer, and all FOUR mnemonics ("TWO LINKS, NO
// PATHWAY", "COLLAPSE = CONFOUND, SPLIT = MODIFY", "COMA", and "TEST, THEN
// SPLIT") — no First Aid mnemonic prints anywhere on this page (VLM +
// pdfimages census), so every teaching generalization beyond the printed
// page is flagged as KYP context. DrugCards: none — the page prints no drug
// rows (OCPs appear as a study EXPOSURE, not a drug monograph; folded by
// absence, documented in the manifest). The neighboring pages: pdf 285 /
// book 263 = bias-and-study-errors (the error layer this page builds on),
// pdf 287 / book 265 = statistical-distributions — separate topics.

export const confoundingEffectModification: KypUsMLENote = {
  id: "confounding-effect-modification",
  title: "Confounding vs Effect Modification: What Stratification Reveals",
  subtitle:
    "Two phenomena hide inside every crude association, and the printed page is the machine that separates them. Take an exposure and an outcome that appear linked — coffee and lung cancer; oral contraceptive pills and deep venous thrombosis. Now stratify by the third variable and watch what happens inside the strata. If the association vanishes in every stratum — coffee drinkers who smoke get cancer at the same rate as nonsmokers who drink coffee — then smoking was a confounder: a factor related to both the exposure and the outcome (and not on a causal pathway) that distorted the crude effect, and the fix is to remove the distortion, by design (crossover studies where the subject serves as self-control, matching of patients with similar characteristics) or by analysis (regression when the confounding variables are known and were measured). If instead the association splits — a very strong association between OCP use and DVT among smokers, but no such association in people who do not smoke — that is effect modification: the exposure truly leads to different outcomes in subgroups stratified by the factor, a real finding to be reported stratum by stratum (after testing for interaction), never adjusted away. Same third variable — smoking plays the confounder in one printed example and the modifier in the other. The stratification table reads: no association after stratification means confounding; a true association that varies across strata means effect modification.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — the validity layer after bias: the confounding vs effect-modification table (two rows, four columns, carried verbatim with both worked examples and all four reduction strategies) and the two crude-vs-stratified diagram groups with their shared arrow legend (association disappeared after stratification = confounding; strong in one subgroup with weak/no association in the other = effect modification).",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 264–264 (Epidemiology and Biostatistics: Confounding vs effect modification)",
  tags: [
    "confounding",
    "effect modification",
    "stratification",
    "stratified analysis",
    "confounder",
    "mediator",
    "causal pathway",
    "matching",
    "crossover studies",
    "regression analysis",
    "interaction",
    "spurious association",
    "coffee",
    "lung cancer",
    "smoking",
    "OCPs",
    "oral contraceptive pills",
    "DVT",
    "deep venous thrombosis",
    "epidemiology",
    "biostatistics",
    "study validity",
    "subgroup analysis",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — the “Confounding vs effect modification” table, columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, TWO rows in printed order: (1) Confounding — “Factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome”; “No association after stratification”; example: “Coffee appears to be linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more”; strategies to reduce bias: “Crossover studies (subject serves as self-control)”, “Matching (patients with similar characteristics in both treatment and control groups)”, “Analytic techniques (eg, regression analysis when confounding variables are known and were measured)”. (2) Effect modification — “Exposure leads to different outcomes in subgroups stratified by factor”; “True association exists”; example: “A study among women using OCPs showed significant risk of DVT, but when these data were stratified by smoking habits, there was a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke”; strategy: “Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers)”. BLOCK 2 — the two crude-vs-stratified DIAGRAM GROUPS (pure vector art) with their shared arrow legend: the Confounding group (Crude analysis: Drinking coffee → Lung cancer; Stratiﬁed analysis: Smokers — Drinking coffee → Lung cancer, Nonsmokers — Drinking coffee → Lung cancer; “Note: Association disappeared after stratiﬁcation.”) and the “Effect modiﬁcation” group (Crude analysis: OCP use → DVT; Stratiﬁed analysis: Smokers — OCP use → DVT, Nonsmokers — OCP use → DVT; “Note: Association was strong in one subgroup with weak/no association in the other subgroup.”), with the legend decoding the arrow grammar used in both groups: thick solid = “Strong association”, thin solid = “Signiﬁcant association”, dashed = “Weak/no association”.",
    why:
      "This page sits one page after the bias table for a reason: selection, recall, and measurement biases are errors in WHO was sampled and HOW it was measured — errors of conduct. Confounding is different: nothing was done wrong, yet the crude number is still wrong, because a third variable is entangled with both the exposure and the outcome. Smoking is related to the exposure (coffee drinkers tend to smoke more) and to the outcome (smoking causes lung cancer), so it manufactures an apparent coffee–cancer link that never existed. The printed exclusion — the confounder is “not on a causal pathway” — is what separates a confounder from a mediator: if the exposure CAUSES the third variable which then causes the outcome, stratifying on it would erase part of the real effect. And the one tool whose RESULT tells the two phenomena apart is stratification: hold the third variable constant within strata and read what is left. Both strata null → the crude association was confounding, a distortion to remove (crossover designs make each subject self-controlled; matching equalizes the characteristics across groups; regression adjusts when confounders are known and were measured). Different effects across strata → effect modification, a true biological finding (the OCP–DVT risk lives in smokers; nonsmokers carry no such association) that must be reported, not adjusted away — First Aid prints the handling as “Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers).” The exam's deepest hook: smoking itself plays BOTH roles on this one page — confounder in the coffee story, effect modifier in the OCP story — proving the role belongs to the RELATIONSHIP, not the variable.",
    keyIdea:
      "Run every third-variable question through the four-move stratification protocol. MOVE 1 — NAME THE CRUDE ASSOCIATION: what does the unstratified (crude) comparison show? (Coffee appears linked to lung cancer; OCP use shows significant risk of DVT.) MOVE 2 — APPLY THE CONFOUNDER TEST: is the third variable related to BOTH the exposure AND the outcome, and NOT on a causal pathway between them? (Smoking ← coffee drinkers smoke more; smoking → lung cancer; coffee does not cause cancer through smoking → confounder. If the exposure causes the third variable and the third variable causes the outcome, it is a MEDIATOR, and stratifying would erase real effect — the printed parenthetical exists to exclude this.) MOVE 3 — STRATIFY AND READ THE VERDICT: split the analysis by the third variable (smokers vs nonsmokers) and compare the strata. Association GONE in every stratum (“No association after stratification”; “Note: Association disappeared after stratiﬁcation.”) → CONFOUNDING — the crude association was spurious, an artifact of the mixing. Association DIFFERENT across strata — “very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke” → EFFECT MODIFICATION — “True association exists,” and it varies by subgroup. MOVE 4 — ACT ON THE VERDICT: confounding is REMOVED — by design (Crossover studies: the subject serves as self-control; Matching: patients with similar characteristics in both treatment and control groups) or by analysis (Analytic techniques: regression analysis when confounding variables are known and were measured). Effect modification is REPORTED — test for interaction first, then run the stratified analysis (analyze risk among smokers and nonsmokers separately) and present the subgroup-specific results. Collapse → confound → remove; split → modify → report.",
  },
  mechanisms: [
    {
      id: "confounding-collapse-map",
      title:
        "The manufactured association: how a confounder builds a spurious link — and how stratification collapses it",
      context:
        "The printed Confounding row and the Confounding diagram group (book 264): coffee, lung cancer, and the two links of smoking",
      flow: {
        nodes: [
          {
            id: "crude",
            label: "THE CRUDE TABLE — coffee appears linked to lung cancer",
            sublabel:
              "Input — the starting state every confounding question begins from: an unstratified comparison in which “Coffee appears to be linked to lung cancer.” The crude association is real as an arithmetic fact and fake as a causal fact — something third is doing the work, and the page's job is to find it and remove it.",
            variant: "input",
          },
          {
            id: "link1",
            label: "LINK 1 — the confounder is related to the EXPOSURE",
            sublabel:
              "Process — the first requirement of the printed definition: the factor must be “related to both exposure and outcome.” Link 1 runs to the exposure: “Coffee drinkers tend to smoke more,” so smoking is entangled with the coffee exposure — the coffee arm and the no-coffee arm are NOT exchangeable on smoking.",
            variant: "process",
          },
          {
            id: "link2",
            label: "LINK 2 — the confounder is related to the OUTCOME",
            sublabel:
              "Process — the second requirement: the factor must also cause (or prevent) the outcome on its own. “Smoking is the true cause” of the lung cancer — so the outcome loads onto smoking, and any group enriched in smokers will look enriched in cancer regardless of its coffee habit.",
            variant: "process",
          },
          {
            id: "notpathway",
            label: "THE EXCLUSION — “not on a causal pathway”",
            sublabel:
              "Process — the printed parenthetical that separates confounder from mediator: the factor must NOT lie on a causal pathway from exposure to outcome. Coffee → smoking → lung cancer would make smoking a MEDIATOR (a step of the real mechanism), and stratifying on it would erase genuine effect. Smoking passes the exclusion here — coffee drinking does not biologically cause smoking in the printed story — so smoking is a CONFOUNDER, and the crude effect is distorted (“distorts the effect on the outcome”).",
            variant: "process",
          },
          {
            id: "stratify",
            label: "STRATIFY — hold the confounder constant inside each stratum",
            sublabel:
              "Process — the decisive move, drawn in the diagram group: split the data by the third variable (Smokers / Nonsmokers) and re-run the exposure–outcome comparison within each stratum. Inside a stratum the confounder cannot vary — every man in the smokers stratum smokes — so the mixing that manufactured the crude link is switched off: “Drinking coffee → Lung cancer” is re-tested among Smokers and again among Nonsmokers.",
            variant: "process",
          },
          {
            id: "collapse",
            label: "THE COLLAPSE — no association after stratification",
            sublabel:
              "Output — the verdict the diagram group prints under its rows: “Note: Association disappeared after stratiﬁcation.” and the table's DEFINITION cell echoes it: “No association after stratification.” Within smokers, coffee adds nothing; within nonsmokers, coffee adds nothing — the crude association was entirely the mixing. The finding: CONFOUNDING, a distortion to be removed, by design (Crossover studies — the subject serves as self-control; Matching — patients with similar characteristics in both treatment and control groups) or by analysis (Analytic techniques — regression analysis when confounding variables are known and were measured).",
            variant: "output",
          },
        ],
        edges: [
          { from: "crude", to: "link1", label: "who else is in the exposure arm? →" },
          { from: "link1", to: "link2", label: "and what does that factor do? →" },
          { from: "link2", to: "notpathway", label: "check the pathway exclusion →" },
          { from: "notpathway", to: "stratify", label: "confounder confirmed → split by it" },
          { from: "stratify", to: "collapse", label: "association gone in every stratum" },
        ],
      },
    },
    {
      id: "effect-modification-split-map",
      title:
        "The real effect that varies: how one exposure produces different outcomes across strata — and why stratification reveals rather than removes it",
      context:
        "The printed Effect modification row and the Effect modification diagram group (book 264): OCP use, DVT, and smoking as the modifier",
      flow: {
        nodes: [
          {
            id: "crude2",
            label: "THE CRUDE TABLE — OCP use shows significant risk of DVT",
            sublabel:
              "Input — the same starting state as confounding, which is exactly the trap: “A study among women using OCPs showed significant risk of DVT.” A crude association alone cannot tell confounding from effect modification — the two phenomena only separate AFTER stratification, never before.",
            variant: "input",
          },
          {
            id: "modifier",
            label: "THE MODIFIER — smoking changes the effect itself",
            sublabel:
              "Process — in effect modification the third variable is part of the BIOLOGY of the exposure's effect: the exposure “leads to different outcomes in subgroups stratified by factor.” Smoking does not distort the OCP–DVT link from outside (as it did to coffee); it participates in it — the thrombotic risk of estrogen is amplified in smokers (KYP context: smoking's vascular and prothrombotic effects stack with estrogen-induced clotting-factor changes — the printed example's biology).",
            variant: "process",
          },
          {
            id: "interaction",
            label: "TEST FOR INTERACTION — the printed first step",
            sublabel:
              "Process — the strategy cell's own sequence: “after testing for interaction between OCP and smoking.” Interaction is the statistical name for effect modification: the joint effect of exposure plus modifier differs from the sum of their separate effects. The test asks whether the stratum-specific effects differ from each other more than chance allows — BEFORE any stratified reporting is attempted.",
            variant: "process",
          },
          {
            id: "split",
            label: "SPLIT THE ANALYSIS — analyze risk among smokers and nonsmokers",
            sublabel:
              "Process — the printed handling: “analyze risk among smokers and nonsmokers.” Run the OCP–DVT comparison separately within each smoking stratum, exactly as the diagram group draws it: Smokers — OCP use → DVT; Nonsmokers — OCP use → DVT. Two stratum-specific effects, not one pooled number.",
            variant: "process",
          },
          {
            id: "verdict2",
            label: "THE VERDICT — a true association that varies by subgroup",
            sublabel:
              "Output — the split the diagram group prints: “there was a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke” — “Note: Association was strong in one subgroup with weak/no association in the other subgroup.” The table's DEFINITION cell seals it: “True association exists.” Effect modification is a FINDING to describe and report (stratum-specific risks, subgroup labels in the conclusion), never a nuisance to adjust away — regressing it out would erase the study's most useful result.",
            variant: "output",
          },
        ],
        edges: [
          { from: "crude2", to: "modifier", label: "the third variable is inside the effect →" },
          { from: "modifier", to: "interaction", label: "test for interaction first →" },
          { from: "interaction", to: "split", label: "interaction confirmed → stratify" },
          { from: "split", to: "verdict2", label: "strong in one stratum, absent in the other" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "confounding-map",
      title:
        "The two stratification lanes and the arrow legend (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 264's two blocks. TWO PARALLEL LANES — LANE 1 CONFOUNDING: a Crude analysis row (Drinking coffee → Lung cancer, thin solid arrow = the “Signiﬁcant association” style), a Stratiﬁed analysis block (Smokers — Drinking coffee → Lung cancer; Nonsmokers — Drinking coffee → Lung cancer; drawn with the print's thick-solid and dashed arrow styles), the verdict strip “Note: Association disappeared after stratiﬁcation.” with the table's “No association after stratification”, and the three printed reduction strategies (Crossover studies — the subject serves as self-control; Matching; Analytic techniques — regression). LANE 2 EFFECT MODIFICATION: Crude analysis (OCP use → DVT), Stratiﬁed analysis (Smokers — OCP use → DVT, strong; Nonsmokers — OCP use → DVT, weak/no), the verdict strip “Note: Association was strong in one subgroup with weak/no association in the other subgroup.” with the table's “True association exists”, and the printed handling (Stratified analysis after testing for interaction). BETWEEN/Below the lanes — the print's SHARED ARROW LEGEND exactly as it prints below the second group: thick solid = “Strong association”, thin solid = “Signiﬁcant association”, dashed = “Weak/no association”, plus the KYP rule strip (collapse → confound → remove; split → modify → report) and the two-row table digest.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 286 — the page's assets are the color-coded table (blue bold row labels, dotted hairlines, no red text — VLM-read at 120dpi, staging-pubh12/vlm-census.txt) and the two pure-vector diagram groups with their shared legend (gray title boxes, tan/orange exposure boxes, light-blue outcome boxes, light-gray stratum boxes, dark-gray arrows). The visual is an ORIGINAL KYP ADAPTATION + REDRAW: the two stacked diagram groups are re-arranged as two parallel vertical lanes and the table as verdict strips and a digest band — the artwork and layout are KYP's, every printed label (both table rows, both diagram groups' titles, row labels, exposure/outcome labels, both notes, all three legend entries) is preserved from the print, and the full table is additionally carried verbatim in the note's table block. ADJUDICATION, drawn exactly as printed: the three association labels print ONCE as a standalone legend below the Effect modification group's note (not attached to individual arrows), decoding the arrow grammar used in BOTH groups; and BOTH groups print the same three-style grammar — crude row thin solid, Smokers row thick solid, Nonsmokers row dashed (VLM ×3 + an objective pixel census of the 300dpi bitmap all agree; the task brief had the labels as in-diagram annotations — print governs).",
    },
    {
      kind: "table",
      title:
        "Book 264 — the printed Confounding vs effect modification table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's first block: 4 columns (TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS) and 2 data rows in printed order — Confounding, then Effect modification. The DEFINITION cells each carry a bold verdict sub-line (“No association after stratification” / “True association exists”) — the two lines the entire page turns on. The column header prints in small caps and extracts as “EXAmPLES” (a text-layer artifact, carried as extracted); cell-internal line breaks are flattened into sentences exactly as the print reads.",
      columns: ["TYPE", "DEFINITION", "EXAmPLES", "STRATEGIES TO REDUCE BIAS"],
      rows: [
        [
          "Confounding",
          "Factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome. No association after stratification.",
          "Coffee appears to be linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more.",
          "Crossover studies (subject serves as self-control). Matching (patients with similar characteristics in both treatment and control groups). Analytic techniques (eg, regression analysis when confounding variables are known and were measured).",
        ],
        [
          "Effect modification",
          "Exposure leads to different outcomes in subgroups stratified by factor. True association exists.",
          "A study among women using OCPs showed significant risk of DVT, but when these data were stratified by smoking habits, there was a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke.",
          "Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers).",
        ],
      ],
      caption:
        "Verbatim carry, documented: TWO rows in printed order (VLM-confirmed — none missing or extra), row labels print blue bold, verdict sub-lines print bold (“No association after stratification” — Confounding; “True association exists” — Effect modification), dotted hairline separators, no zebra striping, and NO red text anywhere in the table (unlike the observational-studies page's red mnemonics). Printed quirks carried: the column header extracts as “EXAmPLES” (small-caps artifact — the print's 'm' drops to lowercase in the text layer); the table cells print plain “fi” (“stratification”, “Stratified analysis”, “significant”) while the diagram groups below print the ﬁ ligature — carried verbatim both ways; First Aid's own two worked examples (coffee/lung cancer; OCP/DVT) are the source's clinical anchors, not KYP's.",
    },
    {
      kind: "list",
      title:
        "The two-row decoder — row by row, in the table's own words (KYP's reading)",
      intro:
        "Each printed row compressed to its decision core: what the phenomenon IS, what stratification does to it, the printed example that anchors it, and what the exam expects you to DO about it. This is the layer to recall when a vignette hands you a third variable and asks what it is.",
      items: [
        {
          lead: "ROW 1 — CONFOUNDING: the third variable that fakes the association",
          text: "What it is: “Factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome.” The two links are the test — related to the EXPOSURE (coffee drinkers tend to smoke more) and related to the OUTCOME (smoking is the true cause of the lung cancer) — and the parenthetical excludes mediators (variables the exposure itself creates on the way to the outcome). What stratification does: “No association after stratification” — inside smokers and inside nonsmokers, coffee adds nothing, so the crude link was pure mixing. The exam action: REMOVE it — crossover studies (each subject serves as self-control, so every confounder is perfectly balanced), matching (patients with similar characteristics in both treatment and control groups), analytic techniques (regression analysis when confounding variables are known and were measured).",
        },
        {
          lead: "ROW 2 — EFFECT MODIFICATION: the third variable that splits the association",
          text: "What it is: “Exposure leads to different outcomes in subgroups stratified by factor.” The third variable is not contaminating the effect — it IS part of the effect's biology: OCP-associated DVT risk is real, but its size depends on smoking status. What stratification does: reveals “True association exists” — “a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke.” The exam action: REPORT it — “Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers)” — stratum-specific estimates, never a single adjusted number that averages away the split.",
        },
        {
          lead: "THE TELL THAT SEPARATES THEM — read the strata, not the crude number",
          text: "Before stratification the two phenomena are IDENTICAL: a crude association is present (the coffee–cancer link; the OCP–DVT risk). The verdict comes only after splitting: association gone in every stratum → confounding (the crude number was a lie); association present but different across strata → effect modification (the crude number was an average of two different truths). The printed verdict lines are the answer keys: “No association after stratification” vs “True association exists.”",
        },
        {
          lead: "THE SMOKING DOUBLE ROLE — the same variable, both jobs",
          text: "First Aid's two worked examples share one third variable: in the coffee–lung-cancer story smoking is the CONFOUNDER (it fakes the association and stratification erases it); in the OCP–DVT story smoking is the EFFECT MODIFIER (it sizes a real association and stratification splits it). The role belongs to the relationship between the variable and the exposure–outcome pair, never to the variable itself — a variable that confounds one exposure–outcome pair can modify another (KYP framing of the page's architecture).",
        },
      ],
    },
    {
      kind: "steps",
      title: "The stratification workup in four moves (any vignette, any third variable)",
      intro:
        "The whole page as an ordered protocol — CRUDE, TEST, STRATIFY, VERDICT — applicable to any study description the exam shows, printed on book 264 or not.",
      steps: [
        {
          label: "MOVE 1 — STATE THE CRUDE ASSOCIATION",
          detail:
            "What does the unstratified comparison show? (Coffee appears to be linked to lung cancer; a study among women using OCPs showed significant risk of DVT.) Record it — but attach NO causal meaning yet: both confounding and effect modification begin life as an identical crude association.",
        },
        {
          label: "MOVE 2 — TEST THE THIRD VARIABLE",
          detail:
            "Apply the printed definition: is the factor related to BOTH the exposure AND the outcome, and NOT on a causal pathway between them? Two links + no pathway → candidate confounder (smoking for coffee–cancer). Exposure → third variable → outcome → it is a mediator, and stratifying on it would erase real effect. Third variable inside the effect's biology, sizing it by subgroup → candidate modifier (smoking for OCP–DVT).",
        },
        {
          label: "MOVE 3 — STRATIFY AND COMPARE THE STRATA",
          detail:
            "Split the analysis by the third variable (smokers vs nonsmokers) and re-run the exposure–outcome comparison within each stratum — exactly what both diagram groups draw. Then read the strata against each other AND against the crude estimate: are the stratum-specific associations null everywhere (collapse), or real but different (split)?",
        },
        {
          label: "MOVE 4 — DELIVER THE VERDICT AND ACT ON IT",
          detail:
            "COLLAPSE → confounding: “No association after stratification” — remove the distortion by design (crossover studies — the subject serves as self-control; matching — patients with similar characteristics in both treatment and control groups) or by analysis (regression when confounding variables are known and were measured). SPLIT → effect modification: “True association exists” — test for interaction, then run and report the stratified analysis (analyze risk among smokers and nonsmokers). Collapse → confound → remove; split → modify → report.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Confounding vs effect modification — the exam's see-saw, in the table's own words",
      intro:
        "The two printed rows are mirror images that share a crude association and diverge only after stratification. Every distinguishing feature follows from one question: what did the strata show?",
      columns: [
        "Confounding — the association is SPURIOUS",
        "Effect modification — the association is TRUE",
      ],
      rows: [
        {
          label: "The third variable's role",
          a: "“Factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome” — an outsider mixing the exposure and outcome together",
          b: "“Exposure leads to different outcomes in subgroups stratified by factor” — an insider participating in the effect's biology",
        },
        {
          label: "What stratification shows",
          a: "“No association after stratification” — the association disappears inside every stratum (the diagram note: “Association disappeared after stratiﬁcation.”)",
          b: "“True association exists” — and it varies by stratum (the diagram note: “Association was strong in one subgroup with weak/no association in the other subgroup.”)",
        },
        {
          label: "The printed example",
          a: "“Coffee appears to be linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more” — smoking fakes the coffee–cancer link",
          b: "“A study among women using OCPs showed significant risk of DVT … a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke” — smoking sizes the OCP–DVT risk",
        },
        {
          label: "What to do about it",
          a: "REMOVE it: Crossover studies (the subject serves as self-control); Matching (patients with similar characteristics in both treatment and control groups); Analytic techniques (regression analysis when confounding variables are known and were measured)",
          b: "REPORT it: Stratified analysis — after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers",
        },
        {
          label: "The mistake the exam punishes",
          a: "Believing the crude number: reporting coffee as a risk factor for lung cancer when smoking was doing all the work",
          b: "Adjusting the split away: pooling smokers and nonsmokers into one adjusted OCP–DVT estimate and erasing the subgroup finding",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — three stem shapes and one role-reversal twist",
      body:
        "SHAPE 1 — THE STRATIFIED TABLE: the stem gives a crude association, then stratum-specific results — identical strata that are both null (coffee–cancer among smokers RR ≈ 1.0 and among nonsmokers RR ≈ 1.0) = confounding; divergent strata (OCP–DVT strong in smokers, absent in nonsmokers) = effect modification. The answer lives in the PATTERN, never in the crude number. SHAPE 2 — NAME THE THIRD VARIABLE: a factor related to both the exposure and the outcome but not on the causal pathway = confounder; a variable on the pathway between exposure and outcome = mediator (the classic wrong answer — the printed parenthetical exists to exclude it); a variable that changes the size of a true effect across subgroups = effect modifier. SHAPE 3 — CHOOSE THE TOOL: “which of the following reduces confounding?” → crossover (self-control), matching, regression (when the confounders are known and were measured); “what is the appropriate analysis?” for a split association → stratified analysis after testing for interaction. THE ROLE-REVERSAL TWIST: the exam's favorite bait is smoking itself — confounder in the coffee story, modifier in the OCP story. Do not label the VARIABLE; label its RELATIONSHIP to the exposure–outcome pair at hand.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The mnemonic ledger — no First Aid mnemonic prints on this page (all four are KYP originals)",
      body:
        "Census (pdfimages + the VLM passes, staging-pubh12/vlm-census.txt): NO margin mnemonics and NO red in-cell mnemonics print anywhere on pdf 286 — unlike the observational-studies and quantifying-risk pages. All four hooks below are therefore KYP ORIGINALS, marked as such: (1) “TWO LINKS, NO PATHWAY” — the confounder test (related to the exposure + related to the outcome + not on the causal pathway); (2) “COLLAPSE = CONFOUND, SPLIT = MODIFY” — the stratification verdict (association gone in every stratum → confounding; different across strata → effect modification); (3) “COMA” — Crossover · Matching · Analytic techniques, the three printed strategies that put confounding into a coma; (4) “TEST, THEN SPLIT” — effect modification's handling (test for interaction between OCP and smoking first, then analyze risk among smokers and nonsmokers).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — one exposure pair, one variable wearing both roles",
      intro:
        "First Aid runs two clinical threads through the page, both printed in the EXAmPLES cells; both are high-yield anchors and both turn on smoking.",
      items: [
        {
          lead: "THE COFFEE–LUNG-CANCER THREAD — the spurious association, defused",
          text: "“Coffee appears to be linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more.” The clinical reality behind the print (KYP context): smoking is the dominant carcinogen for bronchogenic carcinoma, and coffee carries no causal link — the crude association is an artifact of who drinks coffee alongside their cigarettes. The exam transfer: any crude association between a lifestyle exposure and a smoking-related outcome (caffeine, alcohol markers, blue-collar work schedules) deserves the stratification question before it is believed.",
        },
        {
          lead: "THE OCP–DVT THREAD — the true association, split by smoking",
          text: "“A study among women using OCPs showed significant risk of DVT, but when these data were stratified by smoking habits, there was a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke.” The clinical reality behind the print (KYP context): estrogen-containing contraceptives increase hepatic synthesis of clotting factors and thromboembolic risk, and smoking stacks vascular injury and prothrombotic effects on top — which is exactly why smoking status shapes contraceptive counseling (the behavioral-science and pharmacology bridge).",
        },
        {
          lead: "THE BOUNDARY — distortion to remove vs finding to report",
          text: "Confounding is a VALIDITY problem: the crude estimate is wrong about the world, and the researcher's duty is to remove it (crossover, matching, regression). Effect modification is a DISCOVERY: the crude estimate is an average hiding two different truths, and the researcher's duty is to reveal it (test for interaction, report stratum-specific results). Telling a clinician “OCPs raise DVT risk” without the smoking split is the printed example of the mistake — the risk lives in the smokers.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A questionnaire study finds that people who drink four or more cups of coffee daily have a higher incidence of lung cancer than nondrinkers. When the cohort is stratified by smoking status, the coffee–cancer association is absent among smokers and absent among nonsmokers; smokers are simply overrepresented among heavy coffee drinkers.",
        discriminator:
          "The stratified estimates collapse to the null in every stratum — the printed verdict line “No association after stratification”",
        concept: "Confounding — the third-variable distortion and its removal",
        answer:
          "Confounding: smoking is related to both the exposure (coffee drinkers tend to smoke more) and the outcome (smoking is the true cause of the lung cancer) and is not on a causal pathway, so it “distorts the effect on the outcome.” Remove it by design — crossover studies (the subject serves as self-control), matching (patients with similar characteristics in both treatment and control groups) — or by analytic techniques (regression analysis when confounding variables are known and were measured).",
      },
      {
        stem: "A cohort study among women using OCPs shows a significant crude risk of DVT. After testing for interaction between OCP use and smoking, the investigators analyze the strata separately: among smokers the OCP–DVT association is very strong, while among nonsmokers there is no such association.",
        discriminator:
          "The stratum-specific effects differ — strong in one subgroup, weak/no in the other; “True association exists”",
        concept: "Effect modification — a true association that varies by subgroup",
        answer:
          "Effect modification: the exposure “leads to different outcomes in subgroups stratified by factor.” Handling: stratified analysis — “after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers” — and report the stratum-specific risks; do not pool them into a single adjusted estimate.",
      },
      {
        stem: "An investigator designing a new trial wants each enrollee to receive both the study drug and placebo in random order, with a washout between periods, specifically so that every subject serves as their own control and cannot differ systematically from any other subject.",
        discriminator:
          "“Subject serves as self-control” — the printed first strategy in the Confounding row's STRATEGIES TO REDUCE BIAS cell",
        concept: "Crossover design as a confounding-reduction strategy",
        answer:
          "Crossover study — one of the three printed strategies to reduce confounding (with matching and analytic techniques/regression): because each subject is compared with themselves, every confounder — measured or not — is perfectly balanced between the treatment and control conditions.",
      },
      {
        stem: "A researcher proposes that a newly noticed variable “lies on the pathway from the exposure to the outcome and transmits part of the exposure's effect,” and plans to control for it in the analysis. A reviewer objects that stratifying on it would erase a real component of the exposure's effect.",
        discriminator:
          "The variable sits ON the causal pathway — excluded by the printed parenthetical “(not on a causal pathway)”",
        concept: "Confounder vs mediator — the pathway exclusion",
        answer:
          "The variable is a mediator, not a confounder. A confounder must be related to both exposure and outcome AND not be on a causal pathway between them; adjusting for a mediator removes real effect rather than distortion. The printed confounding definition carries the exclusion in parentheses precisely to make this distinction (KYP framing of the parenthetical's purpose).",
      },
    ],
    traps: [
      {
        a: "Confounding — “No association after stratification” (association disappeared)",
        b: "Effect modification — “True association exists” (strong in one subgroup, weak/no in the other)",
        whyConfused:
          "Both begin as an identical crude association (coffee–cancer; OCP–DVT), and both are investigated by the SAME maneuver — stratifying by the third variable; only the result differs",
        keyDifference:
          "Read the STRATA: null everywhere → the crude association was manufactured by a third variable (confounding — remove it); present but different across strata → the association is real and varies (effect modification — report it). The verdict lines are printed in the DEFINITION cells",
        clue:
          "Stratified estimates equal ≈ 1.0 in every stratum = confounding; one stratum ≫ 1.0 while the other ≈ 1.0 = effect modification.",
      },
      {
        a: "Confounder — related to both exposure and outcome, NOT on a causal pathway",
        b: "Mediator — ON the causal pathway from exposure to outcome",
        whyConfused:
          "Both are third variables connected to both the exposure and the outcome; both “explain” part of the crude association",
        keyDifference:
          "DIRECTION of the links: a confounder is an upstream common cause of exposure and outcome (smoking → coffee habit AND smoking → lung cancer); a mediator is a downstream consequence of the exposure that transmits the effect (coffee → staining → … would be on the pathway). The printed definition carries the exclusion in parentheses",
        clue:
          "Ask “does the exposure CAUSE the third variable?” — yes → mediator (do not adjust); no → confounder (adjust).",
      },
      {
        a: "Effect modification — a finding to report with stratified analysis",
        b: "Bias — an error to eliminate (the column header “STRATEGIES TO REDUCE BIAS”)",
        whyConfused:
          "The printed column header puts BOTH rows under “STRATEGIES TO REDUCE BIAS,” inviting the reading that effect modification is a bias like recall or selection bias",
        keyDifference:
          "Effect modification is not an error of conduct or a distortion — “True association exists”; the exposure truly leads to different outcomes in subgroups. The strategy in its cell is stratified analysis to DESCRIBE the split, not to reduce a bias (only the Confounding row lists reduction strategies)",
        clue:
          "If the strata disagree with each other, nothing went wrong — the study found something; report it, do not fix it.",
      },
      {
        a: "Matching — a design-stage tool against confounding",
        b: "Stratified analysis — the printed tool for effect modification",
        whyConfused:
          "Both operate on the same third variable and both create comparable subgroups; both appear in the table's strategy column",
        keyDifference:
          "Matching equalizes the distribution of a known confounder ACROSS treatment and control groups BEFORE the data exist (patients with similar characteristics in both groups); stratified analysis splits an existing dataset by the modifier to estimate the effect WITHIN each level (smokers and nonsmokers) AFTER testing for interaction",
        clue:
          "Before enrollment → matching (design); after the data, on a split effect → stratified analysis (reporting).",
      },
    ],
    pivots: [
      {
        lookAlike: "A third variable appears in any stem",
        differentiator:
          "Classify its ROLE before touching the answer options — confounder, mediator, or effect modifier",
        correctPath:
          "Upstream common cause of both exposure and outcome, not on the pathway → confounder (remove: crossover/matching/regression). Downstream consequence of the exposure transmitting the effect → mediator (do not adjust). Variable that changes the size/direction of a true effect across subgroups → effect modifier (test for interaction, then stratify and report).",
      },
      {
        lookAlike: "A table of crude and stratum-specific effect estimates",
        differentiator:
          "The collapse-vs-split router — compare the strata with each other and with the crude estimate",
        correctPath:
          "All strata null (crude association vanishes) → confounding. Strata real but different (one strong, one weak/none) → effect modification. Strata both equal to the crude estimate → the third variable is neither confounder nor modifier (KYP context: no interaction, no distortion).",
      },
      {
        lookAlike: "A “which technique is appropriate?” option list",
        differentiator:
          "What is the technique supposed to DO — remove a distortion or describe a split?",
        correctPath:
          "Remove confounding → Crossover studies (subject serves as self-control), Matching (similar characteristics in both groups), Analytic techniques (regression when confounding variables are known and were measured). Describe effect modification → Stratified analysis, after testing for interaction (eg, between OCP and smoking), analyzing risk among smokers and nonsmokers.",
      },
    ],
    miniCase: {
      vignette:
        "A group of investigators reviews a prescription database and finds that women currently using oral contraceptive pills have a significantly higher rate of deep venous thrombosis than nonusers. Before publishing, they test for interaction between OCP use and smoking, then repeat the comparison among smokers and nonsmokers separately. Among smokers, OCP use is associated with a very strong increase in DVT risk; among women who do not smoke, there is no such association. A student on the team argues the correct conclusion is that smoking distorted the crude estimate, that the finding should be adjusted away with regression, and that a single pooled, adjusted effect estimate should be reported.",
      question:
        "Which of the following best describes the finding and the appropriate next step?",
      options: [
        {
          label: "A",
          text: "Effect modification — report the stratum-specific risks among smokers and nonsmokers",
          correct: true,
          why: "CORRECT — the exposure “leads to different outcomes in subgroups stratified by factor” and “True association exists”: after testing for interaction between OCP and smoking, the OCP–DVT association is very strong among smokers but absent among nonsmokers — exactly the printed example. The handling is the printed strategy: “Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers)” — describe and report the split, never pool it away.",
        },
        {
          label: "B",
          text: "Confounding — smoking distorted the crude estimate, and the association should be discarded",
          why: "TEMPTING but wrong — confounding is the OTHER row of the printed table: a factor related to both exposure and outcome that makes the crude association vanish on stratification (“No association after stratification”). Here stratification did NOT erase the association — it revealed a strong real one in a defined subgroup. Calling it confounding misreads the strata.",
        },
        {
          label: "C",
          text: "Confounding — adjust for smoking with regression analysis and report one pooled estimate",
          why: "TEMPTING but wrong — regression is a printed strategy for CONFOUNDING (“when confounding variables are known and were measured”), i.e., for removing distortion. Pooling smokers and nonsmokers into a single adjusted number here would average a strong true effect with an absent one and erase the study's most useful finding — the exact mistake the Effect modification row exists to prevent.",
        },
        {
          label: "D",
          text: "Smoking lies on the causal pathway between OCP use and DVT — it is a mediator and should not be controlled",
          why: "WRONG on the definition — a mediator is a consequence of the exposure that transmits its effect along the causal pathway; OCP use does not cause smoking. Smoking here changes the SIZE of the OCP effect across subgroups, which is modification, not mediation. (The pathway exclusion belongs to the confounder definition in the other row.)",
        },
        {
          label: "E",
          text: "Selection bias — the smokers and nonsmokers must have been sampled differently, and the study should be redesigned with matching",
          why: "WRONG phenomenon — selection bias is a systematic error in WHO enters the study (the previous page's material), not a pattern in stratum-specific effects. Nothing in the stem describes faulty sampling; matching is a printed confounding-reduction strategy anyway, not a remedy for a split effect. The interaction test was positive — the split is the finding.",
        },
      ],
      reasoning:
        "The question tests the collapse-vs-split router on the page's own printed example. The crude association (significant OCP–DVT risk) cannot distinguish confounding from effect modification — only the stratified result can. Here the strata SPLIT: very strong association among smokers, no such association in people who do not smoke, confirmed by a positive interaction test. Split → effect modification → “True association exists” → the printed handling is stratified analysis with stratum-specific reporting. Option B fails because nothing disappeared on stratification; option C applies the confounding toolkit (regression to one pooled estimate) to a finding that must be reported, not removed; option D confuses modifier with mediator (OCP use does not cause smoking); option E imports the bias page's error category into a stratification verdict. First Aid's own example sentence is the template for the correct call.",
    },
  },
  mnemonics: [
    {
      code: "TWO LINKS, NO PATHWAY",
      meaning:
        "A KYP ORIGINAL — the confounder test, straight from the printed definition: the factor must carry TWO LINKS (related to the EXPOSURE — coffee drinkers tend to smoke more — AND related to the OUTCOME — smoking is the true cause) and sit on NO causal pathway between them (the printed parenthetical “(not on a causal pathway)” — which is what excludes mediators).",
      memorizes:
        "The three conditions that make a third variable a confounder: exposure-link, outcome-link, pathway-exclusion",
      whenToUse:
        "Any “is this variable a confounder?” stem — run the three checks in order; failing any one (no exposure-link, no outcome-link, or ON the pathway) disqualifies it, and on-the-pathway reroutes the answer to mediator.",
      clinical:
        "The classic clinical confounders all pass the test (KYP context): smoking for coffee–lung cancer, age for almost any exposure–mortality pair, socioeconomic status for exposure–outcome claims — related to the exposure, independently related to the outcome, upstream of both.",
    },
    {
      code: "COLLAPSE = CONFOUND, SPLIT = MODIFY",
      meaning:
        "A KYP ORIGINAL — the stratification verdict: if the association COLLAPSES (vanishes in every stratum — “No association after stratification” / “Note: Association disappeared after stratiﬁcation.”) it was CONFOUNDING; if it SPLITS (real but different across strata — very strong among smokers, no such association among nonsmokers) it is EFFECT MODIFICATION (“True association exists”).",
      memorizes:
        "Which of the two phenomena a stratified analysis reveals, from the stratum-specific results alone",
      whenToUse:
        "Any stem that presents a crude estimate plus stratum-specific estimates — compare the strata with each other and with the crude number, then route: collapse → remove (crossover/matching/regression); split → report (stratified analysis after testing for interaction).",
      clinical:
        "The routing decides the clinical message (KYP context): a collapsed association means the exposure is innocent (coffee is off the hook); a split association means the risk is real but subgroup-targeted (OCP–DVT counseling runs through smoking status).",
    },
    {
      code: "COMA — Crossover · Matching · Analytic techniques",
      meaning:
        "A KYP ORIGINAL — the three printed strategies to reduce bias from confounding, in their printed order: Crossover studies (the subject serves as self-control — every confounder, measured or not, is balanced), Matching (patients with similar characteristics in both treatment and control groups), Analytic techniques (eg, regression analysis when confounding variables are known and were measured). Confounding is put into a COMA.",
      memorizes:
        "The Confounding row's STRATEGIES TO REDUCE BIAS cell — all three strategies with their printed qualifiers",
      whenToUse:
        "Any “which of the following reduces confounding?” option list, and any design question where a confounder is known before enrollment (design tools: crossover, matching) versus only measurable after (analysis tool: regression).",
      clinical:
        "The three tools cover the study lifecycle (KYP framing): crossover and matching act at the DESIGN stage, regression at the ANALYSIS stage — an exam stem that tells you WHEN the confounder was recognized is telling you WHICH tool applies.",
    },
    {
      code: "TEST, THEN SPLIT",
      meaning:
        "A KYP ORIGINAL — effect modification's printed handling in three words: TEST for interaction first (“after testing for interaction between OCP and smoking”), THEN SPLIT the analysis (“analyze risk among smokers and nonsmokers”) and report the stratum-specific effects.",
      memorizes:
        "The two-step sequence in the Effect modification row's strategy cell — interaction test before stratified reporting",
      whenToUse:
        "Any stem describing subgroup-specific effects or asking the appropriate analysis for a split association; also the guard against the pooling error — a single adjusted estimate is never the answer when the strata disagree.",
      clinical:
        "The sequence mirrors real reporting (KYP context): journals expect an interaction test to justify subgroup claims, then stratum-specific effect estimates — exactly the printed OCP/smoking workflow, and exactly how contraceptive-risk counseling is evidence-based.",
    },
  ],
  rapidReview: {
    s30: [
      "Confounding — factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome; No association after stratification",
      "Confounding example — coffee appears linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more",
      "Reduce confounding — Crossover studies (subject serves as self-control) · Matching (similar characteristics in both treatment and control groups) · Analytic techniques (regression when confounding variables are known and were measured)",
      "Effect modification — exposure leads to different outcomes in subgroups stratified by factor; True association exists",
      "Effect modification example — OCPs showed significant risk of DVT; stratified by smoking: very strong association among smokers, no such association in people who do not smoke",
      "Effect modification handling — Stratified analysis (after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers)",
      "The arrow legend — thick solid = Strong association · thin solid = Significant association · dashed = Weak/no association (prints once, below the Effect modification group)",
    ],
    m3: [
      "TWO LINKS, NO PATHWAY — the confounder test (KYP)",
      "COLLAPSE = CONFOUND, SPLIT = MODIFY — the stratification verdict (KYP)",
      "COMA — Crossover · Matching · Analytic techniques, the three anti-confounding strategies (KYP)",
      "TEST, THEN SPLIT — interaction test before stratified analysis for effect modification (KYP)",
    ],
    m10: [
      "The two diagram notes, verbatim — Confounding group: “Note: Association disappeared after stratiﬁcation.”; Effect modification group: “Note: Association was strong in one subgroup with weak/no association in the other subgroup.”",
      "The legend prints ONCE, below the Effect modification group's note, decoding the arrow grammar used in BOTH groups (crude row = thin solid “Signiﬁcant association” style; Smokers row = thick solid “Strong association” style; Nonsmokers row = dashed “Weak/no association” style — VLM ×3 + pixel census, staging-pubh12/vlm-census.txt)",
      "Smoking plays both roles on one page — confounder in the coffee–lung-cancer story, effect modifier in the OCP–DVT story: the role belongs to the relationship, not the variable",
      "The ﬁ ligature prints in the diagram groups only (“Stratiﬁed analysis”, “Effect modiﬁcation”, “Signiﬁcant association”, “stratiﬁcation” in note 1) while the table cells print plain “fi” — carried verbatim both ways",
    ],
  },
  recall: [
    {
      q: "What is the printed definition of confounding, and what does stratification show for it?",
      a: "“Factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome” — and “No association after stratification” (the diagram note: “Note: Association disappeared after stratiﬁcation.”).",
    },
    {
      q: "Name the three printed strategies to reduce bias from confounding, with their qualifiers.",
      a: "Crossover studies (subject serves as self-control); Matching (patients with similar characteristics in both treatment and control groups); Analytic techniques (eg, regression analysis when confounding variables are known and were measured).",
    },
    {
      q: "Why does coffee appear linked to lung cancer, and what is the true cause?",
      a: "“Coffee appears to be linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more” — smoking confounds the coffee–cancer association.",
    },
    {
      q: "What is the printed definition of effect modification, and what does stratification show for it?",
      a: "“Exposure leads to different outcomes in subgroups stratified by factor” — “True association exists”; the diagram note: “Note: Association was strong in one subgroup with weak/no association in the other subgroup.”",
    },
    {
      q: "What did the stratified OCP–DVT analysis show among smokers vs nonsmokers?",
      a: "“There was a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke.”",
    },
    {
      q: "What is the printed strategy for handling effect modification, and what must precede the stratified analysis?",
      a: "“Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers)” — the interaction test comes first, then the stratum-specific analysis.",
    },
    {
      q: "In the printed diagram legend, what arrow style corresponds to each of the three association labels?",
      a: "Thick solid arrow = “Strong association”; thin solid arrow = “Signiﬁcant association”; thin dashed arrow = “Weak/no association” — the legend prints once, below the Effect modification group's note, and decodes the arrow styles used in BOTH diagram groups.",
    },
    {
      q: "Which two links plus one exclusion define a confounder — and what variable type does the exclusion rule out?",
      a: "Related to the exposure AND related to the outcome, and NOT on a causal pathway between them — the exclusion rules out mediators (variables on the pathway from exposure to outcome, which transmit rather than distort the effect).",
    },
  ],
  related: [
    {
      title: "Bias and study errors — the error layer this page builds on",
      note:
        "The page immediately before (book 263): selection, recall, measurement, procedure, observer-expectancy, lead-time, and length-time biases — errors of WHO was sampled and HOW it was measured. Confounding is the different beast: no error of conduct, yet a distorted crude estimate because a third variable is entangled with exposure and outcome; the exam loves the boundary (produced in a parallel batch — referenced by design).",
      topicId: "bias-and-study-errors",
    },
    {
      title: "Clinical therapeutic trials — where the anti-confounding tools live",
      note:
        "The crossover design (subject serves as self-control, with washout) is printed here as a confounding-reduction strategy and is taught in full on the trials page; matching and randomization are the design-stage armory of the RCT — the design that exchanges groups on confounders even the unmeasured ones.",
      topicId: "clinical-therapeutic-trials",
    },
    {
      title: "Statistical tests — interaction testing and regression",
      note:
        "The printed strategy cells point forward: “testing for interaction between OCP and smoking” is a hypothesis test on subgroup differences, and “regression analysis when confounding variables are known and were measured” is the multivariable machinery — the statistical-tests page supplies both toolkits.",
      topicId: "statistical-tests",
    },
    {
      title: "Observational studies — the designs that cannot randomize confounding away",
      note:
        "Cohorts and case-controls measure what nature assembled, so confounders distribute themselves unevenly by design — the coffee–lung-cancer and OCP–DVT examples are cohort-style exposures whose crude estimates must be stratified before they mean anything; randomization (the trials page) is the only tool that balances confounders in advance.",
      topicId: "observational-studies",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology — estrogen and thromboembolism",
      connection:
        "The printed effect-modification example is pharmacology wearing an epidemiology costume: estrogen-containing OCPs increase hepatic synthesis of clotting factors (II, VII, IX, X, fibrinogen) and raise DVT/PE risk, and smoking stacks vascular injury on top — the biology behind why the OCP–DVT association is very strong among smokers and absent among nonsmokers, and why smoking status drives contraceptive counseling.",
    },
    {
      subject: "Pathology — lung cancer and tobacco",
      connection:
        "The printed confounding example runs on the pathology: tobacco smoke is the dominant cause of bronchogenic carcinoma (its carcinogens — polycyclic aromatics, nitrosamines — cause the mutations), which is exactly why “smoking is the true cause” of the crude coffee–cancer association: the outcome follows the confounder, not the exposure.",
    },
    {
      subject: "Biostatistics and epidemiology — quantifying risk",
      connection:
        "Stratification acts on the effect measures of the quantifying-risk page: crude RR/OR vs stratum-specific (adjusted) estimates — a confounder shifts the crude estimate away from the stratum-common value (collapse on stratification), while an effect modifier produces stratum-specific estimates that genuinely differ (split on stratification); the direction of distortion (toward or away from the null) describes the confounding's sign.",
    },
    {
      subject: "Research methods — regression and interaction terms",
      connection:
        "The two strategy cells are the applied side of multivariable methods: a regression model with the confounder as a covariate yields an adjusted exposure effect (printed: “regression analysis when confounding variables are known and were measured”), while an interaction term (exposure × modifier) is the regression form of “testing for interaction” — significant interaction means report stratum-specific effects, the printed OCP/smoking workflow.",
    },
  ],
};
