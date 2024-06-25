import createIteratorObject from '../100-createIteratorObject.js';

describe('createIteratorObject', () => {
  it('should iterate through all employees in the report', () => {
    const report = {
      allEmployees: {
        engineering: ['Alice', 'Bob'],
        sales: ['Charlie', 'David'],
      },
    };
    const iterator = createIteratorObject(report);
    const employees = [...iterator];
    expect(employees).toStrictEqual(['Alice', 'Bob', 'Charlie', 'David']);
  });
});
