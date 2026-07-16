Test workflow:

```
  npm test -- sql/                    # run all 5 (all red until you solve them)
  npm test -- sql/evooq-wealth/01     # single challenge
  sqlite3 sql/evooq-wealth/local.db   # query manually
  npm run sql:init-db                 # reset local.db after schema changes
```