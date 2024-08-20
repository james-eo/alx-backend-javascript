import http from 'http';
import { readFile } from 'fs/promises';
import { parse } from 'csv-parse';

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url.startsWith('/students')) {
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

          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(output);
        });
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Cannot load the database');
    }
  }
});

app.listen(1245);

export default app;
