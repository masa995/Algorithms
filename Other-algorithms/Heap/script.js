class Heap {
  constructor(arr) {
    this.heap = [];

    this.new(arr || []);
  }

  new(array) {
    this.heap = array.slice();
    let heapLength = Math.floor(this.heap.length / 2);
    if (array.length === 0) {
      return
    }

    for (let i = heapLength; i >= 0; i--) {
      this.siftDown(i);
    }
    return this.heap;
  }

  heapMAX() {
    return this.heap[0]
  }

  heapExtractMax() {
    if (this.heap.length === 0) {
      console.error('Очередь пуста');
    }

    let max = this.heap[0];
    let lastIndex = this.heap.length - 1
    this.heap[0] = this.heap[lastIndex];
    this.heap.pop();
    this.siftDown(0);
    return max;
  }

  insert(element) {
    if (this.heap.length === 0) {
      this.heap.push(element);
      return
    }
    this.heap.push(element);
    this.siftUp(this.heap.length - 1);
  }

  delete(element) {
    let elemIndex = this.heap.indexOf(element);
    let lastIndex = this.heap.length - 1;
    let parent = Math.floor((elemIndex - 1) / 2);

    if (element === -1) {
      console.error('Элемент не найден');
    }

    [this.heap[elemIndex], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[elemIndex]];
    this.heap.pop(); //извлекаем элемент из конца кучи

    if (this.heap[elemIndex] < this.heap[parent]) {
      this.siftDown(elemIndex);
    } else {
      this.siftUp(elemIndex);
    }
  }

  isEmpty() {
    if (this.heap.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  siftDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest;

    while ((this.heap[index] < this.heap[left]) || (this.heap[index] < this.heap[right])) {
      largest = index;
      if (left <= this.heap.length && this.heap[left] > this.heap[index]) {
        largest = left;
      }
      if (right <= this.heap.length && this.heap[right] > this.heap[index] && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (index !== largest) {
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
        left = 2 * largest + 1;
        right = 2 * largest + 2;
        index = largest
      }
    }
  }

  siftUp(index) {
    let parent = Math.floor((index - 1) / 2);
    while (index >= 0 && this.heap[parent] < this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
}


const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
const heap = new Heap(arr);
console.log(heap);
console.log(heap.heapMAX());
heap.heapExtractMax();
console.log(heap.heapMAX());
console.log('*-----*');

const arrOne = [15, 7, 9, 1, 2, 3, 8];
const heapOne = new Heap(arrOne);
console.log(heapOne);
heapOne.delete(2);
console.log(heapOne);
console.log('*-----*');

const heapTwo = new Heap();
console.log(heapTwo.isEmpty());
heapTwo.insert(2);
heapTwo.insert(12);
console.log(heapTwo.isEmpty());
console.log(heapTwo);
