# Todo App

Build a small React todo list that loads and mutates tasks through async mock APIs. The exercise focuses on component state, async data handling, and testing user interactions — not styling.

Skeleton code lives in `todo/src/`. `App.tsx` contains a static layout and inline requirements; `api.ts` provides the mock backend.

## Setup

From the repo root:

```bash
npm install --prefix ui-react
```

Or from `ui-react`:

```bash
npm install
```

## Running the app

From the repo root:

```bash
npm run dev:ui-react
```

Or from `ui-react/todo`:

```bash
npm run dev
```

## Requirements

Using the mock APIs in `api.ts`, implement the following in `App.tsx`:

1. **Add a todo** — Enter text and click "Add" to create a new item in the TODO list.
2. **Complete a todo** — Click the checkbox on a TODO item to mark it done. Move it to the "Done" list.
3. **Uncomplete a todo** — Click the checkbox on a Done item to move it back to the TODO list.
4. **Remove a todo** — Click the X button to delete an item from either list.

Additional notes:

- Handle async operations correctly (loading, errors, and UI updates after API calls resolve).
- Do not spend time on visual polish; a clear layout is enough.


## Tests

A starter test in `App.test.tsx` verifies the app renders. Extend it to cover the use cases above.

From the repo root:

```bash
npm run test:ui-react
```

Or from `ui-react/todo`:

```bash
npm test
```

Suggested cases:

- Renders TODO and Done sections with initial data from `getTasks`.
- Adds a new todo and shows it in the TODO list.
- Completing a todo moves it to Done; uncompleting moves it back.
- Removing a todo deletes it from the list.

Use `@testing-library/react` and `userEvent` for interactions. Mock `api.ts` if you want tests to run without delays.
