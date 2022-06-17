function partition(array, first, pivot) {
  let x = array[pivot];
  let i = first - 1;
  for (let j = first; j < array.length - 2; j++) {
    if (array[j] >= x) {
      i = i + 1;
      [array[i], array[j]] = [array[j], array[i]]; // swap
    }
  }
  [array[i + 1], array[pivot]] = [array[pivot], array[i + 1]]; // swap
  return array;
}

let array = [2, 8, 7, 1, 3, 5, 6, 4];
console.log(array);
console.log(partition(array, 0, array.length - 1));