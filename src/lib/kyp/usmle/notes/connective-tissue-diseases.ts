import type { KypUsMLENote } from "../types";

// Biochemistry — Cellular (M3).
// Source: First Aid 2026, Part 1 pdf 71–72, 85 / book 49–50, 63
// (Osteogenesis imperfecta; Ehlers-Danlos syndrome; Menkes disease;
//  Marfan syndrome vs homocystinuria; Williams syndrome)

export const connectiveTissueDiseases: KypUsMLENote = {
  id: "connective-tissue-diseases",
  title: "Connective Tissue Diseases (OI, EDS, Menkes, Marfan, Homocystinuria, Williams)",
  subtitle:
    "Five genetic reads of one extracellular matrix: brittle bones with blue sclerae (OI), hyperextensible everything (EDS), copper-starved cross-links (Menkes), the fibrillin-TGF-β tall patient (Marfan vs homocystinuria), and the deleted-elastin elfin child (Williams).",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Cellular",
  pilotCategory: "Connective tissue genetic disorders — collagen, fibrillin, copper, elastin",
  difficulty: 2,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 49–50, 63 (osteogenesis imperfecta; Ehlers-Danlos syndrome; Menkes disease; Marfan syndrome vs homocystinuria; Williams syndrome)",
  tags: [
    "osteogenesis imperfecta",
    "blue sclerae",
    "Ehlers-Danlos",
    "Menkes disease",
    "Marfan syndrome",
    "FBN1",
    "homocystinuria",
    "Williams syndrome",
    "fibrillin",
    "elastin",
    "bisphosphonates",
  ],
  core: {
    what: "Osteogenesis imperfecta is a genetic bone disorder most commonly from COL1A1/COL1A2 mutations with ↓ production of otherwise normal type I collagen — brittle bones, blue sclerae, dentinogenesis imperfecta, hearing loss (BITE). Ehlers-Danlos is faulty collagen synthesis with hyperextensible skin and hypermobile joints; the classical type is type V collagen (COL5A1/COL5A2) and the vascular type is type III (COL3A1). Menkes disease is X-linked recessive impaired copper absorption/transport (ATP7A) → ↓ lysyl oxidase → defective collagen cross-linking. Marfan is AD FBN1 on chromosome 15 → defective fibrillin-1, which sheathes elastin and sequesters TGF-β. Williams is a 7q11 microdeletion including the elastin gene.",
    why: "This cluster is the exam's image-recognition heartland: blue sclerae, hyperextensible skin, pectus deformity with arachnodactyly, and elfin facies are the photographs; the discrimination work is OI vs child abuse, Marfan vs homocystinuria (lens direction, inheritance, thrombosis), and the collagen-type ↔ EDS-type mapping.",
    keyIdea: "Sort the diseases by matrix molecule: type I collagen (OI), type V/III collagen (EDS classical/vascular), copper-dependent cross-linking (Menkes), fibrillin-1 + TGF-β (Marfan), and elastin dosage (Williams supravalvular stenosis). The molecule predicts the phenotype, and the phenotype names the molecule.",
  },
  mechanisms: [
    {
      id: "oi-collagen-type-i",
      title: "OI — the type I collagen quantity defect",
      context: "COL1A1/COL1A2 mutation (most commonly autosomal dominant)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Gene defect (most commonly COL1A1 and COL1A2)",
            sublabel: "Molecular — type I collagen's two chains; a variety of gene defects can cause the brittle-bone phenotype.",
            variant: "input",
          },
          {
            id: "s1",
            label: "↓ production of otherwise normal type I collagen (altered triple helix formation)",
            sublabel: "Molecular — quantity, not quality: the chains made are normal but too few.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Osteoblasts lay down thin, fragile bone matrix",
            sublabel: "Pathway — bone (made by osteoblasts) is the flagship type I tissue.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Multiple fractures and bone deformities after minimal trauma (eg, during birth)",
            sublabel: "Output — the brittle-bone phenotype; blue sclerae from thin, translucent scleral collagen revealing choroidal veins.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Dentinogenesis imperfecta (opalescent teeth) + hearing loss (abnormal ossicles) — patients can't BITE",
            sublabel: "Output — Bones, I (eye), Teeth, Ear: the full tetrad.",
            variant: "output",
          },
          {
            id: "x1",
            label: "May be confused with child abuse",
            sublabel: "Clinical — multiple fractures at different healing stages mimic nonaccidental trauma; blue sclerae, family history, and osteopenia discriminate.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Treat with bisphosphonates to ↓ fracture risk",
            sublabel: "Clinical — antiresorptive therapy thickens osteopenic bone.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "↓ type I" },
          { from: "s2", to: "o1", label: "fragile matrix" },
          { from: "s1", to: "o2", label: "sclera/dentin/ossicles" },
          { from: "x1", to: "o1", label: "mimics" },
          { from: "x2", to: "s2", type: "inhibit", label: "bisphosphonates" },
        ],
        caption:
          "OI is arithmetic: less normal type I collagen → less bone, thinner sclerae, weaker dentin, deformed ossicles. The four-organ readout is the BITE mnemonic — Bones, I (eye), Teeth, Ear — and the two management notes travel with it: consider child abuse in the differential, treat with bisphosphonates.",
      },
    },
    {
      id: "marfan-fibrillin-tgf-beta",
      title: "Marfan — fibrillin-1 scaffolding plus unsequestered TGF-β",
      context: "FBN1 mutation, chromosome 15, autosomal dominant",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "FBN1 gene mutation on chromosome 15 (fifteen)",
            sublabel: "Molecular — autosomal dominant with variable expression and pleiotropy: skeleton, heart, and eyes from one gene.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Defective fibrillin-1 — the glycoprotein sheath around elastin that sequesters TGF-β",
            sublabel: "Molecular — two jobs lost at once: mechanical scaffolding and growth-factor custody.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Weak elastic matrix + free TGF-β signaling in the aortic wall",
            sublabel: "Pathway — cystic medial necrosis of the aorta; the root dilates under systolic stress.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Aortic root aneurysm rupture or dissection — most common cause of death",
            sublabel: "Output — the complication that defines prognosis and surveillance.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Skeletal and ocular phenotype: tall with long extremities, pectus carinatum or excavatum, arachnodactyly, hypermobile joints, lens subluxation (upward/temporal), MVP, ↑ risk of spontaneous pneumothorax",
            sublabel: "Output — the body-habitus cluster every vignette leads with.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Homocystinuria (cystathionine-β-synthase deficiency) mimics the habitus — but lens dislocates downward/nasal, thrombosis dominates, inheritance is AR, intellect decreases",
            sublabel: "Clinical — the look-alike the comparison table exists for: 'Marfan fans out' (upward/temporal) vs downward/nasal.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "defective fibrillin" },
          { from: "s1", to: "s2", label: "sheath + TGF-β" },
          { from: "s2", to: "o1", label: "aortic root" },
          { from: "s1", to: "o2", label: "matrix + pleiotropy" },
          { from: "x1", to: "o2", label: "mimic" },
        ],
        caption:
          "Marfan is one gene with two consequences: defective fibrillin-1 scaffolding weakens elastic tissue (aortic root, MVP, pneumothorax risk), and lost TGF-β sequestration drives cystic medial necrosis → aneurysm/dissection, the most common cause of death. Homocystinuria copies the habitus and reverses the lens and the vessels (down/nasal, thrombosis).",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Osteogenesis imperfecta — the brittle bone disease",
      body: [
        "Osteogenesis imperfecta is a genetic bone disorder (brittle bone disease) caused by a variety of gene defects, most commonly COL1A1 and COL1A2. The most common form is autosomal dominant with ↓ production of otherwise normal type I collagen — the helix forms, just not enough of it, which distinguishes the common type I quantity defect from the severe perinatal forms with structural defects (altered triple helix formation).",
        "The manifestations follow type I collagen's distribution: multiple fractures and bone deformities after minimal trauma (even during birth), blue sclerae from thin, translucent scleral collagen revealing the choroidal veins beneath, dentinogenesis imperfecta with opalescent teeth that wear easily from lack of dentin, and hearing loss from abnormal ossicles. First Aid compresses the tetrad into the patient who can't BITE: Bones, I (eye), Teeth, Ear.",
        "Two management facts complete the stem set: OI may be confused with child abuse — a distinction with real consequences, where blue sclerae, dentinogenesis imperfecta, family history, and diffuse osteopenia point to the gene rather than the guardian — and treatment with bisphosphonates ↓ fracture risk by slowing resorption of the already-thin matrix.",
      ],
    },
    {
      kind: "visual",
      visualId: "blue-sclerae-oi",
      title: "Blue sclerae — the OI eye sign",
      caption:
        "A pair of eyes rendered as a diagnostic-pattern original: the normal white sclera beside the osteogenesis-imperfecta eye, where thin, translucent scleral collagen lets the underlying choroidal veins show through as a diffuse pale-blue scleral tint. The diagnostic pattern — blue-grey scleral hue in both eyes, present from infancy — is preserved as the finding the photograph would carry.",
      notice:
        "Blue sclerae is the single most quoted OI sign because it is visible in the stem's first sentence. The mechanism is the teaching point: not pigment, but optics — translucent collagen over dark choroid.",
    },
    {
      kind: "visual",
      visualId: "oi-bone-fragility",
      title: "Bone fragility — the radiographic pattern of OI",
      caption:
        "A long-bone radiograph pattern drawn as an original: the OI extremity with thin cortices, generalized osteopenia, bowing deformity, and multiple fracture lines at different healing stages (some calloused, some fresh) contrasted with a normal dense cortex beside it — the pattern that forces the child-abuse differential.",
      notice:
        "Read the film like the exam does: osteopenia + fractures at mixed healing stages in a child. Add blue sclerae or opalescent teeth and the gene wins; add inconsistent history and varying fracture ages without matrix disease and abuse wins.",
      },
    {
      kind: "text",
      title: "Ehlers-Danlos syndrome — faulty collagen synthesis",
      body: [
        "EDS is faulty collagen synthesis producing hyperextensible and often thin or transparent skin, hypermobile joints, and an ↑ tendency to bleed (easy bruising). Multiple types exist; inheritance and severity vary, and it can be autosomal dominant or recessive — but three types carry the exam's attention.",
        "The hypermobility type (joint instability) is the most common type. The classical type (joint and skin symptoms) is caused by a mutation in type V collagen (eg, COL5A1, COL5A2). The vascular type — fragile tissues including vessels (eg, aorta), muscles, and organs prone to rupture (eg, gravid uterus) — comes from mutations in type III procollagen (eg, COL3A1), matching the threE-D rule taught with the collagen table. EDS can also be caused by procollagen peptidase deficiency, which blocks the pipeline's cleavage station directly.",
        "The complications define the danger: joint dislocation, berry and aortic aneurysms, and organ rupture — the vascular type's tissue fragility is the reason pregnancy carries uterine-rupture risk and why arterial events appear in a young person with soft, stretchy skin.",
      ],
    },
    {
      kind: "visual",
      visualId: "eds-hyperextensible-skin",
      title: "EDS — hyperextensibility and hypermobility patterns",
      caption:
        "The EDS phenotype drawn as clinical-pattern originals: skin stretched far beyond normal at the forearm and recoiling back, thin translucent skin with visible veins and easy bruising, and the thumb-to-forearm hypermobility maneuver — the bedside tests the photographs demonstrate, each paired with a normal-range reference.",
      notice:
        "The pattern to preserve is the excess: stretch that goes well past normal range and returns, joints that travel past anatomical limits, skin that shows its veins. Distribution matters — vascular-type EDS looks mild on the surface and lethal at the arteries.",
    },
    {
      kind: "text",
      title: "Menkes disease — copper transport and cross-links",
      body: [
        "Menkes disease is an X-linked recessive connective tissue disease caused by impaired copper absorption and transport due to a defective Menkes protein ATP7A (Absent copper), versus ATP7B in Wilson disease (copper Buildup). The biochemical result is ↓ activity of lysyl oxidase — copper is a necessary cofactor — and therefore defective collagen (and elastin) cross-linking.",
        "The phenotype reads like the cofactor list: brittle, 'kinky' hair (pili torti on microscopy), growth and developmental delay, hypotonia, and ↑ risk of cerebral aneurysms from weak elastic vessel walls. The X-linked pedigree — affected boys, carrier mothers — plus kinky hair is the recognizable front door.",
      ],
    },
    {
      kind: "text",
      title: "Marfan syndrome — fibrillin, TGF-β, and the aortic root",
      body: [
        "Marfan syndrome is an autosomal dominant connective tissue disorder (with variable expression and symptoms due to pleiotropy) affecting skeleton, heart, and eyes. The FBN1 gene mutation on chromosome 15 (fifteen) results in defective fibrillin-1, a glycoprotein that forms a sheath around elastin and sequesters TGF-β.",
        "Findings: tall with long extremities; chest wall deformity (pectus carinatum [pigeon chest] or pectus excavatum); hypermobile joints; long, tapering fingers and toes (arachnodactyly); cystic medial necrosis of aorta; aortic root aneurysm rupture or dissection (most common cause of death); mitral valve prolapse; and ↑ risk of spontaneous pneumothorax. Every element is elastic-tissue or TGF-β-directed matrix failing under mechanical load — which is why the aortic root, under the greatest systolic stress, is the killer.",
      ],
    },
    {
      kind: "visual",
      visualId: "pectus-carinatum-marfan",
      title: "Pectus deformities — the Marfan chest wall",
      caption:
        "The anterior chest drawn as an original pair: pectus carinatum, with the sternum and costal cartilages protruding outward (pigeon chest), and pectus excavatum, with the sternum depressed inward — the two Marfan chest-wall configurations, shown against a normal chest profile for contrast, with the tall habitus and long extremities hinted in the figure frame.",
      notice:
        "Chest-wall deformity is part of the habitus cluster: tall, long extremities, arachnodactyly, pectus carinatum or excavatum. In the stem, pectus plus a murmur of mitral valve prolapse or a dilated aortic root is Marfan until proven otherwise.",
      },
    {
      kind: "compare",
      title: "Marfan syndrome vs homocystinuria — the source table verbatim",
      intro: "First Aid's side-by-side discriminator table for the two tall, lens-subluxated patients.",
      columns: ["Marfan syndrome", "Homocystinuria"],
      rows: [
        { label: "INHERITANCE", a: "Autosomal dominant", b: "Autosomal recessive" },
        { label: "INTELLECT", a: "Normal", b: "Decreased" },
        { label: "VASCULAR COMPLICATIONS", a: "Aortic root dilatation", b: "Thrombosis" },
        { label: "LENS DISLOCATION", a: "Upward/temporal (Marfan fans out)", b: "Downward/nasal" },
      ],
    },
    {
      kind: "text",
      title: "Williams syndrome — the deleted elastin, third chromosome-7 syndrome",
      body: [
        "Williams syndrome is a congenital microdeletion of the long arm of chromosome 7, and the deleted region includes the elastin gene. The findings line up as the friendliest complex-development vignette in the book: distinctive 'elfin' facies, intellectual disability, hypercalcemia, well-developed verbal skills, extreme friendliness with strangers, and cardiovascular problems — supravalvular aortic stenosis, pulmonary artery stenosis, and renal artery stenosis among them.",
        "The elastin dose explains the vascular half: half the elastin gene content yields stiff, narrowed supravalvular and pulmonary arteries — stenotic lesions, in contrast to Marfan's dilating ones. The hypercalcemia (often with a vexing workup for other causes) and the social profile — verbally fluent, socially fearless, developmentally delayed — complete the recognizable gestalt.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) blue sclerae + multiple fractures → OI (COL1A1/A2) — with the child-abuse distractor; (2) hyperextensible skin + hypermobile joints + arterial/organ rupture → EDS, typed by collagen (classical = type V, vascular = type III 'threE D'); (3) the tall-patient discriminator — lens up and temporal with aortic root = Marfan; lens down and nasal with thrombosis and ↓ intellect = homocystinuria; (4) kinky hair + hypotonia in a boy (X-linked) → Menkes ATP7A; (5) elfin facies + hypercalcemia + extreme friendliness + supravalvular AS → Williams (7q deletion including elastin).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "OI vs child abuse — the stakes of the differential",
      body: "Both present with fractures at various healing stages in a young child. OI argues with its own cluster: blue sclerae, dentinogenesis imperfecta, hearing-loss family history, diffuse osteopenia on film, and fractures from minimal documented trauma (even during birth). Abuse argues with inconsistent histories, fractures of different ages without matrix disease, and other injury patterns. Because missed abuse and false accusation are both catastrophic, the exam expects both answers to be held simultaneously — and bisphosphonate treatment for OI proceeds regardless.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The chromosome-7 friend and the chromosome-15 family",
      body: "Two chromosome-number pairs close the page: Williams = microdeletion of chromosome 7's long arm including ELN; Marfan = FBN1 on chromosome 15 (fifteen — the mnemonic is the number itself). Elastin deleted → stenotic vessels and a friendly child; fibrillin defective → dilating aorta and a tall one. Same matrix neighborhood, opposite vascular geometry.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "The EDS type-to-gene card",
      body: [
        "Hypermobility type (joint instability) — the most common type; classical type (joint and skin symptoms) — type V collagen (COL5A1, COL5A2); vascular type (fragile vessels, muscles, organs including gravid uterus) — type III procollagen (COL3A1). Procollagen peptidase deficiency is the enzyme-level cause that plugs directly into the synthesis pipeline.",
        "The emergency-relevant fact: berry and aortic aneurysms plus organ rupture mean an EDS patient's 'simple' complaint deserves vascular imaging — the vascular type can present with an arterial or visceral catastrophe as the first sign, in a patient whose skin merely looked soft.",
      ],
    },
    {
      kind: "text",
      title: "Williams syndrome — the full phenotype card",
      body: [
        "Congenital microdeletion of the long arm of chromosome 7, deleted region including the elastin gene. Findings: distinctive 'elfin' facies, intellectual disability, hypercalcemia, well-developed verbal skills, extreme friendliness with strangers, cardiovascular problems (supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis — hypertension from the renal lesion is the follow-up question).",
        "Management is expectant and system-directed: cardiovascular surveillance for the stenotic lesions, calcium monitoring during childhood, and developmental support that leans into the retained verbal strengths.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A toddler has had four fractures with minimal trauma since birth; examination reveals blue-tinged sclerae and opalescent, worn teeth; the father wears hearing aids.",
        discriminator: "Blue sclerae + dentinogenesis imperfecta + hearing loss in the family",
        concept: "Type I collagen quantity defect",
        answer: "Osteogenesis imperfecta — COL1A1/COL1A2, AD, ↓ production of otherwise normal type I collagen (BITE)",
      },
      {
        stem: "A 6-year-old can touch her thumb to her forearm; her skin stretches several centimeters and recoils; bruises appear easily; her mother died of aortic rupture at 29.",
        discriminator: "Hyperextensible skin + hypermobile joints + familial arterial rupture",
        concept: "Faulty collagen synthesis",
        answer: "Ehlers-Danlos syndrome — vascular type, type III procollagen (COL3A1); classical type = type V (COL5A1/A2)",
      },
      {
        stem: "A tall 16-year-old with long limbs and a pigeon chest has a lens subluxation noted on slit lamp; echocardiography shows aortic root dilatation and mitral valve prolapse.",
        discriminator: "Lens UP and temporal + aortic root dilatation + AD family history",
        concept: "Fibrillin-1 / TGF-β dysregulation",
        answer: "Marfan syndrome — FBN1 on chromosome 15; aortic root aneurysm rupture/dissection is the most common cause of death",
      },
      {
        stem: "A tall boy with intellectual disability and scoliosis presents with a painful swollen leg; the lens is dislocated downward and nasally; homocysteine is markedly elevated.",
        discriminator: "Lens DOWN and nasal + thrombosis + ↓ intellect + AR inheritance",
        concept: "Cystathionine-β-synthase deficiency",
        answer: "Homocystinuria — the Marfan mimic with thrombosis instead of aortic root disease",
      },
      {
        stem: "A 3-year-old with elfin facies is notably talkative and socially fearless; she has a supravalvular aortic stenosis murmur and serum calcium of 11.8 mg/dL.",
        discriminator: "Elfin facies + hypercalcemia + friendliness + supravalvular AS",
        concept: "Contiguous gene deletion including elastin",
        answer: "Williams syndrome — 7q microdeletion including the elastin gene",
      },
    ],
    traps: [
      {
        a: "Marfan syndrome",
        b: "Homocystinuria",
        whyConfused: "Both: tall, long extremities, arachnodactyly, pectus deformity, lens subluxation, joint hyperlaxity.",
        keyDifference: "Marfan is AD with normal intellect, aortic root dilatation, and lens dislocation upward/temporal ('fans out'); homocystinuria is AR with ↓ intellect, thrombosis, and lens dislocation downward/nasal.",
        clue: "Lens direction + vessel lesion + family pedigree — three discriminators in the source's own table.",
      },
      {
        a: "Osteogenesis imperfecta",
        b: "Child abuse",
        whyConfused: "Multiple fractures at different healing stages in a young child.",
        keyDifference: "OI adds blue sclerae, dentinogenesis imperfecta, hearing loss, osteopenia, and fractures from minimal trauma (even birth); abuse adds inconsistent history and other injury patterns.",
        clue: "Blue sclerae or opalescent teeth in the child or parent = matrix disease, not maltreatment — but hold both in mind.",
      },
      {
        a: "Classical EDS",
        b: "Vascular EDS",
        whyConfused: "Both are 'Ehlers-Danlos' with skin and joint findings.",
        keyDifference: "Classical (joint and skin symptoms) = type V collagen (COL5A1/COL5A2); vascular (fragile vessels/organs, gravid uterus rupture) = type III procollagen (COL3A1) — the threE D rule.",
        clue: "Which collagen number is the question; ruptured aorta or uterus makes it type III.",
      },
      {
        a: "Menkes disease",
        b: "Williams syndrome",
        whyConfused: "Both are genetic connective-tissue syndromes with distinctive facies/hair and cardiovascular lesions.",
        keyDifference: "Menkes is X-linked ATP7A copper transport failure → ↓ lysyl oxidase → kinky brittle hair, hypotonia, developmental delay, cerebral aneurysms; Williams is a 7q deletion including elastin → elfin facies, hypercalcemia, friendliness, supravalvular stenosis.",
        clue: "Kinky hair + boy = Menkes; elfin facies + hypercalcemia = Williams.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'tall patient with eye findings' stem offering Marfan, homocystinuria, and EDS",
        differentiator: "Lens direction, intellect, thrombosis vs aortic disease, inheritance",
        correctPath: "Up/temporal lens + aortic root + AD + normal intellect → Marfan (FBN1); down/nasal lens + thrombosis + AR + ↓ intellect → homocystinuria (CBS); hyperextensible skin/joints without lens findings → EDS (COL5A1/A2 or COL3A1).",
      },
      {
        lookAlike: "A 'fractures in a child' stem offering OI and nonaccidental trauma",
        differentiator: "Matrix signs (blue sclerae, dentinogenesis imperfecta, osteopenia) and trauma-plausibility",
        correctPath: "Signs of type I collagen deficiency with minimal-trauma history → OI (treat with bisphosphonates); inconsistent history without matrix signs → child abuse — both are reportable considerations.",
      },
    ],
    miniCase: {
      vignette:
        "A 15-year-old boy is evaluated for a heart murmur. He is tall with an arm span exceeding his height, long tapering fingers, and a protruding sternum noted on chest examination. Slit-lamp examination shows superotemporal lens dislocation; he reads at grade level and has no learning difficulties. An early diastolic click is audible, and echocardiography demonstrates mitral valve prolapse with an aortic root diameter at the upper limit of normal for body size. His father died at 42 of an aortic dissection.",
      question: "The defective protein in this patient normally performs which function?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Forms a sheath around elastin and sequesters TGF-β",
          why: "Correct. FBN1 on chromosome 15 encodes fibrillin-1, a glycoprotein that sheathes elastin and sequesters TGF-β. Defective fibrillin-1 weakens elastic tissue (cystic medial necrosis, aortic root aneurysm/dissection — the most common cause of death — and MVP) and releases TGF-β signaling; the lens dislocates upward and temporally, and intellect is normal.",
        },
        {
          label: "B",
          text: "Cross-links collagen fibrils as a copper-containing enzyme",
          why: "That is lysyl oxidase — the Menkes pathway. Nothing here suggests copper failure; kinky hair, hypotonia, and X-linked inheritance would accompany it.",
        },
        {
          label: "C",
          text: "Catalyzes the first step of transsulfuration, converting homocysteine to cystathionine",
          why: "That is cystathionine-β-synthase — homocystinuria, the great mimic. But homocystinuria sends the lens downward and nasally, adds thrombosis and decreased intellect, and inherits recessively; this boy's father died of the dominant family disease.",
        },
        {
          label: "D",
          text: "Provides tensile strength as the most abundant collagen type in bone and skin",
          why: "That is type I collagen — the OI answer (COL1A1/A2). This patient's bones are not fragile, his sclerae are not blue, and the aortic/ocular phenotype points to fibrillin.",
        },
        {
          label: "E",
          text: "Contributes half-strength elastin dosage from a deleted chromosome-7 region",
          why: "That is the Williams mechanism (7q microdeletion including ELN) — which causes supravalvular stenosis, elfin facies, and hypercalcemia, not a dilating aortic root with arachnodactyly.",
        },
      ],
      reasoning:
        "The habitus cluster (tall, arm span > height, arachnodactyly, pectus carinatum) plus upward/temporal lens dislocation, MVP with aortic root involvement, normal intellect, and an affected father (autosomal dominant) is Marfan syndrome complete. The question converts the phenotype into fibrillin-1's dual function — elastin sheath plus TGF-β sequestration — which is precisely the sentence First Aid puts under FBN1, and every distracker names another gene from this same page.",
    },
  },
  mnemonics: [
    {
      code: "“Patients can't BITE”",
      meaning: "Bones (multiple fractures), I (eye = blue sclerae), Teeth (dentinogenesis imperfecta), Ear (hearing loss) — the osteogenesis imperfecta tetrad.",
      memorizes: "OI manifestations",
      whenToUse: "Any OI vignette or child-abuse differential.",
      clinical: "Treat with bisphosphonates to ↓ fracture risk; blue sclerae from translucent collagen over choroidal veins.",
    },
    {
      code: "“Marfan fans out; homocystinuria hides low”",
      meaning: "Marfan lens dislocation is upward/temporal (fans out); homocystinuria lens dislocation is downward/nasal.",
      memorizes: "The lens-direction discriminator row of the comparison table",
      whenToUse: "Any tall-patient discrimination stem.",
      clinical: "Up/out + aortic root = Marfan; down/in + thrombosis + ↓ intellect = homocystinuria (CBS deficiency, AR).",
    },
    {
      code: "“ATP7A = Absent copper; ATP7B = Buildup”",
      meaning: "The Menkes protein ATP7A moves copper OUT of enterocytes into blood — its failure means copper (and cross-links) are Absent; ATP7B failures cause copper Buildup (Wilson disease).",
      memorizes: "The two copper-transport ATPases",
      whenToUse: "Menkes vs Wilson discrimination and lysyl oxidase cofactor questions.",
      clinical: "Absent copper → ↓ lysyl oxidase → defective collagen cross-linking → kinky hair, hypotonia, aneurysms.",
    },
  ],
  rapidReview: {
    s30: [
      "OI: COL1A1/COL1A2, AD, ↓ production of normal type I collagen — can't BITE; bisphosphonates.",
      "Blue sclerae = thin, translucent scleral collagen revealing choroidal veins.",
      "EDS: faulty collagen — classical = type V (COL5A1/A2); vascular = type III (COL3A1), threE D.",
      "Menkes: X-linked ATP7A → ↓ lysyl oxidase (copper cofactor) → defective cross-linking → kinky hair.",
      "Marfan: AD FBN1 chromosome 15, defective fibrillin-1 (elastin sheath + TGF-β sequestration).",
      "Williams: 7q deletion including elastin — elfin facies, hypercalcemia, supravalvular AS.",
    ],
    m3: [
      "OI may be confused with child abuse; discriminating signs: blue sclerae, dentinogenesis imperfecta, osteopenia.",
      "Marfan most common cause of death: aortic root aneurysm rupture or dissection; also MVP and ↑ spontaneous pneumothorax risk.",
      "Homocystinuria = CBS deficiency, AR, ↓ intellect, thrombosis, lens downward/nasal — the source's four-row table.",
      "EDS vascular type: fragile vessels (aorta), organs (gravid uterus) — joint dislocation, berry and aortic aneurysms, organ rupture.",
      "Menkes findings: brittle kinky hair, growth/developmental delay, hypotonia, ↑ cerebral aneurysm risk.",
      "Williams: well-developed verbal skills, extreme friendliness with strangers, pulmonary artery and renal artery stenosis too.",
    ],
    m10: [
      "OI type I is the quantity defect (↓ otherwise normal type I collagen); severe perinatal forms alter triple helix formation.",
      "Dentinogenesis imperfecta = opalescent teeth wearing easily from lack of dentin.",
      "Marfan habitus metrics: ↑ arm:height ratio, ↓ upper:lower body segment ratio.",
      "Cystic medial necrosis of the aorta is the histologic correlate of the dilating root.",
      "EDS can be caused by procollagen peptidase deficiency (pipeline cleavage station).",
      "Pectus carinatum = pigeon chest; pectus excavatum = depressed sternum; both are Marfan chest-wall deformities.",
    ],
  },
  recall: [
    {
      q: "Which genes are most commonly mutated in osteogenesis imperfecta, and what is the collagen defect?",
      a: "COL1A1 and COL1A2 (most commonly autosomal dominant) — ↓ production of otherwise normal type I collagen (altered triple helix formation in severe forms).",
    },
    {
      q: "Why are the sclerae blue in OI?",
      a: "Thin, translucent scleral collagen reveals the underlying choroidal veins — optics, not pigment.",
    },
    {
      q: "Which collagen genes define classical and vascular EDS?",
      a: "Classical: type V collagen (COL5A1, COL5A2); vascular: type III procollagen (COL3A1) — the threE D rule.",
    },
    {
      q: "What is the Menkes biochemical lesion and its effect on the collagen pipeline?",
      a: "Defective ATP7A copper transport → ↓ lysyl oxidase activity (copper is a necessary cofactor) → defective collagen and elastin cross-linking.",
    },
    {
      q: "State the four discriminator rows of the Marfan vs homocystinuria table.",
      a: "Inheritance: AD vs AR; Intellect: normal vs decreased; Vascular: aortic root dilatation vs thrombosis; Lens: upward/temporal (fans out) vs downward/nasal.",
    },
    {
      q: "What is the most common cause of death in Marfan syndrome?",
      a: "Aortic root aneurysm rupture or dissection, on the background of cystic medial necrosis of the aorta.",
    },
    {
      q: "What is deleted in Williams syndrome and what are the findings?",
      a: "Congenital microdeletion of the long arm of chromosome 7 including the elastin gene — elfin facies, intellectual disability, hypercalcemia, well-developed verbal skills, extreme friendliness, supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis.",
    },
  ],
  related: [
    {
      title: "Collagen & Elastin",
      note: "The synthesis pipeline this disease cluster breaks: OI (helix station), vascular EDS (type III), Menkes (cross-link station) — every phenotype is a pipeline station.",
      topicId: "collagen-elastin",
    },
    {
      title: "Atherosclerosis",
      note: "The aortic pathology family: Marfan's cystic medial necrosis and root dilatation sit beside aneurysmal atherosclerotic disease in the same vessel-segment questions.",
      topicId: "atherosclerosis",
    },
    {
      title: "Mutations in DNA",
      note: "AD vs AR pedigrees, microdeletions (Williams), and pleiotropy (Marfan) — the inheritance logic is the mutations page applied.",
      topicId: "dna-mutations",
    },
    {
      title: "DNA Replication",
      note: "FBN1's triplet-repeat-free AD inheritance and collagen gene dosage connect back to replication fidelity and germline transmission.",
      topicId: "dna-replication",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiovascular",
      connection: "Aortic root dilatation/dissection in Marfan, berry/aortic aneurysms in EDS, and supravalvular stenosis in Williams — three vessel geometries from three matrix defects.",
    },
    {
      subject: "Ophthalmology",
      connection: "Lens subluxation direction (up/temporal vs down/nasal) and blue sclerae are this cluster's ocular discriminators.",
    },
    {
      subject: "Pediatrics",
      connection: "OI vs child abuse, bisphosphonate therapy, and Williams' hypercalcemia/developmental profile are pediatric board staples.",
    },
    {
      subject: "Genetics",
      connection: "Pleiotropy with variable expression (Marfan), AD vs AR discrimination, X-linked ATP7A, and 7q contiguous-gene deletion (Williams).",
    },
  ],
};
