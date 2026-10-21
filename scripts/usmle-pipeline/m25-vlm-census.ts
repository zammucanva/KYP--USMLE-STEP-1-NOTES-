import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: prompt }, { type: 'image_url', image_url: { url: dataUrl } } ] },
  ];
  const response = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  return response.choices?.[0].message?.content ?? JSON.stringify(response);
}
async function main() {
  const zai = await ZAI.create();
  const out: string[] = [];
  out.push('===== PDF PAGE 190 (book 168) =====');
  out.push(await ask(zai, `data:image/png;base64,${readFileSync('/tmp/m25page-190.png').toString('base64')}`, `Page 168 of First Aid for the USMLE Step 1 2026, Virology — 'Arboviruses transmitted by Aedes mosquitoes'. Describe PRECISELY: 1. The banner (exact spelling). 2. The Chikungunya vs Dengue table: the column headers and both rows verbatim-ish (virus type, symptoms, diagnosis, treatment, prevention — including the live recombinant dengue vaccine description). 3. The Yellow fever block (verbatim: flavivirus, monkey/human reservoir, jaundice, black vomitus, Councilman bodies, live attenuated vaccine). 4. The Zika block (verbatim: conjunctivitis, Guillain-Barré, sexual/vertical transmission, congenital Zika syndrome with the brain imaging marker A — what does the image show?). Be exhaustive.`));
  out.push('===== PDF PAGE 191 (book 169) =====');
  out.push(await ask(zai, `data:image/png;base64,${readFileSync('/tmp/m25page-191.png').toString('base64')}`, `Page 169 of First Aid for the USMLE Step 1 2026, Virology. Three blocks: Rabies virus, Ebola virus, SARS-CoV-2. For EACH: 1. The verbatim text. 2. The images with markers: Rabies has A (bullet-shaped virus — is it a photo or a drawing?) and B (Negri bodies — photo of Purkinje cells with cytoplasmic inclusions?); Ebola has A (what does it show — the filamentous virion?); SARS-CoV-2 has a labeled STRUCTURE DIAGRAM (Spike S protein, Lipid bilayer, Membrane M protein, Helical capsid with viral RNA, Envelope E protein) — describe its layout precisely (is it a cross-section illustration with leader labels?). Be exhaustive.`));
  writeFileSync('/tmp/m25-vlm-census.txt', out.join('\n\n'));
  console.log('written ' + out.join('\n\n').length + ' chars');
}
main().catch((e) => { console.error('M25 VLM census failed:', (e as any)?.message || e); process.exit(1); });
