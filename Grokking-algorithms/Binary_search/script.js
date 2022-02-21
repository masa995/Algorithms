//const arr = Array.from(Array(25).keys());
const arr = [1, 3, 6, 8, 9, 9, 9, 10];

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
console.log(binarySearch(arr, 9));
console.log(binarySearch(arr, 30));