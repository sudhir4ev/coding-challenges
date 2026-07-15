import { createDb } from './db.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(__dirname, '02-rm-rollup.sql'), 'utf8');

describe('02 — RM AUM Rollup', () => {
  let db;
  beforeEach(() => { db = createDb(); });
  afterEach(() => { db.close(); });

  it('returns exactly 2 rows (one per RM)', () => {
    const rows = db.prepare(sql).all();
    expect(rows).toHaveLength(2);
  });

  it('rm1 total_aum is 200000 (NOT 292000 — must use latest snapshot only)', () => {
    const rows = db.prepare(sql).all();
    const rm1 = rows.find(r => r.rm_id === 'rm1');
    expect(rm1).toBeDefined();
    // p1 has an older snapshot totalling $92k — naive SUM gives 292k, wrong
    expect(rm1.total_aum).toBeCloseTo(200000, 0);
  });

  it('rm2 total_aum is 300000 (p3 + p4 + p5)', () => {
    const rows = db.prepare(sql).all();
    const rm2 = rows.find(r => r.rm_id === 'rm2');
    expect(rm2).toBeDefined();
    expect(rm2.total_aum).toBeCloseTo(300000, 0);
  });

  it('rm2 has 3 portfolios (includes inactive client p5)', () => {
    const rows = db.prepare(sql).all();
    const rm2 = rows.find(r => r.rm_id === 'rm2');
    expect(rm2.portfolio_count).toBe(3);
  });

  it('output has required columns', () => {
    const rows = db.prepare(sql).all();
    expect(rows.length).toBeGreaterThan(0);
    ['rm_id', 'portfolio_count', 'total_aum'].forEach(col => {
      expect(rows[0]).toHaveProperty(col);
    });
  });
});
