/* Pharmacology — PH-batch 13: Tissue distribution of adrenergic
 * receptors (book 236, pdf 258 BOTTOM half). Original KYP diagram — the
 * source half is a PURE TABLE (census: pdfimages finds THREE rasters on
 * the page but PyMuPDF xobject-rect analysis + z-ai VLM adjudication
 * place all three in the TOP half, the sibling micturition figure's
 * anatomy silhouettes; the BOTTOM half has ZERO figures — 34 vector
 * paths are the table's own cell borders, VLM-confirmed at 200 DPI,
 * outputs in .usmle-pipeline-cache/staging-ph13/vlm-census.txt). Drawn
 * here with original KYP glyphs: five receptor-directory columns (α1,
 * α2, β1, β2, β3 — regular digits exactly as the table prints them)
 * each stacked with its printed tissue→effect chips; the pancreas chips
 * under α2 (INHIBIT insulin) and β2 (STIMULATE insulin) both flagged
 * PANCREAS ×2 (dashed emergency) and the Heart (β1) / Cardiac muscle
 * (β2) chips both flagged HEART ×2 (dashed warning); a double-bookings
 * band contrasting the pancreas, heart, and vascular-bed pairs; an
 * exam-reading band (the α2 presynaptic-autoreceptor hook, which
 * forward-links to the autonomic-synapse topic, and the β2
 * cardiac-muscle trap vs β1); and the NAME→PLACE→PREDICT rule banner.
 * Nothing is reproduced from the book; purely presentational (no
 * props, no hooks, no external images). */

export function AdrenergicDistributionMap() {
  const w = 1102;
  const h = 1100;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Tissue Distribution of Adrenergic Receptors — the five-subtype receptor directory as original KYP art: five columns (alpha-1, alpha-2, beta-1, beta-2, beta-3), each stacked with its printed tissue-to-effect chips — alpha-1: vascular smooth muscle to vasoconstriction, visceral smooth muscle to contraction; alpha-2: pancreas to inhibition of insulin secretion, presynaptic terminals to inhibition of neurotransmitter release, salivary glands to inhibition of salivary secretion; beta-1: heart to increased heart rate and contractility, kidney to increased renin secretion; beta-2: bronchioles to bronchodilation, cardiac muscle to increased heart rate and contractility, liver to glycogenolysis and glucose release, arterial smooth muscle to vasodilation, pancreas to stimulation of insulin secretion; beta-3: adipose to increased lipolysis — with the double-booked pancreas (alpha-2 inhibit vs beta-2 stimulate), the double-booked heart (beta-1 and beta-2), and the double-booked vascular bed flagged, plus the exam-reading band with the alpha-2 presynaptic autoreceptor hook and the beta-2 cardiac-muscle trap (original KYP diagram of book 236)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Tissue distribution of adrenergic receptors — the five-subtype directory (original KYP diagram)</text>
        <rect x="826" y="25" width="240" height="18" className="fill-brand-soft" />
        <text x="946" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">five subtypes · thirteen rows · printed order</text>
      </g>

      {/* ===== ZONE A — THE DIRECTORY (five receptor columns) ===== */}
      <g>
        <rect x="36" y="72" width="1030" height="576" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">THE DIRECTORY — five receptor columns, each stacked with its printed tissue→effect rows (book 236, carried verbatim)</text>

        {/* ---------- column: α1 ---------- */}
        <g>
          <rect x="44" y="102" width="179" height="36" rx="8" className="fill-card stroke-emergency" />
          <text x="133.5" y="118" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">α1</text>
          <text x="133.5" y="131" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the constrictor</text>
          <rect x="46" y="148" width="175" height="84" rx="8" className="fill-card stroke-emergency" />
          <text x="133.5" y="170" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Vascular smooth muscle</text>
          <text x="133.5" y="184" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="54" y="190" width="159" height="30" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
          <text x="133.5" y="209" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Vasoconstriction</text>
          <rect x="46" y="240" width="175" height="84" rx="8" className="fill-card stroke-emergency" />
          <text x="133.5" y="262" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Visceral smooth muscle</text>
          <text x="133.5" y="276" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="54" y="282" width="159" height="30" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
          <text x="133.5" y="301" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Smooth muscle contraction</text>
          <text x="46" y="614" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">BOTH ROWS ARE SMOOTH MUSCLE —</text>
          <text x="46" y="624" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the squeeze subtype: no gland row,</text>
          <text x="46" y="634" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">no heart row, no metabolic row</text>
        </g>

        {/* ---------- column: α2 ---------- */}
        <g>
          <rect x="252" y="102" width="179" height="36" rx="8" className="fill-card stroke-emergency" />
          <text x="341.5" y="118" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">α2</text>
          <text x="341.5" y="131" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the brake pedal</text>
          <rect x="254" y="148" width="175" height="84" rx="8" className="fill-card stroke-emergency" strokeDasharray="3 2" />
          <rect x="373" y="154" width="52" height="12" rx="3" className="fill-emergency" />
          <text x="399" y="163" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-card">PANCREAS ×2</text>
          <text x="341.5" y="170" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Pancreas</text>
          <text x="341.5" y="184" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="262" y="190" width="159" height="30" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
          <text x="341.5" y="209" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Inhibition of insulin secretion</text>
          <rect x="254" y="240" width="175" height="84" rx="8" className="fill-card stroke-emergency" />
          <text x="341.5" y="262" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Presynaptic terminals</text>
          <text x="341.5" y="276" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="262" y="282" width="159" height="30" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
          <text x="341.5" y="301" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Inhibition of neurotransmitter release</text>
          <rect x="254" y="332" width="175" height="84" rx="8" className="fill-card stroke-emergency" />
          <text x="341.5" y="354" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Salivary glands</text>
          <text x="341.5" y="368" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="262" y="374" width="159" height="30" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
          <text x="341.5" y="393" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Inhibition of salivary secretion</text>
          <text x="254" y="614" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">EVERY α2 ROW IS AN INHIBITION — the</text>
          <text x="254" y="624" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">brake pedal: insulin, neurotransmitter</text>
          <text x="254" y="634" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">release, saliva — three brakes, one subtype</text>
        </g>

        {/* ---------- column: β1 ---------- */}
        <g>
          <rect x="460" y="102" width="179" height="36" rx="8" className="fill-card stroke-brand" />
          <text x="549.5" y="118" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-brand">β1</text>
          <text x="549.5" y="131" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the cardiac-renal drive</text>
          <rect x="462" y="148" width="175" height="84" rx="8" className="fill-card stroke-warning" strokeDasharray="3 2" />
          <rect x="585" y="154" width="44" height="12" rx="3" className="fill-warning" />
          <text x="607" y="163" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-card">HEART ×2</text>
          <text x="549.5" y="170" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Heart</text>
          <text x="549.5" y="184" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="470" y="190" width="159" height="30" rx="6" className="fill-warning-soft/40 stroke-warning" />
          <text x="549.5" y="209" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">↑ heart rate, contractility</text>
          <rect x="462" y="240" width="175" height="84" rx="8" className="fill-card stroke-brand" />
          <text x="549.5" y="262" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Kidney</text>
          <text x="549.5" y="276" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="470" y="282" width="159" height="30" rx="6" className="fill-brand-soft/40 stroke-brand" />
          <text x="549.5" y="301" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">↑ renin secretion</text>
          <text x="462" y="614" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">HEART + KIDNEY — one subtype, two</text>
          <text x="462" y="624" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">end-organs: rate, contractility, AND renin</text>
          <text x="462" y="634" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">fall together under β1 blockade</text>
        </g>

        {/* ---------- column: β2 ---------- */}
        <g>
          <rect x="668" y="102" width="179" height="36" rx="8" className="fill-card stroke-brand" />
          <text x="757.5" y="118" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-brand">β2</text>
          <text x="757.5" y="131" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the five-row dilator</text>
          <rect x="670" y="148" width="175" height="84" rx="8" className="fill-card stroke-brand" />
          <text x="757.5" y="170" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Bronchioles</text>
          <text x="757.5" y="184" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="678" y="190" width="159" height="30" rx="6" className="fill-brand-soft/40 stroke-brand" />
          <text x="757.5" y="209" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Bronchodilation</text>
          <rect x="670" y="240" width="175" height="84" rx="8" className="fill-card stroke-warning" strokeDasharray="3 2" />
          <rect x="795" y="246" width="44" height="12" rx="3" className="fill-warning" />
          <text x="817" y="255" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-card">HEART ×2</text>
          <text x="757.5" y="262" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Cardiac muscle</text>
          <text x="757.5" y="276" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="678" y="282" width="159" height="30" rx="6" className="fill-warning-soft/40 stroke-warning" />
          <text x="757.5" y="301" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">↑ heart rate, contractility</text>
          <rect x="670" y="332" width="175" height="84" rx="8" className="fill-card stroke-brand" />
          <text x="757.5" y="354" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Liver</text>
          <text x="757.5" y="368" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="678" y="374" width="159" height="30" rx="6" className="fill-brand-soft/40 stroke-brand" />
          <text x="757.5" y="393" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Glycogenolysis, glucose release</text>
          <rect x="670" y="424" width="175" height="84" rx="8" className="fill-card stroke-brand" />
          <text x="757.5" y="446" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Arterial smooth muscle</text>
          <text x="757.5" y="460" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="678" y="466" width="159" height="30" rx="6" className="fill-brand-soft/40 stroke-brand" />
          <text x="757.5" y="485" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Vasodilation</text>
          <rect x="670" y="516" width="175" height="84" rx="8" className="fill-card stroke-emergency" strokeDasharray="3 2" />
          <rect x="789" y="522" width="52" height="12" rx="3" className="fill-emergency" />
          <text x="815" y="531" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-card">PANCREAS ×2</text>
          <text x="757.5" y="538" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Pancreas</text>
          <text x="757.5" y="552" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="678" y="558" width="159" height="30" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
          <text x="757.5" y="577" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">Stimulation of insulin secretion</text>
          <text x="670" y="614" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">FIVE ROWS — the widest membership list:</text>
          <text x="670" y="624" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">lungs, heart, liver, vessels, pancreas</text>
          <text x="670" y="634" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">— β2 is not only lungs</text>
        </g>

        {/* ---------- column: β3 ---------- */}
        <g>
          <rect x="876" y="102" width="179" height="36" rx="8" className="fill-card stroke-brand" />
          <text x="965.5" y="118" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-brand">β3</text>
          <text x="965.5" y="131" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the fat burner</text>
          <rect x="878" y="148" width="175" height="84" rx="8" className="fill-card stroke-brand" />
          <text x="965.5" y="170" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Adipose</text>
          <text x="965.5" y="184" textAnchor="middle" fontSize="4" className="fill-muted-foreground">→</text>
          <rect x="886" y="190" width="159" height="30" rx="6" className="fill-brand-soft/40 stroke-brand" />
          <text x="965.5" y="209" textAnchor="middle" fontSize="3.7" fontWeight="700" className="fill-foreground">↑ lipolysis</text>
          <text x="878" y="614" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">ONE ROW — adipose only: the table</text>
          <text x="878" y="624" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">gives β3 no heart, lung, liver, vessel,</text>
          <text x="878" y="634" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">or pancreas row (bladder β3 = next topic)</text>
        </g>
      </g>

      {/* ===== ZONE B — THE DOUBLE BOOKINGS ===== */}
      <g>
        <rect x="36" y="660" width="1030" height="194" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="682" fontSize="5.4" fontWeight="800" className="fill-foreground">THE DOUBLE BOOKINGS — three tissues that answer to TWO subtypes each (the exam&apos;s favorite asymmetries)</text>

        {/* pancreas panel */}
        <rect x="36" y="694" width="334" height="146" rx="10" className="fill-card stroke-emergency" />
        <text x="50" y="714" fontSize="4.8" fontWeight="800" className="fill-emergency">THE PANCREAS — booked twice, opposite directions</text>
        <rect x="50" y="724" width="306" height="26" rx="6" className="fill-emergency-soft/30" />
        <rect x="58" y="729" width="34" height="16" rx="4" className="fill-emergency" />
        <text x="75" y="740.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-card">α2</text>
        <text x="100" y="741" fontSize="3.9" fontWeight="700" className="fill-foreground">Pancreas → INHIBITION of insulin secretion</text>
        <rect x="50" y="754" width="306" height="26" rx="6" className="fill-emergency-soft/30" />
        <rect x="58" y="759" width="34" height="16" rx="4" className="fill-brand" />
        <text x="75" y="770.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-card">β2</text>
        <text x="100" y="771" fontSize="3.9" fontWeight="700" className="fill-foreground">Pancreas → STIMULATION of insulin secretion</text>
        <text x="50" y="798" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the RECEPTOR, not the organ, sets the sign —</text>
        <text x="50" y="808" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">same islet, two doors, opposite insulin directions</text>
        <text x="50" y="824" fontSize="3.6" fontWeight="800" className="fill-emergency">PANCREAS PAYS BOTH WAYS</text>

        {/* heart panel */}
        <rect x="384" y="694" width="334" height="146" rx="10" className="fill-card stroke-warning" />
        <text x="398" y="714" fontSize="4.8" fontWeight="800" className="fill-warning">THE HEART — booked twice, same effect</text>
        <rect x="398" y="724" width="306" height="26" rx="6" className="fill-warning-soft/40" />
        <rect x="406" y="729" width="34" height="16" rx="4" className="fill-brand" />
        <text x="423" y="740.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-card">β1</text>
        <text x="448" y="741" fontSize="3.9" fontWeight="700" className="fill-foreground">Heart → ↑ heart rate, contractility</text>
        <rect x="398" y="754" width="306" height="26" rx="6" className="fill-warning-soft/40" />
        <rect x="406" y="759" width="34" height="16" rx="4" className="fill-brand" />
        <text x="423" y="770.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-card">β2</text>
        <text x="448" y="771" fontSize="3.9" fontWeight="700" className="fill-foreground">Cardiac muscle → ↑ heart rate, contractility</text>
        <text x="398" y="798" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">β2 is not only lungs — the Cardiac muscle row is</text>
        <text x="398" y="808" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the classic trap vs β1&apos;s Heart row (identical effect)</text>
        <text x="398" y="824" fontSize="3.6" fontWeight="800" className="fill-warning">ONE HEART, TWO MEMBERSHIPS</text>

        {/* vasculature panel */}
        <rect x="732" y="694" width="334" height="146" rx="10" className="fill-card stroke-border" />
        <text x="746" y="714" fontSize="4.8" fontWeight="800" className="fill-foreground">THE VASCULAR BED — booked twice, opposite directions</text>
        <rect x="746" y="724" width="306" height="26" rx="6" className="fill-secondary/60" />
        <rect x="754" y="729" width="34" height="16" rx="4" className="fill-emergency" />
        <text x="771" y="740.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-card">α1</text>
        <text x="796" y="741" fontSize="3.9" fontWeight="700" className="fill-foreground">Vascular smooth muscle → Vasoconstriction</text>
        <rect x="746" y="754" width="306" height="26" rx="6" className="fill-secondary/60" />
        <rect x="754" y="759" width="34" height="16" rx="4" className="fill-brand" />
        <text x="771" y="770.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-card">β2</text>
        <text x="796" y="771" fontSize="3.9" fontWeight="700" className="fill-foreground">Arterial smooth muscle → Vasodilation</text>
        <text x="746" y="798" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">squeeze vs open on the same bed — the tug-of-war</text>
        <text x="746" y="808" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">behind blood pressure and pressor/depressor effects</text>
        <text x="746" y="824" fontSize="3.6" fontWeight="800" className="fill-foreground">READ THE RECEPTOR, NOT THE VESSEL WORD</text>
      </g>

      {/* ===== ZONE C — EXAM READING ===== */}
      <g>
        <rect x="36" y="866" width="1030" height="116" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="888" fontSize="5.4" fontWeight="800" className="fill-foreground">EXAM READING — the two rows that decide the most questions</text>
        <rect x="36" y="898" width="502" height="72" rx="10" className="fill-card stroke-emergency" />
        <text x="50" y="916" fontSize="4.4" fontWeight="800" className="fill-emergency">THE α2 PRESYNAPTIC AUTORECEPTOR — the adrenergic brake</text>
        <text x="50" y="930" fontSize="3.6" fontWeight="700" className="fill-foreground">Presynaptic terminals → Inhibition of neurotransmitter release: the one</text>
        <text x="50" y="940" fontSize="3.6" fontWeight="700" className="fill-foreground">adrenergic receptor that turns sympathetic OUTPUT down — expanded in the</text>
        <text x="50" y="950" fontSize="3.6" fontWeight="700" className="fill-foreground">autonomic synapse topic (book 238) and the basis of central α2 antihypertensives.</text>
        <rect x="552" y="898" width="514" height="72" rx="10" className="fill-card stroke-warning" />
        <text x="566" y="916" fontSize="4.4" fontWeight="800" className="fill-warning">THE β2 CARDIAC-MUSCLE TRAP — β2 is not only lungs</text>
        <text x="566" y="930" fontSize="3.6" fontWeight="700" className="fill-foreground">Cardiac muscle → ↑ heart rate, contractility prints under β2, identical to</text>
        <text x="566" y="940" fontSize="3.6" fontWeight="700" className="fill-foreground">β1&apos;s Heart row — the heart is double-booked, so a β2-selective agonist can</text>
        <text x="566" y="950" fontSize="3.6" fontWeight="700" className="fill-foreground">still speed the heart; students who file β2 under &quot;lungs&quot; miss this printed row.</text>
      </g>

      {/* ===== ZONE D — THE READING RULE ===== */}
      <g>
        <rect x="36" y="994" width="1030" height="46" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1014" fontSize="5" fontWeight="800" className="fill-foreground">READ THE DIRECTORY — NAME the subtype → PLACE it on its tissue list → PREDICT the effect</text>
        <text x="52" y="1030" fontSize="4.2" className="fill-foreground">The effect belongs to the (receptor, tissue) pair — never to the organ alone: the pancreas, the heart, and the vascular bed each answer to two subtypes, and only the subtype named in the stem picks the row.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1052" width="1054" height="40" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1067" fontSize="4.2" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 258 / book 236 (Pharmacology — Autonomic Drugs: Tissue distribution of adrenergic receptors)</text>
        <text x="42" y="1077" fontSize="4" className="fill-muted-foreground">Census: three rasters print on the page but ALL in the TOP half (the sibling micturition figure&apos;s silhouettes — PyMuPDF + VLM adjudicated); the BOTTOM half is a pure text table —</text>
        <text x="42" y="1087" fontSize="4" className="fill-muted-foreground">zero figures, zero margin mnemonics (vlm-census.txt in staging-ph13). SHARED PAGE: the top half (Micturition control) is the sibling topic. ORIGINAL KYP design.</text>
      </g>
    </svg>
  );
}
