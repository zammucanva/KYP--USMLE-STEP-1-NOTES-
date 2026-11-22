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
  const page = readFileSync('/tmp/pubh10-page-284.png').toString('base64');
  console.log('===== PASS 1 — FULL PAGE (120dpi) =====');
  console.log(await pass(zai,
    'This is First Aid USMLE 2026 Part 1, pdf page 284 / printed book page 262, in the banner "PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS". The page topic is "Incidence vs prevalence". Describe the page precisely and completely: (1) THE POOL FIGURE — the schematic at the upper left under the heading "Incidence vs prevalence". It shows a pool/tank labeled "Prevalence" with arrows and the labels "Incidence", "Recurrence", "Mortality", and "Cure". This is the CRITICAL part: for EACH of the four labels (Incidence, Recurrence, Mortality, Cure), state exactly WHERE the label sits relative to the pool and WHICH DIRECTION its arrow points — INTO the pool (filling it) or OUT of the pool (draining it). Does the "Recurrence" arrow point INTO the Prevalence pool or OUT of it? Does it loop back from the "Cure" outflow? Describe the pool shape (rectangle? rounded? water fill lines?) and every arrowhead. (2) THE FORMULAS — quote each formula exactly as printed: the Incidence formula, the Prevalence formula, and the big fraction formula (what is the numerator, what is the denominator?), plus any caption line under the fraction. (3) THE SITUATION TABLE — the table with columns SITUATION / INCIDENCE / PREVALENCE: list EVERY row in PRINTED order with its exact three cells (the effect cells contain up-arrows, down-arrows, or an em-dash meaning no effect). Confirm there are exactly EIGHT rows and none missing or extra. (4) THE SIDEBAR/MARGIN TEXT on the right side — quote every line verbatim (eg, "Incidence looks at new cases (incidents)." and the lines about pretest probability, PPV/NPV, common cold). (5) COLOR FURNITURE — the heading color, any red/blue/colored text anywhere (which words?), table header styling, zebra striping. (6) The header/banner at top, any margin notes or mnemonics printed anywhere, asterisk footnotes, images. Preserve exact printed spellings and symbols.',
    page));
  // PASS 2 — zoomed confirmation: the pool figure + the big formula (300dpi crops)
  const fig = readFileSync('/tmp/pubh10-fig-zoom.png').toString('base64');
  const formula = readFileSync('/tmp/pubh10-formula-zoom.png').toString('base64');
  console.log('\n===== PASS 2 — ZOOMED CONFIRMATION (figure + formula, 300dpi crops) =====');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'Two zoomed crops from First Aid USMLE 2026 book page 262 (Incidence vs prevalence). IMAGE 1 is the bathtub/pool schematic figure. IMAGE 2 is the big relationship formula printed to the right of the figure. Answer with precision: (A) From IMAGE 1: the tub is labeled "Prevalence" (white text in the water). There are four labeled flows: "Incidence" (top left), "Recurrence" (top right), "Mortality" (bottom left), "Cure" (bottom right). For EACH flow, state the ARROWHEAD direction: does the water/stream flow INTO the tub (filling) or OUT of the tub (draining)? Be explicit about "Recurrence": trace its arrow from tail to head — where does the tail start, where does the head/arrowhead end, and does the flow cross INTO the tub or OUT of it? Describe the shapes (faucet stream, curved band, drain pipes). (B) From IMAGE 2: transcribe the formula EXACTLY as laid out. Is the LEFT side a stacked fraction "Prevalence" over "1 – prevalence" with an "=" to its right, so it reads "Prevalence / (1 – prevalence) = Incidence rate × average duration of disease"? Or does it read "Prevalence = [Incidence rate × average duration of disease] / [1 – prevalence]" with the fraction on the right of the equals sign? State exactly which side of the "=" the stacked fraction (numerator over denominator with a horizontal bar) sits on, what the numerator text is, what the denominator text is, and where "Incidence rate × average duration of disease" sits. Also transcribe the sentence printed below the formula.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${fig}` } },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${formula}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
