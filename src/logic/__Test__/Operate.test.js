import Operate from '../operate';

test('return the sum of two numbers', () => {
  expect(Operate('1', '2', '+')).toBe('3');
});

test('return the subtraction of two numbers', () => {
  expect(Operate('1', '2', '-')).toBe('-1');
});

test('return the multiplication of two numbers', () => {
  expect(Operate('1', '2', 'X')).toBe('2');
});

test('return the division of two numbers', () => {
  expect(Operate('1', '2', '÷')).toBe('0.5');
});

test('return the percentage of two numbers', () => {
  expect(Operate('1', '2', '%')).toBe('0.02');
});
