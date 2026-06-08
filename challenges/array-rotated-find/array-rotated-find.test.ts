import findInRotatedArray from "./array-rotated-find";

test("numbers = [-1,2,4,-9,-2] target = 2", () => {
  expect(findInRotatedArray([-1, 2, 4, -9, -2], 2)).toBe(1);
});
