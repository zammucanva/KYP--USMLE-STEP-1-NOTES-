/* Pharmacology — PH-batch 11: Pain transmission & analgesic targets (book
 * 235, pdf 257 BOTTOM half). Original KYP diagram — the source page
 * carries NO figure at all (pdfimages census: ZERO raster images, pure
 * text — the nociceptive definition, the four ▘-bulleted process rows,
 * and the neuropathic block). THE VLM CENSUS RAN THIS SESSION (unlike the
 * ph6–ph10 batch, which lost VLM to the 401 outage): glm-4.6v read the
 * 120-DPI full-page render and the 200-DPI bottom-half render
 * (staging-ph11/vlm-census.txt) and confirms no figures, photographs,
 * icons, or margin notes/mnemonics anywhere on the page. Drawn here with
 * original KYP glyphs: the PERIPHERY panel with the TRPV transducer glyph
 * (noxious stimulus chips → vanilloid ligand receptor → Ca2+ influx →
 * Na+ channel activation → the signal is born); the two fiber lanes
 * (Aδ solid fast lane, sharp/acute; C dashed slow lane, dull/throbbing/
 * chronic) running into the CNS panel (modulation → perception); the four
 * STATION CARDS (transduction → transmission → modulation → perception,
 * emergency → warning → neural → brand accents) with every station's
 * printed blocker chips docked beneath it and the 6·3·4·5 count chips;
 * the NEUROPATHIC PAIN panel (a nerve with multiplied, persistently
 * active voltage-gated Na+ channels firing with NO stimulus — example:
 * diabetic peripheral neuropathy); and the OVERLAP LEDGER (the printed
 * lists re-sorted by drug class). Nothing is reproduced from the book;
 * purely presentational (no props, no hooks, no external images). */

export function PainTransmissionMap() {
  const w = 1102;
  const h = 1082;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Pain Transmission & Analgesic Targets — the four-station relay (transduction → transmission → modulation → perception) with each station's printed blocker chips docked beneath it, the Aδ fast/sharp and C slow/dull fiber lanes running from the periphery into the CNS, the TRPV vanilloid transducer glyph (Ca2+ influx → Na+ channel activation), the neuropathic-pain panel (upregulated, persistently active voltage-gated Na+ channels with no stimulus — example: diabetic peripheral neuropathy), and the drug-class × station overlap ledger (original KYP diagram of book 235)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Pain transmission &amp; analgesic targets — four stations, ten drug classes (original KYP diagram)</text>
        <rect x="812" y="25" width="250" height="18" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">convert · carry · tune · feel</text>
      </g>

      {/* ===== ZONE A — THE NOCICEPTIVE RELAY ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="478" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE NOCICEPTIVE RELAY — from noxious stimulus to conscious pain (book 235, the printed four processes)</text>

        {/* ---------- PERIPHERY panel: the stimulus + the TRPV transducer glyph ---------- */}
        <g>
          <rect x="50" y="104" width="398" height="216" rx="12" className="fill-card stroke-emergency" />
          <text x="62" y="124" fontSize="4.6" fontWeight="800" className="fill-emergency">PERIPHERY — the stimulus meets its transducer</text>

          {/* noxious stimulus chips */}
          <text x="62" y="146" fontSize="4" fontWeight="800" className="fill-foreground">NOXIOUS STIMULUS</text>
          <rect x="62" y="152" width="118" height="18" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
          <text x="121" y="164.5" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">mechanical</text>
          <rect x="188" y="152" width="118" height="18" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
          <text x="247" y="164.5" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">thermal</text>
          <rect x="314" y="152" width="118" height="18" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
          <text x="373" y="164.5" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">chemical</text>

          {/* nociceptor terminal membrane */}
          <line x1="62" y1="196" x2="434" y2="196" className="stroke-border" strokeWidth="1.6" />
          <line x1="62" y1="224" x2="434" y2="224" className="stroke-border" strokeWidth="1.6" />
          {Array.from({ length: 21 }).map((_, i) => (
            <line key={`pt-${i}`} x1={66 + i * 18} y1="196" x2={66 + i * 18} y2="224" className="stroke-border" strokeWidth="0.7" />
          ))}
          <text x="434" y="192" textAnchor="end" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">EXTRACELLULAR</text>
          <text x="434" y="238" textAnchor="end" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">INSIDE THE TERMINAL</text>

          {/* TRPV vanilloid receptor channel */}
          <rect x="84" y="190" width="20" height="40" rx="3" className="fill-brand-soft stroke-brand" />
          <text x="112" y="200" fontSize="3.4" fontWeight="800" className="fill-muted-foreground">VANILLOID LIGAND</text>
          <text x="112" y="210" fontSize="3.2" className="fill-muted-foreground">RECEPTOR (TRPV)</text>

          {/* Ca2+ influx arrow — down into the terminal */}
          <line x1="94" y1="186" x2="94" y2="244" className="stroke-emergency" strokeWidth="1.6" />
          <path d="M 90 240 L 94 250 L 98 240 Z" className="fill-emergency" />
          <text x="108" y="252" fontSize="4.2" fontWeight="800" className="fill-emergency">Ca2+ INFLUX</text>

          {/* Ca2+ induces Na+ channel activation */}
          <path d="M 106 240 L 148 220" fill="none" className="stroke-foreground" strokeWidth="1.1" />
          <path d="M 145 216 L 152 218 L 147 224 Z" className="fill-foreground" />
          <text x="116" y="214" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">induces</text>

          {/* Na+ channel + activation spark */}
          <rect x="156" y="190" width="20" height="40" rx="3" className="fill-warning-soft stroke-warning" />
          <text x="184" y="200" fontSize="3.4" fontWeight="800" className="fill-muted-foreground">Na+ CHANNEL</text>
          <path d="M 156 252 L 161 244 L 166 252 L 171 242 L 176 252" fill="none" className="stroke-warning" strokeWidth="1.4" />
          <text x="166" y="266" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-warning">ACTIVATION</text>

          {/* the signal is born */}
          <path d="M 222 260 L 234 246 L 246 260 L 258 246 L 270 260 L 282 246 L 294 260 L 306 246 L 318 260" fill="none" className="stroke-emergency" strokeWidth="1.6" />
          <text x="270" y="280" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">THE SIGNAL IS BORN</text>
          <text x="270" y="292" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">a nerve impulse leaves the terminal</text>
          <text x="62" y="308" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TRANSDUCTION = CONVERT</text>
        </g>

        {/* ---------- the Aδ / C fiber fork ---------- */}
        <g>
          <circle cx="456" cy="220" r="5" className="fill-emergency" />
          <path d="M 448 220 H 456" className="stroke-emergency" strokeWidth="2" />

          {/* Aδ lane — solid, fast */}
          <path d="M 456 220 L 504 180 H 694" fill="none" className="stroke-emergency" strokeWidth="2.4" />
          <path d="M 690 175 L 700 180 L 690 185 Z" className="fill-emergency" />
          <text x="600" y="160" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">Aδ FIBERS</text>
          <text x="600" y="198" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">SHARP, ACUTE PAIN — the fast lane</text>

          {/* C lane — dashed, slow */}
          <path d="M 456 220 L 504 260 H 694" fill="none" className="stroke-emergency" strokeWidth="2.4" strokeDasharray="6 4" />
          <path d="M 690 255 L 700 260 L 690 265 Z" className="fill-emergency" />
          <text x="600" y="240" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">C FIBERS</text>
          <text x="600" y="280" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">DULL, THROBBING, CHRONIC PAIN — the slow lane</text>

          <text x="581" y="300" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">Aδ IS THE ARROW, C IS THE EMBER</text>
          <text x="581" y="312" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">two lanes, two feels — the transmission station</text>
        </g>

        {/* ---------- CNS panel: modulation then perception ---------- */}
        <g>
          <rect x="714" y="104" width="336" height="216" rx="12" className="fill-card stroke-neural" />
          <text x="726" y="124" fontSize="4.6" fontWeight="800" className="fill-neural">CNS — the signal is TUNED, then FELT</text>

          <ellipse cx="882" cy="150" rx="26" ry="15" className="fill-neural-soft stroke-neural" />
          <text x="882" y="153" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-neural">CNS</text>
          <line x1="882" y1="166" x2="882" y2="178" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 878 176 L 882 182 L 886 176 Z" className="fill-foreground" />

          <rect x="726" y="184" width="312" height="56" rx="10" className="fill-neural-soft/40 stroke-neural" />
          <text x="882" y="202" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-neural">3 · MODULATION — TUNE</text>
          <text x="882" y="216" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">the central gain applied to the arriving signal —</text>
          <text x="882" y="228" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">its volume turned up or down before consciousness</text>

          <line x1="882" y1="240" x2="882" y2="252" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 878 250 L 882 256 L 886 250 Z" className="fill-foreground" />

          <rect x="726" y="256" width="312" height="56" rx="10" className="fill-brand-soft/40 stroke-brand" />
          <text x="882" y="274" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-brand">4 · PERCEPTION — FEEL</text>
          <text x="882" y="288" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">the tuned signal becomes the</text>
          <text x="882" y="300" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">conscious experience of pain</text>
        </g>

        {/* ---------- the four station cards ---------- */}
        {/* card 1: TRANSDUCTION */}
        <g>
          <rect x="50" y="336" width="226" height="166" rx="12" className="fill-card stroke-emergency" />
          <rect x="50" y="336" width="226" height="22" rx="10" className="fill-emergency" />
          <text x="163" y="350.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">1 · TRANSDUCTION</text>
          <text x="163" y="372" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">CONVERT — the stimulus becomes a signal</text>
          <text x="163" y="388" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">vanilloid ligand receptors → Ca2+ influx →</text>
          <text x="163" y="400" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">Na+ channel activation at the nociceptor</text>
          <text x="62" y="420" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">BLOCKED BY — SIX CLASSES:</text>
          <rect x="60" y="428" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="109" y="441.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">local anesthetics</text>
          <rect x="166" y="428" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="215" y="441.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">α2-agonists</text>
          <rect x="60" y="452" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="109" y="465.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">gabapentinoids</text>
          <rect x="166" y="452" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="215" y="465.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">NSAIDs</text>
          <rect x="60" y="476" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="109" y="489.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">acetaminophen</text>
          <rect x="166" y="476" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="215" y="489.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">glucocorticoids</text>
        </g>

        {/* relay arrow 1→2 */}
        <line x1="280" y1="419" x2="304" y2="419" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 302 415 L 310 419 L 302 423 Z" className="fill-foreground" />

        {/* card 2: TRANSMISSION */}
        <g>
          <rect x="312" y="336" width="226" height="166" rx="12" className="fill-card stroke-warning" />
          <rect x="312" y="336" width="226" height="22" rx="10" className="fill-warning" />
          <text x="425" y="350.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">2 · TRANSMISSION</text>
          <text x="425" y="372" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-warning">CARRY — the signal travels to the CNS</text>
          <text x="425" y="388" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">conducted by the two fiber lanes —</text>
          <text x="425" y="400" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">Aδ (sharp/acute) and C (dull/chronic)</text>
          <text x="324" y="420" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">BLOCKED BY — THREE CLASSES:</text>
          <rect x="322" y="428" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="371" y="441.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">local anesthetics</text>
          <rect x="428" y="428" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="477" y="441.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">α2-agonists</text>
          <rect x="322" y="452" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="371" y="465.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">opioids</text>
        </g>

        {/* relay arrow 2→3 */}
        <line x1="542" y1="419" x2="566" y2="419" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 564 415 L 572 419 L 564 423 Z" className="fill-foreground" />

        {/* card 3: MODULATION */}
        <g>
          <rect x="574" y="336" width="226" height="166" rx="12" className="fill-card stroke-neural" />
          <rect x="574" y="336" width="226" height="22" rx="10" className="fill-neural" />
          <text x="687" y="350.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">3 · MODULATION</text>
          <text x="687" y="372" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-neural">TUNE — the central gain is set</text>
          <text x="687" y="388" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">the CNS turns the arriving signal's</text>
          <text x="687" y="400" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">volume up or down</text>
          <text x="586" y="420" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">BLOCKED BY — FOUR CLASSES:</text>
          <rect x="584" y="428" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="633" y="441.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">TCAs</text>
          <rect x="690" y="428" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="739" y="441.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">SSRIs</text>
          <rect x="584" y="452" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="633" y="465.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">SNRIs</text>
          <rect x="690" y="452" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="739" y="465.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">gabapentinoids</text>
        </g>

        {/* relay arrow 3→4 */}
        <line x1="804" y1="419" x2="828" y2="419" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 826 415 L 834 419 L 826 423 Z" className="fill-foreground" />

        {/* card 4: PERCEPTION */}
        <g>
          <rect x="836" y="336" width="226" height="166" rx="12" className="fill-card stroke-brand" />
          <rect x="836" y="336" width="226" height="22" rx="10" className="fill-brand" />
          <text x="949" y="350.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">4 · PERCEPTION</text>
          <text x="949" y="372" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">FEEL — the conscious experience</text>
          <text x="949" y="388" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">the tuned signal is registered</text>
          <text x="949" y="400" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">as pain by the mind</text>
          <text x="848" y="420" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">BLOCKED BY — FIVE CLASSES:</text>
          <rect x="846" y="428" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="895" y="441.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">α2-agonists</text>
          <rect x="952" y="428" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="1001" y="441.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">opioids</text>
          <rect x="846" y="452" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="895" y="465.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">TCAs</text>
          <rect x="952" y="452" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="1001" y="465.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">SSRIs</text>
          <rect x="846" y="476" width="98" height="20" rx="4" className="fill-secondary/60 stroke-border" />
          <text x="895" y="489.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">SNRIs</text>
        </g>

        {/* the 6·3·4·5 count chips */}
        <rect x="88" y="510" width="150" height="18" rx="9" className="fill-secondary/60 stroke-border" />
        <text x="163" y="522.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">SIX blocker classes</text>
        <rect x="350" y="510" width="150" height="18" rx="9" className="fill-secondary/60 stroke-border" />
        <text x="425" y="522.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">THREE blocker classes</text>
        <rect x="612" y="510" width="150" height="18" rx="9" className="fill-secondary/60 stroke-border" />
        <text x="687" y="522.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">FOUR blocker classes</text>
        <rect x="874" y="510" width="150" height="18" rx="9" className="fill-secondary/60 stroke-border" />
        <text x="949" y="522.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">FIVE blocker classes</text>
      </g>

      {/* ===== ZONE B — NEUROPATHIC PAIN ===== */}
      <g>
        <rect x="36" y="562" width="1030" height="174" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="584" fontSize="5.4" fontWeight="800" className="fill-foreground">NEUROPATHIC PAIN — the other fork: the channel is the disease</text>

        {/* the printed block */}
        <text x="52" y="606" fontSize="4.2" fontWeight="700" className="fill-foreground">Caused by neuronal dysfunction of the CNS or PNS.</text>
        <text x="52" y="624" fontSize="4.2" fontWeight="700" className="fill-foreground">Transmitted via upregulation and persistent</text>
        <text x="52" y="638" fontSize="4.2" fontWeight="700" className="fill-foreground">activation of voltage-gated Na+ channels.</text>
        <text x="52" y="660" fontSize="4.2" fontWeight="800" className="fill-emergency">Example: diabetic peripheral neuropathy.</text>
        <text x="52" y="684" fontSize="3.6" className="fill-muted-foreground">NOCICEPTIVE — the transducer is ON because of a stimulus.</text>
        <text x="52" y="696" fontSize="3.6" className="fill-muted-foreground">NEUROPATHIC — the channel is ON because of disease:</text>
        <text x="52" y="708" fontSize="3.6" className="fill-muted-foreground">there is no stimulus to remove.</text>

        {/* the upregulated-channel nerve glyph */}
        <text x="578" y="608" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">UPREGULATION — more voltage-gated Na+ channels than the nerve needs</text>
        <line x1="452" y1="614" x2="704" y2="614" className="stroke-warning" strokeWidth="1.2" />
        <line x1="452" y1="610" x2="452" y2="618" className="stroke-warning" strokeWidth="1.2" />
        <line x1="704" y1="610" x2="704" y2="618" className="stroke-warning" strokeWidth="1.2" />
        <line x1="440" y1="636" x2="780" y2="636" className="stroke-border" strokeWidth="1.6" />
        <line x1="440" y1="664" x2="780" y2="664" className="stroke-border" strokeWidth="1.6" />
        {[460, 516, 572, 628, 684].map((x) => (
          <g key={`na-${x}`}>
            <rect x={x} y="628" width="16" height="44" rx="3" className="fill-warning-soft stroke-warning" />
            <path d={`M ${x + 2} 678 L ${x + 5} 672 L ${x + 8} 678 L ${x + 11} 670 L ${x + 14} 678`} fill="none" className="stroke-warning" strokeWidth="1" />
          </g>
        ))}
        <path d="M 704 650 L 714 638 L 724 650 L 734 638 L 744 650 L 754 638 L 764 650 L 774 638 L 782 650" fill="none" className="stroke-emergency" strokeWidth="1.6" />
        <text x="620" y="695" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">PERSISTENT ACTIVATION</text>
        <text x="620" y="705" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">the ectopic train fires on its own</text>
        <rect x="424" y="690" width="150" height="20" rx="4" className="fill-emergency-soft/30 stroke-emergency" strokeDasharray="3 2" />
        <text x="499" y="703.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">NO STIMULUS NEEDED</text>

        {/* the example card */}
        <rect x="806" y="600" width="240" height="110" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="926" y="620" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">THE PRINTED EXAMPLE</text>
        <text x="926" y="642" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">DIABETIC PERIPHERAL</text>
        <text x="926" y="656" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">NEUROPATHY</text>
        <text x="926" y="678" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">burning · tingling · at rest —</text>
        <text x="926" y="690" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">the archetype of channel-driven pain</text>
      </g>

      {/* ===== ZONE C — THE OVERLAP LEDGER ===== */}
      <g>
        <rect x="36" y="750" width="1030" height="210" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="772" fontSize="5.4" fontWeight="800" className="fill-foreground">THE OVERLAP LEDGER — the printed lists, re-sorted by drug class (a KYP view of the same facts)</text>

        {/* header row */}
        <rect x="52" y="786" width="260" height="20" rx="4" className="fill-secondary stroke-border" />
        <text x="182" y="799.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">DRUG CLASS (list order)</text>
        <rect x="316" y="786" width="180" height="20" rx="4" className="fill-emergency" />
        <text x="406" y="799.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-card">TRANSDUCTION — CONVERT</text>
        <rect x="500" y="786" width="180" height="20" rx="4" className="fill-warning" />
        <text x="590" y="799.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-card">TRANSMISSION — CARRY</text>
        <rect x="684" y="786" width="180" height="20" rx="4" className="fill-neural" />
        <text x="774" y="799.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-card">MODULATION — TUNE</text>
        <rect x="868" y="786" width="180" height="20" rx="4" className="fill-brand" />
        <text x="958" y="799.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-card">PERCEPTION — FEEL</text>

        {/* rows: [label, t?, t?, m?, p?] */}
        {[
          ["LOCAL ANESTHETICS", 1, 1, 0, 0],
          ["α2-AGONISTS", 1, 1, 0, 1],
          ["GABAPENTINOIDS", 1, 0, 1, 0],
          ["NSAIDs · ACETAMINOPHEN · GLUCOCORTICOIDS", 1, 0, 0, 0],
          ["OPIOIDS", 0, 1, 0, 1],
          ["TCAs · SSRIs · SNRIs", 0, 0, 1, 1],
        ].map(([label, a, b, c, d], i) => {
          const y = 812 + i * 22;
          const cols = [
            { x: 316, on: a as number, cls: "fill-emergency" },
            { x: 500, on: b as number, cls: "fill-warning" },
            { x: 684, on: c as number, cls: "fill-neural" },
            { x: 868, on: d as number, cls: "fill-brand" },
          ];
          return (
            <g key={`ledger-${i}`}>
              <rect x="52" y={y} width="260" height="20" rx="4" className="fill-card stroke-border" />
              <text x="62" y={y + 13.5} fontSize="3.6" fontWeight="700" className="fill-foreground">{label as string}</text>
              {cols.map((col, j) => (
                <g key={`ledger-${i}-${j}`}>
                  <rect x={col.x} y={y} width="180" height="20" rx="4" className="fill-card stroke-border" />
                  {col.on ? (
                    <circle cx={col.x + 90} cy={y + 10} r="4.5" className={col.cls} />
                  ) : (
                    <text x={col.x + 90} y={y + 13.5} textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">—</text>
                  )}
                </g>
              ))}
            </g>
          );
        })}
        <text x="52" y="952" fontSize="3.4" className="fill-muted-foreground">● = the drug class prints on that station's blocker list. Only the anti-inflammatory trio is single-station (transduction alone); α2-agonists span three; the antidepressant trio doubles at the two central stations.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="974" width="1054" height="94" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="994" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 257 / book 235 (Pharmacology — Autonomic Drugs: Pain transmission, the BOTTOM half of a shared page)</text>
        <text x="42" y="1008" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images on pdf 257 — the Pain-transmission half is pure text (the nociceptive block, the four ▘-bulleted process rows, the neuropathic block). The VLM census RAN</text>
        <text x="42" y="1020" fontSize="4" className="fill-muted-foreground">this session (glm-4.6v on the 120-DPI and 200-DPI page renders — staging-ph11/vlm-census.txt): no figures, photographs, icons, or margin notes/mnemonics anywhere on the page, and the process</text>
        <text x="42" y="1032" fontSize="4" className="fill-muted-foreground">names print in bold under square bullets — so the relay map, fiber lanes, transducer glyph, neuropathic panel, and overlap ledger are an ORIGINAL KYP design (nothing to reproduce).</text>
        <text x="42" y="1044" fontSize="4" className="fill-muted-foreground">SHARED PAGE (the p196 convention): the TOP half (Acetylcholine receptors — NN, NM, M1–5) is the sibling topic acetylcholine-receptors; only the Pain half's lines 19–36 + the indd footer are quoted.</text>
        <text x="42" y="1056" fontSize="4" className="fill-muted-foreground">Text-layer quirks carried: α2-agonists and Aδ print with Greek letters; &quot;Ca2+ influx–induced&quot; carries an en dash; each process row prefixes a 0x83 control artifact before its ▘ bullet (not carried).</text>
      </g>
    </svg>
  );
}
