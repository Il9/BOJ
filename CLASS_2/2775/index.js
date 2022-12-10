const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [lengthString, ...numberStrings] = input;

const length = Number(lengthString);
const numbers = numberStrings.map(Number);

function family(k, n) {
  if (!k) return n;
  if (n === 1) return 1;

  return family(k, n - 1) + family(k - 1, n);
}

for (let i = 0; i < length; i++) {
  const k = numbers.shift();
  const n = numbers.shift();

  console.log(family(k, n));
}
