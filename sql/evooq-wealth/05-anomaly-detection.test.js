import { createDb } from './db.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(__dirname, '05-anomaly-detection.sql'), 'utf8');

describe('05 — Failed Jobs in Most Recent EOD Batch', () => {
  let db;
  beforeEach(() => { db = createDb(); });
  afterEach(() => { db.close(); });

  it('returns exactly 1 failed job', () => {
    const rows = db.prepare(sql).all();
    expect(rows).toHaveLength(1);
  });

  it('the failed job is REBALANCE_CHECK on 2026-07-14', () => {
    const rows = db.prepare(sql).all();
    expect(rows[0].job_name).toBe('REBALANCE_CHECK');
    expect(rows[0].batch_date).toBe('2026-07-14');
    expect(rows[0].status).toBe('FAILED');
  });

  it('does NOT include REPORT_GEN failure from 2026-07-13 (wrong batch date)', () => {
    const rows = db.prepare(sql).all();
    expect(rows.some(r => r.job_name === 'REPORT_GEN')).toBe(false);
  });

  it('error_message is present', () => {
    const rows = db.prepare(sql).all();
    expect(rows[0].error_message).toBeTruthy();
  });

  it('output has required columns', () => {
    const rows = db.prepare(sql).all();
    ['batch_date', 'job_name', 'status', 'start_time', 'error_message'].forEach(col => {
      expect(rows[0]).toHaveProperty(col);
    });
  });
});
