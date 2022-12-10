const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [...numberStrings] = input;

const numbers = numberStrings.map(Number);

const max = numbers.reduce(
  (acc, cur, index) => {
    if (acc.number >= cur) {
      return acc;
    }

    return {
      index,
      number: cur,
    };
  },
  { index: 0, number: numbers[0] }
);

console.log(max.number);
console.log(max.index + 1);
