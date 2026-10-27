import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what you see. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p-225-figure.png');
  const desc = `This is the LOWER HALF of page 225 (book 203) of First Aid for the USMLE Step 1 2026 — the CELL INJURY timeline figure and the ferroptosis text. Focus ONLY on: (a) the timeline figure with its cells and arrows; (b) every text label physically inside or adjacent to the figure box; (c) the ferroptosis heading and paragraph below.
Questions:
1) List EVERY text label that physically appears INSIDE the figure region, in left-to-right order.
2) Does the word 'Ferroptosis' appear INSIDE the figure (eg, as a label on a branch or near a mitochondrion drawing), or only BELOW the figure as the paragraph heading? Be precise about its physical location.
3) The timeline's arrows: what colors are they (green double-headed between normal and the reversible cell; red from reversible to irreversible; black to cell death)? Where exactly does the 'Irreversible' and 'Reversible' text sit (above the arrows? in a legend?)?
4) What does the final 'Cell death (necrosis)' element look like (a fragmented cell drawing?)? Is there any additional annotation near it?`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
