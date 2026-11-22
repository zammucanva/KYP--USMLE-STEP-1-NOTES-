import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const jobs = [
    ['m20', 'element-nematode-route-map-light.png', `Paint QA. THE VISUAL: two grid panels (INTESTINAL with 7 organism rows; TISSUE with 3 rows), 4 column header chips each (ORGANISM | DISEASE | TRANSMISSION | TREATMENT), an anchors strip, a 2-line footer. Check: column overruns (esp. rightmost TREATMENT), overlaps, clipping, contrast, alignment. VERDICT: CLEAN or DEFECTS FOUND.`],
    ['m20', 'element-nematode-route-map-dark.png', `Same QA on the dark theme. VERDICT.`],
    ['m21', 'element-cestode-trematode-map-light.png', `Paint QA. THE VISUAL: two grid panels (CESTODES: 3 rows; TREMATODES: 2 rows) with 4 column chips each; an ECTOPARASITES panel with 3 two-column rows (disease left / treatment right); a long anchors strip (the 9-row Parasite-hints directory); a 2-line footer. Check: column overruns, the anchors strip's 3 centered lines, overlaps, clipping, contrast, alignment. VERDICT.`],
    ['m21', 'element-cestode-trematode-map-dark.png', `Same QA on the dark theme. VERDICT.`],
  ];
  for (const [dir, which, prompt] of jobs) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/${dir}/${which}`);
    const messages: VisionMessage[] = [ { role: 'user', content: [ { type: 'text', text: prompt }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] } ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    const reply = r.choices?.[0]?.message?.content ?? '';
    writeFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/${dir}/vlm-${which.includes('dark') ? 'dark' : 'light'}.txt`, `===== ${which} =====\n${reply}\n`);
    console.log(`${dir}/${which}: ` + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
