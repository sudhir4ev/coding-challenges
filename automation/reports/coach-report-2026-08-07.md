# DSA Practice Coach Report — 2026-08-07

_Trigger: scheduled cron (`30 3 7 * *`) · Branch: `cursor/practice-coach-report-2e80`_

## Environment note

The `github`, `notion`, and `zapier` MCP servers were **not available** to this
automation run, so:

- Commits/diffs were read directly from the local git checkout instead of via
  the GitHub MCP.
- The Notion Challenge Log (`collection://fc3065b4-8e18-4022-bf58-da19c25d5239`)
  could not be queried; per-attempt qualitative signals (Where Stuck / Key
  Insight Missed / Approach Quality) are therefore missing from this run.
- Phase D calendar reminder could not be created via Zapier. See "Actions
  taken" below for what the user should do manually.

Evidence below is drawn from `git log` on `main` (which
`cursor/practice-coach-report-2e80` matches exactly at `5f26510`), the solution
and test files under `algo/`, and the challenge READMEs.

---

## Evidence summary

- **Last DSA practice:** 2026-07-20 — `impl: bit-counting` (commit `5f26510`).
  That is **18 days ago**, well past `inactiveDays: 3`. The user is inactive.
- **Last `start:` / `impl:` pair timing:** `start: bit-counting` 2026-07-20
  08:53 → `impl: bit-counting` 2026-07-20 13:13. Wall-clock ~4h20m, likely with
  breaks; the solution itself is ~15 lines of core logic.
- **Activity mix, last 30 days (this repo, 5 commits total):**
  - `dsa-practice` (start/impl pair): 2 commits — `bit-counting`
  - `wip` / SQL work: 1 — `wip: SQL works`
  - `feature-dev`: 1 — `feat: impl soln for rm rollup and notify impacted`
  - `infra`: 1 — `feat: add SQL challenges and database setup`
  - Only **one distinct DSA challenge** attempted in the window.
- **Longer view (last 60 days):** 10 `impl:` commits across arrays, trees,
  BSTs, 1-D DP, sliding window, grid DFS, and bit manipulation. Cadence has
  clearly slowed in the last three weeks.
- **Repo inventory (`algo/`):** 42 challenges scaffolded, ~17 have real
  solutions (>25 lines and matching `impl:` history), **~25 remain scaffold
  stubs** (`throw 'Not implemented!'`, ≤15 lines).

### Solutions read for quality assessment

| Challenge | File | Observations |
|---|---|---|
| `bit-counting` | `algo/bit-counting/bit-counting.ts` | Clean O(n) DP using `i/2` + parity. Optimal. Good scratchpad-driven pattern recognition. |
| `coin-change` | `algo/coin-change/coin-change.ts` | Classic bottom-up 1-D DP, O(n·target). Optimal. |
| `staircase-climbing-combinations` | `algo/staircase-climbing-combinations/staircase-climbing-combinations.ts` | Top-down memoization. Correct, but could be O(1) space with two-var iteration — a small optimization gap. |
| `grid-count-islands` | `algo/grid-count-islands/grid-count-islands.ts` | Recursive DFS that **mutates the input grid** to mark visits. Works, but destructive; no iterative/queue variant. |
| `binary-search-tree-validate` | `algo/binary-search-tree-validate/binary-search-tree-validate.js` | Correct min/max-bound recursion ("check yourself, not your children" — the commit message shows explicit refactor toward the cleaner form). Strong. |
| `binary-search-tree-kth-smallest` | `algo/binary-search-tree-kth-smallest/binary-search-tree-kth-smallest.ts` | In-order recursion with an early-exit counter; matches `impl: stop recursion after kth el has been found`. Optimal. |
| `binary-search-tree-lowest-common-ancestor` | `algo/binary-search-tree-lowest-common-ancestor/binary-search-tree-lowest-common-ancestor.ts` | Uses BST ordering to prune. Correct and efficient, but implemented recursively — an iterative walk would be O(1) space. |
| `longest-non-repeating-substring` | `algo/longest-non-repeating-substring/longest-non-repeating-substring.ts` | Sliding window, but on a duplicate hit it **resets the hashmap and only advances `index` by 1** rather than sliding `start` to `seen[char] + 1` and continuing. Still linear-ish in practice but not the textbook O(n) single-pass window; reveals shakiness on the sliding-window invariant. |

---

## Gap analysis

Ranked by evidence weight:

1. **Graphs — zero exposure.** Every graph challenge is a scaffold stub:
   `graph-clone`, `graph-count-connected-components`, `graph-is-tree`,
   `course-dependency`, `extraterrestrial-language`. No BFS/DFS on an
   adjacency list, no Union-Find, no topological sort in the codebase.
2. **Intervals — zero exposure.** All six interval problems are stubs:
   `intervals-combine-overlapping`, `intervals-merge-new`,
   `intervals-meeting-calendar`, `intervals-minimum-meeting-rooms`,
   `disjoint-intervals`. Sort-first patterns are missing entirely.
3. **Iterative / BFS traversal — missing.** Every tree and grid solution uses
   recursive DFS. `binary-tree-level-order-traversal` (queue-based BFS on a
   tree) is unattempted, and `grid-count-islands` was solved DFS-only. In
   interviews, "solve it iteratively" or "return level order" is a common
   follow-up the user is not yet armed for.
4. **Backtracking / combinatorial search — missing.** `combinations-target-sum`
   and `grid-find-word` / `grid-find-words` are stubs. The user solves DP
   fluently but hasn't written a decision-tree recursion with backtracking.
5. **Sliding-window invariant is shaky.** The `longest-non-repeating-substring`
   solution rebuilds the hashmap on a collision instead of sliding `start`
   forward, which is a tell that the "shrink from left while invariant is
   violated" mental model isn't crisp yet.
6. **Cadence has slipped.** 18 days since last DSA commit, and only one
   distinct challenge in the last 30 days. Momentum needs a small, winnable
   restart.

### Strengths (do more of this, but branch out)

- **1-D dynamic programming** — `coin-change`, `staircase-climbing-combinations`,
  `bit-counting` are all clean.
- **BST invariants** — validate / kth-smallest / LCA solutions are all
  correct and use the BST ordering property well.
- **Scratchpad-first problem framing** — visible in the `bit-counting`
  comment block, and in the incremental commits on `bst-validate`
  ("first version works" → "simplified version works"). Keep this habit.

---

## Recommendations

Three unattempted problems, picked to (a) restart cadence with a small win,
(b) attack the highest-value weak area, and (c) stretch into an entirely
underrepresented pattern.

### 1. [Easy] Binary Tree Maximum Depth

- **Path:** `algo/binary-tree-maximum-depth/`
- **Assessed difficulty:** Easy. The recursive one-liner
  (`1 + max(depth(left), depth(right))`) is trivial for this user — that is
  the point. The value is in **solving it a second way, iteratively with a
  BFS queue**, which is what fills the actual gap.
- **Why (evidence):** Every tree solution in `algo/` uses recursion
  (`binary-search-tree-validate.js`, `binary-search-tree-kth-smallest.ts`,
  `binary-search-tree-lowest-common-ancestor.ts`). `grid-count-islands` also
  uses recursive DFS. A quick Easy problem is the safest place to build the
  "queue of `[node, depth]`" muscle before facing it under Medium/Hard
  pressure. Also serves as an 18-day-inactivity ice-breaker.
- **Success criteria:** submit **both** a recursive and an iterative BFS
  solution in the same file, and note the space-complexity trade-off
  (`O(h)` stack vs `O(w)` queue) in a comment.
- **Start:** `npm run start-challenge -- binary-tree-maximum-depth`

### 2. [Medium] Merge Overlapping Intervals

- **Path:** `algo/intervals-combine-overlapping/`
- **Assessed difficulty:** Medium. Sort by start, single sweep, merge when
  `cur.start <= last.end`. Straightforward once the sort-first insight
  clicks, but that insight is exactly what the user has never had to reach
  for in this repo.
- **Why (evidence):** All six `intervals-*` folders are stubs — no exposure
  to sort-then-sweep. Interval merge is one of the most reused patterns in
  interviews (meeting rooms, insert interval, minimum arrows), and it
  unlocks the other five scaffolded interval problems in the repo.
- **Success criteria:** O(n log n) time from the sort, O(n) extra space (or
  in-place). Handle the touching-but-not-overlapping edge case
  (`[[1,3],[3,5]] → [[1,5]]`, per the README example). Add a test for a
  fully-nested interval (`[[1,10],[2,3]]`).
- **Start:** `npm run start-challenge -- intervals-combine-overlapping`

### 3. [Hard] Extraterrestrial Language (Alien Dictionary)

- **Path:** `algo/extraterrestrial-language/`
- **Assessed difficulty:** Hard. Two coupled subproblems: (a) build a
  directed graph of letter-precedence edges by pairwise-comparing adjacent
  words (with the tricky "prefix + longer word after shorter" invalid case),
  (b) run a topological sort (Kahn's BFS or DFS with white/gray/black cycle
  detection) and return `""` on cycle.
- **Why (evidence):** This single problem hits **three** documented gaps at
  once — graphs (none solved), BFS/iterative traversal (none used), and
  topological sort (not represented anywhere). If it feels too steep after
  a 3-week gap, warm up on `graph-count-connected-components` first and
  come back.
- **Success criteria:** correct handling of the `["abc","ab"]` invalid case
  (return `""` before running the sort), correct cycle detection, and
  include every letter that appears in `words` — including letters with no
  ordering constraints — in the output.
- **Start:** `npm run start-challenge -- extraterrestrial-language`

### Suggested order

1. `binary-tree-maximum-depth` — same evening, ~20 min, restart momentum.
2. `intervals-combine-overlapping` — next session, ~40 min including tests.
3. `extraterrestrial-language` — dedicated 60–90 min block. Consider
   sketching the adjacency-list construction on paper first.

---

## Actions taken

- **Calendar:** **Skipped — Zapier MCP not available in this run.** Recommended
  manual action: create a Google Calendar event titled
  `🧠 DSA Practice Session` for the next weekday at 9:00 AM local time, 60 min,
  with a 15-minute reminder, and paste the three recommendations above into
  the description. Once the Zapier MCP is reconnected, the next scheduled run
  will do this automatically.
- **Notion:** **None.** No Challenge Log entries were created (the current run
  is a recommendation, not a completed attempt). Notion MCP was also
  unavailable, so no read-side lookup happened either.
- **Repo:** This report committed to
  `automation/reports/coach-report-2026-08-07.md` on
  `cursor/practice-coach-report-2e80` and a PR opened for review.

## Next steps for the user

```
npm run start-challenge -- binary-tree-maximum-depth
```

After finishing any of the three, log the attempt in Notion (Challenge Log
data source `fc3065b4-8e18-4022-bf58-da19c25d5239`) — capture time taken,
outcome, whether the first instinct was correct, and where you got stuck.
Those fields are what future coach runs use to sharpen the gap analysis
beyond what raw git history can show.
