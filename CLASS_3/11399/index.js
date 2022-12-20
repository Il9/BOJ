const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const N = Number(input.shift());
const Ps = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(Ps.reduce(([total, wait], P) => [total + wait + P, wait + P], [0, 0])[0]);
