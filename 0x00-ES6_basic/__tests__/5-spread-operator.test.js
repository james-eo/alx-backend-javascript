import concatArrays from '../5-spread-operator.js';

describe('concatArrays', () => {
  it('should concatenate arrays and string correctly', () => {
    expect(concatArrays([1, 2], [3, 4], 'hello')).toStrictEqual([1, 2, 3, 4, 'h', 'e', 'l', 'l', 'o']);
  });
});
