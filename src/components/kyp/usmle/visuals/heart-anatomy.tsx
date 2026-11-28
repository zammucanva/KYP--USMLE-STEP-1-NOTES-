/* Cardiovascular — CV4, topic heart-anatomy (pdf 309 / book 287 — the heart
 * anatomy page: position facts, pericardium, coronary tree, dominance).
 * Census (pdfimages): 2 raster objects (the anterior/posterior-view coronary
 * figures — described not reproduced); every printed text block carried
 * verbatim. Nothing is reproduced; purely presentational (no props, no
 * hooks, no external images). */

export const HeartAnatomyMap = () => {
  const w = 1102;
  const h = 1200;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Heart anatomy — the position facts (LA the most posterior part of the heart whose enlargement in mitral stenosis compresses the esophagus causing dysphagia and the left recurrent laryngeal nerve causing hoarseness, Ortner syndrome; RV the most anterior part and most commonly injured in trauma; LV about two-thirds and RV about one-third of the inferior diaphragmatic cardiac surface), the pericardium's three layers (fibrous, parietal, epicardium-visceral with the pericardial space between parietal pericardium and epicardium, phrenic-nerve innervation and referred pain to the neck, arms, or one or both shoulders often left), the coronary tree (LAD supplying the anterior two-thirds of the interventricular septum, anterolateral papillary muscle, and anterior LV surface and most commonly occluded; posterior descending artery supplying the posterior one-third of the septum, posterior two-thirds of ventricular walls, posteromedial papillary muscle, and the SA and AV nodes by dominance with infarcts causing nodal dysfunction, bradycardia or heart block; right acute marginal artery supplying RV), the dominance rules (right-dominant most common with PDA from RCA, left-dominant five to ten percent with PDA from LCX, codominant ten to twenty percent from both), coronary flow peaking in early diastole, and the coronary sinus running in the left AV groove draining into the RA — an original KYP diagram of book 287." className="min-w-[1060px]">
      <title>Heart anatomy — position, pericardium, coronary tree</title>
      <desc>
        Zone A position facts; Zone B pericardium; Zone C the coronary tree and dominance; Zone D flow timing and the symptom clusters.
      </desc>

      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Heart anatomy — position predicts symptoms; territory predicts infarcts</text>
        <rect x="812" y="25" width="250" height="18" rx="6" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">LA posterior · RV anterior · LAD most occluded</text>
      </g>

      {/* ZONE A — position */}
      <g>
        <rect x="36" y="72" width="1030" height="230" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">POSITION FACTS — printed verbatim (census: 2 raster objects — the A/B coronary views described, not reproduced)</text>
        <g>
          <rect x="52" y="108" width="500" height="176" rx="10" className="fill-card stroke-border" />
          <text x="66" y="130" fontSize="4.4" fontWeight="800" className="fill-brand">LA — the MOST POSTERIOR part of the heart</text>
          <text x="66" y="150" fontSize="2.9" fontWeight="700" className="fill-foreground/80">LA enlargement (eg, in mitral stenosis) can lead to:</text>
          <rect x="66" y="162" width="290" height="20" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="175.5" fontSize="2.9" fontWeight="800" className="fill-warning">COMPRESSION OF ESOPHAGUS → DYSPHAGIA</text>
          <rect x="66" y="190" width="440" height="20" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="203.5" fontSize="2.9" fontWeight="800" className="fill-warning">COMPRESSION OF LEFT RECURRENT LARYNGEAL NERVE → HOARSENESS</text>
          <text x="66" y="228" fontSize="2.9" fontWeight="800" className="fill-brand">(Ortner syndrome) — the nerve is a branch of the vagus</text>
          <text x="66" y="256" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">two neighbors, two complaints — one chamber&apos;s address (KYP)</text>
        </g>
        <g>
          <rect x="566" y="108" width="500" height="176" rx="10" className="fill-card stroke-border" />
          <text x="580" y="130" fontSize="4.4" fontWeight="800" className="fill-brand">RV — the MOST ANTERIOR part of the heart</text>
          <rect x="580" y="146" width="330" height="20" rx="5" className="fill-emergency-soft stroke-emergency" />
          <text x="588" y="159.5" fontSize="2.9" fontWeight="800" className="fill-emergency">MOST COMMONLY INJURED IN TRAUMA</text>
          <text x="580" y="192" fontSize="2.9" fontWeight="700" className="fill-foreground/80">LV is about 2/3 and RV about 1/3 of the inferior</text>
          <text x="580" y="210" fontSize="2.9" fontWeight="800" className="fill-foreground/80">(diaphragmatic) cardiac surface.</text>
          <text x="580" y="240" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">steering-wheel trauma finds the RV first (KYP tag);</text>
          <text x="580" y="256" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">inferior-MI geography = mostly LV wall on the diaphragm</text>
        </g>
      </g>

      {/* ZONE B — pericardium */}
      <g>
        <rect x="36" y="314" width="1030" height="180" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="336" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PERICARDIUM — three layers, one nerve (printed verbatim)</text>
        {[
          { t: "1 · Fibrous pericardium", d: "outermost" },
          { t: "2 · Parietal pericardium", d: "middle" },
          { t: "3 · Epicardium (visceral pericardium)", d: "innermost" },
        ].map((s, i) => (
          <g key={s.t}>
            <rect x="52" y={352 + i * 36} width="380" height="30" rx="8" className="fill-card stroke-border" />
            <text x="66" y={352 + i * 36 + 19} fontSize="3.4" fontWeight="800" className="fill-brand">{s.t}</text>
            <text x="410" y={352 + i * 36 + 19} fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{s.d}</text>
          </g>
        ))}
        <g>
          <rect x="452" y="352" width="614" height="102" rx="10" className="fill-card stroke-border" />
          <rect x="466" y="368" width="290" height="20" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="474" y="381.5" fontSize="2.9" fontWeight="800" className="fill-brand">PERICARDIAL SPACE = between parietal pericardium and epicardium</text>
          <rect x="466" y="396" width="290" height="20" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="474" y="409.5" fontSize="2.9" fontWeight="800" className="fill-warning">INNERVATED BY THE PHRENIC NERVE</text>
          <text x="466" y="436" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Pericarditis → referred pain to the neck, arms, or one or both shoulders (often left).</text>
        </g>
      </g>

      {/* ZONE C — coronary tree */}
      <g>
        <rect x="36" y="506" width="1030" height="430" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="528" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CORONARY TREE — supply list + dominance (printed verbatim)</text>
        <g>
          <rect x="52" y="542" width="1000" height="70" rx="10" className="fill-card stroke-emergency" />
          <text x="66" y="564" fontSize="3.6" fontWeight="800" className="fill-emergency">LAD (+ branches) — MOST COMMONLY OCCLUDED</text>
          <text x="66" y="584" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Anterior 2/3 of interventricular septum · anterolateral papillary muscle · anterior surface of LV</text>
          <text x="66" y="602" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">anterior STEMI territory — the exam&apos;s default coronary</text>
        </g>
        <g>
          <rect x="52" y="620" width="1000" height="88" rx="10" className="fill-card stroke-border" />
          <text x="66" y="642" fontSize="3.6" fontWeight="800" className="fill-brand">Posterior descending artery (PDA)</text>
          <text x="66" y="662" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Posterior 1/3 of interventricular septum · posterior 2/3 of ventricular walls · posteromedial papillary muscle ·</text>
          <text x="66" y="678" fontSize="2.9" fontWeight="800" className="fill-brand">SA AND AV NODES (as determined by dominance)</text>
          <rect x="66" y="686" width="420" height="18" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="698.5" fontSize="2.8" fontWeight="800" className="fill-warning">INFARCT MAY CAUSE NODAL DYSFUNCTION (BRADYCARDIA OR HEART BLOCK)</text>
        </g>
        <g>
          <rect x="52" y="716" width="1000" height="52" rx="10" className="fill-card stroke-border" />
          <text x="66" y="736" fontSize="3.4" fontWeight="800" className="fill-brand">Right (acute) marginal artery — supplies RV</text>
          <text x="66" y="756" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">printed key carried: AMA acute marginal · LAD left anterior descending · LCA (or LM) left (main) · LCX left circumflex · OMA obtuse marginal · PDA posterior descending · PT pulmonary trunk · PV pulmonary vein · RCA right coronary</text>
        </g>
        <g>
          <rect x="52" y="776" width="1000" height="144" rx="10" className="fill-card stroke-border" />
          <text x="66" y="798" fontSize="3.6" fontWeight="800" className="fill-brand">DOMINANCE — the printed three-way split</text>
          {[
            ["Right-dominant", "PDA arises from RCA", "MOST COMMON"],
            ["Left-dominant", "PDA arises from LCX", "~5%-10% of patients"],
            ["Codominant", "PDA arises from both LCX and RCA", "~10%-20% of patients"],
          ].map(([a, b, c], i) => (
            <g key={a}>
              <rect x="66" y={810 + i * 34} width="240" height="26" rx="6" className="fill-brand-soft stroke-brand" />
              <text x="76" y={810 + i * 34 + 16.5} fontSize="3" fontWeight="800" className="fill-brand">{a}</text>
              <text x="330" y={810 + i * 34 + 16.5} fontSize="3" fontWeight="700" className="fill-foreground/80">{b}</text>
              <text x="700" y={810 + i * 34 + 16.5} fontSize="3" fontWeight="800" className="fill-foreground">{c}</text>
            </g>
          ))}
        </g>
      </g>

      {/* ZONE D — flow + clusters */}
      <g>
        <rect x="36" y="948" width="1030" height="152" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="970" fontSize="5.4" fontWeight="800" className="fill-foreground">FLOW TIMING + THE THREE SYMPTOM CLUSTERS (KYP synthesis over the printed facts)</text>
        <rect x="52" y="984" width="480" height="52" rx="8" className="fill-card stroke-brand" />
        <text x="66" y="1004" fontSize="3.2" fontWeight="800" className="fill-brand">CORONARY BLOOD FLOW TO LV + SEPTUM PEAKS IN EARLY DIASTOLE (printed)</text>
        <text x="66" y="1022" fontSize="2.9" fontWeight="700" className="fill-foreground/80">systole squeezes intramyocardial vessels shut — tachycardia starves the LV first</text>
        <rect x="546" y="984" width="520" height="52" rx="8" className="fill-card stroke-border" />
        <text x="560" y="1004" fontSize="3.2" fontWeight="800" className="fill-brand">CORONARY SINUS RUNS IN THE LEFT AV GROOVE → DRAINS INTO RA (printed)</text>
        <text x="560" y="1022" fontSize="2.9" fontWeight="700" className="fill-foreground/80">and holds the most deoxygenated blood in the body (book 288)</text>
        <text x="52" y="1058" fontSize="2.9" fontWeight="800" className="fill-foreground">THE CLUSTERS: dysphagia + hoarseness → LA enlargement (Ortner) · blunt trauma → RV · neck/shoulder pain → phrenic (pericarditis) · inferior MI + block → PDA/nodes · anterior MI → LAD</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1112" width="1054" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1130" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid 2026, Part 1 pdf 309 / book 287 (Cardiovascular—Anatomy: Heart anatomy). Footer slug: FAS1_2026_07-Cardio.indd 287 · 12/18/25 9:25 AM.</text>
        <text x="42" y="1141" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): 2 raster objects — the anterior/posterior-view coronary figures COPYRIGHTED_NO_REPUBLISH, described not reproduced (A/B figure tags are raster furniture).</text>
        <text x="42" y="1152" fontSize="3.8" className="fill-muted-foreground">All position, pericardium, supply, dominance, and flow text carried verbatim; the symptom-cluster synthesis line and the dial tags are ORIGINAL KYP ADAPTATIONS (documented).</text>
      </g>
    </svg>
  );
};
