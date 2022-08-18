const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [numberString] = input;

const [number] = numberString.split(' ').map(Number);

console.log((!(number % 4) && (number % 100)) || !(number % 400) ? 1 : 0);