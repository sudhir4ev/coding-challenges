# Interview Prep – Coding Exercises

Node project for practicing coding challenges with Jest.

## Setup

```bash
npm install
```

## Running tests

- All tests: `npm test`
- Watch mode: `npm run test:watch`
- Single challenge: `npm test -- challenges/example-two-sum`
- SQL challenges only: `npm test -- sql/`
- React (Vitest): `npm run test:ui-react`

## UI exercises

The `ui-react/` folder contains Vite + React exercises with Vitest for unit tests.

```bash
npm run dev --prefix ui-react/todo    # start dev server
npm run test --prefix ui-react/todo   # run Vitest
```

See `ui-react/README.md` for exercise details.

## Challenges

### algo

- [x] [Two Sum](algo/example-two-sum/README.md)
- [x] [Maximum Sum in Contiguous Array](algo/array-maximum-sum-contiguous/README.md)
- [x] [End of Array Reachable](algo/array-reachable-end/README.md)
- [x] [Find Element in Rotated Array](algo/array-rotated-find/README.md)
- [x] [Smallest Element in Rotated Sorted Array](algo/array-smallest-in-rotated/README.md)
- [x] [Binary Search Tree Kth Smallest Element](algo/binary-search-tree-kth-smallest/README.md)
- [x] [Blacklisted IPs](algo/blacklisted-ips/README.md)
- [x] [Most Common Elements](algo/array-most-common-elements/README.md) — solution not optimal (used sort O(n log n); required O(n) bucket sort)
- [x] [128. Longest Consecutive Sequence](algo/128-longest-consecutive-sequence/README.md)
- [x] [Array Product Excluding Current](algo/array-product-excluding-current/README.md)
- [ ] [Binary Search Tree Lowest Common Ancestor](algo/binary-search-tree-lowest-common-ancestor/README.md) — scaffolded, not yet attempted
- [ ] [Validate Binary Search Tree](algo/binary-search-tree-validate/README.md) — scaffolded, not yet attempted
- [ ] [Staircase Climbing Combinations](algo/staircase-climbing-combinations/README.md) — scaffolded, not yet attempted
- [ ] [Neighborhood Theft](algo/neighborhood-theft/README.md) — scaffolded, not yet attempted
- [x] [Minimum Coins for Change](algo/coin-change/README.md)
- [ ] [Count Islands in a Grid](algo/grid-count-islands/README.md) — scaffolded, not yet attempted
- [ ] [Maximum Water Between Walls](algo/maximum-water-between-walls/README.md) — scaffolded, not yet attempted
- [ ] [Longest Non-repeating Substring](algo/longest-non-repeating-substring/README.md) — scaffolded, not yet attempted
- [ ] [Binary Tree Equal](algo/binary-tree-equal/README.md) — scaffolded, not yet attempted
- [ ] [Flip Binary Tree](algo/binary-tree-flip/README.md) — scaffolded, not yet attempted
- [ ] [Binary Tree Level Order Traversal](algo/binary-tree-level-order-traversal/README.md) — scaffolded, not yet attempted
- [ ] [Binary Tree Maximum Depth](algo/binary-tree-maximum-depth/README.md) — scaffolded, not yet attempted
- [ ] [Binary Tree Maximum Total Path](algo/binary-tree-maximum-total-path/README.md) — scaffolded, not yet attempted
- [ ] [Binary Tree Rebuilding from Preorder and Inorder Traversals](algo/binary-tree-rebuilding-from-traversals/README.md) — scaffolded, not yet attempted
- [ ] [Binary Tree Serialization and Deserialization](algo/binary-tree-serialization-deserialization/README.md) — scaffolded, not yet attempted
- [ ] [Binary Tree Subtree](algo/binary-tree-subtree/README.md) — scaffolded, not yet attempted
- [ ] [Bit Counting](algo/bit-counting/README.md) — scaffolded, not yet attempted
- [ ] [Bit Reversal](algo/bit-reversal/README.md) — scaffolded, not yet attempted
- [ ] [Combinations for Target Sum](algo/combinations-target-sum/README.md) — scaffolded, not yet attempted
- [ ] [Course Dependency](algo/course-dependency/README.md) — scaffolded, not yet attempted
- [ ] [Graph Clone](algo/graph-clone/README.md) — scaffolded, not yet attempted
- [ ] [Graph Count Connected Components](algo/graph-count-connected-components/README.md) — scaffolded, not yet attempted
- [ ] [Is the Graph a Tree](algo/graph-is-tree/README.md) — scaffolded, not yet attempted
- [ ] [Extraterrestrial Language](algo/extraterrestrial-language/README.md) — scaffolded, not yet attempted
- [ ] [Disjoint Intervals](algo/disjoint-intervals/README.md) — scaffolded, not yet attempted
- [ ] [Distinct Paths in Grid](algo/grid-distinct-paths/README.md) — scaffolded, not yet attempted
- [ ] [Find Word in Grid](algo/grid-find-word/README.md) — scaffolded, not yet attempted
- [ ] [Find Words in Grid](algo/grid-find-words/README.md) — scaffolded, not yet attempted
- [ ] [Merge Overlapping Intervals](algo/intervals-combine-overlapping/README.md) — scaffolded, not yet attempted
- [ ] [Meeting Calendar](algo/intervals-meeting-calendar/README.md) — scaffolded, not yet attempted
- [ ] [Merge New Interval](algo/intervals-merge-new/README.md) — scaffolded, not yet attempted
- [ ] [Minimum Meeting Rooms Needed](algo/intervals-minimum-meeting-rooms/README.md) — scaffolded, not yet attempted


### sql

Uses Node 22's built-in `node:sqlite` — no extra dependencies.

Each challenge has a `.sql` file (write your query here) and a `.test.js` harness that runs it against a seeded in-memory SQLite database.

**Run a single challenge:**
```bash
npm test -- sql/evooq-wealth/01
```

**Manual querying (persistent local DB):**
```bash
npm run sql:init-db          # creates sql/evooq-wealth/local.db
sqlite3 sql/evooq-wealth/local.db
```

#### evooq-wealth — Wealth Platform Schema (L2 Support prep)

Schema: `clients → portfolios → holdings + transactions`, `model_portfolios`, `eod_batch_log`

- [ ] [01 Drift Comparison](sql/evooq-wealth/01-drift-comparison.sql) — actual vs target allocation, HAVING on computed %, window filter to latest val_date
- [ ] [02 RM AUM Rollup](sql/evooq-wealth/02-rm-rollup.sql) — multi-table aggregation, must use latest snapshot to avoid double-counting
- [ ] [03 Notify Impacted Portfolios](sql/evooq-wealth/03-notify-impacted.sql) — find all portfolios + RMs affected by a model portfolio change
- [ ] [04 Latest Holdings per Portfolio](sql/evooq-wealth/04-window-latest-per-group.sql) — ROW_NUMBER() window function, latest-per-group pattern
- [ ] [05 Failed EOD Jobs (Most Recent Batch)](sql/evooq-wealth/05-anomaly-detection.sql) — derive MAX(batch_date) dynamically, filter to latest batch only

### frontend

- [x] [Classnames](frontend/classnames/README.md)
- [x] [Data Merging](frontend/data-merging/README.md)
- [x] [Deep Clone](frontend/deep-clone/README.md)
- [x] [Deep Equal](frontend/deep-equal/README.md)
- [x] [Deep Omit](frontend/deep-omit/README.md)
- [x] [Event Emitter](frontend/event-emitter/README.md)
- [x] [Flatten](frontend/flatten/README.md)
- [x] [getElementsByStyle](frontend/getElementsByStyle/README.md)
- [x] [Map Async Limit](frontend/map-async-limit/README.md)
- [x] [Memoize](frontend/memoize/README.md)
- [x] [Promise.all](frontend/promise-all/README.md)
- [x] [Promise.any](frontend/promise-any/README.md)
- [x] [Promisify](frontend/promisify/README.md)
- [x] [Squash Object](frontend/squash-object/)
- [x] [Throttle](frontend/throttle/README.md)

### ui-react

- [ ] [Todo App](ui-react/README.md)

## Time tracking

Each challenge is timed using git commit timestamps.

**Workflow:**

```bash
# 1. When you're ready to start solving (after reading the problem):
npm run start-challenge -- <challenge-name>

# 2. Solve the problem, run tests until passing.

# 3. When done — stages your changes and commits with elapsed time:
npm run done-challenge -- <challenge-name>

# 4. View time report across all challenges:
npm run times
```

**Convention:** `start:` commits are empty timestamp markers. `impl:` commits contain the actual solution. Time is calculated as the diff between the two.

> Note: always run `start-challenge` *after* reading the problem and *before* writing any code. This gives an accurate measure of pure solving time.

## Practice automation (Cursor Agent)

The **DSA Practice Coach** runs as a Cursor Automation and agent skill — not npm scripts.

- Skill: `.cursor/skills/dsa-practice-coach/SKILL.md`
- Setup: [automation/PREREQUISITES.md](automation/PREREQUISITES.md)
- Config: `cp automation/coach-config.example.json automation/coach-config.json`

In chat: *"Run DSA practice coach"* for evidence-based recommendations (Easy/Medium/Hard).

The agent reads GitHub commits, your solution code, and Notion performance logs. Scheduled runs also create Google Calendar reminders when practice goes stale.

Tracker: [DSA Practice Tracker on Notion](https://app.notion.com/p/38fff9bcae34814bb5ecdba660efdc0b)

## Adding a challenge

1. Create a folder under `algo/` or `frontend/`, e.g. `algo/your-challenge-name/`
2. Add a `README.md` with the problem statement (optional difficulty/time tags on line 3, e.g. `` `#Medium` `` `` `#45mins` `` — no algorithm/topic tags)
3. Add your solution file and test file
4. Use `algo/example-two-sum/` as a template.
