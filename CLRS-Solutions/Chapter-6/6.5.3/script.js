class Heap {
  constructor(arr) {
    this.heap = [];

    this.new(arr);
  }

  new(array) {
    let result = array.slice();
    let heapLength = Math.floor(result.length / 2);
    for (let i = heapLength; i >= 0; i--) {
      this.minHeapify(result, i);
    }
    return this.heap = result.slice(0);
  }

  heapMinimum() {
    return this.heap[0];
  }

  heapExtractMIN() {
    if (this.heap.length < 1) {
      console.error('Очередь пуста');
      return;
    }

    let min = this.heap[0];
    this.heap[0] = this.heap.length - 1;
    this.heap.shift();
    this.minHeapify(this.heap, 0);
    return min;
  }

  minHeapInsert(elem) {
    this.heap.push(elem);
    this.decreaseKey(this.heap.length - 1, elem);
    return this.heap
  }

  decreaseKey(i, key) {
    let parent = Math.floor((i - 1) / 2);
    if (key > this.heap[i]) {
      console.error('Новый ключ больше текущего');
      return;
    }

    this.heap[i] = key;
    while (i >= 0 && this.heap[parent] > this.heap[i]) {
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
    return this.heap;
  }

  minHeapify(arr, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let small;

    while ((arr[i] > arr[left]) || (arr[i] > arr[right])) {
      small = i;
      if (left <= arr.length && arr[left] < arr[i]) {
        small = left;
      }

      if (right <= arr.length && arr[right] < arr[i] && arr[right] < arr[small]) {
        small = right;
      }

      [arr[i], arr[small]] = [arr[small], arr[i]];
      left = 2 * small + 1;
      right = 2 * small + 2;
      i = small;
    }
  }
}

const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
const heap = new Heap(arr);
console.log(heap);
console.log(heap.heapMinimum());
console.log(heap.minHeapInsert(0));
console.log(heap.heapExtractMIN());
console.log(heap);