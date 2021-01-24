import { Engine } from '@/engine';

describe('A test for Field component', () => {
  it('should get 3 count of neighbours', () => {
    const arr = [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ].flat();
    expect(Engine.getAreaCount(6, arr)).toBe(3);
  });

  it('should get 2 count of neighbours', () => {
    const arr = [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ].flat();
    expect(Engine.getAreaCount(7, arr)).toBe(2);
  });
});
