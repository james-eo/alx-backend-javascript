const request = require('supertest');
const app = require('../full_server/server');

describe('Task 8: Organize a Complex HTTP Server using Express', () => {
  it('should return "Hello Holberton School!" with status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello Holberton School!');
  });

  it('should return the list of students', async () => {
    const response = await request(app).get('/students');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('This is the list of our students');
  });

  it('should return the list of students filtered by major', async () => {
    const response = await request(app).get('/students/CS');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('List: Johann, Arielle, Jonathan');
  });

  it('should return a 500 status if the file does not exist', async () => {
    const response = await request(app).get('/students?file=nonexistent_file.csv');
    expect(response.statusCode).toBe(500);
    expect(response.text).toBe('Cannot load the database');
  });

  it('should return a 500 status if the major is not CS or SWE', async () => {
    const response = await request(app).get('/students/Math');
    expect(response.statusCode).toBe(500);
    expect(response.text).toBe('Major parameter must be CS or SWE');
  });
});
