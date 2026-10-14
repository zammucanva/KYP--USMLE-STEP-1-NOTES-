/**
 * Shared helpers for the USMLE Phase I pipeline scripts.
 * Pure bun/node — no app runtime involved.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { spawnSync } from "child_process";

// re-export path/fs helpers used by the pipeline scripts
export { join, resolve, existsSync, readFileSync };

export const ROOT = resolve(import.meta.dir, "..", "..");
export const CONTENT = join(ROOT, "content", "usmle");
export const CACHE = join(ROOT, ".usmle-pipeline-cache");
export const SRC = join(ROOT, "src");

import { BOOK_PARTS } from "../../src/lib/kyp/usmle/pipeline/schemas";
export { BOOK_PARTS };

/* ---------- JSON helpers (deterministic serialization) ---------- */

export function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

export function writeJson(path: string, data: unknown): void {
  mkdirSync(resolve(path, ".."), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8");
}

export function readJsonDir(dir: string): Map<string, unknown> {
  const out = new Map<string, unknown>();
  if (!existsSync(dir)) return out;
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".json")).sort()) {
    out.set(f.replace(/\.json$/, ""), readJson(join(dir, f)));
  }
  return out;
}

/* ---------- app data (real imports — no regex parsing of TS) ---------- */

export async function loadNotes() {
  const { usmleNotes } = await import("../../src/lib/kyp/usmle/notes");
  return usmleNotes as unknown as Record<string, any>[];
}

export async function loadRegistryKeys(): Promise<string[]> {
  const { VisualRegistry } = await import("../../src/components/kyp/usmle/visuals/registry");
  return Object.keys(VisualRegistry).sort();
}

/* ---------- PDF text layer access (cached full-book dumps) ---------- */

const pageCache = new Map<1 | 2, string[]>();

/** Returns the 1-based page array of a book part, building the cache if needed. */
export function pdfPages(part: 1 | 2): string[] {
  if (pageCache.has(part)) return pageCache.get(part)!;
  const cacheFile = join(CACHE, `part${part}.txt`);
  if (!existsSync(cacheFile)) {
    const def = BOOK_PARTS[part];
    const pdf = join(ROOT, def.file);
    if (!existsSync(pdf)) {
      throw new Error(`PDF not found: ${pdf}`);
    }
    mkdirSync(CACHE, { recursive: true });
    const res = spawnSync("pdftotext", [pdf, cacheFile], { stdio: "inherit" });
    if (res.status !== 0) throw new Error(`pdftotext failed for part ${part}`);
  }
  const pages = readFileSync(cacheFile, "utf8").split("\f");
  // trailing empty chunk after the final form feed
  if (pages.length > BOOK_PARTS[part].pdfPages && pages[pages.length - 1].trim() === "") pages.pop();
  pageCache.set(part, pages);
  return pages;
}

export function pdfPageText(part: 1 | 2, page: number): string {
  const pages = pdfPages(part);
  if (page < 1 || page > pages.length) throw new Error(`part ${part} page ${page} out of range (1–${pages.length})`);
  return pages[page - 1];
}

/** Normalizes text for containment checks: strips PDF text-layer C1 control
 *  artifacts (e.g. \x8e shift markers preceding arrows), collapses whitespace. */
export function norm(s: string): string {
  return s.replace(/[\u0080-\u009f]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

/** Does `quote` appear (whitespace-insensitively) on any of the given pages? */
export function quoteOnPages(part: 1 | 2, pages: number[], quote: string): boolean {
  const needle = norm(quote);
  if (!needle) return false;
  return pages.some((p) => {
    try {
      return norm(pdfPageText(part, p)).includes(needle);
    } catch {
      return false;
    }
  });
}

/** Search a page range for lines matching a needle; returns page → matches. */
export function findLines(part: 1 | 2, from: number, to: number, needle: string): { page: number; line: string }[] {
  const n = norm(needle);
  const out: { page: number; line: string }[] = [];
  for (let p = Math.max(1, from); p <= to; p++) {
    let text: string;
    try {
      text = pdfPageText(part, p);
    } catch {
      break;
    }
    for (const line of text.split("\n")) {
      if (norm(line).includes(n)) out.push({ page: p, line: line.trim() });
    }
  }
  return out;
}

/* ---------- source tree scanning ---------- */

import { readdirSync as _rd } from "fs";
function walk(dir: string, acc: string[] = []): string[] {
  for (const e of _rd(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

/** All .tsx/.ts files under src/components/kyp/usmle + src/app/usmle. */
export function usmleSourceFiles(): { path: string; source: string }[] {
  const dirs = [join(SRC, "components", "kyp", "usmle"), join(SRC, "app", "usmle")].filter(existsSync);
  return dirs.flatMap((d) => walk(d)).filter((f) => /\.(tsx|ts)$/.test(f)).map((path) => ({ path, source: readFileSync(path, "utf8") }));
}

export function srcFile(rel: string): string {
  return readFileSync(join(SRC, rel), "utf8");
}

/* ---------- formatting ---------- */

export function pad(s: string, n: number): string {
  return s.length >= n ? s : s + " ".repeat(n - s.length);
}

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}
