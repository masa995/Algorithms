function heapSort(array) {
  let arr = array.slice();
  let arrayLength = array.length;
  let result = [];

  arr = newHeap(arr);
  for (let i = 0; i < arrayLength; i++) {
    let max = heapExtractMax(arr);
    result.unshift(max);
  }
  return result;
}

//Secondary functions
function newHeap(array) {
  let heapLength = Math.floor(array.length / 2);
  if (array.length === 0) {
    return
  }

  for (let i = heapLength; i >= 0; i--) {
    heapifyMAX(i, array);
  }
  return array;
}

function heapifyMAX(index, array) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let largest;

  while ((array[index] < array[left]) || (array[index] < array[right])) {
    largest = index;
    if (left <= array.length && array[left] > array[index]) {
      largest = left;
    }
    if (right <= array.length && array[right] > array[index] && array[right] > array[largest]) {
      largest = right;
    }
    if (index !== largest) {
      [array[index], array[largest]] = [array[largest], array[index]];
      left = 2 * largest + 1;
      right = 2 * largest + 2;
      index = largest
    }
  }
}

function heapExtractMax(array) {
  if (array.length === 0) {
    console.error('Очередь пуста');
  }

  let max = array[0];
  let lastIndex = array.length - 1
  array[0] = array[lastIndex];
  array.pop();
  heapifyMAX(0, array);
  return max;
}

const arr = [1, 0, 33, 66, 48, 777, 1, 8, 2, 11, 44,];
console.log(arr);
console.log(heapSort(arr));