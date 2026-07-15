CREATE TABLE clients (
  client_id   TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  risk_profile TEXT NOT NULL,
  rm_id       TEXT NOT NULL,
  status      TEXT NOT NULL
);

CREATE TABLE model_portfolios (
  model_id          TEXT PRIMARY KEY,
  model_name        TEXT NOT NULL,
  target_equity_pct REAL NOT NULL,
  target_bond_pct   REAL NOT NULL,
  target_cash_pct   REAL NOT NULL,
  last_updated_date TEXT NOT NULL
);

CREATE TABLE portfolios (
  portfolio_id      TEXT PRIMARY KEY,
  client_id         TEXT NOT NULL REFERENCES clients(client_id),
  model_portfolio_id TEXT NOT NULL REFERENCES model_portfolios(model_id),
  mandate_type      TEXT NOT NULL,
  base_currency     TEXT NOT NULL,
  created_date      TEXT NOT NULL
);

CREATE TABLE holdings (
  holding_id    TEXT PRIMARY KEY,
  portfolio_id  TEXT NOT NULL REFERENCES portfolios(portfolio_id),
  instrument_id TEXT NOT NULL,
  instrument_type TEXT NOT NULL,  -- EQUITY | BOND | CASH
  quantity      REAL NOT NULL,
  market_value  REAL NOT NULL,
  val_date      TEXT NOT NULL
);

CREATE TABLE transactions (
  transaction_id TEXT PRIMARY KEY,
  portfolio_id   TEXT NOT NULL REFERENCES portfolios(portfolio_id),
  instrument_id  TEXT NOT NULL,
  txn_type       TEXT NOT NULL,   -- BUY | SELL
  txn_amount     REAL NOT NULL,
  txn_date       TEXT NOT NULL,
  status         TEXT NOT NULL    -- COMPLETED | PENDING | FAILED
);

CREATE TABLE eod_batch_log (
  batch_id      TEXT PRIMARY KEY,
  batch_date    TEXT NOT NULL,
  job_name      TEXT NOT NULL,
  status        TEXT NOT NULL,    -- COMPLETED | FAILED | RUNNING
  start_time    TEXT NOT NULL,
  end_time      TEXT,
  error_message TEXT
);
