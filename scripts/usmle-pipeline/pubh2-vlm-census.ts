import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/pubh2-page-279.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 279 / printed book page 257, PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS. The UPPER portion of the page (above the "Off-label drug use" heading) is a "Clinical therapeutic trial" block: intro paragraph (experimental study involving humans, randomized/controlled/double-blinded, triple-blind), then Crossover clinical trial, Intention-to-treat analysis, As-treated analysis, Per-protocol analysis paragraphs, then the sentence "Clinical trials occur after preclinical studies and consist of five phases (Can I SWIM?)." followed by a PHASE PIPELINE FIGURE. Describe the UPPER portion precisely and completely: (1) list every text block/paragraph in printed order, verbatim enough to identify; (2) THE FIGURE in detail: the exact left-to-right arrangement of the boxes (Preclinical, Phase 0, Phase 1, Phase 2, Phase 3, Phase 4), where exactly the "FDA approval" label sits (above the arrow between which boxes?), where the "Sample" label sits, and CRITICALLY which sample-size text prints under WHICH phase box — is "Very small number of healthy volunteers or patients with disease of interest. Open label." under Phase 0 or under Phase 1, and is "Small number of healthy volunteers or patients..." under Phase 1 or Phase 0? Read the column positions carefully; (3) where do the words/letters of the mnemonic "Can I SWIM?" print in the figure — are there large decorative letters or words (eg a big "Can I?" and "SWIM?" or individual letters C-a-n-I-S-W-I-M pinned over specific phase boxes)? What color are they, and which letters sit over which boxes? The text layer contains two standalone "?" glyphs — where do they sit?; (4) arrows/connectors between the boxes (direction, shape) and any color/shading of the boxes (which boxes share a color, which differ); (5) the color furniture of the whole upper portion: which headings print dark navy, any red text, any shaded panels; (6) any margin notes, mnemonics in margins, asterisk footnotes, or raster images in the UPPER portion; (7) where exactly does the "Off-label drug use" heading begin (confirm it is the first content below the figure), and (8) the header lines (book page number, section header) and the footer slug. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
