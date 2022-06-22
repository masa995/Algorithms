function radixSort(array) {
  let position = new Array(10).fill(0).map(value => []);
  let multipler = 1;
  let maxValue = Math.max(...array);

  while (maxValue - multipler >= 0) {
    array.forEach(value => {
      let slice = Math.floor(value / multipler);
      position[slice % 10].push(value);
    });

    let indexValue = 0;
    position.forEach(values => {
      for (let i = 0; values.length > 0; i++) {
        array[indexValue] = values.shift(0);
        indexValue++;
      }
    });
    multipler *= 10;
  }
  return array;
}

const array = [33, 102, 305, 89, 45, 10, 15, 78, 9, 89];
console.log(array);
console.log(radixSort(array));