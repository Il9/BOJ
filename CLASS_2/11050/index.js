const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [NKString] = input;

const [N, K] = NKString.split(' ').map(Number);

function factorial(number) {
  if (!number) return 1;

  return number * factorial(number - 1);
}

console.log(factorial(N) / (factorial(N - K) * factorial(K)));
