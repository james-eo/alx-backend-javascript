import updateStudentGradeByCity from '../4-update_grade_by_city.js';
import getListStudents from '../0-get_list_students.js';

describe('updateStudentGradeByCity', () => {
    test('returns updated students with grades for a specific city', () => {
        const students = getListStudents();
        const newGrades = [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }];
        expect(updateStudentGradeByCity(students, 'San Francisco', newGrades)).toEqual([
            { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
            { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
        ]);
    });

    test('returns students with N/A grade if not present in newGrades', () => {
        const students = getListStudents();
        const newGrades = [{ studentId: 5, grade: 97 }];
        expect(updateStudentGradeByCity(students, 'San Francisco', newGrades)).toEqual([
            { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
            { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
        ]);
    });
});
