import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph22-page-269.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 269 / printed book page 247, under the banner "PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS". It carries TWO tables. Describe the page structure precisely and completely: (1) the top table titled "Specific toxicity treatments" with columns TOXIN / TREATMENT — list EVERY row in PRINTED order with BOTH cells verbatim (acetaminophen, AChE inhibitors, antimuscarinic/anticholinergic agents, arsenic, and every row down to warfarin, including the heparin row); note which entries print in red; (2) the bottom table titled "Drug reactions—cardiovascular" with columns DRUG REACTION / CAUSAL AGENTS / NOTES — list EVERY row in printed order with all three cells verbatim, especially the torsades de pointes row with the ABCDEF mnemonic (antiArrhythmics, antiBiotics, anti"C"ychotics, antiDepressants, antiEmetics, antiFungals — report the EXACT printed text including capitalization and quotes); (3) any margin notes, mnemonics, asterisk footnotes, or images anywhere on the page; (4) red text, color shading, or other color furniture anywhere on the page; (5) the header/banner lines and the footer slug with timestamp. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps (e.g. does a row read "antiDepressa" then continue on the next line?).' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
