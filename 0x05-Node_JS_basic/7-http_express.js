const express = require('express');
const countStudents = require('./3-read_file_async.js');

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbName = process.argv[2];
  countStudents(dbName).then((response) => {
    const outputResponse = `This is the list of our students\n${response}`;
    res.end(outputResponse);
  }).catch(() => {
    res.end('This is the list of our students\nCannot load the database');
  });
});
app.listen(1245, 'localhost');
module.exports = app;
