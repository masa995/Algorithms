let stack1 = [];
let stack2 = [];

function enqueueStack(x) {
  while (stack1.length !== 0) {
    let elem = stack1.pop();
    stack2.push(elem);
  }

  stack1.push(x)

  while (stack2.length !== 0) {
    let elem = stack2.pop();
    stack1.push(elem);
  }
}

function dequeueStack(stack1) {
  stack1.pop();
}

enqueueStack(1);
console.log(stack1);
enqueueStack(2);
console.log(stack1);
enqueueStack(3);
console.log(stack1);
enqueueStack(4);
console.log(stack1);

dequeueStack(stack1);


console.log(stack1);