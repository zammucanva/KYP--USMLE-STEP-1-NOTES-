import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [ { role: 'user', content: [ { type: 'text', text: prompt }, { type: 'image_url', image_url: { url: dataUrl } } ] } ];
  const response = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  return response.choices?.[0]?.message?.content ?? JSON.stringify(response);
}
async function main() {
  const zai = await ZAI.create();
  const p171 = `data:image/png;base64,${readFileSync('/tmp/m16page-171.png').toString('base64')}`;
  const p172 = `data:image/png;base64,${readFileSync('/tmp/m16page-172.png').toString('base64')}`;
  console.log('===== PDF PAGE 171 (book 149) =====');
  console.log(await ask(zai, p171, `This is page 149 of First Aid for the USMLE Step 1 2026, MYCOLOGY — Systemic mycoses. Describe PRECISELY:
1. The intro lines verbatim (dimorphic fungi rule; Coccidioides spherule exception; granulomas like TB; not transmitted person-to-person; treatment line).
2. THE TABLE: it has 4 disease rows (Histoplasmosis, Blastomycosis, Coccidioidomycosis, Paracoccidioidomycosis) and 5 columns (DISEASE | ENDEMIC LOCATION | PATHOLOGIC FEATURES | UNIQUE SIGNS/SYMPTOMS | NOTES). For EACH disease give each column's cell verbatim.
3. Where are the photos and their markers (A after 'smaller than RBC'; B after 'same size as RBC'; C after 'verrucous lesions'; D after 'much larger than RBC'; E after 'captain's wheel formation')? Describe each photo's content.
4. The bottom region emits extra strings: 'A / Blastomycosis / Coccidioidomycosis / Paracoccidioidomycosis / C / Blastomycosis Histoplasmosis Coccidiodomycosis' — where do these sit on the printed page (row headers? a disease-name rail? repeated headers?)
Be exhaustive.`));
  console.log('===== PDF PAGE 172 (book 150) =====');
  console.log(await ask(zai, p172, `This is page 150 of First Aid for the USMLE Step 1 2026, MYCOLOGY — Opportunistic fungal infections. Describe PRECISELY:
1. Candida albicans: verbatim text (alba = white; dimorphic; pseudohyphae and budding yeasts at 20C with marker A; germ tubes at 37C with marker B; oral thrush with marker C; the disease list; the treatment ladder).
2. Aspergillus fumigatus: verbatim (acute angle 45 D; aspergillomas E; catalase-positive with CGD; aflatoxins/TP53/HCC; voriconazole; ABPA).
3. Cryptococcus neoformans: verbatim (5-10 um narrow budding; heavily encapsulated; India ink clear halo F; mucicarmine red inner capsule G; latex agglutination; soap bubble lesions; amphotericin B + flucytosine then fluconazole).
4. Mucor and Rhizopus spp: verbatim (irregular broad nonseptate hyphae at wide angles H; DKA/neutropenia; rhinocerebral + cribriform plate; black necrotic eschar I; surgical debridement + amphotericin B or isavuconazole).
5. THE PHOTO LAYOUT: the text layer emits 9 markers (A B C D E F G H I) but pdfimages counts only 5 rasters. Where exactly does each photo sit, which markers share a photo or point into a composite micrograph, and what does each show?
Be exhaustive.`));
}
main().catch((e) => { console.error(e); process.exit(1); });
