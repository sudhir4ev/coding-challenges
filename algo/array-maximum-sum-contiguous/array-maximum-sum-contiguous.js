/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxSumSubArray(numbers) {
  let currSum = 0;
  let maxSum = numbers[0];

  for (const num of numbers) {
    if (currSum < 0) currSum = 0;
    currSum += num;

    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}
