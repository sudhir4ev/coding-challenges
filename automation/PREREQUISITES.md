# MCP prerequisites for DSA Practice Coach

Complete these before the Cursor Automation will work end-to-end.

## 1. Dashboard GitHub MCP (required)

The local `user-github` MCP is **not** automation-eligible. Connect GitHub via the Cursor dashboard instead.

1. Go to [cursor.com](https://cursor.com) → **Settings** → **MCP**
2. Add/connect **GitHub** (dashboard-backed server)
3. Confirm the server name shown is exactly **`github`** (used in automation MCP config)
4. Optionally disable or remove the broken local `user-github` MCP in Cursor Settings → Tools & MCP to avoid confusion

The coach agent uses this to read commits, changed files, and diffs across repos listed in `automation/coach-config.json`.

## 2. Notion MCP (required)

1. Ensure the **notion** plugin MCP is connected in Cursor
2. Authenticate if prompted (`mcp_auth`)
3. Share the [DSA Practice Tracker](https://app.notion.com/p/38fff9bcae34814bb5ecdba660efdc0b) with your Notion integration
4. Challenge Log data source: `collection://fc3065b4-8e18-4022-bf58-da19c25d5239`

## 3. Zapier MCP — Google Calendar (required for reminders)

1. Open [mcp.zapier.com](https://mcp.zapier.com) and connect Google Calendar
2. Enable these actions on your Zapier MCP server:
   - **Google Calendar → Find Events** (read)
   - **Google Calendar → Create Detailed Event** (write)
3. Confirm the server name is **`zapier`** in Cursor MCP settings

The agent creates a calendar event only when DSA practice has been inactive for `inactiveDays` (default 3).

## 4. Copy coach config

```bash
cp automation/coach-config.example.json automation/coach-config.json
```

Add your other GitHub repos under `projects` if you want cross-project activity analysis.

## Verification checklist

| Integration | Server name | Status |
|-------------|-------------|--------|
| GitHub (dashboard) | `github` | ☐ Connected |
| Notion | `notion` | ☐ Connected + DB shared |
| Zapier + Google Calendar | `zapier` | ☐ Find + Create events enabled |

After all three are connected, create or enable the **DSA Practice Coach** Cursor Automation (see `automation/README.md`).
