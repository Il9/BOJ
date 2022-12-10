const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [numberString] = input;
const number = Number(numberString);
const length = numberString.length;

const start = number - Number(numberString.charAt(0)) - (length - 1) * 9;

let answer = 0;

for (let i = start; i <= number; i++) {
  const [...degits] = i.toString();

  if (number === i + degits.reduce((acc, cur) => acc + Number(cur), 0)) {
    answer = i;
    break;
  }
}

console.log(answer);
