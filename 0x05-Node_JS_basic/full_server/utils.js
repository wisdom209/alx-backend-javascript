
const fs = require('fs');

const readDatabase = (path) => {
  const filePromise = new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        data = data.toString().split('\n');

        const allStudents = data.filter((v, i, a) => {
          return i !== 0 && v.length !== 0;
        });

        const csStudents = allStudents.filter(v => v.toString().endsWith('CS')).map(v => v.split(',')[0]);
        const sweStudents = allStudents.filter(v => v.toString().endsWith('SWE')).map(v => v.split(',')[0]);
        resolve({ CS: csStudents, SWE: sweStudents });
      }
    });
  });
  return filePromise;
};

module.exports = readDatabase;
