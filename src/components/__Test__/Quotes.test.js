import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Quotes from '../Quotes';

test('return content from Home matches snapshot', () => {
  const content = render(<Quotes />);
  expect(content.container).toMatchSnapshot();
  expect(screen.getByText('-Albert Einstein-')).toBeInTheDocument();
});
