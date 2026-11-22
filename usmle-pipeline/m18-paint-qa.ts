import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  for (const which of ['element-intestinal-protozoa-panel-light.png', 'element-intestinal-protozoa-panel-dark.png']) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m18/${which}`);
    const prompt = `Paint QA. THE VISUAL: a 3-row grid (Giardia lamblia / Entamoeba histolytica / Cryptosporidium) with 5 column header chips (ORGANISM | DISEASE | TRANSMISSION | DIAGNOSIS | TREATMENT), an anchors strip, and a 2-line footer. Check: does any column's text overrun its column or the panel edge? any clipping at the rightmost TREATMENT column? overlaps? contrast? alignment? End with VERDICT: CLEAN or VERDICT: DEFECTS FOUND.`;
    const messages: VisionMessage[] = [ { role: 'user', content: [ { type: 'text', text: prompt }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] } ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    const reply = r.choices?.[0]?.message?.content ?? '';
    const fs = await import('fs');
    fs.writeFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m18/vlm-${which.includes('dark') ? 'dark' : 'light'}.txt`, `===== ${which} =====\n${reply}\n`);
    console.log(which + ': ' + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
