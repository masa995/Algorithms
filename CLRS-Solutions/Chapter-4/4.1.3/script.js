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
    sum: result,
    left: left,
    right: right
  };
}

function getMaxRecursiveSubarray(array, start, end) {
  if (start === end) {
    return {
      sum: array[start],
      left: start,
      right: end
    }
  }


  let mid = Math.floor((start + end) / 2);
  let leftPart = getMaxRecursiveSubarray(array, start, mid);
  let rightPart = getMaxRecursiveSubarray(array, mid + 1, end);
  let crossPart = getMaxCrossingSubarray(array, start, end, mid);

  if (leftPart.sum >= rightPart.sum && leftPart.sum >= crossPart.sum) {
    return leftPart;
  } else if (rightPart.sum >= leftPart.sum && rightPart.sum >= crossPart.sum) {
    return rightPart;
  } else {
    return crossPart;
  }
}

const num = [1, -1, 2, 3, -9, 18,]; ////18
//const num = [100, -9, 2, -3, 5]; ////100
//const num = [2, -1, 2, 3, -9]; ////6

console.log(num);
console.log(getMaxSubarrayBruteForce(num));
console.log(getMaxRecursiveSubarray(num, 0, num.length - 1));