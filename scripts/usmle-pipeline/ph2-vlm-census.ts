import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-251-251.png');
  const desc = `This is page 251 of First Aid for the USMLE Step 1 2026 (pdf 251 = printed book page 229, PHARMACOLOGY — PHARMACOKINETICS AND PHARMACODYNAMICS). pdfimages reports ZERO raster images on this page — the page should be PURE TEXT plus small VECTOR formula/figure elements: the bioavailability F formula with a small AUC plot thumbnail, the Vd/CL/t1/2 fraction formulas, and a small "# of half-lives vs % remaining" table.
Questions:
1) Confirm the page furniture: the section header (PHARMACOLOGY banner, "▶ PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS" heading, book page 229, "SECTION II") and the left-margin sidebar label "Pharmacokinetics".
2) Confirm the BIOAVAILABILITY (F) block: fraction of administered drug reaching systemic circulation; for an IV dose, F = 100%; orally F typically <100% due to incomplete absorption and first-pass metabolism; calculated from the area under the curve in a plot of plasma concentration over time. Is there a small line-graph thumbnail (two curves labeled AUCIV and AUCOral over a Time axis, y-axis Plasma concentration) beside the formula F = [AUCoral x DoseIV]/[Doseoral x AUCIV] x 100? Is the plot vector line art (not a photograph)?
3) Confirm the VOLUME OF DISTRIBUTION (Vd) block: theoretical value that relates drug amount to plasma concentration; liver and kidney disease increase Vd (down protein binding, up Vd); drugs may be distributed in more than one compartment; hemodialysis is most effective for drugs with a low Vd; formula Vd = amount of drug in the body / plasma drug concentration. Confirm the 3-row compartment table: Vd | COMPARTMENT | DRUG TYPES header, with rows Low / Intravascular / Large-charged molecules, plasma protein bound; Medium / ECF / Small hydrophilic molecules; High / All tissues including fat / Small lipophilic molecules, especially if bound to tissue protein.
4) Confirm the CLEARANCE (CL) block: the volume of plasma cleared of drug per unit time; impaired with defects in cardiac, hepatic, or renal function; formula CL = rate of elimination of drug / plasma drug concentration = Vd x Ke (elimination constant).
5) Confirm the HALF-LIFE (t1/2) block: time required to eliminate 1/2 of the drug from the body; steady state is a dynamic equilibrium (rate of elimination = rate of administration); 4-5 half-lives to reach steady state, 3.3 half-lives to reach 90% of steady-state level; formula t1/2 = 0.7 x Vd / CL in first-order elimination. Confirm the small table "# of half-lives 1 2 3 4 / % remaining 50% 25% 12.5% 6.25%".
6) Confirm the AGE-RELATED CHANGES IN PHARMACOKINETICS block: aging alters the passage of drugs through the body; standard doses can result in up plasma concentrations; older patients often require reduced doses to prevent toxicity; the four square-bullet lines: Absorption mostly unaffected; Distribution down total body water (down Vd of hydrophilic drugs, up concentration), up total body fat (up Vd of lipophilic drugs, up half-life); Metabolism down hepatic mass and blood flow (down first-pass metabolism, down hepatic clearance; Phase I decreased, Phase II relatively preserved); Excretion down renal mass and blood flow (down GFR, down renal clearance).
7) Are there ANY photographs, micrographs, margin notes, or mnemonics anywhere on the page (including margins)? Quote verbatim if present.
8) Confirm the footer print line (FAS1_2026_05-Pharmacology.indd 229 + timestamp 12/19/25 8:07 AM).`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
