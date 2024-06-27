import HolbertonClass from '../8-hbtn_class.js';

describe('HolbertonClass', () => {
  test('should create an instance of HolbertonClass with correct attributes', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(hc.size).toBe(12);
    expect(hc.location).toBe('Mezzanine');
  });

  test('should return correct size when cast to Number', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(Number(hc)).toBe(12);
  });

  test('should return correct location when cast to String', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(String(hc)).toBe('Mezzanine');
  });

  test('should throw error for invalid size', () => {
    expect(() => new HolbertonClass('12', 'Mezzanine')).toThrow(TypeError);
  });

  test('should throw error for invalid location', () => {
    expect(() => new HolbertonClass(12, 123)).toThrow(TypeError);
  });
});
