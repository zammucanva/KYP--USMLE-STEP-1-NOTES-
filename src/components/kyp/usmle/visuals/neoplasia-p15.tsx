"use client";

// P15 — Metastasis: Organ Patterns & Routes (Pathology — Neoplasia,
// book 219). Original KYP adaptation: the route split (CLaSH, quoted
// verbatim, with the four blood-riding carcinomas flagged onto the
// blood lane), the first-capillary-bed routing logic, the four organ
// target cards with their verbatim tumor rankings and notes, the
// photographs-described panel (lettered A and B, text-only — the M32
// convention, never drawn), and the multiple-vs-solitary
// discriminator strip. No source artwork is reproduced; all glyphs
// are original.

export function MetastasisRouteMap() {
  const w = 1102;
  const h = 1152;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Metastasis route map — an original KYP adaptation of First Aid 2026 book page 219: the CLaSH route split (carcinomas to the lymphatics, sarcomas to the blood, with the four blood-riding carcinomas), the first-capillary-bed routing logic, and the Bone, Liver, Lung, and Brain target cards with their tumor rankings; two copyrighted photographs described in text, never reproduced." className="min-w-[1000px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Metastasis: organ patterns &amp; routes — the route map (original KYP adaptation)</text>
        <rect x="884" y="24" width="178" height="18" className="fill-brand-soft" />
        <text x="973" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">routes · ranks · counts</text>
      </g>
      {/* ===== BAND 1 — the route split ===== */}
      <g>
        <rect x="24" y="78" width="1054" height="392" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="98" fontSize="8" fontWeight="800" className="fill-foreground">The route split (book 219 — CLaSH, quoted verbatim)</text>
        {/* primary tumor glyph */}
        <circle cx="100" cy="252" r="36" className="fill-card stroke-brand" />
        <text x="100" y="249" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">PRIMARY</text>
        <text x="100" y="261" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">TUMOR</text>
        <text x="100" y="304" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">carcinoma or</text>
        <text x="100" y="315" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">sarcoma?</text>
        {/* carcinoma lane */}
        <path d="M 130 224 L 160 186" className="stroke-brand" strokeWidth="1.6" />
        <path d="M 160 186 L 151 185 M 160 186 L 155 193" className="stroke-brand" strokeWidth="1.6" />
        <text x="128" y="204" fontSize="3.6" fontWeight="700" className="fill-foreground">carcinoma</text>
        <rect x="168" y="104" width="344" height="78" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="340" y="124" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">CARCINOMA → LYMPHATICS</text>
        <text x="340" y="142" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">“Most Carcinomas spread via Lymphatics” (CLaSH)</text>
        <text x="340" y="156" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">regional nodes first — the sentinel node, then distant stations</text>
        <text x="340" y="172" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">why carcinomas are staged by their nodes</text>
        <path d="M 516 143 L 540 143" className="stroke-brand" strokeWidth="1.6" />
        <path d="M 540 143 L 533 140 M 540 143 L 533 146" className="stroke-brand" strokeWidth="1.6" />
        <circle cx="568" cy="143" r="26" className="fill-card stroke-border" />
        <text x="568" y="140" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">REGIONAL</text>
        <text x="568" y="150" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">LYMPH NODE</text>
        <text x="568" y="182" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the N in TNM</text>
        {/* sarcoma lane */}
        <path d="M 130 280 L 160 318" className="stroke-emergency" strokeWidth="1.6" />
        <path d="M 160 318 L 151 317 M 160 318 L 155 311" className="stroke-emergency" strokeWidth="1.6" />
        <text x="128" y="306" fontSize="3.6" fontWeight="700" className="fill-foreground">sarcoma</text>
        <rect x="168" y="322" width="344" height="78" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="340" y="342" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-emergency">SARCOMA → BLOOD (Hematogenously)</text>
        <text x="340" y="360" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">“most Sarcomas spread Hematogenously” (CLaSH)</text>
        <text x="340" y="374" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">vessel invasion early — skips the node line</text>
        <text x="340" y="390" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">negative nodes with distant disease is the rule</text>
        <path d="M 516 361 L 540 361" className="stroke-emergency" strokeWidth="1.6" />
        <path d="M 540 361 L 533 358 M 540 361 L 533 364" className="stroke-emergency" strokeWidth="1.6" />
        <circle cx="568" cy="361" r="26" className="fill-card stroke-border" />
        <text x="568" y="358" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">BLOOD</text>
        <text x="568" y="368" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">STREAM</text>
        <text x="568" y="400" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the first capillary bed</text>
        {/* the four exceptions defect to the blood lane */}
        <path d="M 636 214 L 596 330" className="stroke-brand" strokeWidth="1.4" strokeDasharray="4 3" />
        <path d="M 596 330 L 598 320 M 596 330 L 605 325" className="stroke-brand" strokeWidth="1.4" />
        <text x="577" y="252" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">hematogenous anyway</text>
        <rect x="636" y="104" width="428" height="140" rx="10" className="fill-card stroke-border" />
        <text x="850" y="122" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">THE FOUR BLOOD-RIDING CARCINOMAS</text>
        <rect x="650" y="132" width="198" height="42" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="749" y="149" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">follicular thyroid</text>
        <text x="749" y="162" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">carcinoma</text>
        <rect x="854" y="132" width="196" height="42" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="952" y="156" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">choriocarcinoma</text>
        <rect x="650" y="180" width="198" height="42" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="749" y="205" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">renal cell carcinoma</text>
        <rect x="854" y="180" width="196" height="42" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="952" y="197" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">hepatocellular</text>
        <text x="952" y="210" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">carcinoma</text>
        <text x="850" y="238" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">the printed exceptions — “four carcinomas route hematogenously”</text>
        {/* first capillary bed panel */}
        <rect x="636" y="256" width="428" height="190" rx="10" className="fill-card stroke-border" />
        <text x="850" y="274" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">THE FIRST CAPILLARY BED (the routing logic)</text>
        <text x="650" y="294" fontSize="3.9" fontWeight="700" className="fill-foreground">colon → portal vein → LIVER — its #1 source</text>
        <text x="650" y="308" fontSize="3.9" fontWeight="700" className="fill-foreground">liver → hepatic veins → IVC → right heart → LUNG (both lungs)</text>
        <text x="650" y="322" fontSize="3.9" fontWeight="700" className="fill-foreground">lung → pulmonary veins → left heart → systemic arteries →</text>
        <text x="650" y="336" fontSize="3.9" fontWeight="700" className="fill-foreground">BRAIN (gray-white junction) + BONE (axial skeleton)</text>
        <text x="650" y="358" fontSize="3.9" fontWeight="700" className="fill-foreground">the seed stops at the first capillary bed; the soil decides</text>
        <text x="650" y="370" fontSize="3.9" fontWeight="700" className="fill-foreground">growth — the red-marrow axial skeleton is the fertile ground</text>
        <text x="650" y="392" fontSize="3.6" className="fill-muted-foreground">KYP routing synthesis layered over the printed organ table —</text>
        <text x="650" y="404" fontSize="3.6" className="fill-muted-foreground">the anatomic why behind each row's rank order</text>
      </g>
      {/* ===== BAND 2 — the four organ target cards ===== */}
      <g>
        <rect x="24" y="486" width="1054" height="408" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="506" fontSize="8" fontWeight="800" className="fill-foreground">The site-of-metastasis table (book 219 — verbatim ranks + notes)</text>
        {/* BONE card */}
        <rect x="40" y="520" width="508" height="176" rx="10" className="fill-card stroke-border" />
        <rect x="40" y="520" width="508" height="20" rx="10" className="fill-brand-soft" />
        <text x="294" y="534" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">BONE — Prostate, breast &gt;&gt; lung &gt; kidney, colon</text>
        <text x="294" y="554" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Predilection for the AXIAL SKELETON (photograph A described in the panel below)</text>
        <rect x="54" y="562" width="150" height="104" rx="8" className="fill-brand-soft/40 stroke-border" />
        <text x="129" y="580" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">BLASTIC — builds</text>
        <text x="129" y="598" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">prostate ·</text>
        <text x="129" y="610" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">small cell</text>
        <text x="129" y="622" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">lung cancer</text>
        <text x="129" y="646" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">dense, sclerotic</text>
        <text x="129" y="657" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">on imaging</text>
        <rect x="212" y="562" width="140" height="104" rx="8" className="fill-brand-soft/40 stroke-border" />
        <text x="282" y="580" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">MIXED</text>
        <text x="282" y="598" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">breast</text>
        <text x="282" y="646" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">lucent and</text>
        <text x="282" y="657" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">sclerotic together</text>
        <rect x="360" y="562" width="174" height="104" rx="8" className="fill-brand-soft/40 stroke-border" />
        <text x="447" y="580" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">LYTIC — punches out</text>
        <text x="447" y="598" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">kidney · colon ·</text>
        <text x="447" y="610" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">non-small cell</text>
        <text x="447" y="622" textAnchor="middle" fontSize="3.9" fontWeight="700" className="fill-foreground">lung cancer</text>
        <text x="447" y="646" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">lucent, punched-out</text>
        <text x="447" y="657" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">lesions</text>
        <text x="294" y="686" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">the Bone row's three radiographic answers — Blastic (eg, prostate, small cell lung cancer) · Mixed (eg, breast) · Lytic (eg, kidney, colon, non-small cell lung cancer)</text>
        {/* LIVER card */}
        <rect x="564" y="520" width="508" height="176" rx="10" className="fill-card stroke-border" />
        <rect x="564" y="520" width="508" height="20" rx="10" className="fill-warning-soft" />
        <text x="818" y="534" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">LIVER — Colon &gt; breast &gt;&gt; pancreas, lung, prostate</text>
        <text x="818" y="554" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Scattered throughout liver parenchyma (photograph B described in the panel below)</text>
        <text x="578" y="574" fontSize="3.9" fontWeight="700" className="fill-foreground">multiple lesions of varying size across both lobes — the “shower of</text>
        <text x="578" y="586" fontSize="3.9" fontWeight="700" className="fill-foreground">seeds” pattern against the generally solitary 1° mass</text>
        <text x="578" y="606" fontSize="3.9" fontWeight="700" className="fill-foreground">colon leads via the PORTAL VEIN — the colon's venous drainage</text>
        <text x="578" y="618" fontSize="3.9" fontWeight="700" className="fill-foreground">makes the liver its first capillary bed</text>
        <text x="578" y="638" fontSize="3.9" fontWeight="700" className="fill-foreground">metastasis to the liver is more common than 1° malignancy</text>
        <text x="578" y="650" fontSize="3.9" fontWeight="700" className="fill-foreground">in the liver — count the spots before naming the tumor</text>
        <text x="818" y="680" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">the printed note is the pattern: “Scattered throughout liver parenchyma”</text>
        {/* LUNG card */}
        <rect x="40" y="710" width="508" height="172" rx="10" className="fill-card stroke-border" />
        <rect x="40" y="710" width="508" height="20" rx="10" className="fill-emergency-soft" />
        <text x="294" y="724" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-emergency">LUNG — Colon, breast &gt;&gt; kidney, prostate</text>
        <text x="294" y="744" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Typically involve BOTH lungs</text>
        <text x="54" y="764" fontSize="3.9" fontWeight="700" className="fill-foreground">bilateral nodules of varying size, seeded from the systemic venous</text>
        <text x="54" y="776" fontSize="3.9" fontWeight="700" className="fill-foreground">return (IVC → right heart → pulmonary arteries)</text>
        <text x="54" y="796" fontSize="3.9" fontWeight="700" className="fill-foreground">colon and breast lead — the portal and systemic routes both empty</text>
        <text x="54" y="808" fontSize="3.9" fontWeight="700" className="fill-foreground">into the pulmonary capillary bed</text>
        <text x="294" y="850" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">both lungs at once — a metastatic signature the printed note carries</text>
        {/* BRAIN card */}
        <rect x="564" y="710" width="508" height="172" rx="10" className="fill-card stroke-border" />
        <rect x="564" y="710" width="508" height="20" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="818" y="724" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">BRAIN — Lung &gt; breast &gt;&gt; melanoma &gt; colon, prostate</text>
        <text x="818" y="744" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Usually seen at the GRAY-WHITE MATTER JUNCTION</text>
        <text x="578" y="764" fontSize="3.9" fontWeight="700" className="fill-foreground">lung leads — the pulmonary veins return tumor cells to the left heart</text>
        <text x="578" y="776" fontSize="3.9" fontWeight="700" className="fill-foreground">and the systemic arterial tree → brain, bone, everywhere else</text>
        <text x="578" y="796" fontSize="3.9" fontWeight="700" className="fill-foreground">ring-enhancing on MRI and often multiple — the junction is where</text>
        <text x="578" y="808" fontSize="3.9" fontWeight="700" className="fill-foreground">arterioles narrow and the blood-borne seeds lodge</text>
        <text x="818" y="850" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">a “brain tumor” is statistically a lung metastasis until proven otherwise</text>
      </g>
      {/* ===== BAND 3 — the photographs, described in text ===== */}
      <g>
        <rect x="24" y="910" width="1054" height="104" rx="14" className="fill-card stroke-border" />
        <text x="40" y="930" fontSize="8" fontWeight="800" className="fill-foreground">The two lettered photographs — described in text (copyrighted, never reproduced)</text>
        <text x="40" y="948" fontSize="4" fontWeight="700" className="fill-foreground">PHOTOGRAPH A (188×245, beside the Bone row): a sagittal MR image of the spine showing</text>
        <text x="40" y="962" fontSize="4" fontWeight="700" className="fill-foreground">the axial skeleton — a grayscale vertebral column with bright fatty marrow; red arrows point</text>
        <text x="40" y="976" fontSize="4" fontWeight="700" className="fill-foreground">to metastatic lesions at the labeled vertebral levels T8 and L1; the boxed letter A sits at</text>
        <text x="40" y="990" fontSize="4" fontWeight="700" className="fill-foreground">the image's top-left.</text>
        <text x="564" y="948" fontSize="4" fontWeight="700" className="fill-foreground">PHOTOGRAPH B (188×150, beside the Liver row): a gross liver specimen — the cut surface of</text>
        <text x="564" y="962" fontSize="4" fontWeight="700" className="fill-foreground">two liver halves on a teal background; large pale yellow-white/cream nodular metastatic</text>
        <text x="564" y="976" fontSize="4" fontWeight="700" className="fill-foreground">masses with central necrotic discoloration in the dark reddish-brown parenchyma, one large</text>
        <text x="564" y="990" fontSize="4" fontWeight="700" className="fill-foreground">mass in each half; the boxed letter B sits at the image's top-left.</text>
      </g>
      {/* ===== BAND 4 — the discriminator strip ===== */}
      <g>
        <rect x="24" y="1026" width="1054" height="58" rx="12" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="40" y="1048" fontSize="4.6" fontWeight="800" className="fill-foreground">THE DISCRIMINATOR — “Metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions).”</text>
        <text x="40" y="1066" fontSize="4.2" className="fill-muted-foreground">The frequency rule: metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs — count the spots before naming the tumor.</text>
      </g>
      {/* footer */}
      <g>
        <rect x="24" y="1096" width="1054" height="44" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="40" y="1112" fontSize="5.2" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 241 / book 219 (Pathology — Neoplasia: Common metastases)</text>
        <text x="40" y="1124" fontSize="4.4" className="fill-muted-foreground">Census (pdfimages + VLM): TWO copyrighted photographs — A (the sagittal spine MR, red arrows at T8/L1) and B (the gross liver with pale nodular metastases) — described in text, never reproduced.</text>
        <text x="40" y="1136" fontSize="4.4" className="fill-muted-foreground">The text layer prints the 1° TUMOR header as “10 TUMOR” (a mangled degree sign). Table carried verbatim in the note; CLaSH is the source's own mnemonic; the four KYP mnemonics are original.</text>
      </g>
    </svg>
  );
}
