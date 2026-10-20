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
