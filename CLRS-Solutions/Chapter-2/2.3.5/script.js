const arr = [1, 3, 6, 8, 9, 9, 9, 10];
//const arr = [9, 30];
//======================================================================================================================
/**   RECURSIVE METHOD */
const low = -1;
const hight = arr.length;

function binarySearchRecursive(arr, el, low, hight) {
  let middle = Math.floor((low + hight) / 2);
  if (hight - low === 1) {
    return -1;
  }

  if (arr[middle] === el) {
    return middle;
  } else if (arr[middle] > el) {
    return binarySearchRecursive(arr, el, low, middle)
  } else if (arr[middle] < el) {
    return binarySearchRecursive(arr, el, middle, hight)
  }
}

//========================================================================================================================
/**   ITERATIVE METHOD*/
function binarySearch(arr, el) {
  let low = -1;
  let hight = arr.length;
  while (hight - low > 1) {
    let middle = Math.floor((low + hight) / 2);
    if (arr[middle] === el) {
      return middle;
    } else if (arr[middle] < el) {
      low = middle;
    } else if (arr[middle] > el) {
      hight = middle;
    }
  }
  return -1;
}

console.log(arr);
console.log(binarySearch(arr, 6) + " binarySearch");
console.log(binarySearch(arr, 30) + " binarySearch");

console.log(binarySearchRecursive(arr, 9, low, hight) + " binarySearchRecursive");
console.log(binarySearchRecursive(arr, 30, low, hight) + " binarySearchRecursive");