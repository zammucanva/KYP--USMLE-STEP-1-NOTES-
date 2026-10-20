"use client";

// Original KYP microbiology visuals (M batch).
// Theme tokens only. Redraws preserve the source's label sets, layer logic,
// and clinical anchors; printed cell art / micrographs / radiographs are
// conveyed schematically (COPYRIGHTED_NO_REPUBLISH — never reproduced).

// ---------------------------------------------------------------------------
// M1 — Bacterial structures: the layered-envelope anatomy of the two gram
// archetypes + the structure-function roster
// (source: the 9-row structure table + the Gram⊕/Gram⊝ cell comparison art,
//  pdf 144 / book 122 — the printed cells are raster art, described here)
// ---------------------------------------------------------------------------

export function BacterialCellAnatomy() {
  const w = 980;
  const h = 780;
  const roster = [
    { n: "Flagellum", c: "Proteins", f: "Motility" },
    { n: "Pilus/fimbria", c: "Glycoprotein", f: "Adherence; sex pilus forms during conjugation" },
    { n: "Spore", c: "Keratinlike coat, dipicolinic acid, peptidoglycan, DNA", f: "Survival: resist dehydration, heat, chemicals" },
    { n: "Capsule", c: "Discrete polysaccharide layer (rarely proteins)", f: "Protects against phagocytosis" },
    { n: "Slime (S) layer", c: "Loose network of polysaccharides", f: "Adherence to surfaces; biofilm (indwelling catheters)" },
    { n: "Outer membrane", c: "Outer leaflet LPS/LOS; embedded porins/OMPs; inner leaflet phospholipids — GRAM ⊝ ONLY", f: "Endotoxin (lipid A → TNF, IL-1); O polysaccharide antigenic; porins transport" },
    { n: "Periplasm", c: "Space between cytoplasmic and outer membranes (peptidoglycan in middle) — GRAM ⊝ ONLY", f: "Accumulates exiting components incl. β-lactamases" },
    { n: "Cell wall", c: "Peptidoglycan: sugar backbone, peptide side chains cross-linked by transpeptidase", f: "Netlike rigid support; protects against osmotic pressure" },
    { n: "Cytoplasmic membrane", c: "Phospholipid bilayer sac; embedded proteins (PBPs); gram ⊕ only: lipoteichoic acids extend to exterior", f: "Oxidative and transport enzymes; PBPs in wall synthesis; lipoteichoic acids → TNF-α, IL-1" },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Bacterial structures, an original KYP anatomy map of the two gram archetypes. LEFT — GRAM POSITIVE: surface capsule and slime; a THICK peptidoglycan cell wall (sugar backbone with peptide side chains cross-linked by transpeptidase — netlike rigid support against osmotic pressure); lipoteichoic acids extending from the cytoplasmic membrane through the wall to the exterior (inducing TNF-alpha and IL-1); cytoplasmic membrane with embedded PBPs; flagellum for motility and pilus/fimbria for adherence (the sex pilus forms during conjugation). RIGHT — GRAM NEGATIVE: surface capsule and slime; an OUTER MEMBRANE whose outer leaflet contains endotoxin LPS/LOS (lipid A induces TNF and IL-1; antigenic O polysaccharide; most OMPs antigenic), embedded porins and other outer membrane proteins (porins transport across the outer membrane), and inner leaflet phospholipids; a WIDE periplasm accumulating components exiting the cell including beta-lactamases, with the peptidoglycan wall thin and in the middle; cytoplasmic membrane with PBPs. Middle strip: common to both (flagellum, pilus, capsule, slime, peptidoglycan wall, cytoplasmic membrane), unique to gram positive (lipoteichoic acids), unique to gram negative (outer membrane, endotoxin/LPS, porins, wide periplasm with beta-lactamase). Right rail: the nine-structure roster with chemistry and function, from flagellum (proteins, motility) to cytoplasmic membrane (phospholipid bilayer, PBPs). Bottom cards: the toxin layers (lipid A of gram negative and lipoteichoic acids of gram positive both induce TNF and IL-1), the sporulation kit (keratinlike coat, dipicolinic acid — survival), and the enzyme addresses (PBPs at the cytoplasmic membrane, transpeptidase cross-linking the wall, beta-lactamases in the gram-negative periplasm)" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Bacterial structures — the layered-envelope map (original KYP redraw)</text>
        <rect x="742" y="24" width="190" height="18" rx="9" className="fill-brand-soft" />
        <text x="837" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">structure → chemistry → function</text>
      </g>

      {/* ===== GRAM ⊕ cell (left) ===== */}
      <g>
        <rect x="36" y="76" width="300" height="360" rx="16" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="186" y="96" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">GRAM ⊕</text>
        <text x="186" y="107" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">thick peptidoglycan wall · no outer membrane</text>

        {/* capsule + slime (outermost, dotted) */}
        <rect x="58" y="118" width="256" height="296" rx="14" fill="none" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
        <text x="66" y="132" fontSize="5.6" className="fill-muted-foreground">Capsule (discrete polysaccharides — anti-phagocytic) /</text>
        <text x="66" y="141" fontSize="5.6" className="fill-muted-foreground">Slime (loose network — biofilm on catheters)</text>

        {/* flagellum + pilus */}
        <path d="M 96 118 C 90 104, 76 112, 70 96 C 66 86, 60 92, 58 82" fill="none" className="stroke-brand" strokeWidth="1.6" />
        <text x="66" y="72" fontSize="5.8" fontWeight="700" className="fill-brand">Flagellum — proteins — motility</text>
        <path d="M 276 118 L 300 100" className="stroke-foreground" strokeWidth="1.2" />
        <text x="236" y="92" fontSize="5.8" fontWeight="700" className="fill-muted-foreground">Pilus/fimbria — glycoprotein —</text>
        <text x="236" y="101" fontSize="5.8" fontWeight="700" className="fill-muted-foreground">adherence; sex pilus (conjugation)</text>

        {/* THICK peptidoglycan wall */}
        <rect x="76" y="152" width="220" height="230" rx="10" className="fill-brand-soft/40 stroke-brand" strokeWidth="1.6" />
        <text x="186" y="170" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">THICK PEPTIDOGLYCAN WALL</text>
        <text x="186" y="182" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">sugar backbone; peptide side chains</text>
        <text x="186" y="191" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">cross-linked by transpeptidase —</text>
        <text x="186" y="200" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">netlike rigid support, osmotic protection</text>

        {/* lipoteichoic acids: membrane → exterior (side rails clear of text) */}
        <g className="stroke-emergency" strokeWidth="1.4">
          <path d="M 104 370 L 98 150" fill="none" />
          <path d="M 268 370 L 274 150" fill="none" />
        </g>
        <path d="M 98 150 l 3.5 -6 l 3.5 6 z" className="fill-emergency" />
        <path d="M 274 150 l -3.5 -6 l -3.5 6 z" className="fill-emergency" />
        <text x="186" y="216" textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-emergency">Lipoteichoic acids (GRAM ⊕ ONLY) extend</text>
        <text x="186" y="225" textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-emergency">from membrane to exterior —</text>
        <text x="186" y="234" textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-emergency">induce TNF-α and IL-1</text>

        {/* cytoplasmic membrane + cytoplasm */}
        <rect x="96" y="334" width="180" height="40" rx="7" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="186" y="349" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">CYTOPLASMIC MEMBRANE</text>
        <text x="186" y="359" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">phospholipid bilayer; PBPs; oxidative +</text>
        <text x="186" y="368" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">transport enzymes (wall synthesis)</text>
        <text x="186" y="300" textAnchor="middle" fontSize="6" className="fill-muted-foreground">cytoplasm</text>
        <text x="186" y="311" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">(no periplasm emphasized —</text>
        <text x="186" y="320" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">no outer membrane to bound one)</text>
      </g>

      {/* ===== GRAM ⊝ cell (right) ===== */}
      <g>
        <rect x="356" y="76" width="300" height="360" rx="16" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="506" y="96" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">GRAM ⊝</text>
        <text x="506" y="107" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">outer membrane + wide periplasm</text>

        {/* capsule + slime */}
        <rect x="378" y="118" width="256" height="296" rx="14" fill="none" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
        <text x="386" y="132" fontSize="5.6" className="fill-muted-foreground">Capsule / Slime (same surface chemistry</text>
        <text x="386" y="141" fontSize="5.6" className="fill-muted-foreground">as gram ⊕ — the envelope differs below)</text>

        {/* flagellum + pilus */}
        <path d="M 416 118 C 410 104, 396 112, 390 96 C 386 86, 380 92, 378 82" fill="none" className="stroke-brand" strokeWidth="1.6" />
        <text x="384" y="76" fontSize="5.8" fontWeight="700" className="fill-brand">Flagellum — motility</text>
        <path d="M 636 118 L 658 100" className="stroke-foreground" strokeWidth="1.2" />
        <text x="600" y="94" fontSize="5.8" fontWeight="700" className="fill-muted-foreground">Pilus/fimbria</text>

        {/* OUTER MEMBRANE (three-leaflet card) */}
        <rect x="396" y="152" width="220" height="74" rx="9" className="fill-emergency/10 stroke-emergency" strokeWidth="1.5" />
        <text x="506" y="168" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-emergency">OUTER MEMBRANE (GRAM ⊝ ONLY)</text>
        <text x="506" y="180" textAnchor="middle" fontSize="5.5" className="fill-foreground">outer leaflet: endotoxin (LPS/LOS) — lipid A</text>
        <text x="506" y="189" textAnchor="middle" fontSize="5.5" className="fill-foreground">induces TNF and IL-1; antigenic O polysaccharide</text>
        <text x="506" y="200" textAnchor="middle" fontSize="5.5" className="fill-foreground">embedded: porins + OMPs (most antigenic;</text>
        <text x="506" y="209" textAnchor="middle" fontSize="5.5" className="fill-foreground">porins transport across the membrane)</text>
        <text x="506" y="220" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">inner leaflet: phospholipids</text>

        {/* WIDE periplasm */}
        <rect x="396" y="238" width="220" height="96" rx="9" className="fill-brand-soft/20 stroke-brand" strokeWidth="1.3" />
        <text x="506" y="255" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">WIDE PERIPLASM (GRAM ⊝ ONLY)</text>
        <text x="506" y="267" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">accumulates components exiting the cell,</text>
        <text x="506" y="276" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">including hydrolytic enzymes (β-lactamases)</text>
        <rect x="436" y="286" width="140" height="26" rx="6" className="fill-card stroke-border" strokeWidth="1" />
        <text x="506" y="297" textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-foreground">thin peptidoglycan wall</text>
        <text x="506" y="306" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">in the middle of the space</text>
        <text x="506" y="328" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">space between cytoplasmic membrane</text>
        <text x="506" y="337" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">and outer membrane</text>

        {/* cytoplasmic membrane + cytoplasm */}
        <rect x="416" y="334" width="180" height="40" rx="7" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="506" y="349" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">CYTOPLASMIC MEMBRANE</text>
        <text x="506" y="359" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">phospholipid bilayer; PBPs; oxidative +</text>
        <text x="506" y="368" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">transport enzymes (wall synthesis)</text>
      </g>

      {/* ===== common / unique key strip ===== */}
      <g>
        <rect x="36" y="448" width="620" height="56" rx="10" className="fill-secondary" />
        <text x="52" y="466" fontSize="6.6" fontWeight="800" className="fill-foreground">COMMON TO BOTH</text>
        <text x="52" y="478" fontSize="5.8" className="fill-muted-foreground">flagellum · pilus/fimbria · capsule · slime (S) layer · peptidoglycan wall · cytoplasmic membrane (PBPs)</text>
        <text x="52" y="492" fontSize="6.2" fontWeight="800" className="fill-brand">UNIQUE TO GRAM ⊕: lipoteichoic acids (membrane → exterior; TNF-α, IL-1)</text>
        <text x="52" y="502" fontSize="6.2" fontWeight="800" className="fill-emergency">UNIQUE TO GRAM ⊝: outer membrane (LPS/lipid A, porins) · wide periplasm (β-lactamases)</text>
      </g>

      {/* ===== structure roster rail (right) ===== */}
      <g>
        <rect x="676" y="76" width="280" height="428" rx="12" className="fill-card stroke-border" strokeWidth="1.3" />
        <text x="692" y="98" fontSize="8" fontWeight="800" className="fill-foreground">THE STRUCTURE ROSTER</text>
        <text x="692" y="110" fontSize="6" className="fill-muted-foreground">chemistry and function, structure by structure</text>
        {roster.map((r, i) => (
          <g key={r.n}>
            <text x="692" y={130 + i * 41} fontSize="6.4" fontWeight="800" className={i === 5 || i === 6 ? "fill-emergency" : "fill-foreground"}>{r.n}{(i === 5 || i === 6) ? " — GRAM ⊝ ONLY" : i === 8 ? " — GRAM ⊕: lipoteichoic acids" : ""}</text>
            {r.c.match(/.{1,44}(\s|$)/g)!.slice(0, 2).map((line, j) => (
              <text key={j} x="692" y={139 + j * 8 + i * 41} fontSize="5.4" className="fill-brand">{line.trim()}</text>
            ))}
            {r.f.match(/.{1,44}(\s|$)/g)!.slice(0, 3).map((line, j) => (
              <text key={j} x="692" y={157 + j * 8 + i * 41} fontSize="5.4" className="fill-muted-foreground">{line.trim()}</text>
            ))}
          </g>
        ))}
      </g>

      {/* ===== bottom cards: toxin layers · sporulation · enzyme addresses ===== */}
      <g>
        <rect x="36" y="520" width="296" height="128" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="52" y="540" fontSize="7.2" fontWeight="800" className="fill-foreground">THE TOXIN LAYERS</text>
        <text x="52" y="556" fontSize="5.8" className="fill-foreground">GRAM ⊝: lipid A (the endotoxin of LPS/LOS, outer</text>
        <text x="52" y="566" fontSize="5.8" className="fill-foreground">leaflet) induces TNF and IL-1; antigenic O</text>
        <text x="52" y="576" fontSize="5.8" className="fill-foreground">polysaccharide; most OMPs are antigenic.</text>
        <text x="52" y="592" fontSize="5.8" className="fill-foreground">GRAM ⊕: lipoteichoic acids, extending from the</text>
        <text x="52" y="602" fontSize="5.8" className="fill-foreground">cytoplasmic membrane to the exterior, induce</text>
        <text x="52" y="612" fontSize="5.8" className="fill-foreground">TNF-α and IL-1.</text>
        <text x="52" y="628" fontSize="5.6" fontWeight="700" className="fill-emergency">Same cytokines (TNF, IL-1) — different address: lipid A sits in the outer membrane (gram ⊝); lipoteichoic acids span the wall (gram ⊕).</text>
      </g>
      <g>
        <rect x="348" y="520" width="296" height="128" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="364" y="540" fontSize="7.2" fontWeight="800" className="fill-foreground">THE SPORULATION KIT</text>
        <text x="364" y="556" fontSize="5.8" className="fill-muted-foreground">Spore: keratinlike coat, dipicolinic acid,</text>
        <text x="364" y="566" fontSize="5.8" className="fill-muted-foreground">peptidoglycan, DNA —</text>
        <text x="364" y="582" fontSize="5.8" className="fill-foreground">survival: resist dehydration, heat, chemicals.</text>
        <text x="364" y="600" fontSize="5.8" className="fill-muted-foreground">Capsule: discrete polysaccharide layer —</text>
        <text x="364" y="610" fontSize="5.8" className="fill-muted-foreground">protects against phagocytosis.</text>
        <text x="364" y="626" fontSize="5.8" className="fill-muted-foreground">Slime: loose polysaccharide network — biofilm</text>
        <text x="364" y="636" fontSize="5.8" className="fill-muted-foreground">formation (eg, indwelling catheters).</text>
      </g>
      <g>
        <rect x="660" y="520" width="296" height="128" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="676" y="540" fontSize="7.2" fontWeight="800" className="fill-foreground">THE ENZYME ADDRESSES</text>
        <text x="676" y="556" fontSize="5.8" className="fill-foreground">PBPs — cytoplasmic membrane (both grams):</text>
        <text x="676" y="566" fontSize="5.8" className="fill-muted-foreground">wall synthesis (penicillin-binding proteins).</text>
        <text x="676" y="582" fontSize="5.8" className="fill-foreground">Transpeptidase — the wall: cross-links the</text>
        <text x="676" y="592" fontSize="5.8" className="fill-muted-foreground">peptide side chains of peptidoglycan.</text>
        <text x="676" y="608" fontSize="5.8" className="fill-foreground">β-lactamases — the periplasm (GRAM ⊝ ONLY):</text>
        <text x="676" y="618" fontSize="5.8" className="fill-muted-foreground">hydrolytic enzymes exiting the cell.</text>
        <text x="676" y="634" fontSize="5.8" className="fill-foreground">Porins — the outer membrane: transport.</text>
      </g>

      {/* anchors strip */}
      <g>
        <rect x="36" y="662" width="920" height="52" rx="9" className="fill-secondary" />
        <text x="496" y="682" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Anchors: outer membrane and periplasm are GRAM ⊝ ONLY (lipid A → TNF/IL-1; porins transport; β-lactamases accumulate) · lipoteichoic acids are GRAM ⊕ ONLY (TNF-α, IL-1)</text>
        <text x="496" y="696" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Capsule = anti-phagocytic · Slime = biofilm (indwelling catheters) · Spore = keratinlike coat + dipicolinic acid (resists dehydration, heat, chemicals) · Pilus = adherence; sex pilus = conjugation</text>
      </g>

      {/* footer */}
      <text x="24" y="738" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's cell comparison art (pdf 144 / book 122 — the printed Gram⊕/Gram⊝ cells are raster art, COPYRIGHTED, never reproduced; conveyed schematically here). The 9-row structure table is the note's verbatim table block.</text>
    </svg>
  );
}
