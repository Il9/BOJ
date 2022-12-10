const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [numberString1, numberString2] = input[0].split(' ');

const number1 = Number(numberString1.split('').reverse().join(''));
const number2 = Number(numberString2.split('').reverse().join(''));

console.log(number1 > number2 ? number1 : number2);
