class DobleStack {
  constructor() {
    this.array = new Array(7);
    this.stackTop1 = null;
    this.stackTop2 = null;
  }

  stackPush1(x) {
    if (this.stackTop1 === null) {
      this.stackTop1 = 0;
      this.array[this.stackTop1] = x;
      return
    }
    this.stackTop1++;

    if (this.stackTop1 === this.stackTop2) {
      return console.error('Overflow')
    }

    this.array[this.stackTop1] = x;
  }

  stackPush2(x) {
    if (this.stackTop2 === null) {
      this.stackTop2 = this.array.length - 1;
      this.array[this.stackTop2] = x;
      return
    }

    this.stackTop2--;

    if (this.stackTop1 === this.stackTop2) {
      return console.error('Overflow');

    }

    this.array[this.stackTop2] = x;
  }

  stackPop1() {
    if (this.stackTop1 < 0) {
      return console.error('Underflow');
    }

    this.stackTop1--;
  }

  stackPop2() {
    if (this.stackTop2 > this.array.length - 1) {
      return console.error('Underflow');
    }

    this.stackTop2++;
  }

  print() {
    return `Первый указатель: ${this.stackTop1} 
    Второй указатель: ${this.stackTop2}
    Массив: ${this.array}`
  }
}

const dobleStack = new DobleStack();
dobleStack.stackPush1(11);
dobleStack.stackPush1(12);
dobleStack.stackPush1(13);
dobleStack.stackPush2(220);
dobleStack.stackPush2(221);
dobleStack.stackPush2(222);

dobleStack.stackPop1();
dobleStack.stackPop1();

console.log(dobleStack.print());