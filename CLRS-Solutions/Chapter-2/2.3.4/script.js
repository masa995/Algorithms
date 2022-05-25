function insertionSortRecursive(arr, n) {
  if (n <= 1) {
    return;
  }

  insertionSortRecursive(arr, n - 1);

  let last = arr[n - 1];
  let j = n - 2;

  while (j >= 0 && last < arr[j]) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = last;
  return arr;
}

let arr = [1, 3, 0, 1, 55, 9];
console.log(arr);
console.log(`Отсортированный массив: ${insertionSortRecursive(arr, arr.length)}`);