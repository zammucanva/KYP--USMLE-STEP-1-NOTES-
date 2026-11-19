/* Pharmacology — AUTONOMIC DRUGS (PH9): Autonomic receptors (pdf 256
 * bottom half / book 234). Original KYP redraw of the source page's ONE
 * large VECTOR WIRING FIGURE (pdfimages census: ZERO raster images on the
 * page; the z-ai VLM census was attempted twice on ph9-vlm-census.ts and
 * failed 401 missing X-Token both times, so the census stands on
 * pdfimages + the text layer). Redrawn here with original KYP glyphs:
 * a CNS band (Brainstem / Spinal cord / Voluntary motor nerve) feeding
 * three columns — PARASYMPATHETIC (long preganglionic fiber -> Nn near
 * the target -> short postganglionic ACh fiber -> M1/M2/M3 target cell),
 * SYMPATHETIC (short preganglionic fiber -> Nn chain glyph -> long
 * postganglionic NE fiber -> alpha/beta target cell), SOMATIC (one ACh
 * fiber -> NMJ zigzag with Nm chip -> Skeletal muscle) — plus the
 * exceptions band (the adrenal medulla's DIRECT preganglionic line
 * releasing Epi/NE into a Blood (catecholamine transmission) vessel
 * glyph; the sweat gland's cholinergic ACh exception with its M3 chip
 * and the source's own "chold" sweat quote carried verbatim; the renal
 * vasculature's unique alpha1/alpha2/beta1/D1 chip), the receptor-chip
 * address band, and the three-rules band. All printed labels are the
 * source's own, rendered verbatim; the glyph design is an ORIGINAL KYP
 * redraw. Nothing is reproduced from the book; purely presentational
 * (no props, no hooks, no external images). */

export function AutonomicOrganMap() {
  const w = 1102;
  const h = 1176;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Autonomic receptors — the autonomic vs somatic wiring map redrawn as original KYP art: a CNS band (brainstem, spinal cord, voluntary motor nerve) feeding three columns — parasympathetic (long preganglionic fiber, Nn near the target, short postganglionic ACh fiber, M1 M2 M3 target chips), sympathetic (short preganglionic fiber, sympathetic-chain Nn, long postganglionic NE fiber, alpha and beta chips), and somatic (one ACh fiber onto Nm at the neuromuscular junction of skeletal muscle) — plus the adrenal medulla's direct line releasing Epi/NE into blood, the sweat gland's cholinergic exception with M3 and the source's chold-sweat quote, the renal D1 chip, and the three printed rules (redraw of book 234)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Autonomic receptors — the autonomic vs somatic wiring map (original KYP redraw)</text>
        <rect x="838" y="24" width="222" height="18" className="fill-brand-soft" />
        <text x="949" y="37" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">every fiber · every transmitter · every receptor chip</text>
      </g>

      {/* ===== CNS BAND — THE THREE ORIGINS ===== */}
      <g>
        <rect x="36" y="74" width="1030" height="72" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CNS ORIGINS — the figure&apos;s three starting points</text>
        <ellipse cx="150" cy="114" rx="48" ry="18" className="fill-card stroke-brand" />
        <text x="150" y="117" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">Brainstem</text>
        <text x="150" y="136" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">parasympathetic origin — craniosacral outflow</text>
        <rect x="430" y="96" width="200" height="36" rx="12" className="fill-card stroke-emergency" />
        <text x="530" y="110" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-emergency">Spinal cord</text>
        <text x="530" y="126" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">sympathetic origin — thoracolumbar outflow</text>
        <rect x="770" y="96" width="270" height="36" rx="12" className="fill-card stroke-warning" />
        <text x="905" y="110" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">Voluntary motor nerve</text>
        <text x="905" y="126" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">somatic origin — one neuron, no ganglion</text>
      </g>

      {/* ===== COLUMN 1 — PARASYMPATHETIC ===== */}
      <g>
        <rect x="36" y="158" width="336" height="468" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="182" fontSize="5" fontWeight="800" className="fill-brand">AUTONOMIC — PARASYMPATHETIC</text>
        <text x="204" y="200" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">↓ from the Brainstem — craniosacral outflow</text>
        <line x1="204" y1="208" x2="204" y2="312" className="stroke-brand" strokeWidth="2.4" />
        <text x="216" y="252" fontSize="3.9" fontWeight="800" className="fill-foreground">Preganglionic neuron (long)</text>
        <text x="216" y="261" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the ganglion sits near the target</text>
        <rect x="188" y="272" width="32" height="14" rx="4" className="fill-card stroke-brand" />
        <text x="204" y="282.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">ACh</text>
        <rect x="178" y="312" width="52" height="24" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="204" y="329" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-brand">Nn</text>
        <text x="204" y="347" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">ganglion on/near the target</text>
        <line x1="204" y1="336" x2="204" y2="414" className="stroke-brand" strokeWidth="2.4" />
        <text x="216" y="374" fontSize="3.9" fontWeight="800" className="fill-foreground">Postganglionic neuron (short)</text>
        <rect x="188" y="384" width="32" height="14" rx="4" className="fill-card stroke-brand" />
        <text x="204" y="394.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">ACh</text>
        <rect x="76" y="414" width="256" height="88" rx="12" className="fill-card stroke-brand" />
        <rect x="100" y="426" width="44" height="17" rx="4" className="fill-brand-soft stroke-brand" />
        <text x="122" y="438.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">M₁</text>
        <rect x="152" y="426" width="44" height="17" rx="4" className="fill-brand-soft stroke-brand" />
        <text x="174" y="438.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">M₂</text>
        <rect x="204" y="426" width="44" height="17" rx="4" className="fill-brand-soft stroke-brand" />
        <text x="226" y="438.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">M₃</text>
        <text x="204" y="460" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Smooth muscle, gland cells,</text>
        <text x="204" y="469" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">nerve terminals, cardiac muscle</text>
        <text x="204" y="482" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the parasympathetic target cell</text>
        <text x="52" y="524" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">MARKERS: preganglionic LONG → Nn near the target → postganglionic SHORT</text>
        <text x="52" y="533" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">both fibers cholinergic — ACh onto Nn, then ACh onto M₁, M₂, M₃</text>
        <text x="52" y="542" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">origin: Brainstem + pelvic splanchnic nerves (rule 1)</text>
        <text x="52" y="551" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">CNs III, VII, IX, X carry its cranial fibers (rule 1)</text>
      </g>

      {/* ===== COLUMN 2 — SYMPATHETIC ===== */}
      <g>
        <rect x="384" y="158" width="334" height="468" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="400" y="182" fontSize="5" fontWeight="800" className="fill-emergency">AUTONOMIC — SYMPATHETIC</text>
        <text x="551" y="200" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">↓ from the Spinal cord — thoracolumbar outflow</text>
        <line x1="551" y1="208" x2="551" y2="264" className="stroke-emergency" strokeWidth="2.4" />
        <text x="563" y="230" fontSize="3.9" fontWeight="800" className="fill-foreground">Preganglionic neuron (short)</text>
        <text x="563" y="239" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the ganglion sits near the cord</text>
        <rect x="535" y="244" width="32" height="14" rx="4" className="fill-card stroke-emergency" />
        <text x="551" y="254.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">ACh</text>
        <rect x="515" y="264" width="72" height="64" rx="10" className="fill-card stroke-emergency" />
        <circle cx="551" cy="280" r="8.5" className="fill-emergency-soft stroke-emergency" />
        <text x="551" y="283.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">Nn</text>
        <circle cx="551" cy="298" r="8.5" className="fill-emergency-soft stroke-emergency" />
        <text x="551" y="301.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">Nn</text>
        <circle cx="551" cy="316" r="8.5" className="fill-emergency-soft stroke-emergency" />
        <text x="551" y="319.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">Nn</text>
        <text x="596" y="284" fontSize="3.8" fontWeight="800" className="fill-foreground">Sympathetic</text>
        <text x="596" y="293" fontSize="3.8" fontWeight="800" className="fill-foreground">chain</text>
        <text x="596" y="303" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">chain ganglia</text>
        <text x="596" y="311" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">near the cord</text>
        <line x1="551" y1="328" x2="551" y2="414" className="stroke-emergency" strokeWidth="2.4" />
        <text x="563" y="364" fontSize="3.9" fontWeight="800" className="fill-foreground">Postganglionic neuron (long)</text>
        <rect x="533" y="376" width="34" height="15" rx="4" className="fill-card stroke-emergency" />
        <text x="550" y="387.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">NE</text>
        <rect x="410" y="414" width="282" height="88" rx="12" className="fill-card stroke-emergency" />
        <rect x="430" y="426" width="42" height="17" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="451" y="438.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">α1</text>
        <rect x="480" y="426" width="42" height="17" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="501" y="438.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">α2</text>
        <rect x="530" y="426" width="42" height="17" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="551" y="438.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">β1</text>
        <rect x="580" y="426" width="42" height="17" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="601" y="438.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">β2</text>
        <text x="551" y="460" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Smooth muscle, gland cells, nerve terminals,</text>
        <text x="551" y="469" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">cardiac muscle — and Cardiac muscle, vessels</text>
        <text x="551" y="482" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the sympathetic target cell</text>
        <text x="400" y="524" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">MARKERS: preganglionic SHORT → chain Nn → postganglionic LONG</text>
        <text x="400" y="533" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">ACh onto Nn in the chain, then NE onto α1, α2, β1, β2</text>
        <text x="400" y="542" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">renal vasculature carries its own chip: α1, α2, β1, D1 (below)</text>
        <text x="400" y="551" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">exceptions: adrenal medulla · sweat glands · renal vasculature</text>
      </g>

      {/* ===== COLUMN 3 — SOMATIC ===== */}
      <g>
        <rect x="730" y="158" width="336" height="468" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="746" y="182" fontSize="5" fontWeight="800" className="fill-warning">SOMATIC</text>
        <text x="898" y="200" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">↓ the Voluntary motor nerve — one neuron</text>
        <line x1="898" y1="208" x2="898" y2="372" className="stroke-warning" strokeWidth="2.4" />
        <text x="910" y="280" fontSize="3.9" fontWeight="800" className="fill-foreground">Voluntary motor nerve</text>
        <text x="910" y="289" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">ONE neuron — no ganglion,</text>
        <text x="910" y="297" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">no autonomic receptor</text>
        <rect x="882" y="312" width="32" height="14" rx="4" className="fill-card stroke-warning" />
        <text x="898" y="322.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-warning">ACh</text>
        <text x="898" y="368" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Neuromuscular junction</text>
        <rect x="830" y="376" width="136" height="40" rx="10" className="fill-card stroke-warning" />
        <path d="M 842 396 L 854 386 L 866 406 L 878 386 L 890 406 L 902 386 L 914 406 L 926 386 L 938 406 L 950 386 L 956 396" className="stroke-warning" fill="none" strokeWidth="1.2" />
        <rect x="874" y="424" width="48" height="18" rx="4" className="fill-warning-soft stroke-warning" />
        <text x="898" y="437" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">Nm</text>
        <text x="898" y="453" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">nicotinic-MUSCLE — the motor end plate</text>
        <rect x="800" y="462" width="196" height="42" rx="10" className="fill-card stroke-warning" />
        <text x="898" y="477" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-warning">Skeletal muscle</text>
        <g className="stroke-warning" strokeWidth="0.9">
          <line x1="824" y1="500" x2="844" y2="484" />
          <line x1="854" y1="500" x2="874" y2="484" />
          <line x1="884" y1="500" x2="904" y2="484" />
          <line x1="914" y1="500" x2="934" y2="484" />
          <line x1="944" y1="500" x2="964" y2="484" />
        </g>
        <text x="898" y="514" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the somatic end-target (voluntary)</text>
        <text x="746" y="524" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">MARKERS: one ACh fiber → Nm at the NMJ → Skeletal muscle</text>
        <text x="746" y="533" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">SOMATIC is NOT autonomic — the figure prints its own column</text>
        <text x="746" y="542" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">ganglionic (Nn) blockers SPARE this junction (Nm ≠ Nn)</text>
        <text x="746" y="551" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">neuromuscular blockers act HERE — and nowhere else on the map</text>
      </g>

      {/* ===== EXCEPTIONS BAND ===== */}
      <g>
        <rect x="36" y="640" width="1030" height="272" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="662" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SYMPATHETIC EXCEPTIONS &amp; UNIQUE CHIPS — where the default wiring breaks</text>

        {/* EXCEPTION 1 — adrenal medulla */}
        <rect x="52" y="676" width="304" height="164" rx="10" className="fill-card stroke-emergency" />
        <text x="66" y="694" fontSize="4.4" fontWeight="800" className="fill-emergency">EXCEPTION 1 — the direct adrenal line</text>
        <rect x="64" y="714" width="58" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="93" y="725" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">Spinal cord</text>
        <line x1="122" y1="722" x2="176" y2="722" className="stroke-emergency" strokeWidth="1.8" />
        <rect x="132" y="715" width="30" height="14" rx="4" className="fill-card stroke-emergency" />
        <text x="147" y="725.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">ACh</text>
        <text x="149" y="744" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">direct preganglionic line</text>
        <rect x="176" y="706" width="70" height="32" rx="8" className="fill-emergency-soft stroke-emergency" />
        <text x="211" y="719" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">Adrenal gland</text>
        <text x="211" y="728" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-emergency">(medulla)</text>
        <rect x="240" y="742" width="26" height="13" rx="3" className="fill-card stroke-emergency" />
        <text x="253" y="751.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">Nn</text>
        <line x1="246" y1="722" x2="282" y2="722" className="stroke-emergency" strokeWidth="1.8" />
        <rect x="282" y="704" width="28" height="13" rx="3" className="fill-card stroke-emergency" />
        <text x="296" y="713.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">Epi</text>
        <rect x="282" y="720" width="28" height="13" rx="3" className="fill-card stroke-emergency" />
        <text x="296" y="729.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">NE</text>
        <rect x="316" y="700" width="26" height="40" rx="12" className="fill-emergency-soft stroke-emergency" />
        <text x="329" y="760" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Blood</text>
        <text x="329" y="768" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(catecholamine</text>
        <text x="329" y="776" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">transmission)</text>
        <text x="66" y="790" fontSize="3.4" fontWeight="700" className="fill-foreground">a MODIFIED POSTGANGLIONIC NEURON — no chain synapse;</text>
        <text x="66" y="798" fontSize="3.4" fontWeight="700" className="fill-foreground">secretes Epi + NE into the blood (a hormone, not a synapse)</text>
        <text x="66" y="808" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Nn blockade suppresses stress catecholamine release</text>
        <text x="66" y="820" fontSize="3.4" fontWeight="700" className="fill-emergency">rule 2, verbatim: “Adrenal medulla is directly innervated</text>
        <text x="66" y="828" fontSize="3.4" fontWeight="700" className="fill-emergency">by preganglionic sympathetic fibers.”</text>

        {/* EXCEPTION 2 — sweat glands */}
        <rect x="376" y="676" width="308" height="164" rx="10" className="fill-card stroke-warning" />
        <text x="390" y="694" fontSize="4.4" fontWeight="800" className="fill-warning">EXCEPTION 2 — the cholinergic sweat gland</text>
        <rect x="388" y="714" width="88" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="432" y="725" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">Sympathetic chain</text>
        <line x1="476" y1="722" x2="528" y2="722" className="stroke-warning" strokeWidth="1.8" />
        <rect x="478" y="706" width="30" height="14" rx="4" className="fill-warning-soft stroke-warning" />
        <text x="493" y="716.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-warning">ACh</text>
        <text x="502" y="744" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">postganglionic sympathetic fiber — ACh, NOT NE</text>
        <circle cx="576" cy="722" r="17" className="fill-warning-soft stroke-warning" />
        <path d="M 569 722 a 7 7 0 1 0 14 0 a 4 4 0 1 0 -8 0" className="stroke-warning" fill="none" strokeWidth="1" />
        <rect x="556" y="744" width="40" height="15" rx="4" className="fill-warning-soft stroke-warning" />
        <text x="576" y="755.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-warning">M₃</text>
        <text x="576" y="772" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">Sweat glands</text>
        <text x="576" y="780" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">sympathetic pathway, cholinergic fiber</text>
        <text x="390" y="792" fontSize="3.4" fontWeight="700" className="fill-foreground">antimuscarinics → anhidrosis + hyperthermia; adrenergic</text>
        <text x="390" y="800" fontSize="3.4" fontWeight="700" className="fill-foreground">blockers do NOT dry the skin; botulinum toxin stops the ACh</text>
        <text x="390" y="810" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">rule 3, verbatim: “Sweat glands are part of the sympathetic</text>
        <text x="390" y="818" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">pathway but are innervated by cholinergic fibers (sympathetic</text>
        <text x="390" y="826" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">nervous system results in a “chold” sweat).”</text>
        <text x="390" y="836" fontSize="3.4" fontWeight="800" className="fill-warning">“chold” = the source&apos;s own typo (“cold”), carried verbatim</text>

        {/* UNIQUE CHIP — renal vasculature */}
        <rect x="700" y="676" width="350" height="164" rx="10" className="fill-card stroke-emergency" />
        <text x="714" y="694" fontSize="4.4" fontWeight="800" className="fill-emergency">UNIQUE CHIP — the renal vasculature&apos;s D₁</text>
        <rect x="712" y="714" width="104" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="764" y="725" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">Postganglionic neuron (long)</text>
        <line x1="816" y1="722" x2="864" y2="722" className="stroke-emergency" strokeWidth="1.8" />
        <rect x="824" y="706" width="28" height="14" rx="4" className="fill-card stroke-emergency" />
        <text x="838" y="716.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">NE</text>
        <text x="840" y="744" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">NE — like every other</text>
        <text x="840" y="752" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">sympathetic target</text>
        <ellipse cx="906" cy="722" rx="24" ry="17" className="fill-card stroke-emergency" />
        <path d="M 902 708 a 14 14 0 0 0 0 28" className="stroke-emergency" fill="none" strokeWidth="1" />
        <text x="906" y="750" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">Renal vasculature</text>
        <text x="906" y="758" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">smooth muscle</text>
        <rect x="944" y="712" width="96" height="20" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="992" y="726" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-emergency">α1, α2, β1, D1</text>
        <text x="714" y="788" fontSize="3.4" fontWeight="700" className="fill-foreground">the figure&apos;s ONLY dopamine target — β1 with D₁ here (the generic</text>
        <text x="714" y="796" fontSize="3.4" fontWeight="700" className="fill-foreground">target carries β2): low-dose dopamine → D₁ → renal vasodilation</text>
        <text x="714" y="808" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">a standalone “D” label also prints beneath “Sweat glands” in the</text>
        <text x="714" y="816" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">text layer — carried verbatim in the note&apos;s label table</text>

        {/* band footer — the length rule + Nn/Nm geography */}
        <text x="52" y="864" fontSize="4.2" fontWeight="800" className="fill-foreground">THE LENGTH RULE — Para: Preganglionic neuron (long) → Nn near the target → Postganglionic neuron (short) · Sym: Preganglionic neuron (short) → chain Nn → Postganglionic neuron (long)</text>
        <text x="52" y="876" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">fiber length and ganglion position are one fact: parasympathetic ganglia sit on/near the organ (Brainstem/craniosacral origin); sympathetic ganglia sit in the chain near the cord (Spinal cord/thoracolumbar origin)</text>
        <text x="52" y="888" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Nn sits in every autonomic ganglion (both divisions) AND on the adrenal medulla&apos;s chromaffin cells · Nm sits ONLY at the NMJ on Skeletal muscle</text>
        <text x="52" y="902" fontSize="3.8" fontWeight="800" className="fill-foreground">Nn BLOCKADE silences both divisions + the adrenal line + the sweat line — and SPARES the NMJ (Nm) and every postsynaptic receptor (direct-acting agonists still work)</text>
      </g>

      {/* ===== RECEPTOR CHIP ADDRESS BAND ===== */}
      <g>
        <rect x="36" y="928" width="1030" height="104" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="950" fontSize="5.4" fontWeight="800" className="fill-foreground">THE RECEPTOR CHIPS — every address on the map</text>
        <rect x="52" y="962" width="48" height="20" rx="4" className="fill-card stroke-foreground" />
        <text x="76" y="976" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">Nn</text>
        <text x="52" y="992" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">autonomic ganglia (both divisions)</text>
        <text x="52" y="1000" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">+ the adrenal medulla</text>
        <text x="52" y="1008" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(chromaffin cells)</text>
        <rect x="224" y="962" width="84" height="20" rx="4" className="fill-brand-soft stroke-brand" />
        <text x="266" y="976" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">M₁, M₂, M₃</text>
        <text x="224" y="992" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">parasympathetic target: smooth</text>
        <text x="224" y="1000" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">muscle, gland cells, nerve</text>
        <text x="224" y="1008" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">terminals, cardiac muscle</text>
        <rect x="396" y="962" width="40" height="20" rx="4" className="fill-warning-soft stroke-warning" />
        <text x="416" y="976" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">M₃</text>
        <text x="396" y="992" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">sweat glands — the</text>
        <text x="396" y="1000" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">cholinergic exception</text>
        <text x="396" y="1008" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(sympathetic pathway)</text>
        <rect x="568" y="962" width="100" height="20" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="618" y="976" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">α1, α2, β1, β2</text>
        <text x="568" y="992" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">sympathetic targets incl.</text>
        <text x="568" y="1000" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Cardiac muscle, vessels</text>
        <text x="568" y="1008" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(the generic chip)</text>
        <rect x="740" y="962" width="100" height="20" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="790" y="976" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">α1, α2, β1, D1</text>
        <text x="740" y="992" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">renal vasculature</text>
        <text x="740" y="1000" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">smooth muscle —</text>
        <text x="740" y="1008" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the ONLY D₁ target</text>
        <rect x="912" y="962" width="44" height="20" rx="4" className="fill-warning-soft stroke-warning" />
        <text x="934" y="976" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">Nm</text>
        <text x="912" y="992" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">neuromuscular junction</text>
        <text x="912" y="1000" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">on Skeletal muscle</text>
        <text x="912" y="1008" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(the somatic chip)</text>
        <text x="52" y="1024" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the two nicotinic chips (Nn, Nm) are ligand-gated ion channels; every other chip on the map is a GPCR — M₁/M₃ Gq · M₂ Gi · α1 Gq · α2 Gi · β Gs · D₁ Gs</text>
      </g>

      {/* ===== THREE RULES BAND ===== */}
      <g>
        <rect x="36" y="1048" width="1030" height="64" rx="14" className="fill-warning-soft/40 stroke-warning" />
        <text x="52" y="1066" fontSize="4.6" fontWeight="800" className="fill-foreground">THE THREE PRINTED RULES — verbatim, book 234</text>
        <text x="52" y="1078" fontSize="3.7" fontWeight="700" className="fill-foreground">1. “Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.”&#8195;2. “Adrenal medulla is directly innervated by preganglionic sympathetic fibers.”</text>
        <text x="52" y="1090" fontSize="3.7" fontWeight="700" className="fill-warning">3. “Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).” — “chold” is the source&apos;s own typo, carried verbatim</text>
        <text x="52" y="1102" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">all three rules are preserved exactly as printed and attributed; the typo is documented, never silently corrected</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1126" width="1054" height="44" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1144" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 256 (bottom half) / book 234 — Pharmacology — Autonomic Drugs: Autonomic receptors</text>
        <text x="42" y="1156" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO rasters — ONE vector wiring figure + three rule lines, redrawn here as original KYP vector art (no source artwork reproduced); all printed labels are</text>
        <text x="42" y="1166" fontSize="4" className="fill-muted-foreground">quoted verbatim in the note&apos;s label table. VLM census attempted twice (ph9-vlm-census.ts) — 401 both times; the census stands on pdfimages + the text layer. Shared page: top half is Drug effect modifications.</text>
      </g>
    </svg>
  );
}
