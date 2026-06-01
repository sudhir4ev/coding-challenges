/**
 * @param {number[]} nums
 * @return {number}
 */
export function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  // 1. Sort numbers
  nums.sort((a, b) => a - b);

  let maxLen = 1,
    currLen = 1;

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] === nums[i - 1]) continue;
    if(nums[i] === nums[i - 1] + 1) {
      currLen++;
      maxLen = Math.max(maxLen, currLen);
    } else {
      currLen = 1;
    }
  }
  
  return maxLen;
}
