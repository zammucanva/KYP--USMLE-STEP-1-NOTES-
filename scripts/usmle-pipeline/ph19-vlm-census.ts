import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph19-page-266.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is a First Aid USMLE pharmacology page about β-blockers. Describe the page structure precisely: (1) the β-blocker drug list at top; (2) the table with APPLICATION / ACTIONS / NOTES-EXAMPLES columns — list EVERY row in printed order with its three cells, noting which cells are empty; (3) the ADVERSE EFFECTS block and the cocaine note; (4) the SELECTIVITY block — every line including the A-to-M and N-to-Z mnemonic lines and the NebivOlol line, preserving capitalization quirks; (5) any margin notes, mnemonics, asterisk footnotes, or images anywhere on the page; (6) the footer. Preserve exact printed spellings like "NonZelective" if that is what prints, and state whether the hypertension row prints "β1receptor" or "β1-receptor", and whether the MI row prints "longterm" or "long-term".' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
