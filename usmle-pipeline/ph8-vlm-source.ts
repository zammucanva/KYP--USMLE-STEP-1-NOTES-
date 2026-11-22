import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a SOURCE-PAGE INSPECTION task for a pharmacology textbook page (Receptor binding, book 233). Do NOT write code, HTML, or CSS. Describe exactly what you see, factually and terse.`;
  const png = readFileSync('/tmp/ph8_page-255.png');
  const desc = `This is a rendered PDF page: "Receptor binding" with THREE dose-response curve panels above a table ("AGONIST WITH | POTENCY | EFFICACY | REMARKS | EXAMPLE"), followed by a "Therapeutic index" section (IGNORE the Therapeutic index section entirely).
Answer these questions about the THREE curve panels only:
1) PANEL 1 (leftmost): Which curve labels appear (exact wording), where does each curve sit (left/right), what letter annotation appears (A?) and what effect label ("Reduced potency"?) appears, and where? Does the right curve reach the same 100 ceiling as the left curve (parallel right shift)?
2) PANEL 2 (middle): Which curve labels appear, what letter annotation (B?) and effect label ("Reduced efficacy"?), and does the second curve have a LOWER ceiling (Emax) at roughly the same left-right position?
3) PANEL 3 (rightmost): How MANY curves are drawn? List every text label in that panel verbatim ("Agonist", "Reduced efficacy", "Partial agonist", "Partial C agonist", "Independent potency" — which of these appear and what do they label?). Does one partial agonist curve share the full agonist's EC50 position while another is shifted? Where exactly is the letter C placed?
4) Do all three panels share the same y-axis (100/50/0) and the x-axis label "Agonist dose"?
5) Any other annotation, arrow, or mark in the three panels I did not ask about?`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the capture now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
