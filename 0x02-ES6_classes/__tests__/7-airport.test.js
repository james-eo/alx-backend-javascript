import Airport from '../7-airport.js';

describe('Airport', () => {
  test('should create an instance of Airport with correct attributes', () => {
    const airport = new Airport('San Francisco Airport', 'SFO');
    expect(airport.name).toBe('San Francisco Airport');
    expect(airport.code).toBe('SFO');
  });

  test('should return correct string representation', () => {
    const airport = new Airport('San Francisco Airport', 'SFO');
    expect(airport.toString()).toBe('[object SFO]');
  });

  test('should throw error for invalid name', () => {
    expect(() => new Airport(123, 'SFO')).toThrow(TypeError);
  });

  test('should throw error for invalid code', () => {
    expect(() => new Airport('San Francisco Airport', 123)).toThrow(TypeError);
  });
});
