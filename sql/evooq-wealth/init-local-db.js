import { DatabaseSync } from 'node:sqlite';
import { readFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, 'local.db');

rmSync(dbPath, { force: true });
const db = new DatabaseSync(dbPath);
db.exec(readFileSync(join(__dirname, 'schema.sql'), 'utf8'));
db.exec(readFileSync(join(__dirname, 'seed.sql'), 'utf8'));
db.close();

console.log(`Created ${dbPath}`);
console.log('Connect: sqlite3 sql/evooq-wealth/local.db');
