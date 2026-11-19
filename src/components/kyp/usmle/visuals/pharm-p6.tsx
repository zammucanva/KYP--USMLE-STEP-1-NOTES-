/* Pharmacology — PH-batch 6: Efficacy vs potency (book 232).
 * Original KYP redraw: the source page (pdfimages census: ZERO rasters)
 * prints pure text plus TWO VECTOR dose-response figures — RELATIVE
 * EFFICACY (% Maximal effect 0–100 vs Log (drug dose): Drug A plateauing
 * at Emax 100, Drug B at Emax 50, the Δ Efficacy bracket between the
 * plateaus) and RELATIVE POTENCY (Drug A left-shifted vs Drug B at the
 * SAME maximal effect, two EC50 markers, the Δ Potency bracket, the
 * "EC = Effective concentration" note). Everything here is redrawn on
 * original KYP axes with original KYP geometry (sigmoid paths computed
 * from the logistic equation, EC50 markers placed at each curve's
 * half-maximal crossing); no source artwork is reproduced. The 2x2
 * independence grid is a KYP teaching synthesis, flagged as such.
 * Purely presentational: no props, no hooks, no external images. */

export function DoseResponseMap() {
  const w = 1102;
  const h = 932;

  /* ---- shared sigmoid geometry (logistic on the fraction axis) ---- */
  // x = x0..x1 across the dose range; y = yBase - emaxPx * p(fraction)
  const sigPath = (
    x0: number,
    x1: number,
    yBase: number,
    emaxPx: number,
    fc: number,
    k: number,
  ) => {
    let d = "";
    for (let i = 0; i <= 48; i++) {
      const f = i / 48;
      const x = x0 + f * (x1 - x0);
      const p = 1 / (1 + Math.exp(-k * (f - fc)));
      const y = yBase - emaxPx * p;
      d += `${i === 0 ? "M" : " L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  };
  // Panel 1: axis x=130..520 (dose), y=352 (0%) with 100% at y=132, 50% at y=242.
  // Same position (EC50) for both curves; Drug A plateaus at 100, Drug B at 50.
  // Panel 2: axis x=660..1040, same y grid; both curves plateau at 100 but
  // Drug A's EC50 sits at x=775 and Drug B's at x=935.

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Efficacy vs potency — the two dose-response figures redrawn (the Emax ceiling read and the EC50 shift read), the 2x2 independence grid, and the four exam-reading rules — an original KYP redraw of book 232." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Efficacy vs potency — the ceiling (Emax, the Y-axis) and the address (EC50, the X-axis) (original KYP redraw)</text>
        <rect x="852" y="24" width="208" height="18" className="fill-brand-soft" />
        <text x="956" y="37" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">two figures · one grid · four rules</text>
      </g>

      {/* ===== PANEL 1 — RELATIVE EFFICACY (the Y-axis read) ===== */}
      <g>
        <rect x="36" y="72" width="509" height="392" rx="12" className="fill-card stroke-border" />
        <text x="52" y="94" fontSize="6" fontWeight="800" className="fill-foreground">PANEL 1 · RELATIVE EFFICACY — the Y-axis read (the ceiling)</text>
        <text x="52" y="106" fontSize="3.8" className="fill-muted-foreground">redrawn on original KYP axes — % Maximal effect 0–100 vs Log (drug dose), same position, different plateaus (book 232)</text>
        {/* axes */}
        <line x1="130" y1="118" x2="130" y2="352" className="stroke-border" strokeWidth="1.6" />
        <line x1="130" y1="352" x2="520" y2="352" className="stroke-border" strokeWidth="1.6" />
        <text x="108" y="235" fontSize="4.6" fontWeight="700" className="fill-foreground" transform="rotate(-90 108 235)">% Maximal effect</text>
        <text x="440" y="384" textAnchor="middle" fontSize="4.6" fontWeight="700" className="fill-foreground">Log (drug dose)</text>
        <text x="122" y="136" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">100</text>
        <text x="122" y="246" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">50</text>
        <text x="130" y="364" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">0</text>
        {/* plateau dashed lines */}
        <line x1="130" y1="132" x2="470" y2="132" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <line x1="130" y1="242" x2="470" y2="242" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <text x="250" y="126" fontSize="4" fontWeight="800" className="fill-brand">Emax Drug A</text>
        <text x="250" y="236" fontSize="4" fontWeight="800" className="fill-emergency">Emax Drug B</text>
        {/* the two curves — same EC50 (x=325), different Emax */}
        <path d={sigPath(130, 520, 352, 220, 0.5, 16)} fill="none" className="stroke-brand" strokeWidth="2.2" />
        <path d={sigPath(130, 520, 352, 110, 0.5, 16)} fill="none" className="stroke-emergency" strokeWidth="2.2" />
        {/* the Δ Efficacy bracket (vertical, between the plateaus) */}
        <path d="M 490 132 H 502 M 496 132 V 242 M 490 242 H 502" fill="none" className="stroke-foreground" strokeWidth="1.4" />
        <text x="486" y="191" textAnchor="end" fontSize="4" fontWeight="800" className="fill-foreground">Δ Efficacy</text>
        {/* legend */}
        <g>
          <rect x="52" y="378" width="9" height="9" className="fill-brand" />
          <text x="66" y="386" fontSize="3.8" fontWeight="700" className="fill-foreground">Drug A — full agonist (plateau 100)</text>
          <rect x="252" y="378" width="9" height="9" className="fill-emergency" />
          <text x="266" y="386" fontSize="3.8" fontWeight="700" className="fill-foreground">Drug B — lower plateau (50)</text>
        </g>
        {/* partial-agonist note chip */}
        <rect x="52" y="396" width="492" height="24" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="60" y="412" fontSize="3.6" fontWeight="700" className="fill-foreground">Drug B&apos;s plateau is the PARTIAL-AGONIST read — partial agonists have less efficacy than full agonists, at any EC50</text>
        {/* the Y-axis rule chip */}
        <rect x="52" y="426" width="492" height="24" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="60" y="442" fontSize="3.6" fontWeight="800" className="fill-foreground">THE RULE — ↑ y-value = ↑ Emax = ↑ efficacy; efficacy is unrelated to potency (efficacious drugs can have high or low potency)</text>
      </g>

      {/* ===== PANEL 2 — RELATIVE POTENCY (the X-axis read) ===== */}
      <g>
        <rect x="563" y="72" width="503" height="392" rx="12" className="fill-card stroke-border" />
        <text x="579" y="94" fontSize="6" fontWeight="800" className="fill-foreground">PANEL 2 · RELATIVE POTENCY — the X-axis read (the shift)</text>
        <text x="579" y="106" fontSize="3.8" className="fill-muted-foreground">redrawn on original KYP axes — same maximal effect, different EC50 (book 232)</text>
        {/* axes */}
        <line x1="660" y1="118" x2="660" y2="352" className="stroke-border" strokeWidth="1.6" />
        <line x1="660" y1="352" x2="1040" y2="352" className="stroke-border" strokeWidth="1.6" />
        <text x="638" y="235" fontSize="4.6" fontWeight="700" className="fill-foreground" transform="rotate(-90 638 235)">% Maximal effect</text>
        <text x="1010" y="384" textAnchor="middle" fontSize="4.6" fontWeight="700" className="fill-foreground">Log (drug dose)</text>
        <text x="652" y="136" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">100</text>
        <text x="652" y="246" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">50</text>
        <text x="660" y="364" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">0</text>
        {/* the two curves — same Emax (100), Drug A left-shifted */}
        <path d={sigPath(660, 1040, 352, 220, 0.3032, 16)} fill="none" className="stroke-brand" strokeWidth="2.2" />
        <path d={sigPath(660, 1040, 352, 220, 0.7237, 16)} fill="none" className="stroke-warning" strokeWidth="2.2" />
        {/* EC50 markers — dashed verticals to the axis + labels */}
        <line x1="775" y1="242" x2="775" y2="352" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <line x1="935" y1="242" x2="935" y2="352" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <circle cx="775" cy="242" r="3.4" className="fill-card stroke-brand" strokeWidth="1.4" />
        <circle cx="935" cy="242" r="3.4" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="775" y="366" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">EC50</text>
        <text x="935" y="366" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-warning">EC50</text>
        {/* the Δ Potency bracket (horizontal, between the EC50 markers) */}
        <path d="M 775 348 V 340 H 935 V 348" fill="none" className="stroke-foreground" strokeWidth="1.4" />
        <text x="855" y="334" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Δ Potency</text>
        {/* the left-shift arrow (in the gap between the two curves) */}
        <line x1="950" y1="222" x2="816" y2="222" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 812 222 l 12 -5 v 10 z" className="fill-foreground" />
        <text x="880" y="214" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">left shift</text>
        {/* legend */}
        <g>
          <rect x="579" y="378" width="9" height="9" className="fill-brand" />
          <text x="593" y="386" fontSize="3.8" fontWeight="700" className="fill-foreground">Drug A — left-shifted (more potent)</text>
          <rect x="789" y="378" width="9" height="9" className="fill-warning" />
          <text x="803" y="386" fontSize="3.8" fontWeight="700" className="fill-foreground">Drug B — right-shifted (less potent)</text>
        </g>
        {/* the X-axis rule chip */}
        <rect x="579" y="396" width="472" height="24" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="587" y="412" fontSize="3.6" fontWeight="800" className="fill-foreground">THE RULE — left shifting = ↓ EC50 = ↑ potency = ↓ drug needed; both curves reach the SAME maximal effect</text>
        {/* the EC note chip */}
        <rect x="579" y="426" width="472" height="24" rx="8" className="fill-secondary/40 stroke-border" />
        <text x="587" y="442" fontSize="3.6" fontWeight="700" className="fill-foreground">EC = Effective concentration — EC50 marks the dose position giving half of the maximal effect</text>
      </g>

      {/* ===== PANEL 3 — THE INDEPENDENCE GRID (2x2, KYP teaching content) ===== */}
      <g>
        <rect x="36" y="476" width="1030" height="214" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="498" fontSize="6" fontWeight="800" className="fill-foreground">PANEL 3 · THE INDEPENDENCE GRID — high/low potency × high/low efficacy</text>
        <text x="52" y="510" fontSize="3.8" className="fill-muted-foreground">the two axes are orthogonal: efficacious drugs can have high or low potency, and potent drugs can have high or low efficacy — every cell is a real drug behavior</text>
        <rect x="812" y="488" width="240" height="18" rx="6" className="fill-card stroke-brand" />
        <text x="932" y="500" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-brand">KYP TEACHING CONTENT — not a book figure</text>
        {/* column headers */}
        <rect x="356" y="520" width="344" height="24" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="528" y="536" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">HIGH POTENCY — left-shifted, ↓ EC50</text>
        <rect x="710" y="520" width="344" height="24" rx="8" className="fill-warning-soft stroke-warning" />
        <text x="882" y="536" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">LOW POTENCY — right-shifted, ↑ EC50</text>
        {/* row labels */}
        <rect x="52" y="550" width="292" height="60" rx="8" className="fill-brand-soft/40 stroke-border" />
        <text x="68" y="576" fontSize="4.2" fontWeight="800" className="fill-foreground">HIGH EFFICACY</text>
        <text x="68" y="590" fontSize="3.4" className="fill-muted-foreground">high Emax — a tall ceiling</text>
        <rect x="52" y="616" width="292" height="60" rx="8" className="fill-emergency-soft/40 stroke-border" />
        <text x="68" y="642" fontSize="4.2" fontWeight="800" className="fill-foreground">LOW EFFICACY</text>
        <text x="68" y="656" fontSize="3.4" className="fill-muted-foreground">low Emax — a low plateau (partial-agonist territory)</text>
        {/* cell 1 — high potency x high efficacy */}
        <rect x="356" y="550" width="344" height="60" rx="8" className="fill-card stroke-border" />
        <path d={sigPath(368, 428, 596, 34, 0.3, 10)} fill="none" className="stroke-brand" strokeWidth="2" />
        <line x1="368" y1="562" x2="428" y2="562" strokeDasharray="3 2" className="stroke-muted-foreground" strokeWidth="0.8" />
        <text x="444" y="574" fontSize="3.6" fontWeight="700" className="fill-foreground">tall ceiling from a LEFT-shifted curve</text>
        <text x="444" y="588" fontSize="3.4" className="fill-muted-foreground">full agonist — maximal effect, minimal drug</text>
        {/* cell 2 — low potency x high efficacy */}
        <rect x="710" y="550" width="344" height="60" rx="8" className="fill-card stroke-border" />
        <path d={sigPath(722, 782, 596, 34, 0.72, 10)} fill="none" className="stroke-warning" strokeWidth="2" />
        <line x1="722" y1="562" x2="782" y2="562" strokeDasharray="3 2" className="stroke-muted-foreground" strokeWidth="0.8" />
        <text x="798" y="574" fontSize="3.6" fontWeight="700" className="fill-foreground">the SAME tall ceiling, RIGHT-shifted</text>
        <text x="798" y="588" fontSize="3.4" className="fill-muted-foreground">equally efficacious — but needs more drug</text>
        {/* cell 3 — high potency x low efficacy */}
        <rect x="356" y="616" width="344" height="60" rx="8" className="fill-card stroke-border" />
        <path d={sigPath(368, 428, 662, 34, 0.3, 10)} fill="none" className="stroke-brand" strokeWidth="2" />
        <line x1="368" y1="640" x2="428" y2="640" strokeDasharray="3 2" className="stroke-muted-foreground" strokeWidth="0.8" />
        <text x="444" y="640" fontSize="3.6" fontWeight="700" className="fill-foreground">LEFT-shifted curve, LOW plateau</text>
        <text x="444" y="654" fontSize="3.4" className="fill-muted-foreground">a potent PARTIAL AGONIST — cheap, but not tall</text>
        {/* cell 4 — low potency x low efficacy */}
        <rect x="710" y="616" width="344" height="60" rx="8" className="fill-card stroke-border" />
        <path d={sigPath(722, 782, 662, 34, 0.72, 10)} fill="none" className="stroke-emergency" strokeWidth="2" />
        <line x1="722" y1="640" x2="782" y2="640" strokeDasharray="3 2" className="stroke-muted-foreground" strokeWidth="0.8" />
        <text x="798" y="640" fontSize="3.6" fontWeight="700" className="fill-foreground">RIGHT-shifted curve, LOW plateau</text>
        <text x="798" y="654" fontSize="3.4" className="fill-muted-foreground">low efficacy AND low potency — the weak cell</text>
      </g>

      {/* ===== PANEL 4 — THE EXAM-READING RULES ===== */}
      <g>
        <rect x="36" y="702" width="1030" height="154" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="724" fontSize="6" fontWeight="800" className="fill-foreground">PANEL 4 · THE EXAM-READING RULES — ceilings first, then positions, never across</text>
        {/* rule 1 */}
        <rect x="52" y="734" width="244" height="86" rx="10" className="fill-card stroke-border" />
        <circle cx="70" cy="752" r="10" className="fill-brand-soft stroke-brand" />
        <text x="70" y="755.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">1</text>
        <text x="88" y="756" fontSize="4.2" fontWeight="700" className="fill-foreground">Read the Y-axis for EFFICACY</text>
        <text x="68" y="774" fontSize="3.4" className="fill-muted-foreground">The plateau (Emax) is the ceiling: ↑ y-value =</text>
        <text x="68" y="786" fontSize="3.4" className="fill-muted-foreground">↑ Emax = ↑ efficacy — a higher plateau wins</text>
        <text x="68" y="798" fontSize="3.4" className="fill-muted-foreground">the efficacy question.</text>
        {/* rule 2 */}
        <rect x="308" y="734" width="244" height="86" rx="10" className="fill-card stroke-border" />
        <circle cx="326" cy="752" r="10" className="fill-brand-soft stroke-brand" />
        <text x="326" y="755.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">2</text>
        <text x="344" y="756" fontSize="4.2" fontWeight="700" className="fill-foreground">Read the X-axis for POTENCY</text>
        <text x="324" y="774" fontSize="3.4" className="fill-muted-foreground">The position (EC50) is the price: left shifting =</text>
        <text x="324" y="786" fontSize="3.4" className="fill-muted-foreground">↓ EC50 = ↑ potency = ↓ drug needed — the leftmost</text>
        <text x="324" y="798" fontSize="3.4" className="fill-muted-foreground">curve is the potent one (EC = Effective concentration).</text>
        {/* rule 3 */}
        <rect x="564" y="734" width="244" height="86" rx="10" className="fill-card stroke-border" />
        <circle cx="582" cy="752" r="10" className="fill-emergency-soft stroke-emergency" />
        <text x="582" y="755.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">3</text>
        <text x="600" y="756" fontSize="4.2" fontWeight="700" className="fill-foreground">Never cross the axes</text>
        <text x="580" y="774" fontSize="3.4" className="fill-muted-foreground">Efficacy is unrelated to potency: efficacious drugs</text>
        <text x="580" y="786" fontSize="3.4" className="fill-muted-foreground">can have high or low potency, and potent drugs can</text>
        <text x="580" y="798" fontSize="3.4" className="fill-muted-foreground">have high or low efficacy — no axis answers the other.</text>
        {/* rule 4 */}
        <rect x="820" y="734" width="246" height="86" rx="10" className="fill-card stroke-border" />
        <circle cx="838" cy="752" r="10" className="fill-emergency-soft stroke-emergency" />
        <text x="838" y="755.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">4</text>
        <text x="856" y="756" fontSize="4.2" fontWeight="700" className="fill-foreground">Partial agonists plateau lower</text>
        <text x="836" y="774" fontSize="3.4" className="fill-muted-foreground">Less efficacy than full agonists — a low ceiling is</text>
        <text x="836" y="786" fontSize="3.4" className="fill-muted-foreground">an Emax fact at ANY EC50; no dose increase ever</text>
        <text x="836" y="798" fontSize="3.4" className="fill-muted-foreground">raises a partial agonist&apos;s plateau.</text>
        {/* protocol strip */}
        <rect x="52" y="828" width="1014" height="18" rx="6" className="fill-card stroke-border" />
        <text x="64" y="840.5" fontSize="3.4" fontWeight="700" className="fill-foreground">PROTOCOL — ceilings first (the Δ Efficacy bracket is a VERTICAL read between plateaus), then positions (the Δ Potency bracket is a HORIZONTAL read between EC50 markers), then name the partial agonist, then refuse to cross the axes.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="868" width="1054" height="46" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="884" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 254 / book 232 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Efficacy vs potency)</text>
        <text x="42" y="896" fontSize="5" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the two dose-response figures (RELATIVE EFFICACY, RELATIVE POTENCY) print as VECTOR line art; the VLM confirm attempt (ph6-vlm-census.ts) failed 401 on both</text>
        <text x="42" y="907" fontSize="5" className="fill-muted-foreground">retries (environment credentials), so the census stands on the raster count + the text layer. The curves, brackets, markers, and grid are an ORIGINAL KYP redraw — nothing is reproduced; the definitions are carried verbatim in the note.</text>
      </g>
    </svg>
  );
}
