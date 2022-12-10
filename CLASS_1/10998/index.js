const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [numberString] = input;

const [number1, number2] = numberString.split(' ').map(Number);

console.log(number1 * number2);
