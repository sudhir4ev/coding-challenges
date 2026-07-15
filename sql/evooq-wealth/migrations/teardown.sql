-- Teardown: drop all tables in dependency order
-- Use this to reset a persistent database before re-running migrations.

DROP TABLE IF EXISTS eod_batch_log;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS holdings;
DROP TABLE IF EXISTS portfolios;
DROP TABLE IF EXISTS model_portfolios;
DROP TABLE IF EXISTS clients;
