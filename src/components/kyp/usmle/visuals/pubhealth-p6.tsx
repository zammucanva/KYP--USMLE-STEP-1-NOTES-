/* Public Health — PUBH batch 2, topic 6: Likelihood ratios (MID portion of
 * pdf page 281 / book 259 — a PINNED PAGE-SPLIT; the block sits between the
 * Demographic transition block above (vital-statistics-populations) and the
 * Kaplan-Meier curve block below (survival-analysis)). The block carries:
 * the navy row-label heading "Likelihood ratio"; TWO stacked-fraction
 * equation rows, each THREE equal fractions joined by "=" signs —
 *   LR+ = probability of positive result in patient with disorder /
 *         probability of positive result in patient without disorder
 *       = sensitivity / (1 – specificity) = TP rate / FP rate
 *   LR– = probability of negative result in patient with disorder /
 *         probability of negative result in patient without disorder
 *       = (1 – sensitivity) / specificity = FN rate / TN rate
 * and TWO rule sentences printed in BLACK body text directly beneath the
 * equations (VLM + PyMuPDF span colors; NOT red): "LR+ > 10 indicates a
 * highly specific test, while LR– < 0.1 indicates a highly sensitive test."
 * and "Pretest odds × LR = posttest odds. Posttest probability = posttest
 * odds / (posttest odds + 1)." Census (pdfimages): ZERO raster images —
 * pure text with vector fraction bars -> ORIGINAL KYP ADAPTATION (the
 * equation rows re-laid-out as fraction cards + a thresholds number line +
 * the odds-chain calculation rail; every printed label preserved). Raw-
 * layer quirks documented in the note header + manifest: LR+ merges its 2nd
 * and 3rd DENOMINATORS onto one line ("1 – specificity FP rate"), LR–
 * mirrors with the merge on the NUMERATOR side ("1 – sensitivity FN rate");
 * the two rule sentences PRINT between the LR– row and the Kaplan-Meier
 * heading but EXTRACT after the Kaplan-Meier text (reading-order jumble,
 * bbox-pinned); minus signs print as spaced en-dashes (U+2013) and the
 * multiplication sign as U+00D7, carried as printed; the LR labels print
 * with superscript +/– (flattened by the text layer). KYP additions are
 * flagged as such on the visual (the p/(1–p) conversion, the worked 20% /
 * LR+ 10 / LR– 0.1 numbers, the rule-in/rule-out phrasing — the print says
 * "indicates a highly specific/sensitive test" only; SP-P-IN and SN-N-OUT
 * are First Aid's OWN hooks from the facing page, carried attributed).
 * Nothing is reproduced from the book; purely presentational (no props, no
 * hooks, no external images). */

export const LikelihoodRatioMap = () => {
  const w = 1102;
  const h = 1128;

  /* One stacked fraction: numerator text, a horizontal bar (as printed),
   * denominator text — all horizontally centered on cx. */
  const frac = (
    cx: number,
    barY: number,
    num: string,
    den: string,
    barW: number,
    key: string,
    numCls = "fill-foreground",
    denCls = "fill-muted-foreground"
  ) => (
    <g key={key}>
      <text x={cx} y={barY - 4.5} textAnchor="middle" fontSize="2.7" fontWeight="700" className={numCls}>{num}</text>
      <line x1={cx - barW / 2} y1={barY} x2={cx + barW / 2} y2={barY} className="stroke-foreground" strokeWidth="1" />
      <text x={cx} y={barY + 8} textAnchor="middle" fontSize="2.7" fontWeight="700" className={denCls}>{den}</text>
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Likelihood ratios — the two printed stacked-fraction formulas with all three equivalent forms each (LR+: probability of positive result in patient with disorder over probability of positive result in patient without disorder, equal to sensitivity over 1 minus specificity, equal to TP rate over FP rate; LR–: probability of negative result in patient with disorder over probability of negative result in patient without disorder, equal to 1 minus sensitivity over specificity, equal to FN rate over TN rate), the printed thresholds band (LR+ greater than 10 indicates a highly specific test; LR– less than 0.1 indicates a highly sensitive test) drawn on one number line, and the printed odds chain as a horizontal calculation rail (pretest probability 20 percent becomes pretest odds 0.25, times LR+ 10 gives posttest odds 2.5 and posttest probability about 71 percent, times LR– 0.1 gives posttest odds 0.025 and posttest probability about 2.4 percent) — an original KYP diagram of book 259 mid." className="min-w-[1060px]">
      <title>Likelihood ratios — from pretest to posttest odds</title>
      <desc>
        The two likelihood-ratio equation rows as stacked-fraction cards (each with its definition form, sensitivity/specificity form, and 2×2 rate form), the LR+ &gt; 10 and LR– &lt; 0.1 thresholds on a single number line with the LR = 1 no-shift midpoint, and the pretest-odds × LR = posttest-odds calculation rail worked with a 20% pretest probability through both a positive (LR+ 10) and a negative (LR– 0.1) result.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Likelihood ratios — from pretest to posttest odds</text>
        <rect x="806" y="25" width="256" height="18" rx="6" className="fill-brand-soft" />
        <text x="934" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">2 ratios · 3 forms each · 1 chain</text>
      </g>

      {/* ===== ZONE A — THE TWO EQUATION ROWS AS FRACTION CARDS ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="330" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TWO PRINTED EQUATION ROWS — three equivalent stacked fractions each (as printed)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ORIGINAL KYP ADAPTATION — every printed word preserved; the fraction bars are drawn as in the print · the card layout is KYP&apos;s</text>

        {/* CARD 1 — LR+ */}
        <g>
          <rect x="52" y="112" width="502" height="258" rx="10" className="fill-card stroke-border" />
          <text x="66" y="134" fontSize="4.6" fontWeight="800" className="fill-brand">LR+ — the POSITIVE-result ratio</text>
          <text x="66" y="146" fontSize="3" fontWeight="700" className="fill-muted-foreground">divides the test-POSITIVE column of the 2×2 grid: TP rate ÷ FP rate (KYP decoder)</text>

          {/* the equation: LR+ = fraction = fraction = fraction */}
          <text x="66" y="207" fontSize="4.2" fontWeight="800" className="fill-foreground">LR+ =</text>
          {frac(243, 200, "probability of positive result in patient with disorder", "probability of positive result in patient without disorder", 170, "lrp-f1")}
          <text x="334" y="203" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">=</text>
          {frac(384, 200, "sensitivity", "1 – specificity", 62, "lrp-f2")}
          <text x="434" y="203" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">=</text>
          {frac(474, 200, "TP rate", "FP rate", 44, "lrp-f3")}

          {/* form labels (KYP) */}
          <text x="243" y="224" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">definition form</text>
          <text x="384" y="224" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">sens/spec form</text>
          <text x="474" y="224" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">2×2 rate form</text>

          {/* the printed threshold chip */}
          <rect x="66" y="238" width="300" height="18" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="216" y="250" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">LR+ &gt; 10 — HIGHLY SPECIFIC TEST (printed)</text>
          <text x="66" y="276" fontSize="2.9" fontWeight="700" className="fill-foreground/80">A positive result is &gt;10× more likely in the diseased than in the well — disease odds</text>
          <text x="66" y="286" fontSize="2.9" fontWeight="700" className="fill-foreground/80">multiply tenfold-plus: the result RULES IN (SP-P-IN — the facing page&apos;s own hook).</text>
          <text x="66" y="306" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Why: only a vanishing FP rate (1 – specificity) can push the division past 10 (KYP).</text>
          <text x="66" y="322" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">The “1 –” sits DOWNSTAIRS in LR+ — the intact statistic names the certified quality.</text>
          <text x="66" y="352" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Raw-layer quirk (documented): this row&apos;s 2nd + 3rd DENOMINATORS merge onto one</text>
          <text x="66" y="362" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">text-layer line — “1 – specificity FP rate”.</text>
        </g>

        {/* CARD 2 — LR– */}
        <g>
          <rect x="566" y="112" width="502" height="258" rx="10" className="fill-card stroke-border" />
          <text x="580" y="134" fontSize="4.6" fontWeight="800" className="fill-brand">LR– — the NEGATIVE-result ratio</text>
          <text x="580" y="146" fontSize="3" fontWeight="700" className="fill-muted-foreground">divides the test-NEGATIVE column of the 2×2 grid: FN rate ÷ TN rate (KYP decoder)</text>

          {/* the equation: LR– = fraction = fraction = fraction */}
          <text x="580" y="207" fontSize="4.2" fontWeight="800" className="fill-foreground">LR– =</text>
          {frac(757, 200, "probability of negative result in patient with disorder", "probability of negative result in patient without disorder", 170, "lrm-f1")}
          <text x="848" y="203" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">=</text>
          {frac(898, 200, "1 – sensitivity", "specificity", 62, "lrm-f2")}
          <text x="948" y="203" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">=</text>
          {frac(988, 200, "FN rate", "TN rate", 44, "lrm-f3")}

          {/* form labels (KYP) */}
          <text x="757" y="224" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">definition form</text>
          <text x="898" y="224" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">sens/spec form</text>
          <text x="988" y="224" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">2×2 rate form</text>

          {/* the printed threshold chip */}
          <rect x="580" y="238" width="300" height="18" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="730" y="250" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">LR– &lt; 0.1 — HIGHLY SENSITIVE TEST (printed)</text>
          <text x="580" y="276" fontSize="2.9" fontWeight="700" className="fill-foreground/80">A negative result is &gt;10× more likely in the well than in the diseased — disease odds</text>
          <text x="580" y="286" fontSize="2.9" fontWeight="700" className="fill-foreground/80">collapse tenfold-plus: the result RULES OUT (SN-N-OUT — the facing page&apos;s own hook).</text>
          <text x="580" y="306" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Why: only a vanishing FN rate (1 – sensitivity) can push the division under 0.1 (KYP).</text>
          <text x="580" y="322" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">The “1 –” sits UPSTAIRS in LR– — the mirror of LR+&apos;s downstairs complement.</text>
          <text x="580" y="352" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Raw-layer quirk (documented): this row&apos;s 2nd + 3rd NUMERATORS merge onto one</text>
          <text x="580" y="362" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">text-layer line — “1 – sensitivity FN rate”.</text>
        </g>

        {/* the rule strip */}
        <line x1="52" y1="380" x2="1050" y2="380" className="stroke-border" strokeWidth="1" />
        <text x="52" y="392" fontSize="3.4" fontWeight="800" className="fill-foreground">PRINTED, VERBATIM — “LR+ &gt; 10 indicates a highly specific test, while LR– &lt; 0.1 indicates a highly sensitive test.” · “Pretest odds × LR = posttest odds. Posttest probability = posttest odds / (posttest odds + 1).”</text>
      </g>

      {/* ===== ZONE B — THE THRESHOLDS ON ONE NUMBER LINE ===== */}
      <g>
        <rect x="36" y="414" width="1030" height="196" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="436" fontSize="5.4" fontWeight="800" className="fill-foreground">THE THRESHOLDS ON ONE LINE — how far the ratio sits from 1</text>
        <text x="52" y="447" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the number line and the LR = 1 midpoint are KYP additions; both threshold labels are the print&apos;s own sentence</text>

        {/* the number line */}
        <line x1="120" y1="502" x2="1000" y2="502" className="stroke-foreground" strokeWidth="1.5" />
        <path d="M 998 498 L 1008 502 L 998 506 Z" className="fill-foreground" />
        <line x1="240" y1="495" x2="240" y2="509" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="560" y1="495" x2="560" y2="509" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="880" y1="495" x2="880" y2="509" className="stroke-foreground" strokeWidth="1.5" />
        <text x="240" y="522" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-warning">0.1</text>
        <text x="560" y="522" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">1</text>
        <text x="880" y="522" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-success">10</text>

        {/* left band — LR– < 0.1 */}
        <rect x="120" y="458" width="240" height="26" rx="8" className="fill-warning-soft/50 stroke-warning" />
        <text x="240" y="469" textAnchor="middle" fontSize="3.1" fontWeight="800" className="fill-warning">LR– &lt; 0.1 — highly SENSITIVE test</text>
        <text x="240" y="478" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-warning">negative result RULES OUT · SN-N-OUT</text>
        <text x="240" y="538" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">odds ÷10-plus — a near-zero</text>
        <text x="240" y="548" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">FN rate does it (KYP)</text>

        {/* middle band — LR = 1 */}
        <rect x="440" y="458" width="240" height="26" rx="8" className="fill-card stroke-border" strokeDasharray="4 3" />
        <text x="560" y="469" textAnchor="middle" fontSize="3.1" fontWeight="800" className="fill-foreground">LR = 1 — NO SHIFT (KYP)</text>
        <text x="560" y="478" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">result equally likely in diseased and well</text>
        <text x="560" y="538" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">posttest odds = pretest odds —</text>
        <text x="560" y="548" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the test added no information</text>

        {/* right band — LR+ > 10 */}
        <rect x="760" y="458" width="240" height="26" rx="8" className="fill-success-soft/50 stroke-success" />
        <text x="880" y="469" textAnchor="middle" fontSize="3.1" fontWeight="800" className="fill-success">LR+ &gt; 10 — highly SPECIFIC test</text>
        <text x="880" y="478" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-success">positive result RULES IN · SP-P-IN</text>
        <text x="880" y="538" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">odds ×10-plus — a near-zero</text>
        <text x="880" y="548" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">FP rate does it (KYP)</text>

        {/* the axis end label */}
        <text x="1004" y="538" textAnchor="end" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">larger LR+ →</text>
        <text x="116" y="538" textAnchor="start" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">→ smaller LR–</text>
      </g>

      {/* ===== ZONE C — THE ODDS-CHAIN CALCULATION RAIL ===== */}
      <g>
        <rect x="36" y="624" width="1030" height="400" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="646" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CALCULATION RAIL — pretest probability → pretest odds → × LR → posttest odds → posttest probability</text>
        <text x="52" y="657" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the ×LR and odds/(odds + 1) steps are PRINTED; the p/(1–p) conversion is the unprinted hinge (KYP, flagged) · worked example: 20% prior, LR+ 10, LR– 0.1</text>

        {/* shared start: the tall pretest card (probability → odds) */}
        <g>
          <rect x="66" y="690" width="200" height="250" rx="10" className="fill-card stroke-border" />
          <text x="166" y="712" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">PRETEST PROBABILITY</text>
          <text x="166" y="730" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">20%</text>
          <text x="166" y="746" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the prior — prevalence or</text>
          <text x="166" y="756" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">clinical score (KYP)</text>
          <line x1="82" y1="770" x2="250" y2="770" className="stroke-border" strokeWidth="1" strokeDasharray="4 3" />
          <text x="166" y="784" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-emergency">↓ ÷ (1 – p) — unprinted (KYP)</text>
          <text x="166" y="802" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">PRETEST ODDS</text>
          <text x="166" y="820" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">0.25 (1:4)</text>
          <text x="166" y="836" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">odds = p/(1–p)</text>
          <text x="166" y="862" textAnchor="middle" fontSize="2.9" fontWeight="800" className="fill-foreground">ONE PRIOR → TWO RESULTS</text>
          <text x="166" y="876" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the observed result picks the</text>
          <text x="166" y="886" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">LR: LR+ if the test is positive,</text>
          <text x="166" y="896" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">LR– if it is negative</text>
        </g>

        {/* branch arrows out of the shared card */}
        <line x1="270" y1="745" x2="298" y2="745" className="stroke-success" strokeWidth="1.2" />
        <path d="M 296 741 L 306 745 L 296 749 Z" className="fill-success" />
        <line x1="270" y1="885" x2="298" y2="885" className="stroke-warning" strokeWidth="1.2" />
        <path d="M 296 881 L 306 885 L 296 889 Z" className="fill-warning" />

        {/* POSITIVE lane */}
        <g>
          <rect x="306" y="706" width="220" height="78" rx="10" className="fill-card stroke-success" />
          <text x="416" y="724" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-success">POSITIVE RESULT</text>
          <text x="416" y="740" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">× LR+ 10 — printed step</text>
          <text x="416" y="760" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">0.25 × 10 = 2.5</text>
          <text x="416" y="774" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">“Pretest odds × LR = posttest odds.”</text>
          <line x1="526" y1="745" x2="548" y2="745" className="stroke-success" strokeWidth="1.2" />
          <path d="M 546 741 L 556 745 L 546 749 Z" className="fill-success" />
          <rect x="556" y="706" width="220" height="78" rx="10" className="fill-card stroke-success" />
          <text x="666" y="724" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">POSTTEST ODDS</text>
          <text x="666" y="744" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-success">2.5 (5:2)</text>
          <text x="666" y="762" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">still odds-space — not a probability</text>
          <line x1="776" y1="745" x2="798" y2="745" className="stroke-success" strokeWidth="1.2" />
          <path d="M 796 741 L 806 745 L 796 749 Z" className="fill-success" />
          <rect x="806" y="706" width="220" height="78" rx="10" className="fill-success-soft/50 stroke-success" />
          <text x="916" y="724" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-success">POSTTEST PROBABILITY</text>
          <text x="916" y="746" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-success">≈ 71%</text>
          <text x="916" y="764" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-success">2.5/(2.5 + 1) — printed conversion</text>
          <text x="916" y="778" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">past the &gt;10 line — RULES IN</text>
        </g>

        {/* NEGATIVE lane */}
        <g>
          <rect x="306" y="846" width="220" height="78" rx="10" className="fill-card stroke-warning" />
          <text x="416" y="864" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">NEGATIVE RESULT</text>
          <text x="416" y="880" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">× LR– 0.1 — printed step</text>
          <text x="416" y="900" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">0.25 × 0.1 = 0.025</text>
          <text x="416" y="914" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">a fraction LR SHRINKS the odds</text>
          <line x1="526" y1="885" x2="548" y2="885" className="stroke-warning" strokeWidth="1.2" />
          <path d="M 546 881 L 556 885 L 546 889 Z" className="fill-warning" />
          <rect x="556" y="846" width="220" height="78" rx="10" className="fill-card stroke-warning" />
          <text x="666" y="864" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">POSTTEST ODDS</text>
          <text x="666" y="884" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">0.025 (1:40)</text>
          <text x="666" y="902" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">still odds-space — not a probability</text>
          <line x1="776" y1="885" x2="798" y2="885" className="stroke-warning" strokeWidth="1.2" />
          <path d="M 796 881 L 806 885 L 796 889 Z" className="fill-warning" />
          <rect x="806" y="846" width="220" height="78" rx="10" className="fill-warning-soft/50 stroke-warning" />
          <text x="916" y="864" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">POSTTEST PROBABILITY</text>
          <text x="916" y="886" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">≈ 2.4%</text>
          <text x="916" y="904" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-warning">0.025/(0.025 + 1) — printed conversion</text>
          <text x="916" y="918" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">under the &lt;0.1 line — RULES OUT</text>
        </g>

        {/* the between-lanes caption */}
        <text x="666" y="820" textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the same 20% prior, two directions — one LR per observed result, then the printed back-conversion odds/(odds + 1) (KYP readout)</text>

        {/* the rail rule strip */}
        <line x1="52" y1="946" x2="1050" y2="946" className="stroke-border" strokeWidth="1" />
        <text x="52" y="958" fontSize="3.4" fontWeight="800" className="fill-foreground">THE KYP RULE — one LR per observed result: positive → × LR+, negative → × LR– · the rail chains: each new result multiplies the running odds again (pretest odds × LR₁ × LR₂ = posttest odds)</text>
        <text x="52" y="968" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Prevalence-proof (KYP): the ratios are built only from the 2×2 columns (sensitivity, specificity and their complements), so the same LRs update ANY prior — unlike PPV/NPV, which drift with prevalence.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1040" width="1054" height="70" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1058" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 281 / book 259 mid (Public Health Sciences — Epidemiology and Biostatistics: Likelihood ratio)</text>
        <text x="42" y="1070" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — pure text with vector fraction bars, re-laid-out here as an ORIGINAL KYP ADAPTATION (every printed label preserved: heading, both equation rows in all three</text>
        <text x="42" y="1080" fontSize="3.8" className="fill-muted-foreground">forms, both rule sentences; VLM-read at 120dpi, staging-pubh6/vlm-census.txt — the two sentences print in BLACK body text beneath the equations, not red; the LR labels print with superscript +/–).</text>
        <text x="42" y="1090" fontSize="3.8" className="fill-muted-foreground">Pinned page-split: the Demographic transition block sits above (vital-statistics-populations), the Kaplan-Meier curve block below (survival-analysis) — no quote crosses the boundary.</text>
        <text x="42" y="1102" fontSize="3.8" className="fill-muted-foreground">KYP additions flagged on the visual: the p/(1–p) conversion, the worked 20% / LR+ 10 / LR– 0.1 numbers, the number line, the rule-in/rule-out phrasing · SP-P-IN / SN-N-OUT are First Aid&apos;s own facing-page hooks, carried attributed.</text>
      </g>
    </svg>
  );
};
