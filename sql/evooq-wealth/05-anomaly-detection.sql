-- Challenge 05: Failed Jobs in the Most Recent EOD Batch
-- ~5 min target
--
-- L2 morning triage: the batch log contains multiple job runs per date.
-- Find all jobs that FAILED on the most recent batch_date only.
-- Do NOT hardcode the date — derive it from the table.
--
-- Output columns: batch_date, job_name, status, start_time, error_message
-- Order by: start_time
--
-- Hint: use a subquery or CTE to find MAX(batch_date), then filter.
-- Watch out: REPORT_GEN failed on 2026-07-13 — it must NOT appear
-- because it's not the most recent batch date.
--
-- Expected: 1 row — REBALANCE_CHECK FAILED on 2026-07-14

SELECT 1; -- replace this with your query
