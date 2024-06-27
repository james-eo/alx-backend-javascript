import Pricing from '../4-pricing.js';
import Currency from '../3-currency.js';

describe('Pricing', () => {
  test('should create an instance of Pricing with correct attributes', () => {
    const currency = new Currency('EUR', 'Euro');
    const pricing = new Pricing(100, currency);
    expect(pricing.amount).toBe(100);
    expect(pricing.currency).toBe(currency);
  });

  test('should display full price correctly', () => {
    const currency = new Currency('EUR', 'Euro');
    const pricing = new Pricing(100, currency);
    expect(pricing.displayFullPrice()).toBe('100 Euro (EUR)');
  });

  test('should throw error for invalid amount', () => {
    const currency = new Currency('EUR', 'Euro');
    expect(() => new Pricing('100', currency)).toThrow(TypeError);
  });

  test('should throw error for invalid currency', () => {
    expect(() => new Pricing(100, 'Euro')).toThrow(TypeError);
  });

  test('should correctly convert price using static method', () => {
    expect(Pricing.convertPrice(100, 1.2)).toBe(120);
  });

  test('should throw error for invalid convertPrice arguments', () => {
    expect(() => Pricing.convertPrice('100', 1.2)).toThrow(TypeError);
    expect(() => Pricing.convertPrice(100, '1.2')).toThrow(TypeError);
  });
});
