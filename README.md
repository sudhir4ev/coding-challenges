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
- React (Vitest): `npm run test:ui-react`

## UI exercises

The `ui-react/` folder contains Vite + React exercises with Vitest for unit tests.

```bash
npm run dev --prefix ui-react/todo    # start dev server
npm run test --prefix ui-react/todo   # run Vitest
```

See `ui-react/README.md` for exercise details.

## Adding a challenge

1. Create a folder under `challenges/`, e.g. `challenges/your-challenge-name/`
2. Add `solution.js` (export your function(s))
3. Add `solution.test.js` (Jest tests)

Use `challenges/example-two-sum/` as a template.
