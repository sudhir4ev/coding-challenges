/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function arrayReachableEnd(numbers) {
  let numMoves = 0;
  let index = 0;

  if (numbers.length == 0 || numbers.length == 1) return true;

  while (numMoves != 0 && index <= numbers.length - 1) {
    numMoves = numbers[index];
    index += numMoves;

    if (index >= numbers.length - 1) return true;
  }

  return false;
}
