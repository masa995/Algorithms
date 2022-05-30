function matrixMultiply(arrayA, arrayB) {
  let arrayC = [];
  for (let i = 0; i < arrayA.length; i++) {
    arrayC.push(new Array(arrayA.length).fill(0));
  }

  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayA.length; j++) {
      for (let k = 0; k < arrayA.length; k++) {
        arrayC[i][j] = arrayC[i][j] + arrayA[i][k] * arrayB[k][j];
      }
    }
  }
  return arrayC
}

const arrayA = [
  [1, 3],
  [2, 5]
];
const arrayB = [
  [3, 2],
  [4, 3]
];

console.log(matrixMultiply(arrayA, arrayB));



