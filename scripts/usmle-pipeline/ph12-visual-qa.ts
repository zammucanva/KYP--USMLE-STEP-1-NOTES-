import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph12-map-light.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is a draft render of an original KYP educational SVG diagram about micturition control (bladder pharmacology). QA pass: (1) List every text label you can read — is ANY text overlapping other text, cut off, or outside its containing box? (2) Do the leader lines/arrows point sensibly (nerve lines reaching the bladder/sphincters, receptor chips with lines to their targets)? (3) Are the numbered circles 1/2/3 visible next to M3-receptor, beta3-receptor, alpha1-receptor chips and on the four drug cards? (4) Any rendering artifacts (stray shapes, unreadable text, elements colliding)? Be specific and critical.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
