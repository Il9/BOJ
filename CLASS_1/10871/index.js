const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [numberString1, numberString2] = input;

const [, number1] = numberString1.split(' ').map(Number);
const numbers = numberString2.split(' ').map(Number);

console.log(numbers.filter(number => number1 > number).join(' '));
