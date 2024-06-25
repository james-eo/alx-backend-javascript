import appendToEachArrayValue from '../10-loops.js';

describe('appendToEachArrayValue', () => {
  it('should append a string to each array value', () => {
    expect(appendToEachArrayValue(['a', 'b', 'c'], 'pre-')).toStrictEqual(['pre-a', 'pre-b', 'pre-c']);
  });
});
