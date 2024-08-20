const StudentsController = require('./StudentsController');
const readDatabase = require('../utils');

jest.mock('../utils', () => ({
  readDatabase: jest.fn(),
}));

test('getAllStudents returns the expected response when the database is available', async () => {
  readDatabase.mockResolvedValue({
    CS: ['Johann', 'Arielle', 'Jonathan', 'Emmanuel', 'Guillaume', 'Katie'],
    SWE: ['Guillaume', 'Joseph', 'Paul', 'Tommy'],
  });

  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  };

  await StudentsController.getAllStudents(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith(expect.stringContaining('This is the list of our students'));
  expect(res.send).toHaveBeenCalledWith(expect.stringContaining('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie'));
  expect(res.send).toHaveBeenCalledWith(expect.stringContaining('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy'));
});

test('getAllStudents returns a 500 error when the database is not available', async () => {
  readDatabase.mockRejectedValue(new Error('Cannot load the database'));

  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  };

  await StudentsController.getAllStudents(req, res);

  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.send).toHaveBeenCalledWith('Cannot load the database');
});
