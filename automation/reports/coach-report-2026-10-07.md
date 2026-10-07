# DSA Practice Coach Report — 2026-10-07

> Tone escalation: 79 days without a solved problem. This report trims the plan down to a single 15-minute re-entry problem and keeps the medium/hard around as pointers only. Finish the easy and let me rotate the next two.

## Evidence summary

- **Last DSA `impl:` commit on `main`:** `5f26510 impl: bit-counting` on **2026-07-20** — **79 days ago**.
- **Activity mix (last 30d, 2026-09-07 → 2026-10-07, `main`):** **0 commits.** Second cold month in a row (0 commits in the prior 30d window too).
- **Prior-run recommendations status:** none attempted. All three carry-overs are still `throw 'Not implemented!'` stubs:
  - `algo/binary-tree-maximum-depth/binary-tree-maximum-depth.ts:12`
  - `algo/intervals-combine-overlapping/intervals-combine-overlapping.ts:6`
  - `algo/course-dependency/course-dependency.ts:10`
- **Notion log:** Notion MCP not available in this automation (same as prior two runs); no new entries ingested. If you've been logging offline, paste the entries into the next manual coach run and I'll fold them in.

## Gap analysis (unchanged — need evidence that any of these have been exercised)

1. **BFS / iterative tree traversal — missing.** Every tree solution on `main` uses recursive DFS (`binary-tree-equal`, `binary-tree-subtree`, `bst-*`). `binary-tree-level-order-traversal` and `binary-tree-maximum-depth` are stubs.
2. **Intervals — zero exposure.** All of `intervals-*` + `disjoint-intervals` are stubs. Sort-then-sweep pattern never written.
3. **Graphs / topological sort — zero exposure.** `graph-*`, `course-dependency`, `extraterrestrial-language` all stubs.
4. **Backtracking — zero exposure.** `combinations-target-sum`, `grid-find-word(s)` stubs.
5. **Sliding window invariant — shaky (unresolved from 2026-07-06).** `longest-non-repeating-substring` still rebuilds the hashmap on collision instead of advancing `start` to `seen[char] + 1`.

### Strengths still on record

- 1-D DP (`coin-change`, `staircase-climbing-combinations`, `bit-counting`) — clean and optimal.
- BST invariants (`validate`, `kth-smallest`, `lowest-common-ancestor`) — correct and idiomatic.
- Scratchpad-first framing habit visible in `bit-counting` and iterative refactor commits on `bst-validate`.

## Recommendations

> **Do #1 only this week. 15 minutes, iterative, done.** The medium and hard are listed so you know what unlocks next — not as a to-do list.

### 1. [Easy — streak-breaker] Binary Tree Maximum Depth

- **Path:** `algo/binary-tree-maximum-depth/`
- **Why:** Lowest-friction way back in. Problem itself is trivial; the point is to **solve it iteratively with a BFS queue** so you finally write a non-recursive tree traversal and chip at gap #1. Recursive one-liner is forbidden for this attempt.
- **Constraint for the attempt:** 15-minute cap, BFS with an explicit queue, no recursion.
- **Start:** `npm run start-challenge -- binary-tree-maximum-depth`

### 2. [Medium — next up, after #1 lands] Merge Overlapping Intervals

- **Path:** `algo/intervals-combine-overlapping/`
- **Why:** Still the highest-leverage medium — carry-over for the third run in a row. Sort-by-start then sweep is the pattern that unlocks the other five `intervals-*` stubs and `disjoint-intervals`.
- **Start:** `npm run start-challenge -- intervals-combine-overlapping`

### 3. [Hard — pointer only] Course Dependency

- **Path:** `algo/course-dependency/`
- **Why:** Smallest viable first step into graphs — cycle detection / topological sort over an already-formed edge list, no graph-construction layer. Carry-over from 2026-09-07.
- **Start:** `npm run start-challenge -- course-dependency`

## Actions taken

- **Calendar reminder:** skipped — no Zapier MCP available in this automation environment. Threshold (3d inactive) is wildly exceeded (79d); if the Zapier MCP gets wired up, this run would have created a `🧠 DSA Practice Session` event for the next weekday 09:00.
- **Notion log update:** skipped — no Notion MCP available. No new Challenge Log entries ingested.
- **PR:** opened by this automation with this report.
- **Memory:** `runs.md` updated with this run's outcome and carry-over state.

## Next step

```
npm run start-challenge -- binary-tree-maximum-depth
```

Timebox it at 15 minutes, write it iteratively with a queue, commit `start:` and `impl:` as usual. Then ask me to run the coach again — I'll congratulate you, drop it from the carry-over list, and rotate in a new easy.
