const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const T = Number(input.shift());
const N = input.map(Number);

const cache = new Map([
  [1, 1],
  [2, 2],
  [3, 4],
]);

for (let i = 4; i <= 11; i++) {
  cache.set(i, cache.get(i - 1) + cache.get(i - 2) + cache.get(i - 3));
}

let answer = '';

for (let i = 0; i < T; i++) {
  answer += `\n${cache.get(N[i])}`;
}

console.log(answer.slice(1));
