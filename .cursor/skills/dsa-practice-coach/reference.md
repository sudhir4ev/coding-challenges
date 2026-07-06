# DSA Practice Coach — reference

Read this when executing the `dsa-practice-coach` skill. Config lives in `automation/coach-config.json` (copy from `coach-config.example.json`).

## Notion Challenge Log

| Field | Type | Notes |
|-------|------|-------|
| Challenge | title | Problem name |
| Date | date | Attempt date |
| Difficulty | select | Easy, Medium, Hard |
| Topics | multi_select | Arrays, Trees, Graphs, etc. |
| Time Taken (mins) | number | |
| Outcome | select | Solved Independently, Solved with Hints, Partial, Could Not Solve, TLE |
| Approach Quality | select | Excellent, Good, Average, Poor |
| First Instinct Correct? | checkbox | |
| Optimal? | checkbox | Time/space optimal |
| Got Stuck? | checkbox | |
| Where Stuck | text | |
| Key Insight Missed | text | |
| Notes | text | |
| Source | select | LeetCode, Custom, Other, etc. |
| Revisit | checkbox | |

**Data source ID:** `fc3065b4-8e18-4022-bf58-da19c25d5239`  
**Query via:** Notion MCP `notion-fetch` with `collection://fc3065b4-8e18-4022-bf58-da19c25d5239` or `notion-query-data-sources`

**Tracker page:** https://app.notion.com/p/38fff9bcae34814bb5ecdba660efdc0b

## Coach config fields

```json
{
  "notion": { "databaseId", "dataSourceUrl", "trackerPageUrl" },
  "reminder": { "inactiveDays", "eventDurationMinutes", "skipIfEventExistsWithinDays", "calendarEventTitle" },
  "recommendation": { "count", "difficultyMix" },
  "projects": [{ "name", "github", "branch", "role" }],
  "activityWindowDays": 30
}
```

- `role: "dsa"` — primary practice repo; analyze solutions deeply
- `role: "app"` — classify feature/bugfix/test/infra activity only

## Challenge repo layout

```
algo/<slug>/README.md     — problem statement
algo/<slug>/*.ts|*.js     — solution
algo/<slug>/*.test.*      — tests
frontend/<slug>/          — frontend exercises
ui-react/                 — React exercises
```

**Git timing convention:** `start: <slug>` (empty commit) → `impl: <slug>` (solution). Elapsed time = difference.

## MCP servers (automation-eligible)

| Server name | Use |
|-------------|-----|
| `github` | Commits, files, diffs across configured repos |
| `notion` | Query/write Challenge Log |
| `zapier` | Google Calendar find/create for reminders |

## Output template

```markdown
# DSA Practice Coach Report — {date}

## Evidence summary
- Last DSA practice: {date} ({N} days ago)
- Activity mix (30d): ...
- Notion highlights: ...

## Gap analysis
1. ...
2. ...

## Recommendations

### 1. [Easy] {title}
- **Path:** algo/{slug}
- **Why:** {evidence-backed reason}
- **Start:** `npm run start-challenge -- {slug}`

### 2. [Medium] ...
### 3. [Hard] ...

## Actions taken
- Calendar: {created | skipped — reason}
- Notion: {updated | none}
```
