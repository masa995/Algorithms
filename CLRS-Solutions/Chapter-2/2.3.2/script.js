function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  let key = Math.floor(array.length / 2)
  let left = array.slice(0, key);
  let right = array.slice(key, array.length)
  return merge(mergeSort(left), mergeSort(right), array.length);
}

function merge(arrLeft, arrRight, arrLength) {
  const result = [];

  for (let k = 0; k < arrLength; k++) {
    if (arrLeft.length === 0) {
      return [...result, ...arrRight]
    } else if (arrRight.length === 0) {
      return [...result, ...arrLeft]
    } else if (arrLeft[0] <= arrRight[0]) {
      result.push(arrLeft.shift());
    } else if (arrLeft[0] > arrRight[0]) {
      result.push(arrRight.shift());
    }
  }
}


// const nums = [8, 0, 1, 4, 6, 5, 9, 7, 2, 3];
const nums = [1, 3, 0, 1, 55, 9];
console.log('Array nums ' + nums);
console.log(mergeSort(nums));
