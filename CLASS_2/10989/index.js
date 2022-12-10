const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [lengthString, ...numberStrings] = input;

const length = Number(lengthString);
const numbers = numberStrings.map(Number);

const arr = [];

for (let i = 0; i < length; i++) {
  arr[numbers[i]] = (arr[numbers[i]] ?? 0) + 1;
}

for (let j = 1; j <= arr.length; j++) {
  for (let k = 0; k < arr[j]; k++) {
    console.log(j);
  }
}
