import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Layers,
  Lightbulb,
  Target,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge, Callout, CardPrimitive } from "@/components/kyp/ui";
import { UsMLETopicRail } from "@/components/kyp/usmle/topic-rail";
import { BlockStack } from "@/components/kyp/usmle/blocks";
import {
  MiniCasePanel,
  UsMLEMechanisms,
  UsMLEMnemonics,
  UsMLEPatterns,
  UsMLEPharmacology,
  UsMLEPivots,
  UsMLERapidReview,
  UsMLERecallDeck,
  UsMLETraps,
} from "@/components/kyp/usmle/note-sections";
import {
  getAdjacentUsMLENotes,
  getAllUsMLESlugs,
  getUsMLENote,
} from "@/lib/kyp/usmle/notes";
import type { NavItem } from "@/lib/kyp/use-scroll-spy";

/**
 * USMLE 2026 topic page — new CONTENT inside the existing KYP page
 * framework. Every visual element (navbar, breadcrumb, hero, cards,
 * callouts, tables, section rhythm, footer) comes from the KYP design
 * system; only the note content is new.
 */

type Slug = string;

export const dynamicParams = false;

export function generateStaticParams(): { slug: Slug }[] {
  return getAllUsMLESlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getUsMLENote(slug);
  if (!note) return { title: "Topic not found · Know Your Pill" };
  const title = `${note.title} — USMLE 2026 ${note.subject} · Know Your Pill`;
  return {
    title,
    description: note.subtitle,
    keywords: [...note.tags, note.subject, "USMLE", "Step 1", "Know Your Pill"],
    authors: [{ name: "Zamaan Ali Shamji" }],
    openGraph: {
      title,
      description: note.subtitle,
      type: "article",
      siteName: "Know Your Pill",
    },
  };
}

function navItemsFor(note: NonNullable<ReturnType<typeof getUsMLENote>>): NavItem[] {
  const items: NavItem[] = [
    { id: "overview", label: "Overview", group: "Foundations" },
    { id: "mechanisms", label: "Mechanisms", group: "Foundations" },
    { id: "deep-dive", label: "Deep Dive", group: "Core Content" },
  ];
  if (note.clinical?.length) items.push({ id: "clinical", label: "Clinical Picture", group: "Core Content" });
  if (note.drugs?.length) items.push({ id: "pharmacology", label: "Pharmacology", group: "Core Content" });
  items.push(
    { id: "usmle-attack", label: "USMLE Attack", group: "Exam Application" },
    { id: "memory", label: "Memory & Review", group: "Exam Application" },
    { id: "related", label: "Related Topics", group: "KYP Connections" }
  );
  return items;
}

const difficultyLabel: Record<number, string> = {
  1: "Difficulty ★",
  2: "Difficulty ★★",
  3: "Difficulty ★★★",
};

interface PageProps {
  params: Promise<{ slug: Slug }>;
}

export default async function UsMLETopicPage({ params }: PageProps) {
  const { slug } = await params;
  const note = getUsMLENote(slug);
  if (!note) notFound();

  const items = navItemsFor(note);
  const { prev, next } = getAdjacentUsMLENotes(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <UsMLETopicRail items={items} />

      <main className="flex-1 pt-16 lg:pl-52 xl:pl-56">
        {/* ===== BREADCRUMB ===== */}
        <div className="border-b border-border/40 bg-muted/20">
          <Container>
            <nav
              className="flex items-center gap-2 py-2 text-xs text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <Link href="/usmle" className="hover:text-brand">
                USMLE 2026
              </Link>
              <span aria-hidden>/</span>
              <span className="font-medium text-foreground">{note.title}</span>
            </nav>
          </Container>
        </div>

        {/* ===== HERO ===== */}
        <section id="overview" className="relative overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 scroll-mt-24">
          <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
          <Container className="relative">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="brand" size="sm">
                  USMLE 2026 · {note.subject}
                </Badge>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden /> {note.readTime} min
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span>{difficultyLabel[note.difficulty]}</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="flex items-center gap-1">
                  <Layers className="h-3 w-3" aria-hidden /> {note.pilotCategory}
                </span>
              </div>
              <h1 className="text-display text-foreground leading-[1.05]">{note.title}</h1>
              <p className="mt-4 max-w-2xl text-base text-foreground/80 leading-relaxed">{note.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {note.tags.slice(0, 8).map((tag) => (
                  <Badge key={tag} variant="outline" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
          </Container>
        </section>

        {/* ===== CORE IDEA ===== */}
        <Section spacing="tight">
          <Container>
              <div className="rounded-xl border border-brand/20 bg-brand-soft/10 p-6">
                <p className="text-overline text-brand">The Core Idea</p>
                <p className="mt-3 text-body-lg text-foreground/90 leading-relaxed">{note.core.what}</p>
                <p className="mt-3 text-body text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground/80">Why it matters: </span>
                  {note.core.why}
                </p>
                <div className="mt-4">
                  <Callout variant="tip" title="The one idea to carry into the exam">
                    {note.core.keyIdea}
                  </Callout>
                </div>
              </div>
          </Container>
        </Section>

        {/* ===== MECHANISMS (universal KYP mechanism system) ===== */}
        <Section id="mechanisms" className="bg-muted/20 scroll-mt-24">
          <Container>
            <SectionHeader
              eyebrow="Mechanisms"
              title="Trigger → mechanism → consequence."
              description="Each flow is rendered by the universal KYP mechanism system: trigger (teal), process steps (violet), targets (amber), consequences (green), inhibition (coral T-bar)."
              tone="brand"
            />
            <div className="mt-10">
              <UsMLEMechanisms mechanisms={note.mechanisms} />
            </div>
          </Container>
        </Section>

        {/* ===== DEEP DIVE ===== */}
        <Section id="deep-dive" spacing="default" className="scroll-mt-24">
          <Container>
            <SectionHeader
              eyebrow="Deep Dive"
              title="The high-yield content, structured for retention."
              description={note.system}
              tone="brand"
            />
            <div className="mt-10">
              <BlockStack blocks={note.blocks} />
            </div>
          </Container>
        </Section>

        {/* ===== CLINICAL PICTURE ===== */}
        {note.clinical?.length ? (
          <Section id="clinical" className="bg-muted/20 scroll-mt-24">
            <Container>
              <SectionHeader
                eyebrow="Clinical Picture"
                title="Manifestations, labs, diagnosis, treatment."
                tone="brand"
              />
              <div className="mt-10">
                <BlockStack blocks={note.clinical} />
              </div>
            </Container>
          </Section>
        ) : null}

        {/* ===== PHARMACOLOGY ===== */}
        {note.drugs?.length ? (
          <Section id="pharmacology" spacing="default" className="scroll-mt-24">
            <Container>
              <SectionHeader
                eyebrow="Pharmacology"
                title="Drug → target → pathway → effect."
                description="Every agent organized by what it binds and what follows."
                tone="brand"
              />
              <div className="mt-10">
                <UsMLEPharmacology drugs={note.drugs} />
              </div>
            </Container>
          </Section>
        ) : null}

        {/* ===== USMLE ATTACK ===== */}
        <Section id="usmle-attack" className="bg-muted/20 scroll-mt-24">
          <Container>
            <SectionHeader
              eyebrow="USMLE Attack"
              title="Patterns, traps, pivots — and one vignette."
              description="How this topic actually appears on Step 1: the pattern to recognize, the trap to avoid, the pivot that separates look-alikes."
              tone="neural"
            />

            <div className="mt-10 space-y-12">
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <Target className="h-4 w-4 text-brand" aria-hidden />
                  <h3 className="text-h3 text-foreground">Vignette patterns</h3>
                </div>
                <UsMLEPatterns patterns={note.usmle.patterns} />
              </div>

              <div>
                <div className="mb-5 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-warning" aria-hidden />
                  <h3 className="text-h3 text-foreground">Classic confusions</h3>
                </div>
                <UsMLETraps traps={note.usmle.traps} />
              </div>

              <div>
                <div className="mb-5 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-neural" aria-hidden />
                  <h3 className="text-h3 text-foreground">Look-alike pivots</h3>
                </div>
                <UsMLEPivots pivots={note.usmle.pivots} />
              </div>

              <div>
                <div className="mb-5 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-brand" aria-hidden />
                  <h3 className="text-h3 text-foreground">Mini-case with answer autopsy</h3>
                </div>
                <MiniCasePanel miniCase={note.usmle.miniCase} />
              </div>
            </div>
          </Container>
        </Section>

        {/* ===== MEMORY ===== */}
        <Section id="memory" spacing="default" className="scroll-mt-24">
          <Container>
            <SectionHeader
              eyebrow="Memory & Rapid Review"
              title="Mnemonics, then a timed retrieval pass."
              description="First the memory hooks, then a 30-second / 3-minute / 10-minute review ladder, then active recall."
              tone="brand"
            />

            <div className="mt-10 space-y-12">
              <div>
                <h3 className="mb-5 text-h3 text-foreground">Mnemonic hooks</h3>
                <UsMLEMnemonics mnemonics={note.mnemonics} />
              </div>
              <div>
                <h3 className="mb-5 text-h3 text-foreground">Rapid review ladder</h3>
                <UsMLERapidReview note={note} />
              </div>
              <div>
                <h3 className="mb-5 text-h3 text-foreground">Active recall deck</h3>
                <UsMLERecallDeck recall={note.recall} />
              </div>
            </div>
          </Container>
        </Section>

        {/* ===== RELATED ===== */}
        <Section id="related" className="bg-muted/20 scroll-mt-24">
          <Container>
            <SectionHeader
              eyebrow="KYP Connections"
              title="Where this topic connects."
              description="Knowledge compounds across subjects — these are the bridges."
              tone="neural"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {note.related.map((r, i) => {
                const inner = (
                  <>
                    <div className="p-5">
                      <p className="font-serif text-lg font-semibold text-foreground">{r.title}</p>
                      <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{r.note}</p>
                    </div>
                    <div className="border-t border-border/60 px-5 py-3">
                      <span className="text-xs font-semibold text-brand">
                        {r.topicId ? "Open USMLE note →" : "Pilot connection"}
                      </span>
                    </div>
                  </>
                );
                return r.topicId ? (
                  <CardPrimitive key={i} variant="flat" interactive href={`/usmle/${r.topicId}`}>
                    {inner}
                  </CardPrimitive>
                ) : (
                  <CardPrimitive key={i} variant="outline">
                    {inner}
                  </CardPrimitive>
                );
              })}
            </div>

            {note.crossLinks.length > 0 && (
              <div className="mt-8">
                <p className="text-overline text-muted-foreground">Cross-subject threads</p>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {note.crossLinks.map((c, i) => (
                    <div key={i} className="rounded-lg border border-border/60 bg-card p-3.5">
                      <p className="text-sm font-semibold text-foreground">{c.subject}</p>
                      <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">{c.connection}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </Section>

        {/* ===== SOURCE + PREV/NEXT ===== */}
        <Section spacing="tight">
          <Container>
            <p className="text-center text-caption text-muted-foreground">{note.sourceRef}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {prev ? (
                <CardPrimitive variant="flat" interactive showArrow={false} href={`/usmle/${prev.id}`} className="p-5">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Previous
                  </span>
                  <span className="mt-1 block font-serif text-lg font-semibold text-foreground">{prev.title}</span>
                </CardPrimitive>
              ) : (
                <div />
              )}
              {next && (
                <CardPrimitive variant="flat" interactive showArrow={false} href={`/usmle/${next.id}`} className="p-5 text-right">
                  <span className="flex items-center justify-end gap-1.5 text-xs font-medium text-muted-foreground">
                    Next <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="mt-1 block font-serif text-lg font-semibold text-foreground">{next.title}</span>
                </CardPrimitive>
              )}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
      <FloatingSearch variant="floating" />
    </div>
  );
}
