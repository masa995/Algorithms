function mergeSort(array, start, end) {
  let arr = array.slice();
  let answer;

  if (start < end) {
    let q = Math.floor(arr.length / 2);
    mergeSort(arr, 0, q);
    mergeSort(arr, q + 1, arr.length - 1)
    answer = merge(arr, 0, arr.length - 1, q);
  }
  return answer
}

function merge(array, start, end, key) {
  let result = [];
  let left = array.slice(start, q);
  let right = array.slice(q + 1, array.length - 1);
  let j = 1;
  let k = 1;
  for (let i = 0; i < array.length; i++) {
    if (left.length === 0) {
      result[i] = right[k]
      k++
    }
    else if (right.length === 0) {
      result[i] = left[j]
      j++
    }
    else if (left[j] <= right[k]) {
      result[i] = left[j];
      j++;
    }
    else if (left[j] >= right[k]) {
      result[i] = right[k]
      k++;
    }
  }
  return result;
}

const nums = [1, 3, 0, 1, 55, 9];
console.log(mergeSort(nums));
console.log('Array nums ' + nums);