const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [numberString] = input;

const [number1] = numberString.split(' ').map(Number);

for (let i = 0; i < number1; i++) {
  console.log('*'.repeat(i + 1))
}