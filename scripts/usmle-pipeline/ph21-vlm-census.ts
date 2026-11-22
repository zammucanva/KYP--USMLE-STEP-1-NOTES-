import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph21-page-268.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is a First Aid USMLE pharmacology page (book page 246) titled "Ingested seafood toxins" (top) and "Plant toxins" (bottom), under the banner PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS. Describe the page COMPLETELY and PRECISELY: (1) The intro sentence under "Ingested seafood toxins". (2) The seafood table: list its column headers exactly, then EVERY row in PRINTED ORDER (top to bottom) with ALL FIVE cells per row (TOXIN / SOURCE / ACTION / SYMPTOMS / TREATMENT) — I expect rows for Histamine (scombroid poisoning), Tetrodotoxin (Pufferfish), Ciguatoxin (Reef fish) but REPORT ONLY WHAT ACTUALLY PRINTS — tell me if there is any shellfish/saxitoxin row or any other row. Note exactly where the phrase "Frequently misdiagnosed as fish allergy" prints (which cell or below the table). (3) The "Plant toxins" table: does it repeat the column headers? List EVERY row in PRINTED ORDER (top to bottom) with ALL FIVE cells per row — I expect rows for Grayanotoxin (mad honey), Aconitine alkaloids, Cardiac glycosides, Coniine (hemlock), Atropine/scopolamine, but REPORT ONLY WHAT PRINTS — tell me if any other row (ricin, cyanogenic, water hemlock) prints. (4) For the Grayanotoxin action cell, state exactly whether it prints "Na+ channels" or "Na channels". (5) Any margin notes, mnemonics, red text, highlighted cells, color furniture anywhere on the page. (6) The footer slug at the bottom. Preserve exact printed spellings and note any superscripts or special characters.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
