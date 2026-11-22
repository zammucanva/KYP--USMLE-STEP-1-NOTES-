import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function pass(zai: any, prompt: string, img: string) {
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${img}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}
async function main() {
  const zai = await (ZAI as any).create();
  // PASS 1 — full page at 120dpi
  const page = readFileSync('/tmp/pubh12-page-286.png').toString('base64');
  console.log('===== PASS 1 — FULL PAGE (120dpi) =====');
  console.log(await pass(zai,
    'This is First Aid USMLE 2026 Part 1, pdf page 286 / printed book page 264, banner "PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS". The page topic is "Confounding vs effect modification". Describe the page precisely and completely: (1) THE TABLE — title, its FOUR column headers exactly as printed (TYPE / DEFINITION / EXAMPLES / STRATEGIES TO REDUCE BIAS — confirm spelling and any small-caps styling), and its TWO rows (Confounding; Effect modification). For each row give every cell: the DEFINITION cell (including the bold sub-line "No association after stratification" or "True association exists"), the EXAMPLES cell, and the STRATEGIES cell (list each strategy: crossover studies, matching, analytic techniques, stratified analysis). Which words print in RED or bold anywhere in the table? (2) THE TWO DIAGRAMS below the table — the page prints TWO diagram groups. For EACH group state: its centered title (Confounding / Effect modification), the left-side rail labels ("Crude analysis", "Stratified analysis"), the row structure (crude row: exposure box -> outcome box; stratified rows: Smokers row and Nonsmokers row, each exposure box -> outcome box), the DIRECTION and STYLE of every arrow (horizontal? thickness differences? dashed vs solid?), and the "Note:" line at the bottom of each group — quote both notes verbatim and state exactly where each prints. (3) THE THREE ASSOCIATION LABELS — at the bottom of the second diagram the labels "Strong association", "Significant association", and "Weak/no association" print stacked in a column. This is the CRITICAL question: do these three labels annotate ARROWS (with leader lines or positioned next to specific arrows — if so, WHICH arrows: the crude arrow? the Smokers arrow? the Nonsmokers arrow? in which diagram group — only the Effect modification group, or both groups?), or are they a standalone legend/key? Describe exactly which arrow each label attaches to and how (leader line, direct adjacency, color coding). (4) Do the arrows in the CONFOUNDING group differ from each other (same style for crude vs stratified rows?), and do the arrows in the EFFECT MODIFICATION group differ (is the Smokers arrow thicker/bolder than the Nonsmokers arrow?)? (5) COLOR FURNITURE — heading color, table header styling, zebra striping vs dotted hairlines, box fill colors in the diagrams, arrow colors, red text anywhere. (6) The header/banner, any margin notes or mnemonics, asterisk footnotes, raster images. Preserve exact printed spellings and symbols.',
    page));
  // PASS 2 — zoomed confirmation: the two diagram groups (300dpi crop)
  const fig = readFileSync('/tmp/pubh12-fig-zoom.png').toString('base64');
  console.log('\n===== PASS 2 — ZOOMED CONFIRMATION (the two diagram groups, 300dpi crop) =====');
  console.log(await pass(zai,
    'A zoomed crop from First Aid USMLE 2026 book page 264 (Confounding vs effect modification), showing the TWO diagram groups printed below the table. Answer with precision, walking the crop top to bottom: (A) GROUP 1 "Confounding": where is the title? What sits to the left of the rows (a vertical label "Crude analysis" and a vertical label "Stratified analysis"?)? Describe the crude row: a box "Drinking coffee" and a box "Lung cancer" joined by WHAT KIND of arrow (solid/dashed, thick/thin, color)? Then the two stratified rows labeled "Smokers" and "Nonsmokers" at the left: each again "Drinking coffee" -> "Lung cancer" — are these arrows the SAME style as the crude arrow or DIFFERENT (dashed? thinner? no arrowhead?)? Is there any annotation ON or NEAR the crude arrow in group 1 (eg, "Significant association")? Where does the note "Note: Association disappeared after stratification." print? (B) GROUP 2 "Effect modification": same questions — crude row "OCP use" -> "DVT" (arrow style?), stratified rows "Smokers" and "Nonsmokers" each "OCP use" -> "DVT": is the SMOKERS arrow visually different from the NONSMOKERS arrow (thickness, boldness, dash)? Which arrow carries the label "Strong association" and which carries "Weak/no association" — and where does "Significant association" attach (the crude arrow?)? Describe how each label connects to its arrow (printed ON the arrow, above/below it, or via a leader line). (C) Quote the second note verbatim and say where it prints relative to the three labels. (D) The boxes: fill colors, border colors, rounded corners? Any icons? (E) Finally: do the three labels "Strong association" / "Significant association" / "Weak/no association" belong ONLY to the Effect modification group, or does the Confounding group (or its crude arrow) also carry any of them?',
    fig));
}
main();
