const fs = require("fs");
const inputString = fs.readFileSync("/dev/stdin").toString().trim();
const input = inputString.split('\n');

const [...numbers] = input;

const remainderSet = new Set();

numbers.forEach(number => remainderSet.add(number % 42));

console.log(remainderSet.size);