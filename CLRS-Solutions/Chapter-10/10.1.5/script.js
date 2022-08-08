class Deque {
  constructor() {
    this.arr = new Array(7);
    this.head;
    this.tail;
    this.left = 0;
    this.right = 1;
  }

  isFull() {
    if (this.left === this.right) {
      console.error('Overflow');
      return true
    }
  }

  isEmpty() {
    if (this.left === this.tail || this.right === this.head || this.head === undefined) {
      console.error('Underflow');
      return true
    }
  }

  pushBack(x) {
    if (this.isFull()) {
      return
    }

    this.arr[this.right] = x;

    if (this.right === this.arr.length - 1) {
      this.tail = this.right;
      this.right = 0;
    } else {
      this.tail = this.right;
      this.right += 1
    }

    if (this.head === undefined) {
      this.head = this.tail;
    }
  }

  pushFront(x) {
    if (this.isFull()) {
      return
    }

    this.arr[this.left] = x;

    if (this.left === 0) {
      this.head = this.left;
      this.left = this.arr.length - 1;

    } else {
      this.head = this.left;
      this.left -= 1
    }

    if (this.tail === undefined) {
      this.tail = this.head;
    }
  }

  popBack() {
    if (this.isEmpty()) {
      return
    }

    let x = this.arr[this.tail];

    if (this.right === 0) {
      this.tail = this.right
      this.right = this.arr.length - 1;

    } else {
      this.tail = this.right;
      this.right -= 1

    }
    return x;
  }

  popFront() {
    if (this.isEmpty()) {
      return
    }

    let x = this.arr[this.head];

    if (this.left === this.arr.length - 1) {
      this.head = 1;
      this.left = 0;

    } else {
      this.head = this.left;
      this.left += 1;

    }
    return x;
  }
}

let deque = new Deque();
deque.pushFront(44)
deque.pushBack(21);

deque.pushFront(4);
deque.pushBack(11);

console.log("popBack", deque.popBack())
deque.pushBack(20001);

console.log("popFront", deque.popFront())
deque.pushFront(20001);

console.log(deque);