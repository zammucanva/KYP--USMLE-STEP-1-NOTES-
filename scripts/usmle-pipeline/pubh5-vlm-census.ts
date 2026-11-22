import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/pubh5-page-281.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 281 / printed book page 259, under the banner "PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS". I own ONLY the UPPER portion of this page. Describe that upper portion precisely and completely: (1) The continued "Quantifying risk" table — list its column headers and its FINAL TWO rows in PRINTED order with all four cells verbatim: the "Mortality rate" row (definition / example / formula) and the "Attack rate" row (definition / example / formula), including the worked-example numbers exactly as printed. (2) The "Demographic transition" block: quote its one-sentence definition verbatim. (3) The demographic transition FIGURE: how many population pyramids are drawn, in what left-to-right order, and what is each pyramid\'s SHAPE (which is wide-based/pyramid, which is rectangular, which is narrow-based/inverted)? What axis labels print on/around each pyramid (Male? Female? Age? Population %?) and where do the Male and Female labels sit (left/right of each pyramid)? Is there a figure caption or title text like "Population pyramid"? (4) The transition TABLE beneath the pyramids: list every row label and its values across the three stages IN PRINTED COLUMN ORDER — Birth rate, Mortality rate, Life expectancy, Population — using the printed arrows (single up, double up, single down, double down) and words exactly as printed. (5) The STAGE ORDER: are the three pyramid columns labeled (e.g. growing/stable/declining, or early/late)? Which stage is leftmost, middle, rightmost? (6) CONFIRM THE BOUNDARY: does the "Likelihood ratio" heading come immediately after the Demographic transition table, and what is the first thing printed under that heading? (7) Any margin notes, mnemonics, asterisk footnotes, or raster images in the upper portion; any red text or color shading (which cells/labels print in color)? (8) The header/banner lines at the very top. Preserve exact printed spellings and note any words that look truncated or oddly spaced.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
