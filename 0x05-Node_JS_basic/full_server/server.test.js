const request = require('supertest');
const app = require('./server');

test('the server listens on port 1245', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello Holberton School!');
});
