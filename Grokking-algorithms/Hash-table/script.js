class hashTable {
  constructor(size) {
    this.initialSize = 5;
    this.size = size || this.initialSize;
    this.table = new Array(this.size);
  }

  hashFunction(key) {
    let hash = 0;
    let value = key;

    if (typeof key === 'number') {
      value = key.toString();
    }

    for (let i = 0; i < value.length; i++) {
      hash = (hash + value.charCodeAt(i) * i) % this.table.length;
    }
    return hash;
  }

  rehashFunction(key) {
    let hash = this.hashFunction(key);
    while (this.table[hash]) {
      hash += 1;
      if (hash === this.table.length) {
        this.resize();
      }
      return hash;
    }
  }

  add(key, value) {
    let elementKey = this.hashFunction(key);

    let fullCell = this.table.filter(elem => elem);
    if (fullCell.length / this.table.length > 0.7) {
      this.resize();
    };

    if (this.table[elementKey]) {
      elementKey = this.rehashFunction(key);
    }
    this.table.splice(elementKey, 1, { key, value });
    return this.table;
  }

  get(key) {
    let elementKey = this.hashFunction(key);
    if (!this.table[elementKey]) {
      return undefined;
    }
    else if (this.table[elementKey].key === key) {
      return this.table[elementKey].value;
    }
  }

  delete(key) {
    let elementKey = this.hashFunction(key);

    if (this.table[elementKey].key === key) {
      this.table.splice(elementKey, 1, 'Deleted');
      return this.table;
    } else {
      while (this.table[elementKey].key !== key) {
        elementKey += 1;
        if (elementKey === this.table.length) {
          return undefined;
        }
      }
      this.table.splice(elementKey, 1, 'Deleted');
    }
  }

  has(key) {
    let elementKey = this.hashFunction(key);
    if (!this.table[elementKey]) {
      return false;
    }

    if (this.table[elementKey].key == key) {
      return true;
    } else {
      while (this.table[elementKey].key !== key) {
        elementKey += 1;
        if (elementKey === this.table.length) {
          return false;
        }
      }
      return true;
    }
  }

  resize() {
    this.size = this.size * 2;
    let buffArr = this.table.slice();
    this.table = new Array(this.size);

    for (let i = 0; i < buffArr.length; i++) {
      if (buffArr[i] && buffArr[i] !== 'Deleted') {
        let key = buffArr[i].key;
        let value = buffArr[i].value;
        this.add(key, value);
      }
    }
  }
}

const elem = new hashTable();

elem.add('Piterson', 'Am');
elem.add('Krot', 'Tod');
elem.add('One', 'To');

elem.delete('Krot');

elem.add('Three', 'Brown');
elem.add('Li', 'Dog');

console.log(elem);
console.log(elem.has('Li'));
console.log(elem.has('Krot'));