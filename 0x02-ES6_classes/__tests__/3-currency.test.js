import Currency from '../3-currency.js';

describe('Currency', () => {
  test('should create an instance of Currency with correct attributes', () => {
    const currency = new Currency('$', 'Dollars');
    expect(currency.code).toBe('$');
    expect(currency.name).toBe('Dollars');
  });

  test('should display full currency correctly', () => {
    const currency = new Currency('$', 'Dollars');
    expect(currency.displayFullCurrency()).toBe('Dollars ($)');
  });

  test('should throw error for invalid code', () => {
    expect(() => new Currency(123, 'Dollars')).toThrow(TypeError);
  });

  test('should throw error for invalid name', () => {
    expect(() => new Currency('$', 123)).toThrow(TypeError);
  });
});
