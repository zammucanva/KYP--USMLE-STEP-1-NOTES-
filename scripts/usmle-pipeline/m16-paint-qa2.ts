import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  for (const which of ['element-systemic-mycoses-map-light.png', 'element-systemic-mycoses-map-dark.png']) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m16/${which}`);
    const prompt = `Paint QA (round 2, after fixes: the NOTES column was rebalanced wider and the FA mnemonics removed from the visual's cells). THE VISUAL: (1) THE DIMORPHIC RULE strip; (2) THE FOUR DISEASES grid — 5 column header chips (DISEASE | ENDEMIC LOCATION | PATHOLOGIC FEATURES | UNIQUE SIGNS/SYMPTOMS | NOTES) then 4 rows (Histoplasmosis, Blastomycosis, Coccidioidomycosis, Paracoccidioidomycosis); (3) an anchors strip; (4) a 2-line footer. Check specifically: (a) does any text in the rightmost NOTES column run past its column or get cut off? (b) any typos in the rendered text? (c) overlaps/clipping/contrast/alignment overall. End with VERDICT: CLEAN or VERDICT: DEFECTS FOUND.`;
    const messages: VisionMessage[] = [ { role: 'user', content: [ { type: 'text', text: prompt }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] } ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    const reply = r.choices?.[0]?.message?.content ?? '';
    const fs = await import('fs');
    fs.writeFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m16/vlm-round2-${which.includes('dark') ? 'dark' : 'light'}.txt`, `===== ${which} (round 2) =====\n${reply}\n`);
    console.log(which + ': ' + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
