#!/usr/bin/env node
/**
 * challenge-times.mjs
 *
 * Calculates time spent on each challenge using git commit timestamps.
 *
 * Convention:
 *   - "start: <name>"  commit = when you began working on the solution
 *   - "impl: <name>"   commit = when the solution was complete
 *   Elapsed = impl timestamp - start timestamp (same challenge name)
 *
 * Also extracts any #Xmins tags from README files as a fallback.
 *
 * Usage:
 *   node scripts/challenge-times.mjs
 *   node scripts/challenge-times.mjs --update-notion   (future: patch Notion DB)
 */

import { execSync } from 'child_process';
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;

// ── 1. Parse git log ────────────────────────────────────────────────────────

function gitLog() {
  const raw = execSync(
    'git log --format="%H|||%ad|||%s" --date=format:"%Y-%m-%dT%H:%M:%S"',
    { cwd: ROOT, encoding: 'utf8' }
  );
  return raw.trim().split('\n').map(line => {
    const [hash, date, ...msgParts] = line.split('|||');
    return { hash, date: new Date(date), msg: msgParts.join('|||').trim() };
  });
}

function extractName(msg, prefix) {
  // Matches "start: binary-search-tree-kth-smallest" or "impl: bst kth smallest el"
  return msg.slice(prefix.length).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function buildTimingMap(commits) {
  const starts = {};  // normalised name → commit
  const impls  = {};

  for (const c of commits) {
    const msg = c.msg.toLowerCase();
    if (msg.startsWith('start:')) {
      const name = extractName(msg, 'start:');
      starts[name] = c;
    } else if (msg.startsWith('impl:')) {
      const name = extractName(msg, 'impl:');
      // keep the EARLIEST impl commit (first attempt)
      if (!impls[name]) impls[name] = c;
    }
  }

  const results = [];
  for (const name of Object.keys(impls)) {
    const impl  = impls[name];
    const start = starts[name];
    if (start) {
      const elapsedMs  = impl.date - start.date;
      const elapsedMin = Math.round(elapsedMs / 60000);
      results.push({ name, startDate: start.date, implDate: impl.date, elapsedMin, source: 'git' });
    } else {
      results.push({ name, implDate: impl.date, elapsedMin: null, source: 'git-no-start' });
    }
  }
  return results;
}

// ── 2. Fallback: parse #Xmins from README files ──────────────────────────────

function readmeFallbacks() {
  const fallbacks = {};
  const algoDirs = existsSync(join(ROOT, 'algo'))
    ? readdirSync(join(ROOT, 'algo'), { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name)
    : [];

  for (const dir of algoDirs) {
    const readmePath = join(ROOT, 'algo', dir, 'README.md');
    if (!existsSync(readmePath)) continue;
    const content = readFileSync(readmePath, 'utf8');
    const match = content.match(/#(\d+)\s*mins?/i);
    if (match) fallbacks[dir] = parseInt(match[1], 10);
  }
  return fallbacks;
}

// ── 3. Merge and report ──────────────────────────────────────────────────────

function main() {
  const commits  = gitLog();
  const timings  = buildTimingMap(commits);
  const readmes  = readmeFallbacks();

  // Build final report: git-derived times take precedence; README fallback second
  const report = {};

  // Seed from README fallbacks
  for (const [dir, mins] of Object.entries(readmes)) {
    report[dir] = { elapsedMin: mins, source: 'readme-tag' };
  }

  // Override / enrich with git-derived times
  for (const t of timings) {
    const key = t.name;
    if (t.elapsedMin !== null) {
      report[key] = { elapsedMin: t.elapsedMin, implDate: t.implDate, source: 'git' };
    } else if (!report[key]) {
      report[key] = { elapsedMin: null, implDate: t.implDate, source: 'no-start-commit' };
    }
  }

  // Print table
  const rows = Object.entries(report).sort((a, b) => a[0].localeCompare(b[0]));
  const colW = Math.max(...rows.map(([k]) => k.length), 10);

  console.log('\n📊 Challenge Time Report\n');
  console.log(`${'Challenge'.padEnd(colW)}   Time (mins)   Source`);
  console.log('─'.repeat(colW + 30));

  for (const [name, { elapsedMin, source }] of rows) {
    const time = elapsedMin !== null ? `${elapsedMin} mins`.padEnd(12) : '?'.padEnd(12);
    const src  = source === 'git' ? '✅ git timestamps'
               : source === 'readme-tag' ? '📄 README tag'
               : '⚠️  no start commit';
    console.log(`${name.padEnd(colW)}   ${time}   ${src}`);
  }

  console.log('\nTip: add a "start: <challenge-name>" commit when you begin a solution');
  console.log('     to enable automatic git-based time tracking.\n');
}

main();
