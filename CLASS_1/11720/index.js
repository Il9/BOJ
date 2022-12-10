const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [, numberString] = input;

const numbers = numberString.split('').map(Number);

console.log(numbers.reduce((acc, cur) => acc + cur, 0));
