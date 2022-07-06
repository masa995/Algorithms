function randomElem(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

function randomPartition(arr, firstI, lastI) {
  let pivot = randomElem(firstI, lastI);
  [arr[lastI], arr[pivot]] = [arr[pivot], arr[lastI]];
  return partition(arr, firstI, lastI);
}

function partition(arr, firstI, lastI) {
  let x = arr[lastI];
  let i = firstI - 1;

  for (let j = firstI; j < lastI; j++) {
    if (arr[j] <= x) {
      i = i + 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[lastI]] = [arr[lastI], arr[i + 1]];
  return i + 1;
}

function randomSelectIterative(arr, k) {
  let firstI = 0;
  let lastI = arr.length - 1;

  while (firstI <= lastI) {
    let pivot = randomPartition(arr, firstI, lastI);

    if (pivot == k - 1) {
      return arr[pivot]
    }

    if (pivot > k - 1) {
      lastI = pivot - 1;
    } else {
      firstI = pivot + 1;
    }
  }
  return console.error('Элемент не найден');
}

let numR = [1, 2, 12, 33, 400];
let num = [12, 1, 400, 2, 33];
console.log(numR);
console.log(num);
console.log(randomSelectIterative(num, 3));