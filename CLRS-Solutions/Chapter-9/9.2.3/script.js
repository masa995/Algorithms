function randomSelectIterative(arr, i) {
  let p = 0;
  let r = arr.length - 1;

  while (r > p) {
    let q = randomPartition();
    let k = q - p + 1;

    if (i === k) {
      return arr[q]
    } else if (i < k) {
      r = q - 1;
    } else {
      p = q + 1;
      i = i - k;
    }
  }
  return arr[p]
}

function randomPartition(arr, p, r) {
  let x = Math.random(p - 1, r);
  [arr[x], arr[r]] = [arr[r], arr[x]];
  return partition(arr, p, r);
}

function partition(arr, p, r) { }