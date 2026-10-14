"use client";

// Original KYP visuals — tRNA structure/charging and ribosomal protein
// synthesis stages (First Aid 2026, Part 1 pdf 64–65 / book 42–43).
// All SVGs use theme tokens (currentColor + Tailwind color classes), so
// they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// tRNA — cloverleaf structure, charging, codon pairing
// ---------------------------------------------------------------------------

export function TrnaStructureCharging() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="tRNA cloverleaf structure with acceptor stem, T-arm, D-arm, variable arm and anticodon loop; charging by aminoacyl-tRNA synthetase; antiparallel codon-anticodon pairing with wobble position" className="min-w-[940px]">
      {/* ============================ CLOVERLEAF ============================ */}
      <g>
        <text x="240" y="36" textAnchor="middle" fontSize="11.5" fontWeight="800" className="fill-foreground">Structure — the cloverleaf (75–90 nucleotides)</text>

        {/* acceptor stem (top) */}
        <line x1="240" y1="56" x2="240" y2="92" strokeWidth="2" className="stroke-neural" />
        <text x="240" y="50" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">amino acid</text>
        <text x="240" y="72" fontSize="0" className="fill-muted-foreground"> </text>
        <rect x="216" y="92" width="48" height="26" rx="6" className="fill-emergency-soft stroke-emergency" strokeWidth="1.5" />
        <text x="240" y="109" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-emergency">3′-ACC</text>
        <text x="240" y="134" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">amino acid attachment site (3′ CCA end)</text>
        <text x="240" y="146" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">“CCA Can Carry Amino acids” · covalent bond at 3′ end</text>

        {/* D-arm (left) */}
        <path d="M 232 158 C 180 168, 150 190, 148 224 C 146 252, 168 272, 196 274" fill="none" strokeWidth="2" className="stroke-neural" />
        <ellipse cx="168" cy="226" rx="34" ry="40" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
        <text x="168" y="222" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-brand">D</text>
        <text x="168" y="238" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">D-arm</text>
        <text x="118" y="292" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">Dihydrouridine</text>
        <text x="118" y="304" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">D-arm = Detection by the</text>
        <text x="118" y="315" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">correct aminoacyl-tRNA synthetase</text>

        {/* anticodon arm (bottom) */}
        <path d="M 196 274 C 210 300, 220 320, 228 346 M 252 346 C 260 320, 270 300, 284 274" fill="none" strokeWidth="2" className="stroke-neural" />
        <ellipse cx="240" cy="376" rx="52" ry="42" className="fill-neural-soft stroke-neural" strokeWidth="1.5" />
        <text x="240" y="366" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">anticodon loop</text>
        <text x="240" y="382" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-foreground">5′-CAU-3′</text>
        <text x="240" y="398" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">pairs mRNA 5′-AUG-3′ (antiparallel)</text>
        <circle cx="194" cy="360" r="10" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="194" y="363" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-warning">W</text>
        <text x="150" y="428" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-warning">W = wobble position</text>
        <text x="150" y="439" textAnchor="middle" fontSize="7" className="fill-muted-foreground">3rd nucleotide can vary — first 2 essential</text>

        {/* variable arm (right) */}
        <path d="M 284 274 C 310 290, 320 308, 316 330" fill="none" strokeWidth="2" className="stroke-neural" />
        <text x="342" y="304" fontSize="8" fontWeight="700" className="fill-foreground">variable arm</text>
        <text x="342" y="315" fontSize="7.5" className="fill-muted-foreground">size varies by tRNA</text>

        {/* T-arm (right top) */}
        <path d="M 248 158 C 300 168, 330 190, 332 224 C 334 252, 312 272, 284 274" fill="none" strokeWidth="2" className="stroke-neural" />
        <ellipse cx="312" cy="226" rx="34" ry="40" className="fill-warning-soft stroke-warning" strokeWidth="1.5" />
        <text x="312" y="218" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">TΨC</text>
        <text x="312" y="232" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">T-arm</text>
        <text x="362" y="292" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">ribothymidine ·</text>
        <text x="362" y="303" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">pseudouridine · cytidine</text>
        <text x="362" y="315" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">T-arm Tethers tRNA to the ribosome</text>

        {/* opposite-arm note */}
        <text x="240" y="470" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">anticodon end is OPPOSITE the 3′ aminoacyl end</text>
        <text x="240" y="483" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">high percentage of chemically modified bases · 2° structure · both euk + prok</text>
      </g>

      {/* ============================ CHARGING PANEL ============================ */}
      <g>
        <rect x="470" y="60" width="484" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="490" y="88" fontSize="11" fontWeight="800" className="fill-foreground">Charging (aminoacylation)</text>
        {/* inputs */}
        <rect x="490" y="104" width="104" height="34" rx="8" className="fill-emergency-soft stroke-emergency" strokeWidth="1.4" />
        <text x="542" y="125" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">Amino acid</text>
        <text x="542" y="158" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">+ its cognate tRNA</text>
        <rect x="620" y="104" width="88" height="34" rx="8" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="664" y="125" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">ATP</text>
        <path d="M 708 121 C 736 121, 736 138, 760 138" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M768 138 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        {/* synthetase */}
        <ellipse cx="806" cy="138" rx="56" ry="26" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
        <text x="806" y="134" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">aminoacyl-tRNA</text>
        <text x="806" y="146" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">synthetase</text>
        <text x="806" y="180" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">1 unique enzyme per amino acid · uses ATP</text>
        {/* products */}
        <rect x="726" y="196" width="106" height="34" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="779" y="217" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">aminoacyl-tRNA</text>
        <text x="842" y="208" fontSize="8" className="fill-muted-foreground">→ AMP + PPi</text>
        <text x="842" y="222" fontSize="7.5" className="fill-muted-foreground">(ATP → AMP, 2 high-energy</text>
        <text x="842" y="233" fontSize="7.5" className="fill-muted-foreground"> bonds spent per aa)</text>
        <text x="490" y="196" fontSize="7.5" className="fill-muted-foreground">Scrutinizes the amino acid before AND after binding —</text>
        <text x="490" y="208" fontSize="7.5" fontWeight="700" className="fill-foreground">wrong attachment? the bond is hydrolyzed (editing)</text>
        <text x="490" y="228" fontSize="7.5" fontWeight="700" className="fill-emergency">A mischarged tRNA reads the USUAL codon but inserts</text>
        <text x="490" y="240" fontSize="7.5" fontWeight="700" className="fill-emergency">the WRONG amino acid — synthetase = the fidelity gate</text>
      </g>

      {/* ============================ PAIRING PANEL ============================ */}
      <g>
        <rect x="470" y="284" width="484" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="490" y="312" fontSize="11" fontWeight="800" className="fill-foreground">Pairing — antiparallel, read 5′→3′ on each strand</text>

        {/* mRNA codon */}
        <g>
          <rect x="556" y="332" width="40" height="40" rx="7" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <text x="576" y="358" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-neural">A</text>
          <rect x="600" y="332" width="40" height="40" rx="7" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <text x="620" y="358" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-neural">U</text>
          <rect x="644" y="332" width="40" height="40" rx="7" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <text x="664" y="358" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-neural">G</text>
          <text x="536" y="358" textAnchor="end" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
          <text x="696" y="358" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
          <text x="620" y="326" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-neural">mRNA codon (AUG = start / methionine)</text>
        </g>
        {/* hydrogen bonds */}
        <line x1="576" y1="376" x2="576" y2="404" strokeWidth="1.4" className="stroke-muted-foreground" />
        <line x1="572" y1="386" x2="580" y2="386" strokeWidth="1.2" className="stroke-muted-foreground/70" />
        <line x1="572" y1="394" x2="580" y2="394" strokeWidth="1.2" className="stroke-muted-foreground/70" />
        <line x1="620" y1="376" x2="620" y2="404" strokeWidth="1.4" className="stroke-muted-foreground" />
        <line x1="616" y1="386" x2="624" y2="386" strokeWidth="1.2" className="stroke-muted-foreground/70" />
        <line x1="616" y1="394" x2="624" y2="394" strokeWidth="1.2" className="stroke-muted-foreground/70" />
        <line x1="664" y1="376" x2="664" y2="404" strokeWidth="1.4" className="stroke-muted-foreground" />
        <line x1="660" y1="386" x2="668" y2="386" strokeWidth="1.2" className="stroke-muted-foreground/70" />
        <line x1="660" y1="394" x2="668" y2="394" strokeWidth="1.2" className="stroke-muted-foreground/70" />

        {/* tRNA anticodon (antiparallel) */}
        <g>
          <rect x="556" y="408" width="40" height="40" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="576" y="434" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-warning">U</text>
          <rect x="600" y="408" width="40" height="40" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="620" y="434" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-warning">A</text>
          <rect x="644" y="408" width="40" height="40" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="664" y="434" textAnchor="middle" fontSize="13" fontWeight="800" className="fill-warning">C</text>
          <text x="536" y="434" textAnchor="end" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
          <text x="696" y="434" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
          <text x="620" y="466" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-warning">tRNA anticodon 3′-UAC-5′ (written 5′-CAU-3′)</text>
        </g>
        {/* wobble chips */}
        <rect x="726" y="332" width="204" height="116" rx="10" className="fill-warning-soft/60 stroke-warning/60" strokeWidth="1.2" />
        <text x="744" y="356" fontSize="8.5" fontWeight="800" className="fill-foreground">Wobble hypothesis</text>
        <text x="744" y="374" fontSize="7.5" className="fill-muted-foreground">First 2 nucleotides of the codon are</text>
        <text x="744" y="385" fontSize="7.5" className="fill-muted-foreground">essential for recognition; the 3rd can vary.</text>
        <text x="744" y="404" fontSize="7.5" fontWeight="700" className="fill-foreground">That is why the code is degenerate:</text>
        <text x="744" y="415" fontSize="7.5" fontWeight="700" className="fill-foreground">Met (AUG) and Trp (UGG) are the only</text>
        <text x="744" y="426" fontSize="7.5" fontWeight="700" className="fill-foreground">single-codon amino acids.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Translation — initiation, elongation, termination on the ribosome
// ---------------------------------------------------------------------------

export function TranslationRibosomeStages() {
  const w = 980;
  const h = 600;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Protein synthesis on the ribosome: initiation with initiator tRNA at the P site, elongation cycle through A, P and E sites with peptide bond formation and translocation, and termination when a release factor recognizes the stop codon" className="min-w-[940px]">
      {/* ============================ INITIATION ============================ */}
      <g>
        <rect x="26" y="30" width="292" height="252" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="44" y="56" fontSize="10.5" fontWeight="800" className="fill-foreground">① Initiation</text>
        <text x="44" y="71" fontSize="7.5" className="fill-muted-foreground">eukaryotes: eIFs identify the 5′ cap</text>

        {/* small subunit */}
        <rect x="64" y="150" width="196" height="30" rx="12" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
        <text x="162" y="170" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">40S (30S in prok)</text>
        {/* large subunit outline (assembling) */}
        <rect x="52" y="98" width="220" height="46" rx="14" strokeDasharray="6 4" className="fill-card stroke-brand/70" strokeWidth="1.5" />
        <text x="162" y="126" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand/80">60S (50S in prok)</text>
        <text x="162" y="92" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">assembles with the complex — eIFs released · GTP</text>

        {/* initiator tRNA in P site */}
        <line x1="126" y1="98" x2="126" y2="180" strokeWidth="2" className="stroke-warning" />
        <rect x="98" y="182" width="56" height="24" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="126" y="198" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">tRNA-Met</text>
        <text x="126" y="222" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">P SITE</text>
        <text x="126" y="233" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">initiator binds P</text>

        {/* mRNA */}
        <text x="70" y="262" fontSize="9" fontWeight="800" className="fill-foreground">5′ AUG … 3′</text>
        <text x="252" y="262" textAnchor="end" fontSize="7.5" className="fill-muted-foreground">Kozak (euk) ·</text>
        <text x="252" y="272" textAnchor="end" fontSize="7.5" className="fill-muted-foreground">Shine-Dalgarno (prok)</text>
      </g>

      {/* ============================ ELONGATION ============================ */}
      <g>
        <rect x="344" y="30" width="292" height="252" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="362" y="56" fontSize="10.5" fontWeight="800" className="fill-foreground">② Elongation — going APE</text>
        <text x="362" y="71" fontSize="7.5" className="fill-muted-foreground">ribosome moves left → right along mRNA</text>

        {/* large subunit */}
        <rect x="368" y="92" width="240" height="44" rx="14" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
        <text x="488" y="118" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">60S / 50S — peptidyl transferase (rRNA ribozyme)</text>
        {/* small subunit */}
        <rect x="368" y="196" width="240" height="30" rx="12" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
        <text x="488" y="215" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">40S / 30S</text>

        {/* site labels */}
        <text x="404" y="184" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emergency">E</text>
        <text x="488" y="184" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">P</text>
        <text x="572" y="184" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">A</text>

        {/* E site: empty tRNA exiting */}
        <line x1="404" y1="136" x2="404" y2="176" strokeWidth="2" className="stroke-muted-foreground/70" />
        <rect x="382" y="140" width="44" height="22" rx="7" className="fill-card stroke-muted-foreground" strokeWidth="1.2" />
        <text x="404" y="155" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-muted-foreground">tRNA</text>

        {/* P site: peptidyl tRNA with chain M-H */}
        <line x1="488" y1="136" x2="488" y2="176" strokeWidth="2" className="stroke-warning" />
        <rect x="466" y="140" width="44" height="22" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <circle cx="478" cy="132" r="8" className="fill-emergency stroke-emergency/60" strokeWidth="1" />
        <circle cx="496" cy="126" r="8" className="fill-emergency stroke-emergency/60" strokeWidth="1" />
        <text x="478" y="135" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-primary-foreground">M</text>
        <text x="496" y="129" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-primary-foreground">H</text>

        {/* A site: incoming aminoacyl-tRNA (anticodon GUA pairing CAU) */}
        <line x1="572" y1="136" x2="572" y2="176" strokeWidth="2" className="stroke-neural" />
        <rect x="550" y="140" width="44" height="22" rx="7" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
        <circle cx="572" cy="126" r="8" className="fill-emergency stroke-emergency/60" strokeWidth="1" />
        <text x="572" y="129" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-primary-foreground">H</text>

        {/* mRNA codons */}
        <text x="488" y="252" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">5′ AUG CAU GAU UGA 3′</text>
        <text x="488" y="270" textAnchor="middle" fontSize="7" className="fill-muted-foreground">aminoacyl-tRNA enters A (GTP + elongation factor) · rRNA makes the peptide bond</text>
      </g>

      {/* ============================ TERMINATION ============================ */}
      <g>
        <rect x="662" y="30" width="292" height="252" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="680" y="56" fontSize="10.5" fontWeight="800" className="fill-foreground">③ Termination</text>
        <text x="680" y="71" fontSize="7.5" className="fill-muted-foreground">no tRNA reads a stop codon</text>

        {/* dissociating subunits */}
        <rect x="686" y="88" width="110" height="40" rx="13" className="fill-brand-soft stroke-brand" strokeWidth="1.5" transform="rotate(-8 741 108)" />
        <text x="741" y="112" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand" transform="rotate(-8 741 108)">60S / 50S</text>
        <rect x="816" y="96" width="110" height="40" rx="13" className="fill-brand-soft stroke-brand" strokeWidth="1.5" transform="rotate(8 871 116)" />
        <text x="871" y="120" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand" transform="rotate(8 871 116)">40S / 30S</text>

        {/* release factor at A site over stop codon */}
        <ellipse cx="800" cy="176" rx="42" ry="20" className="fill-emergency-soft stroke-emergency" strokeWidth="1.5" />
        <text x="800" y="180" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emergency">eRF (GTP)</text>
        <text x="800" y="158" textAnchor="middle" fontSize="7" className="fill-muted-foreground">release factor recognizes the stop</text>

        {/* released polypeptide */}
        <path d="M 700 226 l 14 -10 14 10 14 -10 14 10 14 -10 14 10 14 -10 14 10 14 -10 14 10" fill="none" strokeWidth="3" className="stroke-neural" />
        <text x="840" y="230" fontSize="7.5" fontWeight="700" className="fill-neural">M-H-…</text>
        <text x="770" y="252" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">completed polypeptide released — N-terminus was made first</text>

        {/* mRNA */}
        <text x="770" y="272" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">… UGA · UAA · UAG</text>
      </g>

      {/* ============================ ENERGY + RULES STRIP ============================ */}
      <g>
        <rect x="26" y="306" width="928" height="130" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="44" y="332" fontSize="10" fontWeight="800" className="fill-foreground">Energy bookkeeping — ATP vs GTP</text>
        <text x="44" y="352" fontSize="8.5" fontWeight="700" className="fill-neural">ATP — tRNA Activation (charging): aa + tRNA + ATP → aminoacyl-tRNA + AMP + PPi</text>
        <text x="44" y="368" fontSize="8.5" fontWeight="700" className="fill-brand">GTP — tRNA Gripping and Going places: initiation, aminoacyl-tRNA entry, translocation, termination</text>
        <text x="44" y="392" fontSize="10" fontWeight="800" className="fill-foreground">Subunit arithmetic</text>
        <text x="44" y="410" fontSize="8.5" fontWeight="700" className="fill-neural">Eukaryotes: 40S + 60S → 80S (even)</text>
        <text x="440" y="410" fontSize="8.5" fontWeight="700" className="fill-brand">Prokaryotes: 30S + 50S → 70S (prime)</text>
        <text x="44" y="428" fontSize="8" className="fill-muted-foreground">Elongation factors are toxin targets — diphtheria toxin and Pseudomonas (exotoxin A) ADP-ribosylate eEF-2</text>
      </g>

      {/* ============================ APE MNEMONIC ============================ */}
      <g>
        <rect x="26" y="456" width="298" height="118" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="44" y="482" fontSize="10" fontWeight="800" className="fill-foreground">“going APE”</text>
        <text x="44" y="504" fontSize="9" fontWeight="700" className="fill-foreground">A — incoming Aminoacyl-tRNA</text>
        <text x="44" y="522" fontSize="9" fontWeight="700" className="fill-foreground">P — accommodates the growing Peptide</text>
        <text x="44" y="540" fontSize="9" fontWeight="700" className="fill-foreground">E — holds Empty tRNA as it Exits</text>
        <text x="44" y="562" fontSize="7.5" className="fill-muted-foreground">(order in the drawing: E → P → A as the ribosome walks 3′)</text>
      </g>
      <g>
        <rect x="344" y="456" width="610" height="118" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="362" y="482" fontSize="10" fontWeight="800" className="fill-foreground">Start & stop codons</text>
        <text x="362" y="504" fontSize="9" fontWeight="700" className="fill-brand">AUG — “AUG inAUGurates protein synthesis” — Met (euk) · N-formylmethionine (prok, stimulates neutrophil chemotaxis)</text>
        <text x="362" y="526" fontSize="9" fontWeight="700" className="fill-emergency">UGA = U Go Away · UAA = U Are Away · UAG = U Are Gone — recognized by release factors</text>
        <text x="362" y="550" fontSize="8" className="fill-muted-foreground">Shine-Dalgarno (prok): ribosomal binding site recognized by 16S rRNA — aligns the ribosome with the start codon.</text>
        <text x="362" y="566" fontSize="8" className="fill-muted-foreground">Chain grows N-terminus → C-terminus; synthesis from N-term to C-term is tested by labeling experiments.</text>
      </g>
    </svg>
  );
}
