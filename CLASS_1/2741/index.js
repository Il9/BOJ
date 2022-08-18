const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [numberString] = input;

const [number] = numberString.split(' ').map(Number);

let text = '';

for (let i = 1; i <= number; i++) {
  text += `\n${i}`
}

console.log(text.substring(1));