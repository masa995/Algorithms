/**
 * 
 * replacement  [array[parent], array[i]] = [array[i], array[parent]]; =>
 * 
 *  buff = array[parent];
    array[parent] = array[i];
    array[i] = buff;
 */

function increaseKey(array, i, key) {
  let parent = Math.floor((i - 1) / 2);
  if (key < array[i]) {
    console.error('Новый ключ меньше текущего');
    return;
  }

  while (i >= 0 && arr[parent] < key) {
    array[i] = array[parent]
    i = parent;
    parent = Math.floor((i - 1) / 2);
  }
  array[i] = key;
  return array;
}

let arr = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
console.log(arr);
console.log(increaseKey(arr, 8, 15));

