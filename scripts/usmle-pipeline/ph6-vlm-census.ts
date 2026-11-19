import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-254-254.png');
  const desc = `This is page 254 of First Aid for the USMLE Step 1 2026 (pdf 254 = printed book page 232, SECTION II PHARMACOLOGY — PHARMACOKINETICS AND PHARMACODYNAMICS: "Efficacy vs potency"). pdfimages reports ZERO raster images on this page — the page should be pure text plus TWO VECTOR dose-response figures whose labels interleave in the text layer ("100", "Emax Drug A", "Δ Efficacy", "50", "Emax Drug B", "0", "Log (drug dose)", "Drug A", "Drug B", "Δ Potency", "EC = Effective concentration", "EC50" twice, "% Maximal effect").
Questions:
1) Confirm the topic heading ("Efficacy vs potency") and the two definition blocks: the Efficacy block ("Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or low potency). Partial agonists have less efficacy than full agonists.") and the Potency block ("Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to efficacy (ie, potent drugs can have high or low efficacy).").
2) Describe the FIRST VECTOR FIGURE (titled "RELATIVE EFFICACY") topology exactly: a graph with y-axis "% Maximal effect" scaled 0 to 100 (ticks 0, 50, 100), x-axis "Log (drug dose)"; TWO sigmoid curves — Drug A plateauing at 100% (labeled "Emax Drug A") and Drug B plateauing at 50% (labeled "Emax Drug B") — with a vertical bracket or annotation "Δ Efficacy" marking the difference between the two plateau heights. Do both curves sit at the same horizontal position (same EC50), with only the ceiling differing?
3) Describe the SECOND VECTOR FIGURE (titled "RELATIVE POTENCY") topology exactly: same axes ("% Maximal effect" 0-100, x-axis "Log (drug dose)"); TWO sigmoid curves — Drug A shifted LEFT of Drug B — BOTH reaching the SAME maximal effect (100%), with Drug A needing less drug; two "EC50" markers (one per curve) on the x-axis, a horizontal bracket or annotation "Δ Potency" marking the horizontal separation, and a note "EC = Effective concentration". Which curve is left-shifted, and do both reach the same ceiling?
4) Where exactly do the labels "Δ Efficacy" and "Δ Potency" sit relative to their curves, and how is the EC50 marker drawn (tick, dashed line, label)?
5) Any margin notes or mnemonics anywhere on the page (including margins)? Quote verbatim if present.
6) Confirm the footer print line (FAS1_2026_05-Pharmacology.indd 232 + timestamp) and any other page furniture.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
