import { createDb } from './db.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(__dirname, '03-notify-impacted.sql'), 'utf8');

describe('03 — Notify Impacted Portfolios', () => {
  let db;
  beforeEach(() => { db = createDb(); });
  afterEach(() => { db.close(); });

  it('returns 3 portfolios on model m2', () => {
    const rows = db.prepare(sql).all();
    expect(rows).toHaveLength(3);
  });

  it('includes p2, p4, p5 (all portfolios on Balanced model)', () => {
    const rows = db.prepare(sql).all();
    const ids = rows.map(r => r.portfolio_id).sort();
    expect(ids).toEqual(['p2', 'p4', 'p5']);
  });

  it('includes Eve (inactive client) — notify regardless of client status', () => {
    const rows = db.prepare(sql).all();
    expect(rows.some(r => r.portfolio_id === 'p5')).toBe(true);
  });

  it('output has required columns', () => {
    const rows = db.prepare(sql).all();
    expect(rows.length).toBeGreaterThan(0);
    ['portfolio_id', 'client_name', 'rm_id'].forEach(col => {
      expect(rows[0]).toHaveProperty(col);
    });
  });

  it('excludes portfolios on other models (p1 Conservative, p3 Growth)', () => {
    const rows = db.prepare(sql).all();
    expect(rows.some(r => r.portfolio_id === 'p1')).toBe(false);
    expect(rows.some(r => r.portfolio_id === 'p3')).toBe(false);
  });
});
