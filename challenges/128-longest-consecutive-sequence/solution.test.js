import { longestConsecutive } from './solution.js';

describe('longestConsecutive', () => {
  it('returns 4 for the basic unsorted example', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it('handles duplicates and returns 9 for the extended sequence', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  it('returns 3 when duplicates are present in a short sequence', () => {
    expect(longestConsecutive([1, 0, 1, 2])).toBe(3);
  });

  it('returns 0 for an empty array', () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it('returns 1 for a single-element array', () => {
    expect(longestConsecutive([42])).toBe(1);
  });

  it('handles negative numbers in consecutive sequence', () => {
    expect(longestConsecutive([-1, -2, -3, 10, 30])).toBe(3);
  });
});
