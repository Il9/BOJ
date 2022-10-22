const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [NString, ...commands] = input;

class Stack {
  stack = [];

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop() ?? -1;
  }

  size() {
    return this.stack.length;
  }

  empty() {
    return this.stack.length ? 0 : 1;
  }

  top() {
    return this.stack.at(-1) ?? -1;
  }
}

const stack = new Stack();
let answer = '';

for (let i = 0; i < Number(NString); i++) {
  const command = commands[i];

  if (command.includes('push')) {
    stack.push(command.split(' ')[1]);
  } else {
    answer += answer ? '\n' : '';
    answer += stack[command]();
  }
}

console.log(answer);