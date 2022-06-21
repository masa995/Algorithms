function rangeCountPreprocess(arr, k) {
  let array = arr.slice(0);
  let sizeArr = k + 1;
  let contArr = new Array(sizeArr).fill(0); //создаем пустой массив количества элементов

  for (let j = 0; j < array.length; j++) {
    contArr[array[j]] += 1;  //заполняем массив количества элементов
  }

  //суммираем количества предыдущих элементов с текущем элементом
  for (let i = 1; i < sizeArr; i++) {
    let sum = contArr[i] + contArr[i - 1]
    contArr[i] = sum;
  }
  return contArr;
}

//определяем какое количество элементов, относящиеся к определенному диапозону, находится в массиве 
function rangeCount(countArr, x, y) {
  if (x === 0) {
    return countArr[y];
  }
  console.log(countArr[y] + " - " + countArr[x - 1]);

  return countArr[y] - countArr[x - 1];
}

let array = [2, 5, 3, 0, 2, 3, 0, 3];
console.log(array);
const arrC = rangeCountPreprocess(array, 5)
console.log(rangeCount(arrC, 2, 5));