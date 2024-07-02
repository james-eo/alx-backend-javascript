import getStudentIdsSum from '../3-get_ids_sum.js';
import getListStudents from '../0-get_list_students.js';

describe('getStudentIdsSum', () => {
  it('should return the sum of all student ids', () => {
    const students = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 5, name: 'Bob' }
    ];
    expect(getStudentIdsSum(students)).toBe(8);
  });

  it('should return 0 for an empty array', () => {
    expect(getStudentIdsSum([])).toBe(0);
  });
});
