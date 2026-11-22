/* Public Health — PUBH batch 2, topic 7 (pubh7): Kaplan-Meier curves and
 * hazard ratios (CROSS-PAGE topic: pdf 281 / book 259 BOTTOM portion +
 * pdf 282 / book 260 TOP portion — boundaries pinned on both sides: on 259
 * the topic owns from the "Kaplan-Meier curve" navy heading to the page
 * end, the "Likelihood ratio" block above belonging to likelihood-ratios
 * (pubh6); on 260 it owns from the page top through the END of the "Hazard
 * ratio" block, the "Evaluation of diagnostic tests" heading and everything
 * below belonging to diagnostic-test-performance (pubh8)). The topic
 * carries TWO blocks: (1) "Kaplan-Meier curve" (book 259 bottom) — the
 * time-to-event text plus the STEPPED-CURVE FIGURE (pure vector art,
 * ORIGINAL KYP REDRAW here); (2) "Hazard ratio" (book 260 top) — pure text
 * (VLM-confirmed: no figure inside the block), visualized here as the HR
 * trio cards + slope/separation panels, which are KYP-original layouts of
 * the printed words (every printed label preserved). Figure geometry
 * pinned by PyMuPDF vector paths + the VLM pass at 120dpi
 * (staging-pubh7/vlm-census.txt): both curves start at 1.0 and share the
 * initial flat segment; at event time X the Drug curve steps down to 0.9
 * while the Control curve steps down to 0.7 (the print draws the shared
 * drop line two-tone, green above 0.9 for Drug's landing and yellow below
 * for Control's); at event time Y the Drug curve steps to ≈0.85 (a
 * half-tick step) and the Control curve to ≈0.5; both then run flat to the
 * end of follow-up at Z with endpoint dots (no further drop) — Drug ends
 * ≈ 0.85, Control ends ≈ 0.5. The y-axis reads "Survival probability"
 * (rotated in the print; drawn HORIZONTAL here — KYP convention) with
 * ticks 1.0 → 0.2 in 0.1 steps (nine labels; no 0.1 or 0.0); the x-axis
 * reads "Time" with NO numeric ticks — four tick marks (study start, X, Y,
 * Z) labeled below the axis by the letters X, Y, Z, with "Time" printed
 * between Y and Z. Curve labels "Drug" (blue #729ac4) and "Control"
 * (yellow #fcc00d) sit just above each curve's final flat segment; event
 * landings carry dots. Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

export const SurvivalAnalysisMap = () => {
  const w = 1102;
  const h = 1250;

  /* ===== the printed Kaplan-Meier geometry, re-plotted on KYP axes =====
   * y(v) maps survival probability → plot y (1.0 at 140, 0.2 at 460,
   * 40 units per 0.1 — the print's nine labeled levels). Time x-positions:
   * study start 210, event X 330, event Y 450, end-of-follow-up Z 630. */
  const yv = (v: number) => 140 + (1 - v) * 400;
  const Y_TICKS = [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2];
  const X_START = 210;
  const X_EVT_X = 330;
  const X_EVT_Y = 450;
  const X_END_Z = 630;
  const AXIS_Y = 478; // x-axis line (just below the 0.2 tick, as printed)

  // Drug (blue): 1.0 → drop at X to 0.9 → drop at Y to ≈0.85 → flat to Z
  const drugPath = `M ${X_START} ${yv(1.0)} L ${X_EVT_X} ${yv(1.0)} L ${X_EVT_X} ${yv(0.9)} L ${X_EVT_Y} ${yv(0.9)} L ${X_EVT_Y} ${yv(0.85)} L ${X_END_Z} ${yv(0.85)}`;
  // Control (yellow): 1.0 → drop at X to 0.7 → drop at Y to ≈0.5 → flat to Z
  const controlPath = `M ${X_START} ${yv(1.0)} L ${X_EVT_X} ${yv(1.0)} L ${X_EVT_X} ${yv(0.7)} L ${X_EVT_Y} ${yv(0.7)} L ${X_EVT_Y} ${yv(0.5)} L ${X_END_Z} ${yv(0.5)}`;

  const dot = (cx: number, cy: number, cls: string, key: string) => (
    <circle key={key} cx={cx} cy={cy} r="3.4" className={cls} />
  );

  /* A mini two-curve slope glyph for the HR cards (KYP-original icons:
   * Treatment blue, Comparator yellow; smooth conceptual curves — the
   * printed HR block carries text only, no figure). */
  const hrGlyph = (x: number, y: number, kind: "equal" | "higher" | "lower", key: string) => {
    const gx = x;
    const gy = y;
    let treat = "";
    let comp = "";
    if (kind === "equal") {
      comp = `M ${gx} ${gy + 26} C ${gx + 40} ${gy + 26}, ${gx + 70} ${gy + 34}, ${gx + 104} ${gy + 38}`;
      treat = `M ${gx} ${gy + 26} C ${gx + 40} ${gy + 26}, ${gx + 70} ${gy + 34}, ${gx + 104} ${gy + 38}`;
    } else if (kind === "higher") {
      comp = `M ${gx} ${gy + 26} C ${gx + 40} ${gy + 26}, ${gx + 70} ${gy + 34}, ${gx + 104} ${gy + 38}`;
      treat = `M ${gx} ${gy + 26} C ${gx + 30} ${gy + 38}, ${gx + 60} ${gy + 52}, ${gx + 104} ${gy + 62}`;
    } else {
      comp = `M ${gx} ${gy + 26} C ${gx + 40} ${gy + 26}, ${gx + 70} ${gy + 34}, ${gx + 104} ${gy + 38}`;
      treat = `M ${gx} ${gy + 26} C ${gx + 40} ${gy + 28}, ${gx + 70} ${gy + 31}, ${gx + 104} ${gy + 33}`;
    }
    return (
      <g key={key}>
        <line x1={gx} y1={gy + 26} x2={gx} y2={gy + 68} className="stroke-border" strokeWidth="1.4" />
        <line x1={gx} y1={gy + 68} x2={gx + 110} y2={gy + 68} className="stroke-border" strokeWidth="1.4" />
        <path d={comp} fill="none" className="stroke-warning" strokeWidth="2.4" />
        <path d={treat} fill="none" className="stroke-brand" strokeWidth="2.4" />
        <text x={gx + 112} y={gy + 70} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">time</text>
      </g>
    );
  };

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Kaplan-Meier curves and hazard ratios — the printed Kaplan-Meier figure redrawn as original KYP vector art: survival probability on the y-axis (ticks 1.0 down to 0.2) versus Time on the x-axis, two stepped curves starting together at 1.0 with the Drug curve (blue) stepping down to 0.9 at event time X and to about 0.85 at event time Y while the Control curve (yellow) steps down to 0.7 at X and to about 0.5 at Y, both then running flat to the end of follow-up at Z with endpoint dots, the letters X Y and Z printed below the time axis at the event and end-of-study ticks; plus the hazard-ratio trio (HR = 1 no difference between groups, HR greater than 1 event occurs more frequently in the treatment or exposure group, HR less than 1 event occurs less frequently in the treatment or exposure group, a protective effect) as cards with curve-slope glyphs, and the slope panel: HR is derived from the relative slopes or hazards of the survival curves, a steeper curve means higher hazard and faster occurrence of event, separation of curves over time reflects magnitude of HR, with the log rank test and Cox regression computing the P value for the survival difference — an original KYP diagram of book 259 (bottom) and 260 (top)." className="min-w-[1060px]">
      <title>Kaplan-Meier curves and hazard ratios — time-to-event analysis</title>
      <desc>
        The printed Kaplan-Meier stepped-curve figure (Drug vs Control over Time with event letters X, Y, Z) redrawn as original KYP vector art with every printed label preserved, the hazard-ratio interpretation trio as cards with slope glyphs, and the slopes-to-separation panel deriving HR from the relative slopes of the survival curves.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Kaplan-Meier curves and hazard ratios — time-to-event analysis</text>
        <rect x="790" y="25" width="272" height="18" rx="6" className="fill-brand-soft" />
        <text x="926" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">2 blocks · book 259 (bottom)–260 (top)</text>
      </g>

      {/* ===== ZONE A — THE PRINTED KAPLAN-MEIER CURVE, REDRAWN ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="500" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PRINTED KAPLAN-MEIER CURVE — Drug vs Control (ORIGINAL KYP REDRAW)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">book 259 (bottom): “Graphic representation shows the survival probabilities (y-axis) vs length of time (x-axis)” — every printed label preserved; the annotation rail is KYP&apos;s</text>

        {/* y-axis: label (horizontal, KYP convention) + nine ticks 1.0 → 0.2 */}
        <text x="170" y="122" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Survival probability</text>
        <line x1="170" y1="128" x2="170" y2={AXIS_Y} className="stroke-foreground" strokeWidth="1.5" />
        {Y_TICKS.map((v) => (
          <g key={`yt-${v}`}>
            <line x1="162" y1={yv(v)} x2="170" y2={yv(v)} className="stroke-foreground" strokeWidth="1.2" />
            <text x="156" y={yv(v) + 1.6} textAnchor="end" fontSize="3" fontWeight="700" className="fill-muted-foreground">{v.toFixed(1)}</text>
          </g>
        ))}

        {/* x-axis: line + four ticks (start, X, Y, Z) + printed letters + Time label */}
        <line x1="170" y1={AXIS_Y} x2="700" y2={AXIS_Y} className="stroke-foreground" strokeWidth="1.5" />
        <path d="M 698 474 L 708 478 L 698 482 Z" className="fill-foreground" />
        {[X_START, X_EVT_X, X_EVT_Y, X_END_Z].map((tx, i) => (
          <line key={`xt-${i}`} x1={tx} y1={AXIS_Y} x2={tx} y2={AXIS_Y + 4} className="stroke-foreground" strokeWidth="1.2" />
        ))}
        <text x={X_EVT_X} y={AXIS_Y + 14} textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">X</text>
        <text x={X_EVT_Y} y={AXIS_Y + 14} textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Y</text>
        <text x={X_END_Z} y={AXIS_Y + 14} textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Z</text>
        <text x="540" y={AXIS_Y + 20} textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Time</text>

        {/* gridlines at the two event times (KYP reading aid) */}
        <line x1={X_EVT_X} y1={yv(1.0)} x2={X_EVT_X} y2={AXIS_Y} className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
        <line x1={X_EVT_Y} y1={yv(0.9)} x2={X_EVT_Y} y2={AXIS_Y} className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
        <line x1={X_END_Z} y1={yv(0.85)} x2={X_END_Z} y2={AXIS_Y} className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

        {/* Control (yellow) staircase — drawn first; the shared 1.0 opening sits under Drug */}
        <path d={controlPath} fill="none" className="stroke-warning" strokeWidth="2.6" />
        {/* Drug (blue) staircase — the print's opening segment is shared by both arms */}
        <path d={drugPath} fill="none" className="stroke-brand" strokeWidth="2.6" />

        {/* event/landing dots — green start dot, then blue (Drug) and yellow (Control) landings, endpoint dots at Z */}
        {dot(X_START, yv(1.0), "fill-success", "start-dot")}
        {dot(X_EVT_X, yv(0.9), "fill-brand", "drug-x")}
        {dot(X_EVT_X, yv(0.7), "fill-warning", "ctl-x")}
        {dot(X_EVT_Y, yv(0.85), "fill-brand", "drug-y")}
        {dot(X_EVT_Y, yv(0.5), "fill-warning", "ctl-y")}
        {dot(X_END_Z, yv(0.85), "fill-brand", "drug-z")}
        {dot(X_END_Z, yv(0.5), "fill-warning", "ctl-z")}

        {/* curve names, placed as printed: just above each curve's final flat segment */}
        <text x="560" y={yv(0.85) - 6} fontSize="3.8" fontWeight="800" className="fill-brand">Drug</text>
        <text x="560" y={yv(0.5) - 6} fontSize="3.8" fontWeight="800" className="fill-warning">Control</text>

        {/* level tags at the drops (KYP) */}
        <text x={X_EVT_X + 6} y={yv(0.9) - 4} fontSize="2.7" fontWeight="700" className="fill-brand">1.0 → 0.9</text>
        <text x={X_EVT_X + 6} y={yv(0.7) + 12} fontSize="2.7" fontWeight="700" className="fill-warning">1.0 → 0.7</text>
        <text x={X_EVT_Y + 6} y={yv(0.85) + 12} fontSize="2.7" fontWeight="700" className="fill-brand">0.9 → ≈0.85</text>
        <text x={X_EVT_Y + 6} y={yv(0.5) + 12} fontSize="2.7" fontWeight="700" className="fill-warning">0.7 → ≈0.5</text>

        {/* annotation rail (KYP) */}
        <g>
          <text x="724" y="136" fontSize="4.2" fontWeight="800" className="fill-foreground">HOW TO READ IT (KYP)</text>
          <rect x="724" y="146" width="326" height="60" rx="8" className="fill-card stroke-border" />
          <text x="736" y="160" fontSize="2.9" fontWeight="800" className="fill-success">START AT 1.0 — both arms open at 100% survival (enrollment);</text>
          <text x="736" y="170" fontSize="2.9" fontWeight="700" className="fill-foreground/80">the print draws the shared opening segment once — the curves</text>
          <text x="736" y="180" fontSize="2.9" fontWeight="700" className="fill-foreground/80">separate only when an event occurs.</text>
          <text x="736" y="196" fontSize="2.9" fontWeight="800" className="fill-foreground/80">“Outcomes examined may include any event, but frequently</text>
          <text x="736" y="202" fontSize="2.9" fontWeight="800" className="fill-foreground/80">include mortality.”</text>

          <rect x="724" y="214" width="326" height="60" rx="8" className="fill-card stroke-border" />
          <text x="736" y="228" fontSize="2.9" fontWeight="800" className="fill-foreground/80">STEP DOWN = EVENT — a vertical drop at an event time; the</text>
          <text x="736" y="238" fontSize="2.9" fontWeight="700" className="fill-foreground/80">drop&apos;s SIZE is the events in that interval:</text>
          <text x="736" y="248" fontSize="2.9" fontWeight="800" className="fill-foreground/80">“Survival probability = 1 – (event probability).”</text>
          <text x="736" y="260" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">at X the Control drop is the larger — more events, sooner.</text>

          <rect x="724" y="282" width="326" height="60" rx="8" className="fill-card stroke-border" />
          <text x="736" y="296" fontSize="2.9" fontWeight="800" className="fill-foreground/80">FLAT RUN = NO EVENTS — the plateau between drops; the two</text>
          <text x="736" y="306" fontSize="2.9" fontWeight="700" className="fill-foreground/80">arms separate further at Y (Drug ≈ 0.85 vs Control ≈ 0.5) —</text>
          <text x="736" y="316" fontSize="2.9" fontWeight="700" className="fill-foreground/80">separation of curves over time reflects magnitude of HR.</text>
          <text x="736" y="330" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">Useful for displaying “time-to-event” data.</text>

          <rect x="724" y="350" width="326" height="60" rx="8" className="fill-card stroke-border" />
          <text x="736" y="364" fontSize="2.9" fontWeight="800" className="fill-foreground/80">DOT, NO DROP = END OF FOLLOW-UP — at Z both curves stop</text>
          <text x="736" y="374" fontSize="2.9" fontWeight="700" className="fill-foreground/80">with endpoint dots and no further step: Drug ends ≈ 0.85,</text>
          <text x="736" y="384" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Control ends ≈ 0.5 — the Drug arm survived more, longer.</text>
          <text x="736" y="398" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the print’s time axis carries NO numbers — X, Y, Z are the times.</text>

          <rect x="724" y="418" width="326" height="52" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="736" y="432" fontSize="2.9" fontWeight="800" className="fill-success">THE TEST — “P value for the survival difference can be</text>
          <text x="736" y="442" fontSize="2.9" fontWeight="800" className="fill-success">calculated using log rank test or Cox regression.”</text>
          <text x="736" y="456" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">log rank = the curve comparison; Cox regression = slopes → HR.</text>
        </g>

        {/* the rule strip */}
        <line x1="52" y1="484" x2="1050" y2="484" className="stroke-border" strokeWidth="1" />
        <text x="52" y="498" fontSize="3.4" fontWeight="800" className="fill-foreground">THE KYP RULE — the curve IS the data: start at 1.0 · step down at each event (1 – event probability) · flat between events · dot at the end of follow-up · compare arms by steepness (hazard) and separation</text>
        <text x="52" y="510" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Printed labels preserved: Survival probability · 1.0–0.2 ticks · Drug · Control · X · Y · Z · Time — the shared 1.0 opening, the two-tone X drop, and the ≈0.85/≈0.5 landings are pinned by PyMuPDF vector paths + the VLM pass</text>
      </g>

      {/* ===== ZONE B — THE HAZARD-RATIO TRIO ===== */}
      <g>
        <rect x="36" y="582" width="1030" height="268" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="604" fontSize="5.4" fontWeight="800" className="fill-foreground">THE HAZARD-RATIO TRIO — book 260 (top): the three printed bullets as cards (glyphs are KYP&apos;s)</text>
        <text x="52" y="615" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“Measure of how often a particular event (eg, death, relapse) occurs in one group compared with another, over time.” — Treatment = blue, Comparator = yellow in every glyph</text>

        {/* CARD 1 — HR = 1 */}
        <g>
          <rect x="52" y="628" width="322" height="208" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="628" width="322" height="26" rx="10" className="fill-success-soft/50" />
          <text x="66" y="645" fontSize="4.6" fontWeight="800" className="fill-success">HR = 1</text>
          <text x="352" y="645" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">curves track together</text>
          {hrGlyph(80, 668, "equal", "g-eq")}
          <text x="66" y="762" fontSize="3" fontWeight="800" className="fill-foreground/80">“HR = 1—no difference between groups.”</text>
          <text x="66" y="776" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">same slope, same hazard — the survival curves</text>
          <text x="66" y="786" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">overlap instead of separating: neither arm&apos;s</text>
          <text x="66" y="796" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">events come faster (KYP reading of the glyph).</text>
          <text x="66" y="816" fontSize="2.8" fontWeight="800" className="fill-neural">null value 1 — the anchor for the trio</text>
        </g>

        {/* CARD 2 — HR > 1 */}
        <g>
          <rect x="388" y="628" width="322" height="208" rx="10" className="fill-card stroke-border" />
          <rect x="388" y="628" width="322" height="26" rx="10" className="fill-warning-soft/50" />
          <text x="402" y="645" fontSize="4.6" fontWeight="800" className="fill-warning">HR &gt; 1</text>
          <text x="688" y="645" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">treatment curve steeper</text>
          {hrGlyph(416, 668, "higher", "g-hi")}
          <text x="402" y="762" fontSize="3" fontWeight="800" className="fill-foreground/80">“HR &gt; 1—event occurs more frequently in the</text>
          <text x="402" y="772" fontSize="3" fontWeight="800" className="fill-foreground/80">treatment/exposure group.”</text>
          <text x="402" y="788" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the blue curve drops faster — higher hazard —</text>
          <text x="402" y="798" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">and pulls BELOW the comparator: the exposure</text>
          <text x="402" y="808" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">arm reaches the event sooner, more often.</text>
          <text x="402" y="824" fontSize="2.8" fontWeight="800" className="fill-neural">a HARM signal (bad treatment / harmful exposure)</text>
        </g>

        {/* CARD 3 — HR < 1 */}
        <g>
          <rect x="724" y="628" width="322" height="208" rx="10" className="fill-card stroke-border" />
          <rect x="724" y="628" width="322" height="26" rx="10" className="fill-success-soft/50" />
          <text x="738" y="645" fontSize="4.6" fontWeight="800" className="fill-success">HR &lt; 1</text>
          <text x="1024" y="645" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">treatment curve flatter</text>
          {hrGlyph(752, 668, "lower", "g-lo")}
          <text x="738" y="762" fontSize="3" fontWeight="800" className="fill-foreground/80">“HR &lt; 1—event occurs less frequently in the</text>
          <text x="738" y="772" fontSize="3" fontWeight="800" className="fill-foreground/80">treatment/exposure group (protective effect).”</text>
          <text x="738" y="788" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the blue curve drops slower — lower hazard —</text>
          <text x="738" y="798" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">and stays ABOVE the comparator: the treatment</text>
          <text x="738" y="808" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">arm delays/avoids the event (eg, death, relapse).</text>
          <text x="738" y="824" fontSize="2.8" fontWeight="800" className="fill-neural">a BENEFIT signal (effective treatment)</text>
        </g>
      </g>

      {/* ===== ZONE C — SLOPES → HAZARD → SEPARATION ===== */}
      <g>
        <rect x="36" y="862" width="1030" height="286" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="884" fontSize="5.4" fontWeight="800" className="fill-foreground">SLOPES → HAZARD → SEPARATION — “Kaplan-Meier curves: HR is derived from the relative slopes (hazards) of the survival curves.”</text>
        <text x="52" y="895" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the hazard ratio is a ratio of SLOPES, not of heights — read the steepness first, the gap second (panels are KYP&apos;s; every quoted sentence is printed)</text>

        {/* LEFT — steeper = higher hazard */}
        <g>
          <rect x="52" y="908" width="322" height="222" rx="10" className="fill-card stroke-border" />
          <text x="66" y="928" fontSize="3.8" fontWeight="800" className="fill-brand">“A steeper curve = higher hazard (faster occurrence of event).”</text>
          <line x1="92" y1="946" x2="92" y2="1060" className="stroke-border" strokeWidth="1.4" />
          <line x1="92" y1="1060" x2="350" y2="1060" className="stroke-border" strokeWidth="1.4" />
          {/* shallow curve */}
          <path d="M 92 956 C 150 962, 240 986, 348 1006" fill="none" className="stroke-brand" strokeWidth="2.2" />
          <text x="354" y="1008" fontSize="2.7" fontWeight="700" className="fill-brand">gentle</text>
          {/* steep curve */}
          <path d="M 92 956 C 130 990, 190 1032, 300 1054" fill="none" className="stroke-warning" strokeWidth="2.2" />
          <text x="306" y="1056" fontSize="2.7" fontWeight="700" className="fill-warning">steep</text>
          {/* slope arrows */}
          <path d="M 232 986 L 252 1024" className="stroke-emergency" strokeWidth="1.6" />
          <path d="M 246 1020 L 252 1024 L 248 1017 Z" className="fill-emergency" />
          <text x="258" y="1010" fontSize="2.7" fontWeight="800" className="fill-emergency">steeper drop per unit time</text>
          <text x="66" y="1082" fontSize="2.8" fontWeight="700" className="fill-foreground/80">hazard = the event RATE operating at each moment — the</text>
          <text x="66" y="1092" fontSize="2.8" fontWeight="700" className="fill-foreground/80">slope of the survival curve. The arm whose curve falls</text>
          <text x="66" y="1102" fontSize="2.8" fontWeight="700" className="fill-foreground/80">faster is the arm with the higher hazard — its events</text>
          <text x="66" y="1112" fontSize="2.8" fontWeight="700" className="fill-foreground/80">occur sooner and more often (KYP gloss of the print).</text>
        </g>

        {/* MIDDLE — separation reflects magnitude */}
        <g>
          <rect x="388" y="908" width="322" height="222" rx="10" className="fill-card stroke-border" />
          <text x="402" y="928" fontSize="3.8" fontWeight="800" className="fill-brand">“Separation of curves over time reflects magnitude of HR.”</text>
          {/* small separation mini-plot */}
          <line x1="416" y1="946" x2="416" y2="1022" className="stroke-border" strokeWidth="1.2" />
          <line x1="416" y1="1022" x2="530" y2="1022" className="stroke-border" strokeWidth="1.2" />
          <path d="M 416 954 C 450 958, 490 972, 526 980" fill="none" className="stroke-brand" strokeWidth="2" />
          <path d="M 416 954 C 450 960, 490 976, 526 986" fill="none" className="stroke-warning" strokeWidth="2" />
          <text x="473" y="1040" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-foreground/80">curves close — HR near 1</text>
          {/* wide separation mini-plot */}
          <line x1="570" y1="946" x2="570" y2="1022" className="stroke-border" strokeWidth="1.2" />
          <line x1="570" y1="1022" x2="684" y2="1022" className="stroke-border" strokeWidth="1.2" />
          <path d="M 570 954 C 600 958, 640 966, 680 972" fill="none" className="stroke-brand" strokeWidth="2" />
          <path d="M 570 954 C 596 982, 640 1006, 680 1016" fill="none" className="stroke-warning" strokeWidth="2" />
          <text x="627" y="1040" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-foreground/80">curves apart — HR far from 1</text>
          {/* gap arrows */}
          <line x1="672" y1="976" x2="672" y2="1012" className="stroke-emergency" strokeWidth="1.4" />
          <path d="M 668 980 L 672 974 L 676 980 Z" className="fill-emergency" />
          <path d="M 668 1008 L 672 1014 L 676 1008 Z" className="fill-emergency" />
          <text x="402" y="1064" fontSize="2.8" fontWeight="700" className="fill-foreground/80">the WIDTH of the gap between the arms at any time is the</text>
          <text x="402" y="1074" fontSize="2.8" fontWeight="700" className="fill-foreground/80">cumulative signature of the hazard ratio: HR = 1 leaves the</text>
          <text x="402" y="1084" fontSize="2.8" fontWeight="700" className="fill-foreground/80">curves superimposed; every departure from 1 pries them</text>
          <text x="402" y="1094" fontSize="2.8" fontWeight="700" className="fill-foreground/80">apart, and the further apart, the bigger |HR − 1| (KYP).</text>
          <text x="402" y="1112" fontSize="2.8" fontWeight="800" className="fill-neural">on the redrawn print figure: the Drug–Control gap at Z ≈ 0.85 vs 0.5</text>
        </g>

        {/* RIGHT — the formula + test rail */}
        <g>
          <rect x="724" y="908" width="322" height="222" rx="10" className="fill-card stroke-border" />
          <text x="738" y="928" fontSize="3.8" fontWeight="800" className="fill-brand">The two printed formulas, on one rail</text>
          <rect x="738" y="940" width="294" height="52" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="752" y="958" fontSize="3.4" fontWeight="800" className="fill-success">Survival probability = 1 – (event probability)</text>
          <text x="752" y="972" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">every step down on the curve is exactly this subtraction —</text>
          <text x="752" y="982" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the bigger the event probability, the deeper the step</text>
          <rect x="738" y="1000" width="294" height="52" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="752" y="1018" fontSize="3.4" fontWeight="800" className="fill-warning">P value for the survival difference can be calculated</text>
          <text x="752" y="1028" fontSize="3.4" fontWeight="800" className="fill-warning">using log rank test or Cox regression</text>
          <text x="752" y="1042" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">log rank compares the whole curves; Cox regression fits</text>
          <text x="752" y="1052" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the hazards and yields the HR (KYP gloss)</text>
          <text x="738" y="1072" fontSize="2.8" fontWeight="700" className="fill-foreground/80">“Outcomes examined may include any event, but frequently</text>
          <text x="738" y="1082" fontSize="2.8" fontWeight="700" className="fill-foreground/80">include mortality.” — the event may also be relapse, MI,</text>
          <text x="738" y="1092" fontSize="2.8" fontWeight="700" className="fill-foreground/80">progression: any time-to-event outcome (relapse is the</text>
          <text x="738" y="1102" fontSize="2.8" fontWeight="700" className="fill-foreground/80">print&apos;s own second example, in the HR definition).</text>
          <text x="738" y="1120" fontSize="2.8" fontWeight="800" className="fill-neural">KM curve = the picture · HR = the ratio of slopes · log rank/Cox = the test</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1160" width="1054" height="72" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1178" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 281 (bottom) / book 259 + pdf 282 (top) / book 260 (Public Health Sciences — Epidemiology and Biostatistics: Kaplan-Meier curve; Hazard ratio)</text>
        <text x="42" y="1190" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the Kaplan-Meier figure is pure vector line art (geometry pinned by PyMuPDF vector paths + the VLM pass at 120dpi, staging-pubh7/vlm-census.txt),</text>
        <text x="42" y="1200" fontSize="3.8" className="fill-muted-foreground">redrawn here as an ORIGINAL KYP REDRAW (horizontal y-axis label; KYP theme colors); the Hazard ratio block is pure printed text (VLM-confirmed: no figure) — the trio cards and slope panels are</text>
        <text x="42" y="1210" fontSize="3.8" className="fill-muted-foreground">KYP-original layouts of the printed bullets. ADJUDICATIONS — Drug lands 0.9 at X and ≈0.85 at Y (a half-tick step); Control lands 0.7 at X and ≈0.5 at Y; both curves share the 1.0 opening;</text>
        <text x="42" y="1220" fontSize="3.8" className="fill-muted-foreground">the print draws the shared X drop two-tone (green above Drug&apos;s 0.9 landing, yellow below to Control&apos;s 0.7); X and Y label the two event times, Z the end of follow-up (endpoint dots, no drop).</text>
      </g>
    </svg>
  );
};
