/* Pharmacology — PH-batch 27: Drug names (books 252–253, pdf 274–275 — the
 * TWO-PAGE stem table: "Drug names" on 252 + "Drug names (continued)" on
 * 253, columns ENDING / CATEGORY / EXAMPLE, 64 rows in 7 shaded group
 * bands). Census (pdfimages): ZERO raster images on both pages — the
 * pages' visual asset is the color-coded table itself (bold-blue ENDING
 * column, full-width shaded group bands — VLM-read at 120dpi in TWO
 * full-page passes, staging-ph27/vlm-census.txt; no red text, no
 * mnemonics, no -mab pointers, no margin notes, no images). This is an
 * ORIGINAL KYP ADAPTATION: the three-scan decode protocol (ENDING →
 * PREFIX → INFIX) across the top; the full 64-row table rebuilt as seven
 * compact family bands — page 252's Antimicrobial (13), Antineoplastic
 * (7), and CNS (12) clusters on the left, page 253's Autonomic (5),
 * Cardiovascular (7), Metabolic (6), and Other (14) clusters on the
 * right, every row reading ending → category · example in printed order;
 * the prefix/infix panel below (the printed gli- five and -vir seven,
 * plus the -mab/-cept humanization-code bridge to the biologic-agents
 * note, marked as beyond this page); and the sound-alike collision strip
 * the exam builds its distractors from. The band layout, the protocol,
 * the panel, and the strip are KYP's; every ending, category, and example
 * is preserved from the print, and both pages are also carried verbatim
 * in the note's table blocks. Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

const P252: { name: string; y: number; accent: string; soft: string; sub: string; rows: [string, string, string][] }[] = [
  { name: "ANTIMICROBIAL", y: 224, accent: "fill-success", soft: "fill-success-soft/30 stroke-success",
    sub: "13 rows — 6 antibacterial/antiparasitic endings + the seven -vir antivirals",
    rows: [
      ["-asvir", "NS5A inhibitor", "Ledipasvir"], ["-bendazole", "Antiparasitic/antihelminthic", "Mebendazole"],
      ["-buvir", "NS5B inhibitor", "Sofosbuvir"], ["-cillin", "Transpeptidase inhibitor", "Ampicillin"],
      ["-conazole", "Ergosterol synthesis inhibitor", "Ketoconazole"], ["-cycline", "Protein synthesis inhibitor", "Tetracycline"],
      ["-floxacin", "Fluoroquinolone", "Ciprofloxacin"], ["-mivir", "Neuraminidase inhibitor", "Oseltamivir"],
      ["-navir", "Protease inhibitor", "Ritonavir"], ["-ovir", "Viral DNA polymerase inhibitor", "Acyclovir"],
      ["-previr", "NS3/4A inhibitor", "Grazoprevir"], ["-tegravir", "Integrase inhibitor", "Dolutegravir"],
      ["-thromycin", "Macrolide", "Azithromycin"],
    ] },
  { name: "ANTINEOPLASTIC", y: 446, accent: "fill-emergency", soft: "fill-emergency-soft/30 stroke-emergency",
    sub: "7 rows — the oncology endings, rasburicase to irinotecan",
    rows: [
      ["-case", "Recombinant uricase", "Rasburicase"], ["-mustine", "Nitrosourea", "Carmustine"],
      ["-platin", "Platinum compound", "Cisplatin"], ["-poside", "Topoisomerase II inhibitor", "Etoposide"],
      ["-rubicin", "Anthracycline", "Doxorubicin"], ["-taxel", "Taxane", "Paclitaxel"],
      ["-tecan", "Topoisomerase I inhibitor", "Irinotecan"],
    ] },
  { name: "CNS", y: 584, accent: "fill-brand", soft: "fill-brand-soft/30 stroke-brand",
    sub: "12 rows — anesthesia, psychosis, mood, and the synapse (4 paired endings)",
    rows: [
      ["-flurane", "Inhaled anesthetic", "Sevoflurane"], ["-apine, -idone", "Atypical antipsychotic", "Quetiapine, risperidone"],
      ["-azine", "Typical antipsychotic", "Thioridazine"], ["-barbital", "Barbiturate", "Phenobarbital"],
      ["-benazine", "VMAT inhibitor", "Tetrabenazine"], ["-caine", "Local anesthetic", "Lidocaine"],
      ["-capone", "COMT inhibitor", "Entacapone"], ["-curium, -curonium", "Nondepolarizing neuromuscular blocker", "Atracurium, pancuronium"],
      ["-giline", "MAO-B inhibitor", "Selegiline"], ["-ipramine, -triptyline", "TCA", "Imipramine, amitriptyline"],
      ["-triptan", "5-HT1B/1D agonist", "Sumatriptan"], ["-zepam, -zolam", "Benzodiazepine", "Diazepam, alprazolam"],
    ] },
];

const P253: { name: string; y: number; accent: string; soft: string; sub: string; rows: [string, string, string][] }[] = [
  { name: "AUTONOMIC", y: 224, accent: "fill-warning", soft: "fill-warning-soft/40 stroke-warning",
    sub: "5 rows — the autonomic mirror: three endings, one receptor system, opposite directions",
    rows: [
      ["-chol", "Cholinergic agonist", "Bethanechol"], ["-olol", "β-blocker", "Propranolol"],
      ["-stigmine", "AChE inhibitor", "Neostigmine"], ["-terol", "β2-agonist", "Albuterol"],
      ["-zosin", "α1-blocker", "Prazosin"],
    ] },
  { name: "CARDIOVASCULAR", y: 334, accent: "fill-emergency", soft: "fill-emergency-soft/30 stroke-emergency",
    sub: "7 rows — sildenafil through apixaban: the RAAS, the vasculature, and the clot",
    rows: [
      ["-afil", "PDE-5 inhibitor", "Sildenafil"], ["-dipine", "Dihydropyridine Ca2+ channel blocker", "Amlodipine"],
      ["-parin", "Low-molecular-weight heparin", "Enoxaparin"], ["-plase", "Thrombolytic", "Alteplase"],
      ["-pril", "ACE inhibitor", "Captopril"], ["-sartan", "Angiotensin-II receptor blocker", "Losartan"],
      ["-xaban", "Direct factor Xa inhibitor", "Apixaban"],
    ] },
  { name: "METABOLIC", y: 472, accent: "fill-success", soft: "fill-success-soft/30 stroke-success",
    sub: "6 rows — the gli- five (one infix, five classes) + the -statin neighbor",
    rows: [
      ["-gliflozin", "SGLT-2 inhibitor", "Dapagliflozin"], ["-glinide", "Meglitinide", "Repaglinide"],
      ["-gliptin", "DPP-4 inhibitor", "Sitagliptin"], ["-glitazone", "PPAR-γ activator", "Pioglitazone"],
      ["-glutide", "GLP-1 analog", "Liraglutide"], ["-statin", "HMG-CoA reductase inhibitor", "Atorvastatin"],
    ] },
  { name: "OTHER", y: 596, accent: "fill-brand", soft: "fill-brand-soft/30 stroke-brand",
    sub: "14 rows — GI, ocular, respiratory, bone, and hormone endings, two chips wide",
    rows: [
      ["-caftor", "CFTR modulator", "Lumacaftor"], ["-dronate", "Bisphosphonate", "Alendronate"],
      ["-lukast", "CysLT1 receptor blocker", "Montelukast"], ["-lutamide", "Androgen receptor inhibitor", "Flutamide"],
      ["-pitant", "NK1 blocker", "Aprepitant"], ["-prazole", "Proton pump inhibitor", "Omeprazole"],
      ["-prost", "Prostaglandin analog", "Latanoprost"], ["-sentan", "Endothelin receptor antagonist", "Bosentan"],
      ["-setron", "5-HT3 blocker", "Ondansetron"], ["-steride", "5α-reductase inhibitor", "Finasteride"],
      ["-tadine", "H1-antagonist", "Loratadine"], ["-tidine", "H2-antagonist", "Cimetidine"],
      ["-trozole", "Aromatase inhibitor", "Anastrozole"], ["-vaptan", "ADH antagonist", "Tolvaptan"],
    ] },
];

export function DrugNameMap() {
  const w = 1102;
  const h = 1216;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drug names — the two-page stem table of books 252 and 253 rebuilt as seven family bands (Antimicrobial, Antineoplastic, CNS, Autonomic, Cardiovascular, Metabolic, Other — 64 ending-to-category-to-example rows in printed order), the three-scan decode protocol (ending, then prefix, then infix, where the -mab humanization codes live), the printed gli- and -vir infix families, the -mab/-cept bridge to the biologics page, and the sound-alike collision strip — an original KYP diagram of books 252–253." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Drug names — 64 stem endings, 7 family clusters, 3 scans: the name is a compressed monograph (original KYP diagram)</text>
        <rect x="742" y="25" width="320" height="18" className="fill-brand-soft" />
        <text x="902" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">64 endings · 7 clusters · 2 pages</text>
      </g>

      {/* ===== ZONE A — THE THREE-SCAN DECODE PROTOCOL ===== */}
      <g>
        <rect x="36" y="72" width="1030" height="100" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">THE THREE-SCAN DECODE PROTOCOL — read any unfamiliar generic name back-to-front (KYP protocol)</text>
        <text x="52" y="105" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the exam tests drugs you have never seen; the name itself carries the class, the mechanism, and half the adverse-effect list</text>
        {[
          ["AN UNFAMILIAR NAME", "the stem hands you a generic you have never seen", "fill-card stroke-border", "fill-foreground", 52, 200],
          ["SCAN 1 — THE ENDING", "the suffix names the class: -prazole PPI, -sartan ARB, -olol β-blocker, -afil PDE-5", "fill-brand-soft/40 stroke-brand", "fill-foreground", 272, 240],
          ["SCAN 2 — THE PREFIX", "the front resolves collisions: gli- family, -vir targets, the three -ozoles", "fill-warning-soft/40 stroke-warning", "fill-foreground", 532, 240],
          ["SCAN 3 — THE INFIX", "in -mab names the humanization code lives here: -xi- chimeric, -zu- humanized, -u- human", "fill-emergency-soft/30 stroke-emergency", "fill-foreground", 792, 246],
        ].map(([label, sub, bg, fg, x, bw], i) => (
          <g key={`scan-${i}`}>
            <rect x={x as number} y={116} width={bw as number} height={40} rx={8} className={bg as string} />
            <text x={(x as number) + (bw as number) / 2} y={132} textAnchor="middle" fontSize="4" fontWeight="800" className={fg as string}>{label as string}</text>
            <text x={(x as number) + (bw as number) / 2} y={142} textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">{sub as string}</text>
            {i < 3 && (
              <g>
                <line x1={(x as number) + (bw as number) + 4} y1={136} x2={(x as number) + (bw as number) + 14} y2={136} className="stroke-foreground" strokeWidth="1.2" />
                <path d={`M ${(x as number) + (bw as number) + 11} 132 L ${(x as number) + (bw as number) + 18} 136 L ${(x as number) + (bw as number) + 11} 140 Z`} className="fill-foreground" />
              </g>
            )}
          </g>
        ))}
      </g>

      {/* ===== ZONE B — THE SEVEN FAMILY BANDS (the full printed table) ===== */}
      <g>
        <rect x="36" y="182" width="1030" height="610" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="202" fontSize="5.2" fontWeight="800" className="fill-foreground">THE TWO-PAGE TABLE AS SEVEN FAMILY BANDS — every printed row, ending → category · example, in printed order</text>
        <text x="640" y="202" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">left: book 252 “Drug names” · right: book 253 “Drug names (continued)”</text>

        {/* left column — page 252 */}
        <text x="52" y="218" fontSize="4" fontWeight="800" className="fill-foreground">PAGE 252 — three clusters, 32 rows</text>
        {P252.map((band) => (
          <g key={`b252-${band.name}`}>
            <rect x="52" y={band.y} width="494" height={30 + band.rows.length * 14} rx="10" className={band.soft} />
            <text x="64" y={band.y + 16} fontSize="4.2" fontWeight="800" className={band.accent}>{band.name}</text>
            <text x={64 + band.name.length * 2.6 + 8} y={band.y + 16} fontSize="3" fontWeight="700" className="fill-muted-foreground">{band.sub}</text>
            {band.rows.map(([ending, category, example], i) => (
              <text key={`r252-${band.name}-${i}`} x="64" y={band.y + 30 + i * 14} fontSize="3.3">
                <tspan fontWeight="800" className="fill-brand">{ending}</tspan>
                <tspan className="fill-foreground"> → {category}</tspan>
                <tspan className="fill-muted-foreground"> · {example}</tspan>
              </text>
            ))}
          </g>
        ))}

        {/* right column — page 253 */}
        <text x="556" y="218" fontSize="4" fontWeight="800" className="fill-foreground">PAGE 253 — four clusters, 32 rows</text>
        {P253.map((band) => (
          <g key={`b253-${band.name}`}>
            <rect x="556" y={band.y} width="494" height={30 + band.rows.length * 14} rx="10" className={band.soft} />
            <text x="568" y={band.y + 16} fontSize="4.2" fontWeight="800" className={band.accent}>{band.name}</text>
            <text x={568 + band.name.length * 2.6 + 8} y={band.y + 16} fontSize="3" fontWeight="700" className="fill-muted-foreground">{band.sub}</text>
            {(band.name === "OTHER"
              ? [band.rows.slice(0, 7).map((r, i) => ({ r, i, x: 568 })), band.rows.slice(7).map((r, i) => ({ r, i, x: 812 }))]
              : [band.rows.map((r, i) => ({ r, i, x: 568 }))]
            ).flat().map(({ r, i, x }) => (
              <text key={`r253-${band.name}-${x}-${i}`} x={x} y={band.y + 30 + i * 14} fontSize="3.3">
                <tspan fontWeight="800" className="fill-brand">{r[0]}</tspan>
                <tspan className="fill-foreground"> → {r[1]}</tspan>
                <tspan className="fill-muted-foreground"> · {r[2]}</tspan>
              </text>
            ))}
          </g>
        ))}
        <text x="556" y="736" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the 14-row OTHER band reads two chips wide, printed order down each column (-caftor → -prost, then -sentan → -vaptan):</text>
        <text x="556" y="746" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the GI acid endings (-prazole, -tidine), the allergic (-tadine, -lukast), the ocular (-prost), the bone (-dronate), the</text>
        <text x="556" y="756" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">hormone (-lutamide, -steride, -trozole, -vaptan), the antiemetic pair (-setron, -pitant), and cystic fibrosis (-caftor).</text>
        <text x="556" y="766" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">The table ENDS at -vaptan (ADH antagonist, Tolvaptan) with the closing rule — no -mab or -cept rows print on either page.</text>
        <text x="556" y="776" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Quirk carried: the -dipine category prints “Dihydropyridine Ca2+ channel blocker” with a superscript 2+ (joined here).</text>
      </g>

      {/* ===== ZONE C — THE PREFIX & INFIX PANEL ===== */}
      <g>
        <rect x="36" y="802" width="1030" height="272" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="824" fontSize="5.2" fontWeight="800" className="fill-foreground">THE PREFIX &amp; INFIX PANEL — where the ending alone doesn’t decide, the middle of the name does</text>

        {/* card 1 — the gli- five (printed) */}
        <rect x="52" y="836" width="322" height="226" rx="10" className="fill-card stroke-border" />
        <text x="64" y="854" fontSize="4.4" fontWeight="800" className="fill-success">THE GLI-FIVE (printed, Metabolic)</text>
        <text x="64" y="864" fontSize="3" fontWeight="700" className="fill-muted-foreground">the infix says antidiabetic; the ENDING names the class</text>
        {[
          ["-gliflozin", "SGLT-2 inhibitor", "dapagliflozin — flushes glucose into the urine"],
          ["-glinide", "Meglitinide", "repaglinide — nudges early insulin"],
          ["-gliptin", "DPP-4 inhibitor", "sitagliptin — trims the incretin-chopping enzyme"],
          ["-glitazone", "PPAR-γ activator", "pioglitazone — tunes insulin sensitivity"],
          ["-glutide", "GLP-1 analog", "liraglutide — the incretin peptide"],
        ].map(([ending, klass, note], i) => (
          <g key={`gli-${i}`}>
            <rect x="64" y={872 + i * 36} width="298" height="32" rx="5" className="fill-success-soft/30 stroke-border" />
            <text x="74" y={885 + i * 36} fontSize="3.6" fontWeight="800" className="fill-success">{ending}</text>
            <text x="74" y={894 + i * 36} fontSize="3" fontWeight="800" className="fill-foreground">→ {klass}</text>
            <text x="74" y={901 + i * 36} fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{note}</text>
          </g>
        ))}

        {/* card 2 — the -vir seven (printed) */}
        <rect x="390" y="836" width="322" height="226" rx="10" className="fill-card stroke-border" />
        <text x="402" y="854" fontSize="4.4" fontWeight="800" className="fill-brand">THE VIR SEVEN (printed, Antimicrobial)</text>
        <text x="402" y="864" fontSize="3" fontWeight="700" className="fill-muted-foreground">-vir = virus; the infix names the target — A→5A, B→5B</text>
        {[
          ["-asvir", "NS5A inhibitor · ledipasvir"], ["-buvir", "NS5B inhibitor · sofosbuvir"],
          ["-previr", "NS3/4A inhibitor · grazoprevir"], ["-tegravir", "Integrase inhibitor · dolutegravir"],
          ["-mivir", "Neuraminidase inhibitor · oseltamivir"], ["-navir", "Protease inhibitor · ritonavir"],
          ["-ovir", "Viral DNA polymerase inhibitor · acyclovir"],
        ].map(([ending, note], i) => (
          <g key={`vir-${i}`}>
            <rect x="402" y={872 + i * 26} width="298" height="22" rx="5" className="fill-brand-soft/30 stroke-border" />
            <text x="412" y={882 + i * 26} fontSize="3.4" fontWeight="800" className="fill-brand">{ending}</text>
            <text x="412" y={890 + i * 26} fontSize="3" fontWeight="700" className="fill-foreground">{note}</text>
          </g>
        ))}

        {/* card 3 — the -mab/-cept bridge (beyond the page) */}
        <rect x="728" y="836" width="322" height="226" rx="10" className="fill-card stroke-emergency" />
        <text x="740" y="854" fontSize="4.4" fontWeight="800" className="fill-emergency">THE -MAB/-CEPT BRIDGE (beyond this page)</text>
        <text x="740" y="864" fontSize="3" fontWeight="700" className="fill-muted-foreground">NOT printed on 252–253 (VLM-confirmed) — the KYP bridge to the biologic-agents note</text>
        {[
          ["-mab", "the monoclonal antibody stem — the infix is the answer"],
          ["-u-", "human source (the “u” of human)"],
          ["-xi-", "chimeric — mouse-human MIX, highest infusion-reaction risk"],
          ["-zu-", "humanized — murine CDRs grafted onto a human framework"],
          ["-cept", "a receptor’s extracellular domain fused to immunoglobulin Fc"],
        ].map(([code, note], i) => (
          <g key={`mab-${i}`}>
            <rect x="740" y={872 + i * 30} width="298" height="26" rx="5" className="fill-emergency-soft/30 stroke-border" />
            <text x="750" y={883 + i * 30} fontSize="3.8" fontWeight="800" className="fill-emergency">{code}</text>
            <text x="750" y={892 + i * 30} fontSize="2.9" fontWeight="700" className="fill-foreground">{note}</text>
          </g>
        ))}
        <text x="740" y="1036" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">prefix families beyond the page (KYP context): dofa- — the class III antiarrhythmics</text>
        <text x="740" y="1044" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">(dofetilide) · gab- — the gabapentinoids, named in the book’s own pain-transmission line.</text>
      </g>

      {/* ===== ZONE D — THE SOUND-ALIKE COLLISION STRIP ===== */}
      <g>
        <rect x="36" y="1084" width="1030" height="50" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1102" fontSize="4.6" fontWeight="800" className="fill-foreground">THE COLLISION STRIP — endings that differ by one letter (the exam’s distractor factory; Scan 2 territory)</text>
        {[
          ["-olol vs -terol", "β-blocker vs β2-agonist"],
          ["-tadine vs -tidine", "H1- vs H2-antagonist"],
          ["-prazole · -conazole · -trozole", "PPI vs antifungal vs aromatase inhibitor"],
          ["-setron vs -triptan", "5-HT3 blocker vs 5-HT1B/1D agonist"],
          ["-statin vs -stigmine", "HMG-CoA vs AChE inhibitor"],
          ["-pril vs -sartan", "ACE vs ARB (the bradykinin split)"],
        ].map(([pair, classes], i) => (
          <g key={`col-${i}`}>
            <rect x={52 + i * 167} y={1108} width={161} height={18} rx={5} className="fill-card stroke-warning" />
            <text x={60 + i * 167} y={1115} fontSize="3" fontWeight="800" className="fill-foreground">{pair}</text>
            <text x={60 + i * 167} y={1122} fontSize="2.6" fontWeight="700" className="fill-muted-foreground">{classes}</text>
          </g>
        ))}
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1144" width="1054" height="58" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1162" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 274–275 / books 252–253 (Pharmacology — Miscellaneous: Drug names; Drug names (continued))</text>
        <text x="42" y="1174" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images on both pages — the visual asset is the color-coded table itself (bold-blue ENDING column, seven shaded group bands), VLM-read at 120dpi</text>
        <text x="42" y="1184" fontSize="4" className="fill-muted-foreground">in TWO full-page passes (staging-ph27/vlm-census.txt); no red text, no mnemonics, no -mab pointers, no margin notes. This diagram is an ORIGINAL KYP ADAPTATION — the seven-band layout,</text>
        <text x="42" y="1194" fontSize="4" className="fill-muted-foreground">the three-scan protocol, the prefix/infix panel, and the collision strip are KYP’s; all 64 rows are preserved from the print, and both pages are also carried verbatim in the note’s table blocks.</text>
      </g>
    </svg>
  );
}
