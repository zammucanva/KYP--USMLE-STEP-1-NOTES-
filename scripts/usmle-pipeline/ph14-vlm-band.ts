/* PH14 bottom-band adjudication — 2x-zoomed VLM read of the Gs/Gi panel's
 * bottom band (GS/Gi proteins, ATP, Cyclic AMP, Protein kinase A, Ca2+,
 * Myosin light-chain kinase). */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, appendFileSync } from 'fs';

async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph14-bot-band.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: `This is a 2x-zoomed crop of the BOTTOM BAND of the lower panel of a First Aid G-protein figure. It should contain: two G proteins (GS protein on the left, Gi protein on the right), ATP, Cyclic AMP, Protein kinase A, a Ca2+ label, and "Myosin light-chain kinase (smooth muscle contraction)". Answer precisely: (1) Which labels are actually visible? (2) The Ca2+ label near Protein kinase A: is there an arrow between Ca2+ and Protein kinase A, and WHICH WAY does it point (from PKA to Ca2+, or from Ca2+ to PKA)? Is there an up-arrow ↑ printed next to Ca2+? Is the arrow stimulatory (pointed) or inhibitory (blunt)? (3) Between Protein kinase A and Myosin light-chain kinase: is there an arrow, which direction, pointed or blunt/inhibitory (⊖)? (4) Between Cyclic AMP and Protein kinase A: arrow direction and type? (5) Any ⊕ or ⊖ circled symbols — where exactly? (6) What shape/color is each element (ATP, Cyclic AMP, Protein kinase A)?` },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  appendFileSync('.usmle-pipeline-cache/staging-ph14/vlm-census.txt',
    '\n\n===== PH14 VLM ADJUDICATION 5 — 440 DPI-EQ BOTTOM BAND (PKA / Ca2+ / MLCK) =====\n\n' +
    String(r.choices?.[0]?.message?.content));
  console.log('appended adjudication 5');
}

main().catch((e) => { console.error('FAILED:', e?.message || e); process.exit(1); });
