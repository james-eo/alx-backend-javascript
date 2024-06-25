import taskBlock from '../1-block-scoped.js';

describe('taskBlock', () => {
  it('should return [false, true] when trueOrFalse is false', () => {
    expect(taskBlock(false)).toStrictEqual([false, true]);
  });

  it('should return [false, true] when trueOrFalse is true', () => {
    expect(taskBlock(true)).toStrictEqual([false, true]);
  });
});
