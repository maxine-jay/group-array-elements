/**
 * Returns contents of array divided into N equally sized arrays. If the array cannot be equally divided
 * by N, the final array's length will be equal to the remainder.
 * @param {array} arr An array of length >= 0
 * @param {number} n A positive integer
 */

function groupArrayElements(arr, n) {
  if (arr.length === 0) return [];
  if (n > arr.length) n = arr.length;
  const remainder = Math.ceil(arr.length / n);
  const nestedArrLength = (arr.length - remainder) / (n - 1);
  const newArr = [];
  const finalArr = [];
  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    const nestedArr = [];
    for (let j = 0; j < nestedArrLength; j++) {
      nestedArr.push(arr[count]);
      count++;
    }
    newArr.push(nestedArr);
  }

  for (let j = 0; j < remainder; j++) {
    if (count < arr.length) {
      finalArr.push(arr[count]);
      count++;
    }
  }
  newArr.push(finalArr);

  return newArr;
}

module.exports = groupArrayElements;
