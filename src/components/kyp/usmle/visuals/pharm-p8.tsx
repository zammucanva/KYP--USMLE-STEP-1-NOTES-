/* Pharmacology — PH-batch 8: Drug effect modifications (book 234, pdf 256
 * TOP half). Original KYP redraw of the source page's ONE 6-row
 * TERM/DEFINITION/EXAMPLE table (pdfimages census: ZERO raster images on
 * the page; no margin notes or mnemonics — VLM confirm attempted twice on
 * ph8-vlm-census.ts but both calls failed 401 missing X-Token, so the
 * census stands on pdfimages + the text layer). Redrawn here with original
 * KYP glyphs: the ARITHMETIC LADDER of six cards — ADDITIVE (chip
 * “2 + 2 = 4”), PERMISSIVE (the key-unlock glyph — cortisol is the key
 * required for the full catecholamine response, and a dashed "no chip
 * printed" ghost chip), SYNERGISTIC (chip “2 + 2 > 4”), POTENTIATION (chip
 * “2 + 0 > 2” with THE ZERO PARTNER tag — carbidopa, no therapeutic action
 * alone), ANTAGONISTIC (chip “2 + 2 < 4”), and TACHYPHYLACTIC (the
 * fading-response curve with the growing rebound-congestion bars and
 * rebound arrow) — plus the OPERATOR STRIP and the TWO-ROWS-REFUSE-AN-
 * OPERATOR banner. The four arithmetic chips are the source's own,
 * rendered verbatim; the ladder layout and glyphs are an ORIGINAL KYP
 * redraw. Nothing is reproduced from the book; purely presentational
 * (no props, no hooks, no external images). */

export function EffectModificationMap() {
  const w = 1102;
  const h = 980;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drug effect modifications — the six interaction types as an original KYP arithmetic ladder: additive equals the sum, permissive is the cortisol key requirement, synergistic beats the sum, potentiation is the zero-partner rule with carbidopa and levodopa, antagonistic undershoots the sum with morphine and naloxone, and tachyphylactic is the fading oxymetazoline response with rebound congestion (redraw of book 234)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Drug effect modifications — the arithmetic of two drugs (original KYP redraw)</text>
        <rect x="812" y="25" width="250" height="18" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">six terms · four equations · one table</text>
      </g>

      {/* ===== ZONE A — THE ARITHMETIC LADDER ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="612" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE ARITHMETIC LADDER — six rungs, four equations (the source&apos;s own chips, carried verbatim)</text>

        {/* RUNG 1 — ADDITIVE */}
        <rect x="52" y="104" width="497" height="180" rx="12" className="fill-card stroke-brand" />
        <text x="68" y="128" fontSize="5" fontWeight="800" className="fill-brand">ADDITIVE</text>
        <rect x="467" y="116" width="66" height="16" rx="4" className="fill-brand-soft" />
        <text x="500" y="127" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">RUNG 1</text>
        <text x="68" y="150" fontSize="4.2" className="fill-foreground">Effect of substances A and B together is equal to</text>
        <text x="68" y="163" fontSize="4.2" className="fill-foreground">the sum of their individual effects</text>
        <text x="68" y="190" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">EXAMPLE</text>
        <text x="68" y="205" fontSize="4.4" fontWeight="800" className="fill-foreground">Aspirin and acetaminophen</text>
        <rect x="68" y="220" width="180" height="46" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="158" y="250" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">2 + 2 = 4</text>
        <text x="262" y="242" fontSize="3.8" className="fill-foreground">Together EQUALS the sum — no surprise, no loss:</text>
        <text x="262" y="253" fontSize="3.8" className="fill-foreground">two analgesics deliver exactly two analgesics&apos; worth.</text>

        {/* RUNG 2 — PERMISSIVE */}
        <rect x="52" y="296" width="497" height="180" rx="12" className="fill-card stroke-brand" />
        <text x="68" y="320" fontSize="5" fontWeight="800" className="fill-brand">PERMISSIVE</text>
        <rect x="467" y="308" width="66" height="16" rx="4" className="fill-brand-soft" />
        <text x="500" y="319" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">RUNG 2</text>
        <text x="68" y="342" fontSize="4.2" className="fill-foreground">Presence of substance A is required for the full</text>
        <text x="68" y="355" fontSize="4.2" className="fill-foreground">effects of substance B</text>
        <text x="68" y="382" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">EXAMPLE</text>
        <text x="68" y="397" fontSize="4.4" fontWeight="800" className="fill-foreground">Cortisol on catecholamine responsiveness</text>
        <rect x="68" y="420" width="180" height="46" rx="10" className="fill-secondary/40 stroke-border" strokeDasharray="4 3" />
        <text x="158" y="448" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">no chip printed</text>
        <text x="262" y="442" fontSize="3.8" className="fill-foreground">Without A, B underperforms —</text>
        <text x="262" y="453" fontSize="3.8" className="fill-foreground">a requirement, not an addend.</text>
        {/* key-unlock glyph */}
        <circle cx="350" cy="415" r="11" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <line x1="361" y1="415" x2="408" y2="415" className="stroke-brand" strokeWidth="1.6" />
        <line x1="408" y1="415" x2="408" y2="426" className="stroke-brand" strokeWidth="1.6" />
        <line x1="399" y1="415" x2="399" y2="422" className="stroke-brand" strokeWidth="1.6" />
        <path d="M 440 401 v -8 a 12 12 0 0 1 24 0 v 8" fill="none" className="stroke-brand" strokeWidth="1.6" />
        <rect x="430" y="401" width="44" height="32" rx="5" className="fill-card stroke-brand" />
        <circle cx="452" cy="413" r="4" className="fill-brand" />
        <text x="370" y="443" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">A = the KEY (cortisol)</text>
        <text x="452" y="451" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">B (catecholamines)</text>

        {/* RUNG 3 — SYNERGISTIC */}
        <rect x="52" y="488" width="497" height="180" rx="12" className="fill-card stroke-warning" />
        <text x="68" y="512" fontSize="5" fontWeight="800" className="fill-warning">SYNERGISTIC</text>
        <rect x="467" y="500" width="66" height="16" rx="4" className="fill-warning-soft" />
        <text x="500" y="511" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">RUNG 3</text>
        <text x="68" y="534" fontSize="4.2" className="fill-foreground">Effect of substances A and B together is greater</text>
        <text x="68" y="547" fontSize="4.2" className="fill-foreground">than the sum of their individual effects</text>
        <text x="68" y="574" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">EXAMPLE</text>
        <text x="68" y="589" fontSize="4.4" fontWeight="800" className="fill-foreground">Clopidogrel with aspirin</text>
        <rect x="68" y="604" width="180" height="46" rx="10" className="fill-warning-soft stroke-warning" />
        <text x="158" y="634" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">2 + 2 &gt; 4</text>
        <text x="262" y="626" fontSize="3.8" className="fill-foreground">BOTH drugs therapeutically active — the pair</text>
        <text x="262" y="637" fontSize="3.8" className="fill-foreground">beats the arithmetic (dual antiplatelet therapy).</text>

        {/* RUNG 4 — POTENTIATION */}
        <rect x="567" y="104" width="483" height="180" rx="12" className="fill-card stroke-warning" />
        <text x="583" y="128" fontSize="5" fontWeight="800" className="fill-warning">POTENTIATION</text>
        <rect x="982" y="116" width="66" height="16" rx="4" className="fill-warning-soft" />
        <text x="1015" y="127" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">RUNG 4</text>
        <text x="583" y="150" fontSize="4.2" className="fill-foreground">Similar to synergism, but drug B (with no therapeutic</text>
        <text x="583" y="163" fontSize="4.2" className="fill-foreground">action alone) enhances the therapeutic action of drug A</text>
        <text x="583" y="190" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">EXAMPLE</text>
        <text x="583" y="205" fontSize="4.4" fontWeight="800" className="fill-foreground">Carbidopa only blocks enzyme to prevent peripheral</text>
        <text x="583" y="218" fontSize="4.4" fontWeight="800" className="fill-foreground">conversion of levodopa</text>
        <rect x="583" y="228" width="180" height="46" rx="10" className="fill-warning-soft stroke-warning" />
        <text x="673" y="241" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">THE ZERO PARTNER</text>
        <text x="673" y="263" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">2 + 0 &gt; 2</text>
        <text x="777" y="244" fontSize="3.8" className="fill-foreground">Carbidopa (the 0) treats nothing alone — it only</text>
        <text x="777" y="255" fontSize="3.8" className="fill-foreground">protects levodopa so more reaches the brain.</text>

        {/* RUNG 5 — ANTAGONISTIC */}
        <rect x="567" y="296" width="483" height="180" rx="12" className="fill-card stroke-emergency" />
        <text x="583" y="320" fontSize="5" fontWeight="800" className="fill-emergency">ANTAGONISTIC</text>
        <rect x="982" y="308" width="66" height="16" rx="4" className="fill-emergency-soft" />
        <text x="1015" y="319" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">RUNG 5</text>
        <text x="583" y="342" fontSize="4.2" className="fill-foreground">Effect of substances A and B together is less</text>
        <text x="583" y="355" fontSize="4.2" className="fill-foreground">than the sum of their individual effects</text>
        <text x="583" y="382" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">EXAMPLE</text>
        <text x="583" y="397" fontSize="4.4" fontWeight="800" className="fill-foreground">Morphine with naloxone</text>
        <rect x="583" y="420" width="180" height="46" rx="10" className="fill-emergency-soft stroke-emergency" />
        <text x="673" y="450" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">2 + 2 &lt; 4</text>
        <text x="777" y="442" fontSize="3.8" className="fill-foreground">The antagonist subtracts — naloxone displacing</text>
        <text x="777" y="453" fontSize="3.8" className="fill-foreground">morphine at the opioid receptor (rescue logic).</text>

        {/* RUNG 6 — TACHYPHYLACTIC */}
        <rect x="567" y="488" width="483" height="180" rx="12" className="fill-card stroke-emergency" />
        <text x="583" y="512" fontSize="5" fontWeight="800" className="fill-emergency">TACHYPHYLACTIC</text>
        <rect x="982" y="500" width="66" height="16" rx="4" className="fill-emergency-soft" />
        <text x="1015" y="511" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">RUNG 6</text>
        <text x="583" y="534" fontSize="4.2" className="fill-foreground">Acute decrease in response to a drug after</text>
        <text x="583" y="547" fontSize="4.2" className="fill-foreground">initial/repeated administration</text>
        <text x="583" y="574" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">EXAMPLE</text>
        <text x="583" y="589" fontSize="4.4" fontWeight="800" className="fill-foreground">Repeat use of intranasal decongestant (eg,</text>
        <text x="583" y="602" fontSize="4.4" fontWeight="800" className="fill-foreground">oxymetazoline) → ↓ therapeutic response</text>
        <text x="583" y="615" fontSize="4.4" fontWeight="800" className="fill-foreground">(with rebound congestion)</text>
        {/* fading-response curve + rebound-congestion arrow */}
        <line x1="816" y1="536" x2="816" y2="630" className="stroke-foreground" strokeWidth="1.2" />
        <line x1="816" y1="630" x2="1036" y2="630" className="stroke-foreground" strokeWidth="1.2" />
        <line x1="846" y1="556" x2="990" y2="556" strokeDasharray="4 3" className="stroke-muted-foreground" strokeWidth="1" />
        <text x="990" y="550" textAnchor="end" fontSize="3.4" className="fill-muted-foreground">expected response</text>
        <polyline points="846,556 886,580 926,602 966,620" fill="none" className="stroke-emergency" strokeWidth="1.6" />
        <circle cx="846" cy="556" r="3.5" className="fill-emergency" />
        <circle cx="886" cy="580" r="3.5" className="fill-emergency" />
        <circle cx="926" cy="602" r="3.5" className="fill-emergency" />
        <circle cx="966" cy="620" r="3.5" className="fill-emergency" />
        <text x="816" y="530" fontSize="3.8" fontWeight="800" className="fill-emergency">RESPONSE ↓ dose after dose</text>
        <rect x="842" y="630" width="8" height="5" className="fill-emergency-soft stroke-emergency" strokeWidth="0.6" />
        <rect x="882" y="630" width="8" height="10" className="fill-emergency-soft stroke-emergency" strokeWidth="0.6" />
        <rect x="922" y="630" width="8" height="15" className="fill-emergency-soft stroke-emergency" strokeWidth="0.6" />
        <rect x="962" y="630" width="8" height="20" className="fill-emergency-soft stroke-emergency" strokeWidth="0.6" />
        <path d="M 1010 656 L 1010 636" className="stroke-emergency" strokeWidth="1.6" />
        <path d="M 1005 640 L 1010 631 L 1015 640 Z" className="fill-emergency" />
        <text x="816" y="662" fontSize="3.4" fontWeight="800" className="fill-emergency">rebound congestion grows between doses</text>
      </g>

      {/* ===== ZONE B — THE OPERATOR STRIP ===== */}
      <g>
        <rect x="36" y="694" width="1030" height="106" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="716" fontSize="5.4" fontWeight="800" className="fill-foreground">THE OPERATOR STRIP — match the sign, name the term (the source prints four of the six rows as arithmetic)</text>
        <rect x="52" y="728" width="158" height="62" rx="8" className="fill-card stroke-brand" />
        <text x="70" y="762" fontSize="8" fontWeight="800" className="fill-brand">=</text>
        <text x="92" y="750" fontSize="4.6" fontWeight="800" className="fill-foreground">ADDITIVE</text>
        <text x="66" y="768" fontSize="3.6" className="fill-foreground">aspirin + acetaminophen</text>
        <text x="66" y="779" fontSize="3.6" className="fill-foreground">together = the sum</text>
        <rect x="218" y="728" width="158" height="62" rx="8" className="fill-card stroke-warning" />
        <text x="236" y="762" fontSize="8" fontWeight="800" className="fill-warning">&gt;</text>
        <text x="258" y="750" fontSize="4.6" fontWeight="800" className="fill-foreground">SYNERGISTIC</text>
        <text x="232" y="768" fontSize="3.6" className="fill-foreground">clopidogrel + aspirin</text>
        <text x="232" y="779" fontSize="3.6" className="fill-foreground">together &gt; the sum</text>
        <rect x="384" y="728" width="158" height="62" rx="8" className="fill-card stroke-warning" />
        <text x="402" y="762" fontSize="8" fontWeight="800" className="fill-warning">0</text>
        <text x="424" y="750" fontSize="4.6" fontWeight="800" className="fill-foreground">POTENTIATION</text>
        <text x="398" y="768" fontSize="3.6" className="fill-foreground">carbidopa + levodopa</text>
        <text x="398" y="779" fontSize="3.6" className="fill-foreground">2 + 0 &gt; 2 — silent partner</text>
        <rect x="550" y="728" width="158" height="62" rx="8" className="fill-card stroke-emergency" />
        <text x="568" y="762" fontSize="8" fontWeight="800" className="fill-emergency">&lt;</text>
        <text x="590" y="750" fontSize="4.6" fontWeight="800" className="fill-foreground">ANTAGONISTIC</text>
        <text x="564" y="768" fontSize="3.6" className="fill-foreground">morphine + naloxone</text>
        <text x="564" y="779" fontSize="3.6" className="fill-foreground">together &lt; the sum</text>
        <rect x="716" y="728" width="158" height="62" rx="8" className="fill-card stroke-brand" />
        <circle cx="738" cy="750" r="7" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <line x1="745" y1="750" x2="764" y2="750" className="stroke-brand" strokeWidth="1.4" />
        <line x1="764" y1="750" x2="764" y2="757" className="stroke-brand" strokeWidth="1.4" />
        <text x="782" y="754" fontSize="4.6" fontWeight="800" className="fill-foreground">PERMISSIVE</text>
        <text x="730" y="768" fontSize="3.6" className="fill-foreground">cortisol on catecholamine</text>
        <text x="730" y="779" fontSize="3.6" className="fill-foreground">responsiveness — NO chip</text>
        <rect x="882" y="728" width="158" height="62" rx="8" className="fill-card stroke-emergency" />
        <circle cx="904" cy="750" r="8" className="fill-emergency-soft stroke-emergency" strokeWidth="1.2" />
        <line x1="904" y1="750" x2="904" y2="744" className="stroke-emergency" strokeWidth="1.2" />
        <line x1="904" y1="750" x2="909" y2="753" className="stroke-emergency" strokeWidth="1.2" />
        <text x="920" y="754" fontSize="4.6" fontWeight="800" className="fill-foreground">TACHYPHYLACTIC</text>
        <text x="896" y="768" fontSize="3.6" className="fill-foreground">repeat oxymetazoline → ↓</text>
        <text x="896" y="779" fontSize="3.6" className="fill-foreground">response — NO chip</text>
      </g>

      {/* ===== ZONE C — TWO ROWS REFUSE AN OPERATOR ===== */}
      <g>
        <rect x="36" y="810" width="1030" height="58" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="52" y="830" fontSize="5" fontWeight="800" className="fill-foreground">TWO ROWS REFUSE AN OPERATOR — and the zero test settles the rest</text>
        <text x="52" y="846" fontSize="4.2" className="fill-foreground">PERMISSIVE is a requirement (cortisol must be present for the full catecholamine response) and TACHYPHYLACTIC is a time course (one drug,</text>
        <text x="52" y="858" fontSize="4.2" className="fill-foreground">fading) — neither prints arithmetic. THE ZERO TEST: both drugs active → synergism (“2 + 2 &gt; 4”); a silent partner enhancing drug A → potentiation (“2 + 0 &gt; 2”).</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="878" width="1054" height="90" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="898" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 256 / book 234 (Pharmacology — Autonomic Drugs: Drug effect modifications)</text>
        <text x="42" y="911" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the top half is ONE 6-row TERM/DEFINITION/EXAMPLE table; no margin notes or mnemonics print. VLM confirm attempted twice (ph8-vlm-census.ts);</text>
        <text x="42" y="922" fontSize="4" className="fill-muted-foreground">both calls failed 401 missing X-Token, so the census stands on pdfimages + the text layer. The four arithmetic chips are the SOURCE&apos;S OWN, carried verbatim; the ladder layout,</text>
        <text x="42" y="933" fontSize="4" className="fill-muted-foreground">key-unlock glyph, and fading-response curve are an ORIGINAL KYP redraw. SHARED PAGE (the p196 convention): the bottom half of pdf 256 (Autonomic receptors) is the sibling topic</text>
        <text x="42" y="944" fontSize="4" className="fill-muted-foreground">autonomic-receptors — the second ▶ banner opens it and is never quoted. The page header prints the source&apos;s own banner typos “PHARMACoLoGY” and “SEC TIoN II”, quoted as printed.</text>
      </g>
    </svg>
  );
}
