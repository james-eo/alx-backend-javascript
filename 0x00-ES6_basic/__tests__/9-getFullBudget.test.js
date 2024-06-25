import getFullBudgetObject from '../9-getFullBudget.js';

describe('getFullBudgetObject', () => {
  it('should return the correct full budget object with additional methods', () => {
    const fullBudget = getFullBudgetObject(100, 200, 300);
    expect(fullBudget.income).toBe(100);
    expect(fullBudget.gdp).toBe(200);
    expect(fullBudget.capita).toBe(300);
    expect(fullBudget.getIncomeInDollars(100)).toBe('$100');
    expect(fullBudget.getIncomeInEuros(100)).toBe('100 euros');
  });
});
