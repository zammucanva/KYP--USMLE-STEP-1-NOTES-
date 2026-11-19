import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/ph6/element-crop-light-v2.png');
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages: [{ role: 'user', content: [ { type: 'text', text: 'Describe this study visual in one sentence.' }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] }], thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? 'EMPTY');
}
main().catch((e) => { console.error('VLM FAIL:', e?.message?.slice(0,200)); process.exit(1); });
