"use client";

// Original KYP visuals — Nucleotide metabolism (First Aid 2026, Part 1
// pdf 55–57 / book 33–35). All SVGs use theme tokens (currentColor +
// Tailwind color classes), so they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// Atom sources of the purine and pyrimidine rings
// ---------------------------------------------------------------------------

function Atom({ cx, cy, letter, num, tone }: { cx: number; cy: number; letter: string; num: string; tone: "brand" | "warning" | "neural" | "emergency" | "secondary" }) {
  const cls: Record<string, string> = {
    brand: "fill-brand-soft stroke-brand",
    warning: "fill-warning-soft stroke-warning",
    neural: "fill-neural-soft stroke-neural",
    emergency: "fill-emergency-soft stroke-emergency",
    secondary: "fill-secondary stroke-muted-foreground",
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r="14" className={cls[tone]} strokeWidth="1.6" />
      <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize="11" fontWeight="800" className="fill-foreground">{letter}</text>
      <text x={cx + 11} y={cy - 9} fontSize="8" fontWeight="700" className="fill-muted-foreground">{num}</text>
    </g>
  );
}

function PrecursorLabel({ x, y, text, tone, anchor = "middle" }: { x: number; y: number; text: string; tone: string; anchor?: "middle" | "start" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize="9.5" fontWeight="700" className={tone}>{text}</text>
  );
}

export function NucleotideRingAtomSources() {
  const w = 940;
  const h = 470;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Atom sources of purine and pyrimidine rings with precursors glycine, aspartate, glutamine, CO2, THF and carbamoyl phosphate" className="min-w-[900px]">
      {/* ============================ PURINE ============================ */}
      <g>
        <text x="250" y="52" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-foreground">Purine (A, G) — 2 fused rings</text>
        {/* six-membered ring bonds */}
        <polygon points="240,105 192,132 192,188 240,215 288,188 288,132" fill="none" strokeWidth="1.6" className="stroke-muted-foreground/70" />
        {/* imidazole ring bonds (fused on C5–C4 edge) */}
        <polygon points="288,132 340,120 368,160 340,200 288,188" fill="none" strokeWidth="1.6" className="stroke-muted-foreground/70" />

        <Atom cx={192} cy={132} letter="N" num="1" tone="brand" />
        <Atom cx={192} cy={188} letter="C" num="2" tone="neural" />
        <Atom cx={240} cy={215} letter="N" num="3" tone="emergency" />
        <Atom cx={288} cy={188} letter="C" num="4" tone="secondary" />
        <Atom cx={288} cy={132} letter="C" num="5" tone="secondary" />
        <Atom cx={240} cy={105} letter="C" num="6" tone="warning" />
        <Atom cx={340} cy={120} letter="N" num="7" tone="secondary" />
        <Atom cx={368} cy={160} letter="C" num="8" tone="neural" />
        <Atom cx={340} cy={200} letter="N" num="9" tone="emergency" />

        {/* precursor labels + leader lines */}
        <line x1="192" y1="118" x2="150" y2="86" strokeWidth="1" className="stroke-brand/70" />
        <PrecursorLabel x={110} y={80} text="Aspartate → N1" tone="fill-brand" />
        <line x1="182" y1="196" x2="136" y2="228" strokeWidth="1" className="stroke-neural/70" />
        <PrecursorLabel x={64} y={238} text="THF (N¹⁰-formyl) → C2 + C8" tone="fill-neural" />
        <line x1="232" y1="228" x2="204" y2="272" strokeWidth="1" className="stroke-emergency/70" />
        <PrecursorLabel x={130} y={285} text="Glutamine → N3 + N9" tone="fill-emergency" />
        <line x1="246" y1="96" x2="286" y2="58" strokeWidth="1" className="stroke-warning/70" />
        <PrecursorLabel x={330} y={52} text="CO₂ → C6" tone="fill-warning" />
        <line x1="300" y1="182" x2="356" y2="258" strokeWidth="1" className="stroke-muted-foreground/70" />
        <PrecursorLabel x={392} y={272} text="Glycine → C4 + C5 + N7" tone="fill-foreground/80" />
      </g>

      {/* ============================ PYRIMIDINE ============================ */}
      <g>
        <text x="700" y="52" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-foreground">Pyrimidine (C, U, T) — 1 ring</text>
        <polygon points="700,105 652,132 652,188 700,215 748,188 748,132" fill="none" strokeWidth="1.6" className="stroke-muted-foreground/70" />
        <Atom cx={652} cy={132} letter="C" num="2" tone="warning" />
        <Atom cx={700} cy={105} letter="N" num="3" tone="warning" />
        <Atom cx={652} cy={188} letter="N" num="1" tone="brand" />
        <Atom cx={700} cy={215} letter="C" num="6" tone="brand" />
        <Atom cx={748} cy={188} letter="C" num="5" tone="brand" />
        <Atom cx={748} cy={132} letter="C" num="4" tone="brand" />

        <line x1="644" y1="122" x2="596" y2="92" strokeWidth="1" className="stroke-warning/70" />
        <PrecursorLabel x={530} y={86} text="Carbamoyl phosphate → C2 + N3" tone="fill-warning" />
        <line x1="756" y1="180" x2="800" y2="228" strokeWidth="1" className="stroke-brand/70" />
        <PrecursorLabel x={836} y={242} text="Aspartate → N1 + C4 + C5 + C6" tone="fill-brand" />
        <text x="700" y="266" textAnchor="middle" fontSize="9" fontStyle="italic" className="fill-muted-foreground">carbamoyl phosphate = glutamine + CO₂ (CPS2, cytosol)</text>
      </g>

      {/* ============================ DEAMINATION STRIP ============================ */}
      <g>
        <rect x="26" y="318" width="888" height="58" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="44" y="341" fontSize="10" fontWeight="800" className="fill-foreground">Deamination (memorize the four):</text>
        <text x="44" y="361" fontSize="9.5" className="fill-muted-foreground">Cytosine → uracil · Adenine → hypoxanthine · Guanine → xanthine · 5-methylcytosine → thymine</text>
        <text x="700" y="341" textAnchor="end" fontSize="9.5" fontWeight="700" className="fill-brand">Uracil in RNA · thymine in DNA</text>
        <text x="700" y="361" textAnchor="end" fontSize="9.5" className="fill-muted-foreground">methylation of uracil makes thymine</text>
      </g>

      {/* ============================ MNEMONIC CHIPS ============================ */}
      <g>
        <rect x="26" y="400" width="288" height="52" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1" />
        <text x="170" y="421" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">“Pure As Gold”</text>
        <text x="170" y="438" textAnchor="middle" fontSize="9" className="fill-foreground/80">Purines = A &amp; G — two rings</text>

        <rect x="326" y="400" width="288" height="52" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1" />
        <text x="470" y="421" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">“CUT the pyramid”</text>
        <text x="470" y="438" textAnchor="middle" fontSize="9" className="fill-foreground/80">pyrimidines = C, U, T — one ring</text>

        <rect x="626" y="400" width="288" height="52" rx="10" className="fill-emergency-soft stroke-emergency" strokeWidth="1" />
        <text x="770" y="421" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-emergency">“cats purr until they GAG”</text>
        <text x="770" y="438" textAnchor="middle" fontSize="9" className="fill-foreground/80">purine amino acids: Glycine · Aspartate · Glutamine</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// De novo pyrimidine + purine synthesis map with drug sites
// ---------------------------------------------------------------------------

function MapNode({ x, y, w, label, sub, tone }: { x: number; y: number; w: number; label: string; sub?: string; tone: "neutral" | "brand" | "warning" | "neural" | "emergency" }) {
  const cls: Record<string, string> = {
    neutral: "fill-card stroke-border",
    brand: "fill-brand-soft stroke-brand",
    warning: "fill-warning-soft stroke-warning",
    neural: "fill-neural-soft stroke-neural",
    emergency: "fill-emergency-soft stroke-emergency",
  };
  return (
    <g>
      <rect x={x} y={y} width={w} height={sub ? 46 : 34} rx="9" className={cls[tone]} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + (sub ? 19 : 21)} textAnchor="middle" fontSize="11" fontWeight="800" className="fill-foreground">{label}</text>
      {sub && <text x={x + w / 2} y={y + 36} textAnchor="middle" fontSize="8" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
}

function InhibChip({ x, y, label, anchor = "middle" }: { x: number; y: number; label: string; anchor?: "middle" | "start" | "end" }) {
  return (
    <g>
      <text x={x} y={y} textAnchor={anchor} fontSize="8.5" fontWeight="800" className="fill-emergency">{label}</text>
    </g>
  );
}

export function NucleotideDeNovoSalvageMap() {
  const w = 980;
  const h = 640;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="De novo pyrimidine and purine synthesis map with salvage routes and drug inhibitor sites" className="min-w-[940px]">
      {/* lane headers */}
      <text x="260" y="34" textAnchor="middle" fontSize="11.5" fontWeight="800" className="fill-warning">PYRIMIDINE base production — requires aspartate</text>
      <text x="742" y="34" textAnchor="middle" fontSize="11.5" fontWeight="800" className="fill-brand">PURINE base production or salvage reuse</text>
      <text x="742" y="50" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">de novo requires aspartate, glycine, glutamine, and THF</text>

      {/* ============================ PYRIMIDINE LANE ============================ */}
      <g>
        <text x="60" y="88" fontSize="9.5" fontWeight="700" className="fill-foreground">Glutamine + CO₂ (2 ATP)</text>
        <text x="60" y="102" fontSize="8" className="fill-muted-foreground">→ 2 ADP + Pi + glutamate</text>
        <line x1="196" y1="96" x2="228" y2="96" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M236 96 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <MapNode x={240} y={78} w={150} label="CPS2 *" sub="rate-limiting · cytosol" tone="warning" />
        <text x="196" y="126" fontSize="8" className="fill-muted-foreground">* rate-limiting step</text>
        <text x="315" y="142" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">carbamoyl phosphate synthetase II — uses glutamine</text>

        <line x1="390" y1="96" x2="422" y2="96" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M430 96 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <MapNode x={434} y={78} w={128} label="Carbamoyl phosphate" tone="neutral" />

        <line x1="562" y1="96" x2="594" y2="96" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="578" y="86" textAnchor="middle" fontSize="8" className="fill-muted-foreground">+ Asp</text>
        <path d="M602 96 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <MapNode x={606} y={78} w={112} label="Orotic acid" tone="neutral" />
        <text x="662" y="146" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-emergency">impaired in orotic aciduria</text>
        {/* leflunomide on the orotate step */}
        <line x1="640" y1="126" x2="640" y2="160" strokeWidth="2" className="stroke-emergency" />
        <line x1="630" y1="160" x2="650" y2="160" strokeWidth="2" className="stroke-emergency" />
        <InhibChip x={640} y={184} label="Leflunomide ⊣ dihydroorotate dehydrogenase" />

        <line x1="718" y1="96" x2="746" y2="96" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="732" y="86" textAnchor="middle" fontSize="8" className="fill-muted-foreground">+ PRPP</text>
        <path d="M754 96 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <MapNode x={758} y={78} w={90} label="UMP" tone="warning" />

        {/* UMP → UDP → CTP branch */}
        <path d="M 803 112 L 803 156" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M803 164 l-4.5 -9 h9 z" className="fill-muted-foreground" />
        <MapNode x={770} y={168} w={86} label="UDP" tone="neutral" />
        <line x1="856" y1="185" x2="888" y2="185" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M896 185 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <MapNode x={900} y={168} w={80} label="CTP" tone="neutral" />

        {/* UDP → dUDP via ribonucleotide reductase */}
        <path d="M 770 185 L 700 185 L 700 268" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M700 276 l-4.5 -9 h9 z" className="fill-muted-foreground" />
        <text x="684" y="222" textAnchor="end" fontSize="8.5" fontWeight="700" className="fill-foreground">ribonucleotide reductase</text>
        <MapNode x={654} y={280} w={92} label="dUDP" tone="neutral" />
        <line x1="700" y1="297" x2="700" y2="330" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M700 338 l-4.5 -9 h9 z" className="fill-muted-foreground" />
        <MapNode x={654} y={342} w={92} label="dUMP" tone="neutral" />

        {/* hydroxyurea on ribonucleotide reductase (the UDP→dUDP arrow) */}
        <line x1="688" y1="218" x2="714" y2="218" strokeWidth="2" className="stroke-emergency" />
        <line x1="700" y1="210" x2="700" y2="218" strokeWidth="2" className="stroke-emergency" />
        <InhibChip x={684} y={240} label="Hydroxyurea ⊣" anchor="end" />

        {/* dUMP → dTMP: thymidylate synthase + folate loop */}
        <line x1="700" y1="364" x2="700" y2="398" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M700 406 l-4.5 -9 h9 z" className="fill-muted-foreground" />
        <text x="716" y="380" fontSize="8.5" fontWeight="700" className="fill-foreground">thymidylate synthase</text>
        {/* 5-FU T-bar on the dUMP→dTMP arrow */}
        <line x1="688" y1="396" x2="714" y2="396" strokeWidth="2" className="stroke-emergency" />
        <line x1="700" y1="388" x2="700" y2="396" strokeWidth="2" className="stroke-emergency" />
        <MapNode x={654} y={410} w={92} label="dTMP" tone="warning" />
        <InhibChip x={754} y={428} label="5-FU / capecitabine ⊣ (5-F-dUMP)" anchor="start" />

        {/* folate cycle: DHF → DHFR → THF; methylene-THF feeds dTMP */}
        <g>
          <MapNode x={418} y={400} w={56} label="DHF" tone="neutral" />
          <line x1="474" y1="417" x2="502" y2="417" strokeWidth="1.6" className="stroke-muted-foreground" />
          <path d="M510 417 l-9 -4.5 v9 z" className="fill-muted-foreground" />
          <text x="493" y="392" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">DHFR</text>
          <MapNode x={514} y={400} w={56} label="THF" tone="neutral" />
          <text x="543" y="392" textAnchor="middle" fontSize="7" className="fill-muted-foreground">N⁵,N¹⁰-methylene-THF ↓</text>
          <path d="M 570 410 C 610 410, 640 418, 650 424" fill="none" strokeWidth="1.4" strokeDasharray="4 3" className="stroke-neural" />
          <path d="M656 427 l-10 -2 l5 9 z" className="fill-neural" />
          <line x1="548" y1="446" x2="548" y2="462" strokeWidth="2" className="stroke-emergency" />
          <line x1="540" y1="462" x2="556" y2="462" strokeWidth="2" className="stroke-emergency" />
          <InhibChip x={494} y={480} label="MTX (humans) · TMP (bacteria) · pyrimethamine (protozoa) ⊣ DHFR" />
        </g>
      </g>

      {/* ============================ PURINE LANE ============================ */}
      <g>
        <MapNode x={60} y={78} w={116} label="Ribose 5-P" sub="pentose phosphate path" tone="neutral" />
        <line x1="176" y1="96" x2="204" y2="96" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="190" y="72" textAnchor="middle" fontSize="8" className="fill-muted-foreground">PRPP synthetase</text>
        <path d="M212 96 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <MapNode x={216} y={78} w={90} label="PRPP" tone="brand" />

        <path d="M 306 112 L 306 268" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M306 276 l-4.5 -9 h9 z" className="fill-muted-foreground" />
        <text x="322" y="192" fontSize="8.5" fontWeight="700" className="fill-foreground">de novo synthesis *</text>
        <text x="322" y="206" fontSize="7.5" className="fill-muted-foreground">* rate-limiting: PRPP amidotransferase</text>
        <line x1="296" y1="244" x2="270" y2="244" strokeWidth="2" className="stroke-emergency" />
        <line x1="270" y1="236" x2="270" y2="252" strokeWidth="2" className="stroke-emergency" />
        <InhibChip x={264} y={244} label="6-MP · MTX · azathioprine ⊣" anchor="end" />

        <MapNode x={258} y={280} w={96} label="IMP" tone="brand" />
        {/* IMP → AMP */}
        <path d="M 258 303 L 200 348" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M195 352 l10 -2 l-4 9 z" className="fill-muted-foreground" />
        <MapNode x={146} y={356} w={90} label="AMP" tone="neutral" />
        {/* IMP → GMP */}
        <path d="M 354 303 L 412 348" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M417 352 l-10 -2 l4 9 z" className="fill-muted-foreground" />
        <text x="404" y="336" textAnchor="end" fontSize="8.5" fontWeight="700" className="fill-foreground">IMP dehydrogenase</text>
        <MapNode x={368} y={356} w={90} label="GMP" tone="neutral" />
        <line x1="470" y1="330" x2="494" y2="306" strokeWidth="2" className="stroke-emergency" />
        <line x1="480" y1="336" x2="500" y2="318" strokeWidth="2" className="stroke-emergency" />
        <InhibChip x={502} y={306} label="Mycophenolate · ribavirin ⊣" anchor="start" />

        {/* 6-MP fate chips */}
        <text x="196" y="428" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">6-MP → 6-thioguanine nucleotides (6-TGNs)</text>
        <text x="196" y="442" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-emergency">+ allopurinol (XO inhibitor) → ↑ 6-TGN toxicity — reduce dose, monitor CBC</text>
      </g>

      {/* ============================ CPS DISTINCTION FOOTER ============================ */}
      <g>
        <rect x="26" y="500" width="928" height="112" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="46" y="528" fontSize="10.5" fontWeight="800" className="fill-foreground">CPS1 vs CPS2 — the classic one-liner</text>
        <text x="46" y="552" fontSize="9.5" fontWeight="700" className="fill-neural">CPS1 — mitochondria · urea cycle · liver</text>
        <text x="46" y="572" fontSize="8.5" className="fill-muted-foreground">nitrogen disposal (uses ammonia)</text>
        <text x="500" y="552" fontSize="9.5" fontWeight="700" className="fill-warning">CPS2 — cytosol · pyrimidine synthesis · most cells</text>
        <text x="500" y="572" fontSize="8.5" className="fill-muted-foreground">nucleotide production (uses glutamine) — the CPS2 on this map</text>
        <text x="46" y="598" fontSize="8.5" fontStyle="italic" className="fill-muted-foreground">Hydroxyurea ⊣ ribonucleotide reductase (both purine + pyrimidine ribo → deoxyribo) · MTX/TMP/pyrimethamine ⊣ DHFR (↓ dTMP)</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Purine metabolism: salvage, degradation, deficiency blocks, drug targets
// ---------------------------------------------------------------------------

export function PurineMetabolismMap() {
  const w = 980;
  const h = 660;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Purine metabolism map with de novo synthesis, salvage pathways, degradation to uric acid, ADA and HGPRT deficiency blocks and drug targets" className="min-w-[940px]">
      {/* ============================ CENTRAL HUB ============================ */}
      <MapNode x={410} y={56} w={110} label="PRPP" sub="ribose 5-P → PRPP synthetase" tone="brand" />

      {/* de novo synthesis PRPP → IMP */}
      <path d="M 465 102 L 465 146" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
      <path d="M465 154 l-4.5 -9 h9 z" className="fill-muted-foreground" />
      <text x="480" y="132" fontSize="8.5" fontWeight="700" className="fill-foreground">de novo synthesis</text>
      <MapNode x={416} y={158} w={98} label="IMP" tone="brand" />

      {/* nucleic acids pool (left) */}
      <g>
        <MapNode x={60} y={30} w={150} label="Nucleic acids" sub="DNA and RNA — dietary + turnover" tone="neutral" />
        <path d="M 210 47 L 244 47 L 244 60" fill="none" strokeWidth="1.4" className="stroke-muted-foreground" />
        <text x="252" y="52" fontSize="8" className="fill-muted-foreground">→ nucleotides → nucleosides → free bases (catabolism ladder)</text>
      </g>

      {/* ============================ SALVAGE ARC (left) ============================ */}
      <g>
        {/* IMP → GMP */}
        <path d="M 416 185 L 340 232" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="356" y="212" fontSize="8" className="fill-muted-foreground">↔</text>
        <MapNode x={258} y={236} w={90} label="GMP" tone="neutral" />
        {/* GMP ⇄ Guanosine ⇄ Guanine */}
        <path d="M 258 269 L 258 306" fill="none" strokeWidth="1.4" className="stroke-muted-foreground" />
        <MapNode x={216} y={310} w={114} label="Guanosine" tone="neutral" />
        <path d="M 216 333 L 216 366" fill="none" strokeWidth="1.4" className="stroke-muted-foreground" />
        <MapNode x={172} y={370} w={112} label="Guanine" tone="neutral" />
        {/* HGPRT salvage: guanine → GMP */}
        <path d="M 228 370 C 130 370, 96 300, 190 262" fill="none" strokeWidth="1.6" strokeDasharray="5 3" className="stroke-brand" />
        <path d="M198 258 l-11 1 l7 -9 z" className="fill-brand" />
        <text x="86" y="318" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">HGPRT</text>
        <text x="86" y="331" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">+ PRPP</text>
        {/* HGPRT deficiency block */}
        <line x1="128" y1="294" x2="144" y2="308" strokeWidth="2.4" className="stroke-emergency" />
        <line x1="134" y1="286" x2="150" y2="300" strokeWidth="2.4" className="stroke-emergency" />
        <text x="76" y="272" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">Lesch-Nyhan</text>
        <text x="76" y="285" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-emergency">HGPRT ⊣</text>
      </g>

      {/* ============================ AMP ARM (right of IMP) ============================ */}
      <g>
        <path d="M 514 185 L 590 232" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="556" y="212" fontSize="8" className="fill-muted-foreground">↔</text>
        <MapNode x={572} y={236} w={90} label="AMP" tone="neutral" />
        <path d="M 662 253 L 700 253" fill="none" strokeWidth="1.4" className="stroke-muted-foreground" />
        <MapNode x={704} y={236} w={118} label="Adenosine" tone="neutral" />
        {/* ADA step: adenosine → inosine */}
        <path d="M 822 253 L 858 253" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="840" y="244" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">ADA</text>
        <MapNode x={862} y={236} w={98} label="Inosine" tone="neutral" />
        {/* ADA deficiency block + drugs */}
        <line x1="840" y1="262" x2="840" y2="284" strokeWidth="2.4" className="stroke-emergency" />
        <line x1="830" y1="284" x2="850" y2="284" strokeWidth="2.4" className="stroke-emergency" />
        <text x="840" y="298" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emergency">ADA ⊣ → SCID</text>
        <text x="840" y="311" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">drugs that inhibit ADA:</text>
        <text x="840" y="322" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-neural">cladribine · pentostatin</text>
        {/* AMP ⇄ adenosine back-arrow label */}
        {/* adenine + APRT salvage (below AMP) */}
        <path d="M 617 269 L 617 366" fill="none" strokeWidth="1.4" className="stroke-muted-foreground" />
        <MapNode x={573} y={370} w={112} label="Adenine" tone="neutral" />
        <path d="M 685 380 C 760 380, 800 330, 700 274" fill="none" strokeWidth="1.6" strokeDasharray="5 3" className="stroke-brand" />
        <path d="M694 270 l-8 8 l11 2 z" className="fill-brand" />
        <text x="772" y="372" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">APRT</text>
        <text x="772" y="385" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">+ PRPP</text>
        {/* inosine → hypoxanthine */}
        <path d="M 911 269 L 911 306" fill="none" strokeWidth="1.4" className="stroke-muted-foreground" />
        <MapNode x={856} y={310} w={122} label="Hypoxanthine" tone="warning" />
      </g>

      {/* ============================ DEGRADATION LADDER (bottom) ============================ */}
      <g>
        {/* guanine → xanthine */}
        <path d="M 284 416 C 350 470, 470 480, 540 462" fill="none" strokeWidth="1.4" className="stroke-muted-foreground" />
        {/* hypoxanthine → xanthine (XO) */}
        <path d="M 856 432 L 700 448" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="782" y="438" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">XO</text>
        <MapNode x={600} y={432} w={104} label="Xanthine" tone="warning" />
        {/* xanthine → uric acid (XO) */}
        <path d="M 600 465 L 500 490" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="560" y="488" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">XO</text>
        <MapNode x={398} y={482} w={104} label="Uric acid" tone="emergency" />
        {/* XO inhibitor chips */}
        <line x1="648" y1="478" x2="668" y2="498" strokeWidth="2" className="stroke-emergency" />
        <line x1="656" y1="470" x2="676" y2="490" strokeWidth="2" className="stroke-emergency" />
        <text x="690" y="506" fontSize="8.5" fontWeight="800" className="fill-emergency">Allopurinol · Febuxostat ⊣ XO</text>
        {/* uric acid → allantoin (rasburicase) */}
        <path d="M 398 516 L 330 542" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="382" y="540" textAnchor="end" fontSize="8" fontWeight="700" className="fill-foreground">urate oxidase</text>
        <text x="382" y="551" textAnchor="end" fontSize="7.5" className="fill-muted-foreground">(rasburicase · pegloticase)</text>
        <MapNode x={228} y={546} w={104} label="Allantoin" tone="neutral" />
        <path d="M 228 580 L 180 580" fill="none" strokeWidth="1.4" className="stroke-muted-foreground" />
        <text x="172" y="584" textAnchor="end" fontSize="9" fontWeight="700" className="fill-foreground">Excretion →</text>
      </g>

      {/* ============================ CLINICAL CHIPS ============================ */}
      <g>
        <rect x="26" y="608" width="928" height="40" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="625" fontSize="8.5" fontWeight="800" className="fill-foreground">↓ ADA → ↑ dATP → ⊣ ribonucleotide reductase → ↓ DNA precursors → ↓ lymphocytes (SCID)</text>
        <text x="42" y="640" fontSize="8.5" fontWeight="800" className="fill-emergency">HGPRT mnemonic — Hyperuricemia · Gout · Pissed off (self-mutilation) · Red/orange crystals · Tense muscles (dystonia)</text>
      </g>
    </svg>
  );
}
