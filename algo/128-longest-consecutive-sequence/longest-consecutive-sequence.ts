/**
 * @param {number[]} nums
 * @return {number}
 */
export function longestConsecutive(nums:number[]) {
  if (nums.length === 0) return 0;
  const numSet = new Set(nums);
  let maxLen = 1,
    currLen = 1;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (numSet.has(n - 1)) continue;
    currLen = 1;
    
    let j = 1;
    while(numSet.has(n+j)) {
      currLen++;j++;
    }
    maxLen = Math.max(maxLen, currLen)
  }

  return maxLen;
}
