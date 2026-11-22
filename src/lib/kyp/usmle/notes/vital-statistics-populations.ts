import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 1, topic 5 (pubh5). Source: UPPER PORTION ONLY of
// pdf page 281 / book 259 (Part 1) — a PINNED PAGE-SPLIT. Scope runs from the
// top of the page — the "Quantifying risk (continued)" heading (raw text-layer
// line 9) — through the ENTIRE "Demographic transition" block (definition
// sentence, the three population pyramids, and the four transition rows,
// ending at raw line 98), and ENDS immediately BEFORE the "Likelihood ratio"
// heading (raw line 100). The Likelihood ratio and Kaplan-Meier blocks below
// the boundary belong to the likelihood-ratios and survival-analysis topics
// (parallel tasks) — no evidence quote in this note crosses the boundary, and
// the footer slug (FAS1_2026_06-PubHealth.indd 259, raw line 124) sits below
// it and is deliberately NOT quoted. BLOCKS OWNED: (1) the final two rows of
// the Quantifying risk table — Mortality rate ("Number of deaths (in general
// or due to specific cause) within a population over a defined period."; 80
// deaths in a town of 10,000 over 2 years → 4 per 1000 per year; formula
// "Deaths/1000 people per year.") and Attack rate ("Proportion of exposed
// people who become ill."; 80 exposed, 60 ill → 75%; formula the stacked
// fraction "People who become ill / Total people exposed"); (2) the
// Demographic transition block — the one-sentence definition, the THREE
// POPULATION PYRAMIDS (Growing = classic wide-based pyramid, Stable =
// rectangle, Declining = narrow base with a bulging middle), and the four
// transition rows across the three stages: Birth rate ↑↑/↓/↓↓, Mortality rate
// ↑/↓/↓, Life expectancy Short/Long/Long, Population Growing/Stable/Declining.
// CENSUS (pdfimages): ZERO raster images — the pyramids are pure vector art →
// ORIGINAL_KYP_REDRAW (Male/Female horizontal bars by Age, three shapes); the
// two tables → ORIGINAL KYP ADAPTATION. VLM AVAILABLE this session (glm-4.6v
// at 120dpi, ONE full-page pass, staging-pubh5/vlm-census.txt): confirmed both
// continued rows verbatim, the definition sentence verbatim, THREE pyramids
// left→right = wide-based (growing) / rectangular (stable) / narrow-based with
// bulging middle (declining), each pyramid built of stacked horizontal bars
// with the Male half shaded blue and the Female half pink, the transition
// rows with the printed arrows (Birth rate ↑↑/↓/↓↓; Mortality rate ↑/↓/↓),
// stage columns NOT separately labeled (the Population row + the shapes carry
// the stages), the "Likelihood ratio" heading immediately following the
// transition table (boundary confirmed), NO margin notes, NO mnemonics, NO
// asterisk footnotes, NO raster images; color furniture = blue/pink pyramid
// bars, "Male" in blue and "Female" in pink, bold blue headings and row
// labels, light-blue shading on some cells.
// PRINTED-TEXT QUIRKS carried verbatim + documented: (1) "SEC TION II"
// header-space extraction artifact (known, carried as-is); (2) the
// small-caps "M" extracts lowercase in the banner and the table headers —
// "▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS", "TERm",
// "DEFINITION", "EXAmPLE", "FORmULA" (known FA-rendering artifact, carried
// as-is); (3) the transition-table arrows carry C1 control bytes in the raw
// text layer — birth rate prints "\x8f↑\x8f↑" / "\x90↓" / "\x90↓\x90↓" and
// mortality rate "\x8f↑" / "\x90↓" / "\x90↓" — the \x8f/\x90 bytes are
// stripped by the norm() verification layer; the PRINTED arrows are ↑↑ / ↓ /
// ↓↓ and ↑ / ↓ / ↓ (VLM-confirmed); (4) the three pyramids' axis labels
// extract INTERLEAVED across the figures in the text layer — "Male", "Age",
// "Age", "Age", "Population pyramid", "FemaleMale", "Female", "Male Female",
// "Population % Population", "Population", "%", "%" (raw lines 49-66) —
// i.e. the text layer carries Age ×3, Male ×3, Female ×3 and Population %
// ×3, one set per pyramid, shuffled across the three figures.
// ADJUDICATIONS (documented in the manifest too): (1) the pyramid INTERLEAVE —
// the VLM saw the vertical "Age" axis and the Male/Female legend most clearly
// on the LEFTMOST pyramid and a "← Population % →" axis under the middle one;
// the text layer's label inventory (Age ×3, Male ×3, Female ×3, Population %
// ×3) governs: EACH pyramid carries the full Male/Female/Age/Population %
// axis furniture, and the KYP redraw gives all three pyramids the complete
// axis set; (2) the three pyramid SHAPES and the left→right stage order
// (Growing → Stable → Declining, matching the Population row) are pinned by
// the VLM census — the shapes do not exist in the text layer at all; (3) the
// VLM misread the footer slug as "FA21_2026_06-PubHealth.indd" — the text
// layer prints "FAS1_2026_06-PubHealth.indd 259" and governs (the slug sits
// below this topic's boundary and is not quoted either way); (4) the VLM
// noted a small "graphic placeholder icon" at the lower right of the third
// pyramid — a glyph in the source artwork, NOT reproduced (zero-raster
// redraw); (5) case fatality rate is NOT on this page — it prints on the
// facing page (book 258, the quantifying-risk topic) and is referenced here
// only as clearly-marked KYP context for the denominator family; (6) the
// mortality-rate example prints "4 per 1000 per year" with no comma in 1000 —
// carried verbatim; the arithmetic dissection (80/10,000 → 8 per 1000 over
// the 2-year window → ÷2 → 4 per 1000 per year) is KYP's, not printed.
// PROVENANCE SPLIT: VERBATIM = the two continued table rows (all four cells
// each), the demographic-transition definition sentence, the four transition
// rows with their printed arrows and words, the column headers; FA-OWN (color
// furniture, described not reproduced) = blue/pink pyramid halves, blue
// Male/Female legend letters, bold blue headings, light-blue cell shading;
// KYP-ORIGINAL (marked as such where they appear) = the arithmetic
// dissections of both worked examples, the denominator decoder (population /
// exposed / cases), the four-move pyramid-reading protocol, both mechanism
// flows, the entire exam layer (patterns/traps/pivots/miniCase), the four
// ALL-CAPS mnemonics (the page prints NO mnemonics of its own — VLM-confirmed
// — so all four are KYP originals), and the registry visual
// vital-statistics-map (pubhealth-p5.tsx). DrugCards: none — the page prints
// no drug rows (folded by nature, documented in the manifest).

export const vitalStatisticsPopulations: KypUsMLENote = {
  id: "vital-statistics-populations",
  title: "Mortality, Attack Rates, and Demographic Transition",
  subtitle:
    "The quantifying-risk table closes with two statistics that stop using the 2×2 table and start using whole populations — and the page then zooms all the way out to the shape of a nation. The mortality rate counts deaths in a population over a defined period and forces them onto a per-1000-per-year scale: 80 deaths in a town of 10,000 over 2 years is NOT 8 per 1000 — the formula's per-year demands annualization, giving 4 per 1000 per year. The attack rate is an outbreak statistic with a different denominator entirely: of the people EXPOSED, what proportion became ill — 60 ill of 80 exposed is 75%, and the town's 10,000 never enters the fraction. Then the demographic transition: as a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees — birth rate swings twice (↑↑ then ↓↓), mortality moves one arrow at a time (↑ then ↓) — and the differential reshapes the population pyramid through three printed shapes: a wide-based pyramid (growing), a rectangle (stable), and a narrow-based, middle-bulged inverted form (declining), with life expectancy flipping Short → Long along the way. Learn to read the BASE of a pyramid and you can read a country's future.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public health sciences — epidemiology and biostatistics: the two population-level vital statistics (mortality rate's per-1000-per-year scaling with its time-window trap; attack rate's exposed-cohort denominator) and the demographic transition — the three population-pyramid shapes (growing / stable / declining) with the birth-rate, mortality-rate, life-expectancy, and population rows across development stages",
  difficulty: 1,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 259 (upper) (Epidemiology and Biostatistics: Quantifying risk (continued); Demographic transition)",
  tags: [
    "vital statistics",
    "mortality rate",
    "attack rate",
    "demographic transition",
    "population pyramid",
    "growing population",
    "stable population",
    "declining population",
    "birth rate",
    "life expectancy",
    "age composition",
    "outbreak investigation",
    "cause-specific mortality",
    "epidemiology",
    "biostatistics",
    "public health",
  ],
  core: {
    what:
      "The UPPER PORTION of book 259, carried whole. BLOCK 1 — the final two rows of the “Quantifying risk (continued)” table (columns TERm / DEFINITION / EXAmPLE / FORmULA): “Mortality rate — Number of deaths (in general or due to specific cause) within a population over a defined period. — If 80 people in a town of 10,000 die over 2 years, mortality rate is 4 per 1000 per year. — Deaths/1000 people per year.” and “Attack rate — Proportion of exposed people who become ill. — If 80 people in a town are exposed and 60 people become ill, attack rate is 75%. — People who become ill / Total people exposed.” BLOCK 2 — “Demographic transition”: “As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population,” drawn as THREE population pyramids (Male/Female horizontal bars by Age) — wide-based triangle = Growing, rectangle = Stable, narrow base with bulging middle = Declining — over a four-row transition table: Birth rate ↑↑ / ↓ / ↓↓ · Mortality rate ↑ / ↓ / ↓ · Life expectancy Short / Long / Long · Population Growing / Stable / Declining. The “Likelihood ratio” heading below the transition table is the pinned boundary of this topic.",
    why:
      "These two rows and one figure are First Aid's bridge from the 2×2 table to POPULATION-LEVEL measurement. Every measure on the facing page (odds ratio, relative risk, attributable risk, NNT, case fatality rate) conditions on the 2×2 table's cells; the mortality rate and attack rate replace that machinery with plain counting — but each hides its own trap. The mortality rate's trap is the CLOCK: the formula prints “Deaths/1000 people per year,” so a 2-year observation window must be divided out (80/10,000 scaled to 1000 is 8 per 1000 across the window, and 8 ÷ 2 years = 4 per 1000 per year — the printed example's own arithmetic). The attack rate's trap is the DENOMINATOR: it divides by the exposed (60 ill of 80 exposed = 75%), never by the town, the attendees, or the cases — which is exactly what makes it the outbreak investigator's first number (KYP context: point-source foodborne-outbreak tables rank foods by attack rate among those who ate each item). The demographic transition is the page's other scale-jump: the SAME mortality rate whose computation you just learned is, at the scale of nations, the lever that reshapes the age pyramid — development pulls mortality down first (one ↓ arrow), population swells while births stay high, then fertility falls harder (the birth row's double ↓↓ arrow, the “varying degrees” of the printed sentence), and the pyramid inverts. The exam asks all of it: compute the rate, name the denominator, and match a pyramid's silhouette to its birth-and-mortality pattern.",
    keyIdea:
      "READ THE DENOMINATOR, THEN READ THE BASE. MOVE 1 — MORTALITY RATE = deaths ÷ POPULATION, scaled per 1000, ANNUALIZED: deaths × 1000 ÷ (population × years observed) — the printed example 80 deaths / 10,000 people / 2 years = 4 per 1000 per year; the “in general or due to specific cause” phrase makes it all-cause OR cause-specific. MOVE 2 — ATTACK RATE = ill ÷ EXPOSED, no clock in the formula: 60/80 = 75%; it is a proportion (an incidence risk among the exposed during an outbreak), so never divide by the town or multiply by a time window. MOVE 3 — THE DENOMINATOR FAMILY sorts every “rate” on these facing pages: population (mortality rate), exposed (attack rate), cases (case fatality rate, book 258). MOVE 4 — THE DEMOGRAPHIC TRANSITION reads through the BASE of the pyramid: wide base = many children = births far exceed deaths = GROWING (Birth rate ↑↑, Mortality rate ↑, Life expectancy Short); rectangle = births ≈ deaths = STABLE (Birth ↓, Mortality ↓, Life expectancy Long); narrow base with a bulging middle = the cohort has aged, births fall below deaths = DECLINING (Birth rate ↓↓, Mortality rate ↓, Life expectancy Long). BIRTH RATE SWINGS TWICE; mortality moves one arrow at a time.",
  },
  mechanisms: [
    {
      id: "vital-rate-denominators-map",
      title:
        "The two vital statistics and their denominators: a population with a clock vs an exposed cohort without one",
      context:
        "The printed final two rows of the Quantifying risk table (book 259 upper)",
      flow: {
        nodes: [
          {
            id: "rows",
            label:
              "THE PRINTED ROWS — two rates, two denominators, two clocks",
            sublabel:
              "Input — the quantifying-risk table's last two rows, verbatim: “Mortality rate — Number of deaths (in general or due to specific cause) within a population over a defined period … Deaths/1000 people per year.” and “Attack rate — Proportion of exposed people who become ill … People who become ill / Total people exposed.” Both leave the 2×2 table behind: the denominators are now a whole population and an exposed group.",
            variant: "input",
          },
          {
            id: "mortality",
            label:
              "MORTALITY RATE — deaths over a POPULATION, forced onto a per-1000-per-year scale",
            sublabel:
              "Process — the formula “Deaths/1000 people per year” carries TWO operations, and the printed example runs both: (1) SCALE to 1000 — 80 deaths in a town of 10,000 = 8 per 1000 across the observation window; (2) ANNUALIZE — the window is 2 years, so 8 ÷ 2 = 4 per 1000 per year, exactly the printed answer. The definition's “in general or due to specific cause” means the numerator can be all deaths or cause-specific deaths; the denominator stays the whole population (mid-period — KYP context).",
            variant: "process",
          },
          {
            id: "attack",
            label:
              "ATTACK RATE — the ill over the EXPOSED, no clock anywhere in the formula",
            sublabel:
              "Process — “Proportion of exposed people who become ill”: 60 ill of 80 exposed = 3/4 = 75%, the printed answer. Despite the name “rate,” the formula has no time unit — it is a PROPORTION (an incidence risk among the exposed during one outbreak), so the exam's time-window decorations are noise. The denominator is everyone who was exposed, whether or not they became ill.",
            variant: "process",
          },
          {
            id: "family",
            label:
              "THE DENOMINATOR FAMILY — population / exposed / cases",
            sublabel:
              "Target — what separates the mortality rate from the attack rate from the case fatality rate (book 258, KYP context for the CFR): the SAME numerator (deaths, or illness) over three different denominators — the whole population, the exposed group, the diagnosed cases. Every “which rate is this?” question on these facing pages is a denominator question.",
            variant: "target",
          },
          {
            id: "read",
            label:
              "READ THE DENOMINATOR FIRST — then apply (or refuse) the clock",
            sublabel:
              "Output — a two-question decoder for any vital statistic: (1) WHAT is being divided — population, exposed, or cases? (2) IS there a time unit in the formula? Mortality rate: population + per year (annualize — divide out the observation window). Attack rate: exposed + no time unit (a pure proportion — never annualize). The decoder answers the exam's two planted traps: dividing 60 by the town's 10,000 (wrong denominator) and reporting 8 per 1000 as a per-year rate (wrong clock).",
            variant: "output",
          },
        ],
        edges: [
          { from: "rows", to: "mortality", label: "the row names a population + a period →" },
          { from: "rows", to: "attack", label: "the row names the exposed →" },
          { from: "mortality", to: "family", label: "denominator = the whole population" },
          { from: "attack", to: "family", label: "denominator = everyone exposed" },
          { from: "family", to: "read", label: "denominator first, clock second" },
        ],
      },
    },
    {
      id: "development-pyramid-map",
      title:
        "How development reshapes the pyramid: birth and mortality rates decline to varying degrees",
      context:
        "The printed Demographic transition block (book 259 upper) — the definition sentence, the three pyramids, and the four transition rows",
      flow: {
        nodes: [
          {
            id: "sentence",
            label:
              "THE PRINTED SENTENCE — “As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population.”",
            sublabel:
              "Input — the block's whole thesis in one line: the lever is development, the moving parts are TWO rates, the qualifier is “TO VARYING DEGREES” (the birth rate and the mortality rate do not fall together or equally), and the output is the AGE COMPOSITION — the shape of the population pyramid.",
            variant: "input",
          },
          {
            id: "mortality-falls",
            label:
              "DEVELOPMENT DROPS MORTALITY FIRST — the single-arrow row (↑ → ↓ → ↓)",
            sublabel:
              "Process — sanitation, nutrition, infection control, and medicine (KYP context for the drivers) pull the death rate down early — the Mortality rate row prints a single ↑ in stage 1 and a single ↓ in stages 2 and 3, never a double arrow. Its downstream print is the Life expectancy row: Short → Long → Long. Survivors accumulate at every age.",
            variant: "process",
          },
          {
            id: "birth-swings",
            label:
              "BIRTH RATE SWINGS TWICE — the double-arrow row (↑↑ → ↓ → ↓↓)",
            sublabel:
              "Process — the Birth rate row is the only one with DOUBLE arrows: ↑↑ pre-transition (births far exceed deaths → the population GROWS) and ↓↓ post-transition (fertility falls below mortality → the population DECLINES), with a single ↓ at the balanced middle. This is the printed sentence's “varying degrees” made literal: birth rate moves two arrows where mortality moves one.",
            variant: "process",
          },
          {
            id: "age-mix",
            label:
              "THE AGE COMPOSITION REBUILDS — base → rectangle → inverted",
            sublabel:
              "Process — the differential between the two rates re-sorts the age bands: births far above deaths → many children, few elders → WIDE-BASED pyramid; births ≈ deaths → even bars up the ages → RECTANGLE; births below deaths → few children, a fat cohort moving up the chart → NARROW BASE WITH A BULGING MIDDLE (an aging, shrinking population). Each pyramid is drawn as Male/Female horizontal bars by Age (Male left, Female right — the printed axis furniture).",
            variant: "process",
          },
          {
            id: "shapes",
            label:
              "THE THREE PRINTED SHAPES — Growing / Stable / Declining, read off the BASE",
            sublabel:
              "Output — the Population row names what each silhouette means: Growing (wide-based pyramid), Stable (rectangle), Declining (narrow base). The reading rule: the BASE of a pyramid is the country's future — a wide base means the next generation is bigger than this one; a base narrower than the middle means the next generation is smaller. Given any pyramid on the exam, match its silhouette to the row set: Birth rate ↑↑/↓/↓↓ · Mortality rate ↑/↓/↓ · Life expectancy Short/Long/Long · Population Growing/Stable/Declining.",
            variant: "output",
          },
        ],
        edges: [
          { from: "sentence", to: "mortality-falls", label: "development pulls deaths down first →" },
          { from: "sentence", to: "birth-swings", label: "“to varying degrees” — birth swings twice →" },
          { from: "mortality-falls", to: "age-mix", label: "survivors accumulate; expectancy Short → Long" },
          { from: "birth-swings", to: "age-mix", label: "the birth–death gap sets each age band" },
          { from: "age-mix", to: "shapes", label: "the base reads the future" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "vital-statistics-map",
      title:
        "The vital-statistics pair and the three pyramids: two formula cards with their worked examples, and the demographic transition redrawn (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 259's upper portion: the two vital-statistic formula cards side by side — Mortality rate (definition verbatim; the printed worked example 80 deaths / 10,000 people / 2 years dissected into its two operations: ×1000 → 8 per 1000 across the window, ÷2 years → 4 per 1000 per year) and Attack rate (definition verbatim; 60 ill of 80 exposed = 75%; the fraction People who become ill / Total people exposed) with the denominator decoder strip beneath; then the three population pyramids redrawn as original KYP vector art — Growing (wide-based triangle), Stable (rectangle), Declining (narrow base, bulging middle), each with Male (left) / Female (right) horizontal bars by Age and the Population % axis; and the four transition rows as a banded table beneath (Birth rate ↑↑/↓/↓↓, Mortality rate ↑/↓/↓, Life expectancy Short/Long/Long, Population Growing/Stable/Declining).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 281 — the three pyramids are pure vector art in the source, redrawn here as ORIGINAL_KYP_REDRAW (Male/Female horizontal bars by Age; three shapes pinned by the VLM census: wide-based / rectangular / narrow-based with bulging middle, left→right Growing → Stable → Declining). The source figure's axis labels extract INTERLEAVED in the text layer (Male, Age ×3, Population pyramid, FemaleMale, Female, Male Female, Population % Population, % …); the interleave is documented in the note header and the manifest — the KYP redraw gives each of the three pyramids the complete Male / Female / Age / Population % axis set. The two tables are an ORIGINAL KYP ADAPTATION — every printed word is preserved (both worked examples, both formulas, all four transition rows with their arrows) but the layout is KYP's; the full rows are additionally carried verbatim in the note's two table blocks. The arithmetic dissections and the four-move protocol are KYP originals; the page prints no mnemonics of its own (VLM-confirmed).",
    },
    {
      kind: "table",
      title:
        "Book 259 — the printed “Quantifying risk (continued)” table, final two rows carried verbatim (every printed word)",
      intro:
        "The two rows that close the quantifying-risk table, in printed order — Mortality rate, then Attack rate. The printed column headers carry the small-caps “m” extraction quirk (TERm / DEFINITION / EXAmPLE / FORmULA); the header words are TERM / DEFINITION / EXAMPLE / FORMULA. The attack-rate formula prints in the source as a stacked fraction (People who become ill over Total people exposed) — carried here with a division slash.",
      columns: ["TERM", "DEFINITION", "EXAMPLE", "FORMULA"],
      rows: [
        [
          "Mortality rate",
          "Number of deaths (in general or due to specific cause) within a population over a defined period.",
          "If 80 people in a town of 10,000 die over 2 years, mortality rate is 4 per 1000 per year.",
          "Deaths/1000 people per year.",
        ],
        [
          "Attack rate",
          "Proportion of exposed people who become ill.",
          "If 80 people in a town are exposed and 60 people become ill, attack rate is 75%.",
          "People who become ill / Total people exposed",
        ],
      ],
      caption:
        "Verbatim carry of the table's final two rows (pdf 281, raw lines 18–41), inside this topic's pinned upper-portion boundary. Documented quirks: the printed column headers extract as “TERm / DEFINITION / EXAmPLE / FORmULA” (small-caps artifact, carried as-is in the header row label here as TERM/DEFINITION/EXAMPLE/FORMULA in plain caps); the mortality example prints “4 per 1000 per year” with no comma in 1000 (carried verbatim); the attack-rate formula prints as a stacked fraction in the source. The rows above these two (odds ratio through case fatality rate) print on book 258 and belong to the quantifying-risk topic — only these final two rows fall on book 259.",
    },
    {
      kind: "table",
      title:
        "Book 259 — the printed Demographic transition table: four rows across the three development stages",
      intro:
        "Beneath the three population pyramids, the block prints four rows whose three value-columns correspond, left→right, to the three pyramids — the stage labels are not printed as column headers; they come from the Population row (Growing / Stable / Declining) and the pyramid shapes themselves (wide-based / rectangular / narrow-based), as pinned by the VLM census. The arrows print with leading control bytes in the raw text layer (\x8f↑\x8f↑ etc.); the printed arrows are ↑↑ / ↓ / ↓↓ (birth rate) and ↑ / ↓ / ↓ (mortality rate).",
      columns: [
        "ROW (printed)",
        "STAGE 1 — wide-based pyramid",
        "STAGE 2 — rectangular pyramid",
        "STAGE 3 — narrow-based pyramid",
      ],
      rows: [
        ["Birth rate", "↑↑", "↓", "↓↓"],
        ["Mortality rate", "↑", "↓", "↓"],
        ["Life expectancy", "Short", "Long", "Long"],
        ["Population", "Growing", "Stable", "Declining"],
      ],
      caption:
        "Verbatim carry of the four printed transition rows (pdf 281, raw lines 68–98). Documented quirks and adjudications: (1) the stage columns are NOT separately labeled in print — the Growing/Stable/Declining identities are carried by the Population row and the three pyramid shapes (VLM-confirmed), so the column headers here are KYP's reconstruction, marked as such; (2) the birth-rate arrows print as double-up/double-down (↑↑, ↓↓) while the mortality-rate arrows are single throughout — the printed sentence's “decline to varying degrees” made literal; (3) the raw arrows carry \x8f/\x90 control bytes that the verification layer strips; (4) the pyramid figure labels interleave in the text layer (documented in the note header) — the shapes themselves are VLM-pinned. The definition sentence printing above the figure — “As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population.” — is quoted in core.what and in the mechanisms block.",
    },
    {
      kind: "list",
      title:
        "The denominator decoder — what each vital statistic divides by, and where the clock sits (KYP's reading of the two rows)",
      intro:
        "The two rows look like siblings; they differ in both the denominator and the time dimension. The decoder makes the differences explicit — every line below is KYP's dissection of the printed rows (the quoted cells are verbatim).",
      items: [
        {
          lead: "MORTALITY RATE — the POPULATION denominator, the PER-YEAR clock",
          text: "“Number of deaths (in general or due to specific cause) within a population over a defined period,” formula “Deaths/1000 people per year.” The numerator can be all-cause or cause-specific deaths (the definition's own parenthetical); the denominator is the whole population; and the formula's per-year forces annualization. Deaths × 1000 ÷ (population × years observed).",
        },
        {
          lead: "THE PRINTED MORTALITY EXAMPLE DISSECTED — where the “4 per 1000 per year” comes from",
          text: "“If 80 people in a town of 10,000 die over 2 years, mortality rate is 4 per 1000 per year.” Two operations, neither printed: (1) SCALE — 80 deaths ÷ 10,000 people × 1000 = 8 per 1000 ACROSS THE 2-YEAR WINDOW; (2) ANNUALIZE — 8 per 1000 ÷ 2 years = 4 per 1000 PER YEAR. The exam's planted error is stopping at 8 (the window rate) or dividing by the wrong factor; the “per year” in the formula is the instruction to divide out the window.",
        },
        {
          lead: "ATTACK RATE — the EXPOSED denominator, NO clock",
          text: "“Proportion of exposed people who become ill,” formula the fraction “People who become ill / Total people exposed.” The printed example: 80 exposed, 60 ill → 60/80 = 3/4 = 75%. Despite its name, it is a proportion — an incidence risk among the exposed during one outbreak — so time-window decorations in a stem are noise, and the town's total population NEVER enters the fraction (60/10,000 = 0.6% would be a different, wrong statistic).",
        },
        {
          lead: "THE DENOMINATOR FAMILY — population / exposed / cases (the facing pages' three “rates”)",
          text: "Same idea, three denominators: MORTALITY RATE divides deaths by the POPULATION (per 1000 per year); ATTACK RATE divides the ill by the EXPOSED (a proportion); CASE FATALITY RATE (book 258, KYP context) divides deaths by the CASES. Sort any stem by its denominator and the statistic names itself — this is the single fastest decode on these two pages.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading a population pyramid in four moves (the KYP protocol)",
      intro:
        "The demographic-transition figure is three silhouettes; the exam hands you one and asks for its rows. Read in this order — BASE first — and the four rows follow mechanically.",
      steps: [
        {
          label: "MOVE 1 — READ THE BASE: wide or narrow?",
          detail:
            "The bottom bars are the children — the population's future. A WIDE base means births far exceed deaths: many children, few elders → the GROWING pyramid (Birth rate ↑↑, Mortality rate ↑, Life expectancy Short). A base NARROWER than the bars above it means births have fallen below deaths → the DECLINING silhouette.",
        },
        {
          label: "MOVE 2 — COMPARE THE SIDES: triangle, rectangle, or barrel?",
          detail:
            "A classic triangle (wide base, narrow top) = GROWING. An even RECTANGLE up the ages = STABLE (births ≈ deaths at every band). A NARROW-BASED shape with a BULGING MIDDLE — the printed declining pyramid — = an aging cohort with few replacements (the middle-age bands are the fat generation moving up the chart).",
        },
        {
          label: "MOVE 3 — ATTACH THE ARROWS: birth swings twice, mortality once",
          detail:
            "Growing → Birth rate ↑↑, Mortality rate ↑. Stable → Birth rate ↓, Mortality rate ↓. Declining → Birth rate ↓↓, Mortality rate ↓. The birth row is the only one with double arrows; mortality never has one; and Life expectancy is Short only in the growing stage (Long in both stable and declining).",
        },
        {
          label: "MOVE 4 — NAME THE TRAJECTORY: Growing / Stable / Declining",
          detail:
            "The Population row is the answer line: wide-based triangle → Growing; rectangle → Stable; narrow-based barrel → Declining. Then read the printed sentence backward for the mechanism: “As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population.”",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Mortality rate vs attack rate — the two new denominators side by side",
      intro:
        "The two rows the page adds to the risk table, set against each other. Both are called “rate”; only one has a clock; neither uses the 2×2 table.",
      columns: [
        "Mortality rate — deaths ÷ POPULATION, per year",
        "Attack rate — ill ÷ EXPOSED, no clock",
      ],
      rows: [
        {
          label: "The printed definition",
          a: "“Number of deaths (in general or due to specific cause) within a population over a defined period.” — the definition itself carries the clock (“over a defined period”) and the numerator's dual option (all-cause or cause-specific)",
          b: "“Proportion of exposed people who become ill.” — the definition names the denominator (the EXPOSED) and the numerator (the ill) and never mentions time",
        },
        {
          label: "The printed worked example",
          a: "80 people in a town of 10,000 die over 2 years → 4 per 1000 per year — two hidden operations: ×1000 (→ 8 per 1000 across the window), then ÷2 years (→ 4 per 1000 per year)",
          b: "80 people in a town are exposed and 60 become ill → 75% — one operation: 60/80; the town's 10,000 is a decoy that never enters the fraction",
        },
        {
          label: "The formula, verbatim",
          a: "“Deaths/1000 people per year.” — a RATE: a count per 1000 population per unit time, so the observation window must be divided out",
          b: "“People who become ill / Total people exposed” — a PROPORTION: a fraction bounded by 0 and 1 (0–100%), so no time window applies no matter how the stem dresses it up",
        },
        {
          label: "Where the exam deploys it",
          a: "Population health stems: “the mortality rate of Country X due to cardiovascular disease…” — compute, annualize, or compare across populations or causes",
          b: "Outbreak stems: “of the 120 guests who ate the potato salad, 84 became ill…” — compute the attack rate among the exposed (84/120 = 70%) and rank it against the unexposed (KYP context: the foodborne-outbreak table)",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — a rate to compute, a denominator to name, a silhouette to match",
      body:
        "Three question shapes. (1) COMPUTE WITH THE CLOCK: “80 people in a town of 10,000 die over 2 years. What is the annual mortality rate per 1000?” → 4 (scale to 1000 → 8 per 1000 across the window; annualize → 4 per 1000 per year). The distractors are 8 (the un-annualized window rate) and 16 (doubling instead of halving). (2) NAME THE DENOMINATOR: an outbreak stem gives exposed-count, ill-count, and total-population — the attack rate divides ill by EXPOSED only (the printed example: 60/80 = 75%); dividing by the town, the attendees, or the ill themselves is the planted error, and so is applying a per-year scale to this proportion. (3) MATCH THE SILHOUETTE: a described or drawn pyramid (wide base / rectangular / narrow base with a bulging middle) → pick the row set: Birth rate ↑↑-↓-↓↓, Mortality rate ↑-↓-↓, Life expectancy Short-Long-Long, Population Growing-Stable-Declining. The favorite confusions: life expectancy is Long in BOTH the stable and declining stages; mortality rate prints a single ↓ in both; only the BIRTH row carries the double arrows; and the declining pyramid is narrow at the BASE, not at the top.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The page's own furniture — and the four KYP codes that carry it",
      body:
        "This page prints NO mnemonics of its own (VLM census: no margin notes, no mnemonic letters — the blue/pink pyramid bars and the bold blue row labels are the page's only teaching furniture, carried here as description, not reproduced as artwork). All four ALL-CAPS codes in this note's Memory section are KYP originals: PER THOUSAND PER YEAR (the mortality rate's two operations), ATTACK THE EXPOSED (the attack rate's denominator), BASE READS THE FUTURE (the pyramid silhouettes), and BIRTH SWINGS TWICE (the arrow-count asymmetry). The two worked examples and the definition sentence are First Aid's own and are carried verbatim, attributed, inside the table blocks and the core.",
    },
  ],
  clinical: [
    {
      kind: "callout",
      variant: "clinical",
      title:
        "Where these statistics actually run — outbreak tables and population health",
      body:
        "ATTACK RATE, in practice (KYP context beyond the printed row): the first table built in a point-source outbreak investigation — for every served food, the attack rate among those who ATE it and among those who DID NOT; the implicated vehicle shows a high attack rate among the exposed AND a low one among the unexposed, which is why the denominator must be the exposed group and not the banquet total. The printed row's own example (80 exposed, 60 ill, 75%) is exactly this calculation. MORTALITY RATE, in practice: the population-level statistic behind cause-of-death rankings — the definition's “in general or due to specific cause” is the switch between all-cause mortality (deaths per 1000 per year in the whole population) and cause-specific mortality (eg, deaths due to lung cancer per 1000 per year) — and the scale (per 1000 per year) is what makes countries and periods comparable (KYP context). DEMOGRAPHIC TRANSITION, in practice: the three silhouettes are the demographer's shorthand for a health system's future — a wide-based growing pyramid predicts a pediatric and obstetric burden and a rising total population; a rectangular or declining pyramid with a bulging middle predicts an aging cohort, chronic-disease burden, and a shrinking workforce relative to dependents (KYP context — the dependency ratio is not printed on the page).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A researcher reports that 80 people in a town of 10,000 died over a 2-year observation period and states the town's mortality rate as 8 per 1000. The journal editor returns the manuscript with one correction.",
        discriminator:
          "The formula prints “Deaths/1000 people per year” — the per-year unit demands annualization of the 2-year window (8 per 1000 across the window ÷ 2 years)",
        concept: "Mortality rate = deaths per 1000 population per year",
        answer:
          "4 per 1000 per year — the printed worked example's own answer: scale first (80/10,000 × 1000 = 8 per 1000 over the 2-year window), then annualize (8 ÷ 2 = 4 per 1000 per year). Reporting 8 leaves the rate on the window's clock; the editor's correction is the ÷2.",
      },
      {
        stem: "Of 200 attendees at a church picnic, 80 ate the egg salad; 60 of those who ate it developed Salmonella gastroenteritis within 48 hours, as did 4 attendees who did not eat it. An investigator is asked for the attack rate among the exposed.",
        discriminator:
          "The attack rate divides the ILL by the EXPOSED — 60/80 — never by the 200 attendees or the whole congregation",
        concept: "Attack rate = people who become ill / total people exposed",
        answer:
          "75% (60 ill ÷ 80 exposed) — the printed example's own arithmetic (80 exposed, 60 ill → 75%). The 200 attendees and the 4 unexposed cases are denominator decoys: the statistic's denominator is everyone exposed to the vehicle, ill or not.",
      },
      {
        stem: "A demographer shows a country's population pyramid: the bars are widest at the base and taper steadily to a narrow apex at the oldest ages; the country's vital statistics show a birth rate well above its death rate and a life expectancy in the fifties.",
        discriminator:
          "The WIDE BASE — many children, few elders — is the silhouette of a population whose births far exceed its deaths",
        concept: "The demographic transition's three shapes: pyramid / rectangle / inverted",
        answer:
          "The GROWING stage — Birth rate ↑↑, Mortality rate ↑, Life expectancy Short, Population Growing. The classic wide-based triangle is stage 1 of the printed transition; development has not yet pulled either rate down (the printed sentence's “higher levels of development” has not yet acted).",
      },
      {
        stem: "A high-income country's population pyramid shows a narrow base, its widest bars in the middle-age groups, and a substantial band at the oldest ages. Its vital statistics: birth rate 1.2 per woman, mortality rate low and stable, life expectancy 82 years.",
        discriminator:
          "The base NARROWER than the middle — the bulging-barrel silhouette — plus Long life expectancy with a LOW birth rate",
        concept: "The declining stage: Birth rate ↓↓ vs Mortality rate ↓",
        answer:
          "The DECLINING stage — Birth rate ↓↓, Mortality rate ↓, Life expectancy Long, Population Declining. Fertility has fallen below mortality (the birth row's double ↓↓ against mortality's single ↓), so each incoming cohort is smaller than its parents' — the printed transition's third column.",
      },
    ],
    traps: [
      {
        a: "Mortality rate — deaths ÷ the POPULATION, per 1000 per year",
        b: "Case fatality rate — deaths ÷ the CASES (book 258)",
        whyConfused:
          "Both are death statistics printed in the same table family two pages apart, and both answer “how deadly is this?” at different scales",
        keyDifference:
          "The DENOMINATOR: mortality rate divides by the whole population (whether sick or not) and carries a per-year clock; case fatality rate divides by the diagnosed cases and is a proportion. A disease with high CFR can have low population mortality if it is rare, and vice versa",
        clue:
          "Ask “deaths divided by WHOM?” — everyone in the town → mortality rate; only the cases → CFR.",
      },
      {
        a: "Attack rate — ill ÷ the EXPOSED (60/80 = 75%)",
        b: "A population proportion — ill ÷ the whole town (60/10,000 = 0.6%)",
        whyConfused:
          "The printed example deliberately plants both numbers: “80 people in a town are exposed and 60 people become ill” — the town is in the sentence but not in the formula",
        keyDifference:
          "The attack rate's denominator is everyone EXPOSED to the implicated exposure, ill or not — it measures the virulence/exposure risk within the exposed group, not the outbreak's reach across the town",
        clue:
          "The stem's phrase “among those exposed” (or “among those who ate…”) names the denominator; ATTACK THE EXPOSED.",
      },
      {
        a: "4 per 1000 per year — the ANNUALIZED mortality rate",
        b: "8 per 1000 — the rate across the 2-year window",
        whyConfused:
          "Both are “per 1000,” and the scaling step (×1000) is the one students remember while the clock is the one they forget",
        keyDifference:
          "The printed formula is “Deaths/1000 people per YEAR”: after scaling to 1000, divide by the observation window in years (8 per 1000 ÷ 2 years = 4 per 1000 per year). The un-annualized 8 is the exam's favorite distractor",
        clue:
          "Check the formula's last two words — “per year” — before answering; PER THOUSAND PER YEAR.",
      },
      {
        a: "Declining pyramid — NARROW BASE, bulging middle, Birth rate ↓↓",
        b: "Growing pyramid — WIDE BASE, tapering top, Birth rate ↑↑",
        whyConfused:
          "Both are triangles of a sort, and both stages pair a falling or rising birth rate with a low or high mortality rate; the stable stage's rectangle sits between them",
        keyDifference:
          "Read the BASE: the growing pyramid is widest at the bottom (children abound); the declining pyramid is narrow at the bottom with its widest bars in the MIDDLE (the aged cohort). And only the birth row carries double arrows — ↑↑ in stage 1, ↓↓ in stage 3; mortality moves one arrow at a time",
        clue:
          "BASE READS THE FUTURE: wide base = the next generation is bigger (growing); base narrower than the middle = smaller (declining).",
      },
    ],
    pivots: [
      {
        lookAlike: "A “rate” with a time unit vs a “rate” without one",
        differentiator:
          "Mortality rate prints “per year” in its formula; attack rate's fraction has no time dimension",
        correctPath:
          "Time unit in the formula → a true rate → annualize (divide out the observation window). No time unit → a proportion → compute the fraction and stop (never multiply or divide by a time window).",
      },
      {
        lookAlike: "A pyramid described as wide at the bottom vs wide in the middle",
        differentiator:
          "WHERE the widest bars sit — the base (young) or the middle-aged bands",
        correctPath:
          "Widest at the base → Growing (Birth rate ↑↑, Mortality rate ↑, Life expectancy Short). Even rectangle → Stable. Widest in the middle with a narrow base → Declining (Birth rate ↓↓, Mortality rate ↓, Life expectancy Long).",
      },
      {
        lookAlike: "Two of {pyramid shape, birth/mortality arrows, population trajectory} given — the third asked",
        differentiator:
          "The birth row's arrow COUNT is the fingerprint: double arrows only at the growing (↑↑) and declining (↓↓) ends; single ↓ at stable; mortality never doubles",
        correctPath:
          "Match the given pair to the printed grid — Birth rate ↑↑/↓/↓↓ · Mortality rate ↑/↓/↓ · Life expectancy Short/Long/Long · Population Growing/Stable/Declining — and read off the missing cell; life expectancy is Long in both of the last two stages.",
      },
    ],
    miniCase: {
      vignette:
        "A county health department investigates a point-source outbreak after a retirement-community banquet. Of the 250 residents who attended, 100 ate the house-made crème brûlée; 40 of those 100 developed nausea, vomiting, and diarrhea within 36 hours, as did 5 residents who did not eat the dessert. The county has 10,000 residents, and 20 of them (including 3 banquet attendees) died over the following year. The medical student on the team is asked to compute the attack rate for the crème brûlée among those exposed.",
      question:
        "What is the attack rate among the residents exposed to the crème brûlée?",
      options: [
        {
          label: "A",
          text: "40%",
          correct: true,
          why:
            "CORRECT — the attack rate is “People who become ill / Total people exposed”: 40 ill ÷ 100 exposed = 40%. The denominator is everyone who ate the dessert, ill or not — the printed row's own logic (80 exposed, 60 ill → 75%); the 250 attendees, the 10,000 county residents, and the 5 unexposed cases are all outside the fraction.",
        },
        {
          label: "B",
          text: "16% (40 ÷ 250)",
          why:
            "TEMPTING but wrong — 250 is the BANQUET denominator, not the exposure denominator. Dividing by all attendees (regardless of what they ate) computes the attack rate for attending the banquet, not for the crème brûlée; the statistic the outbreak table needs is conditioned on the exposure, per the printed formula “People who become ill / Total people exposed.”",
        },
        {
          label: "C",
          text: "0.4% (40 ÷ 10,000)",
          why:
            "TEMPTING but wrong — the town's total population never enters an attack rate. This is the population-denominator error the printed example guards against: “80 people in a town are exposed and 60 people become ill” gives 60/80 = 75%, not 60/town. Dividing by the county's 10,000 would compute a population proportion, not the exposed-cohort attack rate.",
        },
        {
          label: "D",
          text: "8.9% (45 ÷ 500 total person-years of observation)",
          why:
            "WRONG dimension entirely — the attack rate is a PROPORTION with no time unit, so annualizing (dividing by person-years) applies a clock the formula does not have. That manipulation belongs to rates like the mortality rate, whose formula prints “per year” — this one does not.",
        },
        {
          label: "E",
          text: "2 per 1000 (20 deaths ÷ 10,000 residents)",
          why:
            "WRONG statistic — 20 deaths over one year in a county of 10,000 is the MORTALITY RATE (2 per 1000 per year), the page's other row: “Deaths/1000 people per year.” It answers how deadly the year was for the population, not how virulent the exposure was for those who ate the dessert — the question asked for the attack rate.",
        },
      ],
      reasoning:
        "The case plants every denominator on the page — 100 exposed, 250 attendees, 10,000 county residents, 20 deaths over a year — and the attack rate uses exactly one of them. The printed row defines it: “Proportion of exposed people who become ill,” formula “People who become ill / Total people exposed” — so 40/100 = 40% (option A), the same one-step fraction as the printed example's 60/80 = 75%. Option B swaps in the banquet denominator (an attack rate for attendance, not for the vehicle); option C commits the population-denominator error (0.4% — the town is in the printed sentence only as scenery); option D invents a time dimension the proportion does not carry (that is the mortality rate's per-year clock); and option E computes the mortality rate itself (20/10,000 = 2 per 1000 per year) — the right statistic for the wrong question, and the page's other row.",
    },
  },
  mnemonics: [
    {
      code: "PER THOUSAND, PER YEAR",
      meaning:
        "The mortality rate's two operations, in the order the formula prints them (a KYP original): “Deaths/1000 people per year” = (1) PER THOUSAND — scale the deaths to a population of 1000 (80/10,000 × 1000 = 8 per 1000); (2) PER YEAR — divide out the observation window in years (8 ÷ 2 = 4 per 1000 per year, the printed example's answer).",
      memorizes:
        "The mortality-rate formula and its two-step arithmetic — scaling AND annualization — plus the definition's dual numerator (“in general or due to specific cause”)",
      whenToUse:
        "Any mortality-rate computation or critique: a stem with a multi-year window, a reported rate that needs checking, or a “which is correct?” option set containing the un-annualized window rate (8 per 1000) as the plant",
      clinical:
        "Population-health statistics must be comparable across populations and periods — the per-1000-per-year standard is what lets one country's mortality rate be set against another's (KYP context).",
    },
    {
      code: "ATTACK THE EXPOSED",
      meaning:
        "The attack rate's denominator rule (a KYP original): the attack rate divides the ILL by the EXPOSED — “People who become ill / Total people exposed” — so the statistic ATTACKS the exposed group: 60 ill of 80 exposed = 75%. The town, the banquet roster, and the case count never enter the fraction.",
      memorizes:
        "The attack-rate formula and its denominator — and the printed example's decoy structure (the town of 10,000 is scenery, not arithmetic)",
      whenToUse:
        "Any outbreak stem offering multiple denominators (exposed count, attendee count, total population, case count) — pick the exposed group, ill or not, and compute the proportion",
      clinical:
        "In outbreak investigation the attack rate is computed per exposure (per food, per water source) among those exposed — the vehicle is the exposure with the highest attack rate among the exposed and the lowest among the unexposed (KYP context).",
    },
    {
      code: "BASE READS THE FUTURE",
      meaning:
        "The pyramid-silhouette rule (a KYP original): the base of a population pyramid is its future — WIDE base = the next generation is bigger than the current one = GROWING (classic triangle); EVEN rectangle = each generation replaces itself = STABLE; NARROW base under a bulging middle = the next generation is smaller = DECLINING.",
      memorizes:
        "The three printed pyramid shapes and their Population-row labels (Growing / Stable / Declining) — the shape-to-stage mapping the figure draws but never captions",
      whenToUse:
        "Any question showing or describing a population pyramid and asking for the country's stage, its birth/mortality pattern, or its trajectory — read the base first, then compare it to the middle",
      clinical:
        "The silhouettes forecast the health system's load: wide base → pediatric, obstetric, and infectious-disease burden; narrow base with bulging middle → chronic disease, long-term care, and elder-dependency burden (KYP context).",
    },
    {
      code: "BIRTH SWINGS TWICE",
      meaning:
        "The arrow-count asymmetry (a KYP original): across the printed transition table the BIRTH RATE row is the only one with double arrows — ↑↑ in the growing stage, ↓↓ in the declining stage (single ↓ at stable) — while the MORTALITY RATE row never carries more than one arrow (↑, then ↓, ↓). The printed sentence's “decline to varying degrees” is this asymmetry: fertility swings harder than mortality.",
      memorizes:
        "The Birth rate (↑↑/↓/↓↓) and Mortality rate (↑/↓/↓) rows together — and the diagnostic that only the birth row doubles",
      whenToUse:
        "Any transition-table completion or “which stage is this country in?” question where the arrow counts, not just their directions, discriminate the stages",
      clinical:
        "The asymmetry is the epidemiologic transition's engine (KYP context): development pulls mortality down first (life expectancy Short → Long), population grows while births stay high, then fertility falls hardest — inverting the pyramid.",
    },
  ],
  rapidReview: {
    s30: [
      "Mortality rate = “Deaths/1000 people per year” — deaths (in general or due to specific cause) within a population over a defined period; annualize the window",
      "Printed mortality example: 80 people in a town of 10,000 die over 2 years → 4 per 1000 per year (×1000 → 8 per 1000 across the window; ÷2 years → 4)",
      "Attack rate = “Proportion of exposed people who become ill” = People who become ill / Total people exposed — printed example: 80 exposed, 60 ill → 75%",
      "Demographic transition (verbatim): “As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population.”",
      "Three pyramids: wide-based triangle = Growing · rectangle = Stable · narrow base with bulging middle = Declining (Male left / Female right, bars by Age, axis Population %)",
      "Transition rows: Birth rate ↑↑/↓/↓↓ · Mortality rate ↑/↓/↓ · Life expectancy Short/Long/Long · Population Growing/Stable/Declining",
    ],
    m3: [
      "PER THOUSAND, PER YEAR — the mortality rate's two operations (scale, then annualize)",
      "ATTACK THE EXPOSED — ill ÷ exposed, never the town (60/80 = 75%)",
      "BASE READS THE FUTURE — wide base grows, rectangle holds, narrow base declines",
      "BIRTH SWINGS TWICE — only the birth row carries double arrows (↑↑ … ↓↓); mortality moves one at a time",
    ],
    m10: [
      "Denominator family across the facing pages: mortality rate ÷ population (per year) · attack rate ÷ exposed (proportion) · case fatality rate ÷ cases (book 258)",
      "The attack rate is a proportion, not a rate — no time unit, no annualization, no matter how the stem dresses the window",
      "The demographic transition's mechanism (KYP context): development drops mortality first (life expectancy Short → Long), the population swells while births stay high, then fertility falls hardest (↓↓) — the pyramid inverts",
      "Life expectancy is Long in BOTH the stable and declining stages; mortality rate prints a single ↓ in both — only the birth row and the pyramid's base separate them",
    ],
  },
  recall: [
    {
      q: "State the mortality rate's printed formula and definition.",
      a: "“Deaths/1000 people per year.” — “Number of deaths (in general or due to specific cause) within a population over a defined period.”",
    },
    {
      q: "In the printed example, 80 people in a town of 10,000 die over 2 years. Why is the mortality rate 4 per 1000 per year and not 8?",
      a: "8 per 1000 is the rate ACROSS the 2-year window (80/10,000 × 1000); the formula's “per year” demands annualization — 8 ÷ 2 years = 4 per 1000 per year.",
    },
    {
      q: "State the attack rate's printed formula and the printed worked example.",
      a: "“People who become ill / Total people exposed” — “Proportion of exposed people who become ill.” Printed example: 80 people in a town are exposed and 60 become ill → attack rate 75%.",
    },
    {
      q: "In an outbreak, 40 of 100 people who ate the implicated food became ill. What is the attack rate, and why does the total banquet attendance of 250 not enter the calculation?",
      a: "40% (40/100). The attack rate's denominator is the EXPOSED group only — everyone who ate the food, ill or not; attendance and total population are outside the fraction.",
    },
    {
      q: "Quote the demographic transition's printed definition sentence.",
      a: "“As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population.”",
    },
    {
      q: "Name the three population-pyramid shapes and the Population-row value each corresponds to.",
      a: "Wide-based classic triangle → Growing · rectangular (even bars up the ages) → Stable · narrow base with a bulging middle → Declining.",
    },
    {
      q: "Across the three stages, print the Birth rate and Mortality rate rows with their arrows.",
      a: "Birth rate: ↑↑ / ↓ / ↓↓ (double arrows at both ends). Mortality rate: ↑ / ↓ / ↓ (never more than one arrow).",
    },
    {
      q: "Which two transition rows separate the STABLE stage from the DECLINING stage, and how?",
      a: "Birth rate (↓ vs ↓↓ — the only row that changes) and Population (Stable vs Declining). Mortality rate prints ↓ in both, and Life expectancy prints Long in both.",
    },
  ],
  related: [
    {
      title: "Quantifying risk: the 2×2 table and its measures",
      note:
        "The table this page CONTINUES — book 258's odds ratio, relative risk, RRR, attributable risk, ARR, NNT, NNH, and case fatality rate rows. The denominators meet here: case fatality rate divides deaths by CASES while this page's mortality rate divides by the POPULATION and attack rate by the EXPOSED; the three together are the denominator family. (Produced in parallel in this same batch.)",
      topicId: "quantifying-risk",
    },
    {
      title: "Incidence vs prevalence",
      note:
        "The attack rate is secretly an incidence measure — the incidence RISK among the exposed during an outbreak — and the mortality rate is a population incidence of death per unit time; both rows of book 259 upper are applications of the incidence/prevalence grammar taught at book 264.",
      topicId: "incidence-prevalence",
    },
    {
      title: "Survival analysis: Kaplan-Meier curves and hazard ratios",
      note:
        "The block that begins immediately BELOW this topic's pinned boundary on the same page (the “Likelihood ratio” heading then the Kaplan-Meier curve) — survival probability over time is the individual-level instrument whose population-level average prints in this page's Life expectancy row (Short/Long/Long).",
      topicId: "survival-analysis",
    },
    {
      title: "Observational study designs",
      note:
        "The study machinery that generates these statistics: cohort studies measure incidence (and feed mortality-rate computation), outbreak field epidemiology (a cohort-style attack-rate table) is the attack rate's native habitat, and ecological studies compare population-level rates across populations — the demographic transition itself is population-level data.",
      topicId: "observational-studies",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology — foodborne outbreak investigation",
      connection:
        "The attack rate is the outbreak table's statistic: for S aureus, Bacillus cereus, and Norovirus point-source events (KYP context for the classic pathogens), the implicated vehicle shows a high attack rate among those who ate it and a low one among those who did not — the printed row (80 exposed, 60 ill, 75%) is that calculation in miniature.",
    },
    {
      subject: "Biostatistics — the 2×2 measures",
      connection:
        "The denominator family links the facing pages: mortality rate (÷ population, per year), attack rate (÷ exposed), and case fatality rate (÷ cases, book 258) all share a death-or-illness numerator; choosing the denominator chooses the statistic — the same discipline the 2×2 table's OR/RR/AR/NNT family demands.",
    },
    {
      subject: "Healthcare delivery — population aging and system planning",
      connection:
        "The declining pyramid (narrow base, bulging middle, Birth rate ↓↓) is the demographic driver behind elder-dependency ratios, chronic-disease burden, and workforce planning — the printed Life expectancy row (Long/Long) is the statistic health systems project forward (KYP context).",
    },
    {
      subject: "Behavioral science — life expectancy and population health",
      connection:
        "Life expectancy Short → Long → Long is the transition's human outcome: development's mortality decline (sanitation, nutrition, vaccines, KYP context for the drivers) is the same population-health story told by national vital statistics — and the average the Kaplan-Meier machinery (just below this page's boundary) estimates at the individual scale.",
    },
  ],
};
