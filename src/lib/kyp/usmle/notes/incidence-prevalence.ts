import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2. Source: FULL pdf page 284 / book 262 (Part 1), a
// WHOLE-PAGE topic in the EPIDEMIOLOGY AND BIOSTATISTICS subsection — the page
// after the ROC-curve page (pdf 283 / book 261, the diagnostic-testing material)
// and before "Bias and study errors" (pdf 285 / book 263). The page carries FOUR
// blocks, all owned: (1) THE TWO FORMULAS — "Incidence = # of new cases / # of
// people at risk (per unit of time)" and "Prevalence = # of existing cases (at
// a point in time) / Total # of people in a population", both printed as
// stacked fractions to the right of the pool figure; (2) THE RELATIONSHIP — the
// big formula prints as a stacked fraction on the LEFT of the equals sign,
// "Prevalence / (1 – prevalence) = Incidence rate × average duration of
// disease" (raw extraction order: "Prevalence / average duration / = Incidence
// rate × / 1 – prevalence / of disease" — jumbled; pinned by pdftotext -bbox +
// two VLM passes), with the simplified sentence "Prevalence = incidence ×
// duration of the disease." printed below it, then "Prevalence > incidence for
// chronic diseases, due to large # of existing cases (eg, diabetes)." — and, in
// the right margin, "Incidence looks at new cases (incidents)." /
// "Prevalence looks at all current cases." / "Prevalence ∼ pretest
// probability." / "↑ prevalence → ↑ PPV and ↓ NPV." / "Prevalence ≈ incidence
// for short duration disease (eg, common cold)."; (3) THE POOL FIGURE (pure
// vector, ORIGINAL_KYP_REDRAW): the classic bathtub schematic — "Prevalence"
// printed IN the water, a faucet stream labeled "Incidence" pouring IN (upper
// left), a curved teal band labeled "Recurrence" looping up from the cure side
// and back IN (arrowhead down into the water), and two drain outflows labeled
// "Mortality" (bottom left) and "Cure" (bottom right); (4) THE 8-ROW SITUATION
// TABLE — columns SITUATION / INCIDENCE / PREVALENCE, rows: ↑ survival time
// (—, ↑); ↑ mortality rate (—, ↓); Faster recovery time (—, ↓); Extensive
// vaccine administration (↓, ↓); ↓ risk factors (↓, ↓); ↑ diagnostic
// sensitivity (↑, ↑); New effective treatment started (—, ↓); ↓ contact between
// infected and noninfected patients with airborne infectious disease (↓, ↓) —
// every cell carried verbatim in the note's table block. CENSUS (pdfimages):
// ZERO raster images on the page — formulas + pool figure + color-coded table +
// the indd footer slug. VLM AVAILABLE this session (glm-4.6v, TWO passes:
// full-page 120dpi + zoomed 300dpi crops of the figure and the big formula,
// staging-pubh10/vlm-census.txt), confirming: exactly EIGHT table rows in the
// printed order given above (none missing or extra); the pool is a CLAWFOOT
// BATHTUB with dark blue stippled water, "Prevalence" in white inside the
// water; INCIDENCE and RECURRENCE fill the pool, MORTALITY and CURE drain it
// ("Cure's outflow loops back in as Recurrence"); the big formula's stacked
// fraction sits LEFT of the "="; the margin sentences print with RED wordplay
// ("Incidence"/"incidents" red, "Prev" red, "all" bold); the table has plain
// uppercase headers with thin rules and NO zebra striping; a small blue key
// icon marks the figure as high-yield; NO margin mnemonics beyond the red
// wordplay, NO asterisk footnotes, NO other images. PRINTED-TEXT QUIRKS carried
// + documented: (1) "SEC TION II" header-space extraction artifact (known,
// carried as-is); (2) small-caps artifact "EPIDEmIOLOGY AND BIOSTATISTICS" in
// the running-header banner — which prints ONCE on this page (running header
// only, unlike book 256 where it printed twice); (3) C1 control bytes around
// the arrows in the raw layer — \x8f before every ↑, \x90 before every ↓, \x8e
// before the → (the table cells and the PPV/NPV line); the note's verbatim
// carry uses the clean arrows and the gen script's norm() strips the bytes for
// verification; (4) TWO DIFFERENT DASHES on one page — the four no-effect
// INCIDENCE cells print an EM DASH "—" (U+2014) while "1 – prevalence" prints
// an EN DASH "–" (U+2013) standing in for a minus sign; both carried exactly;
// (5) the raw table reading order interleaves each row as SITUATION label →
// INCIDENCE cell → PREVALENCE cell with each arrow glyph on its own line (eg,
// row 1 extracts as "\x8f↑ survival time", "—", "\x8f↑"); the column headers
// extract SPLIT — "SITUATION" at raw line 42 (before the indd slug), but
// "INCIDENCE"/"PREVALENCE" at raw lines 53–55 (after the slug, the banner, and
// the pretest-probability margin block); (6) the pool figure's labels extract
// INTERLEAVED with the formulas — "Recurrence" lands between "Incidence =" and
// its fraction (raw line 11), and "Incidence / Prevalence / Mortality / Cure"
// (raw lines 18–22) land right after "Prevalence =" (raw line 16) — jumbled
// reading order, geometry pinned by bbox + the two VLM passes; (7) TWO
// different "approximately" symbols in the margin block — ∼ (U+223C TILDE
// OPERATOR) in "Prevalence ∼ pretest probability." vs ≈ (U+2248) in "Prevalence
// ≈ incidence for short duration disease"; (8) "Extensive vaccine
// administration" wraps across two lines and row 8's situation cell wraps
// across three lines in print. ADJUDICATIONS (documented in the manifest too):
// (A) the batch brief described "outflow arrows to Mortality, Cure, and
// Recurrence" — the PRINT shows Recurrence as a second INFLOW: a curved band
// that arcs up from the cure side and re-enters the pool, arrowhead pointing
// down INTO the water (both VLM passes agree; consistent with the bbox label
// placement at top right, directly above the Cure drain) — brief corrected to
// print: INFLOWS = Incidence + Recurrence; OUTFLOWS = Mortality + Cure (and
// the semantics agree: relapsing cases re-enter the prevalence pool);
// (B) the brief wrote the relationship as "Prevalence = Incidence rate ×
// average duration of disease / (1 – prevalence)" — the PRINT stacks the
// fraction on the LEFT of the equals sign, "Prevalence / (1 – prevalence) =
// Incidence rate × average duration of disease" (zoomed VLM pass + the bbox
// centering of the "=" both pin it); algebraically identical, and the note
// carries the printed arrangement with the equivalence documented; (C) the
// brief's expected 8-row table content matched the print exactly (VLM
// confirmed, none missing or extra) — no correction. PROVENANCE SPLIT:
// verbatim = the two formulas, the big relationship formula, the simplified
// sentence, the chronic/short-duration sentences, all five margin sentences,
// the pool figure's five labels, the table's headers and all 8 rows; FA-own =
// the red wordplay emphasis in the margin sentences, the bathtub artwork
// concept (re-drawn, never reproduced), the diabetes/common-cold examples;
// KYP-original = the pool-balance framing (inflows vs outflows vs water
// level), the two-lever router ("the flow or the stay"), the measurement-
// artifact reading of the ↑ diagnostic sensitivity row, the exam layer, and
// the two KYP mnemonics ("FAUCET, STAY, DRAIN" and "TWO LEVERS — THE FLOW AND
// THE STAY") — every teaching generalization beyond the printed page is
// flagged as KYP context. DrugCards: none — the page prints formulas and a
// situation table, not drugs (documented as folded-by-absence in the
// manifest). The next page (pdf 285) opens Bias and study errors — the
// validity layer that sits on top of these measures, a separate topic.

export const incidencePrevalence: KypUsMLENote = {
  id: "incidence-prevalence",
  title: "Incidence vs Prevalence: The Pool and Its Streams",
  subtitle:
    "Two measures, two different questions. Incidence asks how fast NEW cases are appearing — a flow, a stream, counted per unit of time over the people still at risk. Prevalence asks how many cases exist right NOW — a stock, a snapshot, a water level counted at one point in time over the whole population. First Aid prints both formulas, then welds them together with one picture: a bathtub of existing cases labeled Prevalence, fed by the Incidence faucet (and by a Recurrence loop that pours relapsed cases back in), drained at the bottom by Mortality and Cure. The water level obeys the balance: fill faster than you drain and the pool deepens. That single picture generates the page's arithmetic identity — Prevalence / (1 – prevalence) = Incidence rate × average duration of disease, simplified in print to Prevalence = incidence × duration of the disease — and it explains the two printed anchors: diabetes, where long duration piles up a large # of existing cases so prevalence exceeds incidence, and the common cold, where fast resolution keeps prevalence ≈ incidence. The same lever logic then solves the page's 8-row situation table: anything that stops the flow of new cases (vaccine, ↓ risk factors, ↓ contact) cuts BOTH columns; anything that changes only how long cases stay in the pool (↑ survival time, ↑ mortality rate, faster recovery, new effective treatment) leaves incidence at “—” and moves prevalence alone; and one row — ↑ diagnostic sensitivity — moves both numbers by changing what is COUNTED, not who is sick. The margin then hands the exam its favorite bridge: prevalence ∼ pretest probability, so ↑ prevalence → ↑ PPV and ↓ NPV.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — the two core epidemiologic measures: the incidence and prevalence formulas, the pool model with its four streams (Incidence and Recurrence in; Mortality and Cure out), the prevalence–incidence–duration relationship with its diabetes and common-cold anchors, the pretest-probability bridge to PPV and NPV, and the 8-row situation table with every printed effect glyph (↑, ↓, and the em-dash “—” = no effect).",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 262–262 (Epidemiology and Biostatistics: Incidence vs prevalence)",
  tags: [
    "incidence",
    "prevalence",
    "pool model",
    "bathtub model",
    "disease duration",
    "average duration of disease",
    "chronic disease",
    "short duration disease",
    "diabetes",
    "common cold",
    "pretest probability",
    "PPV",
    "NPV",
    "diagnostic sensitivity",
    "survival time",
    "mortality rate",
    "faster recovery time",
    "vaccine administration",
    "risk factors",
    "new effective treatment",
    "airborne infectious disease",
    "recurrence",
    "cure",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — THE FORMULAS: “Incidence = # of new cases / # of people at risk (per unit of time)” and “Prevalence = # of existing cases (at a point in time) / Total # of people in a population” — both printed as stacked fractions. BLOCK 2 — THE RELATIONSHIP: the big formula “Prevalence / (1 – prevalence) = Incidence rate × average duration of disease” (printed as a stacked fraction left of the equals sign; algebraically identical to Prevalence = Incidence rate × average duration of disease / (1 – prevalence)), the simplified sentence “Prevalence = incidence × duration of the disease.”, the chronic-disease anchor “Prevalence > incidence for chronic diseases, due to large # of existing cases (eg, diabetes).”, and — in the right margin — “Incidence looks at new cases (incidents).”, “Prevalence looks at all current cases.”, “Prevalence ∼ pretest probability.”, “↑ prevalence → ↑ PPV and ↓ NPV.”, and “Prevalence ≈ incidence for short duration disease (eg, common cold).” BLOCK 3 — THE POOL FIGURE: the bathtub schematic — “Prevalence” printed in the water; INCIDENCE pours in from the faucet (a second inflow, RECURRENCE, loops up from the cure side and pours back in, arrowhead down into the water); MORTALITY and CURE drain out below. BLOCK 4 — THE SITUATION TABLE: 3 columns (SITUATION / INCIDENCE / PREVALENCE) and 8 rows in printed order — ↑ survival time (—, ↑); ↑ mortality rate (—, ↓); Faster recovery time (—, ↓); Extensive vaccine administration (↓, ↓); ↓ risk factors (↓, ↓); ↑ diagnostic sensitivity (↑, ↑); New effective treatment started (—, ↓); ↓ contact between infected and noninfected patients with airborne infectious disease (↓, ↓). The “—” is the printed em dash meaning NO EFFECT, carried exactly.",
    why:
      "This page is the arithmetic backbone of every epidemiology question on the exam: before any 2×2 table, any risk measure, any screening statistic, the exam first tests whether you know WHAT is being counted — new cases arising over time, or existing cases at one moment. The two measures have different numerators (new vs existing cases), different denominators (people at risk vs the total population), different time structures (a flow vs a snapshot), and different disease-design harvests (the cohort measures incidence; the cross-sectional study measures prevalence — the book 256 table). The printed pool figure is what makes the distinction permanent: prevalence is a WATER LEVEL, and a level is set by two things only — how fast water enters (incidence, plus the recurrence loop) and how long each drop stays before leaving (average duration of disease, with mortality and cure as the two drains). Every general rule on the page falls out of that picture: chronic diseases deepen the pool (diabetes: prevalence > incidence, due to a large # of existing cases); short-duration diseases drain as fast as they fill (common cold: prevalence ≈ incidence); and each row of the situation table is just one lever pulled on one stream. The margin block then converts the page into testing logic: prevalence ∼ pretest probability, so a more common disease makes the same positive test more believable (↑ PPV) and the same negative test less reassuring (↓ NPV) — the bridge to the diagnostic-testing pages that precede this one.",
    keyIdea:
      "Run every prevalence/incidence question through THE POOL AND ITS TWO LEVERS. THE POOL: prevalence = the water level = # of existing cases at a point in time over the total population. THE INFLOWS (two printed streams): INCIDENCE — the faucet, # of new cases per # of people at risk per unit of time — and RECURRENCE, the loop that pours relapsed cases back in. THE OUTFLOWS (two printed drains): MORTALITY and CURE. LEVER 1 — THE FLOW (new-case generation): vaccine administration, ↓ risk factors, ↓ contact between infected and noninfected patients all slow the faucet → INCIDENCE ↓, and prevalence follows ↓. LEVER 2 — THE STAY (average duration of disease): ↑ survival time lengthens the stay → PREVALENCE ↑; ↑ mortality rate, faster recovery time, and a new effective treatment all shorten the stay → PREVALENCE ↓; all four leave the faucet untouched → INCIDENCE “—” (the four em-dash cells are exactly the four stay-side levers — and every one of the 8 rows moves prevalence, because the level is downstream of both levers). THE ONE MEASUREMENT ROW: ↑ diagnostic sensitivity changes what is COUNTED, not who is sick — more existing and new cases are found → both columns ↑. THE ARITHMETIC: Prevalence / (1 – prevalence) = Incidence rate × average duration of disease; simplified in print to Prevalence = incidence × duration of the disease. THE BRIDGE: prevalence ∼ pretest probability — ↑ prevalence → ↑ PPV and ↓ NPV.",
  },
  mechanisms: [
    {
      id: "pool-balance-map",
      title:
        "The bathtub and its four streams: how the water level (prevalence) is set by the faucet (incidence) and the drains (mortality, cure)",
      context:
        "The printed pool figure (book 262): Prevalence in the water; Incidence and Recurrence in; Mortality and Cure out",
      flow: {
        nodes: [
          {
            id: "pool",
            label: "THE POOL — Prevalence, the water level",
            sublabel:
              "Input — the figure prints “Prevalence” inside the water: the # of existing cases at a point in time over the total # of people in a population. A level is a STOCK — it is measured at one instant (the snapshot measure), unlike a flow, which is measured per unit of time. Everything else on the page is a stream feeding or draining this one level.",
            variant: "input",
          },
          {
            id: "faucet",
            label: "INFLOW 1 — INCIDENCE, the faucet",
            sublabel:
              "Process — the faucet pours NEW cases in: “Incidence = # of new cases / # of people at risk (per unit of time).” Three printed details matter: the numerator is NEW cases only; the denominator is the people still AT RISK (not the whole population — those who already have the disease cannot become new cases); and the “(per unit of time)” makes incidence a RATE, a flow — “Incidence looks at new cases (incidents).”",
            variant: "process",
          },
          {
            id: "loop",
            label: "INFLOW 2 — RECURRENCE, the return loop",
            sublabel:
              "Process — the figure's second inflow: a curved band that arcs up from the cure side and pours back into the pool (the arrowhead points down INTO the water — pinned by both VLM passes; the brief had it as an outflow, corrected to print). A patient who was cured and then relapses re-enters the prevalence pool: recurrence RE-FILLS the level without creating a brand-new case.",
            variant: "process",
          },
          {
            id: "drains",
            label: "OUTFLOWS — MORTALITY and CURE, the two drains",
            sublabel:
              "Process — the pool drains at the bottom through two streams: MORTALITY (cases leave by dying) and CURE (cases leave by recovering). Neither removes anyone from the population — they remove people from the POOL of existing cases. Faster mortality or faster recovery widens a drain; longer survival narrows both.",
            variant: "process",
          },
          {
            id: "balance",
            label: "THE BALANCE — the level rises when inflow beats outflow",
            sublabel:
              "Process — the water level follows the net stream: fill faster than you drain and the pool deepens (↑ prevalence); drain faster than you fill and it shallows (↓ prevalence); equal streams hold the level steady. This is why EVERY row of the situation table moves prevalence — the level is downstream of both the faucet and the drains — while incidence moves only when the faucet itself is touched.",
            variant: "process",
          },
          {
            id: "identity",
            label: "THE IDENTITY — level ≈ faucet × stay",
            sublabel:
              "Output — at steady state the arithmetic collapses into the page's big formula: “Prevalence / (1 – prevalence) = Incidence rate × average duration of disease” — the level divided by its complement equals the inflow rate times the residence time. When prevalence is small, (1 – prevalence) ≈ 1 and the printed simplification holds: “Prevalence = incidence × duration of the disease.” Diabetes (long stay) deepens the pool: prevalence > incidence. The common cold (short stay) drains as fast as it fills: prevalence ≈ incidence.",
            variant: "output",
          },
        ],
        edges: [
          { from: "pool", to: "faucet", label: "new cases pour in →" },
          { from: "pool", to: "loop", label: "relapses pour back in →" },
          { from: "pool", to: "drains", label: "mortality · cure empty it →" },
          { from: "faucet", to: "balance", label: "fill rate" },
          { from: "drains", to: "balance", label: "drain rate" },
          { from: "balance", to: "identity", label: "steady state →" },
        ],
      },
    },
    {
      id: "situation-router-map",
      title:
        "The two levers: routing all 8 rows of the situation table through the flow and the stay",
      context:
        "The printed SITUATION / INCIDENCE / PREVALENCE table (book 262): eight situations, each a lever on one stream of the pool",
      flow: {
        nodes: [
          {
            id: "situation",
            label: "A SITUATION APPEARS — which stream does it touch?",
            sublabel:
              "Input — the table hands you eight situations and asks for two arrows each. Before touching the columns, ask ONE routing question of the situation: does it change the FLOW of new cases into the pool, the STAY of cases already in the pool, or the COUNTING of cases? Every printed row is exactly one of those three.",
            variant: "input",
          },
          {
            id: "flow-lever",
            label: "LEVER 1 — STOP THE FLOW → incidence ↓, prevalence ↓",
            sublabel:
              "Process — three rows slow the faucet: “Extensive vaccine administration”, “↓ risk factors”, and “↓ contact between infected and noninfected patients with airborne infectious disease” (transmission interrupted). Fewer new cases generated → INCIDENCE ↓ — and with less water entering, the level falls too → PREVALENCE ↓. Both columns carry the printed ↓.",
            variant: "process",
          },
          {
            id: "stay-lever",
            label: "LEVER 2 — CHANGE THE STAY → incidence “—”, prevalence ↑ or ↓",
            sublabel:
              "Process — four rows leave the faucet alone and change only how long cases remain: “↑ survival time” LENGTHENS the stay → the pool deepens → PREVALENCE ↑ (incidence “—”); “↑ mortality rate”, “Faster recovery time”, and “New effective treatment started” all SHORTEN the stay (wider mortality or cure drain) → PREVALENCE ↓ (incidence “—”). These four rows are exactly the four em-dash “—” cells — the printed signature of a stay-side lever.",
            variant: "process",
          },
          {
            id: "count-lever",
            label: "THE THIRD LEVER — ↑ diagnostic sensitivity: change the COUNTING",
            sublabel:
              "Process — “↑ diagnostic sensitivity” changes neither the faucet nor the drains: it changes what is COUNTED. A more sensitive test finds cases that were always there — more existing cases are counted (prevalence ↑) and more newly arising cases are caught (incidence ↑). Both columns carry the printed ↑ — a measurement effect, not a change in who is sick (the KYP reading of the printed row).",
            variant: "process",
          },
          {
            id: "readout",
            label: "READ-OFF RULES — the patterns in the printed columns",
            sublabel:
              "Output — three regularities to carry into the exam: (1) the INCIDENCE column prints “—” in exactly the four stay-side rows and moves in the other four; (2) the PREVALENCE column has NO “—” — all eight rows move it, because the level is downstream of every lever; (3) prevalence moves DOWN in five rows and UP in two (↑ survival time; ↑ diagnostic sensitivity). Prevalence ∼ pretest probability, so any row that raises prevalence is also raising PPV and lowering NPV.",
            variant: "output",
          },
        ],
        edges: [
          { from: "situation", to: "flow-lever", label: "touches the faucet →" },
          { from: "situation", to: "stay-lever", label: "touches the drains →" },
          { from: "situation", to: "count-lever", label: "touches the test →" },
          { from: "flow-lever", to: "readout", label: "↓ / ↓" },
          { from: "stay-lever", to: "readout", label: "— / ↑ or ↓" },
          { from: "count-lever", to: "readout", label: "↑ / ↑" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "incidence-prevalence-map",
      title:
        "The pool, its streams, and the situation table (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 262's whole page. TOP — the pool re-drawn as KYP vector art: a rounded pool of existing cases labeled Prevalence, fed by the INCIDENCE stream (a faucet pouring in) and by the RECURRENCE loop (arching over from the cure side and pouring back in — arrowhead down into the water), draining through MORTALITY and CURE at the bottom, with the balance strip and the page's arithmetic identity (Prevalence / (1 – prevalence) = Incidence rate × average duration of disease; simplified: Prevalence = incidence × duration of the disease). MIDDLE — the two formula cards side by side (Incidence = # of new cases / # of people at risk (per unit of time); Prevalence = # of existing cases (at a point in time) / Total # of people in a population) with the margin sentences, the chronic/short-duration anchors (diabetes; common cold), and the pretest-probability bridge (↑ prevalence → ↑ PPV and ↓ NPV). BOTTOM — the 8-row situation table as a full-width band: SITUATION / INCIDENCE / PREVALENCE, every printed effect glyph (↑, ↓, and the em-dash “—” = no effect) in printed row order.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 284 — the page's assets are the pure-vector bathtub figure, the typographic formulas, and the color-coded situation table (plain uppercase headers, thin rules, no zebra — VLM-read at 120dpi + 300dpi zoom, staging-pubh10/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION + REDRAW: the book's bathtub is re-drawn as a KYP pool with vector stream glyphs and the table is re-laid-out as a glyph band — the artwork and layout are KYP's, every printed label (all five figure labels, all three formulas, all eight table rows with their exact ↑/↓/— glyphs) is preserved from the print, and the full table is additionally carried verbatim in the note's table block. ADJUDICATION, drawn exactly as printed: RECURRENCE is a second INFLOW (the curved band re-enters the pool; both VLM passes agree — the batch brief had it as an outflow, print governs), and the big formula's stacked fraction sits LEFT of the equals sign (Prevalence / (1 – prevalence) = Incidence rate × average duration of disease).",
    },
    {
      kind: "table",
      title:
        "Book 262 — the printed SITUATION table, carried verbatim (every printed row and glyph, PRINTED row order)",
      intro:
        "The page's fourth block: 3 columns (SITUATION / INCIDENCE / PREVALENCE) and 8 data rows in printed order. The effect cells print three glyphs: ↑ (increases), ↓ (decreases), and the em-dash “—” meaning NO EFFECT — carried here exactly as printed, in every cell. Raw-layer quirks, documented: each row extracts as SITUATION label → INCIDENCE cell → PREVALENCE cell with each arrow glyph on its own line preceded by a C1 control byte (\x8f↑, \x90↓); the column headers extract SPLIT around the indd slug and the margin block (“SITUATION” at raw line 42; “INCIDENCE”/“PREVALENCE” at raw lines 53–55); “Extensive vaccine administration” wraps across two lines and row 8's situation cell wraps across three lines in print. VLM-confirmed at 120dpi: exactly eight rows, none missing or extra.",
      columns: ["SITUATION", "INCIDENCE", "PREVALENCE"],
      rows: [
        ["↑ survival time", "—", "↑"],
        ["↑ mortality rate", "—", "↓"],
        ["Faster recovery time", "—", "↓"],
        ["Extensive vaccine administration", "↓", "↓"],
        ["↓ risk factors", "↓", "↓"],
        ["↑ diagnostic sensitivity", "↑", "↑"],
        ["New effective treatment started", "—", "↓"],
        [
          "↓ contact between infected and noninfected patients with airborne infectious disease",
          "↓",
          "↓",
        ],
      ],
      caption:
        "Verbatim carry, documented: EIGHT rows in printed order (VLM-confirmed — none missing or extra). The “—” is the printed EM DASH (U+2014) meaning NO EFFECT on incidence — carried exactly, never glossed; note it prints ONLY in the INCIDENCE column (the four stay-side rows: ↑ survival time, ↑ mortality rate, Faster recovery time, New effective treatment started), while the PREVALENCE column moves in all eight rows. The page also prints an EN DASH “–” (U+2013) as the minus sign inside “1 – prevalence” in the big formula — two different dashes on one page, both carried as printed. The ↑/↓ arrows carry C1 control bytes in the raw text layer (\x8f before ↑, \x90 before ↓), a known extraction artifact of this title — the glyphs are carried clean here and the bytes are stripped by the evidence verifier. The row-8 situation text is the print's own three-line wrap joined: “↓ contact between infected and noninfected patients with airborne infectious disease.”",
    },
    {
      kind: "list",
      title:
        "The situation table decoded — all 8 rows through the pool (KYP's reading of the printed table)",
      intro:
        "Each printed row compressed to its lever, its stream, and its two printed glyphs. This is the layer to recall when a vignette changes survival, mortality, recovery, vaccination, risk factors, test sensitivity, treatment, or contact patterns and asks for both columns.",
      items: [
        {
          lead: "ROW 1 — ↑ SURVIVAL TIME: lengthen the stay → (—, ↑)",
          text: "Patients live longer WITH the disease, so each case occupies the pool longer: the water level rises (PREVALENCE ↑) with no change in new-case generation (INCIDENCE “—”). The classic real-world shape (KYP context, not printed): therapies that extend survival without preventing onset make a chronic disease's prevalence climb even as its incidence holds — the level deepens because the drains narrow.",
        },
        {
          lead: "ROW 2 — ↑ MORTALITY RATE: widen the mortality drain → (—, ↓)",
          text: "Cases exit the pool faster by dying: PREVALENCE ↓, INCIDENCE “—” — the faucet is untouched. The exam's caution (KYP context): a FALLING prevalence is not automatically good news; ask WHICH drain widened. Mortality-driven prevalence declines are the grim version of the same arrow.",
        },
        {
          lead: "ROW 3 — FASTER RECOVERY TIME: widen the cure drain → (—, ↓)",
          text: "Cases exit faster by recovering: PREVALENCE ↓, INCIDENCE “—”. Same arrow as row 2, opposite drain — and this one IS good news. Rows 2 and 3 are the printed proof that prevalence alone cannot grade a population's health; it grades the balance.",
        },
        {
          lead: "ROW 4 — EXTENSIVE VACCINE ADMINISTRATION: slow the faucet → (↓, ↓)",
          text: "Vaccination converts susceptible people into immune people, so fewer NEW cases arise: INCIDENCE ↓, and with less water entering, PREVALENCE ↓ as the pool drains through its usual mortality and cure. The first of the three both-↓ rows — every one of them is a flow-side lever.",
        },
        {
          lead: "ROW 5 — ↓ RISK FACTORS: slow the faucet → (↓, ↓)",
          text: "Removing exposures (the chapter's running example on book 256: smoking and COPD) means fewer new cases: INCIDENCE ↓, PREVALENCE ↓. Risk-factor reduction and vaccination act on the same stream — upstream prevention — which is why their printed rows carry identical glyphs.",
        },
        {
          lead: "ROW 6 — ↑ DIAGNOSTIC SENSITIVITY: change the counting → (↑, ↑)",
          text: "A more sensitive test finds cases that were already there: more existing cases are counted (PREVALENCE ↑) and more newly arising cases are detected (INCIDENCE ↑). The KYP reading: this is the table's only MEASUREMENT row — both numbers move while true disease frequency is unchanged. It is also the prevalence–testing bridge in miniature: better case-finding raises measured prevalence, and measured prevalence ∼ pretest probability.",
        },
        {
          lead: "ROW 7 — NEW EFFECTIVE TREATMENT STARTED: widen the cure drain → (—, ↓)",
          text: "A new effective treatment empties the pool faster through the cure drain: PREVALENCE ↓, INCIDENCE “—” — treatment does not by itself prevent new cases. The exam's favorite confusion (see the traps): treatment and vaccination look interchangeable in headlines but pull different levers — (—, ↓) vs (↓, ↓).",
        },
        {
          lead: "ROW 8 — ↓ CONTACT BETWEEN INFECTED AND NONINFECTED PATIENTS (AIRBORNE): slow the faucet → (↓, ↓)",
          text: "Interrupting contact (isolation, ventilation, masks — KYP context for the mechanism) cuts transmission of an airborne infectious disease, so fewer new infections arise: INCIDENCE ↓, PREVALENCE ↓. The printed qualifier “airborne infectious disease” is the row's own hint: contact is the transmission route being severed.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any situation through the pool — the two-lever protocol",
      intro:
        "The whole table (and any stem the exam invents like it) in three moves: route the lever, then read the two columns. Applicable to situations printed on book 262 or not.",
      steps: [
        {
          label: "STEP 1 — DOES IT TOUCH THE FLOW OF NEW CASES?",
          detail:
            "Ask whether the situation changes how many NEW cases arise: vaccination, ↓ risk factors, ↓ contact between infected and noninfected → the faucet slows → INCIDENCE ↓ (and prevalence follows ↓). If the situation only changes what happens to people who ALREADY have the disease, the incidence column is the printed “—” — no effect — and you move to Step 2.",
        },
        {
          label: "STEP 2 — DOES IT CHANGE THE STAY (AVERAGE DURATION OF DISEASE)?",
          detail:
            "Ask whether cases now remain in the pool longer or shorter: ↑ survival time → longer stay → PREVALENCE ↑; ↑ mortality rate, faster recovery, new effective treatment → shorter stay → PREVALENCE ↓. Duration is the residence time of a case between entering (incidence/recurrence) and leaving (mortality/cure) — the same duration that multiplies incidence in the printed identity.",
        },
        {
          label: "STEP 3 — OR DOES IT CHANGE THE COUNTING?",
          detail:
            "Before finalizing, ask whether the situation changes measurement rather than disease: ↑ diagnostic sensitivity finds more existing and more new cases → both columns ↑ with true frequency unchanged. Any stem whose intervention is a TEST (screening program, new assay, case definition change) is a counting lever — route it here, not through the faucet or the drains.",
        },
        {
          label: "STEP 4 — READ OFF BOTH COLUMNS, THEN CHECK THE REGULARITIES",
          detail:
            "Emit the pair: flow levers give (↓, ↓); stay levers give (—, ↑) or (—, ↓); counting levers give (↑, ↑). Then sanity-check against the printed patterns: “—” appears only in the INCIDENCE column; the PREVALENCE column moves in every row; and a row that raises prevalence also raises PPV and lowers NPV (prevalence ∼ pretest probability).",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Incidence vs prevalence — the two measures side by side, in the page's own words",
      intro:
        "The page's two formulas, two margin sentences, and two example diseases line up as mirror definitions: a flow of new cases vs a stock of existing cases. Every distinguishing feature follows from that one difference.",
      columns: [
        "INCIDENCE — the flow of new cases",
        "PREVALENCE — the stock of existing cases",
      ],
      rows: [
        {
          label: "The question it answers (the margin sentences)",
          a: "“Incidence looks at new cases (incidents).” — how fast are NEW cases arising?",
          b: "“Prevalence looks at all current cases.” — how many cases exist right now, at this moment?",
        },
        {
          label: "The printed formula",
          a: "Incidence = # of new cases / # of people at risk (per unit of time)",
          b: "Prevalence = # of existing cases (at a point in time) / Total # of people in a population",
        },
        {
          label: "The numerator",
          a: "# of NEW cases — people crossing from healthy to diseased during the period",
          b: "# of EXISTING cases — everyone who has the disease at the measured moment, new and old alike",
        },
        {
          label: "The denominator",
          a: "# of people AT RISK — those who could still become new cases (existing cases are excluded from their own incidence denominator)",
          b: "Total # of people in a population — everyone, sick and well alike; a census-style denominator",
        },
        {
          label: "Time structure",
          a: "A RATE — “(per unit of time)”; a stream measured over an interval",
          b: "A SNAPSHOT — “(at a point in time)”; a level measured at an instant",
        },
        {
          label: "Dependence on duration",
          a: "Independent of how long cases last — the faucet does not care how long a drop stays in the tub",
          b: "Set by duration: Prevalence / (1 – prevalence) = Incidence rate × average duration of disease; simplified: “Prevalence = incidence × duration of the disease.” — the level ≈ faucet × stay",
        },
        {
          label: "The printed anchors",
          a: "Common cold — short duration disease: “Prevalence ≈ incidence for short duration disease (eg, common cold).” the pool drains as fast as it fills",
          b: "Diabetes — chronic disease: “Prevalence > incidence for chronic diseases, due to large # of existing cases (eg, diabetes).” the pool deepens",
        },
        {
          label: "The study design that harvests it (book 256 bridge)",
          a: "The cohort study — “Disease incidence” is its printed measure (exposure-forward follow-up counts new cases)",
          b: "The cross-sectional study — “Disease prevalence” is its printed measure (one present-time slice counts existing cases)",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one glyph trap",
      body:
        "SHAPE 1 — THE SURVIVAL TWIST: a therapy (or care program) extends survival of a chronic disease's patients without preventing onset → incidence unchanged (“—”), prevalence ↑ — the stem's “patients live longer with the disease” is the tell. SHAPE 2 — THE MEASUREMENT TWIST: a more sensitive screening test or widened case definition rolls out → BOTH measured incidence and prevalence ↑, true disease unchanged — route through the counting lever. SHAPE 3 — THE PREVENTION TWIST: vaccination, risk-factor reduction, or contact interruption (airborne disease) → both ↓ — the flow lever. SHAPE 4 — THE TESTING BRIDGE: “the same test is used in a clinic where the disease is more common” → prevalence ∼ pretest probability → ↑ PPV and ↓ NPV — no arithmetic needed, just the margin sentence. THE GLYPH TRAP: when the options include “no change,” remember the printed em dash — “—” — is a REAL answer for incidence (the four stay-side rows), and it NEVER appears for prevalence: all eight situations move the level.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own margin sentences — printed with red wordplay, carried attributed",
      body:
        "The page prints TWO memory hooks of its own in the right margin, with the wordplay words highlighted in RED (VLM-read at 120dpi, staging-pubh10/vlm-census.txt: “Incidence” and “incidents” print red; “Prev” of “Prevalence” prints red with “all” bolded) — these are the source's own hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “Incidence looks at new cases (incidents).” — incidence counts INCIDENTS, the new events. (2) “Prevalence looks at all current cases.” — prevalence is the PREVailing total, everyone currently in the pool. The two KYP originals in the Memory section below are marked as such: “FAUCET, STAY, DRAIN” (the pool model: the faucet and the recurrence loop fill; mortality and cure drain; the water level is prevalence; the level ≈ faucet × stay) and “TWO LEVERS — THE FLOW AND THE STAY” (the situation-table router: incidence moves only with the flow; prevalence moves with the flow or the stay).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — one chronic disease, one short-duration disease, and the testing bridge",
      intro:
        "First Aid anchors the incidence–prevalence relationship with two printed example diseases and one testing rule; all three are high-yield anchors for stems that ask which way the numbers move.",
      items: [
        {
          lead: "THE DIABETES ANCHOR — chronic disease: prevalence > incidence",
          text: "“Prevalence > incidence for chronic diseases, due to large # of existing cases (eg, diabetes).” — a disease patients live with for decades accumulates a deep pool: every year's new cases add to a stock that barely drains. Diabetes is the printed exemplar: high and rising prevalence in population surveys with far smaller annual incidence — the pool model's slow-drain regime.",
        },
        {
          lead: "THE COMMON COLD ANCHOR — short duration disease: prevalence ≈ incidence",
          text: "“Prevalence ≈ incidence for short duration disease (eg, common cold).” — a disease that resolves in days drains as fast as it fills, so the snapshot (who has it today) roughly equals the flow (who catches it this season's day-count). The pool model's fast-drain regime — and the reason cold “prevalence” numbers are read almost like incidence numbers.",
        },
        {
          lead: "THE SURVIVAL-PREVALENCE PATTERN — when treating a disease raises its prevalence (KYP context)",
          text: "The ↑ survival time row's real-world shape: effective long-term therapy for a previously fatal chronic disease keeps patients in the prevalence pool for years — measured prevalence CLIMBS precisely because care improved, while incidence is unchanged. The exam's classic application is the antiretroviral era of HIV/AIDS (KYP context — not printed on the page): falling mortality, lengthened duration, rising prevalence. Falling prevalence with stable therapy should prompt the opposite question — which drain widened?",
        },
        {
          lead: "THE TESTING BRIDGE — prevalence ∼ pretest probability",
          text: "“Prevalence ∼ pretest probability. ↑ prevalence → ↑ PPV and ↓ NPV.” — the same test performs differently in different populations: in a high-prevalence clinic a positive result is more likely true (↑ PPV) and a negative result is less reassuring (↓ NPV). This margin block is the hinge between this page and the diagnostic-testing pages (sensitivity/specificity, PPV/NPV) that immediately precede it in the chapter — and it is why the ↑ diagnostic sensitivity row belongs to the same story: better case-finding raises measured prevalence.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A country introduces a national program of highly effective long-term therapy for a chronic disease. The therapy does not prevent new infections and does not cure, but dramatically extends the survival of patients who have it. Annual surveillance continues.",
        discriminator:
          "Duration-side lever — the stay lengthens; the faucet is untouched; the printed ↑ survival time row",
        concept: "Prevalence as a function of incidence × duration",
        answer:
          "Incidence unchanged (the printed “—”), prevalence ↑ — cases accumulate in the pool because ↑ survival time lengthens the average duration of disease: “Prevalence > incidence for chronic diseases, due to large # of existing cases.” Rising prevalence here is the signature of better care, not worse disease.",
      },
      {
        stem: "A health system replaces its screening assay with a markedly more sensitive one and applies it to the entire catchment population; the following year's report shows higher disease counts in every category, with no change in risk factors or transmission.",
        discriminator:
          "Counting lever — the test changed, not the disease; the printed ↑ diagnostic sensitivity row",
        concept: "Measurement effects on incidence and prevalence",
        answer:
          "Both incidence and prevalence ↑ (the printed pair for ↑ diagnostic sensitivity) — the more sensitive test finds existing cases that were being missed and catches more new cases as they arise; true disease frequency is unchanged. More cases COUNTED is not more disease CAUSED.",
      },
      {
        stem: "A region undertakes extensive vaccine administration against an airborne infectious disease and simultaneously reduces contact between infected and noninfected patients through isolation and ventilation.",
        discriminator:
          "Flow-side levers — two of the three printed (↓, ↓) rows in one stem: vaccine administration + ↓ contact",
        concept: "Interrupting new-case generation",
        answer:
          "Incidence ↓ and prevalence ↓ — both printed rows carry the (↓, ↓) pair: vaccination converts susceptibles to immunes and contact reduction severs transmission, so the faucet slows; with less water entering, the pool level falls through its usual mortality and cure drains.",
      },
      {
        stem: "The same rapid diagnostic test, with fixed sensitivity and specificity, is used at a sexually transmitted infection clinic in two cities; in city A the infection is common, in city B it is rare. A resident notes the test's predictive values differ between the cities.",
        discriminator:
          "The margin rule — prevalence ∼ pretest probability; the test did not change, the population did",
        concept: "Prevalence dependence of PPV and NPV",
        answer:
          "In the high-prevalence city (A): ↑ PPV and ↓ NPV; in the low-prevalence city (B): ↓ PPV and ↑ NPV. “Prevalence ∼ pretest probability. ↑ prevalence → ↑ PPV and ↓ NPV.” — sensitivity and specificity are properties of the test; predictive values are properties of the test AND the population.",
      },
    ],
    traps: [
      {
        a: "↑ survival time — (—, ↑): longer stay, deeper pool",
        b: "↑ mortality rate — (—, ↓): wider mortality drain, shallower pool",
        whyConfused:
          "Both are duration-side levers that print “—” for incidence; both change how long cases occupy the pool; the stems can even sound similar (“mortality improves/worsens”)",
        keyDifference:
          "Survival ↑ LENGTHENS the average duration of disease (cases stay longer → prevalence ↑); mortality ↑ SHORTENS it (cases leave faster → prevalence ↓). One narrows the drains, the other widens them",
        clue:
          "Ask which way the STAY moved: live longer with the disease → prevalence ↑; die faster of it → prevalence ↓. Incidence is “—” in both.",
      },
      {
        a: "New effective treatment started — (—, ↓): widens the cure drain",
        b: "Extensive vaccine administration — (↓, ↓): slows the faucet",
        whyConfused:
          "Both are “good news” interventions that lower prevalence, and both make headlines about the disease declining; examiners bank on the reader conflating prevention with treatment",
        keyDifference:
          "Treatment changes what happens AFTER someone already has the disease (duration-side: incidence “—”, prevalence ↓); vaccination changes whether NEW cases arise at all (flow-side: incidence ↓, prevalence ↓)",
        clue:
          "Prevention (vaccine, ↓ risk factors, ↓ contact) touches the FLOW → both columns ↓. Treatment touches the STAY → incidence “—”, prevalence ↓.",
      },
      {
        a: "Incidence — denominator: # of people at risk",
        b: "Prevalence — denominator: Total # of people in a population",
        whyConfused:
          "Both are “cases over people” fractions; stems that hand you a population containing already-diagnosed, cured, or immune people invite the wrong denominator",
        keyDifference:
          "Incidence counts NEW cases over those still AT RISK of becoming cases (existing cases cannot become new cases); prevalence counts EXISTING cases at a point in time over EVERYONE in the population",
        clue:
          "New/rate/at-risk/time-interval → incidence; existing/snapshot/whole-population/point-in-time → prevalence. “Incidence looks at new cases (incidents). Prevalence looks at all current cases.”",
      },
      {
        a: "↑ diagnostic sensitivity — (↑, ↑): more cases found",
        b: "A true outbreak or risk-factor surge — also more cases observed",
        whyConfused:
          "Both stems show rising counts of disease in surveillance data; the numbers move in the same direction for opposite reasons",
        keyDifference:
          "Sensitivity ↑ changes the COUNTING (measurement artifact — true frequency unchanged: both columns ↑ with no one newly sick); an outbreak changes the FLOW (true incidence ↑ from new transmission, prevalence following)",
        clue:
          "If the intervention in the stem is a TEST, assay, screening program, or case definition, it is a counting lever — route through ↑ diagnostic sensitivity, not through the faucet.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any “what happens to incidence and prevalence?” stem — eight printed situations and infinite invented ones",
        differentiator:
          "Route by the lever, not by the disease: does the situation touch the flow, the stay, or the counting?",
        correctPath:
          "Flow (vaccine, ↓ risk factors, ↓ contact) → (↓, ↓). Stay (↑ survival → longer; ↑ mortality, faster recovery, new treatment → shorter) → incidence “—”, prevalence ↑ or ↓. Counting (↑ diagnostic sensitivity, new assay, widened case definition) → (↑, ↑). Then check: “—” can appear only in the INCIDENCE column.",
      },
      {
        lookAlike: "An option list where “no change/no effect” appears for one of the two columns",
        differentiator:
          "The printed em dash is a real answer — but only ever for incidence",
        correctPath:
          "The four stay-side situations (↑ survival time, ↑ mortality rate, Faster recovery time, New effective treatment started) print “—” for incidence and still move prevalence. Prevalence has no “—” row: every one of the eight situations changes the level, because the level is downstream of both levers.",
      },
      {
        lookAlike: "A predictive-value question dressed as an epidemiology question (or vice versa)",
        differentiator:
          "The margin rule converts between the two languages: prevalence ∼ pretest probability",
        correctPath:
          "Anything that raises prevalence in the tested population (chronic disease, ↑ survival time, ↑ diagnostic sensitivity, high-prevalence clinic) raises PPV and lowers NPV for a fixed test; anything that lowers prevalence does the reverse. Sensitivity and specificity never move — they belong to the test, not the population.",
      },
    ],
    miniCase: {
      vignette:
        "A health ministry tracks a chronic viral disease in a fixed catchment population. This year it launches a national program: a multidrug regimen that does not prevent infection and does not eradicate the virus from infected patients, but converts the disease from uniformly fatal within two years into a manageable condition with a near-normal life expectancy. Surveillance the following year uses the same assay, the same case definition, and the same reporting pipeline as every prior year. An epidemiologist is asked to brief the minister on what the program will do to the disease's incidence and prevalence over the next decade.",
      question:
        "Which of the following best describes the expected effect of the program on disease incidence and prevalence in this population?",
      options: [
        {
          label: "A",
          text: "Incidence: no change; prevalence: ↑",
          correct: true,
          why: "CORRECT — the program is the printed ↑ survival time row: therapy extends survival without preventing onset, so the average duration of disease lengthens. The faucet (incidence) is untouched — the printed “—” — while cases accumulate in the pool: “Prevalence > incidence for chronic diseases, due to large # of existing cases.” The surveillance pipeline is unchanged (same assay, same case definition), so no counting artifact confounds the read.",
        },
        {
          label: "B",
          text: "Incidence: ↓; prevalence: ↓",
          why: "TEMPTING but wrong — this is the (↓, ↓) pair of the FLOW-side rows: extensive vaccine administration, ↓ risk factors, ↓ contact. The regimen is a treatment, not a prevention: nothing in the stem blocks infection or transmission, so new-case generation is unchanged. Falling prevalence would require the pool to drain faster — the opposite of survival extension.",
        },
        {
          label: "C",
          text: "Incidence: no change; prevalence: ↓",
          why: "TEMPTING but wrong — incidence “—” with prevalence ↓ is the signature of a SHORTENED stay: ↑ mortality rate, faster recovery time, or a new effective treatment that CURES. This regimen neither cures nor shortens life — it lengthens the stay. The prevalence ↓ half would be right for a curative therapy (the printed “New effective treatment started” row) but is backwards for survival-extending therapy.",
        },
        {
          label: "D",
          text: "Incidence: ↑; prevalence: ↑",
          why: "TEMPTING but wrong — both columns ↑ is the printed ↑ diagnostic sensitivity row: more cases COUNTED by a better test. The stem pins surveillance as unchanged (same assay, same case definition, same pipeline), so the counting lever is explicitly excluded; rising incidence would require genuinely more new infections, which a survival-extending regimen does not cause.",
        },
        {
          label: "E",
          text: "Incidence: ↑; prevalence: no change",
          why: "WRONG in both halves — this pair appears nowhere in the printed table, and it inverts the page's logic: incidence is the faucet and prevalence the water level it feeds, so incidence cannot durably rise while prevalence stays flat. The distractor tests whether you remember the direction of the dependence: prevalence is downstream of incidence × duration, never independent of it.",
        },
      ],
      reasoning:
        "The question tests the two-lever router. The intervention changes what happens AFTER infection (survival), not whether infection occurs (no prevention, no cure, no transmission change) and not how cases are counted (same assay and case definition). So: the flow is untouched → incidence “—”; the stay lengthens → average duration of disease rises → the pool deepens → prevalence ↑. The printed anchors confirm the arithmetic: with duration rising, “Prevalence = incidence × duration of the disease” (and its exact form, Prevalence / (1 – prevalence) = Incidence rate × average duration of disease) forces prevalence upward at fixed incidence — the chronic-disease regime the page illustrates with diabetes. Option B mistakes treatment for prevention; option C mistakes longer survival for faster cure; option D imports a counting artifact the stem explicitly rules out; option E inverts the causal order of faucet and level.",
    },
  },
  mnemonics: [
    {
      code: "Incidence looks at new cases (incidents).",
      meaning:
        "FIRST AID'S OWN sentence, printed in the page's right margin with the wordplay words in red (VLM-read at 120dpi, staging-pubh10/vlm-census.txt — carried verbatim, attributed): incidence counts INCIDENTS — the new events, # of new cases over # of people at risk, per unit of time.",
      memorizes:
        "The numerator and the time structure of incidence in one sentence: NEW cases, a flow",
      whenToUse:
        "Any stem asking what incidence measures, any denominator question (people AT RISK, not the total population), and any “per unit of time” rate question; pairs with the formula “Incidence = # of new cases / # of people at risk (per unit of time).”",
      clinical:
        "Incidence is the measure of outbreak detection and prevention trials (KYP context): vaccination and risk-factor reduction show their effect on incidence first — the faucet slows before the level does.",
    },
    {
      code: "Prevalence looks at all current cases.",
      meaning:
        "FIRST AID'S OWN sentence, printed in the page's right margin with “Prev” in red and “all” bolded (VLM-read at 120dpi — carried verbatim, attributed): prevalence is the PREVailing total — # of existing cases at a point in time over the total # of people in a population.",
      memorizes:
        "The numerator and the snapshot structure of prevalence in one sentence: EXISTING cases, a stock",
      whenToUse:
        "Any stem asking what prevalence measures, any “at a point in time” question, and any survey/snapshot study (the cross-sectional design measures it); pairs with the formula “Prevalence = # of existing cases (at a point in time) / Total # of people in a population.”",
      clinical:
        "Prevalence is the measure of disease burden and service planning (KYP context): chronic-disease programs, screening coverage, and clinic staffing are sized to the pool — prevalence — while prevention targets the stream.",
    },
    {
      code: "FAUCET, STAY, DRAIN",
      meaning:
        "A KYP ORIGINAL — the pool figure in three words: the FAUCET (incidence, with the recurrence loop pouring relapsed cases back in) fills the pool; the DRAINS (mortality and cure) empty it; the STAY (average duration of disease) is how long a drop remains; and the water level is PREVALENCE. The level ≈ faucet × stay: “Prevalence = incidence × duration of the disease.”",
      memorizes:
        "The pool model's four streams, which direction each flows (incidence + recurrence in; mortality + cure out), and the prevalence–incidence–duration relationship",
      whenToUse:
        "Any question about why prevalence exceeds incidence (diabetes — long stay) or approximates it (common cold — short stay), any pool-figure question, and any stem where a chronic disease's prevalence climbs despite stable incidence",
        clinical:
        "The drains explain prevalence's moral neutrality (KYP context): the level falls when cure speeds up — and when mortality does. A falling prevalence in a chronic disease registry should always prompt the question: which drain widened?",
    },
    {
      code: "TWO LEVERS — THE FLOW AND THE STAY",
      meaning:
        "A KYP ORIGINAL — the situation-table router: every situation pulls one of two levers. THE FLOW (new-case generation): vaccine administration, ↓ risk factors, ↓ contact → incidence ↓ and prevalence ↓. THE STAY (average duration): ↑ survival time (longer stay → prevalence ↑), ↑ mortality rate, faster recovery, new effective treatment (shorter stay → prevalence ↓) — all four print “—” for incidence. (Plus the counting exception: ↑ diagnostic sensitivity → both ↑, because the test changed, not the disease.)",
      memorizes:
        "All 8 printed rows and their glyph pairs, as two levers plus one measurement exception: flow → (↓, ↓); stay → (—, ↑ or ↓); counting → (↑, ↑)",
      whenToUse:
        "Any “what happens to incidence and prevalence if…” option list — route the lever first, then read the columns; and remember the printed regularities: “—” only ever appears in the INCIDENCE column, and prevalence moves in all eight rows",
      clinical:
        "The router generalizes off-page (KYP context): quarantine, needle-exchange, and screening programs are all flow- or counting-side; improved ICU care is stay-side (survival ↑ → prevalence ↑). Classify the intervention, and the two arrows follow.",
    },
  ],
  rapidReview: {
    s30: [
      "Incidence = # of new cases / # of people at risk (per unit of time) — the flow of new cases",
      "Prevalence = # of existing cases (at a point in time) / Total # of people in a population — the stock of current cases",
      "Prevalence / (1 – prevalence) = Incidence rate × average duration of disease; simplified: Prevalence = incidence × duration of the disease",
      "Pool model: INCIDENCE + RECURRENCE flow in; MORTALITY + CURE drain out; the water level is prevalence",
      "Prevalence > incidence for chronic diseases, due to large # of existing cases (eg, diabetes); Prevalence ≈ incidence for short duration disease (eg, common cold)",
      "Prevalence ∼ pretest probability; ↑ prevalence → ↑ PPV and ↓ NPV",
      "The four “—” (no effect on incidence) rows: ↑ survival time (prevalence ↑), ↑ mortality rate (↓), faster recovery time (↓), new effective treatment started (↓) — all stay-side levers",
      "The three (↓, ↓) flow rows: extensive vaccine administration, ↓ risk factors, ↓ contact between infected and noninfected patients with airborne infectious disease; plus ↑ diagnostic sensitivity → (↑, ↑), the counting row",
    ],
    m3: [
      "“Incidence looks at new cases (incidents). Prevalence looks at all current cases.” — First Aid's own margin sentences (carried attributed)",
      "FAUCET, STAY, DRAIN — incidence fills, mortality/cure drain, duration is the stay, prevalence is the level (KYP)",
      "TWO LEVERS — THE FLOW AND THE STAY — flow rows (↓, ↓); stay rows (—, ↑/↓); sensitivity counts (↑, ↑) (KYP)",
      "Prevalence = incidence × duration — the pool deepens with the stay: diabetes (P > I); the common cold drains fast (P ≈ I)",
    ],
    m10: [
      "The em dash “—” (no effect) prints ONLY in the INCIDENCE column — in exactly the four stay-side rows; the PREVALENCE column moves in all eight situations",
      "The big formula prints its stacked fraction LEFT of the equals sign: Prevalence / (1 – prevalence) = Incidence rate × average duration of disease — algebraically identical to Prevalence = Incidence rate × average duration of disease / (1 – prevalence)",
      "The figure's second inflow is RECURRENCE — a loop from the cure side re-entering the pool (arrowhead down into the water); the brief's “outflow” reading was corrected to print",
      "Prevalence ∼ pretest probability is the bridge to the diagnostic-testing pages: for a fixed test, the population's prevalence sets the predictive values — ↑ prevalence → ↑ PPV and ↓ NPV",
    ],
  },
  recall: [
    {
      q: "State the two printed formulas for incidence and prevalence, exactly as printed.",
      a: "Incidence = # of new cases / # of people at risk (per unit of time). Prevalence = # of existing cases (at a point in time) / Total # of people in a population.",
    },
    {
      q: "State the printed relationship between prevalence, incidence, and duration — both the big formula and the simplified sentence.",
      a: "Prevalence / (1 – prevalence) = Incidence rate × average duration of disease (printed as a stacked fraction left of the equals sign; algebraically identical to Prevalence = Incidence rate × average duration of disease / (1 – prevalence)). Simplified: Prevalence = incidence × duration of the disease.",
    },
    {
      q: "Why is prevalence > incidence for chronic diseases, and what is the printed example?",
      a: "Due to large # of existing cases (eg, diabetes) — long average duration of disease lets cases accumulate in the pool, so the water level (prevalence) rises above the faucet's flow (incidence).",
    },
    {
      q: "Why does prevalence ≈ incidence for short duration disease, and what is the printed example?",
      a: "Short-duration disease (eg, common cold) drains as fast as it fills — the pool's residence time is so brief that the snapshot (existing cases) roughly equals the flow (new cases).",
    },
    {
      q: "In the pool figure, which streams flow INTO the prevalence pool and which flow OUT?",
      a: "IN: Incidence (the faucet of new cases) and Recurrence (the loop that re-enters the pool from the cure side — arrowhead down into the water). OUT: Mortality and Cure (the two drains below the pool).",
    },
    {
      q: "What is the printed effect of ↑ prevalence on predictive values, and the margin rule it follows from?",
      a: "↑ prevalence → ↑ PPV and ↓ NPV, following from “Prevalence ∼ pretest probability.” — for a fixed test, predictive values depend on the population's prevalence; sensitivity and specificity do not.",
    },
    {
      q: "Which four situations print “—” (no effect) in the INCIDENCE column, and what do they share?",
      a: "↑ survival time, ↑ mortality rate, faster recovery time, new effective treatment started — all four are stay-side (duration) levers: they change how long cases remain in the pool, not how many new cases arise.",
    },
    {
      q: "What are the printed (INCIDENCE, PREVALENCE) glyph pairs for: extensive vaccine administration; ↑ diagnostic sensitivity; and new effective treatment started?",
      a: "Extensive vaccine administration → (↓, ↓). ↑ diagnostic sensitivity → (↑, ↑) — the counting row: more cases found, not more disease. New effective treatment started → (—, ↓) — the cure drain widens, the faucet is untouched.",
    },
  ],
  related: [
    {
      title: "Quantifying risk — the arithmetic that starts from these counts",
      note:
        "Incidence in the exposed and unexposed is the raw material of relative risk and attributable risk; prevalence feeds the 2×2 grid that odds ratios are read from. This page defines the two counts; the quantifying-risk page divides them.",
      topicId: "quantifying-risk",
    },
    {
      title: "Vital statistics and populations — the mortality drain, measured",
      note:
        "The Mortality stream of the pool is quantified one page family over: mortality rates, case fatality rate, infant and maternal mortality, and years of potential life lost. The situation table's ↑ mortality rate row is the bridge: the drain's width in statistical clothing.",
      topicId: "vital-statistics-populations",
    },
    {
      title: "Diagnostic test performance — the pretest-probability bridge",
      note:
        "The margin block “Prevalence ∼ pretest probability. ↑ prevalence → ↑ PPV and ↓ NPV.” is completed by the sensitivity/specificity/PPV/NPV machinery: the ROC curve page immediately precedes this one in the chapter, and the ↑ diagnostic sensitivity row is this page's counting-side echo of it.",
      topicId: "diagnostic-test-performance",
    },
    {
      title: "Observational studies — the designs that harvest each measure",
      note:
        "Book 256's printed table assigns the measures: cross-sectional studies measure disease prevalence; cohort studies measure disease incidence (and relative risk). This page defines what those two measures ARE — the snapshot and the stream the designs are built to capture.",
      topicId: "observational-studies",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — diagnostic testing",
      connection:
        "The margin rule “Prevalence ∼ pretest probability. ↑ prevalence → ↑ PPV and ↓ NPV.” is the epidemiologic half of predictive-value logic: sensitivity and specificity are test properties, but PPV and NPV are population properties. Every screening question that changes the tested population's prevalence (targeting a high-risk clinic, widening case-finding, ↑ diagnostic sensitivity) changes the predictive values through this page's rule.",
    },
    {
      subject: "Infectious disease and public health — vaccination and transmission control",
      connection:
        "Two of the situation table's three (↓, ↓) rows are infectious-disease interventions: extensive vaccine administration and ↓ contact between infected and noninfected patients with airborne infectious disease — herd immunity and transmission interruption as faucet-slowing levers. The common cold, the printed short-duration example, is the airborne virus whose prevalence ≈ incidence because its stay is days.",
    },
    {
      subject: "Endocrinology — diabetes mellitus as the chronic-disease exemplar",
      connection:
        "Diabetes is the page's printed chronic-disease anchor: “Prevalence > incidence for chronic diseases, due to large # of existing cases (eg, diabetes).” — decades-long disease duration with rising population survival keeps the prevalence pool deep, which is why diabetes prevalence figures in surveillance dwarf its annual incidence figures.",
    },
    {
      subject: "Chronic disease management and survival — the treatment-prevalence paradox",
      connection:
        "The ↑ survival time row generalizes to every chronic-disease success story (the antiretroviral era of HIV/AIDS is the classic — KYP context, not printed): therapy that extends survival without preventing onset raises measured prevalence while incidence holds at “—”. Registry readers must distinguish a deepening pool (better survival) from a faster faucet (more disease) before interpreting any prevalence trend.",
    },
  ],
};
