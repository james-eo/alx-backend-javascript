import divideFunction from '../8-try.js';

test('divideFunction divides correctly', () => {
  expect(divideFunction(10, 2)).toBe(5);
});

test('divideFunction throws error on division by zero', () => {
  expect(() => divideFunction(10, 0)).toThrow('cannot divide by 0');
});
