/* Pharmacology — PH-batch 15: Autonomic Drugs: Synapse Targets & Overview
 * (book 238, pdf 260 — FULL page, no shared-page split). ORIGINAL KYP
 * REDRAW of the page-dominating four-panel synapse figure. Census: pdfimages
 * = ZERO raster images on pdf 260 (CONFIRMED — the figure is pure vector
 * line art); VLM (glm-4.6v) IS available this session and was run at 120
 * DPI (full page) + 200 DPI (full page, plus per-panel crops) — four passes
 * total, saved to .usmle-pipeline-cache/staging-ph15/vlm-census.txt. VLM
 * confirms: no photographs, no margin notes or mnemonics anywhere on the
 * page, and a 2×2 arrangement (cholinergic top-left, noradrenergic
 * top-right, dopaminergic bottom-left, serotonergic bottom-right). This
 * redraw re-lays the source out as FOUR VERTICAL PANELS (cholinergic |
 * noradrenergic | serotonergic | dopaminergic — the production spec's
 * column order) while preserving every printed label, drug anchor, and
 * arrow direction, as adjudicated on the 200 DPI render:
 *   · synthesis chains run substrate → transmitter; the noradrenergic
 *     Dopamine → NE step crosses the vesicle membrane (via VMAT);
 *   · Ca2+ enters the cholinergic and noradrenergic terminals from the
 *     cleft side and its green ⊕ points to the release machinery — the
 *     serotonergic and dopaminergic panels print NO Ca2+ channel;
 *   · botulinum toxin's red ⊖ terminates on the release machinery; the
 *     donepezil banner is a STIMULANT banner whose arrow is a red ⊖ onto
 *     AChE (inhibiting the destroyer stimulates the synapse);
 *   · the "Releasemodulating receptors" bracket (one word as printed)
 *     groups AT II (⊕, facilitates release) and α2 (red ⊖ to the release
 *     machinery) on the noradrenergic presynaptic membrane; the dashed
 *     "Negative feedback" curve runs from the cleft NE back up to α2;
 *   · amphetamine/ephedrine's ⊕ terminates on the release machinery;
 *     tetrabenazine's ⊖ terminates on VMAT; the NET/SERT/DAT blocker
 *     banners' ⊖ terminate on the membrane transporters, whose own
 *     "Reuptake" arrows run cleft → terminal;
 *   · "Diffusion, metabolism" points away from the noradrenergic cleft;
 *   · the amphetamine reverse-transport story is NOT drawn in the source
 *     figure (VLM pass 4b) — it is printed as the intro paragraph, so the
 *     noradrenergic panel's bottom strip renders it step by step, labeled
 *     as the printed paragraph's mechanism.
 * The source's small publisher logo (lower right of the serotonergic
 * panel) is NOT reproduced. KYP design tokens only; readable in both
 * themes; purely presentational (no props, no hooks, no images). */

export function AutonomicSynapseMap() {
  const w = 1102;
  const h = 1400;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Autonomic Drugs: Synapse Targets & Overview — the four synapse panels redrawn as original KYP art: cholinergic (Choline + Acetyl-CoA → ChAT → ACh, botulinum toxin blocking release, AChE splitting ACh into Choline + Acetate, donepezil blocking AChE, postsynaptic M1 M2 M3 cholinoreceptors), noradrenergic (Tyrosine → DOPA → Dopamine → NE, VMAT with tetrabenazine, the Releasemodulating receptors bracket with AT II ⊕ and α2 red-minus negative feedback, amphetamine and ephedrine promoting release, NET reuptake blocked by amphetamine, SNRIs, cocaine, TCAs and MDMA, postsynaptic α and β adrenoreceptors, plus the printed amphetamine reverse-transport story), serotonergic (Tryptophan → 5-Hydroxytryptophan → 5-HT, SERT reuptake blocked by amphetamine, SNRIs, cocaine and SSRIs, postsynaptic 5-HT receptor), and dopaminergic (Tyrosine → L-DOPA → Dopamine, DAT reuptake blocked by amphetamine, methylphenidate and cocaine, postsynaptic dopamine receptor) — with each panel's stimulant and inhibitor class banners (redraw of book 238)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Autonomic drugs — the synapse targets (original KYP redraw of the four-panel figure)</text>
        <rect x="806" y="25" width="256" height="18" className="fill-brand-soft" />
        <text x="934" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">four synapses · every drug entry point</text>
      </g>

      {/* ================= PANEL 1 — CHOLINERGIC (brand) ================= */}
      <g>
        <rect x="24" y="70" width="254" height="1256" rx="14" className="fill-secondary/40 stroke-border" />
        <rect x="34" y="80" width="234" height="20" rx="5" className="fill-brand" />
        <text x="42" y="93.5" fontSize="4.8" fontWeight="800" className="fill-card">1 · CHOLINERGIC — acetylcholine (ACh)</text>

        {/* axon terminal */}
        <rect x="38" y="106" width="226" height="454" rx="30" className="fill-card stroke-border" />
        <text x="50" y="124" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">AXON TERMINAL</text>

        {/* synthesis: Choline + Acetyl-CoA → ChAT → ACh */}
        <rect x="92" y="132" width="118" height="34" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="151" y="146" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Choline +</text>
        <text x="151" y="158" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Acetyl-CoA</text>
        <line x1="151" y1="166" x2="151" y2="190" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 147.5 188 L 151 195 L 154.5 188 Z" className="fill-foreground" />
        <rect x="160" y="168" width="34" height="16" rx="4" className="fill-brand" />
        <text x="177" y="179" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-card">ChAT</text>
        <rect x="121" y="196" width="60" height="18" rx="6" className="fill-brand-soft stroke-brand" />
        <text x="151" y="208.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">ACh</text>
        <line x1="151" y1="214" x2="151" y2="230" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 147.5 228 L 151 235 L 154.5 228 Z" className="fill-foreground" />
        <text x="196" y="226" fontSize="3.2" className="fill-muted-foreground">vesicle loading</text>

        {/* vesicle with ACh dots */}
        <circle cx="151" cy="260" r="24" className="fill-card stroke-brand" strokeWidth="1.4" />
        <circle cx="143" cy="252" r="2.4" className="fill-brand" />
        <circle cx="159" cy="252" r="2.4" className="fill-brand" />
        <circle cx="143" cy="268" r="2.4" className="fill-brand" />
        <circle cx="159" cy="268" r="2.4" className="fill-brand" />

        {/* transport to active zone */}
        <path d="M 151 284 V 504" strokeDasharray="3 3" fill="none" className="stroke-muted-foreground" strokeWidth="0.9" />
        <path d="M 147.5 502 L 151 509 L 154.5 502 Z" className="fill-muted-foreground" />

        {/* botulinum chip — red ⊖ to the release machinery */}
        <rect x="44" y="430" width="94" height="42" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="91" y="444" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-emergency">Cholinergic inhibitor</text>
        <text x="91" y="456" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Botulinum toxin</text>
        <path d="M 138 452 Q 148 480 148 508" fill="none" className="stroke-emergency" strokeWidth="1.2" />
        <path d="M 144.5 512 L 148 520 L 151.5 512 Z" className="fill-emergency" />
        <circle cx="148" cy="498" r="4.5" className="fill-card stroke-emergency" strokeWidth="1.1" />
        <line x1="144.5" y1="498" x2="151.5" y2="498" className="stroke-emergency" strokeWidth="1.1" />

        {/* docked vesicle + fusion arc + release arrow */}
        <circle cx="151" cy="536" r="16" className="fill-card stroke-brand" strokeWidth="1.4" />
        <circle cx="151" cy="536" r="2.6" className="fill-brand" />
        <path d="M 119 560 Q 151 542 183 560" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <line x1="151" y1="562" x2="151" y2="606" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 147 604 L 151 612 L 155 604 Z" className="fill-foreground" />
        <text x="162" y="592" fontSize="3.4" className="fill-muted-foreground">release</text>

        {/* Ca2+ channel entering from the cleft + ⊕ to the release site */}
        <rect x="196" y="552" width="12" height="20" rx="3" className="fill-warning-soft stroke-warning" />
        <line x1="202" y1="592" x2="202" y2="576" className="stroke-warning" strokeWidth="1.2" />
        <path d="M 198.5 578 L 202 571 L 205.5 578 Z" className="fill-warning" />
        <text x="212" y="588" fontSize="3.8" fontWeight="800" className="fill-warning">Ca2+</text>
        <circle cx="185" cy="543" r="5" className="fill-success-soft stroke-success" strokeWidth="1" />
        <line x1="181.8" y1="543" x2="188.2" y2="543" className="stroke-success" strokeWidth="1.1" />
        <line x1="185" y1="539.8" x2="185" y2="546.2" className="stroke-success" strokeWidth="1.1" />
        <line x1="179" y1="543" x2="173" y2="541.5" className="stroke-success" strokeWidth="1" />
        <path d="M 172.5 538.8 L 167 540.5 L 172.2 543.6 Z" className="fill-success" />

        {/* synaptic cleft */}
        <rect x="38" y="568" width="226" height="202" rx="10" fill="none" className="stroke-border" strokeDasharray="3 2.5" />
        <text x="46" y="582" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">SYNAPTIC CLEFT</text>
        <circle cx="118" cy="614" r="2.5" className="fill-brand" />
        <circle cx="144" cy="624" r="2.5" className="fill-brand" />
        <circle cx="170" cy="612" r="2.5" className="fill-brand" />
        <circle cx="130" cy="644" r="2.5" className="fill-brand" />
        <circle cx="158" cy="640" r="2.5" className="fill-brand" />

        {/* AChE splits ACh into Choline + Acetate */}
        <line x1="150" y1="640" x2="151" y2="652" className="stroke-foreground" strokeWidth="1" />
        <rect x="128" y="654" width="46" height="20" rx="8" className="fill-card stroke-foreground" strokeWidth="1.2" />
        <text x="151" y="667.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">AChE</text>
        <path d="M 140 676 Q 122 690 114 698" fill="none" className="stroke-foreground" strokeWidth="0.9" />
        <path d="M 111 695 L 110 702 L 117 701 Z" className="fill-foreground" />
        <path d="M 162 676 Q 180 690 188 698" fill="none" className="stroke-foreground" strokeWidth="0.9" />
        <path d="M 185 701 L 192 702 L 191 695 Z" className="fill-foreground" />
        <rect x="86" y="702" width="56" height="16" rx="5" className="fill-secondary stroke-border" />
        <text x="114" y="712.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Choline</text>
        <rect x="160" y="702" width="56" height="16" rx="5" className="fill-secondary stroke-border" />
        <text x="188" y="712.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Acetate</text>

        {/* donepezil banner — stimulant class, red ⊖ onto AChE */}
        <rect x="192" y="604" width="68" height="64" rx="6" className="fill-success-soft/30 stroke-success" />
        <text x="226" y="616" textAnchor="middle" fontSize="3.0" fontWeight="800" className="fill-success">Cholinergic</text>
        <text x="226" y="625" textAnchor="middle" fontSize="3.0" fontWeight="800" className="fill-success">stimulant</text>
        <text x="226" y="638" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">AChE inhibitors</text>
        <text x="226" y="648" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">eg, Donepezil</text>
        <path d="M 192 636 Q 184 646 178 658" fill="none" className="stroke-emergency" strokeWidth="1.1" />
        <path d="M 174.5 656 L 177 664 L 182 658 Z" className="fill-emergency" />
        <circle cx="187" cy="648" r="4" className="fill-card stroke-emergency" strokeWidth="1" />
        <line x1="183.5" y1="648" x2="190.5" y2="648" className="stroke-emergency" strokeWidth="1" />

        {/* postsynaptic neuron */}
        <rect x="38" y="780" width="226" height="130" rx="16" className="fill-card stroke-border" />
        <path d="M 92 788 Q 105 766 118 788" fill="none" className="stroke-brand" strokeWidth="1.4" />
        <path d="M 138 788 Q 151 766 164 788" fill="none" className="stroke-brand" strokeWidth="1.4" />
        <path d="M 184 788 Q 197 766 210 788" fill="none" className="stroke-brand" strokeWidth="1.4" />
        <text x="105" y="802" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">M1</text>
        <text x="151" y="802" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">M2</text>
        <text x="197" y="802" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">M3</text>
        <text x="151" y="824" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Cholinoreceptors</text>
        <text x="151" y="846" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-muted-foreground">POSTSYNAPTIC NEURON</text>

        {/* class banners */}
        <text x="36" y="946" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">CLASS BANNERS — as printed</text>
        <rect x="36" y="954" width="230" height="44" rx="8" className="fill-emergency-soft/30 stroke-emergency" />
        <rect x="36" y="954" width="6" height="44" className="fill-emergency" />
        <text x="50" y="970" fontSize="4.2" fontWeight="800" className="fill-emergency">Cholinergic inhibitor</text>
        <text x="50" y="984" fontSize="3.4" className="fill-foreground">Botulinum toxin — ⊖ blocks release at the terminal</text>
        <rect x="36" y="1004" width="230" height="44" rx="8" className="fill-success-soft/30 stroke-success" />
        <rect x="36" y="1004" width="6" height="44" className="fill-success" />
        <text x="50" y="1020" fontSize="4.2" fontWeight="800" className="fill-success">Cholinergic stimulant</text>
        <text x="50" y="1034" fontSize="3.4" className="fill-foreground">AChE inhibitors, eg, Donepezil — ⊖ AChE in the cleft</text>

        {/* exam zone */}
        <rect x="36" y="1060" width="230" height="252" rx="10" className="fill-card stroke-border" />
        <text x="48" y="1078" fontSize="3.8" fontWeight="800" className="fill-foreground">AT THIS SYNAPSE, THE EXAM ASKS</text>
        <text x="48" y="1096" fontSize="3.7" className="fill-foreground">Botulinum toxin blocks RELEASE — the signal</text>
        <text x="48" y="1106" fontSize="3.7" className="fill-foreground">never leaves the terminal (the inhibitor).</text>
        <text x="48" y="1124" fontSize="3.7" className="fill-foreground">Donepezil blocks BREAKDOWN — AChE is</text>
        <text x="48" y="1134" fontSize="3.7" className="fill-foreground">inhibited, so ACh survives in the cleft.</text>
        <text x="48" y="1152" fontSize="3.7" className="fill-foreground">The stimulant banner carries a red ⊖ onto</text>
        <text x="48" y="1162" fontSize="3.7" className="fill-foreground">AChE — inhibiting the destroyer =</text>
        <text x="48" y="1172" fontSize="3.7" className="fill-foreground">stimulating the synapse.</text>
        <text x="48" y="1190" fontSize="3.7" className="fill-foreground">ChAT builds ACh from Choline + Acetyl-CoA;</text>
        <text x="48" y="1200" fontSize="3.7" className="fill-foreground">AChE splits it back into Choline + Acetate.</text>
        <text x="48" y="1218" fontSize="3.7" className="fill-foreground">The postsynaptic row prints M1, M2, M3</text>
        <text x="48" y="1228" fontSize="3.7" className="fill-foreground">under the one-word label Cholinoreceptors.</text>
        <text x="48" y="1246" fontSize="3.7" className="fill-foreground">No reuptake pump prints here — clearance is</text>
        <text x="48" y="1256" fontSize="3.7" className="fill-foreground">enzymatic: AChE, not a transporter.</text>
      </g>

      {/* ================= PANEL 2 — NORADRENERGIC (emergency) ================= */}
      <g>
        <rect x="290" y="70" width="254" height="1256" rx="14" className="fill-secondary/40 stroke-border" />
        <rect x="300" y="80" width="234" height="20" rx="5" className="fill-emergency" />
        <text x="308" y="93.5" fontSize="4.8" fontWeight="800" className="fill-card">2 · NORADRENERGIC — norepinephrine</text>

        {/* axon terminal */}
        <rect x="304" y="106" width="226" height="454" rx="30" className="fill-card stroke-border" />
        <text x="316" y="124" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">AXON TERMINAL</text>

        {/* synthesis: Tyrosine → DOPA → Dopamine (cytoplasm) → vesicle → NE */}
        <rect x="330" y="132" width="84" height="18" rx="6" className="fill-card stroke-border" />
        <text x="372" y="144.5" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Tyrosine</text>
        <line x1="372" y1="150" x2="372" y2="166" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 368.5 164 L 372 171 L 375.5 164 Z" className="fill-foreground" />
        <rect x="330" y="168" width="84" height="18" rx="6" className="fill-card stroke-border" />
        <text x="372" y="180.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">DOPA</text>
        <line x1="372" y1="186" x2="372" y2="202" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 368.5 200 L 372 207 L 375.5 200 Z" className="fill-foreground" />
        <rect x="330" y="204" width="84" height="18" rx="6" className="fill-card stroke-border" />
        <text x="372" y="216.5" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Dopamine</text>
        <text x="330" y="240" fontSize="3.0" className="fill-muted-foreground">cytoplasm: Tyrosine → DOPA → Dopamine</text>
        <text x="330" y="249" fontSize="3.0" className="fill-muted-foreground">(printed "DOPA" here, no L- prefix)</text>

        {/* dopamine enters the vesicle through VMAT; NE is made inside */}
        <path d="M 414 213 Q 436 222 452 244" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 448 242 L 456 249 L 456 239 Z" className="fill-foreground" />
        <rect x="446" y="246" width="12" height="16" rx="2" className="fill-warning-soft stroke-warning" />
        <text x="468" y="256" fontSize="3.6" fontWeight="800" className="fill-foreground">VMAT</text>
        <circle cx="479" cy="274" r="26" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <circle cx="471" cy="266" r="2.2" className="fill-emergency" />
        <circle cx="487" cy="266" r="2.2" className="fill-emergency" />
        <circle cx="479" cy="282" r="2.2" className="fill-emergency" />
        <text x="470" y="278" fontSize="4.4" fontWeight="800" className="fill-emergency">NE</text>
        <text x="452" y="310" fontSize="3.0" className="fill-muted-foreground">vesicle: Dopamine → NE</text>

        {/* tetrabenazine chip — red ⊖ onto VMAT */}
        <rect x="444" y="112" width="82" height="50" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="485" y="124" textAnchor="middle" fontSize="3.0" fontWeight="700" className="fill-foreground">Vesicular monoamine</text>
        <text x="485" y="133" textAnchor="middle" fontSize="3.0" fontWeight="700" className="fill-foreground">transporter (VMAT)</text>
        <text x="485" y="143" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-emergency">inhibitor</text>
        <text x="485" y="155" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Tetrabenazine</text>
        <path d="M 462 162 Q 452 196 452 238" fill="none" className="stroke-emergency" strokeWidth="1.1" />
        <path d="M 448.5 236 L 452 244 L 455.5 236 Z" className="fill-emergency" />
        <circle cx="452" cy="224" r="3.8" className="fill-card stroke-emergency" strokeWidth="1" />
        <line x1="448.8" y1="224" x2="455.2" y2="224" className="stroke-emergency" strokeWidth="1" />

        {/* amphetamine/ephedrine chip — green ⊕ to the release machinery */}
        <rect x="322" y="330" width="98" height="46" rx="6" className="fill-success-soft/30 stroke-success" />
        <text x="371" y="344" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">Noradrenergic stimulant</text>
        <text x="371" y="356" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">Amphetamine, Ephedrine</text>
        <text x="371" y="368" textAnchor="middle" fontSize="3.0" className="fill-muted-foreground">⊕ promotes release</text>
        <path d="M 366 376 Q 384 460 404 512" fill="none" className="stroke-success" strokeWidth="1.2" />
        <path d="M 400 510 L 406 518 L 409.5 509 Z" className="fill-success" />
        <circle cx="366" cy="382" r="5" className="fill-success-soft stroke-success" strokeWidth="1" />
        <line x1="362.8" y1="382" x2="369.2" y2="382" className="stroke-success" strokeWidth="1.1" />
        <line x1="366" y1="378.8" x2="366" y2="385.2" className="stroke-success" strokeWidth="1.1" />

        {/* release-modulating receptors: AT II ⊕ and α2 ⊖ on the presynaptic membrane */}
        <text x="318" y="517" fontSize="3.2" fontWeight="800" className="fill-muted-foreground">Releasemodulating</text>
        <text x="318" y="526" fontSize="3.2" fontWeight="800" className="fill-muted-foreground">receptors</text>
        <rect x="322" y="534" width="26" height="24" rx="6" className="fill-card stroke-foreground" strokeWidth="1.1" />
        <text x="335" y="550" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">AT II</text>
        <rect x="354" y="534" width="26" height="24" rx="6" className="fill-card stroke-foreground" strokeWidth="1.1" />
        <text x="367" y="550" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">α2</text>
        <path d="M 350 540 Q 372 535 396 538" fill="none" className="stroke-success" strokeWidth="1" />
        <path d="M 392.5 535.5 L 399 538 L 392.5 541 Z" className="fill-success" />
        <circle cx="371" cy="536.5" r="4" className="fill-success-soft stroke-success" strokeWidth="0.9" />
        <line x1="367.8" y1="536.5" x2="374.2" y2="536.5" className="stroke-success" strokeWidth="1" />
        <line x1="371" y1="533.3" x2="371" y2="539.7" className="stroke-success" strokeWidth="1" />
        <path d="M 382 552 Q 392 549 399 546" fill="none" className="stroke-emergency" strokeWidth="1" />
        <path d="M 395.5 542.8 L 401.5 545.5 L 395.8 548.8 Z" className="fill-emergency" />
        <circle cx="390" cy="550" r="4" className="fill-card stroke-emergency" strokeWidth="1" />
        <line x1="386.8" y1="550" x2="393.2" y2="550" className="stroke-emergency" strokeWidth="1" />

        {/* negative feedback loop: cleft NE → α2 (dashed) */}
        <path d="M 356 640 Q 332 606 362 574" fill="none" strokeDasharray="3 2.5" className="stroke-foreground" strokeWidth="0.9" />
        <path d="M 358 579 L 364 572 L 365 581 Z" className="fill-foreground" />
        <text x="306" y="604" fontSize="3.2" fontWeight="800" className="fill-foreground">Negative</text>
        <text x="306" y="613" fontSize="3.2" fontWeight="800" className="fill-foreground">feedback</text>

        {/* docked vesicle + fusion arc + release arrow */}
        <circle cx="417" cy="536" r="16" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <circle cx="417" cy="536" r="2.6" className="fill-emergency" />
        <path d="M 385 560 Q 417 542 449 560" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <line x1="417" y1="562" x2="417" y2="606" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 413 604 L 417 612 L 421 604 Z" className="fill-foreground" />
        <text x="428" y="592" fontSize="3.4" className="fill-muted-foreground">release</text>

        {/* Ca2+ channel + ⊕ to the release site */}
        <rect x="452" y="552" width="12" height="20" rx="3" className="fill-warning-soft stroke-warning" />
        <line x1="458" y1="592" x2="458" y2="576" className="stroke-warning" strokeWidth="1.2" />
        <path d="M 454.5 578 L 458 571 L 461.5 578 Z" className="fill-warning" />
        <text x="468" y="588" fontSize="3.8" fontWeight="800" className="fill-warning">Ca2+</text>
        <circle cx="442" cy="543" r="5" className="fill-success-soft stroke-success" strokeWidth="1" />
        <line x1="438.8" y1="543" x2="445.2" y2="543" className="stroke-success" strokeWidth="1.1" />
        <line x1="442" y1="539.8" x2="442" y2="546.2" className="stroke-success" strokeWidth="1.1" />
        <line x1="436" y1="543" x2="430" y2="541.5" className="stroke-success" strokeWidth="1" />
        <path d="M 429.5 538.8 L 424 540.5 L 429.2 543.6 Z" className="fill-success" />

        {/* synaptic cleft */}
        <rect x="304" y="568" width="226" height="202" rx="10" fill="none" className="stroke-border" strokeDasharray="3 2.5" />
        <text x="312" y="582" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">SYNAPTIC CLEFT</text>
        <circle cx="392" cy="620" r="2.5" className="fill-emergency" />
        <circle cx="416" cy="632" r="2.5" className="fill-emergency" />
        <circle cx="442" cy="618" r="2.5" className="fill-emergency" />
        <circle cx="404" cy="656" r="2.5" className="fill-emergency" />
        <circle cx="432" cy="652" r="2.5" className="fill-emergency" />

        {/* NET on the presynaptic membrane + reuptake arrow (cleft → terminal) */}
        <rect x="478" y="548" width="36" height="26" rx="6" className="fill-card stroke-foreground" strokeWidth="1.3" />
        <text x="496" y="565" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">NET</text>
        <path d="M 502 652 Q 518 612 502 578" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 498 582 L 502 574 L 506 582 Z" className="fill-foreground" />
        <text x="508" y="622" fontSize="3.2" fontWeight="800" className="fill-foreground">Reuptake</text>

        {/* NET blocker chip — red ⊖ onto NET */}
        <rect x="422" y="664" width="104" height="58" rx="6" className="fill-success-soft/30 stroke-success" />
        <text x="474" y="676" textAnchor="middle" fontSize="3.0" fontWeight="800" className="fill-success">Noradrenergic stimulant</text>
        <text x="474" y="688" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-foreground">Amphetamine, SNRIs,</text>
        <text x="474" y="698" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-foreground">Cocaine, TCAs, MDMA</text>
        <text x="474" y="712" textAnchor="middle" fontSize="2.9" className="fill-muted-foreground">⊖ blocks NET reuptake</text>
        <path d="M 476 662 Q 492 634 498 584" fill="none" className="stroke-emergency" strokeWidth="1.1" />
        <path d="M 494.5 584 L 498 576 L 501.5 584 Z" className="fill-emergency" />
        <circle cx="493" cy="602" r="3.8" className="fill-card stroke-emergency" strokeWidth="1" />
        <line x1="489.4" y1="602" x2="496.6" y2="602" className="stroke-emergency" strokeWidth="1" />

        {/* diffusion, metabolism — away from the cleft */}
        <path d="M 380 668 Q 352 700 326 726" fill="none" className="stroke-muted-foreground" strokeWidth="0.9" />
        <path d="M 323 721 L 323 730 L 331 726 Z" className="fill-muted-foreground" />
        <text x="312" y="742" fontSize="3.2" className="fill-muted-foreground">Diffusion,</text>
        <text x="312" y="751" fontSize="3.2" className="fill-muted-foreground">metabolism</text>

        {/* postsynaptic neuron */}
        <rect x="304" y="780" width="226" height="130" rx="16" className="fill-card stroke-border" />
        <path d="M 353 788 Q 367 764 381 788" fill="none" className="stroke-emergency" strokeWidth="1.4" />
        <path d="M 453 788 Q 467 764 481 788" fill="none" className="stroke-emergency" strokeWidth="1.4" />
        <text x="367" y="803" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">α</text>
        <text x="467" y="803" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">β</text>
        <text x="417" y="824" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Adrenoreceptors</text>
        <text x="417" y="846" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-muted-foreground">POSTSYNAPTIC NEURON</text>

        {/* class banners */}
        <text x="302" y="946" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">CLASS BANNERS — as printed</text>
        <rect x="302" y="952" width="230" height="32" rx="7" className="fill-success-soft/30 stroke-success" />
        <rect x="302" y="952" width="6" height="32" className="fill-success" />
        <text x="314" y="965" fontSize="3.8" fontWeight="800" className="fill-success">Noradrenergic stimulant</text>
        <text x="314" y="977" fontSize="3.2" className="fill-foreground">Amphetamine, Ephedrine — ⊕ release</text>
        <rect x="302" y="988" width="230" height="32" rx="7" className="fill-emergency-soft/30 stroke-emergency" />
        <rect x="302" y="988" width="6" height="32" className="fill-emergency" />
        <text x="314" y="1001" fontSize="3.8" fontWeight="800" className="fill-emergency">Vesicular monoamine transporter (VMAT)</text>
        <text x="314" y="1013" fontSize="3.2" className="fill-foreground">inhibitor — Tetrabenazine ⊖ VMAT</text>
        <rect x="302" y="1024" width="230" height="32" rx="7" className="fill-success-soft/30 stroke-success" />
        <rect x="302" y="1024" width="6" height="32" className="fill-success" />
        <text x="314" y="1037" fontSize="3.8" fontWeight="800" className="fill-success">Noradrenergic stimulant</text>
        <text x="314" y="1049" fontSize="3.2" className="fill-foreground">Amphetamine, SNRIs, Cocaine, TCAs, MDMA — ⊖ NET</text>

        {/* the amphetamine story — the printed paragraph, step by step */}
        <rect x="302" y="1066" width="230" height="246" rx="10" className="fill-card stroke-emergency" />
        <text x="314" y="1084" fontSize="3.8" fontWeight="800" className="fill-emergency">THE AMPHETAMINE STORY</text>
        <text x="314" y="1095" fontSize="3.0" className="fill-muted-foreground">(the printed intro paragraph, step by step)</text>
        <circle cx="320" cy="1110" r="6" className="fill-emergency" />
        <text x="320" y="1112.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">1</text>
        <text x="332" y="1109" fontSize="3.4" className="fill-foreground">Amphetamines ENTER the presynaptic</text>
        <text x="332" y="1118" fontSize="3.4" className="fill-foreground">terminal through NET (the NE transporter).</text>
        <circle cx="320" cy="1136" r="6" className="fill-emergency" />
        <text x="320" y="1138.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">2</text>
        <text x="332" y="1135" fontSize="3.4" className="fill-foreground">They use VMAT to enter neurosecretory</text>
        <text x="332" y="1144" fontSize="3.4" className="fill-foreground">vesicles — displacing NE from the vesicles.</text>
        <circle cx="320" cy="1162" r="6" className="fill-emergency" />
        <text x="320" y="1164.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">3</text>
        <text x="332" y="1161" fontSize="3.4" className="fill-foreground">Cytoplasmic NE rises to a concentration</text>
        <text x="332" y="1170" fontSize="3.4" className="fill-foreground">threshold within the presynaptic terminal.</text>
        <circle cx="320" cy="1188" r="6" className="fill-emergency" />
        <text x="320" y="1190.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">4</text>
        <text x="332" y="1187" fontSize="3.4" className="fill-foreground">The action of NET is REVERSED — NE is</text>
        <text x="332" y="1196" fontSize="3.4" className="fill-foreground">expelled into the synaptic cleft.</text>
        <text x="314" y="1218" fontSize="3.4" fontWeight="800" className="fill-emergency">→ the characteristics and effects of ↑ NE</text>
        <text x="314" y="1227" fontSize="3.4" fontWeight="800" className="fill-emergency">observed in patients taking amphetamines.</text>
        <text x="314" y="1248" fontSize="3.0" className="fill-muted-foreground">Not drawn as an arrow in the source figure —</text>
        <text x="314" y="1257" fontSize="3.0" className="fill-muted-foreground">printed as the paragraph above the figure.</text>
      </g>

      {/* ================= PANEL 3 — SEROTONERGIC (neural) ================= */}
      <g>
        <rect x="556" y="70" width="254" height="1256" rx="14" className="fill-secondary/40 stroke-border" />
        <rect x="566" y="80" width="234" height="20" rx="5" className="fill-neural" />
        <text x="574" y="93.5" fontSize="4.8" fontWeight="800" className="fill-card">3 · SEROTONERGIC — serotonin (5-HT)</text>

        {/* axon terminal */}
        <rect x="570" y="106" width="226" height="454" rx="30" className="fill-card stroke-border" />
        <text x="582" y="124" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">AXON TERMINAL</text>

        {/* synthesis: Tryptophan → 5-Hydroxytryptophan → 5-HT */}
        <rect x="640" y="132" width="86" height="18" rx="6" className="fill-card stroke-border" />
        <text x="683" y="144.5" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Tryptophan</text>
        <line x1="683" y1="150" x2="683" y2="166" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 679.5 164 L 683 171 L 686.5 164 Z" className="fill-foreground" />
        <rect x="624" y="168" width="118" height="18" rx="6" className="fill-card stroke-border" />
        <text x="683" y="180.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">5-Hydroxytryptophan</text>
        <line x1="683" y1="186" x2="683" y2="202" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 679.5 200 L 683 207 L 686.5 200 Z" className="fill-foreground" />
        <rect x="653" y="204" width="60" height="18" rx="6" className="fill-neural-soft stroke-neural" />
        <text x="683" y="216.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">5-HT</text>
        <line x1="683" y1="222" x2="683" y2="240" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 679.5 238 L 683 245 L 686.5 238 Z" className="fill-foreground" />
        <text x="712" y="238" fontSize="3.2" className="fill-muted-foreground">vesicle loading</text>

        {/* vesicle with 5-HT diamonds */}
        <circle cx="683" cy="272" r="24" className="fill-card stroke-neural" strokeWidth="1.4" />
        <path d="M 669 268 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />
        <path d="M 685 262 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />
        <path d="M 685 276 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />

        {/* transport to active zone */}
        <path d="M 683 296 V 504" strokeDasharray="3 3" fill="none" className="stroke-muted-foreground" strokeWidth="0.9" />
        <path d="M 679.5 502 L 683 509 L 686.5 502 Z" className="fill-muted-foreground" />

        {/* docked vesicle + fusion arc + release arrow */}
        <circle cx="683" cy="528" r="16" className="fill-card stroke-neural" strokeWidth="1.4" />
        <path d="M 681 528 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />
        <path d="M 651 560 Q 683 542 715 560" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <line x1="683" y1="562" x2="683" y2="606" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 679 604 L 683 612 L 687 604 Z" className="fill-foreground" />
        <text x="694" y="592" fontSize="3.4" className="fill-muted-foreground">release</text>

        {/* synaptic cleft */}
        <rect x="570" y="568" width="226" height="202" rx="10" fill="none" className="stroke-border" strokeDasharray="3 2.5" />
        <text x="578" y="582" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">SYNAPTIC CLEFT</text>
        <path d="M 648 616 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />
        <path d="M 674 628 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />
        <path d="M 700 614 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />
        <path d="M 662 652 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />
        <path d="M 688 648 l 4 -4 l 4 4 l -4 4 Z" className="fill-neural" />

        {/* SERT on the presynaptic membrane + reuptake arrow (cleft → terminal) */}
        <rect x="658" y="548" width="36" height="26" rx="6" className="fill-card stroke-foreground" strokeWidth="1.3" />
        <text x="676" y="565" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">SERT</text>
        <path d="M 640 652 Q 622 612 658 580" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 654 584 L 660 576 L 663 585 Z" className="fill-foreground" />
        <text x="582" y="622" fontSize="3.2" fontWeight="800" className="fill-foreground">Reuptake</text>

        {/* SERT blocker chip — red ⊖ onto SERT */}
        <rect x="704" y="636" width="88" height="70" rx="6" className="fill-success-soft/30 stroke-success" />
        <text x="748" y="650" textAnchor="middle" fontSize="3.0" fontWeight="800" className="fill-success">Serotonergic</text>
        <text x="748" y="659" textAnchor="middle" fontSize="3.0" fontWeight="800" className="fill-success">stimulant</text>
        <text x="748" y="672" textAnchor="middle" fontSize="3.1" fontWeight="700" className="fill-foreground">Amphetamine, SNRIs,</text>
        <text x="748" y="682" textAnchor="middle" fontSize="3.1" fontWeight="700" className="fill-foreground">Cocaine, SSRIs</text>
        <text x="748" y="696" textAnchor="middle" fontSize="2.9" className="fill-muted-foreground">⊖ blocks SERT</text>
        <path d="M 704 668 Q 692 630 684 584" fill="none" className="stroke-emergency" strokeWidth="1.1" />
        <path d="M 680.5 584 L 684 576 L 688.5 583.5 Z" className="fill-emergency" />
        <circle cx="688" cy="600" r="3.8" className="fill-card stroke-emergency" strokeWidth="1" />
        <line x1="684.4" y1="600" x2="691.6" y2="600" className="stroke-emergency" strokeWidth="1" />

        {/* postsynaptic neuron */}
        <rect x="570" y="780" width="226" height="130" rx="16" className="fill-card stroke-border" />
        <path d="M 669 788 Q 683 764 697 788" fill="none" className="stroke-neural" strokeWidth="1.4" />
        <text x="683" y="806" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">5-HT receptor</text>
        <text x="683" y="846" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-muted-foreground">POSTSYNAPTIC NEURON</text>

        {/* class banner */}
        <text x="568" y="946" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">CLASS BANNER — as printed</text>
        <rect x="568" y="954" width="230" height="44" rx="8" className="fill-success-soft/30 stroke-success" />
        <rect x="568" y="954" width="6" height="44" className="fill-success" />
        <text x="582" y="970" fontSize="4.2" fontWeight="800" className="fill-success">Serotonergic stimulant</text>
        <text x="582" y="984" fontSize="3.4" className="fill-foreground">Amphetamine, SNRIs, Cocaine, SSRIs — ⊖ SERT</text>

        {/* exam zone */}
        <rect x="568" y="1014" width="230" height="298" rx="10" className="fill-card stroke-border" />
        <text x="580" y="1032" fontSize="3.8" fontWeight="800" className="fill-foreground">AT THIS SYNAPSE, THE EXAM ASKS</text>
        <text x="580" y="1050" fontSize="3.7" className="fill-foreground">SSRIs (and SNRIs) block SERT — the cleft</text>
        <text x="580" y="1060" fontSize="3.7" className="fill-foreground">5-HT rises; the antidepressant entry point.</text>
        <text x="580" y="1078" fontSize="3.7" className="fill-foreground">Synthesis: Tryptophan →</text>
        <text x="580" y="1088" fontSize="3.7" className="fill-foreground">5-Hydroxytryptophan → 5-HT.</text>
        <text x="580" y="1106" fontSize="3.7" className="fill-foreground">Amphetamine and cocaine block this pump</text>
        <text x="580" y="1116" fontSize="3.7" className="fill-foreground">too — they ride every membrane pump.</text>
        <text x="580" y="1134" fontSize="3.7" className="fill-foreground">The postsynaptic side prints a single</text>
        <text x="580" y="1144" fontSize="3.7" className="fill-foreground">receptor label: 5-HT receptor.</text>
        <text x="580" y="1162" fontSize="3.7" className="fill-foreground">Fidelity notes from the source figure: this</text>
        <text x="580" y="1172" fontSize="3.7" className="fill-foreground">panel prints NO inhibitor banner, NO Ca2+</text>
        <text x="580" y="1182" fontSize="3.7" className="fill-foreground">channel, and NO release-modulating</text>
        <text x="580" y="1192" fontSize="3.7" className="fill-foreground">receptor — only the stimulant banner.</text>
        <text x="580" y="1210" fontSize="3.7" className="fill-foreground">5-HT is the only transmitter here whose</text>
        <text x="580" y="1220" fontSize="3.7" className="fill-foreground">chain starts from an amino acid that is</text>
        <text x="580" y="1230" fontSize="3.7" className="fill-foreground">not tyrosine: tryptophan.</text>
      </g>

      {/* ================= PANEL 4 — DOPAMINERGIC (warning) ================= */}
      <g>
        <rect x="822" y="70" width="254" height="1256" rx="14" className="fill-secondary/40 stroke-border" />
        <rect x="832" y="80" width="234" height="20" rx="5" className="fill-warning" />
        <text x="840" y="93.5" fontSize="4.8" fontWeight="800" className="fill-card">4 · DOPAMINERGIC — dopamine (DA)</text>

        {/* axon terminal */}
        <rect x="836" y="106" width="226" height="454" rx="30" className="fill-card stroke-border" />
        <text x="848" y="124" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">AXON TERMINAL</text>

        {/* synthesis: Tyrosine → L-DOPA → Dopamine */}
        <rect x="906" y="132" width="86" height="18" rx="6" className="fill-card stroke-border" />
        <text x="949" y="144.5" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Tyrosine</text>
        <line x1="949" y1="150" x2="949" y2="166" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 945.5 164 L 949 171 L 952.5 164 Z" className="fill-foreground" />
        <rect x="906" y="168" width="86" height="18" rx="6" className="fill-card stroke-border" />
        <text x="949" y="180.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">L-DOPA</text>
        <line x1="949" y1="186" x2="949" y2="202" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 945.5 200 L 949 207 L 952.5 200 Z" className="fill-foreground" />
        <rect x="906" y="204" width="86" height="18" rx="6" className="fill-card stroke-border" />
        <text x="949" y="216.5" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-foreground">Dopamine</text>
        <text x="848" y="240" fontSize="3.0" className="fill-muted-foreground">THIS panel prints "L-DOPA" (with the L-);</text>
        <text x="848" y="249" fontSize="3.0" className="fill-muted-foreground">the noradrenergic panel prints "DOPA"</text>

        {/* vesicle with dopamine triangles */}
        <line x1="949" y1="222" x2="949" y2="244" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 945.5 242 L 949 249 L 952.5 242 Z" className="fill-foreground" />
        <circle cx="949" cy="272" r="24" className="fill-card stroke-warning" strokeWidth="1.4" />
        <path d="M 935 270 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />
        <path d="M 951 262 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />
        <path d="M 951 278 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />

        {/* transport to active zone */}
        <path d="M 949 296 V 504" strokeDasharray="3 3" fill="none" className="stroke-muted-foreground" strokeWidth="0.9" />
        <path d="M 945.5 502 L 949 509 L 952.5 502 Z" className="fill-muted-foreground" />

        {/* docked vesicle + fusion arc + release arrow */}
        <circle cx="949" cy="528" r="16" className="fill-card stroke-warning" strokeWidth="1.4" />
        <path d="M 946 528 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />
        <path d="M 917 560 Q 949 542 981 560" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <line x1="949" y1="562" x2="949" y2="606" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 945 604 L 949 612 L 953 604 Z" className="fill-foreground" />
        <text x="960" y="592" fontSize="3.4" className="fill-muted-foreground">release</text>

        {/* synaptic cleft */}
        <rect x="836" y="568" width="226" height="202" rx="10" fill="none" className="stroke-border" strokeDasharray="3 2.5" />
        <text x="844" y="582" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">SYNAPTIC CLEFT</text>
        <path d="M 914 616 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />
        <path d="M 940 628 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />
        <path d="M 966 614 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />
        <path d="M 928 652 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />
        <path d="M 954 648 l 5 -5 l 5 5 l -5 5 Z" className="fill-warning" />

        {/* DAT on the presynaptic membrane + reuptake arrow (cleft → terminal) */}
        <rect x="924" y="548" width="36" height="26" rx="6" className="fill-card stroke-foreground" strokeWidth="1.3" />
        <text x="942" y="565" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">DAT</text>
        <path d="M 906 652 Q 888 612 924 580" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 920 584 L 926 576 L 929 585 Z" className="fill-foreground" />
        <text x="848" y="622" fontSize="3.2" fontWeight="800" className="fill-foreground">Reuptake</text>

        {/* DAT blocker chip — red ⊖ onto DAT */}
        <rect x="970" y="636" width="86" height="70" rx="6" className="fill-success-soft/30 stroke-success" />
        <text x="1013" y="650" textAnchor="middle" fontSize="3.0" fontWeight="800" className="fill-success">Dopaminergic</text>
        <text x="1013" y="659" textAnchor="middle" fontSize="3.0" fontWeight="800" className="fill-success">stimulant</text>
        <text x="1013" y="672" textAnchor="middle" fontSize="3.1" fontWeight="700" className="fill-foreground">Amphetamine,</text>
        <text x="1013" y="682" textAnchor="middle" fontSize="3.1" fontWeight="700" className="fill-foreground">Methylphenidate,</text>
        <text x="1013" y="692" textAnchor="middle" fontSize="3.1" fontWeight="700" className="fill-foreground">Cocaine</text>
        <text x="1013" y="704" textAnchor="middle" fontSize="2.9" className="fill-muted-foreground">⊖ blocks DAT</text>
        <path d="M 970 668 Q 958 630 950 584" fill="none" className="stroke-emergency" strokeWidth="1.1" />
        <path d="M 946.5 584 L 950 576 L 954.5 583.5 Z" className="fill-emergency" />
        <circle cx="954" cy="600" r="3.8" className="fill-card stroke-emergency" strokeWidth="1" />
        <line x1="950.4" y1="600" x2="957.6" y2="600" className="stroke-emergency" strokeWidth="1" />

        {/* postsynaptic neuron */}
        <rect x="836" y="780" width="226" height="130" rx="16" className="fill-card stroke-border" />
        <path d="M 935 788 Q 949 764 963 788" fill="none" className="stroke-warning" strokeWidth="1.4" />
        <text x="949" y="806" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Dopamine receptor</text>
        <text x="949" y="846" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-muted-foreground">POSTSYNAPTIC NEURON</text>

        {/* class banner */}
        <text x="834" y="946" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">CLASS BANNER — as printed</text>
        <rect x="834" y="954" width="230" height="44" rx="8" className="fill-success-soft/30 stroke-success" />
        <rect x="834" y="954" width="6" height="44" className="fill-success" />
        <text x="848" y="970" fontSize="4.2" fontWeight="800" className="fill-success">Dopaminergic stimulant</text>
        <text x="848" y="984" fontSize="3.4" className="fill-foreground">Amphetamine, Methylphenidate, Cocaine — ⊖ DAT</text>

        {/* exam zone */}
        <rect x="834" y="1014" width="230" height="298" rx="10" className="fill-card stroke-border" />
        <text x="846" y="1032" fontSize="3.8" fontWeight="800" className="fill-foreground">AT THIS SYNAPSE, THE EXAM ASKS</text>
        <text x="846" y="1050" fontSize="3.7" className="fill-foreground">Methylphenidate blocks DAT — cleft</text>
        <text x="846" y="1060" fontSize="3.7" className="fill-foreground">dopamine rises (the ADHD entry point).</text>
        <text x="846" y="1078" fontSize="3.7" className="fill-foreground">Synthesis: Tyrosine → L-DOPA →</text>
        <text x="846" y="1088" fontSize="3.7" className="fill-foreground">Dopamine — the chain STOPS at dopamine</text>
        <text x="846" y="1098" fontSize="3.7" className="fill-foreground">(the NE step belongs to the next panel).</text>
        <text x="846" y="1116" fontSize="3.7" className="fill-foreground">Fidelity notes from the source figure: this</text>
        <text x="846" y="1126" fontSize="3.7" className="fill-foreground">panel prints NO inhibitor banner, NO Ca2+</text>
        <text x="846" y="1136" fontSize="3.7" className="fill-foreground">channel, and NO release-modulating receptor.</text>
        <text x="846" y="1154" fontSize="3.7" className="fill-foreground">The postsynaptic side prints a single</text>
        <text x="846" y="1164" fontSize="3.7" className="fill-foreground">receptor label: Dopamine receptor.</text>
        <text x="846" y="1182" fontSize="3.7" className="fill-foreground">Cocaine and amphetamine appear on this</text>
        <text x="846" y="1192" fontSize="3.7" className="fill-foreground">pump too — and on NET and SERT: two</text>
        <text x="846" y="1202" fontSize="3.7" className="fill-foreground">drugs that ride every membrane pump.</text>
        <text x="846" y="1220" fontSize="3.7" className="fill-foreground">Methylphenidate prints ONLY here —</text>
        <text x="846" y="1230" fontSize="3.7" className="fill-foreground">the DAT-predominant blocker.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1338" width="1054" height="54" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1356" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 260 / book 238 (Pharmacology — Autonomic Drugs: Autonomic drugs; the four-panel synapse figure)</text>
        <text x="42" y="1369" fontSize="4" className="fill-muted-foreground">Census: pdfimages = ZERO raster images (CONFIRMED) — the figure is pure vector line art; VLM glm-4.6v (120 + 200 DPI, four passes) confirms NO margin mnemonics; every label above is carried</text>
        <text x="42" y="1380" fontSize="4" className="fill-muted-foreground">verbatim from the text layer (incl. "Releasemodulating receptors" as one word and the DOPA vs L-DOPA spellings). ORIGINAL KYP REDRAW: the source's 2×2 layout is re-laid-out as four vertical</text>
        <text x="42" y="1391" fontSize="4" className="fill-muted-foreground">panels (cholinergic | noradrenergic | serotonergic | dopaminergic); every label, drug anchor, and arrow direction is preserved; the publisher's logo is not reproduced.</text>
      </g>
    </svg>
  );
}
