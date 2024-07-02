import createInt8TypedArray from '../5-typed_arrays.js';

describe('createInt8TypedArray', () => {
  it('should create a typed array with the correct value at the specified position', () => {
    const result = createInt8TypedArray(10, 2, 89);
    expect(result.getInt8(2)).toBe(89);
  });

  it('should throw an error if position is outside range', () => {
    expect(() => createInt8TypedArray(5, 5, 89)).toThrow('Position outside range');
  });
});
