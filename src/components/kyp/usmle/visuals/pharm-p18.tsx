/* Pharmacology — PH-batch 18: Sympatholytics (α2-agonists) & α-Blockers
 * (book 243, FULL pdf page 265 — no shared-page split). Original KYP
 * diagram — the source page is pure table typesetting (pdfimages census:
 * ZERO raster images; one VLM pass at 120 DPI, glm-4.6v, saved to
 * staging-ph18/vlm-census.txt — no photographs, no line art, no margin
 * mnemonics; the page's only embedded mnemonic is First Aid's own red "p"
 * in "PTSD (prazosin)", carried here ATTRIBUTED and rendered in the
 * emergency token color). The two printed tables are drawn here as ONE
 * two-fork map, per the production spec: FORK 1 (top) — the presynaptic
 * α2-autoreceptor brake from autonomic-drugs-synapse (book 238: NE itself
 * acts on presynaptic α2-autoreceptors → negative feedback), with
 * clonidine/guanfacine, α-methyldopa, and tizanidine pressing the same
 * brake, each linked to its printed APPLICATIONS and the printed ADVERSE
 * EFFECTS (rebound hypertension flagged); FORK 2 (bottom) — the α-blocker
 * fork in its three printed band rows: NONSELECTIVE (phenoxybenzamine
 * IRREVERSIBLE = the pheochromocytoma preop pairing; phentolamine
 * REVERSIBLE = the MAOI-tyramine / cocaine-induced hypertension 2nd line /
 * norepinephrine extravasation rescues; the ONE shared adverse cell
 * "Orthostatic hypotension, reflex tachycardia." printed once spanning
 * both rows, VLM-confirmed), α1 SELECTIVE (-osin ending: prazosin,
 * terazosin, doxazosin, tamsulosin with BPH, PTSD, hypertension except
 * tamsulosin, and the 1st-dose orthostatic hypotension rule), and α2
 * SELECTIVE (mirtazapine: Depression; Sedation, ↑ serum cholesterol,
 * ↑ appetite — the mirror of the brake above). Nothing is reproduced from
 * the book; purely presentational (no props, no hooks, no external
 * images). */

export function SympatholyticAlphaMap() {
  const w = 1102;
  const h = 1286;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Sympatholytics (α2-agonists) & α-Blockers — the two-fork α map (original KYP diagram of book 243): FORK 1, the α2-agonists pressing the presynaptic α2-autoreceptor brake (clonidine, guanfacine, α-methyldopa, tizanidine → hypertensive urgency, ADHD, Tourette, opioid withdrawal; hypertension in pregnancy; relief of spasticity; adverse: CNS depression, bradycardia, hypotension, miosis, rebound hypertension with abrupt cessation); FORK 2, the α-blockers in three bands (nonselective phenoxybenzamine IRREVERSIBLE for pheochromocytoma preop vs phentolamine REVERSIBLE for MAOI-tyramine, cocaine hypertension 2nd line, norepinephrine extravasation, sharing one adverse cell: orthostatic hypotension, reflex tachycardia; α1-selective -osin family for BPH, PTSD, hypertension except tamsulosin with the 1st-dose orthostatic hypotension rule; α2-selective mirtazapine for depression with sedation, ↑ serum cholesterol, ↑ appetite)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Sympatholytics (α2-agonists) &amp; α-Blockers — the two-fork α map (original KYP diagram)</text>
        <rect x="806" y="25" width="256" height="18" className="fill-brand-soft" />
        <text x="934" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">agonist at the brake · blocker at the gate</text>
      </g>

      {/* ===== ZONE A — FORK 1: THE α2-AGONIST BRAKE ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="576" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">FORK 1 — SYMPATHOLYTICS (α2-AGONISTS): pressing the presynaptic α2 brake (book 243 table + the book 238 autoreceptor sentence)</text>

        {/* the three α2-agonist drug chips */}
        <rect x="52" y="102" width="322" height="72" rx="10" className="fill-card stroke-brand" />
        <text x="64" y="120" fontSize="4.8" fontWeight="800" className="fill-brand">CLONIDINE, GUANFACINE</text>
        <text x="64" y="134" fontSize="3.8" className="fill-foreground">Hypertensive urgency (limited situations),</text>
        <text x="64" y="144" fontSize="3.8" className="fill-foreground">ADHD, Tourette syndrome, symptom control</text>
        <text x="64" y="154" fontSize="3.8" className="fill-foreground">in opioid withdrawal</text>

        <rect x="390" y="102" width="322" height="72" rx="10" className="fill-card stroke-brand" />
        <text x="402" y="120" fontSize="4.8" fontWeight="800" className="fill-brand">α-METHYLDOPA</text>
        <text x="402" y="134" fontSize="3.8" className="fill-foreground">Hypertension in pregnancy — with the</text>
        <text x="402" y="144" fontSize="3.8" className="fill-foreground">taxes: Direct Coombs ⊕ hemolysis,</text>
        <text x="402" y="154" fontSize="3.8" className="fill-foreground">drug-induced lupus, hyperprolactinemia</text>

        <rect x="728" y="102" width="322" height="72" rx="10" className="fill-card stroke-brand" />
        <text x="740" y="120" fontSize="4.8" fontWeight="800" className="fill-brand">TIZANIDINE</text>
        <text x="740" y="134" fontSize="3.8" className="fill-foreground">Relief of spasticity —</text>
        <text x="740" y="144" fontSize="3.8" className="fill-foreground">hypotension, weakness, xerostomia</text>
        <text x="740" y="154" fontSize="3.8" className="fill-muted-foreground">(all four drugs = the printed APPLICATIONS column)</text>

        {/* converging arrows: each drug presses the same brake */}
        <path d="M 213 174 V 224 H 545 V 252" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 541 252 L 545 261 L 549 252 Z" className="fill-foreground" />
        <path d="M 551 174 V 252" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 547 252 L 551 261 L 555 252 Z" className="fill-foreground" />
        <path d="M 889 174 V 224 H 557 V 252" fill="none" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 553 252 L 557 261 L 561 252 Z" className="fill-foreground" />
        <text x="620" y="196" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">agonists — they press the brake NE itself presses</text>

        {/* the sympathetic nerve ending (presynaptic terminal) */}
        <rect x="120" y="300" width="470" height="96" rx="12" className="fill-card stroke-border" />
        <text x="132" y="318" fontSize="4.4" fontWeight="800" className="fill-foreground">SYMPATHETIC NERVE ENDING (presynaptic)</text>
        <circle cx="180" cy="352" r="13" className="fill-brand-soft stroke-brand" />
        <text x="180" y="355.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">NE</text>
        <circle cx="240" cy="352" r="13" className="fill-brand-soft stroke-brand" />
        <text x="240" y="355.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">NE</text>
        <circle cx="300" cy="352" r="13" className="fill-brand-soft stroke-brand" />
        <text x="300" y="355.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">NE</text>
        <text x="360" y="349" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">vesicles of norepinephrine</text>
        <text x="360" y="360" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">waiting on the action potential</text>

        {/* the α2 autoreceptor chip ON the terminal membrane */}
        <rect x="485" y="264" width="132" height="34" rx="8" className="fill-warning stroke-warning" />
        <text x="551" y="277" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">α2 AUTORECEPTOR</text>
        <text x="551" y="289" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-card">THE BRAKE (book 238)</text>

        {/* NE release arrow across the cleft to the target */}
        <path d="M 590 352 H 812" fill="none" className="stroke-foreground" strokeWidth="1.6" />
        <path d="M 808 347 L 818 352 L 808 357 Z" className="fill-foreground" />
        <text x="700" y="344" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">NE RELEASE →</text>

        {/* the postsynaptic target chip */}
        <rect x="818" y="302" width="228" height="92" rx="10" className="fill-secondary stroke-border" />
        <text x="830" y="322" fontSize="4.4" fontWeight="800" className="fill-foreground">TARGET ORGAN</text>
        <text x="830" y="336" fontSize="3.8" fontWeight="700" className="fill-foreground">α1 / β receptors on vessels,</text>
        <text x="830" y="346" fontSize="3.8" fontWeight="700" className="fill-foreground">heart, and the glands —</text>
        <text x="830" y="356" fontSize="3.8" fontWeight="700" className="fill-foreground">where the sympathetic</text>
        <text x="830" y="366" fontSize="3.8" fontWeight="700" className="fill-foreground">signal does its work</text>

        {/* NE's own negative feedback: dashed curve from the cleft back to α2 */}
        <path d="M 700 330 C 700 240, 640 234, 620 264" fill="none" className="stroke-warning" strokeWidth="1.3" strokeDasharray="4 2.5" />
        <path d="M 626 268 L 617 262 L 624 256 Z" className="fill-warning" />
        <text x="740" y="208" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-warning">NE itself → negative feedback ⊖ (book 238)</text>

        {/* the T-bar: the stimulated α2 brake inhibits NE release */}
        <line x1="551" y1="298" x2="551" y2="352" className="stroke-emergency" strokeWidth="1.6" />
        <line x1="536" y1="352" x2="596" y2="352" className="stroke-emergency" strokeWidth="2.2" />
        <text x="551" y="380" textAnchor="middle" fontSize="3.5" fontWeight="800" className="fill-emergency">brake pressed ⊣ less NE released</text>

        {/* ↓ sympathetic outflow band — the printed columns */}
        <text x="52" y="434" fontSize="4.8" fontWeight="800" className="fill-foreground">↓ SYMPATHETIC OUTFLOW — the printed APPLICATIONS, paid for with the printed ADVERSE EFFECTS</text>
        <rect x="52" y="444" width="322" height="92" rx="10" className="fill-card stroke-border" />
        <text x="64" y="462" fontSize="4.2" fontWeight="800" className="fill-brand">CLONIDINE, GUANFACINE — applications</text>
        <text x="64" y="476" fontSize="3.8" className="fill-foreground">Hypertensive urgency (limited situations),</text>
        <text x="64" y="486" fontSize="3.8" className="fill-foreground">ADHD, Tourette syndrome, symptom control</text>
        <text x="64" y="496" fontSize="3.8" className="fill-foreground">in opioid withdrawal</text>
        <text x="64" y="518" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">PRESS THE BRAKE, DON'T CUT THE WIRE</text>

        <rect x="390" y="444" width="322" height="92" rx="10" className="fill-card stroke-border" />
        <text x="402" y="462" fontSize="4.2" fontWeight="800" className="fill-brand">α-METHYLDOPA — application</text>
        <text x="402" y="476" fontSize="3.8" className="fill-foreground">Hypertension in pregnancy (the obstetric</text>
        <text x="402" y="486" fontSize="3.8" className="fill-foreground">brake) — Direct Coombs ⊕ hemolysis,</text>
        <text x="402" y="496" fontSize="3.8" className="fill-foreground">drug-induced lupus, hyperprolactinemia</text>
        <text x="402" y="518" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">THE PREGNANT BRAKE WITH THREE TAXES</text>

        <rect x="728" y="444" width="322" height="92" rx="10" className="fill-card stroke-border" />
        <text x="740" y="462" fontSize="4.2" fontWeight="800" className="fill-brand">TIZANIDINE — application</text>
        <text x="740" y="476" fontSize="3.8" className="fill-foreground">Relief of spasticity — hypotension,</text>
        <text x="740" y="486" fontSize="3.8" className="fill-foreground">weakness, xerostomia</text>
        <text x="740" y="518" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">same brake, different lane (muscle tone)</text>

        <rect x="52" y="546" width="998" height="50" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="64" y="564" fontSize="4.2" fontWeight="800" className="fill-emergency">ADVERSE EFFECTS (printed): CNS depression, bradycardia, hypotension, respiratory depression, miosis —</text>
        <text x="64" y="578" fontSize="4.2" fontWeight="800" className="fill-emergency">and REBOUND HYPERTENSION WITH ABRUPT CESSATION: release the pressed brake suddenly and the system surges</text>

        <text x="52" y="618" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Fork 1 mechanism note: the α2-autoreceptor negative-feedback sentence prints on book 238 (the sibling topic</text>
        <text x="52" y="628" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">autonomic-drugs-synapse) — this page's table is the drug-side application of that brake (attribution carried).</text>
      </g>

      {/* ===== ZONE B — FORK 2: THE α-BLOCKERS ===== */}
      <g>
        <rect x="36" y="660" width="1030" height="470" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="682" fontSize="5.4" fontWeight="800" className="fill-foreground">FORK 2 — THE α-BLOCKERS (book 243): three printed bands, three ways to block — and the pheochromocytoma + first-dose rules</text>

        {/* the two α targets */}
        <rect x="140" y="696" width="500" height="30" rx="8" className="fill-card stroke-warning" />
        <text x="390" y="715" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">α1 — VASCULAR SMOOTH MUSCLE (tone → vasoconstriction)</text>
        <rect x="700" y="696" width="300" height="30" rx="8" className="fill-card stroke-brand" />
        <text x="850" y="715" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">α2 — THE PRESYNAPTIC BRAKE</text>

        {/* ---------- band 1: NONSELECTIVE ---------- */}
        <rect x="52" y="744" width="450" height="330" rx="12" className="fill-card stroke-warning" />
        <rect x="64" y="756" width="130" height="20" rx="5" className="fill-warning" />
        <text x="129" y="770" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">NONSELECTIVE</text>
        <text x="200" y="770" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">both members ⊣ α1 — one shared adverse cell</text>

        {/* phenoxybenzamine card */}
        <rect x="64" y="784" width="426" height="112" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <rect x="74" y="794" width="88" height="16" rx="4" className="fill-warning" />
        <text x="118" y="805.5" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-card">IRREVERSIBLE</text>
        <text x="170" y="805.5" fontSize="4.6" fontWeight="800" className="fill-foreground">Phenoxybenzamine</text>
        <text x="74" y="824" fontSize="3.8" className="fill-foreground">Irreversible. Pheochromocytoma (used preoperatively)</text>
        <text x="74" y="834" fontSize="3.8" className="fill-foreground">to prevent catecholamine (hypertensive) crisis.</text>
        <text x="74" y="852" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">covalent blockade — the tumor's catecholamine surge</text>
        <text x="74" y="862" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">cannot out-compete it: PHENOXY FOREVER</text>

        {/* phentolamine card */}
        <rect x="64" y="904" width="426" height="112" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <rect x="74" y="914" width="80" height="16" rx="4" className="fill-warning" />
        <text x="114" y="925.5" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-card">REVERSIBLE</text>
        <text x="162" y="925.5" fontSize="4.6" fontWeight="800" className="fill-foreground">Phentolamine</text>
        <text x="74" y="944" fontSize="3.8" className="fill-foreground">Reversible. Patients on MAO inhibitors who eat</text>
        <text x="74" y="954" fontSize="3.8" className="fill-foreground">tyramine-containing foods; severe cocaine-induced</text>
        <text x="74" y="964" fontSize="3.8" className="fill-foreground">hypertension (2nd line); norepinephrine</text>
        <text x="74" y="974" fontSize="3.8" className="fill-foreground">extravasation rescue — quick on, quick off:</text>
        <text x="74" y="992" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">PHENTOLAMINE FLEETING — the acute rescuer</text>

        {/* the shared adverse cell chip */}
        <rect x="64" y="1022" width="426" height="40" rx="8" className="fill-emergency-soft/30 stroke-emergency" strokeDasharray="3 2" />
        <text x="277" y="1038" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">ONE shared ADVERSE EFFECTS cell (both rows):</text>
        <text x="277" y="1052" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Orthostatic hypotension, reflex tachycardia.</text>

        {/* ---------- band 2: α1 SELECTIVE (-osin ending) ---------- */}
        <rect x="514" y="744" width="286" height="330" rx="12" className="fill-card stroke-brand" />
        <rect x="526" y="756" width="174" height="20" rx="5" className="fill-brand" />
        <text x="613" y="770" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">α1 SELECTIVE (-osin ending)</text>

        <text x="526" y="796" fontSize="4.4" fontWeight="800" className="fill-foreground">Prazosin, terazosin,</text>
        <text x="526" y="808" fontSize="4.4" fontWeight="800" className="fill-foreground">doxazosin, tamsulosin</text>
        <text x="526" y="828" fontSize="3.8" className="fill-foreground">Urinary symptoms of BPH;</text>
        <text x="526" y="840" fontSize="3.8" fontWeight="700" className="fill-foreground">PTSD (
          <tspan className="fill-emergency" fontWeight="800">p</tspan>razosin) — the source prints
        </text>
        <text x="526" y="851" fontSize="3.8" fontWeight="700" className="fill-foreground">this p in red (its own mnemonic);</text>
        <text x="526" y="862" fontSize="3.8" className="fill-foreground">hypertension (except tamsulosin).</text>

        <rect x="526" y="876" width="262" height="52" rx="8" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="557" y="894" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">1st-dose orthostatic hypotension,</text>
        <text x="557" y="906" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">dizziness, headache — first dose at night</text>
        <text x="557" y="922" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">-OSIN FOR THE OUTLETS, FIRST DOSE FLOORS</text>

        <text x="526" y="946" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">α1-selective ⊣ spares the α2 brake —</text>
        <text x="526" y="956" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">tamsulosin stays in the prostate</text>
        <text x="526" y="966" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(little blood-pressure effect)</text>

        {/* ---------- band 3: α2 SELECTIVE ---------- */}
        <rect x="812" y="744" width="238" height="330" rx="12" className="fill-card stroke-brand" />
        <rect x="824" y="756" width="106" height="20" rx="5" className="fill-brand" />
        <text x="877" y="770" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">α2 SELECTIVE</text>

        <text x="824" y="796" fontSize="4.4" fontWeight="800" className="fill-foreground">Mirtazapine</text>
        <text x="824" y="816" fontSize="3.8" className="fill-foreground">Depression.</text>
        <text x="824" y="836" fontSize="3.8" className="fill-foreground">Sedation, ↑ serum</text>
        <text x="824" y="847" fontSize="3.8" className="fill-foreground">cholesterol, ↑ appetite.</text>

        <rect x="824" y="864" width="214" height="76" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="931" y="882" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">THE MIRROR OF FORK 1</text>
        <text x="931" y="896" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">same receptor, opposite direction:</text>
        <text x="931" y="906" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">the agonists PRESS the α2 brake;</text>
        <text x="931" y="916" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">mirtazapine BLOCKS it</text>
        <text x="931" y="930" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">antidepressant lane of the α-blocker table</text>

        {/* inhibit arrows from the bands to the α targets */}
        <path d="M 277 744 V 730" fill="none" className="stroke-emergency" strokeWidth="1.4" />
        <line x1="267" y1="730" x2="287" y2="730" className="stroke-emergency" strokeWidth="2.2" />
        <path d="M 600 744 V 730" fill="none" className="stroke-emergency" strokeWidth="1.4" />
        <line x1="590" y1="730" x2="610" y2="730" className="stroke-emergency" strokeWidth="2.2" />
        <path d="M 931 744 V 730" fill="none" className="stroke-emergency" strokeWidth="1.4" />
        <line x1="921" y1="730" x2="941" y2="730" className="stroke-emergency" strokeWidth="2.2" />

        <text x="52" y="1098" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Band layout note: the source prints the α-blocker table as three shaded band rows; the nonselective ADVERSE EFFECTS cell prints</text>
        <text x="52" y="1108" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ONCE — 'Orthostatic hypotension, reflex tachycardia.' — vertically spanning both drug rows (VLM-confirmed on the page render).</text>
      </g>

      {/* ===== ZONE C — THE TWO-DIRECTION RULE + THE FOUR RULES ===== */}
      <g>
        <rect x="36" y="1144" width="1030" height="76" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1166" fontSize="5" fontWeight="800" className="fill-foreground">ONE RECEPTOR FAMILY, TWO DIRECTIONS — AGONIST AT α2 = the pressed brake (sympatholytic) · BLOCKER AT α = the open gate (vasodilation)</text>
        <rect x="52" y="1176" width="238" height="32" rx="6" className="fill-card stroke-border" />
        <text x="171" y="1188" textAnchor="middle" fontSize="3.7" fontWeight="800" className="fill-foreground">FIRST DOSE floors (-osin)</text>
        <text x="171" y="1200" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">1st-dose orthostatic hypotension</text>
        <rect x="298" y="1176" width="238" height="32" rx="6" className="fill-card stroke-border" />
        <text x="417" y="1188" textAnchor="middle" fontSize="3.7" fontWeight="800" className="fill-foreground">ABRUPT CESSATION rebounds</text>
        <text x="417" y="1200" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">rebound hypertension (clonidine)</text>
        <rect x="544" y="1176" width="238" height="32" rx="6" className="fill-card stroke-border" />
        <text x="663" y="1188" textAnchor="middle" fontSize="3.7" fontWeight="800" className="fill-foreground">PREGNANCY → methyldopa</text>
        <text x="663" y="1200" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">+ Direct Coombs ⊕, lupus, ↑ prolactin</text>
        <rect x="790" y="1176" width="260" height="32" rx="6" className="fill-card stroke-border" />
        <text x="920" y="1188" textAnchor="middle" fontSize="3.7" fontWeight="800" className="fill-foreground">PHEO PREOP → the irreversible one</text>
        <text x="920" y="1200" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">phenoxybenzamine, before surgery</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1232" width="1054" height="42" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1249" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 265 / book 243 (Pharmacology — Autonomic Drugs: Sympatholytics (α2-agonists); α-blockers)</text>
        <text x="42" y="1262" fontSize="4" className="fill-muted-foreground">Census: pdfimages = ZERO rasters; ONE VLM pass (glm-4.6v, 120 DPI — staging-ph18/vlm-census.txt) confirms the two tables, the shared nonselective adverse cell, and no margin mnemonics (the red p in</text>
        <text x="42" y="1272" fontSize="4" className="fill-muted-foreground">"PTSD (prazosin)" is First Aid's own, carried attributed). FULL page — no shared-page split. The two printed tables are carried verbatim in the note's table blocks. This diagram is an ORIGINAL KYP design.</text>
      </g>
    </svg>
  );
}
