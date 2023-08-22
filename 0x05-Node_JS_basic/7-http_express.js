const express = require('express');
const countStudents = require('./3-read_file_async.js');

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let dbName = process.argv[2];
  dbName ? dbName = process.argv[2] : dbName = '';
  countStudents(dbName).then(response => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    response = 'This is the list of our students\n' + response;
    res.end(response);
  }).catch(e => {
    const msg = `${e.message}`;
    res.end(msg);
  });
});
app.listen(1245, 'localhost');
module.exports = app;
