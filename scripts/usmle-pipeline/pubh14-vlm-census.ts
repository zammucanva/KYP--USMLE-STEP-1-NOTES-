/* PUBH14 hypothesis-testing-errors — VLM census (Public Health). TWO passes:
 * PASS 1 — the full page (pdf 288 / book 266) at 120dpi, rendered with:
 *   pdftoppm -f 288 -l 288 -r 120 -png "upload/usmle part1.pdf" /tmp/pubh14-page
 * PASS 2 — a focused 200dpi verification of the study-vs-reality 2×2 grid and
 *   the Testing-errors block (the grid's interleaved text-layer extraction
 *   order made the cell geometry worth re-pinning at higher resolution):
 *   pdftoppm -f 288 -l 288 -r 200 -png "upload/usmle part1.pdf" /tmp/pubh14-hi
 *   then PIL-crop x[370..590]pt y[105..260]pt -> /tmp/pubh14-grid-crop.png and
 *   x[60..600]pt y[255..500]pt -> /tmp/pubh14-errors-crop.png (200/72 scale).
 * Both outputs land in .usmle-pipeline-cache/staging-pubh14/vlm-census.txt. */
import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function pass1(zai: any) {
  const b64 = readFileSync('/tmp/pubh14-page-288.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 288 / printed book page 266, inside the banner "PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS". The page carries three blocks: (A) top, "Outcomes of statistical hypothesis testing" with a "Correct result" definition line and a 2×2 study-vs-reality grid; (B) middle, "Testing errors" with Type I error (α) and Type II error (β) entries; (C) bottom, "Statistical vs clinical significance". Describe the page precisely and completely: (1) THE 2×2 GRID — the critical part. State the EXACT grid geometry: what is the top-left corner label, what are the column headers (is "Reality" a spanning header over columns "H1" and "H0"? which of H1 / H0 is the LEFT column and which the RIGHT?), and what are the row headers (which row is top — "Study rejects H0" or "Study does not reject H0"?). Then give the content of EACH of the four cells in this order: top-left, top-right, bottom-left, bottom-right — quote each cell\'s text exactly as stacked (eg, does one cell print "Power" with "(1 – β)" beneath it? does another print "α" above "Type I error"? does another print "β" above "Type II error"? Is the fourth cell EMPTY of text?). Which specific cells are shaded/colored BLUE (name them by row+column)? Quote the legend line about blue shading verbatim and say where it sits. (2) THE "CORRECT RESULT" BLOCK — quote the two "Correct result" definition sentences verbatim and say where they sit relative to the grid (above? beside? inside a shaded box?). (3) TESTING ERRORS — for the Type I error (α) entry and the Type II error (β) entry: describe the layout (is there a main text column and a side/margin column with the cry-wolf examples and the "Also called..." lines?). Quote VERBATIM: "Stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1)."; the α probability sentence with the P < α logic; "Statistical significance ≠ clinical significance."; "Also called false-positive error."; "1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive)."; "You can never "prove" H1, but you can reject the H0 as being very unlikely."; then the Type II mirror: the "Stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false)." sentence; the β probability / statistical power (1 – β) sentence; the "↑ power and ↓ β by:" bullet list — list EVERY bullet exactly (sample size, expected effect size, precision of measurement, α level); "Also called false-negative error."; "2nd time boy cries wolf, the town believes there is no wolf, but there is one."; "If you ↑ sample size, you ↑ power. There is power in numbers."; "Generally, when type I error increases, type II error decreases." Are any of these lines printed in a special color (red? blue?)? Are the bullets marked with square bullets (▘) and up/down arrows (↑/↓)? (4) THE BOTTOM BLOCK — "Statistical vs clinical significance": quote the three definition sentences verbatim (statistical significance defined by likelihood of results being due to chance; clinical significance measure of effect on treatment outcomes; the "Some studies have a very high statistical significance..." sentence with the 1 mg/dL blood sugar example). Does the block title wrap across two lines? (5) COLOR FURNITURE — describe the colors of: the block titles ("Outcomes of statistical hypothesis testing", "Testing errors", "Statistical vs clinical significance"), the grid cells, any red/blue text anywhere (which words?), and how the cry-wolf examples are styled (italic? boxed?). (6) PAGE FURNITURE — the running header lines at top (page number, section, banner — does the banner print ONCE or TWICE?), any margin notes or mnemonics printed in the margins, asterisk footnotes, images or icons anywhere, the footer slug "FAS1_2026_06-PubHealth.indd 266" and where it sits relative to the bottom block, and the timestamp. State any words that look truncated or hyphenated across line wraps, and any odd spacings (eg, "( 1 – β)" with spaces).'},
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}
async function pass2(zai: any) {
  const b64 = readFileSync('/tmp/pubh14-grid-crop.png').toString('base64');
  const b64b = readFileSync('/tmp/pubh14-errors-crop.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'Two high-resolution crops from First Aid USMLE 2026 book page 266. IMAGE 1 is the 2×2 "study vs reality" grid (with the "Correct result" sentences at left). IMAGE 2 is the "Testing errors" block (Type I error (α) and Type II error (β) rows). For IMAGE 1, answer EXACTLY these questions about the grid, reading very carefully left to right: (a) The word "Reality" spans two column headers. Read the column headers literally: which header is printed over the LEFT column of cells and which over the RIGHT column? Is it "H1 left, H0 right" or "H0 left, H1 right"? The subscripts are small — look closely (H0 has subscript 0, H1 has subscript 1). (b) The TOP row (labeled "Study rejects H0"): which text is in its LEFT cell and which in its RIGHT cell? (c) The BOTTOM row (labeled "Study does not reject H0"): which text is in its LEFT cell and which in its RIGHT cell? Is one of the four cells completely EMPTY of text? (d) EXACTLY which cells are shaded blue — name by row (reject / does not reject) AND column (H1 / H0)? (e) Where does the sentence "Blue shading = correct result." sit? For IMAGE 2: (f) The right-hand column of the Testing errors block carries extra sentences. Quote them verbatim for BOTH rows and state which words (if any) are printed in RED — is it the leading "1st"/"2nd" numerals of the cry-wolf sentences? Is "power in numbers" red? Is anything else red (the Roman numerals I and II in the row labels "Type I error (α)" / "Type II error (β)"?)? (g) Are the cry-wolf sentences in italic or roman? (h) The bullet list "↑ power and ↓ β by:" — list each bullet verbatim with its arrow glyphs. Answer each lettered question separately and precisely; do not paraphrase cell contents.'},
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64b}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}
async function main() {
  const zai = await (ZAI as any).create();
  const one = await pass1(zai);
  const two = await pass2(zai);
  console.log('==================== PASS 1 — FULL PAGE (120dpi, glm-4.6v) ====================\n');
  console.log(one);
  console.log('\n==================== PASS 2 — FOCUSED GRID + TESTING-ERRORS CROPS (200dpi, glm-4.6v) ====================\n');
  console.log(two);
}
main();
