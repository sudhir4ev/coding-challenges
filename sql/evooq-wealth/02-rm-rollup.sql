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

WITH latest_portfolios as (
    SELECT 
        portfolio_id, 
        market_value, 
        MAX(val_date) AS val_date 
    FROM holdings 
    GROUP BY portfolio_id, market_value
), 
porfolio_clients as (
    SELECT 
        p.portfolio_id, 
        p.client_id, 
        SUM(market_value) as total 
    FROM portfolios p INNER JOIN latest_portfolios lp 
    ON lp.portfolio_id = p.portfolio_id 
    GROUP BY p.portfolio_id, p.client_id
) 

SELECT 
    c.rm_id, 
    SUM(total) as total, 
    COUNT(portfolio_id) as count_portfolios 
FROM clients c JOIN porfolio_clients pc 
ON pc.client_id = c.client_id 
GROUP BY c.rm_id;
