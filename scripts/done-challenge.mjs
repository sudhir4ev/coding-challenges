#!/usr/bin/env node
/**
 * Marks the end of a challenge attempt with a git commit of staged changes.
 * Calculates elapsed time since the matching "start: <name>" commit.
 *
 * Usage: npm run done-challenge -- <challenge-name>
 * Example: npm run done-challenge -- binary-search-tree-validate
 *
 * Stages all changes in the challenge folder automatically before committing.
 */
import { execSync } from 'child_process';

const name = process.argv[2];
if (!name) {
  console.error('Usage: npm run done-challenge -- <challenge-name>');
  process.exit(1);
}

const cwd = process.cwd();

// Find matching start commit
let startTime = null;
try {
  const log = execSync(
    `git log --format="%ad||%s" --date=format:"%Y-%m-%dT%H:%M:%S"`,
    { cwd, encoding: 'utf8' }
  );
  for (const line of log.trim().split('\n')) {
    const [date, msg] = line.split('||');
    if (msg && msg.toLowerCase() === `start: ${name.toLowerCase()}`) {
      startTime = new Date(date);
      break;
    }
  }
} catch {}

// Stage all changes in the challenge folder
try {
  execSync(`git add algo/${name}/ frontend/${name}/ 2>/dev/null || git add -A`, { cwd, stdio: 'pipe' });
} catch {
  execSync(`git add -A`, { cwd, stdio: 'inherit' });
}

const msg = `impl: ${name}`;
execSync(`git commit -m "${msg}"`, { cwd, stdio: 'inherit' });

if (startTime) {
  const elapsedMs = Date.now() - startTime.getTime();
  const mins = Math.round(elapsedMs / 60000);
  console.log(`\n✅ Done: ${name}`);
  console.log(`⏱  Time taken: ${mins} mins\n`);
} else {
  console.log(`\n✅ Done: ${name}`);
  console.log(`⚠️  No matching "start: ${name}" commit found — time not calculated.\n`);
}
