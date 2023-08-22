const http = require('http');
const countStudents = require('./3-read_file_async.js');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const path = process.argv[2] ? process.argv[2] : '';
    countStudents(path).then((resp) => {
      const response = `This is the list of our students\n${resp}`;
      res.end(response);
    }).catch((e) => {
      const msg = e.message;
      res.end(msg);
    });
  }
});

app.listen(1245, 'localhost');

module.exports = app;
