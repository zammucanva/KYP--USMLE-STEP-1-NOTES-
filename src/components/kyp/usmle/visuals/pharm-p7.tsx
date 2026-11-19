/* Pharmacology — PH-batch 7: Receptor binding + Therapeutic index (book 233).
 * Original KYP redraw: the source page prints THREE VECTOR dose-response
 * panels with white-on-teal A/B/C letter chips (pdfimages: zero rasters) —
 * panel A: the black Agonist reference curve + a pink right-shifted curve
 * with the SAME 100% ceiling ("Agonist + competitive antagonist", red
 * right-arrow "Reduced potency"); panel B: Agonist + an orange lower-plateau
 * curve at the SAME midpoint ("Agonist + noncompetitive antagonist", red
 * down-arrow "Reduced efficacy"); panel C: Agonist + two green partial-
 * agonist curves with lower plateaus (two red down-arrows, "Independent
 * potency" half-max straddle) — plus the pure-text 4-row agonist-types
 * table and the vector therapeutic-index figure (Efficacy/Toxicity quantal
 * curves, ED50/TD50 markers, the "Therapeutic index" bracket). Everything
 * here is redrawn on original KYP axes with original KYP geometry (sigmoid
 * paths computed from the logistic equation, markers placed at the EC50s);
 * no source artwork is reproduced. The table is re-set as KYP table art
 * with the row order as printed. Purely presentational: no props, no hooks,
 * no external images. */

export function ReceptorBindingMap() {
  const w = 1102;
  const h = 1204;

  /* ---- Panel-row geometry: effect (0-1) -> y = 340 - 218e ----
   * axis x: panel A 88, B 436, C 784; dose t (0-1) -> x = axisX + 266t ---- */
  const panelCurve = (axisX: number, emax: number, ec50: number, slope = 16) => {
    let d = "";
    for (let i = 0; i <= 48; i++) {
      const t = i / 48;
      const e = emax / (1 + Math.exp(-slope * (t - ec50)));
      const x = axisX + t * 266;
      const y = 340 - e * 218;
      d += `${i === 0 ? "M" : " L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  };

  /* ---- TI-figure geometry: % responding (0-1) -> y = 984 - 154p ----
   * log dose d (0-1) -> x = 136 + 430d ---- */
  const quantal = (ec50: number, slope = 13) => {
    let d = "";
    for (let i = 0; i <= 48; i++) {
      const t = i / 48;
      const p = 1 / (1 + Math.exp(-slope * (t - ec50)));
      const x = 136 + t * 430;
      const y = 984 - p * 154;
      d += `${i === 0 ? "M" : " L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  };

  /* half-max EC50 x-positions for the panel L-markers */
  const ax = (axisX: number, t: number) => axisX + t * 266;
  const ey = (e: number) => 340 - e * 218;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Receptor binding and therapeutic index — the A/B/C dose-response panels (competitive right-shift with intact ceiling, noncompetitive ceiling-drop at the same midpoint, partial agonists with lower plateaus and independent potency), the verbatim four-row agonist-types table, the inverse-agonist glyph, and the TD50/ED50 safety-gap curves — an original KYP redraw of book 233." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Receptor binding &amp; therapeutic index — three panels, four rows, one safety gap</text>
        <rect x="852" y="24" width="208" height="18" className="fill-brand-soft" />
        <text x="956" y="37" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-brand">original KYP redraw</text>
      </g>

      {/* ===== PANEL A — AGONIST + COMPETITIVE ANTAGONIST ===== */}
      <g>
        <rect x="36" y="74" width="332" height="336" rx="12" className="fill-card stroke-border" />
        <text x="52" y="94" fontSize="5.6" fontWeight="800" className="fill-foreground">PANEL A · AGONIST + COMPETITIVE ANTAGONIST</text>
        <text x="52" y="105" fontSize="3.6" className="fill-muted-foreground">the right shift — reduced potency, ceiling intact (book 233)</text>
        <circle cx="334" cy="96" r="11" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="334" y="99.5" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">A</text>
        {/* axes */}
        <line x1="88" y1="116" x2="88" y2="340" className="stroke-border" strokeWidth="1.6" />
        <line x1="88" y1="340" x2="354" y2="340" className="stroke-border" strokeWidth="1.6" />
        <text x="80" y="125" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">100</text>
        <text x="80" y="234" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">50</text>
        <text x="80" y="343" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">0</text>
        <text x="221" y="356" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Agonist dose</text>
        {/* Emax dashed ceiling */}
        <line x1="88" y1="122" x2="350" y2="122" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        {/* 50% L-markers at each curve's EC50 */}
        <line x1="88" y1="231" x2="247.6" y2="231" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="0.9" />
        <line x1="167.8" y1="231" x2="167.8" y2="340" strokeDasharray="4 3" className="stroke-brand" strokeWidth="0.9" />
        <line x1="247.6" y1="231" x2="247.6" y2="340" strokeDasharray="4 3" className="stroke-warning" strokeWidth="0.9" />
        {/* the two curves — same ceiling, right-shifted */}
        <path d={panelCurve(88, 1, 0.3)} fill="none" className="stroke-brand" strokeWidth="2.2" />
        <path d={panelCurve(88, 1, 0.6)} fill="none" className="stroke-warning" strokeWidth="2.2" />
        {/* red right-arrow: the potency shift */}
        <line x1="172" y1="231" x2="241" y2="231" className="stroke-emergency" strokeWidth="1.4" />
        <polygon points="241,227.5 249,231 241,234.5" className="fill-emergency" />
        <text x="206" y="249" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Reduced potency</text>
        {/* curve labels */}
        <text x="100" y="150" fontSize="3.8" fontWeight="700" className="fill-brand">Agonist</text>
        <text x="252" y="306" fontSize="3.8" fontWeight="700" className="fill-warning">Agonist +</text>
        <text x="252" y="318" fontSize="3.8" fontWeight="700" className="fill-warning">competitive</text>
        <text x="252" y="330" fontSize="3.8" fontWeight="700" className="fill-warning">antagonist</text>
        {/* row strip */}
        <rect x="52" y="360" width="300" height="42" rx="8" className="fill-secondary/40 stroke-border" />
        <text x="66" y="373" fontSize="4.2" fontWeight="800" className="fill-foreground">POTENCY ↓ · EFFICACY No change</text>
        <text x="66" y="384" fontSize="3.4" className="fill-muted-foreground">Can be overcome by ↑ agonist concentration</text>
        <text x="66" y="396" fontSize="3.4" className="fill-muted-foreground">row A: diazepam + flumazenil · GABA A receptor</text>
      </g>

      {/* ===== PANEL B — AGONIST + NONCOMPETITIVE ANTAGONIST ===== */}
      <g>
        <rect x="384" y="74" width="332" height="336" rx="12" className="fill-card stroke-border" />
        <text x="400" y="94" fontSize="5.6" fontWeight="800" className="fill-foreground">PANEL B · AGONIST + NONCOMPETITIVE ANTAGONIST</text>
        <text x="400" y="105" fontSize="3.6" className="fill-muted-foreground">the ceiling drop — reduced efficacy, midpoint unchanged</text>
        <circle cx="682" cy="96" r="11" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="682" y="99.5" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">B</text>
        {/* axes */}
        <line x1="436" y1="116" x2="436" y2="340" className="stroke-border" strokeWidth="1.6" />
        <line x1="436" y1="340" x2="702" y2="340" className="stroke-border" strokeWidth="1.6" />
        <text x="428" y="125" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">100</text>
        <text x="428" y="234" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">50</text>
        <text x="428" y="343" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">0</text>
        <text x="569" y="356" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Agonist dose</text>
        {/* Emax dashed ceiling */}
        <line x1="436" y1="122" x2="698" y2="122" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        {/* L-markers: agonist 50% and the lowered curve's own half-max, SAME x */}
        <line x1="436" y1="231" x2="515.8" y2="231" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="0.9" />
        <line x1="515.8" y1="231" x2="515.8" y2="340" strokeDasharray="4 3" className="stroke-brand" strokeWidth="0.9" />
        <line x1="436" y1="287.7" x2="515.8" y2="287.7" strokeDasharray="4 3" className="stroke-emergency" strokeWidth="0.9" />
        <line x1="515.8" y1="287.7" x2="515.8" y2="340" strokeDasharray="4 3" className="stroke-emergency" strokeWidth="0.9" />
        <text x="522" y="300" fontSize="3.4" fontWeight="700" className="fill-emergency">same midpoint</text>
        {/* the two curves — lower plateau, same EC50 */}
        <path d={panelCurve(436, 1, 0.3)} fill="none" className="stroke-brand" strokeWidth="2.2" />
        <path d={panelCurve(436, 0.48, 0.3)} fill="none" className="stroke-emergency" strokeWidth="2.2" />
        {/* red down-arrow: the ceiling drop */}
        <line x1="640" y1="126" x2="640" y2="228" className="stroke-emergency" strokeWidth="1.4" />
        <polygon points="636.5,228 643.5,228 640,236" className="fill-emergency" />
        <text x="634" y="158" textAnchor="end" fontSize="4.2" fontWeight="800" className="fill-emergency">Reduced efficacy</text>
        {/* curve labels */}
        <text x="448" y="160" fontSize="3.8" fontWeight="700" className="fill-brand">Agonist</text>
        <text x="546" y="262" fontSize="3.8" fontWeight="700" className="fill-emergency">Agonist +</text>
        <text x="546" y="274" fontSize="3.8" fontWeight="700" className="fill-emergency">noncompetitive</text>
        <text x="546" y="286" fontSize="3.8" fontWeight="700" className="fill-emergency">antagonist</text>
        {/* row strip */}
        <rect x="400" y="360" width="300" height="42" rx="8" className="fill-secondary/40 stroke-border" />
        <text x="414" y="373" fontSize="4.2" fontWeight="800" className="fill-foreground">POTENCY No change · EFFICACY ↓</text>
        <text x="414" y="384" fontSize="3.4" className="fill-muted-foreground">Cannot be overcome by ↑ agonist concentration</text>
        <text x="414" y="396" fontSize="3.4" className="fill-muted-foreground">row B: NE + phenoxybenzamine · α-receptors</text>
      </g>

      {/* ===== PANEL C — PARTIAL AGONIST ===== */}
      <g>
        <rect x="732" y="74" width="334" height="336" rx="12" className="fill-card stroke-border" />
        <text x="748" y="94" fontSize="5.6" fontWeight="800" className="fill-foreground">PANEL C · PARTIAL AGONIST (ALONE)</text>
        <text x="748" y="105" fontSize="3.6" className="fill-muted-foreground">lower ceiling, independent potency — acts at same site</text>
        <circle cx="1030" cy="96" r="11" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="1030" y="99.5" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">C</text>
        {/* axes */}
        <line x1="784" y1="116" x2="784" y2="340" className="stroke-border" strokeWidth="1.6" />
        <line x1="784" y1="340" x2="1050" y2="340" className="stroke-border" strokeWidth="1.6" />
        <text x="776" y="125" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">100</text>
        <text x="776" y="234" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">50</text>
        <text x="776" y="343" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">0</text>
        <text x="917" y="356" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Agonist dose</text>
        {/* Emax dashed ceiling */}
        <line x1="784" y1="122" x2="1046" y2="122" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        {/* half-max L-markers: agonist at center, the two partials straddling it */}
        <line x1="784" y1="231" x2="948.9" y2="231" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="0.9" />
        <line x1="895.7" y1="231" x2="895.7" y2="340" strokeDasharray="4 3" className="stroke-brand" strokeWidth="0.9" />
        <line x1="784" y1="272.4" x2="847.8" y2="272.4" strokeDasharray="4 3" className="stroke-warning" strokeWidth="0.9" />
        <line x1="847.8" y1="272.4" x2="847.8" y2="340" strokeDasharray="4 3" className="stroke-warning" strokeWidth="0.9" />
        <line x1="784" y1="285.5" x2="948.9" y2="285.5" strokeDasharray="4 3" className="stroke-emergency" strokeWidth="0.9" />
        <line x1="948.9" y1="285.5" x2="948.9" y2="340" strokeDasharray="4 3" className="stroke-emergency" strokeWidth="0.9" />
        {/* three curves: full agonist + two partials (left and right of it) */}
        <path d={panelCurve(784, 1, 0.42)} fill="none" className="stroke-brand" strokeWidth="2.2" />
        <path d={panelCurve(784, 0.62, 0.24)} fill="none" className="stroke-warning" strokeWidth="2.2" />
        <path d={panelCurve(784, 0.5, 0.62)} fill="none" className="stroke-emergency" strokeWidth="2.2" />
        {/* two red down-arrows: efficacy ↓ for each partial */}
        <line x1="860" y1="126" x2="860" y2="196" className="stroke-emergency" strokeWidth="1.4" />
        <polygon points="856.5,196 863.5,196 860,204" className="fill-emergency" />
        <line x1="1010" y1="126" x2="1010" y2="223" className="stroke-emergency" strokeWidth="1.4" />
        <polygon points="1006.5,223 1013.5,223 1010,231" className="fill-emergency" />
        <text x="798" y="140" fontSize="4.2" fontWeight="800" className="fill-emergency">Reduced</text>
        <text x="798" y="152" fontSize="4.2" fontWeight="800" className="fill-emergency">efficacy</text>
        {/* curve labels */}
        <text x="864" y="178" fontSize="3.8" fontWeight="700" className="fill-brand">Agonist</text>
        <text x="900" y="190" fontSize="3.8" fontWeight="700" className="fill-warning">Partial agonist</text>
        <text x="946" y="252" fontSize="3.8" fontWeight="700" className="fill-emergency">Partial agonist</text>
        <text x="995" y="322" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">Independent potency</text>
        {/* row strip */}
        <rect x="748" y="360" width="302" height="42" rx="8" className="fill-secondary/40 stroke-border" />
        <text x="762" y="373" fontSize="4.2" fontWeight="800" className="fill-foreground">POTENCY Independent · EFFICACY ↓</text>
        <text x="762" y="384" fontSize="3.4" className="fill-muted-foreground">Acts at same site as full agonist</text>
        <text x="762" y="396" fontSize="3.4" className="fill-muted-foreground">row C: morphine vs buprenorphine · μ-receptors</text>
      </g>

      {/* ===== THE VERBATIM TABLE ===== */}
      <g>
        <rect x="36" y="420" width="1030" height="344" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="442" fontSize="6" fontWeight="800" className="fill-foreground">THE AGONIST-TYPES TABLE — verbatim, printed row order (book 233)</text>
        <rect x="852" y="430" width="198" height="18" rx="6" className="fill-brand-soft" />
        <text x="951" y="442" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">4 rows · 5 columns</text>
        {/* header row */}
        <rect x="52" y="452" width="150" height="26" rx="6" className="fill-card stroke-border" />
        <text x="127" y="469" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-muted-foreground">AGONIST WITH</text>
        <rect x="206" y="452" width="70" height="26" rx="6" className="fill-card stroke-brand" />
        <text x="241" y="462" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">POTENCY</text>
        <text x="241" y="473" textAnchor="middle" fontSize="3.4" className="fill-brand">dose axis</text>
        <rect x="280" y="452" width="70" height="26" rx="6" className="fill-card stroke-emergency" />
        <text x="315" y="462" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">EFFICACY</text>
        <text x="315" y="473" textAnchor="middle" fontSize="3.4" className="fill-emergency">effect axis</text>
        <rect x="354" y="452" width="290" height="26" rx="6" className="fill-card stroke-border" />
        <text x="499" y="469" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-muted-foreground">REMARKS</text>
        <rect x="648" y="452" width="398" height="26" rx="6" className="fill-card stroke-border" />
        <text x="847" y="469" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-muted-foreground">EXAMPLE</text>
        {/* row A — Competitive antagonist */}
        <rect x="52" y="482" width="150" height="58" rx="6" className="fill-card stroke-border" />
        <circle cx="72" cy="511" r="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="72" y="514.5" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-brand">A</text>
        <text x="88" y="507" fontSize="4.4" fontWeight="800" className="fill-foreground">Competitive</text>
        <text x="88" y="519" fontSize="4.4" fontWeight="800" className="fill-foreground">antagonist</text>
        <rect x="206" y="482" width="70" height="58" rx="6" className="fill-brand-soft/40 stroke-border" />
        <text x="241" y="518" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">↓</text>
        <rect x="280" y="482" width="70" height="58" rx="6" className="fill-card stroke-border" />
        <text x="315" y="515" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">No</text>
        <text x="315" y="526" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">change</text>
        <rect x="354" y="482" width="290" height="58" rx="6" className="fill-card stroke-border" />
        <text x="499" y="506" textAnchor="middle" fontSize="3.6" className="fill-foreground">Can be overcome by</text>
        <text x="499" y="518" textAnchor="middle" fontSize="3.6" className="fill-foreground">↑ agonist concentration</text>
        <rect x="648" y="482" width="398" height="58" rx="6" className="fill-card stroke-border" />
        <text x="662" y="506" fontSize="3.4" className="fill-foreground">Diazepam (agonist) + flumazenil (competitive</text>
        <text x="662" y="518" fontSize="3.4" className="fill-foreground">antagonist) on GABA A receptor.</text>
        {/* row B — Noncompetitive antagonist */}
        <rect x="52" y="544" width="150" height="58" rx="6" className="fill-card stroke-border" />
        <circle cx="72" cy="573" r="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="72" y="576.5" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-brand">B</text>
        <text x="88" y="569" fontSize="4.4" fontWeight="800" className="fill-foreground">Noncompetitive</text>
        <text x="88" y="581" fontSize="4.4" fontWeight="800" className="fill-foreground">antagonist</text>
        <rect x="206" y="544" width="70" height="58" rx="6" className="fill-card stroke-border" />
        <text x="241" y="577" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">No</text>
        <text x="241" y="588" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">change</text>
        <rect x="280" y="544" width="70" height="58" rx="6" className="fill-emergency-soft/40 stroke-border" />
        <text x="315" y="580" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">↓</text>
        <rect x="354" y="544" width="290" height="58" rx="6" className="fill-card stroke-border" />
        <text x="499" y="568" textAnchor="middle" fontSize="3.6" className="fill-foreground">Cannot be overcome by</text>
        <text x="499" y="580" textAnchor="middle" fontSize="3.6" className="fill-foreground">↑ agonist concentration</text>
        <rect x="648" y="544" width="398" height="58" rx="6" className="fill-card stroke-border" />
        <text x="662" y="568" fontSize="3.4" className="fill-foreground">Norepinephrine (agonist) + phenoxybenzamine</text>
        <text x="662" y="580" fontSize="3.4" className="fill-foreground">(noncompetitive antagonist) on α-receptors.</text>
        {/* row C — Partial agonist (alone) */}
        <rect x="52" y="606" width="150" height="58" rx="6" className="fill-card stroke-border" />
        <circle cx="72" cy="635" r="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="72" y="638.5" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-brand">C</text>
        <text x="88" y="629" fontSize="4.4" fontWeight="800" className="fill-foreground">Partial agonist</text>
        <text x="88" y="641" fontSize="4.4" fontWeight="800" className="fill-foreground">(alone)</text>
        <rect x="206" y="606" width="70" height="58" rx="6" className="fill-card stroke-border" />
        <text x="241" y="640" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Independent</text>
        <rect x="280" y="606" width="70" height="58" rx="6" className="fill-emergency-soft/40 stroke-border" />
        <text x="315" y="642" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">↓</text>
        <rect x="354" y="606" width="290" height="58" rx="6" className="fill-card stroke-border" />
        <text x="499" y="639" textAnchor="middle" fontSize="3.6" className="fill-foreground">Acts at same site as full agonist</text>
        <rect x="648" y="606" width="398" height="58" rx="6" className="fill-card stroke-border" />
        <text x="662" y="630" fontSize="3.4" className="fill-foreground">Morphine (full agonist) vs buprenorphine (partial</text>
        <text x="662" y="642" fontSize="3.4" className="fill-foreground">agonist) at opioid μ-receptors.</text>
        {/* row 4 — Inverse agonist (alone), no chip */}
        <rect x="52" y="668" width="150" height="76" rx="6" className="fill-card stroke-border" />
        <text x="66" y="690" fontSize="4.4" fontWeight="800" className="fill-foreground">Inverse agonist</text>
        <text x="66" y="702" fontSize="4.4" fontWeight="800" className="fill-foreground">(alone)</text>
        <text x="66" y="726" fontSize="3.4" className="fill-muted-foreground">no letter chip — the</text>
        <text x="66" y="736" fontSize="3.4" className="fill-muted-foreground">source prints none</text>
        <rect x="206" y="668" width="70" height="76" rx="6" className="fill-card stroke-border" />
        <text x="241" y="710" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Independent</text>
        <rect x="280" y="668" width="70" height="76" rx="6" className="fill-emergency-soft/40 stroke-border" />
        <text x="315" y="712" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Negative</text>
        <rect x="354" y="668" width="290" height="76" rx="6" className="fill-card stroke-border" />
        <text x="499" y="690" textAnchor="middle" fontSize="3.4" className="fill-foreground">Binds to a constitutively active receptor,</text>
        <text x="499" y="701" textAnchor="middle" fontSize="3.4" className="fill-foreground">thereby reducing its activity; has the opposite</text>
        <text x="499" y="712" textAnchor="middle" fontSize="3.4" className="fill-foreground">effect of an agonist</text>
        <rect x="648" y="668" width="398" height="76" rx="6" className="fill-card stroke-border" />
        <text x="662" y="710" fontSize="3.6" fontWeight="700" className="fill-foreground">H1 antihistamines (eg, diphenhydramine)</text>
      </g>

      {/* ===== THE THERAPEUTIC-INDEX CURVES ===== */}
      <g>
        <rect x="36" y="776" width="616" height="250" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="798" fontSize="6" fontWeight="800" className="fill-foreground">THE THERAPEUTIC-INDEX CURVES (book 233)</text>
        <text x="52" y="810" fontSize="3.6" className="fill-muted-foreground">quantal cumulative response — % of patients responding vs Log (drug concentration)</text>
        {/* axes */}
        <line x1="116" y1="826" x2="116" y2="984" className="stroke-border" strokeWidth="1.6" />
        <line x1="116" y1="984" x2="592" y2="984" className="stroke-border" strokeWidth="1.6" />
        <text x="108" y="837" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">100</text>
        <text x="108" y="914" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">50</text>
        <text x="108" y="991" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">0</text>
        <text x="98" y="909" fontSize="4.2" fontWeight="700" className="fill-foreground" transform="rotate(-90 98 909)">% of patients responding</text>
        <text x="120" y="1020" fontSize="4.2" fontWeight="700" className="fill-foreground">Log (drug concentration)</text>
        <text x="592" y="1020" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">ED = Effective dose · TD = Toxic dose</text>
        {/* 50% line + ED50/TD50 markers */}
        <line x1="116" y1="907" x2="566" y2="907" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="0.9" />
        <path d={quantal(0.28)} fill="none" className="stroke-brand" strokeWidth="2.4" />
        <path d={quantal(0.7)} fill="none" className="stroke-emergency" strokeWidth="2.4" />
        <line x1="256.4" y1="907" x2="256.4" y2="994" strokeDasharray="4 3" className="stroke-brand" strokeWidth="1" />
        <line x1="437" y1="907" x2="437" y2="994" strokeDasharray="4 3" className="stroke-emergency" strokeWidth="1" />
        <text x="256.4" y="1006" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">ED50</text>
        <text x="437" y="1006" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-emergency">TD50</text>
        {/* the safety-gap bracket */}
        <line x1="256.4" y1="928" x2="437" y2="928" className="stroke-foreground" strokeWidth="1.4" />
        <line x1="256.4" y1="923" x2="256.4" y2="933" className="stroke-foreground" strokeWidth="1.4" />
        <line x1="437" y1="923" x2="437" y2="933" className="stroke-foreground" strokeWidth="1.4" />
        <text x="346.7" y="946" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Therapeutic index</text>
        <text x="346.7" y="958" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">TI = TD50 / ED50 — the gap between the 50% crossings</text>
        {/* curve labels */}
        <text x="350" y="858" fontSize="4.2" fontWeight="800" className="fill-brand">Efficacy</text>
        <text x="492" y="880" fontSize="4.2" fontWeight="800" className="fill-emergency">Toxicity</text>
      </g>

      {/* ===== THE INVERSE-AGONIST CARD ===== */}
      <g>
        <rect x="664" y="776" width="402" height="250" rx="12" className="fill-card stroke-border" />
        <text x="680" y="798" fontSize="5.6" fontWeight="800" className="fill-foreground">THE INVERSE AGONIST — efficacy Negative</text>
        <text x="680" y="810" fontSize="3.6" className="fill-muted-foreground">only a constitutively active receptor goes below zero</text>
        {/* no-drug state: constitutive activity above 0 */}
        <text x="700" y="834" fontSize="3.6" fontWeight="800" className="fill-brand">NO DRUG — the receptor signals on its own:</text>
        <text x="700" y="846" fontSize="3.4" className="fill-muted-foreground">constitutive activity keeps effect above 0</text>
        <rect x="700" y="852" width="60" height="26" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="730" y="869" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">R</text>
        <line x1="768" y1="865" x2="900" y2="865" className="stroke-brand" strokeWidth="2" />
        <polygon points="900,861.5 908,865 900,868.5" className="fill-brand" />
        {/* zero baseline + negative zone */}
        <line x1="700" y1="892" x2="1030" y2="892" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <text x="694" y="896" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">0</text>
        <rect x="700" y="892" width="330" height="58" className="fill-emergency-soft/30" />
        <text x="700" y="912" fontSize="3.6" fontWeight="800" className="fill-emergency">INVERSE AGONIST BOUND — activity falls below 0</text>
        <rect x="700" y="918" width="60" height="26" rx="8" className="fill-emergency-soft stroke-emergency" />
        <text x="730" y="935" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">R</text>
        <line x1="768" y1="931" x2="830" y2="931" className="stroke-emergency" strokeWidth="2" />
        <polygon points="830,927.5 838,931 830,934.5" className="fill-emergency" />
        <line x1="880" y1="904" x2="880" y2="930" className="stroke-emergency" strokeWidth="1.4" />
        <polygon points="876.5,930 883.5,930 880,938" className="fill-emergency" />
        <text x="894" y="926" fontSize="3.6" fontWeight="800" className="fill-emergency">Negative efficacy</text>
        {/* summary + example */}
        <text x="700" y="974" fontSize="3.6" fontWeight="800" className="fill-foreground">POTENCY Independent · EFFICACY Negative</text>
        <text x="700" y="986" fontSize="3.4" className="fill-muted-foreground">the opposite effect of an agonist</text>
        <rect x="700" y="996" width="320" height="22" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="712" y="1011" fontSize="3.6" fontWeight="800" className="fill-foreground">EXAMPLE — H1 antihistamines (eg, diphenhydramine)</text>
      </g>

      {/* ===== THE TITE BANNER (source's own mnemonic, verbatim) ===== */}
      <g>
        <rect x="36" y="1038" width="1030" height="26" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="52" y="1055" fontSize="5" fontWeight="800" className="fill-foreground">The source&apos;s own mnemonic, carried verbatim: &quot;TITE: Therapeutic Index = TD50 / ED50.&quot;</text>
        <text x="1046" y="1055" textAnchor="end" fontSize="4.2" fontWeight="800" className="fill-brand">toxic dose on top</text>
      </g>

      {/* ===== WINDOW STRIP + LOW-TI CHIPS ===== */}
      <g>
        <rect x="36" y="1074" width="486" height="64" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1092" fontSize="4.4" fontWeight="800" className="fill-foreground">THERAPEUTIC WINDOW — range of drug concentrations</text>
        <text x="52" y="1104" fontSize="4.4" fontWeight="800" className="fill-foreground">that can safely and effectively treat disease.</text>
        <text x="52" y="1118" fontSize="3.4" className="fill-muted-foreground">safer drugs have ↑ TI — a wider gap between ED50 and TD50</text>
        <text x="52" y="1130" fontSize="3.4" className="fill-muted-foreground">LD50 (lethal median dose) often replaces TD50 in animal studies</text>
        <rect x="534" y="1074" width="532" height="64" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="550" y="1092" fontSize="4.4" fontWeight="800" className="fill-foreground">DRUGS WITH ↓ TI — require frequent monitoring:</text>
        <rect x="550" y="1100" width="88" height="20" rx="10" className="fill-card stroke-border" />
        <text x="594" y="1113.5" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">warfarin</text>
        <rect x="642" y="1100" width="96" height="20" rx="10" className="fill-card stroke-border" />
        <text x="690" y="1113.5" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">theophylline</text>
        <rect x="742" y="1100" width="68" height="20" rx="10" className="fill-card stroke-border" />
        <text x="776" y="1113.5" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">digoxin</text>
        <rect x="814" y="1100" width="134" height="20" rx="10" className="fill-card stroke-border" />
        <text x="881" y="1113.5" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">antiepileptic drugs</text>
        <rect x="952" y="1100" width="66" height="20" rx="10" className="fill-card stroke-border" />
        <text x="985" y="1113.5" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">lithium</text>
        <text x="550" y="1134" fontSize="3.8" fontWeight="800" className="fill-emergency">Warning! These drugs are lethal! — the source&apos;s own line, carried verbatim</text>
      </g>

      {/* footer */}
      <g>
        <rect x="36" y="1150" width="1030" height="48" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1166" fontSize="4.6" fontWeight="800" className="fill-foreground">Source — First Aid for the USMLE Step 1 2026, Part 1 pdf 255 / book 233 (Pharmacology — Pharmacokinetics and Pharmacodynamics)</text>
        <text x="52" y="1179" fontSize="4.2" className="fill-muted-foreground">Census (pdfimages + PDF vector layer): ZERO rasters — three VECTOR panels (pink competitive, orange noncompetitive, green partial</text>
        <text x="52" y="1191" fontSize="4.2" className="fill-muted-foreground">curves, white-on-teal A/B/C chips, red potency/efficacy arrows) + the text table + the vector TI figure; all curves here are ORIGINAL KYP redraws.</text>
      </g>
    </svg>
  );
}
