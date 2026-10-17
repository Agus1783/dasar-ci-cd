import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('menampilkan judul aplikasi', () => {
  render(<App />);

  expect(
    screen.getByText('Belajar CI/CD'),
  ).toBeInTheDocument();
});
