/* Public Health — PUBH batch 2, topic 8: Sensitivity, specificity, and
 * predictive values (pdf page 282 / book 260, LOWER PORTION — the pinned
 * page-split; the upper "Hazard ratio" block belongs to survival-analysis).
 * The portion carries: the stage-setter ("Sensitivity and specificity are
 * fixed properties of a test. PPV and NPV vary depending on disease
 * prevalence in population being tested. Test efficiency = (TP + TN)/
 * (TP + FN + FP + TN)"), the Test × Disease 2×2 (rows Test ⊕/⊖, columns
 * Disease ⊕/⊖, cells TP/FP/FN/TN, the PPV/NPV boxes at its right, and the
 * formula strip beneath — Sensitivity = TP/(TP + FN), Specificity =
 * TN/(TN + FP), Prevalence as a stacked fraction), the four property rows
 * (Sensitivity, Specificity, PPV, NPV — with First Aid's OWN red
 * mnemonics SN-N-OUT and SP-P-IN, carried VERBATIM and ATTRIBUTED), and
 * the CUTOFF-VALUE FIGURE (pure vector art, ORIGINAL_KYP_REDRAW): two
 * overlapping distributions — Disease absent LEFT, Disease present RIGHT —
 * y-axis "Number of people", x-axis "Test results" with cutoffs A/B/C,
 * TN and TP inside their curves, FN (A–B stretch) and FP (B–C stretch)
 * low in the overlap, the legend "Possible cutoff values for ⊕ vs ⊖ test
 * result / A = 100% sensitivity cutoff value / B = practical compromise
 * between specificity and sensitivity / C = 100% specificity cutoff
 * value", the two rule lines ("Lowering the cutoff value: ↑ Sensitivity
 * ↑ NPV / B → A (↑ FP ↓ FN) ↓ Specificity ↓ PPV" and "Raising the cutoff
 * value: ↑ Specificity ↑ PPV / B → C (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV"),
 * and the printed anemia Note. Census (pdfimages): ZERO raster images.
 * VLM-read in TWO passes (120dpi full page + five 200dpi crops,
 * staging-pubh8/vlm-census.txt), pinning: the grid orientation (Disease =
 * columns, Test = rows, circled ⊕/⊖ glyphs on BOTH axes — the raw text
 * layer drops the two ⊕ and renders the two ⊖ as "–"), the cells' pink
 * (TP/FP) and light-blue (FN/TN) shading, and the figure's geometry —
 * including that the rule lines' second printed line opens with the
 * HORIZONTAL letter-pair arrows "B → A" / "B → C", and that the figure's
 * text extracts HEAVILY interleaved in the raw layer (eight standalone
 * arrow glyphs that ALL map to the '↑' codepoint regardless of true
 * direction — a font/ToUnicode quirk; the six true ↑ merge inline, the
 * six true ↓ and the two horizontal → scatter as orphans among the axis
 * letters and quadrant labels). Direction and layout here are pinned by
 * pdftotext -bbox coordinates + the VLM crop pass; every label, formula,
 * and arrow drawn matches the print. Nothing is reproduced from the book;
 * purely presentational (no props, no hooks, no external images). */

export const DiagnosticTestMap = () => {
  const w = 1102;
  const h = 1384;

  /* A circled plus / circled minus glyph — the print's own pole symbols
   * on the grid axes and in the legend title ("for ⊕ vs ⊖ test result"). */
  const circled = (x: number, y: number, plus: boolean, key: string, cls: string) => (
    <g key={key} className={cls} strokeWidth="1.3">
      <circle cx={x} cy={y} r="5.2" fill="none" />
      <line x1={x - 2.7} y1={y} x2={x + 2.7} y2={y} />
      {plus ? <line x1={x} y1={y - 2.7} x2={x} y2={y + 2.7} /> : null}
    </g>
  );

  /* A gaussian bell curve as a closed path (fill + stroke) — the KYP
   * redraw of the book's two overlapping distributions. */
  const bell = (cx: number, sigma: number, peak: number, x0: number, x1: number, base: number) => {
    const pts: string[] = [];
    const n = 56;
    for (let i = 0; i <= n; i++) {
      const x = x0 + ((x1 - x0) * i) / n;
      const y = base - peak * Math.exp(-((x - cx) ** 2) / (2 * sigma * sigma));
      pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return `${pts.join(" ")} L${x1},${base} L${x0},${base} Z`;
  };

  const ABS = bell(235, 56, 310, 112, 403, 880); // Disease absent — LEFT
  const PRES = bell(485, 56, 290, 317, 638, 880); // Disease present — RIGHT

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Sensitivity specificity and predictive values — the Test × Disease 2×2 grid (rows Test positive and negative, columns Disease positive and negative, cells TP FP FN TN) with its six formulas: sensitivity TP over TP plus FN equal to one minus the false-negative rate, a fixed property that rules out disease when near 100 percent and screens populations (First Aid's own mnemonic SN-N-OUT: a highly sensitive test, when negative, rules out disease); specificity TN over TN plus FP equal to one minus the false-positive rate, a fixed property that rules in disease when near 100 percent and confirms a positive screen (First Aid's own mnemonic SP-P-IN: a highly specific test, when positive, rules in disease); PPV TP over TP plus FP varying directly with pretest probability; NPV TN over TN plus FN varying inversely with prevalence; prevalence TP plus FN over all; and test efficiency TP plus TN over all. Below, the cutoff-value figure redrawn: two overlapping distributions, disease absent on the left and disease present on the right, number of people on the y-axis and test results on the x-axis, with cutoff A the 100 percent sensitivity cutoff, B the practical compromise between specificity and sensitivity, and C the 100 percent specificity cutoff; lowering the cutoff from B to A raises sensitivity and NPV and false positives while lowering false negatives, specificity, and PPV; raising it from B to C raises specificity, PPV, and false negatives while lowering false positives, sensitivity, and NPV; and the printed anemia note — in diseases diagnosed by lower values the TP and TN are switched in the graph. An original KYP diagram of book 260 lower." className="min-w-[1060px]">
      <title>Sensitivity, specificity, and predictive values — the grid, the six formulas, and the cutoff trade-off</title>
      <desc>
        The Test × Disease 2×2 with formula spokes (sensitivity and specificity reading the fixed disease columns; PPV and NPV reading the prevalence-floating test rows; prevalence and test efficiency reading the whole grid), the two-overlapping-distributions cutoff figure with cutoffs A, B, C and the printed lowering and raising rules, the anemia note, and the SN-N-OUT and SP-P-IN screening-versus-confirmation pair with First Aid's mnemonics attributed.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Sensitivity, specificity, and predictive values — the fixed pair, the floating pair, and the cutoff trade-off</text>
        <rect x="812" y="25" width="250" height="18" rx="6" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">1 grid · 6 quantities · 3 cutoffs</text>
      </g>

      {/* ===== ZONE A — THE TEST × DISEASE GRID + THE SIX FORMULAS ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="372" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TEST × DISEASE GRID — four cells, six quantities (as printed)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">rows Test ⊕/⊖ × columns Disease ⊕/⊖ — the print uses circled pole glyphs on BOTH axes (ORIGINAL KYP ADAPTATION with formula spokes; the layout is KYP&apos;s, every printed label preserved)</text>

        {/* the grid */}
        <g>
          <text x="240" y="127" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Disease</text>
          {circled(184, 148, true, "gh-a", "stroke-brand")}
          <text x="196" y="151" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">(present)</text>
          {circled(289, 148, false, "gh-b", "stroke-brand")}
          <text x="301" y="151" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">(absent)</text>

          {circled(70, 203, true, "rh-a", "stroke-emergency")}
          <text x="81" y="206" fontSize="4" fontWeight="800" className="fill-foreground">Test</text>
          <text x="62" y="220" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">(positive)</text>
          {circled(70, 287, false, "rh-b", "stroke-emergency")}
          <text x="81" y="290" fontSize="4" fontWeight="800" className="fill-foreground">Test</text>
          <text x="62" y="304" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">(negative)</text>

          <rect x="135" y="168" width="105" height="82" rx="6" className="fill-emergency-soft/40 stroke-emergency" />
          <rect x="240" y="168" width="105" height="82" rx="6" className="fill-emergency-soft/30 stroke-emergency/70" />
          <rect x="135" y="250" width="105" height="82" rx="6" className="fill-brand-soft/40 stroke-brand" />
          <rect x="240" y="250" width="105" height="82" rx="6" className="fill-brand-soft/30 stroke-brand/70" />

          <text x="187" y="203" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">TP</text>
          <text x="187" y="219" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">true positive</text>
          <text x="187" y="235" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">positive test · has disease</text>

          <text x="292" y="203" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">FP</text>
          <text x="292" y="219" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">false positive</text>
          <text x="292" y="235" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">positive test · no disease</text>

          <text x="187" y="285" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">FN</text>
          <text x="187" y="301" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">false negative</text>
          <text x="187" y="317" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">negative test · has disease</text>

          <text x="292" y="285" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">TN</text>
          <text x="292" y="301" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">true negative</text>
          <text x="292" y="317" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">negative test · no disease</text>
        </g>

        {/* the six formula spokes — FIXED pair (blue, columns), FLOATING pair (amber, rows), whole-grid (dashed) */}
        <g>
          <rect x="365" y="118" width="335" height="68" rx="10" className="fill-card stroke-brand" />
          <text x="379" y="134" fontSize="3.6" fontWeight="800" className="fill-brand">SENSITIVITY (true-positive rate)</text>
          <text x="379" y="149" fontSize="3.4" fontWeight="700" className="fill-foreground">= TP/(TP + FN)  =  1 – FN rate</text>
          <text x="379" y="164" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">reads ↓ the Disease ⊕ column — with-disease people</text>
          <text x="379" y="177" fontSize="2.8" fontWeight="800" className="fill-brand">FIXED — value approaching 100% desirable for ruling OUT disease</text>

          <rect x="712" y="118" width="335" height="68" rx="10" className="fill-card stroke-brand" />
          <text x="726" y="134" fontSize="3.6" fontWeight="800" className="fill-brand">SPECIFICITY (true-negative rate)</text>
          <text x="726" y="149" fontSize="3.4" fontWeight="700" className="fill-foreground">= TN/(TN + FP)  =  1 – FP rate</text>
          <text x="726" y="164" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">reads ↓ the Disease ⊖ column — without-disease people</text>
          <text x="726" y="177" fontSize="2.8" fontWeight="800" className="fill-brand">FIXED — value approaching 100% desirable for ruling IN disease</text>

          <rect x="365" y="194" width="335" height="68" rx="10" className="fill-card stroke-warning" />
          <text x="379" y="210" fontSize="3.6" fontWeight="800" className="fill-warning">POSITIVE PREDICTIVE VALUE</text>
          <text x="379" y="225" fontSize="3.4" fontWeight="700" className="fill-foreground">PPV = TP/(TP + FP)</text>
          <text x="379" y="240" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">reads → across the Test ⊕ row — everyone called positive</text>
          <text x="379" y="253" fontSize="2.8" fontWeight="800" className="fill-warning">FLOATS — varies directly with pretest probability: high → high PPV</text>

          <rect x="712" y="194" width="335" height="68" rx="10" className="fill-card stroke-warning" />
          <text x="726" y="210" fontSize="3.6" fontWeight="800" className="fill-warning">NEGATIVE PREDICTIVE VALUE</text>
          <text x="726" y="225" fontSize="3.4" fontWeight="700" className="fill-foreground">NPV = TN/(TN + FN)</text>
          <text x="726" y="240" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">reads → across the Test ⊖ row — everyone called negative</text>
          <text x="726" y="253" fontSize="2.8" fontWeight="800" className="fill-warning">FLOATS — varies inversely with prevalence or pretest probability</text>

          <rect x="365" y="270" width="335" height="68" rx="10" className="fill-card stroke-neural" strokeDasharray="4 3" />
          <text x="379" y="286" fontSize="3.6" fontWeight="800" className="fill-neural">PREVALENCE (stacked fraction in print)</text>
          <text x="379" y="301" fontSize="3.4" fontWeight="700" className="fill-foreground">= (TP + FN)/(TP + FN + FP + TN)</text>
          <text x="379" y="316" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the Disease ⊕ column over everyone tested</text>
          <text x="379" y="329" fontSize="2.8" fontWeight="700" className="fill-neural">the dial that swings PPV ↑ and NPV ↓ (KYP)</text>

          <rect x="712" y="270" width="335" height="68" rx="10" className="fill-card stroke-neural" strokeDasharray="4 3" />
          <text x="726" y="286" fontSize="3.6" fontWeight="800" className="fill-neural">TEST EFFICIENCY (the stage-setter)</text>
          <text x="726" y="301" fontSize="3.4" fontWeight="700" className="fill-foreground">= (TP + TN)/(TP + FN + FP + TN)</text>
          <text x="726" y="316" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">correct calls (TP + TN) over everyone tested</text>
          <text x="726" y="329" fontSize="2.8" fontWeight="700" className="fill-neural">also re-mixes with prevalence — not fixed (KYP note)</text>
        </g>

        {/* the stage-setter strip */}
        <g>
          <rect x="52" y="350" width="998" height="78" rx="10" className="fill-card stroke-border" />
          <text x="66" y="370" fontSize="3.8" fontWeight="800" className="fill-foreground">THE STAGE-SETTER — the block&apos;s opening sentences (verbatim)</text>
          <text x="66" y="388" fontSize="3.2" fontWeight="700" className="fill-foreground">&quot;Sensitivity and specificity are fixed properties of a test. PPV and NPV vary depending on disease prevalence in population being tested.&quot;</text>
          <text x="66" y="406" fontSize="3" fontWeight="700" className="fill-muted-foreground">Test efficiency = (TP + TN)/(TP + FN + FP + TN)   ·   Prevalence prints as the stacked fraction (TP + FN) over (TP + FN + FP + TN)</text>
          <text x="66" y="420" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">chip key (KYP): blue border = reads a disease COLUMN (fixed) · amber border = reads a TEST ROW (floats with prevalence) · dashed = whole-grid read</text>
        </g>
      </g>

      {/* ===== ZONE B — THE CUTOFF-VALUE FIGURE (ORIGINAL KYP REDRAW) ===== */}
      <g>
        <rect x="36" y="456" width="1030" height="560" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="478" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CUTOFF-VALUE FIGURE — two overlapping distributions, three cutoffs (ORIGINAL KYP REDRAW)</text>
        <text x="52" y="489" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Disease absent LEFT · Disease present RIGHT · y-axis &quot;Number of people&quot; · x-axis &quot;Test results&quot; — every label as printed; the curve art is KYP&apos;s, rebuilt as vector</text>

        {/* the plot */}
        <g>
          <text x="60" y="502" fontSize="3.4" fontWeight="800" className="fill-muted-foreground">Number of people</text>
          <line x1="110" y1="512" x2="110" y2="880" className="stroke-foreground" strokeWidth="1.5" />
          <path d="M 106 516 L 110 506 L 114 516 Z" className="fill-foreground" />
          <line x1="110" y1="880" x2="636" y2="880" className="stroke-foreground" strokeWidth="1.5" />
          <path d="M 630 876 L 640 880 L 630 884 Z" className="fill-foreground" />

          {/* the two distributions — absent (blue) left, present (red) right */}
          <path d={ABS} className="fill-brand-soft/40 stroke-brand" strokeWidth="1.6" />
          <path d={PRES} className="fill-emergency-soft/40 stroke-emergency" strokeWidth="1.6" />

          {/* the three dashed cutoffs */}
          <line x1="305" y1="880" x2="305" y2="560" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="360" y1="880" x2="360" y2="560" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="415" y1="880" x2="415" y2="560" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4 4" />

          {/* curve labels + callout arrows (diagonal, as printed) */}
          <text x="128" y="549" fontSize="4.2" fontWeight="800" className="fill-brand">Disease absent</text>
          <line x1="202" y1="555" x2="229" y2="566" className="stroke-brand" strokeWidth="1.2" />
          <path d="M 225 563 L 233 569 L 223 570 Z" className="fill-brand" />
          <text x="500" y="549" fontSize="4.2" fontWeight="800" className="fill-emergency">Disease present</text>
          <line x1="504" y1="555" x2="489" y2="582" className="stroke-emergency" strokeWidth="1.2" />
          <path d="M 485 577 L 486 587 L 494 581 Z" className="fill-emergency" />

          {/* the four quadrant labels — TN/TP large inside the curves, FN/FP small and low in the overlap */}
          <text x="180" y="806" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">TN</text>
          <text x="328" y="856" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-emergency">FN</text>
          <text x="384" y="856" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-brand">FP</text>
          <text x="540" y="806" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">TP</text>

          {/* the cutoff letters + axis title */}
          <text x="305" y="903" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-foreground">A</text>
          <text x="360" y="903" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-foreground">B</text>
          <text x="415" y="903" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-foreground">C</text>
          <text x="373" y="924" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Test results</text>
          <text x="373" y="938" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">left = more ⊖ (negative) · right = more ⊕ (positive) — KYP annotation; the poles print in the legend title, not on the axis</text>
        </g>

        {/* the legend block */}
        <g>
          <rect x="655" y="500" width="395" height="128" rx="10" className="fill-card stroke-border" />
          <text x="668" y="524" fontSize="3.6" fontWeight="800" className="fill-foreground">Possible cutoff values for</text>
          {circled(727, 519, true, "lg-a", "stroke-foreground")}
          <text x="737" y="524" fontSize="3.6" fontWeight="800" className="fill-foreground">vs</text>
          {circled(756, 519, false, "lg-b", "stroke-foreground")}
          <text x="768" y="524" fontSize="3.6" fontWeight="800" className="fill-foreground">test result</text>
          <text x="668" y="548" fontSize="3.2" fontWeight="700" className="fill-foreground">A = 100% sensitivity cutoff value</text>
          <text x="668" y="568" fontSize="3.2" fontWeight="700" className="fill-foreground">B = practical compromise between specificity and sensitivity</text>
          <text x="668" y="588" fontSize="3.2" fontWeight="700" className="fill-foreground">C = 100% specificity cutoff value</text>
          <text x="668" y="612" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the pole glyphs print circled (⊕/⊖) — the raw text layer drops ⊕ and reads ⊖ as &quot;–&quot;</text>
        </g>

        {/* rule band 1 — LOWERING (as printed, two lines, with the B → A letter pair) */}
        <g>
          <rect x="655" y="640" width="395" height="112" rx="10" className="fill-warning-soft/30 stroke-warning" />
          <text x="668" y="662" fontSize="4" fontWeight="800" className="fill-foreground">Lowering the cutoff value: ↑ Sensitivity ↑ NPV</text>
          <text x="668" y="682" fontSize="3.5" fontWeight="700" className="fill-foreground">B → A (↑ FP ↓ FN)  ↓ Specificity ↓ PPV</text>
          <text x="668" y="700" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the wide-net move — more people called ⊕: catches diseased people (↑Se, ↓FN)</text>
          <text x="668" y="712" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">and makes negatives safer (↑NPV), but sweeps in healthy people (↑FP, ↓Sp, ↓PPV)</text>
          <text x="668" y="736" fontSize="2.9" fontWeight="800" className="fill-warning">SCREENING POSTURE — cast the wide net (KYP)</text>
        </g>

        {/* rule band 2 — RAISING (as printed, two lines, with the B → C letter pair) */}
        <g>
          <rect x="655" y="762" width="395" height="112" rx="10" className="fill-brand-soft/30 stroke-brand" />
          <text x="668" y="784" fontSize="4" fontWeight="800" className="fill-foreground">Raising the cutoff value: ↑ Specificity ↑ PPV</text>
          <text x="668" y="804" fontSize="3.5" fontWeight="700" className="fill-foreground">B → C (↑ FN ↓ FP)  ↓ Sensitivity ↓ NPV</text>
          <text x="668" y="822" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the tight-seal move — fewer people called ⊕: no false labels (↑Sp, ↓FP) and</text>
          <text x="668" y="834" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">positives become believable (↑PPV), but diseased people are missed (↑FN, ↓Se, ↓NPV)</text>
          <text x="668" y="858" fontSize="2.9" fontWeight="800" className="fill-brand">CONFIRMATION POSTURE — seal the diagnosis (KYP)</text>
        </g>

        {/* the printed anemia note */}
        <g>
          <rect x="655" y="884" width="395" height="118" rx="10" className="fill-card stroke-neural" />
          <text x="668" y="906" fontSize="3.4" fontWeight="800" className="fill-neural">THE PRINTED NOTE — lower-value diseases (eg, anemia)</text>
          <text x="668" y="924" fontSize="2.9" fontWeight="700" className="fill-foreground">&quot;In diseases where diagnosis is based on lower values</text>
          <text x="668" y="936" fontSize="2.9" fontWeight="700" className="fill-foreground">(eg, anemia), the TP and TN are switched in the graph,</text>
          <text x="668" y="948" fontSize="2.9" fontWeight="700" className="fill-foreground">ie, ↓ sensitivity and ↓ NPV, and vice-versa.&quot;</text>
          <text x="668" y="968" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">KYP reading: anemia = hemoglobin BELOW threshold → the present</text>
          <text x="668" y="980" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">curve mirrors to the LEFT — ask which direction is &quot;positive&quot;</text>
          <text x="668" y="992" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">before applying any A/B/C cutoff logic.</text>
        </g>
      </g>

      {/* ===== ZONE C — SN-N-OUT / SP-P-IN: SCREEN, THEN CONFIRM ===== */}
      <g>
        <rect x="36" y="1030" width="1030" height="252" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1052" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SCREENING → CONFIRMATION PIPELINE — First Aid&apos;s own red mnemonics, carried attributed</text>
        <text x="52" y="1063" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">sensitivity screens (miss nothing — a negative rules OUT) · specificity confirms a positive screen (a positive rules IN)</text>

        {/* SN-N-OUT card */}
        <g>
          <rect x="52" y="1076" width="494" height="190" rx="10" className="fill-card stroke-emergency" />
          <text x="70" y="1102" fontSize="6" fontWeight="800" className="fill-emergency">SN-N-OUT</text>
          <rect x="346" y="1088" width="184" height="16" rx="5" className="fill-emergency-soft/50" />
          <text x="438" y="1099" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-emergency">First Aid&apos;s own — printed in red</text>
          <text x="70" y="1122" fontSize="3" fontWeight="700" className="fill-foreground">&quot;SN-N-OUT = highly SeNsitive test, when Negative, rules OUT disease&quot;</text>
          <text x="70" y="1140" fontSize="3" fontWeight="700" className="fill-foreground">Sensitivity = TP/(TP + FN) = 1 – FN rate · low false-negative rate</text>
          <text x="70" y="1156" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">value approaching 100% is desirable for ruling out disease</text>
          <text x="70" y="1176" fontSize="3" fontWeight="800" className="fill-foreground">High sensitivity test used for SCREENING</text>
          <rect x="70" y="1192" width="88" height="22" rx="6" className="fill-secondary/40 stroke-border" />
          <text x="114" y="1206.5" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">population</text>
          <line x1="158" y1="1203" x2="176" y2="1203" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 174 1199 L 184 1203 L 174 1207 Z" className="fill-foreground" />
          <rect x="188" y="1192" width="112" height="22" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
          <text x="244" y="1206.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-emergency">high-Se SCREEN</text>
          <rect x="316" y="1184" width="220" height="17" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="326" y="1195.5" fontSize="2.6" fontWeight="800" className="fill-success">NEGATIVE result → rule OUT disease ✓</text>
          <rect x="316" y="1206" width="220" height="17" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="326" y="1217.5" fontSize="2.6" fontWeight="800" className="fill-warning">POSITIVE result → send to confirmation ↓</text>
        </g>

        {/* SP-P-IN card */}
        <g>
          <rect x="560" y="1076" width="490" height="190" rx="10" className="fill-card stroke-brand" />
          <text x="578" y="1102" fontSize="6" fontWeight="800" className="fill-brand">SP-P-IN</text>
          <rect x="856" y="1088" width="184" height="16" rx="5" className="fill-brand-soft/50" />
          <text x="948" y="1099" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-brand">First Aid&apos;s own — printed in red</text>
          <text x="578" y="1122" fontSize="3" fontWeight="700" className="fill-foreground">&quot;SP-P-IN = highly SPecific test, when Positive, rules IN disease&quot;</text>
          <text x="578" y="1140" fontSize="3" fontWeight="700" className="fill-foreground">Specificity = TN/(TN + FP) = 1 – FP rate · low false-positive rate</text>
          <text x="578" y="1156" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">value approaching 100% is desirable for ruling in disease</text>
          <text x="578" y="1176" fontSize="3" fontWeight="800" className="fill-foreground">High specificity test used for CONFIRMATION after a positive screening test</text>
          <rect x="578" y="1192" width="104" height="22" rx="6" className="fill-secondary/40 stroke-border" />
          <text x="630" y="1206.5" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-foreground">positive screen</text>
          <line x1="682" y1="1203" x2="700" y2="1203" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 698 1199 L 708 1203 L 698 1207 Z" className="fill-foreground" />
          <rect x="712" y="1192" width="112" height="22" rx="6" className="fill-brand-soft/30 stroke-brand" />
          <text x="768" y="1206.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-brand">high-Sp CONFIRM</text>
          <rect x="838" y="1184" width="204" height="17" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="848" y="1195.5" fontSize="2.6" fontWeight="800" className="fill-success">POSITIVE result → rule IN disease ✓</text>
          <rect x="838" y="1206" width="204" height="17" rx="5" className="fill-secondary/40 stroke-border" />
          <text x="848" y="1217.5" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">NEGATIVE → reassess (does not rule out)</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1296" width="1054" height="74" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1316" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 282 / book 260 lower (Public Health Sciences — Epidemiology and Biostatistics: Evaluation of diagnostic tests)</text>
        <text x="42" y="1328" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the color-shaded 2×2 grid + formula strip (an ORIGINAL KYP ADAPTATION with spokes) and the pure-vector cutoff figure (an ORIGINAL_KYP_REDRAW);</text>
        <text x="42" y="1338" fontSize="3.8" className="fill-muted-foreground">VLM-read in TWO passes (120dpi full page + 200dpi crops, staging-pubh8/vlm-census.txt). The figure&apos;s text extracts heavily interleaved in the raw layer — eight standalone arrow glyphs</text>
        <text x="42" y="1348" fontSize="3.8" className="fill-muted-foreground">that ALL map to the &apos;↑&apos; codepoint regardless of true direction — so the geometry is pinned by pdftotext -bbox + the VLM crop pass; every label and arrow drawn matches the print.</text>
        <text x="42" y="1362" fontSize="3.8" className="fill-muted-foreground">ADJUDICATION — the rule lines print on TWO lines opening &quot;B → A&quot; / &quot;B → C&quot; (horizontal arrows); the axis poles print as circled ⊕/⊖ in &quot;Possible cutoff values for ⊕ vs ⊖ test result&quot; (raw layer drops ⊕).</text>
      </g>
    </svg>
  );
};
