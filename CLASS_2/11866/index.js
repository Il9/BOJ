const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [NKString] = input;

const [N, K] = NKString.split(' ').map(Number);

const numbers = Array.from(Array(N)).map((_, index) => index + 1);
let i = 0;
const answer = [];

while (numbers.length) {
  i = i + (K - 1);
  while (i >= numbers.length) {
    i = i  >= numbers.length ? i - numbers.length : i;
  }

  answer.push(...numbers.splice(i, 1));
}

console.log(`<${answer.join(', ')}>`);