const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [NKString, ...lansString] = input;
const [N, K] = NKString.split(' ').map(Number);
const lans = lansString.map(Number);

const maxLength = Math.max(...lans);

let left = 1;
let right = maxLength;
let answer;

while (left <= right) {
  let center = Math.floor((left + right) / 2);

  const count = lans.reduce((count, lan) => count + Math.floor(lan / center), 0);

  if (count < K) {
    right = center - 1;
  } else {
    left = center + 1;
    answer = center;
  }
}

console.log(answer);
