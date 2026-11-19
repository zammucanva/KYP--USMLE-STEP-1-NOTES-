/* Pathology — Neoplasia (P-batch 13): Hallmarks of cancer (book 217).
 * Original KYP adaptation: the source page is a PURE-TEXT 9-row
 * HALLMARK / MECHANISM table (pdfimages + VLM census: ZERO raster
 * images, no figures, no margin notes or mnemonics). The nine
 * hallmark rows are re-laid-out here as a nine-station map in six
 * labeled bands (GROWTH AXIS / DEATH AXIS / IMMORTALITY / SUPPLY
 * LINES / IMMUNE ESCAPE / SPREAD), with each station carrying its
 * mechanism distilled plus its marker example. All glyphs (the
 * numbered station chips, the prong boxes, the band chevrons) are
 * original KYP vector drawing; nothing is reproduced from the book.
 * Purely presentational: no props, no hooks, no external images. */

export function HallmarksOfCancerMap() {
  const w = 1102;
  const h = 1250;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Hallmarks of cancer — the nine-station map in six bands (growth axis, death axis, immortality, supply lines, immune escape, spread), each station with its mechanism and marker — an original KYP adaptation of book 217." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Hallmarks of cancer — the nine-station map (original KYP adaptation)</text>
        <rect x="828" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="944" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">nine stations · six bands</text>
      </g>

      {/* ===== BAND 1 — GROWTH AXIS ===== */}
      <g>
        <rect x="36" y="72" width="1030" height="210" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="8" fontWeight="800" className="fill-foreground">BAND 1 · GROWTH AXIS — the stuck gas pedal and the cut brake line (rows 1–2)</text>
        <rect x="52" y="106" width="497" height="160" rx="10" className="fill-card stroke-brand" />
        <circle cx="70" cy="124" r="10" className="fill-brand-soft stroke-brand" />
        <text x="70" y="127.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">1</text>
        <text x="88" y="128" fontSize="7" fontWeight="800" className="fill-brand">GROWTH SIGNAL SELF-SUFFICIENCY — the gas pedal (gain of function)</text>
        <text x="68" y="150" fontSize="4.2" fontWeight="700" className="fill-foreground">Mutations in genes encoding — the cell commands its own growth:</text>
        <text x="68" y="164" fontSize="4.2" fontWeight="700" className="fill-foreground">• Proto-oncogenes → ↑ growth factors → autocrine loop (eg, ↑ PDGF in brain tumors)</text>
        <text x="68" y="178" fontSize="4.2" fontWeight="700" className="fill-foreground">• Growth factor receptors → constitutive signaling (eg, HER2 in breast cancer)</text>
        <text x="68" y="192" fontSize="4.2" fontWeight="700" className="fill-foreground">• Signaling molecules (eg, RAS)</text>
        <text x="68" y="206" fontSize="4.2" fontWeight="700" className="fill-foreground">• Transcription factors (eg, MYC)</text>
        <text x="68" y="220" fontSize="4.2" fontWeight="700" className="fill-foreground">• Cell cycle regulators (eg, cyclins, CDKs)</text>
        <text x="68" y="242" fontSize="4.2" className="fill-muted-foreground">MARKERS: PDGF (brain tumors) · HER2 (breast cancer) · RAS · MYC · cyclins/CDKs —</text>
        <text x="68" y="254" fontSize="4.2" className="fill-muted-foreground">the gain-of-function axis: signals without external input</text>
        <rect x="567" y="106" width="483" height="160" rx="10" className="fill-card stroke-border" />
        <circle cx="585" cy="124" r="10" className="fill-secondary stroke-border" />
        <text x="585" y="127.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">2</text>
        <text x="603" y="128" fontSize="7" fontWeight="800" className="fill-foreground">ANTI-GROWTH SIGNAL INSENSITIVITY — the brake line cut (loss of function)</text>
        <text x="583" y="150" fontSize="4.2" fontWeight="700" className="fill-foreground">Mutations in tumor suppressor genes (eg, Rb) — the cell-cycle brake is lost</text>
        <text x="583" y="164" fontSize="4.2" fontWeight="700" className="fill-foreground">Loss of E-cadherin function → loss of contact inhibition</text>
        <text x="583" y="178" fontSize="4.2" fontWeight="700" className="fill-foreground">(eg, NF2 mutations) — neighbors can no longer tell the cell to stop</text>
        <text x="583" y="200" fontSize="4.2" fontWeight="700" className="fill-foreground">The same lesion family as row 1, opposite direction: nothing is turned on —</text>
        <text x="583" y="214" fontSize="4.2" fontWeight="700" className="fill-foreground">the restraints are turned off.</text>
        <text x="583" y="242" fontSize="4.2" className="fill-muted-foreground">MARKERS: Rb · E-cadherin / NF2 — the loss-of-function axis:</text>
        <text x="583" y="254" fontSize="4.2" className="fill-muted-foreground">stops exist, but no one listens</text>
      </g>

      {/* ===== BAND 2 — DEATH AXIS ===== */}
      <g>
        <rect x="36" y="292" width="1030" height="130" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="314" fontSize="8" fontWeight="800" className="fill-foreground">BAND 2 · DEATH AXIS — refusing the deletion order (row 3)</text>
        <rect x="52" y="326" width="998" height="82" rx="10" className="fill-card stroke-emergency" />
        <circle cx="70" cy="346" r="10" className="fill-emergency-soft stroke-emergency" />
        <text x="70" y="349.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">3</text>
        <text x="88" y="350" fontSize="7" fontWeight="800" className="fill-emergency">EVASION OF APOPTOSIS</text>
        <text x="68" y="372" fontSize="4.2" fontWeight="700" className="fill-foreground">Mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma) — the tumor grows by refusing to die:</text>
        <text x="68" y="386" fontSize="4.2" fontWeight="700" className="fill-foreground">TP53 loss deletes the DNA-damage execution order; BCL2 overexpression (the follicular lymphoma signature) blocks the mitochondrial death program.</text>
        <text x="68" y="400" fontSize="4.2" className="fill-muted-foreground">MARKERS: TP53 · BCL2 (→ follicular B cell lymphoma) — the death program disarmed</text>
      </g>

      {/* ===== BAND 3 — IMMORTALITY ===== */}
      <g>
        <rect x="36" y="432" width="1030" height="130" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="454" fontSize="8" fontWeight="800" className="fill-foreground">BAND 3 · IMMORTALITY — canceling the replication clock (row 4)</text>
        <rect x="52" y="466" width="998" height="82" rx="10" className="fill-card stroke-warning" />
        <circle cx="70" cy="486" r="10" className="fill-warning-soft stroke-warning" />
        <text x="70" y="489.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">4</text>
        <text x="88" y="490" fontSize="7" fontWeight="800" className="fill-warning">LIMITLESS REPLICATIVE POTENTIAL</text>
        <text x="68" y="512" fontSize="4.2" fontWeight="700" className="fill-foreground">Reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging —</text>
        <text x="68" y="526" fontSize="4.2" fontWeight="700" className="fill-foreground">no senescence, no division limit.</text>
        <text x="68" y="540" fontSize="4.2" className="fill-muted-foreground">MARKER: TELOMERASE — the enzyme that rebuilds the telomere ends</text>
      </g>

      {/* ===== BAND 4 — SUPPLY LINES ===== */}
      <g>
        <rect x="36" y="572" width="1030" height="210" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="594" fontSize="8" fontWeight="800" className="fill-foreground">BAND 4 · SUPPLY LINES — feeders and fermentation (rows 5–6)</text>
        <rect x="52" y="606" width="497" height="160" rx="10" className="fill-card stroke-brand" />
        <circle cx="70" cy="624" r="10" className="fill-brand-soft stroke-brand" />
        <text x="70" y="627.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">5</text>
        <text x="88" y="628" fontSize="7" fontWeight="800" className="fill-brand">SUSTAINED ANGIOGENESIS</text>
        <text x="68" y="650" fontSize="4.2" fontWeight="700" className="fill-foreground">↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors — produced by</text>
        <text x="68" y="664" fontSize="4.2" fontWeight="700" className="fill-foreground">tumor or stromal cells. Two routes: vessels sprout from existing capillaries</text>
        <text x="68" y="678" fontSize="4.2" fontWeight="700" className="fill-foreground">(neoangiogenesis) or endothelial cells are recruited from bone marrow</text>
        <text x="68" y="692" fontSize="4.2" fontWeight="700" className="fill-foreground">(vasculogenesis). Vessels may be leaky and/or dilated.</text>
        <text x="68" y="714" fontSize="4.2" className="fill-muted-foreground">MARKER: VEGF — the feeder-line switch (sprout vs recruit; leaky, dilated)</text>
        <text x="68" y="726" fontSize="4.2" className="fill-muted-foreground">— the supply line the anti-angiogenic drugs target</text>
        <rect x="567" y="606" width="483" height="160" rx="10" className="fill-card stroke-warning" />
        <circle cx="585" cy="624" r="10" className="fill-warning-soft stroke-warning" />
        <text x="585" y="627.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">6</text>
        <text x="603" y="628" fontSize="7" fontWeight="800" className="fill-warning">THE WARBURG EFFECT</text>
        <text x="583" y="650" fontSize="4.2" fontWeight="700" className="fill-foreground">Shift of glucose metabolism from mitochondrial oxidative phosphorylation</text>
        <text x="583" y="664" fontSize="4.2" fontWeight="700" className="fill-foreground">to glycolysis, even under aerobic conditions — driven by altered metabolic</text>
        <text x="583" y="678" fontSize="4.2" fontWeight="700" className="fill-foreground">enzymes (eg, pyruvate kinase M2, LDH-A). Aerobic glycolysis supplies</text>
        <text x="583" y="692" fontSize="4.2" fontWeight="700" className="fill-foreground">biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis,</text>
        <text x="583" y="706" fontSize="4.2" fontWeight="700" className="fill-foreground">resulting in ↑ lactate production.</text>
        <text x="583" y="726" fontSize="4.2" className="fill-muted-foreground">MARKERS: PKM2 · LDH-A — glucose in, lactate out, oxygen ignored</text>
      </g>

      {/* ===== BAND 5 — IMMUNE ESCAPE ===== */}
      <g>
        <rect x="36" y="792" width="1030" height="158" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="814" fontSize="8" fontWeight="800" className="fill-foreground">BAND 5 · IMMUNE ESCAPE — the three-pronged invisibility (row 7)</text>
        <rect x="52" y="826" width="998" height="108" rx="10" className="fill-card stroke-emergency" />
        <circle cx="70" cy="846" r="10" className="fill-emergency-soft stroke-emergency" />
        <text x="70" y="849.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">7</text>
        <text x="88" y="850" fontSize="7" fontWeight="800" className="fill-emergency">IMMUNE EVASION IN CANCER</text>
        <text x="68" y="868" fontSize="4.2" fontWeight="700" className="fill-foreground">Normally, immune cells can recognize and attack tumor cells — for successful tumorigenesis, tumor cells must evade the immune system:</text>
        <rect x="68" y="876" width="308" height="48" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="80" y="892" fontSize="4.2" fontWeight="700" className="fill-foreground">PRONG 1 · ↓ MHC class I expression →</text>
        <text x="80" y="904" fontSize="4.2" fontWeight="700" className="fill-foreground">cytotoxic T cells are unable to recognize</text>
        <text x="80" y="916" fontSize="4.2" fontWeight="700" className="fill-foreground">tumor cells (the CD8+ blindfold)</text>
        <rect x="388" y="876" width="308" height="48" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="400" y="892" fontSize="4.2" fontWeight="700" className="fill-foreground">PRONG 2 · secrete immunosuppressive</text>
        <text x="400" y="904" fontSize="4.2" fontWeight="700" className="fill-foreground">factors (eg, TGF-β) + recruit regulatory T</text>
        <text x="400" y="916" fontSize="4.2" fontWeight="700" className="fill-foreground">cells → downregulate immune response</text>
        <rect x="708" y="876" width="326" height="48" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="720" y="892" fontSize="4.2" fontWeight="700" className="fill-foreground">PRONG 3 · ↑ immune checkpoint molecules,</text>
        <text x="720" y="904" fontSize="4.2" fontWeight="700" className="fill-foreground">which inhibit immune response (the checkpoint-</text>
        <text x="720" y="916" fontSize="4.2" fontWeight="700" className="fill-foreground">inhibitor target of book 218)</text>
      </g>

      {/* ===== BAND 6 — SPREAD ===== */}
      <g>
        <rect x="36" y="960" width="1030" height="220" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="982" fontSize="8" fontWeight="800" className="fill-foreground">BAND 6 · SPREAD — from the basement membrane to the distant organ (rows 8–9)</text>
        <rect x="52" y="994" width="497" height="170" rx="10" className="fill-card stroke-emergency" />
        <circle cx="70" cy="1014" r="10" className="fill-emergency-soft stroke-emergency" />
        <text x="70" y="1017.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">8</text>
        <text x="88" y="1018" fontSize="7" fontWeight="800" className="fill-emergency">TISSUE INVASION — the local cascade</text>
        <text x="68" y="1040" fontSize="4.2" fontWeight="700" className="fill-foreground">Loss of E-cadherin function → loosening of intercellular junctions →</text>
        <text x="68" y="1054" fontSize="4.2" fontWeight="700" className="fill-foreground">metalloproteinases degrade basement membrane and ECM →</text>
        <text x="68" y="1068" fontSize="4.2" fontWeight="700" className="fill-foreground">cells attach to ECM proteins (eg, laminin, fibronectin) →</text>
        <text x="68" y="1082" fontSize="4.2" fontWeight="700" className="fill-foreground">cells migrate through degraded ECM (“locomotion”) → vascular dissemination</text>
        <text x="68" y="1104" fontSize="4.2" className="fill-muted-foreground">MARKERS: E-cadherin · metalloproteinases · laminin/fibronectin —</text>
        <text x="68" y="1116" fontSize="4.2" className="fill-muted-foreground">UNGLUE → CHEW → GRAB → CRAWL → EMBARK</text>
        <text x="68" y="1130" fontSize="4.2" className="fill-muted-foreground">(the same E-cadherin loss as row 2 — one molecule, two hallmarks)</text>
        <rect x="567" y="994" width="483" height="170" rx="10" className="fill-card stroke-brand" />
        <circle cx="585" cy="1014" r="10" className="fill-brand-soft stroke-brand" />
        <text x="585" y="1017.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">9</text>
        <text x="603" y="1018" fontSize="7" fontWeight="800" className="fill-brand">METASTASIS — the distant landing</text>
        <text x="583" y="1040" fontSize="4.2" fontWeight="700" className="fill-foreground">Tumor cells or emboli spread via lymphatics or blood → adhesion to</text>
        <text x="583" y="1054" fontSize="4.2" fontWeight="700" className="fill-foreground">endothelium → extravasation and homing.</text>
        <text x="583" y="1076" fontSize="4.2" fontWeight="700" className="fill-foreground">Site of metastasis is predicted by the site of the 1° tumor — the target</text>
        <text x="583" y="1090" fontSize="4.2" fontWeight="700" className="fill-foreground">organ is often the FIRST-encountered capillary bed.</text>
        <text x="583" y="1112" fontSize="4.2" fontWeight="700" className="fill-foreground">Organ tropism: lung cancers commonly metastasize to adrenals.</text>
        <text x="583" y="1134" fontSize="4.2" className="fill-muted-foreground">MARKER: the first-encountered capillary bed — the routing rule</text>
        <text x="583" y="1146" fontSize="4.2" className="fill-muted-foreground">(with the lung → adrenal tropism as the named exception)</text>
      </g>

      {/* band-to-band chevrons (the map's spine) */}
      <g className="stroke-border" fill="none">
        <path d="M 545 284 L 551 289 L 557 284" strokeWidth="1.4" />
        <path d="M 545 424 L 551 429 L 557 424" strokeWidth="1.4" />
        <path d="M 545 564 L 551 569 L 557 564" strokeWidth="1.4" />
        <path d="M 545 784 L 551 789 L 557 784" strokeWidth="1.4" />
        <path d="M 545 952 L 551 957 L 557 952" strokeWidth="1.4" />
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1190" width="1054" height="48" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1206" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 239 / book 217 (Pathology — Neoplasia: Hallmarks of cancer)</text>
        <text x="42" y="1218" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images — the page is a pure-text 9-row HALLMARK / MECHANISM table; no photographs, figures, margin notes, or mnemonics (VLM confirmed).</text>
        <text x="42" y="1230" fontSize="5" className="fill-muted-foreground">The station map, its glyphs, and its six-band structure are an ORIGINAL KYP adaptation; the table is carried verbatim in the note; the KYP memory layer is original.</text>
      </g>
    </svg>
  );
}
