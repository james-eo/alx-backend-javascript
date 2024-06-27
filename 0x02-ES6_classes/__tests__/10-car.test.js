import Car from '../10-car.js';

describe('Car', () => {
  test('should create an instance of Car with correct attributes', () => {
    const car = new Car('Nissan', 'Turbo', 'Pink');
    expect(car.brand).toBe('Nissan');
    expect(car.motor).toBe('Turbo');
    expect(car.color).toBe('Pink');
  });

  test('should clone the car correctly', () => {
    class TestCar extends Car {}
    const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
    const tc2 = tc1.cloneCar();

    expect(tc1).not.toBe(tc2);
    expect(tc2).toBeInstanceOf(TestCar);
    expect(tc2.brand).toBe(tc1.brand);
    expect(tc2.motor).toBe(tc1.motor);
    expect(tc2.color).toBe(tc1.color);
  });

  test('should throw error for invalid brand', () => {
    expect(() => new Car(123, 'Turbo', 'Pink')).toThrow(TypeError);
  });

  test('should throw error for invalid motor', () => {
    expect(() => new Car('Nissan', 123, 'Pink')).toThrow(TypeError);
  });

  test('should throw error for invalid color', () => {
    expect(() => new Car('Nissan', 'Turbo', 123)).toThrow(TypeError);
  });
});
