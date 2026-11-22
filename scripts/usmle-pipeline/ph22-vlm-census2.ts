import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph22-page-269-bottom.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is a zoomed crop of the bottom of a First Aid USMLE page: the "Drug reactions—cardiovascular" table. Answer precisely: (1) How many COLUMN HEADERS does this table print — is there a third column header "NOTES", or only DRUG REACTION and CAUSAL AGENTS? Is the "Vancomycin infusion reaction..." sentence inside the CAUSAL AGENTS cell of the Cutaneous flushing row, or in a separate third column? (2) Transcribe the torsades de pointes row EXACTLY as printed, character by character, including every capital letter, quote mark, and parenthesis — especially whether it prints anti"C"ychotics (with quotes around a capital C and then "ychotics"), and whether "antiDepressants" is printed complete or truncated/hyphenated at a line break. (3) Which letters or words print in RED in each row? (4) Transcribe the exact parenthetical in the Cutaneous flushing row — is it "(flushed from VANCEN [dancing])"?' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
