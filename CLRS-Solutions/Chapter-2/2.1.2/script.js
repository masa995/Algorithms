function insertionSortNonincrease(array) {
  let arr = array.slice(); // дублируем массив
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1; //при певой итерации j = 0
    while ((j >= 0) && (current > arr[j])) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

let arr = [5, 6, 4, 6, 1, 3];
console.log(arr);
console.log(`Отсортированный массив в обратном порядке: ${insertionSortNonincrease(arr)}`);
