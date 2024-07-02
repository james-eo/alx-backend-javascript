import getListStudents from '../0-get_list_students.js';

describe('getListStudents', () => {
  const students = getListStudents();

  test('returns an array', () => {
    expect(Array.isArray(students)).toBe(true);
  });

  test('returns the correct number of students', () => {
    expect(students).toHaveLength(3);
  });

  test('each student has the correct properties', () => {
    students.forEach(student => {
      expect(student).toHaveProperty('id');
      expect(student).toHaveProperty('firstName');
      expect(student).toHaveProperty('location');
    });
  });

  test('students have the correct data', () => {
    expect(students).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
  });

  test('student IDs are numbers', () => {
    students.forEach(student => {
      expect(typeof student.id).toBe('number');
    });
  });

  test('student firstNames are strings', () => {
    students.forEach(student => {
      expect(typeof student.firstName).toBe('string');
    });
  });

  test('student locations are strings', () => {
    students.forEach(student => {
      expect(typeof student.location).toBe('string');
    });
  });
});
