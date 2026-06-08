/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
export default function findInRotatedArray(numbers: number[], target: number) {
  // - split array in the middle
  // - if(target == item in middle) -> return middle index
  // - find which half is sorted.
  // - if( target in sorted half) -> binary search for target in sorted half, return index
  // - else repeat step 1

  let start = 0,
    end = numbers.length - 1;

  // console.log(numbers, target);
  while (start < end) {
    const middle = Math.trunc((start + end) / 2);
    if (numbers[middle] == target) return middle;
    if (numbers[start] == target) return start;
    if (numbers[end] == target) return end;

    // left half is sorted
    if (numbers[start] < numbers[middle]) {
      // target eists in first half i.e. ( start -> middle )
      if (numbers[start] < target && target < numbers[middle]) {
        // move end pointer to last index in first half
        end = middle - 1;
      }
      // target exists in second half - i.e. ( middle -> end )
      else {
        // continue looking in second half in next interation
        start = middle + 1;
      }
    }

    // right half is sorted
    else {
      // target eists in first half
      if (numbers[middle] < target && target < numbers[end]) {
        // move start pointer to first index in right half
        start = middle + 1;
      } else {
        // continue looking in first half in next interation
        end = middle - 1;
      }
    }
  }
  return -1;
}
