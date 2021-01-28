import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act, renderHook } from "@testing-library/react-hooks";
import { useUpdate } from './contexts/UpdateContext';


describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});

/*

describe("current page", () => {
  it("will be undefined", () => {
    const { currentView } = renderHook(useUpdate);
    
    expect(currentView).toBe('landing')
  });
});

*/