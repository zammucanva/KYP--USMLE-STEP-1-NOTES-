/* Pharmacology — PH-batch 20: Phosphodiesterase inhibitors (book 245,
 * pdf 267 — FULL page). Census (pdfimages): ZERO raster images; the
 * page's single visual asset is the color-coded PDE inhibitor table
 * (light-blue TYPE OF INHIBITOR column, drug names printed in red with
 * the -fil endings highlighted, red in-cell mnemonic text) — VLM-read
 * at 120dpi (staging-ph20/vlm-census.txt), no margin mnemonics. This is
 * an ORIGINAL KYP ADAPTATION of that table: the two second-messenger
 * lanes (cAMP from adenylyl cyclase, cGMP from NO → guanylyl cyclase —
 * the lanes introduced in G-Protein Second Messengers) both cut by the
 * shared PDE brake glyph; the five family cards in PRINTED row order
 * (Nonspecific/Theophylline → PDE-5/the -fil family → PDE-4/
 * roflumilast → PDE-3/milrinone → “Platelet inhibitors”/cilostazolᵃ +
 * dipyridamoleᵇ — PDE-4 prints before PDE-3), each with its drug chip,
 * lane tag, mechanism arrow (which cyclic nucleotide accumulates in
 * which tissue), clinical uses, and adverse effects, plus the two
 * printed footnotes; and the exam centerpiece — the sildenafil NO/cGMP
 * corpus-cavernosum panel with the NITRATES CONTRAINDICATED warning
 * band and the PDE-6 (six) retina chip. Printed-text quirks carried:
 * “↑ ionotropy” (the source's own spelling) and “cyanopia”; the -fil
 * drug chips echo the source's red drug names via the emergency token.
 * Nothing is reproduced from the book; purely presentational (no props,
 * no hooks, no external images). */

export function PdeInhibitorMap() {
  const w = 1102;
  const h = 1088;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Phosphodiesterase Inhibitors — the cAMP and cGMP second-messenger lanes cut by the shared PDE brake, the five printed rows in order (nonspecific theophylline, PDE-5 sildenafil family, PDE-4 roflumilast, PDE-3 milrinone, platelet inhibitors cilostazol and dipyridamole) each with its mechanism arrow, clinical uses, and adverse effects, and the sildenafil NO-cGMP corpus-cavernosum panel with the nitrates-contraindication warning band (original KYP diagram of book 245)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Phosphodiesterase inhibitors — PDE is the brake on cAMP and cGMP (original KYP diagram)</text>
        <rect x="792" y="25" width="270" height="18" className="fill-brand-soft" />
        <text x="927" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">one enzyme family · five tissue levers</text>
      </g>

      {/* ===== ZONE A — THE TWO SECOND-MESSENGER LANES ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="242" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TWO SECOND-MESSENGER LANES — and the one enzyme family that terminates both (book 245, the printed intro)</text>

        {/* the printed intro sentence */}
        <rect x="52" y="100" width="1000" height="24" rx="6" className="fill-card stroke-border" />
        <text x="60" y="115.5" fontSize="4" className="fill-foreground">“Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying</text>
        <text x="60" y="122.5" fontSize="4" className="fill-foreground">specificity for PDE isoforms and thus have different clinical uses.”</text>

        {/* cAMP lane */}
        <rect x="52" y="132" width="1000" height="68" rx="10" className="fill-brand-soft/30 stroke-brand" />
        <text x="64" y="148" fontSize="4.6" fontWeight="800" className="fill-brand">THE cAMP LANE</text>
        <rect x="64" y="156" width="320" height="34" rx="6" className="fill-card stroke-border" />
        <text x="72" y="169" fontSize="4" fontWeight="700" className="fill-foreground">Gs-coupled receptors → ADENYLYL CYCLASE</text>
        <text x="72" y="179" fontSize="3.6" className="fill-muted-foreground">the G-protein second-messenger lane (β stimulation, glucagon)</text>
        <line x1="384" y1="173" x2="430" y2="173" className="stroke-foreground" strokeWidth="1.3" />
        <path d="M 426 169 L 436 173 L 426 177 Z" className="fill-foreground" />
        <text x="408" y="166" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">makes</text>
        <rect x="438" y="156" width="86" height="34" rx="8" className="fill-brand stroke-brand" />
        <text x="481" y="177" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-card">cAMP</text>
        <line x1="524" y1="173" x2="614" y2="173" className="stroke-foreground" strokeWidth="1.3" />
        <path d="M 610 169 L 620 173 L 610 177 Z" className="fill-foreground" />
        <rect x="622" y="156" width="414" height="34" rx="6" className="fill-card stroke-border" />
        <text x="630" y="169" fontSize="4" fontWeight="700" className="fill-foreground">TISSUE RESPONSE — bronchodilation · cardiomyocyte ↑ Ca2+ influx (inotropy) ·</text>
        <text x="630" y="179" fontSize="4" fontWeight="700" className="fill-foreground">MLCK inhibition → vasodilation · ↓ platelet aggregation</text>

        {/* cGMP lane */}
        <rect x="52" y="206" width="1000" height="68" rx="10" className="fill-warning-soft/30 stroke-warning" />
        <text x="64" y="222" fontSize="4.6" fontWeight="800" className="fill-warning">THE cGMP LANE</text>
        <rect x="64" y="230" width="320" height="34" rx="6" className="fill-card stroke-border" />
        <text x="72" y="243" fontSize="4" fontWeight="700" className="fill-foreground">NO (nitric oxide — nitrates step on the gas)</text>
        <text x="72" y="253" fontSize="3.6" className="fill-muted-foreground">→ GUANYLYL CYCLASE — the NO lane</text>
        <line x1="384" y1="247" x2="430" y2="247" className="stroke-foreground" strokeWidth="1.3" />
        <path d="M 426 243 L 436 247 L 426 251 Z" className="fill-foreground" />
        <text x="402" y="240" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">makes</text>
        <rect x="438" y="230" width="86" height="34" rx="8" className="fill-warning stroke-warning" />
        <text x="481" y="251" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-card">cGMP</text>
        <line x1="524" y1="247" x2="614" y2="247" className="stroke-foreground" strokeWidth="1.3" />
        <path d="M 610 243 L 620 247 L 610 251 Z" className="fill-foreground" />
        <rect x="622" y="230" width="414" height="34" rx="6" className="fill-card stroke-border" />
        <text x="630" y="243" fontSize="4" fontWeight="700" className="fill-foreground">↑ SMOOTH MUSCLE RELAXATION by enhancing NO activity —</text>
        <text x="630" y="253" fontSize="4" fontWeight="700" className="fill-foreground">pulmonary vasodilation · corpus cavernosum fills the penis</text>

        {/* the shared PDE brake — a T-bar column cutting both lanes between the nucleotide and the response */}
        <line x1="566" y1="150" x2="566" y2="275" className="stroke-emergency" strokeWidth="2" />
        <line x1="560" y1="164" x2="560" y2="182" className="stroke-emergency" strokeWidth="3" />
        <line x1="572" y1="164" x2="572" y2="182" className="stroke-emergency" strokeWidth="3" />
        <line x1="560" y1="238" x2="560" y2="256" className="stroke-emergency" strokeWidth="3" />
        <line x1="572" y1="238" x2="572" y2="256" className="stroke-emergency" strokeWidth="3" />
        <text x="566" y="296" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">PDE — catalyzes the hydrolysis of cAMP and/or cGMP (THE BRAKE)</text>
        <text x="566" y="306" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">inhibit it and the nucleotide the tissue is already making accumulates — the brake is released</text>
      </g>

      {/* ===== ZONE B — THE FIVE PRINTED ROWS ===== */}
      <g>
        <rect x="36" y="322" width="1030" height="466" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="344" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FIVE PRINTED ROWS, IN PRINTED ORDER — each drug releases the brake in ONE lane of ONE tissue</text>
        <text x="52" y="356" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">printed order: Nonspecific → PDE-5 → PDE-4 → PDE-3 → “Platelet inhibitors” (PDE-4 prints before PDE-3 on this page)</text>

        {/* card 1 — NONSPECIFIC / theophylline */}
        <rect x="52" y="364" width="324" height="200" rx="10" className="fill-card stroke-border" />
        <rect x="64" y="374" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="99" y="385.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 1</text>
        <text x="142" y="385.5" fontSize="4.6" fontWeight="800" className="fill-foreground">NONSPECIFIC PDE inhibitor</text>
        <rect x="64" y="394" width="150" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="139" y="406.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Theophylline</text>
        <rect x="220" y="394" width="72" height="18" rx="5" className="fill-brand-soft stroke-brand" />
        <text x="256" y="406.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">cAMP (all)</text>
        <text x="64" y="426" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">MECHANISM</text>
        <text x="64" y="436" fontSize="3.9" fontWeight="700" className="fill-foreground">↓ cAMP hydrolysis → ↑ cAMP → bronchial</text>
        <text x="64" y="446" fontSize="3.9" fontWeight="700" className="fill-foreground">smooth muscle relaxation → bronchodilation</text>
        <text x="64" y="464" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">CLINICAL USES</text>
        <text x="64" y="474" fontSize="3.9" fontWeight="700" className="fill-foreground">COPD/asthma (rarely used)</text>
        <text x="64" y="492" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ADVERSE EFFECTS — the nonspecific spill</text>
        <text x="64" y="502" fontSize="3.9" fontWeight="700" className="fill-foreground">Cardiotoxicity (eg, tachycardia, arrhythmia),</text>
        <text x="64" y="512" fontSize="3.9" fontWeight="700" className="fill-foreground">neurotoxicity (eg, seizures, headache),</text>
        <text x="64" y="522" fontSize="3.9" fontWeight="700" className="fill-foreground">abdominal pain — heart, brain, gut at once</text>
        <text x="64" y="550" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">PDE IS THE BRAKE — released everywhere</text>

        {/* card 2 — PDE-5 / the -fil family */}
        <rect x="388" y="364" width="324" height="200" rx="10" className="fill-card stroke-warning" />
        <rect x="400" y="374" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="435" y="385.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 2</text>
        <text x="478" y="385.5" fontSize="4.6" fontWeight="800" className="fill-foreground">PDE-5 inhibitors</text>
        <rect x="400" y="394" width="196" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="498" y="406.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Sildenafil · vardenafil · tadalafil · avanafil</text>
        <rect x="602" y="394" width="72" height="18" rx="5" className="fill-warning-soft stroke-warning" />
        <text x="638" y="406.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-warning">cGMP</text>
        <text x="400" y="426" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">MECHANISM</text>
        <text x="400" y="436" fontSize="3.9" fontWeight="700" className="fill-foreground">↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth</text>
        <text x="400" y="446" fontSize="3.9" fontWeight="700" className="fill-foreground">muscle relaxation by enhancing NO activity</text>
        <text x="400" y="456" fontSize="3.9" fontWeight="700" className="fill-foreground">→ pulmonary vasodilation and ↑ blood flow in</text>
        <text x="400" y="466" fontSize="3.9" fontWeight="700" className="fill-foreground">corpus cavernosum fills the penis</text>
        <text x="400" y="484" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">CLINICAL USES</text>
        <text x="400" y="494" fontSize="3.9" fontWeight="700" className="fill-foreground">Erectile dysfunction · pulmonary hypertension</text>
        <text x="400" y="504" fontSize="3.9" fontWeight="700" className="fill-foreground">· BPH (tadalafil only)</text>
        <text x="400" y="522" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ADVERSE EFFECTS</text>
        <text x="400" y="532" fontSize="3.9" fontWeight="700" className="fill-foreground">Facial flushing, headache, dyspepsia, hypotension</text>
        <text x="400" y="542" fontSize="3.9" fontWeight="700" className="fill-foreground">in patients taking nitrates; “hot and sweaty,” then</text>
        <text x="400" y="552" fontSize="3.9" fontWeight="700" className="fill-foreground">headache, heartburn, hypotension — see the warning band</text>

        {/* card 3 — PDE-4 / roflumilast */}
        <rect x="724" y="364" width="326" height="200" rx="10" className="fill-card stroke-border" />
        <rect x="736" y="374" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="771" y="385.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 3</text>
        <text x="814" y="385.5" fontSize="4.6" fontWeight="800" className="fill-foreground">PDE-4 inhibitor</text>
        <rect x="736" y="394" width="110" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="791" y="406.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Roflumilast</text>
        <rect x="852" y="394" width="72" height="18" rx="5" className="fill-brand-soft stroke-brand" />
        <text x="888" y="406.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">cAMP</text>
        <text x="736" y="426" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">MECHANISM</text>
        <text x="736" y="436" fontSize="3.9" fontWeight="700" className="fill-foreground">↑ cAMP in neutrophils, granulocytes, and</text>
        <text x="736" y="446" fontSize="3.9" fontWeight="700" className="fill-foreground">bronchial epithelium — the inflamed airway</text>
        <text x="736" y="464" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">CLINICAL USES</text>
        <text x="736" y="474" fontSize="3.9" fontWeight="700" className="fill-foreground">Severe COPD</text>
        <text x="736" y="492" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ADVERSE EFFECTS</text>
        <text x="736" y="502" fontSize="3.9" fontWeight="700" className="fill-foreground">Abdominal pain, weight loss, depression,</text>
        <text x="736" y="512" fontSize="3.9" fontWeight="700" className="fill-foreground">anxiety, insomnia — the mood/gut cluster</text>
        <text x="736" y="550" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">FOUR CALMS THE INFLAMED AIRWAY</text>

        {/* card 4 — PDE-3 / milrinone */}
        <rect x="52" y="576" width="324" height="200" rx="10" className="fill-card stroke-border" />
        <rect x="64" y="586" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="99" y="597.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 4</text>
        <text x="142" y="597.5" fontSize="4.6" fontWeight="800" className="fill-foreground">PDE-3 inhibitor</text>
        <rect x="64" y="606" width="110" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="119" y="618.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Milrinone</text>
        <rect x="180" y="606" width="72" height="18" rx="5" className="fill-brand-soft stroke-brand" />
        <text x="216" y="618.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">cAMP</text>
        <text x="64" y="638" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">MECHANISM — two tissues, one nucleotide</text>
        <text x="64" y="648" fontSize="3.9" fontWeight="700" className="fill-foreground">Cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx →</text>
        <text x="64" y="658" fontSize="3.9" fontWeight="700" className="fill-foreground">↑ ionotropy and chronotropy (printed spelling)</text>
        <text x="64" y="668" fontSize="3.9" fontWeight="700" className="fill-foreground">Vascular smooth muscle: ↑ cAMP → MLCK</text>
        <text x="64" y="678" fontSize="3.9" fontWeight="700" className="fill-foreground">inhibition → vasodilation → ↓ preload/afterload</text>
        <text x="64" y="696" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">CLINICAL USES</text>
        <text x="64" y="706" fontSize="3.9" fontWeight="700" className="fill-foreground">Acute decompensated HF with cardiogenic</text>
        <text x="64" y="716" fontSize="3.9" fontWeight="700" className="fill-foreground">shock (inotrope)</text>
        <text x="64" y="734" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ADVERSE EFFECTS</text>
        <text x="64" y="744" fontSize="3.9" fontWeight="700" className="fill-foreground">Tachycardia, ventricular arrhythmias, hypotension</text>
        <text x="64" y="764" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">THREE PUMPS — AND UNLOADS</text>

        {/* card 5 — "PLATELET INHIBITORS" / cilostazol + dipyridamole + the two footnotes */}
        <rect x="388" y="576" width="662" height="200" rx="10" className="fill-card stroke-border" />
        <rect x="400" y="586" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="435" y="597.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 5</text>
        <text x="478" y="597.5" fontSize="4.6" fontWeight="800" className="fill-foreground">“Platelet inhibitors” — filed by INDICATION, not chemistry</text>
        <rect x="400" y="606" width="130" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="465" y="618.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Cilostazolᵃ</text>
        <rect x="536" y="606" width="150" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="611" y="618.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Dipyridamoleᵇ</text>
        <rect x="692" y="606" width="96" height="18" rx="5" className="fill-brand-soft stroke-brand" />
        <text x="740" y="618.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">cAMP in platelets</text>
        <text x="400" y="638" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">MECHANISM</text>
        <text x="400" y="648" fontSize="3.9" fontWeight="700" className="fill-foreground">In platelets: ↑ cAMP → inhibition of platelet aggregation</text>
        <text x="400" y="666" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">CLINICAL USES</text>
        <text x="400" y="676" fontSize="3.9" fontWeight="700" className="fill-foreground">Intermittent claudication · stroke or TIA prevention (with aspirin) · cardiac stress testing</text>
        <text x="400" y="686" fontSize="3.9" fontWeight="700" className="fill-foreground">(dipyridamole only, due to coronary vasodilation) · prevention of coronary stent restenosis</text>
        <text x="400" y="704" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ADVERSE EFFECTS</text>
        <text x="400" y="714" fontSize="3.9" fontWeight="700" className="fill-foreground">Nausea, headache, facial flushing, hypotension, abdominal pain</text>
        <rect x="400" y="724" width="638" height="44" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="408" y="737" fontSize="3.6" fontWeight="700" className="fill-foreground">ᵃ “Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.”</text>
        <text x="408" y="747" fontSize="3.6" fontWeight="700" className="fill-foreground">ᵇ “Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake</text>
        <text x="408" y="757" fontSize="3.6" fontWeight="700" className="fill-foreground">by platelets → ↑ extracellular adenosine → ↑ vasodilation.” — the two printed footnotes, verbatim</text>
      </g>

      {/* ===== ZONE C — THE EXAM CENTERPIECE ===== */}
      <g>
        <rect x="36" y="798" width="1030" height="216" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="820" fontSize="5.4" fontWeight="800" className="fill-foreground">THE EXAM CENTERPIECE — the sildenafil NO/cGMP panel and the nitrates contraindication</text>

        {/* left: the corpus cavernosum cascade */}
        <rect x="52" y="830" width="560" height="172" rx="10" className="fill-card stroke-warning" />
        <text x="64" y="848" fontSize="4.4" fontWeight="800" className="fill-warning">THE NO → cGMP AXIS — corpus cavernosum + pulmonary vasculature</text>
        <rect x="64" y="858" width="120" height="30" rx="6" className="fill-warning-soft/40 stroke-warning" />
        <text x="124" y="876" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">NO</text>
        <line x1="184" y1="873" x2="212" y2="873" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 208 869 L 218 873 L 208 877 Z" className="fill-foreground" />
        <rect x="220" y="858" width="140" height="30" rx="6" className="fill-card stroke-border" />
        <text x="290" y="870" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">GUANYLYL CYCLASE</text>
        <text x="290" y="880" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">synthesizes cGMP</text>
        <line x1="360" y1="873" x2="388" y2="873" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 384 869 L 394 873 L 384 877 Z" className="fill-foreground" />
        <rect x="396" y="858" width="86" height="30" rx="8" className="fill-warning stroke-warning" />
        <text x="439" y="877" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-card">↑ cGMP</text>
        <line x1="482" y1="873" x2="510" y2="873" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 506 869 L 516 873 L 506 877 Z" className="fill-foreground" />
        <rect x="518" y="858" width="82" height="30" rx="6" className="fill-card stroke-border" />
        <text x="559" y="870" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">SMOOTH MUSCLE</text>
        <text x="559" y="880" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">RELAXATION</text>
        {/* the PDE-5 brake under the cGMP chip, blocked by the -fil drug */}
        <line x1="439" y1="888" x2="439" y2="918" className="stroke-emergency" strokeWidth="2" />
        <line x1="427" y1="918" x2="451" y2="918" className="stroke-emergency" strokeWidth="2.4" />
        <text x="420" y="912" textAnchor="end" fontSize="3.8" fontWeight="800" className="fill-emergency">PDE-5 (the brake)</text>
        <rect x="252" y="940" width="374" height="30" rx="6" className="fill-warning-soft/40 stroke-warning" />
        <text x="439" y="952" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">sildenafil · vardenafil · tadalafil · avanafil — ↓ hydrolysis of cGMP</text>
        <text x="439" y="962" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">→ pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis</text>
        <line x1="439" y1="940" x2="439" y2="924" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 435 928 L 439 918 L 443 928 Z" className="fill-foreground" />
        <rect x="64" y="972" width="236" height="24" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="182" y="987" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">SILDENAFIL ONLY — PDE-6 (six) in retina</text>
        <text x="64" y="948" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the only -fil that also brakes</text>
        <text x="64" y="958" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the retina isoform → cyanopia</text>
        <text x="64" y="968" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(blue-tinted vision) — SIX ≈ SEES</text>

        {/* right: the nitrates warning band */}
        <rect x="624" y="830" width="426" height="172" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <rect x="638" y="842" width="398" height="24" rx="6" className="fill-emergency" />
        <text x="837" y="858" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-card">NITRATES + PDE-5 INHIBITORS — CONTRAINDICATED</text>
        <text x="638" y="882" fontSize="4" fontWeight="700" className="fill-foreground">Nitrates step on the GAS: ↑ NO → guanylyl cyclase → more cGMP synthesized.</text>
        <text x="638" y="893" fontSize="4" fontWeight="700" className="fill-foreground">The -fil family releases the BRAKE: ↓ hydrolysis of cGMP → less cGMP destroyed.</text>
        <text x="638" y="910" fontSize="4.2" fontWeight="800" className="fill-foreground">Gas + no brake on ONE second messenger → ↑↑ cGMP → ↑↑ smooth muscle</text>
        <text x="638" y="921" fontSize="4.2" fontWeight="800" className="fill-foreground">relaxation → profound hypotension (printed: “hypotension in patients taking nitrates”)</text>
        <text x="638" y="942" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">CLASS-WIDE — sildenafil, vardenafil, tadalafil, avanafil: the contraindication follows</text>
        <text x="638" y="952" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the mechanism, not the indication (tadalafil's BPH use grants no exemption)</text>
        <text x="638" y="976" fontSize="3.8" fontWeight="800" className="fill-emergency">NITRATES STEP ON THE GAS, “FIL” RELEASES THE BRAKE</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1024" width="1054" height="54" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1042" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 267 / book 245 (Pharmacology — Autonomic Drugs: Phosphodiesterase inhibitors)</text>
        <text x="42" y="1054" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the page's single visual asset is the color-coded table itself (red drug names with the -fil endings, red in-cell mnemonics,</text>
        <text x="42" y="1064" fontSize="4" className="fill-muted-foreground">light-blue first column), VLM-read at 120dpi, no margin mnemonics. This diagram is an ORIGINAL KYP ADAPTATION — every label, mechanism arrow, use, and adverse</text>
        <text x="42" y="1074" fontSize="4" className="fill-muted-foreground">effect preserved; the table is also carried verbatim in the note's table block. Printed quirks carried: “ionotropy”, “cyanopia”. Printed order: PDE-4 before PDE-3.</text>
      </g>
    </svg>
  );
}
