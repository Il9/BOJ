const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [countString, ...cases] = input;

const count = Number(countString);

class Queue {
  queue = [];
  highestPriority = 0;

  constructor(priorities) {
    priorities.forEach((priority, index) => {
      this.queue.push({ priority, index });
    });
  }

  shift() {
    const document = this.queue.shift();

    this.highestPriority = Math.max(...this.queue.map(({ priority }) => priority));

    return document;
  }

  push(document) {
    this.queue.push(document);
  }

  hasHigherPriority(priority) {
    return priority < this.highestPriority;
  }
}

for (let i = 0; i < count; i++) {
  const [NMString, prioritiesString] = cases.slice(i * 2, i * 2 + 2);
  const [N, M] = NMString.split(' ').map(Number);
  const priorities = prioritiesString.split(' ').map(Number);

  const queue = new Queue(priorities);
  let order = 1;

  while (true) {
    const document = queue.shift();

    if (queue.hasHigherPriority(document.priority)) {
      queue.push(document);
    } else {
      if (document.index === M) {
        console.log(order);
        break;
      }

      order++;
    }
  }
}
