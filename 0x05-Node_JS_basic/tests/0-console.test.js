const displayMessage = require('./0-console');

test('displays the given message', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  displayMessage('Hello NodeJS!');
  expect(consoleSpy).toHaveBeenCalledWith('Hello NodeJS!');
  consoleSpy.mockRestore();
});
