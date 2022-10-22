const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [NString, ...commands] = input;

class Deque {
  deque = [];

  push_front(value) {
    return this.deque.unshift(value);
  }

  push_back(value) {
    return this.deque.push(value);
  }

  pop_front() {
    return this.deque.shift() ?? -1;
  }

  pop_back() {
    return this.deque.pop() ?? -1;
  }

  size() {
    return this.deque.length;
  }

  empty() {
    return this.deque.length ? 0 : 1;
  }

  front() {
    return this.deque.at(0) ?? -1;
  }

  back() {
    return this.deque.at(-1) ?? -1;
  }
}

const deque = new Deque();
let answer = '';

for (let i = 0; i < Number(NString); i++) {
  const command = commands[i];

  if (command.includes('push')) {
    const [c, v] = command.split(' ');
    deque[c](v);
  } else {
    answer += answer ? '\n' : '';
    answer += deque[command]();
  }
}

console.log(answer);