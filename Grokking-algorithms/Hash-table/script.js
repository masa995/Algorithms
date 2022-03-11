class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  /**Назначение простой хэш-функции:
  
    *прием значения;
  
    *выполнение циклов через каждый символ;
  
    *возвращение кода символа для каждого символа;
  
    *умножение его на индекс;
  
    *добавление его к исходному хэш-значению;
  
    *использование оператора остатка для непревышения длины размера массива.
  */

  hashFunction(value) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = (hash + value.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const elem = new hashTable(4);
console.log(elem.hashFunction('Hey'));