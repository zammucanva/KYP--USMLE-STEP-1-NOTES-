import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
async function ask(zai: any, text: string, images: string[]) {
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text },
      ...images.map(p => ({ type: 'image_url', image_url: { url: `data:image/png;base64,${readFileSync(p).toString('base64')}` } })),
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}
async function main() {
  const zai = await (ZAI as any).create();
  let out = '';
  // PASS 1 — full page at 120dpi
  out += '===== PASS 1 — FULL PAGE (120dpi) =====\n\n';
  out += await ask(zai,
    'This is First Aid USMLE 2026 Part 1, pdf page 282 / printed book page 260, LOWER portion (below the "Hazard ratio" block). The lower portion is the topic "Evaluation of diagnostic tests": a stage-setter box, a Test x Disease 2x2 grid with a formula strip, four property rows (Sensitivity, Specificity, Positive predictive value, Negative predictive value), and at the bottom a CUTOFF-VALUE FIGURE of two overlapping distributions. Describe precisely and completely: (1) THE STAGE-SETTER — quote the sentences about sensitivity/specificity being fixed properties, PPV/NPV varying with prevalence, and the Test efficiency formula; (2) THE 2x2 GRID — report its EXACT orientation: which axis is Test (rows?) and which is Disease (columns?), where do the + and – signs sit (is there a "Test +" row label and a "Disease +" column label, or only – labels?), and which cell holds TP, FP, FN, TN (report as top-left, top-right, bottom-left, bottom-right); also the formula strip under/next to the grid: what formulas print for Sensitivity, Specificity, PPV, NPV, Prevalence (is Prevalence printed as a stacked fraction with TP + FN on top and (TP + FN + FP + TN) below?); (3) THE FOUR PROPERTY ROWS — for each of Sensitivity (true-positive rate), Specificity (true-negative rate), Positive predictive value, Negative predictive value: quote the definition sentence, the "Value approaching 100%..." sentence where present, the formulas, and the colored/mnemonic lines (SN-N-OUT, SP-P-IN, "High sensitivity test used for screening", "High specificity test used for confirmation after a positive screening test") — are SN-N-OUT and SP-P-IN printed in a special color? Which words are emphasized?; also quote the PPV/NPV prevalence-variation lines exactly; (4) THE CUTOFF FIGURE — THE CRITICAL PART. Report: (a) which distribution is on the LEFT and which on the RIGHT (Disease absent left, Disease present right?); (b) the y-axis label and the x-axis label — read the exact text "Possible cutoff values for ___ vs ___ test result": what symbols/poles print around the "vs" (a + and a –?), and is there a missing/odd glyph between "for" and "vs"; (c) where do the letters A, B, C sit on the x-axis (left to right) and what do the three legend lines under "Possible cutoff values..." say; (d) the four quadrant labels under the curves — where exactly are TP, FP, FN, TN (TN far left? TP far right? FN and FP in the middle overlap region, FN left of FP?); (e) THE TWO RULE LINES with their arrows — quote them arrow by arrow: "Lowering the cutoff value: ..." and "Raising the cutoff value: ..." — for EACH arrow state whether it points UP or DOWN in print, including the arrows inside the parentheses and the arrow between the letters "B A" and "B C" (is the B-to-A arrow pointing down and the B-to-C arrow pointing up? Is it a single arrow or double-headed?); (f) the Note at the bottom about anemia — quote verbatim including the arrows; (5) COLOR FURNITURE — heading colors, any red/blue text anywhere (which words?), the stage-setter box styling; (6) any margin notes, mnemonics in margins, asterisk footnotes, images, or icons anywhere in this lower portion. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps (eg, "true-positive").',
    ['/tmp/pubh8-page-282.png']);
  // PASS 2 — targeted 200dpi crops (arrows, legend, grid, curves, note)
  out += '\n\n===== PASS 2 — TARGETED CROPS (200dpi) =====\n\n';
  out += '--- CROP: the two rule boxes (lowering / raising) ---\n';
  out += await ask(zai,
    'High-resolution crop of two stacked rule boxes from a First Aid biostatistics figure about test cutoff values. Transcribe EACH box EXACTLY, arrow by arrow, left to right, top to bottom. For EVERY arrow glyph state its direction: UP (↑) or DOWN (↓) — look carefully, the two directions both appear. Box 1 begins "Lowering the cutoff value:" and has TWO printed lines; box 2 begins "Raising the cutoff value:" and has TWO printed lines. Report: (a) the exact first line of each box including the arrows before each word; (b) the exact second line of each box — it begins with two letters (like "B A" or "B C") with an arrow BETWEEN the two letters (which direction does THAT arrow point — up or down?), then a parenthesized group like "(↑ FP ↓ FN)" — state the direction of the arrow before FP and before FN; then arrows before the last two words of the line. (c) Say whether any arrows are double-headed. (d) Describe the box borders/colors.',
    ['/tmp/pubh8-crop-rules.png']);
  out += '\n\n--- CROP: the legend block ---\n';
  out += await ask(zai,
    'High-resolution crop of a legend block from a First Aid biostatistics figure. The first line reads "Possible cutoff values for ___ vs ___ test result". Report EXACTLY: (a) what symbol or character sits between "for" and "vs" (a plus sign? a circled plus ⊕? something else?) and its color; (b) what symbol or character sits between "vs" and "test" (a minus/dash? a circled minus ⊖?); (c) the three legend lines below, verbatim (they define cutoffs A, B, C); (d) any tiny marks/glyphs at the right edge of the block.',
    ['/tmp/pubh8-crop-legend.png']);
  out += '\n\n--- CROP: the Test x Disease 2x2 grid ---\n';
  out += await ask(zai,
    'High-resolution crop of a 2x2 contingency grid from First Aid (test vs disease). Report EXACTLY: (a) the top header word and any symbols next to it — is there a symbol over the LEFT column and another over the RIGHT column (plus-like / minus-like? circled?); (b) the left header word and any symbols next to it for the TOP row and the BOTTOM row; (c) the four cells (top-left, top-right, bottom-left, bottom-right) and their shading colors; (d) the two formula boxes to the right of the grid (verbatim); (e) the formula strip at the bottom (verbatim, including how the Prevalence formula is laid out — is it a stacked fraction?).',
    ['/tmp/pubh8-crop-grid.png']);
  out += '\n\n--- CROP: the two-distribution plot ---\n';
  out += await ask(zai,
    'High-resolution crop of the cutoff-value figure from First Aid: two overlapping distributions. Report EXACTLY: (a) which curve is on the left and which on the right, their colors, and their labels; (b) the y-axis label (rotated?) and where it sits; (c) the x-axis: are there tick letters A, B, C along the baseline? left-to-right order and approximate positions relative to the two curves; (d) where the labels TN, FN, FP, TP sit (under which curve / in which region, and at what height relative to each other — are TN and TP higher than FN and FP?); (e) the axis title at the bottom (verbatim); (f) any arrows drawn ON the plot itself (above the curves, at the top-left/top-right corners — which direction do they point, and are they attached to the "Disease absent"/"Disease present" labels?); (g) are there vertical dashed lines at A, B, C?',
    ['/tmp/pubh8-crop-curves.png']);
  out += '\n\n--- CROP: the Note line ---\n';
  out += await ask(zai,
    'High-resolution crop of a one-line note at the bottom of a First Aid figure. Transcribe it VERBATIM including every arrow glyph and its direction (↑ vs ↓ — both may appear): it begins "Note: In diseases where diagnosis is based on lower values (eg, anemia)...".',
    ['/tmp/pubh8-crop-noteline.png']);
  writeFileSync('.usmle-pipeline-cache/staging-pubh8/vlm-census.txt', out);
  console.log('census written: ' + out.length + ' chars');
}
main();

