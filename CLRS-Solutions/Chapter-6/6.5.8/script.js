class Heap {
  constructor(arr) {
    this.heap = [];

    this.new(arr);
  }

  new(array) {
    let result = array.slice();
    let heapLength = Math.floor(result.length / 2);
    for (let i = heapLength; i >= 0; i--) {
      this.maxHeapify(result, i);
    }
    return this.heap = result.slice(0);
  }

  heapMaximum() {
    return this.heap[0];
  }

  heapExtractMAX() {
    if (this.heap.length < 1) {
      console.error('Очередь пуста');
      return;
    }

    let max = this.heap[0];
    this.heap[0] = this.heap.length - 1;
    this.heap.shift();
    this.maxHeapify(this.heap, 0);
    return max;
  }

  maxHeapInsert(elem) {
    this.heap.push(elem);
    this.increaseKey(this.heap.length - 1, elem);
  }

  heapDelete(elem) {
    let elemIndex = this.heap.indexOf(elem);
    let lastIndex = this.heap.length - 1;
    let parent = Math.floor((elemIndex - 1) / 2);

    if (elem === -1) {
      console.error('Элемент не найден');
      return
    }

    [this.heap[elemIndex], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[elemIndex]];
    this.heap.pop();

    if (this.heap[elemIndex] < this.heap[parent]) {
      this.maxHeapify(this.heap, elemIndex);
    } else {
      this.increaseKey(elemIndex, this.heap[elemIndex]);
    }
  }

  increaseKey(i, key) {
    let parent = Math.floor((i - 1) / 2);
    if (key < this.heap[i]) {
      console.error('Новый ключ меньше текущего');
      return;
    }

    this.heap[i] = key;
    while (i >= 0 && this.heap[parent] < this.heap[i]) {
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }

  maxHeapify(arr, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest;

    while ((arr[i] < arr[left]) || (arr[i] < arr[right])) {
      largest = i;
      if (left <= arr.length && arr[left] > arr[i]) {
        largest = left;
      }
      if (right <= arr.length && arr[right] > arr[i] && arr[right] > arr[largest]) {
        largest = right;
      }

      if (i !== largest) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        left = 2 * largest + 1;
        right = 2 * largest + 2;
        i = largest;
      }
    }
  }
}

const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
const heap = new Heap(arr);
console.log(heap);
console.log(heap.heapMaximum());
heap.maxHeapInsert(20);
heap.heapExtractMAX();
heap.heapDelete(10);
console.log(heap);

const arr1 = [15, 7, 9, 1, 2, 3, 8];
const heap1 = new Heap(arr1);
console.log(heap1);
heap1.heapDelete(2);
console.log(heap1);