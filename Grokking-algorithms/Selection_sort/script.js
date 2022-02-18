function selectionSort(arr) {

  for (let j = arr.length - 1; j >= 0; j--) {
    let max = -Infinity;
    let index;
    for (let i = 0; i <= j; i++) {
      if (max < arr[i]) {
        max = arr[i];
        index = i;
      }
    }

    if (max !== arr[j]) {
      buff = arr[j];
      arr[j] = max;
      arr[index] = buff;
    }
  }
  return arr;
}

const nums = [1, 3, 0, 33, 66, 777, 8, 4, 55, 9, 2, 1];
console.log(selectionSort(nums));