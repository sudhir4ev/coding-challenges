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

## Adding a challenge

1. Create a folder under `challenges/`, e.g. `challenges/your-challenge-name/`
2. Add `solution.js` (export your function(s))
3. Add `solution.test.js` (Jest tests)

Use `challenges/example-two-sum/` as a template.
