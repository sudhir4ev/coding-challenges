/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function smallestInRotatedArray(numbers: number[]) {
  let start = 0,
    end = numbers.length - 1;
  let smallest = numbers[start];

  while (start < end) {
    // Only 2 elements
    if(start + 1 == end) return Math.min(smallest, numbers[start], numbers[end])
    
    let mid = Math.trunc((start + end) / 2);

    smallest = Math.min(smallest, numbers[mid]);

    // array is sorted - smallest number in start position
    if (numbers[mid] >= numbers[start] && numbers[mid] <= numbers[end]) 
      return numbers[start];

    // smallest el in first half
    if (numbers[mid] < numbers[start]) end = mid;

    // smallest el in second half
    else start = mid;
  }

  return smallest;
}
