function countingSort(array, min, max) {
  let arr = array.slice(0)
  let j = 0;
  let countOb = {};

  for (let i = min; i <= max; i++) {
    countOb[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    countOb[index] += 1;
  }

  for (let i = min; i <= max; i++) {
    while (countOb[i] > 0) {
      arr[j] = i;
      j++;
      countOb[i]--;
    }
  }
  return arr;
}

let array = [5, 6, 7, 6, 5, 8, 9, 5, 7, 7, 10, 6, 10, 6];
console.log(array);
console.log(countingSort(array, 5, 10));

