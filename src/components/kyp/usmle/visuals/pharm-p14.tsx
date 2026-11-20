/* Pharmacology — PH-batch 14: G-Protein-Linked Second Messengers (FULL
 * pdf page 259 / book 237, Part 1 — no shared-page split). ORIGINAL KYP
 * REDRAW of the page's two assets. Census: pdfimages = ZERO raster images
 * on pdf 259 (CONFIRMED — the figure is pure vector line art, not
 * assumed); VLM (glm-4.6v) IS available this session (unlike the ph6–ph10
 * 401 outage) and ran SEVEN passes — 120-DPI full page, 180-DPI full page
 * (table + figure), 220-DPI panel crops, 2x and 3x-zoomed bottom bands,
 * and a 432-DPI PyMuPDF render of the Gq downstream cluster — plus a
 * PyMuPDF word/span/vector-path dump (staging-ph14/pymupdf-words.txt)
 * whose geometry anchored the adjudication. ADJUDICATED FIGURE
 * STRUCTURE (documented, spec-vs-page discrepancy resolved in the page's
 * favor): the figure is TWO STACKED PANELS, not three side-by-side — the
 * TOP panel is the Gq cascade (Ligand → H1, α1, V1, M1, or M3 receptor →
 * Gq protein → Phospholipase C → PIP2 → DAG → Protein kinase C, with the
 * second arm IP3 → ↑Ca2+, which feeds BOTH Protein kinase C ⊕ and Smooth
 * muscle contraction), and the BOTTOM panel carries BOTH the Gs arm AND
 * the Gi arm on ONE shared Adenylyl cyclase: GS protein's pointed ⊕ and
 * Gi protein's blunt red ⊖ land on the same enzyme; downstream ATP →
 * Cyclic AMP → Protein kinase A → ⊕ ↑Ca2+ (left) and a blunt red ⊖ onto
 * Myosin light-chain kinase (smooth muscle contraction) (right) — MLCK
 * prints in the BOTTOM panel under PKA's inhibitory arrow, not in the Gq
 * panel. Redrawn here as original KYP glyphs: the q/i/s swimlane
 * directory (the printed table compressed into three color-coded lanes —
 * Gq amber, Gs brand, Gi emergency — every receptor chip with its
 * printed letter and function digest), the two cascade panels as KYP
 * glyph chains (ligand circle → membrane + 7-TM receptor → G-protein →
 enzyme → second messenger → effector, with green ⊕ markers on
 * stimulatory arrows and red ⊖ T-bars on the two inhibitory arrows), and
 * the ONE HEART / TWO LUNGS / TWObules band — the source's own
 * red-printed hints, carried ATTRIBUTED (never presented as KYP
 * originals). The figure prints its Gs receptor label with Latin "B1,
 * B2, B3" (text font) while the table prints Greek β1, β2, β3 (Symbol
 * font) — both carried as printed. Nothing is reproduced from the book;
 * purely presentational (no props, no hooks, no external images). */

export function GProteinMessengerMap() {
  const w = 1102;
  const h = 1340;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="G-Protein-Linked Second Messengers — the q/i/s directory and the two cascade panels redrawn as original KYP art: three swimlanes (Gq family α1 M1 M3 H1 V1, the phospholipase C route; Gs family β1 β2 β3 D1 H2 V2, the adenylyl cyclase route; Gi family α2 M2 D2, the brake on the same adenylyl cyclase), the Gq cascade panel (Ligand → H1, α1, V1, M1, or M3 receptor → Gq protein → Phospholipase C → PIP2 → DAG → Protein kinase C, with IP3 → ↑Ca2+ feeding both Protein kinase C and Smooth muscle contraction), the shared-enzyme bottom panel (B1, B2, B3, D1, H2, or V2 receptor → GS protein ⊕ Adenylyl cyclase; M2, α2, or D2 receptor → Gi protein ⊖ the same adenylyl cyclase; ATP → Cyclic AMP → Protein kinase A → ⊕ ↑Ca2+ and ⊖ Myosin light-chain kinase (smooth muscle contraction)), and the source's own red-printed one heart / two lungs / twobules hints, carried attributed (redraw of book 237)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">G-Protein-linked second messengers — the q/i/s directory + the two cascade panels (original KYP redraw)</text>
        <rect x="806" y="25" width="256" height="18" className="fill-brand-soft" />
        <text x="934" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">14 receptors · 3 routes · 1 shared enzyme</text>
      </g>

      {/* ===== ZONE A — THE q/i/s SWIMLANE DIRECTORY (the printed table, compressed) ===== */}
      <g>
        <rect x="36" y="74" width="1030" height="512" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="96" fontSize="5.4" fontWeight="800" className="fill-foreground">THE q/i/s DIRECTORY — the printed table compressed into three family lanes (book 237)</text>

        {/* ---------- Gq LANE ---------- */}
        <rect x="52" y="106" width="998" height="150" rx="10" className="fill-card stroke-warning" />
        <rect x="64" y="116" width="180" height="17" rx="4" className="fill-warning" />
        <text x="154" y="128" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">Gq LANE — the q family (5)</text>
        <text x="256" y="128" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the phospholipase C route — IP3 · DAG · ↑Ca2+ — the squeeze</text>

        <rect x="66" y="140" width="152" height="58" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="76" y="154" fontSize="5" fontWeight="800" className="fill-warning">α1</text>
        <rect x="188" y="146" width="20" height="14" rx="3" className="fill-warning" />
        <text x="198" y="156.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">q</text>
        <text x="76" y="168" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ vascular SM contraction,</text>
        <text x="76" y="177" fontSize="3.2" fontWeight="700" className="fill-foreground">mydriasis, ↑ sphincter</text>
        <text x="76" y="186" fontSize="3.2" fontWeight="700" className="fill-foreground">contraction</text>

        <rect x="230" y="140" width="152" height="58" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="240" y="154" fontSize="5" fontWeight="800" className="fill-warning">M1</text>
        <rect x="352" y="146" width="20" height="14" rx="3" className="fill-warning" />
        <text x="362" y="156.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">q</text>
        <text x="240" y="168" fontSize="3.2" fontWeight="700" className="fill-foreground">higher cognitive functions,</text>
        <text x="240" y="177" fontSize="3.2" fontWeight="700" className="fill-foreground">stimulates enteric nervous</text>
        <text x="240" y="186" fontSize="3.2" fontWeight="700" className="fill-foreground">system, ↑ exocrine secretions</text>

        <rect x="394" y="140" width="152" height="58" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="404" y="154" fontSize="5" fontWeight="800" className="fill-warning">M3</text>
        <rect x="516" y="146" width="20" height="14" rx="3" className="fill-warning" />
        <text x="526" y="156.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">q</text>
        <text x="404" y="168" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ secretions, peristalsis,</text>
        <text x="404" y="177" fontSize="3.2" fontWeight="700" className="fill-foreground">bladder contraction, miosis,</text>
        <text x="404" y="186" fontSize="3.2" fontWeight="700" className="fill-foreground">bronchoconstriction</text>

        <rect x="558" y="140" width="152" height="58" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="568" y="154" fontSize="5" fontWeight="800" className="fill-warning">H1</text>
        <rect x="680" y="146" width="20" height="14" rx="3" className="fill-warning" />
        <text x="690" y="156.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">q</text>
        <text x="568" y="168" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ bronchoconstriction, mucus,</text>
        <text x="568" y="177" fontSize="3.2" fontWeight="700" className="fill-foreground">vascular permeability/</text>
        <text x="568" y="186" fontSize="3.2" fontWeight="700" className="fill-foreground">vasodilation, pruritus</text>

        <rect x="722" y="140" width="152" height="58" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="732" y="154" fontSize="5" fontWeight="800" className="fill-warning">V1</text>
        <rect x="844" y="146" width="20" height="14" rx="3" className="fill-warning" />
        <text x="854" y="156.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">q</text>
        <text x="732" y="168" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ vascular smooth muscle</text>
        <text x="732" y="177" fontSize="3.2" fontWeight="700" className="fill-foreground">contraction — the vasopressin</text>
        <text x="732" y="186" fontSize="3.2" fontWeight="700" className="fill-foreground">squeeze</text>

        <text x="890" y="152" fontSize="3.8" fontWeight="800" className="fill-foreground">HAV M&amp;M (KYP)</text>
        <text x="890" y="163" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">H1 · α1 · V1 (HAV)</text>
        <text x="890" y="172" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">+ M1 · M3 (the M&amp;M)</text>
        <text x="890" y="183" fontSize="3.2" fontWeight="700" className="fill-foreground">figure label: “H1, α1, V1,</text>
        <text x="890" y="192" fontSize="3.2" fontWeight="700" className="fill-foreground">M1, or M3 receptor”</text>

        <rect x="66" y="206" width="970" height="40" rx="8" className="fill-warning-soft/30 stroke-warning" strokeDasharray="3 2" />
        <text x="80" y="222" fontSize="4" fontWeight="800" className="fill-foreground">THE q CASCADE: Gq protein → Phospholipase C → PIP2 → DAG → Protein kinase C</text>
        <text x="80" y="236" fontSize="4" fontWeight="800" className="fill-foreground">PIP2 → IP3 → ↑Ca2+ → Smooth muscle contraction (Ca2+ also feeds Protein kinase C ⊕)</text>
        <text x="700" y="222" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Q SQUEEZES — the calcium route (KYP)</text>
        <text x="700" y="232" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">every q receptor contracts smooth</text>
        <text x="700" y="241" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">muscle or pours secretions</text>

        {/* ---------- Gs LANE ---------- */}
        <rect x="52" y="264" width="998" height="150" rx="10" className="fill-card stroke-brand" />
        <rect x="64" y="274" width="180" height="17" rx="4" className="fill-brand" />
        <text x="154" y="286" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">Gs LANE — the s family (6)</text>
        <text x="256" y="286" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the adenylyl cyclase route — ATP → cAMP → protein kinase A</text>

        <rect x="66" y="298" width="152" height="58" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="76" y="312" fontSize="5" fontWeight="800" className="fill-brand">β1</text>
        <rect x="188" y="304" width="20" height="14" rx="3" className="fill-brand" />
        <text x="198" y="314.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">s</text>
        <text x="76" y="326" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ heart rate, contractility</text>
        <text x="76" y="335" fontSize="3.2" fontWeight="700" className="fill-foreground">(one heart), ↑ renin release,</text>
        <text x="76" y="344" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ lipolysis</text>

        <rect x="230" y="298" width="152" height="58" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="240" y="312" fontSize="5" fontWeight="800" className="fill-brand">β2</text>
        <rect x="352" y="304" width="20" height="14" rx="3" className="fill-brand" />
        <text x="362" y="314.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">s</text>
        <text x="240" y="326" fontSize="3.2" fontWeight="700" className="fill-foreground">bronchodilation (two lungs),</text>
        <text x="240" y="335" fontSize="3.2" fontWeight="700" className="fill-foreground">↓ uterine tone (tocolysis),</text>
        <text x="240" y="344" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ K+ uptake, ↑ glycogenolysis</text>

        <rect x="394" y="298" width="152" height="58" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="404" y="312" fontSize="5" fontWeight="800" className="fill-brand">β3</text>
        <rect x="516" y="304" width="20" height="14" rx="3" className="fill-brand" />
        <text x="526" y="314.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">s</text>
        <text x="404" y="326" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ lipolysis, ↑ thermogenesis</text>
        <text x="404" y="335" fontSize="3.2" fontWeight="700" className="fill-foreground">in skeletal muscle,</text>
        <text x="404" y="344" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ bladder relaxation</text>

        <rect x="558" y="298" width="152" height="58" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="568" y="312" fontSize="5" fontWeight="800" className="fill-brand">D1</text>
        <rect x="680" y="304" width="20" height="14" rx="3" className="fill-brand" />
        <text x="690" y="314.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">s</text>
        <text x="568" y="326" fontSize="3.2" fontWeight="700" className="fill-foreground">relaxes renal vascular smooth</text>
        <text x="568" y="335" fontSize="3.2" fontWeight="700" className="fill-foreground">muscle, activates direct</text>
        <text x="568" y="344" fontSize="3.2" fontWeight="700" className="fill-foreground">pathway of striatum</text>

        <rect x="722" y="298" width="152" height="58" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="732" y="312" fontSize="5" fontWeight="800" className="fill-brand">H2</text>
        <rect x="844" y="304" width="20" height="14" rx="3" className="fill-brand" />
        <text x="854" y="314.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">s</text>
        <text x="732" y="326" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ gastric acid secretion —</text>
        <text x="732" y="335" fontSize="3.2" fontWeight="700" className="fill-foreground">the cAMP route run in the</text>
        <text x="732" y="344" fontSize="3.2" fontWeight="700" className="fill-foreground">parietal cell</text>

        <rect x="886" y="298" width="152" height="58" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="896" y="312" fontSize="5" fontWeight="800" className="fill-brand">V2</text>
        <rect x="1008" y="304" width="20" height="14" rx="3" className="fill-brand" />
        <text x="1018" y="314.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">s</text>
        <text x="896" y="326" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ H2O reabsorption via</text>
        <text x="896" y="335" fontSize="3.2" fontWeight="700" className="fill-foreground">aquaporin-2 in collecting</text>
        <text x="896" y="344" fontSize="3.2" fontWeight="700" className="fill-foreground">tubules, ↑ release of vWF</text>

        <rect x="66" y="364" width="970" height="40" rx="8" className="fill-brand-soft/30 stroke-brand" strokeDasharray="3 2" />
        <text x="80" y="380" fontSize="4" fontWeight="800" className="fill-foreground">THE s CASCADE: GS protein → ⊕ Adenylyl cyclase → ATP → Cyclic AMP → Protein kinase A</text>
        <text x="80" y="394" fontSize="4" fontWeight="800" className="fill-foreground">Protein kinase A → ⊕ ↑Ca2+ and ⊖ Myosin light-chain kinase (smooth muscle contraction)</text>
        <text x="742" y="380" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">S SPARKS — the cyclase route (KYP)</text>
        <text x="742" y="390" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">figure label prints “GS protein”</text>
        <text x="742" y="399" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">(capital S) and “B1, B2, B3” (Latin B)</text>

        {/* ---------- Gi LANE ---------- */}
        <rect x="52" y="422" width="998" height="150" rx="10" className="fill-card stroke-emergency" />
        <rect x="64" y="432" width="180" height="17" rx="4" className="fill-emergency" />
        <text x="154" y="444" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">Gi LANE — the i family (3)</text>
        <text x="256" y="444" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the brake on the SAME adenylyl cyclase — ⊖ — less cAMP</text>

        <rect x="66" y="456" width="152" height="58" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="76" y="470" fontSize="5" fontWeight="800" className="fill-emergency">α2</text>
        <rect x="188" y="462" width="20" height="14" rx="3" className="fill-emergency" />
        <text x="198" y="472.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">i</text>
        <text x="76" y="484" fontSize="3.2" fontWeight="700" className="fill-foreground">↓ sympathetic (adrenergic)</text>
        <text x="76" y="493" fontSize="3.2" fontWeight="700" className="fill-foreground">outflow, ↓ insulin, ↓ lipolysis,</text>
        <text x="76" y="502" fontSize="3.2" fontWeight="700" className="fill-foreground">↑ platelet aggregation</text>

        <rect x="230" y="456" width="152" height="58" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="240" y="470" fontSize="5" fontWeight="800" className="fill-emergency">M2</text>
        <rect x="352" y="462" width="20" height="14" rx="3" className="fill-emergency" />
        <text x="362" y="472.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">i</text>
        <text x="240" y="484" fontSize="3.2" fontWeight="700" className="fill-foreground">↓ heart rate, AV node</text>
        <text x="240" y="493" fontSize="3.2" fontWeight="700" className="fill-foreground">conduction velocity, and atrial</text>
        <text x="240" y="502" fontSize="3.2" fontWeight="700" className="fill-foreground">contractility — the vagal brake</text>

        <rect x="394" y="456" width="152" height="58" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="404" y="470" fontSize="5" fontWeight="800" className="fill-emergency">D2</text>
        <rect x="516" y="462" width="20" height="14" rx="3" className="fill-emergency" />
        <text x="526" y="472.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">i</text>
        <text x="404" y="484" fontSize="3.2" fontWeight="700" className="fill-foreground">modulates transmitter release,</text>
        <text x="404" y="493" fontSize="3.2" fontWeight="700" className="fill-foreground">especially in brain, inhibits</text>
        <text x="404" y="502" fontSize="3.2" fontWeight="700" className="fill-foreground">indirect pathway of striatum</text>

        <rect x="560" y="456" width="300" height="58" rx="8" className="fill-secondary stroke-border" />
        <text x="574" y="474" fontSize="4.2" fontWeight="800" className="fill-foreground">MAD TWOS (KYP)</text>
        <text x="574" y="486" fontSize="3.4" fontWeight="700" className="fill-foreground">M2 · α2 · D2 — every i receptor carries a 2,</text>
        <text x="574" y="495" fontSize="3.4" fontWeight="700" className="fill-foreground">and every one is a DOWN-brake: heart rate,</text>
        <text x="574" y="504" fontSize="3.4" fontWeight="700" className="fill-foreground">sympathetic outflow, transmitter release</text>

        <rect x="872" y="456" width="166" height="58" rx="8" className="fill-secondary stroke-border" />
        <text x="886" y="474" fontSize="3.8" fontWeight="800" className="fill-foreground">THE COUNT: 5 · 6 · 3</text>
        <text x="886" y="486" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">5 q + 6 s + 3 i = the 14 printed</text>
        <text x="886" y="495" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">receptor rows of book 237 —</text>
        <text x="886" y="504" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">each row is one letter + functions</text>

        <rect x="66" y="522" width="970" height="40" rx="8" className="fill-emergency-soft/30 stroke-emergency" strokeDasharray="3 2" />
        <text x="80" y="538" fontSize="4" fontWeight="800" className="fill-foreground">THE i CASCADE: Gi protein → ⊖ (blunt red T-bar) ONTO the SAME Adenylyl cyclase → ↓ Cyclic AMP → ↓ Protein kinase A</text>
        <text x="80" y="552" fontSize="4" fontWeight="800" className="fill-foreground">figure label: “M2, α2, or D2 receptor” → “Gi protein”</text>
        <text x="700" y="538" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">I SILENCES — the brake route (KYP)</text>
        <text x="700" y="548" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">the figure prints ONE adenylyl cyclase</text>
        <text x="700" y="557" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">with BOTH the ⊕ and the ⊖ on it</text>
      </g>

      {/* ===== ZONE B — THE TWO CASCADE PANELS (the printed figure, redrawn) ===== */}
      <g>
        <rect x="36" y="600" width="1030" height="566" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="622" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PRINTED FIGURE, REDRAWN — TWO stacked panels (adjudicated at 180–432 DPI + vector-path analysis; the BOTTOM panel carries BOTH Gs and Gi on one adenylyl cyclase)</text>

        {/* ---------- PANEL 1 — THE Gq CASCADE (the figure's TOP panel) ---------- */}
        <rect x="52" y="636" width="998" height="250" rx="10" className="fill-card stroke-warning" />
        <text x="66" y="656" fontSize="4.6" fontWeight="800" className="fill-warning">TOP PANEL — the Gq cascade (as printed: Ligand → H1, α1, V1, M1, or M3 receptor → Gq protein → Phospholipase C → PIP2 → DAG + IP3)</text>

        {/* environment labels, left, as the source prints them */}
        <text x="60" y="700" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Extracellular</text>
        <text x="60" y="709" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">space</text>
        <text x="60" y="728" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Cell</text>
        <text x="60" y="737" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">membrane</text>
        <text x="60" y="758" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Cytoplasm</text>

        {/* ligand */}
        <ellipse cx="112" cy="712" rx="16" ry="12" className="fill-warning-soft stroke-warning" />
        <text x="112" y="715" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-warning">L</text>
        <text x="112" y="694" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Ligand</text>
        <line x1="128" y1="712" x2="152" y2="712" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 148 712 L 156 708 L 156 716 Z" className="fill-foreground" />

        {/* membrane + 7-TM receptor glyph */}
        <line x1="158" y1="700" x2="352" y2="700" className="stroke-border" strokeWidth="1.5" />
        <line x1="158" y1="724" x2="352" y2="724" className="stroke-border" strokeWidth="1.5" />
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`gqm-${i}`} x1={162 + i * 18} y1="700" x2={162 + i * 18} y2="724" className="stroke-border" strokeWidth="0.6" />
        ))}
        <rect x="168" y="694" width="38" height="38" rx="8" className="fill-warning-soft stroke-warning" />
        <path d="M 174 696 L 179 710 L 174 724 M 182 696 L 187 710 L 182 724 M 190 696 L 195 710 L 190 724 M 198 696 L 203 710 L 198 724" fill="none" className="stroke-warning" strokeWidth="1" />
        <text x="212" y="676" fontSize="3.8" fontWeight="800" className="fill-foreground">H1, α1, V1, M1, or M3</text>
        <text x="212" y="685" fontSize="3.8" fontWeight="800" className="fill-foreground">receptor</text>

        {/* receptor -> Gq protein */}
        <path d="M 206 736 C 226 744, 244 746, 262 742" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 258 746 L 268 741 L 260 736 Z" className="fill-foreground" />
        <circle cx="237" cy="743" r="7" className="fill-success" />
        <text x="237" y="745.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">+</text>

        {/* Gq protein */}
        <circle cx="292" cy="744" r="17" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="292" y="747" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-warning">Gq</text>
        <text x="292" y="772" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Gq protein</text>

        {/* Gq -> PLC */}
        <line x1="309" y1="744" x2="342" y2="744" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 338 740 L 348 744 L 338 748 Z" className="fill-foreground" />
        <circle cx="326" cy="736" r="7" className="fill-success" />
        <text x="326" y="738.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">+</text>

        {/* phospholipase C */}
        <rect x="350" y="730" width="86" height="28" rx="6" className="fill-warning-soft stroke-warning" />
        <text x="393" y="742" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Phospholipase</text>
        <text x="393" y="751" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">C</text>

        {/* PLC -> PIP2 */}
        <path d="M 436 740 C 452 738, 462 730, 470 720" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 466 726 L 473 717 L 474 727 Z" className="fill-foreground" />
        <circle cx="458" cy="722" r="7" className="fill-success" />
        <text x="458" y="724.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">+</text>

        {/* PIP2 hexagon */}
        <path d="M 486 700 L 500 692 L 514 700 L 514 714 L 500 722 L 486 714 Z" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="500" y="709" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">PIP2</text>

        {/* PIP2 -> DAG (right, membrane arm) */}
        <line x1="514" y1="703" x2="560" y2="694" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 556 690 L 566 693 L 559 700 Z" className="fill-foreground" />
        {/* PIP2 -> IP3 (down, soluble arm) */}
        <path d="M 500 722 C 500 736, 500 744, 500 756" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 496 752 L 500 762 L 504 752 Z" className="fill-foreground" />

        {/* DAG chip */}
        <rect x="566" y="682" width="54" height="22" rx="5" className="fill-warning-soft stroke-warning" />
        <text x="593" y="696.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">DAG</text>

        {/* IP3 hexagon */}
        <path d="M 486 764 L 500 756 L 514 764 L 514 778 L 500 786 L 486 778 Z" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="530" y="775" fontSize="4.2" fontWeight="800" className="fill-foreground">IP3</text>

        {/* DAG -> PKC */}
        <line x1="620" y1="693" x2="668" y2="693" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 664 689 L 674 693 L 664 697 Z" className="fill-foreground" />
        <circle cx="644" cy="685" r="7" className="fill-success" />
        <text x="644" y="687.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">+</text>

        {/* IP3 -> Ca2+ */}
        <line x1="514" y1="772" x2="600" y2="772" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 596 768 L 606 772 L 596 776 Z" className="fill-foreground" />

        {/* Protein kinase C box */}
        <rect x="676" y="680" width="98" height="26" rx="6" className="fill-card stroke-warning" strokeWidth="1.2" />
        <text x="725" y="692" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Protein</text>
        <text x="725" y="701" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">kinase C</text>

        {/* Ca2+ chip */}
        <rect x="608" y="760" width="64" height="24" rx="6" className="fill-warning-soft stroke-warning" />
        <text x="640" y="776" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">↑Ca2+</text>

        {/* Ca2+ -> PKC (the second feed, up) */}
        <path d="M 672 764 C 690 750, 700 726, 706 710" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 701 713 L 708 704 L 710 715 Z" className="fill-foreground" />
        <circle cx="700" cy="736" r="7" className="fill-success" />
        <text x="700" y="738.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">+</text>

        {/* Ca2+ -> Smooth muscle contraction */}
        <line x1="672" y1="772" x2="752" y2="772" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 748 768 L 758 772 L 748 776 Z" className="fill-foreground" />

        {/* Smooth muscle contraction box */}
        <rect x="760" y="758" width="150" height="28" rx="6" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="835" y="770" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Smooth muscle</text>
        <text x="835" y="779" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">contraction</text>

        {/* squeeze glyph */}
        <path d="M 926 766 L 948 756 L 948 786 Z M 948 766 L 970 756 L 970 786 Z M 970 766 L 992 756 L 992 786 Z" className="fill-warning-soft stroke-warning" strokeWidth="1" />
        <text x="926" y="804" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">the squeeze output</text>

        <text x="66" y="830" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">As adjudicated: PIP2 prints ONCE and splits TWO ways — DAG (membrane arm, stays) and IP3 (soluble arm, travels); ↑Ca2+ carries BOTH of its printed arrows: ⊕ into Protein kinase C, and into Smooth muscle contraction.</text>
        <text x="66" y="841" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">All arrows in this panel are stimulatory (pointed, green ⊕) — no inhibition prints in the Gq panel. Labels verbatim: “Ligand”, “H1, α1, V1, M1, or M3 receptor”, “Gq protein”, “Phospholipase C”, “PIP2”, “DAG”, “IP3”, “Ca2+”, “Protein kinase C”, “Smooth muscle contraction”.</text>

        {/* ---------- PANEL 2 — THE SHARED-ENZYME PANEL (the figure's BOTTOM panel: Gs + Gi) ---------- */}
        <rect x="52" y="898" width="998" height="254" rx="10" className="fill-card stroke-brand" />
        <text x="66" y="918" fontSize="4.6" fontWeight="800" className="fill-brand">BOTTOM PANEL — Gs and Gi share ONE Adenylyl cyclase (as printed: GS protein ⊕ and Gi protein ⊖ land on the same enzyme)</text>

        {/* environment labels */}
        <text x="60" y="952" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Extracellular</text>
        <text x="60" y="961" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">space</text>
        <text x="60" y="980" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Cell</text>
        <text x="60" y="989" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">membrane</text>
        <text x="60" y="1010" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Cytoplasm</text>

        {/* membrane with TWO receptors + the central adenylyl cyclase */}
        <line x1="158" y1="952" x2="660" y2="952" className="stroke-border" strokeWidth="1.5" />
        <line x1="158" y1="976" x2="660" y2="976" className="stroke-border" strokeWidth="1.5" />
        {Array.from({ length: 28 }).map((_, i) => (
          <line key={`bsm-${i}`} x1={162 + i * 18} y1="952" x2={162 + i * 18} y2="976" className="stroke-border" strokeWidth="0.6" />
        ))}

        {/* left ligand (labeled) */}
        <ellipse cx="112" cy="964" rx="16" ry="12" className="fill-brand-soft stroke-brand" />
        <text x="112" y="967" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">L</text>
        <text x="112" y="946" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Ligand</text>
        <line x1="128" y1="964" x2="152" y2="964" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 148 964 L 156 960 L 156 968 Z" className="fill-foreground" />

        {/* left receptor (Gs set, printed with Latin B) */}
        <rect x="168" y="946" width="38" height="38" rx="8" className="fill-brand-soft stroke-brand" />
        <path d="M 174 948 L 179 962 L 174 976 M 182 948 L 187 962 L 182 976 M 190 948 L 195 962 L 190 976 M 198 948 L 203 962 L 198 976" fill="none" className="stroke-brand" strokeWidth="1" />
        <text x="214" y="928" fontSize="3.8" fontWeight="800" className="fill-foreground">B1, B2, B3, D1, H2,</text>
        <text x="214" y="937" fontSize="3.8" fontWeight="800" className="fill-foreground">or V2 receptor</text>
        <text x="214" y="947" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">(as printed — Latin B; = the table&apos;s β1, β2, β3)</text>

        {/* right receptor (Gi set) */}
        <rect x="560" y="946" width="38" height="38" rx="8" className="fill-emergency-soft stroke-emergency" />
        <path d="M 566 948 L 571 962 L 566 976 M 574 948 L 579 962 L 574 976 M 582 948 L 587 962 L 582 976 M 590 948 L 595 962 L 590 976" fill="none" className="stroke-emergency" strokeWidth="1" />
        <text x="560" y="928" fontSize="3.8" fontWeight="800" className="fill-foreground">M2, α2, or D2 receptor</text>
        {/* right ligand circle (unlabeled, as printed — only one "Ligand" label prints) */}
        <ellipse cx="579" cy="912" rx="14" ry="10" className="fill-emergency-soft/60 stroke-emergency" />
        <line x1="579" y1="922" x2="579" y2="940" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 575 937 L 579 945 L 583 937 Z" className="fill-foreground" />
        <text x="610" y="916" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">(unlabeled ligand circle</text>
        <text x="610" y="924" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">as printed — one “Ligand”</text>
        <text x="610" y="932" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">label prints, on the left)</text>

        {/* central adenylyl cyclase (crosses the membrane) */}
        <rect x="340" y="942" width="96" height="46" rx="8" className="fill-card stroke-brand" strokeWidth="1.4" />
        <path d="M 348 946 L 354 962 L 348 984 M 358 946 L 364 962 L 358 984 M 368 946 L 374 962 L 368 984" fill="none" className="stroke-brand" strokeWidth="0.9" />
        <text x="398" y="958" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Adenylyl</text>
        <text x="398" y="967" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">cyclase</text>
        <text x="398" y="980" textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">ONE enzyme, TWO arrows</text>

        {/* left receptor -> GS protein */}
        <path d="M 206 988 C 226 996, 244 998, 262 994" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 258 998 L 268 993 L 260 988 Z" className="fill-foreground" />

        {/* GS protein */}
        <circle cx="292" cy="996" r="17" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="292" y="999" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">GS</text>
        <text x="292" y="1022" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">GS protein</text>

        {/* GS -> AC (stimulatory, pointed, green plus) */}
        <line x1="309" y1="992" x2="334" y2="976" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 330 971 L 338 973 L 332 981 Z" className="fill-foreground" />
        <circle cx="322" cy="986" r="8" className="fill-success" />
        <text x="322" y="988.5" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-card">+</text>

        {/* right receptor -> Gi protein */}
        <path d="M 560 988 C 552 994, 546 996, 538 995" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 542 999 L 532 994 L 540 989 Z" className="fill-foreground" />

        {/* Gi protein */}
        <circle cx="520" cy="996" r="17" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="520" y="999" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">Gi</text>
        <text x="520" y="1022" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Gi protein</text>

        {/* Gi -> AC (inhibitory: blunt red T-bar onto the cyclase) */}
        <line x1="503" y1="991" x2="446" y2="978" className="stroke-emergency" strokeWidth="1.4" />
        <line x1="449" y1="970" x2="441" y2="986" className="stroke-emergency" strokeWidth="2" />
        <circle cx="474" cy="986" r="8" className="fill-emergency" />
        <text x="474" y="988.5" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-card">−</text>

        {/* ATP -> Cyclic AMP -> PKA chain */}
        <path d="M 388 988 C 388 1000, 362 1012, 346 1024" fill="none" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 342 1020 L 342 1030 L 351 1026 Z" className="fill-foreground" />

        {/* ATP starburst */}
        <g className="stroke-warning" strokeWidth="1" fill="none">
          <line x1="330" y1="1030" x2="330" y2="1048" />
          <line x1="321" y1="1039" x2="339" y2="1039" />
          <line x1="323.6" y1="1032.6" x2="336.4" y2="1045.4" />
          <line x1="323.6" y1="1045.4" x2="336.4" y2="1032.6" />
        </g>
        <circle cx="330" cy="1039" r="9" className="fill-warning-soft stroke-warning" />
        <text x="330" y="1042" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">ATP</text>

        {/* ATP -> Cyclic AMP */}
        <line x1="343" y1="1039" x2="382" y2="1039" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 378 1035 L 388 1039 L 378 1043 Z" className="fill-foreground" />

        {/* Cyclic AMP cluster */}
        <circle cx="400" cy="1032" r="5" className="fill-brand-soft stroke-brand" />
        <circle cx="410" cy="1039" r="5" className="fill-brand-soft stroke-brand" />
        <circle cx="400" cy="1046" r="5" className="fill-brand-soft stroke-brand" />
        <circle cx="410" cy="1030" r="5" className="fill-brand-soft stroke-brand" />
        <text x="442" y="1042" fontSize="4.2" fontWeight="800" className="fill-foreground">Cyclic AMP</text>

        {/* Cyclic AMP -> PKA */}
        <line x1="460" y1="1043" x2="498" y2="1043" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 494 1039 L 504 1043 L 494 1047 Z" className="fill-foreground" />

        {/* Protein kinase A */}
        <rect x="506" y="1030" width="104" height="26" rx="6" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="558" y="1042" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Protein</text>
        <text x="558" y="1051" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">kinase A</text>

        {/* PKA -> ↑Ca2+ (leftward, stimulatory) */}
        <line x1="506" y1="1056" x2="452" y2="1080" className="stroke-foreground" strokeWidth="1.1" />
        <path d="M 455 1073 L 448 1083 L 459 1084 Z" className="fill-foreground" />
        <circle cx="482" cy="1066" r="7" className="fill-success" />
        <text x="482" y="1068.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">+</text>
        <rect x="394" y="1086" width="64" height="24" rx="6" className="fill-brand-soft stroke-brand" />
        <text x="426" y="1102" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">↑Ca2+</text>

        {/* PKA -> MLCK (rightward, inhibitory blunt red T-bar) */}
        <line x1="610" y1="1056" x2="678" y2="1080" className="stroke-emergency" strokeWidth="1.4" />
        <line x1="675" y1="1071" x2="682" y2="1089" className="stroke-emergency" strokeWidth="2" />
        <circle cx="642" cy="1066" r="8" className="fill-emergency" />
        <text x="642" y="1068.5" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-card">−</text>
        <rect x="688" y="1072" width="230" height="38" rx="6" className="fill-card stroke-emergency" strokeWidth="1.2" />
        <text x="803" y="1086" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Myosin light-chain kinase</text>
        <text x="803" y="1095" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">(smooth muscle contraction)</text>

        {/* relaxation glyph */}
        <path d="M 930 1082 L 952 1074 M 930 1090 L 952 1098 M 938 1082 L 958 1084 L 938 1090" className="stroke-emergency" strokeWidth="1" fill="none" />
        <text x="930" y="1108" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">the relaxation output</text>

        <text x="66" y="1128" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Adjudicated arrow set: GS protein → ⊕ Adenylyl cyclase (pointed); Gi protein → ⊖ the SAME Adenylyl cyclase (blunt red T-bar); ATP → Cyclic AMP; Cyclic AMP → Protein kinase A; Protein kinase A → ⊕ ↑Ca2+ (left) and ⊖ Myosin light-chain kinase</text>
        <text x="66" y="1139" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(smooth muscle contraction) (right) — MLCK prints in THIS bottom panel under PKA&apos;s inhibitory arrow, the β2-relaxation mechanism. Labels verbatim, incl. “GS protein” (capital S) and “B1, B2, B3, D1, H2, or V2 receptor” (Latin B).</text>
      </g>

      {/* ===== ZONE C — THE SOURCE'S OWN HOOKS (attributed, not KYP) ===== */}
      <g>
        <rect x="36" y="1184" width="1030" height="80" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1206" fontSize="5" fontWeight="800" className="fill-foreground">ONE HEART · TWO LUNGS · TWObules — the source&apos;s own red-printed hints, carried ATTRIBUTED (First Aid, book 237 — not KYP originals)</text>

        <rect x="52" y="1216" width="316" height="38" rx="8" className="fill-card stroke-brand" />
        <text x="66" y="1232" fontSize="4.4" fontWeight="800" className="fill-brand">β1 — “(one heart)”</text>
        <text x="66" y="1244" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">↑ heart rate, ↑ contractility (one heart) —</text>
        <text x="66" y="1252" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">β1, ONE heart: the cardiac row</text>

        <rect x="382" y="1216" width="316" height="38" rx="8" className="fill-card stroke-brand" />
        <text x="396" y="1232" fontSize="4.4" fontWeight="800" className="fill-brand">β2 — “(two lungs)”</text>
        <text x="396" y="1244" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Vasodilation, bronchodilation (two lungs) —</text>
        <text x="396" y="1252" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">β2, TWO lungs: the smooth-muscle row</text>

        <rect x="712" y="1216" width="340" height="38" rx="8" className="fill-card stroke-brand" />
        <text x="726" y="1232" fontSize="4.4" fontWeight="800" className="fill-brand">V2 — “twobules (tubules)”</text>
        <text x="726" y="1244" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">aquaporin-2 in collecting twobules (tubules) of kidney —</text>
        <text x="726" y="1252" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the source&apos;s own wordplay, corrected in parentheses, as printed</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1276" width="1054" height="56" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1294" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 259 / book 237 (Pharmacology — Autonomic Drugs: G-protein–linked second messengers)</text>
        <text x="42" y="1306" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — CONFIRMED, not assumed (the figure is pure vector line art); VLM (glm-4.6v) ran seven passes this session (120–432 DPI) + a PyMuPDF word/vector-path</text>
        <text x="42" y="1316" fontSize="4" className="fill-muted-foreground">dump (staging-ph14/). Adjudicated: TWO stacked panels — Gq on top; Gs AND Gi share the bottom panel&apos;s one adenylyl cyclase; MLCK sits under PKA&apos;s ⊖. This diagram is an ORIGINAL KYP redraw; the</text>
        <text x="42" y="1327" fontSize="4" className="fill-muted-foreground">printed table is carried verbatim in the note&apos;s table block, including “twobules (tubules)” as printed; the one-heart/two-lungs/twobules hints are the source&apos;s own, carried attributed.</text>
      </g>
    </svg>
  );
}
