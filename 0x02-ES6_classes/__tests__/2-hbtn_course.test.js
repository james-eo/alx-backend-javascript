import HolbertonCourse from '../2-hbtn_course.js';

describe('HolbertonCourse', () => {
  test('should create an instance of HolbertonCourse with correct attributes', () => {
    const course = new HolbertonCourse('ES6', 1, ['Alice', 'Bob']);

    expect(course.name).toBe('ES6');
    expect(course.length).toBe(1);
    expect(course.students).toEqual(['Alice', 'Bob']);
  });

  test('should throw error for invalid name', () => {
    expect(() => new HolbertonCourse(123, 1, ['Alice', 'Bob'])).toThrow(TypeError);
  });

  test('should throw error for invalid length', () => {
    expect(() => new HolbertonCourse('ES6', 'one', ['Alice', 'Bob'])).toThrow(TypeError);
  });

  test('should throw error for invalid students', () => {
    expect(() => new HolbertonCourse('ES6', 1, 'Alice')).toThrow(TypeError);
    expect(() => new HolbertonCourse('ES6', 1, [123])).toThrow(TypeError);
  });
});
