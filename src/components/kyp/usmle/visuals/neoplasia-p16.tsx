"use client";

// Original KYP visuals — Neoplasia block, P16 (First Aid 2026, Part 1
// pdf 242 / book 220, PATHOLOGY—NEOPLASIA: Oncogenes; Tumor suppressor
// genes). All SVG uses theme tokens (currentColor + Tailwind classes),
// so it stays readable in light AND dark mode. Census (pdfimages + VLM):
// ZERO raster images on the page — pure text (two tables + two rule
// paragraphs), so this visual is a pure ORIGINAL KYP ADAPTATION.

// ---------------------------------------------------------------------------
// Pathology P16 — Oncogenes & tumor suppressor genes map
// ---------------------------------------------------------------------------

export function OncogeneTumorSuppressorMap() {
  const w = 1102;
  const h = 1258;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Oncogenes and tumor suppressor genes — the map: the one-allele gain-of-function rule against the two-allele Knudson 2-hit loss-of-function rule, the 12 oncogenes classified by kinase class and signaling role, and the 15 tumor suppressors classified by function — G1-to-S gatekeepers, pathway negative regulators, DNA repair proteins, and the syndrome genes — every row verbatim." className="min-w-[1040px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Oncogenes &amp; tumor suppressor genes — the map (original KYP adaptation)</text>
        <rect x="880" y="24" width="182" height="18" className="fill-brand-soft" />
        <text x="971" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">gain one · lose two</text>
      </g>

      {/* ===== RULE PANEL — the allele arithmetic ===== */}
      <g>
        {/* LEFT — oncogenes, the ONE-hit rule */}
        <rect x="36" y="76" width="512" height="170" rx="14" className="fill-brand-soft/40 stroke-brand" />
        <text x="52" y="98" fontSize="8" fontWeight="800" className="fill-brand">ONCOGENES — gain of function (the ONE-hit rule)</text>
        <text x="52" y="118" fontSize="4.2" fontWeight="700" className="fill-foreground">“Gain of function mutation converts proto-oncogene (normal gene)</text>
        <text x="52" y="129" fontSize="4.2" fontWeight="700" className="fill-foreground">to oncogene → ↑ cancer risk.”</text>
        {/* one allele hit, one normal */}
        <rect x="60" y="140" width="88" height="44" rx="8" className="fill-card stroke-brand" strokeWidth="2" />
        <text x="104" y="158" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">allele 1 — HIT ↑</text>
        <text x="104" y="170" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">gain of function</text>
        <text x="104" y="179" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">proto-oncogene → oncogene</text>
        <rect x="156" y="140" width="88" height="44" rx="8" className="fill-card stroke-border" />
        <text x="200" y="158" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">allele 2 — normal</text>
        <text x="200" y="170" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">stays undamaged —</text>
        <text x="200" y="179" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">and it does not matter</text>
        <path d="M 74 140 L 74 128" className="stroke-brand" strokeWidth="2" />
        <path d="M 74 128 L 71 134 M 74 128 L 77 134" className="stroke-brand" strokeWidth="2" />
        <text x="260" y="156" fontSize="4.2" fontWeight="700" className="fill-foreground">ONE activated copy dominates its</text>
        <text x="260" y="166" fontSize="4.2" fontWeight="700" className="fill-foreground">normal partner — a single allele is</text>
        <text x="260" y="176" fontSize="4.2" fontWeight="700" className="fill-foreground">enough to raise cancer risk</text>
        <text x="52" y="208" fontSize="4.8" fontWeight="800" className="fill-brand">“Requires damage to only one allele of a proto-oncogene.”</text>
        <text x="52" y="224" fontSize="3.8" className="fill-muted-foreground">the inherited example: germline RET — MEN2A/2B express once the single</text>
        <text x="52" y="233" fontSize="3.8" className="fill-muted-foreground">activated allele is present (eg, medullary thyroid carcinoma)</text>
        {/* RIGHT — tumor suppressors, the TWO-hit rule */}
        <rect x="556" y="76" width="510" height="170" rx="14" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="572" y="98" fontSize="8" fontWeight="800" className="fill-emergency">TUMOR SUPPRESSOR GENES — loss of function (the TWO-hit rule)</text>
        <text x="572" y="118" fontSize="4.2" fontWeight="700" className="fill-foreground">“Loss of function → ↑ cancer risk; both (two) alleles of a tumor</text>
        <text x="572" y="129" fontSize="4.2" fontWeight="700" className="fill-foreground">suppressor gene must be lost for expression of disease.”</text>
        {/* both alleles knocked out — the Knudson fork */}
        <rect x="580" y="140" width="88" height="44" rx="8" className="fill-card stroke-emergency" strokeWidth="2" />
        <text x="624" y="158" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">hit 1 — LOST</text>
        <text x="624" y="170" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">often the inherited allele</text>
        <text x="624" y="179" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">(eg, RB1, TP53, APC in the germline)</text>
        <rect x="676" y="140" width="88" height="44" rx="8" className="fill-card stroke-emergency" strokeWidth="2" />
        <text x="720" y="158" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">hit 2 — LOST</text>
        <text x="720" y="170" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the somatic second hit</text>
        <text x="720" y="179" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">in a single tissue</text>
        <path d="M 590 146 L 658 178 M 658 146 L 590 178" className="stroke-emergency" strokeWidth="1.6" />
        <path d="M 686 146 L 754 178 M 754 146 L 686 178" className="stroke-emergency" strokeWidth="1.6" />
        <text x="780" y="156" fontSize="4.2" fontWeight="700" className="fill-foreground">Both brakes must fail before the</text>
        <text x="780" y="166" fontSize="4.2" fontWeight="700" className="fill-foreground">disease expresses — one working</text>
        <text x="780" y="176" fontSize="4.2" fontWeight="700" className="fill-foreground">allele still holds the gate shut</text>
        <text x="572" y="208" fontSize="4.8" fontWeight="800" className="fill-emergency">“(the Knudson 2-hit hypothesis)”</text>
        <text x="572" y="224" fontSize="3.8" className="fill-muted-foreground">the inherited example: RB1 — germline hit 1 + somatic hit 2 in a</text>
        <text x="572" y="233" fontSize="3.8" className="fill-muted-foreground">retina → bilateral, early retinoblastoma; osteosarcoma later</text>
      </g>

      {/* ===== ONCOGENE ROSTER — classified by kinase class and signaling role ===== */}
      <g>
        <rect x="36" y="258" width="1030" height="414" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="280" fontSize="8" fontWeight="800" className="fill-foreground">The oncogene roster — all 12 genes, classified by where they signal (book 220)</text>
        <text x="52" y="292" fontSize="4.4" fontWeight="700" className="fill-muted-foreground">Every row verbatim: GENE · GENE PRODUCT · ASSOCIATED NEOPLASM — all 12 obey the ONE-hit rule above.</text>
        {/* row 1 */}
        <g>
          {/* receptor tyrosine kinases */}
          <rect x="52" y="300" width="310" height="166" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="300" width="310" height="18" rx="10" className="fill-brand-soft" />
          <text x="207" y="313" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">RECEPTOR TYROSINE KINASES</text>
          <text x="64" y="332" fontSize="4.4" fontWeight="800" className="fill-foreground">ALK</text>
          <text x="64" y="342" fontSize="3.8" fontWeight="700" className="fill-foreground">Lung adenocarcinoma</text>
          <text x="64" y="358" fontSize="4.4" fontWeight="800" className="fill-foreground">EGFR (ERBB1)</text>
          <text x="64" y="368" fontSize="3.8" fontWeight="700" className="fill-foreground">Lung adenocarcinoma</text>
          <text x="64" y="384" fontSize="4.4" fontWeight="800" className="fill-foreground">HER2 (ERBB2)</text>
          <text x="64" y="394" fontSize="3.8" fontWeight="700" className="fill-foreground">Breast and gastric carcinomas</text>
          <text x="64" y="410" fontSize="4.4" fontWeight="800" className="fill-foreground">RET</text>
          <text x="64" y="420" fontSize="3.8" fontWeight="700" className="fill-foreground">MEN2A and 2B, medullary and papillary</text>
          <text x="64" y="430" fontSize="3.8" fontWeight="700" className="fill-foreground">thyroid carcinoma, pheochromocytoma</text>
          <text x="64" y="448" fontSize="3.6" className="fill-muted-foreground">quirk: RET&apos;s product prints as “REceptor Tyrosine</text>
          <text x="64" y="457" fontSize="3.6" className="fill-muted-foreground">kinase” — the source embeds the gene in the product</text>
          {/* non-receptor tyrosine kinases */}
          <rect x="374" y="300" width="226" height="166" rx="10" className="fill-card stroke-border" />
          <rect x="374" y="300" width="226" height="18" rx="10" className="fill-warning-soft" />
          <text x="487" y="313" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">NON-RECEPTOR TYROSINE KINASES</text>
          <text x="386" y="332" fontSize="4.4" fontWeight="800" className="fill-foreground">BCR-ABL</text>
          <text x="386" y="342" fontSize="3.8" fontWeight="700" className="fill-foreground">CML, ALL</text>
          <text x="386" y="358" fontSize="4.4" fontWeight="800" className="fill-foreground">JAK2</text>
          <text x="386" y="368" fontSize="3.8" fontWeight="700" className="fill-foreground">Myeloproliferative neoplasms</text>
          <text x="386" y="388" fontSize="3.6" className="fill-muted-foreground">cytoplasmic — signaling without a</text>
          <text x="386" y="397" fontSize="3.6" className="fill-muted-foreground">receptor: BCR-ABL is the fusion</text>
          <text x="386" y="406" fontSize="3.6" className="fill-muted-foreground">tyrosine kinase of the Philadelphia</text>
          <text x="386" y="415" fontSize="3.6" className="fill-muted-foreground">chromosome; JAK2 signals downstream</text>
          <text x="386" y="424" fontSize="3.6" className="fill-muted-foreground">of cytokine receptors</text>
          {/* serine/threonine kinase */}
          <rect x="612" y="300" width="236" height="166" rx="10" className="fill-card stroke-border" />
          <rect x="612" y="300" width="236" height="18" rx="10" className="fill-brand-soft" />
          <text x="730" y="313" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">SERINE/THREONINE KINASE</text>
          <text x="624" y="332" fontSize="4.4" fontWeight="800" className="fill-foreground">BRAF</text>
          <text x="624" y="342" fontSize="3.8" fontWeight="700" className="fill-foreground">Melanoma, non-Hodgkin lymphoma,</text>
          <text x="624" y="352" fontSize="3.8" fontWeight="700" className="fill-foreground">colorectal carcinoma, papillary thyroid</text>
          <text x="624" y="362" fontSize="3.8" fontWeight="700" className="fill-foreground">carcinoma, hairy cell leukemia</text>
          <text x="624" y="382" fontSize="3.6" className="fill-muted-foreground">the table&apos;s longest list — five</text>
          <text x="624" y="391" fontSize="3.6" className="fill-muted-foreground">neoplasms ride one kinase: the</text>
          <text x="624" y="400" fontSize="3.6" className="fill-muted-foreground">MAP-kinase pathway&apos;s serine/</text>
          <text x="624" y="409" fontSize="3.6" className="fill-muted-foreground">threonine step, downstream of RAS</text>
          {/* cytokine receptor */}
          <rect x="860" y="300" width="190" height="166" rx="10" className="fill-card stroke-border" />
          <rect x="860" y="300" width="190" height="18" rx="10" className="fill-warning-soft" />
          <text x="955" y="313" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">CYTOKINE RECEPTOR</text>
          <text x="872" y="332" fontSize="4.4" fontWeight="800" className="fill-foreground">c-KIT</text>
          <text x="872" y="342" fontSize="3.8" fontWeight="700" className="fill-foreground">CytoKIne receptor (CD117)</text>
          <text x="872" y="352" fontSize="3.8" fontWeight="700" className="fill-foreground">Gastrointestinal stromal tumor</text>
          <text x="872" y="362" fontSize="3.8" fontWeight="700" className="fill-foreground">(GIST), mastocytosis</text>
          <text x="872" y="382" fontSize="3.6" className="fill-muted-foreground">the receptor class — not a</text>
          <text x="872" y="391" fontSize="3.6" className="fill-muted-foreground">kinase itself; CD117 is the</text>
          <text x="872" y="400" fontSize="3.6" className="fill-muted-foreground">c-KIT stain that names GIST</text>
          <text x="872" y="409" fontSize="3.6" className="fill-muted-foreground">on immunohistochemistry</text>
        </g>
        {/* row 2 */}
        <g>
          {/* signaling */}
          <rect x="52" y="478" width="308" height="180" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="478" width="308" height="18" rx="10" className="fill-brand-soft" />
          <text x="206" y="491" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">SIGNALING — RAS GTPASE</text>
          <text x="64" y="510" fontSize="4.4" fontWeight="800" className="fill-foreground">KRAS</text>
          <text x="64" y="520" fontSize="3.8" fontWeight="700" className="fill-foreground">RAS GTPase</text>
          <text x="64" y="530" fontSize="3.8" fontWeight="700" className="fill-foreground">Pancreatic, colorectal, lung,</text>
          <text x="64" y="540" fontSize="3.8" fontWeight="700" className="fill-foreground">endometrial cancers</text>
          <text x="64" y="560" fontSize="3.6" className="fill-muted-foreground">the GTPase switch that stays on — the four</text>
          <text x="64" y="569" fontSize="3.6" className="fill-muted-foreground">solid-tumor list (pancreas first: KRAS is the</text>
          <text x="64" y="578" fontSize="3.6" className="fill-muted-foreground">most common oncogene mutation in it)</text>
          <text x="64" y="596" fontSize="3.6" className="fill-muted-foreground">contrast the table&apos;s other Ras link: NF1&apos;s</text>
          <text x="64" y="605" fontSize="3.6" className="fill-muted-foreground">neurofibromin is the Ras GTPase activating</text>
          <text x="64" y="614" fontSize="3.6" className="fill-muted-foreground">protein — the suppressor side of the switch</text>
          <text x="64" y="632" fontSize="3.6" className="fill-muted-foreground">two alleles, two tables: KRAS (oncogene) vs NF1 (suppressor)</text>
          {/* transcription factors */}
          <rect x="372" y="478" width="330" height="180" rx="10" className="fill-card stroke-border" />
          <rect x="372" y="478" width="330" height="18" rx="10" className="fill-warning-soft" />
          <text x="537" y="491" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">TRANSCRIPTION FACTORS</text>
          <text x="384" y="510" fontSize="4.4" fontWeight="800" className="fill-foreground">MYCC (c-myc)</text>
          <text x="384" y="520" fontSize="3.8" fontWeight="700" className="fill-foreground">Transcription factor</text>
          <text x="384" y="530" fontSize="3.8" fontWeight="700" className="fill-foreground">Burkitt lymphoma</text>
          <text x="384" y="550" fontSize="4.4" fontWeight="800" className="fill-foreground">MYCN (N-myc)</text>
          <text x="384" y="560" fontSize="3.8" fontWeight="700" className="fill-foreground">Transcription factor</text>
          <text x="384" y="570" fontSize="3.8" fontWeight="700" className="fill-foreground">Neuroblastoma</text>
          <text x="384" y="590" fontSize="3.6" className="fill-muted-foreground">the nuclear tier — myc genes turn on the</text>
          <text x="384" y="599" fontSize="3.6" className="fill-muted-foreground">growth program: C for Burkitt lymphoma,</text>
          <text x="384" y="608" fontSize="3.6" className="fill-muted-foreground">N for Neuroblastoma (N = Neuroblastoma)</text>
          <text x="384" y="626" fontSize="3.6" className="fill-muted-foreground">the MYC pair is the table&apos;s twin-row trap — match the letter to the tumor</text>
          {/* antiapoptotic */}
          <rect x="714" y="478" width="336" height="180" rx="10" className="fill-card stroke-border" />
          <rect x="714" y="478" width="336" height="18" rx="10" className="fill-brand-soft" />
          <text x="882" y="491" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">ANTIAPOPTOTIC MOLECULE</text>
          <text x="726" y="510" fontSize="4.4" fontWeight="800" className="fill-foreground">BCL-2</text>
          <text x="726" y="520" fontSize="3.8" fontWeight="700" className="fill-foreground">Antiapoptotic molecule (inhibits apoptosis)</text>
          <text x="726" y="530" fontSize="3.8" fontWeight="700" className="fill-foreground">Follicular and diffuse large B-Cell Lymphomas</text>
          <text x="726" y="550" fontSize="3.6" className="fill-muted-foreground">not a kinase and not a transcription factor — the</text>
          <text x="726" y="559" fontSize="3.6" className="fill-muted-foreground">cell&apos;s brake on programmed cell death, locked on:</text>
          <text x="726" y="568" fontSize="3.6" className="fill-muted-foreground">the lymphoma survives when it should die</text>
          <text x="726" y="588" fontSize="3.6" className="fill-muted-foreground">quirk: the source prints “B-Cell Lymphomas” with a</text>
          <text x="726" y="597" fontSize="3.6" className="fill-muted-foreground">capital B — the embedded-letter convention again</text>
        </g>
      </g>

      {/* ===== TUMOR SUPPRESSOR ROSTER — classified by function ===== */}
      <g>
        <rect x="36" y="686" width="1030" height="494" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="708" fontSize="8" fontWeight="800" className="fill-foreground">The tumor suppressor roster — all 15 genes, classified by what they brake (book 220)</text>
        <text x="52" y="720" fontSize="4.4" fontWeight="700" className="fill-muted-foreground">Every row verbatim: GENE · GENE PRODUCT · ASSOCIATED CONDITION — all 15 obey the TWO-hit rule above.</text>
        {/* row 1 */}
        <g>
          {/* G1->S gatekeepers */}
          <rect x="52" y="728" width="640" height="196" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="728" width="640" height="18" rx="10" className="fill-emergency-soft" />
          <text x="372" y="741" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-emergency">THE G1→S GATEKEEPERS — all three block the G1→S transition</text>
          <text x="64" y="762" fontSize="4.4" fontWeight="800" className="fill-foreground">RB1</text>
          <text x="64" y="772" fontSize="3.7" fontWeight="700" className="fill-foreground">Inhibits E2F; blocks G1→S phase</text>
          <text x="64" y="784" fontSize="3.7" fontWeight="700" className="fill-foreground">Retinoblastoma, osteosarcoma</text>
          <text x="64" y="794" fontSize="3.7" fontWeight="700" className="fill-foreground">(Bone cancer)</text>
          <text x="64" y="812" fontSize="3.6" className="fill-muted-foreground">the pocket protein — it holds E2F</text>
          <text x="64" y="821" fontSize="3.6" className="fill-muted-foreground">until the cell is licensed to divide</text>
          <text x="64" y="838" fontSize="3.6" className="fill-muted-foreground">quirk: the source embeds RB1 in</text>
          <text x="64" y="847" fontSize="3.6" className="fill-muted-foreground">“(Bone cancer)” — the B of RB1</text>
          <text x="272" y="762" fontSize="4.4" fontWeight="800" className="fill-foreground">CDKN2A</text>
          <text x="272" y="772" fontSize="3.7" fontWeight="700" className="fill-foreground">p16, blocks G1→S phase</text>
          <text x="272" y="784" fontSize="3.7" fontWeight="700" className="fill-foreground">Many cancers (eg, melanoma,</text>
          <text x="272" y="794" fontSize="3.7" fontWeight="700" className="fill-foreground">lung, pancreatic)</text>
          <text x="272" y="812" fontSize="3.6" className="fill-muted-foreground">the CDK inhibitor — p16 is the</text>
          <text x="272" y="821" fontSize="3.6" className="fill-muted-foreground">product, not the gene name</text>
          <text x="272" y="838" fontSize="3.6" className="fill-muted-foreground">the broadest condition in the</text>
          <text x="272" y="847" fontSize="3.6" className="fill-muted-foreground">column: “many cancers”</text>
          <text x="480" y="762" fontSize="4.4" fontWeight="800" className="fill-foreground">TP53</text>
          <text x="480" y="772" fontSize="3.7" fontWeight="700" className="fill-foreground">p53, activates p21, blocks G1→S phase</text>
          <text x="480" y="784" fontSize="3.7" fontWeight="700" className="fill-foreground">Most cancers, Li-Fraumeni (SBLA)</text>
          <text x="480" y="794" fontSize="3.7" fontWeight="700" className="fill-foreground">syndrome (multiple malignancies at</text>
          <text x="480" y="804" fontSize="3.7" fontWeight="700" className="fill-foreground">early age; Sarcoma, Breast/Brain,</text>
          <text x="480" y="814" fontSize="3.7" fontWeight="700" className="fill-foreground">Lung/Leukemia, Adrenal gland)</text>
          <text x="480" y="832" fontSize="3.6" className="fill-muted-foreground">the guardian of the genome — p53 → p21</text>
          <text x="480" y="841" fontSize="3.6" className="fill-muted-foreground">is the damage-response arm of the gate;</text>
          <text x="480" y="850" fontSize="3.6" className="fill-muted-foreground">“most cancers” is the whole table&apos;s</text>
          <text x="480" y="859" fontSize="3.6" className="fill-muted-foreground">widest reach, and SBLA its germline face</text>
          {/* pathway negative regulators */}
          <rect x="704" y="728" width="346" height="196" rx="10" className="fill-card stroke-border" />
          <rect x="704" y="728" width="346" height="18" rx="10" className="fill-warning-soft" />
          <text x="877" y="741" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">PATHWAY NEGATIVE REGULATORS</text>
          <text x="716" y="762" fontSize="4.4" fontWeight="800" className="fill-foreground">APC</text>
          <text x="716" y="772" fontSize="3.7" fontWeight="700" className="fill-foreground">Negative regulator of β-catenin/WNT pathway</text>
          <text x="716" y="784" fontSize="3.7" fontWeight="700" className="fill-foreground">Colorectal cancer (associated with FAP)</text>
          <text x="716" y="802" fontSize="4.4" fontWeight="800" className="fill-foreground">PTEN</text>
          <text x="716" y="812" fontSize="3.7" fontWeight="700" className="fill-foreground">Negative regulator of PI3k/AKT pathway</text>
          <text x="716" y="824" fontSize="3.7" fontWeight="700" className="fill-foreground">Prostate, breasT, and ENdometrial cancers</text>
          <text x="716" y="842" fontSize="4.4" fontWeight="800" className="fill-foreground">VHL</text>
          <text x="716" y="852" fontSize="3.7" fontWeight="700" className="fill-foreground">Inhibits hypoxia-inducible factor 1α</text>
          <text x="716" y="864" fontSize="3.7" fontWeight="700" className="fill-foreground">von Hippel-Lindau disease</text>
          <text x="716" y="884" fontSize="3.6" className="fill-muted-foreground">three pathways, three negative regulators — lose both alleles</text>
          <text x="716" y="893" fontSize="3.6" className="fill-muted-foreground">and the pathway runs without its brake (quirk: PTEN embeds</text>
          <text x="716" y="902" fontSize="3.6" className="fill-muted-foreground">its own letters in “breasT … ENdometrial”)</text>
        </g>
        {/* row 2 */}
        <g>
          {/* DNA repair proteins */}
          <rect x="52" y="936" width="330" height="236" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="936" width="330" height="18" rx="10" className="fill-brand-soft" />
          <text x="217" y="949" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">DNA REPAIR PROTEINS</text>
          <text x="64" y="970" fontSize="4.4" fontWeight="800" className="fill-foreground">BRCA1/BRCA2</text>
          <text x="64" y="980" fontSize="3.7" fontWeight="700" className="fill-foreground">BRCA1/BRCA2 proteins</text>
          <text x="64" y="992" fontSize="3.7" fontWeight="700" className="fill-foreground">BReast, ovarian, prostate,</text>
          <text x="64" y="1002" fontSize="3.7" fontWeight="700" className="fill-foreground">pancreatic CAncers</text>
          <text x="64" y="1022" fontSize="3.6" className="fill-muted-foreground">the source lists only “BRCA1/BRCA2 proteins”</text>
          <text x="64" y="1031" fontSize="3.6" className="fill-muted-foreground">as the product — the repair function is the</text>
          <text x="64" y="1040" fontSize="3.6" className="fill-muted-foreground">KYP classification (double-strand-break repair)</text>
          <text x="64" y="1058" fontSize="3.6" className="fill-muted-foreground">quirk: the cancer list embeds the gene —</text>
          <text x="64" y="1067" fontSize="3.6" className="fill-muted-foreground">“BReast … CAncers” spells BRCA</text>
          <text x="64" y="1085" fontSize="3.6" className="fill-muted-foreground">a two-hit suppressor in the breast-ovarian</text>
          <text x="64" y="1094" fontSize="3.6" className="fill-muted-foreground">family: distinguish from TP53&apos;s Li-Fraumeni</text>
          <text x="64" y="1103" fontSize="3.6" className="fill-muted-foreground">by the catalog (no sarcoma, leukemia, or</text>
          <text x="64" y="1112" fontSize="3.6" className="fill-muted-foreground">adrenal gland carcinoma in BRCA&apos;s four)</text>
          <text x="64" y="1136" fontSize="3.6" className="fill-muted-foreground">both alleles lost = the 2-hit rule again</text>
          <text x="64" y="1145" fontSize="3.6" className="fill-muted-foreground">(the classification of the card is KYP&apos;s;</text>
          <text x="64" y="1154" fontSize="3.6" className="fill-muted-foreground">the row itself is verbatim)</text>
          {/* the syndrome genes */}
          <rect x="394" y="936" width="656" height="236" rx="10" className="fill-card stroke-border" />
          <rect x="394" y="936" width="656" height="18" rx="10" className="fill-emergency-soft" />
          <text x="722" y="949" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-emergency">THE SYNDROME GENES — the eponym set, two alleles each</text>
          <text x="406" y="970" fontSize="4.2" fontWeight="800" className="fill-foreground">DCC</text>
          <text x="406" y="980" fontSize="3.7" fontWeight="700" className="fill-foreground">DCC—Deleted in Colorectal Cancer</text>
          <text x="406" y="992" fontSize="3.7" fontWeight="700" className="fill-foreground">Colorectal cancer</text>
          <text x="406" y="1012" fontSize="4.2" fontWeight="800" className="fill-foreground">SMAD4 (DPC4)</text>
          <text x="406" y="1022" fontSize="3.7" fontWeight="700" className="fill-foreground">DPC—Deleted in Pancreatic Cancer</text>
          <text x="406" y="1034" fontSize="3.7" fontWeight="700" className="fill-foreground">Pancreatic cancer, colorectal cancer</text>
          <text x="406" y="1054" fontSize="4.2" fontWeight="800" className="fill-foreground">MEN1</text>
          <text x="406" y="1064" fontSize="3.7" fontWeight="700" className="fill-foreground">MENin</text>
          <text x="406" y="1076" fontSize="3.7" fontWeight="700" className="fill-foreground">Multiple Endocrine Neoplasia type 1</text>
          <text x="406" y="1096" fontSize="4.2" fontWeight="800" className="fill-foreground">NF1</text>
          <text x="406" y="1106" fontSize="3.7" fontWeight="700" className="fill-foreground">Neurofibromin (Ras GTPase activating protein)</text>
          <text x="406" y="1118" fontSize="3.7" fontWeight="700" className="fill-foreground">NeuroFibromatosis type 1</text>
          <text x="406" y="1138" fontSize="3.6" className="fill-muted-foreground">the acronym rows: DCC and DPC4 spell their tumors out;</text>
          <text x="406" y="1147" fontSize="3.6" className="fill-muted-foreground">MEN1 the only MEN on THIS side of the page — MEN2A/2B</text>
          <text x="406" y="1156" fontSize="3.6" className="fill-muted-foreground">live across the aisle in RET&apos;s oncogene row</text>
          <text x="722" y="970" fontSize="4.2" fontWeight="800" className="fill-foreground">NF2</text>
          <text x="722" y="980" fontSize="3.7" fontWeight="700" className="fill-foreground">Merlin (schwannomin) protein</text>
          <text x="722" y="992" fontSize="3.7" fontWeight="700" className="fill-foreground">NeuroFibromatosis type 2</text>
          <text x="722" y="1012" fontSize="4.2" fontWeight="800" className="fill-foreground">TSC1</text>
          <text x="722" y="1022" fontSize="3.7" fontWeight="700" className="fill-foreground">Hamartin protein</text>
          <text x="722" y="1034" fontSize="3.7" fontWeight="700" className="fill-foreground">Tuberous sclerosis complex</text>
          <text x="722" y="1054" fontSize="4.2" fontWeight="800" className="fill-foreground">TSC2</text>
          <text x="722" y="1064" fontSize="3.7" fontWeight="700" className="fill-foreground">Tuberin (“2berin”)</text>
          <text x="722" y="1076" fontSize="3.7" fontWeight="700" className="fill-foreground">Tuberous sclerosis complex</text>
          <text x="722" y="1096" fontSize="4.2" fontWeight="800" className="fill-foreground">WT1</text>
          <text x="722" y="1106" fontSize="3.7" fontWeight="700" className="fill-foreground">Urogenital development transcription factor</text>
          <text x="722" y="1118" fontSize="3.7" fontWeight="700" className="fill-foreground">Wilms Tumor (nephroblastoma)</text>
          <text x="722" y="1138" fontSize="3.6" className="fill-muted-foreground">the 2s get the nicknames: NF2 → merlin, TSC2 → tuberin</text>
          <text x="722" y="1147" fontSize="3.6" className="fill-muted-foreground">(“2berin” — the source&apos;s printed pun); the 1s get the</text>
          <text x="722" y="1156" fontSize="3.6" className="fill-muted-foreground">mechanistic names: NF1 → neurofibromin, TSC1 → hamartin</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1194" width="1054" height="54" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1212" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 242 / book 220 (Pathology — Neoplasia: Oncogenes; Tumor suppressor genes)</text>
        <text x="42" y="1226" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images on the page — two pure-text tables (12 oncogene rows; 15 tumor-suppressor rows) and their two rule paragraphs, adapted here as an ORIGINAL KYP visual; both tables are carried verbatim in the note.</text>
        <text x="42" y="1238" fontSize="5" className="fill-muted-foreground">No margin notes or mnemonics print on the page (VLM census confirmed); the KYP memory layer is original. The source&apos;s embedded-capital quirks (REceptor, CytoKIne, BReast…CAncers, breasT…ENdometrial, NeuroFibromatosis, Bone cancer, “2berin”) are preserved.</text>
      </g>
    </svg>
  );
}
