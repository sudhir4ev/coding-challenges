/**
 * @param {string} str
 * @return {number}
 */
export default function longestUniqueSubstring(str: string) {
  /**
   * two pointers running from star to end of the array
   * these tracking the current longest seq. Use hashmap to trak duplicates in a seq
   *
   * Keep rec of longest found so far for each run
   *
   * Once a duplicate is found, reset the start pointer to the prev duplicate index + 1
   * continue the tracking
   */

  let start = 0,
    index = 0;
  let longestSeq = 0;
  let seqHash: Record<string, number> = {};

  while (index <= str.length - 1) {
    const char = str[index];
    if (seqHash[char] !== undefined) {
      start = seqHash[char] + 1;
      index++;
      seqHash = {};
      continue;
    }

    seqHash[char] = index;
    index++;
    longestSeq = Math.max(longestSeq, index - start);
  }
  return longestSeq;
}
