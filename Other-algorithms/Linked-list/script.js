class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = {
      data: data,
      next: null
    }

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }
}

const list = new LinkedList();