const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const T = Number(input.shift());
const Ns = input.map(Number);

const cache = new Map([[0, [1, 0]]]);
let answer = '';

for (let i = 1; i <= 40; i++) {
  const [zeroCount, oneCount] = cache.get(i - 1);

  cache.set(i, [oneCount, zeroCount + oneCount]);
}

for (let i = 0; i < T; i++) {
  answer += `\n${cache.get(Ns[i]).join(' ')}`;
}

console.log(answer.slice(1));
