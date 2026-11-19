/* Pharmacology — PH-batch 1: Enzyme kinetics (book 228).
 * Original KYP redraw: the source page prints FOUR VECTOR curve panels
 * (pdfimages: zero rasters) — the single Michaelis-Menten hyperbola with
 * its "Km = [S] at 1/2 Vmax" annotation, the single Lineweaver-Burk
 * line (slope = Km/Vmax), and the two "Effects of enzyme inhibition"
 * overlays (one on Michaelis-Menten axes, one on Lineweaver-Burk axes)
 * — plus the pure-text 6-row inhibition table. Everything here is
 * redrawn on original KYP axes with original KYP geometry (curve paths
 * computed from the Michaelis-Menten equation, intercept markers placed
 * by the double-reciprocal transforms); no source artwork is
 * reproduced. The table is re-set as KYP table art with the row order
 * as printed (Resemble substrate first). Purely presentational: no
 * props, no hooks, no external images. */

export function EnzymeKineticsMap() {
  const w = 1102;
  const h = 1150;

  /* ---- Panel 1 geometry: V vs [S], Michaelis-Menten ---- */
  // plot: x-axis y=352 from x=110; y-axis x=110 from y=118
  // s in [0, 5.5] -> x = 110 + 74.5 s ; v in [0, 1.25] -> y = 352 - 186 v
  const mmPath = (vmax: number, km: number) => {
    let d = "";
    for (let i = 0; i <= 48; i++) {
      const s = (i / 48) * 5.5;
      const v = (vmax * s) / (km + s);
      const x = 110 + s * 74.5;
      const y = 352 - v * 186;
      d += `${i === 0 ? "M" : " L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  };

  /* ---- Panel 2 geometry: 1/V vs 1/[S], double reciprocal ---- */
  // y-axis x=700 (u=0), x-axis y=352 (v=0)
  // u in [-2.4, 2.9] -> x = 700 + 88 u ; v in [0, 3.2] -> y = 352 - 78 v
  const lbLine = (km: number, vmax: number) => {
    // 1/V = (Km/Vmax)·(1/[S]) + 1/Vmax  — drawn from the X-intercept
    // (u = −1/Km, v = 0) to the v = 3 top clip
    const f = (u: number) => (km / vmax) * u + 1 / vmax;
    const uA = -1 / km; // v = 0 (X-intercept = −1/Km)
    const uB = (3 * vmax - 1) / km; // v = 3 (top clip)
    const ax = 700 + 88 * uA;
    const bx = 700 + 88 * uB;
    const by = 352 - 78 * f(uB);
    return `M ${ax.toFixed(1)} 352 L ${bx.toFixed(1)} ${by.toFixed(1)}`;
  };
  // three conditions (normalized): Uninhibited Km=1 Vmax=1;
  // Competitive reversible Km=2.5 Vmax=1 (same Y-intercept);
  // Noncompetitive Km=1 Vmax=0.5 (same X-intercept).

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Enzyme kinetics — the Michaelis-Menten hyperbola and the Lineweaver-Burk double-reciprocal plot redrawn with the three-inhibitor overlays, the four reading rules, and the verbatim six-row inhibition table — an original KYP redraw of book 228." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Enzyme kinetics — the two plots, the reading rules, and the inhibition table (original KYP redraw)</text>
        <rect x="852" y="24" width="208" height="18" className="fill-brand-soft" />
        <text x="956" y="37" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">four panels · one page</text>
      </g>

      {/* ===== PANEL 1 — MICHAELIS-MENTEN ===== */}
      <g>
        <rect x="36" y="72" width="509" height="344" rx="12" className="fill-card stroke-border" />
        <text x="52" y="94" fontSize="6" fontWeight="800" className="fill-foreground">PANEL 1 · MICHAELIS-MENTEN — Velocity (V) vs [S]</text>
        <text x="52" y="106" fontSize="3.8" className="fill-muted-foreground">the hyperbola redrawn on original KYP axes, with the three-inhibitor overlay (book 228)</text>
        {/* axes */}
        <line x1="110" y1="118" x2="110" y2="352" className="stroke-border" strokeWidth="1.6" />
        <line x1="100" y1="352" x2="528" y2="352" className="stroke-border" strokeWidth="1.6" />
        <text x="92" y="240" fontSize="4.6" fontWeight="700" className="fill-foreground" transform="rotate(-90 92 240)">Velocity (V)</text>
        <text x="528" y="368" textAnchor="end" fontSize="4.6" fontWeight="700" className="fill-foreground">[S]</text>
        <text x="110" y="364" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">0</text>
        {/* Vmax dashed plateau */}
        <line x1="110" y1="166" x2="500" y2="166" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <text x="504" y="168" fontSize="4" fontWeight="700" className="fill-muted-foreground">Vmax</text>
        <text x="442" y="156" fontSize="3.6" className="fill-muted-foreground">Saturation</text>
        {/* 1/2 Vmax dashed line meeting the curve at Km */}
        <line x1="110" y1="259" x2="184.5" y2="259" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <text x="114" y="255" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">1/2 Vmax</text>
        <line x1="184.5" y1="259" x2="184.5" y2="352" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <circle cx="184.5" cy="259" r="3.4" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="184.5" y="368" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">Km</text>
        {/* the three curves */}
        <path d={mmPath(0.62, 1)} fill="none" className="stroke-emergency" strokeWidth="2.2" />
        <path d={mmPath(1, 2.5)} fill="none" className="stroke-warning" strokeWidth="2.2" />
        <path d={mmPath(1, 1)} fill="none" className="stroke-brand" strokeWidth="2.2" />
        {/* curve annotations */}
        <text x="238" y="130" fontSize="3.8" fontWeight="700" className="fill-foreground">Km = [S] at 1/2 Vmax — the dashed line meets the curve at Km</text>
        <text x="238" y="141" fontSize="3.6" className="fill-muted-foreground">Vmax ∝ enzyme concentration (Saturation ceiling = working head-count)</text>
        <text x="322" y="196" fontSize="3.6" fontWeight="700" className="fill-warning">Competitive (reversible): same Vmax — shifted right → Km ↑</text>
        <text x="322" y="248" fontSize="3.6" fontWeight="700" className="fill-emergency">Noncompetitive: lower plateau — Vmax ↓, same Km</text>
        {/* legend */}
        <g>
          <rect x="52" y="382" width="9" height="9" className="fill-brand" />
          <text x="66" y="390" fontSize="3.8" fontWeight="700" className="fill-foreground">Uninhibited</text>
          <rect x="152" y="382" width="9" height="9" className="fill-warning" />
          <text x="166" y="390" fontSize="3.8" fontWeight="700" className="fill-foreground">Competitive inhibitor (reversible)</text>
          <rect x="352" y="382" width="9" height="9" className="fill-emergency" />
          <text x="366" y="390" fontSize="3.8" fontWeight="700" className="fill-foreground">Noncompetitive inhibitor</text>
        </g>
      </g>

      {/* ===== PANEL 2 — LINEWEAVER-BURK ===== */}
      <g>
        <rect x="563" y="72" width="503" height="344" rx="12" className="fill-card stroke-border" />
        <text x="579" y="94" fontSize="6" fontWeight="800" className="fill-foreground">PANEL 2 · LINEWEAVER-BURK — 1/V vs 1/[S] (double reciprocal)</text>
        <text x="579" y="106" fontSize="3.8" className="fill-muted-foreground">the same three conditions as straight lines — Y-intercept 1/Vmax, X-intercept −1/Km, slope = Km/Vmax</text>
        {/* axes */}
        <line x1="700" y1="118" x2="700" y2="352" className="stroke-border" strokeWidth="1.6" />
        <line x1="600" y1="352" x2="1010" y2="352" className="stroke-border" strokeWidth="1.6" />
        <text x="686" y="240" fontSize="4.6" fontWeight="700" className="fill-foreground" transform="rotate(-90 686 240)">1/V</text>
        <text x="1010" y="368" textAnchor="end" fontSize="4.6" fontWeight="700" className="fill-foreground">1/[S]</text>
        <text x="700" y="364" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">0</text>
        {/* the three lines */}
        <path d={lbLine(1, 0.5)} fill="none" className="stroke-emergency" strokeWidth="2.2" />
        <path d={lbLine(2.5, 1)} fill="none" className="stroke-warning" strokeWidth="2.2" />
        <path d={lbLine(1, 1)} fill="none" className="stroke-brand" strokeWidth="2.2" />
        {/* X-intercept ticks */}
        <line x1="612" y1="348" x2="612" y2="356" className="stroke-foreground" strokeWidth="1.4" />
        <line x1="664.8" y1="348" x2="664.8" y2="356" className="stroke-foreground" strokeWidth="1.4" />
        <text x="612" y="363" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">−1/Km</text>
        <text x="664.8" y="363" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-warning">−1/Km′</text>
        <text x="575" y="377" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">shared root = Km Unchanged (Noncompetitive — no crossing)</text>
        <text x="575" y="388" fontSize="3.4" fontWeight="700" className="fill-warning">−1/Km′ closer to 0 = Km ↑ (Competitive, reversible)</text>
        {/* Y-intercept markers */}
        <circle cx="700" cy="274" r="4" className="fill-card stroke-brand" strokeWidth="1.6" />
        <text x="708" y="288" fontSize="3.6" fontWeight="800" className="fill-brand">CROSS on the Y-axis — shared 1/Vmax (Vmax unchanged)</text>
        <circle cx="700" cy="196" r="3.2" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="708" y="193" fontSize="3.6" fontWeight="700" className="fill-emergency">1/Vmax ↑ — Vmax ↓ (Noncompetitive)</text>
        <text x="746" y="243" fontSize="3.6" fontWeight="700" className="fill-foreground">slope = Km/Vmax</text>
      </g>

      {/* ===== PANEL 3 — THE FOUR READING RULES ===== */}
      <g>
        <rect x="36" y="428" width="1030" height="156" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="450" fontSize="6" fontWeight="800" className="fill-foreground">PANEL 3 · THE FOUR READING RULES — book 228, verbatim</text>
        <rect x="52" y="458" width="244" height="82" rx="10" className="fill-card stroke-border" />
        <circle cx="70" cy="476" r="10" className="fill-brand-soft stroke-brand" />
        <text x="70" y="479.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">1</text>
        <text x="88" y="480" fontSize="4.2" fontWeight="700" className="fill-foreground">The closer to 0 on the Y-axis,</text>
        <text x="68" y="496" fontSize="4.2" fontWeight="700" className="fill-foreground">the higher the Vmax.</text>
        <text x="68" y="526" fontSize="3.4" className="fill-muted-foreground">Y-intercept = 1/Vmax — Vmax ∝ [enzyme]</text>
        <rect x="308" y="458" width="244" height="82" rx="10" className="fill-card stroke-border" />
        <circle cx="326" cy="476" r="10" className="fill-brand-soft stroke-brand" />
        <text x="326" y="479.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">2</text>
        <text x="344" y="480" fontSize="4.2" fontWeight="700" className="fill-foreground">The closer to 0 on the X-axis,</text>
        <text x="324" y="496" fontSize="4.2" fontWeight="700" className="fill-foreground">the higher the Km.</text>
        <text x="324" y="526" fontSize="3.4" className="fill-muted-foreground">X-intercept = −1/Km — sliding toward 0 = Km ↑</text>
        <rect x="564" y="458" width="244" height="82" rx="10" className="fill-card stroke-border" />
        <circle cx="582" cy="476" r="10" className="fill-brand-soft stroke-brand" />
        <text x="582" y="479.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">3</text>
        <text x="600" y="480" fontSize="4.2" fontWeight="700" className="fill-foreground">The higher the Km, the lower</text>
        <text x="580" y="496" fontSize="4.2" fontWeight="700" className="fill-foreground">the affinity.</text>
        <text x="580" y="526" fontSize="3.4" className="fill-muted-foreground">Km = [S] at 1/2 Vmax — inverse relation</text>
        <rect x="820" y="458" width="246" height="82" rx="10" className="fill-card stroke-border" />
        <circle cx="838" cy="476" r="10" className="fill-emergency-soft stroke-emergency" />
        <text x="838" y="479.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">4</text>
        <text x="856" y="480" fontSize="4.2" fontWeight="700" className="fill-foreground">Reversible competitive inhibitors</text>
        <text x="836" y="496" fontSize="4.2" fontWeight="700" className="fill-foreground">cross each other, whereas</text>
        <text x="836" y="510" fontSize="4.2" fontWeight="700" className="fill-foreground">noncompetitive inhibitors do not.</text>
        <text x="836" y="530" fontSize="3.4" className="fill-muted-foreground">the crossing rule</text>
        <rect x="52" y="546" width="1014" height="30" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="64" y="565" fontSize="3.8" fontWeight="700" className="fill-foreground">The source&apos;s own red typo, carried verbatim: &quot;Kompetitive inhibitors increase K m.&quot; — the K is the book&apos;s (book 228, left column, beneath rule 4); the fact underneath is the REVERSIBLE class&apos;s Km ↑ with Vmax unchanged.</text>
      </g>

      {/* ===== PANEL 4 — THE INHIBITION TABLE ===== */}
      <g>
        <rect x="36" y="596" width="1030" height="484" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="618" fontSize="6" fontWeight="800" className="fill-foreground">PANEL 4 · THE INHIBITION TABLE — verbatim, printed row order (Resemble substrate prints first)</text>
        {/* header row */}
        <rect x="52" y="626" width="284" height="42" rx="8" className="fill-card stroke-border" />
        <text x="66" y="652" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">ROW (as printed)</text>
        <rect x="340" y="626" width="236" height="42" rx="8" className="fill-card stroke-brand" />
        <text x="458" y="642" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">Competitive inhibitors, reversible</text>
        <text x="458" y="656" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the Km mover — crosses on the Y-axis</text>
        <rect x="580" y="626" width="236" height="42" rx="8" className="fill-card stroke-border" />
        <text x="698" y="642" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">Competitive inhibitors, irreversible</text>
        <text x="698" y="656" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">Vmax mover — Active site, permanent</text>
        <rect x="820" y="626" width="226" height="42" rx="8" className="fill-card stroke-border" />
        <text x="933" y="642" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">Noncompetitive inhibitors</text>
        <text x="933" y="656" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">Vmax mover — Allosteric site</text>
        {/* row 1 — Resemble substrate */}
        <rect x="52" y="672" width="284" height="62" rx="8" className="fill-card stroke-border" />
        <text x="66" y="708" fontSize="5" fontWeight="800" className="fill-foreground">Resemble substrate</text>
        <rect x="340" y="672" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="458" y="709" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">Yes</text>
        <rect x="580" y="672" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="698" y="709" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">Yes</text>
        <rect x="820" y="672" width="226" height="62" rx="8" className="fill-card stroke-border" />
        <text x="933" y="709" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">No</text>
        {/* row 2 — Overcome by ↑ [S] */}
        <rect x="52" y="738" width="284" height="62" rx="8" className="fill-card stroke-border" />
        <text x="66" y="774" fontSize="5" fontWeight="800" className="fill-foreground">Overcome by ↑ [S]</text>
        <rect x="340" y="738" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="458" y="775" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-brand">Yes</text>
        <rect x="580" y="738" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="698" y="775" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">No</text>
        <rect x="820" y="738" width="226" height="62" rx="8" className="fill-card stroke-border" />
        <text x="933" y="775" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">No</text>
        {/* row 3 — Bind site */}
        <rect x="52" y="804" width="284" height="62" rx="8" className="fill-card stroke-border" />
        <text x="66" y="840" fontSize="5" fontWeight="800" className="fill-foreground">Bind site</text>
        <rect x="340" y="804" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="458" y="841" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">Active</text>
        <rect x="580" y="804" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="698" y="841" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">Active</text>
        <rect x="820" y="804" width="226" height="62" rx="8" className="fill-card stroke-border" />
        <text x="933" y="841" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">Allosteric</text>
        {/* row 4 — Effect on Vmax */}
        <rect x="52" y="870" width="284" height="62" rx="8" className="fill-card stroke-border" />
        <text x="66" y="906" fontSize="5" fontWeight="800" className="fill-foreground">Effect on Vmax</text>
        <rect x="340" y="870" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="458" y="907" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-brand">Unchanged</text>
        <rect x="580" y="870" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="698" y="907" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">↓</text>
        <rect x="820" y="870" width="226" height="62" rx="8" className="fill-card stroke-border" />
        <text x="933" y="907" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">↓</text>
        {/* row 5 — Effect on Km */}
        <rect x="52" y="936" width="284" height="62" rx="8" className="fill-card stroke-border" />
        <text x="66" y="972" fontSize="5" fontWeight="800" className="fill-foreground">Effect on Km</text>
        <rect x="340" y="936" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="458" y="973" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-brand">↑</text>
        <rect x="580" y="936" width="236" height="62" rx="8" className="fill-card stroke-border" />
        <text x="698" y="973" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">Unchanged</text>
        <rect x="820" y="936" width="226" height="62" rx="8" className="fill-card stroke-border" />
        <text x="933" y="973" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">Unchanged</text>
        {/* row 6 — Pharmacodynamics (highlighted) */}
        <rect x="52" y="1002" width="284" height="66" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="66" y="1040" fontSize="5" fontWeight="800" className="fill-foreground">Pharmacodynamics</text>
        <rect x="340" y="1002" width="236" height="66" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="458" y="1036" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-warning">↓ potency</text>
        <text x="458" y="1052" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">ceiling intact — surmountable</text>
        <rect x="580" y="1002" width="236" height="66" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="698" y="1036" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-warning">↓ efficacy</text>
        <text x="698" y="1052" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">ceiling falls — not overcome</text>
        <rect x="820" y="1002" width="226" height="66" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="933" y="1036" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-warning">↓ efficacy</text>
        <text x="933" y="1052" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">ceiling falls — not overcome</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1092" width="1054" height="46" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1108" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 250 / book 228 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Enzyme kinetics)</text>
        <text x="42" y="1120" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images — four VECTOR curve panels (the Michaelis-Menten hyperbola, the Lineweaver-Burk line, and the two effects-of-inhibition overlays) whose labels interleave in the</text>
        <text x="42" y="1131" fontSize="5" className="fill-muted-foreground">text layer at the batch&apos;s densest; no margin mnemonics (VLM confirmed). The curves, axes, and intercept markers are an ORIGINAL KYP redraw — nothing is reproduced; the table is carried verbatim in the note.</text>
      </g>
    </svg>
  );
}
