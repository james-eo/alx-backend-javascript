import EVCar from '../100-evcar.js';
import Car from '../10-car.js';

describe('EVCar', () => {
  test('should clone to an instance of Car', () => {
    const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
    const ec2 = ec1.cloneCar();

    expect(ec2).toBeInstanceOf(Car);
    expect(ec2).not.toBeInstanceOf(EVCar);
    expect(ec2.brand).toBe("Tesla");
    expect(ec2.motor).toBe("Turbo");
    expect(ec2.color).toBe("Red");
  });
});
