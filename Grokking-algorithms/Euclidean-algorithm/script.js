function euclideanAlgorithm(aNum, bNum) {
  if ((aNum === 0) || (bNum === 0)) {
    return (aNum + bNum);
  } else if (aNum > bNum) {
    let remainder = aNum % bNum;
    return euclideanAlgorithm(remainder, bNum);
  } else if (aNum < bNum) {
    let remainder = bNum % aNum;
    return euclideanAlgorithm(aNum, remainder);
  }
}

console.log(euclideanAlgorithm(624960, 49104));
console.log(euclideanAlgorithm(14, 21));
console.log(euclideanAlgorithm(7, 13));


