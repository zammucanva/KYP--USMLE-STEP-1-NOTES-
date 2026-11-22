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
  out.push('===== PDF PAGE 187 (book 165) =====');
  out.push(await ask(zai, `data:image/png;base64,${readFileSync('/tmp/m24page-187.png').toString('base64')}`, `Page 165 of First Aid for the USMLE Step 1 2026, Virology. Three text blocks: Picornavirus, Rhinovirus, Rotavirus. For EACH block: give the verbatim text including any boxed mnemonics. Then: where exactly is the photograph (marker A) and what does it show (rotavirus structure? wheel-like capsid?)? Be exhaustive.`));
  out.push('===== PDF PAGE 188 (book 166) =====');
  out.push(await ask(zai, `data:image/png;base64,${readFileSync('/tmp/m24page-188.png').toString('base64')}`, `Page 166 of First Aid for the USMLE Step 1 2026, Virology. Describe PRECISELY: 1. The Influenza viruses block (verbatim, incl. hemagglutinin/neuraminidase functions, superinfection bugs, treatment). 2. The Genetic/antigenic shift vs drift comparison (both verbatim + the diagram: what does the shift diagram show [Virus A + Virus B + host cell + New strain] and the drift diagram [Virus A, mutated HA or NA]?). 3. The vaccine block (reformulated, killed, live attenuated intranasal temp-sensitive) + any printed glosses (Hemagglutinin lets the virus in; Neuraminidaways; Sudden shift is more deadly). 4. The Rubella virus block (verbatim: matonavirus, German measles, postauricular lymphadenopathy, centrifugal rash, TORCH triad, blueberry muffin) — where is its photo (marker A) and what does it show? 5. The Paramyxoviruses block (verbatim: F protein, palivizumab, the diseases list). Be exhaustive.`));
  out.push('===== PDF PAGE 189 (book 167) =====');
  out.push(await ask(zai, `data:image/png;base64,${readFileSync('/tmp/m24page-189.png').toString('base64')}`, `Page 167 of First Aid for the USMLE Step 1 2026, Virology. Describe PRECISELY: 1. The croup block (verbatim: parainfluenza, seal-like barking cough, inspiratory stridor, steeple sign) — where is its photo (marker A) and what does it show (x-ray steeple sign?). 2. The Measles (rubeola) virus block: verbatim text (prodrome, Koplik spots, rash, Warthin-Finkeldey, SSPE, encephalitis 1:1000, giant cell pneumonia, ADEM, 4 C's box, vitamin A, pneumonia) — where are its photos (markers A) and what do they show (Koplik spots? the rash?). 3. The Mumps virus block: verbatim (parotitis, orchitis, meningitis, pancreatitis, sterility, POM-Poms gloss, MMR) — where is its photo (marker A) and what does it show (parotitis swelling?). Be exhaustive.`));
  writeFileSync('/tmp/m24-vlm-census.txt', out.join('\n\n'));
  console.log('census written, ' + out.join('\n\n').length + ' chars');
}
main().catch((e) => { console.error('M24 VLM census failed:', (e as any)?.message || e); process.exit(1); });
