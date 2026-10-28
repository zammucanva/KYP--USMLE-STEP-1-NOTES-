"use client";

// Original KYP visuals — Inflammation block (First Aid 2026, Part 1
// pdf 231+ / book 209+, PATHOLOGY—INFLAMMATION banner). All SVGs use
// theme tokens (currentColor + Tailwind classes), so they stay
// readable in light AND dark mode.

// ---------------------------------------------------------------------------
// Pathology P8 — Acute inflammation: the cardinal-signs and reactant map
// ---------------------------------------------------------------------------

export function AcutePhaseReactantMap() {
  const w = 980;
  const h = 1080;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      role="img"
      aria-label="Acute inflammation — the cardinal-signs and reactant map, an original KYP adaptation of the source pages (book 209-210 — the inflammation definition, the cardinal signs table, the systemic manifestations, the acute-phase reactants table, the ESR block, and the acute inflammation panel; one copyrighted micrograph described in text, never reproduced). LEFT — THE LOCAL RESPONSE: the definition and the four cardinal signs with their mediators. CENTER — THE ACUTE-PHASE REACTANTS: positive upregulated and negative downregulated. RIGHT — THE SYSTEMIC ANSWER: fever cascade, leukocytosis, IL-6 liver induction, and the ESR block. BOTTOM — THE ACUTE INFLAMMATION PANEL: definition, stimuli, mediators, components, outcomes, inflammasome, 4-step extravasation, macrophages-late note. Footer: source attribution, census, copyright boundary."
      className="min-w-[940px]"
    >
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Acute inflammation — the cardinal-signs and reactant map (original KYP adaptation)</text>
        <rect x="724" y="24" width="208" height="18" className="fill-brand-soft" />
        <text x="828" y="37" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-brand">local signs · systemic markers</text>
      </g>

      {/* ===== LEFT — the local response ===== */}
      <g>
        <rect x="36" y="100" width="240" height="620" rx="14" className="fill-card stroke-border" />
        <text x="52" y="120" fontSize="8" fontWeight="800" className="fill-foreground">The local response (book 209)</text>
        <rect x="48" y="130" width="216" height="72" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="156" y="145" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">THE DEFINITION</text>
        <text x="156" y="159" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">eliminate the initial cause of cell injury,</text>
        <text x="156" y="169" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">remove necrotic cells, initiate tissue</text>
        <text x="156" y="179" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">repair — divided into acute and chronic</text>
        <text x="156" y="193" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">harmful if excessive · prolonged · inappropriate</text>
        <rect x="48" y="212" width="216" height="88" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="156" y="228" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">RUBOR AND CALOR — redness, warmth</text>
        <text x="156" y="244" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">vasodilation (relaxation of arteriolar</text>
        <text x="156" y="254" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">smooth muscle) → ↑ blood flow</text>
        <text x="156" y="270" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">mediators: histamine, prostaglandins,</text>
        <text x="156" y="280" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">bradykinin, NO</text>
        <rect x="48" y="310" width="216" height="120" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="156" y="326" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">TUMOR — swelling</text>
        <text x="156" y="342" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">endothelial contraction/disruption →</text>
        <text x="156" y="352" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">↑ vascular permeability → protein-rich</text>
        <text x="156" y="362" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">fluid (exudate) leaks from postcapillary</text>
        <text x="156" y="372" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">venules into interstitium → ↑ interstitial</text>
        <text x="156" y="382" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">oncotic pressure</text>
        <text x="156" y="398" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">endothelial contraction: leukotrienes (C4,</text>
        <text x="156" y="408" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">D4, E4), histamine, serotonin, bradykinin</text>
        <rect x="48" y="440" width="216" height="72" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="156" y="456" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">DOLOR — pain</text>
        <text x="156" y="472" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">sensitization of sensory nerve endings</text>
        <text x="156" y="488" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">mediators: bradykinin, PGE2, histamine</text>
        <rect x="48" y="522" width="216" height="72" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="156" y="538" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">FUNCTIO LAESA — loss of function</text>
        <text x="156" y="554" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">inflammation impairs function</text>
        <text x="156" y="570" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">eg, inability to make fist — hand cellulitis</text>
        <rect x="48" y="604" width="216" height="96" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="156" y="620" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">THE HARMFUL TRIPLE</text>
        <text x="156" y="636" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">EXCESSIVE → septic shock</text>
        <text x="156" y="650" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">PROLONGED → persistent infections (TB)</text>
        <text x="156" y="664" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">INAPPROPRIATE → autoimmune (SLE)</text>
        <text x="156" y="684" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">the response itself can injure the host</text>
      </g>

      {/* ===== CENTER — the acute-phase reactants ===== */}
      <g>
        <rect x="288" y="100" width="424" height="620" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="304" y="120" fontSize="8" fontWeight="800" className="fill-foreground">The acute-phase reactants (book 209)</text>
        <rect x="304" y="130" width="392" height="16" rx="5" className="fill-brand-soft" />
        <text x="500" y="141" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-brand">POSITIVe (UPReGULATeD)</text>
        <g>
          <rect x="304" y="152" width="392" height="48" rx="8" className="fill-card stroke-border" />
          <text x="316" y="166" fontSize="4.4" fontWeight="800" className="fill-foreground">C-REACTIVE PROTEIN</text>
          <text x="316" y="178" fontSize="3.6" fontWeight="700" className="fill-foreground">Opsonin; fixes complement and facilitates phagocytosis</text>
          <text x="316" y="190" fontSize="3.5" className="fill-muted-foreground">measured clinically as a nonspecific sign of ongoing inflammation</text>
          <rect x="304" y="206" width="392" height="48" rx="8" className="fill-card stroke-border" />
          <text x="316" y="220" fontSize="4.4" fontWeight="800" className="fill-foreground">FERRITIN</text>
          <text x="316" y="232" fontSize="3.6" fontWeight="700" className="fill-foreground">Binds and sequesters iron to inhibit microbial iron scavenging</text>
          <text x="316" y="244" fontSize="3.5" className="fill-muted-foreground">the lock on the mineral the microbes need</text>
          <rect x="304" y="260" width="392" height="48" rx="8" className="fill-card stroke-border" />
          <text x="316" y="274" fontSize="4.4" fontWeight="800" className="fill-foreground">FIBRINOGEN</text>
          <text x="316" y="286" fontSize="3.6" fontWeight="700" className="fill-foreground">Coagulation factor; promotes endothelial repair; correlates with ESR</text>
          <text x="316" y="298" fontSize="3.5" className="fill-muted-foreground">the reactant that stacks the RBC rouleaux (right panel)</text>
          <rect x="304" y="314" width="392" height="48" rx="8" className="fill-card stroke-border" />
          <text x="316" y="328" fontSize="4.4" fontWeight="800" className="fill-foreground">HAPTOGLOBIN</text>
          <text x="316" y="340" fontSize="3.6" fontWeight="700" className="fill-foreground">Binds extracellular hemoglobin, protects against oxidative stress</text>
          <text x="316" y="352" fontSize="3.5" className="fill-muted-foreground">the mop for free hemoglobin iron</text>
          <rect x="304" y="368" width="392" height="48" rx="8" className="fill-card stroke-border" />
          <text x="316" y="382" fontSize="4.4" fontWeight="800" className="fill-foreground">HEPCIDIN</text>
          <text x="316" y="394" fontSize="3.6" fontWeight="700" className="fill-foreground">↓ iron absorption (degrading ferroportin) + ↓ iron release</text>
          <text x="316" y="404" fontSize="3.6" fontWeight="700" className="fill-foreground">(from macrophages) → anemia of chronic disease</text>
          <rect x="304" y="422" width="392" height="48" rx="8" className="fill-card stroke-border" />
          <text x="316" y="436" fontSize="4.4" fontWeight="800" className="fill-foreground">PROCALCITONIN</text>
          <text x="316" y="448" fontSize="3.6" fontWeight="700" className="fill-foreground">Increases in bacterial infections</text>
          <text x="316" y="460" fontSize="3.5" className="fill-muted-foreground">the bacterial tell among the reactants</text>
          <rect x="304" y="476" width="392" height="48" rx="8" className="fill-card stroke-border" />
          <text x="316" y="490" fontSize="4.4" fontWeight="800" className="fill-foreground">SERUM AMYLOID A</text>
          <text x="316" y="502" fontSize="3.6" fontWeight="700" className="fill-foreground">Prolonged elevation can lead to secondary amyloidosis</text>
          <text x="316" y="514" fontSize="3.5" className="fill-muted-foreground">the AA fibril of the amyloidosis page, born here</text>
        </g>
        <rect x="304" y="532" width="392" height="16" rx="5" className="fill-emergency-soft" />
        <text x="500" y="543" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-emergency">NeGATIVe (DOWNReGULATeD)</text>
        <g>
          <rect x="304" y="554" width="392" height="44" rx="8" className="fill-card stroke-border" />
          <text x="316" y="568" fontSize="4.4" fontWeight="800" className="fill-foreground">ALBUMIN</text>
          <text x="316" y="580" fontSize="3.6" fontWeight="700" className="fill-foreground">Downregulation conserves amino acids for positive reactants</text>
          <rect x="304" y="604" width="392" height="44" rx="8" className="fill-card stroke-border" />
          <text x="316" y="618" fontSize="4.4" fontWeight="800" className="fill-foreground">TRANSFERRIN</text>
          <text x="316" y="630" fontSize="3.6" fontWeight="700" className="fill-foreground">Internalized by macrophages to sequester iron</text>
          <rect x="304" y="654" width="392" height="44" rx="8" className="fill-card stroke-border" />
          <text x="316" y="668" fontSize="4.4" fontWeight="800" className="fill-foreground">TRANSTHYRETIN (prealbumin)</text>
          <text x="316" y="680" fontSize="3.6" fontWeight="700" className="fill-foreground">Downregulation conserves amino acids for positive reactants</text>
        </g>
      </g>

      {/* ===== RIGHT — the systemic answer + ESR ===== */}
      <g>
        <rect x="724" y="100" width="232" height="620" rx="14" className="fill-card stroke-border" />
        <text x="740" y="120" fontSize="8" fontWeight="800" className="fill-foreground">The systemic answer (209–210)</text>
        <rect x="736" y="130" width="208" height="102" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="840" y="146" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">FEVER — THE CASCADE</text>
        <text x="840" y="162" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">pyrogens (eg, LPS) → macrophages</text>
        <text x="840" y="172" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">release IL-1 and TNF → ↑ COX activity</text>
        <text x="840" y="182" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">in perivascular cells of ANTERIOR</text>
        <text x="840" y="192" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">HYPOTHALAMUS → ↑ PGE2 →</text>
        <text x="840" y="202" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">↑ temperature set point</text>
        <rect x="736" y="240" width="208" height="46" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="840" y="256" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">LEUKOCYTOSIS</text>
        <text x="840" y="270" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">↑ WBC; predominant cell follows the</text>
        <text x="840" y="280" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">agent (bacteria → ↑ neutrophils)</text>
        <rect x="736" y="294" width="208" height="56" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="840" y="310" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">↑ PLASMA ACUTE-PHASE REACTANTS</text>
        <text x="840" y="324" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">serum concentrations change in acute</text>
        <text x="840" y="334" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">and chronic inflammation; produced by</text>
        <text x="840" y="344" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">LIVER; notably induced by IL-6</text>
        <rect x="736" y="358" width="208" height="80" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="840" y="373" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">ESR — THE MECHANISM</text>
        <text x="840" y="388" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">RBCs separated via ⊝ charges;</text>
        <text x="840" y="398" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">fibrinogen coats RBCs → ↓ ⊝ charge →</text>
        <text x="840" y="408" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">↑ aggregation; denser aggregates fall</text>
        <text x="840" y="418" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">faster in the pipette tube → ↑ ESR;</text>
        <text x="840" y="430" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">co-tested with CRP (more specific)</text>
        <rect x="736" y="446" width="208" height="130" rx="10" className="fill-card stroke-emergency" />
        <text x="750" y="461" fontSize="5" fontWeight="800" className="fill-emergency">↑ ESR</text>
        <text x="750" y="475" fontSize="3.6" fontWeight="700" className="fill-foreground">most anemias · infections · inflammation</text>
        <text x="750" y="485" fontSize="3.6" fontWeight="700" className="fill-foreground">(giant cell [temporal] arteritis,</text>
        <text x="750" y="495" fontSize="3.6" fontWeight="700" className="fill-foreground">polymyalgia rheumatica) · cancer</text>
        <text x="750" y="505" fontSize="3.6" fontWeight="700" className="fill-foreground">(metastases, multiple myeloma) · renal</text>
        <text x="750" y="515" fontSize="3.6" fontWeight="700" className="fill-foreground">disease (end-stage, nephrotic) · pregnancy</text>
        <text x="750" y="531" fontSize="3.5" className="fill-muted-foreground">the inflammatory stack: more fibrinogen,</text>
        <text x="750" y="541" fontSize="3.5" className="fill-muted-foreground">more rouleaux, faster fall</text>
        <rect x="736" y="584" width="208" height="114" rx="10" className="fill-card stroke-border" />
        <text x="750" y="599" fontSize="5" fontWeight="800" className="fill-foreground">↓ ESR (lower than expected)</text>
        <text x="750" y="613" fontSize="3.6" fontWeight="700" className="fill-foreground">sickle cell anemia (altered shape) ·</text>
        <text x="750" y="623" fontSize="3.6" fontWeight="700" className="fill-foreground">polycythemia (↑ RBCs "dilute"</text>
        <text x="750" y="633" fontSize="3.6" fontWeight="700" className="fill-foreground">aggregation factors) · HF · microcytosis ·</text>
        <text x="750" y="643" fontSize="3.6" fontWeight="700" className="fill-foreground">hypofibrinogenemia</text>
        <text x="750" y="659" fontSize="3.5" className="fill-muted-foreground">shapes that will not stack, or too few</text>
        <text x="750" y="669" fontSize="3.5" className="fill-muted-foreground">factors to stack them — the fall slows</text>
      </g>

      {/* ===== BOTTOM — the acute inflammation panel ===== */}
      <g>
        <rect x="24" y="730" width="932" height="240" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="42" y="752" fontSize="8" fontWeight="800" className="fill-foreground">The acute inflammation panel (book 210)</text>
        <text x="42" y="768" fontSize="4.6" fontWeight="700" className="fill-foreground">Transient and early response to injury or infection — neutrophils in tissue, often with edema; rapid onset (seconds to minutes), short duration (minutes to days); the innate immune system (less specific than chronic). Photograph A (copyrighted, described): an H&amp;E micrograph of dense neutrophil infiltration — dark purple multilobed nuclei within pink tissue.</text>
        <g>
          <rect x="36" y="780" width="210" height="92" rx="8" className="fill-card stroke-border" />
          <text x="48" y="796" fontSize="5" fontWeight="800" className="fill-brand">STIMULI</text>
          <text x="48" y="812" fontSize="3.8" fontWeight="700" className="fill-foreground">infections · trauma · necrosis ·</text>
          <text x="48" y="822" fontSize="3.8" fontWeight="700" className="fill-foreground">foreign bodies</text>
          <rect x="254" y="780" width="250" height="92" rx="8" className="fill-card stroke-border" />
          <text x="266" y="796" fontSize="5" fontWeight="800" className="fill-brand">MeDIATORS</text>
          <text x="266" y="812" fontSize="3.8" fontWeight="700" className="fill-foreground">TLRs · arachidonic acid metabolites ·</text>
          <text x="266" y="822" fontSize="3.8" fontWeight="700" className="fill-foreground">neutrophils · eosinophils · pre-existing</text>
          <text x="266" y="832" fontSize="3.8" fontWeight="700" className="fill-foreground">antibodies · mast cells · basophils ·</text>
          <text x="266" y="842" fontSize="3.8" fontWeight="700" className="fill-foreground">complement · Hageman factor (XII)</text>
          <rect x="512" y="780" width="230" height="92" rx="8" className="fill-card stroke-border" />
          <text x="524" y="796" fontSize="5" fontWeight="800" className="fill-brand">COMPONeNTS</text>
          <text x="524" y="812" fontSize="3.8" fontWeight="700" className="fill-foreground">Vascular: vasodilation (↑ blood flow,</text>
          <text x="524" y="822" fontSize="3.8" fontWeight="700" className="fill-foreground">stasis) + ↑ endothelial permeability</text>
          <text x="524" y="832" fontSize="3.8" fontWeight="700" className="fill-foreground">(contraction opens junctions)</text>
          <text x="524" y="846" fontSize="3.8" fontWeight="700" className="fill-foreground">Cellular: leukocyte extravasation →</text>
          <text x="524" y="856" fontSize="3.8" fontWeight="700" className="fill-foreground">accumulation → activation</text>
          <rect x="750" y="780" width="194" height="92" rx="8" className="fill-card stroke-border" />
          <text x="762" y="796" fontSize="5" fontWeight="800" className="fill-brand">OUTCOMeS</text>
          <text x="762" y="812" fontSize="3.8" fontWeight="700" className="fill-foreground">resolution/healing (IL-10, TGF-β) ·</text>
          <text x="762" y="822" fontSize="3.8" fontWeight="700" className="fill-foreground">persistent acute (IL-8) · abscess</text>
          <text x="762" y="832" fontSize="3.8" fontWeight="700" className="fill-foreground">(walled off by fibrosis) · chronic</text>
          <text x="762" y="842" fontSize="3.8" fontWeight="700" className="fill-foreground">(APCs → CD4+ Th cells) · scarring</text>
        </g>
        <rect x="36" y="878" width="440" height="80" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="48" y="894" fontSize="5" fontWeight="800" className="fill-warning">THE INFLAMMASOME</text>
        <text x="48" y="910" fontSize="3.8" fontWeight="700" className="fill-foreground">cytoplasmic complex recognizing damage- and pathogen-associated</text>
        <text x="48" y="920" fontSize="3.8" fontWeight="700" className="fill-foreground">molecular patterns (microbial products, uric acid crystals) →</text>
        <text x="48" y="930" fontSize="3.8" fontWeight="700" className="fill-foreground">IL-1 activation → fever, leukocytosis; brings cells and proteins</text>
        <text x="48" y="940" fontSize="3.8" fontWeight="700" className="fill-foreground">to the site of injury or infection</text>
        <rect x="484" y="878" width="460" height="80" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="496" y="894" fontSize="5" fontWeight="800" className="fill-warning">EXTRAVASATION ×4 + THE LATE SHIFT</text>
        <text x="496" y="910" fontSize="3.8" fontWeight="700" className="fill-foreground">leukocyte extravasation has 4 steps: margination and rolling,</text>
        <text x="496" y="920" fontSize="3.8" fontWeight="700" className="fill-foreground">adhesion, transmigration, and migration (chemoattraction)</text>
        <text x="496" y="936" fontSize="3.8" fontWeight="700" className="fill-foreground">macrophages predominate in the late stages (peak 2–3 days) and</text>
        <text x="496" y="946" fontSize="3.8" fontWeight="700" className="fill-foreground">influence outcome by secreting cytokines</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="982" width="932" height="94" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1000" fontSize="6.2" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 231–232 / book 209–210 (Pathology — Inflammation: definition, cardinal signs, acute-phase reactants, ESR, acute inflammation)</text>
        <text x="42" y="1016" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): ONE cmyk JPEG raster on pdf 232 (~187x188 at 150 dpi), lettered A beside 'Characterized by neutrophils in tissue A' — an H&amp;E micrograph of dense neutrophil infiltration (dark purple multilobed nuclei within pink tissue/stroma),</text>
        <text x="42" y="1028" fontSize="5" className="fill-muted-foreground">sitting on the left side below the Acute inflammation header. COPYRIGHTED — described in text only, never reproduced (the established specimen-photograph convention).</text>
        <text x="42" y="1040" fontSize="5" className="fill-muted-foreground">Carried verbatim: the definition, the cardinal signs table with all mediators, the systemic manifestations, the 10 reactant rows, the ESR block with both lists and the footnote, and the STIMULI/MEDIATORS/COMPONENTS/OUTCOMES panel with its two margin blocks.</text>
        <text x="42" y="1052" fontSize="5" className="fill-muted-foreground">No margin mnemonics print on either page (VLM census confirmed on both); the KYP memory layer is original.</text>
        <text x="42" y="1064" fontSize="5" className="fill-muted-foreground">Copyright boundary: the photograph is copyrighted and never reproduced; this registry visual is an original KYP adaptation, not a redraw.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Pathology P9 — Leukocyte extravasation: the four-station vessel map
// ---------------------------------------------------------------------------

export function LeukocyteTraffickingMap() {
  const w = 980;
  const h = 880;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Leukocyte extravasation — the four-station vessel map, an original KYP redraw of the source figure (book 211 — the four-step extravasation at postcapillary venules with the marker table). THE FIGURE: a vessel cross-section with Vessel lumen, Endothelium, and Interstitium zones; a PMN rolling on P-selectin and E-selectin via Sialyl Lewis X at station 1; flattening to tight binding with LFA-1 on the PMN against ICAM-1 on the endothelium at station 2; squeezing between endothelial cells at PECAM-1 junctions in diapedesis at station 3; and migrating through the interstitium along chemotactic factors at station 4. THE MARKER TABLE: margination and rolling — E-selectin (upregulated by TNF and IL-1), P-selectin (Weibel-Palade exocytosis), GlyCAM-1, CD34 against Sialyl LewisX and L-selectin, defective in leukocyte adhesion deficiency type 2; tight binding — ICAM-1 (CD54) and VCAM-1 (CD106) against CD11/18 integrins (LFA-1, Mac-1) and VLA-4, defective in LAD type 1 (↓ CD18); diapedesis — PECAM-1 (CD31) on both sides; migration — the chemotactic factors C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides. The footer carries the source attribution, the census note, and the redraw declaration." className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Leukocyte extravasation — the four-station vessel map (original KYP redraw)</text>
        <rect x="724" y="24" width="208" height="18" className="fill-brand-soft" />
        <text x="828" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">four stations · two lockouts</text>
      </g>
      {/* ===== the vessel figure ===== */}
      <g>
        <rect x="36" y="80" width="908" height="450" rx="14" className="fill-card stroke-border" />
        <text x="52" y="100" fontSize="8" fontWeight="800" className="fill-foreground">The vessel map (book 211 — an original KYP redraw of the source line-art figure)</text>
        <text x="52" y="114" fontSize="4.6" fontWeight="700" className="fill-muted-foreground">Extravasation predominantly occurs at postcapillary venules.</text>
        {/* zone bands */}
        <rect x="120" y="128" width="808" height="130" rx="10" className="fill-brand-soft/30 stroke-brand" />
        <text x="132" y="146" fontSize="5.4" fontWeight="800" className="fill-brand">Vessel lumen</text>
        <rect x="120" y="266" width="808" height="34" rx="8" className="fill-secondary/60 stroke-border" />
        <rect x="120" y="304" width="808" height="210" rx="10" className="fill-warning-soft/20 stroke-warning" />
        <text x="132" y="322" fontSize="5.4" fontWeight="800" className="fill-warning">Endothelium</text>
        <text x="132" y="500" fontSize="5.4" fontWeight="800" className="fill-warning">Interstitium</text>
        {/* station headers */}
        <g>
          <rect x="140" y="124" width="16" height="16" rx="8" className="fill-brand" />
          <text x="148" y="136" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-background">1</text>
          <text x="162" y="136" fontSize="6.4" fontWeight="800" className="fill-foreground">Margination &amp; rolling</text>
          <rect x="360" y="124" width="16" height="16" rx="8" className="fill-brand" />
          <text x="368" y="136" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-background">2</text>
          <text x="382" y="136" fontSize="6.4" fontWeight="800" className="fill-foreground">Tight binding (adhesion)</text>
          <rect x="580" y="124" width="16" height="16" rx="8" className="fill-brand" />
          <text x="588" y="136" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-background">3</text>
          <text x="602" y="136" fontSize="6.4" fontWeight="800" className="fill-foreground">DiaPEdesis (transmigration)</text>
          <rect x="790" y="124" width="16" height="16" rx="8" className="fill-brand" />
          <text x="798" y="136" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-background">4</text>
          <text x="812" y="136" fontSize="6.4" fontWeight="800" className="fill-foreground">Migration</text>
        </g>
        {/* station 1 — rolling */}
        <g>
          <circle cx="200" cy="222" r="22" className="fill-brand-soft stroke-brand" />
          <text x="200" y="226" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">PMN</text>
          <text x="200" y="194" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Sialyl LewisX</text>
          <path d="M 168 222 Q 200 208 232 222" fill="none" className="stroke-brand" strokeWidth="1.4" strokeDasharray="3 2" />
          <text x="200" y="212" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">rolling</text>
          {/* selectin stalks on endothelium */}
          <path d="M 172 266 L 172 284" className="stroke-emergency" strokeWidth="2" />
          <text x="172" y="296" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-emergency">P-selectin</text>
          <path d="M 232 266 L 232 284" className="stroke-emergency" strokeWidth="2" />
          <text x="232" y="296" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-emergency">E-selectin</text>
          <rect x="118" y="336" width="172" height="42" rx="6" className="fill-card stroke-border" />
          <text x="204" y="348" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">P-selectin translocates via exocytosis from</text>
          <text x="204" y="358" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">Weibel-Palade bodies; E-selectin is released</text>
          <text x="204" y="368" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">from endothelial cells, upregulated by TNF, IL-1</text>
        </g>
        {/* station 2 — tight binding */}
        <g>
          <ellipse cx="420" cy="248" rx="26" ry="18" className="fill-brand-soft stroke-brand" />
          <text x="420" y="252" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">PMN</text>
          <text x="394" y="216" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">LFA-1 (CD11/18)</text>
          <path d="M 400 266 L 400 284" className="stroke-emergency" strokeWidth="2" />
          <text x="400" y="296" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-emergency">ICAM-1</text>
          <rect x="360" y="336" width="172" height="42" rx="6" className="fill-card stroke-border" />
          <text x="446" y="348" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">the integrin flattens and locks the PMN:</text>
          <text x="446" y="358" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">LFA-1/Mac-1 bind ICAM-1 (CD54);</text>
          <text x="446" y="368" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">VLA-4 binds VCAM-1 (CD106)</text>
        </g>
        {/* station 3 — diapedesis */}
        <g>
          <ellipse cx="640" cy="278" rx="16" ry="22" className="fill-brand-soft stroke-brand" />
          <text x="640" y="282" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">PMN</text>
          <path d="M 618 266 L 634 290 M 662 266 L 646 290" className="stroke-border" strokeWidth="1.6" />
          <text x="610" y="308" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-emergency">PECAM-1</text>
          <text x="678" y="308" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-emergency">PECAM-1</text>
          <rect x="552" y="336" width="188" height="42" rx="6" className="fill-card stroke-border" />
          <text x="646" y="348" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">the WBC travels BETWEEN endothelial cells</text>
          <text x="646" y="358" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">and exits the blood vessel — PECAM-1 (CD31)</text>
          <text x="646" y="368" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">on BOTH the leukocyte and the endothelium</text>
        </g>
        {/* station 4 — migration */}
        <g>
          <circle cx="860" cy="380" r="20" className="fill-brand-soft stroke-brand" />
          <text x="860" y="384" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">PMN</text>
          <path d="M 860 356 Q 848 400 852 440" fill="none" className="stroke-brand" strokeWidth="1.4" strokeDasharray="3 2" />
          <rect x="820" y="420" width="132" height="72" rx="6" className="fill-card stroke-border" />
          <text x="886" y="432" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-muted-foreground">chemotactic gradient</text>
          <text x="886" y="448" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">C5a · IL-8 · LTB4 · 5-HETE</text>
          <text x="886" y="458" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">kallikrein · PAF ·</text>
          <text x="886" y="468" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">N-formylmethionyl peptides</text>
          <text x="886" y="482" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">guiding to the injury</text>
        </g>
        {/* the postcapillary rule strip */}
        <rect x="140" y="400" width="440" height="88" rx="8" className="fill-card stroke-brand" />
        <text x="152" y="418" fontSize="5.4" fontWeight="800" className="fill-brand">WHERE IT HAPPENS</text>
        <text x="152" y="434" fontSize="3.8" fontWeight="700" className="fill-foreground">Extravasation predominantly occurs at POSTCAPILLARY VENULES —</text>
        <text x="152" y="444" fontSize="3.8" fontWeight="700" className="fill-foreground">the slow, permeable stretch where margination can begin.</text>
        <text x="152" y="460" fontSize="3.7" className="fill-muted-foreground">The four stations in one line: roll (selectins) → bind (integrins) →</text>
        <text x="152" y="470" fontSize="3.7" className="fill-muted-foreground">squeeze (PECAM-1) → walk (chemotaxis) — each pair a handshake</text>
        <text x="152" y="480" fontSize="3.7" className="fill-muted-foreground">between a leukocyte marker and a vasculature marker.</text>
      </g>
      {/* ===== the marker table ===== */}
      <g>
        <text x="36" y="556" fontSize="8" fontWeight="800" className="fill-foreground">The marker table (book 211 — verbatim)</text>
        <rect x="36" y="566" width="220" height="170" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="48" y="584" fontSize="5.2" fontWeight="800" className="fill-foreground">1. MARGINATION AND ROLLING</text>
        <text x="48" y="596" fontSize="3.6" fontWeight="700" className="fill-emergency">defective in LAD type 2 (↓ Sialyl LewisX)</text>
        <text x="48" y="612" fontSize="3.7" fontWeight="800" className="fill-foreground">VASCULATURe/STROMA MARKeRS</text>
        <text x="48" y="624" fontSize="3.7" fontWeight="700" className="fill-foreground">E-selectin (released from endothelial cells,</text>
        <text x="48" y="634" fontSize="3.7" fontWeight="700" className="fill-foreground">upregulated by TNF and IL-1)</text>
        <text x="48" y="646" fontSize="3.7" fontWeight="700" className="fill-foreground">P-selectin (translocated to endothelial surface</text>
        <text x="48" y="656" fontSize="3.7" fontWeight="700" className="fill-foreground">via exocytosis from Weibel-Palade bodies)</text>
        <text x="48" y="668" fontSize="3.7" fontWeight="700" className="fill-foreground">GlyCAM-1, CD34</text>
        <text x="48" y="684" fontSize="3.7" fontWeight="800" className="fill-foreground">LeUKOCYTe MARKeRS</text>
        <text x="48" y="696" fontSize="3.7" fontWeight="700" className="fill-foreground">Sialyl LewisX · L-selectin</text>
        <text x="48" y="712" fontSize="3.6" className="fill-muted-foreground">the rolling handshake: carbohydrate meets selectin</text>
        <rect x="266" y="566" width="220" height="170" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="278" y="584" fontSize="5.2" fontWeight="800" className="fill-foreground">2. TIGHT BINDING (ADHESION)</text>
        <text x="278" y="596" fontSize="3.6" fontWeight="700" className="fill-emergency">defective in LAD type 1 (↓ CD18 integrin subunit)</text>
        <text x="278" y="612" fontSize="3.7" fontWeight="800" className="fill-foreground">VASCULATURe/STROMA MARKeRS</text>
        <text x="278" y="624" fontSize="3.7" fontWeight="700" className="fill-foreground">ICAM-1 (CD54)</text>
        <text x="278" y="636" fontSize="3.7" fontWeight="700" className="fill-foreground">VCAM-1 (CD106)</text>
        <text x="278" y="684" fontSize="3.7" fontWeight="800" className="fill-foreground">LeUKOCYTe MARKeRS</text>
        <text x="278" y="696" fontSize="3.7" fontWeight="700" className="fill-foreground">CD11/18 integrins (LFA-1, Mac-1)</text>
        <text x="278" y="708" fontSize="3.7" fontWeight="700" className="fill-foreground">VLA-4 integrin</text>
        <text x="278" y="724" fontSize="3.6" className="fill-muted-foreground">the locking handshake: integrin meets Ig-superfamily</text>
        <rect x="496" y="566" width="220" height="170" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="508" y="584" fontSize="5.2" fontWeight="800" className="fill-foreground">3. DIAPEDESIS (TRANSMIGRATION)</text>
        <text x="508" y="600" fontSize="3.7" fontWeight="700" className="fill-foreground">WBC travels between endothelial cells</text>
        <text x="508" y="610" fontSize="3.7" fontWeight="700" className="fill-foreground">and exits blood vessel</text>
        <text x="508" y="632" fontSize="3.7" fontWeight="800" className="fill-foreground">VASCULATURe/STROMA MARKeRS</text>
        <text x="508" y="644" fontSize="3.7" fontWeight="700" className="fill-foreground">PECAM-1 (CD31)</text>
        <text x="508" y="684" fontSize="3.7" fontWeight="800" className="fill-foreground">LeUKOCYTe MARKeRS</text>
        <text x="508" y="696" fontSize="3.7" fontWeight="700" className="fill-foreground">PECAM-1 (CD31)</text>
        <text x="508" y="712" fontSize="3.6" className="fill-muted-foreground">the mirror handshake: the same molecule both sides</text>
        <rect x="726" y="566" width="218" height="170" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="738" y="584" fontSize="5.2" fontWeight="800" className="fill-foreground">4. MIGRATION</text>
        <text x="738" y="600" fontSize="3.7" fontWeight="700" className="fill-foreground">WBC travels through interstitium to site</text>
        <text x="738" y="610" fontSize="3.7" fontWeight="700" className="fill-foreground">of injury or infection guided by chemotactic</text>
        <text x="738" y="620" fontSize="3.7" fontWeight="700" className="fill-foreground">signals</text>
        <text x="738" y="640" fontSize="3.7" fontWeight="800" className="fill-foreground">CHEMOTACTIC FACTORS</text>
        <text x="738" y="652" fontSize="3.7" fontWeight="700" className="fill-foreground">C5a, IL-8, LTB4, 5-HETE, kallikrein,</text>
        <text x="738" y="662" fontSize="3.7" fontWeight="700" className="fill-foreground">platelet-activating factor,</text>
        <text x="738" y="672" fontSize="3.7" fontWeight="700" className="fill-foreground">N-formylmethionyl peptides</text>
        <text x="738" y="690" fontSize="3.7" fontWeight="800" className="fill-foreground">LeUKOCYTe MARKeRS</text>
        <text x="738" y="702" fontSize="3.7" fontWeight="700" className="fill-foreground">Various</text>
        <text x="738" y="718" fontSize="3.6" className="fill-muted-foreground">the gradient walk: follow the signal</text>
      </g>
      {/* ===== the two lockouts ===== */}
      <g>
        <rect x="36" y="748" width="448" height="60" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="48" y="766" fontSize="5.2" fontWeight="800" className="fill-emergency">LAD TYPE 1 — the binding lockout (↓ CD18 integrin subunit)</text>
        <text x="48" y="782" fontSize="3.8" fontWeight="700" className="fill-foreground">The CD11/18 integrins (LFA-1, Mac-1) cannot be built — tight binding fails,</text>
        <text x="48" y="792" fontSize="3.8" fontWeight="700" className="fill-foreground">rolling proceeds but nothing locks: the classic no-pus, delayed-cord-separation child.</text>
        <rect x="496" y="748" width="448" height="60" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="508" y="766" fontSize="5.2" fontWeight="800" className="fill-warning">LAD TYPE 2 — the rolling lockout (↓ Sialyl LewisX)</text>
        <text x="508" y="782" fontSize="3.8" fontWeight="700" className="fill-foreground">The carbohydrate ligand for the selectins is missing — the PMN cannot even slow down</text>
        <text x="508" y="792" fontSize="3.8" fontWeight="700" className="fill-foreground">to roll; the defect sits one station earlier, at the handshake that starts the cascade.</text>
      </g>
      {/* footer */}
      <g>
        <rect x="24" y="820" width="932" height="56" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="836" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 233 / book 211 (Pathology — Inflammation: Leukocyte extravasation)</text>
        <text x="42" y="850" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): NO raster images on this page — the extravasation figure is VECTOR LINE ART with all labels in the text layer (Vessel lumen / Endothelium / Interstitium, PMN ×6, Sialyl Lewis X, P-selectin, E-selectin, LFA-1, ICAM-1, PECAM-1, the four numbered stations).</text>
        <text x="42" y="862" fontSize="5" className="fill-muted-foreground">This registry visual is an ORIGINAL KYP REDRAW of that topology with original glyphs, not a reproduction. The marker table is carried verbatim in the note's tables. No margin mnemonics print on the page (VLM confirmed); the KYP memory layer is original.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Pathology P10 — Wound healing: the mediator and phase map
// ---------------------------------------------------------------------------

export function WoundHealingPhaseMap() {
  const w = 980;
  const h = 900;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Wound healing — the mediator and phase map, an original KYP adaptation of the source page (book 212 — the chronic inflammation block, the tissue mediators table, and the three phases of wound healing; no images on the page, pure text). TOP — CHRONIC INFLAMMATION: the definition (prolonged, mononuclear infiltration — macrophages, lymphocytes, plasma cells; simultaneous destruction and repair), the stimuli (persistent infections TB T pallidum fungi viruses to type IV hypersensitivity, autoimmune, silica, foreign material), the Th1-Th2 mediator fork (IFN-gamma classical activation vs IL-4 and IL-13 alternative activation), and the outcomes (scarring, amyloidosis, neoplastic transformation — HCV to hepatocellular carcinoma, H pylori to gastric adenocarcinoma). MIDDLE — THE TISSUE MEDIATORS: FGF, TGF-beta, VEGF, PDGF, metalloproteinases, EGF with their roles. BOTTOM — THE THREE PHASES: inflammatory (up to 3 days — platelets, neutrophils, macrophages; clot, permeability, debris clearance), proliferative (day 3 to weeks — granulation tissue, type III collagen, angiogenesis, contraction via myofibroblasts; delayed in vitamin C and copper deficiency), remodeling (1 week to 6+ months — type III replaced by type I, tensile strength, collagenases requiring zinc; zinc deficiency delays healing). The footer carries the source attribution, the census note, and the copyright boundary." className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Wound healing — the mediator and phase map (original KYP adaptation)</text>
        <rect x="724" y="24" width="208" height="18" className="fill-brand-soft" />
        <text x="828" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">three phases · six mediators</text>
      </g>
      {/* ===== TOP — chronic inflammation ===== */}
      <g>
        <rect x="36" y="80" width="908" height="240" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="102" fontSize="8" fontWeight="800" className="fill-foreground">Chronic inflammation (book 212 — the block above the wound tables)</text>
        <g>
          <rect x="52" y="114" width="290" height="90" rx="10" className="fill-card stroke-border" />
          <text x="64" y="130" fontSize="5" fontWeight="800" className="fill-brand">THE DEFINITION + STIMULI</text>
          <text x="64" y="144" fontSize="3.7" fontWeight="700" className="fill-foreground">Prolonged inflammation; mononuclear infiltration</text>
          <text x="64" y="154" fontSize="3.7" fontWeight="700" className="fill-foreground">(macrophages, lymphocytes, plasma cells) with</text>
          <text x="64" y="164" fontSize="3.7" fontWeight="700" className="fill-foreground">SIMULTANEOUS destruction and repair</text>
          <text x="64" y="178" fontSize="3.6" className="fill-muted-foreground">stimuli: persistent infections (TB, T pallidum,</text>
          <text x="64" y="188" fontSize="3.6" className="fill-muted-foreground">certain fungi and viruses) → type IV hypersensitivity;</text>
          <text x="64" y="198" fontSize="3.6" className="fill-muted-foreground">autoimmune; toxic agents (silica); foreign material</text>
          <rect x="356" y="114" width="290" height="90" rx="10" className="fill-card stroke-border" />
          <text x="368" y="130" fontSize="5" fontWeight="800" className="fill-brand">THE MEDIATOR FORK (Th1 vs Th2)</text>
          <text x="368" y="144" fontSize="3.7" fontWeight="700" className="fill-foreground">Macrophages are the dominant cells; the</text>
          <text x="368" y="154" fontSize="3.7" fontWeight="700" className="fill-foreground">macrophage–T-cell interaction drives chronicity:</text>
          <text x="368" y="168" fontSize="3.7" fontWeight="800" className="fill-foreground">Th1 → IFN-γ → classical activation (proinflammatory)</text>
          <text x="368" y="182" fontSize="3.7" fontWeight="800" className="fill-foreground">Th2 → IL-4 and IL-13 → alternative activation</text>
          <text x="368" y="192" fontSize="3.7" fontWeight="700" className="fill-foreground">(repair and anti-inflammatory)</text>
          <rect x="660" y="114" width="268" height="90" rx="10" className="fill-card stroke-border" />
          <text x="672" y="130" fontSize="5" fontWeight="800" className="fill-emergency">THE OUTCOMES</text>
          <text x="672" y="144" fontSize="3.7" fontWeight="700" className="fill-foreground">Scarring · amyloidosis · neoplastic transformation</text>
          <text x="672" y="158" fontSize="3.6" className="fill-muted-foreground">the printed oncogenesis chains: chronic HCV</text>
          <text x="672" y="168" fontSize="3.6" className="fill-muted-foreground">infection → chronic inflammation → hepatocellular</text>
          <text x="672" y="178" fontSize="3.6" className="fill-muted-foreground">carcinoma; H pylori infection → chronic gastritis</text>
          <text x="672" y="188" fontSize="3.6" className="fill-muted-foreground">→ gastric adenocarcinoma</text>
        </g>
        <text x="52" y="224" fontSize="4.4" fontWeight="700" className="fill-muted-foreground">The bridge to wound healing: chronic inflammation is destruction AND repair running at once — angiogenesis and fibrosis are already underway — and the wound tables below name the molecules and the timetable of that repair.</text>
        <text x="52" y="240" fontSize="4.4" fontWeight="700" className="fill-muted-foreground">May be preceded by acute inflammation (the P8 panel's fifth outcome: antigen presentation by macrophages and other APCs → activation of CD4+ Th cells → the mononuclear shift).</text>
      </g>
      {/* ===== MIDDLE — the tissue mediators ===== */}
      <g>
        <text x="36" y="344" fontSize="8" fontWeight="800" className="fill-foreground">The tissue mediators (book 212 — verbatim)</text>
        <g>
          <rect x="36" y="354" width="300" height="56" rx="8" className="fill-card stroke-border" />
          <text x="48" y="370" fontSize="4.6" fontWeight="800" className="fill-foreground">FGF · VEGF</text>
          <text x="48" y="384" fontSize="3.7" fontWeight="700" className="fill-foreground">Stimulate angiogenesis</text>
          <text x="48" y="398" fontSize="3.5" className="fill-muted-foreground">the vessel growers of the granulation bed</text>
          <rect x="348" y="354" width="300" height="56" rx="8" className="fill-card stroke-border" />
          <text x="360" y="370" fontSize="4.6" fontWeight="800" className="fill-foreground">TGF-β</text>
          <text x="360" y="384" fontSize="3.7" fontWeight="700" className="fill-foreground">Angiogenesis, fibrosis</text>
          <text x="360" y="398" fontSize="3.5" className="fill-muted-foreground">the fibrosis driver (the P6 radiation dermatitis molecule)</text>
          <rect x="660" y="354" width="284" height="56" rx="8" className="fill-card stroke-border" />
          <text x="672" y="370" fontSize="4.6" fontWeight="800" className="fill-foreground">METALLOPROTEINASES</text>
          <text x="672" y="384" fontSize="3.7" fontWeight="700" className="fill-foreground">Tissue remodeling</text>
          <text x="672" y="398" fontSize="3.5" className="fill-muted-foreground">the matrix movers</text>
          <rect x="36" y="420" width="440" height="72" rx="8" className="fill-card stroke-border" />
          <text x="48" y="436" fontSize="4.6" fontWeight="800" className="fill-foreground">PDGF</text>
          <text x="48" y="450" fontSize="3.7" fontWeight="700" className="fill-foreground">Secreted by activated platelets and macrophages</text>
          <text x="48" y="462" fontSize="3.7" fontWeight="700" className="fill-foreground">Induces vascular remodeling and smooth muscle cell migration</text>
          <text x="48" y="474" fontSize="3.7" fontWeight="700" className="fill-foreground">Stimulates fibroblast growth for collagen synthesis</text>
          <rect x="488" y="420" width="456" height="72" rx="8" className="fill-card stroke-border" />
          <text x="500" y="436" fontSize="4.6" fontWeight="800" className="fill-foreground">EGF</text>
          <text x="500" y="450" fontSize="3.7" fontWeight="700" className="fill-foreground">Stimulates cell growth via tyrosine kinases (eg, EGFR/ErbB1)</text>
          <text x="500" y="464" fontSize="3.5" className="fill-muted-foreground">the epithelial proliferator — the receptor the wound edge uses;</text>
          <text x="500" y="476" fontSize="3.5" className="fill-muted-foreground">the growth-factor table's oncology crossover (ErbB1 = HER1)</text>
        </g>
      </g>
      {/* ===== BOTTOM — the three phases ===== */}
      <g>
        <text x="36" y="518" fontSize="8" fontWeight="800" className="fill-foreground">The three phases of wound healing (book 212 — verbatim)</text>
        <g>
          <rect x="36" y="528" width="908" height="30" rx="8" className="fill-brand-soft" />
          <text x="196" y="547" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">1. INFLAMMATORY — up to 3 days</text>
          <text x="490" y="547" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">2. PROLIFERATIVE — day 3 to weeks</text>
          <text x="796" y="547" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">3. REMODELING — 1 week to 6+ months</text>
        </g>
        <g>
          <rect x="36" y="566" width="290" height="230" rx="10" className="fill-card stroke-border" />
          <text x="48" y="584" fontSize="5" fontWeight="800" className="fill-foreground">THE OPENING CLEANUP</text>
          <text x="48" y="600" fontSize="4.2" fontWeight="800" className="fill-foreground">effeCTOR CeLLS</text>
          <text x="48" y="612" fontSize="3.7" fontWeight="700" className="fill-foreground">Platelets · neutrophils · macrophages</text>
          <text x="48" y="632" fontSize="4.2" fontWeight="800" className="fill-foreground">CHARACTeRISTICS</text>
          <text x="48" y="644" fontSize="3.7" fontWeight="700" className="fill-foreground">Clot formation; ↑ vessel permeability and</text>
          <text x="48" y="654" fontSize="3.7" fontWeight="700" className="fill-foreground">neutrophil migration into tissue;</text>
          <text x="48" y="664" fontSize="3.7" fontWeight="700" className="fill-foreground">macrophages clear debris 2 days later</text>
          <text x="48" y="684" fontSize="3.6" className="fill-muted-foreground">The P8 page's acute panel in miniature: the</text>
          <text x="48" y="694" fontSize="3.6" className="fill-muted-foreground">clot stops the bleeding, the neutrophils arrive</text>
          <text x="48" y="704" fontSize="3.6" className="fill-muted-foreground">first, and the macrophages — the late-stage</text>
          <text x="48" y="714" fontSize="3.6" className="fill-muted-foreground">predominators (peak 2-3 days) — sweep up.</text>
          <rect x="338" y="566" width="300" height="230" rx="10" className="fill-card stroke-border" />
          <text x="350" y="584" fontSize="5" fontWeight="800" className="fill-foreground">THE GRANULATION BUILD</text>
          <text x="350" y="600" fontSize="4.2" fontWeight="800" className="fill-foreground">effeCTOR CeLLS</text>
          <text x="350" y="612" fontSize="3.7" fontWeight="700" className="fill-foreground">Fibroblasts · myofibroblasts · endothelial</text>
          <text x="350" y="622" fontSize="3.7" fontWeight="700" className="fill-foreground">cells · keratinocytes · macrophages</text>
          <text x="350" y="642" fontSize="4.2" fontWeight="800" className="fill-foreground">CHARACTeRISTICS</text>
          <text x="350" y="654" fontSize="3.7" fontWeight="700" className="fill-foreground">Deposition of granulation tissue and type III</text>
          <text x="350" y="664" fontSize="3.7" fontWeight="700" className="fill-foreground">collagen; angiogenesis; epithelial cell</text>
          <text x="350" y="674" fontSize="3.7" fontWeight="700" className="fill-foreground">proliferation; dissolution of clot; wound</text>
          <text x="350" y="684" fontSize="3.7" fontWeight="700" className="fill-foreground">contraction (mediated by myofibroblasts)</text>
          <rect x="350" y="694" width="276" height="36" rx="6" className="fill-warning-soft/40 stroke-warning" />
          <text x="488" y="708" textAnchor="middle" fontSize="3.7" fontWeight="800" className="fill-warning">Delayed in VITAMIN C and COPPER deficiency</text>
          <text x="488" y="720" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">the collagen-synthesis cofactors</text>
          <rect x="650" y="566" width="294" height="230" rx="10" className="fill-card stroke-border" />
          <text x="662" y="584" fontSize="5" fontWeight="800" className="fill-foreground">THE STRENGTHENING SWAP</text>
          <text x="662" y="600" fontSize="4.2" fontWeight="800" className="fill-foreground">effeCTOR CeLLS</text>
          <text x="662" y="612" fontSize="3.7" fontWeight="700" className="fill-foreground">Fibroblasts</text>
          <text x="662" y="632" fontSize="4.2" fontWeight="800" className="fill-foreground">CHARACTeRISTICS</text>
          <text x="662" y="644" fontSize="3.7" fontWeight="700" className="fill-foreground">Type III collagen replaced by type I collagen;</text>
          <text x="662" y="654" fontSize="3.7" fontWeight="700" className="fill-foreground">↑ tensile strength of tissue</text>
          <text x="662" y="668" fontSize="3.7" fontWeight="700" className="fill-foreground">Collagenases (require ZINC to function)</text>
          <text x="662" y="678" fontSize="3.7" fontWeight="700" className="fill-foreground">break down type III collagen</text>
          <rect x="662" y="690" width="270" height="40" rx="6" className="fill-warning-soft/40 stroke-warning" />
          <text x="797" y="704" textAnchor="middle" fontSize="3.7" fontWeight="800" className="fill-warning">ZINC deficiency → delayed wound healing</text>
          <text x="797" y="716" textAnchor="middle" fontSize="3.5" className="fill-muted-foreground">the collagenase cofactor</text>
          <text x="662" y="748" fontSize="3.6" className="fill-muted-foreground">Months of quiet exchange: the weak</text>
          <text x="662" y="758" fontSize="3.6" className="fill-muted-foreground">scaffold traded for the strong one, scar</text>
          <text x="662" y="768" fontSize="3.6" className="fill-muted-foreground">maturing as tensile strength climbs.</text>
        </g>
      </g>
      {/* footer */}
      <g>
        <rect x="24" y="810" width="932" height="72" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="830" fontSize="6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 234 / book 212 (Pathology — Inflammation: Chronic inflammation + Wound healing)</text>
        <text x="42" y="848" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): NO raster images on this page — the chronic inflammation block and both wound-healing tables are pure text; this registry visual is an original KYP adaptation, not a reproduction.</text>
        <text x="42" y="862" fontSize="5" className="fill-muted-foreground">Carried verbatim: the chronic inflammation definition/stimuli/mediators/outcomes, the 6-row tissue mediators table, and the 3-row phases table with both deficiency notes (vitamin C + copper; zinc). No margin mnemonics print on the page (VLM census confirmed); the KYP memory layer is original. Copyright boundary: the tables are carried verbatim; the registry visual is an original KYP adaptation.</text>
      </g>
    </svg>
  );
}
