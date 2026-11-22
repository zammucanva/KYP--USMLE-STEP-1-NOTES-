/* Public Health — PUBH batch 2, topic 15: Confidence intervals and
 * meta-analysis (UPPER portion of pdf page 289 / book 267 — a PINNED
 * PAGE-SPLIT; the topic owns from the page top through the END of the
 * "Meta-analysis" block, ending immediately BEFORE the navy "Common
 * statistical tests" heading, which opens the LOWER portion owned by
 * statistical-tests). The upper portion carries THREE blocks, all owned:
 * (1) "Confidence interval" — the definition ("Range of values within
 * which the true mean of the population is expected to fall, with a
 * specified probability."), the level rule "CI = 1 – α. The 95% CI
 * (corresponding to α = 0.05) is often used. As sample size increases,
 * CI narrows.", the formula "CI for sample mean = x ± Z(SE)" (x prints
 * with an OVERBAR, x̄ — VLM-confirmed; flattened to plain x by the text
 * layer), and the two Z constants ("For the 95% CI, Z = 1.96." /
 * "For the 99% CI, Z = 2.58.");
 * (2) THE SIGNIFICANCE-RULES PANEL — borderless, printing to the RIGHT of
 * the CI block in the same band (bbox x≈421–612 vs the CI body x≈199–380,
 * VLM-confirmed; it EXTRACTS after the Meta-analysis body in the raw text
 * stream — a reading-order jumble, documented), with small TEAL SQUARE
 * bullets (text layer "\u0083▘"): "H0 is rejected (and results are
 * significant) when: 95% CI for mean difference excludes 0 / 95% CI OR or
 * RR excludes 1 / CIs between two groups do not overlap" and the mirrored
 * "H0 is not rejected (and results are not significant) when: ... includes
 * 0 / ... includes 1 / ... do overlap" (H0 prints with a SUBSCRIPT zero);
 * (3) "Meta-analysis" — "A method of statistical analysis that pools
 * summary data (eg, means, RRs) from multiple studies for a more precise
 * estimate of the size of an effect. Also estimates heterogeneity of
 * effect sizes between studies." / "Improves power, strength of evidence,
 * and generalizability (external validity) of study findings." / "Limited
 * by quality of individual studies and bias in study selection."
 * CENSUS (pdfimages): ZERO raster images on the page; the VLM census (TWO
 * passes — 120dpi full page + 300dpi upper crop, staging-pubh15/
 * vlm-census.txt) found NO figure, curve, distribution, error-bar
 * diagram, forest plot, or icon ANYWHERE in the upper portion — the page's
 * only figure (the test-selection flow diagram) lies BELOW the split and
 * belongs to statistical-tests. The upper portion is PURE TEXT →
 * ORIGINAL KYP ADAPTATION: every number line, bracket, tick, and pooling
 * arrow in this visual is KYP-DRAWN GEOMETRY (flagged); every quoted
 * sentence is the print's own. The worked interval positions, the three
 * pooled-study cards, and the null-value router strip are KYP additions,
 * marked as such. The page prints NO mnemonic of its own in the upper
 * portion (VLM: no red text, no margin notes) — the four mnemonics shown
 * (MEANS TO 0, RATIOS TO 1 · EXCLUDE TO CONCLUDE — INCLUDE TO RETAIN ·
 * 1-9-6 AT 95, 2-5-8 AT 99 · POOL, PRICE, POWER — MIND THE GARBAGE) are
 * KYP ORIGINALS. Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

export const CiMetaMap = () => {
  const w = 1102;
  const h = 1238;

  /* One number-line axis: a plain ruled line with end ticks. */
  const axis = (x1: number, x2: number, y: number, key: string) => (
    <g key={key}>
      <line x1={x1} y1={y} x2={x2} y2={y} className="stroke-foreground" strokeWidth="1.2" />
      <line x1={x1} y1={y - 3} x2={x1} y2={y + 3} className="stroke-foreground" strokeWidth="1.2" />
      <line x1={x2} y1={y - 3} x2={x2} y2={y + 3} className="stroke-foreground" strokeWidth="1.2" />
    </g>
  );

  /* A null-value tick with its label below the line. */
  const nullTick = (x: number, y: number, label: string, key: string) => (
    <g key={key}>
      <line x1={x} y1={y - 5} x2={x} y2={y + 5} className="stroke-foreground" strokeWidth="1.6" />
      <text x={x} y={y + 13} textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-foreground">{label}</text>
    </g>
  );

  /* An interval bracket drawn as a soft rounded rect riding the axis. */
  const bracket = (x: number, y: number, bw: number, cls: string, key: string) => (
    <rect key={key} x={x} y={y} width={bw} height="12" rx="4" className={cls} strokeWidth="1.2" />
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Confidence intervals and meta-analysis — the printed confidence interval block (range of values within which the true mean of the population is expected to fall with a specified probability; CI = 1 minus alpha, the 95 percent CI corresponding to alpha 0.05 often used; as sample size increases CI narrows; CI for sample mean = x plus or minus Z times SE; Z = 1.96 for the 95 percent CI and Z = 2.58 for the 99 percent CI) drawn on number lines with the two Z constants and the sample-size narrowing dial; the six mirrored significance rules as number-line glyphs (H0 is rejected and results are significant when the 95 percent CI for mean difference excludes 0, the 95 percent CI for OR or RR excludes 1, or the CIs between two groups do not overlap; H0 is not rejected and results are not significant when the intervals include 0, include 1, or the two groups' CIs do overlap); and the meta-analysis pooling diagram (a method of statistical analysis that pools summary data such as means and RRs from multiple studies for a more precise estimate of the size of an effect, also estimating heterogeneity of effect sizes between studies; improves power, strength of evidence, and generalizability external validity; limited by quality of individual studies and bias in study selection) — an original KYP diagram of book 267 upper." className="min-w-[1060px]">
      <title>Confidence intervals and meta-analysis — the interval, the verdict rules, and the pool</title>
      <desc>
        Three zones: the confidence interval formula card (the definition, CI = 1 – α, x̄ ± Z(SE) on a number line with the 95 percent bracket inside the wider 99 percent bracket, and the sample-size narrowing dial), the six mirrored significance rules drawn as number-line glyphs in a rejected column and a not-rejected column, and the meta-analysis pooling diagram (three study estimates converging into one narrower pooled estimate, with the heterogeneity, gains, and limits chips).
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Confidence intervals and meta-analysis — the interval, the verdict rules, and the pool</text>
        <rect x="852" y="25" width="210" height="18" rx="6" className="fill-brand-soft" />
        <text x="957" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">1 formula · 6 rules · 1 pool</text>
      </g>

      {/* ===== ZONE A — THE CONFIDENCE INTERVAL FORMULA CARD ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="270" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CONFIDENCE INTERVAL — the printed block, drawn on number lines</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ORIGINAL KYP ADAPTATION — every quoted sentence is the print&apos;s own; the number lines are KYP geometry (the print is pure text — no figure prints in the upper portion)</text>

        {/* LEFT CARD — the printed CI block */}
        <g>
          <rect x="52" y="112" width="508" height="214" rx="10" className="fill-card stroke-border" />
          <text x="66" y="132" fontSize="4.6" fontWeight="800" className="fill-brand">THE PRINTED CI BLOCK</text>
          <text x="66" y="149" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“Range of values within which the true mean of the population is expected</text>
          <text x="66" y="159" fontSize="2.9" fontWeight="700" className="fill-foreground/80">to fall, with a specified probability.”</text>
          <text x="66" y="176" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“CI = 1 – α. The 95% CI (corresponding to α = 0.05) is often used.”</text>

          {/* the formula, large: x̄ ± Z(SE) with a drawn overbar on the x */}
          <text x="66" y="212" fontSize="5" fontWeight="800" className="fill-foreground">CI for sample mean =</text>
          <text x="230" y="213" fontSize="6.5" fontWeight="800" className="fill-foreground">x</text>
          <line x1="226" y1="203.5" x2="240" y2="203.5" className="stroke-foreground" strokeWidth="1.2" />
          <text x="246" y="213" fontSize="6.5" fontWeight="800" className="fill-foreground">± Z(SE)</text>
          <text x="330" y="212" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">← the print&apos;s x carries an overbar (x̄)</text>

          {/* the two Z constant chips */}
          <rect x="66" y="228" width="228" height="20" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="180" y="241.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">“For the 95% CI, Z = 1.96.”</text>
          <rect x="304" y="228" width="228" height="20" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="418" y="241.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-brand">“For the 99% CI, Z = 2.58.” — wider</text>

          {/* the precision dial */}
          <text x="66" y="268" fontSize="3" fontWeight="800" className="fill-foreground">THE PRECISION DIAL — “As sample size increases, CI narrows.”</text>
          <text x="66" y="288" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">small n —</text>
          {axis(118, 400, 285, "dial-a")}
          {bracket(150, 279, 200, "fill-warning-soft/40 stroke-warning", "dial-a-b")}
          <text x="408" y="288" fontSize="2.6" fontWeight="700" className="fill-warning">wide interval — imprecise</text>
          <text x="66" y="311" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">large n —</text>
          {axis(118, 400, 308, "dial-b")}
          {bracket(240, 302, 56, "fill-success-soft/40 stroke-success", "dial-b-b")}
          <text x="304" y="311" fontSize="2.6" fontWeight="700" className="fill-success">narrow — precise</text>
          <text x="66" y="324" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">SE shrinks as the sample grows (KYP: SE falls with √n) — the only printed width dial at a fixed level.</text>
        </g>

        {/* RIGHT CARD — the interval on a number line */}
        <g>
          <rect x="576" y="112" width="490" height="214" rx="10" className="fill-card stroke-border" />
          <text x="590" y="132" fontSize="4.6" fontWeight="800" className="fill-brand">THE INTERVAL ON A NUMBER LINE — x̄ ± Z(SE)</text>

          {/* the 99% bracket (top, wider) */}
          <rect x="670" y="146" width="310" height="12" rx="4" className="fill-brand-soft/60 stroke-brand" />
          <text x="825" y="155.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-brand">99% CI — Z = 2.58 (wider net, more confidence)</text>

          {/* the axis with the x̄ tick */}
          {axis(610, 1040, 190, "nl")}
          <line x1="825" y1="183" x2="825" y2="197" className="stroke-foreground" strokeWidth="1.6" />
          <text x="825" y="178" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">x̄</text>

          {/* dashed guides tying each bracket to its bounds */}
          <line x1="670" y1="158" x2="670" y2="190" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="980" y1="158" x2="980" y2="190" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

          {/* the 95% bracket (bottom, narrower) */}
          <rect x="707" y="204" width="236" height="12" rx="4" className="fill-success-soft/50 stroke-success" />
          <text x="825" y="213.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-success">95% CI — Z = 1.96</text>
          <line x1="707" y1="190" x2="707" y2="204" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="942" y1="190" x2="942" y2="204" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

          {/* the bound labels */}
          <text x="707" y="232" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">x̄ − Z(SE)</text>
          <text x="942" y="232" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">x̄ + Z(SE)</text>

          <text x="590" y="256" fontSize="2.8" fontWeight="700" className="fill-foreground/80">The point estimate sits at the center; the level buys the width — Z standard errors each way.</text>
          <text x="590" y="268" fontSize="2.8" fontWeight="700" className="fill-foreground/80">More confidence (99% ↔ α = 0.01) = a WIDER net; more data = a NARROWER one. CI = 1 – α ties</text>
          <text x="590" y="280" fontSize="2.8" fontWeight="700" className="fill-foreground/80">each level to its α. (Bracket geometry KYP; formula and constants printed.)</text>
          <text x="590" y="304" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">Cold recall: 1-9-6 AT 95, 2-5-8 AT 99 (KYP mnemonic — the page prints none of its own).</text>
        </g>
      </g>

      {/* ===== ZONE B — THE SIX PRINTED VERDICT RULES ===== */}
      <g>
        <rect x="36" y="350" width="1030" height="450" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="372" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SIX PRINTED VERDICT RULES — three mirrors, drawn on number lines</text>
        <text x="52" y="383" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the rules panel prints borderless BESIDE the CI block (teal square bullets, H0 with a subscript zero — the print&apos;s own furniture); the glyphs below are KYP geometry</text>

        {/* LEFT COLUMN — REJECTED */}
        <g>
          <rect x="52" y="396" width="502" height="286" rx="10" className="fill-card stroke-success" />
          <rect x="64" y="408" width="478" height="20" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="303" y="421.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">H0 is rejected (and results are significant) when:</text>

          {/* RULE 1 — mean difference excludes 0 */}
          <text x="66" y="452" fontSize="2.9" fontWeight="800" className="fill-foreground">95% CI for mean difference</text>
          <text x="66" y="462" fontSize="2.9" fontWeight="800" className="fill-foreground">excludes 0</text>
          {axis(260, 540, 478, "r1a")}
          {nullTick(330, 478, "null 0", "r1t")}
          {bracket(400, 472, 110, "fill-success-soft/50 stroke-success", "r1b")}
          <text x="455" y="497" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-success">excludes 0</text>

          {/* RULE 2 — OR or RR excludes 1 */}
          <text x="66" y="522" fontSize="2.9" fontWeight="800" className="fill-foreground">95% CI OR or RR</text>
          <text x="66" y="532" fontSize="2.9" fontWeight="800" className="fill-foreground">excludes 1</text>
          {axis(260, 540, 548, "r2a")}
          {nullTick(330, 548, "null 1", "r2t")}
          {bracket(400, 542, 110, "fill-success-soft/50 stroke-success", "r2b")}
          <text x="455" y="567" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-success">excludes 1</text>

          {/* RULE 3 — CIs between two groups do not overlap */}
          <text x="66" y="592" fontSize="2.9" fontWeight="800" className="fill-foreground">CIs between two groups</text>
          <text x="66" y="602" fontSize="2.9" fontWeight="800" className="fill-foreground">do not overlap</text>
          {axis(260, 540, 618, "r3a")}
          {bracket(270, 612, 92, "fill-brand-soft/50 stroke-brand", "r3b1")}
          {bracket(428, 612, 92, "fill-warning-soft/50 stroke-warning", "r3b2")}
          <text x="316" y="642" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">group A</text>
          <text x="474" y="642" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-warning">group B</text>
          <text x="394" y="636" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">no shared</text>
          <text x="394" y="644" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">values</text>

          <text x="66" y="672" fontSize="2.9" fontWeight="800" className="fill-success">EXCLUDE TO CONCLUDE — every value inside the interval is an effect (KYP)</text>
        </g>

        {/* RIGHT COLUMN — NOT REJECTED */}
        <g>
          <rect x="566" y="396" width="502" height="286" rx="10" className="fill-card stroke-warning" />
          <rect x="578" y="408" width="478" height="20" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="817" y="421.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">H0 is not rejected (and results are not significant) when:</text>

          {/* MIRROR 1 — mean difference includes 0 */}
          <text x="580" y="452" fontSize="2.9" fontWeight="800" className="fill-foreground">95% CI for mean difference</text>
          <text x="580" y="462" fontSize="2.9" fontWeight="800" className="fill-foreground">includes 0</text>
          {axis(774, 1054, 478, "m1a")}
          {nullTick(906, 478, "null 0", "m1t")}
          {bracket(828, 472, 156, "fill-warning-soft/50 stroke-warning", "m1b")}
          <text x="906" y="497" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-warning">includes 0</text>

          {/* MIRROR 2 — OR or RR includes 1 */}
          <text x="580" y="522" fontSize="2.9" fontWeight="800" className="fill-foreground">95% CI OR or RR</text>
          <text x="580" y="532" fontSize="2.9" fontWeight="800" className="fill-foreground">includes 1</text>
          {axis(774, 1054, 548, "m2a")}
          {nullTick(906, 548, "null 1", "m2t")}
          {bracket(828, 542, 156, "fill-warning-soft/50 stroke-warning", "m2b")}
          <text x="906" y="567" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-warning">includes 1</text>

          {/* MIRROR 3 — CIs between two groups do overlap */}
          <text x="580" y="592" fontSize="2.9" fontWeight="800" className="fill-foreground">CIs between two groups</text>
          <text x="580" y="602" fontSize="2.9" fontWeight="800" className="fill-foreground">do overlap</text>
          {axis(774, 1054, 618, "m3a")}
          {bracket(788, 612, 116, "fill-brand-soft/50 stroke-brand", "m3b1")}
          {bracket(856, 612, 116, "fill-warning-soft/50 stroke-warning", "m3b2")}
          <text x="806" y="642" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">group A</text>
          <text x="986" y="642" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-warning">group B</text>
          <text x="902" y="642" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">shared values</text>

          <text x="580" y="672" fontSize="2.9" fontWeight="800" className="fill-warning">INCLUDE TO RETAIN — “no effect” survives inside the interval (KYP)</text>
        </g>

        {/* THE NULL-VALUE ROUTER STRIP */}
        <g>
          <rect x="52" y="692" width="1016" height="94" rx="10" className="fill-card stroke-border" />
          <text x="66" y="712" fontSize="4.2" fontWeight="800" className="fill-brand">THE NULL VALUES — the router behind all six rules (KYP decoder)</text>
          <text x="66" y="732" fontSize="2.9" fontWeight="700" className="fill-foreground/80">MEAN DIFFERENCE → null 0: between-group differences (BP change, LDL, a score) live on the additive</text>
          <text x="66" y="742" fontSize="2.9" fontWeight="700" className="fill-foreground/80">scale — “95% CI for mean difference excludes 0” → significant.</text>
          <text x="566" y="732" fontSize="2.9" fontWeight="700" className="fill-foreground/80">OR / RR → null 1: ratio measures (odds ratio from a case-control, relative risk from a cohort) live</text>
          <text x="566" y="742" fontSize="2.9" fontWeight="700" className="fill-foreground/80">on the multiplicative scale — “95% CI OR or RR excludes 1” → significant.</text>
          <text x="66" y="768" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Both nulls encode “no effect”: a difference of 0 and a ratio of 1. FIRST name the measure family, THEN read the interval — MEANS TO 0, RATIOS TO 1 (KYP mnemonic).</text>
        </g>
      </g>

      {/* ===== ZONE C — THE META-ANALYSIS POOLING DIAGRAM ===== */}
      <g>
        <rect x="36" y="810" width="1030" height="340" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="832" fontSize="5.4" fontWeight="800" className="fill-foreground">META-ANALYSIS — pooling the literature into one more precise estimate</text>
        <text x="52" y="843" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the pooling geometry is KYP&apos;s (no figure prints in the upper portion — the print is pure text); every quoted phrase is the print&apos;s own</text>

        {/* the three study cards (KYP illustration) */}
        <g>
          <rect x="52" y="856" width="210" height="48" rx="8" className="fill-card stroke-border" />
          <text x="64" y="872" fontSize="3" fontWeight="800" className="fill-brand">Study 1 — RR (summary data)</text>
          <line x1="90" y1="890" x2="210" y2="890" className="stroke-brand" strokeWidth="2" />
          <line x1="90" y1="884" x2="90" y2="896" className="stroke-brand" strokeWidth="2" />
          <line x1="210" y1="884" x2="210" y2="896" className="stroke-brand" strokeWidth="2" />
          <circle cx="150" cy="890" r="2.5" className="fill-brand" />
          <text x="220" y="893" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">wide CI</text>
        </g>
        <g>
          <rect x="52" y="912" width="210" height="48" rx="8" className="fill-card stroke-border" />
          <text x="64" y="928" fontSize="3" fontWeight="800" className="fill-brand">Study 2 — RR (summary data)</text>
          <line x1="90" y1="946" x2="210" y2="946" className="stroke-brand" strokeWidth="2" />
          <line x1="90" y1="940" x2="90" y2="952" className="stroke-brand" strokeWidth="2" />
          <line x1="210" y1="940" x2="210" y2="952" className="stroke-brand" strokeWidth="2" />
          <circle cx="150" cy="946" r="2.5" className="fill-brand" />
          <text x="220" y="949" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">wide CI</text>
        </g>
        <g>
          <rect x="52" y="968" width="210" height="48" rx="8" className="fill-card stroke-border" />
          <text x="64" y="984" fontSize="3" fontWeight="800" className="fill-brand">Study 3 — mean (summary data)</text>
          <line x1="90" y1="1002" x2="210" y2="1002" className="stroke-brand" strokeWidth="2" />
          <line x1="90" y1="996" x2="90" y2="1008" className="stroke-brand" strokeWidth="2" />
          <line x1="210" y1="996" x2="210" y2="1008" className="stroke-brand" strokeWidth="2" />
          <circle cx="150" cy="1002" r="2.5" className="fill-brand" />
          <text x="220" y="1005" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">wide CI</text>
        </g>

        {/* the converging arrows */}
        <line x1="264" y1="880" x2="462" y2="920" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 460 916 L 470 921 L 460 927 Z" className="fill-foreground" />
        <line x1="264" y1="936" x2="458" y2="936" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 456 932 L 466 936 L 456 940 Z" className="fill-foreground" />
        <line x1="264" y1="992" x2="462" y2="952" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 460 948 L 470 953 L 460 958 Z" className="fill-foreground" />
        <text x="330" y="908" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">“pools summary data</text>
        <text x="330" y="916" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">(eg, means, RRs) from</text>
        <text x="330" y="924" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">multiple studies”</text>

        {/* the pooled estimate card */}
        <g>
          <rect x="470" y="880" width="300" height="110" rx="10" className="fill-success-soft/40 stroke-success" strokeWidth="1.5" />
          <text x="484" y="902" fontSize="4" fontWeight="800" className="fill-success">POOLED ESTIMATE — the pool</text>
          <text x="484" y="916" fontSize="2.8" fontWeight="700" className="fill-foreground/80">“a more precise estimate of the size of an effect”</text>
          <line x1="500" y1="946" x2="740" y2="946" className="stroke-foreground" strokeWidth="1.2" />
          <line x1="590" y1="938" x2="590" y2="954" className="stroke-success" strokeWidth="2.5" />
          <line x1="650" y1="938" x2="650" y2="954" className="stroke-success" strokeWidth="2.5" />
          <line x1="590" y1="946" x2="650" y2="946" className="stroke-success" strokeWidth="3" />
          <circle cx="620" cy="946" r="3" className="fill-success" />
          <text x="620" y="968" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-success">narrower CI — more precise than any single study</text>
          <text x="484" y="984" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">POOL, PRICE, POWER — the three printed moves (KYP tags)</text>
        </g>

        {/* PRICE — the heterogeneity chip */}
        <g>
          <rect x="796" y="856" width="256" height="48" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="810" y="872" fontSize="3" fontWeight="800" className="fill-warning">PRICE — heterogeneity (printed)</text>
          <text x="810" y="884" fontSize="2.6" fontWeight="700" className="fill-foreground/80">“Also estimates heterogeneity of effect sizes</text>
          <text x="810" y="893" fontSize="2.6" fontWeight="700" className="fill-foreground/80">between studies.” — do the studies agree?</text>
        </g>

        {/* POWER — the gains chip */}
        <g>
          <rect x="796" y="912" width="256" height="48" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="810" y="928" fontSize="3" fontWeight="800" className="fill-success">POWER — the gains (printed)</text>
          <text x="810" y="940" fontSize="2.6" fontWeight="700" className="fill-foreground/80">“Improves power, strength of evidence, and</text>
          <text x="810" y="949" fontSize="2.6" fontWeight="700" className="fill-foreground/80">generalizability (external validity) of study findings.”</text>
        </g>

        {/* MIND THE GARBAGE — the limits chip */}
        <g>
          <rect x="796" y="968" width="256" height="48" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
          <text x="810" y="984" fontSize="3" fontWeight="800" className="fill-emergency">MIND THE GARBAGE — the limits (printed)</text>
          <text x="810" y="996" fontSize="2.6" fontWeight="700" className="fill-foreground/80">“Limited by quality of individual studies and</text>
          <text x="810" y="1005" fontSize="2.6" fontWeight="700" className="fill-foreground/80">bias in study selection.” — garbage in, garbage out (KYP)</text>
        </g>

        {/* the bridge strip */}
        <g>
          <rect x="52" y="1028" width="1000" height="108" rx="10" className="fill-card stroke-border" />
          <text x="66" y="1050" fontSize="4.2" fontWeight="800" className="fill-brand">THE BRIDGE — the two blocks are one dial (KYP synthesis)</text>
          <text x="66" y="1070" fontSize="3" fontWeight="700" className="fill-foreground/80">Single study: “As sample size increases, CI narrows.” — more information in, narrower interval out; sample size is the one printed width dial (95% ↔ 1.96, 99% ↔ 2.58).</text>
          <text x="66" y="1084" fontSize="3" fontWeight="700" className="fill-foreground/80">Many studies: a meta-analysis is the same dial turned across the literature — pooling summary data (eg, means, RRs) from multiple studies yields a more precise estimate</text>
          <text x="66" y="1098" fontSize="3" fontWeight="700" className="fill-foreground/80">of the size of an effect, prices heterogeneity of effect sizes between studies, and improves power, strength of evidence, and generalizability (external validity).</text>
          <text x="66" y="1122" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">The four KYP mnemonics on this page: MEANS TO 0, RATIOS TO 1 · EXCLUDE TO CONCLUDE — INCLUDE TO RETAIN · 1-9-6 AT 95, 2-5-8 AT 99 · POOL, PRICE, POWER — MIND THE GARBAGE.</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1160" width="1054" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1178" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 289 / book 267 UPPER (Epidemiology and Biostatistics: Confidence interval; Meta-analysis)</text>
        <text x="42" y="1190" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images; VLM census, TWO passes (120dpi full page + 300dpi upper crop, staging-pubh15/vlm-census.txt): NO figure anywhere in the</text>
        <text x="42" y="1200" fontSize="3.8" className="fill-muted-foreground">upper portion — pure text → ORIGINAL KYP ADAPTATION. Every number line, bracket, and pooling arrow is KYP geometry; every quoted sentence is the print&apos;s own.</text>
        <text x="42" y="1210" fontSize="3.8" className="fill-muted-foreground">The rules panel prints borderless beside the CI block (teal square bullets; H0 with a subscript zero; extracts after the Meta-analysis body — bbox-pinned). The pinned</text>
        <text x="42" y="1220" fontSize="3.8" className="fill-muted-foreground">split: “Common statistical tests” below belongs to statistical-tests. ADJUDICATION: the brief&apos;s possible distribution figure beside the CI block — none found.</text>
      </g>
    </svg>
  );
};
