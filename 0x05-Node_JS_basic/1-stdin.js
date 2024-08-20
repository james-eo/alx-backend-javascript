/* Display welcome message
 * Listen for user input
 * Display the user's name
 * Close stdin to finish the program
 *
 * Handle when the program is closing
 * Handle Ctrl+C event (SIGINT)
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

process.stdin.on('SIGINT', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
