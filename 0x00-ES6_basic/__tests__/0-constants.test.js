import { taskFirst, getLast, taskNext } from '../0-constants.js';

describe('taskFirst', () => {
  it('should return the correct string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });
});

describe('getLast', () => {
  it('should return the correct string', () => {
    expect(getLast()).toBe(' is okay');
  });
});

describe('taskNext', () => {
  it('should return the correct combination', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
