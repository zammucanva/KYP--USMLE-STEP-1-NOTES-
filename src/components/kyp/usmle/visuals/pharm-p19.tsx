/* Pharmacology — PH-batch 19: β-blockers (FULL pdf page 266 / book 244).
 * Original KYP adaptation of the page's ONE large printed table (the
 * APPLICATION / ACTIONS / NOTES-EXAMPLES grid). Census (pdfimages):
 * ZERO raster images — vector/text table page only; VLM census
 * (glm-4.6v, 120-dpi render, staging-ph19/vlm-census.txt) confirms no
 * figures, photographs, margin notes, or footnotes; the page's six
 * mnemonics print in red INSIDE the NOTES-EXAMPLES cells (β-blockers
 * curb mortality; no portal circulation; A to M / N to Z; modified
 * suffixes; NebivOlol increases NO) and are rendered here as quoted
 * strings, attributed to First Aid. Drawn with original KYP glyphs:
 * ZONE A0 the printed drug list strip — the eleven alphabetical drugs
 * sorted into First Aid's alphabet halves with the three 'mostly'
 * exceptions flagged; ZONE A the selectivity directory — four stacked
 * lanes (β1-selective A-to-M; nonselective β1=β2 N-to-Z with the
 * printed "NonZelective" capital-Z quirk flagged; the α1+β
 * modified-suffix duals; and nebivolol's β1-block + β3-stimulation
 * turbo ending in NO) with the drug chips and their printed
 * application anchors; ZONE B the ten printed docks in row order with
 * action gists and named anchors; ZONE C the classic-exam band (the
 * airway rule, the cocaine controversy, the hidden tolls) plus the
 * heart-failure mortality trio. Nothing is reproduced from the book;
 * purely presentational (no props, no hooks, no external images). */

export function BetaBlockerMap() {
  const w = 1102;
  const h = 1256;
  const docks1 = [
    { t: ["1 · Angina pectoris"], a: ["↓ heart rate and contractility", "→ ↓ O2 consumption"], n: ["class row — no named drug"] },
    { t: ["2 · Glaucoma"], a: ["↓ production of aqueous humor"], n: ["Timolol"] },
    { t: ["3 · Heart failure"], a: ["blockade of neurohormonal stress →", "prevention of deleterious cardiac", "remodeling → ↓ mortality"], n: ["Bisoprolol, carvedilol, metoprolol —", "'β-blockers curb mortality'"] },
    { t: ["4 · Hypertension"], a: ["↓ cardiac output + ↓ renin secretion", "(β1-receptor blockade on JG cells)"], n: ["class row — no named drug"] },
    { t: ["5 · Hyperthyroidism/", "thyroid storm"], a: ["symptom control", "(↓ heart rate, ↓ tremor)"], n: ["Propranolol"] },
  ];
  const docks2 = [
    { t: ["6 · Hypertrophic", "cardiomyopathy"], a: ["↓ heart rate → ↑ filling time,", "relieving obstruction"], n: ["class row — no named drug"] },
    { t: ["7 · Migraine"], a: ["↓ nitric oxide production"], n: ["'Effective for prevention' —", "no drug named"] },
    { t: ["8 · Myocardial", "infarction"], a: ["↓ O2 demand (short-term),", "↓ mortality (long-term)"], n: ["class row — no named drug"] },
    { t: ["9 · Supraventricular", "tachycardia (eg, AF)"], a: ["↓ AV conduction velocity", "(class II antiarrhythmic)"], n: ["Metoprolol, esmolol"] },
    { t: ["10 · Variceal bleeding"], a: ["↓ hepatic venous pressure gradient", "and portal hypertension", "(prophylactic use)"], n: ["Nadolol, propranolol, carvedilol —", "'no portal circulation'"] },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="β-Blockers — the directory: the eleven printed drugs sorted into First Aid's alphabet halves, four selectivity lanes (β1-selective A-to-M; nonselective β1=β2 N-to-Z; α1+β duals carvedilol/labetalol; nebivolol β1 block + β3 stimulation → NO synthase → ↓ SVR) with drug chips and application anchors, the ten printed docks (angina, glaucoma, heart failure with the mortality trio, hypertension, thyroid storm, hypertrophic cardiomyopathy, migraine, MI, SVT, variceal bleeding), and the classic-exam band (asthma/COPD airway rule, the cocaine unopposed-α controversy, masked hypoglycemia) — an original KYP diagram of book 244." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">β-Blockers — the directory: three lanes and a turbo (original KYP diagram)</text>
        <rect x="800" y="25" width="262" height="18" className="fill-brand-soft" />
        <text x="931" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">selectivity lanes × ten docks</text>
      </g>

      {/* ===== ZONE A0 — THE PRINTED DRUG LIST ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="88" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="90" fontSize="5" fontWeight="800" className="fill-foreground">THE PRINTED DRUG LIST — eleven drugs, alphabetical: 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.'</text>
        <rect x="52" y="100" width="466" height="26" rx="5" className="fill-brand-soft/40 stroke-brand" />
        <text x="64" y="117" fontSize="3.8" fontWeight="800" className="fill-brand">1st HALF OF ALPHABET → β1 ('mostly'): atenolol · betaxolol · bisoprolol · esmolol · metoprolol</text>
        <rect x="530" y="100" width="466" height="26" rx="5" className="fill-warning-soft/40 stroke-warning" />
        <text x="542" y="117" fontSize="3.8" fontWeight="800" className="fill-warning">2nd HALF → β2 ('mostly'): nadolol · propranolol · timolol</text>
        <text x="52" y="144" fontSize="3.8" fontWeight="700" className="fill-foreground">'MOSTLY' because three drugs break the halves: carvedilol (C) and labetalol (L) — first-half letters, but α1+β duals with modified suffixes;</text>
        <text x="52" y="154" fontSize="3.8" fontWeight="700" className="fill-foreground">nebivolol (N) — a second-half letter, but cardiac-selective β1 blockade + β3 stimulation. The alphabet rule sorts the plain -olols only.</text>
      </g>

      {/* ===== ZONE A — THE SELECTIVITY DIRECTORY ===== */}
      <g>
        <rect x="36" y="166" width="1030" height="492" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="188" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SELECTIVITY DIRECTORY — four lanes (book 244, the printed SELECTIVITY rows); the lane decides which receptors are blocked and which organs pay</text>

        {/* ---------- LANE 1: β1-SELECTIVE ---------- */}
        <rect x="52" y="198" width="1002" height="106" rx="10" className="fill-card stroke-brand" />
        <rect x="64" y="210" width="186" height="24" rx="5" className="fill-brand" />
        <text x="157" y="225.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">β1-SELECTIVE (β1 &gt; β2)</text>
        <text x="64" y="248" fontSize="4.2" fontWeight="800" className="fill-foreground">The one cardiac lock — heart, JG cells,</text>
        <text x="64" y="260" fontSize="4.2" fontWeight="800" className="fill-foreground">AV node; bronchi 'mostly' spared</text>
        <text x="64" y="282" fontSize="3.6" fontWeight="800" className="fill-brand">First Aid's marker: 'from A to M</text>
        <text x="64" y="292" fontSize="3.6" fontWeight="800" className="fill-brand">(β1 with 1st half of alphabet)'</text>
        {["atenolol", "betaxolol", "bisoprolol", "esmolol", "metoprolol"].map((d, i) => (
          <g key={`l1-${d}`}>
            <rect x={258 + i * 96} y="214" width="90" height="26" rx="6" className="fill-brand-soft/40 stroke-brand" />
            <text x={303 + i * 96} y="230" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">{d}</text>
          </g>
        ))}
        <text x="258" y="262" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">five drugs, first letters A→M — the COPD-safer lane</text>
        <text x="258" y="274" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">when β2 blockade must be avoided</text>
        <rect x="742" y="208" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="225" fontSize="3.8" fontWeight="800" className="fill-foreground">HEART-FAILURE TRIO DOCK — bisoprolol + metoprolol</text>
        <rect x="742" y="238" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="255" fontSize="3.8" fontWeight="800" className="fill-foreground">SVT DOCK — 'Metoprolol, esmolol' (↓ AV conduction)</text>
        <rect x="742" y="268" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="285" fontSize="3.8" fontWeight="800" className="fill-foreground">AE FLAG — dyslipidemia (metoprolol) — the only named-drug AE</text>

        {/* ---------- LANE 2: NONSELECTIVE ---------- */}
        <rect x="52" y="316" width="1002" height="106" rx="10" className="fill-card stroke-warning" />
        <rect x="64" y="328" width="186" height="24" rx="5" className="fill-warning" />
        <text x="157" y="343.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">NONSELECTIVE (β1 = β2)</text>
        <text x="64" y="366" fontSize="4.2" fontWeight="800" className="fill-foreground">Both β locks — the β1 core plus the</text>
        <text x="64" y="378" fontSize="4.2" fontWeight="800" className="fill-foreground">β2 tax: asthma/COPD exacerbations,</text>
        <text x="64" y="390" fontSize="4.2" fontWeight="800" className="fill-foreground">masked hypoglycemia</text>
        <text x="64" y="410" fontSize="3.6" fontWeight="800" className="fill-warning">'NonZelective antagonists mostly go from N to Z</text>
        <text x="64" y="420" fontSize="3.6" fontWeight="800" className="fill-warning">(β2 with 2nd half of alphabet)' — printed capital-Z quirk</text>
        {["nadolol", "propranolol", "timolol"].map((d, i) => (
          <g key={`l2-${d}`}>
            <rect x={258 + i * 96} y="332" width="90" height="26" rx="6" className="fill-warning-soft/40 stroke-warning" />
            <text x={303 + i * 96} y="348" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">{d}</text>
          </g>
        ))}
        <text x="258" y="380" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">three drugs, first letters N→Z — and the alphabet half</text>
        <text x="258" y="392" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">names the receptor number (1st half → β1, 2nd → β2)</text>
        <rect x="742" y="326" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="343" fontSize="3.8" fontWeight="800" className="fill-foreground">GLAUCOMA DOCK — Timolol (↓ aqueous humor)</text>
        <rect x="742" y="356" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="373" fontSize="3.8" fontWeight="800" className="fill-foreground">THYROID-STORM DOCK — Propranolol (↓ HR, ↓ tremor)</text>
        <rect x="742" y="386" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="403" fontSize="3.8" fontWeight="800" className="fill-foreground">VARICES DOCK — nadolol + propranolol (prophylaxis)</text>

        {/* ---------- LANE 3: α1 + β DUAL ---------- */}
        <rect x="52" y="434" width="1002" height="106" rx="10" className="fill-card stroke-neural" />
        <rect x="64" y="446" width="186" height="24" rx="5" className="fill-neural" />
        <text x="157" y="461.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">α1-SELECTIVE + β DUAL</text>
        <text x="64" y="484" fontSize="4.2" fontWeight="800" className="fill-foreground">Three locks — β1 + β2 + α1 vascular</text>
        <text x="64" y="496" fontSize="4.2" fontWeight="800" className="fill-foreground">blockade: vasodilation stacked on the</text>
        <text x="64" y="508" fontSize="4.2" fontWeight="800" className="fill-foreground">β core (still pays the β2 tax)</text>
        <text x="64" y="528" fontSize="3.6" fontWeight="800" className="fill-neural">'modified suffixes (instead of "-olol")' —</text>
        <text x="64" y="538" fontSize="3.6" fontWeight="800" className="fill-neural">the printed rule that flags this lane</text>
        {["carvedilol", "labetalol"].map((d, i) => (
          <g key={`l3-${d}`}>
            <rect x={258 + i * 96} y="450" width="90" height="26" rx="6" className="fill-secondary/40 stroke-neural" />
            <text x={303 + i * 96} y="466" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">{d}</text>
          </g>
        ))}
        <text x="258" y="498" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">-dilol and -alol, not plain -olol — expect</text>
        <text x="258" y="510" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">THREE blocked receptors, not two</text>
        <rect x="742" y="444" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="461" fontSize="3.8" fontWeight="800" className="fill-foreground">HEART-FAILURE TRIO DOCK — carvedilol</text>
        <rect x="742" y="474" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="491" fontSize="3.8" fontWeight="800" className="fill-foreground">VARICES DOCK — carvedilol ('no portal circulation')</text>
        <rect x="742" y="504" width="300" height="26" rx="5" className="fill-card stroke-border" />
        <text x="752" y="521" fontSize="3.8" fontWeight="800" className="fill-foreground">α1 rule — see a modified suffix, add α1</text>

        {/* ---------- LANE 4: NEBIVOLOL (the turbo) ---------- */}
        <rect x="52" y="552" width="1002" height="94" rx="10" className="fill-card stroke-emergency" />
        <rect x="64" y="564" width="186" height="24" rx="5" className="fill-emergency" />
        <text x="157" y="579.5" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">NEBIVOLOL — the turbo</text>
        <text x="64" y="602" fontSize="4.2" fontWeight="800" className="fill-foreground">The one β-blocker that ENDS in NO:</text>
        <text x="64" y="614" fontSize="4.2" fontWeight="800" className="fill-foreground">β1 blockade (cardiac-selective) PLUS β3</text>
        <text x="64" y="626" fontSize="4.2" fontWeight="800" className="fill-foreground">stimulation — the only stimulated lock</text>
        <rect x="258" y="568" width="90" height="26" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="303" y="584" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">nebivolol</text>
        <line x1="356" y1="581" x2="392" y2="581" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 388 577 L 396 581 L 388 585 Z" className="fill-foreground" />
        <rect x="400" y="568" width="120" height="26" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="460" y="579" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">β3-receptors</text>
        <text x="460" y="589" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">stimulated, not blocked</text>
        <line x1="528" y1="581" x2="564" y2="581" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 560 577 L 568 581 L 560 585 Z" className="fill-foreground" />
        <rect x="572" y="568" width="150" height="26" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="647" y="579" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">NO synthase activated</text>
        <text x="647" y="589" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">in the vasculature</text>
        <line x1="730" y1="581" x2="760" y2="581" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 756 577 L 764 581 L 756 585 Z" className="fill-foreground" />
        <rect x="768" y="568" width="90" height="26" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="813" y="584" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">↓ SVR</text>
        <text x="880" y="577" fontSize="4.2" fontWeight="800" className="fill-emergency">'NebivOlol increases NO'</text>
        <text x="880" y="589" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(First Aid's capital-O flag)</text>
      </g>

      {/* ===== ZONE B — THE TEN DOCKS ===== */}
      <g>
        <rect x="36" y="666" width="1030" height="252" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="688" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TEN DOCKS — every printed APPLICATION row, in printed order, with its action gist and named anchors</text>
        {docks1.map((c, i) => (
          <g key={`d1-${i}`}>
            <rect x={52 + i * 200} y="700" width="192" height="98" rx="8" className="fill-card stroke-border" />
            {c.t.map((t, j) => (
              <text key={`d1t-${i}-${j}`} x={62 + i * 200} y={716 + j * 11} fontSize="4.2" fontWeight="800" className="fill-brand">{t}</text>
            ))}
            {c.a.map((t, j) => (
              <text key={`d1a-${i}-${j}`} x={62 + i * 200} y={716 + c.t.length * 11 + 5 + j * 11} fontSize="3.6" fontWeight="700" className="fill-foreground">{t}</text>
            ))}
            {c.n.map((t, j) => (
              <text key={`d1n-${i}-${j}`} x={62 + i * 200} y={716 + c.t.length * 11 + 5 + c.a.length * 11 + 6 + j * 10} fontSize="3.4" fontWeight="800" className="fill-muted-foreground">{t}</text>
            ))}
          </g>
        ))}
        {docks2.map((c, i) => (
          <g key={`d2-${i}`}>
            <rect x={52 + i * 200} y="806" width="192" height="98" rx="8" className="fill-card stroke-border" />
            {c.t.map((t, j) => (
              <text key={`d2t-${i}-${j}`} x={62 + i * 200} y={822 + j * 11} fontSize="4.2" fontWeight="800" className="fill-brand">{t}</text>
            ))}
            {c.a.map((t, j) => (
              <text key={`d2a-${i}-${j}`} x={62 + i * 200} y={822 + c.t.length * 11 + 5 + j * 11} fontSize="3.6" fontWeight="700" className="fill-foreground">{t}</text>
            ))}
            {c.n.map((t, j) => (
              <text key={`d2n-${i}-${j}`} x={62 + i * 200} y={822 + c.t.length * 11 + 5 + c.a.length * 11 + 6 + j * 10} fontSize="3.4" fontWeight="800" className="fill-muted-foreground">{t}</text>
            ))}
          </g>
        ))}
      </g>

      {/* ===== ZONE C — CLASSIC EXAM BAND ===== */}
      <g>
        <rect x="36" y="926" width="1030" height="228" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="948" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CLASSIC-EXAM BAND — the printed adverse-effect rules the exam reuses</text>

        {/* airway rule */}
        <rect x="52" y="962" width="324" height="128" rx="10" className="fill-card stroke-warning" />
        <text x="66" y="982" fontSize="4.6" fontWeight="800" className="fill-warning">THE AIRWAY RULE — 'asthma/COPD exacerbations'</text>
        <text x="66" y="1000" fontSize="4" fontWeight="700" className="fill-foreground">β2 blockade constricts reactive airways — the toll</text>
        <text x="66" y="1012" fontSize="4" fontWeight="700" className="fill-foreground">that decides LANES: when an asthmatic or COPD</text>
        <text x="66" y="1024" fontSize="4" fontWeight="700" className="fill-foreground">patient needs β-blockade, pick the β1-selective</text>
        <text x="66" y="1036" fontSize="4" fontWeight="700" className="fill-foreground">(A-to-M) agent — atenolol, betaxolol, bisoprolol,</text>
        <text x="66" y="1048" fontSize="4" fontWeight="700" className="fill-foreground">esmolol, metoprolol.</text>
        <text x="66" y="1072" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">Daily-albuterol + propranolol/timolol = the classic trap stem</text>

        {/* cocaine controversy */}
        <rect x="388" y="962" width="316" height="128" rx="10" className="fill-card stroke-neural" />
        <text x="402" y="982" fontSize="4.6" fontWeight="800" className="fill-neural">THE COCAINE CONTROVERSY (printed verbatim)</text>
        <text x="402" y="1000" fontSize="4" fontWeight="700" className="fill-foreground">'Use of β-blockers for acute cocaine-associated</text>
        <text x="402" y="1012" fontSize="4" fontWeight="700" className="fill-foreground">chest pain remains controversial due to</text>
        <text x="402" y="1024" fontSize="4" fontWeight="700" className="fill-foreground">unsubstantiated concern for unopposed</text>
        <text x="402" y="1036" fontSize="4" fontWeight="700" className="fill-foreground">α-adrenergic stimulation.'</text>
        <text x="402" y="1060" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">The worry: blocking β2 vasodilation leaves α1</text>
        <text x="402" y="1070" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">vasoconstriction unopposed — but note the printed</text>
        <text x="402" y="1080" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">wording: UNSUBSTANTIATED, CONTROVERSIAL.</text>

        {/* hidden tolls */}
        <rect x="716" y="962" width="334" height="128" rx="10" className="fill-card stroke-emergency" />
        <text x="730" y="982" fontSize="4.6" fontWeight="800" className="fill-emergency">THE HIDDEN TOLLS — the rest of the printed AE row</text>
        <text x="730" y="1000" fontSize="4" fontWeight="700" className="fill-foreground">HIDDEN SUGAR — masked hypoglycemia: the adrenergic</text>
        <text x="730" y="1012" fontSize="4" fontWeight="700" className="fill-foreground">alarm of a falling glucose (tremor, racing, sweating)</text>
        <text x="730" y="1024" fontSize="4" fontWeight="700" className="fill-foreground">is silenced — worst in the N-to-Z lane.</text>
        <text x="730" y="1042" fontSize="4" fontWeight="700" className="fill-foreground">PUMP — bradycardia, AV block, HF (titrate slowly in HF).</text>
        <text x="730" y="1056" fontSize="4" fontWeight="700" className="fill-foreground">HEAD — seizures, sleep alterations · SEX — erectile</text>
        <text x="730" y="1068" fontSize="4" fontWeight="700" className="fill-foreground">dysfunction · FATS — dyslipidemia (metoprolol).</text>

        {/* mortality trio strip */}
        <rect x="52" y="1102" width="998" height="40" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="66" y="1120" fontSize="4.4" fontWeight="800" className="fill-brand">THE MORTALITY TRIO — 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'</text>
        <text x="66" y="1134" fontSize="3.8" fontWeight="700" className="fill-foreground">The heart-failure dock's printed anchor — the trio deliberately spans lanes (two A-to-M agents + the α1+β dual carvedilol): the mortality benefit rides the β1 core, not any one lane.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1166" width="1054" height="76" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1184" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 266 / book 244 (Pharmacology — Autonomic Drugs: β-blockers)</text>
        <text x="42" y="1197" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — one vector/text table page; VLM census (glm-4.6v, 120 dpi) confirms no figures, margin notes, or footnotes; the six mnemonics</text>
        <text x="42" y="1208" fontSize="4" className="fill-muted-foreground">print in red inside the NOTES-EXAMPLES cells (First Aid's own, carried quoted: β-blockers curb mortality · no portal circulation · A to M / N to Z · modified suffixes ·</text>
        <text x="42" y="1219" fontSize="4" className="fill-muted-foreground">NebivOlol increases NO). The printed 'NonZelective' capital-Z quirk is preserved verbatim in lane 2. This directory is an ORIGINAL KYP adaptation of the printed table.</text>
      </g>
    </svg>
  );
}
