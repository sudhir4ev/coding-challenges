import '@testing-library/jest-dom/vitest';

import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'TODO' })).toBeInTheDocument();
});
