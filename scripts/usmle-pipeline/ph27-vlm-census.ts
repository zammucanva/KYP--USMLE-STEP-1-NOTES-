import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
async function readPage(zai: any, png: string, prompt: string): Promise<string> {
  const b64 = readFileSync(png).toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}
async function main() {
  const zai = await (ZAI as any).create();
  const p274 = 'This is First Aid USMLE 2026 Part 1, pdf page 274 / printed book page 252, under the banner "PHARMACOLOGY-MISCELLANEOUS". It carries a single table titled "Drug names" with columns ENDING / CATEGORY / EXAMPLE, and the rows are grouped into labeled clusters. Describe the page structure precisely and completely: (1) the page header lines and the banner; (2) EVERY table row in PRINTED order with ALL THREE cells verbatim (ending, category, example) starting -asvir / NS5A inhibitor / Ledipasvir down through the last row of the page; (3) the GROUP CLUSTER LABELS inside the table (e.g. "Antimicrobial", "Antineoplastic", "CNS") — report exactly where each label sits and which rows it covers; (4) which text prints in RED or bold/highlighted (especially the ENDING column entries); (5) any margin notes, mnemonics, cross-references or pointers to other pages (e.g. monoclonal antibodies / -mab pointers), asterisk footnotes, or images anywhere on the page; (6) the footer slug with timestamp. Preserve exact printed spellings; state any words that look truncated or wrapped across lines (e.g. does the triptan row category print on one line?).';
  const p275 = 'This is First Aid USMLE 2026 Part 1, pdf page 275 / printed book page 253, under the banner "PHARMACOLOGY-MISCELLANEOUS". It carries a single table titled "Drug names (continued)" with columns ENDING / CATEGORY / EXAMPLE, and the rows are grouped into labeled clusters. Describe the page structure precisely and completely: (1) the page header lines; (2) EVERY table row in PRINTED order with ALL THREE cells verbatim (ending, category, example) starting -chol / Cholinergic agonist / Bethanechol down through -vaptan / ADH antagonist / Tolvaptan; (3) the GROUP CLUSTER LABELS inside the table (e.g. "Autonomic", "Cardiovascular", "Metabolic", "Other") — report exactly where each label sits and which rows it covers; (4) which text prints in RED or bold/highlighted (especially the ENDING column entries); (5) any margin notes, mnemonics, cross-references or pointers to other pages (e.g. monoclonal antibodies / -mab pointers), asterisk footnotes, or images anywhere on the page; (6) the footer slug with timestamp. Preserve exact printed spellings; state any words that look truncated, split, or superscripted across lines (e.g. the -dipine row category — does it print "Dihydropyridine Ca2+ channel blocker" with a superscript 2+?).';
  const out: string[] = [];
  for (const [tag, png, prompt] of [['PAGE 274 (book 252)', '/tmp/ph27-page-274.png', p274], ['PAGE 275 (book 253)', '/tmp/ph27-page-275.png', p275]] as [string, string, string][]) {
    let text = '';
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        text = await readPage(zai, png, prompt);
        break;
      } catch (e) {
        out.push(`=== ${tag} — attempt ${attempt} FAILED: ${String(e)}`);
        if (attempt === 2) text = 'VLM UNAVAILABLE — both attempts failed this session.';
      }
    }
    out.push(`===== VLM CENSUS — ${tag} — glm-4.6v @120dpi =====\n${text}\n`);
  }
  writeFileSync('/home/z/my-project/kyp-usmle-notes/.usmle-pipeline-cache/staging-ph27/vlm-census.txt', out.join('\n'), 'utf8');
  console.log(out.join('\n'));
}
main();
