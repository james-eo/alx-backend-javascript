import createIteratorObject from '../100-createIteratorObject.js';
import iterateThroughObject from '../101-iterateThroughObject.js';

describe('iterateThroughObject', () => {
  it('should return a string with all employee names separated by " | "', () => {
    const report = {
      allEmployees: {
        engineering: ['Alice', 'Bob'],
        sales: ['Charlie', 'David'],
      },
    };
    const iterator = createIteratorObject(report);
    const result = iterateThroughObject(iterator);
    expect(result).toBe('Alice | Bob | Charlie | David');
  });
});
