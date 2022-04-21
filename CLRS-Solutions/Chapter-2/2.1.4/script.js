function sumOfBinaryNumbers(a, b) {
  let c = new Array(a.length + 1).fill(0);
  if (a.length != b.length) {
    return 'Ошибка! Числа должны быть одинаковой длины.';
  }
  let flag = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    c[i + 1] = a[i] + b[i] + flag;
    if (c[i + 1] > 1) {
      c[i + 1] = c[i + 1] % 2;
      flag = 1;
    } else {
      flag = 0;
    }
  }
  c[0] = flag;

  return c;
}

console.log(sumOfBinaryNumbers([1, 0, 1], [1, 1, 1]));
console.log(sumOfBinaryNumbers([1, 1, 0, 1], [1, 1, 1]));