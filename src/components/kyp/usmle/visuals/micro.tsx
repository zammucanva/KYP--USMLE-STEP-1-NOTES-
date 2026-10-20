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

// ---------------------------------------------------------------------------
// M2 — Stains & difficult-to-stain organisms: the gram decision + the
// special-stain roster (the poor-stainer failure modes)
// (source: the Stains table, pdf 145 / book 123 — the 5 printed micrographs
//  [Trypanosomes, T. whipplei, Mycobacteria, C. neoformans, Coccidioides] are
//  raster photos, described here; FA's printed mnemonics are NOT reproduced)
// ---------------------------------------------------------------------------

export function GramStainDecisionMap() {
  const w = 980;
  const h = 780;
  const specialStains = [
    { n: "Giemsa", t: "H pylori, Chlamydia, Borrelia, Rickettsia, Trypanosomes, Plasmodium" },
    { n: "Periodic acid–Schiff (PAS)", t: "Stains glycogen, mucopolysaccharides — Whipple disease (Tropheryma whipplei)" },
    { n: "Ziehl-Neelsen (carbol fuchsin)", t: "Acid-fast bacteria (Mycobacteria, Nocardia — stains mycolic acid in cell wall); protozoa (Cryptosporidium oocysts)" },
    { n: "India ink", t: "Cryptococcus neoformans — mucicarmine can also stain the thick polysaccharide capsule red" },
    { n: "Silver", t: "Helicobacter pylori, Legionella, Bartonella henselae, and fungi (Coccidioides, Pneumocystis jirovecii, Aspergillus fumigatus)" },
    { n: "Fluorescent antibody", t: "Many bacteria, viruses, Pneumocystis jirovecii, Giardia, Cryptosporidium — e.g., FTA-ABS for syphilis" },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Stains, an original KYP decision map. Top left: the gram stain reads the peptidoglycan layer — a thick peptidoglycan layer retains the crystal violet dye (gram positive, purple); a thin peptidoglycan layer turns red or pink with the counterstain (gram negative). It is the first-line lab test in bacterial identification. Below it, the four ways organisms fail the gram stain: Treponema and Leptospira are too thin to be visualized; Mycobacteria have a cell wall with high lipid content; Mycoplasma and Ureaplasma have no cell wall; and Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, and Ehrlichia are primarily intracellular — Chlamydia also lack classic peptidoglycan because of deficient muramic acid. Right rail: the special-stain roster — Giemsa (H pylori, Chlamydia, Borrelia, Rickettsia, Trypanosomes, Plasmodium), periodic acid-Schiff (stains glycogen and mucopolysaccharides; Whipple disease / Tropheryma whipplei), Ziehl-Neelsen carbol fuchsin (acid-fast: Mycobacteria and Nocardia — stains mycolic acid in the cell wall; protozoa: Cryptosporidium oocysts; auramine-rhodamine more often used for screening — inexpensive, more sensitive), India ink (Cryptococcus neoformans; mucicarmine can also stain the thick polysaccharide capsule red), silver (Helicobacter pylori, Legionella, Bartonella henselae, and fungi — Coccidioides, Pneumocystis jirovecii, Aspergillus fumigatus), and fluorescent antibody (many bacteria, viruses, Pneumocystis jirovecii, Giardia, and Cryptosporidium; FTA-ABS for syphilis). Bottom strip: the five printed micrographs are conveyed as descriptions only (trypanosomes, Tropheryma whipplei, mycobacteria, Cryptococcus neoformans, Coccidioides)" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Stains — the gram decision & the special-stain roster (original KYP redraw)</text>
        <rect x="770" y="24" width="162" height="18" rx="9" className="fill-brand-soft" />
        <text x="851" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">read the wall → read the bug</text>
      </g>

      {/* ===== gram decision (left top) ===== */}
      <g>
        <rect x="36" y="76" width="440" height="180" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="52" y="98" fontSize="9" fontWeight="800" className="fill-foreground">GRAM STAIN — first-line lab test in bacterial identification</text>
        <rect x="52" y="112" width="198" height="124" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="151" y="132" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-brand">THICK peptidoglycan layer</text>
        <rect x="76" y="144" width="150" height="34" rx="6" className="fill-brand/15" />
        <text x="151" y="158" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-brand">retains CRYSTAL VIOLET dye</text>
        <text x="151" y="170" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">GRAM ⊕</text>
        <text x="151" y="194" textAnchor="middle" fontSize="6" className="fill-muted-foreground">the thick wall holds the dye —</text>
        <text x="151" y="204" textAnchor="middle" fontSize="6" className="fill-muted-foreground">the cell stays purple</text>
        <text x="151" y="224" textAnchor="middle" fontSize="5.8" className="fill-muted-foreground">read with M1's envelope logic:</text>
        <text x="151" y="233" textAnchor="middle" fontSize="5.8" className="fill-muted-foreground">wall thickness = stain retention</text>
        <rect x="262" y="112" width="198" height="124" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="361" y="132" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-emergency">THIN peptidoglycan layer</text>
        <rect x="286" y="144" width="150" height="34" rx="6" className="fill-emergency/10" />
        <text x="361" y="158" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-emergency">turns RED/PINK with</text>
        <text x="361" y="170" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-emergency">counterstain — GRAM ⊝</text>
        <text x="361" y="194" textAnchor="middle" fontSize="6" className="fill-muted-foreground">the thin wall releases the primary</text>
        <text x="361" y="204" textAnchor="middle" fontSize="6" className="fill-muted-foreground">dye; the counterstain paints it</text>
        <text x="361" y="224" textAnchor="middle" fontSize="5.8" className="fill-muted-foreground">the counterstain: safranin-type</text>
        <text x="361" y="233" textAnchor="middle" fontSize="5.8" className="fill-muted-foreground">red/pink readout</text>
      </g>

      {/* ===== poor stainers (left bottom) ===== */}
      <g>
        <rect x="36" y="272" width="440" height="376" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="294" fontSize="9" fontWeight="800" className="fill-foreground">THESE DO NOT GRAM STAIN WELL — four failure modes</text>
        <rect x="52" y="306" width="408" height="76" rx="9" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="66" y="326" fontSize="7" fontWeight="800" className="fill-foreground">① TOO THIN TO BE VISUALIZED</text>
        <text x="66" y="340" fontSize="6.4" fontWeight="700" className="fill-brand">Treponema, Leptospira</text>
        <text x="66" y="354" fontSize="5.8" className="fill-muted-foreground">the spirochetes: diameter below the stain's resolving readout —</text>
        <text x="66" y="364" fontSize="5.8" className="fill-muted-foreground">visualize by other means (extension: darkfield, serology)</text>
        <rect x="52" y="390" width="408" height="76" rx="9" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="66" y="410" fontSize="7" fontWeight="800" className="fill-foreground">② CELL WALL HAS HIGH LIPID CONTENT</text>
        <text x="66" y="424" fontSize="6.4" fontWeight="700" className="fill-brand">Mycobacteria</text>
        <text x="66" y="438" fontSize="5.8" className="fill-muted-foreground">the mycolic-acid wall refuses the gram dyes — the acid-fast</text>
        <text x="66" y="448" fontSize="5.8" className="fill-muted-foreground">stains (Ziehl-Neelsen; auramine-rhodamine screening) read it</text>
        <rect x="52" y="474" width="408" height="66" rx="9" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="66" y="494" fontSize="7" fontWeight="800" className="fill-foreground">③ NO CELL WALL</text>
        <text x="66" y="508" fontSize="6.4" fontWeight="700" className="fill-brand">Mycoplasma, Ureaplasma</text>
        <text x="66" y="522" fontSize="5.8" className="fill-muted-foreground">nothing to hold any stain — identified by other means</text>
        <text x="66" y="532" fontSize="5.8" className="fill-muted-foreground">(extension: no peptidoglycan at all — see M1's anatomy)</text>
        <rect x="52" y="548" width="408" height="86" rx="9" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="66" y="568" fontSize="7" fontWeight="800" className="fill-foreground">④ PRIMARILY INTRACELLULAR</text>
        <text x="66" y="582" fontSize="6.2" fontWeight="700" className="fill-brand">Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia</text>
        <text x="66" y="596" fontSize="5.8" className="fill-muted-foreground">obligate or facultative intracellular life defeats the surface stain;</text>
        <text x="66" y="606" fontSize="5.8" className="fill-muted-foreground">Chlamydia also lack classic peptidoglycan — deficient muramic acid</text>
        <text x="66" y="620" fontSize="5.8" fontWeight="700" className="fill-emergency">Any of the four → the gram readout is 'no organisms seen' — switch stains.</text>
      </g>

      {/* ===== special-stain roster (right) ===== */}
      <g>
        <rect x="496" y="76" width="460" height="572" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="512" y="98" fontSize="9" fontWeight="800" className="fill-foreground">THE SPECIAL-STAIN ROSTER</text>
        <text x="512" y="112" fontSize="6" className="fill-muted-foreground">each stain reads a structure the gram stain cannot</text>
        {specialStains.map((s, i) => (
          <g key={s.n}>
            <rect x="512" y={124 + i * 70} width="428" height="62" rx="9" className="fill-secondary" />
            <text x="526" y={142 + i * 70} fontSize="7" fontWeight="800" className={i === 2 ? "fill-emergency" : "fill-foreground"}>{s.n}</text>
            {s.t.match(/.{1,56}(\s|$)/g)!.slice(0, 5).map((line, j) => (
              <text key={j} x="526" y={154 + j * 8.5 + i * 70} fontSize="5.6" className="fill-muted-foreground">{line.trim()}</text>
            ))}
          </g>
        ))}
        <rect x="512" y="544" width="428" height="40" rx="9" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="526" y="560" fontSize="6" fontWeight="800" className="fill-brand">ACID-FAST FOOTNOTE</text>
        <text x="526" y="572" fontSize="5.6" className="fill-muted-foreground">Auramine-rhodamine is more often used for screening</text>
        <text x="526" y="581" fontSize="5.6" className="fill-muted-foreground">(inexpensive, more sensitive) than Ziehl-Neelsen.</text>
        <text x="512" y="610" fontSize="6" className="fill-muted-foreground">Ziehl-Neelsen stains the mycolic acid of the cell wall —</text>
        <text x="512" y="620" fontSize="6" className="fill-muted-foreground">the lipid that made the gram stain fail in mode ②.</text>
        <text x="512" y="638" fontSize="6" fontWeight="700" className="fill-emergency">India ink: the capsule reads as a halo; mucicarmine paints it red.</text>
      </g>

      {/* anchors strip */}
      <g>
        <rect x="36" y="662" width="920" height="52" rx="9" className="fill-secondary" />
        <text x="496" y="682" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Anchors: gram stain = first-line (thick wall purple ⊕ / thin wall pink ⊝) · poor stainers: Treponema-Leptospira thin · Mycobacteria lipid · Mycoplasma wall-less · intracellular legionella-rickettsia-chlamydia (+ Chlamydia ↓ muramic acid)</text>
        <text x="496" y="696" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Special reads: PAS = glycogen/mucopolysaccharides (Whipple) · ZN = mycolic acid (mycobacteria, Nocardia; auramine-rhodamine screen) · India ink = Crypto capsule (mucicarmine red) · Silver = the HeLi-Legion-Barton trio + fungi · FA = antibody-labeled (FTA-ABS)</text>
      </g>

      {/* footer */}
      <text x="24" y="738" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's Stains table (pdf 145 / book 123 — the five printed micrographs [Trypanosomes, T. whipplei, Mycobacteria, C. neoformans, Coccidioides] are raster photos, COPYRIGHTED, never reproduced; described-in-text only). FA's printed mnemonics are NOT reproduced here; the verbatim table block is the note's own.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// M3 — Special culture requirements: the bug-to-medium directory organized
// by medium job (enrich / select / indicate)
// (source: the Special culture requirements table, pdf 146 / book 124 —
//  pure vector page, no printed figures; FA's printed mnemonics are NOT
//  reproduced)
// ---------------------------------------------------------------------------

export function BugMediaMatchingMap() {
  const w = 980;
  const h = 780;
  const roster = [
    { bug: "H influenzae", med: "Chocolate agar", note: "Factors V (NAD+) and X (hematin)", job: "enrich" },
    { bug: "N gonorrhoeae, N meningitidis", med: "Thayer-Martin agar", note: "Selectively favors Neisseria — inhibits gram ⊕ (vancomycin), gram ⊝ except Neisseria (trimethoprim, colistin), fungi (nystatin); very typically cultures Neisseria", job: "select" },
    { bug: "B pertussis", med: "Bordet-Gengou agar; Regan-Lowe medium", note: "Potato extract (BG); charcoal, blood, and antibiotic (RL)", job: "enrich" },
    { bug: "C diphtheriae", med: "Tellurite agar, Löffler medium", note: "", job: "select" },
    { bug: "M tuberculosis", med: "Löwenstein-Jensen medium, Middlebrook medium, rapid automated broth cultures", note: "", job: "select" },
    { bug: "M pneumoniae", med: "Eaton agar", note: "Requires cholesterol", job: "enrich" },
    { bug: "Lactose-fermenting enterics", med: "MacConkey agar", note: "Fermentation produces acid, causing colonies to turn pink", job: "indicate" },
    { bug: "E coli", med: "Eosin–methylene blue (EMB) agar", note: "Colonies with green metallic sheen", job: "indicate" },
    { bug: "Brucella, Francisella, Legionella, Pasteurella", med: "Buffered charcoal yeast extract agar (BCYE)", note: "With cysteine and iron", job: "select" },
    { bug: "Fungi", med: "Sabouraud agar", note: "The fungal medium (low pH — inhibits bacteria)", job: "select" },
  ];
  const jobColor: Record<string, string> = { enrich: "fill-brand", select: "fill-emergency", indicate: "fill-foreground" };
  const jobLabel: Record<string, string> = { enrich: "ENRICH", select: "SELECT", indicate: "INDICATE" };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Special culture requirements, an original KYP matching map of the bug-to-medium directory, organized by what each medium is doing. ENRICH — supply what the bug cannot make: chocolate agar gives H influenzae factors V (NAD+) and X (hematin); Eaton agar gives M pneumoniae its required cholesterol; Bordet-Gengou (potato extract) and Regan-Lowe (charcoal, blood, and antibiotic) grow B pertussis. SELECT — suppress everything else: Thayer-Martin agar selectively favors Neisseria by inhibiting gram-positive organisms with vancomycin, gram-negative organisms except Neisseria with trimethoprim and colistin, and fungi with nystatin — very typically cultures Neisseria (N gonorrhoeae, N meningitidis); tellurite agar and Loeffler medium select for C diphtheriae; Lowenstein-Jensen, Middlebrook, and rapid automated broth cultures grow M tuberculosis; buffered charcoal yeast extract agar with cysteine and iron grows Brucella, Francisella, Legionella, and Pasteurella; Sabouraud agar grows the fungi. INDICATE — the color readouts: MacConkey agar, where lactose fermentation produces acid, causing colonies of the lactose-fermenting enterics to turn pink; and eosin-methylene blue agar, where E coli colonies show a green metallic sheen" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Special culture requirements — the bug-to-medium directory (original KYP redraw)</text>
        <rect x="752" y="24" width="180" height="18" rx="9" className="fill-brand-soft" />
        <text x="842" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">enrich · select · indicate</text>
      </g>

      {/* ===== the three medium jobs (left) ===== */}
      <g>
        <rect x="36" y="76" width="280" height="572" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.4" />
        <text x="52" y="98" fontSize="9" fontWeight="800" className="fill-foreground">THE THREE MEDIUM JOBS</text>

        <rect x="50" y="112" width="252" height="150" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="64" y="132" fontSize="8" fontWeight="800" className="fill-brand">① ENRICH</text>
        <text x="64" y="146" fontSize="5.8" className="fill-muted-foreground">Supply what the bug cannot make:</text>
        <text x="64" y="160" fontSize="6.2" fontWeight="700" className="fill-foreground">Chocolate agar → H influenzae</text>
        <text x="64" y="171" fontSize="5.6" className="fill-muted-foreground">factors V (NAD+) and X (hematin)</text>
        <text x="64" y="185" fontSize="6.2" fontWeight="700" className="fill-foreground">Eaton agar → M pneumoniae</text>
        <text x="64" y="196" fontSize="5.6" className="fill-muted-foreground">requires cholesterol</text>
        <text x="64" y="210" fontSize="6.2" fontWeight="700" className="fill-foreground">Bordet-Gengou → B pertussis</text>
        <text x="64" y="221" fontSize="5.6" className="fill-muted-foreground">potato extract (BG); Regan-Lowe:</text>
        <text x="64" y="231" fontSize="5.6" className="fill-muted-foreground">charcoal, blood, and antibiotic</text>
        <text x="64" y="247" fontSize="5.4" fontWeight="700" className="fill-brand">heated blood = the 'chocolate' — the lysis releases V and X</text>

        <rect x="50" y="272" width="252" height="214" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="64" y="292" fontSize="8" fontWeight="800" className="fill-emergency">② SELECT</text>
        <text x="64" y="306" fontSize="5.8" className="fill-muted-foreground">Suppress everything but the target:</text>
        <text x="64" y="320" fontSize="6" fontWeight="700" className="fill-foreground">Thayer-Martin (Neisseria):</text>
        <text x="64" y="331" fontSize="5.5" className="fill-muted-foreground">vancomycin removes gram ⊕; trimethoprim +</text>
        <text x="64" y="341" fontSize="5.5" className="fill-muted-foreground">colistin remove gram ⊝ EXCEPT Neisseria;</text>
        <text x="64" y="351" fontSize="5.5" className="fill-muted-foreground">nystatin removes fungi —</text>
        <text x="64" y="361" fontSize="5.5" fontWeight="700" className="fill-emergency">"very typically cultures Neisseria"</text>
        <text x="64" y="377" fontSize="6" fontWeight="700" className="fill-foreground">Tellurite / Löffler → C diphtheriae</text>
        <text x="64" y="391" fontSize="6" fontWeight="700" className="fill-foreground">Löwenstein-Jensen, Middlebrook,</text>
        <text x="64" y="401" fontSize="6" fontWeight="700" className="fill-foreground">rapid automated broth → M tuberculosis</text>
        <text x="64" y="415" fontSize="6" fontWeight="700" className="fill-foreground">BCYE (cysteine + iron) →</text>
        <text x="64" y="426" fontSize="5.8" className="fill-muted-foreground">Brucella, Francisella, Legionella,</text>
        <text x="64" y="436" fontSize="5.8" className="fill-muted-foreground">Pasteurella</text>
        <text x="64" y="452" fontSize="6" fontWeight="700" className="fill-foreground">Sabouraud → fungi</text>
        <text x="64" y="463" fontSize="5.5" className="fill-muted-foreground">the fungal medium — its selectivity is</text>
        <text x="64" y="473" fontSize="5.5" className="fill-muted-foreground">the opposite direction: fungi over bacteria</text>

        <rect x="50" y="494" width="252" height="140" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="64" y="514" fontSize="8" fontWeight="800" className="fill-foreground">③ INDICATE</text>
        <text x="64" y="528" fontSize="5.8" className="fill-muted-foreground">The fermentation readouts:</text>
        <rect x="64" y="538" width="14" height="10" rx="2" className="fill-emergency/30" />
        <text x="82" y="547" fontSize="6.2" fontWeight="700" className="fill-foreground">MacConkey — lactose-fermenting enterics:</text>
        <text x="82" y="558" fontSize="5.6" className="fill-muted-foreground">fermentation produces acid, causing the</text>
        <text x="82" y="568" fontSize="5.6" className="fill-muted-foreground">COLONIES to turn pink</text>
        <rect x="64" y="580" width="14" height="10" rx="2" className="fill-brand/30" />
        <text x="82" y="589" fontSize="6.2" fontWeight="700" className="fill-foreground">EMB — E coli: colonies with</text>
        <text x="82" y="600" fontSize="5.6" className="fill-muted-foreground">green metallic sheen</text>
        <text x="64" y="622" fontSize="5.4" fontWeight="700" className="fill-foreground">Both are the gram ⊝ enteric lane's</text>
        <text x="64" y="632" fontSize="5.4" fontWeight="700" className="fill-foreground">color readouts on selective media.</text>
      </g>

      {/* ===== the 10-row directory (right) ===== */}
      <g>
        <rect x="336" y="76" width="620" height="572" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="352" y="98" fontSize="9" fontWeight="800" className="fill-foreground">THE BUG-TO-MEDIUM DIRECTORY</text>
        <text x="352" y="112" fontSize="6" className="fill-muted-foreground">bug → medium → contents/other (the printed table's rows, matched by job)</text>
        {roster.map((r, i) => (
          <g key={r.bug}>
            <rect x="352" y={122 + i * 52.6} width="588" height="46" rx="8" className="fill-secondary" />
            <text x="366" y={138 + i * 52.6} fontSize="6.6" fontWeight="800" className={jobColor[r.job]}>{r.bug}</text>
            <text x="366" y={148 + i * 52.6} fontSize="6.2" fontWeight="700" className="fill-foreground">{r.med}</text>
            <text x="366" y={158 + i * 52.6} fontSize="5.4" className="fill-muted-foreground">{(r.note.match(/.{1,84}(\s|$)/g) || [""])[0].trim()}</text>
            <rect x="886" y={130 + i * 52.6} width="42" height="12" rx="6" className={r.job === "enrich" ? "fill-brand/15" : r.job === "select" ? "fill-emergency/10" : "fill-secondary"} />
            <text x="907" y={139 + i * 52.6} textAnchor="middle" fontSize="5.2" fontWeight="800" className={jobColor[r.job]}>{jobLabel[r.job]}</text>
          </g>
        ))}
      </g>

      {/* anchors strip */}
      <g>
        <rect x="36" y="662" width="920" height="52" rx="9" className="fill-secondary" />
        <text x="496" y="682" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Anchors: chocolate = V + X (heated-blood lysis) · Thayer-Martin = the antibiotic trio that leaves only Neisseria ('very typically cultures Neisseria') · BG potato / RL charcoal-blood-antibotic = pertussis</text>
        <text x="496" y="696" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">LJ + Middlebrook + rapid broth = TB · Eaton cholesterol = M pneumoniae · MacConkey pink-acid colonies / EMB green metallic sheen = the enteric readouts · BCYE cysteine + iron = Brucella-Francisella-Legionella-Pasteurella · Sabouraud = fungi</text>
      </g>

      {/* footer */}
      <text x="24" y="738" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's Special culture requirements table (pdf 146 / book 124 — pure vector page, no printed figures; FA's printed mnemonics ('The Ella siblings…'; 'Sab's a fun guy!') NOT reproduced — verification only). The verbatim table is the note's table block.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// M6 — Virulence mechanisms & antimicrobial resistance overview: the
// immune-evasion arsenal + the resistance geometry around one cell
// (source: the virulence-factor table, the immune-evasion diagram, and the
//  antibiotic-resistance-mechanisms figure, pdf 149 / book 127 — pure vector
//  page, no printed photos; FA's printed mnemonic boundary: none printed
//  on this page; the source's own typo 'Completment-mediated' is NOT
//  reproduced in the redraw)
// ---------------------------------------------------------------------------

export function VirulenceResistanceMap() {
  const w = 980;
  const h = 800;
  const factors = [
    { n: "Capsular polysaccharide", m: "Highly charged, hydrophilic structure", f: "Barrier to phagocytosis AND complement-mediated lysis — major determinant of virulence", org: "the encapsulated set (M4)" },
    { n: "Protein A", m: "Binds the Fc region of IgG", f: "Prevents opsonization and phagocytosis", org: "S aureus" },
    { n: "IgA protease", m: "Enzyme that cleaves IgA", f: "Adherence to and colonization of mucous membranes", org: "S pneumoniae, H influenzae type b, Neisseria (SHiN)" },
    { n: "M protein", m: "Helps prevent phagocytosis", f: "Sequence homology with human cardiac myosin (molecular mimicry) — possibly underlies the autoimmune response of acute rheumatic fever", org: "group A streptococci" },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Virulence mechanisms and antimicrobial resistance, an original KYP two-panel map. LEFT — the immune-evasion arsenal: four virulence factors that promote evasion of the host immune response. Capsular polysaccharide: a highly charged, hydrophilic structure acting as a barrier to phagocytosis and complement-mediated lysis — a major determinant of virulence. Protein A (S aureus): binds the Fc region of IgG, preventing opsonization and phagocytosis. IgA protease (secreted by S pneumoniae, H influenzae type b, and Neisseria — SHiN): cleaves IgA, allowing bacteria to adhere to and colonize mucous membranes. M protein (group A streptococci): helps prevent phagocytosis; its sequence homology with human cardiac myosin (molecular mimicry) possibly underlies the autoimmune response seen in acute rheumatic fever. RIGHT — the resistance geometry around one bacterial cell, three mechanisms. INCREASED EFFLUX and DECREASED UPTAKE: tetracyclines, sulfonamides, fluoroquinolones. ENZYMATIC INACTIVATION — drug cleavage (penicillin G and V, the penicillinase-sensitive penicillins, cephalosporins, carbapenems — the beta-lactamases) and drug modification (aminoglycosides, chloramphenicol). DRUG TARGET MODIFICATION — rRNA (linezolid, macrolides), enzyme (penicillinase-resistant penicillins, cephalosporins, sulfonamides, fluoroquinolones), and cell wall (vancomycin). The cell carries its anatomy labels: cell wall, ribosome with rRNA, mRNA, DNA, enzyme" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Virulence & resistance — the evasion arsenal and the drug-proofing geometry (original KYP redraw)</text>
        <rect x="756" y="24" width="176" height="18" rx="9" className="fill-brand-soft" />
        <text x="844" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">evade · cleave · re-arm</text>
      </g>

      {/* ===== LEFT: immune-evasion arsenal ===== */}
      <g>
        <rect x="36" y="76" width="440" height="592" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="52" y="98" fontSize="9" fontWeight="800" className="fill-foreground">IMMUNE-EVASION ARSENAL</text>
        <text x="52" y="112" fontSize="6" className="fill-muted-foreground">virulence factors that promote evasion of the host immune response</text>
        {factors.map((f, i) => (
          <g key={f.n}>
            <rect x="52" y={124 + i * 132} width="408" height="120" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
            <text x="66" y={144 + i * 132} fontSize="7.4" fontWeight="800" className="fill-brand">{f.n}</text>
            <text x="66" y={158 + i * 132} fontSize="6.2" fontWeight="700" className="fill-foreground">{f.m}</text>
            {f.f.match(/.{1,62}(\s|$)/g)!.slice(0, 4).map((line, j) => (
              <text key={j} x="66" y={170 + j * 9 + i * 132} fontSize="5.8" className="fill-muted-foreground">{line.trim()}</text>
            ))}
            <text x="66" y={230 + i * 132} fontSize="6" fontWeight="800" className="fill-emergency">EXPRESSED BY: {f.org}</text>
          </g>
        ))}
        <text x="52" y="656" fontSize="6.2" fontWeight="700" className="fill-muted-foreground">The capsule defeats phagocytosis AND complement lysis; Protein A defeats opsonization (Fc of IgG);</text>
        <text x="52" y="666" fontSize="6.2" fontWeight="700" className="fill-muted-foreground">IgA protease defeats mucosal IgA; M protein defeats phagocytosis — and by cardiac-myosin homology (molecular mimicry) underlies acute rheumatic fever.</text>
      </g>

      {/* ===== RIGHT: resistance geometry ===== */}
      <g>
        <rect x="496" y="76" width="460" height="592" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="512" y="98" fontSize="9" fontWeight="800" className="fill-foreground">RESISTANCE GEOMETRY — one cell, three mechanisms</text>

        {/* mechanism 1: efflux / uptake */}
        <rect x="512" y="112" width="428" height="92" rx="10" className="fill-brand-soft/20 stroke-brand" strokeWidth="1.1" />
        <text x="526" y="132" fontSize="7.2" fontWeight="800" className="fill-brand">① INCREASED EFFLUX / DECREASED UPTAKE</text>
        <text x="526" y="146" fontSize="5.8" className="fill-muted-foreground">the drug never reaches its concentration:</text>
        <text x="526" y="160" fontSize="6.4" fontWeight="700" className="fill-foreground">Tetracyclines · Sulfonamides · Fluoroquinolones</text>
        <text x="526" y="176" fontSize="5.6" className="fill-muted-foreground">pumps push the drug out; entry channels stay shut —</text>
        <text x="526" y="186" fontSize="5.6" className="fill-muted-foreground">the intracellular dose never accumulates.</text>

        {/* mechanism 2: enzymatic inactivation */}
        <rect x="512" y="212" width="428" height="120" rx="10" className="fill-emergency/10 stroke-emergency" strokeWidth="1.1" />
        <text x="526" y="232" fontSize="7.2" fontWeight="800" className="fill-emergency">② ENZYMATIC INACTIVATION</text>
        <text x="526" y="248" fontSize="6.2" fontWeight="700" className="fill-foreground">DRUG CLEAVAGE:</text>
        <text x="526" y="260" fontSize="5.8" className="fill-muted-foreground">Penicillin G, V · penicillinase-sensitive penicillins ·</text>
        <text x="526" y="270" fontSize="5.8" className="fill-muted-foreground">cephalosporins · carbapenems — the β-lactamases</text>
        <text x="526" y="284" fontSize="6.2" fontWeight="700" className="fill-foreground">DRUG MODIFICATION:</text>
        <text x="526" y="296" fontSize="5.8" className="fill-muted-foreground">Aminoglycosides · chloramphenicol —</text>
        <text x="526" y="306" fontSize="5.8" className="fill-muted-foreground">modifying enzymes disarm the non-β-lactams</text>
        <text x="526" y="322" fontSize="5.5" fontWeight="700" className="fill-emergency">the enzymes sit between the wall and the targets (M1's periplasm lobby).</text>

        {/* mechanism 3: target modification */}
        <rect x="512" y="340" width="428" height="128" rx="10" className="fill-secondary stroke-border" strokeWidth="1.1" />
        <text x="526" y="360" fontSize="7.2" fontWeight="800" className="fill-foreground">③ DRUG TARGET MODIFICATION</text>
        <text x="526" y="374" fontSize="6.2" fontWeight="700" className="fill-brand">rRNA:</text>
        <text x="560" y="374" fontSize="5.8" className="fill-muted-foreground">linezolid · macrolides (methylated ribosomal RNA)</text>
        <text x="526" y="390" fontSize="6.2" fontWeight="700" className="fill-brand">Enzyme:</text>
        <text x="560" y="390" fontSize="5.8" className="fill-muted-foreground">penicillinase-resistant penicillins · cephalosporins ·</text>
        <text x="560" y="400" fontSize="5.8" className="fill-muted-foreground">sulfonamides · fluoroquinolones (altered target enzymes)</text>
        <text x="526" y="416" fontSize="6.2" fontWeight="700" className="fill-brand">Cell wall:</text>
        <text x="560" y="416" fontSize="5.8" className="fill-muted-foreground">vancomycin (the altered wall target)</text>
        <text x="526" y="434" fontSize="5.6" className="fill-muted-foreground">the target itself changes shape — the drug arrives</text>
        <text x="526" y="444" fontSize="5.6" className="fill-muted-foreground">and finds a lock that no longer fits.</text>
        <text x="526" y="460" fontSize="5.5" fontWeight="700" className="fill-foreground">Read with M1's PBP geometry: altered targets are re-armed walls and enzymes.</text>

        {/* the cell schematic */}
        <rect x="512" y="478" width="428" height="176" rx="12" className="fill-secondary/60 stroke-border" strokeWidth="1.3" />
        <text x="526" y="498" fontSize="7" fontWeight="800" className="fill-foreground">BACTERIAL CELL — the anatomy the three mechanisms sit on</text>
        <rect x="620" y="512" width="212" height="128" rx="16" className="fill-brand-soft/25 stroke-brand" strokeWidth="1.5" />
        <text x="726" y="530" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">cell wall (outer band)</text>
        <rect x="636" y="540" width="180" height="86" rx="10" className="fill-card stroke-border" strokeWidth="1.1" />
        <text x="726" y="558" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">Ribosome — rRNA</text>
        <text x="726" y="572" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">mRNA</text>
        <text x="726" y="588" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">DNA</text>
        <text x="726" y="604" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">enzyme</text>
        <text x="528" y="530" fontSize="5.8" className="fill-muted-foreground">efflux pumps and</text>
        <text x="528" y="540" fontSize="5.8" className="fill-muted-foreground">closed entry:</text>
        <text x="528" y="556" fontSize="5.6" className="fill-brand">tetracyclines,</text>
        <text x="528" y="566" fontSize="5.6" className="fill-brand">sulfonamides,</text>
        <text x="528" y="576" fontSize="5.6" className="fill-brand">fluoroquinolones</text>
        <text x="528" y="596" fontSize="5.6" className="fill-emergency">cleavage +</text>
        <text x="528" y="606" fontSize="5.6" className="fill-emergency">modification</text>
        <text x="528" y="616" fontSize="5.6" className="fill-emergency">enzymes (β-lactamases)</text>
        <text x="528" y="640" fontSize="5.6" className="fill-foreground">targets re-armed:</text>
        <text x="528" y="650" fontSize="5.6" className="fill-foreground">rRNA · enzyme · wall</text>
      </g>

      {/* anchors strip */}
      <g>
        <rect x="36" y="682" width="920" height="52" rx="9" className="fill-secondary" />
        <text x="496" y="702" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Anchors: capsule = anti-phagocytosis + anti-complement (major virulence determinant) · Protein A = Fc of IgG (S aureus) · IgA protease = mucosal colonization (SHiN: S pneumoniae, H influenzae type b, Neisseria)</text>
        <text x="496" y="716" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">M protein = anti-phagocytic + cardiac-myosin homology (molecular mimicry → acute rheumatic fever) · efflux/uptake = tetracyclines-sulfonamides-fluoroquinolones · cleavage = the β-lactamases · target modification = linezolid/macrolides (rRNA), the resistant-target set, vancomycin (wall)</text>
      </g>

      {/* footer */}
      <text x="24" y="762" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's immune-evasion diagram and antibiotic-resistance-mechanisms figure (pdf 149 / book 127 — pure vector page, no printed photos; the source's own typo 'Completment-mediated' and the scrambled wall label are documented in the manifest, NOT reproduced here). The verbatim table is the note's table block.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// M7 — Bacterial genetics: the three horizontal gene-transfer routes plus
// transposition — transformation (naked DNA), conjugation (F+ × F− and
// Hfr × F−), transduction (generalized + specialized), and the jumping
// transposon
// (source: pdf 150-151 / book 128-129 — six printed diagrams, all raster
//  color-plate art, COPYRIGHTED, never reproduced; redrawn here)
// ---------------------------------------------------------------------------

export function GeneTransferTriangle() {
  const w = 980;
  const h = 840;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Bacterial genetics, an original KYP map of horizontal gene transfer — the main mechanism for transfer of antibiotic resistance among bacteria — plus transposition. Lane 1 TRANSFORMATION: competent bacteria bind and import short pieces of environmental naked bacterial chromosomal DNA (from cell lysis); the transfer and expression of newly transferred genes is called transformation — a feature of many bacteria, especially S pneumoniae, H influenzae type b, and Neisseria (SHiN); adding deoxyribonuclease degrades naked DNA, preventing transformation. Stages: naked DNA approaches the recipient cell (recipient DNA inside); degraded uncombined DNA is lost; the donor DNA recombines — the transformed cell. Lane 2 CONJUGATION, two variants: F+ × F− — the F+ (fertility factor) plasmid contains genes required for sex pilus and conjugation; the sex pilus on the F+ bacterium contacts the F− bacterium and a single strand of plasmid DNA is transferred across the conjugal bridge ('mating bridge'); NO transfer of chromosomal DNA; both cells end F+. And Hfr × F− — the F+ plasmid can become incorporated into bacterial chromosomal DNA (high-frequency recombination cell); transfer of the leading part of the plasmid and a few flanking chromosomal genes; high-frequency recombination may integrate some of those bacterial genes; the recipient cell REMAINS F− but now may have new bacterial genes (the recombinant F− cell). Lane 3 TRANSDUCTION, two variants: generalized — a 'packaging' error: a lytic phage infects the bacterium, leading to cleavage of bacterial DNA; parts of bacterial chromosomal DNA may become packaged in the phage capsid; the phage infects another bacterium, transferring these genes (any gene can ride). Specialized — an 'excision' event: a lysogenic phage infects the bacterium and viral DNA incorporates into the bacterial chromosome; when phage DNA is excised, flanking bacterial genes may be excised with it; DNA is packaged into the phage capsid and can infect another bacterium (only genes flanking the phage DNA ride) — the ABCD'S toxins are encoded in lysogenic phage: Group A strep erythrogenic toxin, Botulinum toxin, Cholera toxin, Diphtheria toxin, Shiga toxin. Bottom card TRANSPOSITION: a 'jumping' process involving a transposon (a specialized segment of DNA) which can copy and excise itself and then insert into the same DNA molecule or an unrelated DNA (plasmid or chromosome) — critical in creating plasmids with multiple drug resistance and transfer across species lines (Tn1546 with vanA from Enterococcus to S aureus)" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Bacterial genetics — the horizontal gene-transfer map (original KYP redraw)</text>
        <rect x="716" y="24" width="216" height="18" rx="9" className="fill-brand-soft" />
        <text x="824" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">naked DNA · pilus · phage · jump</text>
      </g>

      {/* ===== Lane 1: TRANSFORMATION ===== */}
      <g>
        <rect x="36" y="76" width="296" height="300" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="52" y="98" fontSize="9" fontWeight="800" className="fill-foreground">① TRANSFORMATION — naked DNA</text>
        <text x="52" y="112" fontSize="5.8" className="fill-muted-foreground">competent bacteria bind and import short pieces of</text>
        <text x="52" y="122" fontSize="5.8" className="fill-muted-foreground">environmental naked bacterial chromosomal DNA (from cell lysis)</text>

        {/* 3-stage strip */}
        <rect x="52" y="136" width="264" height="86" rx="9" className="fill-card stroke-border" strokeWidth="1.1" />
        <path d="M 66 176 c 6 -12, 18 -12, 24 0 c 6 12, 18 12, 24 0 c 6 -12, 18 -12, 24 0" fill="none" className="stroke-brand" strokeWidth="1.6" />
        <text x="66" y="192" fontSize="5.6" fontWeight="700" className="fill-brand">Naked DNA (from lysed cells)</text>
        <ellipse cx="140" cy="200" rx="60" ry="26" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="140" y="198" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">Recipient cell</text>
        <circle cx="128" cy="200" r="9" className="fill-brand-soft stroke-brand" strokeWidth="1" />
        <text x="140" y="220" fontSize="5.4" className="fill-muted-foreground">Recipient DNA</text>
        <text x="230" y="150" fontSize="5.4" className="fill-muted-foreground">Degraded uncombined</text>
        <text x="230" y="159" fontSize="5.4" className="fill-muted-foreground">DNA is lost —</text>
        <text x="230" y="168" fontSize="5.4" className="fill-muted-foreground">DNase clears the rest</text>

        <rect x="52" y="230" width="264" height="66" rx="9" className="fill-card stroke-border" strokeWidth="1.1" />
        <ellipse cx="100" cy="262" rx="34" ry="26" className="fill-card stroke-border" strokeWidth="1.2" />
        <circle cx="94" cy="262" r="8" className="fill-brand-soft stroke-brand" strokeWidth="1" />
        <circle cx="110" cy="256" r="5.5" className="fill-emergency/20 stroke-emergency" strokeWidth="0.9" />
        <text x="146" y="252" fontSize="5.6" fontWeight="700" className="fill-foreground">Transformed cell: Donor DNA</text>
        <text x="146" y="262" fontSize="5.6" className="fill-muted-foreground">recombines with Recipient DNA —</text>
        <text x="146" y="272" fontSize="5.6" className="fill-muted-foreground">the transfer and expression of newly</text>
        <text x="146" y="282" fontSize="5.6" className="fill-muted-foreground">transferred genes = transformation</text>

        <rect x="52" y="304" width="264" height="58" rx="9" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="66" y="322" fontSize="6" fontWeight="800" className="fill-brand">RULES</text>
        <text x="66" y="334" fontSize="5.6" className="fill-muted-foreground">· Competence is the gate — a feature of many bacteria,</text>
        <text x="66" y="344" fontSize="5.6" className="fill-muted-foreground">  especially SHiN (S pneumoniae, H influenzae type b, Neisseria)</text>
        <text x="66" y="356" fontSize="5.6" fontWeight="700" className="fill-emergency">· DNase degrades naked DNA — preventing transformation</text>
      </g>

      {/* ===== Lane 2: CONJUGATION ===== */}
      <g>
        <rect x="348" y="76" width="296" height="300" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="364" y="98" fontSize="9" fontWeight="800" className="fill-foreground">② CONJUGATION — the sex pilus</text>

        <rect x="364" y="112" width="264" height="130" rx="9" className="fill-card stroke-border" strokeWidth="1.1" />
        <text x="378" y="130" fontSize="7" fontWeight="800" className="fill-foreground">F+ × F–</text>
        <ellipse cx="408" cy="196" rx="30" ry="24" className="fill-card stroke-brand" strokeWidth="1.3" />
        <ellipse cx="584" cy="196" rx="30" ry="24" className="fill-card stroke-border" strokeWidth="1.3" />
        <circle cx="404" cy="192" r="7" className="fill-brand/25 stroke-brand" strokeWidth="1" />
        <text x="408" y="166" fontSize="5.2" fontWeight="700" className="fill-brand">F+ (fertility) plasmid —</text>
        <text x="408" y="175" fontSize="5.2" fontWeight="700" className="fill-brand">genes for sex pilus + conjugation</text>
        <path d="M 438 192 L 554 192" className="stroke-brand" strokeWidth="2.4" />
        <text x="496" y="186" textAnchor="middle" fontSize="5.2" fontWeight="700" className="fill-brand">sex pilus = conjugal bridge</text>
        <text x="496" y="204" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">("mating bridge")</text>
        <circle cx="580" cy="192" r="9" className="fill-brand-soft/30 stroke-brand" strokeWidth="0.9" />
        <text x="588" y="232" fontSize="5.4" className="fill-muted-foreground">F+ cell</text>
        <text x="412" y="232" fontSize="5.4" className="fill-muted-foreground">F– cell → becomes F+</text>
        <text x="378" y="146" fontSize="5.6" className="fill-muted-foreground">A single strand of plasmid DNA is transferred across</text>
        <text x="378" y="156" fontSize="5.6" className="fill-muted-foreground">the bridge — the recipient repairs it to double strand.</text>
        <text x="378" y="236" fontSize="5.6" fontWeight="700" className="fill-emergency">NO transfer of chromosomal DNA — both cells end F+.</text>

        <rect x="364" y="252" width="264" height="110" rx="9" className="fill-card stroke-border" strokeWidth="1.1" />
        <text x="378" y="270" fontSize="7" fontWeight="800" className="fill-foreground">Hfr × F–</text>
        <ellipse cx="410" cy="330" rx="30" ry="24" className="fill-card stroke-brand" strokeWidth="1.3" />
        <circle cx="410" cy="330" r="26" className="fill-none stroke-emergency" strokeWidth="1.4" />
        <text x="378" y="290" fontSize="5.4" className="fill-muted-foreground">F+ plasmid incorporated into the</text>
        <text x="378" y="300" fontSize="5.4" className="fill-muted-foreground">chromosome = high-frequency</text>
        <text x="378" y="310" fontSize="5.4" className="fill-muted-foreground">recombination (Hfr) cell</text>
        <path d="M 440 330 L 552 330" stroke="currentColor" className="text-emergency" strokeWidth="1.6" strokeDasharray="4 3" />
        <text x="496" y="322" textAnchor="middle" fontSize="5.2" fontWeight="700" className="fill-emergency">leading plasmid portion +</text>
        <text x="496" y="331" textAnchor="middle" fontSize="5.2" fontWeight="700" className="fill-emergency">a few flanking chromosomal genes</text>
        <ellipse cx="582" cy="330" rx="30" ry="24" className="fill-card stroke-border" strokeWidth="1.3" />
        <circle cx="578" cy="326" r="8" className="fill-brand-soft/40 stroke-brand" strokeWidth="0.9" />
        <circle cx="590" cy="334" r="5" className="fill-emergency/25 stroke-emergency" strokeWidth="0.9" />
        <text x="378" y="352" fontSize="5.4" fontWeight="700" className="fill-foreground">Recipient REMAINS F– but now may have new bacterial</text>
        <text x="378" y="361" fontSize="5.4" fontWeight="700" className="fill-foreground">genes — the recombinant F– cell.</text>
      </g>

      {/* ===== Lane 3: TRANSDUCTION ===== */}
      <g>
        <rect x="660" y="76" width="296" height="300" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="676" y="98" fontSize="9" fontWeight="800" className="fill-foreground">③ TRANSDUCTION — the phage courier</text>

        <rect x="676" y="112" width="264" height="120" rx="9" className="fill-card stroke-border" strokeWidth="1.1" />
        <text x="690" y="130" fontSize="7" fontWeight="800" className="fill-foreground">Generalized — a "packaging" error</text>
        <text x="690" y="144" fontSize="5.4" className="fill-muted-foreground">Lytic phage infects the bacterium → cleavage of</text>
        <text x="690" y="154" fontSize="5.4" className="fill-muted-foreground">bacterial DNA → parts of bacterial chromosomal DNA</text>
        <text x="690" y="164" fontSize="5.4" className="fill-muted-foreground">may become packaged in phage capsid → phage</text>
        <text x="690" y="174" fontSize="5.4" className="fill-muted-foreground">infects another bacterium, transferring these genes.</text>
        <text x="690" y="192" fontSize="5.6" fontWeight="700" className="fill-brand">ANY bacterial gene can ride the capsid —</text>
        <text x="690" y="202" fontSize="5.6" fontWeight="700" className="fill-brand">the error is random (generalized).</text>
        <text x="690" y="220" fontSize="5.2" className="fill-muted-foreground">Lytic phage · release of new phage from lysed cell ·</text>
        <text x="690" y="230" fontSize="5.2" className="fill-muted-foreground">bacterial DNA packaged in phage capsids ·</text>
        <text x="690" y="240" fontSize="5.2" className="fill-muted-foreground">infects other bacteria · genes transferred to new bacteria</text>

        <rect x="676" y="242" width="264" height="120" rx="9" className="fill-card stroke-border" strokeWidth="1.1" />
        <text x="690" y="260" fontSize="7" fontWeight="800" className="fill-foreground">Specialized — an "excision" event</text>
        <text x="690" y="274" fontSize="5.4" className="fill-muted-foreground">Lysogenic phage infects the bacterium; viral DNA</text>
        <text x="690" y="284" fontSize="5.4" className="fill-muted-foreground">incorporates into the bacterial chromosome. When</text>
        <text x="690" y="294" fontSize="5.4" className="fill-muted-foreground">phage DNA is excised, flanking bacterial genes may</text>
        <text x="690" y="304" fontSize="5.4" className="fill-muted-foreground">be excised with it; DNA is packaged into the phage</text>
        <text x="690" y="314" fontSize="5.4" className="fill-muted-foreground">capsid and can infect another bacterium.</text>
        <text x="690" y="330" fontSize="5.6" fontWeight="700" className="fill-emergency">Only genes FLANKING the phage DNA ride —</text>
        <text x="690" y="340" fontSize="5.6" fontWeight="700" className="fill-emergency">the excision picks the neighborhood.</text>
        <text x="690" y="356" fontSize="5.2" className="fill-muted-foreground">Lysogenic phage · viral DNA incorporates in bacterial DNA ·</text>
        <text x="690" y="366" fontSize="5.2" className="fill-muted-foreground">phage particles carry bacterial DNA · genes different from donor and recipient</text>
      </g>

      {/* ===== TRANSPOSITION card ===== */}
      <g>
        <rect x="36" y="396" width="440" height="180" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="418" fontSize="9" fontWeight="800" className="fill-foreground">④ TRANSPOSITION — the jumping DNA</text>
        <circle cx="88" cy="458" r="30" className="fill-brand-soft/20 stroke-brand" strokeWidth="1.4" />
        <rect x="76" y="452" width="24" height="12" rx="3" className="fill-emergency/25 stroke-emergency" strokeWidth="1" />
        <text x="88" y="500" textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-muted-foreground">Plasmid</text>
        <text x="128" y="446" fontSize="5.8" fontWeight="700" className="fill-emergency">Transposon (specialized DNA segment):</text>
        <text x="128" y="457" fontSize="5.6" className="fill-muted-foreground">copies and excises itself, then inserts into</text>
        <text x="128" y="467" fontSize="5.6" className="fill-muted-foreground">the same DNA molecule — or an unrelated</text>
        <text x="128" y="477" fontSize="5.6" className="fill-muted-foreground">DNA (eg, plasmid or chromosome).</text>
        <path d="M 128 486 L 340 486" stroke="currentColor" className="text-emergency" strokeWidth="1.4" markerEnd="none" />
        <path d="M 336 482 l 8 4 l -8 4 z" className="fill-emergency" />
        <text x="132" y="502" fontSize="5.4" className="fill-muted-foreground">copy + excise</text>
        <text x="204" y="480" fontSize="5.4" className="fill-muted-foreground">jump →</text>
        <path d="M 292 466 c 8 -20, 28 -20, 36 -40" fill="none" className="stroke-brand" strokeWidth="1.4" />
        <text x="336" y="428" fontSize="5.6" fontWeight="700" className="fill-brand">Bacterial DNA (chromosome)</text>
        <rect x="332" y="440" width="130" height="14" rx="4" className="fill-secondary stroke-border" strokeWidth="1" />
        <rect x="386" y="440" width="22" height="14" rx="3" className="fill-emergency/25 stroke-emergency" strokeWidth="1" />
        <text x="336" y="451" fontSize="5.4" className="fill-muted-foreground">target site</text>
        <text x="336" y="466" fontSize="5.4" fontWeight="700" className="fill-brand">Integration of genes at the target site</text>
        <text x="52" y="530" fontSize="5.8" fontWeight="700" className="fill-foreground">CRITICAL IN:</text>
        <text x="126" y="530" fontSize="5.6" className="fill-muted-foreground">creating plasmids with MULTIPLE DRUG RESISTANCE, and transfer across species lines —</text>
        <text x="52" y="542" fontSize="5.6" fontWeight="700" className="fill-emergency">eg, Tn1546 with vanA from Enterococcus to S aureus.</text>
        <text x="52" y="560" fontSize="5.4" className="fill-muted-foreground">Horizontal gene transfer is the main mechanism for transfer of antibiotic resistance among bacteria —</text>
        <text x="52" y="570" fontSize="5.4" className="fill-muted-foreground">and transposons are how one plasmid collects an entire resistance roster.</text>
      </g>

      {/* ===== route rules card ===== */}
      <g>
        <rect x="496" y="396" width="460" height="180" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="512" y="418" fontSize="9" fontWeight="800" className="fill-foreground">THE ROUTE RULES — what transfers, what doesn't</text>
        {[
          ["Naked DNA (transformation)", "competence-gated; DNase-sensitive; any short chromosomal fragment; SHiN the classics"],
          ["F+ × F– (plasmid conjugation)", "plasmid only — NO chromosomal DNA; both cells end F+; the F plasmid carries the pilus genes"],
          ["Hfr × F– (integrated conjugation)", "leading plasmid portion + a few flanking chromosomal genes; recipient stays F– but may gain new bacterial genes"],
          ["Generalized transduction", "lytic phage 'packaging' error — ANY gene can be packaged; capsid delivers it to the next cell"],
          ["Specialized transduction", "lysogenic phage 'excision' event — only genes FLANKING the phage DNA ride; the ABCD'S toxins travel this way"],
        ].map((r, i) => (
          <g key={r[0]}>
            <text x="512" y={438 + i * 27} fontSize="6.4" fontWeight="800" className="fill-brand">{r[0]}</text>
            <text x="512" y={448 + i * 27} fontSize="5.6" className="fill-muted-foreground">{r[1]}</text>
          </g>
        ))}
        <rect x="512" y="552" width="428" height="16" rx="6" className="fill-brand-soft/20" />
        <text x="522" y="563" fontSize="5.6" fontWeight="700" className="fill-foreground">ABCD'S (lysogenic-phage toxins): Group A strep erythrogenic · Botulinum · Cholera · Diphtheria · Shiga</text>
      </g>

      {/* anchors strip */}
      <g>
        <rect x="36" y="592" width="920" height="76" rx="9" className="fill-secondary" />
        <text x="496" y="612" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Anchors: DNase stops transformation (naked DNA only — the pilus and the phage capsid protect their cargo) · F+ × F– transfers plasmid, never chromosome · Hfr transfers leading plasmid + flanking genes; recipient stays F–</text>
        <text x="496" y="626" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Generalized = any gene (random packaging error) · Specialized = flanking genes only (excision event) — the ABCD'S toxins ride the lysogenic phage</text>
        <text x="496" y="640" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Transposons: copy + excise + insert (same or unrelated DNA) — multiple-drug-resistance plasmids; Tn1546/vanA crossed from Enterococcus to S aureus · Horizontal transfer is THE mechanism of antibiotic-resistance spread</text>
        <text x="496" y="656" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">Each route's protection: competence gates transformation; the mating bridge gates conjugation; capsid packaging gates transduction; the target site gates transposition.</text>
      </g>

      {/* footer */}
      <text x="24" y="700" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's six genetics diagrams (pdf 150-151 / book 128-129 — transformation, conjugation F+ × F−, Hfr × F−, generalized + specialized transduction, transposition; the printed art is raster color plates, COPYRIGHTED, never reproduced). The interleaved text-layer labels are documented in the manifest; no FA mnemonics are printed on these pages.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// M8 — Exotoxins vs endotoxins: the toxin axis + the endotoxin cascade +
// the exotoxin roster by mechanism group + the superantigen cross-link
// (source: pdf 151-153 / book 129-131 — the comparison table, the exotoxin/
//  endotoxin mechanism diagram, the Bacteria-with-exotoxins table with its
//  group banners and AB-toxin footnote, and the endotoxin cascade diagram)
// ---------------------------------------------------------------------------

export function ToxinComparisonMap() {
  const w = 980;
  const h = 880;
  const axisRows = [
    ["SOURCE", "Certain species of gram ⊕ and gram ⊝ bacteria", "Outer cell membrane of most gram ⊝ bacteria"],
    ["SECRETED FROM CELL", "Yes — actively secreted", "No — released on lysis / by blebs detaching"],
    ["CHEMISTRY", "Polypeptide", "Lipid A component of LPS"],
    ["LOCATION OF GENES", "Plasmid or bacteriophage", "Bacterial chromosome"],
    ["TOXICITY", "High (fatal dose ~1 µg)", "Low (fatal dose ~hundreds of µg)"],
    ["CLINICAL EFFECTS", "Various (see the roster)", "Fever, shock (hypotension), DIC"],
    ["MODE OF ACTION", "Various modes (see the roster)", "Induces TNF, IL-1, and IL-6"],
    ["ANTIGENICITY", "High-titer antibodies — antitoxins", "Poorly antigenic"],
    ["VACCINES", "Toxoids used as vaccines", "No toxoids; no vaccine available"],
    ["HEAT STABILITY", "Destroyed rapidly at 60°C (3 exceptions)", "Stable at 100°C for 1 hr (eXtremely heat stable)"],
    ["TYPICAL DISEASES", "Tetanus, botulism, diphtheria, cholera", "Meningococcemia; sepsis by gram ⊝ rods"],
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Exotoxins versus endotoxins, an original KYP comparison map. Top left: the eleven-row toxin axis — source (certain gram-positive and gram-negative species vs the outer cell membrane of most gram-negatives), secreted from cell (yes, actively secreted vs no, released upon lysis or by blebs), chemistry (polypeptide vs lipid A component of LPS), location of genes (plasmid or bacteriophage vs bacterial chromosome), toxicity (high, fatal dose on the order of 1 microgram vs low, hundreds of micrograms), clinical effects (various vs fever, shock, DIC), mode of action (various vs induces TNF, IL-1, IL-6), antigenicity (high-titer antitoxins vs poorly antigenic), vaccines (toxoids vs none available), heat stability (destroyed at 60 degrees with three exceptions vs stable at 100 degrees for 1 hour — eXtremely heat stable), typical diseases (tetanus, botulism, diphtheria, cholera vs meningococcemia and gram-negative-rod sepsis). Top right: the endotoxin cascade — LPS (O-antigen + core polysaccharide + lipid A, the toxic component; Neisseria have lipooligosaccharide) released on cell lysis or by blebs; three main effects: macrophage activation (TLR4/CD14) releasing TNF-alpha, IL-1, IL-6; complement activation (C3a — histamine release — hypotension and edema; C5a — neutrophil chemotaxis); and tissue factor activation (coagulation cascade — DIC); nitric oxide — hypotension; the outcome strip: fever, shock, edema, DIC/death. Bottom left: the exotoxin roster by mechanism group — inhibit protein synthesis (diphtheria toxin and Exotoxin A: EF-2 ADP-ribosylation — pseudomembranes, bull neck, myocarditis; Shiga toxin: 60S ribosome, adenine removed from rRNA — dysentery and HUS in EHEC O157:H7 which does not invade); increase fluid secretion (ETEC LT: adenylate cyclase, cAMP; ST: guanylate cyclase, cGMP; anthrax toxin mimics adenylate cyclase — black eschar's edematous borders; cholera toxin permanently activates Gs — rice-water diarrhea; pertussis toxin inactivates Gi — whooping cough); inhibit phagocytic ability (pertussis); inhibit release of neurotransmitter (tetanospasmin and botulinum toxin: SNARE proteases — spastic paralysis vs flaccid paralysis; infant botulism from spores, foodborne from preformed toxin). Bottom right: membrane lysers and superantigens — C perfringens alpha toxin (phospholipase/lecithinase: gas gangrene, double-zone hemolysis); S pyogenes streptolysin O (beta-hemolysis; ASO antibodies); S aureus TSST-1 and S pyogenes erythrogenic exotoxin A: superantigens cross-linking the beta region of the TCR to MHC class II outside the antigen binding site — overwhelming IL-1, IL-2, IFN-gamma, TNF-alpha release — toxic shock syndrome and toxic shock-like syndrome with scarlet fever. The AB-toxin footnote: B binds and triggers uptake; A acts (usually an ADP ribosyltransferase)" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Exotoxins vs endotoxins — the toxin axis & the cascade to shock (original KYP redraw)</text>
        <rect x="764" y="24" width="168" height="18" rx="9" className="fill-brand-soft" />
        <text x="848" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">secreted vs shed on lysis</text>
      </g>

      {/* ===== Panel A: the toxin axis (11 rows) ===== */}
      <g>
        <rect x="36" y="76" width="500" height="308" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="52" y="98" fontSize="9" fontWeight="800" className="fill-foreground">THE TOXIN AXIS — exotoxin | endotoxin</text>
        <text x="188" y="112" fontSize="6.4" fontWeight="800" className="fill-brand">EXOTOXINS</text>
        <text x="424" y="112" fontSize="6.4" fontWeight="800" className="fill-emergency">ENDOTOXINS</text>
        {axisRows.map((r, i) => (
          <g key={r[0]}>
            <text x="52" y={126 + i * 23} fontSize="5.6" fontWeight="800" className="fill-foreground">{r[0]}</text>
            <text x="140" y={126 + i * 23} fontSize="5.4" className="fill-muted-foreground">{r[1].match(/.{1,46}(\s|$)/g)!.slice(0, 2).map(x => x.trim()).join(" ")}</text>
            <text x="340" y={126 + i * 23} fontSize="5.4" className="fill-muted-foreground">{r[2].match(/.{1,46}(\s|$)/g)!.slice(0, 2).map(x => x.trim()).join(" ")}</text>
          </g>
        ))}
        <text x="52" y="378" fontSize="5.4" fontWeight="700" className="fill-emergency">The 60°C exceptions: staphylococcal enterotoxin, E coli heat-stable toxin, B cereus emetic toxin.</text>
      </g>

      {/* ===== Panel B: the endotoxin cascade ===== */}
      <g>
        <rect x="552" y="76" width="404" height="308" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="568" y="98" fontSize="9" fontWeight="800" className="fill-emergency">THE ENDOTOXIN CASCADE — LPS to shock</text>
        <rect x="568" y="110" width="372" height="52" rx="9" className="fill-emergency/10 stroke-emergency" strokeWidth="1" />
        <text x="580" y="128" fontSize="6.2" fontWeight="700" className="fill-foreground">LPS (O-antigen + core polysaccharide + lipid A — the toxic component).</text>
        <text x="580" y="139" fontSize="5.8" className="fill-muted-foreground">Neisseria have lipooligosaccharide. Released upon cell lysis — or by living</text>
        <text x="580" y="149" fontSize="5.8" className="fill-muted-foreground">cells by blebs detaching from the outer surface membrane (vs exotoxin:</text>
        <text x="580" y="159" fontSize="5.8" className="fill-muted-foreground">actively secreted). eXtremely heat stable (100°C for 1 hr).</text>

        <text x="568" y="180" fontSize="6.4" fontWeight="800" className="fill-foreground">THREE MAIN EFFECTS</text>
        <rect x="568" y="188" width="120" height="58" rx="8" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="576" y="204" fontSize="6" fontWeight="800" className="fill-brand">Macrophage activation</text>
        <text x="576" y="215" fontSize="5.4" className="fill-muted-foreground">(TLR4/CD14) →</text>
        <text x="576" y="228" fontSize="5.6" fontWeight="700" className="fill-brand">TNF-α · IL-1 · IL-6</text>
        <rect x="702" y="188" width="120" height="58" rx="8" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="710" y="204" fontSize="6" fontWeight="800" className="fill-brand">Complement</text>
        <text x="710" y="215" fontSize="5.4" className="fill-muted-foreground">C3a → histamine:</text>
        <text x="710" y="226" fontSize="5.4" className="fill-muted-foreground">hypotension + edema</text>
        <text x="710" y="238" fontSize="5.4" className="fill-muted-foreground">C5a → neutrophil</text>
        <text x="710" y="248" fontSize="5.4" className="fill-muted-foreground">chemotaxis</text>
        <rect x="836" y="188" width="104" height="58" rx="8" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="844" y="204" fontSize="6" fontWeight="800" className="fill-brand">Tissue factor</text>
        <text x="844" y="215" fontSize="5.4" className="fill-muted-foreground">activation →</text>
        <text x="844" y="228" fontSize="5.6" fontWeight="700" className="fill-brand">Coagulation cascade</text>
        <text x="844" y="240" fontSize="5.6" fontWeight="700" className="fill-emergency">→ DIC</text>

        <rect x="568" y="254" width="372" height="56" rx="9" className="fill-secondary" />
        <text x="580" y="270" fontSize="6" fontWeight="800" className="fill-foreground">THE READOUTS</text>
        <text x="580" y="282" fontSize="5.6" className="fill-muted-foreground">TNF-α → fever and hypotension · IL-1 and IL-6 → fever · nitric oxide → hypotension</text>
        <text x="580" y="294" fontSize="5.6" className="fill-muted-foreground">C3a → histamine release (hypotension and edema) · C5a → neutrophil chemotaxis</text>
        <text x="580" y="306" fontSize="5.6" fontWeight="700" className="fill-emergency">Outcome strip: fever · shock · edema · DIC/death</text>
        <text x="568" y="330" fontSize="5.6" className="fill-muted-foreground">The endotoxin mechanism diagram: the toxin (lipid A) triggers the host cell's</text>
        <text x="568" y="340" fontSize="5.6" className="fill-muted-foreground">downstream cellular reaction — TNF, IL-1, IL-6 — the mediators of fever, shock, DIC.</text>
        <text x="568" y="360" fontSize="5.4" fontWeight="700" className="fill-brand">Read with M1's address book: lipid A is the gram ⊝ outer-membrane face of LPS —</text>
        <text x="568" y="370" fontSize="5.4" fontWeight="700" className="fill-brand">the same lipid A that induces TNF and IL-1 from M1's envelope map.</text>
      </g>

      {/* ===== Panel C: the exotoxin roster ===== */}
      <g>
        <rect x="36" y="400" width="616" height="360" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="422" fontSize="9" fontWeight="800" className="fill-foreground">THE EXOTOXIN ROSTER — by mechanism group</text>

        <rect x="52" y="434" width="584" height="88" rx="9" className="fill-brand-soft/15 stroke-brand" strokeWidth="1" />
        <text x="64" y="452" fontSize="7" fontWeight="800" className="fill-brand">① INHIBIT PROTEIN SYNTHESIS</text>
        <text x="64" y="466" fontSize="5.8" fontWeight="700" className="fill-foreground">C diphtheriae — diphtheria toxin; P aeruginosa — Exotoxin A:</text>
        <text x="64" y="476" fontSize="5.6" className="fill-muted-foreground">inactivate elongation factor (EF-2) through ADP-ribosylation →</text>
        <text x="64" y="486" fontSize="5.6" className="fill-muted-foreground">pseudomembranes, bull neck, myocarditis; host cell death.</text>
        <text x="64" y="502" fontSize="5.8" fontWeight="700" className="fill-foreground">Shigella spp + EHEC — Shiga toxin:</text>
        <text x="64" y="512" fontSize="5.6" className="fill-muted-foreground">inactivates the 60S ribosome (removing adenine from rRNA) → dysentery; HUS in</text>
        <text x="64" y="522" fontSize="5.6" className="fill-muted-foreground">O157:H7 (EHEC does not invade host cells — the Shiga-toxin difference).</text>

        <rect x="52" y="528" width="584" height="112" rx="9" className="fill-brand-soft/15 stroke-brand" strokeWidth="1" />
        <text x="64" y="546" fontSize="7" fontWeight="800" className="fill-brand">② INCREASE FLUID SECRETION (the cyclase set)</text>
        <text x="64" y="560" fontSize="5.8" fontWeight="700" className="fill-foreground">ETEC — LT: overactivates adenylate cyclase (↑ cAMP → ↑ Cl− secretion, H2O efflux) ·</text>
        <text x="64" y="570" fontSize="5.6" className="fill-muted-foreground">ST: overactivates guanylate cyclase (↑ cGMP → ↓ resorption of NaCl and H2O) — watery diarrhea.</text>
        <text x="64" y="584" fontSize="5.8" fontWeight="700" className="fill-foreground">B anthracis — anthrax toxin: mimics adenylate cyclase (↑ cAMP) →</text>
        <text x="64" y="594" fontSize="5.6" className="fill-muted-foreground">the edematous borders of the black eschar in cutaneous anthrax.</text>
        <text x="64" y="608" fontSize="5.8" fontWeight="700" className="fill-foreground">V cholerae — cholera toxin: overactivates adenylate cyclase by permanently</text>
        <text x="64" y="618" fontSize="5.6" className="fill-muted-foreground">activating Gs → voluminous "rice-water" diarrhea.</text>
        <text x="64" y="632" fontSize="5.8" fontWeight="700" className="fill-foreground">B pertussis — pertussis toxin: activates adenylate cyclase by inactivating Gi →</text>
        <text x="64" y="642" fontSize="5.6" className="fill-muted-foreground">whooping cough ("100-day cough"; posttussive emesis).</text>

        <rect x="52" y="644" width="284" height="100" rx="9" className="fill-brand-soft/15 stroke-brand" strokeWidth="1" />
        <text x="64" y="662" fontSize="7" fontWeight="800" className="fill-brand">③ INHIBIT PHAGOCYTOSIS</text>
        <text x="64" y="676" fontSize="5.8" fontWeight="700" className="fill-foreground">B pertussis (the same toxin):</text>
        <text x="64" y="686" fontSize="5.6" className="fill-muted-foreground">inhibits phagocytic ability — the whooping-</text>
        <text x="64" y="696" fontSize="5.6" className="fill-muted-foreground">cough organism's second job.</text>

        <rect x="352" y="644" width="284" height="100" rx="9" className="fill-emergency/10 stroke-emergency" strokeWidth="1" />
        <text x="364" y="662" fontSize="7" fontWeight="800" className="fill-emergency">④ INHIBIT NEUROTRANSMITTER RELEASE</text>
        <text x="364" y="676" fontSize="5.8" fontWeight="700" className="fill-foreground">C tetani + C botulinum — SNARE proteases:</text>
        <text x="364" y="686" fontSize="5.6" className="fill-muted-foreground">tetanospasmin: no GABA/glycine from Renshaw</text>
        <text x="364" y="696" fontSize="5.6" className="fill-muted-foreground">cells → spastic paralysis (trismus, opisthotonos);</text>
        <text x="364" y="706" fontSize="5.6" className="fill-muted-foreground">botulinum: no ACh release → flaccid paralysis.</text>
      </g>

      {/* ===== Panel D: lysers + superantigens ===== */}
      <g>
        <rect x="668" y="400" width="288" height="360" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="684" y="422" fontSize="9" fontWeight="800" className="fill-foreground">LYSERS & SUPERANTIGENS</text>
        <rect x="684" y="434" width="256" height="96" rx="9" className="fill-secondary" />
        <text x="696" y="452" fontSize="6.4" fontWeight="800" className="fill-foreground">MEMBRANE LYSERS</text>
        <text x="696" y="466" fontSize="5.6" fontWeight="700" className="fill-foreground">C perfringens — alpha toxin:</text>
        <text x="696" y="476" fontSize="5.4" className="fill-muted-foreground">phospholipase (lecithinase) degrading tissue</text>
        <text x="696" y="486" fontSize="5.4" className="fill-muted-foreground">and cell membranes → myonecrosis ("gas</text>
        <text x="696" y="496" fontSize="5.4" className="fill-muted-foreground">gangrene") + hemolysis ("double zone" on blood agar).</text>
        <text x="696" y="512" fontSize="5.6" fontWeight="700" className="fill-foreground">S pyogenes — streptolysin O:</text>
        <text x="696" y="522" fontSize="5.4" className="fill-muted-foreground">lyses RBCs (β-hemolysis); ASO antibodies</text>
        <text x="696" y="532" fontSize="5.4" className="fill-muted-foreground">diagnose rheumatic fever.</text>

        <rect x="684" y="540" width="256" height="146" rx="9" className="fill-emergency/10 stroke-emergency" strokeWidth="1" />
        <text x="696" y="558" fontSize="6.4" fontWeight="800" className="fill-emergency">SUPERANTIGENS → SHOCK</text>
        <text x="696" y="572" fontSize="5.6" fontWeight="700" className="fill-foreground">S aureus TSST-1 · S pyogenes</text>
        <text x="696" y="582" fontSize="5.6" fontWeight="700" className="fill-foreground">erythrogenic exotoxin A:</text>
        <text x="696" y="596" fontSize="5.4" className="fill-muted-foreground">cross-links the β region of the TCR to MHC</text>
        <text x="696" y="606" fontSize="5.4" className="fill-muted-foreground">class II on APCs OUTSIDE the antigen</text>
        <text x="696" y="616" fontSize="5.4" className="fill-muted-foreground">binding site → overwhelming release of IL-1,</text>
        <text x="696" y="626" fontSize="5.4" className="fill-muted-foreground">IL-2, IFN-γ, TNF-α → shock. Toxic shock</text>
        <text x="696" y="636" fontSize="5.4" className="fill-muted-foreground">syndrome (fever, rash, shock); toxic shock–</text>
        <text x="696" y="646" fontSize="5.4" className="fill-muted-foreground">like syndrome + scarlet fever. Also: scalded</text>
        <text x="696" y="656" fontSize="5.4" className="fill-muted-foreground">skin syndrome (exfoliative toxin) and food</text>
        <text x="696" y="666" fontSize="5.4" className="fill-muted-foreground">poisoning (heat-stable enterotoxin).</text>
      </g>

      {/* AB-toxin footnote strip */}
      <g>
        <rect x="36" y="776" width="920" height="40" rx="9" className="fill-brand-soft/20 stroke-brand" strokeWidth="1" />
        <text x="496" y="794" textAnchor="middle" fontSize="6.2" fontWeight="700" className="fill-foreground">AB TOXINS (the footnote's roster): B enables Binding and triggers uptake (endocytosis) of the Active A component — the A components are usually ADP ribosyltransferases.</text>
        <text x="496" y="806" textAnchor="middle" fontSize="6.2" fontWeight="700" className="fill-muted-foreground">Marked with the footnote letter: diphtheria toxin, Exotoxin A, Shiga toxin, LT, anthrax toxin (a three-component AB), cholera toxin, pertussis toxin, tetanospasmin, botulinum toxin.</text>
      </g>

      {/* anchors strip */}
      <g>
        <rect x="36" y="828" width="920" height="30" rx="8" className="fill-secondary" />
        <text x="496" y="848" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-muted-foreground">Anchors: exotoxin = secreted, polypeptide, plasmid/phage genes, high toxicity, antitoxins, toxoid vaccines, 60°C-labile (3 exceptions) · endotoxin = shed on lysis/blebs, lipid A of LPS, chromosomal genes, TNF/IL-1/IL-6, no vaccine, 100°C-stable · eXtremely heat stable is the endotoxin cue.</text>
      </g>

      {/* footer */}
      <text x="24" y="874" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's comparison table + exotoxin/endotoxin mechanism diagram + the Bacteria-with-exotoxins table + endotoxin cascade diagram (pdf 151-153 / book 129-131). FA's printed mnemonic in the ETEC manifestation cell is NOT reproduced here (verification only). The verbatim tables are the note's table blocks.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// M9 — Gram-positive cocci: the lab-algorithm decision tree (catalase,
// coagulase, hemolysis, optochin/bacitracin/novobiocin/NaCl gates) + the
// organism roster (staphylococci, streptococci, enterococci)
// (source: pdf 154-157 / book 132-135 — the decision tree is pure vector;
//  the printed photos [hemolysis agar, S aureus clusters, S pneumoniae
//  diplococci, S pyogenes chains] are raster, COPYRIGHTED, described here)
// ---------------------------------------------------------------------------

export function GramPosCocciTree() {
  const w = 980;
  const h = 900;
  const roster = [
    { n: "S aureus", t: "Gram ⊕, β-hemolytic, catalase ⊕, coagulase ⊕ cocci in clusters. Protein A binds Fc-IgG (inhibits complement activation and phagocytosis). Colonizes skin, nares, ears, axilla, groin", d: "Inflammatory (skin/abscesses/pneonia after flu/IE/septic arthritis/osteomyelitis) + toxin-mediated (TSST-1, scalded skin, rapid-onset food poisoning). MRSA: altered PBVs (mecA); PVL kills leukocytes. Coagulase + toxins form fibrin clot around itself → abscess" },
    { n: "S epidermidis", t: "Gram ⊕, catalase ⊕, coagulase ⊝, urease ⊕ cocci in clusters. Novobiocin SENSITIVE. Does not ferment mannitol (vs S aureus)", d: "Normal skin microbiota; contaminates blood cultures. Infects prosthetic devices (hip implant, heart valve) and IV catheters via adherent biofilms" },
    { n: "S saprophyticus", t: "Gram ⊕, catalase ⊕, coagulase ⊝, urease ⊕ cocci in clusters. Novobiocin RESISTANT", d: "Normal microbiota of female genital tract and perineum. Second most common cause of uncomplicated UTI in young females (most common: E coli)" },
    { n: "S pneumoniae", t: "Gram ⊕, α-hemolytic, lancet-shaped diplococci. Encapsulated (no virulence without capsule). IgA protease. Optochin SENSITIVE, bile SOLUBLE", d: "MOPS: Meningitis, Otitis media (children), Pneumonia (rusty sputum), Sinusitis. Hyposplenia/asplenia predispose. Vaccines: conjugate (PCV13/15/20) + polysaccharide (PPSV23)" },
    { n: "Viridans streptococci", t: "Gram ⊕, α-hemolytic cocci. Optochin RESISTANT, bile INSOLUBLE. Normal microbiota of oropharynx", d: "S mutans + S mitis: dental caries. S sanguinis: dextrans bind fibrin-platelet aggregates on damaged heart valves → infective endocarditis" },
    { n: "S pyogenes (group A)", t: "Gram ⊕ cocci in chains. Bacitracin SENSITIVE, β-hemolytic, PYR ⊕. Hyaluronic acid capsule + M protein inhibit phagocytosis; M protein ≈ host myosin → autoimmunity (rheumatic carditis)", d: "Pyogenic (pharyngitis, cellulitis, impetigo honey-crusted, erysipelas) + toxigenic (scarlet fever, TSLS, necrotizing fasciitis) + immunologic (rheumatic fever, glomerulonephritis). DNase, erythrogenic exotoxin, streptokinase, streptolysin O; ASO / anti-DNase B" },
    { n: "S agalactiae (group B)", t: "Gram ⊕ cocci, bacitracin RESISTANT, β-hemolytic. Polysaccharide capsule confers virulence. CAMP factor enlarges S aureus hemolysis; hippurate ⊕; PYR ⊝", d: "Colonizes vagina; pneumonia, meningitis, sepsis mainly in BABIES. Screen at 35-37 weeks (rectal + vaginal swabs); ⊕ culture → intrapartum penicillin/ampicillin prophylaxis" },
    { n: "S gallolyticus", t: "Formerly S bovis. Gram ⊕ cocci, colonizes the gut", d: "Bacteremia and infective endocarditis; ↑ incidence of colon cancer (bovis in the blood = cancer in the colon)" },
    { n: "Enterococci (E faecalis, E faecium)", t: "Gram ⊕ cocci. Catalase ⊝, PYR ⊕, typically nonhemolytic. Intrinsically resistant to penicillin G; grow in 6.5% NaCl and bile", d: "Normal colonic microbiota → UTI, biliary tract infections, infective endocarditis (after GI/GU procedures). VRE: important healthcare-associated cause" },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Gram-positive cocci, an original KYP decision tree and roster. THE TREE: gram-positive cocci split by CATALASE — negative (pairs or chains) = Streptococcus; positive (clusters) = Staphylococcus. The staphylococcus branch splits by COAGULASE: positive = S aureus (coagulase and toxins; fibrin clot around itself → abscess); negative splits by NOVOBIOCIN — sensitive = S epidermidis (prosthetic devices, IV catheters, biofilms; does not ferment mannitol); resistant = S saprophyticus (UTI in young females). The streptococcus branch splits by HEMOLYSIS: alpha (partial, green — optochin sensitivity and bile solubility) separates S pneumoniae (encapsulated; optochin sensitive, bile soluble — MOPS: meningitis, otitis media, pneumonia, sinusitis) from viridans streptococci (no capsule; optochin resistant, bile insoluble — S mutans and S mitis dental caries; S sanguinis endocarditis); beta (complete, clear — bacitracin sensitivity and PYR status) separates group A S pyogenes (bacitracin sensitive, PYR positive — pharyngitis, cellulitis, scarlet fever, rheumatic fever, glomerulonephritis) from group B S agalactiae (bacitracin resistant — babies: pneumonia, meningitis, sepsis; CAMP factor; hippurate positive); and gamma (no hemolysis — growth in 6.5% NaCl and PYR status) separates Enterococcus (E faecalis, E faecium — grows in bile, PYR positive, intrinsically resistant to penicillin G, VRE) from nonenterococcus (S gallolyticus — bacteremia, endocarditis, colon cancer). The roster below the tree lists all nine organisms with their test signatures and diseases" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Gram-positive cocci — the lab algorithm tree (original KYP redraw)</text>
        <rect x="762" y="24" width="170" height="18" rx="9" className="fill-brand-soft" />
        <text x="847" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">catalase → coagulase → hemolysis</text>
      </g>

      {/* ===== THE TREE ===== */}
      <g>
        <rect x="36" y="76" width="920" height="340" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="52" y="98" fontSize="9" fontWeight="800" className="fill-foreground">GRAM ⊕ COCCI — the decision tree</text>

        {/* catalase root */}
        <rect x="52" y="112" width="180" height="70" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="142" y="132" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-foreground">CATALASE</text>
        <text x="62" y="148" fontSize="5.8" className="fill-emergency">⊝ (pairs or chains)</text>
        <text x="62" y="160" fontSize="5.8" fontWeight="800" className="fill-emergency">→ Streptococcus</text>
        <text x="62" y="174" fontSize="5.8" className="fill-brand">⊕ (clusters)</text>
        <text x="62" y="186" fontSize="5.8" fontWeight="800" className="fill-brand">→ Staphylococcus</text>

        {/* staph branch */}
        <rect x="256" y="106" width="324" height="82" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="270" y="124" fontSize="7" fontWeight="800" className="fill-brand">STAPHYLOCOCCUS — coagulase</text>
        <text x="270" y="138" fontSize="5.8" fontWeight="700" className="fill-foreground">⊕ → S aureus: Protein A binds Fc-IgG (inhibits</text>
        <text x="270" y="148" fontSize="5.8" className="fill-muted-foreground">complement activation + phagocytosis); coagulase + toxins;</text>
        <text x="270" y="158" fontSize="5.8" className="fill-muted-foreground">fibrin clot around itself → abscess; MRSA = altered PBVs (mecA);</text>
        <text x="270" y="168" fontSize="5.8" className="fill-muted-foreground">PVL kills leukocytes + tissue necrosis. β-hemolytic.</text>
        <text x="270" y="182" fontSize="5.8" fontWeight="800" className="fill-foreground">⊝ → novobiocin:</text>
        <text x="360" y="182" fontSize="5.8" fontWeight="700" className="fill-emergency">SENSITIVE → S epidermidis</text>
        <text x="500" y="182" fontSize="5.6" className="fill-muted-foreground">(no mannitol fermentation;</text>
        <text x="270" y="192" fontSize="5.8" fontWeight="700" className="fill-brand">RESISTANT → S saprophyticus</text>
        <text x="500" y="192" fontSize="5.6" className="fill-muted-foreground">(UTI in young females; E coli #1)</text>

        {/* strep branch: hemolysis */}
        <rect x="256" y="196" width="324" height="210" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="270" y="214" fontSize="7" fontWeight="800" className="fill-emergency">STREPTOCOCCUS — hemolysis</text>
        <text x="270" y="228" fontSize="6.2" fontWeight="700" className="fill-foreground">α (partial, green) — optochin + bile:</text>
        <text x="284" y="240" fontSize="5.8" className="fill-muted-foreground">SENSITIVE + SOLUBLE → S pneumoniae (encapsulated;</text>
        <text x="284" y="250" fontSize="5.8" className="fill-muted-foreground">lancet diplococci; IgA protease; MOPS; rusty sputum;</text>
        <text x="284" y="260" fontSize="5.8" className="fill-muted-foreground">asplenia predisposes; PCV13/15/20 + PPSV23)</text>
        <text x="284" y="272" fontSize="5.8" className="fill-muted-foreground">RESISTANT + INSOLUBLE → viridans (no capsule:</text>
        <text x="284" y="282" fontSize="5.8" className="fill-muted-foreground">S mutans/S mitis caries; S sanguinis IE)</text>
        <text x="270" y="298" fontSize="6.2" fontWeight="700" className="fill-foreground">β (complete, clear) — bacitracin + PYR:</text>
        <text x="284" y="310" fontSize="5.8" className="fill-muted-foreground">SENSITIVE + PYR ⊕ → group A S pyogenes (M protein ≈</text>
        <text x="284" y="320" fontSize="5.8" className="fill-muted-foreground">myosin → autoimmunity; hyaluronic acid capsule;</text>
        <text x="284" y="330" fontSize="5.8" className="fill-muted-foreground">pyogenic/toxigenic/immunologic triad; ASO + anti-DNase B)</text>
        <text x="284" y="342" fontSize="5.8" className="fill-muted-foreground">RESISTANT → group B S agalactiae (babies; CAMP factor;</text>
        <text x="284" y="352" fontSize="5.8" className="fill-muted-foreground">hippurate ⊕; PYR ⊝; screen 35-37 weeks → intrapartum</text>
        <text x="284" y="362" fontSize="5.8" className="fill-muted-foreground">penicillin/ampicillin prophylaxis)</text>
        <text x="270" y="378" fontSize="6.2" fontWeight="700" className="fill-foreground">γ (no hemolysis) — 6.5% NaCl + PYR:</text>
        <text x="284" y="390" fontSize="5.8" className="fill-muted-foreground">GROWS in bile/NaCl + PYR ⊕ → Enterococcus (E faecalis,</text>
        <text x="284" y="400" fontSize="5.8" className="fill-muted-foreground">E faecium; catalase ⊝; intrinsically resistant to</text>
        <text x="284" y="400" fontSize="5.8" className="fill-muted-foreground">penicillin G; VRE)</text>
        <text x="284" y="412" fontSize="5.8" className="fill-muted-foreground">→ nonenterococcus S gallolyticus (bacteremia/IE;</text>
        <text x="284" y="412" fontSize="5.8" className="fill-muted-foreground">↑ colon cancer)</text>

        {/* the test-signature rail */}
        <rect x="596" y="106" width="344" height="300" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="610" y="126" fontSize="8" fontWeight="800" className="fill-foreground">THE TEST SIGNATURES (one per gate)</text>
        {[
          ["CATALASE", "staph ⊕ vs strep ⊝ (the first split)"],
          ["COAGULASE", "S aureus ⊕ vs epidermidis/saprophyticus ⊝"],
          ["NOVOBIOCIN", "epidermidis SENSITIVE vs saprophyticus RESISTANT"],
          ["HEMOLYSIS", "α partial green · β complete clear · γ none"],
          ["OPTOCHIN + BILE", "pneumoniae SENSITIVE + SOLUBLE vs viridans RESISTANT + INSOLUBLE"],
          ["BACITRACIN + PYR", "pyogenes SENSITIVE + PYR ⊕ vs agalactiae RESISTANT (PYR ⊝)"],
          ["6.5% NaCl (bile)", "Enterococcus GROWS + PYR ⊕ (catalase ⊝) vs nonenterococcus"],
          ["MANNITOL", "S aureus ferments; S epidermidis does not"],
          ["CAMP + HIPPURATE", "agalactiae: CAMP factor enlarges S aureus hemolysis; hippurate ⊕"],
        ].map((r, i) => (
          <g key={r[0]}>
            <text x="610" y={146 + i * 29} fontSize="6.4" fontWeight="800" className="fill-brand">{r[0]}</text>
            {r[1].match(/.{1,52}(\s|$)/g)!.slice(0, 2).map((line, j) => (
              <text key={j} x="610" y={156 + j * 9 + i * 29} fontSize="5.6" className="fill-muted-foreground">{line.trim()}</text>
            ))}
          </g>
        ))}
      </g>

      {/* ===== THE ROSTER ===== */}
      <g>
        <rect x="36" y="432" width="920" height="408" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="454" fontSize="9" fontWeight="800" className="fill-foreground">THE ORGANISM ROSTER — test signature · diseases</text>
        {roster.map((r, i) => (
          <g key={r.n}>
            <rect x="52" y={464 + i * 41} width="888" height="35" rx="7" className={i % 2 === 0 ? "fill-secondary" : "fill-secondary/60"} />
            <text x="64" y={478 + i * 41} fontSize="6.4" fontWeight="800" className={i < 3 ? "fill-brand" : i < 6 ? "fill-emergency" : "fill-foreground"}>{r.n}</text>
            <text x="220" y={478 + i * 41} fontSize="5.2" className="fill-muted-foreground">{r.t.match(/.{1,60}(\s|$)/g)!.slice(0, 1).map(x => x.trim()).join(" ")}</text>
            <text x="220" y={488 + i * 41} fontSize="5.2" className="fill-muted-foreground">{r.d.match(/.{1,60}(\s|$)/g)!.slice(0, 1).map(x => x.trim()).join(" ")}</text>
          </g>
        ))}
      </g>

      {/* anchors strip */}
      <g>
        <rect x="36" y="852" width="920" height="34" rx="8" className="fill-secondary" />
        <text x="496" y="866" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-muted-foreground">Anchors: catalase splits cocci (staph ⊕ / strep ⊝) · coagulase splits staph (aureus ⊕ — fibrin-clot abscess) · novobiocin splits coag-neg staph · optochin+bile splits α-strep (pneumoniae vs viridans) · bacitracin+PYR splits β-strep (pyogenes vs agalactiae)</text>
        <text x="496" y="878" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-muted-foreground">6.5% NaCl splits γ-strep (Enterococcus: catalase ⊝, PYR ⊕, penicillin-G-resistant, VRE) · MOPS = the pneumococcus set · Group B = Babies (screen 35-37 wks) · bovis in the blood = cancer in the colon · S aureus food poisoning = preformed heat-stable enterotoxin (2-6 hr incubation)</text>
      </g>

      {/* footer */}
      <text x="24" y="896" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's Gram-positive lab algorithm tree (pdf 154 / book 132 — pure vector) with the organism roster from books 133-135. The printed photos (α/β hemolysis agar, S aureus clusters, S pneumoniae lancet diplococci, S pyogenes chains) are raster, COPYRIGHTED, described-in-text only. FA's printed mnemonics (op-to-chin, Ph-yogenes, Group B for Babies, bovis/colon) are NOT reproduced here — verification only.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// M10 — Gram-positive bacilli: the toxin map (SNARE axis redraw + mechanism
// rail + the Nocardia/Actinomyces SNAP axis) + the organism roster
// (source: pdf 158-159 / book 136-137 — the tetanus-vs-botulism SNARE panels
//  are pure vector; the printed photos [pseudomembranous colitis, gas
//  gangrene, diphtheria pseudomembrane, Listeria rocket tails, Nocardia
//  acid-fast, Actinomyces filaments] are raster, COPYRIGHTED, described here)
// ---------------------------------------------------------------------------

export function GramPosBacilliMap() {
  const w = 980;
  const h = 1200;
  const roster = [
    { n: "B cereus", c: "brand", t: "Gram ⊕ rod; spores survive cooking rice — keeping rice warm → germination + enterotoxin (reheated-rice syndrome)", d: "Emetic: nausea/vomiting in 1-5 h (cereulide, a preformed toxin). Diarrheal: watery, nonbloody diarrhea + GI pain in 8-18 h. Supportive care — antibiotics ineffective against toxins" },
    { n: "C difficile", c: "brand", t: "Toxins A and B damage enterocytes; often 2° to antibiotic use (clindamycin, ampicillin, cephalosporins, fluoroquinolones); associated with PPIs", d: "Watery diarrhea → pseudomembranous colitis; fulminant: toxic megacolon, ileus, shock. Dx: PCR or antigen detection in stool. Rx: oral vancomycin or fidaxomicin; recurrent → repeat regimen or fecal microbiota transplant" },
    { n: "C tetani", c: "brand", t: "Gram ⊕, spore-forming, obligate anaerobic rod; noninvasive — remains localized to wound; tetanospasmin spreads by retrograde axonal transport to CNS", d: "Blocks GABA + glycine release from Renshaw cells → spastic paralysis: trismus (lockjaw), risus sardonicus, opisthotonos. Prevent: vaccine. Treat: antitoxin +/− booster, antibiotics, diazepam, wound debridement" },
    { n: "C botulinum", c: "brand", t: "Heat-labile toxin damages SNARE proteins → no ACh release at the neuromuscular junction; babies: ingested spores (honey); adults: preformed toxin (canned food)", d: "The 5 D's: diplopia, dysarthria, dysphagia, dyspnea, descending flaccid paralysis; NO sensory deficits. Rx: human botulinum immunoglobulin. Botox: focal dystonia, hyperhidrosis, muscle spasms, cosmetic wrinkles" },
    { n: "C perfringens", c: "brand", t: "α-toxin (lecithinase, a phospholipase); heavily spore-contaminated food cooked but left standing <60°C → germination → vegetative bacteria → enterotoxin", d: "Myonecrosis (gas gangrene; soft-tissue crepitus) + hemolysis; late-onset food poisoning at 10-12 h, resolution in 24 h. Spontaneous gas gangrene (hematogenous; colonic malignancy) = C septicum" },
    { n: "C diphtheriae", c: "emergency", t: "Gram ⊕ rods in angular arrangements; respiratory droplets; exotoxin encoded by β-prophage; ADP-ribosylation of EF-2 halts protein synthesis", d: "Pseudomembranous pharyngitis (grayish-white membrane), bull's neck; toxin → myocarditis, arrhythmias, neuropathies. Metachromatic granules; Löffler media; black colonies on cystine-tellurite; ⊕ Elek test. Antitoxin +/– erythromycin or penicillin; toxoid vaccine" },
    { n: "L monocytogenes", c: "emergency", t: "Gram ⊕, facultative intracellular rod; unpasteurized dairy + cold deli meats; transplacental + vaginal transmission; grows at refrigeration temps (cold enrichment)", d: "Rocket tails (actin polymerization) → cell-to-cell spread, avoiding antibody; listeriolysin escapes the phagosome; tumbling motility. Amnionitis, sepsis, spontaneous abortion; granulomatosis infantiseptica; meningitis (immunocompromised, neonates, older adults). Rx: ampicillin" },
    { n: "Nocardia", c: "foreground", t: "Gram ⊕ long branching filaments (resemble fungi); aerobe, catalase ⊕; weakly acid fast; found in soil", d: "Pulmonary infections in immunocompromised (mimic TB but ⊝ PPD); cutaneous after trauma; spreads to CNS → cerebral abscess. Treat with sulfonamides (TMP-SMX)" },
    { n: "Actinomyces", c: "foreground", t: "Gram ⊕ long branching filaments (resemble fungi); anaerobe, catalase ⊝; not acid fast; normal oral, reproductive, GI microbiota", d: "Oral/facial abscesses draining through sinus tracts (dental caries/extraction, maxillofacial trauma); yellow sulfur granules; PID with IUDs. Treat with penicillin" },
  ];
  const snapRows = [
    ["OXYGEN / CATALASE", "Aerobe, catalase ⊕", "Anaerobe, catalase ⊝"],
    ["ACID FAST", "Acid fast (weak)", "Not acid fast"],
    ["HABITAT", "Found in soil", "Normal oral, reproductive, and GI microbiota"],
    ["DISEASES", "Pulmonary infections in immunocompromised (can mimic TB but with ⊝ PPD); cutaneous after trauma; CNS → cerebral abscess", "Oral/facial abscesses draining through sinus tracts; dental caries/extraction; yellow sulfur granules; PID with IUDs"],
    ["TREATMENT", "Sulfonamides (TMP-SMX)", "Penicillin"],
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Gram-positive bacilli, an original KYP toxin map and roster. THE SNARE AXIS (a redraw of the printed two-panel diagram): tetanus toxin and botulinum toxin are proteases that cleave SNARE proteins. LEFT PANEL — TETANUS: the motor neuron stimulates the muscle; the Renshaw cell (an inhibitory interneuron) normally brakes it with GABA and glycine; tetanospasmin travels by retrograde axonal transport to the CNS and blocks the Renshaw cell's release of GABA and glycine — inhibition removed — unopposed stimulation equals spastic paralysis (trismus, risus sardonicus, opisthotonos). RIGHT PANEL — BOTULISM: the Renshaw cell is spared; botulinum toxin acts at the motor neuron terminal, preventing acetylcholine release at the neuromuscular junction — no stimulation equals flaccid paralysis (the 5 D's: diplopia, dysarthria, dysphagia, dyspnea, descending flaccid paralysis, without sensory deficits; babies get spores in honey — floppy baby; adults get preformed toxin in canned food). THE MECHANISM RAIL: five toxin classes — SNARE at the Renshaw cell (tetani), SNARE at the neuromuscular junction (botulinum), EF-2 ADP-ribosylation by the beta-prophage exotoxin (diphtheriae — halts protein synthesis; pharyngeal, cardiac, CNS necrosis), alpha-toxin lecithinase (perfringens — myonecrosis, gas gangrene, hemolysis, crepitus), and the enterotoxins (difficile toxins A and B — pseudomembranous colitis after clindamycin and PPIs; cereus — cereulide emetic disease at 1-5 hours from reheated rice vs diarrheal at 8-18 hours). THE SNAP AXIS: Nocardia (aerobe, catalase positive, weakly acid fast, soil, pulmonary and CNS abscess, treat with sulfonamides TMP-SMX) vs Actinomyces (anaerobe, catalase negative, not acid fast, normal microbiota, oral and facial abscesses with sinus tracts and sulfur granules, PID with IUDs, treat with penicillin). THE ROSTER: nine organism rows — Bacillus cereus, Clostridioides difficile, Clostridium tetani, Clostridium botulinum, Clostridium perfringens (with C septicum and colonic malignancy), Corynebacterium diphtheriae (metachromatic granules, Loeffler media, cystine-tellurite, Elek test), Listeria monocytogenes (cold enrichment, rocket tails, listeriolysin, ampicillin), Nocardia, Actinomyces" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Gram-positive bacilli — the toxin map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" rx="9" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">SNARE axis · EF-2 · lecithinase · actin rockets</text>
      </g>

      {/* ===== THE SNARE AXIS (redraw of the printed two-panel diagram) ===== */}
      <g>
        <rect x="36" y="76" width="908" height="250" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />
        <text x="52" y="98" fontSize="9" fontWeight="800" className="fill-foreground">THE SNARE AXIS — tetanus vs botulism (both toxins are proteases that cleave SNARE proteins)</text>

        {/* left panel: tetanus */}
        <rect x="52" y="110" width="438" height="200" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="66" y="128" fontSize="7.4" fontWeight="800" className="fill-emergency">C TETANI — tetanospasmin (retrograde axonal transport to CNS)</text>
        <rect x="66" y="138" width="180" height="30" rx="6" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="156" y="150" textAnchor="middle" fontSize="5.8" fontWeight="700" className="fill-foreground">Renshaw cell (inhibitory neuron)</text>
        <text x="156" y="160" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">releases GABA + glycine to brake the motor neuron</text>
        <text x="256" y="150" fontSize="6.4" fontWeight="800" className="fill-emergency">⊝ BLOCKED</text>
        <text x="256" y="160" fontSize="5.2" className="fill-muted-foreground">no GABA / no glycine release</text>
        <rect x="66" y="196" width="150" height="30" rx="6" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="141" y="208" textAnchor="middle" fontSize="5.8" fontWeight="700" className="fill-foreground">Motor neuron</text>
        <text x="141" y="218" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">runs unopposed</text>
        <path d="M 216 211 L 286 211" strokeWidth="1.6" className="stroke-foreground" markerEnd="url(#m10arrow)" />
        <rect x="288" y="196" width="90" height="30" rx="6" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="333" y="208" textAnchor="middle" fontSize="5.8" fontWeight="700" className="fill-foreground">Muscle</text>
        <text x="333" y="218" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">contracting</text>
        <path d="M 156 168 L 141 196" strokeWidth="1.2" strokeDasharray="3 2" className="stroke-muted-foreground" />
        <text x="66" y="240" fontSize="5.6" className="fill-muted-foreground">Noninvasive — remains localized to the wound; toxin travels the axon to the spinal cord.</text>
        <rect x="66" y="248" width="410" height="52" rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="271" y="266" textAnchor="middle" fontSize="7.2" fontWeight="800" className="fill-emergency">Unopposed stimulation = SPASTIC paralysis</text>
        <text x="271" y="278" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">trismus (lockjaw) · risus sardonicus (raised eyebrows, open grin) · opisthotonos (spasms of spinal extensors)</text>
        <text x="271" y="290" textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-muted-foreground">prevent: vaccine · treat: antitoxin +/− booster, antibiotics, diazepam, wound debridement</text>

        {/* right panel: botulism */}
        <rect x="502" y="110" width="424" height="200" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="516" y="128" fontSize="7.4" fontWeight="800" className="fill-brand">C BOTULINUM — heat-labile toxin (at the neuromuscular junction)</text>
        <rect x="516" y="138" width="180" height="30" rx="6" className="fill-secondary/50 stroke-border" strokeWidth="1" />
        <text x="606" y="150" textAnchor="middle" fontSize="5.8" fontWeight="700" className="fill-muted-foreground">Renshaw cell (inhibitory neuron)</text>
        <text x="606" y="160" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">SPARED — inhibition intact</text>
        <rect x="516" y="196" width="150" height="30" rx="6" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="591" y="208" textAnchor="middle" fontSize="5.8" fontWeight="700" className="fill-foreground">Motor neuron</text>
        <text x="591" y="218" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">terminal ⊝ ACh release</text>
        <text x="676" y="211" fontSize="6.4" fontWeight="800" className="fill-brand">⊝ BLOCKED</text>
        <path d="M 666 211 L 726 211" strokeWidth="1.6" strokeDasharray="3 2" className="stroke-muted-foreground" markerEnd="url(#m10arrow)" />
        <text x="696" y="203" textAnchor="middle" fontSize="5.0" className="fill-muted-foreground">no ACh</text>
        <rect x="728" y="196" width="90" height="30" rx="6" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="773" y="208" textAnchor="middle" fontSize="5.8" fontWeight="700" className="fill-foreground">Muscle</text>
        <text x="773" y="218" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">silent</text>
        <text x="516" y="240" fontSize="5.6" className="fill-muted-foreground">Babies: ingested spores (honey) → floppy baby syndrome. Adults: preformed toxin (canned food).</text>
        <rect x="516" y="248" width="396" height="52" rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="714" y="266" textAnchor="middle" fontSize="7.2" fontWeight="800" className="fill-brand">No stimulation = FLACCID paralysis</text>
        <text x="714" y="278" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">the 5 D's: diplopia · dysarthria · dysphagia · dyspnea · descending flaccid paralysis — no sensory deficits</text>
        <text x="714" y="290" textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-muted-foreground">treat: human botulinum immunoglobulin · Botox: focal dystonia, hyperhidrosis, spasms, wrinkles</text>
        <defs>
          <marker id="m10arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-foreground" />
          </marker>
        </defs>
      </g>

      {/* ===== THE MECHANISM RAIL ===== */}
      <g>
        <rect x="36" y="342" width="908" height="180" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="364" fontSize="9" fontWeight="800" className="fill-foreground">THE MECHANISM RAIL — five ways the bacilli injure</text>
        {[
          { t: "SNARE @ RENSHAW", o: "C tetani", lines: ["Tetanospasmin blocks", "GABA + glycine release", "from Renshaw cells →", "unopposed stimulation", "= spastic paralysis"], tone: "emergency" },
          { t: "SNARE @ NMJ", o: "C botulinum", lines: ["Heat-labile toxin blocks", "ACh release at the NMJ", "→ no stimulation", "= flaccid paralysis", "(floppy baby; canned food)"], tone: "brand" },
          { t: "EF-2 BLOCK", o: "C diphtheriae", lines: ["β-prophage exotoxin", "ADP-ribosylates EF-2 →", "protein synthesis halts", "→ necrosis: pharynx,", "cardiac, CNS tissue"], tone: "brand" },
          { t: "LECITHINASE", o: "C perfringens", lines: ["α-toxin (a phospholipase)", "→ myonecrosis (gas", "gangrene; crepitus) +", "hemolysis; food left", "<60°C → 10-12 h enterotoxin"], tone: "brand" },
          { t: "ENTEROTOXINS", o: "C difficile · B cereus", lines: ["Toxins A/B → watery diarrhea", "→ pseudomembranous", "colitis (after antibiotics", "+ PPIs). Cereus: cereulide", "emetic 1-5 h vs diarrheal 8-18 h"], tone: "brand" },
        ].map((c, i) => (
          <g key={c.t}>
            <rect x={52 + i * 178} y="378" width="168" height="130" rx="10" className="fill-secondary/60 stroke-border" strokeWidth="1" />
            <text x={62 + i * 178} y="394" fontSize="6.6" fontWeight="800" className={c.tone === "emergency" ? "fill-emergency" : "fill-brand"}>{c.t}</text>
            <text x={62 + i * 178} y="404" fontSize="5.6" fontWeight="700" className="fill-foreground">{c.o}</text>
            {c.lines.map((ln, j) => (
              <text key={j} x={62 + i * 178} y={418 + j * 10} fontSize="5.4" className="fill-muted-foreground">{ln}</text>
            ))}
          </g>
        ))}
        <text x="52" y="517" fontSize="5.6" className="fill-muted-foreground">Spontaneous gas gangrene via hematogenous seeding (associated with colonic malignancy) is most commonly C septicum — the bacilli block's malignancy marker.</text>
      </g>

      {/* ===== THE SNAP AXIS (Nocardia vs Actinomyces) ===== */}
      <g>
        <rect x="36" y="538" width="908" height="162" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="560" fontSize="9" fontWeight="800" className="fill-foreground">THE SNAP AXIS — Nocardia vs Actinomyces (both: gram ⊕, long branching filaments resembling fungi)</text>
        <text x="250" y="578" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">NOCARDIA</text>
        <text x="600" y="578" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">ACTINOMYCES</text>
        {snapRows.map((r, i) => (
          <g key={r[0]}>
            <rect x="52" y={586 + i * 22} width="880" height="20" rx="4" className={i % 2 === 0 ? "fill-secondary" : "fill-secondary/60"} />
            <text x="62" y={599 + i * 22} fontSize="5.8" fontWeight="800" className="fill-foreground">{r[0]}</text>
            <text x="250" y={599 + i * 22} fontSize="5.4" className="fill-muted-foreground">{r[1]}</text>
            <text x="600" y={599 + i * 22} fontSize="5.4" className="fill-muted-foreground">{r[2]}</text>
          </g>
        ))}
        <text x="496" y="694" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-muted-foreground">SNAP: Sulfonamides — Nocardia; Actinomyces — Penicillin (the treatment is a SNAP)</text>
      </g>

      {/* ===== THE ROSTER ===== */}
      <g>
        <rect x="36" y="716" width="908" height="398" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="738" fontSize="9" fontWeight="800" className="fill-foreground">THE ORGANISM ROSTER — signature · diseases</text>
        {roster.map((r, i) => (
          <g key={r.n}>
            <rect x="52" y={748 + i * 40} width="876" height="34" rx="7" className={i % 2 === 0 ? "fill-secondary" : "fill-secondary/60"} />
            <text x="64" y={762 + i * 40} fontSize="6.4" fontWeight="800" className={r.c === "brand" ? "fill-brand" : r.c === "emergency" ? "fill-emergency" : "fill-foreground"}>{r.n}</text>
            <text x="200" y={762 + i * 40} fontSize="5.2" className="fill-muted-foreground">{r.t.match(/.{1,86}(\s|$)/g)!.slice(0, 1).map(x => x.trim()).join(" ")}</text>
            <text x="200" y={773 + i * 40} fontSize="5.2" className="fill-muted-foreground">{r.d.match(/.{1,86}(\s|$)/g)!.slice(0, 1).map(x => x.trim()).join(" ")}</text>
          </g>
        ))}
      </g>

      {/* anchors strip */}
      <g>
        <rect x="36" y="1128" width="908" height="44" rx="8" className="fill-secondary" />
        <text x="490" y="1142" textAnchor="middle" fontSize="6.2" fontWeight="700" className="fill-muted-foreground">SNARE axis: tetanus blocks the Renshaw cell (spastic; retrograde axonal transport) · botulism blocks the NMJ (flaccid) · no sensory deficits in botulism · babies = spores in honey, adults = preformed toxin in cans</text>
        <text x="490" y="1154" textAnchor="middle" fontSize="6.2" fontWeight="700" className="fill-muted-foreground">Reheated rice: emetic 1-5 h (preformed cereulide) vs diarrheal 8-18 h · C diff follows clindamycin-class antibiotics and PPIs → oral vancomycin or fidaxomicin (FMT if recurrent) · food left standing &lt;60°C → perfringens 10-12 h</text>
        <text x="490" y="1166" textAnchor="middle" fontSize="6.2" fontWeight="700" className="fill-muted-foreground">Diphtheria: β-prophage toxin, EF-2, bull's neck, Elek test, antitoxin ± erythromycin/penicillin, toxoid vaccine · Listeria: cold enrichment, rocket tails, tumbling motility, ampicillin · SNAP = Sulfonamides-Nocardia, Actinomyces-Penicillin</text>
      </g>

      {/* footer */}
      <text x="24" y="1190" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's tetanus-vs-botulism SNARE panels (pdf 158 / book 136 — pure vector) with the mechanism rail, the Nocardia-vs-Actinomyces SNAP axis, and the organism roster from books 136-137. The printed photographs (pseudomembranous colitis, gas gangrene, diphtheria pseudomembrane, Listeria rocket tails, Nocardia acid-fast, Actinomyces filaments) are raster, COPYRIGHTED, described-in-text only. FA's printed mnemonics (Difficile causes diarrhea; bad bottles; Perfringens perforates; Cory = club; ABCDEFG; SNAP) are NOT reproduced here — verification only.</text>
    </svg>
  );
}
