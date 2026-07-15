-- V001: Evooq Wealth Platform — initial schema
-- Compatible with PostgreSQL and SQLite

CREATE TABLE clients (
  client_id    TEXT        PRIMARY KEY,
  client_name  TEXT        NOT NULL,
  risk_profile TEXT        NOT NULL,
  rm_id        TEXT        NOT NULL,
  status       TEXT        NOT NULL  -- ACTIVE | INACTIVE
);

CREATE TABLE model_portfolios (
  model_id          TEXT PRIMARY KEY,
  model_name        TEXT NOT NULL,
  target_equity_pct NUMERIC(5,2) NOT NULL,
  target_bond_pct   NUMERIC(5,2) NOT NULL,
  target_cash_pct   NUMERIC(5,2) NOT NULL,
  last_updated_date DATE NOT NULL
);

CREATE TABLE portfolios (
  portfolio_id       TEXT PRIMARY KEY,
  client_id          TEXT NOT NULL REFERENCES clients(client_id),
  model_portfolio_id TEXT NOT NULL REFERENCES model_portfolios(model_id),
  mandate_type       TEXT NOT NULL,  -- DISCRETIONARY | ADVISORY
  base_currency      TEXT NOT NULL,
  created_date       DATE NOT NULL
);

CREATE TABLE holdings (
  holding_id      TEXT    PRIMARY KEY,
  portfolio_id    TEXT    NOT NULL REFERENCES portfolios(portfolio_id),
  instrument_id   TEXT    NOT NULL,
  instrument_type TEXT    NOT NULL,  -- EQUITY | BOND | CASH
  quantity        NUMERIC NOT NULL,
  market_value    NUMERIC NOT NULL,
  val_date        DATE    NOT NULL
);

CREATE TABLE transactions (
  transaction_id TEXT    PRIMARY KEY,
  portfolio_id   TEXT    NOT NULL REFERENCES portfolios(portfolio_id),
  instrument_id  TEXT    NOT NULL,
  txn_type       TEXT    NOT NULL,     -- BUY | SELL
  txn_amount     NUMERIC NOT NULL,
  txn_date       DATE    NOT NULL,
  status         TEXT    NOT NULL      -- COMPLETED | PENDING | FAILED
);

CREATE TABLE eod_batch_log (
  batch_id      TEXT      PRIMARY KEY,
  batch_date    DATE      NOT NULL,
  job_name      TEXT      NOT NULL,
  status        TEXT      NOT NULL,    -- COMPLETED | FAILED | RUNNING
  start_time    TIMESTAMP NOT NULL,
  end_time      TIMESTAMP,
  error_message TEXT
);
