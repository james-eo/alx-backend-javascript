const { exec } = require('child_process');

test('handles user input and displays the expected output', (done) => {
  exec('node 1-stdin.js', (error, stdout, stderr) => {
    expect(stdout).toContain('Welcome to Holberton School, what is your name?');
    expect(stdout).toContain('Your name is: Bob');
    expect(stdout).toContain('This important software is now closing');
    done();
  }).stdin.write('Bob\n');
});

test('handles piped input and displays the expected output', (done) => {
  exec('echo "John" | node 1-stdin.js', (error, stdout, stderr) => {
    expect(stdout).toContain('Welcome to Holberton School, what is your name?');
    expect(stdout).toContain('Your name is: John');
    expect(stdout).toContain('This important software is now closing');
    done();
  });
});
