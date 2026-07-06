#!/usr/bin/env node
/**
 * Remove algorithm/topic tags from challenge README line 3.
 * Keeps difficulty (#Easy, #Medium, #Hard) and time (#45mins) tags only.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const KEEP = new Set(['Easy', 'Medium', 'Hard']);
const TIME_RE = /^\d+\s*mins?$/i;

function cleanTagLine(line) {
  const tags = [...line.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  if (!tags.some((t) => t.startsWith('#') || TIME_RE.test(t))) return line;

  const kept = tags.filter((tag) => {
    if (!tag.startsWith('#')) return TIME_RE.test(tag);
    const name = tag.slice(1);
    if (KEEP.has(name)) return true;
    if (TIME_RE.test(name)) return true;
    return false;
  });

  if (kept.length === 0) return '';
  return kept.map((t) => (t.startsWith('#') || !TIME_RE.test(t) ? `\`${t}\`` : t)).join(' ');
}

function processReadme(path) {
  const content = readFileSync(path, 'utf8');
  const lines = content.split('\n');
  let changed = false;
  const out = lines.map((line, i) => {
    if (i !== 2) return line;
    const cleaned = cleanTagLine(line);
    if (cleaned !== line) changed = true;
    return cleaned;
  });
  if (changed) {
    writeFileSync(path, out.join('\n'));
    console.log('updated:', path);
  }
}

function walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name === 'README.md') processReadme(p);
  }
}

walk(join(ROOT, 'algo'));
walk(join(ROOT, 'frontend'));
walk(join(ROOT, 'ui-react'));
