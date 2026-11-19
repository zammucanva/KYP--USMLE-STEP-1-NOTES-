"use client";

// Original KYP visual — Neoplasia block, P19 (First Aid 2026, Part 1
// pdf 246-248 / book 224-226, PATHOLOGY—NEOPLASIA: Paraneoplastic
// syndromes; PATHOLOGY—AGInG: Normal aging + Lipofuscin). The Pathology
// chapter FINALE (19/19). All SVG uses theme tokens (currentColor +
// Tailwind classes), so it stays readable in light AND dark mode.
// Census (pdfimages + VLM): p246 ZERO rasters (pure four-band table);
// p247 ONE 175x126 8bpc lettered micrograph beside the Lipofuscin
// block — COPYRIGHTED, described in text only, never reproduced (the
// M32 house convention); p248 = the printed NOTES page (7 nonempty
// lines), claimed by this topic as continuation and documented in the
// footer. The KYP memory layer is original.

// ---------------------------------------------------------------------------
// Pathology P19 — Paraneoplastic syndromes & normal aging map
// ---------------------------------------------------------------------------

export function ParaneoplasticSyndromeMap() {
  const w = 1102;
  const h = 1444;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Paraneoplastic syndromes and normal aging — the map: the paraneoplastic table as its four family bands (musculoskeletal and cutaneous, endocrine, hematologic, neuromuscular) with every manifestation-mechanism-tumor row, the five ectopic-hormone rows tagged, the SCLC and thymoma and teratoma-neuroblastoma hotspots, the eleven-system aging decline grid with the intrinsic-versus-extrinsic skin fork, and the lipofuscin card with photograph A described in text — an original KYP adaptation of book 224-226." className="min-w-[1040px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Paraneoplastic syndromes &amp; normal aging — the map (original KYP adaptation)</text>
        <rect x="848" y="24" width="198" height="18" className="fill-brand-soft" />
        <text x="947" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">four bands · eleven systems</text>
      </g>

      {/* ===== SECTION 1 — the paraneoplastic syndromes table ===== */}
      <g>
        <rect x="24" y="72" width="1054" height="868" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="94" fontSize="8" fontWeight="800" className="fill-foreground">The paraneoplastic syndromes (book 224 — verbatim, four bands)</text>
        <text x="46" y="112" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">mAnIfeSTATIOn</text>
        <text x="240" y="112" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">DeSCrIPTIOn/meCHAnISm</text>
        <text x="600" y="112" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">mOST COmmOnLY ASSOCIATeD TUmOr(S)</text>

        {/* ===== BAND 1 — musculoskeletal and cutaneous ===== */}
        <g>
          <rect x="36" y="122" width="1030" height="16" rx="6" className="fill-brand-soft" />
          <text x="44" y="133.5" fontSize="5.6" fontWeight="800" className="fill-brand">MUSCULOSKELETAL &amp; CUTANEOUS</text>
          <text x="1058" y="133.5" textAnchor="end" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the skin and periosteum announce the viscera</text>
          {/* row 1 — Dermatomyositis */}
          <rect x="36" y="140" width="192" height="38" className="fill-card stroke-border" />
          <text x="46" y="162" fontSize="4.4" fontWeight="800" className="fill-foreground">Dermatomyositis</text>
          <rect x="232" y="140" width="354" height="38" className="fill-card stroke-border" />
          <text x="240" y="153" fontSize="3.5" fontWeight="700" className="fill-foreground">Progressive proximal muscle weakness, Gottron</text>
          <text x="240" y="162" fontSize="3.5" fontWeight="700" className="fill-foreground">papules, heliotrope rash</text>
          <rect x="592" y="140" width="474" height="38" className="fill-card stroke-border" />
          <text x="600" y="153" fontSize="3.5" fontWeight="700" className="fill-foreground">Adenocarcinomas, especially ovarian</text>
          <text x="600" y="168" fontSize="3.4" className="fill-muted-foreground">the rash-bearing proximal weakness that sends the search to the ovary</text>
          {/* row 2 — Acanthosis nigricans */}
          <rect x="36" y="180" width="192" height="38" className="fill-card stroke-border" />
          <text x="46" y="202" fontSize="4.4" fontWeight="800" className="fill-foreground">Acanthosis nigricans</text>
          <rect x="232" y="180" width="354" height="38" className="fill-card stroke-border" />
          <text x="240" y="193" fontSize="3.5" fontWeight="700" className="fill-foreground">Hyperpigmented velvety plaques in</text>
          <text x="240" y="202" fontSize="3.5" fontWeight="700" className="fill-foreground">axilla and neck</text>
          <rect x="592" y="180" width="474" height="38" className="fill-card stroke-border" />
          <text x="600" y="193" fontSize="3.5" fontWeight="700" className="fill-foreground">Gastric adenocarcinoma and other visceral malignancies</text>
          <text x="600" y="208" fontSize="3.4" className="fill-muted-foreground">velvet in the flexures — inspect the stomach</text>
          {/* row 3 — Sign of Leser-Trélat */}
          <rect x="36" y="220" width="192" height="38" className="fill-card stroke-border" />
          <text x="46" y="242" fontSize="4.4" fontWeight="800" className="fill-foreground">Sign of Leser-Trélat</text>
          <rect x="232" y="220" width="354" height="38" className="fill-card stroke-border" />
          <text x="240" y="233" fontSize="3.5" fontWeight="700" className="fill-foreground">Sudden onset of multiple seborrheic</text>
          <text x="240" y="242" fontSize="3.5" fontWeight="700" className="fill-foreground">keratoses</text>
          <rect x="592" y="220" width="474" height="38" className="fill-card stroke-border" />
          <text x="600" y="233" fontSize="3.5" fontWeight="700" className="fill-foreground">GI adenocarcinomas and other visceral malignancies</text>
          <text x="600" y="248" fontSize="3.4" className="fill-muted-foreground">a crop of barnacles appearing all at once is the alarm</text>
          {/* row 4 — Hypertrophic osteoarthropathy */}
          <rect x="36" y="260" width="192" height="38" className="fill-card stroke-border" />
          <text x="46" y="274" fontSize="4.4" fontWeight="800" className="fill-foreground">Hypertrophic</text>
          <text x="46" y="284" fontSize="4.4" fontWeight="800" className="fill-foreground">osteoarthropathy</text>
          <rect x="232" y="260" width="354" height="38" className="fill-card stroke-border" />
          <text x="240" y="273" fontSize="3.5" fontWeight="700" className="fill-foreground">Abnormal proliferation of skin and bone at</text>
          <text x="240" y="282" fontSize="3.5" fontWeight="700" className="fill-foreground">distal extremities → clubbing, arthralgia, joint</text>
          <text x="240" y="291" fontSize="3.5" fontWeight="700" className="fill-foreground">effusions, periostosis of tubular bones</text>
          <rect x="592" y="260" width="474" height="38" className="fill-card stroke-border" />
          <text x="600" y="273" fontSize="3.5" fontWeight="700" className="fill-foreground">Adenocarcinoma of the lung</text>
          <text x="600" y="288" fontSize="3.4" className="fill-muted-foreground">clubbing that arrives with a joint effusion — image the chest</text>
        </g>

        {/* ===== BAND 2 — endocrine (with the two-row hypercalcemia span) ===== */}
        <g>
          <rect x="36" y="306" width="1030" height="16" rx="6" className="fill-warning-soft" />
          <text x="44" y="317.5" fontSize="5.6" fontWeight="800" className="fill-warning">ENDOCRINE</text>
          <text x="1058" y="317.5" textAnchor="end" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the ectopic-hormone rows — every one a tumor keeping one endocrine skill</text>
          {/* hypercalcemia — the spanning manifestation cell (two mechanism rows) */}
          <rect x="36" y="324" width="192" height="70" rx="8" className="fill-warning-soft/40 stroke-warning" />
          <text x="132" y="348" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-warning">Hypercalcemia</text>
          <text x="132" y="360" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">one manifestation cell</text>
          <text x="132" y="368" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">spanning TWO mechanism</text>
          <text x="132" y="376" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">rows — PTHrP + calcitriol</text>
          <rect x="232" y="324" width="354" height="34" className="fill-card stroke-border" />
          <text x="240" y="345" fontSize="4" fontWeight="800" className="fill-foreground">PTHrP</text>
          <rect x="484" y="328" width="94" height="12" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="531" y="336.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-emergency">ECTOPIC HORMONE</text>
          <rect x="592" y="324" width="474" height="34" className="fill-card stroke-border" />
          <text x="600" y="337" fontSize="3.5" fontWeight="700" className="fill-foreground">Squamous cell carcinomas of lung, head, and neck; renal,</text>
          <text x="600" y="346" fontSize="3.5" fontWeight="700" className="fill-foreground">bladder, breast, and ovarian carcinomas</text>
          <text x="600" y="355" fontSize="3.4" className="fill-muted-foreground">[printed as the fused small-caps fragment “SCa2+mous cell carcinomas” — the source&apos;s red-highlighted “Ca”]</text>
          <rect x="232" y="360" width="354" height="34" className="fill-card stroke-border" />
          <text x="240" y="374" fontSize="3.5" fontWeight="800" className="fill-foreground">↑ 1,25-(OH)2 vitamin D3 (calcitriol)</text>
          <rect x="484" y="364" width="94" height="12" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="531" y="372.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-emergency">ECTOPIC HORMONE</text>
          <rect x="592" y="360" width="474" height="34" className="fill-card stroke-border" />
          <text x="600" y="373" fontSize="3.5" fontWeight="700" className="fill-foreground">Lymphoma</text>
          <text x="600" y="388" fontSize="3.4" className="fill-muted-foreground">the ectopic vitamin-D-activation route (the granuloma 1α-hydroxylase logic, P11)</text>
          {/* Cushing syndrome */}
          <rect x="36" y="396" width="192" height="34" className="fill-card stroke-border" />
          <text x="46" y="416" fontSize="4.4" fontWeight="800" className="fill-foreground">Cushing syndrome</text>
          <rect x="232" y="396" width="354" height="34" className="fill-card stroke-border" />
          <text x="240" y="416" fontSize="4" fontWeight="800" className="fill-foreground">↑ ACTH</text>
          <rect x="484" y="400" width="94" height="12" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="531" y="408.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-emergency">ECTOPIC HORMONE</text>
          <rect x="592" y="396" width="474" height="34" className="fill-card stroke-border" />
          <text x="600" y="410" fontSize="3.5" fontWeight="700" className="fill-foreground">Small cell lung cancer</text>
          <text x="600" y="424" fontSize="3.4" className="fill-muted-foreground">[the printed tumor cell is MERGED — it spans the Cushing and SIADH rows]</text>
          {/* Hyponatremia (SIADH) */}
          <rect x="36" y="432" width="192" height="34" className="fill-card stroke-border" />
          <text x="46" y="446" fontSize="4.4" fontWeight="800" className="fill-foreground">Hyponatremia</text>
          <text x="46" y="456" fontSize="4.4" fontWeight="800" className="fill-foreground">(SIADH)</text>
          <rect x="232" y="432" width="354" height="34" className="fill-card stroke-border" />
          <text x="240" y="452" fontSize="4" fontWeight="800" className="fill-foreground">↑ ADH</text>
          <rect x="484" y="436" width="94" height="12" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="531" y="444.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-emergency">ECTOPIC HORMONE</text>
          <rect x="592" y="432" width="474" height="34" className="fill-card stroke-border" />
          <text x="600" y="446" fontSize="3.5" fontWeight="700" className="fill-foreground">Small cell lung cancer</text>
          <text x="600" y="460" fontSize="3.4" className="fill-muted-foreground">euvolemic hypo-osmolar sodium with urine that stays concentrated</text>
        </g>

        {/* ===== BAND 3 — hematologic ===== */}
        <g>
          <rect x="36" y="474" width="1030" height="16" rx="6" className="fill-emergency-soft" />
          <text x="44" y="485.5" fontSize="5.6" fontWeight="800" className="fill-emergency">HEMATOLOGIC</text>
          <text x="1058" y="485.5" textAnchor="end" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">EPO · the thymoma trio · the hypercoagulable pair</text>
          {/* Polycythemia */}
          <rect x="36" y="492" width="192" height="42" className="fill-card stroke-border" />
          <text x="46" y="510" fontSize="4.4" fontWeight="800" className="fill-foreground">Polycythemia</text>
          <text x="46" y="522" fontSize="3.4" className="fill-muted-foreground">the EPO axis</text>
          <rect x="232" y="492" width="354" height="42" className="fill-card stroke-border" />
          <text x="240" y="506" fontSize="4" fontWeight="800" className="fill-foreground">↑ Erythropoietin</text>
          <rect x="484" y="496" width="94" height="12" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="531" y="504.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-emergency">ECTOPIC HORMONE</text>
          <text x="240" y="522" fontSize="3.4" className="fill-muted-foreground">the source&apos;s own printed mnemonic, verbatim:</text>
          <text x="240" y="530" fontSize="3.5" fontWeight="700" className="fill-foreground">“Paraneoplastic rise to High hematocrit levels”</text>
          <rect x="592" y="492" width="474" height="42" className="fill-card stroke-border" />
          <text x="600" y="506" fontSize="3.5" fontWeight="700" className="fill-foreground">Pheochromocytoma, renal cell carcinoma, HCC,</text>
          <text x="600" y="515" fontSize="3.5" fontWeight="700" className="fill-foreground">hemangioblastoma, leiomyoma</text>
          <text x="600" y="529" fontSize="3.4" className="fill-muted-foreground">[this list prints at raw lines 140-141 — AFTER the myasthenia gravis row]</text>
          {/* Pure red cell aplasia */}
          <rect x="36" y="536" width="192" height="32" className="fill-card stroke-border" />
          <text x="46" y="556" fontSize="4.4" fontWeight="800" className="fill-foreground">Pure red cell aplasia</text>
          <rect x="232" y="536" width="354" height="32" className="fill-card stroke-border" />
          <text x="240" y="556" fontSize="3.5" fontWeight="700" className="fill-foreground">Anemia with low reticulocytes</text>
          <rect x="592" y="536" width="474" height="32" className="fill-card stroke-border" />
          <text x="600" y="550" fontSize="3.5" fontWeight="700" className="fill-foreground">Thymoma</text>
          <text x="600" y="564" fontSize="3.4" className="fill-muted-foreground">[merged tumor cell spans pure red cell aplasia, Good syndrome, myasthenia gravis]</text>
          {/* Good syndrome */}
          <rect x="36" y="570" width="192" height="32" className="fill-card stroke-border" />
          <text x="46" y="590" fontSize="4.4" fontWeight="800" className="fill-foreground">Good syndrome</text>
          <rect x="232" y="570" width="354" height="32" className="fill-card stroke-border" />
          <text x="240" y="590" fontSize="3.5" fontWeight="700" className="fill-foreground">Hypogammaglobulinemia</text>
          <rect x="592" y="570" width="474" height="32" className="fill-card stroke-border" />
          <text x="600" y="590" fontSize="3.5" fontWeight="700" className="fill-foreground">Thymoma</text>
          {/* Trousseau syndrome */}
          <rect x="36" y="604" width="192" height="32" className="fill-card stroke-border" />
          <text x="46" y="624" fontSize="4.4" fontWeight="800" className="fill-foreground">Trousseau syndrome</text>
          <rect x="232" y="604" width="354" height="32" className="fill-card stroke-border" />
          <text x="240" y="624" fontSize="3.5" fontWeight="700" className="fill-foreground">Migratory superficial thrombophlebitis</text>
          <rect x="592" y="604" width="474" height="32" className="fill-card stroke-border" />
          <text x="600" y="618" fontSize="3.5" fontWeight="700" className="fill-foreground">Adenocarcinomas, especially pancreatic</text>
          <text x="600" y="632" fontSize="3.4" className="fill-muted-foreground">[merged tumor cell spans the Trousseau and endocarditis rows]</text>
          {/* Nonbacterial thrombotic endocarditis */}
          <rect x="36" y="638" width="192" height="36" className="fill-card stroke-border" />
          <text x="46" y="652" fontSize="4.4" fontWeight="800" className="fill-foreground">Nonbacterial</text>
          <text x="46" y="662" fontSize="4.4" fontWeight="800" className="fill-foreground">thrombotic endocarditis</text>
          <rect x="232" y="638" width="354" height="36" className="fill-card stroke-border" />
          <text x="240" y="652" fontSize="3.5" fontWeight="700" className="fill-foreground">Deposition of sterile platelet thrombi</text>
          <text x="240" y="661" fontSize="3.5" fontWeight="700" className="fill-foreground">on heart valves</text>
          <rect x="592" y="638" width="474" height="36" className="fill-card stroke-border" />
          <text x="600" y="652" fontSize="3.5" fontWeight="700" className="fill-foreground">Adenocarcinomas, especially pancreatic</text>
          <text x="600" y="666" fontSize="3.4" className="fill-muted-foreground">sterile — no organisms, no fever, no positive cultures (vs infective endocarditis)</text>
        </g>

        {/* ===== BAND 4 — neuromuscular (the autoimmune crossfire) ===== */}
        <g>
          <rect x="36" y="682" width="1030" height="16" rx="6" className="fill-brand-soft" />
          <text x="44" y="693.5" fontSize="5.6" fontWeight="800" className="fill-brand">NEUROMUSCULAR</text>
          <text x="1058" y="693.5" textAnchor="end" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the autoimmune crossfire — tumor antigens, neuronal targets</text>
          {/* Anti-NMDA receptor encephalitis */}
          <rect x="36" y="700" width="192" height="38" className="fill-card stroke-border" />
          <text x="46" y="714" fontSize="4.4" fontWeight="800" className="fill-foreground">Anti-NMDA receptor</text>
          <text x="46" y="724" fontSize="4.4" fontWeight="800" className="fill-foreground">encephalitis</text>
          <rect x="232" y="700" width="354" height="38" className="fill-card stroke-border" />
          <text x="240" y="713" fontSize="3.5" fontWeight="700" className="fill-foreground">Psychiatric disturbance, memory deficits,</text>
          <text x="240" y="722" fontSize="3.5" fontWeight="700" className="fill-foreground">seizures, dyskinesias, autonomic instability,</text>
          <text x="240" y="731" fontSize="3.5" fontWeight="700" className="fill-foreground">language dysfunction</text>
          <rect x="592" y="700" width="474" height="38" className="fill-card stroke-border" />
          <text x="600" y="713" fontSize="3.5" fontWeight="700" className="fill-foreground">Ovarian teratoma</text>
          <text x="600" y="728" fontSize="3.4" className="fill-muted-foreground">the teratoma&apos;s neural tissue carries the NMDA-receptor antigen</text>
          {/* Opsoclonus-myoclonus ataxia syndrome */}
          <rect x="36" y="740" width="192" height="36" className="fill-card stroke-border" />
          <text x="46" y="754" fontSize="4.4" fontWeight="800" className="fill-foreground">Opsoclonus-</text>
          <text x="46" y="764" fontSize="4.4" fontWeight="800" className="fill-foreground">myoclonus ataxia</text>
          <text x="46" y="774" fontSize="4.4" fontWeight="800" className="fill-foreground">syndrome</text>
          <rect x="232" y="740" width="354" height="36" className="fill-card stroke-border" />
          <text x="240" y="754" fontSize="3.5" fontWeight="700" className="fill-foreground">“Dancing eyes, dancing feet”</text>
          <text x="240" y="766" fontSize="3.4" className="fill-muted-foreground">the source&apos;s own mnemonic — carried verbatim</text>
          <rect x="592" y="740" width="474" height="36" className="fill-card stroke-border" />
          <text x="600" y="754" fontSize="3.5" fontWeight="700" className="fill-foreground">Neuroblastoma (children), small cell lung</text>
          <text x="600" y="763" fontSize="3.5" fontWeight="700" className="fill-foreground">cancer (adults)</text>
          <text x="600" y="773" fontSize="3.4" className="fill-muted-foreground">the age splits the tumor</text>
          {/* Paraneoplastic cerebellar degeneration */}
          <rect x="36" y="778" width="192" height="42" className="fill-card stroke-border" />
          <text x="46" y="792" fontSize="4.4" fontWeight="800" className="fill-foreground">Paraneoplastic</text>
          <text x="46" y="802" fontSize="4.4" fontWeight="800" className="fill-foreground">cerebellar</text>
          <text x="46" y="812" fontSize="4.4" fontWeight="800" className="fill-foreground">degeneration</text>
          <rect x="232" y="778" width="354" height="42" className="fill-card stroke-border" />
          <text x="240" y="792" fontSize="3.5" fontWeight="700" className="fill-foreground">Antibodies against antigens</text>
          <text x="240" y="801" fontSize="3.5" fontWeight="700" className="fill-foreground">in Purkinje cells</text>
          <text x="240" y="814" fontSize="3.4" className="fill-muted-foreground">the anti-Purkinje antibody map:</text>
          <rect x="592" y="778" width="474" height="42" className="fill-card stroke-border" />
          <text x="600" y="791" fontSize="3.5" fontWeight="700" className="fill-foreground">Small cell lung cancer (anti-Hu), gynecologic and breast</text>
          <text x="600" y="800" fontSize="3.5" fontWeight="700" className="fill-foreground">cancers (anti-Yo), and Hodgkin lymphoma (anti-Tr)</text>
          <text x="600" y="814" fontSize="3.4" className="fill-muted-foreground">anti-Hu = lung · anti-Yo = gyn/breast · anti-Tr = Hodgkin</text>
          {/* Paraneoplastic encephalomyelitis */}
          <rect x="36" y="822" width="192" height="32" className="fill-card stroke-border" />
          <text x="46" y="836" fontSize="4.4" fontWeight="800" className="fill-foreground">Paraneoplastic</text>
          <text x="46" y="846" fontSize="4.4" fontWeight="800" className="fill-foreground">encephalomyelitis</text>
          <rect x="232" y="822" width="354" height="32" className="fill-card stroke-border" />
          <text x="240" y="842" fontSize="3.5" fontWeight="700" className="fill-foreground">Anti-Hu in neurons</text>
          <rect x="592" y="822" width="474" height="32" className="fill-card stroke-border" />
          <text x="600" y="836" fontSize="3.5" fontWeight="700" className="fill-foreground">Small cell lung cancer</text>
          <text x="600" y="850" fontSize="3.4" className="fill-muted-foreground">[the merged tumor cell spans encephalomyelitis and Lambert-Eaton]</text>
          {/* Lambert-Eaton myasthenic syndrome */}
          <rect x="36" y="856" width="192" height="36" className="fill-card stroke-border" />
          <text x="46" y="870" fontSize="4.4" fontWeight="800" className="fill-foreground">Lambert-Eaton</text>
          <text x="46" y="880" fontSize="4.4" fontWeight="800" className="fill-foreground">myasthenic syndrome</text>
          <rect x="232" y="856" width="354" height="36" className="fill-card stroke-border" />
          <text x="240" y="870" fontSize="3.5" fontWeight="700" className="fill-foreground">Antibodies against presynaptic</text>
          <text x="240" y="879" fontSize="3.5" fontWeight="700" className="fill-foreground">(P/Q-type) Ca2+ channels at NMJ</text>
          <rect x="592" y="856" width="474" height="36" className="fill-card stroke-border" />
          <text x="600" y="870" fontSize="3.5" fontWeight="700" className="fill-foreground">Small cell lung cancer</text>
          <text x="600" y="885" fontSize="3.4" className="fill-muted-foreground">PRESYNAPTIC — weakness IMPROVES with repeated use (facilitation)</text>
          {/* Myasthenia gravis */}
          <rect x="36" y="894" width="192" height="38" className="fill-card stroke-border" />
          <text x="46" y="908" fontSize="4.4" fontWeight="800" className="fill-foreground">Myasthenia gravis</text>
          <rect x="232" y="894" width="354" height="38" className="fill-card stroke-border" />
          <text x="240" y="908" fontSize="3.5" fontWeight="700" className="fill-foreground">Antibodies against postsynaptic ACh</text>
          <text x="240" y="917" fontSize="3.5" fontWeight="700" className="fill-foreground">receptors at NMJ</text>
          <rect x="592" y="894" width="474" height="38" className="fill-card stroke-border" />
          <text x="600" y="908" fontSize="3.5" fontWeight="700" className="fill-foreground">Thymoma</text>
          <text x="600" y="923" fontSize="3.4" className="fill-muted-foreground">POSTSYNAPTIC — weakness FATIGUES with repeated use (ptosis worse at day&apos;s end)</text>
        </g>
      </g>

      {/* ===== SECTION 2 — the tumor hotspots ===== */}
      <g>
        <rect x="24" y="950" width="1054" height="104" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="968" fontSize="8" fontWeight="800" className="fill-foreground">The tumor hotspots — three primaries own the table</text>
        <g>
          <rect x="36" y="978" width="354" height="66" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
          <text x="48" y="992" fontSize="5" fontWeight="800" className="fill-emergency">SMALL CELL LUNG CANCER — the six-row owner</text>
          <text x="48" y="1004" fontSize="3.5" fontWeight="700" className="fill-foreground">Cushing (↑ ACTH) · Hyponatremia/SIADH (↑ ADH)</text>
          <text x="48" y="1013" fontSize="3.5" fontWeight="700" className="fill-foreground">Lambert-Eaton · encephalomyelitis (anti-Hu)</text>
          <text x="48" y="1022" fontSize="3.5" fontWeight="700" className="fill-foreground">cerebellar degeneration (anti-Hu) · adult opsoclonus</text>
          <text x="48" y="1036" fontSize="3.4" className="fill-muted-foreground">the neuroendocrine tumor that secretes AND expresses</text>
        </g>
        <g>
          <rect x="398" y="978" width="334" height="66" rx="10" className="fill-brand-soft/40 stroke-brand" />
          <text x="410" y="992" fontSize="5" fontWeight="800" className="fill-brand">THYMOMA TAKES THREE</text>
          <text x="410" y="1004" fontSize="3.5" fontWeight="700" className="fill-foreground">Pure red cell aplasia (anemia, low reticulocytes)</text>
          <text x="410" y="1013" fontSize="3.5" fontWeight="700" className="fill-foreground">Good syndrome (hypogammaglobulinemia)</text>
          <text x="410" y="1022" fontSize="3.5" fontWeight="700" className="fill-foreground">Myasthenia gravis (postsynaptic ACh receptors)</text>
          <text x="410" y="1036" fontSize="3.4" className="fill-muted-foreground">the T-cell school gone wrong three ways</text>
        </g>
        <g>
          <rect x="740" y="978" width="326" height="66" rx="10" className="fill-warning-soft/40 stroke-warning" />
          <text x="752" y="992" fontSize="5" fontWeight="800" className="fill-warning">THE TERATOMA · NEUROBLASTOMA PAIR</text>
          <text x="752" y="1004" fontSize="3.5" fontWeight="700" className="fill-foreground">Anti-NMDA receptor encephalitis ← ovarian teratoma</text>
          <text x="752" y="1013" fontSize="3.5" fontWeight="700" className="fill-foreground">Opsoclonus-myoclonus ← neuroblastoma (children)</text>
          <text x="752" y="1022" fontSize="3.5" fontWeight="700" className="fill-foreground">“Dancing eyes, dancing feet” — age splits the tumor</text>
          <text x="752" y="1036" fontSize="3.4" className="fill-muted-foreground">children: neuroblastoma · adults: small cell lung cancer</text>
        </g>
      </g>

      {/* ===== SECTION 3 — normal aging ===== */}
      <g>
        <rect x="24" y="1064" width="1054" height="312" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="1086" fontSize="8" fontWeight="800" className="fill-foreground">Normal aging (book 225 — verbatim, eleven systems)</text>
        <rect x="36" y="1096" width="1030" height="28" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="48" y="1108" fontSize="3.6" fontWeight="700" className="fill-foreground">Time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease.</text>
        <text x="48" y="1118" fontSize="3.6" fontWeight="700" className="fill-foreground">THE THREE CLOCKS — GENETIC (eg, telomere shortening) · EPIGENETIC (eg, DNA methylation) · METABOLIC (eg, mitochondrial dysfunction)</text>
        <text x="46" y="1134" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">SYSTEM</text>
        <text x="130" y="1134" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">VERBATIM DECLINE</text>
        <text x="562" y="1134" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">SYSTEM</text>
        <text x="646" y="1134" fontSize="4.2" fontWeight="800" className="fill-muted-foreground">VERBATIM DECLINE</text>
        {/* left column */}
        <g>
          <rect x="36" y="1140" width="510" height="32" className="fill-card stroke-border" />
          <text x="46" y="1153" fontSize="4.2" fontWeight="800" className="fill-foreground">Cardiovascular</text>
          <text x="130" y="1151" fontSize="3.5" fontWeight="700" className="fill-foreground">↓ arterial compliance (↑ stiffness) · ↑ aortic diameter · ↓ LV cavity size + sigmoid-shaped</text>
          <text x="130" y="1160" fontSize="3.5" fontWeight="700" className="fill-foreground">interventricular septum · ↑ LA cavity size · valve calcification · ↓ maximum heart rate</text>
          <rect x="36" y="1176" width="510" height="16" className="fill-card stroke-border" />
          <text x="46" y="1187" fontSize="4.2" fontWeight="800" className="fill-foreground">Gastrointestinal</text>
          <text x="130" y="1187" fontSize="3.5" fontWeight="700" className="fill-foreground">↓ LES tone · ↓ gastric mucosal protection · ↓ colonic motility</text>
          <rect x="36" y="1196" width="510" height="20" className="fill-card stroke-border" />
          <text x="46" y="1210" fontSize="4.2" fontWeight="800" className="fill-foreground">Hematopoietic</text>
          <text x="130" y="1208" fontSize="3.5" fontWeight="700" className="fill-foreground">↓ bone marrow mass, ↑ bone marrow fat; less vigorous</text>
          <text x="130" y="1214" fontSize="3.5" fontWeight="700" className="fill-foreground">response to stressors (eg, blood loss)</text>
          <rect x="36" y="1220" width="510" height="32" className="fill-card stroke-border" />
          <text x="46" y="1233" fontSize="4.2" fontWeight="800" className="fill-foreground">Immune</text>
          <text x="130" y="1231" fontSize="3.5" fontWeight="700" className="fill-foreground">thymic involution → ↓ naïve T cells (indirectly ↓ naïve B cells), memory</text>
          <text x="130" y="1240" fontSize="3.5" fontWeight="700" className="fill-foreground">B and T cells preserved → diminished response to novel antigens</text>
          <text x="130" y="1249" fontSize="3.4" className="fill-muted-foreground">(eg, pathogens, vaccines)</text>
          <rect x="36" y="1256" width="510" height="16" className="fill-card stroke-border" />
          <text x="46" y="1267" fontSize="4.2" fontWeight="800" className="fill-foreground">Musculoskeletal</text>
          <text x="130" y="1267" fontSize="3.5" fontWeight="700" className="fill-foreground">↓ muscle mass (sarcopenia) · ↓ bone mass (osteopenia) · cartilage thinning</text>
          <rect x="36" y="1276" width="510" height="20" className="fill-card stroke-border" />
          <text x="46" y="1290" fontSize="4.2" fontWeight="800" className="fill-foreground">Nervous</text>
          <text x="130" y="1288" fontSize="3.5" fontWeight="700" className="fill-foreground">↓ brain volume (neuronal loss) · ↓ cerebral blood flow;</text>
          <text x="130" y="1294" fontSize="3.5" fontWeight="700" className="fill-foreground">function preserved despite mild cognitive decline</text>
        </g>
        {/* right column */}
        <g>
          <rect x="554" y="1140" width="512" height="16" className="fill-card stroke-border" />
          <text x="562" y="1151" fontSize="4.2" fontWeight="800" className="fill-foreground">Special senses</text>
          <text x="646" y="1151" fontSize="3.5" fontWeight="700" className="fill-foreground">presbyopia (impaired accommodation) · presbycusis (↓ hearing) · ↓ smell and taste</text>
          <rect x="554" y="1160" width="512" height="52" className="fill-card stroke-border" />
          <text x="562" y="1173" fontSize="4.2" fontWeight="800" className="fill-foreground">Skin</text>
          <text x="646" y="1171" fontSize="3.5" fontWeight="700" className="fill-foreground">flattened dermal-epidermal junction · ↓ collagen ↓ elastin (wrinkles,</text>
          <text x="646" y="1180" fontSize="3.5" fontWeight="700" className="fill-foreground">senile purpura) · ↓ sweat glands (heat stroke) · ↓ sebaceous (xerosis cutis)</text>
          <text x="646" y="1193" fontSize="3.5" fontWeight="800" className="fill-brand">INTRINSIC (chronological) — ↓ biosynthetic capacity of dermal fibroblasts</text>
          <text x="646" y="1203" fontSize="3.5" fontWeight="800" className="fill-warning">EXTRINSIC (photoaging) — UVA collagen/elastin degradation → solar elastosis</text>
          <rect x="554" y="1216" width="512" height="16" className="fill-card stroke-border" />
          <text x="562" y="1227" fontSize="4.2" fontWeight="800" className="fill-foreground">Renal</text>
          <text x="646" y="1227" fontSize="3.5" fontWeight="700" className="fill-foreground">↓ GFR (↓ nephrons) · ↓ RBF · ↓ hormonal function · voiding dysfunction</text>
          <rect x="554" y="1236" width="512" height="36" className="fill-card stroke-border" />
          <text x="562" y="1250" fontSize="4.2" fontWeight="800" className="fill-foreground">Reproductive</text>
          <text x="646" y="1247" fontSize="3.5" fontWeight="700" className="fill-foreground">MALES — testicular atrophy (↓ spermatogenesis), prostate enlargement, slower</text>
          <text x="646" y="1256" fontSize="3.5" fontWeight="700" className="fill-foreground">erection/ejaculation, longer refractory; less pronounced ↓ libido</text>
          <text x="646" y="1265" fontSize="3.5" fontWeight="700" className="fill-foreground">FEMALES — vulvovaginal atrophy; shortening/thinning/dryness, ↑ pH; ↓ estrogen</text>
          <text x="646" y="1269" fontSize="3.5" fontWeight="700" className="fill-foreground">(follicle exhaustion — menopause)</text>
          <rect x="554" y="1276" width="512" height="36" className="fill-card stroke-border" />
          <text x="562" y="1290" fontSize="4.2" fontWeight="800" className="fill-foreground">Respiratory</text>
          <text x="646" y="1287" fontSize="3.5" fontWeight="700" className="fill-foreground">↑ lung compliance (↓ elastic recoil) · ↓ chest wall compliance · ↓ muscle strength</text>
          <text x="646" y="1296" fontSize="3.5" fontWeight="700" className="fill-foreground">↓ FEV1 ↓ FVC ↑ RV (TLC unchanged) · ↑ A-a gradient · blunted hypoxia/hypercapnia</text>
          <text x="646" y="1305" fontSize="3.5" fontWeight="700" className="fill-foreground">response · less vigorous cough · slower mucociliary clearance</text>
        </g>
        {/* lipofuscin card (photograph A described in text — M32) */}
        <g>
          <rect x="36" y="1320" width="1030" height="48" rx="10" className="fill-warning-soft/40 stroke-warning" />
          <text x="48" y="1334" fontSize="5" fontWeight="800" className="fill-warning">LIPOFUSCIN — the “wear and tear” pigment of normal aging</text>
          <text x="48" y="1346" fontSize="3.5" fontWeight="700" className="fill-foreground">A yellow-brown pigment associated with normal aging — polymers of lipids and phospholipids complexed with protein; derived through lipid</text>
          <text x="48" y="1355" fontSize="3.5" fontWeight="700" className="fill-foreground">peroxidation of polyunsaturated lipids of subcellular membranes; autopsy deposits in heart, colon, liver, kidney, eye, and other organs.</text>
          <text x="48" y="1365" fontSize="3.4" className="fill-muted-foreground">PHOTOGRAPH A (copyrighted, described — never reproduced): a histology micrograph (the 175x126 lettered raster beside this block) — pale pink/lavender</text>
          <text x="48" y="1374" fontSize="3.4" className="fill-muted-foreground">tissue background, scattered yellow-brown granular pigment deposits within cells, two black arrows on the granule clusters, letter A in a box at top-left.</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1384" width="1054" height="48" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1400" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 246–248 / book 224–226 (Pathology — Neoplasia: Paraneoplastic syndromes; AGInG: Normal aging + Lipofuscin)</text>
        <text x="42" y="1412" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): p246 ZERO rasters; p247 ONE 175x126 lettered micrograph (photograph A — the lipofuscin pigment) described in text, never reproduced (M32). p248 = the printed NOTES</text>
        <text x="42" y="1422" fontSize="5" className="fill-muted-foreground">page — claimed as continuation. Text-layer quirks: “SCa2+mous” = the fused small-caps “Squamous”; the polycythemia tumor list and the merged SCLC/Thymoma cells print after the</text>
        <text x="42" y="1430" fontSize="5" className="fill-muted-foreground">myasthenia row. No margin mnemonics beyond the source&apos;s own “Paraneoplastic rise to High hematocrit levels” and “Dancing eyes, dancing feet” (carried verbatim); the KYP memory layer is original.</text>
      </g>
    </svg>
  );
}
