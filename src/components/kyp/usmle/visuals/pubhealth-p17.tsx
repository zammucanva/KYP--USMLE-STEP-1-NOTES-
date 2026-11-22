/* Public Health — PUBH batch 2, topic 17: Correlation and the Pearson
 * coefficient (TOP portion of pdf page 290 / book 268 — a PINNED
 * PAGE-SPLIT; the topic owns from the page top through the END of the
 * "Pearson correlation coefficient" block, ending immediately BEFORE the
 * in-body ribbon banner "▶ PUBLIC HEALTH SCIENCES—ETHICS" (raw line 43,
 * y≈337 per pdftotext -bbox), which opens the lower portion owned by
 * core-ethical-principles, produced in parallel). The top portion carries
 * TWO assets: (1) the definition text block (r is a measure of the linear
 * correlation between two variables, always between −1 and +1; the
 * strength rule; the inline variance definition; the positive/negative r
 * arrow lines; the coefficient of determination r²; the closing verdict
 * "Correlation does not necessarily imply causation.") and (2) THE
 * FIVE-PANEL SCATTER GALLERY — pure vector art (pdfimages: ZERO rasters
 * on the page): five gridline-framed scatter panels with unlabeled x/y
 * axes meeting at the lower-left with small arrowheads, navy filled-circle
 * dot fields (~11–14 dots each), fit-line arrows in the two STRONG panels
 * only, printed order LEFT→RIGHT pinned by pdftotext -bbox x-coordinates
 * + the VLM pass (BOTH passes, staging-pubh17/vlm-census.txt): r = –0.8
 * "Strong negative correlation" · r = –0.4 "Weak negative correlation" ·
 * r = 0 "No correlation" · r = +0.4 "Weak positive correlation" ·
 * r = +0.8 "Strong positive correlation". The gallery is an
 * ORIGINAL_KYP_REDRAW (the five dot fields are rebuilt as KYP vector art
 * matching each r's direction and tightness — tight steep fields for the
 * ±0.8 panels with fit-line arrows as printed, loose drifts for the ±0.4
 * panels, a shapeless cloud for r = 0; every printed label and caption is
 * preserved verbatim); the text block is an ORIGINAL KYP ADAPTATION (the
 * r/r² interpretation rail — SIGN / SIZE / SQUARE cards — plus the
 * correlation≠causation verdict band). Printed quirks carried + documented:
 * the raw text layer extracts the gallery captions in a jumbled order and
 * merges the middle label to "r=0" (the print spaces it — VLM-confirmed);
 * the two negative labels print an EN DASH (–) while the body's "−1" uses
 * the TRUE MINUS (−) — carried as printed. Nothing is reproduced from the
 * book; purely presentational (no props, no hooks, no external images). */

export const CorrelationMap = () => {
  const w = 1102;
  const h = 1050;

  /* The five dot fields — KYP originals calibrated to each panel's printed
   * r: direction from the slope, tightness from the spread around it. */
  const DOTS: [number, number][][] = [
    // r = –0.8 — tight downhill (strong negative)
    [[0.03,0.08],[0.11,0.15],[0.19,0.13],[0.27,0.24],[0.36,0.28],[0.44,0.37],[0.52,0.36],[0.60,0.47],[0.69,0.51],[0.77,0.60],[0.85,0.64],[0.93,0.74],[0.97,0.80]],
    // r = –0.4 — loose downhill (weak negative)
    [[0.04,0.20],[0.12,0.06],[0.20,0.34],[0.29,0.16],[0.37,0.42],[0.46,0.22],[0.54,0.50],[0.62,0.30],[0.71,0.58],[0.79,0.38],[0.87,0.66],[0.95,0.46]],
    // r = 0 — shapeless cloud (no correlation)
    [[0.05,0.12],[0.11,0.66],[0.19,0.38],[0.26,0.82],[0.34,0.22],[0.42,0.54],[0.50,0.08],[0.58,0.72],[0.66,0.34],[0.74,0.86],[0.82,0.18],[0.90,0.60],[0.96,0.40]],
    // r = +0.4 — loose uphill (weak positive)
    [[0.04,0.80],[0.12,0.94],[0.20,0.66],[0.29,0.84],[0.37,0.58],[0.46,0.78],[0.54,0.50],[0.62,0.70],[0.71,0.42],[0.79,0.62],[0.87,0.34],[0.95,0.54]],
    // r = +0.8 — tight uphill (strong positive)
    [[0.03,0.92],[0.11,0.85],[0.19,0.87],[0.27,0.76],[0.36,0.72],[0.44,0.63],[0.52,0.64],[0.60,0.53],[0.69,0.49],[0.77,0.40],[0.85,0.36],[0.93,0.26],[0.97,0.20]],
  ];
  const LABELS = ["r = –0.8", "r = –0.4", "r = 0", "r = +0.4", "r = +0.8"];
  const CAP1 = ["Strong negative", "Weak negative", "No correlation", "Weak positive", "Strong positive"];
  const CAP2 = ["correlation", "correlation", "", "correlation", "correlation"];
  const RSQ = ["r² = 0.64", "r² = 0.16", "r² = 0", "r² = 0.16", "r² = 0.64"];
  const STRONG = [true, false, false, false, true]; // fit-line arrow, as printed

  const panel = (i: number) => {
    const px = 67 + i * 198; // panel left edge
    const cx = px + 88; // panel center
    return (
      <g key={`p${i}`}>
        {/* the printed r label (italic r, as printed; en dash in the two negative labels) */}
        <text x={cx} y={140} textAnchor="middle" fontSize="5" fontWeight="800" fontStyle="italic" className="fill-foreground">{LABELS[i]}</text>
        {/* the gridline frame + unlabeled axes with lower-left arrowheads (as printed) */}
        <rect x={px + 2} y={152} width="172" height="176" rx="6" className="fill-card stroke-border" />
        <g className="stroke-border" strokeWidth="0.6" opacity="0.55">
          <line x1={px + 45} y1={154} x2={px + 45} y2={326} />
          <line x1={px + 88} y1={154} x2={px + 88} y2={326} />
          <line x1={px + 131} y1={154} x2={px + 131} y2={326} />
          <line x1={px + 4} y1={196} x2={px + 172} y2={196} />
          <line x1={px + 4} y1={240} x2={px + 172} y2={240} />
          <line x1={px + 4} y1={284} x2={px + 172} y2={284} />
        </g>
        <line x1={px + 8} y1={320} x2={px + 166} y2={320} className="stroke-foreground" strokeWidth="1.1" />
        <path d={`M ${px + 164} 316 L ${px + 172} 320 L ${px + 164} 324 Z`} className="fill-foreground" />
        <line x1={px + 8} y1={320} x2={px + 8} y2={164} className="stroke-foreground" strokeWidth="1.1" />
        <path d={`M ${px + 4} 170 L ${px + 8} 162 L ${px + 12} 170 Z`} className="fill-foreground" />
        {/* the fit-line arrow — printed in the two STRONG panels only */}
        {STRONG[i] && i === 0 && (
          <g className="stroke-muted-foreground" opacity="0.6">
            <line x1={px + 26} y1={176} x2={px + 150} y2={300} strokeWidth="1.1" />
            <path d={`M ${px + 156} 306 L ${px + 152} 297 L ${px + 147} 302 Z`} className="fill-muted-foreground" stroke="none" />
          </g>
        )}
        {STRONG[i] && i === 4 && (
          <g className="stroke-muted-foreground" opacity="0.6">
            <line x1={px + 26} y1={300} x2={px + 150} y2={176} strokeWidth="1.1" />
            <path d={`M ${px + 156} 178 L ${px + 152} 187 L ${px + 147} 182 Z`} className="fill-muted-foreground" stroke="none" />
          </g>
        )}
        {/* the KYP dot field — navy filled circles, direction × tightness per r */}
        {DOTS[i].map(([fx, fy], j) => (
          <circle key={`d${i}-${j}`} cx={px + 18 + fx * 140} cy={166 + fy * 148} r="3.1" className="fill-brand" />
        ))}
        {/* the printed caption (verbatim; "No correlation" prints on one line) */}
        <text x={cx} y={350} textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">{CAP1[i]}</text>
        {CAP2[i] !== "" && (
          <text x={cx} y={362} textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">{CAP2[i]}</text>
        )}
        <text x={cx} y={380} textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{RSQ[i]}</text>
      </g>
    );
  };

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Correlation and the Pearson coefficient — five scatter panels redrawn as original KYP vector art in the printed order (r = –0.8 strong negative correlation, r = –0.4 weak negative correlation, r = 0 no correlation, r = +0.4 weak positive correlation, r = +0.8 strong positive correlation, each with its printed caption), above the r/r² interpretation rail (the sign card: positive r value, as one variable rises the other rises, and negative r value, as one variable rises the other falls; the size card: r always between −1 and +1, the closer the absolute value of r is to 1 the stronger the linear correlation, with the five printed values on a −1 to +1 scale; the square card: coefficient of determination r², the proportion of variance in one variable explained by variance in the other, with the worked example r = +0.8 squaring to 0.64 or 64%) and the verdict band carrying the page's own printed sentence Correlation does not necessarily imply causation with the confounder, reverse-direction, and design-decides rivals — an original KYP diagram of book 268 (top)." className="min-w-[1060px]">
      <title>Correlation and the Pearson coefficient — the five-panel gallery and the r/r² decoder</title>
      <desc>
        The printed five-panel scatter gallery redrawn as KYP vector art (r = –0.8 strong negative, r = –0.4 weak negative, r = 0 no correlation, r = +0.4 weak positive, r = +0.8 strong positive — direction from each cloud&apos;s slope, tightness from its spread, fit-line arrows in the two strong panels as printed), then the interpretation rail in three cards (SIGN: the positive and negative r arrow lines; SIZE: the −1 to +1 range and strength rule with the five values plotted; SQUARE: the coefficient of determination r² with the 0.64 worked example and the variance definition), and the correlation-does-not-necessarily-imply-causation verdict band with its three rival explanations.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Correlation and the Pearson coefficient — the five-panel scatter gallery and the r/r² decoder</text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">5 panels · sign · size · square</text>
      </g>

      {/* ===== ZONE A — THE FIVE-PANEL SCATTER GALLERY ===== */}
      <g>
        <rect x="36" y="74" width="1030" height="360" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="98" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FIVE-PANEL SCATTER GALLERY — five dot clouds, five values of r (ORIGINAL KYP REDRAW)</text>
        <text x="52" y="109" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">printed order left → right, pinned by pdftotext -bbox + the VLM pass — sign = the slope of the cloud · size = the snugness around its line</text>
        {[0, 1, 2, 3, 4].map(panel)}
        <line x1="52" y1="400" x2="1050" y2="400" className="stroke-border" strokeWidth="1" />
        <text x="52" y="414" fontSize="3.6" fontWeight="800" className="fill-foreground">THE KYP RULE — the closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables · the sign only fixes direction</text>
        <text x="52" y="426" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Tight fields (±0.8) carry the print&apos;s faint fit-line arrow; the ±0.4 panels drift loosely; the r = 0 panel is a shapeless cloud — “No correlation”</text>
      </g>

      {/* ===== ZONE B — THE r/r² INTERPRETATION RAIL ===== */}
      <g>
        <rect x="36" y="448" width="1030" height="300" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="472" fontSize="5.4" fontWeight="800" className="fill-foreground">THE r/r² INTERPRETATION RAIL — the printed block as three dials (ORIGINAL KYP ADAPTATION)</text>
        <text x="52" y="483" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">every sentence below is the print&apos;s own; the dial grouping and the worked arithmetic are KYP&apos;s</text>

        {/* CARD 1 — THE SIGN: direction */}
        <g>
          <rect x="36" y="496" width="332" height="236" rx="10" className="fill-card stroke-border" />
          <text x="52" y="516" fontSize="4.4" fontWeight="800" className="fill-brand">THE SIGN — DIRECTION</text>
          <text x="52" y="527" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">which way do the two variables travel together?</text>
          <text x="52" y="549" fontSize="3.2" fontWeight="800" className="fill-foreground">Positive r value → positive correlation</text>
          <text x="52" y="560" fontSize="3" fontWeight="700" className="fill-foreground/80">(as one variable ↑, the other variable ↑).</text>
          <text x="52" y="581" fontSize="3.2" fontWeight="800" className="fill-foreground">Negative r value → negative correlation</text>
          <text x="52" y="592" fontSize="3" fontWeight="700" className="fill-foreground/80">(as one variable ↑, the other ↓).</text>
          <rect x="52" y="608" width="145" height="38" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="124.5" y="624" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">↑ ↑ POSITIVE</text>
          <text x="124.5" y="637" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">both variables rise together</text>
          <rect x="207" y="608" width="145" height="38" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="279.5" y="624" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">↑ ↓ NEGATIVE</text>
          <text x="279.5" y="637" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">one rises, the other falls</text>
          <text x="52" y="668" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the sign carries direction ONLY — it says nothing about</text>
          <text x="52" y="679" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">strength: −0.8 is STRONGER than +0.4 (compare |r|) (KYP)</text>
        </g>

        {/* CARD 2 — THE SIZE: strength, with the −1 → +1 scale */}
        <g>
          <rect x="384" y="496" width="332" height="236" rx="10" className="fill-card stroke-border" />
          <text x="400" y="516" fontSize="4.4" fontWeight="800" className="fill-brand">THE SIZE — STRENGTH</text>
          <text x="400" y="527" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">how snugly does the cloud hug a straight line?</text>
          <text x="400" y="549" fontSize="3" fontWeight="700" className="fill-foreground/80">r is always between −1 and +1. The closer the absolute</text>
          <text x="400" y="560" fontSize="3" fontWeight="700" className="fill-foreground/80">value of r is to 1, the stronger the linear correlation</text>
          <text x="400" y="571" fontSize="3" fontWeight="700" className="fill-foreground/80">between the 2 variables.</text>
          <text x="400" y="598" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-muted-foreground">−1</text>
          <text x="700" y="598" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-muted-foreground">+1</text>
          <line x1="400" y1="606" x2="700" y2="606" className="stroke-foreground" strokeWidth="1.5" />
          <line x1="550" y1="601" x2="550" y2="611" className="stroke-foreground" strokeWidth="1.2" />
          <circle cx="430" cy="606" r="4.5" className="fill-brand" />
          <circle cx="490" cy="606" r="3.5" className="fill-brand" />
          <circle cx="550" cy="606" r="3.5" className="fill-muted-foreground" />
          <circle cx="610" cy="606" r="3.5" className="fill-brand" />
          <circle cx="670" cy="606" r="4.5" className="fill-brand" />
          <text x="430" y="622" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">−0.8</text>
          <text x="490" y="622" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">−0.4</text>
          <text x="550" y="622" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">0</text>
          <text x="610" y="622" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">+0.4</text>
          <text x="670" y="622" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">+0.8</text>
          <text x="400" y="646" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the five printed values on the −1 → +1 scale:</text>
          <text x="400" y="657" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">strength = distance from 0 · sign = side of 0 (KYP)</text>
          <text x="400" y="686" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">|r| ≈ 0.8 → STRONG — dots hug the line (the print&apos;s two</text>
          <text x="400" y="697" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">fit-line panels) · |r| ≈ 0.4 → WEAK — loose drift · r = 0 → no linear trend</text>
        </g>

        {/* CARD 3 — THE SQUARE: shared variance */}
        <g>
          <rect x="732" y="496" width="332" height="236" rx="10" className="fill-card stroke-border" />
          <text x="748" y="516" fontSize="4.4" fontWeight="800" className="fill-brand">THE SQUARE — SHARED VARIANCE</text>
          <text x="748" y="527" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the coefficient of determination</text>
          <text x="748" y="549" fontSize="3" fontWeight="700" className="fill-foreground/80">Coefficient of determination = r² (proportion of</text>
          <text x="748" y="560" fontSize="3" fontWeight="700" className="fill-foreground/80">variance in one variable that can be explained by</text>
          <text x="748" y="571" fontSize="3" fontWeight="700" className="fill-foreground/80">variance in the other variable).</text>
          <rect x="748" y="588" width="300" height="40" rx="8" className="fill-brand-soft" />
          <text x="898" y="604" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">r = +0.8 → r² = 0.64</text>
          <text x="898" y="618" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">64% of the variance explained — 36% is not (KYP arithmetic)</text>
          <text x="748" y="650" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Variance — how much the measured values differ from</text>
          <text x="748" y="661" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the average value in a data set (the page&apos;s own inline</text>
          <text x="748" y="672" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">definition).</text>
          <text x="748" y="700" fontSize="2.8" fontWeight="800" className="fill-warning">exam rule — “proportion of variance explained” → r², never r (KYP)</text>
        </g>
      </g>

      {/* ===== ZONE C — THE CORRELATION ≠ CAUSATION VERDICT BAND ===== */}
      <g>
        <rect x="36" y="762" width="1030" height="150" rx="14" className="fill-warning-soft/40 stroke-warning" />
        <text x="551" y="788" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">THE VERDICT — printed in plain roman at the very end of the block (book 268, top)</text>
        <text x="551" y="812" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-foreground">“Correlation does not necessarily imply causation.”</text>
        <text x="551" y="828" textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">First Aid&apos;s own closing sentence, carried verbatim and attributed — the three rivals below all wear the same tight line (KYP)</text>
        <rect x="52" y="844" width="322" height="48" rx="8" className="fill-card stroke-border" />
        <text x="213" y="862" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">CONFOUNDER (KYP)</text>
        <text x="213" y="876" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">a third variable drives both — ice cream and drownings both ride summer heat</text>
        <rect x="396" y="844" width="322" height="48" rx="8" className="fill-card stroke-border" />
        <text x="557" y="862" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">REVERSE DIRECTION (KYP)</text>
        <text x="557" y="876" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the “outcome” may be driving the “exposure” — the arrow can point either way</text>
        <rect x="740" y="844" width="322" height="48" rx="8" className="fill-card stroke-border" />
        <text x="901" y="862" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">DESIGN DECIDES (KYP)</text>
        <text x="901" y="876" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">causation is earned by study design — randomization, temporality — never by |r|</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="926" width="1054" height="104" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="946" fontSize="3.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 290 / book 268 top (Public Health Sciences — Epidemiology and Biostatistics: Pearson correlation coefficient)</text>
        <text x="42" y="958" fontSize="3.6" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the five-panel gallery is PURE VECTOR art (navy filled-circle dots, tan gridline frames, unlabeled x/y axes with lower-left arrowheads, fit-line</text>
        <text x="42" y="969" fontSize="3.6" className="fill-muted-foreground">arrows in the two strong panels only; VLM-read at 120dpi + a 300dpi crop, staging-pubh17/vlm-census.txt). ORIGINAL KYP REDRAW — the five dot fields rebuilt as KYP vector art matching</text>
        <text x="42" y="980" fontSize="3.6" className="fill-muted-foreground">each r&apos;s direction and tightness; every printed r label and caption is preserved verbatim (printed order pinned by bbox + VLM); the block text is carried verbatim in the note&apos;s table block.</text>
        <text x="42" y="991" fontSize="3.6" className="fill-muted-foreground">ADJUDICATIONS — panel order −0.8 · −0.4 · 0 · +0.4 · +0.8 (the raw layer extracts the captions jumbled and merges the middle label to “r=0”; the print spaces it); en-dash (–) in the two</text>
        <text x="42" y="1002" fontSize="3.6" className="fill-muted-foreground">negative labels vs true minus (−) in the body&apos;s “−1” — text layer governs; the ribbon banner “▶ PUBLIC HEALTH SCIENCES—ETHICS” below the gallery is the pinned split boundary.</text>
      </g>
    </svg>
  );
};
