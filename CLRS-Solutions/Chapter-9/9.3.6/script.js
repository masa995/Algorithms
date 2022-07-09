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
  return console.error('Not find');
}

function kthQuantilesRecurs(arr, k) {
  if (k === 1) {
    return [];
  }

  let median = []
  let indexMedian = Math.floor(arr.length / 2);
  let newK = Math.floor(k / 2);
  median.push(select(arr, 0, arr.length - 1, indexMedian));

  //for even k
  if (k % 2 === 0) {
    let arrL = arr.slice(0, indexMedian);
    let arrR = arr.slice(indexMedian);
    return [...kthQuantilesRecurs(arrL, newK), ...median, ...kthQuantilesRecurs(arrR, newK)];
  } else {
    let i = indexMedian - 1; //Left k
    let j = indexMedian + 1; //Right k
    let left = select(arr, 0, arr.length - 1, i);
    let right = select(arr, 0, arr.length - 1, j);
    let arrL = arr.slice(0, i);
    let arrR = arr.slice(j);

    return [...kthQuantilesRecurs(arrL, newK), ...[left, right], ...kthQuantilesRecurs(arrR, newK)];
  }

}

let numSort = [1, 2, 12, 25, 33, 100, 250, 400];
let num = [12, 1, 400, 25, 100, 2, 250, 33];
console.log(numSort);
console.log('Recurs: ' + kthQuantilesRecurs(num, 4));