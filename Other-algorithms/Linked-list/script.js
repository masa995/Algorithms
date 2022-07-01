//Linked List 
// [value, next] -> [value, next] -> [value, next]

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //first element
    this.tail = null; //last element
  }

  append(data) {
    const node = new Node(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  prepend(data) {
    const node = new Node(data, this.head);
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  delete(data) {
    if (!this.head) {
      return console.error('Список пуст')
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      }
      else {
        current = current.next;
      }
    }

    if (this.tail.data === data) {
      this.tail = current;
    }
  }

  find(data) {
    if (!this.head) {
      return console.error('Список пуст')
    }

    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }

  toArray() {
    const output = [];
    let current = this.head;

    while (current) {
      output.push(current);
      current = current.next;
    }
    return output;
  }
}

const list = new LinkedList();
list.append('=^_^=')
list.append('I am cat');
list.prepend('Hi world');
list.append('My name is Limon');
list.append('I am peach color');
list.append('I am big');

list.prepend('44');
list.append('44');
list.delete('44');

console.log(list);
console.log(list.toArray());
console.log(list.find('=^_^='));