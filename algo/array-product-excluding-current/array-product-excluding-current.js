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
    // all elements in resutl 0
    return new Array(numbers.length).fill(0);
  } else if (zeroIndex.length == 1) {
    const arr = new Array(numbers.length).fill(0);

    const index = zeroIndex[0];
    // add all index with 0's index set to 1
    numbers.splice(index, 1, 1);
    arr[index] = arrayMult(0);

    return arr;
  }

  // find product for each index individually
  const result = [];
  for (const indexStr in numbers) {
    const index = Number(indexStr);
    result[index] = 1;

    if (index == 0) {
      result[index] *= arrayMult(1);
      continue;
    }

    if (index == numbers.length - 1) {
      result[index] *= arrayMult(0, numbers.length - 2);
      continue;
    }

    result[index] = arrayMult(0, index - 1) * arrayMult(index + 1);
  }

  return result;

  function arrayMult(start, end) {

    let product = 1;
    end = end ?? numbers.length - 1;

    for (let i = start; i <= end; i++) {
      product *= numbers[i];
    }
    return product;
  }
}
