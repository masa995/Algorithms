class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    if (!this.head) {
      const node = new Node(data);
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(data);
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) {
      return console.log('underflow');
    }
    this.head = this.head.next;
  }

  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

const list = new LinkedListQueue();
list.enqueue(10);
list.enqueue(11);
list.enqueue(12);
console.log(list.toArray());

list.dequeue();
list.dequeue();
console.log(list.toArray());

list.enqueue(25);
console.log(list.toArray());
list.dequeue();
list.dequeue();
list.dequeue();