const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [TString, ...rest] = input;

const T = Number(TString);
const tests = rest.reduce((tests, line, index) => {
  switch (index % 3) {
    case 0:
      tests.push([line]);
      break;

    case 1:
      tests.at(-1).push(Number(line));
      break;

    case 2:
      tests.at(-1).push(line.slice(1, -1).split(','));
      break;
  }

  return tests;
}, []);

class Node {
  value;
  next;
  prev;

  constructor(value) {
    this.value = value;
  }
}

class Deque {
  head;
  tail;

  constructor(array) {
    let prevNode = null;

    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const node = new Node(value);

      if (i === 0) {
        this.head = node;
      }
      if (i === array.length - 1) {
        this.tail = node;
      }

      if (prevNode) {
        prevNode.next = node;
        node.prev = prevNode;
      }

      prevNode = node;
    }
  }

  shift() {
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    }
  }

  pop() {
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    }
  }

  toString(isReversed) {
    let str = '';
    let now = isReversed ? this.tail : this.head;

    while (now) {
      str += ',' + now.value;
      now = isReversed ? now.prev : now.next;
    }

    return `[${str.slice(1)}]`;
  }
}

for (let i = 0; i < T; i++) {
  const [commands, length, array] = tests[i];
  const DCommands = commands.match(/D/g);

  if (DCommands && DCommands.length > length) {
    console.log('error');
    continue;
  }

  const deque = new Deque(array);
  let isReversed = false;

  for (let j = 0; j < commands.length; j++) {
    const command = commands.at(j);

    switch (command) {
      case 'D':
        if (!isReversed) {
          deque.shift();
        } else {
          deque.pop();
        }
        break;

      case 'R':
        isReversed = !isReversed;
        break;
    }
  }

  console.log(deque.toString(isReversed));
}
