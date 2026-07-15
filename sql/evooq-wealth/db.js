import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function createDb() {
  const db = new DatabaseSync(':memory:');
  db.exec(readFileSync(join(__dirname, 'schema.sql'), 'utf8'));
  db.exec(readFileSync(join(__dirname, 'seed.sql'), 'utf8'));
  return db;
}
