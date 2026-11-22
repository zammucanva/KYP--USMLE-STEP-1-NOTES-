import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
/* PH24 census — First Aid 2026 Part 1, pdf 271 / book 249:
 * "Drug reactions—hematologic" + "Drug reactions—musculoskeletal/skin/
 * connective tissue" ( Pharmacology—Toxicities and Adverse Effects ).
 * One VLM pass at 120dpi (pdftoppm raster /tmp/ph24-page-271.png);
 * one retry allowed, then "VLM UNAVAILABLE" + text-layer census. */
async function ask(zai: any, b64: string) {
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: `This is First Aid USMLE page 249 (pdf 271), Pharmacology — Toxicities and Adverse Effects, carrying TWO three-column tables. Describe the page structure PRECISELY and VERBATIM:

(1) Page furniture: the running header, the section banner, the book page number, and the footer line (indd slug + timestamp).

(2) TOP TABLE "Drug reactions—hematologic": list its three column headers, then EVERY row in PRINTED ORDER (alphabetical or not — report exactly what prints) with ALL THREE cells (DRUG REACTION / CAUSAL AGENTS / NOTES), verbatim. For each row state whether the NOTES cell is EMPTY. I specifically need:
  - the Agranulocytosis row's NOTES cell — is the mnemonic "Drugs can cause pretty major granulocytes collapse" printed there, and in what color?
  - the Megaloblastic anemia row's NOTES cell — does the mnemonic "You're having a mega blast with PMS" print in THAT row's NOTES cell, or somewhere else?
  - the Thrombocytopenia row's NOTES cell — empty or not?
  - the Thrombotic complications row's NOTES cell — does it print "Estrogen-mediated ↑ blood viscosity and platelet accumulation"? What color?
  - the DRESS row's NOTES cell — full text including "T cell-mediated hypersensitivity reaction" and the "DRESSes partially cover my skin and viscera" mnemonic line.
  - Does a "Gray baby syndrome" row or a "Serotonin syndrome" row print ANYWHERE in this table (yes/no)?

(3) BOTTOM TABLE "Drug reactions—musculoskeletal/skin/connective tissue": list the three column headers, then EVERY row in PRINTED ORDER with all three cells, verbatim, noting empty NOTES cells. I specifically need:
  - the Drug-induced lupus row — is its NOTES cell empty?
  - the Fat redistribution row — its CAUSAL AGENTS cell ("Protease inhibitors, glucocorticoids"?) and its NOTES cell ("Fat protects glutes"?). CRITICAL: there is a stray "2+" mark in the text layer between "glucocorticoids" and "Fat protects glutes" — tell me EXACTLY what prints in that region: is "2+" a superscript on a word, a footnote marker, part of a NOTES cell, or something else? Which row/cell does it belong to?
  - the Rash (Stevens-Johnson syndrome) row's NOTES cell — exact wording ("Steven Johnson has epileptic allergy to sulfa drugs and penicillin"?), and its color.
  - the Osteoporosis and Myopathy and Tendon/cartilage damage rows — are their NOTES cells empty?

(4) Color furniture: which text prints in RED (mnemonic lines? drug names? anything else?), any column shading, any bold/highlight conventions.

(5) Any margin notes, asterisk footnotes below the tables, icons, or raster images anywhere on the page (there should be none — confirm).

Preserve exact printed spellings and capitalization ("Teethracyclines", "Can Cause puffy gums", "Pooh classically munches on honey Coombs", "Can't make New blood cells properly", "Sat for photo", "Painful tophi and feet need care", "Fat protects glutes").` },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph24-page-271.png').toString('base64');
  try {
    console.log(await ask(zai, b64));
  } catch (e: any) {
    console.error('FIRST PASS FAILED:', e?.message ?? e);
    try {
      await new Promise(r => setTimeout(r, 3000));
      console.log(await ask(zai, b64));
    } catch (e2: any) {
      console.error('RETRY FAILED — VLM UNAVAILABLE:', e2?.message ?? e2);
      process.exit(2);
    }
  }
}
main();
