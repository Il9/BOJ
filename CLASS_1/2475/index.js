const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [numberString] = input;

const numbers = numberString.split(' ').map(Number);

console.log(numbers.reduce((acc, cur) => acc + cur * cur, 0) % 10);