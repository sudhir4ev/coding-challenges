/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
export default function mostCommonElements(numbers, k) {
  const numGroups = {};

  for (const i of numbers) {
    numGroups[i] = numGroups[i] ?? { val: i, count: 0 };
    numGroups[i].count++;
  }

  const sortedGroups = Object.values(numGroups).sort(
    (a, b) => b.count - a.count,
  );
  const top_k = sortedGroups.slice(0, k).map((g) => g.val);

  return top_k;
}
