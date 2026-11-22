"use client";

import * as React from "react";
import { ChevronRight, ListTree, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  useScrollSpy,
  scrollToSection,
  type NavItem,
} from "@/components/kyp/ui/sticky-learning-nav";

/**
 * UsMLETopicRail — the KYP sticky section rail, read-only variant.
 *
 * Visually identical to <StickyLearningNav> (same fixed left rail on
 * desktop, same bottom-sheet navigator on mobile) except that section
 * completion is not persisted: the USMLE pilot deliberately does not
 * write into the shared kyp:progress store, because Study Mode's
 * "Continue studying" panel links every store entry to /drugs/<slug>.
 * A USMLE slug there would 404 an existing page — so this rail tracks
 * only scroll position. Same look, zero side effects.
 */

interface UsMLETopicRailProps {
  items: NavItem[];
}

export function UsMLETopicRail({ items }: UsMLETopicRailProps) {
  const activeId = useScrollSpy(items.map((i) => i.id));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const groups = React.useMemo(() => {
    const map = new Map<string, NavItem[]>();
    for (const item of items) {
      const g = item.group ?? "Sections";
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(item);
    }
    return Array.from(map.entries());
  }, [items]);

  return (
    <>
      {/* Desktop: sticky left rail — same VS Code Explorer style as drug pages */}
      <aside className="hidden lg:block fixed left-0 top-16 z-30 w-48 xl:w-52 border-r border-border/40 bg-card/40 backdrop-blur-sm print:hidden">
        <div className="px-3 py-3">
          <p className="px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground/80">
            USMLE 2026
          </p>
          <nav className="kyp-scroll mt-2 max-h-[calc(100vh-9rem)] overflow-y-auto">
            {groups.map(([groupName, groupItems]) => (
              <div key={groupName} className="mb-1.5">
                {groups.length > 1 && (
                  <p className="px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60">
                    {groupName}
                  </p>
                )}
                {groupItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex w-full items-center gap-1.5 rounded px-2 py-1 text-[0.72rem] font-normal leading-tight transition-colors text-left truncate kyp-focus-ring",
                        isActive
                          ? "bg-brand/10 text-brand-ink font-medium"
                          : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                      )}
                    >
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile: floating pill — same affordance as drug pages */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-20 left-4 z-40 flex items-center gap-2 rounded-full border border-border/70 bg-card/90 backdrop-blur-xl px-4 py-2.5 shadow-[var(--shadow-lift)] print:hidden"
        aria-label="Open section navigator"
      >
        <ListTree className="h-4 w-4 text-brand" aria-hidden />
        <span className="text-xs font-semibold">Sections</span>
      </button>

      {/* Mobile bottom sheet — same pattern as StickyLearningNav */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-full rounded-t-3xl border-t border-border bg-card p-4 pb-6 max-h-[70vh] overflow-y-auto kyp-scroll">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border" />
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-overline text-muted-foreground">USMLE 2026</p>
                <p className="font-serif text-lg font-semibold">Section Navigator</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="grid gap-1">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-left",
                      isActive
                        ? "bg-brand-soft/60 text-brand-ink"
                        : "text-muted-foreground"
                    )}
                  >
                    <span className="flex-1 truncate">{item.label}</span>
                    {isActive && <ChevronRight className="h-3 w-3 shrink-0" />}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
