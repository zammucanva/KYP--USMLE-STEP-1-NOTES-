"use client";

// Original KYP visuals — Cellular block (First Aid 2026, Part 1 pdf 66–69 /
// book 44–47). All SVGs use theme tokens (currentColor + Tailwind classes),
// so they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// Cell cycle — phases + cyclin-CDK/Rb/p53 checkpoint map
// ---------------------------------------------------------------------------

export function CellCycleCheckpointMap() {
  const w = 980;
  const h = 600;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cell cycle phase map with interphase G1 S G2 M, the G1 restriction point, cyclin-CDK phosphorylation of Rb releasing E2F, p53-p21 DNA-damage arrest, and the intrinsic apoptosis pathway" className="min-w-[940px]">
      {/* cycle ring */}
      <g>
        <circle cx="330" cy="310" r="196" fill="none" strokeWidth="30" className="stroke-muted/60" />
        {/* phase arcs (approximated with thick colored arcs via dash) */}
        <circle cx="330" cy="310" r="196" fill="none" strokeWidth="30" strokeDasharray="240 995" className="stroke-brand/70" transform="rotate(-108 330 310)" />
        <circle cx="330" cy="310" r="196" fill="none" strokeWidth="30" strokeDasharray="200 1035" className="stroke-neural/70" transform="rotate(128 330 310)" />
        <circle cx="330" cy="310" r="196" fill="none" strokeWidth="30" strokeDasharray="150 1085" className="stroke-warning/70" transform="rotate(-140 330 310)" />
        <text x="330" y="118" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-foreground">G₂</text>
        <text x="330" y="134" textAnchor="middle" fontSize="8" className="fill-muted-foreground">checkpoint: DNA damage</text>
        <text x="478" y="270" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-foreground">M</text>
        <text x="478" y="286" textAnchor="middle" fontSize="8" className="fill-muted-foreground">mitosis + cytokinesis</text>
        <text x="478" y="298" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">shortest phase</text>
        <text x="330" y="512" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-foreground">G₁</text>
        <text x="330" y="528" textAnchor="middle" fontSize="8" className="fill-muted-foreground">variable duration</text>
        <text x="176" y="270" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-foreground">S</text>
        <text x="176" y="286" textAnchor="middle" fontSize="8" className="fill-muted-foreground">DNA synthesis</text>
        <text x="330" y="316" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-muted-foreground">INTERPHASE</text>
        {/* G0 */}
        <rect x="76" y="404" width="86" height="40" rx="10" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="119" y="428" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">G₀</text>
        <path d="M 150 402 C 190 380, 240 370, 286 384" fill="none" strokeWidth="1.5" className="stroke-muted-foreground" />
        <path d="M294 387 l-10 -4 l3 10 z" className="fill-muted-foreground" />
        <text x="216" y="374" fontSize="7.5" className="fill-muted-foreground">growth factor</text>
        <path d="M 210 444 C 240 470, 268 476, 300 462" fill="none" strokeWidth="1.2" strokeDasharray="4 3" className="stroke-muted-foreground" />
        <text x="262" y="486" fontSize="7.5" className="fill-muted-foreground">re-entry</text>
        {/* restriction point */}
        <line x1="240" y1="446" x2="258" y2="434" strokeWidth="3.4" className="stroke-emergency" />
        <text x="196" y="428" textAnchor="end" fontSize="8.5" fontWeight="800" className="fill-emergency">G₁ restriction point</text>
        <text x="196" y="440" textAnchor="end" fontSize="7.5" className="fill-muted-foreground">Rb + p53 modulate</text>
      </g>

      {/* Rb / E2F gate */}
      <g>
        <rect x="556" y="70" width="396" height="150" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="574" y="94" fontSize="10.5" fontWeight="800" className="fill-foreground">The Rb–E2F gate (G₁ → S)</text>
        <g>
          <rect x="588" y="112" width="70" height="32" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
          <text x="623" y="132" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">Rb</text>
          <text x="666" y="132" fontSize="10" fontWeight="800" className="fill-foreground">+</text>
          <rect x="678" y="112" width="70" height="32" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <text x="713" y="132" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-neural">E2F</text>
          <text x="760" y="118" fontSize="7.5" className="fill-muted-foreground">E2F sequestered —</text>
          <text x="760" y="129" fontSize="7.5" className="fill-muted-foreground">no S-phase genes</text>
        </g>
        <path d="M 748 148 C 780 148, 800 150, 820 152" fill="none" strokeWidth="1.5" className="stroke-muted-foreground" />
        <text x="876" y="144" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">cyclin–CDK ⊕</text>
        <text x="876" y="156" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">phosphorylates Rb</text>
        <g>
          <rect x="588" y="168" width="70" height="32" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
          <text x="623" y="188" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">Rb-P</text>
          <text x="668" y="190" fontSize="8" className="fill-muted-foreground">↓</text>
          <rect x="678" y="168" width="70" height="32" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <text x="713" y="188" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-neural">E2F</text>
          <text x="760" y="184" fontSize="7.5" fontWeight="700" className="fill-foreground">E2F released → S-phase</text>
          <text x="760" y="195" fontSize="7.5" fontWeight="700" className="fill-foreground">gene transcription → S</text>
        </g>
      </g>

      {/* p53 arrest panel */}
      <g>
        <rect x="556" y="244" width="396" height="150" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="574" y="268" fontSize="10.5" fontWeight="800" className="fill-foreground">DNA damage → p53 → arrest</text>
        <g>
          <rect x="588" y="286" width="86" height="32" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="631" y="306" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-warning">p53</text>
          <text x="690" y="292" fontSize="7.5" className="fill-muted-foreground">DNA damage activates p53;</text>
          <text x="690" y="303" fontSize="7.5" className="fill-muted-foreground">Li-Fraumeni syndrome = germline</text>
          <text x="690" y="314" fontSize="7.5" className="fill-muted-foreground">p53 loss of function</text>
          <path d="M 674 302 L 706 302" fill="none" strokeWidth="1.5" className="stroke-muted-foreground" />
          <path d="M714 302 l-9 -4.5 v9 z" className="fill-muted-foreground" />
          <text x="720" y="298" fontSize="8" fontWeight="700" className="fill-foreground">induces p21</text>
          <rect x="720" y="306" width="64" height="26" rx="7" className="fill-emergency-soft stroke-emergency" strokeWidth="1.3" />
          <text x="752" y="323" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">p21</text>
        </g>
        <line x1="784" y1="319" x2="812" y2="319" strokeWidth="2.2" className="stroke-emergency" />
        <text x="794" y="336" fontSize="10" fontWeight="800" className="fill-emergency">⊣</text>
        <rect x="822" y="306" width="100" height="26" rx="7" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
        <text x="872" y="323" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">cyclin–CDK</text>
        <text x="574" y="366" fontSize="8" className="fill-muted-foreground">Result: Rb hypophosphorylated (active) → G₁–S progression inhibited → cell cycle arrest.</text>
        <text x="574" y="380" fontSize="8" fontWeight="700" className="fill-emergency">HPV E6 degrades p53 — the virus removes the checkpoint.</text>
      </g>

      {/* apoptosis panel */}
      <g>
        <rect x="556" y="418" width="396" height="150" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="574" y="442" fontSize="10.5" fontWeight="800" className="fill-foreground">Intrinsic apoptosis (if damage is irreparable)</text>
        <g>
          <rect x="588" y="460" width="112" height="30" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
          <text x="644" y="479" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">BCL-2 / BCL-XL</text>
          <text x="716" y="476" fontSize="8" fontWeight="700" className="fill-muted-foreground">anti-apoptotic</text>
          <text x="716" y="487" fontSize="7.5" className="fill-muted-foreground">p53 ⊣ their protection</text>
          <rect x="588" y="508" width="112" height="30" rx="8" className="fill-emergency-soft stroke-emergency" strokeWidth="1.3" />
          <text x="644" y="527" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emergency">BAX / BAK</text>
          <path d="M 700 523 L 740 523" fill="none" strokeWidth="1.5" className="stroke-muted-foreground" />
          <path d="M748 523 l-9 -4.5 v9 z" className="fill-muted-foreground" />
          <rect x="752" y="508" width="96" height="30" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
          <text x="800" y="527" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">caspase activation</text>
          <text x="752" y="556" fontSize="8" fontWeight="700" className="fill-foreground">→ apoptosis (intrinsic pathway)</text>
          <text x="574" y="478" fontSize="0" className="fill-muted-foreground"> </text>
        </g>
      </g>

      {/* cell types strip */}
      <g>
        <rect x="26" y="470" width="504" height="110" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="492" fontSize="9.5" fontWeight="800" className="fill-foreground">Cell types by cycle behavior</text>
        <text x="42" y="510" fontSize="7.5" fontWeight="800" className="fill-emergency">Permanent — stay in G₀</text>
        <text x="42" y="522" fontSize="7" className="fill-muted-foreground">neurons, skeletal &amp; cardiac muscle, RBCs</text>
        <text x="200" y="510" fontSize="7.5" fontWeight="800" className="fill-warning">Stable (quiescent)</text>
        <text x="200" y="522" fontSize="7" className="fill-muted-foreground">enter G₁ when stimulated:</text>
        <text x="200" y="532" fontSize="7" className="fill-muted-foreground">hepatocytes, lymphocytes, PCT, periosteum</text>
        <text x="380" y="510" fontSize="7.5" fontWeight="800" className="fill-brand">Labile — never G₀</text>
        <text x="380" y="522" fontSize="7" className="fill-muted-foreground">short G₁, rapid division —</text>
        <text x="380" y="532" fontSize="7" className="fill-muted-foreground">marrow, gut, skin, hair, germ cells;</text>
        <text x="380" y="542" fontSize="7" fontWeight="700" className="fill-brand">most affected by chemotherapy</text>
        <text x="42" y="566" fontSize="7.5" className="fill-muted-foreground">Growth factors (insulin, PDGF, EGF — receptor tyrosine kinases; EPO via JAK2) drive G₁→S.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Secretory pathway — vesicle traffic with COPI/COPII/clathrin
// ---------------------------------------------------------------------------

function VesicleArrow({ x1, y1, x2, y2, tone, label, labelX, labelY, dashed }: { x1: number; y1: number; x2: number; y2: number; tone: string; label?: string; labelX?: number; labelY?: number; dashed?: boolean }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2" className={tone} strokeDasharray={dashed ? "5 4" : undefined} />
      <circle cx={(x1 + x2) / 2} cy={(y1 + y2) / 2} r="5.5" className={tone} fill="currentColor" />
      {label && <text x={labelX} y={labelY} fontSize="8" fontWeight="800" className="fill-foreground">{label}</text>}
    </g>
  );
}

export function SecretoryPathwayMap() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Secretory pathway map: rough ER to Golgi via COPII anterograde vesicles, COPI retrograde traffic, clathrin-coated routes to lysosomes and endosomes, and exocytosis at the plasma membrane" className="min-w-[940px]">
      {/* legend */}
      <g>
        <text x="30" y="34" fontSize="10.5" fontWeight="800" className="fill-foreground">Vesicle traffic — who coats which trip</text>
        <circle cx="40" cy="56" r="6" className="fill-neural stroke-neural" />
        <text x="52" y="60" fontSize="8.5" className="fill-foreground">COPII — anterograde (forward)</text>
        <circle cx="250" cy="56" r="6" className="fill-emergency stroke-emergency" />
        <text x="262" y="60" fontSize="8.5" className="fill-foreground">COPI — retrograde (back)</text>
        <circle cx="460" cy="56" r="6" className="fill-warning stroke-warning" />
        <text x="472" y="60" fontSize="8.5" className="fill-foreground">Clathrin — lysosome &amp; endosome routes</text>
        <text x="30" y="82" fontSize="8.5" fontWeight="700" className="fill-brand">“Two (COPII) steps forward (anterograde); one (COPI) step back (retrograde).”</text>
      </g>

      {/* plasma membrane */}
      <g>
        <rect x="60" y="108" width="860" height="14" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
        <text x="490" y="101" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">PLASMA MEMBRANE</text>
        {/* exocytosis arrow (secretory vesicle up) */}
        <rect x="620" y="140" width="120" height="34" rx="9" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="680" y="161" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">Secretory vesicle</text>
        <VesicleArrow x1={680} y1={174} x2={680} y2={128} tone="stroke-neural" label="COPII" labelX={610} labelY={160} />
        <text x="756" y="158" fontSize="8" className="fill-muted-foreground">exocytosis</text>
        {/* clathrin: membrane → early endosome (RME) */}
        <VesicleArrow x1={240} y1={126} x2={240} y2={186} tone="stroke-warning" label="Clathrin" labelX={166} labelY={160} />
        <text x="150" y="172" fontSize="7.5" className="fill-muted-foreground">receptor-mediated endocytosis</text>
        <text x="150" y="182" fontSize="7.5" className="fill-muted-foreground">(eg, LDL receptor)</text>
      </g>

      {/* early endosome */}
      <g>
        <ellipse cx="240" cy="216" rx="74" ry="34" className="fill-warning-soft stroke-warning" strokeWidth="1.5" />
        <text x="240" y="212" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-warning">Early endosome</text>
        <text x="240" y="225" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">sorting center</text>
        <VesicleArrow x1={316} y1={222} x2={380} y2={244} tone="stroke-muted-foreground" />
        <text x="324" y="240" fontSize="7.5" className="fill-muted-foreground">recycle → membrane</text>
      </g>
      {/* late endosome */}
      <g>
        <ellipse cx="424" cy="266" rx="66" ry="30" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
        <text x="424" y="262" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">Late endosome</text>
        <VesicleArrow x1={490} y1={270} x2={540} y2={280} tone="stroke-muted-foreground" />
      </g>
      {/* lysosome */}
      <g>
        <ellipse cx="600" cy="288" rx="62" ry="32" className="fill-emergency-soft stroke-emergency" strokeWidth="1.5" />
        <text x="600" y="284" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-emergency">Lysosome</text>
        <text x="600" y="297" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">degradation</text>
        {/* clathrin: trans-Golgi → lysosome */}
        <VesicleArrow x1={556} y1={340} x2={588} y2={316} tone="stroke-warning" label="Clathrin" labelX={494} labelY={344} />
      </g>

      {/* Golgi */}
      <g>
        <rect x="380" y="316" width="180" height="76" rx="14" className="fill-neural-soft stroke-neural" strokeWidth="1.6" />
        <text x="470" y="340" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-neural">GOLGI</text>
        <text x="404" y="358" fontSize="8.5" fontWeight="800" className="fill-foreground">cis</text>
        <text x="536" y="358" textAnchor="end" fontSize="8.5" fontWeight="800" className="fill-foreground">trans</text>
        <path d="M 416 350 C 436 342, 456 342, 476 350 C 496 358, 516 358, 534 350" fill="none" strokeWidth="2.4" className="stroke-neural/70" />
        <path d="M 416 364 C 436 356, 456 356, 476 364 C 496 372, 516 372, 534 364" fill="none" strokeWidth="2.4" className="stroke-neural/70" />
        <text x="470" y="386" textAnchor="middle" fontSize="7" className="fill-muted-foreground">N-oligo modified · O-oligo added · mannose-6-P for lysosomes</text>
        {/* COPI retro within Golgi */}
        <VesicleArrow x1={524} y1={330} x2={420} y2={330} tone="stroke-emergency" dashed label="COPI" labelX={472} labelY={326} />
        {/* COPII: ER → cis-Golgi */}
        <VesicleArrow x1={330} y1={392} x2={392} y2={392} tone="stroke-neural" label="COPII" labelX={330} labelY={382} />
        {/* COPI: cis-Golgi → ER */}
        <VesicleArrow x1={392} y1={420} x2={330} y2={420} tone="stroke-emergency" dashed label="COPI" labelX={330} labelY={440} />
      </g>

      {/* RER */}
      <g>
        <rect x="120" y="368" width="210" height="86" rx="12" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
        <text x="225" y="392" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">ROUGH ER</text>
        <text x="225" y="408" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">secretory protein synthesis · N-linked glycosylation</text>
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={150 + i * 22} cy={428} r="4" className="fill-foreground/70" />
        ))}
        <text x="225" y="443" textAnchor="middle" fontSize="7" className="fill-muted-foreground">ribosomes dot the cytosolic face</text>
      </g>

      {/* nucleus */}
      <g>
        <ellipse cx="170" cy="500" rx="86" ry="34" className="fill-card stroke-border" strokeWidth="1.5" />
        <text x="170" y="497" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">Nucleus</text>
        <text x="170" y="510" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">nuclear envelope contiguous with ER</text>
      </g>

      {/* SRP note */}
      <g>
        <rect x="330" y="470" width="300" height="76" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="346" y="492" fontSize="9" fontWeight="800" className="fill-foreground">SRP — signal recognition particle</text>
        <text x="346" y="508" fontSize="7.5" className="fill-muted-foreground">Cytosolic ribonucleoprotein that ferries the</text>
        <text x="346" y="519" fontSize="7.5" className="fill-muted-foreground">polypeptide-ribosome complex from cytosol to RER.</text>
        <text x="346" y="534" fontSize="7.5" fontWeight="700" className="fill-emergency">Absent/dysfunctional SRP → protein accumulates in cytosol.</text>
      </g>

      {/* I-cell note */}
      <g>
        <rect x="660" y="470" width="292" height="76" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="676" y="492" fontSize="9" fontWeight="800" className="fill-foreground">I-cell disease (mucolipidosis II, AR)</text>
        <text x="676" y="508" fontSize="7.5" className="fill-muted-foreground">Defect: N-acetylglucosaminyl-1-phosphotransferase →</text>
        <text x="676" y="519" fontSize="7.5" className="fill-muted-foreground">↓ mannose-6-P tagging → enzymes secreted instead of</text>
        <text x="676" y="530" fontSize="7.5" className="fill-muted-foreground">delivered → inclusion bodies. ↑ plasma lysosomal enzymes.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// EM-style: RER vs Golgi (histology pattern, KYP original)
// ---------------------------------------------------------------------------

export function RerGolgiEm() {
  const w = 980;
  const h = 420;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Electron-microscopy style comparison: rough endoplasmic reticulum as stacked ribosome-studded cisternae versus Golgi apparatus as smooth stacked saccules with vesicles" className="min-w-[940px]">
      <text x="240" y="40" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">RER on EM</text>
      <text x="740" y="40" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">Golgi on EM</text>

      {/* RER panel */}
      <g>
        <rect x="40" y="60" width="400" height="300" rx="14" className="fill-muted/40 stroke-border" strokeWidth="1.2" />
        {[0, 1, 2, 3, 4].map((row) => (
          <g key={row}>
            <path d={`M 80 ${110 + row * 46} C 150 ${100 + row * 46}, 250 ${122 + row * 46}, 380 ${106 + row * 46}`} fill="none" strokeWidth="7" className="stroke-brand/80" />
            {Array.from({ length: 9 }).map((_, i) => (
              <circle key={i} cx={86 + i * 34} cy={(110 + row * 46) - 7 + (i % 3)} r="4" className="fill-foreground/80" />
            ))}
          </g>
        ))}
        <text x="240" y="332" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">stacked cisternae studded with ribosomes (dark dots)</text>
        <text x="240" y="346" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-brand">rich in: goblet cells, plasma cells, Nissl bodies (neurons)</text>
      </g>

      {/* Golgi panel */}
      <g>
        <rect x="540" y="60" width="400" height="300" rx="14" className="fill-muted/40 stroke-border" strokeWidth="1.2" />
        {[0, 1, 2, 3].map((row) => (
          <path key={row} d={`M 600 ${120 + row * 40} C 680 ${108 + row * 40}, 800 ${132 + row * 40}, 890 ${114 + row * 40}`} fill="none" strokeWidth="8" className="stroke-neural/80" />
        ))}
        {/* vesicles budding at the trans face */}
        {[[600, 296], [650, 306], [790, 300], [860, 290]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="9" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
        ))}
        <text x="590" y="278" fontSize="8.5" fontWeight="700" className="fill-foreground">cis</text>
        <text x="900" y="272" fontSize="8.5" fontWeight="700" className="fill-foreground">trans</text>
        <text x="740" y="332" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">smooth stacked saccules + budding vesicles (no ribosomes)</text>
        <text x="740" y="346" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-neural">distribution center: modifies N-oligo, adds O-oligo + mannose-6-P</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Microtubule architecture
// ---------------------------------------------------------------------------

export function MicrotubuleArchitecture() {
  const w = 980;
  const h = 430;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Microtubule architecture: helical cylinder of alpha-beta tubulin heterodimers with two bound GTP each, negative end near the nucleus and positive end toward the cell periphery, with kinesin anterograde and dynein retrograde motors" className="min-w-[940px]">
      <text x="490" y="38" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">Microtubule — a helical cylinder of tubulin heterodimers</text>

      {/* cylinder (two protofilament bands) */}
      <g>
        <rect x="120" y="90" width="560" height="150" rx="16" className="fill-card stroke-border" strokeWidth="1.6" />
        <path d="M 120 150 C 240 118, 340 182, 460 150 C 560 124, 620 168, 680 150" fill="none" strokeWidth="16" className="stroke-brand/25" />
        <path d="M 120 186 C 240 154, 340 218, 460 186 C 560 160, 620 204, 680 186" fill="none" strokeWidth="16" className="stroke-neural/25" />
        {/* dimer rows */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <g key={i}>
            <rect x={140 + i * 66} y={116} width={30} height={26} rx={6} className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
            <text x={155 + i * 66} y={133} textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">α</text>
            <rect x={172 + i * 66} y={116} width={30} height={26} rx={6} className="fill-neural-soft stroke-neural" strokeWidth="1.3" />
            <text x={187 + i * 66} y={133} textAnchor="middle" fontSize="10" fontWeight="800" className="fill-neural">β</text>
            <circle cx={155 + i * 66} cy={198} r="4.5" className="fill-warning stroke-warning/60" strokeWidth="1" />
            <circle cx={187 + i * 66} cy={198} r="4.5" className="fill-warning stroke-warning/60" strokeWidth="1" />
            {i === 0 && <text x={155 + i * 66} y={216} textAnchor="middle" fontSize="7.5" className="fill-warning">2 GTP per dimer</text>}
          </g>
        ))}
        <text x="460" y="76" textAnchor="middle" fontSize="8" className="fill-muted-foreground">protofilaments wind helically around the cylinder wall</text>
      </g>

      {/* polarity */}
      <g>
        <text x="100" y="168" textAnchor="end" fontSize="13" fontWeight="800" className="fill-emergency">− end</text>
        <text x="100" y="184" textAnchor="end" fontSize="8" className="fill-muted-foreground">near nucleus</text>
        <text x="700" y="168" fontSize="13" fontWeight="800" className="fill-brand">+ end</text>
        <text x="700" y="184" fontSize="8" className="fill-muted-foreground">points to periphery</text>
      </g>

      {/* motors */}
      <g>
        <rect x="120" y="286" width="380" height="56" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
        <text x="140" y="308" fontSize="9.5" fontWeight="800" className="fill-brand">KINESIN — anterograde (− → +)</text>
        <text x="140" y="326" fontSize="8" className="fill-foreground/80">carries cargo toward the periphery · HSV reactivation uses it</text>
        <rect x="540" y="286" width="380" height="56" rx="10" className="fill-emergency-soft stroke-emergency" strokeWidth="1.3" />
        <text x="560" y="308" fontSize="9.5" fontWeight="800" className="fill-emergency">DYNEIN — retrograde (+ → −)</text>
        <text x="560" y="326" fontSize="8" className="fill-foreground/80">toward the cell body · tetanus, polio, rabies, HSV ride dynein in</text>
        <text x="490" y="366" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">Slow anterograde transport is the rate-limiting step of peripheral nerve regeneration after injury.</text>
      </g>

      {/* drug chip */}
      <g>
        <rect x="120" y="382" width="800" height="34" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="140" y="403" fontSize="8.5" fontWeight="700" className="fill-foreground">Drugs that act on microtubules — “constructed very terribly”: meBendazole · grIseofulvin · vinCa alkaloids · taxanes</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cilium — 9+2 axoneme + basal body (EM cross-sections, diagnostic pattern)
// ---------------------------------------------------------------------------

export function CiliaAxonemeBasalBody() {
  const w = 980;
  const h = 470;
  // ring geometry helper values (static, precomputed)
  const cx1 = 260, cy1 = 250, R1 = 120;
  const cx2 = 740, cy2 = 250, R2 = 118;
  const ring = (cx: number, cy: number, r: number, n: number, key: string) =>
    Array.from({ length: n }).map((_, i) => {
      const a = (2 * Math.PI * i) / n - Math.PI / 2;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      return { x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100, key: `${key}${i}` };
    });
  const axA = ring(cx1, cy1, R1, 9, "a");
  const axB = ring(cx1, cy1, R1, 9, "b");
  const triA = ring(cx2, cy2, R2, 9, "t1");
  const triB = ring(cx2, cy2, R2 - 22, 9, "t2");
  const triC = ring(cx2, cy2, R2 - 44, 9, "t3");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cilium cross-sections: the 9 plus 2 axoneme with outer doublets, dynein arms and nexin links, and the basal body with 9 triplets and no central microtubules" className="min-w-[940px]">
      <text x={cx1} y="48" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">AXONEME — 9 doublets + 2 singlets</text>
      <text x={cx2} y="48" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">BASAL BODY — 9 triplets, no central pair</text>

      {/* axoneme */}
      <g>
        <circle cx={cx1} cy={cy1} r={R1 + 26} className="fill-muted/30 stroke-border" strokeWidth="1.2" />
        {/* central pair */}
        <circle cx={cx1 - 16} cy={cy1} r="13" className="fill-neural-soft stroke-neural" strokeWidth="1.6" />
        <circle cx={cx1 + 16} cy={cy1} r="13" className="fill-neural-soft stroke-neural" strokeWidth="1.6" />
        <text x={cx1} y={cy1 - 30} textAnchor="middle" fontSize="8" fontWeight="700" className="fill-neural">2 central singlets</text>
        {axA.map((p, i) => {
          const pb = axB[(i + 1) % 9];
          return (
            <g key={p.key}>
              <circle cx={p.x} cy={p.y} r="12" className="fill-card stroke-foreground/80" strokeWidth="2" />
              <circle cx={(p.x + pb.x) / 2} cy={(p.y + pb.y) / 2} r="10" className="fill-card stroke-foreground/50" strokeWidth="1.4" />
              <line x1={p.x} y1={p.y} x2={cx1} y2={cy1} strokeWidth="1.2" className="stroke-muted-foreground/50" />
              <text x={p.x} y={p.y + 3} textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">A</text>
            </g>
          );
        })}
        <text x={cx1} y={410} textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">A + B subfibers per doublet · nexin links between doublets (stabilize)</text>
        <text x={cx1} y={424} textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-emergency">dynein ATPase arms → differential sliding → ciliary bending</text>
        <text x={cx1} y="98" textAnchor="middle" fontSize="8" className="fill-muted-foreground">motile cilium · gap junctions coordinate beating</text>
      </g>

      {/* basal body */}
      <g>
        <circle cx={cx2} cy={cy2} r={R2 + 26} className="fill-muted/30 stroke-border" strokeWidth="1.2" />
        {triA.map((p, i) => (
          <g key={p.key}>
            <circle cx={p.x} cy={p.y} r="11" className="fill-card stroke-foreground/80" strokeWidth="2" />
            <circle cx={triB[i].x} cy={triB[i].y} r="10" className="fill-card stroke-foreground/55" strokeWidth="1.5" />
            <circle cx={triC[i].x} cy={triC[i].y} r="9" className="fill-card stroke-foreground/35" strokeWidth="1.3" />
          </g>
        ))}
        <text x={cx2} y={cy2 + 4} textAnchor="middle" fontSize="9" fontWeight="700" className="fill-muted-foreground">no central</text>
        <text x={cx2} y={cy2 + 16} textAnchor="middle" fontSize="9" fontWeight="700" className="fill-muted-foreground">microtubules</text>
        <text x={cx2} y="410" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">base of the cilium, below the cell membrane — template for the doublets above</text>
        <text x={cx2} y="424" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-warning">centrioles share this 9-triplet anatomy</text>
        <text x={cx2} y="98" textAnchor="middle" fontSize="8" className="fill-muted-foreground">A · B · C subfibers per triplet</text>
      </g>

      {/* clinical chip */}
      <g>
        <rect x="26" y="436" width="928" height="30" rx="8" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="455" fontSize="8.5" fontWeight="700" className="fill-foreground">Primary (nonmotile) cilia = chemical sensors → dysgenesis: polycystic kidney disease, mitral valve prolapse, retinal degeneration.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Dextrocardia CXR (diagnostic-pattern-preserving KYP original)
// ---------------------------------------------------------------------------

export function DextrocardiaCxr() {
  const w = 980;
  const h = 430;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Chest radiograph comparison: normal left-sided cardiac silhouette versus mirror-image dextrocardia with the cardiac apex pointing to the patient's right, as seen in Kartagener syndrome with situs inversus" className="min-w-[940px]">
      <text x="250" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">NORMAL CXR</text>
      <text x="730" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">SITUS INVERSUS — DEXTROCARDIA</text>

      {/* normal panel */}
      <g>
        <rect x="50" y="54" width="400" height="320" rx="12" className="fill-muted/40 stroke-border" strokeWidth="1.4" />
        {/* lungs */}
        <ellipse cx="160" cy="200" rx="76" ry="118" className="fill-card stroke-border" strokeWidth="1.2" />
        <ellipse cx="340" cy="200" rx="76" ry="118" className="fill-card stroke-border" strokeWidth="1.2" />
        {/* heart left */}
        <path d="M 250 120 C 320 110, 372 150, 372 210 C 372 268, 330 306, 268 306 C 236 306, 218 282, 224 250 C 228 214, 236 172, 250 120 Z" className="fill-foreground/75" />
        {/* ribs */}
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M 92 ${130 + i * 34} C 130 ${118 + i * 34}, 168 ${124 + i * 34}, 196 ${138 + i * 34}`} fill="none" strokeWidth="2.4" className="stroke-muted-foreground/40" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M 408 ${130 + i * 34} C 370 ${118 + i * 34}, 332 ${124 + i * 34}, 304 ${138 + i * 34}`} fill="none" strokeWidth="2.4" className="stroke-muted-foreground/40" />
        ))}
        {/* apex marker */}
        <circle cx="238" cy="292" r="6" className="fill-emergency stroke-emergency" />
        <text x="238" y="318" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emergency">apex points LEFT</text>
        <text x="250" y="348" textAnchor="middle" fontSize="8" className="fill-muted-foreground">gastric bubble under the left hemidiaphragm (not shown)</text>
        <text x="70" y="78" fontSize="9" fontWeight="700" className="fill-foreground">R</text>
        <text x="430" y="78" textAnchor="end" fontSize="9" fontWeight="700" className="fill-foreground">L</text>
      </g>

      {/* dextrocardia panel */}
      <g>
        <rect x="530" y="54" width="400" height="320" rx="12" className="fill-muted/40 stroke-border" strokeWidth="1.4" />
        <ellipse cx="640" cy="200" rx="76" ry="118" className="fill-card stroke-border" strokeWidth="1.2" />
        <ellipse cx="820" cy="200" rx="76" ry="118" className="fill-card stroke-border" strokeWidth="1.2" />
        {/* heart right (mirror) */}
        <path d="M 730 120 C 660 110, 608 150, 608 210 C 608 268, 650 306, 712 306 C 744 306, 762 282, 756 250 C 752 214, 744 172, 730 120 Z" className="fill-foreground/75" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M 572 ${130 + i * 34} C 610 ${118 + i * 34}, 648 ${124 + i * 34}, 676 ${138 + i * 34}`} fill="none" strokeWidth="2.4" className="stroke-muted-foreground/40" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M 888 ${130 + i * 34} C 850 ${118 + i * 34}, 812 ${124 + i * 34}, 784 ${138 + i * 34}`} fill="none" strokeWidth="2.4" className="stroke-muted-foreground/40" />
        ))}
        <circle cx="742" cy="292" r="6" className="fill-emergency stroke-emergency" />
        <text x="742" y="318" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emergency">apex points RIGHT</text>
        <text x="730" y="348" textAnchor="middle" fontSize="8" className="fill-muted-foreground">mirror-image anatomy — stomach right, liver left</text>
        <text x="550" y="78" fontSize="9" fontWeight="700" className="fill-foreground">R</text>
        <text x="910" y="78" textAnchor="end" fontSize="9" fontWeight="700" className="fill-foreground">L</text>
      </g>

      <g>
        <rect x="26" y="388" width="928" height="34" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="409" fontSize="8.5" fontWeight="700" className="fill-foreground">Kartagener syndrome (PCD + situs inversus, AR, dynein arm defect): sinusitis · otitis · bronchiectasis · infertility / ectopic pregnancy · immotile sperm — screen with ↓ nasal nitric oxide.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Na+/K+ ATPase pump
// ---------------------------------------------------------------------------

export function NaKAtpasePump() {
  const w = 980;
  const h = 400;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Sodium potassium ATPase pump: for each ATP hydrolyzed on the cytosolic side, 3 sodium ions are pumped out and 2 potassium ions come in; digoxin inhibits the pump raising intracellular calcium and contractility" className="min-w-[940px]">
      <text x="490" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">Na⁺/K⁺-ATPase — 3 out, 2 in, 1 ATP</text>

      {/* extracellular */}
      <text x="60" y="76" fontSize="9.5" fontWeight="700" className="fill-brand">EXTRACELLULAR</text>
      {/* membrane */}
      <rect x="60" y="150" width="620" height="40" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.6" />
      <text x="690" y="176" fontSize="9.5" fontWeight="800" className="fill-warning">plasma membrane</text>
      {/* cytosol */}
      <text x="60" y="246" fontSize="9.5" fontWeight="700" className="fill-neural">CYTOSOL</text>
      <text x="690" y="246" fontSize="8.5" className="fill-muted-foreground">ATP site on the</text>
      <text x="690" y="258" fontSize="8.5" className="fill-muted-foreground">cytosolic side</text>

      {/* pump body */}
      <g>
        <ellipse cx="290" cy="170" rx="52" ry="44" className="fill-card stroke-foreground/80" strokeWidth="2" />
        <text x="290" y="166" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">Na⁺/K⁺</text>
        <text x="290" y="180" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">ATPase</text>
        {/* 3 Na out */}
        {[[180, 96], [220, 84], [260, 78]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="13" className="fill-emergency-soft stroke-emergency" strokeWidth="1.5" />
        ))}
        <text x="188" y="61" fontSize="9" fontWeight="800" className="fill-emergency">3 Na⁺ OUT</text>
        <path d="M 262 96 C 286 112, 294 128, 296 138" fill="none" strokeWidth="2" className="stroke-emergency" />
        <path d="M298 146 l-8 -6 l11 -2 z" className="fill-emergency" />
        <text x="330" y="120" fontSize="7.5" className="fill-muted-foreground">pump phosphorylated</text>
        {/* 2 K in */}
        {[[340, 100], [380, 112]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="13" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
        ))}
        <text x="406" y="98" fontSize="9" fontWeight="800" className="fill-brand">2 K⁺ IN</text>
        <path d="M 330 132 C 314 122, 308 118, 302 112" fill="none" strokeWidth="2" className="stroke-brand" />
        <path d="M296 106 l4 11 l6 -9 z" className="fill-brand" />
        <text x="330" y="228" fontSize="7.5" className="fill-muted-foreground">pump dephosphorylated</text>
        {/* ATP inside */}
        <g>
          <rect x="256" y="266" width="70" height="28" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <text x="291" y="285" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-neural">ATP</text>
          <text x="336" y="285" fontSize="8" className="fill-muted-foreground">→ ADP + P</text>
        </g>
        <text x="490" y="292" fontSize="9" fontWeight="700" className="fill-foreground">“2 strikes? K, you're still in. 3 strikes? Nah, you're out!”</text>
      </g>

      {/* digoxin panel */}
      <g>
        <rect x="26" y="316" width="928" height="70" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="340" fontSize="9.5" fontWeight="800" className="fill-foreground">Digoxin — the pump as a drug target</text>
        <text x="42" y="360" fontSize="8.5" className="fill-muted-foreground">Digoxin directly inhibits Na⁺/K⁺-ATPase → indirect inhibition of Na⁺/Ca²⁺ exchange → ↑ intracellular Ca²⁺ → ↑ cardiac contractility.</text>
        <text x="42" y="376" fontSize="8.5" fontWeight="700" className="fill-emergency">The stoichiometry (3 Na⁺ out : 2 K⁺ in per ATP) is what makes the pump electrogenic — the fact the exam quotes.</text>
      </g>
    </svg>
  );
}

export function AdaptationsComparisonMap() {
  const w = 980;
  const h = 880;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cellular adaptations — the progression map, an original KYP redraw of the source's figure (book 202 — a line-art flowchart whose nodes carry small monochrome cell-cluster rasters; VLM census confirmed the topology, no photographs). CENTER — THE PROGRESSION MAP: Normal cells at center; the teal branch up, Change in cell size and/or number, to Hyperplasia (more cells), Hypertrophy (bigger cells), and Atrophy (shrunken cells); the branch down: Change in cell structure to Dysplasia (disordered cells), Change in cell type to Metaplasia (changed cell type), and Change in cell type and structure to Neoplasia (a disordered mass); the two red exits into the terminal box Irreversible injury, necrosis or apoptosis — Inability to adapt from the adapted states and Severe stress or injury direct from normal; the red bridge If chronic irritant persists from Dysplasia to Neoplasia; the legend teal = Reversible, red = Irreversible. LEFT — the six definition blocks: the intro rule (reversible; physiologic or pathologic; excessive or persistent stress progresses to injury) with the five adaptations and their mechanisms and examples. RIGHT — the mechanism sidebar: atrophy's demolition pair (ubiquitin-proteasome pathway, autophagy, down protein synthesis, apoptosis) and its five causes; the two metaplasia directions (acid gives columnar — Barrett; smoke gives squamous); the dysplasia severity fork (mild or moderate may regress; severe becomes irreversible and progresses to carcinoma in situ). The footer carries the source attribution, the census note, and the copyright boundary." className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Cellular adaptations — the progression map (original KYP redraw)</text>
        <rect x="724" y="24" width="208" height="18" className="fill-brand-soft" />
        <text x="828" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">2 axes · 2 exits · 1 color rule</text>
      </g>
      {/* ===== LEFT — the six definition blocks ===== */}
      <g>
        <rect x="36" y="100" width="240" height="580" rx="14" className="fill-card stroke-border" />
        <text x="52" y="120" fontSize="8" fontWeight="800" className="fill-foreground">The six blocks (book 202)</text>
        <rect x="48" y="132" width="216" height="92" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="156" y="148" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-brand">THE INTRO RULE</text>
        <text x="156" y="162" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">Reversible changes — physiologic (uterine</text>
        <text x="156" y="172" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">enlargement in pregnancy) or pathologic</text>
        <text x="156" y="182" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">(myocardial hypertrophy 2° to systemic</text>
        <text x="156" y="192" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">hypertension). If stress is excessive or</text>
        <text x="156" y="202" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">persistent → cell injury: significant LV</text>
        <text x="156" y="212" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">hypertrophy → myocardial injury → HF</text>
        <rect x="48" y="234" width="216" height="74" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="156" y="250" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-foreground">HYPERTROPHY — ↑ size</text>
        <text x="156" y="264" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">↑ structural proteins and organelles</text>
        <text x="156" y="274" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">→ ↑ in size of cells;</text>
        <text x="156" y="288" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">example: cardiac hypertrophy</text>
        <rect x="48" y="318" width="216" height="88" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="156" y="334" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-foreground">HYPERPLASIA — ↑ number</text>
        <text x="156" y="348" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">controlled proliferation of stem cells</text>
        <text x="156" y="358" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">and differentiated cells → ↑ number</text>
        <text x="156" y="368" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">of cells (benign prostatic hyperplasia);</text>
        <text x="156" y="378" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">excessive stimulation → pathologic</text>
        <text x="156" y="388" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">hyperplasia (endometrial) → dysplasia</text>
        <text x="156" y="398" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">and cancer</text>
        <rect x="48" y="416" width="216" height="100" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="156" y="432" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-foreground">ATROPHY — ↓ mass</text>
        <text x="156" y="446" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">↓ in size (↑ cytoskeleton degradation via</text>
        <text x="156" y="456" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">ubiquitin-proteasome pathway and</text>
        <text x="156" y="466" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">autophagy; ↓ protein synthesis) and/or</text>
        <text x="156" y="476" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">number of cells (apoptosis). Causes:</text>
        <text x="156" y="486" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">disuse · denervation · loss of blood</text>
        <text x="156" y="496" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">supply · loss of hormonal stimulation ·</text>
        <text x="156" y="506" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">poor nutrition</text>
        <rect x="48" y="526" width="216" height="100" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="156" y="542" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-foreground">METAPLASIA — new type</text>
        <text x="156" y="556" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">reprogramming of stem cells → one cell</text>
        <text x="156" y="566" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">type replaced by another that adapts to</text>
        <text x="156" y="576" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">the new stressor: ACID — squamous →</text>
        <text x="156" y="586" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">intestinal-type columnar (Barrett);</text>
        <text x="156" y="596" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">SMOKE — columnar → squamous.</text>
        <text x="156" y="606" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">Connective tissue too: myositis ossificans</text>
        <text x="156" y="616" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">(bone within muscle after trauma)</text>
        <rect x="48" y="636" width="216" height="32" rx="10" className="fill-warning-soft/50 stroke-warning" />
        <text x="156" y="648" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">DYSPLASIA — not a true adaptation</text>
        <text x="156" y="660" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">disordered, precancerous epithelial growth → right panel</text>
      </g>
      {/* ===== CENTER — the progression map ===== */}
      <g>
        <rect x="288" y="100" width="424" height="580" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="304" y="120" fontSize="8" fontWeight="800" className="fill-foreground">THE PROGRESSION MAP — from normal to the terminal box</text>
        {/* terminal box */}
        <rect x="536" y="130" width="164" height="44" rx="8" className="fill-emergency-soft stroke-emergency" />
        <text x="618" y="148" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-emergency">IRREVERSIBLE INJURY</text>
        <text x="618" y="160" textAnchor="middle" fontSize="4.4" fontWeight="700" className="fill-foreground">→ necrosis or apoptosis</text>
        {/* top row: hyperplasia, hypertrophy, atrophy */}
        <g>
          <rect x="304" y="196" width="118" height="86" rx="10" className="fill-card stroke-brand" />
          <rect x="336" y="204" width="54" height="18" className="fill-brand-soft/60" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={339 + i * 9} y={207} width="7" height="12" rx="2.5" className="fill-card stroke-brand" strokeWidth="0.5" />
          ))}
          <text x="363" y="236" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">HYPERPLASIA</text>
          <text x="363" y="248" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">more cells — controlled</text>
          <text x="363" y="257" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">proliferation of stem cells</text>
          <text x="363" y="266" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">and differentiated cells</text>
          <text x="363" y="277" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">benign prostatic hyperplasia</text>
        </g>
        <g>
          <rect x="440" y="196" width="118" height="86" rx="10" className="fill-card stroke-brand" />
          <rect x="470" y="202" width="58" height="22" className="fill-brand-soft/60" />
          {Array.from({ length: 3 }).map((_, i) => (
            <rect key={i} x={473 + i * 19} y={205} width="16" height="16" rx="3" className="fill-card stroke-brand" strokeWidth="0.6" />
          ))}
          <text x="499" y="236" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">HYPERTROPHY</text>
          <text x="499" y="248" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">bigger cells — ↑ structural</text>
          <text x="499" y="257" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">proteins and organelles</text>
          <text x="499" y="266" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">→ ↑ in size of cells</text>
          <text x="499" y="277" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">cardiac hypertrophy</text>
        </g>
        <g>
          <rect x="576" y="196" width="118" height="86" rx="10" className="fill-card stroke-brand" />
          <rect x="608" y="206" width="54" height="14" className="fill-brand-soft/60" />
          {Array.from({ length: 3 }).map((_, i) => (
            <rect key={i} x={611 + i * 18} y={209} width="14" height="8" rx="2" className="fill-card stroke-brand" strokeWidth="0.5" />
          ))}
          <text x="635" y="236" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">ATROPHY</text>
          <text x="635" y="248" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">shrunken cells — ↓ size</text>
          <text x="635" y="257" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">(ubiquitin-proteasome +</text>
          <text x="635" y="266" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">autophagy; ↓ synthesis)</text>
          <text x="635" y="277" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">and/or ↓ number (apoptosis)</text>
        </g>
        {/* teal arrows up from normal */}
        <g className="stroke-brand" strokeWidth="1.2" fill="none">
          <path d="M 420 402 C 400 372, 380 344, 363 288" />
          <path d="M 500 400 C 500 366, 500 340, 499 290" />
          <path d="M 580 402 C 600 372, 620 344, 635 288" />
        </g>
        <path d="M363 288 l-6 -9 l12 1 z" className="fill-brand" />
        <path d="M499 290 l-5 -10 l11 0 z" className="fill-brand" />
        <path d="M635 288 l-6 -10 l12 -1 z" className="fill-brand" />
        <text x="500" y="326" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">Change in cell size and/or number</text>
        {/* normal cells */}
        <g>
          <rect x="390" y="402" width="220" height="64" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
          <rect x="424" y="412" width="152" height="18" className="fill-brand-soft/60" />
          {Array.from({ length: 5 }).map((_, i) => (
            <rect key={i} x={427 + i * 30} y={415} width="26" height="12" rx="3" className="fill-card stroke-brand" strokeWidth="0.5" />
          ))}
          <text x="500" y="446" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">NORMAL CELLS</text>
          <text x="500" y="457" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">the map&apos;s origin — every branch and exit starts here</text>
        </g>
        {/* red exit 1: inability to adapt (atrophy -> terminal) */}
        <g className="stroke-emergency" strokeWidth="1.1" fill="none">
          <path d="M 694 238 C 716 216, 716 176, 700 160" strokeDasharray="none" />
        </g>
        <path d="M700 160 l-3 -10 l11 3 z" className="fill-emergency" />
        <rect x="578" y="179" width="96" height="14" rx="4" className="fill-card stroke-border" />
        <text x="626" y="189" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Inability to adapt</text>
        {/* red exit 2: severe stress or injury (normal -> terminal) */}
        <g className="stroke-emergency" strokeWidth="1.1" fill="none">
          <path d="M 612 400 C 650 350, 640 240, 620 178" />
        </g>
        <path d="M620 178 l-1 -11 l10 5 z" className="fill-emergency" />
        <rect x="652" y="284" width="58" height="26" rx="4" className="fill-card stroke-border" />
        <text x="681" y="296" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Severe stress</text>
        <text x="681" y="306" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">or injury</text>
        {/* teal arrows down */}
        <g className="stroke-brand" strokeWidth="1.1" fill="none">
          <path d="M 440 466 C 420 500, 400 530, 372 566" />
          <path d="M 500 468 C 500 500, 497 530, 497 566" />
          <path d="M 560 466 C 580 500, 600 530, 622 566" />
        </g>
        <path d="M372 566 l-7 -8 l12 -2 z" className="fill-brand" />
        <path d="M497 566 l-5 -10 l11 0 z" className="fill-brand" />
        <path d="M622 566 l-5 -10 l11 1 z" className="fill-brand" />
        <text x="404" y="510" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-brand">Change in cell structure</text>
        <text x="470" y="510" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-brand">Change in cell type</text>
        <rect x="548" y="502" width="96" height="12" rx="4" className="fill-card stroke-border" />
        <text x="596" y="511" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-emergency">Change in cell type and structure</text>
        {/* bottom row */}
        <g>
          <rect x="304" y="566" width="118" height="84" rx="10" className="fill-card stroke-warning" />
          <polygon points="330,576 352,572 366,582 360,592 334,590" className="fill-warning-soft stroke-warning" strokeWidth="0.6" />
          <polygon points="352,578 372,574 380,588 366,596" className="fill-warning-soft stroke-warning" strokeWidth="0.6" />
          <circle cx="342" cy="584" r="2.6" className="fill-warning" />
          <circle cx="366" cy="584" r="3.2" className="fill-warning" />
          <text x="363" y="610" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">DYSPLASIA</text>
          <text x="363" y="622" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">disordered, precancerous —</text>
          <text x="363" y="631" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">pleomorphism; ↑ N:C ratio,</text>
          <text x="363" y="640" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">clumped chromatin; not a true</text>
          <text x="363" y="649" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">adaptive response</text>
        </g>
        <g>
          <rect x="440" y="566" width="118" height="84" rx="10" className="fill-card stroke-brand" />
          <rect x="466" y="576" width="66" height="12" rx="6" className="fill-brand-soft/60 stroke-brand" strokeWidth="0.5" />
          <ellipse cx="482" cy="582" rx="7" ry="5.5" className="fill-card stroke-brand" strokeWidth="0.5" />
          <ellipse cx="500" cy="582" rx="7" ry="5.5" className="fill-card stroke-brand" strokeWidth="0.5" />
          <ellipse cx="518" cy="582" rx="7" ry="5.5" className="fill-card stroke-brand" strokeWidth="0.5" />
          <text x="499" y="610" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">METAPLASIA</text>
          <text x="499" y="622" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">one cell type replaced by</text>
          <text x="499" y="631" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">another (stem-cell reprogramming)</text>
          <text x="499" y="642" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">acid → columnar (Barrett)</text>
          <text x="499" y="651" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">smoke → squamous (airway)</text>
        </g>
        <g>
          <rect x="576" y="566" width="118" height="84" rx="10" className="fill-card stroke-emergency" />
          <g className="fill-emergency-soft stroke-emergency" strokeWidth="0.5">
            <polygon points="608,576 626,572 638,580 632,590 612,590" />
            <polygon points="628,580 648,574 660,584 650,596 630,592" />
            <polygon points="612,590 630,592 640,602 620,604" />
          </g>
          <text x="635" y="618" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">NEOPLASIA</text>
          <text x="635" y="630" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">the irreversible end of the</text>
          <text x="635" y="639" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">map — change in cell type</text>
          <text x="635" y="648" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">and structure (red arrow</text>
          <text x="635" y="657" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">by the source&apos;s own legend)</text>
        </g>
        {/* dysplasia -> neoplasia bridge */}
        <g className="stroke-emergency" strokeWidth="1.1" fill="none">
          <path d="M 424 610 C 460 664, 540 664, 574 610" />
        </g>
        <path d="M574 610 l2 -11 l9 7 z" className="fill-emergency" />
        <text x="499" y="668" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">If chronic irritant persists</text>
        {/* legend */}
        <g>
          <rect x="304" y="130" width="200" height="44" rx="8" className="fill-card stroke-border" />
          <line x1="316" y1="142" x2="336" y2="142" className="stroke-brand" strokeWidth="2" />
          <text x="342" y="145" fontSize="4.4" fontWeight="700" className="fill-foreground">Reversible (source prints green)</text>
          <line x1="316" y1="162" x2="336" y2="162" className="stroke-emergency" strokeWidth="2" />
          <text x="342" y="165" fontSize="4.4" fontWeight="700" className="fill-foreground">Irreversible (source prints red)</text>
        </g>
      </g>
      {/* ===== RIGHT — the mechanism sidebar ===== */}
      <g>
        <rect x="724" y="100" width="220" height="580" rx="14" className="fill-card stroke-border" />
        <text x="740" y="120" fontSize="8" fontWeight="800" className="fill-foreground">The mechanism sidebar</text>
        <rect x="736" y="132" width="196" height="128" rx="10" className="fill-brand-soft/30 stroke-brand" />
        <text x="834" y="150" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">ATROPHY IS ACTIVE DEMOLITION</text>
        <text x="834" y="166" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">↑ cytoskeleton degradation via the</text>
        <text x="834" y="176" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">ubiquitin-proteasome pathway +</text>
        <text x="834" y="186" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">autophagy (programmed digestion of</text>
        <text x="834" y="196" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">damaged/misfolded intracellular</text>
        <text x="834" y="206" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">proteins) + ↓ protein synthesis;</text>
        <text x="834" y="216" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">and/or ↓ number of cells (apoptosis)</text>
        <text x="834" y="232" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">5 causes: disuse, denervation, loss of</text>
        <text x="834" y="242" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">blood supply, loss of hormonal</text>
        <text x="834" y="252" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">stimulation, poor nutrition</text>
        <rect x="736" y="272" width="196" height="120" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="834" y="290" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-brand">THE TWO METAPLASIA DIRECTIONS</text>
        <text x="834" y="308" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">ACID (esophagus, GERD):</text>
        <text x="834" y="318" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">nonkeratinized stratified squamous →</text>
        <text x="834" y="328" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">intestinal-type columnar — acid</text>
        <text x="834" y="338" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">resistance — Barrett esophagus</text>
        <text x="834" y="356" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">SMOKE (airway, tobacco):</text>
        <text x="834" y="366" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">pseudostratified ciliated columnar →</text>
        <text x="834" y="376" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">stratified squamous — protection</text>
        <rect x="736" y="404" width="196" height="128" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="834" y="422" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">THE DYSPLASIA SEVERITY FORK</text>
        <text x="834" y="440" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">MILD + MODERATE (not entire</text>
        <text x="834" y="450" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">thickness): may regress with</text>
        <text x="834" y="460" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">alleviation of inciting cause</text>
        <text x="834" y="478" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-emergency">SEVERE: often becomes</text>
        <text x="834" y="488" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-emergency">irreversible → progresses to</text>
        <text x="834" y="498" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-emergency">carcinoma in situ</text>
        <text x="834" y="516" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">usually preceded by persistent</text>
        <text x="834" y="526" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">metaplasia or pathologic hyperplasia</text>
        <rect x="736" y="544" width="196" height="116" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="834" y="562" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-brand">THE PROGRESSION CHAINS</text>
        <text x="834" y="580" textAnchor="middle" fontSize="3.9" className="fill-foreground">excessive stimulation → pathologic</text>
        <text x="834" y="590" textAnchor="middle" fontSize="3.9" className="fill-foreground">hyperplasia → dysplasia and cancer</text>
        <text x="834" y="606" textAnchor="middle" fontSize="3.9" className="fill-foreground">persistent insult → metaplasia →</text>
        <text x="834" y="616" textAnchor="middle" fontSize="3.9" className="fill-foreground">dysplasia → malignant transformation</text>
        <text x="834" y="626" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">(Barrett → esophageal adenoCA)</text>
        <text x="834" y="642" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">significant LV hypertrophy →</text>
        <text x="834" y="652" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">myocardial injury → HF (the slow exit)</text>
      </g>
      {/* ===== BOTTOM — the one-line map ===== */}
      <g>
        <rect x="36" y="700" width="908" height="76" rx="14" className="fill-card stroke-border" />
        <text x="52" y="720" fontSize="7" fontWeight="800" className="fill-foreground">The map in one line — two axes out of normal, two red roads into the terminal box (book 202, labels verbatim)</text>
        <rect x="52" y="730" width="876" height="34" rx="8" className="fill-secondary/60 stroke-border" />
        <text x="490" y="743" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Normal cells — change in cell size and/or number → hyperplasia · hypertrophy · atrophy (reversible) · change in cell type → metaplasia · change in cell structure → dysplasia</text>
        <text x="490" y="756" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">— if chronic irritant persists → neoplasia (change in cell type and structure) · inability to adapt / severe stress or injury → IRREVERSIBLE INJURY → necrosis or apoptosis</text>
      </g>
      {/* footer */}
      <g>
        <text x="24" y="806" fontSize="5.2" className="fill-muted-foreground">Source: First Aid 2026, book 202 (pdf 224) — Cellular adaptations: the intro, Hypertrophy, Hyperplasia, Atrophy, Metaplasia, and Dysplasia blocks; the adaptation-progression figure.</text>
        <text x="24" y="816" fontSize="5.2" className="fill-muted-foreground">Census: the figure is line art whose nodes carry ~98 small monochrome cell-cluster rasters (VLM census documented: more cells, bigger cells, shrunken cells, changed type, disordered cells, disordered mass); no photographs; no margin mnemonics (VLM confirmed).</text>
        <text x="24" y="826" fontSize="5.2" className="fill-muted-foreground">Figure topology VLM-verified: teal (source green) arrows to the size/number row and to metaplasia/dysplasia; red arrows — change in cell type and structure to neoplasia, inability to adapt + severe stress or injury to the terminal box.</text>
        <text x="24" y="836" fontSize="5.2" className="fill-muted-foreground">Copyright boundary: facts and labels are carried; expression and artwork are not — the node glyphs are original KYP vectors; the chronic-irritant bridge runs dysplasia to neoplasia.</text>
      </g>
    </svg>
  );
}
