/* Public Health — PUBH batch 1, topic 4: Quantifying risk (book 258, pdf 280
 * — the whole page: the classic 2×2 contingency table, the eight-row
 * "Quantifying risk" table, the two formula-margin worked grids, and the
 * three top-margin formulas). Census (pdfimages + VLM at 120dpi,
 * staging-pubh4/vlm-census.txt): ZERO raster images — the page is pure
 * vector text and rules; the only graphic elements in print are the two
 * worked grids, the ⊕/⊖ symbols on the 2×2, and the table rules. This is an
 * ORIGINAL KYP ADAPTATION: the classic 2×2 drawn as the centerpiece engine
 * (columns "Disease or outcome" ⊕/⊖, rows "Exposure or intervention" ⊕/⊖ —
 * printed vertically in the book, carried horizontal here, documented), with
 * the two reading directions annotated at its right (read by rows → the two
 * row risks; read by columns → the two exposure odds) and the three
 * top-margin formulas in a strip below; then the EIGHT measure rows of the
 * printed table as spokes in two columns — Odds ratio (case-control, OR =
 * a/c ÷ b/d = ad/bc, the 20/5/10/20 worked grid, the red FA mnemonic "You
 * take a case to the OR."), Relative risk (cohort, RR = a/(a + b) ÷ c/(c +
 * d), the 5/5/1/9 worked grid, rare-disease OR ≈ RR), Relative risk
 * reduction (RRR = 1 – RR = (ARC – ART)/ARC, flu shot 0.75), Attributable
 * risk (AR = a/(a + b) − c/(c + d), 21% − 1% = 20%, AR% = (RR − 1)/RR ×
 * 100), Absolute risk reduction (ARR = c/(c + d) − a/(a + b), 8%–2% = 6% =
 * 0.06), Number needed to treat (NNT = 1/ARR, lower = better), Number
 * needed to harm (NNH = 1/AR, higher = safer), and Case fatality rate (CFR%
 * = deaths/cases × 100, 4/10 = 40%) — closed by the RATIO · DIFFERENCE ·
 * RECIPROCAL grammar strip with the two First Aid mnemonics attributed
 * ("You take a case to the OR." printed in red on THIS page; "Cohort =
 * relative risk." printed on the study-designs page, book 256 — not this
 * page, adjudicated). The hub-and-spokes layout, the grammar strip, and the
 * KYP arithmetic continuations (NNT ≈ 17, NNH = 5) are KYP's; every term,
 * definition, example, formula, and mnemonic is preserved from the print,
 * and the full table is also carried verbatim in the note's table block.
 * Nothing is reproduced from the book; purely presentational (no props, no
 * hooks, no external images). */

export const QuantifyingRiskMap = () => {
  const w = 1102;
  const h = 1398;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Quantifying risk — the classic 2×2 contingency table as the engine (disease or outcome down the columns, exposure or intervention across the rows, cells a b c d with the two row risks and the two column odds), its two reading directions, the three top-margin formulas, and all eight measure rows as spokes — Odds ratio (case-control, OR = a/c ÷ b/d = ad/bc, the 20/5/10/20 worked grid, FA's red “You take a case to the OR.”), Relative risk (cohort, RR = a/(a + b) ÷ c/(c + d), the 5/5/1/9 worked grid), Relative risk reduction (RRR = 1 – RR = (ARC – ART)/ARC), Attributable risk (AR = a/(a + b) − c/(c + d)), Absolute risk reduction (ARR = c/(c + d) − a/(a + b)), Number needed to treat (NNT = 1/ARR), Number needed to harm (NNH = 1/AR), and Case fatality rate (CFR% = deaths/cases × 100) — with the RATIO · DIFFERENCE · RECIPROCAL grammar strip: an original KYP diagram of book 258." className="min-w-[1060px]">
      <title>Quantifying risk — the 2×2 table and its eight measures</title>
      <desc>An original KYP diagram of First Aid 2026 book page 258: the classic 2×2 contingency table (columns = disease or outcome, rows = exposure or intervention, cells a b c d) at the center, its two reading directions (row risks for cohorts, column odds for case-control studies), the three top-margin formulas, and the eight printed measures — odds ratio, relative risk, relative risk reduction, attributable risk, absolute risk reduction, number needed to treat, number needed to harm, case fatality rate — each with its formula, worked example, and interpretation, closed by the ratio · difference · reciprocal grammar strip and First Aid&apos;s two attributed mnemonics.</desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Quantifying risk — the 2×2 engine and its eight measures (original KYP diagram)</text>
        <rect x="742" y="25" width="320" height="18" className="fill-brand-soft" />
        <text x="902" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">8 measures · 4 cells · 1 table</text>
      </g>

      {/* ===== ZONE A — THE CLASSIC 2×2 ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="345" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CLASSIC 2 × 2 — the engine every measure on the page is built on</text>
        <text x="52" y="103" fontSize="3.7" fontWeight="700" className="fill-muted-foreground">the printed lead-in: “Definitions and formulas are based on the classic 2 × 2 or contingency table.” — the row label prints vertically in the book; carried horizontal here (documented adaptation)</text>

        {/* the 2×2 grid */}
        <g>
          <text x="260" y="126" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Disease or outcome</text>
          <text x="205" y="139" textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-brand">⊕ disease</text>
          <text x="315" y="139" textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">⊖ no disease</text>
          <text x="64" y="192" fontSize="3.2" fontWeight="800" className="fill-foreground">Exposure or</text>
          <text x="64" y="202" fontSize="3.2" fontWeight="800" className="fill-foreground">intervention</text>
          <text x="64" y="222" fontSize="2.9" fontWeight="700" className="fill-brand">⊕ exposed</text>
          <text x="64" y="292" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">⊖ unexposed</text>
          {/* cell a */}
          <rect x="150" y="150" width="110" height="85" rx="6" className="fill-card stroke-brand" />
          <text x="164" y="176" fontSize="7" fontWeight="800" className="fill-brand">a</text>
          <text x="205" y="192" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">exposed +</text>
          <text x="205" y="202" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">diseased</text>
          {/* cell b */}
          <rect x="260" y="150" width="110" height="85" rx="6" className="fill-card stroke-border" />
          <text x="274" y="176" fontSize="7" fontWeight="800" className="fill-muted-foreground">b</text>
          <text x="315" y="192" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">exposed +</text>
          <text x="315" y="202" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">no disease</text>
          {/* cell c */}
          <rect x="150" y="235" width="110" height="85" rx="6" className="fill-card stroke-border" />
          <text x="164" y="261" fontSize="7" fontWeight="800" className="fill-muted-foreground">c</text>
          <text x="205" y="277" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">unexposed +</text>
          <text x="205" y="287" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">diseased</text>
          {/* cell d */}
          <rect x="260" y="235" width="110" height="85" rx="6" className="fill-card stroke-border" />
          <text x="274" y="261" fontSize="7" fontWeight="800" className="fill-muted-foreground">d</text>
          <text x="315" y="277" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">unexposed +</text>
          <text x="315" y="287" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">no disease</text>
          {/* under-grid note */}
          <text x="64" y="340" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">⊕/⊖ and the four letters are First Aid&apos;s own printed furniture: a is ⊕⊕ (both</text>
          <text x="64" y="350" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">positive), b is ⊕⊖, c is ⊖⊕, d is ⊖⊖ — the orientation check for any grid.</text>
        </g>

        {/* reading direction 1 — rows */}
        <g>
          <rect x="400" y="118" width="648" height="115" rx="10" className="fill-card stroke-brand" />
          <text x="414" y="138" fontSize="4.2" fontWeight="800" className="fill-brand">READ BY ROWS → THE RISKS (the cohort / trial direction)</text>
          <text x="414" y="156" fontSize="3.4" fontWeight="800" className="fill-foreground">risk in the exposed = a/(a + b)   ·   risk in the unexposed = c/(c + d)</text>
          <text x="414" y="170" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">The page&apos;s only two probabilities — honest when the study followed people forward from</text>
          <text x="414" y="181" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">exposure (cohort) or randomized them (trial). DIVIDE them → RR · SUBTRACT them → AR</text>
          <text x="414" y="192" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">(reads down) or ARR (reads up) · INVERT a difference → NNT / NNH.</text>
          <text x="414" y="212" fontSize="2.9" fontWeight="700" className="fill-brand">“Typically used in cohort studies.” — the RR row, on exactly these row risks</text>
        </g>

        {/* reading direction 2 — columns */}
        <g>
          <rect x="400" y="243" width="648" height="115" rx="10" className="fill-card stroke-warning" />
          <text x="414" y="263" fontSize="4.2" fontWeight="800" className="fill-warning">READ BY COLUMNS → THE ODDS (the case-control direction)</text>
          <text x="414" y="281" fontSize="3.4" fontWeight="800" className="fill-foreground">odds of exposure among cases = a/c   ·   among controls = b/d</text>
          <text x="414" y="295" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">A case-control study recruits by outcome (cases vs controls), so its row denominators are</text>
          <text x="414" y="306" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">sampling artifacts and the row risks are uncomputable — only the column odds survive:</text>
          <text x="414" y="317" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">OR = a/c ÷ b/d, which cross-cancels to ad/bc (no denominators needed at all).</text>
          <text x="414" y="337" fontSize="2.9" fontWeight="700" className="fill-warning">“You take a case to the OR.” — First Aid&apos;s red mnemonic, printed in the OR row (this page)</text>
        </g>

        {/* the three top-margin formulas */}
        <rect x="52" y="366" width="998" height="42" rx="8" className="fill-card stroke-border" />
        <text x="64" y="380" fontSize="3" fontWeight="800" className="fill-foreground">THE TOP-MARGIN FORMULAS — stacked above the 2×2 in print; obscured by the running-header band in the digital render (VLM could not read them there — carried complete from the text layer):</text>
        <text x="64" y="398" fontSize="3.8" fontWeight="800" className="fill-brand">Odds ratio = a/c ÷ b/d = ad/bc        Relative risk = a/(a + b) ÷ c/(c + d)        Attributable risk = a/(a + b) − c/(c + d)</text>
      </g>

      {/* ===== ZONE B — THE EIGHT MEASURES ===== */}
      <text x="52" y="440" fontSize="5.4" fontWeight="800" className="fill-foreground">THE EIGHT MEASURES — every row of the printed table: formula + worked example + interpretation (printed row order)</text>

      {[
        {
          x: 36, y: 452, no: "1", name: "Odds ratio", fam: "RATIO", stroke: "stroke-brand", chip: "fill-brand", chipText: "fill-card",
          tag: "row 1 of 8 · typically used in CASE-CONTROL studies · reads the columns (cases a/c vs controls b/d)",
          formula: "OR = a/c ÷ b/d = ad/bc",
          grid: { a: "a = 20", b: "b = 5", c: "c = 10", d: "d = 20", cap: "the OR row’s worked grid" },
          ex: [
            "“If in a case-control study, 20/30 patients with lung cancer and 5/25",
            "healthy individuals report smoking, the OR is 8; so the patients with",
            "lung cancer are 8 times more likely to have a history of smoking.”",
            "check: ad/bc = (20 × 20)/(5 × 10) = 400/50 = 8",
          ],
          int1: "OR = 1 → odds of exposure equal in cases and controls · OR > 1 → greater in cases · OR < 1 → greater in controls",
          int2: "",
        },
        {
          x: 36, y: 636, no: "2", name: "Relative risk", fam: "RATIO", stroke: "stroke-brand", chip: "fill-brand", chipText: "fill-card",
          tag: "row 2 of 8 · typically used in COHORT studies · reads the rows (risk a/(a+b) ÷ c/(c+d))",
          formula: "RR = a/(a + b) ÷ c/(c + d)",
          grid: { a: "a = 5", b: "b = 5", c: "c = 1", d: "d = 9", cap: "the RR row’s worked grid" },
          ex: [
            "“If 5/10 people exposed to radiation are diagnosed with cancer, and 1/10",
            "people not exposed to radiation are diagnosed with cancer, the RR is 5; so",
            "people exposed to radiation have a 5 times greater risk of cancer.”",
            "“For rare diseases (low prevalence), OR approximates RR.”",
          ],
          int1: "RR = 1 → no association · RR > 1 → exposure associated with ↑ disease occurrence · RR < 1 → ↓ disease occurrence",
          int2: "FA’s router, printed on book 256: “Cohort = relative risk.”",
        },
        {
          x: 36, y: 820, no: "3", name: "Relative risk reduction", fam: "RATIO", stroke: "stroke-brand", chip: "fill-brand", chipText: "fill-card",
          tag: "row 3 of 8 · the PROPORTION of risk reduction — ART (treatment arm) vs ARC (control arm), the printed abbreviations",
          formula: "RRR = 1 – RR = (ARC – ART)/ARC",
          grid: null,
          ex: [
            "“If 2% of patients who receive a flu shot develop the flu, while 8% of",
            "unvaccinated patients develop the flu, then RR = 2/8 = 0.25, and",
            "RRR = 0.75.”",
            "check both printed forms: 1 – 0.25 = 0.75 = (8 – 2)/8",
          ],
          int1: "the flu shot removes 75% OF THE CONTROL ARM’S RISK — a proportion (the ARR row prints its contrast: “not the proportion”)",
          int2: "",
        },
        {
          x: 36, y: 1004, no: "4", name: "Attributable risk", fam: "DIFFERENCE", stroke: "stroke-warning", chip: "fill-warning", chipText: "fill-card",
          tag: "row 4 of 8 · the difference in risk between exposed and unexposed groups · reads DOWN the table (harm)",
          formula: "AR = a/(a + b) − c/(c + d)    AR% = (RR − 1)/RR × 100",
          grid: null,
          ex: [
            "“If risk of lung cancer in people who smoke is 21% and risk in people",
            "who don’t smoke is 1%, then the attributable risk is 20%.”",
            "exposed row minus unexposed row — the excess the exposure adds on top",
            "of baseline risk (the harm difference; AR-READS-DOWN, a KYP rule)",
          ],
          int1: "21% − 1% = 20 percentage points of lung-cancer risk attributable to smoking · AR% = (21 − 1)/21 ≈ 95% of a smoker’s risk (KYP arithmetic)",
          int2: "",
        },
        {
          x: 560, y: 452, no: "5", name: "Absolute risk reduction", fam: "DIFFERENCE", stroke: "stroke-warning", chip: "fill-warning", chipText: "fill-card",
          tag: "row 5 of 8 · “the difference in risk (not the proportion)” — the printed contrast with RRR · reads UP the table (benefit)",
          formula: "ARR = c/(c + d) − a/(a + b)",
          grid: null,
          ex: [
            "“If 8% of people who receive a placebo vaccine develop the flu vs 2% of",
            "people who receive a flu vaccine, then ARR = 8%–2% = 6% = 0.06.”",
            "control row minus treated row — printed in exactly this reversed",
            "orientation, so the benefit comes out positive (ARR-READS-UP, KYP rule)",
          ],
          int1: "six absolute percentage points of flu risk removed — the honest, baseline-aware number; its reciprocal is the NNT",
          int2: "",
        },
        {
          x: 560, y: 636, no: "6", name: "Number needed to treat", fam: "RECIPROCAL", stroke: "stroke-success", chip: "fill-success", chipText: "fill-card",
          tag: "row 6 of 8 · no example printed — the row carries definition + formula only (VLM-confirmed)",
          formula: "NNT = 1/ARR",
          grid: null,
          ex: [
            "“Number of patients who need to be treated for 1 patient to benefit.",
            "Lower number = better treatment.”",
            "KYP arithmetic continuing the flu-shot example: 1/0.06 ≈ 16.7 → treat",
            "17 patients to prevent one case (round UP — no fraction of a patient)",
          ],
          int1: "the reciprocal grammar: a risk difference converted into a head count — the bedside number for shared decision-making",
          int2: "",
        },
        {
          x: 560, y: 820, no: "7", name: "Number needed to harm", fam: "RECIPROCAL", stroke: "stroke-success", chip: "fill-success", chipText: "fill-card",
          tag: "row 7 of 8 · no example printed — the row carries definition + formula only (VLM-confirmed)",
          formula: "NNH = 1/AR",
          grid: null,
          ex: [
            "“Number of patients who need to be exposed to a risk factor for 1",
            "patient to be harmed. Higher number = safer exposure.”",
            "KYP arithmetic continuing the smoking example: 1/0.20 = 5 — about five",
            "smokers per one lung cancer attributable to smoking",
          ],
          int1: "the harm-side reciprocal: inverts the attributable risk — and the direction flips with it (higher = safer, not better-treating)",
          int2: "",
        },
        {
          x: 560, y: 1004, no: "8", name: "Case fatality rate", fam: "OUTCOME ONLY", stroke: "stroke-foreground", chip: "fill-secondary", chipText: "fill-foreground",
          tag: "row 8 of 8 · “Percentage of deaths occurring among those with disease.” · reads the diseased column alone",
          formula: "CFR% = deaths/cases × 100",
          grid: null,
          ex: [
            "“If 4 patients die among 10 cases of meningitis, case fatality rate is",
            "40%.”",
            "the one measure that needs no exposure axis and no second arm —",
            "severity of disease among the diseased, not strength of association",
          ],
          int1: "an outbreak’s headline number: 40% of this meningitis cohort died — CFR scales with virulence and care, not with exposure (KYP context)",
          int2: "",
        },
      ].map((c, i) => (
        <g key={`measure-${i}`}>
          <rect x={c.x} y={c.y} width="506" height="170" rx="10" className={`fill-card ${c.stroke}`} />
          <rect x={c.x + 356} y={c.y + 10} width="140" height="15" rx="4" className={c.chip} />
          <text x={c.x + 426} y={c.y + 20.5} textAnchor="middle" fontSize="3" fontWeight="800" className={c.chipText}>{c.fam}</text>
          <text x={c.x + 14} y={c.y + 26} fontSize="4.6" fontWeight="800" className="fill-foreground">{c.no} · {c.name}</text>
          <text x={c.x + 14} y={c.y + 39} fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{c.tag}</text>
          <text x={c.x + 14} y={c.y + 60} fontSize="3.8" fontWeight="800" className="fill-foreground">{c.formula}</text>
          {c.grid && (
            <g>
              <rect x={c.x + 372} y={c.y + 44} width="58" height="32" rx="5" className="fill-secondary stroke-border" />
              <text x={c.x + 401} y={c.y + 64} textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-foreground">{c.grid.a}</text>
              <rect x={c.x + 434} y={c.y + 44} width="58" height="32" rx="5" className="fill-secondary stroke-border" />
              <text x={c.x + 463} y={c.y + 64} textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-foreground">{c.grid.b}</text>
              <rect x={c.x + 372} y={c.y + 80} width="58" height="32" rx="5" className="fill-secondary stroke-border" />
              <text x={c.x + 401} y={c.y + 100} textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-foreground">{c.grid.c}</text>
              <rect x={c.x + 434} y={c.y + 80} width="58" height="32" rx="5" className="fill-secondary stroke-border" />
              <text x={c.x + 463} y={c.y + 100} textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-foreground">{c.grid.d}</text>
              <text x={c.x + 432} y={c.y + 126} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">{c.grid.cap}</text>
            </g>
          )}
          {c.ex.map((line, j) => (
            <text key={`ex-${i}-${j}`} x={c.x + 14} y={c.y + 78 + j * 12} fontSize="3.1" fontWeight="700" className="fill-foreground">{line}</text>
          ))}
          <rect x={c.x + 10} y={c.y + 134} width="486" height="28" rx="5" className="fill-secondary/60" />
          <text x={c.x + 20} y={c.y + 145} fontSize="2.9" fontWeight="800" className="fill-foreground">{c.int1}</text>
          {c.int2 && <text x={c.x + 20} y={c.y + 156} fontSize="2.9" fontWeight="800" className="fill-brand">{c.int2}</text>}
        </g>
      ))}

      {/* ===== ZONE C — THE GRAMMAR + THE MNEMONICS ===== */}
      <g>
        <rect x="36" y="1190" width="1030" height="112" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1210" fontSize="4.6" fontWeight="800" className="fill-foreground">THE GRAMMAR — RATIO · DIFFERENCE · RECIPROCAL: the question’s units pick the measure (a KYP decoder for all eight rows)</text>
        <rect x="52" y="1220" width="310" height="34" rx="6" className="fill-card stroke-brand" />
        <text x="207" y="1232" textAnchor="middle" fontSize="3.1" fontWeight="800" className="fill-brand">RATIO — “how many TIMES”</text>
        <text x="207" y="1244" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">OR · RR · and the ratio&apos;s complement, RRR = 1 – RR</text>
        <rect x="372" y="1220" width="310" height="34" rx="6" className="fill-card stroke-warning" />
        <text x="527" y="1232" textAnchor="middle" fontSize="3.1" fontWeight="800" className="fill-warning">DIFFERENCE — “how many POINTS”</text>
        <text x="527" y="1244" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">AR reads down (harm) · ARR reads up (benefit)</text>
        <rect x="692" y="1220" width="354" height="34" rx="6" className="fill-card stroke-success" />
        <text x="869" y="1232" textAnchor="middle" fontSize="3.1" fontWeight="800" className="fill-success">RECIPROCAL — “how many PATIENTS”</text>
        <text x="869" y="1244" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">NNT = 1/ARR · NNH = 1/AR · CFR reads the diseased column alone</text>
        <text x="52" y="1274" fontSize="3.2" fontWeight="800" className="fill-foreground">First Aid&apos;s own hooks, attributed: “You take a case to the OR.” — printed in red in the Odds ratio EXAMPLE cell on this page (book 258).</text>
        <text x="52" y="1287" fontSize="3.2" fontWeight="800" className="fill-foreground">“Cohort = relative risk.” — First Aid&apos;s mnemonic printed on the study-designs page (book 256); it does NOT print on this page (adjudicated) — carried attributed.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1314" width="1054" height="82" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1332" fontSize="4.2" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 280 / book 258 (Public Health Sciences — Epidemiology and Biostatistics: Quantifying risk — the whole page)</text>
        <text x="42" y="1346" fontSize="3.4" className="fill-muted-foreground">Census (pdfimages + VLM at 120dpi, glm-4.6v, staging-pubh4/vlm-census.txt): ZERO raster images — the page is pure vector text and rules; the only printed graphic elements are the two</text>
        <text x="42" y="1357" fontSize="3.4" className="fill-muted-foreground">worked grids, the ⊕/⊖ symbols, and the table rules. VLM confirmed the 2×2 orientation (disease = columns, exposure = rows), the eight rows in printed order, both worked grids</text>
        <text x="42" y="1368" fontSize="3.4" className="fill-muted-foreground">(OR 20 5 / 10 20; RR 5 5 / 1 9), and the red furniture; the three top-margin formulas are text-layer content obscured by the running-header band in the render (carried, adjudicated).</text>
        <text x="42" y="1379" fontSize="3.4" className="fill-muted-foreground">ORIGINAL KYP ADAPTATION — the hub-and-spokes layout and the grammar strip are KYP&apos;s; every term, definition, example, formula, and mnemonic is preserved from the print, and the</text>
        <text x="42" y="1390" fontSize="3.4" className="fill-muted-foreground">full table is carried verbatim in the note&apos;s table block. The NNT ≈ 17 and NNH = 5 continuations are KYP arithmetic (those rows print no examples); KYP rules marked as such.</text>
      </g>
    </svg>
  );
};
