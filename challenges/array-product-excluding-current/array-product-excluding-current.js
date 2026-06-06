/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export default function arrayProductExcludingCurrent(numbers) {
  const zeroIndex = [];
  numbers.forEach((num, index) => {
    if (num == 0) {
      zeroIndex.push(index);
    }
  });

  if (zeroIndex.length > 1) {
    return new Array(numbers.length).fill(0);
  } else if (zeroIndex.length == 1) {
    const arr = new Array(numbers.length).fill(0);

    const index = zeroIndex[0];
    numbers.splice(index, 1, 1);
    arr[index] = arrayMult(numbers);

    return arr;
  } else {
    const total = arrayMult(numbers);
    return numbers.map((num) => total / num);
  }
}

function arrayMult(arr) {
  return arr.reduce((total, num) => {
    return (total *= num);
  }, 1);
}
