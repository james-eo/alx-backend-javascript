const AppController = require('../AppController');

test('getHomepage returns the expected response', () => {
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  };

  AppController.getHomepage(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith('Hello Holberton School!');
});
