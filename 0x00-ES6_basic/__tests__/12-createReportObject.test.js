import createReportObject from '../12-createReportObject.js';

describe('createReportObject', () => {
  it('should create a report object with all employees and the correct number of departments', () => {
    const employeesList = {
      engineering: ['Alice', 'Bob'],
      sales: ['Charlie', 'David'],
    };
    const report = createReportObject(employeesList);
    expect(report.allEmployees).toStrictEqual(employeesList);
    expect(report.getNumberOfDepartments()).toBe(2);
  });
});
