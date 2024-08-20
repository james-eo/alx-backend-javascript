import express from 'express';
import { readFile } from 'fs/promises';
import { parse } from 'csv-parse';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const filePath = process.argv[2];
    const data = await readFile(filePath, 'utf-8');
    let output = 'This is the list of our students\n';
    const records = [];

    parse(data, {
      columns: true,
      skip_empty_lines: true,
    }).on('data', (record) => records.push(record))
      .on('end', () => {
        const fields = {};

        records.forEach((record) => {
          const { firstname, field } = record;
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }

        res.status(200).send(output);
      });
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

export default app;
