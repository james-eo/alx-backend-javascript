import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(students).sort()) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[2]);
      const majorStudents = students[major] || [];
      return response.status(200).send(`List: ${majorStudents.join(', ')}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
