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

function median(arrX, arrY) {
  if (arrX.length === 1 || arrY.length === 1) {
    return Math.min(arrX[0], arrY[0]);
  }

  let medianIndxX = Math.floor(arrX.length / 2);
  let medianIndxY = Math.floor(arrY.length / 2);
  let medianX = select(arrX, 0, arrX.length - 1, medianIndxX);
  let medianY = select(arrY, 0, arrY.length - 1, medianIndxY);

  if (medianX < medianY) {
    let newArrX = arrX.slice(medianIndxX);
    let newArrY = arrY.slice(0, medianIndxY + 1);
    return median(newArrX, newArrY);
  } else {
    let newArrX = arrX.slice(0, medianIndxX + 1);
    let newArrY = arrY.slice(medianIndxY);
    return median(newArrX, newArrY);
  }
}
const result = [0, 1, 2, 3, 4, 5, 6, 7];
const arrX = [1, 3, 5, 7];
const arrY = [0, 2, 4, 6];
console.log(result);
console.log(median(arrX, arrY));