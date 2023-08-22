const http = require('http');
const countStudents = require('./3-read_file_async.js');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const path = process.argv[2];
    countStudents(path).then((resp) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      const response = `This is the list of our students\n${resp}`;
      res.end(response);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(1245, 'localhost');

module.exports = app;
