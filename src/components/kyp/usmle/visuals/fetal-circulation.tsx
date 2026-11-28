/* Cardiovascular — CV3, topic fetal-circulation (pdf 308 / book 286 — the
 * fetal-postnatal derivatives grid + the three-shunt figure + the birth
 * transition). Census (pdfimages): 3 raster objects (circulation figure —
 * described not reproduced); the derivatives table and the shunt/closure
 * text are carried verbatim. The 'Endomethacin' and kEEp hooks are the
 * print's own. Nothing is reproduced; purely presentational (no props, no
 * hooks, no external images). */

export const FetalCirculationMap = () => {
  const w = 1102;
  const h = 1160;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Fetal circulation — the three shunts (umbilical vein to ductus venosus to IVC bypassing hepatic circulation; highly oxygenated IVC blood through the foramen ovale to the LA; deoxygenated SVC blood through RA, RV, main pulmonary artery, and ductus arteriosus to the descending aorta driven by raised fetal pulmonary artery resistance) drawn on the printed O2 gradient legend (high, moderate, low, very low), the birth transition cascade (first breath lowers pulmonary vascular resistance, LA pressure rises over RA closing the foramen ovale into the fossa ovalis; rising O2 and falling prostaglandins close the ductus arteriosus), the pharmacology hooks (NSAIDs indomethacin and ibuprofen or acetaminophen close the PDA into the ligamentum arteriosum — Endomethacin ends the PDA — while prostaglandins E1 and E2 keep it open), and the six-row fetal-postnatal derivatives grid (ductus arteriosus to ligamentum arteriosum near the left recurrent laryngeal nerve; ductus venosus to ligamentum venosum; foramen ovale to fossa ovalis; allantois-urachus to median umbilical ligament; umbilical arteries to medial umbilical ligaments; umbilical vein to ligamentum teres hepatis in the falciform ligament) — an original KYP diagram of book 286." className="min-w-[1060px]">
      <title>Fetal circulation — shunts, birth transition, derivatives</title>
      <desc>
        Zone A the three shunts on the O2 legend; Zone B the birth cascade and pharmacology; Zone C the derivatives grid.
      </desc>

      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Fetal circulation — three shunts, one breath, six remnants</text>
        <rect x="824" y="25" width="238" height="18" rx="6" className="fill-brand-soft" />
        <text x="943" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">'Endomethacin ends the PDA' · PGE kEEps it open</text>
      </g>

      {/* ZONE A — shunts */}
      <g>
        <rect x="36" y="72" width="1030" height="400" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">THE THREE SHUNTS — printed chains verbatim, on the printed O2 legend</text>
        <text x="52" y="105" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">census: 3 raster objects (the printed circulation figure — COPYRIGHTED_NO_REPUBLISH, described not reproduced); the shunt TEXT is carried verbatim below</text>

        {/* O2 legend */}
        <g>
          <rect x="52" y="118" width="160" height="30" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="62" y="136.5" fontSize="3" fontWeight="800" className="fill-brand">HIGH O2 (printed legend)</text>
          <rect x="222" y="118" width="160" height="30" rx="6" className="fill-brand-soft/60 stroke-border" />
          <text x="232" y="136.5" fontSize="3" fontWeight="800" className="fill-foreground">MODERATE O2</text>
          <rect x="392" y="118" width="160" height="30" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="402" y="136.5" fontSize="3" fontWeight="800" className="fill-warning">LOW O2</text>
          <rect x="562" y="118" width="160" height="30" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="572" y="136.5" fontSize="3" fontWeight="800" className="fill-emergency">VERY LOW O2</text>
          <text x="740" y="136.5" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the figure&apos;s color key is the answer key:</text>
          <text x="740" y="148" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">best blood → brain via FO; worst → placenta via UA</text>
        </g>

        {/* shunt 1 */}
        <g>
          <rect x="52" y="166" width="1000" height="86" rx="10" className="fill-card stroke-border" />
          <circle cx="74" cy="196" r="11" className="fill-brand-soft stroke-brand" />
          <text x="74" y="199.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">1</text>
          <text x="94" y="192" fontSize="3.6" fontWeight="800" className="fill-brand">Umbilical vein → ductus venosus → IVC</text>
          <text x="94" y="210" fontSize="2.9" fontWeight="700" className="fill-foreground/80">bypassing hepatic circulation.</text>
          <text x="94" y="236" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the placenta&apos;s fresh blood skips the liver — remnant: ligamentum venosum</text>
        </g>
        {/* shunt 2 */}
        <g>
          <rect x="52" y="260" width="1000" height="86" rx="10" className="fill-card stroke-border" />
          <circle cx="74" cy="290" r="11" className="fill-brand-soft stroke-brand" />
          <text x="74" y="293.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">2</text>
          <text x="94" y="286" fontSize="3.6" fontWeight="800" className="fill-brand">Most of the highly oxygenated blood: IVC → foramen ovale → LA</text>
          <text x="94" y="304" fontSize="2.9" fontWeight="700" className="fill-foreground/80">the best blood goes to the head/heart (brain priority) — remnant: fossa ovalis</text>
          <text x="94" y="330" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">built by the septation choreography (book 284) — closed by the birth pressure flip</text>
        </g>
        {/* shunt 3 */}
        <g>
          <rect x="52" y="354" width="1000" height="100" rx="10" className="fill-card stroke-border" />
          <circle cx="74" cy="392" r="11" className="fill-brand-soft stroke-brand" />
          <text x="74" y="395.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">3</text>
          <text x="94" y="388" fontSize="3.6" fontWeight="800" className="fill-brand">Deoxygenated SVC blood: SVC → RA → RV → main pulmonary artery → ductus arteriosus → descending aorta</text>
          <rect x="94" y="402" width="470" height="20" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="102" y="415.5" fontSize="2.9" fontWeight="800" className="fill-warning">shunt is due to ↑ FETAL PULMONARY ARTERY RESISTANCE</text>
          <text x="94" y="440" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the lungs are high-resistance by design — one breath collapses that resistance (remnant: ligamentum arteriosum)</text>
        </g>
      </g>

      {/* ZONE B — birth cascade */}
      <g>
        <rect x="36" y="484" width="1030" height="330" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="506" fontSize="5.4" fontWeight="800" className="fill-foreground">THE BIRTH TRANSITION — the printed cascade, verbatim</text>
        {[
          { n: "1", t: "First breath", d: "infant takes a breath → ↓ resistance in pulmonary vasculature.", color: "stroke-brand", fill: "fill-brand-soft" },
          { n: "2", t: "Pressure flip", d: "↑ LA pressure vs RA pressure → foramen ovale closes (now called fossa ovalis).", color: "stroke-success", fill: "fill-success-soft/50" },
          { n: "3", t: "Two ductus-closure signals", d: "↑ in O2 (from respiration) and ↓ in prostaglandins (from placental separation) → closure of the ductus arteriosus.", color: "stroke-success", fill: "fill-success-soft/50" },
        ].map((s, i) => (
          <g key={s.n}>
            <rect x="52" y={520 + i * 62} width="600" height="54" rx="8" className="fill-card stroke-border" />
            <circle cx="72" cy={520 + i * 62 + 27} r="9" className={`${s.fill} ${s.color.replace("stroke-", "stroke-")}`} />
            <text x="72" y={520 + i * 62 + 29.5} textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">{s.n}</text>
            <text x="88" y={520 + i * 62 + 22} fontSize="3.4" fontWeight="800" className="fill-foreground">{s.t}</text>
            <text x="88" y={520 + i * 62 + 38} fontSize="2.9" fontWeight="700" className="fill-foreground/80">{s.d}</text>
          </g>
        ))}
        <g>
          <rect x="666" y="520" width="400" height="178" rx="10" className="fill-card stroke-emergency" />
          <text x="680" y="542" fontSize="3.6" fontWeight="800" className="fill-emergency">PHARMACOLOGY — the print&apos;s own hooks</text>
          <rect x="680" y="554" width="370" height="24" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="688" y="569.5" fontSize="3" fontWeight="800" className="fill-emergency">“Endomethacin” ENDS the PDA — NSAIDs close it</text>
          <text x="680" y="594" fontSize="2.9" fontWeight="700" className="fill-foreground/80">NSAIDs (eg, indomethacin, ibuprofen) or acetaminophen help close the</text>
          <text x="680" y="610" fontSize="2.9" fontWeight="700" className="fill-foreground/80">patent ductus arteriosus (PDA) → ligamentum arteriosum.</text>
          <rect x="680" y="624" width="370" height="24" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="688" y="639.5" fontSize="3" fontWeight="800" className="fill-warning">PROSTAGLANDINS E1 AND E2 kEEp PDA OPEN (kEEp has the E&apos;s)</text>
          <text x="680" y="678" fontSize="2.9" fontWeight="800" className="fill-foreground">one signal, two directions: birth REMOVES prostaglandins</text>
          <text x="680" y="694" fontSize="2.9" fontWeight="800" className="fill-foreground">(closes) · a PGE1 drip ADDS them (keeps open, TGA mixing)</text>
        </g>
        <text x="52" y="790" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">figure furniture carried: ductus arteriosus · foramen ovale · ductus venosus · LA/RA/RV/LV · SVC/IVC · aorta · pulmonary artery · portal vein · umbilical vein/arteries · internal iliac artery · To placenta / From placenta (the printed figure is raster — described not reproduced)</text>
      </g>

      {/* ZONE C — derivatives grid */}
      <g>
        <rect x="36" y="826" width="1030" height="240" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="848" fontSize="5.4" fontWeight="800" className="fill-foreground">FETAL-POSTNATAL DERIVATIVES — the printed grid, all six rows verbatim</text>
        <text x="76" y="866" fontSize="3.4" fontWeight="800" className="fill-muted-foreground">FETAL STRUCTURE</text>
        <text x="400" y="866" fontSize="3.4" fontWeight="800" className="fill-brand">POSTNATAL DERIVATIVE</text>
        <text x="760" y="866" fontSize="3.4" fontWeight="800" className="fill-muted-foreground">NOTE (printed)</text>
        {[
          ["Ductus arteriosus", "Ligamentum arteriosum", "Near the left recurrent laryngeal nerve"],
          ["Ductus venosus", "Ligamentum venosum", "—"],
          ["Foramen ovale", "Fossa ovalis", "—"],
          ["Allantois → urachus", "Median umbilical ligament", "Urachus is part of allantois between bladder and umbilicus"],
          ["Umbilical arteries", "Medial umbilical ligaments", "—"],
          ["Umbilical vein", "Ligamentum teres hepatis (round ligament)", "Contained in falciform ligament"],
        ].map(([a, b, c], i) => (
          <g key={a}>
            <rect x="52" y={876 + i * 30} width="330" height="24" rx="6" className="fill-card stroke-border" />
            <text x="62" y={876 + i * 30 + 15.5} fontSize="2.9" fontWeight="700" className="fill-foreground">{a}</text>
            <rect x="392" y={876 + i * 30} width="350" height="24" rx="6" className="fill-card stroke-brand" />
            <text x="402" y={876 + i * 30 + 15.5} fontSize="2.9" fontWeight="800" className="fill-brand">{b}</text>
            <text x="760" y={876 + i * 30 + 15.5} fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{c}</text>
          </g>
        ))}
        <text x="52" y="1062" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the two confusables (KYP): MEDIan = urachus (midline bladder-umbilicus); MEDIal = the paired umbilical ARTERIES</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1078" width="1054" height="58" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1096" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid 2026, Part 1 pdf 308 / book 286 (Fetal-postnatal derivatives + Fetal circulation). Footer slug: FAS1_2026_07-Cardio.indd 286 · 12/18/25 9:25 AM.</text>
        <text x="42" y="1107" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): 3 raster objects — circulation figure described not reproduced; all shunt chains, the birth cascade, the pharmacology hooks, and the six-row grid carried verbatim. Quirk: 'FETAl/POSTNATAl' small-caps-L extraction artifact documented.</text>
        <text x="42" y="1118" fontSize="3.8" className="fill-muted-foreground">The shunt numbering, the O2-legend strip, and the mnemonic chips are ORIGINAL KYP ADAPTATIONS; 'Endomethacin' and the kEEp spelling are the print&apos;s own.</text>
      </g>
    </svg>
  );
};
