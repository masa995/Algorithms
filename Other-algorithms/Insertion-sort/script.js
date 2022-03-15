function insertionSort(array) {
  let arr = array.slice();  //array immutable
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while ((j >= 0) && (current < arr[j])) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

let arr = [5, 6, 4, 6, 1, 3];
console.log(arr);
let result = insertionSort(arr);
console.log(result);