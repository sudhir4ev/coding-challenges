import { createDb } from './db.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(__dirname, '01-drift-comparison.sql'), 'utf8');

describe('01 — Drift Comparison', () => {
  let db;
  beforeEach(() => { db = createDb(); });
  afterEach(() => { db.close(); });

  it('returns rows only for drifted portfolios', () => {
    const rows = db.prepare(sql).all();
    const ids = [...new Set(rows.map(r => r.portfolio_id))].sort();
    expect(ids).toEqual(['p1', 'p3', 'p4']);
  });

  it('excludes p2 which is exactly on-target', () => {
    const rows = db.prepare(sql).all();
    expect(rows.some(r => r.portfolio_id === 'p2')).toBe(false);
  });

  it('output has required columns', () => {
    const rows = db.prepare(sql).all();
    expect(rows.length).toBeGreaterThan(0);
    const row = rows[0];
    ['portfolio_id', 'instrument_type', 'actual_pct', 'target_pct', 'drift_pct'].forEach(col => {
      expect(row).toHaveProperty(col);
    });
  });

  it('p1 EQUITY drift is +10 (actual 30%, target 20%)', () => {
    const rows = db.prepare(sql).all();
    const r = rows.find(r => r.portfolio_id === 'p1' && r.instrument_type === 'EQUITY');
    expect(r).toBeDefined();
    expect(r.drift_pct).toBeCloseTo(10, 1);
  });

  it('p4 EQUITY drift is +20 (actual 70%, target 50%)', () => {
    const rows = db.prepare(sql).all();
    const r = rows.find(r => r.portfolio_id === 'p4' && r.instrument_type === 'EQUITY');
    expect(r).toBeDefined();
    expect(r.drift_pct).toBeCloseTo(20, 1);
  });

  it('uses latest val_date — p1 CASH shows 0 drift (not stale data)', () => {
    // p1 CASH is 10% on both snapshots so drift=0 → excluded. If old snapshot bleeds in,
    // the totals shift and equity/bond rows would have wrong drift values.
    const rows = db.prepare(sql).all();
    expect(rows.some(r => r.portfolio_id === 'p1' && r.instrument_type === 'CASH')).toBe(false);
  });
});
