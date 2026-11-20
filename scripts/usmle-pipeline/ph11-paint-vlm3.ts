/* PH11 paint-qa pass 4 — CONTROL adjudication: the PROMOTED ph10 visual
 * (AchReceptorMap, QA-passed in the real browser sweep) rendered through
 * the identical standalone 1x pipeline + 3x crops, asked the same
 * readability question. Purpose: calibrate whether pass-2/pass-3
 * "UNREADABLE" verdicts are a real defect in pharm-p11.tsx or an artifact
 * of the 1x standalone render + VLM resolution on 3.6–4.6px labels (the
 * ph-batch font-size convention). Output: staging-ph11/vlm-paint-qa-control.txt */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';

async function main() {
  const zai = await (ZAI as any).create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code. Look at the image and answer ONLY: (1) list every text label you can read; (2) is any label unreadable, too low-contrast against its background, colliding with another label, or cut off? (3) final line exactly "VERDICT: READABLE" or "VERDICT: UNREADABLE" (with the list of unreadable labels).`;
  const jobs = [
    ['/tmp/ph11-ctrl-crop-light-chips.png', 'CONTROL light — the NN and NM subtype chips of the acetylcholine-receptor map (body text ~4.2px source size)'],
    ['/tmp/ph11-ctrl-crop-dark-chips.png', 'CONTROL dark — the NN and NM subtype chips of the acetylcholine-receptor map'],
    ['/tmp/ph11-ctrl-crop-dark-footer.png', 'CONTROL dark — the footer fine print of the acetylcholine-receptor map (4px source size)'],
  ] as const;
  let log = '';
  for (const [file, what] of jobs) {
    const b64 = readFileSync(file).toString('base64');
    const r = await zai.chat.completions.createVision({
      model: 'glm-4.6v',
      messages: [{ role: 'user', content: [
        { type: 'text', text: `${guard}\n\nThe image is a 3x-zoomed crop of a pharmacology diagram (${what}). Inspect it now.` },
        { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
      ]}],
      thinking: { type: 'disabled' },
    });
    const reply = String(r.choices?.[0]?.message?.content ?? '');
    log += `===== ${file} — ${what} =====\n${reply}\n\n`;
    console.log(`${file}: ` + (reply.includes('VERDICT: READABLE') ? 'READABLE' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
  writeFileSync('.usmle-pipeline-cache/staging-ph11/vlm-paint-qa-control.txt', log, 'utf8');
  console.log('saved staging-ph11/vlm-paint-qa-control.txt');
}
main().catch((e) => { console.error(e); process.exit(1); });
