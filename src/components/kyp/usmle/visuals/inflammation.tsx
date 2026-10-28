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
