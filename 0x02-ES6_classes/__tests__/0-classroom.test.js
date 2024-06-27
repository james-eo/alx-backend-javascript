import ClassRoom from '../0-classroom.js';

describe('ClassRoom', () => {
  test('should correctly assign the maxStudensSize', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
  
  test('should correctly assign the maxStudentsSize', () => {
    const room = new ClassRoom(20);
    expect(room._maxStudentsSize).toBe(20);

    const anotherRoom = new ClassRoom(5);
    expect(anotherRoom._maxStudentsSize).toBe(5);
  });
});
