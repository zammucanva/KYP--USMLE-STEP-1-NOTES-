import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT, then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const jobs = [
    ['m20', 'element-nematode-route-map-dark.png', `Two grid panels (INTESTINAL 7 rows; TISSUE 3 rows) with 4 column chips (ORGANISM | DISEASE | TRANSMISSION | TREATMENT), an anchors strip, a 2-line footer. DARK theme.`],
    ['m21', 'element-cestode-trematode-map-light.png', `Two grid panels (CESTODES 3 rows; TREMATODES 2 rows) with 4 column chips; an ECTOPARASITES panel with 3 two-column rows; a 3-line centered anchors strip (the Parasite-hints directory); a 2-line footer. LIGHT theme.`],
    ['m21', 'element-cestode-trematode-map-dark.png', `Same as previous but DARK theme.`],
  ];
  for (const [dir, which, desc] of jobs) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/${dir}/${which}`);
    const messages: VisionMessage[] = [ { role: 'user', content: [ { type: 'text', text: `${guard}\n\nImage: ${which}. The visual depicts: ${desc}\n\nInspect it now and report.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] } ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    const reply = r.choices?.[0]?.message?.content ?? '';
    writeFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/${dir}/vlm-round2-${which.includes('dark') ? 'dark' : 'light'}.txt`, `===== ${which} (round 2) =====\n${reply}\n`);
    console.log(`${dir}/${which}: ` + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
