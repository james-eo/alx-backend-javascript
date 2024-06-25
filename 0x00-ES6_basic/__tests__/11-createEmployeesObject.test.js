import createEmployeesObject from '../11-createEmployeesObject.js';

describe('createEmployeesObject', () => {
  it('should create an employees object with the correct structure', () => {
    const employees = createEmployeesObject('engineering', ['Alice', 'Bob']);
    expect(employees).toStrictEqual({ engineering: ['Alice', 'Bob'] });
  });
});
