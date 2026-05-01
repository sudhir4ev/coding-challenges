const { twoSum } = require('./solution');

describe('twoSum', () => {
  it('returns indices that sum to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('handles array with two elements', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('returns empty array when no solution', () => {
    expect(twoSum([1, 2], 10)).toEqual([]);
  });
});
