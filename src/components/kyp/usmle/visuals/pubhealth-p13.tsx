/* Public Health — PUBH batch 2, topic 13 (pubh13): Statistical distributions
 * (FULL pdf page 287 / book 265 — the whole page is owned: the "Statistical
 * distribution" table, the FOUR stacked pure-vector curve figures in the
 * right-hand column, and the "Statistical hypothesis testing" opener). Census
 * (pdfimages + PyMuPDF): ZERO raster images — 159 path objects on the page
 * (102 in the figure column); every curve, brace, tick label, marker and icon
 * is VECTOR art. VLM census — COMPLETE, FOUR passes (full page at 120dpi +
 * three 300dpi figure-column crops, plus a PyMuPDF vector-geometry
 * reconstruction and a pixel-visibility scan):
 * .usmle-pipeline-cache/staging-pubh13/vlm-census.txt. The census pins the
 * geometry drawn here: the normal bell's σ tick labels print INSIDE the curve
 * at their band boundaries, cascading down the contour (–1σ/+1σ highest just
 * under the peak, –2σ/+2σ mid-slope, –3σ/+3σ near the baseline); the
 * 68% / 95% / 99.7% labels print BELOW the x-axis, stacked vertically under
 * the curve center, each above its horizontal curly brace spanning its band
 * (68% narrowest at top spanning ±1σ, 95% middle spanning ±2σ, 99.7% widest
 * at bottom spanning ±3σ; each brace's cusp aims DOWN toward its label); the
 * bimodal figure has NO Mode markers and NO σ ticks; the positive-skew
 * markers read left-to-right Mode (at the peak) → Median (just right of the
 * peak) → Mean (down the tail slope); the negative-skew markers read
 * Mean → Median → Mode; both skew figures carry dashed vertical drop-lines.
 * Nothing is reproduced from the book — this is an ORIGINAL KYP ADAPTATION
 * (the table rows as formula cards + the H0/H1/P strip) + an ORIGINAL KYP
 * REDRAW (the four curves rebuilt as KYP vector art in the census-pinned
 * geometry; the horizontal card layout is KYP's, every printed label is
 * preserved). Documented, NOT drawn: the raw text layer's clipped invisible
 * duplicates (σ ticks ×3, percentage labels ×3, marker cascades ×2 — an
 * InDesign plate artifact; the page prints each label ONCE and so does this
 * visual), and the two small vector "Rx" multimedia glyphs (not content).
 * First Aid's own red printing — the 0 of H0, the 1 of H1, and the words
 * "zero" and "one" in the hypothesis rows — is carried VERBATIM and
 * ATTRIBUTED (red "zero"/"one" in the strip). Purely presentational (no
 * props, no hooks, no external images). */

export const DistributionsMap = () => {
  const w = 1102;
  const h = 1352;

  /* ---- curve helpers (pure static geometry — no hooks, no props) ---- */
  const curvePath = (x1: number, x2: number, f: (x: number) => number, steps = 72) => {
    const pts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = x1 + ((x2 - x1) * i) / steps;
      pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${f(x).toFixed(1)}`);
    }
    return pts.join(" ");
  };
  const areaPath = (x1: number, x2: number, base: number, f: (x: number) => number, steps = 36) => {
    const pts = [`M ${x1} ${base}`];
    for (let i = 0; i <= steps; i++) {
      const x = x1 + ((x2 - x1) * i) / steps;
      pts.push(`L ${x.toFixed(1)} ${f(x).toFixed(1)}`);
    }
    pts.push(`L ${x2} ${base} Z`);
    return pts.join(" ");
  };
  /* a horizontal curly brace with its cusp aiming DOWN at the label below */
  const bracePath = (x1: number, x2: number, y: number) => {
    const cx = (x1 + x2) / 2;
    return `M ${x1} ${y} Q ${x1} ${y - 5} ${x1 + 6} ${y - 5} L ${cx - 8} ${y - 5} Q ${cx} ${y - 5} ${cx} ${y + 3} Q ${cx} ${y - 5} ${cx + 8} ${y - 5} L ${x2 - 6} ${y - 5} Q ${x2} ${y - 5} ${x2} ${y}`;
  };

  /* the normal bell: center 530, baseline 330, peak 150, σ = 110 */
  const bellY = (x: number) => 330 - 180 * Math.exp(-0.5 * ((x - 530) / 110) ** 2);
  /* the bimodal twin peaks: baseline 620, humps at 200 and 390 */
  const bimodalY = (x: number) =>
    620 - 85 * (Math.exp(-0.5 * ((x - 200) / 48) ** 2) + Math.exp(-0.5 * ((x - 390) / 48) ** 2));
  /* positive skew: gaussian left flank at 170, exponential tail to the right */
  const posSkewY = (x: number) =>
    906 - 130 * (x <= 170 ? Math.exp(-0.5 * ((x - 170) / 22) ** 2) : Math.exp(-(x - 170) / 62));
  /* negative skew: exponential tail to the left, gaussian right flank at 940 */
  const negSkewY = (x: number) =>
    906 - 130 * (x >= 940 ? Math.exp(-0.5 * ((x - 940) / 22) ** 2) : Math.exp(-(940 - x) / 62));

  /* dashed drop-line + marker label (the printed skew figures' furniture) */
  const dropLine = (x: number, yTop: number, base: number, key: string) => (
    <g key={key}>
      <line x1={x} y1={yTop} x2={x} y2={base} className="stroke-brand" strokeWidth="1" strokeDasharray="3 3" />
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Statistical distributions — the normal (Gaussian) bell drawn with its graded sigma bands, the sigma tick labels cascading inside the curve, and the 68%, 95%, and 99.7% labels stacked below the axis above their curly braces (68% narrowest spanning plus-minus one sigma at top, 99.7% widest spanning plus-minus three sigma at bottom); the bimodal twin-peak curve with its two-population anchors (fast vs slow acetylators, age at onset of Hodgkin lymphoma, suicide rate by age); the two skew curves with dashed drop-lines and markers in their printed orders (positive skew: Mode, Median, Mean, mean greater than median greater than mode, longer tail on right; negative skew: Mean, Median, Mode, mean less than median less than mode, longer tail on left); the central-tendency cards (mean most affected by outliers, median the middle value, mode least affected by outliers) and dispersion formulas (variance = SD squared, SE = sigma over root n, SE falls as n rises); and the hypothesis-testing strip (null hypothesis H0 with zero difference, alternative hypothesis H1 with at least one difference or association, and the P value definition with the 0.05 convention) — an original KYP diagram of book 265." className="min-w-[1060px]">
      <title>Statistical distributions — center, spread, and skew</title>
      <desc>
        The 68-95-99.7 normal curve with its sigma axis and below-axis stacked brace labels, the bimodal twin-peak curve with its three printed clinical anchors, the positive- and negative-skew curves with their Mode/Median/Mean drop-line markers in the printed orders, the central-tendency and dispersion formula cards, and the H0/H1/P-value hypothesis-testing strip.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Statistical distributions — center, spread, and skew</text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">4 figures · 68–95–99.7</text>
      </g>

      {/* ===== ZONE A — THE NORMAL (GAUSSIAN) BELL: 68-95-99.7 ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="370" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE NORMAL (GAUSSIAN) DISTRIBUTION — the 68–95–99.7 bell, drawn as the book prints it</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Gaussian, also called bell-shaped — mean = median = mode; the mean is the best measure of central tendency (ORIGINAL KYP REDRAW)</text>
        <rect x="790" y="115" width="262" height="26" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="921" y="132" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-brand">±1σ ≈ 68% · ±2σ ≈ 95% · ±3σ ≈ 99.7%</text>

        {/* the six graded σ-band slices (center strongest, outers palest) */}
        <path d={areaPath(134, 200, 330, bellY)} className="fill-brand-soft/10" />
        <path d={areaPath(200, 310, 330, bellY)} className="fill-brand-soft/20" />
        <path d={areaPath(310, 420, 330, bellY)} className="fill-brand-soft/45" />
        <path d={areaPath(420, 640, 330, bellY)} className="fill-brand-soft/80" />
        <path d={areaPath(640, 750, 330, bellY)} className="fill-brand-soft/45" />
        <path d={areaPath(750, 860, 330, bellY)} className="fill-brand-soft/20" />
        <path d={areaPath(860, 926, 330, bellY)} className="fill-brand-soft/10" />
        {/* thin vertical σ-boundary dividers */}
        <line x1="200" y1="330" x2="200" y2={bellY(200)} className="stroke-brand" strokeWidth="0.5" />
        <line x1="310" y1="330" x2="310" y2={bellY(310)} className="stroke-brand" strokeWidth="0.5" />
        <line x1="420" y1="330" x2="420" y2={bellY(420)} className="stroke-brand" strokeWidth="0.5" />
        <line x1="640" y1="330" x2="640" y2={bellY(640)} className="stroke-brand" strokeWidth="0.5" />
        <line x1="750" y1="330" x2="750" y2={bellY(750)} className="stroke-brand" strokeWidth="0.5" />
        <line x1="860" y1="330" x2="860" y2={bellY(860)} className="stroke-brand" strokeWidth="0.5" />
        {/* the outline */}
        <path d={curvePath(134, 926, bellY)} className="stroke-brand" strokeWidth="1.2" fill="none" />
        {/* the x-axis */}
        <line x1="120" y1="330" x2="940" y2="330" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 938 326 L 948 330 L 938 334 Z" className="fill-foreground" />

        {/* σ tick labels INSIDE the curve, cascading down the contour (as printed) */}
        <text x="440" y="195" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground/70">–1σ</text>
        <text x="620" y="195" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground/70">+1σ</text>
        <text x="318" y="250" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground/70">–2σ</text>
        <text x="742" y="250" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground/70">+2σ</text>
        <text x="208" y="296" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground/70">–3σ</text>
        <text x="852" y="296" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground/70">+3σ</text>

        {/* the below-axis stacked curly braces: 68% narrowest at top, 99.7% widest at bottom */}
        <path d={bracePath(420, 640, 348)} className="stroke-foreground" strokeWidth="1" fill="none" />
        <text x="530" y="362" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">68%</text>
        <path d={bracePath(310, 750, 382)} className="stroke-foreground" strokeWidth="1" fill="none" />
        <text x="530" y="396" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">95%</text>
        <path d={bracePath(200, 860, 416)} className="stroke-foreground" strokeWidth="1" fill="none" />
        <text x="530" y="430" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">99.7%</text>
        <text x="52" y="432" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">each brace’s cusp aims down at its label — 68% (±1σ) narrowest at top, 99.7% (±3σ) widest at bottom, exactly as printed</text>
      </g>

      {/* ===== ZONE B — BIMODAL (left) + CENTRAL TENDENCY CARDS (right) ===== */}
      <g>
        <rect x="36" y="454" width="1030" height="234" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="476" fontSize="5.4" fontWeight="800" className="fill-foreground">BIMODAL DISTRIBUTION — two humps, two populations</text>
        <text x="52" y="487" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Suggests two different populations — the printed figure carries NO markers and NO σ ticks (ORIGINAL KYP REDRAW)</text>

        {/* the bimodal curve (pure art, as printed) */}
        <path d={areaPath(90, 500, 620, bimodalY)} className="fill-brand-soft/50 stroke-brand" strokeWidth="1.1" />
        <line x1="95" y1="620" x2="498" y2="620" className="stroke-foreground" strokeWidth="1.6" />
        <text x="60" y="638" fontSize="3" fontWeight="800" className="fill-brand">the printed anchors — two different populations:</text>
        <text x="60" y="651" fontSize="3" fontWeight="700" className="fill-foreground/80">• fast vs slow acetylators — metabolic polymorphism</text>
        <text x="60" y="663" fontSize="3" fontWeight="700" className="fill-foreground/80">• age at onset of Hodgkin lymphoma</text>
        <text x="60" y="675" fontSize="3" fontWeight="700" className="fill-foreground/80">• suicide rate by age</text>

        {/* central-tendency cards */}
        <g>
          <rect x="556" y="500" width="494" height="56" rx="10" className="fill-card stroke-border" />
          <text x="572" y="518" fontSize="4.4" fontWeight="800" className="fill-brand">Mean</text>
          <text x="572" y="534" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Mean = (sum of values)/(total number of values).</text>
          <rect x="572" y="539" width="242" height="14" rx="5" className="fill-card stroke-emergency" />
          <text x="580" y="549" fontSize="2.7" fontWeight="800" className="fill-emergency">MOST affected by outliers (extreme values)</text>
        </g>
        <g>
          <rect x="556" y="564" width="494" height="56" rx="10" className="fill-card stroke-border" />
          <text x="572" y="582" fontSize="4.4" fontWeight="800" className="fill-brand">Median</text>
          <text x="572" y="598" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Median = middle value of a list of data sorted from least to greatest.</text>
          <text x="572" y="610" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">If there is an even number of values → the average of the middle two values.</text>
        </g>
        <g>
          <rect x="556" y="628" width="494" height="56" rx="10" className="fill-card stroke-border" />
          <text x="572" y="646" fontSize="4.4" fontWeight="800" className="fill-brand">Mode</text>
          <text x="572" y="662" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Mode = most common value.</text>
          <rect x="572" y="667" width="200" height="14" rx="5" className="fill-card stroke-success" />
          <text x="580" y="677" fontSize="2.7" fontWeight="800" className="fill-success">LEAST affected by outliers</text>
        </g>
      </g>

      {/* ===== ZONE C — THE TWO SKEWS ===== */}
      <g>
        <rect x="36" y="702" width="1030" height="268" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="724" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TWO SKEWS — the tail drags the mean: dashed drop-lines, markers in their printed order</text>
        <text x="52" y="735" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“Mean falls closer to tail” prints for BOTH skews — read the tail first, then write the ordering</text>

        {/* positive skew panel — markers left-to-right: Mode → Median → Mean */}
        <g>
          <text x="52" y="751" fontSize="4.4" fontWeight="800" className="fill-brand">Positive skew — longer tail on right</text>
          <path d={areaPath(105, 515, 906, posSkewY)} className="fill-brand-soft/40 stroke-brand" strokeWidth="1.1" />
          <line x1="100" y1="906" x2="525" y2="906" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 523 902 L 533 906 L 523 910 Z" className="fill-foreground" />
          {dropLine(170, 777, 906, "ps-mode")}
          {dropLine(225, 785, 906, "ps-median")}
          {dropLine(345, 843, 906, "ps-mean")}
          <text x="170" y="771" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Mode</text>
          <text x="228" y="779" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Median</text>
          <text x="348" y="837" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Mean</text>
          <rect x="52" y="922" width="310" height="17" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="207" y="933.5" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-warning">typically, mean &gt; median &gt; mode</text>
          <text x="52" y="954" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">asymmetry with longer tail on right; mean falls closer to tail</text>
        </g>

        {/* negative skew panel — markers left-to-right: Mean → Median → Mode */}
        <g>
          <text x="556" y="751" fontSize="4.4" fontWeight="800" className="fill-brand">Negative skew — longer tail on left</text>
          <path d={areaPath(595, 995, 906, negSkewY)} className="fill-brand-soft/40 stroke-brand" strokeWidth="1.1" />
          <line x1="585" y1="906" x2="1005" y2="906" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 1003 902 L 1013 906 L 1003 910 Z" className="fill-foreground" />
          {dropLine(655, 843, 906, "ns-mean")}
          {dropLine(860, 785, 906, "ns-median")}
          {dropLine(940, 777, 906, "ns-mode")}
          <text x="652" y="837" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Mean</text>
          <text x="858" y="779" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Median</text>
          <text x="940" y="771" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Mode</text>
          <rect x="556" y="922" width="310" height="17" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="711" y="933.5" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-success">typically, mean &lt; median &lt; mode</text>
          <text x="556" y="954" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">asymmetry with longer tail on left; mean falls closer to tail</text>
        </g>
      </g>

      {/* ===== ZONE D — MEASURES OF DISPERSION ===== */}
      <g>
        <rect x="36" y="984" width="1030" height="116" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1006" fontSize="5.4" fontWeight="800" className="fill-foreground">MEASURES OF DISPERSION — SD for the values, SE for the sample means</text>
        <text x="52" y="1022" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Standard deviation = how much variability exists in a set of values, around the mean of these values.</text>
        <text x="52" y="1034" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Standard error = an estimate of how much variability exists in a (theoretical) set of sample means around the true population mean.</text>
        <rect x="52" y="1046" width="170" height="20" rx="6" className="fill-card stroke-brand" />
        <text x="137" y="1059" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-brand">σ = SD; n = sample size</text>
        <rect x="234" y="1046" width="124" height="20" rx="6" className="fill-card stroke-brand" />
        <text x="296" y="1059" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-brand">Variance = (SD)²</text>
        <rect x="370" y="1046" width="80" height="20" rx="6" className="fill-card stroke-brand" />
        <text x="410" y="1059" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-brand">SE = σ/√n</text>
        <rect x="462" y="1046" width="92" height="20" rx="6" className="fill-card stroke-brand" />
        <text x="508" y="1059" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-brand">SE ↓ as n ↑</text>
        <text x="570" y="1059" fontSize="3" fontWeight="800" className="fill-foreground">SE ↓ as n ↑ — quadruple n, halve the SE (KYP corollary)</text>
        <text x="52" y="1088" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">SD scatters the VALUES around their mean · SE scatters (theoretical) SAMPLE MEANS around the true population mean — only the SE carries √n</text>
      </g>

      {/* ===== ZONE E — THE HYPOTHESIS-TESTING OPENER (H0 / H1 / P value) ===== */}
      <g>
        <rect x="36" y="1114" width="1030" height="154" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1136" fontSize="5.4" fontWeight="800" className="fill-foreground">STATISTICAL HYPOTHESIS TESTING — the opener: H0, H1, P value</text>
        <text x="52" y="1147" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">First Aid’s own red printing — the 0 of H0, the 1 of H1, and the words “zero” and “one” print in red on book 265 (carried attributed)</text>

        <g>
          <rect x="52" y="1160" width="300" height="96" rx="10" className="fill-card stroke-border" />
          <text x="68" y="1178" fontSize="4" fontWeight="800" className="fill-brand">Null hypothesis — H0</text>
          <text x="68" y="1194" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Also called H0. Hypothesis with</text>
          <text x="68" y="1205" fontSize="2.8" fontWeight="700" className="fill-foreground/80">
            <tspan className="fill-emergency" fontWeight="800">zero</tspan> difference between two groups
          </text>
          <text x="68" y="1216" fontSize="2.8" fontWeight="700" className="fill-foreground/80">or variables in the population.</text>
          <text x="68" y="1242" fontSize="3" fontWeight="800" className="fill-emergency">H0 ↔ ZERO difference</text>
        </g>
        <g>
          <rect x="364" y="1160" width="300" height="96" rx="10" className="fill-card stroke-border" />
          <text x="380" y="1178" fontSize="4" fontWeight="800" className="fill-brand">Alternative hypothesis — H1</text>
          <text x="380" y="1194" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Also called H1. Hypothesis states at least</text>
          <text x="380" y="1205" fontSize="2.8" fontWeight="700" className="fill-foreground/80">
            <tspan className="fill-emergency" fontWeight="800">one</tspan> difference or association between two
          </text>
          <text x="380" y="1216" fontSize="2.8" fontWeight="700" className="fill-foreground/80">groups or variables in the population.</text>
          <text x="380" y="1242" fontSize="3" fontWeight="800" className="fill-emergency">H1 ↔ at least ONE difference</text>
        </g>
        <g>
          <rect x="676" y="1160" width="374" height="96" rx="10" className="fill-card stroke-border" />
          <text x="692" y="1178" fontSize="4" fontWeight="800" className="fill-brand">P value</text>
          <text x="692" y="1194" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Probability of obtaining test results at least as extreme</text>
          <text x="692" y="1205" fontSize="2.8" fontWeight="700" className="fill-foreground/80">as those observed in the sample, assuming that H0 is correct.</text>
          <text x="692" y="1230" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">Commonly accepted as 0.05 — &lt;5% of such repeated tests</text>
          <text x="692" y="1241" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">would show results that extreme just by chance alone.</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1280" width="1054" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1298" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid 2026, Part 1 pdf 287 / book 265 (Epidemiology and Biostatistics: Statistical distribution; Statistical hypothesis testing)</text>
        <text x="42" y="1310" fontSize="3.8" className="fill-muted-foreground">Census: ZERO raster images — 159 vector path objects (102 in the figure column); VLM-read in FOUR passes (staging-pubh13/vlm-census.txt).</text>
        <text x="42" y="1320" fontSize="3.8" className="fill-muted-foreground">ORIGINAL KYP ADAPTATION + REDRAW — the four curves, braces and markers are rebuilt as KYP vector art in the census-pinned</text>
        <text x="42" y="1330" fontSize="3.8" className="fill-muted-foreground">geometry (σ labels cascading inside the curve; 68%/95%/99.7% stacked below the axis; bimodal with NO markers; skew orders as printed).</text>
        <text x="42" y="1340" fontSize="3.8" className="fill-muted-foreground">QUIRK — the raw layer carries clipped duplicates (σ ticks ×3, percentages ×3, cascades ×2); the page and this visual print each label ONCE.</text>
      </g>
    </svg>
  );
};
