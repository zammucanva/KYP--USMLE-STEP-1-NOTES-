import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

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
  return response.choices?.[0]?.message?.content ?? JSON.stringify(response);
}

async function main() {
  const zai = await ZAI.create();
  const p169 = `data:image/png;base64,${readFileSync('/tmp/m15page-169.png').toString('base64')}`;
  const p170 = `data:image/png;base64,${readFileSync('/tmp/m15page-170.png').toString('base64')}`;
  console.log('===== PDF PAGE 169 (book 147) =====');
  console.log(await ask(zai, p169, `This is page 147 of First Aid for the USMLE Step 1 2026, Microbiology — Clinical Bacteriology. Describe the layout PRECISELY:
1. The Gardnerella vaginalis entry: full verbatim text (left column) and its side box (whiff test, pH, treatment) — where is the photo and its marker A? What does it show (clue cells)?
2. The Zoonotic bacteria table: the column headers (SPECIES | DISEASE | TRANSMISSION AND SOURCE) and ALL 17 rows verbatim — for each row give species, disease, and transmission exactly as printed.
Be exhaustive.`));
  console.log('===== PDF PAGE 170 (book 148) =====');
  console.log(await ask(zai, p170, `This is page 148 of First Aid for the USMLE Step 1 2026, Microbiology. The page is 'Rickettsial diseases and vector-borne illnesses' with a RASH COMMON / RASH RARE split. Describe PRECISELY:
1. The two-column or stacked layout: which blocks are on the left vs right? Where do RASH COMMON and RASH RARE sit?
2. RASH COMMON blocks verbatim: Rocky Mountain spotted fever (with the wrists A photo, the classic triad, the CARS mnemonic box), Typhus (endemic/epidemic, rash distribution), Ehrlichiosis (morulae B photo, MEGA box), Anaplasmosis (morulae C photo), Q fever (the Quite Complicated box).
3. RASH RARE: Mycoplasma pneumoniae — verbatim text (walking pneumonia, <30 years old, macrolides/doxycycline/fluoroquinolone, no cell wall, Eaton agar, cold agglutinins, CXR more severe than presentation, the cold-without-a-coat box). Where is its photo (Pleomorphic A) and what does it show?
4. Where are the photographs and markers A/B/C exactly?
Be exhaustive.`));
}
main().catch((e) => { console.error('M15 VLM census failed:', (e as any)?.message || e); process.exit(1); });
