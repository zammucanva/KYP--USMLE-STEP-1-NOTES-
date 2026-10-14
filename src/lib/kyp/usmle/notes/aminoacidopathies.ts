import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 11).
// Source: First Aid 2026, Part 1 pdf 104–105 / book 82–83
// (phenylketonuria; maple syrup urine disease; alkaptonuria;
// homocystinuria; cystinuria; organic acidemias)

export const aminoAcidopathies: KypUsMLENote = {
  id: "aminoacidopathies",
  title: "Amino Acidopathies",
  subtitle:
    "The six inherited blocks of amino acid metabolism on two pages — PKU's tyrosine bottleneck (musty odor, hypopigmentation, the BH4 loop), MSUD's B1-branched-chain block (maple-syrup secretions), alkaptonuria's ochronosis (black urine, benign course), homocystinuria's four blocks (down-and-in lens, thrombosis), cystinuria's COLA transporter (hexagonal stones), and the organic acidemias' propionate highway (VOMIT substrates, dual inhibition of gluconeogenesis and the urea cycle).",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — PKU, MSUD, alkaptonuria, homocystinuria, cystinuria, organic acidemias",
  difficulty: 3,
  readTime: 14,
  sourceRef:
    "First Aid 2026, Part 1 pp. 82–83 (phenylketonuria; maple syrup urine disease; alkaptonuria; homocystinuria; cystinuria; organic acidemias)",
  tags: [
    "phenylketonuria",
    "PKU",
    "phenylalanine hydroxylase",
    "tyrosine",
    "BH4",
    "tetrahydrobiopterin",
    "dihydropteridine reductase",
    "aspartame",
    "phenylalanine embryopathy",
    "maple syrup urine disease",
    "branched-chain alpha-ketoacid dehydrogenase",
    "thiamine",
    "alkaptonuria",
    "homogentisate oxidase",
    "ochronosis",
    "homocystinuria",
    "cystathionine synthase",
    "methionine synthase",
    "MTHFR",
    "cystinuria",
    "COLA",
    "cystine stones",
    "nitroprusside test",
    "organic acidemias",
    "propionic acidemia",
    "methylmalonic acidemia",
    "propionyl-CoA carboxylase",
    "methylmalonyl-CoA mutase",
    "VOMIT",
  ],
  core: {
    what: "Six autosomal recessive (except none here are X-linked — that flag belongs to OTC deficiency in the urea cycle) blocks of amino acid metabolism. PKU: ↓ phenylalanine hydroxylase (or its cofactor BH4) → ↑ phenylalanine → ↑ phenyl ketones in urine, tyrosine becomes essential; findings (now rare due to neonatal screening): intellectual disability, microcephaly, seizures, hypopigmented skin, eczema, musty body odor; treatment ↓ phenylalanine and ↑ tyrosine in diet (soy products, chicken, fish, milk) with tetrahydrobiopterin supplementation and aspartame avoidance. Maple syrup urine disease: blocked degradation of the branched amino acids (isoleucine, leucine, valine) due to ↓ branched-chain α-ketoacid dehydrogenase (B1) → ↑ α-ketoacids in the blood (especially leucine's), maple syrup/burnt sugar secretions, progressive neurologic decline; treat with isoleucine/leucine/valine restriction and thiamine. Alkaptonuria: congenital deficiency of homogentisate oxidase in the degradative pathway of tyrosine to fumarate → pigment-forming homogentisic acid builds up in tissue; bluish-black connective tissue, ear cartilage, and sclerae (ochronosis), urine turns black on prolonged exposure to air, debilitating arthralgias; usually benign. Homocystinuria: four autosomal recessive causes (cystathionine synthase deficiency; ↓ affinity of cystathionine synthase for pyridoxal phosphate; methionine synthase/homocysteine methyltransferase deficiency; MTHFR deficiency), all producing excess homocysteine — marfanoid habitus with down-and-in lens subluxation, osteoporosis, thrombosis and atherosclerosis (stroke, MI), kyphosis, intellectual disability, hypopigmented skin. Cystinuria: hereditary defect of the renal PCT and intestinal amino acid transporter that prevents reabsorption of Cystine, Ornithine, Lysine, and Arginine (COLA) → recurrent hexagonal cystine stones; detected with urinary sodium-cyanide nitroprusside test and proton NMR spectroscopy of urine; treat with urinary alkalinization (potassium citrate, acetazolamide), chelating agents (penicillamine), good hydration, and a diet low in methionine. Organic acidemias (propionic and methylmalonic acidemia): poor feeding, vomiting, hypotonia, high anion gap metabolic acidosis, hepatomegaly, seizures in infancy; organic acid accumulation inhibits gluconeogenesis (↓ fasting glucose, ↑ ketoacidosis) and the urea cycle (hyperammonemia).",
    why: "These are the highest trap-density two pages in metabolism: every disease pairs an enzyme block with a sensory signature (musty odor, maple syrup, black urine), an inheritance pattern (all autosomal recessive here), and a treatment that follows the blocked chemistry — and they are all newborn-screenable, which is why the exam loves the 'screen normal at birth, sick after feeds begin' timing. The mechanisms explain the findings: PKU's hypopigmentation is melanin starvation downstream of the tyrosine bottleneck; homocystinuria's thrombosis is endothelial injury from excess homocysteine; the organic acidemias' hyperammonemia without a urea-cycle lesion is the urea cycle inhibited by accumulating organic acids — the same labs that would otherwise point you to OTC deficiency.",
    keyIdea: "Read every aminoacidopathy as a traffic jam: substrate piles up behind the block (phenylalanine → phenyl ketones; homocysteine; propionyl-CoA), product starves beyond it (tyrosine, cysteine, succinyl-CoA), and the treatment either reroutes traffic (dietary restriction of what piles up, supplementation of what starves) or widens the road (cofactor loading — B6 for the pyridoxal-responsive synthase, B1 for MSUD, BH4 for PKU). The single map that organizes all six: phenylalanine → tyrosine → fumarate is one highway with three named exits (PKU, alkaptonuria, and — in the catecholamine map — albinism), while methionine's exit toward cysteine carries homocystinuria and the propionate exit toward succinyl-CoA carries the organic acidemias.",
  },
  mechanisms: [
    {
      id: "pah-bottleneck",
      title: "The tyrosine bottleneck — what happens when phenylalanine hydroxylase fails",
      context: "Autosomal recessive PAH deficiency (or BH4 cofactor deficiency)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "↑ Phenylalanine (dietary protein, aspartame, endogenous protein) with ↓ phenylalanine hydroxylase",
            sublabel: "Input — the gate substrate cannot cross the gate.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Phenylalanine diverts to phenyl ketones (phenylacetate, phenyllactate, phenylpyruvate) — ↑ in urine",
            sublabel: "Process — the backup route; musty body odor (aromatic amino acid metabolism).",
            variant: "process",
          },
          {
            id: "s2",
            label: "Tyrosine falls → tyrosine becomes essential; ↓ melanin, ↓ catecholamines, ↓ thyroxine",
            sublabel: "Process — hypopigmented skin, eczema, microcephaly, seizures, intellectual disability.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Treat: ↓ phenylalanine and ↑ tyrosine in diet (soy, chicken, fish, milk) + tetrahydrobiopterin supplementation; avoid aspartame (→ phenylalanine)",
            sublabel: "Output — reroute the traffic: restrict what piles up, supply what starves.",
            variant: "output",
          },
          {
            id: "x1",
            label: "BH4 deficiency (essential cofactor for PAH) or dihydropteridine reductase deficiency (BH2 → BH4 refund fails) — ↑ phenylalanine with varying severity; untreated patients typically die in infancy",
            sublabel: "Inhibitor — the cofactor-side blocks that mimic PKU.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "↑ Phe" },
          { from: "s1", to: "s2", label: "↓ Tyr" },
          { from: "s2", to: "o1", label: "diet + BH4" },
          { from: "x1", to: "s2", type: "inhibit", label: "no BH4 → no PAH" },
        ],
        caption:
          "PKU is a two-organ story: the liver cannot convert phenylalanine to tyrosine, so phenylalanine and its ketones accumulate (the musty odor is the aromatic-amine signature) while tyrosine-dependent products starve — melanin (hypopigmented skin), catecholamines, and thyroxine all fall downstream. The same bottleneck has a cofactor version: BH4 is the essential cofactor for PAH, and dihydropteridine reductase recycles BH2 back to BH4 using NADH + H+ — a block on either side of that loop raises phenylalanine with varying degrees of clinical severity (untreated BH4-deficiency patients typically die in infancy). Two timing facts the exam tests: screening at 2–3 days after birth is normal at birth because the maternal enzyme covers fetal life, and untreated maternal PKU causes phenylalanine embryopathy (fetal growth restriction, microcephaly, intellectual disability, congenital heart defects) preventable with dietary measures — which is why dietary control must continue into pregnancy.",
      },
    },
    {
      id: "organic-acid-dual-inhibition",
      title: "Why organic acids sicken — the dual inhibition",
      context: "Propionic or methylmalonic acidemia in infancy",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Propionyl-CoA accumulates (⊟ propionyl-CoA carboxylase + biotin) or methylmalonyl-CoA accumulates (⊟ methylmalonyl-CoA mutase or B12)",
            sublabel: "Input — VOMIT substrates (Valine, Odd-chain fatty acids, Methionine, Isoleucine, Threonine) feed the jam.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Organic acid accumulation inhibits gluconeogenesis → ↓ fasting blood glucose, ↑ ketoacidosis → high anion gap metabolic acidosis",
            sublabel: "Process — the first inhibition: the glucose-making line slows.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Organic acid accumulation inhibits the urea cycle → hyperammonemia",
            sublabel: "Process — the second inhibition: the nitrogen exit slows.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Infancy presentation: poor feeding, vomiting, hypotonia, high anion gap metabolic acidosis, hepatomegaly, seizures",
            sublabel: "Output — treat with a low-protein diet limited in VOMIT substrates.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Treatment: low-protein diet limited in substances that metabolize into propionyl-CoA (VOMIT)",
            sublabel: "Counter — starve the jam, not the child.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "organic acids" },
          { from: "s1", to: "s2", label: "same acids, second target" },
          { from: "s2", to: "o1", label: "acidosis + NH3" },
          { from: "x1", to: "trigger", type: "inhibit", label: "↓ propionyl-CoA supply" },
        ],
        caption:
          "The organic acidemias teach one mechanism with two consequences: accumulating propionyl-CoA (propionic acidemia — propionyl-CoA carboxylase with biotin) or methylmalonyl-CoA (methylmalonic acidemia — methylmalonyl-CoA mutase with B12) inhibits first gluconeogenesis (fasting hypoglycemia with ketoacidosis — the high anion gap) and then the urea cycle (hyperammonemia without a primary urea-cycle defect). That hyperammonemia is the trap: the labs imitate OTC deficiency, but the orotic acid is absent and the acidosis dominates. The treatment logic follows the chemistry — remove what feeds the jam: a low-protein diet limited in the five propionyl-CoA substrates (Valine, Odd-chain fatty acids, Methionine, Isoleucine, Threonine — VOMIT).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "phenylalanine-pathway-map",
      title: "Phenylalanine metabolism — the PKU bottleneck and the BH4 loop",
      caption:
        "The source pathway redrawn: dietary protein, aspartame, and endogenous protein supply phenylalanine; phenylalanine hydroxylase (BH4-dependent, ⊟ PKU) converts it to tyrosine, which feeds thyroxine, dopamine, melanin, and norepinephrine/epinephrine. Blocked PAH diverts phenylalanine up to phenyl ketones (phenylacetate, phenyllactate, phenylpyruvate); the BH4 loop below shows PAH spending BH4 → BH2 and dihydropteridine reductase (NADH + H+ → NAD+) refunding it. The PKU clinical ledger (screening 2–3 days after birth, findings, treatment, embryopathy) and the MSUD B1 block sit in the strips.",
      notice:
        "Track the two starvation lines downstream of tyrosine: melanin falls (hypopigmented skin — the pale, eczematous child) and catecholamines/thyroxine fall. Then track the cofactor side: BH4 deficiency and dihydropteridine reductase deficiency reproduce the same ↑ phenylalanine, which is why treatment adds tetrahydrobiopterin supplementation. Finally the timing: screening at 2–3 days (normal at birth because of maternal enzyme during fetal life) and the embryopathy of untreated maternal PKU — dietary control in pregnancy prevents fetal growth restriction, microcephaly, intellectual disability, and congenital heart defects.",
    },
    {
      kind: "visual",
      visualId: "methionine-homocysteine-map",
      title: "The methionine–homocysteine economy — homocystinuria's four blocks",
      caption:
        "The source pathway redrawn: methionine and homocysteine interconvert through methionine synthase (methyl B12), fed by methyl folate + B12; homocysteine plus serine becomes cystathionine through cystathionine synthase, then cysteine through B6. The four autosomal recessive blocks that raise homocysteine sit below with their treatments: cystathionine synthase deficiency (↓ methionine, ↑ cysteine, ↑ B6, B12, folate), ↓ affinity of the synthase for pyridoxal phosphate (↑↑ B6, ↑ cysteine), methionine synthase deficiency (↑ methionine), and MTHFR deficiency (↑ folate). The HOMOCYstinuria mnemonic strip completes the map.",
      notice:
        "The junction metabolite is homocysteine — every block raises it, but the treatments diverge with the block's side: blocks on the cystathionine exit restrict methionine and load B6 (the pyridoxal-responsive forms), while blocks on the remethylation return (methionine synthase, MTHFR) instead supply methionine or folate. The exam's favorite physical sign is the lens: homocystinuria subluxes it down and in, Marfan up and out — and homocystinuria adds intellectual disability and thrombosis (stroke, MI from atherosclerosis) that Marfan does not.",
    },
    {
      kind: "visual",
      visualId: "organic-acidemia-map",
      title: "Organic acidemias — the propionate highway to succinyl-CoA",
      caption:
        "The source pathway redrawn: protein metabolism's VOMIT substrates (Valine, Odd-chain fatty acids, Methionine, Isoleucine, Threonine) metabolize into propionyl-CoA; propionyl-CoA carboxylase (biotin; ⊟ propionic acidemia → ↑ propionyl-CoA, ↓ methylmalonic acid) makes methylmalonyl-CoA; methylmalonyl-CoA mutase (B12; ⊟ methylmalonic acidemia) makes succinyl-CoA, which enters the TCA cycle's intermediates. The presentation strip (infancy: poor feeding, vomiting, hypotonia, high anion gap metabolic acidosis, hepatomegaly, seizures) and the two-inhibition mechanism strip complete the map.",
      notice:
        "The differential inside the highway: propionic acidemia blocks the biotin-dependent carboxylase (propionyl-CoA rises, methylmalonic acid falls), while methylmalonic acidemia blocks the B12-dependent mutase (or the vitamin itself) — the same logic as the biotin-dependent carboxylases versus B12 in the B-vitamins note. Then the two systemic inhibitions: gluconeogenesis (hypoglycemia + ketoacidosis = the high anion gap) and the urea cycle (hyperammonemia) — the organic acidemias are the classic 'hyperammonemia without orotic acid and with a big anion gap' newborn.",
    },
    {
      kind: "visual",
      visualId: "ochronosis-sclera-illustration",
      title: "Ochronosis — the bluish-black scleral sign of alkaptonuria",
      caption:
        "The source photograph redrawn as a schematic: bluish-black scleral pigmentation from homogentisic acid polymer deposition, with the disease panel (congenital deficiency of homogentisate oxidase in the degradative pathway of tyrosine to fumarate; pigment-forming homogentisic acid builds up in tissue; autosomal recessive, usually benign), the black urine on prolonged exposure to air, and the debilitating arthralgias (homogentisic acid toxic to cartilage).",
      notice:
        "Place the block on the highway: homogentisate oxidase sits in tyrosine's catabolic arm (tyrosine → homogentisic acid → maleylacetoacetic acid → fumarate + acetoacetate) — upstream of fumarate, downstream of tyrosine. The three tyrosine-pathway enzymes the exam shuffles are phenylalanine hydroxylase (PKU), tyrosinase (albinism), and homogentisate oxidase (alkaptonuria): each block's signature is metabolic (musty), visual (white hair/skin), or pigmentary-dark (ochronosis) respectively. The 'usually benign' label is exam gold — a benign course with black urine and arthralgias.",
    },
    {
      kind: "table",
      title: "The six diseases at a glance",
      intro: "A KYP synthesis of the two pages' six sections — the one-line versions to hold together.",
      columns: ["Disease", "Block", "Signature", "Treatment logic"],
      rows: [
        ["PKU", "↓ Phenylalanine hydroxylase (or BH4)", "Musty body odor, hypopigmented, ↑ phenyl ketones, tyrosine essential", "↓ Phe, ↑ Tyr diet + BH4; avoid aspartame"],
        ["Maple syrup urine disease", "↓ Branched-chain α-ketoacid dehydrogenase (B1)", "Maple syrup/burnt sugar secretions, ↑ α-ketoacids (especially leucine)", "Restrict Ile/Leu/Val + thiamine"],
        ["Alkaptonuria", "↓ Homogentisate oxidase", "Ochronosis (bluish-black sclerae, ear cartilage), urine blackens on standing, arthralgias; benign", "Supportive — the course is benign"],
        ["Homocystinuria", "4 blocks: cystathionine synthase (×2), methionine synthase, MTHFR", "↑ Homocysteine, marfanoid, lens down-and-in, thrombosis, kyphosis, intellectual disability", "Per block: ↓ Met/↑ B6; ↑↑ B6; ↑ Met; ↑ folate"],
        ["Cystinuria", "Renal PCT + intestinal COLA transporter", "Recurrent hexagonal cystine stones; nitroprusside test; 1:7000", "Alkalinize urine (K+ citrate, acetazolamide), penicillamine, hydration, low-methionine diet"],
        ["Organic acidemias", "Propionyl-CoA carboxylase (biotin) or methylmalonyl-CoA mutase (B12)", "Infancy acidosis: poor feeding, vomiting, hypotonia, hepatomegaly, seizures, hyperammonemia", "Low-protein diet limited in VOMIT substrates"],
      ],
      caption: "All six are autosomal recessive; all are newborn-screenable or early-infancy presentations; every treatment follows the blocked chemistry.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Cystinuria — the transporter disease among the enzyme diseases",
      body:
        "Hereditary defect of the renal PCT and intestinal amino acid transporter that prevents reabsorption of Cystine, Ornithine, Lysine, and Arginine (COLA). Cystine is made of 2 cysteines connected by a disulfide bond; excess cystine in the urine precipitates as recurrent hexagonal cystine stones. Detected with the urinary sodium-cyanide nitroprusside test and proton nuclear magnetic resonance spectroscopy of urine. Autosomal recessive and common (1:7000). Treatment: urinary alkalinization (eg, potassium citrate, acetazolamide) and chelating agents (eg, penicillamine) ↑ solubility of cystine stones; good hydration; diet low in methionine (cysteine's precursor).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A newborn screens positive at day 3; intellectual disability, microcephaly, seizures, hypopigmented skin, eczema, and a musty body odor.",
        discriminator: "Musty body odor + hypopigmentation",
        concept: "Phenylketonuria",
        answer: "↓ Phenylalanine hydroxylase (autosomal recessive) → ↑ phenylalanine → ↑ phenyl ketones in urine; tyrosine becomes essential; treat with ↓ phenylalanine and ↑ tyrosine in diet (soy products, chicken, fish, milk) and tetrahydrobiopterin supplementation.",
      },
      {
        stem: "An infant in the first week of life has vomiting, poor feeding, and secretions (urine, sweat, ear wax) that smell like maple syrup or burnt sugar, with progressive neurologic decline including seizures and dystonia.",
        discriminator: "Maple syrup secretions + leucine-predominant ketoacids",
        concept: "Maple syrup urine disease",
        answer: "Blocked degradation of branched amino acids (isoleucine, leucine, valine) due to ↓ branched-chain α-ketoacid dehydrogenase (B1); restrict isoleucine, leucine, valine and supplement thiamine. Mnemonic: I love Vermont maple syrup from maple trees (with B1ranches).",
      },
      {
        stem: "An adult with bluish-black discoloration of the sclerae and ear cartilage, urine that turns black on prolonged exposure to air, and debilitating joint pain — otherwise benign.",
        discriminator: "Black urine + ochronosis + benign course",
        concept: "Alkaptonuria",
        answer: "Congenital deficiency of homogentisate oxidase in the degradative pathway of tyrosine to fumarate → pigment-forming homogentisic acid builds up in tissue; autosomal recessive, usually benign; arthralgias because homogentisic acid is toxic to cartilage.",
      },
      {
        stem: "A tall, thin adolescent with a marfanoid habitus has downward-and-inward lens subluxation, osteoporosis, kyphosis, and a DVT; testing shows excess homocysteine in the urine.",
        discriminator: "Lens down-and-in + thrombosis + intellectual disability",
        concept: "Homocystinuria",
        answer: "Cystathionine synthase deficiency (or ↓ pyridoxal-phosphate affinity, methionine synthase deficiency, MTHFR deficiency) — all autosomal recessive, all ↑ homocysteine; HOMOCYstinuria: Homocysteine in urine, Osteoporosis, Marfanoid habitus, Ocular changes (down and in), Cardiovascular effects (thrombosis, atherosclerosis → stroke and MI), kYphosis, intellectual disability, hypopigmented skin.",
      },
      {
        stem: "A patient with recurrent nephrolithiasis passes hexagonal crystals on urinalysis; the sodium-cyanide nitroprusside test is positive.",
        discriminator: "Hexagonal stones + nitroprusside test",
        concept: "Cystinuria",
        answer: "Hereditary defect of the renal PCT and intestinal amino acid transporter (COLA: Cystine, Ornithine, Lysine, Arginine); treat with urinary alkalinization (potassium citrate, acetazolamide), chelation (penicillamine), good hydration, and a diet low in methionine.",
      },
      {
        stem: "A neonate after protein feeds has poor feeding, vomiting, hypotonia, hepatomegaly, and seizures with high anion gap metabolic acidosis, ketosis, and hyperammonemia.",
        discriminator: "High anion gap acidosis + hyperammonemia without orotic acid",
        concept: "Organic acidemias",
        answer: "Propionic acidemia (↓ propionyl-CoA carboxylase → ↑ propionyl-CoA, ↓ methylmalonic acid) or methylmalonic acidemia (↓ methylmalonyl-CoA mutase or vitamin B12); organic acid accumulation inhibits gluconeogenesis (↓ fasting glucose, ↑ ketoacidosis) and the urea cycle (hyperammonemia); treat with a low-protein diet limited in VOMIT substrates.",
      },
    ],
    traps: [
      {
        a: "PKU screening is positive at birth",
        b: "Screening occurs 2–3 days after birth (normal at birth)",
        whyConfused: "Newborn screens are drawn in the first days of life.",
        keyDifference: "The neonate is normal at birth because the maternal enzyme covers fetal life — the screen must wait 2–3 days for the infant's own phenotype to appear.",
        clue: "Any 'why is the screen drawn at 2–3 days' or 'first screen negative' question.",
      },
      {
        a: "Homocystinuria's lens subluxes up and out",
        b: "Homocystinuria subluxes down and in; Marfan up and out",
        whyConfused: "Both are marfanoid habitus with lens subluxation.",
        keyDifference: "In homocystinuria, the lens subluxes down and in; in Marfan syndrome, it subluxes up and fans out — and homocystinuria adds intellectual disability and thrombosis that Marfan lacks.",
        clue: "The lens direction line, or thrombosis/MI in a marfanoid patient.",
      },
      {
        a: "Cystinuria is an enzyme deficiency",
        b: "Cystinuria is a transporter defect",
        whyConfused: "It sits among the enzyme-block aminoacidopathies.",
        keyDifference: "Cystinuria is a hereditary defect of the renal PCT and intestinal amino acid transporter (COLA) — reabsorption fails, not metabolism; the stones are hexagonal and the test is nitroprusside.",
        clue: "Hexagonal crystals or COLA in the stem.",
      },
      {
        a: "Methylmalonic acidemia raises propionyl-CoA",
        b: "The two acidemias split at different steps",
        whyConfused: "Both sit on the propionate highway and present identically.",
        keyDifference: "Propionic acidemia: ↓ propionyl-CoA carboxylase (biotin) → ↑ propionyl-CoA, ↓ methylmalonic acid; methylmalonic acidemia: ↓ methylmalonyl-CoA mutase or vitamin B12 → methylmalonyl-CoA accumulates upstream of succinyl-CoA.",
        clue: "The propionyl-CoA/methylmalonic acid ratio, or a B12/parenteral-nutrition context.",
      },
    ],
    pivots: [
      {
        lookAlike: "A marfanoid adolescent (homocystinuria vs Marfan syndrome)",
        differentiator: "Lens direction, intellect, and clotting",
        correctPath:
          "Down-and-in lens + intellectual disability + thrombosis/atherosclerosis + autosomal recessive → homocystinuria; up-and-out lens + normal intellect + aortic root dilatation + fibrillin-1 (autosomal dominant) → Marfan.",
      },
      {
        lookAlike: "A hyperammonemic newborn (organic acidemias vs urea cycle blocks vs transient neonatal hyperammonemia)",
        differentiator: "The anion gap and orotic acid",
        correctPath:
          "↑NH3 + high anion gap metabolic acidosis + ketosis → organic acidemia; ↑NH3 + ↓ BUN + ↑ orotic acid (no megaloblastic anemia) → OTC deficiency; ↑NH3 with normal gap and no orotic acid → consider CPS I or NAG synthase deficiency.",
      },
    ],
    miniCase: {
      vignette:
        "A 14-year-old girl is brought in for an eye exam after two weeks of blurred vision. She is tall and thin with long fingers, a scoliotic upper back, and generalized osteopenia on a wrist film taken for a sprain. Her teachers note she has struggled academically since early elementary school. At age 12 she had an unprovoked deep vein thrombosis after a long flight, treated without a hypercoagulable workup. Slit-lamp examination shows the lens of each eye displaced downward and inward; the skin of her forearms is notably fair for her family. Her maternal aunt and uncle, first cousins of her parents, had similar builds and the aunt died of a stroke at 34. Urine studies show markedly increased homocysteine.",
      question:
        "Which combination best distinguishes this patient's syndrome from Marfan syndrome?",
      options: [
        {
          label: "A",
          text: "Downward-inward lens subluxation, intellectual disability, and recurrent thrombosis",
          correct: true,
          why: "Correct — homocystinuria's lens subluxes down and in (vs Marfan's up and out), pairs with intellectual disability and early thrombosis/atherosclerosis (homocysteine injures endothelium), and breeds true as autosomal recessive with consanguinity-linked family history.",
        },
        {
          label: "B",
          text: "Upward-outward lens subluxation with aortic root dilatation",
          why: "That is the Marfan combination (fibrillin-1, up-and-out lens) — this girl's lenses sublux the other way.",
        },
        {
          label: "C",
          text: "Marfanoid habitus with a fibrillin-1 (FBN1) mutation pedigree",
          why: "Marfan is autosomal dominant (parent-to-child), while this family's affected relatives are in a collateral, consanguinity-shaped pattern typical of autosomal recessive homocystinuria.",
        },
        {
          label: "D",
          text: "Hypopigmented skin with a musty body odor",
          why: "Hypopigmentation occurs in both PKU and homocystinuria, but the musty odor belongs to PKU (phenyl ketones) — and PKU does not sublux lenses or cause marfanoid habitus.",
        },
        {
          label: "E",
          text: "Hexagonal crystals on urinalysis with a positive nitroprusside test",
          why: "That is cystinuria's signature — a COLA transporter defect with stones, not a marfanoid syndrome; it explains none of her findings.",
        },
      ],
      reasoning:
        "Three anchors separate homocystinuria from Marfan in a marfanoid body: the lens direction (down-and-in), the brain and blood vessels (intellectual disability, thrombosis at 12, stroke at 34 in the aunt), and the pedigree (autosomal recessive, collateral affected relatives). The excess urine homocysteine confirms the junction metabolite is backed up — in this patient most often at cystathionine synthase, treatable with ↓ methionine, ↑ cysteine, and ↑ B6, B12, and folate in diet.",
    },
  },
  mnemonics: [
    {
      code: "“I love Vermont maple syrup from maple trees (with B1ranches).”",
      meaning: "The source's MSUD mnemonic: maple syrup secretions from blocked branched-chain amino acid (isoleucine, leucine, valine) degradation — the enzyme is branched-chain α-ketoacid dehydrogenase, a B1 (thiamine)-dependent complex.",
      memorizes: "MSUD's enzyme, substrate set, and vitamin",
      whenToUse: "MSUD stems and any B1-dependent enzyme question.",
      clinical: "Treatment mirrors the mnemonic: restrict the branched amino acids and supplement thiamine (B1).",
    },
    {
      code: "“HOMOCYstinuria”",
      meaning: "↑↑ Homocysteine in urine, Osteoporosis, Marfanoid habitus, Ocular changes (downward and inward lens subluxation), Cardiovascular effects (thrombosis and atherosclerosis → stroke and MI), kYphosis, intellectual disability, hypopigmented skin — the source's capstone mnemonic.",
      memorizes: "The full homocystinuria phenotype",
      whenToUse: "Any marfanoid-plus-thrombosis or lens-direction stem.",
      clinical: "The capital letters carry the findings; the lowercase letters (kYphosis) are the source's own styling.",
    },
    {
      code: "“COLA”",
      meaning: "The transporter's four substrates that fail to be reabsorbed in cystinuria: Cystine, Ornithine, Lysine, Arginine — the renal PCT and intestinal dibasic amino acid transporter.",
      memorizes: "Cystinuria's transporter substrate set",
      whenToUse: "Cystinuria and renal amino acid handling questions.",
      clinical: "Cystine (two cysteines joined by a disulfide bond) precipitates as hexagonal stones; the others just ride along.",
    },
    {
      code: "“VOMIT”",
      meaning: "The five propionyl-CoA substrates the organic-acidemia diet must limit: Valine, Odd-chain fatty acids, Methionine, Isoleucine, Threonine.",
      memorizes: "The low-protein diet's restricted substrate list",
      whenToUse: "Organic acidemia treatment questions.",
      clinical: "The diet starves the propionate highway; the mnemonic doubles as a reminder that the disease itself presents with vomiting.",
    },
  ],
  rapidReview: {
    s30: [
      "PKU = ↓ PAH (or BH4); musty odor, hypopigmented, tyrosine essential",
      "Lens: homocystinuria down-and-in; Marfan up and out",
      "Alkaptonuria = ↓ homogentisate oxidase; black urine, ochronosis, benign",
      "Cystinuria = COLA transporter; hexagonal stones, nitroprusside test",
    ],
    m3: [
      "MSUD: ↓ branched-chain α-ketoacid dehydrogenase (B1); restrict Ile/Leu/Val + thiamine",
      "Homocystinuria's four blocks and treatments: synthase (↓Met ↑B6/B12/folate), ↓PLP affinity (↑↑B6), methionine synthase (↑Met), MTHFR (↑folate)",
      "Organic acidemias inhibit gluconeogenesis + urea cycle → high-gap acidosis + hyperammonemia",
      "PKU embryopathy: growth restriction, microcephaly, intellectual disability, heart defects — prevent with diet",
    ],
    m10: [
      "VOMIT = Valine, Odd-chain fatty acids, Methionine, Isoleucine, Threonine → propionyl-CoA",
      "Propionic vs methylmalonic: carboxylase (biotin) vs mutase (B12); propionyl-CoA ↑ in the first, methylmalonyl-CoA ↑ in the second",
      "PKU screen at 2–3 days (maternal enzyme covers fetal life); avoid aspartame",
      "Cystine = 2 cysteines + disulfide bond; alkalinize (K+ citrate, acetazolamide) + penicillamine",
    ],
  },
  recall: [
    {
      q: "Describe the PKU block and its downstream consequences fully.",
      a: "↓ Phenylalanine hydroxylase (autosomal recessive) → ↑ phenylalanine → ↑ phenyl ketones (phenylacetate, phenyllactate, phenylpyruvate) in urine; tyrosine becomes essential → ↓ melanin (hypopigmented skin, eczema), ↓ catecholamines, ↓ thyroxine; findings: intellectual disability, microcephaly, seizures, musty body odor (disorder of aromatic amino acid metabolism); rare due to neonatal screening.",
    },
    {
      q: "When is PKU screening performed and why is the newborn normal at birth?",
      a: "2–3 days after birth; normal at birth because of maternal enzyme during fetal life.",
    },
    {
      q: "What is phenylalanine embryopathy?",
      a: "↑ Phenylalanine levels in pregnant patients with untreated PKU cause fetal growth restriction, microcephaly, intellectual disability, congenital heart defects; preventable with dietary measures.",
    },
    {
      q: "What are the BH4-side causes of hyperphenylalaninemia?",
      a: "Tetrahydrobiopterin (BH4) deficiency — BH4 is the essential cofactor for PAH (varying severity, untreated patients typically die in infancy) — and dihydropteridine reductase deficiency, which stops the BH2 → BH4 recycling (NADH + H+ → NAD+).",
    },
    {
      q: "Which amino acids block in MSUD, which enzyme, which vitamin, and what is the treatment?",
      a: "Isoleucine, leucine, valine (branched); ↓ branched-chain α-ketoacid dehydrogenase (B1); ↑ α-ketoacids in the blood especially those of leucine; treat with restriction of the three amino acids and thiamine supplementation.",
    },
    {
      q: "Name alkaptonuria's enzyme, inheritance, and three findings.",
      a: "Congenital deficiency of homogentisate oxidase in the degradative pathway of tyrosine to fumarate; autosomal recessive, usually benign; bluish-black connective tissue, ear cartilage, and sclerae (ochronosis); urine turns black on prolonged exposure to air; debilitating arthralgias (homogentisic acid toxic to cartilage).",
    },
    {
      q: "List the four causes of homocystinuria with each treatment.",
      a: "Cystathionine synthase deficiency (↓ methionine, ↑ cysteine, ↑ B6, B12, and folate in diet); ↓ affinity of cystathionine synthase for pyridoxal phosphate (↑↑ B6 and ↑ cysteine); methionine synthase (homocysteine methyltransferase) deficiency (↑ methionine in diet); MTHFR deficiency (↑ folate in diet). All autosomal recessive; all result in excess homocysteine.",
    },
    {
      q: "Which transporter fails in cystinuria, and what is the treatment?",
      a: "The renal PCT and intestinal amino acid transporter for Cystine, Ornithine, Lysine, Arginine (COLA) — autosomal recessive, common (1:7000); hexagonal cystine stones; urinary alkalinization (potassium citrate, acetazolamide) and chelators (penicillamine) ↑ cystine solubility, good hydration, diet low in methionine; detected with sodium-cyanide nitroprusside test and proton NMR spectroscopy of urine.",
    },
    {
      q: "How do organic acidemias produce high anion gap metabolic acidosis with hyperammonemia?",
      a: "Organic acid accumulation inhibits gluconeogenesis (↓ fasting blood glucose, ↑ ketoacidosis → high anion gap metabolic acidosis) and inhibits the urea cycle (→ hyperammonemia); most commonly presents in infancy with poor feeding, vomiting, hypotonia, high anion gap metabolic acidosis, hepatomegaly, seizures.",
    },
    {
      q: "Distinguish propionic from methylmalonic acidemia.",
      a: "Propionic acidemia: deficiency of propionyl-CoA carboxylase (biotin) → ↑ propionyl-CoA, ↓ methylmalonic acid; methylmalonic acidemia: deficiency of methylmalonyl-CoA mutase or vitamin B12 → methylmalonyl-CoA accumulates; both treated with a low-protein diet limited in VOMIT substrates.",
    },
  ],
  related: [
    {
      title: "Amino Acids & Their Derivatives",
      topicId: "amino-acids",
      note: "The same tyrosine highway drawn at full length: PAH, tyrosinase (albinism), and homogentisate oxidase (alkaptonuria) are three exits on one map, with the catecholamine assembly line and the 'Pure true Love' PKU mnemonic.",
    },
    {
      title: "Urea Cycle Disorders & Hyperammonemia",
      topicId: "urea-cycle-disorders",
      note: "The organic acidemias inhibit the urea cycle and mimic its blocks — the anion gap and the absent orotic acid separate them from OTC deficiency.",
    },
    {
      title: "TCA Cycle & Pyruvate Dehydrogenase",
      topicId: "tca-cycle-pdh",
      note: "Succinyl-CoA is the organic acidemias' intended destination — the propionate highway is an on-ramp to the TCA cycle, and MSUD's enzyme complex is a PDH sibling (B1, lipoate, FAD).",
    },
    {
      title: "Fructose & Galactose Disorders",
      topicId: "fructose-galactose-disorders",
      note: "The other early-infancy inborn errors of metabolism — same timing (after feeds begin), same logic (substrate piles up behind a block), different chemistry (sugars, not amino acids).",
    },
  ],
  crossLinks: [
    {
      subject: "Ophthalmology",
      connection: "Lens subluxation direction — homocystinuria's downward-inward displacement versus Marfan's upward-outward, the physical-exam discriminator between two marfanoid syndromes.",
    },
    {
      subject: "Nephrology",
      connection: "Cystinuria's hexagonal stones and the alkalinization-plus-chelation chemistry — the stone-forming disease among the aminoacidopathies.",
    },
    {
      subject: "Genetics",
      connection: "Newborn screening timing and autosomal recessive recurrence patterns — the screening window (2–3 days) reflects maternal enzyme coverage in fetal life.",
    },
  ],
};
