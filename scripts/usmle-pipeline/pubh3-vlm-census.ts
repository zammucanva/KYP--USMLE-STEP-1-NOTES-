import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/pubh3-page-279.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 279 / printed book page 257, under the banner "PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS". The page is SPLIT between two topics: the UPPER portion is "Clinical therapeutic trial" with its five-phase figure ("Can I SWIM?"), and the LOWER portion — starting at the navy heading "Off-label drug use" — belongs to a different topic. Describe the LOWER portion precisely and completely: (1) the "Off-label drug use" block: quote its definition paragraph and its Example line verbatim; (2) the "Bradford Hill criteria" block: quote its lead-in definition verbatim (the "necessary but not sufficient" sentence), then list ALL of its criteria rows in PRINTED order (Strength, Consistency, Specificity, Temporality, Biological gradient, Plausibility, Coherence, Experiment, Analogy — report the EXACT printed definition text of each row, including capitalization, hyphens, and parentheses such as "dose-response relationship" and "eg, animal studies, in vitro studies"); confirm there are exactly NINE criteria rows and none missing or extra; (3) the BOUNDARY: what is the last element of the UPPER portion (the phase figure) immediately before the "Off-label drug use" heading, and does anything else (text, rule, icon) sit between them?; (4) any margin notes, mnemonics, asterisk footnotes, or images anywhere in the lower portion; (5) color furniture in the lower portion: which headings print in navy/dark blue, any red or colored text, any boxes or shading around the criteria; (6) the header/banner lines and the footer slug with timestamp. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
