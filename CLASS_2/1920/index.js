const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [, AString, , XString] = input;

const A = AString.split(' ').map(Number).sort((a, b) => a - b);
const X = XString.split(' ');

function search(n) {
  let min = 0;
  let max = A.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const N  = A[mid];

    if (N === n) {
      return true;
    }

    min = N > n ? min : mid + 1;
    max = N < n ? max : mid - 1;
  }

  return false;
}

let answer = '';
for (let i = 0; i < X.length; i++) {
  answer += `${search(Number(X[i])) ? 1 : 0}\n`;
}

console.log(answer);