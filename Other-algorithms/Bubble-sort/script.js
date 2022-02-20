function bubbleSort(array) {
  let arr = array.slice();
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}

const nums = [1, 3, 0, 1, 55, 9];
console.log(nums);
console.log('bubbleSort ' + bubbleSort(nums));
