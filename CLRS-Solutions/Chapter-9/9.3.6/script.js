function randomElem(min, max) {
  let random = min + Math.random() * (max + 1 - min); // min и max встречается в 2раза меньше поэтому тут так мудренно
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
  return i + 1; // это опорный элемент!
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

let arrQuantiles = [];
function kthQuantiles(arr, firstI, lastI, k) {

  if (k === 1) {
    return;
  } else {
    let sizeQuantiles = arr.length / k;
    let i = Math.floor(k / 2) * sizeQuantiles;
    let quantile = select(arr, firstI, lastI, i);
    let kLeft = Math.floor(k / 2);
    let kRight = k - Math.floor(k / 2);

    arrQuantiles.push(quantile);

    kthQuantiles(arr, firstI, quantile, kLeft);
    kthQuantiles(arr, quantile + 1, lastI, kRight)

    return arrQuantiles;
  }

}

let numR = [1, 2, 12, 25, 33, 100, 250, 400];
let num = [12, 1, 400, 25, 100, 2, 250, 33];
console.log(numR);
console.log(num);
console.log(kthQuantiles(num, 0, num.length - 1, 4));