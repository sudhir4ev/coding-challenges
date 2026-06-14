/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function arrayReachableEnd(numbers) {
  let maxReachable = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i > maxReachable) {
      return false;
    }

    maxReachable = Math.max(maxReachable, i + numbers[i]);

    if (maxReachable >= numbers.length - 1) {
      return true;
    }
  }

  return true;
}
