# DSA Practice Coach (Cursor Automation)

Agent-driven DSA practice coaching that runs inside **Cursor Automations** — not npm scripts or GitHub Actions.

The coach gathers evidence from GitHub commits, solution code, tests, and your [Notion Challenge Log](https://app.notion.com/p/38fff9bcae34814bb5ecdba660efdc0b), then recommends challenges with reasoning and creates Google Calendar reminders when practice goes stale.

## Quick start

1. Complete [PREREQUISITES.md](PREREQUISITES.md) — connect dashboard GitHub, Notion, and Zapier Google Calendar MCPs
2. Copy config: `cp automation/coach-config.example.json automation/coach-config.json`
3. Add other repos to `projects` in coach-config if desired
4. Enable the **DSA Practice Coach** Cursor Automation (weekdays 9:00 IST)

## Manual use

In Cursor chat:

> Run DSA practice coach — recommend my next challenges

Or invoke the `dsa-practice-coach` skill directly.

## What the agent does

| Phase | Action |
|-------|--------|
| **A — Gather** | Notion log, GitHub commits/diffs, solution + test files |
| **B — Analyze** | Evidence-based gap analysis (not README tag heuristics) |
| **C — Recommend** | 3 challenges: 1 Easy, 1 Medium, 1 Hard |
| **D — Act** | Google Calendar reminder if inactive 3+ days (scheduled runs) |

Skill definition: [`.cursor/skills/dsa-practice-coach/SKILL.md`](../.cursor/skills/dsa-practice-coach/SKILL.md)

## Local challenge workflow (unchanged)

Git timestamps for timing — the agent reads these back from GitHub:

```bash
npm run start-challenge -- <slug>    # after reading problem
npm run done-challenge -- <slug>     # when tests pass
npm run times                        # local time report
```

After finishing, ask the agent to log the attempt in Notion, or log manually in the Challenge Log database.

## Config

`automation/coach-config.json`:

```json
{
  "projects": [
    { "name": "coding-challenges", "github": "sudhir4ev/coding-challenges", "branch": "main", "role": "dsa" },
    { "name": "my-app", "github": "sudhir4ev/my-app", "branch": "main", "role": "app" }
  ],
  "reminder": { "inactiveDays": 3 },
  "activityWindowDays": 30
}
```

## Cursor Automation

| Setting | Value |
|---------|-------|
| Name | DSA Practice Coach |
| Trigger | Cron weekdays 9:00 IST (`30 3 * * 1-5` UTC) |
| Repo | `sudhir4ev/coding-challenges` / `main` |
| MCP servers | `notion`, `github`, `zapier` |
| Instructions | Follow `dsa-practice-coach` skill all 4 phases |

See [PREREQUISITES.md](PREREQUISITES.md) before first run.
