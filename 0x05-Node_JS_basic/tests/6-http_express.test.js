const request = require('supertest');
const app = require('./6-http_express');

test('responds with "Hello Holberton School!" for the root endpoint', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello Holberton School!');
});

test('responds with 404 for any other endpoint', async () => {
  const response = await request(app).get('/any_endpoint');
  expect(response.status).toBe(404);
});
