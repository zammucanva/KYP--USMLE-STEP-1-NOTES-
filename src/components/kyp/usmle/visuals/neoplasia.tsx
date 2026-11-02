// Pathology — Neoplasia banner visuals (P-batch 12 onwards).
// Each visual is an ORIGINAL KYP adaptation of the source pages.
// No source artwork is reproduced; all figures are redrawn as
// original KYP vector line art (the P2/P3 pure-vector convention).
// All copyrighted photographs are described in text only (the M32
// convention). Census for P12 (pdfimages + VLM): NO raster images
// on either page (pdf 237-238 / book 215-216) — both figures are
// pure vector line art.

export function NeoplasiaProgressionMap() {
  const w = 980;
  const h = 1280;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Neoplasia nomenclature and progression — the map, an original KYP adaptation of the source pages (book 215-216 — the neoplasia definition with parenchyma + stroma; the five-station progression Normal → Dysplasia → Carcinoma in situ → Invasive carcinoma → Metastasis with the molecular gates [pleomorphism + ↑N:C ratio; intact basement membrane; metalloproteinases + E-cadherin loss; lymphatics or blood]; the carcinoma-vs-sarcoma rule; benign and malignant feature lists; hamartoma vs choristoma; the 10-row nomenclature table with the Mesenchyme category header; the grade-vs-stage fork with the TNM staging figure [T primary tumor, N lymph node, M blood/lymphatic vessel + spread, importance M > N > T] and the stage-trumps-grade rule; two vector figures redrawn as original KYP figures — the cervical progression diagram and the grade + TNM illustrations; no copyrighted photographs on either page). TOP — THE DEFINITION (parenchyma + stroma). UPPER-LEFT — THE PROGRESSION CASCADE (an original KYP redraw of the cervical epithelium diagram): Normal → Dysplasia → Carcinoma in situ → Invasive carcinoma → Metastasis with the basement membrane band (intact through CIS, breached at Invasive) and the blood/lymphatic vessel at the base. UPPER-RIGHT — THE NOMENCLATURE (carcinoma vs sarcoma, benign vs malignant features, hamartoma vs choristoma). MIDDLE — THE NOMENCLATURE TABLE (10-row grid with the Mesenchyme category header). BOTTOM-LEFT — GRADE VS STAGE fork. BOTTOM-RIGHT — THE TNM STAGING FIGURE (an original KYP redraw: T primary tumor, N lymph node, M blood/lymphatic vessel with spread to other organs and tissues, importance M > N > T) and the stage-trumps-grade rule. The footer carries the source attribution, the census note, and the copyright boundary." className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Neoplasia nomenclature &amp; progression — the map (original KYP adaptation)</text>
        <rect x="740" y="24" width="192" height="18" className="fill-brand-soft" />
        <text x="836" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">define · name · prognose</text>
      </g>

      {/* ===== DEFINITION band ===== */}
      <g>
        <rect x="36" y="80" width="908" height="86" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="102" fontSize="8" fontWeight="800" className="fill-foreground">The definition (book 215 — verbatim)</text>
        <text x="52" y="122" fontSize="4.6" fontWeight="700" className="fill-foreground">Uncontrolled, often monoclonal proliferation of cells. Can be benign or malignant. Any neoplastic growth has two components:</text>
        <text x="52" y="136" fontSize="4.6" fontWeight="700" className="fill-foreground">PARENCHYMA (neoplastic cells) + supporting STROMA (nonneoplastic; eg, blood vessels, connective tissue).</text>
        <text x="52" y="152" fontSize="4.2" className="fill-muted-foreground">The parenchyma is the cancer; the stroma is the host's scaffolding that the cancer co-opts for blood supply and structural support.</text>
      </g>

      {/* ===== UPPER-LEFT — the progression cascade (KYP redraw) ===== */}
      <g>
        <rect x="36" y="180" width="500" height="500" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="52" y="200" fontSize="8" fontWeight="800" className="fill-foreground">The progression cascade (book 215 — an original KYP redraw)</text>

        {/* the basement membrane band — intact through CIS, breached at Invasive */}
        <rect x="64" y="430" width="440" height="6" className="fill-border" />
        <text x="284" y="448" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">BASEMENT MEMBRANE — the line (intact through CIS, breached at Invasive)</text>

        {/* the blood/lymphatic vessel at the base */}
        <g>
          <ellipse cx="284" cy="478" rx="80" ry="14" className="fill-brand-soft/60 stroke-brand" />
          <text x="284" y="482" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-brand">Blood or lymphatic vessel — the metastasis route</text>
        </g>

        {/* 5-station chain */}
        {/* Station 1: Normal cells */}
        <g>
          <rect x="60" y="226" width="84" height="80" rx="10" className="fill-card stroke-border" />
          <text x="102" y="244" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">NORMAL</text>
          <text x="102" y="258" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">basal → apical</text>
          <text x="102" y="268" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">polarity intact</text>
          {/* polarized cells glyph */}
          <g>
            <rect x="74" y="282" width="56" height="4" className="fill-brand-soft stroke-brand" strokeWidth="0.4" />
            <rect x="74" y="288" width="56" height="4" className="fill-brand-soft stroke-brand" strokeWidth="0.4" />
            <rect x="74" y="294" width="56" height="4" className="fill-brand-soft stroke-brand" strokeWidth="0.4" />
          </g>
        </g>
        {/* arrow 1 */}
        <g>
          <path d="M 146 266 L 168 266" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 168 266 L 161 263 M 168 266 L 161 269" className="stroke-brand" strokeWidth="1.6" />
          <text x="157" y="258" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">pleomorphism</text>
          <text x="157" y="282" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">↑ N:C ratio</text>
        </g>

        {/* Station 2: Dysplasia */}
        <g>
          <rect x="170" y="226" width="84" height="80" rx="10" className="fill-warning-soft/40 stroke-warning" />
          <text x="212" y="244" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-warning">DYSPLASIA</text>
          <text x="212" y="258" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">loss of uniformity</text>
          <text x="212" y="268" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">often REVERSIBLE</text>
          {/* disordered cells glyph */}
          <g>
            <circle cx="184" cy="286" r="3" className="fill-warning-soft stroke-warning" strokeWidth="0.4" />
            <circle cx="196" cy="290" r="4" className="fill-warning-soft stroke-warning" strokeWidth="0.4" />
            <circle cx="212" cy="284" r="3.5" className="fill-warning-soft stroke-warning" strokeWidth="0.4" />
            <circle cx="226" cy="292" r="3" className="fill-warning-soft stroke-warning" strokeWidth="0.4" />
            <circle cx="240" cy="288" r="4" className="fill-warning-soft stroke-warning" strokeWidth="0.4" />
          </g>
        </g>
        {/* arrow 2 */}
        <g>
          <path d="M 256 266 L 278 266" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 278 266 L 271 263 M 278 266 L 271 269" className="stroke-brand" strokeWidth="1.6" />
          <text x="267" y="258" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">full-thickness</text>
          <text x="267" y="282" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">irreversible</text>
        </g>

        {/* Station 3: Carcinoma in situ */}
        <g>
          <rect x="280" y="226" width="84" height="80" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
          <text x="322" y="244" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">CARCINOMA</text>
          <text x="322" y="252" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">IN SITU</text>
          <text x="322" y="266" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">preinvasive</text>
          <text x="322" y="276" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">BM INTACT</text>
          {/* full-thickness atypical cells above the BM */}
          <g>
            <rect x="294" y="284" width="56" height="4" className="fill-emergency-soft stroke-emergency" strokeWidth="0.4" />
            <rect x="294" y="290" width="56" height="4" className="fill-emergency-soft stroke-emergency" strokeWidth="0.4" />
            <rect x="294" y="296" width="56" height="4" className="fill-emergency-soft stroke-emergency" strokeWidth="0.4" />
          </g>
        </g>
        {/* arrow 3 */}
        <g>
          <path d="M 366 266 L 388 266" className="stroke-emergency" strokeWidth="1.8" />
          <path d="M 388 266 L 381 263 M 388 266 L 381 269" className="stroke-emergency" strokeWidth="1.8" />
          <text x="377" y="258" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-emergency">metalloproteinases</text>
          <text x="377" y="282" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-emergency">↓ E-cadherin</text>
        </g>

        {/* Station 4: Invasive carcinoma */}
        <g>
          <rect x="390" y="226" width="84" height="80" rx="10" className="fill-emergency-soft stroke-emergency" strokeWidth="1.4" />
          <text x="432" y="244" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">INVASIVE</text>
          <text x="432" y="252" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">CARCINOMA</text>
          <text x="432" y="266" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">BM BREACHED</text>
          <text x="432" y="276" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">cells in stroma</text>
          {/* cells breaching the BM */}
          <g>
            <rect x="404" y="284" width="56" height="4" className="fill-emergency-soft stroke-emergency" strokeWidth="0.4" />
            <circle cx="412" cy="296" r="3" className="fill-emergency-soft stroke-emergency" strokeWidth="0.4" />
            <circle cx="428" cy="300" r="3.5" className="fill-emergency-soft stroke-emergency" strokeWidth="0.4" />
            <circle cx="444" cy="296" r="3" className="fill-emergency-soft stroke-emergency" strokeWidth="0.4" />
          </g>
        </g>
        {/* arrow 4 — to metastasis */}
        <g>
          <path d="M 432 318 L 432 360" className="stroke-emergency" strokeWidth="1.6" />
          <path d="M 432 360 L 429 353 M 432 360 L 435 353" className="stroke-emergency" strokeWidth="1.6" />
          <text x="470" y="340" fontSize="3.6" fontWeight="700" className="fill-foreground">lymphatics or blood →</text>
          <text x="470" y="350" fontSize="3.6" fontWeight="700" className="fill-foreground">distant organ(s)</text>
        </g>

        {/* Station 5: Metastasis */}
        <g>
          <rect x="350" y="370" width="164" height="50" rx="10" className="fill-emergency-soft stroke-emergency" strokeWidth="1.4" />
          <text x="432" y="388" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">METASTASIS</text>
          <text x="432" y="402" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">spread to distant organ(s)</text>
          <text x="432" y="412" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">via lymphatics or blood</text>
        </g>

        {/* arrow from metastasis down through the vessel */}
        <path d="M 432 420 L 432 470" className="stroke-emergency" strokeWidth="1.2" strokeDasharray="3 3" />
        <text x="470" y="450" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the route closes</text>

        {/* the gate callouts */}
        <text x="80" y="544" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">The cascade in one line: Normal (polarity) → Dysplasia (pleomorphism + ↑N:C, reversible) → CIS (full-thickness,</text>
        <text x="80" y="554" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">BM intact, irreversible) → Invasive (BM breached by metalloproteinases; ↓E-cadherin) → Metastasis (lymphatics/blood).</text>
        <text x="80" y="568" fontSize="4.2" fontWeight="800" className="fill-emergency">THE BASEMENT MEMBRANE IS THE LINE — above it, excision cures; below it, the disease is in the body.</text>
      </g>

      {/* ===== UPPER-RIGHT — the nomenclature rules ===== */}
      <g>
        <rect x="548" y="180" width="396" height="500" rx="14" className="fill-card stroke-border" />
        <text x="564" y="200" fontSize="8" fontWeight="800" className="fill-foreground">The nomenclature rules (book 216)</text>

        {/* carcinoma vs sarcoma */}
        <rect x="560" y="212" width="372" height="56" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="566" y="228" fontSize="4.4" fontWeight="800" className="fill-brand">CARCINOMA vs SARCOMA</text>
        <text x="566" y="242" fontSize="3.8" fontWeight="700" className="fill-foreground">Carcinoma implies epithelial origin; sarcoma denotes mesenchymal origin.</text>
        <text x="566" y="252" fontSize="3.8" fontWeight="700" className="fill-foreground">Both terms generally imply malignancy.</text>
        <text x="566" y="262" fontSize="3.4" className="fill-muted-foreground">The two breakers: blood cells (leukemia, lymphoma) and melanocyte (nevus/mole, melanoma).</text>

        {/* benign vs malignant */}
        <rect x="560" y="276" width="180" height="100" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="650" y="292" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">BENIGN</text>
        <text x="566" y="306" fontSize="3.6" fontWeight="700" className="fill-foreground">well-differentiated</text>
        <text x="566" y="316" fontSize="3.6" fontWeight="700" className="fill-foreground">well-demarcated</text>
        <text x="566" y="326" fontSize="3.6" fontWeight="700" className="fill-foreground">low mitotic activity</text>
        <text x="566" y="336" fontSize="3.6" fontWeight="700" className="fill-foreground">no metastases</text>
        <text x="566" y="346" fontSize="3.6" fontWeight="700" className="fill-foreground">no necrosis</text>
        <text x="566" y="360" fontSize="3.4" className="fill-muted-foreground">the disciplined tumor —</text>
        <text x="566" y="370" fontSize="3.4" className="fill-muted-foreground">stays where it started</text>

        <rect x="752" y="276" width="180" height="100" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="842" y="292" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-emergency">MALIGNANT</text>
        <text x="758" y="306" fontSize="3.6" fontWeight="700" className="fill-foreground">poor differentiation</text>
        <text x="758" y="316" fontSize="3.6" fontWeight="700" className="fill-foreground">erratic growth</text>
        <text x="758" y="326" fontSize="3.6" fontWeight="700" className="fill-foreground">local invasion</text>
        <text x="758" y="336" fontSize="3.6" fontWeight="700" className="fill-foreground">metastasis</text>
        <text x="758" y="346" fontSize="3.6" fontWeight="700" className="fill-foreground">↓ apoptosis</text>
        <text x="758" y="360" fontSize="3.4" className="fill-muted-foreground">the escaped tumor —</text>
        <text x="758" y="370" fontSize="3.4" className="fill-muted-foreground">refuses to die, leaves home</text>

        {/* hamartoma vs choristoma */}
        <rect x="560" y="384" width="180" height="100" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="650" y="400" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">HAMARTOMA</text>
        <text x="566" y="414" fontSize="3.6" fontWeight="700" className="fill-foreground">disorganized overgrowth</text>
        <text x="566" y="424" fontSize="3.6" fontWeight="700" className="fill-foreground">of tissues in their</text>
        <text x="566" y="434" fontSize="3.6" fontWeight="700" className="fill-foreground">NATIVE location</text>
        <text x="566" y="450" fontSize="3.4" className="fill-muted-foreground">eg, Peutz-Jeghers polyps</text>
        <text x="566" y="466" fontSize="3.4" className="fill-muted-foreground">native-but-disorganized</text>
        <text x="566" y="476" fontSize="3.4" className="fill-muted-foreground">— a non-neoplastic malformation</text>

        <rect x="752" y="384" width="180" height="100" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="842" y="400" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">CHORISTOMA</text>
        <text x="758" y="414" fontSize="3.6" fontWeight="700" className="fill-foreground">normal tissue</text>
        <text x="758" y="424" fontSize="3.6" fontWeight="700" className="fill-foreground">in a FOREIGN location</text>
        <text x="758" y="450" fontSize="3.4" className="fill-muted-foreground">eg, gastric tissue in distal</text>
        <text x="758" y="460" fontSize="3.4" className="fill-muted-foreground">ileum in Meckel diverticulum</text>
        <text x="758" y="476" fontSize="3.4" className="fill-muted-foreground">foreign-but-normal</text>

        {/* the nomenclature summary */}
        <rect x="560" y="494" width="372" height="172" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="566" y="510" fontSize="4.4" fontWeight="800" className="fill-foreground">THE NAMING RULE</text>
        <text x="566" y="524" fontSize="3.7" fontWeight="700" className="fill-foreground">Epithelium: -oma benign (adenoma, papilloma) / -carcinoma malignant</text>
        <text x="566" y="534" fontSize="3.7" fontWeight="700" className="fill-foreground">(adenocarcinoma, papillary carcinoma)</text>
        <text x="566" y="548" fontSize="3.7" fontWeight="700" className="fill-foreground">Mesenchyme: -oma benign (lipoma, osteoma, leiomyoma, fibroma,</text>
        <text x="566" y="558" fontSize="3.7" fontWeight="700" className="fill-foreground">hemangioma, rhabdomyoma) / -sarcoma malignant (liposarcoma,</text>
        <text x="566" y="568" fontSize="3.7" fontWeight="700" className="fill-foreground">osteosarcoma, leiomyosarcoma, fibrosarcoma, angiosarcoma,</text>
        <text x="566" y="578" fontSize="3.7" fontWeight="700" className="fill-foreground">rhabdomyosarcoma)</text>
        <text x="566" y="592" fontSize="3.7" fontWeight="800" className="fill-emergency">THE TWO BREAKERS:</text>
        <text x="566" y="606" fontSize="3.7" fontWeight="700" className="fill-foreground">Blood cells: leukemia, lymphoma (malignant; no benign form)</text>
        <text x="566" y="616" fontSize="3.7" fontWeight="700" className="fill-foreground">Melanocyte: nevus/mole (benign) / melanoma (malignant)</text>
        <text x="566" y="636" fontSize="3.4" className="fill-muted-foreground">Name the tissue of origin first, then apply the ending rule — and</text>
        <text x="566" y="646" fontSize="3.4" className="fill-muted-foreground">remember the two breakers where the -oma ending behaves differently.</text>
      </g>

      {/* ===== MIDDLE — the nomenclature table grid ===== */}
      <g>
        <rect x="36" y="694" width="908" height="206" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="714" fontSize="8" fontWeight="800" className="fill-foreground">The nomenclature table (book 216 — verbatim)</text>

        {/* header row */}
        <rect x="52" y="724" width="200" height="20" className="fill-brand-soft" />
        <text x="152" y="738" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">CELL TYPE</text>
        <rect x="252" y="724" width="320" height="20" className="fill-secondary" />
        <text x="412" y="738" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">BENIGN</text>
        <rect x="572" y="724" width="356" height="20" className="fill-emergency-soft" />
        <text x="750" y="738" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">MALIGNANT</text>

        {/* rows */}
        {[
          ["Epithelium", "Adenoma, papilloma", "Adenocarcinoma, papillary carcinoma", false],
          ["Mesenchyme (category header)", "—", "—", true],
          ["  Blood cells", "—", "Leukemia, lymphoma", false],
          ["  Blood vessels", "Hemangioma", "Angiosarcoma", false],
          ["  Smooth muscle", "Leiomyoma", "Leiomyosarcoma", false],
          ["  Striated muscle", "Rhabdomyoma", "Rhabdomyosarcoma", false],
          ["  Connective tissue", "Fibroma", "Fibrosarcoma", false],
          ["  Bone", "Osteoma", "Osteosarcoma", false],
          ["  Fat", "Lipoma", "Liposarcoma", false],
          ["Melanocyte", "Nevus/mole", "Melanoma", false],
        ].map((row, i) => {
          const y = 746 + i * 14;
          const isHeader = row[3];
          return (
            <g key={i}>
              <rect x="52" y={y} width="200" height="14" className={isHeader ? "fill-secondary" : "fill-card"} />
              <text x="60" y={y + 10} fontSize="3.7" fontWeight={isHeader ? "800" : "700"} className="fill-foreground">{row[0]}</text>
              <rect x="252" y={y} width="320" height="14" className={isHeader ? "fill-secondary" : "fill-card"} />
              <text x="260" y={y + 10} fontSize="3.7" fontWeight="700" className="fill-foreground">{row[1]}</text>
              <rect x="572" y={y} width="356" height="14" className={isHeader ? "fill-secondary" : "fill-card"} />
              <text x="580" y={y + 10} fontSize="3.7" fontWeight="700" className="fill-foreground">{row[2]}</text>
            </g>
          );
        })}
      </g>

      {/* ===== BOTTOM-LEFT — grade vs stage fork ===== */}
      <g>
        <rect x="36" y="914" width="500" height="240" rx="14" className="fill-card stroke-border" />
        <text x="52" y="934" fontSize="8" fontWeight="800" className="fill-foreground">Grade vs stage (book 216 — verbatim)</text>

        <rect x="52" y="946" width="220" height="100" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="162" y="962" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-warning">GRADE — differentiates</text>
        <text x="60" y="976" fontSize="3.6" fontWeight="700" className="fill-foreground">Degree of cell differentiation</text>
        <text x="60" y="986" fontSize="3.6" fontWeight="700" className="fill-foreground">(tissue of origin resemblance)</text>
        <text x="60" y="996" fontSize="3.6" fontWeight="700" className="fill-foreground">and mitotic activity on histology.</text>
        <text x="60" y="1010" fontSize="3.6" fontWeight="700" className="fill-foreground">Low-grade → high-grade → anaplastic.</text>
        <text x="60" y="1024" fontSize="3.4" className="fill-muted-foreground">Correlates with aggressiveness.</text>
        <text x="60" y="1036" fontSize="3.4" className="fill-muted-foreground">Under the microscope.</text>

        <rect x="288" y="946" width="236" height="100" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="406" y="962" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">STAGE — spreads</text>
        <text x="296" y="976" fontSize="3.6" fontWeight="700" className="fill-foreground">Degree of invasion and spread</text>
        <text x="296" y="986" fontSize="3.6" fontWeight="700" className="fill-foreground">from initial site. Depth correlates</text>
        <text x="296" y="996" fontSize="3.6" fontWeight="700" className="fill-foreground">to risk of metastasis.</text>
        <text x="296" y="1010" fontSize="3.6" fontWeight="700" className="fill-foreground">Clinical (c) or pathologic (p).</text>
        <text x="296" y="1024" fontSize="3.4" className="fill-muted-foreground">Through the body.</text>

        {/* the rule */}
        <rect x="52" y="1054" width="472" height="42" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="288" y="1070" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">THE RULE — stage trumps grade</text>
        <text x="288" y="1082" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Stage has more prognostic value than grade (a high-stage yet low-grade tumor</text>
        <text x="288" y="1090" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">is usually worse than a low-stage yet high-grade tumor). Stage determines survival.</text>

        {/* the TNM priority */}
        <rect x="52" y="1104" width="472" height="42" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="288" y="1120" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">TNM STAGING SYSTEM (importance: M &gt; N &gt; T)</text>
        <text x="288" y="1132" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Primary tumor size/invasion · ▘ Regional lymph node metastasis · ▘ Distant metastasis</text>
        <text x="288" y="1140" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">Distant metastasis weighs most, then regional nodes, then primary tumor size.</text>
      </g>

      {/* ===== BOTTOM-RIGHT — the TNM staging figure (KYP redraw) ===== */}
      <g>
        <rect x="548" y="914" width="396" height="240" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="564" y="934" fontSize="8" fontWeight="800" className="fill-foreground">The TNM staging figure (book 216 — an original KYP redraw)</text>

        {/* T — primary tumor (upper right) */}
        <g>
          <ellipse cx="820" cy="976" rx="28" ry="22" className="fill-emergency-soft stroke-emergency" />
          <text x="820" y="980" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">T</text>
          <text x="820" y="998" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">primary tumor</text>
          <text x="820" y="1006" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">size / invasion</text>
        </g>

        {/* N — lymph node (center-left) */}
        <g>
          <ellipse cx="640" cy="1030" rx="34" ry="22" className="fill-warning-soft stroke-warning" />
          <text x="640" y="1034" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">N</text>
          <text x="640" y="1052" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">regional lymph</text>
          <text x="640" y="1060" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">node metastasis</text>
          <ellipse cx="640" cy="1074" rx="20" ry="12" className="fill-warning-soft/40 stroke-warning" strokeWidth="0.6" />
          <text x="640" y="1078" textAnchor="middle" fontSize="3" className="fill-muted-foreground">Lymph node</text>
        </g>

        {/* M — blood/lymphatic vessel + spread (lower right) */}
        <g>
          <ellipse cx="820" cy="1080" rx="28" ry="22" className="fill-emergency-soft stroke-emergency" strokeWidth="1.2" />
          <text x="820" y="1084" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">M</text>
          <text x="820" y="1102" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">distant metastasis</text>
          {/* the vessel */}
          <ellipse cx="820" cy="1126" rx="40" ry="8" className="fill-brand-soft/60 stroke-brand" />
          <text x="820" y="1130" textAnchor="middle" fontSize="3" className="fill-brand">Blood or lymphatic vessel</text>
          {/* spread to other organs */}
          <path d="M 820 1134 L 760 1148" className="stroke-emergency" strokeWidth="1.2" />
          <path d="M 760 1148 L 767 1145 M 760 1148 L 767 1151" className="stroke-emergency" strokeWidth="1.2" />
          <text x="700" y="1144" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-emergency">Spread to other</text>
          <text x="700" y="1152" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-emergency">organs and tissues</text>
        </g>

        {/* arrows between T, N, M showing the importance ranking */}
        <path d="M 800 998 L 670 1014" className="stroke-muted-foreground" strokeWidth="0.8" strokeDasharray="3 2" />
        <path d="M 800 1058 L 800 1060" className="stroke-muted-foreground" strokeWidth="0.8" strokeDasharray="3 2" />

        {/* the importance label */}
        <rect x="556" y="946" width="120" height="40" rx="8" className="fill-card stroke-border" />
        <text x="616" y="962" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Importance:</text>
        <text x="616" y="976" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">M &gt; N &gt; T</text>

        <text x="564" y="1168" fontSize="3.4" className="fill-muted-foreground">The TNM staging figure redrawn: T primary tumor at upper right, N regional lymph node at center,</text>
        <text x="564" y="1176" fontSize="3.4" className="fill-muted-foreground">M distant metastasis via the blood/lymphatic vessel — the importance ranking M &gt; N &gt; T.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1170" width="932" height="96" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1188" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 237–238 / book 215–216 (Pathology — Neoplasia: Neoplasia and neoplastic progression; Tumor nomenclature)</text>
        <text x="42" y="1202" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): NO raster images on either page (pdfimages -list returned zero rows for both pdf 237 and pdf 238). The TWO vector figures — p237's cervical</text>
        <text x="42" y="1214" fontSize="5" className="fill-muted-foreground">epithelium progression diagram (basement membrane band, blood/lymphatic vessel, five-stage arrow chain) and p238's grade illustration + TNM staging figure — are</text>
        <text x="42" y="1226" fontSize="5" className="fill-muted-foreground">redrawn as ORIGINAL KYP figures with original glyphs (the P2/P3 pure-vector convention). Tables carried verbatim in the note. No copyrighted photographs.</text>
        <text x="42" y="1238" fontSize="5" className="fill-muted-foreground">No margin mnemonics on either page (VLM confirmed); the KYP memory layer is original.</text>
      </g>
    </svg>
  );
}

// P13 — Cancer hallmarks map (an original KYP adaptation of book 217).
// The page is a single 9-row HALLMARK | MECHANISM table — pure text,
// no figures (pdfimages confirmed zero rasters). The visual renders
// the 9 hallmarks as a panel grid: three pairs (growth; death-
// immortality; supply) and a trio (spread), with the invasion-
// metastasis cascade as a flow at the bottom.

export function CancerHallmarksMap() {
  const w = 980;
  const h = 1140;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Hallmarks of cancer — the map, an original KYP adaptation of the source page (book 217 — the 9-row HALLMARK | MECHANISM table with the definition; the growth pair: growth signal self-sufficiency [proto-oncogenes, PDGF, HER2, RAS, MYC, cyclins/CDKs] and anti-growth signal insensitivity [Rb, E-cadherin/NF2]; the death-immortality pair: evasion of apoptosis [TP53, BCL2, follicular B cell lymphoma] and limitless replicative potential [telomerase]; the supply pair: sustained angiogenesis [VEGF, neoangiogenesis, vasculogenesis] and Warburg effect [aerobic glycolysis, pyruvate kinase M2, LDH-A, ↑ lactate]; the spread trio: immune evasion [↓ MHC I, TGF-β, Tregs, checkpoint molecules], tissue invasion [E-cadherin loss → metalloproteinases → ECM → locomotion → vascular dissemination], and metastasis [lymphatics or blood → adhesion → extravasation → homing; first-capillary-bed rule; organ tropism, lung to adrenals]; no copyrighted photographs on the page). TOP — THE DEFINITION. UPPER — THREE PAIRS (growth; death-immortality; supply). LOWER-LEFT — THE SPREAD TRIO panels. LOWER-RIGHT — THE INVASION-METASTASIS CASCADE flow. Footer carries the source attribution, the census note, and the copyright boundary." className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Hallmarks of cancer — the map (original KYP adaptation)</text>
        <rect x="740" y="24" width="192" height="18" className="fill-brand-soft" />
        <text x="836" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">9 capabilities · 3 pairs · 1 trio</text>
      </g>

      {/* ===== DEFINITION band ===== */}
      <g>
        <rect x="36" y="80" width="908" height="60" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="102" fontSize="8" fontWeight="800" className="fill-foreground">The definition (book 217 — verbatim)</text>
        <text x="52" y="120" fontSize="4.6" fontWeight="700" className="fill-foreground">Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival).</text>
        <text x="52" y="132" fontSize="4.2" className="fill-muted-foreground">Nine capabilities, grouped as three pairs (growth; death-immortality; supply) and a trio (spread) — each mutation serves a capability.</text>
      </g>

      {/* ===== PAIR 1 — growth (hallmarks 1 + 2) ===== */}
      <g>
        <rect x="36" y="152" width="908" height="160" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="52" y="172" fontSize="8" fontWeight="800" className="fill-brand">PAIR 1 — GROW (hallmarks 1 + 2)</text>

        <rect x="52" y="184" width="440" height="118" rx="10" className="fill-card stroke-border" />
        <text x="64" y="200" fontSize="4.6" fontWeight="800" className="fill-foreground">HALLMARK 1 — GROWTH SIGNAL SELF-SUFFICIENCY</text>
        <text x="64" y="214" fontSize="3.7" fontWeight="700" className="fill-foreground">Mutations in genes encoding:</text>
        <text x="64" y="226" fontSize="3.6" className="fill-foreground">▘ Proto-oncogenes → ↑ growth factors → autocrine loop</text>
        <text x="74" y="234" fontSize="3.4" className="fill-muted-foreground">(eg, ↑ PDGF in brain tumors)</text>
        <text x="64" y="246" fontSize="3.6" className="fill-foreground">▘ Growth factor receptors → constitutive signaling</text>
        <text x="74" y="254" fontSize="3.4" className="fill-muted-foreground">(eg, HER2 in breast cancer)</text>
        <text x="64" y="266" fontSize="3.6" className="fill-foreground">▘ Signaling molecules (eg, RAS) · ▘ Transcription factors (eg, MYC)</text>
        <text x="64" y="278" fontSize="3.6" className="fill-foreground">▘ Cell cycle regulators (eg, cyclins, CDKs)</text>
        <text x="64" y="294" fontSize="3.4" className="fill-muted-foreground">The cell makes its own growth signal or shorts the circuit.</text>

        <rect x="500" y="184" width="428" height="118" rx="10" className="fill-card stroke-border" />
        <text x="512" y="200" fontSize="4.6" fontWeight="800" className="fill-foreground">HALLMARK 2 — ANTI-GROWTH SIGNAL INSENSITIVITY</text>
        <text x="512" y="220" fontSize="3.6" className="fill-foreground">▘ Mutations in tumor suppressor genes (eg, Rb)</text>
        <text x="512" y="240" fontSize="3.6" className="fill-foreground">▘ Loss of E-cadherin function → loss of contact inhibition</text>
        <text x="522" y="248" fontSize="3.4" className="fill-muted-foreground">(eg, NF2 mutations)</text>
        <text x="512" y="270" fontSize="3.4" className="fill-muted-foreground">The cell ignores the stop signal — Rb releases the brake,</text>
        <text x="512" y="280" fontSize="3.4" className="fill-muted-foreground">E-cadherin loss dissolves contact inhibition.</text>
        <text x="512" y="294" fontSize="3.4" fontWeight="700" className="fill-emergency">E-CADHERIN IS THE GATE (shared with hallmark 8)</text>
      </g>

      {/* ===== PAIR 2 — death-immortality (hallmarks 3 + 4) ===== */}
      <g>
        <rect x="36" y="324" width="908" height="140" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="52" y="344" fontSize="8" fontWeight="800" className="fill-warning">PAIR 2 — DEATH + IMMORTALITY (hallmarks 3 + 4)</text>

        <rect x="52" y="356" width="440" height="98" rx="10" className="fill-card stroke-border" />
        <text x="64" y="372" fontSize="4.6" fontWeight="800" className="fill-foreground">HALLMARK 3 — EVASION OF APOPTOSIS</text>
        <text x="64" y="390" fontSize="3.7" fontWeight="700" className="fill-foreground">Mutations in genes that regulate apoptosis:</text>
        <text x="64" y="404" fontSize="3.6" className="fill-foreground">▘ TP53 — the pro-apoptotic gatekeeper lost</text>
        <text x="64" y="416" fontSize="3.6" className="fill-foreground">▘ BCL2 → follicular B cell lymphoma</text>
        <text x="74" y="424" fontSize="3.4" className="fill-muted-foreground">(t(14;18) puts BCL2 under IgH promoter)</text>
        <text x="64" y="440" fontSize="3.4" className="fill-muted-foreground">The cell refuses to die — TP53 lost, BCL2 overexpressed.</text>

        <rect x="500" y="356" width="428" height="98" rx="10" className="fill-card stroke-border" />
        <text x="512" y="372" fontSize="4.6" fontWeight="800" className="fill-foreground">HALLMARK 4 — LIMITLESS REPLICATIVE POTENTIAL</text>
        <text x="512" y="390" fontSize="3.7" fontWeight="700" className="fill-foreground">Reactivation of TELOMERASE →</text>
        <text x="512" y="402" fontSize="3.6" className="fill-foreground">maintenance and lengthening of telomeres →</text>
        <text x="512" y="414" fontSize="3.6" className="fill-foreground">prevention of chromosome shortening and cell aging.</text>
        <text x="512" y="436" fontSize="3.4" className="fill-muted-foreground">The cell never senesces — telomerase keeps the telomere.</text>
      </g>

      {/* ===== PAIR 3 — supply (hallmarks 5 + 6) ===== */}
      <g>
        <rect x="36" y="476" width="908" height="160" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="52" y="496" fontSize="8" fontWeight="800" className="fill-brand">PAIR 3 — SUPPLY (hallmarks 5 + 6)</text>

        <rect x="52" y="508" width="440" height="118" rx="10" className="fill-card stroke-border" />
        <text x="64" y="524" fontSize="4.6" fontWeight="800" className="fill-foreground">HALLMARK 5 — SUSTAINED ANGIOGENESIS</text>
        <text x="64" y="540" fontSize="3.6" className="fill-foreground">↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors.</text>
        <text x="64" y="552" fontSize="3.6" className="fill-foreground">Factors may be produced by tumor or stromal cells.</text>
        <text x="64" y="566" fontSize="3.6" className="fill-foreground">▘ Neoangiogenesis — sprout from existing capillaries</text>
        <text x="64" y="578" fontSize="3.6" className="fill-foreground">▘ Vasculogenesis — recruit from bone marrow</text>
        <text x="64" y="592" fontSize="3.6" className="fill-foreground">Vessels may be leaky and/or dilated.</text>
        <text x="64" y="610" fontSize="3.4" className="fill-muted-foreground">VEGF builds the supply road — leaky, dilated, feeding the tumor.</text>

        <rect x="500" y="508" width="428" height="118" rx="10" className="fill-card stroke-border" />
        <text x="512" y="524" fontSize="4.6" fontWeight="800" className="fill-foreground">HALLMARK 6 — WARBURG EFFECT</text>
        <text x="512" y="540" fontSize="3.6" className="fill-foreground">Shift of glucose metabolism from mitochondrial oxidative</text>
        <text x="512" y="548" fontSize="3.6" className="fill-foreground">phosphorylation to glycolysis, even under aerobic conditions.</text>
        <text x="512" y="562" fontSize="3.6" className="fill-foreground">Driven by altered metabolic enzymes:</text>
        <text x="512" y="574" fontSize="3.6" className="fill-foreground">▘ Pyruvate kinase M2 · ▘ LDH-A</text>
        <text x="512" y="588" fontSize="3.6" className="fill-foreground">Aerobic glycolysis supplies biosynthetic intermediates for</text>
        <text x="512" y="596" fontSize="3.6" className="fill-foreground">nucleotide, lipid, amino acid synthesis → ↑ lactate production.</text>
        <text x="512" y="612" fontSize="3.4" className="fill-muted-foreground">Trades ATP for biosynthesis — lactate (↑ LDH) is the tell.</text>
      </g>

      {/* ===== TRIO — spread (hallmarks 7 + 8 + 9) ===== */}
      <g>
        <rect x="36" y="648" width="908" height="226" rx="14" className="fill-secondary/40 stroke-emergency" />
        <text x="52" y="668" fontSize="8" fontWeight="800" className="fill-emergency">TRIO — SPREAD (hallmarks 7 + 8 + 9)</text>

        {/* Hallmark 7 — immune evasion */}
        <rect x="52" y="680" width="296" height="184" rx="10" className="fill-card stroke-border" />
        <text x="64" y="696" fontSize="4.2" fontWeight="800" className="fill-foreground">HALLMARK 7 — IMMUNE EVASION</text>
        <text x="64" y="712" fontSize="3.5" fontWeight="700" className="fill-foreground">Multiple escape mechanisms:</text>
        <text x="64" y="726" fontSize="3.4" className="fill-foreground">▘ ↓ MHC class I expression by tumor</text>
        <text x="74" y="734" fontSize="3.4" className="fill-foreground">cells → cytotoxic T cells unable</text>
        <text x="74" y="742" fontSize="3.4" className="fill-foreground">to recognize tumor cells.</text>
        <text x="64" y="758" fontSize="3.4" className="fill-foreground">▘ Tumor cells secrete immunosuppressive</text>
        <text x="74" y="766" fontSize="3.4" className="fill-foreground">factors (eg, TGF-β) and recruit</text>
        <text x="74" y="774" fontSize="3.4" className="fill-foreground">regulatory T cells.</text>
        <text x="64" y="790" fontSize="3.4" className="fill-foreground">▘ Tumor cells upregulate immune</text>
        <text x="74" y="798" fontSize="3.4" className="fill-foreground">checkpoint molecules, which inhibit</text>
        <text x="74" y="806" fontSize="3.4" className="fill-foreground">immune response.</text>
        <text x="64" y="824" fontSize="3.3" className="fill-muted-foreground">Hide (↓ MHC I), suppress (TGF-β + Tregs),</text>
        <text x="64" y="832" fontSize="3.3" className="fill-muted-foreground">brake (checkpoint molecules).</text>

        {/* Hallmark 8 — tissue invasion */}
        <rect x="356" y="680" width="296" height="184" rx="10" className="fill-card stroke-border" />
        <text x="368" y="696" fontSize="4.2" fontWeight="800" className="fill-foreground">HALLMARK 8 — TISSUE INVASION</text>
        <text x="368" y="714" fontSize="3.5" fontWeight="700" className="fill-foreground">The cascade (verbatim):</text>
        <text x="368" y="728" fontSize="3.4" className="fill-foreground">Loss of E-cadherin function →</text>
        <text x="378" y="736" fontSize="3.4" className="fill-foreground">loosening of intercellular junctions →</text>
        <text x="368" y="750" fontSize="3.4" className="fill-foreground">metalloproteinases degrade basement</text>
        <text x="378" y="758" fontSize="3.4" className="fill-foreground">membrane and ECM →</text>
        <text x="368" y="772" fontSize="3.4" className="fill-foreground">cells attach to ECM proteins</text>
        <text x="378" y="780" fontSize="3.4" className="fill-foreground">(eg, laminin, fibronectin) →</text>
        <text x="368" y="794" fontSize="3.4" className="fill-foreground">cells migrate through degraded ECM</text>
        <text x="378" y="802" fontSize="3.4" className="fill-foreground">("locomotion") →</text>
        <text x="368" y="816" fontSize="3.4" className="fill-foreground">vascular dissemination.</text>
        <text x="368" y="836" fontSize="3.3" className="fill-muted-foreground">E-CADHERIN IS THE GATE — shared</text>
        <text x="368" y="844" fontSize="3.3" className="fill-muted-foreground">with hallmark 2 (contact inhibition).</text>

        {/* Hallmark 9 — metastasis */}
        <rect x="660" y="680" width="268" height="184" rx="10" className="fill-card stroke-emergency" strokeWidth="1.2" />
        <text x="672" y="696" fontSize="4.2" fontWeight="800" className="fill-emergency">HALLMARK 9 — METASTASIS</text>
        <text x="672" y="714" fontSize="3.5" fontWeight="700" className="fill-foreground">The cascade (verbatim):</text>
        <text x="672" y="728" fontSize="3.4" className="fill-foreground">Tumor cells or emboli spread via</text>
        <text x="682" y="736" fontSize="3.4" className="fill-foreground">lymphatics or blood →</text>
        <text x="672" y="750" fontSize="3.4" className="fill-foreground">adhesion to endothelium →</text>
        <text x="672" y="762" fontSize="3.4" className="fill-foreground">extravasation and homing.</text>
        <text x="672" y="780" fontSize="3.4" className="fill-foreground">Site of metastasis can be predicted</text>
        <text x="682" y="788" fontSize="3.4" className="fill-foreground">by site of 1° tumor — the target</text>
        <text x="682" y="796" fontSize="3.4" className="fill-foreground">organ is often the first-encountered</text>
        <text x="682" y="804" fontSize="3.4" className="fill-foreground">capillary bed.</text>
        <text x="672" y="820" fontSize="3.4" className="fill-foreground">Some cancers show organ tropism</text>
        <text x="682" y="828" fontSize="3.4" className="fill-foreground">(eg, lung cancers commonly</text>
        <text x="682" y="836" fontSize="3.4" className="fill-foreground">metastasize to adrenals).</text>
      </g>

      {/* ===== THE INVASION-METASTASIS CASCADE FLOW ===== */}
      <g>
        <rect x="36" y="888" width="908" height="160" rx="14" className="fill-card stroke-border" />
        <text x="52" y="908" fontSize="8" fontWeight="800" className="fill-foreground">The invasion-metastasis cascade (hallmarks 8 → 9, as a flow)</text>

        {/* 6 steps left-to-right */}
        {[
          { x: 52, label: "E-CADHERIN LOSS", sub: "loosening of\nintercellular junctions" },
          { x: 200, label: "METALLOPROTEINASES", sub: "degrade basement\nmembrane and ECM" },
          { x: 348, label: "ECM ATTACHMENT", sub: "laminin, fibronectin" },
          { x: 496, label: "LOCOMOTION", sub: "migrate through\ndegraded ECM" },
          { x: 644, label: "VASCULAR DISSEMINATION", sub: "lymphatics or blood" },
          { x: 792, label: "ADHESION → EXTRAVASATION → HOMING", sub: "first-capillary-bed rule\norgan tropism (lung → adrenals)" },
        ].map((s, i) => (
          <g key={i}>
            <rect x={s.x} y={924} width={140} height={56} rx={8} className="fill-brand-soft/40 stroke-brand" />
            <text x={s.x + 70} y={944} textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">{s.label}</text>
            {s.sub.split("\n").map((line, j) => (
              <text key={j} x={s.x + 70} y={956 + j * 8} textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">{line}</text>
            ))}
            {i < 5 && (
              <g>
                <path d={`M ${s.x + 140} 952 L ${s.x + 156} 952`} className="stroke-brand" strokeWidth="1.4" />
                <path d={`M ${s.x + 156} 952 L ${s.x + 149} 949 M ${s.x + 156} 952 L ${s.x + 149} 955`} className="stroke-brand" strokeWidth="1.4" />
              </g>
            )}
          </g>
        ))}
        <text x="52" y="1004" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">The cascade in one line: E-cadherin loss → metalloproteinases → ECM attachment (laminin, fibronectin) → locomotion → vascular dissemination</text>
        <text x="52" y="1014" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">→ adhesion to endothelium → extravasation and homing — the first-capillary-bed rule, with organ tropism (lung → adrenals) as the named exception.</text>
        <text x="52" y="1032" fontSize="4.2" fontWeight="800" className="fill-emergency">LYMPHATICS OR BLOOD, THEN HOMING — the metastasis rule verbatim.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1060" width="932" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1078" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 239 / book 217 (Pathology — Neoplasia: Hallmarks of cancer)</text>
        <text x="42" y="1092" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 239). The page is a single 9-row</text>
        <text x="42" y="1102" fontSize="5" className="fill-muted-foreground">HALLMARK | MECHANISM table — pure text, no figures. Adapted as the registry visual (the 9-hallmark grid); table carried verbatim in the note.</text>
        <text x="42" y="1114" fontSize="5" className="fill-muted-foreground">No copyrighted photographs. No margin mnemonics (VLM confirmed); the KYP memory layer is original.</text>
      </g>
    </svg>
  );
}

// P14 — Checkpoint + epidemiology map (an original KYP adaptation of
// book 218). The page has ONE vector figure — the immune checkpoint
// interactions diagram (T cell + APC + tumor cell with PD-1/PD-L1,
// CTLA-4/CD28/B7, TCR/MHC I, MHC II, T cell activation, and the 7
// drug labels) — redrawn as an original KYP figure. The cancer
// epidemiology block is a 4-column table rendered as a grid.

export function CheckpointEpidemiologyMap() {
  const w = 980;
  const h = 1240;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cancer immunotherapy and epidemiology — the map, an original KYP adaptation of the source page (book 218 — the immune checkpoint interactions definition; the PD-1/PD-L1 axis with 6 antibodies [cemiplimab, nivolumab, pembrolizumab anti-PD-1; atezolizumab, durvalumab, avelumab anti-PD-L1]; the CTLA-4/CD28/B7 axis with ipilimumab; the checkpoint interactions figure [T cell + APC + tumor cell with MHC I/II, TCR, CD28, B7, CTLA-4, PD-1, PD-L1, antigen, T cell activation] redrawn as an original KYP figure; the cancer epidemiology block [skin-cancer-most-common rule, the 4-column MALES/FEMALES/CHILDREN/NOTES table with incidence and mortality rows, and the two NOTES]; no copyrighted photographs on the page). TOP — THE DEFINITION. UPPER-LEFT — THE CHECKPOINT FIGURE (an original KYP redraw): T cell + APC + tumor cell with the two axes (CTLA-4/CD28/B7 priming brake with ipilimumab; PD-1/PD-L1 effector brake with 6 antibodies). UPPER-RIGHT — THE TWO AXES panels (the priming brake + the effector brake). LOWER — THE EPIDEMIOLOGY GRID (4-column MALES/FEMALES/CHILDREN/NOTES with incidence and mortality rows). Footer carries the source attribution, the census note, and the copyright boundary." className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Cancer immunotherapy &amp; epidemiology — the map (original KYP adaptation)</text>
        <rect x="740" y="24" width="192" height="18" className="fill-brand-soft" />
        <text x="836" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">2 brakes · 7 antibodies · 1 table</text>
      </g>

      {/* ===== DEFINITION band ===== */}
      <g>
        <rect x="36" y="80" width="908" height="60" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="102" fontSize="8" fontWeight="800" className="fill-foreground">The definition (book 218 — verbatim)</text>
        <text x="52" y="120" fontSize="4.6" fontWeight="700" className="fill-foreground">Immune checkpoint interactions: signals that modulate T-cell activation and function → ↓ immune response against tumor cells. Targeted by several cancer immunotherapies.</text>
        <text x="52" y="132" fontSize="4.2" className="fill-muted-foreground">Two axes: (1) PD-1/PD-L1 (effector brake, 6 antibodies); (2) CTLA-4/CD28/B7 (priming brake, 1 antibody — ipilimumab). Total: 7 antibodies covering 2 axes.</text>
      </g>

      {/* ===== UPPER-LEFT — the checkpoint figure (KYP redraw) ===== */}
      <g>
        <rect x="36" y="152" width="500" height="440" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="52" y="172" fontSize="8" fontWeight="800" className="fill-foreground">The checkpoint figure (book 218 — an original KYP redraw)</text>

        {/* APC (left) */}
        <g>
          <rect x="64" y="200" width="120" height="120" rx="10" className="fill-card stroke-border" />
          <text x="124" y="218" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">APC</text>
          <text x="124" y="240" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">MHC II</text>
          <rect x="100" y="246" width="48" height="10" rx="3" className="fill-brand-soft stroke-brand" strokeWidth="0.5" />
          <text x="124" y="264" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">B7</text>
          <rect x="104" y="270" width="40" height="8" rx="3" className="fill-warning-soft stroke-warning" strokeWidth="0.5" />
          <text x="124" y="290" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Antigen</text>
          <circle cx="124" cy="302" r="5" className="fill-emergency-soft stroke-emergency" strokeWidth="0.5" />
        </g>

        {/* T cell (center) */}
        <g>
          <circle cx="260" cy="260" r="60" className="fill-card stroke-border" strokeWidth="1.2" />
          <text x="260" y="220" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">T cell</text>
          {/* TCR */}
          <rect x="220" y="232" width="36" height="8" rx="3" className="fill-brand-soft stroke-brand" strokeWidth="0.5" />
          <text x="238" y="226" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">TCR</text>
          {/* CD28 */}
          <rect x="270" y="232" width="36" height="8" rx="3" className="fill-brand-soft stroke-brand" strokeWidth="0.5" />
          <text x="288" y="226" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">CD28</text>
          {/* CTLA-4 */}
          <rect x="270" y="248" width="36" height="8" rx="3" className="fill-emergency-soft stroke-emergency" strokeWidth="0.5" />
          <text x="288" y="264" textAnchor="middle" fontSize="3.4" className="fill-emergency">CTLA-4</text>
          {/* PD-1 */}
          <rect x="270" y="280" width="36" height="8" rx="3" className="fill-warning-soft stroke-warning" strokeWidth="0.5" />
          <text x="288" y="296" textAnchor="middle" fontSize="3.4" className="fill-warning">PD-1</text>
          <text x="260" y="312" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">T cell activation</text>
        </g>

        {/* Tumor cell (right) */}
        <g>
          <rect x="370" y="240" width="120" height="80" rx="10" className="fill-card stroke-emergency" strokeWidth="1" />
          <text x="430" y="258" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">Tumor cell</text>
          <text x="430" y="276" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">MHC I</text>
          <rect x="406" y="282" width="48" height="8" rx="3" className="fill-brand-soft stroke-brand" strokeWidth="0.5" />
          <text x="430" y="300" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-warning">PD-L1</text>
          <rect x="410" y="306" width="40" height="8" rx="3" className="fill-warning-soft stroke-warning" strokeWidth="0.5" />
        </g>

        {/* interaction arrows */}
        {/* TCR-MHC II-Antigen (APC to T cell) */}
        <path d="M 184 250 L 220 248" className="stroke-brand" strokeWidth="1.2" />
        <text x="200" y="240" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">TCR–MHC II–Ag</text>
        {/* CD28-B7 (APC to T cell) */}
        <path d="M 184 274 L 270 236" className="stroke-brand" strokeWidth="1" strokeDasharray="2 2" />
        <text x="220" y="262" fontSize="3.2" className="fill-muted-foreground">CD28–B7 (costim)</text>
        {/* CTLA-4 steals B7 (the brake) */}
        <path d="M 270 252 L 184 278" className="stroke-emergency" strokeWidth="1" />
        <text x="220" y="280" fontSize="3.2" className="fill-emergency">CTLA-4 steals B7</text>
        {/* PD-1 - PD-L1 (T cell to tumor) */}
        <path d="M 306 284 L 370 284" className="stroke-warning" strokeWidth="1.2" />
        <text x="338" y="276" textAnchor="middle" fontSize="3.2" className="fill-warning">PD-1–PD-L1</text>

        {/* drug labels — CTLA-4 side (ipilimumab) */}
        <g>
          <rect x="64" y="340" width="120" height="48" rx="8" className="fill-emergency-soft stroke-emergency" />
          <text x="124" y="356" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">ANTI-CTLA-4</text>
          <text x="124" y="368" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Ipilimumab</text>
          <text x="124" y="380" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">priming brake</text>
        </g>

        {/* drug labels — anti-PD-L1 (tumor side) */}
        <g>
          <rect x="194" y="340" width="150" height="48" rx="8" className="fill-warning-soft stroke-warning" />
          <text x="269" y="356" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">ANTI-PD-L1 (tumor side)</text>
          <text x="269" y="368" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Atezolizumab · Durvalumab</text>
          <text x="269" y="378" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Avelumab</text>
        </g>

        {/* drug labels — anti-PD-1 (T cell side) */}
        <g>
          <rect x="354" y="340" width="150" height="48" rx="8" className="fill-brand-soft stroke-brand" />
          <text x="429" y="356" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">ANTI-PD-1 (T cell side)</text>
          <text x="429" y="368" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Cemiplimab · Nivolumab</text>
          <text x="429" y="378" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Pembrolizumab</text>
        </g>

        {/* the axis labels */}
        <text x="64" y="410" fontSize="4" fontWeight="800" className="fill-emergency">AXIS 2 — THE PRIMING BRAKE (CTLA-4)</text>
        <text x="64" y="422" fontSize="3.6" fontWeight="700" className="fill-foreground">CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of costimulatory signal.</text>
        <text x="64" y="432" fontSize="3.6" fontWeight="700" className="fill-foreground">Ipilimumab releases the theft, restoring costimulation at the priming stage.</text>

        <text x="64" y="452" fontSize="4" fontWeight="800" className="fill-warning">AXIS 1 — THE EFFECTOR BRAKE (PD-1/PD-L1)</text>
        <text x="64" y="464" fontSize="3.6" fontWeight="700" className="fill-foreground">PD-1 (on T cells) binds PD-L1/2 (on tumor or microenvironment cells) → T-cell exhaustion.</text>
        <text x="64" y="474" fontSize="3.6" fontWeight="700" className="fill-foreground">6 antibodies release the brake: 3 anti-PD-1 (T cell side) + 3 anti-PD-L1 (tumor side).</text>

        <text x="64" y="496" fontSize="3.6" className="fill-muted-foreground">The two brakes map to two stages: CTLA-4 = priming (APC-T cell, costimulation);</text>
        <text x="64" y="506" fontSize="3.6" className="fill-muted-foreground">PD-1 = effector (tumor-T cell, exhaustion). 7 antibodies total: 1 + 3 + 3.</text>
        <text x="64" y="528" fontSize="4" fontWeight="800" className="fill-emergency">PD-1 T CELLS, PD-L1 TUMOR · CTLA-4 STEALS B7 FROM CD28</text>
      </g>

      {/* ===== UPPER-RIGHT — the two axes summary panels ===== */}
      <g>
        <rect x="548" y="152" width="396" height="440" rx="14" className="fill-card stroke-border" />
        <text x="564" y="172" fontSize="8" fontWeight="800" className="fill-foreground">The 7-antibody roster (book 218)</text>

        {/* Anti-CTLA-4 */}
        <rect x="560" y="184" width="372" height="80" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="566" y="200" fontSize="4.4" fontWeight="800" className="fill-emergency">ANTI-CTLA-4 — 1 antibody (priming stage)</text>
        <text x="566" y="216" fontSize="4" fontWeight="800" className="fill-foreground">▘ Ipilimumab</text>
        <text x="566" y="232" fontSize="3.6" className="fill-muted-foreground">CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of costimulatory signal.</text>
        <text x="566" y="242" fontSize="3.6" className="fill-muted-foreground">Ipilimumab releases the theft. Immune-related adverse effects: colitis, hypophysitis, dermatitis.</text>
        <text x="566" y="256" fontSize="3.4" fontWeight="700" className="fill-foreground">THE PRIMING BRAKE — "don't activate"</text>

        {/* Anti-PD-1 */}
        <rect x="560" y="274" width="180" height="120" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="566" y="290" fontSize="4.2" fontWeight="800" className="fill-brand">ANTI-PD-1 — 3 antibodies</text>
        <text x="566" y="304" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Cemiplimab</text>
        <text x="566" y="316" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Nivolumab</text>
        <text x="566" y="328" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Pembrolizumab</text>
        <text x="566" y="346" fontSize="3.4" className="fill-muted-foreground">Bind PD-1 ON THE T CELL.</text>
        <text x="566" y="358" fontSize="3.4" className="fill-muted-foreground">Release the effector brake</text>
        <text x="566" y="368" fontSize="3.4" className="fill-muted-foreground">from the T-cell side.</text>
        <text x="566" y="384" fontSize="3.4" fontWeight="700" className="fill-brand">THE EFFECTOR BRAKE (T-cell side)</text>

        {/* Anti-PD-L1 */}
        <rect x="752" y="274" width="180" height="120" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="758" y="290" fontSize="4.2" fontWeight="800" className="fill-warning">ANTI-PD-L1 — 3 antibodies</text>
        <text x="758" y="304" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Atezolizumab</text>
        <text x="758" y="316" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Durvalumab</text>
        <text x="758" y="328" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Avelumab</text>
        <text x="758" y="346" fontSize="3.4" className="fill-muted-foreground">Bind PD-L1 ON THE TUMOR CELL</text>
        <text x="758" y="356" fontSize="3.4" className="fill-muted-foreground">(or microenvironment cells).</text>
        <text x="758" y="368" fontSize="3.4" className="fill-muted-foreground">Release the brake from the</text>
        <text x="758" y="378" fontSize="3.4" className="fill-muted-foreground">tumor-cell side.</text>
        <text x="758" y="384" fontSize="3.4" fontWeight="700" className="fill-warning">THE EFFECTOR BRAKE (tumor side)</text>

        {/* the count summary */}
        <rect x="560" y="404" width="372" height="80" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="566" y="420" fontSize="4.4" fontWeight="800" className="fill-foreground">THE COUNT — 7 antibodies, 2 axes, 2 stages</text>
        <text x="566" y="436" fontSize="3.6" fontWeight="700" className="fill-foreground">1 anti-CTLA-4 (ipilimumab) + 3 anti-PD-1 (cemiplimab, nivolumab, pembrolizumab)</text>
        <text x="566" y="446" fontSize="3.6" fontWeight="700" className="fill-foreground">+ 3 anti-PD-L1 (atezolizumab, durvalumab, avelumab) = 7 total.</text>
        <text x="566" y="462" fontSize="3.4" className="fill-muted-foreground">All 7 end in -mab (humanized monoclonal). The -li- / -ni- / -pe- / -ate- / -du- /</text>
        <text x="566" y="472" fontSize="3.4" className="fill-muted-foreground">-ave- / -cem- prefixes are the drug-name-to-target match.</text>
        <text x="566" y="486" fontSize="3.4" fontWeight="700" className="fill-emergency">ONE antibody (ipilimumab) = CTLA-4 = priming; SIX antibodies = PD-1/PD-L1 = effector.</text>
      </g>

      {/* ===== LOWER — the epidemiology grid ===== */}
      <g>
        <rect x="36" y="608" width="908" height="416" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="628" fontSize="8" fontWeight="800" className="fill-foreground">Cancer epidemiology (book 218 — verbatim)</text>

        {/* skin cancer rule */}
        <rect x="52" y="640" width="876" height="40" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="490" y="660" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">SKIN IS MOST COMMON — skin cancer (basal &gt; squamous &gt;&gt; melanoma) is the most common cancer (not included below)</text>
        <text x="490" y="672" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">excluded from the ranked incidence/mortality lists — sits above the table as the overall-most-common qualifier</text>

        {/* table header */}
        <rect x="52" y="688" width="160" height="24" className="fill-secondary" />
        <text x="132" y="704" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">ROW</text>
        <rect x="216" y="688" width="200" height="24" className="fill-brand-soft" />
        <text x="316" y="704" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">MALES</text>
        <rect x="420" y="688" width="200" height="24" className="fill-brand-soft" />
        <text x="520" y="704" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">FEMALES</text>
        <rect x="624" y="688" width="180" height="24" className="fill-warning-soft" />
        <text x="714" y="704" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">CHILDREN (AGE 0-14)</text>
        <rect x="808" y="688" width="120" height="24" className="fill-card stroke-border" />
        <text x="868" y="704" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">NOTES</text>

        {/* incidence row */}
        <rect x="52" y="716" width="160" height="80" className="fill-card stroke-border" />
        <text x="132" y="740" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">CANCER</text>
        <text x="132" y="752" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">INCIDENCE</text>
        <rect x="216" y="716" width="200" height="80" className="fill-card stroke-border" />
        <text x="226" y="734" fontSize="3.7" fontWeight="700" className="fill-foreground">1. Prostate</text>
        <text x="226" y="748" fontSize="3.7" fontWeight="700" className="fill-foreground">2. Lung</text>
        <text x="226" y="762" fontSize="3.7" fontWeight="700" className="fill-foreground">3. Colon/rectum</text>
        <rect x="420" y="716" width="200" height="80" className="fill-card stroke-border" />
        <text x="430" y="734" fontSize="3.7" fontWeight="700" className="fill-foreground">1. Breast</text>
        <text x="430" y="748" fontSize="3.7" fontWeight="700" className="fill-foreground">2. Lung</text>
        <text x="430" y="762" fontSize="3.7" fontWeight="700" className="fill-foreground">3. Colon/rectum</text>
        <rect x="624" y="716" width="180" height="80" className="fill-card stroke-border" />
        <text x="634" y="734" fontSize="3.7" fontWeight="700" className="fill-foreground">1. Leukemia</text>
        <text x="634" y="748" fontSize="3.7" fontWeight="700" className="fill-foreground">2. CNS</text>
        <text x="634" y="762" fontSize="3.7" fontWeight="700" className="fill-foreground">3. Neuroblastoma</text>
        <rect x="808" y="716" width="120" height="80" className="fill-card stroke-border" />
        <text x="868" y="740" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">Lung cancer</text>
        <text x="868" y="750" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">incidence has ↓ in</text>
        <text x="868" y="760" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">males, not females</text>

        {/* mortality row */}
        <rect x="52" y="800" width="160" height="80" className="fill-card stroke-border" />
        <text x="132" y="824" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">CANCER</text>
        <text x="132" y="836" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">MORTALITY</text>
        <rect x="216" y="800" width="200" height="80" className="fill-card stroke-border" />
        <text x="226" y="818" fontSize="3.7" fontWeight="700" className="fill-foreground">1. Lung</text>
        <text x="226" y="832" fontSize="3.7" fontWeight="700" className="fill-foreground">2. Prostate</text>
        <text x="226" y="846" fontSize="3.7" fontWeight="700" className="fill-foreground">3. Colon/rectum</text>
        <rect x="420" y="800" width="200" height="80" className="fill-card stroke-border" />
        <text x="430" y="818" fontSize="3.7" fontWeight="700" className="fill-foreground">1. Lung</text>
        <text x="430" y="832" fontSize="3.7" fontWeight="700" className="fill-foreground">2. Breast</text>
        <text x="430" y="846" fontSize="3.7" fontWeight="700" className="fill-foreground">3. Colon/rectum</text>
        <rect x="624" y="800" width="180" height="80" className="fill-card stroke-border" />
        <text x="634" y="818" fontSize="3.7" fontWeight="700" className="fill-foreground">1. Leukemia</text>
        <text x="634" y="832" fontSize="3.7" fontWeight="700" className="fill-foreground">2. CNS</text>
        <text x="634" y="846" fontSize="3.7" fontWeight="700" className="fill-foreground">3. Neuroblastoma</text>
        <rect x="808" y="800" width="120" height="80" className="fill-card stroke-border" />
        <text x="868" y="824" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">Cancer is 2nd</text>
        <text x="868" y="834" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">leading cause of</text>
        <text x="868" y="844" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">US death (heart 1st)</text>

        {/* the divergence callout */}
        <rect x="52" y="888" width="876" height="56" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="490" y="906" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-emergency">THE DIVERGENCE — incidence leader = sex-specific (prostate/breast); mortality leader = lung (both sexes)</text>
        <text x="490" y="918" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Lung cancer leads mortality despite ranking second in incidence because lung cancer kills efficiently (high case-fatality).</text>
        <text x="490" y="930" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Children's incidence and mortality lists are identical: leukemia, CNS, neuroblastoma — the pediatric triad.</text>

        {/* the two notes */}
        <text x="52" y="968" fontSize="4" fontWeight="800" className="fill-foreground">THE TWO NOTES (verbatim):</text>
        <text x="52" y="982" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Lung cancer incidence has ↓ in males, but has not changed significantly in females. (the smoking-cessation payoff, decades later — males quit first)</text>
        <text x="52" y="996" fontSize="3.6" fontWeight="700" className="fill-foreground">▘ Cancer is the 2nd leading cause of death in the United States (heart disease is 1st).</text>
        <text x="52" y="1014" fontSize="4" fontWeight="800" className="fill-emergency">SKIN IS MOST COMMON · SECOND TO HEART</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1036" width="932" height="80" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1054" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 240 / book 218 (Pathology — Neoplasia: Immune checkpoint interactions; Cancer epidemiology)</text>
        <text x="42" y="1068" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 240). The ONE vector figure — the immune</text>
        <text x="42" y="1078" fontSize="5" className="fill-muted-foreground">checkpoint interactions diagram (T cell + APC + tumor cell with PD-1/PD-L1, CTLA-4/CD28/B7, TCR/MHC I, MHC II, T cell activation, 7 drug labels)</text>
        <text x="42" y="1088" fontSize="5" className="fill-muted-foreground">— redrawn as an ORIGINAL KYP figure. The epidemiology block is a 4-column table carried verbatim in the note. No photographs; no margin mnemonics.</text>
      </g>
    </svg>
  );
}

// P15 — Metastasis pattern map (an original KYP adaptation of book
// 219). TWO copyrighted photographs on the page (A = bone axial-
// skeleton, B = liver parenchyma) — described in text only, never
// reproduced (the M32 convention). The CLaSH rule (the source's own
// acronym, attributed), the 4-hematogenous-carcinoma exception list,
// and the 4-row site-of-metastasis table are pure text, rendered as
// the registry visual grid.

export function MetastasisPatternMap() {
  const w = 980;
  const h = 1180;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Metastasis organ patterns and routes — the map, an original KYP adaptation of the source page (book 219 — the CLaSH rule [the source's own acronym: Carcinomas-Lymphatics, Sarcomas-Hematogenous, attributed]; the four hematogenous-carcinoma exceptions [follicular thyroid, choriocarcinoma, renal cell, hepatocellular]; the metastasis-vs-primary rule [more common than 1° in bone/liver/lung/brain; multiple vs solitary lesions]; the 4-row site-of-metastasis table [Bone: prostate, breast >> lung > kidney, colon with axial-skeleton predilection and blastic/mixed/lytic fork; Liver: colon > breast >> pancreas, lung, prostate with scattered-parenchyma note; Lung: colon, breast >> kidney, prostate with bilateral note; Brain: lung > breast >> melanoma > colon, prostate with gray-white-junction note]; two copyrighted photographs [A = bone axial-skeleton, B = liver parenchyma] described in text, never reproduced). TOP — THE CLaSH RULE + 4 EXCEPTIONS + METASTASIS-VS-PRIMARY RULE. MIDDLE — THE 4-ROW SITE GRID (Bone, Liver, Lung, Brain). BOTTOM-LEFT — THE BONE BLASTIC/MIXED/LYTIC FORK. BOTTOM-RIGHT — THE IMAGING HEURISTIC. Footer carries the source attribution, the census note, and the copyright boundary." className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Metastasis: organ patterns &amp; routes — the map (original KYP adaptation)</text>
        <rect x="740" y="24" width="192" height="18" className="fill-brand-soft" />
        <text x="836" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">CLaSH · 4 exceptions · 4 sites</text>
      </g>

      {/* ===== TOP — CLaSH rule + 4 exceptions + metastasis-vs-primary ===== */}
      <g>
        <rect x="36" y="80" width="908" height="180" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="100" fontSize="8" fontWeight="800" className="fill-foreground">The route rule, the exceptions, and the imaging heuristic (book 219 — verbatim)</text>

        {/* CLaSH rule */}
        <rect x="52" y="112" width="440" height="60" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="62" y="128" fontSize="4.6" fontWeight="800" className="fill-brand">THE CLaSH RULE (source's own acronym — attributed)</text>
        <text x="62" y="144" fontSize="4" fontWeight="700" className="fill-foreground">Most Carcinomas spread via Lymphatics; most Sarcomas spread</text>
        <text x="62" y="154" fontSize="4" fontWeight="700" className="fill-foreground">Hematogenously (CLaSH).</text>
        <text x="62" y="166" fontSize="3.6" className="fill-muted-foreground">The route default — carcinoma to nodes, sarcoma to blood.</text>

        {/* 4 exceptions */}
        <rect x="500" y="112" width="428" height="60" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="510" y="128" fontSize="4.6" fontWeight="800" className="fill-emergency">THE FOUR HEMATOGENOUS CARCINOMAS (exceptions)</text>
        <text x="510" y="142" fontSize="3.7" fontWeight="700" className="fill-foreground">▘ Follicular thyroid carcinoma (angioinvasion)</text>
        <text x="510" y="152" fontSize="3.7" fontWeight="700" className="fill-foreground">▘ Choriocarcinoma (early blood-vessel invasion)</text>
        <text x="510" y="162" fontSize="3.7" fontWeight="700" className="fill-foreground">▘ Renal cell carcinoma (renal-vein invasion) · ▘ Hepatocellular (hepatic-vein)</text>

        {/* metastasis-vs-primary rule */}
        <rect x="52" y="180" width="876" height="68" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="62" y="196" fontSize="4.6" fontWeight="800" className="fill-warning">THE METASTASIS-VS-PRIMARY RULE</text>
        <text x="62" y="210" fontSize="3.8" fontWeight="700" className="fill-foreground">Metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs.</text>
        <text x="62" y="222" fontSize="3.8" fontWeight="700" className="fill-foreground">Metastases often appear as MULTIPLE lesions (vs 1° tumors which generally appear as SOLITARY lesions).</text>
        <text x="62" y="238" fontSize="3.6" className="fill-muted-foreground">The imaging heuristic — multiple lesions in these 4 organs = metastasis until proven otherwise.</text>
      </g>

      {/* ===== MIDDLE — the 4-row site grid ===== */}
      <g>
        <rect x="36" y="272" width="908" height="430" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="292" fontSize="8" fontWeight="800" className="fill-foreground">The 4-row site-of-metastasis table (book 219 — verbatim)</text>

        {/* header */}
        <rect x="52" y="304" width="120" height="20" className="fill-secondary" />
        <text x="112" y="318" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">SITE</text>
        <rect x="172" y="304" width="440" height="20" className="fill-brand-soft" />
        <text x="392" y="318" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">10 TUMOR</text>
        <rect x="612" y="304" width="316" height="20" className="fill-card stroke-border" />
        <text x="770" y="318" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">NOTES</text>

        {/* Bone row */}
        <rect x="52" y="326" width="120" height="100" className="fill-card stroke-border" />
        <text x="112" y="358" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">Bone</text>
        <text x="112" y="372" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">photograph A</text>
        <text x="112" y="382" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">(described)</text>
        <rect x="172" y="326" width="440" height="100" className="fill-card stroke-border" />
        <text x="182" y="346" fontSize="4" fontWeight="800" className="fill-foreground">Prostate, breast &gt;&gt; lung &gt; kidney, colon</text>
        <text x="182" y="362" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the first-listed tumors — prostate and breast dominate</text>
        <text x="182" y="378" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the axial-skeleton predilection; lung, kidney, colon trail</text>
        <text x="182" y="394" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">in frequency.</text>
        <text x="182" y="414" fontSize="3.6" fontWeight="800" className="fill-emergency">BLASTIC: prostate, SCLC · MIXED: breast · LYTIC: kidney, colon, NSCLC</text>
        <rect x="612" y="326" width="316" height="100" className="fill-card stroke-border" />
        <text x="622" y="346" fontSize="3.7" fontWeight="700" className="fill-foreground">Predilection for axial skeleton A.</text>
        <text x="622" y="362" fontSize="3.7" fontWeight="700" className="fill-foreground">Bone metastasis can be:</text>
        <text x="622" y="376" fontSize="3.6" className="fill-foreground">▘ Blastic (eg, prostate, small cell lung cancer)</text>
        <text x="622" y="388" fontSize="3.6" className="fill-foreground">▘ Mixed (eg, breast)</text>
        <text x="622" y="400" fontSize="3.6" className="fill-foreground">▘ Lytic (eg, kidney, colon, NSCLC)</text>
        <text x="622" y="418" fontSize="3.4" className="fill-muted-foreground">[Photo A, described: axial-skeleton image — copyrighted]</text>

        {/* Liver row */}
        <rect x="52" y="430" width="120" height="80" className="fill-card stroke-border" />
        <text x="112" y="462" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">Liver</text>
        <text x="112" y="476" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">photograph B</text>
        <text x="112" y="486" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">(described)</text>
        <rect x="172" y="430" width="440" height="80" className="fill-card stroke-border" />
        <text x="182" y="450" fontSize="4" fontWeight="800" className="fill-foreground">Colon &gt; breast &gt;&gt; pancreas, lung, prostate</text>
        <text x="182" y="466" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">colon leads via the portal-vein first-capillary-bed rule</text>
        <text x="182" y="482" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(P13's metastasis hallmark); breast second; pancreas,</text>
        <text x="182" y="496" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">lung, prostate trail.</text>
        <rect x="612" y="430" width="316" height="80" className="fill-card stroke-border" />
        <text x="622" y="450" fontSize="3.7" fontWeight="700" className="fill-foreground">Scattered throughout liver parenchyma B.</text>
        <text x="622" y="466" fontSize="3.6" className="fill-muted-foreground">[Photo B, described: liver-parenchyma image —</text>
        <text x="622" y="476" fontSize="3.6" className="fill-muted-foreground">copyrighted, never reproduced.]</text>
        <text x="622" y="494" fontSize="3.4" className="fill-muted-foreground">Multiple deposits throughout the parenchyma.</text>

        {/* Lung row */}
        <rect x="52" y="514" width="120" height="60" className="fill-card stroke-border" />
        <text x="112" y="548" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">Lung</text>
        <rect x="172" y="514" width="440" height="60" className="fill-card stroke-border" />
        <text x="182" y="534" fontSize="4" fontWeight="800" className="fill-foreground">Colon, breast &gt;&gt; kidney, prostate</text>
        <text x="182" y="550" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">colon and breast via hematogenous spread to the pulmonary</text>
        <text x="182" y="562" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">capillary bed; kidney and prostate trail.</text>
        <rect x="612" y="514" width="316" height="60" className="fill-card stroke-border" />
        <text x="622" y="534" fontSize="3.7" fontWeight="700" className="fill-foreground">Typically involve both lungs.</text>
        <text x="622" y="552" fontSize="3.4" className="fill-muted-foreground">The bilateral hematogenous deposit pattern.</text>

        {/* Brain row */}
        <rect x="52" y="578" width="120" height="60" className="fill-card stroke-border" />
        <text x="112" y="612" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">Brain</text>
        <rect x="172" y="578" width="440" height="60" className="fill-card stroke-border" />
        <text x="182" y="598" fontSize="4" fontWeight="800" className="fill-foreground">Lung &gt; breast &gt;&gt; melanoma &gt; colon, prostate</text>
        <text x="182" y="614" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">lung first (the most common source of brain mets); breast second;</text>
        <text x="182" y="626" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">melanoma third (the neurotropic tumor); colon and prostate trail.</text>
        <rect x="612" y="578" width="316" height="60" className="fill-card stroke-border" />
        <text x="622" y="598" fontSize="3.7" fontWeight="700" className="fill-foreground">Usually seen at gray-white matter junction.</text>
        <text x="622" y="614" fontSize="3.4" className="fill-muted-foreground">The hemodynamic deposit site — white matter's narrow</text>
        <text x="622" y="624" fontSize="3.4" className="fill-muted-foreground">capillaries trap embolic tumor cells.</text>

        {/* summary line */}
        <text x="52" y="660" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">The 4-row grid: Bone leads prostate+breast (axial skeleton, blastic/mixed/lytic); Liver leads colon (portal bed); Lung leads colon+breast (bilateral);</text>
        <text x="52" y="672" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Brain leads lung+breast+melanoma (gray-white junction). In all 4 organs, metastasis is more common than primary disease.</text>
        <text x="52" y="690" fontSize="4.2" fontWeight="800" className="fill-emergency">MULTIPLE METASTASES, LONE PRIMARY — the imaging heuristic verbatim.</text>
      </g>

      {/* ===== BOTTOM-LEFT — the bone blastic/mixed/lytic fork ===== */}
      <g>
        <rect x="36" y="716" width="500" height="240" rx="14" className="fill-card stroke-border" />
        <text x="52" y="736" fontSize="8" fontWeight="800" className="fill-foreground">The bone blastic/mixed/lytic fork (book 219 — verbatim)</text>

        <rect x="52" y="748" width="156" height="100" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="130" y="766" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">BLASTIC</text>
        <text x="130" y="782" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">(sclerotic, ↑ uptake)</text>
        <text x="130" y="802" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Prostate</text>
        <text x="130" y="816" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Small cell lung cancer</text>
        <text x="130" y="836" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the osteoblastic response</text>

        <rect x="216" y="748" width="156" height="100" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="294" y="766" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-warning">MIXED</text>
        <text x="294" y="782" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">(both responses)</text>
        <text x="294" y="808" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Breast</text>
        <text x="294" y="836" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">osteoblastic + osteoclastic</text>

        <rect x="380" y="748" width="144" height="100" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="452" y="766" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">LYTIC</text>
        <text x="452" y="782" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">(destructive, cold spots)</text>
        <text x="452" y="802" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Kidney · Colon</text>
        <text x="452" y="816" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">NSCLC</text>
        <text x="452" y="836" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the osteoclastic response</text>

        <rect x="52" y="858" width="472" height="42" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="288" y="874" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">THE PRIMARY NAMES THE RESPONSE</text>
        <text x="288" y="886" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Prostate or SCLC = blastic; breast = mixed; kidney, colon, or NSCLC = lytic</text>
        <text x="288" y="894" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the bone-response fork resolves the imaging pattern from the primary tumor's name</text>

        <text x="52" y="916" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">On bone scan: blastic = intense uptake (osteoblastic); lytic = cold spots initially (osteoclastic, uptake later</text>
        <text x="52" y="926" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">with healing); mixed = patchy uptake. On plain film: blastic = sclerotic; lytic = radiolucent/destructive.</text>
        <text x="52" y="944" fontSize="4.2" fontWeight="800" className="fill-emergency">BLASTIC, MIXED, LYTIC — the bone-response fork verbatim.</text>
      </g>

      {/* ===== BOTTOM-RIGHT — the imaging heuristic ===== */}
      <g>
        <rect x="548" y="716" width="396" height="240" rx="14" className="fill-card stroke-border" />
        <text x="564" y="736" fontSize="8" fontWeight="800" className="fill-foreground">The imaging heuristic (book 219 — verbatim)</text>

        <rect x="560" y="748" width="372" height="80" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="746" y="766" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">METASTASES = MULTIPLE LESIONS</text>
        <text x="746" y="782" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Metastases often appear as MULTIPLE lesions.</text>
        <text x="746" y="798" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">In bone, liver, lung, brain — multiple lesions are</text>
        <text x="746" y="808" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">metastases until a primary is found.</text>
        <text x="746" y="822" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the multiple-lesion pattern names metastasis</text>

        <rect x="560" y="836" width="372" height="80" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="746" y="854" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">1° TUMORS = SOLITARY LESIONS</text>
        <text x="746" y="870" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">1° tumors generally appear as SOLITARY lesions.</text>
        <text x="746" y="886" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">A solitary lesion in bone/liver/lung/brain could be</text>
        <text x="746" y="896" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">primary — but metastasis is more common overall.</text>
        <text x="746" y="910" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">the solitary-lesion pattern suggests primary</text>

        <text x="564" y="936" fontSize="4" fontWeight="800" className="fill-foreground">Metastasis is more common than 1° in bone, liver, lung, brain —</text>
        <text x="564" y="946" fontSize="4" fontWeight="800" className="fill-foreground">multiple lesions = metastasis until proven otherwise.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="972" width="932" height="96" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="990" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 241 / book 219 (Pathology — Neoplasia: Common metastases)</text>
        <text x="42" y="1004" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): TWO copyrighted photographs — the 'A' marker (image 0, 188x245 gray jpeg at 150 dpi — the bone axial-skeleton image</text>
        <text x="42" y="1014" fontSize="5" className="fill-muted-foreground">beside the Bone row) and the 'B' marker (image 1, 188x150 cmyk jpeg at 150 dpi — the liver parenchyma image beside the Liver row) — BOTH described</text>
        <text x="42" y="1024" fontSize="5" className="fill-muted-foreground">in text, never reproduced (the M32 convention). The CLaSH acronym is the source's own (attributed); the KYP memory layer is original. No margin</text>
        <text x="42" y="1034" fontSize="5" className="fill-muted-foreground">mnemonics beyond the source's CLaSH (VLM confirmed). Tables carried verbatim in the note.</text>
      </g>
    </svg>
  );
}

// P16 — Oncogene + tumor suppressor map (an original KYP adaptation
// of book 220). The page is two pure-text tables — the 12-row
// ONCOGENE table (gain of function, one allele) and the 15-row
// TUMOR SUPPRESSOR table (loss of function, two alleles — Knudson
// 2-hit). No raster images (pdfimages confirmed zero). The visual
// renders the two tables as a side-by-side panel map with the
// allele axis and the gene-class axis.

export function OncogeneSuppressorMap() {
  const w = 980;
  const h = 1640;
  const oncogenes = [
    ["ALK", "Receptor TK", "Lung adeno"],
    ["EGFR (ERBB1)", "Receptor TK", "Lung adeno"],
    ["HER2 (ERBB2)", "Receptor TK", "Breast, gastric"],
    ["RET", "Receptor TK", "MEN2A/2B, thyroid, pheo"],
    ["BCR-ABL", "Non-receptor TK", "CML, ALL"],
    ["JAK2", "Non-receptor TK", "Myeloproliferative"],
    ["BRAF", "Ser/Thr kinase", "Melanoma, NHL, CRC, PTC, HCL"],
    ["c-KIT", "Cytokine receptor (CD117)", "GIST, mastocytosis"],
    ["MYCC (c-myc)", "Transcription factor", "Burkitt lymphoma"],
    ["MYCN (N-myc)", "Transcription factor", "Neuroblastoma"],
    ["KRAS", "RAS GTPase", "Pancreas, colon, lung, endometrial"],
    ["BCL-2", "Antiapoptotic", "Follicular, DLBCL"],
  ];
  const suppressors = [
    ["APC", "WNT neg regulator", "FAP, colorectal"],
    ["BRCA1/BRCA2", "BRCA proteins", "Breast, ovarian, prostate, pancreas"],
    ["CDKN2A", "p16, G1→S block", "Melanoma, lung, pancreas"],
    ["DCC", "Deleted in Colorectal", "Colorectal"],
    ["SMAD4 (DPC4)", "Deleted in Pancreatic", "Pancreas, colorectal"],
    ["MEN1", "MENin", "MEN1"],
    ["NF1", "Neurofibromin (RAS GAP)", "Neurofibromatosis type 1"],
    ["NF2", "Merlin (schwannomin)", "Neurofibromatosis type 2"],
    ["PTEN", "PI3k/AKT neg regulator", "Prostate, breast, endometrial"],
    ["RB1", "Inhibits E2F, G1→S block", "Retinoblastoma, osteosarcoma"],
    ["TP53", "p53 → p21, G1→S block", "Most cancers, Li-Fraumeni SBLA"],
    ["TSC1", "Hamartin", "Tuberous sclerosis"],
    ["TSC2", "Tuberin", "Tuberous sclerosis"],
    ["VHL", "HIF-1α inhibitor", "von Hippel-Lindau"],
    ["WT1", "Urogenital TF", "Wilms tumor"],
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Oncogenes and tumor suppressors — the map, an original KYP adaptation of the source page (book 220 — the oncogene definition [gain of function, one allele] and the 12-row oncogene table [ALK, EGFR, HER2, RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC, MYCN, KRAS, BCL-2 with their gene products and associated neoplasms]; the tumor suppressor definition [loss of function, two alleles — Knudson 2-hit] and the 15-row tumor suppressor table [APC, BRCA1/2, CDKN2A, DCC, SMAD4, MEN1, NF1, NF2, PTEN, RB1, TP53, TSC1, TSC2, VHL, WT1 with their gene products and associated conditions, including the Li-Fraumeni SBLA syndrome expansion for TP53]; no copyrighted photographs on the page). TOP — THE ALLELE AXIS (one-allele gain vs two-allele loss). LEFT — THE 12-ROW ONCOGENE TABLE. RIGHT — THE 15-ROW TUMOR SUPPRESSOR TABLE. BOTTOM — THE GENE-CLASS AXIS summary and the Li-Fraumeni SBLA callout. Footer carries the source attribution, the census note, and the copyright boundary." className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Oncogenes &amp; tumor suppressors — the map (original KYP adaptation)</text>
        <rect x="740" y="24" width="192" height="18" className="fill-brand-soft" />
        <text x="836" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">12 oncogenes · 15 suppressors</text>
      </g>

      {/* ===== ALLELE AXIS band ===== */}
      <g>
        <rect x="36" y="80" width="908" height="100" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="100" fontSize="8" fontWeight="800" className="fill-foreground">The allele axis (book 220 — verbatim)</text>

        <rect x="52" y="112" width="440" height="56" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="62" y="128" fontSize="4.6" fontWeight="800" className="fill-emergency">ONCOGENE — gain of function, ONE allele</text>
        <text x="62" y="142" fontSize="3.8" fontWeight="700" className="fill-foreground">Gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk.</text>
        <text x="62" y="154" fontSize="3.8" fontWeight="700" className="fill-foreground">Requires damage to only ONE allele of a proto-oncogene.</text>
        <text x="62" y="164" fontSize="3.4" className="fill-muted-foreground">dominant at the cellular level — the mutated allele dominates the normal.</text>

        <rect x="500" y="112" width="428" height="56" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="510" y="128" fontSize="4.6" fontWeight="800" className="fill-brand">TUMOR SUPPRESSOR — loss of function, TWO alleles (Knudson 2-hit)</text>
        <text x="510" y="142" fontSize="3.8" fontWeight="700" className="fill-foreground">Loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be</text>
        <text x="510" y="154" fontSize="3.8" fontWeight="700" className="fill-foreground">lost for expression of disease (the Knudson 2-hit hypothesis).</text>
        <text x="510" y="164" fontSize="3.4" className="fill-muted-foreground">recessive at the cellular level — both alleles must be lost.</text>
      </g>

      {/* ===== LEFT — oncogene table ===== */}
      <g>
        <rect x="36" y="192" width="460" height="640" rx="14" className="fill-card stroke-emergency" strokeWidth="1.2" />
        <text x="52" y="212" fontSize="8" fontWeight="800" className="fill-emergency">ONCOGENES (12 rows — gain of function, one allele)</text>

        {/* header */}
        <rect x="52" y="224" width="120" height="20" className="fill-emergency-soft" />
        <text x="112" y="238" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">GENE</text>
        <rect x="172" y="224" width="160" height="20" className="fill-secondary" />
        <text x="252" y="238" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">GENE PRODUCT</text>
        <rect x="332" y="224" width="148" height="20" className="fill-secondary" />
        <text x="406" y="238" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ASSOCIATED NEOPLASM</text>

        {oncogenes.map((row, i) => {
          const y = 246 + i * 32;
          return (
            <g key={i}>
              <rect x="52" y={y} width="120" height="30" className="fill-card stroke-border" />
              <text x="62" y={y + 18} fontSize="3.8" fontWeight="800" className="fill-foreground">{row[0]}</text>
              <rect x="172" y={y} width="160" height="30" className="fill-card stroke-border" />
              <text x="180" y={y + 18} fontSize="3.6" fontWeight="700" className="fill-foreground">{row[1]}</text>
              <rect x="332" y={y} width="148" height="30" className="fill-card stroke-border" />
              <text x="340" y={y + 18} fontSize="3.6" className="fill-foreground">{row[2]}</text>
            </g>
          );
        })}
      </g>

      {/* ===== RIGHT — tumor suppressor table ===== */}
      <g>
        <rect x="504" y="192" width="440" height="640" rx="14" className="fill-card stroke-brand" strokeWidth="1.2" />
        <text x="520" y="212" fontSize="8" fontWeight="800" className="fill-brand">TUMOR SUPPRESSORS (15 rows — loss of function, two alleles, Knudson 2-hit)</text>

        {/* header */}
        <rect x="520" y="224" width="110" height="20" className="fill-brand-soft" />
        <text x="575" y="238" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">GENE</text>
        <rect x="630" y="224" width="160" height="20" className="fill-secondary" />
        <text x="710" y="238" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">GENE PRODUCT</text>
        <rect x="790" y="224" width="138" height="20" className="fill-secondary" />
        <text x="859" y="238" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ASSOCIATED CONDITION</text>

        {suppressors.map((row, i) => {
          const y = 246 + i * 25.6;
          const isTP53 = row[0] === "TP53";
          return (
            <g key={i}>
              <rect x="520" y={y} width="110" height="24" className={isTP53 ? "fill-emergency-soft" : "fill-card"} stroke={isTP53 ? "stroke-emergency" : "stroke-border"} />
              <text x="528" y={y + 15} fontSize="3.7" fontWeight="800" className="fill-foreground">{row[0]}</text>
              <rect x="630" y={y} width="160" height="24" className={isTP53 ? "fill-emergency-soft" : "fill-card"} stroke={isTP53 ? "stroke-emergency" : "stroke-border"} />
              <text x="638" y={y + 15} fontSize="3.5" fontWeight="700" className="fill-foreground">{row[1]}</text>
              <rect x="790" y={y} width="138" height="24" className={isTP53 ? "fill-emergency-soft" : "fill-card"} stroke={isTP53 ? "stroke-emergency" : "stroke-border"} />
              <text x="798" y={y + 15} fontSize="3.5" className="fill-foreground">{row[2]}</text>
            </g>
          );
        })}
      </g>

      {/* ===== GENE-CLASS AXIS summary ===== */}
      <g>
        <rect x="36" y="844" width="908" height="180" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="864" fontSize="8" fontWeight="800" className="fill-foreground">The gene-class axis (KYP's functional grouping of all 27 genes)</text>

        <rect x="52" y="876" width="220" height="140" rx="10" className="fill-card stroke-border" />
        <text x="62" y="892" fontSize="4.2" fontWeight="800" className="fill-emergency">KINASES (oncogene signaling)</text>
        <text x="62" y="906" fontSize="3.5" fontWeight="700" className="fill-foreground">Receptor TK: ALK, EGFR, HER2, RET</text>
        <text x="62" y="918" fontSize="3.5" fontWeight="700" className="fill-foreground">Non-receptor TK: BCR-ABL, JAK2</text>
        <text x="62" y="930" fontSize="3.5" fontWeight="700" className="fill-foreground">Ser/Thr kinase: BRAF</text>
        <text x="62" y="942" fontSize="3.5" fontWeight="700" className="fill-foreground">Cytokine receptor: c-KIT (CD117)</text>
        <text x="62" y="958" fontSize="3.4" className="fill-muted-foreground">the signaling tier — hallmark 1's</text>
        <text x="62" y="968" fontSize="3.4" className="fill-muted-foreground">growth factor receptors and</text>
        <text x="62" y="978" fontSize="3.4" className="fill-muted-foreground">signaling molecules.</text>

        <rect x="280" y="876" width="220" height="140" rx="10" className="fill-card stroke-border" />
        <text x="290" y="892" fontSize="4.2" fontWeight="800" className="fill-warning">NUCLEAR (TF + cell-cycle block)</text>
        <text x="290" y="906" fontSize="3.5" fontWeight="700" className="fill-foreground">Oncogene TFs: MYCC (Burkitt),</text>
        <text x="290" y="918" fontSize="3.5" fontWeight="700" className="fill-foreground">MYCN (neuroblastoma)</text>
        <text x="290" y="932" fontSize="3.5" fontWeight="700" className="fill-foreground">G1→S blockers: CDKN2A/p16,</text>
        <text x="290" y="944" fontSize="3.5" fontWeight="700" className="fill-foreground">RB1 (inhibits E2F), TP53/p53</text>
        <text x="290" y="958" fontSize="3.5" fontWeight="700" className="fill-foreground">(activates p21)</text>
        <text x="290" y="974" fontSize="3.5" fontWeight="700" className="fill-foreground">WT1: urogenital TF (Wilms)</text>

        <rect x="508" y="876" width="220" height="140" rx="10" className="fill-card stroke-border" />
        <text x="518" y="892" fontSize="4.2" fontWeight="800" className="fill-brand">REGULATORS (pathway brakes)</text>
        <text x="518" y="906" fontSize="3.5" fontWeight="700" className="fill-foreground">WNT neg reg: APC (FAP)</text>
        <text x="518" y="920" fontSize="3.5" fontWeight="700" className="fill-foreground">PI3k/AKT neg reg: PTEN</text>
        <text x="518" y="934" fontSize="3.5" fontWeight="700" className="fill-foreground">RAS axis: KRAS oncogene</text>
        <text x="538" y="946" fontSize="3.5" fontWeight="700" className="fill-foreground">(gain, activates RAS) vs</text>
        <text x="538" y="958" fontSize="3.5" fontWeight="700" className="fill-foreground">NF1 suppressor (loss, RAS GAP)</text>
        <text x="518" y="974" fontSize="3.5" fontWeight="700" className="fill-foreground">MEN1/MENin; BRCA1/2</text>

        <rect x="736" y="876" width="200" height="140" rx="10" className="fill-card stroke-border" />
        <text x="746" y="892" fontSize="4.2" fontWeight="800" className="fill-foreground">MISC (apoptosis + cytoskeleton + HIF + deleted)</text>
        <text x="746" y="906" fontSize="3.5" fontWeight="700" className="fill-foreground">Antiapoptotic oncogene: BCL-2</text>
        <text x="746" y="920" fontSize="3.5" fontWeight="700" className="fill-foreground">Cytoskeletal suppressors:</text>
        <text x="766" y="932" fontSize="3.5" fontWeight="700" className="fill-foreground">NF2 merlin, TSC1 hamartin,</text>
        <text x="766" y="944" fontSize="3.5" fontWeight="700" className="fill-foreground">TSC2 tuberin</text>
        <text x="746" y="958" fontSize="3.5" fontWeight="700" className="fill-foreground">HIF inhibitor: VHL</text>
        <text x="746" y="972" fontSize="3.5" fontWeight="700" className="fill-foreground">Two deleted: DCC, SMAD4/DPC4</text>
      </g>

      {/* ===== Li-Fraumeni SBLA callout ===== */}
      <g>
        <rect x="36" y="1036" width="908" height="100" rx="14" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="52" y="1056" fontSize="8" fontWeight="800" className="fill-emergency">Li-Fraumeni SBLA syndrome (TP53 — book 220, verbatim)</text>
        <text x="52" y="1072" fontSize="4.4" fontWeight="700" className="fill-foreground">TP53 row's associated condition: Most cancers, Li-Fraumeni (SBLA) syndrome (multiple malignancies at early age;</text>
        <text x="52" y="1082" fontSize="4.4" fontWeight="700" className="fill-foreground">Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland).</text>

        <rect x="52" y="1094" width="218" height="32" rx="8" className="fill-card stroke-emergency" />
        <text x="161" y="1110" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">S — SARCOMA</text>
        <text x="161" y="1120" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">osteosarcoma, rhabdomyosarcoma</text>

        <rect x="276" y="1094" width="218" height="32" rx="8" className="fill-card stroke-emergency" />
        <text x="385" y="1110" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">B/B — BREAST / BRAIN</text>
        <text x="385" y="1120" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">early-onset breast, glioblastoma</text>

        <rect x="500" y="1094" width="218" height="32" rx="8" className="fill-card stroke-emergency" />
        <text x="609" y="1110" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">L/L — LUNG / LEUKEMIA</text>
        <text x="609" y="1120" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">lung adenocarcinoma, acute leukemia</text>

        <rect x="724" y="1094" width="200" height="32" rx="8" className="fill-card stroke-emergency" />
        <text x="824" y="1110" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">A — ADRENAL</text>
        <text x="824" y="1120" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">adrenocortical carcinoma</text>
      </g>

      {/* ===== The four KYP mnemonics summary ===== */}
      <g>
        <rect x="36" y="1148" width="908" height="80" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1168" fontSize="8" fontWeight="800" className="fill-foreground">The four KYP mnemonics (original — no mnemonics print on the page)</text>
        <text x="52" y="1184" fontSize="4" fontWeight="800" className="fill-emergency">ONE ALLELE GAIN, TWO ALLELES LOSS</text>
        <text x="280" y="1184" fontSize="3.6" className="fill-muted-foreground">— the allele axis (oncogene vs tumor suppressor)</text>
        <text x="52" y="1198" fontSize="4" fontWeight="800" className="fill-emergency">KNUDSON TWO-HIT</text>
        <text x="280" y="1198" fontSize="3.6" className="fill-muted-foreground">— tumor suppressor: both alleles lost; hereditary = germline first + somatic second</text>
        <text x="52" y="1212" fontSize="4" fontWeight="800" className="fill-emergency">SBLA LI-FRAUMENI</text>
        <text x="280" y="1212" fontSize="3.6" className="fill-muted-foreground">— Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland (TP53 germline loss)</text>
        <text x="52" y="1226" fontSize="4" fontWeight="800" className="fill-emergency">THE TWO DELETED — DCC, SMAD4/DPC4</text>
        <text x="380" y="1226" fontSize="3.6" className="fill-muted-foreground">— DCC = Deleted in Colorectal; DPC4 = Deleted in Pancreatic</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1240" width="932" height="80" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1258" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 242 / book 220 (Pathology — Neoplasia: Oncogenes; Tumor suppressor genes)</text>
        <text x="42" y="1272" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 242). The page is two pure-text</text>
        <text x="42" y="1282" fontSize="5" className="fill-muted-foreground">tables — the 12-row oncogene table (gain, one allele) and the 15-row tumor suppressor table (loss, two alleles, Knudson 2-hit).</text>
        <text x="42" y="1292" fontSize="5" className="fill-muted-foreground">Adapted as the registry visual (the two-table panel map); tables carried verbatim in the note. No photographs; no margin mnemonics (VLM confirmed).</text>
      </g>
    </svg>
  );
}
