import React from 'react';
import { render, screen } from '@testing-library/react';
import { Body } from './Body';

it('renders welcome message', () => {
  render(<Body />);
  expect(screen.getByText('Type in to see the results')).toBeInTheDocument();
});
