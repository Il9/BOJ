const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [, ...numbersString] = input;

const numbers = numbersString.map(Number);

let stack = [];
let answer = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  
  if (number === 0) {
    answer = answer - stack.pop();
  } else {
    stack.push(number);
    answer = answer + number;
  }
}

console.log(answer);