const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [numberString] = input;

const N = Number(numberString);

class Node {
  value;
  next;

  constructor(n) {
    this.value = n;
    this.next = null;
  }
}

class Queue {
  size;
  head;
  tail;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push(n) {
    const node = new Node(n);

    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  shift() {
    const value = this.head.value;

    this.head = this.head.next;

    this.size--;
    return value;
  }
}

const queue = new Queue();

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (queue.size > 1) {
  queue.shift();
  queue.push(queue.shift());
}

console.log(queue.head.value);
