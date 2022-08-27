const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [, ...numberStrings] = input;

const numbers = numberStrings.map(Number);

console.log(numbers.sort((a, b) => a - b).join('\n'));