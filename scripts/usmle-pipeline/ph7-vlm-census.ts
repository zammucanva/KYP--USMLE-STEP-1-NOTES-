import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-255-255.png');
  const desc = `This is pdf page 255 of First Aid for the USMLE Step 1 2026 (= printed book page 233, SECTION II PHARMACOLOGY — PHARMACOKINETICS AND PHARMACODYNAMICS: Receptor binding + Therapeutic index). pdfimages reports ZERO raster images on the page — everything that is not plain text should print as VECTOR line art (three receptor-binding dose-response curve panels whose labels interleave in the text layer: "100", "50", "0" axis ticks x3 panels, "Agonist" x3, the letter chips A/B/C, "Reduced efficacy" x2, "Reduced potency", "Agonist + competitive antagonist", "Agonist + noncompetitive antagonist", "Partial agonist" x2, "Independent potency", "Agonist dose" x3).
Questions:
1) The receptor-binding figure's exact geometry: confirm there are THREE panels with white-on-color letter chips A, B, C. For EACH panel say: the y-axis ticks (100/50/0), the x-axis label (Agonist dose), which curve is solid vs dashed, and every annotation printed inside it. Specifically confirm: panel A = the agonist curve alone reaching 100; panel B = "Agonist + competitive antagonist" (right-shifted curve that still reaches 100 = reduced potency) plus a dashed "Partial agonist" curve; panel C = "Agonist + noncompetitive antagonist" (curve with a lower plateau = reduced efficacy) plus a dashed "Partial agonist" curve. Say exactly where each of the two "Reduced efficacy" labels, the "Reduced potency" label, and the "Independent potency" label sits (which panel, pointing at which curve).
2) The table below the figure: confirm the columns (AGONIST WITH / POTENCY / EFFICACY / REMARKS / EXAMPLE) and all 4 rows in printed order — A Competitive antagonist; B Noncompetitive antagonist; C Partial agonist (alone); Inverse agonist (alone) — and give every printed cell (potency, efficacy, remarks, example) verbatim.
3) The Therapeutic index block: confirm the TI = TD50 / ED50 fraction print (TD50 median toxic dose over ED50 median effective dose), the cumulative-response figure (Efficacy and Toxicity curves, % of patients responding y-axis, Log (drug concentration) x-axis, ED50 and TD50 marked), the "TITE: Therapeutic Index = TD50 / ED50." line, the therapeutic-window sentence, the low-TI drug list with the "Warning! These drugs are lethal!" line, and the LD50 sentence. Note whether TITE or the Warning line prints in color (red/blue) or bold.
4) Are there any margin notes or mnemonics printed anywhere on the page besides the TITE line itself? Quote verbatim if present.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
