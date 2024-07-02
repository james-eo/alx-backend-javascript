import cleanSet from '../8-clean_set.js';

describe('cleanSet', () => {
  it('should return a string of set values that start with startString', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, 'bon')).toBe('jovi-aparte-appetit');
  });

  it('should return an empty string if startString is empty', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, '')).toBe('');
  });

  it('should handle non-string values in the set', () => {
    const set = new Set(['bonjovi', 'bonaparte', 123, 'bonappetit', 'banana']);
    expect(cleanSet(set, 'bon')).toBe('jovi-aparte-appetit');
  });
});
