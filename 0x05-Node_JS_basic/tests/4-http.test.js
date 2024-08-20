const request = require('supertest');
const app = require('./4-http');

test('responds with "Hello Holberton School!" for any endpoint', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello Holberton School!');
});

test('responds with "Hello Holberton School!" for any other endpoint', async () => {
  const response = await request(app).get('/any_endpoint');
  expect(response.text).toBe('Hello Holberton School!');
});
