/* PH11 paint-qa pass 3 — zoomed (3x) VLM readability adjudication of the
 * dark-theme crops that pass 2 flagged ("very dark gray on near-black"
 * secondary text). Pass 2's full-page verdict may have been a downscaling
 * artifact (tiny 3.2–4.6px labels at 1:1); these crops test the actual
 * glyph pixels. Output: staging-ph11/vlm-paint-qa-crops.txt */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';

async function main() {
  const zai = await (ZAI as any).create();
  const guard = `IMPORTANT: This is a VISUAL INSPECTION task. Do NOT write code. Look at the image and answer ONLY: (1) list every text label you can read; (2) is any label unreadable, too low-contrast against its background, colliding with another label, or cut off? (3) final line exactly "VERDICT: READABLE" or "VERDICT: UNREADABLE" (with the list of unreadable labels).`;
  const jobs = [
    ['/tmp/ph11-crop-dark-periphery.png', 'dark PERIPHERY panel (stimulus chips, membrane, vanilloid receptor, Ca2+ influx, Na+ channel, ACTIVATION spark, THE SIGNAL IS BORN)'],
    ['/tmp/ph11-crop-dark-station1.png', 'dark TRANSDUCTION station card (header band, CONVERT verb, two job lines, BLOCKED BY label, six drug chips)'],
    ['/tmp/ph11-crop-dark-neuro.png', 'dark NEUROPATHIC PAIN text block (four printed lines + three contrast lines)'],
    ['/tmp/ph11-crop-dark-footer.png', 'dark footer fine print (six lines)'],
    ['/tmp/ph11-crop-light-station1.png', 'light TRANSDUCTION station card (same content, control)'],
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
  writeFileSync('.usmle-pipeline-cache/staging-ph11/vlm-paint-qa-crops.txt', log, 'utf8');
  console.log('saved staging-ph11/vlm-paint-qa-crops.txt');
}
main().catch((e) => { console.error(e); process.exit(1); });
