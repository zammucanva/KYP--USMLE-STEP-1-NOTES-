/* Pharmacology — Pharmacokinetics and Pharmacodynamics (PH batch 2):
 * Pharmacokinetic parameters & age-related changes (book 229 / pdf 251).
 * Original KYP adaptation: the source page has ZERO raster images
 * (pdfimages + VLM census, ph2-vlm-census.ts) — pure text plus small
 * VECTOR formula elements (the F formula with its AUC plot thumbnail,
 * the Vd/CL/t1/2 fraction formulas, the half-life-remaining table).
 * Redrawn here as one linked parameter map — F (AUC thumbnail redrawn +
 * formula), Vd (the three-compartment ladder), CL (the elimination-flow
 * formula with its three organ gates), t1/2 (0.7 × Vd / CL + the
 * halving ladder with the 3.3-half-lives-to-90% and 4–5-half-lives-to-
 * steady-state markers) — closed by the aging band (the four ADME
 * stages with their direction arrows, phase I lost first). All glyphs
 * are original KYP vector drawing; nothing is reproduced from the book.
 * Purely presentational: no props, no hooks, no external images. */

export function PkParametersMap() {
  const w = 1102;
  const h = 1124;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Pharmacokinetic parameters — the four-parameter map: bioavailability F with the AUC plot and formula, the Vd compartment ladder, clearance CL with its three organ gates, half-life t1/2 with the halving ladder and both steady-state markers, and the aging overlay across absorption, distribution, metabolism, and excretion — an original KYP adaptation of book 229." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="6.5" fontWeight="800" className="fill-foreground">Pharmacokinetics — the four-parameter map (original KYP adaptation)</text>
        <rect x="846" y="24" width="210" height="18" className="fill-brand-soft" />
        <text x="951" y="37" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">4 parameters · 1 aging overlay</text>
      </g>

      {/* ===== ROW 1 · F ===== */}
      <g>
        <rect x="36" y="74" width="500" height="310" rx="14" className="fill-secondary/40 stroke-border" />
        <circle cx="58" cy="96" r="10" className="fill-brand-soft stroke-brand" />
        <text x="58" y="99.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">1</text>
        <text x="76" y="100" fontSize="5.4" fontWeight="800" className="fill-brand">BIOAVAILABILITY (F) — the fraction that arrives</text>
        <text x="52" y="122" fontSize="4.2" fontWeight="700" className="fill-foreground">Fraction of administered drug reaching systemic circulation.</text>
        <text x="52" y="136" fontSize="4.2" fontWeight="700" className="fill-foreground">IV dose: F = 100% — the entire dose is in the circulation.</text>
        <text x="52" y="150" fontSize="4.2" fontWeight="700" className="fill-foreground">Oral: F typically &lt;100% — TWO taxes on the dose: incomplete</text>
        <text x="52" y="164" fontSize="4.2" fontWeight="700" className="fill-foreground">absorption AND first-pass metabolism.</text>
        <text x="52" y="178" fontSize="4.2" fontWeight="700" className="fill-foreground">Calculated from the area under the curve in a plot of plasma</text>
        <text x="52" y="192" fontSize="4.2" fontWeight="700" className="fill-foreground">concentration over time:</text>
        <rect x="52" y="204" width="340" height="56" rx="8" className="fill-card stroke-brand" />
        <text x="222" y="226" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">F = [AUCoral × DoseIV] / [Doseoral × AUCIV]</text>
        <text x="222" y="244" textAnchor="middle" fontSize="4.4" className="fill-muted-foreground">× 100 — the dose-corrected AUC ratio</text>
        <text x="52" y="284" fontSize="4.2" className="fill-muted-foreground">WHY IT MATTERS: the same mg count is a different systemic dose —</text>
        <text x="52" y="298" fontSize="4.2" className="fill-muted-foreground">routes are not interchangeable.</text>
        {/* the AUC plot thumbnail (redrawn) */}
        <rect x="400" y="112" width="116" height="158" rx="6" className="fill-card stroke-border" />
        <path d="M 410 248 L 410 122" className="stroke-border" strokeWidth="1" fill="none" />
        <path d="M 410 248 L 508 248" className="stroke-border" strokeWidth="1" fill="none" />
        <path d="M 410 248 L 410 132 C 418 136 424 162 434 182 C 446 206 468 220 500 228 L 500 248 Z" className="fill-brand-soft stroke-brand" strokeWidth="1" />
        <path d="M 410 248 L 410 196 C 418 198 424 214 436 224 C 450 236 470 242 500 246 L 500 248 Z" className="fill-warning-soft stroke-warning" strokeWidth="1" />
        <text x="480" y="164" fontSize="3.8" fontWeight="800" className="fill-brand">AUCIV</text>
        <text x="480" y="226" fontSize="3.8" fontWeight="800" className="fill-warning">AUCOral</text>
        <text x="404" y="185" transform="rotate(-90 404 185)" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">Plasma concentration</text>
        <text x="508" y="258" textAnchor="end" fontSize="3.8" className="fill-muted-foreground">Time</text>
        <text x="458" y="268" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the AUC plot, redrawn</text>
      </g>

      {/* ===== ROW 1 · Vd ===== */}
      <g>
        <rect x="556" y="74" width="510" height="310" rx="14" className="fill-secondary/40 stroke-border" />
        <circle cx="578" cy="96" r="10" className="fill-brand-soft stroke-brand" />
        <text x="578" y="99.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">2</text>
        <text x="596" y="100" fontSize="5.4" fontWeight="800" className="fill-brand">VOLUME OF DISTRIBUTION (Vd) — the space it hides in</text>
        <text x="572" y="122" fontSize="4.2" fontWeight="700" className="fill-foreground">Theoretical value that relates drug amount to plasma concentration —</text>
        <text x="572" y="136" fontSize="4.2" fontWeight="700" className="fill-foreground">drugs may be distributed in more than one compartment:</text>
        <rect x="572" y="144" width="330" height="20" rx="6" className="fill-card stroke-border" />
        <text x="737" y="158" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Vd = amount of drug in the body / plasma drug concentration</text>
        <text x="572" y="180" fontSize="3.8" fontWeight="800" className="fill-foreground">THE COMPARTMENT LADDER — the verbatim table:</text>
        <rect x="572" y="186" width="474" height="48" rx="8" className="fill-card stroke-emergency" />
        <text x="584" y="202" fontSize="4.8" fontWeight="800" className="fill-emergency">LOW — INTRAVASCULAR</text>
        <text x="584" y="216" fontSize="4.2" fontWeight="700" className="fill-foreground">Large/charged molecules; plasma protein bound</text>
        <text x="584" y="228" fontSize="3.6" className="fill-muted-foreground">stays in the pipe — the space a dialyzer can reach</text>
        <rect x="572" y="238" width="474" height="48" rx="8" className="fill-card stroke-warning" />
        <text x="584" y="254" fontSize="4.8" fontWeight="800" className="fill-warning">MEDIUM — ECF</text>
        <text x="584" y="268" fontSize="4.2" fontWeight="700" className="fill-foreground">Small hydrophilic molecules</text>
        <text x="584" y="280" fontSize="3.6" className="fill-muted-foreground">walks the bath — water-soluble, vessel to interstitium</text>
        <rect x="572" y="290" width="474" height="48" rx="8" className="fill-card stroke-brand" />
        <text x="584" y="306" fontSize="4.8" fontWeight="800" className="fill-brand">HIGH — ALL TISSUES INCLUDING FAT</text>
        <text x="584" y="320" fontSize="4.2" fontWeight="700" className="fill-foreground">Small lipophilic molecules, especially if bound to tissue protein</text>
        <text x="584" y="332" fontSize="3.6" className="fill-muted-foreground">boards every deck — dialysis cannot chase it</text>
        <text x="572" y="352" fontSize="4.2" fontWeight="700" className="fill-foreground">Liver and kidney disease ↑Vd (↓ protein binding, ↑ Vd).</text>
        <text x="572" y="366" fontSize="4.2" fontWeight="700" className="fill-foreground">Hemodialysis is most effective for drugs with a LOW Vd.</text>
      </g>

      {/* row-1 chevron: the arriving amount distributes */}
      <g className="stroke-border" fill="none">
        <path d="M 538 216 L 546 221 L 538 226" strokeWidth="1.4" />
        <path d="M 539 388 L 545 394 L 551 388" strokeWidth="1.4" />
      </g>

      {/* ===== ROW 2 · CL ===== */}
      <g>
        <rect x="36" y="396" width="500" height="304" rx="14" className="fill-secondary/40 stroke-border" />
        <circle cx="58" cy="418" r="10" className="fill-warning-soft stroke-warning" />
        <text x="58" y="421.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">3</text>
        <text x="76" y="422" fontSize="5.4" fontWeight="800" className="fill-warning">CLEARANCE (CL) — the speed plasma is cleaned</text>
        <text x="52" y="444" fontSize="4.2" fontWeight="700" className="fill-foreground">The volume of plasma cleared of drug per unit time:</text>
        <rect x="52" y="452" width="466" height="36" rx="8" className="fill-card stroke-warning" />
        <text x="285" y="467" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-foreground">CL = rate of elimination of drug / plasma drug concentration</text>
        <text x="285" y="481" textAnchor="middle" fontSize="4.4" className="fill-muted-foreground">= Vd × Ke (elimination constant)</text>
        <text x="52" y="508" fontSize="4.2" fontWeight="800" className="fill-foreground">Impaired with defects in cardiac, hepatic, or renal function:</text>
        <rect x="52" y="516" width="146" height="86" rx="8" className="fill-card stroke-emergency" />
        <text x="125" y="534" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-emergency">CARDIAC</text>
        <text x="125" y="550" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">the failing pump</text>
        <text x="125" y="562" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">delivers less drug</text>
        <text x="125" y="580" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-emergency">→ ↓CL</text>
        <rect x="212" y="516" width="146" height="86" rx="8" className="fill-card stroke-emergency" />
        <text x="285" y="534" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-emergency">HEPATIC</text>
        <text x="285" y="550" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">↓ hepatic mass and</text>
        <text x="285" y="562" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">blood flow</text>
        <text x="285" y="580" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-emergency">→ ↓CL</text>
        <rect x="372" y="516" width="146" height="86" rx="8" className="fill-card stroke-emergency" />
        <text x="445" y="534" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-emergency">RENAL</text>
        <text x="445" y="550" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">↓ renal mass and blood</text>
        <text x="445" y="562" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">flow (↓ GFR)</text>
        <text x="445" y="580" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-emergency">→ ↓CL</text>
        <text x="52" y="624" fontSize="4.2" className="fill-muted-foreground">CL is the organ-function parameter — the one the aging overlay</text>
        <text x="52" y="638" fontSize="4.2" className="fill-muted-foreground">attacks twice (liver AND kidney).</text>
        <text x="52" y="666" fontSize="4.2" fontWeight="700" className="fill-foreground">Ke = the elimination constant; CL compounds it with Vd.</text>
      </g>

      {/* ===== ROW 2 · t1/2 ===== */}
      <g>
        <rect x="556" y="396" width="510" height="304" rx="14" className="fill-secondary/40 stroke-border" />
        <circle cx="578" cy="418" r="10" className="fill-warning-soft stroke-warning" />
        <text x="578" y="421.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">4</text>
        <text x="596" y="422" fontSize="5.4" fontWeight="800" className="fill-warning">HALF-LIFE (t1/2) — the clock every schedule reads</text>
        <text x="572" y="444" fontSize="4.2" fontWeight="700" className="fill-foreground">The time required to eliminate 1/2 of the drug from the body.</text>
        <rect x="572" y="452" width="466" height="36" rx="8" className="fill-card stroke-warning" />
        <text x="805" y="467" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">t1/2 = 0.7 × Vd / CL</text>
        <text x="805" y="481" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">in first-order elimination — ↑Vd or ↓CL → ↑t1/2</text>
        <text x="572" y="508" fontSize="4.2" fontWeight="800" className="fill-foreground">THE HALVING LADDER — # of half-lives vs % remaining (verbatim):</text>
        <rect x="572" y="516" width="108" height="64" rx="8" className="fill-card stroke-border" />
        <text x="626" y="534" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">1 half-life</text>
        <text x="626" y="556" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">50%</text>
        <text x="626" y="572" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">remaining</text>
        <rect x="694" y="516" width="108" height="64" rx="8" className="fill-card stroke-border" />
        <text x="748" y="534" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">2 half-lives</text>
        <text x="748" y="556" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">25%</text>
        <text x="748" y="572" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">remaining</text>
        <rect x="816" y="516" width="108" height="64" rx="8" className="fill-card stroke-border" />
        <text x="870" y="534" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">3 half-lives</text>
        <text x="870" y="556" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">12.5%</text>
        <text x="870" y="572" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">remaining</text>
        <rect x="938" y="516" width="108" height="64" rx="8" className="fill-card stroke-border" />
        <text x="992" y="534" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">4 half-lives</text>
        <text x="992" y="556" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">6.25%</text>
        <text x="992" y="572" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">remaining</text>
        <rect x="572" y="592" width="228" height="18" rx="9" className="fill-warning-soft" />
        <text x="686" y="604.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-warning">3.3 half-lives → 90% of steady state</text>
        <rect x="818" y="592" width="228" height="18" rx="9" className="fill-brand-soft" />
        <text x="932" y="604.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">4–5 half-lives → steady state</text>
        <text x="572" y="634" fontSize="4.2" fontWeight="700" className="fill-foreground">Steady state = dynamic equilibrium: rate of elimination = rate of administration.</text>
        <text x="572" y="652" fontSize="4.2" className="fill-muted-foreground">The clock is dose-independent — raising the dose raises the level,</text>
        <text x="572" y="666" fontSize="4.2" className="fill-muted-foreground">never the speed.</text>
      </g>

      {/* row-2 chevron: CL feeds the clock */}
      <g className="stroke-border" fill="none">
        <path d="M 538 541 L 546 546 L 538 551" strokeWidth="1.4" />
      </g>

      {/* ===== ROW 3 · THE AGING OVERLAY ===== */}
      <g>
        <rect x="36" y="716" width="1030" height="330" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="738" fontSize="6" fontWeight="800" className="fill-foreground">THE AGING OVERLAY — age-related changes in pharmacokinetics (book 229)</text>
        <text x="52" y="758" fontSize="4.2" fontWeight="700" className="fill-foreground">Aging alters the passage of drugs through the body — standard doses can result in ↑ plasma concentrations.</text>
        <text x="52" y="772" fontSize="4.2" fontWeight="700" className="fill-foreground">Older patients often require reduced doses to prevent toxicity.</text>
        {/* A — absorption */}
        <rect x="52" y="784" width="236" height="222" rx="10" className="fill-card stroke-border" />
        <text x="170" y="804" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">ABSORPTION</text>
        <text x="170" y="834" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-muted-foreground">→</text>
        <text x="170" y="858" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">mostly unaffected</text>
        <text x="170" y="880" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">The gut holds — the one ADME</text>
        <text x="170" y="892" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">stage aging spares, and the</text>
        <text x="170" y="904" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">classic distractor in any</text>
        <text x="170" y="916" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">elderly-toxicity stem.</text>
        <text x="170" y="994" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">route unchanged → rarely the answer</text>
        {/* D — distribution */}
        <rect x="300" y="784" width="236" height="222" rx="10" className="fill-card stroke-brand" />
        <text x="418" y="804" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">DISTRIBUTION</text>
        <text x="312" y="828" fontSize="4.4" fontWeight="800" className="fill-foreground">WATER ↓</text>
        <text x="312" y="842" fontSize="4.2" fontWeight="700" className="fill-foreground">↓ total body water</text>
        <text x="312" y="854" fontSize="4.2" fontWeight="700" className="fill-foreground">→ ↓ Vd of hydrophilic drugs</text>
        <text x="312" y="868" fontSize="4.2" fontWeight="800" className="fill-brand">→ ↑ concentration</text>
        <text x="312" y="896" fontSize="4.4" fontWeight="800" className="fill-foreground">FAT ↑</text>
        <text x="312" y="910" fontSize="4.2" fontWeight="700" className="fill-foreground">↑ total body fat</text>
        <text x="312" y="922" fontSize="4.2" fontWeight="700" className="fill-foreground">→ ↑ Vd of lipophilic drugs</text>
        <text x="312" y="936" fontSize="4.2" fontWeight="800" className="fill-brand">→ ↑ half-life</text>
        <text x="418" y="994" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">split by solubility — opposite directions</text>
        {/* M — metabolism */}
        <rect x="548" y="784" width="236" height="222" rx="10" className="fill-card stroke-emergency" />
        <text x="666" y="804" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">METABOLISM</text>
        <text x="560" y="828" fontSize="4.4" fontWeight="800" className="fill-foreground">LIVER SLOW</text>
        <text x="560" y="842" fontSize="4.2" fontWeight="700" className="fill-foreground">↓ hepatic mass and blood flow</text>
        <text x="560" y="854" fontSize="4.2" fontWeight="700" className="fill-foreground">→ ↓ first-pass metabolism</text>
        <text x="560" y="866" fontSize="4.2" fontWeight="700" className="fill-foreground">→ ↓ hepatic clearance</text>
        <text x="560" y="896" fontSize="4.4" fontWeight="800" className="fill-emergency">PHASE I ↓ — decreased</text>
        <text x="560" y="910" fontSize="4.4" fontWeight="800" className="fill-foreground">PHASE II — relatively preserved</text>
        <text x="560" y="934" fontSize="3.6" className="fill-muted-foreground">the phase-I-lost-first rule</text>
        <text x="560" y="944" fontSize="3.6" className="fill-muted-foreground">(cross-ref: drug metabolism page)</text>
        <text x="666" y="994" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">oxidation fades before conjugation</text>
        {/* E — excretion */}
        <rect x="796" y="784" width="236" height="222" rx="10" className="fill-card stroke-warning" />
        <text x="914" y="804" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">EXCRETION</text>
        <text x="808" y="828" fontSize="4.4" fontWeight="800" className="fill-foreground">KIDNEY SLOW</text>
        <text x="808" y="842" fontSize="4.2" fontWeight="700" className="fill-foreground">↓ renal mass and blood flow</text>
        <text x="808" y="856" fontSize="4.4" fontWeight="800" className="fill-foreground">(↓ GFR)</text>
        <text x="808" y="872" fontSize="4.2" fontWeight="800" className="fill-warning">→ ↓ renal clearance</text>
        <text x="808" y="896" fontSize="4.2" fontWeight="700" className="fill-foreground">Renally cleared drugs must be</text>
        <text x="808" y="908" fontSize="4.2" fontWeight="700" className="fill-foreground">dosed against the measured</text>
        <text x="808" y="920" fontSize="4.2" fontWeight="700" className="fill-foreground">creatinine clearance — and</text>
        <text x="808" y="932" fontSize="4.2" fontWeight="700" className="fill-foreground">sarcopenia masks the fall.</text>
        <text x="914" y="994" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">filtration falls with mass and flow</text>
        <text x="52" y="1030" fontSize="4.4" fontWeight="800" className="fill-foreground">Three of the four gates move against the standard dose — hence reduced doses in older patients.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1058" width="1054" height="52" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1076" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 251 / book 229 (Pharmacology — Pharmacokinetics and Pharmacodynamics)</text>
        <text x="42" y="1088" fontSize="4.6" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images — pure text plus small vector formula elements (the F/AUC figure, the Vd/CL/t1/2 formulas, the half-life table); no margin notes or mnemonics (VLM confirmed).</text>
        <text x="42" y="1100" fontSize="4.6" className="fill-muted-foreground">The linked map, the AUC-thumbnail redraw, the ladders, and the aging band are ORIGINAL KYP work; the printed tables are carried verbatim in the note; the KYP mnemonics are original.</text>
      </g>
    </svg>
  );
}
