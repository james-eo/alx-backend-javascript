const countStudents = require('./2-read_file');

test('logs the correct number of students and their names by field when the database is available', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  countStudents('database.csv');
  expect(consoleSpy).toHaveBeenCalledWith('Number of students: 10');
  expect(consoleSpy).toHaveBeenCalledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
  expect(consoleSpy).toHaveBeenCalledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
  consoleSpy.mockRestore();
});

test('throws an error when the database is not available', () => {
  expect(() => countStudents('nope.csv')).toThrow('Cannot load the database');
});
