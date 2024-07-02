import getListStudentIds from '../1-get_list_student_ids.js';
import getListStudents from '../0-get_list_students.js';

describe('getListStudentIds', () => {
    test('returns an empty array if the argument is not an array', () => {
        expect(getListStudentIds("hello")).toEqual([]);
    });

    test('returns an array of ids from the student list', () => {
        const students = getListStudents();
        expect(getListStudentIds(students)).toEqual([1, 2, 5]);
    });
});
