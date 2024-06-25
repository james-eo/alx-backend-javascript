import returnHowManyArguments from '../4-rest-parameter.js';

describe('returnHowManyArguments', () => {
  it('should return the correct number of arguments', () => {
    expect(returnHowManyArguments(1, 2, 3)).toBe(3);
    expect(returnHowManyArguments()).toBe(0);
  });
});
