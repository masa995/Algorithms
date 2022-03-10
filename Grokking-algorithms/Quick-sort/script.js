function quickSort(array) {
  let arr = array.slice();  //array immutable
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = arr.filter(el => el < pivot);
  const middle = arr.filter(el => el === pivot);
  const more = arr.filter(el => el > pivot);

  return [...quickSort(less), ...middle, ...quickSort(more)]; //Spread  
}

const nums = [1, 3, 0, 1, 55, 9];
console.log(quickSort(nums));
console.log('Array nums ' + nums);