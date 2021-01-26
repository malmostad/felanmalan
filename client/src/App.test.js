import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});

function sum(x, y) {
  return x + y;
}

describe('sum', () => {
  test('testing the console', () => {
    expect(sum(2, 4)).toBe(6);
  });
});
