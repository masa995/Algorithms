function bucketSort(arr, n) {
  if (n <= 0)
    return;

  let buckets = new Array(n);

  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < n; i++) {
    let idx = arr[i] * n;
    buckets[Math.floor(idx)].push(arr[i]);
  }

  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index] = buckets[i][j];
      index++;
    }
  }
  return arr;
}

let arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
console.log(arr);
let n = arr.length;
console.log(bucketSort(arr, n));