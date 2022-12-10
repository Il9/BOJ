const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [numberString] = input;

const [number] = numberString.split(' ').map(Number);

let text = '';

for (let i = number; i > 0; i--) {
  text += `\n${i}`;
}

console.log(text.substring(1));
