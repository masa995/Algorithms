function doubleSelectionSort(arr) {
  for (let j = 0; j < arr.length / 2; j++) {
    let min = Infinity;
    let max = -Infinity;
    let maxIndex;
    let minIndex;
    let buff;

    for (let i = j; i < arr.length - j; i++) {
      if (min > arr[i]) {
        min = arr[i];
        minIndex = i;
      }
      if (max < arr[i]) {
        max = arr[i];
        maxIndex = i;
      }
    }

    if (j === maxIndex) {
      maxIndex = minIndex;
    }

    [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]];
    [arr[arr.length - 1 - j], arr[maxIndex]] = [arr[maxIndex], arr[arr.length - 1 - j]];
  }
  return arr;
}

//const nums = [1, 3, 0, 1, 55, 9];
const nums = [8, 0, 1, 4, 6, 5, 9, 7, 2, 3];
console.log(nums);
console.log('doubleSelectionSort ' + doubleSelectionSort(nums));

