//Size of a power-of-two matrix. The matrix is square
function matrixMultiplyStrassen(arrayA, arrayB) {
  const arrLength = arrayA.length;
  let arrayC;

  if (arrLength === 1) {
    arrayC = [];
    arrayC.push(new Array(arrLength));
    arrayC[0][0] = arrayA[0][0] * arrayB[0][0];
    return arrayC;
  }

  const A11 = matrixSplit(arrayA, 0, arrayA.length / 2, 0, arrayA.length / 2);
  const A12 = matrixSplit(arrayA, 0, arrayA.length / 2, arrayA.length / 2, arrayA.length);
  const A21 = matrixSplit(arrayA, arrayA.length / 2, arrayA.length, 0, arrayA.length / 2);
  const A22 = matrixSplit(arrayA, arrayA.length / 2, arrayA.length, arrayA.length / 2, arrayA.length);

  const B11 = matrixSplit(arrayB, 0, arrayB.length / 2, 0, arrayB.length / 2);
  const B12 = matrixSplit(arrayB, 0, arrayB.length / 2, arrayB.length / 2, arrayB.length);
  const B21 = matrixSplit(arrayB, arrayB.length / 2, arrayB.length, 0, arrayB.length / 2);
  const B22 = matrixSplit(arrayB, arrayB.length / 2, arrayB.length, arrayB.length / 2, arrayB.length);

  const S1 = matrixSubtraction(B12, B22);
  const S2 = matrixSum(A11, A12);
  const S3 = matrixSum(A21, A22);
  const S4 = matrixSubtraction(B21, B11);
  const S5 = matrixSum(A11, A22);
  const S6 = matrixSum(B11, B22);
  const S7 = matrixSubtraction(A12, A22);
  const S8 = matrixSum(B21, B22);
  const S9 = matrixSubtraction(A11, A21);
  const S10 = matrixSum(B11, B12);

  const P1 = matrixMultiplyStrassen(A11, S1);
  const P2 = matrixMultiplyStrassen(S2, B22);
  const P3 = matrixMultiplyStrassen(S3, B11);
  const P4 = matrixMultiplyStrassen(A22, S4);
  const P5 = matrixMultiplyStrassen(S5, S6);
  const P6 = matrixMultiplyStrassen(S7, S8);
  const P7 = matrixMultiplyStrassen(S9, S10)

  const M1 = matrixSum(P5, P4); //P5 + P4
  const M2 = matrixSubtraction(M1, P2); //P5 + P4 - P2
  const M3 = matrixSum(P5, P1); //P5 + P1
  const M4 = matrixSubtraction(M3, P3); //P5 + P1 - P3

  const C11 = matrixSum(M2, P6);
  const C12 = matrixSum(P1, P2);
  const C21 = matrixSum(P3, P4);
  const C22 = matrixSubtraction(M4, P7);

  arrayC = matrixGroup(C11, C12, C21, C22);
  return arrayC;
}

//Secondary functions
function matrixSplit(arr, rowStart, rowEnd, columnStart, columnEnd) {
  let result = [];

  for (let i = rowStart; i < rowEnd; i++) {
    let row = [];
    for (let j = columnStart; j < columnEnd; j++) {
      row.push(arr[i][j])
    }
    result.push(row)
  }

  return result;
}

function matrixSum(arrayA, arrayB) {
  let result = [];
  for (let i = 0; i < arrayA.length; i++) {
    result.push(new Array(arrayA.length).fill(0));
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      result[i][j] = arrayA[i][j] + arrayB[i][j]
    }
  }
  return result;
}

function matrixSubtraction(arrayA, arrayB) {
  let result = [];
  for (let i = 0; i < arrayA.length; i++) {
    result.push(new Array(arrayA.length).fill(0));
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      result[i][j] = arrayA[i][j] - arrayB[i][j]
    }
  }
  return result;
}

function matrixGroup(C11, C12, C21, C22) {
  let result = [];
  let lengthArr = C11.length
  let lengthNewArr = C11.length * 2;

  for (let i = 0; i < lengthNewArr; i++) {
    result.push(new Array(lengthNewArr).fill(0));
  }

  for (let i = 0; i < lengthArr; i++) {
    for (let j = 0; j < lengthArr; j++) {
      result[i][j] = C11[i][j];
      result[i][j + lengthArr] = C12[i][j];
      result[i + lengthArr][j] = C21[i][j];
      result[i + lengthArr][j + lengthArr] = C22[i][j];
    }
  }
  return result;
}

const arrayA = [
  [1, 3],
  [7, 5]
];
const arrayB = [
  [6, 8],
  [4, 2]
];

console.log(matrixMultiplyStrassen(arrayA, arrayB));