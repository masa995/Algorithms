function countingSort(arr, min, max) {
  let i = 0;
  let k = 0;
  let count = [];

  for (i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[k++] = i;
    }
  }
  return arr;
}
let array = [3, 0, 2, 0, 5, 4, 1, 2, 5, 0];
console.log(array);
console.log(countingSort(array, 0, 5));

