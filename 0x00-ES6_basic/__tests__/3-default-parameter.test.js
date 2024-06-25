import getSumOfHoods from '../3-default-parameter.js';

describe('getSumOfHoods', () => {
  it('should return the correct sum with default parameters', () => {
    expect(getSumOfHoods(10)).toBe(118);
  });

  it('should return the correct sum with provided parameters', () => {
    expect(getSumOfHoods(10, 20, 30)).toBe(60);
  });
});
