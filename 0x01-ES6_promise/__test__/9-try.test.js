import guardrail from '../9-try.js';
import divideFunction from '../8-try.js';

test('guardrail processes math function correctly', () => {
  const result = guardrail(() => divideFunction(10, 2));
  expect(result).toStrictEqual([5, 'Guardrail was processed']);
});

test('guardrail handles error correctly', () => {
  const result = guardrail(() => divideFunction(10, 0));
  expect(result).toStrictEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
});
