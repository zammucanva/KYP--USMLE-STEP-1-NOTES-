/* Pharmacology — Pharmacokinetics and Pharmacodynamics (PH-batch 5):
 * Urine pH and drug elimination + Dosage calculations (book 231).
 * Original KYP adaptation: the source page (pdfimages + VLM census)
 * has ZERO rasters — pure text plus ONE vector figure (the
 * ionization-vs-pH curve) plus the two typeset equations and the two
 * dosage formulas. Redrawn here as a four-band map: BAND 1 the
 * tubular trapping map (blood strip above, lumen cards below, the
 * neutral forms arrowed back across the wall while the ionized forms
 * stay trapped, with the two treatment arrows — NaHCO3 alkalinizes to
 * trap acids, NH4Cl acidifies to trap bases); BAND 2 the curve
 * REDRAWN with original KYP axes (weak acid rising, weak base
 * falling, 50% crossing at pH = pKa, the pKa 9.2 example marker and
 * the more-acidic / more-basic annotations); BAND 3 the TCA exception
 * card (bicarbonate overcomes sodium-channel blockade — cardiac, not
 * elimination); BAND 4 the dosage panel (loading = Cp × Vd / F vs
 * maintenance = Cp × CL × τ / F, with the Cp/τ definitions and the
 * organ-disease and steady-state rules). All glyphs are original KYP
 * vector drawing; nothing is reproduced from the book. Purely
 * presentational: no props, no hooks, no external images. */

export function UrinePhTrappingMap() {
  const w = 1102;
  const h = 1144;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Urine pH and dosage calculations — the ion-trapping map: weak acids and weak bases with their lipid-soluble and trapped forms crossing the tubular wall, the sodium-bicarbonate and ammonium-chloride treatment arrows, the redrawn ionization-vs-pH curve with its 50% crossing at pH = pKa, the TCA sodium-channel exception card, and the loading-dose and maintenance-dose equations with the renal/liver-disease and steady-state rules — an original KYP adaptation of book 231." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Urine pH, ion trapping &amp; dosage calculations — the map (original KYP adaptation)</text>
        <rect x="846" y="24" width="214" height="18" className="fill-brand-soft" />
        <text x="953" y="37" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">one page · four bands · book 231</text>
      </g>

      {/* ===== BAND 1 · THE TRAPPING MAP ===== */}
      <g>
        <rect x="36" y="72" width="1030" height="264" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="6" fontWeight="800" className="fill-foreground">BAND 1 · THE TRAPPING MAP — ionized species are trapped in urine and cleared quickly; neutral forms can be reabsorbed</text>
        <text x="1046" y="94" textAnchor="end" fontSize="3.8" className="fill-muted-foreground">the three cards below = the TUBULAR LUMEN (urine side)</text>

        {/* blood strip (reabsorption side) */}
        <rect x="52" y="102" width="998" height="26" rx="8" className="fill-card stroke-border" />
        <text x="62" y="119" fontSize="4.6" fontWeight="800" className="fill-foreground">PERITUBULAR BLOOD — only the NEUTRAL, LIPID-SOLUBLE form crosses the tubular wall back into circulation (reabsorbed)</text>
        <text x="1038" y="119" textAnchor="end" fontSize="4.2" className="fill-muted-foreground">neutral = returns</text>

        {/* crossing arrows (neutral forms leaving the lumen) */}
        <g fill="none">
          <path d="M 150 144 L 150 132" className="stroke-emergency" strokeWidth="1.4" />
          <path d="M 150 126 L 155 133 L 145 133 Z" className="fill-emergency" />
          <path d="M 880 144 L 880 132" className="stroke-brand" strokeWidth="1.4" />
          <path d="M 880 126 L 885 133 L 875 133 Z" className="fill-brand" />
        </g>
        <text x="160" y="141" fontSize="3.6" className="fill-muted-foreground">RCOOH (neutral) is reabsorbed</text>
        <text x="890" y="141" fontSize="3.6" className="fill-muted-foreground">RNH2 (neutral) is reabsorbed</text>

        {/* WEAK ACIDS card */}
        <rect x="52" y="146" width="330" height="120" rx="10" className="fill-card stroke-emergency" />
        <circle cx="70" cy="164" r="10" className="fill-emergency-soft stroke-emergency" />
        <text x="70" y="167.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">HA</text>
        <text x="88" y="168" fontSize="5.2" fontWeight="800" className="fill-emergency">WEAK ACIDS</text>
        <text x="68" y="190" fontSize="4.6" fontWeight="700" className="fill-foreground">RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped)</text>
        <text x="68" y="206" fontSize="4.2" className="fill-foreground">the neutral acid crosses back · the ionized anion stays in the lumen</text>
        <text x="68" y="226" fontSize="4.2" fontWeight="700" className="fill-foreground">Examples: phenobarbital, methotrexate, aspirin (salicylates)</text>
        <text x="68" y="242" fontSize="4.2" className="fill-foreground">Treat overdose with sodium bicarbonate → alkalinize urine</text>
        <text x="68" y="258" fontSize="3.8" className="fill-muted-foreground">↑ urine pH = ↑ ionized RCOO– = trapped &amp; cleared quickly</text>

        {/* THE RULE + pKa card */}
        <rect x="400" y="146" width="302" height="120" rx="10" className="fill-card stroke-border" />
        <text x="416" y="168" fontSize="5.2" fontWeight="800" className="fill-foreground">THE RULE + pKa</text>
        <text x="416" y="188" fontSize="4.2" fontWeight="700" className="fill-foreground">Ionized species are trapped in urine and cleared quickly.</text>
        <text x="416" y="202" fontSize="4.2" fontWeight="700" className="fill-foreground">Neutral forms can be reabsorbed.</text>
        <text x="416" y="222" fontSize="4.2" className="fill-foreground">pKa = the pH at which drugs (weak acid or base) are 50%</text>
        <text x="416" y="234" fontSize="4.2" className="fill-foreground">ionized and 50% nonionized — the pKa represents the</text>
        <text x="416" y="246" fontSize="4.2" className="fill-foreground">strength of the weak acid or base (curves cross at 50%).</text>

        {/* WEAK BASES card */}
        <rect x="720" y="146" width="330" height="120" rx="10" className="fill-card stroke-brand" />
        <circle cx="738" cy="164" r="10" className="fill-brand-soft stroke-brand" />
        <text x="738" y="167.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">B</text>
        <text x="756" y="168" fontSize="5.2" fontWeight="800" className="fill-brand">WEAK BASES</text>
        <text x="736" y="190" fontSize="4.6" fontWeight="700" className="fill-foreground">RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble)</text>
        <text x="736" y="206" fontSize="4.2" className="fill-foreground">the ionized cation stays · the neutral base crosses back</text>
        <text x="736" y="226" fontSize="4.2" fontWeight="700" className="fill-foreground">Examples: TCAs, amphetamines — trapped in acidic environments</text>
        <text x="736" y="242" fontSize="4.2" className="fill-foreground">For severe alkalosis, ammonium chloride → acidify urine</text>
        <text x="736" y="258" fontSize="3.8" className="fill-muted-foreground">↓ urine pH = ↑ ionized RNH3+ = trapped &amp; cleared quickly</text>

        {/* treatment arrows strip */}
        <rect x="52" y="274" width="494" height="50" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="66" y="292" fontSize="4.4" fontWeight="800" className="fill-foreground">ALKALINIZE — sodium bicarbonate (NaHCO3)</text>
        <text x="66" y="306" fontSize="4.2" className="fill-foreground">for weak-ACID overdose: phenobarbital · methotrexate · aspirin (salicylates)</text>
        <text x="66" y="318" fontSize="3.8" className="fill-muted-foreground">urine pH ↑ → RCOO– fraction ↑ → ionized species trapped &amp; cleared</text>
        <rect x="564" y="274" width="486" height="50" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="578" y="292" fontSize="4.4" fontWeight="800" className="fill-foreground">ACIDIFY — ammonium chloride (NH4Cl)</text>
        <text x="578" y="306" fontSize="4.2" className="fill-foreground">for severe alkalosis with weak-BASE drugs: TCAs · amphetamines</text>
        <text x="578" y="318" fontSize="3.8" className="fill-muted-foreground">urine pH ↓ → RNH3+ fraction ↑ → ionized species trapped &amp; cleared</text>
      </g>

      {/* ===== BAND 2 · THE IONIZATION-vs-pH CURVE (redrawn) ===== */}
      <g>
        <rect x="36" y="346" width="1030" height="266" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="368" fontSize="6" fontWeight="800" className="fill-foreground">BAND 2 · THE IONIZATION-vs-pH CURVE — redrawn with original KYP axes (the book 231 vector figure)</text>

        {/* curve panel */}
        <rect x="52" y="380" width="560" height="216" rx="10" className="fill-card stroke-border" />
        <g fill="none">
          {/* axes */}
          <path d="M 112 388 L 112 548" className="stroke-foreground/70" strokeWidth="1.2" />
          <path d="M 112 548 L 596 548" className="stroke-foreground/70" strokeWidth="1.2" />
          {/* 50% dashed gridline */}
          <path d="M 112 472 L 596 472" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
          {/* weak acid curve (rises to the right) */}
          <path d="M 132 546 C 260 543, 330 475, 371 472 C 412 469, 480 400, 592 398" className="stroke-emergency" strokeWidth="1.8" />
          {/* weak base curve (falls to the right) */}
          <path d="M 132 398 C 244 400, 330 469, 371 472 C 412 475, 490 543, 592 546" className="stroke-brand" strokeWidth="1.8" />
          {/* crossing vertical at pKa 9.2 */}
          <path d="M 371 472 L 371 548" className="stroke-foreground/70" strokeWidth="0.9" strokeDasharray="3 3" />
        </g>
        <circle cx="371" cy="472" r="3" className="fill-foreground" />
        <text x="371" y="442" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">curves cross at 50% — pH = pKa</text>
        {/* y-axis label + ticks */}
        <text transform="rotate(-90 78 470)" x="78" y="470" textAnchor="middle" fontSize="4.4" fontWeight="700" className="fill-foreground">Ionized species formation (%)</text>
        <text x="104" y="399" textAnchor="end" fontSize="3.8" className="fill-muted-foreground">100</text>
        <text x="104" y="475" textAnchor="end" fontSize="3.8" className="fill-muted-foreground">50</text>
        <text x="104" y="551" textAnchor="end" fontSize="3.8" className="fill-muted-foreground">0</text>
        {/* x-axis ticks */}
        <text x="132" y="560" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">4</text>
        <text x="316" y="560" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">8</text>
        <text x="500" y="560" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">12</text>
        <text x="592" y="560" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">14</text>
        <text x="604" y="560" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">pH</text>
        {/* curve labels */}
        <text x="560" y="412" textAnchor="end" fontSize="4.6" fontWeight="800" className="fill-emergency">Weak acid</text>
        <text x="560" y="534" textAnchor="end" fontSize="4.6" fontWeight="800" className="fill-brand">Weak base</text>
        {/* pKa annotations */}
        <text x="371" y="578" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">pKa: 9.2 (the printed example)</text>
        <text x="220" y="592" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">← lower pKa = more acidic</text>
        <text x="520" y="592" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">higher pKa = more basic →</text>

        {/* reading-rules card */}
        <rect x="632" y="380" width="418" height="216" rx="10" className="fill-card stroke-border" />
        <text x="648" y="402" fontSize="5.2" fontWeight="800" className="fill-foreground">READING THE CURVE</text>
        <text x="648" y="422" fontSize="4.2" fontWeight="700" className="fill-foreground">• Weak ACID — more ionized at HIGH pH: the red curve rises as the</text>
        <text x="648" y="434" fontSize="4.2" fontWeight="700" className="fill-foreground">  urine alkalinizes (RCOOH → RCOO–, the trapped anion)</text>
        <text x="648" y="452" fontSize="4.2" fontWeight="700" className="fill-foreground">• Weak BASE — more ionized at LOW pH: the blue curve falls as pH</text>
        <text x="648" y="464" fontSize="4.2" fontWeight="700" className="fill-foreground">  rises (RNH2 → RNH3+); weak bases are trapped in acidic</text>
        <text x="648" y="476" fontSize="4.2" fontWeight="700" className="fill-foreground">  environments</text>
        <text x="648" y="494" fontSize="4.2" fontWeight="700" className="fill-foreground">• The crossing — at pH = pKa, 50% ionized / 50% nonionized; the pKa</text>
        <text x="648" y="506" fontSize="4.2" fontWeight="700" className="fill-foreground">  represents the strength of the weak acid or base</text>
        <text x="648" y="524" fontSize="4.2" fontWeight="700" className="fill-foreground">• The printed example (pKa: 9.2) — a lower pKa sits toward the more</text>
        <text x="648" y="536" fontSize="4.2" fontWeight="700" className="fill-foreground">  acidic side, a higher pKa toward the more basic side</text>
        <text x="648" y="554" fontSize="4.2" fontWeight="700" className="fill-foreground">• Each pH unit away from the pKa shifts the ionized fraction steeply</text>
        <text x="648" y="566" fontSize="4.2" fontWeight="700" className="fill-foreground">  (the Henderson-Hasselbalch tenfold steps)</text>
      </g>

      {/* ===== BAND 3 · THE TCA EXCEPTION ===== */}
      <g>
        <rect x="36" y="622" width="1030" height="110" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="644" fontSize="6" fontWeight="800" className="fill-foreground">BAND 3 · THE TCA EXCEPTION — the same syringe, a different reason</text>
        <rect x="52" y="656" width="998" height="26" rx="8" className="fill-card stroke-emergency" />
        <text x="62" y="673" fontSize="4.2" fontWeight="700" className="fill-foreground">TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs — this treats cardiac toxicity, but does not accelerate drug elimination.</text>
        <rect x="52" y="690" width="494" height="30" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="66" y="702" fontSize="4.2" fontWeight="800" className="fill-foreground">SALICYLATE (weak acid) + NaHCO3:</text>
        <text x="66" y="714" fontSize="4.2" className="fill-foreground">urine alkalinization → RCOO– trapped → elimination ↑ (the RENAL indication)</text>
        <rect x="564" y="690" width="486" height="30" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="578" y="702" fontSize="4.2" fontWeight="800" className="fill-foreground">TCA (weak base) + NaHCO3:</text>
        <text x="578" y="714" fontSize="4.2" className="fill-foreground">sodium-channel override → cardiac rescue → elimination unchanged (the CARDIAC indication)</text>
      </g>

      {/* ===== BAND 4 · DOSAGE CALCULATIONS ===== */}
      <g>
        <rect x="36" y="742" width="1030" height="330" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="764" fontSize="6" fontWeight="800" className="fill-foreground">BAND 4 · DOSAGE CALCULATIONS — load the container, then match the drain</text>

        {/* loading dose card */}
        <rect x="52" y="776" width="486" height="118" rx="10" className="fill-card stroke-brand" />
        <circle cx="70" cy="794" r="10" className="fill-brand-soft stroke-brand" />
        <text x="70" y="797.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">L</text>
        <text x="88" y="798" fontSize="5" fontWeight="800" className="fill-brand">LOADING DOSE = Cp × Vd / F</text>
        <text x="68" y="818" fontSize="4.2" fontWeight="700" className="fill-foreground">Vd-driven — the one-time fill of the volume of distribution.</text>
        <text x="68" y="832" fontSize="4.2" className="fill-foreground">Clearance does not appear in the equation: this is the dose</text>
        <text x="68" y="846" fontSize="4.2" className="fill-foreground">that reaches Cp NOW, before elimination kinetics matter.</text>
        <text x="68" y="872" fontSize="3.8" className="fill-muted-foreground">LOAD WITH Vd — fill the container once</text>

        {/* maintenance dose card */}
        <rect x="562" y="776" width="488" height="118" rx="10" className="fill-card stroke-warning" />
        <circle cx="580" cy="794" r="10" className="fill-warning-soft stroke-warning" />
        <text x="580" y="797.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">M</text>
        <text x="598" y="798" fontSize="5" fontWeight="800" className="fill-warning">MAINTENANCE DOSE = Cp × CL × τ / F</text>
        <text x="578" y="818" fontSize="4.2" fontWeight="700" className="fill-foreground">CL-driven — replace exactly what elimination removes per dose.</text>
        <text x="578" y="832" fontSize="4.2" className="fill-foreground">τ = dosage interval (time between doses); does not apply for</text>
        <text x="578" y="846" fontSize="4.2" className="fill-foreground">continuous infusions — an infusion has no interval.</text>
        <text x="578" y="872" fontSize="3.8" className="fill-muted-foreground">MAINTAIN WITH CL — match the drain</text>

        {/* definitions strip */}
        <rect x="52" y="906" width="998" height="26" rx="8" className="fill-card stroke-border" />
        <text x="62" y="923" fontSize="4.2" className="fill-foreground">Cp = target plasma concentration · τ = dosage interval (time between doses) · F = bioavailability — it divides both equations (only the absorbed fraction reaches plasma)</text>

        {/* organ-disease rule card */}
        <rect x="52" y="944" width="494" height="88" rx="10" className="fill-card stroke-emergency" />
        <text x="66" y="964" fontSize="4.6" fontWeight="800" className="fill-emergency">ORGAN DISEASE — renal or liver</text>
        <text x="66" y="982" fontSize="4.2" fontWeight="700" className="fill-foreground">In renal or liver disease, maintenance dose ↓ and loading</text>
        <text x="66" y="996" fontSize="4.2" fontWeight="700" className="fill-foreground">dose is usually unchanged — CL falls, Vd does not.</text>
        <text x="66" y="1016" fontSize="3.8" className="fill-muted-foreground">the drain narrows; the container keeps its size</text>

        {/* steady-state rule card */}
        <rect x="564" y="944" width="486" height="88" rx="10" className="fill-card stroke-brand" />
        <text x="578" y="964" fontSize="4.6" fontWeight="800" className="fill-brand">STEADY STATE — the t1/2 clock</text>
        <text x="578" y="982" fontSize="4.2" fontWeight="700" className="fill-foreground">Time to steady state depends primarily on t1/2 and is</text>
        <text x="578" y="996" fontSize="4.2" fontWeight="700" className="fill-foreground">independent of dose and dosing frequency.</text>
        <text x="578" y="1016" fontSize="3.8" className="fill-muted-foreground">no dose or schedule reaches the plateau sooner (~4–5 × t1/2)</text>

        {/* spine strip */}
        <text x="549" y="1052" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">loading gets you there → maintenance keeps you there → t1/2 alone decides when the plateau arrives</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1082" width="1054" height="48" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1098" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 253 / book 231 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Urine pH and drug elimination + Dosage calculations)</text>
        <text x="42" y="1110" fontSize="4.2" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images — pure text plus ONE vector figure (the ionization-vs-pH curve; VLM confirmed the weak-acid rise, the weak-base fall, the 50% crossing, the pKa 9.2</text>
        <text x="42" y="1122" fontSize="4.2" className="fill-muted-foreground">annotation and the arrows) plus the two typeset equations and the two dosage formulas; no margin mnemonics print anywhere on the page. The tubule glyph, the curve redraw, and the dosage panel are ORIGINAL KYP adaptations; the KYP memory layer is original.</text>
      </g>
    </svg>
  );
}
