import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const b = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p16/element-crop-2x-dark-right.png');
  const q = `This is a 2x dark render that contains the RIGHT HALF of the KYP visual "OncogeneTumorSuppressorMap" somewhere in the frame (it may be offset; parts of the page above the visual may also appear). TASK: LOCATE the TUMOR SUPPRESSOR rule panel — a RED-themed panel whose title should read approximately "TUMOR SUPPRESSOR GENES — loss of function (the TWO-hit rule)" containing two allele squares each marked with an X, small gray lines "often the inherited allele" and "the somatic second hit", a red line "(the Knudson 2-hit hypothesis)", and gray example lines about RB1 — germline hit 1 + somatic hit 2, bilateral early retinoblastoma, osteosarcoma later. Search the WHOLE image. Then read every line of that panel and answer: (1) panel found yes/no + where; (2) each line verbatim, COMPLETE or TRUNCATED; (3) PASS or FAIL.`;
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages: [{ role: 'user', content: [ { type: 'text', text: q }, { type: 'image_url', image_url: { url: `data:image/png;base64,${b.toString('base64')}` } } ] }], thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
