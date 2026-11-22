import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [ { role: 'user', content: [ { type: 'text', text: prompt }, { type: 'image_url', image_url: { url: dataUrl } } ] } ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  return r.choices?.[0]?.message?.content ?? JSON.stringify(r);
}
async function main() {
  const zai = await ZAI.create();
  const jobs = [
    ['m16', 'element-systemic-mycoses-map-light.png', `Study-website SVG QA. THE VISUAL: (1) THE DIMORPHIC RULE strip — 4 wrapped text lines; (2) THE FOUR DISEASES grid — 5 column header chips (DISEASE | ENDEMIC LOCATION | PATHOLOGIC FEATURES | UNIQUE SIGNS/SYMPTOMS | NOTES) then 4 alternating rows (Histoplasmosis, Blastomycosis, Coccidioidomycosis, Paracoccidioidomycosis) with multi-line wrapped cells; (3) an anchors strip; (4) a 2-line footer. Report OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT / CONTENT, then VERDICT: CLEAN or DEFECTS FOUND.`],
    ['m16', 'element-systemic-mycoses-map-dark.png', `Same QA on the DARK theme of the same visual. Report OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT / CONTENT, then VERDICT.`],
    ['m17', 'element-opportunistic-fungi-panel-light.png', `Study-website SVG QA. THE VISUAL: a 2x2 grid of organism cards (Candida albicans | Aspergillus fumigatus // Cryptococcus neoformans | Mucor and Rhizopus spp) each with a bold name line and multi-line wrapped text; an anchors strip; a 2-line footer. Report OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT / CONTENT, then VERDICT.`],
    ['m17', 'element-opportunistic-fungi-panel-dark.png', `Same QA on the DARK theme. Report OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT / CONTENT, then VERDICT.`],
  ];
  for (const [dir, which, prompt] of jobs) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/${dir}/${which}`);
    const reply = await ask(zai, `data:image/png;base64,${png.toString('base64')}`, `You are performing paint QA. Image: ${which}\n${prompt}`);
    const fs = await import('fs');
    fs.writeFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/${dir}/vlm-${which.replace('.png','')}.txt`, `===== ${which} =====\n${reply}\n`);
    console.log(`${dir}/${which}: ` + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(reply.indexOf('VERDICT'))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
