"use client";

// Original KYP metabolism visuals (E/M batches: overview, pathways).
// Theme tokens only; pathway redraws preserve the source's node sets,
// enzyme labels, compartment logic, and cofactor markers (B biotin, T TPP).

// ---------------------------------------------------------------------------
// Metabolism overview — the integrated whole-body pathway map (source
// "Summary of pathways" figure redrawn)
// ---------------------------------------------------------------------------

export function WholeMetabolismMap() {
  const w = 980;
  const h = 740;
  const node = (x: number, y: number, label: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", wd = 118, ht = 30) => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width={wd} height={ht} rx="7" className={tone} strokeWidth="1.2" />
      <text x={x + wd / 2} y={y + ht / 2 + 3.5} textAnchor="middle" fontSize="8.6" fontWeight="700" className={textTone}>{label}</text>
    </g>
  );
  const arrow = (d: string, marker = "") => (
    <g key={`${d.slice(0, 24)}-${marker}`}>
      <path d={d} fill="none" strokeWidth="1.4" stroke="currentColor" className="text-muted-foreground" />
      <path d={marker} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  const enz = (x: number, y: number, label: string, cls = "fill-muted-foreground") => (
    <text key={`${label}-${x}-${y}`} x={x} y={y} fontSize="7.4" fontWeight="700" className={cls}>{label}</text>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The integrated summary-of-pathways metabolism map: galactose, glycogen, glucose and fructose feeding the glycolysis chain through glucose-6-phosphate and fructose-1,6-bisphosphate to pyruvate; pyruvate branching to lactate, alanine, acetyl-CoA via pyruvate dehydrogenase, and oxaloacetate via pyruvate carboxylase; the TCA cycle circle; the urea cycle with carbamoyl phosphate synthetase I and ornithine transcarbamylase; lipid metabolism with acetyl-CoA to malonyl-CoA to fatty acids and triglycerides, HMG-CoA branching to mevalonate and cholesterol versus ketogenesis; and propionyl-CoA to methylmalonyl-CoA to succinyl-CoA with B12 — with biotin, thiamine, and irreversible-regulation markers" className="min-w-[940px]">
      {/* header + legend */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Summary of pathways — the whole-body metabolism map (original KYP redraw)</text>
        <rect x={560} y={24} width={118} height={18} rx={9} className="fill-brand-soft" />
        <text x={619} y={37} textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">B = biotin cofactor</text>
        <rect x={686} y={24} width={130} height={18} rx={9} className="fill-warning-soft" />
        <text x={751} y={37} textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">T = thiamine (TPP)</text>
        <rect x={824} y={24} width={122} height={18} rx={9} className="fill-emergency-soft" />
        <text x={885} y={37} textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency"># = irreversible, regulated</text>
      </g>

      {/* ============ ZONE 1: carbohydrate hub (left) ============ */}
      {/* galactose arm */}
      {node(44, 96, "Galactose")}
      {node(44, 156, "Galactose-1-P", "fill-secondary stroke-border")}
      {enz(44, 130, "Galactokinase (mild galactosemia)")}
      {enz(44, 202, "GALT (severe galactosemia)")}
      {arrow("M 103 126 L 103 154", "M 103 156 l -4 -7 h 8 z")}
      {/* glycogen arm */}
      {node(196, 96, "Glycogen")}
      {node(196, 156, "UDP-glucose")}
      {arrow("M 255 126 L 255 154", "M 255 156 l -4 -7 h 8 z")}
      {enz(262, 130, "glycogenesis / glycogenolysis")}
      {/* G-1-P junction */}
      {node(196, 216, "Glucose-1-P")}
      {arrow("M 162 186 L 200 214", "M 203 216 l -6 -7 8 -1 z")}
      {/* glucose */}
      {node(44, 216, "Glucose")}
      {arrow("M 103 240 L 194 240", "M 196 240 l -8 -4 v 8 z")}
      {enz(66, 258, "Hexokinase / Glucokinase #")}
      {/* G-6-P hub */}
      {node(196, 216, "Glucose-6-P", "fill-brand-soft stroke-brand", "fill-brand", 128)}
      {enz(196, 262, "Glucose-6-phosphatase (von Gierke)")}
      {/* HMP shunt */}
      {node(44, 296, "Ribulose-5-P")}
      {enz(44, 284, "G6PD → HMP shunt")}
      {arrow("M 216 268 C 186 276, 176 284, 170 292", "M 168 294 l 8.5 -1 -3.5 8 z")}
      {enz(96, 340, "Transketolase T")}
      {/* F-6-P */}
      {node(196, 296, "Fructose-6-P")}
      {arrow("M 162 316 L 194 316", "M 196 316 l -8 -4 v 8 z")}
      {arrow("M 252 296 L 252 266", "M 252 264 l -4 7 h 8 z")}
      {/* F-1,6-BP with PFK-1 / FBPase-1 */}
      {node(196, 366, "Fructose-1,6-BP", "fill-brand-soft stroke-brand", "fill-brand", 140)}
      {arrow("M 256 312 L 256 364", "M 256 366 l -4 -8 h 8 z")}
      {enz(266, 336, "PFK-1 #")}
      {arrow("M 232 366 L 232 328", "M 232 326 l -4 8 h 8 z")}
      {enz(66, 350, "F-1,6-BPase 1")}
      {/* fructose arm */}
      {node(44, 366, "Fructose")}
      {node(44, 426, "Fructose-1-P")}
      {arrow("M 74 396 L 74 424", "M 74 426 l -4 -7 h 8 z")}
      {enz(90, 412, "Fructokinase (essential fructosuria)")}
      {enz(44, 478, "Aldolase B (HFI — fructose intolerance)")}
      {arrow("M 103 456 C 140 470, 170 470, 196 452", "M 199 450 l -9 1 3.5 -8 z")}
      {/* glycolysis chain */}
      {node(196, 436, "Glyceraldehyde-3-P", "fill-secondary stroke-border", "fill-foreground", 148)}
      {arrow("M 266 366 L 266 434", "M 266 436 l -4 -8 h 8 z")}
      {enz(204, 482, "Aldolase B (liver) / A (muscle)")}
      {/* compact lower glycolysis strip */}
      <g>
        <rect x={44} y={496} width={330} height={70} rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x={58} y={514} fontSize="8.4" fontWeight="800" className="fill-foreground">Glycolysis lower chain</text>
        <text x={58} y={532} fontSize="8" className="fill-muted-foreground">1,3-BPG → 3-PG → 2-PG → PEP</text>
        <text x={58} y={550} fontSize="8" className="fill-muted-foreground">DHAP ⇌ G-3-P (triose phosphate isomerase) · Pyruvate kinase #</text>
        <text x={58} y={564} fontSize="7.6" className="fill-muted-foreground">DHAP ← glycerol · Alanine ⇌ pyruvate</text>
      </g>
      {arrow("M 330 466 C 336 476, 340 486, 344 494", "M 345 496 l -6 -7 8.5 -0.5 z")}
      {/* pyruvate */}
      {node(196, 596, "Pyruvate", "fill-neural-soft stroke-neural", "fill-neural")}
      {arrow("M 190 570 C 184 578, 182 584, 180 592", "M 180 594 l -1.5 -8 7.5 3 z")}
      {/* lactate + alanine */}
      {node(44, 596, "Lactate")}
      {arrow("M 164 606 L 192 606", "M 196 606 l -8 -4 v 8 z")}
      {arrow("M 194 616 L 168 616", "M 164 616 l 8 -4 v 8 z")}
      {enz(120, 590, "LDH (both directions)")}
      {node(44, 656, "Alanine")}
      {arrow("M 164 670 L 240 670 L 250 644", "M 251 642 l -7 5 8 2.5 z")}
      {enz(254, 664, "transamination (ALT)")}

      {/* ============ ZONE 2: pyruvate hub → acetyl-CoA / OAA ============ */}
      {arrow("M 316 611 L 396 611", "M 398 611 l -8 -4 v 8 z")}
      {enz(330, 604, "Pyruvate DH T #")}
      {node(400, 596, "Acetyl-CoA", "fill-brand-soft stroke-brand", "fill-brand", 122)}
      {/* pyruvate carboxylase up to the TCA panel (OAA) */}
      {arrow("M 272 594 C 272 550, 292 514, 312 482", "M 314 480 l -8 2.5 4 7.5 z")}
      {enz(58, 578, "Pyruvate carboxylase B (→ OAA)")}
      {/* PEPCK gluconeogenesis return (OAA → PEP) */}
      {arrow("M 336 482 C 348 520, 348 556, 318 592", "M 316 594 l 7.5 -5 2 8.5 z")}
      {enz(58, 592, "PEPCK (→ PEP)")}

      {/* ============ ZONE 3: TCA cycle (center) ============ */}
      <g>
        <rect x={396} y={78} width={330} height={396} rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x={412} y={100} fontSize="9.5" fontWeight="800" className="fill-foreground">TCA cycle (mitochondria)</text>
        {/* cycle nodes clockwise from OAA at top */}
        {node(490, 116, "Oxaloacetate", "fill-warning-soft stroke-warning", "fill-warning", 124)}
        {node(620, 140, "Citrate", "fill-secondary stroke-border", "fill-foreground", 100)}
        {node(620, 220, "Isocitrate", "fill-secondary stroke-border", "fill-foreground", 100)}
        {node(620, 300, "α-Ketoglutarate", "fill-secondary stroke-border", "fill-foreground", 100)}
        {node(620, 380, "Succinyl-CoA", "fill-secondary stroke-border", "fill-foreground", 100)}
        {node(490, 410, "Succinate")}
        {node(490, 340, "Fumarate")}
        {node(490, 260, "Malate")}
        {/* entry: acetyl-CoA + OAA → citrate */}
        {arrow("M 520 596 C 520 560, 540 540, 556 508", "M 558 506 l -8 2.5 4 7.5 z")}
        {enz(530, 556, "Citrate synthase # (entry)")}
        {/* OAA -> citrate (citrate synthase entry) */}
        {arrow("M 560 146 C 590 150, 606 152, 616 156", "M 618 158 l -8.5 -3.5 1.5 8.5 z")}
        {/* clockwise arrows: citrate -> isocitrate -> alpha-KG -> succinyl-CoA */}
        {arrow("M 706 172 C 714 190, 714 200, 706 216", "M 706 218 l -4 -8 h 8 z")}
        {enz(622, 196, "Isocitrate DH #")}
        {arrow("M 706 252 C 714 270, 714 280, 706 296", "M 706 298 l -4 -8 h 8 z")}
        {enz(622, 276, "α-KG DH T #")}
        {/* succinyl-CoA -> succinate (left-down) */}
        {arrow("M 642 412 C 634 424, 626 429, 618 430", "M 616 430 l 8.5 -3.5 -1.5 8 z")}
        {/* succinate -> fumarate -> malate -> OAA (up the left column) */}
        {arrow("M 549 408 L 549 374", "M 549 372 l -4 8 h 8 z")}
        {arrow("M 549 338 L 549 294", "M 549 292 l -4 8 h 8 z")}
        {arrow("M 549 258 L 549 152", "M 549 150 l -4 8 h 8 z")}
        {/* citrate out to FA synthesis + fatty acids in */}
      </g>

      {/* citrate → lipid zone bridge */}
      {arrow("M 744 155 C 770 160, 790 170, 806 184", "M 808 186 l -9 -2 4 7.5 z")}
      {enz(748, 150, "Citrate out (FA synthesis)")}

      {/* ============ ZONE 4: urea cycle (right) ============ */}
      <g>
        <rect x={748} y={300} width={208} height={186} rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x={762} y={320} fontSize="9.5" fontWeight="800" className="fill-foreground">Urea cycle</text>
        {enz(762, 340, "NH3 + CO2 —(CPS I)→ Carbamoyl-P")}
        {enz(762, 354, "(OTC) + Ornithine")}
        {node(762, 362, "Citrulline", "fill-secondary stroke-border", "fill-foreground", 112, 26)}
        {enz(768, 408, "+ Aspartate")}
        {node(762, 388, "Argininosuccinate", "fill-secondary stroke-border", "fill-foreground", 112, 26)}
        {arrow("M 818 416 L 818 428", "M 818 430 l -4 -7.5 h 8 z")}
        {node(762, 434, "Arginine", "fill-secondary stroke-border", "fill-foreground", 112, 26)}
        {enz(762, 478, "→ Urea (+ H2O) · Ornithine cycles back")}
      </g>

      {/* ============ ZONE 5: lipid metabolism (bottom) ============ */}
      <g>
        <rect x={396} y={500} width={560} height={220} rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x={412} y={520} fontSize="9.5" fontWeight="800" className="fill-foreground">Lipid metabolism & ketogenesis</text>
        {/* malonyl-CoA arm */}
        {node(412, 536, "Malonyl-CoA")}
        {arrow("M 412 551 C 404 560, 402 570, 402 580", "M 402 582 l -4 -7.5 h 8 z")}
        {enz(420, 530, "ACC (insulin ⊕, citrate ⊕)")}
        {node(398, 590, "Fatty acids", "fill-warning-soft stroke-warning", "fill-warning", 108, 28)}
        {enz(398, 634, "→ Triglycerides")}
        {/* HMG-CoA arm */}
        {node(560, 596, "Acetoacetyl-CoA", "fill-secondary stroke-border", "fill-foreground", 118)}
        {node(700, 596, "HMG-CoA", "fill-brand-soft stroke-brand", "fill-brand", 96)}
        {/* HMG-CoA reductase branch: mevalonate → cholesterol */}
        {arrow("M 698 618 C 672 644, 652 668, 636 682", "M 634 684 l 8 -3 -1 8.5 z")}
        {enz(412, 690, "HMG-CoA reductase # (statins) → Mevalonate → Cholesterol")}
        {/* ketogenesis branch */}
        {arrow("M 700 622 L 700 646", "M 700 648 l -4 -7.5 h 8 z")}
        {enz(716, 640, "Ketogenesis")}
        {node(694, 650, "Acetoacetate · β-hydroxybutyrate", "fill-emergency-soft stroke-emergency", "fill-emergency", 200, 36)}
        {/* propionyl arm up into the TCA panel (succinyl-CoA) */}
        {node(560, 536, "Propionyl-CoA")}
        {arrow("M 686 536 C 716 522, 716 500, 702 482", "M 700 480 l 3.5 8 5 -7 z")}
        {enz(600, 570, "Propionyl-CoA carboxylase B → Methylmalonyl-CoA → (B12) Succinyl-CoA")}
      </g>
      {/* acetyl-CoA into lipid zone: up to malonyl-CoA (ACC) and across to acetoacetyl-CoA */}
      {arrow("M 460 596 L 460 570", "M 460 568 l -4 7.5 h 8 z")}
      {arrow("M 524 611 L 554 611", "M 556 611 l -8 -4 v 8 z")}

      {/* footer strip */}
      <g>
        <rect x="24" y="722" width="0" height="0" />
        <text x="24" y="728" fontSize="8" className="fill-muted-foreground">Original KYP redraw — the source figure&rsquo;s zones, node set, enzyme labels, and cofactor markers preserved (B biotin · T thiamine · # irreversible regulated steps); disease enzymes named at their steps.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E3 — TCA cycle circular map (source figure redrawn)
// ---------------------------------------------------------------------------

export function TcaCycleMap() {
  const w = 980;
  const h = 640;
  const metab = (x: number, y: number, label: string, sub: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", wd = 132) => (
    <g key={label}>
      <rect x={x} y={y} width={wd} height={44} rx="9" className={tone} strokeWidth="1.3" />
      <text x={x + wd / 2} y={y + 19} textAnchor="middle" fontSize="9.5" fontWeight="700" className={textTone}>{label}</text>
      <text x={x + wd / 2} y={y + 33} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  const arrow = (d: string, m: string) => (
    <g key={d.slice(4, 18) + m.slice(0, 8)}>
      <path d={d} fill="none" strokeWidth="1.5" stroke="currentColor" className="text-muted-foreground" />
      <path d={m} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  const rx = (x: number, y: number, label: string) => (
    <text key={label + x} x={x} y={y} fontSize="7.6" fontWeight="700" className="fill-foreground/80">{label}</text>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The TCA cycle circular map: pyruvate to acetyl-CoA via PDH releasing CO2 and NADH, then the eight-step circle from citrate (6C) through cis-aconitate, isocitrate (6C, irreversible isocitrate dehydrogenase releasing CO2 and NADH), alpha-ketoglutarate (5C), the irreversible alpha-KG dehydrogenase releasing CO2 and NADH, succinyl-CoA (4C) making GTP, succinate (4C) making FADH2, fumarate (4C), malate (4C) making NADH, back to oxaloacetate (4C) — with citrate synthase entry and the starred irreversible enzymes" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">TCA cycle — the aerobic hub (original KYP redraw of the source circle)</text>
        <text x={600} y={34} fontSize="8.6" className="fill-muted-foreground">Per acetyl-CoA: 3 NADH · 1 FADH2 · 2 CO2 · 1 GTP = 10 ATP</text>
        <text x={600} y={50} fontSize="8.6" className="fill-muted-foreground">(2× everything per glucose) · reactions occur in mitochondria</text>
      </g>

      {/* PDH entry arm */}
      {metab(60, 110, "Pyruvate", "3 carbons", "fill-neural-soft stroke-neural", "fill-neural", 120)}
      {arrow("M 120 154 C 140 190, 170 220, 200 246", "M 203 249 l -6 -7.5 9.5 -1 z")}
      {rx(74, 178, "PDH *")}
      {rx(74, 191, "CO2 + NADH")}
      {metab(196, 250, "Acetyl-CoA", "2 carbons", "fill-brand-soft stroke-brand", "fill-brand", 132)}

      {/* the circle — 8 metabolites clockwise from citrate at top-left */}
      {metab(70, 330, "Citrate", "6C — Krebs' starting substrate", "fill-warning-soft stroke-warning", "fill-warning", 150)}
      {metab(80, 430, "cis-Aconitate", "intermediate", "fill-secondary stroke-border", "fill-foreground", 118)}
      {metab(196, 510, "Isocitrate", "6C", "fill-secondary stroke-border", "fill-foreground", 118)}
      {metab(386, 520, "α-Ketoglutarate", "5C", "fill-secondary stroke-border", "fill-foreground", 150)}
      {metab(580, 510, "Succinyl-CoA", "4C — makes GTP", "fill-secondary stroke-border", "fill-foreground", 150)}
      {metab(720, 430, "Succinate", "4C — makes FADH2", "fill-secondary stroke-border", "fill-foreground", 150)}
      {metab(740, 330, "Fumarate", "4C", "fill-secondary stroke-border", "fill-foreground", 118)}
      {metab(660, 240, "Malate", "4C — makes NADH", "fill-secondary stroke-border", "fill-foreground", 150)}
      {metab(430, 240, "Oxaloacetate", "4C — citrate synthase partner", "fill-warning-soft stroke-warning", "fill-warning", 160)}

      {/* entry: acetyl-CoA + OAA -> citrate (citrate synthase, irreversible) */}
      {arrow("M 328 272 C 300 290, 260 310, 226 326", "M 223 328 l 9 -2 -4 8.5 z")}
      {rx(340, 304, "Citrate synthase *")}
      <text x={340} y={317} fontSize="7.4" className="fill-muted-foreground">acetyl-CoA + OAA → citrate</text>

      {/* clockwise arrows with enzyme/product markers */}
      {arrow("M 145 374 C 135 392, 132 406, 137 424", "M 138 426 l -6.5 -7 9.5 -2 z")}
      {arrow("M 168 466 C 190 486, 200 494, 214 504", "M 217 506 l -9.5 -0.5 4.5 8.5 z")}
      {arrow("M 318 534 C 344 540, 362 538, 380 536", "M 382 536 l -9 -3 2 8.5 z")}
      {rx(322, 554, "Isocitrate DH *: CO2 + NADH")}
      {arrow("M 538 546 C 556 548, 568 546, 578 542", "M 580 542 l -9 -1.5 3.5 8 z")}
      {rx(500, 572, "α-KG DH *: CO2 + NADH (B1, B2, B3, B5, lipoic acid)")}
      {arrow("M 712 510 C 724 500, 732 492, 737 482", "M 737 478 l -7.5 6 9 2.5 z")}
      {rx(676, 480, "GTP + CoA")}
      {arrow("M 828 430 C 844 416, 850 404, 850 382", "M 850 378 l -4.5 8 8.5 1 z")}
      {rx(858, 396, "FADH2")}
      {arrow("M 800 330 C 800 316, 792 304, 780 298", "M 774 290 l 3.5 8.5 8 -4 z")}
      {arrow("M 660 262 C 638 258, 616 254, 602 250", "M 596 250 l 9 3.5 -3 8.5 z")}
      {rx(548, 234, "NADH")}

      {/* regulatory callout strip */}
      <g>
        <rect x="24" y="560" width="430" height="34" rx="10" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x={38} y={575} fontSize="8.4" fontWeight="700" className="fill-foreground">Regulation: ADP ⊕ stimulates isocitrate DH; ATP ⊝, NADH ⊝ inhibit.</text>
        <text x={38} y={588} fontSize="8.4" fontWeight="700" className="fill-foreground">α-KG DH: same 5 cofactors as PDH (B1, B2, B3, B5, lipoic acid).</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="614" fontSize="8.4" className="fill-muted-foreground">* = irreversible enzymes (citrate synthase, isocitrate DH, α-KG DH) · Also called Krebs cycle · pyruvate → acetyl-CoA produces 1 NADH, 1 CO2.</text>
        <text x="24" y="632" fontSize="8.4" className="fill-muted-foreground">Citrate is Krebs&rsquo; starting substrate for making oxaloacetate.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E3 — PDH complex: five cofactors and the phosphorylation switch
// ---------------------------------------------------------------------------

export function PdhCofactorPanel() {
  const w = 980;
  const h = 560;
  const cof = (x: number, y: number, num: string, label: string, sub: string) => (
    <g key={num}>
      <rect x={x} y={y} width={168} height={74} rx="10" className="fill-secondary stroke-border" strokeWidth="1.3" />
      <circle cx={x + 22} cy={y + 22} r={13} className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
      <text x={x + 22} y={y + 26} textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">{num}</text>
      <text x={x + 42} y={y + 26} fontSize="9.4" fontWeight="800" className="fill-foreground">{label}</text>
      <text x={x + 14} y={y + 46} fontSize="7.8" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The pyruvate dehydrogenase complex: five cofactors numbered — thiamine pyrophosphate B1, lipoic acid, coenzyme A B5 pantothenic acid, FAD B2 riboflavin, NAD B3 niacin — with the reaction pyruvate plus NAD+ plus CoA to acetyl-CoA plus CO2 plus NADH, activation by high NAD+ to NADH ratio ADP and calcium, and the arsenic inhibition of lipoic acid" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Pyruvate dehydrogenase complex — the 5-cofactor gate to the TCA cycle</text>
      </g>

      {/* reaction bar */}
      <g>
        <rect x="24" y="76" width="932" height="44" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x={490} y={94} textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-brand">Pyruvate + NAD+ + CoA → Acetyl-CoA + CO2 + NADH</text>
        <text x={490} y={110} textAnchor="middle" fontSize="8.4" className="fill-muted-foreground">Mitochondrial enzyme complex linking glycolysis and the TCA cycle; active in the fed state, inactive in fasting</text>
      </g>

      {/* five cofactor cards */}
      {cof(24, 140, "1", "Thiamine (B1)", "as thiamine pyrophosphate (TPP)")}
      {cof(210, 140, "2", "Lipoic acid", "the swinging arm — ARSENIC inhibits it")}
      {cof(396, 140, "3", "CoA (B5)", "pantothenic acid — acyl carrier")}
      {cof(582, 140, "4", "FAD (B2)", "riboflavin — electron relay")}
      {cof(768, 140, "5", "NAD+ (B3)", "niacin — final electron acceptor")}
      <text x={42} y={232} fontSize="8.6" className="fill-muted-foreground">&ldquo;The lovely coenzymes for nerds&rdquo; — the same 5 cofactors serve the α-ketoglutarate dehydrogenase complex (α-KG → succinyl-CoA, TCA cycle).</text>

      {/* regulation panel */}
      <g>
        <rect x="24" y="252" width="450" height="130" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={42} y={276} fontSize="9.5" fontWeight="800" className="fill-foreground">Regulation — the phosphorylation switch</text>
        <text x={42} y={298} fontSize="8.8" className="fill-muted-foreground">Activated by: ↑ NAD+/NADH ratio · ↑ ADP · ↑ Ca2+</text>
        <text x={42} y={318} fontSize="8.8" className="fill-muted-foreground">Inhibited by its kinase (phosphorylation) in fasting;</text>
        <text x={42} y={338} fontSize="8.8" className="fill-muted-foreground">fed state (insulin) keeps it ACTIVE for acetyl-CoA entry.</text>
        <text x={42} y={364} fontSize="8.4" fontWeight="700" className="fill-foreground">Differentially regulated fed (active) / fasting (inactive).</text>
      </g>

      {/* arsenic panel */}
      <g>
        <rect x={494} y={252} width={462} height={130} rx="12" className="fill-emergency-soft stroke-emergency" strokeWidth="1.4" />
        <text x={512} y={276} fontSize="9.5" fontWeight="800" className="fill-emergency">Arsenic inhibits lipoic acid — the vampire poisoning</text>
        <text x={512} y={298} fontSize="8.8" className="fill-muted-foreground">Pigmentary skin changes and skin cancer (vampire),</text>
        <text x={512} y={318} fontSize="8.8" className="fill-muted-foreground">vomiting and diarrhea, QT prolongation (running from a cutie),</text>
        <text x={512} y={338} fontSize="8.8" className="fill-muted-foreground">garlic breath — the source&rsquo;s mnemonic image for arsenic.</text>
      </g>

      {/* deficiency strip */}
      <g>
        <rect x="24" y="404" width="932" height="60" rx="10" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={42} y={426} fontSize="9.4" fontWeight="800" className="fill-foreground">PDH complex deficiency — X-linked</text>
        <text x={42} y={444} fontSize="8.8" className="fill-muted-foreground">Buildup of pyruvate shunted to lactate (LDH) and alanine (ALT): neurologic defects, lactic acidosis, ↑ serum alanine starting in infancy.</text>
        <text x={42} y={458} fontSize="8.8" className="fill-muted-foreground">Treatment: ↑ intake of ketogenic nutrients (high fat, or ↑ lysine and leucine), B1 and lipoic acid.</text>
      </g>

      {/* footer */}
      <text x="24" y="496" fontSize="8.4" className="fill-muted-foreground">Original KYP adaptation — the source&rsquo;s five-cofactor list, activation conditions, arsenic-lipoic acid blockade, and the deficiency panel on one canvas.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E4 — Electron transport chain + oxidative phosphorylation: the proton
// circuit (source membrane map redrawn: complexes I–V, CoQ, cytochrome c,
// H+ flows, uncouplers, cyanide/CO at IV)
// ---------------------------------------------------------------------------

export function EtcOxphosMap() {
  const w = 980;
  const h = 600;
  const cx = (x: number, label: string, sub?: string) => {
    const bw = label === "Complex II" ? 120 : label === "Complex V" ? 115 : label === "Complex IV" ? 110 : 100;
    return (
    <g key={label}>
      <rect x={x} y={252} width={bw} height={86} rx={11} className="fill-neural-soft stroke-neural" strokeWidth="1.5" />
      <text x={x + bw / 2} y={278} textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-neural">{label}</text>
      {sub && <text x={x + bw / 2} y={292} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">{sub}</text>}
    </g>
    );
  };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The electron transport chain membrane map: NADH entering complex I and FADH2 entering complex 2 at a lower energy level, both handing electrons to CoQ, then complex 3, cytochrome c, and complex 4 where oxygen accepts electrons to make water; protons pumped down into the intermembrane space at complexes 1, 3 and 4 and flowing back up through complex 5 ATP synthase which makes ATP from ADP plus Pi; uncoupling proteins in brown fat and aspirin overdose leak protons so electron transport continues while ATP synthesis stops; cyanide and CO inhibit complex 4" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Electron transport chain — the proton circuit (original KYP redraw of the source membrane map)</text>
      <text x={700} y="34" fontSize="8.6" className="fill-muted-foreground">1 NADH → 2.5 ATP · 1 FADH₂ → 1.5 ATP</text>
      <text x={700} y="50" fontSize="8.6" className="fill-muted-foreground">Aerobic glucose: 32 net ATP (heart, liver) · 30 (muscle)</text>
      </g>

      {/* matrix zone */}
      <text x="28" y="86" fontSize="8.4" fontWeight="700" className="fill-muted-foreground">MITOCHONDRIAL MATRIX</text>

      {/* substrate labels (plain text, as in the source) + short arrows */}
      <text x="155" y="208" fontSize="9" fontWeight="700" className="fill-foreground">NADH</text>
      <path d="M 165 216 L 178 244" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 180 248 l -7.5 -2 4.5 -6.5 z" className="fill-muted-foreground" stroke="none" />
      <text x="218" y="208" fontSize="9" fontWeight="700" className="fill-foreground">NAD⁺</text>
      <path d="M 212 248 L 225 220" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 227 216 l -7.5 2.5 5 -6 z" className="fill-muted-foreground" stroke="none" />

      <text x="318" y="208" fontSize="9" fontWeight="700" className="fill-foreground">FADH₂</text>
      <path d="M 330 216 L 342 244" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 344 248 l -7.5 -2 4.5 -6.5 z" className="fill-muted-foreground" stroke="none" />
      <text x="408" y="208" fontSize="9" fontWeight="700" className="fill-foreground">FAD</text>
      <path d="M 398 248 L 410 222" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 412 218 l -7.5 2.5 5 -6 z" className="fill-muted-foreground" stroke="none" />

      <text x="655" y="208" fontSize="9" fontWeight="700" className="fill-foreground">½ O₂ + 2H⁺</text>
      <path d="M 668 216 L 714 244" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 716 248 l -7.5 -2.5 4 -6.5 z" className="fill-muted-foreground" stroke="none" />
      <text x="788" y="208" fontSize="9" fontWeight="700" className="fill-foreground">H₂O</text>
      <path d="M 780 248 L 790 222" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 792 218 l -7.5 2.5 5 -6 z" className="fill-muted-foreground" stroke="none" />

      <text x="845" y="208" fontSize="9" fontWeight="700" className="fill-brand">ADP + Pᵢ</text>
      <path d="M 858 216 L 874 244" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 876 248 l -7.5 -2 4.5 -6.5 z" className="fill-muted-foreground" stroke="none" />
      <text x="922" y="208" fontSize="9" fontWeight="800" className="fill-brand">ATP</text>
      <path d="M 918 248 L 925 222" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 927 218 l -7.5 2.5 5 -6 z" className="fill-muted-foreground" stroke="none" />

      {/* membrane band */}
      <text x="24" y="244" fontSize="7.6" className="fill-muted-foreground">Inner mitochondrial membrane</text>
      <rect x="24" y="250" width="932" height="88" rx="10" className="fill-secondary/40 stroke-border" strokeWidth="1.3" />

      {/* uncoupling protein channel (left) + dashed H+ leak */}
      <g>
        <rect x="36" y="252" width="92" height="86" rx="9" className="fill-emergency-soft stroke-emergency" strokeWidth="1.3" />
        <text x="82" y="278" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">Uncoupling</text>
        <text x="82" y="290" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">proteins</text>
        <text x="82" y="303" textAnchor="middle" fontSize="7.4" className="fill-muted-foreground">(brown fat)</text>
        <path d="M 118 356 L 118 246" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" className="text-muted-foreground" fill="none" />
        <path d="M 118 240 l -3.5 7.5 h 7 z" className="fill-muted-foreground" stroke="none" />
        <text x="126" y="352" fontSize="8" fontWeight="700" className="fill-muted-foreground">H⁺</text>
        <text x="36" y="374" fontSize="8" fontWeight="700" className="fill-emergency">Aspirin overdose</text>
        <text x="36" y="388" fontSize="7.4" className="fill-muted-foreground">(also uncouples → hyperthermia)</text>
      </g>

      {/* complexes */}
      {cx(150, "Complex I")}
      {cx(280, "Complex II", "(succinate dehydrogenase)")}
      {cx(495, "Complex III")}
      {cx(685, "Complex IV")}
      {cx(835, "Complex V", "(ATP synthase)")}

      {/* CoQ between II and III */}
      <ellipse cx="445" cy="296" rx="35" ry="19" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
      <text x="445" y="299" textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-brand">CoQ</text>
      {/* I -> CoQ overpass (above complex II, above the FADH2/FAD labels — as in the source) */}
      <path d="M 250 262 C 268 240, 290 176, 330 172 L 395 172 C 430 172, 447 200, 447 262" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 447 270 l -4 -8 h 8 z" className="fill-muted-foreground" stroke="none" />
      {/* II -> CoQ */}
      <path d="M 400 296 L 408 296" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 410 296 l -7 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />

      {/* cytochrome c below the band, between III and IV */}
      <ellipse cx="634" cy="352" rx="34" ry="13" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
      <text x="634" y="355" textAnchor="middle" fontSize="7.2" fontWeight="700" className="fill-warning">Cytochrome c</text>
      <path d="M 592 344 L 598 350" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 600 352 l -7.5 -1 4 -6.5 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 669 351 L 680 345" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 682 343 l -7 3 2.5 -7 z" className="fill-muted-foreground" stroke="none" />

      {/* H+ pumping arrows beside I, III, IV (down into the intermembrane space) */}
      <path d="M 258 246 L 258 350" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 258 356 l -3.5 -7.5 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="254" y="374" fontSize="8" fontWeight="700" className="fill-muted-foreground">H⁺</text>
      <path d="M 486 246 L 486 350" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 486 356 l -3.5 -7.5 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="482" y="374" fontSize="8" fontWeight="700" className="fill-muted-foreground">H⁺</text>
      <path d="M 807 246 L 807 350" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 807 356 l -3.5 -7.5 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="803" y="374" fontSize="8" fontWeight="700" className="fill-muted-foreground">H⁺</text>

      {/* H+ return through V (up into the complex, driving ATP synthase) */}
      <path d="M 850 360 L 850 304" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 850 298 l -3.5 7.5 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="858" y="356" fontSize="8" fontWeight="700" className="fill-muted-foreground">H⁺</text>

      {/* cyanide / CO inhibit tag at IV */}
      <path d="M 740 344 L 740 378" stroke="currentColor" strokeWidth="1.4" className="text-emergency" fill="none" />
      <text x="734" y="368" fontSize="9" fontWeight="800" className="fill-emergency">⊟</text>
      <text x="752" y="392" fontSize="8" fontWeight="700" className="fill-emergency">Cyanide, CO</text>

      {/* intermembrane space */}
      <text x="28" y="428" fontSize="8.4" fontWeight="700" className="fill-muted-foreground">INTERMEMBRANE SPACE</text>
      <text x="28" y="442" fontSize="7.8" className="fill-muted-foreground">(the H⁺ gradient — pumped protons accumulate here)</text>

      {/* legend */}
      <g>
        <text x="24" y="486" fontSize="8.4" className="fill-muted-foreground">Electron path: NADH → I → CoQ → III → cytochrome c → IV → ½O₂ · FADH₂ → II → CoQ (enters at a lower energy level than NADH — fewer H⁺ pumped).</text>
        <text x="24" y="504" fontSize="8.4" className="fill-muted-foreground">H⁺ pumped into the intermembrane space at I, III, IV; the gradient drives H⁺ back through V (ATP synthase) — oxidative phosphorylation coupled to electron transport.</text>
        <text x="24" y="522" fontSize="8.4" className="fill-muted-foreground">Shuttles for cytosolic NADH: malate-aspartate (heart, liver) → 32 net ATP/glucose · glycerol-3-phosphate (muscle) → 30 net ATP · anaerobic glycolysis → 2 net ATP.</text>
        <text x="24" y="540" fontSize="8.4" className="fill-muted-foreground">Uncoupling proteins (brown fat — more mitochondria than white fat) and aspirin overdose: ↑ permeability → ↓ gradient — ATP synthesis stops, electron transport continues → heat.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E5 — Gluconeogenesis: the four irreversible bypass enzymes (adaptation of
// the source enzyme table into a compartment pathway map)
// ---------------------------------------------------------------------------

export function GluconeogenesisBypasses() {
  const w = 980;
  const h = 624;
  const met = (x: number, y: number, label: string, sub: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", wd = 120) => (
    <g key={label}>
      <rect x={x} y={y} width={wd} height={42} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + 19} textAnchor="middle" fontSize="9.4" fontWeight="800" className={textTone}>{label}</text>
      <text x={x + wd / 2} y={y + 32} textAnchor="middle" fontSize="7.3" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  const enz = (x: number, y: number, wd: number, lines: string[]) => (
    <g key={x + lines[0]}>
      <rect x={x} y={y} width={wd} height={lines.length > 2 ? 88 : 64} rx="10" className="fill-card stroke-border" strokeWidth="1.3" />
      {lines.map((t, i) => (
        <text key={i} x={x + wd / 2} y={y + (lines.length > 2 ? [20, 33, 53, 67, 80][i] : [22, 38, 52][i])} textAnchor="middle" fontSize={i < (lines.length > 2 ? 2 : 1) ? "8.6" : "7.4"} fontWeight={i < (lines.length > 2 ? 2 : 1) ? "800" : "400"} className={i < (lines.length > 2 ? 2 : 1) ? "fill-foreground" : "fill-muted-foreground"}>{t}</text>
      ))}
    </g>
  );
  const arrow = (d: string, m: string, dashed = false) => (
    <g key={d.slice(4, 18) + m.slice(0, 6)}>
      <path d={d} fill="none" strokeWidth="1.6" stroke="currentColor" className="text-muted-foreground" {...(dashed ? { strokeDasharray: "4 3" } : {})} />
      <path d={m} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Gluconeogenesis as the four irreversible bypass enzymes in compartment order: pyruvate carboxylase in mitochondria converts pyruvate to oxaloacetate using biotin and ATP and is activated by acetyl-CoA; PEPCK in cytosol converts oxaloacetate to PEP using GTP; fructose-1,6-bisphosphatase 1 in cytosol converts fructose-1,6-bisphosphate to fructose-6-phosphate with citrate stimulating and AMP and fructose 2,6-bisphosphate inhibiting; glucose-6-phosphatase in the ER converts glucose-6-phosphate to glucose — all enzymes subject to activation by glucagon in fasting, producing fresh glucose, primarily in liver with kidney and intestinal epithelium, while muscle cannot participate because it lacks glucose-6-phosphatase" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Gluconeogenesis — the four irreversible bypass enzymes (adaptation of the source enzyme table)</text>
        <text x={640} y="34" fontSize="8.6" fontWeight="700" className="fill-brand">Pathway produces fresh glucose.</text>
        <text x={640} y="50" fontSize="8.6" className="fill-muted-foreground">All enzymes may be subject to activation by glucagon in fasting state.</text>
      </g>

      {/* compartment bands */}
      <rect x="24" y="90" width="300" height="380" rx="12" className="fill-neural-soft/30 stroke-neural/50" strokeWidth="1.2" />
      <text x="36" y="108" fontSize="8" fontWeight="800" className="fill-neural">MITOCHONDRIA</text>
      <rect x="334" y="90" width="380" height="380" rx="12" className="fill-secondary/40 stroke-border" strokeWidth="1.2" />
      <text x="346" y="108" fontSize="8" fontWeight="800" className="fill-muted-foreground">CYTOSOL</text>
      <rect x="724" y="90" width="232" height="380" rx="12" className="fill-brand-soft/40 stroke-brand/50" strokeWidth="1.2" />
      <text x="736" y="108" fontSize="8" fontWeight="800" className="fill-brand">ER</text>

      {/* row 1: pyruvate -> OAA -> PEP */}
      {met(34, 240, "Pyruvate", "the starting substrate", "fill-neural-soft stroke-neural", "fill-neural", 96)}
      {arrow("M 130 261 L 196 261", "M 200 261 l -8 -3.5 v 7 z")}
      {met(202, 240, "Oxaloacetate", "4 carbons", "fill-neural-soft stroke-neural", "fill-neural", 118)}
      {arrow("M 320 261 L 388 261", "M 392 261 l -8 -3.5 v 7 z")}
      {met(396, 240, "PEP", "phosphoenolpyruvate", "fill-secondary stroke-border", "fill-foreground", 92)}

      {enz(60, 168, 190, ["Pyruvate carboxylase", "biotin + ATP · ⊕ acetyl-CoA"])}
      {enz(295, 152, 200, ["Phosphoenolpyruvate", "carboxykinase (PEPCK)", "requires GTP"])}

      {/* dotted continuation from PEP down to F-1,6-BP (source lists only the four enzymes) */}
      <path d="M 442 284 C 440 322, 434 362, 428 392" fill="none" strokeWidth="1.5" strokeDasharray="4 3" stroke="currentColor" className="text-muted-foreground" />
      <path d="M 427 398 l -3.5 -7.5 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="452" y="330" fontSize="8" fontWeight="700" className="fill-muted-foreground">⋯</text>

      {/* row 2: F-1,6-BP -> F-6-P .. G-6-P -> Glucose */}
      {met(350, 400, "Fructose-1,6-BP", "fructose-1,6-bisphosphate", "fill-secondary stroke-border", "fill-foreground", 150)}
      {arrow("M 500 421 L 568 421", "M 572 421 l -8 -3.5 v 7 z")}
      {met(576, 400, "Fructose-6-P", "fructose-6-phosphate", "fill-secondary stroke-border", "fill-foreground", 128)}
      <path d="M 704 421 L 732 421" fill="none" strokeWidth="1.5" strokeDasharray="4 3" stroke="currentColor" className="text-muted-foreground" />
      <path d="M 736 421 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {met(740, 400, "Glucose-6-P", "glucose-6-phosphate", "fill-brand-soft stroke-brand", "fill-brand", 96)}
      {arrow("M 836 421 L 862 421", "M 866 421 l -8 -3.5 v 7 z")}
      {met(870, 400, "Glucose", "fresh glucose out", "fill-brand-soft stroke-brand", "fill-brand", 84)}

      {enz(480, 306, 230, ["Fructose-1,6-", "bisphosphatase 1", "citrate ⊕", "AMP ⊝ · F-2,6-BP ⊝"])}
      {enz(780, 316, 170, ["Glucose-6-phosphatase", "in ER"])}

      {/* organ / tissue panel */}
      <g>
        <rect x="24" y="490" width="460" height="96" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="512" fontSize="9.4" fontWeight="800" className="fill-foreground">Where it runs — and where it cannot</text>
        <text x="42" y="530" fontSize="7.8" className="fill-muted-foreground">Occurs primarily in liver; serves to maintain euglycemia during fasting.</text>
        <text x="42" y="544" fontSize="7.8" className="fill-muted-foreground">Enzymes also found in kidney, intestinal epithelium.</text>
        <text x="42" y="558" fontSize="7.8" className="fill-muted-foreground">Deficiency of the key gluconeogenic enzymes causes hypoglycemia.</text>
        <text x="42" y="576" fontSize="7.8" fontWeight="700" className="fill-foreground">Muscle cannot participate — it lacks glucose-6-phosphatase.</text>
      </g>

      {/* odd- vs even-chain panel */}
      <g>
        <rect x="494" y="490" width="462" height="96" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="512" y="512" fontSize="9.4" fontWeight="800" className="fill-foreground">Odd- vs even-chain fatty acids as glucose sources</text>
        <text x="512" y="530" fontSize="7.8" className="fill-muted-foreground">Odd-chain fatty acids yield 1 propionyl-CoA → enters the TCA cycle as</text>
        <text x="512" y="544" fontSize="7.8" className="fill-muted-foreground">succinyl-CoA → undergoes gluconeogenesis → serves as a glucose source</text>
        <text x="512" y="558" fontSize="7.8" className="fill-muted-foreground">(It&rsquo;s odd for fatty acids to make glucose).</text>
        <text x="512" y="576" fontSize="7.8" fontWeight="700" className="fill-foreground">Even-chain cannot produce new glucose — only acetyl-CoA equivalents.</text>
      </g>

      {/* legend */}
      <text x="24" y="606" fontSize="8.4" className="fill-muted-foreground">All four bypass enzymes may be subject to activation by glucagon in the fasting state · ⊕ stimulates · ⊝ inhibits · dotted spans: the source table lists only the four irreversible enzymes.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E6 — Pentose phosphate pathway (HMP shunt): the two-phase reactions map
// (source REACTIONS figure redrawn) + the glutathione redox cycle
// ---------------------------------------------------------------------------

export function HmpShuntMap() {
  const w = 980;
  const h = 600;
  const box = (x: number, y: number, label: string, sub: string, wd = 130, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g key={label + x}>
      <rect x={x} y={y} width={wd} height={44} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + 19} textAnchor="middle" fontSize="9.2" fontWeight="800" className={textTone}>{label}</text>
      <text x={x + wd / 2} y={y + 33} textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The pentose phosphate pathway (HMP shunt) reactions map: the oxidative irreversible phase converts glucose-6-phosphate via glucose-6-phosphate dehydrogenase (NADP+ to NADPH) to 6-phosphogluconate and then to ribulose-5-phosphate (second NADPH plus CO2); phosphopentose isomerase converts ribulose-5-phosphate to ribose-5-phosphate which feeds nucleotide synthesis; the nonoxidative reversible phase uses transketolase (thiamine B1 dependent) to shuffle ribose-5-phosphate carbons back to fructose-6-phosphate and the glycolysis intermediates fructose 1,6-bisphosphate, DHAP, and glyceraldehyde-3-phosphate — both phases occur in the cytoplasm with no ATP used or produced" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Pentose phosphate pathway (HMP shunt) — the NADPH factory (redrawn from the source REACTIONS figure)</text>
        <text x={700} y="34" fontSize="8.6" fontWeight="700" className="fill-brand">Both phases in the cytoplasm</text>
        <text x={700} y="50" fontSize="8.6" className="fill-muted-foreground">No ATP is used or produced.</text>
      </g>

      {/* oxidative band */}
      <rect x="24" y="90" width="932" height="130" rx="12" className="fill-neural-soft/30 stroke-neural/50" strokeWidth="1.2" />
      <text x="36" y="108" fontSize="8" fontWeight="800" className="fill-neural">OXIDATIVE (irreversible)</text>

      {box(60, 140, "Glucose-6-P", "abundant substrate", 110, "fill-neural-soft stroke-neural", "fill-neural")}
      <path d="M 170 162 L 286 162" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 290 162 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="176" y="130" fontSize="7.6" fontWeight="700" className="fill-brand">NADP⁺ → NADPH</text>
      <text x="176" y="198" fontSize="7.6" className="fill-foreground/80">Glucose-6-P dehydrogenase</text>

      {box(294, 140, "6-Phosphogluconate", "oxidation product", 150)}
      <path d="M 444 162 L 576 162" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 580 162 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="452" y="130" fontSize="7.6" fontWeight="700" className="fill-brand">NADP⁺ → NADPH</text>
      <text x="540" y="130" fontSize="7.6" fontWeight="700" className="fill-muted-foreground">+ CO₂</text>

      {box(584, 140, "Ribulose-5-P", "end of oxidation", 130, "fill-neural-soft stroke-neural", "fill-neural")}

      {/* isomerase: ribulose down to ribose */}
      <path d="M 649 186 L 649 254" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 649 258 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="666" y="216" fontSize="7.6" className="fill-foreground/80">Phosphopentose</text>
      <text x="666" y="228" fontSize="7.6" className="fill-foreground/80">isomerase</text>

      {/* nonoxidative band */}
      <rect x="24" y="240" width="932" height="280" rx="12" className="fill-secondary/40 stroke-border" strokeWidth="1.2" />
      <text x="36" y="258" fontSize="8" fontWeight="800" className="fill-muted-foreground">NONOXIDATIVE (reversible)</text>

      {box(584, 260, "Ribose-5-P", "ribose for nucleotides", 130, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 714 281 L 766 281" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 770 281 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {box(774, 260, "Nucleotide synthesis", "ribose-5-P destination", 176, "fill-warning-soft stroke-warning", "fill-warning")}

      {/* transketolase double-headed back to glycolysis intermediates */}
      <path d="M 584 291 L 338 291" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 334 291 l 8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 588 291 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="384" y="278" fontSize="8.2" fontWeight="800" className="fill-foreground">Transketolase, B₁</text>
      <text x="384" y="306" fontSize="7.2" className="fill-muted-foreground">(reversible carbon shuffling)</text>

      {box(200, 260, "Fructose-6-P", "glycolysis intermediate", 130)}

      {/* glycolysis link: F-6-P down to F-1,6-BP, then DHAP <-> G-3-P */}
      <path d="M 265 304 L 265 376" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 265 380 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      {box(190, 384, "Fructose 1,6-bisphosphate", "glycolysis intermediate", 170)}
      <path d="M 360 405 L 398 405" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 402 405 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {box(406, 384, "DHAP", "triose phosphate", 90)}
      <path d="M 496 405 L 556 405" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 560 405 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 492 405 l 8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {box(564, 384, "Glyceraldehyde-3-P", "glycolysis intermediate", 150)}

      {/* why-it-matters strip */}
      <g>
        <rect x="24" y="470" width="932" height="100" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="492" fontSize="9.4" fontWeight="800" className="fill-foreground">Why it matters — the two outputs</text>
        <text x="42" y="510" fontSize="7.8" className="fill-muted-foreground">NADPH for reductive reactions: glutathione reduction inside RBCs, fatty acid and cholesterol biosynthesis.</text>
        <text x="42" y="524" fontSize="7.8" className="fill-muted-foreground">Ribose for nucleotide synthesis.</text>
        <text x="42" y="542" fontSize="7.8" fontWeight="700" className="fill-foreground">Sites of highest activity: lactating mammary glands, liver, adrenal cortex (fatty acid or steroid synthesis), RBCs.</text>
        <text x="42" y="560" fontSize="7.8" className="fill-muted-foreground">Also called HMP shunt · two distinct phases (oxidative and nonoxidative), both in the cytoplasm · no ATP used or produced.</text>
      </g>
    </svg>
  );
}

export function GlutathioneRedoxCycle() {
  const w = 980;
  const h = 520;
  const enz = (x: number, label: string, l1: string, l2: string, wd: number, tone: string, textTone: string) => (
    <g key={label + x}>
      <rect x={x} y={190} width={wd} height={70} rx="11" className={tone} strokeWidth="1.5" />
      <text x={x + wd / 2} y={219} textAnchor="middle" fontSize="9.4" fontWeight="800" className={textTone}>{l1}</text>
      <text x={x + wd / 2} y={234} textAnchor="middle" fontSize="9.4" fontWeight="800" className={textTone}>{l2}</text>
      <text x={x + wd / 2} y={250} textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">{label}</text>
    </g>
  );
  const io = (x: number, y: number, label: string, strong = false) => (
    <text key={label + x + y} x={x} y={y} textAnchor="middle" fontSize={strong ? "8.8" : "8.2"} fontWeight={strong ? "800" : "700"} className={strong ? "fill-foreground" : "fill-muted-foreground"}>{label}</text>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The glutathione redox cycle: glucose-6-phosphate dehydrogenase makes NADPH (with NADP+ returning) from glucose-6-phosphate, releasing 6-phosphogluconolactone; glutathione reductase uses NADPH to reduce oxidized GSSG back to 2 reduced GSH; glutathione peroxidase uses the reduced GSH to detoxify hydrogen peroxide into 2 water, regenerating GSSG — so G6PD deficiency starves the cycle of NADPH, leaving red blood cells defenseless against oxidizing agents (fava beans, sulfonamides, nitrofurantoin, primaquine, infection) causing hemolytic anemia with Heinz bodies and bite cells" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The glutathione redox cycle — why NADPH keeps RBCs alive (redrawn from the source figure)</text>
        <text x={714} y="34" fontSize="8.6" fontWeight="700" className="fill-emergency">↓NADPH in RBCs → hemolytic anemia</text>
        <text x={714} y="50" fontSize="8.6" className="fill-muted-foreground">under oxidizing stress</text>
      </g>

      {/* top inputs / outputs */}
      {io(120, 130, "Glucose-6-P", true)}
      <path d="M 120 136 L 120 184" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 120 188 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      {io(320, 130, "NADPH", true)}
      <path d="M 190 220 L 386 220" stroke="currentColor" strokeWidth="1.6" className="text-brand" fill="none" />
      <path d="M 390 220 l -8 -3.5 v 7 z" className="fill-brand" stroke="none" />
      {io(610, 130, "2 GSH (reduced)", true)}
      <path d="M 620 224 L 696 224" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 700 224 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {io(830, 130, "H₂O₂", true)}
      <path d="M 830 136 L 830 184" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 830 188 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />

      {/* enzyme boxes */}
      {enz(60, "enzyme", "Glucose-6-P", "dehydrogenase", 190, "fill-neural-soft stroke-neural", "fill-neural")}
      {enz(390, "enzyme", "Glutathione", "reductase", 190, "fill-brand-soft stroke-brand", "fill-brand")}
      {enz(700, "enzyme", "Glutathione", "peroxidase", 200, "fill-warning-soft stroke-warning", "fill-warning")}

      {/* bottom outputs / recycle */}
      {io(120, 320, "6-phosphogluconolactone")}
      <path d="M 120 266 L 120 306" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 120 310 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      {io(320, 320, "NADP⁺")}
      <path d="M 386 246 L 194 246" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 2.5" className="text-muted-foreground" fill="none" />
      <path d="M 190 246 l 8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {io(610, 320, "GSSG (oxidized)")}
      <path d="M 700 262 L 496 262" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 492 262 l 8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {io(830, 320, "2H₂O")}
      <path d="M 830 266 L 830 306" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 830 310 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />

      {/* G6PD deficiency panel */}
      <g>
        <rect x="24" y="360" width="932" height="120" rx="12" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.3" />
        <text x="42" y="384" fontSize="9.4" fontWeight="800" className="fill-emergency">Glucose-6-phosphate dehydrogenase deficiency — the cycle starves</text>
        <text x="42" y="404" fontSize="7.8" className="fill-muted-foreground">X-linked recessive disorder · most common human enzyme deficiency · more prevalent among descendants of populations</text>
        <text x="42" y="418" fontSize="7.8" className="fill-muted-foreground">in malaria-endemic regions (eg, sub-Saharan Africa, Southeast Asia).</text>
        <text x="42" y="436" fontSize="7.8" className="fill-muted-foreground">↓NADPH in RBCs → hemolytic anemia from poor defense against oxidizing agents (eg, fava beans, sulfonamides, nitrofurantoin,</text>
        <text x="42" y="450" fontSize="7.8" className="fill-muted-foreground">primaquine). Infection (most common cause) can also precipitate hemolysis — free radicals diffuse into RBCs.</text>
        <text x="42" y="468" fontSize="7.8" fontWeight="700" className="fill-foreground">Heinz bodies (denatured globin chains) → bite cells (splenic macrophages pluck them out). &ldquo;Bite into some Heinz ketchup.&rdquo;</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E7 — Disorders of fructose + galactose metabolism (source pathway figures
// redrawn) · E8 — the polyol (sorbitol) pathway
// ---------------------------------------------------------------------------

export function FructoseMetabolismMap() {
  const w = 980;
  const h = 480;
  const box = (x: number, y: number, label: string, sub: string, wd: number, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={44} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + 19} textAnchor="middle" fontSize="9.2" fontWeight="800" className={textTone}>{label}</text>
      <text x={x + wd / 2} y={y + 33} textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Fructose metabolism: fructose phosphorylated by fructokinase with ATP to fructose-1-phosphate, which aldolase B splits into dihydroxyacetone phosphate and glyceraldehyde; dihydroxyacetone phosphate converts via triose phosphate isomerase and glyceraldehyde via triose kinase with ATP into glyceraldehyde-3-phosphate entering glycolysis, while glyceraldehyde also reduces with NADH to glycerol — fructokinase deficiency causes benign essential fructosuria, aldolase B deficiency causes hereditary fructose intolerance with fructose-1-phosphate accumulation depleting phosphate and inhibiting glycogenolysis and gluconeogenesis" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Fructose metabolism — the pathway and its two deficiency diseases (redrawn from the source figure)</text>
      </g>

      {/* pathway */}
      {box(60, 110, "Fructose", "from fruit, juice, honey, sucrose", 110, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 170 132 L 296 132" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 300 132 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="176" y="104" fontSize="7.8" fontWeight="800" className="fill-foreground">Fructokinase</text>
      <text x="176" y="152" fontSize="7.2" className="fill-muted-foreground">ATP → ADP</text>

      {box(300, 110, "Fructose-1-P", "fructose-1-phosphate", 130)}

      {/* aldolase B split */}
      <path d="M 430 120 C 470 100, 510 84, 552 74" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 556 72 l -8.5 -1 4 7.5 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 430 144 C 470 164, 510 178, 552 186" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 556 188 l -8.5 1 4 -7.5 z" className="fill-muted-foreground" stroke="none" />
      <text x="446" y="136" fontSize="7.8" fontWeight="800" className="fill-foreground">Aldolase B</text>

      {box(560, 50, "Dihydroxyacetone-P", "DHAP", 170)}
      <text x="734" y="60" fontSize="7" className="fill-muted-foreground">Triose phosphate</text>
      <text x="734" y="71" fontSize="7" className="fill-muted-foreground">isomerase</text>
      <path d="M 730 84 C 756 94, 776 104, 794 114" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 798 117 l -8.5 -2 5.5 -6 z" className="fill-muted-foreground" stroke="none" />

      {box(560, 160, "Glyceraldehyde", "half of F-1-P", 140)}
      <path d="M 700 178 C 730 172, 770 160, 794 148" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 798 145 l -8.5 2 5.5 6 z" className="fill-muted-foreground" stroke="none" />
      <text x="706" y="198" fontSize="7.2" className="fill-muted-foreground">Triose kinase · ATP → ADP</text>

      <path d="M 630 204 L 630 264" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 630 268 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="644" y="240" fontSize="7.2" className="fill-muted-foreground">NADH → NAD⁺</text>
      {box(570, 272, "Glycerol", "glycerolipid backbone", 120, "fill-secondary stroke-border")}

      {box(800, 110, "Glyceraldehyde-3-P", "enters glycolysis", 160, "fill-brand-soft stroke-brand", "fill-brand")}
      <path d="M 880 154 L 880 196" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 880 200 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      {box(800, 204, "Glycolysis", "the common road", 160, "fill-brand-soft stroke-brand", "fill-brand")}

      {/* deficiency panels */}
      <g>
        <rect x="24" y="340" width="460" height="122" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="362" fontSize="9.2" fontWeight="800" className="fill-foreground">Fructokinase deficiency — essential fructosuria</text>
        <text x="42" y="381" fontSize="7.7" className="fill-muted-foreground">Autosomal recessive · asymptomatic, benign — "fructokinase deficiency is kinder."</text>
        <text x="42" y="395" fontSize="7.7" className="fill-muted-foreground">Fructose appears in blood and urine.</text>
        <text x="42" y="409" fontSize="7.7" className="fill-muted-foreground">Urine dipstick is ⊝ (tests for glucose only); reducing sugar can be detected</text>
        <text x="42" y="423" fontSize="7.7" className="fill-muted-foreground">in the urine (nonspecific test for inborn errors of carbohydrate metabolism).</text>
        <text x="42" y="443" fontSize="7.7" fontWeight="700" className="fill-foreground">Fructose is not trapped into cells; hexokinase becomes the 1° pathway.</text>
      </g>
      <g>
        <rect x="494" y="340" width="462" height="122" rx="12" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.3" />
        <text x="512" y="362" fontSize="9.2" fontWeight="800" className="fill-emergency">Aldolase B deficiency — hereditary fructose intolerance</text>
        <text x="512" y="381" fontSize="7.7" className="fill-muted-foreground">Autosomal recessive · fructose-1-phosphate accumulates → ↓ available phosphate</text>
        <text x="512" y="395" fontSize="7.7" className="fill-muted-foreground">→ inhibition of glycogenolysis and gluconeogenesis.</text>
        <text x="512" y="414" fontSize="7.7" className="fill-muted-foreground">Hypoglycemia, jaundice, cirrhosis, vomiting — symptoms only after fruit,</text>
        <text x="512" y="428" fontSize="7.7" className="fill-muted-foreground">juice, or honey.</text>
        <text x="512" y="450" fontSize="7.7" fontWeight="700" className="fill-foreground">Treatment: ↓ intake of fructose, sucrose (glucose + fructose), and sorbitol.</text>
      </g>
    </svg>
  );
}

export function GalactoseLeloirMap() {
  const w = 980;
  const h = 500;
  const box = (x: number, y: number, label: string, sub: string, wd: number, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={44} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + 19} textAnchor="middle" fontSize="9.2" fontWeight="800" className={textTone}>{label}</text>
      <text x={x + wd / 2} y={y + 33} textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Galactose metabolism, the Leloir pathway: galactose phosphorylated by galactokinase with ATP to galactose-1-phosphate, which uridylyltransferase converts to glucose-1-phosphate using UDP-glucose and releasing UDP-galactose, regenerated to UDP-glucose by 4-epimerase; glucose-1-phosphate feeds glycolysis and glycogenesis; alternatively aldose reductase converts galactose to galactitol — galactokinase deficiency is relatively mild with galactose in blood and urine and infantile cataracts, while classic galactosemia from uridylyltransferase deficiency causes toxic accumulation with failure to thrive, jaundice, hepatomegaly, cataracts, intellectual disability, and E coli sepsis predisposition" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Galactose metabolism — the Leloir pathway and the aldose-reductase escape (redrawn)</text>
      </g>

      {/* main row */}
      {box(60, 120, "Galactose", "from lactose (milk)", 110, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 170 142 L 296 142" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 300 142 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="176" y="114" fontSize="7.8" fontWeight="800" className="fill-foreground">Galactokinase</text>
      <text x="176" y="162" fontSize="7.2" className="fill-muted-foreground">ATP → ADP</text>

      {box(300, 120, "Galactose-1-P", "galactose-1-phosphate", 140)}

      <path d="M 440 142 L 616 142" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 620 142 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="462" y="114" fontSize="7.8" fontWeight="800" className="fill-foreground">Uridylyltransferase</text>
      <text x="462" y="162" fontSize="7.2" className="fill-muted-foreground">UDP-Glu → UDP-Gal (the uridine swap)</text>

      {box(620, 120, "Glucose-1-P", "glucose-1-phosphate", 130, "fill-brand-soft stroke-brand", "fill-brand")}
      <path d="M 750 142 L 796 142" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 800 142 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {box(800, 120, "Glycolysis /", "glycogenesis", 156, "fill-brand-soft stroke-brand", "fill-brand")}

      {/* UDP recycle row */}
      {box(520, 240, "UDP-Glu", "UDP-glucose", 110)}
      <path d="M 575 236 C 545 214, 500 190, 470 174" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" className="text-muted-foreground" fill="none" />
      <path d="M 466 172 l 6 6.5 2.5 -8.5 z" className="fill-muted-foreground" stroke="none" />
      <text x="500" y="222" fontSize="7" className="fill-muted-foreground">donates uridine</text>
      <path d="M 630 172 C 660 190, 690 214, 690 236" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" className="text-muted-foreground" fill="none" />
      <path d="M 692 240 l 2 -8.5 -8 3 z" className="fill-muted-foreground" stroke="none" />
      <text x="662" y="222" fontSize="7" className="fill-muted-foreground">UDP-Gal out</text>
      {box(640, 240, "UDP-Gal", "UDP-galactose", 110)}
      <path d="M 640 262 L 634 262" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 756 262 L 764 262" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <text x="600" y="290" fontSize="7.2" className="fill-muted-foreground">4-Epimerase regenerates UDP-Glu (dashed recycle)</text>
      <path d="M 634 252 C 600 300, 560 300, 530 254" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" className="text-muted-foreground" fill="none" />
      <path d="M 528 250 l 1 8.5 7.5 -4 z" className="fill-muted-foreground" stroke="none" />

      {/* aldose reductase escape */}
      <path d="M 115 164 L 115 234" stroke="currentColor" strokeWidth="1.6" className="text-emergency" fill="none" />
      <path d="M 115 238 l -3.5 -8 h 7 z" className="fill-emergency" stroke="none" />
      <text x="130" y="200" fontSize="7.8" fontWeight="700" className="fill-emergency">Aldose reductase</text>
      {box(60, 242, "Galactitol", "osmotically active dead end", 110, "fill-emergency-soft stroke-emergency", "fill-emergency")}

      {/* deficiency panels */}
      <g>
        <rect x="24" y="330" width="460" height="150" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="352" fontSize="9.2" fontWeight="800" className="fill-foreground">Galactokinase deficiency — the kinder one</text>
        <text x="42" y="371" fontSize="7.7" className="fill-muted-foreground">Autosomal recessive · relatively mild/benign condition ("galactokinase</text>
        <text x="42" y="385" fontSize="7.7" className="fill-muted-foreground">deficiency is kinder") · galactitol accumulates if diet has galactose.</text>
        <text x="42" y="404" fontSize="7.7" className="fill-muted-foreground">Galactose appears in blood (galactosemia) and urine (galactosuria);</text>
        <text x="42" y="418" fontSize="7.7" className="fill-muted-foreground">infantile cataracts — may present as failure to track objects or develop</text>
        <text x="42" y="432" fontSize="7.7" className="fill-muted-foreground">social smile.</text>
        <text x="42" y="460" fontSize="7.7" fontWeight="700" className="fill-foreground">Treatment: exclude galactose and lactose (galactose + glucose) from diet.</text>
      </g>
      <g>
        <rect x="494" y="330" width="462" height="150" rx="12" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.3" />
        <text x="512" y="352" fontSize="9.2" fontWeight="800" className="fill-emergency">Classic galactosemia — uridylyltransferase deficiency</text>
        <text x="512" y="371" fontSize="7.7" className="fill-muted-foreground">Autosomal recessive · damage caused by accumulation of toxic substances</text>
        <text x="512" y="385" fontSize="7.7" className="fill-muted-foreground">(eg, galactitol) · symptoms start when infant is fed formula or breast milk.</text>
        <text x="512" y="404" fontSize="7.7" className="fill-muted-foreground">Failure to thrive, jaundice, hepatomegaly, infantile cataracts (galactitol</text>
        <text x="512" y="418" fontSize="7.7" className="fill-muted-foreground">deposition in eye lens), intellectual disability.</text>
        <text x="512" y="437" fontSize="7.7" className="fill-muted-foreground">Can predispose neonates to E coli sepsis.</text>
        <text x="512" y="460" fontSize="7.7" fontWeight="700" className="fill-foreground">Treatment: exclude galactose and lactose (galactose + glucose) from diet.</text>
      </g>
    </svg>
  );
}

export function PolyolPathwayMap() {
  const w = 980;
  const h = 430;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The polyol or sorbitol pathway: aldose reductase with NADPH converts glucose to sorbitol, and sorbitol dehydrogenase with NAD+ converts sorbitol to fructose — an alternative method of trapping glucose in the cell; liver, ovaries, and seminal vesicles have both enzymes and lose sorbitol, while the lens has primarily aldose reductase and the retina, kidneys, and Schwann cells (LARKS) have only aldose reductase, so chronic hyperglycemia in diabetes causes intracellular sorbitol accumulation with osmotic damage: cataracts, retinopathy, and peripheral neuropathy; high galactose also converts to osmotically active galactitol via aldose reductase" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The polyol (sorbitol) pathway — glucose trapped as its alcohol (redrawn from the source figure)</text>
      </g>

      {/* pathway */}
      <rect x="80" y="120" width="150" height="48" rx="11" className="fill-warning-soft stroke-warning" strokeWidth="1.5" />
      <text x="155" y="141" textAnchor="middle" fontSize="9.6" fontWeight="800" className="fill-warning">Glucose</text>
      <text x="155" y="156" textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">chronic hyperglycemia in diabetes</text>

      <path d="M 230 144 L 396 144" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 400 144 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="252" y="116" fontSize="7.8" fontWeight="800" className="fill-foreground">Aldose reductase</text>
      <text x="252" y="168" fontSize="7.2" className="fill-muted-foreground">NADPH</text>

      <rect x="402" y="120" width="150" height="48" rx="11" className="fill-secondary stroke-border" strokeWidth="1.5" />
      <text x="477" y="141" textAnchor="middle" fontSize="9.6" fontWeight="800" className="fill-foreground">Sorbitol</text>
      <text x="477" y="156" textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">osmotically active alcohol</text>

      <path d="M 552 144 L 716 144" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 720 144 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="574" y="116" fontSize="7.8" fontWeight="800" className="fill-foreground">Sorbitol dehydrogenase</text>
      <text x="574" y="168" fontSize="7.2" className="fill-muted-foreground">NAD⁺</text>

      <rect x="722" y="120" width="150" height="48" rx="11" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
      <text x="797" y="141" textAnchor="middle" fontSize="9.6" fontWeight="800" className="fill-brand">Fructose</text>
      <text x="797" y="156" textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">in tissues with both enzymes</text>

      {/* tissue panels */}
      <g>
        <rect x="24" y="210" width="460" height="120" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="232" fontSize="9.2" fontWeight="800" className="fill-foreground">Tissues with BOTH enzymes — they lose sorbitol</text>
        <text x="42" y="251" fontSize="7.7" className="fill-muted-foreground">Liver, ovaries, and seminal vesicles have both aldose reductase and</text>
        <text x="42" y="265" fontSize="7.7" className="fill-muted-foreground">sorbitol dehydrogenase — sorbitol passes through to fructose.</text>
        <text x="42" y="290" fontSize="7.7" fontWeight="700" className="fill-foreground">An alternative method of trapping glucose in the cell is to convert it</text>
        <text x="42" y="304" fontSize="7.7" fontWeight="700" className="fill-foreground">to its alcohol counterpart, sorbitol, via aldose reductase.</text>
      </g>
      <g>
        <rect x="494" y="210" width="462" height="120" rx="12" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.3" />
        <text x="512" y="232" fontSize="9.2" fontWeight="800" className="fill-emergency">LARKS — only aldose reductase, no way out</text>
        <text x="512" y="251" fontSize="7.7" className="fill-muted-foreground">Lens has primarily aldose reductase. Retina, Kidneys, and Schwann cells</text>
        <text x="512" y="265" fontSize="7.7" className="fill-muted-foreground">have only aldose reductase (LARKS).</text>
        <text x="512" y="284" fontSize="7.7" className="fill-muted-foreground">Insufficient sorbitol dehydrogenase → intracellular sorbitol accumulation →</text>
        <text x="512" y="298" fontSize="7.7" className="fill-muted-foreground">osmotic damage: cataracts, retinopathy, and peripheral neuropathy</text>
        <text x="512" y="312" fontSize="7.7" className="fill-muted-foreground">seen with chronic hyperglycemia in diabetes.</text>
      </g>

      <text x="24" y="366" fontSize="8.2" className="fill-muted-foreground">High blood levels of galactose also result in conversion to the osmotically active galactitol via aldose reductase — the same enzyme, the same osmotic trouble.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E9 — Amino acids: derivatives map + catecholamine synthesis with tyrosine
// catabolism (both p. 81 source figures redrawn)
// ---------------------------------------------------------------------------

export function AminoAcidDerivativesMap() {
  const w = 980;
  const h = 640;
  const aa = (x: number, y: number, label: string, sub: string, wd: number) => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={42} rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + 19} textAnchor="middle" fontSize="9.2" fontWeight="800" className="fill-warning">{label}</text>
      <text x={x + wd / 2} y={y + 33} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  const der = (x: number, y: number, label: string, wd: number, tone = "fill-brand-soft stroke-brand", textTone = "fill-brand") => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={36} rx="9" className={tone} strokeWidth="1.3" />
      <text x={x + wd / 2} y={y + 23} textAnchor="middle" fontSize="8.6" fontWeight="800" className={textTone}>{label}</text>
    </g>
  );
  const arr = (d: string, m: string) => (
    <g key={d}>
      <path d={d} fill="none" strokeWidth="1.5" stroke="currentColor" className="text-muted-foreground" />
      <path d={m} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Amino acid derivatives map: phenylalanine to tyrosine with BH4, tyrosine to thyroxine and to dopa, dopa to dopamine with B6, dopamine to norepinephrine with vitamin C, norepinephrine to epinephrine with SAM, dopa to melanin, tryptophan to serotonin with B6 and BH4 then melatonin, tryptophan to niacin with B2 and B6 then NAD+ and NADP+, histidine to histamine with B6, glycine to porphyrin with B6 then heme, glutamate to GABA with B6 and to glutathione, arginine to creatine, urea, and nitric oxide with BH4 — BH4 is tetrahydrobiopterin" className="min-w-[940px]">
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Amino acid derivatives — what each precursor becomes (redrawn from the source figure)</text>
        <text x={710} y="34" fontSize="8.4" className="fill-muted-foreground">BH4 = tetrahydrobiopterin · cofactor labels</text>
        <text x={710} y="50" fontSize="8.4" className="fill-muted-foreground">as printed on each arrow</text>
      </g>

      {/* catecholamine arm */}
      {aa(50, 100, "Phenylalanine", "essential precursor", 120)}
      {arr("M 170 121 L 240 121", "M 244 121 l -8 -3.5 v 7 z")}
      <text x="182" y="112" fontSize="7" fontWeight="700" className="fill-brand">BH₄</text>
      {aa(248, 100, "Tyrosine", "the hub amino acid", 100)}
      {arr("M 348 121 L 420 121", "M 424 121 l -8 -3.5 v 7 z")}
      <text x="356" y="112" fontSize="7" fontWeight="700" className="fill-brand">BH₄</text>
      {der(428, 103, "Dopa", 70)}
      {arr("M 498 121 L 560 121", "M 564 121 l -8 -3.5 v 7 z")}
      <text x="506" y="112" fontSize="7" fontWeight="700" className="fill-brand">B₆</text>
      {der(568, 103, "Dopamine", 92)}
      {arr("M 660 121 L 720 121", "M 724 121 l -8 -3.5 v 7 z")}
      <text x="664" y="112" fontSize="7" fontWeight="700" className="fill-brand">Vitamin C</text>
      {der(728, 103, "NE", 60)}
      {arr("M 788 121 L 848 121", "M 852 121 l -8 -3.5 v 7 z")}
      <text x="792" y="112" fontSize="7" fontWeight="700" className="fill-brand">SAM</text>
      {der(856, 103, "Epi", 62)}
      {/* thyroxine branch */}
      {arr("M 298 98 C 298 80, 298 72, 298 66", "M 298 62 l -3.5 8 h 7 z")}
      <text x="308" y="76" fontSize="7" fontWeight="700" className="fill-brand">BH₄</text>
      {der(253, 26, "Thyroxine", 90)}
      {/* melanin branch */}
      {arr("M 463 139 C 463 158, 463 168, 463 176", "M 463 180 l -3.5 -8 h 7 z")}
      {der(418, 182, "Melanin", 90)}

      {/* tryptophan arm */}
      {aa(50, 250, "Tryptophan", "essential precursor", 120)}
      {arr("M 170 271 L 240 271", "M 244 271 l -8 -3.5 v 7 z")}
      <text x="182" y="262" fontSize="7" fontWeight="700" className="fill-brand">B₆, BH₄</text>
      {der(248, 253, "Serotonin", 92)}
      {arr("M 340 271 L 400 271", "M 404 271 l -8 -3.5 v 7 z")}
      {der(408, 253, "Melatonin", 92)}
      {arr("M 170 292 C 200 302, 220 308, 240 312", "M 244 314 l -8 -2 4 -7 z")}
      <text x="186" y="316" fontSize="7" fontWeight="700" className="fill-brand">B₂, B₆</text>
      {der(248, 296, "Niacin", 76)}
      {arr("M 324 314 L 396 314", "M 400 314 l -8 -3.5 v 7 z")}
      {der(404, 296, "NAD⁺ / NADP⁺", 108)}

      {/* histidine arm */}
      {aa(50, 390, "Histidine", "basic amino acid", 110)}
      {arr("M 160 411 L 230 411", "M 234 411 l -8 -3.5 v 7 z")}
      <text x="174" y="402" fontSize="7" fontWeight="700" className="fill-brand">B₆</text>
      {der(238, 393, "Histamine", 90)}

      {/* glycine arm */}
      {aa(50, 460, "Glycine", "inhibitory, simplest", 100)}
      {arr("M 150 481 L 230 481", "M 234 481 l -8 -3.5 v 7 z")}
      <text x="164" y="472" fontSize="7" fontWeight="700" className="fill-brand">B₆</text>
      {der(238, 463, "Porphyrin", 88)}
      {arr("M 326 481 L 396 481", "M 400 481 l -8 -3.5 v 7 z")}
      {der(404, 463, "Heme", 66)}

      {/* glutamate arm */}
      {aa(50, 530, "Glutamate", "the nitrogen hub", 110)}
      {arr("M 160 551 L 230 551", "M 234 551 l -8 -3.5 v 7 z")}
      <text x="174" y="542" fontSize="7" fontWeight="700" className="fill-brand">B₆</text>
      {der(238, 533, "GABA", 66)}
      {arr("M 160 566 C 200 578, 220 582, 230 584", "M 234 586 l -8 -2 4 -7 z")}
      {der(238, 568, "Glutathione", 96)}

      {/* arginine arm */}
      {aa(640, 390, "Arginine", "urea cycle resident", 110)}
      {arr("M 750 400 C 790 390, 810 382, 830 374", "M 834 372 l -7.5 3 6 5 z")}
      {der(838, 356, "Creatine", 90)}
      {arr("M 750 411 L 826 411", "M 830 411 l -8 -3.5 v 7 z")}
      {der(838, 393, "Urea", 62)}
      {arr("M 750 424 C 790 434, 810 440, 828 446", "M 832 448 l -8 -1 4.5 -6.5 z")}
      <text x="762" y="446" fontSize="7" fontWeight="700" className="fill-brand">BH₄</text>
      {der(838, 432, "Nitric oxide", 104)}

      <text x="24" y="628" fontSize="8.4" className="fill-muted-foreground">Only L-amino acids are found in proteins · cofactor placements exactly as printed: BH₄ on phenylalanine→tyrosine, tyrosine→thyroxine/dopa, and arginine→NO; B₆ on dopa→dopamine, tryptophan→serotonin, histidine→histamine, glycine→porphyrin, glutamate→GABA.</text>
    </svg>
  );
}

export function CatecholamineSynthesisMap() {
  const w = 980;
  const h = 620;
  const box = (x: number, y: number, label: string, sub: string, wd: number, tone = "fill-brand-soft stroke-brand", textTone = "fill-brand") => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={44} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + 19} textAnchor="middle" fontSize="9.2" fontWeight="800" className={textTone}>{label}</text>
      <text x={x + wd / 2} y={y + 33} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Catecholamine synthesis and tyrosine catabolism: phenylalanine converted by phenylalanine hydroxylase with BH4 to tyrosine (phenylketonuria blocks this step), tyrosine by tyrosine hydroxylase with BH4 the rate-limiting step to L-DOPA (dihydroxyphenylalanine), L-DOPA by DOPA decarboxylase with B6 to dopamine (carbidopa inhibits this enzyme), dopamine by dopamine beta-hydroxylase with vitamin C to norepinephrine, norepinephrine by phenylethanolamine-N-methyltransferase with SAM and cortisol to epinephrine; tyrosine also becomes melanin via tyrosinase (albinism blocks) and catabolizes via homogentisic acid (alkaptonuria blocks homogentisate oxidase) through maleylacetoacetic acid to fumarate entering the TCA cycle; degradation by catechol-O-methyltransferase and monoamine oxidase yields metanephrine, normetanephrine, vanillylmandelic acid, and homovanillic acid" className="min-w-[940px]">
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Catecholamine synthesis &amp; tyrosine catabolism — with the disease blocks (redrawn)</text>
        <text x={718} y="34" fontSize="8.4" className="fill-muted-foreground">Degradation: COMT + MAO → metanephrine,</text>
        <text x={718} y="50" fontSize="8.4" className="fill-muted-foreground">normetanephrine, VMA, homovanillic acid</text>
      </g>

      {/* main synthetic chain */}
      {box(50, 110, "Phenylalanine", "essential", 120, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 170 132 L 250 132" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 254 132 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="178" y="122" fontSize="7.2" fontWeight="700" className="fill-foreground">Phenylalanine</text>
      <text x="178" y="150" fontSize="7.2" className="fill-muted-foreground">hydroxylase · BH₄</text>
      {box(258, 110, "Tyrosine", "the branch point", 100, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 358 132 L 440 132" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 444 132 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="362" y="122" fontSize="7.2" fontWeight="700" className="fill-foreground">Tyrosine hydroxylase*</text>
      <text x="362" y="150" fontSize="7.2" className="fill-muted-foreground">BH₄ · rate-limiting</text>
      {box(448, 110, "L-DOPA", "dihydroxyphenylalanine", 90)}
      <path d="M 538 132 L 610 132" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 614 132 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="542" y="122" fontSize="7.2" fontWeight="700" className="fill-foreground">DOPA decarboxylase</text>
      <text x="542" y="150" fontSize="7.2" className="fill-muted-foreground">B₆ · ⊟ carbidopa</text>
      {box(618, 110, "Dopamine", "the first catecholamine", 100)}
      <path d="M 668 154 L 668 196" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 668 200 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="678" y="180" fontSize="7.2" fontWeight="700" className="fill-foreground">Dopamine β-hydroxylase</text>
      <text x="678" y="192" fontSize="7.2" className="fill-muted-foreground">Vitamin C</text>
      {box(618, 204, "Norepinephrine", "NE", 100)}
      <path d="M 718 226 L 780 226" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 784 226 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="722" y="216" fontSize="7.2" fontWeight="700" className="fill-foreground">PNMT · SAM</text>
      <text x="722" y="244" fontSize="7.2" className="fill-muted-foreground">cortisol-induced</text>
      {box(788, 204, "Epinephrine", "Epi", 100)}

      {/* melanin branch */}
      <path d="M 308 154 C 308 176, 308 188, 308 198" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 308 202 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="318" y="182" fontSize="7.2" fontWeight="700" className="fill-foreground">Tyrosinase</text>
      {box(260, 206, "Melanin", "pigment", 96, "fill-secondary stroke-border", "fill-foreground")}
      <text x="368" y="238" fontSize="7.4" fontWeight="700" className="fill-emergency">⊟ Tyrosinase = albinism</text>

      {/* catabolic branch */}
      <path d="M 308 250 C 308 272, 308 284, 308 294" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 308 298 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
      {box(260, 302, "Homogentisic acid", "tyrosine catabolite", 130, "fill-secondary stroke-border", "fill-foreground")}
      <path d="M 390 324 L 460 324" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 464 324 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="398" y="314" fontSize="7.2" fontWeight="700" className="fill-foreground">Homogentisate oxidase</text>
      {box(468, 302, "Maleylacetoacetic acid", "", 150, "fill-secondary stroke-border", "fill-foreground")}
      <path d="M 618 324 L 688 324" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 692 324 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {box(696, 302, "Fumarate", "→ TCA cycle", 110, "fill-brand-soft stroke-brand", "fill-brand")}
      <text x="398" y="356" fontSize="7.4" fontWeight="700" className="fill-emergency">⊟ Homogentisate oxidase = alkaptonuria</text>
      <text x="640" y="356" fontSize="7.4" className="fill-muted-foreground">(fumarate + acetoacetate feed</text>
      <text x="640" y="368" fontSize="7.4" className="fill-muted-foreground">energy and ketone pools)</text>

      {/* degradation strip */}
      <g>
        <rect x="24" y="420" width="932" height="88" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="444" fontSize="9.2" fontWeight="800" className="fill-foreground">Degradation — catechol-O-methyltransferase (COMT) and monoamine oxidase (MAO)</text>
        <text x="42" y="466" fontSize="7.8" className="fill-muted-foreground">Epinephrine → metanephrine · Norepinephrine → normetanephrine (COMT, then MAO)</text>
        <text x="42" y="482" fontSize="7.8" className="fill-muted-foreground">Vanillylmandelic acid (VMA) — the NE/epi end product (↑ in pheochromocytoma)</text>
        <text x="42" y="498" fontSize="7.8" className="fill-muted-foreground">Dopamine → homovanillic acid (HVA) — the dopamine end product (↓ in Parkinson disease)</text>
      </g>

      {/* PKU + mnemonic strip */}
      <g>
        <rect x="24" y="524" width="932" height="60" rx="12" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.3" />
        <text x="42" y="546" fontSize="9" fontWeight="800" className="fill-emergency">⊟ Phenylalanine hydroxylase = phenylketonuria — “Pure true Love does not exist.”</text>
        <text x="42" y="566" fontSize="7.8" className="fill-muted-foreground">(Phenylalanine hydroxylase, Tyrosine hydroxylase, Lysine hydroxylase — the enzymes that do not exist in PKU's world of absent phenylalanine metabolism; tyrosine becomes essential.)</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E10 — Urea cycle (mitochondria↔cytosol wheel redrawn) + the alanine
// ammonia shuttle (muscle↔liver adaptation)
// ---------------------------------------------------------------------------

export function UreaCycleMap() {
  const w = 980;
  const h = 620;
  const met = (x: number, y: number, label: string, sub: string, wd: number, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={42} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + 19} textAnchor="middle" fontSize="9.2" fontWeight="800" className={textTone}>{label}</text>
      <text x={x + wd / 2} y={y + 33} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The urea cycle: in the mitochondria, carbamoyl phosphate synthetase I (the rate-limiting step, activated by N-acetylglutamate) combines NH3 with CO2 and 2 ATP to form carbamoyl phosphate, which ornithine transcarbamylase joins with ornithine to make citrulline; citrulline exits to the cytosol where argininosuccinate synthetase adds aspartate (using ATP, releasing AMP plus PPi) to form argininosuccinate, argininosuccinate lyase splits it into arginine plus fumarate, and arginase cleaves arginine into urea plus ornithine, with ornithine re-entering the mitochondrium; ornithine transcarbamylase deficiency is X-linked and shunts carbamoyl phosphate to orotic acid" className="min-w-[940px]">
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The urea cycle — nitrogen's exit route (redrawn from the source wheel)</text>
        <text x={640} y="34" fontSize="8.4" className="fill-muted-foreground">Ordinarily, Careless Crappers Are Also</text>
        <text x={640} y="50" fontSize="8.4" className="fill-muted-foreground">Frivolous About Urination. (enzyme order)</text>
      </g>

      {/* mitochondria band */}
      <rect x="24" y="90" width="932" height="180" rx="12" className="fill-neural-soft/30 stroke-neural/50" strokeWidth="1.2" />
      <text x="36" y="108" fontSize="8" fontWeight="800" className="fill-neural">MITOCHONDRIA</text>

      {met(60, 140, "NH₃ + CO₂", "from amino acid nitrogen", 130, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 190 161 L 250 161" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 254 161 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="196" y="150" fontSize="7.4" fontWeight="800" className="fill-foreground">CPS I*</text>
      <text x="196" y="180" fontSize="7" className="fill-muted-foreground">2 ATP · NAG ⊕</text>
      <text x="96" y="212" fontSize="7" className="fill-muted-foreground">⊕ N-acetylglutamate = allosteric activator</text>

      {met(258, 140, "Carbamoyl phosphate", "2 ADP + Pi out", 150, "fill-neural-soft stroke-neural", "fill-neural")}
      <path d="M 408 161 L 460 161" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 464 161 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="414" y="150" fontSize="7.4" fontWeight="800" className="fill-foreground">OTC</text>
      <text x="414" y="180" fontSize="7" className="fill-emergency">X-linked ⊟</text>

      {met(468, 140, "Citrulline", "+ ornithine in", 110, "fill-neural-soft stroke-neural", "fill-neural")}
      <text x="480" y="212" fontSize="7" className="fill-muted-foreground">*Rate-limiting step: CPS I</text>

      {/* cytosol band */}
      <rect x="24" y="290" width="932" height="180" rx="12" className="fill-secondary/40 stroke-border" strokeWidth="1.2" />
      <text x="36" y="308" fontSize="8" fontWeight="800" className="fill-muted-foreground">CYTOSOL (LIVER)</text>

      <path d="M 523 182 C 523 220, 523 250, 523 286" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 523 290 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />

      {met(60, 330, "Aspartate", "the 2nd nitrogen", 110, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 170 351 L 220 351" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 224 351 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      {met(228, 330, "Argininosuccinate", "ASS · ATP → AMP + PPi", 150)}
      <path d="M 378 351 L 430 351" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 434 351 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x="382" y="340" fontSize="7.4" fontWeight="800" className="fill-foreground">ASL</text>
      <text x="382" y="372" fontSize="7" className="fill-muted-foreground">fumarate out</text>
      {met(438, 330, "Arginine", "to arginase", 110)}

      <path d="M 468 330 C 468 300, 520 280, 560 270" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" className="text-muted-foreground" fill="none" />
      <path d="M 564 268 l -8 -1 4 -7 z" className="fill-muted-foreground" stroke="none" />

      {/* outputs */}
      {met(60, 430, "Urea", "→ kidney → urine", 110, "fill-brand-soft stroke-brand", "fill-brand")}
      {met(230, 430, "Ornithine", "→ back into mitochondria", 130, "fill-neural-soft stroke-neural", "fill-neural")}
      <path d="M 493 372 C 493 392, 330 400, 310 404" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" className="text-muted-foreground" fill="none" />
      <path d="M 306 406 l 8 -1.5 -4 -7 z" className="fill-muted-foreground" stroke="none" />
      <text x="360" y="398" fontSize="7" className="fill-muted-foreground">ornithine regenerated — the wheel turns</text>
      <path d="M 295 430 C 200 430, 170 430, 174 430" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" className="text-muted-foreground" fill="none" />

      <text x="24" y="500" fontSize="8.2" className="fill-muted-foreground">Amino acid catabolism generates common metabolites (eg, pyruvate, acetyl-CoA) serving as metabolic fuels; excess nitrogen is converted to urea and excreted by the kidneys.</text>
      <text x="24" y="518" fontSize="8.2" className="fill-muted-foreground">Overall: NH₃ + CO₂ + aspartate (2 N) + 3 ATP → urea + fumarate + 2 ADP + AMP + PPi · CPS I rate-limiting, ⊕ N-acetylglutamate.</text>
      <text x="24" y="540" fontSize="8.2" fontWeight="700" className="fill-emergency">OTC deficiency (X-linked recessive): excess carbamoyl phosphate → orotic acid (vs CPS I deficiency, which makes none).</text>
      <text x="24" y="558" fontSize="8.2" className="fill-muted-foreground">Other urea-cycle enzyme deficiencies are autosomal recessive; all can present with hyperammonemia.</text>
    </svg>
  );
}

export function AlanineGlucoseShuttle() {
  const w = 980;
  const h = 440;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Transport of ammonia by alanine: in muscle, amino acids transfer their NH3 to alpha-ketoglutarate making glutamate, which passes nitrogen to pyruvate (from glycolysis) forming alanine via ALT; alanine travels in blood to the liver, where ALT reverses the exchange giving pyruvate and glutamate — pyruvate feeds gluconeogenesis making glucose, which returns to muscle, while the nitrogen enters the urea cycle as urea; alongside it, the Cori cycle carries lactate from muscle to liver for the same glucose return" className="min-w-[940px]">
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Transport of ammonia by alanine — the Cahill cycle (beside the Cori cycle)</text>
      </g>

      {/* muscle */}
      <g>
        <rect x="24" y="90" width="300" height="240" rx="14" className="fill-neural-soft/30 stroke-neural/50" strokeWidth="1.3" />
        <text x="42" y="112" fontSize="9" fontWeight="800" className="fill-neural">MUSCLE</text>
        <text x="42" y="140" fontSize="7.6" className="fill-muted-foreground">Amino acids (NH₃)</text>
        <path d="M 120 146 L 120 170" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="none" />
        <path d="M 120 174 l -3.5 -7 h 7 z" className="fill-muted-foreground" stroke="none" />
        <text x="130" y="164" fontSize="7" className="fill-muted-foreground">α-ketoglutarate</text>
        <text x="130" y="176" fontSize="7" className="fill-muted-foreground">→ glutamate (NH₃)</text>
        <text x="42" y="216" fontSize="7.6" fontWeight="700" className="fill-foreground">ALT (B6)</text>
        <text x="42" y="234" fontSize="7.2" className="fill-muted-foreground">pyruvate ⇄ alanine:</text>
        <text x="42" y="248" fontSize="7.2" className="fill-muted-foreground">glutamate hands its NH₃ to pyruvate,</text>
        <text x="42" y="262" fontSize="7.2" className="fill-muted-foreground">making alanine + α-ketoglutarate</text>
        <text x="42" y="296" fontSize="7.4" fontWeight="700" className="fill-neural">Pyruvate (from glycolysis) → alanine out</text>
        <text x="42" y="316" fontSize="7.4" className="fill-muted-foreground">Lactate also leaves (the Cori cycle's cargo)</text>
      </g>

      {/* blood */}
      <g>
        <rect x="344" y="90" width="260" height="240" rx="14" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="362" y="112" fontSize="9" fontWeight="800" className="fill-foreground">BLOOD</text>
        <text x="362" y="150" fontSize="8" fontWeight="700" className="fill-foreground">Alanine (NH₃)</text>
        <path d="M 470 160 L 470 200" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
        <path d="M 470 204 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />
        <text x="482" y="186" fontSize="7.2" className="fill-muted-foreground">to the liver</text>
        <path d="M 430 240 L 430 200" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
        <path d="M 430 196 l -3.5 8 h 7 z" className="fill-muted-foreground" stroke="none" />
        <text x="382" y="222" fontSize="7.2" className="fill-muted-foreground">glucose returns</text>
        <text x="362" y="266" fontSize="7.4" className="fill-muted-foreground">Lactate travels the same way</text>
        <text x="362" y="282" fontSize="7.4" className="fill-muted-foreground">in the Cori cycle (lactate ⇄ glucose)</text>
      </g>

      {/* liver */}
      <g>
        <rect x="624" y="90" width="332" height="240" rx="14" className="fill-brand-soft/30 stroke-brand/50" strokeWidth="1.3" />
        <text x="642" y="112" fontSize="9" fontWeight="800" className="fill-brand">LIVER</text>
        <text x="642" y="140" fontSize="7.6" fontWeight="700" className="fill-foreground">ALT (B6) runs in reverse</text>
        <text x="642" y="158" fontSize="7.2" className="fill-muted-foreground">alanine → pyruvate + glutamate (NH₃)</text>
        <text x="642" y="186" fontSize="7.4" className="fill-muted-foreground">Pyruvate → gluconeogenesis → glucose</text>
        <text x="642" y="202" fontSize="7.4" className="fill-muted-foreground">(glucose returns to muscle — Cahill cycle)</text>
        <text x="642" y="230" fontSize="7.4" className="fill-muted-foreground">Glutamate NH₃ → urea cycle → urea → kidney</text>
        <text x="642" y="258" fontSize="7.4" className="fill-muted-foreground">Lactate → glucose too (Cori cycle)</text>
        <text x="642" y="296" fontSize="7.6" fontWeight="700" className="fill-brand">The liver pays the ATP bill for both cycles</text>
      </g>

      <text x="24" y="366" fontSize="8.2" className="fill-muted-foreground">The alanine (Cahill) cycle carries muscle nitrogen to the liver as safe carbon-bound alanine; the Cori cycle carries lactate; both return glucose to muscle.</text>
      <text x="24" y="384" fontSize="8.2" fontWeight="700" className="fill-emergency">Hyperammonemia breaks this economy: ↑NH₃ → CNS toxicity — asterixis, slurring of speech, somnolence, vomiting, cerebral edema, blurring of vision.</text>
      <text x="24" y="402" fontSize="8.2" className="fill-muted-foreground">Can be acquired (eg, liver disease) or hereditary (eg, urea cycle enzyme deficiencies). Treatment: limit protein in diet; lactulose, rifaximin, benzoate/phenylacetate/phenylbutyrate.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E11 — Aminoacidopathies: the phenylalanine pathway (PKU + BH4 recycling),
// the methionine–homocysteine economy (homocystinuria's four blocks), the
// organic-acidemia propionate highway, and the ochronosis photo-sign
// (p. 82–83 figures redrawn)
// ---------------------------------------------------------------------------

export function PhenylalaninePathwayMap() {
  const w = 980;
  const h = 700;
  const box = (x: number, y: number, label: string, sub: string, wd: number, ht: number, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={ht} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + (ht > 40 ? 20 : ht / 2 + 3.5)} textAnchor="middle" fontSize="9.2" fontWeight="800" className={textTone}>{label}</text>
      {ht > 40 && <text x={x + wd / 2} y={y + 34} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The phenylalanine pathway with the phenylketonuria block: dietary protein, aspartame, and endogenous protein supply phenylalanine, which phenylalanine hydroxylase converts to tyrosine using BH4; tyrosine feeds thyroxine, dopamine, melanin, and norepinephrine-epinephrine; blocked phenylalanine hydroxylase (PKU, autosomal recessive) diverts phenylalanine to phenyl ketones (phenylacetate, phenyllactate, phenylpyruvate) and makes tyrosine essential; BH4 is recycled from BH2 by dihydropteridine reductase using NADH plus H+ to NAD+; BH4 deficiency or dihydropteridine reductase deficiency also raise phenylalanine" className="min-w-[940px]">
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Phenylalanine metabolism — the PKU bottleneck and the BH₄ loop (redrawn)</text>
        <text x={640} y="34" fontSize="8.4" className="fill-muted-foreground">Tyrosine becomes essential when PAH falls</text>
        <text x={640} y="50" fontSize="8.4" className="fill-muted-foreground">Aspartame → phenylalanine — avoid in PKU</text>
      </g>

      {/* phenyl ketones branch */}
      {box(230, 84, "Phenyl ketones", "phenylacetate · phenyllactate · phenylpyruvate", 220, 42, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 340 168 L 340 132" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 340 128 l -3.5 8 h 7 z" className="fill-muted-foreground" stroke="none" />
      <text x={350} y={148} fontSize="7" className="fill-muted-foreground">↑ phenylalanine → ↑ phenyl ketones</text>

      {/* inputs */}
      {box(24, 120, "Dietary protein", "", 128, 30, "fill-card stroke-border")}
      {box(24, 164, "Aspartame", "", 128, 30, "fill-card stroke-border")}
      {box(24, 208, "Endogenous protein", "", 128, 30, "fill-card stroke-border")}
      <path d="M 152 135 C 180 135, 195 165, 213 181" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="none" />
      <path d="M 217 184 l -8.5 -1 4.5 -7 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 152 179 L 213 191" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="none" />
      <path d="M 217 192 l -8.5 -0.5 3.8 -7 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 152 223 C 180 223, 195 205, 213 199" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="none" />
      <path d="M 217 197 l -8.5 1.5 5.2 -6.5 z" className="fill-muted-foreground" stroke="none" />

      {/* main flow */}
      {box(217, 168, "Phenylalanine", "the gate substrate", 138, 46)}
      <path d="M 355 191 L 446 191" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 450 191 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x={358} y="162" fontSize="7" fontWeight="700" className="fill-foreground">Phenylalanine hydroxylase</text>
      <text x={362} y="210" fontSize="7.2" fontWeight="800" className="fill-emergency">⊟ PKU</text>
      <text x={362} y="221" fontSize="6.6" className="fill-muted-foreground">autosomal recessive</text>
      <text x={362} y="234" fontSize="7" className="fill-muted-foreground">BH₄ required</text>
      {box(450, 168, "Tyrosine", "becomes essential in PKU", 122, 46, "fill-warning-soft stroke-warning", "fill-warning")}

      {/* tyrosine outputs */}
      {box(680, 104, "Thyroxine", "", 150, 30, "fill-brand-soft stroke-brand", "fill-brand")}
      {box(680, 150, "Dopamine", "", 150, 30, "fill-brand-soft stroke-brand", "fill-brand")}
      {box(680, 196, "Melanin", "", 150, 30, "fill-brand-soft stroke-brand", "fill-brand")}
      {box(680, 242, "Norepinephrine / epinephrine", "", 150, 30, "fill-brand-soft stroke-brand", "fill-brand")}
      <path d="M 572 180 C 620 160, 640 122, 676 119" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="none" />
      <path d="M 680 119 l -8.5 -1.5 4 -7 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 572 188 C 620 180, 640 168, 676 165" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="none" />
      <path d="M 680 165 l -8.5 0 3.5 -7 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 572 196 C 620 200, 640 208, 676 211" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="none" />
      <path d="M 680 211 l -8.5 -1 4 -7 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 572 204 C 620 226, 640 250, 676 256" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="none" />
      <path d="M 680 257 l -8.5 0.5 4.2 -7 z" className="fill-muted-foreground" stroke="none" />
      <text x={604} y="282" fontSize="6.8" className="fill-muted-foreground">tyrosine feeds catecholamines &amp; thyroid</text>

      {/* BH4/BH2 recycling loop */}
      <g>
        <rect x="230" y="300" width="500" height="112" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="248" y="322" fontSize="8.6" fontWeight="800" className="fill-foreground">The BH₄ loop — the cofactor PAH spends and the reductase refunds</text>
        {box(280, 336, "BH₄", "tetrahydrobiopterin", 118, 40, "fill-neural-soft stroke-neural", "fill-neural")}
        {box(560, 336, "BH₂", "dihydrobiopterin", 118, 40, "fill-neural-soft stroke-neural", "fill-neural")}
        <path d="M 398 348 L 560 348" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
        <path d="M 564 348 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
        <text x={408} y="340" fontSize="7" fontWeight="700" className="fill-foreground">PAH step: BH₄ → BH₂</text>
        <path d="M 560 372 C 500 396, 440 396, 398 374" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
        <path d="M 394 372 l 8 2.5 -4.8 6.5 z" className="fill-muted-foreground" stroke="none" />
        <text x={416} y="394" fontSize="7" fontWeight="700" className="fill-foreground">Dihydropteridine reductase</text>
        <text x={416} y="405" fontSize="7" className="fill-muted-foreground">NADH + H⁺ → NAD⁺</text>
        <text x={416} y="360" fontSize="7" className="fill-muted-foreground">(spent by the hydroxylase)</text>
      </g>
      <g>
        <rect x="748" y="300" width="208" height="112" rx="12" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.3" />
        <text x="764" y="322" fontSize="8.2" fontWeight="800" className="fill-emergency">Two BH₄-side blocks</text>
        <text x="764" y="340" fontSize="7.2" className="fill-foreground">⊟ BH₄ deficiency — BH₄ is the essential</text>
        <text x="764" y="352" fontSize="7.2" className="fill-foreground">cofactor for PAH; ↑ phenylalanine with</text>
        <text x="764" y="364" fontSize="7.2" className="fill-foreground">varying severity; untreated patients</text>
        <text x="764" y="376" fontSize="7.2" className="fill-foreground">typically die in infancy.</text>
        <text x="764" y="394" fontSize="7.2" fontWeight="700" className="fill-emergency">⊟ Dihydropteridine reductase deficiency</text>
        <text x="764" y="406" fontSize="7.2" className="fill-foreground">stops the BH₂ → BH₄ refund.</text>
      </g>

      {/* PKU clinical strip */}
      <g>
        <rect x="24" y="428" width="932" height="124" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="450" fontSize="9.2" fontWeight="800" className="fill-foreground">Phenylketonuria — the clinical ledger</text>
        <text x="42" y="470" fontSize="7.8" className="fill-muted-foreground">Autosomal recessive. Screening occurs 2–3 days after birth (normal at birth because of maternal enzyme during fetal life); findings are rare due to neonatal screening.</text>
        <text x="42" y="488" fontSize="7.8" className="fill-muted-foreground">Findings: intellectual disability, microcephaly, seizures, hypopigmented skin, eczema, musty body odor — a disorder of aromatic amino acid metabolism → musty body odor.</text>
        <text x="42" y="506" fontSize="7.8" className="fill-muted-foreground">Treatment: ↓ phenylalanine and ↑ tyrosine in diet (eg, soy products, chicken, fish, milk), tetrahydrobiopterin supplementation; avoid aspartame (converted to phenylalanine).</text>
        <text x="42" y="524" fontSize="7.8" fontWeight="700" className="fill-emergency">Phenylalanine embryopathy — untreated maternal PKU: fetal growth restriction, microcephaly, intellectual disability, congenital heart defects; prevented with dietary measures.</text>
      </g>

      {/* MSUD strip */}
      <g>
        <rect x="24" y="564" width="932" height="92" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="586" fontSize="9.2" fontWeight="800" className="fill-foreground">Maple syrup urine disease — the B₁ block next door</text>
        <text x="42" y="606" fontSize="7.8" className="fill-muted-foreground">Blocked degradation of branched amino acids (isoleucine, leucine, valine) due to ↓ branched-chain α-ketoacid dehydrogenase (B1) → ↑ α-ketoacids in the blood, especially those of leucine.</text>
        <text x="42" y="624" fontSize="7.8" className="fill-muted-foreground">Presentation: vomiting, poor feeding, secretions (urine, sweat, ear wax) smell like maple syrup/burnt sugar; progressive neurologic decline — seizures and dystonia.</text>
        <text x="42" y="642" fontSize="7.8" fontWeight="700" className="fill-foreground">Treatment: restriction of isoleucine, leucine, valine in diet, and thiamine supplementation. “I love Vermont maple syrup from maple trees (with B1ranches).”</text>
      </g>

      <text x="24" y="678" fontSize="8.2" className="fill-muted-foreground">Original KYP redraw of the p. 82 phenylalanine pathway figure — the source's node set, enzyme labels, PKU and BH₄ blocks, and phenyl-ketone branch preserved.</text>
    </svg>
  );
}

export function MethionineHomocysteineMap() {
  const w = 980;
  const h = 640;
  const box = (x: number, y: number, label: string, sub: string, wd: number, ht: number, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={ht} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + (ht > 40 ? 20 : ht / 2 + 3.5)} textAnchor="middle" fontSize="9.2" fontWeight="800" className={textTone}>{label}</text>
      {ht > 40 && <text x={x + wd / 2} y={y + 34} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The methionine-homocysteine economy with homocystinuria's four blocks: methionine and homocysteine interconvert via methionine synthase with methyl B12, fed by methyl folate plus B12; homocysteine plus serine becomes cystathionine via cystathionine synthase, then cysteine via B6; four autosomal recessive blocks raise homocysteine: cystathionine synthase deficiency, decreased affinity of cystathionine synthase for pyridoxal phosphate, methionine synthase (homocysteine methyltransferase) deficiency, and MTHFR deficiency; the HOMOCYstinuria mnemonic and the down-and-in lens subluxation versus Marfan's up-and-fans-out" className="min-w-[940px]">
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The methionine–homocysteine economy — homocystinuria's four blocks (redrawn)</text>
        <text x={660} y="34" fontSize="8.4" className="fill-muted-foreground">All forms autosomal recessive;</text>
        <text x={660} y="50" fontSize="8.4" className="fill-muted-foreground">all result in excess homocysteine.</text>
      </g>

      {/* serine input */}
      {box(700, 92, "Serine", "", 92, 30, "fill-card stroke-border")}
      <path d="M 746 122 L 746 156" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 746 160 l -3.5 -8 h 7 z" className="fill-muted-foreground" stroke="none" />

      {/* main flow */}
      {box(60, 168, "Methionine", "dietary, essential", 130, 46)}
      <path d="M 190 180 L 346 180" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 350 180 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <path d="M 346 204 L 190 204" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 186 204 l 8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x={200} y="172" fontSize="7.2" fontWeight="700" className="fill-foreground">Methionine synthase</text>
      <text x={200} y="222" fontSize="7" className="fill-muted-foreground">Methyl B₁₂</text>
      {box(350, 168, "Homocysteine", "the junction metabolite", 150, 46, "fill-warning-soft stroke-warning", "fill-warning")}
      <path d="M 500 191 L 626 191" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 630 191 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x={508} y="180" fontSize="7.2" fontWeight="700" className="fill-foreground">Cystathionine</text>
      <text x={508} y="192" fontSize="7.2" fontWeight="700" className="fill-foreground">synthase</text>
      <text x={508} y="214" fontSize="7" className="fill-emergency">⊟ homocystinuria</text>
      {box(630, 168, "Cystathionine", "", 130, 46)}
      <path d="M 760 191 L 856 191" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 860 191 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x={770} y="180" fontSize="7.2" fontWeight="700" className="fill-foreground">B₆</text>
      {box(860, 168, "Cysteine", "the product", 96, 46, "fill-brand-soft stroke-brand", "fill-brand")}

      {/* methyl folate feed */}
      {box(350, 262, "Methyl folate + B₁₂", "", 150, 30, "fill-card stroke-border")}
      <path d="M 425 262 L 425 222" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 425 218 l -3.5 8 h 7 z" className="fill-muted-foreground" stroke="none" />

      {/* four blocks */}
      <g>
        {[
          { y: 330, label: "⊟ Cystathionine synthase deficiency", tx: "Treatment: ↓ methionine, ↑ cysteine, ↑ B6, B12, and folate in diet" },
          { y: 396, label: "⊟ ↓ Affinity of cystathionine synthase for pyridoxal phosphate", tx: "Treatment: ↑↑ B6 and ↑ cysteine in diet" },
          { y: 462, label: "⊟ Methionine synthase (homocysteine methyltransferase) deficiency", tx: "Treatment: ↑ methionine in diet" },
          { y: 528, label: "⊟ Methylenetetrahydrofolate reductase (MTHFR) deficiency", tx: "Treatment: ↑ folate in diet" },
        ].map((d) => (
          <g key={d.y}>
            <rect x="24" y={d.y} width="932" height="52" rx="10" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.2" />
            <text x="42" y={d.y + 21} fontSize="8.4" fontWeight="800" className="fill-emergency">{d.label}</text>
            <text x="42" y={d.y + 40} fontSize="7.8" className="fill-foreground">{d.tx}</text>
          </g>
        ))}
      </g>

      <text x="24" y="608" fontSize="8.2" className="fill-muted-foreground">“HOMOCYstinuria”: ↑↑ Homocysteine in urine, Osteoporosis, Marfanoid habitus, Ocular changes (downward and inward lens subluxation), Cardiovascular effects</text>
      <text x="24" y="624" fontSize="8.2" className="fill-muted-foreground">(thrombosis and atherosclerosis → stroke and MI), kYphosis, intellectual disability, hypopigmented skin.</text>
    </svg>
  );
}

export function OrganicAcidemiaMap() {
  const w = 980;
  const h = 560;
  const box = (x: number, y: number, label: string, sub: string, wd: number, ht: number, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g key={label + x + y}>
      <rect x={x} y={y} width={wd} height={ht} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={y + (ht > 40 ? 20 : ht / 2 + 3.5)} textAnchor="middle" fontSize="9.2" fontWeight="800" className={textTone}>{label}</text>
      {ht > 40 && <text x={x + wd / 2} y={y + 34} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Organic acidemias: the propionate highway from protein metabolism to the TCA cycle: valine, odd-chain fatty acids, methionine, isoleucine, and threonine (VOMIT) metabolize into propionyl-CoA, which propionyl-CoA carboxylase with biotin converts to methylmalonyl-CoA, which methylmalonyl-CoA mutase with vitamin B12 converts to succinyl-CoA feeding the citric acid cycle; propionic acidemia blocks propionyl-CoA carboxylase raising propionyl-CoA and lowering methylmalonic acid; methylmalonic acidemia is deficiency of the mutase or vitamin B12; presentation in infancy with poor feeding, vomiting, hypotonia, high anion gap metabolic acidosis, hepatomegaly, seizures; organic acid accumulation inhibits gluconeogenesis and the urea cycle" className="min-w-[940px]">
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Organic acidemias — the propionate highway to succinyl-CoA (redrawn)</text>
        <text x={700} y="34" fontSize="8.4" className="fill-muted-foreground">Treatment: low-protein diet limited in</text>
        <text x={700} y="50" fontSize="8.4" className="fill-muted-foreground">propionyl-CoA substrates — VOMIT.</text>
      </g>

      {/* VOMIT box */}
      <g>
        <rect x="24" y="110" width="240" height="190" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="134" fontSize="9" fontWeight="800" className="fill-foreground">Protein metabolism</text>
        {["Valine", "Odd-chain fatty acids", "Methionine", "Isoleucine", "Threonine"].map((s, i) => (
          <g key={s}>
            <rect x="42" y={146 + i * 28} width="204" height="22" rx="7" className="fill-secondary stroke-border" strokeWidth="1" />
            <text x="144" y={161 + i * 28} textAnchor="middle" fontSize="8.2" fontWeight="700" className="fill-foreground">{s}</text>
          </g>
        ))}
        <text x="42" y="294" fontSize="8.2" fontWeight="800" className="fill-warning">VOMIT — the substrate list</text>
      </g>
      <path d="M 264 205 L 326 205" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 330 205 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />

      {/* highway */}
      {box(330, 182, "Propionyl-CoA", "", 130, 46)}
      <path d="M 460 205 L 566 205" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 570 205 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x={468} y="184" fontSize="7.2" fontWeight="700" className="fill-foreground">Propionyl-CoA carboxylase</text>
      <text x={468} y="196" fontSize="7" className="fill-muted-foreground">Biotin</text>
      <text x={468} y="230" fontSize="7" fontWeight="700" className="fill-emergency">⊟ Propionic acidemia</text>
      <text x={468} y="242" fontSize="6.8" className="fill-muted-foreground">↑ propionyl-CoA, ↓ methylmalonic acid</text>
      {box(570, 182, "Methylmalonyl-CoA", "", 150, 46)}
      <path d="M 720 205 L 816 205" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="none" />
      <path d="M 820 205 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
      <text x={726} y="184" fontSize="7.2" fontWeight="700" className="fill-foreground">Methylmalonyl-CoA mutase</text>
      <text x={726} y="196" fontSize="7" className="fill-muted-foreground">B₁₂</text>
      <text x={726} y="230" fontSize="7" fontWeight="700" className="fill-emergency">⊟ Methylmalonic acidemia</text>
      <text x={726} y="242" fontSize="6.8" className="fill-muted-foreground">mutase or vitamin B12 deficiency</text>
      {box(820, 182, "Succinyl-CoA", "", 124, 46, "fill-brand-soft stroke-brand", "fill-brand")}

      {/* TCA box */}
      <g>
        <rect x="790" y="280" width="166" height="56" rx="12" className="fill-neural-soft/30 stroke-neural/50" strokeWidth="1.4" />
        <text x="873" y="304" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-neural">TCA cycle</text>
        <text x="873" y="320" textAnchor="middle" fontSize="7" className="fill-muted-foreground">intermediates of citric acid cycle</text>
      </g>
      <path d="M 882 228 C 882 250, 878 258, 874 276" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" fill="none" />
      <path d="M 873 280 l -3 -8 h 7 z" className="fill-muted-foreground" stroke="none" />

      {/* presentation strip */}
      <g>
        <rect x="24" y="368" width="932" height="66" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="390" fontSize="9.2" fontWeight="800" className="fill-foreground">Presentation — the infancy pattern</text>
        <text x="42" y="410" fontSize="7.8" className="fill-muted-foreground">Most commonly present in infancy with poor feeding, vomiting, hypotonia, high anion gap metabolic acidosis, hepatomegaly, seizures.</text>
      </g>

      {/* mechanism strip */}
      <g>
        <rect x="24" y="446" width="932" height="84" rx="12" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.3" />
        <text x="42" y="468" fontSize="9.2" fontWeight="800" className="fill-emergency">Why organic acids sicken: the two inhibitions</text>
        <text x="42" y="488" fontSize="7.8" className="fill-foreground">Organic acid accumulation inhibits gluconeogenesis → ↓ fasting blood glucose levels, ↑ ketoacidosis → high anion gap metabolic acidosis.</text>
        <text x="42" y="506" fontSize="7.8" className="fill-foreground">Organic acid accumulation inhibits the urea cycle → hyperammonemia.</text>
      </g>
    </svg>
  );
}

export function OchronosisScleraIllustration() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Ochronosis redrawn as an original schematic: the eye with bluish-black pigmentation of the sclerae from homogentisic acid polymer deposition in alkaptonuria (congenital homogentisate oxidase deficiency in the degradative pathway of tyrosine to fumarate), with bluish-black connective tissue and ear cartilage, urine that turns black on prolonged exposure to air, and debilitating arthralgias because homogentisic acid is toxic to cartilage" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Ochronosis — the bluish-black scleral sign of alkaptonuria (original KYP schematic)</text>
      </g>

      {/* eye schematic */}
      <g>
        <rect x="24" y="80" width="560" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">The eye — bluish-black scleral pigmentation</text>
        {/* eye outline: almond shape */}
        <path d="M 84 260 C 130 190, 330 190, 386 250 C 336 322, 130 322, 84 260 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2.2" />
        {/* darkened scleral bands: bluish-black pigment at both scleral zones */}
        <path d="M 92 254 C 130 205, 200 198, 236 210 C 200 214, 140 220, 98 262 Z" className="fill-neural/60 stroke-neural" strokeWidth="1.2" />
        <path d="M 372 250 C 340 216, 290 204, 258 212 C 296 218, 344 226, 366 258 Z" className="fill-neural/60 stroke-neural" strokeWidth="1.2" />
        <path d="M 100 270 C 140 300, 210 312, 244 300 C 204 300, 140 292, 102 268 Z" className="fill-neural/40 stroke-neural" strokeWidth="1" />
        <path d="M 354 264 C 320 294, 268 304, 246 296 C 282 298, 326 288, 352 262 Z" className="fill-neural/40 stroke-neural" strokeWidth="1" />
        {/* iris + pupil at center (uninvolved) */}
        <circle cx={234} cy={256} r={50} className="fill-secondary stroke-foreground/70" strokeWidth="1.6" />
        <circle cx={234} cy={256} r={21} className="fill-foreground/80" />
        {/* label lines */}
        <line x1={330} y1={216} x2={388} y2={172} strokeWidth="1.6" className="stroke-neural" />
        <text x={392} y={166} fontSize="9" fontWeight="700" className="fill-foreground">bluish-black scleral pigment</text>
        <text x={392} y={178} fontSize="8" className="fill-muted-foreground">homogentisic acid polymer</text>
        <line x1={310} y1={300} x2={368} y2={330} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={230} y={344} fontSize="8.5" className="fill-muted-foreground">connective tissue and ear cartilage darken with the same polymer</text>
        {/* iris note */}
        <text x={230} y={152} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">iris spared — pigment is scleral/connective</text>
      </g>

      {/* disease panel */}
      <g>
        <rect x="604" y="80" width="352" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Alkaptonuria (ochronosis)</text>
        {[
          { y: 124, t: "Congenital deficiency of homogentisate oxidase in the" },
          { y: 136, t: "degradative pathway of tyrosine to fumarate." },
          { y: 155, t: "Pigment-forming homogentisic acid builds up in tissue." },
          { y: 174, t: "Autosomal recessive. Usually benign." },
          { y: 193, t: "Findings: bluish-black connective tissue, ear cartilage," },
          { y: 205, t: "and sclerae (ochronosis)." },
          { y: 224, t: "Urine turns black on prolonged exposure to air." },
          { y: 243, t: "May have debilitating arthralgias — homogentisic acid" },
          { y: 255, t: "is toxic to cartilage." },
        ].map((l) => (
          <text key={l.y} x="620" y={l.y} fontSize="8.2" className="fill-foreground">
            <tspan x="620" dy="0">{"\u25AA"}</tspan> {l.t}
          </text>
        ))}
        <text x="620" y="300" fontSize="8" fontWeight="700" className="fill-warning">The pathway line: tyrosine → homogentisic acid</text>
        <text x="620" y="314" fontSize="8" className="fill-muted-foreground">—(homogentisate oxidase ⊟)→ maleylacetoacetic acid</text>
        <text x="620" y="328" fontSize="8" className="fill-muted-foreground">→ fumarate (+ acetoacetate) → TCA cycle.</text>
        <text x="620" y="350" fontSize="7.6" className="fill-muted-foreground">Full tyrosine map: “Amino Acids &amp; Their Derivatives.”</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">The exam pattern — black urine + arthralgias + benign course</text>
        <text x="42" y="450" fontSize="8.5" className="fill-muted-foreground">A middle-aged adult with darkened sclerae and ear cartilage, urine that blackens on standing, and early debilitating joint disease —</text>
        <text x={42} y={466} fontSize="8.5" className="fill-muted-foreground">the classic alkaptonuria stem; the enzyme is homogentisate oxidase (tyrosine → fumarate pathway), not tyrosinase (albinism) or PAH (PKU).</text>
        <text x={42} y="486" fontSize="8.5" fontWeight="700" className="fill-foreground">Usually benign — the finding the stem pairs with “benign course” is ochronosis.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source photograph's diagnostic pattern (bluish-black sclerae, label A) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

export function GlycogenHormoneRegulation() {
  const w = 980;
  const h = 690;
  const chip = (x: number, y: number, wd: number, ht: number, line1: string, line2?: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", fs = 8.4) => (
    <g key={`${line1}-${x}-${y}`}>
      <rect x={x} y={y} width={wd} height={ht} rx="8" className={tone} strokeWidth="1.3" />
      <text x={x + wd / 2} y={line2 ? y + ht / 2 - 3 : y + ht / 2 + 3} textAnchor="middle" fontSize={fs} fontWeight="700" className={textTone}>{line1}</text>
      {line2 && <text x={x + wd / 2} y={y + ht / 2 + 9} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{line2}</text>}
    </g>
  );
  const arrow = (d: string, head: string) => (
    <g key={d}>
      <path d={d} fill="none" strokeWidth="1.5" stroke="currentColor" className="text-muted-foreground" />
      <path d={head} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  const sign = (x: number, y: number, plus: boolean, label?: string) => (
    <g key={`sign-${x}-${y}-${label ?? ""}`}>
      <circle cx={x} cy={y} r="8" className={plus ? "fill-brand-soft stroke-brand" : "fill-emergency-soft stroke-emergency"} strokeWidth="1.2" />
      <text x={x} y={y + 3.4} textAnchor="middle" fontSize="9" fontWeight="900" className={plus ? "fill-brand" : "fill-emergency"}>{plus ? "+" : "−"}</text>
      {label && <text x={x} y={y + 19} textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">{label}</text>}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Glycogen regulation by insulin and glucagon/epinephrine: fasting glucagon (liver) and epinephrine (liver and muscle) act through G protein-coupled receptors and adenylate cyclase to raise cAMP from ATP, activating protein kinase A, which phosphorylates glycogen phosphorylase kinase (on) and glycogen synthase (off); epinephrine in liver acts through the alpha-1 receptor to release calcium from the endoplasmic reticulum, and calcium-calmodulin in muscle during contraction also activates phosphorylase kinase; phosphorylase kinase turns on glycogen phosphorylase, which breaks glycogen down to glucose; fed insulin (liver and muscle) acts through the tyrosine kinase dimer receptor to activate protein phosphatase, which turns glycogen synthase on and glycogen phosphorylase off, building glycogen" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Glycogen regulation by insulin and glucagon/epinephrine — the hormonal switch</text>
        <rect x="640" y="24" width="102" height="18" rx="9" className="fill-brand-soft" />
        <text x="691" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">⊕ activates</text>
        <rect x="752" y="24" width="98" height="18" rx="9" className="fill-emergency-soft" />
        <text x="801" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">⊟ inhibits</text>
      </g>

      {/* ============ FASTED panel (left) ============ */}
      <rect x="24" y="78" width="620" height="320" rx="14" className="fill-warning-soft/25 stroke-warning/50" strokeWidth="1.3" />
      <text x="40" y="97" fontSize="7.6" fontWeight="800" className="fill-warning">FASTED — GLUCAGON + EPINEPHRINE (net: glycogenolysis)</text>

      {/* hormones */}
      {chip(48, 106, 110, 34, "Glucagon", "(liver)", "fill-warning-soft stroke-warning", "fill-warning")}
      {chip(176, 106, 150, 34, "Epinephrine", "(liver and muscle)", "fill-warning-soft stroke-warning", "fill-warning")}
      {chip(342, 106, 120, 34, "Epinephrine", "(liver)", "fill-warning-soft stroke-warning", "fill-warning")}
      {arrow("M 103 140 L 103 168", "M 103 170 l -4 -7 h 8 z")}
      {arrow("M 251 140 L 251 168", "M 251 170 l -4 -7 h 8 z")}
      {arrow("M 402 140 L 402 168", "M 402 170 l -4 -7 h 8 z")}

      {/* receptors */}
      {chip(44, 172, 120, 32, "Glucagon receptor", undefined, "fill-card stroke-border", "fill-foreground", 8)}
      {chip(210, 172, 84, 32, "β receptor", undefined, "fill-card stroke-border", "fill-foreground", 8)}
      {chip(360, 172, 84, 32, "α₁ receptor", undefined, "fill-card stroke-border", "fill-foreground", 8)}

      {/* adenylate cyclase branch */}
      {chip(96, 236, 170, 36, "Adenylate cyclase", undefined, "fill-card stroke-border", "fill-foreground", 8.6)}
      {arrow("M 104 204 C 104 216, 112 224, 124 232", "M 126 234 l -7 -3 5 -7 z")}
      {arrow("M 252 204 C 252 214, 244 224, 232 232", "M 230 234 l 6 -6 4 8 z")}
      {chip(40, 242, 44, 24, "ATP", undefined, "fill-card stroke-border", "fill-foreground", 8)}
      {arrow("M 84 253 L 94 253", "M 96 253 l -7 -3.5 v 7 z")}
      {arrow("M 182 272 L 182 294", "M 182 296 l -4 -7 h 8 z")}
      {chip(146, 296, 72, 26, "cAMP", undefined, "fill-card stroke-border", "fill-foreground", 8.6)}
      {arrow("M 182 322 L 182 350", "M 182 352 l -4 -7 h 8 z")}
      {chip(120, 352, 124, 34, "Protein kinase A", undefined, "fill-warning-soft stroke-warning", "fill-warning", 8.6)}

      {/* alpha-1 / calcium branch */}
      {chip(348, 226, 150, 44, "Endoplasmic", "reticulum", "fill-card stroke-border", "fill-foreground")}
      {arrow("M 402 204 L 402 224", "M 402 226 l -4 -7 h 8 z")}
      {chip(522, 236, 72, 26, "Calcium", undefined, "fill-card stroke-border", "fill-foreground", 8.4)}
      {arrow("M 498 248 L 520 248", "M 522 248 l -7 -3.5 v 7 z")}
      {arrow("M 558 262 L 558 300", "M 558 302 l -4 -7 h 8 z")}
      {chip(462, 302, 190, 44, "Calcium-calmodulin", "in muscle during contraction", "fill-card stroke-border", "fill-foreground")}

      {/* ============ FED panel (right) ============ */}
      <rect x="668" y="78" width="288" height="320" rx="14" className="fill-brand-soft/25 stroke-brand/50" strokeWidth="1.3" />
      <text x="684" y="97" fontSize="7.6" fontWeight="800" className="fill-brand">FED — INSULIN (net: glycogenesis)</text>
      {chip(712, 106, 200, 34, "Insulin", "(liver and muscle)", "fill-brand-soft stroke-brand", "fill-brand")}
      {arrow("M 812 140 L 812 158", "M 812 160 l -4 -7 h 8 z")}
      {chip(700, 162, 224, 40, "Tyrosine kinase", "dimer receptor", "fill-card stroke-border", "fill-foreground", 8.6)}
      {chip(800, 300, 150, 34, "Protein phosphatase", undefined, "fill-brand-soft stroke-brand", "fill-brand", 8.6)}
      {arrow("M 875 202 C 878 235, 876 268, 875 296", "M 875 298 l -4 -7 h 8 z")}
      {sign(893, 250, true)}
      {/* direct receptor-to-synthase arm */}
      <text x="790" y="252" fontSize="7" className="fill-muted-foreground">direct ⊕ of synthase</text>

      {/* ============ shared enzyme cascade ============ */}
      {chip(250, 420, 200, 44, "Glycogen phosphorylase", "kinase", "fill-secondary stroke-border")}
      {chip(650, 420, 170, 40, "Glycogen synthase", undefined, "fill-secondary stroke-border")}
      {chip(250, 500, 200, 40, "Glycogen phosphorylase", undefined, "fill-secondary stroke-border")}
      {chip(460, 580, 140, 40, "Glycogen", "the storage polymer", "fill-card stroke-border")}
      {chip(230, 580, 120, 36, "Glucose", "(liver → blood)", "fill-brand-soft stroke-brand", "fill-brand")}

      {/* cascade arrows */}
      {arrow("M 182 386 C 200 404, 224 412, 250 419", "M 253 421 l -8 -3 4 -7 z")}
      {sign(210, 402, true)}
      {arrow("M 244 356 C 380 388, 540 398, 646 423", "M 649 424 l -8 -2 5 -7 z")}
      {sign(450, 392, false)}
      <text x="452" y="374" fontSize="7" fontWeight="700" className="fill-emergency">phosphorylates OFF</text>
      {arrow("M 556 346 C 528 372, 494 396, 454 417", "M 452 419 l 8 -2 -4 -7 z")}
      {sign(505, 390, true)}
      <text x="507" y="372" fontSize="7" fontWeight="700" className="fill-muted-foreground">CaM ⊕</text>
      {arrow("M 745 202 C 734 270, 724 350, 720 416", "M 720 419 l -3.5 -7.5 h 8 z")}
      {sign(722, 310, true)}
      {arrow("M 800 322 C 762 342, 754 380, 752 416", "M 752 419 l -3.5 -7.5 h 8 z")}
      {sign(762, 368, true)}
      {arrow("M 858 334 C 885 460, 720 550, 468 528", "M 465 527 l 8 -3 -3 -7.5 z")}
      {sign(780, 492, false)}
      {arrow("M 350 464 L 350 498", "M 350 500 l -4 -7 h 8 z")}
      {sign(372, 482, true)}
      {arrow("M 352 540 C 366 572, 408 592, 452 599", "M 455 600 l -8 -3 3 -7 z")}
      {sign(400, 574, false)}
      <text x="356" y="566" fontSize="7" fontWeight="700" className="fill-muted-foreground">glycogenolysis</text>
      {arrow("M 733 460 C 716 516, 660 568, 612 594", "M 609 595 l 8 1 -1.5 -8 z")}
      {sign(690, 532, true)}
      <text x="700" y="520" fontSize="7" fontWeight="700" className="fill-muted-foreground">glycogenesis</text>
      {arrow("M 458 606 L 354 604", "M 352 604 l 7.5 -3.5 v 7 z")}

      {/* bottom synthesis strip */}
      <g>
        <rect x="24" y="632" width="932" height="52" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="646" fontSize="7.8" fontWeight="700" className="fill-foreground">Switch logic — one kinase, one phosphatase, reciprocal enzymes (original KYP redraw):</text>
        <text x="42" y="660" fontSize="7.8" className="fill-muted-foreground">fasting cAMP → protein kinase A phosphorylates phosphorylase kinase (ON) and glycogen synthase (OFF) → glycogenolysis.</text>
        <text x="42" y="674" fontSize="7.8" className="fill-muted-foreground">Insulin activates protein phosphatase (and directly the synthase) → synthase ON, phosphorylase OFF → glycogenesis. Muscle couples contraction's Ca²⁺-calmodulin to phosphorylase kinase — fuel on demand.</text>
      </g>
    </svg>
  );
}

export function GlycogenMetabolismMap() {
  const w = 980;
  const h = 640;
  const box = (x: number, y: number, wd: number, ht: number, label: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", sub?: string) => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width={wd} height={ht} rx="8" className={tone} strokeWidth="1.3" />
      <text x={x + wd / 2} y={sub ? y + ht / 2 - 2 : y + ht / 2 + 3} textAnchor="middle" fontSize="8.6" fontWeight="700" className={textTone}>{label}</text>
      {sub && <text x={x + wd / 2} y={y + ht / 2 + 10} textAnchor="middle" fontSize="6.8" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
  const arrow = (d: string, head: string, dashed = false) => (
    <g key={d}>
      <path d={d} fill="none" strokeWidth="1.5" strokeDasharray={dashed ? "4 3" : undefined} stroke="currentColor" className="text-muted-foreground" />
      <path d={head} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  const num = (x: number, y: number, n: string) => (
    <g key={`num-${n}-${x}-${y}`}>
      <circle cx={x} cy={y} r="7.5" className="fill-foreground stroke-none" />
      <text x={x} y={y + 2.8} textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-background">{n}</text>
    </g>
  );
  const roman = (x: number, y: number, r: string) => (
    <g key={`roman-${r}-${x}-${y}`}>
      <rect x={x} y={y} width="18" height="18" rx="4" className="fill-emergency-soft stroke-emergency" strokeWidth="1.1" />
      <text x={x + 9} y={y + 13} textAnchor="middle" fontSize="8" fontWeight="900" className="fill-emergency">{r}</text>
    </g>
  );
  const enzLabel = (x: number, y: number, lines: string[], n: string, r?: string) => (
    <g key={`enz-${n}-${x}-${y}`}>
      {num(x + 8, y + 8, n)}
      {r && roman(x + 22, y - 1, r)}
      {lines.map((ln, i) => (
        <text key={ln + i} x={x + (r ? 48 : 22)} y={y + 8 + i * 11} fontSize="7" fontWeight="700" className="fill-foreground">{ln}</text>
      ))}
    </g>
  );
  const dot = (x: number, y: number, primer = false) => (
    <circle key={`dot-${x}-${y}`} cx={x} cy={y} r="9" className={primer ? "fill-card stroke-border" : "fill-brand/70 stroke-none"} strokeWidth={primer ? 1.2 : undefined} />
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Glycogen metabolism map: glucose interconverts with glucose-6-phosphate (step 1, glucose-6-phosphatase, Von Gierke disease type I) and glucose-1-phosphate; glucose-1-phosphate to UDP-glucose (step 2, UDP-glucose pyrophosphorylase); UDP-glucose to glycogen (step 3, glycogen synthase; step 4 branching enzyme makes alpha-1,6 branches — Anderson disease type IV); glycogen phosphorylase (step 5, McArdle disease type V) shortens the chain to limit dextrin releasing glucose-1-phosphate; the debranching enzyme's two activities (step 6 4-alpha-D-glucanotransferase moving three of four residues, step 7 alpha-1,6-glucosidase freeing the last glucose — Cori disease type III); and the lysosome-only arm (step 8 alpha-1,4-glucosidase, acid maltase — Pompe disease type II) returning a small amount of glycogen to glucose" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Glycogen metabolism — glycogenesis, glycogenolysis, and the five storage-disease blocks (original KYP redraw)</text>
      </g>

      {/* ============ GLYCOGENESIS panel (left) ============ */}
      <rect x="36" y="74" width="330" height="412" rx="14" className="fill-brand-soft/20 stroke-brand/50" strokeWidth="1.3" />
      <text x="48" y="90" fontSize="7.6" fontWeight="800" className="fill-brand">GLYCOGENESIS — synthesis</text>

      {box(60, 100, 110, 34, "Glucose")}
      {box(200, 96, 96, 26, "Glycolysis", "fill-card stroke-border", "fill-foreground")}
      {arrow("M 172 108 L 196 108", "M 198 108 l -7 -3.5 v 7 z")}
      {box(200, 124, 150, 26, "Gluconeogenesis", "fill-card stroke-border", "fill-foreground")}
      {arrow("M 198 139 C 188 134, 180 128, 176 124", "M 174 122 l 4 8 6 -6 z")}

      {box(95, 176, 130, 34, "Glucose-6-P")}
      {arrow("M 115 134 L 115 174", "M 115 176 l -4 -7 h 8 z")}
      {arrow("M 150 174 L 150 134", "M 150 132 l -4 7 h 8 z")}
      {box(95, 246, 130, 34, "Glucose-1-P")}
      {arrow("M 115 210 L 115 244", "M 115 246 l -4 -7 h 8 z")}
      {arrow("M 150 244 L 150 208", "M 150 206 l -4 7 h 8 z")}
      {box(95, 316, 130, 34, "UDP-glucose")}
      {arrow("M 132 280 L 132 314", "M 132 316 l -4 -7 h 8 z")}

      {/* enzyme labels 1-4 */}
      {roman(84, 152, "I")}
      {enzLabel(236, 163, ["Glucose-6-phosphatase"], "1")}
      {enzLabel(150, 291, ["UDP-glucose pyrophosphorylase"], "2")}
      {enzLabel(40, 369, ["Glycogen synthase"], "3")}
      {enzLabel(130, 355, ["Branching enzyme"], "4", "IV")}

      {/* glycogen chain */}
      {arrow("M 132 350 L 124 400", "M 123 403 l -1 -8 7.5 3 z")}
      {dot(72, 415, true)}
      {dot(96, 415)}{dot(126, 415)}{dot(156, 415)}{dot(186, 415)}{dot(216, 415)}{dot(246, 415)}{dot(276, 415)}{dot(306, 415)}
      {/* branch built by branching enzyme (4) */}
      {dot(231, 394)}{dot(256, 383)}{dot(281, 372)}
      {arrow("M 216 404 L 228 398", "M 230 397 l -7.5 0.5 4 6.5 z")}
      <text x="60" y="446" fontSize="6.6" className="fill-muted-foreground">glycogenin primer · α-(1,4) linear · α-(1,6) branch</text>

      {/* ============ GLYCOGENOLYSIS zone (right-center) ============ */}
      <rect x="380" y="326" width="316" height="160" rx="14" className="fill-secondary/30 stroke-border" strokeWidth="1.3" />
      <text x="392" y="342" fontSize="7.6" fontWeight="800" className="fill-muted-foreground">GLYCOGENOLYSIS — breakdown</text>

      {/* phosphorylase arrow (5) */}
      {arrow("M 318 415 L 408 415", "M 412 415 l -7 -3.5 v 7 z")}
      {enzLabel(318, 389, ["Glycogen phosphorylase"], "5", "V")}
      {/* G1P released */}
      {box(300, 448, 100, 26, "Glucose-1-P", "fill-brand-soft stroke-brand", "fill-brand")}
      {arrow("M 350 419 C 344 432, 343 440, 347 446", "M 348 448 l -6.5 -5 8 -1.5 z")}

      {/* limit dextrin cluster */}
      {dot(424, 415)}{dot(450, 415)}{dot(476, 415)}{dot(502, 415)}{dot(528, 415)}
      {dot(516, 395)}{dot(530, 383)}{dot(544, 371)}{dot(558, 359)}
      <text x="424" y="443" fontSize="7.4" fontWeight="800" className="fill-foreground">Limit dextrin</text>
      <text x="470" y="357" fontSize="6.4" className="fill-muted-foreground">α-(1,6) branch</text>

      {/* debranching: transferase (6) and glucosidase (7) — Cori III */}
      {arrow("M 531 386 C 542 394, 548 402, 553 410", "M 555 413 l -7 -3.5 2.5 7.5 z")}
      {enzLabel(548, 383, ["Debranching enzyme", "(4-α-D-glucanotransferase)"], "6", "III")}
      {arrow("M 562 354 C 585 340, 620 322, 648 312", "M 650 310 l -8 0.5 4.5 6.5 z")}
      {box(604, 282, 100, 24, "free glucose", "fill-card stroke-border", "fill-foreground")}
      {enzLabel(548, 414, ["Debranching enzyme", "(α-1,6-glucosidase)"], "7", "III")}

      {/* lysosome-only arm (8) — Pompe II */}
      {arrow("M 315 400 C 360 330, 280 200, 176 130", "M 174 128 l 6 6 6.5 -4.5 z", true)}
      <text x="312" y="230" fontSize="7.2" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">lysosome</text>
      <text x="312" y="241" fontSize="7.2" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">only</text>
      {roman(184, 146, "II")}
      {enzLabel(365, 290, ["α-1,4-glucosidase", "(acid maltase)"], "8")}

      {/* ============ side lists ============ */}
      <g>
        <rect x="710" y="84" width="246" height="26" rx="6" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="833" y="101" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Glycogen storage disease type</text>
        {[["I", "Von Gierke disease", 114], ["II", "Pompe disease", 140], ["III", "Cori disease", 166], ["IV", "Anderson disease", 192], ["V", "McArdle disease", 218]].map(([r, name, y]) => (
          <g key={`gsd-${r}`}>
            <rect x="710" y={y as number} width="246" height="26" rx="6" className="fill-secondary/40 stroke-border" strokeWidth="1" />
            {roman(718, (y as number) + 4, r as string)}
            <text x="746" y={(y as number) + 17} fontSize="7.8" fontWeight="700" className="fill-foreground">{name as string}</text>
          </g>
        ))}
      </g>
      <g>
        <rect x="710" y="262" width="246" height="26" rx="6" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="833" y="279" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Glycogen enzymes</text>
        {[
          ["1", "Glucose-6-phosphatase", 292, 26],
          ["2", "UDP-glucose pyrophosphorylase", 318, 26],
          ["3", "Glycogen synthase", 344, 26],
          ["4", "Branching enzyme", 370, 26],
          ["5", "Glycogen phosphorylase", 396, 26],
          ["6", "Debranching enzyme (4-α-D-glucanotransferase)", 422, 34],
          ["7", "Debranching enzyme (α-1,6-glucosidase)", 456, 34],
          ["8", "α-1,4-glucosidase (acid maltase)", 490, 26],
        ].map(([n, name, y, ht]) => (
          <g key={`enz-list-${n}`}>
            <rect x="710" y={y as number} width="246" height={ht as number} rx="6" className="fill-secondary/40 stroke-border" strokeWidth="1" />
            {num(724, (y as number) + (ht as number) / 2, n as string)}
            <text x="738" y={(y as number) + (ht as number) / 2 + 3} fontSize="7" fontWeight="700" className="fill-foreground">{name as string}</text>
          </g>
        ))}
      </g>

      {/* footer strips */}
      <g>
        <rect x="24" y="528" width="672" height="44" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="546" fontSize="7.8" fontWeight="700" className="fill-foreground">Branches have α-(1,6) bonds; linear linkages have α-(1,4) bonds.</text>
        <text x="42" y="562" fontSize="7.8" className="fill-muted-foreground">Limit dextrin—2-4 residues remaining on a branch after glycogen phosphorylase has shortened it.</text>
      </g>
      <g>
        <rect x="24" y="580" width="672" height="44" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="598" fontSize="7.8" className="fill-muted-foreground">Skeletal muscle: glycogenolysis → glucose-1-phosphate → glucose-6-phosphate, rapidly metabolized during exercise.</text>
        <text x="42" y="614" fontSize="7.8" className="fill-muted-foreground">Hepatocytes: glycogen stored and degraded to maintain blood sugar; a small amount degraded in lysosomes by ⑧ α-1,4-glucosidase.</text>
      </g>
    </svg>
  );
}

export function SphingolipidPathwayMap() {
  const w = 980;
  const h = 610;
  const box = (x: number, y: number, wd: number, ht: number, label: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", sub?: string) => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width={wd} height={ht} rx="9" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={sub ? y + ht / 2 - 2 : y + ht / 2 + 3.5} textAnchor="middle" fontSize="9" fontWeight="800" className={textTone}>{label}</text>
      {sub && <text x={x + wd / 2} y={y + ht / 2 + 11} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
  const arrow = (d: string, head: string) => (
    <g key={d}>
      <path d={d} fill="none" strokeWidth="1.7" stroke="currentColor" className="text-muted-foreground" />
      <path d={head} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  const num = (x: number, y: number, n: string) => (
    <g key={`num-${n}-${x}-${y}`}>
      <circle cx={x} cy={y} r="8" className="fill-foreground stroke-none" />
      <text x={x} y={y + 2.9} textAnchor="middle" fontSize="8" fontWeight="800" className="fill-background">{n}</text>
    </g>
  );
  const block = (x: number, y: number, n: string, enz: string, disease: string) => (
    <g key={`blk-${n}-${x}-${y}`}>
      {num(x, y, n)}
      <text x={x + 14} y={y - 4} fontSize="7.4" fontWeight="700" className="fill-foreground">{enz}</text>
      <text x={x + 14} y={y + 8} fontSize="7.2" fontWeight="700" className="fill-emergency">{disease}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Sphingolipid degradation pathway: GM2 converts to GM3 through hexosaminidase A, blocked in Tay-Sachs disease which accumulates GM2 ganglioside; ceramide trihexoside converts through alpha-galactosidase A, blocked in Fabry disease; GM3 converts to glucocerebroside; glucocerebroside converts to ceramide through glucocerebrosidase (beta-glucosidase), blocked in Gaucher disease; sphingomyelin converts to ceramide through sphingomyelinase, blocked in Niemann-Pick disease which accumulates sphingomyelin and cholesterol; sulfatide (cerebroside sulfate) converts to galactocerebroside through arylsulfatase A, blocked in metachromatic leukodystrophy; galactocerebroside converts to ceramide through galactocerebrosidase, blocked in Krabbe disease which also accumulates psychosine; ceramide is the convergence hub" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Sphingolipid degradation — the ceramide hub and the six storage-disease blocks (original KYP redraw)</text>
        <rect x="742" y="24" width="200" height="18" rx="9" className="fill-emergency-soft" />
        <text x="842" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">①–⑥ = the six enzyme blocks</text>
      </g>

      {/* ganglioside branch (top left) */}
      {box(200, 92, 110, 34, "GM2")}
      {box(200, 200, 110, 34, "GM3")}
      {arrow("M 255 126 L 255 198", "M 255 201 l -4 -8 h 8 z")}
      {block(270, 163, "1", "Hexosaminidase A", "Tay-Sachs — GM2 ganglioside")}

      {/* trihexoside branch (top right) */}
      {box(620, 92, 200, 34, "Ceramide trihexoside")}
      {arrow("M 700 126 C 700 200, 620 260, 548 288", "M 545 291 l 7 -4.5 2.5 7.5 z")}
      {block(715, 160, "2", "α-galactosidase A", "Fabry (XR) — ceramide trihexoside")}

      {/* GM3 → glucocerebroside (unlabeled sialidase step, as printed) */}
      {box(430, 292, 170, 34, "Glucocerebroside")}
      {arrow("M 310 234 C 350 260, 390 275, 428 290", "M 431 292 l -7.5 -3 3 -7 z")}

      {/* glucocerebroside → ceramide (Gaucher) */}
      {arrow("M 515 326 C 515 380, 590 420, 613 472", "M 614 475 l -3.5 -8 7.5 1 z")}
      {block(560, 390, "5", "Glucocerebrosidase", "Gaucher — glucocerebroside")}

      {/* sulfatide branch (bottom left) */}
      {box(36, 404, 190, 46, "Sulfatide", "fill-secondary stroke-border", "fill-foreground", "(cerebroside sulfate)")}
      {box(300, 406, 180, 34, "Galactocerebroside")}
      {arrow("M 228 425 L 294 423", "M 297 423 l -7.5 -3 v 7 z")}
      {block(200, 390, "3", "Arylsulfatase A", "MLD — cerebroside sulfate")}

      {/* galactocerebroside → ceramide (Krabbe) */}
      {arrow("M 390 440 C 440 460, 510 468, 573 473", "M 576 473.5 l -7.5 -3 2 7.5 z")}
      {block(350, 470, "4", "Galactocerebrosidase", "Krabbe — galactocerebroside, psychosine")}

      {/* ceramide hub + sphingomyelin */}
      {box(560, 476, 130, 38, "Ceramide", "fill-warning-soft stroke-warning", "fill-warning", "the hub")}
      {box(790, 476, 170, 34, "Sphingomyelin")}
      {arrow("M 788 493 L 694 493", "M 691 493 l 7.5 -3.5 v 7 z")}
      {block(700, 458, "6", "Sphingomyelinase", "Niemann-Pick — sphingomyelin, cholesterol")}

      {/* bottom strips */}
      <g>
        <rect x="24" y="524" width="932" height="40" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="540" fontSize="7.8" fontWeight="700" className="fill-foreground">Lysosomal enzyme deficiency → accumulation of abnormal metabolic products.</text>
        <text x="400" y="540" fontSize="7.8" className="fill-muted-foreground">↑ Incidence of Tay-Sachs, Niemann-Pick, and some forms of Gaucher disease in Ashkenazi Jews.</text>
        <text x="42" y="556" fontSize="7.8" className="fill-muted-foreground">Enzyme replacement for the two treatable blocks: Fabry (recombinant α-galactosidase A) and Gaucher (recombinant glucocerebrosidase). Gaucher is the most common of the sphingolipidoses.</text>
      </g>
      <g>
        <rect x="24" y="572" width="932" height="24" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="42" y="588" fontSize="7.6" className="fill-muted-foreground">Original KYP redraw of the source figure — all six numbered blocks sit on their catabolic arrows exactly as printed; ceramide is the convergence hub.</text>
      </g>
    </svg>
  );
}

export function CherryRedSpotIllustration() {
  const w = 980;
  const h = 540;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The cherry-red spot of Tay-Sachs and Niemann-Pick disease redrawn as an original schematic: a red-tinted macular region surrounded by pale retinal opacification resulting from lipid accumulation in the ganglion cell layer, with progressive neurodegeneration, developmental delay, hyperreflexia, hyperacusis, and the Tay-Sachs findings of lysosomes with onion skin and no hepatosplenomegaly versus the Niemann-Pick findings of foam cells and hepatosplenomegaly" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">The cherry-red spot — the shared macular sign of Tay-Sachs and Niemann-Pick (original KYP schematic)</text>
      </g>

      {/* fundus schematic */}
      <g>
        <rect x="24" y="80" width="560" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">The fundus — label A of the source table</text>
        {/* pale opacified retina */}
        <circle cx={280} cy={228} r={122} className="fill-muted/25 stroke-foreground/50" strokeWidth="2" />
        {/* retinal vessels radiating from the disc */}
        <path d="M 368 228 C 340 180, 300 160, 262 142" fill="none" strokeWidth="2" className="stroke-emergency/60" />
        <path d="M 368 228 C 356 268, 330 300, 296 316" fill="none" strokeWidth="1.8" className="stroke-emergency/60" />
        <path d="M 368 228 C 390 190, 402 176, 412 166" fill="none" strokeWidth="1.8" className="stroke-emergency/60" />
        <path d="M 368 228 C 396 252, 408 268, 416 284" fill="none" strokeWidth="1.6" className="stroke-emergency/60" />
        {/* optic disc */}
        <circle cx={368} cy={228} r={22} className="fill-warning-soft stroke-warning" strokeWidth="1.5" />
        <text x={368} y={270} textAnchor="middle" fontSize="7.4" className="fill-muted-foreground">optic disc</text>
        {/* cherry-red macula */}
        <circle cx={266} cy={228} r={30} className="fill-emergency/70 stroke-emergency" strokeWidth="1.6" />
        <text x={266} y={282} textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">cherry-red macula</text>
        {/* labels */}
        <line x1={185} y1={160} x2={140} y2={134} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={40} y={102} fontSize="8" fontWeight="700" className="fill-foreground">pale, opacified retina</text>
        <text x={40} y={114} fontSize="7.4" className="fill-muted-foreground">lipid accumulation in ganglion cell layer</text>
        <line x1={240} y1={210} x2={150} y2={196} strokeWidth="1.4" className="stroke-emergency" />
        <text x={44} y={188} fontSize="7.8" fontWeight="700" className="fill-emergency">red-tinted region on the macula</text>
        <text x={42} y={356} fontSize="7.6" className="fill-muted-foreground">The macula stays red because the thin fovea has no ganglion cells to opacify — the ring around it pales.</text>
      </g>

      {/* disease panel — two diseases, one spot */}
      <g>
        <rect x="604" y={80} width="352" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Two diseases, one spot</text>
        <text x="620" y="128" fontSize="8.6" fontWeight="800" className="fill-warning">Tay-Sachs disease — AR</text>
        {[
          "Hexosaminidase A (“TAy-Sax”) — GM2 ganglioside.",
          "Progressive neurodegeneration, developmental",
          "delay/regression, hyperreflexia, hyperacusis.",
          "Lysosomes with onion skin.",
          "NO hepatosplenomegaly.",
        ].map((t, i) => (
          <text key={t + i} x="620" y={146 + i * 14} fontSize="7.9" className="fill-foreground">▪ {t}</text>
        ))}
        <text x="620" y="236" fontSize="8.6" fontWeight="800" className="fill-warning">Niemann-Pick disease — AR</text>
        {[
          "Sphingomyelinase (“No man, don’t Pick the sphinx”)",
          "— sphingomyelin, cholesterol.",
          "Progressive neurodegeneration, foam cells,",
          "hepatosplenomegaly (vs Tay-Sachs disease),",
          "“cherry-red” spot on macula A.",
        ].map((t, i) => (
          <text key={t + i} x="620" y={254 + i * 14} fontSize="7.9" className="fill-foreground">▪ {t}</text>
        ))}
        <text x="620" y="342" fontSize="7.6" className="fill-muted-foreground">Both ↑ in Ashkenazi Jews.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="394" width="932" height="94" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="418" fontSize="9.5" fontWeight="800" className="fill-foreground">The exam pattern — neurodegeneration + cherry-red spot, then the liver and spleen settle it</text>
        <text x="42" y="440" fontSize="8.4" className="fill-muted-foreground">An infant with progressive neurodegeneration, developmental delay/regression, hyperreflexia, and hyperacusis with a cherry-red macula has a sphingolipidosis —</text>
        <text x="42" y="456" fontSize="8.4" className="fill-muted-foreground">NO hepatosplenomegaly points to Tay-Sachs (GM2 ganglioside; lysosomes with onion skin); hepatosplenomegaly with foam cells points to Niemann-Pick (sphingomyelin).</text>
        <text x="42" y="476" fontSize="8.4" fontWeight="700" className="fill-foreground">Mnemonic pair: “TAy-Sax” = hexosaminidase A (Tay-Sachs); “No man, don’t Pick the sphinx” = sphingomyelinase (Niemann-Pick).</text>
      </g>
      <g>
        <text x="24" y="516" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source fundus photograph’s diagnostic pattern (label A) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

export function AngiokeratomaIllustration() {
  const w = 980;
  const h = 520;
  const dot = (x: number, y: number, r: number, key: string) => (
    <circle key={key} cx={x} cy={y} r={r} className="fill-emergency/70 stroke-emergency/80" strokeWidth="0.8" />
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Angiokeratomas of Fabry disease redrawn as an original schematic: punctate red-blue vascular skin lesions in the bathing-suit distribution of hips, buttocks, groin, and thighs, part of the early triad with episodic peripheral neuropathy and hypohidrosis, with late progressive renal failure and cardiovascular disease from alpha-galactosidase A deficiency accumulating ceramide trihexoside, X-linked recessive, treated with recombinant alpha-galactosidase" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Angiokeratomas — Fabry’s punctate red-blue vascular lesions (original KYP schematic)</text>
      </g>

      {/* skin field */}
      <g>
        <rect x="24" y="80" width="560" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">The skin — label B of the source table</text>
        <rect x="60" y={120} width="300" height="236" rx="14" className="fill-muted/15 stroke-foreground/30" strokeWidth="1.2" />
        <text x={210} y={140} textAnchor="middle" fontSize="7.6" fontWeight="700" className="fill-muted-foreground">skin surface — bathing-suit distribution</text>
        {dot(96, 168, 6, "a1")}{dot(114, 178, 5, "a2")}{dot(132, 170, 7, "a3")}{dot(152, 182, 5, "a4")}{dot(126, 196, 6, "a5")}
        {dot(210, 176, 6, "a6")}{dot(230, 186, 7, "a7")}{dot(250, 174, 5, "a8")}{dot(222, 202, 6, "a9")}{dot(262, 196, 5, "a10")}
        {dot(120, 240, 6, "a11")}{dot(146, 250, 5, "a12")}{dot(170, 236, 7, "a13")}{dot(196, 252, 6, "a14")}{dot(224, 242, 5, "a15")}{dot(250, 258, 6, "a16")}
        {dot(110, 292, 5, "a17")}{dot(140, 302, 6, "a18")}{dot(168, 290, 7, "a19")}{dot(198, 306, 5, "a20")}{dot(228, 294, 6, "a21")}{dot(256, 310, 5, "a22")}{dot(284, 296, 6, "a23")}
        {dot(130, 336, 5, "a24")}{dot(162, 344, 6, "a25")}{dot(196, 332, 5, "a26")}{dot(228, 346, 6, "a27")}{dot(260, 334, 5, "a28")}
        {/* magnified papule */}
        <circle cx={430} cy={210} r={46} className="fill-emergency-soft/40 stroke-emergency/60" strokeWidth="1.2" />
        <circle cx={430} cy={210} r={24} className="fill-emergency/60 stroke-emergency" strokeWidth="1.2" />
        <text x={430} y={286} textAnchor="middle" fontSize="7.8" fontWeight="700" className="fill-foreground">punctate red-blue papule</text>
        <text x={430} y={298} textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">small vascular lesion (telangiectatic)</text>
        <text x={42} y={368} fontSize="7.6" className="fill-muted-foreground">Distribution: hips, buttocks, groin, thighs — the bathing-suit area; umbilical and oral mucosa too.</text>
      </g>

      {/* Fabry panel */}
      <g>
        <rect x="604" y="80" width="352" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Fabry disease — X-linked recessive</text>
        {[
          "α-galactosidase A; treat with recombinant",
          "α-galactosidase.",
          "Ceramide trihexoside (globotriaosylceramide).",
          "Early triad: episodic peripheral neuropathy,",
          "angiokeratomas, hypohidrosis.",
          "Late: progressive renal failure,",
          "cardiovascular disease.",
        ].map((t, i) => (
          <text key={t + i} x="620" y={130 + i * 15} fontSize="7.9" className="fill-foreground">▪ {t}</text>
        ))}
        <text x="620" y="260" fontSize="8" fontWeight="700" className="fill-warning">The only X-linked sphingolipidosis</text>
        <text x="620" y="278" fontSize="7.8" className="fill-muted-foreground">Everything else on the map is autosomal</text>
        <text x="620" y="290" fontSize="7.8" className="fill-muted-foreground">recessive — the inheritance column is a</text>
        <text x="620" y="302" fontSize="7.8" className="fill-muted-foreground">standalone exam discriminator.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="394" width="932" height="80" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="418" fontSize="9.5" fontWeight="800" className="fill-foreground">The exam pattern — burning pain + angiokeratomas + cannot sweat</text>
        <text x="42" y="440" fontSize="8.4" className="fill-muted-foreground">A boy or young man with episodic burning pain in the hands and feet (small-fiber peripheral neuropathy), punctate red-blue lesions over hips and groin, and hypohidrosis,</text>
        <text x="42" y={456} fontSize="8.4" className="fill-muted-foreground">later losing kidney function and developing cardiovascular disease — Fabry, the X-linked block on the ceramide-trihexoside arrow (② of the pathway map).</text>
      </g>
      <g>
        <text x="24" y="496" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source clinical photograph’s diagnostic pattern (label B) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

export function GaucherCellsIllustration() {
  const w = 980;
  const h = 520;
  const macrophage = (cx: number, cy: number, r: number, key: string) => (
    <g key={key}>
      <circle cx={cx} cy={cy} r={r} className="fill-muted/20 stroke-foreground/60" strokeWidth="1.6" />
      {/* crumpled tissue-paper cytoplasm: criss-crossed crinkle lines */}
      <path d={`M ${cx - r * 0.7} ${cy - r * 0.4} q ${r * 0.35} ${-r * 0.25} ${r * 0.7} ${r * 0.1} q ${-r * 0.2} ${r * 0.3} ${-r * 0.7} ${r * 0.05} Z`} fill="none" strokeWidth="1" className="stroke-foreground/45" />
      <path d={`M ${cx - r * 0.55} ${cy + r * 0.05} q ${r * 0.3} ${r * 0.3} ${r * 0.75} ${r * 0.12} M ${cx - r * 0.35} ${cy + r * 0.35} q ${r * 0.4} ${-r * 0.1} ${r * 0.8} ${-r * 0.2}`} fill="none" strokeWidth="1" className="stroke-foreground/45" />
      <path d={`M ${cx - r * 0.5} ${cy - r * 0.15} q ${r * 0.25} ${-r * 0.2} ${r * 0.55} ${-r * 0.05} M ${cx - r * 0.15} ${cy - r * 0.45} q ${r * 0.2} ${r * 0.25} ${r * 0.05} ${r * 0.6}`} fill="none" strokeWidth="0.9" className="stroke-foreground/40" />
      {/* eccentric small nucleus */}
      <circle cx={cx + r * 0.55} cy={cy - r * 0.45} r={r * 0.18} className="fill-foreground/70" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Gaucher cells redrawn as an original schematic: lipid-laden macrophages resembling crumpled tissue paper in the marrow and spleen, the signature of Gaucher disease, the most common sphingolipidosis, caused by glucocerebrosidase (beta-glucosidase) deficiency with glucocerebroside accumulation, autosomal recessive, presenting with hepatosplenomegaly, pancytopenia, osteoporosis, avascular necrosis of the femur, and bone crises, treated with recombinant glucocerebrosidase" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Gaucher cells — the crumpled-tissue-paper macrophages (original KYP schematic)</text>
      </g>

      {/* histology-pattern field */}
      <g>
        <rect x="24" y="80" width="560" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Marrow / spleen field — label C of the source table</text>
        {macrophage(170, 220, 74, "g1")}
        {macrophage(370, 170, 56, "g2")}
        {macrophage(390, 296, 60, "g3")}
        {/* small background cells */}
        <circle cx={90} cy={140} r={11} className="fill-muted/25 stroke-foreground/30" strokeWidth="0.8" />
        <circle cx={300} cy={90} r={9} className="fill-muted/25 stroke-foreground/30" strokeWidth="0.8" />
        <circle cx={510} cy={220} r={10} className="fill-muted/25 stroke-foreground/30" strokeWidth="0.8" />
        <circle cx={250} cy={330} r={9} className="fill-muted/25 stroke-foreground/30" strokeWidth="0.8" />
        {/* labels */}
        <line x1={155} y1={155} x2={128} y2={140} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={60} y={120} fontSize="8" fontWeight="700" className="fill-foreground">crumpled tissue-paper cytoplasm</text>
        <text x={60} y={132} fontSize="7.2" className="fill-muted-foreground">(striated glucocerebroside storage)</text>
        <line x1={215} y1={192} x2={276} y2={194} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={284} y={200} fontSize="7.6" fontWeight="700" className="fill-foreground">Gaucher cell — lipid-laden macrophage</text>
        <line x1={213} y1={190} x2={246} y2={252} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={250} y={262} fontSize="7.4" fontWeight="700" className="fill-muted-foreground">small eccentric nucleus</text>
        <text x={42} y={370} fontSize="7.6" className="fill-muted-foreground">Cells pack the marrow and splenic pulp — hepatosplenomegaly and pancytopenia follow the crowding.</text>
      </g>

      {/* Gaucher panel */}
      <g>
        <rect x="604" y="80" width="352" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Gaucher disease — the most common</text>
        {[
          "Glucocerebrosidase (β-glucosidase); treat with",
          "recombinant glucocerebrosidase.",
          "Glucocerebroside. Autosomal recessive.",
          "Hepatosplenomegaly, pancytopenia,",
          "osteoporosis, avascular necrosis of femur,",
          "bone crises, Gaucher cells (lipid-laden",
          "macrophages resembling crumpled",
          "tissue paper).",
        ].map((t, i) => (
          <text key={t + i} x="620" y={130 + i * 15} fontSize="7.9" className="fill-foreground">▪ {t}</text>
        ))}
        <text x="620" y="286" fontSize="8" fontWeight="700" className="fill-warning">One of the two enzyme-replaceable blocks</text>
        <text x="620" y="304" fontSize="7.8" className="fill-muted-foreground">Fabry (recombinant α-galactosidase A) and</text>
        <text x="620" y="316" fontSize="7.8" className="fill-muted-foreground">Gaucher (recombinant glucocerebrosidase).</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="394" width="932" height="80" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="418" fontSize="9.5" fontWeight="800" className="fill-foreground">The exam pattern — big spleen + pancytopenia + bone crises</text>
        <text x="42" y="440" fontSize="8.4" className="fill-muted-foreground">A patient (often Ashkenazi Jewish) with hepatosplenomegaly, pancytopenia from marrow crowding, osteoporosis, avascular necrosis of the femur, and painful bone crises whose marrow shows</text>
        <text x="42" y="456" fontSize="8.4" className="fill-muted-foreground">crumpled-tissue-paper macrophages — Gaucher disease, the glucocerebrosidase (β-glucosidase) block, the most common sphingolipidosis (⑤ of the pathway map).</text>
      </g>
      <g>
        <text x="24" y="496" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source histology image’s diagnostic pattern (label C) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

export function NiemannPickFoamCells() {
  const w = 980;
  const h = 520;
  const foamCell = (cx: number, cy: number, r: number, key: string) => (
    <g key={key}>
      <circle cx={cx} cy={cy} r={r} className="fill-muted/20 stroke-foreground/60" strokeWidth="1.6" />
      {/* foamy vacuolated cytoplasm: many small clear vacuoles */}
      {Array.from({ length: 7 }).map((_, i) => {
        const a = (i / 7) * Math.PI * 2;
        return <circle key={key + "v" + i} cx={cx + Math.cos(a) * r * 0.45} cy={cy + Math.sin(a) * r * 0.45} r={r * 0.18} className="fill-background/70 stroke-foreground/30" strokeWidth="0.7" />;
      })}
      <circle cx={cx} cy={cy} r={r * 0.2} className="fill-background/70 stroke-foreground/30" strokeWidth="0.7" />
      <circle cx={cx + r * 0.5} cy={cy - r * 0.5} r={r * 0.16} className="fill-foreground/70" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Niemann-Pick foam cells redrawn as an original schematic: foamy lipid-laden macrophages with vacuolated cytoplasm storing sphingomyelin and cholesterol, the signature of Niemann-Pick disease, caused by sphingomyelinase deficiency, autosomal recessive, presenting with progressive neurodegeneration, hepatosplenomegaly (versus Tay-Sachs disease which has none), and a cherry-red spot on the macula, remembered by the mnemonic no man do not Pick the sphinx" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Foam cells — Niemann-Pick’s vacuolated macrophages (original KYP schematic)</text>
      </g>

      {/* histology-pattern field */}
      <g>
        <rect x="24" y="80" width="560" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Marrow / spleen / tissue field — label D of the source table</text>
        {foamCell(170, 220, 74, "f1")}
        {foamCell(370, 170, 56, "f2")}
        {foamCell(390, 296, 60, "f3")}
        <circle cx={90} cy={140} r={11} className="fill-muted/25 stroke-foreground/30" strokeWidth="0.8" />
        <circle cx={300} cy={90} r={9} className="fill-muted/25 stroke-foreground/30" strokeWidth="0.8" />
        <circle cx={510} cy={220} r={10} className="fill-muted/25 stroke-foreground/30" strokeWidth="0.8" />
        <circle cx={250} cy={330} r={9} className="fill-muted/25 stroke-foreground/30" strokeWidth="0.8" />
        <line x1={155} y1={155} x2={128} y2={140} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={60} y={120} fontSize="8" fontWeight="700" className="fill-foreground">foamy, vacuolated cytoplasm</text>
        <text x={60} y={132} fontSize="7.2" className="fill-muted-foreground">(sphingomyelin + cholesterol storage)</text>
        <line x1={215} y1={192} x2={276} y2={194} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={284} y={200} fontSize="7.6" fontWeight="700" className="fill-foreground">foam cell — lipid-laden macrophage</text>
        <text x={42} y={370} fontSize="7.6" className="fill-muted-foreground">Contrast the Gaucher cell’s crumpled-paper striations — foam is bubbly and vacuolated, not striated.</text>
      </g>

      {/* Niemann-Pick panel */}
      <g>
        <rect x="604" y="80" width="352" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Niemann-Pick disease — autosomal recessive</text>
        {[
          "Sphingomyelinase (“No man, don’t Pick",
          "the sphinx”).",
          "Sphingomyelin, cholesterol.",
          "Progressive neurodegeneration.",
          "Hepatosplenomegaly (vs Tay-Sachs disease).",
          "Foam cells (lipid-laden macrophages).",
          "“Cherry-red” spot on macula.",
        ].map((t, i) => (
          <text key={t + i} x="620" y={130 + i * 15} fontSize="7.9" className="fill-foreground">▪ {t}</text>
        ))}
        <text x="620" y="272" fontSize="8" fontWeight="700" className="fill-warning">The mnemonic the source gives you</text>
        <text x="620" y="290" fontSize="7.8" className="fill-muted-foreground">“No man, don’t Pick the sphinx” —</text>
        <text x="620" y="302" fontSize="7.8" className="fill-muted-foreground">sphingoMYELinase ↔ NieMANN-Pick.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="394" width="932" height="80" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="418" fontSize="9.5" fontWeight="800" className="fill-foreground">The exam pattern — neurodegeneration + big organs + cherry-red spot</text>
        <text x="42" y="440" fontSize="8.4" className="fill-muted-foreground">An infant with progressive neurodegeneration and a cherry-red macula PLUS hepatosplenomegaly and foam cells has Niemann-Pick (sphingomyelinase; sphingomyelin + cholesterol), not Tay-Sachs —</text>
        <text x="42" y={456} fontSize="8.4" className="fill-muted-foreground">the liver and spleen are the discriminator, and both diseases are ↑ in Ashkenazi Jews (⑥ of the pathway map).</text>
      </g>
      <g>
        <text x="24" y="496" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source histology image’s diagnostic pattern (label D) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

export function FaSynthesisVsOxidation() {
  const w = 980;
  const h = 800;
  const box = (x: number, y: number, wd: number, ht: number, label: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", sub?: string) => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width={wd} height={ht} rx="9" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={sub ? y + ht / 2 - 2 : y + ht / 2 + 3.5} textAnchor="middle" fontSize="9" fontWeight="800" className={textTone}>{label}</text>
      {sub && <text x={x + wd / 2} y={y + ht / 2 + 11} textAnchor="middle" fontSize="7" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
  const arrow = (d: string, head: string, dashed = false) => (
    <g key={d}>
      <path d={d} fill="none" strokeWidth="1.7" strokeDasharray={dashed ? "5 3" : undefined} stroke="currentColor" className="text-muted-foreground" />
      <path d={head} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Fatty acid metabolism: synthesis and degradation as mirror pathways. Synthesis (fed, insulin): citrate leaves the mitochondrial matrix through the citrate shuttle, and ATP citrate lyase regenerates acetyl-CoA in the cytoplasm; acetyl-CoA carboxylase (stimulated by insulin, inhibited by glucagon; CO2, biotin-dependent) makes malonyl-CoA, and fatty acid synthase builds palmitate, a 16-carbon fatty acid; synthesis occurs in liver, lactating mammary glands, and adipose tissue. Degradation (fasting): fatty acid plus CoA is activated by fatty acyl-CoA synthetase, carnitine palmitoyl transferase I loads the carnitine shuttle across the mitochondrial membranes (inhibited by malonyl-CoA so synthesis blocks oxidation), and beta-oxidation by the acyl-CoA dehydrogenases yields acetyl-CoA for ketone bodies and the TCA cycle. Systemic primary carnitine deficiency prevents long-chain fatty acid entry into mitochondria causing weakness, hypotonia, hypoketotic hypoglycemia, and dilated cardiomyopathy; medium-chain acyl-CoA dehydrogenase deficiency reduces breakdown of fatty acids to acetyl-CoA causing fatty acyl carnitine and dicarboxylic acid accumulation with hypoketotic hypoglycemia, vomiting, lethargy, seizures, coma, liver dysfunction, hyperammonemia, and possible sudden infant death, treated by avoiding fasting" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Fatty acid metabolism — synthesis and degradation, the mirror pathways (original KYP redraw)</text>
        <rect x="700" y="24" width="118" height="18" rx="9" className="fill-brand-soft" />
        <text x="759" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">SYNTHESIS — fed</text>
        <rect x="828" y="24" width="128" height="18" rx="9" className="fill-warning-soft" />
        <text x="892" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">OXIDATION — fasted</text>
      </g>

      {/* zone bands */}
      <rect x="36" y="80" width="920" height="300" rx="10" className="fill-card/60 stroke-border" strokeWidth="1.2" />
      <text x="44" y="94" fontSize="7.2" fontWeight="800" className="fill-muted-foreground">CYTOSOL</text>
      <rect x="36" y="380" width="920" height="60" rx="8" className="fill-secondary/40 stroke-border" strokeWidth="1.2" />
      <text x="44" y="415" fontSize="7.2" fontWeight="800" className="fill-muted-foreground">MITOCHONDRIAL MEMBRANES</text>
      <rect x="36" y="440" width="920" height="210" rx="10" className="fill-muted/15 stroke-border" strokeWidth="1.2" />
      <text x="44" y="460" fontSize="7.2" fontWeight="800" className="fill-muted-foreground">MITOCHONDRIAL MATRIX</text>

      {/* ======== SYNTHESIS column (left) ======== */}
      <text x="120" y="118" fontSize="8" fontWeight="800" className="fill-brand">SYNTHESIS</text>
      {box(170, 96, 210, 42, "Fatty acid synthesis", "fill-brand-soft stroke-brand", "fill-brand", "(palmitate, a 16C FA)")}
      {arrow("M 275 206 L 275 142", "M 275 140 l -4 8 h 8 z")}
      {box(190, 208, 170, 30, "Malonyl-CoA")}
      {arrow("M 275 276 L 275 242", "M 275 240 l -4 8 h 8 z")}
      <text x="285" y="262" fontSize="7.2" fontWeight="700" className="fill-foreground">CO₂ (biotin)</text>
      {box(160, 278, 230, 38, "Acetyl-CoA carboxylase")}
      <text x="56" y="292" fontSize="7.6" fontWeight="800" className="fill-brand">Insulin ⊕</text>
      <text x="48" y="310" fontSize="7.6" fontWeight="800" className="fill-warning">Glucagon ⊟</text>
      <line x1={102} y1={296} x2={158} y2={296} strokeWidth="1.2" className="stroke-brand" />
      <line x1={100} y1={308} x2={158} y2={310} strokeWidth="1.2" className="stroke-warning" />
      {arrow("M 275 344 L 275 320", "M 275 318 l -4 8 h 8 z")}
      <text x="285" y="336" fontSize="7.2" fontWeight="700" className="fill-foreground">ATP citrate lyase</text>
      {box(190, 346, 170, 32, "Acetyl-CoA")}
      {/* citrate shuttle crossing the membranes */}
      {arrow("M 275 540 L 275 382", "M 275 380 l -4 8 h 8 z")}
      <text x="285" y="408" fontSize="7.2" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">Citrate shuttle</text>
      {box(190, 540, 170, 32, "Citrate")}

      {/* ======== DEGRADATION column (right) ======== */}
      <text x="596" y="118" fontSize="8" fontWeight="800" className="fill-warning">DEGRADATION</text>
      {box(630, 96, 190, 36, "Fatty acid + CoA")}
      {arrow("M 725 134 L 725 168", "M 725 170 l -4 -8 h 8 z")}
      <text x="735" y="154" fontSize="7.2" fontWeight="700" className="fill-foreground">Fatty acyl-CoA synthetase</text>
      {box(630, 172, 190, 30, "Fatty acyl-CoA")}
      {/* carnitine shuttle crossing the membranes */}
      {arrow("M 725 204 L 725 478", "M 725 480 l -4 -8 h 8 z")}
      <text x="735" y="360" fontSize="7.2" fontWeight="700" className="fill-foreground">Carnitine palmitoyl</text>
      <text x="735" y="372" fontSize="7.2" fontWeight="700" className="fill-foreground">transferase I</text>
      <text x="735" y="418" fontSize="7.2" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">Carnitine shuttle</text>
      {box(630, 482, 190, 30, "Fatty acyl-CoA")}
      {arrow("M 725 514 L 725 548", "M 725 550 l -4 -8 h 8 z")}
      <text x="735" y="530" fontSize="7.2" fontWeight="700" className="fill-foreground">β-oxidation</text>
      <text x="735" y="542" fontSize="7" className="fill-muted-foreground">(acyl-CoA dehydrogenases)</text>
      {box(630, 552, 190, 30, "Acetyl-CoA")}
      {arrow("M 820 560 C 834 552, 838 542, 842 536", "M 845 534 l -7.5 1.5 4.5 6.5 z")}
      {arrow("M 820 574 C 834 582, 838 592, 842 598", "M 845 601 l -7.5 -1 4.5 -6.5 z")}
      {box(848, 520, 112, 28, "Ketone bodies", "fill-warning-soft stroke-warning", "fill-warning")}
      {box(848, 588, 112, 28, "TCA cycle", "fill-warning-soft stroke-warning", "fill-warning")}

      {/* malonyl-CoA inhibits CPT-I — synthesis brakes oxidation */}
      <path d="M 360 224 C 520 224, 650 280, 712 332" fill="none" strokeWidth="1.6" strokeDasharray="5 3" stroke="currentColor" className="text-emergency" />
      <path d="M 714 335 l -8 -1 3.5 -7.5 z" className="fill-emergency" stroke="none" />
      <circle cx={560} cy={252} r="8" className="fill-emergency-soft stroke-emergency" strokeWidth="1.2" />
      <text x={560} y={255.4} textAnchor="middle" fontSize="9" fontWeight="900" className="fill-emergency">−</text>
      <text x="470" y="210" fontSize="7.2" fontWeight="700" className="fill-emergency">malonyl-CoA ⊟ CPT-I — synthesis brakes oxidation</text>

      {/* deficiency cards */}
      <g>
        <rect x="36" y="660" width="434" height="112" rx="12" className="fill-emergency-soft/30 stroke-emergency/50" strokeWidth="1.3" />
        <text x="52" y="680" fontSize="8.6" fontWeight="800" className="fill-emergency">Systemic 1° carnitine deficiency</text>
        {[
          "No cellular uptake of carnitine → no transport of LCFAs into",
          "mitochondria → toxic accumulation of LCFAs in the cytosol.",
          "Weakness, hypotonia, hypoketotic hypoglycemia,",
          "dilated cardiomyopathy.",
        ].map((t, i) => (
          <text key={t + i} x="52" y={698 + i * 15} fontSize="7.7" className="fill-foreground">{t}</text>
        ))}
      </g>
      <g>
        <rect x="490" y="660" width="466" height="112" rx="12" className="fill-emergency-soft/30 stroke-emergency/50" strokeWidth="1.3" />
        <text x="506" y="680" fontSize="8.6" fontWeight="800" className="fill-emergency">Medium-chain acyl-CoA dehydrogenase deficiency</text>
        {[
          "↓ Ability to break down fatty acids into acetyl-CoA → accumulation of fatty",
          "acyl carnitines and dicarboxylic acids in the blood with hypoketotic hypoglycemia.",
          "Vomiting, lethargy, seizures, coma, liver dysfunction, hyperammonemia. Can lead to",
          "sudden death in infants or children. Treat by avoiding fasting.",
        ].map((t, i) => (
          <text key={t + i} x="506" y={698 + i * 15} fontSize="7.7" className="fill-foreground">{t}</text>
        ))}
      </g>

      {/* mnemonics footer */}
      <g>
        <rect x="36" y="782" width="920" height="14" rx="7" className="fill-card stroke-border" strokeWidth="1" />
        <text x="44" y="792.5" fontSize="7.2" className="fill-muted-foreground">“Sytrate” = synthesis (the citrate shuttle feeds it) · Carnitine = carnage of fatty acids · Synthesis occurs in liver, lactating mammary glands, and adipose tissue.</text>
      </g>
    </svg>
  );
}

export function KetoneBodyShuttle() {
  const w = 980;
  const h = 640;
  const box = (x: number, y: number, wd: number, ht: number, label: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", sub?: string) => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width={wd} height={ht} rx="9" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={sub ? y + ht / 2 - 2 : y + ht / 2 + 3.5} textAnchor="middle" fontSize="8.8" fontWeight="800" className={textTone}>{label}</text>
      {sub && <text x={x + wd / 2} y={y + ht / 2 + 11} textAnchor="middle" fontSize="6.8" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
  const arrow = (d: string, head: string) => (
    <g key={d}>
      <path d={d} fill="none" strokeWidth="1.7" stroke="currentColor" className="text-muted-foreground" />
      <path d={head} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Ketone body metabolism: in the liver, fatty acids and amino acids are metabolized through two acetyl-CoA to acetoacetyl-CoA, then HMG-CoA through ketogenesis (HMG-CoA lyase) to acetoacetate, which interconverts with beta-hydroxybutyrate and loses acetone expired by the lungs; acetoacetate and beta-hydroxybutyrate travel in the blood to extrahepatic tissues such as skeletal muscle and brain, where beta-ketoacyl-CoA transferase regenerates acetyl-CoA for the TCA cycle; liver cells lack beta-ketoacyl-CoA transferase so cannot use ketone bodies as fuel; ketone bodies are acetone (ketone), acetoacetate (ketoacid), and beta-hydroxybutyrate (ketoacid); breath smells like acetone (fruity odor); the urine test detects acetoacetate but not beta-hydroxybutyrate; RBCs cannot use ketones and strictly use glucose; HMG-CoA lyase for ketone body production, HMG-CoA reductase for cholesterol synthesis" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Ketone bodies — made in the liver, spent everywhere else (original KYP redraw)</text>
        <rect x="762" y="24" width="182" height="18" rx="9" className="fill-warning-soft" />
        <text x="853" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">acetone · acetoacetate · βOHB</text>
      </g>

      {/* hepatocyte panel */}
      <g>
        <rect x="36" y="80" width="356" height="420" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Hepatocyte (liver)</text>
        {box(56, 116, 210, 38, "Fatty acids, amino acids")}
        {arrow("M 161 154 L 161 186", "M 161 188 l -4 -8 h 8 z")}
        {box(76, 190, 170, 30, "2 Acetyl-CoA")}
        {arrow("M 161 220 L 161 250", "M 161 252 l -4 -8 h 8 z")}
        {box(66, 254, 190, 30, "Acetoacetyl-CoA")}
        {arrow("M 161 284 L 161 314", "M 161 316 l -4 -8 h 8 z")}
        {box(76, 318, 170, 30, "HMG-CoA")}
        <text x="252" y="337" fontSize="7.2" fontWeight="700" className="fill-foreground">Ketogenesis</text>
        <text x="252" y="348" fontSize="6.8" className="fill-muted-foreground">HMG-CoA lyase</text>
        {arrow("M 161 348 L 161 378", "M 161 380 l -4 -8 h 8 z")}
        {box(56, 382, 150, 30, "Acetoacetate")}
        <path d="M 206 397 L 226 397" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" />
        <path d="M 204 397 l 8 -3.5 v 7 z M 228 397 l -8 -3.5 v 7 z" className="fill-muted-foreground" stroke="none" />
        {box(226, 382, 150, 30, "β-hydroxybutyrate")}
        {/* acetone branch */}
        {arrow("M 131 412 C 131 432, 122 440, 112 446", "M 110 448 l 7 -3.5 -1.5 7.5 z")}
        {box(56, 452, 110, 30, "Acetone", "fill-warning-soft stroke-warning", "fill-warning")}
        <text x="172" y="471" fontSize="7" className="fill-muted-foreground">expired by lungs (fruity odor)</text>
      </g>

      {/* blood column */}
      <g>
        <rect x="408" y="80" width="168" height="420" rx="12" className="fill-emergency-soft/20 stroke-emergency/40" strokeWidth="1.4" />
        <text x="492" y="104" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">Blood</text>
        {arrow("M 376 397 L 406 397", "M 408 397 l -8 -3.5 v 7 z")}
        {arrow("M 376 297 C 392 297, 396 320, 400 344", "M 401 347 l -6 -6 -3 7.5 z")}
        <text x="418" y="330" fontSize="7.4" fontWeight="700" className="fill-foreground">transported as</text>
        {box(424, 340, 136, 28, "Acetoacetate", "fill-card stroke-border")}
        {box(424, 384, 136, 28, "β-hydroxybutyrate", "fill-card stroke-border")}
        <text x="418" y="452" fontSize="7" className="fill-muted-foreground">RBCs cannot use them —</text>
        <text x="418" y="464" fontSize="7" className="fill-muted-foreground">they strictly use glucose.</text>
      </g>

      {/* extrahepatic panel */}
      <g>
        <rect x="596" y="80" width="360" height="420" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="612" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Extrahepatic tissues (eg, skeletal muscle)</text>
        {arrow("M 560 398 L 594 398", "M 596 398 l -8 -3.5 v 7 z")}
        {arrow("M 560 354 C 576 354, 584 330, 590 310", "M 591 307 l -6.5 5.5 -0.5 -8 z")}
        {box(604, 130, 170, 30, "β-hydroxybutyrate")}
        {arrow("M 689 160 L 689 190", "M 689 192 l -4 -8 h 8 z")}
        {box(604, 194, 170, 30, "Acetoacetate")}
        {arrow("M 689 224 L 689 254", "M 689 256 l -4 -8 h 8 z")}
        <text x="700" y="244" fontSize="6.8" className="fill-muted-foreground">β-ketoacyl-CoA transferase</text>
        {box(604, 258, 170, 30, "Acetyl-CoA")}
        <text x="700" y="278" fontSize="6.8" className="fill-emergency">liver lacks this enzyme</text>
        {arrow("M 689 288 L 689 318", "M 689 320 l -4 -8 h 8 z")}
        {box(614, 322, 150, 34, "TCA cycle", "fill-warning-soft stroke-warning", "fill-warning")}
        <text x="612" y="400" fontSize="7.2" className="fill-muted-foreground">Ketolysis: the liver makes ketones but cannot spend them —</text>
        <text x="612" y="414" fontSize="7.2" className="fill-muted-foreground">liver cells lack β-ketoacyl-CoA transferase → cannot use</text>
        <text x="612" y="428" fontSize="7.2" className="fill-muted-foreground">ketone bodies as fuel. Muscle and brain can (brain after</text>
        <text x="612" y="442" fontSize="7.2" className="fill-muted-foreground">prolonged adaptation to starvation).</text>
      </g>

      {/* bottom strips */}
      <g>
        <rect x="24" y="514" width="932" height="58" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="534" fontSize="8.2" fontWeight="800" className="fill-foreground">The three ketone bodies: acetone (ketone), acetoacetate (ketoacid), β-hydroxybutyrate (ketoacid).</text>
        <text x="42" y="550" fontSize="7.8" className="fill-muted-foreground">Breath smells like acetone (fruity odor). Urine test for ketones can detect acetoacetate, but not β-hydroxybutyrate.</text>
        <text x="42" y="566" fontSize="7.8" fontWeight="700" className="fill-foreground">HMG-CoA lyase → ketone body production · HMG-CoA reductase → cholesterol synthesis.</text>
      </g>
      <g>
        <rect x="24" y="582" width="932" height="44" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="600" fontSize="7.6" fontWeight="700" className="fill-foreground">Why ketones pour out: prolonged starvation and diabetic ketoacidosis deplete oxaloacetate for gluconeogenesis.</text>
        <text x="42" y="616" fontSize="7.6" className="fill-muted-foreground">Chronic alcohol overuse: ↑ NADH → shunting of oxaloacetate to malate → TCA cycle downregulation → ↓ gluconeogenesis → fasting hypoglycemia.</text>
      </g>
    </svg>
  );
}

export function AdipocyteFedFasted() {
  const w = 980;
  const h = 560;
  const box = (x: number, y: number, wd: number, ht: number, label: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", sub?: string) => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width={wd} height={ht} rx="9" className={tone} strokeWidth="1.4" />
      <text x={x + wd / 2} y={sub ? y + ht / 2 - 2 : y + ht / 2 + 3.5} textAnchor="middle" fontSize="8.6" fontWeight="800" className={textTone}>{label}</text>
      {sub && <text x={x + wd / 2} y={y + ht / 2 + 11} textAnchor="middle" fontSize="6.8" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
  const arrow = (d: string, head: string) => (
    <g key={d}>
      <path d={d} fill="none" strokeWidth="1.6" stroke="currentColor" className="text-muted-foreground" />
      <path d={head} className="fill-muted-foreground" stroke="none" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The adipocyte in the fed and fasted states. Fed: insulin brings glucose in, glucose makes DHAP then glycerol 3-phosphate with ATP, lipoprotein lipase with Apo CII brings fatty acids from blood triglycerides, and fatty acids plus glycerol 3-phosphate are esterified into triglyceride for storage. Fasted: glucagon and epinephrine raise cAMP, activating protein kinase A, which phosphorylates hormone-sensitive lipase (HSL-P); phosphorylated HSL breaks stored triglyceride into free fatty acids and glycerol released to the blood for the liver and other tissues" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The adipocyte — fed stores fat, fasted releases it (original KYP redraw)</text>
        <rect x="714" y="24" width="116" height="18" rx="9" className="fill-brand-soft" />
        <text x="772" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">FED = store TG</text>
        <rect x="842" y="24" width="116" height="18" rx="9" className="fill-warning-soft" />
        <text x="900" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">FASTED = release</text>
      </g>

      {/* FED panel */}
      <g>
        <rect x="36" y="80" width="444" height="380" rx="12" className="fill-brand-soft/15 stroke-brand/40" strokeWidth="1.3" />
        <text x="52" y="104" fontSize="9.5" fontWeight="800" className="fill-brand">Adipocyte (fed)</text>
        {box(56, 116, 100, 30, "Insulin", "fill-brand-soft stroke-brand", "fill-brand")}
        {arrow("M 106 146 L 106 176", "M 106 178 l -4 -8 h 8 z")}
        {box(56, 180, 100, 30, "Glucose")}
        {arrow("M 156 195 L 200 195", "M 203 195 l -7 -3.5 v 7 z")}
        {box(204, 180, 84, 30, "DHAP")}
        {arrow("M 246 210 L 246 240", "M 246 242 l -4 -8 h 8 z")}
        <text x="256" y="230" fontSize="6.8" className="fill-muted-foreground">ATP</text>
        {box(190, 246, 112, 30, "Glycerol 3-P")}
        {arrow("M 302 261 C 330 261, 346 272, 356 285", "M 358 288 l -7.5 -1 4 -7 z")}
        <text x="256" y="286" fontSize="7" className="fill-muted-foreground">esterification</text>
        {box(356, 292, 100, 44, "TG", "fill-brand-soft stroke-brand", "fill-brand", "stored lipid")}
        {arrow("M 106 210 C 106 250, 116 288, 130 316", "M 131 319 l -6 -6.5 -1.5 8 z")}
        {box(56, 322, 150, 34, "LPL", "fill-card stroke-border", "fill-foreground", "+ Apo CII")}
        {arrow("M 106 296 L 106 318", "M 106 320 l -4 -8 h 8 z")}
        <text x="60" y="300" fontSize="6.8" className="fill-muted-foreground">blood TG → FFA</text>
        {box(226, 326, 84, 30, "FFA")}
        {arrow("M 176 340 L 222 340", "M 225 340 l -7 -3.5 v 7 z")}
        {arrow("M 268 326 C 300 326, 330 310, 356 306", "M 359 305 l -7.5 0.5 4.5 6.5 z")}
        <text x="60" y="386" fontSize="7.2" className="fill-muted-foreground">Fed logic: insulin imports glucose (→ glycerol 3-P backbone),</text>
        <text x="60" y="400" fontSize="7.2" className="fill-muted-foreground">LPL with Apo CII harvests FFA from blood lipoprotein TG,</text>
        <text x="60" y="414" fontSize="7.2" className="fill-muted-foreground">and the cell esterifies FFA + glycerol 3-P into stored TG.</text>
      </g>

      {/* FASTED panel */}
      <g>
        <rect x="500" y="80" width="456" height="380" rx="12" className="fill-warning-soft/15 stroke-warning/40" strokeWidth="1.3" />
        <text x="516" y="104" fontSize="9.5" fontWeight="800" className="fill-warning">Adipocyte (fasted)</text>
        {box(516, 116, 106, 30, "Glucagon", "fill-warning-soft stroke-warning", "fill-warning")}
        {box(516, 156, 106, 30, "Epinephrine", "fill-warning-soft stroke-warning", "fill-warning")}
        {arrow("M 622 131 C 650 131, 660 138, 672 146", "M 674 148 l -7 -2 2.5 7.5 z")}
        {arrow("M 622 171 C 648 171, 660 164, 672 156", "M 674 154 l -7 2 2.5 -7.5 z")}
        {box(676, 128, 84, 30, "cAMP")}
        {arrow("M 718 158 L 718 188", "M 718 190 l -4 -8 h 8 z")}
        {box(640, 192, 156, 30, "Protein kinase A")}
        {arrow("M 718 222 L 718 252", "M 718 254 l -4 -8 h 8 z")}
        {box(672, 256, 92, 30, "HSL-P")}
        <text x="640" y="272" fontSize="6.8" className="fill-muted-foreground">phosphorylated</text>
        <text x="640" y="282" fontSize="6.8" className="fill-muted-foreground">hormone-sensitive lipase</text>
        {arrow("M 718 286 L 718 316", "M 718 318 l -4 -8 h 8 z")}
        <text x="728" y="306" fontSize="7" fontWeight="700" className="fill-foreground">lipolysis</text>
        {box(668, 320, 100, 40, "TG")}
        {arrow("M 768 340 L 802 328", "M 805 327 l -7.5 -1 3 7 z")}
        {arrow("M 768 348 L 802 360", "M 805 361 l -7.5 1 3 -7 z")}
        {box(808, 306, 100, 30, "FFA", "fill-warning-soft stroke-warning", "fill-warning")}
        {box(808, 356, 100, 30, "Glycerol", "fill-warning-soft stroke-warning", "fill-warning")}
        {arrow("M 908 321 L 936 321", "M 939 321 l -7 -3.5 v 7 z")}
        {arrow("M 908 371 L 936 371", "M 939 371 l -7 -3.5 v 7 z")}
        <text x="940" y="318" fontSize="6.6" className="fill-muted-foreground">to</text>
        <text x="940" y="328" fontSize="6.6" className="fill-muted-foreground">blood</text>
        <text x="940" y="368" fontSize="6.6" className="fill-muted-foreground">to</text>
        <text x="940" y="378" fontSize="6.6" className="fill-muted-foreground">blood</text>
        <text x="516" y="414" fontSize="7.2" className="fill-muted-foreground">Fasted logic: glucagon/epinephrine → cAMP → protein kinase A → phosphorylated HSL</text>
        <text x="516" y="428" fontSize="7.2" className="fill-muted-foreground">performs lipolysis of stored TG → FFA and glycerol released to the blood for the liver</text>
        <text x="516" y="442" fontSize="7.2" className="fill-muted-foreground">(FFA → β-oxidation, ketogenesis; glycerol → gluconeogenesis).</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="474" width="932" height="44" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="492" fontSize="8" fontWeight="800" className="fill-foreground">One cell, two jobs — the adipocyte is the lipid bank: insulin deposits (LPL + esterification), fasting hormones withdraw (HSL lipolysis).</text>
        <text x="42" y="510" fontSize="7.8" className="fill-muted-foreground">LPL is activated by Apo CII on lipoproteins; HSL is phosphorylated (activated) by protein kinase A downstream of glucagon/epinephrine cAMP signaling.</text>
      </g>
      <g>
        <text x="24" y="544" fontSize="8.5" className="fill-muted-foreground">Original KYP redraw of the source figure’s fed/fasted adipocyte pair.</text>
      </g>
    </svg>
  );
}
