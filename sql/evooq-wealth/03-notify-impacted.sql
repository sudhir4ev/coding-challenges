-- Challenge 03: Notify Portfolios Impacted by a Model Change
-- ~5 min target
--
-- A model portfolio has been updated. Find all client portfolios using it
-- so the RM can be notified before the next rebalance run.
--
-- Scenario: model 'm2' (Balanced) was just updated.
--
-- Output columns: portfolio_id, client_name, client_status, rm_id, mandate_type
-- Order by: rm_id, portfolio_id
--
-- Expected: p2 (Bob, rm1), p4 (David, rm2), p5 (Eve, rm2 — INACTIVE client)
-- Note: include ALL portfolios on the model regardless of client status.

SELECT 1; -- replace this with your query
