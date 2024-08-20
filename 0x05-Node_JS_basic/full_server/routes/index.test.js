const request = require('supertest');
const app = require('./index');

test('routes the / endpoint to the AppController', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello Holberton School!');
});

test('routes the /students endpoint to the StudentsController', async () => {
  const response = await request(app).get('/students').set('database', 'database.csv');
  expect(response.status).toBe(200);
  expect(response.text).toContain('This is the list of our students');
  expect(response.text).toContain('Number of students: 10');
  expect(response.text).toContain('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
  expect(response.text).toContain('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
});
