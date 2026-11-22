"use client";

// Original KYP visuals — Genetics block I (First Aid 2026, Part 1 pdf 76–78 /
// book 54–56). All SVGs use theme tokens (currentColor + Tailwind classes),
// so they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// Hardy-Weinberg — the allele-combination square (p², 2pq, q²)
// ---------------------------------------------------------------------------

export function HwePunnettSquare() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Hardy-Weinberg allele combination square: gametes A of frequency p and a of frequency q combine in a 2 by 2 square to give genotype frequencies AA = p squared, Aa = pq, Aa = pq, and aa = q squared, with p plus q equals one and the worked cystic fibrosis carrier-frequency example" className="min-w-[940px]">
      {/* the square */}
      <g>
        <rect x="140" y="80" width="380" height="380" rx="10" className="fill-card stroke-border" strokeWidth="1.6" />
        {/* column headers */}
        <text x="290" y="62" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-foreground">A (p)</text>
        <text x="430" y="62" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-foreground">a (q)</text>
        {/* row headers */}
        <text x="106" y="282" textAnchor="end" fontSize="13" fontWeight="800" className="fill-foreground">A (p)</text>
        <text x="106" y="422" textAnchor="end" fontSize="13" fontWeight="800" className="fill-foreground">a (q)</text>
        {/* dividers */}
        <line x1="330" y1="90" x2="330" y2="450" strokeWidth="1.4" strokeDasharray="5 4" className="stroke-muted-foreground" />
        <line x1="150" y1="270" x2="510" y2="270" strokeWidth="1.4" strokeDasharray="5 4" className="stroke-muted-foreground" />
        {/* cells */}
        <rect x="162" y="100" width="150" height="150" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
        <text x="237" y="172" textAnchor="middle" fontSize="15" fontWeight="800" className="fill-brand">AA</text>
        <text x="237" y="196" textAnchor="middle" fontSize="11" className="fill-brand">p<tspan fontSize="8" dy="-4">2</tspan></text>
        <rect x="348" y="100" width="150" height="150" rx="10" className="fill-neural-soft stroke-neural" strokeWidth="1.3" />
        <text x="423" y="172" textAnchor="middle" fontSize="15" fontWeight="800" className="fill-neural">Aa</text>
        <text x="423" y="196" textAnchor="middle" fontSize="11" className="fill-neural">pq</text>
        <rect x="162" y="290" width="150" height="150" rx="10" className="fill-neural-soft stroke-neural" strokeWidth="1.3" />
        <text x="237" y="362" textAnchor="middle" fontSize="15" fontWeight="800" className="fill-neural">Aa</text>
        <text x="237" y="386" textAnchor="middle" fontSize="11" className="fill-neural">pq</text>
        <rect x="348" y="290" width="150" height="150" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
        <text x="423" y="362" textAnchor="middle" fontSize="15" fontWeight="800" className="fill-warning">aa</text>
        <text x="423" y="386" textAnchor="middle" fontSize="11" className="fill-warning">q<tspan fontSize="8" dy="-4">2</tspan></text>
        <text x="330" y="486" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">p + q = 1</text>
        <text x="330" y="504" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">p<tspan fontSize="7.5" dy="-3">2</tspan><tspan dy="3"> + 2pq + q</tspan><tspan fontSize="7.5" dy="-3">2</tspan><tspan dy="3"> = 1</tspan></text>
        <text x="330" y="528" textAnchor="middle" fontSize="8" className="fill-muted-foreground">homozygosity A · heterozygosity (carrier frequency, if AR) · homozygosity a</text>
      </g>

      {/* equations panel */}
      <g>
        <rect x="560" y="80" width="396" height="228" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="576" y="106" fontSize="11" fontWeight="800" className="fill-foreground">The equations, as the source prints them</text>
        <text x="576" y="134" fontSize="10.5" fontWeight="700" className="fill-foreground">p<tspan fontSize="7.5" dy="-3">2</tspan><tspan dy="3"> = frequency of homozygosity for allele A</tspan></text>
        <text x="576" y="158" fontSize="10.5" fontWeight="700" className="fill-foreground">q<tspan fontSize="7.5" dy="-3">2</tspan><tspan dy="3"> = frequency of homozygosity for allele a</tspan></text>
        <text x="576" y="182" fontSize="10.5" fontWeight="700" className="fill-foreground">2pq = frequency of heterozygosity</text>
        <text x="576" y="200" fontSize="8.5" className="fill-muted-foreground">(carrier frequency, if an autosomal recessive disease)</text>
        <text x="576" y="228" fontSize="10.5" fontWeight="800" className="fill-brand">X-linked recessive: males = q · females = q<tspan fontSize="7.5" dy="-3">2</tspan></text>
        <text x="576" y="258" fontSize="8.5" className="fill-muted-foreground">In a given population where mating is at random, allele and genotype</text>
        <text x="576" y="270" fontSize="8.5" className="fill-muted-foreground">frequencies will be constant — if in Hardy-Weinberg equilibrium, the</text>
        <text x="576" y="282" fontSize="8.5" className="fill-muted-foreground">values of p and q remain constant from generation to generation.</text>
        <text x="576" y="298" fontSize="8.5" fontWeight="700" className="fill-foreground">In rare autosomal recessive diseases, p ≈ 1.</text>
      </g>

      {/* worked example */}
      <g>
        <rect x="560" y="328" width="396" height="212" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="576" y="354" fontSize="11" fontWeight="800" className="fill-foreground">The source's worked example — cystic fibrosis</text>
        {[
          ["Prevalence of CF in the US ≈ 1/3200", "so q² = 1/3200"],
          ["q = √(1/3200) ≈ 0.017", "1.7% of the population carries the disease allele"],
          ["p = 1 − 0.017 ≈ 0.982", "(p + q = 1)"],
          ["2pq = 0.035", "≈ 3.5% heterozygous carrier frequency"],
        ].map(([a, b], i) => (
          <g key={i}>
            <rect x="576" y={368 + i * 42} width="364" height="34" rx="8" className={i === 3 ? "fill-brand-soft stroke-brand" : "fill-muted/25 stroke-border"} strokeWidth="1.1" />
            <text x="588" y={389 + i * 42} fontSize="9.5" fontWeight="800" className={i === 3 ? "fill-brand" : "fill-foreground"}>{a}</text>
            <text x="926" y={389 + i * 42} textAnchor="end" fontSize="8" className="fill-muted-foreground">{b}</text>
          </g>
        ))}
        <text x="576" y="534" fontSize="8" className="fill-muted-foreground">Since the disease is rare, p ≈ 1 gives a similar result — the exam's favorite shortcut.</text>
      </g>

      {/* assumptions strip */}
      <g>
        <rect x="140" y="546" width="816" height="0" />
        <text x="140" y="552" fontSize="8.5" fontWeight="700" className="fill-foreground">HWE assumptions:</text>
        <text x="252" y="552" fontSize="8.5" className="fill-muted-foreground">no mutation at the locus · no natural selection · completely random mating · no net migration · large population</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// McCune-Albright — unilateral café-au-lait mosaic pattern (diagnostic-pattern
// preserving KYP original; ragged "coast of Maine" edges vs NF1 smooth)
// ---------------------------------------------------------------------------

export function CafeAuLaitMosaicPattern() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Mosaicism illustrated by the cafe-au-lait pattern of McCune-Albright syndrome: a torso outline with large unilateral light-brown macules with ragged coast-of-Maine borders on one side, contrasted with the smooth coast-of-California borders typical of neurofibromatosis type 1, with the genetic-term definition of mosaicism and its somatic versus germline forms" className="min-w-[940px]">
      {/* torso outline */}
      <g>
        <rect x="24" y="40" width="480" height="480" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="66" fontSize="11" fontWeight="800" className="fill-foreground">McCune-Albright mosaicism — the skin map</text>
        {/* torso shape */}
        <path d="M 190 96 C 226 84, 302 84, 338 96 C 366 106, 378 130, 374 168 C 370 200, 360 220, 356 248 L 352 424 C 350 470, 336 496, 264 496 C 192 496, 178 470, 176 424 L 172 248 C 168 220, 158 200, 154 168 C 150 130, 162 106, 190 96 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* neck/shoulders hint */}
        <path d="M 196 98 C 176 88, 128 96, 106 128 M 332 98 C 352 88, 400 96, 422 128" fill="none" strokeWidth="2" className="stroke-foreground" />
        {/* midline */}
        <line x1="264" y1="100" x2="264" y2="492" strokeWidth="1.4" strokeDasharray="5 5" className="stroke-emergency" />
        <text x="264" y="516" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">midline — the pigment respects it</text>
        {/* unilateral ragged macules (right side of patient = left on drawing) */}
        <g>
          <path d="M 282 150 C 300 142, 322 146, 334 158 C 344 168, 342 182, 330 188 C 338 196, 336 210, 324 214 C 330 224, 322 236, 310 232 C 314 242, 302 250, 292 244 C 284 240, 280 230, 286 222 C 276 220, 272 208, 280 200 C 270 196, 268 184, 278 178 C 268 172, 272 158, 282 150 Z" className="fill-warning/70 stroke-warning" strokeWidth="1.6" />
          <path d="M 300 296 C 318 290, 336 296, 344 310 C 350 322, 344 336, 332 340 C 340 350, 330 362, 318 358 C 322 368, 308 374, 300 366 C 292 360, 292 348, 300 342 C 290 338, 288 326, 296 320 C 288 314, 290 300, 300 296 Z" className="fill-warning/70 stroke-warning" strokeWidth="1.6" />
          <path d="M 296 424 C 310 420, 324 424, 330 434 C 334 444, 328 454, 318 456 C 324 464, 314 472, 306 466 C 298 462, 296 452, 302 446 C 294 442, 292 432, 296 424 Z" className="fill-warning/70 stroke-warning" strokeWidth="1.6" />
        </g>
        <text x="392" y="176" fontSize="9.5" fontWeight="800" className="fill-warning">ragged edges</text>
        <text x="392" y="188" fontSize="7.5" className="fill-muted-foreground">irregular, jagged border</text>
        <text x="392" y="200" fontSize="7.5" className="fill-muted-foreground">(the source's own phrase)</text>
        <text x="392" y="322" fontSize="9.5" fontWeight="800" className="fill-warning">unilateral</text>
        <text x="392" y="334" fontSize="7.5" className="fill-muted-foreground">macules cross neither</text>
        <text x="392" y="344" fontSize="7.5" className="fill-muted-foreground">the midline nor the</text>
        <text x="392" y="354" fontSize="7.5" className="fill-muted-foreground">segmental boundary</text>
      </g>

      {/* contrast panel */}
      <g>
        <rect x="532" y="40" width="424" height="220" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="548" y="66" fontSize="11" fontWeight="800" className="fill-foreground">Border contrast — McCune-Albright vs NF1</text>
        {/* ragged shape */}
        <path d="M 576 118 C 592 108, 612 110, 622 122 C 630 132, 626 146, 616 152 C 624 160, 618 174, 606 172 C 610 182, 598 190, 588 184 C 580 178, 580 166, 588 160 C 578 156, 576 144, 584 138 C 576 132, 570 124, 576 118 Z" className="fill-warning/70 stroke-warning" strokeWidth="1.6" />
        <text x="602" y="212" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">ragged edge</text>
        <text x="602" y="224" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">McCune-Albright</text>
        {/* smooth shape */}
        <ellipse cx="806" cy="146" rx="38" ry="32" className="fill-neural/50 stroke-neural" strokeWidth="1.6" />
        <text x="806" y="212" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">smooth edge</text>
        <text x="806" y="224" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">NF1 café-au-lait spots</text>
        <text x="548" y="248" fontSize="8" className="fill-muted-foreground">Border texture + distribution (unilateral vs bilateral) separates the mosaic</text>
        <text x="548" y="258" fontSize="8" className="fill-muted-foreground">post-zygotic mutation from the germline one.</text>
      </g>

      {/* definition panel */}
      <g>
        <rect x="532" y="284" width="424" height="236" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="548" y="310" fontSize="11" fontWeight="800" className="fill-foreground">Mosaicism — the term this photo teaches</text>
        <text x="548" y="332" fontSize="9.5" fontWeight="700" className="fill-foreground">Presence of genetically distinct cell lines in the same individual.</text>
        <rect x="548" y="348" width="392" height="60" rx="9" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="560" y="368" fontSize="9" fontWeight="800" className="fill-brand">Somatic mosaicism</text>
        <text x="560" y="382" fontSize="7.8" className="fill-muted-foreground">mutation arises from mitotic errors after fertilization and</text>
        <text x="560" y="392" fontSize="7.8" className="fill-muted-foreground">propagates through multiple tissues or organs</text>
        <rect x="548" y="418" width="392" height="60" rx="9" className="fill-neural-soft stroke-neural" strokeWidth="1.2" />
        <text x="560" y="438" fontSize="9" fontWeight="800" className="fill-neural">Germline (gonadal) mosaicism</text>
        <text x="560" y="452" fontSize="7.8" className="fill-muted-foreground">mutation only in egg or sperm cells — if parents and relatives</text>
        <text x="560" y="462" fontSize="7.8" className="fill-muted-foreground">do not have the disease, suspect gonadal mosaicism</text>
        <text x="548" y="500" fontSize="8" fontWeight="700" className="fill-foreground">McCune-Albright: Gs-protein (GNAS) activating mutation — lethal if it</text>
        <text x="548" y="510" fontSize="8" fontWeight="700" className="fill-foreground">occurs before fertilization (all cells); survivable in mosaicism.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Imprinting — chromosome 15: P/M columns, active/silenced/deleted genes
// ---------------------------------------------------------------------------

export function ImprintingChromosome15() {
  const w = 980;
  const h = 580;
  // Rod length is parametric so the compact Angelman box can host short rods
  // with its labels INSIDE the box and viewBox (the original fixed-150 layout
  // pushed the AS labels to y=600 — below the 580 viewBox edge).
  const Chromosome = ({ x, y, tone, label, len = 150 }: { x: number; y: number; tone: string; label: string; len?: number }) => (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + len} strokeWidth="13" strokeLinecap="round" className={tone} />
      <line x1={x} y1={y + len * 0.4} x2={x} y2={y + len * 0.5} strokeWidth="15" className="stroke-border" />
      <text x={x} y={y + len + 20} textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">{label}</text>
    </g>
  );
  const GeneBox = ({ x, y, kind }: { x: number; y: number; kind: "active" | "silenced" | "deleted" }) => {
    if (kind === "active") {
      return <rect x={x - 16} y={y - 11} width="32" height="22" rx="5" className="fill-success stroke-success" strokeWidth="1.3" />;
    }
    if (kind === "silenced") {
      return (
        <g>
          <rect x={x - 16} y={y - 11} width="32" height="22" rx="5" className="fill-muted/40 stroke-muted-foreground" strokeWidth="1.3" />
          <text x={x} y={y + 4} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-muted-foreground">m</text>
        </g>
      );
    }
    return (
      <g>
        <circle cx={x} cy={y} r="11" className="fill-none stroke-emergency" strokeWidth="2.2" />
        <line x1={x - 7} y1={y - 7} x2={x + 7} y2={y + 7} strokeWidth="2.2" className="stroke-emergency" />
      </g>
    );
  };
  // Row geometry: header 20–74 · row 1 boxes 88–308 · row 2 boxes 328–574.
  // Every sentence under a pill is split into two lines so no single SVG text
  // run exceeds its container width (VLM QA found right-edge clipping when
  // the PWS/AS sentences were single un-wrapped lines).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Chromosome 15 imprinting: paternal and maternal chromosome pairs with active, methylation-silenced, and deleted gene symbols; when the paternal allele is deleted the result is Prader-Willi syndrome, and when the maternal UBE3A is deleted the result is Angelman syndrome" className="min-w-[940px]">
      {/* header strip */}
      <g>
        <rect x="24" y="20" width="932" height="54" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="10.5" fontWeight="800" className="fill-foreground">One gene copy is silenced by methylation; only the other copy is expressed</text>
        <text x="42" y="60" fontSize="8.5" className="fill-muted-foreground">→ parent-of-origin effects. The expressed copy may be mutated, may not be expressed, or may be deleted altogether.</text>
      </g>

      {/* Normal group — row 1 left (88–308) */}
      <g>
        <rect x="24" y="88" width="450" height="220" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="42" y="104" width="96" height="24" rx="8" className="fill-success-soft stroke-success" strokeWidth="1.3" />
        <text x="90" y="120" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-success">Normal</text>
        <text x="42" y="148" fontSize="8.5" fontWeight="700" className="fill-foreground">Each locus expresses exactly one parent's copy —</text>
        <text x="42" y="161" fontSize="8.5" fontWeight="700" className="fill-foreground">the other is imprinted (silenced by methylation).</text>
        <text x="458" y="161" textAnchor="end" fontSize="8" className="fill-muted-foreground">P = Paternal · M = Maternal</text>
        {/* chromosome pairs (short rods: 170–278, labels at 298 inside the box) */}
        <Chromosome x={150} y={170} tone="stroke-brand" label="P" len={108} />
        <Chromosome x={210} y={170} tone="stroke-brand" label="P" len={108} />
        <Chromosome x={290} y={170} tone="stroke-neural" label="M" len={108} />
        <Chromosome x={350} y={170} tone="stroke-neural" label="M" len={108} />
        <GeneBox x={150} y={196} kind="active" />
        <GeneBox x={210} y={196} kind="silenced" />
        <GeneBox x={150} y={244} kind="silenced" />
        <GeneBox x={210} y={244} kind="active" />
        <GeneBox x={290} y={196} kind="silenced" />
        <GeneBox x={350} y={196} kind="active" />
        <GeneBox x={290} y={244} kind="active" />
        <GeneBox x={350} y={244} kind="silenced" />
      </g>

      {/* PWS group — row 1 right (88–308) */}
      <g>
        <rect x="506" y="88" width="450" height="220" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="524" y="104" width="190" height="24" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
        <text x="619" y="120" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-warning">Prader-Willi syndrome</text>
        <text x="524" y="148" fontSize="8.5" fontWeight="700" className="fill-foreground">Maternally derived genes are silenced (except UBE3A);</text>
        <text x="524" y="161" fontSize="8.5" fontWeight="700" className="fill-foreground">disease occurs when the paternal allele is deleted or mutated.</text>
        {/* paternal pair with deletion */}
        <Chromosome x={620} y={170} tone="stroke-brand" label="P" len={108} />
        <Chromosome x={680} y={170} tone="stroke-brand" label="P" len={108} />
        <GeneBox x={620} y={196} kind="deleted" />
        <GeneBox x={680} y={196} kind="silenced" />
        <GeneBox x={620} y={244} kind="silenced" />
        <GeneBox x={680} y={244} kind="active" />
        <text x="724" y="192" fontSize="8.5" fontWeight="800" className="fill-emergency">paternal allele</text>
        <text x="724" y="204" fontSize="8.5" fontWeight="800" className="fill-emergency">deleted/mutated</text>
        <text x="724" y="226" fontSize="8" className="fill-muted-foreground">maternal copy at that</text>
        <text x="724" y="238" fontSize="8" className="fill-muted-foreground">locus is silenced →</text>
        <text x="724" y="254" fontSize="8.5" fontWeight="800" className="fill-foreground">NO active copy left</text>
      </g>

      {/* Angelman group — row 2 right (328–574) */}
      <g>
        <rect x="506" y="328" width="450" height="246" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="524" y="344" width="180" height="24" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.3" />
        <text x="614" y="360" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-neural">Angelman syndrome</text>
        <text x="524" y="388" fontSize="8.5" fontWeight="700" className="fill-foreground">Paternally derived UBE3A is silenced;</text>
        <text x="524" y="401" fontSize="8.5" fontWeight="700" className="fill-foreground">disease occurs when the maternal allele is deleted or mutated.</text>
        <Chromosome x={620} y={418} tone="stroke-neural" label="M" len={128} />
        <Chromosome x={680} y={418} tone="stroke-neural" label="M" len={128} />
        <GeneBox x={620} y={452} kind="deleted" />
        <GeneBox x={680} y={452} kind="silenced" />
        <text x="724" y="448" fontSize="8.5" fontWeight="800" className="fill-emergency">maternal UBE3A</text>
        <text x="724" y="460" fontSize="8.5" fontWeight="800" className="fill-emergency">deleted/mutated</text>
        <text x="724" y="482" fontSize="8" className="fill-muted-foreground">paternal UBE3A is</text>
        <text x="724" y="494" fontSize="8" className="fill-muted-foreground">silenced → NO active copy</text>
        <text x="724" y="514" fontSize="8" className="fill-muted-foreground">UBE3A on the maternal copy</text>
        <text x="724" y="526" fontSize="8" className="fill-muted-foreground">of chromosome 15</text>
      </g>

      {/* legend + mnemonics — row 2 left (328–574) */}
      <g>
        <rect x="24" y="328" width="450" height="246" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="352" fontSize="10" fontWeight="800" className="fill-foreground">Legend + the two mnemonic lines</text>
        <GeneBox x={70} y={378} kind="active" />
        <text x="90" y="382" fontSize="8.5" className="fill-muted-foreground">active gene</text>
        <GeneBox x={70} y={406} kind="silenced" />
        <text x="90" y="410" fontSize="8.5" className="fill-muted-foreground">silenced gene (imprinting — methylation)</text>
        <GeneBox x={70} y={434} kind="deleted" />
        <text x="90" y="438" fontSize="8.5" className="fill-muted-foreground">gene deletion/mutation</text>
        <rect x="42" y="456" width="414" height="52" rx="9" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="54" y="476" fontSize="9" fontWeight="800" className="fill-warning">POP: Prader-Willi · Obesity/overeating · Paternal allele deleted</text>
        <text x="54" y="494" fontSize="9" fontWeight="800" className="fill-neural">MAMAS: Maternal allele deleted · Angelman · Mood, Ataxia, Seizures</text>
        <text x="42" y="530" fontSize="8" className="fill-muted-foreground">25% of PWS: maternal uniparental disomy · 5% of AS: paternal UPD</text>
        <text x="42" y="544" fontSize="8" className="fill-muted-foreground">(two copies from one parent — both silenced → no active copy)</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// G2 · Modes of inheritance — the five pedigree panels with Punnett squares
// ---------------------------------------------------------------------------

export function InheritancePedigrees() {
  const w = 980;
  const h = 726;
  const AFF = "fill-emergency/80 stroke-emergency";
  const UNAFF = "fill-card stroke-foreground";
  const Sq = ({ x, y, affected }: { x: number; y: number; affected?: boolean }) => (
    <rect x={x - 7} y={y - 7} width="14" height="14" className={affected ? AFF : UNAFF} strokeWidth="1.6" />
  );
  const Ci = ({ x, y, affected, carrier }: { x: number; y: number; affected?: boolean; carrier?: boolean }) => (
    <g>
      <circle cx={x} cy={y} r="7.5" className={affected ? AFF : UNAFF} strokeWidth="1.6" />
      {carrier && <circle cx={x} cy={y} r="2.4" className="fill-emergency" />}
    </g>
  );
  const Punnett = ({ x, y, top, left, cells, hot }: { x: number; y: number; top: [string, string]; left: [string, string]; cells: string[][]; hot?: number[] }) => {
    const c = 44;
    return (
      <g>
        <text x={x + c * 0.5} y={y - 6} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">{top[0]}</text>
        <text x={x + c * 1.5} y={y - 6} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">{top[1]}</text>
        <text x={x - 8} y={y + c * 0.5 + 3} textAnchor="end" fontSize="9" fontWeight="800" className="fill-foreground">{left[0]}</text>
        <text x={x - 8} y={y + c * 1.5 + 3} textAnchor="end" fontSize="9" fontWeight="800" className="fill-foreground">{left[1]}</text>
        {[0, 1, 2, 3].map((i) => {
          const cx = x + (i % 2) * c;
          const cy = y + Math.floor(i / 2) * c;
          const isHot = hot?.includes(i);
          return (
            <g key={i}>
              <rect x={cx + 1.5} y={cy + 1.5} width={c - 3} height={c - 3} rx="5" className={isHot ? "fill-emergency/15 stroke-emergency" : "fill-muted/20 stroke-border"} strokeWidth="1.1" />
              <text x={cx + c / 2} y={cy + c / 2 + 3.5} textAnchor="middle" fontSize="9" fontWeight={isHot ? 800 : 600} className={isHot ? "fill-emergency" : "fill-foreground"}>{cells[Math.floor(i / 2)][i % 2]}</text>
            </g>
          );
        })}
      </g>
    );
  };
  const Row = ({ i, title, tone, children }: { i: number; title: string; tone: string; children: React.ReactNode }) => {
    const top = 76 + i * 120;
    return (
      <g>
        <rect x="24" y={top} width="932" height="112" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="42" y={top + 8} width="8" height="16" rx="4" className={tone} />
        <text x="58" y={top + 21} fontSize="10.5" fontWeight="800" className="fill-foreground">{title}</text>
        {children}
      </g>
    );
  };
  const Mating = ({ x1, x2, y }: { x1: number; x2: number; y: number }) => (
    <line x1={x1} y1={y} x2={x2} y2={y} strokeWidth="1.4" className="stroke-foreground" />
  );
  const Descent = ({ x, y1, y2, childXs, childY }: { x: number; y1: number; y2: number; childXs: number[]; childY: number }) => (
    <g>
      <line x1={x} y1={y1} x2={x} y2={y2} strokeWidth="1.2" className="stroke-foreground" />
      {childXs.length > 0 && (
        <line x1={Math.min(...childXs)} y1={y2} x2={Math.max(...childXs)} y2={y2} strokeWidth="1.2" className="stroke-foreground" />
      )}
      {childXs.map((cx2, k) => (
        <line key={k} x1={cx2} y1={y2} x2={cx2} y2={childY - 8} strokeWidth="1.2" className="stroke-foreground" />
      ))}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The five inheritance patterns as pedigree panels with Punnett squares: autosomal dominant, autosomal recessive, X-linked recessive, X-linked dominant, and mitochondrial inheritance, with the key transmission rules for each" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="44" fontSize="11" fontWeight="800" className="fill-foreground">The five inheritance patterns — pedigrees with their Punnett squares</text>
      </g>

      {/* Row 1 — Autosomal dominant */}
      <Row i={0} title="Autosomal dominant — vertical through many generations" tone="fill-brand">
        <g>
          {/* Gen I: affected mother × unaffected father */}
          <Ci x={76} y={124} affected />
          <Sq x={112} y={124} />
          <Mating x1={83} x2={105} y={124} />
          <Descent x={94} y1={131} y2={140} childXs={[66, 94, 122]} childY={150} />
          {/* Gen II: affected son (with spouse), affected daughter, unaffected daughter */}
          <Sq x={66} y={150} affected />
          <Ci x={94} y={150} affected />
          <Sq x={122} y={150} />
          <Ci x={148} y={150} />
          <Mating x1={73} x2={141} y={150} />
          {/* Gen III from affected son */}
          <Descent x={94} y1={157} y2={166} childXs={[80, 108]} childY={176} />
          <Sq x={80} y={176} affected />
          <Ci x={108} y={176} />
        </g>
        <Punnett x={320} y={104} top={["A", "a"]} left={["A", "a"]} cells={[["AA", "Aa"], ["Aa", "aa"]]} hot={[1, 2]} />
        <g>
          <text x="440" y="106" fontSize="9" fontWeight="700" className="fill-foreground">1 affected (heterozygous) parent:</text>
          <text x="440" y="120" fontSize="9" className="fill-muted-foreground">each child has a 50% chance of being affected.</text>
          <text x="440" y="140" fontSize="9" fontWeight="700" className="fill-foreground">Often structural genes · often pleiotropic and</text>
          <text x="440" y="154" fontSize="9" fontWeight="700" className="fill-foreground">variably expressive · family history crucial.</text>
          <text x="440" y="174" fontSize="9" className="fill-muted-foreground">Aa × aa → Aa / aa — the 50/50 split.</text>
        </g>
      </Row>

      {/* Row 2 — Autosomal recessive */}
      <Row i={1} title="Autosomal recessive — horizontal within one generation" tone="fill-neural">
        <g>
          <Ci x={76} y={244} />
          <Sq x={112} y={244} />
          <Mating x1={83} x2={105} y={244} />
          <Descent x={94} y1={251} y2={260} childXs={[66, 94, 122]} childY={270} />
          {/* Gen II: 2 unaffected + affected girl (with spouse) */}
          <Ci x={66} y={270} />
          <Ci x={94} y={270} affected />
          <Sq x={122} y={270} />
          <Sq x={148} y={270} />
          <Mating x1={101} x2={141} y={270} />
          {/* Gen III: unaffected boys only */}
          <Descent x={121} y1={277} y2={286} childXs={[107, 135]} childY={296} />
          <Sq x={107} y={296} />
          <Sq x={135} y={296} />
        </g>
        <Punnett x={320} y={224} top={["A", "a"]} left={["A", "a"]} cells={[["AA", "Aa"], ["Aa", "aa"]]} hot={[3]} />
        <g>
          <text x="440" y="226" fontSize="9" fontWeight="700" className="fill-foreground">2 carrier parents: 25% affected · 50% carrier ·</text>
          <text x="440" y="240" fontSize="9" fontWeight="700" className="fill-foreground">25% neither (per child).</text>
          <text x="440" y="260" fontSize="9" className="fill-muted-foreground">Unaffected individual with an affected sibling:</text>
          <text x="440" y="274" fontSize="9" className="fill-muted-foreground">2/3 probability of being a carrier.</text>
          <text x="440" y="294" fontSize="9" fontWeight="700" className="fill-foreground">Often enzyme deficiencies · more severe ·</text>
          <text x="440" y="308" fontSize="9" fontWeight="700" className="fill-foreground">↑ risk in consanguineous families.</text>
        </g>
      </Row>

      {/* Row 3 — X-linked recessive */}
      <Row i={2} title="X-linked recessive — no male-to-male transmission, skips generations" tone="fill-success">
        <g>
          {/* carrier mother arrow */}
          <Ci x={76} y={364} carrier />
          <Sq x={112} y={364} />
          <Mating x1={83} x2={105} y={364} />
          <Descent x={94} y1={371} y2={380} childXs={[66, 94, 122]} childY={390} />
          {/* Gen II: carrier daughter (with spouse), affected son, unaffected daughter */}
          <Ci x={66} y={390} carrier />
          <Sq x={94} y={390} affected />
          <Ci x={122} y={390} />
          <Sq x={148} y={390} />
          <Mating x1={73} x2={141} y={390} />
          {/* Gen III: affected boy via carrier daughter */}
          <Descent x={107} y1={397} y2={406} childXs={[93, 121]} childY={416} />
          <Sq x={93} y={416} affected />
          <Ci x={121} y={416} />
        </g>
        <Punnett x={320} y={344} top={["X·", "X"]} left={["X", "Y"]} cells={[["XX·", "XX"], ["X·Y", "XY"]]} hot={[0, 2]} />
        <g>
          <text x="440" y="346" fontSize="9" fontWeight="700" className="fill-foreground">Sons of heterozygous mothers: 50% affected.</text>
          <text x="440" y="366" fontSize="9" fontWeight="700" className="fill-foreground">No male-to-male transmission — an affected</text>
          <text x="440" y="380" fontSize="9" fontWeight="700" className="fill-foreground">father never passes his X to a son.</text>
          <text x="440" y="400" fontSize="9" className="fill-muted-foreground">Skips generations · commonly more severe in males ·</text>
          <text x="440" y="414" fontSize="9" className="fill-muted-foreground">females usually must be homozygous to be affected.</text>
        </g>
      </Row>

      {/* Row 4 — X-linked dominant */}
      <Row i={3} title="X-linked dominant — affected father: 100% daughters, 0% sons" tone="fill-warning">
        <g>
          <Ci x={76} y={484} />
          <Sq x={112} y={484} affected />
          <Mating x1={83} x2={105} y={484} />
          <Descent x={94} y1={491} y2={500} childXs={[66, 94, 122, 150]} childY={510} />
          {/* Gen II: 2 affected daughters (one with spouse), unaffected son + daughter */}
          <Ci x={66} y={510} affected />
          <Sq x={94} y={510} />
          <Ci x={122} y={510} />
          <Ci x={150} y={510} affected />
          <Sq x={176} y={510} />
          <Mating x1={157} x2={169} y={510} />
          {/* Gen III from affected daughter */}
          <Descent x={163} y1={517} y2={526} childXs={[149, 177]} childY={536} />
          <Ci x={149} y={536} affected />
          <Ci x={177} y={536} />
        </g>
        <Punnett x={320} y={464} top={["X", "X"]} left={["X·", "Y"]} cells={[["X·X", "X·X"], ["XY", "XY"]]} hot={[0, 1]} />
        <g>
          <text x="440" y="466" fontSize="9" fontWeight="700" className="fill-foreground">Transmitted through both parents.</text>
          <text x="440" y="486" fontSize="9" fontWeight="700" className="fill-foreground">Affected father: 100% of daughters and 0% of sons</text>
          <text x="440" y="500" fontSize="9" fontWeight="700" className="fill-foreground">will be affected (his only X goes to daughters).</text>
          <text x="440" y="520" fontSize="9" className="fill-muted-foreground">Children of affected mothers: each has a 50% chance.</text>
          <text x="440" y="540" fontSize="9" className="fill-muted-foreground">Examples: fragile X (atypical), Alport, hypophosphatemic rickets.</text>
        </g>
      </Row>

      {/* Row 5 — Mitochondrial */}
      <Row i={4} title="Mitochondrial — only through the mother (heteroplasmy)" tone="fill-emergency">
        <g>
          <Ci x={76} y={604} affected />
          <Sq x={112} y={604} />
          <Mating x1={83} x2={105} y={604} />
          <Descent x={94} y1={611} y2={620} childXs={[66, 94, 122]} childY={630} />
          {/* Gen II: affected daughter (spouse), affected son (spouse), unaffected son */}
          <Ci x={66} y={630} affected />
          <Sq x={94} y={630} />
          <Sq x={122} y={630} affected />
          <Ci x={148} y={630} />
          <Sq x={176} y={630} />
          <Ci x={202} y={630} />
          <Mating x1={73} x2={87} y={630} />
          <Mating x1={129} x2={169} y={630} />
          {/* Gen III: daughter's kids affected; son's kids unaffected */}
          <Descent x={80} y1={637} y2={644} childXs={[66, 94]} childY={654} />
          <Descent x={149} y1={637} y2={644} childXs={[135, 163]} childY={654} />
          <Ci x={66} y={654} affected />
          <Sq x={94} y={654} affected />
          <Ci x={135} y={654} />
          <Sq x={163} y={654} />
        </g>
        <g>
          <rect x="320" y="590" width="120" height="66" rx="10" className="fill-emergency/10 stroke-emergency" strokeWidth="1.2" />
          <text x="380" y="614" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">No Punnett —</text>
          <text x="380" y="628" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">cytoplasmic</text>
          <text x="380" y="642" textAnchor="middle" fontSize="8" className="fill-muted-foreground">transmission (mtDNA)</text>
        </g>
        <g>
          <text x="440" y="598" fontSize="9" fontWeight="700" className="fill-foreground">Transmitted only through the mother —</text>
          <text x="440" y="612" fontSize="9" fontWeight="700" className="fill-foreground">all offspring of affected females may show signs.</text>
          <text x="440" y="632" fontSize="9" className="fill-muted-foreground">Variable expression in a population or even within</text>
          <text x="440" y="646" fontSize="9" className="fill-muted-foreground">a family due to heteroplasmy. Examples: mitochondrial</text>
          <text x="440" y="660" fontSize="9" className="fill-muted-foreground">myopathies (MELAS, MERRF), Leber optic neuropathy.</text>
        </g>
      </Row>

      {/* legend */}
      <g>
        <rect x="24" y="688" width="932" height="30" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <Sq x={42} y={703} />
        <text x="54" y="707" fontSize="8.5" className="fill-muted-foreground">unaffected male</text>
        <Sq x={160} y={703} affected />
        <text x="172" y="707" fontSize="8.5" className="fill-muted-foreground">affected male</text>
        <Ci x={290} y={703} />
        <text x="302" y="707" fontSize="8.5" className="fill-muted-foreground">unaffected female</text>
        <Ci x={420} y={703} affected />
        <text x="432" y="707" fontSize="8.5" className="fill-muted-foreground">affected female</text>
        <Ci x={550} y={703} carrier />
        <text x="562" y="707" fontSize="8.5" className="fill-muted-foreground">carrier (dot)</text>
        <text x="660" y="707" fontSize="8.5" className="fill-muted-foreground">· = the mating line; X· = the mutated X</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// G2 · Cystic fibrosis — CFTR/ENaC in airway vs sweat duct, Normal vs CF
// ---------------------------------------------------------------------------

export function CftrEnacDiagram() {
  const w = 980;
  const h = 620;
  const Panel = ({ x, y, label, tone, toneText, children }: { x: number; y: number; label: string; tone: string; toneText: string; children: React.ReactNode }) => (
    <g>
      <rect x={x} y={y} width="450" height="248" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
      <rect x={x + 16} y={y + 12} width="150" height="22" rx="8" className={tone} strokeWidth="1.2" />
      <text x={x + 91} y={y + 27} textAnchor="middle" fontSize="9.5" fontWeight="800" className={toneText}>{label}</text>
      {children}
    </g>
  );
  const Channel = ({ x, y, name, broken }: { x: number; y: number; name: string; broken?: boolean }) => (
    <g>
      {broken ? (
        <g>
          <rect x={x - 9} y={y} width="18" height="30" rx="4" className="fill-none stroke-emergency" strokeWidth="1.6" strokeDasharray="4 3" />
          <line x1={x - 12} y1={y + 28} x2={x + 12} y2={y + 4} strokeWidth="2" className="stroke-emergency" />
        </g>
      ) : (
        <rect x={x - 9} y={y} width="18" height="30" rx="4" className="fill-neural/40 stroke-neural" strokeWidth="1.6" />
      )}
      {/* name sits BELOW the channel so it never collides with the ✕ mark or arrows */}
      <text x={x} y={y + 46} textAnchor="middle" fontSize="9" fontWeight="800" className={broken ? "fill-emergency" : "fill-neural"}>{name}</text>
    </g>
  );
  const Enac = ({ x, y }: { x: number; y: number }) => (
    <g>
      <path d={`M ${x - 10} ${y + 30} L ${x - 5} ${y} L ${x + 5} ${y} L ${x + 10} ${y + 30} Z`} className="fill-warning/50 stroke-warning" strokeWidth="1.5" />
      <text x={x} y={y + 46} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">ENaC</text>
    </g>
  );
  const Arrow = ({ x, y, len, up, label, tone }: { x: number; y: number; len: number; up?: boolean; label: string; tone: string }) => {
    const yTip = up ? y : y + len;
    const yTail = up ? y + len : y;
    return (
      <g>
        <line x1={x} y1={yTail} x2={x} y2={up ? yTip + 5 : yTip - 5} strokeWidth="2" className={tone} />
        <polygon points={`${x},${yTip} ${x - 4.5},${yTip + (up ? 8 : -8)} ${x + 4.5},${yTip + (up ? 8 : -8)}`} className={tone} />
        <text x={x + 12} y={yTail + len / 2 + 3} fontSize="9" fontWeight="800" className={tone}>{label}</text>
      </g>
    );
  };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="CFTR and ENaC physiology in cystic fibrosis: the sweat duct panel showing chloride reabsorption normally and its failure in CF causing salty sweat, and the airway panel showing chloride and water secretion normally and its failure with ENaC sodium and water reabsorption in CF causing dehydrated thick mucus" className="min-w-[940px]">
      <defs>
        <marker id="cfArrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M 0 0 L 7 3.5 L 0 7 Z" className="fill-current" />
        </marker>
      </defs>
      {/* arrowheads are drawn inline; defs kept for compatibility */}
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="44" fontSize="11" fontWeight="800" className="fill-foreground">CFTR — one channel, two directions: Cl⁻ secreted in the airway, Cl⁻ reabsorbed in the sweat duct</text>
      </g>

      {/* SWEAT DUCT — Normal (top-left) */}
      <Panel x={24} y={74} label="Sweat duct · Normal" tone="fill-brand-soft stroke-brand" toneText="fill-brand">
        <text x={250} y={102} fontSize="8" className="fill-muted-foreground">Lumen (sweat)</text>
        <line x1={40} y1={138} x2={458} y2={138} strokeWidth="1.2" className="stroke-muted-foreground" />
        {/* epithelial cell slab */}
        <rect x={60} y={138} width="378" height="56" rx="6" className="fill-muted/20 stroke-border" strokeWidth="1.2" />
        <text x={466} y={172} fontSize="8" className="fill-muted-foreground">cell</text>
        <text x={250} y={212} fontSize="8" className="fill-muted-foreground">interstitium (blood)</text>
        <Channel x={180} y={132} name="CFTR" />
        <Enac x={300} y={132} />
        <Arrow x={180} y={96} len={30} label="Cl⁻ in" tone="stroke-brand fill-brand" />
        <Arrow x={300} y={96} len={30} label="Na⁺ in" tone="stroke-warning fill-warning" />
        <text x={42} y={272} fontSize="9" fontWeight="700" className="fill-foreground">Salt is RECLAIMED from sweat —</text>
        <text x={42} y={286} fontSize="9" fontWeight="700" className="fill-foreground">Cl⁻ reabsorbed via CFTR, Na⁺ via ENaC.</text>
      </Panel>

      {/* SWEAT DUCT — CF (bottom-left) */}
      <Panel x={24} y={334} label="Sweat duct · CF" tone="fill-emergency-soft stroke-emergency" toneText="fill-emergency">
        <text x={250} y={362} fontSize="8" className="fill-muted-foreground">Lumen (sweat)</text>
        <line x1={40} y1={398} x2={458} y2={398} strokeWidth="1.2" className="stroke-muted-foreground" />
        <rect x={60} y={398} width="378" height="56" rx="6" className="fill-muted/20 stroke-border" strokeWidth="1.2" />
        <text x={466} y={432} fontSize="8" className="fill-muted-foreground">cell</text>
        <text x={250} y={472} fontSize="8" className="fill-muted-foreground">interstitium (blood)</text>
        <Channel x={180} y={392} name="CFTR (ΔF508)" broken />
        <Enac x={300} y={392} />
        {/* the dashed, slashed channel IS the blocked marker — no separate Cl⁻ arrow */}
        <text x={118} y={382} fontSize="8.5" fontWeight="800" className="fill-emergency">Cl⁻ blocked</text>
        <Arrow x={310} y={362} len={28} label="Na⁺ still in" tone="stroke-warning fill-warning" />
        <text x={42} y={532} fontSize="9" fontWeight="700" className="fill-foreground">Cl⁻ trapped in sweat → ↑ sweat Cl⁻</text>
        <text x={42} y={546} fontSize="9" fontWeight="700" className="fill-foreground">→ positive pilocarpine sweat test.</text>
      </Panel>

      {/* AIRWAY — Normal (top-right) */}
      <Panel x={506} y={74} label="Airway · Normal" tone="fill-brand-soft stroke-brand" toneText="fill-brand">
        <text x={732} y={102} fontSize="8" className="fill-muted-foreground">Lumen (airway)</text>
        {/* mucus layer */}
        <rect x={530} y={112} width="398" height="16" rx="6" className="fill-success/30 stroke-success" strokeWidth="1.2" />
        <text x={729} y={124} textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-success">Normal mucus (hydrated)</text>
        <line x1={522} y1={138} x2={936} y2={138} strokeWidth="1.2" className="stroke-muted-foreground" />
        <rect x={542} y={138} width="378" height="56" rx="6" className="fill-muted/20 stroke-border" strokeWidth="1.2" />
        <text x={944} y={172} fontSize="8" className="fill-muted-foreground">cell</text>
        <text x={732} y={212} fontSize="8" className="fill-muted-foreground">interstitium</text>
        <Channel x={660} y={132} name="CFTR" />
        <Enac x={790} y={132} />
        <Arrow x={660} y={146} len={40} up label="Cl⁻ out" tone="stroke-brand fill-brand" />
        <Arrow x={700} y={150} len={34} up label="H₂O" tone="stroke-brand fill-brand" />
        <text x={524} y={272} fontSize="9" fontWeight="700" className="fill-foreground">Cl⁻ (with H₂O, HCO₃⁻) SECRETED into the lumen —</text>
        <text x={524} y={286} fontSize="9" fontWeight="700" className="fill-foreground">mucus stays hydrated and clearable.</text>
      </Panel>

      {/* AIRWAY — CF (bottom-right) */}
      <Panel x={506} y={334} label="Airway · CF" tone="fill-emergency-soft stroke-emergency" toneText="fill-emergency">
        <text x={732} y={362} fontSize="8" className="fill-muted-foreground">Lumen (airway)</text>
        <rect x={530} y={372} width="398" height="16" rx="6" className="fill-warning/40 stroke-warning" strokeWidth="1.4" />
        <text x={729} y={384} textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">Dehydrated mucus (thick)</text>
        <line x1={522} y1={398} x2={936} y2={398} strokeWidth="1.2" className="stroke-muted-foreground" />
        <rect x={542} y={398} width="378" height="56" rx="6" className="fill-muted/20 stroke-border" strokeWidth="1.2" />
        <text x={944} y={432} fontSize="8" className="fill-muted-foreground">cell</text>
        <text x={732} y={472} fontSize="8" className="fill-muted-foreground">interstitium</text>
        <Channel x={660} y={392} name="CFTR (ΔF508)" broken />
        <Enac x={790} y={392} />
        {/* Na⁺/H₂O reabsorption arrows placed clear of the ENaC label (right side) */}
        <Arrow x={872} y={436} len={30} label="Na⁺" tone="stroke-warning fill-warning" />
        <Arrow x={912} y={436} len={30} label="H₂O" tone="stroke-warning fill-warning" />
        <text x={524} y={532} fontSize="9" fontWeight="700" className="fill-foreground">↓Cl⁻/H₂O secretion + ENaC-driven Na⁺/H₂O</text>
        <text x={524} y={546} fontSize="9" fontWeight="700" className="fill-foreground">reabsorption → thick mucus · ↑Na⁺ reabsorption →</text>
        <text x={524} y={560} fontSize="9" fontWeight="700" className="fill-foreground">more negative transepithelial potential difference.</text>
      </Panel>

      {/* bottom strip */}
      <g>
        <rect x="24" y="592" width="932" height="22" rx="5" className="fill-muted/15" />
        <text x="36" y="607" fontSize="8" fontWeight="700" className="fill-foreground">Same ΔF508 protein — misfolded → improper trafficking → absent from the membrane —</text>
        <text x="700" y="607" fontSize="8" fontWeight="700" className="fill-foreground">failing in OPPOSITE directions in the two epithelia.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// G2 · Gowers sign — the four-stage ascent (schematic, pattern-preserving)
// ---------------------------------------------------------------------------

export function GowersSequence() {
  const w = 980;
  const h = 560;
  const Stage = ({ x, n, title, children }: { x: number; n: string; title: string; children: React.ReactNode }) => (
    <g>
      <rect x={x} y="96" width="216" height="270" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
      <rect x={x + 12} y={108} width="22" height="22" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
      <text x={x + 23} y={124} textAnchor="middle" fontSize="11" fontWeight="800" className="fill-brand">{n}</text>
      <text x={x + 42} y={123} fontSize="9.5" fontWeight="800" className="fill-foreground">{title}</text>
      {children}
    </g>
  );
  const Head = ({ x, y }: { x: number; y: number }) => <circle cx={x} cy={y} r="12" className="fill-muted/40 stroke-foreground" strokeWidth="1.8" />;
  const Limb = ({ d }: { d: string }) => <path d={d} fill="none" strokeWidth="5" strokeLinecap="round" className="stroke-foreground/80" />;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The Gowers sign in four stages: the child moves to hands and knees, raises the buttocks, pushes on the legs to stand, and stands with exaggerated lumbar lordosis, with calf pseudohypertrophy, thigh atrophy, and the waddling gait labeled" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="62" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="40" fontSize="11" fontWeight="800" className="fill-foreground">Gowers sign — using the upper extremities to stand up</text>
        <text x="42" y="60" fontSize="8.5" className="fill-muted-foreground">Weakness begins in the pelvic girdle muscles and progresses superiorly — the arms substitute for the hips, stage by stage.</text>
      </g>

      {/* Stage 1 — hands and knees */}
      <Stage x={24} n="1" title="To hands and knees">
        <Head x={66} y={190} />
        <Limb d="M 66 202 C 62 216, 54 224, 48 232" />
        <Limb d="M 66 202 C 74 218, 80 228, 84 236" />
        <Limb d="M 48 232 L 46 292" />
        <Limb d="M 84 236 L 96 288" />
        <Limb d="M 66 210 C 70 240, 72 262, 74 292" />
        <text x={132} y={250} fontSize="8.5" className="fill-muted-foreground">rolls to all fours —</text>
        <text x={132} y={263} fontSize="8.5" className="fill-muted-foreground">the hips cannot</text>
        <text x={132} y={276} fontSize="8.5" className="fill-muted-foreground">push him upright</text>
        <text x={132} y={289} fontSize="8.5" className="fill-muted-foreground">from sitting</text>
      </Stage>

      {/* Stage 2 — buttocks raised */}
      <Stage x={262} n="2" title="Buttocks raised high">
        <Head x={310} y={178} />
        <Limb d="M 310 190 C 302 208, 296 220, 300 234" />
        <Limb d="M 310 190 C 324 210, 336 226, 342 240" />
        <Limb d="M 300 234 L 296 296" />
        <Limb d="M 342 240 L 356 288" />
        <Limb d="M 312 200 C 322 230, 330 258, 334 294" />
        {/* enlarged calves */}
        <ellipse cx={296} cy={286} rx="13" ry="17" className="fill-warning/50 stroke-warning" strokeWidth="1.6" />
        <ellipse cx={352} cy={280} rx="13" ry="17" className="fill-warning/50 stroke-warning" strokeWidth="1.6" />
        <line x1={352} y1={262} x2={396} y2={248} strokeWidth="1.4" className="stroke-warning" />
        <text x={368} y={200} fontSize="8.5" fontWeight="800" className="fill-warning">Calf</text>
        <text x={368} y={212} fontSize="8.5" fontWeight="800" className="fill-warning">pseudohypertrophy</text>
        <text x={368} y={226} fontSize="8" className="fill-muted-foreground">fibrofatty</text>
        <text x={368} y={236} fontSize="8" className="fill-muted-foreground">replacement</text>
        <text x={274} y={330} fontSize="8.5" className="fill-muted-foreground">climbs up himself —</text>
        <text x={274} y={342} fontSize="8.5" className="fill-muted-foreground">calves look strong but</text>
        <text x={274} y={354} fontSize="8.5" className="fill-muted-foreground">are fat and collagen</text>
      </Stage>

      {/* Stage 3 — pushing on legs (figure raised; all text inside the box) */}
      <Stage x={500} n="3" title="Hands on thighs — pushing">
        <Head x={560} y={160} />
        <Limb d="M 560 172 C 566 196, 578 214, 592 222" />
        <Limb d="M 560 172 C 550 192, 540 208, 534 226" />
        {/* arms braced on thighs */}
        <Limb d="M 534 226 L 556 260" />
        <Limb d="M 592 222 L 596 264" />
        <Limb d="M 556 260 L 566 290 L 592 290" />
        <Limb d="M 596 264 L 600 290" />
        <ellipse cx={558} cy={282} rx="12" ry="15" className="fill-warning/50 stroke-warning" strokeWidth="1.6" />
        <ellipse cx={598} cy={282} rx="12" ry="15" className="fill-warning/50 stroke-warning" strokeWidth="1.6" />
        <text x={516} y={318} fontSize="9" fontWeight="800" className="fill-emergency">Pushing on leg to stand</text>
        <text x={516} y={336} fontSize="8" className="fill-muted-foreground">walks the hands up the thighs —</text>
        <text x={516} y={350} fontSize="8" className="fill-muted-foreground">the hips cannot lift the trunk</text>
      </Stage>

      {/* Stage 4 — standing with lordosis (figure shifted right + up; text clear at left) */}
      <Stage x={738} n="4" title="Standing — lordotic">
        <Head x={868} y={146} />
        {/* lordotic spine */}
        <path d="M 868 158 C 860 180, 874 196, 866 220 C 860 240, 868 256, 864 276" fill="none" strokeWidth="5" strokeLinecap="round" className="stroke-foreground/80" />
        {/* belly protruding */}
        <path d="M 866 220 C 882 226, 886 240, 868 250" fill="none" strokeWidth="5" strokeLinecap="round" className="stroke-foreground/80" />
        <Limb d="M 864 276 L 854 316" />
        <Limb d="M 864 276 L 876 316" />
        {/* thin thighs + enlarged calves */}
        <line x1={854} y1={316} x2={850} y2={346} strokeWidth="4" strokeLinecap="round" className="stroke-foreground/60" />
        <line x1={876} y1={316} x2={880} y2={346} strokeWidth="4" strokeLinecap="round" className="stroke-foreground/60" />
        <ellipse cx={850} cy={330} rx="10" ry="13" className="fill-warning/40 stroke-warning" strokeWidth="1.4" />
        <ellipse cx={880} cy={330} rx="10" ry="13" className="fill-warning/40 stroke-warning" strokeWidth="1.4" />
        <line x1={886} y1={196} x2={924} y2={186} strokeWidth="1.4" className="stroke-emergency" />
        <text x={892} y={178} fontSize="8.5" fontWeight="800" className="fill-emergency">Lordosis</text>
        <text x={752} y={300} fontSize="8.5" fontWeight="800" className="fill-neural">Thigh atrophy</text>
        <text x={752} y={318} fontSize="8" className="fill-muted-foreground">(upper legs thin,</text>
        <text x={752} y={332} fontSize="8" className="fill-muted-foreground">calves enlarged)</text>
      </Stage>

      {/* bottom strip */}
      <g>
        <rect x="24" y={384 - 0} width="932" height="0" />
        <rect x="24" y="390" width="932" height="118" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="414" fontSize="9.5" fontWeight="800" className="fill-foreground">What the climb means</text>
        <text x="42" y="434" fontSize="9" className="fill-muted-foreground">Proximal, pelvic-girdle-first weakness ascending superiorly — Duchenne's bottom-up direction made visible; the gait waddles, the spine lordoses.</text>
        <text x="42" y="450" fontSize="9" className="fill-muted-foreground">Classically seen in Duchenne muscular dystrophy, but also seen in other muscular dystrophies and inflammatory myopathies (eg, polymyositis).</text>
        <text x="42" y="468" fontSize="9" fontWeight="700" className="fill-foreground">Labs that ride with it: ↑CK and aldolase; genetic testing confirms the diagnosis.</text>
        <text x="42" y="486" fontSize="9" fontWeight="700" className="fill-foreground">Onset before 5 years of age (Duchenne); dilated cardiomyopathy is a common cause of death.</text>
      </g>

      {/* legend */}
      <g>
        <ellipse cx={42} cy={534} rx="10" ry="13" className="fill-warning/50 stroke-warning" strokeWidth="1.4" />
        <text x={58} y={538} fontSize="8.5" className="fill-muted-foreground">pseudohypertrophic calf (fibrofatty replacement)</text>
        <line x1={330} y1={534} x2={352} y2={534} strokeWidth="4" strokeLinecap="round" className="stroke-foreground/60" />
        <text x={360} y={538} fontSize="8.5" className="fill-muted-foreground">atrophic thigh</text>
        <text x={480} y={538} fontSize="8.5" className="fill-muted-foreground">· original KYP schematic — the source's sequence, redrawn without the photograph</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// G2 · DMD histology — fibrofatty replacement pattern (schematic of image A)
// ---------------------------------------------------------------------------

export function DmdHistologyPattern() {
  const w = 980;
  const h = 520;
  // precomputed fiber positions (rows x cols), skipping patches
  const fibers: { x: number; y: number; patch?: number }[] = [];
  const patches = [
    { cx: 190, cy: 230, rx: 58, ry: 40 },
    { cx: 330, cy: 150, rx: 50, ry: 34 },
    { cx: 300, cy: 330, rx: 54, ry: 36 },
  ];
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 9; c++) {
      const x = 70 + c * 50 + (r % 2) * 22;
      const y = 120 + r * 44;
      const inPatch = patches.some((p) => ((x - p.cx) / p.rx) ** 2 + ((y - p.cy) / p.ry) ** 2 < 1);
      fibers.push({ x, y, patch: inPatch ? undefined : undefined, ...(inPatch ? { patch: 1 } : {}) });
    }
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Duchenne muscular dystrophy muscle histology pattern: polygonal muscle fibers with peripheral nuclei interrupted by pale patches of fibrofatty replacement marked by red arrows, with the muscle fibers bracket and the findings annotated" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="44" fontSize="11" fontWeight="800" className="fill-foreground">Duchenne muscle histology (image A) — fibers replaced by fat and collagen</text>
      </g>

      {/* histology field */}
      <g>
        <rect x="40" y="76" width="480" height="380" rx="12" className="fill-muted/15 stroke-border" strokeWidth="1.4" />
        <text x={104} y={102} fontSize="8.5" className="fill-muted-foreground">H&E-pattern schematic — fibers (polygonal, peripheral nuclei) + pale patches</text>
        {/* fibers */}
        {fibers.map((f, i) => (
          <g key={i}>
            <ellipse cx={f.x} cy={f.y} rx={20} ry={16} className={f.patch ? "fill-muted/15 stroke-muted-foreground/60" : "fill-warning/30 stroke-warning/80"} strokeWidth="1.4" />
            <circle cx={f.x - 8} cy={f.y - 6} r="1.7" className="fill-foreground/60" />
            <circle cx={f.x + 4} cy={f.y + 7} r="1.7" className="fill-foreground/60" />
          </g>
        ))}
        {/* red arrows to patches (labels live in the caption below — no text on the fibers) */}
        {patches.map((p, i) => (
          <g key={`a${i}`}>
            <line x1={p.cx + p.rx + 16} y1={p.cy - 34} x2={p.cx + 14} y2={p.cy - 10} strokeWidth="2.2" className="stroke-emergency" />
            <polygon points={`${p.cx + 14},${p.cy - 8} ${p.cx + 6},${p.cy - 16} ${p.cx + 18},${p.cy - 18}`} className="stroke-emergency fill-card" strokeWidth="1.6" />
          </g>
        ))}
        <text x={264} y={432} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">arrows → pale patches of fibrofatty replacement</text>
        {/* bracket */}
        <path d="M 60 452 L 60 444 L 468 444 L 468 452" fill="none" strokeWidth="1.6" className="stroke-foreground" />
        <text x={264} y={466} textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">Muscle fibers</text>
        {/* image A box */}
        <rect x={60} y={86} width="36" height="24" rx="5" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x={78} y={103} textAnchor="middle" fontSize="11" fontWeight="800" className="fill-foreground">A</text>
      </g>

      {/* annotation panel */}
      <g>
        <rect x="544" y="76" width="412" height="380" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="562" y="104" fontSize="10.5" fontWeight="800" className="fill-foreground">What the pale patches mean</text>
        <rect x="562" y="120" width="376" height="70" rx="9" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="576" y="140" fontSize="9" fontWeight="800" className="fill-warning">Pseudohypertrophy of calf muscles</text>
        <text x="576" y="156" fontSize="8.5" className="fill-muted-foreground">due to fibrofatty replacement of muscle — the calves</text>
        <text x="576" y="168" fontSize="8.5" className="fill-muted-foreground">ENLARGE while they weaken (enlarged + weak = dystrophic).</text>
        <rect x="562" y="200" width="376" height="70" rx="9" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="576" y="220" fontSize="9" fontWeight="800" className="fill-brand">Loss of dystrophin → myonecrosis</text>
        <text x="576" y="236" fontSize="8.5" className="fill-muted-foreground">Dystrophin helps anchor muscle fibers to the extracellular</text>
        <text x="576" y="248" fontSize="8.5" className="fill-muted-foreground">matrix, primarily in skeletal and cardiac muscles — the anchor</text>
        <text x="576" y="260" fontSize="8.5" className="fill-muted-foreground">fails, fibers necrose, fat and collagen move in.</text>
        <rect x="562" y="280" width="376" height="58" rx="9" className="fill-neural-soft stroke-neural" strokeWidth="1.2" />
        <text x="576" y="300" fontSize="9" fontWeight="800" className="fill-neural">↑CK and aldolase</text>
        <text x="576" y="316" fontSize="8.5" className="fill-muted-foreground">Necrosing fibers leak enzyme — genetic testing confirms the</text>
        <text x="576" y="328" fontSize="8.5" className="fill-muted-foreground">diagnosis (frameshift/nonsense → truncated or absent dystrophin).</text>
        <rect x="562" y="348" width="376" height="44" rx="9" className="fill-emergency-soft stroke-emergency" strokeWidth="1.2" />
        <text x="576" y="366" fontSize="9" fontWeight="800" className="fill-emergency">Duchenne = deleted dystrophin</text>
        <text x="576" y="380" fontSize="8.5" className="fill-muted-foreground">Onset before 5 · dilated cardiomyopathy is a common cause of death.</text>
        <text x="562" y="416" fontSize="8" className="fill-muted-foreground">Original KYP schematic preserving the source image's diagnostic</text>
        <text x="562" y="428" fontSize="8" className="fill-muted-foreground">pattern (fibers + pale fibrofatty patches + red arrows + bracket + A)</text>
        <text x="562" y="440" fontSize="8" className="fill-muted-foreground">without reproducing the photomicrograph.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// G2 · Trinucleotide repeat expansion — the table + anticipation + thresholds
// ---------------------------------------------------------------------------

export function AnticipationExpansionPanel() {
  const w = 980;
  const h = 580;
  const rows = [
    { d: "Huntington disease", r: "(CAG)n", m: "AD", mn: "Caudate has ↓ACh and GABA", tone: "fill-brand-soft stroke-brand", t: "fill-brand" },
    { d: "Myotonic dystrophy", r: "(CTG)n", m: "AD", mn: "Cataracts, Toupee, Gonadal atrophy", tone: "fill-neural-soft stroke-neural", t: "fill-neural" },
    { d: "Fragile X syndrome", r: "(CGG)n", m: "XD", mn: "Chin (protruding), Giant Gonads", tone: "fill-warning-soft stroke-warning", t: "fill-warning" },
    { d: "Friedreich ataxia", r: "(GAA)n", m: "AR", mn: "Ataxic GAAit", tone: "fill-emergency-soft stroke-emergency", t: "fill-emergency" },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Trinucleotide repeat expansion diseases: the four-row table of Huntington CAG, myotonic dystrophy CTG, fragile X CGG, and Friedreich ataxia GAA with modes and mnemonics, the anticipation ladder of increasing severity and decreasing onset across generations, and the fragile X premutation versus full mutation thresholds" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="44" fontSize="11" fontWeight="800" className="fill-foreground">Trinucleotide repeat expansion diseases — anticipation across generations</text>
      </g>

      {/* the table */}
      <g>
        <rect x="24" y="76" width="500" height="290" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="100" fontSize="10" fontWeight="800" className="fill-foreground">The source table — four diseases, four triplets</text>
        {/* column headers */}
        <text x="42" y="124" fontSize="8.5" fontWeight="800" className="fill-muted-foreground">DISEASE</text>
        <text x="228" y="124" fontSize="8.5" fontWeight="800" className="fill-muted-foreground">REPEAT</text>
        <text x="312" y="124" fontSize="8.5" fontWeight="800" className="fill-muted-foreground">MODE</text>
        <text x="362" y="124" fontSize="8.5" fontWeight="800" className="fill-muted-foreground">MNEMONIC</text>
        {rows.map((r, i) => {
          const y = 134 + i * 56;
          return (
            <g key={r.d}>
              <rect x="34" y={y} width="480" height="50" rx="9" className={r.tone} strokeWidth="1.2" />
              <text x="46" y={y + 30} fontSize="9.5" fontWeight="800" className={r.t}>{r.d}</text>
              <text x="230" y={y + 30} fontSize="10" fontWeight="800" className="fill-foreground">{r.r}</text>
              <text x="314" y={y + 30} fontSize="9.5" fontWeight="800" className="fill-foreground">{r.m}</text>
              <text x="362" y={y + 22} fontSize="8" className="fill-foreground">{r.mn.split(",")[0]}</text>
              <text x="362" y={y + 34} fontSize="8" className="fill-foreground">{r.mn.split(",").slice(1).join(",").trim() || " "}</text>
            </g>
          );
        })}
        <text x="42" y="358" fontSize="8.5" className="fill-muted-foreground">Friedreich is the lone AR row; fragile X is XD with atypical, oogenesis-driven inheritance.</text>
      </g>

      {/* anticipation ladder */}
      <g>
        <rect x="544" y="76" width="412" height="290" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="562" y="100" fontSize="10" fontWeight="800" className="fill-foreground">Anticipation — the expansion ladder</text>
        {[
          { gen: "Generation I", sev: "mild · late onset", h: 34, tone: "fill-brand-soft stroke-brand" },
          { gen: "Generation II", sev: "moderate · earlier", h: 62, tone: "fill-warning-soft stroke-warning" },
          { gen: "Generation III", sev: "severe · early onset", h: 92, tone: "fill-emergency-soft stroke-emergency" },
        ].map((b, i) => {
          const x = 570 + i * 128;
          const y = 300 - b.h;
          return (
            <g key={b.gen}>
              <rect x={x} y={y} width="108" height={b.h} rx="8" className={b.tone} strokeWidth="1.2" />
              <text x={x + 54} y={y + 16} textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">{b.gen}</text>
              <text x={x + 54} y={y + 30} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">{b.sev}</text>
              <text x={x + 54} y={y + b.h - 8} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">repeats ↑</text>
            </g>
          );
        })}
        <path d="M 590 200 C 680 170, 740 150, 830 120" fill="none" strokeWidth="2" strokeDasharray="6 4" className="stroke-emergency" />
        <text x="600" y="340" fontSize="8.5" fontWeight="700" className="fill-foreground">Disease severity ↑ and age of onset ↓ in</text>
        <text x="600" y="352" fontSize="8.5" fontWeight="700" className="fill-foreground">successive generations — the repeat tract lengthens.</text>
      </g>

      {/* fragile X threshold strip */}
      <g>
        <rect x="24" y="382" width="932" height="152" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="406" fontSize="10" fontWeight="800" className="fill-foreground">Fragile X — the FMR1 threshold ladder (CGG counts)</text>
        <rect x="42" y="420" width="440" height="100" rx="9" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="56" y="440" fontSize="9.5" fontWeight="800" className="fill-warning">Premutation (50–200 repeats)</text>
        <text x="56" y="456" fontSize="8.5" className="fill-muted-foreground">Tremor · ataxia · 1° ovarian insufficiency</text>
        <text x="56" y="472" fontSize="8.5" className="fill-muted-foreground">FMR1 still expressed — a movement-and-reproductive</text>
        <text x="56" y="484" fontSize="8.5" className="fill-muted-foreground">syndrome in adults; grandfathers pass it to ALL daughters.</text>
        <rect x="498" y="420" width="440" height="100" rx="9" className="fill-emergency-soft stroke-emergency" strokeWidth="1.2" />
        <text x="512" y="440" fontSize="9.5" fontWeight="800" className="fill-emergency">Full mutation (&gt;200 repeats)</text>
        <text x="512" y="456" fontSize="8.5" className="fill-muted-foreground">Postpubertal macroorchidism · long face with large jaw ·</text>
        <text x="512" y="472" fontSize="8.5" className="fill-muted-foreground">large everted ears · autism · mitral valve prolapse ·</text>
        <text x="512" y="488" fontSize="8.5" className="fill-muted-foreground">hypermobile joints — self-mutilation can be confused</text>
        <text x="512" y="500" fontSize="8.5" className="fill-muted-foreground">with Lesch-Nyhan syndrome.</text>
        <text x="42" y="540" fontSize="0" className="fill-none"> </text>
      </g>
      <g>
        <text x="42" y="558" fontSize="8.5" fontWeight="700" className="fill-foreground">Fragile EGG — expansion (CGG)n occurs during oogenesis → hypermethylation of cytosine residues → ↓ FMR1 expression · most common inherited cause of intellectual disability.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// G3 · Autosomal trisomies — the photo-signs (palm, scalp, fist)
// ---------------------------------------------------------------------------

export function TrisomyClinicalSigns() {
  const w = 980;
  const h = 560;
  const Panel = ({ x, title, tone, toneText, children }: { x: number; title: string; tone: string; toneText: string; children: React.ReactNode }) => (
    <g>
      <rect x={x} y="80" width="296" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
      <rect x={x + 14} y="92" width="268" height="24" rx="8" className={tone} strokeWidth="1.2" />
      <text x={x + 148} y={108} textAnchor="middle" fontSize="9.5" fontWeight="800" className={toneText}>{title}</text>
      {children}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Trisomy clinical signs redrawn as schematics: the single palmar crease of Down syndrome with an arrow on the open palm, the cutis aplasia scalp defect of Patau syndrome, and the clenched fist with overlapping fingers of Edwards syndrome beside rocker-bottom feet" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">The photo-signs — palm, scalp, and fist (original KYP schematics)</text>
      </g>

      {/* Single palmar crease — Down */}
      <Panel x={24} title="Single palmar crease — Down (21)" tone="fill-brand-soft stroke-brand" toneText="fill-brand">
        {/* open hand schematic: palm + 5 fingers */}
        <path d="M 104 220 L 104 300 C 104 318, 118 330, 140 330 L 196 330 C 218 330, 232 318, 232 300 L 232 220 L 226 176 C 225 168, 236 165, 238 173 L 243 214 L 249 164 C 250 156, 261 157, 261 165 L 263 216 L 273 170 C 275 162, 286 163, 286 171 L 286 224 C 286 268, 268 300, 232 330 L 232 340 L 104 340 L 100 300 Z"
          className="fill-muted/20 stroke-foreground" strokeWidth="2" transform="translate(-8,-30) rotate(-8 168 250)" />
        {/* the single crease + arrow */}
        <path d="M 118 262 C 150 270, 200 270, 226 260" fill="none" strokeWidth="4" strokeLinecap="round" className="stroke-emergency" transform="translate(-8,-30) rotate(-8 168 250)" />
        <line x1={200} y1={196} x2={168} y2={228} strokeWidth="2" className="stroke-emergency" transform="rotate(-8 168 250)" />
        <polygon points="166,230 158,222 172,218" className="fill-emergency" transform="rotate(-8 168 250)" />
        <text x={42} y={360} fontSize="9" fontWeight="700" className="fill-foreground">one deep transverse crease</text>
        <text x={42} y={372} fontSize="8" className="fill-muted-foreground">(not the usual two) + incurved 5th finger</text>
      </Panel>

      {/* Cutis aplasia — Patau */}
      <Panel x={342} title="Cutis aplasia — Patau (13)" tone="fill-warning-soft stroke-warning" toneText="fill-warning">
        {/* infant scalp vertex, top view */}
        <ellipse cx={490} cy={252} rx={86} ry={74} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* hair whorl arcs */}
        <path d="M 418 240 C 440 210, 540 210, 562 240 M 424 268 C 450 246, 530 246, 556 268 M 446 292 C 470 278, 510 278, 534 292" fill="none" strokeWidth="1.3" className="stroke-foreground/50" />
        {/* the focal defect */}
        <ellipse cx={490} cy={252} rx={26} ry={20} className="fill-emergency/60 stroke-emergency" strokeWidth="2.2" />
        <ellipse cx={490} cy={252} rx={12} ry={9} className="fill-emergency" />
        <line x1={524} y1={224} x2={556} y2={198} strokeWidth="1.6" className="stroke-emergency" />
        <text x={360} y={360} fontSize="9" fontWeight="700" className="fill-foreground">focal absence of skin at the vertex</text>
        <text x={360} y={372} fontSize="8" className="fill-muted-foreground">a raw, well-demarcated scalp patch</text>
      </Panel>

      {/* Clenched fist — Edwards */}
      <Panel x={660} title="Clenched fist — Edwards (18)" tone="fill-neural-soft stroke-neural" toneText="fill-neural">
        {/* fist schematic: palm block + overlapping finger outlines */}
        <rect x={730} y={220} width={110} height={96} rx={22} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M ${744 + i * 26} 224 C ${740 + i * 26} 208, ${752 + i * 26} 202, ${756 + i * 26} 214 C ${760 + i * 26} 224, ${752 + i * 26} 232, ${746 + i * 26} 230`} fill="none" strokeWidth="2" className="stroke-foreground/80" />
        ))}
        {/* thumb folded over */}
        <path d="M 726 262 C 712 258, 708 272, 722 278 L 738 280" fill="none" strokeWidth="2" className="stroke-foreground/80" />
        <text x={678} y={360} fontSize="9" fontWeight="700" className="fill-foreground">clenched fists with overlapping fingers</text>
        <text x={678} y={372} fontSize="8" className="fill-muted-foreground">+ rocker-bottom feet + prominent occiput</text>
      </Panel>

      {/* bottom strip */}
      <g>
        <rect x="24" y="404" width="932" height="100" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">Sign-to-number sorting</text>
        <text x="42" y="448" fontSize="9" className="fill-muted-foreground">Single palmar crease + Brushfield spots → 21 · Clenched overlapping fingers + rocker-bottom feet → 18 · Cutis aplasia + polydactyly + cleft midline → 13.</text>
        <text x="42" y="466" fontSize="9" fontWeight="700" className="fill-foreground">Rocker-bottom feet is shared by 18 and 13 — the HAND decides: overlapping fingers (18) vs polydactyly (13).</text>
        <text x="42" y="486" fontSize="8.5" className="fill-muted-foreground">Incidence Down (21) &gt; Edwards (18) &gt; Patau (13) · autosomal monosomies incompatible with life · drinking age 21, election age 18, puberty 13.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematics — the source photographs' diagnostic patterns redrawn (palm, scalp vertex, fist) without reproducing the images.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// G3 · Nondisjunction — meiosis I vs meiosis II gamete outcomes
// ---------------------------------------------------------------------------

export function NondisjunctionMiMii() {
  const w = 980;
  const h = 620;
  const Rod = ({ x, y, len, tone }: { x: number; y: number; len: number; tone: string }) => (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + len} strokeWidth="5.5" strokeLinecap="round" className={tone} />
      <line x1={x - 4} y1={y + len * 0.42} x2={x + 4} y2={y + len * 0.42} strokeWidth="5.5" className="stroke-border" />
    </g>
  );
  const Cell = ({ cx, cy, r, children }: { cx: number; cy: number; r: number; children: React.ReactNode }) => (
    <g>
      <circle cx={cx} cy={cy} r={r} className="fill-muted/10 stroke-border" strokeWidth="1.4" />
      {children}
    </g>
  );
  const Gamete = ({ cx, cy, label, tone, toneText }: { cx: number; cy: number; label: string; tone: string; toneText: string }) => (
    <g>
      <circle cx={cx} cy={cy} r="30" className={tone} strokeWidth="1.6" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="800" className={toneText}>{label}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Nondisjunction in meiosis 1 versus meiosis 2: meiosis 1 failure of homologous separation yields two trisomy and two monosomy gametes; meiosis 2 failure of sister chromatid separation yields one normal, one monosomy, one normal, and one trisomy gamete" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="44" fontSize="11" fontWeight="800" className="fill-foreground">Nondisjunction — which step failed decides the gamete census</text>
      </g>

      {/* LEFT column — Meiosis I */}
      <g>
        <rect x="24" y="76" width="460" height="478" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="100" fontSize="10.5" fontWeight="800" className="fill-brand">Nondisjunction in meiosis I</text>
        <text x="42" y="114" fontSize="8" className="fill-muted-foreground">homologous chromosomes FAIL to separate</text>
        {/* parent cell */}
        <Cell cx={140} cy={168} r={44}>
          <Rod x={128} y={144} len={40} tone="stroke-brand" />
          <Rod x={152} y={150} len={40} tone="stroke-neural" />
        </Cell>
        <text x={140} y={232} textAnchor="middle" fontSize="8" className="fill-muted-foreground">pair together →</text>
        {/* MI row: both to one side */}
        <line x1={140} y1={238} x2={140} y2={252} strokeWidth="1.4" className="stroke-foreground" />
        <Cell cx={100} cy={296} r={38}>
          <Rod x={90} y={274} len={34} tone="stroke-brand" />
          <Rod x={110} y={280} len={34} tone="stroke-brand" />
        </Cell>
        <Cell cx={210} cy={296} r={38}>
          <Rod x={202} y={280} len={34} tone="stroke-neural" />
        </Cell>
        <text x={100} y={352} textAnchor="middle" fontSize="8" className="fill-muted-foreground">both homologues</text>
        <text x={100} y={363} textAnchor="middle" fontSize="8" className="fill-muted-foreground">to one cell</text>
        <text x={248} y={300} fontSize="8" className="fill-muted-foreground">n+1 cell · n−1 cell</text>
        {/* MII row */}
        <line x1={100} y1={366} x2={100} y2={380} strokeWidth="1.4" className="stroke-foreground" />
        <line x1={210} y1={366} x2={210} y2={380} strokeWidth="1.4" className="stroke-foreground" />
        <text x={42} y={378} fontSize="8" className="fill-muted-foreground">meiosis II (normal):</text>
        {/* gametes */}
        <Gamete cx={78} cy={424} label="n+1" tone="fill-emergency/15 stroke-emergency" toneText="fill-emergency" />
        <Gamete cx={144} cy={424} label="n+1" tone="fill-emergency/15 stroke-emergency" toneText="fill-emergency" />
        <Gamete cx={210} cy={424} label="n−1" tone="fill-warning/20 stroke-warning" toneText="fill-warning" />
        <Gamete cx={276} cy={424} label="n−1" tone="fill-warning/20 stroke-warning" toneText="fill-warning" />
        <text x={352} y={420} fontSize="9" fontWeight="800" className="fill-emergency">2 Trisomy</text>
        <text x={352} y={434} fontSize="9" fontWeight="800" className="fill-warning">2 Monosomy</text>
        <text x={352} y={452} fontSize="8.5" className="fill-muted-foreground">ALL FOUR gametes</text>
        <text x={352} y={464} fontSize="8.5" className="fill-muted-foreground">abnormal</text>
        <text x={42} y={504} fontSize="8.5" fontWeight="700" className="fill-foreground">Down syndrome: 95% meiotic nondisjunction,</text>
        <text x={42} y={517} fontSize="8.5" fontWeight="700" className="fill-foreground">most commonly meiosis I — ↑ with advanced</text>
        <text x="42" y="530" fontSize="8.5" fontWeight="700" className="fill-foreground">maternal age (1:1500 &lt;20 → 1:25 &gt;45).</text>
      </g>

      {/* RIGHT column — Meiosis II */}
      <g>
        <rect x="496" y="76" width="460" height="478" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="514" y="100" fontSize="10.5" fontWeight="800" className="fill-neural">Nondisjunction in meiosis II</text>
        <text x="514" y="114" fontSize="8" className="fill-muted-foreground">sister chromatids FAIL to separate</text>
        <Cell cx={612} cy={168} r={44}>
          <Rod x={600} y={144} len={40} tone="stroke-brand" />
          <Rod x={624} y={150} len={40} tone="stroke-neural" />
        </Cell>
        <text x={612} y={232} textAnchor="middle" fontSize="8" className="fill-muted-foreground">normal MI →</text>
        <line x1={612} y1={238} x2={612} y2={252} strokeWidth="1.4" className="stroke-foreground" />
        <Cell cx={572} cy={296} r={38}>
          <Rod x={562} y={276} len={34} tone="stroke-brand" />
          <Rod x={582} y={280} len={34} tone="stroke-neural" />
        </Cell>
        <Cell cx={682} cy={296} r={38}>
          <Rod x={672} y={280} len={34} tone="stroke-brand" />
          <Rod x={692} y={280} len={34} tone="stroke-neural" />
        </Cell>
        <text x={730} y={288} fontSize="8" className="fill-muted-foreground">in ONE cell the</text>
        <text x={730} y={299} fontSize="8" className="fill-muted-foreground">chromatids stick</text>
        <text x={730} y={314} fontSize="8" fontWeight="800" className="fill-emergency">nondisjunction</text>
        <line x1={572} y1={366} x2={572} y2={380} strokeWidth="1.4" className="stroke-foreground" />
        <line x1={682} y1={366} x2={682} y2={380} strokeWidth="1.4" className="stroke-foreground" />
        <text x="514" y="378" fontSize="8" className="fill-muted-foreground">meiosis II:</text>
        <Gamete cx={550} cy={424} label="n" tone="fill-success/15 stroke-success" toneText="fill-success" />
        <Gamete cx={616} cy={424} label="n−1" tone="fill-warning/20 stroke-warning" toneText="fill-warning" />
        <Gamete cx={682} cy={424} label="n" tone="fill-success/15 stroke-success" toneText="fill-success" />
        <Gamete cx={748} cy={424} label="n+1" tone="fill-emergency/15 stroke-emergency" toneText="fill-emergency" />
        <text x={812} y={420} fontSize="9" fontWeight="800" className="fill-success">2 Normal</text>
        <text x={812} y={434} fontSize="9" fontWeight="800" className="fill-emergency">1 Trisomy</text>
        <text x={812} y={448} fontSize="9" fontWeight="800" className="fill-warning">1 Monosomy</text>
        <text x={812} y={466} fontSize="8.5" className="fill-muted-foreground">only HALF the</text>
        <text x={812} y={478} fontSize="8.5" className="fill-muted-foreground">gametes abnormal</text>
        <text x="514" y="504" fontSize="8.5" fontWeight="700" className="fill-foreground">Gamete census is the answer key: 0 normal</text>
        <text x="514" y="517" fontSize="8.5" fontWeight="700" className="fill-foreground">gametes → meiosis I failure; 2 normal →</text>
        <text x="514" y="530" fontSize="8.5" fontWeight="700" className="fill-foreground">meiosis II failure. Autosomal monosomies</text>
        <text x="514" y="543" fontSize="8.5" fontWeight="700" className="fill-foreground">are incompatible with life.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="566" width="932" height="18" rx="5" className="fill-muted/15" />
        <text x="36" y="579" fontSize="8" fontWeight="700" className="fill-foreground">Labels preserved from the source figure: Meiosis I · Meiosis II · Nondisjunction · Gametes · Trisomy (n+1) · Monosomy (n−1) · Normal (n)</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// G3 · Robertsonian translocation — fusion to gamete outcomes
// ---------------------------------------------------------------------------

export function RobertsonianTranslocationOutcomes() {
  const w = 980;
  const h = 580;
  const Rod = ({ x, y, len, tone }: { x: number; y: number; len: number; tone: string }) => (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + len} strokeWidth="6" strokeLinecap="round" className={tone} />
      <line x1={x - 4} y1={y + len * 0.3} x2={x + 4} y2={y + len * 0.3} strokeWidth="6" className="stroke-border" />
    </g>
  );
  const FusedRod = ({ x, y }: { x: number; y: number }) => (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + 52} strokeWidth="6" strokeLinecap="round" className="stroke-brand" />
      <line x1={x} y1={y + 52} x2={x} y2={y + 96} strokeWidth="6" strokeLinecap="round" className="stroke-neural" />
      <line x1={x - 4} y1={y + 50} x2={x + 4} y2={y + 50} strokeWidth="6" className="stroke-border" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Robertsonian translocation: the long arms of two acrocentric chromosomes fuse at the centromere and the two short arms are lost; the balanced carrier is healthy, but meiosis yields normal, balanced-carrier, and unbalanced gametes — unbalanced conceptions cause miscarriage, stillbirth, or translocation Down syndrome" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="44" fontSize="11" fontWeight="800" className="fill-foreground">Robertsonian translocation — acrocentric fusion and the gamete fork</text>
      </g>

      {/* stage 1 — normal precursor */}
      <g>
        <rect x="24" y="80" width="200" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="124" y="102" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">Normal gamete precursor</text>
        <Rod x={100} y={124} len={52} tone="stroke-brand" />
        <Rod x={124} y={124} len={52} tone="stroke-brand" />
        <Rod x={152} y={140} len={40} tone="stroke-neural" />
        <Rod x={172} y={140} len={40} tone="stroke-neural" />
        <text x="124" y="216" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">one long pair + one short pair</text>
      </g>
      <polygon points="242,180 232,175 232,185" className="fill-foreground" />

      {/* stage 2 — the fusion */}
      <g>
        <rect x="248" y="80" width="240" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="368" y="102" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">Robertsonian translocation</text>
        <FusedRod x={320} y={124} />
        <Rod x={360} y={140} len={40} tone="stroke-brand" />
        <Rod x={384} y={150} len={30} tone="stroke-neural" />
        <g opacity="0.55">
          <line x1={320} y1={112} x2={336} y2={112} strokeWidth="3" className="stroke-muted-foreground" />
          <text x={402} y={128} fontSize="7.5" className="fill-muted-foreground">2 short arms</text>
          <text x={402} y={138} fontSize="7.5" className="fill-muted-foreground">lost</text>
        </g>
        <text x="368" y="250" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">long arms fused at the centromere</text>
      </g>
      <polygon points="502,180 492,175 492,185" className="fill-foreground" />

      {/* stage 3 — unbalanced precursor + meiosis */}
      <g>
        <rect x="508" y="80" width="210" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="613" y="102" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">Unbalanced gamete precursor</text>
        <FusedRod x={580} y={124} />
        <Rod x={620} y={140} len={40} tone="stroke-brand" />
        <Rod x={644} y={150} len={30} tone="stroke-neural" />
        <text x="613" y="216" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Meiosis</text>
        <text x="613" y="228" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">the trivalent segregates</text>
      </g>
      <line x1="613" y1="280" x2="613" y2="300" strokeWidth="2" className="stroke-foreground" />
      <polygon points="613,306 609,298 617,298" className="fill-foreground" />

      {/* stakes panel (right of stage 3) */}
      <g>
        <rect x="734" y="80" width="222" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="750" y="102" fontSize="9" fontWeight="800" className="fill-foreground">The stakes</text>
        <rect x="750" y="114" width="190" height="70" rx="8" className="fill-success-soft stroke-success" strokeWidth="1.1" />
        <text x="762" y="132" fontSize="8" fontWeight="800" className="fill-success">Balanced</text>
        <text x="762" y="145" fontSize="7.5" className="fill-muted-foreground">no significant gain/loss →</text>
        <text x="762" y="156" fontSize="7.5" className="fill-muted-foreground">normally NO abnormal phenotype</text>
        <rect x="750" y="192" width="190" height="70" rx="8" className="fill-emergency-soft stroke-emergency" strokeWidth="1.1" />
        <text x="762" y="210" fontSize="8" fontWeight="800" className="fill-emergency">Unbalanced</text>
        <text x="762" y="223" fontSize="7.5" className="fill-muted-foreground">missing/extra genes → miscarriage,</text>
        <text x="762" y="234" fontSize="7.5" className="fill-muted-foreground">stillbirth, imbalance (Down, Patau)</text>
      </g>

      {/* outcome row — the five gametes */}
      <g>
        <rect x="24" y="312" width="932" height="150" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="336" fontSize="9.5" fontWeight="800" className="fill-foreground">Gamete outcomes (the source's five-cell row)</text>
        <g>
          <rect x={42} y={350} width={160} height={94} rx="10" className="fill-success-soft stroke-success" strokeWidth="1.2" />
          <Rod x={78} y={370} len={38} tone="stroke-brand" />
          <Rod x={100} y={378} len={28} tone="stroke-neural" />
          <text x={122} y={400} fontSize="8.5" fontWeight="800" className="fill-success">Normal gamete</text>
          <text x={122} y={412} fontSize="7.5" className="fill-muted-foreground">both normal</text>
          <text x={122} y={422} fontSize="7.5" className="fill-muted-foreground">chromosomes</text>
        </g>
        <g>
          <rect x={214} y={350} width={190} height={94} rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
          <FusedRod x={248} y={368} />
          <text x={286} y={400} fontSize="8.5" fontWeight="800" className="fill-brand">Balanced carrier</text>
          <text x={286} y={412} fontSize="7.5" className="fill-muted-foreground">fused chromosome only —</text>
          <text x={286} y={422} fontSize="7.5" className="fill-muted-foreground">healthy, at recurrence risk</text>
        </g>
        <g>
          <rect x={416} y={350} width={520} height={94} rx="10" className="fill-emergency-soft stroke-emergency" strokeWidth="1.2" />
          <text x={432} y={372} fontSize="8.5" fontWeight="800" className="fill-emergency">Abnormal gametes (unbalanced — missing or extra genes)</text>
          <FusedRod x={452} y={384} />
          <Rod x={488} y={392} len={30} tone="stroke-brand" />
          <text x={512} y={402} fontSize="7.5" className="fill-muted-foreground">fused + normal homolog</text>
          <text x={512} y={413} fontSize="7.5" className="fill-muted-foreground">→ extra long-arm dose</text>
          <FusedRod x={640} y={384} />
          <text x={668} y={402} fontSize="7.5" className="fill-muted-foreground">fused chromosome alone</text>
          <text x={668} y={413} fontSize="7.5" className="fill-muted-foreground">with the partner missing</text>
          <text x={790} y={402} fontSize="7.5" fontWeight="700" className="fill-foreground">miscarriage · stillbirth</text>
          <text x={790} y={413} fontSize="7.5" fontWeight="700" className="fill-foreground">chromosomal imbalance</text>
        </g>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="478" width="932" height="60" rx="10" className="fill-muted/15" />
        <text x="40" y="502" fontSize="8.5" fontWeight="700" className="fill-foreground">Commonly involves the acrocentric pairs 21, 22, 13, 14, and 15 · one of the most common types of translocation · classic translocation Down: t(14;21)</text>
        <text x="40" y="516" fontSize="8" className="fill-muted-foreground">Why the carrier is healthy: the lost short arms carry only redundant rRNA genes — all unique long-arm material remains (once on the fused chromosome).</text>
        <text x="40" y="530" fontSize="8" className="fill-muted-foreground">Labels preserved: Normal gamete precursor · Robertsonian translocation · Unbalanced gamete precursor · Meiosis · Normal gamete · Abnormal gametes</text>
      </g>
    </svg>
  );
}
