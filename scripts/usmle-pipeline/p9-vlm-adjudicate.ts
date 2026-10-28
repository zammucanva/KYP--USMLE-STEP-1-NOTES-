import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a HIGH-RESOLUTION TEXT-READING ADJUDICATION task. Do NOT write code. Read the rendered text at this 3x zoom, line by line, and transcribe EXACTLY what you see. Keep it factual.`;
  const png = readFileSync('/tmp/p9-strip-3x.png');
  const png2 = readFileSync('/tmp/p9-s4-3x.png');
  const desc = `These are 3x-zoom crops of two regions of a rendered study-notes visual. IMAGE 1 should contain a "WHERE IT HAPPENS" card with the lines: "WHERE IT HAPPENS", "Extravasation predominantly occurs at POSTCAPILLARY VENULES —", "the slow, permeable stretch where margination can begin.", "The four stations in one line: roll (selectins) → bind (integrins) →", "squeeze (PECAM-1) → walk (chemotaxis) — each pair a handshake", "between a leukocyte marker and a vasculature marker." IMAGE 2 should contain a chemotactic-gradient card with the lines: "chemotactic gradient", "C5a · IL-8 · LTB4 · 5-HETE", "kallikrein · PAF ·", "N-formylmethionyl peptides", "guiding to the injury".
Questions:
1) Transcribe every line of IMAGE 1 verbatim. Is any line cut off mid-word or does any line run past the card's right edge?
2) Transcribe every line of IMAGE 2 verbatim. Is any line cut off mid-word or does any line run past the card's right edge?
3) VERDICT for each image: TRUNCATED or COMPLETE.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nRead both images now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
