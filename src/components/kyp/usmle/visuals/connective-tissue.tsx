"use client";

// Original KYP visuals — Extracellular matrix & connective tissue diseases
// (First Aid 2026, Part 1 pdf 70–72 / book 48–50). All SVGs use theme tokens
// (currentColor + Tailwind classes), readable in light AND dark mode.
// Photo-class sources are redrawn as diagnostic-pattern-preserving KYP
// originals per the approved inventory policy (never superficial).

// ---------------------------------------------------------------------------
// Collagen synthesis pipeline (fibroblast gene → cross-linked fiber)
// ---------------------------------------------------------------------------

export function CollagenSynthesisPipeline() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Collagen synthesis pipeline: transcription in the fibroblast nucleus, translation of Gly-X-Y preprocollagen, hydroxylation with vitamin C and glycosylation in the rough ER, triple helix procollagen, Golgi processing, exocytosis, cleavage to tropocollagen, fibril assembly and lysyl-oxidase copper-dependent cross-linking" className="min-w-[940px]">
      <text x="490" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">Collagen synthesis — from gene to fiber in 8 steps</text>

      {/* ============ INTRACELLULAR ============ */}
      <rect x="40" y="56" width="900" height="270" rx="14" className="fill-muted/25 stroke-border" strokeWidth="1.2" />
      <text x="60" y="78" fontSize="9" fontWeight="800" className="fill-muted-foreground">FIBROBLAST — intracellular</text>

      {/* nucleus: transcription */}
      <g>
        <ellipse cx="160" cy="180" rx="104" ry="66" className="fill-card stroke-border" strokeWidth="1.5" />
        <text x="160" y="150" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">① Nucleus</text>
        <text x="160" y="170" textAnchor="middle" fontSize="8" className="fill-muted-foreground">collagen mRNA transcribed</text>
        <text x="160" y="188" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">preprocollagen α-chain</text>
        <text x="160" y="204" textAnchor="middle" fontSize="8" className="fill-neural">Gly–X–Y repeat</text>
        <text x="160" y="220" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">every 3rd residue is glycine</text>
      </g>
      <path d="M 264 180 L 322 180" strokeWidth="1.8" className="stroke-muted-foreground" />
      <path d="M330 180 l-9 -4.5 v9 z" className="fill-muted-foreground" />

      {/* RER: hydroxylation + glycosylation + helix */}
      <g>
        <rect x="334" y="92" width="280" height="190" rx="12" className="fill-brand-soft/60 stroke-brand" strokeWidth="1.5" />
        <text x="474" y="114" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">②–④ Rough ER</text>
        <rect x="352" y="126" width="244" height="34" rx="8" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="474" y="140" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">② Hydroxylation of Pro &amp; Lys</text>
        <text x="474" y="152" textAnchor="middle" fontSize="7.5" className="fill-emergency">requires vitamin C — deficiency → scurvy</text>
        <rect x="352" y="166" width="244" height="30" rx="8" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="474" y="185" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">③ Glycosylation of hydroxylysine</text>
        <rect x="352" y="202" width="244" height="34" rx="8" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="474" y="216" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">④ Triple helix = procollagen</text>
        <text x="474" y="228" textAnchor="middle" fontSize="7.5" className="fill-emergency">helix failure → osteogenesis imperfecta</text>
        <text x="474" y="266" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">3 α-chains coil via H-bond + disulfide bonds</text>
      </g>
      <path d="M 614 180 L 666 180" strokeWidth="1.8" className="stroke-muted-foreground" />
      <path d="M674 180 l-9 -4.5 v9 z" className="fill-muted-foreground" />

      {/* Golgi + exocytosis */}
      <g>
        <rect x="678" y="92" width="130" height="190" rx="12" className="fill-neural-soft/60 stroke-neural" strokeWidth="1.5" />
        <text x="743" y="114" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-neural">⑤ Golgi</text>
        <path d="M 700 132 C 724 124, 748 130, 772 124 M 700 148 C 724 140, 748 146, 772 140" fill="none" strokeWidth="2.4" className="stroke-neural/70" />
        <text x="743" y="172" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">final processing</text>
        <text x="743" y="196" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">⑥ Exocytosis</text>
        <text x="743" y="210" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">procollagen leaves</text>
        <text x="743" y="221" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">the cell</text>
        <path d="M 743 232 C 743 252, 743 262, 743 274" strokeDasharray="4 3" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M743 282 l-4.5 -9 h9 z" className="fill-muted-foreground" />
      </g>

      {/* cofactor chips */}
      <g>
        <rect x="820" y="126" width="108" height="56" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
        <text x="874" y="148" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">Vitamin C</text>
        <text x="874" y="162" textAnchor="middle" fontSize="7" className="fill-foreground/80">prolyl + lysyl</text>
        <text x="874" y="172" textAnchor="middle" fontSize="7" className="fill-foreground/80">hydroxylase cofactor</text>
        <rect x="820" y="196" width="108" height="56" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
        <text x="874" y="218" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">Copper</text>
        <text x="874" y="232" textAnchor="middle" fontSize="7" className="fill-foreground/80">lysyl oxidase</text>
        <text x="874" y="242" textAnchor="middle" fontSize="7" className="fill-foreground/80">cofactor (extracellular)</text>
      </g>

      {/* ============ EXTRACELLULAR ============ */}
      <rect x="40" y="346" width="900" height="130" rx="14" className="fill-brand-soft/25 stroke-brand/50" strokeWidth="1.2" />
      <text x="60" y="368" fontSize="9" fontWeight="800" className="fill-muted-foreground">EXTRACELLULAR SPACE</text>

      <g>
        <rect x="70" y="382" width="216" height="40" rx="9" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="178" y="399" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">⑦ Cleavage of C- &amp; N-terminals</text>
        <text x="178" y="412" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">procollagen peptidases → tropocollagen</text>
        <path d="M 286 402 L 336 402" strokeWidth="1.8" className="stroke-muted-foreground" />
        <path d="M344 402 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <rect x="348" y="382" width="200" height="40" rx="9" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="448" y="399" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">⑧ Self-assembly into fibrils</text>
        <text x="448" y="412" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">staggered alignment of tropocollagen</text>
        <path d="M 548 402 L 598 402" strokeWidth="1.8" className="stroke-muted-foreground" />
        <path d="M606 402 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <rect x="610" y="378" width="300" height="48" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
        <text x="760" y="397" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">⑨ Cross-linking → collagen fiber</text>
        <text x="760" y="412" textAnchor="middle" fontSize="7.5" className="fill-foreground/85">lysyl oxidase (Cu) · covalent Lys–hydroxylysyl bonds</text>
        {/* cross-link marks */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <line x1={636 + i * 52} y1="426" x2={650 + i * 52} y2="426" strokeWidth="2" className="stroke-brand" />
          </g>
        ))}
      </g>

      {/* disease chips */}
      <g>
        <rect x="40" y="496" width="900" height="48" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="58" y="516" fontSize="8.5" fontWeight="800" className="fill-foreground">Step-specific disease traps:</text>
        <text x="58" y="532" fontSize="8.5" className="fill-foreground/85">helix formation failure → osteogenesis imperfecta · cross-linking failure → Menkes disease (↓ Cu) · hydroxylation failure → scurvy (↓ vit C) · cross-linking ↑ with age</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Elastin stretch-relax cycle
// ---------------------------------------------------------------------------

export function ElastinStretchRelax() {
  const w = 980;
  const h = 420;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Elastin stretch and relax cycle: a coiled elastin molecule with desmosine cross-links extends on stretch and recoils on relax, cross-linked extracellularly by lysyl oxidase on a fibrillin scaffold; elastase breaks elastin down unless inhibited by alpha-1 antitrypsin" className="min-w-[940px]">
      <text x="490" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">Elastin — the stretch-and-snap-back protein</text>

      {/* relaxed state */}
      <g>
        <text x="240" y="86" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">RELAXED (coiled)</text>
        <path d="M 100 160 C 130 110, 170 210, 205 150 C 235 100, 270 200, 305 150 C 335 110, 365 190, 396 150" fill="none" strokeWidth="5" className="stroke-brand" />
        {/* desmosine cross-links */}
        {[[150, 158], [255, 152], [350, 156]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x - 8} y1={y - 12} x2={x + 8} y2={y + 10} strokeWidth="2.4" className="stroke-warning" />
            <line x1={x + 8} y1={y - 12} x2={x - 8} y2={y + 10} strokeWidth="2.4" className="stroke-warning" />
          </g>
        ))}
        <text x="240" y="216" textAnchor="middle" fontSize="8" className="fill-muted-foreground">random coils fold on themselves</text>
        <text x="240" y="230" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-warning">✕ marks = desmosine cross-links (lysine-derived)</text>
      </g>

      {/* arrow */}
      <path d="M 430 150 L 540 150" strokeWidth="2.4" className="stroke-muted-foreground" />
      <path d="M550 150 l-11 -5.5 v11 z" className="fill-muted-foreground" />
      <text x="490" y="138" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">stretch</text>
      <path d="M 540 190 L 430 190" strokeWidth="2" strokeDasharray="5 4" className="stroke-muted-foreground" />
      <path d="M422 190 l11 5.5 v-11 z" className="fill-muted-foreground" />
      <text x="490" y="212" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">recoil</text>

      {/* stretched state */}
      <g>
        <text x="740" y="86" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-emergency">STRETCHED (extended)</text>
        <path d="M 570 150 L 910 150" fill="none" strokeWidth="5" className="stroke-emergency" />
        {[620, 700, 780, 860].map((x, i) => (
          <g key={i}>
            <line x1={x - 6} y1={138} x2={x + 6} y2={162} strokeWidth="2.4" className="stroke-warning" />
            <line x1={x + 6} y1={138} x2={x - 6} y2={162} strokeWidth="2.4" className="stroke-warning" />
          </g>
        ))}
        <text x="740" y="216" textAnchor="middle" fontSize="8" className="fill-muted-foreground">cross-links store the recoil energy</text>
        <text x="740" y="230" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">let go → snaps back to the coil</text>
      </g>

      {/* facts strip */}
      <g>
        <rect x="26" y="262" width="928" height="140" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="44" y="286" fontSize="9.5" fontWeight="800" className="fill-foreground">Structure &amp; economy</text>
        <text x="44" y="306" fontSize="8.5" className="fill-muted-foreground">Tropoelastin laid on a fibrillin scaffold · cross-linked extracellularly by lysyl oxidase (like collagen, Cu-dependent)</text>
        <text x="44" y="322" fontSize="8.5" className="fill-muted-foreground">Rich in NONhydroxylated proline, glycine, and lysine — the mirror image of collagen's hydroxylated residues</text>
        <text x="44" y="338" fontSize="8.5" className="fill-muted-foreground">Lives in skin, lungs, large arteries, elastic ligaments, vocal cords, epiglottis, ligamenta flava</text>
        <text x="44" y="366" fontSize="9.5" fontWeight="800" className="fill-emergency">Degradation — the COPD link</text>
        <text x="44" y="386" fontSize="8.5" className="fill-foreground/85">Elastase degrades elastin; α₁-antitrypsin inhibits elastase → α₁-antitrypsin deficiency = unopposed elastase → COPD (especially lower-lobe emphysema)</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Blue sclerae (OI) — diagnostic-pattern-preserving
// ---------------------------------------------------------------------------

export function BlueScleraeOi() {
  const w = 980;
  const h = 400;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Blue sclerae of osteogenesis imperfecta compared with a normal white sclera: thin translucent scleral collagen reveals the underlying choroidal veins as a blue tint, the diagnostic pattern" className="min-w-[940px]">
      <text x="240" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">NORMAL SCLERA</text>
      <text x="740" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">BLUE SCLERAE — OSTEOGENESIS IMPERFECTA</text>

      {/* normal eye */}
      <g>
        <ellipse cx="240" cy="190" rx="150" ry="86" className="fill-card stroke-border" strokeWidth="2" />
        <circle cx="240" cy="190" r="58" className="fill-brand-soft stroke-brand" strokeWidth="3" />
        <circle cx="240" cy="190" r="26" className="fill-foreground/80" />
        <circle cx="228" cy="178" r="8" className="fill-card" />
        <text x="240" y="306" textAnchor="middle" fontSize="9" className="fill-muted-foreground">thick, opaque, white scleral collagen</text>
        <text x="240" y="322" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">choroidal veins invisible beneath it</text>
      </g>

      {/* OI eye */}
      <g>
        <ellipse cx="740" cy="190" rx="150" ry="86" className="fill-brand-soft/70 stroke-brand" strokeWidth="2" />
        <ellipse cx="740" cy="190" rx="150" ry="86" className="fill-brand/40" />
        <circle cx="740" cy="190" r="58" className="fill-card stroke-foreground/70" strokeWidth="3" />
        <circle cx="740" cy="190" r="26" className="fill-foreground/85" />
        {/* underlying vessels showing through */}
        {[166, 196, 226].map((y, i) => (
          <path key={i} d={`M 620 ${y} C 660 ${y - 6}, 700 ${y + 4}, 726 ${y - 2}`} fill="none" strokeWidth="2.6" className="stroke-emergency/70" />
        ))}
        {[166, 196, 226].map((y, i) => (
          <path key={i} d={`M 860 ${y} C 820 ${y - 6}, 780 ${y + 4}, 754 ${y - 2}`} fill="none" strokeWidth="2.6" className="stroke-emergency/70" />
        ))}
        <text x="740" y="306" textAnchor="middle" fontSize="9" className="fill-muted-foreground">thin, translucent scleral collagen</text>
        <text x="740" y="322" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">choroidal veins show through → blue-gray tint</text>
      </g>

      <g>
        <rect x="26" y="348" width="928" height="38" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="371" fontSize="8.5" fontWeight="700" className="fill-foreground">OI mnemonic — “Patients can't BITE”: Bones (multiple minimal-trauma fractures) · I (eye: blue sclerae) · Teeth (dentinogenesis imperfecta) · Ear (hearing loss, abnormal ossicles).</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// OI bone fragility (radiographic pattern)
// ---------------------------------------------------------------------------

export function OiBoneFragility() {
  const w = 980;
  const h = 400;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Radiographic pattern of osteogenesis imperfecta: a long bone with multiple fractures at different healing stages, thin cortices and bowing deformity, contrasted with a normal bone" className="min-w-[940px]">
      <text x="240" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">NORMAL LONG BONE</text>
      <text x="740" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">OI — BRITTLE BONE (radiographic pattern)</text>

      {/* normal bone */}
      <g>
        <rect x="196" y="70" width="88" height="240" rx="40" className="fill-card stroke-border" strokeWidth="2" />
        <rect x="216" y="94" width="48" height="192" rx="22" className="fill-muted/50" />
        <text x="240" y="336" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">thick cortex · single shaft</text>
      </g>

      {/* OI bone */}
      <g>
        {/* bowed thin bone */}
        <path d="M 660 70 C 640 130, 700 160, 680 220 C 664 264, 700 292, 688 314" fill="none" strokeWidth="34" className="stroke-card" />
        <path d="M 660 70 C 640 130, 700 160, 680 220 C 664 264, 700 292, 688 314" fill="none" strokeWidth="34" className="stroke-border" fill-rule="nonzero" />
        <path d="M 660 70 C 640 130, 700 160, 680 220 C 664 264, 700 292, 688 314" fill="none" strokeWidth="18" className="stroke-muted/60" />
        {/* healed fracture callus sites */}
        <ellipse cx="664" cy="128" rx="30" ry="14" className="fill-warning-soft stroke-warning" strokeWidth="1.6" />
        <ellipse cx="690" cy="202" rx="28" ry="12" className="fill-warning-soft stroke-warning" strokeWidth="1.6" />
        <ellipse cx="686" cy="286" rx="30" ry="13" className="fill-warning-soft stroke-warning" strokeWidth="1.6" />
        <text x="740" y="128" fontSize="8" fontWeight="700" className="fill-warning">healed fracture (callus)</text>
        <text x="740" y="202" fontSize="8" fontWeight="700" className="fill-warning">second fracture</text>
        <text x="740" y="286" fontSize="8" fontWeight="700" className="fill-warning">angulation / bowing</text>
        <text x="726" y="336" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">thin cortices · multiple fractures at different stages</text>
      </g>

      <g>
        <rect x="26" y="348" width="928" height="38" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="371" fontSize="8.5" fontWeight="700" className="fill-foreground">COL1A1/COL1A2 (AD) → ↓ type I collagen · fractures after MINIMAL trauma (even at birth) — the stem that separates OI from child abuse: look for blue sclerae, family history, dentinogenesis imperfecta. Treat with bisphosphonates.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// EDS hyperextensible skin + hypermobile joints (clinical pattern)
// ---------------------------------------------------------------------------

export function EdsHyperextensibleSkin() {
  const w = 980;
  const h = 400;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Ehlers-Danlos syndrome clinical patterns: skin that stretches far and recoils, thin translucent skin with visible veins, easy bruising, and hypermobile joints with joint dislocation tendency" className="min-w-[940px]">
      <text x="250" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">HYPEREXTENSIBLE SKIN</text>
      <text x="730" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">HYPERMOBILE JOINTS</text>

      {/* skin stretch panel */}
      <g>
        <rect x="40" y="60" width="420" height="270" rx="14" className="fill-muted/30 stroke-border" strokeWidth="1.3" />
        {/* pinched skin pulled far */}
        <path d="M 90 210 C 160 210, 210 150, 320 132 C 370 124, 400 140, 416 158" fill="none" strokeWidth="18" className="stroke-brand/60" />
        <path d="M 90 210 C 160 210, 210 150, 320 132 C 370 124, 400 140, 416 158" fill="none" strokeWidth="10" className="stroke-brand" />
        <circle cx="92" cy="210" r="16" className="fill-brand-soft stroke-brand" strokeWidth="2" />
        <text x="252" y="112" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-brand">stretched far beyond normal…</text>
        <text x="252" y="126" textAnchor="middle" fontSize="8" className="fill-muted-foreground">and recoils back (unlike lax “chewed” skin)</text>
        {/* thin translucent skin with veins */}
        <path d="M 100 276 C 160 268, 240 280, 330 270" fill="none" strokeWidth="14" className="stroke-brand/30" />
        <path d="M 130 276 C 170 272, 210 278, 250 275" fill="none" strokeWidth="2" className="stroke-emergency/60" />
        <path d="M 160 278 C 200 274, 240 280, 290 276" fill="none" strokeWidth="2" className="stroke-emergency/50" />
        <text x="250" y="308" textAnchor="middle" fontSize="8" className="fill-muted-foreground">thin/transparent skin — veins show through · easy bruising (↓ vessels + fragile CT)</text>
      </g>

      {/* joint hypermobility panel */}
      <g>
        <rect x="520" y="60" width="420" height="270" rx="14" className="fill-muted/30 stroke-border" strokeWidth="1.3" />
        {/* hyperextended finger */}
        <rect x="580" y="170" width="120" height="24" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
        <rect x="696" y="176" width="70" height="20" rx="9" className="fill-brand-soft stroke-brand" strokeWidth="1.6" transform="rotate(-38 730 186)" />
        <text x="650" y="148" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-brand">hyperextension past straight</text>
        {/* dislocation arrows */}
        <g>
          <circle cx="846" cy="150" r="26" className="fill-card stroke-border" strokeWidth="2" />
          <circle cx="846" cy="150" r="10" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
          <path d="M 876 122 L 900 98" strokeWidth="2" className="stroke-emergency" />
          <path d="M906 92 l-12 3 l7 9 z" className="fill-emergency" />
          <text x="846" y="204" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-emergency">dislocation tendency</text>
          <text x="846" y="220" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">joint instability</text>
        </g>
        <text x="730" y="308" textAnchor="middle" fontSize="8" className="fill-muted-foreground">hypermobility type = most common · classical type = type V collagen (COL5A1/A2)</text>
      </g>

      <g>
        <rect x="26" y="348" width="928" height="38" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="371" fontSize="8.5" fontWeight="700" className="fill-foreground">Faulty collagen synthesis (AD or AR, multiple types): hyperextensible skin · hypermobile joints · easy bruising · berry + aortic aneurysms · organ rupture (vascular type = type III, “threE D”).</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Pectus carinatum (Marfan) — chest-wall pattern
// ---------------------------------------------------------------------------

export function PectusCarinatumMarfan() {
  const w = 980;
  const h = 400;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Pectus carinatum pigeon-chest deformity of Marfan syndrome: the sternum protrudes outward, contrasted with pectus excavatum where the sternum is depressed inward; both are Marfan chest-wall findings" className="min-w-[940px]">
      <text x="250" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">PECTUS CARINATUM (“pigeon chest”)</text>
      <text x="730" y="36" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-foreground">PECTUS EXCAVATUM (sunken)</text>

      {/* carinatum */}
      <g>
        <rect x="40" y="60" width="420" height="270" rx="14" className="fill-muted/30 stroke-border" strokeWidth="1.3" />
        {/* ribcage front view */}
        <path d="M 150 110 C 190 96, 310 96, 350 110 L 372 240 C 330 268, 170 268, 128 240 Z" className="fill-card stroke-border" strokeWidth="2" />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M 148 ${146 + i * 36} C 210 ${138 + i * 36}, 290 ${138 + i * 36}, 352 ${146 + i * 36}`} fill="none" strokeWidth="2.2" className="stroke-muted-foreground/50" />
        ))}
        {/* protruding sternum */}
        <path d="M 236 116 C 258 104, 262 130, 262 150 C 262 180, 258 210, 250 238 C 244 214, 240 176, 240 148 C 240 132, 236 124, 236 116 Z" className="fill-warning-soft stroke-warning" strokeWidth="2.4" />
        <path d="M 250 130 C 268 140, 270 170, 262 206" fill="none" strokeWidth="1.6" className="stroke-warning" />
        <text x="250" y="296" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-warning">sternum bulges OUT</text>
      </g>

      {/* excavatum */}
      <g>
        <rect x="520" y="60" width="420" height="270" rx="14" className="fill-muted/30 stroke-border" strokeWidth="1.3" />
        <path d="M 630 110 C 670 96, 790 96, 830 110 L 852 240 C 810 268, 650 268, 608 240 Z" className="fill-card stroke-border" strokeWidth="2" />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M 628 ${146 + i * 36} C 690 ${138 + i * 36}, 770 ${138 + i * 36}, 832 ${146 + i * 36}`} fill="none" strokeWidth="2.2" className="stroke-muted-foreground/50" />
        ))}
        {/* depressed sternum */}
        <path d="M 716 118 C 736 150, 740 190, 730 236 C 718 190, 712 150, 716 118 Z" className="fill-emergency-soft stroke-emergency" strokeWidth="2.4" />
        <text x="730" y="296" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-emergency">sternum caves IN</text>
      </g>

      <g>
        <rect x="26" y="348" width="928" height="38" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="371" fontSize="8.5" fontWeight="700" className="fill-foreground">Marfan (FBN1 → defective fibrillin-1, AD, chr 15): tall + long extremities · arachnodactyly · either chest-wall deformity · aortic root aneurysm dissection/rupture (most common cause of death) · MVP · ↑ spontaneous pneumothorax.</text>
      </g>
    </svg>
  );
}
