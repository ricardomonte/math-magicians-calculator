import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

const myMockClick = jest.fn();

test('return content from Button matches snapshot', () => {
  const content = render(<Button name="8" onClick={myMockClick} />);
  expect(content.container).toMatchSnapshot();
  expect(screen.getByText('8')).toBeInTheDocument();
});
