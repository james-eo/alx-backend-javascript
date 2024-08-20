import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.app.get('databaseFile'));
      let response = 'This is the list of our students\n';
      Object.keys(students)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
      }
      const students = await readDatabase(req.app.get('databaseFile'));
      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
