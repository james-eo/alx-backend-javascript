import getStudentsByLocation from '../2-get_students_by_loc.js';
import getListStudents from '../0-get_list_students.js';

describe('getStudentsByLocation', () => {
    test('returns an array of students in a specific city', () => {
        const students = getListStudents();
        expect(getStudentsByLocation(students, 'San Francisco')).toEqual([
            { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
            { id: 5, firstName: 'Serena', location: 'San Francisco' }
        ]);
    });
});
