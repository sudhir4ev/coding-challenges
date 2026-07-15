-- Model portfolios: Conservative / Balanced / Growth
INSERT INTO model_portfolios VALUES
  ('m1', 'Conservative', 20.0, 70.0, 10.0, '2026-01-15'),
  ('m2', 'Balanced',     50.0, 40.0, 10.0, '2026-01-15'),
  ('m3', 'Growth',       80.0, 15.0,  5.0, '2026-01-15');

-- Clients: two RMs, one inactive client
INSERT INTO clients VALUES
  ('c1', 'Alice Ng',   'conservative', 'rm1', 'ACTIVE'),
  ('c2', 'Bob Tan',    'balanced',     'rm1', 'ACTIVE'),
  ('c3', 'Carol Lim',  'growth',       'rm2', 'ACTIVE'),
  ('c4', 'David Koh',  'balanced',     'rm2', 'ACTIVE'),
  ('c5', 'Eve Wong',   'balanced',     'rm2', 'INACTIVE');

-- Portfolios
INSERT INTO portfolios VALUES
  ('p1', 'c1', 'm1', 'DISCRETIONARY', 'SGD', '2023-01-10'),
  ('p2', 'c2', 'm2', 'DISCRETIONARY', 'SGD', '2023-03-15'),
  ('p3', 'c3', 'm3', 'ADVISORY',      'USD', '2022-06-01'),
  ('p4', 'c4', 'm2', 'DISCRETIONARY', 'SGD', '2024-02-20'),
  ('p5', 'c5', 'm2', 'ADVISORY',      'SGD', '2024-08-01');

-- Holdings
-- p1 has TWO val_dates — older snapshot has a different total ($92k vs $100k)
-- This tests that queries correctly use only the latest snapshot.

-- p1 older snapshot (2026-07-01): $92k total, near-target allocation
INSERT INTO holdings VALUES
  ('h1_old_eq', 'p1', 'EQ_STI',   'EQUITY', 180, 18000.0, '2026-07-01'),
  ('h1_old_bd', 'p1', 'BOND_SGS', 'BOND',    90, 65000.0, '2026-07-01'),
  ('h1_old_ca', 'p1', 'CASH_SGD', 'CASH',     1,  9000.0, '2026-07-01');

-- p1 latest snapshot (2026-07-14): $100k, equity has drifted to 30% (target 20%)
INSERT INTO holdings VALUES
  ('h1_eq', 'p1', 'EQ_STI',   'EQUITY', 250, 30000.0, '2026-07-14'),
  ('h1_bd', 'p1', 'BOND_SGS', 'BOND',   180, 60000.0, '2026-07-14'),
  ('h1_ca', 'p1', 'CASH_SGD', 'CASH',     1, 10000.0, '2026-07-14');

-- p2 (Balanced m2: 50E/40B/10C) — exactly on-target, $100k
INSERT INTO holdings VALUES
  ('h2_eq', 'p2', 'EQ_MSFT',  'EQUITY', 100, 50000.0, '2026-07-14'),
  ('h2_bd', 'p2', 'BOND_SGS', 'BOND',   100, 40000.0, '2026-07-14'),
  ('h2_ca', 'p2', 'CASH_SGD', 'CASH',     1, 10000.0, '2026-07-14');

-- p3 (Growth m3: 80E/15B/5C) — drifted: equity 60% (target 80%), bond 35% (target 15%)
INSERT INTO holdings VALUES
  ('h3_eq', 'p3', 'EQ_AAPL',  'EQUITY', 150, 60000.0, '2026-07-14'),
  ('h3_bd', 'p3', 'BOND_UST', 'BOND',   200, 35000.0, '2026-07-14'),
  ('h3_ca', 'p3', 'CASH_USD', 'CASH',     1,  5000.0, '2026-07-14');

-- p4 (Balanced m2: 50E/40B/10C) — drifted: equity 70% (target 50%), bond 20% (target 40%)
INSERT INTO holdings VALUES
  ('h4_eq', 'p4', 'EQ_DBS',   'EQUITY', 400, 70000.0, '2026-07-14'),
  ('h4_bd', 'p4', 'BOND_SGS', 'BOND',    80, 20000.0, '2026-07-14'),
  ('h4_ca', 'p4', 'CASH_SGD', 'CASH',     1, 10000.0, '2026-07-14');

-- p5 (Balanced m2: 50E/40B/10C) — on-target, inactive client
INSERT INTO holdings VALUES
  ('h5_eq', 'p5', 'EQ_MSFT',  'EQUITY', 100, 50000.0, '2026-07-14'),
  ('h5_bd', 'p5', 'BOND_SGS', 'BOND',   100, 40000.0, '2026-07-14'),
  ('h5_ca', 'p5', 'CASH_SGD', 'CASH',     1, 10000.0, '2026-07-14');

-- Transactions: mix of statuses across portfolios
INSERT INTO transactions VALUES
  ('t1', 'p1', 'EQ_STI',   'BUY',   5000.0, '2026-07-10', 'COMPLETED'),
  ('t2', 'p1', 'BOND_SGS', 'SELL', 10000.0, '2026-07-10', 'COMPLETED'),
  ('t3', 'p2', 'EQ_MSFT',  'BUY',  15000.0, '2026-07-12', 'PENDING'),
  ('t4', 'p3', 'EQ_AAPL',  'SELL',  8000.0, '2026-07-11', 'FAILED'),
  ('t5', 'p3', 'BOND_UST', 'BUY',  12000.0, '2026-07-13', 'COMPLETED'),
  ('t6', 'p4', 'EQ_DBS',   'BUY',  20000.0, '2026-07-14', 'PENDING'),
  ('t7', 'p4', 'EQ_DBS',   'BUY',   5000.0, '2026-07-09', 'FAILED'),
  ('t8', 'p1', 'EQ_STI',   'BUY',   3000.0, '2026-07-08', 'COMPLETED');

-- EOD batch log: two batch dates, each with multiple jobs
-- 2026-07-13: all good
-- 2026-07-14 (latest): REBALANCE_CHECK failed
INSERT INTO eod_batch_log VALUES
  ('b1', '2026-07-13', 'VALUATION_RUN',   'COMPLETED', '2026-07-13 18:00', '2026-07-13 18:45', NULL),
  ('b2', '2026-07-13', 'REBALANCE_CHECK', 'COMPLETED', '2026-07-13 19:00', '2026-07-13 19:10', NULL),
  ('b3', '2026-07-13', 'REPORT_GEN',      'FAILED',    '2026-07-13 20:00', '2026-07-13 20:05', 'ORA-00942: table not found'),
  ('b4', '2026-07-14', 'VALUATION_RUN',   'COMPLETED', '2026-07-14 18:00', '2026-07-14 18:42', NULL),
  ('b5', '2026-07-14', 'REBALANCE_CHECK', 'FAILED',    '2026-07-14 19:00', '2026-07-14 19:01', 'Connection timeout to pricing service'),
  ('b6', '2026-07-14', 'REPORT_GEN',      'COMPLETED', '2026-07-14 20:00', '2026-07-14 20:08', NULL),
  ('b7', '2026-07-14', 'POSITION_SYNC',   'COMPLETED', '2026-07-14 21:00', '2026-07-14 21:15', NULL);
