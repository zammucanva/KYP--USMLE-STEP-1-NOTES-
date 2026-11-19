import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const a = readFileSync('/tmp/p16-top-left.png');
  const b = readFileSync('/tmp/p16-top-right.png');
  const q = `These are the TOP BANDS of a 2x dark render of "OncogeneTumorSuppressorMap" (image 1 = left portion, image 2 = right portion). Find the TUMOR SUPPRESSOR rule panel (red, with two X-crossed allele squares and an RB1 example). Read its text line by line — especially any line about the inherited first hit and the somatic second hit (Knudson 2-hit) and the RB1/retinoblastoma example. Also read the ONCOGENES rule panel lines. Answer: each line COMPLETE or TRUNCATED, then final PASS/FAIL.`;
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages: [{ role: 'user', content: [ { type: 'text', text: q }, { type: 'image_url', image_url: { url: `data:image/png;base64,${a.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${b.toString('base64')}` } } ] }], thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
