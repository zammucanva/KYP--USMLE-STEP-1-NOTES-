/* Public Health — PUBH batch 3, topic pubh25: Disease prevention levels and
 * prophylaxis (FULL pdf page 298 / book 276 — the FIRST page of the HEALTHCARE
 * DELIVERY subsection; the banner prints twice). The page carries TWO blocks,
 * both owned: (1) the "Disease prevention" PYRAMID TABLE — a triangle of four
 * stacked bands, APEX = Quaternary, BASE = Primary (the susceptible general
 * population), with two boxed column headers ("Target population" over the
 * left flank, one person icon per level; "Goals" over the right callouts,
 * reached by block arrows shaded to match the bands); (2) the
 * "Chemoprophylaxis and post-exposure prophylaxis" table — columns
 * PROPHYLAXIS / NOTES, SIX rows (HIV exposure; Neisseria meningitidis close
 * contact; Rabies exposure; Hepatitis B virus exposure; Malaria travel;
 * Sexual exposure—STI prevention). Census (pdfimages): ZERO raster images —
 * both blocks are vector + text furniture; both are ORIGINAL KYP ADAPTATIONS
 * (this registry visual re-lays the pyramid as a KYP funnel with flanking
 * columns and the prophylaxis table as timing-banded protocol cards — the
 * layout is KYP's, every printed label is preserved; the chapter census calls
 * the page "Pure text/table → ORIGINAL KYP ADAPTATION"). VLM-read at 120dpi,
 * TWO passes (full page + 2x-zoom pyramid adjudication,
 * staging-pubh25/vlm-census.txt): the bands graduate dark teal (apex) to pale
 * mint (base), the level-name first letters print in red (drawn here as red
 * initial tspans), the "eg," lines print in smaller italic gray, and ONE
 * person figure per level sits on the left. ADJUDICATION drawn exactly as
 * printed: Primary's right-side goal callout is "Prevent disease onset", and
 * "Prevent symptom onset" prints TWICE, both times in the SECONDARY row — once
 * INSIDE the band (drawn in-band below "Screen for early detection and
 * treatment of presymptomatic disease") and once as the right callout (bbox
 * coordinates + both VLM passes agree; the batch brief had Primary carrying
 * "prevent symptom onset" — print governs). The prophylaxis cards' timing
 * bands (amber ≤72-hr windows · blue scheduled/serology series · red
 * close-contact · green travel bracket) are KYP coding of the printed timing
 * rules. Nothing is reproduced from the book; purely presentational (no props,
 * no hooks, no external images). */

export const PreventionProphylaxisMap = () => {
  const w = 1102;
  const h = 1440;

  /* One person figure per level on the left flank — the print's own furniture,
   * redrawn as a minimal KYP glyph; shading graduated down the pyramid. */
  const person = (x: number, cy: number, strokeCls: string, key: string) => (
    <g key={key}>
      <circle cx={x} cy={cy - 8} r="5" className={strokeCls} strokeWidth="1.4" fill="none" />
      <path
        d={`M ${x - 8} ${cy + 12} a 8 7 0 0 1 16 0 Z`}
        className={strokeCls}
        strokeWidth="1.4"
        fill="none"
      />
    </g>
  );

  /* The shaded block arrow from each band's right edge to its Goals callout —
   * the print's arrows graduate with the bands. */
  const blockArrow = (x0: number, cy: number, cls: string, key: string) => (
    <g key={key}>
      <line x1={x0} y1={cy} x2={634} y2={cy} className={cls} strokeWidth="2.4" />
      <path d={`M 632 ${cy - 4} L 642 ${cy} L 632 ${cy + 4} Z`} className={cls} />
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      role="img"
      aria-label="Disease prevention levels and prophylaxis — the four prevention levels as a stacked pyramid (base Primary, susceptible and general population, prevent disease onset by reducing risks or increasing immunity, eg healthy diet and exercise to prevent diabetes; Secondary, subclinical asymptomatic, screen for early detection and treatment of presymptomatic disease, prevent symptom onset, eg glucose screening for type 2 diabetes mellitus; Tertiary, clinical symptomatic, treat symptomatic disease, prevent clinical disease progression and sequelae, eg hemoglobin A1c monitoring; apex Quaternary, symptomatic but overmedicalized or not treatable, quit unnecessary medical interventions, prevent overtreatment and iatrogenic harm, eg discontinuing sulfonylurea after multiple hypoglycemic events), above the six chemoprophylaxis and post-exposure prophylaxis protocols as cards with timing bands (HIV exposure, tenofovir disoproxil fumarate plus emtricitabine plus raltegravir or dolutegravir for 28 days starting within 72 hours with HIV testing at baseline and 6 weeks, 3 months, 6 months; Neisseria meningitidis close contact, rifampin ciprofloxacin or ceftriaxone for household or close exposure; rabies animal bite, wound cleaning plus rabies vaccine plus rabies immune globulin if not previously immunized on the 0, 3, 7, 14 day schedule; hepatitis B virus exposure, HBV vaccine plus or minus hepatitis B immune globulin if source positive and unvaccinated, follow HBV serology; malaria travel prophylaxis, atovaquone-proguanil doxycycline or mefloquine, start before travel and continue post-return; sexual exposure STI prevention, doxycycline within 72 hours after sex preventing syphilis chlamydia and gonorrhea with effectiveness over 70 percent for syphilis and chlamydia and about 50 percent for gonorrhea, monitored every 3 to 6 months) — an original KYP diagram of book 276."
      className="min-w-[1060px]"
    >
      <title>Disease prevention levels and prophylaxis — the prevention pyramid and the six prophylaxis protocols</title>
      <desc>
        A stacked prevention pyramid with four bands from base to apex (Primary, Secondary, Tertiary, Quaternary — each with its level name and in-band action, a person icon and target population on the left flank, and a right-side Prevent-goal with its italic eg-example), then the six chemoprophylaxis and post-exposure prophylaxis rows as protocol cards carrying regimen, timing band, and notes, with the printed effectiveness data on the doxycycline card.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Disease prevention levels and prophylaxis — the prevention pyramid + the six post-exposure protocols</text>
        <rect x="812" y="25" width="250" height="18" rx="6" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">4 levels · 6 regimens</text>
      </g>

      {/* ===== ZONE A — THE DISEASE PREVENTION PYRAMID ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="576" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE DISEASE PREVENTION PYRAMID — four levels on the natural-history funnel (apex up, as printed)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">every label below is the print&apos;s own — the pyramid re-laid as a KYP funnel (ORIGINAL KYP ADAPTATION); the population narrows as disease advances</text>

        {/* the two boxed column headers, as printed */}
        <rect x="52" y="114" width="106" height="13" rx="4" className="fill-card stroke-border" />
        <text x="105" y="123.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Target population</text>
        <rect x="944" y="114" width="60" height="13" rx="4" className="fill-card stroke-border" />
        <text x="974" y="123.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Goals</text>
        <text x="620" y="123.5" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">boxed headers as printed — Target population over the left flank · Goals over the right callouts</text>

        {/* BAND 1 (apex) — Quaternary */}
        <path d="M 325 140.5 L 475 140.5 L 500.2 249.5 L 299.8 249.5 Z" className="fill-brand/30 stroke-brand" strokeWidth="1" />
        <text x="400" y="163" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground"><tspan className="fill-emergency">Q</tspan>uaternary</text>
        <text x="400" y="178" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-foreground/90">Quit unnecessary medical interventions</text>
        <text x="400" y="190" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">apex — the narrowest band</text>

        {/* BAND 2 — Tertiary */}
        <path d="M 299.8 250.5 L 500.2 250.5 L 526.4 359.5 L 273.6 359.5 Z" className="fill-brand/20 stroke-brand/70" strokeWidth="1" />
        <text x="400" y="273" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground"><tspan className="fill-emergency">T</tspan>ertiary</text>
        <text x="400" y="288" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-foreground/90">Treat symptomatic disease</text>

        {/* BAND 3 — Secondary (in-band action prints TWO lines — Prevent symptom onset is in-band too) */}
        <path d="M 273.6 360.5 L 526.4 360.5 L 552.7 469.5 L 247.3 469.5 Z" className="fill-brand/15 stroke-brand/50" strokeWidth="1" />
        <text x="400" y="383" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground"><tspan className="fill-emergency">S</tspan>econdary</text>
        <text x="400" y="398" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-foreground/90">Screen for early detection and treatment of presymptomatic disease</text>
        <text x="400" y="408" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-foreground/90">Prevent symptom onset</text>
        <text x="400" y="417" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-neural">the phrase prints in-band AND in the callout (twice, as printed)</text>

        {/* BAND 4 (base) — Primary */}
        <path d="M 247.3 470.5 L 552.7 470.5 L 579 579.5 L 221 579.5 Z" className="fill-brand/10 stroke-brand/35" strokeWidth="1" />
        <text x="400" y="493" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground"><tspan className="fill-emergency">P</tspan>rimary</text>
        <text x="400" y="508" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-foreground/90">Prevent disease onset by reducing risks or increasing immunity</text>
        <text x="400" y="520" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">base — the widest band: everyone starts susceptible</text>

        {/* left flank — one person icon + target population per level */}
        {person(90, 200, "stroke-brand", "p-q")}
        <text x="110" y="189" fontSize="3" fontWeight="700" className="fill-foreground/80">Symptomatic patients, but</text>
        <text x="110" y="198" fontSize="3" fontWeight="700" className="fill-foreground/80">overmedicalized</text>
        <text x="110" y="207" fontSize="3" fontWeight="700" className="fill-foreground/80">or not treatable</text>
        {person(90, 310, "stroke-brand/75", "p-t")}
        <text x="110" y="307" fontSize="3" fontWeight="700" className="fill-foreground/80">Clinical</text>
        <text x="110" y="316" fontSize="3" fontWeight="700" className="fill-foreground/80">(symptomatic)</text>
        {person(90, 420, "stroke-brand/55", "p-s")}
        <text x="110" y="417" fontSize="3" fontWeight="700" className="fill-foreground/80">Subclinical</text>
        <text x="110" y="426" fontSize="3" fontWeight="700" className="fill-foreground/80">(asymptomatic)</text>
        {person(90, 530, "stroke-brand/40", "p-p")}
        <text x="110" y="527" fontSize="3" fontWeight="700" className="fill-foreground/80">Susceptible/general</text>
        <text x="110" y="536" fontSize="3" fontWeight="700" className="fill-foreground/80">population</text>
        <text x="52" y="562" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the funnel (KYP reading of the printed shape):</text>
        <text x="52" y="571" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">susceptible → subclinical → clinical → overmedicalized</text>

        {/* right flank — shaded block arrows + the Goals callouts (Prevent … + italic eg, example) */}
        {blockArrow(494, 195, "stroke-brand", "a-q")}
        <rect x="648" y="143" width="392" height="104" rx="8" className="fill-card stroke-border" />
        <text x="660" y="159" fontSize="3.1" fontWeight="800" className="fill-foreground">Prevent overtreatment and iatrogenic harm</text>
        <text x="660" y="176" fontSize="2.9" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">eg, discontinuing sulfonylurea after multiple</text>
        <text x="660" y="185" fontSize="2.9" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">hypoglycemic events</text>
        <text x="660" y="204" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the counterintuitive level — the preventive act is SUBTRACTING care (KYP)</text>

        {blockArrow(520, 305, "stroke-brand/75", "a-t")}
        <rect x="648" y="253" width="392" height="104" rx="8" className="fill-card stroke-border" />
        <text x="660" y="269" fontSize="3.1" fontWeight="800" className="fill-foreground">Prevent clinical disease progression and sequelae</text>
        <text x="660" y="278" fontSize="3.1" fontWeight="800" className="fill-foreground">associated morbidity, mortality, and disability</text>
        <text x="660" y="295" fontSize="2.9" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">eg, hemoglobin A1c monitoring to guide treatment</text>
        <text x="660" y="304" fontSize="2.9" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">and prevent complications</text>
        <text x="660" y="323" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the disease exists and shows — prevent its downstream damage (KYP)</text>

        {blockArrow(544, 415, "stroke-brand/55", "a-s")}
        <rect x="648" y="363" width="392" height="104" rx="8" className="fill-card stroke-border" />
        <text x="660" y="379" fontSize="3.1" fontWeight="800" className="fill-foreground">Prevent symptom onset</text>
        <text x="660" y="396" fontSize="2.9" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">eg, glucose screening for type 2 diabetes mellitus</text>
        <text x="660" y="415" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">disease present but SILENT — the screen pulls the diagnosis forward (KYP)</text>

        {blockArrow(572, 525, "stroke-brand/40", "a-p")}
        <rect x="648" y="473" width="392" height="104" rx="8" className="fill-card stroke-border" />
        <text x="660" y="489" fontSize="3.1" fontWeight="800" className="fill-foreground">Prevent disease onset</text>
        <text x="660" y="506" fontSize="2.9" fontStyle="italic" fontWeight="700" className="fill-muted-foreground">eg, healthy diet and exercise to prevent diabetes</text>
        <text x="660" y="525" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">no disease yet — reduce risks or increase immunity (vaccination) (KYP)</text>

        {/* the rule strip */}
        <line x1="52" y1="600" x2="1050" y2="600" className="stroke-border" strokeWidth="1" />
        <text x="52" y="614" fontSize="3.6" fontWeight="800" className="fill-foreground">THE KYP RULE — PRIMARY PREVENTS ONSET · SECONDARY SCREENS THE SILENT · TERTIARY TREATS THE SYMPTOMS · QUATERNARY QUITS THE UNNECESSARY</text>
        <text x="52" y="626" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the level is set by where the patient sits on the funnel — and all four printed examples are diabetes actions: diet/exercise → glucose screening → A1c monitoring → stopping the sulfonylurea</text>
      </g>

      {/* ===== ZONE B — THE SIX PROPHYLAXIS PROTOCOL CARDS ===== */}
      <g>
        <rect x="36" y="662" width="1030" height="700" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="684" fontSize="5.4" fontWeight="800" className="fill-foreground">CHEMOPROPHYLAXIS AND POST-EXPOSURE PROPHYLAXIS — six protocols as cards with timing bands</text>
        <text x="52" y="695" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">columns PROPHYLAXIS / NOTES as printed — the timing bands are KYP coding: amber ≤72-hr window · blue scheduled/serology series · red close-contact · green travel bracket</text>

        {/* CARD 1 — HIV exposure */}
        <g>
          <rect x="52" y="706" width="502" height="192" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="724" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="726.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">1</text>
          <text x="86" y="728" fontSize="4.4" fontWeight="800" className="fill-brand">HIV exposure (sexual, occupational)</text>
          <text x="66" y="748" fontSize="3" fontWeight="700" className="fill-foreground/80">REGIMEN — Tenofovir disoproxil fumarate + emtricitabine +</text>
          <text x="66" y="757" fontSize="3" fontWeight="700" className="fill-foreground/80">(raltegravir or dolutegravir) × 28 days.</text>
          <rect x="66" y="766" width="210" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="777" fontSize="3" fontWeight="800" className="fill-warning">START ≤72 HR · COURSE × 28 DAYS</text>
          <text x="66" y="800" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">NOTES — test HIV at baseline and 6 wk, 3 mo, 6 mo (the four-point</text>
          <text x="66" y="809" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">serology follow-up); the clock outranks the workup — start inside the</text>
          <text x="66" y="818" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">window without waiting for confirmatory testing (KYP)</text>
          <text x="66" y="846" fontSize="2.8" fontWeight="800" className="fill-neural">72 BEFORE 28 — and a three-drug course: 2 NRTIs + an integrase inhibitor (KYP)</text>
        </g>

        {/* CARD 2 — Neisseria meningitidis */}
        <g>
          <rect x="566" y="706" width="502" height="192" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="724" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="726.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">2</text>
          <text x="600" y="728" fontSize="4.4" fontWeight="800" className="fill-brand"><tspan fontStyle="italic">Neisseria meningitidis</tspan> (close contact)</text>
          <text x="580" y="748" fontSize="3" fontWeight="700" className="fill-foreground/80">REGIMEN — Rifampin, ciprofloxacin, or ceftriaxone.</text>
          <rect x="580" y="766" width="206" height="16" rx="5" className="fill-emergency-soft/50 stroke-emergency" />
          <text x="588" y="777" fontSize="3" fontWeight="800" className="fill-emergency">HOUSEHOLD OR CLOSE EXPOSURE</text>
          <text x="580" y="800" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">NOTES — the qualifying exposure is epidemiologic: household or close</text>
          <text x="580" y="809" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">exposure qualifies the contact; any ONE of the three printed agents</text>
          <text x="580" y="818" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">suffices — the exam tests the exposure, not the single drug (KYP)</text>
          <text x="580" y="846" fontSize="2.8" fontWeight="800" className="fill-neural">the RCC trio — Rifampin · Ciprofloxacin · Ceftriaxone for the exposed circle (KYP)</text>
        </g>

        {/* CARD 3 — Rabies exposure */}
        <g>
          <rect x="52" y="906" width="502" height="192" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="924" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="926.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">3</text>
          <text x="86" y="928" fontSize="4.4" fontWeight="800" className="fill-brand">Rabies exposure (animal bite)</text>
          <text x="66" y="948" fontSize="3" fontWeight="700" className="fill-foreground/80">REGIMEN — Wound cleaning + rabies vaccine + rabies</text>
          <text x="66" y="957" fontSize="3" fontWeight="700" className="fill-foreground/80">immune globulin (if not previously immunized).</text>
          <rect x="66" y="966" width="186" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="74" y="977" fontSize="3" fontWeight="800" className="fill-brand">SCHEDULE 0 · 3 · 7 · 14 DAYS</text>
          <text x="66" y="1000" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">NOTES — active vaccine (days 0, 3, 7, 14) + passive globulin covering the</text>
          <text x="66" y="1009" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">antibody window; the globulin is conditional on the PATIENT&apos;s vaccine</text>
          <text x="66" y="1018" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">history — previously immunized patients skip it (as printed)</text>
          <text x="66" y="1046" fontSize="2.8" fontWeight="800" className="fill-neural">0-3-7-14 — CLEAN, VACCINATE, IMMUNIZE (KYP)</text>
        </g>

        {/* CARD 4 — Hepatitis B virus exposure */}
        <g>
          <rect x="566" y="906" width="502" height="192" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="924" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="926.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">4</text>
          <text x="600" y="928" fontSize="4.4" fontWeight="800" className="fill-brand">Hepatitis B virus exposure</text>
          <text x="580" y="948" fontSize="3" fontWeight="700" className="fill-foreground/80">REGIMEN — HBV vaccine ± Hepatitis B immune globulin</text>
          <text x="580" y="957" fontSize="3" fontWeight="700" className="fill-foreground/80">(if source positive and unvaccinated).</text>
          <rect x="580" y="966" width="248" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="588" y="977" fontSize="3" fontWeight="800" className="fill-brand">SOURCE-STEERED · FOLLOW HBV SEROLOGY</text>
          <text x="580" y="1000" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">NOTES — the ± is the logic: the SOURCE&apos;s status and the exposed person&apos;s</text>
          <text x="580" y="1009" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">vaccination status decide whether passive globulin joins the vaccine —</text>
          <text x="580" y="1018" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">then follow HBV serology (the monitoring arm)</text>
          <text x="580" y="1046" fontSize="2.8" fontWeight="800" className="fill-neural">the same vaccine ± globulin grammar as rabies — but serology-steered (KYP)</text>
        </g>

        {/* CARD 5 — Malaria (travel prophylaxis) */}
        <g>
          <rect x="52" y="1106" width="502" height="192" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="1124" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="1126.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">5</text>
          <text x="86" y="1128" fontSize="4.4" fontWeight="800" className="fill-brand">Malaria (travel prophylaxis)</text>
          <text x="66" y="1148" fontSize="3" fontWeight="700" className="fill-foreground/80">REGIMEN — Atovaquone-proguanil, doxycycline, or mefloquine.</text>
          <rect x="66" y="1166" width="286" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="74" y="1177" fontSize="3" fontWeight="800" className="fill-success">START BEFORE TRAVEL · CONTINUE POST-RETURN</text>
          <text x="66" y="1200" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">NOTES — the travel bracket: chemoprophylaxis is not a post-exposure</text>
          <text x="66" y="1209" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">rescue but a drug bracket around the exposure window — the post-return</text>
          <text x="66" y="1218" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">tail covers the incubating liver and erythrocytic stages (KYP)</text>
          <text x="66" y="1246" fontSize="2.8" fontWeight="800" className="fill-neural">BEFORE-AND-AFTER — the bracket must outlast the mosquitoes (KYP)</text>
        </g>

        {/* CARD 6 — Sexual exposure (STI prevention) */}
        <g>
          <rect x="566" y="1106" width="502" height="192" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="1124" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="1126.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">6</text>
          <text x="600" y="1128" fontSize="4.4" fontWeight="800" className="fill-brand">Sexual exposure—sexually transmitted infection prevention</text>
          <text x="580" y="1148" fontSize="3" fontWeight="700" className="fill-foreground/80">REGIMEN — Doxycycline. Give ≤72 hr after sex to prevent syphilis,</text>
          <text x="580" y="1157" fontSize="3" fontWeight="700" className="fill-foreground/80">chlamydia, and gonorrhea in patients with recent bacterial STI.</text>
          <rect x="580" y="1166" width="268" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="588" y="1177" fontSize="3" fontWeight="800" className="fill-warning">GIVE ≤72 HR AFTER SEX · MONITOR Q3-6 MO</text>
          <text x="580" y="1200" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">NOTES — use with regular STI/HIV testing, pre-exposure prophylaxis,</text>
          <text x="580" y="1209" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">vaccines (HPV, Hepatitis A/B), and counseling — a package, not a pill alone</text>
          <text x="580" y="1233" fontSize="3" fontWeight="800" className="fill-emergency">EFFECTIVENESS — ↓ syphilis/chlamydia &gt;70% · ↓ gonorrhea ~50%</text>
          <text x="580" y="1246" fontSize="2.8" fontWeight="800" className="fill-neural">the page&apos;s only effectiveness data — and the other 72-hour window (KYP)</text>
        </g>

        {/* zone B legend */}
        <text x="52" y="1320" fontSize="3" fontWeight="700" className="fill-muted-foreground">timing bands (KYP coding of the printed rules): amber = ≤72-hr window (HIV PEP, doxycycline STI PEP) · blue = scheduled/serology series (rabies 0-3-7-14, HBV serology) · red = close-contact exposure · green = travel bracket</text>
        <text x="52" y="1331" fontSize="3" fontWeight="700" className="fill-muted-foreground">printed symbols carried exactly: × 28 days · ≤72 hr · ± · ↓ syphilis/chlamydia &gt;70% / ↓ gonorrhea ~50% · q3-6 mo · the em-dash in “Sexual exposure—sexually transmitted infection prevention”</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1378" width="1054" height="50" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1393" fontSize="3.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 298 / book 276 (Public Health Sciences — Healthcare Delivery: Disease prevention; Chemoprophylaxis and post-exposure prophylaxis)</text>
        <text x="42" y="1403" fontSize="3.4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the pyramid (graduated bands, one person icon per level, shaded block arrows, red level-name initials, italic gray eg-lines) + the 2-column table; VLM-read at 120dpi, TWO passes (staging-pubh25/vlm-census.txt).</text>
        <text x="42" y="1413" fontSize="3.4" className="fill-muted-foreground">ORIGINAL KYP ADAPTATION ×2 — the funnel layout and the timing-banded cards are KYP&apos;s; every printed label is preserved (4 levels with populations, in-band actions, Prevent-goals, eg-examples; 6 regimens and notes), and both tables are carried verbatim in the note.</text>
        <text x="42" y="1423" fontSize="3.4" className="fill-muted-foreground">ADJUDICATION — print: Primary&apos;s right-side goal is “Prevent disease onset”; “Prevent symptom onset” prints twice, both times in the Secondary row (in-band + callout) — bbox + both VLM passes agree (brief corrected to print).</text>
      </g>
    </svg>
  );
};
