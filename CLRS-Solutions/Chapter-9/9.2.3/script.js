function randomElem(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

function randomPartition(arr, firstI, lastI) {
  let pivot = randomElem(firstI, lastI);
  [arr[lastI], arr[pivot]] = [arr[pivot], arr[lastI]]; //swap
  return partition(arr, firstI, lastI);
}

function partition(arr, firstI, lastI) {
  let x = arr[lastI];
  let i = firstI - 1;

  for (let j = firstI; j < lastI; j++) {
    if (arr[j] <= x) {
      i = i + 1;
      [arr[i], arr[j]] = [arr[j], arr[i]]; //swap
    }
  }
  [arr[i + 1], arr[lastI]] = [arr[lastI], arr[i + 1]]; // swap
  return lastI;
}

/// Функция глючит =_=

function randomSelectIterative(arr, i) {
  let firstI = 0;
  let lastI = arr.length - 1;

  while (true) {
    if (firstI === lastI) {
      return arr[firstI];
    }
    let pivot = randomPartition(arr, firstI, lastI);
    let k = pivot - firstI + 1;
    if (i === k) {
      return arr[pivot];
    }

    if (i < k) {
      lastI = pivot - 1;
    } else {
      firstI = pivot + 1;
      i = i - k;
    }
  }
}

let numR = [1, 2, 2, 3, 4];
let num = [2, 1, 4, 2, 3];
console.log(numR);
console.log(num);
console.log(randomSelectIterative(num, 4));