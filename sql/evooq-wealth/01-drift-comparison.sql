-- Challenge 01: Portfolio Drift Analysis
-- ~5 min target
--
-- Find portfolios where the LATEST actual allocation deviates from the model
-- target by more than 5 percentage points for any asset class.
--
-- Output columns: portfolio_id, client_name, model_name,
--                 instrument_type, actual_pct, target_pct, drift_pct
-- Order by: ABS(drift_pct) DESC
--
-- Steps to think through:
--   1. Filter holdings to the latest val_date per portfolio_id
--   2. Compute actual_pct = SUM(market_value) / portfolio_total * 100 per instrument_type
--   3. JOIN portfolios → model_portfolios to get target_%
--   4. Compute drift_pct = actual_pct - target_pct
--   5. Keep rows where ABS(drift_pct) > 5
--
-- Expected: p1(EQUITY +10), p3(EQUITY -20, BOND +20), p4(EQUITY +20, BOND -20)
-- p2 must NOT appear — it is exactly on-target.

SELECT 
    holding_id, portfolio_id, max_val_date as MAX(val_date)
    GROUP BY holding_id, portfolio_id
from holdings

SELECT 1; -- replace this with your query
