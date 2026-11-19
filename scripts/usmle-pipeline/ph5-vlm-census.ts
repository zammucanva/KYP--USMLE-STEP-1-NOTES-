import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-253-253.png');
  const desc = `This is page 253 of First Aid for the USMLE Step 1 2026 (pdf 253 = printed book page 231, PHARMACOLOGY — PHARMACOKINETICS AND PHARMACODYNAMICS: "Urine pH and drug elimination" + "Dosage calculations"). pdfimages reports ZERO raster images on this page — the page should be pure text plus ONE VECTOR figure (an ionization-vs-pH curve) plus two typeset reaction equations plus two dosage formulas.
Questions:
1) Confirm the heading ("Urine pH and drug elimination") and the intro rule: "Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed."
2) Confirm the two reaction equations and their parenthetical tags: for weak acids "RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped)" and for weak bases "RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble)". Which side of each equation is labeled lipid soluble vs trapped?
3) Describe the VECTOR FIGURE topology exactly: a graph titled/labeled "Ionized species formation (%)" with a y-axis 0 to 100, two S-shaped curves labeled "Weak acid" and "Weak base" that cross each other at the 50% level, an x-axis labeled "pH" running from 4 to 14 (ticks 4, 8, 12, 14), a dashed line or annotation at 50%, and margin-style annotations reading "pKa: 9.2", "pKa = more acidic", "pKa = more basic". Which curve rises to the right (weak acid) and which falls to the right (weak base)? Where do the pKa annotations sit?
4) Confirm the weak-acids block: "Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine." And the weak-bases block: "Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine."
5) Confirm the pKa definition: "pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base." And the TCA rule: "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination."
6) Confirm the dosage-calculation formulas as typeset: "Loading dose = Cp × Vd / F" and "Maintenance dose = Cp × CL × τ / F" with the definitions "Cp = target plasma concentration" and "τ = dosage interval (time between doses); does not apply for continuous infusions", plus the two rules "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged." and "Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency."
7) Any margin notes or mnemonics anywhere on the page (including margins)? Quote verbatim.
8) Confirm the footer print line (FAS1_2026_05-Pharmacology.indd 231 + timestamp) and any other page furniture.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
