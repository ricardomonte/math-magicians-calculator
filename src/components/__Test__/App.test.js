import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('return content from Home matches snapshot', () => {
  const content = render(<App />);
  expect(content.container).toMatchSnapshot();
  expect(screen.getByText(/Let´s do some math/i)).toBeInTheDocument();
});
