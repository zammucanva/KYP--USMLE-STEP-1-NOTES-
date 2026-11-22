"use client";

// Original KYP nutrition visuals (N-batch: vitamins, zinc, PEM, ethanol).
// All SVGs use theme tokens (currentColor + Tailwind color classes),
// so they stay readable in light AND dark mode.
// Photo/radiology signs are drawn as diagnostic-pattern-preserving KYP
// originals; pathway redraws keep the source's labels and compartment logic.

// ---------------------------------------------------------------------------
// Vitamin A — Bitot spots (photo-sign schematic)
// ---------------------------------------------------------------------------

export function BitotSpotsIllustration() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Bitot spots redrawn as an original schematic: a foamy silvery-white triangular patch of keratin debris on the temporal bulbar conjunctiva near the limbus, with the xerophthalmia progression from night blindness to keratomalacia" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Bitot spots — the foamy conjunctival sign of vitamin A deficiency (original KYP schematic)</text>
      </g>

      {/* open eye schematic */}
      <g>
        <rect x="24" y="80" width="560" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">The eye — temporal bulbar conjunctiva, next to the limbus</text>
        {/* eye outline: almond shape */}
        <path d="M 84 260 C 130 190, 330 190, 386 250 C 336 322, 130 322, 84 260 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2.2" />
        {/* iris + pupil at center */}
        <circle cx={234} cy={256} r={52} className="fill-secondary stroke-foreground/70" strokeWidth="1.6" />
        <circle cx={234} cy={256} r={22} className="fill-foreground/80" />
        {/* limbus ring */}
        <circle cx={234} cy={256} r={56} fill="none" strokeWidth="1.4" className="stroke-foreground/50" strokeDasharray="4 3" />
        {/* Bitot spot: foamy triangular plaque on temporal (right side) conjunctiva near limbus */}
        <g>
          <path d="M 300 236 L 372 214 L 356 268 Z" className="fill-warning/60 stroke-warning" strokeWidth="2" />
          <circle cx={312} cy={238} r={4} className="fill-warning" />
          <circle cx={326} cy={244} r={4.6} className="fill-warning" />
          <circle cx={340} cy={238} r={3.8} className="fill-warning" />
          <circle cx={330} cy={254} r={4.2} className="fill-warning" />
          <circle cx={344} cy={252} r={3.4} className="fill-warning" />
        </g>
        {/* label lines */}
        <line x1={340} y1={220} x2={392} y2={178} strokeWidth="1.6" className="stroke-warning" />
        <text x={396} y={172} fontSize="9.5" fontWeight="700" className="fill-foreground">foamy, silvery-white plaque</text>
        <text x={396} y={184} fontSize="8.5" className="fill-muted-foreground">keratin debris on the conjunctiva</text>
        <line x1={276} y1={286} x2={340} y2={318} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={92} y={332} fontSize="8.5" className="fill-muted-foreground">temporal interpalpebral zone, adjacent to the limbus</text>
        {/* tear-film sheen arcs */}
        <path d="M 110 244 C 150 226, 190 222, 222 224" fill="none" strokeWidth="1.2" className="stroke-foreground/40" />
        <path d="M 110 268 C 150 284, 190 290, 222 288" fill="none" strokeWidth="1.2" className="stroke-foreground/40" />
        {/* dry-eye chip (xerosis) */}
        <rect x={40} y={188} width={118} height={20} rx={10} className="fill-emergency-soft" />
        <text x={99} y={202} textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-emergency">dry eye — xerophthalmia</text>
      </g>

      {/* progression strip */}
      <g>
        <rect x="604" y="80" width="352" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Xerophthalmia progression</text>
        {[
          { y: 124, label: "Night blindness (nyctalopia)", note: "retinal pigment is affected first" },
          { y: 176, label: "Xerosis cutis + dry eyes", note: "squamous metaplasia of epithelium" },
          { y: 228, label: "Bitot spots", note: "foamy conjunctival keratin debris" },
          { y: 280, label: "Keratomalacia", note: "corneal degeneration, ulceration" },
          { y: 332, label: "Immunosuppression", note: "defective epithelial barriers" },
        ].map((s, i) => (
          <g key={s.y}>
            <rect x={620} y={s.y} width={252} height={36} rx="8" className={i === 2 ? "fill-warning-soft stroke-warning" : "fill-secondary stroke-border"} strokeWidth="1" />
            <text x={746} y={s.y + 15} textAnchor="middle" fontSize="9" fontWeight="700" className={i === 2 ? "fill-warning" : "fill-foreground"}>{s.label}</text>
            <text x={746} y={s.y + 27} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">{s.note}</text>
            {i < 4 && <path d={`M 746 ${s.y + 36} v 10`} stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="currentColor" />}
            {i < 4 && <path d={`M 746 ${s.y + 50} l -4 -7 h8 z`} className="fill-muted-foreground" />}
          </g>
        ))}
        <text x={620} y={374} fontSize="8" className="fill-muted-foreground">Retinol = retin-A; visual pigments need retinal.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">Deficiency vs excess — the two exam directions</text>
        <text x="42" y="450" fontSize="9" className="fill-muted-foreground">Deficiency: night blindness, xerosis cutis, xerophthalmia, Bitot spots, keratomalacia, immunosuppression.</text>
        <text x="42" y="468" fontSize="9" className="fill-muted-foreground">Acute toxicity: nausea, vomiting, ↑ICP (vertigo, blurred vision). Chronic: alopecia, dry skin, hepatotoxicity, arthralgias,</text>
        <text x={42} y={486} fontSize="9" className="fill-muted-foreground">idiopathic intracranial hypertension.</text>
        <text x={42} y={502} fontSize="8.5" fontWeight="700" className="fill-foreground">Teratogenic (homeobox genes): ⊝ pregnancy test + 2 contraception forms before isotretinoin.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source photograph's diagnostic pattern (temporal foamy conjunctival plaque, label A) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Vitamin B2 — cheilosis + magenta tongue + corneal vascularization
// ---------------------------------------------------------------------------

export function RiboflavinDeficiencySigns() {
  const w = 980;
  const h = 560;
  const Panel = ({ x, title, tone, toneText, children }: { x: number; title: string; tone: string; toneText: string; children: React.ReactNode }) => (
    <g>
      <rect x={x} y="80" width="296" height="300" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
      <rect x={x + 14} y="92" width="268" height="24" rx="8" className={tone} strokeWidth="1.2" />
      <text x={x + 148} y={108} textAnchor="middle" fontSize="9.5" fontWeight="800" className={toneText}>{title}</text>
      {children}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Riboflavin (vitamin B2) deficiency signs redrawn as schematics: cheilosis with scaling and fissures at the corners of the mouth, a magenta tongue, and corneal vascularization" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">The 2 C&rsquo;s of B2 — cheilosis and corneal vascularization (original KYP schematics)</text>
      </g>

      {/* cheilosis panel */}
      <Panel x={24} title="Cheilosis — angular fissures (B2)" tone="fill-warning-soft stroke-warning" toneText="fill-warning">
        {/* mouth schematic, closed lips with angular cracks */}
        <path d="M 96 230 C 140 200, 236 200, 282 232 C 244 268, 132 268, 96 230 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* lip line */}
        <path d="M 104 231 C 150 246, 232 246, 276 231" fill="none" strokeWidth="2" className="stroke-foreground/80" />
        {/* angular fissures: both corners split outward */}
        <path d="M 100 230 C 88 224, 82 214, 80 204" fill="none" strokeWidth="2.4" className="stroke-emergency" strokeLinecap="round" />
        <path d="M 278 231 C 290 225, 296 215, 298 205" fill="none" strokeWidth="2.4" className="stroke-emergency" strokeLinecap="round" />
        {/* scaling flecks at corners */}
        {[
          [92, 216], [86, 224], [288, 218], [294, 226], [104, 250], [272, 250],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={2.4} className="fill-warning" />
        ))}
        <text x={42} y={340} fontSize="9" fontWeight="700" className="fill-foreground">scaling + fissures at the corners of the mouth</text>
        <text x={42} y={352} fontSize="8" className="fill-muted-foreground">inflammation of the lips (angular cheilitis)</text>
      </Panel>

      {/* magenta tongue panel */}
      <Panel x={342} title="“Magenta” tongue (B2)" tone="fill-brand-soft stroke-brand" toneText="fill-brand">
        {/* tongue schematic */}
        <path d="M 400 210 C 402 186, 448 172, 492 178 C 540 186, 552 206, 544 232 C 534 262, 506 274, 476 272 C 446 270, 424 258, 408 240 C 402 232, 399 222, 400 210 Z" className="fill-brand/50 stroke-foreground" strokeWidth="2" />
        {/* median groove */}
        <path d="M 474 184 C 474 210, 474 240, 472 264" fill="none" strokeWidth="1.4" className="stroke-foreground/60" />
        {/* papillae dots */}
        {[
          [426, 206], [448, 198], [478, 194], [506, 200], [526, 212], [432, 228], [460, 224], [492, 226], [518, 236], [444, 250], [472, 250], [500, 252],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={2.6} className="fill-brand" />
        ))}
        <text x={360} y={340} fontSize="9" fontWeight="700" className="fill-foreground">magenta (purplish-red) glossitis</text>
        <text x={360} y={352} fontSize="8" className="fill-muted-foreground">smooth, coated, inflamed tongue surface</text>
      </Panel>

      {/* corneal vascularization panel */}
      <Panel x={660} title="Corneal vascularization (B2)" tone="fill-neural-soft stroke-neural" toneText="fill-neural">
        {/* eye schematic */}
        <path d="M 690 250 C 724 208, 856 208, 890 248 C 856 292, 724 292, 690 250 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        <circle cx={790} cy={250} r={44} className="fill-secondary stroke-foreground/70" strokeWidth="1.6" />
        <circle cx={790} cy={250} r={18} className="fill-foreground/80" />
        {/* vessels creeping in from periphery toward limbus */}
        {[
          "M 700 240 C 720 236, 734 234, 748 236",
          "M 696 256 C 718 260, 732 260, 746 258",
          "M 880 244 C 862 240, 848 238, 834 240",
          "M 884 262 C 864 266, 850 264, 838 262",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" strokeWidth="1.8" className="stroke-emergency" strokeLinecap="round" />
        ))}
        {/* arrow showing vessel direction */}
        <line x1={704} y1={214} x2={736} y2={228} strokeWidth="1.6" className="stroke-emergency" />
        <polygon points="740,230 730,224 734,234" className="fill-emergency" />
        <text x={678} y={340} fontSize="9" fontWeight="700" className="fill-foreground">new vessels grow in from the periphery</text>
        <text x={678} y={352} fontSize="8" className="fill-muted-foreground">circumlimbal vascularization of the cornea</text>
      </Panel>

      {/* bottom strip */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">B2 (riboflavin) — FAD and FMN, the 2-electron carriers</text>
        <text x="42" y="450" fontSize="9" className="fill-muted-foreground">Cofactor in redox reactions — eg, the succinate dehydrogenase reaction in the TCA cycle (FAD → FADH2).</text>
        <text x="42" y="468" fontSize="9" className="fill-muted-foreground">Mnemonic: FAD and FMN are derived from riboFlavin (B2 ≈ 2 ATP). B-complex deficiencies often show dermatitis, glossitis, diarrhea.</text>
        <text x="42" y="490" fontSize="8.5" fontWeight="700" className="fill-foreground">Exam shape: angular fissures + magenta tongue + corneal vascularization → riboflavin deficiency.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematics — the source photograph's diagnostic patterns (label A cheilosis) redrawn without reproducing the images.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Vitamin B3 — pellagra: Casal necklace + hyperpigmentation
// ---------------------------------------------------------------------------

export function PellagraCasalNecklace() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Pellagra redrawn as original schematics: a C3/C4 dermatome circumferential broad-collar rash forming the Casal necklace around the lower neck and upper chest, with hyperpigmentation of sun-exposed limbs, and the 3 D's of niacin deficiency" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Pellagra — the Casal necklace and the 3 D&rsquo;s (original KYP schematics)</text>
      </g>

      {/* head + neck schematic with collar rash */}
      <g>
        <rect x="24" y="80" width="560" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">C3/C4 dermatome — the &ldquo;broad collar&rdquo; distribution</text>
        {/* head */}
        <ellipse cx={230} cy={170} rx={52} ry={62} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* neck */}
        <path d="M 208 226 L 204 258 L 256 258 L 252 226" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* shoulders / upper torso */}
        <path d="M 204 258 C 130 266, 92 292, 84 352 L 376 352 C 368 292, 330 266, 256 258 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* Casal necklace: circumferential band around lower neck/upper chest */}
        <path d="M 198 264 C 222 278, 238 280, 230 282 C 250 286, 258 280, 262 264" fill="none" strokeWidth="0" />
        <path d="M 176 274 C 210 292, 250 292, 284 274 C 300 284, 296 302, 288 310 C 250 330, 210 330, 172 310 C 164 302, 160 284, 176 274 Z" className="fill-warning/45 stroke-warning" strokeWidth="2.2" />
        {/* demarcation dash line to dermatome label */}
        <line x1={322} y1={292} x2={392} y2={264} strokeWidth="1.5" className="stroke-warning" />
        <text x={398} y={256} fontSize="9" fontWeight="700" className="fill-foreground">C3/C4 circumferential</text>
        <text x={398} y={268} fontSize="8.5" className="fill-muted-foreground">&ldquo;broad collar&rdquo; rash — well demarcated,</text>
        <text x={398} y={280} fontSize="8.5" className="fill-muted-foreground">symmetric, wraps the whole neck</text>
        {/* scale flecks on the collar */}
        {[
          [196, 288], [216, 296], [240, 300], [264, 296], [284, 286], [206, 308], [232, 312], [258, 308],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={2.2} className="fill-warning" />
        ))}
        <text x={42} y={368} fontSize="8.5" className="fill-muted-foreground">Casal necklace — dermatitis confined to the C3/C4 dermatome</text>
      </g>

      {/* sun-exposed limbs panel */}
      <g>
        <rect x="604" y="80" width="352" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Sun-exposed limbs — hyperpigmentation</text>
        {/* forearm schematic */}
        <path d="M 660 200 C 700 178, 800 178, 850 206 C 858 238, 840 268, 806 280 L 700 284 C 664 274, 648 232, 660 200 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* hand blob */}
        <ellipse cx={864} cy={244} rx={22} ry={30} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* hyperpigmentation: darkened patches on the dorsum (sun-exposed) */}
        {[
          [700, 214], [732, 206], [764, 204], [796, 212], [716, 234], [748, 230], [780, 232], [812, 238], [736, 254], [770, 256],
        ].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={13} ry={9} className="fill-foreground/45" />
        ))}
        <line x1={700} y1={296} x2={700} y2={310} strokeWidth="1.4" className="stroke-foreground/60" />
        <text x={620} y={326} fontSize="9" fontWeight="700" className="fill-foreground">darkening of sun-exposed skin (forearms, dorsum of hands)</text>
        <text x={620} y={338} fontSize="8" className="fill-muted-foreground">glossitis precedes the dermatitis in B3 deficiency</text>
        <text x={620} y={356} fontSize="8" className="fill-muted-foreground">B3 from tryptophan needs B2 + B6 — Hartnup, carcinoid,</text>
        <text x={620} y={368} fontSize="8" className="fill-muted-foreground">and isoniazid all strip the tryptophan supply.</text>
      </g>

      {/* bottom strip: 3 D's */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">The 3 D&rsquo;s of pellagra</text>
        {[
          { x: 42, d: "Diarrhea", note: "enteritis, glossitis" },
          { x: 340, d: "Dementia", note: "also hallucinations" },
          { x: 640, d: "Dermatitis", note: "Casal necklace, sun-exposed limbs" },
        ].map((s) => (
          <g key={s.d}>
            <rect x={s.x} y={438} width={280} height={34} rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1" />
            <text x={s.x + 14} y={452} fontSize="9.5" fontWeight="800" className="fill-warning">{s.d}</text>
            <text x={s.x + 14} y={465} fontSize="8" className="fill-muted-foreground">{s.note}</text>
          </g>
        ))}
        <text x="42" y="490" fontSize="8.5" fontWeight="700" className="fill-foreground">Pellagra = vitamin B3 levels fell. Excess: facial flushing (prostaglandin, prevented by aspirin), pruritus, hyperglycemia, hyperuricemia — &ldquo;Podagra = B3 OD.&rdquo;</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematics — the source photograph's diagnostic pattern (label A: broad-collar rash + limb hyperpigmentation) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Vitamins B6–B12 — the B12/folate one-carbon map (source figure redraw)
// ---------------------------------------------------------------------------

export function B12FolateOneCarbonMap() {
  const w = 980;
  const h = 660;
  const node = (x: number, y: number, label: string, sub: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g>
      <rect x={x} y={y} width="150" height="44" rx="9" className={tone} strokeWidth="1.3" />
      <text x={x + 75} y={y + 19} textAnchor="middle" fontSize="10" fontWeight="700" className={textTone}>{label}</text>
      <text x={x + 75} y={y + 33} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The vitamin B12 and folate one-carbon metabolism map: methionine synthase uses B12 to remethylate homocysteine from THF-CH3, SAM donates CH3 to anabolic pathways, B6 drives homocysteine to cysteine and succinyl-CoA to heme, and B12 methylmalonyl-CoA mutase sends methylmalonyl-CoA to succinyl-CoA for the TCA cycle" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">The B12 / folate one-carbon map (original KYP redraw of the source figure)</text>
      </g>

      {/* left loop: folate-methionine cycle */}
      {node(60, 120, "Protein", "dietary methionine source", "fill-neural-soft stroke-neural", "fill-neural")}
      {node(60, 200, "Methionine", "essential amino acid")}
      {node(60, 280, "SAM", "S-adenosylmethionine", "fill-brand-soft stroke-brand", "fill-brand")}
      {node(60, 360, "S-adenosyl", "homocysteine")}
      {node(60, 440, "Homocysteine", "the remethylation hub", "fill-warning-soft stroke-warning", "fill-warning")}
      {node(60, 540, "Cysteine", "transsulfuration end point")}
      {node(290, 120, "THF", "tetrahydrofolate")}
      {node(290, 440, "THF–CH3", "5-methyl-THF", "fill-brand-soft stroke-brand", "fill-brand")}

      {/* right arm: methylmalonyl-CoA route */}
      {node(700, 120, "Odd-chain FAs,", "branched-chain amino acids", "fill-neural-soft stroke-neural", "fill-neural")}
      {node(700, 240, "Methylmalonyl-", "CoA")}
      {node(700, 400, "Succinyl-CoA", "TCA intermediate")}
      {node(700, 540, "TCA cycle", "energy production", "fill-brand-soft stroke-brand", "fill-brand")}
      {node(430, 540, "Heme", "from succinyl-CoA + glycine")}

      {/* arrows — left loop */}
      <g strokeWidth="1.6" fill="currentColor" className="text-muted-foreground" stroke="currentColor">
        {/* Protein -> Methionine */}
        <line x1="135" y1="164" x2="135" y2="196" />
        <path d="M 135 202 l -4.5 -8 h 9 z" stroke="none" />
        {/* Methionine -> SAM */}
        <line x1="135" y1="244" x2="135" y2="276" />
        <path d="M 135 282 l -4.5 -8 h 9 z" stroke="none" />
        {/* SAM -> SAH (CH3 out to anabolic pathways first) */}
        <line x1="135" y1="324" x2="135" y2="356" />
        <path d="M 135 362 l -4.5 -8 h 9 z" stroke="none" />
        {/* SAH -> Homocysteine */}
        <line x1="135" y1="404" x2="135" y2="436" />
        <path d="M 135 442 l -4.5 -8 h 9 z" stroke="none" />
        {/* Homocysteine -> Cysteine (B6) */}
        <line x1="135" y1="484" x2="135" y2="536" />
        <path d="M 135 542 l -4.5 -8 h 9 z" stroke="none" />
        {/* Methionine synthase: THF-CH3 -> Homocysteine (B12) — the cycle-closing arrow */}
        <path d="M 290 462 C 240 470, 226 460, 218 452" fill="none" />
        <path d="M 214 449 l 8 2.5 -4.5 7.5 z" stroke="none" />
      </g>

      {/* CH3 donation arrow out of SAM */}
      <g>
        <path d="M 212 300 C 252 296, 288 292, 318 286" fill="none" strokeWidth="1.8" className="stroke-brand" />
        <polygon points="324,285 312,280 314,292" className="fill-brand" />
        <text x={334} y={272} fontSize="9" fontWeight="700" className="fill-brand">CH3 to anabolic</text>
        <text x={334} y={284} fontSize="9" fontWeight="700" className="fill-brand">pathways</text>
        <text x={334} y={318} fontSize="7.5" className="fill-muted-foreground">(the methyl donor)</text>
      </g>

      {/* SAH -> Adenosine */}
      <g>
        <rect x={246} y={404} width={104} height={34} rx="8" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x={298} y={425} textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-foreground">Adenosine</text>
        <line x1="212" y1="382" x2="262" y2="404" strokeWidth="1.6" stroke="currentColor" className="text-muted-foreground" />
        <path d="M 266 406 l -9.5 -1 5.5 -8 z" className="fill-muted-foreground" />
      </g>

      {/* enzyme chips on the left loop */}
      <g fontSize="9" fontWeight="800">
        <rect x={224} y={494} width={130} height={22} rx={11} className="fill-emergency-soft" />
        <text x={289} y={509} textAnchor="middle" className="fill-emergency">Methionine synthase</text>
        <text x={289} y={532} textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-emergency">B12</text>
        <rect x={152} y={500} width={54} height={20} rx={10} className="fill-emergency-soft" />
        <text x={179} y={514} textAnchor="middle" className="fill-emergency">B6</text>
      </g>

      {/* THF <-> THF-CH3 vertical linkage (folate cycle) */}
      <g stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" strokeDasharray="4 3">
        <path d="M 378 164 C 414 210, 414 350, 378 440" fill="none" />
      </g>
      <text x={420} y={302} fontSize="8" className="fill-muted-foreground">folate cycle</text>

      {/* arrows — right arm */}
      <g strokeWidth="1.6" fill="currentColor" className="text-muted-foreground" stroke="currentColor">
        {/* Odd-chain FAs -> Methylmalonyl-CoA */}
        <line x1="775" y1="164" x2="775" y2="236" />
        <path d="M 775 242 l -4.5 -8 h 9 z" stroke="none" />
        {/* Methylmalonyl-CoA -> Succinyl-CoA */}
        <line x1="775" y1="284" x2="775" y2="396" />
        <path d="M 775 402 l -4.5 -8 h 9 z" stroke="none" />
        {/* Succinyl-CoA -> TCA cycle */}
        <line x1="775" y1="444" x2="775" y2="536" />
        <path d="M 775 542 l -4.5 -8 h 9 z" stroke="none" />
        {/* Succinyl-CoA -> Heme (B6) */}
        <path d="M 700 428 C 626 440, 560 490, 512 532" fill="none" />
        <path d="M 508 536 l 8.5 -2.5 -3 8 z" stroke="none" />
      </g>

      {/* enzyme chips on the right arm */}
      <g fontSize="9" fontWeight="800">
        <rect x={786} y={318} width={146} height={36} rx={9} className="fill-emergency-soft" />
        <text x={859} y={332} textAnchor="middle" className="fill-emergency">Methylmalonyl-CoA</text>
        <text x={859} y={346} textAnchor="middle" className="fill-emergency">mutase — B12</text>
        <rect x={560} y={470} width={54} height={20} rx={10} className="fill-emergency-soft" />
        <text x={587} y={484} textAnchor="middle" className="fill-emergency">B6</text>
      </g>

      {/* deficiency discriminator strip */}
      <g>
        <rect x="24" y="604" width="932" height="42" rx="10" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="622" fontSize="9" fontWeight="700" className="fill-foreground">B12 deficiency: ↑ homocysteine AND ↑ methylmalonic acid (both enzymes stall) + subacute combined degeneration.</text>
        <text x="42" y="638" fontSize="9" fontWeight="700" className="fill-foreground">Folate deficiency: ↑ homocysteine with NORMAL methylmalonic acid (mutase keeps working) — no neurologic symptoms.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Vitamin D — rickets genu varum (photo-sign schematic)
// ---------------------------------------------------------------------------

export function RicketsRadiographPattern() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Rickets redrawn as an original schematic: a standing toddler with genu varum bowlegs — lateral bowing with knees far apart and ankles together, a red double arrow marking the knee gap — with the rickets versus osteomalacia comparison" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Rickets — genu varum &ldquo;bowlegs&rdquo; in children (original KYP schematic)</text>
      </g>

      {/* standing child schematic */}
      <g>
        <rect x="24" y="80" width="560" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Genu varum — the legs bow AWAY from midline</text>
        {/* torso (small, toddler proportions) */}
        <rect x={244} y={116} width={64} height={62} rx={14} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* hips block */}
        <rect x={238} y={178} width={76} height={22} rx={8} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* bowed legs: lateral convexity, knees apart, ankles together */}
        <path d="M 252 200 C 226 240, 218 264, 238 288 C 254 308, 258 322, 254 344" fill="none" strokeWidth="13" strokeLinecap="round" className="stroke-foreground/85" />
        <path d="M 300 200 C 326 240, 334 264, 314 288 C 298 308, 294 322, 298 344" fill="none" strokeWidth="13" strokeLinecap="round" className="stroke-foreground/85" />
        {/* knee joint markers */}
        <circle cx={240} cy={278} r={9} className="fill-secondary stroke-foreground" strokeWidth="1.6" />
        <circle cx={312} cy={278} r={9} className="fill-secondary stroke-foreground" strokeWidth="1.6" />
        {/* feet — close together at the ankles */}
        <path d="M 242 344 h 26" strokeWidth="7" strokeLinecap="round" className="stroke-foreground/85" />
        <path d="M 284 344 h 26" strokeWidth="7" strokeLinecap="round" className="stroke-foreground/85" />
        {/* red double-headed arrow between the knees (the gap marker) */}
        <line x1={249} y1={278} x2={303} y2={278} strokeWidth="2.6" className="stroke-emergency" />
        <polygon points="249,278 259,273 259,283" className="fill-emergency" />
        <polygon points="303,278 293,273 293,283" className="fill-emergency" />
        {/* bowing axis label */}
        <text x={352} y={270} fontSize="9" fontWeight="700" className="fill-emergency">wide knee gap</text>
        <text x={352} y={282} fontSize="8.5" className="fill-muted-foreground">ankles stay together — the deformity</text>
        <text x={352} y={294} fontSize="8.5" className="fill-muted-foreground">is at the knee and long-bone shafts</text>
        <text x={42} y={356} fontSize="8.5" className="fill-muted-foreground">Soft, poorly mineralized growth plates bow under the toddler&rsquo;s own weight.</text>
        <text x={42} y={371} fontSize="8.5" className="fill-muted-foreground">Same defect in adults = osteomalacia (bone pain, muscle weakness).</text>
      </g>

      {/* deficiency causes panel */}
      <g>
        <rect x="604" y="80" width="352" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Why children demineralize</text>
        {[
          "Malabsorption (bile, pancreas, ileum all matter)",
          "↓ Sun exposure · darker skin · prematurity",
          "Poor diet · exclusively breastfed infants (give oral vitamin D)",
          "Chronic kidney disease (no 1α-hydroxylase)",
          "Advanced liver disease (no 25-hydroxylase)",
        ].map((t, i) => (
          <g key={i}>
            <rect x={620} y={118 + i * 46} width={320} height={36} rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
            <text x={632} y={140 + i * 46} fontSize="8.6" className="fill-foreground">{t}</text>
          </g>
        ))}
        <text x={620} y={362} fontSize="8.5" fontWeight="700" className="fill-foreground">Hypocalcemic tetany when Ca2+ falls far enough.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">Child vs adult — one mineralization defect, two names</text>
        <text x="42" y="450" fontSize="9" className="fill-muted-foreground">Rickets (children): deformity — genu varum bowlegs, growth-plate widening. Osteomalacia (adults): bone pain + muscle weakness, fractures.</text>
        <text x="42" y="468" fontSize="9" className="fill-muted-foreground">Excess direction: hypercalcemia, hypercalciuria, loss of appetite, stupor — and granulomatous disease activates vitamin D in epithelioid macrophages.</text>
        <text x="42" y="492" fontSize="8.5" fontWeight="700" className="fill-foreground">Function at low levels: ↑ bone mineralization; at higher levels: ↑ bone resorption — calcitriol is dose-dependent.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source photograph's diagnostic pattern (label A: toddler genu varum with knee-gap arrow) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Vitamin D — activation cascade (source figure redraw)
// ---------------------------------------------------------------------------

export function VitaminDActivationCascade() {
  const w = 980;
  const h = 680;
  const box = (x: number, y: number, label: string, sub: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", width = 168) => (
    <g>
      <rect x={x} y={y} width={width} height={46} rx="9" className={tone} strokeWidth="1.3" />
      <text x={x + width / 2} y={y + 20} textAnchor="middle" fontSize="10" fontWeight="700" className={textTone}>{label}</text>
      <text x={x + width / 2} y={y + 34} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  const downArrow = (x: number, y1: number, y2: number) => (
    <g stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="currentColor">
      <line x1={x} y1={y1} x2={x} y2={y2 - 6} />
      <path d={`M ${x} ${y2} l -4.5 -8 h 9 z`} stroke="none" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Vitamin D synthesis and activation: sun and UV exposure on skin converts 7-dehydrocholesterol to D3 cholecalciferol, diet provides D2 ergocalciferol, the liver 25-hydroxylase makes the 25-OH D3 storage form, the kidney 1-alpha-hydroxylase makes active 1,25-dihydroxy D3 calcitriol, which raises calcium and phosphate in bone, intestines, and renal tubular cells, with PTH and calcium regulation and feedback inhibition" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Vitamin D activation cascade — sun, liver, kidney (original KYP redraw)</text>
      </g>

      {/* sources row */}
      {box(60, 90, "Cholesterol", "→ 7-dehydrocholesterol", "fill-neural-soft stroke-neural", "fill-neural")}
      {box(288, 90, "D3 (Cholecalciferol)", "sun on stratum basale; fish, milk, plants", "fill-brand-soft stroke-brand", "fill-brand")}
      {box(516, 90, "D2 (Ergocalciferol)", "plants, fungi, yeasts", "fill-brand-soft stroke-brand", "fill-brand", 150)}
      {/* source labels */}
      <g>
        <path d="M 228 113 C 252 113, 258 113, 282 113" fill="none" strokeWidth="1.6" className="stroke-warning" />
        <polygon points="288,113 278,108 278,118" className="fill-warning" />
        <rect x={120} y={70} width={110} height={18} rx={9} className="fill-warning-soft" />
        <text x={175} y={83} textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">Sun/UV exposure</text>
        <rect x={534} y={70} width={54} height={18} rx={9} className="fill-muted" />
        <text x={561} y={83} textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">Diet</text>
      </g>

      {/* liver row */}
      {box(288, 196, "LIVER — 25-hydroxylase", "both D2 and D3 converge", "fill-secondary stroke-border", "fill-foreground", 220)}
      {downArrow(296, 136, 196)}
      {downArrow(591, 136, 196)}
      <path d="M 591 136 C 591 160, 520 168, 508 192" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
      {box(60, 196, "25-OH D3", "STORAGE FORM", "fill-neural-soft stroke-neural", "fill-neural")}
      <path d="M 288 219 C 240 219, 228 219, 228 219" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
      <path d="M 252 219 C 200 219, 160 219, 132 219" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
      <polygon points="228,219 238,214 238,224" className="fill-muted-foreground" />

      {/* kidney row */}
      {box(288, 296, "KIDNEY — 1α-hydroxylase", "the regulated step", "fill-secondary stroke-border", "fill-foreground", 220)}
      {downArrow(296, 242, 296)}
      {box(60, 296, "1,25-(OH)2 D3", "CALCITRIOL — active form", "fill-brand-soft stroke-brand", "fill-brand")}
      <path d="M 398 319 C 440 319, 460 319, 478 319" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
      <polygon points="228,319 238,314 238,224" className="fill-muted-foreground" />
      <path d="M 478 319 C 490 319, 496 319, 510 319" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />

      {/* regulation side panel */}
      <g>
        <rect x="560" y="262" width="396" height="130" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={576} y={286} fontSize="9.5" fontWeight="800" className="fill-foreground">REGULATION (the kidney step)</text>
        <text x={576} y={306} fontSize="8.6" className="fill-muted-foreground">↑ PTH, ↓ Ca2+ → ↑ 1,25-(OH)2 D3 production (⊕ stimulation)</text>
        <text x={576} y={324} fontSize="8.6" className="fill-muted-foreground">1,25-(OH)2 D3 feedback inhibits its own production (⊖)</text>
        <text x={576} y={342} fontSize="8.6" className="fill-muted-foreground">↑ PTH → ↑ Ca2+ reabsorption and ↓ PO43– reabsorption in the kidney</text>
        <text x={576} y={364} fontSize="8" fontWeight="700" className="fill-foreground">Feedback loop drawn dashed: calcitriol ⊖ its own 1α-hydroxylase.</text>
      </g>
      {/* feedback dashed line: 1,25 -> 1α-hydroxylase */}
      <g>
        <path d="M 228 340 C 300 380, 480 400, 560 396" fill="none" strokeWidth="1.5" strokeDasharray="5 4" className="stroke-emergency" />
        <polygon points="560,396 548,392 550,404" className="fill-emergency" />
        <text x={330} y={404} fontSize="8.5" fontWeight="700" className="fill-emergency">⊖ feedback</text>
      </g>

      {/* target organs row */}
      {box(60, 452, "Bone", "↑ Ca2+ and ↑ PO43– released from bone", "fill-warning-soft stroke-warning", "fill-warning", 264)}
      {box(356, 452, "Intestines", "↑ absorption of Ca2+ and PO43–", "fill-warning-soft stroke-warning", "fill-warning", 264)}
      {box(652, 452, "Renal tubular cells", "Reabsorption ↑ Ca2+, ↑ PO43– · Urine ↓ Ca2+, ↓ PO43–", "fill-warning-soft stroke-warning", "fill-warning", 304)}
      {downArrow(192, 342, 452)}
      {downArrow(488, 319, 452)}
      <path d="M 640 319 C 700 350, 780 390, 800 448" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
      <polygon points="800,452 806,442 794,444" className="fill-muted-foreground" />

      {/* net result */}
      <g>
        <rect x={60} y={548} width={896} height={44} rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
        <text x={508} y={566} textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-brand">Net result: ↑ Ca2+ and ↑ PO43–</text>
        <text x={508} y={582} textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">mineralization at low levels; resorption at higher levels</text>
      </g>
      {downArrow(192, 498, 548)}
      {downArrow(488, 498, 548)}
      {downArrow(804, 498, 548)}

      {/* legend */}
      <g>
        <text x="24" y="626" fontSize="8.5" className="fill-muted-foreground">Original KYP redraw — the source figure&rsquo;s boxes, enzymes, regulation loop, and three target-organ effects preserved with the source&rsquo;s labels.</text>
        <text x="24" y="642" fontSize="8.5" className="fill-muted-foreground">25-OH D3 is the storage form (liver); 1,25-(OH)2 D3 is the active hormone (kidney) — CKD patients cannot make the active form.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Vitamin K — the carboxylation cycle (source logic adapted)
// ---------------------------------------------------------------------------

export function VitaminKCarboxylationCycle() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Vitamin K cycle: epoxide reductase reduces vitamin K to its active hydroquinone form, which serves as cofactor for gamma-carboxylation of glutamic acid residues on clotting factors II, VII, IX, X and proteins C and S; warfarin blocks epoxide reductase, and the oxidized epoxide is recycled" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Vitamin K — the γ-carboxylation cycle (original KYP adaptation)</text>
      </g>

      {/* cycle: K oxidized (quinone) -> K reduced (active) -> carboxylation -> K epoxide -> back */}
      <g>
        <rect x="24" y="92" width="932" height="292" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        {/* node 1: oxidized K (entering the cycle) */}
        <g>
          <rect x={64} y={130} width={200} height={58} rx="10" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <text x={164} y={153} textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-neural">Vitamin K (oxidized)</text>
          <text x={164} y={168} textAnchor="middle" fontSize="8" className="fill-muted-foreground">quinone form — needs activation</text>
        </g>
        {/* node 2: reduced K (active cofactor) */}
        <g>
          <rect x={64} y={270} width={200} height={58} rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
          <text x={164} y={293} textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-brand">Vitamin K (reduced)</text>
          <text x={164} y={308} textAnchor="middle" fontSize="8" className="fill-muted-foreground">hydroquinone — the ACTIVE cofactor</text>
        </g>
        {/* arrow 1: oxidized -> reduced via epoxide reductase */}
        <g stroke="currentColor" strokeWidth="1.8" className="text-muted-foreground" fill="currentColor">
          <line x1={164} y1={188} x2={164} y2={262} />
          <path d="M 164 270 l -5 -9 h 10 z" stroke="none" />
        </g>
        <g>
          <rect x={186} y={204} width={150} height={36} rx="9" className="fill-secondary stroke-border" strokeWidth="1.1" />
          <text x={261} y={220} textAnchor="middle" fontSize="9" fontWeight="700" className="fill-foreground">Epoxide reductase</text>
          <text x={261} y={232} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">(the activation enzyme)</text>
        </g>
        {/* warfarin inhibition on epoxide reductase */}
        <g>
          <line x1={336} y1={222} x2={404} y2={222} strokeWidth="2.2" className="stroke-emergency" />
          <line x1={404} y1={206} x2={404} y2={238} strokeWidth="2.6" className="stroke-emergency" />
          <rect x={414} y={204} width={116} height={36} rx="9" className="fill-emergency-soft" />
          <text x={472} y={220} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">Warfarin ⊟</text>
          <text x={472} y={232} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">inhibits K activation</text>
        </g>

        {/* node 3: the carboxylation reaction (center-right) */}
        <g>
          <rect x={556} y={124} width={380} height={70} rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x={746} y={148} textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">γ-carboxylation of glutamic acid residues</text>
          <text x={746} y={164} textAnchor="middle" fontSize="8.6" className="fill-muted-foreground">on clotting proteins: factors II, VII, IX, X</text>
          <text x={746} y={180} textAnchor="middle" fontSize="8.6" className="fill-muted-foreground">and proteins C and S (γ-carboxyglutamate = Gla)</text>
        </g>
        {/* arrow 2: reduced K -> carboxylation */}
        <path d="M 264 299 C 380 299, 470 240, 552 180" fill="none" strokeWidth="1.8" className="stroke-muted-foreground" />
        <polygon points="556,178 544,176 548,188" className="fill-muted-foreground" />
        <text x={330} y={286} fontSize="8.5" fontWeight="700" className="fill-foreground">cofactor for carboxylation</text>

        {/* node 4: K epoxide (byproduct) */}
        <g>
          <rect x={556} y={268} width={380} height={58} rx="10" className="fill-secondary stroke-border" strokeWidth="1.4" />
          <text x={746} y={291} textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">Vitamin K 2,3-epoxide (oxidized byproduct)</text>
          <text x={746} y={306} textAnchor="middle" fontSize="8" className="fill-muted-foreground">released after the carboxylation — must be recycled</text>
        </g>
        {/* arrow 3: carboxylation -> epoxide */}
        <g stroke="currentColor" strokeWidth="1.8" className="text-muted-foreground" fill="currentColor">
          <line x1={746} y1={194} x2={746} y2={260} />
          <path d="M 746 268 l -5 -9 h 10 z" stroke="none" />
        </g>
        {/* arrow 4: epoxide -> back to epoxide reductase (cycle close) */}
        <path d="M 556 297 C 480 297, 430 258, 344 240" fill="none" strokeWidth="1.8" strokeDasharray="6 4" className="stroke-muted-foreground" />
        <polygon points="340,239 350,234 350,246" className="fill-muted-foreground" />
        <text x={404} y={286} fontSize="8.5" className="fill-muted-foreground">recycled — the loop closes</text>
      </g>

      {/* deficiency strip */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">K is for Koagulation — the deficiency picture</text>
        <text x="42" y="450" fontSize="9" className="fill-muted-foreground">Neonatal hemorrhage: ↑ PT, ↑ aPTT, NORMAL bleeding time — sterile newborn intestines cannot synthesize K; vitamin K injection at birth prevents hemorrhagic disease.</text>
        <text x="42" y="468" fontSize="9" className="fill-muted-foreground">Also: prolonged broad-spectrum antibiotics (kill the synthesizing microbiota) and hepatocellular disease (cannot activate/recycle K).</text>
        <text x="42" y="490" fontSize="8.5" fontWeight="700" className="fill-foreground">Not in breast milk — &ldquo;breast-fed infants Don&rsquo;t Know about vitamins D and K.&rdquo; Sources: intestinal microbiota + leafy greens.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP adaptation — the source&rsquo;s cycle logic (epoxide reductase activation → γ-carboxylation cofactor → recycling) with warfarin&rsquo;s blockade.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Zinc — acrodermatitis enteropathica (photo-sign schematic)
// ---------------------------------------------------------------------------

export function AcrodermatitisEnteropathica() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Acrodermatitis enteropathica redrawn as an original schematic: inflammatory rash around body openings (periorificial — mouth and eyes) and on acral tips of fingers and toes, with the triad of hair loss, diarrhea, and rash from a congenital intestinal zinc absorption defect" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Acrodermatitis enteropathica — periorificial + acral rash (original KYP schematic)</text>
      </g>

      {/* face schematic with periorificial rash */}
      <g>
        <rect x="24" y="80" width="560" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Around the body openings — mouth, eyes, nose</text>
        {/* face */}
        <ellipse cx={240} cy={216} rx={92} ry={110} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* eyes */}
        <ellipse cx={204} cy={190} rx={20} ry={10} className="fill-muted/40 stroke-foreground" strokeWidth="1.6" />
        <ellipse cx={276} cy={190} rx={20} ry={10} className="fill-muted/40 stroke-foreground" strokeWidth="1.6" />
        <circle cx={204} cy={190} r={4} className="fill-foreground" />
        <circle cx={276} cy={190} r={4} className="fill-foreground" />
        {/* nose */}
        <path d="M 240 202 L 232 226 L 248 226 Z" className="fill-muted/40 stroke-foreground" strokeWidth="1.4" />
        {/* mouth */}
        <path d="M 210 260 C 226 272, 254 272, 270 260" fill="none" strokeWidth="2.4" className="stroke-foreground" />
        {/* periorificial rash: crusted ring around mouth */}
        <path d="M 196 252 C 214 240, 266 240, 284 252 C 288 274, 272 292, 240 294 C 208 292, 192 274, 196 252 Z" className="fill-warning/40 stroke-warning" strokeWidth="2" strokeDasharray="5 3" />
        {/* periorbital rash rings */}
        <ellipse cx={204} cy={190} rx={27} ry={16} fill="none" strokeWidth="2" className="stroke-warning" strokeDasharray="4 3" />
        <ellipse cx={276} cy={190} rx={27} ry={16} fill="none" strokeWidth="2" className="stroke-warning" strokeDasharray="4 3" />
        {/* scale/crust flecks */}
        {[
          [198, 248], [222, 242], [252, 242], [280, 250], [206, 270], [238, 276], [268, 268],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={2.4} className="fill-warning" />
        ))}
        <text x={352} y={168} fontSize="9" fontWeight="700" className="fill-warning">periorificial — around every opening</text>
        <text x={352} y={180} fontSize="8" className="fill-muted-foreground">erythematous, scaly, crusted plaques;</text>
        <text x={352} y={192} fontSize="8" className="fill-muted-foreground">skin raw and &ldquo;weeping&rdquo; around mouth + eyes</text>
        <text x={42} y={352} fontSize="8.5" className="fill-muted-foreground">Congenital defect of intestinal zinc absorption — the rash is the visible half of the triad.</text>
      </g>

      {/* acral hand schematic */}
      <g>
        <rect x="604" y="80" width="352" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Acral — the tips of fingers and toes</text>
        {/* hand schematic: palm + fingers */}
        <path d="M 690 296 C 686 260, 700 236, 726 232 L 796 236 C 822 240, 834 258, 832 282 C 830 306, 810 316, 788 312 L 712 314 C 696 312, 692 306, 690 296 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={712 + i * 26} y={196} width={18} height={44} rx={9} className="fill-muted/20 stroke-foreground" strokeWidth="1.8" />
        ))}
        <rect x={676} y={248} width={20} height={46} rx={10} className="fill-muted/20 stroke-foreground" strokeWidth="1.8" transform="rotate(-28 686 271)" />
        {/* acral rash: inflamed fingertips */}
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={712 + i * 26} y={196} width={18} height={16} rx={8} className="fill-warning/70 stroke-warning" strokeWidth="1.6" />
        ))}
        <text x={620} y={340} fontSize="9" fontWeight="700" className="fill-warning">inflamed, scaly fingertips and toe tips</text>
        <text x={620} y={356} fontSize="8" className="fill-muted-foreground">distal — &ldquo;acro&rdquo; = the far ends</text>
        <text x={620} y={374} fontSize="8" className="fill-muted-foreground">Zinc: 100+ enzymes, zinc fingers; deficiency also delays wound healing, suppresses immunity, hypogonadism, dysgeusia, anosmia.</text>
      </g>

      {/* bottom strip: the triad */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">The triad — hair loss + diarrhea + periorificial/acral rash</text>
        {[
          { x: 42, d: "Hair loss", note: "↓ adult hair (axillary, facial, pubic)" },
          { x: 340, d: "Diarrhea", note: "enteritis" },
          { x: 640, d: "Periorificial/acral rash", note: "around openings + tips" },
        ].map((s) => (
          <g key={s.d}>
            <rect x={s.x} y={438} width={280} height={34} rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1" />
            <text x={s.x + 14} y={452} fontSize="9.5" fontWeight="800" className="fill-warning">{s.d}</text>
            <text x={s.x + 14} y={465} fontSize="8" className="fill-muted-foreground">{s.note}</text>
          </g>
        ))}
        <text x="42" y="490" fontSize="8.5" fontWeight="700" className="fill-foreground">May predispose to alcoholic cirrhosis; delayed wound healing and suppressed immunity round out severe zinc deficiency.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source photograph&rsquo;s diagnostic pattern (label A: periorificial + acral inflammatory rash) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Kwashiorkor — protein-energy malnutrition with edema (photo-sign schematic)
// ---------------------------------------------------------------------------

export function KwashiorkorIllustration() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Kwashiorkor redrawn as an original schematic: a small child with a swollen protuberant abdomen from edema and fatty liver, thin extremities with pitting edema of the feet, and the MEALS mnemonic of malnutrition, edema, anemia, liver fatty change, and skin lesions" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Kwashiorkor — protein malnutrition WITH edema (original KYP schematic)</text>
      </g>

      {/* child schematic */}
      <g>
        <rect x="24" y="80" width="560" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">The clinical picture — small child, swollen abdomen</text>
        {/* head */}
        <circle cx={218} cy={140} r={34} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* hair patch (depigmented, sparse) */}
        <path d="M 188 126 C 198 108, 238 108, 250 124 C 242 116, 226 112, 218 112 C 206 112, 194 118, 188 126 Z" className="fill-warning/50 stroke-warning" strokeWidth="1.4" />
        {/* torso with protuberant abdomen */}
        <rect x={186} y={178} width={64} height={74} rx={10} className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        <ellipse cx={218} cy={218} rx={54} ry={42} className="fill-warning/35 stroke-warning" strokeWidth="2.4" />
        {/* swollen belly highlight arc */}
        <path d="M 172 206 C 178 226, 196 244, 218 250 C 240 244, 258 226, 264 206" fill="none" strokeWidth="1.6" className="stroke-warning" strokeDasharray="5 3" />
        {/* thin arms */}
        <line x1={186} y1={192} x2={162} y2={252} strokeWidth="9" strokeLinecap="round" className="stroke-foreground/80" />
        <line x1={250} y1={192} x2={274} y2={252} strokeWidth="9" strokeLinecap="round" className="stroke-foreground/80" />
        {/* thin legs */}
        <line x1={202} y1={252} x2={198} y2={322} strokeWidth="10" strokeLinecap="round" className="stroke-foreground/80" />
        <line x1={236} y1={252} x2={240} y2={322} strokeWidth="10" strokeLinecap="round" className="stroke-foreground/80" />
        {/* pitting edema: swollen feet rings */}
        <ellipse cx={196} cy={332} rx={20} ry={11} className="fill-brand/40 stroke-brand" strokeWidth="1.6" />
        <ellipse cx={242} cy={332} rx={20} ry={11} className="fill-brand/40 stroke-brand" strokeWidth="1.6" />
        {/* labels */}
        <line x1={268} y1={214} x2={330} y2={188} strokeWidth="1.5" className="stroke-warning" />
        <text x={336} y={182} fontSize="9" fontWeight="700" className="fill-warning">swollen abdomen</text>
        <text x={336} y={194} fontSize="8" className="fill-muted-foreground">edema (↓ oncotic pressure, ↓ albumin + ↑ ADH)</text>
        <text x={336} y={206} fontSize="8" className="fill-muted-foreground">+ fatty liver (↓ apolipoprotein → deposition)</text>
        <line x1={256} y1={330} x2={316} y2={322} strokeWidth="1.4" className="stroke-brand" />
        <text x={320} y={320} fontSize="8.5" fontWeight="700" className="fill-brand">pitting edema of the feet</text>
        <text x={336} y={332} fontSize="8" className="fill-muted-foreground">thin extremities above the swelling</text>
        <text x={42} y={368} fontSize="8" className="fill-muted-foreground">Skin lesions (hyperkeratosis, dyspigmentation — &ldquo;flaky paint&rdquo;) and hair changes complete the picture.</text>
      </g>

      {/* MEALS mnemonic panel */}
      <g>
        <rect x="604" y="80" width="352" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">MEALS — protein-deficient MEALS</text>
        {[
          { l: "M", d: "Malnutrition", n: "protein-deficient diet" },
          { l: "E", d: "Edema", n: "↓ oncotic pressure + ↑ ADH" },
          { l: "A", d: "Anemia", n: "" },
          { l: "L", d: "Liver (fatty)", n: "↓ apolipoprotein synthesis" },
          { l: "S", d: "Skin lesions", n: "hyperkeratosis, dyspigmentation" },
        ].map((s, i) => (
          <g key={s.l}>
            <rect x={620} y={118 + i * 50} width={320} height={40} rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
            <circle cx={644} cy={138 + i * 50} r={13} className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
            <text x={644} y={142 + i * 50} textAnchor="middle" fontSize="11" fontWeight="800" className="fill-warning">{s.l}</text>
            <text x={666} y={134 + i * 50} fontSize="9.5" fontWeight="700" className="fill-foreground">{s.d}</text>
            <text x={666} y={148 + i * 50} fontSize="7.8" className="fill-muted-foreground">{s.n}</text>
          </g>
        ))}
        <text x={620} y={376} fontSize="8" className="fill-muted-foreground">Kwashiorkor = enough calories, not enough protein.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">The exam discriminator — edema or not</text>
        <text x="42" y="450" fontSize="9" className="fill-muted-foreground">Kwashiorkor: protein malnutrition → edema, fatty liver, skin lesions, swollen abdomen. Marasmus: calorie deficiency, NO edema — muscle wasting.</text>
        <text x="42" y="468" fontSize="9" className="fill-muted-foreground">Edema mechanism: ↓ serum albumin → ↓ plasma oncotic pressure (+ ↑ ADH) → third-spaced fluid — visible as the swollen belly and pitting feet.</text>
        <text x="42" y="490" fontSize="8.5" fontWeight="700" className="fill-foreground">Linear growth is maintained in ACUTE protein-energy malnutrition (vs chronic malnutrition).</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source photograph&rsquo;s diagnostic pattern (label A: small child, swollen abdomen) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Marasmus — calorie deficiency without edema (photo-sign schematic)
// ---------------------------------------------------------------------------

export function MarasmusIllustration() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Marasmus redrawn as an original schematic: a child with severe generalized muscle wasting and loss of subcutaneous fat, visible ribs, gaunt old-man face from sunken cheeks, and no edema — calorie deficiency without entirely absent nutrients" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Marasmus — calorie deficiency WITHOUT edema (original KYP schematic)</text>
      </g>

      {/* child schematic — wasted */}
      <g>
        <rect x="24" y="80" width="560" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">The clinical picture — muscle wasting, no swelling</text>
        {/* gaunt head: sunken cheeks, old-man look */}
        <path d="M 190 122 C 200 100, 250 100, 260 122 C 266 146, 256 168, 240 176 L 210 176 C 194 168, 184 146, 190 122 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {/* sunken cheeks (concave shadows) */}
        <path d="M 198 148 C 204 158, 210 160, 214 156" fill="none" strokeWidth="1.6" className="stroke-foreground/50" />
        <path d="M 252 148 C 246 158, 240 160, 236 156" fill="none" strokeWidth="1.6" className="stroke-foreground/50" />
        {/* temporal wasting hollows */}
        <path d="M 192 130 C 196 124, 200 122, 204 122" fill="none" strokeWidth="1.4" className="stroke-foreground/40" />
        <path d="M 258 130 C 254 124, 250 122, 246 122" fill="none" strokeWidth="1.4" className="stroke-foreground/40" />
        {/* thin neck */}
        <rect x={216} y={176} width={18} height={18} className="fill-muted/20 stroke-foreground" strokeWidth="1.6" />
        {/* narrow torso with visible ribs */}
        <path d="M 200 194 L 250 194 L 258 268 L 192 268 Z" className="fill-muted/20 stroke-foreground" strokeWidth="2" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M 204 ${208 + i * 14} C 220 ${204 + i * 14}, 236 ${204 + i * 14}, 248 ${208 + i * 14}`} fill="none" strokeWidth="1.5" className="stroke-foreground/70" />
        ))}
        {/* stick arms */}
        <line x1={200} y1={200} x2={178} y2={262} strokeWidth="6" strokeLinecap="round" className="stroke-foreground/80" />
        <line x1={250} y1={200} x2={272} y2={262} strokeWidth="6" strokeLinecap="round" className="stroke-foreground/80" />
        {/* stick legs */}
        <line x1={212} y1={268} x2={208} y2={330} strokeWidth="7" strokeLinecap="round" className="stroke-foreground/80" />
        <line x1={240} y1={268} x2={244} y2={330} strokeWidth="7" strokeLinecap="round" className="stroke-foreground/80" />
        {/* feet — NO edema rings (drawn flat, thin) */}
        <path d="M 198 334 h 20" strokeWidth="5" strokeLinecap="round" className="stroke-foreground/80" />
        <path d="M 234 334 h 20" strokeWidth="5" strokeLinecap="round" className="stroke-foreground/80" />
        {/* no-edema chip */}
        <rect x={300} y={316} width={244} height={22} rx={11} className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x={422} y={331} textAnchor="middle" fontSize="8.6" fontWeight="800" className="fill-brand">NO edema — nothing third-spaces</text>
        {/* labels */}
        <text x={300} y={148} fontSize="9" fontWeight="700" className="fill-foreground">gaunt &ldquo;old-man&rdquo; face</text>
        <text x={300} y={160} fontSize="8" className="fill-muted-foreground">sunken cheeks, temporal wasting</text>
        <text x={300} y={182} fontSize="8" className="fill-muted-foreground">(loss of buccal fat pads)</text>
        <line x1={252} y1={228} x2={292} y2={228} strokeWidth="1.4" className="stroke-foreground/50" />
        <text x={298} y={226} fontSize="9" fontWeight="700" className="fill-foreground">ribs visible, muscle + fat gone</text>
        <text x={298} y={238} fontSize="8" className="fill-muted-foreground">&ldquo;skeleton-like&rdquo; generalized wasting</text>
      </g>

      {/* definition panel */}
      <g>
        <rect x="604" y="80" width="352" height="310" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="620" y="104" fontSize="9.5" fontWeight="800" className="fill-foreground">Marasmus vs kwashiorkor — the sorting rules</text>
        {[
          { t: "Marasmus", n: "diet deficient in CALORIES but no nutrients entirely absent; NO edema; muscle wasting" },
          { t: "Kwashiorkor", n: "PROTEIN malnutrition; edema (↓ albumin/oncotic pressure + ↑ ADH); fatty liver; skin lesions" },
          { t: "Linear growth", n: "maintained in ACUTE protein-energy malnutrition (vs chronic malnutrition)" },
        ].map((s, i) => (
          <g key={s.t}>
            <rect x={620} y={118 + i * 84} width={320} height={72} rx="9" className={i === 0 ? "fill-brand-soft stroke-brand" : "fill-secondary stroke-border"} strokeWidth="1" />
            <text x={634} y={138 + i * 84} fontSize="9.5" fontWeight="800" className={i === 0 ? "fill-brand" : "fill-foreground"}>{s.t}</text>
            <text x={634} y={154 + i * 84} fontSize="8.2" className="fill-muted-foreground">{s.n.split(";")[0]};</text>
            <text x={634} y={168 + i * 84} fontSize="8.2" className="fill-muted-foreground">{s.n.split(";").slice(1).join(";").trim()}</text>
          </g>
        ))}
        <text x={620} y={376} fontSize="8" className="fill-muted-foreground">Think: marasmus = &ldquo;wasting away&rdquo; — everything shrinks, nothing swells.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="404" width="932" height="102" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="428" fontSize="9.5" fontWeight="800" className="fill-foreground">Exam shape — the belly decides</text>
        <text x="42" y="450" fontSize="9" className="fill-muted-foreground">Swollen abdomen + edema + adequate-looking calories → kwashiorkor. Emaciated child, flat belly, no edema, everything wasted → marasmus.</text>
        <text x="42" y="468" fontSize="9" className="fill-muted-foreground">Both are protein-energy malnutrition; the ADH/albumin axis is what separates the edematous kwashiorkor child from the wasted marasmic child.</text>
        <text x="42" y="490" fontSize="8.5" fontWeight="700" className="fill-foreground">Source&rsquo;s line: marasmus results in muscle wasting (label B) — malnutrition not causing edema.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="536" fontSize="8.5" className="fill-muted-foreground">Original KYP schematic — the source photograph&rsquo;s diagnostic pattern (label B: generalized wasting, no edema) redrawn, not reproduced.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Ethanol metabolism — the compartmentalized map (source figure redraw)
// ---------------------------------------------------------------------------

export function EthanolMetabolismMap() {
  const w = 980;
  const h = 620;
  const metab = (x: number, y: number, label: string, sub: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground") => (
    <g>
      <rect x={x} y={y} width={150} height={46} rx="9" className={tone} strokeWidth="1.4" />
      <text x={x + 75} y={y + 20} textAnchor="middle" fontSize="10.5" fontWeight="800" className={textTone}>{label}</text>
      <text x={x + 75} y={y + 34} textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Ethanol metabolism map: ethanol to acetaldehyde via cytosolic alcohol dehydrogenase with NAD+ to NADH (blocked by fomepizole), microsomal CYP2E1 with NADPH to NADP+ and reactive oxygen species, peroxisomal catalase with hydrogen peroxide to water, then acetaldehyde to acetate via mitochondrial acetaldehyde dehydrogenase with NAD+ to NADH (blocked by disulfiram), and acetate to acetyl-CoA" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">Ethanol metabolism — four routes to acetyl-CoA (original KYP redraw)</text>
      </g>

      {/* central spine */}
      {metab(64, 258, "Ethanol", "the substrate", "fill-neural-soft stroke-neural", "fill-neural")}
      {metab(400, 258, "Acetaldehyde", "the toxic middle", "fill-warning-soft stroke-warning", "fill-warning")}
      {metab(700, 258, "Acetate", "nearly done")}
      {metab(700, 360, "Acetyl-CoA", "feeds TCA, ketogenesis, lipogenesis", "fill-brand-soft stroke-brand", "fill-brand")}
      <g stroke="currentColor" strokeWidth="1.7" className="text-muted-foreground" fill="currentColor">
        <line x1="775" y1="304" x2="775" y2="354" />
        <path d="M 775 360 l -4.5 -8 h 9 z" stroke="none" />
      </g>

      {/* CYTOSOL panel — ADH */}
      <g>
        <rect x="64" y="130" width="288" height="104" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={80} y={152} fontSize="9.5" fontWeight="800" className="fill-neural">CYTOSOL — Alcohol dehydrogenase</text>
        <text x={80} y={170} fontSize="8.6" className="fill-muted-foreground">Ethanol + NAD+ → Acetaldehyde + NADH</text>
        <text x={80} y={186} fontSize="8" className="fill-muted-foreground">the main route; zero-order kinetics</text>
        {/* NAD chip */}
        <rect x={80} y={196} width={124} height={22} rx={11} className="fill-brand-soft" />
        <text x={142} y={211} textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-brand">NAD+ → NADH</text>
        {/* fomepizole block on the cytosol arrow */}
        <g>
          <line x1={139} y1={234} x2={139} y2={252} strokeWidth="2" className="stroke-emergency" />
          <line x1={131} y1={252} x2={147} y2={252} strokeWidth="2.4" className="stroke-emergency" />
          <line x1={139} y1={252} x2={139} y2={256} strokeWidth="2" className="stroke-emergency" />
          <rect x={158} y={236} width={120} height={20} rx={10} className="fill-emergency-soft" />
          <text x={218} y={250} textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-emergency">Fomepizole ⊟ ADH</text>
        </g>
        <line x1="214" y1="234" x2="214" y2="256" strokeWidth="1.7" stroke="currentColor" className="text-muted-foreground" />
      </g>

      {/* MICROSOME panel — CYP2E1 */}
      <g>
        <rect x="380" y="90" width="288" height="96" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={396} y={112} fontSize="9.5" fontWeight="800" className="fill-neural">MICROSOME — CYP2E1</text>
        <text x={396} y={130} fontSize="8.6" className="fill-muted-foreground">Ethanol + NADPH → Acetaldehyde + NADP+ + ROS</text>
        <text x={396} y={146} fontSize="8" className="fill-muted-foreground">induced by chronic use (drug interactions)</text>
        <rect x={396} y={156} width={128} height={22} rx={11} className="fill-emergency-soft" />
        <text x={460} y={171} textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-emergency">ROS byproduct</text>
      </g>

      {/* PEROXISOME panel — catalase */}
      <g>
        <rect x="380" y="396" width="288" height="96" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={396} y={418} fontSize="9.5" fontWeight="800" className="fill-neural">PEROXISOME — Catalase</text>
        <text x={396} y={436} fontSize="8.6" className="fill-muted-foreground">Ethanol + H2O2 → Acetaldehyde + H2O</text>
        <text x={396} y={452} fontSize="8" className="fill-muted-foreground">minor route; uses peroxide as the oxidant</text>
        <rect x={396} y={462} width={128} height={22} rx={11} className="fill-secondary" />
        <text x={460} y={477} textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-foreground">H2O2 → H2O</text>
      </g>

      {/* MITOCHONDRIA panel — ALDH */}
      <g>
        <rect x="700" y="130" width="256" height="104" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={716} y={152} fontSize="9.5" fontWeight="800" className="fill-neural">MITOCHONDRIA — Acetaldehyde DH</text>
        <text x={716} y={170} fontSize="8.6" className="fill-muted-foreground">Acetaldehyde + NAD+ → Acetate + NADH</text>
        <rect x={716} y={180} width={124} height={22} rx={11} className="fill-brand-soft" />
        <text x={778} y={195} textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-brand">NAD+ → NADH</text>
        {/* disulfiram block on the mitochondria arrow */}
        <g>
          <line x1={812} y1={234} x2={812} y2={252} strokeWidth="2" className="stroke-emergency" />
          <line x1={804} y1={252} x2={820} y2={252} strokeWidth="2.4" className="stroke-emergency" />
          <line x1={812} y1={252} x2={812} y2={256} strokeWidth="2" className="stroke-emergency" />
          <rect x={560} y={236} width={124} height={20} rx={10} className="fill-emergency-soft" />
          <text x={622} y={250} textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-emergency">Disulfiram ⊟ ALDH</text>
        </g>
      </g>

      {/* connecting arrows: ethanol -> all three first-step panels -> acetaldehyde */}
      <g stroke="currentColor" strokeWidth="1.7" className="text-muted-foreground" fill="currentColor">
        {/* ethanol up to microsome */}
        <path d="M 176 258 C 200 220, 300 170, 376 148" fill="none" />
        <path d="M 380 146 l -10 -1 4.5 9 z" stroke="none" />
        {/* ethanol direct to acetaldehyde (cytosol route) */}
        <line x1="214" y1="281" x2="396" y2="281" />
        <path d="M 402 281 l -9 -4.5 v 9 z" stroke="none" />
        {/* ethanol down to peroxisome */}
        <path d="M 176 304 C 200 344, 300 420, 376 436" fill="none" />
        <path d="M 380 438 l -10 -1 4.5 9 z" stroke="none" />
        {/* microsome -> acetaldehyde */}
        <path d="M 668 166 C 700 190, 730 226, 752 254" fill="none" />
        <path d="M 755 258 l -7.5 -7 8.5 -3 z" stroke="none" />
        {/* peroxisome -> acetaldehyde */}
        <path d="M 668 430 C 700 410, 730 350, 752 306" fill="none" />
        <path d="M 755 302 l -8 6.5 8.5 3 z" stroke="none" />
      </g>

      {/* clinical chips */}
      <g>
        <rect x="64" y="396" width="288" height="96" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={80} y={418} fontSize="9.5" fontWeight="800" className="fill-foreground">Why the pharmacology matters</text>
        <text x={80} y={436} fontSize="8.4" className="fill-muted-foreground">Fomepizole — competitive ADH inhibitor; preferred antidote</text>
        <text x={80} y={450} fontSize="8.4" className="fill-muted-foreground">for methanol / ethylene glycol overdose.</text>
        <text x={80} y={468} fontSize="8.4" className="fill-muted-foreground">Ethanol itself is the competitive inhibitor (ADH has higher</text>
        <text x={80} y={482} fontSize="8.4" className="fill-muted-foreground">affinity for ethanol) — an alternative antidote.</text>
      </g>
      <g>
        <rect x="64" y="510" width="892" height="42" rx="10" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x={80} y={527} fontSize="8.8" fontWeight="700" className="fill-foreground">Disulfiram blocks acetaldehyde dehydrogenase → acetaldehyde accumulates → hangover symptoms → discourages drinking.</text>
        <text x={80} y={543} fontSize="8.8" fontWeight="700" className="fill-foreground">Females more susceptible: ↓ gastric ADH, ↓ body size, ↓ percentage of body water. NAD+ is the limiting reagent; ADH runs at zero-order kinetics.</text>
      </g>

      {/* legend */}
      <g>
        <text x="24" y="580" fontSize="8.5" className="fill-muted-foreground">Original KYP redraw — the source figure&rsquo;s four compartments (cytosol, microsome, peroxisome, mitochondria), cofactor labels, and the two blockade points preserved.</text>
        <text x="24" y="596" fontSize="8.5" className="fill-muted-foreground">Catalase drawn with its H2O2 → H2O oxidant pair; CYP2E1 with NADPH → NADP+ and ROS, as in the source.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Ethanol — the NADH/NAD+ consequences map (source logic adapted)
// ---------------------------------------------------------------------------

export function EthanolNadhConsequences() {
  const w = 980;
  const h = 660;
  const chip = (x: number, y: number, label: string, sub: string, tone = "fill-secondary stroke-border", textTone = "fill-foreground", width = 214) => (
    <g>
      <rect x={x} y={y} width={width} height={50} rx="9" className={tone} strokeWidth="1.3" />
      <text x={x + width / 2} y={y + 21} textAnchor="middle" fontSize="9.5" fontWeight="800" className={textTone}>{label}</text>
      <text x={x + width / 2} y={y + 36} textAnchor="middle" fontSize="7.8" className="fill-muted-foreground">{sub}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The NADH to NAD ratio consequences of ethanol metabolism: high NADH drives pyruvate to lactate causing anion gap metabolic acidosis, oxaloacetate to malate blocking gluconeogenesis causing fasting hypoglycemia, acetyl-CoA into ketogenesis causing ketoacidosis, and DHAP to glycerol-3-phosphate plus acetyl-CoA into fatty acids combining into triglycerides causing hepatic steatosis, while the TCA cycle is inhibited" className="min-w-[940px]">
      <g>
        <rect x="24" y="16" width="932" height="50" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="11" fontWeight="800" className="fill-foreground">The ↑ NADH/NAD+ consequences — four diseases from one ratio (original KYP adaptation)</text>
      </g>

      {/* central hub */}
      <g>
        <rect x="330" y="292" width="320" height="70" rx="14" className="fill-brand-soft stroke-brand" strokeWidth="1.8" />
        <text x={490} y={320} textAnchor="middle" fontSize="12.5" fontWeight="800" className="fill-brand">↑ NADH / NAD+ ratio</text>
        <text x={490} y={338} textAnchor="middle" fontSize="8.6" className="fill-muted-foreground">ethanol oxidation swamps the hepatocyte&rsquo;s NAD pool</text>
        <text x={490} y={352} textAnchor="middle" fontSize="8" className="fill-muted-foreground">NAD+ is the limiting reagent</text>
      </g>

      {/* arm 1 — lactate (upper left) */}
      {chip(60, 110, "Pyruvate → Lactate", "NADH pushes the lactate reaction", "fill-warning-soft stroke-warning", "fill-warning")}
      {chip(60, 196, "↑ Lactate", "ANION GAP metabolic acidosis", "fill-emergency-soft stroke-emergency", "fill-emergency")}
      <g stroke="currentColor" strokeWidth="1.7" className="text-muted-foreground" fill="currentColor">
        <path d="M 274 150 C 310 170, 340 210, 372 288" fill="none" />
        <path d="M 374 292 l -7 -7.5 9.5 -1.5 z" stroke="none" />
      </g>

      {/* arm 2 — gluconeogenesis blocked (upper right) */}
      {chip(700, 110, "OAA → Malate", "NADH diverts OAA away", "fill-warning-soft stroke-warning", "fill-warning")}
      {chip(700, 196, "↓ Gluconeogenesis", "FASTING HYPOGLYCEMIA", "fill-emergency-soft stroke-emergency", "fill-emergency")}
      <g stroke="currentColor" strokeWidth="1.7" className="text-muted-foreground" fill="currentColor">
        <path d="M 700 150 C 664 170, 634 210, 608 288" fill="none" />
        <path d="M 606 292 l 7 -7.5 -9.5 -1.5 z" stroke="none" />
      </g>

      {/* arm 3 — ketogenesis (lower right) */}
      {chip(700, 420, "Acetyl-CoA → Ketogenesis", "TCA cycle is inhibited", "fill-warning-soft stroke-warning", "fill-warning")}
      {chip(700, 506, "↑ Ketoacids", "KETOACIDOSIS (alcoholic)", "fill-emergency-soft stroke-emergency", "fill-emergency")}
      <g stroke="currentColor" strokeWidth="1.7" className="text-muted-foreground" fill="currentColor">
        <path d="M 700 445 C 664 420, 634 386, 608 366" fill="none" />
        <path d="M 604 362 l 9.5 3.5 -2.5 -9.5 z" stroke="none" />
      </g>

      {/* arm 4 — hepatosteatosis (lower left), the 4A/4B pair */}
      {chip(60, 420, "DHAP → Glycerol-3-P (4A)", "NADH drives the glycerol backbone", "fill-warning-soft stroke-warning", "fill-warning")}
      {chip(60, 506, "Acetyl-CoA → Fatty acids (4B)", "lipogenesis switched on", "fill-warning-soft stroke-warning", "fill-warning")}
      {chip(320, 506, "↑ Triglycerides", "HEPATOSTEATOSIS (fatty liver)", "fill-emergency-soft stroke-emergency", "fill-emergency", 240)}
      <g stroke="currentColor" strokeWidth="1.7" className="text-muted-foreground" fill="currentColor">
        <path d="M 274 445 C 310 420, 340 390, 372 366" fill="none" />
        <path d="M 376 362 l -9.5 3.5 2.5 9.5 z" stroke="none" />
        <line x1="274" y1="531" x2="316" y2="531" />
        <path d="M 320 531 l -9 -4.5 v 9 z" stroke="none" />
      </g>
      {/* 4A+4B merge note */}
      <text x={330} y={480} fontSize="8.2" className="fill-muted-foreground">glycerol-3-P (4A) + fatty acids (4B) → triglycerides</text>

      {/* TCA inhibition marker on hub */}
      <g>
        <rect x="396" y="392" width={188} height={22} rx={11} className="fill-emergency-soft" />
        <text x={490} y={407} textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-emergency">TCA cycle INHIBITED</text>
        <line x1={490} y1={362} x2={490} y2={392} strokeWidth="1.6" className="stroke-emergency" strokeDasharray="4 3" />
      </g>

      {/* legend */}
      <g>
        <rect x="24" y="580" width="892" height="56" rx="10" className="fill-card stroke-border" strokeWidth="1.4" />
        <line x1={44} y1={596} x2={78} y2={596} strokeWidth="2.4" className="stroke-brand" />
        <text x={86} y={599} fontSize="8.6" className="fill-muted-foreground">Pathways STIMULATED by ↑ NADH/NAD+ (lactate, malate, glycerol-3-P, ketogenesis, fatty acids)</text>
        <line x1={44} y1={618} x2={78} y2={618} strokeWidth="2.4" strokeDasharray="5 4" className="stroke-emergency" />
        <text x={86} y={621} fontSize="8.6" className="fill-muted-foreground">Pathways INHIBITED by ↑ NADH/NAD+ (gluconeogenesis, TCA cycle) — the source&rsquo;s legend logic</text>
      </g>
    </svg>
  );
}
