const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [...numberStrings] = input;

console.log(numberStrings.map(numberString => numberString.split(' ').map(Number)).map(([number1, number2]) => number1 + number2).join('\n'));