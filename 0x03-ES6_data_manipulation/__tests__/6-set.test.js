import setFromArray from '../6-set.js';

describe('setFromArray', () => {
  it('should create a Set from an array', () => {
    const result = setFromArray([12, 32, 15, 78, 98, 15]);
    expect(result).toBeInstanceOf(Set);
    expect(Array.from(result)).toEqual([12, 32, 15, 78, 98]);
  });

  it('should handle an empty array', () => {
    const result = setFromArray([]);
    expect(result).toBeInstanceOf(Set);
    expect(result.size).toBe(0);
  });
});
