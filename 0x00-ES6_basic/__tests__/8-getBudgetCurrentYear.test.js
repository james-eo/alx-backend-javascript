import getBudgetForCurrentYear from '../8-getBudgetCurrentYear.js';

describe('getBudgetForCurrentYear', () => {
  it('should return the correct budget object for the current year', () => {
    const currentYear = new Date().getFullYear();
    const budget = getBudgetForCurrentYear(100, 200, 300);
    const expectedBudget = {
      [`income-${currentYear}`]: 100,
      [`gdp-${currentYear}`]: 200,
      [`capita-${currentYear}`]: 300,
    };
    expect(budget).toStrictEqual(expectedBudget);
  });
});
