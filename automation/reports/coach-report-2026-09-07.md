# DSA Practice Coach Report — 2026-09-07

## Evidence summary

- **Last DSA practice:** 2026-07-20 (`impl: bit-counting`, commit `5f26510`) — **49 days ago**.
- **Activity mix, last 30d (2026-08-08 → 2026-09-07):** 0 commits across the tracked repo (`sudhir4ev/coding-challenges`, `main`). No `start:`, `impl:`, feature, bugfix, refactor, docs, or infra activity.
- **Since the last coach run (2026-08-07):** none of the three recommended challenges were opened. Their solution files are still scaffold stubs (throwing `Not implemented!`).
  - `algo/binary-tree-maximum-depth/binary-tree-maximum-depth.ts` — stub
  - `algo/intervals-combine-overlapping/intervals-combine-overlapping.ts` — stub
  - `algo/extraterrestrial-language/extraterrestrial-language.ts` — stub
- **Notion Challenge Log:** not queried — the `notion` MCP is not enabled for this automation run (only `open_git_pr` and `automation_memory` are configured). Prior gap hypotheses reused from persistent memory (`gaps.md`, last updated 2026-08-07).
- **Streak status:** cold. This is the second consecutive scheduled run reporting an inactive practice window; the last two `impl:` commits (`longest-non-repeating-substring` on 2026-07-06 and `bit-counting` on 2026-07-20) are the only DSA work in the last ~10 weeks.

## Gap analysis

Carrying forward from the 2026-08-07 report; nothing in the git history contradicts these, and no new solutions have landed to update them.

1. **BFS / iterative tree traversal — still zero exposure.** Every solved tree/grid problem (`bst-validate`, `bst-kth-smallest`, `bst-lowest-common-ancestor`, `grid-count-islands`) uses recursive DFS. `binary-tree-level-order-traversal` and `binary-tree-maximum-depth` remain stubs. Evidence: solution files in `algo/binary-search-tree-*/` and `algo/grid-count-islands/`, plus stubs listed above.
2. **Intervals sort-then-sweep — no exposure.** All six `intervals-*` files and `disjoint-intervals` are still `throw 'Not implemented!'` stubs. The classic "sort by start, then merge" pattern hasn't been practiced once.
3. **Graphs (adjacency + traversal + topo sort) — no exposure.** `graph-clone`, `graph-count-connected-components`, `graph-is-tree`, `course-dependency`, and `extraterrestrial-language` are all stubs. `grid-count-islands` is the closest thing to a graph solution and it's grid-DFS, not an explicit adjacency-list traversal.
4. **Backtracking — no exposure.** `combinations-target-sum`, `grid-find-word`, `grid-find-words` are all stubs. No `impl:` has ever produced code that generates subsets or explores a decision tree with undo.
5. **Sliding-window invariant — shaky (unchanged).** From `longest-non-repeating-substring.ts` (`impl` on 2026-07-06): on a collision the code rebuilds the character map instead of sliding `start` to `lastSeen[char] + 1`. Not a blocker but worth revisiting when the next window problem is picked up.

### Strengths (still holding)

- **1-D DP:** `coin-change`, `staircase-climbing-combinations`, `bit-counting` — clean, memoised recursion; no stray recomputations.
- **BST invariants:** validate / kth-smallest / LCA all correct, and `bst-validate` even has an iterative refactor commit — a rare non-recursive tree win in the log.
- **Practice hygiene:** every solved problem in the last 2 months has a paired `start:` / `impl:` commit, and the scratchpad-first comment style in `bit-counting` shows the "explain to yourself before coding" habit is real.

## Recommendations

Two carry-overs (same top gaps, same problems still unattempted) plus one rotation on Hard to lower re-entry friction after 49 days off.

### 1. [Easy] Binary Tree Maximum Depth

- **Path:** `algo/binary-tree-maximum-depth/`
- **Assessed difficulty:** genuinely Easy — 10–15 lines. The point isn't the algorithm, it's the *shape* of the solution.
- **Why (evidence):** all 4 solved tree/grid problems use recursive DFS. Solve this one with a **BFS queue** (`while (queue.length) { const [node, d] = queue.shift(); ... }`) to close the "no iterative traversal" gap #1. It's also the lowest-friction way to restart the cadence after 49 idle days.
- **Start:** `npm run start-challenge -- binary-tree-maximum-depth`

### 2. [Medium] Combine Overlapping Intervals

- **Path:** `algo/intervals-combine-overlapping/`
- **Assessed difficulty:** Medium — the algorithm is short (sort + one pass) but easy to get wrong on adjacency (`[1,4],[4,5]` → merge or not?) and on the "current run" bookkeeping.
- **Why (evidence):** gap #2 — zero intervals exposure. This is the canonical sort-then-sweep and unlocks the other 5 `intervals-*` stubs. Also directly addresses the "edge cases on intervals" observation from prior Notion notes referenced in `gaps.md`.
- **Start:** `npm run start-challenge -- intervals-combine-overlapping`

### 3. [Hard] Course Dependency

- **Path:** `algo/course-dependency/`
- **Assessed difficulty:** README tags it `#Medium`, but for this practice history it's effectively Hard — first-ever explicit graph problem, first cycle-detection, first topological-sort variant. Judging from content and prior attempts per the skill rules.
- **Why (evidence):** gap #3 — zero graph exposure. Rotating off last month's `extraterrestrial-language` (which stacks *graph construction from ordered word pairs* on top of topo sort) to a strictly-smaller first step: given the edges, decide if the DAG has a cycle. Either DFS with a `visiting`/`visited` state or Kahn's algorithm works — pick one and note which in the `impl:` commit message. After this lands, `extraterrestrial-language` becomes reasonable.
- **Start:** `npm run start-challenge -- course-dependency`

Suggested order: 1 → 2 → 3, one per session. If time is tight, doing just #1 this week restarts the streak, which is the single most valuable outcome.

## Actions taken

- **Calendar reminder:** skipped. The `zapier` MCP is not configured for this automation (would be required to search/create Google Calendar events). The `inactiveDays` threshold (3) is well exceeded (49 days), so a reminder *would* have been created — enable the Zapier Google Calendar action on the automation to unblock this.
- **Notion update:** skipped. The `notion` MCP is not configured for this automation, so the Challenge Log was not queried and no entry was written.
- **Persistent memory:** `runs.md` updated with this run; `gaps.md` left unchanged (no new evidence to invalidate any hypothesis).
- **Report:** committed to `automation/reports/coach-report-2026-09-07.md` on branch `cursor/practice-coach-report-88fd` and PR opened.

## Next steps

```
npm run start-challenge -- binary-tree-maximum-depth
```

After finishing, please log the attempt in Notion (or ask the coach to log it via Notion MCP once that integration is enabled on this automation).
