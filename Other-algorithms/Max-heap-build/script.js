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

function maxHeapBuild(arr) {
  let heap = arr.slice();
  let heapLength = Math.floor(heap.length / 2);
  for (let i = heapLength; i >= 0; i--) {
    maxHeapify(heap, i);
  }
  return heap;
}

// const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
const arr = [5, 3, 17, 10, 84, 19, 6, 22, 9]
console.log(arr);
console.log(maxHeapBuild(arr));

