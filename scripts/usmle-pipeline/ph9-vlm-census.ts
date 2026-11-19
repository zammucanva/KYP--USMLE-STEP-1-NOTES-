import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
/* PH9 census attempt — page 256 BOTTOM half ("Autonomic receptors").
 * pdfimages reports ZERO rasters on the page; this census asks the VLM to
 * confirm the vector wiring figure's topology. If the z-ai VLM returns 401
 * in subagent context (as it did for ph8, twice), the census stands on
 * pdfimages + the text layer — the wiring topology is fully recoverable
 * from the interleaved labels + the three printed rules. */
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-256-256.png');
  const desc = `This is page 256 of First Aid for the USMLE Step 1 2026 (pdf 256 = printed book page 234, PHARMACOLOGY — AUTONOMIC DRUGS). pdfimages reports ZERO raster images — the BOTTOM half of this shared page is "Autonomic receptors": ONE large VECTOR wiring figure of the autonomic vs somatic nervous systems, plus THREE rule lines under it. This census concerns ONLY the bottom half (the top half, Drug effect modifications, belongs to a sibling topic).
Questions:
1) Confirm the second "▶ PHARMACOLOGY—AUTONOMIC DRUGS" banner starts the bottom half with the heading "Autonomic receptors".
2) The figure's top-level organization: does it split AUTONOMIC (with Parasympathetic and Sympathetic columns) from SOMATIC? Which CNS icons print (Brainstem, Spinal cord, Voluntary motor nerve)?
3) The preganglionic contrast: is the parasympathetic preganglionic neuron drawn LONG and the sympathetic preganglionic neuron drawn SHORT (with the postganglionic lengths the reverse)? Where do the Nn (nicotinic neuronal) ganglion labels print — including the sympathetic chain?
4) The transmitter labels: confirm ACh prints on ALL preganglionic fibers and on the postganglionic parasympathetic fiber; NE prints on the postganglionic sympathetic fiber; and the adrenal medulla receives a DIRECT preganglionic sympathetic line releasing Epi/NE into "Blood (catecholamine transmission)".
5) The receptor labels on targets: M1, M2, M3 on smooth muscle, gland cells, nerve terminals, cardiac muscle; M3 on sweat glands; alpha1/alpha2/beta1/beta2 on targets; alpha1/alpha2/beta1/D1 on renal vasculature; Nm at the neuromuscular junction on skeletal muscle. Is there a standalone "D" label near the sweat glands?
6) Quote the THREE rule lines under the figure verbatim — especially the third one (sweat glands, cholinergic fibers) and its parenthetical about a "chold" sweat (quote the exact spelling).`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
