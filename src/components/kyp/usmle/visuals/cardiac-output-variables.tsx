/* Cardiovascular — CV5, topic cardiac-output-variables (pdf 310 / book 288 —
 * the SV CAP page: stroke volume dials, contractility lists, preload/
 * afterload drug map, Laplace, O2 demand). Census (pdfimages): ZERO raster
 * objects — pure text page with one printed equation; everything carried
 * verbatim. 'SV CAP' is the print's own mnemonic. Nothing is reproduced;
 * purely presentational (no props, no hooks, no external images). */

export const CardiacOutputMap = () => {
  const w = 1102;
  const h = 1180;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cardiac output variables — the SV CAP headline (stroke volume affected by contractility, afterload, and preload) with the printed raise-SV list (increased contractility as in anxiety and exercise, increased preload as in early pregnancy, decreased afterload), stroke work proportional to SV times MAP, and the failing heart's decreased SV from systolic or diastolic dysfunction; the contractility up-list (catecholamine stimulation via beta-1 receptor activating protein kinase A which phosphorylates phospholamban to activate calcium ATPase and raise sarcoplasmic reticulum calcium storage, phosphorylates calcium channels to raise calcium entry and calcium-induced calcium release, raising intracellular calcium; digoxin blocking the sodium-potassium pump to raise intracellular sodium, lower the sodium-calcium exchanger, and raise intracellular calcium) and down-list (beta-1 blockade lowering cAMP, systolic heart failure, acidosis, hypoxia and hypercapnia, nondihydropyridine calcium channel blockers); preload approximated by end-diastolic volume with venous vasodilators like nitroglycerin lowering it; afterload approximated by mean arterial pressure with arterial vasodilators like hydralazine lowering it and ACE inhibitors and ARBs lowering both; the O2 demand block (contractility, afterload, heart rate, ventricular diameter) with the coronary sinus holding the most deoxygenated blood in the body; and Laplace's law with wall stress equal to pressure times radius over two times wall thickness and the LV hypertrophy compensation — an original KYP diagram of book 288." className="min-w-[1060px]">
      <title>Cardiac output variables — the SV CAP dial panel</title>
      <desc>
        Zone A the SV CAP headline and examples; Zone B the contractility lists; Zone C the preload/afterload drug map; Zone D Laplace + O2 demand.
      </desc>

      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Cardiac output variables — SV CAP: Contractility · Afterload · Preload</text>
        <rect x="824" y="25" width="238" height="18" rx="6" className="fill-brand-soft" />
        <text x="943" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">two geometric dials + one calcium dial</text>
      </g>

      {/* ZONE A — SV CAP */}
      <g>
        <rect x="36" y="72" width="1030" height="240" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">STROKE VOLUME AFFECTED BY CONTRACTILITY, AFTERLOAD, AND PRELOAD — “SV CAP” (the print&apos;s own mnemonic)</text>
        <text x="52" y="105" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">census: pdfimages ZERO raster objects — pure text page; every bullet below carried verbatim</text>
        {[
          ["↑ Contractility (eg, anxiety, exercise)", "the calcium dial — catecholamines, digoxin"],
          ["↑ Preload (eg, early pregnancy)", "the filling dial — EDV"],
          ["↓ Afterload", "the ejection dial — MAP"],
        ].map(([a, b], i) => (
          <g key={a}>
            <rect x="52" y={120 + i * 40} width="420" height="32" rx="8" className="fill-card stroke-border" />
            <text x="66" y={120 + i * 40 + 20} fontSize="3.4" fontWeight="800" className="fill-success">{a}</text>
            <text x="486" y={120 + i * 40 + 20} fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{b}</text>
          </g>
        ))}
        <g>
          <rect x="52" y="246" width="1000" height="52" rx="8" className="fill-card stroke-border" />
          <text x="66" y="266" fontSize="3.2" fontWeight="800" className="fill-brand">STROKE WORK (SW) = work done by ventricle to eject SV · SW ∝ SV × MAP (printed)</text>
          <text x="66" y="286" fontSize="2.9" fontWeight="800" className="fill-warning">A FAILING HEART HAS ↓ SV (SYSTOLIC AND/OR DIASTOLIC DYSFUNCTION) (printed)</text>
        </g>
      </g>

      {/* ZONE B — contractility */}
      <g>
        <rect x="36" y="324" width="1030" height="330" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="346" fontSize="5.4" fontWeight="800" className="fill-foreground">CONTRACTILITY (AND SV) — the printed up/down lists, verbatim</text>
        <g>
          <rect x="52" y="360" width="640" height="276" rx="10" className="fill-card stroke-brand" />
          <text x="66" y="382" fontSize="3.6" fontWeight="800" className="fill-success">↑ WITH:</text>
          <text x="66" y="404" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Catecholamine stimulation via β1 receptor:</text>
          <text x="80" y="422" fontSize="2.9" fontWeight="700" className="fill-foreground/80">• Activated protein kinase A → phospholamban phosphorylation → active Ca2+ ATPase</text>
          <text x="80" y="440" fontSize="2.9" fontWeight="700" className="fill-foreground/80">→ ↑ Ca2+ storage in sarcoplasmic reticulum (SR)</text>
          <text x="80" y="458" fontSize="2.9" fontWeight="700" className="fill-foreground/80">• Activated PKA → Ca2+ channel phosphorylation → ↑ Ca2+ entry</text>
          <text x="80" y="476" fontSize="2.9" fontWeight="800" className="fill-success">→ ↑ Ca2+-INDUCED Ca2+ RELEASE</text>
          <text x="66" y="500" fontSize="2.9" fontWeight="700" className="fill-foreground/80">• ↑ intracellular Ca2+</text>
          <text x="66" y="524" fontSize="2.9" fontWeight="700" className="fill-foreground/80">• Digoxin (blocks Na+/K+ pump → ↑ intracellular Na+</text>
          <text x="66" y="542" fontSize="2.9" fontWeight="800" className="fill-success">→ ↓ Na+/Ca2+ exchanger activity → ↑ intracellular Ca2+)</text>
          <text x="66" y="574" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">two phosphorylation targets + one pump-poison — all roads end at more Ca2+ (KYP)</text>
          <text x="66" y="608" fontSize="3" fontWeight="800" className="fill-warning">↓ WITH: β1-blockade (↓ cAMP) · systolic HF · acidosis ·</text>
          <text x="66" y="626" fontSize="3" fontWeight="800" className="fill-warning">hypoxia/hypercapnia (↓ Po2 / ↑ Pco2) · nondihydropyridine Ca2+ channel blockers</text>
        </g>
        <g>
          <rect x="706" y="360" width="360" height="276" rx="10" className="fill-card stroke-border" />
          <text x="720" y="382" fontSize="3.4" fontWeight="800" className="fill-brand">THE ONE-DIAL DRUG MAP (KYP)</text>
          {[
            ["Nitroglycerin", "VENOUS → ↓ PRELOAD"],
            ["Hydralazine", "ARTERIAL → ↓ AFTERLOAD"],
            ["ACE inhibitors / ARBs", "↓ BOTH (the only both-dial class)"],
            ["β1-blockers", "CONTRACTILITY ↓ (↓ cAMP)"],
            ["Non-DHP CCBs", "CONTRACTILITY ↓"],
            ["Digoxin / catecholamines", "CONTRACTILITY ↑"],
          ].map(([a, b], i) => (
            <g key={a}>
              <text x="720" y={404 + i * 36} fontSize="3.1" fontWeight="800" className="fill-foreground">{a}</text>
              <text x="720" y={404 + i * 36 + 14} fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{b}</text>
            </g>
          ))}
        </g>
      </g>

      {/* ZONE C — preload/afterload */}
      <g>
        <rect x="36" y="666" width="1030" height="180" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="688" fontSize="5.4" fontWeight="800" className="fill-foreground">PRELOAD AND AFTERLOAD — the printed approximations and drug rows, verbatim</text>
        <g>
          <rect x="52" y="702" width="1000" height="62" rx="8" className="fill-card stroke-border" />
          <text x="66" y="722" fontSize="3.2" fontWeight="800" className="fill-brand">PRELOAD ≈ VENTRICULAR END-DIASTOLIC VOLUME (EDV)</text>
          <text x="66" y="740" fontSize="2.9" fontWeight="700" className="fill-foreground/80">depends on venous tone and circulating blood volume, both of which affect venous return. Venous vasodilators (eg, nitroglycerin) ↓ preload.</text>
          <text x="760" y="758" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the filling dial (KYP tag)</text>
        </g>
        <g>
          <rect x="52" y="772" width="1000" height="62" rx="8" className="fill-card stroke-border" />
          <text x="66" y="792" fontSize="3.2" fontWeight="800" className="fill-brand">AFTERLOAD ≈ MAP — ↑ pressure → ↑ wall tension per Laplace&apos;s law → ↑ afterload</text>
          <text x="66" y="810" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Arterial vasodilators (eg, hydralazine) ↓ afterload. ACE inhibitors and ARBs ↓ both preload and afterload. Chronic hypertension (↑ MAP) → LV hypertrophy.</text>
          <text x="760" y="828" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the ejection dial (KYP tag)</text>
        </g>
      </g>

      {/* ZONE D — Laplace + O2 */}
      <g>
        <rect x="36" y="858" width="1030" height="220" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="880" fontSize="5.4" fontWeight="800" className="fill-foreground">LAPLACE&apos;S LAW + THE O2-DEMAND BLOCK — printed verbatim</text>
        <g>
          <rect x="52" y="894" width="600" height="166" rx="10" className="fill-card stroke-brand" />
          <text x="66" y="916" fontSize="3.4" fontWeight="800" className="fill-brand">Wall tension follows Laplace&apos;s law (printed):</text>
          <rect x="66" y="930" width="440" height="30" rx="8" className="fill-brand-soft stroke-brand" />
          <text x="286" y="950" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">wall stress = pressure × radius / (2 × wall thickness)</text>
          <text x="66" y="984" fontSize="2.9" fontWeight="700" className="fill-foreground/80">↑ pressure → ↑ wall tension → ↑ afterload. The LV compensates for ↑ afterload by</text>
          <text x="66" y="1002" fontSize="2.9" fontWeight="800" className="fill-brand">thickening (hypertrophy) in order to ↓ wall stress.</text>
          <text x="66" y="1030" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">compensation today (KYP): the denominator grows — chronic hypertension (↑ MAP) → LVH</text>
        </g>
        <g>
          <rect x="666" y="894" width="400" height="166" rx="10" className="fill-card stroke-border" />
          <text x="680" y="916" fontSize="3.4" fontWeight="800" className="fill-warning">MYOCARDIAL O2 DEMAND IS ↑ BY:</text>
          {["↑ contractility", "↑ afterload (proportional to arterial pressure)", "↑ heart rate", "↑ diameter of ventricle (↑ wall tension)"].map((d, i) => (
            <text key={d} x="680" y={938 + i * 20} fontSize="2.9" fontWeight="700" className="fill-foreground/80">• {d}</text>
          ))}
          <rect x="680" y="1022" width="370" height="24" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="688" y="1037.5" fontSize="2.9" fontWeight="800" className="fill-emergency">CORONARY SINUS = MOST DEOXYGENATED BLOOD IN BODY</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1090" width="1054" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1108" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid 2026, Part 1 pdf 310 / book 288 (Cardiovascular—Physiology: Cardiac output variables). Footer slug: FAS1_2026_07-Cardio.indd 288 · 12/18/25 9:25 AM.</text>
        <text x="42" y="1119" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster objects — pure text page; the printed equation renders as the Laplace strip. Quirk: the printed banner extracts twice (doubled '▶ CARDIOVASCULAR—PHYSIOLOGY' layer — documented).</text>
        <text x="42" y="1130" fontSize="3.8" className="fill-muted-foreground">'SV CAP' is the print&apos;s own mnemonic; the one-dial drug map and the geometric/calcium dial tags are ORIGINAL KYP ADAPTATIONS (documented).</text>
      </g>
    </svg>
  );
};
