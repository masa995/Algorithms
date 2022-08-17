class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    if (!this.head) {
      const node = new Node(data);
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(data, this.head);
      this.head = node;
    }
  }

  pop() {
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

const list = new LinkedListStack();
list.push(0);
list.push(1);
list.push(2);
console.log(list.toArray());

list.pop();
console.log(list.toArray());

list.push(25);
console.log(list.toArray());
list.pop();
list.pop();
list.pop();
list.pop();