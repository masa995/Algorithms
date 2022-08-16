let queue1 = [];
let queue2 = [];

function pushQueue(x) {
  //(O(n))
  while (queue1.length !== 0) {
    let elem = queue1.shift();
    queue2.push(elem);
  }

  queue1.push(x)

  while (queue2.length !== 0) {
    let elem = queue2.shift();
    queue1.push(elem);
  }
}

function popQueue(queue1) {
  //(O(1))
  queue1.shift();
}

pushQueue(1);
console.log(queue1);
pushQueue(2);
console.log(queue1);
pushQueue(3);
console.log(queue1);
pushQueue(4);
console.log(queue1);

popQueue(queue1);
console.log(queue1);