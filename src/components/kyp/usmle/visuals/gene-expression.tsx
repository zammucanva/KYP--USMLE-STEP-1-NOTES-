"use client";

// Original KYP visuals — Gene expression: lac operon, eukaryotic gene
// organization, RNA processing (First Aid 2026, Part 1 pdf 61–63 / book
// 39–41). All SVGs use theme tokens (currentColor + Tailwind classes) so
// they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// Lac operon — anatomy + regulatory cascade + four states
// ---------------------------------------------------------------------------

export function LacOperonStates() {
  const w = 980;
  const h = 620;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Lac operon regulation: operon anatomy, CAP-cAMP cascade, and the four glucose-lactose expression states" className="min-w-[940px]">
      {/* ============================ REGULATORY CASCADE ============================ */}
      <g>
        <text x="30" y="34" fontSize="11.5" fontWeight="800" className="fill-foreground">Two signals converge on one operon</text>

        {/* glucose ⊣ adenylate cyclase */}
        <rect x="30" y="52" width="96" height="34" rx="9" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="78" y="73" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">Glucose</text>
        <line x1="126" y1="69" x2="176" y2="69" strokeWidth="2" className="stroke-emergency" />
        <line x1="176" y1="60" x2="176" y2="78" strokeWidth="2" className="stroke-emergency" />
        <text x="151" y="54" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-emergency">⊣</text>
        <rect x="184" y="52" width="150" height="34" rx="9" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="259" y="73" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">Adenylate cyclase</text>
        <text x="259" y="100" textAnchor="middle" fontSize="8" className="fill-muted-foreground">low glucose → enzyme ON · high glucose → enzyme OFF</text>

        {/* ATP → cAMP */}
        <rect x="30" y="118" width="76" height="30" rx="8" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="68" y="137" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">ATP</text>
        <line x1="106" y1="133" x2="146" y2="133" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M154 133 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <rect x="158" y="118" width="76" height="30" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="196" y="137" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">cAMP</text>
        <line x1="234" y1="133" x2="274" y2="133" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="254" y="125" textAnchor="middle" fontSize="8" className="fill-muted-foreground">binds</text>
        <path d="M282 133 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <rect x="286" y="118" width="76" height="30" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
        <text x="324" y="137" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-neural">CAP</text>
        <text x="196" y="166" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-neural">CAP–cAMP binds the CAP site → induces transcription</text>

        {/* allolactose ⊣ repressor */}
        <rect x="430" y="52" width="118" height="34" rx="9" className="fill-secondary stroke-muted-foreground" strokeWidth="1.4" />
        <text x="489" y="73" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">Allolactose</text>
        <text x="489" y="100" textAnchor="middle" fontSize="8" className="fill-muted-foreground">inducer — made from lactose</text>
        <line x1="548" y1="69" x2="598" y2="69" strokeWidth="2" className="stroke-emergency" />
        <line x1="598" y1="60" x2="598" y2="78" strokeWidth="2" className="stroke-emergency" />
        <text x="573" y="54" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-emergency">inactivates</text>
        <rect x="606" y="52" width="140" height="34" rx="9" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="676" y="73" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">Repressor protein</text>
        <text x="676" y="100" textAnchor="middle" fontSize="8" className="fill-muted-foreground">active form binds the operator and blocks transcription</text>
        <text x="676" y="166" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-emergency">allolactose ⊣ repressor → operator free</text>
      </g>

      {/* ============================ OPERON ANATOMY ============================ */}
      <g>
        <text x="30" y="212" fontSize="11.5" fontWeight="800" className="fill-foreground">Operon anatomy (E coli)</text>
        {/* lacI */}
        <rect x="30" y="228" width="66" height="40" rx="7" className="fill-secondary stroke-muted-foreground" strokeWidth="1.4" />
        <text x="63" y="252" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">lacI</text>
        <text x="63" y="284" textAnchor="middle" fontSize="8" className="fill-muted-foreground">repressor gene</text>
        {/* CAP site */}
        <rect x="110" y="228" width="72" height="40" rx="7" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
        <text x="146" y="250" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-neural">CAP site</text>
        <text x="146" y="262" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">activator dock</text>
        {/* promoter */}
        <rect x="196" y="228" width="82" height="40" rx="7" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="237" y="250" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">Promoter</text>
        <text x="237" y="262" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">RNA pol binds</text>
        {/* operator */}
        <rect x="292" y="228" width="76" height="40" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="330" y="250" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">Operator</text>
        <text x="330" y="262" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">repressor dock</text>
        {/* structural genes */}
        <rect x="382" y="228" width="150" height="40" rx="7" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="457" y="252" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">lacZ</text>
        <rect x="540" y="228" width="150" height="40" rx="7" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="615" y="252" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">lacY</text>
        <rect x="698" y="228" width="150" height="40" rx="7" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="773" y="252" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">lacA</text>
        <text x="457" y="284" textAnchor="middle" fontSize="8" className="fill-muted-foreground">β-galactosidase</text>
        <text x="615" y="284" textAnchor="middle" fontSize="8" className="fill-muted-foreground">permease</text>
        <text x="773" y="284" textAnchor="middle" fontSize="8" className="fill-muted-foreground">transacetylase</text>
        {/* RNA polymerase */}
        <ellipse cx="237" cy="204" rx="40" ry="13" className="fill-emergency-soft stroke-emergency" strokeWidth="1.4" />
        <text x="237" y="208" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">RNA pol</text>
        <text x="875" y="252" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">→ transcription</text>
        <text x="875" y="266" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">of the three</text>
        <text x="875" y="280" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">lac genes</text>
      </g>

      {/* ============================ FOUR STATES ============================ */}
      <g>
        <text x="30" y="330" fontSize="11.5" fontWeight="800" className="fill-foreground">The four states — a glucose × lactose truth table</text>

        {/* State 1: low glucose + lactose → MAX */}
        <g>
          <rect x="30" y="348" width="452" height="116" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
          <text x="48" y="372" fontSize="10" fontWeight="800" className="fill-foreground">Low glucose + lactose available</text>
          <text x="48" y="392" fontSize="8.5" className="fill-foreground/85">CAP–cAMP bound at CAP site (adenylate cyclase ON)</text>
          <text x="48" y="406" fontSize="8.5" className="fill-foreground/85">repressor inactivated by allolactose — operator free</text>
          <text x="48" y="434" fontSize="10.5" fontWeight="800" className="fill-brand">Lac genes STRONGLY expressed</text>
          <text x="48" y="450" fontSize="8" className="fill-muted-foreground">both switches ON: activator recruited + block removed</text>
        </g>
        {/* State 2: high glucose + no lactose → off (repressor) */}
        <g>
          <rect x="498" y="348" width="452" height="116" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
          <text x="516" y="372" fontSize="10" fontWeight="800" className="fill-foreground">High glucose + lactose unavailable</text>
          <text x="516" y="392" fontSize="8.5" className="fill-foreground/80">no cAMP → no CAP recruitment</text>
          <text x="516" y="406" fontSize="8.5" className="fill-foreground/80">repressor bound to operator — polymerase blocked</text>
          <text x="516" y="434" fontSize="10.5" fontWeight="800" className="fill-emergency">Lac genes NOT expressed</text>
          <text x="516" y="450" fontSize="8" className="fill-muted-foreground">both switches OFF</text>
        </g>
        {/* State 3: low glucose + no lactose → off (repressor despite CAP) */}
        <g>
          <rect x="30" y="482" width="452" height="116" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
          <text x="48" y="506" fontSize="10" fontWeight="800" className="fill-foreground">Low glucose + lactose unavailable</text>
          <text x="48" y="526" fontSize="8.5" className="fill-foreground/80">CAP–cAMP bound — but no inducer to free the operator</text>
          <text x="48" y="540" fontSize="8.5" className="fill-foreground/80">repressor still blocks RNA polymerase</text>
          <text x="48" y="568" fontSize="10.5" fontWeight="800" className="fill-emergency">Lac genes NOT expressed</text>
          <text x="48" y="584" fontSize="8" className="fill-muted-foreground">repressor is dominant over CAP</text>
        </g>
        {/* State 4: high glucose + lactose → basal */}
        <g>
          <rect x="498" y="482" width="452" height="116" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.5" />
          <text x="516" y="506" fontSize="10" fontWeight="800" className="fill-foreground">High glucose + lactose available</text>
          <text x="516" y="526" fontSize="8.5" className="fill-foreground/80">allolactose frees the operator — polymerase CAN start</text>
          <text x="516" y="540" fontSize="8.5" className="fill-foreground/80">but no CAP–cAMP boost (adenylate cyclase OFF)</text>
          <text x="516" y="568" fontSize="10.5" fontWeight="800" className="fill-warning">Very low (basal) expression</text>
          <text x="516" y="584" fontSize="8" className="fill-muted-foreground">block removed, accelerator missing</text>
        </g>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Functional anatomy of a eukaryotic gene → mRNA → protein
// ---------------------------------------------------------------------------

export function EukaryoticGeneAnatomy() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Functional organization of a eukaryotic gene: enhancer, silencer, promoter with CAAT and TATA boxes, exons and introns, polyadenylation signal, and the DNA to pre-mRNA to mature mRNA to protein flow" className="min-w-[940px]">
      {/* ============================ DNA STRIP ============================ */}
      <g>
        <text x="30" y="36" fontSize="11.5" fontWeight="800" className="fill-foreground">DNA (coding strand) — the gene</text>
        <text x="950" y="36" textAnchor="end" fontSize="9" fontWeight="700" className="fill-brand">5′ → 3′</text>

        {/* enhancer / silencer */}
        <rect x="30" y="58" width="108" height="40" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
        <text x="84" y="76" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">Enhancer /</text>
        <text x="84" y="88" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">Silencer</text>
        <text x="84" y="116" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">activators ↑ / repressors ↓</text>
        <text x="84" y="127" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">close, far, or inside an intron</text>

        {/* promoter: CAAT + TATA */}
        <rect x="152" y="58" width="66" height="40" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="185" y="82" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">CAAT</text>
        <rect x="226" y="58" width="66" height="40" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="259" y="82" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">TATAAA</text>
        <text x="222" y="116" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">PROMOTER — RNA pol II + transcription factors bind</text>
        <text x="222" y="127" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">AT-rich upstream (TATA + CAAT boxes)</text>

        {/* transcription start */}
        <line x1="312" y1="78" x2="336" y2="78" strokeWidth="1.6" className="stroke-warning" />
        <path d="M344 78 l-9 -4.5 v9 z" className="fill-warning" />
        <text x="328" y="60" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-warning">transcription start</text>

        {/* 5' UTR */}
        <rect x="352" y="58" width="66" height="40" rx="6" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="385" y="82" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">5′ UTR</text>
        {/* exon 1 */}
        <rect x="426" y="58" width="94" height="40" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="473" y="82" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">Exon 1</text>
        {/* intron 1 */}
        <rect x="526" y="66" width="86" height="24" rx="5" className="fill-muted stroke-muted-foreground" strokeWidth="1.2" />
        <text x="569" y="82" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">GT … AG</text>
        <text x="569" y="116" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">intron — begins GU, ends AG</text>
        {/* exon 2 */}
        <rect x="618" y="58" width="94" height="40" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="665" y="82" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">Exon 2</text>
        {/* intron 2 */}
        <rect x="718" y="66" width="72" height="24" rx="5" className="fill-muted stroke-muted-foreground" strokeWidth="1.2" />
        <text x="754" y="82" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">GT … AG</text>
        {/* exon 3 + 3' UTR + poly-A signal */}
        <rect x="796" y="58" width="74" height="40" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="833" y="82" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">Exon 3</text>
        <rect x="876" y="58" width="64" height="40" rx="6" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="908" y="76" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">3′ UTR</text>
        <text x="908" y="89" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-warning">AATAAA</text>
        <text x="908" y="116" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">polyadenylation</text>
        <text x="908" y="127" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">signal</text>
        {/* open reading frame bracket */}
        <path d="M 426 142 L 426 134 L 870 134 L 870 142" fill="none" strokeWidth="1.2" className="stroke-muted-foreground" />
        <text x="648" y="152" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-muted-foreground">open reading frame (exons 1–3 protein-coding sequence)</text>
      </g>

      {/* ============================ PRE-mRNA ============================ */}
      <g>
        <text x="30" y="196" fontSize="11.5" fontWeight="800" className="fill-foreground">Transcription → pre-mRNA (hnRNA)</text>
        <path d="M 480 158 L 480 184" fill="none" strokeWidth="1.4" strokeDasharray="4 3" className="stroke-muted-foreground" />
        <path d="M480 192 l-4.5 -9 h9 z" className="fill-muted-foreground" />
        {/* pre-mRNA strip */}
        <text x="66" y="238" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
        <rect x="84" y="222" width="70" height="28" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="119" y="240" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">GU</text>
        <rect x="160" y="222" width="80" height="28" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="200" y="240" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Exon 1</text>
        <rect x="246" y="222" width="70" height="28" rx="6" className="fill-muted stroke-muted-foreground" strokeWidth="1.2" />
        <text x="281" y="240" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">AG · GU</text>
        <rect x="322" y="222" width="80" height="28" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="362" y="240" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Exon 2</text>
        <rect x="408" y="222" width="70" height="28" rx="6" className="fill-muted stroke-muted-foreground" strokeWidth="1.2" />
        <text x="443" y="240" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">AG · GU</text>
        <rect x="484" y="222" width="80" height="28" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="524" y="240" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Exon 3</text>
        <rect x="570" y="222" width="64" height="28" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="602" y="240" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">AG · AAUAAA</text>
        <text x="646" y="238" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
        <text x="760" y="234" fontSize="8.5" className="fill-muted-foreground">introns still in — GU…AG marks every</text>
        <text x="760" y="246" fontSize="8.5" className="fill-muted-foreground">splice boundary of the hnRNA</text>
      </g>

      {/* ============================ MATURE mRNA ============================ */}
      <g>
        <text x="30" y="300" fontSize="11.5" fontWeight="800" className="fill-foreground">Splicing + capping + polyadenylation → mature mRNA</text>
        <path d="M 480 256 L 480 288" fill="none" strokeWidth="1.4" strokeDasharray="4 3" className="stroke-muted-foreground" />
        <path d="M480 296 l-4.5 -9 h9 z" className="fill-muted-foreground" />
        <text x="60" y="346" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
        {/* cap */}
        <circle cx="92" cy="340" r="16" className="fill-emergency-soft stroke-emergency" strokeWidth="1.6" />
        <text x="92" y="337" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">Gppp</text>
        <text x="92" y="347" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">7-mG</text>
        <text x="92" y="374" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">5′ cap —</text>
        <text x="92" y="384" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">cotranscriptional</text>
        {/* UTR + coding */}
        <rect x="118" y="326" width="70" height="28" rx="6" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="153" y="344" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">5′ UTR</text>
        <rect x="194" y="326" width="240" height="28" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="314" y="340" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">AUG … protein coding region … STOP</text>
        <text x="314" y="352" textAnchor="middle" fontSize="7" className="fill-foreground/80">exons ligated — introns gone</text>
        <rect x="440" y="326" width="70" height="28" rx="6" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="475" y="344" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">3′ UTR</text>
        {/* poly-A tail */}
        <text x="520" y="346" fontSize="8.5" fontWeight="700" className="fill-warning">AAUAAA</text>
        <text x="582" y="346" fontSize="9.5" fontWeight="800" className="fill-warning">AAAAAAA…</text>
        <text x="620" y="374" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">poly-A tail (~200 A’s) —</text>
        <text x="620" y="384" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">posttranscriptional, no template needed</text>
        <text x="790" y="344" fontSize="8.5" className="fill-muted-foreground">Kozak sequence around AUG helps the</text>
        <text x="790" y="356" fontSize="8.5" className="fill-muted-foreground">small ribosomal subunit bind (eukaryotes)</text>
      </g>

      {/* ============================ TRANSLATION → PROTEIN ============================ */}
      <g>
        <text x="30" y="430" fontSize="11.5" fontWeight="800" className="fill-foreground">Translation → protein</text>
        <path d="M 480 400 L 480 438" fill="none" strokeWidth="1.4" strokeDasharray="4 3" className="stroke-muted-foreground" />
        <path d="M480 446 l-4.5 -9 h9 z" className="fill-muted-foreground" />
        {/* protein coil */}
        <path d="M 430 470 C 448 446, 466 446, 484 470 C 502 494, 520 494, 538 470" fill="none" strokeWidth="4" className="stroke-neural" />
        <path d="M 430 496 C 448 472, 466 472, 484 496 C 502 520, 520 520, 538 496" fill="none" strokeWidth="4" className="stroke-brand" />
        <text x="484" y="542" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">N-terminus → C-terminus</text>
      </g>

      {/* ============================ REGULATION CHIPS ============================ */}
      <g>
        <rect x="26" y="418" width="380" height="120" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="44" y="442" fontSize="9.5" fontWeight="800" className="fill-foreground">Promoter</text>
        <text x="44" y="460" fontSize="8.5" className="fill-muted-foreground">RNA pol II + transcription factors bind upstream;</text>
        <text x="44" y="473" fontSize="8.5" className="fill-muted-foreground">increases initiation of transcription.</text>
        <text x="44" y="489" fontSize="8.5" fontWeight="700" className="fill-emergency">Promoter mutation → dramatic ↓ transcription</text>
        <text x="44" y="510" fontSize="9.5" fontWeight="800" className="fill-foreground">Epigenetics</text>
        <text x="44" y="526" fontSize="8.5" className="fill-muted-foreground">heritable expression change without DNA sequence change —</text>
        <text x="44" y="538" fontSize="8.5" className="fill-muted-foreground">DNA methylation, histone modification, noncoding RNA</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Mature mRNA anatomy — cap, UTRs, coding region, poly-A tail
// ---------------------------------------------------------------------------

export function MrnaMaturationAnatomy() {
  const w = 980;
  const h = 400;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Anatomy of a mature mRNA: 5-prime 7-methylguanosine cap, 5 UTR, AUG start codon, coding region with exons, stop codon, 3 UTR, AAUAAA polyadenylation signal and poly-A tail" className="min-w-[940px]">
      {/* main mRNA line */}
      <text x="40" y="76" fontSize="10" fontWeight="800" className="fill-foreground">5′</text>
      <text x="40" y="96" fontSize="7.5" className="fill-muted-foreground">HO—</text>

      {/* 5' cap */}
      <g>
        <rect x="70" y="48" width="96" height="56" rx="12" className="fill-emergency-soft stroke-emergency" strokeWidth="1.6" />
        <text x="118" y="72" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">5′ CAP</text>
        <text x="118" y="86" textAnchor="middle" fontSize="7.5" className="fill-foreground/85">7-methylguanosine</text>
        <text x="118" y="97" textAnchor="middle" fontSize="7" className="fill-muted-foreground">(Gppp — cotranscriptional)</text>
      </g>

      {/* 5' UTR */}
      <rect x="174" y="62" width="108" height="28" rx="6" className="fill-card stroke-border" strokeWidth="1.4" />
      <text x="228" y="80" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">5′ UTR</text>

      {/* start AUG */}
      <rect x="290" y="56" width="64" height="40" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
      <text x="322" y="80" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-brand">AUG</text>

      {/* coding region */}
      <rect x="362" y="62" width="330" height="28" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
      <text x="527" y="80" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">PROTEIN CODING REGION — ligated exons</text>
      <text x="527" y="108" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">Kozak consensus around the AUG is the eukaryotic initiation site</text>

      {/* stop */}
      <rect x="702" y="56" width="64" height="40" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.6" />
      <text x="734" y="80" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">STOP</text>

      {/* 3' UTR */}
      <rect x="774" y="62" width="84" height="28" rx="6" className="fill-card stroke-border" strokeWidth="1.4" />
      <text x="816" y="80" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">3′ UTR</text>

      {/* AAUAAA + poly-A */}
      <text x="872" y="76" fontSize="8" fontWeight="800" className="fill-warning">AAUAAA</text>
      <text x="872" y="90" fontSize="9" fontWeight="800" className="fill-warning">AAAA…</text>
      <text x="872" y="108" fontSize="7" className="fill-muted-foreground">poly-A tail (~200 A’s)</text>

      {/* connector line under everything */}
      <line x1="70" y1="132" x2="940" y2="132" strokeWidth="1.2" className="stroke-border" />

      {/* ============================ PROCESS PANELS ============================ */}
      <g>
        <rect x="26" y="152" width="300" height="104" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="44" y="176" fontSize="9.5" fontWeight="800" className="fill-foreground">hnRNA → mRNA — all in the nucleus</text>
        <text x="44" y="196" fontSize="8.5" className="fill-muted-foreground">① 5′ capping — addition of 7-methylguanosine cap</text>
        <text x="44" y="210" fontSize="8.5" className="fill-muted-foreground">② polyadenylation of 3′ end (~200 A’s)</text>
        <text x="44" y="224" fontSize="8.5" className="fill-muted-foreground">③ splicing out of introns</text>
        <text x="44" y="244" fontSize="8.5" fontWeight="700" className="fill-brand">capped + tailed + spliced = mRNA → cytosol for translation</text>
      </g>
      <g>
        <rect x="340" y="152" width="300" height="104" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="358" y="176" fontSize="9.5" fontWeight="800" className="fill-foreground">Quality control & failure modes</text>
        <text x="358" y="196" fontSize="8.5" className="fill-muted-foreground">P-bodies (cytoplasm): exonucleases, decapping enzymes,</text>
        <text x="358" y="210" fontSize="8.5" className="fill-muted-foreground">microRNAs — degrade or store mRNAs</text>
        <text x="358" y="228" fontSize="8.5" fontWeight="700" className="fill-emergency">AAUAAA mutation → early degradation before translation</text>
        <text x="358" y="244" fontSize="8.5" fontWeight="700" className="fill-emergency">Kozak mutation → impaired initiation → ↓ protein synthesis</text>
      </g>
      <g>
        <rect x="654" y="152" width="300" height="104" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="672" y="176" fontSize="9.5" fontWeight="800" className="fill-foreground">Enzyme facts the exam quotes</text>
        <text x="672" y="196" fontSize="8.5" className="fill-muted-foreground">Poly-A polymerase does NOT require a template</text>
        <text x="672" y="212" fontSize="8.5" className="fill-muted-foreground">AAUAAA = polyadenylation signal (DNA: AATAAA)</text>
        <text x="672" y="228" fontSize="8.5" className="fill-muted-foreground">hnRNA = the initial heterogeneous nuclear RNA transcript</text>
        <text x="672" y="244" fontSize="8.5" className="fill-muted-foreground">cap is added while the gene is still being transcribed</text>
      </g>

      {/* intron/exon mnemonic chip */}
      <g>
        <rect x="26" y="278" width="928" height="44" rx="9" className="fill-neural-soft stroke-neural" strokeWidth="1.2" />
        <text x="44" y="297" fontSize="9.5" fontWeight="800" className="fill-neural">Introns stay IN the nucleus · Exons EXit and are EXpressed</text>
        <text x="44" y="312" fontSize="8.5" className="fill-foreground/80">introns don't code protein but regulate expression · exons carry the actual coding information</text>
        <text x="936" y="305" textAnchor="end" fontSize="8.5" fontWeight="700" className="fill-warning">different exon combos → more unique proteins than genes (alternative splicing)</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Alternative splicing — one hnRNA, many isoforms
// ---------------------------------------------------------------------------

const EXON_COLORS = ["fill-brand-soft stroke-brand", "fill-neural-soft stroke-neural", "fill-warning-soft stroke-warning", "fill-emergency-soft stroke-emergency", "fill-secondary stroke-muted-foreground", "fill-card stroke-foreground/70"];

function ExonBox({ x, y, w, n, ci }: { x: number; y: number; w: number; n: number; ci: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="30" rx="6" className={EXON_COLORS[ci]} strokeWidth="1.4" />
      <text x={x + w / 2} y={y + 20} textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">{n}</text>
    </g>
  );
}

export function AlternativeSplicingPaths() {
  const w = 980;
  const h = 470;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Alternative splicing: a single pre-mRNA with six exons spliced in three different exon combinations to yield three mRNAs and three protein isoforms" className="min-w-[940px]">
      {/* ============================ DNA LEVEL ============================ */}
      <g>
        <text x="30" y="34" fontSize="11.5" fontWeight="800" className="fill-foreground">DNA — one gene, six exons</text>
        <text x="46" y="76" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
        <ExonBox x={66} y={50} w={78} n={1} ci={0} />
        <line x1="144" y1="65" x2="166" y2="65" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={166} y={50} w={78} n={2} ci={1} />
        <line x1="244" y1="65" x2="266" y2="65" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={266} y={50} w={78} n={3} ci={2} />
        <line x1="344" y1="65" x2="366" y2="65" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={366} y={50} w={78} n={4} ci={3} />
        <line x1="444" y1="65" x2="466" y2="65" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={466} y={50} w={78} n={5} ci={4} />
        <line x1="544" y1="65" x2="566" y2="65" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={566} y={50} w={78} n={6} ci={5} />
        <text x="656" y="70" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
      </g>

      {/* transcription arrow */}
      <path d="M 330 96 L 330 122" fill="none" strokeWidth="1.5" strokeDasharray="4 3" className="stroke-muted-foreground" />
      <path d="M330 130 l-4.5 -9 h9 z" className="fill-muted-foreground" />
      <text x="348" y="118" fontSize="8.5" className="fill-muted-foreground">transcription — the whole locus is copied</text>

      {/* ============================ hnRNA LEVEL ============================ */}
      <g>
        <text x="30" y="164" fontSize="11.5" fontWeight="800" className="fill-foreground">hnRNA — every exon + every intron</text>
        <text x="46" y="206" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
        <ExonBox x={66} y={180} w={78} n={1} ci={0} />
        <line x1="144" y1="195" x2="166" y2="195" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={166} y={180} w={78} n={2} ci={1} />
        <line x1="244" y1="195" x2="266" y2="195" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={266} y={180} w={78} n={3} ci={2} />
        <line x1="344" y1="195" x2="366" y2="195" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={366} y={180} w={78} n={4} ci={3} />
        <line x1="444" y1="195" x2="466" y2="195" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={466} y={180} w={78} n={5} ci={4} />
        <line x1="544" y1="195" x2="566" y2="195" strokeWidth="1.4" className="stroke-muted-foreground" />
        <ExonBox x={566} y={180} w={78} n={6} ci={5} />
        <text x="656" y="206" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
        <text x="700" y="192" fontSize="8.5" className="fill-muted-foreground">the SAME hnRNA can be spliced</text>
        <text x="700" y="204" fontSize="8.5" className="fill-muted-foreground">in different ways — one gene, many proteins</text>
      </g>

      {/* splicing arrow */}
      <path d="M 330 226 L 330 250" fill="none" strokeWidth="1.5" strokeDasharray="4 3" className="stroke-muted-foreground" />
      <path d="M330 258 l-4.5 -9 h9 z" className="fill-muted-foreground" />
      <text x="348" y="246" fontSize="8.5" fontWeight="700" className="fill-foreground">alternative splicing — pick exons per isoform</text>

      {/* ============================ THREE mRNAs ============================ */}
      <g>
        {/* mRNA A: 1 2 4 5 6 */}
        <text x="46" y="296" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
        <ExonBox x={66} y={280} w={62} n={1} ci={0} />
        <ExonBox x={130} y={280} w={62} n={2} ci={1} />
        <ExonBox x={194} y={280} w={62} n={4} ci={3} />
        <ExonBox x={258} y={280} w={62} n={5} ci={4} />
        <ExonBox x={322} y={280} w={62} n={6} ci={5} />
        <text x="392" y="300" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
        <text x="66" y="272" fontSize="7.5" className="fill-muted-foreground">isoform A — skips exon 3</text>

        {/* mRNA B: 1 3 5 6 */}
        <text x="46" y="341" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
        <ExonBox x={66} y={325} w={62} n={1} ci={0} />
        <ExonBox x={130} y={325} w={62} n={3} ci={2} />
        <ExonBox x={194} y={325} w={62} n={5} ci={4} />
        <ExonBox x={258} y={325} w={62} n={6} ci={5} />
        <text x="328" y="345" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
        <text x="66" y="370" fontSize="7.5" className="fill-muted-foreground">isoform B — skips exons 2 and 4</text>

        {/* mRNA C: 1 3 4 5 6 */}
        <text x="46" y="386" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
        <ExonBox x={66} y={370} w={62} n={1} ci={0} />
        <ExonBox x={130} y={370} w={62} n={3} ci={2} />
        <ExonBox x={194} y={370} w={62} n={4} ci={3} />
        <ExonBox x={258} y={370} w={62} n={5} ci={4} />
        <ExonBox x={322} y={370} w={62} n={6} ci={5} />
        <text x="392" y="390" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
        <text x="66" y="415" fontSize="7.5" className="fill-muted-foreground">isoform C — skips exon 2 only</text>
      </g>

      {/* proteins */}
      <g>
        <path d="M 470 296 L 500 296" strokeWidth="1.4" className="stroke-muted-foreground" />
        <path d="M508 296 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <text x="516" y="292" fontSize="8.5" className="fill-muted-foreground">translation</text>
        {[0, 1, 3, 4, 5].map((ci, i) => (
          <circle key={i} cx={580 + i * 26} cy={296} r="10" className={EXON_COLORS[ci]} strokeWidth="1.4" />
        ))}
        <path d="M 470 341 L 500 341" strokeWidth="1.4" className="stroke-muted-foreground" />
        <path d="M508 341 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        {[0, 2, 4, 5].map((ci, i) => (
          <circle key={i} cx={580 + i * 26} cy={341} r="10" className={EXON_COLORS[ci]} strokeWidth="1.4" />
        ))}
        <path d="M 470 386 L 500 386" strokeWidth="1.4" className="stroke-muted-foreground" />
        <path d="M508 386 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        {[0, 2, 3, 4, 5].map((ci, i) => (
          <circle key={i} cx={580 + i * 26} cy={386} r="10" className={EXON_COLORS[ci]} strokeWidth="1.4" />
        ))}
        <text x="700" y="300" fontSize="8.5" fontWeight="700" className="fill-foreground">protein isoform A</text>
        <text x="700" y="345" fontSize="8.5" fontWeight="700" className="fill-foreground">protein isoform B</text>
        <text x="700" y="390" fontSize="8.5" fontWeight="700" className="fill-foreground">protein isoform C</text>
        <text x="700" y="420" fontSize="8" className="fill-muted-foreground">different exon combos → larger number of unique proteins</text>
      </g>

      {/* examples chip */}
      <g>
        <rect x="26" y="430" width="928" height="30" rx="8" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="449" fontSize="8.5" fontWeight="700" className="fill-foreground">Exam examples: transmembrane vs secreted immunoglobulin · tropomyosin variants in muscle · dopamine receptors in the brain · host-defense evasion by tumor cells</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Spliceosome — snRNP assembly, lariat formation, exon ligation
// ---------------------------------------------------------------------------

export function SpliceosomeLariat() {
  const w = 980;
  const h = 470;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Splicing of pre-mRNA by the spliceosome: U1 and U2 snRNP assembly at the GU donor and branch point, lariat intermediate formation, then exon ligation and lariat release" className="min-w-[940px]">
      {/* ============================ STEP 1: ASSEMBLY ============================ */}
      <g>
        <rect x="26" y="30" width="292" height="240" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="44" y="56" fontSize="10" fontWeight="800" className="fill-foreground">① Spliceosome assembles</text>
        <text x="44" y="72" fontSize="7.5" className="fill-muted-foreground">pre-mRNA + snRNPs + other proteins</text>

        {/* exon 1 */}
        <rect x="44" y="104" width="56" height="30" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="72" y="124" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Exon 1</text>
        {/* intron with GU start */}
        <rect x="104" y="104" width="60" height="30" rx="6" className="fill-muted stroke-muted-foreground" strokeWidth="1.2" />
        <text x="134" y="118" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">GU</text>
        <text x="134" y="130" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">5′ donor</text>
        {/* branch A */}
        <circle cx="178" cy="104" r="14" className="fill-warning-soft stroke-warning" strokeWidth="1.6" />
        <text x="178" y="108" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">A</text>
        <text x="178" y="82" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-warning">branch point</text>
        {/* intron AG end */}
        <rect x="196" y="104" width="44" height="30" rx="6" className="fill-muted stroke-muted-foreground" strokeWidth="1.2" />
        <text x="218" y="118" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">AG</text>
        <text x="218" y="130" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">3′ acceptor</text>
        {/* exon 2 */}
        <rect x="244" y="104" width="56" height="30" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="272" y="124" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Exon 2</text>
        {/* U1 snRNP */}
        <ellipse cx="118" cy="164" rx="34" ry="15" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
        <text x="118" y="168" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">U1 snRNP</text>
        <line x1="126" y1="149" x2="132" y2="138" strokeWidth="1.2" className="stroke-neural/70" />
        <text x="118" y="192" textAnchor="middle" fontSize="7" className="fill-muted-foreground">recognizes the 5′ GU donor</text>
        {/* U2 snRNP */}
        <ellipse cx="228" cy="164" rx="34" ry="15" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
        <text x="228" y="168" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">U2 snRNP</text>
        <line x1="216" y1="149" x2="186" y2="120" strokeWidth="1.2" className="stroke-neural/70" />
        <text x="228" y="192" textAnchor="middle" fontSize="7" className="fill-muted-foreground">docks on the branch point A</text>
        {/* SMN/SMA chip */}
        <text x="44" y="228" fontSize="7.5" className="fill-muted-foreground">snRNPs = snRNA + proteins (eg, Smith [Sm])</text>
        <text x="44" y="244" fontSize="7.5" fontWeight="700" className="fill-emergency">↓ SMN → snRNP assembly fails → spinal muscular atrophy</text>
        <text x="44" y="258" fontSize="7.5" fontWeight="700" className="fill-emergency">anti-U1 snRNP antibodies → SLE / MCTD</text>
      </g>

      {/* ============================ STEP 2: LARIAT ============================ */}
      <g>
        <rect x="344" y="30" width="292" height="240" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="362" y="56" fontSize="10" fontWeight="800" className="fill-foreground">② Cleavage at 5′ site — lariat forms</text>
        <text x="362" y="72" fontSize="7.5" className="fill-muted-foreground">branch A 2′-OH attacks the GU donor</text>

        {/* exon 1 with free 3' OH */}
        <rect x="370" y="104" width="72" height="30" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="406" y="124" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">Exon 1</text>
        <text x="406" y="152" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">free 3′-OH</text>

        {/* lariat loop */}
        <path d="M 442 119 C 480 96, 520 96, 540 122 C 552 138, 520 150, 494 140 C 470 132, 462 116, 480 106"
          fill="none" strokeWidth="2.2" className="stroke-warning" />
        <circle cx="480" cy="106" r="10" className="fill-warning-soft stroke-warning" strokeWidth="1.5" />
        <text x="480" y="110" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">A</text>
        <text x="492" y="88" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-warning">2′–5′ bond — the lariat noose</text>
        <text x="556" y="126" fontSize="8" fontWeight="800" className="fill-foreground">GU</text>
        {/* intron tail to AG */}
        <path d="M 552 132 C 576 146, 584 152, 596 156" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <text x="600" y="160" fontSize="8" fontWeight="800" className="fill-foreground">AG</text>

        {/* exon 2 */}
        <rect x="470" y="176" width="72" height="30" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="506" y="196" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">Exon 2</text>

        <text x="362" y="228" fontSize="7.5" className="fill-muted-foreground">intron folded into a loop — still attached to exon 2</text>
        <text x="362" y="244" fontSize="7.5" className="fill-muted-foreground">the A's 2′-OH formed a NEW phosphodiester bond</text>
        <text x="362" y="258" fontSize="7.5" fontWeight="700" className="fill-foreground">with the 5′ GU end — a lariat-shaped intermediate</text>
      </g>

      {/* ============================ STEP 3: LIGATION ============================ */}
      <g>
        <rect x="662" y="30" width="292" height="240" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="680" y="56" fontSize="10" fontWeight="800" className="fill-foreground">③ Cleavage at 3′ site — exons ligated</text>
        <text x="680" y="72" fontSize="7.5" className="fill-muted-foreground">exon 1 attacks the AG acceptor; lariat released</text>

        {/* ligated mRNA */}
        <rect x="688" y="104" width="66" height="30" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="721" y="124" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">Exon 1</text>
        <line x1="754" y1="119" x2="786" y2="119" strokeWidth="2.4" className="stroke-brand" />
        <text x="770" y="100" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-brand">joined</text>
        <rect x="786" y="104" width="66" height="30" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="819" y="124" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">Exon 2</text>
        <text x="772" y="156" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">precise join — intron removed completely</text>
        <text x="772" y="170" textAnchor="middle" fontSize="7" className="fill-muted-foreground">→ mature mRNA (continues to cap + tail + export)</text>

        {/* released lariat */}
        <path d="M 770 226 C 786 204, 806 204, 818 222 C 828 236, 812 248, 796 240 C 782 234, 776 220, 788 212"
          fill="none" strokeWidth="1.8" strokeDasharray="5 3" className="stroke-warning" />
        <text x="856" y="226" fontSize="8" fontWeight="800" className="fill-warning">released lariat</text>
        <text x="856" y="238" fontSize="7" className="fill-muted-foreground">degraded — intron is trash</text>

        <text x="680" y="196" fontSize="7.5" className="fill-muted-foreground">GU begins and AG ends every intron — the spliceosome</text>
        <text x="680" y="208" fontSize="7.5" className="fill-muted-foreground">reads those marks to cut exactly</text>
      </g>

      {/* ============================ BOTTOM RULES STRIP ============================ */}
      <g>
        <rect x="26" y="296" width="928" height="84" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="44" y="320" fontSize="9.5" fontWeight="800" className="fill-foreground">Rules the exam tests</text>
        <text x="44" y="340" fontSize="8.5" className="fill-muted-foreground">Introns typically begin with GU and end with AG (DNA: GT … AG) · spliceosome = snRNA + protein snRNPs</text>
        <text x="44" y="356" fontSize="8.5" className="fill-muted-foreground">hnRNA (nucleus) → splicing + 5′ cap + 3′ poly-A → mRNA (exported to cytosol)</text>
        <text x="44" y="374" fontSize="8.5" fontWeight="700" className="fill-emergency">SMA: ↓ SMN protein → snRNP assembly defect → anterior horn degeneration → “floppy baby” (hypotonia)</text>
      </g>
    </svg>
  );
}
