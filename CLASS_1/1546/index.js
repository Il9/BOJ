const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [lengthString, numbersString] = input;
const numbers = numbersString.split(' ').map(Number);

const max = numbers.reduce((acc, cur) => (acc < cur ? cur : acc), 0);

console.log(numbers.reduce((acc, number) => acc + (number / max) * 100, 0) / Number(lengthString));
