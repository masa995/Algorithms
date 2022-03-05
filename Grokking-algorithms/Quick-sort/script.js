function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[Math.floor(Math.random() * arr.length)],
    less = arr.filter(el => el < pivot),
    equal = arr.filter(el => el === pivot),
    greater = arr.filter(el => el > pivot);

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

const nums = [0, 2, 2, 1, 5, 3, 89];
console.log(quickSort(nums));