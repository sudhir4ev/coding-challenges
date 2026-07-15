import { createDb } from './db.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(__dirname, '04-window-latest-per-group.sql'), 'utf8');

describe('04 — Latest Holdings per Portfolio (Window)', () => {
  let db;
  beforeEach(() => { db = createDb(); });
  afterEach(() => { db.close(); });

  it('returns exactly 15 rows (3 instrument types × 5 portfolios)', () => {
    const rows = db.prepare(sql).all();
    expect(rows).toHaveLength(15);
  });

  it('p1 rows all have val_date 2026-07-14 (old snapshot excluded)', () => {
    const rows = db.prepare(sql).all();
    const p1rows = rows.filter(r => r.portfolio_id === 'p1');
    expect(p1rows).toHaveLength(3);
    p1rows.forEach(r => expect(r.val_date).toBe('2026-07-14'));
  });

  it('p1 EQUITY market_value is 30000 (not 18000 from stale snapshot)', () => {
    const rows = db.prepare(sql).all();
    const r = rows.find(r => r.portfolio_id === 'p1' && r.instrument_type === 'EQUITY');
    expect(r).toBeDefined();
    expect(r.market_value).toBe(30000);
  });

  it('output has required columns', () => {
    const rows = db.prepare(sql).all();
    expect(rows.length).toBeGreaterThan(0);
    ['portfolio_id', 'val_date', 'instrument_type', 'market_value'].forEach(col => {
      expect(rows[0]).toHaveProperty(col);
    });
  });
});
