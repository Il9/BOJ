const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const N = Number(input.shift());
const S = input.map(Number);

const cache = new Map();

for (let i = 0; i < N; i++) {
  const score = S.at(i);
  const downMaxes = cache.get(i - 1) ?? [0, 0];
  const doubleDownMaxes = cache.get(i - 2) ?? [0, 0];

  const downMax = Math.max(downMaxes[1]);
  const doubleDownMax = Math.max(...doubleDownMaxes);

  cache.set(
    i,
    [downMax, doubleDownMax].map(max => max + score)
  );
}

console.log(Math.max(...cache.get(N - 1)));
