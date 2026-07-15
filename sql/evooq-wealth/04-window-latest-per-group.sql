-- Challenge 04: Latest Holdings Snapshot per Portfolio (Window Function)
-- ~5 min target
--
-- Return only the holdings from the most recent val_date for each portfolio.
-- This is the standard "latest-per-group" pattern for live data triage.
--
-- Use ROW_NUMBER() OVER (PARTITION BY portfolio_id ORDER BY val_date DESC)
-- rather than a correlated subquery — window functions are faster on large tables
-- and interviewers expect you to reach for them here.
--
-- Output columns: portfolio_id, val_date, instrument_type, market_value
-- Order by: portfolio_id, instrument_type
--
-- Expected: p1 rows show val_date = '2026-07-14' only (NOT '2026-07-01').
-- Total rows: 15 (3 instrument types × 5 portfolios).

SELECT 1; -- replace this with your query
