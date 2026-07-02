/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export default function arrayProductExcludingCurrent(numbers) {
  // Special case: `> 1` zeros
  if (numbers.filter((num) => num === 0).length > 1) {
    return new Array(numbers.length).fill(0);
  }

  const result = [];
  const fwdMul = [];
  const revMul = [];

  for (let i = 0; i < numbers.length; i++) {
    fwdMul[i] = (fwdMul[i - 1] ?? 1) * numbers[i];
    revMul[i] = (revMul[i - 1] ?? 1) * numbers[numbers.length - 1 - i];
  }

  // find product for each index individually
  numbers.forEach((_, i) => {
    result[i] = 1;
    i > 0 && (result[i] *= fwdMul[i - 1] ?? 1);
    i < numbers.length - 1 &&
      (result[i] *= revMul[numbers.length - 2 - i] ?? 1);
  });

  return result;
}
