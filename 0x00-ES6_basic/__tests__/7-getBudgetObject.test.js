import getBudgetObject from '../7-getBudgetObject.js';

describe('getBudgetObject', () => {
  it('should return the correct budget object', () => {
    const budget = getBudgetObject(100, 200, 300);
    expect(budget).toStrictEqual({ income: 100, gdp: 200, capita: 300 });
  });
});
