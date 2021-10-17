import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //const headElement = screen.getByRole('heading', {level: 2});
  const headElement = screen.getByRole('heading', {level:1});
  
  expect(headElement).toBeInTheDocument();
});