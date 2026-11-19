/* Pharmacology — PH-batch 10: Acetylcholine receptors (book 235, pdf 257
 * TOP half). Original KYP diagram — the source page carries NO figure at
 * all (pdfimages census: ZERO raster images, pure text — the two printed
 * blocks; the z-ai VLM census attempt returned 401 twice in subagent
 * context, so the census stands on pdfimages + the text layer). Drawn
 * here with original KYP glyphs: the top ACETYLCHOLINE dispatcher chip
 * feeding both branches — LEFT, the NICOTINIC ligand-gated channel glyph
 * embedded in a membrane (K+ efflux up and out; Na+ influx and
 * in-some-cases Ca2+ influx down and in) with the NN chip (autonomic
 * ganglia + adrenal medulla) and the NM chip (skeletal-muscle NMJ);
 * RIGHT, the MUSCARINIC GPCR glyph with its G-protein → 2nd-messenger
 * cascade and the five M1–5 location chips (heart, smooth muscle, brain,
 * exocrine glands, sweat glands — the last flagged CHOLINERGIC
 * SYMPATHETIC, the sympathetic fiber that ends on a muscarinic receptor);
 * plus the exam-targets band (what each class gates) and the
 * ONE-KEY-THREE-LOCKS banner. Nothing is reproduced from the book;
 * purely presentational (no props, no hooks, no external images). */

export function AchReceptorMap() {
  const w = 1102;
  const h = 1010;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Acetylcholine receptors — the nicotinic ligand-gated channel (K+ efflux, Na+ and in-some-cases Ca2+ influx) with its NN and NM subtype chips vs the muscarinic GPCR with its 2nd-messenger cascade and M1–5 location chips, the cholinergic-sympathetic sweat-gland exception, and the exam-targets band (original KYP diagram of book 235)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Acetylcholine receptors — one transmitter, two machines (original KYP diagram)</text>
        <rect x="812" y="25" width="250" height="18" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">channel vs GPCR · three locks</text>
      </g>

      {/* ===== ZONE A — THE FORK ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="590" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FORK — one transmitter, two receptor machines (book 235, the two printed blocks)</text>

        {/* the ACh dispatcher chip */}
        <rect x="436" y="102" width="230" height="56" rx="12" className="fill-card stroke-brand" />
        <ellipse cx="466" cy="130" rx="14" ry="10" className="fill-brand-soft stroke-brand" />
        <text x="466" y="133" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">ACh</text>
        <text x="490" y="124" fontSize="5" fontWeight="800" className="fill-foreground">ACETYLCHOLINE</text>
        <text x="490" y="138" fontSize="3.8" className="fill-muted-foreground">one transmitter — the RECEPTOR</text>
        <text x="490" y="148" fontSize="3.8" className="fill-muted-foreground">decides the machine</text>

        {/* dispatcher fork arrows */}
        <path d="M 436 130 H 340 V 190" fill="none" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 336 190 L 340 180 L 344 190 Z" className="fill-foreground" />
        <text x="366" y="122" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">binds the channel</text>
        <path d="M 666 130 H 760 V 190" fill="none" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 756 190 L 760 180 L 764 190 Z" className="fill-foreground" />
        <text x="688" y="122" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">binds the GPCR</text>

        {/* ---------- LEFT: NICOTINIC branch ---------- */}
        <rect x="52" y="190" width="488" height="454" rx="12" className="fill-card stroke-warning" />
        <text x="68" y="212" fontSize="5" fontWeight="800" className="fill-warning">NICOTINIC — ligand-gated channel (the receptor IS the pore)</text>

        {/* membrane + channel glyph */}
        <line x1="68" y1="270" x2="524" y2="270" className="stroke-border" strokeWidth="1.6" />
        <line x1="68" y1="298" x2="524" y2="298" className="stroke-border" strokeWidth="1.6" />
        {Array.from({ length: 26 }).map((_, i) => (
          <line key={`ml-${i}`} x1={72 + i * 18} y1="270" x2={72 + i * 18} y2="298" className="stroke-border" strokeWidth="0.7" />
        ))}
        <text x="68" y="260" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">EXTRACELLULAR</text>
        <text x="68" y="316" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">INSIDE THE CELL</text>

        {/* the channel subunits forming the pore */}
        <rect x="120" y="256" width="18" height="56" rx="3" className="fill-warning-soft stroke-warning" />
        <rect x="156" y="256" width="18" height="56" rx="3" className="fill-warning-soft stroke-warning" />
        <ellipse cx="147" cy="236" rx="12" ry="9" className="fill-brand-soft stroke-brand" />
        <text x="147" y="239" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">ACh</text>
        <line x1="147" y1="245" x2="147" y2="254" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 144 254 L 147 259 L 150 254 Z" className="fill-foreground" />
        <text x="100" y="330" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">binding opens the pore</text>

        {/* K+ efflux (up, out of the cell) */}
        <line x1="236" y1="332" x2="236" y2="240" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 232 244 L 236 234 L 240 244 Z" className="fill-foreground" />
        <text x="236" y="230" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">K+ EFFLUX ↑</text>
        <text x="236" y="346" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">out of the cell</text>

        {/* Na+ influx (down, into the cell) */}
        <line x1="308" y1="238" x2="308" y2="330" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 304 326 L 308 336 L 312 326 Z" className="fill-foreground" />
        <text x="308" y="230" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Na+ INFLUX ↓</text>
        <text x="308" y="346" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">into the cell</text>

        {/* Ca2+ influx — in some cases */}
        <line x1="388" y1="238" x2="388" y2="330" className="stroke-foreground" strokeWidth="1.4" strokeDasharray="4 2.5" />
        <path d="M 384 326 L 388 336 L 392 326 Z" className="fill-foreground" />
        <text x="388" y="230" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Ca2+ ↓</text>
        <text x="388" y="346" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">in some cases</text>

        <text x="452" y="286" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the current flows</text>
        <text x="452" y="296" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">through the receptor</text>
        <text x="452" y="306" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">itself — no 2nd</text>
        <text x="452" y="316" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">messenger needed</text>

        {/* arrows from the channel down to the two subtype chips */}
        <path d="M 147 328 V 396 H 168 V 420" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 164 420 L 168 411 L 172 420 Z" className="fill-foreground" />
        <path d="M 147 328 V 396 H 420 V 420" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 416 420 L 420 411 L 424 420 Z" className="fill-foreground" />
        <text x="230" y="392" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">same machine, two locations — the subtype fork</text>

        {/* NN chip */}
        <rect x="66" y="420" width="222" height="176" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <rect x="78" y="434" width="44" height="18" rx="4" className="fill-warning" />
        <text x="100" y="446.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">NN</text>
        <text x="130" y="446.5" fontSize="4.6" fontWeight="800" className="fill-foreground">NEURONAL NICOTINIC</text>
        <text x="78" y="470" fontSize="4.2" fontWeight="700" className="fill-foreground">Autonomic ganglia — sympathetic</text>
        <text x="78" y="482" fontSize="4.2" fontWeight="700" className="fill-foreground">AND parasympathetic (every</text>
        <text x="78" y="494" fontSize="4.2" fontWeight="700" className="fill-foreground">preganglionic neuron ends on NN)</text>
        <text x="78" y="518" fontSize="4.2" fontWeight="700" className="fill-foreground">Adrenal medulla — the modified</text>
        <text x="78" y="530" fontSize="4.2" fontWeight="700" className="fill-foreground">ganglion: catecholamine release</text>
        <text x="78" y="542" fontSize="4.2" fontWeight="700" className="fill-foreground">is NN-driven, like any ganglion</text>
        <text x="78" y="574" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">A GANGLION BLOCKER HITS ALL OF THIS AT ONCE</text>

        {/* NM chip */}
        <rect x="306" y="420" width="222" height="176" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <rect x="318" y="434" width="44" height="18" rx="4" className="fill-warning" />
        <text x="340" y="446.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">NM</text>
        <text x="370" y="446.5" fontSize="4.6" fontWeight="800" className="fill-foreground">MUSCLE NICOTINIC</text>
        <text x="318" y="470" fontSize="4.2" fontWeight="700" className="fill-foreground">Neuromuscular junction of</text>
        <text x="318" y="482" fontSize="4.2" fontWeight="700" className="fill-foreground">skeletal muscle — the somatic</text>
        <text x="318" y="494" fontSize="4.2" fontWeight="700" className="fill-foreground">lock, separate from the ganglia</text>
        <text x="318" y="518" fontSize="4.2" fontWeight="700" className="fill-foreground">NM blockade = flaccid paralysis</text>
        <text x="318" y="530" fontSize="4.2" fontWeight="700" className="fill-foreground">WITHOUT autonomic loss</text>
        <text x="318" y="574" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">NN RUNS NEURONS, NM MOVES MUSCLE</text>

        {/* ---------- RIGHT: MUSCARINIC branch ---------- */}
        <rect x="562" y="190" width="488" height="454" rx="12" className="fill-card stroke-brand" />
        <text x="578" y="212" fontSize="5" fontWeight="800" className="fill-brand">MUSCARINIC — G-protein–coupled receptor (the receptor relays the message)</text>

        {/* membrane + GPCR glyph */}
        <line x1="578" y1="270" x2="1030" y2="270" className="stroke-border" strokeWidth="1.6" />
        <line x1="578" y1="298" x2="1030" y2="298" className="stroke-border" strokeWidth="1.6" />
        {Array.from({ length: 25 }).map((_, i) => (
          <line key={`mr-${i}`} x1={582 + i * 18} y1="270" x2={582 + i * 18} y2="298" className="stroke-border" strokeWidth="0.7" />
        ))}
        <text x="578" y="260" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">EXTRACELLULAR</text>
        <text x="578" y="316" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">INSIDE THE CELL</text>

        {/* the 7TM GPCR serpent */}
        <rect x="620" y="254" width="52" height="60" rx="10" className="fill-brand-soft stroke-brand" />
        <path d="M 626 258 L 632 278 L 626 298 M 636 258 L 642 278 L 636 298 M 646 258 L 652 278 L 646 298 M 656 258 L 662 278 L 656 298" fill="none" className="stroke-brand" strokeWidth="1.2" />
        <ellipse cx="646" cy="236" rx="12" ry="9" className="fill-brand-soft stroke-brand" />
        <text x="646" y="239" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">ACh</text>
        <line x1="646" y1="245" x2="646" y2="252" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 643 252 L 646 257 L 649 252 Z" className="fill-foreground" />
        <text x="596" y="330" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">7TM GPCR</text>
        <text x="756" y="286" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">binding flips a switch,</text>
        <text x="756" y="296" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">not a pore — the signal is</text>
        <text x="756" y="306" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">relayed, not carried</text>

        {/* G protein → 2nd messengers → response cascade */}
        <line x1="646" y1="318" x2="646" y2="336" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 642 334 L 646 342 L 650 334 Z" className="fill-foreground" />
        <circle cx="646" cy="356" r="13" className="fill-secondary stroke-foreground" />
        <text x="646" y="359.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">G</text>
        <text x="600" y="381" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">G protein</text>
        <line x1="646" y1="370" x2="646" y2="388" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 642 386 L 646 394 L 650 386 Z" className="fill-foreground" />
        <rect x="584" y="396" width="126" height="22" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="647" y="410.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">2ND MESSENGERS</text>
        <line x1="646" y1="418" x2="646" y2="436" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 642 434 L 646 442 L 650 434 Z" className="fill-foreground" />
        <rect x="578" y="444" width="140" height="22" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="648" y="458.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">CELLULAR RESPONSE</text>

        {/* the five M1-5 location chips */}
        <rect x="726" y="330" width="310" height="136" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="738" y="348" fontSize="4.6" fontWeight="800" className="fill-foreground">5 SUBTYPES: M1–5 — WHERE THEY SIT</text>
        <rect x="738" y="358" width="90" height="22" rx="5" className="fill-card stroke-border" />
        <text x="783" y="372.5" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">heart</text>
        <rect x="836" y="358" width="90" height="22" rx="5" className="fill-card stroke-border" />
        <text x="881" y="372.5" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">smooth muscle</text>
        <rect x="934" y="358" width="90" height="22" rx="5" className="fill-card stroke-border" />
        <text x="979" y="372.5" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">brain</text>
        <rect x="738" y="388" width="90" height="22" rx="5" className="fill-card stroke-border" />
        <text x="783" y="402.5" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">exocrine glands</text>
        <rect x="836" y="388" width="188" height="34" rx="5" className="fill-emergency-soft/30 stroke-emergency" strokeDasharray="3 2" />
        <text x="930" y="401" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">sweat glands</text>
        <text x="930" y="413" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-emergency">CHOLINERGIC SYMPATHETIC — the exception</text>
        <text x="738" y="444" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the page lists the family M1–5 across these five sites</text>

        {/* sweat exception callout */}
        <rect x="578" y="478" width="458" height="106" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="592" y="498" fontSize="4.6" fontWeight="800" className="fill-emergency">THE SYMPATHETIC SWEAT EXCEPTION</text>
        <text x="592" y="514" fontSize="4.2" fontWeight="700" className="fill-foreground">A SYMPATHETIC fiber — but it releases ACh onto a MUSCARINIC</text>
        <text x="592" y="526" fontSize="4.2" fontWeight="700" className="fill-foreground">receptor: sweat glands print in the M1–5 list with the</text>
        <text x="592" y="538" fontSize="4.2" fontWeight="700" className="fill-foreground">parenthetical (cholinergic sympathetic). Muscarinic blockade</text>
        <text x="592" y="550" fontSize="4.2" fontWeight="700" className="fill-foreground">evicts the sweat gland first: anhidrosis → hyperthermia.</text>
        <text x="592" y="572" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">FOUR M-HOMES AND ONE SYMPATHETIC SPY</text>

        {/* nicotinic machine footer line */}
        <text x="66" y="624" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">NICOTINIC = fast ion current (the gate) — ganglia, adrenal medulla, NMJ</text>
        <text x="578" y="624" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">MUSCARINIC = relayed 2nd-messenger cascade (the mailbox) — the end-organs</text>
      </g>

      {/* ===== ZONE B — EXAM TARGETS ===== */}
      <g>
        <rect x="36" y="674" width="1030" height="182" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="696" fontSize="5.4" fontWeight="800" className="fill-foreground">EXAM TARGETS — what each receptor class gates, and what its blocker takes down</text>

        {/* NN column */}
        <rect x="52" y="710" width="324" height="132" rx="10" className="fill-card stroke-warning" />
        <rect x="64" y="722" width="40" height="16" rx="4" className="fill-warning" />
        <text x="84" y="733.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">NN</text>
        <text x="112" y="733.5" fontSize="4.6" fontWeight="800" className="fill-foreground">THE GANGLIONIC LOCK</text>
        <text x="64" y="754" fontSize="4.2" fontWeight="700" className="fill-foreground">Ganglionic transmission — BOTH autonomic</text>
        <text x="64" y="766" fontSize="4.2" fontWeight="700" className="fill-foreground">divisions at once (sympathetic + parasympathetic)</text>
        <text x="64" y="786" fontSize="4.2" fontWeight="700" className="fill-foreground">Adrenal medulla — catecholamine release falls</text>
        <text x="64" y="798" fontSize="4.2" fontWeight="700" className="fill-foreground">with the ganglia (NN, the modified ganglion)</text>
        <text x="64" y="822" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">BLOCK IT: both divisions + adrenal drop together —</text>
        <text x="64" y="833" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">and skeletal muscle is SPARED (NM is another lock)</text>

        {/* NM column */}
        <rect x="388" y="710" width="316" height="132" rx="10" className="fill-card stroke-warning" />
        <rect x="400" y="722" width="40" height="16" rx="4" className="fill-warning" />
        <text x="420" y="733.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">NM</text>
        <text x="448" y="733.5" fontSize="4.6" fontWeight="800" className="fill-foreground">THE SOMATIC LOCK</text>
        <text x="400" y="754" fontSize="4.2" fontWeight="700" className="fill-foreground">Neuromuscular junction of skeletal muscle —</text>
        <text x="400" y="766" fontSize="4.2" fontWeight="700" className="fill-foreground">somatic contraction, and nothing else</text>
        <text x="400" y="786" fontSize="4.2" fontWeight="700" className="fill-foreground">Anatomically separate from the autonomic</text>
        <text x="400" y="798" fontSize="4.2" fontWeight="700" className="fill-foreground">ganglia — a different subtype, a different drug</text>
        <text x="400" y="822" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">BLOCK IT: flaccid paralysis WITHOUT autonomic</text>
        <text x="400" y="833" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">loss — the surgical paralysis lock</text>

        {/* M column */}
        <rect x="716" y="710" width="334" height="132" rx="10" className="fill-card stroke-brand" />
        <rect x="728" y="722" width="40" height="16" rx="4" className="fill-brand" />
        <text x="748" y="733.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">M1–5</text>
        <text x="776" y="733.5" fontSize="4.6" fontWeight="800" className="fill-foreground">THE END-ORGAN LOCK</text>
        <text x="728" y="754" fontSize="4.2" fontWeight="700" className="fill-foreground">The parasympathetic end-organs — heart, smooth</text>
        <text x="728" y="766" fontSize="4.2" fontWeight="700" className="fill-foreground">muscle, brain, exocrine glands</text>
        <text x="728" y="786" fontSize="4.2" fontWeight="700" className="fill-emergency">+ the sympathetic sweat exception (cholinergic</text>
        <text x="728" y="798" fontSize="4.2" fontWeight="700" className="fill-emergency">sympathetic) — the one sympathetic M site</text>
        <text x="728" y="822" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">BLOCK IT: the atropine-like end-organ pattern —</text>
        <text x="728" y="833" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">including anhidrosis → hyperthermia (the spy evicted)</text>
      </g>

      {/* ===== ZONE C — ONE KEY, THREE LOCKS ===== */}
      <g>
        <rect x="36" y="868" width="1030" height="56" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="52" y="890" fontSize="5" fontWeight="800" className="fill-foreground">ONE KEY, THREE LOCKS — acetylcholine is one key; NN · NM · M1–5 are the locks; pick the lock to predict the drug</text>
        <text x="52" y="906" fontSize="4.2" className="fill-foreground">Do not sort cholinergic receptors by division — sort them by class and location: every preganglionic neuron (sympathetic and</text>
        <text x="52" y="916" fontSize="4.2" className="fill-foreground">parasympathetic) crosses an NN ganglion; the NMJ runs on NM; the end-organs — and the sweat gland — listen muscarinically.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="936" width="1054" height="60" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="954" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 257 / book 235 (Pharmacology — Autonomic Drugs: Acetylcholine receptors)</text>
        <text x="42" y="967" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images on the page — the ACh-receptors half is pure text, two blocks, no figures; the z-ai VLM census attempt</text>
        <text x="42" y="978" fontSize="4" className="fill-muted-foreground">(ph10-vlm-census.ts) returned 401 twice in subagent context, so the census stands on pdfimages + the text layer. SHARED PAGE: the bottom half</text>
        <text x="42" y="989" fontSize="4" className="fill-muted-foreground">(Pain transmission) is the sibling topic (the p196 convention) — only the ACh-receptors block is quoted. This diagram is an ORIGINAL KYP design.</text>
      </g>
    </svg>
  );
}
