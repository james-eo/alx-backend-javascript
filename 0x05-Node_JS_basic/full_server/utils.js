import fs from 'fs';

export const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const students = data.trim().split('\n').reduce((acc, line) => {
        const [field, firstname] = line.split(',');
        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(firstname);
        return acc;
      }, {});
      resolve(students);
    }
  });
});
