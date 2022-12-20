const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const keyChains = input.slice(0, N);
const sites = input.slice(-M);

const map = new Map();
let answer = '';

for (let i = 0; i < N; i++) {
  const [site, password] = keyChains[i].split(' ');

  map.set(site, password);
}

for (let i = 0; i < M; i++) {
  const site = sites[i];

  answer += `\n${map.get(site)}`;
}

console.log(answer.slice(1));
