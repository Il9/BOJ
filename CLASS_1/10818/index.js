const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [, numberString] = input;

const numbers = numberString.split(' ').map(Number);

const mm = numbers.reduce((acc, cur) => ({ min: acc.min > cur ? cur : acc.min, max: acc.max < cur ? cur : acc.max }), {min: numbers[0], max: numbers[0]})

console.log(mm.min, mm.max);