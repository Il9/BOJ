const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const numberString = input;

const number = Number(numberString);

let a = Math.ceil((number - 1) / 6);
let i = 0;

while (a > 0) {
  a = a - (++i)
}

console.log(i + 1);