function euclideanAlgorithm(aNum, bNum) {
  if ((aNum <= 0) || (bNum <= 0)) {
    let result = aNum + bNum;
    return result;
  } else if (aNum > bNum) {
    let result = aNum % bNum;
    euclideanAlgorithm(result, bNum);
  } else if (aNum < bNum) {
    let result = bNum % aNum;
    euclideanAlgorithm(aNum, result);
  }
  return result;
}

console.log(euclideanAlgorithm(14, 21));
console.log(euclideanAlgorithm(624960, 49104));