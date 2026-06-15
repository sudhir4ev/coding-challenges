/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function smallestInRotatedArray(numbers: number[]) {
  let start = 0,
    end = numbers.length - 1;
  let smallest = numbers[start];

  console.log("smallestInRotatedArray", numbers);

  let iter = 0;

  while (start < end) {
    if (iter++ > 100) throw new Error("Potential infinite loop");
    let mid = Math.trunc((start + end) / 2);

    smallest = Math.min(smallest, numbers[mid]);

    if(start + 1 == end) {
      return Math.min(smallest, numbers[start], numbers[end])
    }

    // array is sorted - smallest number in start position
    if (numbers[mid] >= numbers[start] && numbers[mid] <= numbers[end]) {
      console.log(
        [start, mid, end],
        `Found el at ${start} - Iter#${iter}`,
      );
      return numbers[start];
    }

    // smallest el in first half
    if (numbers[mid] < numbers[start]) {
      console.log(
        [start, mid, end],
        `El in first half [${start} - ${mid}] - Iter#${iter}`,
      );
      end = mid;
    }

    // smallest el in second half
    else {
      console.log(
        [start, mid, end],
        `El in 2nd half [${mid} - ${end}] - Iter$#${iter}`,
      );
      start = mid;
    }
  }

  return smallest;
}
