function getMaxSubarray(array) {
  let best = -Infinity;
  let current = 0;
  let left = 0;
  let right = 0;
  let currentLeft = 0;

  for (let i = 0; i < array.length; i++) {
    current += array[i];

    if (current > best) {
      best = current;
      left = currentLeft;
      right = i;
    }

    if (current < 0) {
      current = 0;
      currentLeft = i + 1;
    }
  }
  return {
    sum: best,
    left: left,
    right: right
  }
}

// function getMaxSubarray(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // для каждого элемента массива
//     partialSum += item; // добавляем значение элемента к partialSum
//     maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//     if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//   }

//   return maxSum;
// }

const num = [100, -9, 2, -3, 5]; ////100
//const num = [2, -1, 2, 3, -9]; ////6
//const num = [-9, 2, -100, 300, 5]; ////305
//const num = [1, -1, 2, 3, -9, 18,]; ////18

console.log(num);
console.log(getMaxSubarray(num));