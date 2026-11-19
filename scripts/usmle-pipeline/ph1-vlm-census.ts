import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-250-250.png');
  const desc = `This is page 250 of First Aid for the USMLE Step 1 2026 (pdf 250 = printed book page 228, SECTION II PHARMACOLOGY — PHARMACOKINETICS AND PHARMACODYNAMICS: Enzyme kinetics). pdfimages reports ZERO raster images on the page — everything that is not text should print as VECTOR line art (curve figures whose labels interleave heavily in the text layer: "1/2 Vmax", "1 Vmax", "VmaxVmax", "− Km", "slope = Km Vmax", "Competitive inhibitor", "Noncompetitive inhibitor", "Uninhibited", "Saturation", and the axis labels "1/V", "1/[S]", "Velocity (V)", "[S]" repeated across panels).
Questions:
1) How many curve panels are there, and what does each show? Identify each panel: the Lineweaver-Burk double-reciprocal plots (1/V vs 1/[S] straight lines with Y-intercept 1/Vmax and X-intercept −1/Km, slope = Km/Vmax), the Michaelis-Menten hyperbolic curves (Velocity V vs [S] with the 1/2 Vmax dashed line meeting the curve at Km and the "Saturation" plateau), and the effects-of-inhibition panels (Uninhibited vs Competitive inhibitor (reversible) vs Noncompetitive inhibitor overlaid on the same axes). Say exactly which panels show the three-inhibitor overlay and which show a single uninhibited curve.
2) The inhibition summary table's exact geometry: confirm the columns (Competitive inhibitors, reversible / Competitive inhibitors, irreversible / Noncompetitive inhibitors) and the rows in printed order (Resemble substrate, Bind site, Effect on Vmax, Effect on Km, Pharmacodynamics, Overcome by ↑ [S]) and give the printed cell values for every row (Yes/No, Active/Allosteric, Unchanged/↓, ↑/Unchanged, ↓ potency/↓ efficacy, Yes/No).
3) Confirm the source's own printed typo "Kompetitive inhibitors increase K m." — quote its exact position on the page (which figure/panel it annotates, where it sits relative to the curves and the table) and confirm it is printed with a K exactly as shown.
4) Are there any margin notes or mnemonics printed anywhere on the page? Quote verbatim if present.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
