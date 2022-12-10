const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [NString, ...commands] = input;

class Queue {
  queue = [];

  push(value) {
    this.queue.push(value);
  }

  pop() {
    return this.queue.shift() ?? -1;
  }

  size() {
    return this.queue.length;
  }

  empty() {
    return this.queue.length ? 0 : 1;
  }

  front() {
    return this.queue.at(0) ?? -1;
  }

  back() {
    return this.queue.at(-1) ?? -1;
  }
}

const queue = new Queue();
let answer = '';

for (let i = 0; i < Number(NString); i++) {
  const command = commands[i];

  if (command.includes('push')) {
    queue.push(command.split(' ')[1]);
  } else {
    answer += answer ? '\n' : '';
    answer += queue[command]();
  }
}

console.log(answer);
