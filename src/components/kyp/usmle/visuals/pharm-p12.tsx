/* Pharmacology — PH-batch 12: Micturition control (pdf 258 TOP half / book
 * 236). Original KYP REDRAW of the source page's bladder-innervation
 * figure. Census (pdfimages + VLM, available this session — three passes;
 * see .usmle-pipeline-cache/staging-ph12/vlm-census.txt): the figure is a
 * mixed composite — THREE spot-color raster objects (426x336, 383x518,
 * 458x277 @316ppi) are the white-silhouette anatomy layers of the bladder
 * illustration, while every label, leader line, the pons text block, the
 * mnemonic, and the whole DRUGS/MECHANISM/APPLICATIONS table are live
 * vector text. Redrawn here with original KYP glyphs: the MICTURITION
 * CENTER IN PONS band with the printed opposition (⊕ sympathetic →
 * ↑ urinary retention vs ⊕ parasympathetic → ↑ urine voiding) and First
 * Aid's own mnemonic chip ("Baby one more time." — B-o-m-t, the red
 * initials of bethanechol/oxybutynin/mirabegron/tamsulosin in printed row
 * order); the wiring map — a bladder glyph with its Detrusor muscle wall,
 * funnel neck and urethra carrying the two gates (Internal urethral
 * sphincter, smooth muscle with the α₁-receptor chip ❸; External urethral
 * sphincter, striated skeletal muscle with the Nicotinic receptor chip),
 * the three nerve paths from the left (Pelvic nerve, parasympathetic →
 * M₃-receptor chip ❶ on the detrusor; Hypogastric nerve, sympathetic →
 * β₃-receptor chip ❷ on the detrusor AND the α₁ chip at the internal
 * sphincter; Pudendal nerve, somatic → the nicotinic chip at the external
 * sphincter) — the book's own dark-teal numbered circles ❶❷❸ preserved at
 * the receptor chips and repeated on the drug cards; the retention-vs-
 * voiding fork band; and the four printed drug rows as dock cards
 * (verbatim mechanisms + applications). All printed labels are the
 * source's own, rendered verbatim; the glyph design is an ORIGINAL KYP
 * redraw. Nothing is reproduced from the book; purely presentational
 * (no props, no hooks, no external images). */

export function MicturitionMap() {
  const w = 1102;
  const h = 1208;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Micturition Control: The Bladder Pharmacology — the bladder wiring map redrawn as original KYP art: the pontine micturition center with the sympathetic retention vs parasympathetic voiding opposition and First Aid's 'Baby one more time' mnemonic; the bladder glyph with its detrusor muscle, internal urethral sphincter (alpha-1 receptor) and external urethral sphincter (nicotinic receptor); the three nerve paths — pelvic nerve (parasympathetic input) to the M3 receptor on the detrusor, hypogastric nerve (sympathetic input) to the beta-3 receptor on the detrusor and the alpha-1 receptor at the internal sphincter, pudendal nerve (somatic input) to the nicotinic receptor at the external sphincter — plus the retention-vs-voiding fork and the four printed drug rows (bethanechol, oxybutynin, mirabegron, tamsulosin) as dock cards (redraw of book 236)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Micturition Control — three nerves, two sphincters, one balance (original KYP redraw)</text>
        <rect x="826" y="25" width="236" height="18" className="fill-brand-soft" />
        <text x="944" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">storage vs voiding · four drug rows</text>
      </g>

      {/* ===== ZONE A — THE PONTINE CENTER ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="120" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">MICTURITION CENTER IN PONS — the printed coordination text (book 236)</text>
        <ellipse cx="132" cy="126" rx="66" ry="22" className="fill-card stroke-brand" />
        <text x="132" y="124" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">MICTURITION</text>
        <text x="132" y="135" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">CENTER IN PONS</text>
        <text x="132" y="156" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the involuntary coordinator</text>
        <text x="228" y="112" fontSize="4.2" className="fill-foreground">Regulates involuntary bladder function via coordination of sympathetic and</text>
        <text x="228" y="124" fontSize="4.2" className="fill-foreground">parasympathetic nervous systems. Some autonomic drugs act on smooth muscle</text>
        <text x="228" y="136" fontSize="4.2" className="fill-foreground">receptors to treat bladder dysfunction.</text>
        <rect x="228" y="146" width="256" height="20" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="356" y="159.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">⊕ sympathetic → ↑ urinary retention</text>
        <rect x="496" y="146" width="272" height="20" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="632" y="159.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">⊕ parasympathetic → ↑ urine voiding</text>
        <rect x="786" y="104" width="264" height="76" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="798" y="119" fontSize="3.4" fontWeight="800" className="fill-foreground">FIRST AID&apos;S PRINTED MNEMONIC (book 236)</text>
        <text x="798" y="137" fontSize="5.2" fontWeight="800" className="fill-foreground">
          <tspan className="fill-emergency">B</tspan>aby <tspan className="fill-emergency">o</tspan>ne <tspan className="fill-emergency">m</tspan>ore <tspan className="fill-emergency">t</tspan>ime.
        </text>
        <text x="798" y="151" fontSize="3.2" className="fill-muted-foreground">B-o-m-t (red in the book) = the four example drugs,</text>
        <text x="798" y="161" fontSize="3.2" className="fill-muted-foreground">printed row order: bethanechol · oxybutynin · mirabegron ·</text>
        <text x="798" y="171" fontSize="3.2" className="fill-muted-foreground">tamsulosin — each initial prints red in the table</text>
      </g>

      {/* ===== ZONE B — THE WIRING MAP ===== */}
      <g>
        <rect x="36" y="200" width="1030" height="520" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="222" fontSize="5.4" fontWeight="800" className="fill-foreground">THE WIRING MAP — three nerves, one bladder, two sphincters, four receptor chips (book 236 figure, redrawn)</text>

        {/* ---- left column: the three nerves ---- */}
        <rect x="52" y="252" width="188" height="46" rx="8" className="fill-card stroke-brand" />
        <text x="64" y="268" fontSize="4.4" fontWeight="800" className="fill-brand">Pelvic nerve</text>
        <text x="64" y="280" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(parasympathetic</text>
        <text x="64" y="290" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">input)</text>
        <rect x="52" y="352" width="188" height="46" rx="8" className="fill-card stroke-emergency" />
        <text x="64" y="368" fontSize="4.4" fontWeight="800" className="fill-emergency">Hypogastric nerve</text>
        <text x="64" y="380" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(sympathetic</text>
        <text x="64" y="390" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">input)</text>
        <rect x="52" y="468" width="188" height="46" rx="8" className="fill-card stroke-warning" />
        <text x="64" y="484" fontSize="4.4" fontWeight="800" className="fill-warning">Pudendal nerve</text>
        <text x="64" y="496" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(somatic</text>
        <text x="64" y="506" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">input)</text>

        {/* ---- nerve lines ---- */}
        <path d="M 240 272 C 320 272, 370 260, 470 260" fill="none" className="stroke-brand" strokeWidth="2" />
        <path d="M 466 260 L 476 254 L 474 266 Z" className="fill-brand" />
        <text x="286" y="252" fontSize="3.2" fontWeight="700" className="fill-brand">the voiding line — ends on the detrusor (M₃ site)</text>
        <path d="M 240 372 C 310 372, 370 352, 470 352" fill="none" className="stroke-emergency" strokeWidth="2" />
        <path d="M 466 352 L 476 346 L 474 358 Z" className="fill-emergency" />
        <path d="M 300 372 C 350 410, 440 462, 576 484" fill="none" className="stroke-emergency" strokeWidth="2" />
        <path d="M 572 480 L 584 486 L 574 492 Z" className="fill-emergency" />
        <text x="262" y="340" fontSize="3.2" fontWeight="700" className="fill-emergency">the storage line — branches to the</text>
        <text x="262" y="349" fontSize="3.2" fontWeight="700" className="fill-emergency">detrusor (β₃ site) and the internal gate (α₁)</text>
        <path d="M 240 490 C 330 500, 420 556, 580 572" fill="none" className="stroke-warning" strokeWidth="2" />
        <path d="M 576 566 L 588 574 L 576 580 Z" className="fill-warning" />
        <text x="262" y="530" fontSize="3.2" fontWeight="700" className="fill-warning">the voluntary somatic line — ends on the</text>
        <text x="262" y="539" fontSize="3.2" fontWeight="700" className="fill-warning">external sphincter (nicotinic site)</text>

        {/* ---- the bladder glyph ---- */}
        <path d="M 470 382 C 470 252, 542 190, 640 190 C 738 190, 810 252, 810 382 C 810 420, 772 446, 722 452 L 558 452 C 508 446, 470 420, 470 382 Z" className="fill-card stroke-foreground" strokeWidth="1.6" />
        <path d="M 484 378 C 484 260, 548 204, 640 204 C 732 204, 796 260, 796 378 C 796 410, 764 432, 720 437 L 560 437 C 516 432, 484 410, 484 378 Z" fill="none" className="stroke-border" strokeWidth="1.1" strokeDasharray="5 3" />
        <text x="640" y="252" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-foreground">Detrusor muscle</text>
        <text x="640" y="264" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(smooth muscle — the pump)</text>
        <path d="M 520 396 Q 560 384, 600 396 Q 640 408, 680 396 Q 720 384, 760 396" fill="none" className="stroke-border" strokeWidth="1" />
        <path d="M 540 416 Q 580 406, 620 416 Q 660 426, 700 416" fill="none" className="stroke-border" strokeWidth="1" />

        {/* funnel neck + urethra */}
        <path d="M 558 452 L 612 472 L 612 668" fill="none" className="stroke-foreground" strokeWidth="1.3" />
        <path d="M 722 452 L 668 472 L 668 668" fill="none" className="stroke-foreground" strokeWidth="1.3" />

        {/* internal urethral sphincter — smooth ovoid masses (α₁) */}
        <ellipse cx="598" cy="492" rx="17" ry="14" className="fill-emergency-soft/40 stroke-emergency" />
        <ellipse cx="682" cy="492" rx="17" ry="14" className="fill-emergency-soft/40 stroke-emergency" />

        {/* external urethral sphincter — striated band (somatic) */}
        <rect x="590" y="556" width="100" height="28" rx="12" className="fill-warning-soft/40 stroke-warning" />
        <path d="M 602 570 L 610 562 L 618 578 L 626 562 L 634 578 L 642 562 L 650 578 L 658 562 L 666 578 L 674 562 L 680 570" fill="none" className="stroke-warning" strokeWidth="1" />

        {/* ---- right column: receptor chips + sphincter labels (source order) ---- */}
        <rect x="840" y="228" width="208" height="36" rx="8" className="fill-card stroke-brand" />
        <circle cx="856" cy="246" r="8.5" className="fill-brand" />
        <text x="856" y="249" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">1</text>
        <text x="872" y="243" fontSize="4.6" fontWeight="800" className="fill-foreground">M₃-receptor</text>
        <text x="872" y="255" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">detrusor — contraction (voiding)</text>
        <path d="M 838 244 L 804 264" className="stroke-foreground" strokeWidth="1" />
        <path d="M 802 258 L 798 268 L 808 266 Z" className="fill-foreground" />

        <rect x="840" y="314" width="208" height="36" rx="8" className="fill-card stroke-emergency" />
        <circle cx="856" cy="332" r="8.5" className="fill-emergency" />
        <text x="856" y="335" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">2</text>
        <text x="872" y="329" fontSize="4.6" fontWeight="800" className="fill-foreground">β₃-receptor</text>
        <text x="872" y="341" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">detrusor — relaxation (storage)</text>
        <path d="M 838 330 L 800 350" className="stroke-foreground" strokeWidth="1" />
        <path d="M 798 344 L 794 354 L 804 352 Z" className="fill-foreground" />

        <rect x="840" y="422" width="208" height="36" rx="8" className="fill-card stroke-emergency" />
        <circle cx="856" cy="440" r="8.5" className="fill-emergency" />
        <text x="856" y="443" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">3</text>
        <text x="872" y="437" fontSize="4.6" fontWeight="800" className="fill-foreground">α₁-receptor</text>
        <text x="872" y="449" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">internal sphincter — contraction</text>
        <path d="M 838 440 L 690 482" className="stroke-foreground" strokeWidth="1" />
        <path d="M 692 474 L 684 484 L 696 486 Z" className="fill-foreground" />

        <text x="844" y="478" fontSize="4.2" fontWeight="800" className="fill-foreground">Internal urethral</text>
        <text x="844" y="489" fontSize="4.2" fontWeight="800" className="fill-foreground">sphincter</text>
        <text x="844" y="500" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(smooth muscle — autonomic)</text>
        <path d="M 842 496 L 706 498" className="stroke-foreground" strokeWidth="1" />
        <path d="M 708 492 L 698 498 L 708 504 Z" className="fill-foreground" />

        <text x="844" y="544" fontSize="4.2" fontWeight="800" className="fill-foreground">External urethral</text>
        <text x="844" y="555" fontSize="4.2" fontWeight="800" className="fill-foreground">sphincter</text>
        <text x="844" y="566" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(skeletal muscle — somatic)</text>
        <path d="M 842 562 L 696 568" className="stroke-foreground" strokeWidth="1" />
        <path d="M 698 562 L 688 568 L 698 574 Z" className="fill-foreground" />

        <rect x="840" y="596" width="208" height="36" rx="8" className="fill-card stroke-warning" />
        <text x="852" y="611" fontSize="4.6" fontWeight="800" className="fill-foreground">Nicotinic receptor</text>
        <text x="852" y="623" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">external sphincter — voluntary hold</text>
        <path d="M 838 618 L 694 584" className="stroke-foreground" strokeWidth="1" />
        <path d="M 694 590 L 684 582 L 688 594 Z" className="fill-foreground" />

        {/* wiring-zone footnote */}
        <text x="52" y="704" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">MARKERS: one detrusor, TWO opposite levers (M₃ contract / β₃ relax) · the hypogastric line branches to BOTH storage targets (β₃ detrusor + α₁ gate) ·</text>
        <text x="52" y="713" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the numbered circles ❶❷❸ are the book&apos;s own figure-to-table cross-reference — they repeat on the drug cards below</text>
      </g>

      {/* ===== ZONE C — THE RETENTION vs VOIDING FORK ===== */}
      <g>
        <rect x="36" y="736" width="1030" height="120" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="758" fontSize="5.4" fontWeight="800" className="fill-foreground">THE RETENTION ↔ VOIDING BALANCE — what each division builds (the pons text&apos;s two arrows)</text>
        <rect x="52" y="772" width="490" height="72" rx="10" className="fill-card stroke-emergency" />
        <text x="68" y="790" fontSize="4.6" fontWeight="800" className="fill-emergency">SYMPATHETIC — storage (↑ urinary retention)</text>
        <text x="68" y="806" fontSize="4.2" fontWeight="700" className="fill-foreground">β₃-receptor → detrusor RELAXATION — a compliant reservoir</text>
        <text x="68" y="818" fontSize="4.2" fontWeight="700" className="fill-foreground">α₁-receptor → internal sphincter CONTRACTION — gate shut</text>
        <text x="68" y="834" fontSize="4.2" fontWeight="800" className="fill-emergency">⇒ the storage state: fill and hold</text>
        <rect x="558" y="772" width="490" height="72" rx="10" className="fill-card stroke-brand" />
        <text x="574" y="790" fontSize="4.6" fontWeight="800" className="fill-brand">PARASYMPATHETIC — emptying (↑ urine voiding)</text>
        <text x="574" y="806" fontSize="4.2" fontWeight="700" className="fill-foreground">M₃-receptor → detrusor CONTRACTION — the pump squeezes</text>
        <text x="574" y="818" fontSize="4.2" fontWeight="700" className="fill-foreground">pelvic nerve (parasympathetic input) — the voiding lever</text>
        <text x="574" y="834" fontSize="4.2" fontWeight="800" className="fill-brand">⇒ the voiding state: empty the bladder</text>
        <text x="551" y="850" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the SOMATIC third rail: pudendal nerve → nicotinic receptor → external sphincter (voluntary hold) — outside the pontine coordination</text>
      </g>

      {/* ===== ZONE D — THE FOUR DRUG ROWS (DOCK CARDS) ===== */}
      <g>
        <rect x="36" y="872" width="1030" height="252" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="894" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FOUR PRINTED DRUG ROWS — dock cards (book 236 table, verbatim; ❶❶❷❸ = the figure&apos;s receptor chips)</text>

        {/* row 1 — Muscarinic agonists */}
        <rect x="52" y="906" width="1000" height="44" rx="8" className="fill-card stroke-brand" />
        <circle cx="72" cy="928" r="9" className="fill-brand" />
        <text x="72" y="931" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-card">1</text>
        <text x="90" y="924" fontSize="4.4" fontWeight="800" className="fill-foreground">Muscarinic agonists</text>
        <text x="90" y="937" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(eg, bethanechol)</text>
        <text x="330" y="931" fontSize="4.2" fontWeight="700" className="fill-foreground">⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying</text>
        <rect x="856" y="916" width="186" height="24" rx="6" className="fill-brand-soft" />
        <text x="949" y="931.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">Urinary retention</text>

        {/* row 2 — Muscarinic antagonists */}
        <rect x="52" y="958" width="1000" height="44" rx="8" className="fill-card stroke-brand" />
        <circle cx="72" cy="980" r="9" className="fill-brand" />
        <text x="72" y="983" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-card">1</text>
        <text x="90" y="976" fontSize="4.4" fontWeight="800" className="fill-foreground">Muscarinic antagonists</text>
        <text x="90" y="989" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(eg, oxybutynin)</text>
        <text x="330" y="983" fontSize="4.2" fontWeight="700" className="fill-foreground">⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity</text>
        <rect x="856" y="968" width="186" height="24" rx="6" className="fill-brand-soft" />
        <text x="949" y="983.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">Urgency incontinence</text>

        {/* row 3 — Sympathomimetics */}
        <rect x="52" y="1010" width="1000" height="44" rx="8" className="fill-card stroke-emergency" />
        <circle cx="72" cy="1032" r="9" className="fill-emergency" />
        <text x="72" y="1035" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-card">2</text>
        <text x="90" y="1028" fontSize="4.4" fontWeight="800" className="fill-foreground">Sympathomimetics</text>
        <text x="90" y="1041" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(eg, mirabegron)</text>
        <text x="330" y="1035" fontSize="4.2" fontWeight="700" className="fill-foreground">⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity</text>
        <rect x="856" y="1020" width="186" height="24" rx="6" className="fill-emergency-soft/30" />
        <text x="949" y="1035.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Urgency incontinence</text>

        {/* row 4 — α1-antagonists */}
        <rect x="52" y="1062" width="1000" height="44" rx="8" className="fill-card stroke-emergency" />
        <circle cx="72" cy="1084" r="9" className="fill-emergency" />
        <text x="72" y="1087" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-card">3</text>
        <text x="90" y="1080" fontSize="4.4" fontWeight="800" className="fill-foreground">α₁-antagonists</text>
        <text x="90" y="1093" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(eg, tamsulosin)</text>
        <text x="330" y="1087" fontSize="4.2" fontWeight="700" className="fill-foreground">⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction</text>
        <rect x="856" y="1072" width="186" height="24" rx="6" className="fill-emergency-soft/30" />
        <text x="949" y="1087.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">BPH</text>

        <text x="52" y="1117" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">TWO ROADS TO URGE: rows 2 and 3 share the application through OPPOSITE receptor moves (⊝ M₃ / ⊕ β₃), both converging on detrusor relaxation —</text>
        <text x="52" y="1126" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">TWO WAYS TO FLOW: rows 1 and 4 restore outflow by opposite tissue targets (the pump ⊕ M₃ vs the gate ⊝ α₁)</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1136" width="1054" height="58" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1154" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 258 / book 236 (Pharmacology — Autonomic Drugs: Micturition control)</text>
        <text x="42" y="1167" fontSize="4" className="fill-muted-foreground">Census: pdfimages finds THREE spot-color raster objects on the page (the white-silhouette anatomy layers of the bladder illustration); every label, the</text>
        <text x="42" y="1178" fontSize="4" className="fill-muted-foreground">pons text, the mnemonic, and the table are live vector text (VLM read, three passes — staging-ph12/vlm-census.txt). This diagram is an ORIGINAL KYP</text>
        <text x="42" y="1189" fontSize="4" className="fill-muted-foreground">REDRAW preserving every printed label, the three nerves, the two sphincters, the ❶❷❸ cross-reference circles, and the retention/voiding opposition.</text>
      </g>
    </svg>
  );
}
