process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  process.stdout.write(`Your name is: ${input}\n`);
  if (process.stdin.isTTY) {
    process.exit(0);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
