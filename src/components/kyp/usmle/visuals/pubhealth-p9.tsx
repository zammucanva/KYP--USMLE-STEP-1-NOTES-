/* Public Health — PUBH batch 2, topic 9: ROC curves, precision, and
 * accuracy (FULL pdf page 283 / book 261, Part 1 — the topic owns the
 * whole page). The page carries TWO blocks, both owned: (1) "Receiver
 * operating characteristic curve" — two verbatim body paragraphs plus the
 * ROC FIGURE (pure vector): a square plot with the y-axis label "TP rate
 * (sensitivity)" printed rotated 90°, the x-axis label "FP rate
 * (1 – speciﬁcity)" (fi ligature in the print), a "1" at the top of the
 * y-axis and a "1" at the right end of the x-axis as the ONLY axis
 * numbers (no origin 0, no .5 ticks — pinned by the text layer + the
 * vector tick marks + the 200dpi VLM crop), and three traces: the chance
 * diagonal (blue #4d7cbe dashed 6-3) labeled "No predictive value
 * (AUC = 0.5)" (blue, printed rotated ~42° parallel above the diagonal —
 * PyMuPDF reads it as ONE span, dir (0.741, −0.671)); the ideal-test
 * trace (pink/mauve #c978a1 dashed 6-3, up the left edge, rounded corner,
 * along the top) labeled "Ideal test (AUC = 1)" (pink, horizontal); and
 * the actual-test curve (gray #939598 solid, concave, bowing toward the
 * upper-left corner) labeled "Actual test (0.5 < AUC < 1)" (dark gray,
 * typeset on a CURVED baseline along the curve — per-character rotation
 * vectors from ~74° to ~32°, which is why the text layer shatters it
 * into the jumbled fragments "Act/ua/l te/s" + "t (0/.5/</UC/<A/1)").
 * The print shades the region above the diagonal light lavender and
 * below it light blue, and prints a small double-headed dark-gray arrow
 * in the wedge between the ideal trace and the actual curve.
 * (2) "Precision vs accuracy" — two sub-blocks ("Precision
 * (reliability)", "Accuracy (validity)", First Aid's OWN red letters:
 * "re" of Precision/reliability, "A"/"a" of Accuracy/validity, and the
 * red-bold "re" of "reproducibility") plus the FOUR-TARGET FIGURE (pure
 * vector): FOUR targets in ONE horizontal row as TWO pairs — "Accuracy"
 * printed twice above (bracketed to a High/Low word over EACH target,
 * High left / Low right within each pair) and "Precision" twice below
 * (the left pair both High, the right pair both Low); each target is
 * three concentric filled circles (pale tan #e6e0d9, darker tan
 * #d5ccc1, olive #b8ae9a bullseye) with FIVE teal dart dots (#3a899b):
 * tight+centered, tight+off-center (upper left), scattered+centered,
 * scattered+off-center. Census (pdfimages): ZERO raster images — both
 * figures pure vector → both are ORIGINAL_KYP_REDRAW records (sv1 sv2)
 * implemented together in THIS ONE registry visual. VLM-read in THREE
 * passes (full page 120dpi + two 200dpi crops, glm-4.6v,
 * staging-pubh9/vlm-census.txt) + pinned programmatically by a PyMuPDF
 * vector trace (get_drawings stroke colors/dash patterns/bezier control
 * points + get_text("dict") span colors and rotation vectors).
 * ADJUDICATIONS drawn exactly as printed: (A) the diagonal's label reads
 * "No predictive value (AUC = 0.5)" — the batch brief's paraphrase "No
 * better than chance (AUC = 0.5)" is corrected to print (raw fragments +
 * PyMuPDF single-span read + both VLM figure passes agree
 * character-for-character); (B) the print's four targets are ONE row of
 * two pairs — this visual re-arranges the same four combinations as a
 * TRUE 2×2 (accuracy columns × precision rows; layout KYP's, every
 * printed label preserved; the print's arrangement is documented in the
 * footer); (C) the printed axes number only two "1"s — 0/.5/1 ticks are
 * added here for readability (documented); (D) the print's rotated/
 * curved trace labels are redrawn as HORIZONTAL text with leader lines
 * (the KYP visual system is horizontal-text-only); (E) the print's
 * double-headed ideal-vs-actual arrow is redrawn as KYP's labeled "AUC
 * gap" arrow. Nothing is reproduced from the book; purely presentational
 * (no props, no hooks, no external images). */

export const RocPrecisionMap = () => {
  const w = 1102;
  const h = 1180;

  /* One three-ring target with five darts at given offsets — the redrawn
   * geometry of the printed panel (rings r52/r33/r11, darts r4.5). */
  const target = (
    cx: number,
    cy: number,
    darts: [number, number][],
    key: string
  ) => (
    <g key={key}>
      <circle cx={cx} cy={cy} r="52" className="fill-card stroke-border" strokeWidth="1.4" />
      <circle cx={cx} cy={cy} r="33" className="fill-secondary stroke-border" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="11" className="fill-muted-foreground" />
      {darts.map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx} cy={cy + dy} r="4.5" className="fill-brand stroke-card" strokeWidth="0.8" />
      ))}
    </g>
  );

  /* One caption card for a target cell. */
  const cellCard = (
    x: number,
    y: number,
    title: string,
    titleCls: string,
    lines: string[],
    chip: string,
    chipRectCls: string,
    chipTextCls: string,
    printed: string,
    key: string
  ) => (
    <g key={key}>
      <rect x={x} y={y} width="210" height="120" rx="8" className="fill-card stroke-border" />
      <text x={x + 10} y={y + 18} fontSize="2.9" fontWeight="800" className={titleCls}>{title}</text>
      {lines.map((t, i) => (
        <text key={i} x={x + 10} y={y + 37 + i * 11} fontSize="2.6" fontWeight="700" className="fill-foreground/80">{t}</text>
      ))}
      <rect x={x + 10} y={y + 73} width="176" height="16" rx="5" className={chipRectCls} />
      <text x={x + 18} y={y + 84} fontSize="2.5" fontWeight="800" className={chipTextCls}>{chip}</text>
      <text x={x + 10} y={y + 105} fontSize="2.4" fontWeight="700" className="fill-muted-foreground">{printed}</text>
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="ROC curves precision and accuracy — the ROC plane redrawn with its printed axis labels (TP rate (sensitivity) vertical, FP rate (1 minus specificity) horizontal), the dashed chance diagonal labeled No predictive value (AUC = 0.5), the dashed ideal-test corner trace labeled Ideal test (AUC = 1), the solid actual-test curve labeled Actual test (0.5 less than AUC less than 1) bowing toward the upper left corner, the shaded area under the curve as the AUC, a labeled AUC-gap arrow between the ideal trace and the curve, and the printed comparison rule (the better performing test has the higher area under the curve, with the curve closer to the upper left corner); below it the four-target precision and accuracy panel re-arranged as a 2 by 2 (accuracy High and Low columns, precision High and Low rows), each cell a three-ring target with five darts in the printed pattern (tight and centered; tight but off-center; scattered but centered; scattered and off-center) with the printed definition lines and the error-type annotations (random error scatters the darts and lowers precision, lowering standard deviation and raising statistical power 1 minus beta when fixed; systematic error shifts the cluster and lowers accuracy) — an original KYP diagram of book 261." className="min-w-[1060px]">
      <title>ROC curves, precision, and accuracy — the discrimination plane and the four targets</title>
      <desc>
        An original KYP redraw of book 261's two pure-vector figures: the ROC plane (TP rate vs FP rate axes, the AUC 0.5 chance diagonal, the AUC 1 ideal corner, the actual-test curve bowing toward the upper left corner, all three printed trace labels, and the higher-AUC comparison rule) and the precision/accuracy four-target panel re-arranged as a 2×2 of accuracy High/Low columns × precision High/Low rows, with the printed definitions, the random-error and systematic-error annotations, and the printed consequence lines (↑ precision → ↓ standard deviation; ↑ precision → ↑ statistical power (1 − β)).
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">ROC curves, precision, and accuracy — the discrimination plane and the four targets</text>
        <rect x="830" y="25" width="230" height="18" rx="6" className="fill-brand-soft" />
        <text x="945" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">AUC 0.5 → 1 · 4 targets</text>
      </g>

      {/* ===== ZONE A — THE ROC PLANE ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="490" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE ROC PLANE — every cutoff is one point; the better test hugs the upper left corner</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">an ORIGINAL KYP REDRAW of the printed figure — the print numbers only the two “1”s; 0 and .5 ticks are added here for readability (documented)</text>

        {/* the plot: x 140-480, y 135-475 */}
        <g>
          {/* axis labels + ticks (horizontal text only — the print rotates the y-axis label 90°) */}
          <text x="140" y="127" fontSize="3.6" fontWeight="800" className="fill-foreground">TP rate (sensitivity)</text>
          <text x="310" y="498" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">FP rate (1 – specificity)</text>
          <line x1="140" y1="135" x2="140" y2="475" className="stroke-foreground" strokeWidth="1.5" />
          <line x1="140" y1="475" x2="480" y2="475" className="stroke-foreground" strokeWidth="1.5" />
          <line x1="134" y1="135" x2="140" y2="135" className="stroke-foreground" strokeWidth="1" />
          <line x1="134" y1="305" x2="140" y2="305" className="stroke-foreground" strokeWidth="1" />
          <line x1="134" y1="475" x2="140" y2="475" className="stroke-foreground" strokeWidth="1" />
          <line x1="140" y1="475" x2="140" y2="481" className="stroke-foreground" strokeWidth="1" />
          <line x1="310" y1="475" x2="310" y2="481" className="stroke-foreground" strokeWidth="1" />
          <line x1="480" y1="475" x2="480" y2="481" className="stroke-foreground" strokeWidth="1" />
          <text x="133" y="139" textAnchor="end" fontSize="3" fontWeight="700" className="fill-muted-foreground">1</text>
          <text x="133" y="309" textAnchor="end" fontSize="3" fontWeight="700" className="fill-muted-foreground">.5</text>
          <text x="133" y="479" textAnchor="end" fontSize="3" fontWeight="700" className="fill-muted-foreground">0</text>
          <text x="140" y="489" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">0</text>
          <text x="310" y="489" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">.5</text>
          <text x="480" y="489" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">1</text>

          {/* the AUC — the shaded area under the actual-test curve */}
          <path d="M 140 475 C 140 310, 225 190, 330 172 C 400 160, 445 146, 480 135 L 480 475 Z" className="fill-brand-soft/40" />

          {/* the chance diagonal (dashed) — the floor */}
          <line x1="140" y1="475" x2="480" y2="135" className="stroke-muted-foreground" strokeWidth="1.5" strokeDasharray="5 3" />

          {/* the ideal-test corner trace (dashed) — the ceiling */}
          <path d="M 146 475 L 146 141 L 480 141" fill="none" className="stroke-success" strokeWidth="1.8" strokeDasharray="5 3" />

          {/* the actual-test curve (solid) — bows toward the upper left corner */}
          <path d="M 140 475 C 140 310, 225 190, 330 172 C 400 160, 445 146, 480 135" fill="none" className="stroke-brand" strokeWidth="2.4" />

          {/* one cutoff = one point (KYP annotation) */}
          <circle cx="300" cy="190" r="3.5" className="fill-foreground" />

          {/* the AUC-gap arrow between the ideal trace and the curve (the print's double-headed arrow, KYP-labeled) */}
          <line x1="200" y1="149" x2="200" y2="256" className="stroke-foreground" strokeWidth="1.1" />
          <path d="M 196.5 153 L 200 146 L 203.5 153 Z" className="fill-foreground" />
          <path d="M 196.5 252 L 200 259 L 203.5 252 Z" className="fill-foreground" />
          <text x="208" y="200" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">AUC gap (KYP)</text>

          {/* trace labels — horizontal redraws of the print's rotated/curved labels */}
          <text x="210" y="157" fontSize="3.2" fontWeight="800" className="fill-success">Ideal test (AUC = 1)</text>
          <text x="240" y="250" fontSize="3.2" fontWeight="800" className="fill-brand">Actual test</text>
          <text x="240" y="262" fontSize="3.2" fontWeight="800" className="fill-brand">(0.5 &lt; AUC &lt; 1)</text>
          <line x1="265" y1="240" x2="258" y2="209" className="stroke-brand" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M 255.5 214 L 258 206 L 261.5 213 Z" className="fill-brand" />
          <text x="215" y="458" fontSize="3.2" fontWeight="800" className="fill-muted-foreground">No predictive value (AUC = 0.5)</text>
          <line x1="280" y1="449" x2="258" y2="366" className="stroke-muted-foreground" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M 254.5 371 L 258 362 L 262 370 Z" className="fill-muted-foreground" />
        </g>

        {/* the how-to-read panel */}
        <g>
          <rect x="520" y="130" width="530" height="352" rx="10" className="fill-card stroke-border" />
          <text x="536" y="152" fontSize="4.2" fontWeight="800" className="fill-foreground">HOW TO READ THE PLANE — the printed rules</text>

          <text x="536" y="170" fontSize="3.2" fontWeight="800" className="fill-brand">AXES — TRUE UP, FALSE FLAT (KYP)</text>
          <text x="536" y="181" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“Plots the true-positive rate (sensitivity) against the false-positive rate</text>
          <text x="536" y="190" fontSize="2.9" fontWeight="700" className="fill-foreground/80">(1 – specificity).” Left edge = no false positives; the good corner is upper LEFT.</text>

          <text x="536" y="212" fontSize="3.2" fontWeight="800" className="fill-brand">THE DIAGONAL — “No predictive value (AUC = 0.5)”</text>
          <text x="536" y="223" fontSize="2.9" fontWeight="700" className="fill-foreground/80">The dashed chance line from (0,0) to (1,1): a test on it distinguishes the 2</text>
          <text x="536" y="232" fontSize="2.9" fontWeight="700" className="fill-foreground/80">groups no better than chance — the floor every real test must beat.</text>

          <text x="536" y="254" fontSize="3.2" fontWeight="800" className="fill-brand">THE IDEAL CORNER — “Ideal test (AUC = 1)”</text>
          <text x="536" y="265" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Up the left edge (TP rate 1 at FP rate 0), then across the top — every case</text>
          <text x="536" y="274" fontSize="2.9" fontWeight="700" className="fill-foreground/80">caught, no false positives. The ceiling.</text>

          <text x="536" y="296" fontSize="3.2" fontWeight="800" className="fill-brand">THE ACTUAL CURVE — “Actual test (0.5 &lt; AUC &lt; 1)”</text>
          <text x="536" y="307" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Rises steeply (sensitivity gained cheaply), then flattens (each further gain</text>
          <text x="536" y="316" fontSize="2.9" fontWeight="700" className="fill-foreground/80">costs more false positives) — bowing toward the upper left corner.</text>

          <text x="536" y="338" fontSize="3.2" fontWeight="800" className="fill-brand">THE COMPARISON RULE (printed, verbatim)</text>
          <text x="536" y="349" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“The better performing test will have a higher area under the curve (AUC),</text>
          <text x="536" y="358" fontSize="2.9" fontWeight="700" className="fill-foreground/80">with the curve closer to the upper left corner.”</text>

          <text x="536" y="380" fontSize="3.2" fontWeight="800" className="fill-brand">ONE CURVE, EVERY CUTOFF (KYP)</text>
          <text x="536" y="391" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Each cutoff pairs one sensitivity with one (1 – specificity): one point. The</text>
          <text x="536" y="400" fontSize="2.9" fontWeight="700" className="fill-foreground/80">dot on the curve marks one cutoff; sweeping it walks the point along the curve.</text>

          <text x="536" y="422" fontSize="3.2" fontWeight="800" className="fill-brand">AUC AS RANKING (KYP context — not printed)</text>
          <text x="536" y="433" fontSize="2.9" fontWeight="700" className="fill-foreground/80">0.5 = chance floor, 1 = ideal ceiling; AUC = the probability the test ranks a</text>
          <text x="536" y="442" fontSize="2.9" fontWeight="700" className="fill-foreground/80">random diseased person above a random healthy one.</text>

          <rect x="536" y="452" width="498" height="24" rx="8" className="fill-brand-soft/60 stroke-brand" />
          <text x="546" y="461" fontSize="3" fontWeight="800" className="fill-brand">THE KYP RULE — better test = higher AUC = curve closer to the UPPER LEFT corner</text>
          <text x="546" y="471" fontSize="2.7" fontWeight="700" className="fill-brand/80">diagonal = the floor (0.5) · corner = the ceiling (1) · real tests bow up-left between</text>
        </g>

        {/* zone A bottom strip */}
        <text x="52" y="516" fontSize="3.4" fontWeight="800" className="fill-foreground">TRACE LABELS as printed — “Ideal test (AUC = 1)” · “Actual test (0.5 &lt; AUC &lt; 1)” · “No predictive value (AUC = 0.5)”</text>
        <text x="52" y="528" fontSize="3" fontWeight="700" className="fill-muted-foreground">the print sets “Actual test” on a curved baseline along its curve and “No predictive value” rotated ~42° parallel to the diagonal — horizontal here (KYP redraw)</text>
      </g>

      {/* ===== ZONE B — THE FOUR TARGETS ===== */}
      <g>
        <rect x="36" y="575" width="1030" height="520" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="597" fontSize="5.4" fontWeight="800" className="fill-foreground">PRECISION vs ACCURACY — the four targets (the printed one-row panel, re-arranged as a 2×2)</text>
        <text x="52" y="608" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">an ORIGINAL KYP REDRAW — the print draws the four targets as ONE row of two pairs (“Accuracy” above, “Precision” below); every printed label preserved here</text>

        {/* column super-header: ACCURACY */}
        <text x="625" y="634" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-foreground">ACCURACY (VALIDITY) — “The closeness of test results to the true values.” “The absence of systematic error or bias in a test.”</text>
        <text x="625" y="646" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">systematic error ↓ accuracy — bias SHIFTS the whole cluster off the bullseye (the COLUMN variable)</text>
        <rect x="383" y="656" width="54" height="17" rx="6" className="fill-success-soft/50 stroke-success" />
        <text x="410" y="668.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-success">High</text>
        <rect x="813" y="656" width="54" height="17" rx="6" className="fill-warning-soft/50 stroke-warning" />
        <text x="840" y="668.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">Low</text>

        {/* row labels: PRECISION */}
        <text x="121" y="638" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">PRECISION</text>
        <text x="121" y="650" textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">(RELIABILITY)</text>
        <rect x="94" y="686" width="54" height="17" rx="6" className="fill-success-soft/50 stroke-success" />
        <text x="121" y="698.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-success">High</text>
        <text x="121" y="736" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the ROW variable —</text>
        <text x="121" y="748" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">random error</text>
        <text x="121" y="760" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">SCATTERS the darts</text>
        <rect x="94" y="866" width="54" height="17" rx="6" className="fill-warning-soft/50 stroke-warning" />
        <text x="121" y="878.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">Low</text>
        <text x="121" y="912" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-foreground">KYP hook:</text>
        <text x="121" y="924" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-foreground/80">TIGHT = PRECISE,</text>
        <text x="121" y="936" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-foreground/80">CENTERED = ACCURATE</text>

        {/* column divider */}
        <line x1="640" y1="680" x2="640" y2="1028" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />

        {/* ROW 1 — precision High: tight clusters */}
        {target(330, 765, [[-1, 1], [7, 10], [10, -4], [-8, 10], [-8, -8]], "t1")}
        {cellCard(410, 705, "HIGH PRECISION · HIGH ACCURACY", "fill-success",
          ["Tight cluster, centered on the", "bullseye — consistent AND close", "to the true values. The ideal."],
          "neither error family at work", "fill-success-soft/50 stroke-success", "fill-success", "printed: 5 darts, tight + centered", "c1")}
        {target(760, 765, [[-24, -30], [-20, -44], [-36, -48], [-30, -38], [-37, -30]], "t2")}
        {cellCard(840, 705, "HIGH PRECISION · LOW ACCURACY", "fill-warning",
          ["Tight cluster, OFF the bullseye —", "reproducible, but every result", "wrong in the SAME direction."],
          "SYSTEMATIC ERROR (bias) shifts it", "fill-warning-soft/50 stroke-warning", "fill-warning", "printed: 5 darts, tight + up-left", "c2")}

        {/* ROW 2 — precision Low: scattered darts */}
        {target(330, 943, [[2, -4], [-25, -29], [-29, 13], [22, -28], [14, 35]], "t3")}
        {cellCard(410, 883, "LOW PRECISION · HIGH ACCURACY", "fill-warning",
          ["Scattered darts, centered on", "average — no single result is", "trustworthy (↑ SD, ↓ power)."],
          "RANDOM ERROR scatters the darts", "fill-emergency-soft/50 stroke-emergency", "fill-emergency", "printed: 5 darts, scattered + centered", "c3")}
        {target(760, 943, [[-38, -46], [-44, -14], [-17, -28], [-2, -46], [-6, 6]], "t4")}
        {cellCard(840, 883, "LOW PRECISION · LOW ACCURACY", "fill-emergency",
          ["Scattered AND off-center —", "neither consistent nor close", "to the true values."],
          "both error families at once", "fill-emergency-soft/50 stroke-emergency", "fill-emergency", "printed: 5 darts, scattered + up-left", "c4")}

        {/* the printed lines strip */}
        <rect x="52" y="1040" width="998" height="48" rx="8" className="fill-card stroke-border" />
        <text x="64" y="1054" fontSize="2.9" fontWeight="800" className="fill-foreground">PRECISION (RELIABILITY): “The consistency and reproducibility of a test.” “The absence of random variation in a test.”</text>
        <text x="64" y="1066" fontSize="2.9" fontWeight="800" className="fill-foreground">“Random error ↓ precision in a test.” “↑ precision → ↓ standard deviation.” “↑ precision → ↑ statistical power (1 − β).”</text>
        <text x="64" y="1078" fontSize="2.9" fontWeight="800" className="fill-foreground">ACCURACY (VALIDITY): “The closeness of test results to the true values.” — “Systematic error ↓ accuracy in a test.”</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1108" width="1054" height="62" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1126" fontSize="3.8" fontWeight="700" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 283 / book 261 (Public Health Sciences — Epidemiology and Biostatistics:</text>
        <text x="42" y="1137" fontSize="3.8" className="fill-muted-foreground">Receiver operating characteristic curve; Precision vs accuracy). Census (pdfimages): ZERO rasters — both figures pure vector → an ORIGINAL KYP</text>
        <text x="42" y="1147" fontSize="3.8" className="fill-muted-foreground">REDRAW pair in ONE registry visual. Geometry pinned 3 ways: raw text layer + PyMuPDF trace + 3-pass VLM (staging-pubh9/vlm-census.txt).</text>
        <text x="42" y="1157" fontSize="3.8" className="fill-muted-foreground">ADJUDICATION — the diagonal prints “No predictive value (AUC = 0.5)” (brief&apos;s “No better than chance” corrected to print); the print draws the</text>
        <text x="42" y="1167" fontSize="3.8" className="fill-muted-foreground">four targets as ONE row of two pairs, re-arranged here as a 2×2 (layout KYP&apos;s, labels preserved); the printed axes number only the two “1”s.</text>
      </g>
    </svg>
  );
};
