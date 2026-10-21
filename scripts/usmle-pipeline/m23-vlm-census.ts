import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [
    { role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: dataUrl } },
    ] },
  ];
  const response = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages,
    thinking: { type: 'disabled' },
  });
  return response.choices?.[0].message?.content ?? JSON.stringify(response);
}

async function main() {
  const zai = await ZAI.create();
  const p183 = `data:image/png;base64,${readFileSync('/tmp/m23page-183.png').toString('base64')}`;
  const p185 = `data:image/png;base64,${readFileSync('/tmp/m23page-185.png').toString('base64')}`;
  const out: string[] = [];

  out.push('===== PDF PAGE 183 (book 161) =====');
  out.push(await ask(zai, p183, `This is page 161 of First Aid for the USMLE Step 1 2026, Microbiology — Virology, 'DNA viruses'. Describe PRECISELY:
1. The banner (exact spelling — note any typo).
2. The intro line above the table (verbatim, including any mnemonic in quotes).
3. The table: column headers, and the 7 family rows — for each: VIRAL FAMILY, ENVELOPE (Yes/No), DNA STRUCTURE (with parentheticals like 'largest DNA virus', 'smallest DNA virus; parvus = small'), and the MEDICAL IMPORTANCE content (verbatim-ish).
4. The two photographs on this page: where are markers A and B exactly, and what does each show (A = molluscum bodies? B = pharyngitis?)?
Be exhaustive.`));

  out.push('===== PDF PAGE 185 (book 163) =====');
  out.push(await ask(zai, p185, `This is page 163 of First Aid for the USMLE Step 1 2026, Microbiology — Virology, 'Herpesviruses (continued)'. Describe PRECISELY:
1. The banner (exact spelling).
2. The photo gallery at the top: there should be ~10-12 small photographs with letter markers A through J. For EACH letter, state exactly what the photo shows (A gingivostomatitis/keratoconjunctivitis? B cold sores/herpes labialis? C neonatal herpes? D chickenpox? E shingles? F hepatosplenomegaly (with Liv/Sp labels)? G atypical lymphocytes smear? H owl-eye inclusions? I roseola rash? J Kaposi sarcoma?). Also the 'Liv'/'Sp' labels and any unmarked photos.
3. The 'HSV identification' block: verbatim (PCR of skin lesions; CSF PCR; Tzanck test; Cowdry A inclusions; the A marker photo for Tzanck).
4. The 'Receptors used by viruses' table: all 7 rows verbatim (CMV, EBV, HIV, Parvovirus B19, Rabies, Rhinovirus, SARS-CoV-2 with their receptors).
Be exhaustive.`));

  writeFileSync('/tmp/m23-vlm-census.txt', out.join('\n\n'));
  console.log(out.join('\n\n').slice(0, 6000));
}
main().catch((e) => { console.error('M23 VLM census failed:', (e as any)?.message || e); process.exit(1); });
