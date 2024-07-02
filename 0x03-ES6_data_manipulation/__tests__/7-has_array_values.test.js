import hasValuesFromArray from '../7-has_array_values.js';

describe('hasValuesFromArray', () => {
  const testSet = new Set([1, 2, 3, 4, 5]);

  it('should return true if all array elements are in the set', () => {
    expect(hasValuesFromArray(testSet, [1])).toBe(true);
    expect(hasValuesFromArray(testSet, [1, 2, 3])).toBe(true);
  });

  it('should return false if any array element is not in the set', () => {
    expect(hasValuesFromArray(testSet, [10])).toBe(false);
    expect(hasValuesFromArray(testSet, [1, 10])).toBe(false);
  });
});
