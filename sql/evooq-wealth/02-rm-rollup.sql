-- Challenge 02: AUM Rollup by Relationship Manager
-- ~5 min target
--
-- Calculate total AUM per RM using only the latest holdings snapshot per portfolio.
--
-- Output columns: rm_id, portfolio_count, total_aum
-- Order by: total_aum DESC
--
-- Watch out:
--   • p1 has TWO val_dates — naive SUM double-counts it (gives $292k for rm1, not $200k)
--   • Use a subquery or CTE to isolate the latest val_date per portfolio first
--
-- Expected:
--   rm2 | 3 portfolios | 300000
--   rm1 | 2 portfolios | 200000

SELECT 1; -- replace this with your query
