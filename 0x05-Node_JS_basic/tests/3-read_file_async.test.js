const countStudents = require('./3-read_file_async');

test('logs the correct number of students and their names by field when the database is available', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
  await countStudents('database.csv');
  expect(consoleSpy).toHaveBeenCalledWith('Number of students: 10');
  expect(consoleSpy).toHaveBeenCalledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
  expect(consoleSpy).toHaveBeenCalledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
  consoleSpy.mockRestore();
});

test('throws an error when the database is not available', async () => {
  await expect(countStudents('nope.csv')).rejects.toThrow('Cannot load the database');
});
