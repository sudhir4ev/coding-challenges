#!/usr/bin/env node
/**
 * Marks the start of a challenge attempt with an empty git commit.
 * Records timestamp for automatic time tracking via `npm run times`.
 *
 * Usage: npm run start-challenge -- <challenge-name>
 * Example: npm run start-challenge -- binary-search-tree-validate
 */
import { execSync } from 'child_process';

const name = process.argv[2];
if (!name) {
  console.error('Usage: npm run start-challenge -- <challenge-name>');
  process.exit(1);
}

const msg = `start: ${name}`;
execSync(`git commit --allow-empty -m "${msg}"`, { cwd: process.cwd(), stdio: 'inherit' });
console.log(`\n⏱  Timer started for: ${name}`);
console.log(`   Run "npm run done-challenge -- ${name}" when finished.\n`);
