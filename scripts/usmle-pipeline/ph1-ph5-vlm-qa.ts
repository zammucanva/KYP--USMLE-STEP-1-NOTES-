import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

const QA = "/home/z/my-project/kyp-usmle-notes/docs/qa";

const LAYOUTS: Record<string, { name: string; desc: string }> = {
  ph1: {
    name: "EnzymeKineticsMap",
    desc: `Intended layout: FOUR panels — (1) the Michaelis-Menten hyperbola on original KYP axes (Velocity V vs [S], the 1/2 Vmax dashed line meeting the curve at Km, the Vmax plateau, a three-inhibitor overlay), (2) the Lineweaver-Burk double-reciprocal with three lines (competitive-reversible crossing at the shared Y-intercept, noncompetitive sharing the X-intercept), (3) the four reading rules (closer to 0 on Y = higher Vmax; closer to 0 on X = higher Km; higher Km = lower affinity; reversible competitive inhibitors cross, noncompetitive do not) + the Kompetitive-typo strip, (4) the verbatim inhibition table (competitive reversible / competitive irreversible / noncompetitive across; resemble substrate, overcome by increased S, bind site, effect on Vmax, effect on Km, pharmacodynamics rows) with the highlighted pharmacodynamics row.`,
  },
  ph2: {
    name: "PkParametersMap",
    desc: `Intended layout: a four-panel linked parameter map — F (bioavailability: the AUC thumbnail with AUCIV/AUCOral curves over time, the dose-corrected formula, the oral <100% two-taxes note), Vd (the formula + three-compartment ladder Low/Medium/High with drug types + liver/kidney ↑Vd and hemodialysis-low-Vd rules), CL (clearance formula + organ boxes), t1/2 (the 0.7×Vd/CL formula + the halving ladder 50/25/12.5/6.25% + the 3.3→90% and 4–5→steady-state badges), closed by a full-width AGING band (absorption/distribution/metabolism/excretion columns with direction arrows and the phase-I-lost-first note).`,
  },
  ph3: {
    name: "MetabolismPhaseMap",
    desc: `Intended layout: an original KYP redraw of the metabolism flow in four zones — the pipeline (a lipophilic-drug chip → the CYP450-dependent Phase I reactor with Reduction/Oxidation/Hydrolysis chutes + a reactive-oxygen warning flag → the Phase II conjugation station with the four MAGS chutes [Methylation, Acetylation, Glucuronidation, Sulfation] and the dashed EXCEPT-ACETYLATED chip → the dual excretion terminal Serum [urine, sweat] / bile [stool], plus a dashed polar-drugs bypass lane skipping Phase I); a Phase I-vs-II comparison strip; the two clinical-rule cards (geriatric phase-I-loss; slow-acetylator/isoniazid); a FORKS-NOT-A-LADDER banner.`,
  },
  ph4: {
    name: "EliminationKineticsMap",
    desc: `Intended layout: mirror panels — LEFT zero-order (a straight linear concentration-vs-time line with constant 2 U/h slope chips, the lengthening-then-shortening t1/2 brackets First > Second > Third, the PEA drug chips [Phenytoin, Ethanol, Aspirin], a saturated-enzyme glyph) vs RIGHT first-order (an exponential decay curve with halving slopes 4 → 2 → 1 → 0.5 U/h, equal t1/2 brackets, a most-drugs badge, the flow-dependent note); a center fork banner (constant AMOUNT vs constant FRACTION); a saturation-crossover panel (the Michaelis-Menten curve with the Km marker and the aspirin/phenytoin/ethanol chips showing how first-order flips to zero-order at toxic concentration).`,
  },
  ph5: {
    name: "UrinePhTrappingMap",
    desc: `Intended layout: FOUR bands — (1) the tubular trapping map (a peritubular-blood strip above lumen cards; neutral RCOOH/RNH2 arrowed back across the wall = reabsorbed; ionized RCOO–/RNH3+ trapped in the lumen; NaHCO3-alkalinize vs NH4Cl-acidify treatment chips), (2) the ionization-vs-pH curve redrawn (weak-acid sigmoid rising, weak-base falling, the 50% crossing at pH = pKa, the pKa 9.2 marker, more-acidic/more-basic annotations), (3) the TCA exception card (sodium bicarbonate treats the sodium-channel cardiac toxicity but does NOT accelerate elimination), (4) the dosage panel (loading dose Cp×Vd/F vs maintenance dose Cp×CL×τ/F cards, the Cp/τ definitions strip, the renal/liver-disease rule and the steady-state rule).`,
  },
};

const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;

async function main() {
  const zai = await ZAI.create();
  for (const pid of Object.keys(LAYOUTS)) {
    const { name, desc } = LAYOUTS[pid];
    const light = readFileSync(`${QA}/${pid}/element-crop-light-v2.png`);
    const dark = readFileSync(`${QA}/${pid}/element-crop-dark.png`);
    const q = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "${name}" for a USMLE pharmacology study-note page. ${desc}
Questions:
1) TEXT CLIPPING: Is any text cut off mid-word, overlapping another text, or escaping its card/panel/band boundary? Name any offender verbatim.
2) STRUCTURE: Are all the intended panels/bands present, inside their borders, and non-overlapping? (Ignore the app's floating Search pill.)
3) READABILITY: Are the formulas, drug names, and curve labels readable?
4) THEME: In the dark crop, any dark-on-dark or invisible element?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
    const messages: VisionMessage[] = [
      { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${q}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${light.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${dark.toString('base64')}` } } ] },
    ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    console.log(`\n########## ${pid} ${name} ##########\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
