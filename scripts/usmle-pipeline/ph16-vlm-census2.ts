import ZAI from '/home/z/.bun/install/global/node_modules/z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph16-pilo-crop-261.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is a 200-dpi crop of a First Aid table (columns: DRUG | ACTION | APPLICATIONS). Focus ONLY on the PILOCARPINE row. Read the row cell by cell: (a) the exact left edge x-position where the ACTION column ends and the APPLICATIONS column begins (the vertical table rule); (b) every line of text in the ACTION cell, in order; (c) every line of text in the APPLICATIONS cell, in order. In particular: which column does the phrase "Potent stimulator of sweat, tears, and saliva" sit in — ACTION or APPLICATIONS? And does the mnemonic in the ACTION cell print "pilow" or "pillow" (spell it exactly as printed)? Also report whether the ACTION cell prints "bloodbrain" (no hyphen) or "blood-brain".' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0].message?.content));
}
main();
