const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const nls = input.slice(0, N);
const nss = input.slice(-M);

const map = new Map();

for (let i = 0; i < N; i++) {
  const nl = nls[i];

  map.set(nl, (map.get(nl) ?? 0) + 1);
}

for (let i = 0; i < N; i++) {
  const ns = nss[i];

  map.set(ns, (map.get(ns) ?? 0) + 1);
}

const answer = Array.from(map.entries())
  .filter(([, value]) => value === 2)
  .map(([key]) => key)
  .sort();

console.log(answer.length);
console.log(answer.join('\n'));
