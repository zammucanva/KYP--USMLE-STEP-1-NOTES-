import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p-225.png');
  const desc = `This is page 225 of First Aid for the USMLE Step 1 2026 (pdf page 225 = printed book page 203, PATHOLOGY — Cellular Injury, the CELL INJURY page). pdfimages reports ZERO rasters — everything prints in the text layer. The page has: a Reversible cell injury bullet list, an Irreversible cell injury bullet list, a Ferroptosis paragraph, and a TIMELINE FIGURE whose labels print interleaved (Normal cell, Irreversible, Reversible, Cell death (necrosis), Ferroptosis, Cellular swelling, Membrane blebbing, Nuclear chromatin clumping, Ribosomal detachment, Rupture of lysosomes and autolysis, Plasma membrane damage, Nuclear degradation, mitochondrial permeability).
Questions:
1) Describe the TIMELINE FIGURE exactly as printed: is it a horizontal timeline with a NORMAL CELL at left progressing through stages to CELL DEATH (NECROSIS) at right? What are the intermediate stage drawings (a cell swelling, blebbing, chromatin clumping, ribosomal detachment on the reversible side; lysosome rupture/autolysis, membrane damage, nuclear degradation, mitochondrial permeability on the irreversible side)? How is the reversible/irreversible boundary marked (a vertical line? a label 'Irreversible' placed where)?
2) Where does 'Ferroptosis' sit in the figure — a separate branch/box off the timeline, or on the main line? Is there a small drawing of a mitochondria near it?
3) Is the figure line art/schematic or photographic? Any clinical photographs anywhere on the page?
4) Read the two bullet lists row by row — confirm the exact reversible bullets (ATP/ATPase pumps/cellular swelling as the earliest morphologic manifestation; ribosomal detachment; plasma membrane blebbing; nuclear chromatin clumping; myocardial cells noncontractile after 1-2 minutes of ischemia; myelin figures) and the exact irreversible bullets (plasma membrane breakdown with troponin leak and Ca2+ influx; mitochondrial damage with electron transport chain loss; lysosome rupture with autolysis; the pyknosis-karyorrhexis-karyolysis sequence; amorphous densities in mitochondria).
5) Read the Ferroptosis paragraph: lipid peroxidation, iron-dependent cell death, mitochondrial shrinkage with loss of cristae and outer membrane rupture, the disease states (MASLD/MASH, ischemia-reperfusion injury, neurodegeneration), cancer therapy applications, and the preventability (iron chelators deferiprone/deferoxamine; lipophilic antioxidants ferrostatin/liproxstatin). Any margin notes or mnemonics anywhere? Quote verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
