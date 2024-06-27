import Building from '../5-building.js';

describe('Building', () => {
  test('should throw error if evacuationWarningMessage is not implemented', () => {
    class TestBuilding extends Building {}
    expect(() => new TestBuilding(100)).toThrow('Class extending Building must override evacuationWarningMessage');
  });
});
