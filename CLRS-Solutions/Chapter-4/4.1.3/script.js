function getMaxSubarrayBruteForce(array, start, end) {
  let left = start;
  let right = end;
  let sum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let sumArr = 0
    for (let j = i; j < array.length; j++) {
      sumArr += array[j];
      if (sum < sumArr) {
        sum = sumArr;
        left = i;
        right = j;
      }
    }
  }
  return {
    sum: sum,
    left: left,
    right: right
  };
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function getMaxCrossingSubarray(array, start, end, mid) {
  let leftSum = -Infinity;
  let rightSum = -Infinity;
  let sum = 0;
  let left;
  let right;


  for (let i = mid; i >= start; i--) {
    sum += array[i];
    if (leftSum < sum) {
      leftSum = sum;
      left = i;
    }
  }

  sum = 0;
  for (let j = mid + 1; j <= end; j++) {
    sum += array[j];
    if (rightSum < sum) {
      rightSum = sum;
      right = j;
    }
  }
  let result = rightSum + leftSum;
  return {
    result: result,
    start: start,
    end: end
  };
}

function getMaxRecursiveSubarray(array, start, end) {
  if (start === end) {
    return {
      result: array[start],
      start: start,
      end: start
    }
  }

  let mid = Math.floor((start + end) / 2);
  let leftPart = getMaxRecursiveSubarray(array, start, mid);
  let rightPart = getMaxRecursiveSubarray(array, mid + 1, end);
  let crossPart = getMaxCrossingSubarray(array, start, end, mid);

  if (leftPart.result > rightPart.result && leftPart.result > crossPart.result) {
    return leftPart;
  } else if (rightPart.result > leftPart.result && rightPart.result > crossPart.result) {
    return rightPart;
  } else return crossPart;
}

const num = [-9, 2, 100, -3, 5];
//const num = [-1, 2, 3, -9];
//const num = [2, -1, 2, 3, -9];
//const num = [13, -3, 25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15 - 4, 7];

console.log(getMaxSubarrayBruteForce(num));
console.log(getMaxRecursiveSubarray(num, 0, num.length - 1));
console.log(num);