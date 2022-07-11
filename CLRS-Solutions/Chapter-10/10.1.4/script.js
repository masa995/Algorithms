class Queue {
  constructor() {
    this.arr = new Array(7);
    this.head = 0;
    this.tail = 1;
  }

  enqueue(x) {
    if (this.head === this.tail) {
      console.error('Overflow');
    }

    this.arr[this.tail] = x;

    if (this.tail === this.arr.length - 1) {
      this.tail = 1;
    } else {
      this.tail += 1;
    }
    if (this.head === 0) {
      this.head = 1;
    }
  }

  dequeue() {
    if (this.head === 0) {
      console.error('underflow');
    }
    let x = this.arr[this.head];

    if (this.head === this.arr.length - 1) {
      this.head = 1;
    } else {
      this.head += 1;
    }

    if (this.head === this.tail) {
      this.head = 0;
      this.tail = 1
    }
    return x;
  }
}

let queue = new Queue();
queue.enqueue(4);
queue.enqueue(1);
queue.enqueue(3);
queue.dequeue();
queue.enqueue(8);
queue.dequeue();
console.log(queue);