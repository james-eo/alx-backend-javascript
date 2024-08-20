const request = require('supertest');
const app = require('./7-http_express');

test('responds with "Hello Holberton School!" for the root endpoint', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello Holberton School!');
});

test('responds with the list of students for the /students endpoint', async () => {
  const response = await request(app).get('/students').set('database', 'database.csv');
  expect(response.text).toContain('This is the list of our students');
  expect(response.text).toContain('Number of students: 10');
  expect(response.text).toContain('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
  expect(response.text).toContain('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
});
