function randomElem(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
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
  return i + 1;
}

function randomPartition(arr, firstI, lastI) {
  let pivot = randomElem(firstI, lastI);
  [arr[lastI], arr[pivot]] = [arr[pivot], arr[lastI]]; //swap
  return partition(arr, firstI, lastI);
}

function select(arr, firstI, lastI, k) {
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

function kClosest(arr, numberOfneighbors) {
  let iMedian = Math.round(arr.length / 2);
  let median = select(arr, 0, arr.length - 1, iMedian);
  let arrB = new Array(arr.length).fill(0);
  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    arrB[i] = Math.abs(arr[i] - median);
  }

  let kthElem = select(arrB, 0, arrB.length - 1, numberOfneighbors);

  for (let i = 0; i < arr.length; i++) {
    if ((Math.abs(arr[i] - median) < kthElem) || (Math.abs(arr[i] - median) === kthElem)) {
      arrResult.push(arr[i]);
    }
  }
  return arrResult;
}

let numSort = [1, 2, 12, 25, 33, 100, 250, 400];
let num = [12, 1, 400, 25, 100, 2, 250, 33];
console.log(numSort);
console.log(kClosest(num, 3));