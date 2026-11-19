/* Pharmacology — Pharmacokinetics and Pharmacodynamics (PH4): Elimination
 * of drugs (pdf 252 bottom half / book 230). Original KYP adaptation:
 * the source page carries a two-column zero-order/first-order text block
 * plus TWO vector elimination-curve figures (pdfimages: ZERO rasters).
 * Both figures are REDRAWN here as original KYP vector art — LEFT: the
 * zero-order straight line with constant 2 U/h slope chips and the
 * shrinking half-life brackets (First > Second > Third; the time of t1/2
 * rises as concentration rises); RIGHT: the first-order exponential decay
 * with halving slope chips (4 -> 2 -> 1 -> 0.5 U/h) and equal brackets
 * (First = Second = Third) — over a center fork banner (constant AMOUNT
 * vs constant FRACTION), the PEA drug chips (the source's own margin
 * mnemonic, quoted with attribution), the capacity-limited vs
 * flow-dependent machinery boxes, and the saturation-crossover panel
 * (Michaelis–Menten: how a first-order drug becomes zero-order at toxic
 * concentration — aspirin, phenytoin, ethanol). Purely presentational:
 * no props, no hooks, no external images. */

export function EliminationKineticsMap() {
  const w = 1102;
  const h = 1016;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Elimination of drugs — zero-order vs first-order kinetics: mirror panels (zero-order linear fall with constant 2 U/h slope chips and shrinking half-life brackets; first-order exponential decay with halving slope chips and equal brackets), a constant-amount vs constant-fraction fork banner, and the saturation crossover that flips a first-order drug to zero-order — an original KYP adaptation of book 230." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Elimination of drugs — zero-order vs first-order kinetics (original KYP adaptation)</text>
        <rect x="856" y="24" width="204" height="18" className="fill-brand-soft" />
        <text x="958" y="37" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">constant AMOUNT vs constant FRACTION</text>
      </g>

      {/* ===== THE FORK BANNER ===== */}
      <g>
        <text x="551" y="84" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">THE FORK — what does each order hold constant?</text>
        <rect x="36" y="94" width="497" height="32" rx="8" className="fill-emergency-soft/50 stroke-emergency" />
        <text x="284" y="107" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">ZERO-ORDER — a constant AMOUNT of drug eliminated per unit time</text>
        <text x="284" y="118" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">rate of elimination is constant regardless of Cp · capacity-limited elimination</text>
        <rect x="569" y="94" width="497" height="32" rx="8" className="fill-brand-soft/50 stroke-brand" />
        <text x="817" y="107" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">FIRST-ORDER — a constant FRACTION of drug eliminated per unit time</text>
        <text x="817" y="118" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">rate directly proportional to the drug concentration · applies to most drugs</text>
      </g>

      {/* ===== LEFT PANEL — ZERO-ORDER ===== */}
      <g>
        <rect x="36" y="134" width="501" height="478" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="158" fontSize="6.2" fontWeight="800" className="fill-emergency">ZERO-ORDER ELIMINATION — capacity-limited (constant amount)</text>
        {/* plot */}
        <text x="92" y="172" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Drug plasma concentration ↑ (U)</text>
        <g className="stroke-border" fill="none">
          <line x1="90" y1="176" x2="90" y2="360" strokeWidth="1.2" />
          <line x1="90" y1="360" x2="470" y2="360" strokeWidth="1.2" />
        </g>
        <g className="fill-muted-foreground" fontSize="3.4" textAnchor="end">
          <text x="86" y="202">16</text>
          <text x="86" y="272">8</text>
          <text x="86" y="307">4</text>
          <text x="86" y="332">2</text>
        </g>
        {/* the straight line (2 U/h constant): 16 U at t0, 8 U at t4h, 4 U at t6h, 2 U at t7h */}
        <line x1="90" y1="200" x2="410" y2="340" className="stroke-emergency" strokeWidth="2.2" />
        <g className="stroke-emergency/60" strokeDasharray="3 3" fill="none" strokeWidth="0.8">
          <line x1="250" y1="270" x2="250" y2="360" />
          <line x1="330" y1="305" x2="330" y2="360" />
          <line x1="370" y1="322" x2="370" y2="360" />
        </g>
        <g className="fill-emergency">
          <circle cx="90" cy="200" r="3" />
          <circle cx="250" cy="270" r="3" />
          <circle cx="330" cy="305" r="3" />
          <circle cx="370" cy="322" r="3" />
        </g>
        {/* constant slope chips */}
        <g>
          <rect x="152" y="215" width="36" height="13" rx="4" className="fill-card stroke-emergency" />
          <text x="170" y="224" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">2 U/h</text>
          <rect x="272" y="268" width="36" height="13" rx="4" className="fill-card stroke-emergency" />
          <text x="290" y="277" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">2 U/h</text>
          <rect x="332" y="294" width="36" height="13" rx="4" className="fill-card stroke-emergency" />
          <text x="350" y="303" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">2 U/h</text>
        </g>
        <text x="280" y="374" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Time (h)</text>
        {/* half-life brackets — shrinking: First > Second > Third */}
        <g className="stroke-emergency" fill="none" strokeWidth="1.2">
          <path d="M 90 384 L 90 380 L 250 380 L 250 384" />
          <path d="M 250 384 L 250 380 L 330 380 L 330 384" />
          <path d="M 330 384 L 330 380 L 370 380 L 370 384" />
        </g>
        <g className="fill-foreground" fontSize="3.6" fontWeight="700" textAnchor="middle">
          <text x="170" y="395">First t1/2 &gt;</text>
          <text x="290" y="395">Second t1/2 &gt;</text>
          <text x="352" y="395">Third t1/2</text>
          <text x="170" y="403" className="fill-muted-foreground">4 h</text>
          <text x="290" y="403" className="fill-muted-foreground">2 h</text>
          <text x="352" y="403" className="fill-muted-foreground">1 h</text>
        </g>
        <text x="287" y="416" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">each successive interval SHORTER as concentration falls: 16→8 takes 4 h · 8→4 takes 2 h · 4→2 takes 1 h</text>
        <text x="287" y="424" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">figure annotation: the time of t1/2 ↑ as concentration ↑ — no single half-life exists</text>
        {/* PEA drug chips */}
        <g>
          <rect x="60" y="436" width="128" height="16" rx="8" className="fill-card stroke-emergency" />
          <text x="124" y="446" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">P · Phenytoin</text>
          <rect x="198" y="436" width="106" height="16" rx="8" className="fill-card stroke-emergency" />
          <text x="251" y="446" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">E · Ethanol</text>
          <rect x="314" y="436" width="106" height="16" rx="8" className="fill-card stroke-emergency" />
          <text x="367" y="446" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">A · Aspirin*</text>
        </g>
        <text x="287" y="462" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-foreground">“A PEA is round, shaped like the “0” in zero-order.” — the source's own margin mnemonic, carried verbatim (book 230)</text>
        <text x="287" y="471" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">*Aspirin: at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination (first-order at low doses)</text>
        {/* capacity-limited machinery box */}
        <rect x="52" y="482" width="469" height="52" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="64" y="496" fontSize="4.4" fontWeight="800" className="fill-emergency">THE SATURATED MACHINERY — capacity-limited elimination</text>
        <text x="64" y="508" fontSize="3.6" fontWeight="700" className="fill-foreground">enzyme sites full → the elimination rate maxes out at Vmax and ignores Cp</text>
        <text x="64" y="517" fontSize="3.6" fontWeight="700" className="fill-foreground">rate of elimination is constant regardless of Cp — the 2 U/h chips never change</text>
        <g>
          <rect x="404" y="490" width="17" height="13" rx="3" className="fill-card stroke-emergency" />
          <rect x="426" y="490" width="17" height="13" rx="3" className="fill-card stroke-emergency" />
          <rect x="448" y="490" width="17" height="13" rx="3" className="fill-card stroke-emergency" />
          <g className="fill-emergency">
            <circle cx="408" cy="496.5" r="2.2" />
            <circle cx="413" cy="496.5" r="2.2" />
            <circle cx="430" cy="496.5" r="2.2" />
            <circle cx="435" cy="496.5" r="2.2" />
            <circle cx="452" cy="496.5" r="2.2" />
            <circle cx="457" cy="496.5" r="2.2" />
          </g>
          <text x="434" y="516" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">sites saturated</text>
        </g>
        {/* panel markers */}
        <text x="52" y="548" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">MARKERS: straight line (Cp ↓ linearly with time) · constant 2 U/h slope chips · brackets shrink: First &gt; Second &gt; Third</text>
        <text x="52" y="558" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">tag: capacity-limited · examples: Phenytoin, Ethanol, Aspirin* (the PEA trio)</text>
        <text x="52" y="568" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">half-life: concentration-dependent — the time of t1/2 ↑ as concentration ↑</text>
      </g>

      {/* ===== RIGHT PANEL — FIRST-ORDER ===== */}
      <g>
        <rect x="565" y="134" width="501" height="478" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="581" y="158" fontSize="6.2" fontWeight="800" className="fill-brand">FIRST-ORDER ELIMINATION — flow-dependent (constant fraction)</text>
        {/* plot */}
        <text x="621" y="172" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Drug plasma concentration ↑ (U)</text>
        <g className="stroke-border" fill="none">
          <line x1="619" y1="176" x2="619" y2="360" strokeWidth="1.2" />
          <line x1="619" y1="360" x2="985" y2="360" strokeWidth="1.2" />
        </g>
        <g className="fill-muted-foreground" fontSize="3.4" textAnchor="end">
          <text x="615" y="202">16</text>
          <text x="615" y="272">8</text>
          <text x="615" y="307">4</text>
          <text x="615" y="332">2</text>
          <text x="615" y="341">1</text>
        </g>
        {/* the exponential curve: 16 → 8 → 4 → 2 → 1, each half-life in the same 2 h */}
        <path d="M 639 200 C 676 222, 702 250, 719 270 C 745 292, 772 301, 799 305 C 826 309, 852 320, 879 330 C 906 336, 934 338.5, 959 338.75" className="stroke-brand" strokeWidth="2.2" fill="none" />
        <g className="stroke-brand/60" strokeDasharray="3 3" fill="none" strokeWidth="0.8">
          <line x1="719" y1="270" x2="719" y2="360" />
          <line x1="799" y1="305" x2="799" y2="360" />
          <line x1="879" y1="330" x2="879" y2="360" />
        </g>
        <g className="fill-brand">
          <circle cx="639" cy="200" r="3" />
          <circle cx="719" cy="270" r="3" />
          <circle cx="799" cy="305" r="3" />
          <circle cx="879" cy="330" r="3" />
          <circle cx="959" cy="338" r="3" />
        </g>
        {/* halving slope chips */}
        <g>
          <rect x="660" y="213" width="38" height="13" rx="4" className="fill-card stroke-brand" />
          <text x="679" y="222" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">4 U/h</text>
          <rect x="740" y="265" width="38" height="13" rx="4" className="fill-card stroke-brand" />
          <text x="759" y="274" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">2 U/h</text>
          <rect x="820" y="296" width="38" height="13" rx="4" className="fill-card stroke-brand" />
          <text x="839" y="305" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">1 U/h</text>
          <rect x="892" y="312" width="46" height="13" rx="4" className="fill-card stroke-brand" />
          <text x="915" y="321" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">0.5 U/h</text>
        </g>
        <text x="802" y="374" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Time (h)</text>
        {/* half-life brackets — equal: First = Second = Third */}
        <g className="stroke-brand" fill="none" strokeWidth="1.2">
          <path d="M 639 384 L 639 380 L 719 380 L 719 384" />
          <path d="M 719 384 L 719 380 L 799 380 L 799 384" />
          <path d="M 799 384 L 799 380 L 879 380 L 879 384" />
        </g>
        <g className="fill-foreground" fontSize="3.6" fontWeight="700" textAnchor="middle">
          <text x="679" y="395">First t1/2 =</text>
          <text x="759" y="395">Second t1/2 =</text>
          <text x="839" y="395">Third t1/2</text>
          <text x="679" y="403" className="fill-muted-foreground">2 h</text>
          <text x="759" y="403" className="fill-muted-foreground">2 h</text>
          <text x="839" y="403" className="fill-muted-foreground">2 h</text>
        </g>
        <text x="802" y="416" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">equal intervals — each half-life removes half the drug (16 → 8 → 4 → 2 → 1) in the same 2 h</text>
        <text x="802" y="424" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">figure annotation: “Time of t1/2 is constant as concentration ↑”</text>
        {/* badges */}
        <g>
          <rect x="581" y="436" width="176" height="16" rx="8" className="fill-brand-soft stroke-brand" />
          <text x="669" y="446" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">APPLIES TO MOST DRUGS</text>
          <rect x="767" y="436" width="140" height="16" rx="8" className="fill-card stroke-border" />
          <text x="837" y="446" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">FLOW-DEPENDENT</text>
        </g>
        <text x="816" y="462" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-foreground">FLOW-DEPENDENT — for high-extraction drugs the liver clears whatever the blood delivers:</text>
        <text x="816" y="471" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-foreground">the rate tracks hepatic blood flow while staying proportional to the drug concentration</text>
        {/* proportional machinery box */}
        <rect x="581" y="482" width="469" height="52" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="593" y="496" fontSize="4.4" fontWeight="800" className="fill-brand">THE PROPORTIONAL MACHINERY — flow-dependent elimination</text>
        <text x="593" y="508" fontSize="3.6" fontWeight="700" className="fill-foreground">enzyme sites in excess → every extra molecule finds a site → rate ∝ Cp</text>
        <text x="593" y="517" fontSize="3.6" fontWeight="700" className="fill-foreground">constant fraction per unit time — the slope chips halve with the concentration (4 → 2 → 1 → 0.5 U/h)</text>
        <g>
          <rect x="933" y="490" width="17" height="13" rx="3" className="fill-card stroke-brand" />
          <rect x="955" y="490" width="17" height="13" rx="3" className="fill-card stroke-brand" />
          <rect x="977" y="490" width="17" height="13" rx="3" className="fill-card stroke-brand" />
          <g className="fill-brand">
            <circle cx="937" cy="496.5" r="2.2" />
            <circle cx="959" cy="496.5" r="2.2" />
            <circle cx="981" cy="496.5" r="2.2" />
          </g>
          <text x="963" y="516" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">sites open</text>
        </g>
        {/* panel markers */}
        <text x="581" y="548" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">MARKERS: exponential curve (Cp ↓ exponentially with time) · halving slope chips · equal brackets: First = Second = Third</text>
        <text x="581" y="558" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">tag: flow-dependent · applies to most drugs · rate directly proportional to Cp</text>
        <text x="581" y="568" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">half-life: fixed — “Time of t1/2 is constant as concentration ↑”</text>
      </g>

      {/* center vs badge */}
      <g>
        <circle cx="551" cy="374" r="16" className="fill-card stroke-border" />
        <text x="551" y="377" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-foreground">vs</text>
      </g>

      {/* ===== SATURATION CROSSOVER PANEL ===== */}
      <g>
        <rect x="36" y="620" width="1030" height="302" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="642" fontSize="6.2" fontWeight="800" className="fill-foreground">THE SATURATION CROSSOVER — how a first-order drug becomes zero-order</text>
        {/* example chips */}
        <rect x="52" y="656" width="304" height="44" rx="8" className="fill-card stroke-emergency" />
        <text x="64" y="670" fontSize="4.2" fontWeight="800" className="fill-emergency">ASPIRIN at high or toxic concentrations</text>
        <text x="64" y="681" fontSize="3.5" fontWeight="700" className="fill-foreground">↑ salicylate saturation → zero-order elimination (book 230, verbatim)</text>
        <text x="64" y="690" fontSize="3.4" className="fill-muted-foreground">first-order at analgesic doses; after overdose, levels fall linearly, t1/2 prolonged</text>
        <rect x="52" y="708" width="304" height="44" rx="8" className="fill-card stroke-emergency" />
        <text x="64" y="722" fontSize="4.2" fontWeight="800" className="fill-emergency">PHENYTOIN near therapeutic levels</text>
        <text x="64" y="733" fontSize="3.5" fontWeight="700" className="fill-foreground">small dose ↑ → disproportionate Cp ↑ (nystagmus, ataxia)</text>
        <text x="64" y="742" fontSize="3.4" className="fill-muted-foreground">capacity-limited even on schedule — titrate by levels in small steps</text>
        <rect x="52" y="760" width="304" height="44" rx="8" className="fill-card stroke-emergency" />
        <text x="64" y="774" fontSize="4.2" fontWeight="800" className="fill-emergency">ETHANOL even at social doses</text>
        <text x="64" y="785" fontSize="3.5" fontWeight="700" className="fill-foreground">alcohol dehydrogenase saturated → BAC falls at a fixed rate</text>
        <text x="64" y="794" fontSize="3.4" className="fill-muted-foreground">the constant-amount fall is zero-order from the first drink</text>
        <text x="52" y="824" fontSize="3.6" fontWeight="800" className="fill-foreground">capacity-limited elimination is Michaelis–Menten saturation:</text>
        <text x="52" y="834" fontSize="3.5" fontWeight="700" className="fill-foreground">rate = Vmax · Cp / (Km + Cp) — below Km: rate ∝ Cp (first-order);</text>
        <text x="52" y="844" fontSize="3.5" fontWeight="700" className="fill-foreground">above Km: the enzymes fill and the rate → Vmax (zero-order)</text>
        {/* crossover plot */}
        <text x="384" y="656" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Elimination rate ↑</text>
        <g className="stroke-border" fill="none">
          <line x1="380" y1="660" x2="380" y2="850" strokeWidth="1.2" />
          <line x1="380" y1="850" x2="1040" y2="850" strokeWidth="1.2" />
        </g>
        <text x="912" y="866" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Drug plasma concentration (Cp) →</text>
        <line x1="390" y1="848" x2="690" y2="706" className="stroke-emergency" strokeDasharray="4 3" strokeWidth="1" fill="none" />
        <text x="448" y="812" fontSize="3.4" fontWeight="700" className="fill-emergency">first-order zone — rate ∝ Cp</text>
        <line x1="390" y1="676" x2="1030" y2="676" className="stroke-warning" strokeDasharray="4 3" strokeWidth="1" fill="none" />
        <text x="660" y="670" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-warning">Vmax — the zero-order plateau (constant amount)</text>
        <path d="M 390 848 C 470 796, 550 752, 640 722 C 740 692, 880 680, 1030 676" className="stroke-brand" strokeWidth="2.2" fill="none" />
        <line x1="640" y1="672" x2="640" y2="850" className="stroke-border" strokeDasharray="2 3" strokeWidth="0.8" fill="none" />
        <text x="640" y="862" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Km</text>
        <text x="452" y="838" fontSize="3.5" fontWeight="700" className="fill-brand">THERAPEUTIC Cp — first-order (flow-dependent)</text>
        <text x="852" y="720" fontSize="3.5" fontWeight="700" className="fill-emergency">TOXIC Cp — zero-order (capacity-limited)</text>
        {/* panel footer */}
        <text x="52" y="896" fontSize="3.8" fontWeight="800" className="fill-foreground">THE FLIP — FLOOD THE ENZYME, FLATTEN THE LINE: push a first-order drug's Cp past the metabolic capacity and its exponential bend straightens</text>
        <text x="52" y="906" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">into a constant-rate (zero-order) decline — the same aspirin, two dose ranges, two rate laws.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="930" width="1054" height="72" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="948" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 252 (bottom half) / book 230 — Pharmacology — Pharmacokinetics and Pharmacodynamics: Elimination of drugs</text>
        <text x="42" y="960" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images on the page — a two-column zero-order/first-order text block plus TWO vector elimination-curve figures; both are redrawn here as original KYP vector art.</text>
        <text x="42" y="972" fontSize="5" className="fill-muted-foreground">Shared page (the p196 convention): the top half of pdf 252 is “Drug metabolism” (sibling topic) — only the elimination block is quoted here. “A PEA is round, shaped like the “0” in</text>
        <text x="42" y="984" fontSize="5" className="fill-muted-foreground">zero-order.” is the source's own margin mnemonic (book 230), quoted verbatim with attribution; the four ALL-CAPS mnemonics in the note are original KYP.</text>
      </g>
    </svg>
  );
}
