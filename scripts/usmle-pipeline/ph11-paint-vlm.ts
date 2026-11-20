/* PH11 paint-qa pass 2 — VLM inspection of the standalone light/dark
 * renders (screenshots from agent-browser). Guard prompt follows the
 * m22-paint-qa.ts pattern: OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT +
 * VERDICT line. Output saved to staging-ph11/vlm-paint-qa.txt */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';

async function main() {
  const zai = await (ZAI as any).create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the image. Look at the image and write a short prose QA report covering OVERLAPS / CLIPPING / CONTRAST / ALIGNMENT (are any labels colliding, cut off, overflowing their chips or cards, or unreadable against their background?), then a final line that is exactly "VERDICT: CLEAN" or "VERDICT: DEFECTS FOUND" (with the defect list).`;
  const desc = `The image is a wide medical-pharmacology diagram titled "Pain transmission & analgesic targets — four stations, ten drug classes". Expected structure: a header bar; THE NOCICEPTIVE RELAY zone with (left) a PERIPHERY panel containing three stimulus chips (mechanical/thermal/chemical), a membrane with a vanilloid receptor channel, a Ca2+ INFLUX arrow, an Na+ CHANNEL with an ACTIVATION spark and a "THE SIGNAL IS BORN" zigzag; (middle) two fiber lanes — Aδ FIBERS solid arrow labeled SHARP, ACUTE PAIN fast lane, and C FIBERS dashed arrow labeled DULL, THROBBING, CHRONIC PAIN slow lane; (right) a CNS panel with a brain ellipse, a MODULATION—TUNE box and a PERCEPTION—FEEL box; below, four station cards in a row (1 TRANSDUCTION with 6 drug chips, 2 TRANSMISSION with 3, 3 MODULATION with 4, 4 PERCEPTION with 5) joined by arrows, with count chips (SIX/THREE/FOUR/FIVE blocker classes) beneath; a NEUROPATHIC PAIN zone with a printed-text block, a nerve glyph with five Na+ channel rectangles under an UPREGULATION bracket with sparks and a zigzag, a NO STIMULUS NEEDED flag, and a DIABETIC PERIPHERAL NEUROPATHY example card; an OVERLAP LEDGER zone with a 6-row x 4-column matrix of filled dots/dashes; and a fine-print footer with 6 lines.`;
  let log = '';
  for (const [file, theme] of [['/tmp/ph11-visual-light.png', 'light'], ['/tmp/ph11-visual-dark.png', 'dark']] as const) {
    const b64 = readFileSync(file).toString('base64');
    const r = await zai.chat.completions.createVision({
      model: 'glm-4.6v',
      messages: [{ role: 'user', content: [
        { type: 'text', text: `${guard}\n\nImage: ${file} (${theme} theme). ${desc}\n\nInspect it now and report.` },
        { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
      ]}],
      thinking: { type: 'disabled' },
    });
    const reply = String(r.choices?.[0]?.message?.content ?? '');
    log += `===== ${file} (${theme}) =====\n${reply}\n\n`;
    console.log(`${theme}: ` + (reply.includes('VERDICT: CLEAN') ? 'CLEAN' : reply.slice(Math.max(0, reply.indexOf('VERDICT')))));
  }
  writeFileSync('.usmle-pipeline-cache/staging-ph11/vlm-paint-qa.txt', log, 'utf8');
  console.log('saved staging-ph11/vlm-paint-qa.txt');
}
main().catch((e) => { console.error(e); process.exit(1); });
