const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const N = Number(input.shift());

const cache = [0, 1, 2];

for (let i = 3; i <= N; i++) {
  cache[i] = (cache[i - 1] + cache[i - 2]) % 10007;
}

console.log(cache.at(N));
