import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  for (const which of ['element-blood-tissue-protozoa-map-light.png', 'element-blood-tissue-protozoa-map-dark.png']) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m19/${which}`);
    const prompt = `Paint QA (round 1). THE VISUAL: three stacked grid panels (CNS: Toxoplasma gondii / Naegleria fowleri / Trypanosoma brucei; HEMATOLOGIC: Plasmodium + Babesia; OTHERS: Trypanosoma cruzi / Leishmania / Trichomonas), each with 5 column header chips (ORGANISM | DISEASE | TRANSMISSION | DIAGNOSIS | TREATMENT), an anchors strip, and a 2-line footer. Check specifically: (a) any column's text overrunning its column or the panel edge (esp. the rightmost TREATMENT column); (b) overlaps; (c) clipping; (d) contrast; (e) alignment. End with VERDICT: CLEAN or VERDICT: DEFECTS FOUND.`;
    const messages: VisionMessage[] = [ { role: 'user', content: [ { type: 'text', text: prompt }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] } ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    const reply = r.choices?.[0]?.message?.content ?? '';
    writeFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m19/vlm-${which.includes('dark') ? 'dark' : 'light'}.txt`, `===== ${which} =====\n${reply}\n`);
    console.log(which + ': ' + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
