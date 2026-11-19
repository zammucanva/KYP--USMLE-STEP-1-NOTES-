"use client";

// Original KYP visuals — Neoplasia block, P18 (First Aid 2026, Part 1
// pdf 244–245 / book 222–223, PATHOLOGY—NEOPLASIA: Oncogenic microbes;
// Serum tumor markers; Cancer testing; Important immunohistochemical
// stains; P-glycoprotein). All SVG uses theme tokens (currentColor +
// Tailwind classes), so it stays readable in light AND dark mode. Census
// (pdfimages + VLM): ZERO raster images on either page — pure tables and
// text blocks, so this visual is a pure ORIGINAL KYP ADAPTATION (the
// rule trio, the microbe roster as pathogen→cancer pairs, the serum
// dashboard grid, the modern-diagnostics panel, the IHC lineage map, and
// the P-glycoprotein efflux glyph). No margin notes or mnemonics print
// on either page (VLM census confirmed); the KYP memory layer is
// original.

// ---------------------------------------------------------------------------
// Pathology P18 — Tumor markers, molecular diagnostics & IHC map
// ---------------------------------------------------------------------------

export function TumorMarkerMap() {
  const w = 1102;
  const h = 1342;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Tumor markers, molecular diagnostics and IHC — the map: the marker-use rule trio (not the primary tool, monitor recurrence and response, biopsy defines), the 8 oncogenic microbes with their cancers, the 12 serum markers with their notes, the 5 modern cancer tests, the 10 immunohistochemical lineage stains, and the P-glycoprotein efflux pump." className="min-w-[1040px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="44" fontSize="7" fontWeight="800" className="fill-foreground">Tumor markers, molecular diagnostics &amp; IHC — the map (original KYP adaptation)</text>
        <rect x="880" y="25" width="182" height="18" className="fill-brand-soft" />
        <text x="971" y="37.5" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">monitor · don&apos;t screen</text>
      </g>

      {/* ===== RULE TRIO — the marker-use rule (book 222) ===== */}
      <g>
        <rect x="36" y="74" width="1030" height="146" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="96" fontSize="6.4" fontWeight="800" className="fill-foreground">The rule trio — the paragraph that governs every marker (book 222)</text>
        <text x="52" y="107" fontSize="3.6" className="fill-muted-foreground">Verbatim: “Tumor markers should not be used as the 1° tool for cancer diagnosis or screening. They may be used to monitor tumor recurrence</text>
        <text x="52" y="115" fontSize="3.6" className="fill-muted-foreground">and response to therapy, but definitive diagnosis is made via biopsy. Some can be associated with non-neoplastic conditions.”</text>
        {/* card 1 — NOT the 1° tool */}
        <g>
          <rect x="52" y="122" width="316" height="72" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="122" width="316" height="14" rx="10" className="fill-emergency-soft" />
          <text x="210" y="132.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">① NOT THE 1° TOOL</text>
          <text x="64" y="148" fontSize="3.7" fontWeight="700" className="fill-foreground">no marker diagnoses a cancer — and no</text>
          <text x="64" y="157" fontSize="3.7" fontWeight="700" className="fill-foreground">marker is the primary screening tool;</text>
          <text x="64" y="166" fontSize="3.7" fontWeight="700" className="fill-foreground">PSA&apos;s own row: “uncertain risk/benefit</text>
          <text x="64" y="175" fontSize="3.7" fontWeight="700" className="fill-foreground">for screening.”</text>
        </g>
        {/* card 2 — MONITOR */}
        <g>
          <rect x="380" y="122" width="316" height="72" rx="10" className="fill-card stroke-border" />
          <rect x="380" y="122" width="316" height="14" rx="10" className="fill-brand-soft" />
          <text x="538" y="132.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">② MONITOR</text>
          <text x="392" y="148" fontSize="3.7" fontWeight="700" className="fill-foreground">tumor recurrence + response to therapy;</text>
          <text x="392" y="157" fontSize="3.7" fontWeight="700" className="fill-foreground">LDH: “an indicator of tumor burden”;</text>
          <text x="392" y="166" fontSize="3.7" fontWeight="700" className="fill-foreground">liquid biopsy adds treatment monitoring</text>
          <text x="392" y="175" fontSize="3.7" fontWeight="700" className="fill-foreground">and post-treatment surveillance</text>
        </g>
        {/* card 3 — BIOPSY DEFINES */}
        <g>
          <rect x="708" y="122" width="334" height="72" rx="10" className="fill-card stroke-border" />
          <rect x="708" y="122" width="334" height="14" rx="10" className="fill-warning-soft" />
          <text x="875" y="132.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-warning">③ BIOPSY DEFINES</text>
          <text x="720" y="148" fontSize="3.7" fontWeight="700" className="fill-foreground">“definitive diagnosis is made via biopsy” —</text>
          <text x="720" y="157" fontSize="3.7" fontWeight="700" className="fill-foreground">the serum tracks, the tissue names; IHC then</text>
          <text x="720" y="166" fontSize="3.7" fontWeight="700" className="fill-foreground">determines the primary site of origin for</text>
          <text x="720" y="175" fontSize="3.7" fontWeight="700" className="fill-foreground">metastatic tumors</text>
        </g>
        {/* confounder strip */}
        <g>
          <rect x="52" y="202" width="990" height="16" rx="6" className="fill-card stroke-border" />
          <text x="62" y="212.5" fontSize="3.6" className="fill-muted-foreground">CONFOUNDERS (the rule&apos;s third sentence): PSA also ↑ in BPH/prostatitis · AFP transiently ↑ in pregnancy (high = neural tube + abdominal wall defects; low = Down syndrome) · ALP ↑ in Paget disease of bone / hepatic origin — exclude hepatic origin by checking LFTs and GGT levels</text>
        </g>
      </g>

      {/* ===== ONCOGENIC-MICROBE ROSTER — 8 pathogen→cancer pairs (book 222) ===== */}
      <g>
        <rect x="36" y="232" width="1030" height="196" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="254" fontSize="6.4" fontWeight="800" className="fill-foreground">The oncogenic-microbe roster — 8 pathogen → cancer pairs (book 222)</text>
        <text x="52" y="265" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">mICrOBe · ASSOCIATeD CAnCer, every row verbatim — read as residence rules: cancer grows where the microbe lives.</text>
        {/* row 1 */}
        <g>
          <rect x="52" y="274" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="64" y="289" fontSize="4.5" fontWeight="800" className="fill-foreground">EBV</text>
          <text x="64" y="301" fontSize="3.5" fontWeight="700" className="fill-foreground">Burkitt lymphoma, Hodgkin lymphoma,</text>
          <text x="64" y="310" fontSize="3.5" fontWeight="700" className="fill-foreground">nasopharyngeal carcinoma, 1° CNS</text>
          <text x="64" y="319" fontSize="3.5" fontWeight="700" className="fill-foreground">lymphoma (in immunocompromised patients)</text>
          <text x="64" y="331" fontSize="3.4" className="fill-muted-foreground">lives in B lymphocytes</text>
        </g>
        <g>
          <rect x="304" y="274" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="316" y="289" fontSize="4.5" fontWeight="800" className="fill-foreground">HBV, HCV</text>
          <text x="316" y="301" fontSize="3.5" fontWeight="700" className="fill-foreground">Hepatocellular carcinoma</text>
          <text x="316" y="313" fontSize="3.4" className="fill-muted-foreground">live in hepatocytes — the chronic-</text>
          <text x="316" y="322" fontSize="3.4" className="fill-muted-foreground">hepatitis pair behind cirrhosis → HCC</text>
        </g>
        <g>
          <rect x="556" y="274" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="568" y="289" fontSize="4.5" fontWeight="800" className="fill-foreground">HHV-8</text>
          <text x="568" y="301" fontSize="3.5" fontWeight="700" className="fill-foreground">Kaposi (“Ka∞si”) sarcoma</text>
          <text x="568" y="313" fontSize="3.4" className="fill-muted-foreground">quirk: the source prints “Ka∞si” —</text>
          <text x="568" y="322" fontSize="3.4" className="fill-muted-foreground">its own infinity joke, carried verbatim</text>
        </g>
        <g>
          <rect x="808" y="274" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="820" y="289" fontSize="4.5" fontWeight="800" className="fill-foreground">HPV (usually types 16, 18)</text>
          <text x="820" y="301" fontSize="3.5" fontWeight="700" className="fill-foreground">Cervical and penile/anal carcinoma,</text>
          <text x="820" y="310" fontSize="3.5" fontWeight="700" className="fill-foreground">head and neck cancer</text>
          <text x="820" y="322" fontSize="3.4" className="fill-muted-foreground">lives in squamous epithelium</text>
        </g>
        {/* row 2 */}
        <g>
          <rect x="52" y="354" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="64" y="369" fontSize="4.5" fontWeight="800" className="fill-foreground">H pylori</text>
          <text x="64" y="381" fontSize="3.5" fontWeight="700" className="fill-foreground">Gastric adenocarcinoma and</text>
          <text x="64" y="390" fontSize="3.5" fontWeight="700" className="fill-foreground">MALT lymphoma</text>
          <text x="64" y="402" fontSize="3.4" className="fill-muted-foreground">lives in gastric mucosa — the only</text>
          <text x="64" y="411" fontSize="3.4" className="fill-muted-foreground">bacterium on the roster</text>
        </g>
        <g>
          <rect x="304" y="354" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="316" y="369" fontSize="4.5" fontWeight="800" className="fill-foreground">HTLV-1</text>
          <text x="316" y="381" fontSize="3.5" fontWeight="700" className="fill-foreground">Adult T-cell Leukemia/Lymphoma</text>
          <text x="316" y="393" fontSize="3.4" className="fill-muted-foreground">lives in T cells — the roster&apos;s</text>
          <text x="316" y="402" fontSize="3.4" className="fill-muted-foreground">retrovirus</text>
        </g>
        <g>
          <rect x="556" y="354" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="568" y="369" fontSize="4.5" fontWeight="800" className="fill-foreground">Liver fluke (Clonorchis sinensis)</text>
          <text x="568" y="381" fontSize="3.5" fontWeight="700" className="fill-foreground">Cholangiocarcinoma</text>
          <text x="568" y="393" fontSize="3.4" className="fill-muted-foreground">lives in the bile ducts — the fluke</text>
          <text x="568" y="402" fontSize="3.4" className="fill-muted-foreground">of the biliary tree</text>
        </g>
        <g>
          <rect x="808" y="354" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="820" y="369" fontSize="4.5" fontWeight="800" className="fill-foreground">Schistosoma haematobium</text>
          <text x="820" y="381" fontSize="3.5" fontWeight="700" className="fill-foreground">Squamous cell bladder cancer</text>
          <text x="820" y="393" fontSize="3.4" className="fill-muted-foreground">lives in the bladder — squamous, not</text>
          <text x="820" y="402" fontSize="3.4" className="fill-muted-foreground">transitional, histology</text>
        </g>
      </g>

      {/* ===== SERUM-MARKER DASHBOARD — all 12 markers (book 222) ===== */}
      <g>
        <rect x="36" y="440" width="1030" height="274" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="462" fontSize="6.4" fontWeight="800" className="fill-foreground">The serum-marker dashboard — all 12 markers, associations + NOTES (book 222)</text>
        <text x="52" y="473" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">mArKer · ImPOrTAnT ASSOCIATIOnS · nOTeS — the AFP pregnancy fork highlighted; the PSA BPH/prostatitis trap flagged; “Calci2nin.” carried verbatim.</text>
        {/* row 1 */}
        <g>
          <rect x="52" y="482" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="64" y="497" fontSize="4.4" fontWeight="800" className="fill-foreground">Alkaline phosphatase</text>
          <text x="64" y="509" fontSize="3.5" fontWeight="700" className="fill-foreground">Metastases to bone or liver, Paget</text>
          <text x="64" y="518" fontSize="3.5" fontWeight="700" className="fill-foreground">disease of bone, seminoma (PLAP)</text>
          <text x="64" y="530" fontSize="3.4" className="fill-muted-foreground">exclude hepatic origin — check</text>
          <text x="64" y="539" fontSize="3.4" className="fill-muted-foreground">LFTs and GGT levels</text>
        </g>
        <g>
          <rect x="304" y="482" width="240" height="70" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
          <text x="316" y="497" fontSize="4.4" fontWeight="800" className="fill-foreground">α-fetoprotein</text>
          <text x="316" y="509" fontSize="3.5" fontWeight="700" className="fill-foreground">HCC, yolk sac tumor, mixed germ cell</text>
          <text x="316" y="518" fontSize="3.5" fontWeight="700" className="fill-foreground">tumor, ataxia-telangiectasia, NTDs</text>
          <text x="316" y="530" fontSize="3.4" fontWeight="800" className="fill-emergency">made by fetus — ↑ in pregnancy:</text>
          <text x="316" y="539" fontSize="3.4" fontWeight="800" className="fill-emergency">HIGH = NTD + abdominal wall defects</text>
          <text x="316" y="548" fontSize="3.4" fontWeight="800" className="fill-brand">LOW = Down syndrome</text>
        </g>
        <g>
          <rect x="556" y="482" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="568" y="497" fontSize="4.4" fontWeight="800" className="fill-foreground">hCG</text>
          <text x="568" y="509" fontSize="3.5" fontWeight="700" className="fill-foreground">Hydatidiform moles and</text>
          <text x="568" y="518" fontSize="3.5" fontWeight="700" className="fill-foreground">Choriocarcinomas (GTD), testicular</text>
          <text x="568" y="527" fontSize="3.5" fontWeight="700" className="fill-foreground">cancer, mixed germ cell tumor</text>
          <text x="568" y="539" fontSize="3.4" className="fill-muted-foreground">produced by syncytiotrophoblasts</text>
          <text x="568" y="548" fontSize="3.4" className="fill-muted-foreground">of the placenta</text>
        </g>
        <g>
          <rect x="808" y="482" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="820" y="497" fontSize="4.4" fontWeight="800" className="fill-foreground">CA 15-3 / CA 27-29</text>
          <text x="820" y="509" fontSize="3.5" fontWeight="700" className="fill-foreground">Breast cancer.</text>
          <text x="820" y="521" fontSize="3.4" className="fill-muted-foreground">— no printed note: a pure</text>
          <text x="820" y="530" fontSize="3.4" className="fill-muted-foreground">association row</text>
        </g>
        {/* row 2 */}
        <g>
          <rect x="52" y="562" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="64" y="577" fontSize="4.4" fontWeight="800" className="fill-foreground">CA 19-9</text>
          <text x="64" y="589" fontSize="3.5" fontWeight="700" className="fill-foreground">Pancreatic adenocarcinoma.</text>
          <text x="64" y="601" fontSize="3.4" className="fill-muted-foreground">— no printed note</text>
        </g>
        <g>
          <rect x="304" y="562" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="316" y="577" fontSize="4.4" fontWeight="800" className="fill-foreground">CA 125</text>
          <text x="316" y="589" fontSize="3.5" fontWeight="700" className="fill-foreground">Epithelial ovarian cancer.</text>
          <text x="316" y="601" fontSize="3.4" className="fill-muted-foreground">— no printed note</text>
        </g>
        <g>
          <rect x="556" y="562" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="568" y="577" fontSize="4.4" fontWeight="800" className="fill-foreground">Calcitonin</text>
          <text x="568" y="589" fontSize="3.5" fontWeight="700" className="fill-foreground">Medullary thyroid carcinoma</text>
          <text x="568" y="598" fontSize="3.5" fontWeight="700" className="fill-foreground">(alone and in MEN2A, MEN2B)</text>
          <text x="568" y="610" fontSize="3.4" className="fill-muted-foreground">“Calci2nin.” — the source&apos;s own</text>
          <text x="568" y="619" fontSize="3.4" className="fill-muted-foreground">MEN-2 mnemonic, carried verbatim</text>
        </g>
        <g>
          <rect x="808" y="562" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="820" y="577" fontSize="4.4" fontWeight="800" className="fill-foreground">CEA</text>
          <text x="820" y="589" fontSize="3.5" fontWeight="700" className="fill-foreground">Colorectal and pancreatic cancers.</text>
          <text x="820" y="598" fontSize="3.5" fontWeight="700" className="fill-foreground">Minor: gastric, breast, medullary</text>
          <text x="820" y="607" fontSize="3.5" fontWeight="700" className="fill-foreground">thyroid carcinomas</text>
          <text x="820" y="619" fontSize="3.4" className="fill-muted-foreground">CarcinoEmbryonic Antigen —</text>
          <text x="820" y="628" fontSize="3.4" className="fill-muted-foreground">very nonspecific</text>
        </g>
        {/* row 3 */}
        <g>
          <rect x="52" y="642" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="64" y="657" fontSize="4.4" fontWeight="800" className="fill-foreground">Chromogranin</text>
          <text x="64" y="669" fontSize="3.5" fontWeight="700" className="fill-foreground">Neuroendocrine tumors.</text>
          <text x="64" y="681" fontSize="3.4" className="fill-muted-foreground">— no printed note; also an IHC stain</text>
          <text x="64" y="690" fontSize="3.4" className="fill-muted-foreground">(paired with synaptophysin)</text>
        </g>
        <g>
          <rect x="304" y="642" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="316" y="657" fontSize="4.4" fontWeight="800" className="fill-foreground">LDH</text>
          <text x="316" y="669" fontSize="3.5" fontWeight="700" className="fill-foreground">Testicular germ cell tumors, ovarian</text>
          <text x="316" y="678" fontSize="3.5" fontWeight="700" className="fill-foreground">dysgerminoma, other cancers</text>
          <text x="316" y="690" fontSize="3.4" className="fill-muted-foreground">can be used as an indicator</text>
          <text x="316" y="699" fontSize="3.4" className="fill-muted-foreground">of tumor burden</text>
        </g>
        <g>
          <rect x="556" y="642" width="240" height="70" rx="10" className="fill-card stroke-border" />
          <text x="568" y="657" fontSize="4.4" fontWeight="800" className="fill-foreground">Neuron-specific enolase</text>
          <text x="568" y="669" fontSize="3.5" fontWeight="700" className="fill-foreground">Neuroendocrine tumors (eg, small cell</text>
          <text x="568" y="678" fontSize="3.5" fontWeight="700" className="fill-foreground">lung cancer, carcinoid, neuroblastoma)</text>
          <text x="568" y="690" fontSize="3.4" className="fill-muted-foreground">— no printed note</text>
        </g>
        <g>
          <rect x="808" y="642" width="240" height="70" rx="10" className="fill-card stroke-warning" strokeWidth="1.4" />
          <text x="820" y="657" fontSize="4.4" fontWeight="800" className="fill-foreground">PSA</text>
          <text x="820" y="669" fontSize="3.5" fontWeight="700" className="fill-foreground">Prostate cancer.</text>
          <text x="820" y="681" fontSize="3.4" className="fill-muted-foreground">Prostate-Specific Antigen — monitor</text>
          <text x="820" y="690" fontSize="3.4" className="fill-muted-foreground">recurrence/response; uncertain</text>
          <text x="820" y="699" fontSize="3.4" className="fill-muted-foreground">risk/benefit for screening</text>
          <text x="820" y="708" fontSize="3.4" fontWeight="800" className="fill-warning">TRAP: also ↑ in BPH/prostatitis</text>
        </g>
      </g>

      {/* ===== MODERN MOLECULAR PANEL — 5 tests (book 223) ===== */}
      <g>
        <rect x="36" y="726" width="1030" height="154" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="748" fontSize="6.4" fontWeight="800" className="fill-foreground">The modern molecular panel — 5 tests that select and track therapy (book 223)</text>
        <text x="52" y="759" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">The Cancer testing block — the KYP verbs COUNT · MISMATCH · PAINT · REPAIR · DRAW lead each card; every description distilled from the printed rows.</text>
        {/* COUNT */}
        <g>
          <rect x="52" y="768" width="191" height="104" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="768" width="191" height="13" rx="10" className="fill-brand-soft" />
          <text x="147" y="778" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">COUNT</text>
          <text x="62" y="793" fontSize="4.2" fontWeight="800" className="fill-foreground">Tumor mutational burden</text>
          <text x="62" y="805" fontSize="3.4" fontWeight="700" className="fill-foreground">total number of mutations</text>
          <text x="62" y="814" fontSize="3.4" fontWeight="700" className="fill-foreground">present in cancer cells;</text>
          <text x="62" y="823" fontSize="3.4" fontWeight="700" className="fill-foreground">may predict response to</text>
          <text x="62" y="832" fontSize="3.4" fontWeight="700" className="fill-foreground">certain treatments (eg, immune-</text>
          <text x="62" y="841" fontSize="3.4" fontWeight="700" className="fill-foreground">checkpoint inhibitors)</text>
        </g>
        {/* MISMATCH */}
        <g>
          <rect x="253" y="768" width="191" height="104" rx="10" className="fill-card stroke-border" />
          <rect x="253" y="768" width="191" height="13" rx="10" className="fill-warning-soft" />
          <text x="348" y="778" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">MISMATCH</text>
          <text x="263" y="793" fontSize="4.2" fontWeight="800" className="fill-foreground">Microsatellite instability</text>
          <text x="263" y="802" fontSize="4.2" fontWeight="800" className="fill-foreground">testing</text>
          <text x="263" y="814" fontSize="3.4" fontWeight="700" className="fill-foreground">assesses deficits in the</text>
          <text x="263" y="823" fontSize="3.4" fontWeight="700" className="fill-foreground">mismatch repair pathway</text>
          <text x="263" y="832" fontSize="3.4" fontWeight="700" className="fill-foreground">(hallmark of Lynch syndrome);</text>
          <text x="263" y="841" fontSize="3.4" fontWeight="700" className="fill-foreground">prognosis + treatment (eg,</text>
          <text x="263" y="850" fontSize="3.4" fontWeight="700" className="fill-foreground">colorectal adenocarcinoma,</text>
          <text x="263" y="859" fontSize="3.4" fontWeight="700" className="fill-foreground">endometrial carcinoma)</text>
        </g>
        {/* PAINT */}
        <g>
          <rect x="454" y="768" width="191" height="104" rx="10" className="fill-card stroke-border" />
          <rect x="454" y="768" width="191" height="13" rx="10" className="fill-brand-soft" />
          <text x="549" y="778" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">PAINT</text>
          <text x="464" y="793" fontSize="4.2" fontWeight="800" className="fill-foreground">PD-L1 expression</text>
          <text x="464" y="802" fontSize="4.2" fontWeight="800" className="fill-foreground">patterns</text>
          <text x="464" y="814" fontSize="3.4" fontWeight="700" className="fill-foreground">expressed to varying degrees</text>
          <text x="464" y="823" fontSize="3.4" fontWeight="700" className="fill-foreground">in certain cancers (eg, NSCLC,</text>
          <text x="464" y="832" fontSize="3.4" fontWeight="700" className="fill-foreground">urothelial carcinoma); may be</text>
          <text x="464" y="841" fontSize="3.4" fontWeight="700" className="fill-foreground">targeted with anti-PD-L1 and</text>
          <text x="464" y="850" fontSize="3.4" fontWeight="700" className="fill-foreground">anti-PD1 antibodies</text>
        </g>
        {/* REPAIR */}
        <g>
          <rect x="655" y="768" width="191" height="104" rx="10" className="fill-card stroke-border" />
          <rect x="655" y="768" width="191" height="13" rx="10" className="fill-warning-soft" />
          <text x="750" y="778" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">REPAIR</text>
          <text x="665" y="793" fontSize="4.2" fontWeight="800" className="fill-foreground">Homologous recombination</text>
          <text x="665" y="802" fontSize="4.2" fontWeight="800" className="fill-foreground">deficiency testing</text>
          <text x="665" y="814" fontSize="3.4" fontWeight="700" className="fill-foreground">identifies cancer types with</text>
          <text x="665" y="823" fontSize="3.4" fontWeight="700" className="fill-foreground">genetic abnormalities and</text>
          <text x="665" y="832" fontSize="3.4" fontWeight="700" className="fill-foreground">genomic instability (eg, breast,</text>
          <text x="665" y="841" fontSize="3.4" fontWeight="700" className="fill-foreground">ovarian) that may respond to</text>
          <text x="665" y="850" fontSize="3.4" fontWeight="700" className="fill-foreground">certain treatments (eg, PARP</text>
          <text x="665" y="859" fontSize="3.4" fontWeight="700" className="fill-foreground">inhibitors)</text>
        </g>
        {/* DRAW */}
        <g>
          <rect x="856" y="768" width="191" height="104" rx="10" className="fill-card stroke-border" />
          <rect x="856" y="768" width="191" height="13" rx="10" className="fill-brand-soft" />
          <text x="951" y="778" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">DRAW</text>
          <text x="866" y="793" fontSize="4.2" fontWeight="800" className="fill-foreground">Liquid biopsy</text>
          <text x="866" y="805" fontSize="3.4" fontWeight="700" className="fill-foreground">noninvasive test in body fluid</text>
          <text x="866" y="814" fontSize="3.4" fontWeight="700" className="fill-foreground">(eg, blood, urine): ctDNA,</text>
          <text x="866" y="823" fontSize="3.4" fontWeight="700" className="fill-foreground">ctRNA, or CTCs — profiling</text>
          <text x="866" y="832" fontSize="3.4" fontWeight="700" className="fill-foreground">(eg, EGFR in lung cancer),</text>
          <text x="866" y="841" fontSize="3.4" fontWeight="700" className="fill-foreground">treatment monitoring, post-</text>
          <text x="866" y="850" fontSize="3.4" fontWeight="700" className="fill-foreground">treatment surveillance (eg,</text>
          <text x="866" y="859" fontSize="3.4" fontWeight="700" className="fill-foreground">colorectal cancer)</text>
          <text x="866" y="868" fontSize="3.4" fontWeight="700" className="fill-foreground">+ personalized therapy</text>
        </g>
      </g>

      {/* ===== IHC LINEAGE MAP — 10 stains (book 223) ===== */}
      <g>
        <rect x="36" y="892" width="1030" height="252" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="914" fontSize="6.4" fontWeight="800" className="fill-foreground">The immunohistochemical lineage map — stains trace the primary (book 223)</text>
        <text x="52" y="925" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Printed purpose: “Determine primary site of origin for metastatic tumors and characterize tumors that are difficult to classify. Can have prognostic and predictive value.”</text>
        {/* row 1 */}
        <g>
          <rect x="52" y="934" width="240" height="74" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="934" width="240" height="13" rx="10" className="fill-brand-soft" />
          <text x="172" y="944" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">NEUROENDOCRINE</text>
          <text x="64" y="959" fontSize="4.4" fontWeight="800" className="fill-foreground">Chromogranin + synaptophysin</text>
          <text x="64" y="971" fontSize="3.5" fontWeight="700" className="fill-foreground">→ neuroendocrine cells</text>
          <text x="64" y="983" fontSize="3.5" fontWeight="700" className="fill-foreground">small cell carcinoma of the lung,</text>
          <text x="64" y="992" fontSize="3.5" fontWeight="700" className="fill-foreground">carcinoid tumor, neuroblastoma</text>
        </g>
        <g>
          <rect x="304" y="934" width="240" height="74" rx="10" className="fill-card stroke-border" />
          <rect x="304" y="934" width="240" height="13" rx="10" className="fill-warning-soft" />
          <text x="424" y="944" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">EPITHELIAL</text>
          <text x="316" y="959" fontSize="4.4" fontWeight="800" className="fill-foreground">Cytokeratin</text>
          <text x="316" y="971" fontSize="3.5" fontWeight="700" className="fill-foreground">→ epithelial cells</text>
          <text x="316" y="983" fontSize="3.5" fontWeight="700" className="fill-foreground">epithelial tumors (eg, squamous</text>
          <text x="316" y="992" fontSize="3.5" fontWeight="700" className="fill-foreground">cell carcinoma)</text>
        </g>
        <g>
          <rect x="556" y="934" width="240" height="74" rx="10" className="fill-card stroke-border" />
          <rect x="556" y="934" width="240" height="13" rx="10" className="fill-brand-soft" />
          <text x="676" y="944" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">MUSCLE</text>
          <text x="568" y="959" fontSize="4.4" fontWeight="800" className="fill-foreground">Desmin</text>
          <text x="568" y="971" fontSize="3.5" fontWeight="700" className="fill-foreground">→ muscle</text>
          <text x="568" y="983" fontSize="3.5" fontWeight="700" className="fill-foreground">muscle tumors (eg,</text>
          <text x="568" y="992" fontSize="3.5" fontWeight="700" className="fill-foreground">rhabdomyosarcoma)</text>
        </g>
        <g>
          <rect x="808" y="934" width="240" height="74" rx="10" className="fill-card stroke-border" />
          <rect x="808" y="934" width="240" height="13" rx="10" className="fill-warning-soft" />
          <text x="928" y="944" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">GLIAL</text>
          <text x="820" y="959" fontSize="4.4" fontWeight="800" className="fill-foreground">GFAP</text>
          <text x="820" y="971" fontSize="3.5" fontWeight="700" className="fill-foreground">→ NeuroGlia (astrocytes, Schwann</text>
          <text x="820" y="983" fontSize="3.5" fontWeight="700" className="fill-foreground">cells, oligodendrocytes)</text>
          <text x="820" y="995" fontSize="3.5" fontWeight="700" className="fill-foreground">astrocytoma, glioblastoma</text>
        </g>
        {/* row 2 */}
        <g>
          <rect x="52" y="1018" width="240" height="74" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="1018" width="240" height="13" rx="10" className="fill-brand-soft" />
          <text x="172" y="1028" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">NEURONAL</text>
          <text x="64" y="1043" fontSize="4.4" fontWeight="800" className="fill-foreground">Neurofilament</text>
          <text x="64" y="1055" fontSize="3.5" fontWeight="700" className="fill-foreground">→ neurons</text>
          <text x="64" y="1067" fontSize="3.5" fontWeight="700" className="fill-foreground">neuronal tumors (eg,</text>
          <text x="64" y="1076" fontSize="3.5" fontWeight="700" className="fill-foreground">neuroblastoma)</text>
        </g>
        <g>
          <rect x="304" y="1018" width="240" height="74" rx="10" className="fill-card stroke-border" />
          <rect x="304" y="1018" width="240" height="13" rx="10" className="fill-warning-soft" />
          <text x="424" y="1028" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">NEURAL CREST</text>
          <text x="316" y="1043" fontSize="4.4" fontWeight="800" className="fill-foreground">S-100</text>
          <text x="316" y="1055" fontSize="3.5" fontWeight="700" className="fill-foreground">→ neural crest cells</text>
          <text x="316" y="1067" fontSize="3.5" fontWeight="700" className="fill-foreground">melanoma, schwannoma,</text>
          <text x="316" y="1076" fontSize="3.5" fontWeight="700" className="fill-foreground">Langerhans cell histiocytosis</text>
        </g>
        <g>
          <rect x="556" y="1018" width="240" height="74" rx="10" className="fill-card stroke-border" />
          <rect x="556" y="1018" width="240" height="13" rx="10" className="fill-brand-soft" />
          <text x="676" y="1028" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">ENDOTHELIAL</text>
          <text x="568" y="1043" fontSize="4.4" fontWeight="800" className="fill-foreground">PECAM-1 / CD-31</text>
          <text x="568" y="1055" fontSize="3.5" fontWeight="700" className="fill-foreground">→ endothelial cells</text>
          <text x="568" y="1067" fontSize="3.5" fontWeight="700" className="fill-foreground">vascular tumors (eg,</text>
          <text x="568" y="1076" fontSize="3.5" fontWeight="700" className="fill-foreground">angiosarcoma)</text>
        </g>
        <g>
          <rect x="808" y="1018" width="240" height="74" rx="10" className="fill-card stroke-warning" strokeWidth="1.4" />
          <rect x="808" y="1018" width="240" height="13" rx="10" className="fill-warning-soft" />
          <text x="928" y="1028" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">MESENCHYMAL</text>
          <text x="820" y="1043" fontSize="4.4" fontWeight="800" className="fill-foreground">Vimentin</text>
          <text x="820" y="1055" fontSize="3.5" fontWeight="700" className="fill-foreground">→ mesenchymal tissue (fibroblasts,</text>
          <text x="820" y="1067" fontSize="3.5" fontWeight="700" className="fill-foreground">endothelial cells, macrophages)</text>
          <text x="820" y="1079" fontSize="3.4" fontWeight="800" className="fill-warning">mesenchymal tumors (eg, sarcoma),</text>
          <text x="820" y="1088" fontSize="3.4" fontWeight="800" className="fill-warning">BUT ALSO endometrial ca, RCC, meningioma</text>
        </g>
        {/* row 3 — the organ-specific pair */}
        <g>
          <rect x="52" y="1102" width="996" height="36" rx="10" className="fill-card stroke-border" />
          <text x="66" y="1116" fontSize="4.2" fontWeight="800" className="fill-foreground">PSA → prostatic epithelium → prostate cancer</text>
          <text x="66" y="1127" fontSize="3.4" className="fill-muted-foreground">the same protein the serum panel monitors — dual citizenship across the two pages</text>
          <text x="560" y="1116" fontSize="4.2" fontWeight="800" className="fill-foreground">TRAP → tartrate-resistant acid phosphatase → hairy cell leukemia</text>
          <text x="560" y="1127" fontSize="3.4" className="fill-muted-foreground">the one stain that names a hematologic diagnosis outright</text>
        </g>
      </g>

      {/* ===== P-GLYCOPROTEIN — the MDR1 efflux pump (book 223) ===== */}
      <g>
        <rect x="36" y="1156" width="1030" height="112" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1178" fontSize="6.4" fontWeight="800" className="fill-foreground">P-glycoprotein (MDR1) — the ATP-dependent efflux pump of chemotherapy resistance (book 223)</text>
        {/* the glyph: a cancer cell pumping chemo out */}
        <g>
          <rect x="52" y="1190" width="230" height="68" rx="14" className="fill-card stroke-border" />
          <text x="100" y="1202" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">cancer cell</text>
          <circle cx="100" cy="1225" r="4" className="fill-warning" />
          <circle cx="135" cy="1240" r="4" className="fill-warning" />
          <path d="M 108 1224 L 262 1224" className="stroke-warning" strokeWidth="1.2" strokeDasharray="3 3" />
          <path d="M 143 1239 L 262 1239" className="stroke-warning" strokeWidth="1.2" strokeDasharray="3 3" />
          <rect x="274" y="1212" width="16" height="26" rx="3" className="fill-warning-soft stroke-warning" />
          <text x="282" y="1208" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">P-gp</text>
          <text x="282" y="1248" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">ATP</text>
          <path d="M 296 1225 L 336 1225" className="stroke-warning" strokeWidth="1.6" />
          <path d="M 336 1225 L 330 1222 M 336 1225 L 330 1228" className="stroke-warning" strokeWidth="1.6" />
          <text x="342" y="1228" fontSize="3.4" fontWeight="700" className="fill-foreground">chemo agents</text>
          <text x="342" y="1237" fontSize="3.4" className="fill-muted-foreground">pumped out →</text>
        </g>
        <text x="360" y="1202" fontSize="3.7" fontWeight="700" className="fill-foreground">“ATP-dependent efflux pump, also called multidrug resistance protein 1 (MDR1).”</text>
        <text x="360" y="1213" fontSize="3.7" fontWeight="700" className="fill-foreground">“Expressed in some cancer cells to pump out toxins, including chemotherapeutic agents</text>
        <text x="360" y="1224" fontSize="3.7" fontWeight="700" className="fill-foreground">(one mechanism of ↓ responsiveness or resistance to chemotherapy over time).”</text>
        <text x="372" y="1238" fontSize="3.6" className="fill-muted-foreground">resistance by transport, not target mutation — the drug leaves the cell it was sent to kill;</text>
        <text x="372" y="1248" fontSize="3.6" className="fill-muted-foreground">a tumor can resist today what it responded to yesterday, its drug targets unchanged</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1280" width="1054" height="48" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1298" fontSize="5" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 244–245 / book 222–223 (Pathology — Neoplasia: Oncogenic microbes; Serum tumor markers; Cancer testing; Important immunohistochemical stains; P-glycoprotein)</text>
        <text x="42" y="1310" fontSize="4.4" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images on either page — four pure-text tables (8 microbe rows; 12 marker rows; 5 testing rows; 10 stain rows) plus the rule and P-glycoprotein paragraphs, adapted here as an ORIGINAL KYP visual; all four tables are carried verbatim in the note.</text>
        <text x="42" y="1322" fontSize="4.4" className="fill-muted-foreground">No margin notes or mnemonics print on either page (VLM census confirmed); the KYP memory layer is original. The source&apos;s own quirks — Kaposi (“Ka∞si”) sarcoma and “Calci2nin.” — are preserved as printed.</text>
      </g>
    </svg>
  );
}
