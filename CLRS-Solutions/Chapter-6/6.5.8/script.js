function maxHeapify(arr, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest;

  while ((arr[i] < arr[left]) || (arr[i] < arr[right])) {
    if (left <= arr.length && arr[left] > arr[i]) {
      largest = left;
    }
    if (right <= arr.length && arr[right] > arr[i] && arr[right] > arr[largest]) {
      largest = right;
    }

    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    left = 2 * largest + 1;
    right = 2 * largest + 2;
    i = largest;
  }
}


let arr = [27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0];
console.log(arr);
maxHeapify(arr, 2)
console.log(arr);